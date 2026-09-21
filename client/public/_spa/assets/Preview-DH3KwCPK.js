import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{Bt as o,Gt as s,Kt as c,Vt as l,a as u,o as d,qt as f}from"../vendor/vendor-ui-core-BmtybT1r.js";import{$n as p,Jn as m,c as h}from"./app-const-BpgKVRXh.js";import{gF as g,pF as _,uF as v,yF as y}from"./index-w64_zsxD.js";import{t as b}from"./_virtual_lobe-ui-named__lobeStaticStylish-SHuX_R8N.js";import{t as x}from"./ProductLogo-Dfher0ve.js";import{t as S}from"./Branding-vUGiPCQE.js";import{n as C,t as w}from"./UserAvatar-uPZMb7RG.js";import{a as T,c as E,i as D,l as O,o as k,s as A}from"./stats-CoyNdBRa.js";var j,M,N,P;e((()=>{h(),l(),f(),d(),b(),v(),j=t(i()),r(),S(),C(),O(),A(),T(),M=t(a()),N=_(({css:e,cssVar:t})=>({avatar:e`
    box-sizing: content-box;
    border: 4px solid ${t.colorBgLayout};
    background: ${t.colorText};
  `,background:e`
    position: relative;

    width: 100%;
    padding: 24px;

    background-color: ${t.colorBgLayout};
    background-image: url(${p(`screenshot_background.webp`)});
    background-position: center;
    background-size: 120% 120%;
  `,container:e`
    position: relative;

    overflow: hidden;

    width: 100%;
    border: 1px solid ${t.colorBorder};
    border-radius: calc(${t.borderRadiusLG} * 2);

    background: ${t.colorBgLayout};
    box-shadow: ${t.boxShadow};
  `,decs:e`
    font-size: 12px;
    color: ${t.colorTextDescription};
  `,footer:e`
    font-size: 12px;
    color: ${t.colorTextDescription};
  `,heatmaps:e`
    .legend-month,
    footer {
      display: none;
    }
  `,preview:g(s.noScrollbar,e`
      overflow: hidden scroll;

      width: 100%;
      max-height: 70dvh;
      border: 1px solid ${t.colorBorder};
      border-radius: ${t.borderRadiusLG};

      background: ${t.colorBgLayout};

      * {
        pointer-events: none;

        ::-webkit-scrollbar {
          width: 0 !important;
          height: 0 !important;
        }
      }

      ${y.sm} {
        max-height: 40dvh;
      }
    `),title:e`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  `})),P=(0,j.memo)(()=>{let{t:e}=n(`auth`);return(0,M.jsx)(`div`,{className:N.preview,children:(0,M.jsx)(`div`,{className:N.background,id:`preview`,children:(0,M.jsxs)(o,{className:N.container,gap:12,padding:24,children:[(0,M.jsx)(x,{size:24,type:`text`}),(0,M.jsx)(`div`,{className:N.title,children:e(`stats.share.title`)}),(0,M.jsxs)(c,{horizontal:!0,align:`center`,children:[(0,M.jsx)(w,{className:N.avatar,shape:`circle`,size:48,style:{marginRight:-12,zIndex:2}}),(0,M.jsx)(o,{className:N.avatar,height:48,width:48,style:{borderRadius:`50%`,zIndex:1},children:(0,M.jsx)(x,{size:40})})]}),(0,M.jsxs)(c,{gap:12,paddingBlock:12,width:`100%`,children:[(0,M.jsx)(E,{inShare:!0,blockMargin:2,blockRadius:1,blockSize:4.5,className:N.heatmaps,width:`100%`,style:{marginTop:-12}}),(0,M.jsxs)(u,{gap:8,maxItemWidth:100,rows:2,width:`100%`,children:[(0,M.jsx)(k,{inShare:!0}),(0,M.jsx)(D,{inShare:!0})]})]}),(0,M.jsx)(`div`,{className:N.footer,children:m})]})})})})}))();export{P as default};