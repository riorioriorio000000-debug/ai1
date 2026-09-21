import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,V as r,j as i,z as a}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as o,T as s,a as c,i as l}from"../vendor/vendor-react-B9HSWrpN.js";import{B as u,Kt as d,Mt as f,Nt as p,Xn as m,Yn as h,Zn as g,at as _,h as v,i as y,it as b,qt as x,r as S,v as ee,z as C}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Mt as te,P as w,r as ne}from"../vendor/vendor-antd-BWSxhuJE.js";import{A as re,Ml as ie,Qr as ae,c as oe,ig as se,t as T,ua as ce,ug as le}from"../vendor/vendor-icons-vienkZi5.js";import{Br as ue,Ur as de,c as fe}from"./app-const-BpgKVRXh.js";import{Af as pe,An as me,At as he,FD as E,Ff as ge,Gt as _e,ID as D,If as ve,MA as O,On as k,Wt as ye,Zf as be,_p as xe,aS as Se,gF as Ce,jf as we,jn as A,kn as j,kt as Te,nE as Ee,rE as De,sS as Oe,uF as ke,vp as Ae}from"./index-w64_zsxD.js";import{n as je,t as Me}from"./Tag-C95BKTI7.js";import{n as M,t as Ne}from"./resourcePermission-D_siARnr.js";import{n as Pe,t as Fe}from"./Empty-Dam8NCz3.js";import{t as Ie}from"./_virtual_lobe-ui-named_base-ui_useModalContext-CvZy-G5G.js";import{l as Le,t as Re}from"./es-Zenbyje4.js";import{n as ze,t as Be}from"./SearchBar-D4sP5Y6j.js";import{n as N,t as P}from"./AsyncError-B3Va32IA.js";import{n as Ve,t as He}from"./useWorkspaceAwareNavigate-BbajQ7ta.js";import{n as Ue,r as We}from"./forbiddenError-o_FsgPa2.js";import{n as Ge,t as Ke}from"./Form-DEzxLt7J.js";import{n as qe,t as Je}from"./useFetchWorkspaceMembers-DongldCO.js";import{n as Ye,r as Xe}from"./useWorkspaceMembers-BwDEraOr.js";import{n as Ze,t as Qe}from"./useResourcePermission-C3CVx7gd.js";import{i as $e,n as et,r as tt,t as nt}from"./useAccessLevelOptions-CDYJD1Xf.js";var F,rt,I,it=e((()=>{O(),F=t(o()),i(),Se(),Ne(),rt=`resource-collaborators`,I=(e,t,r)=>{let{t:i}=n(`setting`),a=r?.enabled??!0,[o,s]=(0,F.useState)(!1),{data:c,error:l,isLoading:u,mutate:d}=Oe(t&&a?[rt,e,t]:null,()=>M.listCollaborators(e,t)),f=(0,F.useCallback)(async e=>{s(!0);try{return await e(),await d(),!0}catch(e){return console.error(`[ResourceCollaborators]`,e),h.error(e?.message||i(`permission.updateError`)),!1}finally{s(!1)}},[d,i]);return{addCollaborators:(0,F.useCallback)((n,r)=>!t||n.length===0?Promise.resolve(!1):f(()=>M.addCollaborators(e,t,n,r)),[f,e,t]),collaborators:c,error:l,isLoading:u,mutate:d,mutating:o,removeCollaborator:(0,F.useCallback)(async n=>{if(!t)return;let r=c;s(!0),await d((r??[]).filter(e=>e.userId!==n),!1);try{await M.removeCollaborator(e,t,n),await d()}catch(e){await d(r,!1),console.error(`[ResourceCollaborators]`,e),h.error(e?.message||i(`permission.updateError`))}finally{s(!1)}},[c,d,i,e,t])}}})),L,R,z,B,at,V,H,ot=e((()=>{E(),fe(),Pe(),x(),g(),ze(),y(),p(),A(),j(),_(),O(),Ie(),Re(),ke(),T(),L=t(o()),i(),Je(),Ye(),it(),Qe(),R=t(s()),z={footer:D(`acss-1hn8o1v`,[`.acss-1hn8o1v{padding-block:12px;padding-inline:20px;border-block-start:1px solid var(--ant-color-border-secondary);}`],`
    padding-block: 12px;
    padding-inline: 20px;
    border-block-start: 1px solid var(--ant-color-border-secondary);
  `),header:D(`acss-jberzh`,[`.acss-jberzh{padding-block:4px 12px;padding-inline:20px;}`],`
    padding-block: 4px 12px;
    padding-inline: 20px;
  `),list:D(`acss-kmihg5`,[`.acss-kmihg5{-webkit-user-select:none;user-select:none;overflow-y:auto;height:clamp(240px, calc(100dvh - 320px), 360px);padding-block:0 8px;padding-inline:12px;}`],`
    user-select: none;

    overflow-y: auto;

    /* Fill toward 360px, but yield on short viewports so the footer never
       leaves the screen; 240px keeps ~4 rows visible as the floor. */
    height: clamp(240px, calc(100dvh - 320px), 360px);
    padding-block: 0 8px;
    padding-inline: 12px;
  `),row:D(`acss-1f8i7gy`,[`.acss-1f8i7gy{cursor:pointer;margin-block:2px;padding-block:10px;padding-inline:12px;border-radius:var(--ant-border-radius);transition:background 0.2s ease;}`,`.acss-1f8i7gy:hover{background:var(--ant-color-fill-tertiary);}`],`
    cursor: pointer;

    margin-block: 2px;
    padding-block: 10px;
    padding-inline: 12px;
    border-radius: var(--ant-border-radius);

    transition: background 0.2s ease;

    &:hover {
      background: var(--ant-color-fill-tertiary);
    }
  `),rowIndicator:D(`acss-l2ktf1`,[`.acss-l2ktf1{display:inline-flex;align-items:center;justify-content:center;margin-inline-start:auto;padding-inline-start:8px;color:var(--ant-color-primary);}`],`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin-inline-start: auto;
    padding-inline-start: 8px;

    color: var(--ant-color-primary);
  `),rowSelected:D(`acss-1gw7uqf`,[`.acss-1gw7uqf{background:var(--ant-color-fill-quaternary);}`],`
    background: var(--ant-color-fill-quaternary);
  `)},B=e=>e.user?.fullName||e.user?.username||e.user?.email||e.userId,at=new Set([`admin`,`owner`]),V=(0,L.memo)(({member:e,onToggle:t,selected:n})=>{let r=(0,L.useRef)(null),i=Le(r),a=B(e),o=e.user?.email;return(0,R.jsxs)(d,{horizontal:!0,align:`center`,"aria-selected":n,className:Ce(z.row,n&&z.rowSelected),gap:12,ref:r,role:`option`,tabIndex:0,onClick:()=>t(e.userId),onKeyDown:n=>{n.key!==`Enter`&&n.key!==` `||(n.preventDefault(),t(e.userId))},children:[(0,R.jsx)(S,{animation:i,avatar:e.user?.avatar||void 0,size:40,title:a}),(0,R.jsxs)(d,{flex:1,gap:2,style:{minWidth:0},children:[(0,R.jsx)(b,{ellipsis:!0,weight:500,children:a}),o&&o!==a?(0,R.jsx)(b,{ellipsis:!0,fontSize:12,type:`secondary`,children:o}):null]}),n?(0,R.jsx)(`span`,{className:z.rowIndicator,children:(0,R.jsx)(m,{icon:le,size:`small`})}):null]})}),V.displayName=`AddCollaboratorMemberRow`,H=(0,L.memo)(({grantLevel:e,resourceId:t,resourceType:r})=>{let{t:i}=n(`setting`),{close:a}=ee(),{isLoading:o}=qe(),s=Xe(),{data:c}=Ze(r,t),{addCollaborators:l,collaborators:u,mutating:p}=I(r,t),[m,g]=(0,L.useState)(``),[_,v]=(0,L.useState)([]),y=(0,L.useMemo)(()=>{let e=new Set((u??[]).map(e=>e.userId));return s.filter(t=>t.role&&at.has(t.role)||t.userId===c?.creatorId?!1:!e.has(t.userId)).sort((e,t)=>B(e).localeCompare(B(t)))},[s,u,c?.creatorId]),x=(0,L.useMemo)(()=>{let e=m.trim().toLowerCase();return e?y.filter(t=>[t.user?.fullName,t.user?.username,t.user?.email].filter(Boolean).some(t=>t.toLowerCase().includes(e))):y},[y,m]),S=e=>{if(_.includes(e)){v(t=>t.filter(t=>t!==e));return}if(_.length>=100){h.warning(i(`permission.collaborators.addModal.selectionLimit`,{count:100}));return}v(t=>[...t,e])},C=async()=>{await l(_,e)&&a()},te=o&&s.length===0,w=x.length===0&&y.length>0;return(0,R.jsxs)(d,{children:[(0,R.jsx)(d,{className:z.header,children:(0,R.jsx)(Be,{autoFocus:!0,placeholder:i(`permission.collaborators.addModal.search`),value:m,variant:`filled`,onChange:e=>g(e.target.value)})}),(0,R.jsx)(d,{"aria-multiselectable":!0,"aria-label":i(`permission.collaborators.addModal.title`),className:z.list,role:`listbox`,children:te?[0,1,2].map(e=>(0,R.jsxs)(d,{horizontal:!0,align:`center`,className:z.row,gap:12,children:[(0,R.jsx)(me,{size:40}),(0,R.jsx)(k,{style:{marginBottom:0,width:180}})]},e)):x.length===0?(0,R.jsx)(Fe,{icon:w?ae:re,paddingBlock:48,description:i(w?`permission.collaborators.addModal.noMatch`:`permission.collaborators.addModal.empty`)}):x.map(e=>(0,R.jsx)(V,{member:e,selected:_.includes(e.userId),onToggle:S},e.userId))}),(0,R.jsxs)(d,{horizontal:!0,align:`center`,className:z.footer,gap:8,children:[(0,R.jsx)(d,{flex:1,children:_.length>0?(0,R.jsx)(b,{fontSize:13,type:`secondary`,children:i(`permission.collaborators.addModal.selectedCount`,{count:_.length})}):null}),(0,R.jsx)(f,{onClick:()=>a(),children:i(`cancel`,{ns:`common`})}),(0,R.jsx)(f,{disabled:_.length===0,loading:p,type:`primary`,onClick:C,children:_.length>0?i(`permission.collaborators.addModal.confirmCount`,{count:_.length}):i(`permission.collaborators.addModal.confirm`)})]})]})}),H.displayName=`AddCollaboratorsContent`})),st,U,W,ct,G,lt=e((()=>{E(),x(),u(),y(),A(),j(),je(),_(),ne(),T(),st=t(o()),i(),N(),nt(),it(),U=t(s()),W={empty:D(`acss-10ltsdn`,[`.acss-10ltsdn{padding-block:12px;font-size:14px;color:var(--ant-color-text-description);}`],`
    padding-block: 12px;
    font-size: 14px;
    color: var(--ant-color-text-description);
  `),row:D(`acss-1jd0040`,[`.acss-1jd0040{padding-block:8px;}`],`
    padding-block: 8px;
  `)},ct=e=>e.user?.fullName||e.user?.username||e.user?.email||e.userId,G=(0,st.memo)(({resourceId:e,resourceType:t})=>{let{t:r}=n(`setting`),{collaborators:i,error:a,isLoading:o,mutate:s,mutating:c,removeCollaborator:l}=I(t,e),u=et({isPrivate:!1,resourceType:t});return a?(0,U.jsx)(P,{error:a,variant:`inline`,onRetry:()=>s()}):o?(0,U.jsx)(d,{gap:4,children:[0,1].map(e=>(0,U.jsxs)(d,{horizontal:!0,align:`center`,className:W.row,gap:12,children:[(0,U.jsx)(me,{size:32}),(0,U.jsx)(k,{style:{marginBottom:0,width:160}})]},e))}):!i||i.length===0?(0,U.jsx)(`div`,{className:W.empty,children:r(`permission.collaborators.empty`)}):(0,U.jsx)(d,{children:i.map(e=>{let t=ct(e),n=e.user?.email,i=u.find(t=>t.value===e.accessLevel)?.label;return(0,U.jsxs)(d,{horizontal:!0,align:`center`,className:W.row,gap:12,children:[(0,U.jsx)(S,{avatar:e.user?.avatar||void 0,size:32,title:t}),(0,U.jsxs)(d,{flex:1,style:{minWidth:0},children:[(0,U.jsx)(b,{ellipsis:!0,weight:500,children:t}),n&&n!==t?(0,U.jsx)(b,{ellipsis:!0,fontSize:12,type:`secondary`,children:n}):null]}),i?(0,U.jsx)(Me,{children:i}):null,(0,U.jsx)(w,{arrow:!1,cancelText:r(`cancel`,{ns:`common`}),okButtonProps:{danger:!0},okText:r(`permission.collaborators.remove`),placement:`topRight`,title:r(`permission.collaborators.removeConfirmTitle`,{name:t}),onConfirm:()=>void l(e.userId),children:(0,U.jsx)(C,{disabled:c,icon:oe,size:`small`,title:r(`permission.collaborators.remove`)})})]},e.userId)})})}),G.displayName=`CollaboratorList`})),K,q,J,ut,Y,dt=e((()=>{g(),p(),be(),a(),T(),K=t(o()),i(),ot(),q=t(s()),lt(),J={knowledgeBase:`edit`},ut=({grantLevel:e,resourceId:t,resourceType:n})=>v({content:(0,q.jsx)(H,{grantLevel:e,resourceId:t,resourceType:n}),footer:null,maskClosable:!0,styles:{content:{overflow:`hidden`,padding:0}},title:r(`permission.collaborators.addModal.title`,{ns:`setting`}),width:`min(90vw, 520px)`}),Y=(0,K.memo)(({resourceId:e,resourceType:t})=>{let{t:r}=n(`setting`),i=J[t],a=(0,K.useCallback)(()=>{i&&ut({grantLevel:i,resourceId:e,resourceType:t})},[i,e,t]);return i?(0,q.jsx)(f,{icon:(0,q.jsx)(m,{icon:ce}),size:`small`,onClick:a,children:r(`permission.collaborators.add`)}):null}),Y.displayName=`AddCollaboratorButton`})),X,Z,Q,$,ft=e((()=>{E(),x(),Ge(),g(),Ae(),_(),O(),ne(),T(),X=t(o()),i(),l(),ge(),N(),De(),de(),he(),_e(),He(),we(),Ue(),dt(),$e(),nt(),Qe(),Z=t(s()),Q={body:D(`acss-15qyxrk`,[`.acss-15qyxrk{position:relative;overflow-y:auto;display:flex;}`],`
    position: relative;
    overflow-y: auto;
    display: flex;
  `),breadcrumb:D(`acss-7dnjw9`,[`.acss-7dnjw9 ol{align-items:center;}`,`.acss-7dnjw9 li,.acss-7dnjw9 .ant-breadcrumb-link,.acss-7dnjw9 .ant-breadcrumb-link>a{display:flex;align-items:center;}`],`
    ol {
      align-items: center;
    }

    li,
    .ant-breadcrumb-link,
    .ant-breadcrumb-link > a {
      display: flex;
      align-items: center;
    }
  `),rowIcon:D(`acss-117lods`,[`.acss-117lods{display:flex;align-items:center;align-self:flex-start;height:1em;}`],`
    display: flex;
    align-items: center;
    align-self: flex-start;
    height: 1em;
  `)},$=(0,X.memo)(({copy:e,redirectPath:t,resourceHomePath:r,resourceId:i,resourceName:a,resourceType:o,showCollaborators:s})=>{let{t:l}=n(`setting`),u=Ve(),f=ve(),{data:p,error:g,isLoading:_,mutate:v,setAccessLevel:y,updating:x}=Ze(o,i),S=p?.visibility===`private`,ee=et({accessLevel:p?.accessLevel,isPrivate:S,resourceType:o}),C=!!g&&We(g)||!_&&!!p&&!p.canManage;(0,X.useEffect)(()=>{C&&(h.error(l(`permission.noManagePermission`)),u(t,{replace:!0}))},[C,u,t,l]);let w=[{children:[{avatar:(0,Z.jsx)(`span`,{className:Q.rowIcon,children:(0,Z.jsx)(m,{icon:re,size:16})}),children:(0,Z.jsx)(tt,{loading:x,options:ee,value:p?.accessLevel,onChange:e=>void y(e)}),desc:S?e.privateHint:e.generalAccessDesc,label:l(`permission.page.accessLevelLabel`)}],title:l(`permission.page.memberGroup`)}];return s&&w.push({children:(0,Z.jsx)(G,{resourceId:i,resourceType:o}),desc:e.collaboratorsDesc,extra:(0,Z.jsx)(Y,{resourceId:i,resourceType:o}),title:l(`permission.collaborators.title`)}),(0,Z.jsxs)(d,{height:`100%`,width:`100%`,children:[(0,Z.jsx)(Te,{styles:{left:{paddingInlineStart:24}},left:(0,Z.jsx)(te,{className:Q.breadcrumb,separator:(0,Z.jsx)(m,{icon:se,size:14}),items:[...a?[{title:(0,Z.jsx)(c,{to:pe(r,f),children:(0,Z.jsx)(b,{ellipsis:!0,as:`span`,color:`inherit`,style:{maxWidth:200},weight:500,children:a})})}]:[],{title:(0,Z.jsx)(b,{as:`span`,color:`inherit`,weight:500,children:l(`permission.page.title`)})}]})}),(0,Z.jsx)(d,{className:Q.body,flex:1,width:`100%`,children:(0,Z.jsx)(ye,{children:(0,Z.jsx)(d,{gap:16,paddingBlock:16,children:g&&!C?(0,Z.jsx)(P,{error:g,variant:`inline`,onRetry:()=>v()}):_||C?(0,Z.jsx)(Ee,{debugId:`ResourceAccessPage`}):(0,Z.jsxs)(Z.Fragment,{children:[S?(0,Z.jsx)(xe,{icon:(0,Z.jsx)(m,{icon:ie}),style:{width:`100%`},title:e.privateNotice,type:`info`}):null,(0,Z.jsx)(Ke,{items:w,itemsType:`group`,...ue})]})})})})]})}),$.displayName=`ResourceAccessPage`}));export{ft as n,$ as t};