import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,Q as r,j as i}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as a,T as o}from"../vendor/vendor-react-B9HSWrpN.js";import{B as s,Bt as c,Kt as l,Mt as u,Nt as d,Vt as f,Xn as p,Yn as m,Zn as ee,at as h,it as g,lt as _,m as v,qt as te,z as ne}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Op as re,Qr as ie,if as ae,mt as oe,t as se,ua as ce}from"../vendor/vendor-icons-vienkZi5.js";import{At as y,Dm as b,FD as x,Gp as S,Gt as C,ID as w,Jp as T,MA as E,Mm as D,Wt as O,am as k,kt as A,vS as j,yS as M}from"./index-w64_zsxD.js";import{n as N,t as P}from"./DropdownMenu-1ae8j9bI.js";import{t as F}from"./_virtual_lobe-ui-named__Tooltip-DNompU8a.js";import{n as I,t as L}from"./Empty-Dam8NCz3.js";import{n as R,o as z,s as B}from"./ExecutionStatus-C_DnyV8X.js";import{n as V,t as H}from"./SearchBar-D4sP5Y6j.js";import{n as U,t as W}from"./AsyncError-B3Va32IA.js";import{n as G}from"./List-CsE72OIW.js";import{t as le}from"./SkeletonList-CJifDLl0.js";import{n as ue,t as de}from"./_virtual_lobe-ui-named__ContextMenuTrigger-DAznVU5g.js";import{n as fe,t as pe}from"./TopicCreatorAvatar-DMI1_gY8.js";import{t as me}from"./_virtual_lobe-ui-named_base-ui_confirmModal-B6WREEdZ.js";import{n as he,t as ge}from"./UserAvatar-uPZMb7RG.js";import{n as _e,t as ve}from"./CreateProjectModal-DRUNkgcr.js";import{n as ye,t as be}from"./WorkspaceLink-CS4ZDv1a.js";import{a as K,i as xe,t as Se}from"./project-BUshUB-c.js";import{n as Ce,t as we}from"./ProjectDisabled-C9l85hAC.js";var q,J,Y,X,Z,Q,$,Te=e((()=>{x(),f(),de(),I(),te(),ee(),V(),F(),s(),d(),me(),N(),h(),E(),q=t(r()),se(),J=t(a()),i(),j(),U(),z(),y(),le(),ve(),Ce(),fe(),he(),C(),ye(),Se(),S(),k(),Y=t(o()),X={actions:w(`acss-pvlngp`,[`.acss-pvlngp{flex:none;opacity:0;transition:opacity var(--ant-motion-duration-fast);}`,`@media (hover: none){.acss-pvlngp{opacity:1;}}`],`
    flex: none;
    opacity: 0;
    transition: opacity var(--ant-motion-duration-fast);

    @media (hover: none) {
      opacity: 1;
    }
  `),identifier:w(`acss-14tdv20`,[`.acss-14tdv20{flex:none;min-width:72px;color:var(--ant-color-text-tertiary);}`],`
    flex: none;
    min-width: 72px;
    color: var(--ant-color-text-tertiary);
  `),link:w(`acss-11dpuo3`,[`.acss-11dpuo3{display:flex;flex:1;gap:8px;align-items:center;min-width:0;color:inherit;}`],`
    display: flex;
    flex: 1;
    gap: 8px;
    align-items: center;

    min-width: 0;

    color: inherit;
  `),owner:w(`acss-xq2pm1`,[`.acss-xq2pm1{flex:none;width:20px;}`],`
    flex: none;
    width: 20px;
  `),row:w(`acss-1kijy6c`,[`.acss-1kijy6c{padding-block:7px;padding-inline:4px 12px;border-radius:var(--ant-border-radius-lg);color:inherit;}`,`.acss-1kijy6c:hover{background:var(--ant-color-fill-tertiary);}`,`.acss-1kijy6c:hover .project-row-actions,.acss-1kijy6c:focus-within .project-row-actions{opacity:1;}`],`
    padding-block: 7px;
    padding-inline: 4px 12px;
    border-radius: var(--ant-border-radius-lg);
    color: inherit;

    &:hover {
      background: var(--ant-color-fill-tertiary);
    }

    &:hover .project-row-actions,
    &:focus-within .project-row-actions {
      opacity: 1;
    }
  `),updatedAt:w(`acss-6akums`,[`.acss-6akums{flex:none;min-width:88px;color:var(--ant-color-text-quaternary);text-align:end;white-space:nowrap;}`],`
    flex: none;

    min-width: 88px;

    color: var(--ant-color-text-quaternary);
    text-align: end;
    white-space: nowrap;
  `)},Z=(0,J.memo)(({userId:e})=>{let t=M();return(0,Y.jsx)(`span`,{className:X.owner,children:t?(0,Y.jsx)(pe,{size:20,userId:e}):(0,Y.jsx)(ge,{size:20})})}),Z.displayName=`ProjectOwnerAvatar`,Q=(0,J.memo)(({project:e})=>{let{t}=n([`project`,`common`]),[r,i]=(0,J.useState)(!1),a=K(e=>e.deleteProject),o=T(D.userId)===e.userId,s=B(e.status),c=R[s],u=async()=>{i(!0);try{await a(e.id),m.success(t(`list.deleteSuccess`,{name:e.name}))}catch(e){console.error(`Failed to delete project`,e),m.error(t(`list.deleteError`)),i(!1)}},d=[{danger:!0,icon:(0,Y.jsx)(p,{icon:oe}),key:`delete`,label:t(`list.deleteAction`),onClick:()=>{v({cancelText:t(`cancel`,{ns:`common`}),content:t(`list.deleteConfirmDescription`,{name:e.name}),okButtonProps:{danger:!0},okText:t(`delete`,{ns:`common`}),onOk:()=>void u(),title:t(`list.deleteConfirmTitle`)})}}],f=(0,Y.jsxs)(l,{horizontal:!0,align:`center`,className:X.row,gap:8,children:[(0,Y.jsxs)(be,{className:X.link,to:`/project/${e.slug??e.id}`,children:[(0,Y.jsx)(_,{title:t(`acceptance.status.${s}`),children:(0,Y.jsx)(p,{color:c.color,icon:c.icon,size:16})}),(0,Y.jsx)(l,{flex:1,style:{minWidth:0},children:(0,Y.jsx)(g,{ellipsis:!0,weight:500,children:e.name})}),(0,Y.jsx)(g,{className:X.identifier,fontSize:12,children:e.identifier}),(0,Y.jsx)(Z,{userId:e.userId}),(0,Y.jsx)(g,{className:X.updatedAt,fontSize:12,title:(0,q.default)(e.updatedAt).format(`YYYY-MM-DD HH:mm`),children:(0,q.default)(e.updatedAt).fromNow()})]}),o&&(0,Y.jsx)(`span`,{className:`${X.actions} project-row-actions`,children:(0,Y.jsx)(P,{items:d,placement:`bottomRight`,children:(0,Y.jsx)(ne,{icon:re,loading:r,size:`small`,title:t(`list.moreActions`)})})})]});return o?(0,Y.jsx)(ue,{items:d,children:f}):f}),Q.displayName=`ProjectRow`,$=(0,J.memo)(()=>{let{t:e}=n(`project`),[t,r]=(0,J.useState)(``),i=T(b.enableProjects),a=xe(),{error:o,isLoading:s,mutate:d}=K(e=>e.useFetchProjectList)(i),f=(0,J.useMemo)(()=>{let e=t.trim().toLocaleLowerCase();return e?a.filter(t=>[t.name,t.identifier,t.description].filter(Boolean).some(t=>t.toLocaleLowerCase().includes(e))):a},[t,a]);return i?(0,Y.jsxs)(l,{flex:1,height:`100%`,children:[(0,Y.jsx)(A,{left:(0,Y.jsx)(g,{style:{paddingInlineStart:4},weight:500,children:e(`list.title`)})}),(0,Y.jsxs)(O,{gap:16,paddingBlock:16,wrapperStyle:{flex:1,overflowY:`auto`},children:[(0,Y.jsxs)(l,{horizontal:!0,align:`center`,gap:12,justify:`space-between`,children:[(0,Y.jsx)(H,{allowClear:!0,placeholder:e(`list.searchPlaceholder`),style:{maxWidth:280},value:t,onChange:e=>r(e.target.value)}),(0,Y.jsx)(u,{icon:ce,onClick:()=>_e(),children:e(`create.action`)})]}),o?(0,Y.jsx)(W,{error:o,onRetry:()=>d()}):s&&a.length===0?(0,Y.jsx)(G,{rows:8}):f.length===0?(0,Y.jsx)(c,{flex:1,padding:48,children:(0,Y.jsx)(L,{description:t.trim()?e(`list.searchEmpty`):e(`list.emptyDescription`),icon:t.trim()?ie:ae})}):(0,Y.jsx)(l,{gap:4,children:f.map(e=>(0,Y.jsx)(Q,{project:e},e.id))})]})]}):(0,Y.jsx)(we,{})}),$.displayName=`ProjectListPage`}));e((()=>{Te()}))();export{$ as default};