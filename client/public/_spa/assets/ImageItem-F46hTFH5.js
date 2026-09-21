import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{B as i,z as a}from"../vendor/vendor-ui-core-BmtybT1r.js";import{mt as o,t as s}from"../vendor/vendor-icons-vienkZi5.js";import{FD as c,ID as l,gF as u,uF as d}from"./index-w64_zsxD.js";import{n as f,t as p}from"./Image-DUXUuCIH.js";import{n as m,t as h}from"./usePlatform-CYCJpde9.js";var g=e((()=>{})),_,v,y,b,x=e((()=>{c(),f(),i(),d(),s(),_=t(n()),h(),g(),v=t(r()),y={deleteButton:l(`acss-16wdar8`,[`.acss-16wdar8{color:#fff;background:var(--ant-color-bg-mask);}`,`.acss-16wdar8:hover{background:var(--ant-color-error);}`],`
    color: #fff;
    background: var(--ant-color-bg-mask);

    &:hover {
      background: var(--ant-color-error);
    }
  `),editableImage:l(`acss-it64i1`,[`.acss-it64i1{background:var(--ant-color-bg-container);box-shadow:0 0 0 1px var(--ant-color-fill) inset;}`],`
    background: var(--ant-color-bg-container);
    box-shadow: 0 0 0 1px var(--ant-color-fill) inset;
  `),image:l(`acss-12wqot4`,[`.acss-12wqot4{margin-block:0!important;}`],`
    margin-block: 0 !important;
  `)},b=(0,_.memo)(({className:e,style:t,editable:n,alt:r,onRemove:i,url:s,loading:c,alwaysShowClose:l,preview:d,ratio:f,width:h,height:g})=>{let _=n?64:`100%`,{isSafari:b}=m(),x=f&&f>0?f:h&&h>0&&g&&g>0?h/g:void 0;return(0,v.jsx)(p,{alt:r||``,alwaysShowActions:l,classNames:{wrapper:u(y.image,n&&y.editableImage,e)},height:b?`auto`:`100%`,isLoading:c,preview:d,size:_,src:s,actions:n&&(0,v.jsx)(a,{glass:!0,className:y.deleteButton,icon:o,size:`small`,onClick:e=>{e.stopPropagation(),i?.()}}),style:{aspectRatio:x,height:x||b?`auto`:`100%`,width:`100%`,...t}})})}));export{x as n,b as t};