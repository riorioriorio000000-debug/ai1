import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,V as r,j as i,z as a}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as o,T as s}from"../vendor/vendor-react-B9HSWrpN.js";import{B as c,Kt as l,Mt as u,Nt as d,S as f,Yn as p,at as m,h,i as g,it as ee,qt as _,r as te,v,z as ne}from"../vendor/vendor-ui-core-BmtybT1r.js";import{X as y,et as b,gt as x,ot as S,r as C}from"../vendor/vendor-antd-BWSxhuJE.js";import{Qn as re,cg as w,t as T}from"../vendor/vendor-icons-vienkZi5.js";import{Nn as E,c as D,dn as ie,j as ae}from"./app-const-BpgKVRXh.js";import{Af as oe,Al as O,FD as k,Ff as A,ID as j,If as se,MA as M,Xf as N,Zf as P,cD as ce,hF as le,jf as F,kl as ue,sD as de,uF as fe}from"./index-w64_zsxD.js";import{n as I,t as L}from"./DropdownMenu-1ae8j9bI.js";import{t as R}from"./_virtual_lobe-ui-named_base-ui_useModalContext-CvZy-G5G.js";import{n as z,t as B}from"./Select-C0UJO2yB.js";import{n as pe,t as me}from"./useWorkspaceAwareNavigate-BbajQ7ta.js";import{r as V,t as he}from"./eval-DXsdohMt.js";var H,U,W,G,K,q,J,ge=e((()=>{k(),D(),_(),ce(),c(),g(),z(),m(),M(),R(),C(),fe(),T(),H=t(o()),i(),A(),me(),F(),O(),he(),U=t(s()),W=100,G=30,K=240,q={agentSelect:j(`acss-be4csm`,[`.acss-be4csm .ant-select-content-value{height:22px!important;}`],`
    .ant-select-content-value {
      height: 22px !important;
    }
  `),hint:j(`acss-8gvkkg`,[`.acss-8gvkkg{display:inline-block;margin-block-start:4px;font-size:var(--ant-font-size-sm);color:var(--ant-color-text-quaternary);}`],`
    display: inline-block;
    margin-block-start: 4px;
    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-quaternary);
  `),timestampLink:j(`acss-7gl8t4`,[`.acss-7gl8t4{cursor:pointer;display:inline-block;margin-block-start:4px;font-size:var(--ant-font-size-sm);transition:color 0.15s ease;}`,`.acss-7gl8t4:hover{color:var(--ant-color-text);}`,`@media (prefers-reduced-motion: reduce){.acss-7gl8t4{transition:none;}}`],`
    cursor: pointer;

    display: inline-block;

    margin-block-start: 4px;

    font-size: var(--ant-font-size-sm);

    transition: color 0.15s ease;

    &:hover {
      color: var(--ant-color-text);
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `)},J=({benchmarkId:e,datasetId:t,datasetName:r,experimentId:i,onLoadingChange:a,onSubmitReady:o})=>{let{t:s}=n(`eval`),{t:c}=n(`chat`),{close:u}=v(),d=pe(),f=se(),m=V(e=>e.createRun),h=V(e=>e.startRun),g=V(e=>e.datasetList),[_]=b.useForm(),C=b.useWatch(`k`,_)??1,w=!!t&&!!r,[T,D]=(0,H.useState)([]),[O,k]=(0,H.useState)(!1);(0,H.useEffect)(()=>{k(!0),ue.queryAgents().then(e=>D(e)).finally(()=>k(!1))},[]),(0,H.useEffect)(()=>{t&&!w&&_.setFieldsValue({datasetId:t})},[t,w,_]);let A=(0,H.useMemo)(()=>({avatar:ie,id:ae,title:c(`inbox.title`)}),[c]),j=(0,H.useMemo)(()=>[A,...T],[A,T]),M=(0,H.useMemo)(()=>j.map(e=>({label:(0,U.jsxs)(`span`,{style:{alignItems:`center`,display:`inline-flex`,gap:8},children:[(0,U.jsx)(te,{avatar:e.avatar||void 0,background:e.backgroundColor||void 0,size:20,title:e.title||``}),(0,U.jsx)(`span`,{children:e.title})]}),title:e.title||``,value:e.id})),[j]),N=(0,H.useCallback)((e,t)=>{t.stopPropagation(),t.preventDefault(),window.open(oe(E(e),f),`agent_${e}`,`noopener,noreferrer`)},[f]),P=(0,H.useCallback)(async n=>{let r;try{r=await _.validateFields()}catch{return}a?.(!0);try{let a=r.maxSteps??W,o=r.timeoutMinutes??G,c=await m({config:{k:r.k??1,maxSteps:a,timeout:o*6e4},datasetId:w?t:r.datasetId,experimentId:i,name:r.name,targetAgentId:r.targetAgentId});if(c?.id){try{n&&await h(c.id)}catch{p.error(s(`run.error.start`))}d(`/eval/bench/${e}/runs/${c.id}`)}u()}catch(e){p.error(e instanceof Error&&e.message?e.message:s(`run.create.error`))}finally{a?.(!1)}},[e,u,m,t,i,_,w,d,a,h,s]);return(0,H.useEffect)(()=>{o(P)},[o,P]),(0,U.jsxs)(b,{form:_,layout:`vertical`,children:[(0,U.jsx)(b.Item,{label:s(`run.create.name`),name:`name`,rules:[{message:s(`run.create.name.required`),required:!0}],extra:(0,U.jsx)(ee,{className:q.timestampLink,type:`secondary`,onClick:()=>{let e=new Date,t=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)} ${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}`;_.setFieldsValue({name:t})},children:s(`run.create.name.useTimestamp`)}),children:(0,U.jsx)(y,{placeholder:s(`run.create.name.placeholder`),variant:`filled`})}),(0,U.jsx)(b.Item,{label:s(`run.create.agent`),name:`targetAgentId`,rules:[{message:s(`run.create.agent.required`),required:!0}],children:(0,U.jsx)(B,{allowClear:!0,showSearch:!0,className:q.agentSelect,loading:O,options:M,placeholder:s(`run.create.agent.placeholder`),variant:`filled`,optionRender:e=>(0,U.jsxs)(`span`,{style:{alignItems:`center`,display:`flex`,gap:8,justifyContent:`space-between`},children:[e.label,(0,U.jsx)(ne,{icon:re,size:`small`,onClick:t=>N(e.value,t)})]})})}),!w&&(0,U.jsx)(b.Item,{label:s(`run.create.dataset`),name:`datasetId`,rules:[{message:s(`run.create.dataset.required`),required:!0}],children:(0,U.jsx)(B,{placeholder:s(`run.create.dataset.placeholder`),variant:`filled`,options:g.map(e=>({label:(0,U.jsxs)(S,{children:[(0,U.jsx)(`span`,{children:e.name}),e.testCaseCount!==void 0&&(0,U.jsx)(`span`,{style:{color:le.colorTextQuaternary,fontSize:12},children:s(`run.create.caseCount`,{count:e.testCaseCount})})]}),value:e.id}))})}),(0,U.jsx)(de,{keepMounted:!0,defaultValue:[],indicatorPlacement:`inline`,styles:{header:{paddingBlock:8,paddingInline:4}},items:[{children:(0,U.jsxs)(l,{gap:16,style:{paddingTop:8},children:[(0,U.jsx)(b.Item,{initialValue:1,label:s(`run.config.k`),name:`k`,style:{marginBottom:0},extra:(0,U.jsx)(`span`,{className:q.hint,children:s(`run.config.k.hint`,{k:C})}),children:(0,U.jsx)(x,{max:10,min:1,step:1,style:{width:`100%`},variant:`filled`})}),(0,U.jsx)(b.Item,{extra:(0,U.jsx)(`span`,{className:q.hint,children:s(`run.config.maxSteps.hint`)}),initialValue:W,label:s(`run.config.maxSteps`),name:`maxSteps`,style:{marginBottom:0},children:(0,U.jsx)(x,{max:1e3,min:1,step:10,style:{width:`100%`},variant:`filled`})}),(0,U.jsx)(b.Item,{initialValue:G,label:s(`run.config.timeout`),name:`timeoutMinutes`,style:{marginBottom:0},children:(0,U.jsx)(x,{max:K,min:1,style:{width:`100%`},suffix:s(`run.config.timeout.unit`),variant:`filled`})})]}),key:`advanced`,title:s(`run.create.advanced`)}]})]})}})),Y,X,Z,_e=e((()=>{k(),I(),_(),d(),N(),R(),T(),i(),Y=t(s()),X={splitButton:j(`acss-cvztdr`,[`.acss-cvztdr>button+button{margin-inline-start:-1px;}`,`.acss-cvztdr>button:first-child{border-start-end-radius:0;border-end-end-radius:0;}`,`.acss-cvztdr>button:last-child{border-start-start-radius:0;border-end-start-radius:0;}`],`
    & > button + button {
      margin-inline-start: -1px;
    }

    & > button:first-child {
      border-start-end-radius: 0;
      border-end-end-radius: 0;
    }

    & > button:last-child {
      border-start-start-radius: 0;
      border-end-start-radius: 0;
    }
  `)},Z=({loading:e,onCreateAndStart:t,onCreateOnly:r})=>{let{t:i}=n(`eval`),{close:a}=v(),o=[{key:`createAndStart`,label:i(`run.create.confirm`),onClick:t}];return(0,Y.jsxs)(f,{children:[(0,Y.jsx)(u,{disabled:e,onClick:a,children:i(`common.cancel`)}),(0,Y.jsxs)(l,{horizontal:!0,className:X.splitButton,children:[(0,Y.jsx)(u,{loading:e,type:`primary`,onClick:r,children:i(`run.create.createOnly`)}),(0,Y.jsx)(L,{items:o,children:(0,Y.jsx)(u,{icon:(0,Y.jsx)(w,{size:14}),loading:e,type:`primary`})})]})]})}})),Q,$,ve=e((()=>{P(),a(),ge(),_e(),Q=t(s()),$=e=>{let t={},n=async()=>{},i=!1,a=()=>(0,Q.jsx)(Z,{loading:i,onCreateAndStart:()=>n(!0),onCreateOnly:()=>n(!1)}),o=e=>{i=e,t.instance?.update({footer:a()})};return t.instance=h({content:(0,Q.jsx)(J,{...e,onLoadingChange:o,onSubmitReady:e=>{n=e}}),footer:a(),title:e.datasetId&&e.datasetName?r(`run.create.titleWithDataset`,{dataset:e.datasetName,ns:`eval`}):r(`run.create.title`,{ns:`eval`}),width:520}),t.instance}}));export{ve as n,$ as t};