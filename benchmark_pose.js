const M = 20000;
const N = 20000;

const labeledTimeline = Array.from({length: M}, (_, i) => ({
  nodeId: i % 10,
  timestamp: i * 0.1,
  labels: { poseProxy5: [1, 2, 3], confidence: 0.9 }
}));

// Shuffle labeledTimeline
for (let i = labeledTimeline.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [labeledTimeline[i], labeledTimeline[j]] = [labeledTimeline[j], labeledTimeline[i]];
}

const encodedFeatures = Array.from({length: N}, (_, i) => ({
  nodeId: i % 10,
  timestamp: i * 0.1 + 0.05,
  embedding: [0, 0, 0]
}));

console.time('Baseline');
const poseTrainData1 = [];
for (const ef of encodedFeatures) {
  const tlFrame = labeledTimeline.find(f =>
    f.nodeId === ef.nodeId && Math.abs(f.timestamp - ef.timestamp) < 0.1
  );
  if (tlFrame && tlFrame.labels && tlFrame.labels.poseProxy5) {
    poseTrainData1.push({
      embedding: ef.embedding,
      target: tlFrame.labels.poseProxy5,
      confidence: tlFrame.labels.confidence,
    });
  }
}
console.timeEnd('Baseline');

console.time('Optimized (Node + Sort + Binary Search)');
const nodeFramesSorted = new Map();
for (let i = 0; i < labeledTimeline.length; i++) {
  const f = labeledTimeline[i];
  if (!nodeFramesSorted.has(f.nodeId)) nodeFramesSorted.set(f.nodeId, []);
  // Keep track of original index to preserve `find()` semantics of returning the *first* matching element in the original array
  nodeFramesSorted.get(f.nodeId).push({ f, index: i });
}

for (const frames of nodeFramesSorted.values()) {
  frames.sort((a, b) => a.f.timestamp - b.f.timestamp);
}

const poseTrainData2 = [];
for (const ef of encodedFeatures) {
  const frames = nodeFramesSorted.get(ef.nodeId);
  let bestMatch = null;
  if (frames) {
    let left = 0;
    let right = frames.length - 1;

    // Binary search for the closest timestamp
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (frames[mid].f.timestamp < ef.timestamp) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    // left is now the insertion point. The closest could be left or left - 1.
    // However, since we want *any* within 0.1, we could just scan around the insertion point.
    // But remember we need the *first* match from the original array (lowest original index)
    // to strictly preserve `.find()` semantics.

    // Find all frames within 0.1
    let minIndexMatch = null;
    let scanIdx = left;
    while (scanIdx < frames.length && frames[scanIdx].f.timestamp - ef.timestamp < 0.1) {
       if (!minIndexMatch || frames[scanIdx].index < minIndexMatch.index) {
          minIndexMatch = frames[scanIdx];
       }
       scanIdx++;
    }
    scanIdx = left - 1;
    while (scanIdx >= 0 && ef.timestamp - frames[scanIdx].f.timestamp < 0.1) {
       if (!minIndexMatch || frames[scanIdx].index < minIndexMatch.index) {
          minIndexMatch = frames[scanIdx];
       }
       scanIdx--;
    }

    if (minIndexMatch) {
       bestMatch = minIndexMatch.f;
    }
  }

  if (bestMatch && bestMatch.labels && bestMatch.labels.poseProxy5) {
    poseTrainData2.push({
      embedding: ef.embedding,
      target: bestMatch.labels.poseProxy5,
      confidence: bestMatch.labels.confidence,
    });
  }
}
console.timeEnd('Optimized (Node + Sort + Binary Search)');

// Check equivalence
let same = true;
if (poseTrainData1.length !== poseTrainData2.length) {
    same = false;
    console.log(`Length mismatch: ${poseTrainData1.length} vs ${poseTrainData2.length}`);
} else {
    for (let i = 0; i < poseTrainData1.length; i++) {
        if (poseTrainData1[i].target !== poseTrainData2[i].target) {
            same = false;
        }
    }
}
console.log('Results are same:', same);
