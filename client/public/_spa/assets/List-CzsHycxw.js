import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{Ht as o,Kt as s,Ut as c,Xn as l,Zn as u,a as d,at as f,i as p,it as m,lt as h,o as g,qt as _,r as ee}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Em as v,Hm as te,S_ as y,od as b,t as x}from"../vendor/vendor-icons-vienkZi5.js";import{FD as S,ID as C,Rd as w,TA as ne,Yd as T,hF as E,uF as D,wA as O}from"./index-w64_zsxD.js";import{t as re}from"./_virtual_lobe-ui-named__Tooltip-DNompU8a.js";import{n as ie,t as k}from"./discover-B2VCTThL.js";import{n as A,t as j}from"./Tag-C95BKTI7.js";import{n as ae,t as oe}from"./MCP-BzNePik0.js";import{n as se,t as ce}from"./query-string-BqMU_9Da.js";import{n as le,t as ue}from"./useWorkspaceAwareNavigate-BbajQ7ta.js";import{n as M,t as N}from"./PublishedTime-DNSyZnbL.js";import{n as P,t as F}from"./WorkspaceLink-CS4ZDv1a.js";import{n as I,t as L}from"./useQuery-CgXfiAnB.js";import{n as R,t as z}from"./AssistantEmpty-DUSW8jbG.js";import{n as B,t as V}from"./profileLink-Ck_QKI12.js";var H,U,W,G,K=e((()=>{S(),ae(),_(),u(),re(),A(),D(),x(),H=t(i()),r(),T(),U=t(a()),W={token:C(`acss-1acgyt9`,[`.acss-1acgyt9{border-radius:4px;font-family:var(--ant-font-family-code);font-size:11px;color:var(--ant-color-text-secondary);background:var(--ant-color-fill-tertiary);}`],`
      border-radius: 4px;

      font-family: var(--ant-font-family-code);
      font-size: 11px;
      color: var(--ant-color-text-secondary);

      background: var(--ant-color-fill-tertiary);
    `)},G=(0,H.memo)(({tokenUsage:e,pluginCount:t,knowledgeCount:r,forkCount:i,placement:a=`right`})=>{let{t:o}=n(`discover`);return(0,U.jsxs)(s,{horizontal:!0,align:`center`,gap:4,children:[(0,U.jsx)(h,{placement:a,styles:{root:{pointerEvents:`none`}},title:o(`assistants.tokenUsage`),children:(0,U.jsx)(j,{className:W.token,icon:(0,U.jsx)(l,{icon:v}),children:w(e)})}),!!(i&&i>0)&&(0,U.jsx)(h,{placement:a,styles:{root:{pointerEvents:`none`}},title:o(`fork.forksCount`,{count:i}),children:(0,U.jsx)(j,{className:W.token,icon:(0,U.jsx)(l,{icon:b}),children:w(i)})}),!!(t&&t>0)&&(0,U.jsx)(h,{placement:a,styles:{root:{pointerEvents:`none`}},title:o(`assistants.withPlugin`),children:(0,U.jsx)(j,{icon:(0,U.jsx)(l,{fill:E.colorTextSecondary,icon:oe}),children:t})}),!!(r&&r>0)&&(0,U.jsx)(h,{placement:a,styles:{root:{pointerEvents:`none`}},title:o(`assistants.withKnowledge`),children:(0,U.jsx)(j,{icon:(0,U.jsx)(l,{icon:y}),children:r})})]})})})),q,J,Y,X,de=e((()=>{S(),c(),_(),u(),p(),A(),f(),x(),ce(),q=t(i()),r(),O(),M(),ue(),P(),L(),V(),ie(),K(),J=t(a()),Y={author:C(`acss-z3tek7`,[`.acss-z3tek7{cursor:pointer;color:var(--ant-color-text-description);}`,`.acss-z3tek7:hover{color:var(--ant-color-primary);}`],`
      cursor: pointer;
      color: var(--ant-color-text-description);

      &:hover {
        color: var(--ant-color-primary);
      }
    `),code:C(`acss-1vq385i`,[`.acss-1vq385i{font-family:var(--ant-font-family-code);}`],`
      font-family: var(--ant-font-family-code);
    `),desc:C(`acss-9ncgb7`,[`.acss-9ncgb7{flex:1;margin:0!important;color:var(--ant-color-text-secondary);}`],`
      flex: 1;
      margin: 0 !important;
      color: var(--ant-color-text-secondary);
    `),footer:C(`acss-osyecd`,[`.acss-osyecd{margin-block-start:16px;border-block-start:1px dashed var(--ant-color-border);background:var(--ant-color-bg-container);}`],`
      margin-block-start: 16px;
      border-block-start: 1px dashed var(--ant-color-border);
      background: var(--ant-color-bg-container);
    `),secondaryDesc:C(`acss-1xcok0i`,[`.acss-1xcok0i{font-size:12px;color:var(--ant-color-text-description);}`],`
      font-size: 12px;
      color: var(--ant-color-text-description);
    `),title:C(`acss-1mw4x5s`,[`.acss-1mw4x5s{margin:0!important;font-size:16px!important;font-weight:500!important;}`,`.acss-1mw4x5s:hover{color:var(--ant-color-link);}`],`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: var(--ant-color-link);
      }
    `)},X=(0,q.memo)(({createdAt:e,updatedAt:t,author:r,avatar:i,title:a,description:c,category:u,identifier:d,tokenUsage:f,pluginCount:p,knowledgeCount:h,forkCount:g,backgroundColor:_,userName:v,ownerType:y,type:b})=>{let x=le(),{source:S}=I(),C=b===`agent-group`,w=C?`/community/group_agent`:`/community/agent`,T=se.stringifyUrl({query:{source:S},url:ne(w,d)},{skipNull:!0}),{t:E}=n(`discover`),D=(0,q.useCallback)(e=>{e.stopPropagation(),v&&window.open(B(v,y),`_blank`,`noopener,noreferrer`)},[y,v]),O=(0,q.useCallback)(()=>{k.reportAgentEvent({event:`click`,identifier:d,source:location.pathname}).catch(()=>{}),x(T)},[d,T,x]);return(0,J.jsxs)(o,{clickable:!0,"data-agent-type":b??`agent`,"data-testid":`assistant-item`,height:`100%`,variant:`outlined`,width:`100%`,style:{overflow:`hidden`,position:`relative`},onClick:O,children:[C&&(0,J.jsx)(j,{color:`info`,style:{position:`absolute`,right:12,top:12,zIndex:1},children:E(`groupAgents.tag`,{defaultValue:`群组`})}),(0,J.jsx)(s,{horizontal:!0,align:`flex-start`,gap:16,justify:`space-between`,padding:16,style:{paddingRight:C?80:16},width:`100%`,children:(0,J.jsxs)(s,{horizontal:!0,gap:12,title:d,style:{overflow:`hidden`},children:[(0,J.jsx)(ee,{avatar:i,background:_||`transparent`,shape:`square`,size:40,style:{flex:`none`}}),(0,J.jsxs)(s,{flex:1,gap:2,style:{overflow:`hidden`},children:[(0,J.jsx)(s,{horizontal:!0,align:`center`,flex:1,gap:8,style:{overflow:`hidden`},children:(0,J.jsx)(F,{style:{color:`inherit`,overflow:`hidden`},to:T,children:(0,J.jsx)(m,{ellipsis:!0,as:`h2`,className:Y.title,children:a})})}),r&&(0,J.jsx)(`div`,{className:v?Y.author:void 0,style:v?void 0:{color:`inherit`},onClick:v?D:void 0,children:r})]})]})}),(0,J.jsxs)(s,{flex:1,gap:12,paddingInline:16,children:[(0,J.jsx)(m,{as:`p`,className:Y.desc,ellipsis:{rows:3},children:c}),(0,J.jsx)(G,{forkCount:g,knowledgeCount:h,pluginCount:p,tokenUsage:f})]}),(0,J.jsx)(s,{horizontal:!0,align:`center`,className:Y.footer,justify:`space-between`,padding:16,children:(0,J.jsxs)(s,{horizontal:!0,align:`center`,className:Y.secondaryDesc,justify:`space-between`,children:[(0,J.jsxs)(s,{horizontal:!0,align:`center`,gap:4,children:[(0,J.jsx)(l,{icon:te,size:14}),(0,J.jsx)(N,{className:Y.secondaryDesc,date:t||e,template:`MMM DD, YYYY`})]}),E(`category.assistant.${u}`)]})})]})})})),Z,Q,$,fe=e((()=>{g(),Z=t(i()),R(),de(),Q=t(a()),$=(0,Z.memo)(({data:e=[],rows:t=3})=>e.length===0?(0,Q.jsx)(z,{}):(0,Q.jsx)(d,{rows:t,width:`100%`,children:e.map((e,t)=>(0,Q.jsx)(X,{...e},t))}))}));export{K as i,fe as n,G as r,$ as t};