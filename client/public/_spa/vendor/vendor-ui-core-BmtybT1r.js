import{n as e,o as t}from"../assets/rolldown-runtime-CMxvf4Kt.js";import{C as n,E as r,T as i}from"./vendor-react-B9HSWrpN.js";import{A as a,Bt as o,C as s,G as c,Mt as l,S as u,ft as d,o as f,q as p,v as m}from"./vendor-ui-runtime-NzUbUsUl.js";import{At as h,Jt as g,R as _,Xt as v,ct as y,nn as b,r as x}from"./vendor-antd-BWSxhuJE.js";import{Av as S,Ev as C,Iu as w,Jp as T,Ml as E,Oo as D,Pv as O,Qv as k,Sm as A,Wh as ee,Wo as te,c as ne,cg as j,cr as re,cs as ie,fm as ae,fs as oe,mv as se,my as ce,nc as le,ng as ue,oh as de,t as M,ug as fe,ut as pe,wc as me,wv as he}from"./vendor-icons-vienkZi5.js";import{$f as ge,$w as _e,AC as ve,AE as ye,BC as be,Bw as xe,CA as Se,CC as Ce,Cw as we,DA as Te,Dk as Ee,EA as De,EC as Oe,EE as ke,EF as Ae,FD as je,FT as Me,Hw as Ne,IC as Pe,ID as N,IE as Fe,JM as Ie,Jw as Le,KC as Re,Kw as ze,LA as Be,LM as Ve,ME as He,MT as Ue,NA as We,NT as P,OC as Ge,OE as Ke,PA as qe,PC as Je,PE as Ye,PN as Xe,PT as Ze,QM as Qe,Qf as $e,Qw as et,RC as tt,SF as nt,SN as rt,TA as it,UC as at,VC as ot,Ww as st,XC as ct,XM as lt,Xw as ut,Zw as dt,_E as ft,aT as pt,bA as mt,cE as ht,cF as gt,cT as _t,cw as vt,dE as yt,dF as bt,dT as xt,eN as St,eT as Ct,f as wt,fE as Tt,fF as Et,gA as Dt,gF as F,hA as Ot,hE as kt,hF as I,hL as At,iT as jt,lE as Mt,lF as Nt,lT as Pt,mE as Ft,mF as It,mL as Lt,nT as Rt,oT as zt,p as Bt,pE as Vt,pF as Ht,rT as Ut,sE as Wt,sT as Gt,tM as Kt,tT as qt,tp as Jt,uE as Yt,uF as L,vF as Xt,vN as Zt,wA as Qt,wC as $t,wF as en,wN as tn,xA as nn,xF as rn,xw as an,zC as on,zM as sn}from"../assets/index-w64_zsxD.js";var cn,ln,un=e((()=>{cn=t(r(),1),ln=()=>{let[e,t]=(0,cn.useState)(typeof document<`u`);return(0,cn.useEffect)(()=>{e||t(!0)},[]),e}})),dn,fn,pn,mn=e((()=>{dn=t(r(),1),fn=(0,dn.createContext)(null),pn=()=>(0,dn.use)(fn)})),hn,gn=e((()=>{hn={floating:1100,modal:1200,toast:1e5,step:10}}));function _n(e){return e===`toast`?(yn=Math.max(yn,hn.toast)+hn.step,yn):(vn=Math.max(vn,hn[e])+hn.step,vn)}var vn,yn,bn=e((()=>{gn(),vn=0,yn=0})),xn,Sn,Cn,wn=e((()=>{xn=t(r(),1),Sn=(0,xn.createContext)({position:`bottom-right`,swipeDirection:[`down`,`right`]}),Cn=()=>(0,xn.useContext)(Sn)})),Tn,En,Dn,On,kn,An,jn=e((()=>{Tn=[],En=new Set,Dn=()=>{for(let e of En)e()},On=e=>(Tn.push(e),Dn(),()=>{let t=Tn.indexOf(e);t!==-1&&Tn.splice(t,1),Dn()}),kn=e=>Tn[0]===e,An=e=>(En.add(e),()=>{En.delete(e)})})),Mn,Nn,Pn,Fn,In,Ln,Rn,zn=e((()=>{Mn=20,Nn=5e3,Pn=!1,Fn=[],In=e=>{if(Pn){e();return}Fn.length>=Mn&&Fn.shift(),Fn.push({queuedAt:Date.now(),run:e})},Ln=()=>{Pn=!0;let e=Fn;Fn=[];let t=Date.now();for(let n of e)t-n.queuedAt<=Nn&&n.run()},Rn=()=>{Pn=!1}})),Bn,Vn,Hn,Un,Wn=e((()=>{At(),L(),Bn=Xt`
  from {
    outline-color: transparent;
    outline-offset: 5px;
  }
`,Vn=e=>It`
  --lobe-focus-ring-color: ${e};

  &:focus-visible:not([data-lobe-focus-ring='managed']) {
    outline: 2px solid ${Lt(e)};
    outline-offset: 2px;
    animation: ${Bn} 200ms cubic-bezier(0.22, 1, 0.36, 1);

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }

    @media (forced-colors: active) {
      outline-color: CanvasText;
      animation: none;
    }
  }
`,Hn=Vn(I.colorInfo),Un=Vn})),Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n=e((()=>{Gn=`608ms`,Kn=`linear(0, 0.08, 0.249, 0.437, 0.607, 0.745, 0.847, 0.917, 0.963, 0.99, 1.004, 1.011, 1.012, 1.011, 1.009, 1.007, 1.005, 1.003, 1.002, 1)`,qn=`--toast-shift-x`,Jn=`--toast-shift-y`,Yn=`--toast-width`,Xn=`--floating-panel-reserve-block-end`,Zn=`--floating-panel-reserve-inline-end`,Qn=({panelHeight:e,panelOffsetX:t,panelOffsetY:n,panelWidth:r,viewportHeight:i,viewportWidth:a})=>{let o=Math.max(0,r+t+12-16),s=Math.max(0,e+n+12-16),c=a-o-32,l=i-s-32,u=Math.max(0,16-n),d=Math.max(0,16-t);return c>=360?{alignInline:0,mode:`left`,reserve:u,shiftX:o,shiftY:0,width:360}:l>=88?{alignInline:d,mode:`up`,reserve:0,shiftX:0,shiftY:s,width:360}:c>=260?{alignInline:0,mode:`shrink`,reserve:u,shiftX:o,shiftY:0,width:c}:{alignInline:d,mode:`reserve`,reserve:Math.max(0,116-n),shiftX:0,shiftY:0,width:360}}})),R,er,tr,nr,rr=e((()=>{Wn(),$n(),L(),Nt(),R=Ht(({css:e,cssVar:t})=>({action:e`
    cursor: pointer;

    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    height: 28px;
    padding-inline: 12px;
    border: none;
    border-radius: ${t.borderRadiusSM};

    font-size: 12px;
    font-weight: 500;
    line-height: 1;

    transition:
      background 0.2s,
      color 0.2s;

    ${Hn};
  `,actionDanger:e`
    color: ${t.colorBgLayout};
    background: ${t.colorError};

    &:hover {
      background: ${t.colorErrorHover};
    }

    &:active {
      background: ${t.colorErrorActive};
    }

    ${Un(t.colorError)};
  `,actionGhost:e`
    border: 1px solid ${t.colorBorder};
    color: ${t.colorText};
    background: transparent;

    &:hover {
      border-color: ${t.colorPrimary};
      color: ${t.colorPrimary};
    }

    &:active {
      border-color: ${t.colorPrimaryActive};
      color: ${t.colorPrimaryActive};
    }
  `,actionPrimary:e`
    color: ${t.colorBgLayout};
    background: ${t.colorPrimary};

    &:hover {
      background: ${t.colorPrimaryHover};
    }

    &:active {
      background: ${t.colorPrimaryActive};
    }
  `,actionSecondary:e`
    color: ${t.colorText};
    background: ${t.colorFillSecondary};

    &:hover {
      background: ${t.colorFillTertiary};
    }

    &:active {
      background: ${t.colorFill};
    }
  `,actionText:e`
    color: ${t.colorPrimary};
    background: transparent;

    &:hover {
      background: ${t.colorFillTertiary};
    }

    &:active {
      background: ${t.colorFillSecondary};
    }
  `,actions:e`
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    gap: 8px;
    align-items: center;
    align-self: flex-end;
    justify-content: flex-end;

    margin-block-start: 8px;
  `,close:e`
    cursor: pointer;

    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;
    margin-inline-start: auto;
    padding: 0;
    border: none;
    border-radius: ${t.borderRadiusSM};

    color: ${t.colorTextSecondary};

    background: transparent;

    transition: all 0.2s;

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFillSecondary};
    }
  `,content:e`
    overflow: hidden;
    transition: opacity 0.2s;

    &[data-behind] {
      pointer-events: none;
      opacity: 0;
    }

    &[data-expanded] {
      pointer-events: auto;
      opacity: 1;
    }
  `,contentArea:e`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
  `,description:e`
    margin: 0;
    font-size: 13px;
    line-height: 1.5;
    color: ${t.colorTextSecondary};
  `,descriptionStandalone:e`
    color: ${t.colorText};
  `,icon:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  `,root:e`
    --toast-gap: 12px;
    --toast-peek: 12px;
    --toast-scale: calc(1 - var(--toast-index) * 0.05);
    --toast-shrink: calc(1 - var(--toast-scale));
    --toast-collapsed-height: var(--toast-frontmost-height, var(--toast-height));

    cursor: default;
    user-select: none;

    position: absolute;
    z-index: calc(1000 - var(--toast-index));
    inset-inline: 0;

    box-sizing: border-box;
    width: 100%;
    height: var(--toast-collapsed-height);
    padding-block: 12px;
    padding-inline: 16px;
    border-radius: var(--toast-border-radius, ${t.borderRadiusLG});

    color: ${t.colorText};

    background: ${t.colorBgElevated};
    background-clip: padding-box;
    box-shadow: ${t.boxShadowSecondary}, var(--lobe-ring);

    transition:
      transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
      opacity 0.4s,
      height 0.15s;

    /* Fill gap between stacked toasts to prevent hover flicker */
    &::after {
      content: '';
      position: absolute;
      inset-inline: 0;
      height: calc(var(--toast-gap) + var(--toast-peek) + 8px);
    }

    &[data-limited] {
      opacity: 0;
    }

    &[data-swiping] {
      transition: none;
    }
  `,rootBottom:e`
    inset-block: auto 0;
    transform-origin: bottom center;
    transform: translateX(var(--toast-swipe-movement-x))
      translateY(
        calc(
          var(--toast-swipe-movement-y) - (var(--toast-index) * var(--toast-peek)) -
            (var(--toast-shrink) * var(--toast-collapsed-height))
        )
      )
      scale(var(--toast-scale));

    &::after {
      inset-block-start: 100%;
    }

    &[data-expanded] {
      transform: translateX(var(--toast-swipe-movement-x))
        translateY(
          calc(
            var(--toast-swipe-movement-y) + var(--toast-offset-y) * -1 + var(--toast-index) *
              var(--toast-gap) * -1
          )
        )
        scale(1);
      height: var(--toast-height);
    }

    &[data-starting-style],
    &[data-ending-style] {
      transform: translateY(150%);
      opacity: 0;
    }
  `,rootTop:e`
    inset-block: 0 auto;
    transform-origin: top center;
    transform: translateX(var(--toast-swipe-movement-x))
      translateY(
        calc(
          var(--toast-swipe-movement-y) + (var(--toast-index) * var(--toast-peek)) +
            (var(--toast-shrink) * var(--toast-collapsed-height))
        )
      )
      scale(var(--toast-scale));

    &::after {
      inset-block-end: 100%;
    }

    &[data-expanded] {
      transform: translateX(var(--toast-swipe-movement-x))
        translateY(
          calc(
            var(--toast-swipe-movement-y) + var(--toast-offset-y) + var(--toast-index) *
              var(--toast-gap)
          )
        )
        scale(1);
      height: var(--toast-height);
    }

    &[data-starting-style],
    &[data-ending-style] {
      transform: translateY(-150%);
      opacity: 0;
    }
  `,title:e`
    margin: 0;

    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    color: ${t.colorText};
  `,titleRow:e`
    display: flex;
    gap: 8px;
    align-items: flex-start;
  `,toastBody:e`
    display: flex;
    gap: 12px;
    align-items: flex-start;
  `,toastBodyCenter:e`
    display: flex;
    gap: 12px;
    align-items: flex-start;
  `,viewport:e`
    position: fixed;
    z-index: 100000;

    width: var(--toast-width, 360px);
    max-width: calc(100vw - var(--toast-viewport-offset-x, 16px) * 2);

    outline: 0;

    @media (width <= 480px) {
      width: calc(100vw - var(--toast-viewport-offset-x, 16px) * 2);
    }
  `,viewportBottom:e`
    inset-block-end: var(--toast-viewport-offset-y, 16px);
    inset-inline-start: 50%;
    transform: translateX(-50%);
  `,viewportBottomLeft:e`
    inset-block-end: var(--toast-viewport-offset-y, 16px);
    inset-inline-start: var(--toast-viewport-offset-x, 16px);
  `,viewportBottomRight:e`
    inset-block-end: var(--toast-viewport-offset-y, 16px);
    inset-inline-end: var(--toast-viewport-offset-x, 16px);

    /* Percentages in translate() resolve against the element itself, not the
       viewport, so the dodge offsets have to stay in px. */
    transform: translate(
      calc(-1 * var(--toast-shift-x, 0px)),
      calc(-1 * var(--toast-shift-y, 0px))
    );
    transition: transform ${Gn} ${Kn};

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,viewportTop:e`
    inset-block-start: var(--toast-viewport-offset-y, 16px);
    inset-inline-start: 50%;
    transform: translateX(-50%);
  `,viewportTopLeft:e`
    inset-block-start: var(--toast-viewport-offset-y, 16px);
    inset-inline-start: var(--toast-viewport-offset-x, 16px);
  `,viewportTopRight:e`
    inset-block-start: var(--toast-viewport-offset-y, 16px);
    inset-inline-end: var(--toast-viewport-offset-x, 16px);
  `})),er=gt(R.viewport,{defaultVariants:{position:`bottom-right`},variants:{position:{bottom:R.viewportBottom,"bottom-left":R.viewportBottomLeft,"bottom-right":R.viewportBottomRight,top:R.viewportTop,"top-left":R.viewportTopLeft,"top-right":R.viewportTopRight}}}),tr=gt(R.root,{defaultVariants:{position:`bottom-right`},variants:{position:{bottom:R.rootBottom,"bottom-left":R.rootBottom,"bottom-right":R.rootBottom,top:R.rootTop,"top-left":R.rootTop,"top-right":R.rootTop}}}),nr=gt(R.action,{defaultVariants:{variant:`primary`},variants:{variant:{danger:R.actionDanger,ghost:R.actionGhost,primary:R.actionPrimary,secondary:R.actionSecondary,text:R.actionText}}})})),ir,ar,or,sr,cr,lr=e((()=>{ir=t(r(),1),ar=t(i(),1),or=(0,ir.createContext)({}),sr=(0,ir.memo)(({children:e,config:t={}})=>(0,ar.jsx)(or,{value:t,children:e})),cr=()=>(0,ir.use)(or)})),ur,dr=e((()=>{a(),ur=e=>{if(l(e))return{size:e};let t,n;switch(e){case`large`:t=24,n=2;break;case`middle`:t=20,n=2;break;case`small`:t=14,n=2;break;default:e?(t=e?.size||24,n=e?.strokeWidth||2):(t=`1em`,n=2)}return{size:t,strokeWidth:n}}})),fr,pr,mr,hr=e((()=>{L(),Nt(),fr=Xt`
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
`,pr=Ht(({css:e})=>({spin:e`
      animation: ${fr} 1s linear infinite;
    `})),mr=gt(`anticon`,{defaultVariants:{spin:!1},variants:{spin:{false:null,true:pr.spin}}})})),gr,_r,z,vr=e((()=>{lr(),dr(),hr(),gr=t(r(),1),_r=t(i(),1),L(),z=(0,gr.memo)(({icon:e,size:t,color:n,fill:r=`transparent`,className:i,focusable:a,spin:o,fillRule:s,fillOpacity:c,ref:l,...u})=>{let{color:d,fill:f,fillOpacity:p,fillRule:m,focusable:h,className:g,size:_,...v}=cr(),{size:y,strokeWidth:b}=(0,gr.useMemo)(()=>ur(t||_),[t,_]),x=e;return(0,_r.jsx)(`span`,{className:F(mr({spin:o}),g,i),role:`img`,...v,...u,children:e&&((0,gr.isValidElement)(e)?e:(0,_r.jsx)(x,{color:n||d,fill:r||f,fillOpacity:c||p,fillRule:s||m,focusable:a||h,height:y,ref:l,size:y,strokeWidth:b,width:y}))})}),z.displayName=`Icon`})),yr,B,br,xr,Sr,Cr=e((()=>{vr(),wn(),rr(),yr=t(r(),1),B=t(i(),1),L(),M(),We(),br={default:E,error:de,info:E,loading:me,success:ee,warning:pe},xr={default:I.colorText,error:I.colorError,info:I.colorInfo,loading:I.colorPrimary,success:I.colorSuccess,warning:I.colorWarning},Sr=(0,yr.memo)(({toast:e,classNames:t,styles:n})=>{let{position:r,swipeDirection:i}=Cn(),a=e.data,o=a?.type??`default`,s=a?.closable??!0,c=a?.hideCloseButton??!1,l=s&&!c,u=a?.icon,d=e.title??a?.title,f=e.description??a?.description,p=e.actionProps??a?.actionProps,m=a?.actions,h=xr[o],g=u??br[o],_=o===`loading`,v=F(R.description,R.descriptionStandalone,t?.description),y=()=>g?(0,B.jsx)(`div`,{className:F(R.icon,t?.icon),style:n?.icon,children:(0,B.jsx)(z,{color:h,icon:g,size:18,spin:_})}):null,b=()=>m&&m.length>0?(0,B.jsx)(`div`,{className:F(R.actions,t?.actions),style:n?.actions,children:m.map((e,r)=>(0,B.jsx)(Ve,{style:n?.action,className:F(nr({variant:e.variant??`primary`}),t?.action),onClick:e.onClick,...e.props,children:e.label},r))}):p?(0,B.jsx)(Ve,{className:F(nr({variant:`primary`}),t?.action),style:n?.action,...p}):null;return(0,B.jsx)(St,{className:F(tr({position:r}),t?.root),swipeDirection:i,toast:e,style:{...n?.root,...a?.style},children:(0,B.jsx)(Qe,{className:F(R.content,t?.content),style:n?.content,children:(0,B.jsxs)(`div`,{className:d?R.toastBody:R.toastBodyCenter,children:[y(),(0,B.jsxs)(`div`,{className:R.contentArea,children:[d?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(`div`,{className:R.titleRow,children:[(0,B.jsx)(Ie,{className:F(R.title,t?.title),style:n?.title,children:d}),l&&(0,B.jsx)(sn,{"aria-label":`Close`,className:F(R.close,t?.close),style:n?.close,children:(0,B.jsx)(ne,{size:14})})]}),f&&(0,B.jsx)(lt,{className:F(R.description,t?.description),style:{marginBlockStart:4,...n?.description},children:f})]}):f&&(0,B.jsxs)(`div`,{className:R.titleRow,children:[(0,B.jsx)(lt,{className:v,style:n?.description,children:f}),l&&(0,B.jsx)(sn,{"aria-label":`Close`,className:F(R.close,t?.close),style:n?.close,children:(0,B.jsx)(ne,{size:14})})]}),b()]})]})})})}),Sr.displayName=`ToastItem`}));async function wr(e,t){let n=Rr({closable:!1,duration:0,type:`loading`,...typeof t.loading==`string`?{description:t.loading}:t.loading});try{let r=await e;return n.close(),Rr({type:`success`,...typeof t.success==`string`?{description:t.success}:typeof t.success==`function`?{description:t.success(r)}:t.success}),r}catch(e){throw n.close(),Rr({type:`error`,...typeof t.error==`string`?{description:t.error}:typeof t.error==`function`?{description:t.error(e)}:t.error}),e}}var Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr=e((()=>{un(),mn(),bn(),wn(),jn(),zn(),rr(),Cr(),Tr=t(r(),1),Er=t(i(),1),L(),We(),Dr=[`top`,`top-left`,`top-right`,`bottom`,`bottom-left`,`bottom-right`],Or={duration:5e3,limit:5,position:`bottom-right`,swipeDirection:[`down`,`right`]},kr={bottom:qe(),"bottom-left":qe(),"bottom-right":qe(),top:qe(),"top-left":qe(),"top-right":qe()},Ar={bottom:new Map,"bottom-left":new Map,"bottom-right":new Map,top:new Map,"top-left":new Map,"top-right":new Map},jr=e=>kr[e],Mr=0,Nr=()=>`toast-${Date.now().toString(36)}-${(Mr++).toString(36)}`,Pr=e=>Dr.find(t=>Ar[t].has(e)),Fr=(e,t)=>Array.from(Ar[e].keys()).at(-1)===t,Ir=(e,t)=>typeof e==`string`?{description:e,type:t}:{...e,type:t},Lr=(e,t)=>({close:()=>In(()=>jr(t).close(e)),id:e,update:n=>{In(()=>jr(t).update(e,{data:n,description:n.description,title:n.title}))}}),Rr=e=>{let t=e.placement??Or.position,n=jr(t),{id:r,onClose:i,onRemove:a}=e;if(r){let e=Pr(r);e&&!(e===t&&Fr(t,r))&&(Ar[e].get(r).superseded=!0,Ar[e].delete(r),In(()=>jr(e).close(r)))}let o=r??Nr(),s={superseded:!1};return Ar[t].set(o,s),In(()=>{n.add({id:o,data:e,description:e.description,onClose:()=>{s.superseded||i?.()},onRemove:()=>{s.superseded||(Ar[t].delete(o),a?.())},timeout:e.duration??Or.duration,title:e.title})}),Lr(o,t)},zr=e=>{if(e)for(let[t,n]of Object.entries(kr))Ar[t].delete(e),In(()=>n.close(e));else for(let[e,t]of Object.entries(kr)){let n=Array.from(Ar[e].keys());Ar[e].clear(),In(()=>{for(let e of n)t.close(e)})}},Br=e=>Rr(Ir(e,`success`)),Vr=e=>Rr(Ir(e,`error`)),Hr=e=>Rr(Ir(e,`info`)),Ur=e=>Rr(Ir(e,`warning`)),Wr=e=>Rr({duration:0,...Ir(e,`loading`)}),Gr=e=>Rr({type:`default`,...e}),Kr=Object.assign(Gr,{dismiss:zr,error:Vr,info:Hr,loading:Wr,promise:wr,success:Br,warning:Ur}),qr=(0,Tr.memo)(()=>{let{toasts:e}=Be();return e.map(e=>(0,Er.jsx)(Sr,{toast:e},e.id))}),qr.displayName=`ToastList`,Jr=(0,Tr.memo)(({root:e,className:t,duration:n=5e3,limit:r=5,position:i=`bottom-right`,swipeDirection:a=[`down`,`right`]})=>{let o=ln(),s=pn(),[c,l]=(0,Tr.useState)(void 0),u=(0,Tr.useId)();(0,Tr.useEffect)(()=>On(u),[u]);let d=(0,Tr.useSyncExternalStore)(An,()=>kn(u),()=>!1);if((0,Tr.useEffect)(()=>{d&&(Or={duration:n,limit:r,position:i,swipeDirection:a})},[n,r,i,a,d]),(0,Tr.useEffect)(()=>{d&&l(_n(`toast`))},[d]),(0,Tr.useEffect)(()=>{if(!(!d||!o))return Ln(),()=>{Rn()}},[d,o]),!o||!d)return null;let f=e??s??document.body;return Dr.map(e=>(0,Er.jsx)(Sn,{value:{position:e,swipeDirection:a},children:(0,Er.jsx)(Xe,{limit:r,timeout:n,toastManager:jr(e),children:(0,Er.jsx)(Kt,{container:f,children:(0,Er.jsx)(Zt,{className:F(er({position:e}),t),style:{zIndex:c},children:(0,Er.jsx)(qr,{})})})})},e))}),Jr.displayName=`ToastHost`})),Xr,Zr,Qr,$r,ei,ti=e((()=>{Xr=t(r(),1),Zr=t(i(),1),Qr=(0,Xr.createContext)(null),$r=(0,Xr.memo)(({children:e,motion:t})=>(0,Zr.jsx)(Qr,{value:t,children:e})),ei=()=>{let e=(0,Xr.use)(Qr);if(!e)throw Error(`Please wrap your app with <ConfigProvider> (or <MotionProvider>) and pass the motion component`);return e}})),ni,ri,ii,ai=e((()=>{Qt(),ni=`https://unpkg.com`,ri=`https://registry.npmmirror.com`,ii=({pkg:e,version:t=`latest`,path:n,proxy:r})=>{switch(r){case`unpkg`:return it(ni,`${e}@${t}`,n);default:return it(ri,e,t,`files`,n)}}})),oi,si,ci,li,ui,di,fi,pi,mi,hi=e((()=>{De(),ti(),ai(),oi=t(r(),1),si=t(i(),1),ci=(0,oi.createContext)(null),li=(0,oi.createContext)({locale:`en`,t:e=>e}),ui=e=>typeof e?.then==`function`,di=(0,oi.memo)(({children:e,config:t,locale:n,resources:r,motion:i})=>{(0,oi.useEffect)(()=>{if(t?.globalFocusRing!==!1)return Te()},[t?.globalFocusRing]);let a=n??`en`,[o,s]=(0,oi.useState)(()=>r&&!ui(r)?r:void 0),[c,l]=(0,oi.useState)(a),u=(0,oi.useRef)(0);(0,oi.useEffect)(()=>{let e=++u.current;if(!r){s(void 0),l(a);return}if(ui(r)){let t=a;r.then(n=>{u.current===e&&(s(n),l(t))}).catch(()=>{u.current});return}s(r),l(a)},[a,r]);let d=ui(r)?o:r,f=ui(r)?c:a;return(0,si.jsx)(li,{value:(0,oi.useMemo)(()=>{let e=Array.isArray(d)?d:d?Object.values(d):[],t=Object.assign({},...e);return{locale:f,t:e=>t[e]||e}},[f,d]),children:(0,si.jsx)(ci,{value:t??null,children:(0,si.jsx)(Qr,{value:i,children:e})})})}),fi=({pkg:e,version:t,path:n})=>ii({path:n,pkg:e,proxy:`aliyun`,version:t}),pi=()=>{let e=(0,oi.use)(ci);return e?e?.proxy===`custom`?e?.customCdnFn||fi:({pkg:t,version:n,path:r})=>ii({path:r,pkg:t,proxy:e.proxy,version:n}):fi},mi=()=>(0,oi.use)(li)})),gi,_i=e((()=>{L(),gi=({css:e,token:t,isDarkMode:n})=>{let r=Xt`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `;return{active:e`
      color: ${t.colorText};
      background: ${t.colorFillSecondary};

      &:hover {
        color: ${t.colorText};
        background: ${t.colorFill};
      }
    `,blur:e`
      backdrop-filter: saturate(150%) blur(10px);
    `,blurStrong:e`
      backdrop-filter: saturate(150%) blur(36px);
    `,bottomScrollbar:e`
      ::-webkit-scrollbar {
        width: 0;
        height: 4px;
        background-color: transparent;

        &-thumb {
          border-radius: 4px;
          background-color: ${t.colorFill};
          transition: background-color 500ms ${t.motionEaseOut};
        }

        &-corner {
          display: none;
          width: 0;
          height: 0;
        }
      }
    `,disabled:e`
      cursor: not-allowed;
      opacity: 0.5;
    `,gradientAnimation:e`
      border-radius: inherit;
      background-image: linear-gradient(
        -45deg,
        ${t.gold},
        ${t.magenta},
        ${t.geekblue},
        ${t.cyan}
      );
      background-size: 400% 400%;
      animation: 5s ${r} 5s ease infinite;
    `,noScrollbar:e`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `,resetLinkColor:e`
      cursor: pointer;
      color: ${t.colorTextSecondary};

      &:hover {
        color: ${t.colorText};
      }
    `,shadow:e`
      box-shadow:
        0 1px 0 -1px ${n?t.colorBgLayout:t.colorBorder},
        0 1px 2px -0.5px ${n?t.colorBgLayout:t.colorBorder},
        0 2px 2px -1px ${n?t.colorBgLayout:t.colorBorderSecondary},
        0 3px 6px -4px ${n?t.colorBgLayout:t.colorBorderSecondary};
    `,variantBorderless:e`
      border: none;
      background: none;
      box-shadow: none;

      &:hover {
        background: ${t.colorFillTertiary};
      }
    `,variantBorderlessDanger:e`
      border: none;
      background: none;
      box-shadow: none;

      &:hover {
        background: ${t.colorErrorFillTertiary};
        box-shadow: inset 0 0 0 1px ${t.colorErrorFillTertiary};
      }
    `,variantBorderlessWithoutHover:e`
      border: none;
      background: none;
      box-shadow: none;
    `,variantFilled:e`
      background: ${t.colorFillTertiary};

      &:hover {
        background: ${t.colorFillSecondary};
      }
    `,variantFilledDanger:e`
      background: ${t.colorErrorFillTertiary};

      &:hover {
        background: ${t.colorErrorFillSecondary};
      }
    `,variantFilledWithoutHover:e`
      background: ${t.colorFillTertiary};
    `,variantOutlined:e`
      border: 1px solid ${t.colorBorderSecondary};
      background: ${t.colorBgContainer};

      &:hover {
        border: 1px solid ${t.colorBorder};
        background: ${t.colorBgContainer};
      }
    `,variantOutlinedDanger:e`
      border: 1px solid ${t.colorErrorBorder};

      &:hover {
        border: 1px solid ${t.colorErrorBorder};
      }
    `,variantOutlinedWithoutHover:e`
      border: 1px solid ${t.colorBorderSecondary};
      background: ${t.colorBgContainer};
    `}}})),vi,yi=e((()=>{vi={dark:[`#000415`,`#001740`,`#00285b`,`#003b79`,`#004f98`,`#0064b6`,`#0d78ce`,`#2d8ae0`,`#439aed`,`#60b1ff`,`#a7d3ff`,`#e0f0ff`,`#ffffff`],darkA:[`rgba(0, 44, 233, 0.09)`,`rgba(0, 88, 246, 0.26)`,`rgba(0, 111, 253, 0.36)`,`rgba(0, 123, 252, 0.48)`,`rgba(0, 132, 253, 0.6)`,`rgba(0, 139, 253, 0.72)`,`rgba(16, 148, 254, 0.81)`,`rgba(51, 157, 255, 0.88)`,`rgba(72, 166, 255, 0.93)`,`#60b1ff`,`#a7d3ff`,`#e0f0ff`,`#ffffff`],light:[`#ffffff`,`#fcfcff`,`#f2f8ff`,`#e5f1ff`,`#d5e9ff`,`#c2e0ff`,`#acd4ff`,`#93c8ff`,`#76baff`,`#57abf9`,`#0d78ce`,`#003b79`,`#000415`],lightA:[`rgba(255, 255, 255, 0.01)`,`rgba(105, 105, 255, 0.02)`,`rgba(38, 138, 255, 0.06)`,`rgba(19, 128, 255, 0.11)`,`rgba(8, 126, 255, 0.17)`,`rgba(1, 126, 255, 0.24)`,`rgba(3, 125, 255, 0.33)`,`rgba(4, 127, 255, 0.43)`,`rgba(1, 127, 255, 0.54)`,`rgba(0, 128, 246, 0.66)`,`rgba(0, 113, 203, 0.95)`,`#003b79`,`#000415`]}})),bi,xi=e((()=>{bi={dark:[`#000503`,`#00221c`,`#003930`,`#005245`,`#006c5b`,`#008772`,`#2fa28a`,`#55bca4`,`#75d7be`,`#95f3d9`,`#bdf7e4`,`#dffcf0`,`#ffffff`],darkA:[`rgba(0, 250, 150, 0.02)`,`rgba(0, 243, 200, 0.14)`,`rgba(0, 248, 209, 0.23)`,`rgba(0, 248, 209, 0.33)`,`rgba(0, 251, 212, 0.43)`,`rgba(0, 255, 215, 0.53)`,`rgba(73, 253, 216, 0.64)`,`rgba(115, 254, 222, 0.74)`,`rgba(138, 253, 224, 0.85)`,`rgba(155, 253, 226, 0.96)`,`rgba(195, 255, 235, 0.97)`,`rgba(225, 255, 242, 0.99)`,`#ffffff`],light:[`#ffffff`,`#f9fffb`,`#effff8`,`#e3fff4`,`#d8fef0`,`#ccfcec`,`#c0fae8`,`#b3f8e3`,`#a5f6de`,`#95f3d9`,`#2fa28a`,`#005245`,`#000503`],lightA:[`rgba(255, 255, 255, 0.01)`,`rgba(55, 255, 122, 0.03)`,`rgba(26, 255, 155, 0.07)`,`rgba(0, 255, 155, 0.11)`,`rgba(11, 249, 161, 0.16)`,`rgba(0, 240, 160, 0.2)`,`rgba(3, 235, 163, 0.25)`,`rgba(2, 232, 162, 0.3)`,`rgba(5, 230, 163, 0.36)`,`rgba(3, 226, 165, 0.42)`,`rgba(1, 142, 112, 0.82)`,`#005245`,`#000503`]}})),Si,Ci=e((()=>{Si={dark:[`#00021b`,`#000d4c`,`#001a69`,`#002a8a`,`#003bac`,`#004cca`,`#005ae0`,`#0065ed`,`#006cf3`,`#0072f5`,`#9abeff`,`#e2ebff`,`#ffffff`],darkA:[`rgba(0, 18, 245, 0.11)`,`rgba(0, 43, 253, 0.3)`,`rgba(0, 62, 250, 0.42)`,`rgba(0, 76, 251, 0.55)`,`rgba(0, 87, 253, 0.68)`,`rgba(0, 95, 252, 0.8)`,`rgba(0, 102, 255, 0.88)`,`rgba(0, 109, 255, 0.93)`,`rgba(0, 112, 253, 0.96)`,`rgba(0, 119, 255, 0.96)`,`#9abeff`,`#e2ebff`,`#ffffff`],light:[`#ffffff`,`#fcfbff`,`#f1f5ff`,`#e2ebff`,`#cedfff`,`#b6d0ff`,`#9abeff`,`#78a9ff`,`#4c90ff`,`#0072f5`,`#005ae0`,`#002a8a`,`#00021b`],lightA:[`rgba(255, 255, 255, 0.01)`,`rgba(105, 55, 255, 0.02)`,`rgba(22, 88, 255, 0.06)`,`rgba(13, 88, 255, 0.12)`,`rgba(10, 95, 255, 0.2)`,`rgba(3, 93, 255, 0.29)`,`rgba(3, 93, 255, 0.4)`,`rgba(0, 93, 255, 0.53)`,`rgba(3, 99, 255, 0.71)`,`#0072f5`,`#005ae0`,`#002a8a`,`#00021b`]}})),wi,Ti=e((()=>{wi={dark:[`#070300`,`#2a1b00`,`#483000`,`#6a4900`,`#916400`,`#b77e00`,`#d59300`,`#eaa100`,`#f8aa00`,`#ffb224`,`#ffdcaf`,`#fff4eb`,`#ffffff`],darkA:[`rgba(233, 100, 0, 0.03)`,`rgba(247, 159, 0, 0.17)`,`rgba(248, 166, 0, 0.29)`,`rgba(252, 174, 0, 0.42)`,`rgba(254, 175, 0, 0.57)`,`rgba(254, 175, 0, 0.72)`,`rgba(254, 175, 0, 0.84)`,`rgba(254, 175, 0, 0.92)`,`rgba(253, 173, 0, 0.98)`,`#ffb224`,`#ffdcaf`,`#fff4eb`,`#ffffff`],light:[`#ffffff`,`#fffdff`,`#fff9f7`,`#fff4eb`,`#ffeedc`,`#ffe6c8`,`#ffdcaf`,`#ffd190`,`#ffc368`,`#ee9e0b`,`#d59300`,`#6a4900`,`#070300`],lightA:[`rgba(255, 255, 255, 0.02)`,`rgba(255,145,55,0.04)`,`rgba(255,155,55,0.08)`,`rgba(255, 117, 5, 0.16)`,`rgba(255, 134, 5, 0.20)`,`rgba(255, 141, 5, 0.26)`,`rgba(255, 146, 5, 0.32)`,`rgba(255, 150, 3, 0.44)`,`rgba(255, 155, 3, 0.6)`,`rgba(255, 165, 0, 0.86)`,`#d59300`,`#6a4900`,`#070300`]}})),Ei,Di=e((()=>{Ei={dark:[`#000000`,`#0d0d0d`,`#1a1a1a`,`#202020`,`#2d2d2d`,`#444444`,`#555555`,`#666666`,`#6f6f6f`,`#777777`,`#aaaaaa`,`#dddddd`,`#ffffff`],darkA:[`rgba(255, 255, 255, 0.02)`,`rgba(255, 255, 255, 0.06)`,`rgba(255, 255, 255, 0.10)`,`rgba(255, 255, 255, 0.16)`,`rgba(255, 255, 255, 0.24)`,`rgba(255, 255, 255, 0.28)`,`rgba(255, 255, 255, 0.32)`,`rgba(255, 255, 255, 0.38)`,`rgba(255, 255, 255, 0.44)`,`rgba(255, 255, 255, 0.5)`,`rgba(255, 255, 255, 0.66)`,`rgba(255, 255, 255, 0.84)`,`#ffffff`],light:[`#ffffff`,`#f8f8f8`,`#eeeeee`,`#e3e3e3`,`#dddddd`,`#cccccc`,`#bbbbbb`,`#aaaaaa`,`#999999`,`#888888`,`#666666`,`#333333`,`#080808`],lightA:[`rgba(0, 0, 0, 0.015)`,`rgba(0, 0, 0, 0.03)`,`rgba(0, 0, 0, 0.06)`,`rgba(0, 0, 0, 0.12)`,`rgba(0, 0, 0, 0.18)`,`rgba(0, 0, 0, 0.24)`,`rgba(0, 0, 0, 0.32)`,`rgba(0, 0, 0, 0.38)`,`rgba(0, 0, 0, 0.44)`,`rgba(0, 0, 0, 0.5)`,`rgba(0, 0, 0, 0.68)`,`rgba(0, 0, 0, 0.84)`,`rgba(0, 0, 0, 0.98)`]}})),Oi,ki=e((()=>{Oi={dark:[`#000503`,`#001d12`,`#002d1d`,`#003f28`,`#005232`,`#00653c`,`#007944`,`#1b8d4d`,`#3ba05a`,`#62c473`,`#96cd92`,`#cde6c3`,`#ffffff`],darkA:[`rgba(0, 250, 150, 0.02)`,`rgba(0, 242, 150, 0.12)`,`rgba(0, 250, 161, 0.18)`,`rgba(0, 252, 160, 0.25)`,`rgba(0, 248, 152, 0.33)`,`rgba(0, 252, 150, 0.4)`,`rgba(0, 252, 142, 0.48)`,`rgba(48, 252, 137, 0.56)`,`rgba(94, 254, 143, 0.63)`,`rgba(120, 254, 145, 0.71)`,`rgba(185, 253, 180, 0.81)`,`rgba(225, 253, 214, 0.91)`,`#ffffff`],light:[`#ffffff`,`#f4fdeb`,`#e7f8dd`,`#d8f2ce`,`#c7eabd`,`#b4e1ac`,`#a0d79b`,`#89cc8a`,`#71c179`,`#379d4a`,`#007944`,`#003f28`,`#000503`],lightA:[`rgba(255, 255, 255, 0.02)`,`rgba(117, 230, 5, 0.06)`,`rgba(84, 205, 12, 0.10)`,`rgba(60, 190, 10, 0.14)`,`rgba(40, 174, 1, 0.26)`,`rgba(28, 164, 3, 0.33)`,`rgba(18, 155, 5, 0.4)`,`rgba(4, 146, 6, 0.47)`,`rgba(1, 144, 16, 0.56)`,`rgba(1, 143, 28, 0.67)`,`#007944`,`#003f28`,`#000503`]}})),Ai,ji=e((()=>{Ai={dark:[`#020400`,`#142100`,`#253700`,`#374f00`,`#4b6800`,`#608200`,`#769d00`,`#8fb81b`,`#a9d42f`,`#c4f042`,`#daf685`,`#eefbbe`,`#ffffff`],darkA:[`rgba(100, 200, 0, 0.02)`,`rgba(154, 254, 0, 0.13)`,`rgba(168, 250, 0, 0.22)`,`rgba(177, 255, 0, 0.31)`,`rgba(183, 254, 0, 0.41)`,`rgba(188, 255, 0, 0.51)`,`rgba(190, 253, 0, 0.62)`,`rgba(196, 252, 37, 0.73)`,`rgba(204, 255, 57, 0.83)`,`rgba(209, 255, 70, 0.94)`,`rgba(225, 254, 137, 0.97)`,`rgba(240, 254, 192, 0.99)`,`#ffffff`],light:[`#ffffff`,`#feffeb`,`#f9ffd8`,`#f2ffc1`,`#ebfdaf`,`#e4fc9b`,`#ddf987`,`#d5f773`,`#cdf35c`,`#c4f042`,`#769d00`,`#374f00`,`#020400`],lightA:[`rgba(255, 255, 255, 0.01)`,`rgba(242, 255, 5, 0.08)`,`rgba(218, 255, 11, 0.16)`,`rgba(203, 255, 7, 0.25)`,`rgba(193, 249, 5, 0.32)`,`rgba(187, 247, 5, 0.4)`,`rgba(183, 242, 0, 0.47)`,`rgba(179, 240, 0, 0.55)`,`rgba(177, 236, 0, 0.64)`,`rgba(175, 235, 0, 0.74)`,`#769d00`,`#374f00`,`#020400`]}})),Mi,Ni=e((()=>{Mi={dark:[`#100002`,`#350011`,`#4b001e`,`#63002d`,`#79093f`,`#8e1752`,`#a32466`,`#b8317b`,`#ce3e91`,`#e34ba9`,`#f38bcb`,`#fec5e8`,`#ffffff`],darkA:[`rgba(229, 0, 29, 0.07)`,`rgba(252, 0, 81, 0.21)`,`rgba(250, 0, 100, 0.3)`,`rgba(254, 0, 115, 0.39)`,`rgba(252, 19, 131, 0.48)`,`rgba(254, 41, 146, 0.56)`,`rgba(255, 56, 159, 0.64)`,`rgba(252, 67, 168, 0.73)`,`rgba(254, 77, 179, 0.81)`,`rgba(255, 84, 190, 0.89)`,`rgba(253, 145, 211, 0.96)`,`#fec5e8`,`#ffffff`],light:[`#ffffff`,`#fff7f9`,`#ffeaf4`,`#ffdaee`,`#ffc7e7`,`#ffb2df`,`#ff99d6`,`#f980ca`,`#ef67ba`,`#e34ba9`,`#a32466`,`#63002d`,`#100002`],lightA:[`rgba(255, 255, 255, 0.01)`,`rgba(255, 55, 105, 0.04)`,`rgba(255, 22, 133, 0.09)`,`rgba(255, 8, 142, 0.15)`,`rgba(255, 0, 146, 0.22)`,`rgba(255, 7, 152, 0.31)`,`rgba(255, 0, 153, 0.4)`,`rgba(243, 1, 149, 0.5)`,`rgba(228, 2, 140, 0.6)`,`rgba(216, 1, 134, 0.71)`,`rgba(148, 0, 77, 0.86)`,`#63002d`,`#100002`]}})),Pi,Fi=e((()=>{Pi={dark:[`#070300`,`#291900`,`#462b00`,`#684100`,`#8e5900`,`#b36f00`,`#d18000`,`#e88b00`,`#f89200`,`#ff9927`,`#ffd1b1`,`#fff1eb`,`#ffffff`],darkA:[`rgba(233, 100, 0, 0.03)`,`rgba(241, 147, 0, 0.17)`,`rgba(250, 154, 0, 0.28)`,`rgba(254, 159, 0, 0.41)`,`rgba(254, 159, 0, 0.56)`,`rgba(252, 156, 0, 0.71)`,`rgba(255, 156, 0, 0.82)`,`rgba(255, 153, 0, 0.91)`,`rgba(253, 149, 0, 0.98)`,`#ff9927`,`#ffd1b1`,`#fff1eb`,`#ffffff`],light:[`#ffffff`,`#fffcff`,`#fff8f6`,`#fff1eb`,`#ffe9dd`,`#ffdeca`,`#ffd1b1`,`#ffc293`,`#ffb06a`,`#f88c13`,`#d18000`,`#684100`,`#070300`],lightA:[`rgba(255, 255, 255, 0.02)`,`rgba(255, 105, 255, 0.03)`,`rgba(255, 80, 30, 0.08)`,`rgba(255, 80, 5, 0.12)`,`rgba(255, 98, 12, 0.16)`,`rgba(255, 98, 3, 0.21)`,`rgba(255, 107, 3, 0.31)`,`rgba(255, 113, 4, 0.43)`,`rgba(255, 121, 2, 0.59)`,`rgba(255, 135, 1, 0.85)`,`#d18000`,`#684100`,`#070300`]}})),Ii,Li=e((()=>{Ii={dark:[`#000000`,`#111111`,`#333333`,`#555555`,`#666666`,`#888888`,`#aaaaaa`,`#cccccc`,`#dddddd`,`#eeeeee`,`#ffffff`,`#ffffff`,`#ffffff`],darkA:[`rgba(255, 255, 255, 0.02)`,`rgba(255, 255, 255, 0.08)`,`rgba(255, 255, 255, 0.16)`,`rgba(255, 255, 255, 0.22)`,`rgba(255, 255, 255, 0.36)`,`rgba(255, 255, 255, 0.48)`,`rgba(255, 255, 255, 0.6)`,`rgba(255, 255, 255, 0.72)`,`rgba(255, 255, 255, 0.84)`,`rgba(255, 255, 255, 0.88)`,`rgba(255, 255, 255, 0.92)`,`rgba(255, 255, 255, 0.96)`,`rgba(255, 255, 255, 0.98)`],light:[`#ffffff`,`#f5f5f5`,`#eeeeee`,`#cccccc`,`#aaaaaa`,`#888888`,`#666666`,`#444444`,`#333333`,`#222222`,`#111111`,`#0b0b0b`,`#000000`],lightA:[`rgba(0, 0, 0, 0.02)`,`rgba(0, 0, 0, 0.08)`,`rgba(0, 0, 0, 0.16)`,`rgba(0, 0, 0, 0.22)`,`rgba(0, 0, 0, 0.36)`,`rgba(0, 0, 0, 0.48)`,`rgba(0, 0, 0, 0.6)`,`rgba(0, 0, 0, 0.72)`,`rgba(0, 0, 0, 0.84)`,`rgba(0, 0, 0, 0.88)`,`rgba(0, 0, 0, 0.92)`,`rgba(0, 0, 0, 0.96)`,`rgba(0, 0, 0, 0.98)`]}})),Ri,zi=e((()=>{Ri={dark:[`#0d000b`,`#2e002a`,`#42003e`,`#560053`,`#670e66`,`#781e78`,`#892b8a`,`#9a399e`,`#ab46b2`,`#bd54c6`,`#d590da`,`#edc7ee`,`#ffffff`],darkA:[`rgba(217, 0, 183, 0.06)`,`rgba(242, 0, 221, 0.19)`,`rgba(254, 0, 238, 0.26)`,`rgba(253, 0, 244, 0.34)`,`rgba(251, 34, 249, 0.41)`,`rgba(255, 64, 255, 0.47)`,`rgba(249, 78, 251, 0.55)`,`rgba(248, 92, 255, 0.62)`,`rgba(244, 100, 254, 0.7)`,`rgba(242, 108, 254, 0.78)`,`rgba(248, 167, 253, 0.86)`,`rgba(252, 212, 253, 0.94)`,`#ffffff`],light:[`#ffffff`,`#fff6fb`,`#ffe7fd`,`#fdd6fe`,`#f6c4f8`,`#eeb1f1`,`#e49ce8`,`#d886de`,`#cb6ed2`,`#bd54c6`,`#892b8a`,`#560053`,`#0d000b`],lightA:[`rgba(255, 255, 255, 0.01)`,`rgba(255, 30, 155, 0.04)`,`rgba(255, 15, 235, 0.08)`,`rgba(243, 14, 249, 0.16)`,`rgba(218, 9, 226, 0.24)`,`rgba(200, 3, 210, 0.31)`,`rgba(186, 1, 196, 0.39)`,`rgba(174, 3, 186, 0.48)`,`rgba(164, 1, 176, 0.57)`,`rgba(156, 0, 170, 0.67)`,`rgba(113, 0, 114, 0.83)`,`#560053`,`#0d000b`]}})),Bi,Vi=e((()=>{Bi={dark:[`#0f0003`,`#380015`,`#560023`,`#780032`,`#9d0042`,`#c10251`,`#d6225d`,`#e43165`,`#ee3a6a`,`#f4416c`,`#ffb0b7`,`#ffe8e8`,`#ffffff`],darkA:[`rgba(250, 0, 50, 0.06)`,`rgba(255, 0, 95, 0.22)`,`rgba(253, 0, 103, 0.34)`,`rgba(255, 0, 106, 0.47)`,`rgba(253, 0, 106, 0.62)`,`rgba(254, 3, 107, 0.76)`,`rgba(255, 40, 111, 0.84)`,`rgba(253, 54, 112, 0.9)`,`rgba(253, 62, 113, 0.94)`,`rgba(254, 68, 112, 0.96)`,`#ffb0b7`,`#ffe8e8`,`#ffffff`],light:[`#ffffff`,`#fffbff`,`#fff3f3`,`#ffe8e8`,`#ffdadb`,`#ffc7ca`,`#ffb0b7`,`#ff94a1`,`#ff6f87`,`#f4416c`,`#d6225d`,`#780032`,`#0f0003`],lightA:[`rgba(255, 255, 255, 0.01)`,`rgba(255, 55, 255, 0.02)`,`rgba(255, 15, 15, 0.05)`,`rgba(255, 25, 25, 0.1)`,`rgba(255, 8, 15, 0.15)`,`rgba(255, 0, 14, 0.22)`,`rgba(255, 0, 23, 0.31)`,`rgba(255, 0, 31, 0.42)`,`rgba(255, 2, 44, 0.57)`,`rgba(240, 2, 59, 0.75)`,`rgba(208, 1, 69, 0.87)`,`#780032`,`#0f0003`]}})),Hi,Ui=e((()=>{Hi={dark:[`#0c0100`,`#2f0a00`,`#451200`,`#5d1900`,`#762000`,`#8e2a07`,`#a53716`,`#bc4424`,`#d45132`,`#ec5e41`,`#ff9480`,`#ffcbc3`,`#ffffff`],darkA:[`rgba(240, 20, 0, 0.05)`,`rgba(247, 53, 0, 0.19)`,`rgba(246, 64, 0, 0.28)`,`rgba(251, 68, 0, 0.37)`,`rgba(251, 68, 0, 0.47)`,`rgba(254, 75, 12, 0.56)`,`rgba(254, 85, 34, 0.65)`,`rgba(254, 92, 49, 0.74)`,`rgba(255, 98, 60, 0.83)`,`rgba(254, 101, 70, 0.93)`,`#ff9480`,`#ffcbc3`,`#ffffff`],light:[`#ffffff`,`#fff7f6`,`#ffece9`,`#ffded9`,`#ffcec5`,`#ffbbaf`,`#ffa695`,`#ff8e78`,`#fb745a`,`#ec5e41`,`#a53716`,`#5d1900`,`#0c0100`],lightA:[`rgba(255, 255, 255, 0.01)`,`rgba(255, 55, 30, 0.04)`,`rgba(255, 44, 11, 0.06)`,`rgba(255, 35, 2, 0.12)`,`rgba(255, 42, 3, 0.20)`,`rgba(255, 43, 5, 0.32)`,`rgba(255, 43, 3, 0.42)`,`rgba(255, 42, 0, 0.53)`,`rgba(249, 41, 1, 0.65)`,`rgba(230, 40, 2, 0.75)`,`rgba(157, 38, 2, 0.92)`,`#5d1900`,`#0c0100`]}})),Wi,Gi=e((()=>{Wi={dark:[`#050400`,`#251d00`,`#3e3300`,`#584a00`,`#736300`,`#8e7d00`,`#ab9800`,`#c7b426`,`#e3d142`,`#ffef5c`,`#fff594`,`#fffad3`,`#ffffff`],darkA:[`rgba(250, 200, 0, 0.02)`,`rgba(247, 193, 0, 0.15)`,`rgba(248, 204, 0, 0.25)`,`rgba(251, 211, 0, 0.35)`,`rgba(250, 215, 0, 0.46)`,`rgba(254, 223, 0, 0.56)`,`rgba(255, 227, 0, 0.67)`,`rgba(255, 231, 49, 0.78)`,`rgba(255, 235, 74, 0.89)`,`#ffef5c`,`#fff594`,`#fffad3`,`#ffffff`],light:[`#ffffff`,`#fffeff`,`#fffcff`,`#fffbf1`,`#fffada`,`#fff9c2`,`#fff7aa`,`#fff592`,`#fff279`,`#ffef5c`,`#ab9800`,`#584a00`,`#050400`],lightA:[`rgba(255, 255, 255, 0.01)`,`rgba(255, 155, 255, 0.01)`,`rgba(255, 105, 255, 0.02)`,`rgba(255, 188, 22, 0.06)`,`rgba(255, 222, 8, 0.15)`,`rgba(255, 230, 1, 0.24)`,`rgba(255, 231, 5, 0.34)`,`rgba(255, 232, 2, 0.43)`,`rgba(255, 230, 2, 0.53)`,`rgba(255, 230, 0, 0.64)`,`#ab9800`,`#584a00`,`#050400`]}})),Ki,qi=e((()=>{yi(),xi(),Ci(),Ti(),Di(),ki(),ji(),Ni(),Fi(),Li(),zi(),Vi(),Ui(),Gi(),Ki={blue:vi,cyan:bi,geekblue:Si,gold:wi,gray:Ei,green:Oi,lime:Ai,magenta:Mi,orange:Pi,primary:Ii,purple:Ri,red:Bi,volcano:Hi,yellow:Wi}})),Ji,Yi,Xi,Zi,Qi=e((()=>{qi(),a(),mt(),Ji=({name:e,scale:t,appearance:n})=>{let r=n===`dark`;return{[`${e}Fill`]:t[`${n}A`][r?3:4],[`${e}FillSecondary`]:t[`${n}A`][r?2:3],[`${e}FillTertiary`]:t[`${n}A`][r?1:2],[`${e}FillQuaternary`]:t[`${n}A`][+!r],[`${e}Bg`]:t[`${n}A`][1],[`${e}BgHover`]:t[`${n}A`][2],[`${e}Border`]:t[n][4],[`${e}BorderSecondary`]:t[n][3],[`${e}BorderHover`]:t[n][r?5:3],[`${e}Hover`]:t[n][r?10:8],[`${e}`]:t[n][9],[`${e}Active`]:t[n][r?7:10],[`${e}TextHover`]:t[`${n}A`][r?10:8],[`${e}Text`]:t[`${n}A`][9],[`${e}TextActive`]:t[`${n}A`][r?7:10]}},Yi=({name:e,scale:t,appearance:n})=>{let r={};for(let[i,a]of t[n].entries())i===0||i===12||(r[`${e}${i}`]=a);for(let[i,a]of t[`${n}A`].entries())i===0||i===12||(r[`${e}${i}A`]=a);return{...r,...Ji({appearance:n,name:e,scale:t})}},Xi=e=>{let t={};for(let[n,r]of Object.entries(Ki))t={...t,...Yi({appearance:e?`dark`:`light`,name:c(n),scale:r})};return t},Zi=({isDarkMode:e,token:t})=>({...Xi(e),colorBgContainerSecondary:nn(.5,t.colorBgLayout,t.colorBgContainer)})})),$i,ea=e((()=>{$i=`lobe-ui-theme-app`})),ta,na=e((()=>{ta={dark:[`#000000`,`#1c1b1e`,`#252528`,`#2f2f32`,`#3a393d`,`#454448`,`#504f53`,`#5b5a5f`,`#67666a`,`#737177`,`#7f7d83`,`#bbb9bd`,`#ffffff`],darkA:[`rgba(255, 255, 255, 0.02)`,`rgba(233, 225, 250, 0.12)`,`rgba(231, 231, 250, 0.16)`,`rgba(235, 235, 250, 0.2)`,`rgba(242, 237, 254, 0.24)`,`rgba(238, 234, 248, 0.29)`,`rgba(242, 239, 252, 0.33)`,`rgba(239, 237, 250, 0.38)`,`rgba(245, 243, 252, 0.42)`,`rgba(245, 240, 253, 0.47)`,`rgba(244, 240, 252, 0.52)`,`rgba(253, 250, 255, 0.74)`,`#ffffff`],light:[`#ffffff`,`#fcf8fb`,`#edeaed`,`#dfdcdf`,`#d1ced2`,`#c2c0c4`,`#b4b2b7`,`#a7a4a9`,`#99979c`,`#8c8a90`,`#7f7d83`,`#4a494d`,`#111`],lightA:[`rgba(0, 0, 0, 0.015)`,`rgba(155, 22, 122, 0.03)`,`rgba(55, 22, 55, 0.09)`,`rgba(26, 5, 26, 0.14)`,`rgba(25, 10, 30, 0.2)`,`rgba(11, 3, 19, 0.25)`,`rgba(13, 7, 23, 0.31)`,`rgba(11, 2, 16, 0.36)`,`rgba(6, 1, 14, 0.41)`,`rgba(5, 1, 14, 0.46)`,`rgba(4, 0, 12, 0.51)`,`rgba(4, 2, 8, 0.72)`,`rgba(3, 2, 5, 0.9)`]}})),ra,ia=e((()=>{ra={dark:[`#000000`,`#1a1c1b`,`#232624`,`#2d302e`,`#383a38`,`#424542`,`#4d504d`,`#585c58`,`#646763`,`#70736e`,`#7c7f79`,`#b9bab5`,`#ffffff`],darkA:[`rgba(255, 255, 255, 0.02)`,`rgba(236, 255, 245, 0.11)`,`rgba(233, 253, 240, 0.15)`,`rgba(237, 253, 242, 0.19)`,`rgba(243, 252, 243, 0.23)`,`rgba(236, 246, 236, 0.28)`,`rgba(241, 250, 241, 0.32)`,`rgba(238, 249, 238, 0.37)`,`rgba(244, 251, 241, 0.41)`,`rgba(243, 250, 239, 0.46)`,`rgba(248, 254, 242, 0.5)`,`rgba(253, 255, 248, 0.73)`,`#ffffff`],light:[`#ffffff`,`#faf9f4`,`#ecebe6`,`#ddddd7`,`#cfcfc9`,`#c0c1bb`,`#b2b4ae`,`#a4a6a0`,`#969993`,`#898c86`,`#7c7f79`,`#484b48`,`#111`],lightA:[`rgba(0, 0, 0, 0.015)`,`rgba(155, 135, 35, 0.05)`,`rgba(65, 55, 5, 0.1)`,`rgba(43, 43, 5, 0.16)`,`rgba(37, 37, 10, 0.22)`,`rgba(22, 25, 3, 0.27)`,`rgba(14, 21, 2, 0.32)`,`rgba(16, 21, 5, 0.38)`,`rgba(11, 18, 4, 0.43)`,`rgba(9, 15, 3, 0.48)`,`rgba(8, 13, 2, 0.53)`,`rgba(1, 5, 1, 0.72)`,`rgba(1, 3, 2, 0.9)`]}})),aa,oa=e((()=>{aa={dark:[`#000000`,`#1a1b1c`,`#232526`,`#2d2f30`,`#383a3a`,`#424545`,`#4d5050`,`#585c5c`,`#636766`,`#6e7371`,`#797f7c`,`#b5bab6`,`#ffffff`],darkA:[`rgba(255, 255, 255, 0.02)`,`rgba(236, 246, 255, 0.11)`,`rgba(233, 246, 253, 0.15)`,`rgba(237, 248, 253, 0.19)`,`rgba(243, 252, 252, 0.23)`,`rgba(236, 246, 246, 0.28)`,`rgba(241, 250, 250, 0.32)`,`rgba(238, 249, 249, 0.37)`,`rgba(241, 251, 248, 0.41)`,`rgba(239, 250, 246, 0.46)`,`rgba(242, 254, 248, 0.5)`,`rgba(248, 255, 250, 0.73)`,`rgba(255, 255, 255, 1)`],light:[`#ffffff`,`#f5faf4`,`#e7ece6`,`#d7ddd7`,`#c9cfc9`,`#bbc1bc`,`#aeb4b0`,`#a0a6a2`,`#939996`,`#868c89`,`#797f7c`,`#484b4b`,`#111111`],lightA:[`rgba(0, 0, 0, 0.015)`,`rgba(55, 155, 35, 0.05)`,`rgba(15, 65, 5, 0.1)`,`rgba(5, 43, 5, 0.16)`,`rgba(10, 37, 10, 0.22)`,`rgba(3, 25, 6, 0.27)`,`rgba(2, 21, 9, 0.32)`,`rgba(5, 21, 10, 0.38)`,`rgba(4, 18, 11, 0.43)`,`rgba(3, 15, 9, 0.48)`,`rgba(2, 13, 7, 0.53)`,`rgba(1, 5, 5, 0.72)`,`rgba(1, 2, 3, 0.9)`]}})),sa,ca=e((()=>{sa={dark:[`#000000`,`#1c1c18`,`#262521`,`#30302b`,`#3a3a35`,`#45453f`,`#505049`,`#5c5b54`,`#67675f`,`#73726a`,`#7f7e76`,`#bcbab2`,`#ffffff`],darkA:[`rgba(255, 255, 255, 0.02)`,`rgba(255, 255, 218, 0.11)`,`rgba(253, 247, 220, 0.15)`,`rgba(253, 253, 226, 0.19)`,`rgba(252, 252, 230, 0.23)`,`rgba(246, 246, 225, 0.28)`,`rgba(250, 250, 228, 0.32)`,`rgba(249, 246, 227, 0.37)`,`rgba(251, 251, 232, 0.41)`,`rgba(250, 248, 230, 0.46)`,`rgba(254, 252, 236, 0.5)`,`rgba(254, 251, 241, 0.74)`,`rgba(255, 252, 245, 0.99)`],light:[`#ffffff`,`#fcf9f3`,`#edebe4`,`#dfddd5`,`#d1cfc7`,`#c3c1b9`,`#b5b3ab`,`#a7a69d`,`#999890`,`#8c8b83`,`#7f7e76`,`#4b4a44`,`#111`],lightA:[`rgba(0, 0, 0, 0.015)`,`rgba(195, 135, 15, 0.05)`,`rgba(91, 73, 10, 0.11)`,`rgba(67, 55, 8, 0.17)`,`rgba(46, 37, 0, 0.22)`,`rgba(41, 34, 5, 0.28)`,`rgba(31, 25, 0, 0.33)`,`rgba(29, 27, 4, 0.39)`,`rgba(23, 21, 3, 0.44)`,`rgba(20, 18, 2, 0.49)`,`rgba(18, 16, 1, 0.54)`,`rgba(12, 10, 2, 0.74)`,`rgba(6, 6, 1, 0.91)`]}})),la,ua=e((()=>{la={dark:[`#000000`,`#1b1c1d`,`#242527`,`#2e2f32`,`#383a3c`,`#434547`,`#4e5052`,`#595b5e`,`#64676a`,`#707276`,`#7b7e82`,`#b8babc`,`#ffffff`],darkA:[`rgba(255, 255, 255, 0.02)`,`rgba(225, 233, 242, 0.12)`,`rgba(225, 231, 244, 0.16)`,`rgba(230, 235, 250, 0.2)`,`rgba(233, 242, 250, 0.24)`,`rgba(239, 246, 254, 0.28)`,`rgba(236, 242, 248, 0.33)`,`rgba(241, 246, 254, 0.37)`,`rgba(238, 245, 252, 0.42)`,`rgba(238, 243, 251, 0.47)`,`rgba(241, 247, 255, 0.51)`,`rgba(249, 251, 254, 0.74)`,`#ffffff`],light:[`#ffffff`,`#f9f9fa`,`#ebebec`,`#dcddde`,`#cecfd0`,`#bfc1c3`,`#b1b3b5`,`#a4a6a8`,`#96989b`,`#898b8e`,`#7b7e82`,`#484a4d`,`#111`],lightA:[`rgba(0, 0, 0, 0.015)`,`rgba(55, 55, 88, 0.03)`,`rgba(5, 5, 17, 0.08)`,`rgba(5, 12, 19, 0.14)`,`rgba(10, 15, 20, 0.2)`,`rgba(9, 17, 24, 0.26)`,`rgba(3, 10, 16, 0.31)`,`rgba(2, 8, 13, 0.36)`,`rgba(5, 10, 17, 0.42)`,`rgba(4, 8, 15, 0.47)`,`rgba(1, 7, 15, 0.52)`,`rgba(1, 4, 8, 0.72)`,`rgba(2, 3, 4, 0.9)`]}})),da,fa=e((()=>{na(),ia(),oa(),ca(),ua(),da={mauve:ta,olive:ra,sage:aa,sand:sa,slate:la}})),pa,ma,ha=e((()=>{a(),pa=({type:e,scale:t,appearance:n})=>{let r=p(e),i=n===`dark`;return{[`color${r}Fill`]:t[`${n}A`][i?3:4],[`color${r}FillSecondary`]:t[`${n}A`][i?2:3],[`color${r}FillTertiary`]:t[`${n}A`][i?1:2],[`color${r}FillQuaternary`]:t[`${n}A`][+!i],[`color${r}Bg`]:t[n][1],[`color${r}BgHover`]:t[n][2],[`color${r}Border`]:t[n][4],[`color${r}BorderHover`]:t[n][i?5:3],[`color${r}Hover`]:t[n][i?10:8],[`color${r}`]:t[n][9],[`color${r}Active`]:t[n][i?7:10],[`color${r}TextHover`]:t[n][i?10:8],[`color${r}Text`]:t[n][9],[`color${r}TextActive`]:t[n][i?7:10]}},ma=({scale:e,appearance:t})=>({colorBgContainer:t===`dark`?e[t][1]:e[t][0],colorBgElevated:t===`dark`?e[t][2]:e[t][0],colorBgLayout:t===`dark`?e[t][0]:e[t][1],colorBgMask:e.lightA[8],colorBgSpotlight:e[t][4],colorBorder:e[t][3],colorBorderSecondary:e[t][2],colorFill:e[`${t}A`][3],colorFillQuaternary:e[`${t}A`][0],colorFillSecondary:e[`${t}A`][2],colorFillTertiary:e[`${t}A`][1],colorText:e[t][12],colorTextQuaternary:e[t][6],colorTextSecondary:e[t][10],colorTextTertiary:e[t][8]})})),ga,_a,va,ya,ba,xa,Sa,Ca=e((()=>{yi(),Ti(),Di(),ji(),Li(),Vi(),ha(),ga=pa({appearance:`dark`,scale:Ii,type:`Primary`}),_a=ma({appearance:`dark`,scale:Ei}),va=pa({appearance:`dark`,scale:Ai,type:`Success`}),ya=pa({appearance:`dark`,scale:wi,type:`Warning`}),ba=pa({appearance:`dark`,scale:Bi,type:`Error`}),xa=pa({appearance:`dark`,scale:vi,type:`Info`}),Sa={...ga,..._a,...va,...ya,...ba,...xa,colorLink:xa.colorInfoText,colorLinkActive:xa.colorInfoTextActive,colorLinkHover:xa.colorInfoTextHover,colorTextLightSolid:_a.colorBgLayout}})),wa,Ta=e((()=>{qi(),fa(),Qi(),ha(),Ca(),wa=(e,t)=>{let n=e.primaryColor,r=e.neutralColor,i={},a={},o=Ki[n];o&&(i=pa({appearance:`dark`,scale:o,type:`Primary`}));let s=da[r];return s&&(a=ma({appearance:`dark`,scale:s})),{...t,...Sa,...i,...a,...Xi(!0)}}})),Ea,Da,Oa,ka,Aa,ja,Ma,Na=e((()=>{Ci(),Ti(),Di(),ki(),Li(),Ui(),ha(),Ea=pa({appearance:`light`,scale:Ii,type:`Primary`}),Da=ma({appearance:`light`,scale:Ei}),Oa=pa({appearance:`light`,scale:Oi,type:`Success`}),ka=pa({appearance:`light`,scale:wi,type:`Warning`}),Aa=pa({appearance:`light`,scale:Hi,type:`Error`}),ja=pa({appearance:`light`,scale:Si,type:`Info`}),Ma={...Ea,...Da,...Oa,...ka,...Aa,...ja,colorLink:ja.colorInfoText,colorLinkActive:ja.colorInfoTextActive,colorLinkHover:ja.colorInfoTextHover,colorTextLightSolid:Da.colorBgLayout}})),Pa,Fa=e((()=>{qi(),fa(),Qi(),ha(),Na(),Pa=(e,t)=>{let n=e.primaryColor,r=e.neutralColor,i={},a={},o=Ki[n];o&&(i=pa({appearance:`light`,scale:o,type:`Primary`}));let s=da[r];return s&&(a=ma({appearance:`light`,scale:s})),{...t,...Ma,...i,...a,...Xi(!1)}}})),Ia,La,Ra,za,Ba,Va=e((()=>{Ia=e=>e.map(e=>e.includes(` `)?`"${e}"`:e).join(`,`),La=[`/* EMOJI */`,`Apple Color Emoji`,`Segoe UI Emoji`,`Segoe UI Symbol`,`Noto Color Emoji`],Ra=[`Geist`,`-apple-system`,`BlinkMacSystemFont`,`Segoe UI Variable Display`,`Segoe UI`,`Roboto`,`Helvetica Neue`,`Arial`],za=[`/* SC */`,`HarmonyOS Sans SC`,`PingFang SC`,`Hiragino Sans GB`,`Microsoft YaHei UI`,`Microsoft YaHei`,`Source Han Sans SC`,`Noto Sans CJK SC`],Ba={borderRadius:8,borderRadiusLG:12,borderRadiusSM:6,borderRadiusXS:4,controlHeight:36,fontFamily:Ia([Ra,za,[`/* FALLBACK */`,`ui-sans-serif`,`system-ui`,`sans-serif`],La].flat()),fontFamilyCode:Ia([[`Geist Mono`,`ui-monospace`,`SFMono-Regular`,`SF Mono`,`Menlo`,`Cascadia Code`,`Consolas`,`Liberation Mono`],za,[`/* FALLBACK */`,`monospace`],La].flat())}})),Ha,Ua=e((()=>{Ha={dark:{boxShadow:`0 40px 80px rgba(0, 0, 0, 0.09), 0 20px 40px rgba(0, 0, 0, 0.08), 0 10px 20px rgba(0, 0, 0, 0.06), 0 5px 10px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.03)`,boxShadowSecondary:`0 17.5px 23.4px rgba(0, 0, 0, 0.06), 0 9.4px 12.5px rgba(0, 0, 0, 0.05), 0 5.25px 7px rgba(0, 0, 0, 0.03), 0 2.8px 3.7px -2px rgba(0, 0, 0, 0.02), 0 1.2px 1.5px rgba(0, 0, 0, 0.02)`,boxShadowTertiary:`0 1px 2px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.03)`},light:{boxShadow:`0 40px 80px rgba(0, 0, 0, 0.06), 0 20px 40px rgba(0, 0, 0, 0.05), 0 10px 20px rgba(0, 0, 0, 0.04), 0 5px 10px rgba(0, 0, 0, 0.03), 0 2px 4px rgba(0, 0, 0, 0.02)`,boxShadowSecondary:`0 17.5px 23.4px rgba(0, 0, 0, 0.04), 0 9.4px 12.5px rgba(0, 0, 0, 0.03), 0 5.25px 7px rgba(0, 0, 0, 0.02), 0 2.8px 3.7px -2px rgba(0, 0, 0, 0.01), 0 1.2px 1.5px rgba(0, 0, 0, 0.01)`,boxShadowTertiary:`0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.02)`}}})),Wa,Ga=e((()=>{Ta(),Fa(),Va(),Ua(),Wa=({neutralColor:e,appearance:t,primaryColor:n})=>{let r=t===`dark`;return{algorithm:r?wa:Pa,components:{Button:{contentFontSizeSM:12},DatePicker:{activeBorderColor:Ba.colorBorder,hoverBorderColor:Ba.colorBorder},Input:{activeBorderColor:Ba.colorBorder,hoverBorderColor:Ba.colorBorder},InputNumber:{activeBorderColor:Ba.colorBorder,hoverBorderColor:Ba.colorBorder},Mentions:{activeBorderColor:Ba.colorBorder,hoverBorderColor:Ba.colorBorder},Select:{activeBorderColor:Ba.colorBorder,hoverBorderColor:Ba.colorBorder}},token:{...Ba,...Ha[r?`dark`:`light`],neutralColor:e,primaryColor:n}}}})),Ka,qa,Ja,Ya=e((()=>{Ka=t(r(),1),qa=t(i(),1),x(),L(),Ja=(0,Ka.memo)(({children:e})=>(0,qa.jsx)(b,{theme:{components:{Button:{contentFontSizeSM:12},DatePicker:{activeBorderColor:I.colorBorder,hoverBorderColor:I.colorBorder},Input:{activeBorderColor:I.colorBorder,hoverBorderColor:I.colorBorder},InputNumber:{activeBorderColor:I.colorBorder,hoverBorderColor:I.colorBorder},Mentions:{activeBorderColor:I.colorBorder,hoverBorderColor:I.colorBorder},Select:{activeBorderColor:I.colorBorder,hoverBorderColor:I.colorBorder}}},children:e}))})),Xa,Za=e((()=>{Xa=e=>`oklch(from ${e} clamp(0, (l - 0.62) * -1000, 1) 0 h / 1)`})),Qa,$a=e((()=>{Za(),L(),mt(),Qa=e=>{let t=Xa(e.colorPrimary);return It`
    .${e.prefixCls}-checkbox-inner:after {
      border-color: ${Xa(e.colorPrimary)} !important;
    }

    .${e.prefixCls}-btn {
      box-shadow: none;
    }

    .${e.prefixCls}-btn-primary:not(:disabled) {
      color: ${t} !important;

      &:hover {
        color: ${t} !important;
      }

      &:active {
        color: ${t} !important;
      }
    }

    .${e.prefixCls}-tooltip {
      --antd-arrow-background-color: ${e.colorBgElevated};

      max-width: 320px;
    }

    .${e.prefixCls}-tooltip-arrow::before {
      background: ${e.colorBgElevated} !important;
    }

    .${e.prefixCls}-tooltip-arrow::after {
      box-shadow: 0 0 0 1px ${e.colorBorderSecondary} !important;
    }

    .${e.prefixCls}-tooltip-container {
      user-select: none;

      display: flex;
      gap: 6px;
      align-items: center;

      min-width: unset;
      min-height: unset;
      padding-block: 4px;
      padding-inline: 8px;
      border: 1px solid ${e.colorBorderSecondary} !important;
      border-radius: ${e.borderRadiusSM}px !important;

      font-size: ${e.fontSizeSM}px;
      line-height: 1.2;
      color: ${e.colorTextSecondary} !important;
      word-break: break-word;
      white-space: normal;

      background: ${e.colorBgElevated} !important;
      box-shadow:
        0 1px 2px 0 rgba(0, 0, 0, 3%),
        0 1px 6px -1px rgba(0, 0, 0, 2%),
        0 2px 4px 0 rgba(0, 0, 0, 2%) !important;
    }

    .${e.prefixCls}-switch-handle::before {
      background: ${e.colorBgContainer} !important;
    }

    .${e.prefixCls}-image-preview-close,
      .${e.prefixCls}-image-preview-switch-right,
      .${e.prefixCls}-image-preview-switch-left {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 32px;
      height: 32px;
      padding: 0;

      background: ${Se(e.colorBgMask,.1)};

      border-radius: ${e.borderRadiusLG}px;

      ${e.stylish.blur};
    }

    .${e.prefixCls}-dropdown-menu, .${e.prefixCls}-select-dropdown {
      border-radius: ${e.borderRadius}px !important;
      box-shadow:
        0 0 15px 0 #00000008,
        0 2px 30px 0 #00000014,
        0 0 0 1px ${e.isDarkMode?e.colorFillTertiary:e.colorBorder} inset !important;
    }

    .${e.prefixCls}-modal-content {
      border: 1px solid ${e.colorBorderSecondary} !important;
    }

    .${e.prefixCls}-radio-wrapper
      .${e.prefixCls}-radio-checked
      .${e.prefixCls}-radio-inner:after {
      background: ${t};
    }
  `}})),eo,to=e((()=>{eo={ContextTrigger:`lobe-context-trigger`,DropdownMenuTrigger:`lobe-dropdown-menu-trigger`}})),no,ro=e((()=>{to(),L(),no=e=>It`
  :root {
    /* Outer hairline painted on the page behind an elevated surface. Dark alpha is much
       higher on purpose: a white hairline lightens toward a raised surface, and below ~16%
       it lands on the surface's own colour and the edge vanishes. */
    --lobe-ring: 0 0 0 1px ${e.isDarkMode?`rgb(255 255 255 / 18%)`:`rgb(0 0 0 / 5%)`};
  }

  @layer lobe-popup {
    .${eo.ContextTrigger}[data-popup-open],
      .${eo.DropdownMenuTrigger}[data-popup-open] {
      background: ${e.colorFillTertiary};
    }
  }

  @layer lobe-base {
    :where(.lobe-flex) {
      /* Define defaults on the element itself to avoid CSS variable inheritance leaking to nested Flex */
      --lobe-flex: 0 1 auto;
      --lobe-flex-direction: column;
      --lobe-flex-wrap: nowrap;
      --lobe-flex-justify: flex-start;
      --lobe-flex-align: stretch;
      --lobe-flex-width: auto;
      --lobe-flex-height: auto;
      --lobe-flex-padding: 0;

      /* Keep padding-inline/block aligned with padding by default, and prevent inheriting from parent */
      --lobe-flex-padding-inline: var(--lobe-flex-padding);
      --lobe-flex-padding-block: var(--lobe-flex-padding);
      --lobe-flex-gap: 0;

      display: flex;
      flex: var(--lobe-flex);
      flex-flow: var(--lobe-flex-direction) var(--lobe-flex-wrap);
      gap: var(--lobe-flex-gap);
      align-items: var(--lobe-flex-align);
      justify-content: var(--lobe-flex-justify);

      width: var(--lobe-flex-width);
      height: var(--lobe-flex-height);
      padding: var(--lobe-flex-padding);
      padding-block: var(--lobe-flex-padding-block);
      padding-inline: var(--lobe-flex-padding-inline);
    }

    .lobe-flex-hidden {
      display: none;
    }
  }

  /* Brand Loading */
  @keyframes draw {
    0% {
      stroke-dashoffset: 1000;
    }

    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fill {
    30% {
      fill-opacity: 0.05;
    }

    100% {
      fill-opacity: 1;
    }
  }

  .lobe-brand-loading path {
    fill: currentcolor;
    fill-opacity: 0;
    stroke: currentcolor;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    stroke-width: 0.25em;

    animation:
      draw 2s cubic-bezier(0.4, 0, 0.2, 1) infinite,
      fill 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`})),io,ao=e((()=>{L(),io=e=>It`
  :root {
    --font-settings: 'cv01', 'tnum', 'kern';
    --font-variations: 'opsz' auto, tabular-nums;

    /* Real Geist italic for Latin; synthesize style for CJK fallback faces. */
    font-synthesis: style;
    text-autospace: normal;
  }

  html {
    overscroll-behavior: none;
    color-scheme: ${e.isDarkMode?`dark`:`light`};
  }

  body {
    overflow: hidden auto;

    min-height: 100vh;
    margin: 0;
    padding: 0;

    font-family: ${e.fontFamily};
    font-size: ${e.fontSize}px;
    font-feature-settings: var(--font-settings);
    font-variation-settings: var(--font-variations);
    font-optical-sizing: auto;
    font-kerning: normal;
    font-variant-ligatures: common-ligatures contextual;
    font-variant-numeric: tabular-nums;
    font-size-adjust: from-font;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1;
    color: ${e.colorTextBase};
    text-wrap: pretty;
    text-size-adjust: 100%;
    text-rendering: optimizelegibility;
    overflow-wrap: anywhere;
    vertical-align: baseline;

    background-color: ${e.colorBgLayout};

    font-synthesis: style;

    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
  }

  code,
  kbd,
  samp,
  pre {
    font-family: ${e.fontFamilyCode} !important;
    font-feature-settings:
      'liga' 0,
      'calt' 0;
    font-variant-ligatures: none;

    span {
      font-family: ${e.fontFamilyCode} !important;
    }
  }

  ::selection {
    color: #000;
    background: ${e.yellow9};

    -webkit-text-fill-color: unset !important;
  }

  * {
    scrollbar-color: ${e.colorFill} transparent;
    scrollbar-width: thin;
    box-sizing: border-box;
    vertical-align: baseline;
  }
`})),oo,so,co=e((()=>{$a(),ro(),ao(),L(),oo=Et(({theme:e})=>io(e)),so=Et(({theme:e})=>[no(e),Qa(e)])})),lo,uo,fo,po,mo,ho=e((()=>{hi(),_i(),Qi(),mn(),ea(),Dt(),Ga(),Ya(),co(),lo=t(r(),1),uo=t(i(),1),x(),L(),a(),fo=(0,lo.memo)(({appId:e=$i,children:t,customStylish:n,customToken:r,enableCustomFonts:i=!0,enableGlobalStyle:a=!0,customFonts:o,customTheme:s={},className:c,style:l,theme:u,...f})=>{let p=pi(),[m,h]=(0,lo.useState)(null),_=(0,lo.useMemo)(()=>o||[p({path:`css/index.css`,pkg:`@lobehub/webfont-geist-mono`,version:`1.0.0`}),p({path:`css/index-full.css`,pkg:`@lobehub/webfont-geist`,version:`1.0.0`}),p({path:`css/index.css`,pkg:`@lobehub/webfont-harmony-sans-sc`,version:`1.0.0`}),p({path:`dist/katex.min.css`,pkg:`katex`,version:`0.18.1`})],[o,p]),v=(0,lo.useCallback)(e=>({...gi(e),...n?.(e)}),[n]),y=(0,lo.useCallback)(e=>({...Zi(e),...r?.(e)}),[r]),b=(0,lo.useCallback)(e=>d(Wa({appearance:e,neutralColor:s.neutralColor,primaryColor:s.primaryColor}),u),[s.primaryColor,s.neutralColor,u]);return(0,uo.jsxs)(uo.Fragment,{children:[i&&_?.length>0&&_.map(e=>(0,uo.jsx)(Ot,{url:e},e)),(0,uo.jsx)(bt,{customStylish:v,customToken:y,theme:b,...f,children:(0,uo.jsxs)(Ja,{children:[(0,uo.jsx)(so,{}),a&&(0,uo.jsx)(oo,{}),(0,uo.jsx)(g,{className:c,style:{isolation:`isolate`,minHeight:`inherit`,width:`inherit`,...l},children:(0,uo.jsx)(`div`,{id:e,style:mo,children:(0,uo.jsxs)(fn,{value:m,children:[t,(0,uo.jsx)(`div`,{"data-lobe-portal-host":``,ref:h,style:po})]})})})]})})]})}),fo.displayName=`LobeThemeProvider`,po={height:0,left:0,position:`fixed`,right:0,top:0,zIndex:1100},mo={display:`contents`}})),go,_o,vo,yo,bo=e((()=>{go=(e,t)=>{if(t)return`row`;switch(e){case`horizontal`:return`row`;case`horizontal-reverse`:return`row-reverse`;case`vertical`:default:return`column`;case`vertical-reverse`:return`column-reverse`}},_o=e=>{if(e)return[`space-between`,`space-around`,`space-evenly`].includes(e)},vo=(e,t)=>go(e,t)===`row`,yo=e=>typeof e==`number`?`${e}px`:e})),xo,So,Co,wo,To=e((()=>{bo(),xo=t(r(),1),So=t(i(),1),Co=({visible:e,flex:t,gap:n,direction:r,horizontal:i,align:a,justify:o,distribution:s,height:c,width:l,allowShrink:u,padding:d,paddingInline:f,paddingBlock:p,prefixCls:m,as:h=`div`,className:g,style:_,children:v,wrap:y,ref:b,...x})=>{let S=o||s,C=vo(r,i)&&!l&&_o(S)?`100%`:yo(l),w={...t===void 0?{}:{"--lobe-flex":String(t)},...r||i?{"--lobe-flex-direction":go(r,i)}:{},...y===void 0?{}:{"--lobe-flex-wrap":y},...S===void 0?{}:{"--lobe-flex-justify":S},...a===void 0?{}:{"--lobe-flex-align":a},...C===void 0?{}:{"--lobe-flex-width":C},...c===void 0?{}:{"--lobe-flex-height":yo(c)},...d===void 0?{}:{"--lobe-flex-padding":yo(d)},...f===void 0?{}:{"--lobe-flex-padding-inline":yo(f)},...p===void 0?{}:{"--lobe-flex-padding-block":yo(p)},...n===void 0?{}:{"--lobe-flex-gap":yo(n)},...u?{minWidth:0}:{},..._},T=`lobe-flex`,E=[T,e===!1?`${T}--hidden`:void 0,m?`${m}-flex`:void 0,g].filter(Boolean).join(` `);return(0,So.jsx)(h,{ref:b,...x,className:E,style:w,children:v})},wo=(0,xo.memo)(Co)})),Eo,V,Do=e((()=>{L(),Eo=Xt`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,V=Ht(({css:e,cssVar:t})=>({active:e`
    color: ${t.colorText};
    background: ${t.colorFillSecondary};

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFill};
    }
  `,blur:e`
    backdrop-filter: saturate(150%) blur(10px);
  `,blurStrong:e`
    backdrop-filter: saturate(150%) blur(36px);
  `,bottomScrollbar:e`
    ::-webkit-scrollbar {
      width: 0;
      height: 4px;
      background-color: transparent;

      &-thumb {
        border-radius: 4px;
        background-color: ${t.colorFill};
        transition: background-color 500ms ${t.motionEaseOut};
      }

      &-corner {
        display: none;
        width: 0;
        height: 0;
      }
    }
  `,disabled:e`
    cursor: not-allowed;
    opacity: 0.5;
  `,gradientAnimation:e`
    border-radius: inherit;
    background-image: linear-gradient(
      -45deg,
      ${t.gold},
      ${t.magenta},
      ${t.geekblue},
      ${t.cyan}
    );
    background-size: 400% 400%;
    animation: 5s ${Eo} 5s ease infinite;
  `,noScrollbar:e`
    ::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
      background-color: transparent;
    }
  `,resetLinkColor:e`
    cursor: pointer;
    color: ${t.colorTextSecondary};

    &:hover {
      color: ${t.colorText};
    }
  `,shadow:e`
    box-shadow:
      0 1px 0 -1px ${t.colorBorder},
      0 1px 2px -0.5px ${t.colorBorder},
      0 2px 2px -1px ${t.colorBorderSecondary},
      0 3px 6px -4px ${t.colorBorderSecondary};
  `,variantBorderless:e`
    border: none;
    background: none;
    box-shadow: none;

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `,variantBorderlessDanger:e`
    border: none;
    background: none;
    box-shadow: none;

    &:hover {
      background: ${t.colorErrorBg};
      box-shadow: inset 0 0 0 1px ${t.colorErrorBg};
    }
  `,variantBorderlessWithoutHover:e`
    border: none;
    background: none;
    box-shadow: none;
  `,variantFilled:e`
    background: ${t.colorFillTertiary};

    &:hover {
      background: ${t.colorFillSecondary};
    }
  `,variantFilledDanger:e`
    background: ${t.colorErrorBg};

    &:hover {
      background: ${t.colorErrorBgHover};
    }
  `,variantFilledWithoutHover:e`
    background: ${t.colorFillTertiary};
  `,variantOutlined:e`
    border: 1px solid ${t.colorBorderSecondary};
    background: ${t.colorBgContainer};

    &:hover {
      border: 1px solid ${t.colorBorder};
      background: ${t.colorBgContainer};
    }
  `,variantOutlinedDanger:e`
    border: 1px solid ${t.colorErrorBorder};

    &:hover {
      border: 1px solid ${t.colorErrorBorder};
    }
  `,variantOutlinedWithoutHover:e`
    border: 1px solid ${t.colorBorderSecondary};
    background: ${t.colorBgContainer};
  `}))})),Oo,ko,Ao=e((()=>{Do(),L(),Nt(),Oo=Ht(({css:e,cssVar:t})=>({borderless:V.variantBorderlessWithoutHover,clickableBorderless:V.variantBorderless,clickableFilled:V.variantFilled,clickableOutlined:V.variantOutlined,clickableRoot:e`
      cursor: pointer;
    `,filled:V.variantFilledWithoutHover,glass:V.blur,outlined:V.variantOutlinedWithoutHover,root:e`
      position: relative;
      border-radius: ${t.borderRadius};
    `,shadow:V.shadow})),ko=gt(Oo.root,{compoundVariants:[{class:Oo.clickableBorderless,clickable:!0,variant:`borderless`},{class:Oo.clickableFilled,clickable:!0,variant:`filled`},{class:Oo.clickableOutlined,clickable:!0,variant:`outlined`}],defaultVariants:{clickable:!1,glass:!1,shadow:!1,variant:`filled`},variants:{variant:{filled:Oo.filled,outlined:Oo.outlined,borderless:Oo.borderless},clickable:{false:null,true:Oo.clickableRoot},glass:{false:null,true:Oo.glass},shadow:{false:null,true:Oo.shadow}}})})),jo,Mo,No=e((()=>{To(),Ao(),jo=t(i(),1),L(),Mo=({className:e,variant:t=`filled`,shadow:n,glass:r,children:i,clickable:a,ref:o,...s})=>(0,jo.jsx)(wo,{className:F(ko({clickable:a,glass:r,shadow:n,variant:t}),e),ref:o,...s,children:i}),Mo.displayName=`Block`})),Po,Fo,Io=e((()=>{To(),Po=t(i(),1),Fo=({children:e,ref:t,...n})=>(0,Po.jsx)(wo,{...n,align:`center`,justify:`center`,ref:t,children:e})})),Lo,Ro,zo,Bo,Vo=e((()=>{hi(),Lo=t(r(),1),Ro=t(i(),1),zo=e=>(0,Lo.memo)(t=>(0,Lo.createElement)(e,t)),Bo=({unoptimized:e,...t})=>{let n=(0,Lo.use)(ci),r=n?.imgAs||`img`;return(0,Ro.jsx)((0,Lo.useMemo)(()=>zo(r),[r]),{unoptimized:e===void 0?n?.imgUnoptimized:e,...t})},Bo.displayName=`Img`})),Ho,Uo=e((()=>{je(),Ho={container:N(`acss-ew242d`,[`.acss-ew242d{position:relative;line-height:1;text-align:center;}`],`
      position: relative;
      line-height: 1;
      text-align: center;
    `)}}));function Wo(e){return[...e].map(e=>e?.codePointAt(0)?.toString(16)).join(`-`)}function Go(e){let t=Wo(e).split(`-`)[0];return t<`1f469`?`@lobehub/fluent-emoji-anim-1`:t>=`1f469`&&t<`1f620`?`@lobehub/fluent-emoji-anim-2`:t>=`1f620`&&t<`1f9a0`?`@lobehub/fluent-emoji-anim-3`:`@lobehub/fluent-emoji-anim-4`}var Ko,qo=e((()=>{Ko=(e,t)=>{let n=[`anim`,`3d`].includes(t)?`webp`:`svg`;switch(t){case`raw`:return null;case`anim`:return{path:`assets/${Wo(e)}.${n}`,pkg:Go(e),version:`latest`};case`3d`:return{path:`assets/${Wo(e)}.${n}`,pkg:`@lobehub/fluent-emoji-3d`,version:`latest`};case`flat`:return{path:`assets/${Wo(e)}.${n}`,pkg:`@lobehub/fluent-emoji-flat`,version:`latest`};case`modern`:return{path:`assets/${Wo(e)}.${n}`,pkg:`@lobehub/fluent-emoji-modern`,version:`latest`};case`mono`:return{path:`assets/${Wo(e)}.${n}`,pkg:`@lobehub/fluent-emoji-mono`,version:`latest`}}}})),Jo,Yo,Xo,Zo=e((()=>{hi(),Io(),Vo(),Uo(),qo(),Jo=t(r(),1),Yo=t(i(),1),L(),Xo=({emoji:e,className:t,style:n,type:r=`3d`,size:i=40,unoptimized:a,ref:o,...s})=>{let[c,l]=(0,Jo.useState)(!1),u=pi(),d=(0,Jo.useMemo)(()=>Ko(e,r),[r,e]);return r===`raw`||!d||c?(0,Yo.jsx)(Fo,{className:F(Ho.container,t),flex:`none`,height:i,ref:o,role:`img`,style:{fontSize:i*.9,...n},width:i,...s,children:e}):(0,Yo.jsx)(Bo,{alt:e,className:t,height:i,loading:`lazy`,ref:o,src:u(d),style:{flex:`none`,...n},unoptimized:a,width:i,onError:()=>l(!0),...s})},Xo.displayName=`FluentEmoji`})),Qo,$o=e((()=>{Qo={large:40,middle:32,small:24}})),es,H,ts=e((()=>{$o(),Wn(),L(),es={large:16,middle:14,small:8},H=Ht(({css:e,cssVar:t})=>({base:e`
    cursor: pointer;

    position: relative;

    display: inline-flex;
    gap: 6px;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    border: 1px solid ${t.colorBorder};

    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    white-space: nowrap;

    transition:
      color 160ms cubic-bezier(0.32, 0.72, 0, 1),
      background 160ms cubic-bezier(0.32, 0.72, 0, 1),
      border-color 160ms cubic-bezier(0.32, 0.72, 0, 1),
      box-shadow 160ms cubic-bezier(0.32, 0.72, 0, 1);

    ${Hn};

    &:disabled,
    &[aria-disabled='true'] {
      pointer-events: none;
      cursor: not-allowed;
      opacity: 0.5;
    }
  `,sizeSmall:e`
    --button-padding-inline: ${es.small}px;

    height: ${Qo.small}px;
    padding-inline: var(--button-padding-inline);
    border-radius: ${t.borderRadiusSM};
    font-size: 12px;
  `,sizeMiddle:e`
    --button-padding-inline: ${es.middle}px;

    height: ${Qo.middle}px;
    padding-inline: var(--button-padding-inline);
    border-radius: ${t.borderRadiusSM};
    font-size: 13px;
  `,sizeLarge:e`
    --button-padding-inline: ${es.large}px;

    height: ${Qo.large}px;
    padding-inline: var(--button-padding-inline);
    border-radius: ${t.borderRadius};
    font-size: 14px;
  `,outdentStart:e`
    margin-inline-start: calc(var(--button-padding-inline) * -1);
  `,outdentEnd:e`
    margin-inline-end: calc(var(--button-padding-inline) * -1);
  `,shapeCircle:e`
    padding-inline: 0;
    border-radius: 50%;
  `,shapeRound:e`
    border-radius: 999px;
  `,block:e`
    width: 100%;
  `,iconEnd:e`
    flex-direction: row-reverse;
  `,iconOnlySmall:e`
    --button-padding-inline: 0px;

    width: 24px;
    padding-inline: 0;
  `,iconOnlyMiddle:e`
    --button-padding-inline: 0px;

    width: 32px;
    padding-inline: 0;
  `,iconOnlyLarge:e`
    --button-padding-inline: 0px;

    width: 40px;
    padding-inline: 0;
  `,iconBox:e`
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `,spinnerSlot:e`
    overflow: hidden;

    width: 0;
    margin-inline-end: -6px;

    opacity: 0;

    transition:
      width 380ms cubic-bezier(0.22, 1, 0.36, 1),
      margin 380ms cubic-bezier(0.22, 1, 0.36, 1),
      opacity 260ms cubic-bezier(0.22, 1, 0.36, 1);
  `,spinnerSlotEnd:e`
    margin-inline: -6px 0;
  `,spinnerSlotShow:e`
    width: 12px;
    margin-inline: 0;
    opacity: 1;
  `,variantDefault:e`
    background: ${t.colorBgContainer};

    /* &:hover/&:active included so the anchor form outranks antd's global a:hover/a:active link color */
    &,
    &:hover,
    &:active {
      color: ${t.colorText};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${t.colorPrimaryBorder};
      color: ${t.colorPrimaryText};
    }
  `,variantPrimary:e`
    border-color: ${t.colorPrimary};
    background: ${t.colorPrimary};

    &,
    &:hover,
    &:active {
      color: ${t.colorBgLayout};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${t.colorPrimaryHover};
      background: ${t.colorPrimaryHover};
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      border-color: ${t.colorPrimaryActive};
      background: ${t.colorPrimaryActive};
    }

    /* triple-class specificity so the global popup-open trigger highlight cannot wash out a solid button */
    &&&[data-popup-open] {
      border-color: ${t.colorPrimaryActive};
      background: ${t.colorPrimaryActive};
    }
  `,variantDashed:e`
    border-style: dashed;
    background: ${t.colorBgContainer};

    &,
    &:hover,
    &:active {
      color: ${t.colorText};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${t.colorPrimaryBorder};
      color: ${t.colorPrimaryText};
    }
  `,variantFill:e`
    border-color: transparent;
    background: ${t.colorFillTertiary};

    &,
    &:hover,
    &:active {
      color: ${t.colorText};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      background: ${t.colorFillSecondary};
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      background: ${t.colorFill};
    }
  `,variantText:e`
    border-color: transparent;
    background: transparent;

    &,
    &:hover,
    &:active {
      color: ${t.colorText};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      background: ${t.colorFillSecondary};
    }
  `,variantLink:e`
    padding-inline: 0;
    border-color: transparent;
    background: transparent;

    &,
    &:hover,
    &:active {
      color: ${t.colorPrimary};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      color: ${t.colorPrimaryHover};
      background: transparent;
    }
  `,dangerOutlined:e`
    border-color: ${t.colorError};
    background: ${t.colorBgContainer};

    &,
    &:hover,
    &:active {
      color: ${t.colorError};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${t.colorErrorHover};
      color: ${t.colorErrorHover};
      background: ${t.colorBgContainer};
    }
  `,dangerSolid:e`
    border-color: ${t.colorError};
    background: ${t.colorError};

    &,
    &:hover,
    &:active {
      color: ${t.colorBgLayout};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${t.colorErrorHover};
      background: ${t.colorErrorHover};
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      border-color: ${t.colorErrorActive};
      background: ${t.colorErrorActive};
    }

    &&&[data-popup-open] {
      border-color: ${t.colorErrorActive};
      background: ${t.colorErrorActive};
    }
  `,dangerFill:e`
    border-color: transparent;
    color: ${t.colorError};
    background: ${t.colorErrorBg};

    &:hover:not(:disabled, [aria-disabled='true']) {
      color: ${t.colorErrorHover};
      background: ${t.colorErrorBgHover};
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      color: ${t.colorErrorActive};
      background: ${t.colorErrorBgHover};
    }
  `,dangerInline:e`
    &,
    &:hover,
    &:active {
      color: ${t.colorError};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      color: ${t.colorErrorHover};
    }
  `,ghostDefault:e`
    border-color: transparent;
    background: transparent;

    &,
    &:hover,
    &:active {
      color: ${t.colorText};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      background: ${t.colorFillSecondary};
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      background: ${t.colorFill};
    }
  `,ghostPrimary:e`
    border-color: transparent;
    background: transparent;

    &,
    &:hover,
    &:active {
      color: ${t.colorPrimary};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      color: ${t.colorPrimaryHover};
      background: ${t.colorFillSecondary};
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      color: ${t.colorPrimaryActive};
      background: ${t.colorFill};
    }
  `,ghostDanger:e`
    border-color: transparent;
    background: transparent;

    &,
    &:hover,
    &:active {
      color: ${t.colorError};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      color: ${t.colorErrorHover};
      background: ${t.colorFillSecondary};
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      color: ${t.colorErrorActive};
      background: ${t.colorFill};
    }
  `,spinner:e`
    @keyframes base-button-spin {
      to {
        transform: rotate(360deg);
      }
    }

    display: inline-block;

    width: 12px;
    height: 12px;
    border: 1.5px solid currentcolor;
    border-block-start-color: transparent;
    border-radius: 50%;

    animation: base-button-spin 0.6s linear infinite;
  `}))})),ns,rs,is,as,os,ss,cs,ls,us,ds,fs=e((()=>{ti(),vr(),ts(),ns=t(r(),1),rs=t(i(),1),L(),is=e=>e==null?null:(0,ns.isValidElement)(e)||typeof e==`string`||typeof e==`number`?e:(0,rs.jsx)(z,{icon:e,size:`small`}),as=e=>e===`small`?H.sizeSmall:e===`large`?H.sizeLarge:H.sizeMiddle,os=e=>e===`small`?H.iconOnlySmall:e===`large`?H.iconOnlyLarge:H.iconOnlyMiddle,ss=({danger:e,ghost:t,type:n})=>{if(t&&n!==`text`&&n!==`link`)return e?H.ghostDanger:n===`primary`?H.ghostPrimary:H.ghostDefault;switch(n){case`primary`:return e?H.dangerSolid:H.variantPrimary;case`dashed`:return e?F(H.variantDashed,H.dangerOutlined):H.variantDashed;case`fill`:return e?H.dangerFill:H.variantFill;case`text`:return e?F(H.variantText,H.dangerInline):H.variantText;case`link`:return e?F(H.variantLink,H.dangerInline):H.variantLink;default:return e?F(H.variantDefault,H.dangerOutlined):H.variantDefault}},cs={scale:.98},ls={damping:26,mass:.6,stiffness:600,type:`spring`},us=({block:e,children:t,className:n,classNames:r,danger:i=!1,disabled:a,outdent:o,ghost:s=!1,href:c,htmlType:l=`button`,icon:u,iconPosition:d=`start`,loading:f,onClick:p,ref:m,shape:h=`default`,size:g=`middle`,styles:_,target:v,type:y=`default`,...b})=>{let x=ei(),S=a||f,C=as(g),w=ss({danger:i,ghost:s,type:y}),T=h===`circle`?H.shapeCircle:h===`round`?H.shapeRound:void 0,E=!(t!=null&&t!==!1&&t!==``)&&(f||u)?os(g):void 0,D=y===`text`&&o?o===`end`?H.outdentEnd:H.outdentStart:void 0,O=F(H.base,C,w,T,e&&H.block,d===`end`&&H.iconEnd,E,D,n),k=(0,rs.jsxs)(rs.Fragment,{children:[(0,rs.jsx)(`span`,{"aria-hidden":!f,style:_?.icon,className:F(H.iconBox,H.spinnerSlot,f&&H.spinnerSlotShow,d===`end`&&H.spinnerSlotEnd,r?.icon),children:(0,rs.jsx)(`span`,{className:H.spinner})}),u&&!f?(0,rs.jsx)(`span`,{className:F(H.iconBox,r?.icon),style:_?.icon,children:is(u)}):null,t]}),A=S?{}:{transition:ls,whileTap:cs};if(c!==void 0){let e=e=>{if(S){e.preventDefault();return}p?.(e)};return(0,rs.jsx)(x.a,{"aria-busy":f||void 0,"aria-disabled":S||void 0,href:a?void 0:c,target:v,...b,className:O,ref:m,onClick:e,...A,children:k})}let ee=e=>{if(S){e.preventDefault();return}p?.(e)};return(0,rs.jsx)(x.button,{type:l,...b,"aria-busy":f||void 0,"aria-disabled":S||void 0,className:O,disabled:a,ref:m,onClick:ee,...A,children:k})},us.displayName=`BaseButton`,ds=us})),ps,ms,hs=e((()=>{ps=t(r(),1),ms=(e,t,n)=>{let[r,i]=(0,ps.useState)(!1),a=typeof t==`object`&&t.tooltipWhenOverflow;return(0,ps.useEffect)(()=>{if(!a)return;let n=()=>{let n=e.current;if(!n)return;let r=typeof t==`object`?t.rows:void 0;i(r&&r>1?n.scrollHeight>n.clientHeight:n.scrollWidth>n.clientWidth)};n();let r=new ResizeObserver(n);return e.current&&r.observe(e.current),()=>r.disconnect()},[a,t,n,e]),r}})),gs,_s,vs,ys=e((()=>{gs=t(r(),1),_s=(0,gs.createContext)(null),vs=(0,gs.createContext)(null)}));function bs(e){let t=e.type;if(typeof t!=`string`){if(typeof t==`function`)return t.displayName||t.name;if(typeof t==`object`&&t)return t.displayName||t.render?.displayName||t.render?.name||t.type?.displayName||t.type?.name}}function xs({children:e,nativeButton:t,triggerNativeButton:n}){let r=(0,Ss.useMemo)(()=>(0,Ss.isValidElement)(e)?typeof e.type==`string`&&e.type===`button`:!1,[e]);return{isNativeButtonTriggerElement:r,resolvedNativeButton:(0,Ss.useMemo)(()=>{if(t!==void 0)return t;if(n!==void 0)return n;if(r)return!0;if(!(0,Ss.isValidElement)(e))return;if(typeof e.type==`string`)return!1;let i=bs(e);return i&&i in Cs?Cs[i]:!1},[e,r,t,n])}}var Ss,Cs,ws=e((()=>{Ss=t(r(),1),Cs={A:!1,ActionIcon:!1,ActionIconGroup:!1,Alert:!1,Avatar:!1,AvatarGroup:!1,BaseActionIcon:!0,BaseButton:!0,Block:!1,BottomGradientButton:!0,Burger:!1,Button:!0,Center:!1,Checkbox:!1,CheckboxGroup:!1,Collapse:!1,ColorSwatches:!1,CopyButton:!1,DownloadButton:!1,EditableText:!1,Empty:!1,FileTypeIcon:!1,Flexbox:!1,FluentEmoji:!1,GradientButton:!0,Highlighter:!1,Hotkey:!1,Icon:!1,Image:!1,Img:!1,Input:!1,InputNumber:!1,InputPassword:!1,List:!1,ListItem:!1,Select:!1,Switch:!1,Markdown:!1,MaterialFileTypeIcon:!1,Segmented:!1,Skeleton:!1,SkeletonAvatar:!1,SkeletonBlock:!1,SkeletonButton:!1,SkeletonParagraph:!1,SkeletonTags:!1,SkeletonText:!1,SkeletonTitle:!1,Snippet:!1,Tag:!1,Text:!1,TextArea:!1,ThemeSwitch:!1,Video:!1}})),Ts,Es,Ds=e((()=>{ys(),Ts=t(r(),1),Es=e=>{let t=(0,Ts.useContext)(vs),{arrow:n,className:r,classNames:i,closeDelay:a,disabled:o,getPopupContainer:s,hotkey:c,hotkeyProps:l,mouseEnterDelay:u,mouseLeaveDelay:d,onOpenChange:f,openDelay:p,placement:m,popupContainer:h,styles:g,title:_,zIndex:v,positionerProps:y,triggerProps:b,popupProps:x}=e,S=(0,Ts.useMemo)(()=>{if(!(!t?.className&&!r))return[t?.className,r].filter(Boolean).join(` `)},[r,t?.className]),C=(0,Ts.useMemo)(()=>{if(!(!t?.classNames&&!i))return{...t?.classNames,...i}},[i,t?.classNames]),w=(0,Ts.useMemo)(()=>{if(typeof t?.styles!=`function`)return t?.styles},[t?.styles]),T=(0,Ts.useMemo)(()=>{if(typeof g!=`function`)return g},[g]),E=(0,Ts.useMemo)(()=>{if(!(!w&&!T))return{...w,...T}},[w,T]),D=(0,Ts.useMemo)(()=>{if(!(!t?.hotkeyProps&&!l))return{...t?.hotkeyProps,...l}},[l,t?.hotkeyProps]),O=(0,Ts.useMemo)(()=>{if(!(!t?.onOpenChange&&!f))return e=>{t?.onOpenChange?.(e),f?.(e)}},[f,t?.onOpenChange]);return(0,Ts.useMemo)(()=>({arrow:n??t?.arrow??!1,className:S,classNames:C,closeDelay:a??t?.closeDelay,disabled:o??t?.disabled,getPopupContainer:s??t?.getPopupContainer,hotkey:c??t?.hotkey,popupContainer:h??t?.popupContainer,hotkeyProps:D,mouseEnterDelay:u??t?.mouseEnterDelay,mouseLeaveDelay:d??t?.mouseLeaveDelay,onOpenChange:O,openDelay:p??t?.openDelay,placement:m??t?.placement??`top`,popupProps:x??t?.popupProps,positionerProps:y??t?.positionerProps,styles:E,title:_,triggerProps:b??t?.triggerProps,zIndex:v??t?.zIndex}),[n,a,o,s,c,S,C,D,O,E,u,d,p,m,h,x,y,t?.arrow,t?.closeDelay,t?.disabled,t?.getPopupContainer,t?.hotkey,t?.mouseEnterDelay,t?.mouseLeaveDelay,t?.onOpenChange,t?.openDelay,t?.placement,t?.popupContainer,t?.popupProps,t?.positionerProps,t?.triggerProps,t?.zIndex,_,b,v])}})),Os,ks,As,js,Ms,Ns=e((()=>{ys(),ws(),Ds(),Os=t(r(),1),ks=t(i(),1),rt(),Ft(),yt(),As=400,js=100,Ms=({children:e,ref:t,arrow:n,className:r,classNames:i,closeDelay:a,defaultOpen:o,disabled:s,getPopupContainer:c,hotkey:l,hotkeyProps:u,mouseEnterDelay:d,mouseLeaveDelay:f,onOpenChange:p,open:m,openDelay:h,placement:g,popupContainer:_,popupProps:v,portalProps:y,positionerProps:b,standalone:x,styles:S,title:C,triggerProps:w,zIndex:T,...E})=>{let D=(0,Os.useMemo)(()=>({arrow:n,className:r,classNames:i,closeDelay:a,defaultOpen:o,disabled:s,getPopupContainer:c,hotkey:l,hotkeyProps:u,mouseEnterDelay:d,mouseLeaveDelay:f,onOpenChange:p,open:m,openDelay:h,placement:g,popupContainer:_,popupProps:v,portalProps:y,positionerProps:b,styles:S,title:C,triggerProps:w,zIndex:T}),[n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,S,C,w,T]),O=(0,Os.use)(_s),k=Es(D),A=(0,Os.useMemo)(()=>k.openDelay===void 0?k.mouseEnterDelay===void 0?As:k.mouseEnterDelay*1e3:k.openDelay,[k.mouseEnterDelay,k.openDelay]),ee=(0,Os.useMemo)(()=>k.closeDelay===void 0?k.mouseLeaveDelay===void 0?js:k.mouseLeaveDelay*1e3:k.closeDelay,[k.closeDelay,k.mouseLeaveDelay]),te=!!k.disabled,{isNativeButtonTriggerElement:ne}=xs({children:e}),j=(0,Os.isValidElement)(e)?e:null,re=j&&j.props[`aria-haspopup`]!==void 0&&j.props.id!==void 0?j.props.id:void 0,ie=(0,Os.useCallback)(e=>{let n=(()=>{if(ne)return e;let{type:t,ref:n,...r}=e;return r})(),r=j.props,i=tn(E,r,n),a=r[`aria-haspopup`]!==void 0&&r.id!==void 0;return(0,Os.cloneElement)(j,{...i,id:a?r.id:i.id,ref:Tt([j.ref,e.ref,t])})},[j,ne,t,E]);if(k.title==null&&!k.hotkey)return e;let ae={closeDelay:ee,delay:A,disabled:te,...k.triggerProps,id:re??k.triggerProps?.id,payload:k};return j?(0,ks.jsx)(Ye,{handle:O??void 0,...ae,render:ie}):(0,ks.jsx)(Ye,{handle:O??void 0,...ae,ref:t,children:e})},Ms.displayName=`TooltipInGroup`})),Ps,Fs,Is,Ls,Rs,zs=e((()=>{Ps={align:`center`,side:`top`},Fs={align:`start`,side:`top`},Is={align:`end`,side:`top`},Ls={align:`center`,side:`bottom`},Rs={bottom:Ls,bottomCenter:Ls,bottomLeft:{align:`start`,side:`bottom`},bottomRight:{align:`end`,side:`bottom`},left:{align:`center`,side:`left`},leftBottom:{align:`end`,side:`left`},leftTop:{align:`start`,side:`left`},right:{align:`center`,side:`right`},rightBottom:{align:`end`,side:`right`},rightTop:{align:`start`,side:`right`},top:Ps,topCenter:Ps,topLeft:Fs,topRight:Is}})),Bs,Vs,Hs=e((()=>{Bs=t(i(),1),Vs=(0,Bs.jsxs)(`svg`,{"aria-hidden":`true`,height:`6`,viewBox:`0 0 12 6`,width:`12`,children:[(0,Bs.jsx)(`path`,{d:`M0 6L6 0L12 6Z`,"data-role":`fill`}),(0,Bs.jsx)(`path`,{d:`M0 6L6 0L12 6`,"data-role":`stroke`})]})})),Us,Ws=e((()=>{je(),Us={arrow:N(`acss-18u4261`,[`.acss-18u4261{--lobe-tooltip-arrow-offset-block:4px;--lobe-tooltip-arrow-offset-inline:6px;pointer-events:none;position:absolute;transform-origin:center;display:flex;width:8px;height:4px;transition:inset-inline-start var(--lobe-tooltip-layout-duration) var(--lobe-tooltip-layout-ease),inset-block-start var(--lobe-tooltip-layout-duration) var(--lobe-tooltip-layout-ease);}`,`.acss-18u4261>svg{display:block;width:100%;height:100%;fill:var(--ant-color-bg-elevated);}`,`.acss-18u4261 [data-role='stroke']{stroke:var(--ant-color-border-secondary);}`,`.acss-18u4261[data-side='top']{inset-block-end:calc(var(--lobe-tooltip-arrow-offset-block) * -1);transform:rotate(180deg);}`,`.acss-18u4261[data-side='left']{inset-inline-end:calc(var(--lobe-tooltip-arrow-offset-inline) * -1);transform:rotate(90deg);}`,`.acss-18u4261[data-side='right']{inset-inline-start:calc(var(--lobe-tooltip-arrow-offset-inline) * -1);transform:rotate(-90deg);}`,`.acss-18u4261[data-side='bottom']{inset-block-start:calc(var(--lobe-tooltip-arrow-offset-block) * -1);}`],`
    --lobe-tooltip-arrow-offset-block: 4px;
    --lobe-tooltip-arrow-offset-inline: 6px;

    pointer-events: none;

    position: absolute;
    transform-origin: center;

    display: flex;

    width: 8px;
    height: 4px;

    transition:
      inset-inline-start var(--lobe-tooltip-layout-duration) var(--lobe-tooltip-layout-ease),
      inset-block-start var(--lobe-tooltip-layout-duration) var(--lobe-tooltip-layout-ease);

    & > svg {
      display: block;
      width: 100%;
      height: 100%;
      fill: var(--ant-color-bg-elevated);
    }

    & [data-role='stroke'] {
      stroke: var(--ant-color-border-secondary);
    }

    &[data-side='top'] {
      inset-block-end: calc(var(--lobe-tooltip-arrow-offset-block) * -1);
      transform: rotate(180deg);
    }

    &[data-side='left'] {
      inset-inline-end: calc(var(--lobe-tooltip-arrow-offset-inline) * -1);
      transform: rotate(90deg);
    }

    &[data-side='right'] {
      inset-inline-start: calc(var(--lobe-tooltip-arrow-offset-inline) * -1);
      transform: rotate(-90deg);
    }

    &[data-side='bottom'] {
      inset-block-start: calc(var(--lobe-tooltip-arrow-offset-block) * -1);
    }
  `),popup:N(`acss-l50lnl`,[`.acss-l50lnl{will-change:transform,opacity;-webkit-user-select:none;user-select:none;position:relative;transform-origin:var(--transform-origin);box-sizing:border-box;max-width:var(--available-width);border-radius:var(--ant-border-radius-sm);font-size:var(--ant-font-size-sm);line-height:1.2;color:var(--ant-color-text-label);background:var(--ant-color-bg-elevated);box-shadow:var(--ant-box-shadow-tertiary),var(--lobe-ring);transition-timing-function:var(--lobe-tooltip-fade-ease),var(--lobe-tooltip-animation-ease-out);transition-duration:var(--lobe-tooltip-fade-duration),var(--lobe-tooltip-animation-duration);transition-property:opacity,transform;}`,`.acss-l50lnl[data-layout-animation]{width:var(--popup-width, auto);height:var(--popup-height, auto);transition-timing-function:var(--lobe-tooltip-fade-ease),var(--lobe-tooltip-animation-ease-out),var(--lobe-tooltip-layout-ease),var(--lobe-tooltip-layout-ease);transition-duration:var(--lobe-tooltip-fade-duration),var(--lobe-tooltip-animation-duration),var(--lobe-tooltip-layout-duration),var(--lobe-tooltip-layout-duration);transition-property:opacity,transform,width,height;}`,`.acss-l50lnl[data-repop]{transition:none;}`,`.acss-l50lnl[data-starting-style],.acss-l50lnl[data-ending-style]{transform:translate3d(var(--lobe-tooltip-translate-x), var(--lobe-tooltip-translate-y), 0) scale(var(--lobe-tooltip-animation-scale));opacity:0;}`,`.acss-l50lnl[data-ending-style]{transition-timing-function:var(--lobe-tooltip-animation-ease-in);transition-duration:var(--lobe-tooltip-animation-duration-exit);}`,`.acss-l50lnl[data-instant]{transition:none;}`],`
    /* Keep the popup on its own compositor layer for its whole lifetime: when the opacity
       transition ends the browser otherwise drops the layer and re-rasterizes with pixel
       snapping — a visible one-frame shift when the measured width is fractional
       (single-line tooltips). */
    will-change: transform, opacity;
    user-select: none;

    position: relative;
    transform-origin: var(--transform-origin);

    box-sizing: border-box;

    /* The 320px cap lives on the viewport, not here: Base UI measures content with
       --available-width set to max-content, and min(320px, max-content) is invalid, which
       recorded unclamped sizes. A percentage cap is out too — it tracks the positioner, which
       snaps to the new size and would freeze the shrink half of the morph. */
    max-width: var(--available-width);
    border-radius: var(--ant-border-radius-sm);

    font-size: var(--ant-font-size-sm);
    line-height: 1.2;
    color: var(--ant-color-text-label);

    background: var(--ant-color-bg-elevated);
    box-shadow: var(--ant-box-shadow-tertiary), var(--lobe-ring);

    /* Opacity gets its own monotonic curve: running it on the overshooting spring makes the
       fade look finished at ~0.96, pause, then visibly step to 1 at the clamp point — reads
       as a dropped frame. The spring stays on transform only. */
    transition-timing-function:
      var(--lobe-tooltip-fade-ease), var(--lobe-tooltip-animation-ease-out);
    transition-duration: var(--lobe-tooltip-fade-duration), var(--lobe-tooltip-animation-duration);
    transition-property: opacity, transform;

    /* Base UI writes the old size into --popup-width/height on a trigger switch and the new size
       one frame later; the box only morphs if width/height actually read them. */
    &[data-layout-animation] {
      width: var(--popup-width, auto);
      height: var(--popup-height, auto);

      transition-timing-function:
        var(--lobe-tooltip-fade-ease), var(--lobe-tooltip-animation-ease-out),
        var(--lobe-tooltip-layout-ease), var(--lobe-tooltip-layout-ease);
      transition-duration:
        var(--lobe-tooltip-fade-duration), var(--lobe-tooltip-animation-duration),
        var(--lobe-tooltip-layout-duration), var(--lobe-tooltip-layout-duration);
      transition-property: opacity, transform, width, height;
    }

    &[data-repop] {
      transition: none;
    }

    &[data-starting-style],
    &[data-ending-style] {
      transform: translate3d(var(--lobe-tooltip-translate-x), var(--lobe-tooltip-translate-y), 0)
        scale(var(--lobe-tooltip-animation-scale));
      opacity: 0;
    }

    &[data-ending-style] {
      transition-timing-function: var(--lobe-tooltip-animation-ease-in);
      transition-duration: var(--lobe-tooltip-animation-duration-exit);
    }

    &[data-instant] {
      transition: none;
    }
  `),positioner:N(`acss-18zlzbj`,[`.acss-18zlzbj{--lobe-tooltip-animation-duration:280ms;--lobe-tooltip-fade-duration:160ms;--lobe-tooltip-fade-ease:cubic-bezier(0.33, 1, 0.68, 1);--lobe-tooltip-animation-duration-exit:100ms;--lobe-tooltip-animation-translate:3px;--lobe-tooltip-animation-scale:0.97;--lobe-tooltip-animation-ease-in:cubic-bezier(0.4, 0, 1, 1);--lobe-tooltip-animation-ease-out:linear(
      0,
      0.041,
      0.14,
      0.268,
      0.407,
      0.541,
      0.662,
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
    );--lobe-tooltip-layout-duration:380ms;--lobe-tooltip-layout-ease:linear(
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
    );--lobe-tooltip-translate-x:0;--lobe-tooltip-translate-y:calc(var(--lobe-tooltip-animation-translate) * -1);will-change:transform,opacity;z-index:114514;width:min(var(--positioner-width), 320px, var(--available-width));height:var(--positioner-height);transition-timing-function:var(--lobe-tooltip-animation-ease-out);transition-duration:var(--lobe-tooltip-animation-duration);transition-property:none;}`,`.acss-18zlzbj[data-layout-animation]{transition-timing-function:var(--lobe-tooltip-layout-ease);transition-duration:var(--lobe-tooltip-layout-duration);transition-property:inset-block-start,inset-inline-start,inset-inline-end,inset-block-end,transform;}`,`.acss-18zlzbj[data-instant],.acss-18zlzbj[data-repop]{transition:none;}`,`.acss-18zlzbj[data-anchor-hidden],.acss-18zlzbj[data-zero-origin='true']{pointer-events:none;visibility:hidden;}`,`.acss-18zlzbj[data-placement='top'],.acss-18zlzbj[data-placement='topLeft'],.acss-18zlzbj[data-placement='topRight']{--lobe-tooltip-translate-x:0;--lobe-tooltip-translate-y:var(--lobe-tooltip-animation-translate);}`,`.acss-18zlzbj[data-placement='bottom'],.acss-18zlzbj[data-placement='bottomLeft'],.acss-18zlzbj[data-placement='bottomRight']{--lobe-tooltip-translate-x:0;--lobe-tooltip-translate-y:calc(var(--lobe-tooltip-animation-translate) * -1);}`,`.acss-18zlzbj[data-placement='left'],.acss-18zlzbj[data-placement='leftTop'],.acss-18zlzbj[data-placement='leftBottom']{--lobe-tooltip-translate-x:var(--lobe-tooltip-animation-translate);--lobe-tooltip-translate-y:0;}`,`.acss-18zlzbj[data-placement='right'],.acss-18zlzbj[data-placement='rightTop'],.acss-18zlzbj[data-placement='rightBottom']{--lobe-tooltip-translate-x:calc(var(--lobe-tooltip-animation-translate) * -1);--lobe-tooltip-translate-y:0;}`,`@media (prefers-reduced-motion: reduce){.acss-18zlzbj{--lobe-tooltip-animation-duration:0s;--lobe-tooltip-fade-duration:0s;--lobe-tooltip-animation-duration-exit:0s;--lobe-tooltip-layout-duration:0s;}}`],`
    /* Springs baked as linear(): stiffness 700 / damping 38 (enter) and 380 / 28 (glide),
       both zeta ~0.72 with ~4% overshoot. Durations are the springs' settle times —
       change them together with the curves, not independently. */
    --lobe-tooltip-animation-duration: 280ms;
    --lobe-tooltip-fade-duration: 160ms;
    --lobe-tooltip-fade-ease: cubic-bezier(0.33, 1, 0.68, 1);
    --lobe-tooltip-animation-duration-exit: 100ms;
    --lobe-tooltip-animation-translate: 3px;
    --lobe-tooltip-animation-scale: 0.97;
    --lobe-tooltip-animation-ease-in: cubic-bezier(0.4, 0, 1, 1);
    --lobe-tooltip-animation-ease-out: linear(
      0,
      0.041,
      0.14,
      0.268,
      0.407,
      0.541,
      0.662,
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
    --lobe-tooltip-layout-duration: 380ms;
    --lobe-tooltip-layout-ease: linear(
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
    --lobe-tooltip-translate-x: 0;
    --lobe-tooltip-translate-y: calc(var(--lobe-tooltip-animation-translate) * -1);

    will-change: transform, opacity;

    z-index: 114514;

    width: min(var(--positioner-width), 320px, var(--available-width));
    height: var(--positioner-height);

    transition-timing-function: var(--lobe-tooltip-animation-ease-out);
    transition-duration: var(--lobe-tooltip-animation-duration);
    transition-property: none;

    &[data-layout-animation] {
      transition-timing-function: var(--lobe-tooltip-layout-ease);
      transition-duration: var(--lobe-tooltip-layout-duration);
      transition-property:
        inset-block-start, inset-inline-start, inset-inline-end, inset-block-end, transform;
    }

    &[data-instant],
    &[data-repop] {
      transition: none;
    }

    /* Fallback: never show a tooltip when the anchor is hidden or the positioner falls back to (0,0). */
    &[data-anchor-hidden],
    &[data-zero-origin='true'] {
      pointer-events: none;
      visibility: hidden;
    }

    &[data-placement='top'],
    &[data-placement='topLeft'],
    &[data-placement='topRight'] {
      --lobe-tooltip-translate-x: 0;
      --lobe-tooltip-translate-y: var(--lobe-tooltip-animation-translate);
    }

    &[data-placement='bottom'],
    &[data-placement='bottomLeft'],
    &[data-placement='bottomRight'] {
      --lobe-tooltip-translate-x: 0;
      --lobe-tooltip-translate-y: calc(var(--lobe-tooltip-animation-translate) * -1);
    }

    &[data-placement='left'],
    &[data-placement='leftTop'],
    &[data-placement='leftBottom'] {
      --lobe-tooltip-translate-x: var(--lobe-tooltip-animation-translate);
      --lobe-tooltip-translate-y: 0;
    }

    &[data-placement='right'],
    &[data-placement='rightTop'],
    &[data-placement='rightBottom'] {
      --lobe-tooltip-translate-x: calc(var(--lobe-tooltip-animation-translate) * -1);
      --lobe-tooltip-translate-y: 0;
    }

    @media (prefers-reduced-motion: reduce) {
      --lobe-tooltip-animation-duration: 0s;
      --lobe-tooltip-fade-duration: 0s;
      --lobe-tooltip-animation-duration-exit: 0s;
      --lobe-tooltip-layout-duration: 0s;
    }
  `),viewport:N(`acss-1efdeik`,[`.acss-1efdeik{--lobe-tooltip-viewport-inline-padding:8px;--lobe-tooltip-content-shift:8px;--lobe-tooltip-content-blur:4px;position:relative;overflow:clip;max-width:calc(320px - 2px);padding-block:4px;padding-inline:var(--lobe-tooltip-viewport-inline-padding);overflow-wrap:break-word;white-space:normal;}`,`.acss-1efdeik [data-previous],.acss-1efdeik [data-current]{transform:translateX(0);display:flex;gap:6px;align-items:center;opacity:1;filter:blur(0);transition:transform var(--lobe-tooltip-layout-duration) var(--lobe-tooltip-layout-ease),opacity calc(var(--lobe-tooltip-layout-duration) / 2) var(--lobe-tooltip-fade-ease),filter calc(var(--lobe-tooltip-layout-duration) / 2) var(--lobe-tooltip-fade-ease);}`,`.acss-1efdeik [data-current]{transition-delay:0s,calc(var(--lobe-tooltip-layout-duration) / 6),calc(var(--lobe-tooltip-layout-duration) / 6);}`,`.acss-1efdeik [data-previous][data-ending-style],.acss-1efdeik [data-current][data-starting-style]{filter:blur(var(--lobe-tooltip-content-blur));}`,`.acss-1efdeik [data-previous]{position:absolute;inset-block-start:4px;inset-inline-start:var(--lobe-tooltip-viewport-inline-padding);width:calc(var(--popup-width) - var(--lobe-tooltip-viewport-inline-padding) * 2 - 2px);}`,`.acss-1efdeik[data-transitioning] [data-current]{width:calc(var(--positioner-width) - var(--lobe-tooltip-viewport-inline-padding) * 2 - 2px);}`,`.acss-1efdeik[data-repop] [data-previous]{display:none;}`,`.acss-1efdeik[data-repop] [data-current]{transition:none;}`,`.acss-1efdeik[data-activation-direction~='right'] [data-previous][data-ending-style]{transform:translateX(calc(var(--lobe-tooltip-content-shift) * -1));opacity:0;}`,`.acss-1efdeik[data-activation-direction~='right'] [data-current][data-starting-style]{transform:translateX(var(--lobe-tooltip-content-shift));opacity:0;}`,`.acss-1efdeik[data-activation-direction~='left'] [data-previous][data-ending-style]{transform:translateX(var(--lobe-tooltip-content-shift));opacity:0;}`,`.acss-1efdeik[data-activation-direction~='left'] [data-current][data-starting-style]{transform:translateX(calc(var(--lobe-tooltip-content-shift) * -1));opacity:0;}`,`.acss-1efdeik[data-activation-direction~='down'] [data-previous][data-ending-style]{transform:translateY(calc(var(--lobe-tooltip-content-shift) * -1));opacity:0;}`,`.acss-1efdeik[data-activation-direction~='down'] [data-current][data-starting-style]{transform:translateY(var(--lobe-tooltip-content-shift));opacity:0;}`,`.acss-1efdeik[data-activation-direction~='up'] [data-previous][data-ending-style]{transform:translateY(var(--lobe-tooltip-content-shift));opacity:0;}`,`.acss-1efdeik[data-activation-direction~='up'] [data-current][data-starting-style]{transform:translateY(calc(var(--lobe-tooltip-content-shift) * -1));opacity:0;}`],`
    --lobe-tooltip-viewport-inline-padding: 8px;
    --lobe-tooltip-content-shift: 8px;
    --lobe-tooltip-content-blur: 4px;

    position: relative;

    overflow: clip;

    max-width: calc(320px - 2px);
    padding-block: 4px;
    padding-inline: var(--lobe-tooltip-viewport-inline-padding);

    overflow-wrap: break-word;
    white-space: normal;

    /* Old and new text overlap in one clip box while the box morphs; blurring both layers during
       the crossfade turns the misaligned overlap into a soft smear instead of garbled text. */
    [data-previous],
    [data-current] {
      transform: translateX(0);

      display: flex;
      gap: 6px;
      align-items: center;

      opacity: 1;
      filter: blur(0);

      transition:
        transform var(--lobe-tooltip-layout-duration) var(--lobe-tooltip-layout-ease),
        opacity calc(var(--lobe-tooltip-layout-duration) / 2) var(--lobe-tooltip-fade-ease),
        filter calc(var(--lobe-tooltip-layout-duration) / 2) var(--lobe-tooltip-fade-ease);
    }

    [data-current] {
      transition-delay:
        0s, calc(var(--lobe-tooltip-layout-duration) / 6),
        calc(var(--lobe-tooltip-layout-duration) / 6);
    }

    [data-previous][data-ending-style],
    [data-current][data-starting-style] {
      filter: blur(var(--lobe-tooltip-content-blur));
    }

    /* Freeze both layers at their own final width so neither re-wraps while the box morphs;
       the viewport clip reveals the new text as the box grows over it. */
    [data-previous] {
      position: absolute;
      inset-block-start: 4px;
      inset-inline-start: var(--lobe-tooltip-viewport-inline-padding);
      width: calc(var(--popup-width) - var(--lobe-tooltip-viewport-inline-padding) * 2 - 2px);
    }

    &[data-transitioning] [data-current] {
      width: calc(var(--positioner-width) - var(--lobe-tooltip-viewport-inline-padding) * 2 - 2px);
    }

    &[data-repop] [data-previous] {
      display: none;
    }

    &[data-repop] [data-current] {
      transition: none;
    }

    &[data-activation-direction~='right'] [data-previous][data-ending-style] {
      transform: translateX(calc(var(--lobe-tooltip-content-shift) * -1));
      opacity: 0;
    }

    &[data-activation-direction~='right'] [data-current][data-starting-style] {
      transform: translateX(var(--lobe-tooltip-content-shift));
      opacity: 0;
    }

    &[data-activation-direction~='left'] [data-previous][data-ending-style] {
      transform: translateX(var(--lobe-tooltip-content-shift));
      opacity: 0;
    }

    &[data-activation-direction~='left'] [data-current][data-starting-style] {
      transform: translateX(calc(var(--lobe-tooltip-content-shift) * -1));
      opacity: 0;
    }

    &[data-activation-direction~='down'] [data-previous][data-ending-style] {
      transform: translateY(calc(var(--lobe-tooltip-content-shift) * -1));
      opacity: 0;
    }

    &[data-activation-direction~='down'] [data-current][data-starting-style] {
      transform: translateY(var(--lobe-tooltip-content-shift));
      opacity: 0;
    }

    &[data-activation-direction~='up'] [data-previous][data-ending-style] {
      transform: translateY(var(--lobe-tooltip-content-shift));
      opacity: 0;
    }

    &[data-activation-direction~='up'] [data-current][data-starting-style] {
      transform: translateY(calc(var(--lobe-tooltip-content-shift) * -1));
      opacity: 0;
    }
  `)}})),U,Gs=e((()=>{U={Alt:`alt`,Backquote:`backquote`,Backslash:`backslash`,Backspace:`backspace`,BracketLeft:`bracketleft`,BracketRight:`bracketright`,Comma:`comma`,CommandOrControl:`commandorcontrol`,Control:`control`,Ctrl:`ctrl`,Down:`down`,Enter:`enter`,Equal:`equal`,Esc:`esc`,Left:`left`,LeftClick:`left-click`,LeftDoubleClick:`left-double-click`,Meta:`meta`,MiddleClick:`middle-click`,Minus:`minus`,Mod:`mod`,Period:`period`,Plus:`equal`,QuestionMark:`slash`,Quote:`quote`,Right:`right`,RightClick:`right-click`,RightDoubleClick:`right-double-click`,Semicolon:`semicolon`,Shift:`shift`,Slash:`slash`,Space:`space`,Tab:`tab`,Up:`up`}})),Ks,qs=e((()=>{M(),Ks=ce(`LeftClick`,[[`path`,{d:`M2 9.333C2 6.36 3.491 3.71 5.814 2M19 10C19 9.08075 18.8189 8.1705 18.4672 7.32122C18.1154 6.47194 17.5998 5.70026 16.9497 5.05025C16.2997 4.40024 15.5281 3.88463 14.6788 3.53284C13.8295 3.18106 12.9193 3 12 3C11.0807 3 10.1705 3.18106 9.32122 3.53284C8.47194 3.88463 7.70026 4.40024 7.05025 5.05025C6.40024 5.70026 5.88463 6.47194 5.53284 7.32122C5.18106 8.1705 5 9.08075 5 10V14C5 14.9193 5.18106 15.8295 5.53284 16.6788C5.88463 17.5281 6.40024 18.2997 7.05025 18.9497C7.70026 19.5998 8.47194 20.1154 9.32122 20.4672C10.1705 20.8189 11.0807 21 12 21C12.9193 21 13.8295 20.8189 14.6788 20.4672C15.5281 20.1154 16.2997 19.5998 16.9497 18.9497C17.5998 18.2997 18.1154 17.5281 18.4672 16.6788C18.8189 15.8295 19 14.9193 19 14V10Z`,key:`1`}],[`path`,{d:`M12 4V11H6`,key:`2`}]]),Ks.displayName=`LeftClickIcon`})),Js,Ys=e((()=>{M(),Js=ce(`LeftDoubleClick`,[[`path`,{d:`M19 10V14C19 14.9193 18.8189 15.8295 18.4672 16.6788C18.1154 17.5281 17.5998 18.2997 16.9497 18.9497C16.2997 19.5998 15.5281 20.1154 14.6788 20.4672C13.8295 20.8189 12.9193 21 12 21C11.0807 21 10.1705 20.8189 9.32122 20.4672C8.47194 20.1154 7.70026 19.5998 7.05025 18.9497C6.40024 18.2997 5.88463 17.5281 5.53284 16.6788C5.18106 15.8295 5 14.9193 5 14V11M5 11V10C5 8.14348 5.7375 6.36301 7.05025 5.05025C8.36301 3.7375 10.1435 3 12 3V11H5ZM2 9.333C2 6.36 3.491 3.71 5.814 2M20.5 2H21.75C22.44 2 23 2.56 23 3.25C23 3.94 22.44 4.5 21.75 4.5C21.06 4.5 20.5 5.06 20.5 5.75V7H23M15 4L18 7M18 4L15 7`,key:`1`}]]),Js.displayName=`LeftDoubleClickIcon`})),Xs,Zs=e((()=>{M(),Xs=ce(`RightClick`,[[`path`,{d:`M22 9.333C22 6.36 20.509 3.71 18.186 2M19 10C19 9.08075 18.8189 8.1705 18.4672 7.32122C18.1154 6.47194 17.5998 5.70026 16.9497 5.05025C16.2997 4.40024 15.5281 3.88463 14.6788 3.53284C13.8295 3.18106 12.9193 3 12 3C11.0807 3 10.1705 3.18106 9.32122 3.53284C8.47194 3.88463 7.70026 4.40024 7.05025 5.05025C6.40024 5.70026 5.88463 6.47194 5.53284 7.32122C5.18106 8.1705 5 9.08075 5 10V14C5 14.9193 5.18106 15.8295 5.53284 16.6788C5.88463 17.5281 6.40024 18.2997 7.05025 18.9497C7.70026 19.5998 8.47194 20.1154 9.32122 20.4672C10.1705 20.8189 11.0807 21 12 21C12.9193 21 13.8295 20.8189 14.6788 20.4672C15.5281 20.1154 16.2997 19.5998 16.9497 18.9497C17.5998 18.2997 18.1154 17.5281 18.4672 16.6788C18.8189 15.8295 19 14.9193 19 14V10Z`,key:`1`}],[`path`,{d:`M12 4V11H18`,key:`2`}]]),Xs.displayName=`RightClickIcon`})),Qs,$s=e((()=>{M(),Qs=ce(`RightDoubleClick`,[[`path`,{d:`M12 3C13.8565 3 15.637 3.7375 16.9497 5.05025C18.2625 6.36301 19 8.14348 19 10V14C19 14.9193 18.8189 15.8295 18.4672 16.6788C18.1154 17.5281 17.5998 18.2997 16.9497 18.9497C16.2997 19.5998 15.5281 20.1154 14.6788 20.4672C13.8295 20.8189 12.9193 21 12 21C11.0807 21 10.1705 20.8189 9.32122 20.4672C8.47194 20.1154 7.70026 19.5998 7.05025 18.9497C6.40024 18.2997 5.88463 17.5281 5.53284 16.6788C5.18106 15.8295 5 14.9193 5 14V10`,key:`1`}],[`path`,{d:`M12 3V11H18.5M22 9.333C22 6.36 20.509 3.71 18.186 2M6.5 2H7.75C8.44 2 9 2.56 9 3.25C9 3.94 8.44 4.5 7.75 4.5C7.06 4.5 6.5 5.06 6.5 5.75V7H9M1 4L4 7M4 4L1 7`,key:`2`}]]),Qs.displayName=`RightDoubleClickIcon`})),ec,tc,nc=e((()=>{Do(),L(),Nt(),ec=Ht(({css:e,cssVar:t})=>({borderless:e`
      ${V.variantBorderlessWithoutHover};
      padding-inline: 4px;
    `,filled:V.variantFilledWithoutHover,inverseThemeDark:e`
      color: ${t.colorTextTertiary};
      background: color-mix(in srgb, ${t.colorBgContainer} 8%, transparent);
    `,inverseThemeLight:e`
      color: ${t.colorTextTertiary};
      background: color-mix(in srgb, ${t.colorBgContainer} 16%, transparent);
    `,outlined:V.variantOutlinedWithoutHover,root:e`
      overflow: hidden;

      min-width: 1.8em;
      height: 1.8em;
      padding-block: 0;
      padding-inline: 8px;
      border: none;
      border-radius: ${t.borderRadiusSM};

      font-family: ${t.fontFamily};
      font-size: 12px;
      line-height: 1.1;
      color: ${t.colorTextSecondary};
      text-align: center;
      white-space: nowrap;
    `})),tc=gt(ec.root,{compoundVariants:[{class:ec.inverseThemeDark,inverseTheme:!0,isDarkMode:!0},{class:ec.inverseThemeLight,inverseTheme:!0,isDarkMode:!1}],defaultVariants:{inverseTheme:!1,isDarkMode:!1,variant:`filled`},variants:{inverseTheme:{false:null,true:null},isDarkMode:{false:null,true:null},variant:{borderless:ec.borderless,filled:ec.filled,outlined:ec.outlined}}})})),rc,ic,ac,oc,sc,cc,lc=e((()=>{Gs(),rc=[U.Ctrl,U.Control,U.CommandOrControl,U.Meta,U.Mod,U.Alt,U.Shift],ic=Object.fromEntries(rc.map((e,t)=>[e,t])),ac=e=>e.replaceAll(`++`,`+${U.Equal}`).split(`+`).sort((e,t)=>(ic[e.toLowerCase()]??ic.length)-(ic[t.toLowerCase()]??ic.length)),oc=e=>e.replaceAll(/([A-Z])/g,` $1`).replace(/^./,e=>e.toUpperCase()).trim(),sc=e=>{if(e!==void 0)return e;if(typeof window>`u`||typeof navigator>`u`)return!1;let t=navigator.userAgent.toLowerCase();return/mac|iphone|ipod|ipad|ios/i.test(t)},cc=e=>e.join(`+`)})),uc,W,dc,fc,pc=e((()=>{To(),Io(),Gs(),vr(),qs(),Ys(),Zs(),$s(),nc(),lc(),uc=t(r(),1),W=t(i(),1),L(),M(),dc=e=>({[U.Alt]:e?(0,W.jsx)(z,{icon:D,size:{size:`0.95em`}}):`Alt`,[U.Backspace]:e?(0,W.jsx)(z,{icon:T}):`Backspace`,[U.CommandOrControl]:e?(0,W.jsx)(z,{icon:A,size:{size:`0.95em`}}):`Ctrl`,[U.Ctrl]:e?(0,W.jsx)(z,{icon:ue}):`Ctrl`,[U.Control]:e?(0,W.jsx)(z,{icon:ue}):`Ctrl`,[U.Down]:(0,W.jsx)(z,{icon:O}),[U.Enter]:e?(0,W.jsx)(z,{icon:ae}):`Enter`,[U.LeftClick]:(0,W.jsx)(z,{icon:Ks,size:{size:`1.2em`,strokeWidth:1.75}}),[U.Left]:(0,W.jsx)(z,{icon:S}),[U.Meta]:e?(0,W.jsx)(z,{icon:A,size:{size:`0.95em`}}):(0,W.jsx)(z,{icon:w}),[U.MiddleClick]:(0,W.jsx)(z,{icon:te,size:{size:`1.2em`,strokeWidth:1.75}}),[U.Mod]:e?(0,W.jsx)(z,{icon:A,size:{size:`0.95em`}}):`Ctrl`,[U.RightClick]:(0,W.jsx)(z,{icon:Xs,size:{size:`1.2em`,strokeWidth:1.75}}),[U.RightDoubleClick]:(0,W.jsx)(z,{icon:Qs,size:{size:`1.2em`,strokeWidth:1.75}}),[U.LeftDoubleClick]:(0,W.jsx)(z,{icon:Js,size:{size:`1.2em`,strokeWidth:1.75}}),[U.Right]:(0,W.jsx)(z,{icon:he}),[U.Shift]:e?(0,W.jsx)(z,{icon:k,size:{size:`1.15em`,strokeWidth:1.75}}):`Shift`,[U.Space]:(0,W.jsx)(z,{icon:re}),[U.Tab]:e?(0,W.jsx)(z,{icon:C}):`Tab`,[U.Up]:(0,W.jsx)(z,{icon:se}),[U.Comma]:`,`,[U.Period]:`.`,[U.Slash]:`?`,[U.Semicolon]:`;`,[U.Quote]:`'`,[U.Backquote]:"`",[U.Backslash]:`\\`,[U.BracketLeft]:`[`,[U.BracketRight]:`]`,[U.Minus]:`-`,[U.Equal]:`+`}),fc=(0,uc.memo)(({variant:e=`filled`,classNames:t,styles:n,keys:r,inverseTheme:i,isApple:a,compact:o,className:s,style:c,...l})=>{let{isDarkMode:u}=Ae(),d=e===`borderless`,[f,p]=(0,uc.useState)(()=>ac(r)),m=(0,uc.useMemo)(()=>sc(a),[a]);(0,uc.useEffect)(()=>{p(ac(r))},[r]);let h=(0,uc.useMemo)(()=>dc(m),[m]);return(0,W.jsx)(wo,{horizontal:!0,align:`center`,className:s,gap:d?6:2,style:c,...l,children:o||d?(0,W.jsx)(Fo,{horizontal:!0,as:`kbd`,gap:6,style:n?.kbdStyle,className:F(tc({inverseTheme:i,isDarkMode:u,variant:e}),t?.kbdClassName),children:f.map((e,t)=>(0,W.jsx)(`div`,{children:h[e]??oc(e)},t))}):f.map((r,a)=>(0,W.jsx)(Fo,{as:`kbd`,style:n?.kbdStyle,className:F(tc({inverseTheme:i,isDarkMode:u,variant:e}),t?.kbdClassName),children:h[r]??oc(r)},a))})}),fc.displayName=`Hotkey`})),mc,hc,gc,_c=e((()=>{pc(),mc=t(r(),1),hc=t(i(),1),gc=(0,mc.memo)(({title:e,hotkey:t,hotkeyProps:n})=>{let r=(0,mc.useMemo)(()=>({compact:!0,...n}),[n]);return(0,hc.jsxs)(hc.Fragment,{children:[e,t?(0,hc.jsx)(fc,{keys:t,...r}):null]})}),gc.displayName=`TooltipContent`})),G,vc,yc,bc,xc,Sc=e((()=>{ws(),Yt(),Wt(),un(),mn(),zs(),Hs(),Ws(),_c(),G=t(r(),1),vc=t(i(),1),L(),rt(),Ft(),yt(),yc=400,bc=100,xc=(0,G.memo)(({children:e,title:t,arrow:n=!1,className:r,classNames:i,closeDelay:a,defaultOpen:o=!1,disabled:s=!1,getPopupContainer:c,hotkey:l,hotkeyProps:u,mouseEnterDelay:d,mouseLeaveDelay:f,onOpenChange:p,open:m,openDelay:h,placement:g=`top`,popupContainer:_,styles:v,zIndex:y,ref:b,positionerProps:x,triggerProps:S,popupProps:C,portalProps:w,standalone:T,...E})=>{let D=ln(),[O,k]=(0,G.useState)(!!o),[A,ee]=(0,G.useState)(null),te=(0,G.useCallback)(e=>{e&&ee(e)},[]),ne=s?!1:m??O,j=(0,G.useCallback)(e=>{s&&e||(p?.(e),m===void 0&&k(e))},[s,p,m]),re=(0,G.useMemo)(()=>h===void 0?d===void 0?yc:d*1e3:h,[d,h]),ie=(0,G.useMemo)(()=>a===void 0?f===void 0?bc:f*1e3:a,[a,f]),ae=Rs[g]??Rs.top,oe=n?8:6,se=pn(),ce=ht()??se,{isNativeButtonTriggerElement:le}=xs({children:e}),ue=(0,G.useMemo)(()=>({arrow:F(Us.arrow,i?.arrow),popup:F(Us.popup,r,i?.root,i?.container),positioner:Us.positioner,viewport:F(Us.viewport,i?.content)}),[r,i?.arrow,i?.container,i?.content,i?.root]),de=(0,G.useMemo)(()=>{if(typeof v!=`function`)return v},[v]),M=(0,G.useMemo)(()=>({arrow:de?.arrow,popup:{...de?.root,...de?.container},positioner:{zIndex:y??114514},viewport:de?.content}),[de,y]),fe=(0,G.useMemo)(()=>{let t=(0,G.isValidElement)(e)&&e.props[`aria-haspopup`]!==void 0&&e.props.id!==void 0?e.props.id:void 0,n={closeDelay:ie,delay:re,disabled:s,...S,id:t??S?.id};return(0,G.isValidElement)(e)?(0,vc.jsx)(Ye,{...n,render:t=>{let n=(()=>{if(le)return t;let{type:e,ref:n,...r}=t;return r})(),r=e.props,i=tn(E,r,n),a=r[`aria-haspopup`]!==void 0&&r.id!==void 0;return(0,G.cloneElement)(e,{...i,id:a?r.id:i.id,ref:Tt([e.ref,t.ref,b,te])})}}):(0,vc.jsx)(Ye,{...n,ref:Tt([b,te]),children:e})},[e,s,le,b,ie,re,E,te,S]),pe=(0,G.useMemo)(()=>{if(_)return _;if(!(!c||!D||!A))return c(A)},[_,c,D,A]),me=(0,G.useMemo)(()=>(0,vc.jsx)(ye,{align:ae.align,className:ue.positioner,"data-placement":g,side:ae.side,sideOffset:oe,style:M.positioner,...x,collisionPadding:x?.collisionPadding??Mt(),children:(0,vc.jsxs)(Ke,{className:ue.popup,style:M.popup,...C,children:[n&&(0,vc.jsx)(ke,{className:ue.arrow,style:M.arrow,children:Vs}),(0,vc.jsx)(ft,{className:ue.viewport,style:M.viewport,children:(0,vc.jsx)(gc,{hotkey:l,hotkeyProps:u,title:t})})]})}),[n,oe,l,u,g,ae.align,ae.side,C,x,ue,M,t]);if(t==null&&!l)return e;let he=pe??ce;return(0,vc.jsxs)(Fe,{defaultOpen:o,disabled:s,open:ne,onOpenChange:j,children:[fe,he?(0,vc.jsx)(He,{container:he,...w,children:me}):null]})}),xc.displayName=`TooltipStandalone`})),Cc,wc,Tc,Ec=e((()=>{ys(),Ns(),Sc(),Cc=t(r(),1),wc=t(i(),1),Tc=e=>(0,Cc.use)(_s)&&e.open===void 0&&e.defaultOpen===void 0&&!e.standalone?(0,wc.jsx)(Ms,{...e}):(0,wc.jsx)(xc,{...e})})),Dc,Oc,K,kc,Ac,jc=e((()=>{je(),L(),Nt(),Dc=Xt`
  0% {
    background-position: 100%;
  }

  100% {
    background-position: -100%;
  }
`,Oc=Xt`
  0% {
    translate: -100% 0;
  }

  100% {
    translate: 100% 0;
  }
`,K=Ht(({css:e,cssVar:t})=>({code:e`
    font-family: ${t.fontFamilyCode};
  `,danger:e`
    color: ${t.colorError};
  `,delete:e`
    text-decoration: line-through;
  `,disabled:e`
    cursor: not-allowed;
    color: ${t.colorTextDisabled};
  `,ellipsis:e`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,ellipsisMulti:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  `,h1:e`
    font-size: calc(${t.fontSize} * 2.5);
    font-weight: bold;
    line-height: 1.25;
  `,h2:e`
    font-size: calc(${t.fontSize} * 2);
    font-weight: bold;
    line-height: 1.25;
  `,h3:e`
    font-size: calc(${t.fontSize} * 1.5);
    font-weight: bold;
    line-height: 1.25;
  `,h4:e`
    font-size: calc(${t.fontSize} * 1.25);
    font-weight: bold;
    line-height: 1.25;
  `,h5:e`
    font-size: ${t.fontSize};
    font-weight: bold;
    line-height: 1.25;
  `,info:e`
    color: ${t.colorInfo};
  `,italic:e`
    font-style: italic;
  `,mark:e`
    color: #000;
    background-color: ${t.yellow};
  `,p:e`
    margin-block: 0;
  `,secondary:e`
    color: ${t.colorTextDescription};
  `,shiny:e`
    --shiny-duration: 1.5s;

    /* The sweep peaks at this color. Override it to match the static text the
     * shimmering label sits next to. currentColor cannot serve here: the
     * dimmed color declared below would feed back into the sweep overlay. */
    --shiny-color: ${t.colorText};

    user-select: none;

    color: color-mix(in srgb, var(--shiny-color) 28%, transparent);

    background: linear-gradient(120deg, transparent 25%, var(--shiny-color) 50%, transparent 75%);
    background-clip: text;
    background-size: 200% 100%;

    animation: ${Dc} var(--shiny-duration) linear infinite;

    /* Animating background-position repaints every glyph each frame. Where
     * mask-clip: text is supported, clip a transform-animated overlay to the
     * glyphs instead so the sweep stays on the compositor. The mask clips every
     * descendant too, so rows that also render icons or chips keep the
     * background-clip path — masking would erase that non-text paint. */
    @supports (-webkit-mask-clip: text) {
      &:not(:has(*)) {
        position: var(--shiny-origin, relative);

        background: none;

        animation: none;

        /* stylelint-disable-next-line declaration-property-value-no-unknown */
        mask-clip: text;
        mask-image: linear-gradient(#fff, #fff);

        &::after {
          pointer-events: none;
          will-change: transform;
          content: '';

          position: absolute;
          inset: 0;

          background: linear-gradient(
            90deg,
            transparent 25%,
            var(--shiny-color) 50%,
            transparent 75%
          );

          animation: ${Oc} var(--shiny-duration) linear infinite;
        }
      }
    }

    @media (prefers-reduced-motion: reduce) {
      animation: none;

      &::after {
        display: none;
      }
    }
  `,strong:e`
    font-weight: bold;
  `,success:e`
    color: ${t.colorSuccess};
  `,text:e`
    color: ${t.colorText};
  `,underline:e`
    text-decoration: underline;
  `,warning:e`
    color: ${t.colorWarning};
  `})),kc={shinyGroup:N(`acss-obtc9d`,[`@supports (-webkit-mask-clip: text){.acss-obtc9d{--shiny-origin:static;position:relative;}}`],`
    @supports (-webkit-mask-clip: text) {
      & {
        --shiny-origin: static;

        position: relative;
      }
    }
  `)},Ac=gt(K.text,{defaultVariants:{},variants:{as:{h1:K.h1,h2:K.h2,h3:K.h3,h4:K.h4,h5:K.h5,p:K.p},code:{true:K.code},delete:{true:K.delete},disabled:{true:K.disabled},ellipsis:{multi:K.ellipsisMulti,true:K.ellipsis},italic:{true:K.italic},mark:{true:K.mark},shiny:{true:K.shiny},strong:{true:K.strong},type:{danger:K.danger,info:K.info,secondary:K.secondary,success:K.success,warning:K.warning},underline:{true:K.underline}}})})),Mc,Nc,Pc,Fc,Ic=e((()=>{hs(),Ec(),jc(),Mc=t(r(),1),Nc=t(i(),1),L(),Pc=(0,Mc.memo)(({align:e,as:t=`div`,children:n,className:r,classNames:i,code:a,color:o,delete:s,disabled:c,ellipsis:l,fontSize:u,italic:d,lineClamp:f,lineHeight:p,mark:m,noWrap:h,ref:g,shiny:_,shinyDuration:v,strong:y,style:b,styles:x,textDecoration:S,textTransform:C,type:w,underline:T,weight:E,whiteSpace:D,wordBreak:O,...k})=>{let A=(0,Mc.useRef)(null),ee=ms(A,l,n),te=typeof l==`object`&&!!l.rows&&l.rows>1,ne=typeof l==`object`&&l.tooltipWhenOverflow,j=e=>{A.current=e,typeof g==`function`?g(e):g&&(g.current=e)},re={...o&&{color:o},...E&&{fontWeight:E},...p&&{lineHeight:p},...C&&{textTransform:C},...S&&{textDecoration:S},...O&&{wordBreak:O},...typeof l==`object`&&l.rows&&{WebkitLineClamp:l.rows},...!l&&!!f&&{WebkitBoxOrient:`vertical`,WebkitLineClamp:f,display:`-webkit-box`,overflow:`hidden`,textOverflow:`ellipsis`},..._&&v&&{"--shiny-duration":v},...u&&{fontSize:u},...e&&{textAlign:e},...!te&&h&&{whiteSpace:`nowrap`},...D&&{whiteSpace:D},...b,...x?.root},ie=(0,Nc.jsx)(t,{...k,ref:j,style:re,className:F(Ac({as:[`h1`,`h2`,`h3`,`h4`,`h5`,`p`].includes(t)?t:void 0,code:a,delete:s,disabled:c,ellipsis:l?typeof l==`object`&&l.rows?`multi`:!0:void 0,italic:d,mark:m,shiny:_,strong:y,type:w,underline:T}),r,i?.root),children:n});if(l&&typeof l==`object`&&(l.tooltip||l.tooltipWhenOverflow)){if(ne&&!ee)return ie;let e=typeof l.tooltip==`string`?l.tooltip:n;return l.tooltip&&typeof l.tooltip==`object`?(0,Nc.jsx)(Tc,{...l.tooltip,title:l.tooltip?.title||e,children:ie}):(0,Nc.jsx)(Tc,{title:e,children:ie})}return ie}),Pc.displayName=`Text`,Fc=Pc})),Lc,Rc,zc,Bc=e((()=>{Lc=e=>{e.preventDefault()},Rc=e=>{e.stopPropagation()},zc=e=>{e.preventDefault(),e.stopPropagation(),e.preventBaseUIHandler?.()}}));function Vc(e,t){let[n,r]=(0,Hc.useState)(void 0),i=(0,Hc.useRef)({tier:e,explicit:t,node:null,observer:null,prevOpen:!1}),a=(0,Hc.useRef)(t);if(i.current.tier=e,i.current.explicit=t,a.current!==void 0&&t===void 0&&i.current.node){let t=i.current.node;if(t.hasAttribute(`data-open`)&&(r(_n(e)),i.current.prevOpen=!0),!i.current.observer){let e=new MutationObserver(()=>{let e=t.hasAttribute(`data-open`);e&&!i.current.prevOpen&&r(_n(i.current.tier)),i.current.prevOpen=e});e.observe(t,{attributes:!0,attributeFilter:[`data-open`,`data-closed`]}),i.current.observer=e}}a.current=t;let o=(0,Hc.useCallback)(e=>{if(e===i.current.node||(i.current.observer?.disconnect(),i.current.observer=null,i.current.node=e,i.current.prevOpen=!1,!e)||i.current.explicit!==void 0)return;let t=()=>{let t=e.hasAttribute(`data-open`);t&&!i.current.prevOpen&&r(_n(i.current.tier)),i.current.prevOpen=t};t();let n=new MutationObserver(t);n.observe(e,{attributes:!0,attributeFilter:[`data-open`,`data-closed`]}),i.current.observer=n},[]);return(0,Hc.useEffect)(()=>()=>{i.current.observer?.disconnect()},[]),{zIndex:i.current.explicit??n,ref:o}}var Hc,Uc=e((()=>{bn(),Hc=t(r(),1)})),Wc,Gc=e((()=>{Wc=(e,t)=>()=>{}})),q,Kc,qc,Jc=e((()=>{Wn(),L(),Nt(),q=Ht(({css:e,cssVar:t})=>({icon:e`
    pointer-events: none;

    position: absolute;
    inset-block: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${t.colorBgLayout};

    transition:
      opacity 200ms ${t.motionEaseOut},
      scale 200ms ${t.motionEaseOut};

    @media (prefers-reduced-motion: reduce) {
      transition-duration: 0s;
    }
  `,iconLeft:e`
    inset-inline-start: 4px;
    scale: 0;
    opacity: 0;

    [data-checked] & {
      scale: 1;
      opacity: 1;
    }
  `,iconLeftSmall:e`
    inset-inline-start: 4px;
    scale: 0;
    opacity: 0;

    [data-checked] & {
      scale: 1;
      opacity: 1;
    }
  `,iconRight:e`
    inset-inline-end: 4px;

    [data-checked] & {
      scale: 0;
      opacity: 0;
    }
  `,iconRightSmall:e`
    inset-inline-end: 4px;

    [data-checked] & {
      scale: 0;
      opacity: 0;
    }
  `,iconThumb:e`
    position: relative;
    inset: unset;
    transform: none;
    color: ${t.colorPrimary};
  `,loading:e`
    @keyframes lobe-switch-loading {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    animation: lobe-switch-loading 1s linear infinite;

    @media (prefers-reduced-motion: reduce) {
      animation-duration: 0s;
    }
  `,root:e`
    --switch-dir: 1;

    cursor: pointer;
    user-select: none;

    position: relative;

    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;

    box-sizing: border-box;
    padding: 2px;
    border: 0;
    border-radius: 100px;

    background: ${t.colorFillSecondary};
    outline: none;
    box-shadow: inset 0 1.5px 2px rgb(0 0 0 / 8%);

    transition:
      background 200ms ${t.motionEaseOut},
      box-shadow 200ms ${t.motionEaseOut};

    &:dir(rtl) {
      --switch-dir: -1;
    }

    [dir='rtl'] & {
      --switch-dir: -1;
    }

    ${Hn};

    &:hover:not([data-disabled]) {
      background: ${t.colorFill};
    }

    &[data-checked] {
      background: ${t.colorPrimary};
      box-shadow: inset 0 1.5px 3px rgb(0 0 0 / 18%);

      &:hover:not([data-disabled]) {
        background: ${t.colorPrimaryHover};
      }
    }

    &[data-disabled] {
      cursor: not-allowed;
      opacity: 0.45;
    }

    @media (prefers-reduced-motion: reduce) {
      transition-duration: 0s;
    }
  `,rootDefault:e`
    width: 36px;
    min-width: 36px;
    height: 22px;
  `,rootSmall:e`
    width: 28px;
    min-width: 28px;
    height: 16px;
  `,thumb:e`
    transform: translateX(calc(var(--switch-x, 0px) * var(--switch-dir, 1)));

    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: ${t.colorBgContainer};
    box-shadow:
      0 0 0 0.5px rgb(0 0 0 / 4%),
      0 1px 1px rgb(0 0 0 / 6%),
      0 3px 8px rgb(0 30 80 / 16%);

    transition: box-shadow 200ms ${t.motionEaseOut};

    [role='switch']:hover:not([data-disabled]) > & {
      box-shadow:
        0 0 0 0.5px rgb(0 0 0 / 4%),
        0 1px 1px rgb(0 0 0 / 8%),
        0 6px 14px rgb(0 30 80 / 24%);
    }

    [data-disabled] > & {
      box-shadow: none;
    }

    @media (prefers-reduced-motion: reduce) {
      transition-duration: 0s;
    }
  `,thumbDefault:e`
    width: 18px;
    height: 18px;
  `,thumbSmall:e`
    width: 12px;
    height: 12px;
  `})),Kc=gt(q.root,{defaultVariants:{size:`default`},variants:{size:{default:q.rootDefault,small:q.rootSmall}}}),qc=gt(q.thumb,{defaultVariants:{size:`default`},variants:{size:{default:q.thumbDefault,small:q.thumbSmall}}})})),Yc,Xc,Zc,Qc,$c,el,tl,nl,rl,il,al=e((()=>{Jc(),Yc=t(r(),1),Xc=t(i(),1),L(),rn(),_t(),u(),Zc={default:{checkedX:14,pressedCheckedX:10,pressedWidth:22,width:18},small:{checkedX:12,pressedCheckedX:8,pressedWidth:16,width:12}},Qc={damping:24,stiffness:360,type:`spring`},$c=(0,Yc.createContext)(null),el=()=>{let e=(0,Yc.use)($c);if(!e)throw Error(`useSwitchContext must be used within a SwitchRoot`);return e},tl=({checked:e,className:t,defaultChecked:n,onCheckedChange:r,onClick:i,onKeyDown:a,onKeyUp:o,onPointerCancel:s,onPointerDown:c,onPointerLeave:l,onPointerUp:u,size:d=`default`,children:f,disabled:p,readOnly:m,required:h,inputRef:g,id:_,name:v,...y})=>{let[b,x]=(0,Yc.useState)(!1),S=(0,Yc.useRef)(null),[C,w]=nt(n??!1,{defaultValue:n,onChange:e=>{S.current&&r?.(e,S.current)},value:e}),T=Kc({size:d}),E=(0,Yc.useMemo)(()=>({isChecked:!!C,isPressed:b,setIsChecked:e=>w(e),setIsPressed:x}),[C,b,w]),D=e=>{S.current=e,i?.(!C,e)},O=!p&&!m,k=e=>{(e.key===`Enter`||e.key===` `)&&(S.current=e),e.key===` `&&O&&x(!0),a?.(e)},A=e=>{e.key===` `&&x(!1),o?.(e)},ee=e=>{O&&x(!0),c?.(e)},te=e=>{x(!1),u?.(e)},ne=e=>{x(!1),s?.(e)},j=e=>{x(!1),l?.(e)};return(0,Xc.jsx)($c,{value:E,children:(0,Xc.jsx)(xt,{nativeButton:!0,checked:C,defaultChecked:n,disabled:p,id:_,inputRef:g,name:v,readOnly:m,required:h,render:(0,Xc.jsx)(`button`,{...y,className:F(T,t),onClick:D,onKeyDown:k,onKeyUp:A,onPointerCancel:ne,onPointerDown:ee,onPointerLeave:j,onPointerUp:te}),onCheckedChange:w,children:f})})},tl.displayName=`SwitchRoot`,nl=({className:e,size:t=`default`,style:n,children:r,...i})=>{let{isChecked:a,isPressed:o}=el(),c=(0,Yc.useRef)(null),l=qc({size:t}),u=Zc[t],d=a?o?u.pressedCheckedX:u.checkedX:0,f=o?u.pressedWidth:u.width,[p]=(0,Yc.useState)(()=>({width:Ee(f),x:Ee(d)})),[m]=(0,Yc.useState)(()=>({"--switch-x":`${d}px`,width:f}));return(0,Yc.useEffect)(()=>{let e=c.current;if(!e)return;let t=p.x.on(`change`,t=>{e.style.setProperty(`--switch-x`,`${t}px`)}),n=p.width.on(`change`,t=>{e.style.setProperty(`width`,`${t}px`)});return()=>{t(),n()}},[p]),(0,Yc.useEffect)(()=>{let e=window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches??!1?{duration:0}:Qc,t=[s(p.x,d,e),s(p.width,f,e)];return()=>{for(let e of t)e.stop()}},[p,d,f]),(0,Xc.jsx)(Pt,{render:(0,Xc.jsx)(`span`,{...i,className:F(l,e),ref:c,style:{...m,...n},children:r})})},nl.displayName=`SwitchThumb`,rl=(e,t)=>e===`thumb`?q.iconThumb:e===`left`?t===`small`?q.iconLeftSmall:q.iconLeft:t===`small`?q.iconRightSmall:q.iconRight,il=({children:e,className:t,position:n,size:r=`default`,...i})=>{let a=rl(n,r);return(0,Xc.jsx)(`span`,{className:F(q.icon,a,t),...i,children:e})},il.displayName=`SwitchIcon`})),ol,sl,cl,ll=e((()=>{vr(),Jc(),al(),ol=t(r(),1),sl=t(i(),1),L(),M(),cl=(0,ol.memo)(({autoFocus:e,checked:t,checkedChildren:n,className:r,classNames:i,defaultChecked:a,defaultValue:o,disabled:s,id:c,loading:l,name:u,onChange:d,onClick:f,ref:p,rootClassName:m,size:h=`default`,style:g,styles:_,tabIndex:v,title:y,unCheckedChildren:b,value:x})=>{let S=s||l,C=x??t,w=o??a;return(0,sl.jsxs)(tl,{autoFocus:e,checked:C,className:F(r,m,i?.root),defaultChecked:w,disabled:S,id:c,name:u,ref:p,size:h,style:{...g,..._?.root},tabIndex:v,title:y,onCheckedChange:d,onClick:f,children:[n&&(0,sl.jsx)(il,{className:i?.content,position:`left`,size:h,style:_?.content,children:n}),b&&(0,sl.jsx)(il,{className:i?.content,position:`right`,size:h,style:_?.content,children:b}),(0,sl.jsx)(nl,{className:i?.thumb,size:h,style:_?.thumb,children:l&&(0,sl.jsx)(z,{className:q.loading,icon:me,size:h===`small`?8:12,style:{color:`var(--lobe-color-primary)`}})})]})}),cl.displayName=`Switch`})),ul,J,dl,fl,pl,ml,hl,gl,_l=e((()=>{Yt(),vr(),Bc(),ll(),Uc(),Ue(),Gt(),jt(),_e(),ut(),ul=t(r(),1),J=t(i(),1),L(),M(),be(),dl=(0,ul.memo)(({collisionPadding:e,style:t,...n})=>{let{zIndex:r,ref:i}=Vc(`floating`,typeof t!=`function`&&t?.zIndex!=null&&typeof t.zIndex==`number`?t.zIndex:void 0),a=typeof t==`function`?e=>({zIndex:r,...t(e)}):{zIndex:r,...t};return(0,J.jsx)(ot,{...n,collisionPadding:e??Mt(),ref:i,style:a})}),dl.displayName=`ContextMenuSubmenuPositioner`,fl=(0,ul.memo)(()=>{let{t:e}=dt(et);return(0,J.jsx)(xe,{disabled:!0,className:F(P.item,P.empty),children:(0,J.jsx)(`div`,{className:P.itemContent,children:(0,J.jsx)(`span`,{className:P.label,children:e(`common.empty`)})})})}),fl.displayName=`EmptyMenuItem`,pl=({checked:e,children:t,closeOnClick:n=!1,danger:r,defaultChecked:i,disabled:a,label:o,onCheckedChange:s})=>{let[c,l]=(0,ul.useState)(i??!1),u=e!==void 0,d=u?e:c,f=(0,ul.useCallback)(e=>{u||l(e),s?.(e)},[u,s]);return(0,J.jsxs)(xe,{className:F(P.item,r&&P.danger),closeOnClick:n,disabled:a,label:o,onClick:e=>{e.preventDefault(),a||f(!d)},children:[t,(0,J.jsx)(`span`,{style:{display:`inline-flex`,marginInlineStart:16},onFocus:e=>e.stopPropagation(),children:(0,J.jsx)(cl,{checked:d,disabled:a,size:`small`,tabIndex:-1,onChange:f,onClick:(e,t)=>t.stopPropagation()})})]})},ml=(e,t,n)=>{let r=qt(e),i=`desc`in e?e.desc:void 0,a=`extra`in e?e.extra:void 0,o=t?.indicatorOnRight,s=!!i&&t?.iconAlign===`start`,c=n!==void 0&&!o,l=c?!!n:!!e.icon,u=c?!!(t?.reserveIconSpace||n):!!(l||t?.reserveIconSpace),d=i?(0,J.jsxs)(`div`,{className:P.labelGroup,children:[(0,J.jsx)(`span`,{className:P.label,children:r}),(0,J.jsx)(`span`,{className:P.desc,children:i})]}):(0,J.jsx)(`span`,{className:P.label,children:r});return(0,J.jsxs)(`div`,{className:F(P.itemContent,s&&P.itemContentAlignStart),children:[u?(0,J.jsx)(`span`,{"aria-hidden":!l,className:F(P.icon,s&&P.iconAlignStart),children:c?n:l?pt(e.icon,`small`):null}):null,d,a?(0,J.jsx)(`span`,{className:P.extra,children:a}):null,o&&n?n:null,t?.submenu?(0,J.jsx)(`span`,{className:P.submenuArrow,children:(0,J.jsx)(zt,{})}):null]})},hl=(e,t,n)=>{if(!e.onClick)return;let r=e.key??t.at(-1)??``,i={domEvent:n,item:n.currentTarget,key:String(r),keyPath:t};e.onClick(i)},gl=(e,t=[],n)=>{let r=n?.iconAlign,i=n?.iconSpaceMode??`global`,a=n?.reserveIconSpace??Rt(e,i===`global`),o=n?.indicatorOnRight??Ut(e);return e.map((e,n)=>{if(!e)return null;let s=Ct(e,`${t.join(`-`)||`root`}-${n}`),c=[...t,String(s)];if(e.type===`checkbox`){let t=e,n=qt(t),i=typeof n==`string`?n:void 0,c=!!t.danger,l=(0,J.jsx)(ze,{children:(0,J.jsx)(z,{icon:fe,size:`small`})});return(0,J.jsx)(Le,{checked:t.checked,className:F(P.item,c&&P.danger),closeOnClick:t.closeOnClick,defaultChecked:t.defaultChecked,disabled:t.disabled,label:i,onCheckedChange:e=>t.onCheckedChange?.(e),children:ml(t,{iconAlign:r,indicatorOnRight:o,reserveIconSpace:a},l)},s)}if(e.type===`switch`){let t=e,n=qt(t),i=typeof n==`string`?n:void 0,o=!!t.danger;return(0,J.jsx)(pl,{checked:t.checked,closeOnClick:t.closeOnClick,danger:o,defaultChecked:t.defaultChecked,disabled:t.disabled,label:i,onCheckedChange:t.onCheckedChange,children:ml(t,{iconAlign:r,reserveIconSpace:a})},s)}if(e.type===`divider`)return(0,J.jsx)(ct,{className:P.separator},s);if(e.type===`group`){let t=e,n=i===`group`?t.children?Rt(t.children):!1:a,o=t.children?Ut(t.children):!1;return(0,J.jsxs)(st,{children:[t.label?(0,J.jsx)(Ne,{className:P.groupLabel,children:t.label}):null,t.children?gl(t.children,c,{iconAlign:r,iconSpaceMode:i,indicatorOnRight:o,reserveIconSpace:n}):null]},s)}if(e.type===`submenu`||`children`in e&&e.children){let t=e,n=qt(t),o=typeof n==`string`?n:void 0,l=`danger`in t&&!!t.danger,u=t.header!=null||t.footer!=null,d=t.children&&t.children.length>0?gl(t.children,c,{iconAlign:r,iconSpaceMode:i}):(0,J.jsx)(fl,{});return(0,J.jsxs)(vt,{defaultOpen:t.defaultOpen,open:t.open,onOpenChange:t.onOpenChange,children:[(0,J.jsx)(Re,{...t.triggerProps,className:F(P.item,l&&P.danger),closeDelay:t.closeDelay,delay:t.delay,disabled:t.disabled,label:o,openOnHover:t.openOnHover,onClick:t.onClick,children:ml(t,{iconAlign:r,reserveIconSpace:a,submenu:!0})}),(0,J.jsx)(an,{children:(0,J.jsx)(dl,{alignOffset:-4,className:P.positioner,"data-submenu":``,sideOffset:-1,onContextMenu:zc,children:(0,J.jsxs)(we,{className:u?F(P.popup,P.popupWithSlots):P.popup,children:[t.header==null?null:(0,J.jsx)(`div`,{className:P.header,children:t.header}),u?(0,J.jsx)(`div`,{className:P.slotViewport,children:d}):d,t.footer==null?null:(0,J.jsx)(`div`,{className:P.footer,children:t.footer})]})})})]},s)}let l=e,u=qt(l),d=typeof u==`string`?u:void 0,f=`danger`in l&&!!l.danger;return(0,J.jsx)(xe,{className:F(P.item,f&&P.danger),closeOnClick:l.closeOnClick,disabled:l.disabled,label:d,onClick:e=>hl(l,c,e),children:ml(l,{iconAlign:r,reserveIconSpace:a})},s)})}})),vl,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Fl=e((()=>{vl={anchor:null,iconSpaceMode:`global`,items:[],open:!1,triggerId:null},yl=vl,bl=new Set,xl={ready:!1,triggerId:null,x:0,y:0},Sl=()=>{bl.forEach(e=>e())},Cl=e=>(bl.add(e),()=>bl.delete(e)),wl=()=>yl,Tl=()=>vl,El=e=>{xl.x=e.clientX,xl.y=e.clientY,xl.ready=!0,e.target instanceof Element?xl.triggerId=e.target.closest(`[data-contextmenu-trigger]`)?.dataset.contextmenuTrigger??null:xl.triggerId=null},Dl=e=>({contextElement:typeof document>`u`?void 0:document.body,getBoundingClientRect:()=>({bottom:e.y,height:0,left:e.x,right:e.x,toJSON:()=>void 0,top:e.y,width:0,x:e.x,y:e.y})}),Ol=e=>{yl={...yl,...e},Sl()},kl=null,Al=e=>{kl=e},jl=(e,t)=>{let n={x:window.innerWidth/2,y:window.innerHeight/2};Ol({anchor:Dl(xl.ready?{x:xl.x,y:xl.y}:n),footer:t?.footer,header:t?.header,iconAlign:t?.iconAlign,iconSpaceMode:t?.iconSpaceMode??`global`,items:e,listItemHeight:t?.listItemHeight,open:!0,triggerId:xl.triggerId??null,virtual:t?.virtual})},Ml=(e,t)=>{if(!(typeof window>`u`)){if(kl?.show){kl.show(e,t,()=>jl(e,t));return}jl(e,t)}},Nl=()=>{Ol({anchor:null,footer:void 0,header:void 0,iconSpaceMode:`global`,items:[],listItemHeight:void 0,open:!1,triggerId:null,virtual:void 0})},Pl=()=>{if(kl?.close){kl.close(Nl);return}Nl()}})),Il,Ll,Rl,zl,Bl=e((()=>{Yt(),un(),mn(),Bc(),Me(),Uc(),Ue(),_l(),Fl(),Il=t(r(),1),Ll=t(i(),1),L(),be(),Rl={"--lobe-dropdown-animation-duration":`0ms`},zl=(0,Il.memo)(()=>{let e=ln(),t=pn(),n=(0,Il.useSyncExternalStore)(Cl,wl,Tl);(0,Il.useEffect)(()=>{},[e]),(0,Il.useEffect)(()=>{let e=e=>El(e);return window.addEventListener(`pointerdown`,e,!0),window.addEventListener(`contextmenu`,e,!0),()=>{window.removeEventListener(`pointerdown`,e,!0),window.removeEventListener(`contextmenu`,e,!0)}},[]);let r=(0,Il.useMemo)(()=>gl(n.items,[],{iconAlign:n.iconAlign,iconSpaceMode:n.iconSpaceMode}),[n.items,n.iconAlign,n.iconSpaceMode]),{zIndex:i,ref:a}=Vc(`floating`),o=n.header!=null||n.footer!=null;return!e||!n.open&&n.items.length===0?null:(0,Ll.jsx)(at,{open:n.open,onOpenChange:e=>{if(e){Ol({open:e});return}Pl()},children:(0,Ll.jsx)(an,{container:t,children:(0,Ll.jsx)(ot,{anchor:n.anchor??void 0,className:P.positioner,collisionPadding:Mt(),ref:a,sideOffset:6,style:{...Rl,zIndex:i},children:(0,Ll.jsxs)(we,{className:F(P.popup,o&&P.popupWithSlots),"data-has-footer":n.footer==null?void 0:``,"data-has-header":n.header==null?void 0:``,onContextMenu:zc,children:[n.header==null?null:(0,Ll.jsx)(`div`,{className:P.header,children:n.header}),n.virtual?(0,Ll.jsx)(Ze,{itemSize:n.listItemHeight,children:r}):o?(0,Ll.jsx)(`div`,{className:P.slotViewport,children:r}):r,n.footer==null?null:(0,Ll.jsx)(`div`,{className:P.footer,children:n.footer})]})})})})}),zl.displayName=`ContextMenuHost`})),Vl,Hl,Ul=e((()=>{Do(),L(),Nt(),Vl=Ht(({css:e,cssVar:t})=>({active:V.active,dangerRoot:e`
      &&:hover {
        color: ${t.colorError};
      }

      &&:active {
        color: ${t.colorErrorActive};
      }
    `,glass:V.blur,root:e`
      && {
        color: ${t.colorTextTertiary};
      }

      &&:hover {
        color: ${t.colorTextSecondary};
      }

      &&:active {
        color: ${t.colorText};
      }
    `,shadow:V.shadow})),Hl=gt(Vl.root,{defaultVariants:{active:!1,danger:!1,glass:!1,shadow:!1},variants:{active:{false:null,true:Vl.active},danger:{false:null,true:Vl.dangerRoot},glass:{false:null,true:Vl.glass},shadow:{false:null,true:Vl.shadow}}})})),Wl,Gl,Kl,ql,Jl=e((()=>{a(),Wl={large:10,middle:8,small:5},Gl=e=>l(e)?`${e}px`:e,Kl=e=>{let t,n;if(l(e)){let t=e*1.8;return{blockSize:t,borderRadius:Math.floor(t/6)}}switch(e){case`large`:t=44,n=8;break;case`middle`:t=36,n=6;break;case`small`:t=24,n=4;break;default:e?(t=e?.blockSize||36,n=e?.borderRadius||6):(t=`1.8em`,n=`0.3em`)}return{blockSize:t,borderRadius:n}},ql=e=>{if(l(e))return`${e*.4}px`;switch(e){case`large`:return`${Wl.large}px`;case`middle`:return`${Wl.middle}px`;case`small`:return`${Wl.small}px`;default:if(e){let{blockSize:t}=Kl(e),n=e.size??24;return l(t)&&l(n)?`${Math.max(0,(t-n)/2)}px`:`calc((${Gl(t)} - ${Gl(n)}) / 2)`}return`0.4em`}}})),Yl,Xl,Zl,Ql,$l,eu,tu=e((()=>{vr(),Ec(),fs(),Ul(),Jl(),Yl=t(r(),1),Xl=t(i(),1),L(),Zl=e=>e===`filled`?`fill`:e===`outlined`?`default`:`text`,Ql=e=>e===`small`?`small`:e===`large`?`large`:`middle`,$l=(0,Yl.memo)(({active:e,className:t,classNames:n,color:r,danger:i,disabled:a,fill:o,fillOpacity:s,fillRule:c,focusable:l,glass:u,icon:d,loading:f,onClick:p,outdent:m,ref:h,shadow:g,size:_=`middle`,spin:v,style:y,styles:b,title:x,tooltipProps:S,variant:C=`borderless`,...w})=>{let{blockSize:T,borderRadius:E}=(0,Yl.useMemo)(()=>Kl(_),[_]),D=w,O=D[`aria-haspopup`]!==void 0||D[`aria-expanded`]!==void 0,k=D[`aria-label`]??(O&&typeof x==`string`?x:void 0),A=e=>{p?.(e)},ee=d?(0,Xl.jsx)(z,{className:n?.icon,color:r,fill:o,fillOpacity:s,fillRule:c,focusable:l,icon:d,size:_,spin:v,style:{pointerEvents:`none`,...b?.icon}}):void 0,te=C===`borderless`&&m?ql(_):void 0,ne=te?m===`end`?{marginInlineEnd:`-${te}`}:{marginInlineStart:`-${te}`}:void 0,j=(0,Xl.jsx)(ds,{...w,"aria-label":k,className:F(Hl({active:e,danger:i,glass:u,shadow:g}),n?.root,t),danger:i,disabled:a,htmlType:`button`,icon:ee,loading:f,ref:h,size:Ql(_),tabIndex:a?-1:0,type:Zl(C),style:{...ne,borderRadius:E,height:T,width:T,...b?.root,...y},onClick:A});return x?(0,Xl.jsx)(Tc,{title:x,...S,styles:{...S?.styles,container:{pointerEvents:`none`,...S?.styles?.container}},children:j}):j}),$l.displayName=`BaseActionIcon`,eu=$l})),nu,ru=e((()=>{je(),nu={content:N(`acss-1nz79rm`,[`.acss-1nz79rm [class*='ant-modal-footer']{margin:0;padding:16px;}`,`.acss-1nz79rm [class*='ant-modal-header']{display:flex;gap:4px;align-items:center;justify-content:center;height:56px;margin-block-end:0;padding:16px;}`,`.acss-1nz79rm [class*='ant-modal-container']{overflow:hidden;padding:0;border:1px solid var(--ant-color-split);border-radius:var(--ant-border-radius-lg);}`],`
      [class*='ant-modal-footer'] {
        margin: 0;
        padding: 16px;
      }

      [class*='ant-modal-header'] {
        display: flex;
        gap: 4px;
        align-items: center;
        justify-content: center;

        height: 56px;
        margin-block-end: 0;
        padding: 16px;
      }

      [class*='ant-modal-container'] {
        overflow: hidden;
        padding: 0;
        border: 1px solid var(--ant-color-split);
        border-radius: var(--ant-border-radius-lg);
      }
    `),drawerContent:N(`acss-r3i1rf`,[`.acss-r3i1rf [class*='ant-drawer-close']{padding:0;}`,`.acss-r3i1rf [class*='ant-drawer-header']{flex:none;height:56px!important;padding-block:0;padding-inline:16px;}`,`.acss-r3i1rf [class*='ant-drawer-footer']{display:flex;align-items:center;justify-content:flex-end;padding:16px;border:none;}`],`
      [class*='ant-drawer-close'] {
        padding: 0;
      }

      [class*='ant-drawer-header'] {
        flex: none;
        height: 56px !important;
        padding-block: 0;
        padding-inline: 16px;
      }

      [class*='ant-drawer-footer'] {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        padding: 16px;
        border: none;
      }
    `),wrap:N(`acss-1ehi72b`,[`.acss-1ehi72b{overflow:hidden auto;}`],`
      overflow: hidden auto;
    `)}})),iu,au,ou,su=e((()=>{vr(),tu(),ru(),iu=t(r(),1),au=t(i(),1),x(),L(),M(),ou=(0,iu.memo)(({panelRef:e,allowFullscreen:t,children:n,title:r=` `,className:i,classNames:a,width:o=700,onCancel:s,open:c,destroyOnHidden:l,paddings:u,height:d=`75dvh`,enableResponsive:f=!0,footer:p,styles:m,okText:g,onOk:v,cancelText:x,okButtonProps:S,cancelButtonProps:C,confirmLoading:w,...T})=>{let[E,D]=(0,iu.useState)(!1),{mobile:O}=en(),k=p===!1||p===null;return f&&O?(0,au.jsx)(b,{theme:{token:{colorBgElevated:I.colorBgContainer}},children:(0,au.jsx)(y,{className:F(nu.drawerContent,i),closeIcon:(0,au.jsx)(eu,{icon:ne}),destroyOnHidden:l,height:E?`calc(100% - env(safe-area-inset-top))`:d,open:c,panelRef:e,placement:`bottom`,title:r,classNames:typeof a==`function`?a:{...a,wrapper:F(nu.wrap,a?.wrapper)},extra:t&&(0,au.jsx)(eu,{icon:E?oe:le,onClick:()=>D(!E)}),footer:k?null:p||(0,au.jsxs)(au.Fragment,{children:[(0,au.jsx)(h,{color:`default`,variant:`filled`,onClick:s,...C,children:x||`Cancel`}),(0,au.jsx)(h,{loading:w,type:`primary`,onClick:v,...S,style:{marginInlineStart:8,...S?.style},children:g||`OK`})]}),styles:typeof m==`function`?m:{...m,body:{paddingBlock:`16px ${p?0:`16px`}`,paddingInline:u?.desktop??16,...m?.body}},onClose:s,...T,children:n})}):(0,au.jsx)(b,{theme:{token:{colorBgElevated:I.colorBgContainer}},children:(0,au.jsx)(_,{closable:!0,cancelText:x,className:F(nu.content,i),closeIcon:(0,au.jsx)(z,{icon:ne,size:20}),confirmLoading:w,destroyOnHidden:l,footer:k?null:p,mask:{closable:!0},okButtonProps:S,okText:g,open:c,panelRef:e,title:r,width:o,cancelButtonProps:{color:`default`,variant:`filled`,...C},classNames:typeof a==`function`?a:{...a,wrapper:F(nu.wrap,a?.wrapper)},styles:typeof m==`function`?m:{...m,body:{maxHeight:d,overflow:`hidden auto`,paddingBlock:`0 ${p===null?`16px`:0}`,paddingInline:u?.desktop??16,...m?.body}},onCancel:s,onOk:v,...T,children:n})})}),ou.displayName=`Modal`})),cu,lu,uu,du,fu,pu=e((()=>{cu=t(r(),1),lu=t(i(),1),uu=(0,cu.createContext)({close:()=>void 0,setCanDismissByClickOutside:()=>void 0}),du=(0,cu.memo)(({children:e,value:t})=>(0,lu.jsx)(uu,{value:t,children:e})),fu=()=>(0,cu.use)(uu)})),mu,hu,gu,_u,vu=e((()=>{tt(),su(),pu(),mu=t(r(),1),hu=t(i(),1),gu=()=>{},_u=(0,mu.memo)(({id:e,props:t,onClose:n,onUpdate:r,onDestroy:i})=>{let{afterClose:a,afterOpenChange:o,children:s,onCancel:c,open:l,...u}=t,d=on(a??gu),f=on(o??gu),p=on(c??gu),m=on(()=>n(e)),h=on(t=>r(e,{mask:{closable:t}})),g=(0,mu.useMemo)(()=>({close:m,setCanDismissByClickOutside:h}),[m,h]);return(0,hu.jsx)(ou,{...u,open:l??!0,afterClose:(0,mu.useCallback)(()=>{d?.(),i(e)},[d,i,e]),afterOpenChange:(0,mu.useCallback)(t=>{f?.(t),t||i(e)},[f,i,e]),onCancel:(0,mu.useCallback)(e=>{p?.(e),m()},[p,m]),children:(0,hu.jsx)(du,{value:g,children:s})})}),_u.displayName=`ModalStackItem`})),yu,bu,xu,Su=e((()=>{tt(),pu(),yu=t(r(),1),bu=t(i(),1),xu=(0,yu.memo)(({component:e,id:t,onClose:n,onUpdate:r,open:i,options:a,props:o})=>{let s=on(n),c=on(()=>s(t)),l=on(e=>{r(t,{mask:{closable:e}})}),u=(0,yu.useMemo)(()=>({close:c,setCanDismissByClickOutside:l}),[c,l]),d=a?.openKey??`open`,f=a?.onCloseKey??`onClose`;return(0,bu.jsx)(du,{value:u,children:(0,bu.jsx)(e,{...o,[f]:c,[d]:i})})}),xu.displayName=`RawModalStackItem`})),Cu,wu,Tu,Eu,Du,Ou,ku,Au,ju,Mu,Nu,Pu,Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu=e((()=>{un(),mn(),Gc(),vu(),Su(),Cu=t(r(),1),wu=t(i(),1),Tu=t(n(),1),Eu=[],Du=new Set,Ou=new Map,ku=()=>{Du.forEach(e=>e())},Au=e=>(Du.add(e),()=>Du.delete(e)),ju=[],Mu=()=>Eu,Nu=()=>ju,Pu=({children:e,root:t})=>{let n=pn();return(0,Tu.createPortal)(e,t??n??document.body)},Fu=(e,t)=>{let n=!1;Eu=Eu.map(r=>r.id!==e||r.kind!==`modal`?r:(n=!0,{...r,props:{...r.props,...t}})),n&&ku()},Iu=(e,t)=>{let n=!1;Eu=Eu.map(r=>r.id!==e||r.kind!==`raw`?r:(n=!0,{...r,props:{...r.props,...t}})),n&&ku()},Lu=(e,t)=>{let n=!1;if(Eu=Eu.map(r=>r.id!==e||r.kind!==`raw`||r.open===t?r:(n=!0,{...r,open:t})),t){let t=Ou.get(e);t&&(clearTimeout(t),Ou.delete(e))}n&&ku()},Ru=e=>{let t=Eu.find(t=>t.id===e);if(!t)return;if(t.kind===`modal`){Fu(e,{open:!1});return}if(Lu(e,!1),!(t.options?.destroyOnClose??!0))return;let n=t.options?.destroyDelay??200,r=Ou.get(e);r&&clearTimeout(r);let i=window.setTimeout(()=>{Ou.delete(e),zu(e)},n);Ou.set(e,i)},zu=e=>{let t=Ou.get(e);t&&(clearTimeout(t),Ou.delete(e));let n=Eu.filter(t=>t.id!==e);n.length!==Eu.length&&(Eu=n,ku())},Bu=(0,Cu.memo)(({stack:e})=>ln()?e.map(e=>e.kind===`modal`?(0,wu.jsx)(_u,{id:e.id,props:e.props,onClose:Ru,onDestroy:zu,onUpdate:Fu},e.id):(0,wu.jsx)(xu,{component:e.component,id:e.id,open:e.open,options:e.options,props:e.props,onClose:Ru,onUpdate:Iu},e.id)):null),Bu.displayName=`ModalStack`,Vu=({root:e})=>{let t=(0,Cu.useSyncExternalStore)(Au,Mu,Nu),n=ln();return(0,Cu.useEffect)(()=>{if(n)return Wc(`ModalHost`,e??document.body)},[n,e]),!n||t.length===0?null:(0,wu.jsx)(Pu,{root:e,children:(0,wu.jsx)(Bu,{stack:t})})}})),Uu,Wu,Gu,Ku,qu,Ju=e((()=>{Uu=t(r(),1),Wu=e=>{let t=e,n=(0,Uu.useCallback)(e=>t.subscribeStore(e),[t]),r=(0,Uu.useCallback)(()=>t.store,[t]);return(0,Uu.useSyncExternalStore)(n,r,r)},Gu=e=>{if(!e||!e.isConnected)return!0;try{let t=e;for(;t;){if(getComputedStyle(t).display===`none`)return!0;t=t.parentElement}return!1}catch{return!1}},Ku=(e,t,n)=>{let r=n?.enabled??!0,i=e.useState?.(`open`)??!!e.state.open,a=r&&i;(0,Uu.useLayoutEffect)(()=>{if(!a)return;let n=0,r=()=>{if(Gu(e.state.activeTriggerElement??null)){t();return}n=window.requestAnimationFrame(r)};return r(),()=>window.cancelAnimationFrame(n)},[t,a,e])},qu=(e,t)=>{let n=t?.enabled??!0,r=t?.threshold??.5,i=e.useState?.(`open`)??!!e.state.open,a=e.useState?.(`positionerElement`)??e.state.positionerElement??null;(0,Uu.useLayoutEffect)(()=>{let t=e.state.positionerElement??a;if(!n||!i||!t){t&&delete t.dataset.zeroOrigin;return}let o=0,s=()=>{let n=e.state.positionerElement??t;if(!n)return;let i=n.getBoundingClientRect();Math.abs(i.left)<=r&&Math.abs(i.top)<=r?n.dataset.zeroOrigin=`true`:delete n.dataset.zeroOrigin,o=window.requestAnimationFrame(s)};return s(),()=>{window.cancelAnimationFrame(o);let n=e.state.positionerElement??t;n&&delete n.dataset.zeroOrigin}},[n,i,a,e,r])}})),Yu,Xu,Zu,Qu,$u,ed=e((()=>{Yu=t(r(),1),Xu=[[{opacity:0,scale:.97},{opacity:1,scale:1}],{duration:200,easing:`cubic-bezier(0.33, 1, 0.68, 1)`}],Zu=e=>{let t=e.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2}},Qu=()=>typeof window<`u`&&typeof window.matchMedia==`function`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,$u=(e,t)=>{let n=t?.enabled??!0,r=t?.threshold??280,i=e.useState?.(`activeTriggerElement`)??e.state.activeTriggerElement??null,a=e.useState?.(`open`)??!!e.state.open,o=e.useState?.(`popupElement`)??e.state.popupElement??null,s=(0,Yu.useRef)({center:null,el:null}),[c,l]=(0,Yu.useState)(!1);return(0,Yu.useLayoutEffect)(()=>{if(!a||!n){s.current={center:null,el:null},l(!1);return}let e=s.current;if(i===e.el)return;let t=i?Zu(i):null,c=!!(e.el&&e.center&&t&&Math.hypot(t.x-e.center.x,t.y-e.center.y)>r);s.current={center:t,el:i},l(c),c&&o&&!Qu()&&o.animate?.(...Xu)},[i,n,a,o,r]),c}})),td,nd,rd,id=e((()=>{ys(),Yt(),Wt(),mn(),zs(),Hs(),Ws(),_c(),Ju(),ed(),td=t(r(),1),nd=t(i(),1),L(),Ft(),rd=({children:e,disableDestroyOnInvalidTrigger:t=!1,disableZeroOriginGuard:n=!1,layoutAnimation:r=!0,popupContainer:i,...a})=>{let[{handle:o,key:s},c]=(0,td.useState)(()=>({handle:kt(),key:0})),l=(0,td.useRef)(null),u=(0,td.useCallback)(()=>{l.current=null,c(({key:e})=>({handle:kt(),key:e+1}))},[]),d=(0,td.useCallback)(e=>{l.current?.onOpenChange?.(e)},[]),f=pn(),p=ht()??f,m=Wu(o);Ku(m,u,{enabled:!t}),qu(m,{enabled:!n});let h=$u(m,{enabled:r});return(0,nd.jsx)(_s,{value:o,children:(0,nd.jsxs)(vs,{value:a,children:[e,(0,nd.jsx)(Fe,{handle:o,onOpenChange:d,children:({payload:e})=>{let t=e??null;if(l.current=t,!t||t.title==null&&!t.hotkey)return null;let n=t.arrow??!1,a=t.placement??`top`,o=Rs[a]??Rs.top,s=n?8:6,c={arrow:F(Us.arrow,t.classNames?.arrow),popup:F(Us.popup,t.className,t.classNames?.root,t.classNames?.container),positioner:Us.positioner,viewport:F(Us.viewport,t.classNames?.content)},u=(()=>{if(typeof t.styles!=`function`)return t.styles})(),d={arrow:u?.arrow,popup:{...u?.root,...u?.container},positioner:{zIndex:t.zIndex??114514},viewport:u?.content},f=(0,nd.jsx)(ft,{className:c.viewport,"data-repop":h||void 0,style:d.viewport,children:(0,nd.jsx)(gc,{hotkey:t.hotkey,hotkeyProps:t.hotkeyProps,title:t.title})}),m=(0,nd.jsx)(ye,{align:o.align,className:c.positioner,"data-layout-animation":r||void 0,"data-placement":a,"data-repop":h||void 0,side:o.side,sideOffset:s,style:d.positioner,...t.positionerProps,collisionPadding:t.positionerProps?.collisionPadding??Mt(),children:(0,nd.jsxs)(Ke,{className:c.popup,"data-layout-animation":r||void 0,"data-repop":h||void 0,style:d.popup,...t.popupProps,children:[n&&(0,nd.jsx)(ke,{className:c.arrow,style:d.arrow,children:Vs}),f]})}),g=t.popupContainer??i??p;return g?(0,nd.jsx)(He,{container:g,children:m}):null}},s)]})})},rd.displayName=`TooltipGroup`})),Y,ad=e((()=>{Wn(),L(),Y=Ht(({css:e,cssVar:t})=>({backdrop:e`
    position: fixed;
    z-index: 1200;
    inset: 0;

    background: color-mix(in srgb, ${t.colorBgContainer} 60%, transparent);

    transition: opacity 180ms cubic-bezier(0.32, 0.72, 0, 1);

    &[data-starting-style],
    &[data-ending-style] {
      opacity: 0;
    }
  `,close:e`
    cursor: pointer;

    position: absolute;
    inset-block-start: 8px;
    inset-inline-end: 12px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    border-radius: 12px;

    color: ${t.colorTextTertiary};

    background: transparent;

    transition: all 160ms cubic-bezier(0.32, 0.72, 0, 1);

    &:hover {
      transform: scale(1.04);
      color: ${t.colorText};
      background: ${t.colorFillSecondary};
    }

    ${Hn};
  `,closeInline:e`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    border-radius: 12px;

    color: ${t.colorTextTertiary};

    background: transparent;

    transition: all 160ms cubic-bezier(0.32, 0.72, 0, 1);

    &:hover {
      transform: scale(1.04);
      color: ${t.colorText};
      background: ${t.colorFillSecondary};
    }

    ${Hn};
  `,content:e`
    overflow: hidden auto;
    padding-block: 0 16px;
    padding-inline: 16px;
  `,contentNoHeader:e`
    padding-block-start: 16px;
  `,footer:e`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: flex-end;

    padding-block: 12px;
    padding-inline: 16px;
  `,header:e`
    display: flex;
    align-items: center;
    justify-content: space-between;

    min-height: 48px;
    padding-block: 8px;
    padding-inline: 16px;
  `,headerDraggable:e`
    cursor: default;
    user-select: none;
  `,popup:e`
    pointer-events: none;

    position: fixed;
    z-index: 1201;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  `,popupInner:e`
    pointer-events: auto;

    position: relative;

    overflow: hidden;
    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    width: calc(100% - 32px);
    max-width: 520px;
    max-height: calc(100dvh - 64px);
    border-radius: 12px;

    background: ${t.colorBgElevated};
    box-shadow: ${t.boxShadow}, var(--lobe-ring);

    transition:
      transform 220ms cubic-bezier(0.32, 0.72, 0, 1),
      opacity 220ms cubic-bezier(0.32, 0.72, 0, 1);

    &[data-starting-style] {
      transform: scale(0.97);
      opacity: 0;
    }

    &[data-ending-style] {
      transform: scale(0.98);
      opacity: 0;
      transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
      transition-duration: 120ms;
    }
  `,title:e`
    margin: 0;

    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
    color: ${t.colorText};
  `,loadingSpinner:e`
    @keyframes modal-spin {
      to {
        transform: rotate(360deg);
      }
    }

    display: inline-block;

    width: 14px;
    height: 14px;
    border: 2px solid currentcolor;
    border-block-start-color: transparent;
    border-radius: 50%;

    animation: modal-spin 0.6s linear infinite;
  `,fullscreenPopupInner:e`
    width: 100% !important;
    max-width: 100% !important;
    height: 100dvh !important;
    max-height: 100dvh !important;
    border: none;
    border-radius: 12px;
  `,fullscreenToggle:e`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;
    padding: 0;
    border: none;
    border-radius: 12px;

    color: ${t.colorTextTertiary};

    background: transparent;

    transition: all 160ms cubic-bezier(0.32, 0.72, 0, 1);

    &:hover {
      transform: scale(1.04);
      color: ${t.colorText};
      background: ${t.colorFillSecondary};
    }

    ${Hn};
  `,headerActions:e`
    display: flex;
    gap: 4px;
    align-items: center;
    margin-inline-end: -4px;
  `,denyAnimation:e`
    @keyframes modal-deny {
      0%,
      100% {
        transform: translateX(0);
      }

      20% {
        transform: translateX(-5px);
      }

      40% {
        transform: translateX(5px);
      }

      60% {
        transform: translateX(-3px);
      }

      80% {
        transform: translateX(2px);
      }
    }

    animation: modal-deny 280ms cubic-bezier(0.36, 0.66, 0.04, 1);
  `,viewport:e`
    position: fixed;
    z-index: 1200;
    inset: 0;
    overflow: auto;
  `}))})),od,sd,cd,ld=e((()=>{od=[.32,.72,0,1],sd={animate:{opacity:1,scale:1},exit:{opacity:0,scale:.98,transition:{duration:.12,ease:[.4,0,1,1]}},initial:{opacity:0,scale:.97},transition:{duration:.22,ease:od}},cd={duration:.18,ease:od}})),ud,dd,fd,pd,md=e((()=>{ud=t(r(),1),dd=(0,ud.createContext)(null),fd=()=>(0,ud.use)(dd),pd=dd.Provider})),hd,X,gd,_d,vd,yd,bd,xd,Sd,Cd,wd,Td,Ed,Dd,Od,kd,Ad,jd,Md=e((()=>{ti(),mn(),Uc(),ld(),md(),ad(),hd=t(r(),1),X=t(i(),1),L(),f(),yt(),M(),Ce(),gd=(e,t)=>typeof t==`function`?n=>F(e,t(n)):F(e,t),_d=(0,hd.createContext)(null),vd=(0,hd.createContext)(null),yd=()=>(0,hd.use)(_d),bd=()=>(0,hd.use)(vd),xd=({open:e,children:t,onExitComplete:n,zIndex:r,...i})=>{let[a,o]=(0,hd.useState)(!!e);(0,hd.useEffect)(()=>{e&&o(!0)},[e]);let s=(0,hd.useCallback)(()=>{o(!1),n?.()},[n]),c=(0,hd.useMemo)(()=>({onExitComplete:s}),[s]),{zIndex:l,ref:u}=Vc(`modal`,r),d=(0,hd.useMemo)(()=>({popupRef:u,zIndex:l}),[l,u]);return a?(0,X.jsx)(_d,{value:e,children:(0,X.jsx)(vd,{value:c,children:(0,X.jsx)(pd,{value:d,children:(0,X.jsx)(Oe,{modal:!0,open:!0,...i,children:t})})})}):null},Sd=({zIndex:e,children:t,...n})=>{let{zIndex:r,ref:i}=Vc(`modal`,e);return(0,X.jsx)(pd,{value:(0,hd.useMemo)(()=>({popupRef:i,zIndex:r}),[r,i]),children:(0,X.jsx)(Oe,{modal:!0,...n,children:t})})},Cd=({open:e,onExitComplete:t,...n})=>e===void 0?(0,X.jsx)(Sd,{...n}):(0,X.jsx)(xd,{open:e,onExitComplete:t,...n}),wd=({container:e,...t})=>{let n=pn();return(0,X.jsx)(Ge,{container:e??n??void 0,...t})},Td=({className:e,style:t,...n})=>{let r=yd(),i=fd(),a=ei(),o=i?.zIndex===void 0?void 0:{zIndex:i.zIndex};return r===null?(0,X.jsx)(Pe,{...n,className:gd(Y.backdrop,e),style:{...o,...t}}):(0,X.jsx)(Pe,{...n,className:F(Y.backdrop,e),style:{...o,...t,transition:`none`},render:(0,X.jsx)(a.div,{animate:{opacity:+!!r},initial:{opacity:0},transition:cd})})},Ed=({className:e,children:t,width:n,style:r,motionProps:i,panelClassName:a,popupStyle:o,ref:s,...c})=>{let l=yd(),u=bd(),d=fd(),f=ei(),p=d?.zIndex===void 0?void 0:{zIndex:d.zIndex+1},h=Vt([s,d?.popupRef]);return l!==null&&u?(0,X.jsx)(ve,{...c,className:F(Y.popup,e),ref:h,style:{...p,...o},children:(0,X.jsx)(m,{onExitComplete:u.onExitComplete,children:l?(0,hd.createElement)(f.div,{...sd,...i,className:F(Y.popupInner,a),key:`modal-popup-panel`,style:{maxWidth:n??void 0,transition:`none`,...r}},t):null})}):(0,X.jsx)(ve,{...c,className:gd(Y.popup,e),ref:h,style:{...p,...o},children:(0,X.jsx)(`div`,{className:F(Y.popupInner,a),style:{maxWidth:n??void 0,...r},children:t})})},Dd=({className:e,...t})=>(0,X.jsx)(`div`,{...t,className:F(Y.header,e)}),Od=({className:e,...t})=>(0,X.jsx)($t,{...t,className:gd(Y.title,e)}),kd=({className:e,...t})=>(0,X.jsx)(`div`,{...t,className:F(Y.content,e)}),Ad=({className:e,...t})=>(0,X.jsx)(`div`,{...t,className:F(Y.footer,e)}),jd=({className:e,children:t,...n})=>(0,X.jsx)(Je,{...n,className:gd(Y.close,e),children:t??(0,X.jsx)(ne,{size:16})})})),Nd,Pd,Fd,Id=e((()=>{Nd=t(r(),1),Pd=(0,Nd.createContext)({close:()=>void 0,setCanDismissByClickOutside:()=>void 0}),Fd=()=>(0,Nd.use)(Pd)}));function Ld(){let e=Hd++,t=e===0?`BaseModalHost`:`BaseModalHost-${e}`,n=[],r=0,i=new Set,a=()=>i.forEach(e=>e()),o=e=>(i.add(e),()=>i.delete(e)),s=[],c=()=>n,l=()=>s,u=(e,t)=>{let r=!1;n=n.map(n=>n.id===e?(r=!0,{...n,props:{...n.props,...t}}):n),r&&a()},d=e=>{u(e,{open:!1})},f=e=>{let t=n.filter(t=>t.id!==e);t.length!==n.length&&(n=t,a())},p=(0,Rd.memo)(({entry:e})=>{let{id:t,props:n}=e,{children:r,classNames:i,content:a,footer:o,maskClosable:s,onOpenChange:c,onOpenChangeComplete:l,open:p,styles:m,title:h,width:g}=n,_=p??!0,v=(0,Rd.useCallback)((e,n)=>{!e&&s===!1&&n?.reason===`outside-press`||(e||d(t),c?.(e))},[t,s,c]),y=(0,Rd.useCallback)(()=>{l?.(!1),f(t)},[t,l]),b=(0,Rd.useCallback)(()=>d(t),[t]),x=(0,Rd.useCallback)(e=>u(t,{maskClosable:e}),[t]),S=h!==void 0&&h!==!1&&h!==null;return(0,Z.jsx)(Pd,{value:{close:b,setCanDismissByClickOutside:x},children:(0,Z.jsx)(Cd,{open:_,onExitComplete:y,onOpenChange:v,children:(0,Z.jsxs)(wd,{children:[(0,Z.jsx)(Td,{className:i?.backdrop,style:m?.backdrop}),(0,Z.jsxs)(Ed,{className:i?.popup,popupStyle:m?.popup,width:g,children:[S&&(0,Z.jsxs)(Dd,{className:i?.header,style:m?.header,children:[(0,Z.jsx)(Od,{className:i?.title,style:m?.title,children:h}),(0,Z.jsx)(jd,{className:i?.close,style:m?.close})]}),(0,Z.jsx)(kd,{className:F(!S&&Y.contentNoHeader,i?.content),style:m?.content,children:a??r}),o]})]})})})});p.displayName=`ModalStackItem`;let m=(0,Rd.memo)(({stack:e})=>ln()?e.map(e=>(0,Z.jsx)(p,{entry:e},e.id)):null);m.displayName=`ModalStackRenderer`;let h=({root:e})=>{let n=(0,Rd.useSyncExternalStore)(o,c,l),r=ln();return(0,Rd.useEffect)(()=>{if(r)return Wc(t,e??document.body)},[r,e]),!r||n.length===0?null:(0,Z.jsx)(Bd,{root:e,children:(0,Z.jsx)(m,{stack:n})})},g=e=>{let t=`base-modal-${Date.now()}-${r++}`;return n=[...n,{id:t,props:{...e,open:e.open??!0}}],a(),{close:()=>d(t),destroy:()=>f(t),setCanDismissByClickOutside:e=>u(t,{maskClosable:e}),update:e=>u(t,e)}};return{ModalHost:h,confirmModal:e=>{let t=g({content:(0,Z.jsx)(Vd,{config:e}),styles:{content:{padding:0}},title:e.title,width:420});return{close:t.close,destroy:t.destroy}},createModal:g}}var Rd,Z,zd,Bd,Vd,Hd,Ud,Wd,Gd,Kd,qd=e((()=>{un(),mn(),fs(),Gc(),ad(),Md(),Id(),Rd=t(r(),1),Z=t(i(),1),L(),zd=t(n(),1),Bd=({children:e,root:t})=>{let n=pn();return(0,zd.createPortal)(e,t??n??document.body)},Vd=({config:e})=>{let{close:t}=Fd(),[n,r]=(0,Rd.useState)(!1),{cancelText:i=`Cancel`,content:a,okButtonProps:o,okText:s=`OK`,onCancel:c,onOk:l}=e,u=(0,Rd.useCallback)(()=>{t(),c?.()},[t,c]),d=(0,Rd.useCallback)(async()=>{if(l)try{let e=l();e&&typeof e.then==`function`&&(r(!0),await e,r(!1))}catch{r(!1);return}t()},[t,l]);return(0,Z.jsxs)(Z.Fragment,{children:[a&&(0,Z.jsx)(`div`,{style:{padding:`12px 16px`},children:a}),(0,Z.jsxs)(Ad,{children:[(0,Z.jsx)(ds,{onClick:u,children:i}),(0,Z.jsx)(ds,{loading:n,type:`primary`,...o,onClick:d,children:s})]})]})},Vd.displayName=`ConfirmBody`,Hd=0,Ud=Ld(),Wd=Ud.ModalHost,Gd=Ud.createModal,Kd=Ud.confirmModal})),Q,Jd,Yd=e((()=>{je(),Nt(),Q={code:N(`acss-15uzuxl`,[`.acss-15uzuxl{font-family:var(--ant-font-family-code);}`],`
    font-family: var(--ant-font-family-code);
  `),danger:N(`acss-zknb5i`,[`.acss-zknb5i{color:var(--ant-color-error);}`],`
    color: var(--ant-color-error);
  `),delete:N(`acss-ndethb`,[`.acss-ndethb{text-decoration:line-through;}`],`
    text-decoration: line-through;
  `),disabled:N(`acss-1pxetug`,[`.acss-1pxetug{cursor:not-allowed;color:var(--ant-color-text-disabled);}`],`
    cursor: not-allowed;
    color: var(--ant-color-text-disabled);
  `),ellipsis:N(`acss-1n5gm1d`,[`.acss-1n5gm1d{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `),ellipsisMulti:N(`acss-h0wo9i`,[`.acss-h0wo9i{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;text-overflow:ellipsis;}`],`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  `),h1:N(`acss-g6u3hn`,[`.acss-g6u3hn{font-size:calc(var(--ant-font-size) * 2.5);font-weight:bold;line-height:1.25;}`],`
    font-size: calc(var(--ant-font-size) * 2.5);
    font-weight: bold;
    line-height: 1.25;
  `),h2:N(`acss-u2z3e`,[`.acss-u2z3e{font-size:calc(var(--ant-font-size) * 2);font-weight:bold;line-height:1.25;}`],`
    font-size: calc(var(--ant-font-size) * 2);
    font-weight: bold;
    line-height: 1.25;
  `),h3:N(`acss-86b26i`,[`.acss-86b26i{font-size:calc(var(--ant-font-size) * 1.5);font-weight:bold;line-height:1.25;}`],`
    font-size: calc(var(--ant-font-size) * 1.5);
    font-weight: bold;
    line-height: 1.25;
  `),h4:N(`acss-1x2gn22`,[`.acss-1x2gn22{font-size:calc(var(--ant-font-size) * 1.25);font-weight:bold;line-height:1.25;}`],`
    font-size: calc(var(--ant-font-size) * 1.25);
    font-weight: bold;
    line-height: 1.25;
  `),h5:N(`acss-1g8t8ur`,[`.acss-1g8t8ur{font-size:var(--ant-font-size);font-weight:bold;line-height:1.25;}`],`
    font-size: var(--ant-font-size);
    font-weight: bold;
    line-height: 1.25;
  `),info:N(`acss-j5912s`,[`.acss-j5912s{color:var(--ant-color-info);}`],`
    color: var(--ant-color-info);
  `),italic:N(`acss-ukvbv`,[`.acss-ukvbv{font-style:italic;}`],`
    font-style: italic;
  `),mark:N(`acss-a7p4cp`,[`.acss-a7p4cp{color:#000;background-color:var(--ant-yellow);}`],`
    color: #000;
    background-color: var(--ant-yellow);
  `),p:N(`acss-13rnoyq`,[`.acss-13rnoyq{margin-block:0;}`],`
    margin-block: 0;
  `),secondary:N(`acss-1axbjpc`,[`.acss-1axbjpc{color:var(--ant-color-text-description);}`],`
    color: var(--ant-color-text-description);
  `),strong:N(`acss-xl6oz7`,[`.acss-xl6oz7{font-weight:bold;}`],`
    font-weight: bold;
  `),success:N(`acss-1agh9uj`,[`.acss-1agh9uj{color:var(--ant-color-success);}`],`
    color: var(--ant-color-success);
  `),text:N(`acss-644054`,[`.acss-644054{color:var(--ant-color-text);}`],`
    color: var(--ant-color-text);
  `),underline:N(`acss-jsjd3l`,[`.acss-jsjd3l{text-decoration:underline;}`],`
    text-decoration: underline;
  `),warning:N(`acss-rc3uuo`,[`.acss-rc3uuo{color:var(--ant-color-warning);}`],`
    color: var(--ant-color-warning);
  `)},Jd=gt(Q.text,{defaultVariants:{},variants:{as:{h1:Q.h1,h2:Q.h2,h3:Q.h3,h4:Q.h4,h5:Q.h5,p:Q.p},code:{true:Q.code},delete:{true:Q.delete},disabled:{true:Q.disabled},ellipsis:{multi:Q.ellipsisMulti,true:Q.ellipsis},italic:{true:Q.italic},mark:{true:Q.mark},strong:{true:Q.strong},type:{danger:Q.danger,info:Q.info,secondary:Q.secondary,success:Q.success,warning:Q.warning},underline:{true:Q.underline}}})})),Xd,Zd,Qd,$d=e((()=>{hs(),Ec(),Yd(),Xd=t(r(),1),Zd=t(i(),1),L(),Qd=({as:e=`div`,align:t,className:n,children:r,style:i,type:a,disabled:o,strong:s,italic:c,underline:l,delete:u,fontSize:d,lineClamp:f,lineHeight:p,mark:m,code:h,color:g,weight:_,ellipsis:v,noWrap:y,textDecoration:b,textTransform:x,whiteSpace:S,wordBreak:C,...w})=>{let T=(0,Xd.useRef)(null),E=ms(T,v,r),D=typeof v==`object`&&!!v.rows&&v.rows>1,O=typeof v==`object`&&v.tooltipWhenOverflow,k=(0,Zd.jsx)(e,{ref:T,style:{...g&&{color:g},..._&&{fontWeight:_},...p&&{lineHeight:p},...x&&{textTransform:x},...b&&{textDecoration:b},...C&&{wordBreak:C},...typeof v==`object`&&v.rows&&{WebkitLineClamp:v.rows},...!v&&!!f&&{WebkitBoxOrient:`vertical`,WebkitLineClamp:f,display:`-webkit-box`,overflow:`hidden`,textOverflow:`ellipsis`},...d&&{fontSize:d},...t&&{textAlign:t},...!D&&y&&{whiteSpace:`nowrap`},...S&&{whiteSpace:S},...i},className:F(Jd({as:[`h1`,`h2`,`h3`,`h4`,`h5`,`p`].includes(e)?e:void 0,code:h,delete:u,disabled:o,ellipsis:v?typeof v==`object`&&v.rows?`multi`:!0:void 0,italic:c,mark:m,strong:s,type:a,underline:l}),n),...w,children:r});if(v&&typeof v==`object`&&(v.tooltip||v.tooltipWhenOverflow)){if(O&&!E)return k;let e=typeof v.tooltip==`string`?v.tooltip:r;return v.tooltip&&typeof v.tooltip==`object`?(0,Zd.jsx)(Tc,{...v.tooltip,title:v.tooltip?.title||e,children:k}):(0,Zd.jsx)(Tc,{title:e,children:k})}return k},Qd.displayName=`Text`})),ef,tf=e((()=>{Wn(),L(),ef=Ht(({css:e,cssVar:t})=>({indicator:e`
    display: flex;
    align-items: center;
    justify-content: center;
  `,label:e`
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;

    &:has([data-disabled]) {
      cursor: not-allowed;
    }
  `,root:e`
    cursor: pointer;

    display: inline-flex;
    flex: none;
    align-items: center;
    justify-content: center;

    margin: 0;
    padding: 0;
    border: 1px solid ${t.colorBorderSecondary};

    color: ${t.colorBgLayout};

    background: ${t.colorBgContainer};
    outline: none;

    transition:
      background 150ms ${t.motionEaseOut},
      border-color 150ms ${t.motionEaseOut};

    &:hover:not([data-disabled], [data-checked], [data-indeterminate]) {
      border-color: ${t.colorBorder};
    }

    ${Hn};

    &[data-checked],
    &[data-indeterminate] {
      border-color: var(--lobe-checkbox-bg, ${t.colorPrimary});
      background: var(--lobe-checkbox-bg, ${t.colorPrimary});
    }

    &[data-disabled] {
      cursor: not-allowed;

      border-color: ${t.colorFill};

      color: ${t.colorText};

      opacity: 0.25;
      background: ${t.colorFill};
    }
  `}))})),nf,rf,af,of=e((()=>{$d(),tf(),nf=t(r(),1),rf=t(i(),1),L(),M(),$e(),af=(0,nf.memo)(({size:e=16,shape:t=`square`,backgroundColor:n,children:r,className:i,classNames:a,styles:o,style:s,textProps:c,onChange:l,disabled:u,indeterminate:d,...f})=>{let p={borderRadius:t===`square`?`max(4px, ${Math.round(e/4)}px)`:`50%`,height:e,width:e,...n?{"--lobe-checkbox-bg":n}:{},...r?{}:s,...o?.checkbox},m=(0,rf.jsx)(Jt,{disabled:u,indeterminate:d,style:p,className:F(ef.root,r?a?.checkbox:i,a?.checkbox),onCheckedChange:l,...f,children:(0,rf.jsx)(ge,{className:ef.indicator,children:d?(0,rf.jsx)(ie,{size:e,strokeWidth:3,style:{transform:`scale(${t===`square`?.75:.66})`}}):(0,rf.jsx)(fe,{size:e,strokeWidth:3,style:{transform:`scale(${t===`square`?.75:.66})`}})})});return r?(0,rf.jsxs)(`label`,{className:F(ef.label,i,a?.wrapper),style:{gap:Math.floor(e/2),...s,...o?.wrapper},children:[m,(0,rf.jsx)(Qd,{as:`span`,className:a?.text,style:o?.text,...c,type:u?`secondary`:c?.type,children:r})]}):m}),af.displayName=`Checkbox`})),sf,cf,$,lf,uf,df=e((()=>{Do(),L(),Nt(),sf=`12px 16px`,cf=e=>!e&&e!==0?sf:`${typeof e==`string`?e:`${e}px`} !important`,$=`ant`,lf=Ht(({css:e,cssVar:t})=>({borderless:e`
      &.${$}-collapse {
        .${$}-collapse-header {
          padding-inline: 0;
        }
        .${$}-collapse-panel {
          padding-inline: 0;
          .${$}-collapse-body {
            padding-inline: 0;
          }
        }
      }
    `,desc:e`
      font-size: 12px;
      color: ${t.colorTextDescription};
    `,filledDark:e`
      &.${$}-collapse {
        .${$}-collapse-item {
          background: ${t.colorBgLayout};
          .${$}-collapse-panel {
            margin-inline: 3px;
            margin-block-end: 3px;
            border-radius: ${t.borderRadius};
            ${V.variantOutlinedWithoutHover};
          }
        }
      }
    `,filledLight:e`
      &.${$}-collapse {
        .${$}-collapse-item {
          background: ${t.colorFillQuaternary};
          .${$}-collapse-panel {
            margin-inline: 3px;
            margin-block-end: 3px;
            border-radius: ${t.borderRadius};
            ${V.variantOutlinedWithoutHover};
            background: ${t.colorBgContainer};
            ${V.shadow};
          }
        }
      }
    `,gapOutlined:e`
      &.${$}-collapse {
        border: none;
        background: transparent;
        .${$}-collapse-item {
          border: 1px solid ${t.colorFillSecondary};
          background: ${t.colorBgContainer};
        }

        .${$}-collapse-item:not(:first-child) {
          .${$}-collapse-header {
            border-block-start: none;
          }
        }
      }
    `,gapRoot:e`
      &.${$}-collapse {
        display: flex;
        flex-direction: column;
        border: none;
        box-shadow: none;
        .${$}-collapse-item {
          border: none;
          border-radius: ${t.borderRadiusLG};
        }
      }
    `,hideCollapsibleIcon:e`
      .${$}-collapse-expand-icon {
        display: none !important;
      }
    `,icon:e`
      cursor: pointer;
      transition: all 100ms ${t.motionEaseOut};
    `,outlined:e`
      &.${$}-collapse {
        border: 1px solid ${t.colorFillSecondary};
        background: ${t.colorBgContainer};
        .${$}-collapse-item .${$}-collapse-header {
          transition: none;
        }
        .${$}-collapse-item-active .${$}-collapse-header {
          border-block-end: 1px solid ${t.colorFillTertiary};
        }
        .${$}-collapse-item:not(:first-child) {
          .${$}-collapse-header {
            border-block-start: 1px solid ${t.colorFillTertiary};
          }
        }
      }
    `,root:e`
      &.${$}-collapse {
        display: flex;
        flex-direction: column;
        background: transparent;

        .${$}-collapse-header {
          overflow: hidden;
          display: flex;
          flex: none;
          gap: 0.75em;
          align-items: flex-start;

          border-radius: 0 !important;

          .${$}-collapse-header-text {
            flex: 1;
          }

          .${$}-collapse-expand-icon {
            align-items: center;
            min-height: 28px;
            margin: 0;
            padding: 0;
          }

          .${$}-collapse-extra {
            display: flex;
            align-items: center;
            min-height: 28px;
          }
        }

        .${$}-collapse-panel {
          background: transparent;
        }
      }
    `,title:e`
      font-size: 16px;
      font-weight: 500;
      line-height: 28px;
    `})),uf=gt(lf.root,{compoundVariants:[{class:lf.gapOutlined,gap:!0,variant:`outlined`},{class:lf.filledDark,isDarkMode:!0,variant:`filled`},{class:lf.filledLight,isDarkMode:!1,variant:`filled`}],defaultVariants:{collapsible:!0,gap:!1,isDarkMode:!1},variants:{collapsible:{false:lf.hideCollapsibleIcon,true:null},gap:{false:null,true:lf.gapRoot},isDarkMode:{false:null,true:null},variant:{borderless:lf.borderless,filled:null,outlined:lf.outlined}}})})),ff,pf,mf,hf=e((()=>{To(),vr(),df(),ff=t(r(),1),pf=t(i(),1),x(),L(),M(),mf=(0,ff.memo)(({style:e,variant:t=`filled`,gap:n=0,className:r,padding:i=sf,size:a,collapsible:o=!0,items:s,styles:c,classNames:l,ref:u,...d})=>{let{isDarkMode:f}=Ae(),p=(0,ff.useMemo)(()=>s.map(({icon:e,desc:t,label:n,...r})=>{let i=(0,pf.jsx)(`div`,{className:F(lf.title,!e&&!t&&l?.header,l?.title),style:{...!e&&!t?c?.header:{},...c?.title},children:n});return e&&(i=(0,pf.jsxs)(wo,{horizontal:!0,className:F(lf.title,!t&&l?.header),gap:8,style:t?void 0:c?.header,children:[(0,ff.isValidElement)(e)?e:(0,pf.jsx)(z,{icon:e,size:{size:`1.1em`}}),i]})),t&&(i=(0,pf.jsxs)(wo,{className:l?.header,style:c?.header,children:[i,(0,pf.jsx)(`div`,{className:F(lf.desc,l?.desc),style:c?.desc,children:t})]})),{label:i,...r}}),[s,l,c,lf]);return(0,pf.jsx)(b,{theme:{components:{Collapse:{contentPadding:cf(typeof i==`object`?i?.body:i),headerPadding:cf(typeof i==`object`?i?.header:i)}}},children:(0,pf.jsx)(v,{ghost:!0,className:F(uf({collapsible:o,gap:!!n,isDarkMode:f,variant:t}),r),collapsible:o?`header`:`icon`,items:p,ref:u,size:a,expandIcon:({isActive:e})=>(0,pf.jsx)(z,{className:lf.icon,icon:j,size:16,style:{rotate:e?void 0:`-90deg`}}),style:{gap:n,...e},...d})})}),mf.displayName=`Collapse`})),gf,_f=e((()=>{L(),gf=Ht(({css:e})=>e`
    --rows: var(--grid-rows, 3);
    --max-item-width: var(--grid-max-item-width, 240px);
    --gap: var(--grid-gap, 1em);

    display: grid !important;
    grid-template-columns: repeat(
      auto-fill,
      minmax(
        max(var(--max-item-width), calc((100% - var(--gap) * (var(--rows) - 1)) / var(--rows))),
        1fr
      )
    );
  `)})),vf,yf,bf,xf=e((()=>{To(),_f(),vf=t(r(),1),yf=t(i(),1),L(),a(),bf=({className:e,gap:t=`1em`,rows:n=3,children:r,maxItemWidth:i=240,ref:a,style:s,...c})=>{let l=(0,vf.useMemo)(()=>({"--grid-gap":o(t)?t:`${t}px`,"--grid-max-item-width":o(i)?i:`${i}px`,"--grid-rows":`${n}`}),[t,i,n]);return(0,yf.jsx)(wo,{className:F(gf,e),gap:t,ref:a,style:{...l,...s},...c,children:r})},bf.displayName=`Grid`})),Sf,Cf,wf=e((()=>{Do(),L(),Nt(),Sf=Ht(({css:e,cssVar:t})=>({borderless:V.variantBorderlessWithoutHover,content:e`
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;
      padding: 0;

      font-size: inherit;
      font-weight: bolder;
      line-height: 1;
      color: inherit;
    `,filled:V.variantFilledWithoutHover,img:e`
      flex: none;
      width: 100%;
      height: 100%;
      object-fit: cover;
    `,loading:e`
      position: absolute;
      inset: 0;
      color: #fff;
      background: ${t.colorBgMask};
    `,outlined:V.variantOutlinedWithoutHover,root:e`
      user-select: none;

      position: relative;

      overflow: hidden;
      display: flex;
      flex: none;
      align-items: center;
      justify-content: center;

      background: transparent;
    `,shadow:V.shadow})),Cf=gt(Sf.root,{defaultVariants:{shadow:!1,variant:`borderless`},variants:{variant:{filled:Sf.filled,outlined:Sf.outlined,borderless:Sf.borderless},shadow:{false:null,true:Sf.shadow}}})})),Tf,Ef,Df,Of,kf,Af=e((()=>{Tf=t(r(),1),Ef=e=>e?!!(typeof e==`string`&&[`/`,`http`,`data:`].some(t=>e.startsWith(t))||(0,Tf.isValidElement)(e)):!1,Df=e=>!!(e&&e!==`transparent`&&e!==`rgba(0,0,0,0)`&&e!==null),Of=(e,t)=>{if(!e)return``;let n=e.toUpperCase();return t?n.slice(0,2):n},kf=(e,t,n)=>n?t?e*.85:e:e*.85})),jf,Mf,Nf,Pf=e((()=>{Io(),Za(),vr(),Zo(),wf(),Af(),jf=t(r(),1),Mf=t(i(),1),L(),M(),wt(),Nf=(0,jf.memo)(({alt:e,animation:t,avatar:n,background:r,bordered:i,borderedColor:a,className:o,classNames:s,crossOrigin:c,draggable:l=!1,emojiScaleWithBackground:u=!0,loading:d,ref:f,shadow:p,shape:m=`square`,size:h=48,sliceText:g=!0,style:_,styles:v,title:y,tooltipProps:b,unoptimized:x,variant:S=`borderless`,...C})=>{let w=typeof n==`string`,[T,E]=(0,jf.useState)(!1),D=(0,jf.useMemo)(()=>Ef(n),[n]),O=(0,jf.useMemo)(()=>n&&w&&!D?Bt(n):void 0,[n,w,D]),k=D?y:typeof n==`string`?n:void 0,A=e||y||`avatar`,ee=Df(r),te=D&&w&&!T,ne=D&&!w&&!T,j=(0,jf.useMemo)(()=>O?(0,Mf.jsx)(Xo,{emoji:O,size:kf(h,ee,u),type:t?`anim`:`3d`,unoptimized:x}):Of(k||y,g),[t,O,ee,h,g,k,y,x,u]);return(0,Mf.jsxs)(`div`,{...C,className:F(Cf({shadow:p,variant:S}),o,s?.root),ref:f,style:{backgroundColor:D&&!T||O?r:r||I.colorBorder,borderRadius:m===`circle`?`50%`:h<24?`33%`:Math.max(h/6,2),boxShadow:i?`${I.colorBgLayout} 0 0 0 2px, ${a||I.colorTextTertiary} 0 0 0 4px`:void 0,color:Xa(r||I.colorBorder),cursor:C?.onClick?`pointer`:void 0,fontSize:h*(O?.7:.5),height:h,width:h,..._,...v?.root},children:[d&&(0,Mf.jsx)(Fo,{className:F(Sf.loading,s?.loading),flex:`none`,height:`100%`,style:v?.loading,width:`100%`,children:(0,Mf.jsx)(z,{spin:!0,icon:me})}),typeof n==`string`&&te&&(0,Mf.jsx)(`img`,{alt:A,className:F(Sf.img,s?.img),crossOrigin:c,draggable:l,height:h,loading:`lazy`,src:n,style:v?.img,width:h,onError:()=>E(!0)}),!te&&(0,Mf.jsx)(`span`,{className:F(Sf.content,s?.content),style:v?.content,children:ne?n:j})]})}),Nf.displayName=`Avatar`})),Ff,If=e((()=>{je(),Ff={avatar:N(`acss-1g3rycd`,[`.acss-1g3rycd{border:2px solid var(--ant-color-bg-container)!important;}`],`
      border: 2px solid var(--ant-color-bg-container) !important;
    `),count:N(`acss-1p5h0dt`,[`.acss-1p5h0dt{font-size:0.8em;color:var(--ant-color-bg-layout);}`],`
      font-size: 0.8em;
      color: var(--ant-color-bg-layout);
    `)}})),Lf,Rf,zf,Bf=e((()=>{To(),Pf(),If(),Lf=t(r(),1),Rf=t(i(),1),L(),zf=(0,Lf.memo)(({items:e,max:t,gap:n,variant:r=`borderless`,bordered:i,shadow:a,size:o=48,background:s,animation:c,draggable:l,classNames:u,shape:d,styles:f,onClick:p,ref:m,zIndexReverse:h,...g})=>{let _=t?e.slice(0,t):e,v=e.slice(t,e.length),y=n??Math.floor(-o/4),b={animation:c,background:s,bordered:i,draggable:l,shadow:a,shape:d,size:o,variant:r};return(0,Rf.jsxs)(wo,{horizontal:!0,gap:n,ref:m,style:{position:`relative`},...g,children:[_.map((t,n)=>{let{key:r,style:i,className:a,...o}=t;return(0,Rf.jsx)(Nf,{className:F(u?.avatar,a,Ff.avatar),style:{marginLeft:n===0?0:y,zIndex:h?e.length-n:n,...f?.avatar,...i},onClick:()=>p?.({item:t,key:r}),...b,...o},r)}),t&&v.length>0&&(0,Rf.jsx)(Nf,{...b,avatar:`+${v.length}`,background:I.colorText,className:F(Ff.avatar,u?.count),classNames:{content:Ff.count},sliceText:!1,style:{marginLeft:y,zIndex:h?0:_.length,...f?.count}})]})}),zf.displayName=`AvatarGroup`})),Vf,Hf=e((()=>{Pf(),Bf(),Vf=Nf,Vf.Group=zf})),Uf,Wf=e((()=>{M(),Uf=ce(`Skills`,[[`path`,{d:`M15.4434 2.31193C14.545 1.80659 13.4501 1.79785 12.5438 2.28878L3.04743 7.43264C2.40205 7.78222 2 8.45724 2 9.19122V16.8303C2 17.5529 2.38972 18.2192 3.01948 18.5735L8.55657 21.6881C9.45496 22.1934 10.5499 22.2022 11.4562 21.7112L20.9526 16.5674C21.598 16.2178 22 15.5428 22 14.8088V7.1697C22 6.44715 21.6103 5.78078 20.9805 5.42654L15.4434 2.31193Z`,key:`1`}],[`path`,{d:`M22 6 11.456 11.711C10.55 12.202 9.455 12.193 8.557 11.688L2 8M22 11 11.456 16.711C10.55 17.202 9.455 17.193 8.557 16.688L2 13M10 12V22`,key:`2`}]]),Uf.displayName=`SkillsIcon`}));export{Vc as $,lr as $n,Xa as $t,Y as A,Si as An,ws as At,tu as B,mi as Bn,Fo as Bt,Dd as C,Mi as Cn,Ys as Ct,Od as D,ki as Dn,Gs as Dt,Cd as E,Oi as En,U as Et,pu as F,yi as Fn,$o as Ft,wl as G,ti as Gn,V as Gt,Bl as H,ai as Hn,Mo as Ht,fu as I,ci as In,Xo as It,Ml as J,Yr as Jn,fo as Jt,Fl as K,ei as Kn,wo as Kt,ou as L,di as Ln,Zo as Lt,id as M,bi as Mn,ds as Mt,Vu as N,xi as Nn,fs as Nt,Md as O,wi as On,zs as Ot,Hu as P,vi as Pn,Qo as Pt,Uc as Q,sr as Qn,Za as Qt,su as R,hi as Rn,Bo as Rt,Ad as S,Ni as Sn,Js as St,wd as T,Ai as Tn,qs as Tt,Pl as U,Qr as Un,No as Ut,zl as V,ii as Vn,Io as Vt,Tl as W,$r as Wn,Do as Wt,cl as X,z as Xn,eo as Xt,Cl as Y,Kr as Yn,ho as Yt,ll as Z,vr as Zn,to as Zt,Id as _,Bi as _n,ac as _t,bf as a,aa as an,Jn as ar,Ic as at,jd as b,Fi as bn,Xs as bt,hf as c,na as cn,Qn as cr,K as ct,Qd as d,ea as dn,mn as dr,fc as dt,ua as en,Zn as er,Bc as et,$d as f,Gi as fn,pn as fr,pc as ft,qd as g,Vi as gn,lc as gt,Gd as h,Hi as hn,cc as ht,Hf as i,oa as in,qn as ir,Fc as it,rd as j,Ci as jn,xs as jt,ad as k,Ti as kn,Rs as kt,af as l,ta as ln,Hn as lr,Tc as lt,Kd as m,Ui as mn,ln as mr,sc as mt,Wf as n,ca as nn,Gn as nr,zc as nt,xf as o,ia as on,Yn as or,kc as ot,Wd as p,Wi as pn,un as pr,rc as pt,Al as q,Jr as qn,To as qt,Vf as r,sa as rn,Kn as rr,Rc as rt,mf as s,ra as sn,$n as sr,jc as st,Uf as t,la as tn,Xn as tr,Lc as tt,of as u,$i as un,Wn as ur,Ec as ut,Fd as v,zi as vn,Qs as vt,Ed as w,ji as wn,Ks as wt,kd as x,Pi as xn,Zs as xt,Td as y,Ri as yn,$s as yt,eu as z,pi as zn,Vo as zt};