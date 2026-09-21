import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,Q as r,j as i}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as a,T as o}from"../vendor/vendor-react-B9HSWrpN.js";import{B as s,Kt as c,Xn as l,Zn as u,at as d,it as f,lt as p,m,qt as h,z as ee}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Ia as g,Is as te,Op as ne,fd as _,mt as re,no as v,od as ie,t as y,um as ae}from"../vendor/vendor-icons-vienkZi5.js";import{Fr as b,Mn as x,c as S,jn as C}from"./app-const-BpgKVRXh.js";import{Af as oe,Dn as se,En as ce,FD as w,Ff as T,ID as E,If as le,Kf as ue,Mr as D,Or as de,Ou as fe,TA as O,bF as pe,dg as me,gu as k,hF as A,iC as he,iu as ge,jf as _e,jr as ve,kv as j,nu as ye,qf as be,qr as xe,uF as M,wA as Se,zp as N}from"./index-w64_zsxD.js";import{n as Ce,t as we}from"./Popover-Cd3scH3I.js";import{n as Te,t as Ee}from"./DropdownMenu-1ae8j9bI.js";import{n as De,t as Oe}from"./ScrollShadow-nHmz9Ona.js";import{t as ke}from"./_virtual_lobe-ui-named__Tooltip-DNompU8a.js";import{n as Ae,t as je}from"./Tag-C95BKTI7.js";import{Fn as Me,Gn as Ne,Kn as Pe,Mn as Fe,Nr as Ie,Pr as Le,Tr as P,Zn as Re,_n as ze,a as F,n as I,pn as Be}from"./chat-D3ilvURJ.js";import{a as L,o as Ve}from"./ExecutionStatus-C_DnyV8X.js";import{a as He,c as Ue,l as We,o as Ge,s as Ke,u as qe}from"./ProtocolUrlHandler-ipT_bdUA.js";import{n as Je,t as Ye}from"./RingLoading-BAIt6lAI.js";import{a as Xe,i as Ze,o as Qe,r as $e}from"./useHomeAgentRows-Cbg8pva1.js";import{n as et,t as tt}from"./AgentTransferMigration-Dd3Hkm8S.js";import{n as nt,t as rt}from"./DirIcon-CRCKkz_j.js";import{c as it,i as at,o as ot,u as st}from"./useCommitWorkingDirectory-C47mgzp1.js";import{n as ct}from"./_virtual_lobe-ui-named__ContextMenuTrigger-DAznVU5g.js";import{n as lt,t as ut}from"./NavItem-CH6fl1on.js";import{n as dt,r as ft,t as pt}from"./TopicCreatorAvatar-DMI1_gY8.js";import{n as mt,r as ht}from"./const-Ac9XzAwI.js";import{n as gt,t as _t}from"./useActiveLocation-kPt0pKNQ.js";import{n as vt,t as yt}from"./useActiveRouteParams-Dz6l4mbs.js";import{n as bt,t as xt}from"./useQueryRoute-DImyN8D_.js";import{n as St,r as Ct,t as wt}from"./agentPathname-BaiUp9_G.js";import{n as Tt,t as Et}from"./useFetchThreads-BfmBo_jF.js";import{r as Dt,t as Ot}from"./threadDragData-C7pWwMXg.js";import{o as kt,s as At}from"./SideBarDrawer-BQFi2kz3.js";import{t as jt}from"./_virtual_lobe-ui-named_base-ui_confirmModal-B6WREEdZ.js";import{n as Mt,t as Nt}from"./useDropdownMenu-DWbqljfu.js";import{t as Pt}from"./_virtual_lobe-ui-named_base-ui_ContextMenuTrigger-cPC1zDO8.js";import{a as Ft,c as It,i as Lt,o as Rt,s as zt}from"./useDeferredMount-DXHwd8Bm.js";var R,Bt,Vt,Ht=e((()=>{S(),R=t(a()),Se(),T(),Ke(),_t(),yt(),xt(),I(),ye(),St(),Bt=()=>{let{pathname:e}=gt(),t=(0,R.useMemo)(()=>Ct(e),[e]),n=vt(),[r,i]=F(e=>[e.activeAgentId,e.activeTopicId]),a=bt(),o=ge(e=>e.toggleMobileTopic),s=F(e=>e.switchTopic),c=le(),l=n.aid??t?.agentId??r,u=n.topicId,d=n.topicId??i??void 0,f=Ue({agentId:r}),p=(0,R.useCallback)(()=>!l||!d||t?.agentId!==l?!1:t.segmentsAfterAgent[0]===d,[t,l,d]),m=(0,R.useCallback)(()=>{if(!l||t?.agentId!==l)return!1;let{segmentsAfterAgent:e}=t;return e.length===0?!1:!(d&&e.length===1&&e[0]===d)},[t,l,d]),h=(0,R.useCallback)(async(e,n)=>{if(n?.skipPopupFocus||await f(e),m()&&l){let n=wt(e?C(l,e):x(l),t,c);a.push(n),o(!1);return}s(e),o(!1)},[c,t,f,m,l,a,s,o]);return{focusTopicPopup:f,isInAgentSubRoute:m(),isInTopicContextRoute:p(),navigateToTopic:h,routeTopicId:d,urlTopicId:u}},Vt=()=>{let e=bt();return(0,R.useCallback)(t=>e.push(O(`/agent`,t,`topics`)),[e])}})),z,Ut,Wt=e((()=>{S(),z=t(a()),_t(),yt(),xt(),I(),ye(),Ut=()=>{let{pathname:e}=gt(),t=vt(),n=bt(),r=ge(e=>e.toggleMobileTopic),i=F(e=>e.switchThread),a=(0,z.useCallback)(()=>{if(!t.aid)return!1;let n=t.topicId?C(t.aid,t.topicId):x(t.aid);return e.startsWith(n)&&e!==n&&e!==`${n}/`},[e,t.aid]),o=(0,z.useCallback)(e=>{a()&&t.aid&&n.push(t.topicId?C(t.aid,t.topicId):x(t.aid)),i(e),r(!1)},[t.aid,n,i,r,a]);return{isInAgentSubRoute:a(),navigateToThread:o}}})),Gt,B,Kt,qt=e((()=>{Te(),s(),y(),Gt=t(a()),kt(),B=t(o()),Kt=(0,Gt.memo)(({dropdownMenu:e})=>(0,B.jsx)(Ee,{items:e,portalProps:At(),children:(0,B.jsx)(ee,{icon:ne,size:`small`})}))})),V,Jt,Yt,Xt=e((()=>{V=t(a()),Ze(),I(),Jt=t(o()),Yt=(0,V.memo)(({id:e,title:t,toggleEditing:n})=>{let[r,i]=F(t=>[t.threadRenamingId===e,t.updateThreadTitle]);return(0,Jt.jsx)($e,{open:r,title:t,onOpenChange:e=>n(e),onSave:(0,V.useCallback)(async t=>{await i(e,t)},[e,i])})})})),Zt,H,Qt,$t=e((()=>{u(),jt(),y(),Zt=t(a()),i(),ue(),I(),H=t(o()),Qt=({id:e,sourceMessageId:t,toggleEditing:r})=>{let{t:i}=n([`thread`,`common`]),{allowed:a}=be(`edit_own_content`),[o,s]=F(e=>[e.removeThread,e.openThreadInPortal]);return(0,Zt.useCallback)(()=>[{icon:(0,H.jsx)(l,{icon:v}),key:`openOnRight`,label:i(`openOnRight`,{ns:`common`}),onClick:()=>{s(e,t)}},{type:`divider`},{disabled:!a,icon:(0,H.jsx)(l,{icon:g}),key:`rename`,label:i(`rename`,{ns:`common`}),onClick:()=>{r(!0)},sfSymbol:`pencil`},{type:`divider`},{danger:!0,disabled:!a,icon:(0,H.jsx)(l,{icon:re}),key:`delete`,label:i(`delete`,{ns:`common`}),onClick:()=>{m({cancelText:i(`cancel`,{ns:`common`}),content:i(`actions.confirmRemoveThread`),okButtonProps:{danger:!0},okText:i(`delete`,{ns:`common`}),onOk:async()=>{await o(e)},title:i(`delete`,{ns:`common`})})},sfSymbol:`trash`}].filter(Boolean),[e,t,a,o,s,r,i])}})),U,W,en,tn,nn=e((()=>{u(),M(),y(),U=t(a()),Ot(),lt(),I(),Wt(),qt(),Xt(),$t(),W=t(o()),en=32,tn=(0,U.memo)(({title:e,id:t,isSubagent:n,sourceMessageId:r})=>{let[i,a]=F(e=>[e.threadRenamingId===t,e.activeThreadId]),{navigateToThread:o,isInAgentSubRoute:s}=Ut(),c=(0,U.useCallback)(e=>{F.setState({threadRenamingId:e?t:``})},[t]),u=(0,U.useCallback)(()=>{i||o(t)},[i,t,o]),d=(0,U.useCallback)(n=>{Dt(n,{sourceMessageId:r,threadId:t,threadTitle:e})},[t,e,r]),f=Qt({id:t,sourceMessageId:r,toggleEditing:c});return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(ut,{draggable:!0,actions:(0,W.jsx)(Kt,{dropdownMenu:f}),active:t===a&&!s,contextMenuItems:f,"data-thread-id":t,disabled:i,icon:(0,W.jsx)(l,{color:A.colorTextDescription,icon:ae,size:`small`}),title:e,style:{minHeight:36,...n&&{paddingInlineStart:en}},onClick:u,onDragStart:d}),(0,W.jsx)(Yt,{id:t,title:e,toggleEditing:c})]})})})),rn,G,an,K,on=e((()=>{me(),De(),rn=t(a()),Et(),He(),I(),Fe(),nn(),G=t(o()),an=333,K=(0,rn.memo)(({topicId:e})=>{let t=F(Me.getThreadsByTopic(e)),n=F(e=>e.activeThreadId);Tt(e);let r=Ge(n,t?.length);if(!(!t||t.length===0))return(0,G.jsx)(Oe,{gap:1,paddingBlock:1,ref:r,size:12,style:{maxHeight:an},children:t?.map((e,t)=>(0,G.jsx)(tn,{id:e.id,index:t,isSubagent:e.type===j.Isolation,sourceMessageId:e.sourceMessageId??void 0,title:e.title},e.id))})}),K.displayName=`ThreadList`})),sn,cn,ln,un=e((()=>{Te(),s(),y(),sn=t(a()),kt(),Nt(),cn=t(o()),ln=(0,sn.memo)(({fav:e,id:t,status:n,title:r})=>{let{dropdownMenu:i}=Mt({fav:e,id:t,status:n,title:r});return(0,cn.jsx)(Ee,{items:i,portalProps:At(),children:(0,cn.jsx)(ee,{icon:ne,size:`small`})})})})),q,dn,fn,pn=e((()=>{Pt(),q=t(a()),Nt(),dn=t(o()),fn=(0,q.memo)(({children:e,fav:t,id:n,status:r,title:i})=>{let{dropdownMenu:a}=Mt({fav:t,id:n,status:r,title:i}),o=(0,q.useRef)(a);return(0,q.useEffect)(()=>{o.current=a},[a]),(0,dn.jsx)(ct,{items:(0,q.useCallback)(()=>o.current(),[]),children:e})}),fn.displayName=`TopicItemContextMenu`})),mn,J,Y,X,hn,gn=e((()=>{w(),u(),M(),y(),mn=t(a()),i(),nt(),I(),It(),J=t(o()),Y={card:E(`acss-dx4vn5`,[`.acss-dx4vn5{display:flex;flex-direction:column;gap:8px;width:300px;max-width:calc(100vw - 48px);}`],`
    display: flex;
    flex-direction: column;
    gap: 8px;

    width: 300px;
    max-width: calc(100vw - 48px);
  `),header:E(`acss-1dvnpzz`,[`.acss-1dvnpzz{display:flex;gap:12px;align-items:baseline;justify-content:space-between;}`],`
    display: flex;
    gap: 12px;
    align-items: baseline;
    justify-content: space-between;
  `),headerTime:E(`acss-104gs8r`,[`.acss-104gs8r{flex:none;font-size:12px;color:var(--ant-color-text-tertiary);}`],`
    flex: none;
    font-size: 12px;
    color: var(--ant-color-text-tertiary);
  `),headerTitle:E(`acss-15x10gz`,[`.acss-15x10gz{overflow:hidden;font-size:14px;font-weight:500;line-height:20px;color:var(--ant-color-text);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: var(--ant-color-text);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),row:E(`acss-ynga80`,[`.acss-ynga80{display:flex;gap:8px;align-items:center;min-width:0;font-size:13px;line-height:18px;color:var(--ant-color-text-secondary);}`],`
    display: flex;
    gap: 8px;
    align-items: center;

    min-width: 0;

    font-size: 13px;
    line-height: 18px;
    color: var(--ant-color-text-secondary);
  `),rowIcon:E(`acss-1fx2pri`,[`.acss-1fx2pri{flex:none;color:var(--ant-color-text-tertiary);}`],`
    flex: none;
    color: var(--ant-color-text-tertiary);
  `),rowText:E(`acss-1mhjned`,[`.acss-1mhjned{overflow:hidden;min-width:0;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;
    min-width: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
  `),prLink:E(`acss-6h0t9`,[`.acss-6h0t9{cursor:pointer;margin-inline:-6px;padding-block:2px;padding-inline:6px;border-radius:6px;color:inherit;text-decoration:none;}`,`.acss-6h0t9:hover{color:var(--ant-color-text);background:var(--ant-color-fill-tertiary);}`],`
    cursor: pointer;

    margin-inline: -6px;
    padding-block: 2px;
    padding-inline: 6px;
    border-radius: 6px;

    color: inherit;
    text-decoration: none;

    /* antd's global a:hover outranks the color:inherit above, so without this the
       row would turn link-blue; hovering should read as emphasis instead. */
    &:hover {
      color: var(--ant-color-text);
      background: var(--ant-color-fill-tertiary);
    }
  `)},X=(0,mn.memo)(({icon:e,iconColor:t,title:n,children:r})=>(0,J.jsxs)(`div`,{className:Y.row,children:[(0,J.jsx)(l,{className:Y.rowIcon,icon:e,size:15,style:t?{color:t}:void 0}),(0,J.jsx)(`span`,{className:Y.rowText,title:n,children:r})]})),X.displayName=`DetailRow`,hn=(0,mn.memo)(({metadata:e,title:t,time:r,topicId:i})=>{let{t:a}=n(`topic`);F(e=>e.useFetchTopicLinkedPullRequest)(i,e);let o=zt(e);if(!o)return null;let{repoName:s,repoType:c,branch:u,detached:d,worktreeName:f,pullRequest:p}=o,m=p?Ft(p.ciStatus):void 0;return(0,J.jsxs)(`div`,{className:Y.card,children:[(0,J.jsxs)(`div`,{className:Y.header,children:[(0,J.jsx)(`span`,{className:Y.headerTitle,children:t}),r!==void 0&&(0,J.jsx)(`span`,{className:Y.headerTime,children:r})]}),s&&(0,J.jsxs)(`div`,{className:Y.row,children:[(0,J.jsx)(rt,{repoType:c,size:15}),(0,J.jsx)(`span`,{className:Y.rowText,title:s,children:s})]}),u&&(0,J.jsx)(X,{icon:_,title:u,children:d?a(`metaCard.detached`,{sha:u}):u}),f&&(0,J.jsx)(X,{icon:ie,title:f,children:f}),p&&(()=>{let e=Lt[Rt(p)],t=p.title?`#${p.number} ${p.title}`:`#${p.number}`,n=(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(l,{className:Y.rowIcon,icon:e.icon,size:15,style:{color:e.color}}),(0,J.jsxs)(`span`,{className:Y.rowText,title:t,children:[(0,J.jsx)(`span`,{style:{color:e.color,fontWeight:500},children:a(e.labelKey)}),(0,J.jsx)(`span`,{style:{color:A.colorTextTertiary},children:` · #${p.number}`}),p.title?` ${p.title}`:``]})]});return p.url?(0,J.jsx)(`a`,{className:`${Y.row} ${Y.prLink}`,href:p.url,rel:`noreferrer`,target:`_blank`,children:n}):(0,J.jsx)(`div`,{className:Y.row,children:n})})(),m&&(0,J.jsx)(X,{icon:m.icon,iconColor:m.color,children:a(m.labelKey)})]})}),hn.displayName=`MetaHoverCard`})),_n,vn,Z,Q,yn,$,bn,xn,Sn,Cn,wn,Tn,En=e((()=>{w(),S(),k(),Re(),h(),u(),Ce(),ke(),se(),Ae(),d(),M(),_n=t(r()),vn=t(he()),y(),Z=t(a()),i(),T(),qe(),Ve(),Je(),Qe(),b(),tt(),nt(),Be(),it(),lt(),dt(),_e(),ot(),ht(),de(),D(),I(),Fe(),Ie(),N(),Ht(),on(),un(),pn(),It(),gn(),Q=t(o()),yn={content:{padding:12},root:{"--lobe-popover-animation-duration":`0ms`,"--lobe-popover-animation-duration-exit":`0ms`}},$={ciBadge:E(`acss-1pjs6ck`,[`.acss-1pjs6ck{position:absolute;inset-block-end:-3px;inset-inline-end:-3px;display:flex;align-items:center;justify-content:center;width:10px;height:10px;border-radius:50%;line-height:0;background:var(--ant-color-bg-container);}`],`
    position: absolute;
    inset-block-end: -3px;
    inset-inline-end: -3px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 10px;
    height: 10px;
    border-radius: 50%;

    line-height: 0;

    background: var(--ant-color-bg-container);
  `),ciPending:E(`acss-1epxydf`,[`.acss-1epxydf{animation:ci-spin 1s linear infinite;}`,`@keyframes ci-spin{to{transform:rotate(360deg);}}`],`
    animation: ci-spin 1s linear infinite;

    @keyframes ci-spin {
      to {
        transform: rotate(360deg);
      }
    }
  `),prIcon:E(`acss-h14m3r`,[`.acss-h14m3r{position:relative;display:inline-flex;flex:none;}`],`
    position: relative;
    display: inline-flex;
    flex: none;
  `),runningElapsedTime:E(`acss-1tlcmd6`,[`.acss-1tlcmd6{flex:none;min-width:42px;font-size:12px;font-variant-numeric:tabular-nums;line-height:1;color:var(--ant-color-text-tertiary);text-align:end;}`],`
    flex: none;

    min-width: 42px;

    font-size: 12px;
    font-variant-numeric: tabular-nums;
    line-height: 1;
    color: var(--ant-color-text-tertiary);
    text-align: end;
  `)},bn=null,xn=()=>{bn&&=(clearTimeout(bn),null)},Sn=e=>{let t=e?.workingDirectoryConfig,n=Ne(e);if(!n)return;let r=t?.git?.branch,i=at(n);if(!i)return;let a=Pe(e),o=a&&a!==n?at(a):void 0,s=o&&o!==i?`${o}/${i}`:i;return{label:r?`${s} · ${r}`:s,repoType:t?.repoType??`github`}},Cn=(0,Z.memo)(({agentId:e,runStartedAt:t,topicId:n})=>{let r=F(e?P.getVisibleAgentRuntimeStartTimeByContext({agentId:e,topicId:n}):()=>void 0),i=t==null?void 0:new Date(t).getTime(),a=r??(Number.isFinite(i)?i:void 0),[o,s]=(0,Z.useState)(()=>Date.now());return(0,Z.useEffect)(()=>{if(!a)return;s(Date.now());let e=setInterval(()=>s(Date.now()),1e3);return()=>clearInterval(e)},[a]),a?(0,Q.jsx)(`span`,{className:$.runningElapsedTime,children:fe(o-a)}):null}),Cn.displayName=`RunningElapsedTime`,wn=(0,Z.memo)(({id:e,title:t,fav:r,metadata:i,runStartedAt:a,status:o,showWorkingDirectory:s,userId:u,defaultTopicActive:d,isTopicActive:m,navRef:h,showThreadList:ee})=>{let{t:g}=n(`topic`),{isDarkMode:ne}=pe(),[_,re]=ve(e=>[e.activeAgentId,xe.currentAgentVisibility(e)===`public`]),v=le(),ie=ft(re?u:void 0),y=ne?A.colorWarningBorder:`color-mix(in srgb, ${A.colorWarning} 45%, transparent)`,ae=(0,Z.useMemo)(()=>{if(!(!_||!e))return oe(C(_,e),v)},[_,v,e]),[b,x,S,se]=F(t=>[!!e&&P.isTopicVisiblyRunning(e)(t),!!e&&P.isTopicUnreadCompleted(e)(t),!!e&&!!_&&P.isAgentRuntimeRunningByContext({agentId:_,topicId:e})(t),!!e&&!!_&&P.isAgentRuntimeVisiblyRunningByContext({agentId:_,topicId:e})(t)]),w=(0,Z.useCallback)(n=>{e&&(xn(),st(n,{topicId:e,topicTitle:t}))},[e,t]),T=(0,Z.useCallback)(()=>{h.current.navigateToTopic(e)},[e,h]),E=(0,Z.useCallback)(async()=>{},[e,_,v,h]),ue=o===`failed`,D=o===`running`,de=o===`scheduled`,fe=o===`waitingForHuman`,O=D&&S&&!se,me=b||D&&!O,k=(0,Z.useMemo)(()=>s?Sn(i):void 0,[i,s]),he=k?(0,Q.jsxs)(c,{horizontal:!0,align:`center`,gap:4,style:{overflow:`hidden`},children:[(0,Q.jsx)(rt,{repoType:k.repoType,size:13}),(0,Q.jsx)(f,{ellipsis:!0,fontSize:12,style:{color:A.colorTextDescription},children:k.label})]}):void 0,ge=e&&(x||O&&!m);(0,Z.useEffect)(()=>{!_||!e||!x||S||F.getState().prefetchMessages({agentId:_,scope:`main`,topicId:e})},[_,S,e,x]);let _e=ze((0,Z.useMemo)(()=>_?Le({agentId:_,topicId:e}):void 0,[_,e]))?(0,Q.jsx)(f,{fontSize:12,style:{color:A.colorError,flex:`none`},children:g(`draft`)}):void 0,j=(0,Z.useMemo)(()=>zt(i),[i]);if(!e)return(0,Q.jsx)(ut,{active:d,slots:{titlePrefix:_e},titleColor:A.colorText,icon:b?(0,Q.jsx)(Ye,{ringColor:y,size:14,style:{color:A.colorWarning}}):(0,Q.jsx)(l,{color:A.colorTextDescription,icon:te,size:`small`}),title:(0,Q.jsxs)(c,{horizontal:!0,align:`center`,flex:1,gap:6,children:[g(`defaultTitle`),(0,Q.jsx)(je,{size:`small`,style:{color:A.colorTextDescription,fontSize:10},children:g(`temp`)})]}),onClick:T});let ye=(()=>{if(de){let e=L.scheduled,t=i?.scheduledRun?.runAt,n=(0,Q.jsx)(l,{icon:e.icon,size:`small`,style:{color:e.color}});return t?(0,Q.jsx)(p,{title:g(`scheduledStatusTip`,{time:(0,_n.default)(t).format(`MM-DD HH:mm`)}),children:n}):n}if(fe){let e=L.waitingForHuman;return(0,Q.jsx)(l,{icon:e.icon,size:`small`,style:{color:e.color}})}if(me)return(0,Q.jsx)(Ye,{ringColor:y,size:14,style:{color:A.colorWarning}});if(ue){let e=L.failed;return(0,Q.jsx)(p,{title:g(`failedStatusTip`),children:(0,Q.jsx)(l,{icon:e.icon,size:`small`,style:{color:e.color}})})}if(ge)return(0,Q.jsx)(Xe,{});if(o&&o!==`active`&&o!==`running`){let e=L[o];return(0,Q.jsx)(l,{icon:e.icon,size:`small`,style:{color:e.color}})}return null})(),be=(()=>{if(j?.pullRequest){let e=Lt[Rt(j.pullRequest)],t=j.pullRequest.ciStatus,n=Ft(t),r=t!==void 0&&t!==`unknown`;return(0,Q.jsx)(p,{title:r?`${g(e.labelKey)} · ${g(n.labelKey)}`:g(e.labelKey),children:(0,Q.jsxs)(`span`,{className:$.prIcon,children:[(0,Q.jsx)(l,{icon:e.icon,size:`small`,style:{color:e.color}}),r&&(0,Q.jsx)(`span`,{className:$.ciBadge,children:(0,Q.jsx)(l,{className:t===`pending`?$.ciPending:void 0,icon:n.icon,size:9,style:{color:n.color}})})]})})}if(i?.bot?.platform){let e=mt(i.bot.platform);if(e)return(0,Q.jsx)(e,{color:A.colorTextDescription,size:16})}return null})(),M=(0,Q.jsx)(`span`,{"aria-hidden":!0,style:{flex:`none`,width:16}}),Se=ye??be,N=(0,Q.jsx)(fn,{fav:r,id:e,status:o,title:t,children:(0,Q.jsx)(ut,{draggable:!0,actions:()=>(0,Q.jsx)(ln,{fav:r,id:e,status:o,title:t}),active:m,description:he,href:ae,icon:ie?(0,Q.jsx)(pt,{corner:Se,userId:u}):Se??M,slots:{titlePrefix:_e},title:t===`...`?(0,Q.jsx)(We,{gap:3,size:4}):t,titleColor:A.colorText,extra:(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(et,{agentId:_,topicId:e}),me&&(0,Q.jsx)(Cn,{agentId:_,runStartedAt:a,topicId:e})]}),onClick:T,onDoubleClick:()=>void E(),onDragStart:w})});return(0,Q.jsxs)(c,{"data-testid":`topic-item`,"data-topic-id":e,style:{position:`relative`},children:[j?(0,Q.jsx)(we,{arrow:!1,content:(0,Q.jsx)(hn,{metadata:i,title:t,topicId:e}),mouseEnterDelay:.8,placement:`right`,styles:yn,trigger:`hover`,children:(0,Q.jsx)(`div`,{children:N})}):N,ee&&(0,Q.jsx)(Z.Suspense,{fallback:(0,Q.jsxs)(c,{gap:8,paddingBlock:8,paddingInline:24,width:`100%`,children:[(0,Q.jsx)(ce,{height:18,width:`100%`}),(0,Q.jsx)(ce,{height:18,width:`100%`})]}),children:(0,Q.jsx)(K,{topicId:e})})]})}),wn.displayName=`TopicItemRow`,Tn=(0,Z.memo)(e=>{let{id:t}=e,{focusTopicPopup:n,navigateToTopic:r,isInAgentSubRoute:i,isInTopicContextRoute:a,routeTopicId:o,urlTopicId:s}=Bt(),c=F(e=>t?e.activeTopicId===t:!e.activeTopicId),l=F(e=>!!e.activeThreadId),u=(0,Z.useRef)({focusTopicPopup:n,navigateToTopic:r});(0,Z.useEffect)(()=>{u.current={focusTopicPopup:n,navigateToTopic:r}},[n,r]);let d=!!(t&&o===t&&a);return(0,Q.jsx)(wn,{...e,defaultTopicActive:!!(c&&!i&&!a),navRef:u,showThreadList:!!(t&&t===s),isTopicActive:!!((c||d)&&!l&&(!i||d))})},vn.default),Tn.displayName=`TopicItem`}));export{Vt as i,En as n,Ht as r,Tn as t};