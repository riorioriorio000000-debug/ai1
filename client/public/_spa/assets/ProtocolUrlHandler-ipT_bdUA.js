import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{Ht as o,Kt as s,Ut as c,Yn as l,at as u,it as d,qt as f}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Ir as p,Jc as m,t as h}from"../vendor/vendor-icons-vienkZi5.js";import{B_ as g,FD as _,ID as v,Jf as ee,Kf as y,MA as b,Or as x,Ql as te,Yf as S,_p as C,ah as ne,eh as w,ev as T,gF as re,hF as ie,iu as ae,jr as oe,nu as se,pu as ce,qf as E,rh as le,th as ue,uF as de,vp as fe}from"./index-w64_zsxD.js";import{H as pe,V as me,k as he,t as ge}from"./selectors-D4u9uv4T.js";import{i as D}from"./store-AMf-eC3D.js";import{t as _e}from"./tool-rW_9PyAl.js";import{n as ve,t as ye}from"./PluginAvatar-2ahn_wq-.js";import{r as be,t as xe}from"./discover-BBJ_uUrz.js";import{n as Se,t as Ce}from"./esm-WHRoVrks.js";import{n as we,t as Te}from"./KeyValueEditor-q1Jt40T8.js";import{C as Ee,_ as De,a as Oe,d as ke,f as Ae,g as je,h as Me,i as Ne,m as Pe,n as Fe,o as Ie,p as Le,r as Re,t as ze,v as Be,w as Ve}from"./MCPInstallProgress-XceYNOpx.js";import{i as He,n as Ue,r as We,t as Ge}from"./Loading-CqVd0ydl.js";var Ke,O,k,qe,Je=e((()=>{_(),de(),Ke=t(i()),O=t(a()),k={container:v(`acss-6x6jq3`,[`.acss-6x6jq3{display:inline-flex;flex-direction:row;gap:var(--dots-loading-gap);align-items:center;}`],`
    display: inline-flex;
    flex-direction: row;
    gap: var(--dots-loading-gap);
    align-items: center;
  `),dot:v(`acss-vloplt`,[`.acss-vloplt{width:var(--dots-loading-size);height:var(--dots-loading-size);border-radius:50%;background-color:var(--dots-loading-color);animation:dots-loading-fade 1.2s ease-in-out infinite;}`,`@keyframes dots-loading-fade{0%,100%{opacity:0.3;}50%{opacity:1;}}`],`
    width: var(--dots-loading-size);
    height: var(--dots-loading-size);
    border-radius: 50%;

    background-color: var(--dots-loading-color);

    animation: dots-loading-fade 1.2s ease-in-out infinite;

    @keyframes dots-loading-fade {
      0%,
      100% {
        opacity: 0.3;
      }

      50% {
        opacity: 1;
      }
    }
  `)},qe=(0,Ke.memo)(({size:e=4,gap:t=3,color:n,className:r,style:i})=>{let a={"--dots-loading-color":n||ie.colorTextSecondary,"--dots-loading-gap":`${t}px`,"--dots-loading-size":`${e}px`};return(0,O.jsxs)(`div`,{className:re(k.container,r),style:{...a,...i},children:[(0,O.jsx)(`div`,{className:k.dot,style:{animationDelay:`0s`}}),(0,O.jsx)(`div`,{className:k.dot,style:{animationDelay:`0.15s`}}),(0,O.jsx)(`div`,{className:k.dot,style:{animationDelay:`0.3s`}})]})})})),A,j,M,Ye,Xe,Ze,Qe=e((()=>{A=t(i()),Ce(),ue(),j=Se(e=>({initialized:!1,popups:[],setPopups:t=>e({initialized:!0,popups:t})})),M=!1,Ye=()=>{if(M)return;M=!0;let e=typeof window<`u`&&window.electron?.ipcRenderer||null;if(!e)return;let t=j.getState().setPopups;e.on(`topicPopupsChanged`,(e,n)=>{t(n?.popups??[])}),w().windows.listTopicPopups().then(e=>{t(e??[])}).catch(()=>{})},Xe=(e,t)=>e.find(e=>e.topicId===t.topicId?t.groupId?e.scope===`group`&&e.groupId===t.groupId:t.agentId?e.scope===`agent`&&e.agentId===t.agentId:!1:!1),Ze=e=>{(0,A.useEffect)(()=>{Ye()},[]);let t=j(e=>e.popups);return(0,A.useCallback)(async n=>{if(!n)return!1;let r=Xe(t,{...e,topicId:n});if(!r)return!1;try{return await w().windows.focusTopicPopup({identifier:r.identifier}),!0}catch(e){return console.error(`[useFocusTopicPopup] Failed to focus popup window:`,e),!1}},[t,e.agentId,e.groupId])}})),N,P,$e=e((()=>{N=t(i()),P=(e,t)=>{let n=(0,N.useRef)(null);return(0,N.useEffect)(()=>{if(!e)return;let t=n.current;t&&t.querySelector(`[data-thread-id="${CSS.escape(e)}"]`)?.scrollIntoView({block:`nearest`})},[e,t]),n}})),F,et,tt,nt=e((()=>{F=t(i()),se(),te(),et=[],tt=(e,t)=>{let n=ae(ce.collapsedTopicGroupKeys(e))??et,r=ae(e=>e.updateSystemStatus);return{expandedKeys:(0,F.useMemo)(()=>t.filter(e=>!n.includes(e)),[t,n]),setExpandedKeys:(0,F.useCallback)(i=>{let a=[...n.filter(e=>!t.includes(e)),...t.filter(e=>!i.includes(e))];r({collapsedTopicGroupKeysByMode:{[e]:a}})},[n,t,e,r])}}})),I,L,R,z,rt=e((()=>{_(),c(),f(),u(),h(),I=t(i()),r(),we(),L=t(a()),R={configEditor:v(`acss-15mdhv5`,[`.acss-15mdhv5{margin-block-start:var(--ant-margin-sm);}`],`
    margin-block-start: var(--ant-margin-sm);
  `),configSection:v(`acss-1vqu6qa`,[`.acss-1vqu6qa{margin-block-end:var(--ant-margin-lg);padding:var(--ant-padding-sm);border-radius:var(--ant-border-radius);}`],`
    margin-block-end: var(--ant-margin-lg);
    padding: var(--ant-padding-sm);
    border-radius: var(--ant-border-radius);
  `),configTitle:v(`acss-ys7bkb`,[`.acss-ys7bkb{display:flex;gap:var(--ant-margin-xs);align-items:center;height:24px;font-weight:600;color:var(--ant-color-text-heading);}`],`
    display: flex;
    gap: var(--ant-margin-xs);
    align-items: center;

    height: 24px;

    font-weight: 600;
    color: var(--ant-color-text-heading);
  `),previewContainer:v(`acss-1e453h4`,[`.acss-1e453h4{padding-inline:var(--ant-padding-xs);}`],`
    padding-inline: var(--ant-padding-xs);
  `),previewItem:v(`acss-1rfsh1w`,[`.acss-1rfsh1w{display:flex;align-items:center;justify-content:space-between;padding-block:var(--ant-padding-xs);padding-inline:0;}`,`.acss-1rfsh1w:not(:last-child){border-block-end:1px solid var(--ant-color-border-secondary);}`],`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-block: var(--ant-padding-xs);
    padding-inline: 0;

    &:not(:last-child) {
      border-block-end: 1px solid var(--ant-color-border-secondary);
    }
  `),previewLabel:v(`acss-sgl930`,[`.acss-sgl930{display:flex;gap:var(--ant-margin-xs);align-items:center;font-size:var(--ant-font-size-sm);font-weight:500;color:var(--ant-color-text-secondary);}`],`
    display: flex;
    gap: var(--ant-margin-xs);
    align-items: center;

    font-size: var(--ant-font-size-sm);
    font-weight: 500;
    color: var(--ant-color-text-secondary);
  `),previewValue:v(`acss-1m1a41a`,[`.acss-1m1a41a{padding-block:var(--ant-padding-xxs);padding-inline:var(--ant-padding-xs);border-radius:var(--ant-border-radius-sm);font-family:var(--ant-font-family-code);font-size:var(--ant-font-size-sm);font-weight:600;color:var(--ant-color-text);background:var(--ant-color-fill-quaternary);}`],`
    padding-block: var(--ant-padding-xxs);
    padding-inline: var(--ant-padding-xs);
    border-radius: var(--ant-border-radius-sm);

    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size-sm);
    font-weight: 600;
    color: var(--ant-color-text);

    background: var(--ant-color-fill-quaternary);
  `),typeValue:v(`acss-1d6xs00`,[`.acss-1d6xs00{display:flex;gap:var(--ant-margin-xs);align-items:center;}`],`
    display: flex;
    gap: var(--ant-margin-xs);
    align-items: center;
  `),urlValue:v(`acss-11v74qr`,[`.acss-11v74qr{max-width:300px;padding-block:var(--ant-padding-xs);padding-inline:var(--ant-padding-sm);border:1px solid var(--ant-color-border);border-radius:var(--ant-border-radius);font-family:var(--ant-font-family-code);font-size:var(--ant-font-size-sm);font-weight:500;word-break:auto-phrase;background:var(--ant-color-bg-elevated);}`],`
    max-width: 300px;
    padding-block: var(--ant-padding-xs);
    padding-inline: var(--ant-padding-sm);
    border: 1px solid var(--ant-color-border);
    border-radius: var(--ant-border-radius);

    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size-sm);
    font-weight: 500;
    word-break: auto-phrase;

    background: var(--ant-color-bg-elevated);
  `)},z=(0,I.memo)(({schema:e,onConfigUpdate:t})=>{let{t:r}=n(`plugin`),[i,a]=(0,I.useState)(e.config.env||{}),[c,l]=(0,I.useState)(e.config.headers||{});return(0,L.jsxs)(s,{gap:16,children:[(0,L.jsxs)(o,{className:R.configSection,variant:`outlined`,children:[(0,L.jsxs)(`div`,{className:R.configTitle,children:[(0,L.jsx)(m,{size:14}),r(`protocolInstall.install.title`)]}),(0,L.jsxs)(`div`,{className:R.previewContainer,children:[(0,L.jsxs)(`div`,{className:R.previewItem,children:[(0,L.jsx)(`span`,{className:R.previewLabel,children:r(`protocolInstall.config.type.label`)}),(0,L.jsx)(`div`,{className:R.typeValue,children:(0,L.jsx)(d,{className:R.previewValue,children:e.config.type===`stdio`?`STDIO`:`HTTP`})})]}),e.config.type===`http`&&e.config.url&&(0,L.jsxs)(`div`,{className:R.previewItem,children:[(0,L.jsx)(`span`,{className:R.previewLabel,children:r(`protocolInstall.config.url`)}),(0,L.jsx)(`div`,{className:R.urlValue,children:e.config.url})]}),e.config.type===`stdio`&&(0,L.jsxs)(L.Fragment,{children:[e.config.command&&(0,L.jsxs)(`div`,{className:R.previewItem,children:[(0,L.jsx)(`span`,{className:R.previewLabel,children:r(`protocolInstall.config.command`)}),(0,L.jsx)(`span`,{className:R.previewValue,children:e.config.command})]}),e.config.args&&e.config.args.length>0&&(0,L.jsxs)(`div`,{className:R.previewItem,children:[(0,L.jsx)(`span`,{className:R.previewLabel,children:r(`protocolInstall.config.args`)}),(0,L.jsx)(`span`,{className:R.previewValue,children:e.config.args.join(` `)})]})]})]})]}),(0,L.jsxs)(o,{className:R.configSection,variant:`outlined`,children:[(0,L.jsxs)(`div`,{className:R.configTitle,children:[(0,L.jsx)(p,{size:14}),e.config.type===`stdio`?r(`protocolInstall.config.env`):r(`protocolInstall.config.headers`)]}),(0,L.jsxs)(`div`,{className:R.configEditor,children:[e.config.type===`http`&&(0,L.jsx)(Te,{addButtonText:r(`protocolInstall.config.addHeaders`),style:{border:`none`},value:c,onChange:e=>{l(e),t?.({env:i,headers:e})}}),e.config.type===`stdio`&&(0,L.jsx)(Te,{addButtonText:r(`protocolInstall.config.addEnv`),style:{border:`none`},value:i,onChange:e=>{a(e),t?.({env:e,headers:c})}})]})]})]})}),z.displayName=`ConfigDisplay`})),B,V,H,it=e((()=>{c(),f(),fe(),u(),b(),B=t(i()),r(),S(),ve(),He(),y(),x(),_e(),ge(),rt(),V=t(a()),H=(0,B.memo)(({installRequest:e,isMarketplace:t=!1,onComplete:r})=>{let{t:i}=n(`plugin`),[a,c]=(0,B.useState)(!1),{allowed:u}=E(`create_content`),{allowed:f}=E(`edit_own_content`),[p,m]=(0,B.useState)({}),[h]=D(e=>[e.installCustomPlugin]),g=D(e=>e.testMcpConnection),_=oe(e=>e.togglePlugin),v=e?.schema?.identifier||``,y=D(he.getMCPConnectionTestState(v)),b=e?.schema,x=b?.config.type===`stdio`;(0,B.useEffect)(()=>{e||(c(!1),m({}))},[e]);let te=(0,B.useCallback)(async()=>{if(!(!u||!f||!e||!b)){c(!0);try{let e={...b.config,env:p.env||b.config.env,headers:p.headers||b.config.headers},t=await g({connection:e,identifier:v,metadata:{avatar:b.icon,description:b.description}});if(!t.success)throw Error(t.error||i(`protocolInstall.messages.connectionTestFailed`));if(!t.manifest)throw Error(i(`protocolInstall.messages.manifestNotFound`));await h({customParams:{avatar:b.icon,description:b.description,mcp:{...e,headers:e.type===`http`?e.headers:void 0}},identifier:b.identifier,manifest:t.manifest,type:`customPlugin`}),await _(b.identifier),l.success(i(`protocolInstall.messages.installSuccess`,{name:b.name})),r?.()}catch(e){console.error(`Plugin installation error:`,e),l.error(i(`protocolInstall.messages.installError`)),c(!1)}}},[e,u,f,b,p,r,h,g,_,i,v]),S=(0,B.useCallback)(()=>{r?.()},[r]);if(!e||!b)return null;let ne=()=>(0,V.jsxs)(s,{gap:8,children:[t?(0,V.jsx)(C,{showIcon:!0,title:i(`protocolInstall.marketplace.unverified.warning`),type:`warning`,variant:`borderless`}):(0,V.jsx)(C,{showIcon:!0,title:i(`protocolInstall.custom.security.description`),type:`warning`,variant:`borderless`}),x&&(0,V.jsx)(C,{showIcon:!0,description:i(`protocolInstall.stdio.commandExecution.description`),title:i(`protocolInstall.stdio.commandExecution.title`),type:`warning`,variant:`borderless`})]}),w=i(t?`protocolInstall.marketplace.title`:`protocolInstall.custom.title`),T=i(x?`protocolInstall.actions.runCommandAndInstall`:t?`protocolInstall.actions.install`:`protocolInstall.actions.installAnyway`);return(0,V.jsx)(ee,{open:!0,confirmLoading:a||y.loading,okButtonProps:{disabled:!u||!f},okText:T,title:w,width:680,onCancel:S,onOk:te,children:(0,V.jsxs)(s,{gap:24,children:[ne(),(0,V.jsx)(o,{horizontal:!0,gap:16,justify:`space-between`,padding:16,variant:`outlined`,children:(0,V.jsxs)(s,{horizontal:!0,gap:16,children:[(0,V.jsx)(ye,{avatar:b.icon,size:40}),(0,V.jsxs)(s,{gap:2,children:[(0,V.jsxs)(s,{horizontal:!0,align:`center`,gap:8,children:[b.name,(0,V.jsx)(We,{type:`customPlugin`})]}),(0,V.jsx)(d,{style:{fontSize:12},type:`secondary`,children:b.description})]})]})}),(0,V.jsxs)(s,{children:[(0,V.jsx)(z,{schema:b,onConfigUpdate:m}),y.error&&(0,V.jsx)(C,{closable:!0,showIcon:!0,description:y.error,title:i(`protocolInstall.messages.connectionTestFailed`),type:`error`,variant:`filled`})]})]})})}),H.displayName=`CustomPluginInstallModal`})),U,W,G,at=e((()=>{f(),U=t(i()),Fe(),Be(),Ve(),je(),Pe(),Ae(),Ie(),Ne(),g(),W=t(a()),G=(0,U.memo)(({data:e,identifier:t})=>{let[n,r]=(0,U.useState)(T.Overview);return(0,W.jsx)(Ee,{config:e,children:(0,W.jsxs)(s,{gap:16,children:[(0,W.jsx)(Me,{inModal:!0}),(0,W.jsx)(ze,{identifier:t}),(0,W.jsx)(Le,{inModal:!0,noSettings:!0,activeTab:n,setActiveTab:r}),(0,W.jsxs)(s,{gap:24,children:[n===T.Overview&&(0,W.jsx)(ke,{inModal:!0}),n===T.Deployment&&(0,W.jsx)(De,{}),n===T.Schema&&(0,W.jsx)(Oe,{}),n===T.Score&&(0,W.jsx)(Re,{})]})]})})}),G.displayName=`OfficialDetail`})),K,q,J,ot=e((()=>{c(),u(),b(),K=t(i()),r(),S(),Ue(),y(),x(),xe(),_e(),me(),at(),q=t(a()),J=(0,K.memo)(({installRequest:e,onComplete:t})=>{let{t:r}=n([`plugin`,`common`]),[i,a]=(0,K.useState)(!1),{allowed:s}=E(`create_content`),{allowed:c}=E(`edit_own_content`),u=be(e=>e.useFetchMcpDetail),f=e?.pluginId||``,[p,m]=D(e=>[pe.isPluginInstalled(f)(e),e.installMCPPlugin]),h=oe(e=>e.togglePlugin),{data:g,isLoading:_}=u({identifier:f}),v=(0,K.useCallback)(async()=>{if(!(!s||!c||!e||!g)){a(!0);try{a(!0),await m(f),await h(f),a(!1),l.success(r(`protocolInstall.messages.installSuccess`,{name:g.name})),t()}catch(e){console.error(`Official plugin installation error:`,e),l.error(r(`protocolInstall.messages.installError`)),a(!1)}}},[s,c,e,g,m,f,h,r,t]);return e?(0,q.jsx)(ee,{open:!0,confirmLoading:i,title:r(`protocolInstall.official.title`),width:800,okButtonProps:{disabled:p||_||!s||!c,type:p?`default`:`primary`},okText:r(p?`protocolInstall.actions.installed`:`protocolInstall.actions.install`),onCancel:t,onOk:v,children:_||!f?(0,q.jsx)(Ge,{}):g?(0,q.jsx)(G,{data:g,identifier:f}):(0,q.jsx)(o,{children:(0,q.jsx)(d,{type:`danger`,children:r(`protocolInstall.messages.manifestError`)})})}):null}),J.displayName=`OfficialPluginInstallModal`})),Y,st=e((()=>{Y=function(e){return e.CUSTOM=`custom`,e.MARKETPLACE=`marketplace`,e.OFFICIAL=`official`,e}({})})),ct,X,Z,Q,lt=e((()=>{ct=t(i()),it(),ot(),st(),X=t(a()),Z=e=>{let{marketId:t}=e;return t===`lobehub`?Y.OFFICIAL:t&&t!==`lobehub`?Y.MARKETPLACE:Y.CUSTOM},Q=(0,ct.memo)(({installRequest:e,onComplete:t})=>{if(!e)return null;let n=Z(e);return n===Y.OFFICIAL?(0,X.jsx)(J,{installRequest:e,onComplete:t}):(0,X.jsx)(H,{installRequest:e,isMarketplace:n===Y.MARKETPLACE,onComplete:t})}),Q.displayName=`PluginInstallConfirmModal`})),$,ut,dt,ft=e((()=>{le(),$=t(i()),lt(),ut=t(a()),dt=()=>{let[e,t]=(0,$.useState)(null),n=(0,$.useCallback)(e=>{t(e)},[]),r=(0,$.useCallback)(()=>{t(null)},[]);return ne(`mcpInstallRequest`,n),(0,ut.jsx)(Q,{installRequest:e,onComplete:r})}}));export{$e as a,Ze as c,tt as i,qe as l,ft as n,P as o,nt as r,Qe as s,dt as t,Je as u};