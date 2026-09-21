import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{Bt as i,Ht as a,Kt as o,Ut as s,Vt as c,Xn as l,Zn as u,at as d,it as f,qt as p}from"../vendor/vendor-ui-core-BmtybT1r.js";import{gF as m,hF as h,pF as g,uF as _}from"./index-w64_zsxD.js";import{n as v,t as y}from"./NeuralNetworkLoading-DiI77SUR.js";import{n as b,t as x}from"./_virtual_lobe-ui-named__ContextMenuTrigger-DAznVU5g.js";import{n as S,t as C}from"./navigation-PeFN4gvI.js";var w,T,E=e((()=>{w=t(n()),T=e=>{let t=typeof e==`function`,[n,r]=(0,w.useState)(!1);return{mount:(0,w.useCallback)(()=>{t&&r(!0)},[t]),node:t?n?e():null:e}}})),D,O,k,A,j,M,N=e((()=>{s(),c(),x(),p(),u(),d(),_(),D=t(n()),v(),C(),E(),O=t(r()),k=`nav-item-actions`,A=`nav-item-content`,j=g(({css:e})=>({container:e`
    user-select: none;
    overflow: hidden;
    min-width: 32px;

    /* focus-visible, not focus-within: closing a dropdown hands focus back to its
       trigger, which would pin the actions open after the pointer has left. */
    &:hover,
    &:has(.${k} :focus-visible),
    &:has([data-popup-open]) {
      .${k} {
        pointer-events: auto;
        opacity: 1;
      }

      /* Fade the covered text itself instead of painting a row-colored plate over it,
         so the overlay matches any row background (hover / active / none). */
      .${A} {
        mask-image: linear-gradient(
          to right,
          #000 calc(100% - 56px),
          transparent calc(100% - 28px)
        );
      }
    }

    /* Overlay instead of in-flow so revealing the actions never re-truncates the title. */
    .${k} {
      pointer-events: none;

      position: absolute;
      inset-block: 0;
      inset-inline-end: 0;

      padding-inline-end: 6px;

      opacity: 0;
    }
  `})),M=(0,D.memo)(({className:e,actions:t,contextMenuItems:n,active:r,href:s,icon:c,iconSize:u=18,title:d,titleColor:p,description:g,onClick:_,disabled:v,loading:x,extra:C,slots:w,style:E,onFocus:D,onPointerEnter:M,...N})=>{let{mount:P,node:F}=T(t),I=e=>{P(),M?.(e)},L=e=>{P(),D?.(e)},R=r?h.colorText:h.colorTextDescription,z=p??(r?h.colorText:h.colorTextSecondary),B=r?`filled`:`borderless`,{titlePrefix:V,iconPostfix:H}=w||{},U=s?{as:`a`,href:s}:{},W=s||v||E?{...s?{color:`inherit`,textDecoration:`none`}:void 0,...v?{cursor:`not-allowed`,opacity:.5}:void 0,...E}:void 0,G=(0,O.jsxs)(a,{horizontal:!0,align:`center`,className:m(j.container,e),clickable:!v,gap:8,height:g?void 0:36,paddingBlock:g?8:void 0,paddingInline:4,style:W,variant:B,onClick:e=>{s&&!S(e)&&e.preventDefault(),!v&&_?.(e)},...U,...N,onFocus:L,onPointerEnter:I,children:[c&&(0,O.jsx)(i,{flex:`none`,height:g?22:28,style:g?{alignSelf:`flex-start`}:void 0,width:28,children:x?(0,O.jsx)(y,{size:u}):(0,O.jsx)(l,{color:R,icon:c,size:u})}),H,(0,O.jsxs)(o,{horizontal:!0,align:`center`,className:A,flex:1,gap:8,style:{overflow:`hidden`},children:[V,g?(0,O.jsxs)(o,{flex:1,gap:3,style:{overflow:`hidden`},children:[(0,O.jsx)(f,{color:z,ellipsis:{tooltipWhenOverflow:!0},children:d}),g]}):(0,O.jsx)(f,{color:z,style:{flex:1},ellipsis:{tooltipWhenOverflow:!0},children:d}),C&&(0,O.jsx)(o,{horizontal:!0,align:`center`,gap:2,justify:`flex-end`,onClick:e=>{e.preventDefault(),e.stopPropagation()},children:C})]}),t&&(0,O.jsx)(o,{horizontal:!0,align:`center`,className:k,gap:2,justify:`flex-end`,onClick:e=>{e.preventDefault(),e.stopPropagation()},children:F})]});return n?(0,O.jsx)(b,{items:n,children:G}):G}),M.displayName=`NavItem`}));export{N as n,M as t};