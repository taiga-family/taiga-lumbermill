import"./chunk-JUAR2SQB.js";import{a as Yt,b as Zt,c as Kt,d as qt,e as Jt}from"./chunk-ZN6AO4BG.js";import"./chunk-YUW7GALI.js";import{b as kt,d as Ht,g as Ut}from"./chunk-GONOUNY6.js";import"./chunk-PIDCXASU.js";import"./chunk-NL4UQKF6.js";import"./chunk-UPS6ZX2Y.js";import{a as Gt}from"./chunk-AWGYT4IY.js";import"./chunk-NSSAPNB2.js";import"./chunk-LS7UCRAC.js";import"./chunk-DNEQ7KDT.js";import{$ as jt,A as B,B as Et,C as Ot,E as Mt,G as W,I as Rt,P as L,V as Pt,Z as Ft,da as Bt,ia as Lt,j as xt,ka as Vt,ua as Wt,w as At,x as D,y as j,z as Nt}from"./chunk-OKL4RZMA.js";import{c as vt,e as gt,g as Tt,h as F}from"./chunk-GIHFJXZ6.js";import"./chunk-VVRWXTJV.js";import{$e as Dt,A as C,Ab as et,Bb as a,Ca as h,Cb as s,Cf as wt,Db as m,Df as zt,Ea as Y,Ec as k,Hb as E,Hd as yt,If as $t,Ka as x,Kb as b,Kd as Ct,La as A,Lb as T,Mb as it,Nb as f,Nc as R,Pc as P,Q as $,Qe as bt,Sb as ot,Ta as Z,Tb as d,Tc as ut,Ub as nt,Vb as z,Xa as U,Xb as rt,Xc as dt,Yb as at,Zb as st,Zc as ft,_c as ht,bc as pt,cb as c,cc as y,cf as _t,df as It,e as l,gb as K,ib as q,jc as O,kc as M,nb as J,pc as mt,qa as S,rb as v,sb as N,tb as u,ub as g,va as w,vb as Q,w as G,wa as n,wc as ct,xf as St,yb as X,yc as lt,zb as tt}from"./chunk-NEAIWFFQ.js";var Qt=(()=>{let e=class e{constructor(){this.tuiPlatform=n(W,{skipSelf:!0})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=Y({type:e,selectors:[["","tuiPlatform",""]],hostVars:1,hostBindings:function(i,r){i&2&&N("data-platform",r.tuiPlatform)},inputs:{tuiPlatform:"tuiPlatform"},standalone:!0,features:[pt([{provide:W,useFactory:()=>n(e).tuiPlatform}])]});let t=e;return t})();var se=["*",[["tuiOverContent"]],[["tuiOverDialogs"]],[["tuiOverAlerts"]],[["tuiOverDropdowns"]],[["tuiOverHints"]]],pe=["*","tuiOverContent","tuiOverDialogs","tuiOverAlerts","tuiOverDropdowns","tuiOverHints"];function me(t,e){t&1&&m(0,"tui-scroll-controls",2)}var Xt=(()=>{let e=class e{constructor(){var o;this.reducedMotion=n(_t),this.duration=xt(n(It)),this.isMobileRes=yt(n(L).pipe(C(i=>i==="mobile"),Dt(n(lt)))),this.scrollbars$=n(Mt)?G(!1):n(Ht).pipe(C(({length:i})=>!i),$(0)),(o=n(k).defaultView)==null||o.document.documentElement.setAttribute("data-tui-theme",n(St).toLowerCase())}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=h({type:e,selectors:[["tui-root"]],hostAttrs:["data-tui-version","4.3.0"],hostVars:6,hostBindings:function(i,r){i&1&&b("touchstart.passive.silent",function(){return 0}),i&2&&(g("--tui-duration",r.duration,"ms")("--tui-scroll-behavior",r.reducedMotion?"auto":"smooth"),Q("_mobile",r.isMobileRes()))},standalone:!0,features:[J([Qt]),y],ngContentSelectors:pe,decls:13,vars:3,consts:[["class","t-root-scrollbar",4,"ngIf"],[1,"t-root-content"],[1,"t-root-scrollbar"]],template:function(i,r){i&1&&(it(se),v(0,me,1,0,"tui-scroll-controls",0),O(1,"async"),a(2,"tui-dropdowns")(3,"div",1),f(4),s(),f(5,1),m(6,"tui-dialogs"),f(7,2),m(8,"tui-alerts"),f(9,3),s(),f(10,4),m(11,"tui-hints"),f(12,5)),i&2&&u("ngIf",M(1,1,r.scrollbars$))},dependencies:[R,P,Bt,Ut,kt,Wt,Rt],styles:[`@keyframes tuiPresent{to{content:""}}@keyframes tuiSkeletonVibe{to{opacity:.5}}html[data-tui-theme],.tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}html[data-tui-theme]::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar,html[data-tui-theme]::-webkit-scrollbar-thumb,.tui-zero-scrollbar::-webkit-scrollbar-thumb{display:none}body,input{margin:0}tui-root{position:relative;display:block;font:var(--tui-font-text-s);color:var(--tui-text-primary);flex:1;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 0 100vh 0;-webkit-tap-highlight-color:transparent}tui-root>.t-root-scrollbar{position:fixed;top:0;left:0;bottom:0;right:0;display:none;margin:0}[data-tui-theme] tui-root>.t-root-scrollbar{display:block}.t-root-content{position:relative;top:var(--t-root-top);height:100%;isolation:isolate}.t-root-content>*{--t-root-top: 0}[tuiDropdownButton][tuiDropdownButton]{display:none}
`],encapsulation:2});let t=e;return t})();var ce=Ct("data-tui-theme"),V=(()=>{let e=class e{constructor(){this.storage=n(bt),this.key=n(ce),this.themes=["light","dark"]}get theme(){let o=this.storage.getItem(this.key);return o===null?(this.storage.setItem(this.key,"light"),"light"):o}set theme(o){this.storage.setItem(this.key,o)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function le(t,e){t&1&&m(0,"tui-icon",13),t&2&&g("font-size",1,"em")("margin-left",.5,"rem")}function ue(t,e){if(t&1){let p=E();a(0,"button",11),b("click",function(){let i=x(p).$implicit,r=T(2);return A(r.chooseTheme(i))}),d(1),v(2,le,1,4,"tui-icon",12),s()}if(t&2){let p=e.$implicit,o=T(2);u("value",p),c(),z(" ",p," "),c(),u("ngIf",o.themeService.theme===p)}}function de(t,e){if(t&1&&(a(0,"tui-data-list",9),tt(1,ue,3,3,"button",10,X),s()),t&2){let p=T();c(),et(p.themeService.themes)}}function fe(t,e){if(t&1){let p=E();a(0,"aside",14)(1,"header")(2,"a",15)(3,"span",5),d(4,"Taiga lumbermill"),s()()(),a(5,"a",16),d(6," Theme Generator "),s(),a(7,"footer")(8,"button",17),b("click",function(){x(p);let i=T();return A(i.expanded=!i.expanded)}),d(9),s()()()}if(t&2){let p=T();u("tuiNavigationAside",p.expanded),c(8),u("iconStart",p.expanded?"@tui.chevron-left":"@tui.chevron-right"),c(),z(" ",p.expanded?"Collapse":"Expand"," ")}}var te=(()=>{let e=class e{constructor(){this.themeService=n(V),this.mobile$=n(L).pipe(C(o=>o==="mobile")),this.open=!1,this.expanded=!1,this.submenu=!1,this.openTheme=!1}chooseTheme(o){this.themeService.theme=o,this.openTheme=!1}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=h({type:e,selectors:[["app-navigation"]],standalone:!0,features:[y],decls:18,vars:10,consts:[["products",""],["tuiNavigationHeader",""],["appearance","secondary","iconStart","@tui.layout-grid","tuiIconButton",""],["tuiNavigationLogo",""],["icon","@tui.home"],["tuiFade",""],["appearance","secondary","tuiButton","","tuiChevron","",3,"tuiDropdownOpenChange","tuiDropdown","tuiDropdownOpen"],["class","aside-bar",3,"tuiNavigationAside",4,"ngIf"],["tuiNavigationMain",""],["size","s"],["tuiOption","",3,"value"],["tuiOption","",3,"click","value"],["icon","@tui.check",3,"font-size","margin-left",4,"ngIf"],["icon","@tui.check"],[1,"aside-bar",3,"tuiNavigationAside"],["iconStart","@tui.home","routerLink","/","tuiAsideItem",""],["iconStart","@tui.palette","routerLink","/theme","tuiAsideItem",""],["tuiAsideItem","",3,"click","iconStart"]],template:function(i,r){if(i&1){let I=E();a(0,"header",1)(1,"button",2),d(2," Menu "),s(),a(3,"span",3),m(4,"tui-icon",4),a(5,"span",5),d(6,"Taiga lumbermill"),s()(),a(7,"button",6),st("tuiDropdownOpenChange",function(H){return x(I),at(r.openTheme,H)||(r.openTheme=H),A(H)}),a(8,"span",5),d(9),s(),v(10,de,3,0,"ng-template",null,0,mt),s(),m(12,"hr"),s(),a(13,"div"),v(14,fe,10,3,"aside",7),O(15,"async"),a(16,"main",8),m(17,"router-outlet"),s()()}if(i&2){let I=ot(11);c(7),u("tuiDropdown",I),rt("tuiDropdownOpen",r.openTheme),c(2),nt(r.themeService.theme),c(4),g("display","flex"),c(),u("ngIf",!M(15,8,r.mobile$)),c(3),g("display","none")}},dependencies:[ut,R,P,gt,F,vt,wt,Gt,Vt,Lt,Ft,jt,$t,zt,Kt,qt,Jt,Yt,Zt],styles:[".aside-bar[_ngcontent-%COMP%]{height:calc(100vh - 3rem)}"],changeDetection:0});let t=e;return t})();var ee=(()=>{let e=class e{constructor(){this.themeService=n(V),this.title="taiga-lumbermill"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=h({type:e,selectors:[["app-root"]],standalone:!0,features:[y],decls:2,vars:1,template:function(i,r){i&1&&(a(0,"tui-root"),m(1,"app-navigation"),s()),i&2&&N("tuiTheme",r.themeService.theme)},dependencies:[te,F,Xt],encapsulation:2,changeDetection:0});let t=e;return t})();var he=(()=>{let e=class e extends B{constructor(o,i,r){super(o,i,r)}ngOnDestroy(){this.flush()}};e.\u0275fac=function(i){return new(i||e)(w(k),w(D),w(j))},e.\u0275prov=S({token:e,factory:e.\u0275fac});let t=e;return t})();function ve(){return new Nt}function ge(t,e,p){return new Ot(t,e,p)}var ie=[{provide:j,useFactory:ve},{provide:B,useClass:he},{provide:K,useFactory:ge,deps:[ft,B,Z]}],Te=[{provide:D,useFactory:()=>new Et},{provide:U,useValue:"BrowserAnimations"},...ie],Li=[{provide:D,useClass:At},{provide:U,useValue:"NoopAnimations"},...ie];function oe(){return q("NgEagerAnimations"),[...Te]}var ne=[{path:"dashboards",loadComponent:()=>l(void 0,null,function*(){return import("./chunk-IMH2DPZL.js").then(t=>t.DashboardsComponent)}),children:[{path:"",loadComponent:()=>l(void 0,null,function*(){return import("./chunk-4KE24AKE.js").then(t=>t.DashboardsListComponent)}),data:{title:""}},{path:"iot",loadComponent:()=>l(void 0,null,function*(){return import("./chunk-EQRGY766.js").then(t=>t.IotComponent)}),data:{title:"Iot"}},{path:"crypto",loadComponent:()=>l(void 0,null,function*(){return import("./chunk-H7DO2GMQ.js").then(t=>t.CryptoComponent)}),data:{title:"Crypto"}}]},{path:"theme",loadComponent:()=>l(void 0,null,function*(){return import("./chunk-LOMFBLNO.js").then(t=>t.ThemeGeneratorComponent)})},{path:"",loadComponent:()=>l(void 0,null,function*(){return import("./chunk-UOLBL6G3.js").then(t=>t.CommonPageComponent)})},{path:"login",loadComponent:()=>l(void 0,null,function*(){return import("./chunk-5RXY5XY7.js").then(t=>t.LoginComponent)})},{path:"sign-up",loadComponent:()=>l(void 0,null,function*(){return import("./chunk-VEFAKPD5.js").then(t=>t.SignUpComponent)})},{path:"**",redirectTo:"dashboards"}];var re={providers:[oe(),ct({eventCoalescing:!0}),Tt(ne),dt(),Pt]};ht(ee,re).catch(t=>console.error(t));