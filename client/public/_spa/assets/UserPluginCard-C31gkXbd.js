import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{Ht as ee,Kt as o,M as s,Ut as c,Xn as l,Yn as u,Zn as d,at as f,i as p,it as m,j as te,lt as h,qt as g,r as _,rt as ne}from"../vendor/vendor-ui-core-BmtybT1r.js";import{A as v,Ap as re,Em as y,Hm as ie,Ip as b,Ma as ae,bp as x,od as oe,t as S,ut as se}from"../vendor/vendor-icons-vienkZi5.js";import{Al as C,FD as w,ID as T,Kf as E,MA as D,Or as O,Rd as k,TA as A,Yd as j,gF as ce,jr as le,kl as ue,qf as de,uF as M,vS as fe,wA as N,yS as pe}from"./index-w64_zsxD.js";import{n as P,t as me}from"./DropdownMenu-1ae8j9bI.js";import{t as F}from"./_virtual_lobe-ui-named__Tooltip-DNompU8a.js";import{n as he,t as ge}from"./discover-B2VCTThL.js";import{n as _e,t as I}from"./Tag-C95BKTI7.js";import{_t as ve,yt as ye}from"./chat-D3ilvURJ.js";import{t as be}from"./_virtual_lobe-ui-named__stopPropagation-DeAweL-3.js";import{n as xe,t as Se}from"./query-string-BqMU_9Da.js";import{n as L,t as R}from"./useWorkspaceAwareNavigate-BbajQ7ta.js";import{n as Ce,t as we}from"./PublishedTime-DNSyZnbL.js";import{n as z,t as B}from"./WorkspaceLink-CS4ZDv1a.js";var Te,Ee,De,Oe=e((()=>{Te=({canEdit:e,marketOrganizationProfile:t,user:n})=>!e||n.type!==`organization`?!1:t?t.accountId===n.id:!0,Ee=({fallbackProfile:e,marketProfile:t})=>t?e?{...t,user:{...t.user,avatarUrl:t.user.avatarUrl||e.user.avatarUrl,description:t.user.description??e.user.description,displayName:t.user.displayName||e.user.displayName}}:t:e,De=({isWorkspaceScope:e,pathname:t,search:n=``})=>{if(!e)return null;let r=`/community/workspace`;return t.endsWith(r)||!t.includes(`/community/user/`)&&!t.includes(`/community/org/`)?null:`${r}${n}`}})),V,ke,H,Ae,U,W=e((()=>{V=t(i()),ke=t(a()),H=(0,V.createContext)(null),Ae=(0,V.memo)(({children:e,config:t})=>(0,ke.jsx)(H,{value:t,children:e})),U=()=>{let e=(0,V.use)(H);if(!e)throw Error(`useUserDetailContext must be used within UserDetailProvider`);return e}})),G,K,je,q,Me,Ne=e((()=>{w(),c(),P(),g(),d(),be(),F(),s(),p(),_e(),f(),D(),M(),S(),Se(),G=t(i()),r(),N(),fe(),Ce(),R(),z(),E(),C(),he(),O(),ve(),j(),W(),K=t(a()),je=e=>{switch(e){case`published`:return`green`;case`unpublished`:return`orange`;case`deprecated`:return`red`;case`archived`:return`default`;default:return`default`}},q={author:T(`acss-l5ko2r`,[`.acss-l5ko2r{color:var(--ant-color-text-description);}`],`
      color: var(--ant-color-text-description);
    `),desc:T(`acss-9ncgb7`,[`.acss-9ncgb7{flex:1;margin:0!important;color:var(--ant-color-text-secondary);}`],`
      flex: 1;
      margin: 0 !important;
      color: var(--ant-color-text-secondary);
    `),footer:T(`acss-osyecd`,[`.acss-osyecd{margin-block-start:16px;border-block-start:1px dashed var(--ant-color-border);background:var(--ant-color-bg-container);}`],`
      margin-block-start: 16px;
      border-block-start: 1px dashed var(--ant-color-border);
      background: var(--ant-color-bg-container);
    `),moreButton:T(`acss-hc431c`,[`.acss-hc431c{position:absolute;z-index:10;inset-block-start:12px;inset-inline-end:12px;opacity:0;transition:opacity 0.2s;}`],`
      position: absolute;
      z-index: 10;
      inset-block-start: 12px;
      inset-inline-end: 12px;

      opacity: 0;

      transition: opacity 0.2s;
    `),secondaryDesc:T(`acss-1xcok0i`,[`.acss-1xcok0i{font-size:12px;color:var(--ant-color-text-description);}`],`
      font-size: 12px;
      color: var(--ant-color-text-description);
    `),statTag:T(`acss-1acgyt9`,[`.acss-1acgyt9{border-radius:4px;font-family:var(--ant-font-family-code);font-size:11px;color:var(--ant-color-text-secondary);background:var(--ant-color-fill-tertiary);}`],`
      border-radius: 4px;

      font-family: var(--ant-font-family-code);
      font-size: 11px;
      color: var(--ant-color-text-secondary);

      background: var(--ant-color-fill-tertiary);
    `),title:T(`acss-1mw4x5s`,[`.acss-1mw4x5s{margin:0!important;font-size:16px!important;font-weight:500!important;}`,`.acss-1mw4x5s:hover{color:var(--ant-color-link);}`],`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: var(--ant-color-link);
      }
    `),wrapper:T(`acss-1lt8lrz`,[`.acss-1lt8lrz:hover .more-button{opacity:1;}`],`
      &:hover .more-button {
        opacity: 1;
      }
    `)},Me=(0,G.memo)(({avatar:e,backgroundColor:t,title:r,description:i,createdAt:a,category:s,tokenUsage:c,forkCount:d,status:f,identifier:p,isValidated:g})=>{let{t:v}=n([`discover`,`setting`]),b=L(),{isOwner:S,onStatusChange:C}=U(),{allowed:w}=de(`create_content`),{allowed:T}=de(`edit_own_content`),E=pe(),[,D]=(0,G.useState)(!1),O=le(e=>e.createAgent),j=ye(e=>e.refreshAgentList),M=xe.stringifyUrl({query:{source:`new`},url:A(`/community/agent`,p)},{skipNull:!0}),fe=g===!1,N=(0,G.useCallback)(()=>{window.open(A(`/community/agent`,p),`_blank`)},[p]),P=(0,G.useCallback)(async()=>{if(!(!T||!w)){D(!0);try{let e=await ue.getAgentByMarketIdentifier(p);if(e)b(A(`/agent`,e,`profile`));else{let e=await ge.getAssistantDetail({identifier:p,source:`new`});if(!e){u.error(v(`setting:myAgents.errors.fetchFailed`));return}let t=await O({config:{...e.config,avatar:e.avatar,backgroundColor:e.backgroundColor,description:e.description,editorData:e.editorData,marketIdentifier:p,tags:e.tags,title:e.title},...E?{visibility:`private`}:{}});await j(),t.agentId&&b(A(`/agent`,t.agentId,`profile`))}}catch(e){console.error(`[UserAgentCard] handleEdit error:`,e),u.error(v(`setting:myAgents.errors.editFailed`))}finally{D(!1)}}},[w,T,p,b,O,j,v]),F=(0,G.useCallback)(e=>{T&&C?.(p,e)},[T,p,C]),he=S?[{icon:(0,K.jsx)(l,{icon:x}),key:`viewDetail`,label:v(`setting:myAgents.actions.viewDetail`),onClick:N},{disabled:!T||!w,icon:(0,K.jsx)(l,{icon:ae}),key:`edit`,label:v(`setting:myAgents.actions.edit`),onClick:P},{type:`divider`},{danger:!0,disabled:!T,icon:(0,K.jsx)(l,{icon:se}),key:`deprecate`,label:v(`setting:myAgents.actions.deprecate`),onClick:()=>F(`deprecate`)}]:[];return(0,K.jsxs)(ee,{clickable:!0,className:q.wrapper,height:`100%`,variant:`outlined`,width:`100%`,style:{cursor:`pointer`,overflow:`hidden`,position:`relative`},onClick:()=>b(M),children:[S&&!fe&&(0,K.jsx)(`div`,{onClick:ne,children:(0,K.jsx)(me,{items:he,children:(0,K.jsx)(`div`,{className:ce(`more-button`,q.moreButton),children:(0,K.jsx)(l,{icon:re,size:16,style:{cursor:`pointer`}})})})}),(0,K.jsx)(o,{horizontal:!0,align:`flex-start`,gap:16,justify:`space-between`,padding:16,width:`100%`,children:(0,K.jsxs)(o,{horizontal:!0,gap:12,style:{overflow:`hidden`},children:[(0,K.jsx)(_,{avatar:e,background:t||`transparent`,shape:`square`,size:40,style:{flex:`none`}}),(0,K.jsx)(o,{flex:1,gap:2,style:{overflow:`hidden`},children:(0,K.jsxs)(o,{horizontal:!0,align:`center`,gap:8,children:[(0,K.jsx)(B,{style:{color:`inherit`,flex:1,overflow:`hidden`},to:M,onClick:e=>e.stopPropagation(),children:(0,K.jsx)(m,{ellipsis:!0,as:`h3`,className:q.title,style:{flex:1},children:r})}),g===!1?(0,K.jsx)(I,{color:`orange`,style:{flexShrink:0,margin:0},children:v(`assistant.underReview`,{defaultValue:`Under Review`})}):S&&f&&(0,K.jsx)(I,{color:je(f),style:{flexShrink:0,margin:0},children:v(`setting:myAgents.status.${f}`)})]})})]})}),(0,K.jsxs)(o,{flex:1,gap:12,paddingInline:16,children:[(0,K.jsx)(m,{as:`p`,className:q.desc,ellipsis:{rows:3},children:i}),(0,K.jsx)(te,{children:(0,K.jsxs)(o,{horizontal:!0,align:`center`,gap:4,children:[(0,K.jsx)(h,{placement:`top`,styles:{root:{pointerEvents:`none`}},title:v(`assistants.tokenUsage`),children:(0,K.jsx)(I,{className:q.statTag,icon:(0,K.jsx)(l,{icon:y}),children:k(c)})}),!!(d&&d>0)&&(0,K.jsx)(h,{placement:`top`,styles:{root:{pointerEvents:`none`}},title:v(`fork.forksCount`,{count:d}),children:(0,K.jsx)(I,{className:q.statTag,icon:(0,K.jsx)(l,{icon:oe}),children:k(d)})})]})})]}),(0,K.jsx)(o,{horizontal:!0,align:`center`,className:q.footer,justify:`space-between`,padding:16,children:(0,K.jsxs)(o,{horizontal:!0,align:`center`,className:q.secondaryDesc,justify:`space-between`,children:[(0,K.jsxs)(o,{horizontal:!0,align:`center`,gap:4,children:[(0,K.jsx)(l,{icon:ie,size:14}),(0,K.jsx)(we,{className:q.secondaryDesc,date:a})]}),s&&v(`category.assistant.${s}`)]})})]})})})),J,Y,Pe,X,Fe,Ie=e((()=>{w(),c(),P(),g(),d(),be(),F(),s(),p(),_e(),f(),M(),S(),Se(),J=t(i()),r(),N(),Ce(),R(),z(),j(),W(),Y=t(a()),Pe=e=>{switch(e){case`published`:return`green`;case`unpublished`:return`orange`;case`deprecated`:return`red`;case`archived`:return`default`;default:return`default`}},X={desc:T(`acss-9ncgb7`,[`.acss-9ncgb7{flex:1;margin:0!important;color:var(--ant-color-text-secondary);}`],`
      flex: 1;
      margin: 0 !important;
      color: var(--ant-color-text-secondary);
    `),footer:T(`acss-osyecd`,[`.acss-osyecd{margin-block-start:16px;border-block-start:1px dashed var(--ant-color-border);background:var(--ant-color-bg-container);}`],`
      margin-block-start: 16px;
      border-block-start: 1px dashed var(--ant-color-border);
      background: var(--ant-color-bg-container);
    `),moreButton:T(`acss-hc431c`,[`.acss-hc431c{position:absolute;z-index:10;inset-block-start:12px;inset-inline-end:12px;opacity:0;transition:opacity 0.2s;}`],`
      position: absolute;
      z-index: 10;
      inset-block-start: 12px;
      inset-inline-end: 12px;

      opacity: 0;

      transition: opacity 0.2s;
    `),secondaryDesc:T(`acss-1xcok0i`,[`.acss-1xcok0i{font-size:12px;color:var(--ant-color-text-description);}`],`
      font-size: 12px;
      color: var(--ant-color-text-description);
    `),statTag:T(`acss-1acgyt9`,[`.acss-1acgyt9{border-radius:4px;font-family:var(--ant-font-family-code);font-size:11px;color:var(--ant-color-text-secondary);background:var(--ant-color-fill-tertiary);}`],`
      border-radius: 4px;

      font-family: var(--ant-font-family-code);
      font-size: 11px;
      color: var(--ant-color-text-secondary);

      background: var(--ant-color-fill-tertiary);
    `),title:T(`acss-1mw4x5s`,[`.acss-1mw4x5s{margin:0!important;font-size:16px!important;font-weight:500!important;}`,`.acss-1mw4x5s:hover{color:var(--ant-color-link);}`],`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: var(--ant-color-link);
      }
    `),wrapper:T(`acss-1lt8lrz`,[`.acss-1lt8lrz:hover .more-button{opacity:1;}`],`
      &:hover .more-button {
        opacity: 1;
      }
    `)},Fe=(0,J.memo)(({avatar:e,title:t,description:r,createdAt:i,category:a,forkCount:s,installCount:c,identifier:u,memberCount:d,status:f,isValidated:p})=>{let{t:g}=n([`discover`,`setting`]),y=L(),{isOwner:x,onStatusChange:S}=U(),C=xe.stringifyUrl({query:{source:`new`},url:A(`/community/group_agent`,u)},{skipNull:!0}),w=p===!1,T=(0,J.useCallback)(()=>{y(C)},[C,y]),E=(0,J.useCallback)(()=>{y(A(`/group`,u,`profile`))},[u,y]),D=(0,J.useCallback)(e=>{S?.(u,e,`group`)},[u,S]),O=x?[{icon:(0,Y.jsx)(l,{icon:ae}),key:`edit`,label:g(`setting:myAgents.actions.edit`),onClick:E},{type:`divider`},{danger:!0,icon:(0,Y.jsx)(l,{icon:se}),key:`deprecate`,label:g(`setting:myAgents.actions.deprecate`),onClick:()=>D(`deprecate`)}]:[];return(0,Y.jsxs)(ee,{clickable:!0,className:X.wrapper,height:`100%`,variant:`outlined`,width:`100%`,style:{cursor:`pointer`,overflow:`hidden`,position:`relative`},onClick:T,children:[x&&!w&&(0,Y.jsx)(`div`,{onClick:ne,children:(0,Y.jsx)(me,{items:O,children:(0,Y.jsx)(`div`,{className:ce(`more-button`,X.moreButton),children:(0,Y.jsx)(l,{icon:re,size:16,style:{cursor:`pointer`}})})})}),(0,Y.jsx)(o,{horizontal:!0,align:`flex-start`,gap:16,justify:`space-between`,padding:16,width:`100%`,children:(0,Y.jsxs)(o,{horizontal:!0,gap:12,style:{overflow:`hidden`},children:[(0,Y.jsx)(_,{avatar:e,shape:`square`,size:40,style:{flex:`none`}}),(0,Y.jsx)(o,{flex:1,gap:2,style:{overflow:`hidden`},children:(0,Y.jsxs)(o,{horizontal:!0,align:`center`,gap:8,children:[(0,Y.jsx)(B,{style:{color:`inherit`,flex:1,overflow:`hidden`},to:C,onClick:ne,children:(0,Y.jsx)(m,{ellipsis:!0,as:`h3`,className:X.title,style:{flex:1},children:t})}),p===!1?(0,Y.jsx)(I,{color:`orange`,style:{flexShrink:0,margin:0},children:g(`groupAgents.underReview`,{defaultValue:`Under Review`})}):x&&f&&(0,Y.jsx)(I,{color:Pe(f),style:{flexShrink:0,margin:0},children:g(`setting:myAgents.status.${f}`)})]})})]})}),(0,Y.jsxs)(o,{flex:1,gap:12,paddingInline:16,children:[(0,Y.jsx)(m,{as:`p`,className:X.desc,ellipsis:{rows:3},children:r}),(0,Y.jsx)(te,{children:(0,Y.jsxs)(o,{horizontal:!0,align:`center`,gap:4,children:[d!==void 0&&d>0&&(0,Y.jsx)(h,{placement:`top`,styles:{root:{pointerEvents:`none`}},title:g(`groupAgents.memberCount`,{defaultValue:`Members`}),children:(0,Y.jsx)(I,{className:X.statTag,icon:(0,Y.jsx)(l,{icon:v}),children:k(d)})}),!!(s&&s>0)&&(0,Y.jsx)(h,{placement:`top`,styles:{root:{pointerEvents:`none`}},title:g(`fork.forksCount`,{count:s}),children:(0,Y.jsx)(I,{className:X.statTag,icon:(0,Y.jsx)(l,{icon:oe}),children:k(s)})}),c!==void 0&&c>0&&(0,Y.jsx)(h,{placement:`top`,styles:{root:{pointerEvents:`none`}},title:g(`groupAgents.downloads`,{defaultValue:`Downloads`}),children:(0,Y.jsx)(I,{className:X.statTag,icon:(0,Y.jsx)(l,{icon:b}),children:k(c)})})]})})]}),(0,Y.jsx)(o,{horizontal:!0,align:`center`,className:X.footer,justify:`space-between`,padding:16,children:(0,Y.jsxs)(o,{horizontal:!0,align:`center`,className:X.secondaryDesc,justify:`space-between`,children:[(0,Y.jsxs)(o,{horizontal:!0,align:`center`,gap:4,children:[(0,Y.jsx)(l,{icon:ie,size:14}),(0,Y.jsx)(we,{className:X.secondaryDesc,date:i})]}),a&&g(`category.groupAgent.${a}`,{defaultValue:a})]})})]})})})),Z,Q,$,Le,Re=e((()=>{w(),c(),g(),p(),f(),Z=t(i()),r(),N(),R(),z(),Q=t(a()),$={author:T(`acss-l5ko2r`,[`.acss-l5ko2r{color:var(--ant-color-text-description);}`],`
      color: var(--ant-color-text-description);
    `),desc:T(`acss-9ncgb7`,[`.acss-9ncgb7{flex:1;margin:0!important;color:var(--ant-color-text-secondary);}`],`
      flex: 1;
      margin: 0 !important;
      color: var(--ant-color-text-secondary);
    `),footer:T(`acss-osyecd`,[`.acss-osyecd{margin-block-start:16px;border-block-start:1px dashed var(--ant-color-border);background:var(--ant-color-bg-container);}`],`
      margin-block-start: 16px;
      border-block-start: 1px dashed var(--ant-color-border);
      background: var(--ant-color-bg-container);
    `),secondaryDesc:T(`acss-1xcok0i`,[`.acss-1xcok0i{font-size:12px;color:var(--ant-color-text-description);}`],`
      font-size: 12px;
      color: var(--ant-color-text-description);
    `),title:T(`acss-1mw4x5s`,[`.acss-1mw4x5s{margin:0!important;font-size:16px!important;font-weight:500!important;}`,`.acss-1mw4x5s:hover{color:var(--ant-color-link);}`],`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: var(--ant-color-link);
      }
    `)},Le=(0,Z.memo)(({title:e,avatar:t,author:r,description:i,identifier:a,category:s})=>{let{t:c}=n(`discover`),l=L(),u=A(`/community/plugin`,a);return(0,Q.jsxs)(ee,{clickable:!0,"data-testid":`user-plugin-item`,height:`100%`,variant:`outlined`,width:`100%`,style:{overflow:`hidden`,position:`relative`},onClick:(0,Z.useCallback)(()=>{l(u)},[u,l]),children:[(0,Q.jsx)(o,{horizontal:!0,align:`flex-start`,gap:16,justify:`space-between`,padding:16,width:`100%`,children:(0,Q.jsxs)(o,{horizontal:!0,gap:12,title:a,style:{overflow:`hidden`},children:[(0,Q.jsx)(_,{avatar:t||e,size:40,style:{flex:`none`}}),(0,Q.jsxs)(o,{flex:1,gap:6,style:{overflow:`hidden`},children:[(0,Q.jsx)(o,{horizontal:!0,align:`center`,flex:1,gap:8,style:{overflow:`hidden`},children:(0,Q.jsx)(B,{style:{color:`inherit`,overflow:`hidden`},to:u,children:(0,Q.jsx)(m,{ellipsis:!0,as:`h2`,className:$.title,children:e})})}),(0,Q.jsx)(o,{horizontal:!0,align:`center`,className:$.author,gap:8,children:r&&(0,Q.jsx)(`div`,{children:r})})]})]})}),(0,Q.jsx)(o,{flex:1,gap:12,paddingInline:16,children:(0,Q.jsx)(m,{as:`p`,className:$.desc,ellipsis:{rows:3},children:i})}),(0,Q.jsx)(o,{horizontal:!0,align:`center`,className:$.footer,justify:`space-between`,padding:16,children:(0,Q.jsx)(o,{horizontal:!0,align:`center`,className:$.secondaryDesc,gap:8,children:s&&c(`plugins.categories.${s}.name`)})})]})})}));export{Me as a,W as c,Ee as d,De as f,Ie as i,U as l,Re as n,Ne as o,Te as p,Fe as r,Ae as s,Le as t,Oe as u};