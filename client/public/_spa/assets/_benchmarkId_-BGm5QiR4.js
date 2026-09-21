import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,V as r,j as i,z as a}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as o,T as s,i as c,v as l}from"../vendor/vendor-react-B9HSWrpN.js";import{B as u,Bt as d,Kt as f,Mt as p,Nt as m,S as h,Vt as g,Xn as _,Yn as v,Zn as y,at as b,it as x,m as ee,qt as S,v as C,z as te}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Et as w,et as T,r as E}from"../vendor/vendor-antd-BWSxhuJE.js";import{Ah as ne,Ap as re,Hm as ie,Hr as D,Kt as ae,Ma as oe,Mn as se,Of as ce,Op as le,P as ue,Xp as de,bc as fe,bd as pe,ct as me,ft as he,fy as ge,ga as _e,gl as ve,ig as ye,mt as be,o as xe,ov as Se,t as O,ua as Ce,ug as we,w as Te,wg as Ee,wv as De}from"../vendor/vendor-icons-vienkZi5.js";import{Ct as Oe,Dn as ke,En as k,FD as A,ID as j,Ld as Ae,MA as je,Xf as Me,gu as Ne,hF as M,uF as N,xt as Pe}from"./index-w64_zsxD.js";import{n as Fe,t as Ie}from"./DropdownMenu-1ae8j9bI.js";import{n as Le,t as Re}from"./Tag-C95BKTI7.js";import{n as ze,t as Be}from"./NeuralNetworkLoading-DiI77SUR.js";import{n as Ve,t as He}from"./TextArea-D_Rfq5JU.js";import{n as Ue,t as We}from"./Input-gdUxluEJ.js";import{t as Ge}from"./_virtual_lobe-ui-named_base-ui_useModalContext-CvZy-G5G.js";import{n as Ke,t as qe}from"./Select-C0UJO2yB.js";import{n as Je,t as Ye}from"./AsyncError-B3Va32IA.js";import{n as Xe,t as Ze}from"./useWorkspaceAwareNavigate-BbajQ7ta.js";import{t as Qe}from"./_virtual_lobe-ui-named_base-ui_confirmModal-B6WREEdZ.js";import{n as $e,t as et}from"./agentEval-DqhUvTHo.js";import{n as tt,t as nt}from"./WorkspaceLink-CS4ZDv1a.js";import{a as rt,r as P,t as F}from"./eval-DXsdohMt.js";import{i as it,r as at}from"./StatusBadge-DcsxSiG-.js";import{n as ot,t as st}from"./Sparkline-D_2jsBHw.js";import{n as ct,r as lt,t as ut}from"./utils-DH01phU5.js";import{a as dt,c as ft,d as pt,f as mt,h as ht,i as gt,l as _t,m as vt,n as yt,o as bt,p as I,r as xt,s as St,t as Ct,u as wt}from"./RunCard-C7412K8u.js";import{n as Tt,t as Et}from"./RunCreateModal-DKmnjAkz.js";import{n as Dt,t as Ot}from"./RunEditModal-BIG6Rfe2.js";var kt,L,At,jt,Mt=e((()=>{Ue(),Ve(),Ke(),je(),Ge(),E(),N(),kt=t(o()),i(),F(),L=t(s()),At=e=>e.trim().toLowerCase().replaceAll(/\s+/g,`-`).replaceAll(/[^\da-z-]/g,``),jt=({benchmark:e,formId:t,onLoadingChange:r,onSuccess:i})=>{let{t:a}=n(`eval`),{close:o}=C(),[s]=T.useForm(),[c,l]=(0,kt.useState)(!1),u=P(e=>e.updateBenchmark),d=T.useWatch(`name`,s);return(0,kt.useEffect)(()=>{e&&s.setFieldsValue({description:e.description||``,identifier:e.identifier,name:e.name,tags:e.tags||[]})},[e,s]),(0,kt.useEffect)(()=>{!c&&d&&s.setFieldValue(`identifier`,At(d))},[d,c,s]),(0,L.jsxs)(T,{form:s,layout:`vertical`,name:t,onFinish:async t=>{r?.(!0);try{await u({description:t.description?.trim()||void 0,id:e.id,identifier:t.identifier.trim(),name:t.name.trim(),tags:t.tags?.length>0?t.tags:void 0}),v.success(a(`benchmark.edit.success`)),o(),i?.()}catch{v.error(a(`benchmark.edit.error`))}finally{r?.(!1)}},children:[(0,L.jsx)(T.Item,{label:a(`benchmark.create.name.label`),name:`name`,rules:[{message:a(`benchmark.create.nameRequired`),required:!0}],children:(0,L.jsx)(We,{autoFocus:!0,placeholder:a(`benchmark.create.name.placeholder`)})}),(0,L.jsx)(T.Item,{label:a(`benchmark.create.identifier.label`),name:`identifier`,rules:[{message:a(`benchmark.create.identifierRequired`),required:!0}],children:(0,L.jsx)(We,{placeholder:a(`benchmark.create.identifier.placeholder`),style:{fontFamily:M.fontFamilyCode},onChange:()=>l(!0)})}),(0,L.jsx)(T.Item,{label:a(`benchmark.create.description.label`),name:`description`,children:(0,L.jsx)(He,{placeholder:a(`benchmark.create.description.placeholder`),rows:3})}),(0,L.jsx)(T.Item,{label:a(`benchmark.create.tags.label`),name:`tags`,style:{marginBottom:0},children:(0,L.jsx)(qe,{mode:`tags`,open:!1,placeholder:a(`benchmark.create.tags.placeholder`),style:{width:`100%`},tokenSeparators:[`,`,`，`,` `]})})]})}})),Nt,Pt,Ft=e((()=>{m(),Me(),Ge(),i(),Nt=t(s()),Pt=({formId:e,loading:t})=>{let{t:r}=n(`eval`),{close:i}=C();return(0,Nt.jsxs)(h,{children:[(0,Nt.jsx)(p,{disabled:t,onClick:i,children:r(`common.cancel`)}),(0,Nt.jsx)(p,{form:e,htmlType:`submit`,loading:t,type:`primary`,children:r(`benchmark.edit.confirm`)})]})}})),It,Lt,Rt=e((()=>{a(),it(),Mt(),Ft(),It=t(s()),Lt=e=>at({renderContent:({formId:t,setLoading:n})=>(0,It.jsx)(jt,{...e,formId:t,onLoadingChange:n}),renderFooter:({formId:e,loading:t})=>(0,It.jsx)(Pt,{formId:e,loading:t}),title:r(`benchmark.edit.title`,{ns:`eval`}),width:480})})),R,z,zt,B,Bt,Vt=e((()=>{A(),Ne(),Fe(),S(),y(),m(),Qe(),b(),N(),O(),R=t(o()),i(),Ze(),F(),Rt(),ot(),lt(),z=t(s()),zt=[M.colorPrimary,M.colorSuccess,M.colorTextQuaternary],B={heroBand:j(`acss-pseg9g`,[`.acss-pseg9g{padding:20px;border-radius:var(--ant-border-radius-lg);background:var(--ant-color-fill-quaternary);}`],`
    padding: 20px;
    border-radius: var(--ant-border-radius-lg);
    background: var(--ant-color-fill-quaternary);
  `),heroValue:j(`acss-17z3oqy`,[`.acss-17z3oqy{font-family:var(--ant-font-family-code);font-size:var(--ant-font-size-heading-1);font-weight:600;line-height:1;color:var(--ant-color-text);}`],`
    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size-heading-1);
    font-weight: 600;
    line-height: 1;
    color: var(--ant-color-text);
  `),description:j(`acss-1vlgbhy`,[`.acss-1vlgbhy{margin:0;margin-block-start:2px;font-size:var(--ant-font-size);color:var(--ant-color-text-tertiary);}`],`
    margin: 0;
    margin-block-start: 2px;
    font-size: var(--ant-font-size);
    color: var(--ant-color-text-tertiary);
  `),iconBox:j(`acss-18uil7a`,[`.acss-18uil7a{display:flex;flex-shrink:0;align-items:center;justify-content:center;width:40px;height:40px;border-radius:var(--ant-border-radius-lg);}`],`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    border-radius: var(--ant-border-radius-lg);
  `),statCard:j(`acss-t2l0oc`,[`.acss-t2l0oc{flex:1;min-width:0;padding:16px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius);}`],`
    flex: 1;

    min-width: 0;
    padding: 16px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius);
  `),statIcon:j(`acss-x94hvb`,[`.acss-x94hvb{display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:var(--ant-border-radius);}`],`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;
    border-radius: var(--ant-border-radius);
  `),statLabel:j(`acss-1h8rpf0`,[`.acss-1h8rpf0{font-size:var(--ant-font-size-sm);font-weight:600;color:var(--ant-color-text-secondary);}`],`
    font-size: var(--ant-font-size-sm);
    font-weight: 600;
    color: var(--ant-color-text-secondary);
  `),title:j(`acss-871upu`,[`.acss-871upu{margin:0;font-size:var(--ant-font-size-heading-3);font-weight:600;color:var(--ant-color-text);}`],`
    margin: 0;
    font-size: var(--ant-font-size-heading-3);
    font-weight: 600;
    color: var(--ant-color-text);
  `)},Bt=(0,R.memo)(({benchmark:e,completedRuns:t,datasets:r,onBenchmarkUpdate:i,runCount:a,systemIcon:o=D,totalCases:s})=>{let{t:c}=n(`eval`),l=Xe(),u=P(e=>e.deleteBenchmark),d=P(e=>e.refreshBenchmarkDetail),m=async()=>{await d(e.id),i?.(e)},h=()=>Lt({benchmark:e,onSuccess:m}),g=[{danger:!0,icon:(0,z.jsx)(be,{size:16}),key:`delete`,label:c(`common.delete`),onClick:()=>{ee({content:c(`benchmark.actions.delete.confirm`),okButtonProps:{danger:!0},okText:c(`benchmark.actions.delete`),onOk:async()=>{await u(e.id),l(`/eval`)},title:c(`benchmark.actions.delete`)})}}],v=r.length>0,y=t.length>0,b=(0,R.useMemo)(()=>{if(!y)return[];let e=new Map;for(let n of t){let t=n.targetAgent?.title||n.targetAgent?.id||`Unknown`,r=n.targetAgentId||n.targetAgent?.id||t;e.has(r)||e.set(r,{name:t,passRates:[]}),e.get(r).passRates.push(n.passRate??n.metrics?.passRate??0)}return[...e.entries()].map(([,e])=>({avgPassRate:e.passRates.reduce((e,t)=>e+t,0)/e.passRates.length,name:e.name})).sort((e,t)=>t.avgPassRate-e.avgPassRate).slice(0,3)},[t,y]),S=b.length>0?b[0]:null,C=(0,R.useMemo)(()=>t.map(e=>e.passRate??e.metrics?.passRate).filter(e=>typeof e==`number`).reverse(),[t]),te=C.length>0?Math.max(...C):void 0,w=(0,R.useMemo)(()=>{if(!y)return null;let e=t.map(e=>e.metrics?.duration??e.totalDuration).filter(e=>e!=null&&e>0);return e.length===0?null:e.reduce((e,t)=>e+t,0)/e.length},[t,y]),T=(0,R.useMemo)(()=>{if(!y)return null;let e=t.map(e=>e.metrics?.duration??e.totalDuration).filter(e=>e!=null&&e>0).sort((e,t)=>e-t);return e.length===0?null:e[Math.ceil(e.length*.99)-1]},[t,y]),E=(0,R.useMemo)(()=>{if(!y)return null;let e=t.map(e=>e.metrics?.totalCost??e.totalCost).filter(e=>e!=null&&e>0);return e.length===0?null:e.reduce((e,t)=>e+t,0)/e.length},[t,y]);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(f,{gap:16,children:(0,z.jsxs)(f,{horizontal:!0,align:`start`,justify:`space-between`,children:[(0,z.jsxs)(f,{horizontal:!0,align:`start`,gap:12,children:[(0,z.jsx)(`div`,{className:B.iconBox,style:{background:e.source===`user`?M.colorSuccessBg:M.colorPrimaryBg},children:(0,z.jsx)(_,{icon:e.source===`user`?ue:o,size:20,style:{color:e.source===`user`?M.colorSuccess:M.colorPrimary}})}),(0,z.jsxs)(f,{gap:4,children:[(0,z.jsx)(`h1`,{className:B.title,children:e.name}),e.description&&(0,z.jsx)(`p`,{className:B.description,children:e.description})]})]}),(0,z.jsxs)(f,{horizontal:!0,gap:8,children:[(0,z.jsx)(p,{icon:se,size:`small`,onClick:h,children:c(`common.edit`)}),(0,z.jsx)(Ie,{items:g,placement:`bottomRight`,children:(0,z.jsx)(p,{icon:re,size:`small`})})]})]})}),(0,z.jsxs)(f,{horizontal:!0,align:`center`,className:B.heroBand,gap:16,justify:`space-between`,children:[(0,z.jsxs)(f,{gap:6,children:[(0,z.jsx)(`span`,{className:B.heroValue,children:te===void 0?`—`:`${(te*100).toFixed(0)}%`}),(0,z.jsx)(x,{color:M.colorTextSecondary,fontSize:14,children:S?c(`benchmark.detail.stats.bestPerformance`,{agent:S.name,passRate:(S.avgPassRate*100).toFixed(1)}):c(`benchmark.card.bestPassRate`)})]}),C.length>1&&(0,z.jsx)(st,{values:C,width:220})]}),(0,z.jsxs)(f,{horizontal:!0,gap:12,children:[(0,z.jsx)(`div`,{className:B.statCard,children:(0,z.jsxs)(f,{gap:12,children:[(0,z.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,z.jsx)(`div`,{className:B.statIcon,style:{background:M.colorWarningBg},children:(0,z.jsx)(me,{size:16,style:{color:M.colorWarning}})}),(0,z.jsx)(`span`,{className:B.statLabel,style:{textTransform:`uppercase`},children:c(`benchmark.detail.stats.topAgents`)})]}),!v&&!y&&(0,z.jsx)(`span`,{style:{color:M.colorTextQuaternary,fontSize:M.fontSizeXL,fontWeight:600},children:`--`}),v&&!y&&(0,z.jsxs)(f,{gap:2,children:[(0,z.jsx)(`span`,{style:{color:M.colorTextQuaternary,fontSize:M.fontSizeXL,fontWeight:600},children:c(`benchmark.detail.stats.waiting`)}),(0,z.jsx)(`span`,{style:{color:M.colorTextQuaternary,fontSize:M.fontSizeSM},children:c(`benchmark.detail.stats.noEvalRecord`)})]}),y&&b.length>0&&(0,z.jsx)(f,{gap:6,children:b.map((e,t)=>(0,z.jsxs)(f,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,z.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,z.jsx)(`span`,{style:{color:zt[t]||zt[2],fontFamily:M.fontFamilyCode,fontSize:M.fontSizeSM,fontWeight:600,minWidth:14,textAlign:`center`},children:t+1}),(0,z.jsx)(`span`,{style:{color:M.colorText,fontSize:M.fontSize,fontWeight:500},children:e.name})]}),(0,z.jsxs)(`span`,{style:{color:M.colorTextSecondary,fontFamily:M.fontFamilyCode,fontSize:M.fontSize},children:[(e.avgPassRate*100).toFixed(1),`%`]})]},e.name))})]})}),(0,z.jsx)(`div`,{className:B.statCard,children:(0,z.jsxs)(f,{gap:12,children:[(0,z.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,z.jsx)(`div`,{className:B.statIcon,style:{background:M.colorPrimaryBg},children:(0,z.jsx)(ve,{size:16,style:{color:M.colorPrimary}})}),(0,z.jsx)(`span`,{className:B.statLabel,children:c(`benchmark.detail.stats.dataScale`)}),s===0&&(0,z.jsx)(`span`,{style:{backgroundColor:M.colorWarningBg,borderRadius:M.borderRadiusXS,color:M.colorWarning,fontSize:M.fontSizeSM,paddingBlock:2,paddingInline:8},children:c(`benchmark.detail.stats.needSetup`)})]}),(0,z.jsxs)(f,{gap:2,children:[(0,z.jsxs)(f,{horizontal:!0,align:`baseline`,gap:4,children:[(0,z.jsx)(`span`,{style:{color:M.colorText,fontFamily:M.fontFamilyCode,fontSize:M.fontSizeHeading3,fontWeight:600},children:s}),s>0&&(0,z.jsx)(`span`,{style:{color:M.colorTextTertiary,fontSize:M.fontSize},children:`Cases`})]}),s===0?(0,z.jsx)(`span`,{style:{color:M.colorPrimary,fontSize:M.fontSizeSM},children:c(`benchmark.detail.stats.addFirstDataset`)}):(0,z.jsxs)(`span`,{style:{color:M.colorTextQuaternary,fontSize:M.fontSizeSM},children:[r.length,` Datasets`]})]})]})}),(0,z.jsx)(`div`,{className:B.statCard,children:(0,z.jsxs)(f,{gap:12,children:[(0,z.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,z.jsx)(`div`,{className:B.statIcon,style:{background:M.colorInfoBg},children:(0,z.jsx)(ie,{size:16,style:{color:M.colorInfo}})}),(0,z.jsx)(`span`,{className:B.statLabel,children:c(`benchmark.detail.stats.avgDuration`)})]}),w==null?(0,z.jsx)(`span`,{style:{color:M.colorTextQuaternary,fontSize:M.fontSizeXL,fontWeight:600},children:`--`}):(0,z.jsxs)(f,{gap:2,children:[(0,z.jsxs)(f,{horizontal:!0,align:`baseline`,gap:4,children:[(0,z.jsx)(`span`,{style:{color:M.colorText,fontFamily:M.fontFamilyCode,fontSize:M.fontSizeHeading3,fontWeight:600},children:ct(w)}),(0,z.jsx)(`span`,{style:{color:M.colorTextTertiary,fontSize:M.fontSize},children:`min`})]}),T!=null&&(0,z.jsxs)(`span`,{style:{color:M.colorTextQuaternary,fontSize:M.fontSizeSM},children:[`P99: `,ut(T)]})]})]})}),(0,z.jsx)(`div`,{className:B.statCard,children:(0,z.jsxs)(f,{gap:12,children:[(0,z.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,z.jsx)(`div`,{className:B.statIcon,style:{background:M.colorSuccessBg},children:(0,z.jsx)(ne,{size:16,style:{color:M.colorSuccess}})}),(0,z.jsx)(`span`,{className:B.statLabel,children:c(`benchmark.detail.stats.avgCost`)})]}),E==null?(0,z.jsx)(`span`,{style:{color:M.colorTextQuaternary,fontSize:M.fontSizeXL,fontWeight:600},children:`--`}):(0,z.jsxs)(f,{gap:2,children:[(0,z.jsxs)(f,{horizontal:!0,align:`baseline`,gap:4,children:[(0,z.jsxs)(`span`,{style:{color:M.colorText,fontFamily:M.fontFamilyCode,fontSize:M.fontSizeHeading3,fontWeight:600},children:[`$`,Ae(E)]}),(0,z.jsx)(`span`,{style:{color:M.colorTextTertiary,fontSize:M.fontSize},children:c(`benchmark.detail.stats.perRun`)})]}),(0,z.jsx)(`span`,{style:{color:M.colorTextQuaternary,fontSize:M.fontSizeSM},children:c(`benchmark.detail.stats.basedOnLastNRuns`,{count:t.length})})]})]})})]})]})})})),Ht,V,Ut,Wt,H,Gt,Kt=e((()=>{A(),g(),S(),y(),Ue(),Ve(),Ke(),b(),je(),Ge(),E(),N(),O(),Ht=t(o()),i(),$e(),ht(),V=t(s()),Ut=e=>e.trim().toLowerCase().replaceAll(/\s+/g,`-`).replaceAll(/[^\da-z-]/g,``),Wt={custom:`Custom`,memory:`Memory`,reference:`Reference Formats`,research:`Deep Research / QA`,"tool-use":`Tool Use`},H={sectionLabel:j(`acss-a9xmeq`,[`.acss-a9xmeq{font-size:var(--ant-font-size-sm);font-weight:500;color:var(--ant-color-text-secondary);}`],`
    font-size: var(--ant-font-size-sm);
    font-weight: 500;
    color: var(--ant-color-text-secondary);
  `),presetCard:j(`acss-1jorn6j`,[`.acss-1jorn6j{cursor:pointer;position:relative;padding:12px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius);background:var(--ant-color-bg-container);transition:border-color 0.15s ease,background 0.15s ease;}`,`.acss-1jorn6j:hover{border-color:var(--ant-color-border);background:var(--ant-color-fill-tertiary);}`,`.acss-1jorn6j:focus-visible{outline:2px solid var(--ant-color-primary);outline-offset:-2px;}`,`@media (prefers-reduced-motion: reduce){.acss-1jorn6j{transition:none;}}`],`
    cursor: pointer;

    position: relative;

    padding: 12px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius);

    background: var(--ant-color-bg-container);

    transition:
      border-color 0.15s ease,
      background 0.15s ease;

    &:hover {
      border-color: var(--ant-color-border);
      background: var(--ant-color-fill-tertiary);
    }

    &:focus-visible {
      outline: 2px solid var(--ant-color-primary);
      outline-offset: -2px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `),presetCardSelected:j(`acss-108wxep`,[`.acss-108wxep{border-color:var(--ant-color-primary-border);background:var(--ant-color-primary-bg);}`,`.acss-108wxep:hover{border-color:var(--ant-color-primary-border);background:var(--ant-color-primary-bg);}`],`
    border-color: var(--ant-color-primary-border);
    background: var(--ant-color-primary-bg);

    &:hover {
      border-color: var(--ant-color-primary-border);
      background: var(--ant-color-primary-bg);
    }
  `),presetGrid:j(`acss-edfm5s`,[`.acss-edfm5s{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:8px;}`],`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  `),presetIcon:j(`acss-5i3n9s`,[`.acss-5i3n9s{border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius);background:var(--ant-color-bg-elevated);}`],`
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius);
    background: var(--ant-color-bg-elevated);
  `),presetMeta:j(`acss-6j350`,[`.acss-6j350{font-family:var(--ant-font-family-code);font-size:var(--ant-font-size-sm);color:var(--ant-color-text-tertiary);}`],`
    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-tertiary);
  `),selectedMark:j(`acss-8pvrkd`,[`.acss-8pvrkd{display:flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:999px;color:var(--ant-color-bg-container);background:var(--ant-color-primary);}`],`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 18px;
    height: 18px;
    border-radius: 999px;

    color: var(--ant-color-bg-container);

    background: var(--ant-color-primary);
  `)},Gt=({benchmarkId:e,formId:t,onLoadingChange:r,onSuccess:i})=>{let{t:a}=n(`eval`),{close:o}=C(),[s]=T.useForm(),[c,l]=(0,Ht.useState)(`custom`),[u,p]=(0,Ht.useState)(!1),m=T.useWatch(`name`,s),h=T.useWatch(`evalMode`,s);(0,Ht.useEffect)(()=>{!u&&m&&s.setFieldValue(`identifier`,Ut(m))},[m,u,s]);let g=async t=>{r?.(!0);try{let n=await et.createDataset({benchmarkId:e,description:t.description,evalConfig:t.evalConfig?.judgePrompt?t.evalConfig:void 0,evalMode:t.evalMode||void 0,identifier:t.identifier.trim(),metadata:{preset:c},name:t.name});o(),i?.({id:n.id,name:n.name,preset:c})}catch(e){v.error(e?.message||a(`dataset.create.error`))}finally{r?.(!1)}},y=vt(),b=Object.entries(y).filter(([,e])=>e.length>0);return(0,V.jsxs)(T,{form:s,layout:`vertical`,name:t,onFinish:g,children:[(0,V.jsx)(T.Item,{label:a(`dataset.create.name.label`),name:`name`,rules:[{message:a(`dataset.create.nameRequired`),required:!0}],children:(0,V.jsx)(We,{placeholder:a(`dataset.create.name.placeholder`)})}),(0,V.jsx)(T.Item,{label:a(`dataset.create.identifier.label`),name:`identifier`,rules:[{message:a(`dataset.create.identifierRequired`),required:!0}],children:(0,V.jsx)(We,{placeholder:a(`dataset.create.identifier.placeholder`),style:{fontFamily:M.fontFamilyCode},onChange:()=>p(!0)})}),(0,V.jsx)(T.Item,{label:a(`dataset.create.description.label`),name:`description`,children:(0,V.jsx)(He,{placeholder:a(`dataset.create.description.placeholder`),rows:3})}),(0,V.jsx)(T.Item,{extra:a(`dataset.evalMode.hint`),label:a(`evalMode.label`),name:`evalMode`,children:(0,V.jsx)(qe,{allowClear:!0,placeholder:a(`evalMode.placeholder`),optionRender:e=>(0,V.jsxs)(f,{gap:4,style:{paddingBlock:4},children:[(0,V.jsx)(`div`,{children:e.label}),(0,V.jsx)(x,{fontSize:12,type:`secondary`,children:a(`evalMode.${e.value}.desc`)})]}),options:[{label:a(`evalMode.equals`),value:`equals`},{label:a(`evalMode.contains`),value:`contains`},{label:a(`evalMode.llm-rubric`),value:`llm-rubric`},{label:a(`evalMode.external`),value:`external`}]})}),h===`llm-rubric`&&(0,V.jsx)(T.Item,{label:a(`evalMode.prompt.label`),name:[`evalConfig`,`judgePrompt`],children:(0,V.jsx)(He,{placeholder:a(`evalMode.prompt.placeholder`),rows:3})}),(0,V.jsxs)(f,{gap:12,style:{marginBlockStart:4},children:[(0,V.jsx)(`span`,{className:H.sectionLabel,children:a(`dataset.create.preset.label`)}),b.map(([e,t])=>(0,V.jsxs)(f,{gap:8,children:[(0,V.jsx)(x,{color:M.colorTextTertiary,fontSize:12,children:Wt[e]||e}),(0,V.jsx)(`div`,{className:H.presetGrid,children:t.map(e=>{let t=c===e.id;return(0,V.jsx)(`div`,{"aria-pressed":t,className:`${H.presetCard} ${t?H.presetCardSelected:``}`,role:`button`,tabIndex:0,onClick:()=>l(e.id),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),l(e.id))},children:(0,V.jsxs)(f,{horizontal:!0,align:`flex-start`,gap:12,children:[(0,V.jsx)(d,{className:H.presetIcon,flex:`none`,height:36,width:36,children:(0,V.jsx)(_,{icon:e.icon,size:18})}),(0,V.jsxs)(f,{flex:1,gap:2,style:{minWidth:0},children:[(0,V.jsx)(x,{ellipsis:!0,weight:500,children:e.name}),(0,V.jsx)(x,{ellipsis:!0,color:M.colorTextTertiary,fontSize:12,children:e.description})]}),t&&(0,V.jsx)(`span`,{className:H.selectedMark,children:(0,V.jsx)(_,{icon:we,size:12})})]})},e.id)})})]},e)),I[c]&&(0,V.jsxs)(f,{gap:4,style:{marginBlockStart:4},children:[(0,V.jsx)(x,{fontSize:12,type:`secondary`,children:I[c].formatDescription}),(0,V.jsxs)(x,{className:H.presetMeta,children:[(0,V.jsx)(`strong`,{children:`Required:`}),` `,I[c].requiredFields.join(`, `),I[c].optionalFields.length>0&&(0,V.jsxs)(V.Fragment,{children:[` · `,(0,V.jsx)(`strong`,{children:`Optional:`}),` `,I[c].optionalFields.join(`, `)]})]})]})]})]})}})),qt,Jt,Yt=e((()=>{m(),Me(),Ge(),i(),qt=t(s()),Jt=({formId:e,loading:t})=>{let{t:r}=n(`eval`),{close:i}=C();return(0,qt.jsxs)(h,{children:[(0,qt.jsx)(p,{disabled:t,onClick:i,children:r(`common.cancel`)}),(0,qt.jsx)(p,{form:e,htmlType:`submit`,loading:t,type:`primary`,children:r(`common.create`)})]})}})),Xt,Zt,Qt=e((()=>{a(),it(),Kt(),Yt(),Xt=t(s()),Zt=e=>at({renderContent:({formId:t,setLoading:n})=>(0,Xt.jsx)(Gt,{...e,formId:t,onLoadingChange:n}),renderFooter:({formId:e,loading:t})=>(0,Xt.jsx)(Jt,{formId:e,loading:t}),title:r(`dataset.create.title`,{ns:`eval`}),width:600})})),$t,U,en,tn,nn=e((()=>{A(),S(),m(),b(),N(),O(),$t=t(o()),i(),U=t(s()),en={emptyIcon:j(`acss-tw091g`,[`.acss-tw091g{display:flex;align-items:center;justify-content:center;width:48px;height:48px;margin-block-end:12px;border-radius:var(--ant-border-radius-lg);background:var(--ant-color-primary-bg);}`],`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;
    margin-block-end: 12px;
    border-radius: var(--ant-border-radius-lg);

    background: var(--ant-color-primary-bg);
  `)},tn=(0,$t.memo)(({onAddCase:e,onImport:t})=>{let{t:r}=n(`eval`);return(0,U.jsxs)(f,{align:`center`,gap:8,justify:`center`,style:{padding:`48px 24px`},children:[(0,U.jsx)(`div`,{className:en.emptyIcon,children:(0,U.jsx)(de,{size:20,style:{color:M.colorPrimary}})}),(0,U.jsx)(x,{weight:600,children:r(`testCase.empty.title`)}),(0,U.jsx)(x,{color:M.colorTextTertiary,fontSize:12,children:r(`testCase.empty.description`)}),(0,U.jsxs)(f,{horizontal:!0,gap:8,style:{marginTop:8},children:[(0,U.jsx)(p,{icon:Ce,size:`small`,onClick:e,children:r(`testCase.actions.add`)}),(0,U.jsx)(p,{icon:ce,size:`small`,type:`primary`,onClick:t,children:r(`testCase.actions.import`)})]})]})})})),rn,W,G,an,on=e((()=>{A(),Fe(),S(),u(),m(),Qe(),Le(),je(),E(),N(),O(),rn=t(o()),i(),ze(),tt(),$e(),ht(),nn(),bt(),W=t(s()),G={card:j(`acss-yt1ov7`,[`.acss-yt1ov7 .ant-card-body{padding:0;}`],`
    .ant-card-body {
      padding: 0;
    }
  `),caseCount:j(`acss-1bv4x72`,[`.acss-1bv4x72{display:flex;flex-direction:column;flex-shrink:0;gap:2px;align-items:flex-end;padding-block:6px;padding-inline:12px;border-radius:var(--ant-border-radius);background:var(--ant-color-fill-quaternary);}`],`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    gap: 2px;
    align-items: flex-end;

    padding-block: 6px;
    padding-inline: 12px;
    border-radius: var(--ant-border-radius);

    background: var(--ant-color-fill-quaternary);
  `),caseCountLabel:j(`acss-evngr4`,[`.acss-evngr4{font-size:var(--ant-font-size-sm);line-height:1;color:var(--ant-color-text-tertiary);}`],`
    font-size: var(--ant-font-size-sm);
    line-height: 1;
    color: var(--ant-color-text-tertiary);
  `),caseCountValue:j(`acss-5ks6cg`,[`.acss-5ks6cg{font-family:var(--ant-font-family-code);font-size:var(--ant-font-size-lg);font-weight:600;line-height:1;color:var(--ant-color-text);}`],`
    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size-lg);
    font-weight: 600;
    line-height: 1;
    color: var(--ant-color-text);
  `),chevron:j(`acss-17zgsu9`,[`.acss-17zgsu9{flex-shrink:0;color:var(--ant-color-text-tertiary);transition:transform 0.15s ease;}`,`@media (prefers-reduced-motion: reduce){.acss-17zgsu9{transition:none;}}`],`
    flex-shrink: 0;
    color: var(--ant-color-text-tertiary);
    transition: transform 0.15s ease;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `),datasetDescription:j(`acss-ngtb2w`,[`.acss-ngtb2w{overflow:hidden;margin:0;font-size:var(--ant-font-size-sm);color:var(--ant-color-text-tertiary);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    margin: 0;

    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-tertiary);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),datasetHeader:j(`acss-t8ea9v`,[`.acss-t8ea9v{cursor:pointer;display:flex;gap:12px;align-items:center;width:100%;padding:16px;border:none;text-align:start;background:transparent;transition:background 0.15s ease;}`,`.acss-t8ea9v:hover{background:var(--ant-color-fill-quaternary);}`,`.acss-t8ea9v:focus-visible{outline:2px solid var(--ant-color-primary);outline-offset:-1px;}`,`@media (prefers-reduced-motion: reduce){.acss-t8ea9v{transition:none;}}`],`
    cursor: pointer;

    display: flex;
    gap: 12px;
    align-items: center;

    width: 100%;
    padding: 16px;
    border: none;

    text-align: start;

    background: transparent;

    transition: background 0.15s ease;

    &:hover {
      background: var(--ant-color-fill-quaternary);
    }

    &:focus-visible {
      outline: 2px solid var(--ant-color-primary);
      outline-offset: -1px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `),datasetIcon:j(`acss-17acwj3`,[`.acss-17acwj3{display:flex;flex-shrink:0;align-items:center;justify-content:center;width:32px;height:32px;border-radius:var(--ant-border-radius);background:var(--ant-color-primary-bg);}`],`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;
    border-radius: var(--ant-border-radius);

    background: var(--ant-color-primary-bg);
  `),datasetName:j(`acss-bz5yl9`,[`.acss-bz5yl9{margin:0;font-size:var(--ant-font-size);font-weight:500;color:var(--ant-color-text);}`],`
    margin: 0;
    font-size: var(--ant-font-size);
    font-weight: 500;
    color: var(--ant-color-text);
  `),expandedSection:j(`acss-oqkg3i`,[`.acss-oqkg3i{border-block-start:1px solid var(--ant-color-border-secondary);}`],`
    border-block-start: 1px solid var(--ant-color-border-secondary);
  `),footer:j(`acss-u8wbdi`,[`.acss-u8wbdi{padding:12px;border-block-start:1px solid var(--ant-color-border-secondary);}`],`
    padding: 12px;
    border-block-start: 1px solid var(--ant-color-border-secondary);
  `),footerLink:j(`acss-5x0u19`,[`.acss-5x0u19{text-decoration:none;}`],`
    text-decoration: none;
  `)},an=(0,rn.memo)(({benchmarkId:e,dataset:t,isExpanded:r,loading:i,total:a,filteredCases:o,search:s,diffFilter:c,pagination:l,onExpand:u,onEdit:d,onDeleteCase:m,onRefresh:h,onSearchChange:g,onDiffFilterChange:_,onPageChange:y,onAddCase:b,onImport:x,onRun:S})=>{let{t:C}=n(`eval`),T=(0,rn.useCallback)(()=>{ee({content:C(`dataset.delete.confirm`),okButtonProps:{danger:!0},okText:C(`common.delete`),onOk:async()=>{try{await et.deleteDataset(t.id),v.success(C(`dataset.delete.success`)),h()}catch{v.error(C(`dataset.delete.error`))}},title:C(`common.delete`)})},[t.id,h,C]);return(0,W.jsxs)(w,{className:G.card,children:[(0,W.jsxs)(`div`,{className:G.datasetHeader,role:`button`,tabIndex:0,onClick:u,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),u())},children:[(0,W.jsx)(`div`,{className:G.datasetIcon,children:(0,W.jsx)(de,{size:16,style:{color:M.colorPrimary}})}),(0,W.jsxs)(f,{flex:1,gap:2,style:{minWidth:0},children:[(0,W.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,W.jsx)(`p`,{className:G.datasetName,children:t.name}),t.metadata?.preset&&I[t.metadata.preset]&&(0,W.jsx)(Re,{size:`small`,children:I[t.metadata.preset].name})]}),t.description&&(0,W.jsx)(`p`,{className:G.datasetDescription,children:t.description})]}),(0,W.jsxs)(`div`,{className:G.caseCount,children:[(0,W.jsx)(`span`,{className:G.caseCountValue,children:t.testCaseCount||0}),(0,W.jsx)(`span`,{className:G.caseCountLabel,children:C(`benchmark.detail.stats.cases`)})]}),(0,W.jsx)(p,{icon:_e,size:`small`,onClick:e=>{e.stopPropagation(),S()},children:C(`run.actions.run`)}),(0,W.jsx)(Ie,{trigger:[`click`],items:[{icon:(0,W.jsx)(oe,{size:14}),key:`edit`,label:C(`common.edit`),onClick:()=>d(t)},{type:`divider`},{danger:!0,icon:(0,W.jsx)(be,{size:14}),key:`delete`,label:C(`common.delete`),onClick:T}],children:(0,W.jsx)(te,{icon:le,size:`small`,onClick:e=>e.stopPropagation()})}),(0,W.jsx)(ye,{className:G.chevron,size:16,style:{transform:r?`rotate(90deg)`:`rotate(0deg)`}})]}),r&&(0,W.jsxs)(`div`,{className:G.expandedSection,children:[i?(0,W.jsx)(f,{align:`center`,justify:`center`,style:{padding:`48px 24px`},children:(0,W.jsx)(Be,{size:48})}):a===0?(0,W.jsx)(tn,{onAddCase:b,onImport:x}):(0,W.jsx)(dt,{readOnly:!0,datasetEvalMode:t.evalMode,diffFilter:c,pagination:l,search:s,testCases:o,total:a,onDiffFilterChange:_,onPageChange:y,onSearchChange:g}),(0,W.jsx)(f,{horizontal:!0,align:`center`,className:G.footer,justify:`center`,children:(0,W.jsx)(nt,{className:G.footerLink,to:`/eval/bench/${e}/datasets/${t.id}`,children:(0,W.jsx)(p,{icon:De,iconPosition:`end`,size:`small`,type:`text`,children:C(`dataset.detail.viewDetail`)})})})]})]})})})),sn,K,cn,ln,un=e((()=>{A(),S(),y(),m(),b(),E(),N(),O(),sn=t(o()),i(),K=t(s()),cn={emptyCard:j(`acss-zpb4um`,[`.acss-zpb4um .ant-card-body{display:flex;flex-direction:column;align-items:center;justify-content:center;padding-block:64px;padding-inline:24px;}`],`
    .ant-card-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding-block: 64px;
      padding-inline: 24px;
    }
  `),iconBox:j(`acss-ugkd8b`,[`.acss-ugkd8b{display:flex;align-items:center;justify-content:center;width:56px;height:56px;margin-block-end:16px;border-radius:var(--ant-border-radius-lg);background:var(--ant-color-primary-bg);}`],`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 56px;
    height: 56px;
    margin-block-end: 16px;
    border-radius: var(--ant-border-radius-lg);

    background: var(--ant-color-primary-bg);
  `)},ln=(0,sn.memo)(({onAddDataset:e})=>{let{t}=n(`eval`);return(0,K.jsxs)(w,{className:cn.emptyCard,children:[(0,K.jsx)(`div`,{className:cn.iconBox,children:(0,K.jsx)(_,{icon:de,size:24,style:{color:M.colorPrimary}})}),(0,K.jsxs)(f,{align:`center`,gap:4,children:[(0,K.jsx)(x,{weight:600,children:t(`dataset.empty.title`)}),(0,K.jsx)(x,{color:M.colorTextTertiary,fontSize:12,children:t(`dataset.empty.description`)})]}),(0,K.jsx)(p,{icon:Ce,size:`small`,style:{marginTop:16},type:`primary`,onClick:e,children:t(`dataset.actions.addDataset`)})]})})})),q,J,dn,fn,pn=e((()=>{A(),S(),m(),Qe(),ke(),b(),je(),E(),N(),O(),q=t(o()),i(),$e(),F(),Qt(),mt(),wt(),ft(),Tt(),on(),un(),J=t(s()),dn={card:j(`acss-yt1ov7`,[`.acss-yt1ov7 .ant-card-body{padding:0;}`],`
    .ant-card-body {
      padding: 0;
    }
  `),header:j(`acss-a1jfxf`,[`.acss-a1jfxf{display:flex;gap:12px;align-items:center;padding:16px;}`],`
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 16px;
  `),icon:j(`acss-5uw7ij`,[`.acss-5uw7ij{flex-shrink:0;width:32px;height:32px;border-radius:var(--ant-border-radius);background:var(--ant-color-fill-quaternary);}`],`
    flex-shrink: 0;

    width: 32px;
    height: 32px;
    border-radius: var(--ant-border-radius);

    background: var(--ant-color-fill-quaternary);
  `)},fn=(0,q.memo)(({benchmarkId:e,datasets:t,loading:r,onImport:i,onRefresh:a})=>{let{t:o}=n(`eval`),[s,c]=(0,q.useState)(null),[l,u]=(0,q.useState)({current:1,pageSize:5}),[d,m]=(0,q.useState)(``),[h,g]=(0,q.useState)(`all`),_=P(e=>e.useFetchTestCases),y=P(e=>e.refreshTestCases),{data:b,isLoading:S}=_(s?{datasetId:s,limit:l.pageSize,offset:(l.current-1)*l.pageSize}:{datasetId:``,limit:0,offset:0}),C=b?.data||[],te=b?.total||0,T=(0,q.useCallback)(async e=>{await y(e),a()},[y,a]),E=C.filter(e=>!(h!==`all`&&e.metadata?.difficulty!==h||d&&!e.content?.input?.toLowerCase().includes(d.toLowerCase()))),ne=(0,q.useCallback)(e=>{c(t=>t===e?null:e),u({current:1,pageSize:5}),m(``),g(`all`)},[]),re=(0,q.useCallback)(e=>{m(e),u(e=>({...e,current:1}))},[]),ie=(0,q.useCallback)(e=>{g(e),u(e=>({...e,current:1}))},[]),D=(0,q.useCallback)(()=>{Zt({benchmarkId:e,onSuccess:e=>{a(),ee({cancelText:o(`common.later`),content:o(`dataset.create.importNow`),okText:o(`dataset.actions.import`),onOk:()=>{_t({datasetId:e.id,onSuccess:T,presetId:e.preset})},title:o(`dataset.create.successTitle`)})}})},[e,T,a,o]),ae=(0,q.useCallback)(e=>{_t({datasetId:e.id,onSuccess:T,presetId:e.metadata?.preset})},[T]),oe=(0,q.useCallback)(t=>{Et({benchmarkId:e,datasetId:t.id,datasetName:t.name})},[e]),se=(0,q.useCallback)(e=>{ee({content:o(`testCase.delete.confirm`),okButtonProps:{danger:!0},okText:o(`common.delete`),onOk:async()=>{try{await et.deleteTestCase(e.id),v.success(o(`testCase.delete.success`)),s&&await y(s),a()}catch{v.error(o(`testCase.delete.error`))}},title:o(`common.delete`)})},[s,a,y,o]);return(0,J.jsx)(J.Fragment,{children:(0,J.jsxs)(f,{gap:16,children:[t.length>0&&(0,J.jsxs)(f,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,J.jsx)(x,{color:M.colorTextTertiary,children:o(`benchmark.detail.datasetCount`,{count:t.length})}),(0,J.jsx)(p,{icon:Ce,size:`small`,type:`primary`,onClick:D,children:o(`dataset.actions.addDataset`)})]}),r&&t.length===0?(0,J.jsx)(f,{gap:12,children:[1,2,3].map(e=>(0,J.jsx)(w,{className:dn.card,children:(0,J.jsxs)(`div`,{className:dn.header,children:[(0,J.jsx)(`div`,{className:dn.icon}),(0,J.jsxs)(f,{flex:1,gap:8,children:[(0,J.jsx)(k,{height:16,width:120}),(0,J.jsx)(k,{height:12,width:200})]}),(0,J.jsx)(k,{height:36,width:64}),(0,J.jsx)(k,{height:28,width:64})]})},e))}):t.length===0?(0,J.jsx)(ln,{onAddDataset:D}):(0,J.jsx)(f,{gap:12,children:t.map(t=>{let n=s===t.id;return(0,J.jsx)(an,{benchmarkId:e,dataset:t,diffFilter:h,filteredCases:n?E:[],isExpanded:n,loading:n?S:!1,pagination:l,search:d,total:n?te:0,onDeleteCase:se,onDiffFilterChange:ie,onEdit:e=>pt({dataset:e,onSuccess:a}),onExpand:()=>ne(t.id),onImport:()=>ae(t),onPageChange:(e,t)=>u({current:e,pageSize:t}),onRefresh:a,onRun:()=>oe(t),onSearchChange:re,onAddCase:()=>St({datasetId:t.id,onSuccess:T})},t.id)})})]})})})})),Y,X,mn,hn,gn=e((()=>{A(),S(),m(),Ke(),b(),N(),O(),Y=t(o()),i(),F(),Tt(),Dt(),gt(),yt(),X=t(s()),mn={grid:j(`acss-1gba2u1`,[`.acss-1gba2u1{display:grid;grid-template-columns:repeat(auto-fill, minmax(420px, 1fr));gap:12px;}`,`@media (width <= 640px){.acss-1gba2u1{grid-template-columns:1fr;}}`],`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
    gap: 12px;

    @media (width <= 640px) {
      grid-template-columns: 1fr;
    }
  `),filterEmpty:j(`acss-v36jno`,[`.acss-v36jno{align-items:center;justify-content:center;padding-block:48px;padding-inline:24px;border:1px dashed var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);background:var(--ant-color-fill-quaternary);}`],`
    align-items: center;
    justify-content: center;

    padding-block: 48px;
    padding-inline: 24px;
    border: 1px dashed var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);

    background: var(--ant-color-fill-quaternary);
  `)},hn=(0,Y.memo)(({benchmarkId:e})=>{let{t}=n(`eval`),[r,i]=(0,Y.useState)(`all`),a=P(e=>e.useFetchRuns),o=P(rt.runList),s=P(e=>e.refreshRuns);a(e);let c=(0,Y.useMemo)(()=>[...o].sort((e,t)=>new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()),[o]),l=(0,Y.useMemo)(()=>r===`all`?c:r===`active`?c.filter(e=>e.status===`running`||e.status===`pending`):c.filter(e=>e.status===r),[c,r]),u=[{label:t(`table.filter.all`),value:`all`},{label:t(`run.status.completed`),value:`completed`},{label:t(`run.filter.active`),value:`active`},{label:t(`run.status.idle`),value:`idle`},{label:t(`run.status.failed`),value:`failed`},{label:t(`run.status.aborted`),value:`aborted`}];return(0,X.jsxs)(f,{gap:16,children:[c.length>0&&(0,X.jsxs)(f,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,X.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,X.jsx)(x,{color:M.colorTextTertiary,children:t(`benchmark.detail.runCount`,{count:l.length})}),(0,X.jsx)(qe,{options:u,size:`small`,style:{width:128},value:r,onChange:i})]}),(0,X.jsx)(p,{icon:Ce,size:`small`,type:`primary`,onClick:()=>Et({benchmarkId:e}),children:t(`run.actions.create`)})]}),c.length===0?(0,X.jsx)(xt,{onCreate:()=>Et({benchmarkId:e})}):l.length===0?(0,X.jsx)(f,{className:mn.filterEmpty,children:(0,X.jsx)(x,{color:M.colorTextTertiary,children:t(`run.filter.empty`)})}):(0,X.jsx)(`div`,{className:mn.grid,children:l.map(t=>(0,X.jsx)(Ct,{benchmarkId:e,run:t,onEdit:e=>Ot({run:e}),onRefresh:s},t.id))})]})})})),Z,Q,_n,vn,$,yn;e((()=>{A(),S(),O(),Z=t(o()),i(),c(),Je(),Oe(),F(),Vt(),pn(),gn(),Q=t(s()),_n=[fe,Te,D,ae,Se,me,ge,Ee,he,pe,xe],vn=e=>_n[e.split(``).reduce((e,t)=>e+t.charCodeAt(0),0)%_n.length],$={container:j(`acss-stnsjh`,[`.acss-stnsjh{overflow-y:auto;padding-block:24px;padding-inline:32px;}`],`
    overflow-y: auto;
    padding-block: 24px;
    padding-inline: 32px;
  `),sectionTitle:j(`acss-1ldy910`,[`.acss-1ldy910{margin:0;font-size:var(--ant-font-size-lg);font-weight:600;color:var(--ant-color-text);}`],`
    margin: 0;
    font-size: var(--ant-font-size-lg);
    font-weight: 600;
    color: var(--ant-color-text);
  `),tag:j(`acss-g8qims`,[`.acss-g8qims{padding-block:2px;padding-inline:8px;border:1px solid var(--ant-color-border);border-radius:var(--ant-border-radius-xs);font-size:var(--ant-font-size-sm);color:var(--ant-color-text-tertiary);background:transparent;}`],`
    padding-block: 2px;
    padding-inline: 8px;
    border: 1px solid var(--ant-color-border);
    border-radius: var(--ant-border-radius-xs);

    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-tertiary);

    background: transparent;
  `)},yn=(0,Z.memo)(()=>{let{t:e}=n(`eval`),{benchmarkId:t}=l(),r=(0,Z.useMemo)(()=>t?vn(t):D,[t]),i=P(e=>e.useFetchBenchmarkDetail),a=P(e=>t?e.benchmarkDetailMap[t]:void 0),o=P(e=>e.useFetchDatasets),s=P(e=>e.datasetList),c=P(e=>e.isLoadingDatasets),u=P(e=>e.refreshDatasets),d=P(e=>e.useFetchRuns),p=P(rt.runList),{error:m,isLoading:h,mutate:g}=i(t);o(t);let _=(0,Z.useCallback)(async()=>{t&&await u(t)},[t,u]),v=(0,Z.useCallback)(async()=>{t&&await u(t)},[t,u]);d(t);let y=p.filter(e=>e.status===`completed`),b=s.reduce((e,t)=>e+(t.testCaseCount||0),0);return a?(0,Q.jsxs)(f,{className:$.container,gap:24,height:`100%`,width:`100%`,children:[(0,Q.jsx)(Bt,{benchmark:a,completedRuns:y,datasets:s,runCount:p.length,systemIcon:r,totalCases:b,onBenchmarkUpdate:v}),a.tags&&a.tags.length>0&&(0,Q.jsx)(f,{horizontal:!0,gap:8,style:{flexWrap:`wrap`},children:a.tags.map(e=>(0,Q.jsx)(`span`,{className:$.tag,children:e},e))}),(0,Q.jsx)(`h3`,{className:$.sectionTitle,children:e(`benchmark.detail.tabs.datasets`)}),(0,Q.jsx)(fn,{benchmarkId:t,datasets:s,loading:c,onImport:()=>{},onRefresh:_}),(0,Q.jsx)(`h3`,{className:$.sectionTitle,children:e(`benchmark.detail.tabs.runs`)}),(0,Q.jsx)(hn,{benchmarkId:t})]}):h||!m?(0,Q.jsx)(Pe,{}):(0,Q.jsx)(Ye,{error:m,variant:`page`,onRetry:()=>void g()})})}))();export{yn as default};