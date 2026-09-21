import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{C as n,E as r,T as i}from"../vendor/vendor-react-B9HSWrpN.js";import{B as a,Kt as o,Xn as s,Zn as c,at as l,it as u,qt as d,z as f}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Mt as p,r as m}from"../vendor/vendor-antd-BWSxhuJE.js";import{Xl as h,ig as g,og as _,t as v}from"../vendor/vendor-icons-vienkZi5.js";import{Ur as y,zr as b}from"./app-const-BpgKVRXh.js";import{Af as x,Ff as S,If as C,Mt as w,Nt as T,jf as E,pF as D,uF as O}from"./index-w64_zsxD.js";import{n as k,t as A}from"./navigation-PeFN4gvI.js";import{n as j,t as M}from"./useWorkspaceAwareNavigate-BbajQ7ta.js";import{n as N,t as P}from"./appNavigate-D-we3vxF.js";var F,I,L,R,z=e((()=>{a(),v(),F=t(r()),S(),y(),N(),E(),I=t(i()),L=`lobe-back-button`,R=(0,F.memo)(({to:e=`/`,onClick:t,...n})=>{let r=x(e,C());return(0,I.jsx)(`a`,{href:r,onClick:e=>{t?.(e),!e.defaultPrevented&&(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0||(e.preventDefault(),P(r,{escape:!0})))},children:(0,I.jsx)(f,{icon:_,id:L,size:b,...n})})})})),B,V,H,U,W,G,K=e((()=>{d(),c(),l(),m(),O(),v(),B=t(r()),V=t(n()),y(),M(),A(),z(),T(),H=t(i()),U=`ant`,W=D(({css:e,cssVar:t})=>({breadcrumb:e`
    ol {
      align-items: center;
    }
    .${U}-breadcrumb-separator {
      margin-inline: 4px;
    }
    .${U}-breadcrumb-link {
      display: flex !important;
      align-items: center !important;
      font-size: 12px;
      color: ${t.colorTextDescription};
    }
    a.${U}-breadcrumb-link {
      &:hover {
        color: ${t.colorText};
      }
    }
  `,container:e`
    overflow: hidden;
  `})),G=(0,B.memo)(({left:e,right:t,backTo:n=`/`,showBack:r=!0,breadcrumb:i=[],homeItem:a,showTogglePanelButton:c=!0})=>{let l=j(),d=e?(0,H.jsxs)(o,{horizontal:!0,align:`center`,flex:1,gap:2,style:{overflow:`hidden`},children:[r&&(0,H.jsx)(R,{size:b,to:n}),e&&typeof e==`string`?(0,H.jsx)(u,{ellipsis:!0,fontSize:16,weight:500,children:e}):e]}):(0,H.jsx)(o,{flex:1,paddingInline:6,children:(0,H.jsx)(p,{className:W.breadcrumb,separator:(0,H.jsx)(s,{icon:g}),items:[a??{href:`/`,title:(0,H.jsx)(s,{icon:h})},...i].map(e=>({...e,onClick:t=>{if(k(t))return;let n=e.href;n&&(t.preventDefault(),t.stopPropagation(),(0,V.flushSync)(()=>l(n)))}}))})});return(0,H.jsxs)(o,{horizontal:!0,align:`center`,className:W.container,flex:`none`,justify:`space-between`,padding:`8px 6px`,children:[d,(0,H.jsxs)(o,{horizontal:!0,align:`center`,gap:2,justify:`flex-end`,children:[c&&(0,H.jsx)(w,{}),t]})]})})}));export{z as i,K as n,L as r,G as t};