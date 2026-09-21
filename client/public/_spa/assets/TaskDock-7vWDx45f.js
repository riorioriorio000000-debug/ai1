import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{B as o,Kt as s,Mt as c,Nt as l,Xn as u,Zn as d,at as f,it as p,qt as m,z as h}from"../vendor/vendor-ui-core-BmtybT1r.js";import{D as g,T as _,o as v,v as ee}from"../vendor/vendor-ui-runtime-NzUbUsUl.js";import{bp as y,c as b,cg as te,mh as ne,mm as re,t as x,ug as ie,ut as ae,wc as oe,wi as se}from"../vendor/vendor-icons-vienkZi5.js";import{FD as S,ID as C,Kd as ce,Ud as w,Wd as le,Yd as T,hF as E,iC as ue,uF as de}from"./index-w64_zsxD.js";import{a as D,d as O,n as fe}from"./file-CX3iZ5dr.js";import{r as pe,t as me}from"./FileIcon-CDKQg3YR.js";import{n as he,t as ge}from"./FileUploadErrorActions-BKipZC1H.js";var k,A,j,M,_e=e((()=>{S(),m(),o(),l(),f(),x(),k=t(i()),r(),A=t(a()),j={action:C(`acss-rv4nks`,[`.acss-rv4nks{opacity:0;transition:opacity 0.2s ease;}`],`
    opacity: 0;
    transition: opacity 0.2s ease;
  `),container:C(`acss-1kqpkgd`,[`.acss-1kqpkgd:hover .dock-task-action{opacity:1;}`],`
    &:hover .dock-task-action {
      opacity: 1;
    }
  `),progress:C(`acss-htlc7`,[`.acss-htlc7{pointer-events:none;position:absolute;inset-block-end:0;inset-inline-start:0;height:2px;background:var(--ant-geekblue);transition:inset-inline-end 0.2s linear;}`],`
    pointer-events: none;

    position: absolute;
    inset-block-end: 0;
    inset-inline-start: 0;

    height: 2px;

    background: var(--ant-geekblue);

    transition: inset-inline-end 0.2s linear;
  `),result:C(`acss-1eeobu`,[`.acss-1eeobu{border-block-start:1px solid var(--ant-color-fill-quaternary);background:var(--ant-color-fill-quaternary);}`],`
    border-block-start: 1px solid var(--ant-color-fill-quaternary);
    background: var(--ant-color-fill-quaternary);
  `),resultLabel:C(`acss-18ms3ln`,[`.acss-18ms3ln{min-width:0;font-family:var(--ant-font-family-code);font-size:var(--ant-font-size-sm)px;}`],`
    min-width: 0;
    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size-sm)px;
  `),title:C(`acss-1d4qwuk`,[`.acss-1d4qwuk{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;font-size:14px;line-height:1.4;text-overflow:ellipsis;}`],`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    font-size: 14px;
    line-height: 1.4;
    text-overflow: ellipsis;
  `)},M=(0,k.memo)(({cancel:e,detail:t,dismiss:r,extra:i,icon:a,progress:o,result:l,retry:u,solo:d,status:f,title:m})=>{let{t:g}=n(`common`),_=r&&f!==`running`&&f!==`pending`;return(0,A.jsxs)(s,{children:[(0,A.jsxs)(s,{horizontal:!0,align:`center`,className:j.container,gap:12,paddingBlock:8,paddingInline:12,style:{position:`relative`},children:[a,(0,A.jsxs)(s,{flex:1,gap:2,style:{overflow:`hidden`},children:[(0,A.jsx)(`div`,{className:j.title,children:m}),t,i]}),e&&(0,A.jsx)(h,{className:`${j.action} dock-task-action`,icon:b,size:`small`,title:g(`cancel`),onClick:e}),u&&(0,A.jsx)(h,{icon:se,size:`small`,title:g(`retry`),onClick:u}),_&&(0,A.jsx)(h,{icon:b,size:`small`,title:g(`close`),onClick:r}),f===`running`&&o!==void 0&&(0,A.jsx)(`div`,{className:j.progress,style:{insetInlineEnd:`${100-o}%`}})]}),l&&(0,A.jsxs)(s,{horizontal:!0,align:`center`,className:j.result,gap:8,paddingBlock:6,style:{paddingInlineEnd:8,paddingInlineStart:d?12:48},children:[(0,A.jsx)(p,{ellipsis:!0,className:j.resultLabel,type:l.onOpen?void 0:`secondary`,children:l.label}),l.onCopy&&(0,A.jsx)(h,{icon:re,size:`small`,title:g(`copy`),onClick:l.onCopy}),l.onOpen&&(0,A.jsx)(h,{icon:y,size:`small`,title:g(`taskDock.open`),onClick:l.onOpen}),l.action&&(0,A.jsx)(c,{size:`small`,onClick:l.onAction,children:l.action})]})]})}),M.displayName=`TaskDockItem`})),N,P,F,I,L,R,ve=e((()=>{N=new Set([`pending`,`running`]),P=e=>N.has(e.status),F=e=>{let t=e.filter(P),n=t.length>0?`running`:e.some(e=>e.status===`error`)?`error`:e.some(e=>e.status===`success`)?`success`:`cancelled`,r=t.length===0?100:t.reduce((e,t)=>e+(t.progress??0),0)/t.length;return{activeCount:t.length,progress:r,status:n}},I=e=>e.some(e=>P(e)&&!!e.cancel),L=e=>{let t=[];for(let n of e){let e=t.find(e=>e.label===n.groupLabel);e?e.tasks.push(n):t.push({label:n.groupLabel,tasks:[n]})}return t},R=e=>e.status===`success`&&!e.result}));function ye(){return[]}var be=e((()=>{})),z,B,V,H,U,xe=e((()=>{f(),z=t(ue()),B=t(i()),r(),he(),pe(),fe(),T(),V=t(a()),H={cancelled:`cancelled`,error:`error`,pending:`pending`,processing:`running`,success:`success`,uploading:`running`},U=()=>{let{t:e}=n([`file`,`common`]),t=D(O.dockFileList,z.default),r=D(e=>e.cancelUpload),i=D(e=>e.cancelUploads),a=D(e=>e.retryDockUpload),o=D(e=>e.dispatchDockFileList),s=(0,B.useCallback)(({error:t,file:n,status:r,uploadState:i})=>{let a=w(n.size);switch(r){case`uploading`:{let t=[i?.speed?le(i.speed):``,i?.restTime?e(`uploadDock.body.item.restTime`,{time:ce(i.restTime)}):``].filter(Boolean);return(0,V.jsxs)(p,{style:{fontSize:12},type:`secondary`,children:[i?.progress?w(n.size*(i.progress/100)):`-`,`/`,a,t.length===0?``:` · `+t.join(` · `)]})}case`pending`:return(0,V.jsxs)(p,{style:{fontSize:12},type:`secondary`,children:[a,` · `,e(`uploadDock.body.item.pending`),i?.progress?` ${i.progress}%`:``]});case`processing`:return(0,V.jsxs)(p,{style:{fontSize:12},type:`secondary`,children:[a,` · `,e(`uploadDock.body.item.processing`)]});case`success`:return(0,V.jsxs)(p,{style:{fontSize:12},type:`secondary`,children:[a,` · `,e(`uploadDock.body.item.done`)]});case`error`:return(0,V.jsx)(p,{style:{fontSize:12},type:`danger`,children:t||`${a} · ${e(`uploadDock.body.item.error`)}`});case`cancelled`:return(0,V.jsxs)(p,{style:{fontSize:12},type:`warning`,children:[a,` · `,e(`uploadDock.body.item.cancelled`)]})}},[e]),c=(0,B.useCallback)(()=>{i(t.filter(e=>e.status===`uploading`||e.status===`pending`).map(e=>e.id))},[i,t]);return(0,B.useMemo)(()=>t.map(t=>{let{errorCode:n,file:i,id:l,status:u,uploadState:d}=t,f=u===`uploading`||u===`pending`;return{...u===`error`&&!n?{retry:()=>void a(l)}:{},...f?{cancel:()=>r(l)}:{},detail:s(t),groupCancel:c,dismiss:()=>o({ids:[l],type:`removeFiles`}),extra:n?(0,V.jsx)(ge,{code:n}):void 0,groupLabel:e(`taskDock.group.upload`,{ns:`common`}),icon:(0,V.jsx)(me,{fileName:i.name,fileType:i.type,size:30}),id:l,progress:d?.progress,status:H[u],title:i.name}}),[c,r,s,o,t,a])}})),W,G,Se=e((()=>{W=t(i()),be(),xe(),G=()=>{let e=ye(),t=U();return(0,W.useMemo)(()=>[...e,...t],[e,t])}})),K,q,J,Y,X,Z,Q,$;e((()=>{S(),m(),d(),o(),f(),de(),x(),v(),_(),K=t(i()),r(),_e(),ve(),Se(),q=t(a()),J=3e3,Y=400,X={container:C(`acss-18n7u92`,[`.acss-18n7u92{position:fixed;z-index:100;inset-block-end:24px;inset-inline-end:24px;overflow:hidden;width:340px;border:1px solid var(--ant-color-border-secondary);border-radius:12px;background:var(--ant-color-bg-container);box-shadow:var(--ant-box-shadow-secondary);}`],`
    position: fixed;
    z-index: 100;
    inset-block-end: 24px;
    inset-inline-end: 24px;

    overflow: hidden;

    width: 340px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: 12px;

    background: var(--ant-color-bg-container);
    box-shadow: var(--ant-box-shadow-secondary);
  `),groupHead:C(`acss-1wgsisg`,[`.acss-1wgsisg{border-block-end:1px solid var(--ant-color-fill-quaternary);font-family:var(--ant-font-family-code);font-size:11px;color:var(--ant-color-text-description);text-transform:uppercase;letter-spacing:0.08em;background:var(--ant-color-fill-quaternary);}`],`
    border-block-end: 1px solid var(--ant-color-fill-quaternary);

    font-family: var(--ant-font-family-code);
    font-size: 11px;
    color: var(--ant-color-text-description);
    text-transform: uppercase;
    letter-spacing: 0.08em;

    background: var(--ant-color-fill-quaternary);
  `),head:C(`acss-dfg2ow`,[`.acss-dfg2ow{cursor:pointer;padding-block:9px;padding-inline:12px;}`],`
    cursor: pointer;
    padding-block: 9px;
    padding-inline: 12px;
  `),headDivider:C(`acss-to5gs`,[`.acss-to5gs{border-block-end:1px solid var(--ant-color-border-secondary);}`],`
    border-block-end: 1px solid var(--ant-color-border-secondary);
  `),list:C(`acss-648621`,[`.acss-648621{overflow-y:auto;max-height:340px;}`],`
    overflow-y: auto;
    max-height: 340px;
  `),row:C(`acss-b6wbq`,[`.acss-b6wbq:not(:first-child){border-block-start:1px solid var(--ant-color-fill-quaternary);}`],`
    &:not(:first-child) {
      border-block-start: 1px solid var(--ant-color-fill-quaternary);
    }
  `)},Z=e=>{let[t,n]=(0,K.useState)(e>1?`panel`:`solo`);return(0,K.useEffect)(()=>{let r=e>1?`panel`:`solo`;if(r===t)return;if(r===`panel`){n(`panel`);return}let i=setTimeout(()=>n(`solo`),Y);return()=>clearTimeout(i)},[e,t]),t},Q=e=>{let t=(0,K.useRef)(e);t.current=e;let n=e.filter(e=>R(e)&&!!e.dismiss).map(e=>e.id).join(`|`);(0,K.useEffect)(()=>{if(!n)return;let e=n.split(`|`).map(e=>setTimeout(()=>{let n=t.current.find(t=>t.id===e);n&&R(n)&&n.dismiss?.()},J));return()=>e.forEach(e=>clearTimeout(e))},[n])},$=(0,K.memo)(()=>{let{t:e}=n(`common`),[t,r]=(0,K.useState)(!0),i=G(),a=Z(i.length);Q(i);let{activeCount:o,status:c}=(0,K.useMemo)(()=>F(i),[i]),l=(0,K.useMemo)(()=>L(i),[i]),d=c===`running`,f=(0,K.useMemo)(()=>I(i),[i]),m=(0,K.useCallback)(()=>{i.forEach(e=>e.dismiss?.())},[i]),_=(0,K.useCallback)(()=>{let e=new Set;for(let t of i){if(!t.groupCancel){t.cancel?.();continue}e.has(t.groupLabel)||(e.add(t.groupLabel),t.groupCancel())}},[i]),v=(0,K.useMemo)(()=>{switch(c){case`success`:return(0,q.jsx)(u,{color:E.colorSuccess,icon:ie,size:16});case`error`:return(0,q.jsx)(u,{color:E.colorError,icon:ae,size:16});case`cancelled`:return(0,q.jsx)(u,{color:E.colorTextDescription,icon:ne,size:16});default:return(0,q.jsx)(u,{spin:!0,icon:oe,size:16})}},[c]);return i.length===0?null:a===`solo`?(0,q.jsx)(s,{className:X.container,children:(0,q.jsx)(M,{...i[0],solo:!0})}):(0,q.jsxs)(s,{className:X.container,children:[(0,q.jsxs)(s,{horizontal:!0,align:`center`,className:`${X.head} ${t?X.headDivider:``}`,gap:10,onClick:()=>r(!t),children:[v,(0,q.jsxs)(s,{horizontal:!0,align:`baseline`,flex:1,gap:7,style:{minWidth:0},children:[(0,q.jsx)(p,{style:{fontSize:14},children:e(`taskDock.status.${c}`)}),(0,q.jsx)(p,{ellipsis:!0,style:{fontSize:12},type:`secondary`,children:o>0?e(`taskDock.activeOf`,{active:o,total:i.length}):e(`taskDock.totalCount`,{count:i.length})})]}),(0,q.jsxs)(s,{horizontal:!0,align:`center`,gap:4,onClick:e=>{e.stopPropagation()},children:[f&&(0,q.jsx)(p,{style:{cursor:`pointer`,flexShrink:0,fontSize:12},type:`secondary`,onClick:_,children:e(`taskDock.cancelAll`)}),d?(0,q.jsx)(h,{icon:te,size:`small`,style:{transform:t?void 0:`rotate(180deg)`},title:e(t?`taskDock.collapse`:`taskDock.expand`),onClick:()=>r(!t)}):(0,q.jsx)(h,{icon:b,size:`small`,onClick:m})]})]}),(0,q.jsx)(ee,{initial:!1,children:t&&(0,q.jsx)(g,{animate:{height:`auto`,opacity:1},exit:{height:0,opacity:0},initial:{height:0,opacity:0},style:{overflow:`hidden`},transition:{duration:.22,ease:`easeInOut`},children:(0,q.jsx)(s,{className:X.list,children:l.map(e=>(0,q.jsxs)(s,{children:[(0,q.jsxs)(s,{horizontal:!0,align:`center`,className:X.groupHead,justify:`space-between`,paddingBlock:5,style:{paddingInlineEnd:19,paddingInlineStart:12},children:[(0,q.jsx)(`span`,{children:e.label}),(0,q.jsx)(`span`,{children:e.tasks.some(P)?`${e.tasks.filter(P).length} / ${e.tasks.length}`:e.tasks.length})]}),e.tasks.map(e=>(0,q.jsx)(s,{className:X.row,children:(0,q.jsx)(M,{...e})},e.id))]},e.label))})})})]})}),$.displayName=`TaskDock`}))();export{$ as default};