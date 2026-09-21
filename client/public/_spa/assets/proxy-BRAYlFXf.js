import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{Kt as ee,Mt as o,Nt as s,X as c,Yn as l,Z as u,qt as d}from"../vendor/vendor-ui-core-BmtybT1r.js";import{D as f,T as p,o as m,v as h}from"../vendor/vendor-ui-runtime-NzUbUsUl.js";import{X as g,et as _,r as v}from"../vendor/vendor-antd-BWSxhuJE.js";import{Br as te,Ur as y}from"./app-const-BpgKVRXh.js";import{Dn as b,En as ne,FD as x,Hm as S,Hp as re,ID as C,MA as w,Vm as ie,zp as T}from"./index-w64_zsxD.js";import{n as E,t as D}from"./RadioGroup-B72dmG6b.js";import{n as O,t as k}from"./Form-DEzxLt7J.js";import{n as A,t as j}from"./SettingHeader-PrbzMVzI.js";import{n as M,r as N}from"./anchor-weN0xOBo.js";var P,F,I,L,ae=e((()=>{x(),s(),m(),p(),P=t(i()),r(),F=t(a()),I={container:C(`acss-1o97ikf`,[`.acss-1o97ikf{pointer-events:none;position:fixed;z-index:1000;inset-block-end:24px;inset-inline-start:50%;transform:translateX(-50%);}`],`
    pointer-events: none;

    position: fixed;
    z-index: 1000;
    inset-block-end: 24px;
    inset-inline-start: 50%;
    transform: translateX(-50%);
  `),pill:C(`acss-yc40i`,[`.acss-yc40i{pointer-events:auto;display:inline-flex;gap:8px;align-items:center;padding-block:6px;padding-inline:16px 6px;border:1px solid color-mix(in srgb, var(--ant-color-border-secondary) 60%, transparent);border-radius:999px;font-size:13px;color:var(--ant-color-text);background:color-mix(in srgb, var(--ant-color-bg-elevated) 85%, transparent);-webkit-backdrop-filter:blur(16px) saturate(1.2);backdrop-filter:blur(16px) saturate(1.2);box-shadow:var(--ant-box-shadow-secondary);}`],`
    pointer-events: auto;

    display: inline-flex;
    gap: 8px;
    align-items: center;

    padding-block: 6px;
    padding-inline: 16px 6px;
    border: 1px solid color-mix(in srgb, var(--ant-color-border-secondary) 60%, transparent);
    border-radius: 999px;

    font-size: 13px;
    color: var(--ant-color-text);

    background: color-mix(in srgb, var(--ant-color-bg-elevated) 85%, transparent);
    backdrop-filter: blur(16px) saturate(1.2);
    box-shadow: var(--ant-box-shadow-secondary);
  `),dot:C(`acss-1nuduwt`,[`.acss-1nuduwt{flex-shrink:0;width:6px;height:6px;border-radius:50%;background:var(--ant-color-warning);}`],`
    flex-shrink: 0;

    width: 6px;
    height: 6px;
    border-radius: 50%;

    background: var(--ant-color-warning);
  `),message:C(`acss-15a5nk3`,[`.acss-15a5nk3{color:var(--ant-color-text-secondary);}`],`
    color: var(--ant-color-text-secondary);
  `),resetButton:C(`acss-16gid9k`,[`.acss-16gid9k{height:28px;padding-block:0;padding-inline:12px;border-radius:999px;color:var(--ant-color-text-secondary)!important;background:transparent;}`,`.acss-16gid9k:hover{color:var(--ant-color-text)!important;background:var(--ant-color-fill-secondary)!important;}`],`
    height: 28px;
    padding-block: 0;
    padding-inline: 12px;
    border-radius: 999px;

    color: var(--ant-color-text-secondary) !important;

    background: transparent;

    &:hover {
      color: var(--ant-color-text) !important;
      background: var(--ant-color-fill-secondary) !important;
    }
  `),saveButton:C(`acss-6ir0fo`,[`.acss-6ir0fo{height:28px;padding-block:0;padding-inline:14px;border-radius:999px;font-weight:500;}`],`
    height: 28px;
    padding-block: 0;
    padding-inline: 14px;
    border-radius: 999px;

    font-weight: 500;
  `)},L=(0,P.memo)(({isDirty:e,isSaving:t,onReset:r,onSave:i})=>{let{t:a}=n(`electron`);return(0,F.jsx)(h,{children:e&&(0,F.jsx)(f,{animate:{opacity:1,y:0},"aria-live":`polite`,className:I.container,exit:{opacity:0,y:16},initial:{opacity:0,y:16},role:`status`,transition:{duration:.18,ease:`easeOut`},children:(0,F.jsxs)(`div`,{className:I.pill,children:[(0,F.jsx)(`span`,{className:I.dot}),(0,F.jsx)(`span`,{className:I.message,children:a(`proxy.unsavedChanges`)}),(0,F.jsx)(o,{className:I.resetButton,disabled:t,size:`small`,type:`text`,onClick:r,children:a(`proxy.resetButton`)}),(0,F.jsx)(o,{className:I.saveButton,loading:t,size:`small`,type:`primary`,onClick:i,children:a(`proxy.saveButton`)})]})})})}),L.displayName=`SaveBar`})),R,z,B,V,oe=e((()=>{v(),R=t(i()),z=[`enableProxy`,`proxyType`,`proxyServer`,`proxyPort`,`proxyRequireAuth`,`proxyUsername`,`proxyPassword`],B=e=>e??``,V=(e,t)=>{let n=_.useWatch([],e);return{isDirty:(0,R.useMemo)(()=>!t||!n?!1:z.some(e=>B(n[e])!==B(t[e])),[n,t])}}})),H,U,W,G,K,q,J,Y,X,Z,se=e((()=>{d(),O(),s(),E(),b(),u(),w(),v(),H=t(i()),r(),y(),N(),S(),T(),ae(),oe(),U=t(a()),W=[`http`,`https`,`socks5`],G=/^(?:\d{1,3}\.){3}\d{1,3}$/,K=/^[\dA-Z](?:[\dA-Z-]*[\dA-Z])?(?:\.[\dA-Z](?:[\dA-Z-]*[\dA-Z])?)*$/i,q=e=>typeof e==`object`&&!!e&&`errorFields`in e,J=e=>W.includes(e),Y=e=>G.test(e)||K.test(e),X=e=>{if(!e.enableProxy)return!0;if(!J(e.proxyType))return!1;let t=e.proxyServer?.trim();if(!t||!Y(t))return!1;let n=e.proxyPort?.trim();if(!n)return!1;let r=Number.parseInt(n,10);return Number.isNaN(r)||r<1||r>65535?!1:e.proxyRequireAuth?!!(e.proxyUsername?.trim()&&e.proxyPassword?.trim()):!0},Z=()=>{let{t:e}=n(`electron`),[t]=k.useForm(),[r,i]=(0,H.useState)(`https://www.google.com`),[a,s]=(0,H.useState)(!1),[u,d]=(0,H.useState)(!1),f=_.useWatch(`enableProxy`,t),p=_.useWatch(`proxyRequireAuth`,t),[m,h]=re(e=>[e.setProxySettings,e.useGetProxySettings]),{data:v,isLoading:y}=h(),{isDirty:b}=V(t,v),x=(0,H.useRef)(!1);(0,H.useEffect)(()=>{v&&!x.current&&(t.setFieldsValue(v),x.current=!0)},[t,v]);let S=(0,H.useCallback)(async(t,n)=>{if(!(!f||J(n)))throw Error(e(`proxy.validation.typeRequired`))},[f,e]),C=(0,H.useCallback)(async(t,n)=>{if(!f)return;let r=n?.trim();if(!r)throw Error(e(`proxy.validation.serverRequired`));if(!Y(r))throw Error(e(`proxy.validation.serverInvalid`))},[f,e]),w=(0,H.useCallback)(async(t,n)=>{if(!f)return;let r=n?.trim();if(!r)throw Error(e(`proxy.validation.portRequired`));let i=Number.parseInt(r,10);if(Number.isNaN(i)||i<1||i>65535)throw Error(e(`proxy.validation.portInvalid`))},[f,e]),T=(0,H.useCallback)(async(t,n)=>{if(!(!f||!p||n?.trim()))throw Error(e(`proxy.validation.usernameRequired`))},[f,p,e]),E=(0,H.useCallback)(async(t,n)=>{if(!(!f||!p||n?.trim()))throw Error(e(`proxy.validation.passwordRequired`))},[f,p,e]),O=(0,H.useCallback)((n,r)=>{if(`enableProxy`in n){let i=n.enableProxy;if(i&&!X(r))return;m(i?r:{enableProxy:!1}).catch(n=>{t.setFieldsValue({enableProxy:!i});let r=n instanceof Error?n.message:String(n);l.error(e(`proxy.saveFailed`,{error:r}))})}},[t,m,e]),A=(0,H.useCallback)(async()=>{let n;try{n=await t.validateFields()}catch{return}try{d(!0),await m(n),l.success(e(`proxy.saveSuccess`))}catch(t){let n=t instanceof Error?t.message:String(t);l.error(e(`proxy.saveFailed`,{error:n}))}finally{d(!1)}},[t,m,e]),j=(0,H.useCallback)(()=>{v&&t.setFieldsValue(v)},[t,v]),N=(0,H.useCallback)(async()=>{try{s(!0);let n=await t.validateFields(),i={...v,...n},a=await ie.testProxyConfig(i,r);a.success?l.success(e(`proxy.testSuccessWithTime`,{time:a.responseTime})):l.error(`${e(`proxy.testFailed`)}: ${a.message??``}`)}catch(t){if(q(t))return;let n=t instanceof Error?t.message:`Unknown error`;l.error(`${e(`proxy.testFailed`)}: ${n}`)}finally{s(!1)}},[v,r,t,e]);return y?(0,U.jsx)(ne.Text,{rows:5}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(k,{collapsible:!1,form:t,initialValues:v,items:[{children:[{children:(0,U.jsx)(c,{}),desc:e(`proxy.enableDesc`),label:(0,U.jsx)(M,{id:`proxy-enable`,children:e(`proxy.enable`)}),layout:`horizontal`,minWidth:void 0,name:`enableProxy`,valuePropName:`checked`}],title:e(`proxy.enable`)},{children:[{children:(0,U.jsx)(D,{disabled:!f,options:W.map(e=>({label:e.toUpperCase(),value:e}))}),label:e(`proxy.type`),minWidth:void 0,name:`proxyType`,rules:[{validator:S}]},{children:(0,U.jsx)(g,{disabled:!f,placeholder:`127.0.0.1`}),desc:e(`proxy.validation.serverRequired`),label:e(`proxy.server`),name:`proxyServer`,rules:[{validator:C}]},{children:(0,U.jsx)(g,{disabled:!f,placeholder:`7890`,style:{width:120}}),desc:e(`proxy.validation.portRequired`),label:e(`proxy.port`),name:`proxyPort`,rules:[{validator:w}]}],title:e(`proxy.basicSettings`)},{children:[{children:(0,U.jsx)(c,{disabled:!f}),desc:e(`proxy.authDesc`),label:(0,U.jsx)(M,{id:`proxy-auth`,children:e(`proxy.auth`)}),layout:`horizontal`,minWidth:void 0,name:`proxyRequireAuth`,valuePropName:`checked`},...p&&f?[{children:(0,U.jsx)(g,{placeholder:e(`proxy.username_placeholder`)}),label:e(`proxy.username`),name:`proxyUsername`,rules:[{validator:T}]},{children:(0,U.jsx)(g.Password,{autoComplete:`new-password`,placeholder:e(`proxy.password_placeholder`)}),label:e(`proxy.password`),name:`proxyPassword`,rules:[{validator:E}]}]:[]],title:e(`proxy.authSettings`)},{children:[{children:(0,U.jsxs)(ee,{horizontal:!0,align:`center`,gap:8,width:`100%`,children:[(0,U.jsx)(g,{placeholder:e(`proxy.testUrlPlaceholder`),style:{flex:1},value:r,onChange:e=>i(e.target.value)}),(0,U.jsx)(o,{loading:a,type:`default`,onClick:N,children:e(`proxy.testButton`)})]}),desc:e(`proxy.testDescription`),label:(0,U.jsx)(M,{id:`proxy-test`,children:e(`proxy.testUrl`)}),minWidth:void 0}],title:e(`proxy.connectionTest`)}],itemsType:`group`,variant:`filled`,onValuesChange:O,...te}),(0,U.jsx)(L,{isDirty:b,isSaving:u,onReset:j,onSave:A})]})}})),Q,$;e((()=>{r(),A(),se(),Q=t(a()),$=()=>{let{t:e}=n(`setting`);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(j,{title:e(`tab.proxy`)}),(0,Q.jsx)(Z,{})]})}}))();export{$ as default};