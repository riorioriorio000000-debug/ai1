import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a,_ as o,i as s,m as c}from"../vendor/vendor-react-B9HSWrpN.js";import{B as l,Kt as u,qt as d,z as ee}from"../vendor/vendor-ui-core-BmtybT1r.js";import{c as te,t as f}from"../vendor/vendor-icons-vienkZi5.js";import{FD as p,ID as m,_C as ne,eE as re,gF as h,iC as ie,tE as ae,uF as g}from"./index-w64_zsxD.js";import{a as oe,n as se}from"./chat-D3ilvURJ.js";import{n as ce,t as le}from"./markdownToTxt-oGIVcT3Y.js";import{i as _,o as v}from"./store-DwGYYuCr.js";import{n as ue,t as de}from"./useWorkspaceAwareNavigate-BbajQ7ta.js";import{t as fe}from"./Conversation-CBWduYtr.js";var y,b,x,S=e((()=>{p(),y={container:m(`acss-z6sen1`,[`.acss-z6sen1{pointer-events:none;position:absolute;z-index:1;inset-block:16px 120px;inset-inline-end:8px;display:flex;flex-direction:column;align-items:end;justify-content:center;}`],`
    pointer-events: none;

    position: absolute;
    z-index: 1;
    inset-block: 16px 120px;
    inset-inline-end: 8px;

    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
  `),hoverArea:m(`acss-1ha8tei`,[`.acss-1ha8tei{pointer-events:auto;position:relative;display:flex;flex-direction:column;align-items:end;}`],`
    pointer-events: auto;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: end;
  `),previewPanel:m(`acss-172423z`,[`.acss-172423z{pointer-events:none;position:absolute;inset-block-start:50%;inset-inline-end:0;transform-origin:100% 50%;transform:translateY(-50%) scale(0.96);overflow:hidden;display:flex;min-width:240px;max-width:360px;border:1px solid var(--ant-color-border-secondary);border-radius:8px;opacity:0;background:var(--ant-color-bg-elevated);box-shadow:0 6px 16px 0 rgb(0 0 0 / 8%),0 3px 6px -4px rgb(0 0 0 / 12%),0 9px 28px 8px rgb(0 0 0 / 5%);transition:opacity var(--ant-motion-duration-mid) ease,transform var(--ant-motion-duration-mid) ease;}`],`
    pointer-events: none;

    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: 0;
    transform-origin: 100% 50%;
    transform: translateY(-50%) scale(0.96);

    overflow: hidden;
    display: flex;

    min-width: 240px;
    max-width: 360px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: 8px;

    opacity: 0;
    background: var(--ant-color-bg-elevated);
    box-shadow:
      0 6px 16px 0 rgb(0 0 0 / 8%),
      0 3px 6px -4px rgb(0 0 0 / 12%),
      0 9px 28px 8px rgb(0 0 0 / 5%);

    transition:
      opacity var(--ant-motion-duration-mid) ease,
      transform var(--ant-motion-duration-mid) ease;
  `),previewPanelVisible:m(`acss-bywah8`,[`.acss-bywah8{pointer-events:auto;transform:translateY(-50%) scale(1);opacity:1;}`],`
    pointer-events: auto;
    transform: translateY(-50%) scale(1);
    opacity: 1;
  `),rail:m(`acss-1kz2usy`,[`.acss-1kz2usy{scrollbar-width:none;overflow-y:auto;display:flex;flex-direction:column;gap:0;align-items:end;max-height:50vh;transition:opacity var(--ant-motion-duration-mid) ease;-ms-overflow-style:none;}`,`.acss-1kz2usy::-webkit-scrollbar{display:none;}`],`
    scrollbar-width: none;

    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: end;

    max-height: 50vh;

    transition: opacity var(--ant-motion-duration-mid) ease;

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }
  `),railFaded:m(`acss-e3ugbu`,[`.acss-e3ugbu{pointer-events:none;opacity:0;}`],`
    pointer-events: none;
    opacity: 0;
  `)},b={indicator:m(`acss-wtmhkb`,[`.acss-wtmhkb{cursor:pointer;flex-shrink:0;min-width:5px;height:12px;padding-block:5px;}`],`
    cursor: pointer;

    flex-shrink: 0;

    min-width: 5px;
    height: 12px;
    padding-block: 5px;
  `),indicatorContent:m(`acss-19iygaw`,[`.acss-19iygaw{width:100%;height:100%;border-radius:2px;background:var(--ant-color-fill-secondary);}`],`
    width: 100%;
    height: 100%;
    border-radius: 2px;
    background: var(--ant-color-fill-secondary);
  `),indicatorContentActive:m(`acss-kqr4dh`,[`.acss-kqr4dh{background:var(--ant-color-primary);}`],`
    background: var(--ant-color-primary);
  `)},x={dash:m(`acss-4gatu3`,[`.acss-4gatu3{flex-shrink:0;height:2px;border-radius:2px;background:var(--ant-color-fill-secondary);}`],`
    flex-shrink: 0;
    height: 2px;
    border-radius: 2px;
    background: var(--ant-color-fill-secondary);
  `),dashActive:m(`acss-kqr4dh`,[`.acss-kqr4dh{background:var(--ant-color-primary);}`],`
    background: var(--ant-color-primary);
  `),item:m(`acss-z1hyad`,[`.acss-z1hyad{cursor:pointer;padding-block:6px;padding-inline:12px;border-radius:6px;color:var(--ant-color-text-secondary);transition:background-color var(--ant-motion-duration-fast) ease;}`,`.acss-z1hyad:hover{color:var(--ant-color-text);background:var(--ant-color-fill-tertiary);}`],`
    cursor: pointer;

    padding-block: 6px;
    padding-inline: 12px;
    border-radius: 6px;

    color: var(--ant-color-text-secondary);

    transition: background-color var(--ant-motion-duration-fast) ease;

    &:hover {
      color: var(--ant-color-text);
      background: var(--ant-color-fill-tertiary);
    }
  `),itemActive:m(`acss-668td3`,[`.acss-668td3{color:var(--ant-color-primary);}`],`
    color: var(--ant-color-primary);
  `),label:m(`acss-94rgoe`,[`.acss-94rgoe{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;font-size:13px;line-height:1.4;text-align:end;text-overflow:ellipsis;word-break:break-word;}`],`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    font-size: 13px;
    line-height: 1.4;
    text-align: end;
    text-overflow: ellipsis;
    word-break: break-word;
  `),labelActive:m(`acss-oqer9v`,[`.acss-oqer9v{font-weight:500;color:var(--ant-color-primary);}`],`
    font-weight: 500;
    color: var(--ant-color-primary);
  `),list:m(`acss-1l4p2pm`,[`.acss-1l4p2pm{scrollbar-width:thin;overflow-y:auto;max-height:60vh;padding-block:4px;padding-inline:4px;}`,`.acss-1l4p2pm::-webkit-scrollbar{width:4px;}`,`.acss-1l4p2pm::-webkit-scrollbar-thumb{border-radius:2px;background:var(--ant-color-fill-secondary);}`],`
    scrollbar-width: thin;

    overflow-y: auto;

    max-height: 60vh;
    padding-block: 4px;
    padding-inline: 4px;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background: var(--ant-color-fill-secondary);
    }
  `)}})),C,w,T,pe=e((()=>{g(),C=t(i()),r(),S(),w=t(a()),T=(0,C.memo)(({id:e,width:t,virtuosoIndex:r,position:i,activePosition:a,onJump:o})=>{let{t:s}=n(`chat`),c=b,l=a===i;return(0,w.jsx)(`div`,{"aria-current":l?`true`:void 0,"aria-label":s(`minimap.jumpToMessage`,{index:i+1}),className:c.indicator,id:e,style:{width:t},onClick:()=>o(r),children:(0,w.jsx)(`div`,{className:h(c.indicatorContent,l&&c.indicatorContentActive)})})}),T.displayName=`MinimapIndicator`})),E,D,O,me=e((()=>{d(),g(),E=t(i()),r(),S(),D=t(a()),O=(0,E.memo)(({indicators:e,activePosition:t,onJump:r})=>{let{t:i}=n(`chat`),a=x;return(0,D.jsx)(u,{className:a.list,gap:2,children:e.map(({id:e,preview:n,virtuosoIndex:o,width:s},c)=>{let l=t===c,d=n||i(`minimap.emptyPreview`);return(0,D.jsxs)(u,{horizontal:!0,align:`center`,"aria-current":l?`true`:void 0,className:h(a.item,l&&a.itemActive),gap:10,justify:`flex-end`,onClick:()=>r(o),children:[(0,D.jsx)(`span`,{className:h(a.label,l&&a.labelActive),children:d}),(0,D.jsx)(`div`,{className:h(a.dash,l&&a.dashActive),style:{width:s}})]},e)})})}),O.displayName=`MinimapPreview`})),k,A,j,M,N,P=e((()=>{le(),k=5,A=16,j=80,M=e=>{let t=e?.length??0,n=Math.min(Math.sqrt(t/j),1);return k+(A-k)*n},N=e=>{if(!e)return``;let t=ce(e).replaceAll(/\s+/g,` `).trim();return t?t.slice(0,100)+(t.length>100?`…`:``):``}})),F,I,L,R,z,he=e((()=>{F=t(ne()),I=t(ie()),L=t(i()),fe(),P(),R=(0,F.default)(`lobe-react:chat-minimap`),z=()=>{let e=_(v.virtuaScrollMethods),t=_(v.activeIndex),n=_(v.displayMessages,I.default),r=(0,L.useMemo)(()=>n.reduce((e,t,n)=>(t.role===`user`&&e.push({id:t.id,preview:N(t.content),virtuosoIndex:n,width:M(t.content)}),e),[]),[n]),i=(0,L.useMemo)(()=>{let e=new Map;return r.forEach(({virtuosoIndex:t},n)=>{e.set(t,n)}),e},[r]);return{activeIndicatorPosition:(0,L.useMemo)(()=>{if(t===null)return null;R(`> activeIndex`,t),R(`> indicatorIndexMap`,i);let e=i.get(t);if(e!==void 0)return e;let n=null;for(let[e,i]of r.entries())if(i.virtuosoIndex<=t)n=e;else break;return n},[t,i,r]),handleJump:(0,L.useCallback)(t=>{e?.scrollToIndex(t,{align:`start`,smooth:!0})},[e]),indicators:r}}})),B,V,H,U,ge=e((()=>{d(),g(),B=t(i()),pe(),me(),S(),he(),P(),V=t(a()),H=120,U=(0,B.memo)(()=>{let e=y,[t,n]=(0,B.useState)(!1),r=(0,B.useRef)(null),{indicators:i,activeIndicatorPosition:a,handleJump:o}=z();return i.length<=3?null:(0,V.jsx)(u,{className:e.container,children:(0,V.jsxs)(u,{className:e.hoverArea,onMouseEnter:()=>{r.current&&=(clearTimeout(r.current),null),n(!0)},onMouseLeave:()=>{r.current&&clearTimeout(r.current),r.current=setTimeout(()=>{n(!1),r.current=null},H)},children:[(0,V.jsx)(u,{className:h(e.rail,t&&e.railFaded),role:`group`,children:i.map(({id:e,width:t,virtuosoIndex:n},r)=>(0,V.jsx)(T,{activePosition:a,id:e,position:r,virtuosoIndex:n,width:t,onJump:o},e))}),(0,V.jsx)(`div`,{"aria-hidden":!t,className:h(e.previewPanel,t&&e.previewPanelVisible),children:(0,V.jsx)(O,{activePosition:a,indicators:i,onJump:e=>{o(e),r.current&&clearTimeout(r.current),n(!1)}})})]})})}),U.displayName=`ChatMinimap`})),W,G,K,_e=e((()=>{W=t(i()),s(),G=e=>{let t=e.replace(/^#/,``);if(t)try{return decodeURIComponent(t)}catch{return t}},K=()=>{let e=c(),t=o(),n=(0,W.useMemo)(()=>G(e.hash),[e.hash]),r=(0,W.useCallback)(()=>{t(`${e.pathname}${e.search}`,{replace:!0})},[e.pathname,e.search,t]);return(0,W.useMemo)(()=>n?{id:n,navigationKey:e.key,onHandled:r}:void 0,[r,e.key,n])}})),q,J,Y,X,ve=e((()=>{q=t(i()),s(),de(),se(),J=`comment`,Y=`commentThread`,X=e=>{let t=c(),n=ue(),r=(0,q.useRef)(void 0);(0,q.useEffect)(()=>{if(!e)return;let i=new URLSearchParams(t.search),a=i.get(Y);if(!a)return;let o=i.get(J)??a,s=`${e}:${a}:${o}`;if(r.current===s)return;r.current=s;let{openTopicComments:c,openTopicCommentThread:l}=oe.getState();c(e),l(e,a,void 0,void 0,o),i.delete(J),i.delete(Y);let u=i.toString();n(`${t.pathname}${u?`?${u}`:``}${t.hash}`,{replace:!0})},[t.hash,t.pathname,t.search,n,e])}})),Z,Q,$,ye,be=e((()=>{p(),d(),l(),g(),f(),Z=t(i()),re(),Q=t(a()),$={cancelIcon:m(`acss-1xwdnvi`,[`.acss-1xwdnvi{position:absolute;z-index:100;inset-block-start:8px;inset-inline-end:8px;}`],`
    position: absolute;
    z-index: 100;
    inset-block-start: 8px;
    inset-inline-end: 8px;
  `),container:m(`acss-12aja28`,[`.acss-12aja28{position:absolute;z-index:1100;inset-block-end:16px;inset-inline-end:20px;overflow:hidden;border:1px solid var(--ant-color-split);border-radius:8px;background:var(--ant-color-bg-container);box-shadow:var(--ant-box-shadow-secondary);}`],`
    position: absolute;
    z-index: 1100;
    inset-block-end: 16px;
    inset-inline-end: 20px;

    overflow: hidden;

    border: 1px solid var(--ant-color-split);
    border-radius: 8px;

    background: var(--ant-color-bg-container);
    box-shadow: var(--ant-box-shadow-secondary);
  `),mobileContainer:m(`acss-gn9g6x`,[`.acss-gn9g6x{inset-block-end:8px;inset-inline-start:8px;}`],`
    inset-block-end: 8px;
    inset-inline-start: 8px;
  `),wrapper:m(`acss-1pfxmmp`,[`.acss-1pfxmmp{background:linear-gradient(
        180deg,
        color-mix(in srgb, var(--ant-color-bg-container) 0%, transparent),
        var(--ant-color-bg-container) var(--gradient-stop, 140px)
      ),url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'%3E%3Cg fill='var(--ant-color-fill-tertiary)' %3E %3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");}`],`
    background:
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--ant-color-bg-container) 0%, transparent),
        var(--ant-color-bg-container) var(--gradient-stop, 140px)
      ),
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'%3E%3Cg fill='var(--ant-color-fill-tertiary)' %3E %3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
  `),wrapperDark:m(`acss-11rzq6q`,[`.acss-11rzq6q{--gradient-stop:80px;}`],`
    --gradient-stop: 80px;
  `),wrapperLight:m(`acss-1e81ef3`,[`.acss-1e81ef3{--gradient-stop:140px;}`],`
    --gradient-stop: 140px;
  `)},ye=(0,Z.memo)(({mobile:e,children:t,show:n,onCancel:r,showCloseIcon:i=!0,width:a=422,height:o=`auto`,wrapper:s={},className:c,...l})=>{let d=ae(),{className:f,...p}=s;return n&&(0,Q.jsxs)(u,{className:h($.container,e&&$.mobileContainer,c),height:o,width:e?`calc(100% - 16px)`:a,...l,children:[i&&(0,Q.jsx)(ee,{className:$.cancelIcon,icon:te,onClick:()=>r?.()}),(0,Q.jsx)(u,{horizontal:!0,gap:16,padding:`20px 20px 16px`,className:h($.wrapper,d?$.wrapperDark:$.wrapperLight,f),...p,children:t})]})})}));export{_e as a,ge as c,X as i,be as n,K as o,ve as r,U as s,ye as t};