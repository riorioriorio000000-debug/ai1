import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{Kt as i,lt as a,qt as o,ut as s}from"../vendor/vendor-ui-core-BmtybT1r.js";import{FD as c,ID as l,gF as u,uF as d}from"./index-w64_zsxD.js";import{n as f,t as p}from"./Slider-DBYCSzDU.js";var m=e((()=>{s()})),h,g=e((()=>{h=(e,t)=>e.length===0||!Number.isFinite(t)?0:e.reduce((n,r,i)=>{let a=Math.abs(e[n].value-t);return Math.abs(r.value-t)<a?i:n},0)})),_,v,y,b,x=e((()=>{c(),o(),f(),m(),d(),_=t(n()),g(),v=t(r()),y={label:l(`acss-2x9u1l`,[`.acss-2x9u1l{cursor:pointer;padding:0;border:none;font:inherit;font-size:12px;line-height:16px;color:var(--ant-color-text-tertiary);text-align:center;overflow-wrap:anywhere;background:transparent;transition:color 0.2s ease;}`,`.acss-2x9u1l:hover{color:var(--ant-color-text-secondary);}`,`.acss-2x9u1l:focus-visible{border-radius:6px;outline:1px solid var(--ant-color-border);outline-offset:2px;}`,`.acss-2x9u1l:disabled{cursor:not-allowed;}`],`
    cursor: pointer;

    padding: 0;
    border: none;

    font: inherit;
    font-size: 12px;
    line-height: 16px;
    color: var(--ant-color-text-tertiary);
    text-align: center;
    overflow-wrap: anywhere;

    background: transparent;

    transition: color 0.2s ease;

    &:hover {
      color: var(--ant-color-text-secondary);
    }

    &:focus-visible {
      border-radius: 6px;
      outline: 1px solid var(--ant-color-border);
      outline-offset: 2px;
    }

    &:disabled {
      cursor: not-allowed;
    }
  `),labels:l(`acss-1ygebc9`,[`.acss-1ygebc9{display:grid;gap:8px;width:100%;}`],`
    display: grid;
    gap: 8px;
    width: 100%;
  `),root:l(`acss-ybrhvy`,[`.acss-ybrhvy{width:100%;}`],`
    width: 100%;
  `),selectedLabel:l(`acss-644054`,[`.acss-644054{color:var(--ant-color-text);}`],`
    color: var(--ant-color-text);
  `),slider:l(`acss-wlhtka`,[`.acss-wlhtka{width:100%;padding-inline:6px;}`],`
    width: 100%;
    padding-inline: 6px;
  `)},b=(0,_.memo)(({className:e,disabled:t,formatTooltip:n,onChange:r,onChangeComplete:o,options:s,style:c,value:l,...d})=>{let f=(0,_.useMemo)(()=>h(s,l),[s,l]),m=s[f],g=s.length>1?[`minmax(0, 0.5fr)`,...Array.from({length:s.length-2}).fill(`minmax(0, 1fr)`),`minmax(0, 0.5fr)`].join(` `):`minmax(0, 1fr)`,b=(0,v.jsx)(`div`,{className:y.slider,children:(0,v.jsx)(p,{...d,disabled:t||s.length===0,max:Math.max(0,s.length-1),min:0,step:1,value:f,onChange:e=>{let t=s[e];t&&r?.(t.value)},onChangeComplete:e=>{let t=s[e];t&&o?.(t.value)}})});return(0,v.jsxs)(i,{className:u(y.root,e),gap:6,style:c,children:[n&&m?(0,v.jsx)(a,{title:n(m.value),children:b}):b,(0,v.jsx)(`div`,{className:y.labels,style:{gridTemplateColumns:g},children:s.map((e,n)=>{let i=n===0,a=i===(n===s.length-1)?`center`:i?`start`:`end`;return(0,v.jsx)(`button`,{"aria-current":n===f?`true`:void 0,"aria-label":e.ariaLabel,className:u(y.label,n===f&&y.selectedLabel),disabled:t,style:{textAlign:a,...e.style},type:`button`,onClick:()=>r?.(e.value),children:e.label},e.value)})})]})}),b.displayName=`DiscreteSlider`}));export{x as n,m as r,b as t};