import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a,i as o,v as s}from"../vendor/vendor-react-B9HSWrpN.js";import{Bt as c,Kt as l,Mt as u,Nt as d,Vt as f,Xn as p,Yn as ee,Zn as m,at as h,it as g,qt as _}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Mt as te,r as v}from"../vendor/vendor-antd-BWSxhuJE.js";import{Af as ne,Ma as re,ig as y,t as b}from"../vendor/vendor-icons-vienkZi5.js";import{Ct as x,FD as S,ID as C,MA as w,hF as ie,uF as ae,xt as oe}from"./index-w64_zsxD.js";import{n as T,t as E}from"./Tag-C95BKTI7.js";import{n as se,t as D}from"./trpcError-Dgk_pJJV.js";import{n as ce,t as O}from"./TextArea-D_Rfq5JU.js";import{n as le,t as k}from"./WorkspaceLink-CS4ZDv1a.js";import{n as ue,t as A}from"./AsyncBoundary-K-esguw4.js";import{r as j,t as M}from"./eval-DXsdohMt.js";var N,P,de=e((()=>{N=e=>typeof e==`string`?e:Array.isArray(e)?e.map(e=>{if(typeof e==`string`)return e;let t=e?.text;return typeof t==`string`?t:``}).filter(Boolean).join(`
`):``,P=e=>{let t=(e??[]).filter(e=>e.role!==`system`).map(e=>({role:e.role??`user`,text:N(e.content)}));return{context:t,hasBoundary:t.length>0}}})),F,I,L,R,z,fe=e((()=>{S(),_(),T(),F=t(i()),r(),I=t(a()),L={body:C(`acss-17yc1hu`,[`.acss-17yc1hu{overflow-y:auto;max-height:240px;padding-block:10px;padding-inline:12px;border-radius:10px;font-size:var(--ant-font-size);line-height:1.75;white-space:pre-wrap;background:var(--ant-color-fill-quaternary);}`],`
    overflow-y: auto;

    /* Each turn is capped so a long one cannot push the rest of the
       transcript out of view; the full text stays reachable inside. */
    max-height: 240px;
    padding-block: 10px;
    padding-inline: 12px;
    border-radius: 10px;

    font-size: var(--ant-font-size);
    line-height: 1.75;
    white-space: pre-wrap;

    background: var(--ant-color-fill-quaternary);
  `),bodyMuted:C(`acss-1kpjwem`,[`.acss-1kpjwem{overflow-y:auto;max-height:120px;padding-block:8px;padding-inline:12px;border-radius:10px;font-size:var(--ant-font-size-sm);line-height:1.7;color:var(--ant-color-text-tertiary);white-space:pre-wrap;background:var(--ant-color-fill-quaternary);}`],`
    overflow-y: auto;

    max-height: 120px;
    padding-block: 8px;
    padding-inline: 12px;
    border-radius: 10px;

    font-size: var(--ant-font-size-sm);
    line-height: 1.7;
    color: var(--ant-color-text-tertiary);
    white-space: pre-wrap;

    background: var(--ant-color-fill-quaternary);
  `),head:C(`acss-14fzxf6`,[`.acss-14fzxf6{font-size:var(--ant-font-size-sm);font-weight:500;color:var(--ant-color-text-tertiary);}`],`
    font-size: var(--ant-font-size-sm);
    font-weight: 500;
    color: var(--ant-color-text-tertiary);
  `)},R={assistant:`testCaseDetail.role.assistant`,system:`testCaseDetail.role.system`,tool:`testCaseDetail.role.tool`,user:`testCaseDetail.role.user`},z=(0,F.memo)(({badge:e,content:t,muted:r,role:i})=>{let{t:a}=n(`eval`),o=R[i];return(0,I.jsxs)(l,{gap:5,children:[(0,I.jsxs)(l,{horizontal:!0,align:`center`,className:L.head,gap:6,children:[(0,I.jsx)(`span`,{children:o?a(o):i}),e&&(0,I.jsx)(E,{size:`small`,children:e})]}),(0,I.jsx)(`div`,{className:r?L.bodyMuted:L.body,children:t})]})}),z.displayName=`MessageBlock`})),B,V,H,U,pe=e((()=>{S(),_(),m(),b(),B=t(i()),r(),de(),fe(),V=t(a()),H={boundary:C(`acss-1x84gxd`,[`.acss-1x84gxd{display:flex;gap:8px;align-items:center;font-size:var(--ant-font-size-sm);color:var(--ant-color-text-quaternary);}`,`.acss-1x84gxd::after{content:'';flex:1;height:1px;background:var(--ant-color-split);}`],`
    display: flex;
    gap: 8px;
    align-items: center;

    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-quaternary);

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--ant-color-split);
    }
  `),chevron:C(`acss-1xmyuzm`,[`.acss-1xmyuzm{transition:transform 0.15s ease;}`],`
    transition: transform 0.15s ease;
  `),chevronOpen:C(`acss-rgy1v3`,[`.acss-rgy1v3{transform:rotate(90deg);}`],`
    transform: rotate(90deg);
  `),toggle:C(`acss-1bsuuau`,[`.acss-1bsuuau{cursor:pointer;display:flex;gap:6px;align-items:center;align-self:flex-start;padding:0;border:none;font-size:var(--ant-font-size-sm);color:var(--ant-color-text-tertiary);background:transparent;}`,`.acss-1bsuuau:hover{color:var(--ant-color-text);}`],`
    cursor: pointer;

    display: flex;
    gap: 6px;
    align-items: center;
    align-self: flex-start;

    padding: 0;
    border: none;

    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-tertiary);

    background: transparent;

    &:hover {
      color: var(--ant-color-text);
    }
  `)},U=(0,B.memo)(({input:e,inputSlot:t,messages:r})=>{let{t:i}=n(`eval`),{context:a,hasBoundary:o}=P(r),[s,c]=(0,B.useState)(!1);return(0,V.jsxs)(l,{gap:12,children:[o&&(0,V.jsxs)(`button`,{className:H.toggle,type:`button`,onClick:()=>c(e=>!e),children:[(0,V.jsx)(p,{className:s?`${H.chevron} ${H.chevronOpen}`:H.chevron,icon:y,size:14}),i(`testCaseDetail.context`,{count:a.length})]}),s&&(0,V.jsxs)(V.Fragment,{children:[a.map((e,t)=>(0,V.jsx)(z,{muted:!0,content:e.text,role:e.role},t)),(0,V.jsx)(`div`,{className:H.boundary,children:i(`testCaseDetail.boundary`)})]}),t??(0,V.jsx)(z,{badge:`input`,content:e,role:`user`})]})}),U.displayName=`Transcript`})),W,G,K,me=e((()=>{W=t(i()),G=(e,t)=>{let n={};t.input!==e.input&&(n.input=t.input),t.expected!==e.expected&&(n.expected=t.expected);let r={};return Object.keys(n).length>0&&(r.content=n),t.criteria!==e.criteria&&(r.evalConfig={criteria:t.criteria}),Object.keys(r).length>0?r:null},K=e=>{let[t,n]=(0,W.useState)(!1),[r,i]=(0,W.useState)(e),a=(0,W.useCallback)(()=>{i(e),n(!0)},[e]);return{cancel:(0,W.useCallback)(()=>n(!1),[]),draft:r,editing:t,patch:(0,W.useMemo)(()=>G(e,r),[e,r]),setDraft:e=>i(t=>({...t,...e})),start:a,stop:()=>n(!1)}}})),q,J,Y,X,he=e((()=>{S(),_(),m(),ce(),d(),T(),h(),w(),v(),ae(),b(),q=t(i()),r(),le(),M(),pe(),me(),J=t(a()),Y={breadcrumb:C(`acss-q6qdbw`,[`.acss-q6qdbw{font-size:var(--ant-font-size);}`,`.acss-q6qdbw a{color:var(--ant-color-text-tertiary);text-decoration:none;transition:color 0.15s ease;}`,`.acss-q6qdbw a:hover{color:var(--ant-color-text);}`],`
    font-size: var(--ant-font-size);

    a {
      color: var(--ant-color-text-tertiary);
      text-decoration: none;
      transition: color 0.15s ease;

      &:hover {
        color: var(--ant-color-text);
      }
    }
  `),icon:C(`acss-162tfms`,[`.acss-162tfms{display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:10px;background:var(--ant-color-fill-tertiary);}`],`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;
    border-radius: 10px;

    background: var(--ant-color-fill-tertiary);
  `),label:C(`acss-a9xmeq`,[`.acss-a9xmeq{font-size:var(--ant-font-size-sm);font-weight:500;color:var(--ant-color-text-secondary);}`],`
    font-size: var(--ant-font-size-sm);
    font-weight: 500;
    color: var(--ant-color-text-secondary);
  `),editor:C(`acss-1qxo3w2`,[`.acss-1qxo3w2{font-size:var(--ant-font-size);line-height:1.75;}`],`
    font-size: var(--ant-font-size);
    line-height: 1.75;
  `),prose:C(`acss-5z8vjz`,[`.acss-5z8vjz{padding-block:10px;padding-inline:12px;border-radius:10px;font-size:var(--ant-font-size);line-height:1.75;white-space:pre-wrap;background:var(--ant-color-fill-quaternary);}`],`
    padding-block: 10px;
    padding-inline: 12px;
    border-radius: 10px;

    font-size: var(--ant-font-size);
    line-height: 1.75;
    white-space: pre-wrap;

    background: var(--ant-color-fill-quaternary);
  `)},X=(0,q.memo)(({datasetName:e,testCase:t})=>{let{t:r}=n(`eval`),i=j(e=>e.updateTestCase),[a,o]=(0,q.useState)(!1),s=t.content??{},c=typeof s.expected==`string`?s.expected:void 0,d=typeof t.evalConfig?.criteria==`string`?t.evalConfig.criteria:void 0,f=typeof t.metadata?.caseId==`string`?t.metadata.caseId:void 0,m=typeof t.metadata?.capturedOutput==`string`?t.metadata.capturedOutput:void 0,h=t.metadata?.capturedOutputKind===`positive`,{cancel:_,draft:v,editing:b,patch:x,setDraft:S,start:C,stop:w}=K((0,q.useMemo)(()=>({criteria:d??``,expected:c??``,input:s.input??``}),[d,c,s.input]));return(0,J.jsxs)(l,{gap:24,style:{marginInline:`auto`,maxWidth:880,paddingBlock:24,paddingInline:32,width:`100%`},children:[(0,J.jsx)(te,{className:Y.breadcrumb,separator:(0,J.jsx)(p,{icon:y,size:14}),items:[{title:(0,J.jsx)(k,{to:`/eval`,children:r(`testCaseDetail.breadcrumb.eval`)})},{title:(0,J.jsx)(k,{to:`/eval/datasets/${t.datasetId}`,children:e||r(`testCaseDetail.breadcrumb.dataset`)})},{title:f??r(`testCaseDetail.title`)}]}),(0,J.jsxs)(l,{horizontal:!0,align:`center`,gap:12,justify:`space-between`,children:[(0,J.jsxs)(l,{horizontal:!0,align:`center`,gap:12,children:[(0,J.jsx)(`div`,{className:Y.icon,children:(0,J.jsx)(ne,{size:18,style:{color:ie.colorTextSecondary}})}),(0,J.jsxs)(l,{gap:6,children:[(0,J.jsx)(g,{as:`h4`,style:{fontSize:20,fontWeight:600,margin:0},children:f??r(`testCaseDetail.title`)}),(0,J.jsx)(l,{horizontal:!0,gap:6,children:t.evalMode&&(0,J.jsx)(E,{size:`small`,children:t.evalMode})})]})]}),b?(0,J.jsxs)(l,{horizontal:!0,gap:8,children:[(0,J.jsx)(u,{disabled:a,size:`small`,onClick:_,children:r(`common.cancel`)}),(0,J.jsx)(u,{loading:a,size:`small`,type:`primary`,onClick:async()=>{if(!x)return w();o(!0);try{await i(t.id,t.datasetId,x),w()}catch(e){ee.error(e?.message??r(`testCaseDetail.saveFailed`))}finally{o(!1)}},children:r(`common.save`)})]}):(0,J.jsx)(u,{icon:re,size:`small`,onClick:C,children:r(`common.edit`)})]}),(0,J.jsxs)(l,{gap:10,children:[(0,J.jsx)(`span`,{className:Y.label,children:r(`testCaseDetail.definition`)}),(0,J.jsx)(U,{input:s.input??``,messages:s.messages,inputSlot:b?(0,J.jsx)(O,{autoSize:{maxRows:12,minRows:3},className:Y.editor,value:v.input,onChange:e=>S({input:e.target.value})}):void 0})]}),m&&!h&&(0,J.jsxs)(l,{gap:10,children:[(0,J.jsxs)(l,{horizontal:!0,align:`center`,gap:8,children:[(0,J.jsx)(`span`,{className:Y.label,children:r(`testCaseDetail.capturedOutput`)}),(0,J.jsx)(E,{color:`error`,size:`small`,children:r(`testCaseDetail.counterExample`)})]}),(0,J.jsx)(`div`,{className:Y.prose,children:m}),(0,J.jsx)(g,{style:{fontSize:12},type:`secondary`,children:r(`testCaseDetail.capturedOutputHint`)})]}),(0,J.jsxs)(l,{gap:10,children:[(0,J.jsx)(`span`,{className:Y.label,children:r(`testCaseDetail.criteria`)}),b?(0,J.jsx)(O,{autoSize:{maxRows:12,minRows:3},className:Y.editor,value:v.criteria,onChange:e=>S({criteria:e.target.value})}):d?(0,J.jsx)(`div`,{className:Y.prose,children:d}):(0,J.jsx)(g,{style:{fontSize:12},type:`secondary`,children:r(`testCaseDetail.criteria.empty`)})]}),(0,J.jsxs)(l,{gap:10,children:[(0,J.jsx)(`span`,{className:Y.label,children:r(`testCaseDetail.expected`)}),b?(0,J.jsx)(O,{autoSize:{maxRows:12,minRows:3},className:Y.editor,placeholder:r(`testCaseDetail.expected.placeholder`),value:v.expected,onChange:e=>S({expected:e.target.value})}):c?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`div`,{className:Y.prose,children:c}),h&&(0,J.jsx)(g,{style:{fontSize:12},type:`secondary`,children:r(`testCaseDetail.expectedFromCapture`)})]}):(0,J.jsx)(g,{style:{fontSize:12},type:`secondary`,children:r(`testCaseDetail.expected.empty`)})]})]})}),X.displayName=`TestCaseDetail`})),Z,Q,$;e((()=>{f(),h(),Z=t(i()),r(),o(),ue(),x(),M(),D(),he(),Q=t(a()),$=(0,Z.memo)(()=>{let{t:e}=n(`eval`),{caseId:t}=s(),r=j(e=>e.useFetchTestCase),i=j(e=>e.useFetchDatasetDetail),{data:a,error:o,isLoading:l,mutate:u}=r(t),{data:d}=i(a?.datasetId),f=se(o,`NOT_FOUND`);return(0,Q.jsx)(A,{data:f?null:a,error:f?void 0:o,errorVariant:`page`,isEmpty:f||!a,isLoading:l,loading:(0,Q.jsx)(oe,{}),empty:(0,Q.jsx)(c,{flex:1,children:(0,Q.jsx)(g,{type:`secondary`,children:e(`testCaseDetail.notFound`)})}),onRetry:()=>u(),children:a&&(0,Q.jsx)(X,{datasetName:d?.name,testCase:a})})}),$.displayName=`EvalTestCaseDetailPage`}))();export{$ as default};