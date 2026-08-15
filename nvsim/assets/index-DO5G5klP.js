import{f as $i,u as Ri,i as j,a as q,b as p,w as ct}from"./lit-BS7WqYd5.js";import{y as f,g as Mi,j as z}from"./signals-SG45zFCj.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=e=>(t,a)=>{a!==void 0?a.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ci={attribute:!0,type:String,converter:Ri,reflect:!1,hasChanged:$i},Pi=(e=Ci,t,a)=>{const{kind:s,metadata:i}=a;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),n.set(a.name,e),s==="accessor"){const{name:l}=a;return{set(m){const u=t.get.call(this);t.set.call(this,m),this.requestUpdate(l,u,e,!0,m)},init(m){return m!==void 0&&this.C(l,void 0,e,m),m}}}if(s==="setter"){const{name:l}=a;return function(m){const u=this[l];t.call(this,m),this.requestUpdate(l,u,e,!0,m)}}throw Error("Unsupported decorator location: "+s)};function da(e){return(t,a)=>typeof a=="object"?Pi(e,t,a):((s,i,n)=>{const l=i.hasOwnProperty(n);return i.constructor.createProperty(n,s),l?Object.getOwnPropertyDescriptor(i,n):void 0})(e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function w(e){return da({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Di=(e,t,a)=>(a.configurable=!0,a.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,a),a);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Hs(e,t){return(a,s,i)=>{const n=l=>l.renderRoot?.querySelector(e)??null;return Di(a,s,{get(){return n(this)}})}}var zi=Object.defineProperty,Oi=Object.getOwnPropertyDescriptor,Ws=(e,t,a,s)=>{for(var i=s>1?void 0:s?Oi(t,a):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(i=(s?l(t,a,i):l(i))||i);return s&&i&&zi(t,a,i),i};let ta=class extends q{constructor(){super(...arguments),this.view="scene"}navigate(e){this.dispatchEvent(new CustomEvent("navigate",{detail:e}))}render(){return p`
      <div class="logo" aria-hidden="true">NV</div>
      <nav role="navigation" aria-label="Primary"
        style="display:flex; flex-direction:column; align-items:center; gap:4px; flex:1;">
      <button class="btn ${this.view==="home"?"active":""}"
        data-id="home-btn" title="Home" aria-label="Home"
        aria-current=${this.view==="home"?"page":"false"}
        @click=${()=>this.navigate("home")}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12L12 4l9 8M5 10v10h14V10"/></svg>
      </button>
      <button class="btn ${this.view==="scene"?"active":""}"
        data-id="scene-btn" title="Scene" aria-label="Scene"
        aria-current=${this.view==="scene"?"page":"false"}
        @click=${()=>this.navigate("scene")}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2L3 7l9 5 9-5-9-5zm0 13l-9-5v6l9 5 9-5v-6l-9 5z"/></svg>
      </button>
      <button class="btn ${this.view==="apps"?"active":""}"
        data-id="apps-btn" title="App Store" aria-label="App Store"
        aria-current=${this.view==="apps"?"page":"false"}
        @click=${()=>this.navigate("apps")}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
      </button>
      <button class="btn ${this.view==="inspector"?"active":""}"
        data-id="inspector-btn" title="Inspector" aria-label="Inspector"
        aria-current=${this.view==="inspector"?"page":"false"}
        @click=${()=>this.navigate("inspector")}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.6" y2="16.6"/></svg>
      </button>
      <button class="btn ${this.view==="witness"?"active":""}"
        data-id="witness-btn" title="Witness" aria-label="Witness"
        aria-current=${this.view==="witness"?"page":"false"}
        @click=${()=>this.navigate("witness")}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/></svg>
      </button>
      <button class="btn ghost ${this.view==="ghost-murmur"?"active":""}"
        data-id="ghost-murmur-btn" title="Ghost Murmur — research spec"
        aria-label="Ghost Murmur research"
        aria-current=${this.view==="ghost-murmur"?"page":"false"}
        @click=${()=>this.navigate("ghost-murmur")}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 2C5.7 2 3 4.7 3 8v12l3-2 3 2 3-2 3 2 3-2 3 2V8c0-3.3-2.7-6-6-6H9z"/>
          <circle cx="9" cy="10" r="1.2" fill="currentColor"/>
          <circle cx="15" cy="10" r="1.2" fill="currentColor"/>
        </svg>
      </button>
      </nav>
      <div class="spacer"></div>
      <button class="btn" data-id="settings-btn" title="Settings" aria-label="Settings"
        @click=${()=>this.dispatchEvent(new CustomEvent("open-settings",{bubbles:!0,composed:!0}))}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06A1.65 1.65 0 0015 19.4a1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09A1.65 1.65 0 0015 4.6a1.65 1.65 0 001.82-.33l.06.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
      </button>
    `}};ta.styles=j`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 0;
      gap: 4px;
      background: var(--bg-1);
      border-right: 1px solid var(--line);
    }
    .logo {
      width: 36px; height: 36px;
      border-radius: 10px;
      background: linear-gradient(135deg, oklch(0.78 0.14 70) 0%, oklch(0.55 0.16 30) 100%);
      display: grid; place-items: center;
      color: #1a0f00;
      font-weight: 700;
      font-family: var(--mono);
      font-size: 11px;
      margin-bottom: 14px;
      box-shadow: 0 4px 12px -2px oklch(0.55 0.16 30 / 0.35);
    }
    .btn {
      width: 36px; height: 36px;
      border-radius: 8px;
      background: transparent;
      border: 1px solid transparent;
      color: var(--ink-3);
      display: grid; place-items: center;
      transition: all 0.15s;
      position: relative;
      cursor: pointer;
    }
    .btn:hover { color: var(--ink); background: var(--bg-2); }
    .btn.active {
      color: var(--ink);
      background: var(--bg-3);
      border-color: var(--line-2);
    }
    .btn.active::before {
      content: ''; position: absolute; left: -10px; top: 8px; bottom: 8px;
      width: 2px; background: var(--accent); border-radius: 2px;
    }
    .btn.ghost.active::before { background: var(--accent-3); }
    .spacer { flex: 1; }
    svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.8; }
  `;Ws([da()],ta.prototype,"view",2);ta=Ws([G("nv-rail")],ta);const ie=f("wasm"),xe=f(""),Xt=f(!1),Ca=f(null),A=f(!1);f(!0);const Qt=f(1),Ii=f(0),Fa=f(0n),Be=f(0xCAFEBABEn),it=f(1e4),rt=f(1e3),nt=f(1),ot=f(!0),Q=f("dark"),pe=f("default"),me=f(!1),wt=f(!0),Pt=f([0,0,0]),Ge=f(0),Ve=f(0),ae=f(0),ue=f(""),ee=f("idle"),we=f(""),je=f(null),Mt=f([]),aa=f([]),sa=f([]),Ct=f([]),ys=f("rebar-walkby-01"),Ni=f(""),At=f(!1),Pa=f("all"),qe=f([]);function Li(e){const t=qe.value.slice();for(t.push(e);t.length>200;)t.shift();qe.value=t}const lt=f([]),ia=f([]),ra=f({});function Fi(e){const t=ia.value.slice();for(t.push(e);t.length>200;)t.shift();ia.value=t;const a={...ra.value};a[e.appId]=(a[e.appId]??0)+1,ra.value=a}const Us=f(new Set),xs=Mi(()=>ie.value==="wasm"?"wasm":"ws");let Bs=null;function Hi(e){Bs=e}function U(){return Bs}const Me=f([]),Wi=200;function g(e,t){if(At.value)return;const a=Me.value.slice();for(a.push({ts:Date.now(),level:e,msg:t});a.length>Wi;)a.shift();Me.value=a}function Ui(e){const a=Mt.value.slice();a.push(e[0]),a.length>200&&a.shift();const s=aa.value.slice();s.push(e[1]),s.length>200&&s.shift();const i=sa.value.slice();i.push(e[2]),i.length>200&&i.shift(),Mt.value=a,aa.value=s,sa.value=i}function Bi(e){const a=Ct.value.slice();for(a.push(Math.max(0,Math.min(1,e)));a.length>48;)a.shift();Ct.value=a}/*! @license DOMPurify 3.4.13 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.13/LICENSE */function ws(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,s=Array(t);a<t;a++)s[a]=e[a];return s}function Vi(e){if(Array.isArray(e))return e}function ji(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var s,i,n,l,m=[],u=!0,y=!1;try{if(n=(a=a.call(e)).next,t!==0)for(;!(u=(s=n.call(a)).done)&&(m.push(s.value),m.length!==t);u=!0);}catch(se){y=!0,i=se}finally{try{if(!u&&a.return!=null&&(l=a.return(),Object(l)!==l))return}finally{if(y)throw i}}return m}}function qi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gi(e,t){return Vi(e)||ji(e,t)||Yi(e,t)||qi()}function Yi(e,t){if(e){if(typeof e=="string")return ws(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?ws(e,t):void 0}}const Vs=Object.entries,ks=Object.setPrototypeOf,Ki=Object.isFrozen,Xi=Object.getPrototypeOf,Qi=Object.getOwnPropertyDescriptor;let B=Object.freeze,V=Object.seal,st=Object.create,js=typeof Reflect<"u"&&Reflect,Ha=js.apply,Wa=js.construct;B||(B=function(t){return t});V||(V=function(t){return t});Ha||(Ha=function(t,a){for(var s=arguments.length,i=new Array(s>2?s-2:0),n=2;n<s;n++)i[n-2]=arguments[n];return t.apply(a,i)});Wa||(Wa=function(t){for(var a=arguments.length,s=new Array(a>1?a-1:0),i=1;i<a;i++)s[i-1]=arguments[i];return new t(...s)});const tt=O(Array.prototype.forEach),Ji=O(Array.prototype.lastIndexOf),Ss=O(Array.prototype.pop),at=O(Array.prototype.push),Zi=O(Array.prototype.splice),Pe=Array.isArray,Et=O(String.prototype.toLowerCase),Da=O(String.prototype.toString),Ts=O(String.prototype.match),kt=O(String.prototype.replace),_s=O(String.prototype.indexOf),er=O(String.prototype.trim),tr=O(Number.prototype.toString),ar=O(Boolean.prototype.toString),As=typeof BigInt>"u"?null:O(BigInt.prototype.toString),Es=typeof Symbol>"u"?null:O(Symbol.prototype.toString),H=O(Object.prototype.hasOwnProperty),St=O(Object.prototype.toString),F=O(RegExp.prototype.test),He=sr(TypeError);function O(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var a=arguments.length,s=new Array(a>1?a-1:0),i=1;i<a;i++)s[i-1]=arguments[i];return Ha(e,t,s)}}function sr(e){return function(){for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return Wa(e,a)}}function x(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Et;if(ks&&ks(e,null),!Pe(t))return e;let s=t.length;for(;s--;){let i=t[s];if(typeof i=="string"){const n=a(i);n!==i&&(Ki(t)||(t[s]=n),i=n)}e[i]=!0}return e}function ir(e){for(let t=0;t<e.length;t++)H(e,t)||(e[t]=null);return e}function K(e){const t=st(null);for(const s of Vs(e)){var a=Gi(s,2);const i=a[0],n=a[1];H(e,i)&&(Pe(n)?t[i]=ir(n):n&&typeof n=="object"&&n.constructor===Object?t[i]=K(n):t[i]=n)}return t}function rr(e){switch(typeof e){case"string":return e;case"number":return tr(e);case"boolean":return ar(e);case"bigint":return As?As(e):"0";case"symbol":return Es?Es(e):"Symbol()";case"undefined":return St(e);case"function":case"object":{if(e===null)return St(e);const t=e,a=ne(t,"toString");if(typeof a=="function"){const s=a(t);return typeof s=="string"?s:St(s)}return St(e)}default:return St(e)}}function ne(e,t){for(;e!==null;){const s=Qi(e,t);if(s){if(s.get)return O(s.get);if(typeof s.value=="function")return O(s.value)}e=Xi(e)}function a(){return null}return a}function nr(e){try{return F(e,""),!0}catch{return!1}}const $s=B(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),za=B(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Oa=B(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),or=B(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ia=B(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),lr=B(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Rs=B(["#text"]),Ms=B(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Na=B(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Cs=B(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Jt=B(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),cr=V(/{{[\w\W]*|^[\w\W]*}}/g),dr=V(/<%[\w\W]*|^[\w\W]*%>/g),pr=V(/\${[\w\W]*/g),ur=V(/^data-[\-\w.\u00B7-\uFFFF]+$/),mr=V(/^aria-[\-\w]+$/),Ps=V(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),hr=V(/^(?:\w+script|data):/i),gr=V(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),vr=V(/^html$/i),fr=V(/^[a-z][.\w]*(-[.\w]+)+$/i),Ds=V(/<[/\w!]/g),zs=V(/<[/\w]/g),br=V(/<\/no(script|embed|frames)/i),yr=V(/\/>/i),te={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},xr=function(){return typeof window>"u"?null:window},wr=function(t,a){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let s=null;const i="data-tt-policy-suffix";a&&a.hasAttribute(i)&&(s=a.getAttribute(i));const n="dompurify"+(s?"#"+s:"");try{return t.createPolicy(n,{createHTML(l){return l},createScriptURL(l){return l}})}catch{return console.warn("TrustedTypes policy "+n+" could not be created."),null}},Os=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},$e=function(t,a,s,i){return H(t,a)&&Pe(t[a])?x(i.base?K(i.base):{},t[a],i.transform):s};function qs(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:xr();const t=d=>qs(d);if(t.version="3.4.13",t.removed=[],!e||!e.document||e.document.nodeType!==te.document||!e.Element)return t.isSupported=!1,t;let a=e.document;const s=a,i=s.currentScript;e.DocumentFragment;const n=e.HTMLTemplateElement,l=e.Node,m=e.Element,u=e.NodeFilter,y=e.NamedNodeMap;y===void 0&&(e.NamedNodeMap||e.MozNamedAttrMap),e.HTMLFormElement;const se=e.DOMParser,Y=e.trustedTypes,I=m.prototype,Oe=ne(I,"cloneNode"),oe=ne(I,"remove"),Ie=ne(I,"nextSibling"),he=ne(I,"childNodes"),T=ne(I,"parentNode"),k=ne(I,"shadowRoot"),N=ne(I,"attributes"),_=l&&l.prototype?ne(l.prototype,"nodeType"):null,D=l&&l.prototype?ne(l.prototype,"nodeName"):null,W=l&&l.prototype?ne(l.prototype,"ownerDocument"):null;if(typeof n=="function"){const d=a.createElement("template");d.content&&d.content.ownerDocument&&(a=d.content.ownerDocument)}let L,ge="",ve,vt=!1,Ne=0;const fe=function(){if(Ne>0)throw He('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},ke=function(r){fe(),Ne++;try{return L.createHTML(r)}finally{Ne--}},Se=function(r){fe(),Ne++;try{return L.createScriptURL(r)}finally{Ne--}},ti=function(){return vt||(ve=wr(Y,i),vt=!0),ve},Lt=a,ha=Lt.implementation,Ya=Lt.createNodeIterator,ai=Lt.createDocumentFragment,si=Lt.getElementsByTagName,ii=s.importNode;let E=Os();t.isSupported=typeof Vs=="function"&&typeof T=="function"&&ha&&ha.createHTMLDocument!==void 0;const ri=cr,ni=dr,oi=pr,li=ur,ci=mr,di=hr,Ka=gr,pi=fr;let Xa=Ps,$=null;const ga=x({},[...$s,...za,...Oa,...Ia,...Rs]);let R=null;const va=x({},[...Ms,...Na,...Cs,...Jt]);let P=Object.seal(st(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ft=null,Qa=null;const Te=Object.seal(st(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Ja=!0,fa=!0,Za=!1,es=!0,_e=!1,Ae=!0,Le=!1,ba=!1,Ft=null,Ht=null,ya=!1,Xe=!1,Wt=!1,Ut=!1,ts=!0,as=!1;const ss="user-content-";let xa=!0,Bt=!1,Qe={},le=null;const wa=x({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let is=null;const rs=x({},["audio","video","img","source","image","track"]);let ka=null;const ns=x({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Vt="http://www.w3.org/1998/Math/MathML",jt="http://www.w3.org/2000/svg",ce="http://www.w3.org/1999/xhtml";let Je=ce,Sa=!1,Ta=null;const ui=x({},[Vt,jt,ce],Da),os=B(["mi","mo","mn","ms","mtext"]);let _a=x({},os);const ls=B(["annotation-xml"]);let Aa=x({},ls);const mi=x({},["title","style","font","a","script"]);let bt=null;const hi=["application/xhtml+xml","text/html"],gi="text/html";let M=null,Ze=null;const vi=a.createElement("form"),cs=function(r){return r instanceof RegExp||r instanceof Function},Ea=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Ze&&Ze===r)return;(!r||typeof r!="object")&&(r={}),r=K(r),bt=hi.indexOf(r.PARSER_MEDIA_TYPE)===-1?gi:r.PARSER_MEDIA_TYPE,M=bt==="application/xhtml+xml"?Da:Et,$=$e(r,"ALLOWED_TAGS",ga,{transform:M}),R=$e(r,"ALLOWED_ATTR",va,{transform:M}),Ta=$e(r,"ALLOWED_NAMESPACES",ui,{transform:Da}),ka=$e(r,"ADD_URI_SAFE_ATTR",ns,{transform:M,base:ns}),is=$e(r,"ADD_DATA_URI_TAGS",rs,{transform:M,base:rs}),le=$e(r,"FORBID_CONTENTS",wa,{transform:M}),ft=$e(r,"FORBID_TAGS",K({}),{transform:M}),Qa=$e(r,"FORBID_ATTR",K({}),{transform:M}),Qe=H(r,"USE_PROFILES")?r.USE_PROFILES&&typeof r.USE_PROFILES=="object"?K(r.USE_PROFILES):r.USE_PROFILES:!1,Ja=r.ALLOW_ARIA_ATTR!==!1,fa=r.ALLOW_DATA_ATTR!==!1,Za=r.ALLOW_UNKNOWN_PROTOCOLS||!1,es=r.ALLOW_SELF_CLOSE_IN_ATTR!==!1,_e=r.SAFE_FOR_TEMPLATES||!1,Ae=r.SAFE_FOR_XML!==!1,Le=r.WHOLE_DOCUMENT||!1,Xe=r.RETURN_DOM||!1,Wt=r.RETURN_DOM_FRAGMENT||!1,Ut=r.RETURN_TRUSTED_TYPE||!1,ya=r.FORCE_BODY||!1,ts=r.SANITIZE_DOM!==!1,as=r.SANITIZE_NAMED_PROPS||!1,xa=r.KEEP_CONTENT!==!1,Bt=r.IN_PLACE||!1,Xa=nr(r.ALLOWED_URI_REGEXP)?r.ALLOWED_URI_REGEXP:Ps,Je=typeof r.NAMESPACE=="string"?r.NAMESPACE:ce,_a=H(r,"MATHML_TEXT_INTEGRATION_POINTS")&&r.MATHML_TEXT_INTEGRATION_POINTS&&typeof r.MATHML_TEXT_INTEGRATION_POINTS=="object"?K(r.MATHML_TEXT_INTEGRATION_POINTS):x({},os),Aa=H(r,"HTML_INTEGRATION_POINTS")&&r.HTML_INTEGRATION_POINTS&&typeof r.HTML_INTEGRATION_POINTS=="object"?K(r.HTML_INTEGRATION_POINTS):x({},ls);const o=H(r,"CUSTOM_ELEMENT_HANDLING")&&r.CUSTOM_ELEMENT_HANDLING&&typeof r.CUSTOM_ELEMENT_HANDLING=="object"?K(r.CUSTOM_ELEMENT_HANDLING):st(null);if(P=st(null),H(o,"tagNameCheck")&&cs(o.tagNameCheck)&&(P.tagNameCheck=o.tagNameCheck),H(o,"attributeNameCheck")&&cs(o.attributeNameCheck)&&(P.attributeNameCheck=o.attributeNameCheck),H(o,"allowCustomizedBuiltInElements")&&typeof o.allowCustomizedBuiltInElements=="boolean"&&(P.allowCustomizedBuiltInElements=o.allowCustomizedBuiltInElements),V(P),_e&&(fa=!1),Wt&&(Xe=!0),Qe&&($=x({},Rs),R=st(null),Qe.html===!0&&(x($,$s),x(R,Ms)),Qe.svg===!0&&(x($,za),x(R,Na),x(R,Jt)),Qe.svgFilters===!0&&(x($,Oa),x(R,Na),x(R,Jt)),Qe.mathMl===!0&&(x($,Ia),x(R,Cs),x(R,Jt))),Te.tagCheck=null,Te.attributeCheck=null,H(r,"ADD_TAGS")&&(typeof r.ADD_TAGS=="function"?Te.tagCheck=r.ADD_TAGS:Pe(r.ADD_TAGS)&&($===ga&&($=K($)),x($,r.ADD_TAGS,M))),H(r,"ADD_ATTR")&&(typeof r.ADD_ATTR=="function"?Te.attributeCheck=r.ADD_ATTR:Pe(r.ADD_ATTR)&&(R===va&&(R=K(R)),x(R,r.ADD_ATTR,M))),H(r,"ADD_URI_SAFE_ATTR")&&Pe(r.ADD_URI_SAFE_ATTR)&&x(ka,r.ADD_URI_SAFE_ATTR,M),H(r,"FORBID_CONTENTS")&&Pe(r.FORBID_CONTENTS)&&(le===wa&&(le=K(le)),x(le,r.FORBID_CONTENTS,M)),H(r,"ADD_FORBID_CONTENTS")&&Pe(r.ADD_FORBID_CONTENTS)&&(le===wa&&(le=K(le)),x(le,r.ADD_FORBID_CONTENTS,M)),xa&&($["#text"]=!0),Le&&x($,["html","head","body"]),$.table&&(x($,["tbody"]),delete ft.tbody),r.TRUSTED_TYPES_POLICY){if(typeof r.TRUSTED_TYPES_POLICY.createHTML!="function")throw He('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof r.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw He('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const c=L;L=r.TRUSTED_TYPES_POLICY;try{ge=ke("")}catch(h){throw L=c,h}}else r.TRUSTED_TYPES_POLICY===null?(L=void 0,ge=""):(L===void 0&&(L=ti()),L&&typeof ge=="string"&&(ge=ke("")));B&&B(r),Ze=r},ds=x({},[...za,...Oa,...or]),ps=x({},[...Ia,...lr]),fi=function(r,o,c){return o.namespaceURI===ce?r==="svg":o.namespaceURI===Vt?r==="svg"&&(c==="annotation-xml"||_a[c]):!!ds[r]},bi=function(r,o,c){return o.namespaceURI===ce?r==="math":o.namespaceURI===jt?r==="math"&&Aa[c]:!!ps[r]},yi=function(r,o,c){return o.namespaceURI===jt&&!Aa[c]||o.namespaceURI===Vt&&!_a[c]?!1:!ps[r]&&(mi[r]||!ds[r])},xi=function(r){let o=T(r);(!o||!o.tagName)&&(o={namespaceURI:Je,tagName:"template"});const c=Et(r.tagName),h=Et(o.tagName);return Ta[r.namespaceURI]?r.namespaceURI===jt?fi(c,o,h):r.namespaceURI===Vt?bi(c,o,h):r.namespaceURI===ce?yi(c,o,h):!!(bt==="application/xhtml+xml"&&Ta[r.namespaceURI]):!1},Ee=function(r){at(t.removed,{element:r});try{T(r).removeChild(r)}catch{if(oe(r),!T(r))throw He("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},qt=function(r){yt(r);const o=he(r);if(o){const h=[];tt(o,v=>{at(h,v)}),tt(h,v=>{try{oe(v)}catch{}})}const c=N(r);if(c)for(let h=c.length-1;h>=0;--h){const v=c[h],b=v&&v.name;if(typeof b=="string")try{r.removeAttribute(b)}catch{}}},Fe=function(r,o){try{at(t.removed,{attribute:o.getAttributeNode(r),from:o})}catch{at(t.removed,{attribute:null,from:o})}if(o.removeAttribute(r),r==="is")if(Xe||Wt)try{Ee(o)}catch{}else try{o.setAttribute(r,"")}catch{}},wi=function(r){const o=N(r);if(o)for(let c=o.length-1;c>=0;--c){const h=o[c],v=h&&h.name;if(!(typeof v!="string"||R[M(v)]))try{r.removeAttribute(v)}catch{}}},yt=function(r){const o=[r];for(;o.length>0;){const c=o.pop();(_?_(c):c.nodeType)===te.element&&wi(c);const v=he(c);if(v)for(let b=v.length-1;b>=0;--b)o.push(v[b])}},ki=function(r){if(!Ae)return;const o=[r];for(;o.length>0;){const c=o.pop(),h=_?_(c):c.nodeType;if(h===te.processingInstruction||h===te.comment&&F(zs,c.data)){try{oe(c)}catch{}continue}if(h===te.element){const b=c,S=M(D?D(c):c.nodeName);try{b.hasAttribute&&b.hasAttribute("patchsrc")&&b.removeAttribute("patchsrc"),b.hasAttribute&&b.hasAttribute("for")&&S!=="label"&&S!=="output"&&b.removeAttribute("for")}catch{}}const v=he(c);if(v)for(let b=v.length-1;b>=0;--b)o.push(v[b])}},us=function(r){let o=null,c=null;if(ya)r="<remove></remove>"+r;else{const b=Ts(r,/^[\r\n\t ]+/);c=b&&b[0]}bt==="application/xhtml+xml"&&Je===ce&&(r='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+r+"</body></html>");const h=L?ke(r):r;if(Je===ce)try{o=new se().parseFromString(h,bt)}catch{}if(!o||!o.documentElement){o=ha.createDocument(Je,"template",null);try{o.documentElement.innerHTML=Sa?ge:h}catch{}}const v=o.body||o.documentElement;return r&&c&&v.insertBefore(a.createTextNode(c),v.childNodes[0]||null),Je===ce?si.call(o,Le?"html":"body")[0]:Le?o.documentElement:v},ms=function(r){const o=W?W(r):r.ownerDocument;return Ya.call(o||r,r,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},Gt=function(r){return r=kt(r,ri," "),r=kt(r,ni," "),r=kt(r,oi," "),r},$a=function(r){var o;r.normalize();const c=W?W(r):r.ownerDocument,h=Ya.call(c||r,r,u.SHOW_TEXT|u.SHOW_COMMENT|u.SHOW_CDATA_SECTION|u.SHOW_PROCESSING_INSTRUCTION,null);let v=h.nextNode();for(;v;)v.data=Gt(v.data),v=h.nextNode();const b=(o=r.querySelectorAll)===null||o===void 0?void 0:o.call(r,"template");b&&tt(b,S=>{et(S.content)&&$a(S.content)})},Yt=function(r){const o=D?D(r):null;return typeof o!="string"||M(o)!=="form"?!1:typeof r.nodeName!="string"||typeof r.textContent!="string"||typeof r.removeChild!="function"||r.attributes!==N(r)||typeof r.removeAttribute!="function"||typeof r.setAttribute!="function"||typeof r.namespaceURI!="string"||typeof r.insertBefore!="function"||typeof r.hasChildNodes!="function"||r.nodeType!==_(r)||r.childNodes!==he(r)},et=function(r){if(!_||typeof r!="object"||r===null)return!1;try{return _(r)===te.documentFragment}catch{return!1}},xt=function(r){if(!_||typeof r!="object"||r===null)return!1;try{return typeof _(r)=="number"}catch{return!1}};function de(d,r,o){d.length!==0&&tt(d,c=>{c.call(t,r,o,Ze)})}const Si=function(r,o){return!!(Ae&&r.hasChildNodes()&&!xt(r.firstElementChild)&&F(Ds,r.textContent)&&F(Ds,r.innerHTML)||Ae&&r.namespaceURI===ce&&o==="style"&&xt(r.firstElementChild)||r.nodeType===te.processingInstruction||Ae&&r.nodeType===te.comment&&F(zs,r.data))},Ti=function(r,o,c){if(!ft[o]&&fs(o)&&(P.tagNameCheck instanceof RegExp&&F(P.tagNameCheck,o)||P.tagNameCheck instanceof Function&&P.tagNameCheck(o)))return!1;if(xa&&!le[o]){const h=T(r),v=he(r);if(v&&h){const b=v.length;for(let S=b-1;S>=0;--S){const C=r===c?Oe(v[S],!0):v[S];h.insertBefore(C,Ie(r))}}}return Ee(r),!0},hs=function(r,o,c,h){return r.length===0?o:o===c||o===h?K(o):o},gs=function(r,o){if(de(E.beforeSanitizeElements,r,null),r!==o&&T(r)===null)return Bt&&yt(r),!0;if(Yt(r))return Ee(r),!0;const c=M(D?D(r):r.nodeName);if($=hs(E.uponSanitizeElement,$,ga,Ft),de(E.uponSanitizeElement,r,{tagName:c,allowedTags:$}),r!==o&&T(r)===null)return Bt&&yt(r),!0;if(Si(r,c))return Ee(r),!0;if(ft[c]||!(Te.tagCheck instanceof Function&&Te.tagCheck(c))&&!$[c]){const v=Ti(r,c,o);return v===!1&&de(E.afterSanitizeElements,r,null),v}if((_?_(r):r.nodeType)===te.element&&!xi(r)||(c==="noscript"||c==="noembed"||c==="noframes")&&F(br,r.innerHTML))return Ee(r),!0;if(_e&&r.nodeType===te.text){const v=Gt(r.textContent);r.textContent!==v&&(at(t.removed,{element:r.cloneNode()}),r.textContent=v)}return de(E.afterSanitizeElements,r,null),!1},vs=function(r,o,c){if(Qa[o]||Ae&&o==="patchsrc"||Ae&&o==="for"&&r!=="label"&&r!=="output"||ts&&(o==="id"||o==="name")&&(c in a||c in vi))return!1;const h=R[o]||Te.attributeCheck instanceof Function&&Te.attributeCheck(o,r);if(!(fa&&F(li,o))){if(!(Ja&&F(ci,o))){if(h){if(!ka[o]){if(!F(Xa,kt(c,Ka,""))){if(!((o==="src"||o==="xlink:href"||o==="href")&&r!=="script"&&_s(c,"data:")===0&&is[r])){if(!(Za&&!F(di,kt(c,Ka,"")))){if(c)return!1}}}}}else if(!(fs(r)&&(P.tagNameCheck instanceof RegExp&&F(P.tagNameCheck,r)||P.tagNameCheck instanceof Function&&P.tagNameCheck(r))&&(P.attributeNameCheck instanceof RegExp&&F(P.attributeNameCheck,o)||P.attributeNameCheck instanceof Function&&P.attributeNameCheck(o,r))||o==="is"&&P.allowCustomizedBuiltInElements&&(P.tagNameCheck instanceof RegExp&&F(P.tagNameCheck,c)||P.tagNameCheck instanceof Function&&P.tagNameCheck(c))))return!1}}return!0},_i=x({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),fs=function(r){return!_i[Et(r)]&&F(pi,r)},Ai=function(r,o,c,h){if(L&&typeof Y=="object"&&typeof Y.getAttributeType=="function"&&!c)switch(Y.getAttributeType(r,o)){case"TrustedHTML":return ke(h);case"TrustedScriptURL":return Se(h)}return h},Ei=function(r,o,c,h){try{c?r.setAttributeNS(c,o,h):r.setAttribute(o,h),Yt(r)?Ee(r):Ss(t.removed)}catch{Fe(o,r)}},bs=function(r){de(E.beforeSanitizeAttributes,r,null);const o=r.attributes;if(!o||Yt(r))return;R=hs(E.uponSanitizeAttribute,R,va,Ht);const c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:R,forceKeepAttr:void 0};let h=o.length;const v=M(r.nodeName);for(;h--;){const b=o[h],S=b.name,C=b.namespaceURI,J=b.value,Z=M(S),Ma=J;let X=S==="value"?Ma:er(Ma);if(c.attrName=Z,c.attrValue=X,c.keepAttr=!0,c.forceKeepAttr=void 0,de(E.uponSanitizeAttribute,r,c),X=c.attrValue,as&&(Z==="id"||Z==="name")&&_s(X,ss)!==0&&(Fe(S,r),X=ss+X),Ae&&F(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,X)){Fe(S,r);continue}if(Z==="attributename"&&Ts(X,"href")){Fe(S,r);continue}if(!c.forceKeepAttr){if(!c.keepAttr){Fe(S,r);continue}if(!es&&F(yr,X)){Fe(S,r);continue}if(_e&&(X=Gt(X)),!vs(v,Z,X)){Fe(S,r);continue}X=Ai(v,Z,C,X),X!==Ma&&Ei(r,S,C,X)}}de(E.afterSanitizeAttributes,r,null)},Kt=function(r){let o=null;const c=ms(r);for(de(E.beforeSanitizeShadowDOM,r,null);o=c.nextNode();)if(de(E.uponSanitizeShadowNode,o,null),gs(o,r),bs(o),et(o.content)&&Kt(o.content),(_?_(o):o.nodeType)===te.element){const v=k(o);et(v)&&(Ra(v),Kt(v))}de(E.afterSanitizeShadowDOM,r,null)},Ra=function(r){const o=[{node:r,shadow:null}];for(;o.length>0;){const c=o.pop();if(c.shadow){Kt(c.shadow);continue}const h=c.node,b=(_?_(h):h.nodeType)===te.element,S=he(h);if(S)for(let C=S.length-1;C>=0;--C)o.push({node:S[C],shadow:null});if(b){const C=D?D(h):null;if(typeof C=="string"&&M(C)==="template"){const J=h.content;et(J)&&o.push({node:J,shadow:null})}}if(b){const C=k(h);et(C)&&o.push({node:null,shadow:C},{node:C,shadow:null})}}};return t.sanitize=function(d){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=null,c=null,h=null,v=null;if(Sa=!d,Sa&&(d="<!-->"),typeof d!="string"&&!xt(d)&&(d=rr(d),typeof d!="string"))throw He("dirty is not a string, aborting");if(!t.isSupported)return d;ba?($=Ft,R=Ht):Ea(r),(E.uponSanitizeElement.length>0||E.uponSanitizeAttribute.length>0)&&($=K($)),E.uponSanitizeAttribute.length>0&&(R=K(R)),t.removed=[];const b=Bt&&typeof d!="string"&&xt(d);if(b){ki(d);const J=D?D(d):d.nodeName;if(typeof J=="string"){const Z=M(J);if(!$[Z]||ft[Z])throw qt(d),He("root node is forbidden and cannot be sanitized in-place")}if(Yt(d))throw qt(d),He("root node is clobbered and cannot be sanitized in-place");try{Ra(d)}catch(Z){throw qt(d),Z}}else if(xt(d))o=us("<!---->"),c=o.ownerDocument.importNode(d,!0),c.nodeType===te.element&&c.nodeName==="BODY"||c.nodeName==="HTML"?o=c:o.appendChild(c),Ra(c);else{if(!Xe&&!_e&&!Le&&d.indexOf("<")===-1)return L&&Ut?ke(d):d;if(o=us(d),!o)return Xe?null:Ut?ge:""}o&&ya&&Ee(o.firstChild);const S=b?d:o;try{const J=ms(S);for(;h=J.nextNode();)gs(h,S),bs(h),et(h.content)&&Kt(h.content)}catch(J){throw b&&(qt(d),tt(t.removed,Z=>{Z.element&&yt(Z.element)})),J}if(b)return tt(t.removed,J=>{J.element&&yt(J.element)}),_e&&$a(d),d;if(Xe){if(_e&&$a(o),Wt)for(v=ai.call(o.ownerDocument);o.firstChild;)v.appendChild(o.firstChild);else v=o;return(R.shadowroot||R.shadowrootmode)&&(v=ii.call(s,v,!0)),v}let C=Le?o.outerHTML:o.innerHTML;return Le&&$["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&F(vr,o.ownerDocument.doctype.name)&&(C="<!DOCTYPE "+o.ownerDocument.doctype.name+`>
