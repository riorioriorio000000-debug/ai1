import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{Bt as o,Kt as s,Mt as c,Nt as l,Vt as u,Xn as d,Zn as f,at as p,it as m,qt as h}from"../vendor/vendor-ui-core-BmtybT1r.js";import{t as g,ut as _,wi as v}from"../vendor/vendor-icons-vienkZi5.js";import{FD as y,ID as b,hF as x,mS as S,pS as C,uF as w}from"./index-w64_zsxD.js";var T,E,D,O,k=e((()=>{y(),u(),h(),f(),l(),p(),w(),g(),T=t(i()),r(),C(),E=t(a()),D={block:b(`acss-q9ar8z`,[`.acss-q9ar8z{width:100%;min-height:180px;padding:32px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);background:var(--ant-color-bg-container);}`],`
    width: 100%;
    min-height: 180px;
    padding: 32px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);

    background: var(--ant-color-bg-container);
  `),icon:b(`acss-nt432w`,[`.acss-nt432w{color:var(--ant-color-text-tertiary);}`],`
    color: var(--ant-color-text-tertiary);
  `),inline:b(`acss-1jd0040`,[`.acss-1jd0040{padding-block:8px;}`],`
    padding-block: 8px;
  `),metric:b(`acss-185s3ho`,[`.acss-185s3ho{color:var(--ant-color-text-quaternary);}`],`
    color: var(--ant-color-text-quaternary);
  `),page:b(`acss-iqjgrc`,[`.acss-iqjgrc{flex:1;width:100%;min-height:320px;padding:48px;}`],`
    flex: 1;
    width: 100%;
    min-height: 320px;
    padding: 48px;
  `)},O=(0,T.memo)(({variant:e=`block`,error:t,onRetry:r,retrying:i=!1,title:a,description:l,action:u})=>{let{t:f}=n(`error`),{status:p,retryable:h}=S(t),g=l??(p?f(`response.${p}`,f(`asyncState.desc`)):f(`asyncState.desc`)),y=a??f(`asyncState.title`),b=!!r&&h;return e===`metric`?(0,E.jsxs)(s,{horizontal:!0,align:`center`,className:D.metric,gap:6,children:[(0,E.jsx)(d,{icon:_,size:14}),(0,E.jsx)(m,{color:x.colorTextQuaternary,fontSize:13,children:f(`asyncState.metricLabel`)}),b&&(0,E.jsx)(c,{disabled:i,loading:i,size:`small`,type:`text`,onClick:r,children:f(`error.retry`)})]}):e===`inline`?(0,E.jsxs)(s,{horizontal:!0,align:`center`,className:D.inline,gap:8,justify:`center`,children:[(0,E.jsx)(d,{className:D.icon,icon:_,size:14}),(0,E.jsx)(m,{color:x.colorTextSecondary,fontSize:13,children:y}),b&&(0,E.jsx)(c,{disabled:i,loading:i,size:`small`,type:`text`,onClick:r,children:f(`error.retry`)})]}):(0,E.jsxs)(o,{className:e===`page`?D.page:D.block,gap:12,children:[(0,E.jsx)(d,{className:D.icon,icon:_,size:e===`page`?32:24}),(0,E.jsxs)(s,{align:`center`,gap:4,children:[(0,E.jsx)(m,{fontSize:e===`page`?16:15,weight:600,children:y}),(0,E.jsx)(m,{align:`center`,color:x.colorTextTertiary,fontSize:13,style:{maxWidth:360},children:g})]}),u??(b&&(0,E.jsx)(c,{disabled:i,icon:(0,E.jsx)(d,{icon:v}),loading:i,size:`small`,onClick:r,children:f(`error.retry`)}))]})}),O.displayName=`AsyncError`}));export{k as n,O as t};