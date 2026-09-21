import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,V as r,j as i,z as a}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as o,T as s}from"../vendor/vendor-react-B9HSWrpN.js";import{Kt as c,Mt as l,Nt as u,Xn as d,Yn as f,Zn as p,h as m,i as h,m as g,qt as _,r as v,rt as ee,v as te}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Et as ne,Kt as y,S as re,W as ie,X as b,c as ae,et as x,i as oe,r as S,ut as C}from"../vendor/vendor-antd-BWSxhuJE.js";import{El as se,En as ce,Ku as le,Ma as ue,Op as de,Sf as fe,cs as pe,fc as me,gp as he,mt as ge,t as w,ua as _e,vp as ve}from"../vendor/vendor-icons-vienkZi5.js";import{Bf as ye,Bt as be,Cy as xe,FD as T,ID as E,Kf as D,MA as Se,Sy as Ce,Uf as we,Zf as O,Zh as Te,_p as Ee,cg as De,gF as Oe,ig as k,ng as ke,og as A,qf as j,rg as Ae,uF as je,vp as Me}from"./index-w64_zsxD.js";import{n as Ne,t as Pe}from"./CopyButton-BjxUZD85.js";import{n as Fe,t as Ie}from"./DropdownMenu-1ae8j9bI.js";import{n as Le,t as Re}from"./Tag-C95BKTI7.js";import{i as ze,t as Be}from"./es-CY4vbFU8.js";import{t as Ve}from"./_virtual_lobe-ui-named_base-ui_useModalContext-CvZy-G5G.js";import{n as He,t as Ue}from"./Select-C0UJO2yB.js";import{t as We}from"./_virtual_lobe-ui-named__stopPropagation-DeAweL-3.js";import{t as Ge}from"./_virtual_lobe-ui-named_base-ui_confirmModal-B6WREEdZ.js";import{t as Ke}from"./Skeleton-PcdZNeTb.js";import{n as qe,t as Je}from"./AsyncBoundary-K-esguw4.js";import{n as Ye,t as Xe}from"./ListSkeleton-BbfOCSiw.js";var M,N,Ze,Qe,$e=e((()=>{T(),_(),S(),w(),i(),M=t(s()),N={card:E(`acss-123p1jh`,[`.acss-123p1jh{cursor:pointer;transition:all 0.2s;}`,`.acss-123p1jh:hover{border-color:var(--ant-color-primary);box-shadow:0 2px 8px rgb(0 0 0 / 10%);}`],`
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      border-color: var(--ant-color-primary);
      box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    }
  `),cardDisabled:E(`acss-1djmc02`,[`.acss-1djmc02{cursor:not-allowed;opacity:0.5;}`],`
    cursor: not-allowed;
    opacity: 0.5;
  `),description:E(`acss-um2tu2`,[`.acss-um2tu2{font-size:12px;color:var(--ant-color-text-secondary);}`],`
    font-size: 12px;
    color: var(--ant-color-text-secondary);
  `),grid:E(`acss-zp84on`,[`.acss-zp84on{display:grid;grid-template-columns:repeat(2, 1fr);gap:16px;}`],`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  `),icon:E(`acss-12f1vkk`,[`.acss-12f1vkk{display:flex;align-items:center;justify-content:center;width:48px;height:48px;margin-block-end:12px;border-radius:12px;background:var(--ant-color-fill-secondary);}`],`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;
    margin-block-end: 12px;
    border-radius: 12px;

    background: var(--ant-color-fill-secondary);
  `),title:E(`acss-1aw48o2`,[`.acss-1aw48o2{margin-block-end:4px;font-weight:500;}`],`
    margin-block-end: 4px;
    font-weight: 500;
  `)},Ze=[{description:`creds.typeDesc.kv-env`,icon:(0,M.jsx)(ce,{size:24}),type:`kv-env`},{description:`creds.typeDesc.kv-header`,icon:(0,M.jsx)(le,{size:24}),type:`kv-header`},{description:`creds.typeDesc.oauth`,icon:(0,M.jsx)(se,{size:24}),type:`oauth`},{description:`creds.typeDesc.file`,icon:(0,M.jsx)(fe,{size:24}),type:`file`}],Qe=({disabled:e,onSelect:t})=>{let{t:r}=n(`setting`);return(0,M.jsx)(`div`,{className:N.grid,children:Ze.map(({type:n,icon:i,description:a})=>(0,M.jsx)(ne,{className:`${N.card} ${e?N.cardDisabled:``}`,size:`small`,onClick:()=>{e||t(n)},children:(0,M.jsxs)(c,{align:`center`,children:[(0,M.jsx)(`div`,{className:N.icon,children:i}),(0,M.jsx)(`div`,{className:N.title,children:r(`creds.types.${n}`)}),(0,M.jsx)(`div`,{className:N.description,children:r(a)})]})},n))})}})),P,F,et,tt,nt=e((()=>{T(),Be(),u(),Se(),k(),S(),P=t(o()),i(),F=t(s()),et={footer:E(`acss-l0v861`,[`.acss-l0v861{display:flex;gap:8px;justify-content:flex-end;margin-block-start:24px;}`],`
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-block-start: 24px;
  `)},tt=({credsApi:e,disabled:t,onBack:r,onSuccess:i})=>{let{t:a}=n(`setting`),[o]=x.useForm(),[s,c]=(0,P.useState)(null),[u,d]=(0,P.useState)(``),[p,m]=(0,P.useState)(!1),h=A({mutationFn:async n=>{if(!t){if(!s||!u)throw Error(`File is required`);await e.client.createFile.mutate({description:n.description,fileHashId:s,fileName:u,key:n.key,name:n.name})}},onSuccess:()=>{i()}});return(0,F.jsxs)(x,{form:o,layout:`vertical`,onFinish:e=>{if(!t){if(!s){f.error(a(`creds.form.fileRequired`));return}h.mutate(e)}},children:[(0,F.jsxs)(x.Item,{required:!0,label:a(`creds.form.file`),children:[(0,F.jsxs)(oe.Dragger,{beforeUpload:async n=>{if(t)return!1;m(!0);try{let t=await n.arrayBuffer(),r=new Uint8Array(t),i=``;for(let e=0;e<r.byteLength;e++)i+=String.fromCharCode(r[e]);let o=btoa(i),s=await e.client.uploadFile.mutate({file:o,fileName:n.name,fileType:n.type||`application/octet-stream`});d(s.fileName),c(s.fileHashId),f.success(a(`creds.file.uploadSuccess`))}catch(e){console.error(`[FileCredForm] Upload failed:`,e),f.error(e instanceof Error?e.message:a(`creds.file.uploadFailed`))}finally{m(!1)}return!1},disabled:p||t,maxCount:1,showUploadList:u?{showRemoveIcon:!0}:!1,onRemove:()=>{c(null),d(``)},children:[(0,F.jsx)(`p`,{className:`ant-upload-drag-icon`,children:(0,F.jsx)(ze,{})}),(0,F.jsx)(`p`,{className:`ant-upload-text`,children:a(p?`creds.file.uploading`:`creds.form.uploadHint`)}),(0,F.jsx)(`p`,{className:`ant-upload-hint`,children:a(`creds.form.uploadDesc`)})]}),u&&(0,F.jsxs)(`div`,{style:{marginTop:8},children:[a(`creds.form.selectedFile`),`: `,u]})]}),(0,F.jsx)(x.Item,{label:a(`creds.form.key`),name:`key`,rules:[{required:!0,message:a(`creds.form.keyRequired`)},{pattern:/^[\w-]+$/,message:a(`creds.form.keyPattern`)}],children:(0,F.jsx)(b,{disabled:t,placeholder:`e.g., gcp-service-account`})}),(0,F.jsx)(x.Item,{label:a(`creds.form.name`),name:`name`,rules:[{required:!0,message:a(`creds.form.nameRequired`)}],children:(0,F.jsx)(b,{disabled:t,placeholder:`e.g., GCP Service Account`})}),(0,F.jsx)(x.Item,{label:a(`creds.form.description`),name:`description`,children:(0,F.jsx)(b.TextArea,{disabled:t,placeholder:a(`creds.form.descriptionPlaceholder`),rows:2})}),(0,F.jsxs)(`div`,{className:et.footer,children:[(0,F.jsx)(l,{onClick:r,children:a(`creds.form.back`)}),(0,F.jsx)(l,{disabled:!s||t,htmlType:`submit`,loading:h.isPending,type:`primary`,children:a(`creds.form.submit`)})]})]})}})),I,rt,it,at=e((()=>{T(),_(),u(),k(),S(),w(),i(),I=t(s()),rt={footer:E(`acss-l0v861`,[`.acss-l0v861{display:flex;gap:8px;justify-content:flex-end;margin-block-start:24px;}`],`
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-block-start: 24px;
  `),kvPair:E(`acss-vmukiq`,[`.acss-vmukiq{display:flex;gap:8px;align-items:flex-start;}`],`
    display: flex;
    gap: 8px;
    align-items: flex-start;
  `)},it=({credsApi:e,type:t,disabled:r,onBack:i,onSuccess:a})=>{let{t:o}=n(`setting`),[s]=x.useForm(),u=A({mutationFn:async n=>{if(r)return;let i=(n.kvPairs||[]).reduce((e,t)=>(t.key&&t.value&&(e[t.key]=t.value),e),{});await e.client.createKV.mutate({description:n.description,key:n.key,name:n.name,type:t,values:i})},onSuccess:()=>{a()}});return(0,I.jsxs)(x,{form:s,initialValues:{kvPairs:[{key:``,value:``}]},layout:`vertical`,onFinish:e=>{r||u.mutate(e)},children:[(0,I.jsx)(x.Item,{label:o(`creds.form.key`),name:`key`,rules:[{required:!0,message:o(`creds.form.keyRequired`)},{pattern:/^[\w-]+$/,message:o(`creds.form.keyPattern`)}],children:(0,I.jsx)(b,{disabled:r,placeholder:`e.g., openai`})}),(0,I.jsx)(x.Item,{label:o(`creds.form.name`),name:`name`,rules:[{required:!0,message:o(`creds.form.nameRequired`)}],children:(0,I.jsx)(b,{disabled:r,placeholder:`e.g., OpenAI API Key`})}),(0,I.jsx)(x.Item,{label:o(`creds.form.values`),children:(0,I.jsx)(x.List,{name:`kvPairs`,children:(e,{add:n,remove:i})=>(0,I.jsxs)(c,{gap:8,children:[e.map(({key:n,name:a,...s})=>(0,I.jsxs)(`div`,{className:rt.kvPair,children:[(0,I.jsx)(x.Item,{...s,name:[a,`key`],style:{flex:1,marginBottom:0},children:(0,I.jsx)(b,{disabled:r,placeholder:t===`kv-env`?`ENV_VAR_NAME`:`Header-Name`})}),(0,I.jsx)(x.Item,{...s,name:[a,`value`],style:{flex:2,marginBottom:0},children:(0,I.jsx)(b.Password,{autoComplete:`new-password`,disabled:r,placeholder:o(`creds.form.valuePlaceholder`)})}),e.length>1&&(0,I.jsx)(l,{disabled:r,icon:pe,size:`small`,type:`text`,onClick:()=>i(a)})]},n)),(0,I.jsx)(l,{block:!0,disabled:r,icon:_e,type:`dashed`,onClick:()=>n({key:``,value:``}),children:o(`creds.form.addPair`)})]})})}),(0,I.jsx)(x.Item,{label:o(`creds.form.description`),name:`description`,children:(0,I.jsx)(b.TextArea,{disabled:r,placeholder:o(`creds.form.descriptionPlaceholder`),rows:2})}),(0,I.jsxs)(`div`,{className:rt.footer,children:[(0,I.jsx)(l,{onClick:i,children:o(`creds.form.back`)}),(0,I.jsx)(l,{disabled:r,htmlType:`submit`,loading:u.isPending,type:`primary`,children:o(`creds.form.submit`)})]})]})}})),L,R,ot,st=e((()=>{T(),_(),h(),u(),He(),k(),S(),i(),L=t(s()),R={connectionOption:E(`acss-12yghq1`,[`.acss-12yghq1{display:flex;gap:8px;align-items:center;}`],`
    display: flex;
    gap: 8px;
    align-items: center;
  `),footer:E(`acss-l0v861`,[`.acss-l0v861{display:flex;gap:8px;justify-content:flex-end;margin-block-start:24px;}`],`
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-block-start: 24px;
  `),provider:E(`acss-1av9vxy`,[`.acss-1av9vxy{font-weight:500;}`],`
    font-weight: 500;
  `),username:E(`acss-15a5nk3`,[`.acss-15a5nk3{color:var(--ant-color-text-secondary);}`],`
    color: var(--ant-color-text-secondary);
  `)},ot=({credsApi:e,disabled:t,onBack:r,onSuccess:i})=>{let{t:a}=n(`setting`),[o]=x.useForm(),{data:s,isLoading:u}=e.query.listOAuthConnections.useQuery(),d=s?.connections??[],f=d.map(e=>{let t=e.providerId||`OAuth`,n=e.providerName||e.providerUserName||e.email||e.name;return{label:(0,L.jsxs)(`span`,{className:R.connectionOption,children:[e.avatar&&(0,L.jsx)(v,{avatar:e.avatar,size:24}),(0,L.jsxs)(`span`,{children:[(0,L.jsx)(`span`,{className:R.provider,children:t}),n&&(0,L.jsxs)(`span`,{className:R.username,children:[` - `,n]})]})]}),title:[t,n].filter(Boolean).join(` `),value:e.id}}),p=A({mutationFn:async n=>{t||await e.client.createOAuth.mutate({description:n.description,key:n.key,name:n.name,oauthConnectionId:n.oauthConnectionId})},onSuccess:()=>{i()}});return u?(0,L.jsx)(c,{align:`center`,justify:`center`,style:{padding:48},children:(0,L.jsx)(ie,{})}):d.length===0?(0,L.jsxs)(c,{gap:16,children:[(0,L.jsx)(y,{description:a(`creds.oauth.noConnections`)}),(0,L.jsx)(`div`,{className:R.footer,children:(0,L.jsx)(l,{onClick:r,children:a(`creds.form.back`)})})]}):(0,L.jsxs)(x,{form:o,layout:`vertical`,onFinish:e=>{t||p.mutate(e)},children:[(0,L.jsx)(x.Item,{label:a(`creds.form.selectConnection`),name:`oauthConnectionId`,rules:[{required:!0,message:a(`creds.form.connectionRequired`)}],children:(0,L.jsx)(Ue,{disabled:t,options:f,placeholder:a(`creds.form.selectConnectionPlaceholder`)})}),(0,L.jsx)(x.Item,{label:a(`creds.form.key`),name:`key`,rules:[{required:!0,message:a(`creds.form.keyRequired`)},{pattern:/^[\w-]+$/,message:a(`creds.form.keyPattern`)}],children:(0,L.jsx)(b,{disabled:t,placeholder:`e.g., github-oauth`})}),(0,L.jsx)(x.Item,{label:a(`creds.form.name`),name:`name`,rules:[{required:!0,message:a(`creds.form.nameRequired`)}],children:(0,L.jsx)(b,{disabled:t,placeholder:`e.g., GitHub Connection`})}),(0,L.jsx)(x.Item,{label:a(`creds.form.description`),name:`description`,children:(0,L.jsx)(b.TextArea,{disabled:t,placeholder:a(`creds.form.descriptionPlaceholder`),rows:2})}),(0,L.jsxs)(`div`,{className:R.footer,children:[(0,L.jsx)(l,{onClick:r,children:a(`creds.form.back`)}),(0,L.jsx)(l,{disabled:t,htmlType:`submit`,loading:p.isPending,type:`primary`,children:a(`creds.form.submit`)})]})]})}})),z,B,ct,lt,ut=e((()=>{T(),Ve(),S(),z=t(o()),i(),$e(),nt(),at(),st(),B=t(s()),ct={steps:E(`acss-15yy0l6`,[`.acss-15yy0l6{margin-block-end:24px;}`],`
    margin-block-end: 24px;
  `)},lt=({credsApi:e,onSuccess:t})=>{let{t:r}=n(`setting`),{close:i}=te(),[a,o]=(0,z.useState)(0),[s,c]=(0,z.useState)(null),l=e=>{c(e),o(1)},u=()=>{o(0),c(null)},d=()=>{t?.(),i()};return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(re,{className:ct.steps,current:a,size:`small`,items:[{title:r(`creds.createModal.selectType`)},{title:r(`creds.createModal.fillForm`)}]}),a===0?(0,B.jsx)(Qe,{onSelect:l}):(()=>{switch(s){case`kv-env`:case`kv-header`:return(0,B.jsx)(it,{credsApi:e,type:s,onBack:u,onSuccess:d});case`oauth`:return(0,B.jsx)(ot,{credsApi:e,onBack:u,onSuccess:d});case`file`:return(0,B.jsx)(tt,{credsApi:e,onBack:u,onSuccess:d});default:return null}})()]})}})),dt,ft,pt=e((()=>{O(),a(),ut(),dt=t(s()),ft=e=>m({content:(0,dt.jsx)(lt,{...e}),footer:null,maskClosable:!0,styles:{content:{paddingBlock:16,paddingInline:24}},title:r(`creds.createModal.title`,{ns:`setting`}),width:`min(90vw, 640px)`})})),mt,ht,gt,_t=e((()=>{mt=(e,t)=>e.ownerType===`user`&&e.ownerAccountId===t,ht=(e,t)=>e.ownerType!==`user`||mt(e,t),gt=(e,t,n,r)=>mt(e,t)?r:n})),V,vt=e((()=>{T(),V={container:E(`acss-13c59oi`,[`.acss-13c59oi{padding-block:12px;padding-inline:0;}`],`
    padding-block: 12px;
    padding-inline: 0;
  `),description:E(`acss-1mt1k42`,[`.acss-1mt1k42{overflow:hidden;font-size:12px;color:var(--ant-color-text-tertiary);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    font-size: 12px;
    color: var(--ant-color-text-tertiary);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),icon:E(`acss-hk2dnf`,[`.acss-hk2dnf{display:flex;flex-shrink:0;align-items:center;justify-content:center;width:48px;height:48px;border-radius:12px;background:var(--ant-color-fill-tertiary);}`],`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;
    border-radius: 12px;

    background: var(--ant-color-fill-tertiary);
  `),key:E(`acss-dodfap`,[`.acss-dodfap{font-family:monospace;font-size:12px;color:var(--ant-color-text-secondary);}`],`
    font-family: monospace;
    font-size: 12px;
    color: var(--ant-color-text-secondary);
  `),title:E(`acss-1p6k2nb`,[`.acss-1p6k2nb{font-size:15px;font-weight:500;color:var(--ant-color-text);}`],`
    font-size: 15px;
    font-weight: 500;
    color: var(--ant-color-text);
  `)}})),yt,H,bt,xt,U,St=e((()=>{Fe(),_(),p(),We(),h(),u(),Ge(),Le(),w(),yt=t(o()),i(),D(),vt(),H=t(s()),bt={file:(0,H.jsx)(fe,{size:20}),"kv-env":(0,H.jsx)(ce,{size:20}),"kv-header":(0,H.jsx)(le,{size:20}),oauth:(0,H.jsx)(se,{size:20})},xt={file:`purple`,"kv-env":`blue`,"kv-header":`cyan`,oauth:`green`},U=(0,yt.memo)(({cred:e,extra:t,onEdit:r,onDelete:i,onView:a})=>{let{t:o}=n(`setting`),{allowed:s}=j(`manage_provider_key`),u=()=>{s&&g({content:o(`creds.actions.deleteConfirm.content`),okButtonProps:{danger:!0},okText:o(`creds.actions.deleteConfirm.ok`),onOk:()=>i?.(e.id),title:o(`creds.actions.deleteConfirm.title`)})},f=s&&(e.type===`kv-env`||e.type===`kv-header`),p=[...a&&f?[{icon:(0,H.jsx)(d,{icon:he}),key:`view`,label:o(`creds.actions.view`),onClick:()=>a(e)}]:[],...r?[{icon:(0,H.jsx)(d,{icon:ue}),key:`edit`,label:o(`creds.actions.edit`),disabled:!s,onClick:()=>r(e)}]:[],...i?[{danger:!0,disabled:!s,icon:(0,H.jsx)(d,{icon:ge}),key:`delete`,label:o(`creds.actions.delete`),onClick:u}]:[]];return(0,H.jsxs)(c,{horizontal:!0,align:`center`,className:V.container,gap:16,justify:`space-between`,children:[(0,H.jsxs)(c,{horizontal:!0,align:`center`,gap:16,style:{flex:1,overflow:`hidden`},children:[(0,H.jsx)(`div`,{className:V.icon,children:e.type===`oauth`&&e.oauthAvatar?(0,H.jsx)(v,{avatar:e.oauthAvatar,size:32}):(0,H.jsx)(`span`,{style:{color:`var(--lobe-color-text-secondary)`,display:`flex`},children:bt[e.type]})}),(0,H.jsxs)(c,{gap:4,style:{overflow:`hidden`},children:[(0,H.jsxs)(c,{horizontal:!0,align:`center`,gap:8,children:[(0,H.jsx)(`span`,{className:V.title,children:e.name}),(0,H.jsx)(Re,{color:xt[e.type],children:o(`creds.types.${e.type}`)}),e.ownerType===`user`&&(0,H.jsx)(Re,{children:o(`creds.owner.sharedBy`,{name:e.ownerDisplayName})})]}),(0,H.jsxs)(c,{horizontal:!0,align:`center`,gap:8,children:[(0,H.jsx)(`code`,{className:V.key,children:e.key}),e.description&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`span`,{style:{color:`var(--lobe-color-text-quaternary)`},children:`·`}),(0,H.jsx)(`span`,{className:V.description,children:e.description})]})]})]})]}),(0,H.jsxs)(c,{horizontal:!0,align:`center`,gap:8,onClick:ee,children:[t,p.length>0&&(0,H.jsx)(Ie,{items:p,placement:`bottomRight`,children:(0,H.jsx)(l,{disabled:!s,icon:de})})]})]})}),U.displayName=`CredItem`})),Ct,W,G,wt,Tt=e((()=>{T(),_(),u(),k(),S(),w(),Ct=t(o()),i(),D(),W=t(s()),G={footer:E(`acss-l0v861`,[`.acss-l0v861{display:flex;gap:8px;justify-content:flex-end;margin-block-start:24px;}`],`
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-block-start: 24px;
  `),kvPair:E(`acss-vmukiq`,[`.acss-vmukiq{display:flex;gap:8px;align-items:flex-start;}`],`
    display: flex;
    gap: 8px;
    align-items: flex-start;
  `)},wt=({cred:e,credsApi:t,onCancel:r,onSuccess:i})=>{let{t:a}=n(`setting`),{allowed:o}=j(`manage_provider_key`),[s]=x.useForm(),[u,d]=(0,Ct.useState)(!0);(0,Ct.useEffect)(()=>{(async()=>{if(!o){d(!1);return}try{let n=(await t.client.get.query({decrypt:!0,id:e.id})).plaintext||{},r=Object.entries(n).map(([e,t])=>({key:e,value:t}));s.setFieldsValue({description:e.description,kvPairs:r.length>0?r:[{key:``,value:``}],name:e.name})}catch{s.setFieldsValue({description:e.description,kvPairs:[{key:``,value:``}],name:e.name})}finally{d(!1)}})()},[o,e.id,e.name,e.description,t,s]);let f=A({mutationFn:async n=>{if(!o)return;let r=(n.kvPairs||[]).reduce((e,t)=>(t.key&&t.value&&(e[t.key]=t.value),e),{});await t.client.update.mutate({description:n.description,id:e.id,name:n.name,values:r})},onSuccess:()=>{i()}});return u?(0,W.jsx)(c,{align:`center`,justify:`center`,style:{padding:48},children:(0,W.jsx)(ie,{})}):(0,W.jsxs)(x,{form:s,layout:`vertical`,onFinish:e=>{o&&f.mutate(e)},children:[(0,W.jsx)(x.Item,{label:a(`creds.form.name`),name:`name`,rules:[{required:!0,message:a(`creds.form.nameRequired`)}],children:(0,W.jsx)(b,{disabled:!o})}),(0,W.jsx)(x.Item,{label:a(`creds.form.values`),children:(0,W.jsx)(x.List,{name:`kvPairs`,children:(t,{add:n,remove:r})=>(0,W.jsxs)(c,{gap:8,children:[t.map(({key:n,name:i,...s})=>(0,W.jsxs)(`div`,{className:G.kvPair,children:[(0,W.jsx)(x.Item,{...s,name:[i,`key`],style:{flex:1,marginBottom:0},children:(0,W.jsx)(b,{disabled:!o,placeholder:e.type===`kv-env`?`ENV_VAR_NAME`:`Header-Name`})}),(0,W.jsx)(x.Item,{...s,name:[i,`value`],style:{flex:2,marginBottom:0},children:(0,W.jsx)(b.Password,{autoComplete:`new-password`,disabled:!o,placeholder:a(`creds.form.valuePlaceholder`)})}),t.length>1&&(0,W.jsx)(l,{disabled:!o,icon:pe,size:`small`,type:`text`,onClick:()=>r(i)})]},n)),(0,W.jsx)(l,{block:!0,disabled:!o,icon:_e,type:`dashed`,onClick:()=>n({key:``,value:``}),children:a(`creds.form.addPair`)})]})})}),(0,W.jsx)(x.Item,{label:a(`creds.form.description`),name:`description`,children:(0,W.jsx)(b.TextArea,{disabled:!o,placeholder:a(`creds.form.descriptionPlaceholder`),rows:2})}),(0,W.jsxs)(`div`,{className:G.footer,children:[(0,W.jsx)(l,{onClick:r,children:a(`creds.form.cancel`)}),(0,W.jsx)(l,{disabled:!o,htmlType:`submit`,loading:f.isPending,type:`primary`,children:a(`creds.form.save`)})]})]})}})),K,Et,Dt,Ot=e((()=>{T(),u(),k(),S(),i(),D(),K=t(s()),Et={footer:E(`acss-l0v861`,[`.acss-l0v861{display:flex;gap:8px;justify-content:flex-end;margin-block-start:24px;}`],`
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-block-start: 24px;
  `)},Dt=({cred:e,credsApi:t,onCancel:r,onSuccess:i})=>{let{t:a}=n(`setting`),{allowed:o}=j(`manage_provider_key`),[s]=x.useForm(),c=A({mutationFn:async n=>{o&&await t.client.update.mutate({description:n.description,id:e.id,name:n.name})},onSuccess:()=>{i()}});return(0,K.jsxs)(x,{form:s,layout:`vertical`,initialValues:{description:e.description,name:e.name},onFinish:e=>{o&&c.mutate(e)},children:[(0,K.jsx)(x.Item,{label:a(`creds.form.name`),name:`name`,rules:[{required:!0,message:a(`creds.form.nameRequired`)}],children:(0,K.jsx)(b,{disabled:!o})}),(0,K.jsx)(x.Item,{label:a(`creds.form.description`),name:`description`,children:(0,K.jsx)(b.TextArea,{disabled:!o,placeholder:a(`creds.form.descriptionPlaceholder`),rows:2})}),(0,K.jsxs)(`div`,{className:Et.footer,children:[(0,K.jsx)(l,{onClick:r,children:a(`creds.form.cancel`)}),(0,K.jsx)(l,{disabled:!o,htmlType:`submit`,loading:c.isPending,type:`primary`,children:a(`creds.form.save`)})]})]})}})),q,kt,At=e((()=>{Ve(),Tt(),Ot(),q=t(s()),kt=({cred:e,credsApi:t,onSuccess:n})=>{let{close:r}=te(),i=e.type===`kv-env`||e.type===`kv-header`,a=()=>{n?.(),r()};return i?(0,q.jsx)(wt,{cred:e,credsApi:t,onCancel:r,onSuccess:a}):(0,q.jsx)(Dt,{cred:e,credsApi:t,onCancel:r,onSuccess:a})}})),jt,Mt,Nt=e((()=>{O(),a(),At(),jt=t(s()),Mt=e=>m({content:(0,jt.jsx)(kt,{...e}),footer:null,maskClosable:!0,styles:{content:{paddingBlock:16,paddingInline:24}},title:r(`creds.edit.title`,{ns:`setting`}),width:`min(90vw, 560px)`})})),J,Y,Pt,Ft,It,Lt=e((()=>{J=t(o()),Te(),Y={client:ke.market.creds,query:Ae.market.creds},Pt=(0,J.createContext)(null),Ft=Pt.Provider,It=()=>(0,J.useContext)(Pt)??Y})),Rt,X,zt,Z,Bt,Vt,Ht,Ut=e((()=>{T(),Ne(),_(),Me(),k(),S(),je(),w(),Rt=t(o()),i(),Ke(),X=t(s()),{Text:zt}=ae,Z={kvKey:E(`acss-qrcjbo`,[`.acss-qrcjbo{min-width:140px;padding-block:8px;padding-inline:12px;border-radius:var(--ant-border-radius) 0 0 var(--ant-border-radius);font-family:var(--ant-font-family-code);font-size:13px;color:var(--ant-color-text-secondary);background:var(--ant-color-fill-quaternary);}`],`
    min-width: 140px;
    padding-block: 8px;
    padding-inline: 12px;
    border-radius: var(--ant-border-radius) 0 0 var(--ant-border-radius);

    font-family: var(--ant-font-family-code);
    font-size: 13px;
    color: var(--ant-color-text-secondary);

    background: var(--ant-color-fill-quaternary);
  `),kvRow:E(`acss-caq295`,[`.acss-caq295{display:flex;align-items:stretch;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius);}`,`.acss-caq295:not(:last-child){margin-block-end:8px;}`],`
    display: flex;
    align-items: stretch;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius);

    &:not(:last-child) {
      margin-block-end: 8px;
    }
  `),kvValue:E(`acss-13u92hv`,[`.acss-13u92hv{display:flex;flex:1;gap:8px;align-items:center;justify-content:space-between;padding-block:8px;padding-inline:12px;border-radius:0 var(--ant-border-radius) var(--ant-border-radius) 0;font-family:var(--ant-font-family-code);font-size:13px;background:var(--ant-color-bg-container);}`],`
    display: flex;
    flex: 1;
    gap: 8px;
    align-items: center;
    justify-content: space-between;

    padding-block: 8px;
    padding-inline: 12px;
    border-radius: 0 var(--ant-border-radius) var(--ant-border-radius) 0;

    font-family: var(--ant-font-family-code);
    font-size: 13px;

    background: var(--ant-color-bg-container);
  `),maskedValue:E(`acss-1oca8w2`,[`.acss-1oca8w2{color:var(--ant-color-text-quaternary);letter-spacing:2px;}`],`
    color: var(--ant-color-text-quaternary);
    letter-spacing: 2px;
  `),toggleBtn:E(`acss-mzoz8u`,[`.acss-mzoz8u{cursor:pointer;display:flex;align-items:center;justify-content:center;padding:4px;border-radius:var(--ant-border-radius-sm);color:var(--ant-color-text-tertiary);transition:all 0.2s;}`,`.acss-mzoz8u:hover{color:var(--ant-color-text);background:var(--ant-color-fill-secondary);}`],`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 4px;
    border-radius: var(--ant-border-radius-sm);

    color: var(--ant-color-text-tertiary);

    transition: all 0.2s;

    &:hover {
      color: var(--ant-color-text);
      background: var(--ant-color-fill-secondary);
    }
  `),valuesSection:E(`acss-9muhwb`,[`.acss-9muhwb{margin-block-start:16px;}`],`
    margin-block-start: 16px;
  `),valuesTitle:E(`acss-2ng5yf`,[`.acss-2ng5yf{margin-block-end:12px;font-weight:500;}`],`
    margin-block-end: 12px;
    font-weight: 500;
  `)},Bt=e=>e.length<=4?`••••••••`:`••••••••`+e.slice(-4),Vt=({keyName:e,value:t})=>{let[n,r]=(0,Rt.useState)(!1);return(0,X.jsxs)(`div`,{className:Z.kvRow,children:[(0,X.jsx)(`div`,{className:Z.kvKey,children:e}),(0,X.jsxs)(`div`,{className:Z.kvValue,children:[(0,X.jsx)(zt,{className:Oe(!n&&Z.maskedValue),style:{flex:1,fontFamily:`var(--lobe-font-family-code)`,fontSize:13,wordBreak:`break-all`},children:n?t:Bt(t)}),(0,X.jsxs)(c,{horizontal:!0,align:`center`,gap:4,children:[(0,X.jsx)(`div`,{className:Z.toggleBtn,onClick:()=>r(!n),children:n?(0,X.jsx)(ve,{size:16}):(0,X.jsx)(he,{size:16})}),(0,X.jsx)(Pe,{content:t,size:`small`})]})]})]})},Ht=({cred:e,credsApi:t})=>{let{t:r}=n(`setting`),{data:i,isLoading:a,error:o}=De({queryFn:()=>t.client.get.query({decrypt:!0,id:e.id}),queryKey:[`cred-plaintext`,e.id]}),s=i?.plaintext||{},c=Object.entries(s);return a?(0,X.jsx)(be,{rows:3}):o?(0,X.jsx)(Ee,{showIcon:!0,description:o.message,message:r(`creds.view.error`),type:`error`}):(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Ee,{showIcon:!0,message:r(`creds.view.warning`),style:{marginBottom:16},type:`warning`}),(0,X.jsxs)(C,{bordered:!0,column:1,size:`small`,children:[(0,X.jsx)(C.Item,{label:r(`creds.table.name`),children:e.name}),(0,X.jsx)(C.Item,{label:r(`creds.table.key`),children:(0,X.jsx)(`code`,{children:e.key})}),(0,X.jsx)(C.Item,{label:r(`creds.table.type`),children:e.type?r(`creds.types.${e.type}`):`-`})]}),c.length>0&&(0,X.jsxs)(`div`,{className:Z.valuesSection,children:[(0,X.jsx)(`div`,{className:Z.valuesTitle,children:r(`creds.view.values`)}),c.map(([e,t])=>(0,X.jsx)(Vt,{keyName:e,value:String(t)},e))]}),c.length===0&&e.type===`oauth`&&(0,X.jsx)(Ee,{showIcon:!0,description:r(`creds.view.oauthNote`),message:r(`creds.view.noValues`),style:{marginTop:16},type:`info`})]})}})),Wt,Gt,Kt=e((()=>{O(),a(),Ut(),Wt=t(s()),Gt=e=>m({content:(0,Wt.jsx)(Ht,{...e}),footer:null,maskClosable:!0,styles:{content:{paddingBlock:16,paddingInline:24}},title:r(`creds.view.title`,{name:e.cred.name,ns:`setting`}),width:`min(90vw, 600px)`})})),Q,$,qt,Jt=e((()=>{T(),_(),u(),k(),Ce(),S(),w(),i(),qe(),Ye(),D(),ye(),_t(),St(),Nt(),Lt(),Kt(),Q=t(s()),$={container:E(`acss-1lg51jb`,[`.acss-1lg51jb{display:flex;flex-direction:column;gap:8px;}`],`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `),empty:E(`acss-b1extn`,[`.acss-b1extn{padding-block:48px;padding-inline:0;}`],`
    padding-block: 48px;
    padding-inline: 0;
  `),signInPrompt:E(`acss-1o0wdg0`,[`.acss-1o0wdg0{display:flex;flex-direction:column;gap:16px;align-items:center;justify-content:center;padding:48px;}`],`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;

    padding: 48px;
  `)},qt=()=>{let{t:e}=n(`setting`),{isAuthenticated:t,isLoading:r,session:i,signIn:a}=we(),{allowed:o}=j(`manage_provider_key`),s=It(),u=i?.userInfo?.accountId,{data:d,error:f,isLoading:p,refetch:m}=s.query.list.useQuery(void 0,{enabled:t}),h=d?.data??[],g=e=>ht(e,u),_=e=>gt(e,u,s,Y),v=A({mutationFn:async e=>{if(!o)return;let t=h.find(t=>t.id===e);!t||!g(t)||await _(t).client.delete.mutate({id:e})},onSuccess:()=>{m()}}),ee=e=>{g(e)&&Mt({cred:e,credsApi:_(e),onSuccess:()=>m()})},te=e=>{g(e)&&Gt({cred:e,credsApi:_(e)})};return r?(0,Q.jsx)(Xe,{paddingInline:0}):t?!p&&f instanceof xe&&f.data?.code===`NOT_FOUND`?(0,Q.jsx)(`div`,{className:$.signInPrompt,children:(0,Q.jsx)(y,{description:e(`creds.orgSetupRequired`)})}):(0,Q.jsx)(`div`,{className:$.container,children:(0,Q.jsx)(Je,{data:d,empty:(0,Q.jsx)(y,{className:$.empty,description:e(`creds.empty`)}),error:f,errorVariant:`block`,isEmpty:h.length===0,isLoading:p,loading:(0,Q.jsx)(Xe,{paddingInline:0}),onRetry:()=>m(),children:(0,Q.jsx)(c,{gap:0,children:h.map(e=>{let t=g(e);return(0,Q.jsx)(U,{cred:e,onDelete:t?e=>v.mutate(e):void 0,onEdit:t&&o?e=>ee(e):void 0,onView:t?te:void 0},e.id)})})})}):(0,Q.jsxs)(`div`,{className:$.signInPrompt,children:[(0,Q.jsx)(y,{description:e(`creds.signInRequired`)}),(0,Q.jsx)(l,{icon:me,type:`primary`,onClick:()=>a(),children:e(`creds.signIn`)})]})}}));export{It as a,ft as c,Lt as i,pt as l,Jt as n,U as o,Ft as r,St as s,qt as t};