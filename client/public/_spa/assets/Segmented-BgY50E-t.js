import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{Gt as i,Wt as a,lr as o,ur as s}from"../vendor/vendor-ui-core-BmtybT1r.js";import{DD as c,HM as l,MD as u,OD as d,Rw as f,SF as p,UP as m,VM as h,WP as g,aM as _,bN as v,cF as y,cM as b,gF as x,iF as S,jD as C,kM as w,lF as T,nw as E,pF as D,rw as O,sF as k,sM as A,uF as j,xF as M,xN as ee,zw as te}from"./index-w64_zsxD.js";import{n as ne,t as re}from"./CompositeRoot-UtKEHRRe.js";var N,P,F,ie=e((()=>{a(),s(),j(),T(),N=D(({css:e,cssVar:t})=>({indicator:e`
    pointer-events: none;

    position: absolute;
    z-index: 0;
    inset-block-start: var(--active-item-top);
    inset-inline-start: var(--active-item-left);

    width: var(--active-item-width);
    height: var(--active-item-height);
    border-radius: ${t.borderRadius};

    background: ${t.colorBgElevated};
    box-shadow: ${t.boxShadowTertiary};

    transition-timing-function: ${t.motionEaseOut};
    transition-duration: 240ms;
    transition-property: inset-inline-start, inset-block-start, width, height;

    [data-orientation='horizontal'] &:dir(rtl) {
      inset-inline-start: var(--active-item-right);
    }

    @media (prefers-reduced-motion: reduce) {
      transition-duration: 0s;
    }
  `,item:e`
    cursor: pointer;
    user-select: none;

    position: relative;
    z-index: 1;

    display: inline-flex;
    flex-shrink: 0;
    gap: 6px;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    border: 0;

    font-weight: 500;
    color: ${t.colorTextSecondary};
    white-space: nowrap;

    background: transparent;
    outline: none;

    transition:
      color 120ms ${t.motionEaseOut},
      transform 120ms ${t.motionEaseOut};

    &:hover:not([data-disabled], [data-pressed]) {
      color: ${t.colorText};
    }

    &:active:not([data-disabled]) {
      transform: scale(0.98);
    }

    border-radius: ${t.borderRadius};
    ${o};

    &[data-pressed] {
      color: ${t.colorText};
    }

    &[data-disabled] {
      cursor: not-allowed;
      color: ${t.colorTextDisabled};
    }

    @media (prefers-reduced-motion: reduce) {
      transition-duration: 0s;
    }
  `,itemBlock:e`
    flex: 1 1 0;
  `,itemIcon:e`
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `,itemLabel:e`
    display: inline-flex;
    align-items: center;
  `,itemLarge:e`
    height: 36px;
    padding-inline: 16px;
    border-radius: ${t.borderRadius};
    font-size: 14px;
  `,itemMiddle:e`
    height: 32px;
    padding-inline: 12px;
    border-radius: ${t.borderRadius};
    font-size: 13px;
  `,itemSmall:e`
    height: 26px;
    padding-inline: 10px;
    border-radius: ${t.borderRadius};
    font-size: 12px;
  `,list:e`
    position: relative;

    display: inline-flex;
    flex-wrap: nowrap;
    gap: 4px;
    align-items: center;
    align-self: flex-start;

    box-sizing: border-box;
    padding: 3px;
    border-radius: ${t.borderRadiusLG};

    &[data-orientation='vertical'] {
      flex-direction: column;
      align-items: stretch;
      align-self: stretch;
    }
  `,listBlock:e`
    display: flex;
    align-self: stretch;
    width: 100%;
  `,listFilled:e`
    border: 1px solid ${t.colorFillQuaternary};
    background: ${t.colorBgLayout};
  `,listGlass:i.blur,listOutlined:e`
    border: 1px solid ${t.colorBorderSecondary};
    background: transparent;
  `,listShadow:i.shadow,root:e`
    display: inline-flex;

    &[data-block='true'] {
      display: flex;
      width: 100%;
    }
  `})),P=y(N.list,{defaultVariants:{block:!1,glass:!1,shadow:!1,variant:`filled`},variants:{block:{false:null,true:N.listBlock},glass:{false:null,true:N.listGlass},shadow:{false:null,true:N.listShadow},variant:{filled:N.listFilled,outlined:N.listOutlined}}}),F=y(N.item,{defaultVariants:{block:!1,size:`middle`},variants:{block:{false:null,true:N.itemBlock},size:{large:N.itemLarge,middle:N.itemMiddle,small:N.itemSmall}}})}));function ae(){return I.useContext(L)}var I,L,oe=e((()=>{I=t(n(),1),L=I.createContext(void 0)})),R,se,z,ce=e((()=>{R=t(n(),1),C(),c(),v(),oe(),h(),O(),A(),b(),se=t(r(),1),z=R.forwardRef(function(e,t){let{className:n,defaultPressed:r=!1,disabled:i=!1,form:a,onPressedChange:o,pressed:s,render:c,type:f,value:p,nativeButton:m=!0,style:h,...g}=e,v=d(p||void 0),y=ae(),b=y?.value??[],x=(i||y?.disabled)??!1,[S,C]=u({controlled:y?v!==void 0&&b.indexOf(v)>-1:s,default:r,name:`Toggle`,state:`pressed`}),{getButtonProps:T,buttonRef:D}=l({disabled:x,native:m}),O={disabled:x,pressed:S},k=[D,t],A=[{"aria-pressed":S,onClick(e){let t=!S,n=_(w,e.nativeEvent);o?.(t,n),!n.isCanceled&&(v&&y?.setGroupValue?.(v,t,n),!n.isCanceled&&C(t))}},g,T],j=ee(`button`,e,{enabled:!y,state:O,ref:k,props:A}),M=R.useMemo(()=>({disabled:x,focusableWhenDisabled:!1}),[x]);return y?(0,se.jsx)(E,{tag:`button`,render:c,className:n,style:h,metadata:M,state:O,refs:k,props:A}):j})})),le=e((()=>{ce()}));function ue(){return B.useContext(V)}var B,V,de=e((()=>{B=t(n(),1),V=B.createContext(void 0)})),H,U,W,fe=e((()=>{H=t(n(),1),m(),C(),k(),v(),ne(),f(),de(),oe(),U=t(r(),1),W=H.forwardRef(function(e,t){let{defaultValue:n,disabled:r=!1,loopFocus:i=!0,onValueChange:a,orientation:o=`horizontal`,multiple:s=!1,value:c,className:l,render:d,style:f,...p}=e,m=te(!0),h=ue(),_=n??S,v=c!==void 0||n!==void 0,y=(m?.disabled??!1)||(h?.disabled??!1)||r,[b,x]=u({controlled:c,default:_,name:`ToggleGroup`,state:`value`}),C=g((e,t,n)=>{let r;s?(r=b.slice(),t?r.push(e):r.splice(b.indexOf(e),1)):r=t?[e]:[],a?.(r,n),!n.isCanceled&&x(r)}),w={disabled:y,multiple:s,orientation:o},T=H.useMemo(()=>({disabled:y,setGroupValue:C,value:b,isValueInitialized:v}),[y,C,b,v]),E={role:`group`},D=ee(`div`,e,{enabled:!!m,state:w,ref:t,props:[E,p]});return(0,U.jsx)(L.Provider,{value:T,children:m?D:(0,U.jsx)(re,{render:d,className:l,style:f,state:w,refs:[t],props:[E,p],loopFocus:i,enableHomeAndEndKeys:!0,orientation:o})})})})),pe=e((()=>{fe()})),G,K,q,J,Y,X,me=e((()=>{ie(),G=t(r(),1),j(),le(),pe(),K=({block:e=!1,className:t,glass:n=!1,shadow:r=!1,variant:i=`filled`,...a})=>(0,G.jsx)(W,{className:x(P({block:e,glass:n,shadow:r,variant:i}),t),...a}),K.displayName=`SegmentedRoot`,q=({block:e=!1,className:t,size:n=`middle`,...r})=>(0,G.jsx)(z,{className:x(F({block:e,size:n}),t),...r}),q.displayName=`SegmentedItem`,J=({children:e,className:t,style:n})=>(0,G.jsx)(`span`,{className:x(N.itemIcon,t),style:n,children:e}),J.displayName=`SegmentedItemIcon`,Y=({children:e,className:t,style:n})=>(0,G.jsx)(`span`,{className:x(N.itemLabel,t),style:n,children:e}),Y.displayName=`SegmentedItemLabel`,X=({className:e,style:t})=>(0,G.jsx)(`span`,{"aria-hidden":!0,className:x(N.indicator,e),style:t}),X.displayName=`SegmentedIndicator`})),Z,Q,he,$,ge=e((()=>{me(),Z=t(n(),1),Q=t(r(),1),j(),M(),he=e=>typeof e==`string`?{label:e,value:e}:e,$=({block:e=!1,className:t,classNames:n,defaultValue:r,disabled:i=!1,glass:a=!1,id:o,name:s,onChange:c,options:l,ref:u,shadow:d=!1,size:f=`middle`,style:m,styles:h,value:g,variant:_=`filled`,vertical:v=!1})=>{let[y,b]=p(r,{defaultValue:r,onChange:e=>{e!=null&&c?.(e)},value:g}),S=(0,Z.useRef)(null),C=(0,Z.useCallback)(e=>{S.current=e,typeof u==`function`?u(e):u&&(u.current=e)},[u]),w=(0,Z.useMemo)(()=>(l??[]).map(e=>he(e)),[l]),T=(0,Z.useCallback)(()=>{let e=S.current;if(!e)return;let t=e.querySelector(`[data-segmented-item][data-pressed]`);if(!t){e.style.setProperty(`--active-item-left`,`0px`),e.style.setProperty(`--active-item-top`,`0px`),e.style.setProperty(`--active-item-right`,`0px`),e.style.setProperty(`--active-item-width`,`0px`),e.style.setProperty(`--active-item-height`,`0px`);return}e.style.setProperty(`--active-item-left`,`${t.offsetLeft}px`),e.style.setProperty(`--active-item-top`,`${t.offsetTop}px`),e.style.setProperty(`--active-item-right`,`${e.clientWidth-t.offsetLeft-t.offsetWidth}px`),e.style.setProperty(`--active-item-width`,`${t.offsetWidth}px`),e.style.setProperty(`--active-item-height`,`${t.offsetHeight}px`)},[]);(0,Z.useLayoutEffect)(()=>{T()},[y,w,v,f,e,T]),(0,Z.useEffect)(()=>{let e=S.current;if(!e||typeof ResizeObserver>`u`)return;let t=new ResizeObserver(()=>T());return t.observe(e),()=>t.disconnect()},[T]);let E=(0,Z.useMemo)(()=>y==null?[]:[y],[y]),D={...m,...h?.root};return(0,Q.jsxs)(K,{block:e,className:x(n?.root,t),disabled:i,glass:a,id:o,orientation:v?`vertical`:`horizontal`,ref:C,shadow:d,style:D,value:E,variant:_,onValueChange:e=>{let t=e[0];t!=null&&b(t)},children:[(0,Q.jsx)(X,{className:n?.indicator,style:h?.indicator}),w.map(t=>(0,Q.jsxs)(q,{"aria-label":typeof t.label==`string`?t.label:void 0,block:e,className:x(n?.item,t.className),"data-segmented-item":``,disabled:i||t.disabled,name:s,size:f,style:h?.item,title:t.title,value:t.value,children:[t.icon!=null&&(0,Q.jsx)(J,{className:n?.itemIcon,style:h?.itemIcon,children:t.icon}),t.label!=null&&(0,Q.jsx)(Y,{className:n?.itemLabel,style:h?.itemLabel,children:t.label})]},t.value))]})},$.displayName=`Segmented`}));export{fe as a,ce as c,W as i,ge as n,le as o,pe as r,z as s,$ as t};