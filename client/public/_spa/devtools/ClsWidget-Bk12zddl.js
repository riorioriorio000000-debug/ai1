import{n as e,o as t}from"../assets/rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{FD as i,ID as a,gF as o,uF as s}from"../assets/index-w64_zsxD.js";import{r as c,t as l}from"./metricUtils-CtIfy7W-.js";var u,d,f,p;e((()=>{i(),s(),u=t(n()),l(),d=t(r()),f={high:a(`acss-zknb5i`,[`.acss-zknb5i{color:var(--ant-color-error);}`],`
    color: var(--ant-color-error);
  `),mid:a(`acss-rc3uuo`,[`.acss-rc3uuo{color:var(--ant-color-warning);}`],`
    color: var(--ant-color-warning);
  `),text:a(`acss-1yab8b6`,[`.acss-1yab8b6{font-family:var(--ant-font-family-code);font-size:11px;font-feature-settings:'tnum';color:var(--ant-color-text-tertiary);}`],`
    font-family: var(--ant-font-family-code);
    font-size: 11px;
    font-feature-settings: 'tnum';
    color: var(--ant-color-text-tertiary);
  `)},p=(0,u.memo)(()=>{let[e,t]=(0,u.useState)(null);return(0,u.useEffect)(()=>{let e=globalThis.PerformanceObserver;if(!e?.supportedEntryTypes.includes(`layout-shift`))return;t(0);let n=new e(e=>{let n=c(e.getEntries());n>0&&t(e=>(e??0)+n)});return n.observe({buffered:!0,type:`layout-shift`}),()=>n.disconnect()},[]),e===null?null:(0,d.jsxs)(`span`,{className:o(f.text,e>.25?f.high:e>.1?f.mid:void 0),title:`Cumulative Layout Shift (warning > 0.1, red > 0.25)`,children:[`CLS `,e.toFixed(3)]})}),p.displayName=`DevDockClsWidget`}))();export{p as default};