`+C),_e&&(C=Gt(C)),L&&Ut?ke(C):C},t.setConfig=function(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ea(d),ba=!0,Ft=$,Ht=R},t.clearConfig=function(){Ze=null,ba=!1,Ft=null,Ht=null,L=ve,ge=""},t.isValidAttribute=function(d,r,o){Ze||Ea({});const c=M(d),h=M(r);return vs(c,h,o)},t.addHook=function(d,r){typeof r=="function"&&H(E,d)&&at(E[d],r)},t.removeHook=function(d,r){if(H(E,d)){if(r!==void 0){const o=Ji(E[d],r);return o===-1?void 0:Zi(E[d],o,1)[0]}return Ss(E[d])}},t.removeHooks=function(d){H(E,d)&&(E[d]=[])},t.removeAllHooks=function(){E=Os()},t}var Gs=qs(),kr=Object.defineProperty,Sr=Object.getOwnPropertyDescriptor,It=(e,t,a,s)=>{for(var i=s>1?void 0:s?Sr(t,a):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(i=(s?l(t,a,i):l(i))||i);return s&&i&&kr(t,a,i),i};let Ye=class extends q{constructor(){super(...arguments),this.open=!1,this.mTitle="",this.mBody="",this.buttons=[],this.onModal=e=>{const t=e.detail;this.mTitle=t.title,this.mBody=t.body,this.buttons=t.buttons??[{label:"Close",variant:"primary"}],this.open=!0,this.setAttribute("open",""),requestAnimationFrame(()=>{const a=this.shadowRoot;if(!a)return;a.querySelector("input, select, textarea, button:not(.close)")?.focus()})},this.onKey=e=>{e.key==="Escape"&&this.open&&this.close()}}connectedCallback(){super.connectedCallback(),window.addEventListener("nv-modal",this.onModal),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("nv-modal",this.onModal),window.removeEventListener("keydown",this.onKey)}updated(){if(!this.open)return;const e=this.shadowRoot;if(!e)return;const t=a=>{if(a.key!=="Tab")return;const s=Array.from(e.querySelectorAll("input, select, textarea, button, [href]")).filter(m=>!m.hasAttribute("disabled"));if(s.length===0)return;const i=s[0],n=s[s.length-1],l=e.activeElement??null;a.shiftKey&&l===i?(a.preventDefault(),n.focus()):!a.shiftKey&&l===n&&(a.preventDefault(),i.focus())};e.removeEventListener("keydown",t),e.addEventListener("keydown",t)}close(){this.open=!1,this.removeAttribute("open")}clickBtn(e){e.onClick?.(),this.close()}render(){return p`
      <div class="modal" role="dialog" aria-modal="true">
        <div class="h">
          <div class="ttl">${this.mTitle}</div>
          <button class="close" @click=${()=>this.close()}>×</button>
        </div>
        <div class="body" .innerHTML=${Gs.sanitize(this.mBody)}></div>
        <div class="f">
          ${this.buttons.map(e=>p`
            <button class=${e.variant??""} @click=${()=>this.clickBtn(e)}>${e.label}</button>
          `)}
        </div>
      </div>
    `}};Ye.styles=j`
    :host {
      position: fixed; inset: 0;
      background: rgba(0,0,0,0.55);
      backdrop-filter: blur(4px);
      z-index: 200;
      display: grid; place-items: center;
      opacity: 0; pointer-events: none;
      transition: opacity 0.18s;
    }
    :host([open]) { opacity: 1; pointer-events: auto; }
    .modal {
      background: var(--bg-1);
      border: 1px solid var(--line-2);
      border-radius: var(--radius);
      box-shadow: 0 30px 80px -20px rgba(0,0,0,0.7);
      width: min(520px, 92vw);
      max-height: 86vh;
      display: flex; flex-direction: column;
      transform: translateY(12px) scale(0.98);
      transition: transform 0.22s cubic-bezier(0.2,0.7,0.3,1);
    }
    :host([open]) .modal { transform: translateY(0) scale(1); }
    .h {
      padding: 14px 16px;
      border-bottom: 1px solid var(--line);
      display: flex; align-items: center; justify-content: space-between;
    }
    .h .ttl { font-size: 14px; font-weight: 600; }
    .body { padding: 16px; overflow-y: auto; font-size: 13px; color: var(--ink-2); line-height: 1.55; }
    .f {
      padding: 12px 16px;
      border-top: 1px solid var(--line);
      display: flex; gap: 8px; justify-content: flex-end;
    }
    button {
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 12.5px;
      cursor: pointer;
      font-family: inherit;
      border: 1px solid var(--line);
      background: var(--bg-2); color: var(--ink);
    }
    button.ghost { background: transparent; }
    button.primary { background: var(--accent); border-color: var(--accent); color: #1a0f00; }
    button.danger { background: var(--bad); border-color: var(--bad); color: #fff; }
    .close {
      width: 28px; height: 28px;
      background: transparent; border: 1px solid var(--line);
      border-radius: 6px;
      color: var(--ink-2);
    }
  `;It([w()],Ye.prototype,"open",2);It([w()],Ye.prototype,"mTitle",2);It([w()],Ye.prototype,"mBody",2);It([w()],Ye.prototype,"buttons",2);Ye=It([G("nv-modal")],Ye);function $t(e){window.dispatchEvent(new CustomEvent("nv-modal",{detail:e}))}var Tr=Object.defineProperty,_r=Object.getOwnPropertyDescriptor,pa=(e,t,a,s)=>{for(var i=s>1?void 0:s?_r(t,a):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(i=(s?l(t,a,i):l(i))||i);return s&&i&&Tr(t,a,i),i};let dt=class extends q{constructor(){super(...arguments),this.visible=!1,this.msg="",this.icon="✓",this.timer=null,this.onToast=e=>{const t=e.detail;this.msg=t.msg??"Done",this.icon=t.icon??"✓",this.visible=!0,this.setAttribute("visible",""),this.timer!==null&&window.clearTimeout(this.timer),this.timer=window.setTimeout(()=>{this.visible=!1,this.removeAttribute("visible")},1800)}}connectedCallback(){super.connectedCallback(),window.addEventListener("nv-toast",this.onToast)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("nv-toast",this.onToast)}render(){return p`<span class="icon">${this.icon}</span><span>${this.msg}</span>`}};dt.styles=j`
    :host {
      position: fixed; bottom: 24px; left: 50%;
      transform: translateX(-50%) translateY(80px);
      background: var(--bg-2);
      border: 1px solid var(--line-2);
      border-radius: var(--radius);
      padding: 10px 14px;
      font-size: 12.5px;
      box-shadow: var(--shadow);
      z-index: 100;
      opacity: 0; pointer-events: none;
      transition: opacity 0.2s, transform 0.2s;
      display: flex; align-items: center; gap: 8px;
    }
    :host([visible]) {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
      pointer-events: auto;
    }
    .icon { color: var(--accent); }
  `;pa([w()],dt.prototype,"visible",2);pa([w()],dt.prototype,"msg",2);pa([w()],dt.prototype,"icon",2);dt=pa([G("nv-toast")],dt);function Re(e,t="✓"){window.dispatchEvent(new CustomEvent("nv-toast",{detail:{msg:e,icon:t}}))}var Ar=Object.getOwnPropertyDescriptor,Er=(e,t,a,s)=>{for(var i=s>1?void 0:s?Ar(t,a):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(i=l(i)||i);return i};let Ua=class extends q{connectedCallback(){super.connectedCallback(),z(()=>{ae.value,xs.value,Be.value,Q.value,ys.value,A.value,this.requestUpdate()})}async toggleRun(){const e=U();e&&(A.value?(await e.pause(),A.value=!1):(await e.run(),A.value=!0))}async reset(){const e=U();e&&await e.reset()}toggleTheme(){Q.value=Q.value==="dark"?"light":"dark"}async openSeedModal(){const e=`0x${Be.value.toString(16).toUpperCase().padStart(8,"0")}`;$t({title:"Set seed",body:`<p>Set the 32-bit hex seed for the shot-noise PRNG. Same <code>(scene, config, seed)</code> → byte-identical witness.</p>
        <label>Hex seed</label>
        <input type="text" id="seed-input" value="${e}" autofocus />`,buttons:[{label:"Cancel",variant:"ghost"},{label:"Apply",variant:"primary",onClick:async()=>{const t=document.querySelector("nv-modal")?.shadowRoot?.querySelector("#seed-input");if(!t)return;const a=t.value.trim().replace(/^0x/i,""),s=BigInt("0x"+a);Be.value=s,await U()?.setSeed(s),g("ok",`seed → 0x${s.toString(16).toUpperCase()}`),Re(`Seed → 0x${s.toString(16).toUpperCase().slice(0,8)}`,"⟳")}}]})}openTransportSettings(){window.dispatchEvent(new CustomEvent("open-settings"))}render(){const e=Be.value.toString(16).toUpperCase().padStart(8,"0");return p`
      <div class="crumbs">
        <span class="home">RuView</span><span class="sep">/</span>
        <span>nvsim</span><span class="sep">/</span>
        <span class="cur" id="scene-name">${ys.value}</span>
      </div>
      <div class="spacer"></div>
      <span class="pill" id="fps-pill">
        <span class="dot"></span>
        <span id="fps-val">${ae.value>0?(ae.value/1e3).toFixed(2)+" kHz":"idle"}</span>
      </span>
      <span class="pill wasm" id="transport-pill" title="Transport settings"
        @click=${this.openTransportSettings}>
        <span class="dot"></span>${xs.value}
      </span>
      <span class="pill seed" id="seed-pill" title="Set seed"
        @click=${this.openSeedModal}>
        seed: <b>0x${e}</b>
      </span>
      <button class="ghost" id="tour-btn" title="Replay the 10-step welcome tour"
        aria-label="Replay welcome tour"
        @click=${()=>window.dispatchEvent(new CustomEvent("nv-show-tour"))}>
        ★ Tour
      </button>
      <button class="ghost" id="help-btn" title="Help (press ? any time)" aria-label="Open help"
        @click=${()=>window.dispatchEvent(new CustomEvent("nv-show-help"))}>
        ?
      </button>
      <button class="ghost" id="theme-btn" title="Toggle theme" aria-label="Toggle theme"
        @click=${this.toggleTheme}>
        ${Q.value==="dark"?"☼":"☾"}
      </button>
      <button id="reset-btn" @click=${this.reset}>↺ Reset</button>
      <button class="primary" id="run-btn" @click=${this.toggleRun}>
        ${A.value?"❚❚ Pause":"▶ Run"}
      </button>
    `}};Ua.styles=j`
    :host {
      display: flex; align-items: center;
      padding: 0 16px; gap: 12px;
      background: var(--bg-1);
      border-bottom: 1px solid var(--line);
      z-index: 10;
    }
    .crumbs { display: flex; align-items: center; gap: 8px; font-size: 12.5px; color: var(--ink-3); }
    .crumbs .sep { color: var(--ink-4); }
    .crumbs .cur { color: var(--ink); font-weight: 500; }
    .spacer { flex: 1; }
    .pill {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 5px 10px;
      background: var(--bg-2); border: 1px solid var(--line);
      border-radius: 999px;
      font-size: 12px; color: var(--ink-2);
      font-family: var(--mono); font-weight: 500;
    }
    .pill .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--ok); box-shadow: 0 0 6px var(--ok); animation: pulse 2s infinite; }
    .pill.wasm .dot { background: var(--accent-2); box-shadow: 0 0 6px var(--accent-2); }
    .pill.seed { color: var(--ink-3); cursor: pointer; }
    .pill.seed:hover { border-color: var(--line-2); }
    .pill.seed b { color: var(--accent); font-weight: 600; }
    .pill.wasm { cursor: pointer; }
    .pill.wasm:hover { border-color: var(--line-2); }
    button {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 6px 12px;
      background: var(--bg-2); border: 1px solid var(--line);
      border-radius: 8px;
      font-size: 12.5px; font-weight: 500; color: var(--ink);
      cursor: pointer;
      transition: all 0.15s;
    }
    button:hover { border-color: var(--line-2); background: var(--bg-3); }
    button.primary { background: var(--accent); border-color: var(--accent); color: #1a0f00; }
    button.primary:hover { filter: brightness(1.08); }
    button.ghost { background: transparent; }
  `;Ua=Er([G("nv-topbar")],Ua);var $r=Object.getOwnPropertyDescriptor,Rr=(e,t,a,s)=>{for(var i=s>1?void 0:s?$r(t,a):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(i=l(i)||i);return i};let La=null;function Zt(){La!==null&&window.clearTimeout(La),La=window.setTimeout(async()=>{const e=U();if(e)try{await e.setConfig({digitiser:{f_s_hz:it.value,f_mod_hz:rt.value},sensor:{gamma_fwhm_hz:1e6,t1_s:.005,t2_s:1e-6,t2_star_s:2e-7,contrast:.03,n_spins:1e12,shot_noise_disabled:!ot.value},dt_s:nt.value*.001}),g("dbg",`config pushed · fs=${it.value} f_mod=${rt.value} dt=${nt.value.toFixed(1)}ms noise=${ot.value?"on":"off"}`)}catch(t){g("warn",`config push failed: ${t.message}`)}},300)}let Ba=class extends q{connectedCallback(){super.connectedCallback(),z(()=>{it.value,rt.value,nt.value,ot.value,A.value,this.requestUpdate()})}render(){return p`
      <div class="panel">
        <div class="panel-h">Scene <span class="count">4 sources</span></div>
        <div class="panel-help">
          Magnetic primitives in the simulated environment. Drag any in the
          canvas to reposition; positions persist across reloads.
        </div>
        <div class="scene-item">
          <span class="swatch" style="background:oklch(0.72 0.18 330)"></span>
          <span class="name">rebar.steel.coil</span>
          <span class="meta">χ=5000</span>
        </div>
        <div class="scene-item">
          <span class="swatch" style="background:oklch(0.78 0.14 195)"></span>
          <span class="name">heart_proxy</span>
          <span class="meta">1e-6 A·m²</span>
        </div>
        <div class="scene-item">
          <span class="swatch" style="background:oklch(0.72 0.18 330)"></span>
          <span class="name">mains_60Hz</span>
          <span class="meta">2 A · 60 Hz</span>
        </div>
        <div class="scene-item">
          <span class="swatch" style="background:oklch(0.78 0.14 145)"></span>
          <span class="name">door.steel</span>
          <span class="meta">eddy</span>
        </div>
      </div>

      <div class="panel">
        <div class="panel-h">NV sensor <span class="count">COTS</span></div>
        <div class="panel-help">
          Element Six DNV-B1 reference: 1 mm³ diamond, ~10¹² NV centers.
          Floor δB ≈ 1.18 pT/√Hz per Barry 2020 §III.A.
          <span class="help-link" title="Open glossary"
            @click=${()=>window.dispatchEvent(new CustomEvent("nv-show-help",{detail:{section:"glossary"}}))}>What's NV?</span>
        </div>
        <div class="field-row" title="Sensing volume (cubic millimetres)"><span class="lbl">V</span><span class="val">1 mm³</span></div>
        <div class="field-row" title="Number of NV centers contributing to readout"><span class="lbl">N</span><span class="val">1e12 NV</span></div>
        <div class="field-row" title="ODMR contrast — fractional dip at resonance"><span class="lbl">C</span><span class="val">0.030</span></div>
        <div class="field-row" title="Inhomogeneous dephasing time T₂*"><span class="lbl">T₂*</span><span class="val">200 ns</span></div>
        <div class="field-row" title="Shot-noise-limited field sensitivity"><span class="lbl">δB</span><span class="val">1.18 pT/√Hz</span></div>
      </div>

      <div class="panel">
        <div class="panel-h">Tunables</div>
        <div class="panel-help">
          Live pipeline parameters. Edits debounce 300 ms then rebuild the
          WASM pipeline without restarting the frame stream.
        </div>
        <div class="slider-row" title="Digitiser sample rate — frames per second emitted by the pipeline">
          <div class="top"><span class="lbl">Sample rate</span><span class="val">${(it.value/1e3).toFixed(1)} kHz</span></div>
          <input type="range" min="1000" max="100000" .value=${String(it.value)}
            aria-label="Sample rate in Hz"
            @input=${e=>{it.value=+e.target.value,Zt()}} />
        </div>
        <div class="slider-row" title="Microwave modulation frequency for lock-in demodulation">
          <div class="top"><span class="lbl">Lockin f_mod</span><span class="val">${(rt.value/1e3).toFixed(3)} kHz</span></div>
          <input type="range" min="100" max="5000" .value=${String(rt.value)}
            aria-label="Lock-in modulation frequency in Hz"
            @input=${e=>{rt.value=+e.target.value,Zt()}} />
        </div>
        <div class="slider-row" title="Per-sample integration time">
          <div class="top"><span class="lbl">Integration t</span><span class="val">${nt.value.toFixed(1)} ms</span></div>
          <input type="range" min="0.1" max="10" step="0.1" .value=${String(nt.value)}
            aria-label="Integration time in milliseconds"
            @input=${e=>{nt.value=+e.target.value,Zt()}} />
        </div>
        <div class="slider-row" title="Toggle shot-noise sampling. OFF = analytic noise-free output (debug only)">
          <div class="top"><span class="lbl">Shot noise</span><span class="val">${ot.value?"ON":"OFF"}</span></div>
          <input type="range" min="0" max="1" .value=${ot.value?"1":"0"}
            aria-label="Shot-noise sampling enabled"
            @input=${e=>{ot.value=e.target.value==="1",Zt()}} />
        </div>
      </div>

      <div class="panel">
        <div class="panel-h">Pipeline</div>
        <div class="panel-help">
          Forward simulator stages, left to right. Stages glow cyan while
          the pipeline is running.
        </div>
        <div class="pipeline">
          <span class="stage ${A.value?"live":""}">scene</span>
          <span class="stage-arrow">→</span>
          <span class="stage ${A.value?"live":""}">B-S</span>
          <span class="stage-arrow">→</span>
          <span class="stage ${A.value?"live":""}">prop</span>
          <span class="stage-arrow">→</span>
          <span class="stage ${A.value?"live":""}">NV</span>
          <span class="stage-arrow">→</span>
          <span class="stage ${A.value?"live":""}">ADC</span>
          <span class="stage-arrow">→</span>
          <span class="stage ${A.value?"live":""}">frame</span>
        </div>
      </div>
    `}};Ba.styles=j`
    :host {
      display: flex; flex-direction: column; gap: 14px;
      padding: 14px; overflow-y: auto;
      background: var(--bg-1); border-right: 1px solid var(--line);
    }
    .panel {
      background: var(--bg-2); border: 1px solid var(--line);
      border-radius: var(--radius); padding: 12px;
    }
    .panel-h {
      display: flex; align-items: center; justify-content: space-between;
      font-size: 11px; font-weight: 600; color: var(--ink-3);
      text-transform: uppercase; letter-spacing: 0.08em;
      margin-bottom: 6px;
    }
    .panel-help {
      font-size: 11.5px; color: var(--ink-3);
      margin: 0 0 10px;
      line-height: 1.5;
    }
    .help-link {
      color: var(--accent-2);
      cursor: pointer;
      text-decoration: underline dotted;
    }
    .help-link:hover { color: var(--accent); }
    .count {
      background: var(--bg-3); color: var(--ink-2);
      padding: 1px 6px; border-radius: 999px;
      font-family: var(--mono); font-size: 10px;
      text-transform: none; letter-spacing: 0;
    }
    .scene-item {
      display: flex; align-items: center; gap: 10px;
      padding: 8px 10px;
      border-radius: var(--radius-sm);
      cursor: pointer;
      transition: background 0.15s;
      border: 1px solid transparent;
    }
    .scene-item:hover { background: var(--bg-3); }
    .scene-item .swatch { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
    .scene-item .name { font-size: 13px; flex: 1; }
    .scene-item .meta { font-family: var(--mono); font-size: 10.5px; color: var(--ink-3); }
    .field-row {
      display: flex; align-items: center; justify-content: space-between;
      padding: 6px 0; font-size: 12.5px;
      border-bottom: 1px solid var(--line);
    }
    .field-row:last-child { border-bottom: 0; }
    .field-row .lbl { color: var(--ink-3); }
    .field-row .val { font-family: var(--mono); color: var(--ink); font-size: 12px; }
    .slider-row { padding: 8px 0; border-bottom: 1px solid var(--line); }
    .slider-row:last-child { border-bottom: 0; padding-bottom: 0; }
    .slider-row .top { display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 12px; }
    .slider-row .top .lbl { color: var(--ink-3); }
    .slider-row .top .val { font-family: var(--mono); color: var(--ink); }
    input[type="range"] {
      -webkit-appearance: none; appearance: none;
      width: 100%; height: 4px;
      background: var(--bg-3); border-radius: 2px; outline: none;
    }
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none; appearance: none;
      width: 14px; height: 14px; border-radius: 50%;
      background: var(--accent); cursor: pointer;
      border: 2px solid var(--bg-2);
      box-shadow: 0 0 0 1px var(--line-2);
    }
    .pipeline { display: flex; gap: 4px; align-items: center; flex-wrap: wrap; margin-top: 6px; }
    .stage {
      flex: 1; min-width: 50px;
      padding: 4px 6px;
      background: var(--bg-3); border: 1px solid var(--line);
      border-radius: 6px; font-size: 9.5px; text-align: center;
      color: var(--ink-2); font-family: var(--mono);
    }
    .stage.live { border-color: var(--accent-2); color: var(--accent-2); }
    .stage-arrow { color: var(--ink-4); font-size: 10px; }
  `;Ba=Rr([G("nv-sidebar")],Ba);var Mr=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,ht=(e,t,a,s)=>{for(var i=s>1?void 0:s?Cr(t,a):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(i=(s?l(t,a,i):l(i))||i);return s&&i&&Mr(t,a,i),i};let De=class extends q{constructor(){super(...arguments),this.zoom=1,this.layerVisible={source:!0,field:!0,label:!0},this.items=[{id:"rebar",x:740,y:240,color:"oklch(0.72 0.18 330)",name:"rebar.steel"},{id:"heart",x:220,y:180,color:"oklch(0.78 0.14 195)",name:"heart_proxy"},{id:"mains",x:180,y:380,color:"oklch(0.72 0.18 330)",name:"mains_60Hz"},{id:"door",x:800,y:470,color:"oklch(0.78 0.14 145)",name:"door.steel"}],this.dragging=null,this.selected=null,this.dragOffset={dx:0,dy:0},this.onKey=e=>{const t=e.target;if(!(t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"))){if(!this.selected){e.key==="Tab"&&document.activeElement===document.body&&(e.preventDefault(),this.selected=this.items[0]?.id??null);return}if(e.key==="ArrowLeft"||e.key==="ArrowRight"||e.key==="ArrowUp"||e.key==="ArrowDown"){e.preventDefault();const a=e.shiftKey?32:8,s=e.key==="ArrowLeft"?-a:e.key==="ArrowRight"?a:0,i=e.key==="ArrowUp"?-a:e.key==="ArrowDown"?a:0;this.items=this.items.map(n=>n.id===this.selected?{...n,x:Math.max(20,Math.min(980,n.x+s)),y:Math.max(20,Math.min(580,n.y+i))}:n),lt.value=this.items.map(({id:n,x:l,y:m})=>({id:n,x:l,y:m}))}else if(e.key==="Tab"){e.preventDefault();const s=(this.items.findIndex(i=>i.id===this.selected)+(e.shiftKey?-1:1)+this.items.length)%this.items.length;this.selected=this.items[s].id}else e.key==="Escape"&&(this.selected=null)}},this.onDown=(e,t)=>{t.preventDefault(),this.dragging=e,this.selected=e;const a=this.items.find(n=>n.id===e);if(!a)return;const s=this.renderRoot.querySelector("svg");if(!s)return;const i=this.toSvg(t,s);this.dragOffset={dx:i.x-a.x,dy:i.y-a.y}},this.onPointerMove=e=>{if(!this.dragging)return;const t=this.renderRoot.querySelector("svg");if(!t)return;const a=this.toSvg(e,t);this.items=this.items.map(s=>s.id===this.dragging?{...s,x:a.x-this.dragOffset.dx,y:a.y-this.dragOffset.dy}:s)},this.onPointerUp=()=>{this.dragging&&(lt.value=this.items.map(({id:e,x:t,y:a})=>({id:e,x:t,y:a}))),this.dragging=null}}connectedCallback(){if(super.connectedCallback(),lt.value.length>0){const e=new Map(lt.value.map(t=>[t.id,t]));this.items=this.items.map(t=>{const a=e.get(t.id);return a?{...t,x:a.x,y:a.y}:t})}z(()=>{Pt.value,Ge.value,ae.value,Ve.value,me.value,A.value,Qt.value,je.value,this.requestUpdate()}),z(()=>{const e=je.value;if(!e)return;const t=Math.sqrt(e.bPt[0]**2+e.bPt[1]**2+e.bPt[2]**2),a=Math.max(Math.abs(e.sigmaPt[0]),Math.abs(e.sigmaPt[1]),Math.abs(e.sigmaPt[2]),.001),s=t/a;Number.isFinite(s)&&(Ve.value=s)}),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),window.addEventListener("keydown",this.onKey)}async toggleRun(){const e=U();e&&(A.value?(await e.pause(),A.value=!1):(await e.run(),A.value=!0))}async stepFwd(){const e=U();e&&(await e.step("fwd",10),g("dbg","sim step → +1 frame"))}async stepBack(){const e=U();e&&(await e.step("back",10),g("dbg","sim step ← -1 frame"))}cycleSpeed(){const e=[.25,.5,1,2,4],t=e.indexOf(Qt.value);Qt.value=e[(t+1)%e.length]}zoomIn(){this.zoom=Math.min(2.5,this.zoom*1.2)}zoomOut(){this.zoom=Math.max(.5,this.zoom/1.2)}fitView(){this.zoom=1}toggleLayer(e){this.layerVisible={...this.layerVisible,[e]:!this.layerVisible[e]}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("keydown",this.onKey)}toSvg(e,t){const a=t.getBoundingClientRect(),s=(e.clientX-a.left)/a.width*1e3,i=(e.clientY-a.top)/a.height*600;return{x:s,y:i}}render(){const e=Pt.value,t=[e[0]*1e9,e[1]*1e9,e[2]*1e9],a=Ge.value*1e9,s=me.value?"":"anim",i=1e3/this.zoom,n=600/this.zoom,l=(1e3-i)/2,m=(600-n)/2;return p`
      <div class="grid"></div>
      <svg viewBox="${l.toFixed(1)} ${m.toFixed(1)} ${i.toFixed(1)} ${n.toFixed(1)}"
        preserveAspectRatio="xMidYMid meet" id="scene-svg">
        <defs>
          <radialGradient id="g-sensor" cx="50%" cy="50%" r="50%">
            <stop offset="0" stop-color="oklch(0.78 0.14 70)" stop-opacity="0.4"/>
            <stop offset="1" stop-color="oklch(0.78 0.14 70)" stop-opacity="0"/>
          </radialGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>

        <!-- Field lines from each source to sensor -->
        ${this.layerVisible.field?this.items.map(u=>ct`
          <line class="field-line ${s}" x1=${u.x} y1=${u.y}
            x2="500" y2="320"
            stroke=${u.color} stroke-width="1" stroke-opacity="0.5"/>
        `):""}

        <!-- Source primitives -->
        ${this.layerVisible.source?this.items.map(u=>ct`
          <g class=${`draggable ${this.dragging===u.id?"dragging":""} ${this.selected===u.id?"selected":""}`}
             data-id=${u.id} data-source-id=${u.id}
             transform=${`translate(${u.x.toFixed(0)},${u.y.toFixed(0)})`}
             @pointerdown=${y=>this.onDown(u.id,y)}>
            <ellipse cx="0" cy="0" rx="32" ry="22" fill=${u.color} fill-opacity="0.18"
              stroke=${u.color} stroke-width="1.2"/>
            <circle cx="0" cy="0" r="4" fill=${u.color}/>
            ${this.layerVisible.label?ct`<text class="label" x="0" y="40" text-anchor="middle">${u.name}</text>`:""}
          </g>
        `):""}

        <!-- Sensor (NV diamond) at center -->
        <g id="sensor-g" class="draggable" data-id="sensor" transform="translate(500, 320)">
          <circle cx="0" cy="0" r="46" fill="url(#g-sensor)"/>
          <g class=${`crystal ${s}`} stroke="oklch(0.78 0.14 70)" stroke-width="2"
             fill="oklch(0.78 0.14 70 / 0.08)" filter="url(#glow)">
            <polygon points="0,-22 19,-7 12,18 -12,18 -19,-7"/>
          </g>
          <circle cx="0" cy="0" r="3" fill="var(--accent)"/>
          <text class="label" x="0" y="56" text-anchor="middle">
            sensor · 〈111〉 NV
          </text>
          <text class="label" x="0" y="72" text-anchor="middle">
            B_in: <tspan fill="var(--accent)" id="b-in-svg">[${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)}] nT</tspan>
          </text>
        </g>
      </svg>

      <div class="scene-toolbar" id="scene-toolbar">
        <button id="zoom-in-btn" title="Zoom in" @click=${this.zoomIn}>+</button>
        <button id="zoom-out-btn" title="Zoom out" @click=${this.zoomOut}>−</button>
        <button id="fit-btn" title="Fit to view" @click=${this.fitView}>⊡</button>
        <button id="layer-source-btn" class=${this.layerVisible.source?"on":""}
          title="Sources" @click=${()=>this.toggleLayer("source")}>●</button>
        <button id="layer-field-btn" class=${this.layerVisible.field?"on":""}
          title="Field lines" @click=${()=>this.toggleLayer("field")}>≈</button>
        <button id="layer-label-btn" class=${this.layerVisible.label?"on":""}
          title="Labels" @click=${()=>this.toggleLayer("label")}>T</button>
      </div>

      <div class="sim-controls" id="sim-controls">
        <button class="step" id="step-back-btn" title="Step back" @click=${this.stepBack}>⏮</button>
        <button class="play" id="play-btn" title="Play / pause" @click=${this.toggleRun}>
          ${A.value?"❚❚":"▶"}
        </button>
        <button class="step" id="step-fwd-btn" title="Step forward" @click=${this.stepFwd}>⏭</button>
        <span class="speed" id="speed-val" title="Cycle speed" @click=${this.cycleSpeed}>${Qt.value}×</span>
      </div>

      <div class="scene-readout">
        <div class="stat-card">
          <div class="lbl">|B|</div>
          <div class="val amber" id="bmag-readout">${a.toFixed(3)} nT</div>
        </div>
        <div class="stat-card">
          <div class="lbl">FPS</div>
          <div class="val cyan" id="fps-readout">${ae.value>0?Math.round(ae.value):"—"}</div>
        </div>
        <div class="stat-card">
          <div class="lbl">SNR</div>
          <div class="val mint" id="snr-readout">${Ve.value>0?Ve.value.toFixed(1):"—"}</div>
        </div>
      </div>
    `}};De.styles=j`
    :host {
      display: block; height: 100%; width: 100%;
      background: radial-gradient(ellipse at 50% 30%, var(--bg-2) 0%, var(--bg-0) 70%);
      position: relative; overflow: hidden;
      border-bottom: 1px solid var(--line);
    }
    .grid {
      position: absolute; inset: 0;
      background-image:
        linear-gradient(var(--grid) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid) 1px, transparent 1px);
      background-size: 32px 32px;
      pointer-events: none;
      mask-image: radial-gradient(ellipse at center, black 40%, transparent 100%);
    }
    svg { position: absolute; inset: 0; width: 100%; height: 100%; }
    .stat-card {
      background: rgba(13,17,23,0.7);
      backdrop-filter: blur(8px);
      border: 1px solid var(--line);
      border-radius: var(--radius-sm);
      padding: 8px 12px;
      font-size: 11px;
      min-width: 96px;
    }
    [data-theme="light"] .stat-card { background: rgba(255,255,255,0.85); }
    .stat-card .lbl {
      color: var(--ink-3);
      text-transform: uppercase; font-weight: 600; letter-spacing: 0.06em; font-size: 9.5px;
    }
    .stat-card .val { font-family: var(--mono); font-size: 16px; font-weight: 600; margin-top: 2px; }
    .stat-card .val.amber { color: var(--accent); }
    .stat-card .val.cyan { color: var(--accent-2); }
    .stat-card .val.mint { color: var(--accent-4); }
    .scene-readout {
      position: absolute; top: 14px; right: 14px;
      display: flex; gap: 8px; z-index: 5;
    }
    .draggable { cursor: grab; transition: filter 0.15s; }
    .draggable:hover { filter: brightness(1.15) drop-shadow(0 0 6px currentColor); }
    .draggable.dragging { cursor: grabbing; filter: brightness(1.25) drop-shadow(0 0 10px currentColor); }
    .field-line { stroke-dasharray: 4 6; }
    @keyframes dash { to { stroke-dashoffset: -200; } }
    .field-line.anim { animation: dash 4s linear infinite; }
    @keyframes spin {
      0% { transform: rotateY(0) rotateX(8deg); }
      100% { transform: rotateY(360deg) rotateX(8deg); }
    }
    .crystal { transform-origin: center; transform-box: fill-box; }
    .crystal.anim { animation: spin 12s linear infinite; }
    .label {
      font-family: var(--mono); font-size: 11px; fill: var(--ink-2);
      pointer-events: none;
    }
    .scene-toolbar {
      position: absolute; top: 14px; left: 14px;
      display: flex; gap: 6px; z-index: 5;
      background: rgba(13,17,23,0.85);
      backdrop-filter: blur(8px);
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 4px;
    }
    [data-theme="light"] .scene-toolbar { background: rgba(255,255,255,0.85); }
    .scene-toolbar button {
      width: 28px; height: 28px;
      background: transparent;
      border: 1px solid transparent;
      border-radius: 6px;
      color: var(--ink-2);
      cursor: pointer;
      display: grid; place-items: center;
      font-size: 13px;
    }
    .scene-toolbar button:hover { color: var(--ink); background: var(--bg-2); }
    .scene-toolbar button.on { background: var(--bg-3); color: var(--accent); border-color: var(--line-2); }

    .sim-controls {
      position: absolute; bottom: 14px; right: 14px;
      display: flex; gap: 6px; align-items: center;
      background: rgba(13,17,23,0.85);
      backdrop-filter: blur(12px);
      border: 1px solid var(--line-2);
      border-radius: 999px;
      padding: 6px 10px;
      z-index: 5;
    }
    [data-theme="light"] .sim-controls { background: rgba(255,255,255,0.92); }
    .sim-controls .play {
      width: 32px; height: 32px;
      background: var(--accent);
      border: none;
      border-radius: 50%;
      color: #1a0f00;
      cursor: pointer;
      display: grid; place-items: center;
      font-size: 13px;
    }
    .sim-controls .play:hover { filter: brightness(1.08); }
    .sim-controls .step {
      width: 26px; height: 26px;
      border-radius: 6px;
      background: transparent;
      color: var(--ink-2);
      border: 1px solid var(--line);
      cursor: pointer;
      font-size: 11px;
    }
    .sim-controls .step:hover { color: var(--ink); border-color: var(--line-2); }
    .sim-controls .speed {
      font-family: var(--mono); font-size: 11px;
      color: var(--ink-2);
      padding: 0 6px;
      min-width: 36px;
      text-align: center;
      cursor: pointer;
    }
  `;ht([w()],De.prototype,"zoom",2);ht([w()],De.prototype,"layerVisible",2);ht([w()],De.prototype,"items",2);ht([w()],De.prototype,"dragging",2);ht([w()],De.prototype,"selected",2);De=ht([G("nv-scene")],De);var Pr=Object.defineProperty,Dr=Object.getOwnPropertyDescriptor,ua=(e,t,a,s)=>{for(var i=s>1?void 0:s?Dr(t,a):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(i=(s?l(t,a,i):l(i))||i);return s&&i&&Pr(t,a,i),i};let pt=class extends q{constructor(){super(...arguments),this.tab="signal",this.pinTab=null,this.expanded=!1}connectedCallback(){super.connectedCallback(),z(()=>{Mt.value,aa.value,sa.value,Ct.value,je.value,ue.value,ee.value,Pt.value,Ge.value,this.requestUpdate()})}willUpdate(e){e.has("pinTab")&&this.pinTab&&this.tab!==this.pinTab&&(this.tab=this.pinTab)}async verify(){const e=U();if(e){ee.value="pending",g("info","verifying witness over 256 frames…");try{const t=we.value,a=new Uint8Array(32);for(let i=0;i<32;i++)a[i]=parseInt(t.slice(i*2,i*2+2),16);const s=await e.verifyWitness(a);if(s.ok)ee.value="ok",ue.value=t,g("ok",`witness ${t.slice(0,16)}… matches · determinism gate ✓`);else{ee.value="fail";const i=Array.from(s.actual).map(n=>n.toString(16).padStart(2,"0")).join("");ue.value=i,g("err",`WITNESS MISMATCH actual=${i.slice(0,16)}…`)}}catch(t){ee.value="fail",g("err",`verify failed: ${t.message}`)}}}renderHeader(){return this.expanded?p`
      <h1 style="margin: 8px 0 14px; font-size: 20px; letter-spacing: -0.01em;">
        ${{signal:"Signal inspector — live B-vector trace + frame stream",frame:"Frame inspector — MagFrame v1 fields + raw bytes",witness:"Witness panel — SHA-256 determinism gate"}[this.tab]}
      </h1>
      <p style="margin: 0 0 18px; font-size: 12.5px; color: var(--ink-3); line-height: 1.55; max-width: 780px;">
        ${this.tab==="signal"?"Real-time recovered field-vector and frame-stream sparkline. Both update at the running pipeline's frame rate. Use the Tunables panel in the sidebar to change f_s, f_mod, dt, and shot-noise behaviour.":this.tab==="frame"?"Decoded view of the most recent MagFrame: typed fields plus the raw 60-byte little-endian binary record (magic 0xC51A_6E70).":"Re-derive the SHA-256 witness for the canonical reference scene (seed=42, N=256) right now in your browser and compare against Proof::EXPECTED_WITNESS_HEX. Same inputs → same hash, byte-for-byte, across every machine and transport."}
      </p>
    `:""}renderSignalTab(){const n=y=>{let se="";return y.forEach((Y,I)=>{const Oe=I/Math.max(1,199)*320,oe=65-Y*22;se+=(I===0?"M":"L")+` ${Oe.toFixed(1)} ${oe.toFixed(1)} `}),se},l=Pt.value,m=[l[0]*1e9,l[1]*1e9,l[2]*1e9],u=Mt.value.length>0;return p`
      ${u?"":p`
        <div class="card" style="text-align:center; padding:18px;">
          <div style="font-size:13px; color:var(--ink-2); line-height:1.55;">
            No frames yet. Press <b>▶ Run</b> in the topbar (or hit <code style="font-family:var(--mono);background:var(--bg-3);padding:1px 5px;border-radius:4px;color:var(--accent);">Space</code>)
            to start the live B-vector trace.
          </div>
        </div>
      `}
      <div class=${this.expanded?"grid-2":""}>
        <div class="card">
          <div class="card-h">
            <span class="ttl">B-vector trace</span>
            <span class="badge">3-axis · nT</span>
          </div>
          <svg viewBox="0 0 ${320} ${130}" preserveAspectRatio="none">
            <line x1="0" y1=${65} x2=${320} y2=${65} stroke="var(--line)" stroke-width="0.5"/>
            ${ct`<path id="trace-x" d=${n(Mt.value)} stroke="oklch(0.78 0.14 70)" stroke-width="1.2" fill="none"/>`}
            ${ct`<path id="trace-y" d=${n(aa.value)} stroke="oklch(0.78 0.12 195)" stroke-width="1.2" fill="none" opacity="0.8"/>`}
            ${ct`<path id="trace-z" d=${n(sa.value)} stroke="oklch(0.72 0.18 330)" stroke-width="1.2" fill="none" opacity="0.7"/>`}
          </svg>
          ${this.expanded?p`<div style="display:flex;gap:14px;font-size:12px;font-family:var(--mono);margin-top:8px;">
            <span style="color:oklch(0.78 0.14 70);">x: ${m[0].toFixed(3)} nT</span>
            <span style="color:oklch(0.78 0.12 195);">y: ${m[1].toFixed(3)} nT</span>
            <span style="color:oklch(0.72 0.18 330);">z: ${m[2].toFixed(3)} nT</span>
            <span style="color:var(--accent);margin-left:auto;">|B| ${(Ge.value*1e9).toFixed(3)} nT</span>
          </div>`:""}
        </div>

        <div class="card">
          <div class="card-h">
            <span class="ttl">Frame stream</span>
            <span class="badge" id="strip-rate">live</span>
          </div>
          <div class="frame-strip" id="frame-strip">
            ${Ct.value.map(y=>p`<div class="bar" style=${`height:${Math.max(4,y*100)}%`}></div>`)}
          </div>
          ${this.expanded?p`
            <div style="display:flex;gap:24px;font-family:var(--mono);font-size:12px;color:var(--ink-3);margin-top:12px;">
              <span>frames in window: <span style="color:var(--ink);">${Ct.value.length}</span></span>
              <span>noise floor: <span style="color:var(--ink);">${je.value?je.value.noiseFloorPtSqrtHz.toFixed(2)+" pT/√Hz":"—"}</span></span>
            </div>`:""}
        </div>
      </div>
    `}renderFrameTab(){const e=je.value,t=e?.raw;let a="";return t&&(a=Array.from(t).map(i=>i.toString(16).padStart(2,"0")).slice(0,60).join(" ")),p`
      ${e?"":p`
        <div class="card" style="text-align:center; padding:18px;">
          <div style="font-size:13px; color:var(--ink-2); line-height:1.55;">
            No MagFrame to display yet. Start the pipeline (<b>▶ Run</b>) to populate.
          </div>
        </div>
      `}
      <div class=${this.expanded?"grid-2":""}>
      <div class="card">
        <div class="card-h">
          <span class="ttl">MagFrame v1 fields</span>
          <span class="badge">60 B</span>
        </div>
        <table>
          <tr><td>magic</td><td id="frame-magic">${e?"0x"+e.magic.toString(16).toUpperCase():"—"}</td></tr>
          <tr><td>version</td><td>${e?.version??"—"}</td></tr>
          <tr><td>flags</td><td>0x${(e?.flags??0).toString(16).padStart(4,"0")}</td></tr>
          <tr><td>sensor_id</td><td>${e?.sensorId??"—"}</td></tr>
          <tr><td>t_us</td><td>${e?e.tUs.toString():"—"}</td></tr>
          <tr><td>b_pT[0]</td><td id="frame-bx">${e?e.bPt[0].toFixed(1):"—"}</td></tr>
          <tr><td>b_pT[1]</td><td id="frame-by">${e?e.bPt[1].toFixed(1):"—"}</td></tr>
          <tr><td>b_pT[2]</td><td id="frame-bz">${e?e.bPt[2].toFixed(1):"—"}</td></tr>
          <tr><td>noise_floor</td><td>${e?e.noiseFloorPtSqrtHz.toFixed(2):"—"}</td></tr>
          <tr><td>temp_K</td><td>${e?e.temperatureK.toFixed(1):"—"}</td></tr>
        </table>
      </div>
      <div class="card">
        <div class="card-h">
          <span class="ttl">Hex dump</span>
          <span class="badge">LE</span>
        </div>
        <div class="hex" id="frame-hex">${a||"—"}</div>
        ${this.expanded?p`
          <div style="font-size: 11.5px; color: var(--ink-3); margin-top: 10px; line-height: 1.6;">
            Layout (little-endian): <code>magic(u32) version(u16) flags(u16) sensor_id(u16) _reserved(u16) t_us(u64) b_pt[3](f32) sigma_pt[3](f32) noise_floor(f32) temp_K(f32)</code>.
          </div>`:""}
      </div>
      </div>
    `}renderWitnessTab(){const e=ee.value,t=e==="ok"?"ok":e==="fail"?"fail":"",a=e==="pending"?"Verifying…":e==="ok"?"✓ Witness verified · determinism gate":e==="fail"?"✗ Witness mismatch · audit required":"Verify witness",s=we.value&&ue.value&&we.value===ue.value;return p`
      ${this.expanded?p`
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:12px;margin-bottom:18px;">
          <div class="card" style="margin:0;">
            <div style="font-size:10px;color:var(--ink-3);text-transform:uppercase;letter-spacing:0.06em;">Reference scene</div>
            <div style="font-family:var(--mono);font-size:14px;color:var(--ink);margin-top:4px;">Proof::REFERENCE</div>
            <div style="font-size:11.5px;color:var(--ink-3);margin-top:2px;">2 dipoles · 1 loop · 1 ferrous · 1 sensor</div>
          </div>
          <div class="card" style="margin:0;">
            <div style="font-size:10px;color:var(--ink-3);text-transform:uppercase;letter-spacing:0.06em;">Seed</div>
            <div style="font-family:var(--mono);font-size:14px;color:var(--accent);margin-top:4px;">0x0000002A</div>
            <div style="font-size:11.5px;color:var(--ink-3);margin-top:2px;">canonical Proof::SEED</div>
          </div>
          <div class="card" style="margin:0;">
            <div style="font-size:10px;color:var(--ink-3);text-transform:uppercase;letter-spacing:0.06em;">Sample count</div>
            <div style="font-family:var(--mono);font-size:14px;color:var(--ink);margin-top:4px;">256</div>
            <div style="font-size:11.5px;color:var(--ink-3);margin-top:2px;">Proof::N_SAMPLES</div>
          </div>
          <div class="card" style="margin:0;">
            <div style="font-size:10px;color:var(--ink-3);text-transform:uppercase;letter-spacing:0.06em;">Status</div>
            <div style="font-family:var(--mono);font-size:14px;margin-top:4px;color:${e==="ok"?"var(--ok)":e==="fail"?"var(--bad)":"var(--ink-3)"};">
              ${e==="ok"?"✓ matches":e==="fail"?"✗ drift":e==="pending"?"… running":"— idle"}
            </div>
            <div style="font-size:11.5px;color:var(--ink-3);margin-top:2px;">${s?"byte-equivalent":"not yet verified"}</div>
          </div>
        </div>
      `:""}
      <div class="card">
        <div class="card-h">
          <span class="ttl">Expected (Proof::EXPECTED_WITNESS_HEX)</span>
          <span class="badge">SHA-256</span>
        </div>
        <div class="witness-box" id="expected-witness">${we.value||"(loading…)"}</div>
      </div>
      <div class="card">
        <div class="card-h">
          <span class="ttl">Actual (last verify)</span>
          <span class="badge">SHA-256</span>
        </div>
        <div class="witness-box" id="actual-witness">${ue.value||"(not verified yet)"}</div>
        <button class="verify-btn ${t}" id="verify-btn" @click=${this.verify}>${a}</button>
      </div>
      ${this.expanded?p`
        <div class="card">
          <div class="card-h">
            <span class="ttl">What this verifies</span>
            <span class="badge">ADR-089 §5</span>
          </div>
          <div style="font-size: 12.5px; color: var(--ink-2); line-height: 1.6;">
            <p style="margin: 0 0 10px;">Pressing <b>Verify</b> runs the canonical reference pipeline
              (<code>Proof::generate</code>) end-to-end inside this browser's WASM Worker:
              scene → Biot-Savart synthesis → material attenuation → NV ensemble → ADC + lock-in →
              concatenated <code>MagFrame</code> bytes → SHA-256.</p>
            <p style="margin: 0 0 10px;">If the resulting hash matches the constant pinned at build time
              (<code>cc8de9b01b0ff5bd…</code>), every constant — γ_e, D_GS, μ₀, T₂*, contrast, the PRNG
              stream, the frame layout, the pipeline ordering — is byte-identical to the published
              reference. If it doesn't match, <i>something</i> drifted; the dashboard names which.</p>
            <p style="margin: 0;">This is the same regression test that runs in
              <code>cargo test -p nvsim</code> — running in your browser, against your own WASM build.</p>
          </div>
        </div>
      `:""}
    `}render(){return p`
      <div class="tabs" role="tablist">
        <button class="tab ${this.tab==="signal"?"active":""}" data-pane="signal"
          role="tab" aria-selected=${this.tab==="signal"}
          @click=${()=>this.tab="signal"}>Signal</button>
        <button class="tab ${this.tab==="frame"?"active":""}" data-pane="frame"
          role="tab" aria-selected=${this.tab==="frame"}
          @click=${()=>this.tab="frame"}>Frame</button>
        <button class="tab ${this.tab==="witness"?"active":""}" data-pane="witness"
          role="tab" aria-selected=${this.tab==="witness"}
          @click=${()=>this.tab="witness"}>Witness</button>
      </div>
      <div class="body" role="tabpanel" tabindex="0">
        ${this.renderHeader()}
        ${this.tab==="signal"?this.renderSignalTab():this.tab==="frame"?this.renderFrameTab():this.renderWitnessTab()}
      </div>
    `}};pt.styles=j`
    :host {
      display: flex; flex-direction: column;
      background: var(--bg-1);
      border-left: 1px solid var(--line);
      overflow: hidden;
      height: 100%;
    }
    :host([expanded]) {
      border-left: 0;
      background: radial-gradient(ellipse at 50% 30%, var(--bg-2) 0%, var(--bg-0) 70%);
    }
    :host([expanded]) .tabs {
      padding: 0 24px;
      background: var(--bg-1);
    }
    :host([expanded]) .tab {
      padding: 16px 22px;
      font-size: 13.5px;
      flex: 0 0 auto;
    }
    :host([expanded]) .body {
      padding: 24px 28px;
      max-width: 1400px;
      width: 100%;
      margin: 0 auto;
    }
    :host([expanded]) .card { padding: 18px 20px; }
    :host([expanded]) .card-h .ttl { font-size: 14px; }
    :host([expanded]) svg { height: 220px; }
    :host([expanded]) .frame-strip { height: 48px; }
    :host([expanded]) table { font-size: 12.5px; }
    :host([expanded]) td { padding: 6px 0; }
    :host([expanded]) .hex { font-size: 12px; padding: 14px; line-height: 1.7; }
    :host([expanded]) .witness-box { font-size: 13px; padding: 14px 16px; line-height: 1.6; }
    :host([expanded]) .verify-btn { padding: 12px; font-size: 13px; }
    :host([expanded]) .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    :host([expanded]) .grid-2 > .card { margin-bottom: 0; }
    @media (max-width: 1024px) {
      :host([expanded]) .grid-2 { grid-template-columns: 1fr; }
    }
    .tabs {
      display: flex; border-bottom: 1px solid var(--line);
    }
    .tab {
      flex: 1;
      padding: 11px 8px;
      background: transparent; border: none;
      font-size: 11.5px; font-weight: 500;
      color: var(--ink-3);
      border-bottom: 2px solid transparent;
      cursor: pointer; transition: color 0.15s, border-color 0.15s;
    }
    .tab.active { color: var(--ink); border-bottom-color: var(--accent); }
    .tab:hover { color: var(--ink-2); }
    .body { padding: 14px; flex: 1; overflow-y: auto; }

    .card {
      background: var(--bg-2); border: 1px solid var(--line);
      border-radius: var(--radius); padding: 12px;
      margin-bottom: 12px;
    }
    .card-h {
      display: flex; justify-content: space-between; align-items: center;
      margin-bottom: 8px;
    }
    .card-h .ttl { font-size: 12px; font-weight: 600; }
    .badge {
      font-family: var(--mono); font-size: 10px;
      padding: 2px 6px;
      background: oklch(0.78 0.14 195 / 0.12);
      color: var(--accent-2);
      border-radius: 4px;
      border: 1px solid oklch(0.78 0.14 195 / 0.3);
    }
    svg { width: 100%; height: 130px; }
    .frame-strip {
      height: 28px;
      display: flex; align-items: flex-end; gap: 1px;
      padding: 4px 0;
    }
    .bar {
      flex: 1;
      background: linear-gradient(to top, var(--accent-2), var(--accent));
      border-radius: 1px;
      min-height: 2px;
    }
    table { width: 100%; border-collapse: collapse; font-family: var(--mono); font-size: 10.5px; }
    td { padding: 4px 0; border-bottom: 1px solid var(--line); }
    td:first-child { color: var(--ink-3); }
    td:last-child { text-align: right; color: var(--ink); }
    .hex {
      background: var(--bg-3);
      border: 1px solid var(--line);
      border-radius: var(--radius-sm);
      padding: 10px;
      font-family: var(--mono);
      font-size: 10.5px;
      color: var(--ink-2);
      line-height: 1.6;
      overflow-x: auto;
      white-space: nowrap;
    }
    .hex .magic { color: var(--accent); font-weight: 600; }
    .witness-box {
      font-family: var(--mono);
      font-size: 11px;
      color: var(--ink-2);
      background: var(--bg-3);
      border: 1px solid var(--line);
      border-radius: 6px;
      padding: 8px 10px;
      word-break: break-all;
      line-height: 1.5;
    }
    .verify-btn {
      margin-top: 10px;
      width: 100%;
      padding: 8px;
      border: 1px solid var(--line);
      background: var(--bg-3);
      color: var(--ink);
      border-radius: 8px;
      cursor: pointer;
      font-family: var(--mono);
      font-size: 12px;
    }
    .verify-btn:hover { border-color: var(--accent); }
    .verify-btn.ok { border-color: var(--ok); color: var(--ok); }
    .verify-btn.fail { border-color: var(--bad); color: var(--bad); }
  `;ua([w()],pt.prototype,"tab",2);ua([da({attribute:!1})],pt.prototype,"pinTab",2);ua([da({type:Boolean,reflect:!0})],pt.prototype,"expanded",2);pt=ua([G("nv-inspector")],pt);var zr=Object.defineProperty,Or=Object.getOwnPropertyDescriptor,Ys=(e,t,a,s)=>{for(var i=s>1?void 0:s?Or(t,a):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(i=(s?l(t,a,i):l(i))||i);return s&&i&&zr(t,a,i),i};let na=class extends q{constructor(){super(...arguments),this.hIdx=-1,this.onKey=e=>{if(e.key==="Enter")this.exec(this.inputEl.value),this.inputEl.value="";else if(e.key==="ArrowUp"){const t=qe.value;t.length&&(this.hIdx=Math.max(0,this.hIdx-1),this.inputEl.value=t[this.hIdx]??"",e.preventDefault())}else if(e.key==="ArrowDown"){const t=qe.value;t.length&&(this.hIdx=Math.min(t.length,this.hIdx+1),this.inputEl.value=t[this.hIdx]??"",e.preventDefault())}}}connectedCallback(){super.connectedCallback(),z(()=>{Me.value,Pa.value,At.value,this.requestUpdate()})}updated(){const e=this.renderRoot.querySelector(".body");e&&(e.scrollTop=e.scrollHeight)}counts(){const e={info:0,warn:0,err:0,dbg:0,ok:0};for(const t of Me.value)e[t.level]=(e[t.level]??0)+1;return e.all=Me.value.length,e}async exec(e){if(e=e.trim(),!e)return;g("info",`<span style="color:var(--accent);">nvsim&gt;</span> ${e}`),Li(e),this.hIdx=qe.value.length;const[t,...a]=e.split(/\s+/),s=a.join(" "),i=U();switch(t){case"help":g("info","commands: help · scene.list · sensor.config · run · pause · reset · seed · proof.verify · proof.export · clear · theme · status");break;case"scene.list":g("info","scene rebar-walkby-01:"),g("info","  rebar.steel.coil   @ [+2.7, 0.0, +0.3] m χ=5000"),g("info","  dipole.heart_proxy @ [-1.4, +0.2, +0.4] m m=1.0e-6 A·m²"),g("info","  loop.mains_60Hz    @ [-1.6, -0.4, 0.0] m I=2 A"),g("info","  eddy.door_steel    @ [+0.0, +1.8, +0.4] m σ=1e6 S/m");break;case"sensor.config":g("info","NvSensor::cots_defaults() {"),g("info","  pos=[0,0,0], V=1mm³, N=1e12, C=0.03, T2*=200ns"),g("info","  D=2.870 GHz, γe=28 GHz/T, Γ=1.0 MHz, axes=4×〈111〉"),g("info","  δB ≈ 1.18 pT/√Hz (Barry 2020 §III.A) }");break;case"run":i&&(await i.run(),A.value=!0,g("ok","pipeline RUN"));break;case"pause":i&&(await i.pause(),A.value=!1,g("warn","pipeline PAUSED"));break;case"reset":i&&(await i.reset(),g("info","pipeline reset · t=0"));break;case"seed":{if(!s){g("info",`current seed = 0x${Be.value.toString(16).toUpperCase()}`);break}const n=BigInt(s.startsWith("0x")?s:"0x"+s);Be.value=n,i&&await i.setSeed(n),g("ok",`seed → 0x${n.toString(16).toUpperCase()}`);break}case"proof.verify":{if(!i)break;g("dbg","computing SHA-256 over 256 frames…");try{const n=we.value,l=new Uint8Array(32);for(let u=0;u<32;u++)l[u]=parseInt(n.slice(u*2,u*2+2),16);(await i.verifyWitness(l)).ok?(ee.value="ok",ue.value=n,g("ok",`witness ${n.slice(0,16)}… matches · determinism gate ✓`)):(ee.value="fail",g("err","WITNESS MISMATCH"))}catch(n){g("err",`verify failed: ${n.message}`)}break}case"proof.export":{if(!i)break;g("dbg","building proof bundle…");try{const n=await i.exportProofBundle(),l=URL.createObjectURL(n),m=document.createElement("a");m.href=l,m.download=`nvsim-proof-${Date.now()}.json`,m.click(),URL.revokeObjectURL(l),g("ok",`proof bundle exported · ${n.size} bytes`)}catch(n){g("err",`export failed: ${n.message}`)}break}case"clear":Me.value=[];break;case"theme":{const n=(s||"").toLowerCase();n==="light"||n==="dark"?(Q.value=n,g("ok",`theme → ${n}`)):g("info","theme [light|dark]");break}case"status":g("info",`running=${A.value} seed=0x${Be.value.toString(16).toUpperCase()} verified=${ee.value}`);break;default:g("err",`unknown command: ${t} · try help`)}}render(){const e=this.counts(),t=Pa.value,a=Me.value.filter(s=>t==="all"||s.level===t);return p`
      <div class="tabs">
        ${["all","info","warn","err","dbg"].map(s=>p`
          <button class="tab ${t===s?"active":""}" data-tab=${s}
            @click=${()=>Pa.value=s}>
            ${s} <span class="cnt">${e[s]??0}</span>
          </button>
        `)}
        <span class="spacer"></span>
        <div class="tools">
          <button id="clear-log" title="Clear" @click=${()=>Me.value=[]}>×</button>
          <button id="pause-log" title="Pause" @click=${()=>At.value=!At.value}>
            ${At.value?"▶":"❚❚"}
          </button>
        </div>
      </div>
      <div class="body" role="log" aria-live="polite" aria-label="Console output">
        ${a.map(s=>{const i=new Date(s.ts),n=`${String(i.getSeconds()).padStart(2,"0")}.${String(i.getMilliseconds()).padStart(3,"0")}`;return p`<div class="line ${s.level}">
            <div class="ts">${n}</div>
            <div class="lvl">${s.level}</div>
            <div class="msg" .innerHTML=${Gs.sanitize(s.msg)}></div>
          </div>`})}
      </div>
      <div class="input">
        <span class="prompt">nvsim&gt;</span>
        <input id="console-input" type="text"
          placeholder="help · scene.list · sensor.config · run · proof.verify · clear"
          @keydown=${this.onKey}/>
      </div>
    `}};na.styles=j`
    :host {
      display: flex; flex-direction: column;
      background: var(--bg-1);
      overflow: hidden;
    }
    .tabs {
      display: flex; align-items: center;
      border-bottom: 1px solid var(--line);
      padding: 0 10px;
      gap: 2px;
    }
    .tab {
      padding: 8px 12px;
      background: transparent; border: none;
      font-size: 11.5px; color: var(--ink-3);
      font-family: var(--mono);
      border-bottom: 2px solid transparent;
      cursor: pointer;
      margin-bottom: -1px;
    }
    .tab.active { color: var(--ink); border-bottom-color: var(--accent); }
    .tab .cnt {
      background: var(--bg-3); padding: 1px 5px; border-radius: 999px;
      font-size: 9.5px; color: var(--ink-2); margin-left: 4px;
    }
    .spacer { flex: 1; }
    .tools { display: flex; gap: 4px; padding: 4px 0; }
    .tools button {
      width: 24px; height: 24px;
      background: transparent; border: 1px solid var(--line);
      border-radius: 6px;
      color: var(--ink-3);
      font-size: 11px; cursor: pointer;
    }
    .tools button:hover { color: var(--ink); border-color: var(--line-2); }

    .body {
      flex: 1; overflow-y: auto;
      font-family: var(--mono);
      font-size: 11.5px;
      padding: 6px 0;
      background: var(--bg-0);
    }
    .line {
      display: grid;
      grid-template-columns: 70px 60px 1fr;
      gap: 12px;
      padding: 2px 12px;
      color: var(--ink-2);
      border-left: 2px solid transparent;
    }
    .line:hover { background: var(--bg-1); }
    .ts { color: var(--ink-2); font-size: 10.5px; padding-top: 1px; }
    .lvl {
      font-size: 10px; font-weight: 600;
      text-transform: uppercase; letter-spacing: 0.04em; padding-top: 1px;
    }
    .line.info .lvl { color: var(--accent-2); }
    .line.warn .lvl { color: var(--warn); }
    .line.warn { border-left-color: var(--warn); background: oklch(0.7 0.18 35 / 0.04); }
    .line.err .lvl { color: var(--bad); }
    .line.err { border-left-color: var(--bad); background: oklch(0.65 0.22 25 / 0.05); }
    .line.dbg .lvl { color: var(--ink-3); }
    .line.ok .lvl { color: var(--ok); }
    .msg { color: var(--ink); white-space: pre-wrap; word-break: break-word; }

    .input {
      display: flex; align-items: center;
      border-top: 1px solid var(--line);
      background: var(--bg-0);
      padding: 0 10px;
      height: 32px; gap: 8px;
    }
    .prompt { color: var(--accent); font-family: var(--mono); font-size: 12px; }
    input[type="text"] {
      flex: 1; background: transparent; border: none; outline: none;
      color: var(--ink); font-family: var(--mono); font-size: 12px;
      height: 100%;
    }
    input::placeholder { color: var(--ink-4); }
  `;Ys([Hs("#console-input")],na.prototype,"inputEl",2);na=Ys([G("nv-console")],na);const Rt=[{id:"nvsim",name:"nvsim — NV-diamond magnetometer",category:"sim",crate:"nvsim",summary:"Deterministic forward simulator: scene → Biot–Savart → NV ensemble → ADC → MagFrame stream + SHA-256 witness.",budget:"L",active:!0,status:"available",tags:["quantum","magnetometer","simulator","witness","wasm"],adr:"ADR-089",runtime:"running"},{id:"gesture",name:"Gesture (DTW)",category:"sig",crate:"wifi-densepose-wasm-edge",summary:"Dynamic-Time-Warping gesture classifier from CSI motion templates.",events:[1],budget:"M",status:"available",tags:["hci","csi","classifier","dtw"],adr:"ADR-014",runtime:"mesh-only"},{id:"coherence",name:"Coherence gate",category:"sig",crate:"wifi-densepose-wasm-edge",summary:"Z-score coherence scoring + Accept/PredictOnly/Reject/Recalibrate gate.",events:[2],budget:"S",status:"available",tags:["gate","csi","coherence","drift"],adr:"ADR-029",runtime:"simulated"},{id:"adversarial",name:"Adversarial-signal detector",category:"ais",crate:"wifi-densepose-wasm-edge",summary:"Physically-impossible-signal detector — multi-link consistency, used to flag spoofed CSI.",events:[3],budget:"M",status:"available",tags:["security","csi","spoofing","mesh"],adr:"ADR-032",runtime:"simulated"},{id:"rvf",name:"RVF — Rust Verified Feature stream",category:"sig",crate:"wifi-densepose-wasm-edge",summary:"Verified-frame builder with SHA-256 hash + version metadata for the feature stream.",budget:"S",status:"available",tags:["witness","csi","hash"],adr:"ADR-040"},{id:"occupancy",name:"Occupancy estimator",category:"bld",crate:"wifi-densepose-wasm-edge",summary:"Through-wall presence + person-count via CSI amplitude perturbation.",events:[300,301,302],budget:"S",status:"available",tags:["csi","building","presence"],runtime:"simulated"},{id:"vital_trend",name:"Vital-trend monitor",category:"med",crate:"wifi-densepose-wasm-edge",summary:"HR + BR trend tracking with bradycardia/tachycardia/apnea events.",events:[100,101,102,103,104,105],budget:"S",status:"available",tags:["medical","vitals","csi"],adr:"ADR-021",runtime:"simulated"},{id:"intrusion",name:"Intrusion detector",category:"sec",crate:"wifi-densepose-wasm-edge",summary:"Zone-based intrusion alert from CSI motion patterns.",events:[200,201],budget:"S",status:"available",tags:["security","zone","csi"],runtime:"simulated"},{id:"med_sleep_apnea",name:"Sleep-apnea detector",category:"med",crate:"wifi-densepose-wasm-edge",summary:"Episodic respiratory pause detection during sleep cycles.",events:[105],budget:"S",status:"available",tags:["medical","sleep","breathing"]},{id:"med_cardiac_arrhythmia",name:"Cardiac arrhythmia",category:"med",crate:"wifi-densepose-wasm-edge",summary:"Beat-to-beat irregularity classifier from cardiac micro-Doppler.",events:[103,104],budget:"M",status:"available",tags:["medical","cardiac","arrhythmia"]},{id:"med_respiratory_distress",name:"Respiratory distress",category:"med",crate:"wifi-densepose-wasm-edge",summary:"Distress signature: rapid shallow breathing + accessory-muscle motion.",events:[101,102],budget:"S",status:"available",tags:["medical","breathing","icu"]},{id:"med_gait_analysis",name:"Gait analysis",category:"med",crate:"wifi-densepose-wasm-edge",summary:"Stride length, cadence, asymmetry from through-wall CSI pose tracking.",budget:"M",status:"available",tags:["medical","gait","pose"]},{id:"med_seizure_detect",name:"Seizure detector",category:"med",crate:"wifi-densepose-wasm-edge",summary:"Tonic-clonic seizure motion signature.",budget:"M",status:"beta",tags:["medical","neuro"]},{id:"sec_perimeter_breach",name:"Perimeter breach",category:"sec",crate:"wifi-densepose-wasm-edge",summary:"Approach/departure detection at user-defined boundary segments.",events:[210,211,212,213],budget:"S",status:"available",tags:["security","perimeter"]},{id:"sec_weapon_detect",name:"Metal anomaly / weapon",category:"sec",crate:"wifi-densepose-wasm-edge",summary:"Metal-perturbation flag in CSI; potential weapon presence (research).",events:[220,221,222],budget:"M",status:"research",tags:["security","metal","csi"]},{id:"sec_tailgating",name:"Tailgating detector",category:"sec",crate:"wifi-densepose-wasm-edge",summary:"Detect 2+ persons crossing a single-passage threshold.",events:[230,231,232],budget:"S",status:"available",tags:["security","access-control"]},{id:"sec_loitering",name:"Loitering detector",category:"sec",crate:"wifi-densepose-wasm-edge",summary:"Stationary occupancy past a configurable dwell threshold.",events:[240,241,242],budget:"S",status:"available",tags:["security","dwell"]},{id:"sec_panic_motion",name:"Panic motion",category:"sec",crate:"wifi-densepose-wasm-edge",summary:"High-energy distress motion: struggle / fleeing pattern.",events:[250,251,252],budget:"S",status:"beta",tags:["security","distress"]},{id:"bld_hvac_presence",name:"HVAC presence",category:"bld",crate:"wifi-densepose-wasm-edge",summary:"Occupied/activity-level/departure-countdown for HVAC zones.",events:[310,311,312],budget:"S",status:"available",tags:["hvac","building","energy"]},{id:"bld_lighting_zones",name:"Lighting zones",category:"bld",crate:"wifi-densepose-wasm-edge",summary:"Per-zone light on/dim/off cues from occupancy.",events:[320,321,322],budget:"S",status:"available",tags:["lighting","building"]},{id:"bld_elevator_count",name:"Elevator count",category:"bld",crate:"wifi-densepose-wasm-edge",summary:"Person count inside elevator car from CSI.",events:[330],budget:"S",status:"available",tags:["elevator","building"]},{id:"bld_meeting_room",name:"Meeting-room utilization",category:"bld",crate:"wifi-densepose-wasm-edge",summary:"Meeting size + duration analytics for booking systems.",budget:"S",status:"available",tags:["meeting","analytics"]},{id:"bld_energy_audit",name:"Energy audit",category:"bld",crate:"wifi-densepose-wasm-edge",summary:"Continuous occupancy-vs-HVAC-state audit for energy savings.",budget:"M",status:"available",tags:["energy","audit"]},{id:"ret_queue_length",name:"Queue length",category:"ret",crate:"wifi-densepose-wasm-edge",summary:"Live queue-length tracking for checkout / kiosks.",budget:"S",status:"available",tags:["retail","queue"]},{id:"ret_dwell_heatmap",name:"Dwell heatmap",category:"ret",crate:"wifi-densepose-wasm-edge",summary:"Per-zone dwell time accumulation; analytics-only export.",budget:"M",status:"available",tags:["retail","heatmap"]},{id:"ret_customer_flow",name:"Customer flow",category:"ret",crate:"wifi-densepose-wasm-edge",summary:"Origin-destination flow graph through a store layout.",budget:"M",status:"available",tags:["retail","flow"]},{id:"ret_table_turnover",name:"Table turnover",category:"ret",crate:"wifi-densepose-wasm-edge",summary:"Restaurant table seat / vacate transitions.",budget:"S",status:"available",tags:["retail","restaurant"]},{id:"ret_shelf_engagement",name:"Shelf engagement",category:"ret",crate:"wifi-densepose-wasm-edge",summary:"Reach-to-shelf gestures and dwell at product zones.",budget:"M",status:"available",tags:["retail","shelf"]},{id:"ind_forklift_proximity",name:"Forklift proximity",category:"ind",crate:"wifi-densepose-wasm-edge",summary:"Worker-near-forklift safety alert.",budget:"S",status:"available",tags:["industrial","safety"]},{id:"ind_confined_space",name:"Confined-space monitor",category:"ind",crate:"wifi-densepose-wasm-edge",summary:"Last-person-out detection + presence audit for OSHA confined-space entries.",budget:"S",status:"available",tags:["industrial","osha"]},{id:"ind_clean_room",name:"Clean-room PPE / motion",category:"ind",crate:"wifi-densepose-wasm-edge",summary:"Motion patterns consistent with proper PPE-clad movement.",budget:"M",status:"beta",tags:["industrial","cleanroom"]},{id:"ind_livestock_monitor",name:"Livestock monitor",category:"ind",crate:"wifi-densepose-wasm-edge",summary:"Vital-sign + activity tracking for stall-bound livestock.",budget:"M",status:"beta",tags:["agriculture","livestock"]},{id:"ind_structural_vibration",name:"Structural vibration",category:"ind",crate:"wifi-densepose-wasm-edge",summary:"Building/equipment micro-vibration via CSI phase derivative.",budget:"M",status:"research",tags:["industrial","vibration"]},{id:"sig_coherence_gate",name:"Coherence gate (extended)",category:"sig",crate:"wifi-densepose-wasm-edge",summary:"Hysteresis + multi-state coherence gate driving downstream apps.",budget:"S",status:"available",tags:["gate","csi"]},{id:"sig_flash_attention",name:"Flash attention (CSI)",category:"sig",crate:"wifi-densepose-wasm-edge",summary:"Edge-friendly attention block for CSI subcarrier weighting.",budget:"M",status:"beta",tags:["attention","csi"]},{id:"sig_temporal_compress",name:"Temporal-tensor compress",category:"sig",crate:"wifi-densepose-wasm-edge",summary:"RuVector temporal-tensor compression on the CSI buffer.",budget:"M",status:"available",tags:["compress","tensor"]},{id:"sig_sparse_recovery",name:"Sparse recovery",category:"sig",crate:"wifi-densepose-wasm-edge",summary:"114→56 subcarrier sparse interpolation via L1 solver.",budget:"M",status:"available",tags:["sparse","csi"]},{id:"sig_mincut_person_match",name:"Mincut person-match",category:"sig",crate:"wifi-densepose-wasm-edge",summary:"Min-cut person assignment across multistatic frames.",budget:"M",status:"available",tags:["mincut","matching"]},{id:"sig_optimal_transport",name:"Optimal transport",category:"sig",crate:"wifi-densepose-wasm-edge",summary:"OT-based feature alignment between mesh nodes.",budget:"M",status:"beta",tags:["ot","alignment"]},{id:"lrn_dtw_gesture_learn",name:"DTW gesture learn",category:"lrn",crate:"wifi-densepose-wasm-edge",summary:"On-device template learning for personalized gesture libraries.",budget:"M",status:"beta",tags:["lifelong","gesture"]},{id:"lrn_anomaly_attractor",name:"Anomaly attractor",category:"lrn",crate:"wifi-densepose-wasm-edge",summary:"Novelty detector with dynamic-attractor recall.",budget:"M",status:"research",tags:["novelty","lifelong"]},{id:"lrn_meta_adapt",name:"Meta-adapt",category:"lrn",crate:"wifi-densepose-wasm-edge",summary:"Meta-learning adapter for fast site-to-site transfer.",budget:"L",status:"research",tags:["meta-learning"]},{id:"lrn_ewc_lifelong",name:"EWC++ lifelong",category:"lrn",crate:"wifi-densepose-wasm-edge",summary:"Elastic-weight-consolidation gate to avoid catastrophic forgetting.",budget:"M",status:"beta",tags:["lifelong","ewc"]},{id:"spt_pagerank_influence",name:"PageRank influence",category:"spt",crate:"wifi-densepose-wasm-edge",summary:"Graph-influence ranking on the multistatic mesh.",budget:"M",status:"beta",tags:["graph","pagerank"]},{id:"spt_micro_hnsw",name:"µHNSW vector index",category:"spt",crate:"wifi-densepose-wasm-edge",summary:"Tiny HNSW index for AETHER re-ID embeddings on-device.",budget:"M",status:"available",tags:["hnsw","reid"]},{id:"spt_spiking_tracker",name:"Spiking tracker",category:"spt",crate:"wifi-densepose-wasm-edge",summary:"Spiking-network multi-target tracker.",budget:"L",status:"research",tags:["snn","tracker"]},{id:"tmp_pattern_sequence",name:"Pattern sequence",category:"tmp",crate:"wifi-densepose-wasm-edge",summary:"Sequence-of-events pattern matcher (e.g. ingress→linger→egress).",budget:"M",status:"available",tags:["temporal","pattern"]},{id:"tmp_temporal_logic_guard",name:"Temporal logic guard",category:"tmp",crate:"wifi-densepose-wasm-edge",summary:"LTL/MTL safety-property guard over event streams.",budget:"M",status:"beta",tags:["ltl","safety"]},{id:"tmp_goap_autonomy",name:"GOAP autonomy",category:"tmp",crate:"wifi-densepose-wasm-edge",summary:"Goal-oriented action planning for adaptive routines.",budget:"L",status:"research",tags:["planning","autonomy"]},{id:"ais_prompt_shield",name:"Prompt shield",category:"ais",crate:"wifi-densepose-wasm-edge",summary:"Edge-side LLM prompt-injection guard for on-device assistants.",budget:"M",status:"beta",tags:["security","llm"]},{id:"ais_behavioral_profiler",name:"Behavioral profiler",category:"ais",crate:"wifi-densepose-wasm-edge",summary:"Anomalous-behaviour profiler (drift in motion habits).",budget:"M",status:"beta",tags:["anomaly","behaviour"]},{id:"qnt_quantum_coherence",name:"Quantum coherence",category:"qnt",crate:"wifi-densepose-wasm-edge",summary:"Coherence diagnostics adapted for quantum-sensor signals.",budget:"M",status:"research",tags:["quantum","coherence"]},{id:"qnt_interference_search",name:"Interference search",category:"qnt",crate:"wifi-densepose-wasm-edge",summary:"Interferometric anomaly search across mesh viewpoints.",budget:"L",status:"research",tags:["quantum","interference"]},{id:"aut_psycho_symbolic",name:"Psycho-symbolic agent",category:"aut",crate:"wifi-densepose-wasm-edge",summary:"Symbolic-rule + neural-feature hybrid for low-power autonomy loops.",budget:"L",status:"research",tags:["autonomy","symbolic"]},{id:"aut_self_healing_mesh",name:"Self-healing mesh",category:"aut",crate:"wifi-densepose-wasm-edge",summary:"Mesh-topology repair with per-node health gossip.",budget:"M",status:"beta",tags:["mesh","health"]},{id:"exo_ghost_hunter",name:"Ghost hunter (anomaly)",category:"exo",crate:"wifi-densepose-wasm-edge",summary:"Empty-room CSI anomaly detector — impulsive/periodic/drift/random + hidden-presence sub-detector.",events:[650,651,652,653],budget:"S",status:"available",tags:["anomaly","paranormal","csi"],adr:"ADR-041",runtime:"simulated"},{id:"exo_breathing_sync",name:"Breathing sync",category:"exo",crate:"wifi-densepose-wasm-edge",summary:"Multi-person breathing synchrony analytics.",budget:"M",status:"beta",tags:["breathing","sync"]},{id:"exo_dream_stage",name:"Dream-stage classifier",category:"exo",crate:"wifi-densepose-wasm-edge",summary:"NREM/REM stage classification from breathing + micro-motion.",budget:"M",status:"research",tags:["sleep","rem"]},{id:"exo_emotion_detect",name:"Emotion detector",category:"exo",crate:"wifi-densepose-wasm-edge",summary:"Coarse arousal/valence from breathing + heart-rate variability.",budget:"M",status:"research",tags:["affect"]},{id:"exo_gesture_language",name:"Gesture language",category:"exo",crate:"wifi-densepose-wasm-edge",summary:"Sign-language pattern recognition.",budget:"L",status:"research",tags:["hci","sign"]},{id:"exo_happiness_score",name:"Happiness score",category:"exo",crate:"wifi-densepose-wasm-edge",summary:"Aggregate well-being score from co-occupancy + activity dynamics.",budget:"M",status:"research",tags:["affect","wellbeing"]},{id:"exo_hyperbolic_space",name:"Hyperbolic space embed",category:"exo",crate:"wifi-densepose-wasm-edge",summary:"Hyperbolic embeddings for hierarchical scene structure.",budget:"L",status:"research",tags:["embedding","hyperbolic"]},{id:"exo_music_conductor",name:"Music conductor",category:"exo",crate:"wifi-densepose-wasm-edge",summary:"Map gesture energy to MIDI tempo/dynamics.",budget:"M",status:"research",tags:["midi","art"]},{id:"exo_plant_growth",name:"Plant-growth tracker",category:"exo",crate:"wifi-densepose-wasm-edge",summary:"Slow CSI drift tracking for greenhouse foliage growth.",budget:"L",status:"research",tags:["agriculture"]},{id:"exo_rain_detect",name:"Rain detector",category:"exo",crate:"wifi-densepose-wasm-edge",summary:"Outdoor CSI signature of rainfall.",budget:"M",status:"research",tags:["weather"]},{id:"exo_time_crystal",name:"Time-crystal periodicity",category:"exo",crate:"wifi-densepose-wasm-edge",summary:"Periodicity diagnostics with anti-aliasing harmonics.",budget:"M",status:"research",tags:["periodicity"]}],Tt={sim:{label:"Simulators",color:"oklch(0.78 0.14 70)",range:"—"},med:{label:"Medical & Health",color:"oklch(0.65 0.22 25)",range:"100–199"},sec:{label:"Security & Safety",color:"oklch(0.7 0.18 35)",range:"200–299"},bld:{label:"Smart Building",color:"oklch(0.78 0.12 195)",range:"300–399"},ret:{label:"Retail & Hospitality",color:"oklch(0.78 0.14 145)",range:"400–499"},ind:{label:"Industrial",color:"oklch(0.72 0.18 330)",range:"500–599"},sig:{label:"Signal Processing",color:"oklch(0.78 0.14 70)",range:"600–619"},lrn:{label:"Online Learning",color:"oklch(0.78 0.12 260)",range:"620–639"},spt:{label:"Spatial / Graph",color:"oklch(0.7 0.18 100)",range:"640–659"},tmp:{label:"Temporal / Planning",color:"oklch(0.7 0.16 50)",range:"660–679"},ais:{label:"AI Safety",color:"oklch(0.65 0.22 25)",range:"700–719"},qnt:{label:"Quantum",color:"oklch(0.72 0.18 290)",range:"720–739"},aut:{label:"Autonomy",color:"oklch(0.78 0.14 145)",range:"740–759"},exo:{label:"Exotic / Research",color:"oklch(0.72 0.18 330)",range:"650–699"}};function Ir(){return Rt.map(e=>({id:e.id,active:e.active===!0,eventCount:0}))}function Nr(e,t){if(!e)return 1;const a=e.toLowerCase();let s=0;return t.id.toLowerCase().includes(a)&&(s+=3),t.name.toLowerCase().includes(a)&&(s+=3),t.summary.toLowerCase().includes(a)&&(s+=1),t.tags?.some(i=>i.toLowerCase().includes(a))&&(s+=2),t.category===a&&(s+=5),s}const Lr="nvsim",Fr=1,ut="kv";let ea=null;function Ks(){return ea||(ea=new Promise((e,t)=>{const a=indexedDB.open(Lr,Fr);a.onupgradeneeded=()=>{const s=a.result;s.objectStoreNames.contains(ut)||s.createObjectStore(ut)},a.onsuccess=()=>e(a.result),a.onerror=()=>t(a.error)}),ea)}async function be(e){const t=await Ks();return await new Promise((a,s)=>{const n=t.transaction(ut,"readonly").objectStore(ut).get(e);n.onsuccess=()=>a(n.result),n.onerror=()=>s(n.error)})}async function ye(e,t){const a=await Ks();return await new Promise((s,i)=>{const n=a.transaction(ut,"readwrite");n.objectStore(ut).put(t,e),n.oncomplete=()=>s(),n.onerror=()=>i(n.error)})}function Dt(e){if(e.length===0)return 0;let t=0;for(const a of e)t+=a;return t/e.length}function ja(e){if(e.length<2)return 0;const t=Dt(e);let a=0;for(const s of e)a+=(s-t)*(s-t);return Math.sqrt(a/(e.length-1))}const Hr=e=>{if(e.bHistory.length<64)return null;const t=e.state.lastEmitS??0;if(e.elapsedS-t<1)return null;e.state.lastEmitS=e.elapsedS;const a=e.bHistory.slice(-64),s=Dt(a);let i=0;for(let y=1;y<a.length;y++)(a[y]-s)*(a[y-1]-s)<0&&i++;const n=i/2,l=Math.max(40,Math.min(180,Math.round(n/.65*60))),m=Math.max(8,Math.min(30,Math.round(l/4))),u=[{ts:Date.now(),appId:"vital_trend",eventId:100,eventName:"VITAL_TREND",value:l,detail:`HR≈${l} BPM, BR≈${m} br/min`}];return l<60?u.push({ts:Date.now(),appId:"vital_trend",eventId:103,eventName:"BRADYCARDIA",value:l,detail:`HR=${l} BPM`}):l>100&&u.push({ts:Date.now(),appId:"vital_trend",eventId:104,eventName:"TACHYCARDIA",value:l,detail:`HR=${l} BPM`}),m<12?u.push({ts:Date.now(),appId:"vital_trend",eventId:101,eventName:"BRADYPNEA",value:m,detail:`BR=${m} br/min`}):m>24&&u.push({ts:Date.now(),appId:"vital_trend",eventId:102,eventName:"TACHYPNEA",value:m,detail:`BR=${m} br/min`}),u},Wr=e=>{if(e.bHistory.length<32)return null;const t=e.state.lastEmitS??0;if(e.elapsedS-t<2)return null;const a=ja(e.bHistory.slice(-128))*1e9,s=a>.01,i=(e.state.occ??0)>.5;return s!==i?(e.state.occ=s?1:0,e.state.lastEmitS=e.elapsedS,{ts:Date.now(),appId:"occupancy",eventId:s?300:302,eventName:s?"ZONE_OCCUPIED":"ZONE_TRANSITION",value:a,detail:s?`σ(|B|)=${a.toFixed(3)} nT — entered`:`σ(|B|)=${a.toFixed(3)} nT — left`}):null},Ur=e=>{const t=e.state.ambient??e.bMagT;e.state.ambient=.95*t+.05*e.bMagT;const a=e.bMagT>t*1.5&&e.bMagT>1e-12,s=e.state.dwellStart??0;return a&&s===0?e.state.dwellStart=e.elapsedS:a||(e.state.dwellStart=0),a&&s>0&&e.elapsedS-s>.5&&(e.state.lastEmitS??0)<s?(e.state.lastEmitS=e.elapsedS,{ts:Date.now(),appId:"intrusion",eventId:200,eventName:"INTRUSION_ALERT",value:e.bMagT*1e9,detail:`|B|=${(e.bMagT*1e9).toFixed(2)} nT > 1.5× ambient (${(t*1e9).toFixed(2)} nT) for ${(e.elapsedS-s).toFixed(1)} s`}):null},Br=e=>{if(e.bHistory.length<64)return null;const t=e.state.lastEmitS??0;if(e.elapsedS-t<.5)return null;e.state.lastEmitS=e.elapsedS;const a=e.bHistory.slice(-32),s=e.bHistory.slice(-128,-32);if(s.length<32)return null;const i=Dt(s),n=ja(s);if(n===0)return null;const l=Dt(a),m=Math.abs(l-i)/n;return{ts:Date.now(),appId:"coherence",eventId:2,eventName:"COHERENCE_SCORE",value:m,detail:`z=${m.toFixed(2)} σ ${m>3?"· DRIFT":m>1.5?"· marginal":"· stable"}`}},Vr=e=>{if(e.bHistory.length<32)return null;const t=e.state.lastEmitS??0;if(e.elapsedS-t<3)return null;const a=e.bHistory.slice(-32);let s=0;for(let i=1;i<a.length;i++){const n=Math.abs(Math.log(Math.max(a[i],1e-15))-Math.log(Math.max(a[i-1],1e-15)));n>s&&(s=n)}return s>5?(e.state.lastEmitS=e.elapsedS,{ts:Date.now(),appId:"adversarial",eventId:3,eventName:"ANOMALY_DETECTED",value:s,detail:`log-jump ${s.toFixed(1)} — physically implausible step in |B|`}):null},jr=e=>{if(e.bHistory.length<128)return null;const t=e.state.lastEmitS??0;if(e.elapsedS-t<4)return null;e.state.lastEmitS=e.elapsedS;const a=e.bHistory.slice(-128),s=ja(a)*1e9,i=Dt(a);let n=0;for(const u of a){const y=Math.abs(u-i);y>n&&(n=y)}const l=n>4*(s*1e-9)?1:e.elapsedS>10?3:4,m=l===1?"impulsive":l===3?"drift":"random";return{ts:Date.now(),appId:"exo_ghost_hunter",eventId:651,eventName:"ANOMALY_CLASS",value:l,detail:`class=${m} · σ=${s.toFixed(3)} nT`}},Xs={vital_trend:Hr,occupancy:Wr,intrusion:Ur,coherence:Br,adversarial:Vr,exo_ghost_hunter:jr};function qr(e){return e in Xs}var Gr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,Qs=(e,t,a,s)=>{for(var i=s>1?void 0:s?Yr(t,a):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(i=(s?l(t,a,i):l(i))||i);return s&&i&&Gr(t,a,i),i};const Ce=f(Ir()),_t=f(""),We=f("all"),re=f("all");(async()=>{const e=await be("app-activations");e&&(Ce.value=e)})();z(()=>{const e=Ce.value;e.length>0&&ye("app-activations",e);const t=new Set;for(const a of e)a.active&&t.add(a.id);Us.value=t});let oa=class extends q{constructor(){super(...arguments),this.renderTick=0}connectedCallback(){super.connectedCallback(),z(()=>{Ce.value,_t.value,We.value,re.value,ia.value,ra.value,this.renderTick++})}isActive(e){return Ce.value.find(t=>t.id===e)?.active===!0}toggle(e){const t=this.isActive(e.id),a=Ce.value.map(s=>s.id===e.id?{...s,active:!s.active,lastActivatedAt:Date.now()}:s);if(Ce.value=a,t)g("info",`app <span class="k">${e.id}</span> deactivated`);else{const s=e.runtime??"mesh-only",i=s==="simulated"?" · live runtime engaged":s==="mesh-only"?" · queued (needs ESP32 mesh)":"";g("ok",`app <span class="k">${e.id}</span> activated${i}`)}}filtered(){let e=Rt;return We.value!=="all"&&(e=e.filter(t=>t.category===We.value)),re.value!=="all"&&(e=e.filter(t=>t.status===re.value)),_t.value.trim()&&(e=e.map(t=>({a:t,s:Nr(_t.value,t)})).filter(t=>t.s>0).sort((t,a)=>a.s-t.s).map(t=>t.a)),e}categoryCounts(){const e={all:Rt.length};for(const t of Object.keys(Tt))e[t]=0;for(const t of Rt)e[t.category]=(e[t.category]??0)+1;return e}render(){const e=this.filtered(),t=this.categoryCounts(),a=Ce.value.filter(s=>s.active).length;return p`
      <div class="head">
        <div class="ttl">
          App Store
          <small>${Rt.length} edge apps · ${a} active</small>
        </div>
        <input class="search" id="app-search" placeholder="Search by name, tag, or category…"
          .value=${_t.value}
          @input=${s=>{_t.value=s.target.value}} />
      </div>

      <div class="filters">
        <span class="chip ${We.value==="all"?"on":""}"
          @click=${()=>We.value="all"}>
          All<span class="count">${t.all}</span>
        </span>
        ${Object.keys(Tt).map(s=>p`
          <span class="chip ${We.value===s?"on":""}"
            @click=${()=>We.value=s}>
            <span class="swatch" style=${`background:${Tt[s].color}`}></span>
            ${Tt[s].label}
            <span class="count">${t[s]??0}</span>
          </span>
        `)}
        <span style="flex:1; min-width:8px"></span>
        <span class="chip ${re.value==="all"?"on":""}" @click=${()=>re.value="all"}>any</span>
        <span class="chip ${re.value==="available"?"on":""}" @click=${()=>re.value="available"}>available</span>
        <span class="chip ${re.value==="beta"?"on":""}" @click=${()=>re.value="beta"}>beta</span>
        <span class="chip ${re.value==="research"?"on":""}" @click=${()=>re.value="research"}>research</span>
      </div>

      ${this.renderEventsFeed()}

      ${e.length===0?p`<div class="empty">No apps match the current filters.</div>`:p`<div class="grid">${e.map(s=>this.card(s))}</div>`}
    `}renderEventsFeed(){const e=ia.value.slice(-12).reverse(),t=Ce.value.filter(a=>a.active&&qr(a.id)).length;return p`
      <div class="events-feed">
        <h3>Live runtime feed
          ${t>0?p`<span class="card-events-count" style="margin-left: 8px;">${t} simulated app${t===1?"":"s"} active</span>`:""}
        </h3>
        <p class="lead">
          Apps with the <span class="badge rt-simulated" style="font-size:9.5px; padding:0 4px;">simulated</span>
          runtime emit real i32 event IDs against nvsim's live frame stream below.
          Apps with <span class="badge rt-mesh-only" style="font-size:9.5px; padding:0 4px;">mesh-only</span>
          need an ESP32-S3 + WS transport (deferred to V2). The
          <span class="badge rt-running" style="font-size:9.5px; padding:0 4px;">running</span>
          badge marks <code>nvsim</code> itself, which is always running.
        </p>
        ${e.length===0?p`<div class="ev-empty">No events yet. Toggle a card with the <i>simulated</i> badge and press <b>▶ Run</b>.</div>`:p`<div class="lines">${e.map(a=>{const s=new Date(a.ts),i=`${String(s.getSeconds()).padStart(2,"0")}.${String(s.getMilliseconds()).padStart(3,"0")}`;return p`
                <div class="ev-line">
                  <span class="ts">${i}</span>
                  <span class="id">${a.appId}</span>
                  <span class="body"><b style="color:var(--accent-2);">${a.eventName}</b><span style="color:var(--ink-3);"> · ${a.eventId}</span> ${a.detail?`· ${a.detail}`:""}</span>
                </div>
              `})}</div>`}
      </div>
    `}card(e){const t=this.isActive(e.id),a=Tt[e.category],s=e.runtime??"mesh-only",i=ra.value[e.id]??0,n={running:"running",simulated:"simulated","mesh-only":"needs mesh"},l={running:"This app is genuinely running in your browser right now.",simulated:"A pared-down version of this algorithm runs against nvsim's magnetic frame stream as a proxy for its native CSI input. Toggle on, then press ▶ Run to see real event IDs in the feed.","mesh-only":"This algorithm needs CSI subcarrier data from an ESP32-S3 mesh. The toggle persists; activation is pushed via WS transport (V2)."};return p`
      <div class="card ${t?"active":""}" data-app-id=${e.id}>
        <div class="card-h">
          <span class="swatch" style=${`background:${a.color}`}></span>
          <span class="name">${e.name}</span>
        </div>
        <div class="summary">${e.summary}</div>
        <div class="meta">
          <span class="badge cat">${a.label}</span>
          <span class="badge status-${e.status}">${e.status}</span>
          <span class="badge rt-${s}" title=${l[s]}>${n[s]}</span>
          ${e.budget?p`<span class="badge budget">budget ${e.budget}</span>`:""}
          ${e.adr?p`<span class="badge">${e.adr}</span>`:""}
          ${e.events?.length?p`<span class="badge">events ${e.events.join("·")}</span>`:""}
        </div>
        <div class="card-foot">
          <span class="events">${e.crate}</span>
          ${i>0?p`<span class="card-events-count">⚡ ${i} ev</span>`:""}
          <span class="toggle ${t?"on":""}" role="switch"
            aria-checked=${t} aria-label="Toggle ${e.crate}"
            data-app-toggle=${e.id}
            @click=${()=>this.toggle(e)}></span>
        </div>
      </div>
    `}};oa.styles=j`
    :host {
      display: block;
      height: 100%;
      overflow-y: auto;
      background: radial-gradient(ellipse at 50% 30%, var(--bg-2) 0%, var(--bg-0) 70%);
      padding: 24px;
    }
    .head {
      display: flex; align-items: center; gap: 16px;
      margin-bottom: 18px;
      flex-wrap: wrap;
    }
    .ttl {
      font-size: 22px; font-weight: 700; letter-spacing: -0.02em;
      color: var(--ink);
      flex: 1; min-width: 200px;
    }
    .ttl small {
      font-size: 12.5px; font-weight: 400;
      color: var(--ink-3); margin-left: 8px;
    }
    .search {
      width: 320px; max-width: 100%;
      padding: 8px 12px;
      background: var(--bg-2);
      border: 1px solid var(--line);
      border-radius: 8px;
      font-family: var(--mono);
      font-size: 12.5px;
      color: var(--ink); outline: none;
    }
    .search:focus { border-color: var(--accent); }
    .filters {
      display: flex; flex-wrap: wrap; gap: 6px;
      margin-bottom: 18px;
    }
    .chip {
      padding: 4px 10px;
      background: var(--bg-2);
      border: 1px solid var(--line);
      border-radius: 999px;
      font-size: 11.5px; color: var(--ink-3);
      cursor: pointer;
      font-family: var(--mono);
      display: inline-flex; align-items: center; gap: 4px;
    }
    .chip:hover { color: var(--ink); border-color: var(--line-2); }
    .chip.on { background: var(--bg-3); border-color: var(--accent); color: var(--ink); }
    .chip .swatch {
      width: 7px; height: 7px; border-radius: 50%;
    }
    .chip .count { color: var(--ink-2); font-size: 10px; }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 12px;
    }
    .card {
      background: var(--bg-2);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      padding: 12px 14px;
      display: flex; flex-direction: column; gap: 6px;
      transition: border-color 0.15s, transform 0.15s;
      position: relative;
    }
    .card:hover { border-color: var(--line-2); transform: translateY(-1px); }
    .card.active {
      border-color: oklch(0.78 0.14 145 / 0.7);
      background: linear-gradient(180deg, var(--bg-2) 0%, oklch(0.78 0.14 145 / 0.04) 100%);
    }
    .card-h {
      display: flex; align-items: flex-start; gap: 8px;
      margin-bottom: 2px;
    }
    .card-h .name {
      font-size: 13.5px; font-weight: 600; color: var(--ink);
      flex: 1; line-height: 1.3;
    }
    .card-h .swatch {
      width: 10px; height: 10px; border-radius: 50%;
      flex-shrink: 0; margin-top: 4px;
    }
    .summary {
      font-size: 12px; color: var(--ink-2); line-height: 1.45;
      flex: 1;
    }
    .meta {
      display: flex; flex-wrap: wrap; gap: 4px; margin-top: 6px;
      font-family: var(--mono); font-size: 10px;
    }
    .badge {
      padding: 1px 6px; border-radius: 4px;
      background: var(--bg-3); color: var(--ink-2);
      border: 1px solid var(--line);
    }
    .badge.cat { color: var(--accent); border-color: oklch(0.78 0.14 70 / 0.3); }
    .badge.status-available { color: var(--ok); border-color: oklch(0.78 0.14 145 / 0.4); }
    .badge.status-beta { color: var(--warn); border-color: oklch(0.7 0.18 35 / 0.4); }
    .badge.status-research { color: var(--accent-3); border-color: oklch(0.72 0.18 330 / 0.4); }
    .badge.budget { color: var(--accent-2); border-color: oklch(0.78 0.12 195 / 0.3); }
    .badge.rt-running { color: var(--ok); border-color: oklch(0.78 0.14 145 / 0.5); background: oklch(0.78 0.14 145 / 0.08); }
    .badge.rt-simulated { color: var(--accent); border-color: oklch(0.78 0.14 70 / 0.5); background: oklch(0.78 0.14 70 / 0.08); }
    .badge.rt-mesh-only { color: var(--ink-2); border-color: var(--line); }
    .events-feed {
      background: var(--bg-2);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      padding: 14px;
      margin-bottom: 18px;
    }
    .events-feed h3 {
      margin: 0 0 8px;
      font-size: 13px; font-weight: 600;
      color: var(--ink);
    }
    .events-feed .lead {
      font-size: 12px; color: var(--ink-3);
      margin: 0 0 10px;
      line-height: 1.5;
    }
    .events-feed .lines {
      display: flex; flex-direction: column; gap: 4px;
      max-height: 160px; overflow-y: auto;
    }
    .ev-line {
      display: grid;
      grid-template-columns: 60px 90px 1fr;
      gap: 10px;
      padding: 4px 6px;
      border-radius: 4px;
      font-family: var(--mono);
      font-size: 11px;
      color: var(--ink-2);
    }
    .ev-line:hover { background: var(--bg-3); }
    .ev-line .ts { color: var(--ink-4); font-size: 10.5px; }
    .ev-line .id { color: var(--accent); font-size: 10.5px; }
    .ev-line .body { color: var(--ink); }
    .ev-empty {
      font-size: 12px; color: var(--ink-3);
      padding: 8px 0;
    }
    .card-events-count {
      font-size: 10.5px;
      color: var(--accent-4);
      font-family: var(--mono);
    }
    .card-foot {
      display: flex; align-items: center; gap: 8px;
      padding-top: 8px; margin-top: 4px;
      border-top: 1px solid var(--line);
      font-size: 11px; color: var(--ink-3);
    }
    .toggle {
      position: relative;
      width: 32px; height: 18px;
      background: var(--bg-3); border: 1px solid var(--line-2);
      border-radius: 999px; cursor: pointer;
      transition: background 0.15s;
      flex-shrink: 0;
    }
    .toggle::after {
      content: ''; position: absolute;
      top: 1px; left: 1px;
      width: 12px; height: 12px;
      background: var(--ink-3); border-radius: 50%;
      transition: transform 0.15s, background 0.15s;
    }
    .toggle.on { background: var(--accent); border-color: var(--accent); }
    .toggle.on::after { background: #1a0f00; transform: translateX(14px); }
    .events {
      font-family: var(--mono); font-size: 10px; color: var(--ink-3);
      flex: 1;
    }
    .empty {
      padding: 40px;
      text-align: center; color: var(--ink-3);
      font-size: 13px;
    }
  `;Qs([w()],oa.prototype,"renderTick",2);oa=Qs([G("nv-app-store")],oa);var Kr=Object.defineProperty,Xr=Object.getOwnPropertyDescriptor,Nt=(e,t,a,s)=>{for(var i=s>1?void 0:s?Xr(t,a):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(i=(s?l(t,a,i):l(i))||i);return s&&i&&Kr(t,a,i),i};let Ke=class extends q{constructor(){super(...arguments),this.open=!1,this.filter="",this.idx=0,this.cmds=[{ico:"▶",label:"Run pipeline",kbd:"Space",run:async()=>{await U()?.run(),A.value=!0,Re("Pipeline running","▶")}},{ico:"❚",label:"Pause pipeline",run:async()=>{await U()?.pause(),A.value=!1,Re("Paused","❚❚")}},{ico:"+",label:"New scene…",kbd:"⌘N",run:()=>$t({title:"New scene",body:`<p>Build a fresh magnetic scene. The dashboard generates the JSON
        and pushes it to the running pipeline (or you can copy the JSON
        for offline use).</p>
        <label>Name</label>
        <input type="text" id="ns-name" value="custom-scene-${Date.now().toString(36)}" />
        <label>Heart-proxy dipole moment (A·m²)</label>
        <input type="text" id="ns-moment" value="1.0e-6" />
        <label>Distance heart → sensor (m)</label>
        <input type="text" id="ns-distance" value="0.5" />
        <label>Add ferrous distractor at +x = 1 m?</label>
        <select id="ns-ferrous">
          <option value="0">No</option>
          <option value="1" selected>Yes (steel coil, χ=5000)</option>
        </select>
        <label>Add 60 Hz mains-current loop?</label>
        <select id="ns-mains">
          <option value="0">No</option>
          <option value="1" selected>Yes (2 A loop, 5 cm radius, +y = 1 m)</option>
        </select>`,buttons:[{label:"Cancel",variant:"ghost"},{label:"Create",variant:"primary",onClick:async()=>{const e=document.querySelector("nv-app")?.shadowRoot?.querySelector("nv-modal")?.shadowRoot;if(!e)return;const t=(e.querySelector("#ns-name")?.value??"custom").trim(),a=parseFloat(e.querySelector("#ns-moment")?.value??"1e-6"),s=parseFloat(e.querySelector("#ns-distance")?.value??"0.5"),i=e.querySelector("#ns-ferrous")?.value==="1",n=e.querySelector("#ns-mains")?.value==="1",l={dipoles:[{position:[0,0,s],moment:[0,0,a]}],loops:n?[{centre:[0,1,0],normal:[0,1,0],radius:.05,current:2,n_segments:64}]:[],ferrous:i?[{position:[1,0,0],volume:1e-4,susceptibility:5e3}]:[],eddy:[],sensors:[[0,0,0]],ambient_field:[1e-6,0,0]};await U()?.loadScene(l),g("ok",`scene <span class="s">${t}</span> loaded · 1 dipole · ${n?"1 loop · ":""}${i?"1 ferrous · ":""}1 sensor`),Re(`Scene "${t}" loaded`,"+")}}]})},{ico:"📦",label:"Export proof bundle…",kbd:"⌘E",run:async()=>{const e=U();if(e){g("dbg","building proof bundle…");try{const t=await e.exportProofBundle(),a=URL.createObjectURL(t),s=document.createElement("a");s.href=a,s.download=`nvsim-proof-${Date.now()}.json`,s.click(),URL.revokeObjectURL(a),g("ok",`proof bundle exported · ${t.size} bytes`),Re(`Proof bundle saved (${t.size} B)`,"📦")}catch(t){g("err",`export failed: ${t.message}`)}}}},{ico:"⟳",label:"Reset pipeline",kbd:"⌘R",run:()=>$t({title:"Reset pipeline?",body:"<p>Clears the frame stream and rewinds <code>t</code> to 0.</p>",buttons:[{label:"Cancel",variant:"ghost"},{label:"Reset",variant:"danger",onClick:async()=>{await U()?.reset(),g("warn","pipeline reset · t=0"),Re("Pipeline reset","⟳")}}]})},{ico:"✓",label:"Verify witness",run:async()=>{const e=U();if(!e)return;ee.value="pending";const t=we.value,a=new Uint8Array(32);for(let i=0;i<32;i++)a[i]=parseInt(t.slice(i*2,i*2+2),16);(await e.verifyWitness(a)).ok?(ee.value="ok",ue.value=t,Re("Witness verified","✓")):(ee.value="fail",Re("Witness mismatch!","✗"))}},{ico:"☼",label:"Toggle theme",kbd:"⌘/",run:()=>{Q.value=Q.value==="dark"?"light":"dark"}},{ico:"⚙",label:"Open settings",kbd:"⌘,",run:()=>window.dispatchEvent(new CustomEvent("open-settings"))},{ico:"?",label:"Keyboard shortcuts…",run:()=>$t({title:"Keyboard shortcuts",body:`<div style="display:grid;grid-template-columns:auto 1fr;gap:6px 16px;font-size:13px;">
        <div><code>⌘K / Ctrl K</code></div><div>Command palette</div>
        <div><code>Space</code></div><div>Play / pause</div>
        <div><code>⌘R</code></div><div>Reset</div>
        <div><code>⌘,</code></div><div>Settings</div>
        <div><code>⌘/</code></div><div>Toggle theme</div>
        <div><code>\`</code></div><div>Debug HUD</div>
        <div><code>1 · 2 · 3</code></div><div>Inspector tabs</div>
        <div><code>Esc</code></div><div>Close modal/palette</div>
        <div><code>/</code></div><div>Focus REPL</div>
      </div>`,buttons:[{label:"Close",variant:"primary"}]})},{ico:"i",label:"About nvsim…",run:()=>$t({title:"About nvsim",body:`<p><b>nvsim</b> is a deterministic, byte-reproducible forward simulator for nitrogen-vacancy diamond magnetometry.</p>
        <p>This dashboard runs nvsim as WASM in a Web Worker. Same <code>(scene, config, seed)</code> → byte-identical SHA-256 witness across runs and machines.</p>
        <p>License: MIT OR Apache-2.0 · See ADR-089, ADR-092.</p>`,buttons:[{label:"Close",variant:"primary"}]})}],this.onKey=e=>{(e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"?(e.preventDefault(),this.openPal()):e.key==="Escape"&&this.open?this.closePal():this.open&&(e.key==="ArrowDown"?(this.idx=Math.min(this.cmds.length-1,this.idx+1),e.preventDefault()):e.key==="ArrowUp"?(this.idx=Math.max(0,this.idx-1),e.preventDefault()):e.key==="Enter"&&(this.runIdx(),e.preventDefault()))},this.onOpen=()=>this.openPal()}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey),window.addEventListener("nv-palette",this.onOpen)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("nv-palette",this.onOpen)}openPal(){this.open=!0,this.setAttribute("open",""),this.filter="",this.idx=0,setTimeout(()=>this.inputEl?.focus(),0)}closePal(){this.open=!1,this.removeAttribute("open")}filtered(){if(!this.filter.trim())return this.cmds;const e=this.filter.toLowerCase();return this.cmds.filter(t=>t.label.toLowerCase().includes(e))}runIdx(){const t=this.filtered()[this.idx];t&&(t.run(),this.closePal())}render(){const e=this.filtered();return p`
      <div class="palette" data-id="palette">
        <div class="input">
          <input id="palette-input" type="text" placeholder="Type a command…"
            .value=${this.filter}
            @input=${t=>{this.filter=t.target.value,this.idx=0}} />
        </div>
        <div class="list">
          ${e.map((t,a)=>p`
            <div class="item ${a===this.idx?"active":""}" @click=${()=>{this.idx=a,this.runIdx()}}>
              <span class="ico">${t.ico}</span>
              <span class="lbl">${t.label}</span>
              ${t.kbd?p`<span class="kbd">${t.kbd}</span>`:""}
            </div>
          `)}
        </div>
      </div>
    `}};Ke.styles=j`
    :host {
      position: fixed; inset: 0; z-index: 220;
      background: rgba(0,0,0,0.5);
      opacity: 0; pointer-events: none;
      transition: opacity 0.15s;
      display: flex; justify-content: center; padding-top: 12vh;
      backdrop-filter: blur(4px);
    }
    :host([open]) { opacity: 1; pointer-events: auto; }
    .palette {
      width: min(560px, 92vw);
      background: var(--bg-1);
      border: 1px solid var(--line-2);
      border-radius: var(--radius);
      box-shadow: 0 30px 80px -20px rgba(0,0,0,0.7);
      overflow: hidden;
      display: flex; flex-direction: column;
      max-height: 60vh;
    }
    .input {
      padding: 14px 16px;
      border-bottom: 1px solid var(--line);
    }
    input {
      width: 100%;
      background: transparent; border: none; outline: none;
      color: var(--ink); font-size: 14px;
      font-family: inherit;
    }
    .list { flex: 1; overflow-y: auto; padding: 4px; }
    .item {
      display: flex; align-items: center; gap: 10px;
      padding: 8px 12px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 12.5px;
    }
    .item.active { background: var(--bg-3); }
    .item .ico { width: 20px; text-align: center; color: var(--accent); }
    .item .lbl { flex: 1; }
    .item .kbd {
      font-family: var(--mono); font-size: 10.5px;
      color: var(--ink-3);
      padding: 1px 5px; background: var(--bg-3); border-radius: 4px;
    }
  `;Nt([w()],Ke.prototype,"open",2);Nt([w()],Ke.prototype,"filter",2);Nt([w()],Ke.prototype,"idx",2);Nt([Hs("#palette-input")],Ke.prototype,"inputEl",2);Ke=Nt([G("nv-palette")],Ke);var Qr=Object.defineProperty,Jr=Object.getOwnPropertyDescriptor,qa=(e,t,a,s)=>{for(var i=s>1?void 0:s?Jr(t,a):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(i=(s?l(t,a,i):l(i))||i);return s&&i&&Qr(t,a,i),i};let zt=class extends q{constructor(){super(...arguments),this.open=!1,this.renderFps=0,this.lastTs=performance.now(),this.frameCount=0,this.rafId=0,this.onKey=e=>{e.key==="`"&&!e.target.matches("input, textarea")&&(this.open=!this.open,this.toggleAttribute("open",this.open))},this.tick=()=>{this.rafId=requestAnimationFrame(this.tick);const e=performance.now();this.frameCount++,e-this.lastTs>=500&&(this.renderFps=this.frameCount*1e3/(e-this.lastTs),this.frameCount=0,this.lastTs=e,this.requestUpdate())}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey),z(()=>{ae.value,Fa.value,Ge.value,Ve.value,Ii.value,this.requestUpdate()}),this.tick()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),cancelAnimationFrame(this.rafId)}render(){return p`
      <div class="h"><span>nvsim · debug</span><span class="x" @click=${()=>{this.open=!1,this.removeAttribute("open")}}>✕</span></div>
      <div class="row"><span class="k">render fps</span><span class="v">${this.renderFps.toFixed(1)}</span></div>
      <div class="row"><span class="k">sim fps</span><span class="v">${ae.value>0?Math.round(ae.value):"—"}</span></div>
      <div class="row"><span class="k">frames</span><span class="v">${Fa.value.toString()}</span></div>
      <div class="row"><span class="k">|B|</span><span class="v">${(Ge.value*1e9).toFixed(3)} nT</span></div>
      <div class="row"><span class="k">SNR</span><span class="v">${Ve.value>0?Ve.value.toFixed(1):"—"}</span></div>
      <div class="row"><span class="k">DOM</span><span class="v">${document.querySelectorAll("*").length}</span></div>
    `}};zt.styles=j`
    :host {
      position: fixed; bottom: 8px; right: 8px;
      width: 220px;
      background: rgba(13,17,23,0.85);
      backdrop-filter: blur(8px);
      border: 1px solid var(--line-2);
      border-radius: 8px;
      padding: 8px 10px;
      font-family: var(--mono); font-size: 11px;
      color: var(--ink-2);
      z-index: 99;
      display: none;
      box-shadow: var(--shadow);
    }
    :host([open]) { display: block; }
    .h {
      display: flex; justify-content: space-between;
      font-weight: 600; color: var(--ink);
      margin-bottom: 6px; padding-bottom: 4px;
      border-bottom: 1px solid var(--line);
    }
    .x { cursor: pointer; color: var(--ink-3); }
    .row {
      display: flex; justify-content: space-between;
      padding: 1px 0;
    }
    .k { color: var(--ink-3); }
    .v { color: var(--ink); }
  `;qa([w()],zt.prototype,"open",2);qa([w()],zt.prototype,"renderFps",2);zt=qa([G("nv-debug-hud")],zt);var Zr=Object.defineProperty,en=Object.getOwnPropertyDescriptor,Js=(e,t,a,s)=>{for(var i=s>1?void 0:s?en(t,a):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(i=(s?l(t,a,i):l(i))||i);return s&&i&&Zr(t,a,i),i};let la=class extends q{constructor(){super(...arguments),this.open=!1}connectedCallback(){super.connectedCallback(),z(()=>{Q.value,pe.value,me.value,wt.value,ie.value,xe.value,this.requestUpdate()}),window.addEventListener("open-settings",()=>{this.open=!0,this.setAttribute("open","")})}close(){this.open=!1,this.removeAttribute("open")}async resetPrefs(){if(confirm("Reset all preferences and IndexedDB state? Reloads the page.")){try{const e=await indexedDB.databases?.();if(e)for(const t of e)t.name&&indexedDB.deleteDatabase(t.name)}catch{}location.reload()}}render(){return p`
      <div class="scrim" @click=${()=>this.close()}></div>
      <div class="panel" role="dialog" aria-modal="true" aria-label="Settings">
      <div class="h">
        <div class="ttl">Settings</div>
        <button class="close" @click=${()=>this.close()}>×</button>
      </div>
      <div class="body">
        <div class="group">
          <h4>Appearance</h4>
          <div class="row">
            <div>
              <div class="lbl">Theme</div>
              <div class="desc">Dark is the default; light has higher contrast for daylight work.</div>
            </div>
            <div class="seg">
              <button class=${Q.value==="dark"?"on":""}
                @click=${()=>Q.value="dark"}>dark</button>
              <button class=${Q.value==="light"?"on":""}
                @click=${()=>Q.value="light"}>light</button>
            </div>
          </div>
          <div class="row">
            <div>
              <div class="lbl">Density</div>
              <div class="desc">Affects panel padding and font scale (15 / 14 / 13 px). Choose what your eyes prefer.</div>
            </div>
            <div class="seg">
              <button class=${pe.value==="comfy"?"on":""}
                @click=${()=>pe.value="comfy"}>comfy</button>
              <button class=${pe.value==="default"?"on":""}
                @click=${()=>pe.value="default"}>default</button>
              <button class=${pe.value==="compact"?"on":""}
                @click=${()=>pe.value="compact"}>compact</button>
            </div>
          </div>
          <div class="row">
            <div>
              <div class="lbl">Reduce motion</div>
              <div class="desc">Stops the rotating diamond, animated field lines, and chart easing. Auto-on if your system has the prefers-reduced-motion preference set.</div>
            </div>
            <span class="toggle ${me.value?"on":""}"
              role="switch" aria-checked=${me.value} aria-label="Reduce motion"
              @click=${()=>me.value=!me.value}></span>
          </div>
        </div>

        <div class="group">
          <h4>Pipeline</h4>
          <div class="row">
            <div>
              <div class="lbl">Auto-rerun on edit</div>
              <div class="desc">When you change a Tunables slider or load a new scene, push the change to the worker without a manual restart.</div>
            </div>
            <span class="toggle ${wt.value?"on":""}"
              role="switch" aria-checked=${wt.value} aria-label="Auto-rerun on edit"
              @click=${()=>wt.value=!wt.value}></span>
          </div>
        </div>

        <div class="group">
          <h4>Transport</h4>
          <div class="row">
            <div>
              <div class="lbl">Mode</div>
              <div class="desc">WASM runs nvsim in your browser (default, no server). WS connects to a host-supplied nvsim-server (REST + binary WebSocket); see ADR-092 §6.2.</div>
            </div>
            <div class="seg">
              <button class=${ie.value==="wasm"?"on":""}
                @click=${()=>ie.value="wasm"}>WASM</button>
              <button class=${ie.value==="ws"?"on":""}
                @click=${()=>ie.value="ws"}>WS</button>
            </div>
          </div>
          ${ie.value==="ws"?p`
            <div class="row">
              <div>
                <div class="lbl">WS URL</div>
                <div class="desc">Where your nvsim-server is listening. The server defaults to 127.0.0.1:7878.</div>
              </div>
              <input type="text" placeholder="ws://localhost:7878" .value=${xe.value}
                @input=${e=>xe.value=e.target.value} />
            </div>`:""}
        </div>

        <div class="group">
          <h4>Help</h4>
          <div class="row">
            <div>
              <div class="lbl">Open help center</div>
              <div class="desc">Quickstart, glossary, FAQ, and shortcuts. Press <kbd style="font-family:var(--mono);font-size:10.5px;padding:1px 4px;background:var(--bg-3);border:1px solid var(--line);border-radius:3px;">?</kbd> any time.</div>
            </div>
            <button class="seg"
              @click=${()=>{this.close(),window.dispatchEvent(new CustomEvent("nv-show-help"))}}
              style="padding:6px 12px;cursor:pointer;background:var(--bg-3);border:1px solid var(--line);border-radius:6px;color:var(--ink);">
              Open
            </button>
          </div>
          <div class="row">
            <div>
              <div class="lbl">Replay welcome tour</div>
              <div class="desc">Re-show the 6-step first-run walkthrough.</div>
            </div>
            <button class="seg"
              @click=${()=>{this.close(),window.dispatchEvent(new CustomEvent("nv-show-tour"))}}
              style="padding:6px 12px;cursor:pointer;background:var(--bg-3);border:1px solid var(--line);border-radius:6px;color:var(--ink);">
              Replay
            </button>
          </div>
          <div class="row">
            <div>
              <div class="lbl">Reset all preferences</div>
              <div class="desc">Wipe theme, density, motion, scene drag positions, REPL history, and the onboarding-seen flag.</div>
            </div>
            <button class="seg"
              @click=${()=>this.resetPrefs()}
              style="padding:6px 12px;cursor:pointer;background:var(--bg-3);border:1px solid oklch(0.65 0.22 25 / 0.4);border-radius:6px;color:var(--bad);">
              Reset
            </button>
          </div>
        </div>

        <div class="group">
          <h4>About</h4>
          <div class="row" style="border-bottom:0;">
            <div>
              <div class="lbl">nvsim · v0.3.0</div>
              <div class="desc">Open-source NV-diamond simulator. Apache-2.0 OR MIT.<br>
                <a style="color:var(--accent-2); text-decoration:underline dotted; cursor:pointer;"
                  @click=${()=>{this.close(),window.dispatchEvent(new CustomEvent("nv-show-help",{detail:{section:"about"}}))}}>
                  More info →
                </a></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    `}};la.styles=j`
    /* The host covers the viewport without transforming itself. Only the
     * inner .panel is transformed; otherwise the host's transform would
     * create a containing block for the fixed-position scrim, clipping
     * it to the panel's 420 px width and breaking outside-to-dismiss. */
    :host {
      position: fixed; inset: 0;
      z-index: 51;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s;
    }
    :host([open]) { pointer-events: auto; opacity: 1; }
    .scrim {
      position: absolute; inset: 0;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(2px);
    }
    .panel {
      position: absolute;
      top: 0; right: 0; bottom: 0;
      width: 420px; max-width: 100vw;
      background: var(--bg-1);
      border-left: 1px solid var(--line);
      transform: translateX(100%);
      transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex; flex-direction: column;
      box-shadow: -20px 0 60px -20px rgba(0, 0, 0, 0.5);
    }
    :host([open]) .panel { transform: translateX(0); }
    .h {
      padding: 14px 16px;
      border-bottom: 1px solid var(--line);
      display: flex; align-items: center; justify-content: space-between;
    }
    .h .ttl { font-size: 14px; font-weight: 600; }
    .body { flex: 1; overflow-y: auto; padding: 16px; }
    .group { margin-bottom: 22px; }
    .group h4 {
      margin: 0 0 10px;
      font-size: 11px; font-weight: 600;
      text-transform: uppercase; letter-spacing: 0.08em;
      color: var(--ink-3);
    }
    .row {
      display: flex; justify-content: space-between; align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid var(--line);
    }
    .row:last-child { border-bottom: 0; }
    .row .lbl { font-size: 13px; }
    .row .desc { font-size: 11.5px; color: var(--ink-3); margin-top: 2px; }
    .row > div:first-child { flex: 1; padding-right: 12px; }
    .seg {
      display: inline-flex;
      background: var(--bg-3);
      border: 1px solid var(--line);
      border-radius: var(--radius-sm);
      padding: 2px;
    }
    .seg button {
      padding: 4px 10px;
      background: transparent; border: none;
      border-radius: 6px;
      font-size: 11.5px; color: var(--ink-3);
      font-family: var(--mono);
      cursor: pointer;
    }
    .seg button.on { background: var(--bg-1); color: var(--ink); }
    .toggle {
      position: relative;
      width: 36px; height: 20px;
      background: var(--bg-3);
      border: 1px solid var(--line-2);
      border-radius: 999px;
      cursor: pointer;
      flex-shrink: 0;
    }
    .toggle::after {
      content: ''; position: absolute;
      top: 2px; left: 2px;
      width: 14px; height: 14px;
      background: var(--ink-3);
      border-radius: 50%;
      transition: transform 0.15s, background 0.15s;
    }
    .toggle.on { background: var(--accent); border-color: var(--accent); }
    .toggle.on::after { background: #1a0f00; transform: translateX(16px); }
    .close {
      width: 28px; height: 28px;
      background: transparent; border: 1px solid var(--line);
      border-radius: 6px;
      color: var(--ink-2);
    }
    input[type="text"] {
      background: var(--bg-3);
      border: 1px solid var(--line);
      border-radius: 6px;
      padding: 6px 10px;
      color: var(--ink); font-family: var(--mono); font-size: 12px;
      outline: none;
    }
  `;Js([w()],la.prototype,"open",2);la=Js([G("nv-settings-drawer")],la);var tn=Object.defineProperty,an=Object.getOwnPropertyDescriptor,Ga=(e,t,a,s)=>{for(var i=s>1?void 0:s?an(t,a):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(i=(s?l(t,a,i):l(i))||i);return s&&i&&tn(t,a,i),i};const Ue=[{icon:"👋",title:"Welcome to nvsim",body:`<p style="font-size:14px; line-height:1.6;">
        <b>nvsim</b> is an open-source, deterministic forward simulator for
        <b>nitrogen-vacancy diamond magnetometry</b> — a real Rust crate compiled
        to WebAssembly and running in your browser, right now.</p>
      <p style="font-size:13px; color:var(--ink-2); line-height:1.55;">
        This 60-second tour walks you through the four panels, the App Store,
        the Ghost Murmur research view, and the determinism contract that
        makes nvsim distinctive.</p>
      <p style="font-size:11.5px; color:var(--ink-2); line-height:1.5; margin-top:14px;">
        Press <kbd>Esc</kbd> any time to skip. You can replay this tour from
        <b>Settings → Help</b>.</p>`,cta:{label:"Start the tour →"}},{icon:"🌐",title:"The Scene canvas",body:`<p>The middle panel shows your <b>magnetic scene</b> — a small simulated
        environment with four sources and one NV-diamond sensor at the centre.</p>
      <p>The four amber/cyan/magenta blobs are draggable: <b>rebar coil</b>
        (steel χ=5000), <b>heart proxy</b> dipole, <b>60 Hz mains</b> current loop,
        and a <b>steel door</b> (eddy current). Field lines connect each source
        to the sensor and animate while the pipeline runs.</p>
      <p style="font-size:12.5px; color:var(--ink-3);">
        Top-left toolbar: zoom in/out, fit-to-view, layer toggles. Bottom-right:
        sim controls (step / play / step / speed cycle). Drag positions persist
        across reloads.</p>`,hint:"Try dragging the heart_proxy after the tour ends."},{icon:"▶",title:"Run the pipeline",body:`<p>Press <b>▶ Run</b> in the topbar (or hit <kbd>Space</kbd>) to start
        the live frame stream. nvsim runs at ~1.8 kHz on x86_64 WASM —
        well above the 1 kHz Cortex-A53 acceptance gate.</p>
      <p>The FPS pill in the topbar updates with the throughput. The B-vector
        trace and frame-stream sparkline in the right inspector update in real
        time.</p>
      <p style="font-size:12.5px; color:var(--ink-3);">
        <kbd>Space</kbd> toggles run/pause from anywhere. Reset (<kbd>⌘R</kbd>)
        rewinds <code>t</code> to 0 without changing the seed.</p>`},{icon:"🔍",title:"Inspector — three tabs, three depths",body:`<p>The right rail shows the live inspector: <b>Signal</b> (B-vector
        trace + frame-stream sparkline), <b>Frame</b> (decoded MagFrame fields +
        raw 60-byte hex dump), <b>Witness</b> (SHA-256 determinism gate).</p>
      <p>Click the <b>magnifier</b> icon in the left rail to expand the
        inspector to the full main area, with bigger charts and an explainer
        header. Click the <b>shield</b> icon to do the same focused on Witness.</p>
      <p style="font-size:12.5px; color:var(--ink-3);">
        Number keys <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> jump between the
        three inspector tabs from anywhere.</p>`},{icon:"✓",title:"The witness — what makes nvsim distinctive",body:`<p>nvsim's defining commitment: same <code>(scene, config, seed)</code> →
        byte-identical SHA-256 across runs, machines, and transports.</p>
      <p>Click the <b>Witness</b> tab and press <b>Verify witness</b>. The
        dashboard re-derives the hash for the canonical reference scene
        (<code>seed=42, N=256</code>) and asserts it matches the constant
        pinned at compile time
        (<code style="font-size:10.5px;">cc8de9b01b0ff5bd…</code>).</p>
      <p>A green check means every constant — γ_e, D_GS, μ₀, T₂*, contrast,
        the PRNG stream, the frame layout — is byte-identical to the published
        reference. A red ✗ means something drifted; the dashboard names which.</p>`},{icon:"🎚",title:"Tunables — change the simulation live",body:`<p>The left sidebar's <b>Tunables</b> panel has four sliders:</p>
      <ul style="margin:0 0 12px; padding-left:18px; font-size:13px; color:var(--ink-2); line-height:1.6;">
        <li><b>Sample rate</b> (1–100 kHz) — digitiser frame rate</li>
        <li><b>Lock-in f_mod</b> (0.1–5 kHz) — microwave modulation freq</li>
        <li><b>Integration t</b> (0.1–10 ms) — per-sample integration time</li>
        <li><b>Shot noise</b> (on/off) — toggle quantum noise</li>
      </ul>
      <p>Edits debounce 300 ms then rebuild the WASM pipeline without restarting
        the frame stream. Watch the noise floor and B-vector spread change
        in the Signal trace.</p>`},{icon:"👻",title:"Ghost Murmur — research view",body:`<p>Click the ghost icon in the left rail. This view audits the
        publicly-reported <b>April 2026 CIA Ghost Murmur</b> NV-diamond
        heartbeat-detection program against the open physics literature.</p>
      <p>Includes a <b>"Try it yourself"</b> sandbox: place a cardiac dipole at
        any distance from the sensor, hit Run, and see what the real nvsim
        pipeline recovers. Per-tier detectability bars compare the predicted
        signal vs each transport's noise floor (NV-ensemble lab, COTS DNV-B1,
        SQUID, 60 GHz mmWave, WiFi CSI).</p>
      <p style="font-size:12.5px; color:var(--ink-3);">
        Spoiler: at 1 km the cardiac MCG is ~10⁻¹² of its 10 cm value.
        Press claims of 40-mile detection sit far below any published instrument's
        floor.</p>`},{icon:"🛍",title:"App Store — 65 edge apps",body:`<p>Click the grid icon. The <b>App Store</b> catalogues every
        hot-loadable WASM edge module RuView ships, organised by category:
        medical, security, smart-building, retail, industrial, signal,
        learning, autonomy, exotic.</p>
      <p>Each card carries id / category / status / event IDs / compute budget /
        ADR back-reference. The toggle marks an app active in this session;
        the WS transport (when configured) pushes the activation set to a
        connected ESP32 mesh.</p>
      <p style="font-size:12.5px; color:var(--ink-3);">
        Try searching for "ghost", "heart", or "occupancy" to fuzzy-filter
        the catalogue.</p>`},{icon:"⌨",title:"Console + REPL",body:`<p>The bottom panel is a structured event log with five filter tabs
        (<b>all / info / warn / err / dbg</b>) plus a REPL prompt.</p>
      <p>REPL commands include
        <code>help</code>, <code>scene.list</code>, <code>sensor.config</code>,
        <code>run</code>, <code>pause</code>, <code>seed [hex]</code>,
        <code>proof.verify</code>, <code>proof.export</code>,
        <code>theme [light|dark]</code>, <code>status</code>, <code>clear</code>.</p>
      <p style="font-size:12.5px; color:var(--ink-3);">
        Press <kbd>/</kbd> to focus the REPL from anywhere. Arrow ↑/↓ recall
        history (persisted across reloads). <kbd>⌘K</kbd> opens the command
        palette with every action discoverable.</p>`},{icon:"🚀",title:"You are ready",body:`<p style="font-size:14px;">That's the whole tour. A few last pointers:</p>
      <ul style="margin:0 0 14px; padding-left:18px; font-size:13px; color:var(--ink-2); line-height:1.7;">
        <li>Press <kbd>?</kbd> any time to open the help center
          (Quickstart / Glossary / FAQ / Shortcuts / About).</li>
        <li>Press <kbd>⌘K</kbd> for the command palette.</li>
        <li>Press <kbd>\`</kbd> to toggle the debug HUD.</li>
        <li>Settings (<kbd>⌘,</kbd>) lets you switch theme, density, motion,
          transport, and replay this tour.</li>
      </ul>
      <p style="font-size:12.5px; color:var(--ink-3); line-height:1.55;">
        Source: <code>github.com/ruvnet/RuView</code> · Apache-2.0 OR MIT ·
        ADRs 089/090/091/092/093.</p>`,cta:{label:"Get started →"}}];let Ot=class extends q{constructor(){super(...arguments),this.open=!1,this.step=0,this.show=()=>{this.step=0,this.open=!0,this.setAttribute("open","")}}async connectedCallback(){super.connectedCallback(),window.addEventListener("nv-show-tour",this.show),await be("onboarding-seen")||(this.open=!0,this.setAttribute("open",""))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("nv-show-tour",this.show)}async dismiss(){this.open=!1,this.removeAttribute("open"),await ye("onboarding-seen",!0)}next(){Ue[this.step].cta?.run?.(),this.step<Ue.length-1?this.step++:this.dismiss()}prev(){this.step>0&&this.step--}render(){const e=Ue[this.step],t=this.step===Ue.length-1;return p`
      <div class="card" role="dialog" aria-modal="true" aria-label="Welcome tour">
        <div class="h">
          <div class="icon" aria-hidden="true">${e.icon}</div>
          <div class="title-wrap">
            <h2>${e.title}</h2>
            <div class="step-label">Step ${this.step+1} of ${Ue.length}</div>
          </div>
          <button class="skip" @click=${()=>this.dismiss()} aria-label="Skip tour" title="Skip tour">×</button>
        </div>
        <div class="body">
          <div .innerHTML=${e.body}></div>
          ${e.hint?p`<div class="hint">${e.hint}</div>`:""}
        </div>
        <div class="footer">
          <div class="progress">
            <div class="dots">
              ${Ue.map((a,s)=>p`
                <div class="dot ${s===this.step?"active":s<this.step?"done":""}"></div>
              `)}
            </div>
            <div class="progress-label">${this.step+1} / ${Ue.length}</div>
          </div>
          ${this.step>0?p`<button class="ghost" @click=${()=>this.prev()}>← Back</button>`:p`<button class="ghost" @click=${()=>this.dismiss()}>Skip</button>`}
          <button class="primary" @click=${()=>this.next()}>
            ${e.cta?.label??(t?"Done":"Next →")}
          </button>
        </div>
      </div>
    `}};Ot.styles=j`
    :host {
      position: fixed; inset: 0;
      background: rgba(0, 0, 0, 0.55);
      backdrop-filter: blur(4px);
      z-index: 240;
      display: grid; place-items: center;
      opacity: 0; pointer-events: none;
      transition: opacity 0.18s;
    }
    :host([open]) { opacity: 1; pointer-events: auto; }
    .card {
      background: var(--bg-1);
      border: 1px solid var(--line-2);
      border-radius: var(--radius);
      box-shadow: 0 30px 80px -20px rgba(0,0,0,0.7);
      width: min(640px, 94vw);
      max-height: 86vh;
      display: flex; flex-direction: column;
      transform: translateY(12px) scale(0.98);
      transition: transform 0.22s cubic-bezier(0.2,0.7,0.3,1);
      overflow: hidden;
    }
    :host([open]) .card { transform: translateY(0) scale(1); }
    .h {
      padding: 22px 26px 12px;
      display: flex; align-items: flex-start; gap: 14px;
    }
    .h .icon {
      width: 44px; height: 44px;
      border-radius: 12px;
      background: linear-gradient(135deg, oklch(0.78 0.14 70) 0%, oklch(0.55 0.16 30) 100%);
      display: grid; place-items: center;
      font-size: 22px;
      flex-shrink: 0;
      box-shadow: 0 4px 12px -2px oklch(0.55 0.16 30 / 0.35);
    }
    .h .title-wrap { flex: 1; min-width: 0; }
    .h h2 {
      margin: 0;
      font-size: 18px;
      letter-spacing: -0.01em;
      color: var(--ink);
    }
    .h .step-label {
      font-family: var(--mono);
      font-size: 10.5px;
      color: var(--ink-2);
      margin-top: 4px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .h .skip {
      width: 28px; height: 28px;
      background: transparent;
      border: 1px solid var(--line);
      border-radius: 6px;
      color: var(--ink-2);
      cursor: pointer;
      flex-shrink: 0;
    }
    .h .skip:hover { color: var(--ink); border-color: var(--line-2); }
    .body {
      padding: 0 26px 16px;
      font-size: 13px;
      color: var(--ink-2);
      line-height: 1.6;
      overflow-y: auto;
      flex: 1;
    }
    .body p { margin: 0 0 12px; }
    .body p:last-child { margin-bottom: 0; }
    .body code, .body kbd {
      font-family: var(--mono);
      font-size: 11.5px;
      padding: 1px 5px;
      background: var(--bg-3);
      border: 1px solid var(--line);
      border-radius: 4px;
    }
    .body code { color: var(--accent); }
    .body kbd { color: var(--ink); }
    .hint {
      margin: 14px 0 0;
      padding: 10px 12px;
      background: oklch(0.78 0.12 195 / 0.06);
      border: 1px solid oklch(0.78 0.12 195 / 0.25);
      border-radius: 8px;
      font-size: 12px;
      color: var(--accent-2);
      display: flex; gap: 8px; align-items: flex-start;
    }
    .hint::before {
      content: '💡';
      flex-shrink: 0;
    }
    .footer {
      display: flex; align-items: center; gap: 14px;
      padding: 14px 22px;
      border-top: 1px solid var(--line);
      background: var(--bg-1);
    }
    .progress { flex: 1; }
    .dots { display: flex; gap: 5px; margin-bottom: 4px; }
    .dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: var(--bg-3);
      border: 1px solid var(--line-2);
      transition: background 0.15s, border-color 0.15s, transform 0.15s;
    }
    .dot.active {
      background: var(--accent);
      border-color: var(--accent);
      transform: scale(1.2);
    }
    .dot.done {
      background: var(--accent-4);
      border-color: var(--accent-4);
    }
    .progress-label {
      font-family: var(--mono);
      font-size: 10px;
      color: var(--ink-2);
    }
    button.primary, button.ghost {
      padding: 9px 16px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      font-family: inherit;
      border: 1px solid var(--line);
      background: var(--bg-2);
      color: var(--ink);
    }
    button.ghost:hover { border-color: var(--line-2); }
    button.primary {
      background: var(--accent);
      border-color: var(--accent);
      color: #1a0f00;
    }
    button.primary:hover { filter: brightness(1.08); }
  `;Ga([w()],Ot.prototype,"open",2);Ga([w()],Ot.prototype,"step",2);Ot=Ga([G("nv-onboarding")],Ot);var sn=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,gt=(e,t,a,s)=>{for(var i=s>1?void 0:s?rn(t,a):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(i=(s?l(t,a,i):l(i))||i);return s&&i&&sn(t,a,i),i};const nn=[{id:"nvBest",label:"NV-ensemble (best lab)",floorT:1e-12,color:"oklch(0.78 0.14 70)"},{id:"nvCots",label:"NV-DNV-B1 (COTS)",floorT:3e-10,color:"oklch(0.72 0.18 50)"},{id:"squid",label:"SQUID (shielded room)",floorT:1e-15,color:"oklch(0.78 0.12 195)"},{id:"mmw",label:"60 GHz mmWave (μ-Doppler)",floorT:0,color:"oklch(0.78 0.14 145)"},{id:"csi",label:"WiFi CSI (presence)",floorT:0,color:"oklch(0.72 0.18 330)"}];let ze=class extends q{constructor(){super(...arguments),this.distanceM=.1,this.momentLog10=-8.3,this.result=null,this.running=!1,this.err=null}predictedDipoleFieldT(e,t){return 4*Math.PI*1e-7*t/(4*Math.PI*Math.pow(Math.max(e,1e-6),3))}async runDemo(){const e=U();if(!e){this.err="WASM client not ready";return}this.err=null,this.running=!0,this.requestUpdate();try{const t=this.distanceM,a=Math.pow(10,this.momentLog10),s={dipoles:[{position:[0,0,t],moment:[0,0,a]}],loops:[],ferrous:[],eddy:[],sensors:[[0,0,0]],ambient_field:[0,0,0]},i={digitiser:{f_s_hz:1e4,f_mod_hz:1e3},sensor:{gamma_fwhm_hz:1e6,t1_s:.005,t2_s:1e-6,t2_star_s:2e-7,contrast:.03,n_spins:1e12,shot_noise_disabled:!1},dt_s:null};this.result=await e.runTransient(s,i,42n,64),g("ok",`ghost-demo · r=${t.toFixed(3)} m · |B| recovered = ${(this.result.bMagT*1e12).toExponential(2)} pT`)}catch(t){this.err=t.message,g("err",`ghost-demo failed: ${this.err}`)}finally{this.running=!1,this.requestUpdate()}}formatField(e){if(e===0)return"0 T";const t=Math.abs(e);return t>=.001?`${(e*1e3).toFixed(2)} mT`:t>=1e-6?`${(e*1e6).toFixed(2)} µT`:t>=1e-9?`${(e*1e9).toFixed(3)} nT`:t>=1e-12?`${(e*1e12).toFixed(2)} pT`:t>=1e-15?`${(e*1e15).toFixed(2)} fT`:t>=1e-18?`${(e*1e18).toFixed(2)} aT`:`${e.toExponential(2)} T`}formatDistance(e){return e<1?`${(e*100).toFixed(1)} cm`:e<1e3?`${e.toFixed(2)} m`:e<1e5?`${(e/1e3).toFixed(2)} km`:`${(e/1609).toFixed(0)} mi`}renderDemo(){const e=Math.pow(10,this.momentLog10),t=this.predictedDipoleFieldT(this.distanceM,e),a=this.result?.bMagT??0,s=(this.result?.noiseFloorPtSqrtHz??0)*1e-12,i=nn.map(m=>{let u="bad",y="below floor";if(m.id==="mmw")this.distanceM<=5?(u="ok",y="µ-Doppler @ chest"):this.distanceM<=15?(u="warn",y="edge of range"):(u="bad",y="out of range");else if(m.id==="csi")this.distanceM<=30?(u=this.distanceM<=10?"ok":"warn",y="presence/breathing"):(u="bad",y="out of range");else if(m.floorT>0){const Y=t/m.floorT;Y>100?(u="ok",y=`${Y.toExponential(1)}× floor`):Y>1?(u="warn",y=`${Y.toFixed(1)}× floor`):(u="bad",y=`${(1/Y).toExponential(1)}× too weak`)}const se=m.floorT>0?Math.max(2,Math.min(100,100+12*Math.log10(t/m.floorT))):m.id==="mmw"?Math.max(2,100-this.distanceM*7):Math.max(2,100-this.distanceM*2);return p`
        <div class="tier-bar" data-tier=${m.id}>
          <div class="fill" style=${`width:${se}%; background:${m.color}; border-color:${m.color}`}></div>
          <div class="lbl">
            <span>${m.label}</span>
            <span class="verdict-${u}" style=${`color:${u==="ok"?"var(--ok)":u==="warn"?"var(--warn)":"var(--bad)"}`}>${y}</span>
          </div>
        </div>
      `}),n=t>1e-12?"ok":t>1e-15?"warn":"bad",l=n==="ok"?`Above NV-ensemble lab floor — close-range MCG plausible at ${this.formatDistance(this.distanceM)}.`:n==="warn"?`Below NV ensemble best, above SQUID — research-grade only at ${this.formatDistance(this.distanceM)}.`:`Below every published instrument's noise floor at ${this.formatDistance(this.distanceM)}. Press-release physics.`;return p`
      <div class="demo">
        <h3 style="margin: 0 0 6px;">Try it yourself</h3>
        <div style="font-size: 12.5px; color: var(--ink-2); margin-bottom: 4px; line-height: 1.5;">
          Place a cardiac dipole at variable distance from the NV sensor. The
          dashboard runs the <i>real</i> nvsim Rust pipeline (compiled to WASM)
          end-to-end and reports what each tier would actually detect. Same
          determinism contract as the rest of the dashboard.
        </div>
        <div class="demo-grid">
          <div>
            <div class="control">
              <div class="top">
                <span class="lbl">Distance from sensor</span>
                <span class="val" id="demo-dist-val">${this.formatDistance(this.distanceM)}</span>
              </div>
              <input type="range" id="demo-distance" aria-label="Distance from sensor"
                min="-2" max="5" step="0.05"
                .value=${String(Math.log10(this.distanceM))}
                @input=${m=>{this.distanceM=Math.pow(10,+m.target.value)}} />
              <div style="font-size: 10.5px; color: var(--ink-3); margin-top: 4px; font-family: var(--mono);">
                10 cm → 100 km log scale
              </div>
            </div>
            <div class="control">
              <div class="top">
                <span class="lbl">Heart dipole moment</span>
                <span class="val" id="demo-moment-val">${e.toExponential(2)} A·m²</span>
              </div>
              <input type="range" id="demo-moment" aria-label="Heart dipole moment"
                min="-10" max="-6" step="0.05"
                .value=${String(this.momentLog10)}
                @input=${m=>{this.momentLog10=+m.target.value}} />
              <div style="font-size: 10.5px; color: var(--ink-3); margin-top: 4px; font-family: var(--mono);">
                published cardiac MCG ≈ 5×10⁻⁹ A·m²
              </div>
            </div>
            <button class="demo-btn" id="demo-run-btn" ?disabled=${this.running}
              @click=${()=>this.runDemo()}>
              ${this.running?"Running nvsim…":"▶ Run nvsim at this distance"}
            </button>
            ${this.err?p`<div class="verdict bad" style="margin-top: 10px;">Error: ${this.err}</div>`:""}
          </div>

          <div>
            <div class="readout">
              <div class="readout-row">
                <span class="l">Predicted |B| (1/r³)</span>
                <span class="v amber" id="demo-predicted">${this.formatField(t)}</span>
              </div>
              <div class="readout-row">
                <span class="l">Recovered |B| (nvsim)</span>
                <span class="v" id="demo-recovered">${this.result?this.formatField(a):"—"}</span>
              </div>
              <div class="readout-row">
                <span class="l">Sensor noise floor</span>
                <span class="v" id="demo-floor">${this.result?this.formatField(s)+"/√Hz":"—"}</span>
              </div>
              <div class="readout-row">
                <span class="l">Frames run</span>
                <span class="v" id="demo-frames">${this.result?.nFrames??"—"}</span>
              </div>
              <div class="readout-row">
                <span class="l">Witness (this run)</span>
                <span class="v" style="font-size: 10px;" id="demo-witness">${this.result?.witnessHex.slice(0,16)??"—"}…</span>
              </div>
            </div>
            <div style="margin-top: 14px;">
              <div style="font-size: 11.5px; color: var(--ink-3); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px;">
                Per-tier detectability
              </div>
              ${i}
            </div>
          </div>
        </div>
        <div class="verdict ${n}" id="demo-verdict">${l}</div>
        <div class="demo-notes">
          The <code>predicted</code> value uses the closed-form magnetic-dipole
          far field <code>|B| = μ₀·m / (4π·r³)</code>. The <code>recovered</code>
          value comes from the same Rust pipeline that drives the Witness panel —
          scene → Biot-Savart → NV ensemble → ADC → MagFrame. Use the moment
          slider to ask "what if the heart were stronger?". Use the distance
          slider to walk through 10 cm (clinical MCG), 1 m (close approach),
          10 m (room-scale), 1 km (skeptic's range), and 65 km (the press claim).
        </div>
      </div>
    `}render(){return p`
      <h1>Ghost Murmur — open-source reality check</h1>
      <div class="subtitle">
        The physics-vs-press audit for the publicly-reported April 2026
        CIA NV-diamond heartbeat detector, and how RuView's existing
        stack maps onto an honest, civilian version of the same idea.
      </div>

      <div class="links">
        <a href="https://github.com/ruvnet/RuView/blob/feat/nvsim-pipeline-simulator/docs/research/quantum-sensing/16-ghost-murmur-ruview-spec.md" target="_blank" rel="noopener">
          📄 Full spec (583 lines)
        </a>
        <a href="https://gist.github.com/ruvnet/e44d0c3f0ad10d9c4933a196a16d405c" target="_blank" rel="noopener">
          ✦ Public gist
        </a>
        <a href="https://github.com/ruvnet/RuView/issues/437" target="_blank" rel="noopener">
          # Issue #437
        </a>
        <a href="https://www.scientificamerican.com/article/what-is-the-quantum-ghost-murmur-purportedly-used-in-iran-scientists/" target="_blank" rel="noopener">
          ↗ Scientific American
        </a>
      </div>

      <h2>What the press reported</h2>
      <div class="grid">
        <div class="card">
          <h3>The story</h3>
          <p>3 Apr 2026: USAF F-15E pilot "Dude 44 Bravo" goes down in southern Iran during the regional exchange and evades for ~2 days.</p>
          <p>President Trump publicly suggests detection from <b>40 miles away</b> on a mountainside at night; CIA Director Ratcliffe says "invisible to the enemy, but not to the CIA."</p>
        </div>
        <div class="card">
          <h3>The named tech</h3>
          <p><b>"Ghost Murmur"</b> — Lockheed Skunk Works system using NV defects in synthetic diamond + AI to extract a heartbeat from environmental noise.</p>
          <p>Outlets: <i>Newsweek, Scientific American, Military.com, WION, Open The Magazine, Yahoo, Calcalist</i> + HN thread #47679241.</p>
        </div>
        <div class="card">
          <h3>What physicists said</h3>
          <p>Wikswo (Vanderbilt), Orzel (Union College), Roth (Oakland) — all pushing back hard.</p>
          <p>"At 1 km, the heartbeat field drops to ~10⁻¹² of its 10 cm value." MCG-only at multi-mile range is <span class="pill skeptical">not consistent with published physics</span>.</p>
        </div>
      </div>

      <h2>Live demo — nvsim WASM</h2>
      ${this.renderDemo()}

      <h2>Physics reality check</h2>
      <div class="card" style="padding: 6px 14px;">
        <table>
          <thead>
            <tr><th>Distance</th><th>Cardiac MCG (peak QRS)</th><th>vs Earth field (~50 µT)</th></tr>
          </thead>
          <tbody>
            <tr><td>10 cm</td><td class="amber">50 pT</td><td>10⁹× weaker</td></tr>
            <tr><td>1 m</td><td class="amber">50 fT</td><td>10¹²× weaker</td></tr>
            <tr><td>10 m</td><td class="cyan">50 aT</td><td>10¹⁵× weaker</td></tr>
            <tr><td>1 km</td><td class="bad">5 × 10⁻²³ T</td><td>10²⁷× weaker</td></tr>
            <tr><td>40 mi (65 km)</td><td class="bad">~10⁻²⁸ T</td><td>10³³× weaker</td></tr>
          </tbody>
        </table>
        <p style="font-size: 12px; color: var(--ink-3); margin: 10px 0 0; line-height: 1.5;">
          Best published NV-ensemble lab record: <b>0.9 pT/√Hz</b> [Wolf 2015].
          Best SQUID in a shielded room: <b>~1 fT/√Hz</b>. To detect a single heartbeat at 10 m
          you'd need ~2 billion× more sensitivity than any published ensemble has ever shown,
          in a magnetically silent environment. <i>40 miles is press-release physics.</i>
        </p>
      </div>

      <h2>RuView's three-tier mesh — what is actually buildable</h2>
      <div class="architecture" tabindex="0">                      ┌──────────────────────────┐
                      │   Tier 3 — NV-diamond    │  Range: 0.1–2 m (lab)
                      │     magnetometer ring    │  Status: nvsim simulator only
                      │     (close-confirm)      │  Hardware: $$$ (≥$8k DNV-B1)
                      └──────────┬───────────────┘
                                 │
                      ┌──────────┴───────────────┐
                      │   Tier 2 — 60 GHz FMCW   │  Range: 1–10 m HR/BR
                      │     mmWave radar mesh    │  Status: shipping (ADR-021)
                      │   (vital signs, posture) │  Hardware: $15 (MR60BHA2 + ESP32-C6)
                      └──────────┬───────────────┘
                                 │
                      ┌──────────┴───────────────┐
                      │  Tier 1 — WiFi CSI mesh  │  Range: 10–30 m through-wall
                      │   (presence, breathing,  │  Status: shipping (ADR-014, ADR-029)
                      │    pose, intention)      │  Hardware: $9 (ESP32-S3 8MB)
                      └──────────┬───────────────┘
                                 │
                                 ▼
                  ┌────────────────────────────────┐
                  │  RuvSense multistatic fusion   │
                  │   + cross-viewpoint attention  │
                  │   + AETHER re-ID embeddings    │
                  │   + Cramer-Rao gating          │
                  └────────────────────────────────┘</div>

      <h2>Press claim → RuView equivalent</h2>
      <div class="card" style="padding: 6px 14px;">
        <table>
          <thead>
            <tr><th>Press claim</th><th>RuView equivalent today</th><th>Crate / ADR</th><th>Honest range</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>NV-diamond magnetometry</td>
              <td>Deterministic NV pipeline simulator</td>
              <td><code>nvsim</code> · ADR-089</td>
              <td>Simulator only</td>
            </tr>
            <tr>
              <td>"AI strips environmental noise"</td>
              <td>RuvSense multistatic fusion + AETHER</td>
              <td>signal/ruvsense/ · ADR-029</td>
              <td>Mature</td>
            </tr>
            <tr>
              <td>Heartbeat at distance</td>
              <td>60 GHz FMCW HR/BR + WiFi CSI breathing</td>
              <td>vitals · ADR-021</td>
              <td><span class="pill ok">1–5 m HR · 10–30 m presence</span></td>
            </tr>
            <tr>
              <td>Long-range localisation</td>
              <td>Multistatic time-of-flight + CRLB</td>
              <td>ruvector/viewpoint/</td>
              <td>Limited by node spacing</td>
            </tr>
            <tr>
              <td><i>40-mile single-heartbeat detection</i></td>
              <td><i>Not feasible at any tier</i></td>
              <td>—</td>
              <td><span class="pill skeptical">Press-release physics</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Build today on $165</h2>
      <div class="grid">
        <div class="card">
          <h3>Bill of materials</h3>
          <p style="font-family: var(--mono); font-size: 11.5px; line-height: 1.7; color: var(--ink-2);">
            3 × ESP32-S3 8 MB ($9 ea)<br>
            3 × PoE injector + cat6 ($6 ea)<br>
            1 × ESP32-C6 + Seeed MR60BHA2 ($15)<br>
            1 × Raspberry Pi 5 8 GB ($80)<br>
            1 × unmanaged GbE switch ($25)
          </p>
          <p><b>Total: $165</b></p>
        </div>
        <div class="card">
          <h3>Honest performance</h3>
          <span class="stat"><span class="v">95%</span><span class="l">TPR (LOS, 0–15 m)</span></span><br><br>
          <span class="stat"><span class="v">±2 bpm</span><span class="l">HR (LOS 0–3 m)</span></span><br><br>
          <span class="stat"><span class="v">±1 br/min</span><span class="l">BR (any mode)</span></span><br><br>
          <span class="stat"><span class="v">~10 cm</span><span class="l">pose error</span></span><br><br>
          <span class="stat"><span class="v">80–150 ms</span><span class="l">end-to-end latency</span></span>
        </div>
        <div class="card">
          <h3>Determinism</h3>
          <p>Same <code style="font-family: var(--mono); color: var(--accent);">(scene, config, seed)</code> → byte-identical SHA-256 witness across browsers, OSes, transports.</p>
          <p>Reference: <span style="font-family: var(--mono); font-size: 10.5px; color: var(--accent-3);">cc8de9b01b0ff5bd…</span></p>
          <p>Try the Witness tab on the right — it re-derives the hash live in this browser and compares against the published reference.</p>
        </div>
      </div>

      <h2>Privacy, ethics, legal</h2>
      <div class="ethics">
        <h3>This is the open-source version. Same physics, opposite governance.</h3>
        <ul>
          <li><b>Civilian opt-in only</b> — search-and-rescue, elder-care, occupancy, ICU vitals. Not surveillance.</li>
          <li><b>No directional pursuit</b> — no beam-steering, target-following, or remote person-of-interest tracking.</li>
          <li><b>Data minimisation</b> — fused output is <code>(presence, HR, BR, pose, p_alive)</code>; raw streams discarded at the edge.</li>
          <li><b>PII gates</b> (ADR-040) block identifying biometric streams from leaving the local mesh without consent.</li>
          <li><b>Adversarial-signal detection</b> flags physically-impossible signal patterns from compromised mesh nodes.</li>
          <li><b>No export-controlled hardware</b> — RuView targets &lt; $50 COTS. ITAR/EAR sub-THz coherent radars and shielded NV ensembles are out of scope.</li>
        </ul>
        <p style="font-size: 11.5px; color: var(--ink-3); margin: 10px 0 0;">
          RuView is not affiliated with the United States government, the CIA, Lockheed Martin,
          or any classified program. References to "Ghost Murmur" in this view refer
          exclusively to the publicly-reported program of that name as covered in the open
          press in April 2026.
        </p>
      </div>

      <h2>Cross-references</h2>
      <div class="card">
        <p style="font-size: 12px; color: var(--ink-2); line-height: 1.7; margin: 0;">
          <b>ADRs:</b> 014 (signal) · 021 (vitals) · 024 (AETHER) · 027 (MERIDIAN) ·
          028 (witness audit) · 029 (RuvSense) · 040 (PII gates) · 086 (ESP32 RaBitQ) ·
          <b>089 (nvsim, Accepted)</b> · 090 (Lindblad, Proposed-conditional) ·
          091 (sub-THz radar research) · <b>092 (this dashboard)</b>.<br><br>
          <b>Primary physics:</b> Cohen 1970 · Bison 2009 · Wolf 2015 · Barry RMP 2020 · Doherty 2013 · Jackson 3e §5.6/§5.8.
        </p>
      </div>
    `}};ze.styles=j`
    :host {
      display: block;
      height: 100%;
      overflow-y: auto;
      background: radial-gradient(ellipse at 50% 30%, var(--bg-2) 0%, var(--bg-0) 70%);
      padding: 24px 28px 60px;
    }
    h1 {
      margin: 0 0 4px;
      font-size: 22px;
      letter-spacing: -0.02em;
      color: var(--ink);
    }
    .subtitle {
      color: var(--ink-3);
      font-size: 13px;
      margin-bottom: 22px;
    }
    .links {
      display: flex; flex-wrap: wrap; gap: 6px;
      margin-bottom: 22px;
    }
    .links a {
      padding: 5px 10px;
      background: var(--bg-2);
      border: 1px solid var(--line);
      border-radius: 999px;
      font-size: 11.5px;
      font-family: var(--mono);
      color: var(--accent-2);
      text-decoration: none;
    }
    .links a:hover { border-color: var(--accent-2); }
    h2 {
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--ink-3);
      margin: 28px 0 10px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 12px;
    }
    .card {
      background: var(--bg-2);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      padding: 14px;
    }
    .card h3 {
      margin: 0 0 8px;
      font-size: 13.5px; font-weight: 600;
      color: var(--ink);
    }
    .card p {
      font-size: 12.5px; color: var(--ink-2);
      margin: 0 0 8px;
      line-height: 1.5;
    }
    .card p:last-child { margin-bottom: 0; }
    .stat {
      display: inline-flex; align-items: baseline; gap: 6px;
      margin-right: 10px;
    }
    .stat .v {
      font-family: var(--mono); font-size: 16px; font-weight: 600;
      color: var(--accent);
    }
    .stat .l {
      font-size: 10px; color: var(--ink-3);
      text-transform: uppercase; letter-spacing: 0.04em;
    }
    table {
      width: 100%; border-collapse: collapse;
      font-size: 12.5px;
    }
    th, td {
      padding: 8px 10px;
      text-align: left;
      border-bottom: 1px solid var(--line);
    }
    th {
      color: var(--ink-3);
      font-weight: 600;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    td.amber { color: var(--accent); font-family: var(--mono); }
    td.cyan { color: var(--accent-2); font-family: var(--mono); }
    td.bad { color: var(--bad); font-family: var(--mono); }
    .pill {
      display: inline-block;
      padding: 1px 6px;
      border-radius: 4px;
      font-family: var(--mono);
      font-size: 10px;
      border: 1px solid var(--line);
    }
    .pill.ok { color: var(--ok); border-color: oklch(0.78 0.14 145 / 0.4); }
    .pill.skeptical { color: var(--bad); border-color: oklch(0.65 0.22 25 / 0.4); }
    .pill.partial { color: var(--warn); border-color: oklch(0.7 0.18 35 / 0.4); }
    .architecture {
      font-family: var(--mono);
      font-size: 11px;
      color: var(--ink-2);
      background: var(--bg-3);
      padding: 16px;
      border-radius: var(--radius-sm);
      border: 1px solid var(--line);
      white-space: pre;
      overflow-x: auto;
      line-height: 1.4;
    }
    .ethics {
      background: linear-gradient(180deg, var(--bg-2) 0%, oklch(0.65 0.22 25 / 0.04) 100%);
      border: 1px solid oklch(0.65 0.22 25 / 0.25);
      border-radius: var(--radius);
      padding: 16px;
    }
    .ethics h3 { color: var(--bad); margin-top: 0; }
    .ethics ul { padding-left: 18px; margin: 8px 0; }
    .ethics li { font-size: 12.5px; color: var(--ink-2); margin-bottom: 4px; }

    /* Demo */
    .demo {
      background: linear-gradient(180deg, var(--bg-2) 0%, oklch(0.78 0.14 70 / 0.04) 100%);
      border: 1px solid oklch(0.78 0.14 70 / 0.3);
      border-radius: var(--radius);
      padding: 18px;
    }
    .demo-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
      margin-top: 12px;
    }
    @media (max-width: 720px) { .demo-grid { grid-template-columns: 1fr; } }
    .control { margin-bottom: 14px; }
    .control .top {
      display: flex; justify-content: space-between;
      font-size: 12px; margin-bottom: 6px;
    }
    .control .top .lbl { color: var(--ink-3); }
    .control .top .val {
      font-family: var(--mono); color: var(--ink);
    }
    .control input[type="range"] {
      -webkit-appearance: none; appearance: none;
      width: 100%; height: 4px;
      background: var(--bg-3); border-radius: 2px; outline: none;
    }
    .control input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none; appearance: none;
      width: 14px; height: 14px; border-radius: 50%;
      background: var(--accent); cursor: pointer;
      border: 2px solid var(--bg-2);
    }
    .demo-btn {
      width: 100%;
      padding: 10px;
      border: 1px solid var(--accent);
      background: var(--accent);
      color: #1a0f00;
      border-radius: 8px;
      font-size: 13px; font-weight: 600;
      cursor: pointer;
    }
    .demo-btn:hover { filter: brightness(1.08); }
    .demo-btn:disabled { opacity: 0.6; cursor: progress; }
    .readout {
      background: var(--bg-3);
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 12px;
    }
    .readout-row {
      display: flex; justify-content: space-between;
      padding: 4px 0;
      font-family: var(--mono); font-size: 12px;
    }
    .readout-row .l { color: var(--ink-3); }
    .readout-row .v { color: var(--ink); }
    .readout-row .v.amber { color: var(--accent); }
    .tier-bar {
      position: relative;
      margin: 6px 0;
      height: 22px;
      background: var(--bg-3);
      border: 1px solid var(--line);
      border-radius: 4px;
      overflow: hidden;
    }
    .tier-bar .fill {
      position: absolute; top: 0; bottom: 0; left: 0;
      transition: width 0.2s ease-out;
      border-right: 2px solid;
    }
    .tier-bar .lbl {
      position: relative; z-index: 1;
      font-family: var(--mono); font-size: 11px;
      padding: 3px 8px;
      color: var(--ink);
      display: flex; justify-content: space-between;
      pointer-events: none;
    }
    .verdict {
      margin-top: 10px;
      padding: 10px 12px;
      border-radius: 8px;
      font-size: 12.5px; font-weight: 500;
      border: 1px solid;
    }
    .verdict.ok { background: oklch(0.78 0.14 145 / 0.08); border-color: oklch(0.78 0.14 145 / 0.4); color: var(--ok); }
    .verdict.warn { background: oklch(0.7 0.18 35 / 0.08); border-color: oklch(0.7 0.18 35 / 0.4); color: var(--warn); }
    .verdict.bad { background: oklch(0.65 0.22 25 / 0.08); border-color: oklch(0.65 0.22 25 / 0.4); color: var(--bad); }
    .demo-notes {
      font-size: 11.5px; color: var(--ink-3);
      margin-top: 10px; line-height: 1.5;
    }
  `;gt([w()],ze.prototype,"distanceM",2);gt([w()],ze.prototype,"momentLog10",2);gt([w()],ze.prototype,"result",2);gt([w()],ze.prototype,"running",2);gt([w()],ze.prototype,"err",2);ze=gt([G("nv-ghost-murmur")],ze);var on=Object.defineProperty,ln=Object.getOwnPropertyDescriptor,ma=(e,t,a,s)=>{for(var i=s>1?void 0:s?ln(t,a):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(i=(s?l(t,a,i):l(i))||i);return s&&i&&on(t,a,i),i};const Is=[{term:"NV-diamond",category:"physics",body:"Nitrogen-vacancy defect in synthetic diamond. The simulator models a 1 mm³ ensemble (~10¹² centers) addressed by 532 nm pump light + a 2.87 GHz microwave drive. Used as a room-temperature magnetometer with shot-noise floor ~1 pT/√Hz at the published lab record."},{term:"CW-ODMR",category:"physics",body:"Continuously-driven optically-detected magnetic resonance. Sweep the microwave frequency around the NV zero-field splitting (D = 2.87 GHz) and watch the photoluminescence dip when the microwave matches the spin transition. The dip splits with applied magnetic field along each of the four ⟨111⟩ NV axes."},{term:"MagFrame",category:"rust",body:"Fixed-layout 60-byte binary record nvsim emits per (sensor × sample). Magic 0xC51A_6E70, version 1, little-endian. Carries timestamp, recovered B vector (pT), per-axis sigma, noise floor, and flag bits for saturation / shot-noise-disabled / heavy-attenuation."},{term:"Witness",category:"rust",body:"SHA-256 hash over the concatenated MagFrame bytes for a canonical reference run (Proof::REFERENCE_SCENE_JSON @ seed=42, N=256). Same inputs → same hash, byte-for-byte, across runs and machines. The dashboard re-derives it in WASM and compares against Proof::EXPECTED_WITNESS_HEX pinned at build time."},{term:"Determinism gate",category:"rust",body:"A pass/fail check: did this build of nvsim produce the expected witness? If yes → every constant (γ_e, D_GS, μ₀, contrast, T₂*, the PRNG stream, the frame layout, the pipeline ordering) is byte-identical to the published reference. If no → something drifted; the dashboard names which."},{term:"Lock-in demod",category:"physics",body:"Multiply the photoluminescence signal by cos(2π·f_mod·t) and low-pass to recover the slowly-varying B-field component. The simulator emulates a lock-in with output gain 2 and a single-pole IIR LP filter; settable via the Tunables panel (f_mod default 1 kHz)."},{term:"Shot-noise floor",category:"physics",body:'δB = 1 / (γ_e · C · √(N · t · T₂*)) — the irreducible quantum noise floor for an NV ensemble. With nvsim defaults (N=10¹², C=0.03, T₂*=200 ns): ≈1.18 pT/√Hz. Toggleable via the Tunables panel for "analytic" runs without noise.'},{term:"Biot-Savart",category:"physics",body:"Closed-form magnetic field at a point from a current loop or a magnetic dipole. The Scene panel's sources (heart proxy, mains loop, ferrous body, eddy current) all reduce to Biot-Savart-style superpositions over the sensor position."},{term:"Multistatic fusion",category:"physics",body:"Combining evidence from multiple sensors at known geometric configurations. RuView's Cramer-Rao-weighted attention over WiFi CSI nodes + 60 GHz radar nodes + (hypothetically) NV nodes; documented in ADR-029 and the Ghost Murmur view."},{term:"Scene",category:"ui",body:'The simulated magnetic environment: a list of sources (dipole, current loop, ferrous body, eddy current) plus one or more sensor positions and an ambient field. The dashboard ships a "rebar-walkby-01" reference scene; click "New scene…" in the command palette (⌘K) to build your own.'},{term:"Tunables",category:"ui",body:"Sliders that change the running pipeline's digitiser config. Each edit debounces 300 ms, then rebuilds the WASM pipeline with the new f_s / f_mod / dt / shot-noise setting. The frame stream picks up the change without a restart."},{term:"Transport",category:"ui",body:"How the dashboard talks to nvsim. Default is WASM — the simulator runs in a Web Worker right here in your browser, no server. The optional WS transport is REST + binary WebSocket against a host-supplied nvsim-server (see ADR-092 §6.2). Toggle in Settings."},{term:"App Store",category:"ui",body:"Catalog of all 65+ hot-loadable WASM edge modules from wifi-densepose-wasm-edge plus the simulators. Each card carries id / category / status / event IDs; the toggle marks an app active in this session and (in WS mode) pushes the activation to a connected ESP32 mesh."},{term:"Ghost Murmur",category:"ui",body:'Research view that audits the publicly-reported April 2026 CIA NV-diamond heartbeat detector against the open physics literature. Includes a live "Try it yourself" sandbox where you can place a heart dipole at any distance from the sensor and ask: which transport tier would actually detect it?'}],cn=[{q:"Is this a real simulator or a mockup?",a:"Real. The Rust crate at v2/crates/nvsim is the same code that runs in the browser via WASM. Press <b>Verify witness</b> on the Witness panel — the SHA-256 you see is byte-equivalent to what `cargo test -p nvsim` produces."},{q:'Why does my "Recovered |B|" sit much higher than "Predicted |B|" in the Ghost Murmur demo?',a:"The recovered value reads the simulator's ADC quantization floor, not the actual magnetic signal. With COTS-default sensor noise (~300 pT/√Hz) and 16-bit ADC at ±10 µT FS, anything below ~1 pT vanishes into ~2 nT of digitization residual. That's the lesson — the press claim sits far below this floor at any meaningful range."},{q:"Can I run my own scene?",a:'Yes. Press ⌘K to open the command palette and pick "New scene…". You get five fields (name, dipole moment, distance, ferrous toggle, mains toggle); the dashboard builds the JSON and pushes it via <code>client.loadScene()</code>.'},{q:"Does any of my data leave the browser?",a:"No. WASM mode is local-only — the worker, the WASM binary, and the IndexedDB persistence all live in your browser. The optional WS transport (off by default) talks to a host of your choosing."},{q:"What does the witness mismatch (red ✗) mean?",a:"The current build of nvsim produced a SHA-256 that doesn't match the constant pinned at compile time. Possible causes: a different Rust toolchain, a dependency version drift, a manual edit to a physics constant, or an honest bug. Audit the diff against ADR-089 §5."},{q:"Why are the Inspector / Witness rail buttons there if there's already a right-side inspector?",a:'The right-side inspector is the compact live view; the rail buttons open a full-width version with bigger charts, an explainer header, reference-scene metadata cards, and (on Witness) a "what this verifies" panel. Both stay in sync — the right rail is for glancing, the main area is for diving in.'},{q:'Why is there an "App Store" if this is a magnetometer simulator?',a:"Because nvsim is one tile in a larger sensing platform. The catalog lists every hot-loadable WASM edge module RuView ships — medical, security, building, retail, industrial, signal, learning, autonomy. The simulators (nvsim today, more in future) are first-class entries in the same catalog."}],dn=[{step:1,title:"Hit ▶ Run",body:"The big amber button in the topbar starts the live frame stream. The pipeline runs ~1.8 kHz on x86_64 WASM, well above the 1 kHz Cortex-A53 acceptance gate."},{step:2,title:"Watch the B-vector trace",body:"The Inspector → Signal tab shows the recovered field per axis updating in real time. The frame strip below it is one bar per ~32-frame batch."},{step:3,title:"Verify the witness",body:"Click the rail Witness button (or REPL: <code>proof.verify</code>). The dashboard re-runs the canonical reference scene and asserts the SHA-256 byte-for-byte."},{step:4,title:"Drag a source",body:"Grab the rebar / heart proxy / mains loop / ferrous door in the scene canvas; positions persist via IndexedDB."},{step:5,title:"Tweak the tunables",body:"Sliders in the left sidebar update the running pipeline (f_s, f_mod, integration time, shot-noise). Changes debounce 300 ms then push to the worker."},{step:6,title:"Open the Ghost Murmur view",body:'The ghost icon in the rail. Move the distance + moment sliders, hit "Run nvsim at this distance" — the live demo runs the real Rust pipeline through WASM and shows which transport tier would actually detect.'},{step:7,title:"Browse the App Store",body:"The grid icon. 65+ edge apps: medical, security, building, retail, industrial, signal, learning. Toggle to mark active in this session."}],pn=[{keys:"⌘K  /  Ctrl K",label:"Command palette"},{keys:"Space",label:"Play / pause pipeline"},{keys:"⌘R  /  Ctrl R",label:"Reset pipeline (with confirm)"},{keys:"⌘,  /  Ctrl ,",label:"Settings drawer"},{keys:"⌘N  /  Ctrl N",label:"New scene"},{keys:"⌘E  /  Ctrl E",label:"Export proof bundle"},{keys:"⌘/  /  Ctrl /",label:"Toggle theme (dark / light)"},{keys:"`",label:"Toggle debug HUD"},{keys:"?",label:"Open this help center"},{keys:"1 · 2 · 3",label:"Switch inspector tab (Signal / Frame / Witness)"},{keys:"Esc",label:"Close any modal / palette / drawer"},{keys:"/",label:"Focus the REPL prompt"}];let mt=class extends q{constructor(){super(...arguments),this.open=!1,this.section="quickstart",this.query="",this.closeListener=()=>this.close(),this.show=e=>{const t=e.detail;t?.section&&(this.section=t.section),this.open=!0,this.setAttribute("open","")},this.onKey=e=>{const t=e.target,a=t?.tagName==="INPUT"||t?.tagName==="TEXTAREA";e.key==="?"&&!a&&!e.ctrlKey&&!e.metaKey?(e.preventDefault(),this.show(new CustomEvent("nv-show-help"))):e.key==="Escape"&&this.open&&this.close()}}connectedCallback(){super.connectedCallback(),window.addEventListener("nv-show-help",this.show),window.addEventListener("nv-show-help-close",this.closeListener),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("nv-show-help",this.show),window.removeEventListener("nv-show-help-close",this.closeListener),window.removeEventListener("keydown",this.onKey)}close(){this.open=!1,this.removeAttribute("open")}filteredGlossary(){if(!this.query.trim())return Is;const e=this.query.toLowerCase();return Is.filter(t=>t.term.toLowerCase().includes(e)||t.body.toLowerCase().includes(e))}renderQuickstart(){return p`
      <h2>Quickstart</h2>
      <p class="lead">Seven taps to get from "I just opened the dashboard" to "I'm running my own scene with verified determinism."</p>
      <button
        style="display:inline-flex; align-items:center; gap:8px; padding:10px 16px; margin-bottom:14px; background:var(--accent); color:#1a0f00; border:none; border-radius:8px; font-size:13px; font-weight:600; cursor:pointer; font-family:inherit;"
        @click=${()=>{window.dispatchEvent(new CustomEvent("nv-show-help-close")),window.dispatchEvent(new CustomEvent("nv-show-tour"))}}>
        ★ Take the interactive 10-step tour
      </button>
      ${dn.map(e=>p`
        <div class="step">
          <div class="num">${e.step}</div>
          <div>
            <div class="ttl">${e.title}</div>
            <div class="body-text" .innerHTML=${e.body}></div>
          </div>
        </div>
      `)}
    `}renderGlossary(){const e=this.filteredGlossary();return p`
      <h2>Glossary</h2>
      <p class="lead">Every piece of jargon in the dashboard, defined in one paragraph each.</p>
      <input class="glossary-search" type="text" placeholder="Search 14 terms…"
        .value=${this.query}
        @input=${t=>this.query=t.target.value} />
      ${e.length===0?p`<p style="color: var(--ink-3);">No terms match.</p>`:e.map(t=>p`
            <div class="term">
              <div class="head">
                <span class="name">${t.term}</span>
                <span class="badge ${t.category}">${t.category}</span>
              </div>
              <div class="body-text">${t.body}</div>
            </div>
          `)}
    `}renderFaq(){return p`
      <h2>FAQ</h2>
      <p class="lead">The questions I was asked twice in the first week of demos.</p>
      ${cn.map(e=>p`
        <div class="faq-item">
          <div class="q">${e.q}</div>
          <div class="a" .innerHTML=${e.a}></div>
        </div>
      `)}
    `}renderShortcuts(){return p`
      <h2>Keyboard shortcuts</h2>
      <p class="lead">Everything is reachable without a mouse.</p>
      <div class="shortcuts">
        ${pn.map(e=>p`
          <kbd>${e.keys}</kbd><span>${e.label}</span>
        `)}
      </div>
    `}renderAbout(){return p`
      <h2>About this dashboard</h2>
      <p class="lead">What you're looking at, in one screen.</p>
      <p><b>nvsim</b> is a deterministic forward simulator for nitrogen-vacancy diamond magnetometry.
        The Rust crate at <code>v2/crates/nvsim</code> is the source of truth; this dashboard is a
        Vite + Lit single-page app that ships the crate compiled to WebAssembly inside a Web Worker.</p>
      <p>The defining commitment is <b>determinism</b>: same <code>(scene, config, seed)</code> →
        byte-identical SHA-256 witness across browsers, OSes, and transports. Press the
        <kbd>Verify witness</kbd> button on the Witness tab to assert this live.</p>
      <p>The codebase is open source (Apache-2.0 OR MIT). Find it on GitHub:
        <code>github.com/ruvnet/RuView</code>. Decisions are documented in ADRs 089 (nvsim),
        090 (Lindblad extension, conditional), 091 (sub-THz radar research),
        092 (this dashboard), 093 (UX gap analysis).</p>
      <p>This dashboard is one of several RuView demos. Sibling demos at
        <code>github.io/RuView/</code> include the Observatory and Pose Fusion views.</p>
    `}render(){return p`
      <div class="modal" role="dialog" aria-modal="true" aria-label="Help center">
        <div class="h">
          <div class="ttl">Help</div>
          <button class="close" aria-label="Close help" @click=${()=>this.close()}>×</button>
        </div>
        <nav class="nav" role="tablist" aria-label="Help sections">
          ${["quickstart","glossary","faq","shortcuts","about"].map(e=>p`
            <button class=${this.section===e?"on":""} role="tab"
              aria-selected=${this.section===e}
              @click=${()=>this.section=e}>
              ${e==="quickstart"?"🚀 Quickstart":e==="glossary"?"📖 Glossary":e==="faq"?"? FAQ":e==="shortcuts"?"⌨ Shortcuts":"ℹ About"}
            </button>
          `)}
        </nav>
        <div class="body" role="tabpanel">
          ${this.section==="quickstart"?this.renderQuickstart():this.section==="glossary"?this.renderGlossary():this.section==="faq"?this.renderFaq():this.section==="shortcuts"?this.renderShortcuts():this.renderAbout()}
        </div>
        <div class="f">
          <span>Press <kbd style="font-family:var(--mono);font-size:10.5px;padding:1px 4px;background:var(--bg-3);border:1px solid var(--line);border-radius:3px;">?</kbd> any time to reopen</span>
          <span>nvsim · Apache-2.0 OR MIT</span>
        </div>
      </div>
    `}};mt.styles=j`
    :host {
      position: fixed; inset: 0;
      background: rgba(0, 0, 0, 0.55);
      backdrop-filter: blur(4px);
      z-index: 230;
      display: grid; place-items: center;
      opacity: 0; pointer-events: none;
      transition: opacity 0.18s;
    }
    :host([open]) { opacity: 1; pointer-events: auto; }
    .modal {
      background: var(--bg-1);
      border: 1px solid var(--line-2);
      border-radius: var(--radius);
      box-shadow: 0 30px 80px -20px rgba(0,0,0,0.7);
      width: min(880px, 94vw);
      max-height: 86vh;
      display: grid;
      grid-template-columns: 200px 1fr;
      grid-template-rows: auto 1fr auto;
      overflow: hidden;
      transform: translateY(12px) scale(0.98);
      transition: transform 0.22s cubic-bezier(0.2,0.7,0.3,1);
    }
    :host([open]) .modal { transform: translateY(0) scale(1); }
    @media (max-width: 700px) {
      .modal { grid-template-columns: 1fr; grid-template-rows: auto auto 1fr auto; max-height: 92vh; }
      .nav { border-right: 0; border-bottom: 1px solid var(--line); flex-direction: row; overflow-x: auto; }
      .nav button { white-space: nowrap; }
    }
    .h {
      grid-column: 1 / -1;
      padding: 14px 18px;
      border-bottom: 1px solid var(--line);
      display: flex; align-items: center; justify-content: space-between;
    }
    .h .ttl { font-size: 15px; font-weight: 600; }
    .nav {
      border-right: 1px solid var(--line);
      padding: 12px 8px;
      display: flex; flex-direction: column; gap: 2px;
      background: var(--bg-1);
    }
    .nav button {
      text-align: left;
      padding: 8px 12px;
      background: transparent;
      border: 1px solid transparent;
      border-radius: 6px;
      color: var(--ink-3);
      font-size: 12.5px;
      cursor: pointer;
      transition: color 0.15s, background 0.15s;
    }
    .nav button:hover { color: var(--ink); background: var(--bg-2); }
    .nav button.on {
      color: var(--ink); background: var(--bg-3);
      border-color: var(--line-2);
    }
    .body {
      padding: 18px 22px;
      overflow-y: auto;
      font-size: 13px;
      color: var(--ink-2);
      line-height: 1.6;
    }
    .body h2 {
      margin: 0 0 8px;
      font-size: 18px;
      color: var(--ink);
      letter-spacing: -0.01em;
    }
    .body .lead {
      color: var(--ink-3);
      font-size: 12.5px;
      margin: 0 0 14px;
    }
    .body p { margin: 0 0 12px; }
    .body code {
      font-family: var(--mono);
      background: var(--bg-3);
      padding: 1px 5px;
      border-radius: 4px;
      font-size: 11.5px;
      color: var(--accent);
    }
    .body kbd {
      font-family: var(--mono);
      padding: 2px 6px;
      background: var(--bg-3);
      border: 1px solid var(--line);
      border-radius: 4px;
      font-size: 11.5px;
      color: var(--ink);
    }
    .step {
      display: grid;
      grid-template-columns: 32px 1fr;
      gap: 12px;
      padding: 10px 0;
      border-bottom: 1px solid var(--line);
    }
    .step:last-child { border-bottom: 0; }
    .step .num {
      width: 26px; height: 26px;
      border-radius: 50%;
      background: var(--accent);
      color: #1a0f00;
      font-family: var(--mono);
      font-size: 12.5px;
      font-weight: 700;
      display: grid; place-items: center;
    }
    .step .ttl { color: var(--ink); font-weight: 600; font-size: 13.5px; margin-bottom: 2px; }
    .step .body-text { font-size: 12.5px; color: var(--ink-2); line-height: 1.55; }
    .glossary-search {
      width: 100%;
      padding: 8px 12px;
      background: var(--bg-3);
      border: 1px solid var(--line);
      border-radius: 6px;
      font-family: var(--mono);
      font-size: 12.5px;
      color: var(--ink);
      outline: none;
      margin-bottom: 14px;
    }
    .glossary-search:focus { border-color: var(--accent); }
    .term {
      padding: 10px 0;
      border-bottom: 1px solid var(--line);
    }
    .term:last-child { border-bottom: 0; }
    .term .head {
      display: flex; align-items: center; gap: 8px; margin-bottom: 4px;
    }
    .term .name {
      font-family: var(--mono);
      font-size: 13.5px;
      color: var(--accent);
      font-weight: 600;
    }
    .term .badge {
      font-family: var(--mono);
      font-size: 9.5px;
      padding: 1px 6px;
      border-radius: 4px;
      border: 1px solid var(--line);
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .term .badge.physics { color: var(--accent-2); border-color: oklch(0.78 0.12 195 / 0.4); }
    .term .badge.rust { color: var(--accent); border-color: oklch(0.78 0.14 70 / 0.4); }
    .term .badge.ui { color: var(--accent-4); border-color: oklch(0.78 0.14 145 / 0.4); }
    .term .body-text {
      font-size: 12.5px;
      color: var(--ink-2);
      line-height: 1.55;
    }
    .faq-item {
      padding: 10px 0;
      border-bottom: 1px solid var(--line);
    }
    .faq-item:last-child { border-bottom: 0; }
    .faq-item .q {
      color: var(--ink);
      font-weight: 600;
      font-size: 13.5px;
      margin-bottom: 4px;
    }
    .faq-item .a { font-size: 12.5px; color: var(--ink-2); line-height: 1.55; }
    .shortcuts {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 8px 16px;
      align-items: baseline;
    }
    .f {
      grid-column: 1 / -1;
      padding: 10px 18px;
      border-top: 1px solid var(--line);
      display: flex; align-items: center; justify-content: space-between;
      font-size: 11.5px; color: var(--ink-3);
    }
    .close {
      width: 28px; height: 28px;
      background: transparent; border: 1px solid var(--line);
      border-radius: 6px;
      color: var(--ink-2);
      cursor: pointer;
    }
    .close:hover { color: var(--ink); border-color: var(--line-2); }
  `;ma([w()],mt.prototype,"open",2);ma([w()],mt.prototype,"section",2);ma([w()],mt.prototype,"query",2);mt=ma([G("nv-help")],mt);var un=Object.getOwnPropertyDescriptor,mn=(e,t,a,s)=>{for(var i=s>1?void 0:s?un(t,a):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(i=l(i)||i);return i};let Va=class extends q{connectedCallback(){super.connectedCallback(),z(()=>{A.value,ee.value,ae.value,this.requestUpdate()})}go(e){if(e==="tour"){window.dispatchEvent(new CustomEvent("nv-show-tour"));return}if(e==="help"){window.dispatchEvent(new CustomEvent("nv-show-help"));return}this.dispatchEvent(new CustomEvent("navigate",{detail:e,bubbles:!0,composed:!0}))}async runDemo(){const e=U();e&&(A.value||(await e.run(),A.value=!0,g("ok","demo started · streaming MagFrames")))}render(){const e=A.value,t=ee.value==="ok";return p`
      <div class="hero">
        <div class="icon" aria-hidden="true">NV</div>
        <h1>An open-source quantum-magnetometer simulator, in your browser.</h1>
        <p class="tag">
          nvsim runs a real Rust simulator (the same code that
          <code style="font-family:var(--mono); background:var(--bg-3); padding:1px 5px; border-radius:4px; color:var(--accent); font-size:12px;">cargo&nbsp;test</code>
          uses) entirely in WebAssembly. No server, no upload, no telemetry.
          Press the button to start the live magnetic-field simulation, or
          take the 60-second tour first.
        </p>
        <div class="ctas">
          <button class="cta primary" id="home-run-btn" @click=${()=>this.runDemo()}>
            ${e?"✓ Demo running":"▶ Run the simulation"}
          </button>
          <button class="cta" id="home-tour-btn" @click=${()=>this.go("tour")}>
            ★ Take the 60-second tour
          </button>
          <button class="cta" id="home-help-btn" @click=${()=>this.go("help")}>
            ? Help center
          </button>
        </div>
        <div class="status ${e?"live":""}">
          <span class="dot"></span>
          ${e?p`Live · ${ae.value>0?(ae.value/1e3).toFixed(2)+" kHz":"starting…"}${t?" · witness verified ✓":""}`:p`Idle${t?" · witness verified ✓":""}`}
        </div>
      </div>

      <div class="grid">
        <div class="card" tabindex="0" role="button"
          @click=${()=>this.go("scene")}
          @keydown=${a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),this.go("scene"))}}>
          <div class="ico">🌐</div>
          <h3>Live scene</h3>
          <p>Drag magnetic sources, watch the recovered field update in real time, and tweak sample rate / noise / integration.</p>
          <div class="arrow">Open scene →</div>
        </div>

        <div class="card" tabindex="0" role="button"
          @click=${()=>this.go("apps")}
          @keydown=${a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),this.go("apps"))}}>
          <div class="ico">🛍</div>
          <h3>App Store · 66 edge apps</h3>
          <p>Browse 65 hot-loadable WASM sensing modules across medical, security, building, retail, industrial, learning. Six run live in the browser.</p>
          <div class="arrow">Browse the catalogue →</div>
        </div>

        <div class="card" tabindex="0" role="button"
          @click=${()=>this.go("witness")}
          @keydown=${a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),this.go("witness"))}}>
          <div class="ico">✓</div>
          <h3>Determinism gate</h3>
          <p>Re-derive the SHA-256 witness for the canonical reference scene right here in your browser. Same inputs → same hash, every time.</p>
          <div class="arrow">Verify the witness →</div>
        </div>

        <div class="card" tabindex="0" role="button"
          @click=${()=>this.go("ghost-murmur")}
          @keydown=${a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),this.go("ghost-murmur"))}}>
          <div class="ico">👻</div>
          <h3>Ghost Murmur reality check</h3>
          <p>Audit the publicly-reported April 2026 CIA NV-diamond program against published physics. Live distance/moment sliders.</p>
          <div class="arrow">Read the spec →</div>
        </div>
      </div>

      <p class="footnote">
        New here? <a @click=${()=>this.go("tour")}>Take the 60-second guided tour</a>
        — every panel is explained. Or press <code>?</code> for the help center
        (quickstart, glossary, FAQ, shortcuts) any time.<br>
        Open source · Apache-2.0 OR MIT · <code>github.com/ruvnet/RuView</code>
      </p>
    `}};Va.styles=j`
    :host {
      display: block;
      height: 100%;
      overflow-y: auto;
      background: radial-gradient(ellipse at 50% 30%, var(--bg-2) 0%, var(--bg-0) 70%);
      padding: 28px clamp(16px, 6vw, 56px) 60px;
    }
    .hero {
      max-width: 800px;
      margin: 16px auto 28px;
      text-align: center;
    }
    .hero .icon {
      width: 56px; height: 56px;
      margin: 0 auto 18px;
      border-radius: 14px;
      background: linear-gradient(135deg, oklch(0.78 0.14 70) 0%, oklch(0.55 0.16 30) 100%);
      display: grid; place-items: center;
      font-family: var(--mono);
      font-weight: 700;
      font-size: 18px;
      color: #1a0f00;
      box-shadow: 0 8px 24px -6px oklch(0.55 0.16 30 / 0.4);
    }
    .hero h1 {
      margin: 0 0 8px;
      font-size: clamp(24px, 4vw, 34px);
      letter-spacing: -0.02em;
      color: var(--ink);
      line-height: 1.15;
    }
    .hero .tag {
      font-size: clamp(13px, 1.6vw, 15px);
      color: var(--ink-2);
      margin: 0 0 22px;
      line-height: 1.55;
    }
    .hero .ctas {
      display: flex; flex-wrap: wrap; gap: 8px;
      justify-content: center;
    }
    .cta {
      padding: 11px 20px;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      font-family: inherit;
      border: 1px solid var(--line);
      background: var(--bg-2);
      color: var(--ink);
      transition: transform 0.12s, border-color 0.12s, filter 0.12s;
    }
    .cta:hover { transform: translateY(-1px); border-color: var(--line-2); }
    .cta.primary {
      background: var(--accent);
      border-color: var(--accent);
      color: #1a0f00;
    }
    .cta.primary:hover { filter: brightness(1.08); }
    .status {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 6px 12px;
      background: var(--bg-2);
      border: 1px solid var(--line);
      border-radius: 999px;
      font-size: 12px;
      font-family: var(--mono);
      color: var(--ink-2);
      margin-top: 18px;
    }
    .status .dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: var(--ink-3);
    }
    .status.live .dot {
      background: var(--ok);
      box-shadow: 0 0 8px var(--ok);
      animation: pulse 2s infinite;
    }
    @keyframes pulse { 50% { opacity: 0.5; } }

    .grid {
      max-width: 980px;
      margin: 36px auto 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 14px;
    }
    .card {
      background: var(--bg-2);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      padding: 18px 20px;
      cursor: pointer;
      transition: transform 0.12s, border-color 0.12s, background 0.12s;
      display: flex; flex-direction: column; gap: 6px;
      text-align: left;
      color: inherit;
    }
    .card:hover {
      transform: translateY(-2px);
      border-color: var(--accent);
      background: linear-gradient(180deg, var(--bg-2) 0%, oklch(0.78 0.14 70 / 0.04) 100%);
    }
    .card .ico {
      font-size: 22px;
      line-height: 1;
      margin-bottom: 4px;
    }
    .card h3 {
      margin: 0;
      font-size: 14.5px;
      font-weight: 600;
      color: var(--ink);
      letter-spacing: -0.01em;
    }
    .card p {
      margin: 0;
      font-size: 12.5px;
      color: var(--ink-2);
      line-height: 1.55;
    }
    .card .arrow {
      color: var(--accent);
      font-family: var(--mono);
      font-size: 11.5px;
      margin-top: 6px;
    }

    .footnote {
      max-width: 800px;
      margin: 36px auto 0;
      text-align: center;
      font-size: 12px;
      color: var(--ink-3);
      line-height: 1.55;
    }
    .footnote code {
      font-family: var(--mono);
      background: var(--bg-3);
      padding: 1px 5px;
      border-radius: 4px;
      color: var(--accent);
      font-size: 11px;
    }
    .footnote a {
      color: var(--accent-2);
      text-decoration: underline dotted;
      cursor: pointer;
    }
  `;Va=mn([G("nv-home")],Va);var hn=Object.defineProperty,gn=Object.getOwnPropertyDescriptor,Zs=(e,t,a,s)=>{for(var i=s>1?void 0:s?gn(t,a):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(i=(s?l(t,a,i):l(i))||i);return s&&i&&hn(t,a,i),i};let ca=class extends q{constructor(){super(...arguments),this.view="home"}render(){const e=this.view==="home";return p`
      <a class="skip-link" href="#main-content"
        @click=${t=>{t.preventDefault(),this.shadowRoot?.querySelector(".main")?.focus()}}>
        Skip to main content
      </a>
      <div class="app ${e?"simple":""}">
        <nv-rail .view=${this.view} @navigate=${t=>this.view=t.detail}></nv-rail>
        <nv-topbar></nv-topbar>
        <nv-sidebar></nv-sidebar>
        <main class="main" id="main-content" tabindex="-1" role="main" aria-label="Main view">
          ${this.view==="home"?p`<nv-home></nv-home>`:this.view==="apps"?p`<nv-app-store></nv-app-store>`:this.view==="ghost-murmur"?p`<nv-ghost-murmur></nv-ghost-murmur>`:this.view==="inspector"?p`<nv-inspector expanded .pinTab=${"signal"}></nv-inspector>`:this.view==="witness"?p`<nv-inspector expanded .pinTab=${"witness"}></nv-inspector>`:p`<nv-scene></nv-scene>`}
        </main>
        <nv-inspector
          .pinTab=${this.view==="inspector"?"signal":this.view==="witness"?"witness":null}>
        </nv-inspector>
        <nv-console></nv-console>
      </div>
      <nv-toast></nv-toast>
      <nv-modal></nv-modal>
      <nv-palette></nv-palette>
      <nv-debug-hud></nv-debug-hud>
      <nv-settings-drawer></nv-settings-drawer>
      <nv-onboarding></nv-onboarding>
      <nv-help></nv-help>
    `}};ca.styles=j`
    :host {
      display: block;
      height: 100vh;
      width: 100vw;
      background: var(--bg-0);
    }
    .skip-link {
      position: absolute;
      top: -40px;
      left: 8px;
      padding: 6px 12px;
      background: var(--accent);
      color: #1a0f00;
      border-radius: 6px;
      font-size: 12.5px;
      font-weight: 600;
      text-decoration: none;
      z-index: 1000;
      transition: top 0.15s;
    }
    .skip-link:focus { top: 8px; }
    .app {
      display: grid;
      grid-template-columns: 56px 280px 1fr 340px;
      grid-template-rows: 48px 1fr 220px;
      grid-template-areas:
        'rail topbar topbar topbar'
        'rail sidebar main inspector'
        'rail sidebar console inspector';
      height: 100vh;
      width: 100vw;
    }
    /* Home view simplifies: hides sidebar / inspector / console so the
       hero gets the full screen. Power-user panels stay one rail click away. */
    .app.simple {
      grid-template-columns: 56px 1fr;
      grid-template-rows: 48px 1fr;
      grid-template-areas:
        'rail topbar'
        'rail main';
    }
    .app.simple nv-sidebar,
    .app.simple nv-inspector,
    .app.simple nv-console { display: none; }
    nv-rail { grid-area: rail; }
    nv-topbar { grid-area: topbar; }
    nv-sidebar { grid-area: sidebar; }
    .main { grid-area: main; min-width: 0; min-height: 0; position: relative; overflow: hidden; }
    nv-inspector { grid-area: inspector; }
    nv-console { grid-area: console; min-height: 0; }
    @media (max-width: 1180px) {
      .app {
        grid-template-columns: 56px 1fr 320px;
        grid-template-areas:
          'rail topbar topbar'
          'rail main inspector'
          'rail console console';
      }
      nv-sidebar { display: none; }
    }
    @media (max-width: 860px) {
      .app {
        grid-template-columns: 1fr;
        grid-template-rows: 52px 1fr 200px;
        grid-template-areas:
          'topbar'
          'main'
          'console';
      }
      nv-rail, nv-sidebar, nv-inspector { display: none; }
    }
  `;Zs([w()],ca.prototype,"view",2);ca=Zs([G("nv-app")],ca);function vn(e,t,a){const s=e.getUint32(t+0,!0),i=e.getUint16(t+4,!0),n=e.getUint16(t+6,!0),l=e.getUint16(t+8,!0),m=e.getBigUint64(t+12,!0),u=e.getFloat32(t+20,!0),y=e.getFloat32(t+24,!0),se=e.getFloat32(t+28,!0),Y=e.getFloat32(t+32,!0),I=e.getFloat32(t+36,!0),Oe=e.getFloat32(t+40,!0),oe=e.getFloat32(t+44,!0),Ie=e.getFloat32(t+48,!0);return{magic:s,version:i,flags:n,sensorId:l,tUs:m,bPt:[u,y,se],sigmaPt:[Y,I,Oe],noiseFloorPtSqrtHz:oe,temperatureK:Ie,raw:a.subarray(t,t+60)}}function ei(e){const a=new DataView(e.buffer,e.byteOffset,e.byteLength),s=[];for(let i=0;i+60<=e.byteLength;i+=60)s.push(vn(a,i,e));return s}class fn{constructor(){this.nextId=1,this.pending=new Map,this.frameSubs=new Set,this.eventSubs=new Set,this.bootInfo=null,this.worker=new Worker(new URL("/RuView/nvsim/assets/worker-C19MRcXs.js",import.meta.url),{type:"module"}),this.worker.addEventListener("message",t=>this.onMessage(t)),this.worker.addEventListener("error",t=>this.eventSubs.forEach(a=>a({type:"log",level:"err",msg:String(t.message)})))}onMessage(t){const a=t.data;if(a.type==="frames"){const s=a.batch,i=new Uint8Array(s),l={frames:ei(i),bytes:i};this.frameSubs.forEach(u=>u(l));const m=a.fps;m>0&&this.eventSubs.forEach(u=>u({type:"fps",value:m}));return}if(a.type==="state"){this.eventSubs.forEach(s=>s({type:"state",running:!!a.running,t:0,framesEmitted:Number(a.framesEmitted??0)}));return}if(a.type!=="ready"){if(a.type==="err"&&a.id==null){this.eventSubs.forEach(s=>s({type:"log",level:"err",msg:String(a.msg)}));return}if(typeof a.id=="number"&&this.pending.has(a.id)){const s=this.pending.get(a.id);this.pending.delete(a.id),a.type==="err"?s.reject(new Error(String(a.msg))):s.resolve(a)}}}rpc(t,a=[]){const s=this.nextId++;return new Promise((i,n)=>{this.pending.set(s,{resolve:i,reject:n}),this.worker.postMessage({...t,id:s},a)})}async boot(){if(this.bootInfo)return this.bootInfo;const a=await this.rpc({type:"boot",base:"/RuView/nvsim/"});return this.bootInfo={buildVersion:a.buildVersion,frameMagic:a.frameMagic,frameBytes:a.frameBytes,expectedWitnessHex:a.expectedWitnessHex},this.bootInfo}async loadScene(t){await this.rpc({type:"setScene",json:JSON.stringify(t)})}async setConfig(t){await this.rpc({type:"setConfig",json:JSON.stringify(t)})}async setSeed(t){await this.rpc({type:"setSeed",seed:Number(t&0xFFFFFFFFn)})}async reset(){await this.rpc({type:"reset"})}async run(t){await this.rpc({type:"run"})}async pause(){await this.rpc({type:"pause"})}async step(t,a){await this.rpc({type:"step"})}onFrames(t){this.frameSubs.add(t)}onEvent(t){this.eventSubs.add(t)}async generateWitness(t){const a=await this.rpc({type:"witnessGenerate",samples:t});return new Uint8Array(a.witness)}async verifyWitness(t){const a=t.slice().buffer,s=await this.rpc({type:"witnessVerify",samples:256,expected:a},[a]);return s.ok?{ok:!0}:{ok:!1,actual:new Uint8Array(s.actual)}}async runTransient(t,a,s,i){const n=await this.rpc({type:"runTransient",scene:JSON.stringify(t),config:JSON.stringify(a),seed:Number(s&0xFFFFFFFFn),samples:i});return{bRecoveredT:[n.bRecoveredT[0],n.bRecoveredT[1],n.bRecoveredT[2]],bMagT:n.bMagT,noiseFloorPtSqrtHz:n.noiseFloorPtSqrtHz,sigmaPt:[n.sigmaPt[0],n.sigmaPt[1],n.sigmaPt[2]],nFrames:n.nFrames,witnessHex:n.witnessHex}}async exportProofBundle(){const t=await this.generateWitness(256),a=Array.from(t).map(n=>n.toString(16).padStart(2,"0")).join(""),s=this.bootInfo??await this.boot(),i=JSON.stringify({kind:"nvsim-proof-bundle",version:s.buildVersion,seed:"0x0000002A",nSamples:256,witness:a,expected:s.expectedWitnessHex,ok:a===s.expectedWitnessHex,ts:new Date().toISOString()},null,2);return new Blob([i],{type:"application/json"})}async buildId(){return(await this.rpc({type:"buildId"})).buildId}async close(){this.worker.terminate()}}function bn(e){return e.startsWith("ws://")||e.startsWith("wss://")?e:e.replace(/^http/,"ws")}class yn{constructor(t){this.ws=null,this.bootInfo=null,this.frameSubs=new Set,this.eventSubs=new Set,this.running=!1,this.framesEmitted=0,this.fpsLast=performance.now(),this.fpsCount=0,this.baseUrl=t.replace(/\/$/,""),this.wsUrl=`${bn(this.baseUrl)}/ws/stream`}async json(t,a){const s=await fetch(`${this.baseUrl}${t}`,{...a,headers:{"content-type":"application/json",...a?.headers??{}}});if(!s.ok)throw new Error(`${t}: ${s.status} ${s.statusText}`);return await s.json()}async boot(){if(this.bootInfo)return this.bootInfo;const t=await this.json("/api/health");return this.bootInfo={buildVersion:t.nvsim_version,frameMagic:t.magic,frameBytes:t.frame_bytes,expectedWitnessHex:t.expected_witness_hex},this.openWs(),this.bootInfo}openWs(){if(this.ws)return;const t=new WebSocket(this.wsUrl);t.binaryType="arraybuffer",t.onopen=()=>{this.eventSubs.forEach(a=>a({type:"log",level:"ok",msg:`ws/stream connected · ${this.wsUrl}`}))},t.onclose=()=>{this.ws=null,this.eventSubs.forEach(a=>a({type:"log",level:"warn",msg:"ws/stream closed"}))},t.onerror=()=>{this.eventSubs.forEach(a=>a({type:"log",level:"err",msg:`ws/stream error · ${this.wsUrl}`}))},t.onmessage=a=>{if(!(a.data instanceof ArrayBuffer))return;const s=new Uint8Array(a.data),i=ei(s);if(i.length===0)return;const n={frames:i,bytes:s};this.frameSubs.forEach(m=>m(n)),this.framesEmitted+=i.length,this.fpsCount+=i.length;const l=performance.now();if(l-this.fpsLast>=1e3){const m=this.fpsCount*1e3/(l-this.fpsLast);this.eventSubs.forEach(u=>u({type:"fps",value:m})),this.fpsLast=l,this.fpsCount=0}},this.ws=t}async loadScene(t){await this.json("/api/scene",{method:"PUT",body:JSON.stringify(t)})}async setConfig(t){await this.json("/api/config",{method:"PUT",body:JSON.stringify(t)})}async setSeed(t){await this.json("/api/seed",{method:"PUT",body:JSON.stringify({seed_hex:"0x"+t.toString(16).toUpperCase().padStart(16,"0")})})}async reset(){await this.json("/api/reset",{method:"POST"}),this.running=!1,this.framesEmitted=0,this.eventSubs.forEach(t=>t({type:"state",running:!1,t:0,framesEmitted:0}))}async run(t){await this.json("/api/run",{method:"POST"}),this.running=!0,this.eventSubs.forEach(a=>a({type:"state",running:!0,t:0,framesEmitted:this.framesEmitted}))}async pause(){await this.json("/api/pause",{method:"POST"}),this.running=!1,this.eventSubs.forEach(t=>t({type:"state",running:!1,t:0,framesEmitted:this.framesEmitted}))}async step(t,a){await this.json("/api/step",{method:"POST",body:JSON.stringify({direction:t,dt_ms:a})})}onFrames(t){this.frameSubs.add(t)}onEvent(t){this.eventSubs.add(t)}async generateWitness(t){const a=await this.json("/api/witness/generate",{method:"POST",body:JSON.stringify({samples:t})}),s=new Uint8Array(32);for(let i=0;i<32;i++)s[i]=parseInt(a.witness_hex.slice(i*2,i*2+2),16);return s}async verifyWitness(t){const a=Array.from(t).map(n=>n.toString(16).padStart(2,"0")).join(""),s=await this.json("/api/witness/verify",{method:"POST",body:JSON.stringify({expected_hex:a,samples:256})});if(s.ok)return{ok:!0};const i=new Uint8Array(32);for(let n=0;n<32;n++)i[n]=parseInt(s.actual_hex.slice(n*2,n*2+2),16);return{ok:!1,actual:i}}async exportProofBundle(){const t=await fetch(`${this.baseUrl}/api/export-proof`,{method:"POST"}).then(a=>a.text());return new Blob([t],{type:"application/json"})}async runTransient(t,a,s,i){return{bRecoveredT:[0,0,0],bMagT:0,noiseFloorPtSqrtHz:0,sigmaPt:[0,0,0],nFrames:0,witnessHex:"(transient route not available in WS transport — V1 limitation)"}}async buildId(){return`nvsim@${(this.bootInfo??await this.boot()).buildVersion} (ws)`}async close(){this.ws?.close(),this.ws=null}}function Ns(e){document.documentElement.setAttribute("data-theme",e)}function Ls(e){document.body.classList.remove("density-comfy","density-default","density-compact"),document.body.classList.add(`density-${e}`)}function Fs(e){document.body.classList.toggle("reduce-motion",e)}(async()=>{const e=await be("theme")??"dark",t=await be("density")??"default",a=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,s=await be("motionReduced")??a;Q.value=e,Ns(e),pe.value=t,Ls(t),me.value=s,Fs(s),z(()=>{Ns(Q.value),ye("theme",Q.value)}),z(()=>{Ls(pe.value),ye("density",pe.value)}),z(()=>{Fs(me.value),ye("motionReduced",me.value)});const i=await be("repl-history");i&&Array.isArray(i)&&(qe.value=i),z(()=>{ye("repl-history",qe.value)});const n=await be("scene-positions");n&&Array.isArray(n)&&(lt.value=n),z(()=>{ye("scene-positions",lt.value)});const l=await be("wsUrl")??"";l&&(xe.value=l);const m=await be("transport")??"wasm";ie.value=m,z(()=>{ye("wsUrl",xe.value)}),z(()=>{ye("transport",ie.value)});const u={},y=[],se=performance.now(),Y=T=>{if(T.frames.length===0)return;const k=T.frames[T.frames.length-1];je.value=k;const N=k.bPt[0]*1e-12,_=k.bPt[1]*1e-12,D=k.bPt[2]*1e-12;Pt.value=[N,_,D];const W=Math.sqrt(N*N+_*_+D*D);for(Ge.value=W,Ui([N*1e9,_*1e9,D*1e9]),Bi(Math.min(1,Math.abs(D*1e9)/5+.3)),y.push(W);y.length>256;)y.shift();const L=Us.value;if(L.size===0)return;const ge=(performance.now()-se)/1e3;for(const ve of L){const vt=Xs[ve];if(!vt)continue;u[ve]||(u[ve]={});const Ne={frame:k,bMagT:W,bRecoveredT:[N,_,D],bHistory:y,elapsedS:ge,state:u[ve]};try{const fe=vt(Ne);if(!fe)continue;const ke=Array.isArray(fe)?fe:[fe];for(const Se of ke)Fi(Se),g("info",`<span class="k">[${Se.appId}]</span> <span class="s">${Se.eventName}</span> <span class="n">(${Se.eventId})</span>${Se.detail?" · "+Se.detail:""}`)}catch(fe){g("warn",`[${ve}] runtime error: ${fe.message}`)}}};let I=null;async function Oe(){try{I&&await I.close();const T=ie.value;if(T==="ws"&&xe.value.trim()){const k=new yn(xe.value.trim()),N=await k.boot();I=k,Xt.value=!0,Ca.value=null,we.value=N.expectedWitnessHex,oe(k),g("ok",`transport WS · ${xe.value} · nvsim@${N.buildVersion}`)}else{T==="ws"&&g("warn","WS transport selected but no URL set — falling back to WASM");const k=new fn,N=await k.boot();I=k,Xt.value=!0,Ca.value=null,we.value=N.expectedWitnessHex,oe(k),g("ok",`transport WASM · nvsim@${N.buildVersion} · magic=0x${N.frameMagic.toString(16).toUpperCase()}`)}Hi(I)}catch(T){const k=T.message;Ca.value=k,Xt.value=!1,g("err",`transport boot failed: ${k}`)}}function oe(T){T.onEvent(k=>{k.type==="log"&&g(k.level,k.msg),k.type==="fps"&&(ae.value=k.value),k.type==="state"&&(Fa.value=BigInt(k.framesEmitted))}),T.onFrames(Y)}let Ie=!1;z(()=>{ie.value,xe.value,!Ie&&(Ie=!0,Oe().finally(()=>{Ie=!1}))}),g("info","nvsim — booting transport");let he=null;z(()=>{const T=we.value,k=Xt.value;!T||!k||he!==T&&(he=T,(async()=>{const N=I;if(N)try{const _=new Uint8Array(32);for(let W=0;W<32;W++)_[W]=parseInt(T.slice(W*2,W*2+2),16);const D=await N.verifyWitness(_);if(D.ok)ue.value=T,g("ok",`witness verified · determinism gate ✓ · transport=${ie.value}`);else{const W=Array.from(D.actual).map(L=>L.toString(16).padStart(2,"0")).join("");ue.value=W,g("err",`WITNESS MISMATCH · expected ${T.slice(0,16)}… got ${W.slice(0,16)}…`)}}catch(_){g("warn",`witness verify skipped: ${_.message}`)}})())}),Ni.value="(reference scene)"})();
//# sourceMappingURL=index-DO5G5klP.js.map
