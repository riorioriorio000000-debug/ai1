import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,V as r,j as i,z as a}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as o,T as s,i as ee,v as te}from"../vendor/vendor-react-B9HSWrpN.js";import{B as c,Kt as l,Mt as u,Nt as d,S as ne,Xn as f,Yn as p,Zn as re,at as m,it as h,qt as g,v as ie,z as _}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Et as v,Jt as ae,X as oe,et as y,r as b}from"../vendor/vendor-antd-BWSxhuJE.js";import{K_ as se,Ma as ce,Op as le,Xp as ue,ga as de,ig as fe,mt as pe,t as x,uf as me,wv as he}from"../vendor/vendor-icons-vienkZi5.js";import{Ct as ge,FD as S,ID as C,MA as _e,Xf as ve,hF as w,uF as T,xt as ye}from"./index-w64_zsxD.js";import{n as be,t as xe}from"./DropdownMenu-1ae8j9bI.js";import{n as E,t as D}from"./Empty-Dam8NCz3.js";import{t as Se}from"./_virtual_lobe-ui-named_base-ui_useModalContext-CvZy-G5G.js";import{n as Ce,t as we}from"./Select-C0UJO2yB.js";import{n as Te,t as Ee}from"./AsyncError-B3Va32IA.js";import{n as De,t as Oe}from"./useWorkspaceAwareNavigate-BbajQ7ta.js";import{n as O,t as k}from"./WorkspaceLink-CS4ZDv1a.js";import{c as ke,o as Ae,r as A,t as j}from"./eval-DXsdohMt.js";import{i as je,n as Me,r as Ne,t as Pe}from"./StatusBadge-DcsxSiG-.js";import{n as Fe,t as Ie}from"./RunCreateModal-DKmnjAkz.js";import{n as Le,t as Re}from"./SegmentBar-DmHTelyR.js";var M,N,ze,Be,P,F=e((()=>{d(),ve(),Ce(),_e(),Se(),b(),a(),M=t(o()),i(),j(),je(),N=t(s()),ze=(0,M.memo)(({experiment:e,formId:t,onLoadingChange:r,onSuccess:i})=>{let{t:a}=n(`eval`),{close:o}=ie(),[s]=y.useForm(),ee=A(e=>e.createExperiment),te=A(e=>e.updateExperiment),c=A(e=>e.useFetchBenchmarks),l=A(ke.benchmarkList);return c(),(0,M.useEffect)(()=>{e&&s.setFieldsValue({benchmarkIds:e.benchmarks.map(e=>e.id),description:e.description||void 0,name:e.name})},[e,s]),(0,N.jsxs)(y,{form:s,id:t,layout:`vertical`,onFinish:async t=>{r(!0);try{let n=e?await te({...t,id:e.id}):await ee(t);p.success(a(e?`experiment.edit.success`:`experiment.create.title`)),o(),i?.(n.id)}catch(t){p.error(t instanceof Error?t.message:a(e?`experiment.edit.error`:`experiment.create.error`))}finally{r(!1)}},children:[(0,N.jsx)(y.Item,{label:a(`experiment.create.name.label`),name:`name`,rules:[{message:a(`experiment.create.nameRequired`),required:!0}],children:(0,N.jsx)(oe,{placeholder:a(`experiment.create.name.placeholder`)})}),(0,N.jsx)(y.Item,{label:a(`experiment.create.description.label`),name:`description`,children:(0,N.jsx)(oe.TextArea,{placeholder:a(`experiment.create.description.placeholder`),rows:3})}),(0,N.jsx)(y.Item,{label:a(`experiment.create.benchmarks.label`),name:`benchmarkIds`,rules:[{message:a(`experiment.create.benchmarksRequired`),required:!0}],children:(0,N.jsx)(we,{mode:`multiple`,placeholder:a(`experiment.create.benchmarks.placeholder`),options:l.map(e=>({label:e.name,value:e.id}))})})]})}),Be=(0,M.memo)(({formId:e,loading:t,submitText:r})=>{let{t:i}=n(`eval`),{close:a}=ie();return(0,N.jsxs)(ne,{children:[(0,N.jsx)(u,{disabled:t,onClick:a,children:i(`common.cancel`)}),(0,N.jsx)(u,{form:e,htmlType:`submit`,loading:t,type:`primary`,children:r})]})}),P=({experiment:e,onSuccess:t}={})=>Ne({renderContent:({formId:n,setLoading:r})=>(0,N.jsx)(ze,{experiment:e,formId:n,onLoadingChange:r,onSuccess:t}),renderFooter:({formId:t,loading:n})=>(0,N.jsx)(Be,{formId:t,loading:n,submitText:r(e?`common.update`:`common.create`,{ns:`eval`})}),title:r(e?`experiment.edit.title`:`experiment.create.title`,{ns:`eval`}),width:520})})),Ve,I,L,R,He=e((()=>{S(),g(),re(),c(),d(),m(),x(),Ve=t(o()),i(),O(),I=t(s()),L={iconBox:C(`acss-g0hdqq`,[`.acss-g0hdqq{display:flex;flex-shrink:0;align-items:center;justify-content:center;width:32px;height:32px;border-radius:var(--ant-border-radius);color:var(--ant-color-primary);background:var(--ant-color-primary-bg);}`],`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;
    border-radius: var(--ant-border-radius);

    color: var(--ant-color-primary);

    background: var(--ant-color-primary-bg);
  `),row:C(`acss-19vfdrv`,[`.acss-19vfdrv{padding-block:10px;padding-inline:4px;border-radius:var(--ant-border-radius);transition:background 0.15s ease;}`,`.acss-19vfdrv:hover{background:var(--ant-color-fill-quaternary);}`,`@media (prefers-reduced-motion: reduce){.acss-19vfdrv{transition:none;}}`],`
    padding-block: 10px;
    padding-inline: 4px;
    border-radius: var(--ant-border-radius);
    transition: background 0.15s ease;

    &:hover {
      background: var(--ant-color-fill-quaternary);
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `)},R=(0,Ve.memo)(({dataset:e,onAddRun:t})=>{let{t:r}=n(`eval`);return(0,I.jsxs)(l,{horizontal:!0,align:`center`,className:L.row,gap:12,children:[(0,I.jsx)(`div`,{className:L.iconBox,children:(0,I.jsx)(f,{icon:ue,size:16})}),(0,I.jsxs)(l,{flex:1,gap:2,style:{minWidth:0},children:[(0,I.jsx)(h,{ellipsis:!0,weight:500,children:e.name}),typeof e.testCaseCount==`number`&&(0,I.jsx)(h,{fontSize:12,type:`secondary`,children:r(`run.create.caseCount`,{count:e.testCaseCount})})]}),(0,I.jsx)(u,{icon:de,size:`small`,type:`text`,onClick:()=>t(e),children:r(`dataset.detail.addRun`)}),(0,I.jsx)(k,{to:`/eval/bench/${e.benchmarkId}/datasets/${e.id}`,children:(0,I.jsx)(_,{icon:fe,size:`small`})})]})})})),z,B,V,Ue,We=e((()=>{S(),E(),g(),c(),b(),x(),z=t(o()),i(),O(),He(),B=t(s()),V={listCard:C(`acss-fvaj2g`,[`.acss-fvaj2g .ant-card-body{padding-block:4px;padding-inline:8px;}`],`
    .ant-card-body {
      padding-block: 4px;
      padding-inline: 8px;
    }
  `),sectionTitle:C(`acss-1qhxrhc`,[`.acss-1qhxrhc{margin:0;font-size:16px;font-weight:600;}`],`
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  `)},Ue=(0,z.memo)(({actions:e,experiment:t})=>{let{t:r}=n(`eval`),i=(0,z.useMemo)(()=>t.benchmarks.map(t=>({benchmark:t,datasets:e.baselineDatasets.filter(e=>e.benchmarkId===t.id)})),[t.benchmarks,e.baselineDatasets]);return(0,B.jsxs)(l,{gap:12,children:[(0,B.jsx)(`h3`,{className:V.sectionTitle,children:r(`experiment.detail.benchmarks`)}),i.map(({benchmark:t,datasets:n})=>(0,B.jsx)(v,{className:V.listCard,title:t.name,extra:(0,B.jsx)(k,{to:`/eval/bench/${t.id}`,children:(0,B.jsx)(_,{icon:fe,size:`small`})}),children:n.length===0?(0,B.jsx)(D,{description:r(`experiment.detail.benchmarksEmpty`),icon:ue}):(0,B.jsx)(l,{gap:0,children:n.map(t=>(0,B.jsx)(R,{dataset:t,onAddRun:e.addRun},t.id))})},t.id))]})})})),Ge,H,Ke,qe,Je=e((()=>{S(),g(),d(),be(),m(),_e(),b(),x(),Ge=t(o()),i(),Oe(),j(),F(),H=t(s()),Ke={meta:C(`acss-1bqq77q`,[`.acss-1bqq77q{font-size:13px;color:var(--ant-color-text-tertiary);}`],`
    font-size: 13px;
    color: var(--ant-color-text-tertiary);
  `)},qe=(0,Ge.memo)(({experiment:e})=>{let{t}=n(`eval`),{modal:r}=ae.useApp(),i=De(),a=A(e=>e.deleteExperiment),o=[{danger:!0,icon:(0,H.jsx)(pe,{size:16}),key:`delete`,label:t(`common.delete`),onClick:()=>r.confirm({content:t(`experiment.actions.delete.confirm`),okButtonProps:{danger:!0},okText:t(`experiment.actions.delete`),onOk:async()=>{try{await a(e.id),i(`/eval`)}catch{p.error(t(`experiment.delete.error`))}},title:t(`experiment.actions.delete`)})}];return(0,H.jsxs)(l,{horizontal:!0,align:`start`,justify:`space-between`,children:[(0,H.jsxs)(l,{gap:6,style:{minWidth:0},children:[(0,H.jsx)(h,{as:`h3`,style:{fontSize:24,fontWeight:600,margin:0},children:e.name}),e.description&&(0,H.jsx)(h,{type:`secondary`,children:e.description}),(0,H.jsx)(`span`,{className:Ke.meta,children:t(`experiment.detail.lastAccessed`,{time:new Date(e.accessedAt).toLocaleString()})})]}),(0,H.jsxs)(l,{horizontal:!0,gap:8,children:[(0,H.jsx)(u,{icon:ce,onClick:()=>P({experiment:e}),children:t(`common.edit`)}),(0,H.jsx)(xe,{items:o,trigger:[`click`],children:(0,H.jsx)(u,{icon:le})})]})]})})})),Ye,U,W,G,Xe,Ze=e((()=>{S(),g(),m(),T(),Ye=t(o()),i(),U=t(s()),W={statDivider:C(`acss-4j3ut9`,[`.acss-4j3ut9{width:1px;height:28px;background:var(--ant-color-border-secondary);}`],`
    width: 1px;
    height: 28px;
    background: var(--ant-color-border-secondary);
  `),statValue:C(`acss-jsskff`,[`.acss-jsskff{font-family:var(--ant-font-family-code);font-weight:600;color:var(--ant-color-text);}`],`
    font-family: var(--ant-font-family-code);
    font-weight: 600;
    color: var(--ant-color-text);
  `)},G=(0,Ye.memo)(({value:e,label:t})=>(0,U.jsxs)(l,{gap:2,children:[(0,U.jsx)(h,{className:W.statValue,fontSize:20,children:e}),(0,U.jsx)(h,{color:w.colorTextTertiary,fontSize:12,children:t})]})),Xe=(0,Ye.memo)(({experiment:e,datasetCount:t})=>{let{t:r}=n(`eval`);return(0,U.jsxs)(l,{horizontal:!0,align:`center`,gap:24,children:[(0,U.jsx)(G,{label:r(`experiment.detail.stats.benchmarks`),value:e.benchmarks.length}),(0,U.jsx)(`span`,{className:W.statDivider}),(0,U.jsx)(G,{label:r(`sidebar.datasets`),value:t}),(0,U.jsx)(`span`,{className:W.statDivider}),(0,U.jsx)(G,{label:r(`experiment.detail.stats.runs`),value:e.runs.length})]})})})),Qe,K,$e,et,tt=e((()=>{S(),g(),c(),m(),T(),x(),Qe=t(o()),O(),Le(),Me(),K=t(s()),$e={passRate:C(`acss-jsskff`,[`.acss-jsskff{font-family:var(--ant-font-family-code);font-weight:600;color:var(--ant-color-text);}`],`
    font-family: var(--ant-font-family-code);
    font-weight: 600;
    color: var(--ant-color-text);
  `),row:C(`acss-19vfdrv`,[`.acss-19vfdrv{padding-block:10px;padding-inline:4px;border-radius:var(--ant-border-radius);transition:background 0.15s ease;}`,`.acss-19vfdrv:hover{background:var(--ant-color-fill-quaternary);}`,`@media (prefers-reduced-motion: reduce){.acss-19vfdrv{transition:none;}}`],`
    padding-block: 10px;
    padding-inline: 4px;
    border-radius: var(--ant-border-radius);
    transition: background 0.15s ease;

    &:hover {
      background: var(--ant-color-fill-quaternary);
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `)},et=(0,Qe.memo)(({run:e,benchmarkId:t})=>{let n=e.passCount??e.metrics?.passedCases??0,r=e.failCount??e.metrics?.failedCases??0,i=e.errorCount??e.metrics?.errorCases??0,a=e.passRate??e.metrics?.passRate;return(0,K.jsxs)(l,{horizontal:!0,align:`center`,className:$e.row,gap:12,children:[(0,K.jsxs)(l,{flex:1,gap:4,style:{minWidth:0},children:[(0,K.jsxs)(l,{horizontal:!0,align:`center`,gap:8,children:[(0,K.jsx)(h,{ellipsis:!0,weight:500,children:e.name||e.id}),(0,K.jsx)(Pe,{status:e.status})]}),(0,K.jsxs)(l,{horizontal:!0,align:`center`,gap:8,children:[e.datasetName&&(0,K.jsx)(h,{fontSize:12,type:`secondary`,children:e.datasetName}),(0,K.jsx)(h,{fontSize:12,type:`secondary`,children:new Date(e.createdAt).toLocaleDateString()})]})]}),(0,K.jsxs)(l,{align:`flex-end`,gap:4,style:{width:140},children:[typeof a==`number`&&(0,K.jsxs)(`span`,{className:$e.passRate,children:[(a*100).toFixed(0),`%`]}),(0,K.jsx)(Re,{height:6,segments:[{color:w.colorSuccess,value:n},{color:w.colorError,value:r},{color:w.colorWarning,value:i}]})]}),(0,K.jsx)(k,{to:`/eval/bench/${t}/runs/${e.id}`,children:(0,K.jsx)(_,{icon:fe,size:`small`})})]})})})),nt,q,J,rt,it=e((()=>{S(),E(),g(),b(),x(),nt=t(o()),i(),tt(),q=t(s()),J={listCard:C(`acss-fvaj2g`,[`.acss-fvaj2g .ant-card-body{padding-block:4px;padding-inline:8px;}`],`
    .ant-card-body {
      padding-block: 4px;
      padding-inline: 8px;
    }
  `),sectionTitle:C(`acss-1qhxrhc`,[`.acss-1qhxrhc{margin:0;font-size:16px;font-weight:600;}`],`
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  `)},rt=(0,nt.memo)(({actions:e,experiment:t})=>{let{t:r}=n(`eval`),i=t.runs||[];return(0,q.jsxs)(l,{gap:12,children:[(0,q.jsx)(`h3`,{className:J.sectionTitle,children:r(`experiment.detail.runs`)}),(0,q.jsx)(v,{className:J.listCard,children:i.length===0?(0,q.jsx)(D,{description:r(`run.empty.title`),icon:me}):(0,q.jsx)(l,{gap:0,children:i.map(t=>(0,q.jsx)(et,{benchmarkId:e.resolveRunBenchmarkId(t),run:t},t.id))})})]})})})),at,Y,ot,st,ct=e((()=>{S(),E(),g(),b(),x(),at=t(o()),i(),He(),Y=t(s()),ot={listCard:C(`acss-fvaj2g`,[`.acss-fvaj2g .ant-card-body{padding-block:4px;padding-inline:8px;}`],`
    .ant-card-body {
      padding-block: 4px;
      padding-inline: 8px;
    }
  `),sectionTitle:C(`acss-1qhxrhc`,[`.acss-1qhxrhc{margin:0;font-size:16px;font-weight:600;}`],`
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  `)},st=(0,at.memo)(({actions:e})=>{let{t}=n(`eval`),{scopedDatasets:r}=e;return(0,Y.jsxs)(l,{gap:12,children:[(0,Y.jsx)(`h3`,{className:ot.sectionTitle,children:t(`experiment.detail.datasetsScoped`)}),(0,Y.jsx)(v,{className:ot.listCard,children:r.length===0?(0,Y.jsx)(D,{description:t(`experiment.detail.datasetsScopedEmpty`),icon:ue}):(0,Y.jsx)(l,{gap:0,children:r.map(t=>(0,Y.jsx)(R,{dataset:t,onAddRun:e.addRun},t.id))})})]})})})),X,lt,ut=e((()=>{X=t(o()),Fe(),lt=e=>{let t=e?.id,n=(0,X.useMemo)(()=>(e?.datasets||[]).filter(e=>e.sourceExperimentId!==t),[e,t]),r=(0,X.useMemo)(()=>(e?.datasets||[]).filter(e=>e.sourceExperimentId===t),[e,t]),i=(0,X.useMemo)(()=>new Map((e?.datasets||[]).map(e=>[e.id,e.benchmarkId])),[e]);return{addRun:e=>{t&&Ie({benchmarkId:e.benchmarkId,datasetId:e.id,datasetName:e.name,experimentId:t})},baselineDatasets:n,resolveRunBenchmarkId:t=>i.get(t.datasetId)||e?.benchmarks[0]?.id||``,scopedDatasets:r}}})),dt,Z,ft,pt,mt=e((()=>{S(),g(),dt=t(o()),ee(),Te(),ge(),j(),We(),Je(),Ze(),it(),ct(),ut(),Z=t(s()),ft={container:C(`acss-stnsjh`,[`.acss-stnsjh{overflow-y:auto;padding-block:24px;padding-inline:32px;}`],`
    overflow-y: auto;
    padding-block: 24px;
    padding-inline: 32px;
  `)},pt=(0,dt.memo)(()=>{let{experimentId:e}=te(),t=A(e=>e.useFetchExperimentDetail),n=A(Ae.getExperimentDetailById(e||``)),{error:r,isLoading:i,mutate:a}=t(e),o=lt(n);return n?(0,Z.jsxs)(l,{className:ft.container,gap:24,height:`100%`,width:`100%`,children:[(0,Z.jsx)(qe,{experiment:n}),(0,Z.jsx)(Xe,{datasetCount:n.datasets.length,experiment:n}),(0,Z.jsx)(Ue,{actions:o,experiment:n}),(0,Z.jsx)(st,{actions:o}),(0,Z.jsx)(rt,{actions:o,experiment:n})]}):i||!r?(0,Z.jsx)(ye,{}):(0,Z.jsx)(Ee,{error:r,variant:`page`,onRetry:()=>void a()})})})),ht,Q,$,gt,_t=e((()=>{S(),g(),re(),m(),T(),x(),ht=t(o()),i(),O(),tt(),Q=t(s()),$={card:C(`acss-11sa9jj`,[`.acss-11sa9jj{height:100%;padding:20px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);background:var(--ant-color-bg-container);transition:border-color 0.15s ease;}`,`.acss-11sa9jj:hover{border-color:var(--ant-color-border);}`,`@media (prefers-reduced-motion: reduce){.acss-11sa9jj{transition:none;}}`],`
    height: 100%;
    padding: 20px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);

    background: var(--ant-color-bg-container);

    transition: border-color 0.15s ease;

    &:hover {
      border-color: var(--ant-color-border);
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `),detailLink:C(`acss-9x74i`,[`.acss-9x74i{display:flex;flex:none;align-items:center;justify-content:center;width:28px;height:28px;border-radius:var(--ant-border-radius-sm);color:var(--ant-color-text-tertiary);}`,`.acss-9x74i:hover{color:var(--ant-color-text);background:var(--ant-color-fill-tertiary);}`],`
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;
    border-radius: var(--ant-border-radius-sm);

    color: var(--ant-color-text-tertiary);

    &:hover {
      color: var(--ant-color-text);
      background: var(--ant-color-fill-tertiary);
    }
  `),iconBox:C(`acss-1d9lmnh`,[`.acss-1d9lmnh{display:flex;flex-shrink:0;align-items:center;justify-content:center;width:40px;height:40px;border-radius:var(--ant-border-radius);color:var(--ant-color-info);background:var(--ant-color-info-bg);}`],`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    border-radius: var(--ant-border-radius);

    color: var(--ant-color-info);

    background: var(--ant-color-info-bg);
  `),name:C(`acss-12sbxve`,[`.acss-12sbxve{font-size:var(--ant-font-size-lg);font-weight:600;color:var(--ant-color-text);}`,`.acss-12sbxve:hover{color:var(--ant-color-primary);}`],`
    font-size: var(--ant-font-size-lg);
    font-weight: 600;
    color: var(--ant-color-text);

    &:hover {
      color: var(--ant-color-primary);
    }
  `)},gt=(0,ht.memo)(({experiment:e})=>{let{t}=n(`eval`),r=e.recentRuns?.slice(0,3)||[],i=e.benchmarks[0]?.id||``;return(0,Q.jsxs)(l,{className:$.card,gap:16,children:[(0,Q.jsxs)(l,{horizontal:!0,align:`flex-start`,gap:12,justify:`space-between`,children:[(0,Q.jsxs)(l,{horizontal:!0,align:`center`,gap:12,style:{minWidth:0},children:[(0,Q.jsx)(`div`,{className:$.iconBox,children:(0,Q.jsx)(f,{icon:se,size:22})}),(0,Q.jsxs)(l,{gap:2,style:{minWidth:0},children:[(0,Q.jsx)(k,{className:$.name,to:`/eval/experiments/${e.id}`,children:e.name}),(0,Q.jsxs)(h,{color:w.colorTextTertiary,fontSize:12,children:[t(`experiment.card.benchmarkCount`,{count:e.benchmarkCount}),` · `,t(`experiment.card.runCount`,{count:e.runCount})]})]})]}),(0,Q.jsx)(k,{className:$.detailLink,to:`/eval/experiments/${e.id}`,children:(0,Q.jsx)(f,{icon:he,size:16})})]}),r.length>0&&(0,Q.jsx)(l,{gap:0,children:r.map(e=>(0,Q.jsx)(et,{benchmarkId:e.benchmarkId||i,run:e},e.id))})]})})})),vt=e((()=>{F(),mt(),_t()}));export{mt as a,pt as i,gt as n,P as o,_t as r,F as s,vt as t};