import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{Kt as o,qt as s}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Kd as c,bp as l,gp as u,t as d}from"../vendor/vendor-icons-vienkZi5.js";import{c as f}from"./app-const-BpgKVRXh.js";import{FD as p,ID as m,Sa as h,xa as g}from"./index-w64_zsxD.js";import{n as _,t as v}from"./Popover-Cd3scH3I.js";import{Mn as y,Wn as b,a as x,n as S}from"./chat-D3ilvURJ.js";import{c as C,s as w}from"./upload-D5Kt3WUo.js";import{r as T,t as E}from"./FileIcon-CDKQg3YR.js";var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U=e((()=>{D=`lobeLocalFileLink`,O=/^(?:[a-z]:[\\/]|\\\\)/i,k=/^[a-z][a-z\d+.-]*:/i,A=/:(\d+)(?::(\d+))?$/,j=[`/Applications/`,`/Users/`,`/Volumes/`,`/etc/`,`/home/`,`/mnt/`,`/opt/`,`/private/`,`/root/`,`/srv/`,`/tmp/`,`/var/`,`/workspace/`],M=e=>{try{return decodeURIComponent(e)}catch{return e}},N=e=>{let t=e.replaceAll(`\\`,`/`);return t===`/`?t:t.replace(/\/+$/,``)},P=e=>O.test(e),F=e=>e.startsWith(`/`),I=e=>F(e)||P(e),L=(e,t)=>{let n=N(e),r=N(t);return n===r||n.startsWith(`${r}/`)},R=e=>{if(P(e))return!0;let t=N(e);return j.some(e=>t===e.slice(0,-1)||t.startsWith(e))},z=e=>{let t=e.replace(/[\\/]+$/,``),n=Math.max(t.lastIndexOf(`/`),t.lastIndexOf(`\\`));return n<=0?t.startsWith(`/`)?`/`:t:t.slice(0,n)},B=e=>{let t=e.match(A);if(!t)return{filePath:e};let n=e.slice(0,-t[0].length);if(!n)return{filePath:e};let r=Number.parseInt(t[1],10),i=t[2]?Number.parseInt(t[2],10):void 0;return{column:i&&i>0?i:void 0,filePath:n,line:r>0?r:void 0}},V=e=>{if(e.toLowerCase().startsWith(`file:`))try{let t=new URL(e);if(t.protocol!==`file:`)return null;let n=M(t.pathname);return/^\/[a-z]:/i.test(n)?n.slice(1):n}catch{return null}return k.test(e)&&!P(e)?null:M(e)},H=(e,{workingDirectory:t}={})=>{let n=e?.trim();if(!n)return null;let r=V(n);if(!r)return null;let{filePath:i,line:a,column:o}=B(r);if(/^(?:\.\.?[\\/]|~[\\/])/.test(i))return{column:o,filePath:i,line:a,workingDirectory:``};if(i.startsWith(`//`)||!I(i))return null;let s=t&&L(i,t)?t:void 0;return!s&&!n.toLowerCase().startsWith(`file:`)&&!R(i)?null:{column:o,filePath:i,line:a,workingDirectory:s||z(i)}}})),W,G=e((()=>{f(),U(),w(),S(),y(),W=({isDirectory:e=!1,path:t,readonly:n=!1})=>{x(e=>e.openLocalFile),x(b.currentTopicWorkingDirectory);let r=()=>{},i=()=>{t&&C.openLocalFileOrFolder(t,e)};return{canPreview:!1,handleClick:n?void 0:()=>{if(e)return i()},handleOpenFile:i,handleOpenFolder:()=>{t&&C.openFileFolder(t)},handlePreview:r}}})),K,q,J,Y=e((()=>{p(),s(),_(),d(),i(),r(),T(),G(),K=t(a()),q={container:m(`acss-q1za61`,[`.acss-q1za61{cursor:pointer;padding-block:2px;padding-inline:4px 8px;border-radius:4px;color:var(--ant-color-text);}`,`.acss-q1za61:hover{color:var(--ant-color-text);background:var(--ant-color-fill-tertiary);}`,`.acss-q1za61:focus-visible{outline:2px solid var(--ant-color-primary-border);outline-offset:1px;}`],`
    cursor: pointer;

    padding-block: 2px;
    padding-inline: 4px 8px;
    border-radius: 4px;

    color: var(--ant-color-text);

    :hover {
      color: var(--ant-color-text);
      background: var(--ant-color-fill-tertiary);
    }

    &:focus-visible {
      outline: 2px solid var(--ant-color-primary-border);
      outline-offset: 1px;
    }
  `),segment:m(`acss-gqpws2`,[`.acss-gqpws2{cursor:pointer;position:relative;display:inline-flex;gap:6px;align-items:center;padding-block:5px;padding-inline:11px;border:none;font-family:inherit;font-size:13px;line-height:20px;color:var(--ant-color-text-secondary);white-space:nowrap;background:transparent;}`,`.acss-gqpws2+.acss-gqpws2::before{content:'';position:absolute;inset-block:5px;inset-inline-start:0;width:1px;background:var(--ant-color-border-secondary);}`,`.acss-gqpws2:hover{color:var(--ant-color-text);background:var(--ant-color-fill-tertiary);}`,`.acss-gqpws2:hover::before,.acss-gqpws2:hover+.acss-gqpws2::before{background:transparent;}`,`.acss-gqpws2:focus-visible{border-radius:6px;outline:2px solid var(--ant-color-primary-border);outline-offset:-2px;}`],`
    cursor: pointer;

    position: relative;

    display: inline-flex;
    gap: 6px;
    align-items: center;

    padding-block: 5px;
    padding-inline: 11px;
    border: none;

    font-family: inherit;
    font-size: 13px;
    line-height: 20px;
    color: var(--ant-color-text-secondary);
    white-space: nowrap;

    background: transparent;

    & + &::before {
      content: '';

      position: absolute;
      inset-block: 5px;
      inset-inline-start: 0;

      width: 1px;

      background: var(--ant-color-border-secondary);
    }

    &:hover {
      color: var(--ant-color-text);
      background: var(--ant-color-fill-tertiary);
    }

    &:hover::before,
    &:hover + &::before {
      background: transparent;
    }

    &:focus-visible {
      border-radius: 6px;
      outline: 2px solid var(--ant-color-primary-border);
      outline-offset: -2px;
    }
  `),segmented:m(`acss-1lspwxm`,[`.acss-1lspwxm{overflow:hidden;display:inline-flex;align-items:stretch;border-radius:var(--ant-border-radius-lg);}`],`
    overflow: hidden;
    display: inline-flex;
    align-items: stretch;
    border-radius: var(--ant-border-radius-lg);
  `),title:m(`acss-l7awww`,[`.acss-l7awww{overflow:hidden;display:block;line-height:20px;color:inherit;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;
    display: block;

    line-height: 20px;
    color: inherit;
    text-overflow: ellipsis;
    white-space: nowrap;
  `)},J=({name:e,path:t,isDirectory:r=!1,readonly:i=!1})=>{let{t:a}=n(`components`),{canPreview:s,handleClick:d,handleOpenFile:f,handleOpenFolder:p,handlePreview:m}=W({isDirectory:r,path:t,readonly:i}),h=(0,K.jsxs)(o,{horizontal:!0,align:`center`,className:q.container,gap:4,role:d?`button`:void 0,style:{display:`inline-flex`,verticalAlign:`middle`},tabIndex:d?0:void 0,onClick:d,onKeyDown:d?e=>{e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),d())}:void 0,children:[(0,K.jsx)(E,{fileName:e,isDirectory:r,size:22,variant:`raw`}),(0,K.jsx)(o,{horizontal:!0,align:`baseline`,gap:4,style:{overflow:`hidden`,width:`100%`},children:(0,K.jsx)(`div`,{className:q.title,children:e})})]});return r||i?h:(0,K.jsx)(v,{content:(0,K.jsxs)(`div`,{className:q.segmented,children:[s&&(0,K.jsxs)(`button`,{className:q.segment,type:`button`,onClick:m,children:[(0,K.jsx)(u,{size:15}),a(`LocalFile.action.preview`)]}),(0,K.jsxs)(`button`,{className:q.segment,type:`button`,onClick:f,children:[(0,K.jsx)(l,{size:15}),a(`LocalFile.action.open`)]}),(0,K.jsxs)(`button`,{className:q.segment,type:`button`,onClick:p,children:[(0,K.jsx)(c,{size:15}),a(`LocalFile.action.showInFolder`)]})]}),trigger:`hover`,styles:{content:{padding:0}},children:h})}})),X,Z,Q,$=e((()=>{p(),s(),g(),i(),T(),w(),X=t(a()),Z={container:m(`acss-1yrlucv`,[`.acss-1yrlucv{cursor:pointer;padding-block:2px;padding-inline:4px 8px;border-radius:4px;color:var(--ant-color-text-secondary);}`,`.acss-1yrlucv:hover{color:var(--ant-color-text);background:var(--ant-color-fill-tertiary);}`],`
    cursor: pointer;

    padding-block: 2px;
    padding-inline: 4px 8px;
    border-radius: 4px;

    color: var(--ant-color-text-secondary);

    :hover {
      color: var(--ant-color-text);
      background: var(--ant-color-fill-tertiary);
    }
  `),title:m(`acss-l7awww`,[`.acss-l7awww{overflow:hidden;display:block;line-height:20px;color:inherit;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;
    display: block;

    line-height: 20px;
    color: inherit;
    text-overflow: ellipsis;
    white-space: nowrap;
  `)},Q=({path:e,size:t=22})=>{let n=()=>{h&&C.openLocalFolder({isDirectory:!0,path:e})},{base:r}=h.parse(e);return(0,X.jsxs)(o,{horizontal:!0,align:`center`,className:Z.container,gap:4,style:{display:`inline-flex`,verticalAlign:`middle`},onClick:n,children:[(0,X.jsx)(E,{isDirectory:!0,fileName:r,size:t,variant:`raw`}),(0,X.jsx)(o,{horizontal:!0,align:`baseline`,gap:4,style:{overflow:`hidden`,width:`100%`},children:(0,X.jsx)(`div`,{className:Z.title,children:r})})]})}})),ee=e((()=>{Y(),$()}));export{Y as a,H as c,J as i,Q as n,D as o,$ as r,U as s,ee as t};