"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8069],{3209:(e,t,o)=>{function n(e){return e.replace(/=\w\d{1,4}(-\w\d{1,4})?-rw$/,"")}function a(e){let{src:t,width:o,quality:a}=e,l="format_key";if([/.*\.googleusercontent\.com/].some(e=>e.test(t)))return"".concat(n(t),"=w").concat(o);if([/.*\.ldrescdn\.com/,/.*\.ldplayer\.net/,/.*\.ldmnq\.com/].some(e=>e.test(t))){let e=new URL(t);return e.searchParams.set("image_process",l),e.searchParams.set("x-oss-process","image/resize,w_".concat(o,"/quality,Q_").concat(a||75)),e.href.replace(l,"format,webp")}if(t.startsWith("/"))try{let e=new URL(t,"https://res.ldrescdn.com/easyfun");return e.searchParams.set("image_process",l),e.searchParams.set("x-oss-process","image/resize,w_".concat(o,"/quality,Q_").concat(a||75)),e.href.replace(l,"format,webp")}catch(e){return"".concat(t,"?w=").concat(o)}else{let e=new URL(t);return e.searchParams.set("w",o),e.href}}o.r(t),o.d(t,{default:()=>a,narrowGoogleImage:()=>n})},49462:(e,t,o)=>{o.d(t,{k:()=>i});var n=o(64795),a=o(92294),l=o(7277);function i(){let[e,t]=(0,l.useAtom)(n.H5);async function o(){let e=await (await fetch("https://res.ldrescdn.com/easyfun/instances-change-event/hosts.json")).json(),{announcement:o,sill:n}=e,a=e.sill>0;return t({announcement:o,waitDowntimeMin:n,isInDowntime:a}),{isInDowntime:a,isMaintain:e.sill>5}}let{run:i}=(0,a.A)(o,{wait:2e3});return{serverStatus:e,updateDowntimeStatus:i,forceUpdateDowntimeStatus:o}}},47231:(e,t,o)=>{o.d(t,{F:()=>r,S:()=>i});let n=["roblox","brawl-stars","free-fire","stumble-guys-cloud-online","ea-sports-fc-uefa-euro-2024","genshin-impact","pubg-mobile-cloud-online","pokemon-tcg-pocket-cloud-online","honkai-star-rail","clash-of-clans","efootball%E2%84%A2-2024","clash-royale-cloud-online","blox-fruits","car-parking-multiplayer","zenless-zone-zero-cloud-online","among-us","jujutsu-kaisen-phantom-parade-cloud-online","extreme-car-driving-simulator-cloud-online","ash-echoes-global-cloud-online","starseed-asnia-trigger-cloud-online","football-master-2-soccer-star-cloud-online","capybara-go-cloud-online","tft-teamfight-tactics-cloud-online","league-of-legends-wild-rift-cloud-online","tsm-cloud-online","fallout-shelter-cloud-online","fallout-shelter-online-cloud-online","chai-chat-ai-platform-cloud-online","plants-vs-zombies-heroes-cloud-online","raven-2-kr","haikyu-touch-the-dream-cloud-online","honkai-impact-3rd-cloud-online","infinity-nikki-cloud-online","girls-frontline-2-exilium-cloud-online","hearthstone-cloud-online","journey-of-monarch-cloud-online","mini-empire-hero-never-cry-cloud-online","heroic-alliance-cloud-online","maiden-academy-idle-rpg-cloud-online","merge-designer-decor-story-cloud-online","magic-forest-dragon-quest-cloud-online","pojavlauncher-cloud-online","fortnite-battle-royale-cloud-online","roblox-vng-cloud-online","monopoly-go-cloud-online","fc-online-m-by-ea-sports-cloud-online","whiteout-survival-cloud-online","candy-crush-soda-saga-cloud-online","guardian-tales","counterside-cloud-online","meow-bakery-cloud-online","moth-lake-a-horror-story-cloud-online","blue-archive","cookierun-kingdom-cloud-online","wuthering-waves","love-and-deepspace-cloud-online","talkie-ai-character-chat","identity-v-cloud-online","adopt-me-","punishing-gray-raven-cloud-online","pk-xd-fun-friends-games-cloud-online","ragnarok-x-next-generation-cloud-online","black-desert-mobile-cloud-online","football-pro-vtc-vn","maplestory-m-fantasy-mmorpg-cloud-online","welcome-to-bloxburg","girls-frontline-cloud-online","fortress-saga-afk-rpg-cloud-online","hai-kyu-fly-high-tw","summoners-war-cloud-online","aether-gazer-cloud-online","com-heavenburnsred-cloud-online","tears-of-themis-cloud-online","block-blast-cloud-online","super-gun-tps-3d-online-cloud-online"];var a=o(8088);function l(e,t){let{gameType:o,seo:l}=e,i=o===a.YU.CLOUD?"games":"html5-games",r="".concat(l,".html");return n.includes(l)&&(i="cloud-games"),"/".concat(i,"/").concat(r).concat(t?"?start=1":"")}function i(){return{toIndex:()=>"/",toAbouts:()=>"/abouts.html",toCookiePolicy:()=>"/cookie-policy.html",toFaq:()=>"/faq.html",toPrivacyPolicy:()=>"/privacy-policy.html",toTermsOfUse:()=>"/terms-of-use.html",toTag:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all";return"/tags/".concat(e,".html")},toSearch:e=>"/search.html?s=".concat(e),toGameDetail:l}}function r(){return{toIndex:()=>"/",toAbouts:()=>"/abouts.html",toCookiePolicy:()=>"/cookie-policy.html",toFaq:()=>"/faq.html",toPrivacyPolicy:()=>"/privacy-policy.html",toTermsOfUse:()=>"/terms-of-use.html",toTag:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all";return"/tags/".concat(e,".html")},toSearch:e=>"/search.html?s=".concat(e),toGameDetail:l}}},26599:(e,t,o)=>{o.d(t,{K6:()=>h,Tx:()=>E,bG:()=>m,mg:()=>d,uj:()=>f});var n=o(64795),a=o(10103),l=o(8088),i=o(7460),r=o(7277),c=o(31573),s=o(65751);let u=(0,c.$)((e,t)=>{if(e(a.Ef)){let l=e(a.SL);if("hasData"===l.state){if(t(a.GZ,+new Date),!l.data.email){var o,n;l.data.email=null===(n=l.data)||void 0===n?void 0:null===(o=n.thirdUserInfos[0])||void 0===o?void 0:o.thirdEmail}t(a.XM,{...e(a.XM),...l.data})}}});function d(e){let{id:t,oneTap:o}=e,n=(0,r.useAtomValue)(a.Sp),l=(0,r.useAtomValue)(a.Kz);(0,s.useEffect)(()=>{if(l){var e,a,i,r;t&&(null===(a=window)||void 0===a||null===(e=a.google)||void 0===e||e.accounts.id.renderButton(document.getElementById(t),{theme:"outline",size:"medium",type:"icon"})),o&&!n&&(null===(r=window)||void 0===r||null===(i=r.google)||void 0===i||i.accounts.id.prompt())}},[l])}function E(){(0,r.useAtom)(a.AP),(0,r.useAtom)(u);let[e,t]=(0,r.useAtom)(a.O1),[o,n]=(0,r.useAtom)(a.XM);return{userIp:e,setUserIp:t,userInfo:o,setUserInfo:n,cleanUserInfo:function(){n({}),t(void 0)}}}function m(){let{cleanUserInfo:e}=E();return{isLogged:(0,r.useAtomValue)(a.Sp),logout:e}}function h(){let[e,t]=(0,r.useAtom)(n.h8),o=(0,s.useMemo)(()=>e.personal,[e.personal]),[i,c]=(0,r.useAtom)(a.gA);return(0,s.useEffect)(()=>{e.personal||c(l.Pf.UNKNOWN)},[e.personal]),{isShowPersonal:o,setShowPersonalState:e=>{var o;t(t=>({...t,personal:e.show})),c(null!==(o=e.source)&&void 0!==o?o:l.Pf.UNKNOWN)}}}function f(){return{getFingerprint:async function(){try{let e=localStorage.getItem("EASYFUN_FINGER_PRINT");if(e)return e;let t=await (0,i.GD)();return localStorage.setItem("EASYFUN_FINGER_PRINT",t),t}catch(e){}}}}},65998:(e,t,o)=>{o.d(t,{dj:()=>d});var n=o(65751);let a=0,l=new Map;function i(e){if(l.has(e))return;let t=setTimeout(()=>{l.delete(e),s({type:"REMOVE_TOAST",toastId:e})},2e3);l.set(e,t)}let r=[],c={toasts:[]};function s(e){c=function(e,t){switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:o}=t;return o?i(o):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===o||void 0===o?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}}(c,e),r.forEach(e=>{e(c)})}function u(e){let{...t}=e,o=(a=(a+1)%Number.MAX_SAFE_INTEGER).toString(),n=()=>s({type:"DISMISS_TOAST",toastId:o});return s({type:"ADD_TOAST",toast:{...t,id:o,open:!0,onOpenChange:e=>{e||n()}}}),{id:o,dismiss:n,update:e=>s({type:"UPDATE_TOAST",toast:{...e,id:o}})}}function d(){let[e,t]=n.useState(c);return n.useEffect(()=>(r.push(t),()=>{let e=r.indexOf(t);e>-1&&r.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>s({type:"DISMISS_TOAST",toastId:e})}}},98166:(e,t,o)=>{async function n(e,t){let o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];((null==t?void 0:t.query)||(null==t?void 0:t.params))&&(e="".concat(e,"?").concat(new URLSearchParams((null==t?void 0:t.query)||(null==t?void 0:t.params)).toString()));let n=await fetch("".concat("https://api.easyfun.gg").concat(e),{...t,body:(null==t?void 0:t.body)?JSON.stringify(t.body):null,headers:Object.assign((null==t?void 0:t.method)==="POST"?{"Content-Type":"application/json"}:{},(null==t?void 0:t.headers)||{}),next:null==t?void 0:t.next,cache:(null==t?void 0:t.next)?"force-cache":"no-store"}),a=await n.json();return o?a:200===a.code?a.data:void(401===a.code&&(localStorage.removeItem("EASYFUN_USERINFO"),window.location.reload()))}o.d(t,{ju:()=>r,C4:()=>h,ue:()=>c,WO:()=>l,zL:()=>m,mk:()=>s,WC:()=>i,wF:()=>d,n3:()=>u,UL:()=>E,Jy:()=>a});let a=e=>n("/tourists/".concat(e),{method:"POST",headers:{"Content-Type":""}}),l=e=>n("/auth/raiseAlert",{method:"POST",body:{msg:e}}),i=e=>n("/official/search",{query:e}),r=e=>n("/official/category/games",{query:{category:e},next:{revalidate:600}}),c=e=>n("/auth/socket",{method:"POST",body:{...e}},!0),s=e=>n("/auth/button",{method:"POST",body:e}),u=()=>n("/auth/ip"),d=e=>n("/auth/history",{params:e}),E=e=>n("/auth/getRemainingTime",{params:e}),m=e=>n("/auth/binding-user-button",{method:"POST",body:e}),h=e=>{let{uid:t,gameId:o,token:a}=e;return n("/auth/user-game-button?uid=".concat(t,"&gameId=").concat(o,"&token=").concat(a))}},32134:(e,t,o)=>{o.d(t,{RT:()=>r,Zm:()=>u,tv:()=>s,v0:()=>c,vD:()=>i});var n=o(8088),a=o(20289),l=o(89951);let i=(0,a.eU)({status:n.fJ.IDLE,fullscreen:!1}),r=(0,l.tG)("EASYFUN_GAME_HISTORY",[]),c=(0,a.eU)({token:"",uid:"",fingerprint:""}),s=(0,a.eU)({gameId:"",businessWssLink:"",device:{},isReconnect:!1}),u=(0,a.eU)(!1)},64795:(e,t,o)=>{o.d(t,{FS:()=>r,H5:()=>c,SZ:()=>s,T$:()=>i,h8:()=>l});var n=o(20289),a=o(89951);let l=(0,n.eU)({search:!1,history:!1,personal:!1,fixed:!1}),i=(0,n.eU)(e=>{let{search:t,history:o,personal:n}=e(l);return t||o||n}),r=(0,n.eU)(e=>e(l).fixed);(0,n.eU)(!1);let c=(0,n.eU)({announcement:"",isInDowntime:!1,waitDowntimeMin:0}),s=(0,a.tG)("EASYFUN_PWA",{isPWAInstalled:!1,hideInstallPromptDeadline:0,install:()=>Promise.resolve(void 0),cancelInstall:()=>{}},void 0,{getOnInit:!0})},10103:(e,t,o)=>{o.d(t,{AP:()=>c,Bp:()=>f,Ef:()=>g,GZ:()=>I,Kz:()=>T,O1:()=>h,SL:()=>u,Sp:()=>_,XM:()=>E,gA:()=>m});var n=o(8088),a=o(20289),l=o(89951),i=o(1457);let r=(0,a.eU)(()=>(0,i.Dh)({region:"oversea",appId:"6666",extAppId:"666600005",languageCode:"en",develop:!Number("1"),code:"",robotCheck:!1})),c=(0,l.Rq)(r),s=(0,a.eU)(()=>i.Jz.createLogin().auto()),u=(0,l.Rq)(s),d=(0,a.eU)(async()=>{let e=(await o.e(2367).then(o.bind(o,82367))).load;return(await e()).get()});(0,l.Rq)(d);let E=(0,l.tG)("EASYFUN_USERINFO",{},void 0,{getOnInit:!0}),m=(0,l.tG)("EASYFUN_LOGIN_SOURCE",n.Pf.UNKNOWN,void 0,{getOnInit:!0}),h=(0,a.eU)(void 0),f=(0,a.eU)(void 0),I=(0,l.tG)("EASYFUN_LAST_UPDATE_TOKEN",0,void 0,{getOnInit:!0}),_=(0,l.mg)(E,e=>!!(null==e?void 0:e.token)),g=(0,a.eU)(e=>+new Date-e(I)>=432e5&&e(_)),T=(0,a.eU)(!1)},8088:(e,t,o)=>{o.d(t,{Pf:()=>c,Vk:()=>n,YU:()=>a,ap:()=>u,e6:()=>r,fA:()=>s,fJ:()=>d,gg:()=>i,xT:()=>l});var n=function(e){return e[e.LOGIN=0]="LOGIN",e[e.SIGNUP=1]="SIGNUP",e[e.RESET=2]="RESET",e}({}),a=function(e){return e[e.CLOUD=1]="CLOUD",e[e.WEBSITE=2]="WEBSITE",e}({}),l=function(e){return e.SUCCESS="success",e.ERROR="error",e.INFO="info",e}({}),i=function(e){return e[e.TRIAL=1]="TRIAL",e[e.LOGIN=2]="LOGIN",e}({}),r=function(e){return e[e.REGISTER=1]="REGISTER",e[e.EMAIL=2]="EMAIL",e[e.GOOGLE=3]="GOOGLE",e[e.GOOGLE_ONE_TAP=4]="GOOGLE_ONE_TAP",e}({}),c=function(e){return e[e.UNKNOWN=0]="UNKNOWN",e[e.GAME_DETAIL_VISITOR_PLAY_BTN=1]="GAME_DETAIL_VISITOR_PLAY_BTN",e[e.GOOGLE_ONE_TAP=2]="GOOGLE_ONE_TAP",e[e.NAV_ICON=3]="NAV_ICON",e[e.GAME_PANEL_TIPS_BAR_BTN=4]="GAME_PANEL_TIPS_BAR_BTN",e[e.QUEUE_POPUP_BTN=5]="QUEUE_POPUP_BTN",e[e.TIME_EXPIRED_POPUP=6]="TIME_EXPIRED_POPUP",e}({}),s=function(e){return e[e.CLOSE_ALERT=0]="CLOSE_ALERT",e[e.SERVER_LOCATION_TIPS=1]="SERVER_LOCATION_TIPS",e[e.LONG_TIME_NO_ACTIVE=2]="LONG_TIME_NO_ACTIVE",e[e.DUPLICATE_CONNECTION=3]="DUPLICATE_CONNECTION",e[e.QUEUE_INFO=4]="QUEUE_INFO",e[e.FREE_GAME_TIME_EXPIRED=5]="FREE_GAME_TIME_EXPIRED",e[e.TOTAL_GAME_TIME_EXPIRED=6]="TOTAL_GAME_TIME_EXPIRED",e[e.REMINDER_CHANGE_BROWSER=7]="REMINDER_CHANGE_BROWSER",e[e.SERVER_IN_DOWNTIME=8]="SERVER_IN_DOWNTIME",e[e.CHECK_EXIT=9]="CHECK_EXIT",e}({}),u=function(e){return e[e.EDIT=0]="EDIT",e[e.ADD=1]="ADD",e[e.HIDE=2]="HIDE",e[e.SHOW=3]="SHOW",e}({}),d=function(e){return e[e.IDLE=0]="IDLE",e[e.LOADING=1]="LOADING",e[e.QUEUE=2]="QUEUE",e[e.PLAYING=3]="PLAYING",e}({})},7460:(e,t,o)=>{function n(e,t){return new Promise((o,n)=>{let a=document.createElement("script");null==t||t.map(e=>a.setAttribute(e.name,e.value)),a.src=e,a.onload=o,a.onerror=n,document.head.appendChild(a)})}function a(e){return new Promise(t=>{let o=setTimeout(()=>{t(!0),clearTimeout(o)},e)})}o.d(t,{GD:()=>i,sz:()=>n,yy:()=>a});let l=null;async function i(){l||(l=(await o.e(2367).then(o.bind(o,82367))).load());let e=await l;return(await e.get()).visitorId}}}]);