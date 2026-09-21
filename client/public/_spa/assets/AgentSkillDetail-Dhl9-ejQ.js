import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{B as o,Bt as s,Kt as c,Vt as l,Xn as u,Zn as d,n as f,qt as p,t as m,z as h}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Rp as g,bp as _,t as v}from"../vendor/vendor-icons-vienkZi5.js";import{Bt as y,FD as b,ID as x,hF as S,uF as C}from"./index-w64_zsxD.js";import{i as w}from"./store-AMf-eC3D.js";import{t as T}from"./tool-rW_9PyAl.js";import{n as E,t as D}from"./Github-C7Wh73Pp.js";import{n as O,t as k}from"./PublishedTime-DNSyZnbL.js";import{t as A}from"./Skeleton-PcdZNeTb.js";import{a as j,i as M,n as N,r as P,t as F}from"./ContentViewer-BM4fFGs3.js";var I,L,R,z=e((()=>{l(),f(),I=t(i()),L=t(a()),R=(0,I.memo)(({size:e=40,className:t,style:n})=>(0,L.jsx)(s,{className:t,flex:`none`,style:{borderRadius:Math.floor(e*.1),color:`#000`,height:e,overflow:`hidden`,width:e,...n},children:(0,L.jsx)(m,{color:`#000`,size:e,style:{transform:`scale(0.75)`}})})),R.displayName=`SkillAvatar`})),B,V,H,U,W;e((()=>{b(),E(),p(),d(),o(),C(),v(),B=t(i()),r(),O(),A(),z(),M(),T(),N(),V=t(a()),H={description:x(`acss-c6gqhf`,[`.acss-c6gqhf{overflow:hidden;margin:0;font-size:13px;line-height:1.5;color:var(--ant-color-text-secondary);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    margin: 0;

    font-size: 13px;
    line-height: 1.5;
    color: var(--ant-color-text-secondary);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),divider:x(`acss-5eqtx4`,[`.acss-5eqtx4{flex-shrink:0;width:1px;background:var(--ant-color-border-secondary);}`],`
    flex-shrink: 0;
    width: 1px;
    background: var(--ant-color-border-secondary);
  `),left:x(`acss-1x7a1mg`,[`.acss-1x7a1mg{overflow-y:auto;flex-shrink:0;width:240px;padding:8px;}`],`
    overflow-y: auto;
    flex-shrink: 0;
    width: 240px;
    padding: 8px;
  `),meta:x(`acss-18zkhud`,[`.acss-18zkhud{flex-shrink:0;padding:16px;border-block-end:1px solid var(--ant-color-border-secondary);}`],`
    flex-shrink: 0;
    padding: 16px;
    border-block-end: 1px solid var(--ant-color-border-secondary);
  `),name:x(`acss-tt62he`,[`.acss-tt62he{font-size:16px;font-weight:500;line-height:1.4;color:var(--ant-color-text);}`],`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    color: var(--ant-color-text);
  `),right:x(`acss-euqncz`,[`.acss-euqncz{container-type:size;overflow:auto;flex:1;}`],`
    container-type: size;
    overflow: auto;
    flex: 1;
  `)},U=(e=[])=>{let t={},n=e=>{for(let r of e)r.type===`file`&&r.content!==void 0?t[r.path]=r.content:r.children&&n(r.children)};return n(e),t},W=(0,B.memo)(({skillId:e})=>{let{t}=n(`setting`),[r,i]=(0,B.useState)(`SKILL.md`),{data:a,isLoading:o}=w(e=>e.useFetchAgentSkillDetail)(e),s=a?.skillDetail,l=a?.resourceTree,d=(0,B.useMemo)(()=>U(l),[l]);if(o)return(0,V.jsxs)(c,{style:{height:`100%`,overflow:`hidden`},children:[(0,V.jsx)(`div`,{className:H.meta,children:(0,V.jsx)(y,{rows:1,style:{margin:0},title:220})}),(0,V.jsxs)(c,{horizontal:!0,style:{flex:1,overflow:`hidden`},children:[(0,V.jsx)(`div`,{className:H.left,children:(0,V.jsx)(j,{rows:9})}),(0,V.jsx)(`div`,{className:H.divider}),(0,V.jsx)(`div`,{className:H.right,children:(0,V.jsx)(y,{rows:8,style:{padding:16}})})]})]});let f=s?.manifest?.version,p=s?.description||s?.manifest?.description,m=s?.manifest?.repository,v=s?.manifest?.sourceUrl;return(0,V.jsxs)(c,{style:{height:`100%`,overflow:`hidden`},children:[s&&(0,V.jsx)(`div`,{className:H.meta,children:(0,V.jsxs)(c,{horizontal:!0,align:`center`,gap:12,children:[(0,V.jsx)(R,{size:40}),(0,V.jsxs)(c,{flex:1,gap:4,style:{overflow:`hidden`},children:[(0,V.jsxs)(c,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,V.jsxs)(c,{horizontal:!0,align:`center`,className:H.description,gap:4,children:[(0,V.jsx)(`span`,{className:H.name,children:s.name}),f&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(u,{icon:g}),(0,V.jsxs)(`span`,{children:[`v`,f]})]}),(0,V.jsx)(u,{icon:g}),t(`agentSkillDetail.updatedAt`),` `,(0,V.jsx)(k,{date:new Date(s.updatedAt).toISOString(),template:`MMM DD, YYYY`})]}),(m||v)&&(0,V.jsxs)(c,{horizontal:!0,align:`center`,gap:2,style:{flexShrink:0},children:[m&&(0,V.jsx)(`a`,{href:m,rel:`noreferrer`,target:`_blank`,children:(0,V.jsx)(h,{fill:S.colorTextDescription,icon:D,title:t(`agentSkillDetail.repository`)})}),v&&(0,V.jsx)(`a`,{href:v,rel:`noreferrer`,target:`_blank`,children:(0,V.jsx)(h,{icon:_,title:t(`agentSkillDetail.sourceUrl`)})})]})]}),p&&(0,V.jsx)(`p`,{className:H.description,children:p})]})]})}),(0,V.jsxs)(c,{horizontal:!0,style:{flex:1,overflow:`hidden`},children:[(0,V.jsx)(`div`,{className:H.left,children:(0,V.jsx)(P,{resourceTree:l||[],selectedFile:r,onSelectFile:i})}),(0,V.jsx)(`div`,{className:H.divider}),(0,V.jsx)(`div`,{className:H.right,children:(0,V.jsx)(F,{contentMap:d,selectedFile:r,skillDetail:s})},r)]})]})}),W.displayName=`AgentSkillDetail`}))();export{W as default};