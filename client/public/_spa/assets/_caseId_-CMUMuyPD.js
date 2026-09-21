import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a,i as o,v as s}from"../vendor/vendor-react-B9HSWrpN.js";import{B as c,Kt as l,at as u,it as d,qt as f,z as p}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Ad as m,Av as h,Bp as g,Hm as _,gu as v,ig as y,og as b,t as x}from"../vendor/vendor-icons-vienkZi5.js";import{t as S}from"./Highlighter-BL3jikMb.js";import{Ct as C,FD as w,Hd as T,ID as E,Ld as D,cD as O,gu as k,hF as A,sD as j,uF as M,xt as ee}from"./index-w64_zsxD.js";import{n as te,t as N}from"./Tag-C95BKTI7.js";import{t as ne}from"./_virtual_lobe-ui-named__Highlighter-B839w3AL.js";import{n as re,t as ie}from"./Tabs-DH_wa3T6.js";import{kt as ae,n as oe,t as se}from"./Messages-DmeZ4Iq1.js";import{n as ce,t as le}from"./useWorkspaceAwareNavigate-BbajQ7ta.js";import{f as ue,t as de}from"./Conversation-CBWduYtr.js";import{n as fe,t as pe}from"./AsyncBoundary-K-esguw4.js";import{n as me,t as he}from"./useInitAgentConfig-DFVcpomI.js";import{a as P,r as F,t as ge}from"./eval-DXsdohMt.js";import{n as _e,t as ve}from"./SegmentBar-DmHTelyR.js";var I,L,R,z,ye=e((()=>{w(),k(),f(),c(),u(),x(),I=t(i()),r(),L=t(a()),R={backLink:E(`acss-htbofw`,[`.acss-htbofw{cursor:pointer;align-self:flex-start;border-radius:var(--ant-border-radius-sm);color:var(--ant-color-text-tertiary);transition:color 0.15s ease;}`,`.acss-htbofw:hover{color:var(--ant-color-text);}`,`.acss-htbofw:focus-visible{outline:2px solid var(--ant-color-primary);outline-offset:2px;}`,`@media (prefers-reduced-motion: reduce){.acss-htbofw{transition:none;}}`],`
    cursor: pointer;

    align-self: flex-start;

    border-radius: var(--ant-border-radius-sm);

    color: var(--ant-color-text-tertiary);

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
  `),header:E(`acss-1g7tyk4`,[`.acss-1g7tyk4{padding-block:16px;padding-inline:16px;border-block-end:1px solid var(--ant-color-border-secondary);}`],`
    padding-block: 16px;
    padding-inline: 16px;
    border-block-end: 1px solid var(--ant-color-border-secondary);
  `),metricCard:E(`acss-12o3a8p`,[`.acss-12o3a8p{gap:8px;padding-block:8px;padding-inline:8px 16px;border-radius:var(--ant-border-radius-sm);font-size:var(--ant-font-size-sm);background:var(--ant-color-bg-container);}`],`
    gap: 8px;

    padding-block: 8px;
    padding-inline: 8px 16px;
    border-radius: var(--ant-border-radius-sm);

    font-size: var(--ant-font-size-sm);

    background: var(--ant-color-bg-container);
  `),metricIcon:E(`acss-1yn0zmf`,[`.acss-1yn0zmf{display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:var(--ant-border-radius-sm);color:var(--ant-color-text-tertiary);background:var(--ant-color-fill-tertiary);}`],`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;
    border-radius: var(--ant-border-radius-sm);

    color: var(--ant-color-text-tertiary);

    background: var(--ant-color-fill-tertiary);
  `),metricLabel:E(`acss-evngr4`,[`.acss-evngr4{font-size:var(--ant-font-size-sm);line-height:1;color:var(--ant-color-text-tertiary);}`],`
    font-size: var(--ant-font-size-sm);
    line-height: 1;
    color: var(--ant-color-text-tertiary);
  `),metricValue:E(`acss-1v3qy92`,[`.acss-1v3qy92{font-family:var(--ant-font-family-code);font-size:var(--ant-font-size);font-weight:500;line-height:1.4;color:var(--ant-color-text);}`],`
    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size);
    font-weight: 500;
    line-height: 1.4;
    color: var(--ant-color-text);
  `)},z=(0,I.memo)(({caseNumber:e,runName:t,evalResult:r,onBack:i,onPrev:a,onNext:o})=>{let{t:s}=n(`eval`),c=[{icon:_,label:s(`caseDetail.duration`),value:r?.duration==null?null:`${(r.duration/1e3).toFixed(1)}s`},{icon:m,label:s(`caseDetail.steps`),value:r?.steps==null?null:String(r.steps)},{icon:g,label:s(`caseDetail.cost`),value:r?.cost==null?null:`$${D(r.cost)}`},{icon:v,label:s(`caseDetail.tokens`),value:r?.tokens==null?null:T(r.tokens)}].filter(e=>e.value!==null);return(0,L.jsxs)(l,{className:R.header,gap:16,children:[(0,L.jsxs)(l,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,L.jsxs)(l,{gap:4,children:[(0,L.jsxs)(l,{horizontal:!0,align:`center`,className:R.backLink,gap:4,role:`button`,tabIndex:0,onClick:i,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),i())},children:[(0,L.jsx)(h,{size:12}),(0,L.jsx)(d,{fontSize:12,children:t})]}),(0,L.jsxs)(d,{as:`h4`,style:{fontSize:20,margin:0},weight:600,children:[`#`,e]})]}),(0,L.jsxs)(l,{horizontal:!0,align:`center`,gap:8,children:[(0,L.jsx)(p,{disabled:!a,icon:b,size:`small`,onClick:a}),(0,L.jsx)(p,{disabled:!o,icon:y,size:`small`,onClick:o})]})]}),c.length>0&&(0,L.jsx)(l,{horizontal:!0,align:`center`,gap:8,wrap:`wrap`,children:c.map(e=>(0,L.jsxs)(l,{horizontal:!0,align:`center`,className:R.metricCard,children:[(0,L.jsx)(`div`,{className:R.metricIcon,children:(0,L.jsx)(e.icon,{size:14})}),(0,L.jsxs)(l,{gap:0,children:[(0,L.jsx)(`span`,{className:R.metricLabel,children:e.label}),(0,L.jsx)(`span`,{className:R.metricValue,children:e.value})]})]},e.label))})]})})})),B,V,H,U,be=e((()=>{w(),f(),u(),B=t(i()),r(),de(),oe(),he(),V=t(a()),H={header:E(`acss-1q80zeq`,[`.acss-1q80zeq{flex:none;padding-block:12px;padding-inline:16px;border-block-end:1px solid var(--ant-color-border-secondary);}`],`
    flex: none;
    padding-block: 12px;
    padding-inline: 16px;
    border-block-end: 1px solid var(--ant-color-border-secondary);
  `),scroll:E(`acss-kpbtiq`,[`.acss-kpbtiq{position:relative;overflow:hidden auto;flex:1;}`],`
    position: relative;
    overflow: hidden auto;
    flex: 1;
  `)},U=(0,B.memo)(({agentId:e,topicId:t,threadId:r})=>{let{t:i}=n(`eval`);me(e);let a=(0,B.useCallback)((e,t)=>(0,V.jsx)(se,{disableEditing:!0,id:t,index:e}),[]),o=r?`${t}-${r}`:t;return(0,V.jsx)(ae,{context:{agentId:e,threadId:r,topicId:t},children:(0,V.jsxs)(l,{flex:1,style:{minWidth:0,overflow:`hidden`},children:[(0,V.jsx)(l,{className:H.header,children:(0,V.jsx)(d,{fontSize:12,type:`secondary`,weight:500,children:i(`caseDetail.chatArea.title`)})}),(0,V.jsx)(l,{className:H.scroll,onContextMenu:e=>e.preventDefault(),children:(0,V.jsx)(ue,{disableActionsBar:!0,itemContent:a})})]})},o)})})),W,G,K,q,J,Y,X,Z,xe=e((()=>{w(),k(),f(),ne(),O(),te(),u(),M(),W=t(i()),r(),_e(),G=t(a()),K={container:E(`acss-x5sk0y`,[`.acss-x5sk0y{border-inline-start:1px solid var(--ant-color-border-secondary);background:var(--ant-color-bg-container);}`],`
    border-inline-start: 1px solid var(--ant-color-border-secondary);
    background: var(--ant-color-bg-container);
  `),copyBlock:E(`acss-megkfb`,[`.acss-megkfb{font-size:var(--ant-font-size);line-height:1.5;color:var(--ant-color-text);}`],`
    font-size: var(--ant-font-size);
    line-height: 1.5;
    color: var(--ant-color-text);
  `),infoItem:E(`acss-10pxuzv`,[`.acss-10pxuzv{display:flex;align-items:center;justify-content:space-between;padding-block:4px;padding-inline:0;}`],`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-block: 4px;
    padding-inline: 0;
  `),infoLabel:E(`acss-1t3cvw0`,[`.acss-1t3cvw0{font-size:var(--ant-font-size);color:var(--ant-color-text-secondary);}`],`
    font-size: var(--ant-font-size);
    color: var(--ant-color-text-secondary);
  `),infoValue:E(`acss-m31zlg`,[`.acss-m31zlg{font-family:var(--ant-font-family-code);font-size:var(--ant-font-size);color:var(--ant-color-text);}`],`
    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size);
    color: var(--ant-color-text);
  `),scoreCard:E(`acss-17f1pcb`,[`.acss-17f1pcb{padding:12px;border-radius:var(--ant-border-radius);background:var(--ant-color-fill-quaternary);}`],`
    padding: 12px;
    border-radius: var(--ant-border-radius);
    background: var(--ant-color-fill-quaternary);
  `),scoreValue:E(`acss-1k00sv7`,[`.acss-1k00sv7{font-family:var(--ant-font-family-code);font-size:var(--ant-font-size-heading-3);font-weight:600;line-height:1;color:var(--ant-color-text);}`],`
    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size-heading-3);
    font-weight: 600;
    line-height: 1;
    color: var(--ant-color-text);
  `),section:E(`acss-1ykkfh`,[`.acss-1ykkfh{padding-block-end:16px;border-block-end:1px solid var(--ant-color-border-secondary);}`],`
    padding-block-end: 16px;
    border-block-end: 1px solid var(--ant-color-border-secondary);
  `),rubricName:E(`acss-d3d0yw`,[`.acss-d3d0yw{font-size:var(--ant-font-size);font-weight:500;}`],`
    font-size: var(--ant-font-size);
    font-weight: 500;
  `),rubricReason:E(`acss-17tnxpp`,[`.acss-17tnxpp{font-size:var(--ant-font-size-sm);line-height:1.5;color:var(--ant-color-text-secondary);}`],`
    font-size: var(--ant-font-size-sm);
    line-height: 1.5;
    color: var(--ant-color-text-secondary);
  `),rubricScore:E(`acss-jyo7mh`,[`.acss-jyo7mh{font-family:var(--ant-font-family-code);font-size:var(--ant-font-size-sm);color:var(--ant-color-text-secondary);}`],`
    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-secondary);
  `)},q=new Set([`equals`,`contains`,`regex`,`starts-with`,`ends-with`,`any-of`,`numeric`,`extract-match`,`json-schema`,`javascript`,`python`]),J=(0,W.memo)(({children:e})=>(0,G.jsx)(d,{fontSize:12,type:`secondary`,weight:500,children:e})),Y=e=>e.replace(/^eval-mode-/,``),X=e=>q.has(Y(e)),Z=(0,W.memo)(({testCase:e,evalResult:t,passed:r,score:i})=>{let{t:a}=n(`eval`),o=t?.rubricScores,s=o&&o.length>0,c=s&&o.every(e=>X(e.rubricId)),u=s?o.filter(e=>!X(e.rubricId)):[],f=i!=null,p=f?Math.max(0,Math.min(100,Math.round(i*100))):0;return(0,G.jsxs)(l,{className:K.container,gap:16,padding:16,style:{height:`100%`,overflowY:`auto`,width:320},children:[t?.error&&(0,G.jsxs)(l,{className:K.section,gap:8,children:[(0,G.jsx)(J,{children:a(`caseDetail.failureReason`)}),(0,G.jsx)(d,{className:K.copyBlock,type:`danger`,children:t.error})]}),(0,G.jsxs)(l,{className:K.section,gap:12,children:[(0,G.jsx)(J,{children:a(`caseDetail.section.testCase`)}),e?.content?.input&&(0,G.jsxs)(l,{gap:4,children:[(0,G.jsx)(d,{fontSize:12,type:`secondary`,children:a(`caseDetail.input`)}),(0,G.jsx)(d,{className:K.copyBlock,children:e.content.input})]}),e?.content?.expected&&(0,G.jsxs)(l,{gap:4,children:[(0,G.jsx)(d,{fontSize:12,type:`secondary`,children:a(`caseDetail.expected`)}),(0,G.jsx)(d,{className:K.copyBlock,children:e.content.expected})]}),e?.metadata?.difficulty&&(0,G.jsxs)(l,{gap:4,children:[(0,G.jsx)(d,{fontSize:12,type:`secondary`,children:a(`caseDetail.difficulty`)}),(0,G.jsx)(l,{horizontal:!0,children:(0,G.jsx)(N,{children:a(`difficulty.${e.metadata.difficulty}`)})})]})]}),(s||i!==void 0)&&(0,G.jsxs)(l,{className:K.section,gap:12,children:[(0,G.jsx)(J,{children:a(`caseDetail.section.scoring`)}),c&&s&&(0,G.jsxs)(`div`,{className:K.infoItem,children:[(0,G.jsx)(`span`,{className:K.infoValue,children:a(`evalMode.${Y(o[0].rubricId)}`)}),(0,G.jsx)(N,{color:r?`success`:`error`,children:a(r?`table.filter.passed`:`table.filter.failed`)})]}),!c&&(0,G.jsxs)(G.Fragment,{children:[f&&(0,G.jsxs)(l,{className:K.scoreCard,gap:8,children:[(0,G.jsxs)(l,{horizontal:!0,align:`flex-end`,gap:8,justify:`space-between`,children:[(0,G.jsx)(`span`,{className:K.scoreValue,children:i.toFixed(2)}),(0,G.jsx)(d,{fontSize:12,type:`secondary`,children:a(`caseDetail.score`)})]}),(0,G.jsx)(ve,{segments:[{color:r?A.colorSuccess:A.colorError,value:p},{color:A.colorFillSecondary,value:100-p}]})]}),u.length>0&&(0,G.jsx)(j,{defaultValue:[],styles:{trigger:{paddingInline:12}},items:u.map(e=>({children:e.reason?(0,G.jsx)(`span`,{className:K.rubricReason,children:e.reason}):null,key:e.rubricId,title:(0,G.jsxs)(l,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,G.jsx)(`span`,{className:K.rubricName,children:a(`evalMode.${Y(e.rubricId)}`)}),(0,G.jsxs)(`span`,{className:K.rubricScore,children:[(e.score*100).toFixed(0),`%`]})]})}))})]})]}),(0,G.jsxs)(l,{gap:8,children:[(0,G.jsx)(J,{children:a(`caseDetail.section.runtime`)}),t?.duration!==void 0&&t.duration!==null&&(0,G.jsxs)(`div`,{className:K.infoItem,children:[(0,G.jsx)(`span`,{className:K.infoLabel,children:a(`caseDetail.duration`)}),(0,G.jsxs)(`span`,{className:K.infoValue,children:[(t.duration/1e3).toFixed(1),`s`]})]}),t?.steps!==void 0&&t.steps!==null&&(0,G.jsxs)(`div`,{className:K.infoItem,children:[(0,G.jsx)(`span`,{className:K.infoLabel,children:a(`caseDetail.steps`)}),(0,G.jsx)(`span`,{className:K.infoValue,children:t.steps})]}),t?.cost!==void 0&&t.cost!==null&&(0,G.jsxs)(`div`,{className:K.infoItem,children:[(0,G.jsx)(`span`,{className:K.infoLabel,children:a(`caseDetail.cost`)}),(0,G.jsxs)(`span`,{className:K.infoValue,children:[`$`,D(t.cost)]})]}),t?.tokens!==void 0&&t.tokens!==null&&(0,G.jsxs)(`div`,{className:K.infoItem,children:[(0,G.jsx)(`span`,{className:K.infoLabel,children:a(`caseDetail.tokens`)}),(0,G.jsx)(`span`,{className:K.infoValue,children:T(t.tokens)})]}),t?.completionReason&&(0,G.jsxs)(`div`,{className:K.infoItem,children:[(0,G.jsx)(`span`,{className:K.infoLabel,children:a(`caseDetail.completionReason`)}),(0,G.jsx)(N,{children:t.completionReason})]})]}),t?.externalResult&&(0,G.jsxs)(l,{gap:8,children:[(0,G.jsx)(J,{children:a(`caseDetail.section.externalResult`)}),(0,G.jsx)(S,{wrap:!0,actionIconSize:`small`,language:`json`,style:{fontSize:12,maxHeight:360,overflow:`auto`},variant:`filled`,children:JSON.stringify(t.externalResult,null,2)})]})]})})})),Q,$,Se,Ce;e((()=>{f(),re(),M(),Q=t(i()),r(),o(),fe(),C(),le(),ge(),ye(),be(),xe(),$=t(a()),Se=3e3,Ce=(0,Q.memo)(()=>{let{benchmarkId:e,runId:t,caseId:r}=s(),{t:i}=n(`eval`),a=ce(),o=F(e=>e.useFetchRunDetail),c=F(e=>e.useFetchRunResults),u={refreshInterval:F(P.isRunActive(t))?Se:0};o(t,u);let{data:d,error:f,isLoading:p,mutate:m}=c(t,u),h=F(P.getRunDetailById(t)),g=F(P.getRunResultsById(t)),[_,v]=(0,Q.useState)(null);(0,Q.useEffect)(()=>{g?.results&&v(g.results.find(e=>e.testCaseId===r))},[g,r]);let{prevCaseId:y,nextCaseId:b}=(0,Q.useMemo)(()=>{if(!g?.results||!r)return{};let e=g.results,t=e.findIndex(e=>e.testCaseId===r);return t<0?{}:{nextCaseId:t<e.length-1?e[t+1].testCaseId:void 0,prevCaseId:t>0?e[t-1].testCaseId:void 0}},[g,r]),x=_?.evalResult?.threads,S=x&&x.length>1,[C,w]=(0,Q.useState)(null);(0,Q.useEffect)(()=>{w(S?x[0].threadId:null)},[_?.testCaseId]);let T=(0,Q.useMemo)(()=>C?x?.find(e=>e.threadId===C):void 0,[C,x]),E=_?.topicId,D=_?.topic?.agentId,O=`/eval/bench/${e}/runs/${t}/cases`,k=T||_?.evalResult,j=T?T.passed:_?.passed,M=T?T.score:_?.score;return(0,$.jsx)(pe,{data:d,error:f,errorVariant:`page`,isEmpty:!_,isLoading:p,loading:(0,$.jsx)(ee,{}),onRetry:()=>m(),children:_&&(0,$.jsxs)(l,{height:`100%`,style:{overflow:`hidden`},children:[(0,$.jsx)(z,{caseNumber:(_.testCase?.sortOrder??0)+1,evalResult:k,runName:h?.name||t.slice(0,8),onBack:()=>a(`/eval/bench/${e}/runs/${t}`),onNext:b?()=>a(`${O}/${b}`):void 0,onPrev:y?()=>a(`${O}/${y}`):void 0}),S&&(0,$.jsx)(l,{paddingInline:16,style:{borderBlockEnd:`1px solid ${A.colorBorderSecondary}`,flex:`none`},children:(0,$.jsx)(ie,{activeKey:C,items:x.map((e,t)=>({key:e.threadId,label:i(`caseDetail.threads.attempt`,{number:t+1})})),onChange:e=>w(e)})}),(0,$.jsxs)(l,{horizontal:!0,flex:1,style:{overflow:`hidden`},children:[E&&D?(0,$.jsx)(U,{agentId:D,threadId:C??void 0,topicId:E}):(0,$.jsx)(l,{flex:1}),(0,$.jsx)(Z,{evalResult:k,passed:j,score:M,testCase:_.testCase})]})]})})})}))();export{Ce as default};