import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{Xn as i,Zn as a}from"../vendor/vendor-ui-core-BmtybT1r.js";import{ir as o,is as s,o_ as c,t as l,vl as u}from"../vendor/vendor-icons-vienkZi5.js";import{FD as d,ID as f}from"./index-w64_zsxD.js";import{n as p,t as m}from"./getDeviceIcon-BfoZAXnk.js";var h,g,_,v,y,b,x,S,C,w,T,E=e((()=>{d(),a(),l(),h=t(n()),p(),g=t(r()),_={dotOffline:f(`acss-19k63k6`,[`.acss-19k63k6{flex:none;width:6px;height:6px;border-radius:50%;background:var(--ant-color-text-quaternary);}`],`
    flex: none;

    width: 6px;
    height: 6px;
    border-radius: 50%;

    background: var(--ant-color-text-quaternary);
  `),dotOnline:f(`acss-ak27ev`,[`.acss-ak27ev{flex:none;width:6px;height:6px;border-radius:50%;background:var(--ant-color-success);box-shadow:0 0 0 2px var(--ant-color-success-bg);}`],`
    flex: none;

    width: 6px;
    height: 6px;
    border-radius: 50%;

    background: var(--ant-color-success);
    box-shadow: 0 0 0 2px var(--ant-color-success-bg);
  `),status:f(`acss-1i2kjq7`,[`.acss-1i2kjq7{display:inline-flex;gap:6px;align-items:center;}`],`
    display: inline-flex;
    gap: 6px;
    align-items: center;
  `)},v=[`auto`,`device`,`none`,`sandbox`],y=e=>!!e&&v.includes(e),b=(e,t)=>e===`device`&&t?`device:${t}`:`target:${e}`,x=e=>{if(e.startsWith(`device:`)){let t=e.slice(7);return t?{deviceId:t,target:`device`}:void 0}if(!e.startsWith(`target:`))return;let t=e.slice(7);return[`auto`,`local`,`none`,`sandbox`].includes(t)?{target:t}:void 0},S=({boundDeviceId:e,configuredTarget:t,devices:n,isHeterogeneous:r})=>{if(t===`device`){let t=n.find(t=>t.deviceId===e);return t?{deviceId:t.deviceId,target:`device`}:void 0}return y(t)?{target:t}:t===void 0&&!r?{target:`none`}:void 0},C=e=>({personal:(e??[]).filter(e=>e.scope===`personal`),privateWorkspace:(e??[]).filter(e=>e.scope===`workspace`&&e.visibility===`private`),publicWorkspace:(e??[]).filter(e=>e.scope===`workspace`&&e.visibility===`public`),workspace:(e??[]).filter(e=>e.scope===`workspace`&&e.visibility!==`private`)}),w=(0,h.memo)(({devicePlatform:e,size:t=14,target:n})=>{switch(n){case`auto`:return(0,g.jsx)(i,{icon:o,size:t});case`device`:return(0,g.jsx)(g.Fragment,{children:m(e,t)});case`local`:return(0,g.jsx)(i,{icon:u,size:t});case`none`:return(0,g.jsx)(i,{icon:s,size:t});case`sandbox`:return(0,g.jsx)(i,{icon:c,size:t})}}),w.displayName=`ExecutionTargetPicker.ExecutionTargetIcon`,T=(0,h.memo)(({offlineLabel:e,online:t,onlineLabel:n})=>(0,g.jsxs)(`span`,{className:_.status,children:[(0,g.jsx)(`span`,{"aria-hidden":!0,className:t?_.dotOnline:_.dotOffline}),(0,g.jsx)(`span`,{children:t?n:e})]})),T.displayName=`ExecutionTargetPicker.ExecutionTargetDeviceStatus`}));export{E as a,C as i,w as n,x as o,b as r,S as s,T as t};