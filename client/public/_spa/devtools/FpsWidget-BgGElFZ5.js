import{n as e,o as t}from"../assets/rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{FD as i,ID as a,gF as o,uF as s}from"../assets/index-w64_zsxD.js";var c,l,u,d;e((()=>{i(),s(),c=t(n()),l=t(r()),u={low:a(`acss-zknb5i`,[`.acss-zknb5i{color:var(--ant-color-error);}`],`
    color: var(--ant-color-error);
  `),mid:a(`acss-rc3uuo`,[`.acss-rc3uuo{color:var(--ant-color-warning);}`],`
    color: var(--ant-color-warning);
  `),text:a(`acss-1yab8b6`,[`.acss-1yab8b6{font-family:var(--ant-font-family-code);font-size:11px;font-feature-settings:'tnum';color:var(--ant-color-text-tertiary);}`],`
    font-family: var(--ant-font-family-code);
    font-size: 11px;
    font-feature-settings: 'tnum';
    color: var(--ant-color-text-tertiary);
  `)},d=(0,c.memo)(()=>{let[e,t]=(0,c.useState)(null);return(0,c.useEffect)(()=>{let e=0,n=0,r=performance.now(),i=a=>{n+=1;let o=a-r;o>=500&&(t(Math.round(n*1e3/o)),n=0,r=a),e=requestAnimationFrame(i)};return e=requestAnimationFrame(i),()=>cancelAnimationFrame(e)},[]),e===null?null:(0,l.jsxs)(`span`,{className:o(u.text,e<30?u.low:e<50?u.mid:void 0),title:`Frames per second`,children:[e,` FPS`]})}),d.displayName=`DevDockFpsWidget`}))();export{d as default};