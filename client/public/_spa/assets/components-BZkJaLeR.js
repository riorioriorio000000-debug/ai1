import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{Kt as i,Xn as a,Zn as o,at as s,it as c,qt as l}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Ac as u,Hl as d,Kh as ee,Wh as f,t as p,ug as te}from"../vendor/vendor-icons-vienkZi5.js";import{FD as m,ID as h,Sa as ne,Yl as re,Zl as ie,gF as g,hF as _,uF as v,xa as ae}from"./index-w64_zsxD.js";import{n as oe,t as se}from"./MaterialFileTypeIcon-CFvWQlmd.js";var y,b,x,S,C,w,T=e((()=>{m(),o(),oe(),s(),p(),ae(),y=t(n()),b=t(r()),x=new Set([`.apng`,`.avif`,`.bmp`,`.gif`,`.heic`,`.heif`,`.ico`,`.jpeg`,`.jpg`,`.png`,`.svg`,`.tif`,`.tiff`,`.webp`]),S={icon:h(`acss-18wzd2y`,[`.acss-18wzd2y{flex-shrink:0;margin-inline-end:4px;}`],`
    flex-shrink: 0;
    margin-inline-end: 4px;
  `),text:h(`acss-odaqrv`,[`.acss-odaqrv{padding-block:1px;color:var(--ant-color-text);}`],`
    padding-block: 1px;
    color: var(--ant-color-text);
  `)},C=e=>{if(!e)return{displayPath:``,isImage:!1,name:``};let{base:t,dir:n,ext:r}=ne.parse(e),i=ne.basename(n);return{displayPath:i?`${i}/${t}`:t,isImage:x.has(r.toLowerCase()),name:t}},w=(0,y.memo)(({filePath:e,isDirectory:t})=>{let{displayPath:n,isImage:r,name:i}=(0,y.useMemo)(()=>C(e),[e]);return e?(0,b.jsxs)(b.Fragment,{children:[i&&(r&&!t?(0,b.jsx)(a,{className:S.icon,icon:d,size:16}):(0,b.jsx)(se,{className:S.icon,fallbackUnknownType:!1,filename:i,size:16,type:t?`folder`:`file`,variant:`raw`})),n&&(0,b.jsx)(c,{className:S.text,ellipsis:{tooltipWhenOverflow:!0},children:n})]}):null}),w.displayName=`FilePathDisplay`})),E,D,O=e((()=>{E=t(n()),D=(0,E.memo)(({value:e,duration:t=500,formatter:n})=>{let[r,i]=(0,E.useState)(e),a=(0,E.useRef)(void 0),o=(0,E.useRef)(void 0),s=(0,E.useRef)(e);return(0,E.useEffect)(()=>{let n=s.current,r=e-n;if(r===0)return;let c=l=>{o.current||=l;let u=l-o.current,d=Math.min(u/t,1);i(n+r*(1-(1-d)**3)),d<1?a.current=requestAnimationFrame(c):(s.current=e,o.current=void 0)};return a.current=requestAnimationFrame(c),()=>{a.current&&cancelAnimationFrame(a.current)}},[e,t]),n?n(r):Math.round(r).toLocaleString()}),D.displayName=`AnimatedNumber`})),k,A,j,M,N,P,F,I,ce=e((()=>{m(),v(),k=t(n()),A=t(r()),j={kindAdded:h(`acss-16fv06w`,[`.acss-16fv06w{background:var(--ant-color-success);}`],`
    background: var(--ant-color-success);
  `),kindDeleted:h(`acss-iv5wg8`,[`.acss-iv5wg8{background:var(--ant-color-error);}`],`
    background: var(--ant-color-error);
  `),kindDot:h(`acss-1w4w89i`,[`.acss-1w4w89i{flex-shrink:0;width:8px;height:8px;border-radius:999px;}`],`
    flex-shrink: 0;
    width: 8px;
    height: 8px;
    border-radius: 999px;
  `),kindModified:h(`acss-omshx1`,[`.acss-omshx1{background:var(--ant-color-info);}`],`
    background: var(--ant-color-info);
  `),kindRenamed:h(`acss-tgdknd`,[`.acss-tgdknd{background:var(--ant-color-warning);}`],`
    background: var(--ant-color-warning);
  `),lineAdded:h(`acss-1agh9uj`,[`.acss-1agh9uj{color:var(--ant-color-success);}`],`
    color: var(--ant-color-success);
  `),lineDeleted:h(`acss-zknb5i`,[`.acss-zknb5i{color:var(--ant-color-error);}`],`
    color: var(--ant-color-error);
  `),lineStats:h(`acss-1j7hkoo`,[`.acss-1j7hkoo{display:inline-flex;flex-shrink:0;gap:6px;align-items:center;font-size:12px;}`],`
    display: inline-flex;
    flex-shrink: 0;
    gap: 6px;
    align-items: center;

    font-size: 12px;
  `)},M={added:j.kindAdded,deleted:j.kindDeleted,modified:j.kindModified,renamed:j.kindRenamed},N=(0,k.memo)(({className:e,kind:t})=>(0,A.jsx)(`span`,{className:g(j.kindDot,M[t],e)})),N.displayName=`FileChangeKindDot`,P=(0,k.memo)(({className:e,hideZeroDeltas:t,linesAdded:n=0,linesDeleted:r=0})=>{if(n===0&&r===0)return null;let i=!t||n>0,a=!t||r>0;return(0,A.jsxs)(`span`,{className:g(j.lineStats,e),children:[i&&(0,A.jsxs)(`span`,{className:j.lineAdded,children:[`+`,n]}),a&&(0,A.jsxs)(`span`,{className:j.lineDeleted,children:[`-`,r]})]})}),P.displayName=`FileChangeLineStats`,F=e=>e?e.replaceAll(`\\`,`/`).split(`/`).findLast(Boolean)||e:``,I=e=>{let t=F(e),n=t.lastIndexOf(`.`);if(!(n<=0||n===t.length-1))return t.slice(n+1).toLowerCase()}})),L,R,z,B,V=e((()=>{m(),l(),o(),s(),v(),p(),L=t(n()),R=t(r()),z={option:h(`acss-1e09yl9`,[`.acss-1e09yl9{cursor:pointer;padding-block:10px;padding-inline:12px;border-radius:8px;transition:background 0.12s ease;}`,`.acss-1e09yl9:hover{background:var(--ant-color-fill-quaternary);}`],`
    cursor: pointer;

    padding-block: 10px;
    padding-inline: 12px;
    border-radius: 8px;

    transition: background 0.12s ease;

    &:hover {
      background: var(--ant-color-fill-quaternary);
    }
  `),optionCheck:h(`acss-n9oa5b`,[`.acss-n9oa5b{flex-shrink:0;color:var(--ant-color-primary);}`],`
    flex-shrink: 0;
    color: var(--ant-color-primary);
  `),optionDescription:h(`acss-13xibor`,[`.acss-13xibor{font-size:12px;line-height:1.45;color:var(--ant-color-text-secondary);}`],`
    font-size: 12px;
    line-height: 1.45;
    color: var(--ant-color-text-secondary);
  `),optionIndex:h(`acss-6e0ltb`,[`.acss-6e0ltb{flex-shrink:0;box-sizing:border-box;width:22px;height:22px;border-radius:6px;font-family:var(--ant-font-family-code);font-size:12px;font-weight:600;line-height:22px;color:var(--ant-color-text-secondary);text-align:center;background:var(--ant-color-fill-tertiary);}`],`
    flex-shrink: 0;

    box-sizing: border-box;
    width: 22px;
    height: 22px;
    border-radius: 6px;

    font-family: var(--ant-font-family-code);
    font-size: 12px;
    font-weight: 600;
    line-height: 22px;
    color: var(--ant-color-text-secondary);
    text-align: center;

    background: var(--ant-color-fill-tertiary);
  `),optionHighlighted:h(`acss-xwxri7`,[`.acss-xwxri7{box-shadow:inset 0 0 0 1px var(--ant-color-border);}`],`
    box-shadow: inset 0 0 0 1px var(--ant-color-border);
  `),optionLabel:h(`acss-1av9vxy`,[`.acss-1av9vxy{font-weight:500;}`],`
    font-weight: 500;
  `),optionSelected:h(`acss-12ge9tm`,[`.acss-12ge9tm{background:var(--ant-color-fill-tertiary);}`,`.acss-12ge9tm:hover{background:var(--ant-color-fill-tertiary);}`],`
    background: var(--ant-color-fill-tertiary);

    &:hover {
      background: var(--ant-color-fill-tertiary);
    }
  `),recommendedBadge:h(`acss-1ui7i4g`,[`.acss-1ui7i4g{flex-shrink:0;padding-block:1px;padding-inline:8px;border-radius:999px;font-size:11px;line-height:18px;color:var(--ant-color-text-secondary);background:var(--ant-color-fill-secondary);}`],`
    flex-shrink: 0;

    padding-block: 1px;
    padding-inline: 8px;
    border-radius: 999px;

    font-size: 11px;
    line-height: 18px;
    color: var(--ant-color-text-secondary);

    background: var(--ant-color-fill-secondary);
  `)},B=(0,L.memo)(({index:e,label:t,description:n,highlighted:r,recommendedText:o,selected:s,disabled:l,onToggle:u})=>(0,R.jsxs)(i,{horizontal:!0,align:`center`,"aria-selected":s,gap:12,role:`option`,className:g(z.option,s&&z.optionSelected,r&&z.optionHighlighted),onClick:()=>{l||u()},children:[(0,R.jsx)(`span`,{className:z.optionIndex,children:e}),(0,R.jsxs)(i,{flex:1,gap:2,children:[(0,R.jsxs)(i,{horizontal:!0,align:`center`,gap:8,children:[(0,R.jsx)(c,{className:z.optionLabel,children:t}),o&&(0,R.jsx)(`span`,{className:z.recommendedBadge,children:o})]}),n&&(0,R.jsx)(`span`,{className:z.optionDescription,children:n})]}),s&&(0,R.jsx)(a,{className:z.optionCheck,icon:te,size:16})]})),B.displayName=`OptionCard`})),H,U,W,G,K,q,J,Y,X,Z,Q,$,le=e((()=>{m(),o(),v(),p(),H=t(n()),re(),U=t(r()),W=14,G=2,K=(W-G)/2,q=2*Math.PI*K,J={countChip:h(`acss-112tbtd`,[`.acss-112tbtd{flex-shrink:0;margin-inline-end:8px;padding-block:1px;padding-inline:8px;border-radius:999px;font-family:var(--ant-font-family-code);font-size:12px;color:var(--ant-color-text-secondary);background:var(--ant-color-fill-tertiary);}`],`
    flex-shrink: 0;

    margin-inline-end: 8px;
    padding-block: 1px;
    padding-inline: 8px;
    border-radius: 999px;

    font-family: var(--ant-font-family-code);
    font-size: 12px;
    color: var(--ant-color-text-secondary);

    background: var(--ant-color-fill-tertiary);
  `),header:h(`acss-11cri7g`,[`.acss-11cri7g{display:flex;gap:8px;align-items:center;padding-block:10px;padding-inline:12px;border-block-end:1px solid var(--ant-color-border-secondary);background:var(--ant-color-fill-quaternary);}`],`
    display: flex;
    gap: 8px;
    align-items: center;

    padding-block: 10px;
    padding-inline: 12px;
    border-block-end: 1px solid var(--ant-color-border-secondary);

    background: var(--ant-color-fill-quaternary);
  `),headerCount:h(`acss-1dlvox`,[`.acss-1dlvox{flex-shrink:0;padding-block:2px;padding-inline:8px;border-radius:999px;font-family:var(--ant-font-family-code);font-size:12px;color:var(--ant-color-text-secondary);background:var(--ant-color-fill-tertiary);}`],`
    flex-shrink: 0;

    padding-block: 2px;
    padding-inline: 8px;
    border-radius: 999px;

    font-family: var(--ant-font-family-code);
    font-size: 12px;
    color: var(--ant-color-text-secondary);

    background: var(--ant-color-fill-tertiary);
  `),headerDetail:h(`acss-pz44r4`,[`.acss-pz44r4{overflow:hidden;min-width:0;color:var(--ant-color-text);text-overflow:ellipsis;}`],`
    overflow: hidden;
    min-width: 0;
    color: var(--ant-color-text);
    text-overflow: ellipsis;
  `),headerLabel:h(`acss-6z8hyg`,[`.acss-6z8hyg{overflow:hidden;display:flex;flex:1;gap:0;align-items:center;min-width:0;color:var(--ant-color-text-secondary);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;
    display: flex;
    flex: 1;
    gap: 0;
    align-items: center;

    min-width: 0;

    color: var(--ant-color-text-secondary);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),ring:h(`acss-glpz7c`,[`.acss-glpz7c{transform:rotate(-90deg);flex-shrink:0;margin-inline-end:6px;}`],`
    transform: rotate(-90deg);
    flex-shrink: 0;
    margin-inline-end: 6px;
  `),ringProgress:h(`acss-nvgdih`,[`.acss-nvgdih{transition:stroke-dashoffset 240ms ease,stroke 240ms ease;}`],`
    transition:
      stroke-dashoffset 240ms ease,
      stroke 240ms ease;
  `),ringTrack:h(`acss-1kbqib0`,[`.acss-1kbqib0{stroke:var(--ant-color-fill-secondary);}`],`
    stroke: var(--ant-color-fill-secondary);
  `),summaryDetail:h(`acss-644054`,[`.acss-644054{color:var(--ant-color-text);}`],`
    color: var(--ant-color-text);
  `),summaryText:h(`acss-1mhjned`,[`.acss-1mhjned{overflow:hidden;min-width:0;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;
    min-width: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
  `)},Y={allDone:f,completedStep:f,idle:u,inProgress:ee},X=e=>{switch(e){case`inProgress`:return _.colorInfo;case`idle`:return _.colorTextSecondary;default:return _.colorSuccess}},Z=(0,H.memo)(({completed:e,total:t})=>{let n=t>0?e/t:0,r=t>0&&e===t?_.colorSuccess:_.colorInfo;return(0,U.jsxs)(`svg`,{className:J.ring,height:W,width:W,children:[(0,U.jsx)(`circle`,{className:J.ringTrack,cx:W/2,cy:W/2,fill:`none`,r:K,strokeWidth:G}),(0,U.jsx)(`circle`,{className:J.ringProgress,cx:W/2,cy:W/2,fill:`none`,r:K,stroke:r,strokeDasharray:q,strokeDashoffset:q*(1-n),strokeLinecap:`round`,strokeWidth:G})]})}),Z.displayName=`TodoProgressRing`,Q=(0,H.memo)(({label:e,shiny:t,summary:n})=>{let{completed:r,detail:i,state:a,total:o}=n;return(0,U.jsxs)(U.Fragment,{children:[o>0&&(0,U.jsx)(Z,{completed:r,total:o}),o>0&&a!==`allDone`&&(0,U.jsxs)(`span`,{className:J.countChip,children:[r,`/`,o]}),(0,U.jsxs)(`span`,{className:J.summaryText,children:[(0,U.jsx)(`span`,{className:g(t&&ie.shinyText),children:e}),i&&(0,U.jsxs)(U.Fragment,{children:[`: `,(0,U.jsx)(`span`,{className:J.summaryDetail,children:i})]})]})]})}),Q.displayName=`TodoInspectorSummary`,$=(0,H.memo)(({label:e,summary:t})=>{let{completed:n,detail:r,state:i,total:o}=t;return(0,U.jsxs)(`div`,{className:J.header,children:[(0,U.jsx)(a,{icon:Y[i],size:16,style:{color:X(i),flexShrink:0}}),(0,U.jsxs)(`div`,{className:J.headerLabel,children:[(0,U.jsx)(`span`,{children:e}),r&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`span`,{children:`: `}),(0,U.jsx)(`span`,{className:J.headerDetail,children:r})]})]}),(0,U.jsxs)(`span`,{className:J.headerCount,children:[n,`/`,o]})]})}),$.displayName=`TodoPanelHeader`})),ue=e((()=>{O(),ce(),T(),V(),le()}));export{B as a,P as c,ce as d,D as f,T as g,C as h,le as i,I as l,w as m,Q as n,V as o,O as p,$ as r,N as s,ue as t,F as u};