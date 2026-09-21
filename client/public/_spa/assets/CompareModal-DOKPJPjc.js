import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,Q as r,V as i,j as a,z as o}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as s,T as c}from"../vendor/vendor-react-B9HSWrpN.js";import{Kt as l,Mt as ee,Nt as u,at as d,h as f,it as p,qt as m}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Ei as te,cd as ne,t as h}from"../vendor/vendor-icons-vienkZi5.js";import{FD as g,ID as _,Zf as v,aE as y,aS as b,gF as x,iE as re,mn as ie,pn as ae,sS as oe,uF as se}from"./index-w64_zsxD.js";import{n as ce,t as le}from"./Tag-C95BKTI7.js";import{n as ue,t as de}from"./Empty-Dam8NCz3.js";import{n as S,t as C}from"./useAuthorInfo-DrU1zgiU.js";import{d as fe,f as w}from"./Messages-DmeZ4Iq1.js";import{a as T,i as pe,n as me,o as he}from"./document-VhUP-HVQ.js";var E=e((()=>{})),D,O,k,A,j,M,N,P,F=e((()=>{g(),fe(),ue(),m(),h(),D=t(s()),a(),y(),b(),ie(),me(),T(),O=t(c()),k={container:_(`acss-3frgtr`,[`.acss-3frgtr{overflow:hidden;display:flex;flex:1;flex-direction:column;min-height:0;background:var(--ant-color-bg-container);}`],`
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;

    min-height: 0;

    background: var(--ant-color-bg-container);
  `),content:_(`acss-1sp75fk`,[`.acss-1sp75fk{overflow:auto;flex:1;min-height:0;}`],`
    overflow: auto;
    flex: 1;
    min-height: 0;
  `),empty:_(`acss-khf9kv`,[`.acss-khf9kv{padding:24px;}`],`
    padding: 24px;
  `)},A=e=>typeof e==`object`&&!!e,j=e=>A(e)&&A(e.root)&&Array.isArray(e.root.children),M=e=>A(e)&&e.type===`root`&&Array.isArray(e.children),N=e=>j(e)?e:M(e)?{root:e}:null,P=(0,D.memo)(({documentId:e,historyId:t})=>{let{t:r}=n(`file`),{data:i,error:a,isLoading:o}=oe([`page-editor-document-history-compare`,e,t,pe(t=>he.lastUpdatedTime(e)(t)??null)],async()=>ae.compareDocumentHistoryItems({documentId:e,fromHistoryId:`head`,toHistoryId:t})),s=(0,D.useMemo)(()=>({new:r(`pageEditor.history.compareOldLabel`),old:r(`pageEditor.history.compareCurrentLabel`)}),[r]),c=(0,D.useMemo)(()=>{let e=N(i?.from.editorData);return{newValue:N(i?.to.editorData),oldValue:e}},[i?.from.editorData,i?.to.editorData]);return(0,O.jsx)(l,{className:k.container,flex:1,gap:0,children:o&&!i?(0,O.jsx)(l,{align:`center`,className:k.empty,justify:`center`,children:(0,O.jsx)(re,{})}):a||!i||!c.oldValue||!c.newValue?(0,O.jsx)(l,{align:`center`,className:k.empty,justify:`center`,children:(0,O.jsx)(de,{description:r(`pageEditor.history.compareError`),icon:ne})}):(0,O.jsx)(`div`,{className:k.content,children:(0,O.jsx)(w,{appearance:`borderless`,labels:s,newValue:c.newValue,oldValue:c.oldValue,variant:`chat`})})})}),P.displayName=`DocumentHistoryDiff`})),I,L,R,z=e((()=>{I=t(r()),L=e=>(0,I.default)(e).format(`MMMM D, YYYY h:mm A`),R=e=>(0,I.default)(e).format(`h:mm A`)})),B,V,H,U,W,G,K,ge=e((()=>{g(),m(),ce(),d(),se(),B=t(r()),V=t(s()),a(),C(),z(),H=t(c()),U={container:_(`acss-132pdi2`,[`.acss-132pdi2{overflow-y:auto;flex-shrink:0;width:232px;padding-block:4px 12px;padding-inline:8px;border-inline-start:1px solid var(--ant-color-border-secondary);background:var(--ant-color-bg-container);}`],`
    overflow-y: auto;
    flex-shrink: 0;

    width: 232px;
    padding-block: 4px 12px;
    padding-inline: 8px;
    border-inline-start: 1px solid var(--ant-color-border-secondary);

    background: var(--ant-color-bg-container);
  `),dot:_(`acss-14tsu2u`,[`.acss-14tsu2u{position:absolute;inset-block-start:9px;inset-inline-start:5px;width:8px;height:8px;border:1px solid var(--ant-color-border);border-radius:999px;background:var(--ant-color-bg-container);box-shadow:0 0 0 2px var(--ant-color-bg-container);}`],`
    position: absolute;
    inset-block-start: 9px;
    inset-inline-start: 5px;

    width: 8px;
    height: 8px;
    border: 1px solid var(--ant-color-border);
    border-radius: 999px;

    background: var(--ant-color-bg-container);
    box-shadow: 0 0 0 2px var(--ant-color-bg-container);
  `),dotCurrent:_(`acss-e5ir7e`,[`.acss-e5ir7e{border-color:var(--ant-color-success);background:var(--ant-color-success);}`],`
    border-color: var(--ant-color-success);
    background: var(--ant-color-success);
  `),dotSelected:_(`acss-1yaxv85`,[`.acss-1yaxv85{border-color:var(--ant-color-primary);background:var(--ant-color-primary);}`],`
    border-color: var(--ant-color-primary);
    background: var(--ant-color-primary);
  `),group:_(`acss-1psltl0`,[`.acss-1psltl0{position:relative;}`],`
    position: relative;
  `),groupHeader:_(`acss-v0w1k`,[`.acss-v0w1k{position:sticky;z-index:1;inset-block-start:0;padding-block:10px 6px;padding-inline-start:24px;font-size:11px;font-weight:500;line-height:1.2;background:var(--ant-color-bg-container);}`],`
    position: sticky;
    z-index: 1;
    inset-block-start: 0;

    padding-block: 10px 6px;
    padding-inline-start: 24px;

    font-size: 11px;
    font-weight: 500;
    line-height: 1.2;

    background: var(--ant-color-bg-container);
  `),item:_(`acss-yy892f`,[`.acss-yy892f{cursor:pointer;padding-block:4px;padding-inline:8px;border-radius:6px;transition:background var(--ant-motion-duration-mid) var(--ant-motion-ease-in-out);}`,`.acss-yy892f:hover{background:var(--ant-color-fill-quaternary);}`],`
    cursor: pointer;

    padding-block: 4px;
    padding-inline: 8px;
    border-radius: 6px;

    transition: background var(--ant-motion-duration-mid) var(--ant-motion-ease-in-out);

    &:hover {
      background: var(--ant-color-fill-quaternary);
    }
  `),itemCurrent:_(`acss-fm3gbz`,[`.acss-fm3gbz{cursor:default;}`],`
    cursor: default;
  `),itemSelected:_(`acss-7vjqrc`,[`.acss-7vjqrc{background:var(--ant-color-fill-secondary);}`,`.acss-7vjqrc:hover{background:var(--ant-color-fill-secondary);}`],`
    background: var(--ant-color-fill-secondary);

    &:hover {
      background: var(--ant-color-fill-secondary);
    }
  `),source:_(`acss-1b5fs6n`,[`.acss-1b5fs6n{overflow:hidden;margin-inline-start:auto;padding-inline-start:8px;font-size:11px;line-height:1.3;color:var(--ant-color-text-tertiary);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    margin-inline-start: auto;
    padding-inline-start: 8px;

    font-size: 11px;
    line-height: 1.3;
    color: var(--ant-color-text-tertiary);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),meta:_(`acss-eaqpyk`,[`.acss-eaqpyk{overflow:hidden;font-size:11px;line-height:1.3;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    font-size: 11px;
    line-height: 1.3;
    text-overflow: ellipsis;
    white-space: nowrap;
  `),rail:_(`acss-lwia6y`,[`.acss-lwia6y{position:absolute;inset-block:2px;inset-inline-start:8px;width:1px;background:var(--ant-color-fill-tertiary);}`],`
    position: absolute;
    inset-block: 2px;
    inset-inline-start: 8px;

    width: 1px;

    background: var(--ant-color-fill-tertiary);
  `),row:_(`acss-1nhfv02`,[`.acss-1nhfv02{position:relative;padding-inline-start:24px;}`],`
    position: relative;
    padding-inline-start: 24px;
  `),tag:_(`acss-1ssvkus`,[`.acss-1ssvkus{height:16px;padding-inline:4px;font-size:10px;}`],`
    height: 16px;
    padding-inline: 4px;
    font-size: 10px;
  `),time:_(`acss-areb9b`,[`.acss-areb9b{font-size:12px;font-weight:600;line-height:1.3;}`],`
    font-size: 12px;
    font-weight: 600;
    line-height: 1.3;
  `)},W=(e,t)=>{let n=new Map;for(let r of e){let e=(0,B.default)(r.savedAt).format(`YYYY-MM-DD`),i=n.get(e);if(i){i.items.push(r);continue}n.set(e,{items:[r],key:e,label:t(r.savedAt)})}return[...n.values()]},G=(0,V.memo)(({item:e,isSelected:t,onSelect:r,saveSourceLabels:i})=>{let{t:a}=n(`file`),o=S(e.userId),s=e.isCurrent;return(0,H.jsxs)(`div`,{className:U.row,children:[(0,H.jsx)(`div`,{className:x(U.dot,e.isCurrent&&U.dotCurrent,!e.isCurrent&&t&&U.dotSelected)}),(0,H.jsx)(`div`,{className:x(U.item,e.isCurrent&&U.itemCurrent,!e.isCurrent&&t&&U.itemSelected),onClick:()=>{s||r(e.id)},children:(0,H.jsxs)(l,{gap:2,children:[(0,H.jsxs)(l,{horizontal:!0,align:`center`,gap:4,children:[(0,H.jsx)(p,{className:U.time,children:R(e.savedAt)}),e.isCurrent&&(0,H.jsx)(le,{className:U.tag,variant:`borderless`,children:a(`pageEditor.history.current`)}),(0,H.jsx)(`span`,{className:U.source,children:i[e.saveSource]})]}),(0,H.jsxs)(p,{className:U.meta,type:`secondary`,children:[o?.fullName?`${o.fullName} · `:``,(0,B.default)(e.savedAt).fromNow()]})]})})]})}),G.displayName=`HistorySidebarRow`,K=(0,V.memo)(({items:e,onSelect:t,saveSourceLabels:r,selectedHistoryId:i})=>{let{t:a}=n(`file`),o=(0,V.useCallback)(e=>{let t=(0,B.default)(e);return t.isToday()?a(`pageEditor.history.dayLabel.today`):t.isYesterday()?a(`pageEditor.history.dayLabel.yesterday`):t.format(`MM-DD`)},[a]),s=(0,V.useMemo)(()=>W(e,o),[o,e]);return(0,H.jsx)(`div`,{className:U.container,children:s.map(e=>(0,H.jsxs)(l,{gap:0,children:[(0,H.jsx)(`div`,{className:U.groupHeader,children:(0,H.jsx)(p,{type:`secondary`,children:e.label})}),(0,H.jsxs)(`div`,{className:U.group,children:[(0,H.jsx)(`div`,{className:U.rail}),e.items.map(e=>(0,H.jsx)(G,{isSelected:i===e.id,item:e,saveSourceLabels:r,onSelect:t},e.id))]})]},e.key))})}),K.displayName=`HistorySidebar`})),q,J,Y,X,Z,_e=e((()=>{g(),m(),u(),d(),q=t(r()),h(),J=t(s()),a(),C(),F(),z(),ge(),Y=t(c()),X={arrow:_(`acss-xwvxkr`,[`.acss-xwvxkr{font-size:12px;color:var(--ant-color-text-tertiary);}`],`
    font-size: 12px;
    color: var(--ant-color-text-tertiary);
  `),badgeNew:_(`acss-6l8mqz`,[`.acss-6l8mqz{display:inline-flex;gap:4px;align-items:center;padding-block:2px;padding-inline:8px;border-radius:4px;font-size:11px;font-weight:600;line-height:1.2;color:var(--ant-color-success);background:var(--ant-color-success-bg);}`],`
    display: inline-flex;
    gap: 4px;
    align-items: center;

    padding-block: 2px;
    padding-inline: 8px;
    border-radius: 4px;

    font-size: 11px;
    font-weight: 600;
    line-height: 1.2;
    color: var(--ant-color-success);

    background: var(--ant-color-success-bg);
  `),badgeOld:_(`acss-6qisgw`,[`.acss-6qisgw{display:inline-flex;align-items:center;padding-block:2px;padding-inline:8px;border-radius:4px;font-size:11px;font-weight:600;line-height:1.2;color:var(--ant-color-error);background:var(--ant-color-error-bg);}`],`
    display: inline-flex;
    align-items: center;

    padding-block: 2px;
    padding-inline: 8px;
    border-radius: 4px;

    font-size: 11px;
    font-weight: 600;
    line-height: 1.2;
    color: var(--ant-color-error);

    background: var(--ant-color-error-bg);
  `),cmpbar:_(`acss-1bix4km`,[`.acss-1bix4km{display:flex;align-items:center;justify-content:space-between;padding-block:10px;padding-inline:16px;border-block-end:1px solid var(--ant-color-border-secondary);background:var(--ant-color-bg-layout);}`],`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-block: 10px;
    padding-inline: 16px;
    border-block-end: 1px solid var(--ant-color-border-secondary);

    background: var(--ant-color-bg-layout);
  `),diffArea:_(`acss-mwwu3v`,[`.acss-mwwu3v{overflow:hidden;display:flex;flex:1;flex-direction:column;min-width:0;min-height:0;}`],`
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;

    min-width: 0;
    min-height: 0;
  `),diffBody:_(`acss-1sp75fk`,[`.acss-1sp75fk{overflow:auto;flex:1;min-height:0;}`],`
    overflow: auto;
    flex: 1;
    min-height: 0;
  `),meta:_(`acss-1xuh7ll`,[`.acss-1xuh7ll{margin-inline-start:8px;font-size:11px;line-height:1.2;}`],`
    margin-inline-start: 8px;
    font-size: 11px;
    line-height: 1.2;
  `),root:_(`acss-9bsgus`,[`.acss-9bsgus{overflow:hidden;display:flex;width:100%;height:100%;background:var(--ant-color-bg-container);}`],`
    overflow: hidden;
    display: flex;

    width: 100%;
    height: 100%;

    background: var(--ant-color-bg-container);
  `)},Z=(0,J.memo)(({documentId:e,initialHistoryId:t,items:r,onRestore:i,saveSourceLabels:a})=>{let{t:o}=n(`file`),[s,c]=(0,J.useState)(t),u=(0,J.useMemo)(()=>r.find(e=>e.id===s)??null,[r,s]),d=S(u?.userId);if(!u)return null;let f=!u.isCurrent;return(0,Y.jsxs)(`div`,{className:X.root,children:[(0,Y.jsxs)(`div`,{className:X.diffArea,children:[(0,Y.jsxs)(`div`,{className:X.cmpbar,children:[(0,Y.jsxs)(l,{horizontal:!0,align:`center`,gap:4,children:[(0,Y.jsx)(`span`,{className:X.badgeNew,children:o(`pageEditor.history.compareCurrentLabel`)}),(0,Y.jsx)(p,{className:X.arrow,children:`→`}),(0,Y.jsx)(`span`,{className:X.badgeOld,children:L(u.savedAt)}),(0,Y.jsxs)(p,{className:X.meta,type:`secondary`,children:[(0,q.default)(u.savedAt).fromNow(),` ·`,` `,a[u.saveSource]]}),d?.fullName&&(0,Y.jsxs)(p,{className:X.meta,title:d.fullName,type:`secondary`,children:[`· `,d.fullName]})]}),f&&(0,Y.jsxs)(ee,{icon:te,size:`small`,onClick:()=>i(u),children:[o(`pageEditor.history.restore`),` `,L(u.savedAt)]})]}),(0,Y.jsx)(`div`,{className:X.diffBody,children:(0,Y.jsx)(P,{documentId:e,historyId:u.id})})]}),(0,Y.jsx)(K,{items:r,saveSourceLabels:a,selectedHistoryId:s,onSelect:c})]})}),Z.displayName=`CompareContent`})),Q,$,ve=e((()=>{v(),o(),_e(),Q=t(c()),$=e=>f({content:(0,Q.jsx)(Z,{...e}),footer:null,styles:{content:{display:`flex`,height:`min(72vh, 800px)`,overflow:`hidden`,padding:0}},title:i(`pageEditor.history.compareTitle`,{ns:`file`}),width:`min(92vw, 1200px)`})}));export{z as a,R as i,$ as n,E as o,L as r,ve as t};