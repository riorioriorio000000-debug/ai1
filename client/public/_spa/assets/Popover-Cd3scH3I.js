import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{C as n,E as r,T as i}from"../vendor/vendor-react-B9HSWrpN.js";import{$ as a,At as o,Ot as s,Q as c,dr as l,fr as u,jt as d,kt as f,mr as p,pr as m}from"../vendor/vendor-ui-core-BmtybT1r.js";import{$N as h,$P as g,AN as _,BA as v,CP as y,Cj as b,DD as x,FD as S,Fw as C,GP as w,HM as T,ID as E,KP as D,Kj as ee,LP as O,NM as k,OD as A,Oj as j,QN as M,QP as N,Qj as te,RA as P,RE as F,Rw as I,SN as L,SP as R,Sj as ne,Tj as re,UA as ie,UP as z,VA as ae,VM as oe,VP as se,WA as ce,WP as le,Wj as ue,XP as de,Xj as fe,YA as pe,Yj as me,ZP as he,_M as ge,_N as _e,_j as ve,_w as ye,aM as be,bE as xe,bN as B,bj as Se,bw as Ce,cM as V,cN as we,cj as Te,dE as Ee,dN as De,dj as Oe,eP as ke,ew as Ae,fE as je,fN as Me,fj as Ne,fw as Pe,gF as H,gN as Fe,gj as Ie,hN as Le,hj as Re,kN as ze,kj as Be,kw as Ve,lE as He,lj as Ue,mN as We,mj as Ge,mw as Ke,nP as qe,oE as Je,oF as Ye,oj as Xe,pE as Ze,pN as Qe,qA as U,qP as $e,qj as et,rM as tt,rj as nt,sE as rt,sF as it,sM as at,tP as ot,tj as st,tw as ct,uE as lt,uF as ut,uN as dt,vj as ft,vw as pt,wN as mt,wP as ht,wj as gt,xE as _t,xN as W,xj as vt,yE as yt,yw as bt,zA as xt,zE as St,zP as Ct,zw as wt}from"./index-w64_zsxD.js";import{n as Tt,t as Et}from"./parseTrigger-DcjpV8qt.js";var Dt,Ot,kt,At=e((()=>{Dt=t(r(),1),Ot=(0,Dt.createContext)(null),kt=(0,Dt.createContext)(null)}));function jt(e,t,n){return!e&&t&&n===`trigger-press`}var Mt,Nt=e((()=>{Mt=`data-hover-only-trigger`})),G,Pt,Ft=e((()=>{At(),G=t(r(),1),Pt=e=>{let t=(0,G.useContext)(kt),{arrow:n,trigger:r,placement:i,className:a,classNames:o,styles:s,onOpenChange:c,content:l,closeDelay:u,disabled:d,getPopupContainer:f,mouseEnterDelay:p,mouseLeaveDelay:m,nativeButton:h,openDelay:g,zIndex:_,positionerProps:v,triggerProps:y,popupProps:b,backdropProps:x}=e,S=(0,G.useMemo)(()=>{if(!(!t?.className&&!a))return[t?.className,a].filter(Boolean).join(` `)},[a,t?.className]),C=(0,G.useMemo)(()=>{if(!(!t?.classNames&&!o))return{...t?.classNames,...o}},[o,t?.classNames]),w=(0,G.useMemo)(()=>{if(!(!t?.styles&&!s))return{...t?.styles,...s}},[t?.styles,s]),T=(0,G.useMemo)(()=>{if(!(!t?.onOpenChange&&!c))return e=>{t?.onOpenChange?.(e),c?.(e)}},[c,t?.onOpenChange]);return(0,G.useMemo)(()=>({arrow:n??t?.arrow??!1,backdropProps:x??t?.backdropProps,className:S,classNames:C,closeDelay:u??t?.closeDelay,content:l,disabled:d??t?.disabled,getPopupContainer:f??t?.getPopupContainer,mouseEnterDelay:p??t?.mouseEnterDelay,mouseLeaveDelay:m??t?.mouseLeaveDelay,nativeButton:h??t?.nativeButton,onOpenChange:T,openDelay:g??t?.openDelay,placement:i??t?.placement??`top`,popupProps:b??t?.popupProps,positionerProps:v??t?.positionerProps,styles:w,trigger:r??t?.trigger??`hover`,triggerProps:y??t?.triggerProps,zIndex:_??t?.zIndex}),[n,x,u,l,d,f,S,C,T,w,p,m,h,g,i,b,v,t?.arrow,t?.backdropProps,t?.closeDelay,t?.disabled,t?.getPopupContainer,t?.mouseEnterDelay,t?.mouseLeaveDelay,t?.nativeButton,t?.openDelay,t?.placement,t?.popupProps,t?.positionerProps,t?.trigger,t?.triggerProps,t?.zIndex,r,y,_])}}));function K(e){let t=It.useContext(Lt);if(t===void 0&&!e)throw Error(de(47));return t}var It,Lt,q=e((()=>{he(),It=t(r(),1),Lt=It.createContext(void 0)}));function Rt(){let e=new Ne,t=new F(Object.freeze(zt(void 0,e)),Object.freeze(Bt(e)),Ut);return Object.assign(t,{setOpen:Ye})}function zt(e,t,n,r=!1){let i={...Ue(t,n,r),disabled:!1,modal:!1,focusManagerModal:!1,instantType:void 0,openMethod:null,openChangeReason:null,titleElementId:void 0,descriptionElementId:void 0,stickIfOpen:!0,openOnHover:!1,closeDelay:0,adaptiveOrigin:void 0,...e};return i.open&&e?.mounted===void 0&&(i.mounted=!0),i}function Bt(e){return{popupRef:Vt.createRef(),onOpenChange:void 0,onOpenChangeComplete:void 0,triggerFocusTargetRef:Vt.createRef(),beforeContentFocusGuardRef:Vt.createRef(),stickIfOpenTimeout:new y,triggerElements:e}}var Vt,Ht,Ut,Wt,Gt=e((()=>{Vt=t(r(),1),Ht=t(n(),1),R(),ht(),it(),V(),St(),Xe(),De(),Ut={...Oe,disabled:e=>e.disabled,instantType:e=>e.instantType,openMethod:e=>e.openMethod,openChangeReason:e=>e.openChangeReason,modal:e=>e.modal,focusManagerModal:e=>e.focusManagerModal,stickIfOpen:e=>e.stickIfOpen,titleElementId:e=>e.titleElementId,descriptionElementId:e=>e.descriptionElementId,openOnHover:e=>e.openOnHover,closeDelay:e=>e.closeDelay,adaptiveOrigin:e=>e.adaptiveOrigin},Wt=class extends se{constructor(e,t,n){let r=new Ne;super(zt(e,r,t,n),Bt(r),Ut)}setOpen=(e,t)=>{let n=t.reason===k,r=t.reason===`trigger-press`&&t.event.detail===0,i=!e&&(t.reason===`escape-key`||t.reason==null),a=Ie(t),o=this.select(`activeTriggerId`);if(!e&&t.reason===`close-press`&&t.trigger==null&&o!=null&&(t.trigger=this.context.triggerElements.getById(o)??this.select(`activeTriggerElement`)??void 0),this.context.onOpenChange?.(e,t),t.isCanceled)return;this.state.floatingRootContext.dispatchOpenChange(e,t);let s=()=>{let n=ft(this.state,e,t.trigger,a());n.openChangeReason=t.reason,this.update(n)};n?(this.set(`stickIfOpen`,!0),this.context.stickIfOpenTimeout.start(500,()=>{this.set(`stickIfOpen`,!1)}),Ht.flushSync(s)):s();let c;r?c=`click`:i?c=`dismiss`:t.reason===`focus-out`&&(c=`focus`),this.set(`instantType`,c)}}}));function Kt(e){return K(!0)?(0,J.jsx)(Xt,{props:e}):(0,J.jsx)(fe,{children:(0,J.jsx)(Xt,{props:e})})}function qt(e,t){let n=b((e,n)=>new Wt(t,e,n));return Yt.useEffect(()=>n.context.stickIfOpenTimeout.disposeEffect(),[n]),n}function Jt({store:e,modal:t}){let n=ue(e.useState(`floatingRootContext`),{outsidePressEvent:{mouse:t===`trap-focus`?`sloppy`:`intentional`,touch:`sloppy`}}),r=n.reference,i=n.floating;return ne(e,{activeTriggerProps:r,inactiveTriggerProps:r,popupProps:i}),null}var Yt,J,Xt,Zt=e((()=>{Yt=t(r(),1),$e(),U(),q(),Gt(),at(),V(),Xe(),J=t(i(),1),Xt=w(function({props:e}){let{children:t,open:n,defaultOpen:r=!1,onOpenChange:i,onOpenChangeComplete:a,modal:o=!1,handle:s,triggerId:c,defaultTriggerId:l=null}=e,u=qt(s,{modal:o,open:r,openProp:n,activeTriggerId:l,triggerIdProp:c});u.useControlledProp(`openProp`,n),u.useControlledProp(`triggerIdProp`,c);let d=u.useState(`open`),f=u.useState(`mounted`),p=u.useState(`payload`);u.useContextCallback(`onOpenChange`,i),u.useContextCallback(`onOpenChangeComplete`,a),gt(u,d),Se(u);let{forceUnmount:m}=vt(d,u,()=>{u.update({stickIfOpen:!0,openChangeReason:null})});u.useSyncedValues({modal:o}),Yt.useEffect(()=>{d||u.context.stickIfOpenTimeout.clear()},[u,d]),Yt.useImperativeHandle(e.actionsRef,()=>({unmount:m,close:()=>u.setOpen(!1,be(ge))}),[m,u]);let h=d||f;return(0,J.jsxs)(Lt.Provider,{value:u,children:[s&&(0,J.jsx)(Re,{handle:s,store:u}),h&&(0,J.jsx)(Jt,{store:u,modal:o}),typeof t==`function`?t({payload:p}):t]})})})),Qt=e((()=>{})),$t,Y,X,en=e((()=>{he(),$t=t(r(),1),$e(),q(),oe(),M(),B(),De(),U(),Qt(),x(),_(),V(),Xe(),Ae(),Pe(),Y=t(i(),1),X=D(function(e,t){let{render:n,className:r,style:i,disabled:a=!1,nativeButton:o=!0,handle:s,payload:c,openOnHover:l=!1,delay:u=300,closeDelay:d=0,id:f,...p}=e,m=K(!0),h=Te(s)??m;if(!h)throw Error(de(74));let g=A(f),_=h.useState(`isTriggerActive`,g),v=h.useState(`floatingRootContext`),y=h.useState(`isOpenedByTrigger`,g),b=h.useState(`triggerPopupId`,g),x=$t.useRef(null),{registerTrigger:S,isMountedByThisTrigger:C}=re(g,x,h,{payload:c,disabled:a,openOnHover:l,closeDelay:d}),w=h.useState(`openChangeReason`),E=h.useState(`stickIfOpen`),D=h.useState(`openMethod`),O=h.useState(`focusManagerModal`),k=st(v,{enabled:!a&&l&&(D!==`touch`||w!==`trigger-press`),mouseOnly:!0,move:!1,handleClose:pe(),restMs:u,delay:{close:d},triggerElementRef:x,isActiveTrigger:_,isClosing:()=>h.select(`transitionStatus`)===`ending`}),j=ee(v,{stickIfOpen:E}),M=Ke(()=>h.select(`open`),e=>{h.set(`openMethod`,e)}),N=h.useState(`triggerProps`,C),{getButtonProps:te,buttonRef:P}=T({disabled:a,native:o}),F={open(e){return e&&w===`trigger-press`?ot.open(e):qe.open(e)}},{preFocusGuardRef:I,handlePreFocusGuardFocus:L,handleFocusTargetFocus:R}=ct(h,x),ne=W(`button`,e,{state:{disabled:a,open:y},ref:[P,t,S,x],props:[j.reference,k,N,M,{[we]:``,id:g,"aria-haspopup":`dialog`,"aria-expanded":y,"aria-controls":b},p,te],stateAttributesMapping:F}),ie=(0,Y.jsx)($t.Fragment,{children:ne},g);return C&&!O?(0,Y.jsxs)($t.Fragment,{children:[(0,Y.jsx)(ze,{ref:I,onFocus:L}),ie,(0,Y.jsx)(ze,{ref:h.context.triggerFocusTargetRef,onFocus:R})]}):ie})}));function tn(){let e=nn.useContext(rn);if(e===void 0)throw Error(de(45));return e}var nn,rn,an=e((()=>{he(),nn=t(r(),1),rn=nn.createContext(void 0)})),on,sn,cn,ln=e((()=>{on=t(r(),1),U(),q(),an(),sn=t(i(),1),cn=on.forwardRef(function(e,t){let{keepMounted:n=!1,...r}=e;return K().useState(`mounted`)||n?(0,sn.jsx)(rn.Provider,{value:n,children:(0,sn.jsx)(tt,{ref:t,...r})}):null})}));function un(){let e=dn.useContext(fn);if(!e)throw Error(de(46));return e}var dn,fn,pn=e((()=>{he(),dn=t(r(),1),fn=dn.createContext(void 0)})),mn,hn,gn,_n=e((()=>{mn=t(r(),1),_e(),N(),U(),q(),pn(),ie(),an(),Ce(),V(),De(),We(),P(),ye(),hn=t(i(),1),gn=mn.forwardRef(function(e,t){let{render:n,className:r,style:i,anchor:a,positionMethod:o,side:s,align:c,sideOffset:l,alignOffset:u,collisionBoundary:d=`clipping-ancestors`,collisionPadding:f,arrowPadding:p,sticky:m,disableAnchorTracking:h=!1,collisionAvoidance:_=dt,...v}=e,y=K(),b=tn(),x=te(),S=y.useState(`floatingRootContext`),C=y.useState(`mounted`),w=y.useState(`open`),T=y.useState(`openChangeReason`),E=y.useState(`activeTriggerElement`),D=y.useState(`modal`),ee=y.useState(`openMethod`),O=y.useState(`positionerElement`),k=y.useState(`instantType`),A=y.useState(`transitionStatus`),j=y.useState(`adaptiveOrigin`),M=mn.useRef(null),N=Le(O),P=ce({anchor:a,floatingRootContext:S,positionMethod:o,mounted:C,side:s,sideOffset:l,align:c,alignOffset:u,arrowPadding:p,collisionBoundary:d,collisionPadding:f,sticky:m,disableAnchorTracking:h,keepMounted:b,nodeId:x,collisionAvoidance:_,adaptiveOrigin:j}),F=S.useState(`domReferenceElement`);g(()=>{let e=F,t=M.current;if(e&&(M.current=e),t&&e&&e!==t){y.set(`instantType`,void 0);let e=new AbortController;return N(()=>{y.set(`instantType`,`trigger-change`)},e.signal),()=>{e.abort()}}},[F,N,y]);let I=D===!0&&T!==`trigger-hover`;pt(w&&I,ee===`touch`,O,E);let L=y.useStateSetter(`positionerElement`),R=xt(e,{open:w,side:P.side,align:P.align,anchorHidden:P.anchorHidden,instant:k},{styles:P.positionerStyles,transitionStatus:A,props:v,refs:[t,L],hidden:!C,inert:!w});return(0,hn.jsxs)(fn.Provider,{value:P,children:[C&&I&&(0,hn.jsx)(bt,{inert:Fe(!w),cutout:E}),(0,hn.jsx)(me,{id:x,children:R})]})})}));function vn(){let[e,t]=yn.useState(0),n=le(()=>(t(e=>e+1),()=>{t(e=>Math.max(0,e-1))}));return{context:yn.useMemo(()=>({register:n}),[n]),hasClosePart:e>0}}var yn,bn,xn=e((()=>{yn=t(r(),1),z(),bn=yn.createContext(void 0)})),Sn,Cn,wn,Tn=e((()=>{Sn=t(r(),1),O(),U(),q(),pn(),M(),Me(),B(),V(),C(),I(),ae(),xn(),Xe(),Cn=t(i(),1),wn=Sn.forwardRef(function(e,t){let{render:n,className:r,style:i,initialFocus:a,finalFocus:o,...s}=e,c=K(),l=un(),u=wt(!0)!=null,{context:d,hasClosePart:f}=vn(),p=c.useState(`open`),m=c.useState(`openMethod`),h=c.useState(`instantType`),g=c.useState(`transitionStatus`),_=c.useState(`popupProps`),y=c.useState(`titleElementId`),b=c.useState(`descriptionElementId`),x=c.useState(`modal`),S=c.useState(`mounted`),C=c.useState(`openChangeReason`),w=c.useState(`activeTriggerElement`),T=c.useState(`floatingRootContext`),E=T.useState(`floatingId`),D=c.useState(`disabled`),ee=c.useState(`openOnHover`),O=c.useState(`closeDelay`);Qe({open:p,ref:c.context.popupRef,onComplete(){p&&c.context.onOpenChangeComplete?.(!0)}}),nt(T,{enabled:ee&&!D,closeDelay:O});let k=a===void 0?ve(c.context.popupRef):a,A=x!==!1&&f;c.useSyncedValue(`focusManagerModal`,A);let j=c.useStateSetter(`popupElement`),M=W(`div`,e,{state:{open:p,side:l.side,align:l.align,instant:h,transitionStatus:g},ref:[t,c.context.popupRef,j],props:[_,{id:E,role:`dialog`,...Ge,"aria-labelledby":y,"aria-describedby":b,onKeyDown(e){u&&Ve.has(e.key)&&e.stopPropagation()}},v(g),s],stateAttributesMapping:ke});return(0,Cn.jsx)(et,{context:T,openInteractionType:m,modal:A,disabled:!S||C===`trigger-hover`,initialFocus:k,returnFocus:o,restoreFocus:`popup`,previousFocusableElement:Ct(w)?w:void 0,nextFocusableElement:c.context.triggerFocusTargetRef,beforeContentFocusGuardRef:c.context.beforeContentFocusGuardRef,children:(0,Cn.jsx)(bn.Provider,{value:d,children:M})})})})),En,Dn,On=e((()=>{En=t(r(),1),pn(),q(),M(),B(),Dn=En.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o=K().useState(`open`),{arrowRef:s,side:c,align:l,arrowUncentered:u,arrowStyles:d}=un();return W(`div`,e,{state:{open:o,side:c,align:l,uncentered:u},ref:[t,s],props:[{style:d,"aria-hidden":!0},a],stateAttributesMapping:h})})})),kn,An,jn=e((()=>{kn=t(r(),1),q(),M(),B(),V(),An=kn.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o=K(),s=o.useState(`open`),c=o.useState(`mounted`),l=o.useState(`transitionStatus`),u=o.useState(`openChangeReason`);return W(`div`,e,{state:{open:s,transitionStatus:l},ref:t,props:[{role:`presentation`,hidden:!c,style:{pointerEvents:u===`trigger-hover`?`none`:void 0,userSelect:`none`,WebkitUserSelect:`none`}},a],stateAttributesMapping:ke})})})),Mn,Nn,Pn=e((()=>{Mn=t(r(),1),q(),pn(),B(),yt(),Nn=Mn.forwardRef(function(e,t){let{render:n,className:r,style:i,children:a,...o}=e,s=K(),{side:c}=un(),l=s.useState(`instantType`),{children:u,state:d}=_t({store:s,side:c,children:a});return W(`div`,e,{state:{activationDirection:d.activationDirection,transitioning:d.transitioning,instant:l},ref:t,props:[o,{children:u}],stateAttributesMapping:xe})})}));function Fn(){return new In}var In,Ln=e((()=>{Gt(),Be(),In=class extends j{constructor(){super(Rt(),`Popover`)}open(e){this.openByTrigger(e)}close(){this.closePopup()}get isOpen(){return this.attachedStore?.select(`open`)??!1}}})),Rn=e((()=>{Zt(),en(),ln(),_n(),Tn(),On(),jn(),q(),xn(),Pn(),Ln()})),zn=e((()=>{Rn()})),Bn,Vn,Hn,Un=e((()=>{o(),Et(),At(),Nt(),Ft(),Bn=t(r(),1),Vn=t(i(),1),ut(),L(),Ee(),zn(),Hn=({children:e,ref:t,...n})=>{let r=(0,Bn.use)(Ot),i=Pt(n),{openOnClick:a,openOnHover:o}=(0,Bn.useMemo)(()=>Tt(i.trigger??`hover`),[i.trigger]),s=i.openDelay??(i.mouseEnterDelay??.1)*1e3,c=i.closeDelay??(i.mouseLeaveDelay??.1)*1e3,l=!!i.disabled,{isNativeButtonTriggerElement:u,resolvedNativeButton:f}=d({children:e,nativeButton:i.nativeButton});if(!i.content)return e;let p={[Mt]:a?void 0:``,closeDelay:c,delay:s,disabled:l,openOnHover:o&&!l,...i.triggerProps,payload:i},m=i.classNames?.trigger;return(0,Bn.isValidElement)(e)?(0,Vn.jsx)(X,{handle:r??void 0,...p,nativeButton:f,render:n=>{let r=(()=>{if(u)return n;let{type:e,ref:t,...r}=n;return r})(),i=mt(e.props,r);return(0,Bn.cloneElement)(e,{...i,className:H(i.className,m),ref:je([e.ref,n.ref,t])})}}):(0,Vn.jsx)(X,{handle:r??void 0,...p,className:m,nativeButton:f,ref:t,children:e})},Hn.displayName=`PopoverInGroup`})),Wn,Gn,Kn=e((()=>{Wn=t(i(),1),Gn=(0,Wn.jsxs)(`svg`,{"aria-hidden":`true`,height:`6`,viewBox:`0 0 12 6`,width:`12`,children:[(0,Wn.jsx)(`path`,{d:`M0 6L6 0L12 6Z`,"data-role":`fill`}),(0,Wn.jsx)(`path`,{d:`M0 6L6 0L12 6`,"data-role":`stroke`})]})})),qn,Jn=e((()=>{l(),qn=e=>{let t=u();return typeof document>`u`?null:e??t??document.body}})),Yn,Xn=e((()=>{S(),Yn={arrow:E(`acss-1se3qh9`,[`.acss-1se3qh9{--lobe-popover-arrow-offset-block:5px;--lobe-popover-arrow-offset-inline:8px;pointer-events:none;position:absolute;transform-origin:center;display:flex;width:12px;height:6px;transition:inset-inline-start var(--lobe-popover-layout-duration) var(--lobe-popover-layout-ease),inset-block-start var(--lobe-popover-layout-duration) var(--lobe-popover-layout-ease);}`,`.acss-1se3qh9>svg{display:block;width:100%;height:100%;}`,`.acss-1se3qh9 [data-role='fill']{fill:var(--ant-color-bg-elevated);}`,`.acss-1se3qh9 [data-role='stroke']{fill:none;stroke:var(--ant-color-border);stroke-width:1px;}`,`.acss-1se3qh9[data-side='top']{inset-block-end:calc(var(--lobe-popover-arrow-offset-block) * -1);transform:rotate(180deg);}`,`.acss-1se3qh9[data-side='left']{inset-inline-end:calc(var(--lobe-popover-arrow-offset-inline) * -1);transform:rotate(90deg);}`,`.acss-1se3qh9[data-side='right']{inset-inline-start:calc(var(--lobe-popover-arrow-offset-inline) * -1);transform:rotate(-90deg);}`,`.acss-1se3qh9[data-side='bottom']{inset-block-start:calc(var(--lobe-popover-arrow-offset-block) * -1);}`],`
    --lobe-popover-arrow-offset-block: 5px;
    --lobe-popover-arrow-offset-inline: 8px;

    pointer-events: none;

    position: absolute;
    transform-origin: center;

    display: flex;

    width: 12px;
    height: 6px;

    transition:
      inset-inline-start var(--lobe-popover-layout-duration) var(--lobe-popover-layout-ease),
      inset-block-start var(--lobe-popover-layout-duration) var(--lobe-popover-layout-ease);

    & > svg {
      display: block;
      width: 100%;
      height: 100%;
    }

    & [data-role='fill'] {
      fill: var(--ant-color-bg-elevated);
    }

    & [data-role='stroke'] {
      fill: none;
      stroke: var(--ant-color-border);
      stroke-width: 1px;
    }

    &[data-side='top'] {
      inset-block-end: calc(var(--lobe-popover-arrow-offset-block) * -1);
      transform: rotate(180deg);
    }

    &[data-side='left'] {
      inset-inline-end: calc(var(--lobe-popover-arrow-offset-inline) * -1);
      transform: rotate(90deg);
    }

    &[data-side='right'] {
      inset-inline-start: calc(var(--lobe-popover-arrow-offset-inline) * -1);
      transform: rotate(-90deg);
    }

    &[data-side='bottom'] {
      inset-block-start: calc(var(--lobe-popover-arrow-offset-block) * -1);
    }
  `),popup:E(`acss-fbq7rd`,[`.acss-fbq7rd{position:relative;transform-origin:var(--transform-origin);box-sizing:border-box;min-width:120px;max-width:var(--available-width);border-radius:var(--ant-border-radius);color:var(--ant-color-text);background:var(--ant-color-bg-elevated);outline:none;box-shadow:var(--ant-box-shadow-secondary),var(--lobe-ring);transition-timing-function:var(--lobe-popover-animation-ease-out);transition-duration:var(--lobe-popover-animation-duration);transition-property:opacity,transform;}`,`.acss-fbq7rd[data-layout-animation]{width:var(--popup-width, auto);height:var(--popup-height, auto);transition-timing-function:var(--lobe-popover-animation-ease-out),var(--lobe-popover-animation-ease-out),var(--lobe-popover-layout-ease),var(--lobe-popover-layout-ease);transition-duration:var(--lobe-popover-animation-duration),var(--lobe-popover-animation-duration),var(--lobe-popover-layout-duration),var(--lobe-popover-layout-duration);transition-property:opacity,transform,width,height;}`,`.acss-fbq7rd[data-repop]{transition:none;}`,`.acss-fbq7rd[data-starting-style],.acss-fbq7rd[data-ending-style]{transform:translate3d(var(--lobe-popover-translate-x), var(--lobe-popover-translate-y), 0) scale(var(--lobe-popover-animation-scale));opacity:0;}`,`.acss-fbq7rd[data-ending-style]{transition-timing-function:var(--lobe-popover-animation-ease-in);transition-duration:var(--lobe-popover-animation-duration-exit);}`,`.acss-fbq7rd[data-instant]{transition:none;}`],`
    position: relative;
    transform-origin: var(--transform-origin);

    box-sizing: border-box;
    min-width: 120px;
    max-width: var(--available-width);
    border-radius: var(--ant-border-radius);

    color: var(--ant-color-text);

    background: var(--ant-color-bg-elevated);
    outline: none;
    box-shadow: var(--ant-box-shadow-secondary), var(--lobe-ring);

    transition-timing-function: var(--lobe-popover-animation-ease-out);
    transition-duration: var(--lobe-popover-animation-duration);
    transition-property: opacity, transform;

    /* Base UI writes the old size into --popup-width/height on a trigger switch and the new size
       one frame later; the box only morphs if width/height actually read them. */
    &[data-layout-animation] {
      width: var(--popup-width, auto);
      height: var(--popup-height, auto);

      transition-timing-function:
        var(--lobe-popover-animation-ease-out), var(--lobe-popover-animation-ease-out),
        var(--lobe-popover-layout-ease), var(--lobe-popover-layout-ease);
      transition-duration:
        var(--lobe-popover-animation-duration), var(--lobe-popover-animation-duration),
        var(--lobe-popover-layout-duration), var(--lobe-popover-layout-duration);
      transition-property: opacity, transform, width, height;
    }

    &[data-repop] {
      transition: none;
    }

    &[data-starting-style],
    &[data-ending-style] {
      transform: translate3d(var(--lobe-popover-translate-x), var(--lobe-popover-translate-y), 0)
        scale(var(--lobe-popover-animation-scale));
      opacity: 0;
    }

    &[data-ending-style] {
      transition-timing-function: var(--lobe-popover-animation-ease-in);
      transition-duration: var(--lobe-popover-animation-duration-exit);
    }

    &[data-instant] {
      transition: none;
    }
  `),positioner:E(`acss-1bgyuw6`,[`.acss-1bgyuw6{--lobe-popover-animation-duration:150ms;--lobe-popover-animation-translate:6px;--lobe-popover-animation-scale:0.96;--lobe-popover-animation-ease-in:ease-in;--lobe-popover-animation-duration-exit:75ms;--lobe-popover-animation-ease-out:var(--ant-motion-ease-out);--lobe-popover-translate-x:0;--lobe-popover-translate-y:calc(var(--lobe-popover-animation-translate) * -1);--lobe-popover-layout-duration:380ms;--lobe-popover-layout-ease:linear(
      0,
      0.041,
      0.14,
      0.268,
      0.407,
      0.541,
      0.661,
      0.765,
      0.849,
      0.915,
      0.964,
      0.998,
      1.02,
      1.032,
      1.038,
      1.039,
      1.036,
      1.032,
      1.027,
      1.022,
      1.016,
      1.012,
      1.008,
      1.005,
      1.003
    );z-index:1100;width:min(var(--positioner-width), var(--available-width));height:var(--positioner-height);transition-timing-function:var(--lobe-popover-animation-ease-out);transition-duration:var(--lobe-popover-animation-duration);transition-property:none;}`,`.acss-1bgyuw6[data-layout-animation]{transition-timing-function:var(--lobe-popover-layout-ease);transition-duration:var(--lobe-popover-layout-duration);transition-property:inset-block-start,inset-inline-start,inset-inline-end,inset-block-end,transform;}`,`.acss-1bgyuw6[data-instant],.acss-1bgyuw6[data-repop]{transition:none;}`,`.acss-1bgyuw6[data-anchor-hidden],.acss-1bgyuw6[data-zero-origin='true']{pointer-events:none;visibility:hidden;}`,`.acss-1bgyuw6[data-placement='top'],.acss-1bgyuw6[data-placement='topLeft'],.acss-1bgyuw6[data-placement='topRight']{--lobe-popover-translate-x:0;--lobe-popover-translate-y:var(--lobe-popover-animation-translate);}`,`.acss-1bgyuw6[data-placement='bottom'],.acss-1bgyuw6[data-placement='bottomLeft'],.acss-1bgyuw6[data-placement='bottomRight']{--lobe-popover-translate-x:0;--lobe-popover-translate-y:calc(var(--lobe-popover-animation-translate) * -1);}`,`.acss-1bgyuw6[data-placement='left'],.acss-1bgyuw6[data-placement='leftTop'],.acss-1bgyuw6[data-placement='leftBottom']{--lobe-popover-translate-x:var(--lobe-popover-animation-translate);--lobe-popover-translate-y:0;}`,`.acss-1bgyuw6[data-placement='right'],.acss-1bgyuw6[data-placement='rightTop'],.acss-1bgyuw6[data-placement='rightBottom']{--lobe-popover-translate-x:calc(var(--lobe-popover-animation-translate) * -1);--lobe-popover-translate-y:0;}`,`@media (prefers-reduced-motion: reduce){.acss-1bgyuw6{--lobe-popover-layout-duration:0s;}}`],`
    --lobe-popover-animation-duration: 150ms;
    --lobe-popover-animation-translate: 6px;
    --lobe-popover-animation-scale: 0.96;
    --lobe-popover-animation-ease-in: ease-in;
    --lobe-popover-animation-duration-exit: 75ms;
    --lobe-popover-animation-ease-out: var(--ant-motion-ease-out);
    --lobe-popover-translate-x: 0;
    --lobe-popover-translate-y: calc(var(--lobe-popover-animation-translate) * -1);
    --lobe-popover-layout-duration: 380ms;
    --lobe-popover-layout-ease: linear(
      0,
      0.041,
      0.14,
      0.268,
      0.407,
      0.541,
      0.661,
      0.765,
      0.849,
      0.915,
      0.964,
      0.998,
      1.02,
      1.032,
      1.038,
      1.039,
      1.036,
      1.032,
      1.027,
      1.022,
      1.016,
      1.012,
      1.008,
      1.005,
      1.003
    );

    z-index: 1100;

    width: min(var(--positioner-width), var(--available-width));
    height: var(--positioner-height);

    transition-timing-function: var(--lobe-popover-animation-ease-out);
    transition-duration: var(--lobe-popover-animation-duration);
    transition-property: none;

    &[data-layout-animation] {
      transition-timing-function: var(--lobe-popover-layout-ease);
      transition-duration: var(--lobe-popover-layout-duration);
      transition-property:
        inset-block-start, inset-inline-start, inset-inline-end, inset-block-end, transform;
    }

    &[data-instant],
    &[data-repop] {
      transition: none;
    }

    /* Fallback: never show a popover when the anchor is hidden or the positioner falls back to (0,0). */
    &[data-anchor-hidden],
    &[data-zero-origin='true'] {
      pointer-events: none;
      visibility: hidden;
    }

    &[data-placement='top'],
    &[data-placement='topLeft'],
    &[data-placement='topRight'] {
      --lobe-popover-translate-x: 0;
      --lobe-popover-translate-y: var(--lobe-popover-animation-translate);
    }

    &[data-placement='bottom'],
    &[data-placement='bottomLeft'],
    &[data-placement='bottomRight'] {
      --lobe-popover-translate-x: 0;
      --lobe-popover-translate-y: calc(var(--lobe-popover-animation-translate) * -1);
    }

    &[data-placement='left'],
    &[data-placement='leftTop'],
    &[data-placement='leftBottom'] {
      --lobe-popover-translate-x: var(--lobe-popover-animation-translate);
      --lobe-popover-translate-y: 0;
    }

    &[data-placement='right'],
    &[data-placement='rightTop'],
    &[data-placement='rightBottom'] {
      --lobe-popover-translate-x: calc(var(--lobe-popover-animation-translate) * -1);
      --lobe-popover-translate-y: 0;
    }

    @media (prefers-reduced-motion: reduce) {
      --lobe-popover-layout-duration: 0s;
    }
  `),root:E(`acss-12krrfj`,[`.acss-12krrfj{-webkit-user-select:none;user-select:none;position:relative;filter:drop-shadow(0 2px 8px rgb(0 0 0 / 12%));}`],`
    user-select: none;
    position: relative;
    filter: drop-shadow(0 2px 8px rgb(0 0 0 / 12%));
  `),viewport:E(`acss-1a14gb6`,[`.acss-1a14gb6{--lobe-popover-viewport-inline-padding:12px;--lobe-popover-content-shift:8px;--lobe-popover-content-blur:4px;position:relative;overflow:clip;padding-block:12px;padding-inline:var(--lobe-popover-viewport-inline-padding);}`,`.acss-1a14gb6 [data-previous],.acss-1a14gb6 [data-current]{transform:translateX(0);opacity:1;filter:blur(0);transition:transform var(--lobe-popover-layout-duration) var(--lobe-popover-layout-ease),opacity calc(var(--lobe-popover-layout-duration) / 2) var(--lobe-popover-animation-ease-out),filter calc(var(--lobe-popover-layout-duration) / 2) var(--lobe-popover-animation-ease-out);}`,`.acss-1a14gb6 [data-current]{transition-delay:0s,calc(var(--lobe-popover-layout-duration) / 6),calc(var(--lobe-popover-layout-duration) / 6);}`,`.acss-1a14gb6 [data-previous][data-ending-style],.acss-1a14gb6 [data-current][data-starting-style]{filter:blur(var(--lobe-popover-content-blur));}`,`.acss-1a14gb6 [data-previous]{position:absolute;inset-block-start:12px;inset-inline-start:var(--lobe-popover-viewport-inline-padding);width:calc(var(--popup-width) - var(--lobe-popover-viewport-inline-padding) * 2 - 2px);}`,`.acss-1a14gb6[data-transitioning] [data-current]{width:calc(var(--positioner-width) - var(--lobe-popover-viewport-inline-padding) * 2 - 2px);}`,`.acss-1a14gb6[data-repop] [data-previous]{display:none;}`,`.acss-1a14gb6[data-repop] [data-current]{transition:none;}`,`.acss-1a14gb6[data-activation-direction~='right'] [data-previous][data-ending-style]{transform:translateX(calc(var(--lobe-popover-content-shift) * -1));opacity:0;}`,`.acss-1a14gb6[data-activation-direction~='right'] [data-current][data-starting-style]{transform:translateX(var(--lobe-popover-content-shift));opacity:0;}`,`.acss-1a14gb6[data-activation-direction~='left'] [data-previous][data-ending-style]{transform:translateX(var(--lobe-popover-content-shift));opacity:0;}`,`.acss-1a14gb6[data-activation-direction~='left'] [data-current][data-starting-style]{transform:translateX(calc(var(--lobe-popover-content-shift) * -1));opacity:0;}`,`.acss-1a14gb6[data-activation-direction~='down'] [data-previous][data-ending-style]{transform:translateY(calc(var(--lobe-popover-content-shift) * -1));opacity:0;}`,`.acss-1a14gb6[data-activation-direction~='down'] [data-current][data-starting-style]{transform:translateY(var(--lobe-popover-content-shift));opacity:0;}`,`.acss-1a14gb6[data-activation-direction~='up'] [data-previous][data-ending-style]{transform:translateY(var(--lobe-popover-content-shift));opacity:0;}`,`.acss-1a14gb6[data-activation-direction~='up'] [data-current][data-starting-style]{transform:translateY(calc(var(--lobe-popover-content-shift) * -1));opacity:0;}`],`
    --lobe-popover-viewport-inline-padding: 12px;
    --lobe-popover-content-shift: 8px;
    --lobe-popover-content-blur: 4px;

    position: relative;
    overflow: clip;
    padding-block: 12px;
    padding-inline: var(--lobe-popover-viewport-inline-padding);

    /* Old and new content overlap in one clip box while the box morphs; blurring both layers
       during the crossfade turns the misaligned overlap into a soft smear instead of garbled text. */
    [data-previous],
    [data-current] {
      transform: translateX(0);
      opacity: 1;
      filter: blur(0);
      transition:
        transform var(--lobe-popover-layout-duration) var(--lobe-popover-layout-ease),
        opacity calc(var(--lobe-popover-layout-duration) / 2) var(--lobe-popover-animation-ease-out),
        filter calc(var(--lobe-popover-layout-duration) / 2) var(--lobe-popover-animation-ease-out);
    }

    [data-current] {
      transition-delay:
        0s, calc(var(--lobe-popover-layout-duration) / 6),
        calc(var(--lobe-popover-layout-duration) / 6);
    }

    [data-previous][data-ending-style],
    [data-current][data-starting-style] {
      filter: blur(var(--lobe-popover-content-blur));
    }

    /* Freeze both layers at their own final width so neither re-wraps while the box morphs;
       the viewport clip reveals the new content as the box grows over it. */
    [data-previous] {
      position: absolute;
      inset-block-start: 12px;
      inset-inline-start: var(--lobe-popover-viewport-inline-padding);
      width: calc(var(--popup-width) - var(--lobe-popover-viewport-inline-padding) * 2 - 2px);
    }

    &[data-transitioning] [data-current] {
      width: calc(var(--positioner-width) - var(--lobe-popover-viewport-inline-padding) * 2 - 2px);
    }

    &[data-repop] [data-previous] {
      display: none;
    }

    &[data-repop] [data-current] {
      transition: none;
    }

    &[data-activation-direction~='right'] [data-previous][data-ending-style] {
      transform: translateX(calc(var(--lobe-popover-content-shift) * -1));
      opacity: 0;
    }

    &[data-activation-direction~='right'] [data-current][data-starting-style] {
      transform: translateX(var(--lobe-popover-content-shift));
      opacity: 0;
    }

    &[data-activation-direction~='left'] [data-previous][data-ending-style] {
      transform: translateX(var(--lobe-popover-content-shift));
      opacity: 0;
    }

    &[data-activation-direction~='left'] [data-current][data-starting-style] {
      transform: translateX(calc(var(--lobe-popover-content-shift) * -1));
      opacity: 0;
    }

    &[data-activation-direction~='down'] [data-previous][data-ending-style] {
      transform: translateY(calc(var(--lobe-popover-content-shift) * -1));
      opacity: 0;
    }

    &[data-activation-direction~='down'] [data-current][data-starting-style] {
      transform: translateY(var(--lobe-popover-content-shift));
      opacity: 0;
    }

    &[data-activation-direction~='up'] [data-previous][data-ending-style] {
      transform: translateY(var(--lobe-popover-content-shift));
      opacity: 0;
    }

    &[data-activation-direction~='up'] [data-current][data-starting-style] {
      transform: translateY(calc(var(--lobe-popover-content-shift) * -1));
      opacity: 0;
    }
  `)}})),Zn,Z,Qn,$n,er,tr,nr,rr,ir,ar=e((()=>{o(),lt(),rt(),s(),c(),Kn(),Jn(),Xn(),Zn=t(r(),1),Z=t(i(),1),ut(),L(),Ee(),zn(),Qn=Kt,$n=({children:e,className:t,nativeButton:n,ref:r,...i})=>{let{isNativeButtonTriggerElement:a,resolvedNativeButton:o}=d({children:e,nativeButton:n});return(0,Zn.isValidElement)(e)?(0,Z.jsx)(X,{...i,nativeButton:o,render:(n,i)=>{let o=(()=>{if(a)return n;let{type:e,ref:t,...r}=n;return r})(),s=mt(e.props,o),c=typeof s.className==`function`?s.className(i):s.className,l=typeof t==`function`?t(i):t;return(0,Zn.cloneElement)(e,{...s,className:H(c,l),ref:je([e.ref,n.ref,r])})}}):(0,Z.jsx)(X,{...i,className:t,nativeButton:o,ref:r,children:e})},$n.displayName=`PopoverTriggerElement`,er=({container:e,root:t,children:n,...r})=>{let i=qn(t),a=e??i;return a?(0,Z.jsx)(cn,{container:a,...r,children:n}):null},er.displayName=`PopoverPortal`,tr=({children:e,className:t,collisionPadding:n,hoverTrigger:r,placement:i,align:o,side:s,sideOffset:c,style:l,...u})=>{let d=i?f[i]:void 0,[p,m]=(0,Zn.useState)(null),{zIndex:h,ref:g}=a(`floating`,typeof l!=`function`&&l?.zIndex!=null&&typeof l.zIndex==`number`?l.zIndex:void 0),_=Ze([m,g]),v=typeof l==`function`?e=>({zIndex:h,...l(e)}):{zIndex:h,...l};return(0,Z.jsx)(gn,{align:o??d?.align??`center`,collisionPadding:n??He(),"data-hover-trigger":r||void 0,"data-placement":i,ref:_,side:s??d?.side??`bottom`,sideOffset:c??6,style:v,className:e=>H(Yn.positioner,typeof t==`function`?t(e):t),...u,children:(0,Z.jsx)(Je,{value:p,children:e})})},tr.displayName=`PopoverPositioner`,nr=({className:e,...t})=>(0,Z.jsx)(wn,{className:t=>H(Yn.popup,typeof e==`function`?e(t):e),...t}),nr.displayName=`PopoverPopup`,rr=({className:e,children:t,...n})=>(0,Z.jsx)(Dn,{className:t=>H(Yn.arrow,typeof e==`function`?e(t):e),...n,children:t??Gn}),rr.displayName=`PopoverArrow`,ir=({className:e,...t})=>(0,Z.jsx)(Nn,{className:t=>H(Yn.viewport,typeof e==`function`?e(t):e),...t}),ir.displayName=`PopoverViewport`})),or,sr,cr,lr,ur,dr,fr=e((()=>{or=t(r(),1),sr=t(i(),1),cr=()=>void 0,lr=(0,or.createContext)({close:cr}),ur=(0,or.memo)(({children:e,value:t})=>(0,sr.jsx)(lr,{value:t,children:e})),dr=()=>(0,or.use)(lr)})),Q,$,pr,mr=e((()=>{o(),m(),s(),Et(),Kn(),Jn(),ar(),fr(),Nt(),Q=t(r(),1),$=t(i(),1),zn(),pr=(0,Q.memo)(({children:e,content:t,arrow:n=!1,trigger:r=`hover`,placement:i=`top`,styles:a,classNames:o,className:s,open:c,onOpenChange:l,defaultOpen:u=!1,mouseEnterDelay:m=.1,mouseLeaveDelay:h=.1,openDelay:g,closeDelay:_,getPopupContainer:v,disabled:y=!1,zIndex:b,nativeButton:x,ref:S,positionerProps:C,triggerProps:w,popupProps:T,backdropProps:E,portalProps:D})=>{let ee=p(),O=(0,Q.useMemo)(()=>Fn(),[]),[k,A]=(0,Q.useState)(!!u),j=(0,Q.useCallback)(()=>{O.close()},[O]),M=(0,Q.useMemo)(()=>({close:j}),[j]),N=y?!1:c??k,{openOnClick:te,openOnHover:P}=(0,Q.useMemo)(()=>Tt(r),[r]),F=(0,Q.useCallback)((e,t)=>{if(!(y&&e)){if(jt(te,e,t?.reason)){t?.cancel?.();return}l?.(e),c===void 0&&A(e)}},[l,c,y,te]),I=g??m*1e3,L=_??h*1e3,R=f[i]??f.top,ne=n?10:6,re=qn(),{resolvedNativeButton:ie}=d({children:e,nativeButton:x}),z=(0,Q.useMemo)(()=>({arrow:o?.arrow,popup:s,positioner:o?.root,trigger:o?.trigger,viewport:o?.content}),[s,o?.arrow,o?.content,o?.root,o?.trigger]),ae=(0,Q.useMemo)(()=>(0,$.jsx)($n,{handle:O,closeDelay:L,delay:I,disabled:y,openOnHover:P&&!y,...w,className:z.trigger,nativeButton:ie,ref:S,children:e}),[e,y,P,O,S,z.trigger,ie,I,L,w]),oe=(0,Q.useMemo)(()=>{},[v,ee]),se=(0,Q.useMemo)(()=>({arrow:a?.arrow,positioner:{...a?.root,...b===void 0?{}:{zIndex:b}},viewport:a?.content}),[a?.arrow,a?.content,a?.root,b]),ce=(0,Q.useMemo)(()=>(0,$.jsx)(tr,{align:R.align,className:z.positioner,hoverTrigger:P,placement:i,side:R.side,sideOffset:ne,style:se.positioner,...C,children:(0,$.jsxs)(nr,{className:z.popup,...T,children:[n&&(0,$.jsx)(rr,{className:z.arrow,style:se.arrow,children:Gn}),(0,$.jsx)(ir,{className:z.viewport,style:se.viewport,children:(0,$.jsx)(ur,{value:M,children:t})})]})}),[n,t,M,P,i,R.align,R.side,T,C,z,ne,se]);if(!t)return e;let le=oe??re;return(0,$.jsxs)(Qn,{defaultOpen:u,handle:O,open:N,onOpenChange:F,children:[ae,E&&(0,$.jsx)(An,{...E}),le?(0,$.jsx)(er,{container:le,...D,children:ce}):null]})}),pr.displayName=`PopoverStandalone`})),hr,gr,_r,vr=e((()=>{At(),Un(),mr(),hr=t(r(),1),gr=t(i(),1),_r=e=>(0,hr.use)(Ot)&&e.open===void 0&&e.defaultOpen===void 0&&!e.standalone?(0,gr.jsx)(Hn,{...e}):(0,gr.jsx)(pr,{...e}),_r.displayName=`Popover`}));export{nr as a,Qn as c,dr as i,ar as l,vr as n,er as o,fr as r,tr as s,_r as t};