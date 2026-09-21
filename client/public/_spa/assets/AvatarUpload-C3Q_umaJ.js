import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{Xn as i,Zn as a,i as o,r as s}from"../vendor/vendor-ui-core-BmtybT1r.js";import{W as c,i as l,r as u}from"../vendor/vendor-antd-BWSxhuJE.js";import{Ma as d,c as f,t as p,wc as m}from"../vendor/vendor-icons-vienkZi5.js";import{FD as h,ID as g,hF as _,jd as v,kd as y,uF as b}from"./index-w64_zsxD.js";import{n as x,t as S}from"./uploadFIle-BroCag9Z.js";var C,w,T,E,D=e((()=>{h(),a(),o(),u(),b(),p(),C=t(n()),v(),x(),w=t(r()),T={delete:g(`acss-1eit8kn`,[`.acss-1eit8kn{cursor:pointer;position:absolute;z-index:2;inset-block-start:2px;inset-inline-end:2px;display:flex;align-items:center;justify-content:center;width:20px;height:20px;border:2px solid var(--ant-color-bg-container);border-radius:50%;color:var(--ant-color-text-light-solid);opacity:0;background:var(--ant-color-error);transition:opacity var(--ant-motion-duration-mid) ease;}`],`
    cursor: pointer;

    position: absolute;
    z-index: 2;
    inset-block-start: 2px;
    inset-inline-end: 2px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;
    border: 2px solid var(--ant-color-bg-container);
    border-radius: 50%;

    color: var(--ant-color-text-light-solid);

    opacity: 0;
    background: var(--ant-color-error);

    transition: opacity var(--ant-motion-duration-mid) ease;
  `),overlay:g(`acss-19zs81v`,[`.acss-19zs81v{cursor:pointer;position:absolute;z-index:1;inset:0;display:flex;align-items:center;justify-content:center;border-radius:8px;opacity:0;background:var(--ant-color-bg-mask);transition:opacity var(--ant-motion-duration-mid) ease;}`],`
    cursor: pointer;

    position: absolute;
    z-index: 1;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    opacity: 0;
    background: var(--ant-color-bg-mask);

    transition: opacity var(--ant-motion-duration-mid) ease;
  `),wrapper:g(`acss-11ev5yr`,[`.acss-11ev5yr{cursor:pointer;position:relative;flex:none;border-radius:8px;}`,`.acss-11ev5yr:hover .avatar-edit-overlay,.acss-11ev5yr:hover .avatar-delete-badge{opacity:1;}`],`
    cursor: pointer;
    position: relative;
    flex: none;
    border-radius: 8px;

    &:hover .avatar-edit-overlay,
    &:hover .avatar-delete-badge {
      opacity: 1;
    }
  `)},E=(0,C.memo)(({value:e,onUpload:t,onDelete:n,allowDelete:r,loading:a,compressSize:o=256,shape:u=`square`,size:p=72,title:h})=>(0,w.jsx)(l,{beforeUpload:(0,C.useMemo)(()=>S(async e=>{let n=new Image;n.src=e,await new Promise((e,t)=>{n.addEventListener(`load`,e),n.addEventListener(`error`,t)});let r=y({img:n,size:o}),i=await(await fetch(r)).blob();t?.(new File([i],`avatar.webp`,{type:`image/webp`}))}),[o,t]),itemRender:()=>void 0,maxCount:1,children:(0,w.jsx)(c,{indicator:(0,w.jsx)(i,{spin:!0,icon:m}),spinning:!!a,children:(0,w.jsxs)(`div`,{className:T.wrapper,children:[(0,w.jsx)(s,{avatar:e,shape:u,size:p,title:h}),(0,w.jsx)(`div`,{className:`${T.overlay} avatar-edit-overlay`,children:(0,w.jsx)(i,{color:_.colorTextLightSolid,icon:d,size:Math.round(p/3)})}),r&&(0,w.jsx)(`div`,{className:`${T.delete} avatar-delete-badge`,onClick:e=>{e.stopPropagation(),n?.()},children:(0,w.jsx)(i,{icon:f,size:12})})]})})})),E.displayName=`AvatarUpload`}));export{D as n,E as t};