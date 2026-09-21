import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,Q as r,V as i,j as a,z as o}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as s,T as c,_ as l,i as u}from"../vendor/vendor-react-B9HSWrpN.js";import{B as d,Kt as f,Mt as p,Nt as m,Xn as h,Yn as ee,Zn as g,at as _,h as v,i as y,it as b,lt as x,m as S,qt as C,r as w,v as T,z as E}from"../vendor/vendor-ui-core-BmtybT1r.js";import{A as te,Ar as D,Hd as ne,Hh as re,Hr as ie,Ip as O,Kd as ae,Ku as oe,Md as se,Op as ce,Pr as le,Wt as k,c as ue,ig as de,mc as fe,mt as pe,nf as me,o as he,os as ge,t as A,ut as _e,vp as ve}from"../vendor/vendor-icons-vienkZi5.js";import{Rn as ye,c as be}from"./app-const-BpgKVRXh.js";import{FD as j,Gp as xe,Hp as Se,ID as M,Jf as Ce,Jp as we,MA as Te,Mm as Ee,Qm as De,Yf as Oe,Zf as ke,Zh as Ae,Zm as je,am as Me,bt as Ne,eg as Pe,gF as Fe,hF as N,rg as P,uF as F,vS as Ie,yS as Le,yt as Re,zp as ze}from"./index-w64_zsxD.js";import{n as Be,t as Ve}from"./DropdownMenu-1ae8j9bI.js";import{t as He}from"./_virtual_lobe-ui-named__Tooltip-DNompU8a.js";import{n as Ue,t as I}from"./Tag-C95BKTI7.js";import{b as We,t as Ge}from"./device-Cx36fBwx.js";import{n as Ke,t as qe}from"./device-CSpCOZ47.js";import{n as Je,t as Ye}from"./Tabs-DH_wa3T6.js";import{n as Xe,t as Ze}from"./Input-gdUxluEJ.js";import{t as Qe}from"./_virtual_lobe-ui-named_base-ui_useModalContext-CvZy-G5G.js";import{n as $e,t as et}from"./Select-C0UJO2yB.js";import{n as tt,t as nt}from"./SortableList-0Y4muOy9.js";import{n as rt,t as it}from"./DirIcon-CRCKkz_j.js";import{t as at}from"./_virtual_lobe-ui-named_base-ui_confirmModal-B6WREEdZ.js";import{n as ot,t as st}from"./CommandLine-DrB40fDC.js";import{n as ct,t as lt}from"./useIsWorkspaceOwner-vpffHA75.js";import{a as ut,i as dt,n as ft,o as L,r as pt,t as mt}from"./getDeviceIcon-BfoZAXnk.js";import{r as ht,t as gt}from"./WorkingDirectory-DLV-L_VI.js";import{n as _t,t as vt}from"./VisibilityConfirmContent-BdIUFkOQ.js";import{n as yt,t as bt}from"./AsyncBoundary-K-esguw4.js";import{n as xt,t as St}from"./ListSkeleton-BbfOCSiw.js";var R,z,Ct,B,wt,Tt=e((()=>{j(),be(),C(),g(),m(),Je(),_(),F(),A(),R=t(s()),a(),Ie(),ot(),Oe(),z=t(c()),Ct={footer:M(`acss-1xkt9du`,[`.acss-1xkt9du{margin-block-start:4px;padding-block-start:16px;border-block-start:1px solid var(--ant-color-border-secondary);}`],`
    margin-block-start: 4px;
    padding-block-start: 16px;
    border-block-start: 1px solid var(--ant-color-border-secondary);
  `),index:M(`acss-osnr0l`,[`.acss-osnr0l{display:flex;flex-shrink:0;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;font-size:var(--ant-font-size-sm);font-weight:600;color:var(--ant-color-primary);background:var(--ant-color-primary-bg);}`],`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;
    border-radius: 50%;

    font-size: var(--ant-font-size-sm);
    font-weight: 600;
    color: var(--ant-color-primary);

    background: var(--ant-color-primary-bg);
  `),line:M(`acss-53hqat`,[`.acss-53hqat{flex:1;width:1px;margin-block-start:4px;background:var(--ant-color-border-secondary);}`],`
    flex: 1;
    width: 1px;
    margin-block-start: 4px;
    background: var(--ant-color-border-secondary);
  `)},B=(0,R.memo)(({index:e,title:t,desc:n,children:r,last:i})=>(0,z.jsxs)(f,{horizontal:!0,gap:16,children:[(0,z.jsxs)(f,{align:`center`,children:[(0,z.jsx)(`span`,{className:Ct.index,children:e}),!i&&(0,z.jsx)(`span`,{className:Ct.line})]}),(0,z.jsxs)(f,{flex:1,gap:4,style:{paddingBlockEnd:i?0:24},children:[(0,z.jsx)(b,{weight:500,children:t}),n&&(0,z.jsx)(b,{color:N.colorTextTertiary,lineHeight:1.6,children:n}),r&&(0,z.jsx)(`div`,{style:{marginBlockStart:12},children:r})]})]})),wt=(0,R.memo)(({onClose:e,open:t,initialTab:r,scope:i,visibility:a})=>{let{t:o}=n(`setting`),s=Le(),c=i===`workspace`,[l,u]=(0,R.useState)(r??`desktop`);(0,R.useEffect)(()=>{t&&u(c?`cli`:r??`desktop`)},[t,r,c]);let d=c?`lh connect --workspace ${s??`<workspace-id>`}${a===`public`?` --public`:``} --daemon`:`lh connect --daemon`,m=(0,z.jsxs)(f,{children:[(0,z.jsx)(B,{index:1,title:o(`devices.connectWizard.cli.installTitle`),children:(0,z.jsx)(st,{command:`npm install -g @lobehub/cli`})}),(0,z.jsx)(B,{index:2,title:o(`devices.connectWizard.cli.loginTitle`),children:(0,z.jsx)(st,{command:`lh login`})}),(0,z.jsx)(B,{last:!0,index:3,title:o(`devices.connectWizard.cli.connectTitle`),desc:o(c?`workspaceSetting.devices.enrollDesc`:`devices.connectWizard.cli.connectDesc`),children:(0,z.jsx)(st,{command:d})})]});return(0,z.jsx)(Ce,{footer:null,open:t,width:560,title:o(c?a===`private`?`workspaceSetting.devices.connectTitlePrivate`:`workspaceSetting.devices.connectTitlePublic`:`devices.connectWizard.title`),onCancel:e,children:(0,z.jsxs)(f,{gap:20,children:[!c&&(0,z.jsx)(b,{color:N.colorTextTertiary,children:o(`devices.connectWizard.subtitle`)}),c?null:(0,z.jsx)(Ye,{activeKey:l,items:[{icon:(0,z.jsx)(h,{icon:ge}),key:`desktop`,label:o(`devices.connectWizard.method.desktop`)},{icon:(0,z.jsx)(h,{icon:k}),key:`cli`,label:o(`devices.connectWizard.method.cli`)}],styles:{list:{display:`flex`,width:`100%`},tab:{flex:1}},onChange:e=>u(e)}),!c&&l===`desktop`?(0,z.jsxs)(f,{children:[(0,z.jsx)(B,{desc:o(`devices.connectWizard.desktop.step1Desc`),index:1,title:o(`devices.connectWizard.desktop.step1`),children:(0,z.jsx)(`a`,{href:ye.default,rel:`noreferrer`,target:`_blank`,children:(0,z.jsx)(p,{icon:(0,z.jsx)(h,{icon:O}),type:`primary`,children:o(`devices.connectWizard.desktop.downloadLink`)})})}),(0,z.jsx)(B,{desc:o(`devices.connectWizard.desktop.step2Desc`),index:2,title:o(`devices.connectWizard.desktop.step2`)}),(0,z.jsx)(B,{last:!0,desc:o(`devices.connectWizard.desktop.step3Desc`),index:3,title:o(`devices.connectWizard.desktop.step3`)})]}):m,(0,z.jsxs)(f,{horizontal:!0,align:`center`,className:Ct.footer,gap:8,children:[(0,z.jsx)(h,{icon:D,size:14,style:{color:N.colorTextTertiary}}),(0,z.jsx)(b,{color:N.colorTextTertiary,fontSize:12,children:o(`devices.connectWizard.footer`)})]})]})})}),wt.displayName=`DeviceConnectModal`})),Et,Dt,Ot=e((()=>{Et=t(s()),lt(),xe(),Me(),Dt=()=>{let e=ct(),t=we(Ee.userId);return(0,Et.useCallback)(n=>n.scope===`personal`?!0:n.enroller?e?!0:t?n.enroller.userId===t:!1:!1,[e,t])}})),kt,V,H,U,W,At,jt=e((()=>{j(),be(),C(),g(),Xe(),tt(),d(),y(),m(),at(),Ue(),_(),Te(),F(),kt=t(r()),A(),V=t(s()),a(),rt(),gt(),Ae(),Ke(),De(),Ge(),ut(),ft(),Ot(),H=t(c()),U={body:M(`acss-nn1ogb`,[`.acss-nn1ogb{overflow-y:auto;flex:1;min-height:0;padding-block:16px 24px;padding-inline:20px;}`],`
    overflow-y: auto;
    flex: 1;

    min-height: 0;
    padding-block: 16px 24px;
    padding-inline: 20px;
  `),container:M(`acss-1qzzi5z`,[`.acss-1qzzi5z{overflow:hidden;height:100%;min-height:0;}`],`
    overflow: hidden;
    height: 100%;
    min-height: 0;
  `),dot:M(`acss-1x9a88s`,[`.acss-1x9a88s{flex:none;width:8px;height:8px;border-radius:50%;}`],`
    flex: none;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  `),header:M(`acss-ts4qmc`,[`.acss-ts4qmc{flex:none;padding-block:16px;padding-inline:20px;border-block-end:1px solid var(--ant-color-border-secondary);}`],`
    flex: none;
    padding-block: 16px;
    padding-inline: 20px;
    border-block-end: 1px solid var(--ant-color-border-secondary);
  `),iconTile:M(`acss-1dioxvh`,[`.acss-1dioxvh{display:flex;flex:none;align-items:center;justify-content:center;width:32px;height:32px;border-radius:var(--ant-border-radius);color:var(--ant-color-text-secondary);background:var(--ant-color-fill-tertiary);}`],`
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;
    border-radius: var(--ant-border-radius);

    color: var(--ant-color-text-secondary);

    background: var(--ant-color-fill-tertiary);
  `),path:M(`acss-1i10z72`,[`.acss-1i10z72{overflow:hidden;flex:1;min-width:0;font-family:var(--ant-font-family-code);font-size:var(--ant-font-size-sm);color:var(--ant-color-text-secondary);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;
    flex: 1;

    min-width: 0;

    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-secondary);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),recentItem:M(`acss-lk3k1r`,[`.acss-lk3k1r{padding-block:8px;padding-inline:8px;}`],`
    padding-block: 8px;
    padding-inline: 8px;
  `)},W=(0,V.memo)(({children:e,extra:t})=>(0,H.jsxs)(f,{horizontal:!0,align:`center`,distribution:`space-between`,children:[(0,H.jsx)(b,{fontSize:12,type:`secondary`,weight:500,children:e}),t]})),At=(0,V.memo)(({device:e,isCurrent:t,onClose:r})=>{let{t:i}=n([`setting`,`device`]),a=Dt()(e),[o,s]=(0,V.useState)(e.friendlyName??``),[c,l]=(0,V.useState)(e.defaultCwd??``),u=()=>L(),d=P.device.updateDevice.useMutation({onSuccess:u}),m=P.device.updateWorkspaceDevice.useMutation({onSuccess:u}),g=e.scope===`workspace`?m:d,_=!!t&&!1,v=e.channels??[],y=v.length>0,x=()=>{let t=o.trim()||null;t!==(e.friendlyName??null)&&g.mutate({deviceId:e.deviceId,friendlyName:t})},C=(t,n)=>{let r=t.trim();g.mutate({defaultCwd:r||null,deviceId:e.deviceId,workingDirs:r?We({path:r,repoType:n},e.workingDirs):e.workingDirs})},T=()=>{c.trim()!==(e.defaultCwd??``)&&C(c)},te=async()=>{let e=await je.selectFolder({defaultPath:c.trim()||void 0,title:i(`devices.edit.defaultCwd`)});e?.path&&(l(e.path),C(e.path,e.repoType))},D=t=>{g.mutate({deviceId:e.deviceId,workingDirs:We(t,e.workingDirs)})},re=async()=>{if(_){let e=await je.selectFolder({title:i(`devices.detail.addDir`)});e?.path&&D({path:e.path,repoType:e.repoType});return}ht({defaultPath:e.defaultCwd||void 0,deviceId:e.deviceId,onSubmit:async t=>{let n=await qe.statPath(e.deviceId,t);if(n){if(!n.exists)return i(`device:workingDirectory.pathNotExist`);if(!n.isDirectory)return i(`device:workingDirectory.pathNotDirectory`)}D({path:t,repoType:n?.repoType})},placeholder:e.defaultCwd||void 0})},ie=t=>{g.mutate({deviceId:e.deviceId,workingDirs:e.workingDirs.filter(e=>e.path!==t)})},O=e=>S({content:i(`devices.share.revokeConfirmDesc`),okButtonProps:{danger:!0},okText:i(`devices.share.revoke`),onOk:async()=>{try{await Pe(e.workspaceId).device.removeWorkspaceDevice.mutate({deviceId:e.deviceId}),L()}catch(e){throw ee.error(e.message),e}},title:i(`devices.share.revokeConfirmTitle`,{name:e.workspaceName??e.workspaceId})});return(0,H.jsxs)(f,{className:U.container,children:[(0,H.jsxs)(f,{horizontal:!0,align:`center`,className:U.header,gap:12,children:[(0,H.jsx)(`span`,{className:U.iconTile,children:mt(e.platform,18)}),(0,H.jsxs)(f,{flex:1,gap:2,style:{minWidth:0},children:[(0,H.jsx)(b,{ellipsis:!0,weight:600,children:e.friendlyName||e.hostname||e.deviceId}),(0,H.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,H.jsx)(I,{color:y?`success`:`default`,size:`small`,children:y?i(`devices.status.onlineConnections`,{count:v.length}):i(`devices.status.offline`)}),t&&(0,H.jsx)(I,{size:`small`,children:i(`devices.currentBadge`)})]})]}),(0,H.jsx)(E,{icon:ue,size:`small`,onClick:r})]}),(0,H.jsxs)(f,{className:U.body,gap:20,children:[!a&&(0,H.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,H.jsx)(h,{icon:fe,size:14,style:{color:N.colorTextTertiary}}),(0,H.jsx)(b,{fontSize:12,type:`secondary`,children:i(`workspaceSetting.devices.readonlyHint`)})]}),e.scope===`workspace`&&e.enroller&&(0,H.jsxs)(f,{gap:8,children:[(0,H.jsx)(W,{children:i(`workspaceSetting.devices.enrolledByLabel`)}),(0,H.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,H.jsx)(w,{avatar:e.enroller.avatar??void 0,size:24}),(0,H.jsx)(b,{children:e.enroller.fullName||e.enroller.username||i(`workspaceSetting.devices.unknownEnroller`)})]})]}),e.scope===`personal`&&!!e.sharedWorkspaces?.length&&(0,H.jsxs)(f,{gap:8,children:[(0,H.jsx)(W,{children:i(`devices.share.detailLabel`)}),e.sharedWorkspaces.map(e=>(0,H.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,H.jsx)(b,{ellipsis:!0,style:{flex:1,minWidth:0},children:e.workspaceName??e.workspaceId}),(0,H.jsx)(I,{size:`small`,children:e.visibility===`private`?i(`devices.share.visibilityTag.private`):i(`devices.share.visibilityTag.public`)}),(0,H.jsx)(E,{icon:ue,size:`small`,title:i(`devices.share.revoke`),onClick:()=>O(e)})]},e.workspaceId))]}),(0,H.jsxs)(f,{gap:8,children:[(0,H.jsx)(W,{children:i(`devices.detail.connections`)}),v.length>0?v.map((e,t)=>(0,H.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,H.jsx)(`span`,{className:U.dot,style:{background:N.colorSuccess}}),e.channel&&(0,H.jsx)(I,{size:`small`,children:e.channel}),(0,H.jsx)(b,{fontSize:12,type:`secondary`,children:i(`devices.channel.connected`,{time:(0,kt.default)(e.connectedAt).fromNow()})})]},`${e.connectedAt}-${t}`)):(0,H.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,H.jsx)(`span`,{className:U.dot,style:{background:N.colorTextQuaternary}}),(0,H.jsxs)(b,{fontSize:12,type:`secondary`,children:[i(`devices.status.offline`),` ·`,` `,i(`devices.lastSeen`,{time:(0,kt.default)(e.lastSeen).fromNow()})]})]})]}),(0,H.jsxs)(f,{gap:8,children:[(0,H.jsx)(W,{children:i(`devices.edit.friendlyName`)}),a?(0,H.jsx)(Ze,{placeholder:i(`devices.edit.friendlyNamePlaceholder`),value:o,onBlur:x,onChange:e=>s(e.target.value),onPressEnter:x}):e.friendlyName?(0,H.jsx)(b,{children:e.friendlyName}):(0,H.jsx)(b,{type:`secondary`,children:`—`})]}),(0,H.jsxs)(f,{gap:8,children:[(0,H.jsx)(W,{children:i(`devices.edit.defaultCwd`)}),a?(0,H.jsxs)(f,{horizontal:!0,gap:8,children:[(0,H.jsx)(Ze,{placeholder:i(`devices.edit.defaultCwdPlaceholder`),value:c,onBlur:T,onChange:e=>l(e.target.value),onPressEnter:T}),_&&(0,H.jsx)(p,{icon:(0,H.jsx)(h,{icon:ae}),onClick:te,children:i(`devices.edit.browse`)})]}):e.defaultCwd?(0,H.jsx)(b,{className:U.path,children:e.defaultCwd}):(0,H.jsx)(b,{type:`secondary`,children:`—`})]}),(0,H.jsxs)(f,{gap:8,children:[(0,H.jsx)(W,{extra:a&&(0,H.jsx)(E,{icon:ne,size:`small`,title:i(`devices.detail.addDir`),onClick:re}),children:i(`devices.detail.recentDirs`)}),e.workingDirs.length===0?(0,H.jsx)(b,{fontSize:12,type:`secondary`,children:i(`devices.detail.noRecent`)}):a?(0,H.jsx)(nt,{items:e.workingDirs.map(e=>({id:e.path,repoType:e.repoType})),renderItem:e=>(0,H.jsxs)(nt.Item,{className:U.recentItem,id:e.id,variant:`filled`,children:[(0,H.jsx)(nt.DragHandle,{}),(0,H.jsx)(it,{repoType:e.repoType}),(0,H.jsx)(b,{className:U.path,title:e.id,children:e.id}),(0,H.jsx)(E,{icon:ue,size:`small`,onClick:()=>ie(e.id)})]}),onChange:t=>{let n=new Map(e.workingDirs.map(e=>[e.path,e]));g.mutate({deviceId:e.deviceId,workingDirs:t.map(e=>n.get(e.id)??{path:e.id})})}}):e.workingDirs.map(e=>(0,H.jsxs)(f,{horizontal:!0,align:`center`,className:U.recentItem,gap:8,children:[(0,H.jsx)(it,{repoType:e.repoType}),(0,H.jsx)(b,{className:U.path,title:e.path,children:e.path})]},e.path))]})]})]})}),At.displayName=`DeviceDetailPanel`})),Mt,G,Nt,Pt=e((()=>{be(),C(),y(),_(),Mt=t(s()),G=t(c()),Nt=()=>(0,Mt.useCallback)(e=>(0,G.jsxs)(f,{horizontal:!0,align:`center`,gap:10,style:{flex:1,minWidth:0},children:[(0,G.jsx)(w,{avatar:e.avatar||`/avatars/agent-default.png`,shape:`square`,size:24}),(0,G.jsx)(b,{ellipsis:!0,style:{flex:`0 1 auto`,minWidth:0},children:e.name})]}),[])})),K,q,J,Ft,It,Lt=e((()=>{j(),C(),g(),m(),at(),ke(),$e(),Ue(),_(),Te(),Qe(),F(),o(),A(),K=t(s()),a(),u(),Pt(),Re(),Ae(),ut(),q=t(c()),J={footer:M(`acss-1c9r9at`,[`.acss-1c9r9at{padding-block:16px;padding-inline:24px;}`],`
    padding-block: 16px;
    padding-inline: 24px;
  `),optionHint:M(`acss-xqpjw6`,[`.acss-xqpjw6{margin-inline-start:auto;font-size:12px;color:var(--ant-color-text-tertiary);}`],`
    margin-inline-start: auto;
    font-size: 12px;
    color: var(--ant-color-text-tertiary);
  `),optionRow:M(`acss-1jit4th`,[`.acss-1jit4th{width:100%;min-width:0;padding-block:2px;}`],`
    width: 100%;
    min-width: 0;
    padding-block: 2px;
  `),selectValue:M(`acss-15qe3x4`,[`.acss-15qe3x4 >span{display:flex;flex:1;min-width:0;}`],`
    > span {
      display: flex;
      flex: 1;
      min-width: 0;
    }
  `)},Ft=(0,K.memo)(({device:e})=>{let{t}=n([`setting`,`common`]),{close:r,setCanDismissByClickOutside:i}=T(),a=l(),o=Ne(),s=Nt(),[c,u]=(0,K.useState)(),[d,m]=(0,K.useState)(`private`),[g,_]=(0,K.useState)(!1),[v,y]=(0,K.useState)(`select-target`),[x,C]=(0,K.useState)(),w=(0,K.useMemo)(()=>new Set((e.sharedWorkspaces??[]).map(e=>e.workspaceId)),[e.sharedWorkspaces]),E=(0,K.useMemo)(()=>o.map(e=>{let n=w.has(e.id),r=e.role===`viewer`;return{disabled:n||r||!!e.lockedOut,label:(0,q.jsxs)(f,{horizontal:!0,align:`center`,className:J.optionRow,gap:8,children:[s(e),n&&(0,q.jsx)(I,{size:`small`,style:{flex:`none`,margin:0},children:t(`devices.share.alreadyShared`)}),!n&&r&&(0,q.jsx)(`span`,{className:J.optionHint,children:t(`devices.share.viewerHint`)})]}),title:e.name,value:e.id}}),[o,w,t,s]),D=c??E.find(e=>!e.disabled)?.value,ne=(0,K.useMemo)(()=>[{desc:t(`workspace.general.transferScope.private.desc`),icon:fe,label:t(`workspace.general.transferScope.private.label`),value:`private`},{desc:t(`workspace.general.transferScope.workspace.desc`),icon:te,label:t(`workspace.general.transferScope.workspace.label`),value:`public`}].map(e=>({label:(0,q.jsxs)(f,{horizontal:!0,align:`center`,className:J.optionRow,gap:8,children:[(0,q.jsx)(h,{icon:e.icon,size:14}),(0,q.jsx)(b,{style:{fontSize:13,fontWeight:500},children:e.label}),(0,q.jsx)(`span`,{className:J.optionHint,children:e.desc})]}),title:e.label,value:e.value})),[t]),ie=e=>t(e===`public`?`devices.share.visibilityTag.public`:`devices.share.visibilityTag.private`),O=async n=>{let r=o.find(e=>e.id===D);if(r){_(!0),i?.(!1);try{let i=await Pe(r.id).device.shareDeviceToWorkspace.mutate({confirmOverwrite:n,deviceId:e.deviceId,visibility:d});if(!i.success&&i.alreadyEnrolled){S({content:t(`devices.share.overwriteConfirmDesc`,{current:ie(i.visibility??`public`),next:ie(d)}),okText:t(`devices.share.overwriteConfirmOk`),onOk:()=>O(!0),title:t(`devices.share.overwriteConfirmTitle`,{name:r.name})});return}L(),C({name:r.name,slug:r.slug}),y(`done`)}catch(e){ee.error(`${r.name}: ${e.message}`)}finally{_(!1),i?.(!0)}}};return v===`done`&&x?(0,q.jsxs)(f,{align:`center`,gap:20,justify:`center`,padding:48,children:[(0,q.jsxs)(f,{align:`center`,gap:12,children:[(0,q.jsx)(h,{color:N.colorSuccess,icon:re,size:32}),(0,q.jsx)(b,{weight:500,children:t(`devices.share.success`,{name:x.name})})]}),(0,q.jsxs)(f,{horizontal:!0,gap:8,children:[(0,q.jsx)(p,{onClick:r,children:t(`devices.share.done`)}),(0,q.jsx)(p,{type:`primary`,onClick:()=>{x&&(a(`/${x.slug}/settings/devices`),r())},children:t(`devices.share.goToTarget`,{name:x.name})})]})]}):(0,q.jsxs)(f,{children:[(0,q.jsxs)(f,{gap:16,padding:24,children:[(0,q.jsx)(b,{style:{fontSize:13},type:`secondary`,children:t(`devices.share.modalDesc`)}),o.length===0?(0,q.jsx)(f,{align:`center`,justify:`center`,paddingBlock:24,children:(0,q.jsx)(b,{fontSize:12,type:`secondary`,children:t(`devices.share.empty`)})}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(f,{gap:6,children:[(0,q.jsx)(b,{style:{fontSize:13,fontWeight:500},children:t(`devices.share.targetLabel`)}),(0,q.jsx)(et,{showSearch:!0,classNames:{value:J.selectValue},options:E,placeholder:t(`devices.share.selectPlaceholder`),style:{width:`100%`},value:D,onChange:e=>u(e)})]}),(0,q.jsxs)(f,{gap:6,children:[(0,q.jsx)(b,{style:{fontSize:13,fontWeight:500},children:t(`workspace.general.transferScope.title`)}),(0,q.jsx)(et,{classNames:{value:J.selectValue},options:ne,style:{width:`100%`},value:d,onChange:e=>m(e)})]})]})]}),(0,q.jsxs)(f,{horizontal:!0,className:J.footer,gap:8,justify:`space-between`,children:[(0,q.jsx)(p,{disabled:g,onClick:r,children:t(`cancel`,{ns:`common`})}),(0,q.jsx)(p,{disabled:!D,loading:g,type:`primary`,onClick:()=>O(),children:t(`devices.share.confirm`)})]})]})}),Ft.displayName=`ShareDeviceContent`,It=e=>v({content:(0,q.jsx)(Ft,{device:e}),footer:null,maskClosable:!1,styles:{content:{padding:0}},title:i(`devices.share.modalTitle`,{ns:`setting`}),width:`min(92vw, 520px)`})})),Rt,zt,Y,X,Bt,Vt=e((()=>{j(),Be(),C(),g(),He(),y(),m(),at(),Ue(),_(),F(),Rt=t(r()),A(),zt=t(s()),a(),_t(),Ae(),xe(),Me(),ut(),ft(),Lt(),Ot(),Y=t(c()),X={activity:M(`acss-bf24iz`,[`.acss-bf24iz{flex:none;font-size:var(--ant-font-size-sm);white-space:nowrap;}`],`
    flex: none;
    font-size: var(--ant-font-size-sm);
    white-space: nowrap;
  `),cwd:M(`acss-zy5ft`,[`.acss-zy5ft{overflow:hidden;font-family:var(--ant-font-family-code);font-size:var(--ant-font-size-sm);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size-sm);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),iconTile:M(`acss-1ovldod`,[`.acss-1ovldod{display:flex;flex-shrink:0;align-items:center;justify-content:center;width:48px;height:48px;border-radius:12px;color:var(--ant-color-text-secondary);background:var(--ant-color-fill-tertiary);}`],`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;
    border-radius: 12px;

    color: var(--ant-color-text-secondary);

    background: var(--ant-color-fill-tertiary);
  `),metaDivider:M(`acss-7gixqj`,[`.acss-7gixqj{flex:none;width:1px;height:10px;background:var(--ant-color-border-secondary);}`],`
    flex: none;
    width: 1px;
    height: 10px;
    background: var(--ant-color-border-secondary);
  `),row:M(`acss-v2q54m`,[`.acss-v2q54m{cursor:pointer;padding-block:12px;padding-inline:12px;border-radius:var(--ant-border-radius);transition:background 0.15s ease;}`,`.acss-v2q54m:hover{background:var(--ant-color-fill-tertiary);}`,`.acss-v2q54m:focus-visible{outline:2px solid var(--ant-color-primary);outline-offset:-1px;}`,`@media (prefers-reduced-motion: reduce){.acss-v2q54m{transition:none;}}`],`
    cursor: pointer;

    padding-block: 12px;
    padding-inline: 12px;
    border-radius: var(--ant-border-radius);

    transition: background 0.15s ease;

    &:hover {
      background: var(--ant-color-fill-tertiary);
    }

    &:focus-visible {
      outline: 2px solid var(--ant-color-primary);
      outline-offset: -1px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `),rowActive:M(`acss-7vjqrc`,[`.acss-7vjqrc{background:var(--ant-color-fill-secondary);}`,`.acss-7vjqrc:hover{background:var(--ant-color-fill-secondary);}`],`
    background: var(--ant-color-fill-secondary);

    &:hover {
      background: var(--ant-color-fill-secondary);
    }
  `),statusOffline:M(`acss-gieopu`,[`.acss-gieopu{width:8px;height:8px;border:1.5px solid var(--ant-color-text-quaternary);border-radius:50%;}`],`
    width: 8px;
    height: 8px;
    border: 1.5px solid var(--ant-color-text-quaternary);
    border-radius: 50%;
  `),statusOnline:M(`acss-1bd8zsj`,[`.acss-1bd8zsj{width:8px;height:8px;border-radius:50%;background:var(--ant-color-success);box-shadow:0 0 0 3px var(--ant-color-success-bg);}`],`
    width: 8px;
    height: 8px;
    border-radius: 50%;

    background: var(--ant-color-success);
    box-shadow: 0 0 0 3px var(--ant-color-success-bg);
  `)},Bt=(0,zt.memo)(({device:e,isCurrent:t,onSelect:r,selected:i})=>{let{t:a}=n(`setting`),{t:o}=n(`common`),s=Dt()(e),c=we(Ee.userId),l=()=>L(),u=P.device.removeDevice.useMutation({onSuccess:l}),d=P.device.removeWorkspaceDevice.useMutation({onSuccess:l}),m=e.scope===`workspace`?d:u,ee=e.friendlyName||e.hostname||e.deviceId,g=e.identitySource===`fallback`,_=e.channels??[],v=_.length>0,y=v?`${a(`devices.status.onlineConnections`,{count:_.length})} · ${a(`devices.channel.connected`,{time:(0,Rt.default)(_[0]?.connectedAt??e.lastSeen).fromNow()})}`:a(`devices.lastSeen`,{time:(0,Rt.default)(e.lastSeen).fromNow()}),C=P.device.setWorkspaceDeviceVisibility.useMutation({onSuccess:()=>L()}),T=()=>S({content:(0,Y.jsx)(vt,{variant:`publish`}),okText:a(`devices.visibility.publish`),onOk:async()=>{await C.mutateAsync({deviceId:e.deviceId,visibility:`public`})},title:a(`devices.visibility.publishConfirmTitle`)}),E=()=>S({content:(0,Y.jsx)(vt,{variant:`makePrivate`}),okButtonProps:{danger:!0},okText:o(`makePrivate.confirm.ok`),onOk:async()=>{await C.mutateAsync({deviceId:e.deviceId,visibility:`private`})},title:o(`makePrivate.confirm.title`)}),te=!!c&&e.enroller?.userId===c,D=e.scope===`workspace`&&e.registered&&te?e.visibility===`private`?[{icon:(0,Y.jsx)(h,{icon:oe}),key:`publish`,label:a(`devices.visibility.publish`),onClick:T}]:[{icon:(0,Y.jsx)(h,{icon:ve}),key:`makePrivate`,label:o(`makePrivate`),onClick:E}]:[],ne=e.scope===`personal`&&e.registered?[{desc:v?void 0:a(`devices.share.offlineDesc`),disabled:!v,icon:(0,Y.jsx)(h,{icon:le}),key:`share`,label:a(`devices.share.menu`),onClick:()=>It(e)}]:[],re=()=>S({content:t?`${a(`devices.remove.confirmDesc`)}\n\n${a(`devices.remove.currentSessionWarning`)}`:a(`devices.remove.confirmDesc`),okButtonProps:{danger:!0},okText:a(`devices.actions.remove`),onOk:async()=>{await m.mutateAsync({deviceId:e.deviceId})},title:a(`devices.remove.confirm`)});return(0,Y.jsxs)(f,{horizontal:!0,align:`center`,"aria-pressed":i,className:Fe(X.row,i&&X.rowActive),gap:16,role:`button`,tabIndex:0,onClick:r,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),r())},children:[(0,Y.jsx)(`div`,{className:X.iconTile,children:mt(e.platform,20)}),(0,Y.jsxs)(f,{flex:1,gap:2,style:{minWidth:0},children:[(0,Y.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,Y.jsx)(b,{ellipsis:!0,fontSize:15,weight:500,children:ee}),(0,Y.jsx)(`span`,{className:v?X.statusOnline:X.statusOffline}),t&&(0,Y.jsx)(I,{children:a(`devices.currentBadge`)}),e.scope===`workspace`&&e.sharedFromPersonal&&(0,Y.jsx)(I,{children:a(`devices.share.sharedByTag`,{name:e.enroller?.fullName||e.enroller?.username||a(`workspaceSetting.devices.unknownEnroller`)})}),e.scope===`personal`&&!!e.sharedWorkspaces?.length&&(0,Y.jsx)(I,{children:a(`devices.share.badge`,{count:e.sharedWorkspaces.length})}),g&&(0,Y.jsx)(x,{title:a(`devices.fallbackTooltip`),children:(0,Y.jsx)(I,{icon:(0,Y.jsx)(h,{icon:_e}),children:a(`devices.fallbackBadge`)})})]}),(0,Y.jsxs)(f,{horizontal:!0,align:`center`,gap:8,style:{minWidth:0},children:[(0,Y.jsx)(b,{className:X.activity,type:`secondary`,children:y}),e.defaultCwd&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(`span`,{className:X.metaDivider}),(0,Y.jsx)(h,{icon:se,size:12,style:{color:N.colorTextQuaternary}}),(0,Y.jsx)(b,{className:X.cwd,type:`secondary`,children:e.defaultCwd})]})]})]}),(0,Y.jsxs)(f,{horizontal:!0,align:`center`,gap:8,style:{flex:`none`},children:[e.scope===`workspace`&&e.enroller&&(0,Y.jsx)(x,{title:a(`workspaceSetting.devices.enrolledBy`,{name:e.enroller.fullName||e.enroller.username||a(`workspaceSetting.devices.unknownEnroller`)}),children:(0,Y.jsx)(`span`,{onClick:e=>e.stopPropagation(),children:(0,Y.jsx)(w,{avatar:e.enroller.avatar??void 0,size:20})})}),s&&(0,Y.jsx)(`span`,{onClick:e=>e.stopPropagation(),children:(0,Y.jsx)(Ve,{placement:`bottomRight`,items:[...D,...ne,{danger:!0,icon:(0,Y.jsx)(h,{icon:pe}),key:`remove`,label:a(`devices.actions.remove`),onClick:re}],children:(0,Y.jsx)(p,{icon:ce})})})]})]})}),Bt.displayName=`DeviceItem`})),Z,Q,$,Ht,Ut,Wt,Gt,Kt=e((()=>{j(),be(),C(),g(),m(),_(),F(),A(),Z=t(s()),a(),yt(),xt(),ze(),jt(),Vt(),pt(),Q=t(c()),$={badge:M(`acss-64633r`,[`.acss-64633r{padding-block:1px;padding-inline:8px;border-radius:999px;font-size:var(--ant-font-size-sm);font-weight:500;color:var(--ant-color-primary);background:var(--ant-color-primary-bg);}`],`
    padding-block: 1px;
    padding-inline: 8px;
    border-radius: 999px;

    font-size: var(--ant-font-size-sm);
    font-weight: 500;
    color: var(--ant-color-primary);

    background: var(--ant-color-primary-bg);
  `),capabilityCard:M(`acss-1xwtyey`,[`.acss-1xwtyey{padding:16px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);background:var(--ant-color-bg-container);}`],`
    padding: 16px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);
    background: var(--ant-color-bg-container);
  `),capabilityIcon:M(`acss-6k93et`,[`.acss-6k93et{display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:var(--ant-border-radius);color:var(--ant-color-text-secondary);background:var(--ant-color-fill-tertiary);}`],`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;
    border-radius: var(--ant-border-radius);

    color: var(--ant-color-text-secondary);

    background: var(--ant-color-fill-tertiary);
  `),emptyCard:M(`acss-aqr4ua`,[`.acss-aqr4ua{overflow:hidden;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);background:var(--ant-color-bg-container);}`],`
    overflow: hidden;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);
    background: var(--ant-color-bg-container);
  `),plainCol:M(`acss-1ec64qk`,[`.acss-1ec64qk{overflow:hidden;min-width:0;border-radius:var(--ant-border-radius-lg);}`],`
    overflow: hidden;
    min-width: 0;
    border-radius: var(--ant-border-radius-lg);
  `),emptyHero:M(`acss-1d9pzen`,[`.acss-1d9pzen{padding-block:40px;padding-inline:32px;text-align:center;background:var(--ant-color-fill-quaternary);}`],`
    padding-block: 40px;
    padding-inline: 32px;
    text-align: center;
    background: var(--ant-color-fill-quaternary);
  `),heroIcon:M(`acss-u9eaca`,[`.acss-u9eaca{display:flex;align-items:center;justify-content:center;width:56px;height:56px;border-radius:var(--ant-border-radius-lg);color:var(--ant-color-text);background:var(--ant-color-fill-secondary);}`],`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 56px;
    height: 56px;
    border-radius: var(--ant-border-radius-lg);

    color: var(--ant-color-text);

    background: var(--ant-color-fill-secondary);
  `),option:M(`acss-2ezgjh`,[`.acss-2ezgjh{cursor:pointer;padding:20px;background:var(--ant-color-bg-container);transition:background 0.15s ease;}`,`.acss-2ezgjh:hover{background:var(--ant-color-fill-tertiary);}`,`.acss-2ezgjh:focus-visible{outline:2px solid var(--ant-color-primary);outline-offset:-2px;}`,`@media (prefers-reduced-motion: reduce){.acss-2ezgjh{transition:none;}}`],`
    cursor: pointer;
    padding: 20px;
    background: var(--ant-color-bg-container);
    transition: background 0.15s ease;

    &:hover {
      background: var(--ant-color-fill-tertiary);
    }

    &:focus-visible {
      outline: 2px solid var(--ant-color-primary);
      outline-offset: -2px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `),optionGrid:M(`acss-1vndrm7`,[`.acss-1vndrm7{display:grid;grid-template-columns:1fr 1fr;gap:1px;border-block-start:1px solid var(--ant-color-border-secondary);background:var(--ant-color-border-secondary);}`],`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;

    border-block-start: 1px solid var(--ant-color-border-secondary);

    background: var(--ant-color-border-secondary);
  `),optionIcon:M(`acss-rkil3i`,[`.acss-rkil3i{display:flex;flex-shrink:0;align-items:center;justify-content:center;width:40px;height:40px;border-radius:var(--ant-border-radius);color:var(--ant-color-text-secondary);background:var(--ant-color-fill-tertiary);}`],`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    border-radius: var(--ant-border-radius);

    color: var(--ant-color-text-secondary);

    background: var(--ant-color-fill-tertiary);
  `),detailCol:M(`acss-hfx9b1`,[`.acss-hfx9b1{align-self:stretch;min-width:0;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);background:var(--ant-color-bg-container);}`],`
    align-self: stretch;

    min-width: 0;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);

    background: var(--ant-color-bg-container);
  `),listCol:M(`acss-15a49e2`,[`.acss-15a49e2{overflow:hidden;min-width:0;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);background:var(--ant-color-bg-container);}`],`
    overflow: hidden;

    min-width: 0;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);

    background: var(--ant-color-bg-container);
  `),listScroll:M(`acss-mwp6yr`,[`.acss-mwp6yr{overflow-y:auto;max-height:480px;}`],`
    overflow-y: auto;

    /* Cap the list so long fleets (servers / CLI agents) stay scrollable instead
       of pushing the page — pairs with the detail panel sitting beside it. */
    max-height: 480px;
  `)},Ht=(0,Z.memo)(({icon:e,title:t,desc:n,badge:r,onClick:i})=>(0,Q.jsxs)(f,{horizontal:!0,align:`flex-start`,className:$.option,gap:16,role:`button`,tabIndex:0,onClick:i,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),i())},children:[(0,Q.jsx)(`span`,{className:$.optionIcon,children:(0,Q.jsx)(h,{icon:e,size:20})}),(0,Q.jsxs)(f,{flex:1,gap:4,style:{minWidth:0},children:[(0,Q.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,Q.jsx)(b,{weight:500,children:t}),r&&(0,Q.jsx)(`span`,{className:$.badge,children:r})]}),(0,Q.jsx)(b,{color:N.colorTextTertiary,fontSize:12,children:n})]}),(0,Q.jsx)(h,{icon:de,size:16,style:{color:N.colorTextQuaternary}})]})),Ut=(0,Z.memo)(()=>{let{t:e}=n(`setting`),t=[{desc:e(`devices.capabilities.files.desc`),icon:me,title:e(`devices.capabilities.files.title`)},{desc:e(`devices.capabilities.commands.desc`),icon:k,title:e(`devices.capabilities.commands.title`)},{desc:e(`devices.capabilities.tools.desc`),icon:he,title:e(`devices.capabilities.tools.title`)}];return(0,Q.jsxs)(f,{gap:16,children:[(0,Q.jsx)(b,{fontSize:12,type:`secondary`,weight:500,children:e(`devices.capabilities.title`)}),(0,Q.jsx)(f,{horizontal:!0,gap:16,children:t.map(e=>(0,Q.jsxs)(f,{className:$.capabilityCard,flex:1,gap:12,children:[(0,Q.jsx)(`span`,{className:$.capabilityIcon,children:(0,Q.jsx)(h,{icon:e.icon,size:18})}),(0,Q.jsxs)(f,{gap:4,children:[(0,Q.jsx)(b,{weight:500,children:e.title}),(0,Q.jsx)(b,{color:N.colorTextTertiary,fontSize:12,children:e.desc})]})]},e.title))})]})}),Wt=(0,Z.memo)(({bordered:e})=>(0,Q.jsx)(f,{className:e?$.listCol:$.plainCol,flex:1,children:(0,Q.jsx)(f,{padding:e?4:0,children:(0,Q.jsx)(St,{})})})),Gt=(0,Z.memo)(e=>{let{inlineDetail:t=!0,onConnect:r,onSelectedDeviceChange:i,scope:a,selectedDeviceId:o,visibility:s}=e,{t:c}=n(`setting`),l=a===`workspace`,{data:u,isLoading:d,error:m,mutate:ee}=dt(),g=(u??[]).filter(e=>e.scope===a&&(!s||(e.visibility??`public`)===s)),_=Se(e=>e.useFetchGatewayDeviceInfo);Se(e=>e.gatewayDeviceInfo),_();let[v,y]=(0,Z.useState)(),x=i?o:v,S=e=>{if(i){i(e);return}y(e)},C=l&&s===`private`,w=(0,Q.jsxs)(f,{gap:32,children:[(0,Q.jsxs)(f,{className:l?$.emptyCard:$.plainCol,children:[(0,Q.jsxs)(f,{align:`center`,className:$.emptyHero,gap:12,children:[(0,Q.jsx)(`span`,{className:$.heroIcon,children:(0,Q.jsx)(h,{icon:l&&!C?ie:ge,size:28})}),(0,Q.jsx)(b,{fontSize:18,weight:600,children:c(l?`workspaceSetting.devices.heroTitle`:`devices.empty.title`)}),(0,Q.jsx)(b,{style:{maxWidth:440},type:`secondary`,children:c(l?`workspaceSetting.devices.heroDesc`:`devices.empty.desc`)}),l&&(0,Q.jsx)(p,{icon:(0,Q.jsx)(h,{icon:k}),style:{marginBlockStart:8},type:`primary`,onClick:()=>r(`cli`),children:c(`devices.empty.methodCli.title`)})]}),!l&&(0,Q.jsxs)(`div`,{className:$.optionGrid,children:[(0,Q.jsx)(Ht,{badge:c(`devices.empty.methodDesktop.badge`),desc:c(`devices.empty.methodDesktop.desc`),icon:ge,title:c(`devices.empty.methodDesktop.title`),onClick:()=>r(`desktop`)}),(0,Q.jsx)(Ht,{desc:c(`devices.empty.methodCli.desc`),icon:k,title:c(`devices.empty.methodCli.title`),onClick:()=>r(`cli`)})]})]}),!l&&(0,Q.jsx)(Ut,{})]}),T=x?g.find(e=>e.deviceId===x):void 0,E=e=>!1;return(0,Q.jsx)(bt,{data:u,empty:w,error:m,errorVariant:`block`,isEmpty:g.length===0,isLoading:d,loading:(0,Q.jsx)(Wt,{bordered:l}),onRetry:()=>ee(),children:(0,Q.jsxs)(f,{horizontal:!0,align:`flex-start`,gap:16,children:[(0,Q.jsx)(f,{className:l?$.listCol:$.plainCol,flex:1,children:(0,Q.jsx)(f,{className:$.listScroll,gap:2,paddingBlock:4,paddingInline:l?4:0,children:g.map(e=>(0,Q.jsx)(Bt,{device:e,isCurrent:E(e.deviceId),selected:e.deviceId===x,onSelect:()=>S(x===e.deviceId?void 0:e.deviceId)},e.deviceId))})}),t&&T&&(0,Q.jsx)(f,{className:$.detailCol,flex:1,children:(0,Q.jsx)(At,{device:T,isCurrent:E(T.deviceId),onClose:()=>S()},T.deviceId)})]})})}),Gt.displayName=`DeviceManager`})),qt=e((()=>{Tt(),jt(),Kt(),pt()}));export{jt as a,At as i,Gt as n,wt as o,Kt as r,Tt as s,qt as t};