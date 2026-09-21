import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r,i,m as a}from"../vendor/vendor-react-B9HSWrpN.js";import{FD as o,ID as s}from"./index-w64_zsxD.js";var c,l,u,d,f,p,m,h,g,_,v,y=e((()=>{o(),c=t(n()),i(),l=t(r()),u=`data-settings-anchor`,d=`data-settings-anchor-row`,f=2400,p=100,m=3e3,h={anchor:s(`acss-1j3rf88`,[`.acss-1j3rf88{scroll-margin-block-start:80px;}`],`
    scroll-margin-block-start: 80px;
  `),highlight:s(`acss-8jag5x`,[`.acss-8jag5x{border-radius:var(--ant-border-radius);animation:settings-search-highlight 1.2s ease-in-out 2;}`,`@keyframes settings-search-highlight{0%,100%{background:transparent;}50%{background:var(--ant-color-primary-bg-hover);}}`,`@media (prefers-reduced-motion: reduce){.acss-8jag5x{background:var(--ant-color-primary-bg-hover);animation:none;}}`],`
    border-radius: var(--ant-border-radius);
    animation: settings-search-highlight 1.2s ease-in-out 2;

    @keyframes settings-search-highlight {
      0%,
      100% {
        background: transparent;
      }

      50% {
        /* One step above colorPrimaryBg — plain Bg is barely visible in dark mode */
        background: var(--ant-color-primary-bg-hover);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      /* Keep the locate cue, drop the flashing: a steady highlight that the
         removal timer clears */
      background: var(--ant-color-primary-bg-hover);
      animation: none;
    }
  `)},g=(0,c.memo)(({id:e,children:t})=>(0,l.jsx)(`span`,{className:h.anchor,[u]:e,children:t})),g.displayName=`SettingsSearchAnchor`,_=e=>{let t=Date.now(),n,r=()=>{let i=document.querySelector(`[${u}="${CSS.escape(e)}"]`);if(!i){Date.now()-t<m&&(n=setTimeout(r,p));return}let a=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;i.scrollIntoView({behavior:a?`auto`:`smooth`,block:`center`});let o=i.closest(`.ant-form-item, .ant-collapse-header, [data-settings-anchor-row]`)??i;o.classList.add(h.highlight),setTimeout(()=>o.classList.remove(h.highlight),f)};return r(),()=>clearTimeout(n)},v=()=>{let e=a();(0,c.useEffect)(()=>{let t=e.hash.replace(/^#/,``);if(t)return _(t)},[e.key])}}));export{v as i,g as n,y as r,d as t};