import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{Xn as o,Zn as s,lt as c}from"../vendor/vendor-ui-core-BmtybT1r.js";import{A as l,mc as u,t as d,wc as f}from"../vendor/vendor-icons-vienkZi5.js";import{FD as p,ID as m,Kf as h,L as g,P as _,hF as v,qf as y,uF as b,vS as x,yS as S}from"./index-w64_zsxD.js";import{n as C,t as w}from"./DropdownMenu-1ae8j9bI.js";import{t as T}from"./_virtual_lobe-ui-named__Tooltip-DNompU8a.js";import{n as E,t as D}from"./menuExtra-BAKkOn4t.js";var O,k,A=e((()=>{O=e=>e===`private`?`Private`:`Workspace`,k=e=>e===`private`?`createTask.visibility.private`:`createTask.visibility.workspace`})),j,M,N,P,F,I=e((()=>{p(),C(),s(),T(),b(),d(),j=t(i()),r(),x(),h(),_(),D(),A(),M=t(a()),N={trigger:m(`acss-57paxv`,[`.acss-57paxv{cursor:pointer;display:inline-flex;align-items:center;color:var(--ant-color-text-description);transition:color var(--ant-motion-duration-mid);}`,`.acss-57paxv:hover{color:var(--ant-color-text);}`],`
    cursor: pointer;

    display: inline-flex;
    align-items: center;

    color: var(--ant-color-text-description);

    transition: color var(--ant-motion-duration-mid);

    &:hover {
      color: var(--ant-color-text);
    }
  `),triggerDisabled:m(`acss-84wi8w`,[`.acss-84wi8w{cursor:not-allowed;opacity:0.5;}`,`.acss-84wi8w:hover{color:var(--ant-color-text-description);filter:none;}`],`
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
      color: var(--ant-color-text-description);
      filter: none;
    }
  `)},P=[`private`,`public`],F=(0,j.memo)(({children:e,disableDropdown:t,lockedReason:r,onChange:i,size:a=14,taskIdentifier:s,visibility:d})=>{let[p,m]=(0,j.useState)(!1),[h,_]=(0,j.useState)(!1),{t:b}=n(`chat`),x=S(),{allowed:C,reason:T}=y(`create_content`),D=g(e=>e.updateTaskVisibility),A=(0,j.useCallback)(async e=>{if(e!==d){if(i){i(e);return}if(s){m(!0);try{await D(s,e)}finally{m(!1)}}}},[i,s,D,d]),F=d===`private`?u:l,I=b(k(d),{defaultValue:O(d)}),L=(0,j.useMemo)(()=>P.map(e=>{let t=e===`private`?u:l;return{extra:E(e===d),icon:(0,M.jsx)(o,{color:v.colorTextSecondary,icon:t,size:16}),key:e,label:b(k(e),{defaultValue:O(e)}),onClick:({domEvent:t})=>{t.stopPropagation(),A(e)}}}),[A,b,d]);if(!x&&!s)return null;let R=e||(p?(0,M.jsx)(o,{spin:!0,color:v.colorTextDescription,icon:f,size:a}):(0,M.jsx)(c,{title:I,children:(0,M.jsx)(`span`,{className:N.trigger,onClick:e=>e.stopPropagation(),children:(0,M.jsx)(F,{size:a})})}));return t?(0,M.jsx)(M.Fragment,{children:R}):r?(0,M.jsx)(c,{title:r,children:(0,M.jsx)(`span`,{className:N.triggerDisabled,style:{display:`inline-flex`},onClick:e=>e.stopPropagation(),children:R})}):C?(0,M.jsx)(w,{items:L,open:h,onOpenChange:_,children:R}):(0,M.jsx)(c,{title:T,children:(0,M.jsx)(`span`,{className:N.triggerDisabled,style:{display:`inline-flex`},onClick:e=>e.stopPropagation(),children:R})})}),F.displayName=`TaskVisibilityTag`}));export{A as a,k as i,I as n,O as r,F as t};