import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{$ as i,At as a,Ft as o,Gt as s,Pt as c,Q as l,Wt as u,Xn as d,Zn as f,dr as p,fr as m,jt as h,lr as g,ur as _}from"../vendor/vendor-ui-core-BmtybT1r.js";import{c as v,cg as y,t as b,ug as x,wc as S}from"../vendor/vendor-icons-vienkZi5.js";import{$A as C,$N as w,$P as T,$T as E,$j as D,AD as O,AP as k,AT as ee,BA as te,CT as A,DD as j,DN as M,DP as N,DT as P,Dj as F,EF as I,EM as L,EP as R,Ej as z,Fw as B,GA as V,GN as ne,HA as re,HM as ie,IM as ae,IN as oe,IP as se,IT as ce,JC as le,JT as ue,KA as de,KN as fe,Kj as pe,LT as me,MD as he,MN as ge,MP as _e,MT as ve,NN as ye,NP as be,NT as xe,OD as Se,ON as Ce,OT as we,QN as Te,QP as Ee,QT as H,RA as De,RT as Oe,Rw as ke,SN as Ae,SP as je,ST as Me,TE as Ne,TP as Pe,UA as Fe,UP as Ie,VA as Le,VP as Re,Vj as ze,WA as Be,WN as Ve,WP as He,Wj as Ue,XP as We,XT as Ge,YC as Ke,YN as qe,YT as Je,ZA as Ye,ZP as Xe,ZT as Ze,_D as Qe,_N as $e,_w as et,aF as tt,aM as nt,aj as rt,bD as it,bN as U,bT as at,bw as ot,cF as st,cM as ct,dE as lt,dN as ut,eF as dt,eM as ft,eP as pt,fE as mt,fN as ht,fP as gt,fw as _t,gF as W,gN as vt,gT as yt,hP as bt,hT as xt,iF as St,jD as Ct,jN as wt,jP as Tt,jT as Et,kD as Dt,kM as Ot,kw as kt,lE as At,lF as jt,lM as Mt,lN as Nt,mT as Pt,mj as Ft,nP as It,oF as Lt,oN as Rt,oP as zt,oj as Bt,ow as Vt,pE as Ht,pF as Ut,pN as Wt,pT as Gt,pw as Kt,qA as qt,qN as Jt,qT as Yt,qj as Xt,rM as Zt,sF as Qt,sM as $t,sN as en,sP as tn,sw as nn,tF as rn,tP as an,uE as on,uF as sn,vP as cn,vw as ln,wE as un,wN as dn,wP as fn,wT as pn,xD as mn,xN as G,xT as hn,yT as gn,yw as _n,zA as vn,zT as yn,zw as bn}from"./index-w64_zsxD.js";import{a as xn,i as Sn,n as Cn,r as wn}from"./resolveAriaLabelledBy-J9JhdI1X.js";import{n as Tn,t as En}from"./serializeValue-b22AzPAs.js";var K,Dn,On=e((()=>{u(),o(),_(),sn(),jt(),K=Ut(({css:e,cssVar:t})=>({arrow:e`
    display: flex;
    width: 12px;
    height: 6px;

    & > svg {
      width: 100%;
      height: 100%;
    }
  `,borderless:W(s.variantBorderless,e`
      --lobe-select-open-bg: ${t.colorFillTertiary};
      --lobe-select-readonly-bg: color-mix(in srgb, ${t.colorFillTertiary} 70%, transparent);
      --lobe-select-disabled-bg: color-mix(in srgb, ${t.colorFillTertiary} 55%, transparent);
    `),clear:e`
    display: inline-flex;
    align-items: center;

    color: ${t.colorTextTertiary};

    opacity: 0;

    transition: opacity 150ms ${t.motionEaseOut};

    &:hover {
      color: ${t.colorTextSecondary};
    }
  `,empty:e``,filled:W(s.variantFilled,e`
      --lobe-select-open-bg: ${t.colorFillSecondary};
      --lobe-select-readonly-bg: color-mix(in srgb, ${t.colorFillTertiary} 70%, transparent);
      --lobe-select-disabled-bg: color-mix(in srgb, ${t.colorFillTertiary} 55%, transparent);
    `),group:e``,groupLabel:e``,icon:e`
    display: inline-flex;
    align-items: center;
    transition: transform 150ms ${t.motionEaseOut};

    &[data-popup-open] {
      transform: rotate(180deg);
    }
  `,item:e``,itemBoldSelected:e`
    &[data-selected] {
      font-weight: 600;
    }
  `,itemIndicator:e`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin-inline-start: auto;
    padding-inline-start: 8px;

    color: ${t.colorPrimary};
  `,itemText:e``,list:e`
    overflow-y: auto;
    flex: 1;
    min-height: 0;
    padding-block: 0;
  `,listWithSearch:e`
    padding-block-start: 4px;
  `,outlined:W(s.variantOutlined,e`
      --lobe-select-open-bg: ${t.colorFillTertiary};
      --lobe-select-readonly-bg: color-mix(in srgb, ${t.colorBgContainer} 75%, transparent);
      --lobe-select-disabled-bg: color-mix(in srgb, ${t.colorBgContainer} 60%, transparent);
    `),popup:e`
    --lobe-select-available-height: min(
      var(--available-height),
      var(--lobe-select-popup-max-height, var(--available-height))
    );

    transform-origin: var(--transform-origin);

    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    max-height: var(--lobe-select-available-height);

    transition:
      opacity 150ms ${t.motionEaseOut},
      transform 150ms ${t.motionEaseOut};

    &[data-starting-style],
    &[data-ending-style] {
      transform: scaleY(0.92);
      opacity: 0;
    }
  `,positioner:e`
    z-index: 1100;
    outline: none;
  `,prefix:e`
    display: inline-flex;
    align-items: center;
    color: ${t.colorTextSecondary};
  `,scrollArrow:e`
    cursor: default;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 16px;

    color: ${t.colorTextSecondary};

    background: ${t.colorBgElevated};
  `,search:e`
    cursor: text;

    display: flex;
    align-items: center;

    min-height: 36px;
    margin-inline: calc(-1 * var(--lobe-menu-popup-padding));
    padding-block: 8px;
    padding-inline: 12px;
    border-block-end: 1px solid ${t.colorFillSecondary};
  `,searchInput:e`
    flex: 1;

    min-width: 0;
    padding-block: 0;
    padding-inline: 4px;
    border: 0;

    font-size: 14px;
    line-height: 20px;
    color: ${t.colorText};

    background: transparent;
    outline: none;

    &::placeholder {
      color: ${t.colorTextPlaceholder};
    }
  `,shadow:s.shadow,suffix:e`
    display: inline-flex;
    gap: 6px;
    align-items: center;
    color: ${t.colorTextSecondary};
  `,tag:e`
    display: inline-flex;
    align-items: center;

    max-width: 100%;
    padding-block: 0;
    padding-inline: 6px;
    border-radius: ${t.borderRadiusSM};

    font-size: 12px;
    line-height: 20px;
    color: ${t.colorText};

    background: ${t.colorFillTertiary};
  `,tagClose:e`
    cursor: pointer;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin-inline-start: 4px;

    color: ${t.colorTextSecondary};

    transition: opacity 150ms ${t.motionEaseOut};
  `,tags:e`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    align-items: center;
  `,tagsValue:e`
    /* No growing, so an empty trigger leaves the inline input the full width — but it must
       still shrink, or the tags stay at max-content and run off the trigger instead of wrapping. */
    flex: 0 1 auto;
  `,tagsSearch:e`
    display: flex;
    flex: 1;
    min-width: 48px;
  `,trigger:e`
    cursor: pointer;
    user-select: none;

    display: inline-flex;
    gap: 8px;
    align-items: center;

    box-sizing: border-box;
    width: 100%;
    border: 1px solid transparent;
    border-radius: ${t.borderRadius};

    font-family: inherit;
    color: ${t.colorText};

    background: transparent;
    outline: none;

    transition: all 150ms ${t.motionEaseOut};

    &:not([data-disabled], [data-readonly])[data-popup-open],
    &:not([data-disabled], [data-readonly])[data-open],
    &:not([data-disabled], [data-readonly])[data-state='open'],
    &:not([data-disabled], [data-readonly])[aria-expanded='true'] {
      background: var(--lobe-select-open-bg, ${t.colorFillTertiary});
    }

    ${g};

    &:hover [data-role='lobe-select-clear'] {
      opacity: 1;
    }

    &[data-placeholder] [data-role='lobe-select-clear'] {
      pointer-events: none;
      opacity: 0;
    }

    &[data-disabled] {
      cursor: not-allowed;
      color: ${t.colorTextDisabled};
      background: var(--lobe-select-disabled-bg, transparent);

      &:hover {
        background: var(--lobe-select-disabled-bg, transparent);
      }
    }

    &[data-readonly] {
      cursor: default;
      color: ${t.colorTextSecondary};
      background: var(--lobe-select-readonly-bg, transparent);

      &:hover {
        background: var(--lobe-select-readonly-bg, transparent);
      }
    }

    &[data-disabled] [data-role='lobe-select-clear'] {
      pointer-events: none;
      opacity: 0;
    }
  `,triggerLarge:e`
    min-height: ${c.large}px;
    padding-block: 6px;
    padding-inline: 12px;

    font-size: 16px;
    line-height: 24px;
  `,triggerMiddle:e`
    min-height: ${c.middle}px;
    padding-block: 4px;
    padding-inline: 11px;

    font-size: 14px;
    line-height: 20px;
  `,triggerSmall:e`
    min-height: ${c.small}px;
    padding-block: 0;
    padding-inline: 8px;

    font-size: 12px;
    line-height: 18px;
  `,value:e`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    gap: 4px;
    align-items: center;

    min-width: 0;

    color: inherit;

    &[data-placeholder] {
      color: ${t.colorTextPlaceholder};
    }
  `,valueText:e`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `})),Dn=st(K.trigger,{defaultVariants:{shadow:!1,size:`middle`,variant:`outlined`},variants:{shadow:{false:null,true:K.shadow},size:{large:K.triggerLarge,middle:K.triggerMiddle,small:K.triggerSmall},variant:{borderless:K.borderless,filled:K.filled,outlined:K.outlined}}})}));function kn(e){let t=An.useRef(!0);t.current&&(t.current=!1,e())}var An,jn=e((()=>{An=t(n(),1)}));function Mn(){let e=Fn.useContext(In);if(e===void 0)throw Error(We(60));return e}function Nn(){let e=Fn.useContext(Ln);if(e===void 0)throw Error(We(101));return e}function Pn(){let e=Fn.useContext(Rn);if(e===void 0)throw Error(We(61));return e}var Fn,In,Ln,Rn,q=e((()=>{Xe(),Fn=t(n(),1),In=Fn.createContext(void 0),Ln=Fn.createContext(void 0),Rn=Fn.createContext(void 0)}));function zn(e,t,n){return e==null||t==null?Object.is(e,t):n(e,t)}function Bn(e,t,n){return Array.isArray(e)&&Array.isArray(t)?!Sn(e,t,(e,t)=>zn(e,t,n)):e!==t}function Vn(e,t,n){return e?e.some(e=>e===void 0?!1:zn(t,e,n)):!1}function Hn(e,t,n){return e?e.findIndex(e=>e===void 0?!1:zn(e,t,n)):-1}function Un(e,t){if(t!==qn)return n=>Vn(e,n,t);let n=new Set(e);return n.delete(void 0),t=>n.has(t)&&(t!==0||e.some(e=>Object.is(t,e)))}function Wn(e,t,n,r){let i=r&&Array.isArray(t)?e.findIndex(Un(t,n)):Hn(e,t,n);return i===-1?null:i}function Gn(e,t,n,r,i,a){return Vn(r,t,i)?a!=null&&e>a&&Vn(r,n[a],i)?a:e:e===a?Wn(n,r,i,!0):a}function Kn(e,t,n){return e.filter(e=>!zn(t,e,n))}var qn,Jn=e((()=>{xn(),qn=(e,t)=>Object.is(e,t)}));function Yn(e){return typeof e==`object`&&!!e&&Array.isArray(e.items)}function Xn(e){return Yn(e?.[0])}function Zn(e){return Xn(e)?e.flatMap(e=>e.items):e}function Qn(e){if(!Array.isArray(e))return e!=null&&`null`in e;let t=e;if(Xn(t)){for(let e of t)for(let t of e.items)if(t&&t.value==null&&t.label!=null)return!0;return!1}for(let e of t)if(e&&e.value==null&&e.label!=null)return!0;return!1}function $n(e,t){if(t&&e!=null)return t(e)??``;if(e&&typeof e==`object`){if(`label`in e&&e.label!=null)return String(e.label);if(`value`in e)return String(e.value)}return Tn(e)}function er(e,t){return t&&e!=null?t(e)??``:e&&typeof e==`object`&&`value`in e&&`label`in e?Tn(e.value):Tn(e)}function tr(e,t,n){function r(){return $n(e,n)}if(n&&e!=null)return n(e);if(e&&typeof e==`object`&&`label`in e&&e.label!=null)return e.label;if(t&&!Array.isArray(t))return(Object.hasOwn(t,e)?t[e]:void 0)??r();if(Array.isArray(t)){let n=Zn(t);if(typeof e!=`object`||!e){let t=n.find(t=>t.value===e);return t&&t.label!=null?t.label:r()}if(`value`in e){let t=n.find(t=>t&&t.value===e.value);if(t&&t.label!=null)return t.label}}return r()}function nr(e,t,n){return e.reduce((e,r,i)=>(i>0&&e.push(`, `),e.push((0,ir.jsx)(rr.Fragment,{children:tr(r,t,n)},i)),e),[])}var rr,ir,ar=e((()=>{rr=t(n(),1),En(),ir=t(r(),1)})),or,sr=e((()=>{Jn(),ar(),or={id:e=>e.id,labelId:e=>e.labelId,modal:e=>e.modal,items:e=>e.items,itemToStringLabel:e=>e.itemToStringLabel,isItemEqualToValue:e=>e.isItemEqualToValue,value:e=>e.value,hasSelectedValue:e=>{let{value:t,multiple:n,itemToStringValue:r}=e;return t==null?!1:n&&Array.isArray(t)?t.length>0:er(t,r)!==``},hasNullItemLabel:(e,t)=>t?Qn(e.items):!1,open:e=>e.open,mounted:e=>e.mounted,forceMount:e=>e.forceMount,transitionStatus:e=>e.transitionStatus,openMethod:e=>e.openMethod,activeIndex:e=>e.activeIndex,selectedIndex:e=>e.selectedIndex,isActive:(e,t)=>e.activeIndex===t,isSelected:(e,t)=>{let n=e.isItemEqualToValue,r=e.value;return e.multiple?Array.isArray(r)&&r.some(e=>zn(t,e,n)):zn(t,r,n)},isSelectedByFocus:(e,t)=>e.selectedIndex===t,popupProps:e=>e.popupProps,triggerProps:e=>e.triggerProps,triggerElement:e=>e.triggerElement,positionerElement:e=>e.positionerElement,listElement:e=>e.listElement,popupSide:e=>e.popupSide,scrollUpArrowVisible:e=>e.scrollUpArrowVisible,scrollDownArrowVisible:e=>e.scrollDownArrowVisible,hasScrollArrows:e=>e.hasScrollArrows}}));function cr(e){let{id:t,value:n,defaultValue:r=null,onValueChange:i,open:a,defaultOpen:o=!1,onOpenChange:s,name:c,form:l,autoComplete:u,disabled:d=!1,readOnly:f=!1,required:p=!1,modal:m=!0,actionsRef:h,inputRef:g,onOpenChangeComplete:_,items:v,multiple:y=!1,itemToStringLabel:b,itemToStringValue:x,isItemEqualToValue:S=qn,highlightItemOnHover:w=!0,children:E}=e,{clearErrors:D}=Me(),{setDirty:O,setTouched:k,setFocused:ee,validityData:te,setFilled:A,name:j,disabled:M,validation:N,validationMode:P}=we(),I=yt({id:t}),L=M||d,R=j??c,[z,B]=he({controlled:n,default:y?r??St:r,name:`Select`,state:`value`}),[V,ne]=he({controlled:a,default:o,name:`Select`,state:`open`}),re=J.useRef([]),ie=J.useRef([]),ae=J.useRef(null),oe=J.useRef(null),se=J.useRef(0),ce=J.useRef(null),le=J.useRef([]),ue=J.useRef(!1),de=J.useRef(null),fe=J.useRef(null),me=J.useRef({allowSelectedMouseUp:!1,allowUnselectedMouseUp:!1,dragY:0}),_e=J.useRef(!1),ve=J.useRef(z),{mounted:be,setMounted:xe,transitionStatus:Se}=F(V),{openMethod:Te,triggerProps:Ee}=Kt(V),H=rn(()=>new Re({id:I,labelId:void 0,modal:m,multiple:y,itemToStringLabel:b,itemToStringValue:x,isItemEqualToValue:S,value:z,open:V,mounted:be,transitionStatus:Se,items:v,forceMount:!1,openMethod:null,activeIndex:null,selectedIndex:null,popupProps:tt,triggerProps:tt,triggerElement:null,positionerElement:null,listElement:null,popupSide:null,scrollUpArrowVisible:!1,scrollDownArrowVisible:!1,hasScrollArrows:!1},{setValue:Lt,setOpen:Lt,handleScrollArrowVisibility:Lt,onOpenChangeComplete:Lt,listRef:re,popupRef:ae,scrollHandlerRef:oe,scrollArrowsMountedCountRef:se,valueRef:ce,valuesRef:le,labelsRef:ie,typingRef:ue,selectionRef:me,firstItemTextRef:de,selectedItemTextRef:fe,alignItemWithTriggerActiveRef:_e,initialValueRef:ve},or)).current,De=H.useState(`activeIndex`),Oe=H.useState(`selectedIndex`),ke=H.useState(`triggerElement`),Ae=H.useState(`positionerElement`),je=Ne(Te),Pe=Te??je,Fe=J.useMemo(()=>y?``:er(z,x),[y,z,x]),Ie=J.useMemo(()=>y&&Array.isArray(z)?z.map(e=>er(e,x)):er(z,x),[y,z,x]);pn(ft(ke),I,z,He(()=>Ie),!L,c);let Le=y?Array.isArray(z)&&z.length>0:z!=null&&Fe!==``;T(()=>{A(Le)},[Le,A]),T(function(){let e=Wn(le.current,z,S,y);e===null&&(fe.current=null),!V&&H.set(`selectedIndex`,e)},[y,V,z,S,H]),Pt(z,()=>{D(R),O(Bn(z,te.initialValue,S)),N.change(z)});let ze=He((e,t)=>{s?.(e,t),!t.isCanceled&&(ne(e),!e&&(t.reason===`focus-out`||t.reason===`outside-press`)&&(k(!0),ee(!1),P===`onBlur`&&N.commit(z)))}),Be=He(()=>{xe(!1),H.update({activeIndex:null,openMethod:null,scrollUpArrowVisible:!1,scrollDownArrowVisible:!1}),_?.(!1)});Wt({enabled:!h,open:V,ref:ae,onComplete(){V||Be()}}),J.useImperativeHandle(h,()=>({unmount:Be}),[Be]);let Ve=He((e,t)=>{i?.(e,t),!t.isCanceled&&B(e)}),We=He(e=>{let t=Yt(e.scrollHeight,e.clientHeight),n=Je(e.scrollTop,t),r=n>0,i=n<t;H.set(`scrollUpArrowVisible`,r),H.set(`scrollDownArrowVisible`,i)}),Ge=rt({open:V,onOpenChange:ze,elements:{reference:ke,floating:Ae}}),qe=pe(Ge,{enabled:!L,event:`mousedown`}),Xe=Ue(Ge),Ze=C(Ge,{enabled:!L,listRef:re,activeIndex:De,selectedIndex:Oe,disabledIndices:St,onNavigate(e){e===null&&!V||H.set(`activeIndex`,e)},focusItemOnHover:w}),Qe=Ye(Ge,{enabled:!L&&(V||!f&&!y),listRef:ie,activeIndex:De,selectedIndex:Oe,disabledIndices:e=>Ke(re.current[e]),onMatch(e){V?H.set(`activeIndex`,e):Ve(le.current[e],nt(Ot))},onTyping(e){ue.current=e}}),$e=J.useMemo(()=>dn(Qe.reference,Ze.reference,Xe.reference,qe.reference,Ee),[qe.reference,Qe.reference,Ze.reference,Xe.reference,Ee]),et=J.useMemo(()=>dn(Ft,Qe.floating,Ze.floating,Xe.floating),[Qe.floating,Ze.floating,Xe.floating]),it=Ze.item??tt;H.useContextCallback(`setValue`,Ve),H.useContextCallback(`setOpen`,ze),H.useContextCallback(`handleScrollArrowVisibility`,We),H.useContextCallback(`onOpenChangeComplete`,_),kn(()=>{H.update({popupProps:et,triggerProps:$e})}),H.useSyncedValues({id:I,modal:m,multiple:y,value:z,open:V,mounted:be,transitionStatus:Se,popupProps:et,triggerProps:$e,items:v,itemToStringLabel:b,itemToStringValue:x,isItemEqualToValue:S,openMethod:Pe});let U=J.useMemo(()=>({disabled:L,readOnly:f,required:p,multiple:y,highlightItemOnHover:w,itemProps:it}),[L,f,p,y,w,it]),at=Ce(g,N.inputRef),ot=y?void 0:R,st=J.useMemo(()=>!y||!Array.isArray(z)||!R?null:z.map(e=>{let t=er(e,x);return(0,lr.jsx)(`input`,{type:`hidden`,form:l,name:R,value:t,disabled:L},t)}),[y,z,l,R,x,L]);return(0,lr.jsxs)(In.Provider,{value:H,children:[(0,lr.jsx)(Ln.Provider,{value:U,children:(0,lr.jsx)(Rn.Provider,{value:Ge,children:E})}),(0,lr.jsx)(`input`,{...N.getValidationProps(L,{onFocus(){H.state.triggerElement?.focus({focusVisible:!0})},onChange(e){if(e.nativeEvent.defaultPrevented||L||f)return;let t=e.currentTarget.value,n=nt(Ot,e.nativeEvent);function r(){if(y)return;let e=t.toLowerCase(),r=le.current.findIndex(t=>er(t,x).toLowerCase()===e||$n(t,b).toLowerCase()===e);r===-1&&(r=le.current.findIndex((t,n)=>{let r=ie.current[n];return r!=null&&r.toLowerCase()===e}));let i=le.current[r];i!=null&&Ve(i,n)}H.set(`forceMount`,!0),queueMicrotask(r)}}),id:I&&ot==null?`${I}-hidden-input`:void 0,form:l,name:ot,autoComplete:u,value:Fe,disabled:L,required:p&&!(y&&Le),readOnly:f,ref:at,style:R?ye:ge,tabIndex:-1,"aria-hidden":!0,suppressHydrationWarning:!0}),st]})}var J,lr,ur=e((()=>{J=t(n(),1),wt(),M(),dt(),jn(),un(),le(),Ct(),Ee(),Ie(),D(),je(),Qt(),qt(),q(),P(),A(),xt(),z(),sr(),$t(),ct(),ht(),hn(),ar(),Jn(),Gt(),_t(),ue(),Bt(),Ae(),re(),lr=t(r(),1)})),dr,fr=e((()=>{Te(),dr=`data-popup-side`})),pr,mr,hr,gr,_r=e((()=>{pr=t(n(),1),_e(),fn(),D(),q(),P(),gn(),Te(),Et(),U(),Vt(),oe(),Ae(),Qe(),$t(),ct(),xt(),Cn(),fr(),mr=400,hr={...an,...ee,popupSide:e=>e?{[dr]:e}:null,value:()=>null},gr=pr.forwardRef(function(e,t){let{render:n,className:r,id:i,disabled:a=!1,nativeButton:o=!0,style:s,...c}=e,{setTouched:l,setFocused:u,validationMode:d,validation:f,state:p,disabled:m}=we(),{labelId:h}=at(),g=Mn(),{readOnly:_,required:v,disabled:y}=Nn(),b=m||y||a,x=g.useState(`open`),S=g.useState(`mounted`),C=g.useState(`value`),w=g.useState(`triggerProps`),T=g.useState(`positionerElement`),E=g.useState(`listElement`),D=g.useState(`popupSide`),O=g.useState(`id`),k=g.useState(`labelId`),ee=g.useState(`hasSelectedValue`),te=S&&T?D:null,A=i??O,j=wn(h,k);yt({id:i});let M=ft(T),N=pr.useRef(null),{getButtonProps:P,buttonRef:F}=ie({disabled:b,native:o}),I=g.useStateSetter(`triggerElement`),L=Pe(),R=Pe(),z=Pe();pr.useEffect(()=>{if(x)return z.start(mr,()=>{g.context.selectionRef.current.allowUnselectedMouseUp=!0,g.context.selectionRef.current.allowSelectedMouseUp=!0}),()=>{z.clear()};g.context.selectionRef.current={allowSelectedMouseUp:!1,allowUnselectedMouseUp:!1,dragY:0},R.clear()},[x,g,R,z]);let B=dn(w,{id:A,role:`combobox`,"aria-expanded":x,"aria-haspopup":`listbox`,"aria-controls":x?E?.id??qe(T)?.id:void 0,"aria-labelledby":j,"aria-readonly":_||void 0,"aria-required":v||void 0,tabIndex:b?-1:0,onFocus(e){u(!0),x&&g.context.alignItemWithTriggerActiveRef.current&&g.context.setOpen(!1,nt(Ot,e.nativeEvent)),L.start(0,()=>{g.set(`forceMount`,!0)})},onBlur(e){gt(T,e.relatedTarget)||(l(!0),u(!1),d===`onBlur`&&f.commit(C))},onMouseDown(e){if(x)return;let t=be(e.currentTarget);function n(e){if(!N.current)return;let t=e.target;gt(N.current,t)||gt(M.current,t)||nn(e,N.current)||g.context.setOpen(!1,nt(Mt,e))}R.start(0,()=>{t.addEventListener(`mouseup`,n,{once:!0})})}},c,P),V=f.getValidationProps(b,B);V.role=`combobox`;let ne={...p,open:x,disabled:b,value:C,readOnly:_,popupSide:te,placeholder:!ee};return G(`button`,e,{ref:[t,N,F,I],state:ne,stateAttributesMapping:hr,props:V})})})),vr,yr,br,xr=e((()=>{vr=t(n(),1),U(),q(),ar(),yr={value:()=>null},br=vr.forwardRef(function(e,t){let{className:n,render:r,children:i,placeholder:a,style:o,...s}=e,c=Mn(),l=c.useState(`value`),u=c.useState(`items`),d=c.useState(`itemToStringLabel`),f=c.useState(`hasSelectedValue`),p=!f&&a!=null&&i==null,m=c.useState(`hasNullItemLabel`,p),h={value:l,placeholder:!f},g=null;return g=typeof i==`function`?i(l):i??(p&&!m?a:Array.isArray(l)?nr(l,u,d):tr(l,u,d)),G(`span`,e,{state:h,ref:[t,c.context.valueRef],props:[{children:g},s],stateAttributesMapping:yr})})})),Sr,Cr,wr=e((()=>{Sr=t(n(),1),U(),q(),Te(),Cr=Sr.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e;return G(`span`,e,{state:{open:Mn().useState(`open`)},ref:t,props:[{"aria-hidden":!0,children:`▼`},a],stateAttributesMapping:It})})})),Tr,Er,Dr,Or=e((()=>{Tr=t(n(),1),qt(),q(),Er=t(r(),1),Dr=Tr.forwardRef(function(e,t){let n=Mn(),r=n.useState(`mounted`),i=n.useState(`forceMount`);return r||i?(0,Er.jsx)(Zt,{ref:t,...e}):null})})),kr=e((()=>{n(),q(),Te(),zt(),U(),{...w,...tn}}));function Ar(){let e=jr.useContext(Mr);if(!e)throw Error(We(59));return e}var jr,Mr,Nr=e((()=>{Xe(),jr=t(n(),1),Mr=jr.createContext(void 0)}));function Pr(e,t){e&&Object.assign(e.style,t)}var Fr,Ir=e((()=>{Fr={position:`relative`,maxHeight:`100%`,overflowX:`hidden`,overflowY:`auto`}})),Lr,Rr,zr,Br,Vr=e((()=>{Lr=t(n(),1),$e(),Ee(),Ie(),q(),O(),Fe(),Nr(),ot(),ut(),Ir(),$t(),ct(),Jn(),De(),et(),Rr=t(r(),1),zr={position:`fixed`},Br=Lr.forwardRef(function(e,t){let{anchor:n,className:r,render:i,positionMethod:a,side:o,align:s,sideOffset:c,alignOffset:l,collisionBoundary:u=`clipping-ancestors`,collisionPadding:d,arrowPadding:f,sticky:p,disableAnchorTracking:m,alignItemWithTrigger:h=!0,collisionAvoidance:g=Nt,style:_,...v}=e,y=Mn(),b=Pn(),x=y.useState(`open`),S=y.useState(`mounted`),C=y.useState(`modal`),w=y.useState(`value`),E=y.useState(`openMethod`),D=y.useState(`positionerElement`),O=y.useState(`triggerElement`),k=y.useState(`isItemEqualToValue`),ee=y.useState(`transitionStatus`),te=Lr.useRef(null),A=Lr.useRef(null),[j,M]=Lr.useState(h),N=S&&j&&E!==`touch`;!S&&j!==h&&M(h),Lr.useImperativeHandle(y.context.alignItemWithTriggerActiveRef,()=>N),ln((N||C)&&x,E===`touch`,D,O);let P=Be({anchor:n,floatingRootContext:b,positionMethod:a,mounted:S,side:o,sideOffset:c,align:s,alignOffset:l,arrowPadding:f,collisionBoundary:u,collisionPadding:d,sticky:p,disableAnchorTracking:m??N,collisionAvoidance:g,keepMounted:!0}),F=N?`none`:P.side,I=N?zr:P.positionerStyles,L={open:x,side:F,align:P.align,anchorHidden:P.anchorHidden};T(()=>{y.set(`popupSide`,P.side)},[y,P.side]);let R=vn(e,L,{styles:I,transitionStatus:ee,props:v,refs:[t,y.useStateSetter(`positionerElement`)],hidden:!S,inert:!x}),z=Lr.useRef(0),B=He(e=>{if(y.context.valuesRef.current.length===0)return;let t=z.current;z.current=e.size;let n=nt(Ot);if(t!==0&&!y.state.multiple&&w!==null&&Hn(y.context.valuesRef.current,w,k)===-1){let e=y.context.initialValueRef.current,t=e!=null&&Hn(y.context.valuesRef.current,e,k)!==-1?e:null;y.context.setValue(t,n),t===null&&(y.set(`selectedIndex`,null),y.context.selectedItemTextRef.current=null)}if(t!==0&&y.state.multiple&&Array.isArray(w)){let e=w.filter(e=>Hn(y.context.valuesRef.current,e,k)!==-1);e.length!==w.length&&(y.context.setValue(e,n),e.length===0&&(y.set(`selectedIndex`,null),y.context.selectedItemTextRef.current=null))}if(x&&N){y.update({scrollUpArrowVisible:!1,scrollDownArrowVisible:!1});let e={height:``};Pr(D,e),Pr(y.context.popupRef.current,e)}}),V=Lr.useMemo(()=>({...P,side:F,alignItemWithTriggerActive:N,setControlledAlignItemWithTrigger:M,scrollUpArrowRef:te,scrollDownArrowRef:A}),[P,F,N,M]);return(0,Rr.jsx)(Dt,{elementsRef:y.context.listRef,labelsRef:y.context.labelsRef,onMapChange:B,children:(0,Rr.jsxs)(Mr.Provider,{value:V,children:[S&&C&&(0,Rr.jsx)(_n,{inert:vt(!x),cutout:O}),R]})})})})),Hr,Ur=e((()=>{Hr=`--transform-origin`}));function Wr(e){let t=e.maxHeight;return t.endsWith(`px`)&&parseFloat(t)||1/0}function Gr(e){return Yt(e.scrollHeight,e.clientHeight)}function Kr(e){return ze.getScale(e)}function qr(e,t,n){return e/n[t]}function Jr(e,t){return ne({x:qr(e.x,`x`,t),y:qr(e.y,`y`,t),width:qr(e.width,`x`,t),height:qr(e.height,`y`,t)})}function Yr(e){let{style:t}=e,n={};for(let[e,r]of ei)n[e]=t.getPropertyValue(e),t.setProperty(e,r,`important`);return()=>{for(let[e]of ei){let r=n[e];r?t.setProperty(e,r):t.removeProperty(e)}}}var Xr,Zr,Qr,$r,ei,ti=e((()=>{Xr=t(n(),1),Ve(),Tt(),bt(),Ie(),_e(),Ee(),R(),en(),qt(),q(),Te(),Nr(),H(),zt(),ht(),U(),Ir(),$t(),ct(),ke(),B(),Le(),ue(),Ge(),V(),Ur(),Zr=t(r(),1),Qr={...w,...tn},$r=Xr.forwardRef(function(e,t){let{render:n,className:r,style:i,finalFocus:a,...o}=e,s=Mn(),{multiple:c,readOnly:l,highlightItemOnHover:u}=Nn(),d=Pn(),{side:f,align:p,alignItemWithTriggerActive:m,isPositioned:h,setControlledAlignItemWithTrigger:g}=Ar(),_=bn(!0)!=null,v=de(),{nonce:y,disableStyleElements:b}=Ze(),x=s.useState(`id`),S=s.useState(`open`),C=s.useState(`openMethod`),w=s.useState(`mounted`),D=s.useState(`popupProps`),O=s.useState(`transitionStatus`),ee=s.useState(`triggerElement`),A=s.useState(`positionerElement`),j=s.useState(`listElement`),M=Xr.useRef(!1),P=Xr.useRef(!1),F=Xr.useRef({}),I=N(),L=He(e=>{if(!A||!s.context.popupRef.current||!P.current)return;let t=A.style.top===`0px`,n=A.style.bottom===`0px`;if(M.current||!m||!t&&!n){s.context.handleScrollArrowVisibility(e);return}let r=Kr(A),i=qr(A.getBoundingClientRect().height,`y`,r),a=be(A),o=se(A),c=o.getComputedStyle(A),l=parseFloat(c.marginTop),u=parseFloat(c.marginBottom),d=Wr(o.getComputedStyle(s.context.popupRef.current)),f=Math.min(a.documentElement.clientHeight-l-u,d),p=e.scrollTop,h=Gr(e),g=null,_=e=>{A.style.height=`${e}px`},v=t?h-p:p,y=Math.min(i+v,f);if(v<=1){let n=Rt(v,0,f-i);n>0&&_(i+n),e.scrollTop=t?h:0,f-(i+n)<=1&&(M.current=!0),s.context.handleScrollArrowVisibility(e);return}f-y>1?g=t?1/0:0:n&&p<h&&(g=p-(v-(i+v-f)));let b=Math.ceil(y);if(b!==0&&_(b),g!=null){let t=Rt(g,0,Gr(e));Math.abs(e.scrollTop-t)>1&&(e.scrollTop=t)}b>=f-1&&(M.current=!0),s.context.handleScrollArrowVisibility(e)});Xr.useImperativeHandle(s.context.scrollHandlerRef,()=>L,[L]),Wt({open:S,ref:s.context.popupRef,onComplete(){S&&s.context.onOpenChangeComplete(!0)}});let R={open:S,transitionStatus:O,side:f,align:p};T(()=>{!A||!s.context.popupRef.current||Object.keys(F.current).length||(F.current={top:A.style.top||`0`,left:A.style.left||`0`,right:A.style.right,height:A.style.height,bottom:A.style.bottom,minHeight:A.style.minHeight,maxHeight:A.style.maxHeight,marginTop:A.style.marginTop,marginBottom:A.style.marginBottom})},[s,A]),T(()=>{S||m||(P.current=!1,M.current=!1,Pr(A,F.current))},[S,m,A]),T(()=>{let e=s.context.popupRef.current;if(!S||!ee||!A||!e||m&&!h||s.state.transitionStatus===`ending`)return;if(P.current=!0,e.style.removeProperty(Hr),!m){I.request(()=>s.context.handleScrollArrowVisibility(j||e));return}let t=Yr(e);try{let t=s.context.selectedItemTextRef.current;t?.isConnected||(t=!s.select(`hasSelectedValue`)&&s.context.firstItemTextRef.current?.isConnected?s.context.firstItemTextRef.current:null);let n=s.context.valueRef.current,r=se(A),i=r.getComputedStyle(A),a=r.getComputedStyle(e),o=be(ee),c=Kr(ee),l=Jr(ee.getBoundingClientRect(),c),d=Jr(A.getBoundingClientRect(),c),f=l.height,p=j||e,m=p.scrollHeight,h=parseFloat(a.borderBottomWidth),_=parseFloat(i.marginTop)||10,y=parseFloat(i.marginBottom)||10,b=parseFloat(i.minHeight)||100,x=Wr(a),S=o.documentElement.clientHeight-_-y,C=o.documentElement.clientWidth,w=S-l.bottom+f,T,E=v===`rtl`?l.right-d.width:l.left,D=0;if(t&&n){let e=Jr(n.getBoundingClientRect(),c);T=Jr(t.getBoundingClientRect(),c),E=d.left+(v===`rtl`?e.right-T.right:e.left-T.left);let r=e.top-l.top+e.height/2;D=T.top-d.top+T.height/2-r}let O=w+D+y+h,k=Math.min(S,O),te=S-_-y,N=O-k,P=C-5;A.style.left=`${Rt(E,5,P-d.width)}px`,A.style.height=`${k}px`,A.style.maxHeight=`none`,A.style.marginTop=`${_}px`,A.style.marginBottom=`${y}px`,e.style.height=`100%`;let I=Gr(p),L=N>=I-1;L&&(k=Math.min(S,d.height)-(N-I));let R=l.top<20||l.bottom>S-20||Math.ceil(k)+1<Math.min(m,b),z=(r.visualViewport?.scale??1)!==1&&cn;if(R||z){Pr(A,F.current),g(!1);return}let B=Math.max(b,k);if(L){let e=Math.max(0,S-O);A.style.top=d.height>=te?`0`:`${e}px`,A.style.height=`${k}px`,p.scrollTop=Gr(p)}else A.style.bottom=`0`,p.scrollTop=N;if(T){let t=d.top,n=d.height,r=T.top+T.height/2,i=Rt(n>0?(r-t)/n*100:50,0,100);e.style.setProperty(Hr,`50% ${i}%`)}(B===S||k>=x)&&(M.current=!0),s.context.handleScrollArrowVisibility(p),u&&s.state.selectedIndex===null&&s.state.activeIndex===null&&s.context.listRef.current[0]!=null&&s.set(`activeIndex`,0)}finally{t()}},[s,S,A,ee,m,g,I,j,u,v,h]),Xr.useEffect(()=>{if(!m||!A||!S)return;let e=se(A);function t(e){s.context.setOpen(!1,nt(ae,e))}return k(e,`resize`,t)},[s,m,A,S]);let z={...j?{role:`presentation`}:{role:`listbox`,"aria-multiselectable":c||void 0,"aria-readonly":l||void 0,id:`${x}-list`},onKeyDown(e){_&&kt.has(e.key)&&e.stopPropagation()},onScroll(e){j||L(e.currentTarget)},...m&&{style:j?{height:`100%`}:Fr},className:!j&&m?E.className:void 0},B=G(`div`,e,{ref:[t,s.context.popupRef],state:R,stateAttributesMapping:Qr,props:[D,z,te(O),o]});return(0,Zr.jsxs)(Xr.Fragment,{children:[!b&&E.getElement(y),(0,Zr.jsx)(Xt,{context:d,modal:!1,disabled:!w,openInteractionType:C,returnFocus:a,restoreFocus:!0,children:B})]})}),ei=[[`transform`,`none`],[`scale`,`1`],[`translate`,`0 0`]]})),ni,ri,ii=e((()=>{ni=t(n(),1),q(),Nr(),U(),H(),Ir(),ri=ni.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o=Mn(),{multiple:s,readOnly:c}=Nn(),{alignItemWithTriggerActive:l}=Ar(),u=o.useState(`hasScrollArrows`),d=o.useState(`openMethod`),f={id:`${o.useState(`id`)}-list`,role:`listbox`,"aria-multiselectable":s||void 0,"aria-readonly":c||void 0,onScroll(e){o.context.scrollHandlerRef.current?.(e.currentTarget)},...l&&{style:Fr},className:u&&d!==`touch`?E.className:void 0};return G(`div`,e,{ref:[t,o.useStateSetter(`listElement`)],props:[f,a]})})}));function ai(){let e=oi.useContext(si);if(!e)throw Error(We(57));return e}var oi,si,ci=e((()=>{Xe(),oi=t(n(),1),si=oi.createContext(void 0)})),li,ui,di,fi=e((()=>{li=t(n(),1),Ee(),q(),it(),U(),ci(),Qe(),$t(),ct(),Jn(),fe(),ui=t(r(),1),di=li.memo(li.forwardRef(function(e,t){let{render:n,className:r,style:i,value:a=null,label:o,disabled:s=!1,nativeButton:c=!1,...l}=e,u=li.useRef(null),d=mn({guess:!0,label:o,textRef:u}),f=Mn(),{itemProps:p,multiple:m,disabled:h,readOnly:g}=Nn(),_=h||s,v=f.useState(`isActive`,d.index),y=f.useState(`open`),b=f.useState(`isSelected`,a),x=f.useState(`isSelectedByFocus`,d.index),S=f.useState(`isItemEqualToValue`),C=d.index,w=li.useRef(null);T(()=>{let e=f.context.valuesRef.current;return e[C]=a,()=>{delete e[C]}},[C,a,f]),T(()=>{let e=f.state.value,t=f.state.selectedIndex,n=t,r;m&&Array.isArray(e)?(n=Gn(C,a,f.context.valuesRef.current,e,S,t),r=n===C,C===t&&!r&&(f.context.selectedItemTextRef.current=null)):(r=e!==void 0&&zn(a,e,S),r&&(n=C)),f.set(`selectedIndex`,n),r&&u.current&&(f.context.selectedItemTextRef.current=u.current)},[C,m,S,f,a]);let E=li.useRef(`mouse`),D=li.useRef(!1),{getButtonProps:O,buttonRef:k}=ie({disabled:_,focusableWhenDisabled:!0,native:c,composite:!0}),ee={disabled:_,selected:b,highlighted:v};function te(e){if(h||g)return;let t=f.state.value;if(m){let n=Array.isArray(t)?t:[],r=b?Kn(n,a,S):[...n,a];f.context.setValue(r,nt(L,e))}else f.context.setValue(a,nt(L,e)),f.context.setOpen(!1,nt(L,e))}function A(){f.context.selectionRef.current.dragY=0}let j={role:`option`,"aria-selected":b,tabIndex:y&&v?0:-1,onKeyDown(e){f.set(`activeIndex`,C),e.key===` `&&f.context.typingRef.current&&e.preventDefault()},onClick(e){let t=E.current!==`touch`,n=e.nativeEvent.pointerType,r=t&&Jt(e.nativeEvent)&&(n!==void 0||v),i=t&&!r&&!D.current;D.current=!1,!(_||i)&&te(e.nativeEvent)},onPointerEnter(e){E.current=e.pointerType},onPointerMove(e){if(e.pointerType===`mouse`&&e.buttons===1){let t=f.context.selectionRef.current;t.dragY+=e.movementY,t.dragY**2>=64&&(t.allowUnselectedMouseUp=!0)}},onPointerDown(e){E.current=e.pointerType,D.current=!0,A()},onMouseUp(){if(A(),_||E.current===`touch`||D.current)return;let e=!f.context.selectionRef.current.allowSelectedMouseUp&&b,t=!f.context.selectionRef.current.allowUnselectedMouseUp&&!b;e||t||(D.current=!0,w.current?.click(),D.current=!1)}},M=G(`div`,e,{ref:[k,t,d.ref,w],state:ee,props:[p,j,l,O]}),N=li.useMemo(()=>({selected:b,index:C,textRef:u,selectedByFocus:x}),[b,C,u,x]);return(0,ui.jsx)(si.Provider,{value:N,children:M})}))})),pi,mi,hi,gi,_i=e((()=>{pi=t(n(),1),ci(),z(),ht(),U(),zt(),mi=t(r(),1),hi=pi.forwardRef(function(e,t){let{selected:n}=ai();return e.keepMounted||n?(0,mi.jsx)(gi,{...e,ref:t}):null}),gi=pi.memo(pi.forwardRef((e,t)=>{let{render:n,className:r,style:i,keepMounted:a,...o}=e,{selected:s}=ai(),c=pi.useRef(null),{transitionStatus:l,setMounted:u}=F(s),d=G(`span`,e,{ref:[t,c],state:{selected:s,transitionStatus:l},props:[{"aria-hidden":!0,children:`✔️`},o],stateAttributesMapping:tn});return Wt({batch:!0,enabled:!s,open:s,ref:c,onComplete(){s||u(!1)}}),d}))})),vi,yi,bi=e((()=>{vi=t(n(),1),q(),ci(),U(),yi=vi.memo(vi.forwardRef(function(e,t){let{index:n,textRef:r,selectedByFocus:i}=ai(),a=Mn(),{render:o,className:s,style:c,...l}=e;return G(`div`,e,{ref:[vi.useCallback(e=>{e&&(n===0&&(a.context.firstItemTextRef.current=e),i&&(a.context.selectedItemTextRef.current=e))},[a,n,i]),t,r],props:l})}))})),xi,Si,Ci=e((()=>{xi=t(n(),1),Nr(),q(),Te(),U(),Si=xi.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o=Mn(),{side:s,align:c,arrowRef:l,arrowStyles:u,arrowUncentered:d,alignItemWithTriggerActive:f}=Ar(),p=G(`div`,e,{state:{open:o.useState(`open`),side:s,align:c,uncentered:d},ref:[l,t],props:[{style:u,"aria-hidden":!0},a],stateAttributesMapping:pt});return f?null:p})}));function wi(e,t,n,r,i,a){if(t){let t=0,r=n+i-1;for(let n=0;n<e.length;n+=1){let i=e[n];if(i&&i.offsetTop>=r){t=n;break}}let o=Math.max(0,t-1),s=e[o];return o<t&&s?Je(s.offsetTop-i,a):0}let o=e.length-1,s=n+r-i+1;for(let t=0;t<e.length;t+=1){let n=e[t];if(n&&n.offsetTop+n.offsetHeight>s){o=Math.max(0,t-1);break}}let c=Math.min(e.length-1,o+1),l=e[c];return c>o&&l?Je(l.offsetTop+l.offsetHeight-r+i,a):a}var Ti,Ei,Di=e((()=>{Ti=t(n(),1),fn(),Ee(),q(),Nr(),z(),ht(),U(),zt(),ue(),Ei=Ti.forwardRef(function(e,t){let{render:n,className:r,style:i,direction:a,keepMounted:o,...s}=e,c=a===`up`,l=Mn(),{side:u,scrollDownArrowRef:d,scrollUpArrowRef:f}=Ar(),p=c?`scrollUpArrowVisible`:`scrollDownArrowVisible`,m=l.useState(p),h=l.useState(`openMethod`),g=m&&h!==`touch`,_=Pe(),v=c?f:d,{mounted:y,transitionStatus:b,setMounted:x}=F(g);T(()=>(l.context.scrollArrowsMountedCountRef.current+=1,l.set(`hasScrollArrows`,!0),()=>{l.context.scrollArrowsMountedCountRef.current=Math.max(0,l.context.scrollArrowsMountedCountRef.current-1),l.context.scrollArrowsMountedCountRef.current===0&&l.set(`hasScrollArrows`,!1)}),[l]),Wt({open:g,ref:v,onComplete(){g||x(!1)}});let S=G(`div`,e,{ref:[t,v],state:{direction:a,visible:g,side:u,transitionStatus:b},props:[{"aria-hidden":!0,children:c?`▲`:`▼`,style:{position:`absolute`},onMouseMove(e){if(e.movementX===0&&e.movementY===0||_.isStarted())return;l.set(`activeIndex`,null);function t(){let e=l.state.listElement??l.context.popupRef.current;if(!e)return;l.set(`activeIndex`,null),l.context.handleScrollArrowVisibility(e);let n=Yt(e.scrollHeight,e.clientHeight),r=Je(e.scrollTop,n),i=r===(c?0:n),a=l.context.listRef.current;if(r!==e.scrollTop&&(e.scrollTop=r),i){_.clear();return}if(a.length>0){let t=v.current?.offsetHeight||0;e.scrollTop=wi(a,c,r,e.clientHeight,t,n)}_.start(40,t)}_.start(40,t)},onMouseLeave(){_.clear()}},s],stateAttributesMapping:tn});return y||o?S:null})})),Oi,ki,Ai,ji=e((()=>{Oi=t(n(),1),Di(),ki=t(r(),1),Ai=Oi.forwardRef(function(e,t){return(0,ki.jsx)(Ei,{...e,ref:t,direction:`down`})})})),Mi,Ni,Pi,Fi=e((()=>{Mi=t(n(),1),Di(),Ni=t(r(),1),Pi=Mi.forwardRef(function(e,t){return(0,Ni.jsx)(Ei,{...e,ref:t,direction:`up`})})}));function Ii(){let e=Li.useContext(Ri);if(e===void 0)throw Error(We(56));return e}var Li,Ri,zi=e((()=>{Xe(),Li=t(n(),1),Ri=Li.createContext(void 0)})),Bi,Vi,Hi,Ui=e((()=>{Bi=t(n(),1),zi(),U(),Vi=t(r(),1),Hi=Bi.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,[o,s]=Bi.useState(),c=Bi.useMemo(()=>({labelId:o,setLabelId:s}),[o,s]),l=G(`div`,e,{ref:t,props:[{role:`group`,"aria-labelledby":o},a]});return(0,Vi.jsx)(Ri.Provider,{value:c,children:l})})})),Wi,Gi,Ki=e((()=>{Wi=t(n(),1),Ee(),j(),zi(),U(),Gi=Wi.forwardRef(function(e,t){let{render:n,className:r,style:i,id:a,...o}=e,{setLabelId:s}=Ii(),c=Se(a);return T(()=>(s(c),()=>{s(e=>e===c?void 0:e)}),[c,s]),G(`div`,e,{ref:t,props:[{id:c,"aria-hidden":!0},o]})})})),qi=e((()=>{n(),U()})),Ji=e((()=>{qi()})),Yi=e((()=>{ur(),q(),_r(),xr(),wr(),Or(),kr(),Vr(),ti(),ii(),fi(),_i(),bi(),Ci(),ji(),Fi(),Ui(),Ki(),Ji()})),Xi=e((()=>{Yi()})),Zi,Y,X,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa,pa=e((()=>{a(),on(),p(),l(),ve(),On(),Zi=t(n(),1),Y=t(r(),1),sn(),Ae(),lt(),Xi(),X=(e,t)=>typeof t==`function`?n=>W(e,t(n)):W(e,t),Qi=({children:e,className:t,nativeButton:n,shadow:r,size:i=`middle`,variant:a,ref:o,...s})=>{let{isDarkMode:c}=I(),l=Dn({shadow:r,size:i,variant:a??(c?`filled`:`outlined`)}),{isNativeButtonTriggerElement:u,resolvedNativeButton:d}=h({children:e,nativeButton:n});return(0,Zi.isValidElement)(e)?(0,Y.jsx)(gr,{...s,nativeButton:d,render:(n,r)=>{let i=(()=>{if(u)return n;let{type:e,ref:t,...r}=n;return r})(),a=dn(e.props,i),s=typeof a.className==`function`?a.className(r):a.className,c=typeof t==`function`?t(r):t;return(0,Zi.cloneElement)(e,{...a,className:W(l,s,c),ref:mt([e.ref,n.ref,o])})}}):(0,Y.jsx)(gr,{...s,className:X(l,t),nativeButton:d,ref:o,children:e})},Qi.displayName=`SelectTrigger`,$i=({className:e,...t})=>(0,Y.jsx)(Cr,{className:X(K.icon,e),...t}),$i.displayName=`SelectIcon`,ea=({className:e,...t})=>(0,Y.jsx)(br,{className:X(K.value,e),...t}),ea.displayName=`SelectValue`,ta=({container:e,...t})=>{let n=m();return(0,Y.jsx)(Dr,{container:e??n??void 0,...t})},ta.displayName=`SelectPortal`,na=({align:e,alignItemWithTrigger:t,className:n,collisionPadding:r,side:a,sideOffset:o,style:s,ref:c,...l})=>{let{zIndex:u,ref:d}=i(`floating`,typeof s!=`function`&&s?.zIndex!=null&&typeof s.zIndex==`number`?s.zIndex:void 0),f=Ht([c,d]),p=typeof s==`function`?e=>({zIndex:u,...s(e)}):{zIndex:u,...s};return(0,Y.jsx)(Br,{align:e??`start`,alignItemWithTrigger:t??!1,className:X(K.positioner,n),collisionPadding:r??At(),ref:f,side:a??`bottom`,sideOffset:o??6,style:p,...l})},na.displayName=`SelectPositioner`,ra=({className:e,...t})=>(0,Y.jsx)($r,{className:X(W(xe.popup,K.popup),e),...t}),ra.displayName=`SelectPopup`,ia=({className:e,...t})=>(0,Y.jsx)(ri,{className:X(K.list,e),...t}),ia.displayName=`SelectList`,aa=({className:e,...t})=>(0,Y.jsx)(di,{className:X(W(xe.item,K.item),e),...t}),aa.displayName=`SelectItem`,oa=({className:e,...t})=>(0,Y.jsx)(yi,{className:X(W(xe.label,K.itemText),e),...t}),oa.displayName=`SelectItemText`,sa=({className:e,...t})=>(0,Y.jsx)(hi,{className:X(K.itemIndicator,e),...t}),sa.displayName=`SelectItemIndicator`,ca=({className:e,...t})=>(0,Y.jsx)(Hi,{className:X(K.group,e),...t}),ca.displayName=`SelectGroup`,la=({className:e,...t})=>(0,Y.jsx)(Gi,{className:X(W(xe.groupLabel,K.groupLabel),e),...t}),la.displayName=`SelectGroupLabel`,ua=({className:e,...t})=>(0,Y.jsx)(Pi,{className:X(K.scrollArrow,e),...t}),ua.displayName=`SelectScrollUpArrow`,da=({className:e,...t})=>(0,Y.jsx)(Ai,{className:X(K.scrollArrow,e),...t}),da.displayName=`SelectScrollDownArrow`,fa=({className:e,...t})=>(0,Y.jsx)(Si,{className:X(K.arrow,e),...t}),fa.displayName=`SelectArrow`})),ma,ha,ga,_a,va,ya,ba,xa=e((()=>{ma=e=>!!e.options,ha=e=>typeof e.label==`string`||typeof e.label==`number`?String(e.label):e.title?e.title:typeof e.value==`string`||typeof e.value==`number`?String(e.value):``,ga=e=>e.replaceAll(/[$()*+.?[\\\]^{|}]/g,`\\$&`),_a=(e,t)=>{if(!t||t.length===0)return[e];let n=t.map(ga).join(`|`);return e.split(new RegExp(n,`g`))},va=e=>e.reduce((e,t)=>ma(t)?e+t.options.length+1:e+1,0),ya=e=>e==null||e===``,ba=e=>t=>e?Array.isArray(t)?t:t==null?[]:[t]:Array.isArray(t)?t[0]??null:t===void 0?null:t}));function Sa({defaultValue:e,extraOptions:t,isMultiple:n,onChange:r,onSelect:i,options:a,setExtraOptions:o,value:s}){let[c,l]=(0,Z.useState)(()=>e===void 0?n?[]:null:e),u=(0,Z.useMemo)(()=>ba(n),[n]),d=s===void 0?c:s,f=(0,Z.useMemo)(()=>u(d),[d,u]),p=(0,Z.useMemo)(()=>n?f:ya(f)?[]:[f],[n,f]),{optionMap:m,resolvedOptions:h}=(0,Z.useMemo)(()=>{let e=a??[],n=new Map,r=e=>{n.has(e.value)||n.set(e.value,e)};e.forEach(e=>{ma(e)?e.options.forEach(r):r(e)});let i=t.filter(e=>!n.has(e.value));i.forEach(r);let o=[...e,...i],s=p.filter(e=>!n.has(e)).map(e=>({label:String(e),value:e}));return s.forEach(r),{optionMap:n,resolvedOptions:s.length?[...o,...s]:o}},[t,a,p]),g=(0,Z.useCallback)(e=>m.get(e)||(e&&typeof e==`object`&&`label`in e?{label:e.label,value:e}:{label:String(e),value:e}),[m]),_=(0,Z.useRef)(f);(0,Z.useEffect)(()=>{_.current=f},[f]);let v=(0,Z.useCallback)(e=>{let t=u(e),a=_.current;if(n){let e=Array.isArray(a)?a:[],n=Array.isArray(t)?t:[];n.filter(t=>!e.some(e=>Object.is(e,t))).forEach(e=>i?.(e,g(e))),s===void 0&&l(n),r?.(n,n.map(e=>g(e)))}else !ya(t)&&!Object.is(a,t)&&i?.(t,g(t)),s===void 0&&l(t),r?.(ya(t)?void 0:t,ya(t)?void 0:g(t));_.current=t},[g,n,u,r,i,s]);return{appendTagValues:(0,Z.useCallback)(e=>{let t=e.map(e=>e.trim()).filter(Boolean);if(!t.length)return;let n=[...Array.isArray(_.current)?_.current:p],r=t.filter(e=>!m.has(e));r.length>0&&o(e=>{let t=new Set(e.map(e=>e.value)),n=[...e];return r.forEach(e=>{t.has(e)||n.push({label:e,value:e})}),n}),t.forEach(e=>{n.some(t=>Object.is(t,e))||n.push(e)}),n.length!==p.length&&v(n)},[v,m,o,p]),getOption:g,handleValueChange:v,normalizedValue:f,normalizeValue:u,optionMap:m,resolvedOptions:h,removeLastTagValue:(0,Z.useCallback)(()=>{let e=Array.isArray(_.current)?_.current:p;e.length>0&&v(e.slice(0,-1))},[v,p]),valueArray:p}}function Ca({defaultOpen:e,onOpenChange:t,open:n}){let[r,i]=(0,Z.useState)(!!e);(0,Z.useEffect)(()=>{n!==void 0&&i(n)},[n]);let a=n??r;return{handleOpenChange:(0,Z.useCallback)((e,r)=>{t?.(e,r),n===void 0&&i(e)},[t,n]),mergedOpen:a}}function wa({appendTagValues:e,handleOpenChange:t,mergedOpen:n,mode:r,removeLastTagValue:i,resolvedOptions:a,showSearch:o,tokenSeparators:s}){let[c,l]=(0,Z.useState)(``),u=!!(o||r===`tags`);(0,Z.useEffect)(()=>{n||l(``)},[n]);let d=(0,Z.useCallback)(t=>{let n=t.target.value;if(r===`tags`){let t=_a(n,s);if(t.length>1){let n=t.pop()??``;e(t.filter(Boolean)),l(n);return}}l(n)},[e,r,s]),f=(0,Z.useCallback)(n=>{if(n.stopPropagation(),n.key===`Escape`){t(!1);return}if(r!==`tags`)return;if(n.key===`Backspace`&&!c){n.preventDefault(),i();return}let a=s?.includes(n.key);(n.key===`Enter`||a)&&(n.preventDefault(),n.stopPropagation(),e([c]),l(``))},[e,t,r,i,c,s]),p=(0,Z.useCallback)(e=>{e.stopPropagation()},[]);return{filteredOptions:(0,Z.useMemo)(()=>{if(!u||!c.trim())return a;let e=c.trim().toLowerCase();return a.map(t=>{if(ma(t)){let n=t.options.filter(t=>ha(t).toLowerCase().includes(e));return n.length?{...t,options:n}:null}return ha(t).toLowerCase().includes(e)?t:null}).filter(Boolean)},[a,c,u]),handleSearchChange:d,handleSearchKeyDown:f,searchValue:c,shouldShowSearch:u,stopSearchPropagation:p}}function Ta({filteredOptions:e,listItemHeight:t,size:n,valueArray:r,virtual:i}){let a=(0,Z.useMemo)(()=>{if(!i)return;let r=va(e);return{height:`min(${Math.min(Math.max(r,1),6)*(t??(n===`large`?40:n===`small`?28:32))+8}px, var(--lobe-select-available-height, var(--available-height)))`}},[e,t,n,i]);return{selectedIndices:(0,Z.useMemo)(()=>{if(!i||r.length===0)return;let t=new Set(r),n=[],a=0;return e.forEach(e=>{if(ma(e)){e.options.some(e=>t.has(e.value))&&n.push(a),a+=1;return}t.has(e.value)&&n.push(a),a+=1}),n.length?n:void 0},[e,r,i]),virtualListStyle:a}}function Ea(){let e=m();return(0,Z.useMemo)(()=>{if(typeof window>`u`)return e;if(e instanceof HTMLElement)return window.getComputedStyle(e).display===`contents`?document.body:e},[e])}var Z,Da=e((()=>{p(),xa(),Z=t(n(),1)}));function Oa(e){return e==null?null:(0,Fa.isValidElement)(e)||typeof e==`string`||typeof e==`number`?e:(0,Q.jsx)(d,{icon:e,size:`small`})}function ka(e,t,n){return n?(0,Q.jsx)(d,{spin:!0,icon:S,size:`small`}):e===null?null:(0,Fa.isValidElement)(e)||typeof e==`string`||typeof e==`number`?e:(0,Q.jsx)(d,{icon:e||y,size:`small`,...t,style:{pointerEvents:`none`,...t?.style}})}function Aa({getOption:e,isMultiple:t,isTags:n,labelRender:r,normalizeValue:i,onRemoveValue:a,placeholder:o}){return function(s){let c=i(s),l=o===void 0?null:(0,Q.jsx)(`span`,{className:K.valueText,children:o});if(t){let t=Array.isArray(c)?c:[];return t.length===0?l:(0,Q.jsx)(`span`,{className:K.tags,children:t.map((t,i)=>{let o=e(t),s=r?r(o):o.label??String(t);return(0,Q.jsxs)(`span`,{className:K.tag,"data-role":`lobe-select-tag`,children:[s,n&&(0,Q.jsx)(`span`,{"aria-label":`Remove ${String(t)}`,className:K.tagClose,"data-role":`lobe-select-tag-remove`,role:`button`,tabIndex:0,onClick:e=>{e.preventDefault(),e.stopPropagation(),a(i)},onPointerDown:e=>{e.preventDefault(),e.stopPropagation()},children:(0,Q.jsx)(v,{size:12})})]},`${String(t)}-${i}`)})})}if(ya(c))return l;let u=e(c),d=r?r(u):u.label??String(c);return(0,Q.jsx)(`span`,{className:K.valueText,children:d})}}function ja({classNames:e,hasSearch:t,isEmpty:n,listContent:r,listItemHeight:i,virtual:a,virtualState:o}){let s=W(K.list,t&&K.listWithSearch,e?.list),c=!!a&&!n,{keepMountedIndices:l,viewportProps:u,viewportRef:d,virtualChildren:f,virtualizerRef:p}=me({children:r,enabled:c,keepMounted:o.selectedIndices});return c?(0,Q.jsx)(Oe,{itemSize:i,keepMounted:l,style:o.virtualListStyle,viewport:(0,Q.jsx)(ri,{className:s}),viewportProps:{ref:d,...u},virtualizerRef:p,children:f}):(0,Q.jsx)(ri,{className:s,"data-virtual":a||void 0,children:r})}function Ma({classNames:e}){return(0,Q.jsx)(`div`,{className:W(xe.item,xe.empty,K.empty,e?.empty),children:`No data`})}function Na({autoFocus:e,classNames:t,disabled:n,inline:r,onChange:i,onKeyDown:a,placeholder:o,readOnly:s,stopPropagation:c,value:l}){return(0,Q.jsx)(`div`,{className:W(r?K.tagsSearch:K.search,t?.search),children:(0,Q.jsx)(`input`,{autoFocus:e,className:K.searchInput,disabled:n,placeholder:typeof o==`string`?o:void 0,readOnly:s,value:l,onChange:i,onKeyDownCapture:a,onKeyUp:c,onKeyUpCapture:c})})}function Pa({classNames:e,onClear:t,showClear:n,suffixIconNode:r}){return(0,Q.jsxs)(`span`,{className:W(K.suffix,e?.suffix),children:[n&&(0,Q.jsx)(`span`,{className:W(K.clear,e?.clear),"data-role":`lobe-select-clear`,onClick:t,children:(0,Q.jsx)(d,{icon:v,size:`small`})}),r!=null&&(0,Q.jsx)(Cr,{className:W(K.icon,e?.icon),children:r})]})}var Fa,Q,Ia=e((()=>{f(),yn(),ce(),ve(),On(),xa(),Fa=t(n(),1),Q=t(r(),1),sn(),b(),Xi()}));function La(e,t,n){let{classNames:r,isBoldIndicator:i,itemTextClassName:a,listItemHeight:o,optionRender:s}=n;return(0,za.jsxs)(di,{disabled:e.disabled,label:ha(e),value:e.value,className:W(xe.item,K.item,i&&K.itemBoldSelected,r?.item,r?.option,e.className),style:{minHeight:o,...e.style},children:[(0,za.jsx)(yi,{className:a,children:s?s(e,{index:t}):e.label}),!i&&(0,za.jsx)(hi,{className:W(K.itemIndicator,r?.itemIndicator),children:(0,za.jsx)(d,{icon:x,size:`small`})})]},`${String(e.value)}-${t}`)}function Ra(e){let{classNames:t,items:n}=e,r=0;return n.map((n,i)=>ma(n)?(0,za.jsxs)(Hi,{className:W(K.group,t?.group),children:[(0,za.jsx)(Gi,{className:W(xe.groupLabel,K.groupLabel,t?.groupLabel),children:n.label}),n.options.map(t=>La(t,r++,e))]},`group-${i}`):La(n,r++,e))}var za,Ba=e((()=>{f(),ve(),On(),xa(),za=t(r(),1),sn(),b(),Xi()})),Va,$,Ha,Ua=e((()=>{ve(),On(),pa(),xa(),Da(),Ia(),Ba(),Va=t(n(),1),$=t(r(),1),sn(),Xi(),Ha=(0,Va.memo)(({allowClear:e,autoFocus:t,className:n,classNames:r,defaultOpen:i,defaultValue:a,disabled:o,id:s,labelRender:c,listHeight:l=512,listItemHeight:u,loading:d,mode:f,name:p,onChange:m,onOpenChange:h,onSelect:g,open:_,optionRender:v,options:y,placeholder:b,popupClassName:x,popupMatchSelectWidth:S,prefix:C,readOnly:w,required:T,behaviorVariant:E=`default`,selectedIndicatorVariant:D=`check`,shadow:O,showSearch:k,size:ee=`middle`,style:te,suffixIcon:A,suffixIconProps:j,tokenSeparators:M,value:N,variant:P,virtual:F})=>{let{isDarkMode:L}=I(),R=P??(L?`filled`:`outlined`),z=f===`tags`,B=f===`multiple`||f===`tags`,V=E===`item-aligned`,[ne,re]=(0,Va.useState)([]);(0,Va.useEffect)(()=>{f!==`tags`&&ne.length>0&&re([])},[f,ne.length]);let{appendTagValues:ie,getOption:ae,handleValueChange:oe,normalizedValue:se,normalizeValue:ce,removeLastTagValue:le,resolvedOptions:ue,valueArray:de}=Sa({defaultValue:a,extraOptions:ne,isMultiple:B,onChange:m,onSelect:g,options:y,setExtraOptions:re,value:N}),{handleOpenChange:fe,mergedOpen:pe}=Ca({defaultOpen:i,onOpenChange:h,open:_}),me=(0,Va.useCallback)(e=>{z&&!pe||oe(e)},[oe,z,pe]),he=(0,Va.useCallback)(e=>oe(de.filter((t,n)=>n!==e)),[oe,de]),{filteredOptions:ge,handleSearchChange:_e,handleSearchKeyDown:ve,searchValue:ye,shouldShowSearch:be,stopSearchPropagation:Se}=wa({appendTagValues:ie,handleOpenChange:fe,mergedOpen:pe,mode:f,removeLastTagValue:le,resolvedOptions:ue,showSearch:k,tokenSeparators:M}),Ce=Ta({filteredOptions:ge,listItemHeight:u,size:ee,valueArray:de,virtual:F}),we=Ea(),Te=(0,Va.useMemo)(()=>Aa({getOption:ae,isMultiple:B,isTags:z,labelRender:c,normalizeValue:ce,onRemoveValue:he,placeholder:z?void 0:b}),[ae,he,B,z,c,ce,b]),Ee=B?de.length>0:!ya(se),H=!!(e&&Ee&&!o&&!w),De=(0,Va.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),oe(B?[]:null)},[oe,B]),Oe=(0,Va.useMemo)(()=>Oa(C),[C]),ke=(0,Va.useMemo)(()=>ka(A,j,d),[d,A,j]),Ae=(0,Va.useMemo)(()=>{let e={maxWidth:`var(--available-width)`,minWidth:`var(--anchor-width)`,"--lobe-select-popup-max-height":V?`80vh`:`${l}px`};return S===void 0||S===!0?e:typeof S==`number`?{...e,minWidth:S,width:S}:{...e,minWidth:`max-content`}},[V,l,S]),je=W(Dn({shadow:O,size:ee,variant:R}),n,r?.root,r?.trigger),Me=D===`bold`,Ne=W(v?xe.itemContent:xe.label,K.itemText,r?.itemText),Pe=ge.length===0,Fe=Pe?(0,$.jsx)(Ma,{classNames:r}):Ra({classNames:r,isBoldIndicator:Me,items:ge,itemTextClassName:Ne,listItemHeight:u,optionRender:v});return(0,$.jsxs)(cr,{disabled:o,id:s,modal:V,multiple:B,name:p,open:pe,readOnly:w,required:T,value:se,onOpenChange:fe,onValueChange:me,children:[(0,$.jsxs)(gr,{autoFocus:!z&&t,className:je,disabled:o,nativeButton:!z,render:z?(0,$.jsx)(`div`,{}):void 0,style:te,children:[Oe!=null&&(0,$.jsx)(`span`,{className:W(K.prefix,r?.prefix),children:Oe}),(0,$.jsx)(br,{className:W(K.value,z&&K.tagsValue,r?.value),children:Te}),z&&(0,$.jsx)(Na,{inline:!0,autoFocus:t,classNames:r,disabled:o,placeholder:de.length===0?b:void 0,readOnly:w,stopPropagation:Se,value:ye,onChange:_e,onKeyDown:ve}),(0,$.jsx)(Pa,{classNames:r,showClear:H,suffixIconNode:ke,onClear:De})]}),(0,$.jsx)(Dr,{container:we,children:(0,$.jsx)(na,{align:`start`,alignItemWithTrigger:V,className:K.positioner,side:`bottom`,sideOffset:6,children:(0,$.jsxs)($r,{style:Ae,className:W(xe.popup,K.popup,x,r?.popup,r?.dropdown),children:[be&&!z&&(0,$.jsx)(Na,{classNames:r,placeholder:b,stopPropagation:Se,value:ye,onChange:_e,onKeyDown:ve}),(0,$.jsx)(ja,{classNames:r,hasSearch:be&&!z,isEmpty:Pe,listContent:Fe,listItemHeight:u,virtual:F,virtualState:Ce})]})})})]})}),Ha.displayName=`Select`}));export{Vn as _,ar as a,er as c,Hn as d,Wn as f,Gn as g,Kn as h,Qn as i,zn as l,Bn as m,Ua as n,Xn as o,Jn as p,Zn as r,$n as s,Ha as t,qn as u,jn as v,kn as y};