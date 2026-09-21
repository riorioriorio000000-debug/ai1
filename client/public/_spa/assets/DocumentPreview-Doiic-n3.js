const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/exceljs.min-HZhgX9lC.js","assets/rolldown-runtime-CMxvf4Kt.js","assets/aiden0z-pptx-renderer.es-B5eFT1uP.js","assets/jszip.min-Bu5IOKeO.js","assets/docx-preview-DPTA02Bp.js"])))=>i.map(i=>d[i]);
import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{Bt as o,Kt as s,Mt as c,Nt as l,Vt as u,at as d,it as f,qt as p}from"../vendor/vendor-ui-core-BmtybT1r.js";import{AA as m,FD as h,ID as g,aE as _,iE as v,jA as y}from"./index-w64_zsxD.js";import{n as ee,o as b,r as x,t as te}from"./pdfjs-DOe74IKU.js";import{c as ne,s as re}from"./upload-D5Kt3WUo.js";import{n as ie,t as ae}from"./Tabs-DH_wa3T6.js";import{r as oe,t as se}from"./FileIcon-CDKQg3YR.js";import{n as ce,t as le}from"./TextLayer-BwSWJkxS.js";var S,ue,de,C,w,fe,pe=e((()=>{S=/合计|小计|总计|净额|总额|汇总|total|sum|subtotal/i,ue=.7,de=.6,C=e=>e.s.fs??11,w=e=>{let t=[];for(let n of e){let e=n.cells.filter(e=>e.t.trim());e.length>0?t.push({blankAfter:0,cells:e,r:n.r}):t.length>0&&(t.at(-1).blankAfter+=1)}return t},fe=e=>{let t=e.cols.length,n=w(e.rows),r=e=>{let[n]=e.cells;return e.cells.length===1&&n.c===1&&(n.cs??1)>=Math.max(2,t*.8)},i=n.filter(e=>!r(e)).flatMap(e=>e.cells.map(e=>C(e))).sort((e,t)=>e-t),a=i.length>0?i[Math.floor(i.length/2)]:11,o=n.filter(e=>r(e)),s=o.reduce((e,t)=>Math.max(e,C(t.cells[0])),0),c=o.filter(e=>C(e.cells[0])===s),l=null,u=null,d=0,[f,p]=n;f&&r(f)&&f.r<=2&&C(f.cells[0])===s&&s>a&&c.length===1&&(l=f.cells[0],d=1,p&&r(p)&&p.cells[0].s.bg===l.s.bg&&C(p.cells[0])<s&&(u=p.cells[0],d=2));let m=e=>{if(!r(e))return!1;let[t]=e.cells;return!!t.s.b&&(!!t.s.bg||C(t)>a)},h=[],g=null,_=e=>{let t={blank:0,body:[],header:null,notes:[],rows:[],title:e};return h.push(t),t};for(let e of n.slice(d)){if(m(e)){g=_(e.cells[0].t);continue}if(g??=_(null),r(e)){g.rows.push({cells:e.cells,kind:`note`});continue}g.rows.push({cells:e.cells,kind:`row`}),g.blank+=e.blankAfter}let v=e=>{let t=e.rows;for(let[e,n]of t.entries()){if(n.kind!==`row`||n.cells.length<2||!n.cells.every(e=>e.s.b&&e.s.bg))continue;let r=n.cells[0].s.bg;if(n.cells.every(e=>e.s.bg===r)&&!n.cells.some(e=>S.test(e.t))&&t.slice(e+1).some(e=>e.kind===`row`))return n}return null},y={aside:0,chrome:0,kv:0,note:0,table:0};l&&(y.chrome+=1),u&&(y.chrome+=1);for(let e of h){e.title&&(y.chrome+=1);let t=v(e);e.header=t?.cells??null;let n=t?.cells.map(e=>e.c)??[];for(let r of e.rows){if(r.kind===`note`){e.notes.push(r.cells[0].t),y.note+=1;continue}if(t&&r===t){y.chrome+=1;continue}if(!t){e.body.push({cells:r.cells,kind:`kv`}),y.kv+=1;continue}let i=r.cells.filter(e=>n.includes(e.c)),a=r.cells.filter(e=>!n.includes(e.c));if(!(i.length>=Math.ceil(r.cells.length*.6)&&n.includes(r.cells[0].c))){y.aside+=1,e.body.push({cells:r.cells,kind:`kv`});continue}let o=r.cells.some(e=>S.test(e.t));e.body.push({cells:i,extras:a,kind:o?`total`:`data`}),y.table+=1}}let ee=y.table+y.chrome+y.note+y.kv*de,b=y.table+y.chrome+y.note+y.kv+y.aside,x=b>0?ee/b:0;return{bodyFontSize:a,confidence:x,mode:x>=ue?`reflow`:`fidelity`,sections:h.map(({rows:e,...t})=>t),stats:y,subtitle:u,title:l}}})),T,me,E,he,ge,_e,ve,ye,D,be,xe,Se,Ce=e((()=>{y(),T=e=>{let t=e?.argb;if(t)return`#`+(t.length===8?t.slice(2):t)},me=(e,t)=>{if(!t||t===`General`)return String(Math.round(e*1e10)/1e10);let n=t.split(`;`),r=e<0&&!!n[1],i=r?n[1]:e===0&&n[2]?n[2]:n[0];if(!/[0#]/.test(i))return i.replaceAll(`"`,``);let a=i.includes(`%`),o=Math.abs(a?e*100:e),s=/E[+-]?(0+)/i.exec(i),c=i.match(/\.([0#]+)/)?.[1]??``,l=c.length,u=c.replaceAll(`#`,``).length,d=i.search(/[0#]/),f=Math.max(i.lastIndexOf(`0`),i.lastIndexOf(`#`)),p=e<0&&!r?`-`:``,m=i.slice(0,d).replaceAll(`"`,``),h=i.slice(f+1).replaceAll(`"`,``);if(s){let[e,t]=o.toExponential(l).split(`e`),n=Number(t),r=n<0?`-`:`+`,i=String(Math.abs(n)).padStart(s[1].length,`0`);return p+m+e+`E`+r+i+h}let g=new Intl.NumberFormat(`en-US`,{maximumFractionDigits:l,minimumFractionDigits:u,useGrouping:i.includes(`#,##`)}).format(o);return p+m+g+h},E=(e,t)=>{if(e==null)return``;if(e instanceof Date)return e.toISOString().slice(0,10);if(typeof e==`number`)return me(e,t);if(typeof e==`object`){let n=e;if(n.richText)return n.richText.map(e=>e.text).join(``);if(n.formula!==void 0||n.sharedFormula!==void 0){let e=n.result;return E(e,t)}return n.text===void 0?n.error??``:String(n.text)}return String(e)},he=e=>E(e.value,e.numFmt),ge=e=>{let t=e.value;return typeof t==`number`?!0:typeof t?.result==`number`},_e={double:3,hair:1,medium:2,thick:3,thin:1},ve=e=>e?.style?[_e[e.style]??1,T(e.color)??`#bfbfbf`]:void 0,ye=(e,t)=>{let n=e.font??{},r=e.alignment??{},i=e.border??{},a={h:r.horizontal??(t?`right`:`left`)};n.bold&&(a.b=1),n.italic&&(a.i=1),n.size&&(a.fs=n.size),n.name&&(a.ff=n.name);let o=T(n.color);o&&(a.fc=o);let s=e.fill;if(s?.type===`pattern`&&s.pattern===`solid`){let e=T(s.fgColor);e&&(a.bg=e)}r.vertical&&(a.v=r.vertical),r.wrapText&&(a.w=1);let c={};for(let[e,t]of[[`t`,i.top],[`l`,i.left],[`b`,i.bottom],[`r`,i.right]]){let n=ve(t);n&&(c[e]=n)}return Object.keys(c).length>0&&(a.bd=c),a},D=e=>[...e].reduce((e,t)=>e*26+t.charCodeAt(0)-64,0),be=(e,t,n)=>{let r=new Map,i=new Set,a=new Set(t);for(let o of Object.values(e.model.merges??{})){let e=/([A-Z]+)(\d+):([A-Z]+)(\d+)/.exec(o);if(!e)continue;let s=D(e[1]),c=Number(e[2]),l=D(e[3]),u=Number(e[4]);if(!a.has(c)||s>n)continue;let d=t.filter(e=>e>=c&&e<=u).length,f=Math.min(l,n)-s+1;r.set(`${c}:${s}`,[d,f]);for(let e of t)if(!(e<c||e>u))for(let t=s;t<=Math.min(l,n);t++)(e!==c||t!==s)&&i.add(`${e}:${t}`)}return{covered:i,spans:r}},xe=e=>{let t=Math.max(e.actualColumnCount,1),n=e.views?.[0],r=[];e.eachRow(e=>{r.length<500&&r.push(e)});let{covered:i,spans:a}=be(e,r.map(e=>e.number),t),o=[];for(let e of r){let n=e.number,r=[];for(let o=1;o<=t;o++){if(i.has(`${n}:${o}`))continue;let t=e.getCell(o),s=he(t),c=ye(t,ge(t)),l=a.get(`${n}:${o}`);if(!s&&!c.bg&&!c.bd&&!l){r.push({c:o,s:{},t:``});continue}r.push({c:o,s:c,t:s,...l?{cs:l[1],rs:l[0]}:{}})}o.push({cells:r,h:e.height??null,r:n})}let s=[];for(let n=1;n<=t;n++)s.push(Math.round((e.getColumn(n).width??8.43)*7+5));return{cols:s,frozen:n?.state===`frozen`?{cols:n.xSplit??0,rows:n.ySplit??0}:null,name:e.name,rowCount:o.length,rows:o,truncated:e.actualRowCount>500}},Se=async e=>{let{Workbook:n}=await m(async()=>{let{Workbook:e}=await import(`./exceljs.min-HZhgX9lC.js`).then(e=>t(e.default));return{Workbook:e}},__vite__mapDeps([0,1])),r=new n;return await r.xlsx.load(await e.arrayBuffer()),r.worksheets.map(e=>xe(e))}})),O,we=e((()=>{h(),O={aside:g(`acss-p5x876`,[`.acss-p5x876{display:flex;flex-wrap:wrap;gap:10px;align-items:baseline;font-size:13px;}`],`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: baseline;

    font-size: 13px;
  `),asideLabel:g(`acss-15a5nk3`,[`.acss-15a5nk3{color:var(--ant-color-text-secondary);}`],`
    color: var(--ant-color-text-secondary);
  `),asideValue:g(`acss-1o9xc7a`,[`.acss-1o9xc7a{font-weight:500;font-variant-numeric:tabular-nums;}`],`
    font-weight: 500;
    font-variant-numeric: tabular-nums;
  `),chip:g(`acss-1rm1x5p`,[`.acss-1rm1x5p{padding-block:2px;padding-inline:10px;border-radius:5px;font-size:12.5px;font-weight:500;color:var(--ant-color-primary);background:var(--ant-color-primary-bg);}`],`
    padding-block: 2px;
    padding-inline: 10px;
    border-radius: 5px;

    font-size: 12.5px;
    font-weight: 500;
    color: var(--ant-color-primary);

    background: var(--ant-color-primary-bg);
  `),container:g(`acss-1ozzh2`,[`.acss-1ozzh2{overflow:auto;flex:1;background:var(--ant-color-bg-container);}`],`
    overflow: auto;
    flex: 1;
    background: var(--ant-color-bg-container);
  `),doc:g(`acss-apuekc`,[`.acss-apuekc{display:flex;flex-direction:column;gap:30px;max-width:920px;margin-inline:auto;padding-block:28px 44px;padding-inline:32px;}`],`
    display: flex;
    flex-direction: column;
    gap: 30px;

    max-width: 920px;
    margin-inline: auto;
    padding-block: 28px 44px;
    padding-inline: 32px;
  `),docHead:g(`acss-1s2uoqg`,[`.acss-1s2uoqg{display:flex;flex-direction:column;gap:6px;padding-block-end:18px;border-block-end:1px solid var(--ant-color-border-secondary);}`],`
    display: flex;
    flex-direction: column;
    gap: 6px;

    padding-block-end: 18px;
    border-block-end: 1px solid var(--ant-color-border-secondary);
  `),docSubtitle:g(`acss-apg50e`,[`.acss-apg50e{font-size:13.5px;line-height:1.6;color:var(--ant-color-text-secondary);}`],`
    font-size: 13.5px;
    line-height: 1.6;
    color: var(--ant-color-text-secondary);
  `),docTitle:g(`acss-1qxh0dv`,[`.acss-1qxh0dv{font-size:24px;font-weight:600;text-wrap:balance;letter-spacing:-0.015em;}`],`
    font-size: 24px;
    font-weight: 600;
    text-wrap: balance;
    letter-spacing: -0.015em;
  `),extra:g(`acss-1n5cxc`,[`.acss-1n5cxc{display:block;margin-block-start:2px;font-size:11px;color:var(--ant-color-text-quaternary);}`],`
    display: block;
    margin-block-start: 2px;
    font-size: 11px;
    color: var(--ant-color-text-quaternary);
  `),hint:g(`acss-1jiydez`,[`.acss-1jiydez{font-size:11.5px;line-height:1.6;color:var(--ant-color-text-quaternary);}`],`
    font-size: 11.5px;
    line-height: 1.6;
    color: var(--ant-color-text-quaternary);
  `),kv:g(`acss-185q91i`,[`.acss-185q91i{display:grid;grid-template-columns:max-content 1fr;gap:9px 18px;align-items:baseline;margin:0;}`,`.acss-185q91i dt{font-size:12.5px;color:var(--ant-color-text-secondary);}`,`.acss-185q91i dd{margin:0;font-size:13px;font-variant-numeric:tabular-nums;}`],`
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 9px 18px;
    align-items: baseline;

    margin: 0;

    dt {
      font-size: 12.5px;
      color: var(--ant-color-text-secondary);
    }

    dd {
      margin: 0;
      font-size: 13px;
      font-variant-numeric: tabular-nums;
    }
  `),section:g(`acss-4ebxxr`,[`.acss-4ebxxr{display:flex;flex-direction:column;gap:12px;}`],`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `),sectionHead:g(`acss-3g32uz`,[`.acss-3g32uz{display:flex;gap:12px;align-items:center;font-size:15px;font-weight:600;}`],`
    display: flex;
    gap: 12px;
    align-items: center;

    font-size: 15px;
    font-weight: 600;
  `),sectionRule:g(`acss-1dx1up2`,[`.acss-1dx1up2{flex:1;height:1px;background:var(--ant-color-border-secondary);}`],`
    flex: 1;
    height: 1px;
    background: var(--ant-color-border-secondary);
  `),table:g(`acss-1rovio`,[`.acss-1rovio{overflow-x:auto;}`,`.acss-1rovio table{border-collapse:collapse;width:100%;min-width:max-content;font-size:13px;}`,`.acss-1rovio th{padding-block-end:8px;padding-inline:10px;border-block-end:1px solid var(--ant-color-border);font-size:10.5px;font-weight:500;color:var(--ant-color-text-quaternary);text-align:start;text-transform:uppercase;letter-spacing:0.1em;white-space:nowrap;}`,`.acss-1rovio td{max-width:320px;padding-block:8px;padding-inline:10px;border-block-end:1px solid var(--ant-color-fill-quaternary);vertical-align:baseline;}`,`.acss-1rovio tr[data-total] td{padding-block-start:11px;border-block-start:1px solid var(--ant-color-border);border-block-end:none;font-weight:600;}`,`.acss-1rovio tbody tr:last-child td{border-block-end:none;}`,`.acss-1rovio tbody tr:not([data-total]):hover td{background:var(--ant-color-fill-quaternary);}`,`.acss-1rovio td[data-align='right'],.acss-1rovio th[data-align='right']{font-variant-numeric:tabular-nums;text-align:end;}`,`.acss-1rovio td[data-align='center'],.acss-1rovio th[data-align='center']{text-align:center;}`],`
    overflow-x: auto;

    table {
      border-collapse: collapse;

      /* The portal pane is narrow; let the grid keep its column rhythm and
         scroll sideways instead of collapsing cells into one glyph per line. */
      width: 100%;
      min-width: max-content;
      font-size: 13px;
    }

    th {
      padding-block-end: 8px;
      padding-inline: 10px;
      border-block-end: 1px solid var(--ant-color-border);

      font-size: 10.5px;
      font-weight: 500;
      color: var(--ant-color-text-quaternary);
      text-align: start;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      white-space: nowrap;
    }

    td {
      max-width: 320px;
      padding-block: 8px;
      padding-inline: 10px;
      border-block-end: 1px solid var(--ant-color-fill-quaternary);

      vertical-align: baseline;
    }

    tr[data-total] td {
      padding-block-start: 11px;
      border-block-start: 1px solid var(--ant-color-border);
      border-block-end: none;
      font-weight: 600;
    }

    tbody tr:last-child td {
      border-block-end: none;
    }

    tbody tr:not([data-total]):hover td {
      background: var(--ant-color-fill-quaternary);
    }

    td[data-align='right'],
    th[data-align='right'] {
      font-variant-numeric: tabular-nums;
      text-align: end;
    }

    td[data-align='center'],
    th[data-align='center'] {
      text-align: center;
    }
  `)}})),k,A,j,M,N,P,F,Te=e((()=>{k=t(i()),we(),A=t(a()),j=e=>e.s.h===`right`?`right`:e.s.h===`center`?`center`:void 0,M=(0,k.memo)(({header:e,rows:t})=>{let n=e.map(e=>e.c);return(0,A.jsx)(`div`,{className:O.table,children:(0,A.jsxs)(`table`,{children:[(0,A.jsx)(`thead`,{children:(0,A.jsx)(`tr`,{children:e.map((e,t)=>(0,A.jsx)(`th`,{"data-align":t===0?void 0:j(e),children:e.t},e.c))})}),(0,A.jsx)(`tbody`,{children:t.map((e,t)=>{let r=new Map(e.cells.map(e=>[e.c,e]));return(0,A.jsx)(`tr`,{"data-total":e.kind===`total`?``:void 0,children:n.map((t,i)=>{let a=r.get(t),o=i===n.length-1&&e.extras.length>0?e.extras.map(e=>e.t).join(` · `):``;return a?(0,A.jsxs)(`td`,{"data-align":j(a),children:[a.t,o?(0,A.jsx)(`span`,{className:O.extra,children:o}):null]},t):(0,A.jsx)(`td`,{children:o?(0,A.jsx)(`span`,{className:O.extra,children:o}):null},t)})},t)})})]})})}),M.displayName=`SectionTable`,N=(0,k.memo)(({bodyFontSize:e,rows:t})=>(0,A.jsx)(`dl`,{className:O.kv,children:t.map((t,n)=>{let[r,...i]=t;return(0,A.jsxs)(k.Fragment,{children:[(0,A.jsx)(`dt`,{children:r.t}),(0,A.jsx)(`dd`,{children:i.length===0?`—`:i.map((t,n)=>(0,A.jsxs)(`span`,{className:t.s.bg&&t.s.b?O.chip:(t.s.fs??11)<e?O.hint:void 0,children:[n>0?` `:``,t.t]},t.c))})]},n)})})),N.displayName=`KeyValueList`,P=(0,k.memo)(({bodyFontSize:e,section:t})=>{let n=t.body.filter(e=>e.kind!==`kv`),r=t.body.filter(e=>e.kind===`kv`).map(e=>e.cells);return(0,A.jsxs)(`section`,{className:O.section,children:[t.title?(0,A.jsxs)(`div`,{className:O.sectionHead,children:[(0,A.jsx)(`span`,{children:t.title}),(0,A.jsx)(`span`,{className:O.sectionRule})]}):null,t.header&&n.length>0?(0,A.jsx)(M,{header:t.header,rows:n}):null,r.length>0?(0,A.jsx)(N,{bodyFontSize:e,rows:r}):null,t.notes.length>0?(0,A.jsx)(`div`,{className:O.hint,children:t.notes.map((e,t)=>(0,A.jsx)(`div`,{children:e},t))}):null]})}),P.displayName=`SectionBlock`,F=(0,k.memo)(({outline:e})=>(0,A.jsx)(`div`,{className:O.container,children:(0,A.jsxs)(`div`,{className:O.doc,children:[e.title||e.subtitle?(0,A.jsxs)(`div`,{className:O.docHead,children:[e.title?(0,A.jsx)(`div`,{className:O.docTitle,children:e.title.t}):null,e.subtitle?(0,A.jsx)(`div`,{className:O.docSubtitle,children:e.subtitle.t}):null]}):null,e.sections.map((t,n)=>(0,A.jsx)(P,{bodyFontSize:e.bodyFontSize,section:t},n))]})})),F.displayName=`SheetDocument`})),I,L,R,z,Ee,B,De,Oe,ke,V,H,Ae=e((()=>{h(),I=t(i()),L=t(a()),R={container:g(`acss-135fz91`,[`.acss-135fz91{overflow:auto;flex:1;color:#1a1a1a;background:#fff;}`,`.acss-135fz91 table{table-layout:fixed;border-spacing:0;border-collapse:separate;}`,`.acss-135fz91 td{overflow:hidden;padding-block:1px;padding-inline:4px;border-block-end:1px solid #e0e2e6;border-inline-end:1px solid #e0e2e6;font-size:13px;line-height:1.35;vertical-align:bottom;background:#fff;}`],`
    overflow: auto;
    flex: 1;

    /* The grid replays the workbook's own colors, which were authored against
       white paper — theme-following surfaces would put the file's font colors
       on a dark ground. */
    color: #1a1a1a;
    background: #fff;

    table {
      table-layout: fixed;
      border-spacing: 0;
      border-collapse: separate;
    }

    td {
      overflow: hidden;

      /* Frozen rows are sticky; an unfilled cell must still paint over the
         rows scrolling underneath it. Cell fills override this inline. */
      padding-block: 1px;
      padding-inline: 4px;
      border-block-end: 1px solid #e0e2e6;
      border-inline-end: 1px solid #e0e2e6;

      font-size: 13px;
      line-height: 1.35;
      vertical-align: bottom;

      background: #fff;
    }
  `),corner:g(`acss-10m517g`,[`.acss-10m517g{z-index:5;inset-block-start:0;inset-inline-start:0;}`],`
    z-index: 5;
    inset-block-start: 0;
    inset-inline-start: 0;
  `),frozen:g(`acss-pq8jkp`,[`.acss-pq8jkp td,.acss-pq8jkp th{position:sticky;z-index:3;}`],`
    td,
    th {
      position: sticky;
      z-index: 3;
    }
  `),frozenLast:g(`acss-1ex3150`,[`.acss-1ex3150 td,.acss-1ex3150 th{box-shadow:0 1px 0 0 #9aa4b2;}`],`
    td,
    th {
      box-shadow: 0 1px 0 0 #9aa4b2;
    }
  `),frozenColumnLast:g(`acss-192iu2j`,[`.acss-192iu2j{box-shadow:1px 0 0 0 #9aa4b2;}`],`
    box-shadow: 1px 0 0 0 #9aa4b2;
  `),gutter:g(`acss-17rrj5h`,[`.acss-17rrj5h{position:sticky;border-block-end:1px solid #e0e2e6;border-inline-end:1px solid #e0e2e6;font-size:11px;font-weight:400;color:#6a7280;text-align:center;white-space:nowrap;background:#f2f3f5;}`],`
    position: sticky;

    border-block-end: 1px solid #e0e2e6;
    border-inline-end: 1px solid #e0e2e6;

    font-size: 11px;
    font-weight: 400;
    color: #6a7280;
    text-align: center;
    white-space: nowrap;

    background: #f2f3f5;
  `),headCell:g(`acss-9dvu4k`,[`.acss-9dvu4k{z-index:3;inset-block-start:0;height:22px;}`],`
    z-index: 3;
    inset-block-start: 0;
    height: 22px;
  `),rowHead:g(`acss-a8chbj`,[`.acss-a8chbj{z-index:2;inset-inline-start:0;width:46px;}`],`
    z-index: 2;
    inset-inline-start: 0;
    width: 46px;
  `)},z=46,Ee=e=>{let t=``,n=e;for(;n>0;){let e=(n-1)%26;t=String.fromCharCode(65+e)+t,n=(n-e-1)/26}return t},B=e=>Math.round(e*4/3),De={b:`blockEnd`,l:`inlineStart`,r:`inlineEnd`,t:`blockStart`},Oe=e=>{let t={textAlign:e.h??`left`,verticalAlign:e.v===`middle`?`middle`:e.v===`top`?`top`:`bottom`,whiteSpace:e.w?`pre-wrap`:`nowrap`};e.bg&&(t.background=e.bg),e.fc&&(t.color=e.fc),e.b&&(t.fontWeight=`600`),e.i&&(t.fontStyle=`italic`),e.fs&&(t.fontSize=`${B(e.fs)}px`),e.ff&&(t.fontFamily=`"${e.ff}", var(--font-family, sans-serif)`);for(let[n,r]of Object.entries(e.bd??{})){let e=De[n];t[`border${e[0].toUpperCase()}${e.slice(1)}`]=`${r[0]}px solid ${r[1]}`}return t},ke=(e,t)=>({insetInlineStart:e,position:`sticky`,zIndex:t?4:2}),V=(0,I.memo)(({cell:e,frozenColOffset:t,frozenRow:n,lastFrozenCol:r})=>(0,L.jsx)(`td`,{className:r?R.frozenColumnLast:void 0,colSpan:e.cs,rowSpan:e.rs,style:{...Oe(e.s),...t===void 0?{}:ke(t,n)},children:e.t})),V.displayName=`GridCell`,H=(0,I.memo)(({sheet:e})=>{let t=(0,I.useRef)(null),n=e.frozen?.rows??0,r=e.frozen?.cols??0,i=e.cols.reduce((t,n,i)=>(i<r&&t.push((t.at(-1)??z)+(i===0?0:e.cols[i-1])),t),[]);return(0,I.useLayoutEffect)(()=>{let e=t.current;if(!e||n===0)return;let r=e.querySelector(`thead th`);if(!r)return;let i=r.getBoundingClientRect().height;for(let t of e.querySelectorAll(`tbody tr[data-frozen]`)){for(let e of t.children)e.style.insetBlockStart=`${i}px`;i+=t.getBoundingClientRect().height}},[e,n]),(0,L.jsx)(`div`,{className:R.container,ref:t,children:(0,L.jsxs)(`table`,{children:[(0,L.jsxs)(`colgroup`,{children:[(0,L.jsx)(`col`,{style:{width:z}}),e.cols.map((e,t)=>(0,L.jsx)(`col`,{style:{width:e}},t))]}),(0,L.jsx)(`thead`,{children:(0,L.jsxs)(`tr`,{children:[(0,L.jsx)(`th`,{className:`${R.gutter} ${R.corner} ${R.headCell}`}),e.cols.map((e,t)=>(0,L.jsx)(`th`,{className:[R.gutter,R.headCell,t===r-1&&R.frozenColumnLast].filter(Boolean).join(` `),style:t>=r?void 0:{insetInlineStart:i[t],zIndex:4},children:Ee(t+1)},t))]})}),(0,L.jsx)(`tbody`,{children:e.rows.map(e=>{let t=e.r<=n;return(0,L.jsxs)(`tr`,{className:[t&&R.frozen,t&&e.r===n&&R.frozenLast].filter(Boolean).join(` `),"data-frozen":t?``:void 0,style:e.h?{height:B(e.h)}:void 0,children:[(0,L.jsx)(`th`,{className:`${R.gutter} ${R.rowHead}`,children:e.r}),e.cells.map(e=>(0,L.jsx)(V,{cell:e,frozenRow:t,lastFrozenCol:e.c===r,frozenColOffset:e.c<=r?i[e.c-1]:void 0},e.c))]},e.r)})})]})})}),H.displayName=`SheetGrid`})),U,W,G,K,je=e((()=>{h(),ie(),U=t(i()),r(),_(),pe(),Ce(),Te(),Ae(),W=t(a()),G={container:g(`acss-46wcr6`,[`.acss-46wcr6{display:flex;flex-direction:column;height:100%;background:var(--ant-color-bg-container);}`],`
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--ant-color-bg-container);
  `),footer:g(`acss-y71k5r`,[`.acss-y71k5r{display:flex;flex:none;gap:8px;align-items:center;justify-content:flex-end;padding-block:6px;padding-inline:8px;border-block-start:1px solid var(--ant-color-border-secondary);}`],`
    display: flex;
    flex: none;
    gap: 8px;
    align-items: center;
    justify-content: flex-end;

    padding-block: 6px;
    padding-inline: 8px;
    border-block-start: 1px solid var(--ant-color-border-secondary);
  `),modes:g(`acss-1p000k0`,[`.acss-1p000k0{flex:none;width:auto;}`],`
    flex: none;
    width: auto;
  `),tab:g(`acss-6acgos`,[`.acss-6acgos{cursor:pointer;padding-block:4px;padding-inline:12px;border:none;border-radius:6px;font-size:12px;color:var(--ant-color-text-secondary);white-space:nowrap;background:transparent;}`,`.acss-6acgos:hover{background:var(--ant-color-fill-tertiary);}`,`.acss-6acgos[data-active='true']{font-weight:500;color:var(--ant-color-text);background:var(--ant-color-fill-secondary);}`],`
    cursor: pointer;

    padding-block: 4px;
    padding-inline: 12px;
    border: none;
    border-radius: 6px;

    font-size: 12px;
    color: var(--ant-color-text-secondary);
    white-space: nowrap;

    background: transparent;

    &:hover {
      background: var(--ant-color-fill-tertiary);
    }

    &[data-active='true'] {
      font-weight: 500;
      color: var(--ant-color-text);
      background: var(--ant-color-fill-secondary);
    }
  `),tabs:g(`acss-1y8658x`,[`.acss-1y8658x{overflow-x:auto;display:flex;gap:4px;margin-inline-end:auto;}`],`
    overflow-x: auto;
    display: flex;
    gap: 4px;
    margin-inline-end: auto;
  `),truncatedNote:g(`acss-1fjh2fy`,[`.acss-1fjh2fy{flex:none;padding-block:6px;padding-inline:12px;border-block-start:1px solid var(--ant-color-border-secondary);font-size:12px;color:var(--ant-color-text-tertiary);}`],`
    flex: none;

    padding-block: 6px;
    padding-inline: 12px;
    border-block-start: 1px solid var(--ant-color-border-secondary);

    font-size: 12px;
    color: var(--ant-color-text-tertiary);
  `)},K=(0,U.memo)(({blob:e,onError:t})=>{let{t:r}=n(`chat`),[i,a]=(0,U.useState)(),[o,s]=(0,U.useState)(0),[c,l]=(0,U.useState)(`auto`);(0,U.useEffect)(()=>{let n=!1;return Se(e).then(e=>{n||(a(e),s(0),l(`auto`))}).catch(e=>{n||t(e)}),()=>{n=!0}},[e,t]);let u=i?.[o]??i?.[0],d=(0,U.useMemo)(()=>u?fe(u):void 0,[u]);if(!u||!d)return(0,W.jsx)(v,{});let f=c===`auto`?d.mode:c;return(0,W.jsxs)(`div`,{className:G.container,children:[f===`reflow`?(0,W.jsx)(F,{outline:d}):(0,W.jsx)(H,{sheet:u}),u.truncated&&(0,W.jsx)(`div`,{className:G.truncatedNote,children:r(`workingPanel.localFile.document.truncatedRows`,{count:500})}),(0,W.jsxs)(`div`,{className:G.footer,children:[(0,W.jsx)(`div`,{className:G.tabs,children:i.map((e,t)=>(0,W.jsx)(`button`,{className:G.tab,"data-active":t===o,type:`button`,onClick:()=>s(t),children:e.name},`${t}-${e.name}`))}),(0,W.jsx)(ae,{activeKey:f,className:G.modes,size:`small`,items:[{key:`reflow`,label:r(`workingPanel.localFile.document.xlsxReflow`)},{key:`fidelity`,label:r(`workingPanel.localFile.document.xlsxOriginal`)}],onChange:e=>l(e)})]})]})}),K.displayName=`XlsxPane`})),q,J,Me,Ne,Y,X,Z,Q,Pe,$;e((()=>{h(),ce(),le(),u(),p(),l(),d(),q=t(i()),r(),oe(),_(),ee(),re(),je(),J=t(a()),y(),Me={cMapUrl:`https://registry.npmmirror.com/pdfjs-dist/${b}/files/cmaps/`,standardFontDataUrl:`https://registry.npmmirror.com/pdfjs-dist/${b}/files/standard_fonts/`},Ne=1200,Y={docxContainer:g(`acss-1no7beu`,[`.acss-1no7beu{overflow:auto;height:100%;background:var(--ant-color-bg-layout);}`,`.acss-1no7beu .docx-wrapper{display:flex;flex-direction:column;gap:12px;align-items:safe center;padding:10px;background:transparent;}`,`.acss-1no7beu .docx-wrapper>section.docx{margin-block-end:0;border-radius:4px;box-shadow:var(--ant-box-shadow-tertiary);}`],`
    overflow: auto;
    height: 100%;
    background: var(--ant-color-bg-layout);

    /* docx-preview renders fixed-size "pages"; keep them centered with a gap.
       "safe center" falls back to flex-start when the page is wider than the
       pane, so the left edge stays reachable by horizontal scroll. */
    .docx-wrapper {
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: safe center;

      padding: 10px;

      background: transparent;
    }

    .docx-wrapper > section.docx {
      margin-block-end: 0;
      border-radius: 4px;
      box-shadow: var(--ant-box-shadow-tertiary);
    }
  `),fallbackIcon:g(`acss-1b2hif`,[`.acss-1b2hif{width:64px;height:64px;border-radius:14px;background:var(--ant-color-fill-tertiary);}`],`
    width: 64px;
    height: 64px;
    border-radius: 14px;
    background: var(--ant-color-fill-tertiary);
  `),officeContainer:g(`acss-iuwnue`,[`.acss-iuwnue{overflow:auto;height:100%;background:var(--ant-color-bg-layout);}`],`
    overflow: auto;
    height: 100%;
    background: var(--ant-color-bg-layout);
  `),page:g(`acss-pcx103`,[`.acss-pcx103{overflow:hidden;margin-block-end:12px;border-radius:4px;box-shadow:var(--ant-box-shadow-tertiary);}`],`
    overflow: hidden;
    margin-block-end: 12px;
    border-radius: 4px;
    box-shadow: var(--ant-box-shadow-tertiary);
  `),pdfContainer:g(`acss-kklwqj`,[`.acss-kklwqj{overflow:auto;display:flex;flex-direction:column;align-items:center;height:100%;padding-block:10px;background:var(--ant-color-bg-layout);}`],`
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
    padding-block: 10px;

    background: var(--ant-color-bg-layout);
  `)},X=(0,q.memo)(({blob:e})=>{let[t,n]=(0,q.useState)(0),[r,i]=(0,q.useState)(null),[a,o]=(0,q.useState)();(0,q.useEffect)(()=>{if(!r)return;let e=new ResizeObserver(([e])=>{e&&o(e.contentRect.width)});return e.observe(r),()=>e.disconnect()},[r]);let s=a?Math.min(a-32,Ne):void 0;return(0,J.jsx)(`div`,{className:Y.pdfContainer,ref:i,children:(0,J.jsx)(te,{file:e,loading:(0,J.jsx)(v,{}),options:Me,onLoadSuccess:e=>n(e.numPages),children:Array.from({length:t},(e,t)=>(0,J.jsx)(x,{className:Y.page,pageNumber:t+1,width:s},`page_${t+1}`))})})}),X.displayName=`PdfPane`,Z=(0,q.memo)(({blob:e,onError:t})=>{let[n,r]=(0,q.useState)(!0),[i,a]=(0,q.useState)(null),[o,s]=(0,q.useState)(null);return(0,q.useEffect)(()=>{if(!o||!i)return;let n=new AbortController,a;return(async()=>{try{let{PptxViewer:t,RECOMMENDED_ZIP_LIMITS:s}=await m(async()=>{let{PptxViewer:e,RECOMMENDED_ZIP_LIMITS:t}=await import(`./aiden0z-pptx-renderer.es-B5eFT1uP.js`);return{PptxViewer:e,RECOMMENDED_ZIP_LIMITS:t}},__vite__mapDeps([2,1,3]));if(n.signal.aborted)return;a=await t.open(e,o,{listOptions:{windowed:!0},scrollContainer:i,signal:n.signal,zipLimits:s}),r(!1)}catch(e){if(n.signal.aborted)return;t(e)}})(),()=>{n.abort(),a?.destroy()}},[e,o,i,t]),(0,J.jsxs)(`div`,{className:Y.officeContainer,ref:a,children:[n&&(0,J.jsx)(v,{}),(0,J.jsx)(`div`,{ref:s})]})}),Z.displayName=`PptxPane`,Q=(0,q.memo)(({blob:e,onError:t})=>{let[n,r]=(0,q.useState)(!0),[i,a]=(0,q.useState)(null);return(0,q.useEffect)(()=>{if(!i)return;let n=!1;return(async()=>{try{let{renderAsync:t}=await m(async()=>{let{renderAsync:e}=await import(`./docx-preview-DPTA02Bp.js`);return{renderAsync:e}},__vite__mapDeps([4,1,3]));if(n)return;await t(e,i),n||r(!1)}catch(e){n||t(e)}})(),()=>{n=!0,i.replaceChildren()}},[e,i,t]),(0,J.jsxs)(`div`,{className:Y.docxContainer,children:[n&&(0,J.jsx)(v,{}),(0,J.jsx)(`div`,{ref:a})]})}),Q.displayName=`DocxPane`,Pe={"application/vnd.openxmlformats-officedocument.presentationml.presentation":Z,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":K,"application/vnd.openxmlformats-officedocument.wordprocessingml.document":Q},$=(0,q.memo)(({blob:e,contentType:t,filePath:r,isLocalFile:i})=>{let{t:a}=n(`chat`),l=r.split(`/`).at(-1)??``,[u,d]=(0,q.useState)(!1);(0,q.useEffect)(()=>{d(!1)},[e,t]);let p=(0,q.useCallback)(e=>{console.error(`[DocumentPreview] office render failed:`,e),d(!0)},[]),m=(0,q.useCallback)(()=>{let t=URL.createObjectURL(e),n=globalThis.document.createElement(`a`);n.href=t,n.download=l,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1e4)},[e,l]);if(t===`application/pdf`)return(0,J.jsx)(X,{blob:e});let h=Pe[t];return h&&!u?(0,J.jsx)(h,{blob:e,onError:p}):(0,J.jsxs)(o,{gap:16,height:`100%`,width:`100%`,children:[(0,J.jsx)(o,{className:Y.fallbackIcon,children:(0,J.jsx)(se,{fileName:l,size:40})}),(0,J.jsxs)(s,{align:`center`,gap:4,children:[(0,J.jsx)(f,{style:{fontWeight:500},children:l}),(0,J.jsx)(f,{type:`secondary`,children:a(`workingPanel.localFile.document.unsupported`)})]}),i?(0,J.jsx)(c,{onClick:()=>ne.openLocalFile({path:r}),children:a(`workingPanel.localFile.document.openWithDefaultApp`)}):(0,J.jsx)(c,{onClick:m,children:a(`workingPanel.localFile.document.download`)})]})}),$.displayName=`DocumentPreview`}))();export{$ as default};