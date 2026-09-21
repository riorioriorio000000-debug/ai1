import{n as e,o as t}from"../assets/rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{FD as i,ID as a,gF as o,uF as s}from"../assets/index-w64_zsxD.js";import{n as c,t as l}from"./appProcessMetrics-B9pSXFRN.js";var u,d,f,p;e((()=>{i(),s(),u=t(n()),l(),d=t(r()),f={high:a(`acss-zknb5i`,[`.acss-zknb5i{color:var(--ant-color-error);}`],`
    color: var(--ant-color-error);
  `),mid:a(`acss-rc3uuo`,[`.acss-rc3uuo{color:var(--ant-color-warning);}`],`
    color: var(--ant-color-warning);
  `),text:a(`acss-1yab8b6`,[`.acss-1yab8b6{font-family:var(--ant-font-family-code);font-size:11px;font-feature-settings:'tnum';color:var(--ant-color-text-tertiary);}`],`
    font-family: var(--ant-font-family-code);
    font-size: 11px;
    font-feature-settings: 'tnum';
    color: var(--ant-color-text-tertiary);
  `)},p=(0,u.memo)(()=>{let e=c()?.gpu;return e?(0,d.jsxs)(`span`,{className:o(f.text,e.cpuPercent>=100?f.high:e.cpuPercent>=50?f.mid:void 0),title:`GPU process CPU usage and resident memory — Chromium exposes no GPU utilisation figure`,children:[`GPU `,e.cpuPercent.toFixed(1),`% · `,Math.round(e.memoryMB),`M`]}):null}),p.displayName=`DevDockGpuProcessWidget`}))();export{p as default};