import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,V as r,j as i,z as a}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as o,T as s,i as c,v as l}from"../vendor/vendor-react-B9HSWrpN.js";import{B as u,Kt as d,Mt as f,Nt as p,S as m,Xn as h,Yn as g,Zn as _,at as v,h as y,i as ee,it as te,l as b,m as ne,qt as x,r as S,u as re,v as ie,z as C}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Ht as w,It as T,N as ae,X as oe,bt as se,c as ce,h as le,r as ue}from"../vendor/vendor-antd-BWSxhuJE.js";import{Ad as de,Av as fe,Bp as pe,Ei as me,Hh as he,Hm as ge,Ma as _e,Og as ve,Qg as ye,Sn as be,Ss as xe,cg as Se,ga as Ce,gu as we,mm as Te,mt as Ee,ng as De,t as Oe,wc as ke}from"../vendor/vendor-icons-vienkZi5.js";import{Nn as Ae,c as je}from"./app-const-BpgKVRXh.js";import{t as Me}from"./Highlighter-BL3jikMb.js";import{Af as Ne,Bt as Pe,Ct as Fe,FD as E,Ff as Ie,Hd as Le,ID as D,If as Re,Ld as ze,MA as Be,Xf as Ve,Zf as He,bF as Ue,gF as O,gu as We,hF as k,jf as Ge,uF as A,xt as Ke}from"./index-w64_zsxD.js";import{t as qe}from"./copyToClipboard-BaYZN45t.js";import{n as Je,t as Ye}from"./Markdown-DWQvr47S.js";import{n as Xe,t as Ze}from"./Tag-C95BKTI7.js";import{t as Qe}from"./_virtual_lobe-ui-named__copyToClipboard-D4EOTyKX.js";import{t as $e}from"./_virtual_lobe-ui-named__Highlighter-B839w3AL.js";import{t as et}from"./_virtual_lobe-ui-named_base-ui_useModalContext-CvZy-G5G.js";import{n as tt,t as nt}from"./Select-C0UJO2yB.js";import{f as rt,o as it,t as at}from"./es-2fy596Z7.js";import{n as ot,t as st}from"./useWorkspaceAwareNavigate-BbajQ7ta.js";import{t as ct}from"./_virtual_lobe-ui-named_base-ui_confirmModal-B6WREEdZ.js";import{t as lt}from"./Skeleton-PcdZNeTb.js";import{n as ut,t as dt}from"./agentEval-DqhUvTHo.js";import{n as ft,t as pt}from"./WorkspaceLink-CS4ZDv1a.js";import{n as mt,t as ht}from"./AsyncBoundary-K-esguw4.js";import{a as gt,r as j,t as _t}from"./eval-DXsdohMt.js";import{n as vt,t as yt}from"./StatusBadge-DcsxSiG-.js";import{r as bt,t as xt}from"./utils-DH01phU5.js";import{n as St,t as Ct}from"./SegmentBar-DmHTelyR.js";import{n as wt,t as Tt}from"./RunEditModal-BIG6Rfe2.js";var M,N,Et,Dt,Ot,kt=e((()=>{E(),re(),Xe(),ue(),M=t(o()),i(),lt(),ut(),N=t(s()),Et={indexCell:D(`acss-6j350`,[`.acss-6j350{font-family:var(--ant-font-family-code);font-size:var(--ant-font-size-sm);color:var(--ant-color-text-tertiary);}`],`
    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-tertiary);
  `)},Dt=(0,M.memo)(({status:e})=>{let{t}=n(`eval`);return e===`error`?(0,N.jsx)(T,{color:`orange`,text:t(`table.filter.error`)}):e===`timeout`?(0,N.jsx)(T,{color:`orange`,text:t(`run.status.timeout`)}):(0,N.jsx)(Ze,{children:e})}),Ot=({onSelectionChange:e,onSelectionReady:t,runId:r,submitter:i})=>{let{t:a}=n(`eval`),[o,s]=(0,M.useState)([]),[c,l]=(0,M.useState)(!1),[u,d]=(0,M.useState)([]),[f,p]=(0,M.useState)(10);(0,M.useEffect)(()=>{l(!0),dt.getResumableCases(r).then(e=>{s(e),d(e.filter(e=>e.canResume).map(e=>e.testCaseId))}).finally(()=>l(!1))},[r]),(0,M.useEffect)(()=>{e(u.length)},[e,u]);let m=(0,M.useMemo)(()=>o.filter(e=>e.canResume),[o]),h=u.length===m.length&&m.length>0,g=u.length>0&&u.length<m.length,_=(0,M.useCallback)(e=>{d(e?m.map(e=>e.testCaseId):[])},[m]),v=(0,M.useCallback)((e,t)=>{d(n=>t?[...n,e]:n.filter(t=>t!==e))},[]),y=(0,M.useCallback)(async()=>{u.length!==0&&await i(o.filter(e=>u.includes(e.testCaseId)).map(e=>({testCaseId:e.testCaseId,threadId:e.threadId})))},[o,u,i]);(0,M.useEffect)(()=>{t({confirm:y,selectedCount:()=>u.length})},[y,t,u]);let ee=(0,M.useMemo)(()=>[{key:`select`,render:(e,t)=>(0,N.jsx)(w,{title:t.canResume?void 0:t.reason,children:(0,N.jsx)(b,{checked:u.includes(t.testCaseId),disabled:!t.canResume,onChange:e=>v(t.testCaseId,e)})}),title:(0,N.jsx)(b,{checked:h,disabled:m.length===0,indeterminate:g,onChange:_}),width:48},{key:`index`,render:(e,t)=>(0,N.jsx)(`span`,{className:Et.indexCell,children:t.sortOrder??`-`}),title:`#`,width:48},{key:`input`,render:(e,t)=>(0,N.jsx)(ce.Paragraph,{ellipsis:{expandable:!0,rows:2,symbol:`...`},style:{margin:0},children:t.input}),title:a(`table.columns.input`)},{key:`status`,render:(e,t)=>(0,N.jsx)(w,{title:t.canResume?void 0:t.reason,children:(0,N.jsx)(Dt,{status:t.resumeStatus})}),title:a(`table.columns.status`),width:110}],[a,u,h,g,m,v,_]);return c?(0,N.jsx)(Pe,{rows:4}):(0,N.jsx)(le,{columns:ee,dataSource:o,rowKey:`testCaseId`,scroll:{y:400},size:`small`,style:{minHeight:300},pagination:{pageSize:f,showSizeChanger:!0,size:`small`,onShowSizeChange:(e,t)=>p(t)}})}})),At,jt,Mt=e((()=>{p(),Ve(),et(),i(),At=t(s()),jt=({confirming:e,onConfirm:t,selectedCount:r})=>{let{t:i}=n(`eval`),{t:a}=n(`common`),{close:o}=ie();return(0,At.jsxs)(m,{children:[(0,At.jsx)(f,{disabled:e,onClick:o,children:a(`cancel`)}),(0,At.jsxs)(f,{disabled:r===0,loading:e,type:`primary`,onClick:t,children:[i(`run.actions.batchResume.modal.confirm`),` (`,r,`)`]})]})}})),Nt,Pt,Ft=e((()=>{He(),a(),kt(),Mt(),Nt=t(s()),Pt=({onConfirm:e,runId:t})=>{let n={},i=!1,a=0,o=async()=>{},s=()=>(0,Nt.jsx)(jt,{confirming:i,selectedCount:a,onConfirm:async()=>{i=!0,n.instance?.update({footer:s()});try{await o(),n.instance?.close()}finally{i=!1,n.instance?.update({footer:s()})}}});return n.instance=y({content:(0,Nt.jsx)(Ot,{runId:t,submitter:e,onSelectionChange:e=>{e!==a&&(a=e,n.instance?.update({footer:s()}))},onSelectionReady:e=>{o=e.confirm}}),footer:s(),title:r(`run.actions.batchResume.modal.title`,{ns:`eval`}),width:700}),n.instance}})),It,Lt,Rt=e((()=>{It=new Set([`error`,`timeout`]),Lt=(e,t)=>{if(t<=1)return It.has(e.status??``)?{resumeStatus:e.status}:void 0;let n=e.evalResult?.threads?.find(e=>It.has(e.status??``));if(n?.status)return{resumeStatus:n.status,threadId:n.threadId}}})),P,F,I,zt,L,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt=e((()=>{E(),We(),x(),_(),u(),tt(),Xe(),ue(),A(),Oe(),P=t(o()),i(),ft(),St(),Rt(),F=t(s()),I={caseLink:D(`acss-115s8km`,[`.acss-115s8km{color:inherit;text-decoration:none;}`,`.acss-115s8km:hover{color:var(--ant-color-primary);}`],`
    color: inherit;
    text-decoration: none;

    &:hover {
      color: var(--ant-color-primary);
    }
  `),durationSub:D(`acss-6j350`,[`.acss-6j350{font-family:var(--ant-font-family-code);font-size:var(--ant-font-size-sm);color:var(--ant-color-text-tertiary);}`],`
    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-tertiary);
  `),chip:D(`acss-1jg5q3j`,[`.acss-1jg5q3j{cursor:pointer;display:inline-flex;gap:6px;align-items:center;padding-block:4px;padding-inline:10px;border:1px solid var(--ant-color-border-secondary);border-radius:999px;font-size:var(--ant-font-size-sm);color:var(--ant-color-text-secondary);background:var(--ant-color-bg-container);transition:border-color 0.15s ease,background 0.15s ease;}`,`.acss-1jg5q3j:hover{background:var(--ant-color-fill-tertiary);}`,`.acss-1jg5q3j:focus-visible{outline:2px solid var(--ant-color-primary);outline-offset:1px;}`,`@media (prefers-reduced-motion: reduce){.acss-1jg5q3j{transition:none;}}`],`
    cursor: pointer;

    display: inline-flex;
    gap: 6px;
    align-items: center;

    padding-block: 4px;
    padding-inline: 10px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: 999px;

    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-secondary);

    background: var(--ant-color-bg-container);

    transition:
      border-color 0.15s ease,
      background 0.15s ease;

    &:hover {
      background: var(--ant-color-fill-tertiary);
    }

    &:focus-visible {
      outline: 2px solid var(--ant-color-primary);
      outline-offset: 1px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `),chipActive:D(`acss-1ai04pg`,[`.acss-1ai04pg{border-color:var(--ant-color-text);color:var(--ant-color-text);background:var(--ant-color-fill-secondary);}`],`
    border-color: var(--ant-color-text);
    color: var(--ant-color-text);
    background: var(--ant-color-fill-secondary);
  `),chipCount:D(`acss-17lnje6`,[`.acss-17lnje6{font-family:var(--ant-font-family-code);font-weight:600;}`],`
    font-family: var(--ant-font-family-code);
    font-weight: 600;
  `),chipDot:D(`acss-1rhhppu`,[`.acss-1rhhppu{display:inline-block;width:8px;height:8px;border-radius:999px;}`],`
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 999px;
  `),filterBar:D(`acss-b1r3s`,[`.acss-b1r3s{padding-block:12px;padding-inline:20px;border-block-end:1px solid var(--ant-color-border-secondary);}`],`
    padding-block: 12px;
    padding-inline: 20px;
    border-block-end: 1px solid var(--ant-color-border-secondary);
  `),summaryBar:D(`acss-zo01pk`,[`.acss-zo01pk{padding-block:16px;padding-inline:20px;border-block-end:1px solid var(--ant-color-border-secondary);}`],`
    padding-block: 16px;
    padding-inline: 20px;
    border-block-end: 1px solid var(--ant-color-border-secondary);
  `),summaryLabel:D(`acss-a9xmeq`,[`.acss-a9xmeq{font-size:var(--ant-font-size-sm);font-weight:500;color:var(--ant-color-text-secondary);}`],`
    font-size: var(--ant-font-size-sm);
    font-weight: 500;
    color: var(--ant-color-text-secondary);
  `),indexCell:D(`acss-6j350`,[`.acss-6j350{font-family:var(--ant-font-family-code);font-size:var(--ant-font-size-sm);color:var(--ant-color-text-tertiary);}`],`
    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-tertiary);
  `),monoCell:D(`acss-jyo7mh`,[`.acss-jyo7mh{font-family:var(--ant-font-family-code);font-size:var(--ant-font-size-sm);color:var(--ant-color-text-secondary);}`],`
    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-secondary);
  `),threadDot:D(`acss-1rhhppu`,[`.acss-1rhhppu{display:inline-block;width:8px;height:8px;border-radius:999px;}`],`
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 999px;
  `)},zt={text:D(`acss-15a5nk3`,[`.acss-15a5nk3{color:var(--ant-color-text-secondary);}`],`
    color: var(--ant-color-text-secondary);
  `)},L=(0,P.memo)(({children:e})=>(0,F.jsx)(`span`,{className:zt.text,children:e})),Bt=(0,P.memo)(({record:e})=>{let{t}=n(`eval`),r=e.status;if(!r||r===`pending`)return(0,F.jsx)(T,{status:`default`,text:(0,F.jsx)(L,{children:t(`run.status.pending`)})});if(r===`running`)return(0,F.jsx)(T,{status:`processing`,text:(0,F.jsx)(L,{children:t(`run.status.running`)})});if(r===`passed`)return(0,F.jsx)(Ze,{color:`green`,children:t(`table.filter.passed`)});if(r===`failed`)return(0,F.jsx)(Ze,{color:`red`,children:t(`table.filter.failed`)});if(r===`error`){let n=e.evalResult?.error,r=(0,F.jsx)(T,{color:`orange`,text:(0,F.jsx)(L,{children:t(`table.filter.error`)})});return n?(0,F.jsx)(w,{title:n,children:r}):r}if(r===`timeout`)return(0,F.jsx)(T,{color:`orange`,text:(0,F.jsx)(L,{children:t(`run.status.timeout`)})});if(r===`external`){let e=(0,F.jsx)(T,{color:`purple`,text:(0,F.jsx)(L,{children:t(`run.status.external`)})});return(0,F.jsx)(w,{title:t(`run.status.external.tooltip`),children:e})}if(r===`completed`){let e=(0,F.jsx)(T,{color:`blue`,text:(0,F.jsx)(L,{children:t(`run.status.completed`)})});return(0,F.jsx)(w,{title:t(`run.status.completed.tooltip`),children:e})}return(0,F.jsx)(T,{status:`default`,text:(0,F.jsx)(L,{children:r})})}),Vt=(0,P.memo)(({threads:e})=>(0,F.jsx)(d,{horizontal:!0,align:`center`,gap:4,children:e.map(e=>{let t=k.colorTextTertiary;return e.status===`running`?t=k.colorPrimary:e.status===`error`?t=k.colorError:e.passed===!0?t=k.colorSuccess:e.passed===!1&&(t=k.colorError),e.status===`external`&&(t=k.colorWarning),e.status===`completed`&&(t=k.colorPrimary),(0,F.jsx)(w,{title:e.error||e.status===`error`?`error`:e.status===`running`?`running`:e.passed===!0?`passed`:e.passed===!1&&e.status!==`completed`?`failed`:e.status===`external`?`Awaiting for external evaluation`:e.status===`completed`?`completed`:`pending`,children:(0,F.jsx)(`span`,{className:I.threadDot,style:{backgroundColor:t}})},e.threadId)})})),Ht=(0,P.memo)(({ms:e})=>{let t=e/1e3;if(t<60)return(0,F.jsxs)(`span`,{className:I.monoCell,children:[t.toFixed(1),`s`]});let n=Math.floor(t/60),r=Math.floor(t%60);return(0,F.jsxs)(d,{gap:2,children:[(0,F.jsxs)(`span`,{className:I.monoCell,children:[n,`m `,r,`s`]}),(0,F.jsxs)(`span`,{className:I.durationSub,children:[t.toFixed(1),`s`]})]})}),Ut=(0,P.memo)(({startTime:e})=>{let[t,n]=(0,P.useState)(()=>Date.now()-new Date(e).getTime());return(0,P.useEffect)(()=>{let t=setInterval(()=>{n(Date.now()-new Date(e).getTime())},100);return()=>clearInterval(t)},[e]),(0,F.jsx)(Ht,{ms:t})}),Wt=new Set([`error`,`failed`,`timeout`]),Gt=new Set([`completed`,`failed`,`aborted`]),Kt=(0,P.memo)(({results:e,benchmarkId:t,runId:r,k:i=1,onRetryCase:a,onResumeCase:o,runStatus:s})=>{let{t:c}=n(`eval`),[l,u]=(0,P.useState)(``),[f,p]=(0,P.useState)(`all`),[m,g]=(0,P.useState)(20),[_,v]=(0,P.useState)(null),[y,ee]=(0,P.useState)(null),te=i>1,b=!!a&&!!s&&Gt.has(s),ne=!!o,x=(0,P.useMemo)(()=>{let t=e;return l&&(t=t.filter(e=>e.testCase?.content?.input?.toLowerCase().includes(l.toLowerCase()))),f!==`all`&&(t=f===`pending`?t.filter(e=>!e.status||e.status===`pending`):f===`running`?t.filter(e=>e.status===`running`):t.filter(e=>e.status===f)),t},[e,l,f]),S=(0,P.useMemo)(()=>{let t=0,n=0,r=0,i=0;for(let a of e){let e=a.status;e===`passed`?t++:e===`failed`?n++:e===`error`||e===`timeout`?r++:(!e||e===`pending`||e===`running`)&&i++}return{error:r,failed:n,passed:t,pending:i}},[e]),re=[{color:k.colorSuccess,count:S.passed,label:c(`table.filter.passed`),value:`passed`},{color:k.colorError,count:S.failed,label:c(`table.filter.failed`),value:`failed`},{color:k.colorWarning,count:S.error,label:c(`table.filter.error`),value:`error`},{color:k.colorTextQuaternary,count:S.pending,label:c(`run.status.pending`),value:`pending`}],ie=[{color:k.colorSuccess,value:S.passed},{color:k.colorError,value:S.failed},{color:k.colorWarning,value:S.error},{color:k.colorTextQuaternary,value:S.pending}],T=(0,P.useMemo)(()=>{let e=[{key:`index`,render:(e,t,n)=>(0,F.jsx)(`span`,{className:I.indexCell,children:t.testCase?.sortOrder??n+1}),title:`#`,width:48},{dataIndex:[`testCase`,`content`,`input`],key:`input`,render:(e,n)=>(0,F.jsx)(pt,{className:I.caseLink,to:`/eval/bench/${t}/runs/${r}/cases/${n.testCaseId}`,children:e}),title:c(`table.columns.input`)}];return te?e.push({key:`threads`,render:(e,t)=>{let n=t.evalResult?.threads;return n?.length?(0,F.jsx)(Vt,{threads:n}):(0,F.jsx)(Bt,{record:t})},title:c(`table.columns.status`),width:60+i*12},{key:`passAtK`,render:(e,t)=>{let n=t.evalResult?.passAtK,r=t.evalResult?.passAllK,a=n!=null,o=r!=null;return!a&&!o?`-`:(0,F.jsxs)(d,{gap:2,children:[a&&(n?(0,F.jsx)(Ze,{color:`green`,children:c(`table.filter.passed`)}):(0,F.jsx)(Ze,{color:`red`,children:c(`table.filter.failed`)})),o&&(0,F.jsxs)(`span`,{className:I.durationSub,children:[`^`,i,`: `,c(r?`table.filter.passed`:`table.filter.failed`)]})]})},title:`pass@${i}`,width:110}):e.push({key:`status`,render:(e,t)=>(0,F.jsx)(Bt,{record:t}),title:c(`table.columns.status`),width:100}),e.push({key:`duration`,render:(e,t)=>{let n=t.evalResult?.duration;return n==null?t.status===`running`&&t.createdAt?(0,F.jsx)(Ut,{startTime:t.createdAt}):`-`:(0,F.jsx)(Ht,{ms:n})},sortDirections:[`descend`,`ascend`],sorter:(e,t)=>(e.evalResult?.duration??0)-(t.evalResult?.duration??0),title:c(`table.columns.duration`),width:100},{key:`steps`,render:(e,t)=>{let n=t.evalResult?.steps;if(n==null)return`-`;let r=t.evalResult?.llmCalls,i=t.evalResult?.toolCalls,a=n,o=r??void 0,s=i??void 0,c=o!==void 0||s!==void 0;return(0,F.jsxs)(d,{gap:2,children:[(0,F.jsxs)(d,{horizontal:!0,align:`center`,gap:4,children:[(0,F.jsx)(h,{icon:de,size:12,style:{opacity:.5}}),(0,F.jsx)(`span`,{className:I.monoCell,children:a})]}),c&&(0,F.jsxs)(`span`,{className:I.durationSub,children:[o??0,` llm / `,s??0,` tool`]})]})},sortDirections:[`descend`,`ascend`],sorter:(e,t)=>(e.evalResult?.steps??0)-(t.evalResult?.steps??0),title:c(`table.columns.steps`),width:120},{key:`cost`,render:(e,t)=>{let n=t.evalResult?.cost,r=t.evalResult?.tokens,i=n!=null,a=r!=null;return!i&&!a?`-`:(0,F.jsxs)(d,{gap:2,children:[i&&(0,F.jsxs)(`span`,{className:I.monoCell,children:[`$`,ze(n)]}),a&&(0,F.jsxs)(`span`,{className:I.durationSub,children:[Le(r),` tokens`]})]})},sortDirections:[`descend`,`ascend`],sorter:(e,t)=>(e.evalResult?.cost??0)-(t.evalResult?.cost??0),title:c(`table.columns.cost`),width:120}),te&&e.push({key:`totalCost`,render:(e,t)=>{let n=t.evalResult?.totalCost,r=t.evalResult?.totalTokens,i=n!=null,a=r!=null;return!i&&!a?`-`:(0,F.jsxs)(d,{gap:2,children:[i&&(0,F.jsxs)(`span`,{className:I.monoCell,children:[`$`,ze(n)]}),a&&(0,F.jsxs)(`span`,{className:I.durationSub,children:[Le(r),` tokens`]})]})},sortDirections:[`descend`,`ascend`],sorter:(e,t)=>(e.evalResult?.totalCost??0)-(t.evalResult?.totalCost??0),title:c(`table.columns.totalCost`),width:120}),(b||ne)&&e.push({key:`actions`,render:(e,t)=>{let n=b&&Wt.has(t.status),r=Lt(t,i),s=ne&&!!r;if(!n&&!s)return null;let l=_===t.testCaseId,u=y===t.testCaseId;return(0,F.jsxs)(d,{horizontal:!0,gap:4,children:[n&&(0,F.jsx)(w,{title:c(`run.actions.retryCase`),children:(0,F.jsx)(C,{icon:me,loading:l,size:`small`,onClick:async()=>{v(t.testCaseId);try{await a(t.testCaseId)}finally{v(null)}}})}),s&&(0,F.jsx)(w,{title:c(`run.actions.resumeCase`),children:(0,F.jsx)(C,{icon:Ce,loading:u,size:`small`,onClick:async()=>{ee(t.testCaseId);try{await o(t.testCaseId,r?.threadId)}finally{ee(null)}}})})]})},title:``,width:80}),e},[t,r,c,te,i,b,ne,_,y,a,o]);return(0,F.jsxs)(d,{gap:0,children:[(0,F.jsxs)(d,{className:I.summaryBar,gap:12,children:[(0,F.jsx)(`span`,{className:I.summaryLabel,children:c(`table.columns.status`)}),(0,F.jsx)(Ct,{segments:ie}),(0,F.jsx)(d,{horizontal:!0,gap:8,wrap:`wrap`,children:re.map(e=>{let t=f===e.value;return(0,F.jsxs)(`span`,{className:`${I.chip}${t?` ${I.chipActive}`:``}`,role:`button`,tabIndex:0,onClick:()=>p(t?`all`:e.value),onKeyDown:n=>{(n.key===`Enter`||n.key===` `)&&(n.preventDefault(),p(t?`all`:e.value))},children:[(0,F.jsx)(`span`,{className:I.chipDot,style:{backgroundColor:e.color}}),e.label,(0,F.jsx)(`span`,{className:I.chipCount,children:e.count})]},e.value)})})]}),(0,F.jsxs)(d,{horizontal:!0,align:`center`,className:I.filterBar,gap:8,children:[(0,F.jsx)(oe.Search,{allowClear:!0,placeholder:c(`table.search.placeholder`),style:{width:240},onChange:e=>u(e.target.value)}),(0,F.jsx)(nt,{style:{width:120},value:f,options:[{label:c(`table.filter.all`),value:`all`},{label:c(`table.filter.passed`),value:`passed`},{label:c(`table.filter.failed`),value:`failed`},{label:c(`table.filter.error`),value:`error`},{label:c(`table.filter.running`),value:`running`},{label:c(`run.status.pending`),value:`pending`},{label:c(`run.status.external`),value:`external`},{label:c(`run.status.completed`),value:`completed`}],onChange:p}),(0,F.jsx)(`span`,{style:{color:k.colorTextTertiary,fontSize:12,whiteSpace:`nowrap`},children:c(`table.total`,{count:x.length})})]}),(0,F.jsx)(le,{columns:T,dataSource:x,rowKey:`testCaseId`,size:`small`,pagination:{pageSize:m,showSizeChanger:!0,size:`small`,onShowSizeChange:(e,t)=>g(t)}})]})})})),Jt,R,z,Yt,Xt=e((()=>{E(),We(),x(),Xe(),ue(),A(),Jt=t(o()),i(),Ie(),Ge(),R=t(s()),z={axisLabel:D(`acss-1kpygvz`,[`.acss-1kpygvz{pointer-events:none;position:absolute;font-size:var(--ant-font-size-sm);color:var(--ant-color-text-tertiary);}`],`
    pointer-events: none;
    position: absolute;
    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-tertiary);
  `),dot:D(`acss-pvgrjd`,[`.acss-pvgrjd{cursor:pointer;transition:transform 0.15s ease,opacity 0.15s ease;}`,`.acss-pvgrjd:hover{transform:translate(-50%, 50%) scale(1.5);opacity:1!important;}`,`.acss-pvgrjd:focus-visible{outline:2px solid var(--ant-color-primary);outline-offset:1px;}`,`@media (prefers-reduced-motion: reduce){.acss-pvgrjd{transition:none;}}`],`
    cursor: pointer;
    transition:
      transform 0.15s ease,
      opacity 0.15s ease;

    &:hover {
      transform: translate(-50%, 50%) scale(1.5);
      opacity: 1 !important;
    }

    &:focus-visible {
      outline: 2px solid var(--ant-color-primary);
      outline-offset: 1px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `),scatterArea:D(`acss-1tmhup4`,[`.acss-1tmhup4{position:relative;overflow:hidden;flex:1;}`],`
    position: relative;
    overflow: hidden;
    flex: 1;
  `),tooltipLabel:D(`acss-nt432w`,[`.acss-nt432w{color:var(--ant-color-text-tertiary);}`],`
    color: var(--ant-color-text-tertiary);
  `)},Yt=(0,Jt.memo)(({results:e,benchmarkId:t,runId:r})=>{let{t:i}=n(`eval`),a=Ue(),o=Re(),{maxDuration:s,maxTokens:c,scatterData:l}=(0,Jt.useMemo)(()=>{if(!e||e.length===0)return{maxDuration:0,maxTokens:0,scatterData:[]};let t=0,n=0,r=e.map(e=>{let r=(e.evalResult?.duration||0)/1e3,i=e.evalResult?.tokens||0,a=e.evalResult?.cost,o=e.status,s=e.testCase?.content?.input||``,c=e.testCase?.content?.expected||``,l=e.testCase?.sortOrder,u=e.testCaseId||``;return r>t&&(t=r),i>n&&(n=i),{cost:a,duration:r,expected:c,input:s,sortOrder:l,status:o,testCaseId:u,tokens:i}});return{maxDuration:t,maxTokens:n,scatterData:r}},[e]);return!e||e.length===0?null:(0,R.jsxs)(`div`,{className:z.scatterArea,children:[(0,R.jsxs)(`svg`,{preserveAspectRatio:`none`,viewBox:`0 0 100 100`,style:{height:`100%`,insetBlockStart:0,insetInlineStart:0,position:`absolute`,width:`100%`},children:[(0,R.jsx)(`line`,{stroke:a.colorBorderSecondary,strokeWidth:`0.5`,x1:`0`,x2:`100`,y1:`100`,y2:`100`}),(0,R.jsx)(`line`,{stroke:a.colorBorderSecondary,strokeWidth:`0.5`,x1:`0`,x2:`0`,y1:`0`,y2:`100`}),[1,2,3].map(e=>(0,R.jsx)(`line`,{stroke:a.colorBorderSecondary,strokeDasharray:`2 2`,strokeOpacity:`0.5`,strokeWidth:`0.5`,x1:`0`,x2:`100`,y1:100-e*25,y2:100-e*25},e))]}),l.map((e,n)=>{let l=e.tokens/(c||1)*92+4,u=e.duration/(s||1)*88+6,f=e.status===`passed`?a.colorSuccess:e.status===`error`?a.colorWarning:a.colorError,p=e.status===`passed`?`green`:e.status===`error`?`orange`:`red`,m=e.status===`passed`?i(`run.chart.pass`):e.status===`error`?i(`run.chart.error`):i(`run.chart.fail`),h=e.input.length>60?e.input.slice(0,60)+`...`:e.input,g=e.expected.length>60?e.expected.slice(0,60)+`...`:e.expected,_=Ne(`/eval/bench/${t}/runs/${r}/cases/${e.testCaseId}`,o);return(0,R.jsx)(w,{title:(0,R.jsxs)(d,{gap:4,style:{fontSize:12,maxWidth:320},children:[(0,R.jsxs)(d,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,R.jsxs)(d,{horizontal:!0,align:`center`,gap:8,children:[(0,R.jsxs)(`span`,{style:{fontWeight:600},children:[`#`,e.sortOrder??n+1]}),(0,R.jsx)(Ze,{color:p,size:`small`,children:m})]}),(0,R.jsxs)(`span`,{className:z.tooltipLabel,children:[e.duration.toFixed(2),`s`]})]}),h&&(0,R.jsx)(`div`,{style:{lineHeight:1.4,wordBreak:`break-all`},children:h}),g&&(0,R.jsx)(`div`,{className:z.tooltipLabel,style:{lineHeight:1.4,wordBreak:`break-all`},children:g}),(0,R.jsx)(se,{style:{margin:`2px 0`}}),(0,R.jsxs)(d,{horizontal:!0,gap:16,children:[(0,R.jsxs)(`div`,{children:[(0,R.jsxs)(`span`,{className:z.tooltipLabel,children:[i(`run.chart.tokens`),`: `]}),Le(e.tokens)]}),e.cost!==void 0&&(0,R.jsxs)(`div`,{children:[(0,R.jsxs)(`span`,{className:z.tooltipLabel,children:[i(`run.metrics.cost`),`: `]}),`$`,ze(e.cost)]})]})]}),children:(0,R.jsx)(`div`,{className:z.dot,role:`button`,tabIndex:0,style:{background:f,borderRadius:`50%`,bottom:`${u}%`,height:7,left:`${l}%`,opacity:.8,position:`absolute`,transform:`translate(-50%, 50%)`,width:7},onClick:()=>window.open(_,`_blank`),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),window.open(_,`_blank`))}})},n)}),(0,R.jsx)(`span`,{className:z.axisLabel,style:{bottom:2,right:4},children:i(`run.chart.tokens`)}),(0,R.jsx)(`span`,{className:z.axisLabel,style:{left:4,top:0},children:i(`run.chart.duration`)})]})})})),Zt,Qt,$t,en=e((()=>{at(),A(),Zt=t(o()),i(),Qt=t(s()),$t=(0,Zt.memo)(({passedCases:e,failedCases:t,errorCases:r})=>{let{t:i}=n(`eval`),a=Ue(),o=[{name:i(`run.chart.pass`),value:e},{name:i(`run.chart.fail`),value:t},...r>0?[{name:i(`run.chart.error`),value:r}]:[]];return(0,Qt.jsx)(it,{category:`value`,colors:[a.colorSuccess,a.colorFill,...r>0?[a.colorWarning]:[]],data:o,index:`name`,style:{height:200},variant:`pie`})})})),tn,B,V,nn,rn=e((()=>{E(),at(),x(),A(),tn=t(o()),i(),Xt(),en(),B=t(s()),V={chartCard:D(`acss-1xwtyey`,[`.acss-1xwtyey{padding:16px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);background:var(--ant-color-bg-container);}`],`
    padding: 16px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);
    background: var(--ant-color-bg-container);
  `),chartTitle:D(`acss-1h2e50c`,[`.acss-1h2e50c{margin-block-end:12px;font-size:var(--ant-font-size-sm);font-weight:500;color:var(--ant-color-text-secondary);}`],`
    margin-block-end: 12px;
    font-size: var(--ant-font-size-sm);
    font-weight: 500;
    color: var(--ant-color-text-secondary);
  `),legendDot:D(`acss-1tven3e`,[`.acss-1tven3e{width:8px;height:8px;border-radius:999px;}`],`
    width: 8px;
    height: 8px;
    border-radius: 999px;
  `),legendText:D(`acss-14wmj16`,[`.acss-14wmj16{font-size:var(--ant-font-size-sm);color:var(--ant-color-text-secondary);}`],`
    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-secondary);
  `),totalCount:D(`acss-1nidx4i`,[`.acss-1nidx4i{padding-block:1px;padding-inline:8px;border-radius:var(--ant-border-radius-xs);font-family:var(--ant-font-family-code);font-size:var(--ant-font-size-sm);font-weight:600;color:var(--ant-color-text-secondary);background:var(--ant-color-fill-secondary);}`],`
    padding-block: 1px;
    padding-inline: 8px;
    border-radius: var(--ant-border-radius-xs);

    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size-sm);
    font-weight: 600;
    color: var(--ant-color-text-secondary);

    background: var(--ant-color-fill-secondary);
  `)},nn=(0,tn.memo)(({results:e,benchmarkId:t,runId:r})=>{let{t:i}=n(`eval`),a=Ue(),{errorCases:o,failedCases:s,histogramData:c,passedCases:l}=(0,tn.useMemo)(()=>{if(!e||e.length===0)return{errorCases:0,failedCases:0,histogramData:[],passedCases:0};let t=0,n=0,r=0,i=[];for(let a of e){let e=(a.evalResult?.duration||0)/1e3,o=a.status;o===`passed`?t++:o===`error`?r++:o===`failed`&&n++,i.push({duration:e,status:o})}let a=[{error:0,failed:0,max:60,passed:0,range:`<1min`},{error:0,failed:0,max:180,passed:0,range:`1~3min`},{error:0,failed:0,max:300,passed:0,range:`3~5min`},{error:0,failed:0,max:1/0,passed:0,range:`>5min`}];for(let e of i){let t=e.duration<60?0:e.duration<180?1:e.duration<300?2:3;e.status===`passed`?a[t].passed++:e.status===`error`?a[t].error++:a[t].failed++}return{errorCases:r,failedCases:n,histogramData:a,passedCases:t}},[e]),u=i(`run.chart.pass`),f=i(`run.chart.fail`),p=i(`run.chart.error`),m=(0,tn.useMemo)(()=>c.map(e=>({[p]:e.error,[f]:e.failed,[u]:e.passed,range:e.range})),[c,u,f,p]);return!e||e.length===0?null:(0,B.jsxs)(d,{horizontal:!0,gap:16,style:{height:320},children:[(0,B.jsxs)(d,{className:V.chartCard,flex:1,children:[(0,B.jsx)(`div`,{className:V.chartTitle,children:i(`run.chart.passFailError`)}),(0,B.jsx)(d,{align:`center`,flex:1,justify:`center`,children:(0,B.jsx)($t,{errorCases:o,failedCases:s,passedCases:l})})]}),(0,B.jsxs)(d,{className:V.chartCard,flex:2,children:[(0,B.jsxs)(d,{horizontal:!0,justify:`space-between`,style:{marginBlockEnd:12},children:[(0,B.jsx)(`span`,{className:V.chartTitle,style:{marginBlockEnd:0},children:i(`run.chart.latencyTokenDistribution`)}),(0,B.jsxs)(d,{horizontal:!0,gap:12,style:{fontSize:k.fontSizeSM},children:[(0,B.jsxs)(d,{horizontal:!0,align:`center`,gap:4,children:[(0,B.jsx)(`div`,{className:V.legendDot,style:{background:a.colorSuccess}}),(0,B.jsx)(`span`,{className:V.legendText,children:i(`run.chart.pass`)})]}),(0,B.jsxs)(d,{horizontal:!0,align:`center`,gap:4,children:[(0,B.jsx)(`div`,{className:V.legendDot,style:{background:a.colorFill}}),(0,B.jsx)(`span`,{className:V.legendText,children:i(`run.chart.fail`)})]}),(0,B.jsxs)(d,{horizontal:!0,align:`center`,gap:4,children:[(0,B.jsx)(`div`,{className:V.legendDot,style:{background:a.colorWarning}}),(0,B.jsx)(`span`,{className:V.legendText,children:i(`run.chart.error`)})]})]})]}),(0,B.jsx)(Yt,{benchmarkId:t,results:e,runId:r})]}),(0,B.jsxs)(d,{className:V.chartCard,flex:1,children:[(0,B.jsxs)(d,{horizontal:!0,align:`center`,className:V.chartTitle,gap:8,children:[(0,B.jsx)(`span`,{children:i(`run.chart.latencyDistribution`)}),(0,B.jsx)(`span`,{className:V.totalCount,children:e.length})]}),(0,B.jsx)(rt,{stack:!0,categories:[u,f,p],colors:[a.colorSuccess,a.colorFill,a.colorWarning],data:m,index:`range`,showLegend:!1,showYAxis:!1})]})]})})})),an,H,U,on,sn=e((()=>{E(),_(),p(),ct(),Be(),A(),Oe(),an=t(o()),i(),_t(),H=t(s()),U={center:D(`acss-op4f7v`,[`.acss-op4f7v{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;width:40px;height:40px;margin:auto;border-radius:999px;color:var(--ant-color-text-secondary);background:var(--ant-color-fill-tertiary);}`],`
    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    margin: auto;
    border-radius: 999px;

    color: var(--ant-color-text-secondary);

    background: var(--ant-color-fill-tertiary);
  `),container:D(`acss-18skfm0`,[`.acss-18skfm0{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;height:320px;}`],`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 320px;
  `),hint:D(`acss-1lim5gc`,[`.acss-1lim5gc{margin-block-start:24px;font-size:var(--ant-font-size);color:var(--ant-color-text-quaternary);}`],`
    margin-block-start: 24px;
    font-size: var(--ant-font-size);
    color: var(--ant-color-text-quaternary);
  `),icon:D(`acss-nlyjs`,[`.acss-nlyjs{position:absolute;transform:translate(-50%, -50%);display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:var(--ant-border-radius);}`],`
    position: absolute;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;
    border-radius: var(--ant-border-radius);
  `),icon1:D(`acss-amw6ro`,[`.acss-amw6ro{inset-block-start:15px;inset-inline-start:100px;color:var(--ant-geekblue);background:var(--ant-geekblue-1);}`],`
    inset-block-start: 15px;
    inset-inline-start: 100px;
    color: var(--ant-geekblue);
    background: var(--ant-geekblue-1);
  `),icon2:D(`acss-14xcbgp`,[`.acss-14xcbgp{inset-block-start:143px;inset-inline-start:174px;color:var(--ant-color-success);background:var(--ant-color-success-bg);}`],`
    inset-block-start: 143px;
    inset-inline-start: 174px;
    color: var(--ant-color-success);
    background: var(--ant-color-success-bg);
  `),icon3:D(`acss-1smhnms`,[`.acss-1smhnms{inset-block-start:143px;inset-inline-start:26px;color:var(--ant-purple);background:var(--ant-purple-1);}`],`
    inset-block-start: 143px;
    inset-inline-start: 26px;
    color: var(--ant-purple);
    background: var(--ant-purple-1);
  `),orbit:D(`acss-11u5g8a`,[`.acss-11u5g8a{position:absolute;inset:0;margin:auto;border:1px solid var(--ant-color-border-secondary);border-radius:999px;}`],`
    position: absolute;
    inset: 0;

    margin: auto;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: 999px;
  `),orbit1:D(`acss-xzythf`,[`.acss-xzythf{width:200px;height:200px;}`],`
    width: 200px;
    height: 200px;
  `),orbit2:D(`acss-1ebra7r`,[`.acss-1ebra7r{width:140px;height:140px;}`],`
    width: 140px;
    height: 140px;
  `),orbit3:D(`acss-1o94rjr`,[`.acss-1o94rjr{width:80px;height:80px;}`],`
    width: 80px;
    height: 80px;
  `),orbitGroup:D(`acss-1xoyu7c`,[`.acss-1xoyu7c{position:relative;width:200px;height:200px;}`],`
    position: relative;
    width: 200px;
    height: 200px;
  `)},on=(0,an.memo)(({run:e})=>{let{t}=n(`eval`),r=j(e=>e.startRun),[i,a]=(0,an.useState)(!1);return(0,H.jsxs)(`div`,{className:U.container,children:[(0,H.jsxs)(`div`,{className:U.orbitGroup,children:[(0,H.jsx)(`div`,{className:O(U.orbit,U.orbit1)}),(0,H.jsx)(`div`,{className:O(U.orbit,U.orbit2)}),(0,H.jsx)(`div`,{className:O(U.orbit,U.orbit3)}),(0,H.jsx)(`div`,{className:O(U.icon,U.icon1),children:(0,H.jsx)(h,{icon:ye,size:16})}),(0,H.jsx)(`div`,{className:O(U.icon,U.icon2),children:(0,H.jsx)(h,{icon:xe,size:16})}),(0,H.jsx)(`div`,{className:O(U.icon,U.icon3),children:(0,H.jsx)(h,{icon:ve,size:16})}),(0,H.jsx)(`div`,{className:U.center,children:(0,H.jsx)(h,{icon:Ce,size:18})})]}),(0,H.jsx)(`div`,{className:U.hint,children:t(`run.idle.hint`)}),(0,H.jsx)(f,{icon:(0,H.jsx)(Ce,{size:14}),loading:i,style:{marginTop:12},type:`primary`,onClick:()=>{ne({content:t(`run.actions.start.confirm`),okText:t(`run.actions.start`),onOk:async()=>{try{a(!0),await r(e.id,e.status!==`idle`)}catch(e){g.error(e?.message||`Failed to start run`)}finally{a(!1)}},title:t(`run.actions.start`)})},children:t(`run.actions.start`)})]})})})),cn,W,G,ln,un=e((()=>{E(),_(),A(),Oe(),cn=t(o()),W=t(s()),G={center:D(`acss-bgvcie`,[`.acss-bgvcie{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;width:40px;height:40px;margin:auto;border-radius:999px;color:var(--ant-color-warning);background:var(--ant-color-warning-bg);}`],`
    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    margin: auto;
    border-radius: 999px;

    color: var(--ant-color-warning);

    background: var(--ant-color-warning-bg);
  `),container:D(`acss-18skfm0`,[`.acss-18skfm0{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;height:320px;}`],`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 320px;
  `),hint:D(`acss-1lim5gc`,[`.acss-1lim5gc{margin-block-start:24px;font-size:var(--ant-font-size);color:var(--ant-color-text-quaternary);}`],`
    margin-block-start: 24px;
    font-size: var(--ant-font-size);
    color: var(--ant-color-text-quaternary);
  `),icon:D(`acss-nlyjs`,[`.acss-nlyjs{position:absolute;transform:translate(-50%, -50%);display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:var(--ant-border-radius);}`],`
    position: absolute;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;
    border-radius: var(--ant-border-radius);
  `),icon1:D(`acss-amw6ro`,[`.acss-amw6ro{inset-block-start:15px;inset-inline-start:100px;color:var(--ant-geekblue);background:var(--ant-geekblue-1);}`],`
    inset-block-start: 15px;
    inset-inline-start: 100px;
    color: var(--ant-geekblue);
    background: var(--ant-geekblue-1);
  `),icon2:D(`acss-14xcbgp`,[`.acss-14xcbgp{inset-block-start:143px;inset-inline-start:174px;color:var(--ant-color-success);background:var(--ant-color-success-bg);}`],`
    inset-block-start: 143px;
    inset-inline-start: 174px;
    color: var(--ant-color-success);
    background: var(--ant-color-success-bg);
  `),icon3:D(`acss-1smhnms`,[`.acss-1smhnms{inset-block-start:143px;inset-inline-start:26px;color:var(--ant-purple);background:var(--ant-purple-1);}`],`
    inset-block-start: 143px;
    inset-inline-start: 26px;
    color: var(--ant-purple);
    background: var(--ant-purple-1);
  `),orbit:D(`acss-12lvp2e`,[`.acss-12lvp2e{position:absolute;inset:0;margin:auto;border:1px dashed var(--ant-color-border-secondary);border-radius:999px;}`],`
    position: absolute;
    inset: 0;

    margin: auto;
    border: 1px dashed var(--ant-color-border-secondary);
    border-radius: 999px;
  `),orbit1:D(`acss-xzythf`,[`.acss-xzythf{width:200px;height:200px;}`],`
    width: 200px;
    height: 200px;
  `),orbit2:D(`acss-1ebra7r`,[`.acss-1ebra7r{width:140px;height:140px;}`],`
    width: 140px;
    height: 140px;
  `),orbit3:D(`acss-1o94rjr`,[`.acss-1o94rjr{width:80px;height:80px;}`],`
    width: 80px;
    height: 80px;
  `),orbitGroup:D(`acss-1xoyu7c`,[`.acss-1xoyu7c{position:relative;width:200px;height:200px;}`],`
    position: relative;
    width: 200px;
    height: 200px;
  `)},ln=(0,cn.memo)(({hint:e})=>(0,W.jsxs)(`div`,{className:G.container,children:[(0,W.jsxs)(`div`,{className:G.orbitGroup,children:[(0,W.jsx)(`div`,{className:O(G.orbit,G.orbit1)}),(0,W.jsx)(`div`,{className:O(G.orbit,G.orbit2)}),(0,W.jsx)(`div`,{className:O(G.orbit,G.orbit3)}),(0,W.jsx)(`div`,{className:O(G.icon,G.icon1),children:(0,W.jsx)(h,{icon:ye,size:16})}),(0,W.jsx)(`div`,{className:O(G.icon,G.icon2),children:(0,W.jsx)(h,{icon:xe,size:16})}),(0,W.jsx)(`div`,{className:O(G.icon,G.icon3),children:(0,W.jsx)(h,{icon:ve,size:16})}),(0,W.jsx)(`div`,{className:G.center,children:(0,W.jsx)(h,{icon:ge,size:18})})]}),(0,W.jsx)(`div`,{className:G.hint,children:e})]}))})),dn,K,q,fn,pn=e((()=>{E(),je(),Qe(),x(),$e(),Je(),u(),ee(),p(),ct(),Xe(),Be(),Oe(),dn=t(o()),i(),Ie(),st(),Ge(),ft(),wt(),vt(),_t(),K=t(s()),q={backLink:D(`acss-mz7nfp`,[`.acss-mz7nfp{display:inline-flex;gap:4px;align-items:center;width:fit-content;font-size:var(--ant-font-size);color:var(--ant-color-text-tertiary);text-decoration:none;transition:color 0.15s ease;}`,`.acss-mz7nfp:hover{color:var(--ant-color-text);}`,`.acss-mz7nfp:focus-visible{outline:2px solid var(--ant-color-primary);outline-offset:-1px;}`,`@media (prefers-reduced-motion: reduce){.acss-mz7nfp{transition:none;}}`],`
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
      outline-offset: -1px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `),configSection:D(`acss-jir1fe`,[`.acss-jir1fe{margin-block-start:12px;}`],`
    margin-block-start: 12px;
  `),configSectionLabel:D(`acss-zmbkyc`,[`.acss-zmbkyc{margin-block-end:8px;font-size:var(--ant-font-size-sm);font-weight:500;color:var(--ant-color-text-secondary);}`],`
    margin-block-end: 8px;
    font-size: var(--ant-font-size-sm);
    font-weight: 500;
    color: var(--ant-color-text-secondary);
  `),systemRole:D(`acss-i4g1ie`,[`.acss-i4g1ie{overflow:auto;max-height:300px;padding:12px;border-radius:var(--ant-border-radius-sm);font-size:var(--ant-font-size);background:var(--ant-color-fill-quaternary);}`],`
    overflow: auto;

    max-height: 300px;
    padding: 12px;
    border-radius: var(--ant-border-radius-sm);

    font-size: var(--ant-font-size);

    background: var(--ant-color-fill-quaternary);
  `),configToggle:D(`acss-1atcj7z`,[`.acss-1atcj7z{cursor:pointer;display:flex;gap:4px;align-items:center;width:fit-content;padding:0;border:none;font-size:var(--ant-font-size-sm);color:var(--ant-color-text-tertiary);background:transparent;transition:color 0.15s ease;}`,`.acss-1atcj7z:hover{color:var(--ant-color-text);}`,`.acss-1atcj7z:focus-visible{outline:2px solid var(--ant-color-primary);outline-offset:2px;}`,`@media (prefers-reduced-motion: reduce){.acss-1atcj7z{transition:none;}}`],`
    cursor: pointer;

    display: flex;
    gap: 4px;
    align-items: center;

    width: fit-content;
    padding: 0;
    border: none;

    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-tertiary);

    background: transparent;

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
  `),agentLink:D(`acss-13gvf7m`,[`.acss-13gvf7m{cursor:pointer;border-radius:var(--ant-border-radius-sm);transition:color 0.15s ease;}`,`.acss-13gvf7m:hover{color:var(--ant-color-text);}`,`.acss-13gvf7m:focus-visible{outline:2px solid var(--ant-color-primary);outline-offset:2px;}`,`@media (prefers-reduced-motion: reduce){.acss-13gvf7m{transition:none;}}`],`
    cursor: pointer;
    border-radius: var(--ant-border-radius-sm);
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
  `),datasetLink:D(`acss-115s8km`,[`.acss-115s8km{color:inherit;text-decoration:none;}`,`.acss-115s8km:hover{color:var(--ant-color-primary);}`],`
    color: inherit;
    text-decoration: none;

    &:hover {
      color: var(--ant-color-primary);
    }
  `),headerBand:D(`acss-pseg9g`,[`.acss-pseg9g{padding:20px;border-radius:var(--ant-border-radius-lg);background:var(--ant-color-fill-quaternary);}`],`
    padding: 20px;
    border-radius: var(--ant-border-radius-lg);
    background: var(--ant-color-fill-quaternary);
  `),metaItem:D(`acss-7g9x8r`,[`.acss-7g9x8r{display:inline-flex;gap:6px;align-items:center;padding-block:4px;padding-inline:10px;border-radius:var(--ant-border-radius-sm);font-size:var(--ant-font-size);color:var(--ant-color-text-secondary);background:var(--ant-color-fill-tertiary);}`],`
    display: inline-flex;
    gap: 6px;
    align-items: center;

    padding-block: 4px;
    padding-inline: 10px;
    border-radius: var(--ant-border-radius-sm);

    font-size: var(--ant-font-size);
    color: var(--ant-color-text-secondary);

    background: var(--ant-color-fill-tertiary);
  `),metaLabel:D(`acss-1qvph1t`,[`.acss-1qvph1t{font-size:var(--ant-font-size-sm);color:var(--ant-color-text-tertiary);}`],`
    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-tertiary);
  `),metaRow:D(`acss-k4n328`,[`.acss-k4n328{flex-wrap:wrap;}`],`
    flex-wrap: wrap;
  `),modelText:D(`acss-jyo7mh`,[`.acss-jyo7mh{font-family:var(--ant-font-family-code);font-size:var(--ant-font-size-sm);color:var(--ant-color-text-secondary);}`],`
    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-secondary);
  `),runName:D(`acss-1nda8fi`,[`.acss-1nda8fi{margin:0;font-size:var(--ant-font-size-heading-3);font-weight:600;line-height:1.2;color:var(--ant-color-text);}`],`
    margin: 0;

    font-size: var(--ant-font-size-heading-3);
    font-weight: 600;
    line-height: 1.2;
    color: var(--ant-color-text);
  `)},fn=(0,dn.memo)(({run:e,benchmarkId:t,hideStart:r})=>{let{t:i}=n(`eval`),a=ot(),o=Re(),s=j(e=>e.abortRun),c=j(e=>e.deleteRun),l=j(e=>e.startRun),u=e.status===`running`||e.status===`pending`,p=e.status===`idle`||e.status===`failed`||e.status===`aborted`,[m,h]=(0,dn.useState)(!1),[_,v]=(0,dn.useState)(!1),y=e.config?.agentSnapshot,ee=e.targetAgent?.title||i(`run.detail.agent.unnamed`),te=y?.avatar||e.targetAgent?.avatar,b=y?.model||e.targetAgent?.model,x=y?.provider||e.targetAgent?.provider,re=()=>{ne({content:i(`run.actions.abort.confirm`),okButtonProps:{danger:!0},okText:i(`run.actions.abort`),onOk:()=>s(e.id),title:i(`run.actions.abort`)})},ie=()=>{ne({content:i(`run.actions.delete.confirm`),okButtonProps:{danger:!0},okText:i(`run.actions.delete`),onOk:async()=>{await c(e.id),a(`/eval/bench/${t}`)},title:i(`run.actions.delete`)})},w=()=>{ne({content:i(`run.actions.start.confirm`),okText:i(`run.actions.start`),onOk:async()=>{try{h(!0),await l(e.id,e.status!==`idle`)}catch(e){g.error(e?.message||`Failed to start run`)}finally{h(!1)}},title:i(`run.actions.start`)})},T=()=>{e.targetAgentId&&window.open(Ne(Ae(e.targetAgentId),o),`_blank`)};return(0,K.jsxs)(d,{gap:16,children:[(0,K.jsxs)(pt,{className:q.backLink,to:`/eval/bench/${t}`,children:[(0,K.jsx)(fe,{size:16}),i(`run.detail.backToBenchmark`)]}),(0,K.jsxs)(d,{className:q.headerBand,gap:16,children:[(0,K.jsxs)(d,{horizontal:!0,align:`flex-start`,gap:16,justify:`space-between`,children:[(0,K.jsxs)(d,{gap:10,style:{minWidth:0},children:[(0,K.jsxs)(d,{horizontal:!0,align:`center`,gap:12,children:[(0,K.jsx)(`h1`,{className:q.runName,children:e.name||e.id.slice(0,8)}),(0,K.jsx)(yt,{status:e.status}),(0,K.jsx)(C,{icon:Te,size:`small`,title:i(`run.detail.copyRunId`),onClick:async()=>{try{await qe(e.id),g.success(i(`run.detail.copyRunIdSuccess`))}catch{g.error(i(`run.detail.copyRunIdFailed`))}}})]}),(0,K.jsxs)(d,{horizontal:!0,align:`center`,className:q.metaRow,gap:8,children:[e.dataset&&(0,K.jsx)(pt,{className:q.datasetLink,target:`_blank`,to:`/eval/bench/${t}/datasets/${e.dataset.id}`,children:(0,K.jsx)(`span`,{className:q.metaItem,children:e.dataset.name})}),e.targetAgentId&&(0,K.jsx)(d,{horizontal:!0,align:`center`,className:q.agentLink,role:`button`,tabIndex:0,onClick:T,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),T())},children:(0,K.jsxs)(`span`,{className:q.metaItem,children:[(0,K.jsx)(S,{avatar:te,size:16}),ee]})}),b&&(0,K.jsx)(`span`,{className:q.metaItem,children:(0,K.jsxs)(`span`,{className:q.modelText,children:[x?`${x} / `:``,b]})}),e.createdAt&&(0,K.jsx)(`span`,{className:q.metaItem,children:(0,K.jsx)(`span`,{className:q.metaLabel,children:(e=>e?(e instanceof Date?e:new Date(e)).toLocaleString():``)(e.createdAt)})})]})]}),(0,K.jsxs)(d,{horizontal:!0,align:`center`,gap:8,style:{flexShrink:0},children:[p&&!r&&(0,K.jsx)(f,{icon:(0,K.jsx)(Ce,{size:14}),loading:m,type:`primary`,onClick:w,children:i(`run.actions.start`)}),(0,K.jsx)(C,{icon:_e,size:`small`,title:i(`run.actions.edit`),onClick:()=>Tt({run:e})}),u&&(0,K.jsx)(C,{icon:be,size:`small`,title:i(`run.actions.abort`),onClick:re}),(0,K.jsx)(C,{icon:Ee,size:`small`,title:i(`run.actions.delete`),onClick:ie})]})]}),(0,K.jsxs)(`button`,{className:q.configToggle,onClick:()=>v(!_),children:[_?(0,K.jsx)(De,{size:12}):(0,K.jsx)(Se,{size:12}),i(`run.detail.configSnapshot`)]}),_&&y&&(0,K.jsxs)(d,{gap:0,children:[y.systemRole&&(0,K.jsxs)(`div`,{className:q.configSection,children:[(0,K.jsx)(`div`,{className:q.configSectionLabel,children:`System Role`}),(0,K.jsx)(`div`,{className:q.systemRole,children:(0,K.jsx)(Ye,{variant:`chat`,children:y.systemRole})})]}),y.plugins&&y.plugins.length>0&&(0,K.jsxs)(`div`,{className:q.configSection,children:[(0,K.jsx)(`div`,{className:q.configSectionLabel,children:`Plugins`}),(0,K.jsx)(d,{horizontal:!0,gap:4,wrap:`wrap`,children:y.plugins.map(e=>(0,K.jsx)(Ze,{children:e},e))})]}),(y.chatConfig||y.params)&&(0,K.jsx)(`div`,{className:q.configSection,children:(0,K.jsxs)(d,{horizontal:!0,gap:12,children:[y.chatConfig&&(0,K.jsxs)(d,{flex:1,gap:0,style:{minWidth:0},children:[(0,K.jsx)(`div`,{className:q.configSectionLabel,children:`Chat Config`}),(0,K.jsx)(Me,{language:`json`,style:{fontSize:12,maxHeight:300,overflow:`auto`},variant:`filled`,children:JSON.stringify(y.chatConfig,null,2)})]}),y.params&&(0,K.jsxs)(d,{flex:1,gap:0,style:{minWidth:0},children:[(0,K.jsx)(`div`,{className:q.configSectionLabel,children:`Params`}),(0,K.jsx)(Me,{language:`json`,style:{fontSize:12,maxHeight:300,overflow:`auto`},variant:`filled`,children:JSON.stringify(y.params,null,2)})]})]})})]})]})]})})})),mn,J,Y,hn,gn=e((()=>{E(),_(),A(),Oe(),mn=t(o()),i(),J=t(s()),Y={center:D(`acss-op4f7v`,[`.acss-op4f7v{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;width:40px;height:40px;margin:auto;border-radius:999px;color:var(--ant-color-text-secondary);background:var(--ant-color-fill-tertiary);}`],`
    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    margin: auto;
    border-radius: 999px;

    color: var(--ant-color-text-secondary);

    background: var(--ant-color-fill-tertiary);
  `),container:D(`acss-18skfm0`,[`.acss-18skfm0{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;height:320px;}`],`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 320px;
  `),hint:D(`acss-1lim5gc`,[`.acss-1lim5gc{margin-block-start:24px;font-size:var(--ant-font-size);color:var(--ant-color-text-quaternary);}`],`
    margin-block-start: 24px;
    font-size: var(--ant-font-size);
    color: var(--ant-color-text-quaternary);
  `),icon:D(`acss-nlyjs`,[`.acss-nlyjs{position:absolute;transform:translate(-50%, -50%);display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:var(--ant-border-radius);}`],`
    position: absolute;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;
    border-radius: var(--ant-border-radius);
  `),icon1:D(`acss-amw6ro`,[`.acss-amw6ro{inset-block-start:15px;inset-inline-start:100px;color:var(--ant-geekblue);background:var(--ant-geekblue-1);}`],`
    inset-block-start: 15px;
    inset-inline-start: 100px;
    color: var(--ant-geekblue);
    background: var(--ant-geekblue-1);
  `),icon2:D(`acss-14xcbgp`,[`.acss-14xcbgp{inset-block-start:143px;inset-inline-start:174px;color:var(--ant-color-success);background:var(--ant-color-success-bg);}`],`
    inset-block-start: 143px;
    inset-inline-start: 174px;
    color: var(--ant-color-success);
    background: var(--ant-color-success-bg);
  `),icon3:D(`acss-1smhnms`,[`.acss-1smhnms{inset-block-start:143px;inset-inline-start:26px;color:var(--ant-purple);background:var(--ant-purple-1);}`],`
    inset-block-start: 143px;
    inset-inline-start: 26px;
    color: var(--ant-purple);
    background: var(--ant-purple-1);
  `),orbit:D(`acss-12lvp2e`,[`.acss-12lvp2e{position:absolute;inset:0;margin:auto;border:1px dashed var(--ant-color-border-secondary);border-radius:999px;}`],`
    position: absolute;
    inset: 0;

    margin: auto;
    border: 1px dashed var(--ant-color-border-secondary);
    border-radius: 999px;
  `),orbit1:D(`acss-xzythf`,[`.acss-xzythf{width:200px;height:200px;}`],`
    width: 200px;
    height: 200px;
  `),orbit2:D(`acss-1ebra7r`,[`.acss-1ebra7r{width:140px;height:140px;}`],`
    width: 140px;
    height: 140px;
  `),orbit3:D(`acss-1o94rjr`,[`.acss-1o94rjr{width:80px;height:80px;}`],`
    width: 80px;
    height: 80px;
  `),orbitGroup:D(`acss-lx4biv`,[`.acss-lx4biv{position:relative;width:200px;height:200px;animation:orbit-spin 20s linear infinite;}`,`@keyframes orbit-spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}`,`@media (prefers-reduced-motion: reduce){.acss-lx4biv{animation:none;}}`],`
    position: relative;
    width: 200px;
    height: 200px;

    @keyframes orbit-spin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    animation: orbit-spin 20s linear infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `),spinner:D(`acss-1jgc0xm`,[`.acss-1jgc0xm{animation:spin 1.5s linear infinite;}`,`@keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}`,`@media (prefers-reduced-motion: reduce){.acss-1jgc0xm{animation:none;}}`],`
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    animation: spin 1.5s linear infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `)},hn=(0,mn.memo)(()=>{let{t:e}=n(`eval`);return(0,J.jsxs)(`div`,{className:Y.container,children:[(0,J.jsxs)(`div`,{className:Y.orbitGroup,children:[(0,J.jsx)(`div`,{className:O(Y.orbit,Y.orbit1)}),(0,J.jsx)(`div`,{className:O(Y.orbit,Y.orbit2)}),(0,J.jsx)(`div`,{className:O(Y.orbit,Y.orbit3)}),(0,J.jsx)(`div`,{className:O(Y.icon,Y.icon1),children:(0,J.jsx)(h,{icon:ye,size:16})}),(0,J.jsx)(`div`,{className:O(Y.icon,Y.icon2),children:(0,J.jsx)(h,{icon:xe,size:16})}),(0,J.jsx)(`div`,{className:O(Y.icon,Y.icon3),children:(0,J.jsx)(h,{icon:ve,size:16})}),(0,J.jsx)(`div`,{className:Y.center,children:(0,J.jsx)(h,{className:Y.spinner,icon:ke,size:18})})]}),(0,J.jsx)(`div`,{className:Y.hint,children:e(`run.running.hint`)})]})})})),_n,X,Z,vn,yn=e((()=>{E(),We(),x(),_(),v(),A(),Oe(),_n=t(o()),i(),bt(),X=t(s()),Z={card:D(`acss-9c083a`,[`.acss-9c083a{padding:16px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius);}`],`
    padding: 16px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius);
  `),grid:D(`acss-1xb8vsw`,[`.acss-1xb8vsw{display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:16px;}`],`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  `),hero:D(`acss-pseg9g`,[`.acss-pseg9g{padding:20px;border-radius:var(--ant-border-radius-lg);background:var(--ant-color-fill-quaternary);}`],`
    padding: 20px;
    border-radius: var(--ant-border-radius-lg);
    background: var(--ant-color-fill-quaternary);
  `),heroValue:D(`acss-17z3oqy`,[`.acss-17z3oqy{font-family:var(--ant-font-family-code);font-size:var(--ant-font-size-heading-1);font-weight:600;line-height:1;color:var(--ant-color-text);}`],`
    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size-heading-1);
    font-weight: 600;
    line-height: 1;
    color: var(--ant-color-text);
  `),iconBox:D(`acss-pypl08`,[`.acss-pypl08{display:flex;flex-shrink:0;align-items:center;justify-content:center;width:36px;height:36px;border-radius:var(--ant-border-radius);}`],`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;
    border-radius: var(--ant-border-radius);
  `),label:D(`acss-1qvph1t`,[`.acss-1qvph1t{font-size:var(--ant-font-size-sm);color:var(--ant-color-text-tertiary);}`],`
    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-tertiary);
  `),progressFill:D(`acss-dvbm7e`,[`.acss-dvbm7e{height:100%;border-radius:999px;background:var(--ant-color-success);transition:width 0.3s ease;}`,`@media (prefers-reduced-motion: reduce){.acss-dvbm7e{transition:none;}}`],`
    height: 100%;
    border-radius: 999px;
    background: var(--ant-color-success);
    transition: width 0.3s ease;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `),progressTrack:D(`acss-n0ar8o`,[`.acss-n0ar8o{overflow:hidden;width:100%;height:8px;border-radius:999px;background:var(--ant-color-fill-secondary);}`],`
    overflow: hidden;

    width: 100%;
    height: 8px;
    border-radius: 999px;

    background: var(--ant-color-fill-secondary);
  `),subtitle:D(`acss-1t3cvw0`,[`.acss-1t3cvw0{font-size:var(--ant-font-size);color:var(--ant-color-text-secondary);}`],`
    font-size: var(--ant-font-size);
    color: var(--ant-color-text-secondary);
  `),subtitleUnit:D(`acss-1qvph1t`,[`.acss-1qvph1t{font-size:var(--ant-font-size-sm);color:var(--ant-color-text-tertiary);}`],`
    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-tertiary);
  `),value:D(`acss-16qdoq4`,[`.acss-16qdoq4{font-family:var(--ant-font-family-code);font-size:var(--ant-font-size-heading-3);font-weight:600;color:var(--ant-color-text);}`],`
    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size-heading-3);
    font-weight: 600;
    color: var(--ant-color-text);
  `)},vn=(0,_n.memo)(({metrics:e})=>{let{t}=n(`eval`),r=e?.passedCases??0,i=e?.totalCases??0,a=e?.passRate!==void 0,o=a?Math.round((e?.passRate??0)*100):0,s=[{bgColor:k.colorWarningBg,color:k.colorWarning,icon:ge,label:t(`run.metrics.duration`),subtitle:e?.totalDuration!==void 0&&i>0?(0,X.jsxs)(X.Fragment,{children:[`~`,xt(e.totalDuration/i),` `,(0,X.jsx)(`span`,{className:Z.subtitleUnit,children:t(`run.metrics.perCase`)})]}):void 0,value:e?.duration===void 0?`-`:xt(e.duration)},{bgColor:k.colorPrimaryBg,color:k.colorPrimary,icon:pe,label:t(`run.metrics.cost`),subtitle:e?.perCaseCost===void 0?void 0:(0,X.jsxs)(X.Fragment,{children:[`~$`,ze(e.perCaseCost),` `,(0,X.jsx)(`span`,{className:Z.subtitleUnit,children:t(`run.metrics.perCase`)})]}),value:e?.totalCost===void 0?`-`:`$${ze(e.totalCost)}`},{bgColor:k.colorInfoBg,color:k.colorInfo,icon:we,label:t(`run.metrics.tokens`),subtitle:e?.perCaseTokens===void 0?void 0:(0,X.jsxs)(X.Fragment,{children:[`~`,Le(Math.round(e.perCaseTokens)),` `,(0,X.jsx)(`span`,{className:Z.subtitleUnit,children:t(`run.metrics.perCase`)})]}),value:e?.totalTokens===void 0?`-`:Le(e.totalTokens)}];return(0,X.jsxs)(d,{gap:16,children:[(0,X.jsxs)(d,{className:Z.hero,gap:16,children:[(0,X.jsxs)(d,{horizontal:!0,align:`flex-end`,gap:16,justify:`space-between`,children:[(0,X.jsxs)(d,{gap:6,children:[(0,X.jsxs)(d,{horizontal:!0,align:`center`,gap:8,children:[(0,X.jsx)(`div`,{className:Z.iconBox,style:{background:k.colorSuccessBg},children:(0,X.jsx)(h,{icon:he,size:16,style:{color:k.colorSuccess}})}),(0,X.jsx)(`span`,{className:Z.label,children:t(`run.metrics.passRate`)})]}),(0,X.jsx)(`span`,{className:Z.heroValue,children:a?`${o}%`:`-`})]}),i>0&&(0,X.jsxs)(te,{className:Z.subtitle,children:[r,`/`,i,` `,(0,X.jsx)(`span`,{className:Z.subtitleUnit,children:t(`table.filter.passed`)})]})]}),a&&i>0&&(0,X.jsx)(`div`,{className:Z.progressTrack,children:(0,X.jsx)(`div`,{className:Z.progressFill,style:{width:`${o}%`}})})]}),(0,X.jsx)(`div`,{className:Z.grid,children:s.map(e=>(0,X.jsxs)(d,{horizontal:!0,align:`center`,className:Z.card,gap:12,children:[(0,X.jsx)(`div`,{className:Z.iconBox,style:{background:e.bgColor},children:(0,X.jsx)(h,{icon:e.icon,size:16,style:{color:e.color}})}),(0,X.jsxs)(d,{gap:2,children:[(0,X.jsx)(`span`,{className:Z.label,children:e.label}),(0,X.jsx)(`span`,{className:Z.value,children:e.value}),e.subtitle&&(0,X.jsx)(`span`,{className:Z.subtitle,children:e.subtitle})]})]},e.label))})]})})})),bn,Q,xn,$,Sn;e((()=>{E(),x(),p(),ct(),v(),ue(),Oe(),bn=t(o()),i(),c(),mt(),Fe(),_t(),Ft(),qt(),rn(),sn(),un(),Rt(),pn(),gn(),yn(),Q=t(s()),xn=3e3,$={panel:D(`acss-aqr4ua`,[`.acss-aqr4ua{overflow:hidden;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);background:var(--ant-color-bg-container);}`],`
    overflow: hidden;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);
    background: var(--ant-color-bg-container);
  `),panelBody:D(`acss-1ieos1r`,[`.acss-1ieos1r{display:flex;flex-direction:column;gap:20px;padding:20px;}`],`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  `),panelHeader:D(`acss-1gc96nu`,[`.acss-1gc96nu{display:flex;gap:12px;align-items:center;justify-content:space-between;padding-block:12px;padding-inline:20px;border-block-end:1px solid var(--ant-color-border-secondary);}`],`
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: space-between;

    padding-block: 12px;
    padding-inline: 20px;
    border-block-end: 1px solid var(--ant-color-border-secondary);
  `),panelLabel:D(`acss-a9xmeq`,[`.acss-a9xmeq{font-size:var(--ant-font-size-sm);font-weight:500;color:var(--ant-color-text-secondary);}`],`
    font-size: var(--ant-font-size-sm);
    font-weight: 500;
    color: var(--ant-color-text-secondary);
  `),stateBody:D(`acss-rbzmu8`,[`.acss-rbzmu8{display:flex;align-items:center;justify-content:center;min-height:430px;padding:20px;}`],`
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 430px;
    padding: 20px;
  `)},Sn=(0,bn.memo)(()=>{let{t:e}=n(`eval`),{benchmarkId:t,runId:r}=l(),i=j(e=>e.useFetchRunDetail),a=j(e=>e.useFetchRunResults),o=j(e=>e.retryRunErrors),s=j(e=>e.retryRunCase),c=j(e=>e.resumeRunCase),u=j(e=>e.batchResumeRunCases),p=j(gt.getRunDetailById(r)),m=j(gt.getRunResultsById(r)),h=j(gt.isRunActive(r)),[g,_]=(0,bn.useState)(!1),v={refreshInterval:h?xn:0},{error:y,isLoading:ee,mutate:b}=i(r,v);a(r,v);let x=!!m?.results?.length,S=p?.status===`completed`||p?.status===`failed`||p?.status===`aborted`,re=p?.metrics,ie=re?.completedCases??0,C=re?.totalCases??0,w=C>0?Math.round(ie/C*100):0,T=C>0&&w<100,oe=(re?.errorCases??0)+(re?.timeoutCases??0),se=S&&oe>0,ce=p?.config?.k??1,le=(m?.results??[]).some(e=>!!Lt(e,ce));return(0,Q.jsx)(ht,{data:p,error:y,errorVariant:`page`,isEmpty:!p,isLoading:ee,loading:(0,Q.jsx)(Ke,{}),onRetry:()=>b(),children:p&&(0,Q.jsxs)(d,{gap:24,padding:24,style:{margin:`0 auto`,maxWidth:1440,width:`100%`},children:[(0,Q.jsx)(fn,{benchmarkId:t,hideStart:p.status===`idle`,run:p}),S?(0,Q.jsxs)(`section`,{className:$.panel,children:[(0,Q.jsx)(`header`,{className:$.panelHeader,children:(0,Q.jsx)(`span`,{className:$.panelLabel,children:e(`run.detail.report`)})}),(0,Q.jsxs)(`div`,{className:$.panelBody,children:[(0,Q.jsx)(vn,{metrics:p.metrics??void 0}),x&&(0,Q.jsx)(nn,{benchmarkId:t,results:m.results,runId:r})]})]}):(0,Q.jsxs)(`section`,{className:$.panel,children:[(0,Q.jsx)(`header`,{className:$.panelHeader,children:(0,Q.jsx)(`span`,{className:$.panelLabel,children:e(`run.detail.report`)})}),(0,Q.jsx)(`div`,{className:$.stateBody,children:p.status===`running`?(0,Q.jsx)(hn,{}):p.status===`pending`?(0,Q.jsx)(ln,{hint:e(`run.pending.hint`)}):p.status===`external`?(0,Q.jsx)(ln,{hint:e(`run.external.hint`)}):(0,Q.jsx)(on,{run:p})})]}),x&&(0,Q.jsxs)(`section`,{className:$.panel,children:[(0,Q.jsxs)(`header`,{className:$.panelHeader,children:[(0,Q.jsx)(`span`,{className:$.panelLabel,children:e(`run.detail.caseResults`)}),(T||se||le)&&(0,Q.jsxs)(d,{horizontal:!0,align:`center`,gap:8,children:[T&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(te,{fontSize:12,style:{whiteSpace:`nowrap`},type:`secondary`,children:[ie,`/`,C,` `,e(`run.detail.progressCases`)]}),(0,Q.jsx)(ae,{percent:w,showInfo:!1,size:`small`,status:h?`active`:void 0,style:{margin:0,width:120}}),(0,Q.jsxs)(te,{fontSize:12,type:`secondary`,children:[w,`%`]})]}),le&&(0,Q.jsx)(f,{icon:(0,Q.jsx)(Ce,{size:14}),size:`small`,onClick:()=>Pt({onConfirm:e=>u(r,e),runId:r}),children:e(`run.actions.batchResume`)}),se&&(0,Q.jsx)(f,{icon:(0,Q.jsx)(me,{size:14}),loading:g,size:`small`,onClick:()=>{ne({content:e(`run.actions.retryErrors.confirm`),onOk:async()=>{_(!0);try{await o(r)}finally{_(!1)}},title:e(`run.actions.retryErrors`)})},children:e(`run.actions.retryErrors`)})]})]}),(0,Q.jsx)(Kt,{benchmarkId:t,k:ce,results:m.results,runId:r,runStatus:p.status,onResumeCase:(e,t)=>c(r,e,t),onRetryCase:e=>s(r,e)})]})]})})})}))();export{Sn as default};