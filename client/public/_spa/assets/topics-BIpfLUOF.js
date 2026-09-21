import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,Q as r,j as i}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as a,T as o}from"../vendor/vendor-react-B9HSWrpN.js";import{B as s,Ht as c,Kt as l,Mt as u,Nt as d,Ut as f,Xn as p,Yn as m,Zn as h,at as g,it as _,l as v,lt as y,m as ee,qt as b,u as x,z as S}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Ac as C,Ah as w,Bs as T,Ec as te,Ht as ne,Md as E,Op as D,Pg as re,Qd as O,Rc as k,Ss as A,Xr as ie,bs as j,c as M,cg as ae,ey as oe,fl as se,g as ce,gn as N,gu as le,if as ue,mt as de,o as fe,t as P,ua as pe}from"../vendor/vendor-icons-vienkZi5.js";import{Mn as me,c as F,jn as he}from"./app-const-BpgKVRXh.js";import{At as ge,Bd as _e,FD as ve,ID as I,Kl as ye,MA as be,Yd as xe,bF as Se,hF as L,i as Ce,kt as we,pF as Te,qd as Ee,ql as De,r as Oe,uF as ke}from"./index-w64_zsxD.js";import{n as Ae,t as je}from"./DropdownMenu-1ae8j9bI.js";import{t as Me}from"./_virtual_lobe-ui-named__Tooltip-DNompU8a.js";import{n as Ne,t as Pe}from"./Tag-C95BKTI7.js";import{Jn as Fe,Mn as Ie,Wn as Le,Xn as Re,Yn as ze,Zn as Be,a as R,n as Ve,qn as He}from"./chat-D3ilvURJ.js";import{n as Ue,t as We}from"./Tabs-DH_wa3T6.js";import{n as Ge,t as Ke}from"./Input-gdUxluEJ.js";import{a as qe,o as Je}from"./ExecutionStatus-C_DnyV8X.js";import{n as Ye,t as Xe}from"./esm-WHRoVrks.js";import{n as Ze,t as Qe}from"./AsyncError-B3Va32IA.js";import{n as $e,t as et}from"./RingLoading-BAIt6lAI.js";import{n as tt,r as nt}from"./const-Ac9XzAwI.js";import{n as rt,t as it}from"./useWorkspaceAwareNavigate-BbajQ7ta.js";import{t as at}from"./_virtual_lobe-ui-named_base-ui_confirmModal-B6WREEdZ.js";import{i as ot,n as st,r as ct,t as lt}from"./useDropdownMenu-DWbqljfu.js";import{n as ut,t as dt}from"./DeleteTopicConfirm-BLLLfYUx.js";import{n as ft,t as pt}from"./useActivityTime-CXQJ8Mea.js";import{n as mt,t as ht}from"./AgentBreadcrumb-EgmXWgxo.js";var gt,z,B=e((()=>{Xe(),gt={botChannels:[],groupBy:`byTime`,groupIds:[],search:``,selectMode:!1,selectedIds:[],sortBy:`updatedAt`,status:`active`,timeRange:`all`,triggers:[`chat`],viewMode:`card`},z=Ye(e=>({...gt,clearSelected:()=>e({selectedIds:[]}),exitSelectMode:()=>e({selectMode:!1,selectedIds:[]}),reset:()=>e(gt),selectAll:t=>e({selectedIds:t}),setBotChannels:t=>e({botChannels:t}),setGroupBy:t=>e({groupBy:t}),setGroupIds:t=>e({groupIds:t}),setSearch:t=>e({search:t}),setSortBy:t=>e({sortBy:t}),setStatus:t=>e({status:t}),setTimeRange:t=>e({timeRange:t}),setTriggers:t=>e({triggers:t}),setViewMode:t=>e({viewMode:t}),toggleBotChannel:t=>e(e=>e.botChannels.includes(t)?{botChannels:e.botChannels.filter(e=>e!==t)}:{botChannels:[...e.botChannels,t],triggers:[`bot`]}),toggleTrigger:t=>e(e=>{let n=e.triggers.includes(t);return{...n&&t===`bot`?{botChannels:[]}:{},triggers:n?e.triggers.filter(e=>e!==t):[...e.triggers,t]}}),toggleSelectMode:()=>e(e=>({selectMode:!e.selectMode,selectedIds:e.selectMode?[]:e.selectedIds})),toggleSelected:t=>e(e=>({selectedIds:e.selectedIds.includes(t)?e.selectedIds.filter(e=>e!==t):[...e.selectedIds,t]}))}))})),_t,vt,yt,bt=e((()=>{s(),P(),_t=t(a()),i(),Ve(),ot(),B(),vt=t(o()),yt=(0,_t.memo)(()=>{let{t:e}=n(`topic`),t=z(e=>e.selectedIds),r=z(e=>e.exitSelectMode),i=R(e=>e.activeAgentId);return(0,vt.jsx)(S,{icon:O,size:`small`,title:e(`management.bulk.move`),onClick:()=>{t.length!==0&&ct({onMoved:r,sourceAgentId:i,topicIds:t})}})}),yt.displayName=`AgentTopicManagerMoveToAgentButton`})),xt,V,St,Ct,wt=e((()=>{ve(),b(),s(),g(),ke(),P(),xt=t(a()),i(),ut(),Ve(),bt(),B(),V=t(o()),St={bar:I(`acss-dx1604`,[`.acss-dx1604{pointer-events:auto;padding-block:8px;padding-inline:16px;border:1px solid var(--ant-color-border-secondary);border-radius:999px;background:var(--ant-color-bg-elevated);box-shadow:var(--ant-box-shadow-secondary);}`],`
    pointer-events: auto;

    padding-block: 8px;
    padding-inline: 16px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: 999px;

    background: var(--ant-color-bg-elevated);
    box-shadow: var(--ant-box-shadow-secondary);
  `),divider:I(`acss-w8w49z`,[`.acss-w8w49z{width:1px;height:16px;margin-inline:2px;background:var(--ant-color-border-secondary);}`],`
    width: 1px;
    height: 16px;
    margin-inline: 2px;
    background: var(--ant-color-border-secondary);
  `),overlay:I(`acss-bsnqbj`,[`.acss-bsnqbj{pointer-events:none;position:fixed;z-index:1000;inset-block-end:24px;inset-inline:0;display:flex;justify-content:center;}`],`
    pointer-events: none;

    position: fixed;
    z-index: 1000;
    inset-block-end: 24px;
    inset-inline: 0;

    display: flex;
    justify-content: center;
  `)},Ct=(0,xt.memo)(()=>{let{t:e}=n(`topic`),t=z(e=>e.selectedIds),r=z(e=>e.exitSelectMode),i=R(e=>e.favoriteTopic),a=R(e=>e.updateTopicStatus),o=R(e=>e.removeTopic),s=(0,xt.useCallback)(async()=>{await Promise.all(t.map(e=>i(e,!0))),r()},[t,i,r]),c=(0,xt.useCallback)(async()=>{await Promise.all(t.map(e=>a({status:`completed`,topicId:e}))),r()},[t,a,r]),u=(0,xt.useCallback)(()=>{dt({content:e(`management.bulk.deleteConfirm`,{count:t.length}),okText:e(`management.bulk.delete`),onConfirm:async e=>{for(let n of t)await o(n,e);r()},title:e(`management.bulk.deleteTitle`),topicIds:t})},[t,e,o,r]);return t.length===0?null:(0,V.jsx)(`div`,{className:St.overlay,children:(0,V.jsxs)(l,{horizontal:!0,align:`center`,className:St.bar,gap:4,children:[(0,V.jsx)(_,{style:{marginInlineEnd:8},weight:500,children:e(`management.bulk.selectedCount`,{count:t.length})}),(0,V.jsx)(S,{icon:N,size:`small`,title:e(`management.bulk.favorite`),onClick:s}),(0,V.jsx)(S,{icon:oe,size:`small`,title:e(`management.bulk.archive`),onClick:c}),(0,V.jsx)(yt,{}),(0,V.jsx)(S,{icon:de,size:`small`,style:{color:L.colorError},title:e(`management.bulk.delete`),onClick:u}),(0,V.jsx)(`span`,{className:St.divider}),(0,V.jsx)(S,{icon:M,size:`small`,title:e(`management.bulk.cancel`),onClick:r})]})})}),Ct.displayName=`AgentTopicManagerBulkActionBar`})),Tt,H,Et,Dt=e((()=>{F(),b(),h(),d(),g(),ke(),P(),Tt=t(a()),i(),it(),H=t(o()),Et=(0,Tt.memo)(({agentId:e,hasFilters:t,onClearFilters:r})=>{let{t:i}=n(`topic`),a=rt();return(0,H.jsxs)(l,{align:`center`,flex:1,gap:16,justify:`center`,paddingBlock:64,children:[(0,H.jsx)(p,{icon:j,size:48,style:{color:L.colorTextQuaternary}}),(0,H.jsxs)(l,{align:`center`,gap:4,children:[(0,H.jsx)(_,{fontSize:16,weight:600,children:i(t?`management.empty.filtered.title`:`management.empty.noTopics.title`)}),(0,H.jsx)(_,{fontSize:13,type:`secondary`,children:i(t?`management.empty.filtered.desc`:`management.empty.noTopics.desc`)})]}),t?(0,H.jsx)(u,{onClick:r,children:i(`management.empty.filtered.action`)}):(0,H.jsx)(u,{type:`primary`,onClick:()=>a(me(e)),children:i(`management.empty.noTopics.action`)})]})}),Et.displayName=`AgentTopicManagerEmptyState`})),Ot,kt,At,jt=e((()=>{h(),Ge(),P(),Ot=t(a()),i(),mt(),ge(),B(),kt=t(o()),At=(0,Ot.memo)(({agentId:e})=>{let{t}=n(`topic`),r=z(e=>e.search),i=z(e=>e.setSearch);return(0,kt.jsx)(we,{left:(0,kt.jsx)(ht,{agentId:e,title:t(`management.title`)}),right:(0,kt.jsx)(Ke,{placeholder:t(`searchPlaceholder`),prefix:(0,kt.jsx)(p,{icon:ie,size:`small`,style:{marginInlineEnd:4}}),size:`small`,value:r,variant:`filled`,onChange:e=>i(e.target.value)}),styles:{left:{paddingInlineStart:8},right:{flex:1,maxWidth:400}}})}),At.displayName=`AgentTopicManagerHeader`})),U,W,G,Mt,K,Nt,Pt,Ft,It,Lt,Rt,q,zt,Bt,Vt=e((()=>{Ae(),b(),h(),Me(),s(),at(),Ue(),g(),be(),ke(),P(),U=t(a()),i(),nt(),Ve(),Ie(),B(),W=t(o()),G=32,Mt=2160*60*60*1e3,K=Te(({css:e})=>({addPill:e`
    cursor: pointer;
    user-select: none;

    display: inline-flex;
    gap: 6px;
    align-items: center;

    height: ${G}px;
    padding-inline: 12px;
    border: 1px dashed ${L.colorBorder};
    border-radius: ${G/2}px;

    font-size: 13px;
    color: ${L.colorTextSecondary};

    transition: all 0.15s;

    &:hover {
      border-color: ${L.colorPrimary};
      color: ${L.colorText};
    }
  `,chip:e`
    display: inline-flex;
    align-items: stretch;

    height: ${G}px;
    border: 1px solid ${L.colorBorderSecondary};
    border-radius: ${G/2}px;

    background: ${L.colorFillTertiary};

    transition: border-color 0.15s;

    &:hover {
      border-color: ${L.colorBorder};
    }
  `,chipClose:e`
    all: unset;

    cursor: pointer;

    display: inline-flex;
    align-items: center;

    padding-inline: 8px 12px;
    border-start-end-radius: ${G/2}px;
    border-end-end-radius: ${G/2}px;

    color: ${L.colorTextTertiary};

    &:hover {
      color: ${L.colorText};
      background: ${L.colorFillSecondary};
    }
  `,chipMain:e`
    cursor: pointer;

    display: inline-flex;
    gap: 6px;
    align-items: center;

    padding-block: 0;
    padding-inline: 12px 6px;

    font-size: 13px;
    color: ${L.colorText};
  `,chipValue:e`
    font-weight: 500;
    color: ${L.colorText};
  `,divider:e`
    width: 1px;
    height: 16px;
    margin-inline: 4px;
    background: ${L.colorBorderSecondary};
  `,sortPill:e`
    cursor: pointer;
    user-select: none;

    display: inline-flex;
    gap: 6px;
    align-items: center;

    height: ${G}px;
    padding-inline: 12px;
    border-radius: ${G/2}px;

    font-size: 13px;
    color: ${L.colorText};

    background: ${L.colorFillTertiary};

    &:hover {
      background: ${L.colorFillSecondary};
    }
  `})),Nt=[{key:`all`,labelKey:`management.filters.status.all`},{key:`active`,labelKey:`management.filters.status.active`},{key:`running`,labelKey:`management.filters.status.running`},{key:`completed`,labelKey:`management.filters.status.completed`}],Pt=[`chat`,`bot`,`api`,`task`,`eval`],Ft={api:ce,bot:le,chat:T,eval:ne,task:C},It=[`all`,`today`,`week`,`month`],Lt=[`updatedAt`,`createdAt`,`title`],Rt=[`byTime`,`byProject`,`none`],q=({visible:e})=>(0,W.jsx)(`span`,{style:{display:`inline-block`,width:12},children:e?`✓`:``}),zt=(0,U.memo)(({icon:e,iconNode:t,label:n,value:r,items:i,onClear:a})=>(0,W.jsxs)(`span`,{className:K.chip,children:[(0,W.jsx)(je,{items:i,children:(0,W.jsxs)(`span`,{className:K.chipMain,children:[t??(e&&(0,W.jsx)(p,{icon:e,size:12})),(0,W.jsxs)(_,{style:{color:L.colorTextSecondary,fontSize:12},children:[n,`:`]}),(0,W.jsx)(`span`,{className:K.chipValue,children:r}),(0,W.jsx)(p,{icon:ae,size:10})]})}),(0,W.jsx)(`button`,{"aria-label":`Clear ${n}`,className:K.chipClose,type:`button`,onClick:e=>{e.stopPropagation(),a()},children:(0,W.jsx)(p,{icon:M,size:12})})]})),Bt=(0,U.memo)(({projects:e,statusCounts:t,botChannelOptions:r})=>{let{t:i}=n(`topic`),a=R(Le.agentTopicsViewTopics),o=R(e=>e.updateTopicStatus),s=z(e=>e.status),c=z(e=>e.setStatus),u=z(e=>e.groupIds),d=z(e=>e.setGroupIds),f=z(e=>e.triggers),h=z(e=>e.setTriggers),g=z(e=>e.toggleTrigger),v=z(e=>e.botChannels),b=z(e=>e.setBotChannels),x=z(e=>e.toggleBotChannel),C=z(e=>e.timeRange),w=z(e=>e.setTimeRange),T=z(e=>e.sortBy),ne=z(e=>e.setSortBy),E=z(e=>e.groupBy),O=z(e=>e.setGroupBy),A=z(e=>e.viewMode),ie=z(e=>e.setViewMode),j=(0,U.useMemo)(()=>Pt.map(e=>({extra:(0,W.jsx)(q,{visible:f.includes(e)}),icon:(0,W.jsx)(p,{icon:Ft[e],size:14}),key:e,label:i(`management.filters.trigger.${e}`),onClick:()=>g(e)})),[f,i,g]),ce=(0,U.useMemo)(()=>e.length===0?[{disabled:!0,key:`empty`,label:i(`management.filters.project.empty`)}]:e.map(e=>({icon:(0,W.jsx)(q,{visible:u.includes(e.value)}),key:e.value,label:e.label,onClick:()=>d(u.includes(e.value)?u.filter(t=>t!==e.value):[...u,e.value])})),[e,u,i,d]),N=(0,U.useMemo)(()=>r.length===0?[{disabled:!0,key:`empty`,label:i(`management.filters.botChannel.empty`)}]:r.map(e=>{let t=tt(e.key);return{extra:(0,W.jsx)(q,{visible:v.includes(e.key)}),icon:t?(0,W.jsx)(t,{size:14}):(0,W.jsx)(p,{icon:le,size:14}),key:e.key,label:e.label,onClick:()=>x(e.key)}}),[r,v,i,x]),de=(0,U.useMemo)(()=>It.map(e=>({icon:(0,W.jsx)(q,{visible:C===e}),key:e,label:i(`management.filters.time.${e}`),onClick:()=>w(e)})),[C,i,w]),fe=(0,U.useMemo)(()=>Lt.map(e=>({icon:(0,W.jsx)(q,{visible:T===e}),key:e,label:i(`management.sort.${e}`),onClick:()=>ne(e)})),[T,i,ne]),P=(0,U.useMemo)(()=>Rt.map(e=>({icon:(0,W.jsx)(q,{visible:E===e}),key:e,label:i(`management.group.${e}`),onClick:()=>O(e)})),[E,i,O]),me=f.length>0,F=u.length>0,he=v.length>0,ge=C!==`all`,_e=me||F||he||ge,ve=(0,U.useMemo)(()=>{let e=[];return me||e.push({children:j,icon:(0,W.jsx)(p,{icon:k,size:14}),key:`trigger`,label:i(`management.filters.trigger.label`),type:`submenu`}),F||e.push({children:ce,icon:(0,W.jsx)(p,{icon:ue,size:14}),key:`project`,label:i(`management.filters.project.label`),type:`submenu`}),he||e.push({children:N,icon:(0,W.jsx)(p,{icon:le,size:14}),key:`botChannel`,label:i(`management.filters.botChannel.label`),type:`submenu`}),ge||e.push({children:de,icon:(0,W.jsx)(p,{icon:re,size:14}),key:`time`,label:i(`management.filters.time.label`),type:`submenu`}),e},[me,F,he,ge,j,ce,N,de,i]),I=(0,U.useMemo)(()=>u.length===1?e.find(e=>e.value===u[0])?.label??u[0]:`${u.length} selected`,[u,e]),ye=f.length===1?i(`management.filters.trigger.${f[0]}`):`${f.length} selected`,be=(0,U.useMemo)(()=>{if(v.length!==1)return`${v.length} selected`;let e=v[0];return r.find(t=>t.key===e)?.label??e},[v,r]),xe=(0,U.useMemo)(()=>{if(v.length!==1)return(0,W.jsx)(p,{icon:le,size:12});let e=tt(v[0]);return e?(0,W.jsx)(e,{size:12}):(0,W.jsx)(p,{icon:le,size:12})},[v]),Se=(0,U.useCallback)(()=>{let e=Date.now()-Mt,t=(a??[]).filter(t=>t.status===`completed`?!1:(typeof t.updatedAt==`number`?t.updatedAt:new Date(t.updatedAt).getTime())<e);if(t.length===0){m.info(i(`management.actionsMenu.archiveStale.noneFound`));return}ee({content:i(`management.actionsMenu.archiveStale.confirm`,{count:t.length}),okText:i(`management.actionsMenu.archiveStale.confirmOk`),onOk:async()=>{for(let e of t)await o({status:`completed`,topicId:e.id});m.success(i(`management.actionsMenu.archiveStale.done`,{count:t.length}))},title:i(`management.actionsMenu.archiveStale.title`)})},[a,o,i]),Ce=(0,U.useMemo)(()=>{let e=[{children:P,key:`group`,label:`${i(`management.group.label`)}: ${i(`management.group.${E}`)}`,type:`submenu`}];return _e&&e.push({key:`d1`,type:`divider`},{icon:(0,W.jsx)(p,{icon:M,size:14}),key:`clear`,label:i(`management.filters.clearAll`,{defaultValue:`Clear all filters`}),onClick:()=>{h([]),d([]),b([]),w(`all`)}}),e.push({key:`d2`,type:`divider`},{icon:(0,W.jsx)(p,{icon:oe,size:14}),key:`archive-stale`,label:i(`management.actionsMenu.archiveStale.label`),onClick:Se}),e},[P,E,_e,i,h,d,b,w,Se]);return(0,W.jsxs)(l,{horizontal:!0,align:`center`,gap:6,wrap:`wrap`,children:[(0,W.jsx)(We,{activeKey:s,size:`small`,style:{width:`auto`},items:Nt.map(e=>{let n=t[e.key]??0;return{key:e.key,label:(0,W.jsxs)(l,{horizontal:!0,align:`center`,gap:6,children:[(0,W.jsx)(`span`,{children:i(e.labelKey)}),(0,W.jsx)(_,{style:{color:s===e.key?`inherit`:L.colorTextTertiary,fontSize:12,fontVariantNumeric:`tabular-nums`,opacity:s===e.key?.7:1},children:n})]})}}),onChange:e=>c(e)}),(0,W.jsx)(`span`,{className:K.divider}),me&&(0,W.jsx)(zt,{icon:k,items:j,label:i(`management.filters.trigger.label`),value:ye,onClear:()=>h([])}),F&&(0,W.jsx)(zt,{icon:ue,items:ce,label:i(`management.filters.project.label`),value:I,onClear:()=>d([])}),he&&(0,W.jsx)(zt,{iconNode:xe,items:N,label:i(`management.filters.botChannel.label`),value:be,onClear:()=>b([])}),ge&&(0,W.jsx)(zt,{icon:re,items:de,label:i(`management.filters.time.label`),value:i(`management.filters.time.${C}`),onClear:()=>w(`all`)}),ve.length>0&&(0,W.jsx)(je,{items:ve,children:(0,W.jsxs)(`span`,{className:K.addPill,children:[(0,W.jsx)(p,{icon:pe,size:12}),i(`management.filters.add`,{defaultValue:_e?`Add filter`:`Filter`})]})}),(0,W.jsx)(l,{flex:1}),(0,W.jsx)(We,{activeKey:A,size:`small`,style:{width:`auto`},items:[{key:`card`,label:(0,W.jsx)(y,{title:i(`management.view.card`),children:(0,W.jsx)(p,{icon:se})})},{key:`list`,label:(0,W.jsx)(y,{title:i(`management.view.list`),children:(0,W.jsx)(p,{icon:te})})}],onChange:e=>ie(e)}),(0,W.jsx)(`span`,{className:K.divider}),(0,W.jsx)(je,{items:fe,children:(0,W.jsxs)(`span`,{className:K.sortPill,children:[(0,W.jsxs)(_,{style:{color:L.colorTextSecondary,fontSize:12},children:[i(`management.sort.label`),`:`]}),(0,W.jsx)(`span`,{style:{fontWeight:500},children:i(`management.sort.${T}`)}),(0,W.jsx)(p,{icon:ae,size:10})]})}),(0,W.jsx)(je,{items:Ce,placement:`bottomRight`,children:(0,W.jsx)(S,{icon:D,size:{blockSize:G,size:18},title:i(`management.actionsMenu.title`)})})]})}),Bt.displayName=`AgentTopicManagerToolbar`})),Ht,Ut,Wt,Gt,Kt=e((()=>{b(),ke(),Ht=t(a()),i(),Je(),$e(),Ut=t(o()),Wt={...Object.fromEntries(Object.entries(qe).map(([e,t])=>[e,t.color])),idle:L.colorTextQuaternary},Gt=(0,Ht.memo)(({status:e})=>{let{t}=n(`topic`),{isDarkMode:r}=Se(),i=e||`idle`,a=Wt[i]??L.colorTextQuaternary,o=`management.status.${i}`,s=i===`running`,c=r?L.colorWarningBorder:`color-mix(in srgb, ${L.colorWarning} 45%, transparent)`;return(0,Ut.jsxs)(l,{horizontal:!0,align:`center`,gap:6,children:[s?(0,Ut.jsx)(et,{ringColor:c,size:10,style:{color:L.colorWarning}}):(0,Ut.jsx)(`span`,{style:{background:a,borderRadius:`50%`,flexShrink:0,height:6,width:6}}),(0,Ut.jsx)(`span`,{style:{color:L.colorTextSecondary,fontSize:11},children:t(o)})]})}),Gt.displayName=`AgentTopicManagerStatusDot`})),qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,un=e((()=>{Be(),qt=t(r()),Jt=1440*60*1e3,Yt=(e,t)=>{switch(t){case`all`:return!0;case`archived`:return e.status===`archived`;case`completed`:return e.status===`completed`;case`running`:return e.status===`running`;case`active`:return!e.status||e.status===`active`;default:return!0}},Xt=(e,t)=>{if(t.length===0)return!0;let n=Fe(e)??``;return t.includes(n)},Zt=(e,t)=>{if(t.length===0)return!0;let n=e.trigger??`chat`;return t.includes(n)},Qt=(e,t)=>{if(t.length===0)return!0;let n=e.metadata?.bot?.platform;return!!n&&t.includes(n)},$t=(e,t)=>{if(t===`all`)return!0;let n=e.updatedAt?new Date(e.updatedAt).getTime():0;if(!n)return!1;let r=Date.now()-n;switch(t){case`today`:return r<Jt;case`week`:return r<7*Jt;case`month`:return r<30*Jt;default:return!0}},en=(e,t)=>{let n=[...e];switch(t){case`updatedAt`:n.sort((e,t)=>new Date(t.updatedAt??0).getTime()-new Date(e.updatedAt??0).getTime());break;case`createdAt`:n.sort((e,t)=>new Date(t.createdAt??0).getTime()-new Date(e.createdAt??0).getTime());break;case`title`:n.sort((e,t)=>(e.title??``).localeCompare(t.title??``));break}return n},tn=e=>e.split(/[/\\]+/).findLast(Boolean)??e,nn=e=>{let t=Fe(e);return t?tn(t):void 0},rn=e=>{let t=Fe(e),n=He(e)??t;if(!n)return;let r=tn(n),i=t?tn(t):void 0,a=i&&i!==r?`${i}/${r}`:r,o=e.metadata?.workingDirectoryConfig?.git?.branch;return o?`${a} · ${o}`:a},an={discord:`Discord`,feishu:`Feishu`,googlechat:`Google Chat`,imessage:`iMessage`,lark:`Lark`,line:`Line`,msteams:`Microsoft Teams`,qq:`QQ`,slack:`Slack`,telegram:`Telegram`,wechat:`WeChat`,whatsapp:`WhatsApp`},on=e=>an[e.toLowerCase()]??e,sn=e=>{let t=new Set;for(let n of e){let e=n.metadata?.bot?.platform;e&&t.add(e)}return Array.from(t).map(e=>({key:e,label:on(e)}))},cn=(e,t)=>/^\d{4}/.test(e)?e.includes(`-`)?(0,qt.default)(e).format(`MMMM`):e:t(`groupTitle.byTime.${e}`),ln=(e,t,n)=>e===`no-project`?n(`management.group.noProject`):t??e.replace(/^project:/,``)})),dn,J,Y,fn,pn=e((()=>{ve(),F(),xe(),f(),b(),h(),x(),Ne(),g(),ke(),P(),dn=t(a()),i(),it(),pt(),nt(),Kt(),B(),un(),J=t(o()),Y={card:I(`acss-iihzae`,[`.acss-iihzae{cursor:pointer;position:relative;display:flex;flex-direction:column;min-height:140px;padding:14px;transition:transform 0.18s,box-shadow 0.18s,border-color 0.18s;}`,`.acss-iihzae:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgb(0 0 0 / 6%);}`],`
    cursor: pointer;

    position: relative;

    display: flex;
    flex-direction: column;

    /* min-height keeps short cards consistent without forcing tall empty
       whitespace — preview + footer can still grow the card naturally. */
    min-height: 140px;
    padding: 14px;

    transition:
      transform 0.18s,
      box-shadow 0.18s,
      border-color 0.18s;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgb(0 0 0 / 6%);
    }
  `),cardSelected:I(`acss-jxr34h`,[`.acss-jxr34h{border-color:var(--ant-color-primary);box-shadow:0 0 0 1px var(--ant-color-primary);}`],`
    border-color: var(--ant-color-primary);
    box-shadow: 0 0 0 1px var(--ant-color-primary);
  `),checkbox:I(`acss-nhfyxo`,[`.acss-nhfyxo{position:absolute;z-index:1;inset-block-start:10px;inset-inline-end:10px;}`],`
    position: absolute;
    z-index: 1;
    inset-block-start: 10px;
    inset-inline-end: 10px;
  `),checkboxBox:I(`acss-16j0kmm`,[`.acss-16j0kmm{border-color:var(--ant-color-border);}`],`
    border-color: var(--ant-color-border);
  `),description:I(`acss-16kyzkk`,[`.acss-16kyzkk{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;}`],`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  `),footer:I(`acss-1pve1qd`,[`.acss-1pve1qd{margin-block-start:auto;padding-block-start:10px;border-block-start:1px solid var(--ant-color-split);}`],`
    /* push to bottom so cards with short content keep the stats row anchored */
    margin-block-start: auto;
    padding-block-start: 10px;
    border-block-start: 1px solid var(--ant-color-split);
  `),title:I(`acss-1us6zhz`,[`.acss-1us6zhz{overflow:hidden;display:-webkit-box;flex:1;-webkit-box-orient:vertical;-webkit-line-clamp:1;}`],`
    overflow: hidden;
    display: -webkit-box;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  `),titleRow:I(`acss-ja4x2w`,[`.acss-ja4x2w{padding-inline-end:28px;}`],`
    padding-inline-end: 28px;
  `)},fn=(0,dn.memo)(({topic:e,agentId:t})=>{let{t:r}=n(`topic`),i=rt(),a=z(e=>e.selectMode),o=z(t=>t.selectedIds.includes(e.id)),s=z(e=>e.toggleSelected),u=z(e=>e.toggleSelectMode),d=(0,dn.useCallback)(n=>{if(a||n.metaKey||n.ctrlKey){n.preventDefault(),s(e.id);return}i(he(t,e.id))},[a,e.id,t,s,i]),f=(0,dn.useCallback)(()=>{a||u(),s(e.id)},[a,e.id,s,u]),m=(0,dn.useCallback)(e=>{e.stopPropagation()},[]),h=rn(e),g=e.status??`active`,y=e.metadata?.bot?.platform,ee=y?tt(y):void 0,b=e.description?.trim()||e.historySummary?.trim()||e.firstUserMessage?.trim(),x=ft(e.updatedAt),S=Number(e.messageCount??0),C=Number(e.tokenUsage??0),T=Number(e.cost??0);return(0,J.jsxs)(c,{className:[Y.card,o&&Y.cardSelected].filter(Boolean).join(` `),gap:8,variant:`outlined`,onClick:d,children:[(0,J.jsx)(`div`,{className:Y.checkbox,onClick:m,children:(0,J.jsx)(v,{checked:o,classNames:{checkbox:Y.checkboxBox},size:18,onChange:f})}),(0,J.jsxs)(l,{horizontal:!0,align:`center`,className:Y.titleRow,gap:6,children:[e.favorite&&(0,J.jsx)(p,{icon:N,size:13,style:{color:L.colorWarning,flexShrink:0}}),ee&&(0,J.jsx)(ee,{color:L.colorTextDescription,size:14,style:{flexShrink:0}}),(0,J.jsx)(_,{className:Y.title,fontSize:14,weight:600,children:e.title||r(`defaultTitle`)})]}),b&&(0,J.jsx)(_,{className:Y.description,fontSize:12,type:`secondary`,children:b}),h&&(0,J.jsx)(Pe,{icon:(0,J.jsx)(p,{icon:E,size:11}),size:`small`,children:h}),(0,J.jsxs)(l,{horizontal:!0,align:`center`,className:Y.footer,justify:`space-between`,children:[(0,J.jsxs)(l,{horizontal:!0,align:`center`,gap:10,style:{color:L.colorTextQuaternary,fontSize:11},children:[S>0&&(0,J.jsxs)(l,{horizontal:!0,align:`center`,gap:3,children:[(0,J.jsx)(p,{icon:A,size:11}),S]}),C>0&&(0,J.jsxs)(l,{horizontal:!0,align:`center`,gap:3,title:`${C} tokens`,children:[(0,J.jsx)(p,{icon:fe,size:11}),Ee(C)]}),T>0&&(0,J.jsxs)(l,{horizontal:!0,align:`center`,gap:3,title:`$${T.toFixed(4)}`,children:[(0,J.jsx)(p,{icon:w,size:11}),_e(T,2)]}),(0,J.jsx)(`span`,{title:x.title,children:x.text})]}),(0,J.jsx)(Gt,{status:g})]})]})}),fn.displayName=`AgentTopicCard`})),mn,hn,gn,_n,vn=e((()=>{ve(),b(),g(),mn=t(a()),i(),pn(),un(),hn=t(o()),gn={grid:I(`acss-zaau13`,[`.acss-zaau13{display:grid;grid-template-columns:repeat(auto-fill, minmax(min(280px, 100%), 1fr));gap:12px;width:100%;min-width:0;}`,`@media (max-width: 767.98px){.acss-zaau13{grid-template-columns:repeat(auto-fill, minmax(min(240px, 100%), 1fr));}}`],`
    display: grid;

    /*
      min(280px, 100%) lets columns shrink below 280px when the available
      width itself is narrower (e.g. agent sidebar expanded), so the layout
      keeps wrapping instead of overflowing horizontally.
    */
    grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
    gap: 12px;

    width: 100%;
    min-width: 0;

    @media (max-width: 767.98px) {
      grid-template-columns: repeat(auto-fill, minmax(min(240px, 100%), 1fr));
    }
  `),groupTitle:I(`acss-1tw1dh1`,[`.acss-1tw1dh1{margin-block-start:8px;padding-block-end:4px;font-size:13px;font-weight:500;color:var(--ant-color-text-secondary);}`],`
    margin-block-start: 8px;
    padding-block-end: 4px;

    font-size: 13px;
    font-weight: 500;
    color: var(--ant-color-text-secondary);
  `)},_n=(0,mn.memo)(({groups:e,agentId:t,showGroupTitles:r,groupBy:i})=>{let{t:a}=n(`topic`);return(0,hn.jsx)(l,{gap:12,children:e.map(e=>{if(e.children.length===0)return null;let n=i===`byProject`?ln(e.id,e.title,a):e.title||cn(e.id,a);return(0,hn.jsxs)(mn.Fragment,{children:[r&&(0,hn.jsx)(_,{as:`div`,className:gn.groupTitle,children:n}),(0,hn.jsx)(`div`,{className:gn.grid,children:e.children.map(e=>(0,hn.jsx)(fn,{agentId:t,topic:e},e.id))})]},e.id)})})}),_n.displayName=`AgentTopicManagerGrid`})),yn,X,bn,Z,xn,Sn,Cn=e((()=>{ve(),F(),Ae(),b(),h(),s(),x(),Ne(),g(),ke(),P(),yn=t(a()),i(),lt(),it(),pt(),nt(),Kt(),B(),un(),X=t(o()),bn=[`chat`,`api`,`task`,`eval`],Z={cell:I(`acss-872usz`,[`.acss-872usz{overflow:hidden;min-width:0;}`],`
    overflow: hidden;
    min-width: 0;
  `),checkboxBox:I(`acss-16j0kmm`,[`.acss-16j0kmm{border-color:var(--ant-color-border);}`],`
    border-color: var(--ant-color-border);
  `),groupBar:I(`acss-12ou8ek`,[`.acss-12ou8ek{display:flex;gap:6px;align-items:baseline;padding-block:8px;padding-inline:16px;border-block-end:1px solid var(--ant-color-split);font-size:12px;font-weight:500;color:var(--ant-color-text-secondary);background:var(--ant-color-fill-quaternary);}`],`
    display: flex;
    gap: 6px;
    align-items: baseline;

    padding-block: 8px;
    padding-inline: 16px;
    border-block-end: 1px solid var(--ant-color-split);

    font-size: 12px;
    font-weight: 500;
    color: var(--ant-color-text-secondary);

    background: var(--ant-color-fill-quaternary);
  `),groupCount:I(`acss-1m9dvw8`,[`.acss-1m9dvw8{font-size:11px;font-weight:400;color:var(--ant-color-text-quaternary);}`],`
    font-size: 11px;
    font-weight: 400;
    color: var(--ant-color-text-quaternary);
  `),header:I(`acss-16ngg5n`,[`.acss-16ngg5n{position:sticky;z-index:2;inset-block-start:0;display:grid;grid-template-columns:24px minmax(0, 1fr) 120px 100px 80px 100px 32px;gap:12px;align-items:center;padding-block:10px;padding-inline:16px;border-block-end:1px solid var(--ant-color-split);font-size:12px;font-weight:500;color:var(--ant-color-text-secondary);background:var(--ant-color-bg-elevated);}`],`
    position: sticky;
    z-index: 2;
    inset-block-start: 0;

    display: grid;
    grid-template-columns: 24px minmax(0, 1fr) 120px 100px 80px 100px 32px;
    gap: 12px;
    align-items: center;

    padding-block: 10px;
    padding-inline: 16px;
    border-block-end: 1px solid var(--ant-color-split);

    font-size: 12px;
    font-weight: 500;
    color: var(--ant-color-text-secondary);

    /* opaque so scrolled rows don't bleed through */
    background: var(--ant-color-bg-elevated);
  `),headerCellEnd:I(`acss-1iz1lrn`,[`.acss-1iz1lrn{text-align:end;}`],`
    text-align: end;
  `),list:I(`acss-1glcl9h`,[`.acss-1glcl9h{position:relative;overflow:hidden;border:1px solid var(--ant-color-border-secondary);border-radius:12px;background:var(--ant-color-bg-container);}`],`
    position: relative;

    overflow: hidden;

    border: 1px solid var(--ant-color-border-secondary);
    border-radius: 12px;

    background: var(--ant-color-bg-container);
  `),row:I(`acss-14fzgwe`,[`.acss-14fzgwe{cursor:pointer;display:grid;grid-template-columns:24px minmax(0, 1fr) 120px 100px 80px 100px 32px;gap:12px;align-items:center;padding-block:10px;padding-inline:16px;border-block-end:1px solid var(--ant-color-split);transition:background 0.12s;}`,`.acss-14fzgwe:hover{background:var(--ant-color-fill-tertiary);}`,`.acss-14fzgwe:last-child{border-block-end:none;}`],`
    cursor: pointer;

    display: grid;
    grid-template-columns: 24px minmax(0, 1fr) 120px 100px 80px 100px 32px;
    gap: 12px;
    align-items: center;

    padding-block: 10px;
    padding-inline: 16px;
    border-block-end: 1px solid var(--ant-color-split);

    transition: background 0.12s;

    &:hover {
      background: var(--ant-color-fill-tertiary);
    }

    &:last-child {
      border-block-end: none;
    }
  `),rowSelected:I(`acss-12dlsl`,[`.acss-12dlsl{background:var(--ant-color-primary-bg);}`,`.acss-12dlsl:hover{background:var(--ant-color-primary-bg-hover);}`],`
    background: var(--ant-color-primary-bg);

    &:hover {
      background: var(--ant-color-primary-bg-hover);
    }
  `),sub:I(`acss-1t8ptuq`,[`.acss-1t8ptuq{overflow:hidden;margin-block-start:2px;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;
    margin-block-start: 2px;
    text-overflow: ellipsis;
    white-space: nowrap;
  `),title:I(`acss-1n5gm1d`,[`.acss-1n5gm1d{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `)},xn=(0,yn.memo)(({topic:e,agentId:t})=>{let{t:r}=n(`topic`),i=rt(),a=z(e=>e.selectMode),o=z(t=>t.selectedIds.includes(e.id)),s=z(e=>e.toggleSelected),c=z(e=>e.toggleSelectMode),{dropdownMenu:u}=st({fav:e.favorite,id:e.id,status:e.status,title:e.title}),d=(0,yn.useCallback)(n=>{if(a||n.metaKey||n.ctrlKey){n.preventDefault(),s(e.id);return}i(he(t,e.id))},[a,e.id,t,s,i]),f=(0,yn.useCallback)(()=>{a||c(),s(e.id)},[a,e.id,s,c]),m=e.status??`active`,h=rn(e),g=ft(e.updatedAt),y=e.trigger??`chat`,ee=r(`management.filters.trigger.${bn.includes(y)?y:`chat`}`),b=e.metadata?.bot?.platform,x=b?tt(b):void 0;return(0,X.jsxs)(`div`,{className:[Z.row,o&&Z.rowSelected].filter(Boolean).join(` `),onClick:d,children:[(0,X.jsx)(`div`,{onClick:e=>e.stopPropagation(),children:(0,X.jsx)(v,{checked:o,classNames:{checkbox:Z.checkboxBox},size:18,onChange:f})}),(0,X.jsxs)(`div`,{className:Z.cell,children:[(0,X.jsxs)(l,{horizontal:!0,align:`center`,gap:6,children:[e.favorite&&(0,X.jsx)(p,{icon:N,size:12,style:{color:L.colorWarning,flexShrink:0}}),x&&(0,X.jsx)(x,{color:L.colorTextDescription,size:13,style:{flexShrink:0}}),(0,X.jsx)(_,{className:Z.title,fontSize:13,weight:500,children:e.title||r(`defaultTitle`)})]}),e.historySummary&&(0,X.jsx)(_,{className:Z.sub,fontSize:11,type:`secondary`,children:e.historySummary})]}),(0,X.jsx)(`div`,{className:Z.cell,children:h?(0,X.jsx)(Pe,{icon:(0,X.jsx)(p,{icon:E,size:11}),size:`small`,children:h}):(0,X.jsx)(_,{fontSize:12,type:`secondary`,children:`—`})}),(0,X.jsx)(Gt,{status:m}),(0,X.jsx)(_,{fontSize:12,type:`secondary`,children:ee}),(0,X.jsx)(_,{fontSize:12,style:{color:L.colorTextQuaternary,textAlign:`end`},title:g.title,children:g.text}),(0,X.jsx)(je,{items:u,children:(0,X.jsx)(S,{icon:D,size:`small`,onClick:e=>e.stopPropagation()})})]})}),xn.displayName=`AgentTopicManagerRow`,Sn=(0,yn.memo)(({groups:e,agentId:t,showGroupTitles:r,groupBy:i})=>{let{t:a}=n(`topic`),o=z(e=>e.selectedIds),s=z(e=>e.selectMode),c=z(e=>e.selectAll),l=z(e=>e.clearSelected),u=z(e=>e.toggleSelectMode),d=e.flatMap(e=>e.children.map(e=>e.id)),f=new Set(o),p=d.reduce((e,t)=>e+ +!!f.has(t),0),m=d.length>0&&p===d.length,h=p>0&&!m;return(0,X.jsxs)(`div`,{className:Z.list,children:[(0,X.jsxs)(`div`,{className:Z.header,children:[(0,X.jsx)(v,{checked:m,classNames:{checkbox:Z.checkboxBox},indeterminate:h,size:18,onChange:()=>{m?l():(s||u(),c(d))}}),(0,X.jsx)(`span`,{children:a(`management.columns.title`)}),(0,X.jsx)(`span`,{children:a(`management.columns.project`)}),(0,X.jsx)(`span`,{children:a(`management.columns.status`)}),(0,X.jsx)(`span`,{children:a(`management.columns.trigger`)}),(0,X.jsx)(`span`,{className:Z.headerCellEnd,children:a(`management.columns.updated`)}),(0,X.jsx)(`span`,{})]}),e.map(e=>{if(e.children.length===0)return null;let n=i===`byProject`?ln(e.id,e.title,a):e.title||cn(e.id,a);return(0,X.jsxs)(yn.Fragment,{children:[r&&(0,X.jsxs)(`div`,{className:Z.groupBar,children:[(0,X.jsx)(`span`,{children:n}),(0,X.jsx)(`span`,{className:Z.groupCount,children:e.children.length})]}),e.children.map(e=>(0,X.jsx)(xn,{agentId:t,topic:e},e.id))]},e.id)})]})}),Sn.displayName=`AgentTopicManagerListView`})),Q,$,wn,Tn,En=e((()=>{Be(),b(),Q=t(a()),i(),Ze(),Ce(),Ve(),Ie(),ye(),wt(),Dt(),jt(),B(),Vt(),vn(),Cn(),un(),$=t(o()),wn=30,Tn=(0,Q.memo)(()=>{let{t:e}=n(`topic`),t=R(e=>e.activeAgentId),r=R(e=>e.useFetchAgentTopicsView),i=R(e=>e.useSearchTopics),a=R(e=>e.loadMoreAgentTopicsView),o=R(Le.agentTopicsViewTopics),s=R(Le.agentTopicsViewHasMore),c=R(Le.agentTopicsViewIsLoadingMore),u=R(Le.agentTopicsViewLoadMoreError),d=z(e=>e.reset),f=z(e=>e.search),p=z(e=>e.status),m=z(e=>e.groupIds),h=z(e=>e.triggers),g=z(e=>e.botChannels),_=z(e=>e.timeRange),v=z(e=>e.sortBy),y=z(e=>e.groupBy),ee=z(e=>e.viewMode),b=z(e=>e.setStatus),x=z(e=>e.setGroupIds),S=z(e=>e.setTriggers),C=z(e=>e.setBotChannels),w=z(e=>e.setTimeRange),T=z(e=>e.setSearch);(0,Q.useEffect)(()=>{d()},[t,d]);let{error:te,isLoading:ne,mutate:E}=r(!0,{agentId:t,pageSize:wn,withDetails:!0}),D=f.trim(),{data:re}=i(D.length>0?D:void 0,{agentId:t}),O=(0,Q.useMemo)(()=>D.length>0?re??[]:o??[],[D,re,o]),k=(0,Q.useMemo)(()=>O.filter(e=>Xt(e,m)&&Zt(e,h)&&$t(e,_)&&Qt(e,g)),[O,m,h,_,g]),A=(0,Q.useMemo)(()=>en(k.filter(e=>Yt(e,p)),v),[k,p,v]),ie=(0,Q.useMemo)(()=>({active:k.filter(e=>Yt(e,`active`)).length,all:k.length,archived:k.filter(e=>Yt(e,`archived`)).length,completed:k.filter(e=>Yt(e,`completed`)).length,running:k.filter(e=>Yt(e,`running`)).length}),[k]),j=D.length>0,M=y!==`none`&&!j,ae=(0,Q.useMemo)(()=>M?y===`byProject`?ze(A,v===`createdAt`?`createdAt`:`updatedAt`):Re(A):[{children:A,id:`all`}],[A,M,y,v]),oe=(0,Q.useMemo)(()=>{let e=new Map;for(let t of O){let n=Fe(t);n&&!e.has(n)&&e.set(n,nn(t)??n)}return Array.from(e,([e,t])=>({label:t,value:e}))},[O]),se=(0,Q.useMemo)(()=>sn(O),[O]),ce=A.length,N=p!==`active`&&p!==`all`||m.length>0||h.length>0||g.length>0||_!==`all`||D.length>0,le=()=>{b(`all`),x([]),S([]),C([]),w(`all`),T(``)},ue=(0,Q.useRef)(null),de=(0,Q.useRef)(null);return(0,Q.useEffect)(()=>{if(j)return;let e=ue.current,t=de.current;if(!e||!t)return;let n=new IntersectionObserver(([e])=>{e.isIntersecting&&s&&!c&&!u&&a()},{root:e,rootMargin:`300px`});return n.observe(t),()=>n.disconnect()},[s,c,j,a,u]),t?(0,$.jsxs)(l,{flex:1,height:`100%`,style:{overflow:`hidden`},children:[(0,$.jsx)(At,{agentId:t}),(0,$.jsx)(`div`,{ref:ue,style:{display:`flex`,flex:1,flexDirection:`column`,minWidth:0,overflowY:`auto`,padding:`20px 24px`},children:(0,$.jsxs)(l,{gap:16,style:{marginInline:`auto`,maxWidth:1440,width:`100%`},children:[(0,$.jsx)(Bt,{botChannelOptions:se,projects:oe,statusCounts:ie}),(0,$.jsx)(Ct,{}),!j&&te&&!ne&&O.length===0?(0,$.jsx)(Qe,{error:te,variant:`block`,onRetry:()=>{E()}}):ne&&O.length===0?(0,$.jsx)(Oe,{chrome:`body`}):ce===0?(0,$.jsx)(Et,{agentId:t,hasFilters:N,onClearFilters:le}):(0,$.jsxs)($.Fragment,{children:[ee===`card`?(0,$.jsx)(_n,{agentId:t,groupBy:y,groups:ae,showGroupTitles:M}):(0,$.jsx)(Sn,{agentId:t,groupBy:y,groups:ae,showGroupTitles:M}),!j&&s&&(0,$.jsx)(`div`,{"aria-hidden":!0,ref:de,style:{height:1}}),!j&&c&&(0,$.jsx)(l,{align:`center`,paddingBlock:12,children:(0,$.jsx)(`span`,{className:De.shinyText,style:{fontSize:12},children:e(`management.loadingMore`)})}),!j&&u&&!c&&(0,$.jsx)(l,{align:`center`,paddingBlock:12,children:(0,$.jsx)(Qe,{error:u,variant:`inline`,onRetry:()=>{a()}})})]})]})})]}):(0,$.jsx)(Oe,{})}),Tn.displayName=`AgentTopicManager`})),Dn,On;e((()=>{En(),Dn=t(o()),On=()=>(0,Dn.jsx)(Tn,{})}))();export{On as default};