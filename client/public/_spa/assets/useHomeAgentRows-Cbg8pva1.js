import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{rt as o}from"../vendor/vendor-ui-core-BmtybT1r.js";import{dn as s,mn as c}from"./app-const-BpgKVRXh.js";import{$v as l,Mr as u,Or as d,Qv as f,Yr as p,dg as m,iC as h,jr as g,pF as _,qr as v,uF as y,vF as b,vS as x,yS as S}from"./index-w64_zsxD.js";import{n as C,t as w}from"./Popover-Cd3scH3I.js";import{_t as T,yt as E}from"./chat-D3ilvURJ.js";import{o as D,t as O}from"./selectors-C-g1ZR70.js";import{n as k,t as A}from"./Input-gdUxluEJ.js";import{t as j}from"./_virtual_lobe-ui-named__stopPropagation-DeAweL-3.js";import{c as M,o as N}from"./SideBarDrawer-BQFi2kz3.js";import{i as P,r as F,t as I}from"./useAgentList-DrJbBP7f.js";var L,R,z,B,V,H=e((()=>{y(),L=t(i()),R=t(a()),z=b`
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
`,B=_(({css:e,cssVar:t})=>({dot:e`
    position: relative;
    z-index: 1;

    width: 6px;
    height: 6px;
    border-radius: 50%;

    background: ${t.colorInfo};
  `,ripple:e`
    position: absolute;
    inset: 0;

    width: 6px;
    height: 6px;
    margin: auto;
    border: 1px solid ${t.colorInfo};
    border-radius: 50%;

    background: transparent;

    animation: ${z} 1.8s ease-out infinite;
  `,wrapper:e`
    position: relative;

    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;

    width: 14px;
    height: 14px;
  `})),V=(0,L.memo)(({label:e})=>(0,R.jsxs)(`span`,{"aria-label":e,className:B.wrapper,"data-testid":`topic-unread-dot`,role:e?`status`:void 0,children:[(0,R.jsx)(`span`,{className:B.ripple}),(0,R.jsx)(`span`,{className:B.dot})]}))}));function U(e){let t=(0,W.useRef)(null);return(0,W.useEffect)(()=>{queueMicrotask(()=>{t.current?.input?.focus()})},[]),(0,G.jsx)(A,{...e,ref:t})}var W,G,K,q=e((()=>{k(),C(),j(),W=t(i()),N(),G=t(a()),K=(0,W.memo)(({open:e,title:t,onOpenChange:n,onSave:r,onCancel:i,placement:a=`bottomLeft`,width:s=320})=>{let[c,l]=(0,W.useState)(t),u=(0,W.useRef)(!1),d=M();(0,W.useEffect)(()=>{e&&(l(t),u.current=!1)},[e,t]);let f=(0,W.useCallback)(async()=>{u.current||c&&t!==c&&(u.current=!0,await r(c))},[c,t,r]),p=(0,W.useCallback)(()=>{n(!1)},[n]);return(0,G.jsx)(w,{open:e,placement:a,portalProps:d,trigger:`click`,content:(0,G.jsx)(U,{defaultValue:t,onBlur:f,onChange:e=>l(e.target.value),onClick:o,onKeyDown:(0,W.useCallback)(e=>{e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),i?.(),p())},[i,p]),onPressEnter:()=>{f(),p()}}),styles:{content:{padding:4,width:s}},onOpenChange:e=>{e||f(),n(e)},children:(0,G.jsx)(`div`,{})})})})),J,Y,X,Z=e((()=>{m(),J=t(h()),Y=t(i()),r(),x(),c(),I(),d(),u(),T(),O(),X=()=>{let{t:e}=n(`chat`),t=g(p.inboxAgentId),r=g(v.getAgentMetaById(t??``)),i=E(D.pinnedAgents,J.default),a=E(D.agentGroups,J.default),o=E(D.ungroupedAgents,J.default),c=E(D.privatePinnedAgents,J.default),u=E(D.privateAgentGroups,J.default),d=E(D.privateUngroupedAgents,J.default),m=S(),h=P(),_=F();return(0,Y.useMemo)(()=>{let n=new Set,p=t=>{let r=[];for(let i of t)for(let t of h(i))t.type===`agent`&&(n.has(t.id)||(n.add(t.id),r.push({avatar:typeof t.avatar==`string`?t.avatar:void 0,backgroundColor:t.backgroundColor||void 0,id:t.id,pinned:t.pinned??!1,subtitle:l(t),title:f(t,e(`untitledAgent`))})));return r},g=p([c,_(u).flatMap(e=>e.items),d]),v=[];return t&&!n.has(t)&&(n.add(t),v.push({avatar:(typeof r?.avatar==`string`?r.avatar:void 0)??s,backgroundColor:r?.backgroundColor||void 0,id:t,title:f(r,`Lobe AI`)})),v.push(...p([i,_(a).flatMap(e=>e.items),o])),{privateRows:g,showPrivateSection:!!m&&g.length>0,workspaceRows:v}},[m,a,t,r,h,_,i,u,c,d,e,o])}}));export{V as a,q as i,X as n,H as o,K as r,Z as t};