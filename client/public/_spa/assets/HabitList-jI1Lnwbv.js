import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,Q as r,j as i}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as a,T as o,a as s,i as c}from"../vendor/vendor-react-B9HSWrpN.js";import{B as l,Ht as u,Kt as d,Mt as f,Nt as p,Ut as m,Xn as h,Yn as g,Zn as _,at as v,it as y,lt as ee,qt as b,z as te}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Ma as ne,Op as re,Os as ie,cg as ae,ey as oe,ng as se,t as ce}from"../vendor/vendor-icons-vienkZi5.js";import{FD as x,ID as S,MA as C,On as w,TA as le,kn as ue,wA as T}from"./index-w64_zsxD.js";import{n as E,t as de}from"./Popover-Cd3scH3I.js";import{n as fe,t as pe}from"./DropdownMenu-1ae8j9bI.js";import{t as me}from"./_virtual_lobe-ui-named__Tooltip-DNompU8a.js";import{n as D,t as O}from"./Tag-C95BKTI7.js";import{n as he,t as ge}from"./TextArea-D_Rfq5JU.js";import{n as _e,t as ve}from"./SearchBar-D4sP5Y6j.js";import{n as k,t as A}from"./useWorkspaceAwareNavigate-BbajQ7ta.js";import{l as j,m as M,o as N,r as P,s as ye,t as be,u as F}from"./hooks-BeogWwRX.js";import{n as xe,t as I}from"./expertise-Dvoz_wtu.js";var L,R,z,B,V,Se=e((()=>{x(),b(),ue(),D(),v(),L=t(a()),i(),c(),A(),F(),be(),R=t(o()),z={root:S(`acss-t0u6dz`,[`.acss-t0u6dz{overflow-y:auto;width:380px;max-width:min(380px, calc(100vw - 32px));max-height:calc(var(--available-height, 100dvh) - 16px);}`],`
    /*
     * A row near the fold leaves less room below it than the card wants. base-ui publishes the
     * space it actually has as --available-height; without this the card runs past the viewport
     * and its evidence and click hint become unreachable.
     */
    overflow-y: auto;
    width: 380px;
    max-width: min(380px, calc(100vw - 32px));

    /* less the popup's own chrome, which sits outside this element */

    /*
     * The card prefers the space below the row but flips above when that runs out, so this
     * tracks whichever side Base UI actually chose rather than assuming one of them.
     */
    max-height: calc(var(--available-height, 100dvh) - 16px);
  `),section:S(`acss-1f28hp2`,[`.acss-1f28hp2{display:grid;grid-template-columns:56px minmax(0, 1fr);gap:12px;align-items:baseline;}`],`
    display: grid;
    grid-template-columns: 56px minmax(0, 1fr);
    gap: 12px;
    align-items: baseline;
  `),separator:S(`acss-1ors2xy`,[`.acss-1ors2xy{flex:none;height:1px;background:var(--ant-color-border-secondary);}`],`
    flex: none;
    height: 1px;
    background: var(--ant-color-border-secondary);
  `),retry:S(`acss-u26plt`,[`.acss-u26plt{cursor:pointer;align-self:flex-start;border:0;background:none;}`],`
    cursor: pointer;
    align-self: flex-start;
    border: 0;
    background: none;
  `),open:S(`acss-19d6z1i`,[`.acss-19d6z1i{flex:none;font-size:12px;color:var(--ant-color-text-secondary);white-space:nowrap;}`,`.acss-19d6z1i:hover{color:var(--ant-color-text);}`],`
    flex: none;
    font-size: 12px;
    color: var(--ant-color-text-secondary);
    white-space: nowrap;

    &:hover {
      color: var(--ant-color-text);
    }
  `),title:S(`acss-1vvg3e2`,[`.acss-1vvg3e2{text-wrap:balance;}`],`
    text-wrap: balance;
  `)},B=2,V=(0,L.memo)(({code:e,layer:t,lessonId:r,lessonPath:i,title:a})=>{let{t:o}=n(`selfLearning`),c=k(),{data:l,error:u,isLoading:f,mutate:p}=P(r),m=M(l?.lesson.sections),h=l?.hits.slice(0,B)??[];return(0,R.jsxs)(d,{className:z.root,gap:10,padding:4,children:[(0,R.jsxs)(d,{gap:6,children:[(0,R.jsxs)(d,{horizontal:!0,align:`center`,gap:12,justify:`space-between`,children:[(0,R.jsx)(y,{fontSize:12,type:`secondary`,weight:600,children:o(`rules.detail.eyebrow`,{code:e})}),(0,R.jsx)(s,{className:z.open,to:i,onClick:e=>{e.preventDefault(),c(i)},children:o(`preview.open`)})]}),(0,R.jsx)(y,{className:z.title,fontSize:15,lineHeight:1.45,weight:600,children:a}),(0,R.jsxs)(d,{horizontal:!0,align:`center`,gap:8,wrap:`wrap`,children:[(0,R.jsx)(y,{fontSize:12,type:`secondary`,children:l?o(`rules.detail.meta`,{hits:l.lesson.hitCount,runs:l.lesson.hitRunCount}):o(u?`preview.failed`:`preview.loading`)}),t&&(0,R.jsx)(O,{size:`small`,children:t})]})]}),f&&!l&&(0,R.jsx)(w,{rows:3}),!!u&&!l&&(0,R.jsx)(y,{as:`button`,className:z.retry,fontSize:12,type:`info`,onClick:()=>void p(),children:o(`rules.detail.retry`)}),m.length>0&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`div`,{className:z.separator}),(0,R.jsx)(d,{gap:8,children:m.map(({label:e,...t})=>(0,R.jsxs)(`div`,{className:z.section,children:[(0,R.jsx)(y,{fontSize:12,type:`secondary`,weight:600,children:e?o(e):t.key}),(0,R.jsx)(y,{fontSize:12.5,lineClamp:3,lineHeight:1.6,children:t.body})]},t.key))})]}),h.length>0&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`div`,{className:z.separator}),(0,R.jsxs)(d,{gap:6,children:[(0,R.jsx)(y,{fontSize:12,type:`secondary`,weight:600,children:o(`rules.detail.examples`)}),h.map((e,t)=>(0,R.jsxs)(d,{horizontal:!0,align:`flex-start`,gap:8,children:[(0,R.jsx)(y,{fontSize:12,style:{flex:`none`},type:e.outcome===`pass`?`secondary`:`warning`,children:o(`rules.detail.outcome.${e.outcome}`)}),(0,R.jsx)(y,{fontSize:12,lineClamp:2,type:`secondary`,children:e.example})]},`${e.createdAt}-${t}`)),l&&l.hits.length>B&&(0,R.jsx)(y,{fontSize:12,type:`secondary`,children:o(`preview.moreEvidence`,{count:l.hits.length-B})})]})]})]})}),V.displayName=`ExpertiseLessonPreview`})),H,U=e((()=>{x(),H={accent:S(`acss-2brds6`,[`.acss-2brds6{color:var(--ant-color-warning)!important;}`],`
    color: var(--ant-color-warning) !important;
  `),bar:S(`acss-1njvw9j`,[`.acss-1njvw9j{overflow:hidden;display:flex;width:100%;height:5px;border-radius:3px;background:var(--ant-color-fill-secondary);}`],`
    overflow: hidden;
    display: flex;

    width: 100%;
    height: 5px;
    border-radius: 3px;

    background: var(--ant-color-fill-secondary);
  `),profileCounts:S(`acss-8slcon`,[`.acss-8slcon{min-width:0;text-align:end;white-space:nowrap;}`],`
    min-width: 0;
    text-align: end;
    white-space: nowrap;
  `),profileKey:S(`acss-6w9av4`,[`.acss-6w9av4{flex:none;width:32px;font-family:var(--ant-font-family-code);white-space:nowrap;}`],`
    flex: none;
    width: 32px;
    font-family: var(--ant-font-family-code);
    white-space: nowrap;
  `),profileProgress:S(`acss-irkhau`,[`.acss-irkhau{width:100%;min-width:120px;}`],`
    width: 100%;
    min-width: 120px;
  `),profileRow:S(`acss-hkmsf2`,[`.acss-hkmsf2{display:grid;grid-template-columns:minmax(220px, 1.15fr) minmax(180px, 1fr) 84px minmax(220px, auto);gap:20px;align-items:center;padding-block:14px;padding-inline:18px;border-block-start:1px solid var(--ant-color-border-secondary);}`,`@media (width <= 1100px){.acss-hkmsf2{grid-template-columns:minmax(200px, 1fr) minmax(140px, 1fr) 84px;}.acss-hkmsf2>:last-child{grid-column:2/-1;text-align:start;}}`],`
    display: grid;
    grid-template-columns: minmax(220px, 1.15fr) minmax(180px, 1fr) 84px minmax(220px, auto);
    gap: 20px;
    align-items: center;

    padding-block: 14px;
    padding-inline: 18px;
    border-block-start: 1px solid var(--ant-color-border-secondary);

    @media (width <= 1100px) {
      grid-template-columns: minmax(200px, 1fr) minmax(140px, 1fr) 84px;

      & > :last-child {
        grid-column: 2 / -1;
        text-align: start;
      }
    }
  `),profileTitle:S(`acss-1lcvafs`,[`.acss-1lcvafs{padding-block:14px 10px;padding-inline:18px;font-size:12px;}`],`
    padding-block: 14px 10px;
    padding-inline: 18px;
    font-size: 12px;
  `),dot:S(`acss-rcv7v8`,[`.acss-rcv7v8{display:inline-block;box-sizing:border-box;width:7px;height:7px;border-radius:50%;}`],`
    display: inline-block;

    box-sizing: border-box;
    width: 7px;
    height: 7px;
    border-radius: 50%;
  `),dotBad:S(`acss-tgdknd`,[`.acss-tgdknd{background:var(--ant-color-warning);}`],`
    background: var(--ant-color-warning);
  `),dotNone:S(`acss-umiuw2`,[`.acss-umiuw2{border:1px solid var(--ant-color-border);background:transparent;}`],`
    border: 1px solid var(--ant-color-border);
    background: transparent;
  `),dotOk:S(`acss-cfksrz`,[`.acss-cfksrz{background:var(--ant-color-text-quaternary);}`],`
    background: var(--ant-color-text-quaternary);
  `),groupHead:S(`acss-1ue8wld`,[`.acss-1ue8wld{padding-block:8px;padding-inline:14px;border:0;border-block-end:1px solid var(--ant-color-border-secondary);font:inherit;background:var(--ant-color-fill-quaternary);}`],`
    padding-block: 8px;
    padding-inline: 14px;
    border: 0;
    border-block-end: 1px solid var(--ant-color-border-secondary);

    font: inherit;

    background: var(--ant-color-fill-quaternary);
  `),previewTarget:S(`acss-17hyb0c`,[`.acss-17hyb0c{cursor:pointer;text-align:start;}`,`.acss-17hyb0c:focus-visible{border-radius:4px;outline:2px solid var(--ant-color-primary-border);outline-offset:2px;}`],`
    cursor: pointer;
    text-align: start;

    &:focus-visible {
      border-radius: 4px;
      outline: 2px solid var(--ant-color-primary-border);
      outline-offset: 2px;
    }
  `),viewAll:S(`acss-x3nvj2`,[`.acss-x3nvj2{font-size:12.5px;color:var(--ant-color-text-secondary);white-space:nowrap;}`,`.acss-x3nvj2:hover{color:var(--ant-color-text);}`],`
    font-size: 12.5px;
    color: var(--ant-color-text-secondary);
    white-space: nowrap;

    &:hover {
      color: var(--ant-color-text);
    }
  `),row:S(`acss-10yv79j`,[`.acss-10yv79j{padding-block:10px;padding-inline:14px;border:0;border-block-end:1px solid var(--ant-color-border-secondary);font:inherit;}`,`.acss-10yv79j:last-child{border-block-end:none;}`,`.acss-10yv79j .teach{opacity:0;transition:opacity 0.15s;}`,`.acss-10yv79j:hover,.acss-10yv79j:focus-within{background:var(--ant-color-fill-quaternary);}`,`.acss-10yv79j:hover .teach,.acss-10yv79j:focus-within .teach{opacity:1;}`],`
    padding-block: 10px;
    padding-inline: 14px;
    border: 0;
    border-block-end: 1px solid var(--ant-color-border-secondary);

    font: inherit;

    &:last-child {
      border-block-end: none;
    }

    .teach {
      opacity: 0;
      transition: opacity 0.15s;
    }

    &:hover,
    &:focus-within {
      background: var(--ant-color-fill-quaternary);

      .teach {
        opacity: 1;
      }
    }
  `),segBad:S(`acss-tgdknd`,[`.acss-tgdknd{background:var(--ant-color-warning);}`],`
    background: var(--ant-color-warning);
  `),segOk:S(`acss-cfksrz`,[`.acss-cfksrz{background:var(--ant-color-text-quaternary);}`],`
    background: var(--ant-color-text-quaternary);
  `),segShaky:S(`acss-tyxyw3`,[`.acss-tyxyw3{opacity:0.55;background:var(--ant-color-warning);}`],`
    opacity: 0.55;
    background: var(--ant-color-warning);
  `),sentence:S(`acss-1b76tle`,[`.acss-1b76tle{font-size:22px;font-weight:700;line-height:1.4;text-wrap:balance;}`],`
    font-size: 22px;
    font-weight: 700;
    line-height: 1.4;
    text-wrap: balance;
  `)}})),W,G,K,q=e((()=>{b(),he(),p(),W=t(a()),i(),G=t(o()),K=(0,W.memo)(({autoFocus:e,onSubmit:t,placeholder:r})=>{let{t:i}=n(`selfLearning`),[a,o]=(0,W.useState)(``),[s,c]=(0,W.useState)(!1),l=async()=>{let e=a.trim();if(!(!e||s)){c(!0);try{await t(e),o(``)}finally{c(!1)}}};return(0,G.jsxs)(d,{horizontal:!0,align:`flex-end`,gap:8,width:`100%`,children:[(0,G.jsx)(ge,{autoFocus:e,autoSize:{maxRows:4,minRows:1},disabled:s,placeholder:r,style:{flex:1},value:a,onChange:e=>o(e.target.value),onKeyDown:e=>{(e.metaKey||e.ctrlKey)&&e.key===`Enter`&&l()}}),(0,G.jsx)(f,{disabled:!a.trim(),loading:s,type:`primary`,onClick:l,children:i(`habit.teach.send`)})]})}),K.displayName=`ExpertiseTeachBox`})),J,Y,X,Z,Q,$,Ce=e((()=>{m(),b(),_(),_e(),me(),l(),p(),fe(),E(),D(),v(),C(),J=t(r()),ce(),Y=t(a()),i(),c(),T(),A(),xe(),F(),Se(),U(),q(),X=t(o()),Z=(0,Y.memo)(({recent:e})=>{let{t}=n(`selfLearning`);return(0,X.jsx)(ee,{title:e.length===0?t(`habit.recentTip.none`):t(`habit.recentTip.title`,{count:e.length,list:e.map(e=>e.pass?t(`habit.recentTip.pass`):t(`habit.recentTip.violation`)).join(` `)}),children:(0,X.jsx)(d,{horizontal:!0,gap:3,style:{flex:`none`},children:e.length===0?[0,1,2].map(e=>(0,X.jsx)(`span`,{className:`${H.dot} ${H.dotNone}`},e)):e.map((e,t)=>(0,X.jsx)(`span`,{className:`${H.dot} ${e.pass?H.dotOk:H.dotBad}`},t))})})}),Z.displayName=`ExpertiseRecentDots`,Q=(0,Y.memo)(({agentId:e,domainTitle:t,habit:r,onChanged:i,tier:a})=>{let{t:o}=n(`selfLearning`),s=k(),[c,l]=(0,Y.useState)(!1),u=(0,Y.useMemo)(()=>{if(r.taughtByUser&&r.recent.length===0)return o(`habit.hint.taughtPending`);let e=r.recent.filter(e=>!e.pass),t=[...e].reverse()[0]?.subjectTitle??void 0;switch(a){case`recurring`:return t?o(`habit.hint.recurring`,{bad:e.length,topic:t,total:r.recent.length}):o(`habit.hint.recurringNoTopic`,{bad:e.length,total:r.recent.length});case`shaky`:return t?o(`habit.hint.shaky`,{topic:t,total:r.recent.length}):o(`habit.hint.shakyNoTopic`,{total:r.recent.length});case`fresh`:return r.recent.length===0?o(`habit.hint.freshNone`):o(`habit.hint.freshOne`);default:return o(`habit.hint.stable`,{count:r.hitCount})}},[r,o,a]),p=async e=>{try{await I.reviseLesson({lessonId:r.id,text:e}),g.success(o(`habit.teach.done`)),l(!1),i()}catch{g.error(o(`habit.teach.failed`))}},m=async()=>{try{await I.retireLesson(r.id),g.success(o(`habit.teach.forgot`)),i()}catch{g.error(o(`habit.teach.failed`))}},_=le(`/agent`,e,`self-evolving`,r.domainId,`experience`,r.id),v=[{icon:(0,X.jsx)(h,{icon:ne}),key:`correct`,label:o(`habit.action.correct`),onClick:()=>l(!0)},{icon:(0,X.jsx)(h,{icon:ie}),key:`source`,label:o(`habit.action.source`),onClick:()=>s(_)},{type:`divider`},{danger:!0,icon:(0,X.jsx)(h,{icon:oe}),key:`forget`,label:o(`habit.action.forget`),onClick:m}];return(0,X.jsxs)(d,{className:H.row,gap:6,children:[(0,X.jsxs)(d,{horizontal:!0,align:`flex-start`,gap:12,children:[(0,X.jsx)(y,{code:!0,fontSize:12,style:{flex:`none`,marginTop:2},type:`secondary`,children:r.code}),(0,X.jsx)(de,{openDelay:420,placement:`bottomRight`,positionerProps:{collisionPadding:12},trigger:`hover`,content:(0,X.jsx)(V,{code:r.code,layer:r.layer,lessonId:r.id,lessonPath:_,title:r.title}),children:(0,X.jsxs)(d,{className:H.previewTarget,gap:2,style:{flex:1,minWidth:0},onClick:()=>s(_),onKeyDown:e=>{e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),s(_))},children:[(0,X.jsxs)(d,{horizontal:!0,align:`center`,gap:8,wrap:`wrap`,children:[(0,X.jsx)(y,{fontSize:13.5,weight:500,children:r.title}),r.taughtByUser&&(0,X.jsxs)(O,{children:[o(`habit.taughtTag`),` · `,(0,J.default)(r.createdAt).fromNow()]}),t&&(0,X.jsx)(O,{children:t})]}),(0,X.jsx)(y,{fontSize:12,type:`secondary`,children:u})]})}),(0,X.jsx)(Z,{recent:r.recent}),(0,X.jsxs)(d,{horizontal:!0,align:`center`,className:`teach`,gap:4,style:{flex:`none`},children:[(a===`recurring`||a===`shaky`)&&(0,X.jsx)(f,{size:`small`,type:a===`recurring`?`primary`:`default`,onClick:()=>l(e=>!e),children:o(`habit.action.teachAgain`)}),(0,X.jsx)(pe,{items:v,children:(0,X.jsx)(te,{icon:re,size:`small`})})]})]}),c&&(0,X.jsx)(d,{style:{paddingInlineStart:48},children:(0,X.jsx)(K,{autoFocus:!0,placeholder:o(a===`recurring`?`habit.teach.placeholderRecurring`:`habit.teach.placeholderCorrect`),onSubmit:p})})]})}),Q.displayName=`ExpertiseHabitRow`,$=(0,Y.memo)(({agentId:e,defaultStableOpen:t=!1,domainTitles:r,habits:i,onChanged:a,viewAllPath:o})=>{let{t:c}=n(`selfLearning`),[l,f]=(0,Y.useState)(``),[p,m]=(0,Y.useState)(t),g=(0,Y.useMemo)(()=>ye(i),[i]),_=(0,Y.useMemo)(()=>{let e={fresh:[],recurring:[],shaky:[],stable:[]},t=l.trim().toLowerCase();for(let n of i)t&&!n.title.toLowerCase().includes(t)&&!n.code.toLowerCase().includes(t)||e[j(n.recent)].push(n);return e},[i,l]),v=p||!!l.trim();return(0,X.jsxs)(d,{gap:10,children:[(0,X.jsxs)(d,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,wrap:`wrap`,children:[(0,X.jsxs)(d,{horizontal:!0,align:`baseline`,gap:8,children:[(0,X.jsx)(y,{weight:600,children:c(`habits.title`)}),(0,X.jsx)(y,{fontSize:12,type:`secondary`,children:c(`habits.summary`,g)})]}),(0,X.jsxs)(d,{horizontal:!0,align:`center`,gap:8,children:[o&&(0,X.jsx)(s,{className:H.viewAll,to:o,children:c(`habits.viewAll`,{count:i.length})}),(0,X.jsx)(ve,{placeholder:c(`habits.search`),style:{width:200},value:l,variant:`filled`,onChange:e=>f(e.target.value)})]})]}),(0,X.jsxs)(u,{padding:0,variant:`outlined`,children:[N.filter(e=>e!==`stable`).map(t=>{let n=_[t];return n.length===0?null:(0,X.jsxs)(Y.Fragment,{children:[(0,X.jsxs)(d,{horizontal:!0,align:`center`,className:H.groupHead,gap:8,children:[(0,X.jsxs)(y,{className:t===`recurring`?H.accent:void 0,fontSize:12.5,weight:600,children:[c(`tier.${t}`),` `,n.length]}),(0,X.jsx)(y,{fontSize:12,type:`secondary`,children:c(`tier.${t}Sub`)})]}),n.map(n=>(0,X.jsx)(Q,{agentId:e,domainTitle:r?.[n.domainId],habit:n,tier:t,onChanged:a},n.id))]},t)}),(0,X.jsxs)(d,{horizontal:!0,align:`center`,as:`button`,className:H.groupHead,gap:8,justify:`space-between`,style:{background:void 0,color:`inherit`,cursor:`pointer`,width:`100%`},onClick:()=>m(e=>!e),children:[(0,X.jsxs)(d,{horizontal:!0,align:`center`,gap:8,children:[(0,X.jsxs)(y,{fontSize:12.5,weight:600,children:[c(`tier.stable`),` `,_.stable.length]}),(0,X.jsx)(y,{fontSize:12,type:`secondary`,children:c(`tier.stableSub`)})]}),(0,X.jsx)(h,{icon:v?se:ae,size:14})]}),v&&_.stable.map(t=>(0,X.jsx)(Q,{agentId:e,domainTitle:r?.[t.domainId],habit:t,tier:`stable`,onChanged:a},t.id))]})]})}),$.displayName=`ExpertiseHabitList`}));export{U as a,q as i,Ce as n,H as o,K as r,$ as t};