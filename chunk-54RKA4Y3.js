import{E as De,J as Te,O as T,P as _e,R as Ee,l as me,p as he,q as ge,r as ve,t as ye,v as Ce}from"./chunk-JKFE2XSZ.js";import{Ma as fe,X as p,aa as ue,ba as le,c as K,ca as D,d as ee,ha as pe,j as oe,ma as de,p as se,qa as ce,v as ae}from"./chunk-3EBWJFZE.js";import{Ab as q,Bb as W,Cb as $,Ce as ne,Gb as P,Hb as G,Ia as c,Ib as J,Ic as te,Jc as M,La as H,Me as re,Ra as O,Ua as b,Wa as N,Xa as l,da as x,eb as f,ec as X,fb as g,fd as ie,ga as a,h as _,hb as Q,ib as B,kc as Y,kd as C,ma as h,na as j,nb as m,oa as R,ob as L,pa as V,pb as k,qb as w,r as E,rb as U,sb as F,tb as v,td as S,u as d,ua as I,ub as y,w as A,wb as z,yb as Z}from"./chunk-RYXJ3STK.js";var we=()=>({});function Fe(r,t){if(r&1&&(Q(0),z(1),B()),r&2){let u=t.polymorpheusOutlet;c(),Z(" ",u," ")}}function Pe(r,t){if(r&1&&(f(0,"div",1),b(1,Fe,2,1,"ng-container",2),g()),r&2){let u=L();l("@tuiFadeIn",u.options)("@tuiHeightCollapse",u.options),c(),l("polymorpheusOutlet",u.error.message||u.default())("polymorpheusOutletContext",u.error.context||J(4,we))}}var Ze=(()=>{let t=class t{constructor(){this.options=oe(a(ne)),this.error=null,this.visible=!0,this.default=ie(a(re))}set errorSetter(e){this.error=C(e)?new p(e):e}onAnimation(e){this.visible=e}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=h({type:t,selectors:[["tui-error"]],hostBindings:function(n,i){n&1&&m("animationcancel.self",function(){return i.onAnimation(!1)})("animationstart.self",function(){return i.onAnimation(!0)})},inputs:{errorSetter:[0,"error","errorSetter"]},standalone:!0,features:[G],decls:1,vars:1,consts:[["automation-id","tui-error__text","class","t-message-text",4,"ngIf"],["automation-id","tui-error__text",1,"t-message-text"],[4,"polymorpheusOutlet","polymorpheusOutletContext"]],template:function(n,i){n&1&&b(0,Pe,2,5,"div",0),n&2&&l("ngIf",i.error&&i.visible)},dependencies:[X,se],styles:['[_nghost-%COMP%]{display:block;font:var(--tui-font-text-s);color:var(--tui-text-negative);word-wrap:break-word;animation:tuiPresent 1s infinite}.t-message-text[_ngcontent-%COMP%]{white-space:pre-line}.t-message-text[_ngcontent-%COMP%]:before{content:"";line-height:1.5rem;vertical-align:bottom}'],data:{animation:[K,ee]},changeDetection:0});let r=t;return r})();var Me={};function Oe(r,t){return r.pipe(A(u=>new p(u||"",t)))}function be(r,t){return d(new p(r||"",t))}var nt=(()=>{let t=class t{constructor(){this.order=[],this.parent=a(M,{skipSelf:!0,optional:!0}),this.self=a(M,{self:!0,optional:!0}),this.container=a(te,{optional:!0}),this.validationErrors=a(fe),this.self&&!this.self.valueAccessor&&(this.self.valueAccessor=this)}transform(e){return this.order=e,this.computedError}registerOnChange(){}registerOnTouched(){}setDisabledState(){}writeValue(){}get computedError(){return this.invalid&&this.touched&&this.error||d(null)}get error(){let{errorId:e}=this;if(!e)return null;let n=this.controlErrors[e],i=this.validationErrors[e];return this.getError(n,i)}get invalid(){var e;return!!((e=this.control)!=null&&e.invalid)}get touched(){var e;return!!((e=this.control)!=null&&e.touched)}get control(){var e,n,i;return((e=this.self)==null?void 0:e.control)||((n=this.parent)==null?void 0:n.control)||((i=this.container)==null?void 0:i.control)}get errorId(){return this.getErrorId(this.order,this.controlErrors)}get controlErrors(){var e;return((e=this.control)==null?void 0:e.errors)||Me}getError(e,n){if(e instanceof p)return d(e);if(n===void 0&&C(e))return d(new p(e));if(n instanceof _)return Oe(n,e);if(n instanceof Function){let i=n(e);return i instanceof _?Oe(i,e):be(i,e)}return be(n,e)}getErrorId(e,n){let i=e==null?void 0:e.find(s=>n[s]),o=Object.keys(n)[0];return i||o||""}};t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=V({name:"tuiFieldError",type:t,pure:!1,standalone:!0});let r=t;return E([S],r.prototype,"getError",null),E([S],r.prototype,"getErrorId",null),r})();var Se=["*",[["input"]]],Ae=["*","input"],bt=(()=>{let t=class t extends ge{constructor(){super(...arguments),this.textfieldSize=a(De),this.open=!1}get size(){return this.textfieldSize.size}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){var e;return ae(this.nativeFocusableElement)||!!((e=this.dropdown)!=null&&e.tuiDropdownOpen)}handleOption(e){this.setNativeValue(String(e)),this.focusInput(),this.value=String(e),this.open=!1}onValueChange(e){this.value=e,this.open=!0}get canOpen(){return this.interactive&&!!this.datalist}onActiveZone(e){this.updateFocused(e)}getFallbackValue(){return""}focusInput(e=!1){this.nativeFocusableElement&&this.nativeFocusableElement.focus({preventScroll:e})}setNativeValue(e){this.nativeFocusableElement&&(this.nativeFocusableElement.value=e)}};t.\u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})(),t.\u0275cmp=h({type:t,selectors:[["tui-input"]],contentQueries:function(n,i,o){if(n&1&&U(o,ce,5,H),n&2){let s;v(s=y())&&(i.datalist=s.first)}},viewQuery:function(n,i){if(n&1&&(F(D,5),F(T,5)),n&2){let o;v(o=y())&&(i.dropdown=o.first),v(o=y())&&(i.textfield=o.first)}},hostVars:1,hostBindings:function(n,i){n&2&&N("data-size",i.size)},features:[P([Te,me(t),de(t),ve(t)],[pe]),O],ngContentSelectors:Ae,decls:4,vars:11,consts:[["tuiDropdownOpenMonitor","",1,"t-hosted",3,"tuiDropdownOpenChange","tuiActiveZoneChange","tuiDropdown","tuiDropdownEnabled","tuiDropdownOpen"],["automation-id","tui-input__textfield",1,"t-textfield",3,"valueChange","disabled","focusable","invalid","nativeId","pseudoFocus","pseudoHover","readOnly","value"]],template:function(n,i){n&1&&(k(Se),f(0,"div",0),$("tuiDropdownOpenChange",function(s){return W(i.open,s)||(i.open=s),s}),m("tuiActiveZoneChange",function(s){return i.onActiveZone(s)}),f(1,"tui-primitive-textfield",1),m("valueChange",function(s){return i.onValueChange(s)}),w(2),w(3,1,["ngProjectAs","input",5,["input"]]),g()()),n&2&&(l("tuiDropdown",i.datalist||"")("tuiDropdownEnabled",i.canOpen),q("tuiDropdownOpen",i.open),c(),l("disabled",i.computedDisabled)("focusable",i.computedFocusable)("invalid",i.computedInvalid)("nativeId",i.nativeId)("pseudoFocus",i.computedFocused)("pseudoHover",i.pseudoHover)("readOnly",i.readOnly)("value",i.value))},dependencies:[T,_e,ue,D,Ce],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:start}._disabled[_nghost-%COMP%], [_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],changeDetection:0});let r=t;return r})(),wt=(()=>{let t=class t extends ye{onValueChange(e){this.host.onValueChange(e)}};t.\u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})(),t.\u0275dir=R({type:t,selectors:[["tui-input"]],features:[P([he(t)]),O]});let r=t;return r})(),Ft=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=j({type:t}),t.\u0275inj=x({imports:[Y,Ee,le]});let r=t;return r})();export{Ze as a,nt as b,bt as c,wt as d,Ft as e};