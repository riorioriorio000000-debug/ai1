import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{Kt as i,Xn as a,Zn as o,qt as s}from"../vendor/vendor-ui-core-BmtybT1r.js";import{X as c,r as l}from"../vendor/vendor-antd-BWSxhuJE.js";import{Kd as u,Md as d,Sf as f,cg as p,ig as m,t as h}from"../vendor/vendor-icons-vienkZi5.js";import{t as g}from"./Highlighter-BL3jikMb.js";import{Dn as _,En as v,FD as y,ID as b,hF as x,uF as S}from"./index-w64_zsxD.js";import{n as C,t as w}from"./CopyButton-BjxUZD85.js";import{n as T,t as E}from"./Markdown-DWQvr47S.js";import{t as D}from"./_virtual_lobe-ui-named__Highlighter-B839w3AL.js";import{n as O,t as k}from"./_virtual_lobe-ui-named__ContextMenuTrigger-DAznVU5g.js";var A,j,M,N,P=e((()=>{s(),_(),S(),A=t(n()),j=t(r()),M=28,N=(0,A.memo)(({rows:e=8,showRootFile:t=!0})=>{let n=Array.from({length:e},(e,t)=>t);return(0,j.jsxs)(i,{gap:2,children:[t&&(0,j.jsxs)(i,{horizontal:!0,align:`center`,gap:6,height:M,paddingInline:8,children:[(0,j.jsx)(v,{style:{borderRadius:x.borderRadius,height:14,minWidth:14,width:14}}),(0,j.jsx)(v,{style:{borderRadius:x.borderRadius,height:16,minWidth:80,opacity:.6,width:`40%`}})]}),n.map(e=>{let t=e%3,n=`${40+e*13%45}%`;return(0,j.jsxs)(i,{horizontal:!0,align:`center`,gap:6,height:M,paddingInline:8,style:{paddingInlineStart:8+t*16},children:[(0,j.jsx)(v,{style:{borderRadius:x.borderRadius,height:14,minWidth:14,width:14}}),(0,j.jsx)(v,{style:{borderRadius:x.borderRadius,height:16,minWidth:70,opacity:.55,width:n}})]},e)})]})}),N.displayName=`FileTreeSkeleton`})),F,I,L,R,z,B=e((()=>{y(),k(),o(),l(),h(),F=t(n()),I=t(r()),P(),L={item:b(`acss-n5q2e7`,[`.acss-n5q2e7{cursor:pointer;display:flex;gap:6px;align-items:center;padding-block:6px;padding-inline-end:8px;border-radius:6px;font-size:13px;line-height:1.4;}`,`.acss-n5q2e7:hover{background:var(--ant-color-fill-tertiary);}`],`
    cursor: pointer;

    display: flex;
    gap: 6px;
    align-items: center;

    padding-block: 6px;
    padding-inline-end: 8px;
    border-radius: 6px;

    font-size: 13px;
    line-height: 1.4;

    &:hover {
      background: var(--ant-color-fill-tertiary);
    }
  `),itemSelected:b(`acss-e02nsw`,[`.acss-e02nsw{color:var(--ant-color-primary);background:var(--ant-color-fill-secondary);}`],`
    color: var(--ant-color-primary);
    background: var(--ant-color-fill-secondary);
  `),label:b(`acss-1n5gm1d`,[`.acss-1n5gm1d{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `),editingInput:b(`acss-h9g2jy`,[`.acss-h9g2jy{margin:0!important;padding:0!important;border:none!important;font-size:13px!important;line-height:1.4!important;background:transparent!important;outline:none!important;box-shadow:none!important;}`],`
    margin: 0 !important;
    padding: 0 !important;
    border: none !important;

    font-size: 13px !important;
    line-height: 1.4 !important;

    background: transparent !important;
    outline: none !important;
    box-shadow: none !important;
  `),editingInputRoot:b(`acss-1jos0kx`,[`.acss-1jos0kx{margin:0!important;padding:0!important;border:none!important;border-radius:0!important;background:transparent!important;box-shadow:none!important;}`],`
    margin: 0 !important;
    padding: 0 !important;
    border: none !important;
    border-radius: 0 !important;

    background: transparent !important;
    box-shadow: none !important;
  `)},R=(0,F.memo)(({node:e,depth:t,selectedFile:n,onSelectFile:r,expandedFolders:i,onToggleFolder:o,getFileContextMenuItems:s,editableFilePath:l,onCancelRenameFile:h,onCommitRenameFile:g})=>{let _=e.type===`directory`,v=i.has(e.path),y=!_&&n===e.path,b=!_&&l===e.path&&!!g,[x,S]=(0,F.useState)(e.name),C=(0,F.useRef)(null),w=(0,F.useRef)(!1);(0,F.useEffect)(()=>{b&&(S(e.name),requestAnimationFrame(()=>{C.current?.focus?.(),C.current?.select?.()}))},[b,e.name]);let T=()=>{b||(_?o(e.path):r(e.path))},E=(0,F.useCallback)(()=>{S(e.name),h?.()},[e.name,h]),D=(0,F.useCallback)(async()=>{if(!b||!g||w.current)return;let t=x.trim();if(t===e.name){E();return}w.current=!0;try{await g({name:e.name,path:e.path},t),h?.()}finally{w.current=!1}},[x,E,b,e.name,e.path,h,g]),k=!_&&!b?s?.({name:e.name,path:e.path}):void 0,A=(0,I.jsxs)(`div`,{className:`${L.item} ${y?L.itemSelected:``}`,style:{paddingInlineStart:8+t*16},title:e.path,onClick:T,children:[_&&(0,I.jsx)(a,{icon:v?p:m,size:14}),!_&&(0,I.jsx)(`span`,{style:{flexShrink:0,width:14}}),(0,I.jsx)(a,{icon:_?v?u:d:f,size:16}),b?(0,I.jsx)(c,{classNames:{input:L.editingInput,root:L.editingInputRoot},ref:C,value:x,variant:`borderless`,onBlur:()=>void D(),onChange:e=>S(e.target.value),onClick:e=>e.stopPropagation(),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur(),D()),e.key===`Escape`&&(e.preventDefault(),E())}}):(0,I.jsx)(`span`,{className:L.label,children:e.name})]});return(0,I.jsxs)(I.Fragment,{children:[!_&&k&&k.length>0?(0,I.jsx)(O,{items:k,children:A}):A,_&&v&&e.children?.map(e=>(0,I.jsx)(R,{depth:t+1,editableFilePath:l,expandedFolders:i,getFileContextMenuItems:s,node:e,selectedFile:n,onCancelRenameFile:h,onCommitRenameFile:g,onSelectFile:r,onToggleFolder:o},e.path))]})}),R.displayName=`TreeNode`,z=(0,F.memo)(({resourceTree:e,rootFile:t,selectedFile:n,onSelectFile:r,getFileContextMenuItems:i,editableFilePath:o,onCancelRenameFile:s,onCommitRenameFile:c})=>{let[l,u]=(0,F.useState)(()=>new Set);(0,F.useEffect)(()=>{let t=new Set,n=e=>{for(let r of e)r.type===`directory`&&(t.add(r.path),r.children&&n(r.children))};n(e),u(t)},[e]);let d=(0,F.useCallback)(e=>{u(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},[]),p=t===void 0?`SKILL.md`:t?.path,m=t===void 0?`SKILL.md`:t?.label,h=!!p&&n===p,g=(0,F.useMemo)(()=>e.length>0,[e]),_=(0,F.useMemo)(()=>p&&m?i?.({name:m,path:p}):void 0,[i,m,p]),v=p&&m&&(0,I.jsxs)(`div`,{className:`${L.item} ${h?L.itemSelected:``}`,style:{paddingInlineStart:8},onClick:()=>r(p),children:[(0,I.jsx)(`span`,{style:{flexShrink:0,width:14}}),(0,I.jsx)(a,{icon:f,size:16}),(0,I.jsx)(`span`,{className:L.label,children:m})]});return(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2},children:[v&&_&&_.length>0?(0,I.jsx)(O,{items:_,children:v}):v,g&&e.map(e=>(0,I.jsx)(R,{depth:0,editableFilePath:o,expandedFolders:l,getFileContextMenuItems:i,node:e,selectedFile:n,onCancelRenameFile:s,onCommitRenameFile:c,onSelectFile:r,onToggleFolder:d},e.path))]})}),z.displayName=`FileTree`})),V,H,U,W,G,K,q,J=e((()=>{y(),C(),D(),T(),V=t(n()),H=t(r()),U={codeWrapper:b(`acss-xh2jpv`,[`.acss-xh2jpv{position:relative;overflow-x:auto;margin-block-start:16px;padding-block-end:calc(100cqb - 1lh);}`,`.acss-xh2jpv pre{margin:0;}`,`.acss-xh2jpv code{counter-reset:line;}`,`.acss-xh2jpv .line{width:100%!important;margin-inline:0!important;padding-inline:0!important;}`,`.acss-xh2jpv .line::before{content:counter(line);counter-increment:line;-webkit-user-select:none;user-select:none;display:inline-block;width:4ch;margin-inline-end:2ch;color:var(--ant-color-text-quaternary);text-align:end;}`],`
    position: relative;
    overflow-x: auto;
    margin-block-start: 16px;
    padding-block-end: calc(100cqb - 1lh);

    pre {
      margin: 0;
    }

    code {
      counter-reset: line;
    }

    .line {
      width: 100% !important;
      margin-inline: 0 !important;
      padding-inline: 0 !important;
    }

    .line::before {
      content: counter(line);
      counter-increment: line;
      user-select: none;

      display: inline-block;

      width: 4ch;
      margin-inline-end: 2ch;

      color: var(--ant-color-text-quaternary);
      text-align: end;
    }
  `),docWrapper:b(`acss-bw9un0`,[`.acss-bw9un0{max-width:798px;margin-inline:auto;padding-block:8px;padding-inline:24px;}`],`
    max-width: 798px;
    margin-inline: auto;
    padding-block: 8px;
    padding-inline: 24px;
  `)},W=e=>{switch(e.toLowerCase().split(`.`).pop()){case`js`:case`mjs`:case`cjs`:return`javascript`;case`ts`:return`typescript`;case`tsx`:return`tsx`;case`jsx`:return`jsx`;case`py`:case`pyw`:return`python`;case`java`:return`java`;case`go`:return`go`;case`rs`:return`rust`;case`rb`:return`ruby`;case`sh`:case`bash`:case`zsh`:return`bash`;case`html`:case`htm`:return`html`;case`css`:return`css`;case`scss`:return`scss`;case`json`:return`json`;case`xml`:return`xml`;case`yaml`:case`yml`:return`yaml`;case`toml`:return`toml`;case`md`:case`mdx`:return`markdown`;case`sql`:return`sql`;case`c`:case`h`:return`c`;case`cpp`:case`cxx`:case`cc`:case`hpp`:return`cpp`;case`cs`:return`csharp`;case`swift`:return`swift`;case`kt`:case`kts`:return`kotlin`;case`lua`:return`lua`;case`dart`:return`dart`;case`graphql`:case`gql`:return`graphql`;default:return`txt`}},G=e=>{let t=e.toLowerCase().split(`.`).pop();return t===`md`||t===`mdx`},K=e=>{if(!e)return{body:``};let t=e.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);return t?{body:t[2],frontmatter:t[1]}:{body:e}},q=(0,V.memo)(({skillDetail:e,selectedFile:t,contentMap:n,liveContent:r})=>{if(t===`SKILL.md`){let t=r??e?.content;if(!t)return(0,H.jsx)(`div`,{className:U.docWrapper,children:(0,H.jsx)(`p`,{style:{opacity:.45},children:`No content`})});let{frontmatter:n,body:i}=K(t);return(0,H.jsxs)(`div`,{className:U.docWrapper,children:[n&&(0,H.jsx)(g,{fullFeatured:!0,language:`yaml`,variant:`outlined`,children:n}),(0,H.jsx)(E,{variant:`chat`,children:i})]})}let i=n[t];if(G(t)){let{frontmatter:e,body:t}=K(i);return(0,H.jsxs)(`div`,{className:U.docWrapper,children:[e&&(0,H.jsx)(g,{fullFeatured:!0,language:`yaml`,variant:`outlined`,children:e}),(0,H.jsx)(E,{variant:`chat`,children:t})]})}return(0,H.jsxs)(`div`,{className:U.codeWrapper,children:[(0,H.jsx)(w,{content:i,style:{position:`absolute`,right:8,top:0,zIndex:1}}),(0,H.jsx)(g,{copyable:!1,language:W(t),showLanguage:!1,variant:`borderless`,children:i})]})}),q.displayName=`ContentViewer`}));export{N as a,B as i,J as n,P as o,z as r,q as t};