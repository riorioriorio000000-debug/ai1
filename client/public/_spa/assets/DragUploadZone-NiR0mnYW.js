import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{Bt as o,Kt as s,Vt as c,Xn as l,Yn as u,Zn as d,qt as f}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Af as p,Md as m,Of as h,Xf as ee,t as g}from"../vendor/vendor-icons-vienkZi5.js";import{Gr as _,Kf as v,MA as te,Mr as y,Or as b,Qa as x,Ro as S,Tp as C,Ya as w,dC as ne,fC as re,gF as T,hF as E,jr as D,kp as O,lC as k,lo as A,mC as ie,pC as j,pF as ae,qf as oe,uC as se,uF as ce}from"./index-w64_zsxD.js";import{a as le,n as ue}from"./file-CX3iZ5dr.js";var M,de=e((()=>{w(),A(),M=(e,t)=>x(n=>!e||!t?!1:S.isModelSupportAudio(e,t)(n))})),N,P=e((()=>{w(),N=(e,t)=>x(S.isModelSupportToolUse(e,t))})),F,fe=e((()=>{w(),A(),F=(e,t)=>x(n=>!e||!t?!1:S.isModelSupportVideo(e,t)(n))})),I,pe=e((()=>{w(),I=(e,t)=>x(S.isModelSupportVision(e,t))})),L,R,z=e((()=>{de(),P(),fe(),pe(),b(),y(),w(),C(),L=({enableMultimodalUnderstanding:e,fallbackConfigured:t,fallbackModelAbilities:n,supportToolUse:r})=>{let i=e&&t&&r;return{audio:i&&n?.audio!==!1,video:i&&n?.video!==!1,vision:i&&n?.vision!==!1}},R=(e,t,n)=>{let r=I(e,t),i=F(e,t),a=M(e,t),o=N(e,t),s=O(k.enableMultimodalUnderstanding),c=O(k.multimodalUnderstanding),l=x(S.getEnabledModelById(c?.model??``,c?.provider??``)),u=L({enableMultimodalUnderstanding:s,fallbackConfigured:!!(c?.model&&c.provider),fallbackModelAbilities:l?.abilities,supportToolUse:o}),d=D(e=>n?_.getAgencyConfigById(n)(e)?.heterogeneousProvider?.type:void 0);return D(e=>!!n&&(_.getAgentEnableModeById(n)(e)||_.isAgentHeterogeneousById(n)(e)))?{canUploadAudio:!0,canUploadImage:d!==`kimi-code`,canUploadVideo:!0}:{canUploadAudio:a||u.audio,canUploadImage:r||u.vision,canUploadVideo:i||u.video}}})),B,V,H=e((()=>{B=t(i()),j(),V=(e,t)=>{let n=(0,B.useCallback)(async e=>{if(!e.clipboardData)return;let n=await re(Array.from(e.clipboardData.items));n.length!==0&&t(n)},[t]);(0,B.useEffect)(()=>{if(e)return e.on(`onPaste`,n),()=>{e.off(`onPaste`,n)}},[e,n])}})),U,W,G,K=e((()=>{te(),U=t(i()),r(),z(),v(),ue(),W=(e,{canUploadAudio:t,canUploadImage:n,canUploadVideo:r})=>{let i=[],a=[];for(let o of e)((o.type.startsWith(`image`)?n:o.type.startsWith(`video`)?r:!o.type.startsWith(`audio`)||t)?i:a).push(o);return{accepted:i,rejected:a}},G=e=>{let{agentId:t,model:r=``,provider:i=``}=e,{t:a}=n(`chat`),{canUploadImage:o,canUploadVideo:s,canUploadAudio:c}=R(r,i,t),l=le(e=>e.uploadChatFiles),{allowed:d}=oe(`create_content`);return{canUploadImage:o,canUploadVideo:s,canUploadAudio:c,handleUploadFiles:(0,U.useCallback)(async e=>{if(!d)return;let{accepted:n,rejected:r}=W(e,{canUploadAudio:c,canUploadImage:o,canUploadVideo:s});r.length>0&&u.warning(a(`upload.validation.mediaNotSupported`,{files:r.map(e=>e.name).join(`, `)})),n.length>0&&l(n,t)},[t,d,o,s,c,a,l])}}})),q,J,Y,X,Z,me,he,ge,Q,$,_e=e((()=>{c(),f(),d(),ce(),g(),q=t(i()),r(),se(),j(),J=t(a()),H(),K(),Y=48,X={size:28,strokeWidth:1.5},Z=28,me=10,he={iconColor:`color-mix(in srgb, ${E.geekblue} 95%, black)`,iconStrongBg:`color-mix(in srgb, ${E.geekblue} 38%, white)`,iconSoftBg:`color-mix(in srgb, ${E.geekblue} 68%, white)`},ge={iconColor:`color-mix(in srgb, ${E.purple} 82%, black)`,iconStrongBg:`color-mix(in srgb, ${E.purple} 36%, white)`,iconSoftBg:`color-mix(in srgb, ${E.purple} 64%, white)`},Q=ae(({css:e})=>({container:e`
    position: relative;
  `,content:e`
    position: relative;
    z-index: 1;

    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-block: 24px;
    padding-inline: 28px;
  `,desc:e`
    font-size: 12px;
    line-height: 18px;
    color: #fff;
  `,icon:e`
    border-radius: ${E.borderRadiusSM};
  `,iconGroup:e`
    margin-block-start: 0;
  `,overlay:e`
    pointer-events: none;

    position: absolute;
    z-index: 100;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${E.colorBgMask};

    transition: all 0.2s ease-in-out;
  `,overlayContent:e`
    position: relative;

    box-sizing: border-box;
    width: min(460px, 72vw);
    padding: ${Z}px;
    border-radius: 16px;

    background: ${E.geekblue};
    box-shadow: 0 16px 48px color-mix(in srgb, ${E.geekblue} 32%, transparent);

    &::before {
      pointer-events: none;
      content: '';

      position: absolute;
      inset: ${me}px;

      border: 1.5px dashed #fff;
      border-radius: ${E.borderRadiusLG};
    }
  `,overlayContentLocalPath:e`
    background: color-mix(in srgb, ${E.purple} 82%, ${E.geekblue});
    box-shadow: 0 16px 48px color-mix(in srgb, ${E.purple} 32%, transparent);
  `,title:e`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
  `})),$=(0,q.memo)(({children:e,className:t,disabled:r=!1,enabledFiles:i=!0,enableLocalPathReference:a=!1,onLocalPaths:c,overlayMinHeight:u=160,onUploadFiles:d,style:f})=>{let{t:g}=n(`components`),{isDraggingGlobally:_,dragContentKind:v}=ne(),{getContainerProps:te}=ie({disabled:r,enableLocalPathReference:a,onLocalPaths:c,onUploadFiles:d}),y=_&&!r,b=a&&v!==`none`,x=(0,q.useMemo)(()=>b?{desc:g(`DragUpload.dragLocalPathDesc`),showFolderIcon:v===`folders`,title:g(`DragUpload.dragLocalPathTitle`)}:v===`folders`?{desc:g(`DragUpload.dragFolderDesc`),showFolderIcon:!0,title:g(`DragUpload.dragFolderTitle`)}:v===`mixed`?{desc:g(`DragUpload.dragMixedDesc`),showFolderIcon:!0,title:g(`DragUpload.dragMixedTitle`)}:{desc:g(i?`DragUpload.dragFileDesc`:`DragUpload.dragDesc`),showFolderIcon:!1,title:g(i?`DragUpload.dragFileTitle`:`DragUpload.dragTitle`)},[v,i,b,g]),S=(0,q.useMemo)(()=>b&&v===`mixed`?[m,h,p]:x.showFolderIcon?[m,m,m]:[ee,h,p],[v,b,x.showFolderIcon]),C=b?ge:he;return(0,J.jsxs)(`div`,{className:T(Q.container,t),style:f,...te(),children:[e,y&&(0,J.jsx)(`div`,{className:Q.overlay,children:(0,J.jsx)(`div`,{style:{minHeight:u},className:T(Q.overlayContent,b&&Q.overlayContentLocalPath),children:(0,J.jsxs)(o,{className:Q.content,gap:8,children:[(0,J.jsxs)(s,{horizontal:!0,className:Q.iconGroup,children:[(0,J.jsx)(o,{className:Q.icon,height:Y*1.2,width:Y,style:{background:C.iconSoftBg,color:C.iconColor,transform:`rotateZ(-20deg) translateX(8px)`},children:(0,J.jsx)(l,{icon:S[0],size:X})}),(0,J.jsx)(o,{className:Q.icon,height:Y*1.2,width:Y,style:{background:C.iconStrongBg,color:C.iconColor,transform:`translateY(-10px)`,zIndex:1},children:(0,J.jsx)(l,{icon:S[1],size:X})}),(0,J.jsx)(o,{className:Q.icon,height:Y*1.2,width:Y,style:{background:C.iconSoftBg,color:C.iconColor,transform:`rotateZ(20deg) translateX(-8px)`},children:(0,J.jsx)(l,{icon:S[2],size:X})})]}),(0,J.jsxs)(s,{align:`center`,gap:4,style:{textAlign:`center`},children:[(0,J.jsx)(s,{className:Q.title,children:x.title}),(0,J.jsx)(s,{className:Q.desc,children:x.desc})]})]})})})]})}),$.displayName=`DragUploadZone`}));export{H as a,z as c,N as d,G as i,R as l,_e as n,V as o,K as r,L as s,$ as t,P as u};