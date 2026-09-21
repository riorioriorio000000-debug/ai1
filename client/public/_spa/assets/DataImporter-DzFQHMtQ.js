import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,P as r,j as i}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as a,T as o}from"../vendor/vendor-react-B9HSWrpN.js";import{Bt as s,Kt as c,Mt as l,Nt as u,Vt as d,Xn as f,Yn as ee,Zn as p,at as m,it as h,qt as g}from"../vendor/vendor-ui-core-BmtybT1r.js";import{E as _,N as v,h as y,i as b,r as x}from"../vendor/vendor-antd-BWSxhuJE.js";import{Ml as S,Mr as te,Rl as ne,Wh as C,t as w}from"../vendor/vendor-icons-vienkZi5.js";import{Bn as T,Vn as E,er as D}from"./app-const-BpgKVRXh.js";import{t as O}from"./Highlighter-BL3jikMb.js";import{FD as k,Gp as re,ID as A,Jf as ie,Jp as ae,Kd as oe,MA as se,S_ as ce,TA as j,Wd as le,Yd as ue,Yf as de,Zh as fe,_p as pe,cf as me,dg as he,eE as ge,gF as M,hF as N,if as _e,ng as P,pF as ve,tE as ye,uF as F,vF as be,vp as xe,wA as Se,x_ as I}from"./index-w64_zsxD.js";import{_t as Ce,a as we,n as Te,yt as Ee}from"./chat-D3ilvURJ.js";import{n as De,r as Oe}from"./upload-D5Kt3WUo.js";import{t as ke}from"./_virtual_lobe-ui-named__Highlighter-B839w3AL.js";import{n as L,t as Ae}from"./query-string-BqMU_9Da.js";import{n as je,t as Me}from"./dist-qii7DG7t.js";var R,z,B,V,Ne,Pe=e((()=>{g(),p(),F(),R=t(a()),de(),ge(),z=t(o()),B=`ant`,V=ve(({css:e,cssVar:t})=>({modalTitleDark:e`
    &.${B}-modal-header {
      height: 80px;
      background:
        linear-gradient(
          180deg,
          color-mix(in srgb, ${t.colorBgElevated} 0%, transparent),
          ${t.colorBgContainer} 80px
        ),
        fixed 0 0 /10px 10px radial-gradient(${t.colorFill} 1px, transparent 0);
    }

    & .${B}-modal-title {
      font-size: 24px;
    }
  `,modalTitleLight:e`
    &.${B}-modal-header {
      height: 80px;
      background:
        linear-gradient(
          180deg,
          color-mix(in srgb, ${t.colorBgElevated} 0%, transparent),
          ${t.colorBgContainer} 140px
        ),
        fixed 0 0 /10px 10px radial-gradient(${t.colorFill} 1px, transparent 0);
    }

    & .${B}-modal-title {
      font-size: 24px;
    }
  `})),Ne=(0,R.memo)(({icon:e,onOpenChange:t,title:n,open:r,children:i,width:a=550,height:o})=>(0,z.jsx)(ie,{centered:!0,afterOpenChange:t,closable:!1,footer:null,height:o,open:r,width:a,classNames:{header:ye()?V.modalTitleDark:V.modalTitleLight},title:(0,z.jsxs)(c,{horizontal:!0,gap:8,children:[(0,z.jsx)(f,{icon:e}),n]}),children:i}))})),Fe,Ie,Le=e((()=>{fe(),De(),re(),ce(),_e(),Fe=class{importSettings=async e=>{await ae.getState().importAppSettings(e)};importData=async(e,t)=>{let n=e=>{t?.onStageChange?.(I.Error);let n=e;t?.onError?.({code:n.data.code,httpStatus:n.data.httpStatus,message:n.message,path:n.data.path})};if((e.messages?.length||0)+(e.sessionGroups?.length||0)+(e.sessions?.length||0)+(e.topics?.length||0)<500){t?.onStageChange?.(I.Importing);let r=Date.now();try{let n=await P.importer.importByPost.mutate({data:e}),i=Date.now()-r;t?.onStageChange?.(I.Success),t?.onSuccess?.(n.results,i)}catch(e){n(e)}return}await this.uploadData(e,{callbacks:t,handleError:n})};importPgData=async(e,t)=>{let{callbacks:n}=t||{},r=e=>{n?.onStageChange?.(I.Error);let t=e;n?.onError?.({code:t.data.code,httpStatus:t.data.httpStatus,message:t.message,path:t.data.path})};if(Object.values(e.data).map(e=>e.length).reduce((e,t)=>e+t,0)<500){n?.onStageChange?.(I.Importing);let t=Date.now();try{let r=await P.importer.importPgByPost.mutate(e),i=Date.now()-t;n?.onStageChange?.(I.Success),n?.onSuccess?.(r.results,i)}catch(e){r(e)}return}await this.uploadData(e,{callbacks:n,handleError:r})};uploadData=async(e,{callbacks:t,handleError:n})=>{let r=`${me()}.json`,i;try{t?.onStageChange?.(I.Uploading),i=(await Oe.uploadDataToS3(e,{filename:r,onProgress:(e,n)=>{t?.onFileUploading?.(n)},pathname:`import_config/${r}`})).data.path}catch{throw Error(`Upload Error`)}t?.onStageChange?.(I.Importing);let a=Date.now();try{let e=await P.importer.importByFile.mutate({pathname:i}),n=Date.now()-a;t?.onStageChange?.(I.Success),t?.onSuccess?.(e.results,n)}catch(e){n(e)}}},Ie=new Fe})),Re,ze=e((()=>{Re=async e=>{let t=await e.text();try{return{data:JSON.parse(t),success:!0}}catch(e){return console.error(e),{error:e instanceof Error?e.message:String(e),success:!1}}}})),Be,Ve,He=e((()=>{Ae(),Se(),D(),Be=class{submitDBV1UpgradeError=(e,t)=>{let n=["```json",JSON.stringify(t,null,2),"```"].join(`
`),r=t?.message||``,i=L.stringifyUrl({query:{body:n,labels:`❌ Database Migration Error`,title:`[Migration Error V${e}] ${r}`},url:j(T,`/issues/new`)});window.open(i,`_blank`)};submitImportError=e=>{let t=["```json",JSON.stringify(e,null,2),"```"].join(`
`),n=e?.message||``,r=L.stringifyUrl({query:{body:t,labels:`❌ Import Config Error`,title:`[Config Import Error] ${n}`},url:j(T,`/issues/new`)});window.open(r,`_blank`)};submitPgliteInitError=e=>{let t=["```json",JSON.stringify(e,null,2),"```"].join(`
`),n=e?.message||``,r=L.stringifyUrl({query:{body:t,labels:`❌ Database Init Error`,title:`[Database Init Error] ${n}`},url:j(T,`/issues/new`)});window.open(r,`_blank`)}},Ve=new Be})),Ue,H,U,We=e((()=>{g(),ke(),p(),xe(),u(),x(),w(),Ue=t(a()),i(),je(),D(),He(),H=t(o()),U=(0,Ue.memo)(({error:e,onClick:t})=>{let{t:i}=n(`common`);return(0,H.jsx)(_,{icon:(0,H.jsx)(f,{icon:te}),status:`error`,style:{paddingBlock:24,width:450},title:i(`importModal.error.title`),extra:(0,H.jsxs)(c,{gap:12,style:{textAlign:`start`},children:[(0,H.jsx)(pe,{style:{flex:1},title:e?.message,type:`error`,extra:(0,H.jsx)(O,{actionIconSize:`small`,language:`json`,children:JSON.stringify(e,null,2)})}),(0,H.jsx)(l,{onClick:t,children:i(`close`)})]}),subTitle:(0,H.jsx)(Me,{children:(0,H.jsx)(r,{i18nKey:`importModal.error.desc`,ns:`common`,components:[(0,H.jsx)(`span`,{},`0`),(0,H.jsx)(`a`,{"aria-label":`issue`,href:E,rel:`noreferrer`,target:`_blank`,onClick:t=>{t.preventDefault(),Ve.submitImportError(e)}},`1`)]})})})})})),W,G,Ge,Ke,K,qe=e((()=>{d(),F(),W=t(o()),G=28,Ge=be`
  12.5% {
    box-shadow:
      ${G}px -${G}px 0 0,
      ${G*2}px -${G}px 0 0,
      ${G*3}px -${G}px 0 5px,
      ${G}px 0 0 5px,
      ${G*2}px 0 0 0,
      ${G*3}px 0 0 5px,
      ${G}px ${G}px 0 0,
      ${G*2}px ${G}px 0 0,
      ${G*3}px ${G}px 0 0;
  }

  25% {
    box-shadow:
      ${G}px -${G}px 0 5px,
      ${G*2}px -${G}px 0 0,
      ${G*3}px -${G}px 0 5px,
      ${G}px 0 0 0,
      ${G*2}px 0 0 0,
      ${G*3}px 0 0 0,
      ${G}px ${G}px 0 0,
      ${G*2}px ${G}px 0 5px,
      ${G*3}px ${G}px 0 0;
  }

  50% {
    box-shadow:
      ${G}px -${G}px 0 5px,
      ${G*2}px -${G}px 0 5px,
      ${G*3}px -${G}px 0 0,
      ${G}px 0 0 0,
      ${G*2}px 0 0 0,
      ${G*3}px 0 0 0,
      ${G}px ${G}px 0 0,
      ${G*2}px ${G}px 0 0,
      ${G*3}px ${G}px 0 5px;
  }

  62.5% {
    box-shadow:
      ${G}px -${G}px 0 0,
      ${G*2}px -${G}px 0 0,
      ${G*3}px -${G}px 0 0,
      ${G}px 0 0 5px,
      ${G*2}px 0 0 0,
      ${G*3}px 0 0 0,
      ${G}px ${G}px 0 0,
      ${G*2}px ${G}px 0 5px,
      ${G*3}px ${G}px 0 5px;
  }

  75% {
    box-shadow:
      ${G}px -${G}px 0 0,
      ${G*2}px -${G}px 0 5px,
      ${G*3}px -${G}px 0 0,
      ${G}px 0 0 0,
      ${G*2}px 0 0 0,
      ${G*3}px 0 0 5px,
      ${G}px ${G}px 0 0,
      ${G*2}px ${G}px 0 0,
      ${G*3}px ${G}px 0 5px;
  }

  87.5% {
    box-shadow:
      ${G}px -${G}px 0 0,
      ${G*2}px -${G}px 0 5px,
      ${G*3}px -${G}px 0 0,
      ${G}px 0 0 0,
      ${G*2}px 0 0 5px,
      ${G*3}px 0 0 0,
      ${G}px ${G}px 0 5px,
      ${G*2}px ${G}px 0 0,
      ${G*3}px ${G}px 0 0;
  }
`,Ke=ve(({css:e,cssVar:t})=>({loader:e`
      transform: translateX(-${G*2}px);

      aspect-ratio: 1;
      width: 6px;
      border-radius: 50%;

      color: ${t.colorPrimary};

      box-shadow:
        ${G}px -${G}px 0 0,
        ${G*2}px -${G}px 0 0,
        ${G*3}px -${G}px 0 0,
        ${G}px 0 0 5px,
        ${G*2}px 0 0 5px,
        ${G*3}px 0 0 5px,
        ${G}px ${G}px 0 0,
        ${G*2}px ${G}px 0 0,
        ${G*3}px ${G}px 0 0;

      animation: ${Ge} 2s infinite linear;
    `})),K=()=>(0,W.jsx)(s,{style:{height:80},children:(0,W.jsx)(`div`,{className:Ke.loader})})})),Je,q,Ye,Xe=e((()=>{g(),x(),F(),Je=t(a()),i(),ue(),qe(),q=t(o()),Ye=(0,Je.memo)(({progress:e=0,speed:t=0,restTime:r})=>{let{t:i}=n(`common`);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(K,{}),(0,q.jsxs)(c,{align:`center`,gap:8,width:`100%`,children:[i(`importModal.uploading.desc`),(0,q.jsxs)(c,{flex:1,gap:8,width:`100%`,children:[(0,q.jsx)(v,{showInfo:!0,percent:e,strokeColor:N.colorSuccess,trailColor:N.colorSuccessBg}),(0,q.jsxs)(c,{horizontal:!0,distribution:`space-between`,style:{color:N.colorTextDescription,fontSize:12},children:[(0,q.jsxs)(`span`,{children:[i(`importModal.uploading.restTime`),`: `,r?oe(r):`-`]}),(0,q.jsxs)(`span`,{children:[i(`importModal.uploading.speed`),`: `,le(t*1024)]})]})]})]})]})})})),Ze,J,Qe,$e,Y,et,tt=e((()=>{k(),g(),u(),m(),x(),w(),Ze=t(a()),i(),de(),J=t(o()),Qe=e=>{let t=[];for(let[n,r]of Object.entries(e.data))Array.isArray(r)&&r.length>0&&t.push({count:r.length,name:n});return t},$e=e=>e.reduce((e,t)=>e+t.count,0),Y={duplicateAlert:A(`acss-b576b2`,[`.acss-b576b2{margin-block-start:var(--ant-margin-md);padding:var(--ant-padding-md);border:1px solid var(--ant-color-warning-border);border-radius:var(--ant-border-radius-lg);background-color:var(--ant-color-warning-bg);}`],`
      margin-block-start: var(--ant-margin-md);
      padding: var(--ant-padding-md);
      border: 1px solid var(--ant-color-warning-border);
      border-radius: var(--ant-border-radius-lg);

      background-color: var(--ant-color-warning-bg);
    `),duplicateDescription:A(`acss-esgf58`,[`.acss-esgf58{margin-block-start:var(--ant-margin-xs);font-size:var(--ant-font-size-sm);color:var(--ant-color-text-secondary);}`],`
      margin-block-start: var(--ant-margin-xs);
      font-size: var(--ant-font-size-sm);
      color: var(--ant-color-text-secondary);
    `),duplicateOptions:A(`acss-6l1d78`,[`.acss-6l1d78{margin-block-start:var(--ant-margin-sm);}`],`
      margin-block-start: var(--ant-margin-sm);
    `),duplicateTag:A(`acss-jg9ix4`,[`.acss-jg9ix4{border-color:var(--ant-color-warning-border);color:var(--ant-color-warning);background-color:var(--ant-color-warning-bg);}`],`
      border-color: var(--ant-color-warning-border);
      color: var(--ant-color-warning);
      background-color: var(--ant-color-warning-bg);
    `),hash:A(`acss-z0io7v`,[`.acss-z0io7v{font-family:var(--ant-font-family-code);font-size:12px;color:var(--ant-color-text-tertiary);}`],`
      font-family: var(--ant-font-family-code);
      font-size: 12px;
      color: var(--ant-color-text-tertiary);
    `),infoIcon:A(`acss-sm62rd`,[`.acss-sm62rd{color:var(--ant-color-text-secondary);}`],`
      color: var(--ant-color-text-secondary);
    `),modalContent:A(`acss-7sktub`,[`.acss-7sktub{padding-block:var(--ant-padding-md);padding-inline:0;}`],`
      padding-block: var(--ant-padding-md);
      padding-inline: 0;
    `),successIcon:A(`acss-1rjpqen`,[`.acss-1rjpqen{color:var(--ant-color-success);}`],`
      color: var(--ant-color-success);
    `),tableContainer:A(`acss-1138us3`,[`.acss-1138us3{overflow:hidden;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);}`],`
      overflow: hidden;
      border: 1px solid var(--ant-color-border-secondary);
      border-radius: var(--ant-border-radius-lg);
    `),tableName:A(`acss-1vq385i`,[`.acss-1vq385i{font-family:var(--ant-font-family-code);}`],`
      font-family: var(--ant-font-family-code);
    `),warningIcon:A(`acss-wk30w3`,[`.acss-wk30w3{color:var(--ant-color-warning);}`],`
      color: var(--ant-color-warning);
    `)},et=({open:e=!0,onOpenChange:t=()=>{},onConfirm:r=()=>{},onCancel:i=()=>{},importData:a})=>{let{t:o}=n(`common`),[s]=(0,Ze.useState)(`skip`),u=Qe(a),d=$e(u),f=[{dataIndex:`name`,key:`name`,render:e=>(0,J.jsx)(`div`,{className:Y.tableName,children:e}),title:o(`importPreview.tables.name`)},{dataIndex:`count`,key:`count`,title:o(`importPreview.tables.count`)}];return(0,J.jsx)(ie,{open:e,title:o(`importPreview.title`),width:700,footer:[(0,J.jsx)(l,{onClick:()=>{t(!1),i()},children:o(`cancel`)},`cancel`),(0,J.jsx)(l,{type:`primary`,onClick:()=>{r(s===`overwrite`),t(!1)},children:o(`importPreview.confirmImport`)},`confirm`)],onCancel:()=>t(!1),children:(0,J.jsx)(`div`,{className:Y.modalContent,children:(0,J.jsxs)(c,{gap:16,children:[(0,J.jsxs)(c,{gap:4,children:[(0,J.jsxs)(c,{horizontal:!0,align:`center`,justify:`space-between`,width:`100%`,children:[(0,J.jsxs)(c,{horizontal:!0,align:`center`,gap:8,children:[(0,J.jsx)(S,{className:Y.infoIcon,size:16}),(0,J.jsx)(h,{strong:!0,children:o(`importPreview.totalRecords`,{count:d})})]}),(0,J.jsx)(c,{horizontal:!0,children:(0,J.jsx)(h,{type:`secondary`,children:o(`importPreview.totalTables`,{count:u.length})})})]}),(0,J.jsxs)(c,{horizontal:!0,className:Y.hash,gap:4,children:[o(`importPreview.hashLabel`),`: `,(0,J.jsx)(`span`,{children:a.schemaHash})]})]}),(0,J.jsx)(`div`,{className:Y.tableContainer,children:(0,J.jsx)(y,{columns:f,dataSource:u,pagination:!1,rowKey:`name`,scroll:{y:350},size:`small`})})]})})})}})),nt,X,rt,it,at=e((()=>{k(),g(),p(),u(),x(),w(),nt=t(a()),i(),X=t(o()),rt={zeroCell:A(`acss-156cso2`,[`.acss-156cso2{color:var(--ant-color-text-quaternary);}`],`
      color: var(--ant-color-text-quaternary);
    `)},it=(0,nt.memo)(({duration:e,dataSource:t,onClickFinish:r})=>{let{t:i}=n(`common`),a=e=>e||(0,X.jsx)(`span`,{className:rt.zeroCell,children:`0`});return(0,X.jsx)(_,{icon:(0,X.jsx)(f,{icon:C}),status:`success`,style:{paddingBlock:24,paddingInline:0},title:i(`importModal.finish.title`),extra:(0,X.jsx)(l,{size:`large`,type:`primary`,onClick:r,children:i(`importModal.finish.start`)}),subTitle:t?(0,X.jsxs)(c,{gap:16,width:500,children:[i(`importModal.finish.subTitle`,{duration:(e/1e3).toFixed(2)}),(0,X.jsx)(y,{bordered:!0,dataSource:t,pagination:!1,rowKey:`title`,size:`small`,columns:[{dataIndex:`title`,render:a,title:i(`importModal.result.type`)},{dataIndex:`added`,render:a,title:i(`importModal.result.added`)},{dataIndex:`skips`,render:a,title:i(`importModal.result.skips`)},{dataIndex:`error`,render:a,title:i(`importModal.result.errors`)},{dataIndex:`updated`,render:a,title:i(`importModal.result.update`)}]})]}):i(`importModal.finish.onlySettings`)})})})),Z,Q,$,ot,st=e((()=>{k(),he(),d(),u(),se(),x(),F(),w(),Z=t(a()),i(),Pe(),Le(),Te(),Ce(),ze(),We(),Xe(),tt(),qe(),at(),Q=t(o()),$={children:A(`acss-1h98ta`,[`.acss-1h98ta::before{content:'';position:absolute;inset:0;background-color:transparent;}`],`
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: transparent;
    }
  `),wrapper:A(`acss-15i34s2`,[`.acss-15i34s2{font-size:inherit;}`],`
    font-size: inherit;
  `)},ot=(0,Z.memo)(({children:e,onFinishImport:t})=>{let{t:r}=n(`common`),i=Ee(e=>e.refreshAgentList),[a,o]=we(e=>[e.refreshMessages,e.refreshTopic]),[c,u]=(0,Z.useState)(0),[d,f]=(0,Z.useState)(I.Start),[p,m]=(0,Z.useState)(),[h,g]=(0,Z.useState)(),[_,v]=(0,Z.useState)(),[y,x]=(0,Z.useState)(!1),[S,te]=(0,Z.useState)(void 0),[C,w]=(0,Z.useState)(!1),T=(0,Z.useCallback)(async e=>{let t=await Re(e);return t.success?(w(!1),te(t.data),x(!0),!1):(w(!0),ee.error({description:t.error,title:r(`importModal.error.invalidConfig`)}),!1)},[r]),E=(0,Z.useMemo)(()=>{if(!_)return;let{type:e,...t}=_;if(e!==`settings`)return Object.entries(t).filter(([,e])=>!!e).map(([e,t])=>({added:t.added,error:t.errors,skips:t.skips,title:e,updated:t.updated||0}))},[_]),D=d===I.Success||d===I.Error,O=(0,Z.useCallback)(()=>{f(I.Finished),v(void 0),g(void 0),m(void 0),t?.()},[t]),k=(0,Z.useMemo)(()=>{switch(d){case I.Preparing:return(0,Q.jsxs)(s,{gap:24,padding:40,children:[(0,Q.jsx)(K,{}),(0,Q.jsx)(`p`,{children:r(`importModal.preparing`)})]});case I.Importing:return(0,Q.jsxs)(s,{gap:24,padding:40,children:[(0,Q.jsx)(K,{}),(0,Q.jsx)(`p`,{children:r(`importModal.loading`)})]});case I.Uploading:return(0,Q.jsx)(s,{gap:24,padding:40,children:(0,Q.jsx)(Ye,{progress:p?.progress,restTime:p?.restTime,speed:p?.speed})});case I.Success:return(0,Q.jsx)(s,{gap:24,paddingInline:16,children:(0,Q.jsx)(it,{dataSource:E,duration:c,onClickFinish:O})});case I.Error:return(0,Q.jsx)(s,{gap:24,paddingBlock:24,paddingInline:0,children:(0,Q.jsx)(U,{error:h,onClick:O})});default:return}},[O,E,c,p,h,d,r]);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Ne,{icon:ne,title:r(`importModal.title`),width:D?600:400,open:C||d!==I.Start&&d!==I.Finished,onOpenChange:e=>{e||w(!1)},children:C?(0,Q.jsx)(s,{gap:24,padding:40,children:(0,Q.jsx)(b,{accept:`application/json`,beforeUpload:T,className:M($.wrapper),maxCount:1,showUploadList:!1,children:(0,Q.jsx)(l,{children:r(`importModal.error.selectAnotherFile`)})})}):k}),(0,Q.jsx)(b,{accept:`application/json`,beforeUpload:T,className:M($.wrapper),maxCount:1,showUploadList:!1,children:(0,Q.jsx)(`div`,{className:M($.children),children:e})}),S&&(0,Q.jsx)(et,{importData:S,open:y,onOpenChange:x,onConfirm:async e=>{f(I.Preparing),await Ie.importPgData(S,{callbacks:{onError:e=>{g(e)},onFileUploading:e=>{m(e)},onStageChange:e=>{f(e)},onSuccess:(e,t)=>{e&&v(e),u(t)}},overwriteExisting:e}),await i(),await a(),await o()}})]})})}));export{st as n,ot as t};