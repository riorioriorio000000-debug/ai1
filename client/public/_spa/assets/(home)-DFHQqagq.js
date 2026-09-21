import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,Q as r,j as i,n as a,t as o}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as s,T as c,c as l,i as u,m as d,v as f}from"../vendor/vendor-react-B9HSWrpN.js";import{B as p,Bt as m,Kt as h,Mt as g,Nt as _,Vt as v,Xn as y,Zn as b,at as ee,i as te,it as ne,qt as x,r as re,z as ie}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Af as ae,Hh as oe,Ju as se,So as ce,mt as le,t as S,ua as ue,ut as de}from"../vendor/vendor-icons-vienkZi5.js";import{At as fe,Bx as pe,Dt as C,E_ as me,Et as he,FD as w,ID as T,Kf as ge,Ot as E,T_ as D,Yd as _e,aS as ve,eS as ye,gF as be,hF as xe,kt as Se,qd as Ce,qf as we,sS as Te,uF as Ee,vS as De,vn as Oe,wx as ke,yS as Ae,yn as je}from"./index-w64_zsxD.js";import{n as Me,t as Ne}from"./Tag-C95BKTI7.js";import{C as Pe,w as Fe}from"./chat-D3ilvURJ.js";import{F as Ie,P as Le}from"./file-CX3iZ5dr.js";import{n as Re,t as ze}from"./Empty-Dam8NCz3.js";import{r as Be,t as Ve}from"./FileIcon-CDKQg3YR.js";import{n as He,t as Ue}from"./useAgentDisplayMeta-CJW2s18T.js";import{A as We,C as Ge,D as Ke,E as qe,M as Je,N as Ye,O as Xe,S as Ze,T as Qe,k as $e,w as et}from"./Messages-DmeZ4Iq1.js";import{n as tt,t as nt}from"./Github-C7Wh73Pp.js";import{n as rt,t as it}from"./AsyncError-B3Va32IA.js";import{n as O,t as k}from"./useWorkspaceAwareNavigate-BbajQ7ta.js";import{n as at,t as ot}from"./useFetchAgentList-BhSSn9uG.js";import{a as st,t as ct}from"./LibraryModal-w_PnK7JG.js";import{l as lt,r as A,s as ut,t as j}from"./store-DTHBVhLw.js";import{i as dt,t as ft}from"./library-CAFftQGY.js";import{n as pt,t as mt}from"./taskDetailPath-K9JHW8ZM.js";import{n as ht,t as gt}from"./loader-uASToCw0.js";import{n as _t,t as vt}from"./formatTaskItemDate-DyzWCDKX.js";import{n as yt,r as bt,t as xt}from"./Skeleton-B4zF98PI.js";import{n as St,t as Ct}from"./StatusIcon-B5lL6Vem.js";import{n as wt,t as Tt}from"./state-DDMMTDdL.js";import{i as Et,n as Dt,r as Ot,t as kt}from"./useInitFileCheck-DVqRlIuW.js";import{c as At,l as jt}from"./useFileItemDropdown-B1Ldx50T.js";var Mt,Nt,Pt,Ft=e((()=>{Mt=new Map([[`all`,{}],[`task`,{type:`task`}],[`document`,{type:`document`}],[`linear`,{provider:`linear`}],[`github`,{provider:`github`}]]),Nt=e=>e&&Mt.has(e)?e:null,Pt=e=>Mt.get(e)??{}})),M,It,Lt,Rt=e((()=>{M=t(s()),o(),De(),j(),lt(),ke(),Oe(),Ft(),It=30,Lt=e=>{let t=Ae(),n=A(e=>e.listVisibility),r=Pt(e),i=t?ut(void 0,n):void 0,{data:o,error:s,isLoading:c,isValidating:l,mutate:u,setSize:d,size:f}=a((0,M.useCallback)((n,r)=>r&&r.nextCursor===null?null:ye.workspace(t,e,r?.nextCursor??void 0,i),[e,i,t]),([,,,e,t])=>je.listByWorkspace({cursor:e||void 0,limit:It,provider:r.provider,type:r.type??null,visibility:t??void 0}),{revalidateFirstPage:!1});(0,M.useEffect)(()=>{d(1)},[e,d,i]),(0,M.useEffect)(()=>je.registerWorkspaceListRefresh(()=>u()),[u]);let p=(0,M.useCallback)(()=>{d(e=>e+1)},[d]),m=(0,M.useCallback)(()=>{u()},[u]),h=o?.flatMap(e=>e?.items??[])??[],g=o?.findLast(Boolean),_=g?g.nextCursor===null:!1,v=!s&&(c||f>0&&!!o&&o[f-1]===void 0);return{error:s,hasMore:!_&&!s,isLoadingInitial:c,isLoadingMore:v,isValidating:l,items:h,loadMore:p,reload:m}}})),zt,Bt,Vt=e((()=>{zt=t(s()),mt(),gt(),Ke(),k(),Bt=()=>{let e=O();return(0,zt.useCallback)(t=>{let n=qe(t).getOpenTarget(t);if(n)switch(n.kind){case`document`:ht(n.documentId);return;case`external`:Xe(n.url)&&window.open(n.url,`_blank`,`noopener,noreferrer`);return;case`filePreview`:Xe(n.url)&&window.open(n.url,`_blank`,`noopener,noreferrer`);return;case`task`:e(pt(n.identifier,void 0,n.name))}},[e])}})),Ht,N,P,Ut,Wt,Gt=e((()=>{w(),tt(),x(),Me(),ee(),Ee(),S(),Ht=t(s()),i(),Ke(),We(),N=t(c()),P={cover:T(`acss-1y65xch`,[`.acss-1y65xch{position:relative;overflow:hidden;height:clamp(160px, 15vw, 220px);margin:7px;border-radius:11px;background:radial-gradient(
        140% 110% at 50% 0%,
        color-mix(in srgb, #fff 85%, transparent) 0%,
        color-mix(in srgb, #fff 30%, transparent) 45%,
        transparent 75%
      ),var(--ant-color-fill-tertiary);box-shadow:inset 0 1px 0 #fff;}`,`[data-theme='dark'] .acss-1y65xch{background:radial-gradient(
          140% 110% at 50% 0%,
          color-mix(in srgb, #fff 10%, transparent) 0%,
          transparent 65%
        ),var(--ant-color-fill-quaternary);box-shadow:inset 0 1px 0 color-mix(in srgb, #fff 12%, transparent);}`],`
    position: relative;

    overflow: hidden;

    height: clamp(160px, 15vw, 220px);
    margin: 7px;
    border-radius: 11px;

    /* A white top spotlight keeps the flat fill from reading dull. Light and
       dark need different intensities: on the light grey fill the highlight
       must be near-opaque white to register at all, while in dark mode a few
       percent of white already lifts the surface. */
    background:
      radial-gradient(
        140% 110% at 50% 0%,
        color-mix(in srgb, #fff 85%, transparent) 0%,
        color-mix(in srgb, #fff 30%, transparent) 45%,
        transparent 75%
      ),
      var(--ant-color-fill-tertiary);
    box-shadow: inset 0 1px 0 #fff;

    [data-theme='dark'] & {
      background:
        radial-gradient(
          140% 110% at 50% 0%,
          color-mix(in srgb, #fff 10%, transparent) 0%,
          transparent 65%
        ),
        var(--ant-color-fill-quaternary);
      box-shadow: inset 0 1px 0 color-mix(in srgb, #fff 12%, transparent);
    }
  `),coverBadge:T(`acss-kcd2o9`,[`.acss-kcd2o9{position:absolute;z-index:2;inset-block-start:9px;inset-inline-start:9px;display:grid;place-items:center;width:34px;height:34px;border:1px solid var(--ant-color-border-secondary);border-radius:10px;color:var(--ant-color-text);background:color-mix(in srgb, var(--ant-color-bg-elevated) 88%, transparent);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);}`],`
    position: absolute;
    z-index: 2;
    inset-block-start: 9px;
    inset-inline-start: 9px;

    display: grid;
    place-items: center;

    width: 34px;
    height: 34px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: 10px;

    color: var(--ant-color-text);

    background: color-mix(in srgb, var(--ant-color-bg-elevated) 88%, transparent);
    backdrop-filter: blur(12px);
  `),grid:T(`acss-xmu3uz`,[`.acss-xmu3uz{position:absolute;inset:0;opacity:0.22;background-image:linear-gradient(var(--ant-color-border-secondary) 1px, transparent 1px),linear-gradient(90deg, var(--ant-color-border-secondary) 1px, transparent 1px);background-size:20px 20px;}`],`
    position: absolute;
    inset: 0;

    opacity: 0.22;
    background-image:
      linear-gradient(var(--ant-color-border-secondary) 1px, transparent 1px),
      linear-gradient(90deg, var(--ant-color-border-secondary) 1px, transparent 1px);
    background-size: 20px 20px;
  `),linearBody:T(`acss-h62529`,[`.acss-h62529{padding:20px;}`],`
    padding: 20px;
  `),linearId:T(`acss-19974e`,[`.acss-19974e{font-size:10px;font-weight:650;color:var(--ant-color-text-tertiary);letter-spacing:0.04em;}`],`
    font-size: 10px;
    font-weight: 650;
    color: var(--ant-color-text-tertiary);
    letter-spacing: 0.04em;
  `),linearTitle:T(`acss-1ax6rt6`,[`.acss-1ax6rt6{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;margin-block-start:7px;font-size:13px;font-weight:700;line-height:1.4;}`],`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    margin-block-start: 7px;

    font-size: 13px;
    font-weight: 700;
    line-height: 1.4;
  `),mockWindow:T(`acss-d8ruxm`,[`.acss-d8ruxm{position:absolute;inset:26px;overflow:hidden;border:1px solid var(--ant-color-border-secondary);border-radius:9px;background:var(--ant-color-bg-container);}`],`
    position: absolute;
    inset: 26px;

    overflow: hidden;

    border: 1px solid var(--ant-color-border-secondary);
    border-radius: 9px;

    background: var(--ant-color-bg-container);
  `),previewDescription:T(`acss-1wh4emd`,[`.acss-1wh4emd{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;margin-block-start:8px;font-size:9px;line-height:1.55;color:var(--ant-color-text-secondary);}`],`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    margin-block-start: 8px;

    font-size: 9px;
    line-height: 1.55;
    color: var(--ant-color-text-secondary);
  `),previewBody:T(`acss-1uejr7l`,[`.acss-1uejr7l{box-sizing:border-box;height:100%;padding-block:20px 28px;padding-inline:20px;}`],`
    box-sizing: border-box;
    height: 100%;
    padding-block: 20px 28px;
    padding-inline: 20px;
  `),previewIdentifier:T(`acss-1hnp1a3`,[`.acss-1hnp1a3{font-size:9px;font-weight:650;color:var(--ant-color-text-tertiary);}`],`
    font-size: 9px;
    font-weight: 650;
    color: var(--ant-color-text-tertiary);
  `),previewTitle:T(`acss-7523tb`,[`.acss-7523tb{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;margin-block-start:7px;font-size:12px;font-weight:700;line-height:1.45;}`],`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    margin-block-start: 7px;

    font-size: 12px;
    font-weight: 700;
    line-height: 1.45;
  `),status:T(`acss-s02lx9`,[`.acss-s02lx9{position:absolute;z-index:2;inset-block-start:12px;inset-inline-end:12px;}`],`
    position: absolute;
    z-index: 2;
    inset-block-start: 12px;
    inset-inline-end: 12px;
  `),taskBody:T(`acss-h62529`,[`.acss-h62529{padding:20px;}`],`
    padding: 20px;
  `)},Ut=e=>{let t=e?.toLowerCase();if(t){if(t.includes(`done`)||t.includes(`complete`)||t===`merged`)return`success`;if(t.includes(`review`)||t.includes(`progress`))return`warning`;if(t.includes(`open`)||t.includes(`todo`))return`info`}},Wt=(0,Ht.memo)(({item:e,title:t})=>{let{t:r}=n(`file`),i=qe(e),a=i.getIcon(e),o=i.getDescription(e),s=i.getIdentifier(e),c=e.resourceType.startsWith(`github_`)&&s?.includes(`#`)?`#${s.split(`#`).at(-1)}`:s,l=e.resourceType===`document`?r(`work.type.document`):c,u=e.resourceType.startsWith(`github_`),d=e.resourceType.startsWith(`linear_`),f=e.resourceType===`task`?e.task.status:null,p=e.status||f;return(0,N.jsxs)(`div`,{className:P.cover,children:[(0,N.jsx)(`div`,{className:P.grid}),(0,N.jsx)(`div`,{className:P.mockWindow,children:d?(0,N.jsxs)(`div`,{className:P.linearBody,children:[(0,N.jsx)(h,{horizontal:!0,align:`center`,justify:`space-between`,children:(0,N.jsx)(`span`,{className:P.linearId,children:s})}),(0,N.jsx)(`div`,{className:P.linearTitle,children:t}),(0,N.jsx)(`div`,{className:P.previewDescription,children:o})]}):e.resourceType===`task`?(0,N.jsxs)(h,{className:P.taskBody,gap:10,children:[(0,N.jsxs)(h,{horizontal:!0,align:`center`,gap:8,children:[(0,N.jsx)(oe,{color:xe.colorSuccess,size:22}),(0,N.jsx)(ne,{strong:!0,children:t})]}),(0,N.jsx)(`div`,{className:P.previewDescription,children:o})]}):(0,N.jsxs)(`div`,{className:P.previewBody,children:[(0,N.jsxs)(h,{horizontal:!0,align:`center`,gap:6,children:[e.resourceType===`github_pull_request`&&(0,N.jsx)(se,{color:xe.colorTextTertiary,size:11}),(0,N.jsx)(`span`,{className:P.previewIdentifier,children:l||e.resourceType})]}),(0,N.jsx)(`div`,{className:P.previewTitle,children:t}),(0,N.jsx)(`div`,{className:P.previewDescription,children:o})]})}),(0,N.jsx)(`div`,{className:P.coverBadge,children:u?(0,N.jsx)(nt,{size:18}):d?(0,N.jsx)($e,{size:18}):(0,N.jsx)(a,{size:17})}),!d&&!u&&p&&!e.resourceDeleted&&(0,N.jsx)(Ne,{className:P.status,color:Ut(p),size:`small`,children:p})]})}),Wt.displayName=`WorkPreview`})),Kt,F,I,qt,Jt,Yt=e((()=>{w(),_e(),x(),p(),te(),Me(),Ee(),S(),Kt=t(s()),i(),_t(),Ue(),Ke(),et(),Ze(),Fe(),Ye(),Gt(),F=t(c()),I={agentAvatar:T(`acss-1extwty`,[`.acss-1extwty{align-self:flex-start;margin-block-start:2px;}`],`
    align-self: flex-start;
    margin-block-start: 2px;
  `),agentName:T(`acss-o5ia2c`,[`.acss-o5ia2c{overflow:hidden;flex:none;max-width:64px;font-size:12px;font-weight:600;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;
    flex: none;

    max-width: 64px;

    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
  `),card:T(`acss-fp7uev`,[`.acss-fp7uev{position:relative;overflow:hidden;border:1px solid var(--ant-color-border-secondary);border-radius:16px;background:var(--ant-color-bg-container);transition:transform var(--ant-motion-duration-fast),border-color var(--ant-motion-duration-fast),box-shadow var(--ant-motion-duration-fast);}`],`
    position: relative;

    overflow: hidden;

    border: 1px solid var(--ant-color-border-secondary);
    border-radius: 16px;

    background: var(--ant-color-bg-container);

    transition:
      transform var(--ant-motion-duration-fast),
      border-color var(--ant-motion-duration-fast),
      box-shadow var(--ant-motion-duration-fast);
  `),cardInfo:T(`acss-ya7mi0`,[`.acss-ya7mi0{padding-block:8px 12px;padding-inline:12px;}`],`
    padding-block: 8px 12px;
    padding-inline: 12px;
  `),clickable:T(`acss-y64grf`,[`.acss-y64grf{cursor:pointer;}`,`.acss-y64grf:hover{border-color:var(--ant-color-border);}`],`
    cursor: pointer;

    &:hover {
      border-color: var(--ant-color-border);
    }
  `),removeAction:T(`acss-uotq53`,[`.acss-uotq53{position:absolute;z-index:1;inset-block-start:12px;inset-inline-end:12px;opacity:0;transition:opacity var(--ant-motion-duration-fast);}`,`.acss-uotq53:focus-visible,.work-preview-card:hover .acss-uotq53{opacity:1;}`,`@media (hover: none){.acss-uotq53{opacity:1;}}`],`
    position: absolute;
    z-index: 1;
    inset-block-start: 12px;
    inset-inline-end: 12px;

    opacity: 0;

    transition: opacity var(--ant-motion-duration-fast);

    &:focus-visible,
    .work-preview-card:hover & {
      opacity: 1;
    }

    /* Touch devices have no hover to reveal it; keep the only removal control visible. */
    @media (hover: none) {
      opacity: 1;
    }
  `),footer:T(`acss-1bfthr7`,[`.acss-1bfthr7{overflow:hidden;margin-block-start:8px;}`],`
    overflow: hidden;
    margin-block-start: 8px;
  `),identityMeta:T(`acss-rimv92`,[`.acss-rimv92{flex:1;min-width:0;}`],`
    flex: 1;
    min-width: 0;
  `),identifier:T(`acss-wycrp8`,[`.acss-wycrp8{overflow:hidden;min-width:0;font-size:11px;color:var(--ant-color-text-tertiary);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    min-width: 0;

    font-size: 11px;
    color: var(--ant-color-text-tertiary);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),metaRow:T(`acss-zwlk01`,[`.acss-zwlk01{min-width:0;}`],`
    min-width: 0;
  `),meta:T(`acss-nf90f3`,[`.acss-nf90f3{flex:none;font-size:10px;color:var(--ant-color-text-tertiary);}`],`
    flex: none;
    font-size: 10px;
    color: var(--ant-color-text-tertiary);
  `),originTopic:T(`acss-wycrp8`,[`.acss-wycrp8{overflow:hidden;min-width:0;font-size:11px;color:var(--ant-color-text-tertiary);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    min-width: 0;

    font-size: 11px;
    color: var(--ant-color-text-tertiary);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),title:T(`acss-14tox6k`,[`.acss-14tox6k{overflow:hidden;margin-block-start:5px;font-size:15px;font-weight:650;line-height:1.4;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    margin-block-start: 5px;

    font-size: 15px;
    font-weight: 650;
    line-height: 1.4;
    text-overflow: ellipsis;
    white-space: nowrap;
  `),type:T(`acss-1gjnibc`,[`.acss-1gjnibc{font-size:11px;color:var(--ant-color-text-tertiary);}`],`
    font-size: 11px;
    color: var(--ant-color-text-tertiary);
  `),usage:T(`acss-cco6sh`,[`.acss-cco6sh{flex:none;margin-inline-start:auto;font-size:10px;color:var(--ant-color-text-secondary);white-space:nowrap;}`],`
    flex: none;

    margin-inline-start: auto;

    font-size: 10px;
    color: var(--ant-color-text-secondary);
    white-space: nowrap;
  `)},qt=e=>{switch(e.resourceType){case`document`:return`work.type.document`;case`file`:return`work.type.file`;case`github_issue`:return`work.type.githubIssue`;case`github_pull_request`:return`work.type.githubPullRequest`;case`linear_document`:return`work.type.linearDocument`;case`linear_issue`:return`work.type.linearIssue`;case`task`:return`work.type.task`}},Jt=(0,Kt.memo)(({item:e,onOpen:t,onRemoved:r})=>{let{t:i,i18n:a}=n([`chat`,`common`,`file`]),o=He(e.originAgentId),s=Qe({onRemoved:r}),c=Ge({onRemoved:r}),l=qe(e),u=l.getTitle(e)?.trim()||l.getIdentifier(e)||e.resourceId||e.id,d=l.getIdentifier(e),f=e.resourceType.startsWith(`github_`)&&d?.includes(`#`)?`#${d.split(`#`).at(-1)}`:d,p=e.resourceDeleted,m=l.getOpenTarget(e),g=!!m&&(m.kind!==`filePreview`||!!m.url),_=vt(e.event.changeType===`created`?e.createdAt:e.updatedAt,{formatOtherYear:i(`time.formatOtherYear`,{ns:`common`}),formatThisYear:i(`time.formatThisYear`,{ns:`common`}),locale:a.language}),v=i(e.event.changeType===`created`?`work.createdAt`:`work.updatedAt`,{date:_,ns:`file`}),y=Pe(e.event.cumulativeUsage),b=Je(e.totalCost);return(0,F.jsxs)(h,{className:be(`work-preview-card`,I.card,g&&I.clickable),onClick:g?()=>p?c(e):t(e):void 0,children:[p&&(0,F.jsx)(ie,{danger:!0,className:I.removeAction,icon:le,size:`small`,title:i(`workingPanel.works.remove`,{ns:`chat`}),variant:`filled`,onClick:t=>{t.stopPropagation(),s(e)}}),(0,F.jsx)(Wt,{item:e,title:u}),(0,F.jsxs)(`div`,{className:I.cardInfo,children:[(0,F.jsxs)(h,{horizontal:!0,align:`center`,className:I.metaRow,gap:6,children:[(0,F.jsx)(`span`,{className:I.type,children:i(qt(e),{ns:`file`})}),f&&e.resourceType!==`document`&&e.resourceType!==`github_pull_request`&&e.resourceType!==`linear_issue`&&(0,F.jsx)(h,{horizontal:!0,align:`center`,className:I.identifier,gap:3,children:f}),e.resourceType===`github_issue`&&e.status&&(0,F.jsx)(Ne,{size:`small`,style:{marginInlineStart:`auto`},children:e.status})]}),(0,F.jsx)(`div`,{className:I.title,children:u}),(0,F.jsxs)(h,{horizontal:!0,align:`baseline`,className:I.footer,gap:7,children:[o&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(re,{emojiScaleWithBackground:!0,avatar:o.avatar,background:o.backgroundColor,className:I.agentAvatar,shape:`square`,size:24}),(0,F.jsxs)(h,{className:I.identityMeta,gap:1,children:[(0,F.jsxs)(h,{horizontal:!0,align:`baseline`,gap:7,children:[(0,F.jsx)(`span`,{className:I.agentName,children:o.title}),(0,F.jsx)(`span`,{className:I.meta,children:v})]}),e.originTopicTitle&&(0,F.jsx)(`div`,{className:I.originTopic,children:i(`work.fromTopic`,{ns:`file`,topic:e.originTopicTitle})})]})]}),!o&&(0,F.jsxs)(h,{className:I.identityMeta,gap:1,children:[(0,F.jsx)(`span`,{className:I.meta,children:v}),e.originTopicTitle&&(0,F.jsx)(`div`,{className:I.originTopic,children:i(`work.fromTopic`,{ns:`file`,topic:e.originTopicTitle})})]}),(y||b)&&(0,F.jsx)(`span`,{className:I.usage,children:[y?`${Ce(y)} tokens`:null,b].filter(Boolean).join(` · `)})]})]})]})}),Jt.displayName=`WorkPreviewCard`})),L,R,z,Xt,Zt,Qt=e((()=>{w(),v(),Re(),x(),te(),_(),Ee(),S(),L=t(s()),i(),Ue(),ot(),Ye(),Rt(),bt(),Vt(),Yt(),R=t(c()),z={agentFilter:T(`acss-dioq9u`,[`.acss-dioq9u{flex:none;padding-inline:5px 10px;border:1px solid transparent;border-radius:999px;color:var(--ant-color-text-secondary);}`],`
    flex: none;

    padding-inline: 5px 10px;
    border: 1px solid transparent;
    border-radius: 999px;

    color: var(--ant-color-text-secondary);
  `),agentFilterActive:T(`acss-3c40if`,[`.acss-3c40if{border-color:var(--ant-color-border);color:var(--ant-color-text);background:var(--ant-color-fill-quaternary);}`],`
    border-color: var(--ant-color-border);
    color: var(--ant-color-text);
    background: var(--ant-color-fill-quaternary);
  `),cardList:T(`acss-1o3yqgy`,[`.acss-1o3yqgy{display:grid;grid-template-columns:repeat(3, minmax(280px, 1fr));gap:16px;width:100%;}`,`@media (width >= 1600px){.acss-1o3yqgy{grid-template-columns:repeat(4, minmax(280px, 1fr));}}`,`@media (width <= 920px){.acss-1o3yqgy{grid-template-columns:repeat(2, minmax(280px, 1fr));}}`,`@media (width <= 620px){.acss-1o3yqgy{grid-template-columns:minmax(0, 1fr);}}`],`
    display: grid;
    grid-template-columns: repeat(3, minmax(280px, 1fr));
    gap: 16px;
    width: 100%;

    @media (width >= 1600px) {
      grid-template-columns: repeat(4, minmax(280px, 1fr));
    }

    @media (width <= 920px) {
      grid-template-columns: repeat(2, minmax(280px, 1fr));
    }

    @media (width <= 620px) {
      grid-template-columns: minmax(0, 1fr);
    }
  `),container:T(`acss-11rg2nu`,[`.acss-11rg2nu{height:100%;}`],`
    height: 100%;
  `),emptyState:T(`acss-x7i0sl`,[`.acss-x7i0sl{height:100%;min-height:320px;}`],`
    height: 100%;
    min-height: 320px;
  `),filterBar:T(`acss-obpzkv`,[`.acss-obpzkv{scrollbar-width:none;overflow:auto hidden;flex:none;padding-block:12px 10px;padding-inline:24px;}`,`.acss-obpzkv::-webkit-scrollbar{display:none;}`],`
    scrollbar-width: none;

    overflow: auto hidden;
    flex: none;

    padding-block: 12px 10px;
    padding-inline: 24px;

    &::-webkit-scrollbar {
      display: none;
    }
  `),groupCount:T(`acss-104gs8r`,[`.acss-104gs8r{flex:none;font-size:12px;color:var(--ant-color-text-tertiary);}`],`
    flex: none;
    font-size: 12px;
    color: var(--ant-color-text-tertiary);
  `),groupHeader:T(`acss-1h17bxo`,[`.acss-1h17bxo{display:flex;gap:10px;align-items:baseline;margin-block-end:12px;}`],`
    display: flex;
    gap: 10px;
    align-items: baseline;
    margin-block-end: 12px;
  `),groupTitle:T(`acss-9ayc5`,[`.acss-9ayc5{font-size:14px;font-weight:600;color:var(--ant-color-text);}`],`
    font-size: 14px;
    font-weight: 600;
    color: var(--ant-color-text);
  `),loadMoreError:T(`acss-1a66rme`,[`.acss-1a66rme{display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:center;padding-block:16px;font-size:13px;color:var(--ant-color-text-tertiary);}`],`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    justify-content: center;

    padding-block: 16px;

    font-size: 13px;
    color: var(--ant-color-text-tertiary);
  `),retry:T(`acss-14jhk55`,[`.acss-14jhk55{cursor:pointer;padding-block:4px;padding-inline:12px;border:1px solid var(--ant-color-border);border-radius:6px;font-size:13px;color:var(--ant-color-text-secondary);background:var(--ant-color-bg-container);}`,`.acss-14jhk55:hover{border-color:var(--ant-color-text-tertiary);color:var(--ant-color-text);}`],`
    cursor: pointer;

    padding-block: 4px;
    padding-inline: 12px;
    border: 1px solid var(--ant-color-border);
    border-radius: 6px;

    font-size: 13px;
    color: var(--ant-color-text-secondary);

    background: var(--ant-color-bg-container);

    &:hover {
      border-color: var(--ant-color-text-tertiary);
      color: var(--ant-color-text);
    }
  `),scroll:T(`acss-za1fy6`,[`.acss-za1fy6{overflow:hidden auto;flex:1;min-height:0;padding-block:8px 24px;padding-inline:24px;}`],`
    overflow: hidden auto;
    flex: 1;

    min-height: 0;
    padding-block: 8px 24px;
    padding-inline: 24px;
  `)},Xt=(0,L.memo)(({active:e,agentId:t,onSelect:n})=>{let r=He(t);return r?(0,R.jsx)(g,{className:be(z.agentFilter,e&&z.agentFilterActive),size:`small`,type:`text`,icon:(0,R.jsx)(re,{emojiScaleWithBackground:!0,avatar:r.avatar,background:r.backgroundColor,shape:`square`,size:20}),onClick:()=>n(t),children:r.title}):null}),Xt.displayName=`AgentFilter`,Zt=(0,L.memo)(({galleryKey:e})=>{let{t,i18n:r}=n(`file`),[i,a]=(0,L.useState)(null);at();let{items:o,error:s,hasMore:c,isLoadingInitial:l,isLoadingMore:u,loadMore:d,reload:f}=Lt(e),p=(0,L.useMemo)(()=>[...new Set(o.map(e=>e.originAgentId).filter(Boolean))],[o]),_=(0,L.useMemo)(()=>i?o.filter(e=>e.originAgentId===i):o,[i,o]),v=(0,L.useMemo)(()=>{let e=new Date,n=new Date(e);n.setDate(e.getDate()-1);let i=e=>`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`,a=i(e),o=i(n),s=new Map;for(let n of _){let c=new Date(n.updatedAt),l=i(c),u=l===a?t(`work.date.today`):l===o?t(`work.date.yesterday`):new Intl.DateTimeFormat(r.language,{day:`numeric`,month:`short`,year:c.getFullYear()===e.getFullYear()?void 0:`numeric`}).format(c),d=s.get(l);d?d.items.push(n):s.set(l,{items:[n],title:u})}return[...s.entries()].map(([e,t])=>({key:e,...t,totalCost:Je(t.items.reduce((e,t)=>e+(t.totalCost||0),0))}))},[_,r.language,t]),y=Bt(),b=(0,L.useRef)(null);return(0,L.useEffect)(()=>{let e=b.current;if(!e||!c)return;let t=new IntersectionObserver(e=>{e[0]?.isIntersecting&&c&&!u&&d()},{rootMargin:`240px`});return t.observe(e),()=>t.disconnect()},[c,u,d]),l&&o.length===0?(0,R.jsx)(yt,{}):(0,R.jsxs)(h,{className:z.container,children:[p.length>0&&(0,R.jsxs)(h,{horizontal:!0,align:`center`,className:z.filterBar,gap:4,children:[(0,R.jsx)(g,{className:be(z.agentFilter,!i&&z.agentFilterActive),size:`small`,type:`text`,onClick:()=>a(null),children:t(`work.agentFilter.all`)}),p.map(e=>(0,R.jsx)(Xt,{active:i===e,agentId:e,onSelect:a},e))]}),(0,R.jsx)(h,{className:z.scroll,children:s&&o.length===0?(0,R.jsxs)(m,{className:z.emptyState,gap:12,children:[(0,R.jsx)(ze,{description:t(`work.loadError`),icon:de,title:t(`work.loadErrorTitle`)}),(0,R.jsx)(`button`,{className:z.retry,type:`button`,onClick:()=>f(),children:t(`work.retry`)})]}):o.length===0?(0,R.jsx)(m,{className:z.emptyState,children:(0,R.jsx)(ze,{description:t(`work.empty.desc`),icon:ce,title:t(`work.empty.title`)})}):_.length===0?(0,R.jsx)(m,{className:z.emptyState,children:(0,R.jsx)(ze,{description:t(`work.agentEmpty.desc`),title:t(`work.agentEmpty.title`)})}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(h,{gap:32,children:v.map(e=>(0,R.jsxs)(`section`,{children:[(0,R.jsxs)(`div`,{className:z.groupHeader,children:[(0,R.jsx)(`span`,{className:z.groupTitle,children:e.title}),(0,R.jsx)(`span`,{className:z.groupCount,children:t(`work.count`,{count:e.items.length})}),e.totalCost&&(0,R.jsx)(`span`,{className:z.groupCount,children:t(`work.totalCost`,{cost:e.totalCost})})]}),(0,R.jsx)(`div`,{className:z.cardList,children:e.items.map(e=>(0,R.jsx)(Jt,{item:e,onOpen:y,onRemoved:f},e.id))})]},e.key))}),(0,R.jsx)(`div`,{"aria-hidden":!0,ref:b,style:{height:1}}),u?(0,R.jsx)(h,{style:{marginBlockStart:12},children:(0,R.jsx)(xt,{count:4})}):s?(0,R.jsxs)(`div`,{className:z.loadMoreError,children:[(0,R.jsx)(`span`,{children:t(`work.loadMoreError`)}),(0,R.jsx)(`button`,{className:z.retry,type:`button`,onClick:()=>f(),children:t(`work.retry`)})]}):null]})})]})}),Zt.displayName=`WorkGallery`})),$t,B,en,V,H=e((()=>{w(),x(),$t=t(s()),i(),k(),B=t(c()),en={title:T(`acss-51o19f`,[`.acss-51o19f{margin:0;font-size:15px;font-weight:600;color:var(--ant-color-text);}`],`
    margin: 0;
    font-size: 15px;
    font-weight: 600;
    color: var(--ant-color-text);
  `),viewAll:T(`acss-e267j9`,[`.acss-e267j9{cursor:pointer;border:none;font-size:13px;color:var(--ant-color-text-secondary);background:none;}`,`.acss-e267j9:hover{color:var(--ant-color-text);}`],`
    cursor: pointer;

    border: none;

    font-size: 13px;
    color: var(--ant-color-text-secondary);

    background: none;

    &:hover {
      color: var(--ant-color-text);
    }
  `)},V=(0,$t.memo)(({title:e,viewAllUrl:t})=>{let{t:r}=n(`file`),i=O();return(0,B.jsxs)(h,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,B.jsx)(`h2`,{className:en.title,children:e}),t&&(0,B.jsx)(`button`,{className:en.viewAll,type:`button`,onClick:()=>i(t),children:r(`home.viewAll`)})]})}),V.displayName=`SectionTitle`})),tn,U,W,nn,rn,an=e((()=>{w(),x(),b(),S(),tn=t(s()),i(),rt(),St(),E(),ct(),j(),k(),ge(),ft(),wt(),H(),U=t(c()),W={chip:T(`acss-xs5ysw`,[`.acss-xs5ysw{cursor:pointer;display:flex;gap:10px;align-items:center;min-width:0;padding-block:14px;padding-inline:16px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);text-align:start;background:var(--ant-color-fill-quaternary);transition:all 0.2s var(--ant-motion-ease-in-out);}`,`.acss-xs5ysw:hover{border-color:var(--ant-color-border);background:var(--ant-color-fill-tertiary);}`],`
    cursor: pointer;

    display: flex;
    gap: 10px;
    align-items: center;

    min-width: 0;
    padding-block: 14px;
    padding-inline: 16px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);

    text-align: start;

    background: var(--ant-color-fill-quaternary);

    transition: all 0.2s var(--ant-motion-ease-in-out);

    &:hover {
      border-color: var(--ant-color-border);
      background: var(--ant-color-fill-tertiary);
    }
  `),createChip:T(`acss-a7zd7y`,[`.acss-a7zd7y{cursor:pointer;display:flex;gap:8px;align-items:center;justify-content:center;padding-block:14px;padding-inline:16px;border:1px dashed var(--ant-color-border);border-radius:var(--ant-border-radius-lg);color:var(--ant-color-text-secondary);background:transparent;transition:all 0.2s var(--ant-motion-ease-in-out);}`,`.acss-a7zd7y:hover{border-color:var(--ant-color-text-quaternary);color:var(--ant-color-text);}`,`.acss-a7zd7y:disabled{cursor:not-allowed;opacity:0.5;}`],`
    cursor: pointer;

    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;

    padding-block: 14px;
    padding-inline: 16px;
    border: 1px dashed var(--ant-color-border);
    border-radius: var(--ant-border-radius-lg);

    color: var(--ant-color-text-secondary);

    background: transparent;

    transition: all 0.2s var(--ant-motion-ease-in-out);

    &:hover {
      border-color: var(--ant-color-text-quaternary);
      color: var(--ant-color-text);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `),grid:T(`acss-f2rnqb`,[`.acss-f2rnqb{display:grid;grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));gap:12px;}`],`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
  `),name:T(`acss-6fgdn2`,[`.acss-6fgdn2{overflow:hidden;font-size:13px;font-weight:500;color:var(--ant-color-text);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    font-size: 13px;
    font-weight: 500;
    color: var(--ant-color-text);
    text-overflow: ellipsis;
    white-space: nowrap;
  `)},nn=9,rn=(0,tn.memo)(()=>{let{t:e}=n(`file`),t=O(),{allowed:r}=we(`create_content`),i=A(e=>e.listVisibility)===`private`?`private`:`public`,{data:a,error:o,isLoading:s,isValidating:c,mutate:l}=dt(e=>e.useFetchKnowledgeBaseList)(i),{isLoading:u}=Tt({data:a,isLoading:s,isValidating:c}),d=A(e=>e.setLibraryId),{open:f}=st();return(0,U.jsxs)(h,{gap:12,children:[(0,U.jsx)(V,{title:e(`home.libraries`)}),o&&!a?.length?(0,U.jsx)(it,{error:o,variant:`inline`,onRetry:()=>void l()}):u?(0,U.jsx)(C,{...he.libraries}):(0,U.jsxs)(`div`,{className:W.grid,children:[a?.slice(0,nn).map(e=>(0,U.jsxs)(`button`,{className:W.chip,type:`button`,onClick:()=>{d(e.id),t(`/resource/library/${e.id}`)},children:[(0,U.jsx)(Ct,{memberRestricted:e.memberRestricted,size:18,visibility:e.visibility}),(0,U.jsx)(`span`,{className:W.name,children:e.name})]},e.id)),(0,U.jsxs)(`button`,{className:W.createChip,disabled:!r,type:`button`,onClick:()=>{r&&f({onSuccess:e=>{t(`/resource/library/${e}`)}})},children:[(0,U.jsx)(y,{icon:ue,size:16}),e(`home.uploadEntries.library.title`)]})]})]})}),rn.displayName=`Libraries`})),G,on,K,q,sn,cn,ln=e((()=>{w(),x(),G=t(r()),on=t(s()),i(),De(),rt(),Be(),E(),j(),lt(),k(),ve(),ke(),Ie(),me(),H(),K=t(c()),q={card:T(`acss-7qmpry`,[`.acss-7qmpry{cursor:pointer;overflow:hidden;display:flex;flex-direction:column;padding:0;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);text-align:start;background:var(--ant-color-bg-container);transition:all 0.2s var(--ant-motion-ease-in-out);}`,`.acss-7qmpry:hover{border-color:var(--ant-color-border);box-shadow:var(--ant-box-shadow-tertiary);}`],`
    cursor: pointer;

    overflow: hidden;
    display: flex;
    flex-direction: column;

    padding: 0;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);

    text-align: start;

    background: var(--ant-color-bg-container);

    transition: all 0.2s var(--ant-motion-ease-in-out);

    &:hover {
      border-color: var(--ant-color-border);
      box-shadow: var(--ant-box-shadow-tertiary);
    }
  `),grid:T(`acss-1lxlt65`,[`.acss-1lxlt65{display:grid;grid-template-columns:repeat(auto-fill, minmax(180px, 1fr));gap:12px;}`],`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 12px;
  `),meta:T(`acss-to1h5w`,[`.acss-to1h5w{font-size:12px;color:var(--ant-color-text-quaternary);}`],`
    font-size: 12px;
    color: var(--ant-color-text-quaternary);
  `),name:T(`acss-6fgdn2`,[`.acss-6fgdn2{overflow:hidden;font-size:13px;font-weight:500;color:var(--ant-color-text);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    font-size: 13px;
    font-weight: 500;
    color: var(--ant-color-text);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),preview:T(`acss-bcbb5o`,[`.acss-bcbb5o{display:flex;align-items:center;justify-content:center;aspect-ratio:16/10;width:100%;border-block-end:1px solid var(--ant-color-border-secondary);background:var(--ant-color-fill-quaternary);}`],`
    display: flex;
    align-items: center;
    justify-content: center;

    aspect-ratio: 16 / 10;
    width: 100%;
    border-block-end: 1px solid var(--ant-color-border-secondary);

    background: var(--ant-color-fill-quaternary);
  `),thumbnail:T(`acss-1hinlf9`,[`.acss-1hinlf9{width:100%;height:100%;object-fit:cover;}`],`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `)},sn=e=>(0,G.default)().diff((0,G.default)(e),`d`)<7?(0,G.default)(e).fromNow():(0,G.default)(e).format(`YYYY-MM-DD`),cn=(0,on.memo)(()=>{let{t:e}=n(`file`),t=O(),r=Ae(),i=A(e=>e.listVisibility),a=r?ut(void 0,i):void 0,{data:o,error:s,isLoading:c,mutate:l}=Te(pe.recentFiles(r??null,a),()=>Le.getRecentFiles(8,a));return!c&&!s&&!o?.length?null:(0,K.jsxs)(h,{gap:12,children:[(0,K.jsx)(V,{title:e(`home.recentFiles`),viewAllUrl:`/resource/${D.All}`}),s&&!o?.length?(0,K.jsx)(it,{error:s,variant:`inline`,onRetry:()=>void l()}):c?(0,K.jsx)(C,{...he.files}):(0,K.jsx)(`div`,{className:q.grid,children:o?.map(e=>{let n=e.fileType?.startsWith(`image`);return(0,K.jsxs)(`button`,{className:q.card,type:`button`,onClick:()=>t(`/resource?file=${e.id}`),children:[(0,K.jsx)(`div`,{className:q.preview,children:n&&e.url?(0,K.jsx)(`img`,{alt:e.name,className:q.thumbnail,src:e.url}):(0,K.jsx)(Ve,{fileName:e.name,fileType:e.fileType,size:40})}),(0,K.jsxs)(h,{gap:4,padding:12,children:[(0,K.jsx)(`span`,{className:q.name,children:e.name}),(0,K.jsx)(`span`,{className:q.meta,children:sn(e.createdAt)})]})]},e.id)})})]})}),cn.displayName=`RecentFiles`})),J,un,Y,X,dn,fn,pn=e((()=>{w(),x(),b(),J=t(r()),S(),un=t(s()),i(),De(),rt(),E(),j(),lt(),k(),ve(),ke(),Ie(),H(),Y=t(c()),X={card:T(`acss-1g5ebsi`,[`.acss-1g5ebsi{cursor:pointer;display:flex;gap:12px;align-items:center;padding-block:12px;padding-inline:16px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);text-align:start;background:var(--ant-color-bg-container);transition:all 0.2s var(--ant-motion-ease-in-out);}`,`.acss-1g5ebsi:hover{border-color:var(--ant-color-border);box-shadow:var(--ant-box-shadow-tertiary);}`],`
    cursor: pointer;

    display: flex;
    gap: 12px;
    align-items: center;

    padding-block: 12px;
    padding-inline: 16px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);

    text-align: start;

    background: var(--ant-color-bg-container);

    transition: all 0.2s var(--ant-motion-ease-in-out);

    &:hover {
      border-color: var(--ant-color-border);
      box-shadow: var(--ant-box-shadow-tertiary);
    }
  `),emoji:T(`acss-o06jfb`,[`.acss-o06jfb{font-size:20px;line-height:1;}`],`
    font-size: 20px;
    line-height: 1;
  `),grid:T(`acss-10ueoxu`,[`.acss-10ueoxu{display:grid;grid-template-columns:repeat(auto-fill, minmax(240px, 1fr));gap:12px;}`],`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 12px;
  `),meta:T(`acss-to1h5w`,[`.acss-to1h5w{font-size:12px;color:var(--ant-color-text-quaternary);}`],`
    font-size: 12px;
    color: var(--ant-color-text-quaternary);
  `),title:T(`acss-6fgdn2`,[`.acss-6fgdn2{overflow:hidden;font-size:13px;font-weight:500;color:var(--ant-color-text);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    font-size: 13px;
    font-weight: 500;
    color: var(--ant-color-text);
    text-overflow: ellipsis;
    white-space: nowrap;
  `)},dn=e=>(0,J.default)().diff((0,J.default)(e),`d`)<7?(0,J.default)(e).fromNow():(0,J.default)(e).format(`YYYY-MM-DD`),fn=(0,un.memo)(()=>{let{t:e}=n(`file`),t=O(),r=Ae(),i=A(e=>e.listVisibility),a=r?ut(void 0,i):void 0,{data:o,error:s,isLoading:c,mutate:l}=Te(pe.recentPages(r??null,a),()=>Le.getRecentPages(6,a));return!c&&!s&&!o?.length?null:(0,Y.jsxs)(h,{gap:12,children:[(0,Y.jsx)(V,{title:e(`home.recentPages`),viewAllUrl:`/resource/page`}),s&&!o?.length?(0,Y.jsx)(it,{error:s,variant:`inline`,onRetry:()=>void l()}):c?(0,Y.jsx)(C,{...he.pages}):(0,Y.jsx)(`div`,{className:X.grid,children:o?.map(e=>{let n=e.metadata?.emoji;return(0,Y.jsxs)(`button`,{className:X.card,type:`button`,onClick:()=>t(`/resource?file=${e.id}`),children:[n?(0,Y.jsx)(`span`,{className:X.emoji,children:n}):(0,Y.jsx)(y,{icon:ae,size:20}),(0,Y.jsxs)(h,{gap:2,style:{minWidth:0},children:[(0,Y.jsx)(`span`,{className:X.title,children:e.name}),(0,Y.jsx)(`span`,{className:X.meta,children:dn(e.updatedAt)})]})]},e.id)})})]})}),fn.displayName=`RecentPages`})),mn,Z,hn,gn,_n,vn=e((()=>{w(),x(),mn=t(s()),i(),rt(),E(),Rt(),Vt(),Yt(),H(),Z=t(c()),hn={grid:T(`acss-9igw8y`,[`.acss-9igw8y{display:grid;grid-template-columns:repeat(auto-fill, minmax(260px, 1fr));gap:12px;}`],`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 12px;
  `)},gn=3,_n=(0,mn.memo)(()=>{let{t:e}=n(`file`),t=Bt(),{error:r,items:i,isLoadingInitial:a,reload:o}=Lt(`all`),s=i.slice(0,gn);return!a&&!r&&s.length===0?null:(0,Z.jsxs)(h,{gap:12,children:[(0,Z.jsx)(V,{title:e(`work.group`),viewAllUrl:`/resource/works`}),r&&s.length===0?(0,Z.jsx)(it,{error:r,variant:`inline`,onRetry:o}):a?(0,Z.jsx)(C,{...he.works}):(0,Z.jsx)(`div`,{className:hn.grid,children:s.map(e=>(0,Z.jsx)(Jt,{item:e,onOpen:t,onRemoved:o},e.id))})]})}),_n.displayName=`RecentWorks`})),yn,Q,bn,xn,Sn=e((()=>{w(),x(),Ee(),yn=t(s()),i(),fe(),jt(),an(),ln(),pn(),vn(),Q=t(c()),bn={content:T(`acss-1ycshnk`,[`.acss-1ycshnk{width:100%;max-width:1080px;margin-inline:auto;padding-block:32px 64px;padding-inline:32px;}`],`
    width: 100%;
    max-width: 1080px;
    margin-inline: auto;
    padding-block: 32px 64px;
    padding-inline: 32px;
  `),scroll:T(`acss-1y7x25z`,[`.acss-1y7x25z{overflow:hidden auto;flex:1;}`],`
    overflow: hidden auto;
    flex: 1;
  `)},xn=(0,yn.memo)(()=>{let{t:e}=n(`file`);return(0,Q.jsxs)(h,{height:`100%`,children:[(0,Q.jsx)(Se,{left:(0,Q.jsx)(h,{style:{marginLeft:8},children:e(`resource`)}),right:(0,Q.jsx)(At,{}),style:{borderBottom:`1px solid ${xe.colorBorderSecondary}`}}),(0,Q.jsx)(`div`,{className:bn.scroll,children:(0,Q.jsxs)(h,{className:bn.content,gap:40,children:[(0,Q.jsx)(rn,{}),(0,Q.jsx)(_n,{}),(0,Q.jsx)(fn,{}),(0,Q.jsx)(cn,{})]})})]})}),xn.displayName=`ResourceHomeDashboard`})),$,Cn,wn,Tn,En,Dn,On,kn,An=e((()=>{$=t(s()),u(),Et(),kt(),j(),Qt(),Ft(),k(),me(),Sn(),Cn=t(c()),wn={all:D.All,audios:D.Audios,documents:D.Documents,files:D.Files,images:D.Images,page:D.Pages,videos:D.Videos,websites:D.Websites},Tn=Object.fromEntries(Object.entries(wn).map(([e,t])=>[t,e])),En=e=>Tn[e]?`/resource/${Tn[e]}`:`/resource`,Dn=(e,t)=>e??t.match(/\/resource\/([^/]+)\/?$/)?.[1],On=`works`,kn=(0,$.memo)(()=>{let[e]=l(),t=d(),n=f(),r=O(),[i,a]=A(e=>[e.setCategory,e.setLibraryId]),o=Dn(n.category,t.pathname),s=o?wn[o]:void 0,c=s!==void 0,u=o===On,p=u?Nt(e.get(`works`))??`all`:null,m=s??D.Home,h=e.get(`category`),g=u?null:Nt(e.get(`works`)),_=!!o&&!c&&!u;return(0,$.useLayoutEffect)(()=>{if(g){r(g===`all`?`/resource/works`:`/resource/works?works=${g}`,{replace:!0});return}if(h){r(En(h),{replace:!0});return}_&&r(`/resource`,{replace:!0})},[g,h,_,r]),(0,$.useLayoutEffect)(()=>{(t.pathname===`/resource`||!t.pathname.includes(`/library/`))&&a(void 0)},[a,t.pathname]),(0,$.useLayoutEffect)(()=>{(t.pathname===`/resource`||!t.pathname.includes(`/library/`))&&i(m)},[m,i,t.pathname]),Dt(),p?(0,Cn.jsx)(Zt,{galleryKey:p}):(0,Cn.jsx)(Ot,{content:c?void 0:(0,Cn.jsx)(xn,{})})}),kn.displayName=`ResourceHomePage`}));e((()=>{An()}))();export{kn as default};