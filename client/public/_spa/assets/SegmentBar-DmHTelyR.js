import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{FD as i,ID as a}from"./index-w64_zsxD.js";var o,s,c,l,u=e((()=>{i(),o=t(n()),s=t(r()),c={segment:a(`acss-1dx9ahs`,[`.acss-1dx9ahs{height:100%;transition:width 0.3s ease;}`,`@media (prefers-reduced-motion: reduce){.acss-1dx9ahs{transition:none;}}`],`
    height: 100%;
    transition: width 0.3s ease;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `),track:a(`acss-aujcx3`,[`.acss-aujcx3{overflow:hidden;display:flex;width:100%;border-radius:999px;background:var(--ant-color-fill-secondary);}`],`
    overflow: hidden;
    display: flex;

    width: 100%;
    border-radius: 999px;

    background: var(--ant-color-fill-secondary);
  `)},l=(0,o.memo)(({segments:e,height:t=8})=>{let n=e.reduce((e,t)=>e+t.value,0);return(0,s.jsx)(`div`,{className:c.track,style:{height:t},children:n>0&&e.map((e,t)=>e.value>0?(0,s.jsx)(`span`,{className:c.segment,style:{background:e.color,width:`${e.value/n*100}%`}},t):null)})})}));export{u as n,l as t};