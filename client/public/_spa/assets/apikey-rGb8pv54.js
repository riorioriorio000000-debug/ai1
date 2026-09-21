import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,Q as r,V as i,Y as a,j as o,z as s}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as c,T as l}from"../vendor/vendor-react-B9HSWrpN.js";import{B as u,Bt as d,Gt as f,Kt as p,Mt as m,Nt as h,Vt as g,Wt as _,X as v,Xn as y,Yn as b,Z as x,Zn as ee,at as S,h as C,it as w,l as T,m as te,qt as E,u as ne,v as re,z as D}from"../vendor/vendor-ui-core-BmtybT1r.js";import{P as ie,et as O,ft as ae,nt as oe,r as k}from"../vendor/vendor-antd-BWSxhuJE.js";import{E_ as se,Hh as ce,Ma as le,Mn as ue,Op as de,c as fe,gp as pe,mt as me,t as A,ug as he,vp as ge}from"../vendor/vendor-icons-vienkZi5.js";import{c as _e,dr as ve,fr as ye}from"./app-const-BpgKVRXh.js";import{Dn as be,EF as xe,En as Se,FD as j,Hp as Ce,ID as M,Kf as we,MA as Te,Mp as Ee,Np as De,Zf as Oe,Zh as ke,aS as Ae,cF as je,gF as Me,ig as Ne,lF as Pe,ng as N,og as Fe,pF as Ie,qf as Le,rx as Re,sS as ze,uF as P,vS as Be,wA as Ve,wx as He,yS as Ue,zp as We}from"./index-w64_zsxD.js";import{n as Ge,t as Ke}from"./CopyButton-BjxUZD85.js";import{n as qe,t as Je}from"./DropdownMenu-1ae8j9bI.js";import{n as Ye,t as Xe}from"./Tag-C95BKTI7.js";import{n as Ze,t as Qe}from"./Empty-Dam8NCz3.js";import{n as $e,t as et}from"./Drawer-saR7zxnb.js";import{n as tt,t as nt}from"./Input-gdUxluEJ.js";import{t as rt}from"./_virtual_lobe-ui-named_base-ui_useModalContext-CvZy-G5G.js";import{n as it,t as at}from"./Select-C0UJO2yB.js";import{t as ot}from"./_virtual_lobe-ui-named_base-ui_confirmModal-B6WREEdZ.js";import{n as st,r as ct}from"./forbiddenError-o_FsgPa2.js";import{n as lt,t as ut}from"./SettingHeader-PrbzMVzI.js";var dt,F,ft,pt,I,mt,ht,gt=e((()=>{be(),P(),dt=t(c()),F=t(l()),ft=600,pt=4,I=Ie(({css:e,cssVar:t})=>({body:e`
    overflow-x: auto;
  `,clickableRow:e`
    cursor: pointer;

    &:focus-visible {
      outline: 2px solid ${t.colorPrimary};
      outline-offset: -2px;
    }
  `,container:e`
    container-type: inline-size;
  `,table:e`
    border-collapse: collapse;
    width: 100%;
    min-width: max-content;
    font-size: 13px;

    th,
    td {
      padding-block: 8px;
      padding-inline: 8px;
      text-align: start;
      vertical-align: middle;
    }

    thead th {
      font-weight: 500;
      color: ${t.colorTextSecondary};
      white-space: nowrap;
      background: ${t.colorFillQuaternary};
    }

    tr {
      th:first-child,
      td:first-child {
        padding-inline-start: 24px;
      }

      th:last-child,
      td:last-child {
        padding-inline-end: 24px;
      }
    }

    tbody tr:hover {
      background: ${t.colorFillQuaternary};
    }

    @container (max-width: ${ft}px) {
      display: block;
      min-width: 0;

      thead {
        display: none;
      }

      tbody {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding-inline: 16px;
      }

      tbody tr {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;

        padding-block: 4px 8px;
        padding-inline: 16px;
        border: 1px solid ${t.colorBorderSecondary};
        border-radius: ${t.borderRadiusLG};

        &:hover {
          background: transparent;
        }
      }

      td {
        display: flex;
        grid-column: 1 / -1;
        gap: 16px;
        align-items: center;
        justify-content: space-between;

        padding-block: 6px;
        padding-inline: 0 !important;
      }

      td[data-label]::before {
        content: attr(data-label);
        flex-shrink: 0;
        color: ${t.colorTextSecondary};
      }

      td:not([data-label], [data-list-slot]) {
        justify-content: flex-end;
      }

      td[data-list-slot='title'] {
        grid-column: 1;
        grid-row: 1;
        justify-content: flex-start;

        padding-block: 8px;
        border-block-end: 1px solid ${t.colorBorderSecondary};

        font-size: 14px;
        font-weight: 600;
      }

      td[data-list-slot='extra'] {
        grid-column: 2;
        grid-row: 1;
        justify-content: flex-end;

        padding-block: 8px;
        border-block-end: 1px solid ${t.colorBorderSecondary};
      }

      td[data-list-slot='actions'] {
        justify-content: flex-end;
      }
    }
  `})),mt=({className:e,columns:t,dataSource:n,emptyText:r,loading:i,onRowClick:a,rowKey:o})=>{let s=n??[],c=!!i&&s.length===0,l=e=>e.listSlot||e.listLabel===!1?void 0:e.listLabel??(typeof e.title==`string`?e.title:void 0);return(0,F.jsx)(`div`,{"aria-busy":c,className:Me(I.container,e),children:!c&&s.length===0?r:(0,F.jsx)(`div`,{className:I.body,children:(0,F.jsxs)(`table`,{className:I.table,children:[(0,F.jsx)(`thead`,{children:(0,F.jsx)(`tr`,{children:t.map(e=>(0,F.jsx)(`th`,{style:{width:e.width},children:e.title},e.key))})}),(0,F.jsx)(`tbody`,{children:c?Array.from({length:pt},(e,n)=>(0,F.jsx)(`tr`,{children:t.map(e=>(0,F.jsx)(`td`,{"data-label":l(e),"data-list-slot":e.listSlot,children:(0,F.jsx)(Se,{style:{height:14,minWidth:0,width:`100%`}})},e.key))},n)):s.map((e,n)=>(0,F.jsx)(`tr`,{className:a?I.clickableRow:void 0,tabIndex:a?0:void 0,onClick:a?()=>a(e):void 0,onKeyDown:a?t=>{t.target===t.currentTarget&&(t.key!==`Enter`&&t.key!==` `||(t.preventDefault(),a(e)))}:void 0,children:t.map(t=>(0,F.jsx)(`td`,{"data-label":l(t),"data-list-slot":t.listSlot,children:t.render(e,n)},t.key))},o(e)))})]})})})},ht=(0,dt.memo)(mt)})),_t,vt,yt,bt=e((()=>{_t=t(c()),vt=(0,_t.createContext)({canCreate:!0,isAdmin:!1,memberCreation:`all_members`}),yt=()=>(0,_t.useContext)(vt)})),L,R,xt,St,Ct,wt=e((()=>{j(),E(),ne(),x(),S(),A(),o(),L=t(l()),R={disabled:M(`acss-1rg5bj5`,[`.acss-1rg5bj5{pointer-events:none;opacity:0.45;}`],`
    pointer-events: none;
    opacity: 0.45;
  `),fullAccessRow:M(`acss-66ihbe`,[`.acss-66ihbe{display:flex;gap:16px;align-items:center;justify-content:space-between;padding:12px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius);}`],`
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: space-between;

    padding: 12px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius);
  `),grid:M(`acss-kc3qpb`,[`.acss-kc3qpb{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:12px 16px;padding:12px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius);}`],`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px 16px;

    /* same card treatment as the full-access row so the whole Scope block
       reads as one system */
    padding: 12px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius);
  `),grantCheck:M(`acss-1l1tljm`,[`.acss-1l1tljm{flex:none;color:var(--ant-color-success);}`],`
    flex: none;
    color: var(--ant-color-success);
  `),grantList:M(`acss-1td4p5o`,[`.acss-1td4p5o{padding-block:4px;padding-inline:12px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius);}`],`
    padding-block: 4px;
    padding-inline: 12px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius);
  `),grantRow:M(`acss-1pi1p55`,[`.acss-1pi1p55{padding-block:12px;border-block-end:1px solid var(--ant-color-border-secondary);}`,`.acss-1pi1p55:last-child{border-block-end:none;}`],`
    padding-block: 12px;
    border-block-end: 1px solid var(--ant-color-border-secondary);

    &:last-child {
      border-block-end: none;
    }
  `),groupTitle:M(`acss-um2tu2`,[`.acss-um2tu2{font-size:12px;color:var(--ant-color-text-secondary);}`],`
    font-size: 12px;
    color: var(--ant-color-text-secondary);
  `),scopeRow:M(`acss-19ocycm`,[`.acss-19ocycm{flex-wrap:wrap;}`,`.acss-19ocycm .ant-checkbox-wrapper{align-items:center;white-space:nowrap;}`,`.acss-19ocycm .ant-checkbox-wrapper .ant-checkbox{inset-block-start:0;align-self:center;}`],`
    flex-wrap: wrap;

    /* keep each label on one line; overflowing items wrap as a whole */
    .ant-checkbox-wrapper {
      align-items: center;
      white-space: nowrap;

      /* antd offsets the box against the first text line (top: 0.2em /
         flex-start); with this theme's box size that sinks it below the
         label's midline — pin it back to true center */
      .ant-checkbox {
        inset-block-start: 0;
        align-self: center;
      }
    }
  `)},xt=[{key:`agent`,label:`apikey.scopes.groups.agent`,read:`agent:read`,write:`agent:write`},{key:`chat`,label:`apikey.scopes.groups.chat`,read:`chat:read`,write:`chat:write`},{key:`model`,label:`apikey.scopes.groups.model`,read:`model:read`,write:`model:write`},{key:`file`,label:`apikey.scopes.groups.file`,read:`file:read`,write:`file:write`},{key:`knowledge`,label:`apikey.scopes.groups.knowledge`,read:`knowledge:read`,write:`knowledge:write`},{key:`mcp`,label:`apikey.scopes.groups.mcp`,read:`mcp:read`,write:`mcp:write`},{key:`usage`,label:`apikey.scopes.groups.usage`,read:`usage:read`},{key:`workspace`,label:`apikey.scopes.groups.workspace`,read:`workspace:read`,write:`workspace:write`},{key:`user`,label:`apikey.scopes.groups.user`,read:`user:read`,write:`user:write`}],St=({scopes:e})=>{let{t}=n(`auth`),r=new Set(e),i=t(`apikey.scopes.separator`),a=xt.flatMap(e=>{let n=[r.has(e.read)&&t(`apikey.scopes.read`),e.write&&r.has(e.write)&&t(`apikey.scopes.write`),e.key===`model`&&r.has(`model:invoke`)&&t(`apikey.scopes.invoke`)].filter(Boolean);return n.length>0?[{actions:n,key:e.key,label:t(e.label)}]:[]});return a.length===0?(0,L.jsx)(w,{type:`secondary`,children:t(`apikey.scopes.none`)}):(0,L.jsx)(p,{className:R.grantList,children:a.map(e=>(0,L.jsxs)(p,{horizontal:!0,align:`center`,className:R.grantRow,gap:10,children:[(0,L.jsx)(he,{className:R.grantCheck,size:16}),(0,L.jsxs)(`span`,{style:{fontSize:13},children:[(0,L.jsx)(`strong`,{children:e.label}),t(`apikey.scopes.grantJoin`),e.actions.join(i)]})]},e.key))})},Ct=({fullAccess:e,onFullAccessChange:t,onSelectedChange:r,selected:i})=>{let{t:a}=n(`auth`),o=new Set(i),s=(e,t)=>{let n=new Set(o);t?(n.add(e),e.endsWith(`:write`)&&n.add(e.replace(/:write$/,`:read`))):(n.delete(e),e.endsWith(`:read`)&&n.delete(e.replace(/:read$/,`:write`))),r([...n])};return(0,L.jsxs)(p,{gap:12,children:[(0,L.jsxs)(`div`,{className:R.fullAccessRow,children:[(0,L.jsxs)(p,{gap:2,children:[(0,L.jsx)(w,{style:{fontSize:14},children:a(`apikey.form.fields.scopes.fullAccess`)}),(0,L.jsx)(w,{style:{fontSize:12},type:`secondary`,children:a(`apikey.form.fields.scopes.fullAccessDescription`)})]}),(0,L.jsx)(v,{checked:e,onChange:t})]}),(0,L.jsx)(`div`,{className:e?R.disabled:void 0,children:(0,L.jsx)(p,{gap:10,children:(0,L.jsx)(`div`,{className:R.grid,children:xt.map(t=>(0,L.jsxs)(p,{gap:4,children:[(0,L.jsx)(`span`,{className:R.groupTitle,children:a(t.label)}),(0,L.jsxs)(p,{horizontal:!0,className:R.scopeRow,gap:12,children:[(0,L.jsx)(T,{checked:o.has(t.read),disabled:e,onChange:e=>s(t.read,e),children:a(`apikey.scopes.read`)}),t.write&&(0,L.jsx)(T,{checked:o.has(t.write),disabled:e,onChange:e=>t.write&&s(t.write,e),children:a(`apikey.scopes.write`)}),t.key===`model`&&(0,L.jsx)(T,{checked:o.has(`model:invoke`),disabled:e,onChange:e=>s(`model:invoke`,e),children:a(`apikey.scopes.modelInvoke`)})]})]},t.key))})})})]})}})),Tt,z,Et,Dt,Ot,kt=e((()=>{j(),Ge(),E(),u(),A(),Tt=t(c()),o(),z=t(l()),Et={key:M(`acss-1kgfvqt`,[`.acss-1kgfvqt{overflow:hidden;font-family:var(--ant-font-family-code);font-size:12px;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    font-family: var(--ant-font-family-code);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
  `)},Dt=`••••••••`,Ot=({apiKey:e})=>{let{t}=n(`auth`),[r,i]=(0,Tt.useState)(!1);if(!e)return t(`apikey.display.autoGenerated`);let a=e.lastIndexOf(`-`)+1,o=e.slice(0,a),s=e.length-a>8,c=r?e:s?`${o}${Dt}${e.slice(-4)}`:`${o}${Dt}`;return(0,z.jsxs)(p,{horizontal:!0,align:`center`,gap:4,children:[(0,z.jsx)(`span`,{className:Et.key,children:c}),(0,z.jsx)(D,{icon:r?ge:pe,size:`small`,title:t(r?`apikey.display.hide`:`apikey.display.show`),onClick:()=>i(!r)}),(0,z.jsx)(Ke,{content:e,size:`small`,title:t(`apikey.display.copy`)})]})}})),B,At,jt=e((()=>{_(),P(),Pe(),B=Ie(({css:e})=>({borderless:f.variantBorderless,filled:f.variantFilled,outlined:f.variantOutlined,root:e``,shadow:f.shadow})),At=je(B.root,{defaultVariants:{shadow:!1},variants:{variant:{filled:B.filled,outlined:B.outlined,borderless:B.borderless,underlined:null},shadow:{false:null,true:B.shadow}}})})),Mt,Nt,Pt,Ft=e((()=>{jt(),Mt=t(c(),1),Nt=t(l(),1),k(),P(),Pt=(0,Mt.memo)(({variant:e,shadow:t,className:n,...r})=>{let{isDarkMode:i}=xe();return(0,Nt.jsx)(ae,{variant:e||(i?`filled`:`outlined`),className:Me(At({shadow:t,variant:e||(i?`filled`:`outlined`)}),n),...r})}),Pt.displayName=`DatePicker`})),It,Lt,Rt,zt=e((()=>{Ft(),k(),It=t(r()),o(),Lt=t(l()),Rt=({value:e,onChange:t,showNeverExpiresFooter:r=!0,...i})=>{let{t:a}=n(`auth`),o=e=>{let n=Array.isArray(e)?e[0]:e,r=n?n.hour(23).minute(59).second(59).millisecond(999):null;t?.(r)};return(0,Lt.jsx)(Pt,{value:e,...i,minDate:(0,It.default)(),placeholder:a(`apikey.form.fields.expiresAt.placeholder`),showNow:!1,renderExtraFooter:()=>r&&(0,Lt.jsx)(oe,{justify:`center`,children:(0,Lt.jsx)(`a`,{role:`button`,style:{cursor:`pointer`},tabIndex:0,onClick:()=>o(null),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),o(null))},children:a(`apikey.display.neverExpires`)})}),onChange:o},e?.valueOf()||`EMPTY`)}})),Bt,V,H,Vt,Ht,Ut,Wt,Gt=e((()=>{j(),Ge(),E(),ee(),tt(),h(),it(),S(),rt(),k(),Bt=t(r()),A(),V=t(c()),o(),ve(),zt(),wt(),H=t(l()),Vt={keyBlock:M(`acss-1aihc6l`,[`.acss-1aihc6l{padding-block:10px;padding-inline:12px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius);background:var(--ant-color-fill-quaternary);}`],`
    padding-block: 10px;
    padding-inline: 12px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius);

    background: var(--ant-color-fill-quaternary);
  `),keyText:M(`acss-15gr49z`,[`.acss-15gr49z{flex:1;font-family:var(--ant-font-family-code);font-size:12px;word-break:break-all;}`],`
    flex: 1;
    font-family: var(--ant-font-family-code);
    font-size: 12px;
    word-break: break-all;
  `),successIcon:M(`acss-1agh9uj`,[`.acss-1agh9uj{color:var(--ant-color-success);}`],`
    color: var(--ant-color-success);
  `)},Ht=[`never`,`7`,`30`,`60`,`90`,`180`,`365`,`custom`],Ut={7:`apikey.form.fields.expiresAt.presets.7d`,30:`apikey.form.fields.expiresAt.presets.30d`,60:`apikey.form.fields.expiresAt.presets.60d`,90:`apikey.form.fields.expiresAt.presets.90d`,180:`apikey.form.fields.expiresAt.presets.180d`,365:`apikey.form.fields.expiresAt.presets.1y`,custom:`apikey.form.fields.expiresAt.presets.custom`,never:`apikey.display.neverExpires`},Wt=({onSubmit:e})=>{let{t}=n(`auth`),{close:r}=re(),[i]=O.useForm(),[a,o]=(0,V.useState)(!1),[s,c]=(0,V.useState)(!0),[l,u]=(0,V.useState)([]),[d,f]=(0,V.useState)(`never`),[h,g]=(0,V.useState)(null),[_,v]=(0,V.useState)(),b=!s&&l.length===0,x=d===`custom`&&!h,ee=()=>d===`never`?null:d===`custom`?h?h.toDate():null:(0,Bt.default)().add(Number(d),`day`).hour(23).minute(59).second(59).toDate(),S=async t=>{if(!(b||x)){o(!0);try{let n=await e({...t,expiresAt:ee(),scopes:s?[`*`]:l});n?.key?v(n.key):r()}finally{o(!1)}}};if(_)return(0,H.jsxs)(p,{gap:16,children:[(0,H.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[(0,H.jsx)(y,{className:Vt.successIcon,icon:ce,size:18}),(0,H.jsx)(w,{style:{fontWeight:500},children:t(`apikey.created.title`)})]}),(0,H.jsxs)(p,{horizontal:!0,align:`center`,className:Vt.keyBlock,gap:8,children:[(0,H.jsx)(`span`,{className:Vt.keyText,children:_}),(0,H.jsx)(Ke,{content:_,size:`small`,title:t(`apikey.display.copy`)})]}),(0,H.jsx)(w,{style:{fontSize:12},type:`secondary`,children:t(`apikey.created.hint`)}),(0,H.jsx)(m,{block:!0,type:`primary`,onClick:()=>r(),children:t(`apikey.created.done`)})]});let C={marginBottom:0};return(0,H.jsx)(O,{colon:!1,form:i,layout:`vertical`,onFinish:S,children:(0,H.jsxs)(p,{gap:16,children:[(0,H.jsx)(O.Item,{label:t(`apikey.form.fields.name.label`),name:`name`,rules:[{required:!0}],style:C,children:(0,H.jsx)(nt,{placeholder:t(`apikey.form.fields.name.placeholder`)})}),(0,H.jsx)(O.Item,{label:t(`apikey.form.fields.expiresAt.label`),style:C,children:(0,H.jsxs)(p,{gap:8,children:[(0,H.jsx)(at,{value:d,options:Ht.map(e=>({label:t(Ut[e]),value:e})),onChange:e=>f(e)}),d===`custom`&&(0,H.jsx)(Rt,{showNeverExpiresFooter:!1,style:{width:`100%`},value:h,onChange:g})]})}),(0,H.jsx)(O.Item,{help:b?t(`apikey.form.fields.scopes.required`):void 0,label:t(`apikey.form.fields.scopes.label`),style:C,validateStatus:b?`error`:void 0,children:(0,H.jsx)(Ct,{fullAccess:s,selected:l,onFullAccessChange:c,onSelectedChange:u})}),(0,H.jsx)(m,{block:!0,disabled:b||x,htmlType:`submit`,loading:a,type:`primary`,children:t(`apikey.form.submit`)})]})})}})),Kt,qt,Jt=e((()=>{Oe(),s(),Gt(),Kt=t(l()),qt=e=>C({content:(0,Kt.jsx)(Wt,{...e}),footer:null,maskClosable:!0,styles:{content:{paddingBlock:16,paddingInline:24}},title:i(`apikey.form.title`,{ns:`auth`}),width:`min(90vw, 560px)`})})),U,W,G,K,Yt,Xt=e((()=>{j(),tt(),u(),Te(),P(),U=t(r()),A(),W=t(c()),o(),zt(),G=t(l()),K={actionButtons:M(`acss-8lu7cs`,[`.acss-8lu7cs{display:flex;flex-shrink:0;gap:4px;}`],`
    display: flex;
    flex-shrink: 0;
    gap: 4px;
  `),container:M(`acss-7wy9o9`,[`.acss-7wy9o9{position:relative;display:flex;gap:8px;align-items:center;min-height:32px;}`,`.acss-7wy9o9:hover .edit-button{opacity:1;}`],`
    position: relative;

    display: flex;
    gap: 8px;
    align-items: center;

    min-height: 32px;

    &:hover .edit-button {
      opacity: 1;
    }
  `),content:M(`acss-p6zy50`,[`.acss-p6zy50{min-width:0;line-height:1.5;color:var(--ant-color-text);word-break:break-all;}`],`
    min-width: 0;
    line-height: 1.5;
    color: var(--ant-color-text);
    word-break: break-all;
  `),editButton:M(`acss-15mhly8`,[`.acss-15mhly8{opacity:0;transition:opacity 0.2s ease;}`,`.acss-15mhly8.edit-button{opacity:0;}`],`
    opacity: 0;
    transition: opacity 0.2s ease;

    &.edit-button {
      opacity: 0;
    }
  `),editingContainer:M(`acss-dk13v3`,[`.acss-dk13v3{display:flex;gap:8px;align-items:center;width:100%;}`],`
    display: flex;
    gap: 8px;
    align-items: center;
    width: 100%;
  `),inputWrapper:M(`acss-x5lawr`,[`.acss-x5lawr{flex:1;}`],`
    flex: 1;
  `),textareaWrapper:M(`acss-x5lawr`,[`.acss-x5lawr{flex:1;}`],`
    flex: 1;
  `)},Yt=(0,W.memo)(({value:e,type:t,onSubmit:r,placeholder:i,disabled:a=!1})=>{let{t:o}=n(`auth`),[s,c]=(0,W.useState)(!1),l=(0,W.useRef)(null),u=e=>{if(t===`date`&&e){let t=(0,U.default)(e);return t.isValid()?t.format(`YYYY-MM-DD`):e||i||``}return e||i||``},d=()=>{a||c(!0)},f=()=>{if(t===`text`){let e=l.current?.input?.value;if(!e){b.warning(o(`apikey.validation.required`));return}r(e)}c(!1)},p=()=>{c(!1)},m=e=>{e.key===`Enter`?(e.preventDefault(),f()):e.key===`Escape`&&(e.preventDefault(),p())},h=e=>{r(e&&(0,U.default)(e).toISOString()),c(!1)},g=()=>{switch(t){case`text`:return(0,G.jsx)(`div`,{className:K.inputWrapper,children:(0,G.jsx)(nt,{autoFocus:!0,defaultValue:e,placeholder:i,ref:l,onKeyDown:m})});case`date`:return(0,G.jsx)(Rt,{defaultValue:e&&(0,U.default)(e).isValid()?(0,U.default)(e):null,open:!0,onChange:h,onOpenChange:()=>{s&&c(!1)}});default:return null}};return t===`text`&&s?(0,G.jsxs)(`div`,{className:K.editingContainer,children:[g(),(0,G.jsxs)(`div`,{className:K.actionButtons,children:[(0,G.jsx)(D,{icon:he,size:`small`,onClick:f}),(0,G.jsx)(D,{icon:fe,size:`small`,onClick:p})]})]}):t===`date`&&s?g():(0,G.jsxs)(`div`,{className:K.container,children:[(0,G.jsx)(`div`,{className:K.content,children:u(e)}),(0,G.jsx)(D,{className:Me(K.editButton,`edit-button`),icon:ue,size:`small`,onClick:d})]})}),Yt.displayName=`EditableCell`})),Zt=e((()=>{kt(),Jt(),Xt()})),q,J,Y,Qt,$t,en=e((()=>{j(),E(),h(),$e(),x(),S(),k(),A(),q=t(c()),o(),ve(),wt(),Zt(),J=t(l()),Y={fullAccessCard:M(`acss-avhv6v`,[`.acss-avhv6v{padding:12px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius);}`],`
    padding: 12px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius);
  `),label:M(`acss-kmnqz4`,[`.acss-kmnqz4{flex:none;width:96px;font-size:12px;color:var(--ant-color-text-secondary);}`],`
    flex: none;
    width: 96px;
    font-size: 12px;
    color: var(--ant-color-text-secondary);
  `),metaRow:M(`acss-tqet21`,[`.acss-tqet21{display:flex;gap:16px;align-items:center;min-height:28px;}`],`
    display: flex;
    gap: 16px;
    align-items: center;
    min-height: 28px;
  `),sectionTitle:M(`acss-1rwj2ut`,[`.acss-1rwj2ut{font-size:13px;font-weight:500;color:var(--ant-color-text-secondary);}`],`
    font-size: 13px;
    font-weight: 500;
    color: var(--ant-color-text-secondary);
  `),value:M(`acss-315s5h`,[`.acss-315s5h{overflow:hidden;display:flex;align-items:center;font-size:13px;}`],`
    overflow: hidden;
    display: flex;
    align-items: center;
    font-size: 13px;
  `)},Qt=({apiKey:e,canEdit:t,onUpdate:r})=>{let{t:i}=n(`auth`),a=ye(e.scopes),[o,s]=(0,q.useState)(!1),[c,l]=(0,q.useState)(!1),[u,d]=(0,q.useState)(a),[f,h]=(0,q.useState)(a?[]:e.scopes),g=!u&&f.length===0;return o?(0,J.jsxs)(p,{gap:12,children:[(0,J.jsx)(Ct,{fullAccess:u,selected:f,onFullAccessChange:d,onSelectedChange:h}),(0,J.jsxs)(p,{horizontal:!0,gap:8,justify:`flex-end`,children:[(0,J.jsx)(m,{type:`text`,onClick:()=>{d(a),h(a?[]:e.scopes),s(!1)},children:i(`apikey.detail.permissions.cancel`)}),(0,J.jsx)(m,{disabled:g,loading:c,type:`primary`,onClick:async()=>{l(!0);try{await r(e.id,{scopes:u?[`*`]:f})&&s(!1)}catch{}finally{l(!1)}},children:i(`apikey.detail.permissions.save`)})]})]}):(0,J.jsxs)(p,{gap:8,children:[a?(0,J.jsxs)(p,{className:Y.fullAccessCard,gap:2,children:[(0,J.jsx)(w,{style:{fontSize:14},children:i(`apikey.scopes.fullAccess`)}),(0,J.jsx)(w,{style:{fontSize:12},type:`secondary`,children:i(`apikey.form.fields.scopes.fullAccessDescription`)})]}):(0,J.jsx)(St,{scopes:e.scopes}),t&&(0,J.jsx)(p,{horizontal:!0,justify:`flex-end`,children:(0,J.jsx)(m,{icon:le,type:`text`,onClick:()=>s(!0),children:i(`apikey.detail.permissions.edit`)})})]})},$t=({apiKey:e,canDelete:t,canEdit:r,manageTooltip:i,onClose:a,onDelete:o,onUpdate:s,open:c})=>{let{t:l}=n(`auth`);return(0,J.jsx)(et,{open:c,placement:`right`,title:l(`apikey.detail.title`),width:`min(92vw, 520px)`,onClose:a,children:e&&(0,J.jsxs)(p,{gap:24,children:[(0,J.jsxs)(p,{gap:4,children:[(0,J.jsxs)(`div`,{className:Y.metaRow,children:[(0,J.jsx)(`span`,{className:Y.label,children:l(`apikey.list.columns.name`)}),(0,J.jsx)(`span`,{className:Y.value,children:(0,J.jsx)(Yt,{disabled:!r,placeholder:l(`apikey.display.enterPlaceholder`),type:`text`,value:e.name,onSubmit:t=>{!r||!t||t===e.name||s(e.id,{name:t})}})})]}),(0,J.jsxs)(`div`,{className:Y.metaRow,children:[(0,J.jsx)(`span`,{className:Y.label,children:l(`apikey.list.columns.key`)}),(0,J.jsx)(`span`,{className:Y.value,children:e.isMine===!1?(0,J.jsx)(`span`,{style:{opacity:.5},children:`sk-lh-${`*`.repeat(12)}`}):e.keyDecryptionFailed?(0,J.jsx)(`span`,{title:l(`apikey.display.unavailableDescription`),children:l(`apikey.display.unavailable`)}):(0,J.jsx)(Ot,{apiKey:e.key})})]}),e.creator&&(0,J.jsxs)(`div`,{className:Y.metaRow,children:[(0,J.jsx)(`span`,{className:Y.label,children:l(`apikey.list.columns.creator`)}),(0,J.jsx)(`span`,{className:Y.value,children:e.creator})]}),(0,J.jsxs)(`div`,{className:Y.metaRow,children:[(0,J.jsx)(`span`,{className:Y.label,children:l(`apikey.detail.createdAt`)}),(0,J.jsx)(`span`,{className:Y.value,children:e.createdAt.toLocaleString()})]}),(0,J.jsxs)(`div`,{className:Y.metaRow,children:[(0,J.jsx)(`span`,{className:Y.label,children:l(`apikey.list.columns.lastUsedAt`)}),(0,J.jsx)(`span`,{className:Y.value,children:e.lastUsedAt?.toLocaleString()||l(`apikey.display.neverUsed`)})]}),(0,J.jsxs)(`div`,{className:Y.metaRow,children:[(0,J.jsx)(`span`,{className:Y.label,children:l(`apikey.list.columns.expiresAt`)}),(0,J.jsx)(`span`,{className:Y.value,children:(0,J.jsx)(Yt,{disabled:!r,placeholder:l(`apikey.display.neverExpires`),type:`date`,value:e.expiresAt?.toLocaleString()||l(`apikey.display.neverExpires`),onSubmit:t=>{!r||t===e.expiresAt||s(e.id,{expiresAt:t?new Date(t):null})}})})]}),(0,J.jsxs)(`div`,{className:Y.metaRow,children:[(0,J.jsx)(`span`,{className:Y.label,children:l(`apikey.list.columns.status`)}),(0,J.jsx)(`span`,{className:Y.value,title:r?void 0:i,children:(0,J.jsx)(v,{checked:!!e.enabled,disabled:!r,onChange:t=>{r&&s(e.id,{enabled:t})}})})]})]}),(0,J.jsxs)(p,{gap:8,children:[(0,J.jsx)(`span`,{className:Y.sectionTitle,children:l(`apikey.form.fields.scopes.label`)}),(0,J.jsx)(Qt,{apiKey:e,canEdit:r,onUpdate:s},`${e.id}-${e.updatedAt.toISOString()}`)]}),(0,J.jsx)(p,{horizontal:!0,justify:`flex-end`,children:(0,J.jsx)(ie,{cancelText:l(`apikey.list.actions.deleteConfirm.actions.cancel`),description:l(`apikey.list.actions.deleteConfirm.content`),okButtonProps:{disabled:!t},okText:l(`apikey.list.actions.deleteConfirm.actions.ok`),title:l(`apikey.list.actions.deleteConfirm.title`),onConfirm:async()=>{t&&await o(e.id)},children:(0,J.jsx)(m,{danger:!0,disabled:!t,icon:me,title:t?l(`apikey.list.actions.delete`):i,type:`text`,children:l(`apikey.list.actions.delete`)})})})]})})}})),X,tn,nn,Z,Q,rn,an,on=e((()=>{j(),_e(),g(),Ze(),E(),u(),h(),ot(),qe(),Ye(),S(),Te(),Ne(),X=t(r()),tn=t(a()),A(),nn=t(c()),o(),Ve(),Be(),gt(),ve(),we(),Ae(),He(),ke(),We(),Ee(),st(),bt(),en(),Zt(),Z=t(l()),Q={container:M(`acss-815chi`,[`.acss-815chi{overflow:hidden;padding-block:16px;border-radius:var(--ant-border-radius);background:var(--ant-color-bg-container);}`],`
    overflow: hidden;
    padding-block: 16px;
    border-radius: var(--ant-border-radius);
    background: var(--ant-color-bg-container);
  `),expired:M(`acss-zknb5i`,[`.acss-zknb5i{color:var(--ant-color-error);}`],`
    color: var(--ant-color-error);
  `),header:M(`acss-7dkxpa`,[`.acss-7dkxpa{display:flex;gap:16px;align-items:flex-start;justify-content:space-between;padding-block-end:16px;padding-inline:24px;}`],`
    display: flex;
    gap: 16px;
    align-items: flex-start;
    justify-content: space-between;

    padding-block-end: 16px;
    padding-inline: 24px;
  `),muted:M(`acss-nt432w`,[`.acss-nt432w{color:var(--ant-color-text-tertiary);}`],`
    color: var(--ant-color-text-tertiary);
  `),nameLink:M(`acss-1igj8je`,[`.acss-1igj8je{font-weight:500;}`,`tr:hover .acss-1igj8je{color:var(--ant-color-link);}`],`
    font-weight: 500;

    tr:hover & {
      color: var(--ant-color-link);
    }
  `)},X.default.extend(tn.default),rn=e=>!!e.expiresAt&&(0,X.default)(e.expiresAt).isBefore((0,X.default)()),an=()=>{let{t:e}=n(`auth`),{t}=n(`common`),r=Ue(),i=yt(),{allowed:a,reason:o}=Le(`create_content`);Ce(De.remoteServerUrl);let s=a&&(!r||i.canCreate),c=!!r&&!i.isAdmin&&!i.canCreate,l=t(`manageOnlyCreator`,`Only the creator or a workspace owner can do this`),u=i.canCreate?o:e(`apikey.list.actions.creationRestricted`),{data:f,isLoading:h,mutate:g}=ze(Re.list(),()=>N.apiKey.getApiKeys.query()),[_,v]=(0,nn.useState)(),y=_?f?.find(e=>e.id===_):void 0,x=e=>{b.error(ct(e)?l:t(`operationFailed`,`Operation failed, please try again`))},ee=Fe({mutationFn:e=>N.apiKey.createApiKey.mutate(e),onError:x,onSuccess:()=>{g()}}),S=Fe({mutationFn:({id:e,params:t})=>N.apiKey.updateApiKey.mutate({id:e,value:t}),onError:x,onSuccess:()=>{g()}}),C=Fe({mutationFn:e=>N.apiKey.deleteApiKey.mutate({id:e}),onError:x,onSuccess:()=>{g()}}),T=()=>{s&&qt({onSubmit:async e=>ee.mutateAsync(e)})},E=t=>{te({cancelText:e(`apikey.list.actions.deleteConfirm.actions.cancel`),content:e(`apikey.list.actions.deleteConfirm.content`),okButtonProps:{danger:!0},okText:e(`apikey.list.actions.deleteConfirm.actions.ok`),onOk:async()=>{await C.mutateAsync(t.id)},title:e(`apikey.list.actions.deleteConfirm.title`)})},ne=e=>a&&(e.isMine!==!1||i.isAdmin),re=[{key:`name`,listSlot:`title`,render:t=>(0,Z.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[(0,Z.jsx)(`span`,{className:Q.nameLink,children:t.name}),t.enabled===!1&&(0,Z.jsx)(Xe,{children:e(`apikey.status.disabled`)})]}),title:e(`apikey.list.columns.name`)},{key:`key`,render:t=>(0,Z.jsx)(`span`,{onClick:e=>e.stopPropagation(),children:t.isMine===!1?(0,Z.jsx)(`span`,{style:{opacity:.5},children:`sk-lh-${`*`.repeat(12)}`}):t.keyDecryptionFailed?(0,Z.jsx)(`span`,{title:e(`apikey.display.unavailableDescription`),children:e(`apikey.display.unavailable`)}):(0,Z.jsx)(Ot,{apiKey:t.key})}),title:e(`apikey.list.columns.key`),width:220},{key:`scopes`,render:t=>(0,Z.jsx)(Xe,{children:ye(t.scopes)?e(`apikey.scopes.fullAccess`):e(`apikey.scopes.count`,{count:t.scopes?.length??0})}),title:e(`apikey.list.columns.scopes`),width:110},...r&&i.isAdmin?[{key:`creator`,render:e=>e.creator||`-`,title:e(`apikey.list.columns.creator`),width:140}]:[],{key:`expiresAt`,render:t=>t.expiresAt?(0,Z.jsx)(`span`,{className:rn(t)?Q.expired:void 0,title:t.expiresAt.toLocaleString(),children:rn(t)?e(`apikey.status.expired`):t.expiresAt.toLocaleDateString()}):(0,Z.jsx)(`span`,{className:Q.muted,children:e(`apikey.display.neverExpires`)}),title:e(`apikey.list.columns.expiresAt`),width:130},{key:`lastUsedAt`,render:t=>t.lastUsedAt?(0,Z.jsx)(`span`,{title:t.lastUsedAt.toLocaleString(),children:(0,X.default)(t.lastUsedAt).fromNow()}):(0,Z.jsx)(`span`,{className:Q.muted,children:e(`apikey.display.neverUsed`)}),title:e(`apikey.list.columns.lastUsedAt`)},{key:`actions`,listSlot:`extra`,render:t=>(0,Z.jsx)(`span`,{onClick:e=>e.stopPropagation(),children:(0,Z.jsx)(Je,{placement:`bottomRight`,items:[{icon:pe,key:`view`,label:e(`apikey.list.actions.viewDetails`),onClick:()=>v(t.id)},{danger:!0,disabled:!ne(t),icon:me,key:`delete`,label:e(`apikey.list.actions.delete`),onClick:()=>E(t)}],children:(0,Z.jsx)(D,{icon:de,size:`small`,title:e(`apikey.list.actions.more`)})})}),title:``,width:48}];return(0,Z.jsxs)(`div`,{className:Q.container,children:[(0,Z.jsxs)(`div`,{className:Q.header,children:[(0,Z.jsxs)(p,{gap:4,children:[(0,Z.jsx)(w,{as:`h3`,style:{fontSize:16,fontWeight:500,margin:0},children:e(`apikey.list.title`)}),(0,Z.jsx)(w,{style:{fontSize:13},type:`secondary`,children:e(`apikey.list.desc`)})]}),(0,Z.jsxs)(p,{horizontal:!0,gap:8,children:[(0,Z.jsx)(m,{href:`/api/v1/docs`,icon:se,target:`_blank`,type:`text`,children:e(`apikey.list.actions.viewDocs`)}),(0,Z.jsx)(m,{disabled:!s,title:s?void 0:u,type:`primary`,onClick:T,children:e(`apikey.list.actions.create`)})]})]}),(0,Z.jsx)(ht,{columns:re,dataSource:f,loading:h,rowKey:e=>e.id,emptyText:(0,Z.jsx)(d,{height:240,width:`100%`,children:(0,Z.jsx)(Qe,{description:e(c?`apikey.list.restrictedEmpty.desc`:`apikey.list.empty`),title:c?e(`apikey.list.restrictedEmpty.title`):void 0})}),onRowClick:e=>v(e.id)}),(0,Z.jsx)($t,{apiKey:y,canDelete:a&&!!y&&ne(y),canEdit:a&&!!y&&y.isMine!==!1,manageTooltip:a?l:o??l,open:!!y,onClose:()=>v(void 0),onDelete:async e=>{await C.mutateAsync(e),v(void 0)},onUpdate:async(e,t)=>{try{return await S.mutateAsync({id:e,params:t}),!0}catch{return!1}}})]})}})),$,sn,cn=e((()=>{o(),lt(),on(),$=t(l()),sn=({showSettingHeader:e=!0})=>{let{t}=n(`setting`);return(0,$.jsxs)($.Fragment,{children:[e&&(0,$.jsx)(ut,{title:t(`tab.apikey`)}),(0,$.jsx)(an,{})]})}}));cn();export{sn as default,cn as t};