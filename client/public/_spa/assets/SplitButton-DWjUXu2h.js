import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{Mt as i,Nt as a}from"../vendor/vendor-ui-core-BmtybT1r.js";import{cg as o,t as s}from"../vendor/vendor-icons-vienkZi5.js";import{FD as c,ID as l,gF as u,uF as d}from"./index-w64_zsxD.js";import{n as f,t as p}from"./DropdownMenu-1ae8j9bI.js";var m,h,g,_,v,y,b,x=e((()=>{c(),a(),f(),m=t(n(),1),h=t(r(),1),d(),s(),g=(0,m.createContext)({}),_={interactionDisabled:l(`acss-1p7fzc9`,[`.acss-1p7fzc9{opacity:0.5;}`,`.acss-1p7fzc9>:where(button, a):disabled,.acss-1p7fzc9>:where(button, a)[aria-disabled='true']{opacity:1;}`],`
    opacity: 0.5;

    & > :where(button, a):disabled,
    & > :where(button, a)[aria-disabled='true'] {
      opacity: 1;
    }
  `),solid:l(`acss-8f8o2y`,[`.acss-8f8o2y>:where(button, a):last-of-type::before{pointer-events:none;content:'';position:absolute;inset-block:0;inset-inline-start:0;width:1px;opacity:0.2;background:currentcolor;}`],`
    & > :where(button, a):last-of-type::before {
      pointer-events: none;
      content: '';

      position: absolute;
      inset-block: 0;
      inset-inline-start: 0;

      width: 1px;

      opacity: 0.2;
      background: currentcolor;
    }
  `),solidDanger:l(`acss-1999i3x`,[`.acss-1999i3x:has(> :where(button, a):hover:not(:disabled, [aria-disabled='true']))>:where(button, a){border-color:var(--ant-color-error-hover);background:var(--ant-color-error-hover);}`,`.acss-1999i3x:has(> :where(button, a):active:not(:disabled, [aria-disabled='true']))>:where(button, a){border-color:var(--ant-color-error-active);background:var(--ant-color-error-active);}`],`
    &:has(> :where(button, a):hover:not(:disabled, [aria-disabled='true'])) > :where(button, a) {
      border-color: var(--ant-color-error-hover);
      background: var(--ant-color-error-hover);
    }

    &:has(> :where(button, a):active:not(:disabled, [aria-disabled='true'])) > :where(button, a) {
      border-color: var(--ant-color-error-active);
      background: var(--ant-color-error-active);
    }
  `),solidPrimary:l(`acss-m9dgjz`,[`.acss-m9dgjz:has(> :where(button, a):hover:not(:disabled, [aria-disabled='true']))>:where(button, a){border-color:var(--ant-color-primary-hover);background:var(--ant-color-primary-hover);}`,`.acss-m9dgjz:has(> :where(button, a):active:not(:disabled, [aria-disabled='true']))>:where(button, a){border-color:var(--ant-color-primary-active);background:var(--ant-color-primary-active);}`],`
    &:has(> :where(button, a):hover:not(:disabled, [aria-disabled='true'])) > :where(button, a) {
      border-color: var(--ant-color-primary-hover);
      background: var(--ant-color-primary-hover);
    }

    &:has(> :where(button, a):active:not(:disabled, [aria-disabled='true'])) > :where(button, a) {
      border-color: var(--ant-color-primary-active);
      background: var(--ant-color-primary-active);
    }
  `),splitButton:l(`acss-1l1zht6`,[`.acss-1l1zht6{display:inline-flex;flex-direction:row;}`,`.acss-1l1zht6>:where(button, a):first-of-type{border-start-end-radius:0;border-end-end-radius:0;}`,`.acss-1l1zht6>:where(button, a):last-of-type{margin-inline-start:-1px;border-start-start-radius:0;border-end-start-radius:0;}`],`
    display: inline-flex;
    flex-direction: row;

    & > :where(button, a):first-of-type {
      border-start-end-radius: 0;
      border-end-end-radius: 0;
    }

    & > :where(button, a):last-of-type {
      margin-inline-start: -1px;
      border-start-start-radius: 0;
      border-end-start-radius: 0;
    }
  `)},v=({children:e,className:t,style:n,danger:r,disabled:i,loading:a,size:o,type:s})=>(0,h.jsx)(g,{value:(0,m.useMemo)(()=>({danger:r,disabled:i,loading:a,size:o,type:s}),[r,i,a,o,s]),children:(0,h.jsx)(`div`,{style:n,className:u(_.splitButton,s===`primary`&&_.solid,s===`primary`&&(r?_.solidDanger:_.solidPrimary),(i||a)&&_.interactionDisabled,t),children:e})}),y=e=>(0,h.jsx)(i,{...(0,m.use)(g),...e}),b=({icon:e=(0,h.jsx)(o,{size:14}),disabled:t,...n})=>{let r=(0,m.use)(g),a=t||r.disabled||r.loading;return(0,h.jsx)(p,{...n,disabled:a,children:(0,h.jsx)(i,{...r,disabled:a,icon:e})})},v.Main=y,v.Menu=b}));export{x as n,v as t};