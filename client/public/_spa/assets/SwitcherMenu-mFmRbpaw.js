import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{B as o,Ht as s,Kt as c,Ut as l,Xn as u,Zn as d,at as f,i as p,it as m,qt as h,r as g,z as _}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Xh as v,Xr as y,t as b,ug as x}from"../vendor/vendor-icons-vienkZi5.js";import{Ur as S,zr as C}from"./app-const-BpgKVRXh.js";import{FD as w,ID as T,hF as E,uF as D,vS as ee,yS as te}from"./index-w64_zsxD.js";import{i as ne,n as re,t as ie}from"./Popover-Cd3scH3I.js";import{n as ae,t as oe}from"./Avatar-CqOZ_Quz.js";import{n as se,t as ce}from"./Input-gdUxluEJ.js";import{t as le}from"./_virtual_lobe-ui-named__usePopoverContext-Nc5b_V_k.js";import{n as O}from"./List-CsE72OIW.js";import{t as k}from"./SkeletonList-CJifDLl0.js";import{n as A,t as j}from"./AsyncBoundary-K-esguw4.js";var M,N,P,F,I,ue=e((()=>{w(),l(),re(),o(),f(),b(),M=t(i()),ae(),S(),N=t(a()),P={trigger:T(`acss-ptevdy`,[`.acss-ptevdy[data-popup-open]{background:var(--ant-color-fill-tertiary);}`],`
    &[data-popup-open] {
      background: var(--ant-color-fill-tertiary);
    }
  `)},F=(0,M.memo)(({children:e,content:t,width:n=280})=>(0,N.jsx)(ie,{classNames:{trigger:P.trigger},content:t,nativeButton:!1,placement:`bottomLeft`,trigger:`click`,styles:{content:{maxHeight:`min(420px, 70vh)`,overflow:`hidden`,padding:0,paddingBlock:0,paddingInline:0,width:n}},children:e})),I=(0,M.memo)(({avatar:e,background:t,className:n,name:r,style:i,title:a,...o})=>(0,N.jsxs)(s,{clickable:!0,horizontal:!0,align:`center`,className:n,gap:8,padding:2,style:{minWidth:32,overflow:`hidden`,...i},variant:`borderless`,...o,children:[(0,N.jsx)(oe,{avatar:e,background:t,name:r,shape:`square`,size:28}),(0,N.jsx)(m,{ellipsis:!0,weight:500,children:a}),(0,N.jsx)(_,{icon:v,size:C,style:{width:24}})]})),F.displayName=`SidebarHeaderSelectPopover`,I.displayName=`SidebarHeaderSelectTrigger`})),L,R,z,B=e((()=>{L=(e,t,n=8)=>t?[t,...e.filter(e=>e!==t)].slice(0,n):e,R=(e,t,n)=>{let r=n?.excludeId,i=n?.limit??5,a=new Map(t.map(e=>[e.id,e])),o=[];for(let t of e){if(t===r)continue;let e=a.get(t);if(e&&(o.push(e),o.length>=i))break}return o},z=(e,t)=>{let n=t.trim().toLowerCase();return n?e.filter(e=>e.title.toLowerCase().includes(n)||e.subtitle?.toLowerCase().includes(n)):[...e]}})),V,H,U,W,de=e((()=>{w(),l(),d(),p(),f(),D(),b(),V=t(i()),H=t(a()),U={current:T(`acss-z6mn3z`,[`.acss-z6mn3z{background:var(--ant-color-fill-tertiary);}`],`
    background: var(--ant-color-fill-tertiary);
  `),row:T(`acss-1qh0rui`,[`.acss-1qh0rui{cursor:pointer;overflow:hidden;flex:none;padding-inline:8px;border-radius:var(--ant-border-radius);}`,`.acss-1qh0rui:hover{background:var(--ant-color-fill-tertiary);}`],`
    cursor: pointer;

    overflow: hidden;
    flex: none;

    padding-inline: 8px;
    border-radius: var(--ant-border-radius);

    &:hover {
      background: var(--ant-color-fill-tertiary);
    }
  `)},W=(0,V.memo)(({active:e,item:t,onSelect:n,privateLabel:r})=>(0,H.jsxs)(s,{clickable:!0,horizontal:!0,align:`center`,className:e?`${U.row} ${U.current}`:U.row,flex:`none`,gap:8,height:36,variant:`borderless`,onClick:()=>n(t.id),children:[(0,H.jsx)(g,{avatar:t.avatar,background:t.background,shape:`square`,size:28}),(0,H.jsxs)(m,{ellipsis:!0,color:e?E.colorText:E.colorTextSecondary,style:{flex:1},weight:e?500:void 0,children:[t.title,t.subtitle&&(0,H.jsx)(`span`,{style:{fontSize:12,marginInlineStart:6,opacity:.6},children:t.subtitle})]}),t.private&&r&&(0,H.jsx)(m,{color:E.colorTextTertiary,fontSize:12,children:r}),e&&(0,H.jsx)(u,{color:E.colorText,icon:x,size:14})]})),W.displayName=`SwitcherRow`})),G,K,q,J,Y,fe=e((()=>{G=t(i()),ee(),B(),K=`lobe-switcher-recent`,q=e=>{if(typeof window>`u`)return[];try{let t=window.localStorage.getItem(e);if(!t)return[];let n=JSON.parse(t);return Array.isArray(n)?n.filter(e=>typeof e==`string`&&e.length>0):[]}catch{return[]}},J=(e,t)=>{typeof window>`u`||window.localStorage.setItem(e,JSON.stringify(t))},Y=e=>{let t=`${K}:${te()??`personal`}:${e}`,[n,r]=(0,G.useState)(()=>q(t));return(0,G.useEffect)(()=>{r(q(t))},[t]),{ids:n,touch:(0,G.useCallback)(e=>{e&&r(n=>{let r=L(n,e);return J(t,r),r})},[t])}}})),X,Z,Q,$,pe=e((()=>{w(),h(),d(),se(),le(),f(),D(),b(),X=t(i()),r(),A(),k(),B(),de(),fe(),Z=t(a()),Q={list:T(`acss-1q9j1dy`,[`.acss-1q9j1dy{overflow-y:auto;overscroll-behavior:contain;flex:1 1 auto;min-height:0;max-height:min(360px, 50vh);margin-block-end:calc(var(--switcher-inset) * -1);margin-inline:calc(var(--switcher-inset) * -1);padding-block:4px var(--switcher-inset);padding-inline:var(--switcher-inset);}`],`
    overflow-y: auto;
    overscroll-behavior: contain;
    flex: 1 1 auto;

    min-height: 0;
    max-height: min(360px, 50vh);
    margin-block-end: calc(var(--switcher-inset) * -1);
    margin-inline: calc(var(--switcher-inset) * -1);
    padding-block: 4px var(--switcher-inset);
    padding-inline: var(--switcher-inset);
  `),root:T(`acss-10hc6zg`,[`.acss-10hc6zg{--switcher-inset:6px;overflow:hidden;max-height:min(420px, 70vh);padding:var(--switcher-inset);}`],`
    --switcher-inset: 6px;

    overflow: hidden;
    max-height: min(420px, 70vh);
    padding: var(--switcher-inset);
  `),search:T(`acss-1sn89vf`,[`.acss-1sn89vf{flex:none;margin-inline:calc(var(--switcher-inset) * -1);padding-block:2px 8px;padding-inline:14px;border-block-end:1px solid var(--ant-color-border-secondary);}`,`.acss-1sn89vf .ant-input-affix-wrapper,.acss-1sn89vf .ant-input{padding-inline:0;border:none!important;background:transparent!important;box-shadow:none!important;}`],`
    flex: none;

    margin-inline: calc(var(--switcher-inset) * -1);
    padding-block: 2px 8px;
    padding-inline: 14px;
    border-block-end: 1px solid var(--ant-color-border-secondary);

    .ant-input-affix-wrapper,
    .ant-input {
      padding-inline: 0;
      border: none !important;
      background: transparent !important;
      box-shadow: none !important;
    }
  `),section:T(`acss-5vpum`,[`.acss-5vpum{padding-block:6px 2px;padding-inline:8px;font-size:12px;font-weight:500;line-height:16px;color:var(--ant-color-text-tertiary);}`],`
    padding-block: 6px 2px;
    padding-inline: 8px;

    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    color: var(--ant-color-text-tertiary);
  `)},$=(0,X.memo)(({activeId:e,error:t,isLoading:r,items:i,kind:a,onRetry:o,onSelect:s,searchPlaceholder:l})=>{let{t:d}=n(`common`),{close:f}=ne(),{ids:p,touch:h}=Y(a),[g,_]=(0,X.useState)(``);(0,X.useEffect)(()=>{e&&h(e)},[e,h]);let v=g.trim().length>0,b=(0,X.useMemo)(()=>z(i,g),[i,g]),x=(0,X.useMemo)(()=>v?[]:R(p,i,{excludeId:e}),[e,p,i,v]),S=t=>{h(t),f(),t!==e&&s(t)},C=x.length>0;return(0,Z.jsxs)(c,{className:Q.root,children:[(0,Z.jsx)(`div`,{className:Q.search,children:(0,Z.jsx)(ce,{allowClear:!0,autoFocus:!0,placeholder:l,prefix:(0,Z.jsx)(u,{color:E.colorTextTertiary,icon:y,size:14}),size:`small`,value:g,variant:`borderless`,onChange:e=>_(e.target.value),onPressEnter:()=>{let e=b[0];e&&S(e.id)}})}),(0,Z.jsx)(j,{data:r?void 0:i,error:t,errorVariant:`inline`,isEmpty:v&&b.length===0,isLoading:r,loading:(0,Z.jsx)(O,{rows:4}),empty:(0,Z.jsx)(c,{align:`center`,padding:16,children:(0,Z.jsx)(m,{fontSize:13,type:`secondary`,children:d(`navPanel.searchResultEmpty`)})}),onRetry:o,children:(0,Z.jsx)(`div`,{className:Q.list,children:(0,Z.jsxs)(c,{children:[C&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(m,{as:`div`,className:Q.section,children:d(`navPanel.switcherRecent`,{defaultValue:`Recent`})}),x.map(e=>(0,Z.jsx)(W,{item:e,privateLabel:d(`navPanel.privateAgents`),onSelect:S},`recent-${e.id}`))]}),C&&(0,Z.jsx)(m,{as:`div`,className:Q.section,children:d(`navPanel.switcherAll`,{defaultValue:`All`})}),b.map(t=>(0,Z.jsx)(W,{active:t.id===e,item:t,privateLabel:d(`navPanel.privateAgents`),onSelect:S},t.id))]})})})]})}),$.displayName=`SwitcherMenu`}));export{ue as a,I as i,pe as n,F as r,$ as t};