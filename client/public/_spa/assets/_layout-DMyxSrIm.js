import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a,i as o,u as s}from"../vendor/vendor-react-B9HSWrpN.js";import{Kt as c,Xn as l,Zn as u,qt as d}from"../vendor/vendor-ui-core-BmtybT1r.js";import{og as f,t as p}from"../vendor/vendor-icons-vienkZi5.js";import{Fr as m}from"./app-const-BpgKVRXh.js";import{Af as h,Br as g,FD as _,Ff as v,Gr as y,ID as b,If as x,Lr as S,Mr as C,Mt as w,Nt as T,Or as E,Qv as D,Rr as O,Ur as k,dg as A,jf as j,jr as M,qr as N}from"./index-w64_zsxD.js";import{n as P,t as F}from"./useActiveRouteParams-Dz6l4mbs.js";import{c as I,s as L}from"./useProjectSkills-U5cztNXt.js";import{c as R,i as z,l as B,n as V,r as H,t as U}from"./appNavigate-D-we3vxF.js";import{n as W,t as G}from"./AgentDocumentsGroup-9FqQyB15.js";var K,q,J,Y,X=e((()=>{_(),A(),d(),u(),p(),K=t(i()),r(),v(),m(),W(),V(),z(),T(),j(),g(),S(),F(),L(),E(),C(),q=t(a()),J={backLink:b(`acss-1bvvcwc`,[`.acss-1bvvcwc{display:flex;gap:2px;align-items:center;width:fit-content;padding-block:3px;padding-inline:4px 6px;border-radius:6px;font-size:12px;color:var(--ant-color-text-tertiary);text-decoration:none;background:transparent;transition:color 150ms ease,background 150ms ease;}`,`.acss-1bvvcwc:hover{color:var(--ant-color-text-secondary);background:var(--ant-color-fill-tertiary);}`],`
    display: flex;
    gap: 2px;
    align-items: center;

    width: fit-content;
    padding-block: 3px;
    padding-inline: 4px 6px;
    border-radius: 6px;

    font-size: 12px;
    color: var(--ant-color-text-tertiary);
    text-decoration: none;

    background: transparent;

    transition:
      color 150ms ease,
      background 150ms ease;

    &:hover {
      color: var(--ant-color-text-secondary);
      background: var(--ant-color-fill-tertiary);
    }
  `),body:b(`acss-okzky3`,[`.acss-okzky3{overflow-y:auto;height:100%;}`],`
    overflow-y: auto;
    height: 100%;
  `)},Y=(0,K.memo)(()=>{let{t:e}=n(`chat`),t=x(),{aid:r=``}=P(),i=D(M(N.getAgentMetaById(r)),e(`untitledAgent`)),a=h(`/agent/${r}`,t),o=M(y.isAgentHeterogeneousById(r)),s=I(r),u=M(e=>r?y.getAgencyConfigById(r)(e):void 0),d=k(u,{clientExecutionAvailable:!1,deviceRoutingAvailable:O(r),isHetero:o,workspaceScoped:M(e=>r?y.isWorkspaceAgentById(r)(e):!1)})===`device`&&u?.boundDeviceId?u.boundDeviceId:void 0,p=(0,q.jsxs)(c,{horizontal:!0,align:`center`,flex:`none`,justify:`space-between`,padding:`8px 6px`,children:[(0,q.jsxs)(`a`,{className:J.backLink,href:a,onClick:e=>{e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0||(e.preventDefault(),U(a,{escape:!0}))},children:[(0,q.jsx)(l,{icon:f,size:14}),e(`agentDocument.backToAgent`,{name:i})]}),(0,q.jsx)(w,{})]});return(0,q.jsx)(H,{body:(0,q.jsx)(c,{className:J.body,width:`100%`,children:(0,q.jsx)(G,{activeFilter:`documents`,deviceId:d,openMode:`route`,showFilterTabs:!1,showLocalProjectSkills:!1,style:{flex:1,minHeight:0},workingDirectory:s})}),header:p})}),Y.displayName=`AgentDocumentSidebarContent`})),Z,Q,$=e((()=>{d(),o(),B(),X(),Z=t(a()),Q=()=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(R,{navKey:`agent-docs`,children:(0,Z.jsx)(Y,{})}),(0,Z.jsx)(c,{horizontal:!0,flex:1,height:`100%`,style:{minHeight:0,overflow:`hidden`,position:`relative`},width:`100%`,children:(0,Z.jsx)(c,{flex:1,style:{minHeight:0,minWidth:0},children:(0,Z.jsx)(s,{})})})]})}));e((()=>{$()}))();export{Q as default};