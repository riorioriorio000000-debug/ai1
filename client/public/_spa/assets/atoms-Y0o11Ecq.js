import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{$ as i,Gn as a,Kn as o,Q as s,dr as c,fr as l,lr as u,ur as d}from"../vendor/vendor-ui-core-BmtybT1r.js";import{o as f,v as ee}from"../vendor/vendor-ui-runtime-NzUbUsUl.js";import{AC as p,CC as m,EC as h,IC as g,OC as _,dE as v,gF as y,pE as te,pF as b,uF as x,wC as S}from"./index-w64_zsxD.js";var C,w,T,E,D,O,k,A=e((()=>{C=[.32,.72,0,1],w=[.4,0,1,1],T=1024,E={bottom:{y:`100%`},left:{x:`-100%`},right:{x:`100%`},top:{y:`-100%`}},D={bottom:{axis:`y`,sign:-1},left:{axis:`x`,sign:1},right:{axis:`x`,sign:-1},top:{axis:`y`,sign:1}},O=(e,t=0)=>{let n=E[e],{axis:r,sign:i}=D[e],a=t===0?0:t*i;return{animate:r===`x`?{x:a,y:0}:{x:0,y:a},exit:{...n,transition:{duration:.22,ease:w}},initial:n,transition:{duration:.3,ease:C}}},k={duration:.18,ease:C}})),j,M=e((()=>{d(),x(),j=b(({css:e,cssVar:t})=>({backdrop:e`
    position: fixed;
    z-index: 1200;
    inset: 0;

    background: ${t.colorBgMask};

    transition: opacity 180ms cubic-bezier(0.32, 0.72, 0, 1);

    &[data-starting-style],
    &[data-ending-style] {
      opacity: 0;
    }
  `,popup:e`
    pointer-events: none;

    position: fixed;
    z-index: 1201;

    display: flex;

    /* clamp here rather than on the panel, so an oversized size prop shrinks the
       box instead of detaching the panel from its anchored edge */
    max-width: 100dvw;
    max-height: 100dvh;
  `,popupLeft:e`
    inset-block: 0;
    inset-inline-start: 0;
  `,popupRight:e`
    inset-block: 0;
    inset-inline-end: 0;
  `,popupTop:e`
    inset-block-start: 0;
    inset-inline: 0;
  `,popupBottom:e`
    inset-block-end: 0;
    inset-inline: 0;
  `,panel:e`
    pointer-events: auto;

    position: relative;

    /* push offset rides on CSS vars so [data-starting-style] can override the whole transform */
    transform: translate(var(--drawer-push-x, 0), var(--drawer-push-y, 0));

    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;

    box-sizing: border-box;
    min-width: 0;
    min-height: 0;

    /* Container, not elevated: the antd-based Drawer paints its panel on container, and in dark
       themes elevated is a visibly lighter step — the two drawers must read as the same surface. */
    background: ${t.colorBgContainer};

    /* Geometry and alphas are antd's boxShadowDrawer{Left,Right,Up,Down} verbatim, so both drawers
       cast identically. antd builds those by scaling colorShadow's *own* alpha by 8/12/5%, and
       colorShadow flips from opaque black to rgba(255,255,255,0.2) in dark — hence the color-mix
       against the raw var rather than a literal black (colorShadow has no AliasToken typing, so
       cssVar cannot reach it). An edge-anchored panel casts along its placement axis rather than
       downward like a centred dialog would: direction classes set the sign, weight classes scale
       the alpha, so the two compose without a class per combination. */
    box-shadow:
      calc(var(--drawer-cast-x, 0) * 6px) calc(var(--drawer-cast-y, 0) * 6px) 16px 0
        color-mix(
          in srgb,
          var(--ant-color-shadow, #000) calc(8% * var(--drawer-cast-alpha, 1)),
          transparent
        ),
      calc(var(--drawer-cast-x, 0) * 3px) calc(var(--drawer-cast-y, 0) * 3px) 6px -4px
        color-mix(
          in srgb,
          var(--ant-color-shadow, #000) calc(12% * var(--drawer-cast-alpha, 1)),
          transparent
        ),
      calc(var(--drawer-cast-x, 0) * 9px) calc(var(--drawer-cast-y, 0) * 9px) 28px 8px
        color-mix(
          in srgb,
          var(--ant-color-shadow, #000) calc(5% * var(--drawer-cast-alpha, 1)),
          transparent
        );

    transition: transform 300ms cubic-bezier(0.32, 0.72, 0, 1);
  `,panelLeft:e`
    --drawer-cast-x: 1;

    border-inline-end: var(--drawer-edge-width, 1px) solid ${t.colorBorder};

    &[data-starting-style],
    &[data-ending-style] {
      transform: translateX(-100%);
    }
  `,panelRight:e`
    --drawer-cast-x: -1;

    border-inline-start: var(--drawer-edge-width, 1px) solid ${t.colorBorder};

    &[data-starting-style],
    &[data-ending-style] {
      transform: translateX(100%);
    }
  `,panelTop:e`
    --drawer-cast-y: 1;

    border-block-end: var(--drawer-edge-width, 1px) solid ${t.colorBorder};

    &[data-starting-style],
    &[data-ending-style] {
      transform: translateY(-100%);
    }
  `,panelBottom:e`
    --drawer-cast-y: -1;

    border-block-start: var(--drawer-edge-width, 1px) solid ${t.colorBorder};

    &[data-starting-style],
    &[data-ending-style] {
      transform: translateY(100%);
    }
  `,panelRoundedLeft:e`
    border-start-end-radius: 12px;
    border-end-end-radius: 12px;
  `,panelRoundedRight:e`
    border-start-start-radius: 12px;
    border-end-start-radius: 12px;
  `,panelRoundedTop:e`
    border-end-start-radius: 12px;
    border-end-end-radius: 12px;
  `,panelRoundedBottom:e`
    border-start-start-radius: 12px;
    border-start-end-radius: 12px;
  `,panelFlush:e`
    --drawer-cast-alpha: 0;
    --drawer-edge-width: 0;
  `,panelBoosted:e`
    --drawer-cast-alpha: 1.75;
  `,panelRecessed:e`
    --drawer-cast-alpha: 0.5;
  `,header:e`
    display: flex;
    flex: none;
    gap: 8px;
    align-items: center;
    justify-content: space-between;

    min-height: 56px;
    padding-block: 12px;
    padding-inline: 16px;
    border-block-end: 1px solid ${t.colorSplit};
  `,containerInner:e`
    display: flex;
    flex: 1;
    gap: 8px;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin-inline: auto;
  `,containerInnerFooter:e`
    justify-content: flex-end;
  `,title:e`
    margin: 0;

    font-size: 17px;
    font-weight: 600;
    line-height: 1.4;
    color: ${t.colorText};
    letter-spacing: -0.005em;
  `,extra:e`
    display: flex;
    flex: none;
    gap: 4px;
    align-items: center;

    margin-inline-end: -4px;
  `,extraFloating:e`
    position: absolute;
    z-index: 1;
    inset-block-start: 12px;
    inset-inline-end: 12px;

    margin-inline-end: 0;
  `,close:e`
    cursor: pointer;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    border-radius: 8px;

    color: ${t.colorTextTertiary};

    background: transparent;

    transition:
      color 160ms cubic-bezier(0.32, 0.72, 0, 1),
      background 160ms cubic-bezier(0.32, 0.72, 0, 1),
      transform 160ms cubic-bezier(0.32, 0.72, 0, 1);

    /* Restores the 40px target the 32px visual box gives up, without nudging the header layout. */
    &::after {
      content: '';
      position: absolute;
      inset: -4px;
    }

    &:hover {
      transform: scale(1.04);
      color: ${t.colorText};
      background: ${t.colorFillSecondary};
    }

    &:active {
      transform: scale(0.96);
    }

    ${u};
  `,content:e`
    overflow: hidden auto;
    display: flex;
    flex: 1;
    min-height: 0;
  `,bodyContent:e`
    display: flex;
    flex-direction: column;

    width: 100%;
    min-height: 100%;
    margin-inline: auto;
    padding-block: 12px;
    padding-inline: 16px;
  `,contentSidebar:e`
    overflow: hidden;
  `,bodyContentSidebar:e`
    flex-direction: row;
    height: 100%;
    min-height: 0;
    padding: 0;
  `,sidebar:e`
    overflow: hidden auto;
    flex: none;

    padding-block: 12px;
    padding-inline: 16px;
    border-inline-end: 1px solid ${t.colorBorderSecondary};

    background: ${t.colorBgLayout};
  `,sidebarContent:e`
    overflow: hidden auto;
    flex: 1;

    min-width: 0;
    padding-block: 12px;
    padding-inline: 16px;
  `,footer:e`
    display: flex;
    flex: none;
    gap: 8px;
    align-items: center;
    justify-content: flex-end;

    padding-block: 12px;
    padding-inline: 16px;
    border-block-start: 1px solid ${t.colorSplit};
  `}))})),N,P,F,I,ne=e((()=>{N=t(n(),1),P=(0,N.createContext)(null),F=()=>(0,N.use)(P),I=P.Provider})),L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,re,ie,ae,oe=e((()=>{a(),c(),s(),A(),ne(),M(),L=t(n(),1),R=t(r(),1),x(),f(),v(),m(),z=(e,t)=>typeof t==`function`?n=>y(e,t(n)):y(e,t),B={bottom:j.popupBottom,left:j.popupLeft,right:j.popupRight,top:j.popupTop},V={bottom:j.panelBottom,left:j.panelLeft,right:j.panelRight,top:j.panelTop},H={bottom:j.panelRoundedBottom,left:j.panelRoundedLeft,right:j.panelRoundedRight,top:j.panelRoundedTop},U=(0,L.createContext)(null),W=(0,L.createContext)(null),G=()=>(0,L.use)(U),K=()=>(0,L.use)(W),q=({open:e,children:t,onExitComplete:n,zIndex:r,...a})=>{let[o,s]=(0,L.useState)(!!e);(0,L.useEffect)(()=>{e&&s(!0)},[e]);let c=(0,L.useCallback)(()=>{s(!1),n?.()},[n]),l=(0,L.useMemo)(()=>({onExitComplete:c}),[c]),{zIndex:u,ref:d}=i(`modal`,r),f=(0,L.useMemo)(()=>({popupRef:d,zIndex:u}),[u,d]);return o?(0,R.jsx)(U,{value:e,children:(0,R.jsx)(W,{value:l,children:(0,R.jsx)(I,{value:f,children:(0,R.jsx)(h,{modal:!0,open:!0,...a,children:t})})})}):null},J=({zIndex:e,children:t,...n})=>{let{zIndex:r,ref:a}=i(`modal`,e);return(0,R.jsx)(I,{value:(0,L.useMemo)(()=>({popupRef:a,zIndex:r}),[r,a]),children:(0,R.jsx)(h,{modal:!0,...n,children:t})})},Y=({open:e,onExitComplete:t,...n})=>e===void 0?(0,R.jsx)(J,{...n}):(0,R.jsx)(q,{open:e,onExitComplete:t,...n}),X=({container:e,...t})=>{let n=l();return(0,R.jsx)(_,{container:e??n??void 0,...t})},Z=({className:e,style:t,...n})=>{let r=G(),i=F(),a=o(),s=i?.zIndex===void 0?void 0:{zIndex:i.zIndex};return r===null?(0,R.jsx)(g,{...n,className:z(j.backdrop,e),style:{...s,...t}}):(0,R.jsx)(g,{...n,className:y(j.backdrop,e),style:{...s,...t,transition:`none`},render:(0,R.jsx)(a.div,{animate:{opacity:+!!r},initial:{opacity:0},transition:k})})},Q=({className:e,children:t,placement:n=`right`,width:r,height:i,flush:a,pushOffset:s=0,motionProps:c,panelClassName:l,panelStyle:u,popupStyle:d,ref:f,...m})=>{let h=G(),g=K(),_=F(),v=o(),b=te([f,_?.popupRef]),x=(0,L.useRef)({height:i,placement:n,width:r});h!==!1&&(x.current={height:i,placement:n,width:r});let{height:S,placement:C,width:w}=x.current,T=C===`left`||C===`right`?{width:w}:{height:S},E={..._?.zIndex===void 0?void 0:{zIndex:_.zIndex+1},...T,...d},k=y(j.popup,B[C]),A=y(j.panel,V[C],a?j.panelFlush:H[C],l);if(h!==null&&g){let n=O(C,s);return(0,R.jsx)(p,{...m,className:y(k,e),"data-drawer-anchor":C,ref:b,style:E,children:(0,R.jsx)(ee,{onExitComplete:g.onExitComplete,children:h?(0,L.createElement)(v.div,{...n,...c,className:A,"data-drawer-placement":C,key:`drawer-popup-panel`,style:{transition:`none`,...u}},t):null})})}let{axis:M,sign:N}=D[C],P={[M===`x`?`--drawer-push-x`:`--drawer-push-y`]:`${s*N}px`};return(0,R.jsx)(p,{...m,className:z(k,e),"data-drawer-anchor":C,ref:b,style:E,children:(0,R.jsx)(`div`,{className:A,"data-drawer-placement":C,style:{...P,...u},children:t})})},$=({className:e,...t})=>(0,R.jsx)(`div`,{...t,className:y(j.header,e)}),re=({className:e,...t})=>(0,R.jsx)(S,{...t,className:z(j.title,e)}),ie=({className:e,...t})=>(0,R.jsx)(`div`,{...t,className:y(j.content,e)}),ae=({className:e,...t})=>(0,R.jsx)(`div`,{...t,className:y(j.footer,e)})}));export{Q as a,re as c,j as d,T as f,$ as i,oe as l,ie as n,X as o,A as p,ae as r,Y as s,Z as t,M as u};