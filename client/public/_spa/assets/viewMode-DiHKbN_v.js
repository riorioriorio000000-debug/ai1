import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{Bt as i,Kt as a,Vt as o,l as s,qt as c,u as l}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Dn as u,E_ as d,En as f,T_ as p,hF as m,pF as h,uF as g,vF as _}from"./index-w64_zsxD.js";var v,y,b=e((()=>{v=1040,y=e=>e?v:860})),x,S,C=e((()=>{o(),c(),l(),u(),g(),b(),x=t(r()),S=({columnWidths:e={date:160,name:400,size:140,uploader:180},count:t=6,showUploader:n=!0})=>{let r=e=>1-e/(t-1)*.8;return(0,x.jsx)(a,{children:Array.from({length:t}).map((t,o)=>(0,x.jsxs)(a,{horizontal:!0,align:`center`,height:48,paddingInline:8,style:{background:o%2==0?m.colorFillQuaternary:`transparent`,borderBlockEnd:`1px solid ${m.colorBorderSecondary}`,minWidth:y(n),opacity:r(o)},children:[(0,x.jsx)(i,{height:40,style:{paddingInline:4},children:(0,x.jsx)(s,{disabled:!0})}),(0,x.jsxs)(a,{horizontal:!0,align:`center`,style:{flexShrink:0,maxWidth:e.name,minWidth:e.name,paddingInline:8,width:e.name},children:[(0,x.jsx)(f.Avatar,{shape:`square`,size:24,style:{marginInline:8}}),(0,x.jsx)(f,{height:16,width:`60%`})]}),(0,x.jsx)(a,{style:{flexShrink:0,paddingInline:`0 24px`},width:e.date,children:(0,x.jsx)(f,{height:16,width:`80%`})}),n&&(0,x.jsxs)(a,{horizontal:!0,align:`center`,gap:8,style:{flexShrink:0,paddingInline:`0 24px`},width:e.uploader,children:[(0,x.jsx)(f.Avatar,{size:20}),(0,x.jsx)(f,{height:16,width:`70%`})]}),(0,x.jsx)(a,{style:{flexShrink:0,paddingInline:`0 24px`},width:e.size,children:(0,x.jsx)(f,{height:16,width:`60%`})})]},o))})}})),w,T,E,D,O,k=e((()=>{g(),w=t(n()),T=t(r()),E=_`
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.6;
  }
`,D=h(({css:e,cssVar:t})=>({card:e`
    border-radius: ${t.borderRadiusLG};
    background: ${t.colorFillQuaternary};
    animation: ${E} 1.5s ease-in-out infinite;
  `,grid:e`
    display: grid;
    gap: 16px;
    padding-block: 12px;
    padding-inline: 24px;
  `})),O=(0,w.memo)(({columnCount:e})=>{let t=[180,220,200,190,240,210,200,230,180,220,210,190],n=Math.max(Math.min(e*3,12),6),r=e=>1-e/(n-1)*.8;return(0,T.jsx)(`div`,{className:D.grid,style:{gridTemplateColumns:`repeat(${e}, 1fr)`},children:Array.from({length:n}).map((e,n)=>(0,T.jsx)(`div`,{className:D.card,style:{height:t[n%t.length],opacity:r(n)}},n))})}),O.displayName=`MasonryViewSkeleton`})),A,j,M,N,P,F,I,L,R,z=e((()=>{A=t(n()),j=e=>e<768?2:e<1024?3:e<1536?4:5,M=16,N=2,P=5,F=e=>Math.min(P,Math.max(N,Math.floor((e+M)/216))),I=()=>{let[e,t]=(0,A.useState)(()=>j(typeof window>`u`?1024:window.innerWidth));return(0,A.useLayoutEffect)(()=>{let e=()=>t(j(window.innerWidth));return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),e},L=e=>{let t=window.getComputedStyle(e);return e.clientWidth-Number.parseFloat(t.paddingInlineStart||`0`)-Number.parseFloat(t.paddingInlineEnd||`0`)},R=e=>{let t=I(),[n,r]=(0,A.useState)();return(0,A.useLayoutEffect)(()=>{if(!e)return;let t=()=>r(F(L(e)));t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[e]),n??t}})),B,V,H=e((()=>{d(),B=new Set([p.Audios,p.Images,p.Videos,p.Websites]),V=(e,t)=>!t&&B.has(e)?`masonry`:`list`}));export{I as a,S as c,b as d,R as i,C as l,H as n,O as o,z as r,k as s,V as t,y as u};