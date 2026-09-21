import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,Q as r,j as i}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as a,T as o,c as s,i as c}from"../vendor/vendor-react-B9HSWrpN.js";import{B as l,Bt as u,Ht as d,Kt as f,Mt as p,Nt as m,Ut as ee,Vt as h,X as g,Xn as _,Yn as te,Z as ne,Zn as v,at as y,i as b,it as x,lt as re,qt as S,r as C,z as w}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Ir as ie,Iv as T,Op as ae,cg as oe,fl as se,gp as ce,ig as le,ng as ue,t as E,ua as de,ul as D,vp as fe,vv as O}from"../vendor/vendor-icons-vienkZi5.js";import{Mn as pe,Un as k,Ur as me,c as A,un as j,zr as he}from"./app-const-BpgKVRXh.js";import{$v as M,At as N,FD as P,Gp as ge,Gt as _e,ID as F,Jp as ve,Kf as ye,MA as be,Ql as xe,Qv as I,Wt as Se,dg as L,gF as Ce,hF as we,iC as Te,iu as Ee,kt as De,nu as Oe,pu as ke,qf as Ae,uF as je,vS as Me,yS as Ne}from"./index-w64_zsxD.js";import{n as Pe,t as Fe}from"./Popover-Cd3scH3I.js";import{n as Ie,t as Le}from"./DropdownMenu-1ae8j9bI.js";import{t as Re}from"./_virtual_lobe-ui-named__Tooltip-DNompU8a.js";import{n as ze,t as Be}from"./Tag-C95BKTI7.js";import{_t as Ve,yt as R}from"./chat-D3ilvURJ.js";import{n as He,t as Ue}from"./Tabs-DH_wa3T6.js";import{n as We,t as Ge}from"./Empty-Dam8NCz3.js";import{o as z,t as Ke}from"./selectors-C-g1ZR70.js";import{n as qe,t as Je}from"./Avatar-CqOZ_Quz.js";import{n as Ye,t as Xe}from"./Select-C0UJO2yB.js";import{n as Ze,t as Qe}from"./SearchBar-D4sP5Y6j.js";import{n as $e,t as et}from"./Segmented-BgY50E-t.js";import{n as tt}from"./List-CsE72OIW.js";import{t as nt}from"./SkeletonList-CJifDLl0.js";import{n as rt,t as it}from"./_virtual_lobe-ui-named__ContextMenuTrigger-DAznVU5g.js";import{n as at,t as ot}from"./useFetchAgentList-BhSSn9uG.js";import{n as st,t as ct}from"./Form-DEzxLt7J.js";import{n as lt,t as ut}from"./AgentGroupAvatar-DMCJwKqy.js";import{n as dt,t as ft}from"./WorkspaceLink-CS4ZDv1a.js";import{n as pt,r as mt,t as ht}from"./ModalProvider-Cwge9nO3.js";import{n as gt,r as _t}from"./useWorkspaceMembers-BwDEraOr.js";import{a as vt,i as yt,l as bt,n as xt,r as St,t as Ct}from"./useDropdownMenu-i1jZuIco.js";import{a as wt,o as Tt,r as Et,t as Dt}from"./useAgentList-DrJbBP7f.js";import{n as Ot,t as kt}from"./useFetchAgentLabels-B-y7cl26.js";var At,jt,Mt,Nt=e((()=>{A(),L(),At=t(a()),qe(),lt(),jt=t(o()),Mt=(0,At.memo)(({item:e,size:t})=>{let{avatar:n,backgroundColor:r,type:i}=e;return i===`group`?(0,jt.jsx)(ut,{avatar:typeof n==`string`?n:void 0,backgroundColor:r||void 0,memberAvatars:Array.isArray(n)?n:[],size:t}):(0,jt.jsx)(Je,{emojiScaleWithBackground:!0,avatar:typeof n==`string`?n:j,background:r||void 0,name:I(e),shape:`square`,size:t})}),Mt.displayName=`AgentViewAllAgentAvatar`})),B,V,Pt,Ft,It,Lt,Rt,zt=e((()=>{L(),v(),l(),Ie(),E(),B=t(a()),i(),St(),Ct(),pt(),V=t(o()),Pt=e=>{let t=[];for(let n of e){let e=!!n&&`type`in n&&n.type===`divider`,r=t.at(-1),i=!!r&&`type`in r&&r.type===`divider`;e&&(t.length===0||i)||t.push(n)}for(;t.length>0;){let e=t.at(-1);if(e&&`type`in e&&e.type===`divider`)t.pop();else break}return t},Ft=(0,B.memo)(({getMenuItems:e,hideTrigger:t,includeSidebarToggle:r,item:i,onMenuReady:a,onToggleSidebar:o,sidebarHidden:s})=>{let{t:c}=n(`common`),l=(0,B.useMemo)(()=>()=>{let t=Pt((e()??[]).filter(e=>!e||![`hideFromSidebar`,`moveGroup`,`pin`].includes(String(e.key))));return!r||!o?t:[{icon:(0,V.jsx)(_,{icon:s?ce:fe}),key:`sidebar`,label:c(s?`agentViewAll.addToSidebar`:`agentViewAll.removeFromSidebar`),onClick:({domEvent:e})=>{e?.stopPropagation(),o(i)}},{type:`divider`},...t]},[e,r,i,o,s,c]);return(0,B.useEffect)(()=>{a?.(l)},[l,a]),t?null:(0,V.jsx)(Le,{items:l,children:(0,V.jsx)(w,{icon:ae,size:`small`,title:c(`more`)})})}),Ft.displayName=`ActionsDropdown`,It=(0,B.memo)(({anchor:e,item:t,...r})=>{let{t:i}=n(`common`),{openCreateGroupModal:a}=mt(),{avatar:o,backgroundColor:s,id:c,pinned:l,slug:u,userId:d,visibility:f}=t,p=typeof o==`string`?o:void 0,m=(0,B.useCallback)(()=>{a(c,f)},[c,a,f]);return(0,V.jsx)(Ft,{getMenuItems:xt({anchor:e,avatar:p,backgroundColor:s||void 0,group:void 0,id:c,labels:t.labels,labelsEnabled:!0,openCreateGroupModal:m,pinned:l??!1,slug:u,title:I(t,i(`agentViewAll.untitled`)),userId:d,visibility:f}),item:t,...r})}),It.displayName=`AgentItemActions`,Lt=(0,B.memo)(({anchor:e,item:t,...r})=>{let{t:i}=n(`common`),{avatar:a,backgroundColor:o,description:s,id:c,pinned:l,title:u,userId:d}=t;return(0,V.jsx)(Ft,{getMenuItems:yt({anchor:e,avatar:typeof a==`string`?a:void 0,backgroundColor:o||void 0,description:s,id:c,memberAvatars:Array.isArray(a)?a:[],pinned:l??!1,title:u||i(`agentViewAll.untitled`),userId:d}),item:t,...r})}),Lt.displayName=`GroupItemActions`,Rt=(0,B.memo)(e=>{let{t}=n(`common`),[r,i]=(0,B.useState)(!1),a=r||e.forceActivated,o=(0,B.useRef)(null),s=(0,B.useRef)(!1),c=(0,B.useCallback)(()=>i(!0),[]),l=(0,B.useCallback)(()=>{s.current=!0,i(!0)},[]);return(0,B.useEffect)(()=>{!a||!s.current||(s.current=!1,o.current?.querySelector(`button`)?.focus())},[a]),(0,V.jsx)(`span`,{ref:o,children:a?e.item.type===`group`?(0,V.jsx)(Lt,{...e}):(0,V.jsx)(It,{...e}):e.hideTrigger?null:(0,V.jsx)(`span`,{onFocus:l,onPointerEnter:c,children:(0,V.jsx)(w,{"aria-label":t(`more`),icon:ae,size:`small`,title:t(`more`)})})})}),Rt.displayName=`ItemActions`})),Bt,Vt,Ht,Ut,Wt=e((()=>{P(),Bt=t(a()),Vt=t(o()),Ht={dot:F(`acss-1rvcco7`,[`.acss-1rvcco7{flex:none;width:7px;height:7px;border-radius:50%;background:var(--ant-color-fill);}`],`
    flex: none;

    width: 7px;
    height: 7px;
    border-radius: 50%;

    background: var(--ant-color-fill);
  `),tag:F(`acss-8r8oza`,[`.acss-8r8oza{display:inline-flex;gap:5px;align-items:center;max-width:140px;padding-block:1px;padding-inline:8px;border:1px solid var(--ant-color-border-secondary);border-radius:999px;font-size:11px;color:var(--ant-color-text-secondary);white-space:nowrap;}`],`
    display: inline-flex;
    gap: 5px;
    align-items: center;

    max-width: 140px;
    padding-block: 1px;
    padding-inline: 8px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: 999px;

    font-size: 11px;
    color: var(--ant-color-text-secondary);
    white-space: nowrap;
  `)},Ut=(0,Bt.memo)(({labels:e})=>e?.length?(0,Vt.jsx)(Vt.Fragment,{children:e.map(e=>(0,Vt.jsxs)(`span`,{className:Ht.tag,children:[(0,Vt.jsx)(`span`,{className:Ht.dot,style:e.color?{background:e.color}:void 0}),e.name]},e.id))}):null),Ut.displayName=`AgentLabelTags`})),Gt,H,U,Kt,qt,Jt,Yt,Xt=e((()=>{P(),A(),L(),it(),S(),Re(),l(),b(),ze(),y(),je(),Gt=t(r()),E(),H=t(a()),i(),dt(),Nt(),zt(),Wt(),U=t(o()),Kt=20,qt={identity:F(`acss-sz9wfr`,[`.acss-sz9wfr{cursor:pointer;display:flex;flex:1;gap:12px;align-items:center;min-width:0;color:inherit;}`,`.acss-sz9wfr:hover .agent-row-title{text-decoration:underline;}`],`
    cursor: pointer;

    display: flex;
    flex: 1;
    gap: 12px;
    align-items: center;

    min-width: 0;

    color: inherit;

    &:hover .agent-row-title {
      text-decoration: underline;
    }
  `),row:F(`acss-1vw1wjj`,[`.acss-1vw1wjj{padding-block:8px;padding-inline:12px;border-radius:var(--ant-border-radius-lg);color:inherit;}`,`.acss-1vw1wjj:hover{background:var(--ant-color-fill-tertiary);}`],`
    padding-block: 8px;
    padding-inline: 12px;
    border-radius: var(--ant-border-radius-lg);
    color: inherit;

    &:hover {
      background: var(--ant-color-fill-tertiary);
    }
  `),updatedAt:F(`acss-6akums`,[`.acss-6akums{flex:none;min-width:88px;color:var(--ant-color-text-quaternary);text-align:end;white-space:nowrap;}`],`
    flex: none;

    min-width: 88px;

    color: var(--ant-color-text-quaternary);
    text-align: end;
    white-space: nowrap;
  `)},Jt=e=>(0,Gt.default)().diff((0,Gt.default)(e),`d`)<7?(0,Gt.default)(e).fromNow():(0,Gt.default)(e).format(`YYYY-MM-DD`),Yt=(0,H.memo)(({author:e,item:t,onToggleSidebar:r,showAuthor:i,sidebarHidden:a})=>{let{t:o}=n(`common`),{id:s,type:c,updatedAt:l}=t,u=I(t,o(`agentViewAll.untitled`)),d=M(t),[p,m]=(0,H.useState)(null),[ee,h]=(0,H.useState)(!1),g=(0,H.useCallback)(()=>h(!0),[]),_=(0,H.useRef)(null),te=(0,H.useCallback)(e=>{_.current=e},[]),ne=(0,H.useCallback)(()=>_.current?.()??[],[]),v=(0,H.useCallback)(e=>{e.stopPropagation(),r?.(t)},[t,r]);return(0,U.jsx)(rt,{items:ne,children:(0,U.jsxs)(f,{horizontal:!0,align:`center`,className:qt.row,gap:12,ref:m,onPointerEnter:g,children:[(0,U.jsxs)(ft,{"aria-label":u,className:qt.identity,to:c===`group`?k(s):pe(s,!1),children:[(0,U.jsx)(Mt,{item:t,size:28}),(0,U.jsx)(f,{flex:1,style:{minWidth:0},children:(0,U.jsxs)(f,{horizontal:!0,align:`center`,gap:6,style:{minWidth:0},children:[(0,U.jsx)(x,{ellipsis:!0,className:`agent-row-title`,weight:500,children:u}),d?(0,U.jsx)(Be,{size:`small`,style:{flex:`none`},children:d}):null]})})]}),(0,U.jsxs)(f,{horizontal:!0,align:`center`,flex:`none`,gap:8,justify:`flex-end`,style:{maxWidth:420,overflow:`hidden`},children:[(0,U.jsx)(Ut,{labels:t.labels}),i&&(0,U.jsx)(f,{flex:`none`,style:{width:Kt},children:e&&(0,U.jsx)(re,{title:e.name,children:(0,U.jsx)(C,{avatar:e.avatar||`/avatars/agent-default.png`,size:Kt})})}),(0,U.jsx)(x,{className:qt.updatedAt,fontSize:12,title:l?(0,Gt.default)(l).format(`YYYY-MM-DD HH:mm`):void 0,children:l?Jt(l):`–`})]}),(0,U.jsxs)(f,{horizontal:!0,align:`center`,flex:`none`,gap:4,style:{width:64},children:[r&&(0,U.jsx)(w,{color:we.colorTextSecondary,icon:a?fe:ce,size:`small`,style:{opacity:a?.5:void 0},title:o(a?`agentViewAll.addToSidebar`:`agentViewAll.removeFromSidebar`),onClick:v}),(0,U.jsx)(Rt,{anchor:p,forceActivated:ee,includeSidebarToggle:!!r,item:t,sidebarHidden:a,onMenuReady:te,onToggleSidebar:r})]})]})})}),Yt.displayName=`AgentRow`})),W,G,K,Zt,Qt=e((()=>{P(),A(),L(),ee(),it(),S(),Re(),b(),ze(),y(),W=t(a()),i(),dt(),Nt(),Xt(),zt(),Wt(),G=t(o()),K={card:F(`acss-1mhubm`,[`.acss-1mhubm{display:flex;flex-direction:column;gap:8px;align-items:stretch;min-height:104px;padding-block:12px;padding-inline:12px;transition:transform 0.18s,box-shadow 0.18s,border-color 0.18s;}`,`.acss-1mhubm:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgb(0 0 0 / 6%);}`],`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: stretch;

    min-height: 104px;
    padding-block: 12px;
    padding-inline: 12px;

    transition:
      transform 0.18s,
      box-shadow 0.18s,
      border-color 0.18s;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgb(0 0 0 / 6%);
    }
  `),description:F(`acss-1hrddkr`,[`.acss-1hrddkr{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-height:1.5;}`],`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    line-height: 1.5;
  `),grid:F(`acss-l5o8jz`,[`.acss-l5o8jz{display:grid;grid-template-columns:repeat(3, minmax(0, 1fr));gap:12px;width:100%;min-width:0;}`,`@media (max-width: 767.98px){.acss-l5o8jz{grid-template-columns:repeat(2, minmax(0, 1fr));}}`,`@media (max-width: 575.98px){.acss-l5o8jz{grid-template-columns:minmax(0, 1fr);}}`],`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;

    width: 100%;
    min-width: 0;

    @media (max-width: 767.98px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 575.98px) {
      grid-template-columns: minmax(0, 1fr);
    }
  `),actions:F(`acss-1btzajt`,[`.acss-1btzajt{position:absolute;inset-block-start:12px;inset-inline-end:12px;}`],`
    position: absolute;
    inset-block-start: 12px;
    inset-inline-end: 12px;
  `),link:F(`acss-jvhzt9`,[`.acss-jvhzt9{display:block;min-width:0;height:100%;color:inherit;}`],`
    display: block;
    min-width: 0;
    height: 100%;
    color: inherit;
  `),wrapper:F(`acss-17xqx98`,[`.acss-17xqx98{position:relative;min-width:0;height:100%;}`],`
    position: relative;
    min-width: 0;
    height: 100%;
  `),updatedAt:F(`acss-1wgs0p3`,[`.acss-1wgs0p3{flex:none;color:var(--ant-color-text-quaternary);}`],`
    flex: none;
    color: var(--ant-color-text-quaternary);
  `)},Zt=(0,W.memo)(({author:e,item:t,onToggleSidebar:r,showAuthor:i,sidebarHidden:a})=>{let{t:o}=n(`common`),{description:s,id:c,type:l,updatedAt:u}=t,p=I(t,o(`agentViewAll.untitled`)),m=M(t),[ee,h]=(0,W.useState)(null),[g,_]=(0,W.useState)(!1),te=(0,W.useCallback)(()=>_(!0),[]),ne=(0,W.useRef)(null),v=(0,W.useCallback)(e=>{ne.current=e},[]);return(0,G.jsx)(rt,{items:(0,W.useCallback)(()=>ne.current?.()??[],[]),children:(0,G.jsxs)(`div`,{className:K.wrapper,children:[(0,G.jsx)(ft,{"aria-label":p,className:K.link,ref:h,to:l===`group`?k(c):pe(c,!1),onPointerEnter:te,children:(0,G.jsxs)(d,{clickable:!0,className:K.card,height:`100%`,variant:`outlined`,children:[(0,G.jsxs)(f,{horizontal:!0,align:`center`,gap:8,style:{minWidth:0,paddingInlineEnd:28},children:[(0,G.jsx)(Mt,{item:t,size:24}),(0,G.jsxs)(f,{horizontal:!0,align:`center`,flex:1,gap:6,style:{minWidth:0},children:[(0,G.jsx)(x,{ellipsis:!0,style:{minWidth:0},weight:600,children:p}),m?(0,G.jsx)(Be,{size:`small`,style:{flex:`none`},children:m}):null]})]}),(0,G.jsx)(x,{className:K.description,fontSize:12,type:`secondary`,children:s}),t.labels?.length?(0,G.jsx)(f,{horizontal:!0,align:`center`,gap:6,wrap:`wrap`,children:(0,G.jsx)(Ut,{labels:t.labels})}):null,(0,G.jsxs)(f,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,style:{marginBlockStart:`auto`},children:[i?(0,G.jsx)(f,{horizontal:!0,align:`center`,gap:6,style:{minWidth:0},children:e?(0,G.jsx)(re,{title:e.name,children:(0,G.jsx)(C,{avatar:e.avatar||`/avatars/agent-default.png`,size:18})}):(0,G.jsx)(x,{fontSize:12,type:`secondary`,children:`–`})}):(0,G.jsx)(`div`,{}),(0,G.jsx)(x,{className:K.updatedAt,fontSize:12,children:u?Jt(u):`–`})]})]})}),(0,G.jsx)(`span`,{className:K.actions,children:(0,G.jsx)(Rt,{includeSidebarToggle:!0,anchor:ee,forceActivated:g,item:t,sidebarHidden:a,onMenuReady:v,onToggleSidebar:r})})]})})}),Zt.displayName=`AgentCard`})),$t,en,tn=e((()=>{$t=e=>{let t=new Set;return e.filter(e=>t.has(e.id)?!1:(t.add(e.id),!0))},en=(e,t,n)=>$t([...e,...t.flatMap(e=>e.items),...n])})),nn,q,rn,an,on=e((()=>{P(),S(),st(),v(),Pe(),l(),Ye(),ne(),He(),E(),nn=t(a()),i(),me(),q=t(o()),rn={form:F(`acss-1qe41zc`,[`.acss-1qe41zc label{font-size:13px!important;color:var(--ant-color-text-secondary)!important;}`],`
      label {
        font-size: 13px !important;
        color: var(--ant-color-text-secondary) !important;
      }
    `)},an=(0,nn.memo)(({options:e,setOptions:t,setViewMode:r,showAuthor:i,viewMode:a})=>{let[o,s]=(0,nn.useState)(!1),{t:c}=n(`common`),l=(0,nn.useMemo)(()=>[{label:c(`agentViewAll.groupBy.none`),value:`none`},...i?[{label:c(`agentViewAll.groupBy.author`),value:`author`}]:[],{label:c(`agentViewAll.groupBy.label`),value:`label`}],[i,c]),u=(0,nn.useMemo)(()=>[{label:c(`agentViewAll.orderBy.updatedAt`),value:`updatedAt`},...i?[{label:c(`agentViewAll.orderBy.author`),value:`author`}]:[],{label:c(`agentViewAll.orderBy.title`),value:`title`}],[i,c]),d=[{children:(0,q.jsx)(Xe,{options:l,size:`small`,style:{width:150},value:e.groupBy,onChange:e=>{t(t=>({...t,groupBy:e}))}}),label:c(`agentViewAll.form.grouping`)},{children:(0,q.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,q.jsx)(w,{icon:e.orderDirection===`asc`?O:T,size:`small`,onClick:()=>{t(e=>({...e,orderDirection:e.orderDirection===`asc`?`desc`:`asc`}))}}),(0,q.jsx)(Xe,{options:u,size:`small`,style:{width:112},value:e.orderBy,onChange:e=>{t(t=>({...t,orderBy:e}))}})]}),label:c(`agentViewAll.form.ordering`)},{children:(0,q.jsx)(g,{checked:e.showSidebarHidden,size:`small`,onChange:e=>{t(t=>({...t,showSidebarHidden:e}))}}),minWidth:void 0,label:c(`agentViewAll.form.showSidebarHidden`)}];return(0,q.jsx)(Fe,{arrow:!1,content:(0,q.jsxs)(f,{gap:12,width:280,children:[(0,q.jsx)(Ue,{activeKey:a,items:[{icon:(0,q.jsx)(_,{icon:D}),key:`list`,label:c(`agentViewAll.view.list`)},{icon:(0,q.jsx)(_,{icon:se}),key:`card`,label:c(`agentViewAll.view.card`)}],styles:{list:{display:`flex`,width:`100%`},tab:{flex:1}},onChange:e=>r(e)}),(0,q.jsx)(ct,{className:rn.form,items:d,itemsType:`flat`,size:`small`,variant:`borderless`,styles:{item:{padding:0}}})]}),open:o,placement:`bottomRight`,trigger:[`click`],onOpenChange:s,children:(0,q.jsx)(w,{icon:ie,size:he})})}),an.displayName=`AgentViewAllListConfig`})),sn,cn,ln,un,dn,fn=e((()=>{sn={groupBy:`none`,orderBy:`updatedAt`,orderDirection:`desc`,showSidebarHidden:!0},cn=new Set([`author`,`label`,`none`]),ln=new Set([`author`,`title`,`updatedAt`]),un=new Set([`asc`,`desc`]),dn=e=>{let t=e??{};return{groupBy:cn.has(t.groupBy)?t.groupBy:sn.groupBy,orderBy:ln.has(t.orderBy)?t.orderBy:sn.orderBy,orderDirection:un.has(t.orderDirection)?t.orderDirection:sn.orderDirection,showSidebarHidden:typeof t.showSidebarHidden==`boolean`?t.showSidebarHidden:sn.showSidebarHidden}}})),J,Y,X,pn,mn,hn=e((()=>{P(),A(),L(),ee(),it(),S(),v(),ze(),y(),je(),E(),J=t(a()),i(),dt(),Oe(),xe(),Nt(),zt(),Y=t(o()),X={actions:F(`acss-19fn4sm`,[`.acss-19fn4sm{position:absolute;inset-block-start:0;inset-inline-end:0;}`],`
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
  `),card:F(`acss-5i2p2h`,[`.acss-5i2p2h{position:relative;display:flex;flex-direction:column;gap:6px;align-items:stretch;justify-content:center;min-height:72px;padding-block:10px;padding-inline:12px;transition:transform 0.18s,box-shadow 0.18s,border-color 0.18s;}`,`.acss-5i2p2h:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgb(0 0 0 / 6%);}`],`
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: stretch;
    justify-content: center;

    /* Uniform height across the grid; a card without a description centers its
       title instead of leaving a hole where the description would be. */
    min-height: 72px;
    padding-block: 10px;
    padding-inline: 12px;

    transition:
      transform 0.18s,
      box-shadow 0.18s,
      border-color 0.18s;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgb(0 0 0 / 6%);
    }
  `),container:F(`acss-1xtjjk8`,[`.acss-1xtjjk8{padding:12px;border-radius:var(--ant-border-radius-lg);background:var(--ant-color-fill-quaternary);}`],`
    padding: 12px;
    border-radius: var(--ant-border-radius-lg);
    background: var(--ant-color-fill-quaternary);
  `),description:F(`acss-1rthcrc`,[`.acss-1rthcrc{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;line-height:1.5;}`],`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    line-height: 1.5;
  `),grid:F(`acss-l5o8jz`,[`.acss-l5o8jz{display:grid;grid-template-columns:repeat(3, minmax(0, 1fr));gap:12px;width:100%;min-width:0;}`,`@media (max-width: 767.98px){.acss-l5o8jz{grid-template-columns:repeat(2, minmax(0, 1fr));}}`,`@media (max-width: 575.98px){.acss-l5o8jz{grid-template-columns:minmax(0, 1fr);}}`],`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;

    width: 100%;
    min-width: 0;

    @media (max-width: 767.98px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 575.98px) {
      grid-template-columns: minmax(0, 1fr);
    }
  `),header:F(`acss-15f6fqo`,[`.acss-15f6fqo{cursor:pointer;-webkit-user-select:none;user-select:none;}`],`
    cursor: pointer;
    user-select: none;
  `),link:F(`acss-bb11hk`,[`.acss-bb11hk{display:block;min-width:0;color:inherit;}`],`
    display: block;
    min-width: 0;
    color: inherit;
  `)},pn=(0,J.memo)(({item:e,onToggleSidebar:t})=>{let{t:r}=n(`common`),{description:i,id:a,type:o}=e,s=I(e,r(`agentViewAll.untitled`)),c=M(e),[l,u]=(0,J.useState)(null),[p,m]=(0,J.useState)(!1),ee=(0,J.useCallback)(()=>m(!0),[]),h=(0,J.useRef)(null),g=(0,J.useCallback)(e=>{h.current=e},[]);return(0,Y.jsx)(rt,{items:(0,J.useCallback)(()=>h.current?.()??[],[]),children:(0,Y.jsx)(ft,{"aria-label":s,className:X.link,ref:u,to:o===`group`?k(a):pe(a,!1),onPointerEnter:ee,children:(0,Y.jsxs)(d,{clickable:!0,className:X.card,height:`100%`,variant:`outlined`,children:[(0,Y.jsxs)(f,{horizontal:!0,align:`center`,gap:8,style:{minWidth:0},children:[(0,Y.jsx)(Mt,{item:e,size:24}),(0,Y.jsx)(x,{ellipsis:!0,style:{minWidth:0},weight:600,children:s}),c?(0,Y.jsx)(Be,{size:`small`,style:{flex:`none`},children:c}):null]}),i?(0,Y.jsx)(x,{className:X.description,fontSize:12,type:`secondary`,children:i}):null,(0,Y.jsx)(`span`,{className:X.actions,children:(0,Y.jsx)(Rt,{hideTrigger:!0,includeSidebarToggle:!0,anchor:l,forceActivated:p,item:e,sidebarHidden:!1,onMenuReady:g,onToggleSidebar:t})})]})})})}),pn.displayName=`SidebarMiniCard`,mn=(0,J.memo)(({items:e,onToggleSidebar:t})=>{let{t:r}=n(`common`),i=Ee(ke.agentListSidebarSectionCollapsed),a=Ee(e=>e.updateSystemStatus),o=(0,J.useCallback)(()=>a({agentListSidebarSectionCollapsed:!i},`toggleAgentListSidebarSection`),[i,a]);return(0,Y.jsxs)(f,{className:X.container,gap:12,children:[(0,Y.jsxs)(f,{horizontal:!0,align:`center`,className:X.header,gap:8,justify:`space-between`,onClick:o,children:[(0,Y.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,Y.jsx)(x,{fontSize:13,weight:500,children:r(`agentViewAll.sidebarSection.title`)}),(0,Y.jsx)(x,{fontSize:12,type:`secondary`,children:e.length})]}),(0,Y.jsxs)(f,{horizontal:!0,align:`center`,gap:4,children:[(0,Y.jsx)(x,{fontSize:12,type:`secondary`,children:r(i?`agentViewAll.sidebarSection.expand`:`agentViewAll.sidebarSection.collapse`)}),(0,Y.jsx)(_,{color:we.colorTextSecondary,icon:i?oe:ue,size:14})]})]}),!i&&(0,Y.jsx)(`div`,{className:X.grid,children:e.map(e=>(0,Y.jsx)(pn,{item:e,onToggleSidebar:t},e.id))})]})}),mn.displayName=`SidebarAgentsSection`})),gn,Z,Q,$,_n,vn,yn,bn,xn,Sn=e((()=>{P(),A(),L(),h(),We(),S(),v(),Ze(),Re(),b(),m(),Ie(),$e(),y(),be(),je(),gn=t(r()),Z=t(Te()),E(),Q=t(a()),i(),c(),Me(),gt(),Dt(),pt(),wt(),vt(),N(),nt(),_e(),kt(),ot(),ye(),Oe(),xe(),Ve(),Ke(),ge(),Qt(),Xt(),tn(),on(),fn(),hn(),$=t(o()),_n={bar:F(`acss-15n0yxt`,[`.acss-15n0yxt{cursor:pointer;-webkit-user-select:none;user-select:none;width:100%;padding-block:8px;padding-inline:12px;border-radius:var(--ant-border-radius-lg);transition:background 0.15s;}`],`
    cursor: pointer;
    user-select: none;

    width: 100%;
    padding-block: 8px;
    padding-inline: 12px;
    border-radius: var(--ant-border-radius-lg);

    transition: background 0.15s;
  `),barEven:F(`acss-1k4bq44`,[`.acss-1k4bq44{background:var(--ant-color-fill-quaternary);}`,`.acss-1k4bq44:hover{background:var(--ant-color-fill-tertiary);}`],`
    background: var(--ant-color-fill-quaternary);

    &:hover {
      background: var(--ant-color-fill-tertiary);
    }
  `),barOdd:F(`acss-9vl9wb`,[`.acss-9vl9wb{background:var(--ant-color-fill-tertiary);}`,`.acss-9vl9wb:hover{background:var(--ant-color-fill-secondary);}`],`
    background: var(--ant-color-fill-tertiary);

    &:hover {
      background: var(--ant-color-fill-secondary);
    }
  `)},vn=(0,Q.memo)(({avatar:e,collapsed:t,color:n,count:r,index:i,label:a,onToggle:o})=>(0,$.jsxs)(f,{horizontal:!0,align:`center`,gap:8,className:Ce(_n.bar,i%2==0?_n.barEven:_n.barOdd),onClick:o,children:[(0,$.jsx)(_,{color:we.colorTextSecondary,icon:t?le:oe,size:14}),e?(0,$.jsx)(C,{avatar:e,size:20}):n?(0,$.jsx)(`span`,{style:{background:n,borderRadius:`50%`,display:`inline-block`,height:9,width:9}}):null,(0,$.jsx)(x,{fontSize:13,weight:500,children:a}),(0,$.jsx)(x,{fontSize:12,type:`secondary`,children:r})]})),vn.displayName=`AgentViewAllGroupHeader`,yn=(0,Q.memo)(({count:e,label:t})=>(0,$.jsxs)(f,{horizontal:!0,align:`center`,gap:6,children:[t,(0,$.jsx)(x,{fontSize:12,type:`secondary`,children:e})]})),yn.displayName=`AgentViewAllSegmentLabel`,bn=(0,Q.memo)(()=>{let{t:e}=n(`common`),t=Ne(),[r,i]=s(),a=r.get(`tab`)===`private`?`private`:`workspace`,o=(0,Q.useCallback)(e=>{i(e===`private`?{tab:`private`}:{},{replace:!0})},[i]),[c,l]=(0,Q.useState)(``),d=Ee(ke.agentListViewMode),m=Ee(e=>e.updateSystemStatus),ee=(0,Q.useCallback)(e=>m({agentListViewMode:e}),[m]),h=Ee(ke.agentListViewOptions),g=(0,Q.useMemo)(()=>dn(h),[h]),ne=(0,Q.useCallback)(e=>{m({agentListViewOptions:dn(e(g))},`updateAgentListViewOptions`)},[m,g]);at(),Ot(),ve(e=>e.useFetchWorkspaceUserPreference)();let v=R(z.isAgentListInit),y=R(z.pinnedAgents,Z.default),b=R(z.agentGroups,Z.default),S=R(z.ungroupedAgents,Z.default),C=R(z.privatePinnedAgents,Z.default),w=R(z.privateAgentGroups,Z.default),ie=R(z.privateUngroupedAgents,Z.default),{isSidebarItemVisible:T,setSidebarItemVisible:ae}=Tt(),se=Et(),ce=(0,Q.useMemo)(()=>en(y,b,S),[y,b,S]),le=(0,Q.useMemo)(()=>en(C,w,ie),[C,w,ie]),ue=t&&a===`private`?le:ce,E=(0,Q.useMemo)(()=>{let e=[...en(y,se(b),S),...en(C,se(w),ie)],t=new Set;return e.filter(e=>t.has(e.id)||!T(e)?!1:(t.add(e.id),!0))},[b,T,se,y,w,C,ie,S]),D=!!t&&a!==`private`,fe=_t(),O=(0,Q.useMemo)(()=>{let e=new Map;for(let t of fe){let n=t.user;n&&e.set(t.userId,{avatar:n.avatar,name:n.fullName||n.username||n.email||void 0})}return e},[fe]),{orderDirection:pe,showSidebarHidden:k}=g,me=(0,Q.useMemo)(()=>{let e=e=>k?e.length:e.filter(T).length;return{private:e(le),workspace:e(ce)}},[ce,le,k,T]),A=D||g.groupBy===`label`?g.groupBy:g.groupBy===`author`?`none`:g.groupBy,j=!D&&g.orderBy===`author`?`updatedAt`:g.orderBy,he=(0,Q.useMemo)(()=>({...g,groupBy:A,orderBy:j}),[g,A,j]),M=(0,Q.useMemo)(()=>{let e=c.trim().toLowerCase(),t=e?ue.filter(t=>t.name?.toLowerCase().includes(e)||t.title?.toLowerCase().includes(e)||t.description?.toLowerCase().includes(e)):ue;k||(t=t.filter(T));let n=e=>e.userId&&O.get(e.userId)?.name||``,r=pe===`asc`?1:-1;return[...t].sort((e,t)=>j===`title`?r*I(e,``).localeCompare(I(t,``)):j===`author`?r*n(e).localeCompare(n(t)):r*((0,gn.default)(e.updatedAt).valueOf()-(0,gn.default)(t.updatedAt).valueOf()))},[ue,c,j,pe,k,T,O]),N=(0,Q.useMemo)(()=>{if(A===`author`){if(!t||a===`private`)return null;let n=new Map;for(let e of M){let t=e.userId??``,r=n.get(t);r?r.push(e):n.set(t,[e])}return[...n.entries()].map(([t,n])=>({avatar:t&&O.get(t)?.avatar||`/avatars/agent-default.png`,color:void 0,items:n,key:`author:${t||`unknown`}`,label:t&&O.get(t)?.name||e(`agentViewAll.groupBy.unknownAuthor`)})).sort((e,t)=>e.label.localeCompare(t.label))}if(A===`label`){let t=new Map,n=[];for(let e of M){let r=e.labels??[];if(r.length===0){n.push(e);continue}for(let n of r){let r=t.get(n.id);r?r.items.push(e):t.set(n.id,{color:n.color,items:[e],label:n.name})}}let r=[...t.entries()].map(([e,t])=>({avatar:null,color:t.color,items:t.items,key:`label:${e}`,label:t.label})).sort((e,t)=>e.label.localeCompare(t.label));return n.length>0&&r.push({avatar:null,color:void 0,items:n,key:`label:none`,label:e(`agentViewAll.groupBy.noLabel`)}),r}return null},[t,A,a,M,O,e]),P=Ee(ke.agentListExpandedGroupKeys,Z.default),ge=(0,Q.useMemo)(()=>new Set(P),[P]),_e=(0,Q.useCallback)(e=>{m({agentListExpandedGroupKeys:ge.has(e)?P.filter(t=>t!==e):[...P,e]},`toggleAgentListGroupExpanded`)},[P,ge,m]),F=(0,Q.useCallback)(async t=>{try{await ae(t.id,!T(t))}catch(t){console.error(`Failed to toggle Agent sidebar visibility:`,t),te.error(e(`operationFailed`))}},[T,ae,e]),ye=(0,Q.useCallback)(e=>(0,$.jsx)(Zt,{author:e.userId?O.get(e.userId):void 0,item:e,showAuthor:D,sidebarHidden:!T(e),onToggleSidebar:F},e.id),[D,O,F,T]),be=(0,Q.useCallback)(e=>(0,$.jsx)(Yt,{author:e.userId?O.get(e.userId):void 0,item:e,showAuthor:D,sidebarHidden:!T(e),onToggleSidebar:F},e.id),[D,O,F,T]),{allowed:xe,reason:L}=Ae(`create_content`),{createAgentMenuItem:Ce,createConnectAgentMenuItem:we,createGroupChatMenuItem:Te,createMarketAgentMenuItem:Oe,isMutatingAgent:je}=bt(),Me=(0,Q.useMemo)(()=>t&&a===`private`?{visibility:`private`}:void 0,[t,a]),Pe=(0,Q.useMemo)(()=>{let e=we(Me);return[Ce(Me),Te(Me),...e?[{type:`divider`},e]:[],{type:`divider`},Oe()]},[Ce,we,Te,Oe,Me]);return(0,$.jsxs)(f,{flex:1,height:`100%`,children:[(0,$.jsx)(De,{left:(0,$.jsx)(x,{style:{paddingInlineStart:4},weight:500,children:e(`agentViewAll.title`)}),right:(0,$.jsx)(an,{options:he,setOptions:ne,setViewMode:ee,showAuthor:D,viewMode:d})}),(0,$.jsxs)(Se,{gap:16,paddingBlock:16,wrapperStyle:{flex:1,overflowY:`auto`},children:[v&&!c.trim()&&E.length>0&&(0,$.jsx)(mn,{items:E,onToggleSidebar:F}),(0,$.jsxs)(f,{horizontal:!0,align:`center`,gap:12,justify:`space-between`,children:[t?(0,$.jsx)(et,{value:a,options:[{label:(0,$.jsx)(yn,{count:me.workspace,label:e(`navPanel.publicAgents`)}),value:`workspace`},{label:(0,$.jsx)(yn,{count:me.private,label:e(`navPanel.privateAgents`)}),value:`private`}],onChange:e=>o(e)}):(0,$.jsx)(Qe,{allowClear:!0,placeholder:e(`navPanel.searchAgent`),style:{maxWidth:240},value:c,onChange:e=>l(e.target.value)}),(0,$.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[t&&(0,$.jsx)(Qe,{allowClear:!0,placeholder:e(`navPanel.searchAgent`),style:{maxWidth:240},value:c,onChange:e=>l(e.target.value)}),xe?(0,$.jsx)(Le,{items:Pe,children:(0,$.jsx)(p,{icon:de,loading:je,children:(0,$.jsx)(_,{icon:oe,size:14})})}):(0,$.jsx)(re,{title:L,children:(0,$.jsx)(p,{disabled:!0,icon:de,children:(0,$.jsx)(_,{icon:oe,size:14})})})]})]}),v?M.length===0?(0,$.jsx)(u,{flex:1,padding:40,children:(0,$.jsx)(Ge,{description:c.trim()?e(`navPanel.searchResultEmpty`):e(`agentViewAll.empty`)})}):d===`card`?N?(0,$.jsx)(f,{gap:8,children:N.map((e,t)=>{let n=!ge.has(e.key);return(0,$.jsxs)(f,{gap:12,children:[(0,$.jsx)(vn,{avatar:e.avatar,collapsed:n,color:e.color,count:e.items.length,index:t,label:e.label,onToggle:()=>_e(e.key)}),!n&&(0,$.jsx)(`div`,{className:K.grid,children:e.items.map(ye)})]},e.key)})}):(0,$.jsx)(`div`,{className:K.grid,children:M.map(ye)}):(0,$.jsx)(f,{gap:N?8:2,children:N?N.map((e,t)=>{let n=!ge.has(e.key);return(0,$.jsxs)(f,{gap:2,children:[(0,$.jsx)(vn,{avatar:e.avatar,collapsed:n,color:e.color,count:e.items.length,index:t,label:e.label,onToggle:()=>_e(e.key)}),!n&&e.items.map(be)]},e.key)}):M.map(be)}):(0,$.jsx)(tt,{rows:8})]})]})}),bn.displayName=`AgentViewAllPage`,xn=()=>(0,$.jsx)(ht,{children:(0,$.jsx)(bn,{})})})),Cn=e((()=>{Sn()})),wn,Tn;e((()=>{Cn(),wn=t(o()),Tn=()=>(0,wn.jsx)(xn,{})}))();export{Tn as default};