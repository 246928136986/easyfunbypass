"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5258],{41201:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(9305),o=n(7337);let i=function(e){if(!e||!document.getRootNode)return document;var t,n=Array.isArray(e)?e:[e];return n.every(function(e){var t=(0,o.e)(e);return!!t&&t.getRootNode()instanceof ShadowRoot})&&(t=(0,o.e)(n[0]))?t.getRootNode():document};var a=n(40643);function l(e,t,n){void 0===n&&(n="click");var l=(0,r.A)(e);(0,a.A)(function(){var e=function(e){(Array.isArray(t)?t:[t]).some(function(t){var n=(0,o.e)(t);return!n||n.contains(e.target)})||l.current(e)},r=i(t),a=Array.isArray(n)?n:[n];return a.forEach(function(t){return r.addEventListener(t,e)}),function(){a.forEach(function(t){return r.removeEventListener(t,e)})}},Array.isArray(n)?n:[n],t)}},19783:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(31677),o=n(5955),i=n.n(o),a=n(65751),l=n(9305),s=n(21516),u=function(e){if(!e)return 0;var t=i()(e).valueOf()-Date.now();return t<0?0:t};let c=function(e){void 0===e&&(e={});var t=e||{},n=t.leftTime,o=t.targetDate,i=t.interval,c=void 0===i?1e3:i,d=t.onEnd,f=(0,a.useMemo)(function(){return(0,s.Et)(n)&&n>0?Date.now()+n:void 0},[n]),v="leftTime"in e?f:o,m=(0,r.__read)((0,a.useState)(function(){return u(v)}),2),p=m[0],y=m[1],w=(0,l.A)(d);(0,a.useEffect)(function(){if(!v){y(0);return}y(u(v));var e=setInterval(function(){var t,n=u(v);y(n),0===n&&(clearInterval(e),null===(t=w.current)||void 0===t||t.call(w))},c);return function(){return clearInterval(e)}},[v,c]);var E=(0,a.useMemo)(function(){return{days:Math.floor(p/864e5),hours:Math.floor(p/36e5)%24,minutes:Math.floor(p/6e4)%60,seconds:Math.floor(p/1e3)%60,milliseconds:Math.floor(p)%1e3}},[p]);return[p,E]}},29503:(e,t,n)=>{var r=n(65751),o=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(r);!function(e){if(!e||"undefined"==typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let i=r.forwardRef(function(e,t){let{style:n={},className:i="",autoFill:a=!1,play:l=!0,pauseOnHover:s=!1,pauseOnClick:u=!1,direction:c="left",speed:d=50,delay:f=0,loop:v=0,gradient:m=!1,gradientColor:p="white",gradientWidth:y=200,onFinish:w,onCycleComplete:E,onMount:h,children:g}=e,[b,x]=r.useState(0),[T,C]=r.useState(0),[R,N]=r.useState(1),[P,L]=r.useState(!1),M=r.useRef(null),D=t||M,S=r.useRef(null),A=r.useCallback(()=>{if(S.current&&D.current){let e=D.current.getBoundingClientRect(),t=S.current.getBoundingClientRect(),n=e.width,r=t.width;("up"===c||"down"===c)&&(n=e.height,r=t.height),a&&n&&r?N(r<n?Math.ceil(n/r):1):N(1),x(n),C(r)}},[a,D,c]);r.useEffect(()=>{if(P&&(A(),S.current&&D.current)){let e=new ResizeObserver(()=>A());return e.observe(D.current),e.observe(S.current),()=>{e&&e.disconnect()}}},[A,D,P]),r.useEffect(()=>{A()},[A,g]),r.useEffect(()=>{L(!0)},[]),r.useEffect(()=>{"function"==typeof h&&h()},[]);let j=r.useMemo(()=>a?T*R/d:T<b?b/d:T/d,[a,b,T,R,d]),O=r.useMemo(()=>Object.assign(Object.assign({},n),{"--pause-on-hover":!l||s?"paused":"running","--pause-on-click":!l||s&&!u||u?"paused":"running","--width":"up"===c||"down"===c?"100vh":"100%","--transform":"up"===c?"rotate(-90deg)":"down"===c?"rotate(90deg)":"none"}),[n,l,s,u,c]),k=r.useMemo(()=>({"--gradient-color":p,"--gradient-width":"number"==typeof y?"".concat(y,"px"):y}),[p,y]),F=r.useMemo(()=>({"--play":l?"running":"paused","--direction":"left"===c?"normal":"reverse","--duration":"".concat(j,"s"),"--delay":"".concat(f,"s"),"--iteration-count":v?"".concat(v):"infinite","--min-width":a?"auto":"100%"}),[l,c,j,f,v,a]),I=r.useMemo(()=>({"--transform":"up"===c?"rotate(90deg)":"down"===c?"rotate(-90deg)":"none"}),[c]),_=r.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>o.default.createElement(r.Fragment,{key:t},r.Children.map(g,e=>o.default.createElement("div",{style:I,className:"rfm-child"},e)))),[I,g]);return P?o.default.createElement("div",{ref:D,style:O,className:"rfm-marquee-container "+i},m&&o.default.createElement("div",{style:k,className:"rfm-overlay"}),o.default.createElement("div",{className:"rfm-marquee",style:F,onAnimationIteration:E,onAnimationEnd:w},o.default.createElement("div",{className:"rfm-initial-child-container",ref:S},r.Children.map(g,e=>o.default.createElement("div",{style:I,className:"rfm-child"},e))),_(R-1)),o.default.createElement("div",{className:"rfm-marquee",style:F},_(R))):null});t.A=i},95266:(e,t,n)=>{n.d(t,{rc:()=>ev,bm:()=>em,VY:()=>ef,Kq:()=>es,bL:()=>ec,hE:()=>ed,LM:()=>eu});var r,o=n(65751),i=n(74710);function a(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}function l(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function s(...e){return t=>{let n=!1,r=e.map(e=>{let r=l(e,t);return n||"function"!=typeof r||(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];"function"==typeof n?n():l(e[t],null)}}}}function u(...e){return o.useCallback(s(...e),e)}var c=n(8991);function d(e,t=[]){let n=[],r=()=>{let t=n.map(e=>o.createContext(e));return function(n){let r=n?.[e]||t;return o.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let i=o.createContext(r),a=n.length;n=[...n,r];let l=t=>{let{scope:n,children:r,...l}=t,s=n?.[e]?.[a]||i,u=o.useMemo(()=>l,Object.values(l));return(0,c.jsx)(s.Provider,{value:u,children:r})};return l.displayName=t+"Provider",[l,function(n,l){let s=l?.[e]?.[a]||i,u=o.useContext(s);if(u)return u;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}var f=o.forwardRef((e,t)=>{let{children:n,...r}=e,i=o.Children.toArray(n),a=i.find(p);if(a){let e=a.props.children,n=i.map(t=>t!==a?t:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,c.jsx)(v,{...r,ref:t,children:o.isValidElement(e)?o.cloneElement(e,void 0,n):null})}return(0,c.jsx)(v,{...r,ref:t,children:n})});f.displayName="Slot";var v=o.forwardRef((e,t)=>{let{children:n,...r}=e;if(o.isValidElement(n)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n);return o.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?s(t,e):e})}return o.Children.count(n)>1?o.Children.only(null):null});v.displayName="SlotClone";var m=({children:e})=>(0,c.jsx)(c.Fragment,{children:e});function p(e){return o.isValidElement(e)&&e.type===m}var y=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=o.forwardRef((e,n)=>{let{asChild:r,...o}=e,i=r?f:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,c.jsx)(i,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function w(e,t){e&&i.flushSync(()=>e.dispatchEvent(t))}function E(e){let t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...e)=>t.current?.(...e),[])}var h="dismissableLayer.update",g=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),b=o.forwardRef((e,t)=>{var n,i;let{disableOutsidePointerEvents:l=!1,onEscapeKeyDown:s,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:v,onDismiss:m,...p}=e,w=o.useContext(g),[b,x]=o.useState(null),R=null!==(i=null==b?void 0:b.ownerDocument)&&void 0!==i?i:null===(n=globalThis)||void 0===n?void 0:n.document,[,N]=o.useState({}),P=u(t,e=>x(e)),L=Array.from(w.layers),[M]=[...w.layersWithOutsidePointerEventsDisabled].slice(-1),D=L.indexOf(M),S=b?L.indexOf(b):-1,A=w.layersWithOutsidePointerEventsDisabled.size>0,j=S>=D,O=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=E(e),i=o.useRef(!1),a=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!i.current){let t=function(){C("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",a.current),a.current=t,n.addEventListener("click",a.current,{once:!0})):t()}else n.removeEventListener("click",a.current);i.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",a.current)}},[n,r]),{onPointerDownCapture:()=>i.current=!0}}(e=>{let t=e.target,n=[...w.branches].some(e=>e.contains(t));!j||n||(null==d||d(e),null==v||v(e),e.defaultPrevented||null==m||m())},R),k=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=E(e),i=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!i.current&&C("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}(e=>{let t=e.target;[...w.branches].some(e=>e.contains(t))||(null==f||f(e),null==v||v(e),e.defaultPrevented||null==m||m())},R);return!function(e,t=globalThis?.document){let n=E(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{S!==w.layers.size-1||(null==s||s(e),!e.defaultPrevented&&m&&(e.preventDefault(),m()))},R),o.useEffect(()=>{if(b)return l&&(0===w.layersWithOutsidePointerEventsDisabled.size&&(r=R.body.style.pointerEvents,R.body.style.pointerEvents="none"),w.layersWithOutsidePointerEventsDisabled.add(b)),w.layers.add(b),T(),()=>{l&&1===w.layersWithOutsidePointerEventsDisabled.size&&(R.body.style.pointerEvents=r)}},[b,R,l,w]),o.useEffect(()=>()=>{b&&(w.layers.delete(b),w.layersWithOutsidePointerEventsDisabled.delete(b),T())},[b,w]),o.useEffect(()=>{let e=()=>N({});return document.addEventListener(h,e),()=>document.removeEventListener(h,e)},[]),(0,c.jsx)(y.div,{...p,ref:P,style:{pointerEvents:A?j?"auto":"none":void 0,...e.style},onFocusCapture:a(e.onFocusCapture,k.onFocusCapture),onBlurCapture:a(e.onBlurCapture,k.onBlurCapture),onPointerDownCapture:a(e.onPointerDownCapture,O.onPointerDownCapture)})});b.displayName="DismissableLayer";var x=o.forwardRef((e,t)=>{let n=o.useContext(g),r=o.useRef(null),i=u(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,c.jsx)(y.div,{...e,ref:i})});function T(){let e=new CustomEvent(h);document.dispatchEvent(e)}function C(e,t,n,r){let{discrete:o}=r,i=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),o?w(i,a):i.dispatchEvent(a)}x.displayName="DismissableLayerBranch";var R=globalThis?.document?o.useLayoutEffect:()=>{},N=o.forwardRef((e,t)=>{var n,r;let{container:a,...l}=e,[s,u]=o.useState(!1);R(()=>u(!0),[]);let d=a||s&&(null===(r=globalThis)||void 0===r?void 0:null===(n=r.document)||void 0===n?void 0:n.body);return d?i.createPortal((0,c.jsx)(y.div,{...l,ref:t}),d):null});N.displayName="Portal";var P=e=>{let{present:t,children:n}=e,r=function(e){var t,n;let[r,i]=o.useState(),a=o.useRef({}),l=o.useRef(e),s=o.useRef("none"),[u,c]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},o.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return o.useEffect(()=>{let e=L(a.current);s.current="mounted"===u?e:"none"},[u]),R(()=>{let t=a.current,n=l.current;if(n!==e){let r=s.current,o=L(t);e?c("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?c("UNMOUNT"):n&&r!==o?c("ANIMATION_OUT"):c("UNMOUNT"),l.current=e}},[e,c]),R(()=>{if(r){var e;let t;let n=null!==(e=r.ownerDocument.defaultView)&&void 0!==e?e:window,o=e=>{let o=L(a.current).includes(e.animationName);if(e.target===r&&o&&(c("ANIMATION_END"),!l.current)){let e=r.style.animationFillMode;r.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===r.style.animationFillMode&&(r.style.animationFillMode=e)})}},i=e=>{e.target===r&&(s.current=L(a.current))};return r.addEventListener("animationstart",i),r.addEventListener("animationcancel",o),r.addEventListener("animationend",o),()=>{n.clearTimeout(t),r.removeEventListener("animationstart",i),r.removeEventListener("animationcancel",o),r.removeEventListener("animationend",o)}}c("ANIMATION_END")},[r,c]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:o.useCallback(e=>{e&&(a.current=getComputedStyle(e)),i(e)},[])}}(t),i="function"==typeof n?n({present:r.isPresent}):o.Children.only(n),a=u(r.ref,function(e){var t,n;let r=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?e.ref:(o=(r=null===(n=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(i));return"function"==typeof n||r.isPresent?o.cloneElement(i,{ref:a}):null};function L(e){return(null==e?void 0:e.animationName)||"none"}P.displayName="Presence";var M=o.forwardRef((e,t)=>(0,c.jsx)(y.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));M.displayName="VisuallyHidden";var D="ToastProvider",[S,A,j]=function(e){let t=e+"CollectionProvider",[n,r]=d(t),[i,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),l=e=>{let{scope:t,children:n}=e,r=o.useRef(null),a=o.useRef(new Map).current;return(0,c.jsx)(i,{scope:t,itemMap:a,collectionRef:r,children:n})};l.displayName=t;let s=e+"CollectionSlot",v=o.forwardRef((e,t)=>{let{scope:n,children:r}=e,o=u(t,a(s,n).collectionRef);return(0,c.jsx)(f,{ref:o,children:r})});v.displayName=s;let m=e+"CollectionItemSlot",p="data-radix-collection-item",y=o.forwardRef((e,t)=>{let{scope:n,children:r,...i}=e,l=o.useRef(null),s=u(t,l),d=a(m,n);return o.useEffect(()=>(d.itemMap.set(l,{ref:l,...i}),()=>void d.itemMap.delete(l))),(0,c.jsx)(f,{[p]:"",ref:s,children:r})});return y.displayName=m,[{Provider:l,Slot:v,ItemSlot:y},function(t){let n=a(e+"CollectionConsumer",t);return o.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(p,"]")));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},r]}("Toast"),[O,k]=d("Toast",[j]),[F,I]=O(D),_=e=>{let{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:a=50,children:l}=e,[s,u]=o.useState(null),[d,f]=o.useState(0),v=o.useRef(!1),m=o.useRef(!1);return n.trim()||console.error("Invalid prop `label` supplied to `".concat(D,"`. Expected non-empty `string`.")),(0,c.jsx)(S.Provider,{scope:t,children:(0,c.jsx)(F,{scope:t,label:n,duration:r,swipeDirection:i,swipeThreshold:a,toastCount:d,viewport:s,onViewportChange:u,onToastAdd:o.useCallback(()=>f(e=>e+1),[]),onToastRemove:o.useCallback(()=>f(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:v,isClosePausedRef:m,children:l})})};_.displayName=D;var W="ToastViewport",K=["F8"],U="toast.viewportPause",V="toast.viewportResume",q=o.forwardRef((e,t)=>{let{__scopeToast:n,hotkey:r=K,label:i="Notifications ({hotkey})",...a}=e,l=I(W,n),s=A(n),d=o.useRef(null),f=o.useRef(null),v=o.useRef(null),m=o.useRef(null),p=u(t,m,l.onViewportChange),w=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),E=l.toastCount>0;o.useEffect(()=>{let e=e=>{var t;0!==r.length&&r.every(t=>e[t]||e.code===t)&&(null===(t=m.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[r]),o.useEffect(()=>{let e=d.current,t=m.current;if(E&&e&&t){let n=()=>{if(!l.isClosePausedRef.current){let e=new CustomEvent(U);t.dispatchEvent(e),l.isClosePausedRef.current=!0}},r=()=>{if(l.isClosePausedRef.current){let e=new CustomEvent(V);t.dispatchEvent(e),l.isClosePausedRef.current=!1}},o=t=>{e.contains(t.relatedTarget)||r()},i=()=>{e.contains(document.activeElement)||r()};return e.addEventListener("focusin",n),e.addEventListener("focusout",o),e.addEventListener("pointermove",n),e.addEventListener("pointerleave",i),window.addEventListener("blur",n),window.addEventListener("focus",r),()=>{e.removeEventListener("focusin",n),e.removeEventListener("focusout",o),e.removeEventListener("pointermove",n),e.removeEventListener("pointerleave",i),window.removeEventListener("blur",n),window.removeEventListener("focus",r)}}},[E,l.isClosePausedRef]);let h=o.useCallback(e=>{let{tabbingDirection:t}=e,n=s().map(e=>{let n=e.ref.current,r=[n,...function(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}(n)];return"forwards"===t?r:r.reverse()});return("forwards"===t?n.reverse():n).flat()},[s]);return o.useEffect(()=>{let e=m.current;if(e){let t=t=>{let n=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!n){var r,o,i;let n=document.activeElement,a=t.shiftKey;if(t.target===e&&a){null===(r=f.current)||void 0===r||r.focus();return}let l=h({tabbingDirection:a?"backwards":"forwards"}),s=l.findIndex(e=>e===n);el(l.slice(s+1))?t.preventDefault():a?null===(o=f.current)||void 0===o||o.focus():null===(i=v.current)||void 0===i||i.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[s,h]),(0,c.jsxs)(x,{ref:d,role:"region","aria-label":i.replace("{hotkey}",w),tabIndex:-1,style:{pointerEvents:E?void 0:"none"},children:[E&&(0,c.jsx)(z,{ref:f,onFocusFromOutsideViewport:()=>{el(h({tabbingDirection:"forwards"}))}}),(0,c.jsx)(S.Slot,{scope:n,children:(0,c.jsx)(y.ol,{tabIndex:-1,...a,ref:p})}),E&&(0,c.jsx)(z,{ref:v,onFocusFromOutsideViewport:()=>{el(h({tabbingDirection:"backwards"}))}})]})});q.displayName=W;var B="ToastFocusProxy",z=o.forwardRef((e,t)=>{let{__scopeToast:n,onFocusFromOutsideViewport:r,...o}=e,i=I(B,n);return(0,c.jsx)(M,{"aria-hidden":!0,tabIndex:0,...o,ref:t,style:{position:"fixed"},onFocus:e=>{var t;let n=e.relatedTarget;(null===(t=i.viewport)||void 0===t?void 0:t.contains(n))||r()}})});z.displayName=B;var $="Toast",X=o.forwardRef((e,t)=>{let{forceMount:n,open:r,defaultOpen:i,onOpenChange:l,...s}=e,[u=!0,d]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,i]=function({defaultProp:e,onChange:t}){let n=o.useState(e),[r]=n,i=o.useRef(r),a=E(t);return o.useEffect(()=>{i.current!==r&&(a(r),i.current=r)},[r,i,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,l=a?e:r,s=E(n);return[l,o.useCallback(t=>{if(a){let n="function"==typeof t?t(e):t;n!==e&&s(n)}else i(t)},[a,e,i,s])]}({prop:r,defaultProp:i,onChange:l});return(0,c.jsx)(P,{present:n||u,children:(0,c.jsx)(Z,{open:u,...s,ref:t,onClose:()=>d(!1),onPause:E(e.onPause),onResume:E(e.onResume),onSwipeStart:a(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:a(e.onSwipeMove,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y","".concat(n,"px"))}),onSwipeCancel:a(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:a(e.onSwipeEnd,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y","".concat(n,"px")),d(!1)})})})});X.displayName=$;var[H,Y]=O($,{onClose(){}}),Z=o.forwardRef((e,t)=>{let{__scopeToast:n,type:r="foreground",duration:l,open:s,onClose:d,onEscapeKeyDown:f,onPause:v,onResume:m,onSwipeStart:p,onSwipeMove:w,onSwipeCancel:h,onSwipeEnd:g,...x}=e,T=I($,n),[C,R]=o.useState(null),N=u(t,e=>R(e)),P=o.useRef(null),L=o.useRef(null),M=l||T.duration,D=o.useRef(0),A=o.useRef(M),j=o.useRef(0),{onToastAdd:O,onToastRemove:k}=T,F=E(()=>{var e;(null==C?void 0:C.contains(document.activeElement))&&(null===(e=T.viewport)||void 0===e||e.focus()),d()}),_=o.useCallback(e=>{e&&e!==1/0&&(window.clearTimeout(j.current),D.current=new Date().getTime(),j.current=window.setTimeout(F,e))},[F]);o.useEffect(()=>{let e=T.viewport;if(e){let t=()=>{_(A.current),null==m||m()},n=()=>{let e=new Date().getTime()-D.current;A.current=A.current-e,window.clearTimeout(j.current),null==v||v()};return e.addEventListener(U,n),e.addEventListener(V,t),()=>{e.removeEventListener(U,n),e.removeEventListener(V,t)}}},[T.viewport,M,v,m,_]),o.useEffect(()=>{s&&!T.isClosePausedRef.current&&_(M)},[s,M,T.isClosePausedRef,_]),o.useEffect(()=>(O(),()=>k()),[O,k]);let W=o.useMemo(()=>C?function e(t){let n=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&n.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let r=t.ariaHidden||t.hidden||"none"===t.style.display,o=""===t.dataset.radixToastAnnounceExclude;if(!r){if(o){let e=t.dataset.radixToastAnnounceAlt;e&&n.push(e)}else n.push(...e(t))}}}),n}(C):null,[C]);return T.viewport?(0,c.jsxs)(c.Fragment,{children:[W&&(0,c.jsx)(G,{__scopeToast:n,role:"status","aria-live":"foreground"===r?"assertive":"polite","aria-atomic":!0,children:W}),(0,c.jsx)(H,{scope:n,onClose:F,children:i.createPortal((0,c.jsx)(S.ItemSlot,{scope:n,children:(0,c.jsx)(b,{asChild:!0,onEscapeKeyDown:a(f,()=>{T.isFocusedToastEscapeKeyDownRef.current||F(),T.isFocusedToastEscapeKeyDownRef.current=!1}),children:(0,c.jsx)(y.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":s?"open":"closed","data-swipe-direction":T.swipeDirection,...x,ref:N,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:a(e.onKeyDown,e=>{"Escape"!==e.key||(null==f||f(e.nativeEvent),e.nativeEvent.defaultPrevented||(T.isFocusedToastEscapeKeyDownRef.current=!0,F()))}),onPointerDown:a(e.onPointerDown,e=>{0===e.button&&(P.current={x:e.clientX,y:e.clientY})}),onPointerMove:a(e.onPointerMove,e=>{if(!P.current)return;let t=e.clientX-P.current.x,n=e.clientY-P.current.y,r=!!L.current,o=["left","right"].includes(T.swipeDirection),i=["left","up"].includes(T.swipeDirection)?Math.min:Math.max,a=o?i(0,t):0,l=o?0:i(0,n),s="touch"===e.pointerType?10:2,u={x:a,y:l},c={originalEvent:e,delta:u};r?(L.current=u,ei("toast.swipeMove",w,c,{discrete:!1})):ea(u,T.swipeDirection,s)?(L.current=u,ei("toast.swipeStart",p,c,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>s||Math.abs(n)>s)&&(P.current=null)}),onPointerUp:a(e.onPointerUp,e=>{let t=L.current,n=e.target;if(n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),L.current=null,P.current=null,t){let n=e.currentTarget,r={originalEvent:e,delta:t};ea(t,T.swipeDirection,T.swipeThreshold)?ei("toast.swipeEnd",g,r,{discrete:!0}):ei("toast.swipeCancel",h,r,{discrete:!0}),n.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})})}),T.viewport)})]}):null}),G=e=>{let{__scopeToast:t,children:n,...r}=e,i=I($,t),[a,l]=o.useState(!1),[s,u]=o.useState(!1);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},t=E(e);R(()=>{let e=0,n=0;return e=window.requestAnimationFrame(()=>n=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(n)}},[t])}(()=>l(!0)),o.useEffect(()=>{let e=window.setTimeout(()=>u(!0),1e3);return()=>window.clearTimeout(e)},[]),s?null:(0,c.jsx)(N,{asChild:!0,children:(0,c.jsx)(M,{...r,children:a&&(0,c.jsxs)(c.Fragment,{children:[i.label," ",n]})})})},J=o.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e;return(0,c.jsx)(y.div,{...r,ref:t})});J.displayName="ToastTitle";var Q=o.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e;return(0,c.jsx)(y.div,{...r,ref:t})});Q.displayName="ToastDescription";var ee="ToastAction",et=o.forwardRef((e,t)=>{let{altText:n,...r}=e;return n.trim()?(0,c.jsx)(eo,{altText:n,asChild:!0,children:(0,c.jsx)(er,{...r,ref:t})}):(console.error("Invalid prop `altText` supplied to `".concat(ee,"`. Expected non-empty `string`.")),null)});et.displayName=ee;var en="ToastClose",er=o.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e,o=Y(en,n);return(0,c.jsx)(eo,{asChild:!0,children:(0,c.jsx)(y.button,{type:"button",...r,ref:t,onClick:a(e.onClick,o.onClose)})})});er.displayName=en;var eo=o.forwardRef((e,t)=>{let{__scopeToast:n,altText:r,...o}=e;return(0,c.jsx)(y.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...o,ref:t})});function ei(e,t,n,r){let{discrete:o}=r,i=n.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),o?w(i,a):i.dispatchEvent(a)}var ea=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=Math.abs(e.x),o=Math.abs(e.y),i=r>o;return"left"===t||"right"===t?i&&r>n:!i&&o>n};function el(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}var es=_,eu=q,ec=X,ed=J,ef=Q,ev=et,em=er}}]);