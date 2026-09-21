import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{$t as i,Gt as a,Qt as o,Wt as s}from"../vendor/vendor-ui-core-BmtybT1r.js";import{A as c,G as l}from"../vendor/vendor-ui-runtime-NzUbUsUl.js";import{f as u,r as d}from"../vendor/vendor-antd-BWSxhuJE.js";import{cF as f,gF as p,hF as m,lF as h,pF as g,uF as _}from"./index-w64_zsxD.js";var v,y,b,x,S,C,w=e((()=>{_(),c(),v=[`red`,`volcano`,`orange`,`gold`,`yellow`,`lime`,`green`,`cyan`,`blue`,`geekblue`,`purple`,`magenta`,`gray`],y=new Set([`error`,`warning`,`success`,`info`,`processing`]),b=e=>e.replaceAll(/([a-z])([A-Z])/g,`$1-$2`).replaceAll(/([a-z])(\d)/g,`$1-$2`).replaceAll(/(\d)([A-Z])/g,`$1-$2`).replaceAll(/([A-Z]+)([A-Z][a-z])/g,`$1-$2`).toLowerCase(),x=e=>m[e]||`var(--ant-${b(e)})`,S=(e,...t)=>x(l([e,...t].join(`-`))),C=(e,...t)=>x(l([`color`,e===`processing`?`info`:e,...t].join(`-`)))})),T,E,D,O=e((()=>{s(),_(),h(),T=`ant`,E=g(({css:e,cssVar:t})=>({borderless:a.variantBorderlessWithoutHover,filled:a.variantFilledWithoutHover,large:e`
    &.${T}-tag {
      height: 28px;
      padding-inline: 12px;
      border-radius: 6px !important;
    }
  `,outlined:a.variantOutlinedWithoutHover,round:e`
    &.${T}-tag {
      border-radius: 999px !important;
    }
  `,roundLarge:e`
    &.${T}-tag {
      padding-inline: 14px;
    }
  `,roundMiddle:e`
    &.${T}-tag {
      padding-inline: 10px;
    }
  `,roundSmall:e`
    &.${T}-tag {
      padding-inline: 8px;
    }
  `,root:e`
    color: ${t.colorTextSecondary};

    &.${T}-tag {
      user-select: none;

      display: flex;
      gap: 0.4em;
      align-items: center;
      justify-content: center;

      width: fit-content;
      height: 22px;
      margin: 0;
      border-radius: 3px;

      line-height: 1.2;

      span {
        margin: 0;
      }

      span:not(.anticon) {
        line-height: inherit;
      }
    }
  `,small:e`
    &.${T}-tag {
      height: 20px;
      padding-inline: 4px;
      border-radius: 3px;
    }
  `})),D=f(E.root,{defaultVariants:{shape:`normal`,size:`middle`,variant:`filled`},compoundVariants:[{className:E.roundSmall,shape:`round`,size:`small`},{className:E.roundMiddle,shape:`round`,size:`middle`},{className:E.roundLarge,shape:`round`,size:`large`}],variants:{shape:{normal:null,round:E.round},variant:{filled:E.filled,outlined:E.outlined,borderless:E.borderless,solid:E.filled},size:{small:E.small,middle:null,large:E.large}}})})),k,A,j,M=e((()=>{o(),w(),O(),k=t(n(),1),A=t(r(),1),d(),_(),j=({className:e,ref:t,shape:n=`normal`,size:r=`middle`,color:a,variant:o=`filled`,children:s,onClick:c,style:l,...d})=>{let f=(0,k.useMemo)(()=>{let e=m.colorTextSecondary,t,n,r=o===`borderless`,s=o===`filled`,c=o===`solid`,l=a&&v.includes(a),u=a&&y.has(a),d=a&&a.startsWith(`#`);if(l){let o=S(a);e=c?i(o):S(a,`active`),t=c?o:r?`transparent`:S(a,`fillTertiary`),n=c?o:S(a,s?`fillQuaternary`:`fillTertiary`)}if(u){let o=C(a);e=c?i(o):C(a),t=c?o:r?`transparent`:C(a,`fillTertiary`),n=c?o:C(a,s?`fillQuaternary`:`fillTertiary`)}return d&&(e=c?i(a):r?a:m.colorBgLayout,t=c?a:r?`transparent`:a,n=c?a:n),{backgroundColor:t,borderColor:n,textColor:e}},[a,o]);return(0,A.jsx)(u,{className:p(D({shape:n,size:r,variant:o}),e),color:a,ref:t,variant:o===`borderless`?`outlined`:o===`solid`?`filled`:o,style:{background:f?.backgroundColor,borderColor:f?.borderColor,color:f?.textColor,cursor:c?`pointer`:void 0,...l},onClick:c,...d,children:s})},j.displayName=`Tag`}));export{M as n,j as t};