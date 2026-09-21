import{n as e,o as t,r as n}from"./rolldown-runtime-CMxvf4Kt.js";import{N as r,P as i,j as a}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as o,T as s}from"../vendor/vendor-react-B9HSWrpN.js";import{Bt as c,It as ee,Kt as l,Lt as te,Mt as ne,Nt as re,Vt as u,Xn as ie,Zn as ae,qt as d}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Am as oe,gp as se,t as ce}from"../vendor/vendor-icons-vienkZi5.js";import{Dr as f,Kn as le,c as ue,er as de}from"./app-const-BpgKVRXh.js";import{t as p}from"./Highlighter-BL3jikMb.js";import{FD as m,ID as h,gF as g,mF as _,uF as fe}from"./index-w64_zsxD.js";import{n as pe,t as me}from"./Markdown-DWQvr47S.js";import{n as he,t as ge}from"./downloadFile-CsPC6Z4I.js";import{n as v,t as y}from"./NeuralNetworkLoading-DiI77SUR.js";import{t as b}from"./_virtual_lobe-ui-named__Highlighter-B839w3AL.js";import{n as _e,t as ve}from"./Tabs-DH_wa3T6.js";import{i as ye,s as be,t as x}from"./HtmlPreview-DCioIZsV.js";import{n as xe,t as Se}from"./AsyncError-B3Va32IA.js";import{i as S,n as Ce,r as C,t as we}from"./fileLanguage-Ob43Y-x7.js";import{a as Te,i as Ee,o as De,s as Oe}from"./ChatInput-CA6BEpFt.js";var w,T,E,D,ke=e((()=>{m(),u(),d(),te(),re(),w=t(o()),a(),de(),he(),T=t(s()),E={page:h(`acss-1fqvid2`,[`.acss-1fqvid2{width:100%;margin:12px;padding:24px;border-radius:4px;background:var(--ant-color-bg-container);box-shadow:var(--ant-box-shadow-tertiary);}`],`
    width: 100%;
    margin: 12px;
    padding: 24px;
    border-radius: 4px;

    background: var(--ant-color-bg-container);
    box-shadow: var(--ant-box-shadow-tertiary);
  `)},D=({fileName:e,url:t,style:n})=>{let{t:a}=r(`file`),[o,s]=(0,w.useState)(!1);return(0,T.jsx)(l,{className:E.page,id:`not-support-renderer`,style:n,children:(0,T.jsx)(c,{height:`100%`,children:(0,T.jsxs)(l,{align:`center`,gap:12,children:[(0,T.jsx)(ee,{emoji:`👀`,size:64}),(0,T.jsx)(l,{style:{textAlign:`center`},children:(0,T.jsx)(i,{i18nKey:`preview.unsupportedFileAndContact`,ns:`file`,components:[(0,T.jsx)(`span`,{},`0`),(0,T.jsx)(`a`,{"aria-label":`todo`,href:le,rel:`noreferrer`,target:`_blank`},`1`)]})}),t&&(0,T.jsx)(ne,{loading:o,onClick:async()=>{s(!0),await ge(t,e||`download`),s(!1)},children:a(`preview.downloadFile`)})]})})})}})),O,k,A,j,Ae=e((()=>{m(),u(),d(),b(),O=t(o()),v(),Ce(),C(),k=t(s()),A={page:h(`acss-kkpj0f`,[`.acss-kkpj0f{width:100%;height:100%;padding-inline:24px 4px;}`],`
    width: 100%;
    height: 100%;
    padding-inline: 24px 4px;
  `)},j=(0,O.memo)(({url:e,fileName:t})=>{let{fileData:n,loading:r}=S(e),i=we(t);return(0,k.jsx)(l,{className:A.page,children:!r&&n?(0,k.jsx)(p,{language:i,showLanguage:!1,variant:`borderless`,children:n}):(0,k.jsx)(c,{height:`100%`,children:(0,k.jsx)(y,{size:36})})})})})),M,N,P,F,je=e((()=>{m(),u(),d(),M=t(o()),x(),v(),C(),N=t(s()),P={page:h(`acss-3rwqtq`,[`.acss-3rwqtq{width:100%;height:100%;padding:0;}`],`
    width: 100%;
    height: 100%;
    padding: 0;
  `)},F=(0,M.memo)(({url:e})=>{let{fileData:t,loading:n}=S(e);return(0,N.jsx)(l,{className:P.page,children:!n&&t!==null?(0,N.jsx)(ye,{content:t}):(0,N.jsx)(c,{height:`100%`,children:(0,N.jsx)(y,{size:36})})})}),F.displayName=`HTMLViewer`})),I,L,R,Me=e((()=>{u(),I=t(o()),v(),L=t(s()),R=(0,I.memo)(({url:e})=>{let[t,n]=(0,I.useState)(!1);return e?(0,L.jsxs)(c,{height:`100%`,width:`100%`,children:[!t&&(0,L.jsx)(y,{size:36}),(0,L.jsx)(`img`,{alt:`Image preview`,src:e,style:{display:t?`block`:`none`,height:`100%`,objectFit:`contain`,overflow:`hidden`,width:`100%`},onLoad:()=>n(!0)})]}):null})})),z,B,V,H,Ne=e((()=>{m(),u(),d(),b(),ae(),pe(),_e(),ce(),z=t(o()),a(),v(),C(),B=t(s()),V={controls:h(`acss-fckil9`,[`.acss-fckil9{position:absolute;z-index:2;inset-block-start:8px;inset-inline-end:12px;padding:4px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);opacity:0.55;background:var(--ant-color-bg-elevated);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);box-shadow:var(--ant-box-shadow-tertiary);transition:opacity 150ms ease;}`,`.acss-fckil9:hover{opacity:1;}`],`
    position: absolute;
    z-index: 2;
    inset-block-start: 8px;
    inset-inline-end: 12px;

    padding: 4px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);

    opacity: 0.55;
    background: var(--ant-color-bg-elevated);
    backdrop-filter: blur(8px);
    box-shadow: var(--ant-box-shadow-tertiary);

    transition: opacity 150ms ease;

    &:hover {
      opacity: 1;
    }
  `),page:h(`acss-o5amcp`,[`.acss-o5amcp{position:relative;overflow:hidden auto;width:100%;height:100%;}`],`
    position: relative;
    overflow: hidden auto;
    width: 100%;
    height: 100%;
  `)},H=(0,z.memo)(({url:e})=>{let{t}=r(`file`),{fileData:n,loading:i}=S(e),[a,o]=(0,z.useState)(`render`);return i||n===null?(0,B.jsx)(c,{height:`100%`,width:`100%`,children:(0,B.jsx)(y,{size:36})}):(0,B.jsxs)(l,{className:V.page,children:[(0,B.jsx)(l,{horizontal:!0,align:`center`,className:V.controls,gap:4,children:(0,B.jsx)(ve,{activeKey:a,size:`small`,items:[{icon:(0,B.jsx)(ie,{icon:se}),key:`render`,label:t(`preview.render`)},{icon:(0,B.jsx)(ie,{icon:oe}),key:`raw`,label:t(`preview.raw`)}],onChange:e=>o(e)})}),a===`render`?(0,B.jsx)(me,{style:{paddingBlock:16,paddingInline:24},children:n}):(0,B.jsx)(p,{language:`markdown`,showLanguage:!1,variant:`borderless`,children:n})]})})})),U,W,G,Pe,K,Fe=e((()=>{d(),fe(),U=t(o()),W=t(s()),G=_`
  position: relative;
  overflow: hidden;
  border-radius: 4px;
`,Pe=_`
  position: absolute;
  inset-block: -1px;
  inset-inline-start: -1px;

  width: calc(100% + 2px);
  height: calc(100% + 2px);
  border: 0;
`,K=(0,U.memo)(({url:e})=>e?(0,W.jsx)(l,{className:g(G),height:`100%`,id:`msdoc-renderer`,width:`100%`,children:(0,W.jsx)(`iframe`,{className:g(Pe),id:`msdoc-iframe`,src:`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(e)}`,title:`msdoc-iframe`})}):null)})),q,J,Y,Ie,Le=e((()=>{m(),u(),q=t(o()),J=t(s()),Y={container:h(`acss-grskh6`,[`.acss-grskh6{padding:var(--ant-padding-sm);border-radius:var(--ant-border-radius-lg);background:var(--ant-color-bg-container);}`],`
    padding: var(--ant-padding-sm);
    border-radius: var(--ant-border-radius-lg);
    background: var(--ant-color-bg-container);
  `),video:h(`acss-9ksamq`,[`.acss-9ksamq{max-width:100%;max-height:100%;border-radius:var(--ant-border-radius);object-fit:contain;box-shadow:var(--ant-box-shadow-tertiary);}`,`.acss-9ksamq::-webkit-media-controls-panel{background:linear-gradient(to bottom, transparent 0%, rgb(0 0 0 / 30%) 100%);}`,`.acss-9ksamq:focus{outline:2px solid var(--ant-color-primary);outline-offset:2px;}`],`
    max-width: 100%;
    max-height: 100%;
    border-radius: var(--ant-border-radius);

    object-fit: contain;
    box-shadow: var(--ant-box-shadow-tertiary);

    &::-webkit-media-controls-panel {
      background: linear-gradient(to bottom, transparent 0%, rgb(0 0 0 / 30%) 100%);
    }

    &:focus {
      outline: 2px solid var(--ant-color-primary);
      outline-offset: 2px;
    }
  `)},Ie=(0,q.memo)(({url:e})=>e?(0,J.jsx)(c,{className:Y.container,height:`100%`,width:`100%`,children:(0,J.jsx)(`video`,{controls:!0,className:Y.video,height:`100%`,src:e,width:`100%`})}):null)})),Re,ze,Be=e((()=>{Re=[`.v`,`.sv`],ze=[`v`,`sv`,`text/x-verilog`,`text/x-systemverilog`]})),Ve=n({default:()=>$}),X,Z,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,Q,et,$,tt=e((()=>{ue(),u(),X=t(o()),xe(),x(),v(),De(),ke(),Ae(),je(),Me(),Ne(),Fe(),Ee(),Le(),Be(),Z=t(s()),He=[`.jpg`,`.jpeg`,`.png`,`.webp`,`.gif`,`.bmp`],Ue=new Set([`image/jpg`,`image/jpeg`,`image/png`,`image/webp`,`image/gif`,`image/bmp`]),We=[`.mp4`,`.webm`,`.ogg`],Ge=new Set([`video/mp4`,`video/webm`,`video/ogg`,`mp4`,`webm`,`ogg`]),Ke=[`.js`,`.jsx`,`.ts`,`.tsx`,`.mjs`,`.cjs`,`.py`,`.pyw`,`.java`,`.kt`,`.kts`,`.scala`,`.groovy`,`.c`,`.h`,`.cpp`,`.cxx`,`.cc`,`.hpp`,`.hxx`,...Re,`.cs`,`.go`,`.rs`,`.rb`,`.php`,`.swift`,`.lua`,`.r`,`.dart`,`.sh`,`.bash`,`.zsh`,`.html`,`.htm`,`.css`,`.scss`,`.sass`,`.less`,`.json`,`.xml`,`.yaml`,`.yml`,`.toml`,`.sql`,`.csv`,`.tsv`,`.ex`,`.exs`,`.erl`,`.hrl`,`.clj`,`.cljs`,`.cljc`,`.md`,`.mdx`,`.vim`,`.graphql`,`.gql`,`.txt`],qe=new Set([`js`,`jsx`,`ts`,`tsx`,`application/javascript`,`application/x-javascript`,`text/javascript`,`application/typescript`,`text/typescript`,`python`,`text/x-python`,`application/x-python-code`,`java`,`text/x-java-source`,`kotlin`,`scala`,`c`,`text/x-c`,`cpp`,`text/x-c++`,`csharp`,`go`,`rust`,...ze,`ruby`,`php`,`text/x-php`,`swift`,`lua`,`r`,`dart`,`bash`,`shell`,`text/x-shellscript`,`html`,`text/html`,`css`,`text/css`,`scss`,`sass`,`less`,`json`,`application/json`,`xml`,`text/xml`,`application/xml`,`yaml`,`text/yaml`,`application/x-yaml`,`toml`,`sql`,`text/x-sql`,`csv`,`text/csv`,`tsv`,`text/tab-separated-values`,`md`,`mdx`,...f,`graphql`,`txt`,`text/plain`]),Je=[`.md`,`.mdx`,`.markdown`],Ye=new Set([`md`,`mdx`,`markdown`,...f]),Xe=[`.doc`,`.docx`,`.odt`,`.ppt`,`.pptx`,`.xls`,`.xlsx`],Ze=new Set([`doc`,`docx`,`odt`,`ppt`,`pptx`,`xls`,`xlsx`,`application/msword`,`application/vnd.openxmlformats-officedocument.wordprocessingml.document`,`application/vnd.oasis.opendocument.text`,`application/vnd.ms-powerpoint`,`application/vnd.openxmlformats-officedocument.presentationml.presentation`,`application/vnd.ms-excel`,`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`]),Qe=[`.zip`,`.rar`,`.7z`,`.tar`,`.gz`,`.bz2`,`.xz`,`.tgz`],$e=new Set([`zip`,`rar`,`7z`,`application/zip`,`application/x-zip-compressed`,`application/x-rar-compressed`,`application/x-7z-compressed`,`application/x-tar`,`application/gzip`,`application/x-gzip`,`application/x-bzip2`,`application/x-xz`]),Q=(e,t,n,r)=>{let i=e?.toLowerCase(),a=t?.toLowerCase();return!!(i&&r.has(i)||a&&n.some(e=>a.endsWith(e)))},et=e=>{let[t,n]=(0,X.useState)(0),[r,i]=(0,X.useState)({status:`idle`});return(0,X.useEffect)(()=>{if(!e)return;let t=!0;return i({status:`loading`}),Te().then(({default:e})=>{t&&i({Renderer:e,status:`ready`})},e=>{t&&i({error:e,status:`error`})}),()=>{t=!1}},[t,e]),{retry:(0,X.useCallback)(()=>n(e=>e+1),[]),state:r}},$=(0,X.memo)(({id:e,style:t,fileType:n,url:r,name:i})=>{let a=Oe({fileName:i,fileType:n,path:r}),{retry:o,state:s}=et(a);if(a){if(s.status===`error`)return(0,Z.jsx)(c,{height:`100%`,width:`100%`,children:(0,Z.jsx)(Se,{error:s.error,variant:`block`,onRetry:o})});if(s.status===`ready`){let{Renderer:t}=s;return(0,Z.jsx)(t,{fileId:e,url:r})}return(0,Z.jsx)(c,{height:`100%`,width:`100%`,children:(0,Z.jsx)(y,{size:36})})}return Q(n,i,He,Ue)?(0,Z.jsx)(R,{fileId:e,url:r}):Q(n,i,We,Ge)?(0,Z.jsx)(Ie,{fileId:e,url:r}):Q(n,i,Qe,$e)?(0,Z.jsx)(D,{fileName:i,style:t,url:r}):Q(n,i,Xe,Ze)?(0,Z.jsx)(K,{fileId:e,url:r}):be({fileName:i,fileType:n})?(0,Z.jsx)(F,{fileId:e,url:r}):Q(n,i,Je,Ye)?(0,Z.jsx)(H,{fileId:e,url:r}):Q(n,i,Ke,qe)?(0,Z.jsx)(j,{fileId:e,fileName:i,url:r}):(0,Z.jsx)(D,{fileName:i,style:t,url:r})})}));export{Ve as n,tt as r,$ as t};