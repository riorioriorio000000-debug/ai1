import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,V as r,j as i,z as a}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as o,T as s}from"../vendor/vendor-react-B9HSWrpN.js";import{Bt as c,Kt as l,Mt as u,Nt as d,Vt as f,Xn as p,Yn as m,Zn as h,at as g,h as _,it as v,qt as y,v as b}from"../vendor/vendor-ui-core-BmtybT1r.js";import{t as x,ug as ee}from"../vendor/vendor-icons-vienkZi5.js";import{c as te,jn as S}from"./app-const-BpgKVRXh.js";import{FD as C,ID as w,MA as T,Zf as E,gF as D,uF as O}from"./index-w64_zsxD.js";import{_t as ne,a as k,n as re,yt as ie}from"./chat-D3ilvURJ.js";import{n as ae,t as oe}from"./TextArea-D_Rfq5JU.js";import{o as se,t as A}from"./selectors-C-g1ZR70.js";import{t as j}from"./_virtual_lobe-ui-named_base-ui_useModalContext-CvZy-G5G.js";import{n as M,t as N}from"./SearchBar-D4sP5Y6j.js";import{n as P,t as F}from"./useWorkspaceAwareNavigate-BbajQ7ta.js";import{n as I,t as L}from"./Avatar-BqtcjDJA.js";import{n as R,t as z}from"./useFetchAgentList-BhSSn9uG.js";var B,V,H,U,W=e((()=>{C(),f(),h(),O(),x(),B=t(o()),V=t(s()),H={checked:w(`acss-1w8b7ph`,[`.acss-1w8b7ph{border-color:var(--ant-color-primary);color:var(--ant-color-bg-container);background:var(--ant-color-primary);}`],`
    border-color: var(--ant-color-primary);
    color: var(--ant-color-bg-container);
    background: var(--ant-color-primary);
  `),circle:w(`acss-1dit0k3`,[`.acss-1dit0k3{flex:none;inline-size:20px;block-size:20px;border:1.5px solid var(--ant-color-border);border-radius:50%;transition:background-color 0.15s var(--ant-motion-ease-in-out),border-color 0.15s var(--ant-motion-ease-in-out);}`],`
    flex: none;

    inline-size: 20px;
    block-size: 20px;
    border: 1.5px solid var(--ant-color-border);
    border-radius: 50%;

    transition:
      background-color 0.15s var(--ant-motion-ease-in-out),
      border-color 0.15s var(--ant-motion-ease-in-out);
  `)},U=(0,B.memo)(({checked:e,className:t})=>(0,V.jsx)(c,{className:D(H.circle,e&&H.checked,t),children:e&&(0,V.jsx)(p,{icon:ee,size:14})})),U.displayName=`SelectCircle`})),G,K,ce=e((()=>{te(),T(),G=t(o()),i(),F(),re(),K=({agentId:e,cancelSourceContinuation:t,topicId:r})=>{let{t:i}=n(`chat`),a=P(),o=k(e=>e.forwardTopic),s=k(e=>e.clearPortalStack);return(0,G.useCallback)((n,c)=>{if(n.length===0)return;let l=n[0];o({cancelSourceContinuation:t,header:i(`messageForward.topic.header`),note:c,onTopicCreated:(e,t)=>{e.id===l.id&&(s(),a(S(e.id,t)))},roleLabel:e=>i(e===`user`?`messageForward.role.user`:`messageForward.role.assistant`),sourceAgentId:e,targets:n,topicId:r}).then(e=>{e.succeeded.length>0&&m.success(n.length===1?i(`messageForward.success`,{title:l.title||``}):i(`messageForward.successMulti`,{count:e.succeeded.length})),e.failed.length>0&&m.error(i(e.sourceSchedulePaused?`messageForward.topic.sourceSchedulePaused`:`messageForward.failed`))}).catch(e=>{console.error(`[useForwardTopic] Forwarding failed:`,e),m.error(i(t?`messageForward.topic.handoffFailed`:`messageForward.topic.loadFailed`))})},[e,t,s,o,a,i,r])}})),q,J,Y,X,le=e((()=>{C(),y(),M(),ae(),d(),g(),j(),O(),q=t(o()),i(),I(),z(),ne(),A(),W(),ce(),J=t(s()),Y={body:w(`acss-1q2k9j7`,[`.acss-1q2k9j7{block-size:460px;}`],`
    block-size: 460px;
  `),context:w(`acss-1kzkt54`,[`.acss-1kzkt54{flex:1;padding:12px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);background:var(--ant-color-fill-quaternary);}`],`
    flex: 1;

    padding: 12px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);

    background: var(--ant-color-fill-quaternary);
  `),divider:w(`acss-17zozhp`,[`.acss-17zozhp{align-self:stretch;inline-size:1px;background:var(--ant-color-border-secondary);}`],`
    align-self: stretch;
    inline-size: 1px;
    background: var(--ant-color-border-secondary);
  `),list:w(`acss-1oxdakg`,[`.acss-1oxdakg{overflow-y:auto;flex:1;}`],`
    overflow-y: auto;
    flex: 1;
  `),row:w(`acss-s90k34`,[`.acss-s90k34{cursor:pointer;min-block-size:44px;padding-block:6px;padding-inline:8px;border-radius:var(--ant-border-radius-lg);}`,`.acss-s90k34:hover{background:var(--ant-color-fill-tertiary);}`],`
    cursor: pointer;

    min-block-size: 44px;
    padding-block: 6px;
    padding-inline: 8px;
    border-radius: var(--ant-border-radius-lg);

    &:hover {
      background: var(--ant-color-fill-tertiary);
    }
  `),selected:w(`acss-1gw7uqf`,[`.acss-1gw7uqf{background:var(--ant-color-fill-quaternary);}`],`
    background: var(--ant-color-fill-quaternary);
  `)},X=({cancelSourceContinuation:e,sourceAgentId:t,topicId:r,topicTitle:i})=>{let{t:a}=n(`chat`),{close:o}=b(),[s,c]=(0,q.useState)(``),[d,f]=(0,q.useState)(``),[p,m]=(0,q.useState)([]),h=ie(se.allAgents),g=K({agentId:t,cancelSourceContinuation:e,topicId:r});R();let _=(0,q.useMemo)(()=>{let e=s.trim().toLowerCase();return h.filter(e=>e.type===`agent`&&e.id!==t).filter(t=>!e||(t.title||``).toLowerCase().includes(e))},[h,s,t]);return(0,J.jsxs)(l,{horizontal:!0,className:Y.body,gap:16,children:[(0,J.jsxs)(l,{flex:1,gap:8,style:{minWidth:0},children:[(0,J.jsx)(N,{allowClear:!0,placeholder:a(`messageForward.modal.searchPlaceholder`),value:s,onChange:e=>c(e.target.value)}),(0,J.jsx)(l,{className:Y.list,gap:4,children:_.length===0?(0,J.jsx)(l,{align:`center`,justify:`center`,padding:24,children:(0,J.jsx)(v,{type:`secondary`,children:a(`messageForward.modal.empty`)})}):_.map(e=>{let t=p.includes(e.id);return(0,J.jsxs)(l,{horizontal:!0,align:`center`,className:D(Y.row,t&&Y.selected),gap:8,onClick:()=>m(n=>t?n.filter(t=>t!==e.id):[...n,e.id]),children:[(0,J.jsx)(L,{avatar:typeof e.avatar==`string`?e.avatar:void 0}),(0,J.jsx)(v,{ellipsis:!0,style:{flex:1},children:e.title||a(`untitledAgent`)}),(0,J.jsx)(U,{checked:t})]},e.id)})})]}),(0,J.jsx)(`div`,{className:Y.divider}),(0,J.jsxs)(l,{flex:1,gap:12,style:{minWidth:0},children:[(0,J.jsx)(v,{type:`secondary`,children:a(`messageForward.topic.context`)}),(0,J.jsxs)(l,{className:Y.context,gap:8,children:[(0,J.jsx)(v,{ellipsis:!0,strong:!0,children:i}),(0,J.jsx)(v,{type:`secondary`,children:a(`messageForward.topic.description`)})]}),(0,J.jsx)(oe,{autoSize:{maxRows:4,minRows:2},placeholder:a(`messageForward.modal.notePlaceholder`),resize:!1,value:d,onChange:e=>f(e.target.value)}),(0,J.jsxs)(l,{horizontal:!0,gap:8,justify:`flex-end`,children:[(0,J.jsx)(u,{onClick:o,children:a(`messageForward.bar.cancel`)}),(0,J.jsx)(u,{disabled:p.length===0,type:`primary`,onClick:()=>{let e=p.map(e=>h.find(t=>t.id===e)).filter(e=>!!e).map(e=>({id:e.id,title:e.title}));e.length!==0&&(g(e,d),o())},children:p.length>0?a(`messageForward.modal.sendCount`,{count:p.length}):a(`messageForward.bar.forward`)})]})]})]})}})),Z,Q,$=e((()=>{E(),a(),le(),Z=t(s()),Q=e=>_({content:(0,Z.jsx)(X,{...e}),footer:null,maskClosable:!0,styles:{content:{overflow:`hidden`,padding:16}},title:r(`messageForward.topic.modalTitle`,{ns:`chat`}),width:`min(90%, 760px)`})}));export{W as i,$ as n,U as r,Q as t};