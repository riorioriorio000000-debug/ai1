import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{B as o,Kt as s,Xn as c,Zn as l,at as u,i as d,it as f,qt as p,r as ee}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Af as m,Ku as h,Wh as g,Wn as _,c_ as v,ev as y,oc as b,t as x}from"../vendor/vendor-icons-vienkZi5.js";import{Jn as te,c as S,qn as ne}from"./app-const-BpgKVRXh.js";import{Al as re,Bt as ie,Cl as ae,FD as oe,Gi as se,Gp as ce,ID as C,J as le,Jp as ue,Or as de,Qr as fe,Sl as pe,Y as me,aS as he,am as ge,bt as _e,cr as ve,dn as ye,fn as be,iu as xe,jr as Se,kl as Ce,lr as we,mm as Te,mn as Ee,mt as De,nu as Oe,pn as ke,pt as Ae,sS as w,tS as je,yt as Me}from"./index-w64_zsxD.js";import{n as Ne,t as Pe}from"./Popover-Cd3scH3I.js";import{a as Fe,n as Ie}from"./chat-D3ilvURJ.js";import{n as Le,t as Re}from"./Github-C7Wh73Pp.js";import{n as ze,t as Be}from"./useWorkspaceAwareNavigate-BbajQ7ta.js";import{t as Ve}from"./Skeleton-PcdZNeTb.js";var T,E,He,Ue,D,O,We,k,Ge=e((()=>{T=t(i(),1),E=t(a(),1),He=new Promise(()=>{}),Ue=()=>{throw He},D=e=>{let t=new Map([[e,e.style.display]]);for(let n of e.querySelectorAll(`*`))t.set(n,n.style.display);return t},O=(e,t)=>{e.style.display===`none`&&t!==`none`&&(e.style.display=t)},We=e=>{for(let[t,n]of e)O(t,n)},k=({frozen:e,children:t})=>{let n=(0,T.useRef)(null),r=(0,T.useRef)(!1),i=(0,T.useRef)(new Map),a=e&&r.current;return(0,T.useLayoutEffect)(()=>{let t=n.current;if(t){if(!e){i.current=D(t),r.current=!0;return}if(!r.current){i.current=D(t),r.current=!0;return}We(i.current)}}),(0,T.useLayoutEffect)(()=>{if(!a)return;let e=i.current,t=new MutationObserver(t=>{for(let n of t){let t=n.target,r=e.get(t);r!==void 0&&O(t,r)}});for(let n of e.keys())t.observe(n,{attributeFilter:[`style`],attributes:!0});return We(e),()=>t.disconnect()},[a]),(0,E.jsxs)(T.Suspense,{fallback:null,children:[a&&(0,E.jsx)(Ue,{}),(0,E.jsx)(`div`,{ref:n,style:{display:`contents`},children:t})]})},k.displayName=`Freeze`})),A,Ke,qe,Je,Ye,Xe,Ze,j,M=e((()=>{fe(),S(),De(),A=new Set([`acceptance`,`agent`,`page`,`task`,`tasks`,`verify`]),Ke=new Set(Object.values(se)),qe=new Set([`_next`,`api`,`f`,`oidc`,`trpc`,`webapi`]),Je=new Set([`agent`,`acceptance`,`community`,`apps`,`eval`,`group`,`image`,`memory`,`page`,`resource`,`settings`,`task`,`tasks`,`video`,`verify`]),Ye=(e,t)=>{let n=e.split(`/`).filter(Boolean);return A.has(n[0])?{segments:n,workspaceSlug:void 0}:t.has(n[0])&&A.has(n[1])?{segments:n.slice(1),workspaceSlug:n[0]}:null},Xe=(e,t)=>{let n=new Set([new URL(ne).host,new URL(te).host]);if(!t)return n.has(e.host);try{let r=new URL(t);return r.protocol!==`http:`&&r.protocol!==`https:`?n.has(e.host):e.host===r.host||n.has(r.host)&&n.has(e.host)}catch{return!1}},Ze=(e,t)=>e===t,j=(e,t,n=[])=>{if(!e)return null;let r=e.startsWith(`/`)&&!e.startsWith(`//`),i;try{i=new URL(e,t||`https://app.lobehub.com`)}catch{return null}if(!r&&!Xe(i,t))return null;let a=Ye(i.pathname,new Set(n)),o=`${i.pathname}${i.search}${i.hash}`;if(!a){let e=i.pathname.split(`/`).find(Boolean);if(!e||qe.has(e)||!Je.has(e)&&!n.includes(e))return null;let t=n.includes(e)?e:void 0;return{pathname:o,type:`route`,...t?{workspaceSlug:t}:{}}}let{segments:s,workspaceSlug:c}=a;if(s[0]===`acceptance`&&s[1])return{acceptanceId:s[1],pathname:o,type:`acceptance`,...c?{workspaceSlug:c}:{}};if(s[0]===`page`&&s[1])return{documentId:Ae(s[1],`docs`),pathname:o,type:`document`,...c?{workspaceSlug:c}:{}};if(s[0]===`task`&&s[1])return{pathname:o,taskId:s[1],type:`task`,...c?{workspaceSlug:c}:{}};if(s[0]===`verify`&&s[1])return{pathname:o,runId:s[1],type:`verify`,...c?{workspaceSlug:c}:{}};if(s[0]===`agent`&&s[1]){if(Ke.has(s[1]))return{pathname:o,type:`route`};let e=s[1];if(s[2]===`docs`&&s[3])return{agentId:e,documentId:Ae(s[3],`docs`),pathname:o,type:`document`,...c?{workspaceSlug:c}:{}};if(s[2]===`task`&&s[3])return{agentId:e,pathname:o,taskId:s[3],type:`task`,...c?{workspaceSlug:c}:{}};if(s.length===2)return{agentId:e,pathname:o,type:`agent`,...c?{workspaceSlug:c}:{}}}return{pathname:o,type:`route`,...c?{workspaceSlug:c}:{}}}})),N,P,F,Qe=e((()=>{x(),N=t(i()),P=t(a()),F=(0,N.memo)(({domain:e,size:t=15})=>{let[n,r]=(0,N.useState)(!1);return n?(0,P.jsx)(h,{size:t}):(0,P.jsx)(`img`,{alt:``,height:t,src:`https://icons.duckduckgo.com/ip3/${e}.ico`,style:{borderRadius:3,objectFit:`contain`},width:t,onError:()=>r(!0)})}),F.displayName=`FaviconIcon`})),$e,et,tt,nt=e((()=>{$e=/^\/verify(?:\/[^/]+)?\/?$/,et=e=>e.split(/[?#]/,1)[0],tt=e=>{let t=et(e);return $e.test(t)}})),rt,it=e((()=>{nt(),rt=e=>!!tt(e)})),I,L,R,at,z,B,V,ot=e((()=>{oe(),p(),Ge(),l(),Ne(),d(),u(),x(),I=t(i()),r(),Ve(),he(),re(),Ee(),le(),ye(),L=t(a()),R={content:C(`acss-10uqiqe`,[`.acss-10uqiqe{width:320px;padding:16px;}`],`
    width: 320px;
    padding: 16px;
  `),description:C(`acss-10qbnoc`,[`.acss-10qbnoc{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;line-height:1.55;color:var(--ant-color-text-secondary);}`],`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

    line-height: 1.55;
    color: var(--ant-color-text-secondary);
  `),icon:C(`acss-n9berz`,[`.acss-n9berz{display:grid;flex:none;place-items:center;width:36px;height:36px;border-radius:var(--ant-border-radius-lg);color:var(--ant-color-text-secondary);background:var(--ant-color-fill-tertiary);}`],`
    display: grid;
    flex: none;
    place-items: center;

    width: 36px;
    height: 36px;
    border-radius: var(--ant-border-radius-lg);

    color: var(--ant-color-text-secondary);

    background: var(--ant-color-fill-tertiary);
  `),title:C(`acss-kp007x`,[`.acss-kp007x{overflow:hidden;font-weight:600;line-height:1.4;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    font-weight: 600;
    line-height: 1.4;
    text-overflow: ellipsis;
    white-space: nowrap;
  `),type:C(`acss-xwvxkr`,[`.acss-xwvxkr{font-size:12px;color:var(--ant-color-text-tertiary);}`],`
    font-size: 12px;
    color: var(--ant-color-text-tertiary);
  `)},at=(e,t)=>{switch(e){case`delivered`:return t(`internalLink.preview.verifyStatus.delivered`);case`errored`:return t(`internalLink.preview.verifyStatus.errored`);case`failed`:return t(`internalLink.preview.verifyStatus.failed`);case`passed`:return t(`internalLink.preview.verifyStatus.passed`);case`planned`:return t(`internalLink.preview.verifyStatus.planned`);case`repairing`:return t(`internalLink.preview.verifyStatus.repairing`);case`uncertain`:return t(`internalLink.preview.verifyStatus.uncertain`);case`unverified`:return t(`internalLink.preview.verifyStatus.unverified`);case`verifying`:return t(`internalLink.preview.verifyStatus.verifying`);default:return null}},z=e=>[`internal-entity-preview`,e.type,e.pathname],B=async(e,t)=>{switch(e.type){case`acceptance`:{let n=await be.getAcceptanceBundle(e.acceptanceId);if(!n)return null;let r=n.checks.filter(e=>e.state===`passed`).length,i=n.checks.filter(e=>e.state===`failed`||e.state===`uncertain`).length;return{description:n.acceptance.requirement||n.latestReport?.summary,meta:t(`internalLink.preview.acceptanceCounts`,{exceptions:i,passed:r,total:n.checks.length}),secondaryMeta:t(`internalLink.preview.acceptanceRounds`,{count:n.rounds.length}),title:n.subject.title||n.subject.id}}case`agent`:return Ce.getAgentConfigById(e.agentId);case`document`:{let t=await ke.getDocumentById(e.documentId);return t?{description:t.content,title:t.title||t.filename}:null}case`task`:{let t=(await me.getDetail(e.taskId)).data;return t?{description:t.description||t.instruction,title:t.name||t.identifier}:null}case`verify`:{let n=await be.getReportBundle(e.runId);if(!n)return null;let{report:r,run:i}=n,a=r?.verdict??i.status,o=r?t(`internalLink.preview.verifyCounts`,{failed:r.failedChecks??0,passed:r.passedChecks??0,uncertain:r.uncertainChecks??0}):null,s=(i.scenario??`coding`)===`coding`?i.context:null,c=i.context?.testedAt,l=[s?.branch,s?.commit?.slice(0,10),c?new Date(c).toLocaleString():null].filter(Boolean);return{description:r?.summary,meta:[at(a,t),o].filter(Boolean).join(` · `),secondaryMeta:l.join(` · `),title:i.title}}case`route`:return null}},V=(0,I.memo)(({children:e,fallbackTitle:t,reference:r})=>{let{t:i}=n(`chat`),[a,o]=(0,I.useState)(!1),{data:l,isLoading:u}=w(a?z(r):null,()=>B(r,i),{revalidateOnFocus:!1}),d=r.type===`acceptance`?y:r.type===`agent`?v:r.type===`task`?_:r.type===`verify`?g:m,p=i(`internalLink.preview.${r.type}`),h=u?(0,L.jsx)(`div`,{className:R.content,children:(0,L.jsx)(ie,{avatar:!0,rows:2})}):(0,L.jsxs)(s,{className:R.content,gap:12,children:[(0,L.jsxs)(s,{horizontal:!0,align:`center`,gap:12,children:[r.type===`agent`&&l?.avatar?(0,L.jsx)(ee,{avatar:l.avatar,background:l.backgroundColor??void 0,shape:`square`,size:36}):(0,L.jsx)(`span`,{className:R.icon,children:(0,L.jsx)(c,{icon:d,size:19})}),(0,L.jsxs)(s,{flex:1,gap:2,style:{minWidth:0},children:[(0,L.jsx)(`span`,{className:R.type,children:p}),(0,L.jsx)(`span`,{className:R.title,children:l?.title||t})]})]}),l?.description&&(0,L.jsx)(f,{className:R.description,fontSize:13,children:l.description}),l?.meta&&(0,L.jsx)(f,{fontSize:12,type:`secondary`,children:l.meta}),l?.secondaryMeta&&(0,L.jsx)(f,{fontSize:12,type:`secondary`,children:l.secondaryMeta})]});return(0,L.jsx)(Pe,{content:(0,L.jsx)(k,{frozen:!a,children:h}),mouseEnterDelay:.35,open:a,placement:`top`,styles:{content:{borderRadius:12,overflow:`hidden`,padding:0}},trigger:`hover`,triggerProps:{role:`link`},onOpenChange:o,children:e})}),V.displayName=`InternalEntityPreview`})),H,U,W,st,G,ct=e((()=>{oe(),S(),we(),l(),x(),H=t(i()),r(),Be(),it(),he(),ae(),de(),Ie(),M(),ot(),U=t(a()),W={icon:C(`acss-1y6o4x9`,[`.acss-1y6o4x9{margin-inline-end:4px;color:var(--ant-color-text-secondary);vertical-align:-0.15em;}`],`
    margin-inline-end: 4px;
    color: var(--ant-color-text-secondary);
    vertical-align: -0.15em;
  `),link:C(`acss-3f7yh5`,[`.acss-3f7yh5{display:inline;color:var(--ant-color-text)!important;text-decoration-color:var(--ant-color-text-tertiary);text-decoration-line:underline;text-decoration-thickness:1px;text-underline-offset:3px;transition:color 0.15s,text-decoration-color 0.15s;}`,`.acss-3f7yh5:hover{color:var(--ant-color-text)!important;text-decoration-color:var(--ant-color-text-secondary);}`,`.acss-3f7yh5:focus-visible{border-radius:2px;outline:2px solid var(--ant-color-primary-border);outline-offset:2px;}`],`
    /* Keep the label on the surrounding text baseline instead of the icon's flex baseline. */
    display: inline;

    color: var(--ant-color-text) !important;

    /* Tertiary, not colorBorder: on a dark background colorBorder sits so
       close to the bubble that the underline vanishes and the link reads as
       plain text — findability is the underline's whole job here. */
    text-decoration-color: var(--ant-color-text-tertiary);
    text-decoration-line: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;

    transition:
      color 0.15s,
      text-decoration-color 0.15s;

    &:hover {
      color: var(--ant-color-text) !important;
      text-decoration-color: var(--ant-color-text-secondary);
    }

    &:focus-visible {
      border-radius: 2px;
      outline: 2px solid var(--ant-color-primary-border);
      outline-offset: 2px;
    }
  `)},st={acceptance:y,agent:v,document:m,task:_,verify:g},G=(0,H.memo)(({href:e,label:t,reference:r})=>{let{t:i}=n(`chat`),a=ze(),o=Se(e=>e.activeAgentId),[s,l,u,d,f]=Fe(e=>[e.openAcceptance,e.openAgentDetail,e.openDocument,e.openTaskDetail,e.openVerifyReport]),p=r.type!==`route`&&!r.workspaceSlug&&Ze(t,e),{data:ee}=w(p?z(r):null,()=>B(r,i),{revalidateOnFocus:!1}),m=p&&ee?.title||t,h=r.type===`document`?r.agentId:void 0,g=!!h&&h===o,{data:_,mutate:v}=w(g?je.documentsList(h):null,()=>pe.listDocuments({agentId:h})),y=(0,H.useCallback)(async e=>{if(!(e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)){if(e.preventDefault(),(r.type===`acceptance`||r.type===`document`||r.type===`verify`)&&rt(r.pathname)){window.location.assign(r.pathname);return}if(`workspaceSlug`in r&&r.workspaceSlug&&r.type!==`verify`&&r.type!==`acceptance`){a(r.pathname,{escape:!0});return}if(r.type===`document`&&r.agentId&&r.agentId!==o){a(r.pathname,{escape:!0});return}switch(r.type){case`acceptance`:s(r.acceptanceId);break;case`agent`:l(r.agentId);break;case`document`:{let e=(g?_??await v().catch(()=>void 0):void 0)?.find(e=>e.documentId===r.documentId)?.id;u(r.documentId,e);break}case`task`:d(r.taskId);break;case`verify`:f(r.runId);break;case`route`:a(r.pathname);break}}},[o,_,a,s,l,u,d,f,r,v,g]),b=r.type===`route`?void 0:st[r.type],x=(0,U.jsxs)(`a`,{[ve]:`true`,className:W.link,href:e,rel:`noopener noreferrer`,target:`_blank`,onClick:y,children:[b&&(0,U.jsx)(c,{className:W.icon,icon:b,size:14}),m]});return r.type===`route`||r.workspaceSlug?x:(0,U.jsx)(V,{fallbackTitle:m,reference:r,children:x})}),G.displayName=`InternalEntityLink`})),lt,K,q,ut=e((()=>{lt=t(i()),K=t(a()),q=(0,lt.memo)(({size:e=`1em`})=>(0,K.jsx)(`svg`,{fill:`currentColor`,height:e,role:`img`,viewBox:`0 0 24 24`,width:e,xmlns:`http://www.w3.org/2000/svg`,children:(0,K.jsx)(`path`,{d:`M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z`})})),q.displayName=`LinearIcon`})),J,Y,X,Z,dt=e((()=>{oe(),S(),o(),x(),J=t(i()),r(),Oe(),Y=t(a()),X={chip:C(`acss-1chtrah`,[`.acss-1chtrah{color:var(--ant-color-link);text-decoration:none;transition:color 0.15s;}`,`.acss-1chtrah:hover{color:var(--ant-color-link-hover);}`],`
    color: var(--ant-color-link);
    text-decoration: none;
    transition: color 0.15s;

    &:hover {
      color: var(--ant-color-link-hover);
    }
  `),icon:C(`acss-1lme0j7`,[`.acss-1lme0j7{display:inline-flex;margin-inline-end:4px;vertical-align:-0.15em;}`],`
    display: inline-flex;
    margin-inline-end: 4px;
    vertical-align: -0.15em;
  `),sideBrowser:C(`acss-1mv9efq`,[`.acss-1mv9efq{color:var(--ant-color-text-tertiary);transition:color 0.15s;}`,`.acss-1mv9efq:hover{color:var(--ant-color-text);}`],`
    color: var(--ant-color-text-tertiary);
    transition: color 0.15s;

    &:hover {
      color: var(--ant-color-text);
    }
  `),wrapper:C(`acss-1o76pxg`,[`.acss-1o76pxg{display:inline-flex;gap:2px;align-items:center;}`],`
    display: inline-flex;
    gap: 2px;
    align-items: center;
  `)},Z=(0,J.memo)(({href:e,icon:t,label:r})=>{let{t:i}=n(`chat`),a=xe(e=>e.openInBrowserTab);return(0,J.useCallback)(t=>{t.preventDefault(),a(e)},[e,a]),(0,Y.jsxs)(`a`,{className:X.chip,href:e,rel:`noopener noreferrer`,target:`_blank`,children:[t&&(0,Y.jsx)(`span`,{className:X.icon,children:t}),r]})}),Z.displayName=`LinkChip`})),ft,Q,$,pt,mt=e((()=>{Le(),x(),ft=t(i()),Me(),ce(),ge(),M(),Qe(),ct(),ut(),dt(),Q=t(a()),$=15,pt=(0,ft.memo)(({node:e})=>{let{linkHref:t,linkKind:n,linkLabel:r,linkDomain:i}=e?.properties||{},a=ue(Te.enableMessageLinkIcon),o=_e(),s=r||t||``,c=j(t,typeof window>`u`?void 0:window.location.origin,o.map(e=>e.slug));return t&&c?(0,Q.jsx)(G,{href:t,label:s,reference:c}):a?n===`github`?(0,Q.jsx)(Z,{href:t,icon:(0,Q.jsx)(Re,{size:$}),label:s}):n===`linear`?(0,Q.jsx)(Z,{href:t,icon:(0,Q.jsx)(q,{size:$}),label:s}):n===`email`?(0,Q.jsx)(Z,{href:t,icon:(0,Q.jsx)(b,{size:$}),label:s}):(0,Q.jsx)(Z,{href:t,icon:(0,Q.jsx)(F,{domain:i||``,size:$}),label:s}):(0,Q.jsx)(Z,{href:t,label:s})}),pt.displayName=`LobeLinkRender`}));export{k as a,j as i,mt as n,Ge as o,M as r,pt as t};