import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{B as o,Kt as s,Xn as c,Zn as l,i as u,qt as d,r as f,z as p}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Rp as m,bp as h,t as g}from"../vendor/vendor-icons-vienkZi5.js";import{Bt as _,FD as v,ID as y,hF as b,uF as x}from"./index-w64_zsxD.js";import{$ as S,t as C}from"./selectors-D4u9uv4T.js";import{i as w}from"./store-AMf-eC3D.js";import{t as T}from"./tool-rW_9PyAl.js";import{_ as E,g as D}from"./file-CX3iZ5dr.js";import{r as O,t as k}from"./discover-BBJ_uUrz.js";import{n as A,t as j}from"./Github-C7Wh73Pp.js";import{n as M,t as N}from"./PublishedTime-DNSyZnbL.js";import{t as P}from"./Skeleton-PcdZNeTb.js";import{i as F,n as I,r as L,t as R}from"./ContentViewer-BM4fFGs3.js";import{n as z,t as B}from"./marketApi-CbSEimca.js";var V,H,U,W,G,K,q;e((()=>{v(),A(),d(),l(),o(),u(),x(),D(),g(),V=t(i()),r(),M(),P(),I(),F(),B(),k(),T(),C(),H=t(a()),U={description:y(`acss-c6gqhf`,[`.acss-c6gqhf{overflow:hidden;margin:0;font-size:13px;line-height:1.5;color:var(--ant-color-text-secondary);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    margin: 0;

    font-size: 13px;
    line-height: 1.5;
    color: var(--ant-color-text-secondary);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),divider:y(`acss-5eqtx4`,[`.acss-5eqtx4{flex-shrink:0;width:1px;background:var(--ant-color-border-secondary);}`],`
    flex-shrink: 0;
    width: 1px;
    background: var(--ant-color-border-secondary);
  `),left:y(`acss-1x7a1mg`,[`.acss-1x7a1mg{overflow-y:auto;flex-shrink:0;width:240px;padding:8px;}`],`
    overflow-y: auto;
    flex-shrink: 0;
    width: 240px;
    padding: 8px;
  `),meta:y(`acss-18zkhud`,[`.acss-18zkhud{flex-shrink:0;padding:16px;border-block-end:1px solid var(--ant-color-border-secondary);}`],`
    flex-shrink: 0;
    padding: 16px;
    border-block-end: 1px solid var(--ant-color-border-secondary);
  `),name:y(`acss-tt62he`,[`.acss-tt62he{font-size:16px;font-weight:500;line-height:1.4;color:var(--ant-color-text);}`],`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    color: var(--ant-color-text);
  `),right:y(`acss-euqncz`,[`.acss-euqncz{container-type:size;overflow:auto;flex:1;}`],`
    container-type: size;
    overflow: auto;
    flex: 1;
  `)},W=e=>{let t={},n=e=>{for(let r of e)r.type===`file`&&r.content!==void 0?t[r.path]=r.content:r.children&&n(r.children)};return n(e),t},G=e=>e?Object.keys(e).sort().map(e=>({name:e.split(`/`).pop()||e,path:e,type:`file`})):[],K=async e=>{let t=await(await fetch(e)).arrayBuffer();return new Promise((e,n)=>{E(new Uint8Array(t),(t,r)=>{if(t)return n(t);let i={},a=[],o=new TextDecoder;for(let[e,t]of Object.entries(r)){if(e.endsWith(`/`)||e.includes(`__MACOSX`))continue;let n=e.indexOf(`/`),r=n>=0?e.slice(n+1):e;if(!r||r===`SKILL.md`)continue;let s=o.decode(t);i[r]=s,a.push({content:s,name:r.split(`/`).pop()||r,path:r,type:`file`})}a.sort((e,t)=>e.path.localeCompare(t.path)),e({contentMap:i,tree:a})})})},q=(0,V.memo)(({identifier:e})=>{let{t}=n(`setting`),[r,i]=(0,V.useState)(`SKILL.md`),{data:a,isLoading:o}=O(e=>e.useFetchSkillDetail)({identifier:e}),l=w(S.getAgentSkillByIdentifier(e)),{data:u}=w(e=>e.useFetchAgentSkillDetail)(l?.id),[d,g]=(0,V.useState)({}),[v,y]=(0,V.useState)([]),x=z.getSkillDownloadUrl(encodeURIComponent(e));(0,V.useEffect)(()=>{l||K(x).then(({contentMap:e,tree:t})=>{g(e),y(t)}).catch(()=>{})},[x,l]);let C=(0,V.useMemo)(()=>u?.resourceTree??[],[u?.resourceTree]),T=(0,V.useMemo)(()=>W(C),[C]),E=C.length>0?T:d,D=(0,V.useMemo)(()=>C.length>0?C:v.length>0?v:G(a?.resources),[C,v,a?.resources]);if(o||!a)return(0,H.jsx)(_,{rows:8,style:{padding:16}});let{name:k,icon:A,version:M,description:P,homepage:F,github:I}=a,B={content:u?.skillDetail?.content||a.content};return(0,H.jsxs)(s,{style:{height:`100%`,overflow:`hidden`},children:[(0,H.jsx)(`div`,{className:U.meta,children:(0,H.jsxs)(s,{horizontal:!0,align:`center`,gap:12,children:[(0,H.jsx)(f,{avatar:A||k,shape:`square`,size:40,style:{flex:`none`}}),(0,H.jsxs)(s,{flex:1,gap:4,style:{overflow:`hidden`},children:[(0,H.jsxs)(s,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,H.jsxs)(s,{horizontal:!0,align:`center`,className:U.description,gap:4,children:[(0,H.jsx)(`span`,{className:U.name,children:k}),M&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(c,{icon:m}),(0,H.jsxs)(`span`,{children:[`v`,M]})]}),(0,H.jsx)(c,{icon:m}),t(`agentSkillDetail.updatedAt`),` `,(0,H.jsx)(N,{date:a.updatedAt,template:`MMM DD, YYYY`})]}),(0,H.jsxs)(s,{horizontal:!0,align:`center`,gap:2,style:{flexShrink:0},children:[I?.url&&(0,H.jsx)(`a`,{href:I.url,rel:`noreferrer`,target:`_blank`,children:(0,H.jsx)(p,{fill:b.colorTextDescription,icon:j,title:t(`agentSkillDetail.repository`)})}),F&&(0,H.jsx)(`a`,{href:F,rel:`noreferrer`,target:`_blank`,children:(0,H.jsx)(p,{icon:h,title:t(`agentSkillDetail.sourceUrl`)})})]})]}),P&&(0,H.jsx)(`p`,{className:U.description,children:P})]})]})}),(0,H.jsxs)(s,{horizontal:!0,style:{flex:1,overflow:`hidden`},children:[(0,H.jsx)(`div`,{className:U.left,children:(0,H.jsx)(L,{resourceTree:D,selectedFile:r,onSelectFile:i})}),(0,H.jsx)(`div`,{className:U.divider}),(0,H.jsx)(`div`,{className:U.right,children:(0,H.jsx)(R,{contentMap:E,selectedFile:r,skillDetail:B})},r)]})]})}),q.displayName=`MarketSkillDetail`}))();export{q as default};