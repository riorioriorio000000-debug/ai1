import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{$t as ee,An as i,Bt as a,Cn as o,Dn as s,En as c,Fn as l,Kt as te,Mn as u,Nn as d,On as f,Pn as p,Qt as m,Sn as h,Tn as g,Vt as ne,Xn as re,Zn as _,_n as v,an as y,bn as ie,cn as ae,en as oe,fn as se,gn as ce,hn as le,in as ue,jn as b,kn as x,ln as S,lt as C,mn as w,nn as T,on as E,pn as D,qt as O,rn as k,sn as A,tn as j,ut as M,vn as N,wn as P,xn as F,yn as I}from"../vendor/vendor-ui-core-BmtybT1r.js";import{mt as L,r as R}from"../vendor/vendor-antd-BWSxhuJE.js";import{t as de,ug as z}from"../vendor/vendor-icons-vienkZi5.js";import{Ja as B,SF as V,gF as H,hF as U,pF as fe,qa as pe,uF as W,xF as me}from"./index-w64_zsxD.js";var G,K,he=e((()=>{W(),G=`ant`,K=fe(({css:e,cssVar:t})=>({active:e`
      box-shadow: inset 0 0 0 1px ${t.colorFill};
    `,conic:e`
      background: conic-gradient(
        ${t.red},
        ${t.volcano},
        ${t.orange},
        ${t.gold},
        ${t.yellow},
        ${t.lime},
        ${t.green},
        ${t.cyan},
        ${t.blue},
        ${t.geekblue},
        ${t.purple},
        ${t.magenta},
        ${t.red}
      );
      .${G}-color-picker-color-block {
        opacity: 0;
      }
    `,container:e`
      cursor: pointer;

      flex: none;

      width: var(--color-swatches-size, 24px);
      min-width: var(--color-swatches-size, 24px);
      height: var(--color-swatches-size, 24px);
      min-height: var(--color-swatches-size, 24px);

      background: ${t.colorBgContainer};
      box-shadow: inset 0 0 0 1px ${t.colorFillSecondary};

      &:hover {
        box-shadow:
          inset 0 0 0 1px rgba(0, 0, 0, 5%),
          0 0 0 2px ${t.colorText};
      }
    `,picker:e`
      overflow: hidden;
      flex: none;

      width: var(--color-swatches-size, 24px);
      min-width: var(--color-swatches-size, 24px);
      height: var(--color-swatches-size, 24px);
      min-height: var(--color-swatches-size, 24px);
      padding: 0;
      border: none;

      box-shadow: inset 0 0 0 1px ${t.colorFillSecondary};

      &:hover {
        box-shadow:
          inset 0 0 0 1px ${t.colorFillSecondary},
          0 0 0 2px ${t.colorText};
      }

      .${G}-color-picker-color-block {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: inherit;
      }
    `,transparent:e`
      background-image: conic-gradient(
        ${t.colorFillSecondary} 25%,
        transparent 25% 50%,
        ${t.colorFillSecondary} 50% 75%,
        transparent 75% 100%
      );
      background-size: 50% 50%;
    `}))})),q,J,Y,ge=e((()=>{O(),ne(),m(),_(),M(),he(),q=t(n(),1),J=t(r(),1),R(),W(),me(),de(),B(),Y=({enableColorPicker:e,enableColorSwatches:t=!0,defaultValue:n,value:r,style:i,colors:o,onChange:s,size:c=24,shape:l=`circle`,texts:u,ref:d,...f})=>{let[p,m]=V(n,{defaultValue:n,onChange:s,value:r}),h=(0,q.useMemo)(()=>({"--color-swatches-size":`${c}px`}),[c]),g=(0,q.useMemo)(()=>p&&p!==U.colorPrimary&&!o.some(e=>e.color===p),[p,o]);return(0,J.jsxs)(te,{horizontal:!0,gap:6,ref:d,style:{...h,flexWrap:`wrap`,...i},...f,children:[t&&o.map((e,t)=>{let n=e.color||U.colorPrimary,r=!p&&!e.color||n===p,i=e.color===`transparent`||e.color&&!e.color.startsWith(`var(`)&&(()=>{try{return pe(e.color).alpha()===0}catch{return!1}})();return(0,J.jsx)(C,{title:e.title,children:(0,J.jsx)(a,{className:H(K.container,i&&K.transparent,r&&K.active),style:{background:i?void 0:n,borderRadius:l===`circle`?`50%`:U.borderRadius},onClick:()=>m(e.color||void 0),children:r&&(0,J.jsx)(re,{color:`color-mix(in srgb, ${ee(n)} 33%, transparent)`,icon:z,size:{size:14,strokeWidth:4},style:{pointerEvents:`none`}})})},e?.key||t)}),e&&(0,J.jsx)(C,{title:u?.custom||`Custom`,children:(0,J.jsx)(L,{disabledAlpha:!0,arrow:!1,defaultValue:U.colorPrimary,format:`hex`,value:t?void 0:p,className:H(K.picker,t&&K.conic,g&&K.active),presets:t?void 0:[{colors:o.map(e=>e.color),label:u?.presets||`Presets`}],style:{borderRadius:l===`circle`?`50%`:U.borderRadius},onChangeComplete:e=>{e.toHexString()===U.colorPrimary?m(``):m(e.toHexString())}})})]})},Y.displayName=`ColorSwatches`})),X,Z,Q,$=e((()=>{l(),d(),b(),x(),s(),P(),h(),ie(),N(),ce(),w(),se(),ae(),E(),ue(),T(),oe(),X={blue:p.dark[9],cyan:u.dark[9],geekblue:i.dark[9],gold:f.dark[9],green:c.dark[9],lime:g.dark[9],magenta:o.dark[9],orange:F.dark[9],purple:I.dark[9],red:v.dark[9],volcano:le.dark[9],yellow:D.dark[9]},X.red,X.orange,X.gold,X.yellow,X.lime,X.green,X.cyan,X.blue,X.geekblue,X.purple,X.magenta,X.volcano,Z={mauve:S.dark[9],olive:A.dark[9],sage:y.dark[9],sand:k.dark[9],slate:j.dark[9]},Z.mauve,Z.slate,Z.sage,Z.olive,Z.sand,Q=(e,t)=>Object.entries(e===`primary`?X:Z).find(e=>e[1]===t)?.[0]})),_e=e((()=>{$()}));export{X as a,Z as i,Q as n,Y as o,$ as r,ge as s,_e as t};