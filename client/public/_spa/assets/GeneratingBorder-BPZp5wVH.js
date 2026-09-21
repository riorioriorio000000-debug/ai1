import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{Kt as i,qt as a}from"../vendor/vendor-ui-core-BmtybT1r.js";import{FD as o,ID as s,fF as c,uF as l}from"./index-w64_zsxD.js";var u,d,f,p,m,h=e((()=>{o(),a(),l(),u=t(n()),d=t(r()),f=c`
  @property --lobe-generating-border-angle {
    inherits: false;
    initial-value: 0deg;
    syntax: '<angle>';
  }
`,p={shell:s(`acss-1eqnu52`,[`.acss-1eqnu52{position:relative;border-radius:8px;}`],`
    position: relative;
    border-radius: 8px;
  `),shellGenerating:s(`acss-1mgb9jr`,[`.acss-1mgb9jr{overflow:hidden;}`,`.acss-1mgb9jr::after{pointer-events:none;content:'';position:absolute;z-index:1;inset:0;padding:2px;border-radius:inherit;background:conic-gradient(
        from var(--lobe-generating-border-angle),
        var(--ant-color-border-secondary) 0deg 210deg,
        #ff3d8d 238deg,
        #8b5cf6 258deg,
        #00c8ff 278deg,
        #22e6a8 298deg,
        #ffd43b 318deg,
        #ff6b35 338deg,
        var(--ant-color-border-secondary) 360deg
      );mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);animation:lobe-generating-border-flow 1.8s linear infinite;mask-composite:exclude;}`,`@keyframes lobe-generating-border-flow{from{--lobe-generating-border-angle:0deg;}to{--lobe-generating-border-angle:360deg;}}`,`@media (prefers-reduced-motion: reduce){.acss-1mgb9jr::after{animation:none;}}`],`
    overflow: hidden;

    &::after {
      pointer-events: none;
      content: '';

      position: absolute;
      z-index: 1;
      inset: 0;

      padding: 2px;
      border-radius: inherit;

      background: conic-gradient(
        from var(--lobe-generating-border-angle),
        var(--ant-color-border-secondary) 0deg 210deg,
        #ff3d8d 238deg,
        #8b5cf6 258deg,
        #00c8ff 278deg,
        #22e6a8 298deg,
        #ffd43b 318deg,
        #ff6b35 338deg,
        var(--ant-color-border-secondary) 360deg
      );

      /* Masks the gradient down to the 2px padding ring, so only the edge lights up. */
      mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);

      animation: lobe-generating-border-flow 1.8s linear infinite;

      mask-composite: exclude;
    }

    @keyframes lobe-generating-border-flow {
      from {
        --lobe-generating-border-angle: 0deg;
      }

      to {
        --lobe-generating-border-angle: 360deg;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      &::after {
        animation: none;
      }
    }
  `)},m=(0,u.memo)(({children:e,className:t,generating:n,style:r})=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f,{}),(0,d.jsx)(i,{style:r,className:[p.shell,n&&p.shellGenerating,t].filter(Boolean).join(` `),children:e})]}))}));export{h as n,m as t};