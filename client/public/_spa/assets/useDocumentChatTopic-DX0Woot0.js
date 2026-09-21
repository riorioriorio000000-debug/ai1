import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{C as i,E as a,T as o}from"../vendor/vendor-react-B9HSWrpN.js";import{B as s,Kt as c,Xn as l,Zn as u,qt as d,z as f}from"../vendor/vendor-ui-core-BmtybT1r.js";import{cg as p,ng as m,t as h}from"../vendor/vendor-icons-vienkZi5.js";import{Cl as ee,FD as g,Fr as _,ID as v,Mr as y,Or as b,Sl as x,_C as S,aS as te,fF as C,gF as ne,jr as w,pF as T,sS as E,tS as D,uF as O}from"./index-w64_zsxD.js";import{Nr as k,Pr as A,a as re,n as j}from"./chat-D3ilvURJ.js";import{i as M,p as N,r as P}from"./store-DwGYYuCr.js";import{kt as ie}from"./Messages-DmeZ4Iq1.js";import{f as F,n as ae,t as I}from"./Conversation-CBWduYtr.js";import{a as L,c as oe,l as se,n as ce,o as R,s as le,t as z,u as ue}from"./AgentHome-XFPGjV3M.js";import{h as de,m as fe,v as pe,y as me}from"./useWorkspaceCommentMentionOption-FjNgCu3j.js";import{n as he,t as ge}from"./useOperationState-pMLlu3fl.js";var _e,ve,ye,be=e((()=>{O(),_e=`0.3s`,ve=`cubic-bezier(0.32, 0.72, 0, 1)`,ye=T(({css:e,cssVar:t})=>({root:e`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: ${t.colorBgContainer};
  `,overlayRadius:e`
    border-radius: 12px 12px 0 0;
  `,inlineRadius:e`
    border-radius: 12px;
  `,elevated:e`
    box-shadow: ${t.boxShadowSecondary}, var(--lobe-ring);
  `,embedded:e`
    border: 1px solid ${t.colorBorderSecondary};
    box-shadow: none;
  `,overlay:e`
    position: absolute;
    z-index: 10;
    inset-block-end: 0;
    inset-inline: 0;
  `,inline:e`
    position: relative;
    z-index: 1;
    flex-shrink: 0;
  `,transition:e`
    transition:
      height ${_e} ${ve},
      margin-block-start ${_e} ${ve};
  `,hidden:e`
    visibility: hidden;
  `,header:e`
    cursor: grab;
    user-select: none;

    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    align-items: center;

    padding-block: 8px 4px;
    padding-inline: 16px;
  `,headerDragging:e`
    cursor: grabbing;
  `,handle:e`
    width: 32px;
    height: 4px;
    margin-block-end: 8px;
    border-radius: 2px;

    background: ${t.colorBorderSecondary};
  `,headerContent:e`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    min-height: 24px;
  `,headerTitle:e`
    flex: 1;
    min-width: 0;
  `,headerActions:e`
    display: flex;
    flex-shrink: 0;
    gap: 4px;
    align-items: center;
  `,content:e`
    overflow: auto;
    flex: 1;
    min-height: 0;
  `}))}));function xe({title:e,headerActions:t,isDragging:n,handleProps:r}){let i=ye;return(0,B.jsxs)(`div`,{className:ne(i.header,n&&i.headerDragging),...r,children:[(0,B.jsx)(`div`,{className:i.handle}),(0,B.jsxs)(`div`,{className:i.headerContent,children:[e&&(0,B.jsx)(`div`,{className:i.headerTitle,children:e}),t&&(0,B.jsx)(`div`,{className:i.headerActions,"data-no-drag":``,children:t})]})]})}var B,Se=e((()=>{be(),B=t(o(),1),O()}));function V(e,t,n){return Math.min(Math.max(e,t),n)}function Ce(e){return e<=0?0:8*Math.log1p(e/8)}function H(e,t){return e===0?0:e>0&&e<=1?e*t:e}var we=e((()=>{}));function Te({onDragChange:e,onDragEnd:t,enabled:n}){let[r,i]=(0,U.useState)(!1),a=(0,U.useRef)(0),o=(0,U.useRef)(0),s=(0,U.useRef)(!1),c=(0,U.useRef)(e),l=(0,U.useRef)(t);return c.current=e,l.current=t,(0,U.useEffect)(()=>{if(!s.current)return;let e=e=>{e.preventDefault();let t=a.current-e.clientY;c.current(t)},t=e=>{s.current=!1,i(!1);let t=a.current-e.clientY,n=Date.now()-o.current,r=n>0?Math.abs(t)/n:0;l.current(t,r)};return document.addEventListener(`mousemove`,e),document.addEventListener(`mouseup`,t),()=>{document.removeEventListener(`mousemove`,e),document.removeEventListener(`mouseup`,t)}},[r]),{isDragging:r,handleProps:{onMouseDown:(0,U.useCallback)(e=>{n&&e.button===0&&(e.target.closest?.(`[data-no-drag]`)||(e.preventDefault(),a.current=e.clientY,o.current=Date.now(),s.current=!0,i(!0)))},[n])}}}var U,Ee=e((()=>{U=t(a(),1)}));function De({closeThreshold:e,snapPoints:t,containerHeight:n,minHeightPx:r,maxHeightPx:i}){let a=(0,Oe.useMemo)(()=>{if(!n)return[];let e=t.map(e=>V(H(e,n),r,i)).sort((e,t)=>e-t);return[...new Set(e)]},[t,n,r,i]);function o(e){return a.length===0?V(e,r,i):a.reduce((t,n)=>Math.abs(n-e)<Math.abs(t-e)?n:t)}function s(e){let t=o(e);return a.indexOf(t)}function c({currentHeight:t,activeIndex:n,draggedDistance:s,velocity:c,dismissible:l}){let u=n===0,d=n===a.length-1,f=s>0,p=a.at(-1)??i,m=a[0]??r,h=a[Math.min(n+1,a.length-1)]??p,ee=a[Math.max(n-1,0)]??m,g=a[n]??t;return c>ke&&Math.abs(s)<g*Ae?f?d?{type:`snap`,height:p}:{type:`snap`,height:h}:u?l?{type:`dismiss`}:{type:`snap`,height:m}:{type:`snap`,height:ee}:l&&u&&!f&&t<m*e?{type:`dismiss`}:{type:`snap`,height:o(t)}}return{snapPointHeights:a,findClosestSnapPoint:o,findActiveIndex:s,getSnapRelease:c}}var Oe,ke,Ae,je=e((()=>{we(),Oe=t(a(),1),ke=.4,Ae=.4}));function Me({open:e,onOpenChange:t,defaultOpen:n=!1,snapPoints:r,activeSnapPoint:i,onSnapPointChange:a,minHeight:o=200,maxHeight:s=.8,restingHeight:c,mode:l=`overlay`,variant:u=`elevated`,width:d=`100%`,title:f,headerActions:p,dismissible:m=!0,closeThreshold:h=.25,children:ee,className:g}){let _=ye,v=e!==void 0,[y,b]=(0,W.useState)(n),x=v?e:y,S=(0,W.useCallback)(e=>{v||b(e),t?.(e)},[v,t]),te=(0,W.useRef)(null),C=(0,W.useRef)(null),[w,T]=(0,W.useState)(0);(0,W.useEffect)(()=>{let e=C.current?.parentElement;if(!e)return;te.current=e;let t=new ResizeObserver(e=>{for(let t of e)T(t.contentRect.height)});return t.observe(e),T(e.getBoundingClientRect().height),()=>t.disconnect()},[]);let E=(0,W.useMemo)(()=>H(o,w),[o,w]),D=(0,W.useMemo)(()=>H(s,w),[s,w]),O=(0,W.useMemo)(()=>c===void 0?E:V(H(c,w),E,D),[c,w,E,D]),k=!!r&&r.length>0,{snapPointHeights:A,findActiveIndex:re,getSnapRelease:j}=De({closeThreshold:h,containerHeight:w,containerRef:te,maxHeightPx:D,minHeightPx:E,snapPoints:r??[]}),M=(0,W.useMemo)(()=>w?k&&i!==void 0?V(H(i,w),E,D):k&&A.length>0?A[0]:O:0,[w,k,i,A,E,D,O]),[N,P]=(0,W.useState)(x?M:0),[ie,F]=(0,W.useState)(!1),[ae,I]=(0,W.useState)(!1),L=(0,W.useRef)(0),oe=(0,W.useRef)(x);(0,W.useEffect)(()=>{let e=oe.current;if(oe.current=x,x&&!e){I(!1),F(!0),P(M);let e=setTimeout(()=>F(!1),K);return()=>clearTimeout(e)}if(!x&&e){I(!0),F(!0),P(0);let e=setTimeout(()=>{F(!1),I(!1)},K);return()=>clearTimeout(e)}},[x]),(0,W.useEffect)(()=>{x&&!R&&P(M)},[M]);let se=(0,W.useCallback)(e=>{let t=L.current+e;if(k){let e=A.at(-1)??D,n=A[0]??E;if(t>e)P(e+Ce(t-e));else if(t<n){let e=n-t;P(Math.max(0,n-Ce(e)))}else P(t)}else P(V(t,0,D))},[k,A,D,E]),ce=(0,W.useCallback)((e,t)=>{F(!0);let n=L.current+e;if(k){let i=j({activeIndex:re(L.current),currentHeight:n,dismissible:m,draggedDistance:e,velocity:t});if(i.type===`dismiss`){I(!0),P(0);let e=setTimeout(()=>{S(!1),F(!1),I(!1)},K);return()=>clearTimeout(e)}P(i.height);let o=r?.find(e=>H(e,w)===i.height||V(H(e,w),E,D)===i.height);o!==void 0&&a?.(o)}else{if(m&&n<E*h){I(!0),P(0);let e=setTimeout(()=>{S(!1),F(!1),I(!1)},K);return()=>clearTimeout(e)}P(V(n,E,D))}setTimeout(()=>F(!1),K)},[k,re,j,m,r,w,E,D,h,S,a]),{isDragging:R,handleProps:le}=Te({enabled:x??!1,onDragChange:se,onDragEnd:ce});(0,W.useEffect)(()=>{R&&(L.current=N)},[R]);let z=x||ae||N>0,ue=!R&&ie,de=l===`inline`&&z?Math.max(0,N-O):0;return(0,G.jsxs)(`div`,{"data-floating-sheet":``,"data-state":x?`open`:`closed`,ref:C,className:ne(_.root,u===`embedded`?_.embedded:_.elevated,l===`overlay`?_.overlay:_.inline,l===`overlay`?_.overlayRadius:_.inlineRadius,ue&&_.transition,!z&&_.hidden,g),style:{height:z?N:0,marginTop:de?-de:void 0,width:d},children:[(0,G.jsx)(xe,{handleProps:le,headerActions:p,isDragging:R,title:f}),(0,G.jsx)(`div`,{className:_.content,children:ee})]})}var W,G,K,Ne=e((()=>{be(),Se(),we(),Ee(),je(),W=t(a(),1),G=t(o(),1),O(),K=300})),Pe=e((()=>{Ne()})),q,Fe,Ie=e((()=>{d(),ce(),I(),q=t(o()),Fe=()=>(0,q.jsx)(c,{"data-testid":`floating-chat-panel-body`,flex:1,height:`100%`,style:{minHeight:0,overflow:`hidden`,position:`relative`},width:`100%`,children:(0,q.jsx)(F,{welcome:(0,q.jsx)(z,{})})})})),Le,Re,ze,Be=e((()=>{Le=t(a()),Re=new Set,ze=()=>{let e=(0,Le.useRef)(null);e.current||=Symbol(`FloatingChatPanel`),(0,Le.useLayoutEffect)(()=>{if(Re.size>0)throw Error(`[FloatingChatPanel] Only one instance allowed per page. Multiple instances would conflict over global chatStore.mainInputEditor. Ensure the previous instance is unmounted before mounting a new one.`);let t=e.current;return Re.add(t),()=>{Re.delete(t)}},[])}})),Ve,He,Ue,We,Ge=e((()=>{g(),u(),h(),Ve=t(a()),r(),He=t(o()),Ue={bar:v(`acss-uxlcb2`,[`.acss-uxlcb2{pointer-events:auto;position:absolute;inset-block-end:100%;inset-inline:0;transform:translateY(4px);display:flex;align-items:center;justify-content:center;height:28px;padding-block-end:4px;opacity:0;background:transparent;transition:opacity 160ms ease-out,transform 160ms ease-out;}`],`
    pointer-events: auto;

    position: absolute;
    inset-block-end: 100%;
    inset-inline: 0;
    transform: translateY(4px);

    display: flex;
    align-items: center;
    justify-content: center;

    height: 28px;
    padding-block-end: 4px;

    opacity: 0;
    background: transparent;

    transition:
      opacity 160ms ease-out,
      transform 160ms ease-out;
  `),visible:v(`acss-16nwjvt`,[`.acss-16nwjvt{transform:translateY(0);opacity:1;}`],`
    transform: translateY(0);
    opacity: 1;
  `),trigger:v(`acss-1uchjtj`,[`.acss-1uchjtj{cursor:pointer;display:inline-flex;gap:6px;align-items:center;height:24px;padding-inline:10px;border:1px solid var(--ant-color-border-secondary);border-radius:12px;font-size:12px;line-height:1;color:var(--ant-color-text-secondary);background:var(--ant-color-bg-elevated);box-shadow:var(--ant-box-shadow-tertiary);transition:color 160ms,border-color 160ms,background 160ms;}`,`.acss-1uchjtj:hover{border-color:var(--ant-color-border);color:var(--ant-color-text);background:var(--ant-color-bg-container);}`],`
    cursor: pointer;

    display: inline-flex;
    gap: 6px;
    align-items: center;

    height: 24px;
    padding-inline: 10px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: 12px;

    font-size: 12px;
    line-height: 1;
    color: var(--ant-color-text-secondary);

    background: var(--ant-color-bg-elevated);
    box-shadow: var(--ant-box-shadow-tertiary);

    transition:
      color 160ms,
      border-color 160ms,
      background 160ms;

    &:hover {
      border-color: var(--ant-color-border);
      color: var(--ant-color-text);
      background: var(--ant-color-bg-container);
    }
  `),hidden:v(`acss-1111ehm`,[`.acss-1111ehm{pointer-events:none;}`],`
    pointer-events: none;
  `)},We=(0,Ve.memo)(({bottomOffset:e=0,visible:t,onExpand:r})=>{let{t:i}=n(`chat`),a=Ue;return(0,He.jsx)(`div`,{"aria-hidden":!t,className:`${a.bar} ${t?a.visible:a.hidden}`,"data-testid":`floating-chat-panel-hover-bar`,style:e>0?{insetBlockEnd:`calc(100% + ${e}px)`}:void 0,children:(0,He.jsxs)(`button`,{className:a.trigger,"data-testid":`floating-chat-panel-expand-button`,tabIndex:t?0:-1,type:`button`,onClick:r,children:[(0,He.jsx)(l,{icon:m,size:12}),i(`floatingChatPanel.expand`,{defaultValue:`Expand`})]})})}),We.displayName=`FloatingChatPanelHoverExpandBar`})),J,Ke,Y,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt=e((()=>{g(),O(),J=t(a()),Ke=t(i()),I(),P(),Ge(),Y=t(o()),qe={row:v(`acss-ahbwq3`,[`.acss-ahbwq3{position:relative;flex-shrink:0;}`],`
    position: relative;
    flex-shrink: 0;
  `),surface:v(`acss-139o4hq`,[`.acss-139o4hq{view-transition-name:floating-chat-panel-input;}`],`
    view-transition-name: floating-chat-panel-input;
  `)},Je=C`
  ::view-transition-old(floating-chat-panel-input),
  ::view-transition-new(floating-chat-panel-input) {
    animation-duration: 240ms;
    animation-timing-function: cubic-bezier(0.32, 0.72, 0, 1);
  }
`,Ye=typeof document<`u`&&typeof document.startViewTransition==`function`,Xe=e=>{if(!Ye){e();return}let t=document.documentElement,n=t.style.viewTransitionName;t.style.viewTransitionName=`none`;let r=document.startViewTransition(()=>{(0,Ke.flushSync)(e)}),i=()=>{t.style.viewTransitionName=n};r.finished.then(i,i)},Ze=[],Qe=[`typo`],$e=[`contextWindow`],et=(0,J.memo)(({isCollapsed:e,onExpand:t,showExpandBar:n=!0})=>{let r=qe,[i,a]=(0,J.useState)(e),[o,s]=(0,J.useState)(!1),c=(0,J.useRef)(!1),l=M(N.chatInputOverlayHeight);(0,J.useEffect)(()=>{i!==e&&Xe(()=>a(e))},[e,i]);let u=(0,J.useCallback)(()=>{c.current||(c.current=!0,Xe(()=>s(!0)))},[]),d=(0,J.useCallback)(e=>{let t=e.relatedTarget;t&&e.currentTarget.contains(t)||c.current&&(c.current=!1,Xe(()=>s(!1)))},[]),f=i&&!o;return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(Je,{}),(0,Y.jsxs)(`div`,{className:r.row,"data-collapsed":e,"data-testid":`floating-chat-panel-input-row`,onBlur:d,onFocus:u,children:[n&&(0,Y.jsx)(We,{bottomOffset:l,visible:e&&o,onExpand:t}),(0,Y.jsx)(`div`,{className:r.surface,children:(0,Y.jsx)(ae,{allowExpand:!1,compact:f,leftActions:f?Ze:Qe,rightActions:f?Ze:$e,showControlBar:!1})})]})]})}),et.displayName=`FloatingChatPanelInputRow`})),X,Z,nt,Q,rt,$,it,at=e((()=>{g(),s(),Pe(),h(),X=t(a()),r(),I(),se(),le(),de(),me(),ge(),L(),b(),y(),j(),k(),Ie(),Be(),tt(),Z=t(o()),nt=[320,800],Q=nt[0],rt=nt.at(-1),$={panel:v(`acss-4mu77b`,[`.acss-4mu77b{display:flex;flex-direction:column;flex-shrink:0;align-self:stretch;width:100%;border-block-start:1px solid var(--ant-color-border-secondary);background:var(--ant-color-bg-container);transition:border-block-start-color 240ms cubic-bezier(0.32, 0.72, 0, 1),background 240ms cubic-bezier(0.32, 0.72, 0, 1);}`,`.acss-4mu77b[data-collapsed='true']{border-block-start-color:transparent;background:transparent;}`],`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    align-self: stretch;

    width: 100%;
    border-block-start: 1px solid var(--ant-color-border-secondary);

    background: var(--ant-color-bg-container);

    transition:
      border-block-start-color 240ms cubic-bezier(0.32, 0.72, 0, 1),
      background 240ms cubic-bezier(0.32, 0.72, 0, 1);

    &[data-collapsed='true'] {
      border-block-start-color: transparent;
      background: transparent;
    }
  `),panelEmbedded:v(`acss-1g609f1`,[`.acss-1g609f1{flex:1;min-height:0;border-block-start:none;}`],`
    flex: 1;
    min-height: 0;
    border-block-start: none;
  `),sheetSeamless:v(`acss-12c9sw4`,[`.acss-12c9sw4{border:none;border-radius:0;box-shadow:none;}`],`
    border: none;
    border-radius: 0;
    box-shadow: none;
  `),titleSpacer:v(`acss-x5lawr`,[`.acss-x5lawr{flex:1;}`],`
    flex: 1;
  `)},it=(0,X.memo)(({agentId:e,topicId:t,documentId:r,agentDocumentId:i,actionsBar:a,hooks:o,defaultOpen:s=!1,mode:c=`overlay`,width:l=`100%`,title:u,headerActions:d})=>{ze();let{t:m}=n(`chat`),h=c===`embedded`,[ee,g]=(0,X.useState)(t),v=h?ee:t,y=(0,X.useMemo)(()=>({agentId:e,...i?{agentDocumentId:i}:{},...r?{documentId:r}:{},...h?{isolatedTopic:!0}:{},scope:`main`,threadId:null,topicId:v}),[v,i,e,r,h]),b=(0,X.useMemo)(()=>A(y),[y]),x=re(e=>e.dbMessagesMap[b]),S=re(e=>e.replaceMessages),te=(0,X.useCallback)((e,t,n)=>{S(e,{context:t,source:n?.source})},[S]),C=he(y),ne=R(),T=a??ne,[E,D]=(0,X.useState)(!s),[O,k]=(0,X.useState)(Q),j=(0,X.useCallback)(()=>{k(Q),D(!1)},[]),M=(0,X.useCallback)(()=>{D(!0),k(Q)},[]),N=(0,X.useCallback)(e=>{e||M()},[M]),P=ue({agentChatConfig:w(_.getChatConfigById(e)),conversationKey:b,topicId:t}),F=(0,X.useMemo)(()=>oe(o,{onBeforeSendMessage:async()=>{j()},onTopicCreated:e=>{h&&g(e)}},P),[P,j,o,h]),ae=(0,Z.jsx)(f,{"data-testid":`floating-chat-panel-collapse-button`,icon:p,size:`small`,title:m(`floatingChatPanel.collapse`,{defaultValue:`Collapse`}),onClick:M}),I={activeSnapPoint:O,className:$.sheetSeamless,closeThreshold:.5,defaultOpen:!1,dismissible:!0,headerActions:(0,Z.jsxs)(Z.Fragment,{children:[d,ae]}),maxHeight:rt,minHeight:Q,mode:`inline`,onOpenChange:N,onSnapPointChange:k,open:!E,restingHeight:Q,snapPoints:[...nt],title:u??(0,Z.jsx)(`span`,{className:$.titleSpacer}),variant:`elevated`,width:l};return(0,Z.jsx)(ie,{actionsBar:T,context:y,hasInitMessages:!!x,hooks:F,messages:x,operationState:C,onMessagesChange:te,children:(0,Z.jsx)(`div`,{className:`${$.panel} ${h?$.panelEmbedded:``}`,"data-collapsed":h?!1:E,"data-mode":c,"data-testid":`floating-chat-panel`,children:h?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(pe,{defaultExpand:!0,children:(0,Z.jsx)(fe,{topicId:v,onTopicChange:g})}),(0,Z.jsx)(Fe,{}),(0,Z.jsx)(et,{isCollapsed:!1,showExpandBar:!1,onExpand:j})]}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Me,{...I,children:(0,Z.jsx)(Fe,{})}),(0,Z.jsx)(et,{isCollapsed:E,onExpand:j})]})})})}),it.displayName=`FloatingChatPanel`})),ot,st,ct,lt,ut=e((()=>{ot=t(S()),st=t(a()),te(),ee(),ct=(0,ot.default)(`lobe-chat:useDocumentChatTopic`),lt=e=>{let{agentId:t,documentId:n}=e,r=!!t&&!!n,{data:i,error:a,isLoading:o}=E(r?D.documentChatTopic(t,n):null,()=>x.getOrCreateChatTopic({agentId:t,documentId:n}));return(0,st.useEffect)(()=>{if(!r){ct(`skipped — agentId=%o documentId=%o`,t,n);return}if(a){console.error(`[useDocumentChatTopic] getOrCreateChatTopic failed`,{agentId:t,documentId:n,error:a});return}i?.topicId&&ct(`resolved topicId=%s for (%s, %s)`,i.topicId,t,n)},[r,t,n,i?.topicId,a]),{error:a,isLoading:o,topicId:i?.topicId}}}));export{at as i,lt as n,it as r,ut as t};