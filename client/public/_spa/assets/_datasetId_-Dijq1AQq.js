import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,V as r,j as i,z as a}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as o,T as s,i as c,v as ee}from"../vendor/vendor-react-B9HSWrpN.js";import{B as te,Kt as l,Mt as u,Nt as d,S as f,Yn as p,at as m,it as h,m as g,qt as _,v,z as y}from"../vendor/vendor-ui-core-BmtybT1r.js";import{et as b,r as x}from"../vendor/vendor-antd-BWSxhuJE.js";import{Av as ne,Ma as re,Xp as ie,c as S,mt as ae,t as C,ua as oe}from"../vendor/vendor-icons-vienkZi5.js";import{Ct as se,FD as w,ID as T,MA as E,Xf as D,cD as O,hF as k,sD as A,uF as ce,xt as le}from"./index-w64_zsxD.js";import{n as j,t as M}from"./CopyButton-BjxUZD85.js";import{n as ue,t as N}from"./TextArea-D_Rfq5JU.js";import{n as de,t as P}from"./Input-gdUxluEJ.js";import{t as F}from"./_virtual_lobe-ui-named_base-ui_useModalContext-CvZy-G5G.js";import{n as fe,t as I}from"./Select-C0UJO2yB.js";import{n as pe,t as me}from"./useWorkspaceAwareNavigate-BbajQ7ta.js";import{t as he}from"./_virtual_lobe-ui-named_base-ui_confirmModal-B6WREEdZ.js";import{n as L,t as R}from"./agentEval-DqhUvTHo.js";import{n as ge,t as _e}from"./WorkspaceLink-CS4ZDv1a.js";import{n as ve,t as ye}from"./AsyncBoundary-K-esguw4.js";import{a as be,r as z,t as xe}from"./eval-DXsdohMt.js";import{i as Se,r as Ce}from"./StatusBadge-DcsxSiG-.js";import{a as we,c as Te,d as Ee,f as De,i as Oe,l as ke,n as Ae,o as je,r as Me,s as Ne,t as Pe,u as Fe}from"./RunCard-C7412K8u.js";import{n as Ie,t as B}from"./RunCreateModal-DKmnjAkz.js";import{n as Le,t as Re}from"./SegmentBar-DmHTelyR.js";var V,H,U,W,ze=e((()=>{w(),j(),_(),te(),C(),V=t(o()),i(),H=t(s()),U={container:T(`acss-gopjoh`,[`.acss-gopjoh{flex-shrink:0;width:360px;border-inline-start:1px solid var(--ant-color-border-secondary);}`],`
    flex-shrink: 0;
    width: 360px;
    border-inline-start: 1px solid var(--ant-color-border-secondary);
  `),content:T(`acss-1v7eaxi`,[`.acss-1v7eaxi{overflow-y:auto;flex:1;padding:16px;}`],`
    overflow-y: auto;
    flex: 1;
    padding: 16px;
  `),fieldLabel:T(`acss-1azaxe0`,[`.acss-1azaxe0{margin:0;font-size:var(--ant-font-size-sm);font-weight:600;color:var(--ant-color-text-tertiary);text-transform:uppercase;letter-spacing:0.02em;}`],`
    margin: 0;

    font-size: var(--ant-font-size-sm);
    font-weight: 600;
    color: var(--ant-color-text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.02em;
  `),fieldValue:T(`acss-lbultb`,[`.acss-lbultb{padding-block:8px;padding-inline:12px;border-radius:var(--ant-border-radius);font-size:var(--ant-font-size);line-height:1.6;color:var(--ant-color-text);word-break:break-word;white-space:pre-wrap;background:var(--ant-color-fill-quaternary);}`],`
    padding-block: 8px;
    padding-inline: 12px;
    border-radius: var(--ant-border-radius);

    font-size: var(--ant-font-size);
    line-height: 1.6;
    color: var(--ant-color-text);
    word-break: break-word;
    white-space: pre-wrap;

    background: var(--ant-color-fill-quaternary);
  `),header:T(`acss-1mtxbfh`,[`.acss-1mtxbfh{display:flex;align-items:center;justify-content:space-between;padding-block:12px;padding-inline:16px;border-block-end:1px solid var(--ant-color-border-secondary);}`],`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-block: 12px;
    padding-inline: 16px;
    border-block-end: 1px solid var(--ant-color-border-secondary);
  `),title:T(`acss-bz5yl9`,[`.acss-bz5yl9{margin:0;font-size:var(--ant-font-size);font-weight:500;color:var(--ant-color-text);}`],`
    margin: 0;
    font-size: var(--ant-font-size);
    font-weight: 500;
    color: var(--ant-color-text);
  `)},W=(0,V.memo)(({testCase:e,onClose:t})=>{let{t:r}=n(`eval`);return(0,H.jsxs)(l,{className:U.container,height:`100%`,children:[(0,H.jsxs)(`div`,{className:U.header,children:[(0,H.jsx)(`p`,{className:U.title,children:r(`testCase.preview.title`)}),(0,H.jsx)(y,{icon:S,size:`small`,onClick:t})]}),(0,H.jsx)(`div`,{className:U.content,children:(0,H.jsxs)(l,{gap:16,children:[(0,H.jsxs)(l,{gap:4,children:[(0,H.jsxs)(l,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,H.jsx)(`p`,{className:U.fieldLabel,children:r(`testCase.preview.input`)}),e.content?.input&&(0,H.jsx)(M,{content:e.content.input,size:`small`})]}),(0,H.jsx)(`div`,{className:U.fieldValue,children:e.content?.input})]}),e.content?.expected&&(0,H.jsxs)(l,{gap:4,children:[(0,H.jsxs)(l,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,H.jsx)(`p`,{className:U.fieldLabel,children:r(`testCase.preview.expected`)}),(0,H.jsx)(M,{content:e.content.expected,size:`small`})]}),(0,H.jsx)(`div`,{className:U.fieldValue,children:e.content.expected})]}),e.content?.category&&(0,H.jsxs)(l,{gap:4,children:[(0,H.jsx)(`p`,{className:U.fieldLabel,children:r(`table.columns.category`)}),(0,H.jsx)(`div`,{className:U.fieldValue,children:e.content.category})]})]})})]})})})),G,K,q,J,Be=e((()=>{w(),_(),de(),ue(),O(),fe(),m(),E(),F(),x(),G=t(o()),i(),L(),K=t(s()),q={sectionLabel:T(`acss-1h2e50c`,[`.acss-1h2e50c{margin-block-end:12px;font-size:var(--ant-font-size-sm);font-weight:500;color:var(--ant-color-text-secondary);}`],`
    margin-block-end: 12px;
    font-size: var(--ant-font-size-sm);
    font-weight: 500;
    color: var(--ant-color-text-secondary);
  `)},J=({formId:e,onLoadingChange:t,onSuccess:r,testCase:i})=>{let{t:a}=n(`eval`),{close:o}=v(),[s]=b.useForm(),c=b.useWatch(`evalMode`,s);return(0,G.useEffect)(()=>{i&&s.setFieldsValue({category:i.content?.category,difficulty:i.metadata?.difficulty,evalConfig:i.evalConfig,evalMode:i.evalMode||void 0,expected:i.content?.expected,input:i.content?.input,tags:i.metadata?.tags?.join(`, `)})},[i,s]),(0,K.jsxs)(b,{form:s,layout:`vertical`,name:e,onFinish:async e=>{t?.(!0);try{let t=e.tags?e.tags.split(`,`).map(e=>e.trim()).filter(Boolean):void 0;await R.updateTestCase({content:{category:e.category||void 0,expected:e.expected,input:e.input},evalConfig:e.evalConfig?.judgePrompt?e.evalConfig:null,evalMode:e.evalMode||null,id:i.id,metadata:{...e.difficulty?{difficulty:e.difficulty}:{},...t?{tags:t}:{}}}),await r?.(i.datasetId),p.success(a(`testCase.edit.success`)),o()}catch{p.error(a(`testCase.edit.error`))}finally{t?.(!1)}},children:[(0,K.jsx)(`div`,{className:q.sectionLabel,children:a(`caseDetail.section.testCase`)}),(0,K.jsx)(b.Item,{label:a(`testCase.create.input.label`),name:`input`,rules:[{required:!0}],children:(0,K.jsx)(N,{autoSize:{maxRows:6,minRows:3},placeholder:a(`testCase.create.input.placeholder`)})}),(0,K.jsx)(b.Item,{label:a(`testCase.create.expected.label`),name:`expected`,rules:[{message:a(`testCase.create.expected.required`),required:!0}],children:(0,K.jsx)(N,{autoSize:{maxRows:6,minRows:2},placeholder:a(`testCase.create.expected.placeholder`)})}),(0,K.jsx)(`div`,{className:q.sectionLabel,style:{marginBlockStart:4},children:a(`caseDetail.section.scoring`)}),(0,K.jsx)(b.Item,{label:a(`evalMode.label`),name:`evalMode`,children:(0,K.jsx)(I,{allowClear:!0,placeholder:a(`evalMode.placeholder`),optionRender:e=>(0,K.jsxs)(l,{gap:4,style:{paddingBlock:4},children:[(0,K.jsx)(`div`,{children:e.label}),(0,K.jsx)(h,{fontSize:12,type:`secondary`,children:a(`evalMode.${e.value}.desc`)})]}),options:[{label:a(`evalMode.equals`),value:`equals`},{label:a(`evalMode.contains`),value:`contains`},{label:a(`evalMode.llm-rubric`),value:`llm-rubric`}]})}),c===`llm-rubric`&&(0,K.jsx)(b.Item,{label:a(`evalMode.prompt.label`),name:[`evalConfig`,`judgePrompt`],children:(0,K.jsx)(N,{autoSize:{maxRows:8,minRows:3},placeholder:a(`evalMode.prompt.placeholder`)})}),(0,K.jsx)(A,{keepMounted:!0,indicatorPlacement:`inline`,styles:{header:{paddingBlock:8,paddingInline:4}},items:[{children:(0,K.jsxs)(l,{gap:16,style:{paddingBlockStart:8},children:[(0,K.jsx)(b.Item,{label:a(`table.columns.category`),name:`category`,style:{marginBottom:0},children:(0,K.jsx)(P,{placeholder:a(`dataset.import.categoryDesc`)})}),(0,K.jsx)(b.Item,{label:a(`testCase.create.difficulty.label`),name:`difficulty`,style:{marginBottom:0},children:(0,K.jsx)(I,{allowClear:!0,placeholder:a(`testCase.create.difficulty.label`),options:[{label:a(`difficulty.easy`),value:`easy`},{label:a(`difficulty.medium`),value:`medium`},{label:a(`difficulty.hard`),value:`hard`}]})}),(0,K.jsx)(b.Item,{label:a(`testCase.create.tags.label`),name:`tags`,style:{marginBottom:0},children:(0,K.jsx)(P,{placeholder:a(`testCase.create.tags.placeholder`)})})]}),key:`advanced`,title:a(`testCase.create.advanced`)}]})]})}})),Y,Ve,He=e((()=>{d(),D(),F(),i(),Y=t(s()),Ve=({formId:e,loading:t})=>{let{t:r}=n(`eval`),{close:i}=v();return(0,Y.jsxs)(f,{children:[(0,Y.jsx)(u,{disabled:t,onClick:i,children:r(`common.cancel`)}),(0,Y.jsx)(u,{form:e,htmlType:`submit`,loading:t,type:`primary`,children:r(`common.update`)})]})}})),X,Ue,We=e((()=>{a(),Se(),Be(),He(),X=t(s()),Ue=e=>Ce({renderContent:({formId:t,setLoading:n})=>(0,X.jsx)(J,{...e,formId:t,onLoadingChange:n}),renderFooter:({formId:e,loading:t})=>(0,X.jsx)(Ve,{formId:e,loading:t}),title:r(`testCase.edit.title`,{ns:`eval`}),width:520})})),Z,Q,$,Ge;e((()=>{w(),_(),d(),he(),m(),E(),ce(),C(),Z=t(o()),i(),c(),ve(),se(),me(),ge(),L(),xe(),ze(),je(),Ie(),Oe(),Ae(),De(),Fe(),Le(),Te(),We(),Q=t(s()),$={backLink:T(`acss-553fm2`,[`.acss-553fm2{display:inline-flex;gap:4px;align-items:center;width:fit-content;font-size:var(--ant-font-size);color:var(--ant-color-text-tertiary);text-decoration:none;transition:color 0.15s ease;}`,`.acss-553fm2:hover{color:var(--ant-color-text);}`,`.acss-553fm2:focus-visible{outline:2px solid var(--ant-color-primary);outline-offset:2px;}`,`@media (prefers-reduced-motion: reduce){.acss-553fm2{transition:none;}}`],`
    display: inline-flex;
    gap: 4px;
    align-items: center;

    width: fit-content;

    font-size: var(--ant-font-size);
    color: var(--ant-color-text-tertiary);
    text-decoration: none;

    transition: color 0.15s ease;

    &:hover {
      color: var(--ant-color-text);
    }

    &:focus-visible {
      outline: 2px solid var(--ant-color-primary);
      outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `),header:T(`acss-jpmhhg`,[`.acss-jpmhhg{display:flex;flex-shrink:0;align-items:center;justify-content:center;width:40px;height:40px;border-radius:var(--ant-border-radius-lg);background:var(--ant-color-primary-bg);}`],`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    border-radius: var(--ant-border-radius-lg);

    background: var(--ant-color-primary-bg);
  `),heroBand:T(`acss-pseg9g`,[`.acss-pseg9g{padding:20px;border-radius:var(--ant-border-radius-lg);background:var(--ant-color-fill-quaternary);}`],`
    padding: 20px;
    border-radius: var(--ant-border-radius-lg);
    background: var(--ant-color-fill-quaternary);
  `),heroValue:T(`acss-1w2ej0p`,[`.acss-1w2ej0p{font-family:var(--ant-font-family-code);font-size:var(--ant-font-size-heading-2);font-weight:600;line-height:1;color:var(--ant-color-text);}`],`
    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size-heading-2);
    font-weight: 600;
    line-height: 1;
    color: var(--ant-color-text);
  `),summaryDot:T(`acss-1tven3e`,[`.acss-1tven3e{width:8px;height:8px;border-radius:999px;}`],`
    width: 8px;
    height: 8px;
    border-radius: 999px;
  `),tableWrapper:T(`acss-r95bbe`,[`.acss-r95bbe{overflow:hidden;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius);}`],`
    overflow: hidden;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius);
  `)},Ge=(0,Z.memo)(()=>{let{t:e}=n(`eval`),{datasetId:t}=ee(),r=pe(),[i,a]=(0,Z.useState)({current:1,pageSize:10}),[o,s]=(0,Z.useState)(``),[c,te]=(0,Z.useState)(`all`),[d,f]=(0,Z.useState)(null),m=z(e=>e.useFetchDatasetDetail),_=z(e=>e.useFetchTestCases),v=z(e=>e.useFetchDatasetRuns),y=z(be.datasetRunList(t)),b=z(e=>e.refreshTestCases),x=z(e=>e.refreshDatasetDetail),{data:S,error:C,isLoading:se,mutate:w}=m(t),T=S?.benchmarkId??null;v(t);let E=(0,Z.useMemo)(()=>[...y].sort((e,t)=>new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()),[y]),{data:D}=_({datasetId:t,limit:i.pageSize,offset:(i.current-1)*i.pageSize}),O=D?.data||[],A=D?.total||0,ce=O.filter(e=>!(c!==`all`&&e.metadata?.difficulty!==c||o&&!e.content?.input?.toLowerCase().includes(o.toLowerCase()))),j=(0,Z.useMemo)(()=>{let e={easy:0,hard:0,medium:0};for(let t of O){let n=t?.metadata?.difficulty;(n===`easy`||n===`medium`||n===`hard`)&&(e[n]+=1)}return{counts:e,segments:[{color:k.colorSuccess,value:e.easy},{color:k.colorWarning,value:e.medium},{color:k.colorError,value:e.hard}],tagged:e.easy+e.medium+e.hard}},[O]),M=(0,Z.useCallback)(async()=>{t&&(await b(t),await x(t))},[t,b,x]),ue=(0,Z.useCallback)(t=>{g({content:e(`testCase.delete.confirm`),okButtonProps:{danger:!0},okText:e(`common.delete`),onOk:async()=>{try{await R.deleteTestCase(t.id),p.success(e(`testCase.delete.success`)),await M()}catch{p.error(e(`testCase.delete.error`))}},title:e(`common.delete`)})},[M,e]),N=(0,Z.useCallback)(()=>{g({content:e(`dataset.delete.confirm`),okButtonProps:{danger:!0},okText:e(`common.delete`),onOk:async()=>{try{await R.deleteDataset(t),p.success(e(`dataset.delete.success`)),r(T?`/eval/bench/${T}`:`/eval`)}catch{p.error(e(`dataset.delete.error`))}},title:e(`common.delete`)})},[T,t,r,e]);return(0,Q.jsx)(ye,{data:S,error:C,errorVariant:`page`,isEmpty:!S,isLoading:se,loading:(0,Q.jsx)(le,{}),onRetry:()=>w(),children:S&&(0,Q.jsxs)(l,{horizontal:!0,style:{flex:1,minHeight:0},children:[(0,Q.jsxs)(l,{flex:1,gap:24,style:{minWidth:0,overflow:`auto`,paddingBlock:24,paddingInline:32},children:[(0,Q.jsxs)(_e,{className:$.backLink,to:T?`/eval/bench/${T}`:`/eval`,children:[(0,Q.jsx)(ne,{size:16}),e(T?`dataset.detail.backToBenchmark`:`dataset.detail.backToEval`)]}),(0,Q.jsxs)(l,{horizontal:!0,align:`start`,justify:`space-between`,children:[(0,Q.jsxs)(l,{horizontal:!0,align:`start`,gap:12,children:[(0,Q.jsx)(`div`,{className:$.header,children:(0,Q.jsx)(ie,{size:20,style:{color:k.colorPrimary}})}),(0,Q.jsxs)(l,{gap:4,children:[(0,Q.jsx)(h,{as:`h4`,style:{fontSize:20,fontWeight:600,margin:0},children:S.name}),S.description&&(0,Q.jsx)(h,{type:`secondary`,children:S.description})]})]}),(0,Q.jsxs)(l,{horizontal:!0,gap:8,children:[(0,Q.jsx)(u,{icon:re,size:`small`,onClick:()=>Ee({dataset:S,onSuccess:M}),children:e(`common.edit`)}),(0,Q.jsx)(u,{danger:!0,icon:ae,size:`small`,onClick:N,children:e(`common.delete`)})]})]}),(0,Q.jsxs)(l,{horizontal:!0,align:`center`,className:$.heroBand,gap:16,justify:`space-between`,children:[(0,Q.jsxs)(l,{gap:6,children:[(0,Q.jsx)(`span`,{className:$.heroValue,children:A}),(0,Q.jsx)(h,{color:k.colorTextTertiary,fontSize:12,children:e(`dataset.detail.testCases`)})]}),j.tagged>0&&(0,Q.jsxs)(l,{gap:8,style:{maxWidth:280,minWidth:0,width:`100%`},children:[(0,Q.jsx)(Re,{segments:j.segments}),(0,Q.jsx)(l,{horizontal:!0,gap:12,justify:`flex-end`,style:{flexWrap:`wrap`},children:[`easy`,`medium`,`hard`].map(t=>(0,Q.jsxs)(l,{horizontal:!0,align:`center`,gap:6,children:[(0,Q.jsx)(`span`,{className:$.summaryDot,style:{background:t===`easy`?k.colorSuccess:t===`medium`?k.colorWarning:k.colorError}}),(0,Q.jsxs)(h,{color:k.colorTextTertiary,fontSize:12,children:[e(`difficulty.${t}`),` `,j.counts[t]]})]},t))})]})]}),(0,Q.jsxs)(l,{gap:12,children:[(0,Q.jsxs)(l,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,Q.jsx)(h,{weight:600,children:e(`dataset.detail.testCases`)}),(0,Q.jsx)(h,{type:`secondary`,children:e(`dataset.detail.caseCount`,{count:A})})]}),(0,Q.jsx)(`div`,{className:$.tableWrapper,children:(0,Q.jsx)(we,{datasetEvalMode:S?.evalMode,diffFilter:c,pagination:i,search:o,selectedId:d?.id,testCases:ce,total:A,onDelete:ue,onOpen:e=>r(`/eval/cases/${e.id}`),onPageChange:(e,t)=>a({current:e,pageSize:t}),onPreview:f,onAddCase:()=>Ne({datasetId:t,onSuccess:M}),onDiffFilterChange:e=>{te(e),a(e=>({...e,current:1}))},onEdit:e=>Ue({onSuccess:M,testCase:e}),onImport:()=>ke({datasetId:t,onSuccess:M}),onSearchChange:e=>{s(e),a(e=>({...e,current:1}))}})})]}),T?(0,Q.jsxs)(l,{gap:12,children:[(0,Q.jsxs)(l,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,Q.jsx)(h,{weight:600,children:e(`dataset.detail.relatedRuns`,{count:E.length})}),(0,Q.jsx)(u,{icon:oe,size:`small`,onClick:()=>B({benchmarkId:T,datasetId:t,datasetName:S.name}),children:e(`dataset.detail.addRun`)})]}),E.length>0?(0,Q.jsx)(l,{gap:12,children:E.map(e=>(0,Q.jsx)(Pe,{benchmarkId:T,run:e},e.id))}):(0,Q.jsx)(Me,{onCreate:()=>B({benchmarkId:T,datasetId:t,datasetName:S.name})})]}):(0,Q.jsx)(h,{color:k.colorTextTertiary,fontSize:12,children:e(`dataset.detail.runsNeedBenchmark`)})]}),d&&(0,Q.jsx)(W,{testCase:d,onClose:()=>f(null)})]})})})}))();export{Ge as default};