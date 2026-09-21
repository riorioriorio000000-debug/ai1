import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{EF as i,FD as a,ID as o,gF as s,uF as c}from"./index-w64_zsxD.js";var l,u=e((()=>{a(),l={spotlightDark:o(`acss-zrqp4r`,[`.acss-zrqp4r{pointer-events:none;position:absolute;z-index:1;inset:0;border-radius:inherit;opacity:var(--spotlight-opacity, 0.1);background:radial-gradient(
      var(--spotlight-size, 64px) circle at var(--spotlight-x, 0) var(--spotlight-y, 0),
      var(--ant-color-text),
      transparent
    );transition:all 0.2s;}`],`
    pointer-events: none;

    position: absolute;
    z-index: 1;
    inset: 0;

    border-radius: inherit;

    opacity: var(--spotlight-opacity, 0.1);
    background: radial-gradient(
      var(--spotlight-size, 64px) circle at var(--spotlight-x, 0) var(--spotlight-y, 0),
      var(--ant-color-text),
      transparent
    );

    transition: all 0.2s;
  `),spotlightDarkOutside:o(`acss-1ggymhj`,[`.acss-1ggymhj{pointer-events:none;position:absolute;z-index:1;inset:0;border-radius:inherit;opacity:0;background:radial-gradient(
      var(--spotlight-size, 64px) circle at var(--spotlight-x, 0) var(--spotlight-y, 0),
      var(--ant-color-text),
      transparent
    );transition:all 0.2s;}`],`
    pointer-events: none;

    position: absolute;
    z-index: 1;
    inset: 0;

    border-radius: inherit;

    opacity: 0;
    background: radial-gradient(
      var(--spotlight-size, 64px) circle at var(--spotlight-x, 0) var(--spotlight-y, 0),
      var(--ant-color-text),
      transparent
    );

    transition: all 0.2s;
  `),spotlightLight:o(`acss-xb7zr0`,[`.acss-xb7zr0{pointer-events:none;position:absolute;z-index:1;inset:0;border-radius:inherit;opacity:var(--spotlight-opacity, 0.1);background:radial-gradient(
      var(--spotlight-size, 64px) circle at var(--spotlight-x, 0) var(--spotlight-y, 0),
      #fff,
      var(--ant-color-text-quaternary)
    );transition:all 0.2s;}`],`
    pointer-events: none;

    position: absolute;
    z-index: 1;
    inset: 0;

    border-radius: inherit;

    opacity: var(--spotlight-opacity, 0.1);
    background: radial-gradient(
      var(--spotlight-size, 64px) circle at var(--spotlight-x, 0) var(--spotlight-y, 0),
      #fff,
      var(--ant-color-text-quaternary)
    );

    transition: all 0.2s;
  `),spotlightLightOutside:o(`acss-qpa5f`,[`.acss-qpa5f{pointer-events:none;position:absolute;z-index:1;inset:0;border-radius:inherit;opacity:0;background:radial-gradient(
      var(--spotlight-size, 64px) circle at var(--spotlight-x, 0) var(--spotlight-y, 0),
      #fff,
      var(--ant-color-text-quaternary)
    );transition:all 0.2s;}`],`
    pointer-events: none;

    position: absolute;
    z-index: 1;
    inset: 0;

    border-radius: inherit;

    opacity: 0;
    background: radial-gradient(
      var(--spotlight-size, 64px) circle at var(--spotlight-x, 0) var(--spotlight-y, 0),
      #fff,
      var(--ant-color-text-quaternary)
    );

    transition: all 0.2s;
  `)}})),d,f,p=e((()=>{d=t(n(),1),f=()=>{let[e,t]=(0,d.useState)(),[n,r]=(0,d.useState)(!0),i=(0,d.useRef)(null);return(0,d.useEffect)(()=>{if(i.current&&i.current.parentElement){let e=i.current.parentElement,n=n=>{let i=e.getBoundingClientRect();t({x:n.clientX-i.x,y:n.clientY-i.y}),r(!1)},a=()=>{r(!0)};return e.addEventListener(`mousemove`,n),e.addEventListener(`mouseleave`,a),()=>{e.removeEventListener(`mousemove`,n),e.removeEventListener(`mouseleave`,a)}}},[]),[e,n,i]}})),m,h,g,_=e((()=>{u(),p(),m=t(n(),1),h=t(r(),1),c(),g=(0,m.memo)(({className:e,size:t=64,...n})=>{let[r,a,o]=f(),{isDarkMode:c}=i(),u=(0,m.useMemo)(()=>({"--spotlight-opacity":a?`0`:`0.1`,"--spotlight-size":`${t}px`,"--spotlight-x":`${r?.x??0}px`,"--spotlight-y":`${r?.y??0}px`}),[r,t,a]);return(0,h.jsx)(`div`,{className:s(c?a?l.spotlightDarkOutside:l.spotlightDark:a?l.spotlightLightOutside:l.spotlightLight,e),ref:o,style:u,...n})}),g.displayName=`Spotlight`}));export{_ as n,g as t};