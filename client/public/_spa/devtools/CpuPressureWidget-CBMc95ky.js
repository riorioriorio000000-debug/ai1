import{n as e,o as t}from"../assets/rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{FD as i,ID as a,gF as o,uF as s}from"../assets/index-w64_zsxD.js";var c,l,u,d,f,p;e((()=>{i(),s(),c=t(n()),l=t(r()),u=()=>globalThis.PressureObserver,d={critical:a(`acss-zknb5i`,[`.acss-zknb5i{color:var(--ant-color-error);}`],`
    color: var(--ant-color-error);
  `),serious:a(`acss-rc3uuo`,[`.acss-rc3uuo{color:var(--ant-color-warning);}`],`
    color: var(--ant-color-warning);
  `),text:a(`acss-1am5kho`,[`.acss-1am5kho{font-family:var(--ant-font-family-code);font-size:11px;color:var(--ant-color-text-tertiary);}`],`
    font-family: var(--ant-font-family-code);
    font-size: 11px;
    color: var(--ant-color-text-tertiary);
  `)},f={critical:d.critical,serious:d.serious},p=(0,c.memo)(()=>{let[e,t]=(0,c.useState)(null);return(0,c.useEffect)(()=>{let e=u();if(!e)return;let n=!1,r=new e(e=>{let r=e.at(-1);r&&!n&&t(r.state)});return r.observe(`cpu`,{sampleInterval:2e3}).catch(()=>{}),()=>{n=!0,r.disconnect()}},[]),e?(0,l.jsxs)(`span`,{className:o(d.text,f[e]),title:`Compute Pressure (CPU)`,children:[`CPU `,e]}):null}),p.displayName=`DevDockCpuPressureWidget`}))();export{p as default};