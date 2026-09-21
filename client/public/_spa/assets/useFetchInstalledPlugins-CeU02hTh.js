import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{Bt as o,Ht as s,Kt as c,Ut as l,Vt as u,Xn as d,Zn as f,a as p,at as m,i as h,it as g,o as _,qt as v,r as y}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Il as b,Wr as x,t as S,wc as C}from"../vendor/vendor-icons-vienkZi5.js";import{Bt as w,FD as T,ID as E,aS as D,hF as O,sS as k,uF as A,ux as j,wx as M}from"./index-w64_zsxD.js";import{i as N}from"./store-AMf-eC3D.js";import{n as P,t as F}from"./discover-B2VCTThL.js";import{t as I}from"./tool-rW_9PyAl.js";import{i as ee,n as te}from"./dist-D-fG8xep.js";import{t as ne}from"./Skeleton-PcdZNeTb.js";import{T as L,w as R}from"./MCPInstallProgress-XceYNOpx.js";var z,B,V=e((()=>{T(),z={item:E(`acss-f6sbvt`,[`.acss-f6sbvt{width:calc(50% - 6px);}`,`@media (max-width: 575.98px){.acss-f6sbvt{width:100%;}}`],`
    width: calc(50% - 6px);

    @media (max-width: 575.98px) {
      width: 100%;
    }
  `),list:E(`acss-rpeaxh`,[`.acss-rpeaxh{display:flex;flex-wrap:wrap;gap:12px;padding-block-end:16px;}`],`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding-block-end: 16px;
  `)},B={container:E(`acss-p1h738`,[`.acss-p1h738{position:relative;overflow:hidden;flex:1;min-width:0;}`],`
    position: relative;
    overflow: hidden;
    flex: 1;
    min-width: 0;
  `),description:E(`acss-z4vnt2`,[`.acss-z4vnt2{overflow:hidden;font-size:12px;color:var(--ant-color-text-secondary);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    font-size: 12px;
    color: var(--ant-color-text-secondary);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),title:E(`acss-kf8zz9`,[`.acss-kf8zz9{overflow:hidden;font-size:14px;font-weight:500;color:var(--ant-color-text);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    font-size: 14px;
    font-weight: 500;
    color: var(--ant-color-text);
    text-overflow: ellipsis;
    white-space: nowrap;
  `)}})),H,U,W,G=e((()=>{l(),v(),h(),H=t(i()),V(),U=t(a()),W=(0,H.memo)(({avatar:e,title:t,description:n,identifier:r,backgroundColor:i})=>{let a=B;return!r||!t?null:(0,U.jsx)(`a`,{href:`/community/agent/${r}`,rel:`noopener noreferrer`,style:{display:`block`,height:`100%`},target:`_blank`,children:(0,U.jsxs)(s,{clickable:!0,horizontal:!0,align:`center`,className:a.container,gap:12,paddingBlock:12,paddingInline:12,style:{cursor:`pointer`,height:`100%`},variant:`outlined`,children:[(0,U.jsx)(y,{avatar:e,background:i||`transparent`,shape:`square`,size:40,style:{flex:`none`}}),(0,U.jsxs)(c,{flex:1,gap:4,style:{minWidth:0,overflow:`hidden`},children:[(0,U.jsx)(`span`,{className:a.title,children:t}),n&&(0,U.jsx)(`span`,{className:a.description,children:n})]})]})})})})),K,q,J=e((()=>{u(),f(),A(),S(),K=t(a()),q=()=>(0,K.jsx)(o,{padding:16,children:(0,K.jsx)(d,{spin:!0,color:O.colorTextDescription,icon:C})})})),Y,X,Z,Q,re=e((()=>{u(),_(),f(),m(),A(),S(),Y=t(i()),r(),te(),ne(),G(),V(),J(),D(),M(),P(),R(),X=t(a()),Z=12,Q=(0,Y.memo)(({inModal:e})=>{let{t}=n(`discover`),{identifier:r}=L(),[i,a]=(0,Y.useState)([]),[s,c]=(0,Y.useState)(1),[l,u]=(0,Y.useState)(0),[f,m]=(0,Y.useState)(!1),h=(0,Y.useRef)(s),{data:_,isLoading:v,error:y}=k(r?j.mcpAgents(r,s):null,()=>F.getAgentsByPlugin({page:s,pageSize:Z,pluginId:r}));(0,Y.useEffect)(()=>{_&&(s===1?a(_.items):s>h.current&&a(e=>[...e,..._.items]),u(_.totalCount),m(!0),h.current=s)},[_,s]);let S=i.length<l,C=(0,Y.useCallback)(()=>{!v&&S&&c(e=>e+1)},[v,S]);return!f&&v?(0,X.jsx)(p,{gap:12,rows:2,width:`100%`,children:Array.from({length:4}).map((e,t)=>(0,X.jsx)(w,{avatar:40,rows:1},t))}):y?(0,X.jsxs)(o,{gap:12,padding:40,children:[(0,X.jsx)(d,{color:O.colorTextDescription,icon:x,size:80}),(0,X.jsx)(g,{type:`secondary`,children:t(`mcp.details.agents.networkError`)})]}):f&&i.length===0?(0,X.jsxs)(o,{gap:12,padding:40,children:[(0,X.jsx)(d,{color:O.colorTextDescription,icon:b,size:80}),(0,X.jsx)(g,{type:`secondary`,children:t(`mcp.details.agents.empty`)})]}):(0,X.jsx)(ee,{data:i,endReached:C,increaseViewportBy:typeof window<`u`?window.innerHeight:0,itemClassName:z.item,itemContent:(e,t)=>(0,X.jsx)(W,{...t},t.identifier),listClassName:z.list,overscan:24,style:e?{height:`50vh`,width:`100%`}:{width:`100%`},useWindowScroll:!e,components:{Footer:v?q:()=>(0,X.jsx)(`div`,{style:{height:16}})}})})})),$,ie=e((()=>{I(),$=()=>{let[e]=N(e=>[e.useFetchInstalledPlugins]);return e(!0)}}));export{q as a,G as c,re as i,z as l,$ as n,J as o,Q as r,W as s,ie as t,V as u};