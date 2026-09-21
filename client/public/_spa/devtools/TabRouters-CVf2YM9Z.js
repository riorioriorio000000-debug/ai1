import{n as e,o as t}from"../assets/rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{Kt as i,qt as a}from"../vendor/vendor-ui-core-BmtybT1r.js";import{FD as o,Hp as s,ID as c,Jm as l,gF as u,qm as d,uF as f,zp as p}from"../assets/index-w64_zsxD.js";import{n as m,t as h}from"./panelStyles-BcnhslTN.js";import{i as g,n as _,r as v,t as y}from"../assets/tabRouterManager-CE_FF-dr.js";var b,x=e((()=>{b=(e,t,n,r=[])=>{let i=t!==null&&e.some(e=>e.id===t),a=new Set(e.map(e=>e.id));if(n<=0){let n=new Set(r.filter(e=>a.has(e)));return i&&n.add(t),e.filter(e=>n.has(e.id)).map(e=>e.id)}let o=e.map((e,t)=>({id:e.id,index:t,lastVisited:e.lastVisited})).sort((e,t)=>t.lastVisited-e.lastVisited||e.index-t.index),s=new Set;i&&s.add(t);for(let e of r)a.has(e)&&s.add(e);for(let e of o){if(s.size>=n)break;s.add(e.id)}return e.filter(e=>s.has(e.id)).map(e=>e.id)}})),S,C,w,T=e((()=>{S=t(n()),x(),g(),d(),p(),C=e=>{let[,t]=(0,S.useState)(0);(0,S.useEffect)(()=>{let n=setInterval(()=>t(e=>e+1),e);return()=>clearInterval(n)},[e])},w=()=>{let e=s(e=>e.tabs),t=s(e=>e.activeTabId),n=s(e=>e.activeTabScope);C(1e3);let r=new Set(b(e,t,3)),i=v(),a=new Set(i),o=e.map((e,t)=>({id:e.id,index:t,lastVisited:e.lastVisited})).sort((e,t)=>t.lastVisited-e.lastVisited||e.index-t.index).map(e=>e.id),c=e.map(e=>{let n=a.has(e.id)?_(e.id)?.state.location:void 0,i=n?`${n.pathname}${n.search}${n.hash}`:null,s=y(e.id);return{active:e.id===t,canGoBack:s.canGoBack,canGoForward:s.canGoForward,drift:i!==null&&i!==e.url,id:e.id,lastVisited:e.lastVisited,live:a.has(e.id),rank:o.indexOf(e.id)+1,routerUrl:i,shouldBeLive:r.has(e.id),storeUrl:e.url,title:e.cached?.title}});return{cap:3,liveCount:i.length,orphanIds:i.filter(t=>!e.some(e=>e.id===t)),rows:c,scopeKey:l(n)}}})),E,D,O,k,A,j;e((()=>{o(),a(),f(),E=t(n()),m(),p(),T(),D=t(r()),O={cell:c(`acss-1n5gm1d`,[`.acss-1n5gm1d{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `),cold:c(`acss-185s3ho`,[`.acss-185s3ho{color:var(--ant-color-text-quaternary);}`],`
    color: var(--ant-color-text-quaternary);
  `),drift:c(`acss-rc3uuo`,[`.acss-rc3uuo{color:var(--ant-color-warning);}`],`
    color: var(--ant-color-warning);
  `),empty:c(`acss-1ugx7j2`,[`.acss-1ugx7j2{padding:24px;font-size:12px;color:var(--ant-color-text-tertiary);text-align:center;}`],`
    padding: 24px;
    font-size: 12px;
    color: var(--ant-color-text-tertiary);
    text-align: center;
  `),head:c(`acss-2n6br3`,[`.acss-2n6br3{position:sticky;z-index:1;inset-block-start:0;color:var(--ant-color-text-quaternary);text-transform:uppercase;letter-spacing:0.04em;background:var(--ant-color-bg-container);}`],`
    position: sticky;
    z-index: 1;
    inset-block-start: 0;

    color: var(--ant-color-text-quaternary);
    text-transform: uppercase;
    letter-spacing: 0.04em;

    background: var(--ant-color-bg-container);
  `),legend:c(`acss-1flvnhj`,[`.acss-1flvnhj{flex-shrink:0;padding-block:8px 12px;padding-inline:12px;border-block-start:1px solid var(--ant-color-border-secondary);font-size:10px;line-height:1.6;color:var(--ant-color-text-quaternary);}`],`
    flex-shrink: 0;

    padding-block: 8px 12px;
    padding-inline: 12px;
    border-block-start: 1px solid var(--ant-color-border-secondary);

    font-size: 10px;
    line-height: 1.6;
    color: var(--ant-color-text-quaternary);
  `),muted:c(`acss-nt432w`,[`.acss-nt432w{color:var(--ant-color-text-tertiary);}`],`
    color: var(--ant-color-text-tertiary);
  `),next:c(`acss-zknb5i`,[`.acss-zknb5i{color:var(--ant-color-error);}`],`
    color: var(--ant-color-error);
  `),ok:c(`acss-1agh9uj`,[`.acss-1agh9uj{color:var(--ant-color-success);}`],`
    color: var(--ant-color-success);
  `),row:c(`acss-xx3lkc`,[`.acss-xx3lkc{cursor:pointer;display:grid;grid-template-columns:24px 96px 68px 1fr 1fr 44px 76px 52px;gap:8px;align-items:center;padding-block:5px;padding-inline:12px;border-block-end:1px solid var(--ant-color-border-secondary);font-family:var(--ant-font-family-code);font-size:11px;font-feature-settings:'tnum';}`,`.acss-xx3lkc:hover{background:var(--ant-color-fill-quaternary);}`],`
    cursor: pointer;

    display: grid;
    grid-template-columns: 24px 96px 68px 1fr 1fr 44px 76px 52px;
    gap: 8px;
    align-items: center;

    padding-block: 5px;
    padding-inline: 12px;
    border-block-end: 1px solid var(--ant-color-border-secondary);

    font-family: var(--ant-font-family-code);
    font-size: 11px;
    font-feature-settings: 'tnum';

    &:hover {
      background: var(--ant-color-fill-quaternary);
    }
  `),rowActive:c(`acss-z6mn3z`,[`.acss-z6mn3z{background:var(--ant-color-fill-tertiary);}`],`
    background: var(--ant-color-fill-tertiary);
  `),rows:c(`acss-1sp75fk`,[`.acss-1sp75fk{overflow:auto;flex:1;min-height:0;}`],`
    overflow: auto;
    flex: 1;
    min-height: 0;
  `),summary:c(`acss-1s9j2ks`,[`.acss-1s9j2ks{flex-shrink:0;padding-block:8px;padding-inline:12px;border-block-end:1px solid var(--ant-color-border-secondary);font-family:var(--ant-font-family-code);font-size:11px;color:var(--ant-color-text-secondary);}`],`
    flex-shrink: 0;

    padding-block: 8px;
    padding-inline: 12px;
    border-block-end: 1px solid var(--ant-color-border-secondary);

    font-family: var(--ant-font-family-code);
    font-size: 11px;
    color: var(--ant-color-text-secondary);
  `)},k=e=>{let t=Math.max(0,Math.round((Date.now()-e)/1e3));if(t<60)return`${t}s ago`;let n=Math.round(t/60);return n<60?`${n}m ago`:`${Math.round(n/60)}h ago`},A=(0,E.memo)(({index:e,nextEvicted:t,row:n})=>{let r=s(e=>e.activateTab),i=n.active?`ACTIVE`:n.live?`LIVE`:`COLD`;return(0,D.jsxs)(`div`,{className:u(O.row,n.active&&O.rowActive),role:`button`,tabIndex:0,onClick:()=>r(n.id),onKeyDown:e=>e.key===`Enter`&&r(n.id),children:[(0,D.jsx)(`span`,{className:O.muted,children:e+1}),(0,D.jsx)(`span`,{className:u(O.cell,O.muted),title:n.id,children:n.id}),(0,D.jsxs)(`span`,{className:n.live?O.ok:O.cold,children:[i,n.live!==n.shouldBeLive&&`!`]}),(0,D.jsx)(`span`,{className:O.cell,title:n.title?`${n.title} — ${n.storeUrl}`:n.storeUrl,children:n.storeUrl}),(0,D.jsx)(`span`,{className:u(O.cell,n.drift?O.drift:O.muted),title:n.routerUrl??`router disposed`,children:n.live?n.drift?n.routerUrl:`=`:`—`}),(0,D.jsxs)(`span`,{className:O.muted,children:[n.canGoBack?`◀`:`·`,n.canGoForward?`▶`:`·`]}),(0,D.jsx)(`span`,{className:O.muted,children:k(n.lastVisited)}),(0,D.jsxs)(`span`,{className:t?O.next:O.muted,children:[`#`,n.rank,t&&`↓`]})]})}),A.displayName=`DevTabRoutersRow`,j=(0,E.memo)(()=>{let{cap:e,liveCount:t,orphanIds:n,rows:r,scopeKey:a}=w(),o=r.filter(e=>e.live&&!e.active),s=t>=e&&o.length>0?o.reduce((e,t)=>t.rank>e.rank?t:e).id:null;return(0,D.jsxs)(i,{className:h.root,children:[(0,D.jsxs)(`div`,{className:O.summary,children:[`scope `,(0,D.jsx)(`b`,{children:a}),` · tabs `,(0,D.jsx)(`b`,{children:r.length}),` · live routers`,` `,(0,D.jsxs)(`b`,{className:t>e?O.drift:void 0,children:[t,`/`,e]}),n.length>0&&(0,D.jsxs)(`span`,{className:O.drift,children:[` · orphan routers `,n.join(`, `)]})]}),r.length===0?(0,D.jsx)(`div`,{className:O.empty,children:`No tabs in this scope.`}):(0,D.jsxs)(`div`,{className:O.rows,children:[(0,D.jsxs)(`div`,{className:u(O.row,O.head),children:[(0,D.jsx)(`span`,{children:`#`}),(0,D.jsx)(`span`,{children:`tab id`}),(0,D.jsx)(`span`,{children:`state`}),(0,D.jsx)(`span`,{children:`store url`}),(0,D.jsx)(`span`,{children:`router url`}),(0,D.jsx)(`span`,{children:`hist`}),(0,D.jsx)(`span`,{children:`visited`}),(0,D.jsx)(`span`,{children:`lru`})]}),r.map((e,t)=>(0,D.jsx)(A,{index:t,nextEvicted:e.id===s,row:e},e.id))]}),(0,D.jsx)(`div`,{className:O.legend,children:"ACTIVE / LIVE = keep-alive router in memory, COLD = disposed (next activation cold-starts). `!` marks a router whose liveness disagrees with the LRU plan. Router url shows `=` when it matches the store url, or the diverging location when a hidden tab navigated. `lru` is the recency rank; `↓` marks the router evicted next. Click a row to activate that tab."})]})}),j.displayName=`DevTabRouters`}))();export{j as default};