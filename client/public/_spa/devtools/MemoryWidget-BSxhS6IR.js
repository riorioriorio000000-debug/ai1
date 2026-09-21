import{n as e,o as t}from"../assets/rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{Kt as i,Mt as a,Nt as o,qt as s}from"../vendor/vendor-ui-core-BmtybT1r.js";import{cg as c,ig as l,t as u}from"../vendor/vendor-icons-vienkZi5.js";import{Fr as d}from"../assets/app-const-BpgKVRXh.js";import{FD as f,ID as p,Ud as ee,Yd as te,gF as m,hF as h,uF as g}from"../assets/index-w64_zsxD.js";import{n as ne,t as re}from"../assets/Popover-Cd3scH3I.js";import{n as ie,t as ae}from"./panelStyles-BcnhslTN.js";import{n as oe,t as se}from"./const-CXmAB_Pe.js";import{n as ce,r as le}from"./BarButton-BoR7rA0M.js";import{n as ue,t as de}from"./metricUtils-CtIfy7W-.js";import{n as _,r as fe}from"./devtools-Bcody1YT.js";import{n as v,t as pe}from"./appProcessMetrics-B9pSXFRN.js";var y,b=e((()=>{te(),y=e=>ee(e).replace(` `,``).replace(`B`,``)})),me,he,x,S,C,w,T,E,ge,D,O,k=e((()=>{me=t(n()),he=2e3,x=new Set,S=null,C=null,w=()=>{let e=performance.memory;return e?{jsHeapLimitBytes:e.jsHeapSizeLimit,jsHeapUsedBytes:e.usedJSHeapSize}:null},T=()=>w()!==null,E=async()=>{let e=null;try{e=await window.electronAPI?.getRendererMemoryInfo?.()??null}catch{}let t=w();if(!t||!C)return;let n={...t,at:Date.now(),renderer:e};S={history:[...S?.history??[],n].slice(-150),latest:n};for(let e of x)e()},ge=e=>(x.add(e),C||(C=setInterval(E,he),E()),()=>{x.delete(e),!(x.size>0||!C)&&(clearInterval(C),C=null)}),D=()=>S,O=()=>(0,me.useSyncExternalStore)(ge,D,D)})),A,j=e((()=>{f(),A={bar:p(`acss-1jiec5j`,[`.acss-1jiec5j{height:4px;border-radius:2px;background:var(--ant-color-fill-secondary);}`],`
    height: 4px;
    border-radius: 2px;
    background: var(--ant-color-fill-secondary);
  `),barFill:p(`acss-zz19s8`,[`.acss-zz19s8{height:100%;border-radius:2px;background:var(--ant-color-info);}`],`
    height: 100%;
    border-radius: 2px;
    background: var(--ant-color-info);
  `),caption:p(`acss-1vx2l3h`,[`.acss-1vx2l3h{padding-block:6px;padding-inline:12px;font-size:10px;color:var(--ant-color-text-quaternary);}`],`
    padding-block: 6px;
    padding-inline: 12px;
    font-size: 10px;
    color: var(--ant-color-text-quaternary);
  `),cell:p(`acss-w1ztks`,[`.acss-w1ztks{display:flex;flex-direction:column;gap:2px;}`],`
    display: flex;
    flex-direction: column;
    gap: 2px;
  `),error:p(`acss-zknb5i`,[`.acss-zknb5i{color:var(--ant-color-error);}`],`
    color: var(--ant-color-error);
  `),key:p(`acss-1n7986q`,[`.acss-1n7986q{font-size:10px;color:var(--ant-color-text-quaternary);}`],`
    font-size: 10px;
    color: var(--ant-color-text-quaternary);
  `),legend:p(`acss-1flvnhj`,[`.acss-1flvnhj{flex-shrink:0;padding-block:8px 12px;padding-inline:12px;border-block-start:1px solid var(--ant-color-border-secondary);font-size:10px;line-height:1.6;color:var(--ant-color-text-quaternary);}`],`
    flex-shrink: 0;

    padding-block: 8px 12px;
    padding-inline: 12px;
    border-block-start: 1px solid var(--ant-color-border-secondary);

    font-size: 10px;
    line-height: 1.6;
    color: var(--ant-color-text-quaternary);
  `),mono:p(`acss-mi7cvv`,[`.acss-mi7cvv{font-family:var(--ant-font-family-code);font-size:11px;font-feature-settings:'tnum';color:var(--ant-color-text-secondary);}`],`
    font-family: var(--ant-font-family-code);
    font-size: 11px;
    font-feature-settings: 'tnum';
    color: var(--ant-color-text-secondary);
  `),muted:p(`acss-nt432w`,[`.acss-nt432w{color:var(--ant-color-text-tertiary);}`],`
    color: var(--ant-color-text-tertiary);
  `),popover:p(`acss-142yfd4`,[`.acss-142yfd4{width:min(640px, calc(100vw - 32px));max-height:min(70vh, 720px);}`],`
    width: min(640px, calc(100vw - 32px));
    max-height: min(70vh, 720px);
  `),overview:p(`acss-1fftwkv`,[`.acss-1fftwkv{display:grid;grid-template-columns:repeat(4, 1fr);flex-shrink:0;gap:8px 12px;padding-block:10px;padding-inline:12px;border-block-end:1px solid var(--ant-color-border-secondary);}`],`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    flex-shrink: 0;
    gap: 8px 12px;

    padding-block: 10px;
    padding-inline: 12px;
    border-block-end: 1px solid var(--ant-color-border-secondary);
  `),row:p(`acss-4nfdn5`,[`.acss-4nfdn5{display:grid;grid-template-columns:1fr 96px 120px;gap:8px;align-items:center;padding-block:4px;padding-inline:12px;border-block-end:1px solid var(--ant-color-border-secondary);}`],`
    display: grid;
    grid-template-columns: 1fr 96px 120px;
    gap: 8px;
    align-items: center;

    padding-block: 4px;
    padding-inline: 12px;
    border-block-end: 1px solid var(--ant-color-border-secondary);
  `),rowClickable:p(`acss-1nwdmqt`,[`.acss-1nwdmqt{cursor:pointer;}`,`.acss-1nwdmqt:hover{background:var(--ant-color-fill-quaternary);}`],`
    cursor: pointer;

    &:hover {
      background: var(--ant-color-fill-quaternary);
    }
  `),scroll:p(`acss-be5dmt`,[`.acss-be5dmt{overflow:auto;flex:1;min-height:0;max-height:360px;}`],`
    overflow: auto;
    flex: 1;
    min-height: 0;
    max-height: 360px;
  `),sectionTitle:p(`acss-1ca4w6r`,[`.acss-1ca4w6r{display:flex;gap:8px;align-items:center;padding-block:8px;padding-inline:12px;border-block-end:1px solid var(--ant-color-border-secondary);font-size:11px;font-weight:600;color:var(--ant-color-text);}`],`
    display: flex;
    gap: 8px;
    align-items: center;

    padding-block: 8px;
    padding-inline: 12px;
    border-block-end: 1px solid var(--ant-color-border-secondary);

    font-size: 11px;
    font-weight: 600;
    color: var(--ant-color-text);
  `),value:p(`acss-1s04m24`,[`.acss-1s04m24{font-family:var(--ant-font-family-code);font-size:11px;font-feature-settings:'tnum';color:var(--ant-color-text);white-space:nowrap;}`],`
    font-family: var(--ant-font-family-code);
    font-size: 11px;
    font-feature-settings: 'tnum';
    color: var(--ant-color-text);
    white-space: nowrap;
  `)}})),M,N,P,F,I,_e=e((()=>{g(),u(),M=t(n()),b(),j(),N=t(r()),P=[`Node`,`LayoutObject`,`JSEventListener`,`ArrayBufferContents`,`Document`,`Frame`,`Resource`],F=(0,M.memo)(({depth:e,expanded:t,node:n,path:r,toggle:i,total:a})=>{let o=t.has(r),s=n.children.length>0,u=a>0?n.sizeBytes/a*100:0;return(0,N.jsxs)(M.Fragment,{children:[(0,N.jsxs)(`div`,{className:m(A.row,A.mono,s&&A.rowClickable),onClick:s?()=>i(r):void 0,children:[(0,N.jsxs)(`span`,{style:{alignItems:`center`,display:`flex`,gap:4,paddingInlineStart:e*14},children:[s?o?(0,N.jsx)(c,{size:11}):(0,N.jsx)(l,{size:11}):(0,N.jsx)(`span`,{style:{width:11}}),(0,N.jsx)(`span`,{className:e===0?void 0:A.muted,children:n.name})]}),(0,N.jsx)(`span`,{style:{textAlign:`end`},children:y(n.sizeBytes)}),(0,N.jsx)(`span`,{className:A.bar,title:`${u.toFixed(1)}% of tracked`,children:(0,N.jsx)(`span`,{className:A.barFill,style:{width:`${Math.min(100,u)}%`}})})]}),o&&n.children.map(n=>(0,N.jsx)(F,{depth:e+1,expanded:t,node:n,path:`${r}/${n.name}`,toggle:i,total:a},n.name))]})}),F.displayName=`DevMemoryDumpNodeRow`,I=(0,M.memo)(({process:e})=>{let[t,n]=(0,M.useState)(()=>new Set),r=e=>n(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n}),i=e.allocators.reduce((e,t)=>e+t.sizeBytes,0),a=P.filter(t=>e.objectCounts[t]!==void 0);return(0,N.jsxs)(M.Fragment,{children:[(0,N.jsxs)(`div`,{className:m(A.row,A.mono),children:[(0,N.jsxs)(`span`,{children:[e.name,` `,(0,N.jsxs)(`span`,{className:A.muted,children:[`pid `,e.pid]})]}),(0,N.jsx)(`span`,{style:{textAlign:`end`},children:y(i)}),(0,N.jsx)(`span`,{className:A.muted,children:e.privateFootprintBytes===null?`tracked`:`footprint ${y(e.privateFootprintBytes)}`})]}),e.allocators.map(n=>(0,N.jsx)(F,{depth:0,expanded:t,node:n,path:`${e.pid}/${n.name}`,toggle:r,total:i},n.name)),a.length>0&&(0,N.jsx)(`div`,{className:m(A.caption,A.mono),children:a.map(t=>`${t} ${e.objectCounts[t].toLocaleString()}`).join(` · `)})]})}),I.displayName=`DevMemoryDumpTree`})),L,R,z,B,V,H,U,ve=e((()=>{g(),L=t(n()),b(),k(),j(),R=t(r()),z=72,B=600,V=[{color:h.colorInfo,label:`private`,read:e=>e.renderer?.privateBytes??null},{color:h.colorSuccess,label:`JS heap`,read:e=>e.jsHeapUsedBytes}],H=(e,t)=>{let n=t=>t/Math.max(1,e.length-1)*B,r=e=>z-1-e/t*(z-2),i=``;for(let[t,a]of e.entries())a!==null&&(i+=`${i?`L`:`M`}${n(t).toFixed(1)} ${r(a).toFixed(1)} `);return i},U=(0,L.memo)(({history:e})=>{let t=V.map(t=>({...t,values:e.map(t.read)})).filter(e=>e.values.some(e=>e!==null)),n=Math.max(1,...t.flatMap(e=>e.values.map(e=>e??0))),r=e.length>1?(e.at(-1).at-e[0].at)/1e3:0;return(0,R.jsxs)(`div`,{style:{borderBlockEnd:`1px solid ${h.colorBorderSecondary}`,flexShrink:0},children:[(0,R.jsx)(`svg`,{"aria-hidden":!0,height:z,preserveAspectRatio:`none`,style:{display:`block`,paddingInline:12,width:`100%`},viewBox:`0 0 ${B} ${z}`,children:t.map(e=>(0,R.jsx)(`path`,{d:H(e.values,n),fill:`none`,stroke:e.color,strokeWidth:1.5,vectorEffect:`non-scaling-stroke`},e.label))}),(0,R.jsxs)(`div`,{className:A.caption,style:{display:`flex`,gap:12},children:[t.map(e=>(0,R.jsxs)(`span`,{style:{color:e.color},children:[`● `,e.label,` `,y(e.values.at(-1)??0)]},e.label)),(0,R.jsx)(`span`,{style:{flex:1}}),(0,R.jsxs)(`span`,{children:[`top `,y(n),` · last `,Math.round(r),`s of `,300,`s`]})]})]})}),U.displayName=`DevMemoryHistoryChart`})),W,G,K,q,J,ye,be,Y,xe=e((()=>{s(),o(),g(),W=t(n()),d(),fe(),ie(),pe(),b(),k(),_e(),ve(),j(),G=t(r()),K=1024*1024,q=(0,W.memo)(({hint:e,label:t,value:n})=>(0,G.jsxs)(`div`,{className:A.cell,title:e,children:[(0,G.jsx)(`span`,{className:A.key,children:t}),(0,G.jsx)(`span`,{className:A.value,children:n})]})),q.displayName=`DevMemoryStat`,J=(0,W.memo)(({residentMB:e,sample:t})=>{let{renderer:n}=t,r=n?.heap.usedBytes??t.jsHeapUsedBytes,i=n?.heap.limitBytes??t.jsHeapLimitBytes,a=e!==null&&n?Math.max(0,e*K-n.privateBytes-n.sharedBytes):null;return(0,G.jsxs)(`div`,{className:A.overview,children:[n&&(0,G.jsxs)(W.Fragment,{children:[(0,G.jsx)(q,{hint:`process.getProcessMemoryInfo().private — what the R readout shows`,label:`private`,value:y(n.privateBytes)}),(0,G.jsx)(q,{label:`shared`,value:y(n.sharedBytes)}),(0,G.jsx)(q,{hint:`app.getAppMetrics() workingSetSize`,label:`resident`,value:e===null?`—`:y(e*K)}),(0,G.jsx)(q,{hint:`resident − private − shared: freed pages macOS has not reclaimed yet`,label:`reclaimable`,value:a===null?`—`:y(a)})]}),(0,G.jsx)(q,{hint:`V8 heap used / limit`,label:`JS heap`,value:`${y(r)} / ${y(i)} · ${(r/i*100).toFixed(1)}%`}),n&&(0,G.jsxs)(W.Fragment,{children:[(0,G.jsx)(q,{hint:`V8 committed heap (totalHeapSize) and its physical pages`,label:`heap committed`,value:`${y(n.heap.totalBytes)} · phys ${y(n.heap.physicalBytes)}`}),(0,G.jsx)(q,{hint:`V8 malloc outside the managed heap`,label:`v8 malloced`,value:y(n.heap.mallocedBytes)}),(0,G.jsx)(q,{hint:`Blink (Oilpan) allocated / total`,label:`blink`,value:`${y(n.blink.allocatedBytes)} / ${y(n.blink.totalBytes)}`})]})]})}),J.displayName=`DevMemoryOverview`,ye=(0,W.memo)(()=>{let[e,t]=(0,W.useState)(null),[n,r]=(0,W.useState)(!1),[i,o]=(0,W.useState)(null),s=async e=>{r(!0),o(null);try{await e()}catch(e){o(e.message)}finally{r(!1)}},c=()=>s(async()=>t(await _.captureMemoryDump())),l=()=>s(async()=>{await _.collectRendererGarbage(),t(await _.captureMemoryDump())}),[u,...d]=e?.processes??[];return(0,G.jsxs)(W.Fragment,{children:[(0,G.jsxs)(`div`,{className:A.sectionTitle,children:[(0,G.jsx)(`span`,{children:`Breakdown`}),(0,G.jsx)(`span`,{className:m(A.muted,A.mono),children:e?`captured ${new Date(e.capturedAt).toLocaleTimeString()}`:`memory-infra dump`}),(0,G.jsx)(`span`,{style:{flex:1}}),i&&(0,G.jsx)(`span`,{className:m(A.error,A.mono),children:i}),(0,G.jsx)(a,{disabled:n,size:`small`,onClick:l,children:`GC`}),(0,G.jsx)(a,{loading:n,size:`small`,onClick:c,children:e?`Re-capture`:`Capture`})]}),u&&(0,G.jsx)(I,{process:u}),d.map(e=>(0,G.jsx)(I,{process:e},e.pid))]})}),ye.displayName=`DevMemoryBreakdown`,be=(0,W.memo)(()=>{let e=v()?.processes;return e?(0,G.jsxs)(W.Fragment,{children:[(0,G.jsx)(`div`,{className:A.sectionTitle,children:`Processes`}),[...e].sort((e,t)=>t.workingSetMB-e.workingSetMB).map(e=>(0,G.jsxs)(`div`,{className:m(A.row,A.mono),children:[(0,G.jsxs)(`span`,{children:[e.type,e.name&&(0,G.jsxs)(`span`,{className:A.muted,children:[` · `,e.name]}),(0,G.jsxs)(`span`,{className:A.muted,children:[` pid `,e.pid]})]}),(0,G.jsx)(`span`,{style:{textAlign:`end`},children:y(e.workingSetMB*K)}),(0,G.jsxs)(`span`,{className:A.muted,children:[`cpu `,e.cpuPercent.toFixed(1),`%`]})]},e.pid))]}):null}),be.displayName=`DevMemoryProcessTable`,Y=(0,W.memo)(()=>{let e=O(),t=v()?.rendererResidentMB??null;return e?(0,G.jsxs)(i,{className:m(ae.root,A.popover),children:[(0,G.jsx)(J,{residentMB:t,sample:e.latest}),(0,G.jsx)(U,{history:e.history}),(0,G.jsx)(`div`,{className:A.scroll,children:!1}),(0,G.jsx)(`div`,{className:A.legend,children:`Overview samples every 2s. Breakdown attaches the CDP debugger to this renderer and requests one detailed memory-infra dump (~1s): v8 is the JS heap, partition_alloc holds Blink strings and buffers, web_cache keeps decoded script sources, blink_gc is the DOM and CSSOM, canvas and cc/tile_memory are raster backing stores.`})]}):null}),Y.displayName=`DevDockMemoryPopover`})),X,Z,Q,$;e((()=>{f(),ne(),g(),X=t(n()),oe(),le(),b(),xe(),k(),de(),Z=t(r()),Q={active:p(`acss-jyxbxm`,[`.acss-jyxbxm{color:var(--ant-color-text);background:var(--ant-color-fill-secondary);}`],`
    color: var(--ant-color-text);
    background: var(--ant-color-fill-secondary);
  `),high:p(`acss-zknb5i`,[`.acss-zknb5i{color:var(--ant-color-error);}`],`
    color: var(--ant-color-error);
  `),mid:p(`acss-rc3uuo`,[`.acss-rc3uuo{color:var(--ant-color-warning);}`],`
    color: var(--ant-color-warning);
  `),text:p(`acss-1yab8b6`,[`.acss-1yab8b6{font-family:var(--ant-font-family-code);font-size:11px;font-feature-settings:'tnum';color:var(--ant-color-text-tertiary);}`],`
    font-family: var(--ant-font-family-code);
    font-size: 11px;
    font-feature-settings: 'tnum';
    color: var(--ant-color-text-tertiary);
  `)},$=(0,X.memo)(()=>{let e=O(),[t,n]=(0,X.useState)(!1);if(!T()||!e)return null;let{jsHeapUsedBytes:r,jsHeapLimitBytes:i,renderer:a}=e.latest,o=r/i*100,s=ue(o,a?.privateBytes);return(0,Z.jsx)(re,{arrow:!1,content:(0,Z.jsx)(Y,{}),open:t,placement:`topRight`,positionerProps:{sideOffset:6},styles:{content:{padding:0}},trigger:`click`,zIndex:se+1,onOpenChange:n,children:(0,Z.jsxs)(`button`,{type:`button`,className:m(ce.button,Q.text,s?Q.high:o>=70?Q.mid:void 0,t&&Q.active),title:a?`R = Renderer private footprint (red at 1 GiB) · J = JS heap used — click for the full breakdown`:`J = JS heap used — click for the full breakdown`,children:[a&&`R${y(a.privateBytes)} · `,`J`,y(r)]})})}),$.displayName=`DevDockMemoryWidget`}))();export{$ as default};