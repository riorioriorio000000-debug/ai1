import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r,i,m as a}from"../vendor/vendor-react-B9HSWrpN.js";import{q as o,r as s}from"../vendor/vendor-antd-BWSxhuJE.js";import{pF as c,uF as l,wF as u}from"./index-w64_zsxD.js";import{n as d,t as f}from"./useWorkspaceAwareNavigate-BbajQ7ta.js";import{n as p,r as m}from"./const-Cx_ztRKW.js";import{n as h,t as g}from"./useQuery-CgXfiAnB.js";var _,v,y,b,x,S,C=e((()=>{s(),l(),_=t(n()),i(),f(),g(),m(),v=t(r()),y=`lobe-mobile-scroll-container`,b=`ant`,x=c(({css:e,cssVar:t})=>({page:e`
      .${b}-pagination-item-active {
        border-color: ${t.colorFillSecondary};
        background: ${t.colorFillSecondary};

        &:hover {
          border-color: ${t.colorFill};
          background: ${t.colorFill};
        }
      }
    `})),S=(0,_.memo)(({tab:e,currentPage:t,total:n,pageSize:r})=>{let{page:i}=h(),s=d(),c=a(),{mobile:l}=u();return(0,v.jsx)(o,{className:x.page,current:i?Number(i):t,"data-testid":`pagination`,pageSize:r,showSizeChanger:!1,total:n,style:{alignSelf:`flex-end`},onChange:t=>{let n=new URLSearchParams(c.search);n.set(`page`,String(t)),s(`/community/${e}?${n.toString()}`);let r=l?y:p,i=document?.querySelector(`#${r}`);i&&i.scrollTo({behavior:`smooth`,top:0})}})})}));export{C as n,S as t};