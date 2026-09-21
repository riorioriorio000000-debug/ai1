import{n as e,o as t}from"../assets/rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{Kt as i,Mt as a,Nt as o,X as s,Z as c,at as l,it as u,qt as d}from"../vendor/vendor-ui-core-BmtybT1r.js";import{A as f,H as p}from"../vendor/vendor-ui-runtime-NzUbUsUl.js";import{Mc as m,t as h}from"../vendor/vendor-icons-vienkZi5.js";import{Ap as g,FD as _,ID as v,Tp as y,gF as b,jp as x,kp as S,uF as C}from"../assets/index-w64_zsxD.js";import{n as w,t as T}from"../assets/Input-gdUxluEJ.js";import{n as E,t as D}from"../assets/Segmented-BgY50E-t.js";import{n as O,t as k}from"./panelStyles-BcnhslTN.js";var A,j,M,N,P,F=e((()=>{_(),d(),E(),l(),C(),f(),A=t(n()),y(),j=t(r()),M={control:v(`acss-1dkyhev`,[`.acss-1dkyhev{flex:none;}`],`
    flex: none;
  `),meta:v(`acss-7bg21x`,[`.acss-7bg21x{font-family:var(--ant-font-family-code);font-size:10px;color:var(--ant-color-text-description);}`],`
    font-family: var(--ant-font-family-code);
    font-size: 10px;
    color: var(--ant-color-text-description);
  `),name:v(`acss-9n5u7u`,[`.acss-9n5u7u{font-family:var(--ant-font-family-code);font-size:12px;font-weight:500;color:var(--ant-color-text);}`],`
    font-family: var(--ant-font-family-code);
    font-size: 12px;
    font-weight: 500;
    color: var(--ant-color-text);
  `),row:v(`acss-1i9etid`,[`.acss-1i9etid{display:flex;gap:12px;align-items:center;justify-content:space-between;padding-block:6px;padding-inline:12px;border-block-end:1px solid var(--ant-color-border-secondary);border-inline-start:2px solid transparent;transition:background 120ms ease;}`,`.acss-1i9etid:hover{background:var(--ant-color-fill-tertiary);}`],`
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: space-between;

    padding-block: 6px;
    padding-inline: 12px;
    border-block-end: 1px solid var(--ant-color-border-secondary);
    border-inline-start: 2px solid transparent;

    transition: background 120ms ease;

    &:hover {
      background: var(--ant-color-fill-tertiary);
    }
  `),rowOverridden:v(`acss-r45rfs`,[`.acss-r45rfs{border-inline-start-color:var(--ant-color-warning);background:var(--ant-color-warning-bg);}`,`.acss-r45rfs:hover{background:var(--ant-color-warning-bg-hover);}`],`
    border-inline-start-color: var(--ant-color-warning);
    background: var(--ant-color-warning-bg);

    &:hover {
      background: var(--ant-color-warning-bg-hover);
    }
  `)},N=[{label:`true`,value:`true`},{label:`false`,value:`false`},{label:`inherit`,value:`inherit`}],P=(0,A.memo)(({flagKey:e})=>{let t=S(t=>t._originalFeatureFlags?.[e]),n=S(t=>t._featureFlagOverrides[e]),r=S(e=>e.setFlagOverride),a=n!==void 0,o=(0,A.useMemo)(()=>n===!0?`true`:n===!1?`false`:`inherit`,[n]);return(0,j.jsxs)(`div`,{className:b(M.row,a&&M.rowOverridden),children:[(0,j.jsxs)(i,{flex:1,gap:2,style:{minWidth:0},children:[(0,j.jsx)(u,{ellipsis:!0,className:M.name,children:p(e)}),(0,j.jsxs)(`span`,{className:M.meta,children:[`server: `,String(t)]})]}),(0,j.jsx)(D,{className:M.control,options:N,size:`small`,value:o,onChange:t=>{if(t===`inherit`){r(e,void 0);return}r(e,t===`true`)}})]})}),P.displayName=`DevFeatureFlagPanel/FlagRow`})),I,L,R,z,B=e((()=>{_(),d(),w(),o(),c(),l(),f(),h(),I=t(n()),O(),y(),g(),F(),L=t(r()),R={body:v(`acss-1sp75fk`,[`.acss-1sp75fk{overflow:auto;flex:1;min-height:0;}`],`
    overflow: auto;
    flex: 1;
    min-height: 0;
  `),empty:v(`acss-vrc0m1`,[`.acss-vrc0m1{padding-block:32px;font-size:12px;color:var(--ant-color-text-description);text-align:center;}`],`
    padding-block: 32px;
    font-size: 12px;
    color: var(--ant-color-text-description);
    text-align: center;
  `),footer:v(`acss-1v2m0mv`,[`.acss-1v2m0mv{display:flex;gap:8px;align-items:center;justify-content:space-between;padding-block:8px;padding-inline:12px;border-block-start:1px solid var(--ant-color-border-secondary);}`],`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: space-between;

    padding-block: 8px;
    padding-inline: 12px;
    border-block-start: 1px solid var(--ant-color-border-secondary);
  `),toolbar:v(`acss-k6562q`,[`.acss-k6562q{display:flex;flex-shrink:0;align-items:center;height:44px;border-block-end:1px solid var(--ant-color-border-secondary);}`],`
    display: flex;
    flex-shrink: 0;
    align-items: center;

    height: 44px;
    border-block-end: 1px solid var(--ant-color-border-secondary);
  `),toolbarFilter:v(`acss-iazu6j`,[`.acss-iazu6j{display:flex;flex-shrink:0;gap:6px;align-items:center;height:100%;padding-inline:12px;border-inline-start:1px solid var(--ant-color-border-secondary);}`],`
    display: flex;
    flex-shrink: 0;
    gap: 6px;
    align-items: center;

    height: 100%;
    padding-inline: 12px;
    border-inline-start: 1px solid var(--ant-color-border-secondary);
  `)},z=(0,I.memo)(()=>{let e=S(e=>e._originalFeatureFlags),t=S(e=>Object.keys(e._featureFlagOverrides).length),n=S(e=>e._featureFlagOverrides),r=S(e=>e.resetFlagOverrides),[o,c]=(0,I.useState)(``),[l,d]=(0,I.useState)(!1),f=(0,I.useMemo)(()=>e?Object.keys(e).filter(x).sort():[],[e]),h=(0,I.useMemo)(()=>{let e=o.trim().toLowerCase();return f.filter(t=>l&&n[t]===void 0?!1:e?p(t).includes(e):!0)},[f,n,l,o]);return e?(0,L.jsxs)(`div`,{className:k.root,children:[(0,L.jsxs)(`div`,{className:R.toolbar,children:[(0,L.jsx)(T,{allowClear:!0,className:k.searchInput,placeholder:`Search flag name…`,size:`small`,value:o,variant:`borderless`,onChange:e=>c(e.target.value)}),(0,L.jsxs)(i,{horizontal:!0,className:R.toolbarFilter,children:[(0,L.jsx)(s,{checked:l,size:`small`,onChange:d}),(0,L.jsx)(u,{style:{fontSize:12,whiteSpace:`nowrap`},type:`secondary`,children:`overridden only`})]})]}),(0,L.jsx)(`div`,{className:R.body,children:h.length===0?(0,L.jsx)(`div`,{className:R.empty,children:`No flags match`}):h.map(e=>(0,L.jsx)(P,{flagKey:e},e))}),(0,L.jsxs)(`div`,{className:R.footer,children:[(0,L.jsxs)(u,{style:{fontSize:11},type:`secondary`,children:[t,` active override`,t===1?``:`s`,` · client-side · localStorage persisted`]}),(0,L.jsx)(a,{disabled:t===0,icon:m,size:`small`,onClick:r,children:`Reset all`})]})]}):(0,L.jsx)(`div`,{className:k.root,children:(0,L.jsx)(`div`,{className:R.empty,children:`Server feature flags are not loaded yet.`})})}),z.displayName=`DevFeatureFlagPanel/Panel`}));e((()=>{B()}))();export{z as default};