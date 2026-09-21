import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r,r as i,s as a}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as o,T as s}from"../vendor/vendor-react-B9HSWrpN.js";import{Kt as c,at as l,i as u,it as d,l as f,qt as p,r as m,u as h}from"../vendor/vendor-ui-core-BmtybT1r.js";import{bt as g,r as ee}from"../vendor/vendor-antd-BWSxhuJE.js";import{c as te,t as ne}from"../vendor/vendor-icons-vienkZi5.js";import{mn as _}from"./app-const-BpgKVRXh.js";import{Al as re,Dn as ie,En as v,FD as y,ID as b,Jf as ae,Qv as x,Yf as S,dg as C,iC as w,kl as T,vx as E,wx as D}from"./index-w64_zsxD.js";import{_t as oe,yt as O}from"./chat-D3ilvURJ.js";import{o as k,t as se}from"./selectors-C-g1ZR70.js";import{l as ce,t as A}from"./es-Zenbyje4.js";import{n as le,t as j}from"./esm-WHRoVrks.js";import{n as ue,t as de}from"./SearchBar-D4sP5Y6j.js";import{n as fe,t as pe}from"./dist-D-fG8xep.js";import{n as M,t as N}from"./AgentSelectionEmpty-DPb0-mzZ.js";var P,F=e((()=>{j(),P=le((e,t)=>({clearSelection:()=>{e({selectedAgentIds:[]})},isSelected:e=>t().selectedAgentIds.includes(e),removeAgent:t=>{e(e=>({selectedAgentIds:e.selectedAgentIds.filter(e=>e!==t)}))},selectedAgentIds:[],setSelectedAgents:t=>{e({selectedAgentIds:t})},toggleAgent:t=>{e(e=>e.selectedAgentIds.includes(t)?{selectedAgentIds:e.selectedAgentIds.filter(e=>e!==t)}:{selectedAgentIds:[...e.selectedAgentIds,t]})}}))})),I,L,R,z,B=e((()=>{y(),C(),p(),u(),h(),l(),A(),ne(),I=t(o()),_(),F(),L=t(s()),R={item:b(`acss-1jnox5o`,[`.acss-1jnox5o{cursor:pointer;margin-block:1px;padding-block:6px;padding-inline:8px;border-radius:var(--ant-border-radius);transition:background 0.2s ease;}`,`.acss-1jnox5o:hover{background:var(--ant-color-fill-tertiary);}`],`
    cursor: pointer;

    margin-block: 1px;
    padding-block: 6px;
    padding-inline: 8px;
    border-radius: var(--ant-border-radius);

    transition: background 0.2s ease;

    &:hover {
      background: var(--ant-color-fill-tertiary);
    }
  `),removeButton:b(`acss-2xtej2`,[`.acss-2xtej2{cursor:pointer;display:flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:4px;color:var(--ant-color-text-tertiary);transition:all 0.2s ease;}`,`.acss-2xtej2:hover{color:var(--ant-color-text);background:var(--ant-color-fill-secondary);}`],`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;
    border-radius: 4px;

    color: var(--ant-color-text-tertiary);

    transition: all 0.2s ease;

    &:hover {
      color: var(--ant-color-text);
      background: var(--ant-color-fill-secondary);
    }
  `),title:b(`acss-1q9dkft`,[`.acss-1q9dkft{overflow:hidden;flex:1;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;
    flex: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
  `)},z=(0,I.memo)(({agent:e,defaultTitle:t,showCheckbox:n,showRemove:r})=>{let i=(0,I.useRef)(null),a=ce(i),o=P(t=>t.selectedAgentIds.includes(e.id)),s=P(e=>e.toggleAgent),l=P(e=>e.removeAgent),u=x(e,t),p=e.avatar||`/avatars/agent-default.png`,h=e.backgroundColor??void 0,g=()=>{s(e.id)};return(0,L.jsx)(`div`,{className:R.item,ref:i,style:{cursor:n?`pointer`:`default`},onClick:n?g:void 0,children:(0,L.jsxs)(c,{horizontal:!0,align:`center`,gap:8,width:`100%`,children:[n&&(0,L.jsx)(f,{checked:o,onChange:g,onClick:e=>{e.stopPropagation(),g()}}),(0,L.jsx)(m,{animation:a,avatar:p,background:h,shape:`circle`,size:28}),(0,L.jsx)(d,{ellipsis:!0,className:R.title,children:u}),r&&(0,L.jsx)(`div`,{className:R.removeButton,onClick:t=>{t.stopPropagation(),l(e.id)},children:(0,L.jsx)(te,{size:14})})]})})})})),V,H,U,W,G,me=e((()=>{y(),C(),p(),ue(),ie(),l(),V=t(w()),H=t(o()),r(),fe(),M(),oe(),se(),B(),U=t(s()),W={container:b(`acss-yr6i0d`,[`.acss-yr6i0d{-webkit-user-select:none;user-select:none;overflow:hidden;display:flex;flex:1;flex-direction:column;padding-block:var(--ant-padding-sm)px 0;padding-inline:var(--ant-padding-sm)px;}`],`
    user-select: none;

    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;

    padding-block: var(--ant-padding-sm)px 0;
    padding-inline: var(--ant-padding-sm)px;
  `),sectionHeader:b(`acss-kmqq5`,[`.acss-kmqq5{padding-block:6px 4px;padding-inline:8px;color:var(--ant-color-text-secondary);}`],`
    padding-block: 6px 4px;
    padding-inline: 8px;
    color: var(--ant-color-text-secondary);
  `)},G=(0,H.memo)(({agents:e,isLoading:t})=>{let{t:r}=n([`chat`,`common`]),[i,a]=(0,H.useState)(``),o=(0,H.useMemo)(()=>r(`defaultSession`,{ns:`common`}),[r]),s=O(k.privateAgentGroups,V.default),l=O(k.privatePinnedAgents,V.default),u=O(k.privateUngroupedAgents,V.default),f=(0,H.useMemo)(()=>{let e=new Set;for(let t of s)for(let n of t.items)e.add(n.id);for(let t of l)e.add(t.id);for(let t of u)e.add(t.id);return e},[s,l,u]),p=(0,H.useCallback)(e=>{a(e.target.value)},[]),m=(0,H.useMemo)(()=>{if(!i.trim())return e;let t=i.toLowerCase();return e.filter(e=>{let n=x(e)??``,r=e.description||``;return n.toLowerCase().includes(t)||r.toLowerCase().includes(t)})},[e,i]),h=(0,H.useMemo)(()=>{let e=[],t=[];for(let n of m)(f.has(n.id)?e:t).push(n);return e.length===0||t.length===0?m.map(e=>({agent:e,type:`agent`})):[{label:r(`mention.category.privateAgents`,{ns:`chat`}),type:`header`},...e.map(e=>({agent:e,type:`agent`})),{label:r(`mention.category.workspaceAgents`,{ns:`chat`}),type:`header`},...t.map(e=>({agent:e,type:`agent`}))]},[m,f,r]);return(0,U.jsxs)(c,{className:W.container,gap:12,children:[(0,U.jsx)(de,{allowClear:!0,placeholder:r(`memberSelection.searchAgents`),value:i,variant:`filled`,onChange:p}),(0,U.jsx)(c,{flex:1,style:{minHeight:0},children:t?(0,U.jsxs)(c,{gap:8,padding:8,children:[(0,U.jsx)(v.Text,{rows:1}),(0,U.jsx)(v.Text,{rows:1}),(0,U.jsx)(v.Text,{rows:1})]}):m.length===0?(0,U.jsx)(N,{search:!!i,variant:i?`empty`:`noAvailable`}):(0,U.jsx)(pe,{style:{flex:1},totalCount:h.length,itemContent:e=>{let t=h[e];return t.type===`header`?(0,U.jsx)(d,{className:W.sectionHeader,fontSize:12,type:`secondary`,children:t.label}):(0,U.jsx)(z,{showCheckbox:!0,agent:t.agent,defaultTitle:o},t.agent.id)}})})]})})})),K,q,J,Y,he=e((()=>{y(),p(),K=t(o()),r(),M(),B(),F(),q=t(s()),J={container:b(`acss-hk19v`,[`.acss-hk19v{overflow-y:auto;flex:1;padding:var(--ant-padding-sm)px;}`],`
    overflow-y: auto;
    flex: 1;
    padding: var(--ant-padding-sm)px;
  `),title:b(`acss-1iugmx6`,[`.acss-1iugmx6{font-size:12px;font-weight:500;color:var(--ant-color-text-secondary);}`],`
    font-size: 12px;
    font-weight: 500;
    color: var(--ant-color-text-secondary);
  `)},Y=(0,K.memo)(({agents:e})=>{let{t}=n([`chat`,`common`]),r=P(e=>e.selectedAgentIds),i=(0,K.useMemo)(()=>t(`defaultSession`,{ns:`common`}),[t]),a=(0,K.useMemo)(()=>r.map(t=>e.find(e=>e.id===t)).filter(e=>e!==void 0),[e,r]);return a.length===0?(0,q.jsx)(c,{className:J.container,flex:1,children:(0,q.jsx)(N,{variant:`noSelected`})}):(0,q.jsxs)(c,{className:J.container,gap:4,children:[(0,q.jsx)(`div`,{className:J.title,children:t(`memberSelection.selectedAgents`,{count:a.length})}),(0,q.jsx)(c,{children:a.map(e=>(0,q.jsx)(z,{showRemove:!0,agent:e,defaultTitle:i},e.id))})]})})})),X,Z,Q,$,ge=e((()=>{y(),p(),ee(),X=t(o()),r(),i(),S(),D(),re(),me(),he(),F(),Z=t(s()),Q={container:b(`acss-sciyr2`,[`.acss-sciyr2{display:flex;flex-direction:row;height:500px;padding:12px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius)px;}`],`
    display: flex;
    flex-direction: row;

    height: 500px;
    padding: 12px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius)px;
  `),rightColumn:b(`acss-1chgfo`,[`.acss-1chgfo{display:flex;flex:1;flex-direction:column;}`],`
    display: flex;
    flex: 1;
    flex-direction: column;
  `)},$=(0,X.memo)(({existingMembers:e=[],onCancel:t,onConfirm:r,open:i})=>{let{t:o}=n([`chat`,`common`]),s=P(e=>e.selectedAgentIds),l=P(e=>e.clearSelection),{data:u=[],isLoading:d}=a(i?E.queryAgents():null,()=>T.queryAgents()),f=(0,X.useMemo)(()=>u.filter(t=>!e.includes(t.id)),[u,e]);(0,X.useEffect)(()=>{i||l()},[i,l]);let[p,m]=(0,X.useState)(!1);return(0,Z.jsx)(ae,{allowFullscreen:!0,okButtonProps:{disabled:s.length===0||p,loading:p},okText:`${o(`memberSelection.addMember`)} (${s.length})`,open:i,title:o(`memberSelection.addMember`),width:800,onCancel:()=>{l(),t()},onOk:async()=>{try{m(!0),await r(s),l()}catch(e){console.error(`Failed to add members:`,e)}finally{m(!1)}},children:(0,Z.jsxs)(c,{horizontal:!0,className:Q.container,gap:8,children:[(0,Z.jsx)(G,{agents:f,isLoading:d}),(0,Z.jsx)(g,{orientation:`vertical`,style:{height:`100%`}}),(0,Z.jsx)(Y,{agents:u})]})})})}));export{ge as n,$ as t};