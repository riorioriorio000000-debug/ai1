import{n as e,o as t}from"../assets/rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{Kt as i,qt as a}from"../vendor/vendor-ui-core-BmtybT1r.js";import{FD as o,ID as s,gF as c,uF as l}from"../assets/index-w64_zsxD.js";import{n as u,t as d}from"./panelStyles-BcnhslTN.js";import{n as f,r as p}from"./devtools-Bcody1YT.js";var m,h,g,_,v,y;e((()=>{o(),a(),l(),m=t(n()),u(),p(),h=t(r()),g={device:s(`acss-381c7a`,[`.acss-381c7a{display:grid;grid-template-columns:96px 1fr;flex-shrink:0;gap:4px 8px;padding-block:10px;padding-inline:12px;border-block-end:1px solid var(--ant-color-border-secondary);font-family:var(--ant-font-family-code);font-size:11px;color:var(--ant-color-text-secondary);}`],`
    display: grid;
    grid-template-columns: 96px 1fr;
    flex-shrink: 0;
    gap: 4px 8px;

    padding-block: 10px;
    padding-inline: 12px;
    border-block-end: 1px solid var(--ant-color-border-secondary);

    font-family: var(--ant-font-family-code);
    font-size: 11px;
    color: var(--ant-color-text-secondary);
  `),empty:s(`acss-1ugx7j2`,[`.acss-1ugx7j2{padding:24px;font-size:12px;color:var(--ant-color-text-tertiary);text-align:center;}`],`
    padding: 24px;
    font-size: 12px;
    color: var(--ant-color-text-tertiary);
    text-align: center;
  `),error:s(`acss-zknb5i`,[`.acss-zknb5i{color:var(--ant-color-error);}`],`
    color: var(--ant-color-error);
  `),key:s(`acss-185s3ho`,[`.acss-185s3ho{color:var(--ant-color-text-quaternary);}`],`
    color: var(--ant-color-text-quaternary);
  `),legend:s(`acss-1flvnhj`,[`.acss-1flvnhj{flex-shrink:0;padding-block:8px 12px;padding-inline:12px;border-block-start:1px solid var(--ant-color-border-secondary);font-size:10px;line-height:1.6;color:var(--ant-color-text-quaternary);}`],`
    flex-shrink: 0;

    padding-block: 8px 12px;
    padding-inline: 12px;
    border-block-start: 1px solid var(--ant-color-border-secondary);

    font-size: 10px;
    line-height: 1.6;
    color: var(--ant-color-text-quaternary);
  `),muted:s(`acss-nt432w`,[`.acss-nt432w{color:var(--ant-color-text-tertiary);}`],`
    color: var(--ant-color-text-tertiary);
  `),ok:s(`acss-1agh9uj`,[`.acss-1agh9uj{color:var(--ant-color-success);}`],`
    color: var(--ant-color-success);
  `),rows:s(`acss-1sp75fk`,[`.acss-1sp75fk{overflow:auto;flex:1;min-height:0;}`],`
    overflow: auto;
    flex: 1;
    min-height: 0;
  `),row:s(`acss-m1swvs`,[`.acss-m1swvs{display:grid;grid-template-columns:1fr 200px;gap:8px;align-items:center;padding-block:5px;padding-inline:12px;border-block-end:1px solid var(--ant-color-border-secondary);font-family:var(--ant-font-family-code);font-size:11px;}`],`
    display: grid;
    grid-template-columns: 1fr 200px;
    gap: 8px;
    align-items: center;

    padding-block: 5px;
    padding-inline: 12px;
    border-block-end: 1px solid var(--ant-color-border-secondary);

    font-family: var(--ant-font-family-code);
    font-size: 11px;
  `),value:s(`acss-14t6o70`,[`.acss-14t6o70{overflow-wrap:anywhere;}`],`
    overflow-wrap: anywhere;
  `),warn:s(`acss-rc3uuo`,[`.acss-rc3uuo{color:var(--ant-color-warning);}`],`
    color: var(--ant-color-warning);
  `)},_=e=>e.startsWith(`enabled`)?g.ok:e.includes(`software`)?g.warn:e.endsWith(`_ok`)?g.muted:g.error,v=[[`renderer`,`renderer`],[`vendor`,`vendor`],[`gl version`,`version`],[`display`,`displayType`],[`skia`,`skiaBackend`],[`machine`,`machineModel`]],y=(0,m.memo)(()=>{let[e,t]=(0,m.useState)(null),[n,r]=(0,m.useState)(!1);if((0,m.useEffect)(()=>{let e=!1;return f.getGpuStatus().then(n=>{e||t(n)}).catch(()=>{e||r(!0)}),()=>{e=!0}},[]),n)return(0,h.jsx)(`div`,{className:d.root,children:(0,h.jsx)(`div`,{className:g.empty,children:`GPU status unavailable over ipc.`})});if(!e)return null;let a=Object.entries(e.featureStatus).sort(([e],[t])=>e.localeCompare(t));return(0,h.jsxs)(i,{className:d.root,children:[(0,h.jsx)(`div`,{className:g.device,children:v.map(([t,n])=>(0,h.jsxs)(m.Fragment,{children:[(0,h.jsx)(`span`,{className:g.key,children:t}),(0,h.jsx)(`span`,{className:c(g.value,!e[n]&&g.muted),children:e[n]??`—`})]},n))}),(0,h.jsx)(`div`,{className:g.rows,children:a.map(([e,t])=>(0,h.jsxs)(`div`,{className:g.row,children:[(0,h.jsx)(`span`,{className:g.muted,children:e}),(0,h.jsx)(`span`,{className:_(t),children:t})]},e))}),(0,h.jsx)(`div`,{className:g.legend,children:"`enabled_*` runs on the GPU, `*_software` fell back to the CPU renderer, `*_off_ok` is switched off by design, and anything else is a hard disable worth investigating on chrome://gpu. Read once when the panel opens — reopen it to re-sample."})]})}),y.displayName=`DevGpuStatusPanel`}))();export{y as default};