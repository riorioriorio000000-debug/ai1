import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{B as o,Bt as s,Nt as c,Vt as l,Yn as u,Zn as d,at as f,qt as p}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Ku as ee,t as te}from"../vendor/vendor-icons-vienkZi5.js";import{Ur as ne,c as m}from"./app-const-BpgKVRXh.js";import{Ab as h,By as g,FD as _,Hb as v,Hy as y,ID as b,MA as x,Sb as S,Ty as C,ah as w,gu as T,iu as E,nu as D,ob as O,rh as k}from"./index-w64_zsxD.js";import{n as A}from"./chat-D3ilvURJ.js";import{n as re}from"./file-CX3iZ5dr.js";import{n as ie,t as ae}from"./Empty-Dam8NCz3.js";import{n as j}from"./Input-gdUxluEJ.js";import{v as M,y as N}from"./Acceptance-DM2lPt6n.js";import{n as P}from"./browserWebviewRegistry-Dse4Ua5V.js";import{electronBrowserSidebarService as F,t as I}from"./browserSidebar-DA4FCV9f.js";var L,R,z,B=e((()=>{C(),L=t(i()),R=t(a()),z={Brave:v,Chrome:S,Chromium:S,Firefox:h,"Mobile Safari":y,Opera:O,Safari:y,Samsung:g},(0,L.memo)(({browser:e,className:t,style:n,size:r})=>{let i=z[e];return i?(0,R.jsx)(i,{className:t,size:r,style:n}):null})})),V,H,U=e((()=>{V=`lobechat:desktop:browser-import-banner:dismissed:v1`,H=`https://www.bing.com`})),W,G,K,q=e((()=>{m(),k(),W=t(i()),I(),G=(e,t)=>({attached:!1,canGoBack:!1,canGoForward:!1,isLoading:!1,sessionId:e,title:``,url:t??``}),K=(e,t)=>{let n=(0,W.useMemo)(()=>G(e??`browser`,t),[t,e]),[r,i]=(0,W.useState)(n);return(0,W.useEffect)(()=>{i(n)},[n]),w(`browserSidebarStateChanged`,t=>{t.sessionId===e&&i(t)}),(0,W.useEffect)(()=>{},[e]),r}})),J,Y,X,oe=e((()=>{U(),J=/^https?:\/\//i,Y=/^(?:localhost|127(?:\.\d{1,3}){3}|\[?::1\]?)(?::\d+)?(?:[/?#].*)?$/i,X=e=>{let t=e?.trim();if(!t)return H;if(t===`about:blank`||J.test(t))return t;if(Y.test(t))return`http://${t}`;if(t.includes(` `)||!t.includes(`.`)){let e=new URL(`https://www.bing.com/search`);return e.searchParams.set(`q`,t),e.toString()}return`https://${t}`}})),Z,Q,$;e((()=>{_(),m(),T(),l(),ie(),p(),d(),j(),o(),c(),f(),x(),te(),Z=t(i()),r(),B(),ne(),M(),I(),P(),A(),re(),D(),U(),q(),oe(),Q=t(a()),b(`acss-xlwyuq`,[`.acss-xlwyuq{pointer-events:none;position:absolute;z-index:3;inset-block-end:-1px;inset-inline:0;overflow:hidden;height:2px;}`,`.acss-xlwyuq::after{content:'';position:absolute;inset-block:0;inset-inline-start:0;width:36%;background:var(--ant-color-info);animation:browser-loading-progress 1.15s ease-in-out infinite;}`,`@keyframes browser-loading-progress{from{transform:translateX(-110%);}to{transform:translateX(310%);}}`,`@media (prefers-reduced-motion: reduce){.acss-xlwyuq::after{width:100%;animation:none;}}`],`
    pointer-events: none;

    position: absolute;
    z-index: 3;

    /* Anchored to the toolbar's bottom border. */
    inset-block-end: -1px;
    inset-inline: 0;

    overflow: hidden;

    height: 2px;

    &::after {
      content: '';

      position: absolute;
      inset-block: 0;
      inset-inline-start: 0;

      width: 36%;

      background: var(--ant-color-info);

      animation: browser-loading-progress 1.15s ease-in-out infinite;
    }

    @keyframes browser-loading-progress {
      from {
        transform: translateX(-110%);
      }

      to {
        transform: translateX(310%);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      &::after {
        width: 100%;
        animation: none;
      }
    }
  `),b(`acss-1qm1oub`,[`.acss-1qm1oub{position:relative;overflow:hidden;flex:1;width:100%;min-height:0;background:var(--ant-color-bg-container);}`],`
    position: relative;

    overflow: hidden;
    flex: 1;

    width: 100%;
    min-height: 0;

    background: var(--ant-color-bg-container);
  `),b(`acss-1hwo6vj`,[`.acss-1hwo6vj{position:relative;flex-shrink:0;min-height:56px;padding-inline:16px;border-block-end:1px solid var(--ant-color-border-secondary);}`],`
    position: relative;

    flex-shrink: 0;

    min-height: 56px;
    padding-inline: 16px;
    border-block-end: 1px solid var(--ant-color-border-secondary);
  `),b(`acss-4q3em6`,[`.acss-4q3em6{flex:1;min-width:0;max-width:720px;}`,`.acss-4q3em6.acss-4q3em6:focus{background:var(--ant-color-bg-container);}`],`
    flex: 1;
    min-width: 0;
    max-width: 720px;

    /* The filled variant keeps its tinted fill while focused; lift it to the
       container surface so the focus ring reads as an editable field. Doubling
       the class outranks antd's own :focus rule. */
    &&:focus {
      background: var(--ant-color-bg-container);
    }
  `),b(`acss-1p8z7x1`,[`.acss-1p8z7x1{container-type:inline-size;flex-shrink:0;flex-wrap:wrap;min-height:72px;padding-block:12px;padding-inline:16px;border-block-end:1px solid var(--ant-color-border-secondary);background:var(--ant-color-bg-container);}`],`
    container-type: inline-size;
    flex-shrink: 0;
    flex-wrap: wrap;

    min-height: 72px;
    padding-block: 12px;
    padding-inline: 16px;
    border-block-end: 1px solid var(--ant-color-border-secondary);

    background: var(--ant-color-bg-container);
  `),b(`acss-rimv92`,[`.acss-rimv92{flex:1;min-width:0;}`],`
    flex: 1;
    min-width: 0;
  `),b(`acss-10pcod0`,[`.acss-10pcod0{margin-inline-start:auto;}`,`@container (max-width: 480px){.acss-10pcod0{flex-basis:100%;justify-content:flex-end;margin-inline-start:44px;}}`],`
    margin-inline-start: auto;

    @container (max-width: 480px) {
      flex-basis: 100%;
      justify-content: flex-end;
      margin-inline-start: 44px;
    }
  `),b(`acss-ktfi6w`,[`.acss-ktfi6w{margin-inline-start:auto;}`],`
    margin-inline-start: auto;
  `),b(`acss-1kjmse`,[`.acss-1kjmse{position:absolute;inset:0;}`],`
    position: absolute;
    inset: 0;
  `),$=(0,Z.memo)(e=>{let{agentId:t,composerTarget:r,onMetadataChange:i,sessionId:a}=e,{t:o}=n(`chat`),c=K(a),[l,d]=(0,Z.useState)(``),[f,p]=(0,Z.useState)(!1),[te,ne]=(0,Z.useState)(!1),[m,h]=(0,Z.useState)(!1),[g,_]=(0,Z.useState)(!1),[v,y]=N(V,!1),b=E(e=>e.status.workingSidebarBrowserRequest),x=E(e=>e.clearBrowserTabRequest),S=(0,Z.useRef)(void 0),C=(0,Z.useRef)(null);(0,Z.useEffect)(()=>{i?.({faviconUrl:c.faviconUrl,title:c.title,url:c.url})},[i,c.faviconUrl,c.title,c.url]),(0,Z.useEffect)(()=>{},[o]),(0,Z.useEffect)(()=>{C.current},[a]),(0,Z.useEffect)(()=>{f||d(c.url===`about:blank`?``:c.url)},[f,c.url]);let w=async e=>{try{let t=await e();t.success||u.error(t.error||o(`workingPanel.browser.actions.failed`))}catch(e){console.error(`[BrowserSidebar] Browser action failed:`,e),u.error(o(`workingPanel.browser.actions.failed`))}},T=e=>{let t=X(e);d(t),w(()=>F.navigate({sessionId:a,url:t}))};return(0,Z.useEffect)(()=>{},[a]),(0,Z.useEffect)(()=>{!b||S.current===b.nonce||(S.current=b.nonce,T(b.url),x())},[b?.nonce]),(0,Q.jsx)(s,{height:`100%`,width:`100%`,children:(0,Q.jsx)(ae,{description:o(`workingPanel.browser.desktopOnly`),icon:ee})})}),$.displayName=`BrowserPane`}))();export{$ as default};