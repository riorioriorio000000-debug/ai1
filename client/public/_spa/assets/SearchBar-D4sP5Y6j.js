import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{Gt as i,Wt as a,Xn as o,Zn as s,dt as c,ft as l}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Xr as u,t as d,wc as f}from"../vendor/vendor-icons-vienkZi5.js";import{SF as p,gF as m,pF as h,uF as g,xF as _}from"./index-w64_zsxD.js";import{n as v,t as y}from"./Spotlight-DQWF2xG5.js";import{n as b,t as x}from"./Input-gdUxluEJ.js";import{a as S,t as C}from"./dist-D0KNI92g.js";var w,T=e((()=>{a(),g(),w=h(({css:e,cssVar:t})=>({icon:e`
    color: ${t.colorTextPlaceholder};
  `,search:e`
    position: relative;
    max-width: 100%;
  `,tag:m(i.blur,e`
      position: absolute;
      inset-block-start: 50%;
      inset-inline-end: 6px;
      transform: translateY(-50%);

      color: ${t.colorTextDescription};

      kbd {
        color: inherit;
      }
    `)}))})),E,D,O,k=e((()=>{s(),l(),b(),v(),T(),E=t(n(),1),D=t(r(),1),g(),_(),d(),S(),O=(0,E.memo)(({defaultValue:e=``,spotlight:t,className:n,value:r,onInputChange:i,placeholder:a,enableShortKey:s,shortKey:l=`mod+k`,onSearch:d,loading:h,style:g,onChange:_,onBlur:v,onPressEnter:b,onFocus:S,styles:{input:T,shortKey:O}={},classNames:{input:k,shortKey:A}={},...j})=>{let[M,N]=p(e,{defaultValue:e,onChange:i,value:r}),[P,F]=(0,E.useState)(!0),I=(0,E.useRef)(null),L=(0,E.useMemo)(()=>l.includes(`+`)?l:`mod+${l}`,[l]);return C(L,()=>{s&&I.current?.focus()},{enableOnFormTags:!0,enabled:!!s&&!!l,preventDefault:!0}),(0,D.jsxs)(`div`,{className:m(w.search,n),style:g,children:[t&&(0,D.jsx)(y,{}),(0,D.jsx)(x,{allowClear:!0,className:k,placeholder:a??`Type keywords...`,ref:I,style:T,value:M,prefix:(0,D.jsx)(o,{className:w.icon,icon:h?f:u,size:`small`,spin:h,style:{marginRight:4}}),onBlur:e=>{v?.(e),N(e.target.value),F(!0)},onChange:e=>{N(e.target.value),_?.(e)},onFocus:e=>{S?.(e),F(!1)},onPressEnter:e=>{b?.(e),d?.(M)},...j}),s&&P&&!M&&(0,D.jsx)(c,{compact:!0,className:m(w.tag,A),keys:L,style:O})]})}),O.displayName=`SearchBar`}));export{k as n,O as t};