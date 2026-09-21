import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{Kt as o,Xn as s,Zn as c,qt as l}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Ma as u,ga as d,gp as f,mc as p,t as m}from"../vendor/vendor-icons-vienkZi5.js";import{FD as h,ID as g}from"./index-w64_zsxD.js";import{n as _,t as v}from"./Select-C0UJO2yB.js";var y,b,x,S,C,w=e((()=>{h(),l(),c(),_(),y=t(i()),b=t(a()),x={option:g(`acss-17gfic1`,[`.acss-17gfic1{display:flex;flex:1;gap:8px;align-items:flex-start;min-width:0;}`],`
    display: flex;
    flex: 1;
    gap: 8px;
    align-items: flex-start;

    min-width: 0;
  `),optionDesc:g(`acss-uiax1u`,[`.acss-uiax1u{font-size:12px;line-height:16px;color:var(--ant-color-text-description);text-wrap:pretty;}`],`
    font-size: 12px;
    line-height: 16px;
    color: var(--ant-color-text-description);
    text-wrap: pretty;
  `),optionIcon:g(`acss-1hkw1ug`,[`.acss-1hkw1ug{display:flex;flex:none;align-items:center;justify-content:center;height:20px;color:var(--ant-color-text-secondary);}`],`
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;

    height: 20px;

    color: var(--ant-color-text-secondary);
  `),optionLabel:g(`acss-1iosu39`,[`.acss-1iosu39{font-size:14px;line-height:20px;color:var(--ant-color-text);}`],`
    font-size: 14px;
    line-height: 20px;
    color: var(--ant-color-text);
  `),popup:g(`acss-1f7jf58`,[`.acss-1f7jf58{max-width:calc(100vw - 24px);}`],`
    max-width: calc(100vw - 24px);
  `),trigger:g(`acss-nt3ec7`,[`.acss-nt3ec7{display:flex;flex:1;gap:8px;align-items:center;min-width:0;}`],`
    display: flex;
    flex: 1;
    gap: 8px;
    align-items: center;

    min-width: 0;
  `),triggerLabel:g(`acss-r7ccm5`,[`.acss-r7ccm5{overflow:hidden;text-align:start;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;
    text-align: start;
    text-overflow: ellipsis;
    white-space: nowrap;
  `)},S=({disabled:e,loading:t,onChange:n,options:r,value:i})=>{let a=(0,y.useMemo)(()=>r.map(e=>({disabled:e.disabled,label:(0,b.jsxs)(`span`,{className:x.option,children:[(0,b.jsx)(`span`,{"aria-hidden":!0,className:x.optionIcon,children:(0,b.jsx)(s,{icon:e.icon,size:16})}),(0,b.jsxs)(o,{flex:1,gap:2,style:{minWidth:0},children:[(0,b.jsx)(`span`,{className:x.optionLabel,children:e.label}),e.desc?(0,b.jsx)(`span`,{className:x.optionDesc,children:e.desc}):null]})]}),title:e.label,value:e.value})),[r]),c=(0,y.useCallback)(({value:e})=>{let t=r.find(t=>t.value===e);return t?(0,b.jsxs)(`span`,{className:x.trigger,children:[(0,b.jsx)(`span`,{"aria-hidden":!0,className:x.optionIcon,children:(0,b.jsx)(s,{icon:t.icon,size:16})}),(0,b.jsx)(`span`,{className:x.triggerLabel,children:t.label})]}):null},[r]);return(0,b.jsx)(v,{classNames:{popup:x.popup},disabled:e,labelRender:c,loading:t,optionRender:e=>e.label,options:a,popupMatchSelectWidth:!0,style:{width:`100%`},value:i,onChange:e=>{typeof e!=`string`||e===i||n(e)}})},C=(0,y.memo)(S)})),T,E,D=e((()=>{m(),T=t(i()),r(),E=e=>{let{accessLevel:t,isPrivate:r,resourceType:i=`agent`}=e,{t:a}=n(`setting`);return(0,T.useMemo)(()=>{if(i===`knowledgeBase`)return[{desc:a(`permission.generalAccess.kbAccessibleDesc`),icon:f,label:a(r?`permission.page.kbAccessibleWhenShared`:`permission.generalAccess.kbAccessible`),value:`edit`},{desc:a(`permission.generalAccess.kbNoAccessDesc`),icon:p,label:a(r?`permission.page.kbNoAccessWhenShared`:`permission.generalAccess.kbNoAccess`),value:`use`}];let e=[{desc:a(i===`document`?`permission.generalAccess.editableDocumentDesc`:`permission.generalAccess.editableDesc`),icon:u,label:a(r?`permission.page.editableWhenShared`:`permission.generalAccess.editable`),value:`edit`}];return i===`document`?e.push({desc:a(`permission.generalAccess.viewableDocumentDesc`),icon:f,label:a(r?`permission.page.viewableWhenShared`:`permission.generalAccess.viewable`),value:`view`}):e.push({desc:a(`permission.generalAccess.usableDesc`),icon:d,label:a(r?`permission.page.usableWhenShared`:`permission.generalAccess.usable`),value:`use`}),t===`view`&&i!==`document`&&e.push({desc:a(`permission.generalAccess.viewableDesc`),icon:f,label:a(`permission.generalAccess.viewable`),value:`view`}),e},[t,r,i,a])}}));export{w as i,E as n,C as r,D as t};