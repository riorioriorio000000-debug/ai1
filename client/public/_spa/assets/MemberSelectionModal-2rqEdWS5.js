import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{B as o,Kt as s,Mt as c,Nt as l,X as u,Z as d,at as f,i as p,it as m,l as h,lt as g,qt as _,r as v,u as y,z as ee}from"../vendor/vendor-ui-core-BmtybT1r.js";import{H as b,r as x}from"../vendor/vendor-antd-BWSxhuJE.js";import{c as te,t as S}from"../vendor/vendor-icons-vienkZi5.js";import{mn as C}from"./app-const-BpgKVRXh.js";import{FD as w,ID as T,Jf as ne,Qv as E,Yf as D,a_ as O,c_ as re,dg as k,gF as A,uF as j}from"./index-w64_zsxD.js";import{t as M}from"./_virtual_lobe-ui-named__Tooltip-DNompU8a.js";import{l as N,t as P}from"./es-Zenbyje4.js";import{n as F,t as I}from"./SearchBar-D4sP5Y6j.js";import{n as L,t as R}from"./List-xvRotVRI.js";import{n as z,t as B}from"./ModelSelect-BqNzeHDy.js";import{n as ie,t as V}from"./useEnabledChatModels-DINh3Of7.js";import{i as H,t as U}from"./session-CYONfkj7.js";import{n as W,t as G}from"./AgentSelectionEmpty-DPb0-mzZ.js";var K,q,J,Y,X,Z=e((()=>{w(),k(),_(),L(),F(),M(),o(),p(),l(),y(),d(),f(),P(),x(),j(),S(),K=t(i()),r(),D(),C(),W(),z(),V(),U(),O(),q=t(a()),J=(0,K.memo)(({agent:e,isSelected:t,onToggle:n,styles:r,cx:i,t:a})=>{let o=(0,K.useRef)(null),c=N(o),l=e.config?.id,u=E(e.meta,a(`defaultSession`,{ns:`common`})),d=e.meta?.description||``,f=e.meta?.avatar||`/avatars/agent-default.png`,p=e.meta?.backgroundColor;return l?(0,q.jsx)(b.Item,{className:i(r.listItem),ref:o,onClick:()=>n(l),children:(0,q.jsxs)(s,{horizontal:!0,align:`center`,gap:12,width:`100%`,children:[(0,q.jsx)(h,{checked:t,onChange:()=>{n(l)},onClick:e=>{e.stopPropagation()}}),(0,q.jsx)(s,{style:{flexShrink:0},children:(0,q.jsx)(v,{animation:c,avatar:f,background:p,size:40})}),(0,q.jsxs)(s,{flex:1,gap:2,style:{minWidth:0},children:[(0,q.jsx)(m,{className:r.title,weight:500,children:u}),d&&(0,q.jsx)(m,{ellipsis:!0,className:r.description,children:d})]})]})}):null}),Y={container:T(`acss-19sqtcj`,[`.acss-19sqtcj{display:flex;flex-direction:row;height:500px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius);}`],`
    display: flex;
    flex-direction: row;

    height: 500px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius);
  `),description:T(`acss-1g40vrx`,[`.acss-1g40vrx{font-size:11px;line-height:1.2;color:var(--ant-color-text-secondary);}`],`
    font-size: 11px;
    line-height: 1.2;
    color: var(--ant-color-text-secondary);
  `),hostCard:T(`acss-4plxs4`,[`.acss-4plxs4{margin-block-end:var(--ant-padding-sm);padding:var(--ant-padding);border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);background:var(--ant-color-fill-tertiary);}`],`
    margin-block-end: var(--ant-padding-sm);
    padding: var(--ant-padding);
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);

    background: var(--ant-color-fill-tertiary);
  `),leftColumn:T(`acss-crormy`,[`.acss-crormy{-webkit-user-select:none;user-select:none;overflow-y:auto;flex:1;padding-block:var(--ant-padding-sm) 0;padding-inline:var(--ant-padding-sm);border-inline-end:1px solid var(--ant-color-border-secondary);}`],`
    user-select: none;

    overflow-y: auto;
    flex: 1;

    padding-block: var(--ant-padding-sm) 0;
    padding-inline: var(--ant-padding-sm);
    border-inline-end: 1px solid var(--ant-color-border-secondary);
  `),listItem:T(`acss-16fhezg`,[`.acss-16fhezg{cursor:pointer;position:relative;margin-block:2px;padding:var(--ant-padding-sm)!important;border-radius:var(--ant-border-radius);transition:all 0.2s ease;}`,`.acss-16fhezg:hover{background:var(--ant-color-fill-tertiary);}`],`
    cursor: pointer;

    position: relative;

    margin-block: 2px;
    padding: var(--ant-padding-sm) !important;
    border-radius: var(--ant-border-radius);

    transition: all 0.2s ease;

    &:hover {
      background: var(--ant-color-fill-tertiary);
    }
  `),modelSelectDisabled:T(`acss-1111ehm`,[`.acss-1111ehm{pointer-events:none;}`],`
    pointer-events: none;
  `),rightColumn:T(`acss-2ufzgq`,[`.acss-2ufzgq{overflow-y:auto;flex:1;padding:var(--ant-padding-sm);}`],`
    overflow-y: auto;
    flex: 1;
    padding: var(--ant-padding-sm);
  `),selectedItem:T(`acss-17bpc6h`,[`.acss-17bpc6h{opacity:0.6;background:var(--ant-color-fill-quaternary);}`],`
    opacity: 0.6;
    background: var(--ant-color-fill-quaternary);
  `)},X=(0,K.memo)(({currentHostConfig:e,existingMembers:t=[],mode:r,onCancel:i,onConfirm:a,open:o,preSelectedAgents:l=[]})=>{let{t:d}=n([`chat`,`common`]),f=ie(),[p,h]=(0,K.useState)(l),[_,y]=(0,K.useState)(``),x=r===`add`&&e?.enableSupervisor===!0,[S,C]=(0,K.useState)(r===`add`),[w,T]=(0,K.useState)(()=>{if(r===`add`&&e)return{model:e.orchestratorModel,provider:e.orchestratorProvider};if(f.length>0&&f[0].children.length>0){let e=f[0];return{model:e.children[0].id,provider:e.id}}return{}}),D=H(e=>(e.sessions||[]).filter(e=>e.type===re.Agent&&!e.config?.virtual)),O=H(e=>e.activeId),k=e=>{h(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},j=(0,K.useCallback)(e=>{h(t=>t.filter(t=>t!==e))},[]),M=(0,K.useCallback)(e=>{y(e.target.value)},[]),N=(0,K.useCallback)(e=>{C(!e)},[]),P=(0,K.useCallback)(e=>{T(e)},[]),F=(0,K.useMemo)(()=>r===`create`?D:D.filter(e=>e.id!==O&&!t.includes(e.config?.id||``)),[D,O,r,t]),L=(0,K.useMemo)(()=>_.trim()?F.filter(e=>{let t=E(e.meta)??``,n=e.meta?.description||``,r=_.toLowerCase();return t.toLowerCase().includes(r)||n.toLowerCase().includes(r)}):F,[F,_]),z=(0,K.useMemo)(()=>p.map(e=>{let t=D.find(t=>t.config.id===e);if(!t)return null;let n=E(t.meta,d(`defaultSession`,{ns:`common`})),r=t.meta?.avatar||`/avatars/agent-default.png`,i=t.meta?.backgroundColor,a=t.meta?.description||``;return{actions:(0,q.jsx)(ee,{icon:te,size:`small`,style:{color:`#999`},onClick:()=>j(e)}),avatar:(0,q.jsx)(v,{avatar:r,background:i,shape:`circle`,size:40}),description:a,key:e,showAction:!0,title:n}}).filter(e=>e!==null),[p,D,d,j]),V=()=>{h(l),y(``),C(r===`add`),r===`add`&&e&&T({model:e.orchestratorModel,provider:e.orchestratorProvider})},[U,W]=(0,K.useState)(!1),X=(0,K.useMemo)(()=>{let e=w.model,t=w.provider;if(!(!e||!t))return{model:e,provider:t}},[w]),Z=async()=>{try{W(!0),await a(p),V()}catch(e){console.error(`Failed to confirm action:`,e)}finally{W(!1)}},Q=()=>{V(),i()},ae=d(r===`create`?`memberSelection.setInitialMembers`:`memberSelection.addMember`),oe=d(r===`create`?`memberSelection.createGroup`:`memberSelection.addMember`),se=!x,$=p.length+(se&&!S?1:0),ce=$<+(r===`create`)||U;return(0,q.jsx)(ne,{allowFullscreen:!0,open:o,title:ae,width:800,footer:(0,q.jsxs)(s,{horizontal:!0,gap:8,justify:`end`,children:[(0,q.jsx)(c,{onClick:Q,children:d(`cancel`,{ns:`common`})}),(0,q.jsxs)(c,{disabled:ce,loading:U,type:`primary`,onClick:Z,children:[oe,` (`,$,`)`]})]}),onCancel:Q,children:(0,q.jsxs)(s,{horizontal:!0,className:Y.container,children:[(0,q.jsxs)(s,{className:Y.leftColumn,flex:1,gap:12,children:[(0,q.jsx)(I,{allowClear:!0,placeholder:d(`memberSelection.searchAgents`),value:_,variant:`filled`,onChange:M}),(0,q.jsx)(s,{flex:1,style:{overflowY:`auto`},children:L.length===0?(0,q.jsx)(G,{search:!!_,variant:_?`empty`:`noAvailable`}):(0,q.jsx)(b,{dataSource:L,split:!1,renderItem:e=>{let t=e.config?.id;return t?(0,q.jsx)(J,{agent:e,cx:A,isSelected:p.includes(t),styles:Y,t:d,onToggle:k},t):null}})})]}),(0,q.jsx)(s,{className:Y.rightColumn,flex:1,children:(0,q.jsxs)(s,{gap:16,children:[!x&&(0,q.jsxs)(s,{horizontal:!0,align:`center`,className:Y.hostCard,gap:12,children:[(0,q.jsxs)(s,{flex:1,gap:2,children:[(0,q.jsx)(m,{style:{fontSize:14,fontWeight:500},type:S?`secondary`:void 0,children:d(`groupWizard.host.title`)}),(0,q.jsx)(m,{style:{color:`#999`,fontSize:12},type:S?`secondary`:void 0,children:d(`groupWizard.host.description`)})]}),(0,q.jsxs)(s,{horizontal:!0,align:`center`,gap:12,children:[(0,q.jsx)(`div`,{className:A(S&&Y.modelSelectDisabled),style:{opacity:S?.6:1},children:(0,q.jsx)(B,{requiredAbilities:[`functionCall`],value:X,onChange:P})}),(0,q.jsx)(g,{title:d(`groupWizard.host.tooltip`),children:(0,q.jsx)(u,{checked:!S,size:`small`,onChange:e=>N(e)})})]})]}),(0,q.jsx)(s,{flex:1,children:z.length===0?(0,q.jsx)(G,{variant:`noSelected`}):(0,q.jsx)(R,{items:z})})]})})]})})})}));e((()=>{Z()}))();export{X as MemberSelectionModal};