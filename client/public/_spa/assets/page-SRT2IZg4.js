const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-w64_zsxD.js","assets/rolldown-runtime-CMxvf4Kt.js","vendor/vendor-antd-BWSxhuJE.js","vendor/vendor-ui-runtime-NzUbUsUl.js","vendor/vendor-react-B9HSWrpN.js","vendor/vendor-data-runtime--g3k1Ms_.js","vendor/vendor-ui-core-BmtybT1r.js","vendor/vendor-icons-vienkZi5.js","assets/app-const-BpgKVRXh.js","assets/model-runtime-client-yHstr6AX.js","assets/vendor-antd-B5BXDqMa.css","assets/index-B3JXVkjS.css"])))=>i.map(i=>d[i]);
import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{Bt as o,Kt as s,Vt as c,Xn as l,Zn as u,at as d,it as f,qt as p}from"../vendor/vendor-ui-core-BmtybT1r.js";import{i as m,r as h}from"../vendor/vendor-antd-BWSxhuJE.js";import{mv as g,t as _,ua as v}from"../vendor/vendor-icons-vienkZi5.js";import{Sr as y,c as b}from"./app-const-BpgKVRXh.js";import{AA as x,At as S,Cn as C,FD as w,Ft as ee,ID as T,Kf as E,L_ as D,Pt as O,R_ as k,S as A,Sn as te,hF as j,ht as ne,jA as M,kt as N,mt as P,qf as F,uF as I,w as L}from"./index-w64_zsxD.js";import{n as R,t as z}from"./FileTypeIcon-C3OpV5Wd.js";import{a as B,n as V}from"./file-CX3iZ5dr.js";import{n as H,t as U}from"./Notion-BGjWL1US.js";import{n as W,t as G}from"./useNotionImport-W5niu2JY.js";var K,q,J,Y,X,re=e((()=>{w(),b(),H(),c(),R(),p(),u(),d(),h(),I(),_(),K=t(i()),r(),S(),G(),E(),V(),A(),k(),P(),q=t(a()),M(),J=80,Y={actionTitle:T(`acss-d21qad`,[`.acss-d21qad{margin-block-start:12px;font-size:16px;color:var(--ant-color-text-secondary);}`],`
    margin-block-start: 12px;
    font-size: 16px;
    color: var(--ant-color-text-secondary);
  `),card:T(`acss-zy3awb`,[`.acss-zy3awb{cursor:pointer;position:relative;overflow:hidden;width:200px;height:140px;border-radius:var(--ant-border-radius-lg);font-weight:500;text-align:center;background:var(--ant-color-fill-tertiary);box-shadow:0 0 0 1px var(--ant-color-fill-tertiary) inset;transition:background 0.3s ease-in-out;}`,`.acss-zy3awb:hover{background:var(--ant-color-fill-secondary);}`],`
    cursor: pointer;

    position: relative;

    overflow: hidden;

    width: 200px;
    height: 140px;
    border-radius: var(--ant-border-radius-lg);

    font-weight: 500;
    text-align: center;

    background: var(--ant-color-fill-tertiary);
    box-shadow: 0 0 0 1px var(--ant-color-fill-tertiary) inset;

    transition: background 0.3s ease-in-out;

    &:hover {
      background: var(--ant-color-fill-secondary);
    }
  `),glow:T(`acss-dhik6c`,[`.acss-dhik6c{position:absolute;inset-block-end:-12px;inset-inline-end:0;width:48px;height:48px;opacity:0.5;filter:blur(24px);}`],`
    position: absolute;
    inset-block-end: -12px;
    inset-inline-end: 0;

    width: 48px;
    height: 48px;

    opacity: 0.5;
    filter: blur(24px);
  `),icon:T(`acss-1tj8b77`,[`.acss-1tj8b77{position:absolute;z-index:1;inset-block-end:-24px;inset-inline-end:8px;flex:none;}`],`
    position: absolute;
    z-index: 1;
    inset-block-end: -24px;
    inset-inline-end: 8px;

    flex: none;
  `)},X=(0,K.memo)(({hasPages:e=!1,knowledgeBaseId:t})=>{let{t:r}=n([`file`,`common`]),{allowed:i}=F(`create_content`),[a,c]=(0,K.useState)(!1),[u,d,p,h,_]=L(e=>[e.createNewPage,e.createOptimisticPage,e.replaceTempPageWithReal,e.setSelectedPageId,e.fetchDocuments]),[b]=B(e=>[e.createDocument]),S=W({createDocument:b,currentFolderId:null,libraryId:t??null,refetchResources:_,t:r}),C=async e=>{i&&await S.handleNotionImport(e)},w=async(e,n)=>{if(!i)return;if(!e){await u(n);return}let r=d(n);h(r,!1);try{let i=await b({content:e,knowledgeBaseId:t,title:n});p(r,{content:i.content||``,createdAt:i.createdAt?new Date(i.createdAt):new Date,editorData:typeof i.editorData==`string`?JSON.parse(i.editorData):i.editorData||null,fileType:y,filename:i.title||n,id:i.id,metadata:i.metadata||{},source:`document`,sourceType:D.EDITOR,title:i.title||n,totalCharCount:i.content?.length||0,totalLineCount:0,updatedAt:i.updatedAt?new Date(i.updatedAt):new Date}),h(i.id)}catch(e){throw console.error(`Failed to create page:`,e),L.getState().removeTempPage(r),h(null),e}};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(N,{}),(0,q.jsxs)(o,{gap:24,height:`100%`,style:{paddingBottom:100},width:`100%`,children:[e&&(0,q.jsxs)(s,{justify:`center`,style:{textAlign:`center`},children:[(0,q.jsx)(f,{as:`h4`,children:r(`pageEditor.empty.title`)}),(0,q.jsx)(f,{type:`secondary`,children:r(`or`,{ns:`common`})})]}),(0,q.jsxs)(s,{horizontal:!0,gap:12,children:[(0,q.jsxs)(s,{className:Y.card,padding:16,style:i?void 0:{cursor:`not-allowed`,opacity:.5},onClick:()=>w(``,r(`pageList.untitled`)),children:[(0,q.jsx)(`span`,{className:Y.actionTitle,children:r(`pageEditor.empty.createNewDocument`)}),(0,q.jsx)(`div`,{className:Y.glow,style:{background:j.purple}}),(0,q.jsx)(z,{className:Y.icon,color:j.purple,icon:(0,q.jsx)(l,{color:`#fff`,icon:v}),size:J,type:`file`})]}),(0,q.jsx)(m,{accept:`.md,.markdown,.pdf,.docx`,beforeUpload:async e=>{if(!i)return!1;try{c(!0);let n=e.name.split(`.`).pop()?.toLowerCase();if(n===`md`||n===`markdown`)await w(await e.text(),e.name.replace(/\.md$|\.markdown$/i,``));else if(n===`pdf`||n===`docx`){let n=e.name.replace(/\.(pdf|docx)$/i,``),r=d(n);try{let i=await B.getState().uploadWithProgress({file:e,knowledgeBaseId:t});if(!i)throw Error(`Failed to upload file`);let{lambdaClient:a}=await x(async()=>{let{lambdaClient:e}=await import(`./index-w64_zsxD.js`).then(e=>(e.Zh(),e.Xh));return{lambdaClient:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])),o=await a.document.parseDocument.mutate({id:i.id});p(r,{content:o.content||``,createdAt:o.createdAt?new Date(o.createdAt):new Date,editorData:typeof o.editorData==`string`?JSON.parse(o.editorData):o.editorData||null,fileType:o.fileType||`custom/document`,filename:o.filename||n,id:o.id,metadata:o.metadata||{},source:o.source||`document`,sourceType:o.sourceType||`file`,title:o.title||n,totalCharCount:o.totalCharCount||0,totalLineCount:o.totalLineCount||0,updatedAt:o.updatedAt?new Date(o.updatedAt):new Date}),h(o.id,!1);let s=ne(o.id),c=s?`/page/${s}`:`/page`;window.history.replaceState({},``,c)}catch(e){throw console.error(`Failed to upload and parse file:`,e),L.getState().removeTempPage(r),e}}}catch(e){console.error(`Failed to upload file:`,e)}finally{c(!1)}return!1},disabled:!i||a,multiple:!1,showUploadList:!1,children:(0,q.jsxs)(s,{className:Y.card,padding:16,style:{cursor:i?void 0:`not-allowed`,opacity:!i||a?.5:1},children:[(0,q.jsx)(`span`,{className:Y.actionTitle,children:a?`Uploading...`:r(`pageEditor.empty.uploadFiles`)}),(0,q.jsx)(`div`,{className:Y.glow,style:{background:j.gold}}),(0,q.jsx)(z,{className:Y.icon,color:j.gold,icon:(0,q.jsx)(l,{color:`#fff`,icon:g}),size:J,type:`file`})]})}),(0,q.jsxs)(s,{className:Y.card,padding:16,style:i?void 0:{cursor:`not-allowed`,opacity:.5},onClick:()=>{i&&S.handleOpenNotionGuide()},children:[(0,q.jsx)(`span`,{className:Y.actionTitle,children:r(`pageEditor.empty.importNotion`)}),(0,q.jsx)(`div`,{className:Y.glow,style:{background:j.geekblue}}),(0,q.jsx)(z,{className:Y.icon,color:j.geekblue,icon:(0,q.jsx)(U,{color:`#fff`}),size:J,type:`file`})]})]})]}),(0,q.jsx)(`input`,{accept:`.zip`,ref:S.notionInputRef,style:{display:`none`},type:`file`,onChange:C})]})})})),Z,Q,$;e((()=>{Z=t(i()),ee(),C(),re(),Q=t(a()),$=()=>(0,Q.jsx)(Z.Suspense,{fallback:O((0,Q.jsx)(te,{variant:`editor`})),children:(0,Q.jsx)(X,{})})}))();export{$ as default};