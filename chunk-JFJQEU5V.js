import{H as w,h as S,p as T,r as b}from"./chunk-77SPAAH2.js";import{Ba as _,Bb as l,Cb as d,Db as g,Eb as v,Fb as C,Kd as M,La as f,Lb as h,Mb as O,Nb as x,Nc as k,Tb as z,Vb as y,bb as r,cc as P,fe as I,pb as c,rb as p,sb as a,ub as s,va as m}from"./chunk-Z6RZWZYC.js";var L=["*"];function D(t,e){if(t&1&&(v(0),z(1),C()),t&2){let n=e.polymorpheusOutlet;r(),y(" ",n," ")}}function E(t,e){if(t&1&&(l(0,"div",6),c(1,D,2,1,"ng-container",7),d()),t&2){let n=h(2);s("t-text_horizontal",n.isHorizontal),r(),a("polymorpheusOutlet",n.textContent)}}function j(t,e){if(t&1&&(l(0,"div",2),f(),l(1,"svg",3),g(2,"circle",4),d(),c(3,E,2,3,"div",5),d()),t&2){let n=h();s("t-loader_horizontal",n.isHorizontal)("t-loader_inherit-color",n.inheritColor),r(3),a("ngIf",n.textContent)}}var A={size:"m",inheritColor:!1,overlay:!1},F=M(A);var Z=(()=>{let e=class e{constructor(){this.isIOS=m(w),this.options=m(F),this.isApple=b(I())||this.isIOS,this.size=this.options.size,this.inheritColor=this.options.inheritColor,this.overlay=this.options.overlay,this.loading=!0}get isHorizontal(){return!S(this.size)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=_({type:e,selectors:[["tui-loader"]],hostVars:3,hostBindings:function(o,i){o&2&&(p("data-size",i.size),s("_loading",i.loading))},inputs:{size:"size",inheritColor:"inheritColor",overlay:"overlay",textContent:"textContent",loading:[0,"showLoader","loading"]},standalone:!0,features:[P],ngContentSelectors:L,decls:3,vars:7,consts:[[1,"t-content",3,"disabled"],["class","t-loader",3,"t-loader_horizontal","t-loader_inherit-color",4,"ngIf"],[1,"t-loader"],["automation-id","tui-loader__loader","focusable","false","height","100%","width","100%",1,"t-icon"],["cx","50%","cy","50%",1,"t-circle"],["automation-id","tui-loader__text","class","t-text",3,"t-text_horizontal",4,"ngIf"],["automation-id","tui-loader__text",1,"t-text"],[4,"polymorpheusOutlet"]],template:function(o,i){o&1&&(O(),l(0,"fieldset",0),x(1),d(),c(2,j,4,5,"div",1)),o&2&&(s("t-content_has-overlay",i.overlay&&i.loading)("t-content_loading",i.loading),a("disabled",i.loading&&!i.isApple),p("inert",i.loading||null),r(2),a("ngIf",i.loading))},dependencies:[k,T],styles:["[_nghost-%COMP%]{position:relative;display:flex;min-inline-size:1.5rem;--tui-thickness: calc(var(--t-diameter) / 12)}._loading[_nghost-%COMP%]{overflow:hidden}[data-size=xs][_nghost-%COMP%]{--t-diameter: .75em}[data-size=s][_nghost-%COMP%]{--t-diameter: 1em}[data-size=m][_nghost-%COMP%]{--t-diameter: 1.5em}[data-size=l][_nghost-%COMP%]{--t-diameter: 2.5em}[data-size=xl][_nghost-%COMP%]{--t-diameter: 3.5em}[data-size=xxl][_nghost-%COMP%]{--t-diameter: 5em}.t-content[_ngcontent-%COMP%]{z-index:0;min-inline-size:100%;block-size:100%;padding:0;margin:0;border:none}.t-content_has-overlay[_ngcontent-%COMP%]{opacity:.3}.t-content_loading[_ngcontent-%COMP%]{pointer-events:none}.t-loader[_ngcontent-%COMP%]{position:relative;left:-100%;display:flex;flex-direction:column;align-items:center;justify-content:center;min-inline-size:100%;min-block-size:var(--t-diameter);flex-shrink:0;align-self:center;color:var(--tui-text-primary);stroke:var(--tui-background-accent-1);animation:tuiFadeIn var(--tui-duration);font-size:1rem}.t-loader.t-loader_horizontal[_ngcontent-%COMP%]{flex-direction:row}.t-loader.t-loader_inherit-color[_ngcontent-%COMP%]{color:inherit;stroke:currentColor}.t-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:var(--tui-font-text-s);margin-top:1rem;color:inherit;max-inline-size:100%;text-align:center;stroke-width:0}.t-text_horizontal[_ngcontent-%COMP%]{margin:0 0 0 1rem}@keyframes _ngcontent-%COMP%_tuiLoaderRotate{0%{transform:rotate(-90deg)}50%{transform:rotate(-90deg) rotate(1turn)}to{transform:rotate(-90deg) rotate(3turn)}}.t-icon[_ngcontent-%COMP%]{display:block;inline-size:var(--t-diameter);block-size:var(--t-diameter);margin:.25rem calc(var(--t-diameter) / -2);border-radius:100%;overflow:hidden;animation:_ngcontent-%COMP%_tuiLoaderRotate 4s linear infinite}@supports (-webkit-hyphens: none){.t-icon[_ngcontent-%COMP%]{overflow:visible}}@keyframes _ngcontent-%COMP%_tuiLoaderDashOffset{0%{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}50%{stroke-dashoffset:calc(.05 * calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness))))}to{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}}.t-circle[_ngcontent-%COMP%]{r:calc(var(--t-diameter) / 2 - var(--tui-thickness));stroke-dasharray:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)));fill:none;stroke:inherit;stroke-width:max(var(--tui-thickness),1.5px);animation:_ngcontent-%COMP%_tuiLoaderDashOffset 4s linear infinite}"],changeDetection:0});let t=e;return t})();export{Z as a};