import{b as W}from"./chunk-YUW7GALI.js";import{J as E,M as G,W as w,X as y,Z as l,aa as Q,ca as R,ga as U,ka as T,na as V,qa as g}from"./chunk-OKL4RZMA.js";import{e as x,f as p}from"./chunk-GIHFJXZ6.js";import{Bb as M,Bc as O,Bf as m,Ca as s,Cb as k,Cf as L,Ea as f,Hd as H,If as $,Jf as q,Kd as z,Mb as d,Mf as D,Nb as r,Od as I,Td as P,Ud as S,a as C,b as A,bc as u,cc as c,ef as N,fe as F,lb as _,nb as h,pf as B,vb as b,wa as o,zf as j}from"./chunk-NEAIWFFQ.js";var J={size:"m"},Y=z(J);function K(i){return S(Y,i,J)}var Z=["tuiNavigationAside",""],tt=[[["header"]],"*",[["footer"]]],it=["header","*","footer"];var v=["*"];var et=["tuiNavigationHeader",""],nt=["tuiNavigationLogo",""],ot=["tuiNavigationMain",""],at=["tuiNavigationNav",""],rt=(()=>{let t=class t{constructor(){this.expanded=_(!1)}set tuiNavigationAside(n){this.expanded.set(n)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s({type:t,selectors:[["aside","tuiNavigationAside",""]],hostAttrs:["tuiNavigationAside","","tuiTheme","dark"],hostVars:2,hostBindings:function(e,a){e&2&&b("_expanded",a.expanded())},inputs:{tuiNavigationAside:"tuiNavigationAside"},standalone:!0,features:[u([m({size:"s",appearance:"flat"}),y({appearance:"dropdown-navigation",align:"right",offset:12})]),c],attrs:Z,ngContentSelectors:it,decls:5,vars:0,consts:[[1,"t-nav-scrollbar"],["tuiFade","vertical","tuiScrollable","",1,"t-nav-content"]],template:function(e,a){e&1&&(d(tt),r(0),M(1,"tui-scrollbar",0)(2,"div",1),r(3,1),k()(),r(4,2))},dependencies:[E,$,G],styles:[`aside[tuiNavigationAside]{transition-property:width;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:sticky;top:3rem;z-index:1;display:flex;width:3rem;flex-direction:column;padding:.5rem .5rem .25rem;box-sizing:border-box;background:var(--tui-theme-color, #000);color:var(--tui-text-primary)}aside[tuiNavigationAside]:before{content:"";position:absolute;top:0;left:100%;z-index:-1;height:3rem;width:3rem;pointer-events:none;border-top-left-radius:1.25rem;box-shadow:-1.5rem 0 var(--tui-theme-color, #000)}aside[tuiNavigationAside]._expanded{width:13.75rem}aside[tuiNavigationAside]._expanded+main[tuiNavigationMain]{max-width:calc(100% - 13.75rem)}aside[tuiNavigationAside] .t-nav-scrollbar{margin:0 -.25rem}aside[tuiNavigationAside] .t-nav-content{scrollbar-width:none;-ms-overflow-style:none;height:100%;padding:0 .25rem;overflow:auto}aside[tuiNavigationAside] .t-nav-content::-webkit-scrollbar,aside[tuiNavigationAside] .t-nav-content::-webkit-scrollbar-thumb{display:none}aside[tuiNavigationAside] tui-expand [tuiAsideItem]{padding-inline-start:2rem}aside[tuiNavigationAside] hr{background:var(--tui-border-normal);height:1px;margin:0 0 .25rem;border:none}aside[tuiNavigationAside] header{padding-bottom:.25rem;box-shadow:inset 0 -1px var(--tui-border-normal);margin-bottom:1rem}aside[tuiNavigationAside] footer{margin-top:auto;border-top:1.75rem solid transparent}aside[tuiNavigationAside]+main[tuiNavigationMain]{max-width:calc(100% - 3rem)}[tuiAsideItem]{width:100%;justify-content:flex-start;gap:.625rem;margin-bottom:.25rem;color:var(--tui-text-primary)!important}[tuiAsideItem]:after{border:none!important;margin-left:auto!important;color:var(--tui-text-tertiary)}[tuiAsideItem]._chevron-rotated,[tuiAsideItem]._active{background:var(--tui-background-neutral-1-hover)}tui-dropdown[data-appearance=dropdown-navigation]{border:none;background:#323232;background:color-mix(in srgb,var(--tui-theme-color, #000) 80%,#fff)}tui-dropdown[data-appearance=dropdown-navigation] [tuiAsideItem]{justify-content:flex-start}tui-dropdown[data-appearance=dropdown-navigation] [tuiAsideItem]._active{background:transparent}tui-dropdown[data-appearance=dropdown-navigation] [tuiAsideItem]._link:not(._custom):after{opacity:0}tui-dropdown[data-appearance=dropdown-navigation] [tuiAsideItem]._link._active:after{opacity:1}
`],encapsulation:2,changeDetection:0});let i=t;return i})();var st=(()=>{let t=class t{constructor(){this.el=F(),this.aside=o(rt),this.dropdown=o(l,{optional:!0}),this.binding=I(g,"tuiHint",O(()=>{var n;return this.aside.expanded()||this.dropdown?"":(n=this.el.textContent)==null?void 0:n.trim()}))}};t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=f({type:t,selectors:[["","tuiHintAside",""]],standalone:!0,features:[u([V({direction:"right"})]),h([g])]});let i=t;return i})(),di=(()=>{let t=class t{constructor(){this.icon=o(N).check,this.icons=o(j),this.link=o(x,{self:!0,optional:!0}),this.active=H(o(p).isActiveChange),this.size="s"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=f({type:t,selectors:[["","tuiAsideItem",""]],hostAttrs:["tuiButton","","tuiOption",""],hostVars:6,hostBindings:function(e,a){e&2&&b("_link",a.link)("_active",a.active())("_custom",a.icon!==a.icons.iconEnd)},standalone:!0,features:[u([P(U,t),dt(),ut()]),h([st,Q,R,L,{directive:p,inputs:["routerLinkActiveOptions","routerLinkActiveOptions"]}])]});let i=t;return i})();function dt(){return{provide:B,useFactory:()=>{let{check:i,more:t}=o(N),X=o(T,{optional:!0})&&o(x,{self:!0,optional:!0})?i:"";return o(l,{self:!0,optional:!0})?t:X}}}function ut(){return{provide:w,useFactory:()=>A(C({},o(w,{skipSelf:!0})),{offset:o(T,{optional:!0})?8:12})}}var ui=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s({type:t,selectors:[["header","tuiNavigationHeader",""]],hostAttrs:["tuiTheme","dark"],standalone:!0,features:[u([q({size:"s",appearance:"secondary"}),K({size:"xs"}),D({size:"m",appearance:"primary"}),m({size:"s",appearance:"flat"}),y({appearance:"dropdown-navigation"})]),c],attrs:et,ngContentSelectors:v,decls:1,vars:0,template:function(e,a){e&1&&(d(),r(0))},styles:[`header[tuiNavigationHeader]{--tui-text-action: var(--tui-text-primary);--tui-text-action-hover: var(--tui-text-primary);position:sticky;top:0;z-index:1;display:flex;height:3rem;width:100%;align-items:center;gap:.25rem;padding:.5rem;box-sizing:border-box;font:var(--tui-font-text-s);line-height:1rem;background:var(--tui-theme-color, #000);color:var(--tui-text-primary)}header[tuiNavigationHeader]:before,header[tuiNavigationHeader]:after{content:"";position:absolute;top:100%;z-index:-1;height:3rem;width:3rem;pointer-events:none;box-shadow:0 -1.5rem var(--tui-theme-color, #000)}header[tuiNavigationHeader]:before{left:0;border-top-left-radius:1.25rem}header[tuiNavigationHeader]:after{right:0;border-top-right-radius:1.25rem}header[tuiNavigationHeader] [tuiNavigationLogo]{padding:0 .5rem;margin-inline-start:.25rem}header[tuiNavigationHeader] [tuiNavigationLogo] tui-icon{font-size:1rem}header[tuiNavigationHeader] [tuiButton],header[tuiNavigationHeader] [tuiBadge],header[tuiNavigationHeader] [tuiChip],header[tuiNavigationHeader] tui-badge,header[tuiNavigationHeader] tui-chip{max-width:8rem}header[tuiNavigationHeader] hr{width:2rem;margin:0 0 0 auto;border:none;visibility:hidden;flex-shrink:0}header[tuiNavigationHeader] hr~[tuiButton]{margin-right:.5rem}tui-dropdown[data-appearance=dropdown-navigation]{--tui-text-primary: #fff;--tui-background-neutral-1: rgba(255, 255, 255, .16);border:none;color:var(--tui-text-primary);background:#323232;background:color-mix(in srgb,var(--tui-theme-color, #000) 80%,#fff)}
`],encapsulation:2,changeDetection:0});let i=t;return i})(),ci=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s({type:t,selectors:[["","tuiNavigationLogo",""]],standalone:!0,features:[c],attrs:nt,ngContentSelectors:v,decls:1,vars:0,template:function(e,a){e&1&&(d(),r(0))},styles:[`[tuiNavigationLogo]{display:flex;align-items:center;gap:.5rem;overflow:hidden;white-space:nowrap;font-weight:700}
`],encapsulation:2,changeDetection:0});let i=t;return i})(),pi=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s({type:t,selectors:[["main","tuiNavigationMain",""]],hostAttrs:["tuiNavigationMain",""],standalone:!0,features:[c],attrs:ot,ngContentSelectors:v,decls:1,vars:0,template:function(e,a){e&1&&(d(),r(0))},styles:[`main[tuiNavigationMain]{transition-property:max-width;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:grid;grid-template-columns:repeat(12,minmax(0,8.5625rem));gap:0 1rem;justify-content:center;flex:1;padding:0 1.5rem;isolation:isolate;box-sizing:border-box}main[tuiNavigationMain]>[tuiHeader]{margin:1rem 0 .5rem}main[tuiNavigationMain]>[tuiHeader][tuiCardLarge]{flex-direction:column;gap:1rem}main[tuiNavigationMain]>[tuiHeader][tuiCardLarge]>:last-child:not([tuiTitle]){margin-bottom:.25rem}main[tuiNavigationMain]>[tuiHeader]:not([tuiCardLarge]) [tuiTitle]{max-width:42rem;white-space:nowrap;gap:.375rem;overflow:hidden}main[tuiNavigationMain]>[tuiHeader]:not([tuiCardLarge]) [tuiSubtitle]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;word-break:break-word;font:var(--tui-font-text-s);overflow:hidden}main[tuiNavigationMain]>[tuiHeader] [tuiCaption]{scrollbar-width:none;-ms-overflow-style:none;display:flex;gap:1rem;color:var(--tui-text-tertiary);font:var(--tui-font-text-s);white-space:nowrap;text-transform:none;overflow:auto}main[tuiNavigationMain]>[tuiHeader] [tuiCaption]::-webkit-scrollbar,main[tuiNavigationMain]>[tuiHeader] [tuiCaption]::-webkit-scrollbar-thumb{display:none}main[tuiNavigationMain]>[tuiHeader] [tuiCaption] tui-icon{font-size:1rem;margin:.125rem 0;color:var(--tui-text-secondary)}main[tuiNavigationMain]>[tuiHeader] [tuiAccessories]{margin-inline-start:3rem;gap:.5rem!important}main[tuiNavigationMain]>a:first-child,main[tuiNavigationMain]>button:first-child,main[tuiNavigationMain]>tui-breadcrumbs:first-child{height:1.25rem;padding:0;margin-top:.875rem;justify-self:flex-start}main[tuiNavigationMain]>*{grid-column:span 12;max-width:100%}
`],encapsulation:2,changeDetection:0});let i=t;return i})(),mi=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s({type:t,selectors:[["nav","tuiNavigationNav",""]],standalone:!0,features:[u([D({size:"m"}),m({size:"s"}),W({size:"m"})]),c],attrs:at,ngContentSelectors:v,decls:1,vars:0,template:function(e,a){e&1&&(d(),r(0))},styles:[`nav[tuiNavigationNav]{top:3rem;z-index:1;display:flex;min-height:3rem;align-items:center;gap:.5rem;padding:.25rem 0 0;box-sizing:border-box;white-space:nowrap;overflow:hidden;font:var(--tui-font-text-s);line-height:1rem;color:var(--tui-text-secondary);border-image:linear-gradient(0deg,var(--tui-border-normal) 1px,var(--tui-background-base) 0) fill 0/0/0 100vw}nav[tuiNavigationNav] [tuiNavigationLogo]{font:var(--tui-font-text-m);font-weight:700;color:var(--tui-text-primary)}nav[tuiNavigationNav]>a{text-decoration:none;color:inherit}nav[tuiNavigationNav]>hr{width:2rem;margin:0 0 0 auto;border:none;visibility:hidden;flex-shrink:0}nav[tuiNavigationNav] tui-icon{font-size:1rem;vertical-align:bottom}nav[tuiNavigationNav] tui-tabs,nav[tuiNavigationNav] [tuiTabs]{box-shadow:none;margin-inline-end:1rem}nav[tuiNavigationNav] tui-tabs:before,nav[tuiNavigationNav] [tuiTabs]:before{background:var(--tui-background-accent-opposite-pressed)}
`],encapsulation:2,changeDetection:0});let i=t;return i})();export{rt as a,di as b,ui as c,ci as d,pi as e,mi as f};