import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,P as r,j as i}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as a,T as o,_ as s,a as c,i as l,v as u}from"../vendor/vendor-react-B9HSWrpN.js";import{B as d,Ht as f,Kt as p,Mt as m,Nt as h,Ut as g,X as _,Xn as v,Yn as y,Z as b,Zn as x,at as S,i as C,it as w,m as ee,qt as T,r as E,z as D}from"../vendor/vendor-ui-core-BmtybT1r.js";import{A as O,P as te,et as k,gt as A,r as j}from"../vendor/vendor-antd-BWSxhuJE.js";import{Bi as ne,E_ as re,Ei as M,Ip as ie,K as ae,Kc as oe,M as se,Ol as ce,Op as le,Qi as ue,Xc as de,bp as fe,bt as pe,fr as me,gf as he,gu as ge,mt as _e,t as N,ua as ve}from"../vendor/vendor-icons-vienkZi5.js";import{c as ye,mn as be,ur as xe}from"./app-const-BpgKVRXh.js";import{At as Se,Ba as Ce,Cn as we,Dm as Te,FD as Ee,Gp as De,ID as P,Jp as Oe,Kf as ke,MA as Ae,Mn as je,Mr as Me,Nn as Ne,Or as Pe,Qv as Fe,Sn as Ie,Va as Le,Xm as Re,Ym as ze,_p as F,aS as Be,am as Ve,bF as He,dg as Ue,eh as We,iC as Ge,jr as I,kt as Ke,pF as qe,qf as Je,qr as Ye,sS as Xe,th as Ze,uF as Qe,vS as $e,vp as et,wx as tt,yS as nt}from"./index-w64_zsxD.js";import{n as rt,t as it}from"./DropdownMenu-1ae8j9bI.js";import{n as at,t as L}from"./Tag-C95BKTI7.js";import{s as ot,t as st}from"./client-BsSjn2iy.js";import{n as ct,t as lt}from"./NeuralNetworkLoading-DiI77SUR.js";import{n as ut,t as dt}from"./es-CY4vbFU8.js";import{n as ft,t as pt}from"./Select-C0UJO2yB.js";import{p as mt,t as ht}from"./es-Zenbyje4.js";import{n as gt,r as _t,t as vt}from"./const-Ac9XzAwI.js";import{n as yt,t as bt}from"./useWorkspaceAwareNavigate-BbajQ7ta.js";import{t as xt}from"./_virtual_lobe-ui-named_base-ui_confirmModal-B6WREEdZ.js";import{n as St,t as Ct}from"./useAppOrigin-CLXFDpID.js";import{i as wt,n as Tt,r as Et,t as Dt}from"./Form-DEzxLt7J.js";import{n as Ot,t as kt}from"./InfoTooltip-BD67w5GP.js";import{n as At,t as jt}from"./404-a8LvU2j2.js";import{i as Mt,o as Nt,t as Pt}from"./FormInput-D0nNIiYs.js";import{n as Ft,t as It}from"./AsyncBoundary-K-esguw4.js";import{n as Lt,t as Rt}from"./ResourceConfigAccessGate-CfaeqS8X.js";import{n as zt,t as Bt}from"./AgentBreadcrumb-EgmXWgxo.js";import{n as Vt,r as Ht,t as Ut}from"./AgentProfileTabs-4gtsVRmU.js";var R,Wt=e((()=>{R={connected:`connected`,disconnected:`disconnected`,dormant:`dormant`,failed:`failed`,queued:`queued`,starting:`starting`}}));async function Gt({credentials:e,fetchOwner:t,form:n,isCurrent:r}){let i=[`settings`,`userId`],a=n.getFieldValue(i);if(typeof a==`string`&&a.trim())return;let o=n.isFieldTouched(i),s=await t(e);if(!(!r()||String(n.getFieldValue(`applicationId`)??``).trim()!==e.appId||String(n.getFieldValue([`credentials`,`appSecret`])??``).trim()!==e.appSecret||n.getFieldValue(i)!==a||n.isFieldTouched(i)!==o))return n.setFieldValue(i,s.openId),s}var Kt=e((()=>{})),qt,Jt,Yt=e((()=>{ht(),qt=t(a()),Jt=({appId:e,disabled:t,onLookup:n,platformId:r,savedValue:i,secret:a})=>{let o=(0,qt.useRef)(null),s=e&&a?`${r}\u0000${e}\u0000${a}`:null,c=typeof i==`string`&&!!i.trim(),{cancel:l,run:u}=mt(e=>{o.current=e,n()},{wait:600});return(0,qt.useEffect)(()=>{if(!(t||c||!s||o.current===s))return u(s),l},[l,t,c,s,u]),()=>{l(),o.current=s}}})),Xt,Zt,Qt,$t=e((()=>{ye(),h(),Ae(),j(),N(),Xt=t(a()),i(),Pe(),Kt(),Yt(),Zt=t(o()),Qt=({disabled:e,onFilled:t,platformId:r,savedValue:i})=>{let{t:a}=n(`agent`),o=a,s=k.useFormInstance(),c=k.useWatch(`applicationId`,s),l=k.useWatch([`credentials`,`appSecret`],s),[u,d]=(0,Xt.useState)(!1),f=(0,Xt.useRef)(0),p=I(e=>e.feishuFetchOwnerId),h=c?.trim(),g=l?.trim(),_=xe(g)?void 0:g;(0,Xt.useEffect)(()=>(d(!1),()=>{f.current+=1}),[h,e,r,_]);let v=(0,Xt.useCallback)(async n=>{if(e||!h||!_)return;let i=++f.current;d(!0);try{let e=await Gt({credentials:{appId:h,appSecret:_,platform:r===`lark`?`lark`:`feishu`},fetchOwner:p,form:s,isCurrent:()=>i===f.current});if(!e)return;s.validateFields([[`settings`,`userId`]]).catch(()=>void 0),t?.();let a=o(n===`auto`?`channel.feishu.fetchOwnerIdAutoSuccess`:`channel.feishu.fetchOwnerIdSuccess`);y.success(e.name?`${a} (${e.name})`:a)}catch(e){if(n===`auto`||i!==f.current)return;let t=e instanceof Error?e.message:String(e);y.error(`${o(`channel.feishu.fetchOwnerIdFailed`)}: ${t}`)}finally{i===f.current&&d(!1)}},[h,e,p,s,t,r,_,o]),b=k.useWatch([`settings`,`userId`],s),[x,S]=(0,Xt.useState)(!1);(0,Xt.useEffect)(()=>{b!==void 0&&S(!0)},[b]);let C=!!(x?b:typeof i==`string`?i:void 0)?.trim(),w=Jt({appId:h,secret:_,disabled:e,platformId:r,savedValue:i,onLookup:()=>{v(`auto`)}});return C?null:(0,Zt.jsx)(m,{disabled:e||!h||!_,icon:(0,Zt.jsx)(ie,{size:14}),loading:u,size:`small`,style:{alignSelf:`flex-start`,marginBlockEnd:12,marginInlineStart:32},type:`default`,onClick:()=>{if(!h||!_){y.warning(o(`channel.feishu.fetchOwnerIdMissingCredentials`));return}w(),v(`manual`)},children:o(`channel.feishu.fetchOwnerId`)})}})),en,tn,nn=e((()=>{Ze(),en=class{getStatus=async()=>We().imessageBridge.getStatus();removeConfig=async e=>We().imessageBridge.removeConfig({applicationId:e});start=async()=>We().imessageBridge.start();stop=async()=>We().imessageBridge.stop();testConfig=async e=>We().imessageBridge.testConfig(e);upsertConfig=async e=>We().imessageBridge.upsertConfig(e)},tn=new en})),rn,an,on=e((()=>{rn=t(a()),an=(0,rn.createContext)(null)})),z,sn,cn=e((()=>{Ee(),ye(),T(),wt(),x(),h(),b(),at(),S(),Ae(),j(),N(),z=t(a()),i(),Pt(),Ot(),Be(),tt(),Re(),nn(),on(),o(),P(`acss-vp97rj`,[`.acss-vp97rj{margin-block:8px;padding:20px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);background:var(--ant-color-bg-container);}`],`
    margin-block: 8px;
    padding: 20px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);

    background: var(--ant-color-bg-container);
  `),P(`acss-1sw9jku`,[`.acss-1sw9jku{flex:none;color:var(--ant-color-text-secondary);}`],`
    flex: none;
    color: var(--ant-color-text-secondary);
  `),P(`acss-jepm8c`,[`.acss-jepm8c{overflow:hidden;flex:none;width:44px;height:44px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);}`,`.acss-jepm8c img{width:100%;height:100%;object-fit:contain;}`],`
    overflow: hidden;
    flex: none;

    width: 44px;
    height: 44px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `),P(`acss-1xtjjk8`,[`.acss-1xtjjk8{padding:12px;border-radius:var(--ant-border-radius-lg);background:var(--ant-color-fill-quaternary);}`],`
    padding: 12px;
    border-radius: var(--ant-border-radius-lg);
    background: var(--ant-color-fill-quaternary);
  `),P(`acss-sf6bh9`,[`.acss-sf6bh9{font-size:15px;font-weight:600;}`],`
    font-size: 15px;
    font-weight: 600;
  `),sn=(0,z.memo)(()=>{let{t:e}=n(`agent`),t=e,r=k.useFormInstance(),i=k.useWatch(`applicationId`,r),a=i?.trim(),o=(0,z.use)(an),{data:s,mutate:c}=Xe(null,()=>tn.getStatus()),l=s?.configs.find(e=>e.applicationId===a),u=l?.enabled??!1,d=l?.blueBubblesPasswordSet??!1;s?.running,s?.serverUrl;let[f,p]=(0,z.useState)(``),[m,h]=(0,z.useState)(!1),[g,_]=(0,z.useState)(``),[v,y]=(0,z.useState)(`idle`),[b,x]=(0,z.useState)(!1),[S,C]=(0,z.useState)(!1),[w,ee]=(0,z.useState)(null),T=l?.blueBubblesServerUrl;(0,z.useEffect)(()=>{!m&&T&&p(T)},[T,m]);let E=(0,z.useCallback)(async()=>{let e=await ze.getDeviceInfo();r.setFieldValue([`credentials`,`desktopDeviceId`],e.deviceId),r.validateFields([[`credentials`,`desktopDeviceId`]]).catch(()=>void 0)},[r]),D=(0,z.useCallback)(()=>{let e=r.getFieldValue([`credentials`,`webhookSecret`])?.trim();if(e)return e;let t=globalThis.crypto.randomUUID();return r.setFieldValue([`credentials`,`webhookSecret`],t),t},[r]),O=(0,z.useCallback)(e=>{let n=f.trim(),r=g.trim();if(!a)throw Error(t(`channel.imessage.bridgeMissingApplicationId`));if(!n)throw Error(t(`channel.imessage.bridgeMissingServerUrl`));if(!r&&!d)throw Error(t(`channel.imessage.bridgeMissingPassword`));return{applicationId:a,blueBubblesPassword:r||void 0,blueBubblesServerUrl:n,enabled:e,webhookSecret:D()}},[a,f,g,d,D,t]),te=(0,z.useCallback)(async e=>{let t=O(e);await E(),await tn.upsertConfig(t),_(``),y(`idle`),await c()},[O,E,c]),A=(0,z.useCallback)(async()=>{!f.trim()&&!l||await te(u)},[te,f,l,u]);return(0,z.useEffect)(()=>{},[i,E,D]),(0,z.useEffect)(()=>{},[o,A]),null})})),ln,un,dn,fn=e((()=>{ye(),h(),Ae(),j(),N(),ln=t(a()),i(),Pe(),un=t(o()),dn=(0,ln.memo)(({disabled:e})=>{let{t}=n(`agent`),r=t,i=k.useFormInstance(),a=k.useWatch([`credentials`,`channelAccessToken`],i),[o,s]=(0,ln.useState)(!1),c=I(e=>e.lineFetchBotInfo);return(0,un.jsx)(m,{icon:(0,un.jsx)(ie,{size:14}),loading:o,size:`small`,style:{alignSelf:`flex-start`,marginBlockStart:4},type:`default`,disabled:e||!a?.trim()||xe(a),onClick:async()=>{if(e)return;let t=a?.trim();if(!t||xe(t)){y.warning(r(`channel.line.fetchBotInfoMissingToken`));return}s(!0);try{let e=await c(t);i.setFieldValue(`applicationId`,e.userId),i.validateFields([`applicationId`]).catch(()=>void 0),y.success(e.displayName?`${r(`channel.line.fetchBotInfoSuccess`)} (${e.displayName})`:r(`channel.line.fetchBotInfoSuccess`))}catch(e){let t=e instanceof Error?e.message:String(e);y.error(`${r(`channel.line.fetchBotInfoFailed`)}: ${t}`)}finally{s(!1)}},children:r(`channel.line.fetchBotInfo`)})})})),B,V,pn,mn,hn,gn,_n,vn=e((()=>{dt(),T(),et(),h(),S(),j(),Qe(),N(),B=t(a()),i(),ct(),Le(),V=t(o()),pn=220,mn=2e3,hn=240,gn=qe(({css:e,cssVar:t})=>({auth:e`
    align-items: center;
    width: 100%;
  `,error:e`
    align-items: center;
    width: 100%;
  `,qrSlot:e`
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;

    width: ${hn}px;
    height: ${hn}px;
    padding: 9px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};

    background: ${t.colorFillQuaternary};
  `,status:e`
    min-height: 20px;
    font-size: 13px;
    text-align: center;
  `,tips:e`
    max-width: 480px;
    font-size: 13px;
    text-align: center;
  `})),_n=(0,B.memo)(({buttonType:e=`primary`,disabled:t,onAuthenticated:r,showTips:i=!0})=>{let{t:a}=n(`agent`),[o,s]=(0,B.useState)({stage:`idle`}),c=(0,B.useRef)(!1),l=(0,B.useRef)(null),u=(0,B.useCallback)(()=>{c.current=!1,l.current&&=(clearTimeout(l.current),null)},[]),d=(0,B.useCallback)(async()=>{if(!t){s({stage:`loading`}),u();try{let e=await Ce.wechatGetQrCode();s({imageUrl:e.qrcode_img_content,stage:`ready`,status:`wait`}),c.current=!0;let t=async()=>{if(c.current)try{let n=await Ce.wechatPollQrStatus(e.qrcode);if(!c.current)return;if(n.status===`confirmed`&&n.bot_token){u(),r({botId:n.ilink_bot_id||``,botToken:n.bot_token,userId:n.ilink_user_id||``});return}if(n.status===`expired`){u(),s({message:a(`channel.wechatQrExpired`),stage:`error`});return}s({imageUrl:e.qrcode_img_content,stage:`ready`,status:n.status}),l.current=setTimeout(t,mn)}catch(e){console.error(e),c.current&&(l.current=setTimeout(t,mn))}};l.current=setTimeout(t,mn)}catch(e){console.error(e),s({message:a(`channel.wechatQrLoadFailed`),stage:`error`})}}},[t,r,u,a]);(0,B.useEffect)(()=>u,[u]);let f=o.stage===`ready`?o.status===`wait`?a(`channel.wechatQrWait`):o.status===`scaned`?a(`channel.wechatQrScaned`):``:``;return(0,V.jsxs)(p,{className:gn.auth,gap:12,children:[(0,V.jsxs)(`div`,{className:gn.qrSlot,children:[o.stage===`idle`&&(0,V.jsx)(m,{disabled:t,icon:(0,V.jsx)(ue,{size:16}),type:e,onClick:d,children:a(`channel.wechatGenerateQrCode`)}),o.stage===`loading`&&(0,V.jsx)(lt,{size:48}),o.stage===`ready`&&(0,V.jsx)(O,{size:pn,value:o.imageUrl}),o.stage===`error`&&(0,V.jsxs)(p,{className:gn.error,gap:12,children:[(0,V.jsx)(F,{showIcon:!0,message:o.message,type:`warning`}),(0,V.jsx)(m,{disabled:t,icon:(0,V.jsx)(ne,{size:14}),type:e,onClick:d,children:a(`channel.wechatQrRefresh`)})]})]}),(0,V.jsx)(w,{className:gn.status,type:`secondary`,children:f}),i&&(0,V.jsxs)(w,{className:gn.tips,type:`secondary`,children:[(0,V.jsx)(ut,{style:{marginInlineEnd:4}}),a(`channel.wechatTips`)]})]})}),_n.displayName=`QrCodeAuth`})),yn,H,bn,xn,Sn,Cn=e((()=>{Ee(),T(),wt(),x(),N(),yn=t(a()),i(),Pt(),vn(),H=t(o()),bn={fieldIcon:P(`acss-1sw9jku`,[`.acss-1sw9jku{flex:none;color:var(--ant-color-text-secondary);}`],`
    flex: none;
    color: var(--ant-color-text-secondary);
  `),header:P(`acss-iypit`,[`.acss-iypit{display:flex;align-items:center;margin-block-end:16px;}`],`
    display: flex;
    align-items: center;
    margin-block-end: 16px;
  `)},xn=(0,yn.memo)(({divider:e,icon:t,label:n,password:r,value:i})=>{let a=r?Mt:Nt;return(0,H.jsx)(Et,{avatar:(0,H.jsx)(v,{className:bn.fieldIcon,icon:t,size:20}),divider:e,label:n,minWidth:`max(50%, 400px)`,variant:`outlined`,children:(0,H.jsx)(a,{readOnly:!0,value:i||``})})}),Sn=(0,yn.memo)(({currentConfig:e,disabled:t,onQrAuthenticated:r})=>{let{t:i}=n(`agent`),a=i,o=!!e.applicationId&&e.applicationId!==e.credentials.botId;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`div`,{className:bn.header,children:(0,H.jsxs)(p,{gap:4,children:[(0,H.jsx)(`div`,{style:{fontSize:16,fontWeight:600},children:a(`channel.wechatConnectedInfo`)}),(0,H.jsx)(`div`,{style:{color:`var(--ant-color-text-secondary)`,fontSize:13},children:a(`channel.wechatManagedCredentials`)})]})}),r&&(0,H.jsx)(_n,{buttonType:`default`,disabled:t,showTips:!1,onAuthenticated:r}),o&&(0,H.jsx)(xn,{icon:he,label:a(`channel.applicationId`),value:e.applicationId}),!1]})})})),wn,Tn,En,Dn=e((()=>{wn=t(a()),Cn(),vn(),Tn=t(o()),En=(0,wn.memo)(({currentConfig:e,disabled:t,hasConfig:n,onAuthenticated:r})=>{let i=(0,wn.useCallback)(e=>{let t=e.botToken?.trim();if(!e.botId&&!t)return;let n=e.botId||t?.slice(0,16)||``;r?.({applicationId:n,credentials:{botId:e.botId,botToken:e.botToken,userId:e.userId}})},[r]);return n&&e?(0,Tn.jsx)(Sn,{currentConfig:e,disabled:t,onQrAuthenticated:i}):r?(0,Tn.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,padding:`16px 0`},children:(0,Tn.jsx)(_n,{disabled:t,onAuthenticated:i})}):null})})),On,kn,An,jn=e((()=>{$t(),cn(),fn(),Dn(),On={wechat:En},kn={imessage:sn,line:dn},An={"feishu:userId":Qt,"lark:userId":Qt}})),Mn,Nn,Pn,Fn,In,Ln,Rn=e((()=>{Mn=new Set([`allowFrom`,`groupAllowFrom`]),Nn=e=>typeof e==`string`?e.split(/[\s,]+/).map(e=>e.trim()).filter(Boolean).map(e=>({id:e})):Array.isArray(e)?e.map(e=>{if(typeof e==`string`)return{id:e.trim()};if(e&&typeof e==`object`&&`id`in e){let t=String(e.id??``).trim(),n=e.name,r=typeof n==`string`?n:void 0;return r?{id:t,name:r}:{id:t}}return{id:``}}).filter(e=>e.id):[],Pn=e=>Object.fromEntries(Object.entries(e||{}).map(([e,t])=>[e,Mn.has(e)?Nn(t):t??void 0])),Fn=e=>({applicationId:e.applicationId||``,credentials:e.credentials||{},settings:Pn(e.settings)}),In=e=>{let t=e?.find(e=>e.key===`settings`);if(!t?.properties)return{};let n={};for(let e of t.properties){if(e.type===`object`&&e.properties){for(let t of e.properties)t.default!==void 0&&(n[t.key]=t.default);continue}e.default!==void 0&&(n[e.key]=e.default)}return n},Ln=(e,t)=>({...In(e),...t})}));function zn(e,t){let n=[];if(e.required&&n.push({message:t(e.label),required:!0}),e.pattern){let r=new RegExp(e.pattern),i=e.patternMessage?t(e.patternMessage):t(e.label);n.push({validator:(e,t)=>typeof t!=`string`||!t||xe(t)||r.test(t)?Promise.resolve():Promise.reject(Error(i))})}return(e.type===`number`||e.type===`integer`)&&(typeof e.minimum==`number`&&n.push({message:`${t(e.label)} ≥ ${e.minimum}`,min:e.minimum,type:`number`}),typeof e.maximum==`number`&&n.push({message:`${t(e.label)} ≤ ${e.maximum}`,max:e.maximum,type:`number`})),n.length>0?n:void 0}function Bn(e,t){let n=e.find(e=>e.key===t);return n?.properties?n.properties.filter(e=>!e.devOnly||!1).flatMap(e=>e.type===`object`&&e.properties?e.properties.filter(e=>!e.devOnly||!1):e):[]}var U,W,G,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn=e((()=>{ye(),g(),T(),Tt(),Ne(),wt(),x(),h(),ft(),b(),at(),S(),j(),Qe(),N(),U=t(a()),i(),Pt(),Ot(),jn(),Rn(),W=t(o()),G=`ant`,Vn=qe(({css:e,cssVar:t})=>({advancedGroup:e`
    border-block-start: 1px solid ${t.colorBorderSecondary};
    border-radius: 0 !important;

    .${G}-collapse-item {
      border-radius: 0 !important;
    }

    .${G}-collapse-header {
      align-items: center !important;

      margin-inline: -16px;
      padding-block: 10px !important;
      padding-inline: 16px !important;
      border-block-end: 0 !important;

      color: ${t.colorTextSecondary} !important;

      transition: background-color ${t.motionDurationFast} ${t.motionEaseInOut};

      &:hover {
        background: ${t.colorBgTextHover};
      }
    }

    .${G}-collapse-expand-icon {
      align-self: center;
      color: ${t.colorTextSecondary} !important;
    }

    .${G}-collapse-title {
      display: flex;
      flex: 1 !important;
      align-items: center;
    }

    .${G}-collapse-content-box {
      padding-inline: 0 !important;
    }
  `,advancedTitle:e`
    font-size: 13px;
    font-weight: 400;
    line-height: 1.4;
    color: ${t.colorTextSecondary};
  `,container:e`
    overflow: hidden;
    gap: 0;
    width: 100%;
    padding-inline: 16px;
  `,fieldIcon:e`
    flex: none;
    align-self: center;
    color: ${t.colorTextSecondary};
  `,form:e`
    .${G}-form-item-label {
      display: flex;
      align-items: center;
    }

    .${G}-form-item-label > label {
      align-items: center;
      width: 100%;
    }

    .${G}-form-item-required::before {
      align-self: center !important;
    }

    .${G}-form-item-control {
      flex: 0 0 50% !important;
      width: 50%;
    }
  `})),Hn=(e,t)=>{let n=e.tooltip;return!n&&!e.devOnly&&!e.paidFeature?t(e.label):(0,W.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[t(e.label),n&&(0,W.jsx)(kt,{size:`small`,title:t(n)}),e.paidFeature&&(0,W.jsx)(L,{color:`gold`,size:`small`,children:t(`channel.paidFeature.badge`)}),e.devOnly&&(0,W.jsx)(L,{color:`gold`,children:`Dev Only`})]})},Un=e=>{let t=e.key.toLowerCase();return/key|password|secret|token/.test(t)?ce:t.includes(`url`)?de:t.endsWith(`id`)||t.includes(`identifier`)?he:e.type===`array`?se:e.type===`boolean`?pe:e.enum?oe:e.type===`number`||e.type===`integer`?ge:me},Wn=e=>(0,W.jsx)(v,{className:Vn.fieldIcon,icon:Un(e),size:20}),Gn=(0,U.memo)(({field:e,parentKey:t,divider:r,disabled:i,featureLocked:a})=>{let{t:o}=n(`agent`),s=o,c=i||a,l=k.useWatch(e.visibleWhen?[t,e.visibleWhen.field]:[]);if(e.visibleWhen){let t=e.visibleWhen.value;if(!(Array.isArray(t)?t.includes(l):l===t))return null}let u=Hn(e,s);if(e.type===`array`&&e.items?.type===`object`)return(0,W.jsx)(Kn,{disabled:i,divider:r,featureLocked:a,field:e,icon:Wn(e),label:u,parentKey:t});let d;switch(e.type){case`password`:d=(0,W.jsx)(Mt,{autoComplete:`new-password`,disabled:c,placeholder:e.placeholder?s(e.placeholder):void 0});break;case`boolean`:d=(0,W.jsx)(_,{disabled:c});break;case`number`:case`integer`:d=(0,W.jsx)(A,{disabled:c,max:e.maximum,min:e.minimum,placeholder:e.placeholder?s(e.placeholder):void 0,style:{width:`100%`}});break;case`string`:if(e.enum){let t=e.enumDescriptions?.some(Boolean);d=(0,W.jsx)(pt,{disabled:c,options:e.enum.map((t,n)=>({description:e.enumDescriptions?.[n]?s(e.enumDescriptions[n]):void 0,label:e.enumLabels?.[n]?s(e.enumLabels[n]):t,value:t})),placeholder:e.placeholder?s(e.placeholder):void 0,optionRender:t?e=>{let t=e;return(0,W.jsxs)(p,{horizontal:!0,align:`center`,gap:12,justify:`space-between`,children:[(0,W.jsx)(`span`,{children:t.label}),t.description&&(0,W.jsx)(w,{fontSize:12,type:`secondary`,children:t.description})]})}:void 0})}else d=(0,W.jsx)(Nt,{disabled:c,placeholder:e.placeholder?s(e.placeholder):s(e.label)});break;default:d=(0,W.jsx)(Nt,{disabled:c,placeholder:e.placeholder?s(e.placeholder):s(e.label)})}return(0,W.jsx)(Et,{avatar:Wn(e),divider:r,initialValue:e.default,label:u,minWidth:`max(50%, 400px)`,name:[t,e.key],rules:zn(e,s),valuePropName:e.type===`boolean`?`checked`:void 0,variant:`outlined`,children:d})}),Kn=(0,U.memo)(({field:e,parentKey:t,divider:r,icon:i,label:a,disabled:o,featureLocked:s})=>{let{t:c}=n(`agent`),l=c,u=o||s,d=e.items?.type===`object`?e.items.properties??[]:[],f=l(`${e.label}Add`),h=l(`${e.label}Empty`),g=l(`channel.allowListRemove`);return(0,W.jsx)(Et,{avatar:i,divider:r,label:a,minWidth:`max(50%, 400px)`,variant:`outlined`,children:(0,W.jsx)(k.List,{initialValue:e.default,name:[t,e.key],children:(e,{add:t,remove:n})=>(0,W.jsxs)(p,{gap:8,style:{width:`100%`},children:[e.length===0&&(0,W.jsx)(p,{style:{fontSize:12,opacity:.6,paddingBlock:4},children:h}),e.map(({key:e,name:t})=>(0,W.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[d.map(e=>(0,W.jsx)(`div`,{style:{flex:1,minWidth:0},children:(0,W.jsx)(k.Item,{noStyle:!0,name:[t,e.key],rules:e.required?[{message:l(e.label),required:!0,whitespace:!0}]:void 0,children:(0,W.jsx)(Nt,{disabled:u,placeholder:e.placeholder?l(e.placeholder):l(e.label)})})},e.key)),(0,W.jsx)(m,{"aria-label":g,disabled:o,icon:(0,W.jsx)(_e,{size:14}),type:`text`,onClick:()=>n(t)})]},e)),s&&(0,W.jsx)(p,{style:{fontSize:12,opacity:.6,paddingBlock:4},children:l(`channel.paidFeature.fieldLocked`)}),(0,W.jsx)(m,{block:!0,disabled:u,icon:(0,W.jsx)(ve,{size:14}),type:`dashed`,onClick:()=>t({id:``,name:``}),children:f})]})})})}),qn=(0,U.memo)(({field:e,divider:t,disabled:r})=>{let{t:i}=n(`agent`),a=i;return(0,W.jsx)(Et,{avatar:Wn(e),divider:t,initialValue:e.default,label:Hn(e,a),minWidth:`max(50%, 400px)`,name:`applicationId`,rules:zn(e,a),variant:`outlined`,children:(0,W.jsx)(Nt,{disabled:r,placeholder:e.placeholder?a(e.placeholder):a(e.label)})})}),Jn=(0,U.memo)(({schema:e})=>{let{t}=n(`agent`),r=t,i=e.find(e=>e.key===`settings`);return i?(0,W.jsx)(w,{as:`span`,className:Vn.advancedTitle,children:r(i.label)}):null}),Yn=(0,U.memo)(({platformDef:e,form:t,hasConfig:r,currentConfig:i,onAuthenticated:a,onValuesChange:o,disabled:s})=>{let{t:c}=n(`agent`),l=c,u=On[e.id],d=kn[e.id],p=(0,U.useMemo)(()=>Bn(e.schema,`credentials`),[e.schema]),h=(0,U.useMemo)(()=>Bn(e.schema,`settings`),[e.schema]),g=(0,U.useMemo)(()=>{if(!r||!h.some(e=>e.key===`userId`))return!1;let e=i?.settings?.userId;return!(typeof e==`string`&&e.trim())},[r,h,i?.settings]),[_,v]=(0,U.useState)(g),y=(0,U.useCallback)(()=>{t.setFieldsValue({settings:In(e.schema)}),o?.(t.getFieldsValue(!0))},[t,o,e.schema]),b=(0,U.useCallback)(()=>{o?.(t.getFieldsValue(!0))},[t,o]),x=(0,U.useCallback)(e=>{let t=e.target;t instanceof Element&&t.closest(`.${G}-collapse-header`)&&(t.closest(`.${G}-collapse-extra`)||(e.preventDefault(),e.stopPropagation(),v(e=>!e)))},[]);return(0,W.jsx)(Dt,{className:Vn.form,form:t,gap:0,itemMinWidth:`max(50%, 400px)`,requiredMark:!1,style:{maxWidth:1024,padding:`16px 0`,width:`100%`},variant:`borderless`,onValuesChange:(e,t)=>o?.(t),children:(0,W.jsxs)(f,{className:Vn.container,variant:`outlined`,children:[u?(0,W.jsx)(u,{currentConfig:i,disabled:s,hasConfig:r,onAuthenticated:a}):(0,W.jsxs)(W.Fragment,{children:[e.schema.filter(e=>e.key===`applicationId`||e.key===`credentials`).map((e,t)=>{let n=t>0;return e.key===`applicationId`?(0,W.jsx)(qn,{disabled:s,divider:n,field:e},`applicationId`):(0,W.jsx)(U.Fragment,{children:p.map((e,t)=>(0,W.jsx)(Gn,{disabled:s,divider:n||t!==0,field:e,parentKey:`credentials`},e.key))},`credentials`)}),d&&(0,W.jsx)(d,{disabled:s})]}),h.length>0&&(0,W.jsx)(`div`,{onClickCapture:x,children:(0,W.jsx)(je,{collapsible:!0,active:_,className:Vn.advancedGroup,defaultActive:g,keyValue:`settings-${e.id}`,title:(0,W.jsx)(Jn,{schema:e.schema}),variant:`borderless`,extra:_?(0,W.jsx)(te,{title:l(`channel.settingsResetConfirm`),onConfirm:s?void 0:y,children:(0,W.jsx)(m,{disabled:s,icon:(0,W.jsx)(M,{size:14}),size:`small`,type:`default`,children:l(`channel.settingsResetDefault`)})}):void 0,onCollapse:v,children:h.map(t=>{let n=!!t.paidFeature&&e.access?.features?.[t.paidFeature]?.allowed===!1,r=An[`${e.id}:${t.key}`];return(0,W.jsxs)(U.Fragment,{children:[(0,W.jsx)(Gn,{divider:!0,disabled:s,featureLocked:n,field:t,parentKey:`settings`}),r&&(0,W.jsx)(r,{disabled:s||n,platformId:e.id,savedValue:i?.settings?.[t.key],onFilled:b})]},t.key)})})})]})})})})),Zn,K,Qn,$n,er=e((()=>{Ee(),T(),et(),h(),at(),j(),N(),Zn=t(a()),i(),Ct(),K=t(o()),Qn={actionBar:P(`acss-1ufiu15`,[`.acss-1ufiu15{display:flex;align-items:center;justify-content:space-between;padding-block-start:16px;}`],`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block-start: 16px;
  `),bottom:P(`acss-1afhhqy`,[`.acss-1afhhqy{display:flex;flex-direction:column;gap:16px;width:100%;max-width:1024px;}`],`
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;
    max-width: 1024px;
  `),webhookBox:P(`acss-at71ct`,[`.acss-at71ct{overflow:hidden;flex:1;height:var(--ant-control-height);padding-inline:12px;border:1px solid var(--ant-color-border);border-radius:var(--ant-border-radius);font-family:monospace;font-size:13px;line-height:var(--ant-control-height);color:var(--ant-color-text-secondary);text-overflow:ellipsis;white-space:nowrap;background:var(--ant-color-fill-quaternary);}`],`
    overflow: hidden;
    flex: 1;

    height: var(--ant-control-height);
    padding-inline: 12px;
    border: 1px solid var(--ant-color-border);
    border-radius: var(--ant-border-radius);

    font-family: monospace;
    font-size: 13px;
    line-height: var(--ant-control-height);
    color: var(--ant-color-text-secondary);
    text-overflow: ellipsis;
    white-space: nowrap;

    background: var(--ant-color-fill-quaternary);
  `)},$n=(0,Zn.memo)(({platformDef:e,currentConfig:t,form:i,hasConfig:a,isDirty:o,connectResult:s,connecting:c,disabled:l,saveResult:u,saving:d,testing:f,testResult:h,writeDisabled:g,onSave:_,onDelete:v,onDiscard:y,onTestConnection:b,onCopied:x})=>{let{t:S}=n(`agent`),C=St(),w=e.id,ee=k.useWatch(`applicationId`,i),T=k.useWatch([`settings`,`connectionMode`],i),E=e.showWebhookUrl||T===`webhook`,D=(0,Zn.useMemo)(()=>e.schema.find(e=>e.key===`settings`)?.properties?.some(e=>e.key===`userId`)??!1,[e.schema]),O=k.useWatch([`settings`,`userId`],i),te=t?.settings?.userId,[A,j]=(0,Zn.useState)(!1);(0,Zn.useEffect)(()=>{O!==void 0&&j(!0)},[O]);let re=A?O:te,M=a&&D&&!(typeof re==`string`&&re.trim()),ie=ee?`${C}/api/agent/webhooks/${w}/${ee}`:`${C}/api/agent/webhooks/${w}`;return(0,K.jsxs)(`div`,{className:Qn.bottom,children:[(0,K.jsxs)(`div`,{className:Qn.actionBar,children:[a?(0,K.jsx)(m,{danger:!0,disabled:l||d||c,icon:(0,K.jsx)(_e,{size:16}),type:`primary`,onClick:v,children:S(`channel.removeChannel`)}):(0,K.jsx)(`div`,{}),(0,K.jsxs)(p,{horizontal:!0,gap:12,children:[a&&(0,K.jsx)(m,{disabled:g||d||c,icon:(0,K.jsx)(ne,{size:16}),loading:f,onClick:b,children:S(`channel.testConnection`)}),o&&(0,K.jsx)(m,{disabled:g||d||c,onClick:y,children:S(`channel.discard`)}),(0,K.jsx)(m,{disabled:g,loading:d||c,type:`primary`,onClick:_,children:S(c?`channel.connecting`:`channel.save`)})]})]}),u&&(0,K.jsx)(F,{closable:!0,showIcon:!0,description:u.type===`error`?u.errorDetail:void 0,title:u.type===`success`?S(`channel.saved`):S(`channel.saveFailed`),type:u.type}),s&&(0,K.jsx)(F,{closable:!0,showIcon:!0,description:s.type===`error`?s.errorDetail:void 0,type:s.type,title:s.title||(s.type===`success`?S(`channel.connectSuccess`):S(`channel.connectFailed`))}),h&&(0,K.jsx)(F,{closable:!0,showIcon:!0,description:h.type===`error`?h.errorDetail:void 0,type:h.type,title:h.type===`success`?S(`channel.testSuccess`):S(`channel.testFailed`)}),M&&(0,K.jsx)(F,{closable:!0,showIcon:!0,description:S(`channel.userIdMissingDesc`),message:S(`channel.userIdMissingTitle`),type:`info`}),a&&E&&w===`qq`&&(0,K.jsx)(F,{closable:!0,showIcon:!0,description:S(`channel.qq.webhookMigrationDesc`),message:S(`channel.qq.webhookMigrationTitle`),type:`info`}),a&&E&&w===`slack`&&(0,K.jsx)(F,{closable:!0,showIcon:!0,description:S(`channel.slack.webhookMigrationDesc`),message:S(`channel.slack.webhookMigrationTitle`),type:`info`}),a&&E&&(w===`feishu`||w===`lark`)&&(0,K.jsx)(F,{closable:!0,showIcon:!0,description:S(`channel.feishu.webhookMigrationDesc`),message:S(`channel.feishu.webhookMigrationTitle`),type:`info`}),a&&E&&(0,K.jsxs)(p,{gap:8,children:[(0,K.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[(0,K.jsx)(`span`,{style:{fontWeight:600},children:S(`channel.endpointUrl`)}),(0,K.jsx)(L,{children:`Event Subscription URL`})]}),(0,K.jsxs)(p,{horizontal:!0,gap:8,children:[(0,K.jsx)(`div`,{className:Qn.webhookBox,children:ie}),(0,K.jsx)(m,{onClick:()=>{navigator.clipboard.writeText(ie),x()},children:S(`channel.copy`)})]}),(0,K.jsx)(F,{showIcon:!0,type:`info`,message:(0,K.jsx)(r,{components:{bold:(0,K.jsx)(`strong`,{})},i18nKey:`channel.endpointUrlHint`,ns:`agent`,values:{fieldName:`Event Subscription URL`,name:e.name}})})]})]})})})),q,J,tr,nr,rr,ir=e((()=>{Ee(),T(),et(),h(),xt(),Ae(),j(),N(),q=t(a()),i(),$e(),bt(),ke(),Le(),Pe(),Wt(),Xn(),er(),Rn(),on(),J=t(o()),tr={content:P(`acss-13oxay5`,[`.acss-13oxay5{display:flex;flex-direction:column;align-items:center;width:100%;padding-block:16px 24px;padding-inline:24px;}`],`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding-block: 16px 24px;
    padding-inline: 24px;
  `),main:P(`acss-1uepjhn`,[`.acss-1uepjhn{position:relative;display:flex;flex:none;flex-direction:column;width:100%;background:var(--ant-color-bg-container);}`],`
    position: relative;

    display: flex;
    flex: none;
    flex-direction: column;

    width: 100%;

    background: var(--ant-color-bg-container);
  `)},nr=e=>Object.fromEntries(Object.entries(e).filter(([,e])=>e!==void 0)),rr=(0,q.memo)(({platformDef:e,agentId:t,currentConfig:r,disabled:i})=>{let{t:a}=n(`agent`),o=yt(),[s]=k.useForm(),{allowed:c}=Je(`edit_own_content`),l=nt(),u=i||!c,d=e.access?.requiredPlan===`paid`&&e.access.allowed===!1,f=e.access?.rolloutMode??`enforce`,h=l?`workspace`:`personal`,g=u||d,[_,v,b,x,S]=I(e=>[e.createBotProvider,e.deleteBotProvider,e.updateBotProvider,e.connectBot,e.testConnection]),[C,w]=(0,q.useState)(!1),[T,E]=(0,q.useState)(!1),[D,O]=(0,q.useState)(),[te,A]=(0,q.useState)(),[j,ne]=(0,q.useState)(!1),[re,M]=(0,q.useState)(),[ie,ae]=(0,q.useState)(!1),oe=(0,q.useRef)(null),se=(0,q.useRef)(null),ce=(0,q.useMemo)(()=>({register:e=>{se.current=e}}),[]),le=(0,q.useCallback)(()=>{oe.current&&=(clearTimeout(oe.current),null)},[]),ue=(0,q.useCallback)((e,t)=>{switch(e.status){case R.connected:return t?.showConnected?{title:a(`channel.connectSuccess`),type:`success`}:void 0;case R.failed:return{errorDetail:e.errorCode?a(`channel.connectionError.${e.errorCode}`,{defaultValue:e.errorMessage||a(`channel.connectFailed`)}):e.errorMessage,title:a(`channel.connectFailed`),type:`error`};case R.queued:return{title:a(`channel.connectQueued`),type:`info`};case R.starting:return{title:a(`channel.connectStarting`),type:`info`};default:return}},[a]),de=(0,q.useCallback)(async(e,t)=>{le();let n=await Ce.getRuntimeStatus(e),r=ue(n,{showConnected:t?.showConnected});r?A(r):n.status===R.disconnected&&A(void 0),t?.poll&&(n.status===R.queued||n.status===R.starting)&&(oe.current=setTimeout(()=>{de(e,t)},2e3))},[ue,le]),pe=(0,q.useCallback)(async n=>{E(!0);try{let{status:r}=await x({agentId:t,applicationId:n,platform:e.id});A({title:a(r===`queued`?`channel.connectQueued`:`channel.connectStarting`),type:`info`}),await de({applicationId:n,platform:e.id},{poll:!0,showConnected:!0})}catch(e){A({errorDetail:e?.message||String(e),type:`error`})}finally{E(!1)}},[t,x,e.id,de,a]);(0,q.useEffect)(()=>{s.resetFields(),O(void 0),A(void 0),M(void 0),le()},[e.id,s,le]),(0,q.useEffect)(()=>{r&&s.setFieldsValue(Fn(r)),ae(!1)},[r,s]),(0,q.useEffect)(()=>{if(!r?.enabled){le(),A(void 0);return}return de({applicationId:r.applicationId,platform:r.platform},{poll:!0,showConnected:!1}),()=>{le()}},[r,le,de]);let me=(0,q.useCallback)(async()=>{if(!g)try{await s.validateFields();let n=s.getFieldsValue(!0);w(!0),O(void 0),A(void 0);let{applicationId:i,credentials:a={},settings:o={}}=n,c=Object.fromEntries(Object.entries(a).filter(([,e])=>e!==void 0&&e!==``)),l=Ln(e.schema,nr(o)),u=i||``;if(!u&&c.botToken){let e=c.botToken.indexOf(`:`);e!==-1&&(u=c.botToken.slice(0,e))}r?await b(r.id,t,{applicationId:u,credentials:c,settings:l}):await _({agentId:t,applicationId:u,credentials:c,platform:e.id,settings:l}),await se.current?.({applicationId:u}),ae(!1),O({type:`success`}),setTimeout(()=>O(void 0),3e3),w(!1),await pe(u)}catch(e){if(e?.errorFields)return;console.error(e),O({errorDetail:e?.message||String(e),type:`error`}),w(!1)}},[t,e,s,r,_,b,pe,g]),he=(0,q.useCallback)(async n=>{if(!g){w(!0),O(void 0),A(void 0);try{let{applicationId:i,credentials:o}=n,c=Ln(e.schema,nr(s.getFieldValue(`settings`)||{}));r?await b(r.id,t,{applicationId:i,credentials:o,settings:c}):await _({agentId:t,applicationId:i,credentials:o,platform:e.id,settings:c}),O({type:`success`}),ae(!1),y.success(a(`channel.saved`)),await pe(i)}catch(e){O({errorDetail:e?.message||String(e),type:`error`})}finally{w(!1)}}},[t,e,s,r,_,b,pe,g,a]),ge=(0,q.useCallback)(async()=>{u||r&&ee({content:a(`channel.deleteConfirmDesc`),okButtonProps:{danger:!0},onOk:async()=>{try{await v(r.id,t),y.success(a(`channel.removed`)),s.resetFields()}catch{y.error(a(`channel.removeFailed`))}},title:a(`channel.deleteConfirm`)})},[u,r,t,v,a,s]),_e=(0,q.useCallback)(async()=>{if(!g){if(!r){y.warning(a(`channel.saveFirstWarning`));return}ne(!0),M(void 0);try{await S({applicationId:r.applicationId,platform:e.id}),M({type:`success`})}catch(e){M({errorDetail:e?.message||String(e),type:`error`})}finally{ne(!1)}}},[g,r,e.id,S,a]),N=(0,q.useCallback)(()=>{s.resetFields(),r&&s.setFieldsValue(Fn(r)),ae(!1),O(void 0),M(void 0)},[r,s]),ve=(0,q.useCallback)(()=>ae(!0),[]),ye=(0,q.useCallback)(()=>{o(`/settings/plans`)},[o]);return(0,J.jsx)(an,{value:ce,children:(0,J.jsx)(`main`,{className:tr.main,children:(0,J.jsxs)(`div`,{className:tr.content,children:[d&&(0,J.jsx)(F,{showIcon:!0,style:{marginBlockStart:16,maxWidth:1024,width:`100%`},type:f===`notice`?`warning`:`info`,description:a(`channel.paidFeature.${f}.desc.${h}`,{name:e.name}),message:(0,J.jsxs)(p,{horizontal:!0,align:`center`,gap:12,justify:`space-between`,children:[(0,J.jsx)(`span`,{children:a(`channel.paidFeature.${f}.title`,{name:e.name})}),(0,J.jsx)(m,{icon:(0,J.jsx)(fe,{size:14}),size:`small`,type:`primary`,onClick:ye,children:a(`channel.paidFeature.cta.${h}`)})]})}),(0,J.jsx)(Yn,{currentConfig:r,disabled:g,form:s,hasConfig:!!r,platformDef:e,onAuthenticated:he,onValuesChange:ve}),(0,J.jsx)($n,{connectResult:te,connecting:T,currentConfig:r,disabled:u,form:s,hasConfig:!!r,isDirty:ie,platformDef:e,saveResult:D,saving:C,testResult:re,testing:j,writeDisabled:g,onCopied:()=>y.success(a(`channel.copied`)),onDelete:ge,onDiscard:N,onSave:me,onTestConnection:_e})]})})})})})),ar,or,sr,cr,lr=e((()=>{Ee(),ar=t(a()),i(),_t(),or=t(o()),sr={desc:P(`acss-1je2fec`,[`.acss-1je2fec{max-width:360px;font-size:14px;line-height:1.6;color:var(--ant-color-text-secondary);text-align:center;}`],`
    max-width: 360px;

    font-size: 14px;
    line-height: 1.6;
    color: var(--ant-color-text-secondary);
    text-align: center;
  `),main:P(`acss-13ltulb`,[`.acss-13ltulb{position:relative;display:flex;flex:none;flex-direction:column;align-items:center;width:100%;padding:24px;background:var(--ant-color-bg-container);}`],`
    position: relative;

    display: flex;
    flex: none;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding: 24px;

    background: var(--ant-color-bg-container);
  `),placeholder:P(`acss-h9vsur`,[`.acss-h9vsur{display:flex;flex:1;flex-direction:column;gap:16px;align-items:center;justify-content:center;width:100%;max-width:1024px;padding-block:48px;}`],`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 1024px;
    padding-block: 48px;
  `),title:P(`acss-swt8ec`,[`.acss-swt8ec{font-size:18px;font-weight:500;color:var(--ant-color-text);}`],`
    font-size: 18px;
    font-weight: 500;
    color: var(--ant-color-text);
  `)},cr=(0,ar.memo)(({platformDef:e})=>{let{t}=n(`agent`),r=gt(e.name),i=r&&`Color`in r?r.Color:r;return(0,or.jsx)(`main`,{className:sr.main,children:(0,or.jsxs)(`div`,{className:sr.placeholder,children:[i&&(0,or.jsx)(i,{size:64}),(0,or.jsx)(`div`,{className:sr.title,children:t(`channel.comingSoonTitle`,{name:e.name})}),(0,or.jsx)(`div`,{className:sr.desc,children:t(`channel.comingSoonDesc`)})]})})})})),ur,dr,fr=e((()=>{ur=e=>e.map(e=>{let t=e.credentials??{},n=Object.keys(t).length>0;return{applicationId:e.applicationId,connect:!!e.enabled&&n,credentials:t,enabled:n?void 0:!1,platform:e.platform,settings:e.settings??void 0}}),dr=e=>!!(e.platform&&e.applicationId)})),Y,X,pr,mr,hr=e((()=>{st(),T(),x(),d(),xt(),rt(),b(),at(),Ae(),N(),Y=t(a()),i(),l(),zt(),Ht(),Se(),Pe(),Wt(),fr(),X=t(o()),pr={[R.connected]:`success`,[R.dormant]:`warning`,[R.failed]:`error`,[R.queued]:`processing`,[R.starting]:`processing`},mr=(0,Y.memo)(({agentId:e,currentConfig:t,disabled:r,platformDef:i,providers:a,runtimeStatus:o})=>{let{t:s}=n([`agent`,`chat`,`common`]),l=(0,Y.useRef)(null),[u,d]=(0,Y.useState)(),[f,m]=(0,Y.useState)(!1),[h,g]=(0,Y.useState)(!1),[b,x,S,C,w,T]=I(e=>[e.connectBot,e.createBotProvider,e.deleteAllBotProviders,e.exportBotProviders,e.refreshBotRuntimeStatus,e.updateBotProvider]),E=i?.access?.requiredPlan===`paid`&&i.access.allowed===!1,O=r||E,te=r||E&&!t?.enabled,k=u??t?.enabled,A=!!a?.length,j=i?.documentation?.setupGuideUrl;(0,Y.useEffect)(()=>{(!t||u===t.enabled)&&d(void 0)},[t,u]);let M=(0,Y.useCallback)(async()=>{if(a?.length)try{ot(await C(e),`lobehub-channels-${e}.json`),y.warning(s(`channel.exportContainsCredentials`))}catch(e){y.error(e instanceof Error?e.message:String(e))}},[e,C,a,s]),oe=(0,Y.useCallback)(()=>{r||l.current?.click()},[r]),se=(0,Y.useCallback)(async t=>{let n=t.target.files?.[0];if(r||!n){t.target.value=``;return}try{let t=JSON.parse(await n.text());if(!Array.isArray(t)||!t.every(dr)){y.error(s(`channel.importInvalidFormat`));return}for(let n of ur(t))await x({agentId:e,applicationId:n.applicationId,credentials:n.credentials,enabled:n.enabled,platform:n.platform,settings:n.settings}),n.connect&&await b({agentId:e,applicationId:n.applicationId,platform:n.platform});y.success(s(`channel.importSuccess`))}catch{y.error(s(`channel.importFailed`))}finally{t.target.value=``}},[e,b,x,r,s]),ce=(0,Y.useCallback)(()=>{r||!a?.length||ee({content:s(`channel.deleteAllConfirmDesc`),okButtonProps:{danger:!0},okText:s(`channel.deleteAllChannels`),onOk:async()=>{try{await S(e),y.success(s(`channel.deleteAllSuccess`))}catch{y.error(s(`channel.deleteAllFailed`))}},title:s(`channel.deleteAllConfirm`)})},[e,S,r,a,s]),ue=(0,Y.useCallback)(async()=>{if(!(O||!t?.enabled)){m(!0);try{await w({agentId:e,applicationId:t.applicationId,platform:t.platform})}catch(e){y.error(e instanceof Error?e.message:String(e))}finally{m(!1)}}},[e,t,w,O]),de=(0,Y.useCallback)(async n=>{if(!((n?O:r)||!t))try{d(n),g(!0),await T(t.id,e,{enabled:n}),n&&await b({agentId:e,applicationId:t.applicationId,platform:t.platform})}catch{d(void 0),y.error(s(`channel.updateFailed`))}finally{g(!1)}},[e,b,t,r,s,T,O]),pe=(()=>{switch(o){case R.connected:return s(`channel.statusConnected`);case R.failed:return s(`channel.statusFailed`);case R.queued:return s(`channel.statusQueued`);case R.starting:return s(`channel.statusStarting`);case R.dormant:return s(`channel.statusDormant`);case R.disconnected:return s(`channel.statusDisconnected`);default:return}})(),me=[];return i?.documentation?.portalUrl&&me.push({icon:(0,X.jsx)(v,{icon:fe}),key:`open-platform`,label:s(`channel.openPlatform`),onClick:()=>window.open(i.documentation?.portalUrl,`_blank`,`noopener,noreferrer`)}),me.length>0&&me.push({type:`divider`}),me.push({disabled:!A,icon:(0,X.jsx)(v,{icon:ie}),key:`export`,label:s(`channel.exportConfig`),onClick:M},{disabled:r,icon:(0,X.jsx)(v,{icon:ae}),key:`import`,label:s(`channel.importConfig`),onClick:oe},{type:`divider`},{danger:!0,disabled:r||!A,icon:(0,X.jsx)(v,{icon:_e}),key:`delete-all`,label:s(`channel.deleteAllChannels`),onClick:ce}),(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(`input`,{accept:`.json`,ref:l,style:{display:`none`},type:`file`,onChange:se}),(0,X.jsx)(Ke,{style:{position:`relative`},right:(0,X.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[i?.comingSoon&&(0,X.jsx)(L,{size:`small`,children:s(`channel.comingSoon`)}),i?.access?.requiredPlan===`paid`&&(0,X.jsx)(L,{color:`gold`,size:`small`,children:i.access.rolloutMode===`notice`?s(`channel.paidFeature.noticeBadge`):s(`channel.paidFeature.badge`)}),pe&&(0,X.jsx)(L,{color:o?pr[o]:void 0,size:`small`,children:pe}),t?.enabled&&(0,X.jsx)(D,{disabled:O,icon:ne,loading:f,size:`small`,title:s(`channel.refreshStatus`),onClick:ue}),t&&(0,X.jsx)(_,{checked:k,disabled:te,loading:h,onChange:de}),j&&(0,X.jsx)(D,{"aria-label":s(`channel.documentation`),icon:re,title:s(`channel.documentation`),onClick:()=>window.open(j,`_blank`,`noopener,noreferrer`)}),(0,X.jsx)(it,{items:me,placement:`bottomRight`,children:(0,X.jsx)(D,{icon:le,title:s(`more`,{ns:`common`})})})]}),left:(0,X.jsx)(Bt,{agentId:e,extraItems:i?[i.name]:void 0,title:i?(0,X.jsx)(c,{relative:`path`,to:`..`,children:s(`tab.integration`,{ns:`chat`})}):void 0}),styles:{center:Ut,left:{minWidth:0,paddingInlineStart:8}},children:!i&&(0,X.jsx)(Vt,{active:`channel`,agentId:e})})]})}),mr.displayName=`AgentChannelHeader`})),gr,_r,Z,Q,vr,yr=e((()=>{Ee(),Ue(),g(),T(),C(),at(),S(),Qe(),gr=t(Ge()),_r=t(a()),i(),be(),Pe(),Me(),Wt(),_t(),Z=t(o()),Q={card:P(`acss-1mhubm`,[`.acss-1mhubm{display:flex;flex-direction:column;gap:8px;align-items:stretch;min-height:104px;padding-block:12px;padding-inline:12px;transition:transform 0.18s,box-shadow 0.18s,border-color 0.18s;}`,`.acss-1mhubm:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgb(0 0 0 / 6%);}`],`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: stretch;

    min-height: 104px;
    padding-block: 12px;
    padding-inline: 12px;

    transition:
      transform 0.18s,
      box-shadow 0.18s,
      border-color 0.18s;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgb(0 0 0 / 6%);
    }
  `),description:P(`acss-1hrddkr`,[`.acss-1hrddkr{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-height:1.5;}`],`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    line-height: 1.5;
  `),grid:P(`acss-l5o8jz`,[`.acss-l5o8jz{display:grid;grid-template-columns:repeat(3, minmax(0, 1fr));gap:12px;width:100%;min-width:0;}`,`@media (max-width: 767.98px){.acss-l5o8jz{grid-template-columns:repeat(2, minmax(0, 1fr));}}`,`@media (max-width: 575.98px){.acss-l5o8jz{grid-template-columns:minmax(0, 1fr);}}`],`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;

    width: 100%;
    min-width: 0;

    @media (max-width: 767.98px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 575.98px) {
      grid-template-columns: minmax(0, 1fr);
    }
  `),root:P(`acss-y93udl`,[`.acss-y93udl{display:flex;flex-direction:column;align-items:center;width:100%;padding-block:24px;padding-inline:24px;}`],`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding-block: 24px;
    padding-inline: 24px;
  `),statusDot:P(`acss-1t1m5ht`,[`.acss-1t1m5ht{flex-shrink:0;width:8px;height:8px;border-radius:50%;background:var(--ant-color-success);box-shadow:0 0 0 1px var(--ant-color-bg-container);}`],`
    flex-shrink: 0;

    width: 8px;
    height: 8px;
    border-radius: 50%;

    background: var(--ant-color-success);
    box-shadow: 0 0 0 1px var(--ant-color-bg-container);
  `),title:P(`acss-160zk5k`,[`.acss-160zk5k{width:100%;margin-block:0 20px;font-size:24px;font-weight:600;line-height:1.4;color:var(--ant-color-text);}`,`@media (max-width: 575.98px){.acss-160zk5k{font-size:20px;}}`],`
    width: 100%;
    margin-block: 0 20px;

    font-size: 24px;
    font-weight: 600;
    line-height: 1.4;
    color: var(--ant-color-text);

    @media (max-width: 575.98px) {
      font-size: 20px;
    }
  `),titleAvatar:P(`acss-1wjesjg`,[`.acss-1wjesjg{display:inline-flex;margin-inline:6px;vertical-align:-6px;}`],`
    display: inline-flex;
    margin-inline: 6px;
    vertical-align: -6px;
  `),widthLimiter:P(`acss-ut780e`,[`.acss-ut780e{width:100%;max-width:1024px;}`],`
    width: 100%;
    max-width: 1024px;
  `),titleRow:P(`acss-vg3mbr`,[`.acss-vg3mbr{width:100%;min-width:0;}`],`
    width: 100%;
    min-width: 0;
  `),trailing:P(`acss-13p6dfv`,[`.acss-13p6dfv{flex-shrink:0;}`],`
    flex-shrink: 0;
  `)},vr=(0,_r.memo)(({agentId:e,platforms:t,onSelect:i,runtimeStatuses:a})=>{let{t:o}=n([`agent`,`common`]),s=He(),c=I(Ye.getAgentMetaById(e),gr.default),l=Fe(c,o(`defaultSession`,{ns:`common`})),u=(e,t)=>{switch(e){case`discord`:return o(`channel.platform.discord.description`);case`feishu`:return o(`channel.platform.feishu.description`);case`imessage`:return o(`channel.platform.imessage.description`);case`lark`:return o(`channel.platform.lark.description`);case`line`:return o(`channel.platform.line.description`);case`qq`:return o(`channel.platform.qq.description`);case`slack`:return o(`channel.platform.slack.description`);case`telegram`:return o(`channel.platform.telegram.description`);case`wechat`:return o(`channel.platform.wechat.description`);case`whatsapp`:return o(`channel.platform.whatsapp.description`);default:return o(`channel.platform.default.description`,{name:t})}},d=e=>{switch(e){case R.connected:return s.colorSuccess;case R.failed:return s.colorError;case R.queued:case R.starting:return s.colorInfo;case R.dormant:return s.colorWarning;case R.disconnected:return s.colorTextQuaternary;default:return}},m=e=>{switch(e){case R.connected:return o(`channel.connectSuccess`);case R.failed:return o(`channel.connectFailed`);case R.queued:return o(`channel.connectQueued`);case R.starting:return o(`channel.connectStarting`);case R.dormant:return o(`channel.statusDormant`);case R.disconnected:return o(`channel.runtimeDisconnected`);default:return}};return(0,Z.jsx)(`section`,{className:Q.root,children:(0,Z.jsxs)(`div`,{className:Q.widthLimiter,children:[(0,Z.jsx)(`h1`,{className:Q.title,children:(0,Z.jsx)(r,{i18nKey:`channel.home.title`,ns:`agent`,values:{name:l},components:{avatar:(0,Z.jsx)(`span`,{className:Q.titleAvatar,children:(0,Z.jsx)(E,{avatar:c.avatar||`/avatars/agent-default.png`,background:c.backgroundColor,shape:`square`,size:28})})}})}),(0,Z.jsx)(`div`,{className:Q.grid,children:t.map(e=>{let t=gt(e.name),n=t&&`Color`in t?t.Color:t,r=e.comingSoon?void 0:a.get(e.id),s=d(r),c=m(r),l=u(e.id,e.name);return(0,Z.jsxs)(f,{clickable:!0,className:Q.card,variant:`outlined`,onClick:()=>i(e.id),children:[(0,Z.jsxs)(p,{horizontal:!0,align:`center`,className:Q.titleRow,gap:8,children:[n&&(0,Z.jsx)(n,{size:24}),(0,Z.jsx)(w,{ellipsis:!0,style:{flex:1,minWidth:0},weight:600,children:e.name}),(0,Z.jsxs)(p,{horizontal:!0,align:`center`,className:Q.trailing,gap:4,children:[e.comingSoon&&(0,Z.jsx)(L,{size:`small`,style:{marginInlineEnd:0},children:o(`channel.comingSoon`)}),e.access?.requiredPlan===`paid`&&(0,Z.jsx)(L,{color:`gold`,size:`small`,style:{marginInlineEnd:0},children:e.access.rolloutMode===`notice`?o(`channel.paidFeature.noticeBadge`):o(`channel.paidFeature.badge`)}),r&&(0,Z.jsx)(`div`,{className:Q.statusDot,style:{background:s},title:c})]})]}),(0,Z.jsx)(w,{className:Q.description,fontSize:12,type:`secondary`,children:l})]},e.id)})})]})})}),vr.displayName=`PlatformGrid`})),br,$,xr,Sr,Cr,wr=e((()=>{Ee(),T(),br=t(a()),l(),At(),Ft(),we(),Lt(),ke(),Pe(),De(),Ve(),Wt(),_t(),ir(),lr(),hr(),yr(),$=t(o()),xr={container:P(`acss-biqq8m`,[`.acss-biqq8m{overflow-y:auto;display:flex;flex:1;flex-direction:column;align-items:center;width:100%;height:100%;}`],`
    overflow-y: auto;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
  `)},Sr=(0,br.memo)(()=>{let{aid:e,platform:t}=u(),n=s(),{allowed:r}=Je(`edit_own_content`),{data:i,isLoading:a,error:o,mutate:c}=I(e=>e.useFetchPlatformDefinitions()),{data:l,isLoading:d,error:f,mutate:m}=I(t=>t.useFetchBotProviders(e)),h=I(e=>e.triggerRefreshAllBotStatuses),g=Oe(Te.enableImessage);(0,br.useEffect)(()=>{e&&r&&h(e)},[e,r,h]);let _=a||d,v=o??f,y=(i?.length??0)>0&&!f,b=(0,br.useMemo)(()=>{let e=g?vt.filter(e=>e.id!==`imessage`):vt,t=new Set(e.map(e=>e.id));return[...(i??[]).filter(e=>!t.has(e.id)),...e]},[i,g]),x=(0,br.useMemo)(()=>new Map((l??[]).filter(e=>e.enabled).map(e=>[e.platform,e.runtimeStatus??R.disconnected])),[l]),S=(0,br.useMemo)(()=>t?b.find(e=>e.id===t):void 0,[b,t]),C=(0,br.useMemo)(()=>l?.find(e=>e.platform===t),[t,l]),w=(0,br.useCallback)(e=>n(e,{relative:`path`}),[n]);return e?(0,$.jsxs)(p,{flex:1,height:`100%`,style:{overflow:`hidden`},children:[(0,$.jsx)(mr,{agentId:e,currentConfig:C,disabled:!r,platformDef:S,providers:l,runtimeStatus:S?x.get(S.id):void 0}),(0,$.jsx)(p,{flex:1,style:{overflow:`hidden`},children:(0,$.jsx)(It,{data:y?i:void 0,error:v,errorVariant:`block`,isLoading:_,loading:(0,$.jsx)(Ie,{header:!1,variant:`grid`}),onRetry:()=>{c(),m()},children:t?S?(0,$.jsx)(`div`,{className:xr.container,children:S.comingSoon?(0,$.jsx)(cr,{platformDef:S}):(0,$.jsx)(rr,{agentId:e,currentConfig:C,disabled:!r,platformDef:S})}):(0,$.jsx)(jt,{}):(0,$.jsx)(`div`,{className:xr.container,children:(0,$.jsx)(vr,{agentId:e,platforms:b,runtimeStatuses:x,onSelect:w})})})})]}):null}),Cr=()=>{let{aid:e}=u();return(0,$.jsx)(Rt,{redirectPath:`/agent/${e??``}`,resourceId:e,resourceType:`agent`,children:(0,$.jsx)(Sr,{})})}}));wr();export{Cr as default,wr as t};