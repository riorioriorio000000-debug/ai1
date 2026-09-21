import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{Kt as i,qt as a}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Cn as o,FD as s,ID as c,Sn as l,gF as u,mF as d,uF as f,wF as p}from"./index-w64_zsxD.js";import{Br as m,In as h,Mn as g,Vr as _,a as v,n as y,zn as b}from"./chat-D3ilvURJ.js";import{M as x,_ as S,a as C,b as w,g as T,j as E,o as D,x as O}from"./TopicChatDrawer-_v3kDYDN.js";import{n as k,t as A}from"./DraggablePanel-D0hkUwih.js";var j,M,N,P,F=e((()=>{s(),k(),f(),j=t(n()),w(),E(),y(),g(),_(),M=t(r()),N={content:c(`acss-bcybfo`,[`.acss-bcybfo{position:relative;overflow:hidden;display:flex;flex-direction:column;height:100%;min-height:100%;max-height:100%;background:var(--ant-color-bg-container);}`],`
    position: relative;

    overflow: hidden;
    display: flex;
    flex-direction: column;

    height: 100%;
    min-height: 100%;
    max-height: 100%;

    background: var(--ant-color-bg-container);
  `),drawer:c(`acss-z2na11`,[`.acss-z2na11{z-index:10;height:100%;background:var(--ant-color-bg-container);}`],`
    z-index: 10;
    height: 100%;
    background: var(--ant-color-bg-container);
  `)},P=(0,j.memo)(({children:e})=>{let[t,n]=v(e=>[h.showStandalonePortal(e),b.showThread(e)]),{maxWidth:r,minWidth:i,updateWidth:a,width:o}=x(O()??(n?m.Thread:null)),[s,c]=(0,j.useState)(o);s!==o&&c(o);let{lg:l}=p();return(0,M.jsx)(A,{className:N.drawer,defaultSize:{width:s},expand:t,expandable:!1,maxWidth:r,minWidth:i,mode:l?`fixed`:`float`,placement:`right`,showHandleWhenCollapsed:!1,showHandleWideArea:!1,size:{height:`100%`,width:o},classNames:{content:N.content},onSizeChange:(e,t)=>{if(!t)return;let n=typeof t.width==`string`?Number.parseInt(t.width):t.width;!n||n===o||(c(n),a(n))},children:(0,M.jsx)(j.Activity,{mode:t?`visible`:`hidden`,name:`AgentPortal`,children:e})})})})),I,L,R,z=e((()=>{a(),f(),I=t(r()),L=d`
  :has(.portal-artifact) {
    overflow: hidden;
    padding-block-end: 12px;
  }
`,R=({children:e})=>(0,I.jsx)(i,{className:u(L,`portal-body`),height:`100%`,style:{flex:1,height:0,position:`relative`},width:`100%`,children:e})})),B,V,H=e((()=>{w(),D(),z(),B=t(r()),V=()=>(0,B.jsx)(C,{renderBody:e=>(0,B.jsx)(R,{children:e}),viewType:O()})})),U=e((()=>{S()})),W,G,K,q=e((()=>{W=t(n()),o(),H(),U(),G=t(r()),K=(0,W.memo)(({mobile:e})=>(0,G.jsx)(W.Suspense,{fallback:(0,G.jsx)(l,{header:!1,variant:`list`}),children:(0,G.jsx)(e?T:V,{})})),K.displayName=`PortalPanel`}));export{F as i,q as n,P as r,K as t};