import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,V as r,j as i,z as a}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as o,T as s}from"../vendor/vendor-react-B9HSWrpN.js";import{B as c,Bt as l,Kt as u,Mt as d,Nt as f,S as p,Vt as m,Xn as h,Yn as g,Zn as _,at as v,h as y,it as b,l as x,m as S,qt as C,u as ee,v as w,z as te}from"../vendor/vendor-ui-core-BmtybT1r.js";import{N as ne,et as T,h as E,i as D,q as re,r as O}from"../vendor/vendor-antd-BWSxhuJE.js";import{Hh as k,Ku as A,Ma as ie,Of as ae,Op as oe,Rl as se,Rm as ce,Sn as le,Xp as ue,Xr as de,bp as fe,fy as pe,ga as me,mt as he,oh as ge,t as j,ua as _e,ug as ve,ut as ye,wv as be}from"../vendor/vendor-icons-vienkZi5.js";import{FD as M,ID as N,MA as P,Xf as xe,Zf as Se,cD as Ce,hF as F,sD as we,uF as I}from"./index-w64_zsxD.js";import{n as Te,t as Ee}from"./DropdownMenu-1ae8j9bI.js";import{n as De,t as Oe}from"./Tag-C95BKTI7.js";import{n as ke,r as Ae}from"./upload-D5Kt3WUo.js";import{n as je,t as L}from"./TextArea-D_Rfq5JU.js";import{n as Me,t as Ne}from"./Input-gdUxluEJ.js";import{t as Pe}from"./_virtual_lobe-ui-named_base-ui_useModalContext-CvZy-G5G.js";import{n as Fe,t as Ie}from"./Select-C0UJO2yB.js";import{t as Le}from"./_virtual_lobe-ui-named_base-ui_confirmModal-B6WREEdZ.js";import{n as Re,t as ze}from"./agentEval-DqhUvTHo.js";import{n as Be,t as Ve}from"./WorkspaceLink-CS4ZDv1a.js";import{r as He,t as Ue}from"./eval-DXsdohMt.js";import{i as We,n as Ge,r as Ke,t as qe}from"./StatusBadge-DcsxSiG-.js";import{r as Je,t as Ye}from"./utils-DH01phU5.js";import{n as Xe,t as Ze}from"./SegmentBar-DmHTelyR.js";var R,Qe,$e,et=e((()=>{j(),R={browsecomp:{id:`browsecomp`,category:`research`,name:`BrowseComp`,description:`Measuring the ability for agents to browse the web, comprises 1,266 questions.`,icon:A,formatDescription:`format: Topic (category/tags), Question (input), Answer (expected)`,requiredFields:[`question`,`answer`,`problem_topic`,`canary`],optionalFields:[`case_id`],fieldInference:{input:[`question`],expected:[`answer`],choices:[],category:[`problem_topic`]},validation:{requireExpected:!0,expectedFormat:`string`}},"browsecomp-zh":{id:`browsecomp-zh`,category:`research`,name:`BrowseComp-ZH`,description:`Chinese web browsing: 289 multi-step reasoning questions`,icon:A,formatDescription:`format: Topic (category/tags), Question (input), Answer (expected)`,requiredFields:[`Question`,`Answer`],optionalFields:[`Topic`,`canary`,`case_id`],fieldInference:{input:[`Question`,`question`,`prompt`],expected:[`Answer`,`answer`],choices:[],category:[`Topic`,`topic`,`category`]},validation:{requireExpected:!0,expectedFormat:`string`}},widesearch:{id:`widesearch`,category:`research`,name:`WideSearch`,description:`Evaluating the capabilities of agents in broad information-seeking tasks, consisting of 200 questions.`,icon:A,formatDescription:`format: instance_id, query (input), evaluation (expected), language`,requiredFields:[`instance_id`,`query`,`evaluation`,`language`],optionalFields:[`case_id`],fieldInference:{input:[`query`],expected:[`evaluation`],choices:[],category:[`language`],sortOrder:[]},validation:{requireExpected:!0,expectedFormat:`string`}},"hle-text":{id:`hle-text`,category:`research`,name:`Humanity's Last Exam, HLE (Text Only)`,description:`Humanity's Last Exam (HLE) is a multi-modal benchmark at the frontier of human knowledge, consisting of 2150 questions.`,icon:A,formatDescription:`format: id, question (input), answer (expected), answer_type, rationale, raw_subject, category`,requiredFields:[`id`,`question`,`answer`,`answer_type`,`rationale`,`raw_subject`,`category`],optionalFields:[`canary`,`case_id`],fieldInference:{input:[`question`],expected:[`answer`],choices:[],category:[`category`]}},"hle-verified":{id:`hle-verified`,category:`research`,name:`Humanity's Last Exam, HLE (Verified Answers)`,description:`A subset of Humanity's Last Exam (HLE) with verified answers, designed to evaluate the ability to produce correct answers rather than just plausible ones.`,icon:A,formatDescription:`format: id, question (input), answer (expected), answer_type, rationale, raw_subject, category, Verified_Classes`,requiredFields:[`id`,`question`,`answer`,`answer_type`,`rationale`,`raw_subject`,`category`,`Verified_Classes`],optionalFields:[`canary`,`case_id`],fieldInference:{input:[`question`],expected:[`answer`],choices:[],category:[`category`]}},deepsearchqa:{id:`deepsearchqa`,category:`research`,name:`DeepSearchQA`,description:`A 900-prompt factuality benchmark from Google DeepMind, designed to evaluate agents on difficult multi-step information-seeking tasks across 17 different fields.`,icon:A,formatDescription:`problem, problem_category, answer, answer_type`,requiredFields:[`problem`,`answer`,`problem_category`,`answer_type`],optionalFields:[`case_id`],fieldInference:{input:[`problem`],expected:[`answer`],choices:[],category:[`problem_category`],sortOrder:[]},validation:{requireExpected:!0,expectedFormat:`string`}},sealqa:{id:`sealqa`,category:`research`,name:`SealQA`,description:`SealQA is a new challenge benchmark for evaluating SEarch- Augmented Language models on fact-seeking questions where web search yields conflicting, noisy, or unhelpful results.`,icon:A,formatDescription:`format: question (input), answer (expected), topic (category)`,requiredFields:[`question`,`answer`,`topic`,`canary`],optionalFields:[`case_id`],fieldInference:{input:[`question`],expected:[`answer`],choices:[],category:[`topic`]},validation:{requireExpected:!0,expectedFormat:`string`}},xbench:{id:`xbench`,category:`research`,name:`xbench`,description:`Chinese search: ~200 factual query questions`,icon:A,formatDescription:`format: id (item number), prompt (input), type (metadata), answer (expected)`,requiredFields:[`prompt`,`answer`],optionalFields:[`type`,`id`],fieldInference:{input:[`prompt`,`question`,`input`],expected:[`answer`,`response`],choices:[],category:[`type`,`category`],sortOrder:[`id`]},validation:{requireExpected:!0,expectedFormat:`string`}},mmlu:{id:`mmlu`,category:`reference`,name:`MMLU (Reference)`,description:`Multiple choice format (for reference only)`,icon:A,formatDescription:`format: question, choices array (or A/B/C/D columns), answer (index/letter)`,requiredFields:[`question`,`choices`,`answer`],optionalFields:[`subject`,`difficulty`],fieldInference:{input:[`question`,`prompt`,`query`],expected:[`answer`,`correct_answer`,`label`],choices:[`choices`,`options`,`A`,`B`,`C`,`D`],category:[`context`,`subject`,`category`]},validation:{requireExpected:!0,requireChoices:!0,expectedFormat:`index`}},custom:{id:`custom`,category:`custom`,name:`Custom`,description:`Define your own field mapping`,icon:ue,formatDescription:`Custom format - you define the mapping. Only requirement: must have an "input" field.`,requiredFields:[`input`],optionalFields:[`expected`,`choices`,`category`,`metadata`],fieldInference:{input:[`input`,`question`,`prompt`,`query`],expected:[`expected`,`answer`,`output`,`response`],choices:[`choices`,`options`],category:[`category`,`type`,`topic`,`subject`]}}},Qe=e=>R[e||`custom`]||R.custom,$e=()=>{let e={research:[],"tool-use":[],memory:[],reference:[],custom:[]};return Object.values(R).forEach(t=>{e[t.category]||(e[t.category]=[]),e[t.category].push(t)}),e}})),tt,z,nt,B,rt,it=e((()=>{M(),m(),C(),_(),Me(),je(),Fe(),v(),P(),Pe(),O(),I(),j(),tt=t(o()),i(),Re(),et(),z=t(s()),nt={custom:`Custom`,memory:`Memory`,reference:`Reference Formats`,research:`Deep Research / QA`,"tool-use":`Tool Use`},B={sectionLabel:N(`acss-a9xmeq`,[`.acss-a9xmeq{font-size:var(--ant-font-size-sm);font-weight:500;color:var(--ant-color-text-secondary);}`],`
    font-size: var(--ant-font-size-sm);
    font-weight: 500;
    color: var(--ant-color-text-secondary);
  `),presetCard:N(`acss-1jorn6j`,[`.acss-1jorn6j{cursor:pointer;position:relative;padding:12px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius);background:var(--ant-color-bg-container);transition:border-color 0.15s ease,background 0.15s ease;}`,`.acss-1jorn6j:hover{border-color:var(--ant-color-border);background:var(--ant-color-fill-tertiary);}`,`.acss-1jorn6j:focus-visible{outline:2px solid var(--ant-color-primary);outline-offset:-2px;}`,`@media (prefers-reduced-motion: reduce){.acss-1jorn6j{transition:none;}}`],`
    cursor: pointer;

    position: relative;

    padding: 12px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius);

    background: var(--ant-color-bg-container);

    transition:
      border-color 0.15s ease,
      background 0.15s ease;

    &:hover {
      border-color: var(--ant-color-border);
      background: var(--ant-color-fill-tertiary);
    }

    &:focus-visible {
      outline: 2px solid var(--ant-color-primary);
      outline-offset: -2px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `),presetCardSelected:N(`acss-108wxep`,[`.acss-108wxep{border-color:var(--ant-color-primary-border);background:var(--ant-color-primary-bg);}`,`.acss-108wxep:hover{border-color:var(--ant-color-primary-border);background:var(--ant-color-primary-bg);}`],`
    border-color: var(--ant-color-primary-border);
    background: var(--ant-color-primary-bg);

    &:hover {
      border-color: var(--ant-color-primary-border);
      background: var(--ant-color-primary-bg);
    }
  `),presetGrid:N(`acss-edfm5s`,[`.acss-edfm5s{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:8px;}`],`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  `),presetIcon:N(`acss-5i3n9s`,[`.acss-5i3n9s{border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius);background:var(--ant-color-bg-elevated);}`],`
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius);
    background: var(--ant-color-bg-elevated);
  `),selectedMark:N(`acss-8pvrkd`,[`.acss-8pvrkd{display:flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:999px;color:var(--ant-color-bg-container);background:var(--ant-color-primary);}`],`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 18px;
    height: 18px;
    border-radius: 999px;

    color: var(--ant-color-bg-container);

    background: var(--ant-color-primary);
  `)},rt=({dataset:e,formId:t,onLoadingChange:r,onSuccess:i})=>{let{t:a}=n(`eval`),{close:o}=w(),[s]=T.useForm(),[c,d]=(0,tt.useState)(`custom`),f=T.useWatch(`evalMode`,s);(0,tt.useEffect)(()=>{e&&(s.setFieldsValue({description:e.description||``,evalConfig:e.evalConfig,evalMode:e.evalMode||void 0,name:e.name}),d(e.metadata?.preset||`custom`))},[e,s]);let p=$e(),m=Object.entries(p).filter(([,e])=>e.length>0);return(0,z.jsxs)(T,{form:s,layout:`vertical`,name:t,onFinish:async t=>{r?.(!0);try{await ze.updateDataset({description:t.description?.trim()||void 0,evalConfig:t.evalConfig?.judgePrompt?t.evalConfig:null,evalMode:t.evalMode||null,id:e.id,metadata:{...e.metadata,preset:c},name:t.name.trim()}),g.success(a(`dataset.edit.success`)),o(),i?.()}catch{g.error(a(`dataset.edit.error`))}finally{r?.(!1)}},children:[(0,z.jsx)(T.Item,{label:a(`dataset.create.name.label`),name:`name`,rules:[{message:a(`dataset.create.nameRequired`),required:!0}],children:(0,z.jsx)(Ne,{autoFocus:!0,placeholder:a(`dataset.create.name.placeholder`)})}),(0,z.jsx)(T.Item,{label:a(`dataset.create.description.label`),name:`description`,children:(0,z.jsx)(L,{placeholder:a(`dataset.create.description.placeholder`),rows:3})}),(0,z.jsx)(T.Item,{extra:a(`dataset.evalMode.hint`),label:a(`evalMode.label`),name:`evalMode`,children:(0,z.jsx)(Ie,{allowClear:!0,placeholder:a(`evalMode.placeholder`),optionRender:e=>(0,z.jsxs)(u,{gap:4,style:{paddingBlock:4},children:[(0,z.jsx)(`div`,{children:e.label}),(0,z.jsx)(b,{fontSize:12,type:`secondary`,children:a(`evalMode.${e.value}.desc`)})]}),options:[{label:a(`evalMode.equals`),value:`equals`},{label:a(`evalMode.contains`),value:`contains`},{label:a(`evalMode.llm-rubric`),value:`llm-rubric`},{label:a(`evalMode.answer-relevance`),value:`answer-relevance`},{label:a(`evalMode.external`),value:`external`}]})}),(f===`llm-rubric`||f===`answer-relevance`)&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(T.Item,{initialValue:`aihubmix`,label:`Provider`,name:[`evalConfig`,`provider`],children:(0,z.jsx)(L,{placeholder:`LLM provider (e.g. openai, azure)`,rows:1})}),(0,z.jsx)(T.Item,{initialValue:`gpt-5-nano`,label:`Model`,name:[`evalConfig`,`model`],children:(0,z.jsx)(L,{placeholder:`LLM model to use for evaluation (e.g. gpt-4)`,rows:1})}),(0,z.jsx)(T.Item,{label:`System Prompt`,name:[`evalConfig`,`systemRole`],children:(0,z.jsx)(L,{placeholder:`Optional system prompt for the LLM judge`,rows:3})}),(0,z.jsx)(T.Item,{label:`Eval Prompt`,name:[`evalConfig`,`criteria`],children:(0,z.jsx)(L,{placeholder:`Prompt template for the LLM judge`,rows:3})}),(0,z.jsx)(T.Item,{label:a(`evalMode.prompt.label`),name:[`evalConfig`,`judgePrompt`],children:(0,z.jsx)(L,{placeholder:a(`evalMode.prompt.placeholder`),rows:3})})]}),(0,z.jsxs)(u,{gap:12,style:{marginBlockStart:4},children:[(0,z.jsx)(`span`,{className:B.sectionLabel,children:a(`dataset.create.preset.label`)}),m.map(([e,t])=>(0,z.jsxs)(u,{gap:8,children:[(0,z.jsx)(b,{color:F.colorTextTertiary,fontSize:12,children:nt[e]||e}),(0,z.jsx)(`div`,{className:B.presetGrid,children:t.map(e=>{let t=c===e.id;return(0,z.jsx)(`div`,{"aria-pressed":t,className:`${B.presetCard} ${t?B.presetCardSelected:``}`,role:`button`,tabIndex:0,onClick:()=>d(e.id),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),d(e.id))},children:(0,z.jsxs)(u,{horizontal:!0,align:`flex-start`,gap:12,children:[(0,z.jsx)(l,{className:B.presetIcon,flex:`none`,height:36,width:36,children:(0,z.jsx)(h,{icon:e.icon,size:18})}),(0,z.jsxs)(u,{flex:1,gap:2,style:{minWidth:0},children:[(0,z.jsx)(b,{ellipsis:!0,weight:500,children:e.name}),(0,z.jsx)(b,{ellipsis:!0,color:F.colorTextTertiary,fontSize:12,children:e.description})]}),t&&(0,z.jsx)(`span`,{className:B.selectedMark,children:(0,z.jsx)(h,{icon:ve,size:12})})]})},e.id)})})]},e))]})]})}})),at,ot,st=e((()=>{f(),xe(),Pe(),i(),at=t(s()),ot=({formId:e,loading:t})=>{let{t:r}=n(`eval`),{close:i}=w();return(0,at.jsxs)(p,{children:[(0,at.jsx)(d,{disabled:t,onClick:i,children:r(`common.cancel`)}),(0,at.jsx)(d,{form:e,htmlType:`submit`,loading:t,type:`primary`,children:r(`common.update`)})]})}})),ct,lt,ut=e((()=>{a(),We(),it(),st(),ct=t(s()),lt=e=>Ke({renderContent:({formId:t,setLoading:n})=>(0,ct.jsx)(rt,{...e,formId:t,onLoadingChange:n}),renderFooter:({formId:e,loading:t})=>(0,ct.jsx)(ot,{formId:e,loading:t}),title:r(`dataset.edit.title`,{ns:`eval`}),width:600})})),dt,ft=e((()=>{I(),dt={choices:F.colorWarning,expected:F.colorSuccess,input:F.colorInfo}})),V,H,pt,mt,ht,gt,_t,vt,yt,bt,xt,St=e((()=>{C(),Me(),ee(),Fe(),v(),O(),I(),V=t(o()),i(),ft(),H=t(s()),pt=new Set([`input`,`question`,`prompt`,`query`,`text`,`instruction`,`problem`]),mt=new Set([`expected`,`answer`,`ideal`,`target`,`output`,`response`,`label`,`ground_truth`,`groundtruth`]),ht=new Set([`category`,`topic`,`type`,`subject`,`class`,`tag`]),gt=new Set([`choices`,`options`,`alternatives`,`candidates`]),_t=new Set([`id`,`number`,`index`,`no`,`order`,`sort_order`]),vt=(e,t)=>{let n={},r=!1,i=!1,a=!1,o=!1,s=!1,c=t?new Set(t.fieldInference.input.map(e=>e.toLowerCase())):pt,l=t?new Set(t.fieldInference.expected.map(e=>e.toLowerCase())):mt,u=t?new Set(t.fieldInference.choices.map(e=>e.toLowerCase())):gt,d=t?new Set(t.fieldInference.category.map(e=>e.toLowerCase())):ht,f=t?.fieldInference.sortOrder?new Set(t.fieldInference.sortOrder.map(e=>e.toLowerCase())):_t,p=new Set(t?t.requiredFields.map(e=>e.toLowerCase()):[]),m=new Set(t?t.optionalFields.map(e=>e.toLowerCase()):[]);for(let t of e){let e=t.toLowerCase().trim();!r&&c.has(e)?(n[t]=`input`,r=!0):!i&&l.has(e)?(n[t]=`expected`,i=!0):!o&&u.has(e)?(n[t]=`choices`,o=!0):!a&&d.has(e)?(n[t]=`category`,a=!0):!s&&f.has(e)?(n[t]=`sortOrder`,s=!0):p.has(e)||m.has(e)?n[t]=`metadata`:n[t]=`ignore`}return!r&&e.length>0&&(n[e[0]]=`input`),n},yt={category:160,choices:200,expected:300,ignore:100,input:800,metadata:160,sortOrder:120},bt=new Set([`input`,`expected`]),xt=(0,V.memo)(({headers:e,mapping:t,onMappingChange:r,preview:i,delimiter:a,onDelimiterChange:o,totalCount:s})=>{let{t:c}=n(`eval`),[l,d]=(0,V.useState)(!0),f=Object.values(t).includes(`choices`),p=Object.values(t).includes(`ignore`),m=(0,V.useMemo)(()=>l?e.filter(e=>t[e]!==`ignore`):e,[e,t,l]),h=e=>dt[e]||F.colorTextTertiary,g=[{desc:`inputDesc`,label:`input`,value:`input`},{desc:`expectedDesc`,label:`expected`,value:`expected`},{desc:`choicesDesc`,label:`choices`,value:`choices`},{desc:`categoryDesc`,label:`category`,value:`category`},{desc:`sortOrderDesc`,label:`sortOrder`,value:`sortOrder`},{desc:`metadataDesc`,label:`metadata`,value:`metadata`},{desc:`ignoreDesc`,label:`ignore`,value:`ignore`}].map(({desc:e,label:t,value:n})=>({label:(0,H.jsxs)(u,{gap:2,children:[(0,H.jsx)(b,{fontSize:12,children:c(`dataset.import.${t}`)}),(0,H.jsx)(b,{color:h(n),fontSize:12,children:c(`dataset.import.${e}`)})]}),value:n})),_=(e,n)=>{let i={...t};if(n!==`metadata`&&n!==`ignore`)for(let[e,t]of Object.entries(i))t===n&&(i[e]=`ignore`);i[e]=n,r(i)},v=(0,V.useMemo)(()=>m.map(e=>{let n=t[e],r=n===`ignore`,i=bt.has(n),a=dt[n];return{dataIndex:e,ellipsis:!i,onCell:r?()=>({style:{color:F.colorTextQuaternary}}):i?()=>({style:{verticalAlign:`top`,whiteSpace:`pre-wrap`,wordBreak:`break-word`}}):void 0,title:(0,H.jsxs)(u,{gap:2,children:[(0,H.jsx)(`span`,{style:{fontSize:14,opacity:r?.4:1},children:e}),(0,H.jsx)(Ie,{options:g,popupMatchSelectWidth:200,size:`small`,value:n,variant:`borderless`,style:{color:a||(r?F.colorTextQuaternary:F.colorTextTertiary),fontSize:12,marginInlineStart:-8},onChange:t=>_(e,t)})]}),width:yt[n]}}),[m,t]),y=(0,V.useMemo)(()=>m.reduce((e,n)=>e+yt[t[n]],0),[m,t]);return(0,H.jsxs)(u,{gap:16,children:[(0,H.jsxs)(u,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,H.jsxs)(u,{gap:2,children:[(0,H.jsx)(b,{fontSize:12,type:`secondary`,weight:500,children:c(`dataset.import.step.mapping`)}),(0,H.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,H.jsx)(b,{color:F.colorTextTertiary,fontSize:12,children:c(`dataset.import.fieldMapping.desc`)}),(0,H.jsx)(b,{color:F.colorTextQuaternary,fontSize:12,style:{fontFamily:F.fontFamilyCode},children:c(`dataset.import.preview.rows`,{count:s})})]})]}),(0,H.jsxs)(u,{horizontal:!0,align:`center`,gap:16,children:[f&&(0,H.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,H.jsx)(b,{fontSize:12,style:{whiteSpace:`nowrap`},type:`secondary`,children:c(`dataset.import.expectedDelimiter.desc`)}),(0,H.jsx)(Ne,{placeholder:c(`dataset.import.expectedDelimiter.placeholder`),size:`small`,style:{width:120},value:a,onChange:e=>o(e.target.value)})]}),p&&(0,H.jsx)(x,{checked:l,onChange:d,children:(0,H.jsx)(b,{fontSize:12,type:`secondary`,children:c(`dataset.import.hideSkipped`)})})]})]}),(0,H.jsx)(E,{bordered:!0,columns:v,dataSource:i.map((e,t)=>({...e,_key:t})),pagination:!1,rowKey:`_key`,scroll:{x:y,y:`calc(95vh - 280px)`},size:`small`})]})})})),Ct,U,wt,W,Tt,Et,Dt,Ot=e((()=>{M(),m(),C(),_(),De(),O(),j(),Ct=t(o()),i(),ft(),U=t(s()),{Dragger:wt}=D,W={container:N(`acss-1e1452q`,[`.acss-1e1452q{overflow:hidden;padding:16px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);background:var(--ant-color-fill-quaternary);}`],`
    overflow: hidden;

    padding: 16px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);

    background: var(--ant-color-fill-quaternary);
  `),dragger:N(`acss-1dahz9o`,[`.acss-1dahz9o .ant-upload-drag{border-radius:var(--ant-border-radius-lg);transition:border-color 0.15s ease;}`,`@media (prefers-reduced-motion: reduce){.acss-1dahz9o .ant-upload-drag{transition:none;}}`],`
    .ant-upload-drag {
      border-radius: var(--ant-border-radius-lg);
      transition: border-color 0.15s ease;

      @media (prefers-reduced-motion: reduce) {
        transition: none;
      }
    }
  `),draggerContent:N(`acss-1abv88w`,[`.acss-1abv88w{min-height:160px;}`],`
    min-height: 160px;
  `),fieldsWrapper:N(`acss-k4n328`,[`.acss-k4n328{flex-wrap:wrap;}`],`
    flex-wrap: wrap;
  `),formatDescription:N(`acss-6j350`,[`.acss-6j350{font-family:var(--ant-font-family-code);font-size:var(--ant-font-size-sm);color:var(--ant-color-text-tertiary);}`],`
    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-tertiary);
  `),hintText:N(`acss-urfag2`,[`.acss-urfag2{margin:0;font-size:var(--ant-font-size-sm);color:var(--ant-color-text-tertiary);}`],`
    margin: 0;
    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-tertiary);
  `),icon:N(`acss-668td3`,[`.acss-668td3{color:var(--ant-color-primary);}`],`
    color: var(--ant-color-primary);
  `),iconCenter:N(`acss-5i3n9s`,[`.acss-5i3n9s{border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius);background:var(--ant-color-bg-elevated);}`],`
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius);
    background: var(--ant-color-bg-elevated);
  `),presetDescription:N(`acss-14wmj16`,[`.acss-14wmj16{font-size:var(--ant-font-size-sm);color:var(--ant-color-text-secondary);}`],`
    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-secondary);
  `),presetName:N(`acss-kcjwc9`,[`.acss-kcjwc9{font-size:var(--ant-font-size-lg);font-weight:600;color:var(--ant-color-text);}`],`
    font-size: var(--ant-font-size-lg);
    font-weight: 600;
    color: var(--ant-color-text);
  `),progressWrapper:N(`acss-o9wn7t`,[`.acss-o9wn7t{width:100%;max-width:320px;}`],`
    width: 100%;
    max-width: 320px;
  `),roleLabel:N(`acss-jbg5xu`,[`.acss-jbg5xu{font-size:var(--ant-font-size-sm);}`],`
    font-size: var(--ant-font-size-sm);
  `),sectionLabel:N(`acss-a9xmeq`,[`.acss-a9xmeq{font-size:var(--ant-font-size-sm);font-weight:500;color:var(--ant-color-text-secondary);}`],`
    font-size: var(--ant-font-size-sm);
    font-weight: 500;
    color: var(--ant-color-text-secondary);
  `),uploadText:N(`acss-1wudv2f`,[`.acss-1wudv2f{margin:0;font-size:var(--ant-font-size-lg);font-weight:500;color:var(--ant-color-text);}`],`
    margin: 0;
    font-size: var(--ant-font-size-lg);
    font-weight: 500;
    color: var(--ant-color-text);
  `)},Tt=[`input`,`expected`,`choices`,`category`,`sortOrder`],Et=(e,t)=>{let n=e.toLowerCase();for(let e of Tt)if(t[e]?.some(e=>e.toLowerCase()===n))return e},Dt=(0,Ct.memo)(({onFileSelect:e,loading:t,preset:r,uploadProgress:i})=>{let{t:a}=n(`eval`),o=(0,Ct.useMemo)(()=>{if(!r)return[];let e=r.requiredFields.map(e=>({name:e,required:!0,role:Et(e,r.fieldInference)})),t=r.optionalFields.map(e=>({name:e,required:!1,role:Et(e,r.fieldInference)}));return[...e,...t]},[r]);return(0,U.jsxs)(u,{gap:16,children:[r&&(0,U.jsxs)(u,{className:W.container,gap:16,children:[(0,U.jsxs)(u,{horizontal:!0,align:`center`,gap:12,children:[(0,U.jsx)(l,{className:W.iconCenter,flex:`none`,height:40,width:40,children:(0,U.jsx)(h,{icon:r.icon,size:20})}),(0,U.jsxs)(u,{flex:1,gap:2,style:{minWidth:0},children:[(0,U.jsx)(`div`,{className:W.presetName,children:r.name}),(0,U.jsx)(`div`,{className:W.presetDescription,children:r.description})]})]}),r.formatDescription&&(0,U.jsx)(`div`,{className:W.formatDescription,children:r.formatDescription}),o.length>0&&(0,U.jsxs)(u,{gap:8,children:[(0,U.jsx)(`span`,{className:W.sectionLabel,children:a(`dataset.import.fieldMapping`)}),(0,U.jsx)(u,{horizontal:!0,className:W.fieldsWrapper,gap:8,children:o.map(e=>{let t=e.role?dt[e.role]:void 0;return(0,U.jsxs)(u,{align:`center`,gap:2,children:[(0,U.jsxs)(Oe,{style:t?{background:`color-mix(in srgb, ${t} 15%, transparent)`,borderColor:`transparent`,color:t}:void 0,children:[e.name,e.required&&` *`]}),e.role&&(0,U.jsx)(`div`,{className:W.roleLabel,style:{color:t||void 0},children:e.role})]},e.name)})})]})]}),(0,U.jsx)(wt,{accept:`.csv,.xlsx,.xls,.json,.jsonl`,className:W.dragger,disabled:t,maxCount:1,showUploadList:!1,beforeUpload:t=>(e(t),!1),children:t?(0,U.jsxs)(l,{className:W.draggerContent,gap:16,children:[(0,U.jsx)(h,{className:W.icon,icon:ce,size:{size:44,strokeWidth:1.5}}),(0,U.jsx)(`p`,{className:W.uploadText,children:a(`dataset.import.uploading`)}),i&&(0,U.jsx)(`div`,{className:W.progressWrapper,children:(0,U.jsx)(ne,{percent:i.progress,size:`small`})})]}):(0,U.jsxs)(l,{className:W.draggerContent,gap:12,children:[(0,U.jsx)(h,{className:W.icon,icon:se,size:{size:44,strokeWidth:1.5}}),(0,U.jsx)(`p`,{className:W.uploadText,children:a(`dataset.import.upload.text`)}),(0,U.jsx)(`p`,{className:W.hintText,children:a(`dataset.import.upload.hint`)})]})})]})})})),G,K,kt,At=e((()=>{P(),G=t(o()),i(),Re(),ke(),et(),St(),Ot(),K=t(s()),kt=({close:e,datasetId:t,onImportReady:r,onStateChange:i,onSuccess:a,presetId:o,setPrev:s})=>{let{t:c}=n(`eval`),[l,u]=(0,G.useState)(0),[d,f]=(0,G.useState)(!1),[p,m]=(0,G.useState)(),[h,_]=(0,G.useState)(``),[v,y]=(0,G.useState)(``),[b,x]=(0,G.useState)([]),[S,C]=(0,G.useState)([]),[ee,w]=(0,G.useState)(0),[te,ne]=(0,G.useState)(),[T,E]=(0,G.useState)({}),[D,re]=(0,G.useState)(``),O=(0,G.useMemo)(()=>o?Qe(o):void 0,[o]),k=Object.values(T).includes(`input`);(0,G.useEffect)(()=>{i({canImport:k,step:l})},[k,i,l]),(0,G.useEffect)(()=>{s(()=>u(0))},[s]);let A=(0,G.useCallback)(async e=>{f(!0),m(void 0);try{let t=await Ae.uploadToServerS3(e,{directory:`eval-datasets`,onProgress:(e,t)=>{m(t)}});_(t.path),y(e.name);let n=await ze.parseDatasetFile({filename:e.name,pathname:t.path});x(n.headers),C(n.preview),w(n.totalCount),ne(n.format),E(vt(n.headers,O)),u(1)}catch{setTimeout(()=>{g.error(c(`dataset.import.parseError`))},0)}finally{f(!1),m(void 0)}},[O,c]),ie=(0,G.useCallback)(()=>{let e=Object.entries(T).find(([,e])=>e===`input`)?.[0];if(!e)return null;let t=Object.entries(T).find(([,e])=>e===`expected`)?.[0],n=Object.entries(T).find(([,e])=>e===`choices`)?.[0],r=Object.entries(T).find(([,e])=>e===`category`)?.[0],i=Object.entries(T).find(([,e])=>e===`sortOrder`)?.[0],a=Object.entries(T).filter(([,e])=>e===`metadata`),o=a.length>0?Object.fromEntries(a.map(([e])=>[e,e])):void 0;return{category:r,choices:n,expected:t,expectedDelimiter:D||void 0,input:e,metadata:o,sortOrder:i}},[T,D]),ae=(0,G.useCallback)(async()=>{let n=ie();if(n)try{let r=await ze.importDataset({datasetId:t,fieldMapping:{category:n.category,choices:n.choices,expected:n.expected,expectedDelimiter:n.expectedDelimiter,input:n.input,metadata:n.metadata,sortOrder:n.sortOrder},filename:v,format:te,pathname:h});setTimeout(()=>{g.success(c(`dataset.import.success`,{count:r.count}))},0),e(),a?.(t)}catch{setTimeout(()=>{g.error(c(`dataset.import.error`))},0)}},[ie,e,t,v,te,a,h,c]);return(0,G.useEffect)(()=>{r({canImport:()=>k,runImport:ae})},[k,r,ae]),(0,K.jsxs)(K.Fragment,{children:[l===0&&(0,K.jsx)(Dt,{loading:d,preset:O,uploadProgress:p,onFileSelect:A}),l===1&&(0,K.jsx)(xt,{delimiter:D,headers:b,mapping:T,preview:S,totalCount:ee,onDelimiterChange:re,onMappingChange:E})]})}})),jt,Mt,Nt=e((()=>{f(),xe(),i(),jt=t(s()),Mt=({canImport:e,importing:t,onImport:r,onPrev:i})=>{let{t:a}=n(`eval`);return(0,jt.jsxs)(p,{children:[(0,jt.jsx)(d,{disabled:t,onClick:i,children:a(`dataset.import.prev`)}),(0,jt.jsx)(d,{disabled:!e,loading:t,type:`primary`,onClick:r,children:a(`dataset.import.confirm`)})]})}})),Pt,Ft,It=e((()=>{Se(),a(),At(),Nt(),Pt=t(s()),Ft=({datasetId:e,onSuccess:t,presetId:n})=>{let i={},a=0,o=!1,s=!1,c=async()=>{},l=()=>{},u=()=>a===0?null:(0,Pt.jsx)(Mt,{canImport:o,importing:s,onPrev:l,onImport:async()=>{s=!0,i.instance?.update({footer:u()});try{await c()}finally{s=!1,i.instance?.update({footer:u()})}}});return i.instance=y({content:(0,Pt.jsx)(kt,{close:()=>i.instance?.close(),datasetId:e,presetId:n,setPrev:e=>{l=e},onSuccess:t,onImportReady:e=>{c=e.runImport},onStateChange:e=>{e.step===a&&e.canImport===o||(a=e.step,o=e.canImport,i.instance?.update({footer:u()}))}}),footer:u(),maskClosable:!1,title:r(`dataset.import.title`,{ns:`eval`}),width:720}),i.instance}})),q,Lt,Rt,zt=e((()=>{M(),C(),Me(),je(),Ce(),Fe(),v(),P(),Pe(),O(),i(),Re(),q=t(s()),Lt={sectionLabel:N(`acss-1h2e50c`,[`.acss-1h2e50c{margin-block-end:12px;font-size:var(--ant-font-size-sm);font-weight:500;color:var(--ant-color-text-secondary);}`],`
    margin-block-end: 12px;
    font-size: var(--ant-font-size-sm);
    font-weight: 500;
    color: var(--ant-color-text-secondary);
  `)},Rt=({datasetId:e,formId:t,onLoadingChange:r,onSuccess:i})=>{let{t:a}=n(`eval`),{close:o}=w(),[s]=T.useForm(),c=T.useWatch(`evalMode`,s);return(0,q.jsxs)(T,{form:s,layout:`vertical`,name:t,onFinish:async t=>{r?.(!0);try{let n=t.tags?t.tags.split(`,`).map(e=>e.trim()).filter(Boolean):void 0;await ze.createTestCase({content:{expected:t.expected,input:t.input},datasetId:e,evalConfig:t.evalConfig?.judgePrompt?t.evalConfig:void 0,evalMode:t.evalMode||void 0,metadata:{...t.difficulty?{difficulty:t.difficulty}:{},...n?{tags:n}:{}}}),setTimeout(()=>{g.success(a(`testCase.create.success`))},0),o(),i?.(e)}catch{setTimeout(()=>{g.error(a(`testCase.create.error`))},0)}finally{r?.(!1)}},children:[(0,q.jsx)(`div`,{className:Lt.sectionLabel,children:a(`caseDetail.section.testCase`)}),(0,q.jsx)(T.Item,{label:a(`testCase.create.input.label`),name:`input`,rules:[{required:!0}],children:(0,q.jsx)(L,{autoSize:{maxRows:6,minRows:3},placeholder:a(`testCase.create.input.placeholder`)})}),(0,q.jsx)(T.Item,{label:a(`testCase.create.expected.label`),name:`expected`,rules:[{message:a(`testCase.create.expected.required`),required:!0}],children:(0,q.jsx)(L,{autoSize:{maxRows:6,minRows:2},placeholder:a(`testCase.create.expected.placeholder`)})}),(0,q.jsx)(`div`,{className:Lt.sectionLabel,style:{marginBlockStart:4},children:a(`caseDetail.section.scoring`)}),(0,q.jsx)(T.Item,{label:a(`evalMode.label`),name:`evalMode`,children:(0,q.jsx)(Ie,{allowClear:!0,placeholder:a(`evalMode.placeholder`),optionRender:e=>(0,q.jsxs)(u,{gap:4,style:{paddingBlock:4},children:[(0,q.jsx)(`div`,{children:e.label}),(0,q.jsx)(b,{fontSize:12,type:`secondary`,children:a(`evalMode.${e.value}.desc`)})]}),options:[{label:a(`evalMode.equals`),value:`equals`},{label:a(`evalMode.contains`),value:`contains`},{label:a(`evalMode.llm-rubric`),value:`llm-rubric`}]})}),c===`llm-rubric`&&(0,q.jsx)(T.Item,{label:a(`evalMode.prompt.label`),name:[`evalConfig`,`judgePrompt`],children:(0,q.jsx)(L,{autoSize:{maxRows:8,minRows:3},placeholder:a(`evalMode.prompt.placeholder`)})}),(0,q.jsx)(we,{keepMounted:!0,indicatorPlacement:`inline`,styles:{header:{paddingBlock:8,paddingInline:4}},items:[{children:(0,q.jsxs)(u,{gap:16,style:{paddingBlockStart:8},children:[(0,q.jsx)(T.Item,{label:a(`testCase.create.difficulty.label`),name:`difficulty`,style:{marginBottom:0},children:(0,q.jsx)(Ie,{allowClear:!0,placeholder:a(`testCase.create.difficulty.label`),options:[{label:a(`difficulty.easy`),value:`easy`},{label:a(`difficulty.medium`),value:`medium`},{label:a(`difficulty.hard`),value:`hard`}]})}),(0,q.jsx)(T.Item,{label:a(`testCase.create.tags.label`),name:`tags`,style:{marginBottom:0},children:(0,q.jsx)(Ne,{placeholder:a(`testCase.create.tags.placeholder`)})})]}),key:`advanced`,title:a(`testCase.create.advanced`)}]})]})}})),Bt,Vt,Ht=e((()=>{f(),xe(),Pe(),i(),Bt=t(s()),Vt=({formId:e,loading:t})=>{let{t:r}=n(`eval`),{close:i}=w();return(0,Bt.jsxs)(p,{children:[(0,Bt.jsx)(d,{disabled:t,onClick:i,children:r(`common.cancel`)}),(0,Bt.jsx)(d,{form:e,htmlType:`submit`,loading:t,type:`primary`,children:r(`common.create`)})]})}})),Ut,Wt,Gt=e((()=>{a(),We(),zt(),Ht(),Ut=t(s()),Wt=e=>Ke({renderContent:({formId:t,setLoading:n})=>(0,Ut.jsx)(Rt,{...e,formId:t,onLoadingChange:n}),renderFooter:({formId:e,loading:t})=>(0,Ut.jsx)(Vt,{formId:e,loading:t}),title:r(`testCase.create.title`,{ns:`eval`}),width:520})})),J,Y,X,Kt,qt=e((()=>{M(),Te(),C(),Me(),c(),f(),v(),O(),I(),j(),J=t(o()),i(),Xe(),Y=t(s()),X={filterButton:N(`acss-cwh1rx`,[`.acss-cwh1rx{cursor:pointer;padding-block:4px;padding-inline:8px;border:none;font-size:var(--ant-font-size-sm);font-weight:500;text-transform:capitalize;background:transparent;transition:color 0.15s ease,background 0.15s ease;}`,`.acss-cwh1rx[data-active='true']{color:var(--ant-color-text);background:var(--ant-color-fill-secondary);}`,`.acss-cwh1rx[data-active='false']{color:var(--ant-color-text-tertiary);}`,`.acss-cwh1rx[data-active='false']:hover{color:var(--ant-color-text);}`,`.acss-cwh1rx:not(:first-child){border-inline-start:1px solid var(--ant-color-border-secondary);}`,`.acss-cwh1rx:focus-visible{outline:2px solid var(--ant-color-primary);outline-offset:-1px;}`,`@media (prefers-reduced-motion: reduce){.acss-cwh1rx{transition:none;}}`],`
    cursor: pointer;

    padding-block: 4px;
    padding-inline: 8px;
    border: none;

    font-size: var(--ant-font-size-sm);
    font-weight: 500;
    text-transform: capitalize;

    background: transparent;

    transition:
      color 0.15s ease,
      background 0.15s ease;

    &[data-active='true'] {
      color: var(--ant-color-text);
      background: var(--ant-color-fill-secondary);
    }

    &[data-active='false'] {
      color: var(--ant-color-text-tertiary);

      &:hover {
        color: var(--ant-color-text);
      }
    }

    &:not(:first-child) {
      border-inline-start: 1px solid var(--ant-color-border-secondary);
    }

    &:focus-visible {
      outline: 2px solid var(--ant-color-primary);
      outline-offset: -1px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `),filterContainer:N(`acss-1mglshg`,[`.acss-1mglshg{overflow:hidden;display:flex;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-sm);}`],`
    overflow: hidden;
    display: flex;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-sm);
  `),filtersRow:N(`acss-1mtxbfh`,[`.acss-1mtxbfh{display:flex;align-items:center;justify-content:space-between;padding-block:12px;padding-inline:16px;border-block-end:1px solid var(--ant-color-border-secondary);}`],`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-block: 12px;
    padding-inline: 16px;
    border-block-end: 1px solid var(--ant-color-border-secondary);
  `),summaryDot:N(`acss-1tven3e`,[`.acss-1tven3e{width:8px;height:8px;border-radius:999px;}`],`
    width: 8px;
    height: 8px;
    border-radius: 999px;
  `),summaryRow:N(`acss-137hgpo`,[`.acss-137hgpo{display:flex;gap:16px;align-items:center;padding-block:12px;padding-inline:16px;border-block-end:1px solid var(--ant-color-border-secondary);}`],`
    display: flex;
    gap: 16px;
    align-items: center;

    padding-block: 12px;
    padding-inline: 16px;
    border-block-end: 1px solid var(--ant-color-border-secondary);
  `),summaryValue:N(`acss-5ks6cg`,[`.acss-5ks6cg{font-family:var(--ant-font-family-code);font-size:var(--ant-font-size-lg);font-weight:600;line-height:1;color:var(--ant-color-text);}`],`
    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size-lg);
    font-weight: 600;
    line-height: 1;
    color: var(--ant-color-text);
  `),table:N(`acss-152a508`,[`.acss-152a508 .ant-table{font-size:var(--ant-font-size);}`,`.acss-152a508 .ant-table-thead>tr>th{font-size:var(--ant-font-size-sm);font-weight:500;color:var(--ant-color-text-tertiary);background:var(--ant-color-fill-quaternary);}`,`.acss-152a508 .ant-table-tbody>tr.row-clickable{cursor:pointer;}`,`.acss-152a508 .ant-table-tbody>tr:hover{background:var(--ant-color-fill-quaternary);}`,`.acss-152a508 .ant-table-tbody>tr.row-selected{background:var(--ant-color-primary-bg);}`],`
    .ant-table {
      font-size: var(--ant-font-size);
    }

    .ant-table-thead > tr > th {
      font-size: var(--ant-font-size-sm);
      font-weight: 500;
      color: var(--ant-color-text-tertiary);
      background: var(--ant-color-fill-quaternary);
    }

    .ant-table-tbody > tr {
      &.row-clickable {
        cursor: pointer;
      }

      &:hover {
        background: var(--ant-color-fill-quaternary);
      }

      &.row-selected {
        background: var(--ant-color-primary-bg);
      }
    }
  `)},Kt=(0,J.memo)(({testCases:e,total:t,search:r,diffFilter:i,datasetEvalMode:a,pagination:o,onSearchChange:s,onDiffFilterChange:c,onPageChange:l,onPreview:f,onEdit:p,onOpen:m,onDelete:h,onAddCase:g,onImport:_,selectedId:v,readOnly:y})=>{let{t:x}=n(`eval`),S=(0,J.useMemo)(()=>{let t={easy:0,hard:0,medium:0};for(let n of e){let e=n?.metadata?.difficulty;(e===`easy`||e===`medium`||e===`hard`)&&(t[e]+=1)}let n=t.easy+t.medium+t.hard;return{counts:t,segments:[{color:F.colorSuccess,value:t.easy},{color:F.colorWarning,value:t.medium},{color:F.colorError,value:t.hard}],tagged:n}},[e]),C=(0,J.useMemo)(()=>{let e=[{dataIndex:`id`,key:`index`,render:(e,t,n)=>(0,Y.jsx)(`span`,{style:{color:F.colorTextTertiary,fontFamily:F.fontFamilyCode,fontSize:12},children:(o.current-1)*o.pageSize+n+1}),title:`#`,width:48},{dataIndex:[`content`,`input`],key:`input`,render:e=>(0,Y.jsx)(`p`,{style:{color:F.colorText,margin:0,whiteSpace:`pre-wrap`,wordBreak:`break-word`},children:e}),title:x(`table.columns.input`)},{dataIndex:[`content`,`expected`],ellipsis:!0,key:`expected`,render:e=>(0,Y.jsx)(`span`,{style:{color:F.colorTextSecondary},children:e||`-`}),title:x(`table.columns.expected`),width:200},{dataIndex:`evalMode`,key:`evalMode`,render:e=>{let t=e??a;if(!t)return(0,Y.jsx)(`span`,{style:{color:F.colorTextQuaternary},children:`-`});let n=!e&&!!a;return(0,Y.jsx)(`span`,{style:{color:n?F.colorTextQuaternary:F.colorTextSecondary,fontSize:12,fontStyle:n?`italic`:`normal`},children:x(`evalMode.${t}`)})},title:x(`table.columns.evalMode`),width:120},{dataIndex:[`content`,`category`],key:`category`,render:e=>(0,Y.jsx)(`span`,{style:{color:F.colorTextTertiary,fontSize:12},children:e||`-`}),title:x(`table.columns.category`),width:120}];return y||e.push({key:`actions`,render:(e,t)=>(0,Y.jsx)(`div`,{onClick:e=>e.stopPropagation(),children:(0,Y.jsx)(Ee,{trigger:[`click`],items:[...m?[{icon:(0,Y.jsx)(fe,{size:14}),key:`open`,label:x(`testCaseDetail.open`),onClick:()=>m(t)},{type:`divider`}]:[],{icon:(0,Y.jsx)(ie,{size:14}),key:`edit`,label:x(`common.edit`),onClick:()=>p?.(t)},{type:`divider`},{danger:!0,icon:(0,Y.jsx)(he,{size:14}),key:`delete`,label:x(`common.delete`),onClick:()=>h?.(t)}],children:(0,Y.jsx)(te,{icon:oe,size:`small`})})}),width:48}),e},[o,y,p,m,h,x,a]);return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(`div`,{className:X.summaryRow,children:[(0,Y.jsxs)(u,{gap:2,children:[(0,Y.jsx)(`span`,{className:X.summaryValue,children:t}),(0,Y.jsx)(b,{color:F.colorTextTertiary,fontSize:12,children:x(`benchmark.detail.stats.cases`)})]}),S.tagged>0&&(0,Y.jsxs)(u,{flex:1,gap:6,style:{maxWidth:320,minWidth:0},children:[(0,Y.jsx)(Ze,{segments:S.segments}),(0,Y.jsx)(u,{horizontal:!0,gap:12,style:{flexWrap:`wrap`},children:[`easy`,`medium`,`hard`].map(e=>(0,Y.jsxs)(u,{horizontal:!0,align:`center`,gap:6,children:[(0,Y.jsx)(`span`,{className:X.summaryDot,style:{background:e===`easy`?F.colorSuccess:e===`medium`?F.colorWarning:F.colorError}}),(0,Y.jsxs)(b,{color:F.colorTextTertiary,fontSize:12,children:[x(`difficulty.${e}`),` `,S.counts[e]]})]},e))})]})]}),(0,Y.jsxs)(`div`,{className:X.filtersRow,children:[(0,Y.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,Y.jsxs)(`div`,{style:{position:`relative`},children:[(0,Y.jsx)(de,{size:14,style:{color:F.colorTextTertiary,left:12,position:`absolute`,top:`50%`,transform:`translateY(-50%)`}}),(0,Y.jsx)(Ne,{placeholder:x(`testCase.search.placeholder`),size:`small`,value:r,style:{fontSize:12,paddingLeft:32,width:192},onChange:e=>{s(e.target.value)}})]}),(0,Y.jsx)(`div`,{className:X.filterContainer,children:[`all`,`easy`,`medium`,`hard`].map(e=>(0,Y.jsx)(`button`,{className:X.filterButton,"data-active":i===e,onClick:()=>{c(e)},children:e},e))})]}),!y&&(0,Y.jsxs)(u,{horizontal:!0,gap:8,children:[(0,Y.jsx)(d,{icon:ae,size:`small`,onClick:_,children:x(`testCase.actions.import`)}),(0,Y.jsx)(d,{icon:_e,size:`small`,type:`primary`,onClick:g,children:x(`testCase.actions.add`)})]})]}),(0,Y.jsx)(`div`,{className:X.table,children:(0,Y.jsx)(E,{columns:C,dataSource:e,pagination:!1,rowKey:`id`,size:`small`,rowClassName:e=>{let t=[];return y||t.push(`row-clickable`),e.id===v&&t.push(`row-selected`),t.join(` `)},onRow:y?void 0:e=>({onClick:()=>f?.(e)})})}),t>o.pageSize&&(0,Y.jsx)(u,{horizontal:!0,align:`center`,justify:`end`,style:{paddingBlock:12,paddingInline:16},children:(0,Y.jsx)(re,{simple:!0,current:o.current,pageSize:o.pageSize,size:`small`,total:t,onChange:l})})]})})})),Jt,Z,Yt,Xt,Zt=e((()=>{M(),C(),_(),f(),v(),I(),j(),Jt=t(o()),i(),Z=t(s()),Yt={emptyCard:N(`acss-s62864`,[`.acss-s62864{align-items:center;justify-content:center;padding-block:64px;padding-inline:24px;border:1px dashed var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);text-align:center;background:var(--ant-color-fill-quaternary);}`],`
    align-items: center;
    justify-content: center;

    padding-block: 64px;
    padding-inline: 24px;
    border: 1px dashed var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);

    text-align: center;

    background: var(--ant-color-fill-quaternary);
  `),iconBox:N(`acss-iusf1m`,[`.acss-iusf1m{display:flex;flex-shrink:0;align-items:center;justify-content:center;width:56px;height:56px;border-radius:var(--ant-border-radius-lg);background:var(--ant-color-fill-tertiary);}`],`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 56px;
    height: 56px;
    border-radius: var(--ant-border-radius-lg);

    background: var(--ant-color-fill-tertiary);
  `)},Xt=(0,Jt.memo)(({onCreate:e})=>{let{t}=n(`eval`);return(0,Z.jsxs)(u,{className:Yt.emptyCard,gap:16,children:[(0,Z.jsx)(`div`,{className:Yt.iconBox,children:(0,Z.jsx)(h,{icon:pe,size:28,style:{color:F.colorTextTertiary}})}),(0,Z.jsxs)(u,{align:`center`,gap:4,children:[(0,Z.jsx)(b,{weight:600,children:t(`run.empty.title`)}),(0,Z.jsx)(b,{color:F.colorTextTertiary,fontSize:12,children:t(`run.empty.descriptionBenchmark`)})]}),(0,Z.jsx)(d,{icon:_e,size:`small`,type:`primary`,onClick:e,children:t(`run.actions.create`)})]})})})),Qt,Q,$,$t,en=e((()=>{M(),Te(),C(),_(),Le(),P(),I(),j(),Qt=t(o()),i(),Be(),Ue(),Xe(),Ge(),Je(),Q=t(s()),$={arrowIcon:N(`acss-17zgsu9`,[`.acss-17zgsu9{flex-shrink:0;color:var(--ant-color-text-tertiary);transition:transform 0.15s ease;}`,`@media (prefers-reduced-motion: reduce){.acss-17zgsu9{transition:none;}}`],`
    flex-shrink: 0;
    color: var(--ant-color-text-tertiary);
    transition: transform 0.15s ease;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `),card:N(`acss-1v40m2a`,[`.acss-1v40m2a{padding:20px;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);background:var(--ant-color-bg-container);transition:border-color 0.15s ease,background 0.15s ease;}`,`.acss-1v40m2a:hover{border-color:var(--ant-color-border);}`,`.acss-1v40m2a:hover .run-card-arrow{transform:translateX(2px);color:var(--ant-color-text);}`,`@media (prefers-reduced-motion: reduce){.acss-1v40m2a{transition:none;}.acss-1v40m2a:hover .run-card-arrow{transform:none;}}`],`
    padding: 20px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius-lg);

    background: var(--ant-color-bg-container);

    transition:
      border-color 0.15s ease,
      background 0.15s ease;

    &:hover {
      border-color: var(--ant-color-border);
    }

    &:hover .run-card-arrow {
      transform: translateX(2px);
      color: var(--ant-color-text);
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;

      &:hover .run-card-arrow {
        transform: none;
      }
    }
  `),cardLink:N(`acss-5x0u19`,[`.acss-5x0u19{text-decoration:none;}`],`
    text-decoration: none;
  `),dropdownTrigger:N(`acss-ivcyoq`,[`.acss-ivcyoq{cursor:pointer;display:flex;flex-shrink:0;align-items:center;justify-content:center;width:28px;height:28px;border-radius:var(--ant-border-radius-sm);color:var(--ant-color-text-tertiary);transition:color 0.15s ease,background 0.15s ease;}`,`.acss-ivcyoq:hover{color:var(--ant-color-text);background:var(--ant-color-fill-secondary);}`,`.acss-ivcyoq:focus-visible{outline:2px solid var(--ant-color-primary);outline-offset:-1px;}`,`@media (prefers-reduced-motion: reduce){.acss-ivcyoq{transition:none;}}`],`
    cursor: pointer;

    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;
    border-radius: var(--ant-border-radius-sm);

    color: var(--ant-color-text-tertiary);

    transition:
      color 0.15s ease,
      background 0.15s ease;

    &:hover {
      color: var(--ant-color-text);
      background: var(--ant-color-fill-secondary);
    }

    &:focus-visible {
      outline: 2px solid var(--ant-color-primary);
      outline-offset: -1px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `),hero:N(`acss-1c2lrp1`,[`.acss-1c2lrp1{padding:16px;border-radius:var(--ant-border-radius);background:var(--ant-color-fill-quaternary);}`],`
    padding: 16px;
    border-radius: var(--ant-border-radius);
    background: var(--ant-color-fill-quaternary);
  `),heroValue:N(`acss-1w2ej0p`,[`.acss-1w2ej0p{font-family:var(--ant-font-family-code);font-size:var(--ant-font-size-heading-2);font-weight:600;line-height:1;color:var(--ant-color-text);}`],`
    font-family: var(--ant-font-family-code);
    font-size: var(--ant-font-size-heading-2);
    font-weight: 600;
    line-height: 1;
    color: var(--ant-color-text);
  `),meta:N(`acss-1qvph1t`,[`.acss-1qvph1t{font-size:var(--ant-font-size-sm);color:var(--ant-color-text-tertiary);}`],`
    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-tertiary);
  `),metaHighlight:N(`acss-14wmj16`,[`.acss-14wmj16{font-size:var(--ant-font-size-sm);color:var(--ant-color-text-secondary);}`],`
    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-secondary);
  `),monoText:N(`acss-15uzuxl`,[`.acss-15uzuxl{font-family:var(--ant-font-family-code);}`],`
    font-family: var(--ant-font-family-code);
  `),name:N(`acss-1y0osg1`,[`.acss-1y0osg1{overflow:hidden;font-size:var(--ant-font-size-lg);font-weight:600;color:var(--ant-color-text);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    font-size: var(--ant-font-size-lg);
    font-weight: 600;
    color: var(--ant-color-text);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),progressFill:N(`acss-1gqi0vy`,[`.acss-1gqi0vy{height:100%;border-radius:999px;background:var(--ant-color-primary);transition:width 0.3s ease;}`,`@media (prefers-reduced-motion: reduce){.acss-1gqi0vy{transition:none;}}`],`
    height: 100%;
    border-radius: 999px;
    background: var(--ant-color-primary);
    transition: width 0.3s ease;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `),progressTrack:N(`acss-n0ar8o`,[`.acss-n0ar8o{overflow:hidden;width:100%;height:8px;border-radius:999px;background:var(--ant-color-fill-secondary);}`],`
    overflow: hidden;

    width: 100%;
    height: 8px;
    border-radius: 999px;

    background: var(--ant-color-fill-secondary);
  `),separator:N(`acss-ufzl3l`,[`.acss-ufzl3l{color:var(--ant-color-border-secondary);}`],`
    color: var(--ant-color-border-secondary);
  `),stat:N(`acss-vbxfwc`,[`.acss-vbxfwc{display:inline-flex;gap:4px;align-items:center;font-size:var(--ant-font-size-sm);}`],`
    display: inline-flex;
    gap: 4px;
    align-items: center;
    font-size: var(--ant-font-size-sm);
  `),statError:N(`acss-zknb5i`,[`.acss-zknb5i{color:var(--ant-color-error);}`],`
    color: var(--ant-color-error);
  `),statSuccess:N(`acss-1agh9uj`,[`.acss-1agh9uj{color:var(--ant-color-success);}`],`
    color: var(--ant-color-success);
  `),statWarning:N(`acss-rc3uuo`,[`.acss-rc3uuo{color:var(--ant-color-warning);}`],`
    color: var(--ant-color-warning);
  `),unit:N(`acss-1qvph1t`,[`.acss-1qvph1t{font-size:var(--ant-font-size-sm);color:var(--ant-color-text-tertiary);}`],`
    font-size: var(--ant-font-size-sm);
    color: var(--ant-color-text-tertiary);
  `)},$t=(0,Qt.memo)(({benchmarkId:e,run:t,onRefresh:r,onEdit:i})=>{let{t:a}=n(`eval`),o=He(e=>e.deleteRun),s=He(e=>e.startRun),c=He(e=>e.abortRun),l=t.metrics,d=l?.totalCases??0,f=l?.passedCases??0,p=l?.failedCases??0,m=l?.errorCases??0,_=f+p+m,v=d>0?_/d*100:0,y=l?.passRate==null?0:l.passRate*100,b=(t.status===`completed`||t.status===`running`)&&_>0,x=t.status===`idle`||t.status===`failed`||t.status===`aborted`,C=t.status===`running`||t.status===`pending`,ee=d>0&&t.status!==`completed`,w=e=>e?(e instanceof Date?e:new Date(e)).toLocaleDateString(`en-US`,{day:`numeric`,month:`short`}):``,te=e=>{e.preventDefault(),e.stopPropagation(),S({content:a(`run.actions.start.confirm`),okText:a(`run.actions.start`),onOk:async()=>{try{await s(t.id,t.status!==`idle`),await r?.()}catch(e){g.error(e?.message||`Failed to start run`)}},title:a(`run.actions.start`)})},ne=e=>{e?.preventDefault(),e?.stopPropagation(),S({content:a(`run.actions.abort.confirm`),okText:a(`run.actions.abort`),okButtonProps:{danger:!0},onOk:async()=>{await c(t.id),await r?.()},title:a(`run.actions.abort`)})},T=e=>{e?.preventDefault(),e?.stopPropagation(),S({content:a(`run.actions.delete.confirm`),okButtonProps:{danger:!0},okText:a(`run.actions.delete`),onOk:async()=>{await o(t.id),await r?.()},title:a(`run.actions.delete`)})},E=e=>{e?.preventDefault(),e?.stopPropagation(),i?.(t)},D=[...x?[{icon:(0,Q.jsx)(me,{size:14}),key:`start`,label:a(`run.actions.start`),onClick:({domEvent:e})=>te(e)},{type:`divider`}]:[],{icon:(0,Q.jsx)(ie,{size:14}),key:`edit`,label:a(`run.actions.edit`),onClick:({domEvent:e})=>E(e)},...C?[{danger:!0,icon:(0,Q.jsx)(le,{size:14}),key:`abort`,label:a(`run.actions.abort`),onClick:({domEvent:e})=>ne(e)}]:[],{type:`divider`},{danger:!0,icon:(0,Q.jsx)(he,{size:14}),key:`delete`,label:a(`run.actions.delete`),onClick:({domEvent:e})=>T(e)}],re=[t.createdAt&&{text:w(t.createdAt)},t.datasetName&&{text:t.datasetName},t.targetAgent?.title&&{text:t.targetAgent.title},t.targetAgent?.model&&{className:$.monoText,text:t.targetAgent.model},l?.duration!=null&&{className:$.metaHighlight,text:Ye(l.duration)},l?.totalCost!=null&&{className:$.metaHighlight,text:`$${l.totalCost.toFixed(2)}`}].filter(e=>!!e);return(0,Q.jsx)(Ve,{className:$.cardLink,to:`/eval/bench/${e}/runs/${t.id}`,children:(0,Q.jsxs)(u,{className:$.card,gap:16,children:[(0,Q.jsxs)(u,{horizontal:!0,align:`flex-start`,gap:12,justify:`space-between`,children:[(0,Q.jsxs)(u,{flex:1,gap:4,style:{minWidth:0},children:[(0,Q.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,Q.jsx)(`span`,{className:$.name,children:t.name}),(0,Q.jsx)(qe,{status:t.status})]}),re.length>0&&(0,Q.jsx)(u,{horizontal:!0,align:`center`,className:$.meta,gap:4,wrap:`wrap`,children:re.map((e,t)=>(0,Q.jsxs)(Qt.Fragment,{children:[t>0&&(0,Q.jsx)(`span`,{className:$.separator,children:`/`}),(0,Q.jsx)(`span`,{className:e.className,children:e.text})]},t))})]}),(0,Q.jsxs)(u,{horizontal:!0,align:`center`,gap:4,style:{flexShrink:0},children:[(0,Q.jsx)(Ee,{items:D,placement:`bottomRight`,children:(0,Q.jsx)(`span`,{className:$.dropdownTrigger,onClick:e=>{e.preventDefault(),e.stopPropagation()},children:(0,Q.jsx)(oe,{size:16})})}),(0,Q.jsx)(h,{className:`${$.arrowIcon} run-card-arrow`,icon:be,size:16})]})]}),ee?(0,Q.jsxs)(u,{className:$.hero,gap:10,children:[(0,Q.jsxs)(u,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,Q.jsxs)(`span`,{className:$.meta,children:[_,`/`,d]}),(0,Q.jsxs)(`span`,{className:$.metaHighlight,children:[v.toFixed(0),`%`]})]}),(0,Q.jsx)(`div`,{className:$.progressTrack,children:(0,Q.jsx)(`div`,{className:$.progressFill,style:{width:`${v}%`}})})]}):b?(0,Q.jsxs)(u,{className:$.hero,gap:12,children:[(0,Q.jsxs)(u,{horizontal:!0,align:`flex-end`,gap:16,justify:`space-between`,children:[(0,Q.jsx)(u,{gap:4,children:(0,Q.jsxs)(u,{horizontal:!0,align:`baseline`,gap:6,children:[(0,Q.jsxs)(`span`,{className:$.heroValue,children:[y.toFixed(0),`%`]}),(0,Q.jsx)(`span`,{className:$.unit,children:a(`run.metrics.passRate`)})]})}),(0,Q.jsxs)(u,{horizontal:!0,align:`center`,gap:12,children:[(0,Q.jsxs)(`span`,{className:`${$.stat} ${$.statSuccess}`,children:[(0,Q.jsx)(h,{icon:k,size:14}),f]}),(0,Q.jsxs)(`span`,{className:`${$.stat} ${$.statError}`,children:[(0,Q.jsx)(h,{icon:ge,size:14}),p]}),m>0&&(0,Q.jsxs)(`span`,{className:`${$.stat} ${$.statWarning}`,children:[(0,Q.jsx)(h,{icon:ye,size:14}),m]})]})]}),(0,Q.jsx)(Ze,{segments:[{color:F.colorSuccess,value:f},{color:F.colorError,value:p},{color:F.colorWarning,value:m}]})]}):null]})})})}));export{Kt as a,Gt as c,lt as d,ut as f,et as h,Zt as i,Ft as l,$e as m,en as n,qt as o,R as p,Xt as r,Wt as s,$t as t,It as u};