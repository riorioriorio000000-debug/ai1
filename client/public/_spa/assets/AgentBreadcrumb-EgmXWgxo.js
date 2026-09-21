import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a,a as o,i as s,m as c}from"../vendor/vendor-react-B9HSWrpN.js";import{Xn as l,Zn as u,at as d,it as f}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Mt as p,r as m}from"../vendor/vendor-antd-BWSxhuJE.js";import{ig as h,t as g}from"../vendor/vendor-icons-vienkZi5.js";import{Af as _,FD as v,Ff as y,ID as b,If as x,Mr as S,Or as C,Qv as w,TA as T,Yr as E,dg as D,jf as O,jr as k,qr as A,wA as j}from"./index-w64_zsxD.js";import{n as M,r as N,t as P}from"./agentPathname-BaiUp9_G.js";var F,I,L=e((()=>{F=t(i()),s(),j(),y(),M(),O(),I=e=>{let{pathname:t}=c(),n=x(),r=(0,F.useMemo)(()=>N(t),[t]);return(0,F.useCallback)((...t)=>P(_(T(`/agent`,e,...t),n),r,n),[n,e,r])}})),R,z,B,V,H=e((()=>{v(),D(),u(),d(),m(),g(),R=t(i()),r(),s(),C(),S(),L(),z=t(a()),B={breadcrumb:b(`acss-7dnjw9`,[`.acss-7dnjw9 ol{align-items:center;}`,`.acss-7dnjw9 li,.acss-7dnjw9 .ant-breadcrumb-link,.acss-7dnjw9 .ant-breadcrumb-link>a{display:flex;align-items:center;}`],`
    ol {
      align-items: center;
    }

    li,
    .ant-breadcrumb-link,
    .ant-breadcrumb-link > a {
      display: flex;
      align-items: center;
    }
  `)},V=(0,R.memo)(({agentId:e,extraItems:t,title:r})=>{let{t:i}=n([`chat`,`common`]),a=I(e),s=k(t=>w(A.getAgentMetaById(e)(t))),c=k(E.inboxAgentId),u=c&&e===c?s||i(`inbox.title`,{ns:`chat`}):s||i(`defaultSession`,{ns:`common`}),d=a();return(0,z.jsx)(p,{className:B.breadcrumb,separator:(0,z.jsx)(l,{icon:h,size:14}),items:[{title:(0,z.jsx)(o,{to:d,children:(0,z.jsx)(f,{ellipsis:!0,as:`span`,color:`inherit`,style:{maxWidth:200},weight:500,children:u})})},...r==null?[]:[{title:(0,z.jsx)(f,{as:`span`,color:`inherit`,weight:500,children:r})}],...(t??[]).map((e,t)=>({key:`extra-${t}`,title:(0,z.jsx)(f,{as:`span`,color:`inherit`,weight:500,children:e})}))]})}),V.displayName=`AgentBreadcrumb`}));export{I as i,H as n,L as r,V as t};