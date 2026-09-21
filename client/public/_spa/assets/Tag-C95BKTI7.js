import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{$t as i,Gt as a,Qt as o,Wt as s}from"../vendor/vendor-ui-core-BmtybT1r.js";import{A as c,G as l}from"../vendor/vendor-ui-runtime-NzUbUsUl.js";import{c as u,t as d}from"../vendor/vendor-icons-vienkZi5.js";import{cF as f,gF as p,hF as m,lF as h,pF as g,uF as _}from"./index-w64_zsxD.js";var v,y,b=e((()=>{s(),_(),h(),v=g(({css:e,cssVar:t})=>({borderless:a.variantBorderlessWithoutHover,close:e`
    cursor: pointer;

    display: inline-flex;
    gap: 0;
    align-items: center;
    justify-content: center;

    margin: 0;
    padding: 0;
    border: none;

    color: ${t.colorIcon};

    background: none;

    &:hover {
      color: ${t.colorTextHeading};
    }
  `,filled:a.variantFilledWithoutHover,large:e`
    height: 28px;
    padding-inline: 12px;
    border-radius: 6px;
  `,middle:e`
    height: 22px;
    padding-inline: 8px;
    border-radius: 3px;
  `,outlined:a.variantOutlinedWithoutHover,round:e`
    && {
      border-radius: 999px;
    }
  `,roundLarge:e`
    padding-inline: 14px;
  `,roundMiddle:e`
    padding-inline: 10px;
  `,roundSmall:e`
    padding-inline: 8px;
  `,root:e`
    user-select: none;

    display: inline-flex;
    gap: 0.4em;
    align-items: center;
    justify-content: center;

    width: fit-content;
    margin: 0;

    font-size: ${t.fontSizeSM};
    line-height: 1.2;
    white-space: nowrap;

    span {
      margin: 0;
      line-height: inherit;
    }
  `,small:e`
    height: 20px;
    padding-inline: 4px;
    border-radius: 3px;
  `})),y=f(v.root,{compoundVariants:[{className:v.roundSmall,shape:`round`,size:`small`},{className:v.roundMiddle,shape:`round`,size:`middle`},{className:v.roundLarge,shape:`round`,size:`large`}],defaultVariants:{shape:`normal`,size:`middle`,variant:`filled`},variants:{shape:{normal:null,round:v.round},size:{large:v.large,middle:v.middle,small:v.small},variant:{borderless:v.borderless,filled:v.filled,outlined:v.outlined,solid:v.filled}}})})),x,S,C,w,T,E,D=e((()=>{_(),c(),x=[`red`,`volcano`,`orange`,`gold`,`yellow`,`lime`,`green`,`cyan`,`blue`,`geekblue`,`purple`,`magenta`,`gray`],S=new Set([`error`,`warning`,`success`,`info`,`processing`]),C=e=>e.replaceAll(/([a-z])([A-Z])/g,`$1-$2`).replaceAll(/([a-z])(\d)/g,`$1-$2`).replaceAll(/(\d)([A-Z])/g,`$1-$2`).replaceAll(/([A-Z]+)([A-Z][a-z])/g,`$1-$2`).toLowerCase(),w=e=>m[e]||`var(--ant-${C(e)})`,T=(e,...t)=>w(l([e,...t].join(`-`))),E=(e,...t)=>w(l([`color`,e===`processing`?`info`:e,...t].join(`-`)))})),O,k,A,j=e((()=>{o(),b(),D(),O=t(n(),1),k=t(r(),1),_(),d(),A=(0,O.memo)(({children:e,className:t,classNames:n,closable:r,closeIcon:a,color:o,icon:s,onClick:c,onClose:l,ref:d,shape:f=`normal`,size:h=`middle`,style:g,styles:_,variant:b=`filled`,...C})=>{let[w,D]=(0,O.useState)(!0),A=(0,O.useMemo)(()=>{let e=m.colorTextSecondary,t,n,r=b===`borderless`,a=b===`filled`,s=b===`solid`,c=o&&x.includes(o),l=o&&S.has(o),u=o&&o.startsWith(`#`);if(c){let c=T(o);e=s?i(c):T(o,`active`),t=s?c:r?`transparent`:T(o,`fillTertiary`),n=s?c:T(o,a?`fillQuaternary`:`fillTertiary`)}if(l){let c=E(o);e=s?i(c):E(o),t=s?c:r?`transparent`:E(o,`fillTertiary`),n=s?c:E(o,a?`fillQuaternary`:`fillTertiary`)}return u&&(e=s?i(o):r?o:m.colorBgLayout,t=s?o:r?`transparent`:o,n=s?o:n),{backgroundColor:t,borderColor:n,textColor:e}},[o,b]);return w?(0,k.jsxs)(`span`,{className:p(y({shape:f,size:h,variant:b}),t,n?.root),ref:d,style:{background:A.backgroundColor,borderColor:A.borderColor,color:A.textColor,cursor:c?`pointer`:void 0,...g,..._?.root},onClick:c,...C,children:[s,e,r&&(0,k.jsx)(`button`,{"aria-label":`Close`,className:p(v.close,n?.closeIcon),style:_?.closeIcon,type:`button`,onClick:e=>{e.stopPropagation(),l?.(e),D(!1)},children:a??(0,k.jsx)(u,{size:10})})]}):null}),A.displayName=`Tag`}));export{j as n,A as t};