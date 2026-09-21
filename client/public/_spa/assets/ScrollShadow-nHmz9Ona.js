import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{Kt as i,qt as a}from"../vendor/vendor-ui-core-BmtybT1r.js";import{FD as o,ID as s,RC as c,cF as l,dE as u,fE as d,gF as f,lF as p,uF as m,zC as h}from"./index-w64_zsxD.js";var g,_,v=e((()=>{o(),p(),g={bottomShadow:s(`acss-eb16so`,[`.acss-eb16so{mask-image:linear-gradient(
        180deg,
        #000 calc(100% - var(--scroll-shadow-size, 40%)),
        transparent
      );}`],`
      mask-image: linear-gradient(
        180deg,
        #000 calc(100% - var(--scroll-shadow-size, 40%)),
        transparent
      );
    `),hideScrollBar:s(`acss-kuaosn`,[`.acss-kuaosn{scrollbar-width:none;-ms-overflow-style:none;}`,`.acss-kuaosn::-webkit-scrollbar{display:none;}`],`
      scrollbar-width: none;

      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }
    `),horizontal:s(`acss-1aasto2`,[`.acss-1aasto2{overflow-x:auto;}`],`
      overflow-x: auto;
    `),leftRightShadow:s(`acss-1xdugw7`,[`.acss-1xdugw7{mask-image:linear-gradient(
        to right,
        #000,
        #000,
        transparent 0,
        #000 var(--scroll-shadow-size, 40%),
        #000 calc(100% - var(--scroll-shadow-size, 40%)),
        transparent
      );}`],`
      mask-image: linear-gradient(
        to right,
        #000,
        #000,
        transparent 0,
        #000 var(--scroll-shadow-size, 40%),
        #000 calc(100% - var(--scroll-shadow-size, 40%)),
        transparent
      );
    `),leftShadow:s(`acss-1ngmz4i`,[`.acss-1ngmz4i{mask-image:linear-gradient(
        270deg,
        #000 calc(100% - var(--scroll-shadow-size, 40%)),
        transparent
      );}`],`
      mask-image: linear-gradient(
        270deg,
        #000 calc(100% - var(--scroll-shadow-size, 40%)),
        transparent
      );
    `),rightShadow:s(`acss-klw7x9`,[`.acss-klw7x9{mask-image:linear-gradient(
        90deg,
        #000 calc(100% - var(--scroll-shadow-size, 40%)),
        transparent
      );}`],`
      mask-image: linear-gradient(
        90deg,
        #000 calc(100% - var(--scroll-shadow-size, 40%)),
        transparent
      );
    `),root:s(`acss-656bio`,[`.acss-656bio{position:relative;overflow:hidden;}`],`
      position: relative;
      overflow: hidden;
    `),topBottomShadow:s(`acss-1hr94fq`,[`.acss-1hr94fq{mask-image:linear-gradient(
        #000,
        #000,
        transparent 0,
        #000 var(--scroll-shadow-size, 40%),
        #000 calc(100% - var(--scroll-shadow-size, 40%)),
        transparent
      );}`],`
      mask-image: linear-gradient(
        #000,
        #000,
        transparent 0,
        #000 var(--scroll-shadow-size, 40%),
        #000 calc(100% - var(--scroll-shadow-size, 40%)),
        transparent
      );
    `),topShadow:s(`acss-gn88t0`,[`.acss-gn88t0{mask-image:linear-gradient(
        0deg,
        #000 calc(100% - var(--scroll-shadow-size, 40%)),
        transparent
      );}`],`
      mask-image: linear-gradient(
        0deg,
        #000 calc(100% - var(--scroll-shadow-size, 40%)),
        transparent
      );
    `),vertical:s(`acss-x6d1m4`,[`.acss-x6d1m4{overflow-y:auto;}`],`
      overflow-y: auto;
    `)},_=l(g.root,{defaultVariants:{hideScrollBar:!1,orientation:`vertical`,scrollPosition:`none`},variants:{orientation:{horizontal:g.horizontal,vertical:g.vertical},hideScrollBar:{true:g.hideScrollBar,false:null},scrollPosition:{none:null,top:g.topShadow,bottom:g.bottomShadow,"top-bottom":g.topBottomShadow,left:g.leftShadow,right:g.rightShadow,"left-right":g.leftRightShadow}}})})),y,b,x,S,C=e((()=>{y=t(n(),1),b={bottom:!1,left:!1,right:!1,top:!1},x=(e,t)=>e.bottom===t.bottom&&e.left===t.left&&e.right===t.right&&e.top===t.top,S=({domRef:e,offset:t=0,orientation:n=`vertical`,isEnabled:r=!0,onVisibilityChange:i,updateDeps:a=[]})=>{let[o,s]=(0,y.useState)(b),c=(0,y.useRef)(b);return(0,y.useEffect)(()=>{let a=e.current;if(!a||!r)return;let o=()=>{let e={...b};n===`vertical`?a.scrollHeight>a.clientHeight?(e.top=a.scrollTop>t,e.bottom=a.scrollTop+a.clientHeight<a.scrollHeight-t):(e.top=!1,e.bottom=!1):a.scrollWidth>a.clientWidth?(e.left=a.scrollLeft>t,e.right=a.scrollLeft+a.clientWidth<a.scrollWidth-t):(e.left=!1,e.right=!1),!x(c.current,e)&&(c.current=e,s(e),i?.(e))};o(),a.addEventListener(`scroll`,o),window.addEventListener(`resize`,o);let l=new ResizeObserver(o);return l.observe(a),()=>{a.removeEventListener(`scroll`,o),window.removeEventListener(`resize`,o),l.disconnect()}},[e,t,n,r,...a]),o}})),w,T,E,D=e((()=>{a(),c(),v(),C(),w=t(n(),1),T=t(r(),1),m(),u(),E=({className:e,children:t,orientation:n=`vertical`,hideScrollBar:r=!1,size:a=16,offset:o=8,visibility:s=`auto`,isEnabled:c=!0,onVisibilityChange:l,style:u,ref:p,...m})=>{let g=(0,w.useMemo)(()=>({"--scroll-shadow-size":`${a}%`}),[a]),v=(0,w.useRef)(null),y=h(e=>{l?.(e)}),b=S({domRef:v,isEnabled:c&&s===`auto`,offset:o,onVisibilityChange:y,orientation:n,updateDeps:[t]}),x=(0,w.useMemo)(()=>s===`always`?{bottom:!0,left:!0,right:!0,top:!0}:s===`never`?{bottom:!1,left:!1,right:!1,top:!1}:b,[s,b]),C=(0,w.useMemo)(()=>{let e={"data-orientation":n};return n===`vertical`?x.top&&x.bottom?e[`data-top-bottom-scroll`]=!0:x.top?e[`data-top-scroll`]=!0:x.bottom&&(e[`data-bottom-scroll`]=!0):x.left&&x.right?e[`data-left-right-scroll`]=!0:x.left?e[`data-left-scroll`]=!0:x.right&&(e[`data-right-scroll`]=!0),e},[n,x]);return(0,T.jsx)(i,{className:f(_({hideScrollBar:r,orientation:n,scrollPosition:(0,w.useMemo)(()=>{if(n===`vertical`){if(x.top&&x.bottom)return`top-bottom`;if(x.top)return`top`;if(x.bottom)return`bottom`}else{if(x.left&&x.right)return`left-right`;if(x.left)return`left`;if(x.right)return`right`}return`none`},[n,x])}),e),ref:d([v,p]),style:{...g,...u},...C,...m,children:t})},E.displayName=`ScrollShadow`}));export{D as n,E as t};