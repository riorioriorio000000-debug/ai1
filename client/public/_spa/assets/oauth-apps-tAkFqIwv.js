import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,Q as r,V as i,j as a,z as o}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as s,T as c,i as l,v as u}from"../vendor/vendor-react-B9HSWrpN.js";import{B as d,Kt as f,Mt as p,Nt as m,X as h,Xn as g,Yn as ee,Z as _,Zn as v,at as y,h as b,i as te,it as x,m as S,qt as C,r as ne,v as re,z as ie}from"../vendor/vendor-ui-core-BmtybT1r.js";import{et as w,nt as ae,r as T}from"../vendor/vendor-antd-BWSxhuJE.js";import{Ap as oe,Av as se,Ku as ce,Ma as le,Wt as ue,ca as de,ig as fe,mm as pe,mt as E,oa as me,t as D,ua as he,ug as ge}from"../vendor/vendor-icons-vienkZi5.js";import{Dm as _e,Dn as O,En as k,FD as A,Gp as ve,ID as j,Jp as ye,Kf as be,MA as xe,Tm as Se,Zf as Ce,Zh as M,_p as we,aS as Te,am as Ee,gF as De,ix as Oe,ng as N,qf as P,rg as F,sS as ke,uF as Ae,vS as je,vp as Me,wx as Ne,yS as Pe}from"./index-w64_zsxD.js";import{n as Fe,t as Ie}from"./CopyButton-BjxUZD85.js";import{n as Le,t as Re}from"./DropdownMenu-1ae8j9bI.js";import{n as ze,t as I}from"./Tag-C95BKTI7.js";import{n as Be,t as Ve}from"./TextArea-D_Rfq5JU.js";import{n as L,t as R}from"./Input-gdUxluEJ.js";import{t as He}from"./_virtual_lobe-ui-named_base-ui_useModalContext-CvZy-G5G.js";import{n as Ue,t as We}from"./useWorkspaceAwareNavigate-BbajQ7ta.js";import{t as Ge}from"./_virtual_lobe-ui-named_base-ui_confirmModal-B6WREEdZ.js";import{n as Ke,t as qe}from"./404-a8LvU2j2.js";import{n as Je,t as Ye}from"./SettingHeader-PrbzMVzI.js";import{n as Xe,t as z}from"./AvatarUpload-C3Q_umaJ.js";var Ze,B,V,Qe,$e,et=e((()=>{A(),C(),v(),L(),Be(),m(),y(),He(),T(),Ae(),D(),Ze=t(s()),a(),Xe(),B=t(c()),V={typeCard:j(`acss-1bzn3ny`,[`.acss-1bzn3ny{cursor:pointer;position:relative;flex:1;padding:14px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);transition:border-color 0.15s ease,background 0.15s ease;}`,`.acss-1bzn3ny:hover{border-color:var(--ant-color-border);}`,`.acss-1bzn3ny:focus-visible{outline:2px solid var(--ant-color-border);outline-offset:2px;}`],`
    cursor: pointer;

    position: relative;

    flex: 1;

    padding: 14px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);

    transition:
      border-color 0.15s ease,
      background 0.15s ease;

    &:hover {
      border-color: var(--ant-color-border);
    }

    &:focus-visible {
      outline: 2px solid var(--ant-color-border);
      outline-offset: 2px;
    }
  `),typeCardSelected:j(`acss-yjbfsg`,[`.acss-yjbfsg{border-color:var(--ant-color-text);background:var(--ant-color-fill-quaternary);}`,`.acss-yjbfsg:hover{border-color:var(--ant-color-text);}`],`
    border-color: var(--ant-color-text);
    background: var(--ant-color-fill-quaternary);

    &:hover {
      border-color: var(--ant-color-text);
    }
  `),typeCheck:j(`acss-1x7ymeb`,[`.acss-1x7ymeb{position:absolute;inset-block-start:12px;inset-inline-end:12px;color:var(--ant-color-text);}`],`
    position: absolute;
    inset-block-start: 12px;
    inset-inline-end: 12px;
    color: var(--ant-color-text);
  `),typeDesc:j(`acss-h8usbo`,[`.acss-h8usbo{font-size:12px;line-height:1.5;color:var(--ant-color-text-secondary);}`],`
    font-size: 12px;
    line-height: 1.5;
    color: var(--ant-color-text-secondary);
  `),typeIcon:j(`acss-botyom`,[`.acss-botyom{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:var(--ant-border-radius);color:var(--ant-color-text);background:var(--ant-color-fill-tertiary);}`],`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;
    border-radius: var(--ant-border-radius);

    color: var(--ant-color-text);

    background: var(--ant-color-fill-tertiary);
  `)},Qe=({onChange:e,options:t,value:n})=>(0,B.jsx)(f,{horizontal:!0,gap:12,role:`radiogroup`,children:t.map(t=>{let r=t.value===n;return(0,B.jsxs)(f,{"aria-checked":r,className:De(V.typeCard,r&&V.typeCardSelected),gap:10,role:`radio`,tabIndex:0,onClick:()=>e?.(t.value),onKeyDown:n=>{(n.key===`Enter`||n.key===` `)&&(n.preventDefault(),e?.(t.value))},children:[(0,B.jsx)(`span`,{className:V.typeIcon,children:(0,B.jsx)(g,{icon:t.icon,size:18})}),(0,B.jsx)(x,{weight:500,children:t.title}),(0,B.jsx)(`span`,{className:V.typeDesc,children:t.description}),r&&(0,B.jsx)(g,{className:V.typeCheck,icon:ge,size:16})]},t.value)})}),$e=({onSubmit:e})=>{let{t}=n(`auth`),{close:r,setCanDismissByClickOutside:i}=re(),[a]=w.useForm(),o=w.useWatch(`type`,a),[s,c]=(0,Ze.useState)(!1),[l,u]=(0,Ze.useState)(),d=()=>i(!1),m=e=>{let t=new FileReader;t.addEventListener(`load`,()=>{u(t.result),d()}),t.readAsDataURL(e)},h=async t=>{c(!0);try{await e({description:t.description,logoUri:l,name:t.name,type:t.type}),r()}finally{c(!1)}},g={marginBottom:0};return(0,B.jsx)(w,{colon:!1,form:a,initialValues:{type:`device`},layout:`vertical`,onFinish:h,onValuesChange:d,children:(0,B.jsxs)(f,{gap:16,children:[(0,B.jsx)(w.Item,{label:t(`oauthApp.form.logo.label`),style:g,children:(0,B.jsx)(z,{title:t(`oauthApp.form.name.label`),value:l,onUpload:m})}),(0,B.jsx)(w.Item,{label:t(`oauthApp.form.name.label`),name:`name`,rules:[{message:t(`oauthApp.validation.nameRequired`),required:!0}],style:g,children:(0,B.jsx)(R,{placeholder:t(`oauthApp.form.name.placeholder`)})}),(0,B.jsx)(w.Item,{label:t(`oauthApp.form.type.label`),name:`type`,style:g,extra:(0,B.jsxs)(f,{gap:2,style:{marginTop:8},children:[(0,B.jsx)(`span`,{children:t(`oauthApp.form.type.immutable`)}),o===`web`&&(0,B.jsx)(`span`,{children:t(`oauthApp.form.type.webNext`)})]}),children:(0,B.jsx)(Qe,{options:[{description:t(`oauthApp.form.type.deviceDesc`),icon:ue,title:t(`oauthApp.type.device`),value:`device`},{description:t(`oauthApp.form.type.webDesc`),icon:ce,title:t(`oauthApp.type.web`),value:`web`}]})}),(0,B.jsx)(w.Item,{label:t(`oauthApp.form.description.label`),name:`description`,style:g,children:(0,B.jsx)(Ve,{placeholder:t(`oauthApp.form.description.placeholder`),rows:3})}),(0,B.jsx)(p,{block:!0,htmlType:`submit`,loading:s,type:`primary`,children:t(`oauthApp.form.submit`)})]})})}})),tt,nt,rt=e((()=>{Ce(),o(),et(),tt=t(c()),nt=e=>b({content:(0,tt.jsx)($e,{...e}),footer:null,maskClosable:!0,styles:{content:{paddingBlock:16,paddingInline:24}},title:i(`oauthApp.form.title`,{ns:`auth`}),width:`min(90vw, 560px)`})})),it,at=e((()=>{it=e=>null})),H,ot,st,ct=e((()=>{A(),d(),xe(),T(),D(),a(),H=t(c()),ot={id:j(`acss-xqiibm`,[`.acss-xqiibm{overflow:hidden;font-family:var(--ant-font-family-code);font-size:13px;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    font-family: var(--ant-font-family-code);
    font-size: 13px;
    text-overflow: ellipsis;
    white-space: nowrap;
  `)},st=({clientId:e})=>{let{t}=n(`auth`);return(0,H.jsxs)(ae,{align:`center`,gap:4,children:[(0,H.jsx)(`span`,{className:ot.id,children:e}),(0,H.jsx)(ie,{icon:pe,size:`small`,title:t(`oauthApp.copy.tooltip`),onClick:async()=>{try{await navigator.clipboard.writeText(e),ee.success(t(`oauthApp.copy.success`))}catch{ee.error(t(`oauthApp.copy.error`))}}})]})}})),U,lt,ut,dt,ft=e((()=>{A(),Fe(),C(),Me(),Ce(),y(),o(),a(),U=t(c()),lt={secret:j(`acss-v6q89j`,[`.acss-v6q89j{padding-block:8px;padding-inline:12px;border-radius:var(--ant-border-radius);font-family:var(--ant-font-family-code);font-size:13px;overflow-wrap:anywhere;background:var(--ant-color-fill-tertiary);}`],`
    padding-block: 8px;
    padding-inline: 12px;
    border-radius: var(--ant-border-radius);

    font-family: var(--ant-font-family-code);
    font-size: 13px;
    overflow-wrap: anywhere;

    background: var(--ant-color-fill-tertiary);
  `)},ut=({clientSecret:e})=>{let{t}=n(`auth`);return(0,U.jsxs)(f,{gap:12,children:[(0,U.jsx)(we,{message:t(`oauthApp.secret.onceWarning`),type:`warning`}),(0,U.jsx)(`div`,{className:lt.secret,children:e}),(0,U.jsx)(f,{horizontal:!0,justify:`flex-end`,children:(0,U.jsx)(Ie,{content:e,title:t(`oauthApp.secret.copy`)})}),(0,U.jsx)(x,{style:{fontSize:12},type:`secondary`,children:t(`oauthApp.secret.usage`)})]})},dt=e=>b({content:(0,U.jsx)(ut,{...e}),footer:null,title:i(`oauthApp.secret.revealTitle`,{ns:`auth`}),width:`min(90vw, 520px)`})})),W,pt,mt,ht=e((()=>{A(),C(),y(),W=t(c()),pt={card:j(`acss-1xwtyey`,[`.acss-1xwtyey{padding:16px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);background:var(--ant-color-bg-container);}`],`
    padding: 16px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);
    background: var(--ant-color-bg-container);
  `)},mt=({children:e,extra:t,title:n})=>(0,W.jsxs)(f,{className:pt.card,gap:16,children:[(0,W.jsxs)(f,{horizontal:!0,align:`center`,justify:`space-between`,style:{minHeight:28},children:[(0,W.jsx)(x,{weight:500,children:n}),t]}),e]})})),G,K,gt,_t=e((()=>{C(),L(),Be(),m(),y(),T(),D(),G=t(s()),a(),Xe(),ht(),K=t(c()),gt=({canEdit:e,detail:t,onSubmit:r})=>{let{t:i}=n(`auth`),[a,o]=(0,G.useState)(!1),[s,c]=(0,G.useState)(!1),[l,u]=(0,G.useState)(t.logoUri??void 0),d=()=>{u(t.logoUri??void 0),o(!0)},m=e=>{let t=new FileReader;t.addEventListener(`load`,()=>u(t.result)),t.readAsDataURL(e)},h=async e=>{c(!0);try{await r({description:e.description,logoUri:l,name:e.name.trim()}),o(!1)}finally{c(!1)}},g={marginBottom:0};return(0,K.jsx)(mt,{title:i(`oauthApp.detail.basicInfo`),extra:!a&&(0,K.jsx)(p,{disabled:!e,icon:(0,K.jsx)(le,{size:14}),size:`small`,onClick:d,children:i(`oauthApp.detail.edit`)}),children:a?(0,K.jsx)(w,{colon:!1,initialValues:{description:t.description??``,name:t.name},layout:`vertical`,onFinish:h,children:(0,K.jsxs)(f,{gap:16,children:[(0,K.jsx)(w.Item,{label:i(`oauthApp.form.logo.label`),style:g,children:(0,K.jsx)(z,{title:t.name,value:l,onUpload:m})}),(0,K.jsx)(w.Item,{label:i(`oauthApp.form.name.label`),name:`name`,rules:[{message:i(`oauthApp.validation.nameRequired`),required:!0}],style:g,children:(0,K.jsx)(R,{placeholder:i(`oauthApp.form.name.placeholder`)})}),(0,K.jsx)(w.Item,{label:i(`oauthApp.form.description.label`),name:`description`,style:g,children:(0,K.jsx)(Ve,{placeholder:i(`oauthApp.form.description.placeholder`),rows:3})}),(0,K.jsxs)(f,{horizontal:!0,gap:8,justify:`flex-end`,children:[(0,K.jsx)(p,{onClick:()=>o(!1),children:i(`oauthApp.detail.cancel`)}),(0,K.jsx)(p,{htmlType:`submit`,loading:s,type:`primary`,children:i(`oauthApp.detail.save`)})]})]})}):(0,K.jsxs)(f,{horizontal:!0,align:`center`,gap:16,children:[(0,K.jsx)(z,{title:t.name,value:t.logoUri??void 0}),(0,K.jsxs)(f,{gap:4,style:{minWidth:0},children:[(0,K.jsx)(x,{strong:!0,style:{fontSize:16},children:t.name}),(0,K.jsx)(x,{type:`secondary`,children:t.description||i(`oauthApp.detail.noDescription`)})]})]})})}})),vt,yt,bt,xt=e((()=>{vt=new Set([`localhost`,`127.0.0.1`,`[::1]`,`::1`]),yt=e=>{let t=e.trim();if(t.includes(`*`))return`wildcard`;let n;try{n=new URL(t)}catch{return`malformed`}if(n.protocol!==`https:`&&n.protocol!==`http:`||n.protocol===`http:`&&!vt.has(n.hostname))return`insecure`;if(n.hash)return`fragment`;if(n.username||n.password)return`credentials`},bt=e=>{let t=new Set;return e.map(e=>e.trim()).filter(e=>!e||t.has(e)?!1:(t.add(e),!0))}})),St,Ct,wt,Tt=e((()=>{xt(),St={credentials:`oauthApp.validation.redirectUri.credentials`,fragment:`oauthApp.validation.redirectUri.fragment`,insecure:`oauthApp.validation.redirectUri.insecure`,malformed:`oauthApp.validation.redirectUri.malformed`,wildcard:`oauthApp.validation.redirectUri.wildcard`},Ct=e=>{if(!e?.trim())return;let t=yt(e);return t?St[t]:void 0},wt=(e=[])=>{let t=bt(e.map(e=>e??``));if(t.length===0)return`oauthApp.validation.redirectUriRequired`;if(t.length>5)return`oauthApp.validation.redirectUriTooMany`}})),Et,q,Dt,Ot,kt=e((()=>{A(),C(),L(),d(),Me(),m(),y(),T(),D(),Et=t(s()),a(),Tt(),ht(),q=t(c()),Dt={listError:j(`acss-1ktiyg`,[`.acss-1ktiyg{font-size:14px;line-height:1.5;color:var(--ant-color-error);}`],`
    font-size: 14px;
    line-height: 1.5;
    color: var(--ant-color-error);
  `),uri:j(`acss-1qwlefp`,[`.acss-1qwlefp{padding-block:8px;padding-inline:12px;border-radius:var(--ant-border-radius);font-family:var(--ant-font-family-code);font-size:13px;overflow-wrap:anywhere;background:var(--ant-color-fill-quaternary);}`],`
    padding-block: 8px;
    padding-inline: 12px;
    border-radius: var(--ant-border-radius);

    font-family: var(--ant-font-family-code);
    font-size: 13px;
    overflow-wrap: anywhere;

    background: var(--ant-color-fill-quaternary);
  `)},Ot=({canEdit:e,detail:t,onSubmit:r})=>{let{t:i}=n(`auth`),[a,o]=(0,Et.useState)(!1),[s,c]=(0,Et.useState)(!1),l=t.redirectUris??[];return(0,q.jsx)(mt,{title:i(`oauthApp.redirectUris.title`),extra:!a&&(0,q.jsx)(p,{disabled:!e,icon:(0,q.jsx)(le,{size:14}),size:`small`,onClick:()=>o(!0),children:i(l.length>0?`oauthApp.detail.edit`:`oauthApp.redirectUris.configure`)}),children:a?(0,q.jsx)(w,{colon:!1,initialValues:{redirectUris:l.length>0?l:[``]},layout:`vertical`,onFinish:async({redirectUris:e})=>{c(!0);try{await r({redirectUris:bt(e??[])}),o(!1)}finally{c(!1)}},children:(0,q.jsxs)(f,{gap:12,children:[(0,q.jsx)(x,{style:{fontSize:12},type:`secondary`,children:i(`oauthApp.form.redirectUris.extra`)}),(0,q.jsx)(w.List,{name:`redirectUris`,rules:[{validator:async(e,t)=>{let n=wt(t);if(n)throw Error(i(n,{count:5}))}}],children:(e,{add:t,remove:n},{errors:r})=>(0,q.jsxs)(f,{gap:8,children:[e.map(e=>(0,q.jsxs)(f,{horizontal:!0,align:`flex-start`,gap:8,children:[(0,q.jsx)(w.Item,{name:e.name,style:{flex:1,marginBottom:0},rules:[{validator:async(e,t)=>{let n=Ct(t);if(n)throw Error(i(n))}}],children:(0,q.jsx)(R,{placeholder:i(`oauthApp.form.redirectUris.placeholder`)})}),(0,q.jsx)(ie,{"aria-label":i(`oauthApp.redirectUris.remove`),icon:E,style:{marginTop:4},title:i(`oauthApp.redirectUris.remove`),onClick:()=>n(e.name)})]},e.key)),r.length>0&&(0,q.jsx)(`div`,{className:Dt.listError,children:r}),(0,q.jsx)(p,{block:!0,disabled:e.length>=5,icon:(0,q.jsx)(he,{size:14}),onClick:()=>t(``),children:i(`oauthApp.redirectUris.add`)})]})}),(0,q.jsxs)(f,{horizontal:!0,gap:8,justify:`flex-end`,children:[(0,q.jsx)(p,{onClick:()=>o(!1),children:i(`oauthApp.detail.cancel`)}),(0,q.jsx)(p,{htmlType:`submit`,loading:s,type:`primary`,children:i(`oauthApp.detail.save`)})]})]})}):l.length>0?(0,q.jsx)(f,{gap:6,children:l.map(e=>(0,q.jsx)(`div`,{className:Dt.uri,children:e},e))}):(0,q.jsx)(we,{showIcon:!0,message:i(`oauthApp.redirectUris.empty`),type:`warning`})})}})),At,J,Y,jt,Mt=e((()=>{A(),C(),v(),m(),Ge(),O(),_(),ze(),y(),xe(),D(),At=t(s()),a(),at(),Te(),Ne(),M(),ct(),ft(),_t(),kt(),J=t(c()),Y={backButton:j(`acss-1o5x2nl`,[`.acss-1o5x2nl{cursor:pointer;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:var(--ant-border-radius);color:var(--ant-color-text-secondary);}`,`.acss-1o5x2nl:hover{color:var(--ant-color-text);background:var(--ant-color-fill-tertiary);}`],`
    cursor: pointer;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;
    border-radius: var(--ant-border-radius);

    color: var(--ant-color-text-secondary);

    &:hover {
      color: var(--ant-color-text);
      background: var(--ant-color-fill-tertiary);
    }
  `),card:j(`acss-1xwtyey`,[`.acss-1xwtyey{padding:16px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);background:var(--ant-color-bg-container);}`],`
    padding: 16px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);
    background: var(--ant-color-bg-container);
  `),dangerCard:j(`acss-jfb966`,[`.acss-jfb966{padding:16px;border:1px solid var(--ant-color-error-border);border-radius:var(--ant-border-radius-lg);background:var(--ant-color-bg-container);}`],`
    padding: 16px;
    border: 1px solid var(--ant-color-error-border);
    border-radius: var(--ant-border-radius-lg);
    background: var(--ant-color-bg-container);
  `),label:j(`acss-um2tu2`,[`.acss-um2tu2{font-size:12px;color:var(--ant-color-text-secondary);}`],`
    font-size: 12px;
    color: var(--ant-color-text-secondary);
  `),row:j(`acss-yqckmr`,[`.acss-yqckmr{display:flex;align-items:center;justify-content:space-between;}`],`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `)},jt=({canEdit:e,id:t,onBack:r,onChanged:i})=>{let{t:a}=n(`auth`),{data:o,error:s,isLoading:c,mutate:l}=ke(Oe.oauthAppById(t),()=>N.oauthApp.getById.query({id:t})),u=o;(0,At.useEffect)(()=>{(s||!c&&!u)&&r()},[s,c,u,r]);let d=()=>{l(),i()},m=F.oauthApp.update.useMutation({onSuccess:()=>{d(),ee.success(a(`oauthApp.detail.saveSuccess`))}}),_=F.oauthApp.setEnabled.useMutation({onSuccess:d}),v=F.oauthApp.rotateSecret.useMutation({onSuccess:({clientSecret:e})=>{d(),dt({clientSecret:e})}}),y=F.oauthApp.delete.useMutation({onSuccess:()=>{i(),r()}}),b=async e=>{await m.mutateAsync({id:t,value:e})},te=()=>S({content:a(`oauthApp.secret.rotateConfirm.content`),okButtonProps:{danger:!0},okText:a(`oauthApp.secret.rotateConfirm.ok`),onOk:async()=>{await v.mutateAsync({id:t})},title:a(`oauthApp.secret.rotateConfirm.title`)}),C=()=>S({content:a(`oauthApp.deleteConfirm.content`),okButtonProps:{danger:!0},okText:a(`oauthApp.deleteConfirm.ok`),onOk:async()=>{await y.mutateAsync({id:t})},title:a(`oauthApp.deleteConfirm.title`)}),ne=u?.applicationType===`web`;return u?(0,J.jsxs)(f,{gap:20,children:[(0,J.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,J.jsx)(`span`,{"aria-label":a(`oauthApp.detail.back`),className:Y.backButton,role:`button`,tabIndex:0,onClick:r,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),r())},children:(0,J.jsx)(g,{icon:se,size:`small`})}),(0,J.jsx)(x,{strong:!0,style:{fontSize:20},children:u.name}),!u.enabled&&(0,J.jsx)(I,{children:a(`oauthApp.item.disabledTag`)})]}),(0,J.jsx)(gt,{canEdit:e,detail:u,onSubmit:b},`basic-${u.id}`),ne&&(0,J.jsx)(Ot,{canEdit:e,detail:u,onSubmit:b},`redirect-${u.id}`),(0,J.jsxs)(f,{className:Y.card,gap:16,children:[(0,J.jsxs)(`div`,{className:Y.row,children:[(0,J.jsx)(`span`,{className:Y.label,children:a(`oauthApp.detail.clientId`)}),(0,J.jsx)(st,{clientId:u.id})]}),(0,J.jsxs)(`div`,{className:Y.row,children:[(0,J.jsx)(`span`,{className:Y.label,children:a(`oauthApp.detail.type`)}),(0,J.jsx)(I,{children:a(ne?`oauthApp.type.webBadge`:`oauthApp.type.badge`)})]}),u.hasSecret&&(0,J.jsxs)(`div`,{className:Y.row,children:[(0,J.jsx)(`span`,{className:Y.label,children:a(`oauthApp.detail.clientSecret`)}),(0,J.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,J.jsx)(x,{type:`secondary`,children:a(`oauthApp.secret.hidden`)}),(0,J.jsx)(p,{disabled:!e,loading:v.isPending,size:`small`,onClick:te,children:a(`oauthApp.secret.rotate`)})]})]}),(0,J.jsxs)(`div`,{className:Y.row,children:[(0,J.jsx)(`span`,{className:Y.label,children:a(`oauthApp.detail.createdAt`)}),(0,J.jsx)(x,{type:`secondary`,children:u.createdAt.toLocaleString()})]}),(0,J.jsxs)(`div`,{className:Y.row,children:[(0,J.jsx)(`span`,{className:Y.label,children:a(`oauthApp.detail.lastUsedAt`)}),(0,J.jsx)(x,{type:`secondary`,children:u.lastUsedAt?u.lastUsedAt.toLocaleString():a(`oauthApp.detail.neverUsed`)})]}),(0,J.jsxs)(`div`,{className:Y.row,children:[(0,J.jsx)(`span`,{className:Y.label,children:a(`oauthApp.detail.enabled`)}),(0,J.jsx)(h,{checked:!!u.enabled,disabled:!e||_.isPending,onChange:e=>_.mutate({enabled:e,id:t})})]})]}),(0,J.jsx)(`div`,{className:Y.card,children:(0,J.jsx)(it,{clientId:u.id})}),(0,J.jsxs)(f,{className:Y.dangerCard,gap:12,children:[(0,J.jsx)(x,{weight:500,children:a(`oauthApp.detail.dangerZone`)}),(0,J.jsx)(`div`,{className:Y.row,children:(0,J.jsx)(p,{danger:!0,disabled:!e,icon:(0,J.jsx)(E,{size:16}),loading:y.isPending,onClick:C,children:a(`oauthApp.detail.delete`)})})]})]}):(0,J.jsxs)(f,{gap:16,children:[(0,J.jsx)(k.Text,{rows:1,width:200}),(0,J.jsx)(`div`,{className:Y.card,children:(0,J.jsx)(k.Text,{rows:4})})]})}})),Nt,Pt,X,Z,Ft,It=e((()=>{A(),Le(),C(),v(),d(),te(),Ge(),ze(),y(),Nt=t(r()),D(),Pt=t(s()),a(),M(),ct(),X=t(c()),Z={chevron:j(`acss-1wgs0p3`,[`.acss-1wgs0p3{flex:none;color:var(--ant-color-text-quaternary);}`],`
    flex: none;
    color: var(--ant-color-text-quaternary);
  `),meta:j(`acss-14wmj16`,[`.acss-14wmj16{font-size:var(--ant-font-size-sm);color:var(--ant-color-text-secondary);}`],`
    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-secondary);
  `),row:j(`acss-j9b8w6`,[`.acss-j9b8w6{cursor:pointer;padding-block:12px;padding-inline:12px;border-radius:var(--ant-border-radius);transition:background 0.15s ease;}`,`.acss-j9b8w6:hover{background:var(--ant-color-fill-tertiary);}`,`.acss-j9b8w6:focus-visible{outline:2px solid var(--ant-color-primary);outline-offset:-1px;}`],`
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
  `)},Ft=(0,Pt.memo)(({app:e,canEdit:t,onChanged:r,onDeleted:i,onOpen:a})=>{let{t:o}=n(`auth`),s=F.oauthApp.setEnabled.useMutation({onSuccess:r}),c=F.oauthApp.delete.useMutation({onSuccess:i}),l=()=>S({content:o(`oauthApp.deleteConfirm.content`),okButtonProps:{danger:!0},okText:o(`oauthApp.deleteConfirm.ok`),onOk:async()=>{await c.mutateAsync({id:e.id})},title:o(`oauthApp.deleteConfirm.title`)}),u=e.lastUsedAt?o(`oauthApp.item.lastUsed`,{time:(0,Nt.default)(e.lastUsedAt).fromNow()}):o(`oauthApp.list.neverUsed`);return(0,X.jsxs)(f,{horizontal:!0,align:`center`,className:Z.row,gap:12,role:`button`,tabIndex:0,onClick:a,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),a())},children:[(0,X.jsx)(ne,{avatar:e.logoUri||e.name,shape:`square`,size:36,title:e.name}),(0,X.jsxs)(f,{flex:1,gap:2,style:{minWidth:0},children:[(0,X.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,X.jsx)(x,{ellipsis:!0,weight:500,children:e.name}),!e.enabled&&(0,X.jsx)(I,{children:o(`oauthApp.item.disabledTag`)})]}),(0,X.jsx)(`span`,{style:{alignSelf:`flex-start`},onClick:e=>e.stopPropagation(),children:(0,X.jsx)(st,{clientId:e.id})}),(0,X.jsxs)(`span`,{className:Z.meta,children:[o(`oauthApp.type.deviceFlow`),` · `,u]})]}),t&&(0,X.jsx)(`span`,{style:{flex:`none`},onClick:e=>e.stopPropagation(),children:(0,X.jsx)(Re,{items:[e.enabled?{icon:(0,X.jsx)(g,{icon:de}),key:`disable`,label:o(`oauthApp.actions.disable`),onClick:()=>s.mutate({enabled:!1,id:e.id})}:{icon:(0,X.jsx)(g,{icon:me}),key:`enable`,label:o(`oauthApp.actions.enable`),onClick:()=>s.mutate({enabled:!0,id:e.id})},{danger:!0,icon:(0,X.jsx)(g,{icon:E}),key:`delete`,label:o(`oauthApp.list.actions.delete`),onClick:l}],children:(0,X.jsx)(ie,{icon:oe,size:`small`})})}),(0,X.jsx)(g,{className:Z.chevron,icon:fe,size:`small`})]})}),Ft.displayName=`AppItem`})),Q,Lt,Rt,zt=e((()=>{A(),C(),O(),y(),a(),l(),We(),Te(),Ne(),M(),Mt(),It(),Q=t(c()),Lt={listCol:j(`acss-aqr4ua`,[`.acss-aqr4ua{overflow:hidden;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);background:var(--ant-color-bg-container);}`],`
    overflow: hidden;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);
    background: var(--ant-color-bg-container);
  `)},Rt=({canEdit:e})=>{let{t}=n(`auth`),r=Ue(),i=u(),{data:a,isLoading:o,mutate:s}=ke(Oe.oauthAppList(),async()=>await N.oauthApp.list.query()),c=()=>s();return i.sub?(0,Q.jsx)(jt,{canEdit:e,id:i.sub,onBack:()=>r(`/settings/oauth-apps`),onChanged:c}):(0,Q.jsx)(f,{className:Lt.listCol,gap:2,padding:4,children:o?(0,Q.jsxs)(f,{gap:12,padding:12,children:[(0,Q.jsx)(k.Text,{rows:2}),(0,Q.jsx)(k.Text,{rows:2})]}):a?.length?a.map(t=>(0,Q.jsx)(Ft,{app:t,canEdit:e,onChanged:c,onDeleted:c,onOpen:()=>r(`/settings/oauth-apps/${t.id}`)},t.id)):(0,Q.jsx)(f,{align:`center`,gap:12,paddingBlock:40,children:(0,Q.jsx)(x,{type:`secondary`,children:t(`oauthApp.list.empty`)})})})}})),$,Bt,Vt,Ht=e((()=>{m(),O(),a(),l(),je(),Ke(),Je(),We(),be(),M(),ve(),Ee(),rt(),zt(),ft(),$=t(c()),Bt=()=>{let{t:e}=n(`auth`),{allowed:t,reason:r}=P(`create_content`),i=Pe(),{allowed:a}=P(`manage_settings`),o=t&&(!i||a),s=Ue();return(0,$.jsx)(p,{disabled:!o,title:r,type:`primary`,onClick:()=>{o&&nt({onSubmit:async e=>{let t=await N.oauthApp.create.mutate(e);s(`/settings/oauth-apps/${t.id}`),t.clientSecret&&dt({clientSecret:t.clientSecret})}})},children:e(`oauthApp.list.actions.create`)})},Vt=()=>{let{t:e}=n(`auth`),{allowed:t}=P(`create_content`),r=Pe(),{allowed:i}=P(`manage_settings`),a=u(),o=t&&(!r||i),[s,c]=ye(e=>[Se.isPreferenceInit(e),_e.enableOAuthApps(e)]);return s?c?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Ye,{extra:!a.sub&&o&&(0,$.jsx)(Bt,{}),title:e(`tab.oauthApps`)}),(0,$.jsx)(Rt,{canEdit:o})]}):(0,$.jsx)(qe,{}):(0,$.jsx)(k.Text,{rows:5})}}));Ht();export{Vt as default,Ht as t};