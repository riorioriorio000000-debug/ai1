import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{Xn as o,Zn as s}from"../vendor/vendor-ui-core-BmtybT1r.js";import{A as c,Md as l,Ml as u,t as d,ug as f,ut as p,vp as m}from"../vendor/vendor-icons-vienkZi5.js";import{FD as h,ID as g}from"./index-w64_zsxD.js";var _,v,y,b,x,S,C,w=e((()=>{h(),s(),d(),_=t(i()),r(),v=t(a()),y={icon:l,key:`visibilityConfirm.makePrivate.itemLibrary`,tone:`info`},b={makePrivate:{items:[{icon:m,key:`visibilityConfirm.makePrivate.itemAccess`,tone:`danger`},{icon:p,key:`visibilityConfirm.makePrivate.itemReferences`,tone:`info`},{emphasis:!0,icon:u,key:`visibilityConfirm.makePrivate.itemLoaded`,showIrreversible:!0,tone:`danger`}]},publish:{items:[{icon:c,key:`visibilityConfirm.publish.itemVisible`,tone:`info`},{icon:f,key:`visibilityConfirm.publish.itemReversible`,tone:`ok`},{emphasis:!0,icon:u,key:`visibilityConfirm.publish.itemLoaded`,showIrreversible:!0,tone:`danger`}]}},x={list:g(`acss-e0scem`,[`.acss-e0scem{display:flex;flex-direction:column;gap:8px;margin:0;padding:12px;border-radius:8px;list-style:none;background:var(--ant-color-fill-quaternary);}`],`
    display: flex;
    flex-direction: column;
    gap: 8px;

    margin: 0;
    padding: 12px;
    border-radius: 8px;

    list-style: none;

    background: var(--ant-color-fill-quaternary);
  `),row:g(`acss-1rnnigw`,[`.acss-1rnnigw{display:flex;gap:10px;align-items:flex-start;font-size:13px;line-height:1.55;color:var(--ant-color-text);}`],`
    display: flex;
    gap: 10px;
    align-items: flex-start;

    font-size: 13px;
    line-height: 1.55;
    color: var(--ant-color-text);
  `),rowIcon:g(`acss-fo4epw`,[`.acss-fo4epw{flex:none;margin-block-start:3px;color:var(--ant-color-text-tertiary);}`],`
    flex: none;
    margin-block-start: 3px;
    color: var(--ant-color-text-tertiary);
  `),rowIconDanger:g(`acss-zknb5i`,[`.acss-zknb5i{color:var(--ant-color-error);}`],`
    color: var(--ant-color-error);
  `),rowIconOk:g(`acss-1agh9uj`,[`.acss-1agh9uj{color:var(--ant-color-success);}`],`
    color: var(--ant-color-success);
  `),rowIconInfo:g(`acss-j5912s`,[`.acss-j5912s{color:var(--ant-color-info);}`],`
    color: var(--ant-color-info);
  `),emphasis:g(`acss-1av9vxy`,[`.acss-1av9vxy{font-weight:500;}`],`
    font-weight: 500;
  `),suffix:g(`acss-nt432w`,[`.acss-nt432w{color:var(--ant-color-text-tertiary);}`],`
    color: var(--ant-color-text-tertiary);
  `)},S=e=>e===`danger`?x.rowIconDanger:e===`ok`?x.rowIconOk:x.rowIconInfo,C=(0,_.memo)(({inLibrary:e,variant:t})=>{let{t:r}=n(`common`),i=b[t],a=r(`visibilityConfirm.irreversible`),s=t===`makePrivate`&&e?[...i.items.slice(0,-1),y,...i.items.slice(-1)]:i.items;return(0,v.jsx)(`ul`,{className:x.list,children:s.map(e=>{let t=e.icon;return(0,v.jsxs)(`li`,{className:x.row,children:[(0,v.jsx)(`span`,{className:`${x.rowIcon} ${S(e.tone)}`,children:(0,v.jsx)(o,{icon:t,size:14})}),(0,v.jsxs)(`span`,{className:e.emphasis?x.emphasis:void 0,children:[r(e.key),e.showIrreversible&&(0,v.jsx)(`span`,{className:x.suffix,children:a})]})]},e.key)})})}),C.displayName=`VisibilityConfirmContent`}));export{w as n,C as t};