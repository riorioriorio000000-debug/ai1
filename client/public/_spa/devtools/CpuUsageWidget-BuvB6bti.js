import{n as e,o as t}from"../assets/rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{FD as i,ID as a,gF as o,uF as s}from"../assets/index-w64_zsxD.js";import{n as c,t as l}from"./appProcessMetrics-B9pSXFRN.js";var u,d,f,p;e((()=>{i(),s(),u=t(n()),l(),d=t(r()),f={high:a(`acss-zknb5i`,[`.acss-zknb5i{color:var(--ant-color-error);}`],`
    color: var(--ant-color-error);
  `),mid:a(`acss-rc3uuo`,[`.acss-rc3uuo{color:var(--ant-color-warning);}`],`
    color: var(--ant-color-warning);
  `),text:a(`acss-1yab8b6`,[`.acss-1yab8b6{font-family:var(--ant-font-family-code);font-size:11px;font-feature-settings:'tnum';color:var(--ant-color-text-tertiary);}`],`
    font-family: var(--ant-font-family-code);
    font-size: 11px;
    font-feature-settings: 'tnum';
    color: var(--ant-color-text-tertiary);
  `)},p=(0,u.memo)(()=>{let e=c();if(!e)return null;let t=e.cpuPercent;return(0,d.jsxs)(`span`,{title:`App CPU usage (sum across processes, 100% = one core)`,className:o(f.text,t>=200?f.high:t>=100?f.mid:void 0),children:[`CPU `,t.toFixed(1),`%`]})}),p.displayName=`DevDockCpuUsageWidget`}))();export{p as default};