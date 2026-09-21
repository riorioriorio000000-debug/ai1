import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{Kt as o,Nt as s,Xn as c,Zn as l,at as u,it as ee,lt as te,n as d,qt as f,t as p}from"../vendor/vendor-ui-core-BmtybT1r.js";import{As as m,Kt as ne,Wt as re,t as h,u as ie}from"../vendor/vendor-icons-vienkZi5.js";import{c as g}from"./app-const-BpgKVRXh.js";import{Br as ae,Gr as _,Ko as oe,Lr as se,Mr as ce,Or as le,Rr as ue,Ur as de,aS as fe,gF as pe,hF as v,jr as y,ml as me,pF as he,sS as ge,uF as b,wx as _e}from"./index-w64_zsxD.js";import{n as ve,t as ye}from"./Popover-Cd3scH3I.js";import{t as be}from"./_virtual_lobe-ui-named__Tooltip-DNompU8a.js";import{n as xe,t as Se}from"./Tag-C95BKTI7.js";import{Mn as Ce,Un as we,Wn as Te,a as x,c as Ee,l as De,n as Oe}from"./chat-D3ilvURJ.js";import{c as ke,s as Ae}from"./upload-D5Kt3WUo.js";import{Cn as S,Dt as je,Ft as Me,Kn as Ne,Nn as Pe,P as C,S as Fe,X as Ie,dn as w,jn as Le,tn as T,zn as Re}from"./symbols-Th1H-AV5.js";import{r as ze,t as Be}from"./FileIcon-CDKQg3YR.js";import{c as Ve,i as He,s as Ue,t as We}from"./LocalFile-BPtd65uA.js";import{An as Ge,ci as Ke,dn as qe,fi as E,in as Je,qr as D}from"./ReactSlashPlugin-C1ueZSPJ.js";import{t as O}from"./es-BfaWydN2.js";import{c as Ye,n as Xe,s as Ze,t as Qe}from"./useProjectSkills-U5cztNXt.js";var k=e((()=>{})),A,j,$e=e((()=>{b(),k(),A=(e,t)=>`
  color: ${e};

  &.selected {
    border-radius: ${t};
    outline: 2px solid ${e};
    outline-offset: 1px;
  }
`,j=he(({css:e,cssVar:t})=>({actionTag:e`
    cursor: default;
    user-select: none;

    display: inline-flex;
    gap: 4px;
    align-items: center;

    margin-inline-end: ${4}px;
    padding-inline: 2px;
  `,actionTagLabel:e`
    font-weight: 500;
  `,agentSkillTag:e`
    ${A(t.colorSuccess,t.borderRadius)}
  `,clickable:e`
    cursor: pointer;
    border-radius: ${t.borderRadius};
    transition: background 0.2s;

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `,commandTag:e`
    ${A(t.purple,t.borderRadius)}
  `,projectSkillTag:e`
    ${A(t.colorSuccess,t.borderRadius)}
  `,skillTag:e`
    ${A(t.colorSuccess,t.borderRadius)}
  `,toolTag:e`
    ${A(t.colorInfo,t.borderRadius)}
  `}))})),M,et,N=e((()=>{M=`goal`,et=[{category:`command`,label:`newTopic`,type:`newTopic`},{category:`command`,label:`compact`,type:`compact`}]})),P,F,tt,nt,I,rt,it,L,at=e((()=>{f(),l(),be(),d(),b(),h(),P=t(i()),r(),$e(),N(),F=t(a()),tt={agentSkill:p,command:re,projectSkill:p,skill:p,tool:ie},nt={[M]:ne},I={agentSkill:`actionTag.category.agentSkill`,command:`actionTag.category.command`,projectSkill:`actionTag.category.projectSkill`,skill:`actionTag.category.skill`,tool:`actionTag.category.tool`},rt={agentSkill:`actionTag.tooltip.agentSkill`,command:`actionTag.tooltip.command`,projectSkill:`actionTag.tooltip.projectSkill`,skill:`actionTag.tooltip.skill`,tool:`actionTag.tooltip.tool`},it={agentSkill:`agentSkillTag`,command:`commandTag`,projectSkill:`projectSkillTag`,skill:`skillTag`,tool:`toolTag`},L=(0,P.memo)(({category:e,label:t,description:r,clickable:i,onClick:a,type:s})=>{let{t:l}=n(`editor`),u=l(I[e]),ee=l(rt[e]),d=s&&nt[s]||tt[e],f=it[e],p=i??!!a,m=r||ee,ne=a?e=>{e.stopPropagation(),a()}:void 0;return(0,F.jsx)(te,{title:(0,F.jsxs)(o,{gap:2,children:[(0,F.jsx)(`div`,{style:{fontWeight:500},children:t}),(0,F.jsx)(`div`,{style:{opacity:.65},children:u}),m&&(0,F.jsx)(`div`,{children:m}),p&&(0,F.jsx)(`div`,{style:{opacity:.65},children:l(`actionTag.tooltip.clickToView`)})]}),children:(0,F.jsxs)(`span`,{className:pe(j.actionTag,j[f],p&&j.clickable),onClick:ne,children:[(0,F.jsx)(c,{icon:d,size:14}),(0,F.jsx)(`span`,{className:j.actionTagLabel,children:t})]})})}),L.displayName=`ActionMention`})),ot,st,ct=e((()=>{g(),ot=t(i()),ae(),se(),Ze(),le(),ce(),Qe(),st=e=>{let t=Ye(e),n=y(t=>e?_.getAgencyConfigById(e)(t):void 0),r=y(t=>e?_.isAgentHeterogeneousById(e)(t):!1),i=de(n,{clientExecutionAvailable:!1,deviceRoutingAvailable:ue(e),isHetero:r,workspaceScoped:y(t=>e?_.isWorkspaceAgentById(e)(t):!1)})===`device`&&n?.boundDeviceId?n.boundDeviceId:void 0,{items:a,onOpenSkill:o}=Xe(i&&t?t:void 0,i);return(0,ot.useCallback)(e=>{let t=a.find(t=>t.name===e);if(t)return{description:t.description,name:t.name,open:()=>o(t)}},[a,o])}}));function lt(e,t,n){return S(new R(e,t,n))}function ut(e){return e.getType()===R.getType()}var dt,R,ft=e((()=>{E(),O(),w(),dt=t(i()),at(),R=class e extends C{__actionType;__actionCategory;__actionLabel;static getType(){return`action-tag`}static clone(t){return new e(t.__actionType,t.__actionCategory,t.__actionLabel,t.__key)}static importJSON(e){return lt(e.actionType,e.actionCategory,e.actionLabel).updateFromJSON(e)}static importDOM(){return null}constructor(e,t,n,r){super(r),this.__actionType=e,this.__actionCategory=t,this.__actionLabel=n}get actionType(){return this.__actionType}get actionCategory(){return this.__actionCategory}get actionLabel(){return this.__actionLabel}exportDOM(){return{element:document.createElement(`span`)}}createDOM(e){let t=document.createElement(`span`);return T(t,e.theme.actionTag),t}getTextContent(){return this.__actionLabel}isInline(){return!0}updateDOM(){return!1}exportJSON(){return{...super.exportJSON(),actionCategory:this.__actionCategory,actionLabel:this.__actionLabel,actionType:this.__actionType}}updateFromJSON(e){return super.updateFromJSON(e)}decorate(t){let n=D(t)?.getDecorator(e.getType());return n?typeof n==`function`?n(this,t):{queryDOM:n.queryDOM,render:n.render(this,t)}:null}renderHeadless({key:e}){return(0,dt.createElement)(L,{category:this.__actionCategory,key:e,label:this.__actionLabel,type:this.__actionType})}}}));function pt(e,t,n=!1){return S(new z(e,t,n))}function mt(e){return e instanceof z}var ht,z,B=e((()=>{E(),O(),w(),ht=t(i()),We(),z=class e extends C{__name;__path;__isDirectory;static getType(){return`local-file-tag`}static clone(t){return new e(t.__name,t.__path,t.__isDirectory,t.__key)}static importJSON(e){return pt(e.name,e.path,e.isDirectory).updateFromJSON(e)}static importDOM(){return null}constructor(e,t,n=!1,r){super(r),this.__name=e,this.__path=t,this.__isDirectory=n}get name(){return this.__name}get path(){return this.__path}get isDirectory(){return this.__isDirectory}exportDOM(){return{element:document.createElement(`span`)}}createDOM(e){let t=document.createElement(`span`);return T(t,e.theme.localFileTag),t}getTextContent(){return this.__name}isInline(){return!0}updateDOM(){return!1}exportJSON(){return{...super.exportJSON(),isDirectory:this.__isDirectory,name:this.__name,path:this.__path}}updateFromJSON(e){return super.updateFromJSON(e)}decorate(t){let n=D(t)?.getDecorator(e.getType());return n?typeof n==`function`?n(this,t):{queryDOM:n.queryDOM,render:n.render(this,t)}:null}renderHeadless({key:e}){return(0,ht.createElement)(He,{isDirectory:this.__isDirectory,key:e,name:this.__name,path:this.__path})}}})),V,gt,H=e((()=>{E(),oe(),O(),w(),B(),V=Le(`INSERT_LOCAL_FILE_TAG_COMMAND`),gt=class{static pluginName=`LocalFileTagPlugin`;config;kernel;constructor(e,t){this.kernel=e,this.config=t,e.registerNodes([z]),t?.theme&&e.registerThemes(t.theme),e.registerDecorator(z.getType(),(e,n)=>t?.decorator?t.decorator(e,n):null)}onInit(e){this.registerMarkdown(),this.registerLiteXml(),this.registerCommand(e)}registerMarkdown(){this.kernel.requireService(Je)?.registerMarkdownWriter(z.getType(),(e,t)=>{if(mt(t)){let n=me(t.name),r=me(t.path),i=t.isDirectory?` isDirectory`:``;e.appendLine(`<localFile name="${n}" path="${r}"${i} />`)}})}registerCommand(e){e.registerCommand(V,t=>(e.update(()=>{let e=pt(t.name,t.path,!!t.isDirectory);Ne([e,Re(` `)]),je(e.getParentOrThrow())&&Ke(e,Me).selectEnd()}),!0),3)}registerLiteXml(){let e=this.kernel.requireService(qe);e?.registerXMLWriter(z.getType(),(e,t)=>mt(e)?t.createXmlNode(`localFile`,{...e.isDirectory?{isDirectory:`true`}:{},name:e.name,path:e.path}):!1);let t=e=>({isDirectory:e.hasAttribute?.(`isDirectory`)||e.getAttribute(`isDirectory`)===`true`,name:e.getAttribute(`name`)||``,path:e.getAttribute(`path`)||``,type:z.getType(),version:1});e?.registerXMLReader(`localFile`,t),e?.registerXMLReader(`localFileTag`,t)}destroy(){this.kernel.unregisterDecorator?.(z.getType())}}})),_t=e((()=>{})),U,W,G,K,q,J,vt=e((()=>{g(),f(),l(),ve(),s(),xe(),u(),b(),w(),h(),U=t(i()),r(),ze(),fe(),_e(),Ae(),Ee(),Oe(),Ce(),Ue(),k(),_t(),W=t(a()),new Set([`avif`,`bmp`,`gif`,`ico`,`jpeg`,`jpg`,`png`,`svg`,`webp`]),G=he(({css:e})=>({actionBar:e`
    flex-wrap: wrap;
    max-width: 320px;
  `,label:e`
    overflow: hidden;
    align-self: baseline;

    min-width: 0;

    font-weight: 400;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,path:e`
    max-width: 360px;
    padding-block: 8px;
    padding-inline: 10px;
    border-radius: ${v.borderRadius};

    font-family: ${v.fontFamilyCode};
    font-size: 12px;
    line-height: 1.5;
    color: ${v.colorTextSecondary};
    word-break: break-all;

    background: ${v.colorFillQuaternary};
  `,popover:e`
    max-width: 392px;
  `,previewFrame:e`
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    width: min(360px, 72vw);
    max-height: 240px;
    border: 1px solid ${v.colorFillSecondary};
    border-radius: ${v.borderRadiusLG};

    background: ${v.colorFillQuaternary};
  `,previewImage:e`
    display: block;
    max-width: 100%;
    max-height: 240px;
    object-fit: contain;
  `,tag:e`
    cursor: default;
    user-select: none;

    display: inline-flex;
    gap: 6px;
    align-items: center;

    box-sizing: border-box;
    max-width: min(240px, 100%);
    height: 24px;
    margin-inline-end: ${4}px;
    padding-block: 2px;
    padding-inline: 8px;
    border-radius: ${v.borderRadius};

    font-size: inherit;
    line-height: 20px;
    color: ${v.colorTextSecondary};
    vertical-align: baseline;

    &:hover {
      background: ${v.colorFillSecondary};
    }

    &.selected {
      outline: 2px solid ${v.colorInfo};
      outline-offset: 1px;
    }
  `,thumbnail:e`
    flex-shrink: 0;

    width: 16px;
    height: 16px;
    border-radius: ${v.borderRadiusXS};

    object-fit: cover;
    background: ${v.colorFillQuaternary};
    box-shadow: inset 0 0 0 1px ${v.colorFillSecondary};
  `})),K=e=>{e.preventDefault(),e.stopPropagation()},q=(0,U.memo)(({children:e,className:t,editor:n,nodeKey:r,ref:i,title:a,...o})=>{let s=(0,U.useRef)(null),c=(0,U.useCallback)(e=>{if(s.current=e,!i)return;if(typeof i==`function`){i(e);return}let t=i;t.current=e},[i]),l=(0,U.useCallback)(e=>!n||!r||e.target!==s.current&&!s.current?.contains(e.target)?!1:(e.preventDefault(),n.update(()=>{let e=Ie();e.add(r),Fe(e)}),!0),[n,r]);return(0,U.useEffect)(()=>{if(!(!n||!r))return n.registerCommand(Pe,l,1)},[n,r,l]),(0,W.jsx)(Se,{...o,className:pe(G.tag,t),ref:c,title:a,children:e})}),q.displayName=`LocalFileTagTrigger`,J=(0,U.memo)(({className:e,editor:t,file:r,nodeKey:i})=>{let{t:a}=n(`chat`),s=x(e=>e.openLocalFile),c=x(Te.currentTopicWorkingDirectory),l=(0,U.useMemo)(()=>Ve(r.path,{workingDirectory:c}),[r.path,c]),u=!!l&&(!c||l.workingDirectory!==c),{data:te}=ge(null,()=>De.getLocalFilePreview({accept:`image`,allowExternalFile:u||void 0,path:l.filePath,workingDirectory:l.workingDirectory}),{revalidateOnFocus:!1}),[d,f]=(0,U.useState)();return(0,U.useEffect)(()=>{f(void 0)},[!1,te]),(0,U.useCallback)(e=>{K(e),l&&s({allowExternalFilePreview:u,filePath:l.filePath,workingDirectory:l.workingDirectory})},[u,s,l]),(0,U.useCallback)(e=>{K(e),ke.openLocalFileOrFolder(r.path,!!r.isDirectory)},[r.isDirectory,r.path]),(0,U.useCallback)(e=>{K(e),ke.openFileFolder(r.path)},[r.path]),(0,W.jsx)(ye,{content:(0,W.jsxs)(o,{className:G.popover,gap:10,onClick:e=>e.stopPropagation(),children:[d&&(0,W.jsx)(`div`,{className:G.previewFrame,children:(0,W.jsx)(`img`,{alt:r.name,className:G.previewImage,"data-testid":`local-file-image-hover-preview`,draggable:!1,src:d})}),(0,W.jsx)(ee,{className:G.path,children:r.path}),!1]}),styles:{content:{padding:8}},trigger:`hover`,children:(0,W.jsxs)(q,{className:e,editor:t,nodeKey:i,title:r.path,children:[d?(0,W.jsx)(`img`,{alt:``,className:G.thumbnail,"data-testid":`local-file-image-preview`,draggable:!1,src:d}):(0,W.jsx)(Be,{fileName:r.name,isDirectory:!!r.isDirectory,size:16,variant:`raw`}),(0,W.jsx)(`span`,{className:G.label,children:r.name})]})})}),J.displayName=`LocalFileTag`})),yt,bt,Y,xt=e((()=>{O(),yt=t(i()),vt(),H(),bt=t(a()),Y=()=>{let[e]=Ge();return(0,yt.useLayoutEffect)(()=>{e.registerPlugin(gt,{decorator:(e,t)=>(0,bt.jsx)(J,{editor:t,nodeKey:e.getKey(),file:{isDirectory:e.isDirectory,name:e.name,path:e.path}})})},[e]),null},Y.displayName=`ReactLocalFileTagPlugin`})),St=e((()=>{B(),H(),xt()})),X,Z,Q,Ct=e((()=>{xe(),h(),X=t(i()),r(),Oe(),we(),k(),Z=t(a()),Q=(0,X.memo)(({topicId:e,fallbackTitle:t})=>{let{t:r}=n(`topic`),i=x(Te.getTopicById(e))?.title||t,a=x(e=>e.switchTopic),o=(0,X.useCallback)(t=>{t.stopPropagation(),e&&a(e)},[a,e]);return(0,Z.jsx)(`span`,{style:{cursor:e?`pointer`:`default`,display:`inline-flex`,marginInlineEnd:4,userSelect:`none`},onClick:o,children:(0,Z.jsx)(Se,{color:`blue`,icon:(0,Z.jsx)(m,{size:12}),variant:`borderless`,children:i||r(`defaultTitle`)})})}),Q.displayName=`ReferTopicView`}));function wt(e,t){return S(new $(e,t))}function Tt(e){return e.getType()===$.getType()}var Et,$,Dt=e((()=>{E(),O(),w(),Et=t(i()),Ct(),$=class e extends C{__topicId;__topicTitle;static getType(){return`refer-topic`}static clone(t){return new e(t.__topicId,t.__topicTitle,t.__key)}static importJSON(e){return wt(e.topicId,e.topicTitle).updateFromJSON(e)}static importDOM(){return null}constructor(e,t,n){super(n),this.__topicId=e,this.__topicTitle=t}get topicId(){return this.__topicId}get topicTitle(){return this.__topicTitle}exportDOM(){return{element:document.createElement(`span`)}}createDOM(e){let t=document.createElement(`span`);return T(t,e.theme.referTopic),t}getTextContent(){return this.__topicTitle}isInline(){return!0}updateDOM(){return!1}exportJSON(){return{...super.exportJSON(),topicId:this.__topicId,topicTitle:this.__topicTitle}}updateFromJSON(e){return super.updateFromJSON(e)}decorate(t){let n=D(t)?.getDecorator(e.getType());return n?typeof n==`function`?n(this,t):{queryDOM:n.queryDOM,render:n.render(this,t)}:null}renderHeadless({key:e}){return(0,Et.createElement)(Q,{fallbackTitle:this.__topicTitle,key:e,topicId:this.__topicId})}}}));export{M as C,et as S,ft as _,Q as a,L as b,Y as c,H as d,z as f,R as g,ut as h,Dt as i,xt as l,lt as m,Tt as n,Ct as o,B as p,$ as r,St as s,wt as t,V as u,ct as v,N as w,at as x,st as y};