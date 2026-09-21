import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a,a as o,i as s,v as c}from"../vendor/vendor-react-B9HSWrpN.js";import{B as l,Kt as u,Mt as d,Nt as ee,Xn as f,Yn as p,Zn as m,at as h,it as g,qt as _,z as te}from"../vendor/vendor-ui-core-BmtybT1r.js";import{bt as ne,r as v}from"../vendor/vendor-antd-BWSxhuJE.js";import{Av as re,Bi as ie,cy as ae,gl as oe,ir as se,mt as y,t as b,ua as ce}from"../vendor/vendor-icons-vienkZi5.js";import{At as x,FD as S,Gt as C,ID as w,Ll as T,MA as E,Or as D,TA as O,Wt as le,hF as ue,jr as de,kt as fe,ql as pe,uF as k,wA as A}from"./index-w64_zsxD.js";import{n as j,t as me}from"./Popover-Cd3scH3I.js";import{n as M,t as he}from"./NeuralNetworkLoading-DiI77SUR.js";import{n as N,t as P}from"./TextArea-D_Rfq5JU.js";import{n as F,t as I}from"./Input-gdUxluEJ.js";import{n as ge,t as L}from"./useWorkspaceAwareNavigate-BbajQ7ta.js";import{n as R,t as _e}from"./GeneratingBorder-BPZp5wVH.js";import{r as ve,t as z}from"./useResolvedAgentRouteId-CvrfMlRz.js";import{n as ye,t as be}from"./AgentBreadcrumb-EgmXWgxo.js";import{n as xe,t as B}from"./expertise-Dvoz_wtu.js";var Se,Ce=e((()=>{Se=(e,t,n)=>({...e,[n]:t[n]})})),V,H,U,W,we=e((()=>{V=t(i()),H=e=>{if(!e)return{brief:``};try{let t=JSON.parse(e);return typeof t==`string`?{brief:t}:typeof t.brief==`string`?t:{brief:``}}catch{return{brief:e}}},U=e=>H(e?localStorage.getItem(e):null),W=e=>{let t=e?`self-learning:create:${e}`:void 0,[n]=(0,V.useState)(()=>U(t)),[r,i]=(0,V.useState)(n.brief),[a,o]=(0,V.useState)(n.draft),[s,c]=(0,V.useState)(n.draft?`review`:`describe`),l=(0,V.useRef)(t),u=(0,V.useRef)(void 0);return(0,V.useEffect)(()=>{if(l.current===t)return;let e=U(t);l.current=t,u.current=t,i(e.brief),o(e.draft),c(e.draft?`review`:`describe`)},[t]),(0,V.useEffect)(()=>{if(t){if(u.current===t){u.current=void 0;return}r.trim()||a?localStorage.setItem(t,JSON.stringify({brief:r,draft:a})):localStorage.removeItem(t)}},[r,a,t]),{brief:r,clearDraft:()=>{t&&localStorage.removeItem(t),i(``),o(void 0),c(`describe`)},draft:a,setBrief:i,setDraft:o,setStep:c,step:s,storageKey:t}}})),G,K,q,J,Y,X,Z,Q,Te=e((()=>{S(),_(),m(),F(),N(),l(),ee(),j(),h(),E(),v(),k(),b(),G=t(i()),r(),s(),A(),R(),M(),ye(),z(),x(),C(),L(),xe(),D(),T(),Ce(),we(),K=t(a()),q=90,J={canonEntries:``,domainFilter:``,layers:``,outOfScope:``,rationale:``},Y={body:w(`acss-kvwmo8`,[`.acss-kvwmo8{overflow-y:auto;display:flex;}`],`
    overflow-y: auto;
    display: flex;
  `),content:w(`acss-q17jfk`,[`.acss-q17jfk{width:100%;max-width:960px;padding-block:16px 96px;}`],`
    width: 100%;
    max-width: 960px;
    padding-block: 16px 96px;
  `),footer:w(`acss-1dtc8p9`,[`.acss-1dtc8p9{position:sticky;z-index:2;inset-block-end:0;padding-block:12px;border-block-start:1px solid var(--ant-color-border-secondary);background:var(--ant-color-bg-container);}`],`
    position: sticky;
    z-index: 2;
    inset-block-end: 0;

    padding-block: 12px;
    border-block-start: 1px solid var(--ant-color-border-secondary);

    background: var(--ant-color-bg-container);
  `),head:w(`acss-1ungznw`,[`.acss-1ungznw{padding-block-end:24px;}`],`
    padding-block-end: 24px;
  `),generatingStatus:w(`acss-sfvo20`,[`.acss-sfvo20{min-height:36px;padding-block:6px;color:var(--ant-color-text-secondary);}`],`
    min-height: 36px;
    padding-block: 6px;
    color: var(--ant-color-text-secondary);
  `),generatingTextItem:w(`acss-1n322gq`,[`.acss-1n322gq{display:flex;align-items:center;height:22px;font-size:14px;font-weight:500;line-height:22px;white-space:nowrap;}`],`
    display: flex;
    align-items: center;

    height: 22px;

    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    white-space: nowrap;
  `),generatingTextTrack:w(`acss-wnil3r`,[`.acss-wnil3r{animation:self-learning-generation-roll 16s cubic-bezier(0.4, 0, 0.2, 1) infinite;}`,`@media (prefers-reduced-motion: reduce){.acss-wnil3r{animation:none;}}`,`@keyframes self-learning-generation-roll{0%,20%{transform:translateY(0);}25%,45%{transform:translateY(-22px);}50%,70%{transform:translateY(-44px);}75%,95%{transform:translateY(-66px);}100%{transform:translateY(-88px);}}`],`
    animation: self-learning-generation-roll 16s cubic-bezier(0.4, 0, 0.2, 1) infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }

    @keyframes self-learning-generation-roll {
      0%,
      20% {
        transform: translateY(0);
      }

      25%,
      45% {
        transform: translateY(-22px);
      }

      50%,
      70% {
        transform: translateY(-44px);
      }

      75%,
      95% {
        transform: translateY(-66px);
      }

      100% {
        transform: translateY(-88px);
      }
    }
  `),generatingTextViewport:w(`acss-37h98b`,[`.acss-37h98b{overflow:hidden;height:22px;}`],`
    overflow: hidden;
    height: 22px;
  `),itemRow:w(`acss-127zoge`,[`.acss-127zoge{display:grid;grid-template-columns:32px minmax(0, 1fr) 28px;gap:8px;align-items:start;padding-block:8px;border-block-end:1px solid var(--ant-color-border-secondary);}`,`.acss-127zoge:last-child{border-block-end:none;}`],`
    display: grid;
    grid-template-columns: 32px minmax(0, 1fr) 28px;
    gap: 8px;
    align-items: start;

    padding-block: 8px;
    border-block-end: 1px solid var(--ant-color-border-secondary);

    &:last-child {
      border-block-end: none;
    }
  `),reviewSection:w(`acss-2kmat6`,[`.acss-2kmat6{padding-block:20px;}`,`.acss-2kmat6:first-child{padding-block:0 4px;}`],`
    padding-block: 20px;

    &:first-child {
      padding-block: 0 4px;
    }
  `),rationale:w(`acss-xnxycg`,[`.acss-xnxycg{margin:0;padding-inline:0;font-size:16px;line-height:1.75;color:var(--ant-color-text);}`],`
    margin: 0;
    padding-inline: 0;

    font-size: 16px;
    line-height: 1.75;
    color: var(--ant-color-text);
  `),seq:w(`acss-huit5z`,[`.acss-huit5z{padding-block-start:8px;font-size:14px;color:var(--ant-color-text-tertiary);}`],`
    padding-block-start: 8px;
    font-size: 14px;
    color: var(--ant-color-text-tertiary);
  `),title:w(`acss-1xz71gk`,[`.acss-1xz71gk{box-sizing:border-box;width:100%;padding-block:4px 8px;padding-inline-end:0;border:none;font-family:inherit;font-size:28px;font-weight:600;line-height:1.4;color:inherit;background:transparent;outline:none;}`],`
    box-sizing: border-box;
    width: 100%;
    padding-block: 4px 8px;
    padding-inline-end: 0;
    border: none;

    font-family: inherit;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.4;
    color: inherit;

    background: transparent;
    outline: none;
  `),titleStatic:w(`acss-1vhz386`,[`.acss-1vhz386{padding-block:4px 8px;font-size:28px;font-weight:600;line-height:1.4;color:var(--ant-color-text);}`],`
    padding-block: 4px 8px;

    font-size: 28px;
    font-weight: 600;
    line-height: 1.4;
    color: var(--ant-color-text);
  `)},X=e=>`${Math.floor(e/60)}:${(e%60).toString().padStart(2,`0`)}`,Z=(e,t)=>e.trim().toLowerCase().replaceAll(/[^\da-z]+/g,`-`).replaceAll(/^-|-$/g,``)||t,Q=(0,G.memo)(()=>{let{t:e}=n(`selfLearning`),t=ge(),{aid:r}=c(),i=de(e=>e.activeAgentId),{agentId:a}=ve(r),s=a||i,{brief:l,clearDraft:ee,draft:m,setBrief:h,setDraft:_,setStep:v,step:b,storageKey:x}=W(s),[S,C]=(0,G.useState)(!1),[w,T]=(0,G.useState)(J),[E,D]=(0,G.useState)(),[k,A]=(0,G.useState)(),[j,M]=(0,G.useState)(q);(0,G.useEffect)(()=>{if(b!==`preparing`&&!k)return;M(q);let e=window.setInterval(()=>M(e=>Math.max(0,e-1)),1e3);return()=>window.clearInterval(e)},[k,b]),(0,G.useEffect)(()=>{let e=e=>{l.trim()&&e.preventDefault()};return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[l]);let N=(0,G.useCallback)(async()=>{if(!(!s||!l.trim())){v(`preparing`);try{_(await B.draftDomain({agentId:s,brief:l.trim()})),v(`review`)}catch{p.error(e(`create.failed`)),v(m?`review`:`describe`)}}},[s,l,m,_,v,e]),F=(0,G.useCallback)(async t=>{let n=w[t].trim();if(!(!s||!l.trim()||!m||!n)){A(t);try{let e=await B.draftDomain({adjustment:n,agentId:s,brief:l.trim(),currentDraft:m});_(n=>n&&Se(n,e,t)),T(e=>({...e,[t]:``})),D(void 0)}catch{p.error(e(`create.adjust.failed`))}finally{A(void 0)}}},[w,s,l,m,_,e]),L=!!m&&!!m.title.trim()&&!!m.domainFilter.trim()&&!S,R=(0,G.useCallback)(async()=>{if(!(!s||!m||!L)){C(!0);try{let e=await B.createDomain({...m,agentId:s,brief:l.trim(),canonEntries:m.canonEntries.filter(e=>e.title.trim()),domainFilter:m.domainFilter.trim(),layers:m.layers.filter(e=>e.title.trim()),outOfScope:m.outOfScope?.trim()||null,rationale:m.rationale?.trim()||null,title:m.title.trim()});x&&localStorage.removeItem(x),t(O(`/agent`,s,`self-evolving`,e))}catch{p.error(e(`create.failed`))}finally{C(!1)}}},[s,l,L,m,t,x,e]),z=(0,G.useRef)(void 0);z.current=b===`describe`?N:b===`review`?R:void 0;let ye=(0,G.useCallback)(e=>{e.key===`Enter`&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),e.stopPropagation(),z.current?.())},[]),xe=(0,G.useCallback)((e,t)=>{t.key!==`Enter`||!t.metaKey&&!t.ctrlKey||(t.preventDefault(),t.stopPropagation(),F(e))},[F]),Ce=t=>{let n=k===t;return(0,K.jsxs)(u,{gap:8,onKeyDown:e=>xe(t,e),children:[(0,K.jsx)(P,{autoFocus:!0,autoSize:{maxRows:5,minRows:2},disabled:n,placeholder:e(`create.adjust.placeholder.${t}`),value:w[t],variant:`filled`,onChange:e=>T(n=>({...n,[t]:e.target.value}))}),(0,K.jsx)(u,{horizontal:!0,justify:`end`,children:(0,K.jsx)(d,{disabled:!w[t].trim()||n,icon:ie,loading:n,onClick:()=>void F(t),children:e(n?`create.adjust.adjusting`:`create.adjust.action`)})}),n&&(0,K.jsx)(g,{fontSize:12,type:`secondary`,children:j>0?e(`create.adjust.generatingCountdown`,{time:X(j)}):e(`create.generatingAlmostDone`)})]})},V=t=>{let n=E===t,r=k===t;return(0,K.jsx)(me,{content:Ce(t),open:n,placement:`bottomRight`,styles:{content:{padding:12,width:`min(520px, calc(100vw - 32px))`}},trigger:`click`,onOpenChange:e=>D(e?t:void 0),children:(0,K.jsx)(d,{"aria-expanded":n,"aria-haspopup":`dialog`,disabled:!!k&&!r,icon:se,size:`small`,type:`text`,children:e(`create.adjust.blockAction`)})})},H=e=>_(t=>t&&{...t,...e}),U=s?O(`/agent`,s,`self-evolving`):`/`,we=()=>{ee(),T(J),D(void 0),A(void 0),t(U)},Q=[e(`create.generating`),e(`create.generatingScope`),e(`create.generatingCanon`),e(`create.generatingLayers`),e(`create.generating`)];return(0,K.jsxs)(u,{height:`100%`,width:`100%`,children:[(0,K.jsx)(fe,{styles:{left:{paddingInlineStart:24}},left:s?(0,K.jsx)(be,{agentId:s,extraItems:[e(`create.modalTitle`)],title:(0,K.jsx)(o,{to:U,children:e(`title`)})}):null}),(0,K.jsx)(u,{className:Y.body,flex:1,width:`100%`,children:(0,K.jsx)(le,{minWidth:960,children:(0,K.jsxs)(u,{className:Y.content,onKeyDown:ye,children:[(0,K.jsx)(u,{horizontal:!0,className:Y.head,children:(0,K.jsxs)(u,{flex:1,gap:6,children:[b===`review`&&(0,K.jsx)(u,{horizontal:!0,children:(0,K.jsx)(d,{icon:re,size:`small`,type:`text`,onClick:we,children:e(`create.back`)})}),b===`review`&&m?(0,K.jsx)(`input`,{className:Y.title,maxLength:80,placeholder:e(`create.field.title`),value:m.title,onChange:e=>H({title:e.target.value})}):(0,K.jsx)(`div`,{className:Y.titleStatic,children:e(`create.modalTitle`)}),b!==`review`&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(g,{fontSize:12,type:`secondary`,children:e(`create.briefHelp`)}),(0,K.jsx)(_e,{generating:b===`preparing`,children:(0,K.jsx)(P,{autoFocus:!0,autoSize:{maxRows:10,minRows:5},disabled:b===`preparing`,placeholder:e(`create.briefPlaceholder`),value:l,variant:b===`preparing`?`borderless`:`outlined`,onChange:e=>h(e.target.value)})}),b===`preparing`?(0,K.jsxs)(u,{horizontal:!0,align:`center`,className:Y.generatingStatus,gap:10,justify:`space-between`,children:[(0,K.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,K.jsx)(he,{size:18}),(0,K.jsx)(`div`,{"aria-label":e(`create.generating`),className:Y.generatingTextViewport,role:`status`,children:(0,K.jsx)(`div`,{"aria-hidden":!0,className:Y.generatingTextTrack,children:Q.map((e,t)=>(0,K.jsx)(`div`,{className:`${Y.generatingTextItem} ${pe.shinyText}`,children:e},t))})})]}),(0,K.jsx)(g,{fontSize:12,type:`secondary`,children:j>0?e(`create.generatingCountdown`,{time:X(j)}):e(`create.generatingAlmostDone`)})]}):(0,K.jsx)(u,{horizontal:!0,align:`center`,justify:`end`,children:(0,K.jsx)(d,{disabled:!l.trim(),icon:se,type:`primary`,onClick:()=>void N(),children:e(`create.generate`)})})]})]})}),b===`review`&&m&&(0,K.jsxs)(u,{className:Y.body,children:[(0,K.jsxs)(u,{className:Y.reviewSection,gap:10,children:[(0,K.jsx)(g,{fontSize:13,weight:600,children:e(`create.field.brief`)}),(0,K.jsx)(P,{autoSize:{maxRows:8,minRows:3},value:l,variant:`filled`,onChange:e=>h(e.target.value)}),(0,K.jsx)(u,{horizontal:!0,justify:`end`,style:{paddingBlockEnd:8},children:(0,K.jsx)(d,{disabled:!l.trim()||!!k,icon:ie,size:`small`,onClick:()=>void N(),children:e(`create.regenerate`)})})]}),(0,K.jsx)(ne,{style:{margin:0}}),(0,K.jsxs)(u,{className:Y.reviewSection,gap:12,children:[(0,K.jsxs)(u,{horizontal:!0,align:`flex-start`,gap:8,justify:`space-between`,children:[(0,K.jsx)(g,{fontSize:14,type:`secondary`,children:e(`create.reviewHelp`)}),(0,K.jsx)(u,{flex:`none`,children:V(`rationale`)})]}),(0,K.jsx)(P,{autoSize:{maxRows:8,minRows:2},className:Y.rationale,disabled:k===`rationale`,placeholder:e(`create.field.rationalePlaceholder`),value:m.rationale??``,variant:`borderless`,onChange:e=>H({rationale:e.target.value})})]}),(0,K.jsxs)(u,{className:Y.reviewSection,gap:10,children:[(0,K.jsxs)(u,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,K.jsx)(g,{fontSize:13,weight:600,children:e(`create.field.domainFilter`)}),V(`domainFilter`)]}),(0,K.jsx)(P,{autoSize:{maxRows:6,minRows:2},value:m.domainFilter,variant:`filled`,onChange:e=>H({domainFilter:e.target.value})})]}),(0,K.jsxs)(u,{className:Y.reviewSection,gap:10,children:[(0,K.jsxs)(u,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,K.jsx)(g,{fontSize:13,weight:600,children:e(`create.field.outOfScope`)}),V(`outOfScope`)]}),(0,K.jsx)(P,{autoSize:{maxRows:5,minRows:2},placeholder:e(`create.field.outOfScopePlaceholder`),value:m.outOfScope??``,variant:`filled`,onChange:e=>H({outOfScope:e.target.value})})]}),(0,K.jsxs)(u,{className:Y.reviewSection,gap:10,children:[(0,K.jsxs)(u,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,K.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,K.jsx)(f,{color:ue.colorTextTertiary,icon:ae,size:16}),(0,K.jsx)(g,{fontSize:13,weight:600,children:e(`create.anchor.canon`)}),(0,K.jsx)(g,{fontSize:12,type:`secondary`,children:e(`create.anchor.canonHint`)})]}),(0,K.jsxs)(u,{horizontal:!0,align:`center`,gap:4,children:[V(`canonEntries`),(0,K.jsx)(d,{icon:ce,size:`small`,type:`text`,onClick:()=>H({canonEntries:[...m.canonEntries,{key:`canon-${m.canonEntries.length+1}`,source:``,statement:``,title:``}]}),children:e(`create.anchor.addCanon`)})]})]}),m.canonEntries.length===0&&(0,K.jsx)(g,{fontSize:12,type:`secondary`,children:e(`create.anchor.noCanon`)}),m.canonEntries.map((t,n)=>(0,K.jsxs)(`div`,{className:Y.itemRow,children:[(0,K.jsxs)(`span`,{className:Y.seq,children:[`E`,n+1]}),(0,K.jsxs)(u,{gap:4,children:[(0,K.jsxs)(u,{horizontal:!0,gap:8,children:[(0,K.jsx)(I,{placeholder:e(`create.anchor.canonTitle`),style:{flex:1},value:t.title,variant:`filled`,onChange:e=>H({canonEntries:m.canonEntries.map((t,r)=>r===n?{...t,key:Z(e.target.value,t.key),title:e.target.value}:t)})}),(0,K.jsx)(I,{placeholder:e(`create.anchor.canonSource`),style:{flex:1},value:t.source,variant:`filled`,onChange:e=>H({canonEntries:m.canonEntries.map((t,r)=>r===n?{...t,source:e.target.value}:t)})})]}),(0,K.jsx)(P,{autoSize:{maxRows:4,minRows:1},placeholder:e(`create.anchor.canonStatement`),value:t.statement,variant:`borderless`,onChange:e=>H({canonEntries:m.canonEntries.map((t,r)=>r===n?{...t,statement:e.target.value}:t)})})]}),(0,K.jsx)(te,{icon:y,size:`small`,onClick:()=>H({canonEntries:m.canonEntries.filter((e,t)=>t!==n)})})]},n))]}),(0,K.jsxs)(u,{className:Y.reviewSection,gap:10,children:[(0,K.jsxs)(u,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,K.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,K.jsx)(f,{color:ue.colorTextTertiary,icon:oe,size:16}),(0,K.jsx)(g,{fontSize:13,weight:600,children:e(`create.anchor.layers`)}),(0,K.jsx)(g,{fontSize:12,type:`secondary`,children:m.layerSource===`canonical`&&m.layerCanonRef?e(`create.anchor.layersFrom`,{ref:m.layerCanonRef}):e(`create.anchor.layersInvented`)})]}),(0,K.jsxs)(u,{horizontal:!0,align:`center`,gap:4,children:[V(`layers`),(0,K.jsx)(d,{icon:ce,size:`small`,type:`text`,onClick:()=>H({layers:[...m.layers,{description:null,key:`layer-${m.layers.length+1}`,title:``}]}),children:e(`create.anchor.addLayer`)})]})]}),m.layers.length===0&&(0,K.jsx)(g,{fontSize:12,type:`secondary`,children:e(`create.anchor.noLayers`)}),m.layers.map((t,n)=>(0,K.jsxs)(`div`,{className:Y.itemRow,children:[(0,K.jsxs)(`span`,{className:Y.seq,children:[`L`,n+1]}),(0,K.jsxs)(u,{gap:4,children:[(0,K.jsx)(I,{placeholder:e(`create.anchor.layerTitle`),value:t.title,variant:`filled`,onChange:e=>H({layers:m.layers.map((t,r)=>r===n?{...t,key:Z(e.target.value,t.key),title:e.target.value}:t)})}),(0,K.jsx)(I,{placeholder:e(`create.anchor.layerDesc`),value:t.description??``,variant:`borderless`,onChange:e=>H({layers:m.layers.map((t,r)=>r===n?{...t,description:e.target.value}:t)})})]}),(0,K.jsx)(te,{icon:y,size:`small`,onClick:()=>H({layers:m.layers.filter((e,t)=>t!==n)})})]},n))]})]}),b===`review`&&(0,K.jsx)(u,{horizontal:!0,align:`center`,className:Y.footer,justify:`end`,children:(0,K.jsx)(u,{horizontal:!0,align:`center`,gap:4,children:(0,K.jsx)(d,{disabled:!!k||!L,loading:S,type:`primary`,onClick:()=>void z.current?.(),children:e(`create.confirm`)})})})]})})})]})}),Q.displayName=`CreateDomainPage`})),Ee,De,$;e((()=>{Ee=t(i()),Te(),De=t(a()),$=(0,Ee.memo)(()=>(0,De.jsx)(Q,{})),$.displayName=`AgentSelfLearningCreatePage`}))();export{$ as default};