import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{Xn as o,Zn as s,h as c}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Ha as l,Hh as u,Hm as d,Ql as f,fy as p,oh as m,t as h}from"../vendor/vendor-icons-vienkZi5.js";import{FD as g,ID as _,Zf as v}from"./index-w64_zsxD.js";var y,b,x=e((()=>{v(),y=0,b=({renderContent:e,renderFooter:t,...n})=>{let r=`form-modal-${y++}`,i={},a=e=>{i.instance?.update({footer:t({formId:r,loading:e})})};return i.instance=c({...n,content:e({formId:r,setLoading:a}),footer:t({formId:r,loading:!1})}),i.instance}})),S,C,w,T,E,D=e((()=>{g(),s(),h(),S=t(i()),r(),C=t(a()),w={aborted:{cls:`default`,icon:l},completed:{cls:`success`,icon:u},external:{cls:`warning`,icon:f},failed:{cls:`error`,icon:m},idle:{cls:`default`,icon:d},pending:{cls:`warning`,icon:d},running:{cls:`primary`,icon:p}},T={default:_(`acss-nt432w`,[`.acss-nt432w{color:var(--ant-color-text-tertiary);}`],`
    color: var(--ant-color-text-tertiary);
  `),error:_(`acss-zknb5i`,[`.acss-zknb5i{color:var(--ant-color-error);}`],`
    color: var(--ant-color-error);
  `),primary:_(`acss-668td3`,[`.acss-668td3{color:var(--ant-color-primary);}`],`
    color: var(--ant-color-primary);
  `),success:_(`acss-1agh9uj`,[`.acss-1agh9uj{color:var(--ant-color-success);}`],`
    color: var(--ant-color-success);
  `),warning:_(`acss-rc3uuo`,[`.acss-rc3uuo{color:var(--ant-color-warning);}`],`
    color: var(--ant-color-warning);
  `),wrapper:_(`acss-aloefs`,[`.acss-aloefs{display:inline-flex;gap:4px;align-items:center;font-size:var(--ant-font-size-sm);font-weight:500;line-height:1;}`],`
    display: inline-flex;
    gap: 4px;
    align-items: center;

    font-size: var(--ant-font-size-sm);
    font-weight: 500;
    line-height: 1;
  `)},E=(0,S.memo)(({status:e})=>{let{t}=n(`eval`),r=w[e]||w.idle;return(0,C.jsxs)(`span`,{className:`${T.wrapper} ${T[r.cls]||T.default}`,children:[(0,C.jsx)(o,{icon:r.icon,size:12}),t(`run.status.${e}`)]})})}));export{x as i,D as n,b as r,E as t};