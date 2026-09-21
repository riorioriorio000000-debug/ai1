import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r,r as i,s as a}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as o,T as s}from"../vendor/vendor-react-B9HSWrpN.js";import{B as c,Bt as l,Kt as u,Vt as d,Xn as f,Zn as p,at as m,i as h,it as g,lt as _,n as v,qt as y,r as b,t as ee,z as te}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Af as ne,Br as re,E_ as ie,En as ae,t as x}from"../vendor/vendor-icons-vienkZi5.js";import{mn as S}from"./app-const-BpgKVRXh.js";import{Al as C,Bt as oe,Dn as w,En as T,FD as E,ID as D,Kf as O,Qv as k,bh as A,ch as j,dg as M,ex as se,hF as N,kl as ce,qf as le,uF as P,wx as F}from"./index-w64_zsxD.js";import{n as I,t as ue}from"./Popover-Cd3scH3I.js";import{t as L}from"./_virtual_lobe-ui-named__Tooltip-DNompU8a.js";import{_t as R,gt as de,pt as z,yt as B}from"./chat-D3ilvURJ.js";import{o as V,t as H}from"./selectors-C-g1ZR70.js";import{a as fe,t as pe}from"./LobeIcons-BEGTV_5w.js";import{n as me,t as he}from"./ModelSelect-BqNzeHDy.js";import{n as ge,t as _e}from"./useWorkspaceAwareNavigate-BbajQ7ta.js";import{t as ve}from"./Skeleton-PcdZNeTb.js";import{n as U,t as ye}from"./useResourceAccess-CIoTOfaT.js";var W,G,K,q,be=e((()=>{E(),d(),y(),L(),h(),w(),m(),P(),W=t(o()),S(),G=t(s()),K={banner:D(`acss-so1py5`,[`.acss-so1py5{position:relative;overflow:hidden;height:60px;}`],`
    position: relative;
    overflow: hidden;
    height: 60px;
  `),bannerInner:D(`acss-e1f75d`,[`.acss-e1f75d{filter:blur(44px);}`],`
    filter: blur(44px);
  `),clickableAvatar:D(`acss-kmjz3b`,[`.acss-kmjz3b{cursor:pointer;}`],`
    cursor: pointer;
  `),clickableTitle:D(`acss-1snut4`,[`.acss-1snut4{cursor:pointer;}`,`.acss-1snut4:hover{color:var(--ant-color-primary);}`],`
    cursor: pointer;

    &:hover {
      color: var(--ant-color-primary);
    }
  `),container:D(`acss-u9tcu1`,[`.acss-u9tcu1{overflow:hidden;width:280px;background:var(--ant-color-bg-elevated);}`],`
    overflow: hidden;
    width: 280px;
    background: var(--ant-color-bg-elevated);
  `),description:D(`acss-huqcx6`,[`.acss-huqcx6{overflow:hidden;max-height:80px;font-size:12px;line-height:1.5;color:var(--ant-color-text-secondary);text-overflow:ellipsis;}`],`
    overflow: hidden;

    max-height: 80px;

    font-size: 12px;
    line-height: 1.5;
    color: var(--ant-color-text-secondary);
    text-overflow: ellipsis;
  `),descriptionSkeleton:D(`acss-1kfus6v`,[`.acss-1kfus6v .ant-skeleton-paragraph{margin-block-start:4px!important;}`,`.acss-1kfus6v .ant-skeleton-paragraph>li{height:12px!important;}`,`.acss-1kfus6v .ant-skeleton-paragraph>li+li{margin-block-start:6px!important;}`],`
    .ant-skeleton-paragraph {
      margin-block-start: 4px !important;
    }

    .ant-skeleton-paragraph > li {
      height: 12px !important;
    }

    .ant-skeleton-paragraph > li + li {
      margin-block-start: 6px !important;
    }
  `),header:D(`acss-1apom44`,[`.acss-1apom44{position:relative;margin-block-start:-24px;padding-inline:16px;}`],`
    position: relative;
    margin-block-start: -24px;
    padding-inline: 16px;
  `),name:D(`acss-13cojtt`,[`.acss-13cojtt{font-size:16px;font-weight:600;color:var(--ant-color-text);}`],`
    font-size: 16px;
    font-weight: 600;
    color: var(--ant-color-text);
  `)},q=(0,W.memo)(({avatar:e,backgroundColor:t,description:n,headerAction:r,loading:i,onHeaderClick:a,title:o,children:s})=>(0,G.jsxs)(u,{className:K.container,children:[(0,G.jsx)(l,{className:K.banner,style:{background:N.colorFillTertiary},children:(0,G.jsx)(b,{emojiScaleWithBackground:!0,avatar:e||`/avatars/agent-default.png`,background:t??void 0,className:K.bannerInner,shape:`square`,size:400})}),(0,G.jsxs)(u,{className:K.header,gap:8,children:[(0,G.jsx)(b,{emojiScaleWithBackground:!0,avatar:e||`/avatars/agent-default.png`,background:t??void 0,className:a?K.clickableAvatar:void 0,shape:`square`,size:48,style:{border:`2px solid ${N.colorBgElevated}`},onClick:a}),(0,G.jsxs)(u,{gap:2,children:[(0,G.jsxs)(u,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,G.jsx)(g,{ellipsis:!0,className:`${K.name} ${a?K.clickableTitle:``}`,onClick:a,children:o}),r]}),n?(0,G.jsx)(_,{title:n,children:(0,G.jsx)(g,{className:K.description,ellipsis:{rows:2},children:n})}):i?(0,G.jsx)(T.Text,{className:K.descriptionSkeleton,rows:2,width:[`100%`,`60%`]}):null]})]}),s]}))})),J,Y=e((()=>{j(),J=({fetchedType:e,listEntry:t})=>A(t?.heterogeneousType??e)})),X,Z,Q,$,xe=e((()=>{E(),M(),y(),p(),I(),c(),w(),m(),v(),x(),X=t(o()),r(),i(),fe(),ve(),me(),ye(),_e(),O(),F(),C(),z(),R(),H(),be(),Y(),Z=t(s()),Q={footer:D(`acss-15w6whk`,[`.acss-15w6whk{padding-block:12px;padding-inline:16px;border-block-start:1px solid var(--ant-color-border-secondary);}`],`
    padding-block: 12px;
    padding-inline: 16px;
    border-block-start: 1px solid var(--ant-color-border-secondary);
  `),section:D(`acss-pddttv`,[`.acss-pddttv{padding-block:12px;padding-inline:16px;}`],`
    padding-block: 12px;
    padding-inline: 16px;
  `),sectionTitle:D(`acss-19upe5u`,[`.acss-19upe5u{margin-block-end:8px;font-size:11px;font-weight:600;color:var(--ant-color-text-tertiary);text-transform:uppercase;}`],`
    margin-block-end: 8px;

    font-size: 11px;
    font-weight: 600;
    color: var(--ant-color-text-tertiary);
    text-transform: uppercase;
  `),statItem:D(`acss-15a5nk3`,[`.acss-15a5nk3{color:var(--ant-color-text-secondary);}`],`
    color: var(--ant-color-text-secondary);
  `),trigger:D(`acss-cizymk`,[`.acss-cizymk{border-radius:var(--ant-border-radius);}`,`.acss-cizymk[data-popup-open]{background:var(--ant-color-fill-tertiary);}`],`
    border-radius: var(--ant-border-radius);

    &[data-popup-open] {
      background: var(--ant-color-fill-tertiary);
    }
  `)},$=(0,X.memo)(({agent:e,agentId:t,groupId:r,children:i,trigger:o=`click`})=>{let{t:s}=n(`chat`),c=ge(),[l,d]=(0,X.useState)(!1),[p,m]=(0,X.useState)(!1),{allowed:h}=le(`edit_own_content`),{canEditResource:_,isAccessResolved:v}=U(`agent`,l?t:void 0),{canEditResource:y,isAccessResolved:b}=U(`agentGroup`,l?r:void 0),x=h&&v&&_&&(!r||b&&y),S=de(e=>e.updateMemberAgentConfig),C=B(V.getAgentById(t)),{data:w,isLoading:E}=a(l&&x?se.detail(t):null,()=>ce.getAgentConfigById(t),{revalidateOnFocus:!1}),D=J({fetchedType:w?.agencyConfig?.heterogeneousProvider?.type,listEntry:C}),O=!!D,A={avatar:w?.avatar??e?.avatar,backgroundColor:w?.backgroundColor??e?.backgroundColor,description:w?.description??e?.description,model:w?.model??e?.model,name:w?.name??e?.name,provider:w?.provider??e?.provider,title:w?.title??e?.title},j=async e=>{if(!(!r||!x)){m(!0);try{await S(r,t,{model:e.model,provider:e.provider})}finally{m(!1)}}},M=()=>{!r||!x||x&&(d(!1),c(`/group/${r}/profile?tab=${t}`))},N=()=>{d(!1),c(`/agent/${t}/profile`)},P=!(k(A)||A.avatar||A.description)&&E,F=w?.plugins?.length??0,I=w?.knowledgeBases?.length??0,L=w?.files?.length??0,R=F>0||I>0||L>0,z=x&&r&&!O?A.model&&(0,Z.jsxs)(u,{className:Q.section,gap:4,children:[(0,Z.jsx)(`div`,{className:Q.sectionTitle,children:s(`groupSidebar.agentProfile.model`)}),(0,Z.jsx)(he,{loading:p,value:{model:A.model,provider:A.provider??void 0},onChange:j})]}):x&&!r&&E&&!w&&!O?(0,Z.jsxs)(u,{horizontal:!0,align:`center`,className:Q.footer,gap:14,children:[(0,Z.jsx)(T,{height:16,width:90}),(0,Z.jsx)(T,{height:16,width:60})]}):O||x&&(A.model||R)?(0,Z.jsxs)(u,{horizontal:!0,align:`center`,className:Q.footer,gap:14,wrap:`wrap`,children:[O?(0,Z.jsxs)(u,{horizontal:!0,align:`center`,className:Q.statItem,gap:6,children:[(0,Z.jsx)(f,{icon:ae,size:14}),(0,Z.jsx)(g,{fontSize:12,type:`secondary`,children:s(`agentProfile.runtime`,{name:D})})]}):A.model&&(0,Z.jsxs)(u,{horizontal:!0,align:`center`,className:Q.statItem,gap:6,children:[(0,Z.jsx)(pe,{model:A.model,size:14}),(0,Z.jsx)(g,{fontSize:12,type:`secondary`,children:A.model})]}),x&&F>0&&(0,Z.jsxs)(u,{horizontal:!0,align:`center`,className:Q.statItem,gap:4,children:[(0,Z.jsx)(f,{icon:ee,size:13}),(0,Z.jsx)(g,{fontSize:12,type:`secondary`,children:s(`agentProfile.skills`,{count:F})})]}),x&&I>0&&(0,Z.jsxs)(u,{horizontal:!0,align:`center`,className:Q.statItem,gap:4,children:[(0,Z.jsx)(f,{icon:ie,size:13}),(0,Z.jsx)(g,{fontSize:12,type:`secondary`,children:s(`agentProfile.knowledgeBases`,{count:I})})]}),x&&L>0&&(0,Z.jsxs)(u,{horizontal:!0,align:`center`,className:Q.statItem,gap:4,children:[(0,Z.jsx)(f,{icon:ne,size:13}),(0,Z.jsx)(g,{fontSize:12,type:`secondary`,children:s(`agentProfile.files`,{count:L})})]})]}):null,H=P?(0,Z.jsx)(`div`,{style:{padding:16,width:280},children:(0,Z.jsx)(oe,{avatar:!0,rows:2})}):(0,Z.jsx)(q,{avatar:A.avatar,backgroundColor:A.backgroundColor,description:A.description,loading:E&&!A.description,title:k(A,s(`defaultSession`,{ns:`common`})),headerAction:r&&x?(0,Z.jsx)(u,{horizontal:!0,align:`center`,justify:`flex-end`,style:{paddingBlockStart:0},children:(0,Z.jsx)(te,{icon:re,size:`small`,title:s(`groupSidebar.agentProfile.settings`),onClick:M})}):void 0,onHeaderClick:x?N:void 0,children:z});return(0,Z.jsx)(ue,{classNames:o===`click`?{trigger:Q.trigger}:void 0,content:H,nativeButton:!1,open:l,placement:o===`hover`?`top`:`right`,trigger:o,styles:{content:{borderRadius:12,overflow:`hidden`,padding:0}},onOpenChange:d,children:i})})}));export{xe as n,$ as t};