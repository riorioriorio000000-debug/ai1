import{n as e,o as t,t as n}from"./rolldown-runtime-CMxvf4Kt.js";import{N as r,j as i}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{C as a,E as o,T as s}from"../vendor/vendor-react-B9HSWrpN.js";import{Dt as c,Et as l,Ht as u,Kt as d,Mt as f,Nt as p,Ut as m,Xn as h,Zn as g,at as _,dt as ee,ft as te,it as v,l as ne,lt as y,n as re,qt as b,t as ie,u as ae}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Ac as oe,Ag as se,Ba as ce,Br as le,Ei as ue,Hn as de,Ho as fe,Il as pe,Jr as me,Kh as he,Ko as ge,Kr as _e,Ku as ve,Oc as ye,Pi as be,Qo as xe,Rt as Se,Wh as Ce,Xc as we,Xr as Te,bm as Ee,bp as De,c as Oe,cm as ke,cs as Ae,fd as je,gu as Me,ii as Ne,ir as Pe,od as Fe,oh as Ie,t as x,ua as Le,ug as Re,wl as ze}from"../vendor/vendor-icons-vienkZi5.js";import{t as Be}from"./Highlighter-BL3jikMb.js";import{Ah as Ve,Dn as He,EF as Ue,En as We,FD as S,Fu as Ge,ID as C,Ih as Ke,Iu as qe,Jl as Je,Ph as w,Rh as Ye,Sa as Xe,Xl as T,Yl as E,Zl as D,gF as O,hF as k,uF as A,xa as Ze}from"./index-w64_zsxD.js";import{l as Qe,n as $e,t as et,u as tt}from"./Image-DUXUuCIH.js";import{n as nt,t as rt}from"./Markdown-DWQvr47S.js";import{t as it}from"./_virtual_lobe-ui-named__Tooltip-DNompU8a.js";import{C as at,D as j,S as ot,T as M,_ as st,f as ct,g as lt,h as ut,l as dt,m as ft,o as pt,p as mt,s as ht,u as gt,v as _t,x as vt,y as yt}from"./selectors-D4u9uv4T.js";import{n as bt,t as xt}from"./Tag-C95BKTI7.js";import{C as St,D as Ct,E as wt,O as Tt,S as Et,T as Dt,k as Ot}from"./streamings-WEzY2LHP.js";import{$ as kt,Fn as At,Mn as jt,a as Mt,et as Nt,n as Pt,zn as Ft}from"./chat-D3ilvURJ.js";import{a as It,f as Lt,g as Rt,h as zt,m as Bt,n as Vt,r as Ht,t as Ut}from"./components-BZkJaLeR.js";import{t as Wt}from"./_virtual_lobe-ui-named__Highlighter-B839w3AL.js";import{n as Gt,t as Kt}from"./GroupBotIcon-CqAkFfP7.js";import{n as qt,t as Jt}from"./TextArea-D_Rfq5JU.js";import{n as Yt,t as Xt}from"./Tabs-DH_wa3T6.js";import{a as Zt,o as Qt}from"./interventions-CBK0VbwM.js";import{D as $t,O as en,i as tn,r as nn}from"./store-DwGYYuCr.js";import{n as rn,r as an}from"./time-evFCyVbj.js";var on,sn,cn,ln,un=e((()=>{Ot(),wt(),on=t(o(),1),sn=t(s(),1),A(),Et(),Ct(),cn=(e,t)=>{let n=e.split(`
`),r=t.split(`
`),i=new Set(n),a=new Set(r),o=0,s=0;for(let e of n)a.has(e)||o++;for(let e of r)i.has(e)||s++;return{additions:s,deletions:o}},ln=(0,on.memo)(({oldContent:e,newContent:t,language:n,fileName:r,viewMode:i=`split`,showHeader:a=!0,defaultExpand:o=!0,fullFeatured:s=!0,variant:c=`filled`,className:l,classNames:u,styles:d,actionsRender:f,diffOptions:p,...m})=>{let{isDarkMode:h}=Ue(),g=(0,on.useMemo)(()=>r||n||`diff`,[r,n]),{additions:_,deletions:ee}=(0,on.useMemo)(()=>cn(e,t),[e,t]),te=(0,on.useMemo)(()=>f?f({newContent:t,oldContent:e,originalNode:null}):null,[f,e,t]),v=(0,on.useMemo)(()=>({contents:e,lang:n,name:r||`file`}),[e,n,r]);return(0,sn.jsx)(Tt,{actions:te,additions:_,body:(0,sn.jsx)(St,{newFile:(0,on.useMemo)(()=>({contents:t,lang:n,name:r||`file`}),[t,n,r]),oldFile:v,options:(0,on.useMemo)(()=>Dt({diffOptions:p,isDarkMode:h,viewMode:i}),[h,i,p])}),className:l,classNames:u,dataCodeType:`code-diff`,defaultExpand:o,deletions:ee,displayName:g,fileName:r,fullFeatured:s,showHeader:a,styles:d,variant:c,...m})}),ln.displayName=`CodeDiff`})),dn=e((()=>{un()})),fn,N,pn,mn,hn,gn=e((()=>{S(),g(),_(),A(),x(),fn=t(o()),i(),Rt(),E(),N=t(s()),pn={separator:C(`acss-1ycjamz`,[`.acss-1ycjamz{margin-inline:2px;color:var(--ant-color-text-quaternary);}`],`
    margin-inline: 2px;
    color: var(--ant-color-text-quaternary);
  `)},mn=(0,fn.memo)(({args:e,partialArgs:t,isArgumentsStreaming:n,pluginState:i,isLoading:a,translationKey:o})=>{let{t:s}=r(`plugin`),c=e?.file_path||e?.path||t?.file_path||t?.path||``;if(n)return c?(0,N.jsxs)(`div`,{className:T.root,children:[(0,N.jsxs)(`span`,{className:D.shinyText,style:{marginInlineEnd:6},children:[s(o),`:`]}),(0,N.jsx)(Bt,{filePath:c})]}):(0,N.jsx)(`div`,{className:T.root,children:(0,N.jsx)(`span`,{className:D.shinyText,children:s(o)})});let l=i?.linesAdded??0,u=i?.linesDeleted??0,d=[];return l>0&&d.push((0,N.jsxs)(v,{code:!0,as:`span`,color:k.colorSuccess,fontSize:12,children:[(0,N.jsx)(h,{icon:Le,size:12}),l]},`added`)),u>0&&d.push((0,N.jsxs)(v,{code:!0,as:`span`,color:k.colorError,fontSize:12,children:[(0,N.jsx)(h,{icon:Ae,size:12}),u]},`deleted`)),(0,N.jsxs)(`div`,{className:T.root,children:[(0,N.jsxs)(`span`,{className:O(a&&D.shinyText),style:{marginInlineEnd:6},children:[s(o),`:`]}),(0,N.jsx)(Bt,{filePath:c}),!a&&d.length>0&&(0,N.jsxs)(N.Fragment,{children:[` `,d.map((e,t)=>(0,N.jsxs)(`span`,{children:[t>0&&(0,N.jsx)(`span`,{className:pn.separator,children:` / `}),e]},t))]})]})}),mn.displayName=`EditLocalFileInspector`,hn=e=>{let t=(0,fn.memo)(t=>(0,N.jsx)(mn,{...t,translationKey:e}));return t.displayName=`EditLocalFileInspector`,t}})),_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En=e((()=>{_n=`add_comment.check_pull_request_mergeability.close_issue.close_pull_request.compare_commits.create_branch.create_issue.create_pull_request.delete_branch.fork_repository.get_branch.get_commit.get_file.get_issue.get_pull_request.get_repository.list_branches.list_commits.list_issues.list_pull_requests.list_repositories.merge_pull_request.reopen_issue.reopen_pull_request.request_review.search_code.search_issues.search_pull_requests.search_repositories.update_issue.update_pull_request`.split(`.`),vn={branch:`branch`,branches:`branches`,code:`code`,commit:`commit`,commits:`commits`,file:`file`,issue:`issue`,issues:`issues`,pull_request:`pull request`,pull_requests:`pull requests`,repositories:`repositories`,repository:`repository`,review:`review`},yn=e=>e.toLowerCase().split(/[^a-z0-9]+/u).includes(`github`),bn=e=>e.replaceAll(/([a-z0-9])([A-Z])/g,`$1_$2`).replaceAll(/[-\s]+/g,`_`).toLowerCase(),xn=e=>{let t=bn(e.trim()),n=!0;for(;n;)for(n=!1,t.startsWith(`server_github_`)&&(t=t.slice(14),n=!0),t.startsWith(`github_`)&&(t=t.slice(7),n=!0);t.startsWith(`_`);)t=t.slice(1),n=!0;return t},Sn=e=>{let t=e.split(`__`);return xn(t.length>=3&&t[0]===`mcp`&&t.slice(1,-1).some(yn)&&t.at(-1)||e)},Cn=e=>{let t=Sn(e),n=t.indexOf(`_`);if(n<=0)return{noun:t,verb:`other`};let r=t.slice(0,n),i=t.slice(n+1),a=vn[i]??i.replaceAll(`_`,` `);switch(r){case`add`:case`check`:case`close`:case`compare`:case`create`:case`delete`:case`fork`:case`get`:case`list`:case`merge`:case`reopen`:case`request`:case`search`:case`update`:return{noun:a,verb:r};default:return{noun:t.replaceAll(`_`,` `),verb:`other`}}},wn=e=>e&&e.charAt(0).toUpperCase()+e.slice(1),Tn=e=>{let{verb:t,noun:n}=e;return t===`other`?wn(n):`${wn(t)} ${n}`}})),Dn,P,F,On,kn,An,I,jn,Mn,Nn,Pn,Fn,In,Ln,Rn=e((()=>{S(),A(),x(),Dn=t(o()),E(),En(),P=t(s()),F={branchBadge:C(`acss-odl4yh`,[`.acss-odl4yh{display:inline-flex;flex-shrink:0;gap:4px;align-items:center;min-width:0;margin-inline-start:6px;padding-block:2px;padding-inline:8px;border-radius:999px;font-family:var(--ant-font-family-code);font-size:12px;color:var(--ant-color-text);background:var(--ant-color-fill-quaternary);}`],`
    display: inline-flex;
    flex-shrink: 0;
    gap: 4px;
    align-items: center;

    min-width: 0;
    margin-inline-start: 6px;
    padding-block: 2px;
    padding-inline: 8px;
    border-radius: 999px;

    font-family: var(--ant-font-family-code);
    font-size: 12px;
    color: var(--ant-color-text);

    background: var(--ant-color-fill-quaternary);
  `),branchBadgeText:C(`acss-1vaq99a`,[`.acss-1vaq99a{overflow:hidden;max-width:220px;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;
    max-width: 220px;
    text-overflow: ellipsis;
    white-space: nowrap;
  `),chip:C(`acss-11vaiu4`,[`.acss-11vaiu4{overflow:hidden;display:inline-flex;flex-shrink:1;align-items:stretch;min-width:0;margin-inline-start:6px;border-radius:999px;font-size:12px;line-height:18px;background:var(--ant-color-fill-tertiary);}`],`
    overflow: hidden;
    display: inline-flex;
    flex-shrink: 1;
    align-items: stretch;

    min-width: 0;
    margin-inline-start: 6px;
    border-radius: 999px;

    font-size: 12px;
    line-height: 18px;

    background: var(--ant-color-fill-tertiary);
  `),chipAction:C(`acss-1d9xm3i`,[`.acss-1d9xm3i{flex-shrink:0;padding-block:2px;padding-inline:10px;color:var(--ant-color-text);}`],`
    flex-shrink: 0;
    padding-block: 2px;
    padding-inline: 10px;
    color: var(--ant-color-text);
  `),chipDivider:C(`acss-141p99c`,[`.acss-141p99c{flex-shrink:0;align-self:stretch;width:1px;background:var(--ant-color-border-secondary);}`],`
    flex-shrink: 0;
    align-self: stretch;
    width: 1px;
    background: var(--ant-color-border-secondary);
  `),chipIcon:C(`acss-mohja4`,[`.acss-mohja4{flex-shrink:0;color:var(--ant-color-text-description);}`],`
    flex-shrink: 0;
    color: var(--ant-color-text-description);
  `),chipKey:C(`acss-1axbjpc`,[`.acss-1axbjpc{color:var(--ant-color-text-description);}`],`
    color: var(--ant-color-text-description);
  `),chipValue:C(`acss-xwuvjm`,[`.acss-xwuvjm{overflow:hidden;display:inline-flex;flex-shrink:1;gap:4px;align-items:center;min-width:0;padding-block:2px;padding-inline:10px;font-family:var(--ant-font-family-code);color:var(--ant-color-text);}`],`
    overflow: hidden;
    display: inline-flex;
    flex-shrink: 1;
    gap: 4px;
    align-items: center;

    min-width: 0;
    padding-block: 2px;
    padding-inline: 10px;

    font-family: var(--ant-font-family-code);
    color: var(--ant-color-text);
  `),chipValueText:C(`acss-1mhjned`,[`.acss-1mhjned{overflow:hidden;min-width:0;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;
    min-width: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
  `),icon:C(`acss-1nx4fkb`,[`.acss-1nx4fkb{flex-shrink:0;margin-inline-end:6px;color:var(--ant-color-text-description);}`],`
    flex-shrink: 0;
    margin-inline-end: 6px;
    color: var(--ant-color-text-description);
  `),productPrefix:C(`acss-1fiaq7d`,[`.acss-1fiaq7d{flex-shrink:0;margin-inline-end:2px;font-size:13px;font-weight:500;color:var(--ant-color-text-secondary);}`],`
    flex-shrink: 0;

    margin-inline-end: 2px;

    font-size: 13px;
    font-weight: 500;
    color: var(--ant-color-text-secondary);
  `)},On=(0,Dn.memo)(({size:e=14})=>(0,P.jsx)(`svg`,{"aria-hidden":`true`,className:F.icon,height:e,viewBox:`0 0 98 96`,width:e,xmlns:`http://www.w3.org/2000/svg`,children:(0,P.jsx)(`path`,{d:`M48.9 0C21.9 0 0 22 0 49.1c0 21.7 14 40.1 33.5 46.6 2.4.5 3.3-1.1 3.3-2.4 0-1.2-.1-5.2-.1-9.4-13.6 3-16.5-5.8-16.5-5.8-2.2-5.7-5.4-7.2-5.4-7.2-4.5-3.1.3-3 .3-3 4.9.3 7.5 5.1 7.5 5.1 4.4 7.5 11.5 5.3 14.3 4.1.4-3.2 1.7-5.3 3.1-6.6-10.9-1.2-22.3-5.5-22.3-24.3 0-5.4 1.9-9.8 5.1-13.2-.5-1.2-2.2-6.3.5-13 0 0 4.1-1.3 13.5 5 3.9-1.1 8.1-1.6 12.2-1.6s8.3.5 12.2 1.6c9.4-6.4 13.5-5 13.5-5 2.7 6.7 1 11.8.5 13 3.2 3.4 5.1 7.8 5.1 13.2 0 18.9-11.5 23.1-22.4 24.3 1.8 1.6 3.3 4.6 3.3 9.3 0 6.7-.1 12.1-.1 13.8 0 1.3.9 2.9 3.4 2.4C84 89.2 98 70.8 98 49.1 97.9 22 75.9 0 48.9 0Z`,fill:`currentColor`})})),On.displayName=`GitHubMark`,kn=(e,t=80)=>e.length>t?`${e.slice(0,t-1)}...`:e,An=e=>{if(typeof e==`string`&&e.trim())return e.trim();if(typeof e==`number`)return String(e);if(typeof e==`object`&&e&&!Array.isArray(e)){let t=e;for(let e of[`full_name`,`name`,`login`,`id`]){let n=An(t[e]);if(n)return n}}},I=(e,t)=>An(e?.[t]),jn=e=>{if(!e)return;let t=I(e,`repository_full_name`)||I(e,`full_name`)||I(e,`repository`)||I(e,`repo`);if(t)return t;let n=I(e,`owner`),r=I(e,`name`);return n&&r?`${n}/${r}`:void 0},Mn=e=>I(e,`pull_number`)||I(e,`pullNumber`)||I(e,`issue_number`)||I(e,`issueNumber`)||I(e,`number`),Nn=e=>{if(!e)return;let t=I(e,`head`)||I(e,`head_ref`),n=I(e,`base`)||I(e,`base_ref`);return t&&n?`${t} -> ${n}`:t||n||I(e,`branch`)||I(e,`ref`)},Pn=e=>{if(!e)return null;let t=jn(e);if(t)return{key:`repo`,value:kn(t,72)};let n=Mn(e);if(n)return{iconType:`number`,value:`#${n}`};let r=I(e,`title`)||I(e,`subject`);if(r)return{value:kn(r,72)};let i=I(e,`query`)||I(e,`q`);if(i)return{key:`query`,value:kn(i,72)};let a=I(e,`path`)||I(e,`file_path`);if(a)return{key:`path`,value:kn(a,72)};for(let[t,n]of Object.entries(e))if(typeof n==`string`&&n.length>0)return{key:t,value:kn(n,72)};return null},Fn=e=>({branch:Nn(e),primary:Pn(e)}),In=(0,Dn.memo)(({apiName:e,args:t,partialArgs:n,isArgumentsStreaming:r,isLoading:i})=>{let a=t??n,o=Tn(Cn(e)),{branch:s,primary:c}=Fn(a);return(0,P.jsxs)(`div`,{className:T.root,children:[(0,P.jsx)(On,{}),(0,P.jsx)(`span`,{className:O(F.productPrefix,(r||i)&&D.shinyText),children:`GitHub`}),(0,P.jsxs)(`span`,{className:F.chip,children:[(0,P.jsx)(`span`,{className:F.chipAction,children:o}),c&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`span`,{className:F.chipDivider}),(0,P.jsxs)(`span`,{className:F.chipValue,children:[c.iconType===`number`?(0,P.jsx)(Me,{className:F.chipIcon,size:12}):c.key&&(0,P.jsxs)(`span`,{className:F.chipKey,children:[c.key,`:`]}),(0,P.jsx)(`span`,{className:F.chipValueText,children:c.value})]})]})]}),s&&(0,P.jsxs)(`span`,{className:F.branchBadge,title:s,children:[(0,P.jsx)(je,{className:F.chipIcon,size:12}),(0,P.jsx)(`span`,{className:F.branchBadgeText,children:s})]})]})}),In.displayName=`GitHubInspector`,Ln=In})),zn=e((()=>{Rn(),En()})),Bn,Vn,Hn,Un,Wn=e((()=>{S(),A(),x(),Bn=t(o()),i(),E(),Vn=t(s()),Hn={baseline:C(`acss-vp6gf7`,[`.acss-vp6gf7{align-items:baseline;}`],`
    align-items: baseline;
  `),statusIcon:C(`acss-152muqt`,[`.acss-152muqt{align-self:center;margin-inline-start:4px;}`],`
    align-self: center;
    margin-inline-start: 4px;
  `),tag:C(`acss-1x77xuz`,[`.acss-1x77xuz{margin-inline-start:6px;padding-block:1px;padding-inline:6px;border-radius:4px;font-family:var(--ant-font-family-code);font-size:12px;color:var(--ant-color-text);background:var(--ant-color-fill-tertiary);}`],`
    margin-inline-start: 6px;
    padding-block: 1px;
    padding-inline: 6px;
    border-radius: 4px;

    font-family: var(--ant-font-family-code);
    font-size: 12px;
    color: var(--ant-color-text);

    background: var(--ant-color-fill-tertiary);
  `)},Un=e=>{let t=(0,Bn.memo)(({args:t,partialArgs:n,isArgumentsStreaming:i,pluginState:a,isLoading:o})=>{let{t:s}=r(`plugin`),c=t?.pattern||n?.pattern||``;if(i)return c?(0,Vn.jsxs)(`div`,{className:O(T.root,Hn.baseline),children:[(0,Vn.jsxs)(`span`,{className:D.shinyText,children:[s(e),`:`]}),(0,Vn.jsx)(`span`,{className:Hn.tag,children:c})]}):(0,Vn.jsx)(`div`,{className:T.root,children:(0,Vn.jsx)(`span`,{className:D.shinyText,children:s(e)})});let l=(a?.totalCount??0)>0;return(0,Vn.jsxs)(`div`,{className:O(T.root,Hn.baseline),children:[(0,Vn.jsxs)(`span`,{className:O(o&&D.shinyText),children:[s(e),`:`]}),c&&(0,Vn.jsx)(`span`,{className:Hn.tag,children:c}),o?null:a?l?(0,Vn.jsx)(Re,{className:Hn.statusIcon,color:k.colorSuccess,size:14}):(0,Vn.jsx)(Oe,{className:Hn.statusIcon,color:k.colorError,size:14}):null]})});return t.displayName=`GlobLocalFilesInspector`,t}})),Gn,L,Kn,qn,Jn,Yn,Xn=e((()=>{S(),_(),A(),Gn=t(o()),i(),E(),L=t(s()),Kn={baseline:C(`acss-vp6gf7`,[`.acss-vp6gf7{align-items:baseline;}`],`
    align-items: baseline;
  `),separator:C(`acss-1ycjamz`,[`.acss-1ycjamz{margin-inline:2px;color:var(--ant-color-text-quaternary);}`],`
    margin-inline: 2px;
    color: var(--ant-color-text-quaternary);
  `),tag:C(`acss-1wu3z84`,[`.acss-1wu3z84{padding-block:1px;padding-inline:6px;border-radius:4px;font-family:var(--ant-font-family-code);font-size:12px;color:var(--ant-color-text);background:var(--ant-color-fill-tertiary);}`],`
    padding-block: 1px;
    padding-inline: 6px;
    border-radius: 4px;

    font-family: var(--ant-font-family-code);
    font-size: 12px;
    color: var(--ant-color-text);

    background: var(--ant-color-fill-tertiary);
  `),tagsList:C(`acss-1wsxn92`,[`.acss-1wsxn92{display:inline-flex;flex-shrink:1;gap:4px;align-items:center;min-width:0;margin-inline-start:6px;white-space:nowrap;}`],`
    display: inline-flex;
    flex-shrink: 1;
    gap: 4px;
    align-items: center;

    min-width: 0;
    margin-inline-start: 6px;

    white-space: nowrap;
  `)},qn=e=>e.split(`|`).map(e=>e.trim()).filter(Boolean),Jn=(0,Gn.memo)(({pattern:e})=>{let t=qn(e);return t.length===0?null:(0,L.jsx)(`span`,{className:Kn.tagsList,children:t.map((e,t)=>(0,L.jsxs)(Gn.Fragment,{children:[t>0&&(0,L.jsx)(`span`,{className:Kn.separator,children:`|`}),(0,L.jsx)(`span`,{className:Kn.tag,children:e})]},`${t}-${e}`))})}),Jn.displayName=`GrepPatternTags`,Yn=({translationKey:e,noResultsKey:t})=>{let n=(0,Gn.memo)(({args:n,partialArgs:i,isArgumentsStreaming:a,pluginState:o,isLoading:s})=>{let{t:c}=r(`plugin`),l=n?.pattern||i?.pattern||``;if(a)return l?(0,L.jsxs)(`div`,{className:O(T.root,Kn.baseline),children:[(0,L.jsxs)(`span`,{className:D.shinyText,children:[c(e),`:`]}),(0,L.jsx)(Jn,{pattern:l})]}):(0,L.jsx)(`div`,{className:T.root,children:(0,L.jsx)(`span`,{className:D.shinyText,children:c(e)})});let u=o?.totalMatches??0,d=u>0;return(0,L.jsxs)(`div`,{className:O(T.root,Kn.baseline),children:[(0,L.jsxs)(`span`,{className:O(s&&D.shinyText),children:[c(e),`:`]}),l&&(0,L.jsx)(Jn,{pattern:l}),!s&&o&&(d?(0,L.jsxs)(`span`,{style:{marginInlineStart:4},children:[`(`,u,`)`]}):(0,L.jsxs)(v,{as:`span`,color:k.colorTextDescription,fontSize:12,style:{marginInlineStart:4},children:[`(`,c(t),`)`]}))]})});return n.displayName=`GrepContentInspector`,n}})),Zn,R,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr=e((()=>{S(),A(),x(),Zn=t(o()),E(),mt(),R=t(s()),Qn={chip:C(`acss-11vaiu4`,[`.acss-11vaiu4{overflow:hidden;display:inline-flex;flex-shrink:1;align-items:stretch;min-width:0;margin-inline-start:6px;border-radius:999px;font-size:12px;line-height:18px;background:var(--ant-color-fill-tertiary);}`],`
    overflow: hidden;
    display: inline-flex;
    flex-shrink: 1;
    align-items: stretch;

    min-width: 0;
    margin-inline-start: 6px;
    border-radius: 999px;

    font-size: 12px;
    line-height: 18px;

    background: var(--ant-color-fill-tertiary);
  `),chipAction:C(`acss-1d9xm3i`,[`.acss-1d9xm3i{flex-shrink:0;padding-block:2px;padding-inline:10px;color:var(--ant-color-text);}`],`
    flex-shrink: 0;
    padding-block: 2px;
    padding-inline: 10px;
    color: var(--ant-color-text);
  `),chipDivider:C(`acss-141p99c`,[`.acss-141p99c{flex-shrink:0;align-self:stretch;width:1px;background:var(--ant-color-border-secondary);}`],`
    flex-shrink: 0;
    align-self: stretch;
    width: 1px;
    background: var(--ant-color-border-secondary);
  `),chipIcon:C(`acss-mohja4`,[`.acss-mohja4{flex-shrink:0;color:var(--ant-color-text-description);}`],`
    flex-shrink: 0;
    color: var(--ant-color-text-description);
  `),chipKey:C(`acss-1axbjpc`,[`.acss-1axbjpc{color:var(--ant-color-text-description);}`],`
    color: var(--ant-color-text-description);
  `),chipValue:C(`acss-xwuvjm`,[`.acss-xwuvjm{overflow:hidden;display:inline-flex;flex-shrink:1;gap:4px;align-items:center;min-width:0;padding-block:2px;padding-inline:10px;font-family:var(--ant-font-family-code);color:var(--ant-color-text);}`],`
    overflow: hidden;
    display: inline-flex;
    flex-shrink: 1;
    gap: 4px;
    align-items: center;

    min-width: 0;
    padding-block: 2px;
    padding-inline: 10px;

    font-family: var(--ant-font-family-code);
    color: var(--ant-color-text);
  `),chipValueText:C(`acss-1mhjned`,[`.acss-1mhjned{overflow:hidden;min-width:0;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;
    min-width: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
  `),icon:C(`acss-1nx4fkb`,[`.acss-1nx4fkb{flex-shrink:0;margin-inline-end:6px;color:var(--ant-color-text-description);}`],`
    flex-shrink: 0;
    margin-inline-end: 6px;
    color: var(--ant-color-text-description);
  `),parentBadge:C(`acss-1x2571l`,[`.acss-1x2571l{display:inline-flex;flex-shrink:0;gap:4px;align-items:center;margin-inline-start:6px;padding-block:2px;padding-inline:8px;border-radius:999px;font-family:var(--ant-font-family-code);font-size:12px;color:var(--ant-color-text);background:var(--ant-color-fill-quaternary);}`],`
    display: inline-flex;
    flex-shrink: 0;
    gap: 4px;
    align-items: center;

    margin-inline-start: 6px;
    padding-block: 2px;
    padding-inline: 8px;
    border-radius: 999px;

    font-family: var(--ant-font-family-code);
    font-size: 12px;
    color: var(--ant-color-text);

    background: var(--ant-color-fill-quaternary);
  `),parentBadgeIcon:C(`acss-mohja4`,[`.acss-mohja4{flex-shrink:0;color:var(--ant-color-text-description);}`],`
    flex-shrink: 0;
    color: var(--ant-color-text-description);
  `),productPrefix:C(`acss-1fiaq7d`,[`.acss-1fiaq7d{flex-shrink:0;margin-inline-end:2px;font-size:13px;font-weight:500;color:var(--ant-color-text-secondary);}`],`
    flex-shrink: 0;

    margin-inline-end: 2px;

    font-size: 13px;
    font-weight: 500;
    color: var(--ant-color-text-secondary);
  `)},$n=(0,Zn.memo)(({size:e=14})=>(0,R.jsx)(`svg`,{"aria-hidden":`true`,className:Qn.icon,height:e,viewBox:`0 0 100 100`,width:e,xmlns:`http://www.w3.org/2000/svg`,children:(0,R.jsx)(`path`,{d:`M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857l36.5217 36.5208c.6889.6892.0915 1.8191-.857 1.5962C20.0696 93.4248 6.4263 79.7822 1.22541 61.5228ZM.00189 46.8083c-.034026.4081.115306.8067.405562 1.0969l51.683 51.683c.2903.2903.6888.4396 1.0969.4056 2.0035-.16708 3.9669-.49328 5.8741-.96868.7361-.18352.9961-1.0903.4607-1.6256L2.5907 40.4732c-.5353-.5354-1.4421-.2754-1.6256.4607-.475415 1.9072-.801574 3.8706-.968613 5.8744ZM4.21462 29.7355c-.16002.3549-.08227.7719.19288 1.047L69.2174 95.5901c.275.2752.6921.353 1.047.193 1.4913-.6716 2.9332-1.43 4.3197-2.275.5025-.3061.5856-1.0023.1674-1.4205L8.31112 25.279c-.41817-.4181-1.11435-.3349-1.42044.1675-.84572 1.3873-1.60473 2.8284-2.27606 4.319ZM12.6963 18.6088c-.3683-.3684-.3923-.9577-.0469-1.3489C21.7846 6.9544 35.1342 0 50 0c27.6142 0 50 22.3858 50 50 0 14.8669-6.9544 28.2155-17.2598 37.3499-.3912.3461-.9805.3214-1.349-.0469L12.6963 18.6088Z`,fill:`currentColor`})})),$n.displayName=`LinearLogomark`,er=(e,t)=>{let{verb:n,noun:r}=e;switch(n){case`save`:return`${typeof t?.id==`string`&&t.id.length>0?`Update`:`Create`} ${r}`;case`extract`:return`Extract images`;case`prepare`:return`Prepare attachment upload`;case`search`:return`Search docs`;case`other`:return ct(r);default:return`${ct(n)} ${r}`}},tr=(e,t=80)=>e.length>t?`${e.slice(0,t-1)}…`:e,nr=(e,t)=>{let n=e?.[t];if(typeof n==`string`&&n.length>0)return n;if(typeof n==`number`)return String(n)},rr={0:`None`,1:`Urgent`,2:`High`,3:`Medium`,4:`Low`},ir=(e,t)=>{let{verb:n}=e;if(n===`search`){let e=nr(t,`query`);return e?{value:tr(e,60)}:null}if(n===`get`||n===`delete`){let e=nr(t,`id`);if(e)return{key:`id`,value:e}}if(n===`save`||n===`create`){let e=nr(t,`id`);if(e)return{key:`id`,value:e};let n=nr(t,`title`)??nr(t,`name`)??nr(t,`body`);if(n)return{value:tr(n,60)}}if(n===`list`){let e=nr(t,`query`);if(e)return{key:`query`,value:tr(e,60)};for(let e of[`team`,`project`,`assignee`,`state`,`cycle`,`parentId`,`label`]){let n=nr(t,e);if(n)return e===`parentId`?{iconType:`parent`,value:n}:{key:e,value:tr(n,40)}}if(typeof t.priority==`number`)return{key:`priority`,value:rr[t.priority]??String(t.priority)}}for(let[e,n]of Object.entries(t))if(typeof n==`string`&&n.length>0)return{key:e,value:tr(n,60)};return null},ar=(e,t)=>{if(!t)return{primary:null};let n=ir(e,t),r=nr(t,`parentId`);return{parentId:r&&n?.value!==r?r:void 0,primary:n}},or=(0,Zn.memo)(({apiName:e,args:t,partialArgs:n,isArgumentsStreaming:r,isLoading:i})=>{let a=t??n,o=ut(e),s=er(o,a),{primary:c,parentId:l}=ar(o,a);return(0,R.jsxs)(`div`,{className:T.root,children:[(0,R.jsx)($n,{}),(0,R.jsx)(`span`,{className:O(Qn.productPrefix,(r||i)&&D.shinyText),children:`Linear`}),(0,R.jsxs)(`span`,{className:Qn.chip,children:[(0,R.jsx)(`span`,{className:Qn.chipAction,children:s}),c&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`span`,{className:Qn.chipDivider}),(0,R.jsxs)(`span`,{className:Qn.chipValue,children:[c.iconType===`parent`?(0,R.jsx)(ke,{className:Qn.chipIcon,size:12}):c.key&&(0,R.jsxs)(`span`,{className:Qn.chipKey,children:[c.key,`:`]}),(0,R.jsx)(`span`,{className:Qn.chipValueText,children:c.value})]})]})]}),l&&(0,R.jsxs)(`span`,{className:Qn.parentBadge,title:`parent: ${l}`,children:[(0,R.jsx)(ke,{className:Qn.parentBadgeIcon,size:12}),(0,R.jsx)(`span`,{children:l})]})]})}),or.displayName=`LinearInspector`,sr=or})),lr=e((()=>{cr(),mt()})),ur,dr,fr,pr=e((()=>{A(),ur=t(o()),i(),Rt(),E(),dr=t(s()),fr=e=>{let t=(0,ur.memo)(({args:t,partialArgs:n,isArgumentsStreaming:i,pluginState:a,isLoading:o})=>{let{t:s}=r(`plugin`),c=t?.path||t?.directoryPath||n?.path||``,l=a?.totalCount??a?.files?.length??0;return i?c?(0,dr.jsxs)(`div`,{className:T.root,children:[(0,dr.jsxs)(`span`,{className:D.shinyText,style:{marginInlineEnd:6},children:[s(e),`:`]}),(0,dr.jsx)(Bt,{isDirectory:!0,filePath:c})]}):(0,dr.jsx)(`div`,{className:T.root,children:(0,dr.jsx)(`span`,{className:D.shinyText,children:s(e)})}):(0,dr.jsxs)(`div`,{className:T.root,children:[(0,dr.jsxs)(`span`,{className:O(o&&D.shinyText),style:{marginInlineEnd:6},children:[s(e),`:`]}),(0,dr.jsx)(Bt,{isDirectory:!0,filePath:c}),!o&&l>0&&(0,dr.jsxs)(`span`,{style:{marginInlineStart:4},children:[`(`,l,`)`]})]})});return t.displayName=`ListLocalFilesInspector`,t}})),mr,hr,gr,_r=e((()=>{g(),_(),A(),x(),mr=t(o()),i(),E(),hr=t(s()),gr=e=>{let t=(0,mr.memo)(({args:t,partialArgs:n,isArgumentsStreaming:i,pluginState:a,isLoading:o})=>{let{t:s}=r(`plugin`),c=t||n||{},l=c.operations?.length??c.items?.length??0,u=a?.totalCount??l,d=a?.successCount,f=d!==void 0&&u>0&&d===u,p=i||o;return(0,hr.jsxs)(`div`,{className:T.root,children:[(0,hr.jsx)(`span`,{className:O(p&&D.shinyText),style:{marginInlineEnd:6},children:s(e)}),u>0&&(0,hr.jsx)(v,{code:!0,as:`span`,fontSize:12,children:d===void 0?u:`${d}/${u}`}),!o&&d!==void 0&&(0,hr.jsx)(`span`,{style:{marginInlineStart:4},children:f?(0,hr.jsx)(h,{color:k.colorSuccess,icon:Re,size:14}):(0,hr.jsx)(h,{color:k.colorError,icon:Oe,size:14})})]})});return t.displayName=`MoveLocalFilesInspector`,t}})),vr,yr,br,xr=e((()=>{A(),vr=t(o()),i(),Rt(),E(),yr=t(s()),br=(e,t)=>{let n=(0,vr.memo)(({args:n,partialArgs:i,isArgumentsStreaming:a,isLoading:o,pluginState:s})=>{let{t:c}=r(`plugin`),l=n?.path||n?.filePath||n?.file_path||i?.path||i?.filePath||i?.file_path||s?.path||``,u=zt(l).isImage||!!s?.images?.length,d=t&&u?`${t}${a||o?`.loading`:``}`:e,f=(0,vr.useMemo)(()=>{let e=n||i,t=e?.startLine??e?.loc?.[0]??e?.offset,r=e?.endLine??e?.loc?.[1]??(t!==void 0&&e?.limit!==void 0?t+Math.max(e.limit-1,0):void 0);if(t!==void 0&&r!==void 0)return`L${t}-L${r}`;if(t!==void 0)return`L${t}`},[n,i]);return a?l?(0,yr.jsxs)(`div`,{className:T.root,children:[(0,yr.jsxs)(`span`,{className:D.shinyText,style:{marginInlineEnd:6},children:[c(d),`:`]}),(0,yr.jsx)(Bt,{filePath:l})]}):(0,yr.jsx)(`div`,{className:T.root,children:(0,yr.jsx)(`span`,{className:D.shinyText,children:c(d)})}):(0,yr.jsxs)(`div`,{className:T.root,children:[(0,yr.jsxs)(`span`,{className:O(o&&D.shinyText),style:{marginInlineEnd:6},children:[c(d),`:`]}),(0,yr.jsx)(Bt,{filePath:l}),f&&(0,yr.jsxs)(`span`,{style:{marginInlineStart:4},children:[`(`,f,`)`]})]})});return n.displayName=`ReadLocalFileInspector`,n}})),Sr,Cr,wr,Tr=e((()=>{Sr=/^(?:\/usr\/bin\/env\s+)?(?:\/\S+\/)?(?:bash|sh|zsh)\s+(?:-lc|-c|-l\s+-c)\s+(\S[\s\S]*)$/,Cr=e=>{let t=e.trim();if(t.length<2)return t;let n=t[0];if(n!==`"`&&n!==`'`||t.at(-1)!==n)return t;let r=t.slice(1,-1);return n===`'`?r.replaceAll(`'\\''`,`'`):r.replaceAll(`\\"`,`"`).replaceAll("\\`","`").replaceAll(`\\$`,`$`).replaceAll(`\\\\`,`\\`)},wr=e=>{let t=e?.trim()||``;if(!t)return``;let n=t.match(Sr);return n&&Cr(n[1])||t}})),Er,z,Dr,Or,kr,Ar=e((()=>{S(),A(),x(),Er=t(o()),i(),E(),Tr(),z=t(s()),Dr={chip:C(`acss-13abneo`,[`.acss-13abneo{overflow:hidden;display:inline-flex;flex-shrink:1;gap:6px;align-items:center;min-width:0;margin-inline-start:6px;padding-block:2px;padding-inline:10px;border-radius:999px;background:var(--ant-color-fill-tertiary);}`],`
    overflow: hidden;
    display: inline-flex;
    flex-shrink: 1;
    gap: 6px;
    align-items: center;

    min-width: 0;
    margin-inline-start: 6px;
    padding-block: 2px;
    padding-inline: 10px;
    border-radius: 999px;

    background: var(--ant-color-fill-tertiary);
  `),command:C(`acss-1rw7642`,[`.acss-1rw7642{overflow:hidden;min-width:0;font-family:var(--ant-font-family-code);font-size:12px;color:var(--ant-color-text);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    min-width: 0;

    font-family: var(--ant-font-family-code);
    font-size: 12px;
    color: var(--ant-color-text);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),leadingIcon:C(`acss-1nx4fkb`,[`.acss-1nx4fkb{flex-shrink:0;margin-inline-end:6px;color:var(--ant-color-text-description);}`],`
    flex-shrink: 0;
    margin-inline-end: 6px;
    color: var(--ant-color-text-description);
  `),statusIcon:C(`acss-18sem1j`,[`.acss-18sem1j{flex-shrink:0;margin-inline-start:4px;}`],`
    flex-shrink: 0;
    margin-inline-start: 4px;
  `),terminalIcon:C(`acss-mohja4`,[`.acss-mohja4{flex-shrink:0;color:var(--ant-color-text-description);}`],`
    flex-shrink: 0;
    color: var(--ant-color-text-description);
  `)},Or=(0,Er.memo)(({args:e,partialArgs:t,isArgumentsStreaming:n,pluginState:i,isLoading:a,translationKey:o,icon:s})=>{let{t:c}=r(`plugin`),l=wr(e?.command||t?.command),u=e?.description||t?.description||l,d=s?(0,z.jsx)(s,{className:Dr.leadingIcon,size:14}):null,f=s?null:(0,z.jsx)(de,{className:Dr.terminalIcon,size:14});if(n)return u?(0,z.jsxs)(`div`,{className:T.root,children:[d,(0,z.jsxs)(`span`,{className:D.shinyText,children:[c(o),`:`]}),(0,z.jsxs)(`span`,{className:Dr.chip,children:[f,(0,z.jsx)(`span`,{className:Dr.command,children:u})]})]}):(0,z.jsxs)(`div`,{className:T.root,children:[d,(0,z.jsx)(`span`,{className:D.shinyText,children:c(o)})]});let p=i?.success||i?.exitCode===0;return(0,z.jsxs)(`div`,{className:T.root,children:[d,(0,z.jsxs)(`span`,{className:O(a&&D.shinyText),children:[c(o),`:`]}),u&&(0,z.jsxs)(`span`,{className:Dr.chip,children:[f,(0,z.jsx)(`span`,{className:Dr.command,children:u})]}),a||i?.success===void 0?null:p?(0,z.jsx)(Re,{className:Dr.statusIcon,color:k.colorSuccess,size:14}):(0,z.jsx)(Oe,{className:Dr.statusIcon,color:k.colorError,size:14})]})}),Or.displayName=`RunCommandInspector`,kr=e=>{let t=(0,Er.memo)(t=>(0,z.jsx)(Or,{...t,translationKey:e}));return t.displayName=`RunCommandInspector`,t}})),jr,Mr,Nr,Pr=e((()=>{_(),A(),jr=t(o()),i(),E(),Mr=t(s()),Nr=({translationKey:e,noResultsKey:t})=>{let n=(0,jr.memo)(({args:n,partialArgs:i,isArgumentsStreaming:a,pluginState:o,isLoading:s})=>{let{t:c}=r(`plugin`),l=n?.keyword||n?.keywords||n?.query||i?.keyword||i?.keywords||i?.query||``;if(a)return l?(0,Mr.jsxs)(`div`,{className:T.root,children:[(0,Mr.jsxs)(`span`,{className:D.shinyText,children:[c(e),`: `]}),(0,Mr.jsx)(`span`,{className:Je.primary,children:l})]}):(0,Mr.jsx)(`div`,{className:T.root,children:(0,Mr.jsx)(`span`,{className:D.shinyText,children:c(e)})});let u=o?.results?.length??o?.totalCount??0,d=u>0;return(0,Mr.jsx)(`div`,{className:T.root,children:(0,Mr.jsxs)(`span`,{style:{marginInlineStart:2},children:[(0,Mr.jsxs)(`span`,{className:O(s&&D.shinyText),children:[c(e),`:`,` `]}),l&&(0,Mr.jsx)(`span`,{className:Je.primary,children:l}),!s&&o&&(d?(0,Mr.jsxs)(`span`,{style:{marginInlineStart:4},children:[`(`,u,`)`]}):(0,Mr.jsxs)(v,{as:`span`,color:k.colorTextDescription,fontSize:12,style:{marginInlineStart:4},children:[`(`,c(t),`)`]}))]})})});return n.displayName=`SearchLocalFilesInspector`,n}})),Fr,Ir,Lr,Rr,zr=e((()=>{Fr={home_timeline:`home timeline`,to_list:`to list`,user_timeline:`user timeline`},Ir=e=>{let t=e.indexOf(`_`);if(t<=0)return{noun:e,verb:`other`};let n=e.slice(0,t),r=e.slice(t+1),i=Fr[r]??r.replaceAll(`_`,` `);switch(n){case`get`:case`list`:case`search`:case`post`:case`create`:case`delete`:case`update`:case`like`:case`unlike`:case`retweet`:case`unretweet`:case`reply`:case`quote`:case`follow`:case`unfollow`:case`mute`:case`unmute`:case`block`:case`unblock`:case`bookmark`:case`unbookmark`:case`add`:case`remove`:return{noun:i,verb:n};default:return{noun:e.replaceAll(`_`,` `),verb:`other`}}},Lr=e=>e&&e.charAt(0).toUpperCase()+e.slice(1),Rr=e=>{let{verb:t,noun:n}=e;return t===`other`?Lr(n):t===`retweet`||t===`unretweet`?Lr(t):`${Lr(t)} ${n}`}})),Br,B,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr=e((()=>{S(),A(),Br=t(o()),E(),zr(),B=t(s()),Vr={chip:C(`acss-11vaiu4`,[`.acss-11vaiu4{overflow:hidden;display:inline-flex;flex-shrink:1;align-items:stretch;min-width:0;margin-inline-start:6px;border-radius:999px;font-size:12px;line-height:18px;background:var(--ant-color-fill-tertiary);}`],`
    overflow: hidden;
    display: inline-flex;
    flex-shrink: 1;
    align-items: stretch;

    min-width: 0;
    margin-inline-start: 6px;
    border-radius: 999px;

    font-size: 12px;
    line-height: 18px;

    background: var(--ant-color-fill-tertiary);
  `),chipAction:C(`acss-1d9xm3i`,[`.acss-1d9xm3i{flex-shrink:0;padding-block:2px;padding-inline:10px;color:var(--ant-color-text);}`],`
    flex-shrink: 0;
    padding-block: 2px;
    padding-inline: 10px;
    color: var(--ant-color-text);
  `),chipDivider:C(`acss-141p99c`,[`.acss-141p99c{flex-shrink:0;align-self:stretch;width:1px;background:var(--ant-color-border-secondary);}`],`
    flex-shrink: 0;
    align-self: stretch;
    width: 1px;
    background: var(--ant-color-border-secondary);
  `),chipKey:C(`acss-1axbjpc`,[`.acss-1axbjpc{color:var(--ant-color-text-description);}`],`
    color: var(--ant-color-text-description);
  `),chipValue:C(`acss-xwuvjm`,[`.acss-xwuvjm{overflow:hidden;display:inline-flex;flex-shrink:1;gap:4px;align-items:center;min-width:0;padding-block:2px;padding-inline:10px;font-family:var(--ant-font-family-code);color:var(--ant-color-text);}`],`
    overflow: hidden;
    display: inline-flex;
    flex-shrink: 1;
    gap: 4px;
    align-items: center;

    min-width: 0;
    padding-block: 2px;
    padding-inline: 10px;

    font-family: var(--ant-font-family-code);
    color: var(--ant-color-text);
  `),chipValueText:C(`acss-1mhjned`,[`.acss-1mhjned{overflow:hidden;min-width:0;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;
    min-width: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
  `),icon:C(`acss-1nx4fkb`,[`.acss-1nx4fkb{flex-shrink:0;margin-inline-end:6px;color:var(--ant-color-text-description);}`],`
    flex-shrink: 0;
    margin-inline-end: 6px;
    color: var(--ant-color-text-description);
  `),productPrefix:C(`acss-1fiaq7d`,[`.acss-1fiaq7d{flex-shrink:0;margin-inline-end:2px;font-size:13px;font-weight:500;color:var(--ant-color-text-secondary);}`],`
    flex-shrink: 0;

    margin-inline-end: 2px;

    font-size: 13px;
    font-weight: 500;
    color: var(--ant-color-text-secondary);
  `)},Hr=(0,Br.memo)(({size:e=14})=>(0,B.jsx)(`svg`,{"aria-hidden":`true`,className:Vr.icon,height:e,viewBox:`0 0 1200 1227`,width:e,xmlns:`http://www.w3.org/2000/svg`,children:(0,B.jsx)(`path`,{d:`M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026Zm-145 168.544-47.468-67.894L144.011 79.694h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854Z`,fill:`currentColor`})})),Hr.displayName=`XLogomark`,Ur=e=>Rr(e),Wr=(e,t=60)=>e.length>t?`${e.slice(0,t-1)}…`:e,Gr=(e,t)=>{let n=e?.[t];if(typeof n==`string`&&n.length>0)return n;if(typeof n==`number`)return String(n)},Kr=60,qr=[`tweetId`,`tweet_id`,`id`,`username`,`userId`,`user_id`,`screen_name`,`handle`,`query`,`q`,`text`,`content`,`status`,`message`,`listId`,`list_id`,`name`],Jr=e=>{if(!e)return null;for(let t of qr){let n=Gr(e,t);if(n)return{key:t,value:Wr(n,Kr)}}for(let[t,n]of Object.entries(e))if(typeof n==`string`&&n.length>0)return{key:t,value:Wr(n,Kr)};return null},Yr=(0,Br.memo)(({apiName:e,args:t,partialArgs:n,isArgumentsStreaming:r,isLoading:i})=>{let a=t??n,o=Ur(Ir(e)),s=Jr(a);return(0,B.jsxs)(`div`,{className:T.root,children:[(0,B.jsx)(Hr,{}),(0,B.jsx)(`span`,{className:O(Vr.productPrefix,(r||i)&&D.shinyText),children:`X (Twitter)`}),(0,B.jsxs)(`span`,{className:Vr.chip,children:[(0,B.jsx)(`span`,{className:Vr.chipAction,children:o}),s&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`span`,{className:Vr.chipDivider}),(0,B.jsxs)(`span`,{className:Vr.chipValue,children:[s.key&&(0,B.jsxs)(`span`,{className:Vr.chipKey,children:[s.key,`:`]}),(0,B.jsx)(`span`,{className:Vr.chipValueText,children:s.value})]})]})]})]})}),Yr.displayName=`TwitterInspector`,Xr=Yr})),Qr=e((()=>{Zr(),zr()})),$r,V,ei,ti=e((()=>{g(),_(),A(),x(),$r=t(o()),i(),Rt(),E(),V=t(s()),ei=e=>{let t=(0,$r.memo)(({args:t,partialArgs:n,isArgumentsStreaming:i,isLoading:a})=>{let{t:o}=r(`plugin`),s=t?.path||t?.filePath||t?.file_path||n?.path||n?.filePath||n?.file_path||``,c=t?.content?.split(`
`).length;return i?s?(0,V.jsxs)(`div`,{className:T.root,children:[(0,V.jsxs)(`span`,{className:D.shinyText,style:{marginInlineEnd:6},children:[o(e),`:`]}),(0,V.jsx)(Bt,{filePath:s})]}):(0,V.jsx)(`div`,{className:T.root,children:(0,V.jsx)(`span`,{className:D.shinyText,children:o(e)})}):(0,V.jsxs)(`div`,{className:T.root,children:[(0,V.jsxs)(`span`,{className:O(a&&D.shinyText),style:{marginInlineEnd:6},children:[o(e),`:`]}),(0,V.jsx)(Bt,{filePath:s}),!a&&c&&(0,V.jsxs)(V.Fragment,{children:[` `,(0,V.jsxs)(v,{code:!0,as:`span`,color:k.colorSuccess,fontSize:12,children:[(0,V.jsx)(h,{icon:Le,size:12}),c]})]})]})});return t.displayName=`WriteLocalFileInspector`,t}})),ni=e((()=>{gn(),zn(),Wn(),Xn(),lr(),pr(),_r(),xr(),Ar(),Pr(),Qr(),ti()})),ri,ii,ai=e((()=>{Gt(),x(),ri={Explore:{icon:Te,label:`Explore`},Plan:{icon:Ee,label:`Plan`},"general-purpose":{icon:Kt,label:`General purpose`},"statusline-setup":{icon:le,label:`Statusline setup`}},ii=e=>{let t=e?.trim();if(t)return ri[t]??{icon:Kt,label:t}}})),oi,si,ci,li,ui,di,fi=e((()=>{S(),Ut(),E(),it(),Gt(),A(),oi=t(o()),i(),Pt(),jt(),Nt(),j(),ai(),si=t(s()),ci={chip:C(`acss-1q2trug`,[`.acss-1q2trug{overflow:hidden;display:inline-flex;flex-shrink:1;align-items:center;min-width:0;margin-inline-start:6px;padding-block:2px;padding-inline:10px;border-radius:999px;background:var(--ant-color-fill-tertiary);}`],`
    overflow: hidden;
    display: inline-flex;
    flex-shrink: 1;
    align-items: center;

    min-width: 0;
    margin-inline-start: 6px;
    padding-block: 2px;
    padding-inline: 10px;
    border-radius: 999px;

    background: var(--ant-color-fill-tertiary);
  `),chipText:C(`acss-kda2u8`,[`.acss-kda2u8{overflow:hidden;min-width:0;font-size:12px;color:var(--ant-color-text);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    min-width: 0;

    font-size: 12px;
    color: var(--ant-color-text);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),icon:C(`acss-162uv3j`,[`.acss-162uv3j{flex-shrink:0;margin-inline:6px;color:var(--ant-color-text-description);}`],`
    flex-shrink: 0;
    margin-inline: 6px;
    color: var(--ant-color-text-description);
  `),label:C(`acss-7gekw4`,[`.acss-7gekw4{flex-shrink:0;color:var(--ant-color-text);}`],`
    flex-shrink: 0;
    color: var(--ant-color-text);
  `),metrics:C(`acss-pc1xgv`,[`.acss-pc1xgv{display:inline-flex;flex-shrink:0;gap:6px;align-items:center;margin-inline-start:8px;font-size:12px;color:var(--ant-color-text-description);}`],`
    display: inline-flex;
    flex-shrink: 0;
    gap: 6px;
    align-items: center;

    margin-inline-start: 8px;

    font-size: 12px;
    color: var(--ant-color-text-description);
  `),metricsDot:C(`acss-185s3ho`,[`.acss-185s3ho{color:var(--ant-color-text-quaternary);}`],`
    color: var(--ant-color-text-quaternary);
  `)},li=e=>e<1e3?String(e):e<1e4?`${(e/1e3).toFixed(1)}k`:e<1e6?`${Math.round(e/1e3)}k`:`${(e/1e6).toFixed(1)}M`,ui=e=>Mt(t=>{if(!e)return null;let n=(At.currentTopicThreads(t)??[]).find(t=>t.metadata?.sourceToolCallId===e);if(!n)return null;let r=kt(At.getThreadDbMessages(n.id)(t)),i=r.toolCalls||n.metadata?.totalToolCalls||0,a=r.totalTokens||n.metadata?.totalTokens||0,o=r.model||n.metadata?.model;return{hasAny:i>0||a>0||!!o,model:o,toolCalls:i,totalTokens:a}}),di=(0,oi.memo)(({args:e,partialArgs:t,isArgumentsStreaming:n,isLoading:i,toolCallId:a})=>{let{t:o}=r(`plugin`),{t:s}=r(`chat`),c=o(M.Agent),l=e??t,u=l?.description?.trim(),d=l?.subagent_type?.trim(),f=n||i,p=ii(d),m=p?.icon??Kt,h=p?.label??c,g=ui(a),_=[];g?.model&&_.push(`${s(`thread.subagentMetrics.modelLabel`)}: ${g.model}`),g&&g.toolCalls>0&&_.push(s(`thread.subagentMetrics.toolCalls`,{count:g.toolCalls})),g&&g.totalTokens>0&&_.push(s(`thread.subagentMetrics.tokens`,{count:g.totalTokens.toLocaleString(`en-US`)}));let ee=g?.hasAny&&(g.toolCalls>0||g.totalTokens>0)?(0,si.jsx)(y,{title:_.length>0?_.join(` · `):void 0,children:(0,si.jsxs)(`span`,{className:ci.metrics,children:[g.toolCalls>0&&(0,si.jsx)(`span`,{children:s(`thread.subagentMetrics.toolsShort`,{count:g.toolCalls})}),g.toolCalls>0&&g.totalTokens>0&&(0,si.jsx)(`span`,{className:ci.metricsDot,children:`·`}),g.totalTokens>0&&(0,si.jsx)(`span`,{children:(0,si.jsx)(Lt,{duration:2e3,formatter:li,value:g.totalTokens})})]})}):null;return(0,si.jsxs)(`div`,{className:T.root,children:[(0,si.jsx)(`span`,{className:O(ci.label,f&&D.shinyText),children:`Agent:`}),(0,si.jsx)(m,{className:ci.icon,size:14}),(0,si.jsx)(`span`,{className:ci.label,children:h}),u&&(0,si.jsx)(`span`,{className:ci.chip,children:(0,si.jsx)(`span`,{className:ci.chipText,children:u})}),ee]})}),di.displayName=`ClaudeCodeAgentInspector`})),pi,H,U,mi,hi,gi=e((()=>{S(),b(),_(),pi=t(o()),H=t(s()),U={answer:C(`acss-d0o0h8`,[`.acss-d0o0h8{font-size:14px;line-height:1.5;color:var(--ant-color-text-tertiary);overflow-wrap:anywhere;}`],`
    font-size: 14px;
    line-height: 1.5;
    color: var(--ant-color-text-tertiary);
    overflow-wrap: anywhere;
  `),container:C(`acss-1ghkfnu`,[`.acss-1ghkfnu{padding-block:8px 4px;}`],`
    padding-block: 8px 4px;
  `),divider:C(`acss-1tlpu29`,[`.acss-1tlpu29{align-self:stretch;height:1px;margin-block:4px;background:var(--ant-color-fill-secondary);}`],`
    align-self: stretch;
    height: 1px;
    margin-block: 4px;
    background: var(--ant-color-fill-secondary);
  `),header:C(`acss-1nw73es`,[`.acss-1nw73es{flex-shrink:0;padding-inline:8px;border-radius:4px;font-size:12px;font-weight:400;line-height:20px;color:var(--ant-color-text-tertiary);white-space:nowrap;background:var(--ant-color-fill-quaternary);}`],`
    flex-shrink: 0;

    padding-inline: 8px;
    border-radius: 4px;

    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    color: var(--ant-color-text-tertiary);
    white-space: nowrap;

    background: var(--ant-color-fill-quaternary);
  `),ordinal:C(`acss-otp71c`,[`.acss-otp71c{flex-shrink:0;box-sizing:border-box;width:28px;height:20px;border-radius:4px;font-family:var(--ant-font-family-code);font-size:12px;font-variant-numeric:tabular-nums;line-height:20px;color:var(--ant-color-text-tertiary);text-align:center;background:var(--ant-color-fill-quaternary);}`],`
    flex-shrink: 0;

    box-sizing: border-box;
    width: 28px;
    height: 20px;
    border-radius: 4px;

    font-family: var(--ant-font-family-code);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    line-height: 20px;
    color: var(--ant-color-text-tertiary);
    text-align: center;

    background: var(--ant-color-fill-quaternary);
  `),question:C(`acss-1r9n4ph`,[`.acss-1r9n4ph{font-size:14px;font-weight:400;line-height:1.5;color:var(--ant-color-text);overflow-wrap:anywhere;}`],`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--ant-color-text);
    overflow-wrap: anywhere;
  `),questionContent:C(`acss-zwlk01`,[`.acss-zwlk01{min-width:0;}`],`
    min-width: 0;
  `),recommendedBadge:C(`acss-1ui7i4g`,[`.acss-1ui7i4g{flex-shrink:0;padding-block:1px;padding-inline:8px;border-radius:999px;font-size:11px;line-height:18px;color:var(--ant-color-text-secondary);background:var(--ant-color-fill-secondary);}`],`
    flex-shrink: 0;

    padding-block: 1px;
    padding-inline: 8px;
    border-radius: 999px;

    font-size: 11px;
    line-height: 18px;
    color: var(--ant-color-text-secondary);

    background: var(--ant-color-fill-secondary);
  `),titleRow:C(`acss-17qpvk`,[`.acss-17qpvk{display:flex;flex-wrap:wrap;gap:8px;align-items:baseline;}`],`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: baseline;
  `),unanswered:C(`acss-19srp7b`,[`.acss-19srp7b{font-size:14px;line-height:1.5;color:var(--ant-color-text-quaternary);}`],`
    font-size: 14px;
    line-height: 1.5;
    color: var(--ant-color-text-quaternary);
  `)},mi=(0,pi.memo)(({question:e,answer:t,index:n,notAnswered:r,recommendedTag:i})=>{let a=Array.isArray(t)?t:t?[t]:[],o=t=>e.options.some(e=>e.label===t&&e.recommended);return(0,H.jsxs)(d,{align:`flex-start`,gap:8,horizontal:!!n,children:[!!n&&(0,H.jsx)(`span`,{className:U.ordinal,children:`Q${n}`}),(0,H.jsxs)(d,{className:U.questionContent,flex:1,gap:4,children:[(0,H.jsxs)(`div`,{className:n?U.titleRow:void 0,children:[(0,H.jsx)(`span`,{className:U.question,children:e.question}),!!n&&e.header&&(0,H.jsx)(`span`,{className:U.header,children:e.header})]}),a.length>0?a.map(e=>(0,H.jsxs)(d,{horizontal:!0,align:`center`,gap:8,children:[(0,H.jsx)(`span`,{className:U.answer,children:e}),o(e)&&(0,H.jsx)(`span`,{className:U.recommendedBadge,children:i})]},e)):(0,H.jsx)(`span`,{className:U.unanswered,children:r})]})]})}),mi.displayName=`AskUserQuestionResultQuestionAnswer`,hi=(0,pi.memo)(({answers:e,isError:t,labels:n,questions:r})=>{let i=e?.__freeform__,a=typeof i==`string`?i.trim():``,o=e?.__supplement__,s=typeof o==`string`?o.trim():``,c=r.length>1;return a?(0,H.jsxs)(d,{className:U.container,gap:16,children:[r.map((e,t)=>(0,H.jsxs)(d,{align:`flex-start`,gap:8,horizontal:c,children:[c&&(0,H.jsx)(`span`,{className:U.ordinal,children:`Q${t+1}`}),(0,H.jsxs)(`div`,{className:`${U.questionContent} ${c?U.titleRow:``}`.trim(),children:[(0,H.jsx)(`span`,{className:U.question,children:e.question}),c&&e.header&&(0,H.jsx)(`span`,{className:U.header,children:e.header})]})]},`${e.question}-${t}`)),c&&(0,H.jsx)(`div`,{className:U.divider}),(0,H.jsx)(`span`,{className:U.answer,children:a}),t&&(0,H.jsx)(v,{type:`warning`,children:n.noAnswer})]}):(0,H.jsxs)(d,{className:U.container,gap:16,children:[r.map((t,r)=>(0,H.jsx)(mi,{answer:e?.[t.question],index:c?r+1:void 0,notAnswered:n.notAnswered,question:t,recommendedTag:n.recommendedTag},`${t.question}-${r}`)),s&&(0,H.jsxs)(d,{gap:4,children:[(0,H.jsx)(`span`,{className:U.header,children:n.supplement}),(0,H.jsx)(`span`,{className:U.answer,children:s})]}),t&&(0,H.jsx)(v,{type:`warning`,children:n.noAnswer})]})}),hi.displayName=`AskUserQuestionResult`})),_i=e((()=>{c()})),vi,yi,bi,xi,Si,Ci,wi,Ti,Ei=e((()=>{vi=`__freeform__`,yi=`__supplement__`,bi=600*1e3,xi=`askUserDraft`,Si=e=>{let t=e??{};return{custom:t.custom??{},escapeActive:!!t.escapeActive,escapeText:typeof t.escapeText==`string`?t.escapeText:``,picks:t.picks??{},supplementActive:!!t.supplementActive,supplementText:typeof t.supplementText==`string`?t.supplementText:``}},Ci=(e,t,n)=>{if(n[e.question]?.trim())return!0;let r=t[e.question];return e.multiSelect?Array.isArray(r)&&r.length>0:!!r},wi=(e,t,n)=>{let r={};for(let i of e){let e=n[i.question]?.trim();if(i.multiSelect){let n=Array.isArray(t[i.question])?t[i.question]:[],a=e?[...n,e]:n;a.length>0&&(r[i.question]=a)}else e?r[i.question]=e:t[i.question]&&(r[i.question]=t[i.question])}return r},Ti=e=>{let t=Math.max(0,Math.floor(e/1e3));return`${Math.floor(t/60)}:${(t%60).toString().padStart(2,`0`)}`}})),Di,Oi,ki,Ai,ji=e((()=>{S(),b(),qt(),_(),Di=t(o()),Ut(),Oi=t(s()),ki={customRow:C(`acss-9g5u22`,[`.acss-9g5u22{margin-block-start:2px;padding-inline:12px;}`],`
    margin-block-start: 2px;

    /* Align the chip under the option number chips (OptionCard padding-inline). */
    padding-inline: 12px;
  `),index:C(`acss-6e0ltb`,[`.acss-6e0ltb{flex-shrink:0;box-sizing:border-box;width:22px;height:22px;border-radius:6px;font-family:var(--ant-font-family-code);font-size:12px;font-weight:600;line-height:22px;color:var(--ant-color-text-secondary);text-align:center;background:var(--ant-color-fill-tertiary);}`],`
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
  `)},Ai=(0,Di.memo)(({question:e,answer:t,customValue:n,customPlaceholder:r,disabled:i,highlightedIndex:a,multiSelectTag:o,onToggle:s,onCustomChange:c,onCustomNavigate:l,onPressEnter:u,recommendedTag:f})=>{let p=n=>e.multiSelect?Array.isArray(t)&&t.includes(n):t===n;return(0,Oi.jsxs)(d,{gap:10,children:[(0,Oi.jsxs)(d,{horizontal:!0,align:`center`,gap:8,children:[e.header&&(0,Oi.jsx)(v,{type:`secondary`,children:e.header}),e.multiSelect&&(0,Oi.jsx)(v,{fontSize:12,type:`secondary`,children:o})]}),(0,Oi.jsx)(v,{strong:!0,children:e.question}),(0,Oi.jsxs)(d,{gap:4,role:`listbox`,children:[e.options.map((t,n)=>{let r=t.id??t.label;return(0,Oi.jsx)(It,{description:t.description,disabled:i,highlighted:a===n,index:n+1,label:t.label,recommendedText:t.recommended?f:void 0,selected:p(r),onToggle:()=>s(e,r)},r)}),(0,Oi.jsxs)(d,{horizontal:!0,align:`center`,className:ki.customRow,gap:12,children:[(0,Oi.jsx)(`span`,{className:ki.index,children:e.options.length+1}),(0,Oi.jsx)(Jt,{autoSize:{maxRows:4,minRows:1},disabled:i,placeholder:r,style:{flex:1},value:n,variant:`filled`,onChange:t=>c(e,t.target.value),onKeyDown:e=>{if(e.nativeEvent.isComposing||e.metaKey||e.ctrlKey||e.altKey)return;let t=e.currentTarget;if(e.key===`ArrowUp`&&l){t.selectionStart===0&&t.selectionEnd===0&&(e.preventDefault(),t.blur(),l(`prev`));return}if(e.key===`ArrowDown`&&l){t.value||(e.preventDefault(),t.blur(),l(`next`));return}e.key!==`Enter`||e.shiftKey||u&&(e.preventDefault(),u())}})]})]})]})}),Ai.displayName=`AskUserQuestionPanel`})),Mi,Ni,W,Pi,Fi,Ii,Li,Ri=e((()=>{S(),b(),te(),g(),_i(),qt(),p(),Yt(),_(),x(),Mi=t(o()),Ni=t(a()),Zt(),Ei(),ji(),W=t(s()),Pi=e=>e.id??e.label,Fi={tabs:C(`acss-10syee0`,[`.acss-10syee0 [role='tablist']{width:100%;}`,`.acss-10syee0 [role='tablist'] >[role='tab']:has([data-replace-all]){margin-inline-start:auto;}`],`
    [role='tablist'] {
      width: 100%;

      > [role='tab']:has([data-replace-all]) {
        margin-inline-start: auto;
      }
    }
  `)},Ii=`a,button,select,summary,[role="button"],[role="tab"],[role="option"],[role="menuitem"],[role="combobox"],[role="listbox"],[role="radio"],[role="slider"],[role="spinbutton"]`,Li=(0,Mi.memo)(e=>{let{actionsPortalTarget:t,activeQuestion:n,activeTab:r,custom:i,escapeActive:a,escapeText:o,expired:s,handleCustomChange:c,handleEscapeTextChange:u,handleSkip:p,handleSubmit:m,handleSupplementTextChange:g,handleToggle:_,isMulti:te,isSubmitDisabled:ne,labels:y,picks:re,questions:b,remainingMs:ie,setEscapeMode:ae,setQuestionMode:oe,setSupplementMode:se,showCountdown:le,submitting:ue,supplementActive:de,supplementText:fe}=e,pe=(0,Mi.useRef)(null),me=(0,Mi.useRef)(t),[he,ge]=(0,Mi.useState)({}),ve=(0,Mi.useMemo)(()=>{if(!n)return;let e=he[n.question];if(e!=null)return e;if(!n.multiSelect){let e=re[n.question],t=n.options.findIndex(t=>Pi(t)===e);if(t>=0)return t}return 0},[n,he,re]),ye=(0,Mi.useCallback)((e,t)=>{ge(n=>({...n,[e.question]:t}))},[]),xe=(0,Mi.useCallback)(()=>{pe.current?.querySelector(`textarea`)?.focus()},[]),Se=(0,Mi.useRef)(()=>{});(0,Mi.useEffect)(()=>{me.current=t,Se.current=e=>{if(e.defaultPrevented||e.metaKey||e.ctrlKey||e.altKey)return;let t=e.target;if(t){let n=t.tagName;if((n===`INPUT`||n===`TEXTAREA`||t.isContentEditable)&&(!(pe.current?.contains(t)??!1)||e.key!==`Escape`||e.isComposing)||t.closest(`[role="dialog"],[role="alertdialog"],[role="menu"]`)||e.key!==`Escape`&&t.closest(Ii))return}if(e.repeat&&e.key!==`ArrowUp`&&e.key!==`ArrowDown`)return;let r=n,o=!!r&&!a&&!de&&!ue&&!s&&r.options.length>0;if(/^[1-9]$/.test(e.key)){if(!o)return;let t=Number(e.key)-1;t<r.options.length?(e.preventDefault(),ye(r,t),_(r,Pi(r.options[t]),{submitOnComplete:!0})):t===r.options.length&&(e.preventDefault(),ye(r,r.options.length),xe());return}if(e.key===`ArrowUp`||e.key===`ArrowDown`){if(!o)return;e.preventDefault();let t=r.options.length+1,n=e.key===`ArrowUp`?-1:1,i=((ve??0)+n+t)%t;ye(r,i),i===r.options.length&&xe();return}if(e.key===` `){if(!o||ve==null||ve>=r.options.length)return;e.preventDefault(),_(r,Pi(r.options[ve]));return}if(e.key===`Enter`){if(e.shiftKey)return;if(o&&!r.multiSelect&&ve!=null&&ve<r.options.length&&!(i[r.question]??``).trim()&&re[r.question]!==Pi(r.options[ve])){e.preventDefault(),_(r,Pi(r.options[ve]),{submitOnComplete:!0});return}if(ne)return;e.preventDefault(),m()}else if(e.key===`Escape`){if(ue)return;e.preventDefault(),p()}}}),(0,Mi.useEffect)(()=>Qt({contains:e=>!!pe.current?.contains(e)||!!me.current?.contains(e),onKeyDown:e=>Se.current(e)}),[]);let Ce=(0,W.jsxs)(d,{horizontal:!0,align:`center`,gap:8,justify:le?`space-between`:`flex-end`,width:`100%`,children:[le&&(0,W.jsx)(v,{fontSize:12,type:`secondary`,children:s?y.timeExpired:y.timeRemaining(Ti(ie))}),(0,W.jsxs)(d,{horizontal:!0,gap:8,children:[(0,W.jsxs)(f,{disabled:ue,icon:(0,W.jsx)(h,{icon:Oe}),onClick:p,children:[y.skip,(0,W.jsx)(ee,{compact:!0,keys:l.Esc,variant:`borderless`})]}),(0,W.jsxs)(f,{disabled:ne,icon:(0,W.jsx)(h,{icon:_e}),loading:ue,type:`primary`,onClick:m,children:[y.submit,(0,W.jsx)(ee,{compact:!0,inverseTheme:!0,keys:l.Enter,variant:`borderless`})]})]})]});return(0,W.jsxs)(d,{gap:12,ref:pe,children:[b.length>0&&(0,W.jsx)(Xt,{activeKey:a?`escape`:de?`supplement`:r,className:Fi.tabs,variant:`square`,items:[...b.map((e,t)=>{let n=Ci(e,re,i);return{key:String(t),label:(0,W.jsxs)(d,{horizontal:!0,align:`center`,gap:6,children:[(0,W.jsxs)(v,{children:[`Q`,t+1]}),n&&(0,W.jsx)(h,{icon:Re,size:12})]})}}),{key:`supplement`,label:(0,W.jsxs)(d,{horizontal:!0,align:`center`,gap:6,children:[(0,W.jsx)(h,{icon:ce,size:12}),(0,W.jsx)(v,{children:y.supplementEnter})]})},...te?[{key:`escape`,label:(0,W.jsxs)(d,{"data-replace-all":!0,horizontal:!0,align:`center`,gap:6,children:[(0,W.jsx)(h,{icon:be,size:12}),(0,W.jsx)(v,{children:y.escapeEnter})]})}]:[]],onChange:e=>{e===`escape`?ae(!0):e===`supplement`?se(!0):oe(e)}}),a||de?(0,W.jsx)(Jt,{autoSize:{maxRows:8,minRows:3},disabled:s||ue,placeholder:de?y.supplementPlaceholder:y.escapePlaceholder,value:de?fe:o,variant:`filled`,onChange:e=>de?g(e.target.value):u(e.target.value),onKeyDown:e=>{e.key!==`Enter`||e.shiftKey||e.nativeEvent.isComposing||e.metaKey||e.ctrlKey||e.altKey||ne||(e.preventDefault(),m())}}):n&&(0,W.jsx)(Ai,{answer:re[n.question],customPlaceholder:y.customPlaceholder,customValue:i[n.question]??``,disabled:s||ue,highlightedIndex:ve,multiSelectTag:y.multiSelectTag,question:n,recommendedTag:y.recommendedTag,onCustomChange:c,onPressEnter:ne?void 0:m,onToggle:_,onCustomNavigate:e=>ye(n,e===`prev`?n.options.length-1:0)}),t?(0,Ni.createPortal)(Ce,t):Ce]})}),Li.displayName=`AskUserQuestionView`})),zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi=e((()=>{Ve(),zi=e=>{if(typeof e!=`string`)return e;try{return JSON.parse(e)}catch{return e}},Bi=/[(（](?:recommended|推荐)[)）]$/i,Vi=e=>{let t=e.trimEnd(),n=Bi.exec(t);return n?t.slice(0,n.index).trimEnd():e},Hi=e=>{let t=Ye(e),n=Ke(t?.label);if(!n)return;let r=Vi(n),i=r.length>0&&r!==n,a=i?r:n,o=Ke(t?.description),s=Ke(t?.id);return{...s?{id:s}:{},label:a,...o?{description:o}:{},...i?{recommended:i}:{}}},Ui=e=>!!e,Wi=e=>{let t=Ye(e),n=Ke(t?.question);if(!n)return;let r=t?.options,i=Array.isArray(r)?r.map(Hi).filter(Ui):[],a=Ke(t?.header)??``,o=typeof t?.multiSelect==`boolean`?t.multiSelect:void 0;return{header:a,...o===void 0?{}:{multiSelect:o},options:i,question:n}},Gi=e=>!!e,Ki=e=>{let t=zi(e),n=zi(Ye(t)?.questions??t);if(Array.isArray(n))return n.map(Wi).filter(Gi);let r=Wi(n);return r?[r]:[]}})),Ji,Yi,Xi,Zi=e((()=>{Ji=`User submitted:`,Yi=e=>{if(!e||typeof e!=`object`||Array.isArray(e))return;let t=Object.entries(e).filter(e=>typeof e[1]==`string`||Array.isArray(e[1])&&e[1].every(e=>typeof e==`string`));return t.length>0?Object.fromEntries(t):void 0},Xi=(e,t)=>{let n=Yi(e?.askUserAnswers);if(n)return n;if(typeof t!=`string`)return;let r=t.indexOf(Ji);if(!(r<0))try{return Yi(JSON.parse(t.slice(r+15)))}catch{return}}})),G,Qi,$i=e((()=>{G=t(o()),Ei(),qi(),Qi=({args:e,countdownMs:t,disabled:n=!1,onInteractionAction:r,persistedDraft:i,writeDraft:a})=>{let o=(0,G.useMemo)(()=>Ki(e),[e]),s=Si(i),[c,l]=(0,G.useState)(()=>s.picks),[u,d]=(0,G.useState)(()=>s.custom),[f,p]=(0,G.useState)(()=>s.escapeText),[m,h]=(0,G.useState)(()=>s.escapeActive),[g,_]=(0,G.useState)(()=>s.supplementText),[ee,te]=(0,G.useState)(()=>s.supplementActive&&!s.escapeActive),[v,ne]=(0,G.useState)(!1),[y,re]=(0,G.useState)(()=>{let e=o.findIndex(e=>!Ci(e,s.picks,s.custom));return String(e>=0?e:0)}),b=t!=null,ie=(0,G.useMemo)(()=>Date.now()+(t??0),[t]),[ae,oe]=(0,G.useState)(()=>Date.now());(0,G.useEffect)(()=>{if(!b)return;let e=setInterval(()=>oe(Date.now()),1e3);return()=>clearInterval(e)},[b]);let se=b?ae>=ie:!1,ce=o.some(e=>e.options.some(e=>!!e.id)),le=(0,G.useCallback)(async e=>{if(!(!r||v||n)){ne(!0);try{await r({payload:e,type:`submit`})}catch(e){console.error(`[AskUserQuestion] submit failed:`,e),ne(!1)}}},[n,r,v]),ue=(0,G.useCallback)((e,t,r)=>{if(n)return;let i;if(e.multiSelect){let n=c[e.question]??[];i={...c,[e.question]:n.includes(t)?n.filter(e=>e!==t):[...n,t]}}else i={...c,[e.question]:t};let s=u;if(!e.multiSelect&&u[e.question]){let{[e.question]:t,...n}=u;s=n}if(l(i),s!==u&&d(s),a({custom:s,escapeActive:m,escapeText:f,picks:i,supplementActive:ee,supplementText:g}),!e.multiSelect){let t=!Ci(e,c,u),n=o.every(e=>Ci(e,i,s));if(r?.submitOnComplete&&t&&n){let e=wi(o,i,s);g.trim()&&(e[yi]=g.trim()),le(e);return}if(o.length>1){let t=o.findIndex(t=>t.question!==e.question&&!Ci(t,i,s));t>=0&&re(String(t))}}},[c,u,n,m,f,o,le,ee,g,a]),de=(0,G.useCallback)((e,t)=>{let n={...u,[e.question]:t},r=c;if(!e.multiSelect&&t.trim()&&c[e.question]){let{[e.question]:t,...n}=c;r=n}d(n),r!==c&&l(r),a({custom:n,escapeActive:m,escapeText:f,picks:r,supplementActive:ee,supplementText:g})},[c,u,m,f,ee,g,a]),fe=(0,G.useCallback)(e=>{p(e),a({custom:u,escapeActive:!0,escapeText:e,picks:c,supplementActive:!1,supplementText:g})},[u,c,g,a]),pe=(0,G.useCallback)(e=>{_(e),a({custom:u,escapeActive:!1,escapeText:f,picks:c,supplementActive:!0,supplementText:e})},[u,f,c,a]),me=(0,G.useCallback)(e=>{h(e),e&&te(!1),a({custom:u,escapeActive:e,escapeText:f,picks:c,supplementActive:e?!1:ee,supplementText:g})},[u,f,c,ee,g,a]),he=(0,G.useCallback)(e=>{te(e),e&&h(!1),a({custom:u,escapeActive:e?!1:m,escapeText:f,picks:c,supplementActive:e,supplementText:g})},[u,m,f,c,g,a]),ge=(0,G.useCallback)(e=>{re(e),h(!1),te(!1),a({custom:u,escapeActive:!1,escapeText:f,picks:c,supplementActive:!1,supplementText:g})},[u,f,c,g,a]),_e=o.length>1,ve=o.length>0,ye=m&&_e,be=ee&&ve,xe=(0,G.useCallback)(()=>{if(m&&_e)le({[vi]:f.trim()});else{let e=wi(o,c,u);g.trim()&&(e[yi]=g.trim()),le(e)}},[u,m,_e,f,be,c,o,le,g]),Se=(0,G.useCallback)(async()=>{if(!(!r||v||n)){ne(!0);try{await r({type:`skip`})}catch(e){console.error(`[AskUserQuestion] skip failed:`,e),ne(!1)}}},[n,r,v]),Ce=(0,G.useMemo)(()=>o.every(e=>Ci(e,c,u)),[c,u,o]);return(0,G.useEffect)(()=>{if(!se||v||n||o.length===0||ce)return;if(m&&_e&&f.trim().length>0){le({[vi]:f.trim()});return}let e=wi(o,c,u);for(let t of o)if(e[t.question]==null&&t.options.length>0){let n=t.options[0].label;e[t.question]=t.multiSelect?[n]:n}g.trim()&&(e[yi]=g.trim()),le(e)},[se,v,n,o,m,_e,f,c,u,g,le,ce]),{activeQuestion:o[Number(y)]??o[0],activeTab:y,custom:u,escapeActive:ye,escapeText:f,expired:se,handleCustomChange:de,handleEscapeTextChange:fe,handleSkip:Se,handleSubmit:xe,handleSupplementTextChange:pe,handleToggle:ue,isMulti:_e,isSubmitDisabled:n||o.length===0||(ye?!f.trim()||v||se:be?!Ce||!g.trim()||v||se:!Ce||se||v),picks:c,questions:o,remainingMs:ie-ae,setEscapeMode:me,setQuestionMode:ge,setSupplementMode:he,submitting:v||n,supplementActive:be,supplementText:g}}})),ea=e((()=>{gi(),Ri(),Ei(),qi(),ji(),Zi(),$i()})),ta,na,ra,ia,aa,oa=e((()=>{S(),ea(),E(),A(),ta=t(o()),i(),j(),na=t(s()),ra=2,ia={chip:C(`acss-6ohz0z`,[`.acss-6ohz0z{overflow:hidden;min-width:0;padding-block:2px;padding-inline:10px;border-radius:999px;font-size:12px;color:var(--ant-color-text);text-overflow:ellipsis;white-space:nowrap;background:var(--ant-color-fill-tertiary);}`],`
    overflow: hidden;

    min-width: 0;
    padding-block: 2px;
    padding-inline: 10px;
    border-radius: 999px;

    font-size: 12px;
    color: var(--ant-color-text);
    text-overflow: ellipsis;
    white-space: nowrap;

    background: var(--ant-color-fill-tertiary);
  `),chips:C(`acss-1uit3nb`,[`.acss-1uit3nb{overflow:hidden;display:flex;gap:4px;align-items:center;min-width:0;margin-inline-start:6px;}`],`
    overflow: hidden;
    display: flex;
    gap: 4px;
    align-items: center;

    min-width: 0;
    margin-inline-start: 6px;
  `),label:C(`acss-13p6dfv`,[`.acss-13p6dfv{flex-shrink:0;}`],`
    flex-shrink: 0;
  `),more:C(`acss-1ld243d`,[`.acss-1ld243d{flex-shrink:0;font-size:12px;color:var(--ant-color-text-tertiary);}`],`
    flex-shrink: 0;
    font-size: 12px;
    color: var(--ant-color-text-tertiary);
  `)},aa=(0,ta.memo)(({args:e,partialArgs:t,isArgumentsStreaming:n,isLoading:i})=>{let{t:a}=r(`plugin`),o=a(M.AskUserQuestion),s=Ki(e),c=(s.length?s:Ki(t)).map(e=>e.header||e.question).filter(e=>!!e),l=c.slice(0,ra),u=c.length-l.length;return n&&l.length===0?(0,na.jsx)(`div`,{className:O(T.root,D.shinyText),children:o}):(0,na.jsxs)(`div`,{className:T.root,children:[(0,na.jsx)(`span`,{className:O(ia.label,(n||i)&&D.shinyText),children:o}),l.length>0&&(0,na.jsxs)(`div`,{className:ia.chips,children:[l.map((e,t)=>(0,na.jsx)(`span`,{className:ia.chip,children:e},`${e}-${t}`)),u>0&&(0,na.jsx)(`span`,{className:ia.more,children:`+${u}`})]})]})}),aa.displayName=`ClaudeCodeAskUserQuestionInspector`})),sa,ca,la,ua,da,fa,pa,ma,ha,ga,_a,va=e((()=>{S(),E(),A(),x(),sa=t(o()),i(),vt(),ca=t(s()),la={chip:C(`acss-13abneo`,[`.acss-13abneo{overflow:hidden;display:inline-flex;flex-shrink:1;gap:6px;align-items:center;min-width:0;margin-inline-start:6px;padding-block:2px;padding-inline:10px;border-radius:999px;background:var(--ant-color-fill-tertiary);}`],`
    overflow: hidden;
    display: inline-flex;
    flex-shrink: 1;
    gap: 6px;
    align-items: center;

    min-width: 0;
    margin-inline-start: 6px;
    padding-block: 2px;
    padding-inline: 10px;
    border-radius: 999px;

    background: var(--ant-color-fill-tertiary);
  `),icon:C(`acss-mohja4`,[`.acss-mohja4{flex-shrink:0;color:var(--ant-color-text-description);}`],`
    flex-shrink: 0;
    color: var(--ant-color-text-description);
  `),value:C(`acss-1rw7642`,[`.acss-1rw7642{overflow:hidden;min-width:0;font-family:var(--ant-font-family-code);font-size:12px;color:var(--ant-color-text);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    min-width: 0;

    font-family: var(--ant-font-family-code);
    font-size: 12px;
    color: var(--ant-color-text);
    text-overflow: ellipsis;
    white-space: nowrap;
  `)},ua={click:ge,fill:Se,navigate:ve,press:ze,readPage:Ne,screenshot:se,scroll:fe,snapshot:Ne},da=e=>e.replace(/^https?:\/\//i,``),fa=({dx:e,dy:t})=>{let n=[];return typeof t==`number`&&t!==0&&n.push(`${t>0?`↓`:`↑`} ${Math.abs(t)}px`),typeof e==`number`&&e!==0&&n.push(`${e>0?`→`:`←`} ${Math.abs(e)}px`),n.join(`  `)},pa=(e,t)=>{switch(e){case`navigate`:return t.url?da(t.url.trim()):``;case`click`:{if(t.ref)return t.ref;let{x:e,y:n}=t;return typeof e==`number`&&typeof n==`number`?`(${e}, ${n})`:``}case`fill`:return t.text?.trim()||t.ref||``;case`press`:return t.key||``;case`scroll`:return fa(t);default:return``}},ma=(0,sa.memo)(({apiName:e,args:t,partialArgs:n,isArgumentsStreaming:i,isLoading:a})=>{let{t:o}=r(`chat`),s=at(e);if(!s)return null;let c=o(yt(s),{defaultValue:_t(s)}),l=pa(s,t||n||{}),u=ua[s],d=i||a;return(0,ca.jsxs)(`div`,{className:T.root,children:[(0,ca.jsx)(`span`,{className:O(d&&D.shinyText),children:l?`${c}:`:c}),l&&(0,ca.jsxs)(`span`,{className:la.chip,children:[(0,ca.jsx)(u,{className:la.icon,size:14}),(0,ca.jsx)(`span`,{className:la.value,children:l})]})]})}),ma.displayName=`ClaudeCodeBrowserMcpInspector`,ha=ma,ga=Object.fromEntries(st.map(e=>[e,ha])),_a=new Proxy(ga,{get:(e,t)=>{if(typeof t==`string`)return e[t]||(ot(t)?ha:void 0)}})})),ya,ba,xa,Sa,Ca,wa=e((()=>{ni(),ya=t(o()),j(),ba=t(s()),xa=(e,t)=>{if(e===t)return{linesAdded:0,linesDeleted:0};if(!e)return{linesAdded:t.split(`
`).length,linesDeleted:0};if(!t)return{linesAdded:0,linesDeleted:e.split(`
`).length};let n=e.split(`
`),r=t.split(`
`),i=n.length,a=r.length,o=Array.from({length:a+1}).fill(0),s=Array.from({length:a+1}).fill(0);for(let e=1;e<=i;e++){for(let t=1;t<=a;t++)s[t]=n[e-1]===r[t-1]?o[t-1]+1:Math.max(o[t],s[t-1]);for(let e=0;e<=a;e++)o[e]=s[e]}let c=o[a];return{linesAdded:a-c,linesDeleted:i-c}},Sa=hn(M.Edit),Ca=(0,ya.memo)(({args:e,pluginState:t,...n})=>{let r=(0,ya.useMemo)(()=>{if(t)return t;if(!e?.old_string&&!e?.new_string)return;let{linesAdded:n,linesDeleted:r}=xa(e.old_string??``,e.new_string??``);return{linesAdded:n,linesDeleted:r,path:e.file_path??``,replacements:+!e.replace_all}},[e,t]);return(0,ba.jsx)(Sa,{...n,args:e,pluginState:r})}),Ca.displayName=`ClaudeCodeEditInspector`})),Ta,Ea,Da=e((()=>{ni(),dt(),Ta=Object.fromEntries(ht.map(e=>[`${gt}${e}`,sr])),Ea=new Proxy(Ta,{get:(e,t)=>{if(typeof t==`string`)return e[t]||(ft(t)?sr:void 0)}})})),Oa,ka,Aa,ja,Ma,Na=e((()=>{S(),E(),A(),x(),Oa=t(o()),i(),j(),ka=t(s()),Aa={chip:C(`acss-13abneo`,[`.acss-13abneo{overflow:hidden;display:inline-flex;flex-shrink:1;gap:6px;align-items:center;min-width:0;margin-inline-start:6px;padding-block:2px;padding-inline:10px;border-radius:999px;background:var(--ant-color-fill-tertiary);}`],`
    overflow: hidden;
    display: inline-flex;
    flex-shrink: 1;
    gap: 6px;
    align-items: center;

    min-width: 0;
    margin-inline-start: 6px;
    padding-block: 2px;
    padding-inline: 10px;
    border-radius: 999px;

    background: var(--ant-color-fill-tertiary);
  `),command:C(`acss-1rw7642`,[`.acss-1rw7642{overflow:hidden;min-width:0;font-family:var(--ant-font-family-code);font-size:12px;color:var(--ant-color-text);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    min-width: 0;

    font-family: var(--ant-font-family-code);
    font-size: 12px;
    color: var(--ant-color-text);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),description:C(`acss-kda2u8`,[`.acss-kda2u8{overflow:hidden;min-width:0;font-size:12px;color:var(--ant-color-text);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    min-width: 0;

    font-size: 12px;
    color: var(--ant-color-text);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),monitorIcon:C(`acss-mohja4`,[`.acss-mohja4{flex-shrink:0;color:var(--ant-color-text-description);}`],`
    flex-shrink: 0;
    color: var(--ant-color-text-description);
  `),statusIcon:C(`acss-1rhi9d5`,[`.acss-1rhi9d5{margin-inline-start:4px;}`],`
    margin-inline-start: 4px;
  `),timeout:C(`acss-f9ewnv`,[`.acss-f9ewnv{flex-shrink:0;margin-inline-start:8px;font-feature-settings:'tnum';color:var(--ant-color-text-description);}`],`
    flex-shrink: 0;
    margin-inline-start: 8px;
    font-feature-settings: 'tnum';
    color: var(--ant-color-text-description);
  `)},ja=e=>{if(typeof e!=`number`||!Number.isFinite(e)||e<=0)return;let t=Math.round(e/1e3);if(t<60)return`${t}s`;let n=Math.floor(t/60),r=t%60;if(n<60)return r>0?`${n}m ${r}s`:`${n}m`;let i=Math.floor(n/60),a=n%60;return a>0?`${i}h ${a}m`:`${i}h`},Ma=(0,Oa.memo)(({args:e,partialArgs:t,isArgumentsStreaming:n,pluginState:i,isLoading:a})=>{let{t:o}=r(`plugin`),s=o(M.Monitor),c=e??t,l=c?.description?.trim(),u=c?.command?.trim(),d=ja(c?.timeout_ms),f=n||a;if(n&&!l&&!u)return(0,ka.jsx)(`div`,{className:O(T.root,D.shinyText),children:s});let p=!l&&!!u,m=l||u,h=i?.success,g=i?.exitCode,_=h===!0||g===0,ee=h===!1||typeof g==`number`&&g!==0;return(0,ka.jsxs)(`div`,{className:T.root,children:[(0,ka.jsxs)(`span`,{className:O(f&&D.shinyText),children:[s,`:`]}),m&&(0,ka.jsxs)(`span`,{className:Aa.chip,children:[(0,ka.jsx)(xe,{className:Aa.monitorIcon,size:12}),(0,ka.jsx)(`span`,{className:p?Aa.command:Aa.description,children:m})]}),d&&(0,ka.jsxs)(`span`,{className:Aa.timeout,children:[`· `,d]}),a?null:_?(0,ka.jsx)(Re,{className:Aa.statusIcon,color:k.colorSuccess,size:14}):ee?(0,ka.jsx)(Oe,{className:Aa.statusIcon,color:k.colorError,size:14}):null]})}),Ma.displayName=`ClaudeCodeMonitorInspector`})),Pa,Fa,Ia,La,Ra,za=e((()=>{ni(),Pa=t(o()),j(),Fa=t(s()),Ia=e=>{let{file_path:t,offset:n,limit:r}=e??{};return{endLine:n!==void 0&&r!==void 0?n+r:void 0,path:t,startLine:n}},La=br(M.Read),Ra=(0,Pa.memo)(e=>(0,Fa.jsx)(La,{...e,args:Ia(e.args),partialArgs:Ia(e.partialArgs)})),Ra.displayName=`ClaudeCodeReadInspector`})),Ba,Va,Ha,Ua,Wa,Ga=e((()=>{S(),E(),A(),Ba=t(o()),i(),j(),Va=t(s()),Ha={chip:C(`acss-15c0nug`,[`.acss-15c0nug{overflow:hidden;display:inline-flex;flex-shrink:1;align-items:center;min-width:0;margin-inline-start:6px;padding-block:1px;padding-inline:8px;border-radius:999px;font-size:12px;color:var(--ant-color-text);text-overflow:ellipsis;white-space:nowrap;background:var(--ant-color-fill-tertiary);}`],`
    overflow: hidden;
    display: inline-flex;
    flex-shrink: 1;
    align-items: center;

    min-width: 0;
    margin-inline-start: 6px;
    padding-block: 1px;
    padding-inline: 8px;
    border-radius: 999px;

    font-size: 12px;
    color: var(--ant-color-text);
    text-overflow: ellipsis;
    white-space: nowrap;

    background: var(--ant-color-fill-tertiary);
  `),delay:C(`acss-436non`,[`.acss-436non{flex-shrink:0;margin-inline-start:8px;color:var(--ant-color-text-description);}`],`
    flex-shrink: 0;
    margin-inline-start: 8px;
    color: var(--ant-color-text-description);
  `)},Ua=e=>{if(!Number.isFinite(e)||e<=0||e<60)return`${e}s`;let t=Math.floor(e/60),n=e%60;if(t<60)return n>0?`${t}m ${n}s`:`${t}m`;let r=Math.floor(t/60),i=t%60;return i>0?`${r}h ${i}m`:`${r}h`},Wa=(0,Ba.memo)(({args:e,partialArgs:t,isArgumentsStreaming:n,isLoading:i})=>{let{t:a}=r(`plugin`),o=a(M.ScheduleWakeup),s=e??t,c=s?.delaySeconds,l=s?.reason?.trim(),u=n||i;return n&&c===void 0&&!l?(0,Va.jsx)(`div`,{className:O(T.root,D.shinyText),children:o}):(0,Va.jsxs)(`div`,{className:T.root,children:[(0,Va.jsx)(`span`,{className:O(u&&D.shinyText),children:l||typeof c==`number`?`${o}:`:o}),l&&(0,Va.jsx)(`span`,{className:Ha.chip,children:l}),typeof c==`number`&&(0,Va.jsxs)(`span`,{className:Ha.delay,children:[`· `,Ua(c)]})]})}),Wa.displayName=`ClaudeCodeScheduleWakeupInspector`})),Ka,qa,Ja,Ya,Xa=e((()=>{S(),E(),A(),Ka=t(o()),i(),qa=t(s()),Ja={chip:C(`acss-15c0nug`,[`.acss-15c0nug{overflow:hidden;display:inline-flex;flex-shrink:1;align-items:center;min-width:0;margin-inline-start:6px;padding-block:1px;padding-inline:8px;border-radius:999px;font-size:12px;color:var(--ant-color-text);text-overflow:ellipsis;white-space:nowrap;background:var(--ant-color-fill-tertiary);}`],`
    overflow: hidden;
    display: inline-flex;
    flex-shrink: 1;
    align-items: center;

    min-width: 0;
    margin-inline-start: 6px;
    padding-block: 1px;
    padding-inline: 8px;
    border-radius: 999px;

    font-size: 12px;
    color: var(--ant-color-text);
    text-overflow: ellipsis;
    white-space: nowrap;

    background: var(--ant-color-fill-tertiary);
  `)},Ya=(0,Ka.memo)(({args:e,partialArgs:t,isArgumentsStreaming:n,isLoading:i})=>{let{t:a}=r(`plugin`),o=a(`builtins.lobe-claude-code.sendMessage.title`),s=e??t,c=(s?.summary??s?.message??s?.content)?.trim(),l=n||i;return n&&!c?(0,qa.jsx)(`div`,{className:O(T.root,D.shinyText),children:o}):(0,qa.jsxs)(`div`,{className:T.root,children:[(0,qa.jsx)(`span`,{className:O(l&&D.shinyText),children:c?`${o}:`:o}),c&&(0,qa.jsx)(`span`,{className:Ja.chip,children:c})]})}),Ya.displayName=`ClaudeCodeSendMessageInspector`})),Za,Qa,$a,eo,to=e((()=>{S(),E(),re(),A(),Za=t(o()),i(),j(),Qa=t(s()),$a={chip:C(`acss-13abneo`,[`.acss-13abneo{overflow:hidden;display:inline-flex;flex-shrink:1;gap:6px;align-items:center;min-width:0;margin-inline-start:6px;padding-block:2px;padding-inline:10px;border-radius:999px;background:var(--ant-color-fill-tertiary);}`],`
    overflow: hidden;
    display: inline-flex;
    flex-shrink: 1;
    gap: 6px;
    align-items: center;

    min-width: 0;
    margin-inline-start: 6px;
    padding-block: 2px;
    padding-inline: 10px;
    border-radius: 999px;

    background: var(--ant-color-fill-tertiary);
  `),skillIcon:C(`acss-mohja4`,[`.acss-mohja4{flex-shrink:0;color:var(--ant-color-text-description);}`],`
    flex-shrink: 0;
    color: var(--ant-color-text-description);
  `),skillName:C(`acss-kda2u8`,[`.acss-kda2u8{overflow:hidden;min-width:0;font-size:12px;color:var(--ant-color-text);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    min-width: 0;

    font-size: 12px;
    color: var(--ant-color-text);
    text-overflow: ellipsis;
    white-space: nowrap;
  `)},eo=(0,Za.memo)(({args:e,partialArgs:t,isArgumentsStreaming:n,isLoading:i})=>{let{t:a}=r(`plugin`),o=a(M.Skill),s=e?.skill||t?.skill;return n&&!s?(0,Qa.jsx)(`div`,{className:O(T.root,D.shinyText),children:o}):(0,Qa.jsxs)(`div`,{className:T.root,children:[(0,Qa.jsx)(`span`,{className:O((n||i)&&D.shinyText),children:o}),s&&(0,Qa.jsxs)(`span`,{className:$a.chip,children:[(0,Qa.jsx)(ie,{className:$a.skillIcon,size:12}),(0,Qa.jsx)(`span`,{className:$a.skillName,children:s})]})]})}),eo.displayName=`ClaudeCodeSkillInspector`})),no,K,ro,io,ao,oo,so,co,lo,uo,fo=e((()=>{S(),E(),A(),no=t(o()),i(),j(),K=t(s()),ro=14,io=2,ao=(ro-io)/2,oo=2*Math.PI*ao,so={chip:C(`acss-1bb1cz4`,[`.acss-1bb1cz4{overflow:hidden;flex-shrink:1;min-width:0;margin-inline-start:4px;padding-block:1px;padding-inline:8px;border-radius:999px;color:var(--ant-color-text);text-overflow:ellipsis;white-space:nowrap;background:var(--ant-color-fill-secondary);}`],`
    overflow: hidden;
    flex-shrink: 1;

    min-width: 0;
    margin-inline-start: 4px;
    padding-block: 1px;
    padding-inline: 8px;
    border-radius: 999px;

    color: var(--ant-color-text);
    text-overflow: ellipsis;
    white-space: nowrap;

    background: var(--ant-color-fill-secondary);
  `),countChip:C(`acss-1ywltby`,[`.acss-1ywltby{flex-shrink:0;padding-block:1px;padding-inline:6px;border-radius:999px;font-family:var(--ant-font-family-code);font-size:12px;color:var(--ant-color-text-secondary);background:var(--ant-color-fill-tertiary);}`],`
    flex-shrink: 0;

    padding-block: 1px;
    padding-inline: 6px;
    border-radius: 999px;

    font-family: var(--ant-font-family-code);
    font-size: 12px;
    color: var(--ant-color-text-secondary);

    background: var(--ant-color-fill-tertiary);
  `),ring:C(`acss-glpz7c`,[`.acss-glpz7c{transform:rotate(-90deg);flex-shrink:0;margin-inline-end:6px;}`],`
    transform: rotate(-90deg);
    flex-shrink: 0;
    margin-inline-end: 6px;
  `),ringProgress:C(`acss-nvgdih`,[`.acss-nvgdih{transition:stroke-dashoffset 240ms ease,stroke 240ms ease;}`],`
    transition:
      stroke-dashoffset 240ms ease,
      stroke 240ms ease;
  `),ringTrack:C(`acss-1kbqib0`,[`.acss-1kbqib0{stroke:var(--ant-color-fill-secondary);}`],`
    stroke: var(--ant-color-fill-secondary);
  `)},co=e=>({completed:e.filter(e=>e.status===`completed`).length,inProgress:e.find(e=>e.status===`processing`),total:e.length}),lo=(0,no.memo)(({stats:e})=>{let{completed:t,total:n}=e,r=n>0?t/n:0,i=n>0&&t===n?k.colorSuccess:k.colorInfo;return(0,K.jsxs)(`svg`,{className:so.ring,height:ro,width:ro,children:[(0,K.jsx)(`circle`,{className:so.ringTrack,cx:ro/2,cy:ro/2,fill:`none`,r:ao,strokeWidth:io}),(0,K.jsx)(`circle`,{className:so.ringProgress,cx:ro/2,cy:ro/2,fill:`none`,r:ao,stroke:i,strokeDasharray:oo,strokeDashoffset:oo*(1-r),strokeLinecap:`round`,strokeWidth:io})]})}),lo.displayName=`ClaudeCodeTaskProgressRing`,uo=(0,no.memo)(({apiName:e,args:t,partialArgs:n,pluginState:i,isArgumentsStreaming:a,isLoading:o})=>{let{t:s}=r(`plugin`),c=i?.todos?.items??[],l=(0,no.useMemo)(()=>co(c),[c]),u=l.total>0&&l.completed===l.total;if(e===M.TaskCreate){let e=(t||n)?.subject,r=a||o,i=s(r?`builtins.lobe-claude-code.task.create.loading`:`builtins.lobe-claude-code.task.create.completed`),c=e?`${i}${e}`:i;return(0,K.jsxs)(`div`,{className:T.root,children:[(0,K.jsx)(lo,{stats:l}),l.total>0&&(0,K.jsxs)(`span`,{className:so.countChip,children:[l.completed,`/`,l.total]}),(0,K.jsx)(`span`,{className:O(r&&D.shinyText),style:{marginInlineStart:6},children:c})]})}if(e===M.TaskUpdate){let e=t||n,r=e?.status;if(r){let t=e?.taskId,n=(t?c.find(e=>e.id===t)?.text:void 0)??e?.subject,i=s(r===`deleted`?`builtins.lobe-claude-code.task.updateDeleted`:r===`completed`?`builtins.lobe-claude-code.task.updateCompleted`:r===`in_progress`?`builtins.lobe-claude-code.task.updateInProgress`:`builtins.lobe-claude-code.task.updatePending`);return(0,K.jsxs)(`div`,{className:T.root,children:[(0,K.jsx)(lo,{stats:l}),l.total>0&&(0,K.jsxs)(`span`,{className:so.countChip,children:[l.completed,`/`,l.total]}),(0,K.jsx)(`span`,{className:O((a||o)&&D.shinyText),style:{marginInlineStart:l.total>0?6:0},children:n?`${i}: ${n}`:i})]})}let i=e?.taskId,u=e?.subject??(i?c.find(e=>e.id===i)?.text:void 0);if(u){let e=a||o,t=s(e?`builtins.lobe-claude-code.task.updateSubject.loading`:`builtins.lobe-claude-code.task.updateSubject.completed`);return(0,K.jsxs)(`div`,{className:T.root,children:[(0,K.jsx)(lo,{stats:l}),l.total>0&&(0,K.jsxs)(`span`,{className:so.countChip,children:[l.completed,`/`,l.total]}),(0,K.jsx)(`span`,{className:O(e&&D.shinyText),style:{marginInlineStart:l.total>0?6:0},children:`${t}: ${u}`})]})}}if(l.total===0){let r=t||n,i=a||o,c=(()=>{if(e===M.TaskUpdate){let e=r?.taskId;return e?s(i?`builtins.lobe-claude-code.task.update.loading`:`builtins.lobe-claude-code.task.update.completed`,{taskId:e}):s(`builtins.lobe-claude-code.todoWrite.todos`)}return s(i?`builtins.lobe-claude-code.task.list.loading`:`builtins.lobe-claude-code.task.list.completed`)})();return(0,K.jsx)(`div`,{className:O(T.root,i&&D.shinyText),children:c})}let d=l.inProgress?s(`builtins.lobe-claude-code.todoWrite.currentStep`):s(u?`builtins.lobe-claude-code.todoWrite.allDone`:`builtins.lobe-claude-code.todoWrite.todos`),f=l.inProgress?l.inProgress.text:u?void 0:`${l.completed}/${l.total}`;return(0,K.jsxs)(`div`,{className:T.root,children:[(0,K.jsx)(lo,{stats:l}),(0,K.jsx)(`span`,{className:O(o&&D.shinyText),children:d}),f&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`span`,{children:`:`}),(0,K.jsx)(`span`,{className:so.chip,children:f})]})]})}),uo.displayName=`ClaudeCodeTaskInspector`})),po,mo,ho,go=e((()=>{E(),A(),po=t(o()),i(),mo=t(s()),ho=(0,po.memo)(({args:e,partialArgs:t,isArgumentsStreaming:n,isLoading:i})=>{let{t:a}=r(`plugin`),o=e?.taskId??t?.taskId;return(0,mo.jsx)(`div`,{className:O(T.root,(n||i)&&D.shinyText),children:a(`builtins.lobe-claude-code.task.getLabel`,{taskId:o??``})})}),ho.displayName=`ClaudeCodeTaskGetInspector`})),_o,vo,yo,bo,xo=e((()=>{S(),E(),A(),_o=t(o()),i(),j(),vo=t(s()),yo={chip:C(`acss-14jqbsf`,[`.acss-14jqbsf{overflow:hidden;display:inline-flex;flex-shrink:1;align-items:center;min-width:0;margin-inline-start:6px;padding-block:1px;padding-inline:8px;border-radius:999px;font-family:var(--ant-font-family-code);font-size:12px;color:var(--ant-color-text);text-overflow:ellipsis;white-space:nowrap;background:var(--ant-color-fill-tertiary);}`],`
    overflow: hidden;
    display: inline-flex;
    flex-shrink: 1;
    align-items: center;

    min-width: 0;
    margin-inline-start: 6px;
    padding-block: 1px;
    padding-inline: 8px;
    border-radius: 999px;

    font-family: var(--ant-font-family-code);
    font-size: 12px;
    color: var(--ant-color-text);
    text-overflow: ellipsis;
    white-space: nowrap;

    background: var(--ant-color-fill-tertiary);
  `)},bo=(0,_o.memo)(({args:e,partialArgs:t,isArgumentsStreaming:n,isLoading:i})=>{let{t:a}=r(`plugin`),o=a(M.TaskOutput),s=(e?.task_id??t?.task_id)?.trim(),c=n||i;return n&&!s?(0,vo.jsx)(`div`,{className:O(T.root,D.shinyText),children:o}):(0,vo.jsxs)(`div`,{className:T.root,children:[(0,vo.jsx)(`span`,{className:O(c&&D.shinyText),children:s?`${o}:`:o}),s&&(0,vo.jsx)(`span`,{className:yo.chip,children:s})]})}),bo.displayName=`ClaudeCodeTaskOutputInspector`})),So,Co,wo,To,Eo=e((()=>{S(),E(),A(),So=t(o()),i(),j(),Co=t(s()),wo={chip:C(`acss-14jqbsf`,[`.acss-14jqbsf{overflow:hidden;display:inline-flex;flex-shrink:1;align-items:center;min-width:0;margin-inline-start:6px;padding-block:1px;padding-inline:8px;border-radius:999px;font-family:var(--ant-font-family-code);font-size:12px;color:var(--ant-color-text);text-overflow:ellipsis;white-space:nowrap;background:var(--ant-color-fill-tertiary);}`],`
    overflow: hidden;
    display: inline-flex;
    flex-shrink: 1;
    align-items: center;

    min-width: 0;
    margin-inline-start: 6px;
    padding-block: 1px;
    padding-inline: 8px;
    border-radius: 999px;

    font-family: var(--ant-font-family-code);
    font-size: 12px;
    color: var(--ant-color-text);
    text-overflow: ellipsis;
    white-space: nowrap;

    background: var(--ant-color-fill-tertiary);
  `)},To=(0,So.memo)(({args:e,partialArgs:t,isArgumentsStreaming:n,isLoading:i})=>{let{t:a}=r(`plugin`),o=a(M.TaskStop),s=e??t,c=(s?.task_id??s?.shell_id)?.trim(),l=n||i;return n&&!c?(0,Co.jsx)(`div`,{className:O(T.root,D.shinyText),children:o}):(0,Co.jsxs)(`div`,{className:T.root,children:[(0,Co.jsx)(`span`,{className:O(l&&D.shinyText),children:c?`${o}:`:o}),c&&(0,Co.jsx)(`span`,{className:wo.chip,children:c})]})}),To.displayName=`ClaudeCodeTaskStopInspector`})),Do,Oo,ko=e((()=>{Do=e=>{let t=(e?.todos??[]).filter(Boolean),n=t.length,r=t.filter(e=>e.status===`completed`).length,i=t.find(e=>e.status===`in_progress`);if(i)return{completed:r,detail:i.activeForm||i.content,state:`inProgress`,total:n};if(n>0&&r===n)return{completed:r,state:`allDone`,total:n};let a=[...t].reverse().find(e=>e.status===`completed`);return a?{completed:r,detail:a.content,state:`completedStep`,total:n}:{completed:r,state:`idle`,total:n}},Oo={allDone:`builtins.lobe-claude-code.todoWrite.allDone`,completedStep:`builtins.lobe-claude-code.todoWrite.completedStep`,idle:`builtins.lobe-claude-code.todoWrite.todos`,inProgress:`builtins.lobe-claude-code.todoWrite.currentStep`}})),Ao,jo,Mo,No=e((()=>{Ut(),E(),A(),Ao=t(o()),i(),ko(),jo=t(s()),Mo=(0,Ao.memo)(({args:e,partialArgs:t,isArgumentsStreaming:n,isLoading:i})=>{let{t:a}=r(`plugin`),o=(0,Ao.useMemo)(()=>Do(e||t),[e,t]),s=a(Oo[o.state]);return n&&o.total===0?(0,jo.jsx)(`div`,{className:O(T.root,D.shinyText),children:s}):(0,jo.jsx)(`div`,{className:T.root,children:(0,jo.jsx)(Vt,{label:s,shiny:n||i,summary:o})})}),Mo.displayName=`ClaudeCodeTodoWriteInspector`})),Po,Fo,Io,Lo,Ro,zo,Bo=e((()=>{S(),E(),A(),Po=t(o()),i(),j(),Fo=t(s()),Io=`select:`,Lo={baseline:C(`acss-vp6gf7`,[`.acss-vp6gf7{align-items:baseline;}`],`
    align-items: baseline;
  `),tag:C(`acss-lnyrsr`,[`.acss-lnyrsr{padding-block:2px;padding-inline:10px;border-radius:999px;font-family:var(--ant-font-family-code);font-size:12px;color:var(--ant-color-text);background:var(--ant-color-fill-tertiary);}`],`
    padding-block: 2px;
    padding-inline: 10px;
    border-radius: 999px;

    font-family: var(--ant-font-family-code);
    font-size: 12px;
    color: var(--ant-color-text);

    background: var(--ant-color-fill-tertiary);
  `),tagsList:C(`acss-1wsxn92`,[`.acss-1wsxn92{display:inline-flex;flex-shrink:1;gap:4px;align-items:center;min-width:0;margin-inline-start:6px;white-space:nowrap;}`],`
    display: inline-flex;
    flex-shrink: 1;
    gap: 4px;
    align-items: center;

    min-width: 0;
    margin-inline-start: 6px;

    white-space: nowrap;
  `)},Ro=e=>{if(!e)return;let t=e.trim();if(!t.toLowerCase().startsWith(Io))return{names:null,raw:t};let n=t.slice(7).split(`,`).map(e=>e.trim()).filter(Boolean);return{names:n.length>0?n:null,raw:t}},zo=(0,Po.memo)(({args:e,partialArgs:t,isArgumentsStreaming:n,isLoading:i})=>{let{t:a}=r(`plugin`),o=a(M.ToolSearch),s=Ro(e?.query||t?.query);if(n&&!s)return(0,Fo.jsx)(`div`,{className:O(T.root,D.shinyText),children:o});let c=n||i;return s?.names?(0,Fo.jsxs)(`div`,{className:O(T.root,Lo.baseline),children:[(0,Fo.jsxs)(`span`,{className:O(c&&D.shinyText),children:[o,`:`]}),(0,Fo.jsx)(`span`,{className:Lo.tagsList,children:s.names.map((e,t)=>(0,Fo.jsx)(`span`,{className:Lo.tag,children:e},`${t}-${e}`))})]}):(0,Fo.jsxs)(`div`,{className:T.root,children:[(0,Fo.jsx)(`span`,{className:O(c&&D.shinyText),children:o}),s&&(0,Fo.jsxs)(Fo.Fragment,{children:[(0,Fo.jsx)(`span`,{children:`: `}),(0,Fo.jsx)(`span`,{className:Je.primary,children:s.raw})]})]})}),zo.displayName=`ClaudeCodeToolSearchInspector`})),Vo,Ho,Uo,Wo,Go,Ko=e((()=>{S(),E(),A(),x(),Vo=t(o()),i(),j(),Ho=t(s()),Uo={chip:C(`acss-13abneo`,[`.acss-13abneo{overflow:hidden;display:inline-flex;flex-shrink:1;gap:6px;align-items:center;min-width:0;margin-inline-start:6px;padding-block:2px;padding-inline:10px;border-radius:999px;background:var(--ant-color-fill-tertiary);}`],`
    overflow: hidden;
    display: inline-flex;
    flex-shrink: 1;
    gap: 6px;
    align-items: center;

    min-width: 0;
    margin-inline-start: 6px;
    padding-block: 2px;
    padding-inline: 10px;
    border-radius: 999px;

    background: var(--ant-color-fill-tertiary);
  `),icon:C(`acss-mohja4`,[`.acss-mohja4{flex-shrink:0;color:var(--ant-color-text-description);}`],`
    flex-shrink: 0;
    color: var(--ant-color-text-description);
  `),url:C(`acss-1rw7642`,[`.acss-1rw7642{overflow:hidden;min-width:0;font-family:var(--ant-font-family-code);font-size:12px;color:var(--ant-color-text);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    min-width: 0;

    font-family: var(--ant-font-family-code);
    font-size: 12px;
    color: var(--ant-color-text);
    text-overflow: ellipsis;
    white-space: nowrap;
  `)},Wo=e=>e.replace(/^https?:\/\//i,``),Go=(0,Vo.memo)(({args:e,partialArgs:t,isArgumentsStreaming:n,isLoading:i})=>{let{t:a}=r(`plugin`),o=a(M.WebFetch),s=(e?.url||t?.url||``).trim();if(n&&!s)return(0,Ho.jsx)(`div`,{className:O(T.root,D.shinyText),children:o});let c=n||i;return(0,Ho.jsxs)(`div`,{className:T.root,children:[(0,Ho.jsx)(`span`,{className:O(c&&D.shinyText),children:s?`${o}:`:o}),s&&(0,Ho.jsxs)(`span`,{className:Uo.chip,children:[(0,Ho.jsx)(ve,{className:Uo.icon,size:14}),(0,Ho.jsx)(`span`,{className:Uo.url,children:Wo(s)})]})]})}),Go.displayName=`ClaudeCodeWebFetchInspector`})),qo,Jo,Yo,Xo=e((()=>{E(),A(),qo=t(o()),i(),j(),Jo=t(s()),Yo=(0,qo.memo)(({args:e,partialArgs:t,isArgumentsStreaming:n,isLoading:i})=>{let{t:a}=r(`plugin`),o=a(M.WebSearch),s=(e?.query||t?.query||``).trim();if(n&&!s)return(0,Jo.jsx)(`div`,{className:O(T.root,D.shinyText),children:o});let c=n||i;return(0,Jo.jsxs)(`div`,{className:T.root,children:[(0,Jo.jsx)(`span`,{className:O(c&&D.shinyText),children:o}),s&&(0,Jo.jsxs)(Jo.Fragment,{children:[(0,Jo.jsx)(`span`,{children:`: `}),(0,Jo.jsx)(`span`,{className:Je.primary,children:s})]})]})}),Yo.displayName=`ClaudeCodeWebSearchInspector`})),Zo,Qo,$o,es,ts,ns,rs,is,as,os,ss,cs=e((()=>{S(),E(),A(),x(),Zo=t(o()),i(),Qo=t(s()),$o={completed:`builtins.lobe-claude-code.worktree.create.completed`,failed:`builtins.lobe-claude-code.worktree.create.failed`,idle:`builtins.lobe-claude-code.worktree.create.idle`,loading:`builtins.lobe-claude-code.worktree.create.loading`},es={completed:`builtins.lobe-claude-code.worktree.enter.completed`,failed:`builtins.lobe-claude-code.worktree.enter.failed`,idle:`builtins.lobe-claude-code.worktree.enter.idle`,loading:`builtins.lobe-claude-code.worktree.enter.loading`},ts={completed:`builtins.lobe-claude-code.worktree.exit.completed`,failed:`builtins.lobe-claude-code.worktree.exit.failed`,idle:`builtins.lobe-claude-code.worktree.exit.idle`,loading:`builtins.lobe-claude-code.worktree.exit.loading`},ns={completed:`builtins.lobe-claude-code.worktree.remove.completed`,failed:`builtins.lobe-claude-code.worktree.remove.failed`,idle:`builtins.lobe-claude-code.worktree.remove.idle`,loading:`builtins.lobe-claude-code.worktree.remove.loading`},rs={chip:C(`acss-pnj1bd`,[`.acss-pnj1bd{overflow:hidden;display:inline-flex;flex-shrink:1;gap:6px;align-items:center;min-width:0;max-width:min(420px, 60vw);margin-inline-start:6px;padding-block:2px;padding-inline:10px;border-radius:999px;background:var(--ant-color-fill-tertiary);}`],`
    overflow: hidden;
    display: inline-flex;
    flex-shrink: 1;
    gap: 6px;
    align-items: center;

    min-width: 0;
    max-width: min(420px, 60vw);
    margin-inline-start: 6px;
    padding-block: 2px;
    padding-inline: 10px;
    border-radius: 999px;

    background: var(--ant-color-fill-tertiary);
  `),icon:C(`acss-mohja4`,[`.acss-mohja4{flex-shrink:0;color:var(--ant-color-text-description);}`],`
    flex-shrink: 0;
    color: var(--ant-color-text-description);
  `),leadingIcon:C(`acss-1ggo7z5`,[`.acss-1ggo7z5{margin-inline-end:6px;}`],`
    margin-inline-end: 6px;
  `),risk:C(`acss-wf7ox3`,[`.acss-wf7ox3{flex-shrink:0;margin-inline-start:6px;padding-block:1px;padding-inline:6px;border-radius:999px;font-size:12px;color:var(--ant-color-error);background:var(--ant-color-error-bg);}`],`
    flex-shrink: 0;

    margin-inline-start: 6px;
    padding-block: 1px;
    padding-inline: 6px;
    border-radius: 999px;

    font-size: 12px;
    color: var(--ant-color-error);

    background: var(--ant-color-error-bg);
  `),target:C(`acss-1rw7642`,[`.acss-1rw7642{overflow:hidden;min-width:0;font-family:var(--ant-font-family-code);font-size:12px;color:var(--ant-color-text);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    min-width: 0;

    font-family: var(--ant-font-family-code);
    font-size: 12px;
    color: var(--ant-color-text);
    text-overflow: ellipsis;
    white-space: nowrap;
  `)},is=(e,t,n,r)=>e||t?`loading`:n?`failed`:r?`completed`:`idle`,as=(0,Zo.memo)(({target:e})=>(0,Qo.jsxs)(`span`,{className:rs.chip,title:e,children:[(0,Qo.jsx)(Fe,{className:rs.icon,size:12}),(0,Qo.jsx)(`span`,{className:rs.target,children:e})]})),as.displayName=`ClaudeCodeWorktreeTarget`,os=(0,Zo.memo)(({args:e,partialArgs:t,isArgumentsStreaming:n,isLoading:i,result:a})=>{let{t:o}=r(`plugin`),s=e?.name?.trim()||t?.name?.trim(),c=e?.path?.trim()||t?.path?.trim(),l=s||c,u=is(n,i,!!a?.error,!!a),d=o((c?es:$o)[u]);return(0,Qo.jsxs)(`div`,{className:T.root,children:[(0,Qo.jsx)(`span`,{className:O((n||i)&&D.shinyText),children:d}),l&&(0,Qo.jsx)(as,{target:l})]})}),os.displayName=`ClaudeCodeEnterWorktreeInspector`,ss=(0,Zo.memo)(({args:e,partialArgs:t,isArgumentsStreaming:n,isLoading:i,result:a})=>{let{t:o}=r(`plugin`),s=e?.action||t?.action,c=e?.discard_changes??t?.discard_changes,l=is(n,i,!!a?.error,!!a),u=o((s===`remove`?ns:ts)[l]);return(0,Qo.jsxs)(`div`,{className:T.root,children:[(0,Qo.jsx)(Fe,{className:O(rs.icon,rs.leadingIcon),size:12}),(0,Qo.jsx)(`span`,{className:O((n||i)&&D.shinyText),children:u}),s===`remove`&&c&&(0,Qo.jsx)(`span`,{className:rs.risk,children:o(`builtins.lobe-claude-code.worktree.discardChanges`)})]})}),ss.displayName=`ClaudeCodeExitWorktreeInspector`})),ls,us,ds,fs,ps,ms=e((()=>{ni(),ls=t(o()),j(),us=t(s()),ds=e=>{let{content:t,file_path:n}=e??{};return{content:t,path:n}},fs=ei(M.Write),ps=(0,ls.memo)(e=>(0,us.jsx)(fs,{...e,args:ds(e.args),partialArgs:ds(e.partialArgs)})),ps.displayName=`ClaudeCodeWriteInspector`})),hs,gs,_s=e((()=>{ni(),j(),fi(),oa(),va(),wa(),Da(),Na(),za(),Ga(),Xa(),to(),fo(),go(),xo(),Eo(),No(),Bo(),Ko(),Xo(),cs(),ms(),hs={[M.Agent]:di,[M.AskUserQuestion]:aa,[M.Bash]:kr(M.Bash),[M.Edit]:Ca,[M.EnterWorktree]:os,[M.ExitWorktree]:ss,[M.Glob]:Un(M.Glob),[M.Grep]:Yn({noResultsKey:`No results`,translationKey:M.Grep}),[M.Monitor]:Ma,[M.Read]:Ra,[M.ScheduleWakeup]:Wa,[M.SendMessage]:Ya,[M.Skill]:eo,[M.TaskCreate]:uo,[M.TaskGet]:ho,[M.TaskList]:uo,[M.TaskOutput]:bo,[M.TaskStop]:To,[M.TaskUpdate]:uo,[M.TodoWrite]:Mo,[M.ToolSearch]:zo,[M.WebFetch]:Go,[M.WebSearch]:Yo,[M.Write]:ps,..._a,...Ea},gs=new Proxy(hs,{get:(e,t)=>{if(typeof t==`string`)return t in e?e[t]:_a[t]??Ea[t]}})})),vs,ys,bs,xs=e((()=>{ea(),vs=t(o()),i(),nn(),en(),Pt(),ys=t(s()),bs=(0,vs.memo)(e=>{let{t}=r(`tool`),{actionsPortalTarget:n,args:i,disabled:a,messageId:o,onInteractionAction:s}=e,c=tn(e=>$t.getDbMessageById(o)(e)?.pluginState?.[xi]),l=Mt(e=>e.setInterventionDraft),u=Qi({args:i,countdownMs:bi,disabled:a,onInteractionAction:s,persistedDraft:c,writeDraft:(0,vs.useCallback)(e=>l(o,e),[o,l])}),d={customPlaceholder:t(`claudeCode.askUserQuestion.customOption.placeholder`),escapeBack:t(`claudeCode.askUserQuestion.escape.back`),escapeEnter:t(`claudeCode.askUserQuestion.escape.enter`),escapePlaceholder:t(`claudeCode.askUserQuestion.escape.placeholder`),multiSelectTag:t(`claudeCode.askUserQuestion.multiSelectTag`),recommendedTag:t(`claudeCode.askUserQuestion.recommendedTag`),skip:t(`claudeCode.askUserQuestion.skip`),submit:t(`claudeCode.askUserQuestion.submit`),supplementEnter:t(`claudeCode.askUserQuestion.supplement.enter`),supplementPlaceholder:t(`claudeCode.askUserQuestion.supplement.placeholder`),timeExpired:t(`claudeCode.askUserQuestion.timeExpired`),timeRemaining:e=>t(`claudeCode.askUserQuestion.timeRemaining`,{time:e})};return(0,ys.jsx)(Li,{...u,showCountdown:!0,actionsPortalTarget:n,labels:d})}),bs.displayName=`CCAskUserQuestionIntervention`})),Ss,Cs=e((()=>{j(),xs(),Ss={[M.AskUserQuestion]:bs}})),ws,Ts,Es,Ds,Os,ks,q,As,js,Ms,Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs,Zs=e((()=>{Ve(),Ge(),En(),ws=[`items`,`nodes`,`results`,`pullRequests`,`pull_requests`,`issues`,`repositories`,`branches`,`commits`,`comments`,`reviews`],Ts=[`repository_full_name`,`repository`,`full_name`,`owner`,`base`,`head`,`base_ref`,`head_ref`,`branch`,`state`,`draft`,`merged`,`mergeable`,`private`,`visibility`,`language`,`additions`,`deletions`,`changed_files`,`comments`,`review_comments`],Es=new Set([`created_at`,`updated_at`,`closed_at`,`merged_at`,`pushed_at`]),Ds=e=>e.replaceAll(`_`,` `).replaceAll(/([A-Z])/g,` $1`).replace(/^./u,e=>e.toUpperCase()).trim().replace(`Url`,`URL`).replace(`Id`,`ID`),Os=e=>{if(typeof e!=`string`)return;let t=e.trim();return t.length>0?t:void 0},ks=e=>{if(typeof e==`string`)return e.trim();if(e==null)return``;try{return JSON.stringify(e,null,2)}catch{return String(e)}},q=e=>{let t=Os(e);if(t)return t;if(typeof e==`number`)return String(e);if(typeof e==`boolean`)return e?`Yes`:`No`;if(w(e))for(let t of[`full_name`,`name`,`title`,`login`,`ref`,`id`]){let n=q(e[t]);if(n)return n}},As=e=>{let t=/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}(?::\d{2})?)/u.exec(e);return t?`${t[1]} ${t[2]}`:e},js=(e,t)=>{let n=q(e[t]);if(n)return{key:t,label:Ds(t),value:Es.has(t)?As(n):n}},Ms=(e,t)=>t.map(t=>js(e,t)).filter(e=>!!e),Ns=e=>typeof e==`string`?e:w(e)&&(Os(e.text)||Os(e.content))||ks(e),Ps=e=>qe(e),Fs=e=>{if(typeof e!=`string`)return e;let t=e.trim();if(t)return Ps(t)??t},Is=e=>w(e)?`Ok`in e?e.Ok:`Err`in e?e.Err:`ok`in e?e.ok:`error`in e&&Object.keys(e).length===1?e.error:e:e,Ls=e=>{let t=Is(Fs(e));return Array.isArray(t)?Fs(t.map(Ns).filter(Boolean).join(`

`))??t:w(t)&&Array.isArray(t.content)?Fs(t.content.map(Ns).filter(Boolean).join(`

`))??t:t},Rs=e=>!!(e&&/^https?:\/\/github\.com\//iu.test(e.trim())),zs=e=>{let t=q(e.html_url)||q(e.webUrl);if(t)return t;let n=q(e.url);return Rs(n)?n:void 0},Bs=e=>Array.isArray(e)?e.map(e=>{if(!w(e))return;let t=zs(e);if(t)return{title:q(e.title)||q(e.name)||t,url:t}}).filter(e=>!!e):[],Vs=(e,t)=>{let n=q(e.repository_full_name)||q(e.full_name)||q(e.repository);if(n)return n;if(!w(t))return;let r=q(t.repository_full_name)||q(t.full_name)||q(t.repository)||q(t.repo);if(r)return r;let i=q(t.owner),a=q(t.name);return i&&a?`${i}/${a}`:void 0},Hs=(e,t,n)=>{let r=t||``;return r.includes(`pull_request`)||n?.includes(`/pull/`)||`mergeable`in e||`draft`in e?`Pull request`:r.includes(`issue`)||n?.includes(`/issues/`)?`Issue`:r.includes(`repository`)||`full_name`in e?`Repository`:r.includes(`branch`)||`ref`in e?`Branch`:r.includes(`commit`)||`sha`in e?`Commit`:r.includes(`comment`)?`Comment`:`Result`},Us=e=>{if(e.merged===!0)return`Merged`;if(e.draft===!0)return`Draft`;let t=q(e.state)||q(e.status);return t?t.replace(/^./u,e=>e.toUpperCase()):void 0},Ws=e=>{let t=q(e.number);if(t)return`#${t}`;let n=q(e.sha);return n?n.slice(0,12):q(e.id)},Gs=(e,t,n)=>{let r=zs(e),i=Hs(e,n,r),a=Vs(e,t),o=q(e.title)||q(e.name)||q(e.full_name)||q(e.path)||q(e.message),s=Ws(e),c=Us(e),l=q(e.body)||q(e.description)||q(e.content),u=[...a?[{key:`repository`,label:`Repository`,value:a}]:[],...Ms(e,Ts).filter(e=>e.value!==a&&!((e.key===`state`||e.key===`status`)&&e.value.toLowerCase()===c?.toLowerCase()))],d=Bs(e.links),f=q(e.updated_at)||q(e.updatedAt);if(!(!s&&!o&&!r&&!c&&!l&&!f&&u.length===0&&d.length===0))return{description:l,fields:u,id:s,kind:i,links:d,state:c,title:o,updatedAt:f,url:r}},Ks=[`id`,`number`,`title`,`name`,`full_name`,`sha`,`html_url`,`url`],qs=e=>Ks.some(t=>!!q(e[t])),Js=e=>{if(Array.isArray(e))return e.filter(w);if(!w(e))return[];if(!qs(e))for(let t of ws){let n=e[t];if(Array.isArray(n))return n.filter(w)}return[e]},Ys=e=>{if(e)return typeof e==`string`?e.trim()||void 0:w(e)&&(q(e.message)||q(e.error))||ks(e)},Xs=({apiName:e,args:t,content:n,pluginError:r})=>{let i=Ls(n),a=Js(i).map(n=>Gs(n,t,e)).filter(e=>!!e),o=typeof i==`string`?i:void 0,s=i!==void 0&&typeof i!=`string`&&a.length===0?ks(i):void 0;return{actionLabel:Tn(Cn(e||``)),errorText:Ys(r),rawResultJson:s,resultEntities:a,resultText:o}}})),Qs,J,Y,$s,ec,tc,nc,rc,ic,ac=e((()=>{S(),an(),m(),b(),Wt(),g(),nt(),bt(),_(),x(),Qs=t(o()),i(),Zs(),J=t(s()),Y={container:C(`acss-872usz`,[`.acss-872usz{overflow:hidden;min-width:0;}`],`
    overflow: hidden;
    min-width: 0;
  `),description:C(`acss-gxewn8`,[`.acss-gxewn8{overflow:auto;max-height:180px;padding-block:8px;padding-inline:10px;border:1px solid var(--ant-color-border-secondary);border-radius:6px;background:var(--ant-color-fill-quaternary);}`],`
    overflow: auto;

    max-height: 180px;
    padding-block: 8px;
    padding-inline: 10px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: 6px;

    background: var(--ant-color-fill-quaternary);
  `),entityHeader:C(`acss-lw41on`,[`.acss-lw41on{display:flex;gap:12px;align-items:center;justify-content:space-between;min-width:0;}`],`
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: space-between;

    min-width: 0;
  `),headLeft:C(`acss-uhmsk3`,[`.acss-uhmsk3{display:flex;gap:6px;align-items:center;min-width:0;}`],`
    display: flex;
    gap: 6px;
    align-items: center;
    min-width: 0;
  `),linkRow:C(`acss-ec5vb5`,[`.acss-ec5vb5{overflow:hidden;display:flex;gap:8px;align-items:center;min-width:0;padding-block:6px;padding-inline:8px;border-radius:6px;color:var(--ant-color-text);background:var(--ant-color-fill-quaternary);}`,`.acss-ec5vb5:hover{color:var(--ant-color-link);background:var(--ant-color-fill-tertiary);}`],`
    overflow: hidden;
    display: flex;
    gap: 8px;
    align-items: center;

    min-width: 0;
    padding-block: 6px;
    padding-inline: 8px;
    border-radius: 6px;

    color: var(--ant-color-text);

    background: var(--ant-color-fill-quaternary);

    &:hover {
      color: var(--ant-color-link);
      background: var(--ant-color-fill-tertiary);
    }
  `),linkText:C(`acss-872usz`,[`.acss-872usz{overflow:hidden;min-width:0;}`],`
    overflow: hidden;
    min-width: 0;
  `),metaItem:C(`acss-tyqxyv`,[`.acss-tyqxyv{display:inline-flex;gap:4px;align-items:baseline;min-width:0;font-size:12px;line-height:1.5;}`],`
    display: inline-flex;
    gap: 4px;
    align-items: baseline;

    min-width: 0;

    font-size: 12px;
    line-height: 1.5;
  `),metaLabel:C(`acss-18qijob`,[`.acss-18qijob{flex-shrink:0;color:var(--ant-color-text-tertiary);}`],`
    flex-shrink: 0;
    color: var(--ant-color-text-tertiary);
  `),metaRow:C(`acss-kamtu7`,[`.acss-kamtu7{display:flex;flex-wrap:wrap;gap:4px 16px;align-items:baseline;min-width:0;}`],`
    display: flex;
    flex-wrap: wrap;
    gap: 4px 16px;
    align-items: baseline;

    min-width: 0;
  `),metaValue:C(`acss-1a67lit`,[`.acss-1a67lit{overflow:hidden;min-width:0;color:var(--ant-color-text-secondary);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    min-width: 0;

    color: var(--ant-color-text-secondary);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),rawDetails:C(`acss-jmq2ot`,[`.acss-jmq2ot{font-size:12px;color:var(--ant-color-text-secondary);}`,`.acss-jmq2ot summary{cursor:pointer;width:fit-content;margin-block-end:6px;}`],`
    font-size: 12px;
    color: var(--ant-color-text-secondary);

    summary {
      cursor: pointer;
      width: fit-content;
      margin-block-end: 6px;
    }
  `),sectionLabel:C(`acss-um2tu2`,[`.acss-um2tu2{font-size:12px;color:var(--ant-color-text-secondary);}`],`
    font-size: 12px;
    color: var(--ant-color-text-secondary);
  `),timeItem:C(`acss-rqm08e`,[`.acss-rqm08e{flex-shrink:0;font-size:12px;color:var(--ant-color-text-tertiary);white-space:nowrap;}`],`
    flex-shrink: 0;
    font-size: 12px;
    color: var(--ant-color-text-tertiary);
    white-space: nowrap;
  `),titleLink:C(`acss-1d43aao`,[`.acss-1d43aao{display:inline-flex;gap:4px;align-items:center;min-width:0;color:inherit;}`,`.acss-1d43aao:hover{color:var(--ant-color-link);}`],`
    display: inline-flex;
    gap: 4px;
    align-items: center;

    min-width: 0;

    color: inherit;

    &:hover {
      color: var(--ant-color-link);
    }
  `)},$s=e=>e.length>0,ec=(0,Qs.memo)(({children:e,title:t})=>(0,J.jsxs)(d,{gap:6,children:[(0,J.jsx)(v,{className:Y.sectionLabel,children:t}),e]})),ec.displayName=`GitHubRenderSection`,tc=(0,Qs.memo)(({fields:e})=>$s(e)?(0,J.jsx)(`div`,{className:Y.metaRow,children:e.map(e=>(0,J.jsxs)(`span`,{className:Y.metaItem,children:[(0,J.jsx)(`span`,{className:Y.metaLabel,children:e.label}),(0,J.jsx)(`span`,{className:Y.metaValue,title:e.value,children:e.value})]},`${e.key}:${e.value}`))}):null),tc.displayName=`GitHubRenderMetaRow`,nc=(0,Qs.memo)(({links:e})=>$s(e)?(0,J.jsx)(d,{gap:4,children:e.map(e=>(0,J.jsxs)(`a`,{className:Y.linkRow,href:e.url,rel:`noreferrer`,target:`_blank`,children:[(0,J.jsx)(h,{icon:we,size:13}),(0,J.jsx)(v,{ellipsis:!0,className:Y.linkText,title:e.title,children:e.title}),(0,J.jsx)(h,{icon:De,size:12})]},`${e.title}:${e.url}`))}):null),nc.displayName=`GitHubRenderLinkList`,rc=(0,Qs.memo)(({entity:e})=>{let{t}=r(`plugin`),{title:n,id:i,url:a,state:o,updatedAt:s,kind:c}=e;return(0,J.jsxs)(u,{gap:8,padding:10,variant:`outlined`,width:`100%`,children:[(0,J.jsxs)(`div`,{className:Y.entityHeader,children:[(0,J.jsxs)(`div`,{className:Y.headLeft,children:[(0,J.jsx)(xt,{size:`small`,children:c}),n&&(a?(0,J.jsxs)(`a`,{className:Y.titleLink,href:a,rel:`noreferrer`,target:`_blank`,children:[(0,J.jsx)(v,{ellipsis:!0,weight:600,children:n}),(0,J.jsx)(h,{icon:De,size:12})]}):(0,J.jsx)(v,{ellipsis:!0,weight:600,children:n})),i&&(0,J.jsx)(xt,{size:`small`,children:i}),o&&(0,J.jsx)(xt,{size:`small`,variant:`outlined`,children:o})]}),s&&(0,J.jsx)(`span`,{className:Y.timeItem,title:As(s),children:t(`builtins.github.render.updatedAt`,{time:rn(s)})})]}),(0,J.jsx)(tc,{fields:e.fields}),e.description&&(0,J.jsx)(`div`,{className:Y.description,children:(0,J.jsx)(rt,{fontSize:13,variant:`chat`,children:e.description})}),(0,J.jsx)(nc,{links:e.links})]})}),rc.displayName=`GitHubRenderEntityCard`,ic=(0,Qs.memo)(({apiName:e,args:t,content:n,pluginError:i})=>{let{t:a}=r(`plugin`),o=(0,Qs.useMemo)(()=>Xs({apiName:e,args:t,content:n,pluginError:i}),[e,t,n,i]);return!($s(o.resultEntities)||o.resultText||o.rawResultJson)&&!o.errorText?null:(0,J.jsxs)(d,{className:Y.container,gap:12,children:[$s(o.resultEntities)&&(0,J.jsx)(d,{gap:8,children:o.resultEntities.map((e,t)=>(0,J.jsx)(rc,{entity:e},`${e.id||e.title||`entity`}:${t}`))}),o.resultText&&(0,J.jsx)(Be,{wrap:!0,language:`text`,showLanguage:!1,style:{maxHeight:220,overflow:`auto`,paddingInline:8},variant:`filled`,children:o.resultText}),o.rawResultJson&&(0,J.jsxs)(`details`,{className:Y.rawDetails,children:[(0,J.jsx)(`summary`,{children:a(`builtins.github.render.rawResult`)}),(0,J.jsx)(Be,{wrap:!0,language:`json`,style:{maxHeight:260,overflow:`auto`,paddingInline:8},variant:`filled`,children:o.rawResultJson})]}),o.errorText&&(0,J.jsx)(ec,{title:a(`builtins.github.render.error`),children:(0,J.jsx)(Be,{wrap:!0,language:`text`,showLanguage:!1,style:{maxHeight:220,overflow:`auto`,paddingInline:8},variant:`filled`,children:o.errorText})})]})}),ic.displayName=`GitHubRender`})),oc,sc,cc,lc,uc,dc,fc,pc,mc,hc,gc,X,_c,vc,yc,bc,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc,Pc,Fc=e((()=>{Ve(),Ge(),mt(),oc={0:`None`,1:`Urgent`,2:`High`,3:`Medium`,4:`Low`},sc=/^(issue|project|document|initiative|milestone|team|user|cycle):(.+)$/iu,cc=[`id`,`title`,`name`,`state`,`status`,`team`,`project`,`assignee`,`cycle`,`milestone`,`priority`,`parentId`,`query`,`url`],lc=[`state`,`status`,`team`,`project`,`assignee`,`cycle`,`milestone`,`priority`,`parentId`],uc=[`issues`,`items`,`nodes`,`results`,`documents`,`projects`,`comments`,`users`,`teams`],dc=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/iu,fc=e=>dc.test(e),pc=e=>e.replaceAll(/([A-Z])/g,` $1`).replace(/^./u,e=>e.toUpperCase()).trim(),mc=e=>e.replace(sc,`$2`),hc=e=>{if(typeof e!=`string`)return;let t=e.trim();return t.length>0?t:void 0},gc=e=>{if(typeof e==`string`)return e.trim();if(e==null)return``;try{return JSON.stringify(e,null,2)}catch{return String(e)}},X=(e,t)=>{let n=hc(e);if(n)return t===`id`?mc(n):n;if(typeof e==`number`)return t===`priority`?oc[e]??String(e):String(e);if(typeof e==`boolean`)return e?`Yes`:`No`;if(w(e))for(let t of[`name`,`title`,`displayName`,`identifier`,`id`]){let n=X(e[t],t);if(n)return n}},_c=new Set([`createdAt`,`updatedAt`,`completedAt`,`startedAt`,`canceledAt`,`archivedAt`,`dueDate`]),vc=e=>{let t=/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}(?::\d{2})?)/u.exec(e);return t?`${t[1]} ${t[2]}`:e},yc=(e,t)=>{let n=X(e[t],t);if(n)return{key:t,label:t===`id`?`ID`:t===`url`?`URL`:pc(t),value:_c.has(t)?vc(n):n}},bc=(e,t)=>t.map(t=>yc(e,t)).filter(e=>!!e),xc=e=>w(e)?bc(e,cc):[],Sc=e=>typeof e==`string`?e:w(e)&&(hc(e.text)||hc(e.content))||gc(e),Cc=e=>qe(e),wc=e=>{if(typeof e!=`string`)return e;let t=e.trim();if(t)return Cc(t)??t},Tc=e=>w(e)?`Ok`in e?e.Ok:`Err`in e?e.Err:`ok`in e?e.ok:`error`in e&&Object.keys(e).length===1?e.error:e:e,Ec=e=>{let t=Tc(wc(e));return Array.isArray(t)?wc(t.map(Sc).filter(Boolean).join(`

`))??t:w(t)&&Array.isArray(t.content)?wc(t.content.map(Sc).filter(Boolean).join(`

`))??t:t},Dc=e=>X(e.url,`url`)||X(e.webUrl,`url`),Oc=e=>Array.isArray(e)?e.map(e=>{if(!w(e))return;let t=Dc(e);if(t)return{title:X(e.title)||X(e.name)||t,url:t}}).filter(e=>!!e):[],kc=e=>{let t=X(e.id,`id`)||X(e.identifier,`id`),n=X(e.title)||X(e.name)||X(e.subject),r=Dc(e),i=X(e.state,`state`)||X(e.status,`status`),a=X(e.description)||X(e.body)||X(e.content),o=bc(e,lc).filter(e=>!((e.key===`state`||e.key===`status`)&&e.value===i)),s=Oc(e.links),c=hc(e.updatedAt);if(!(!t&&!n&&!r&&!i&&!a&&!c&&o.length===0&&s.length===0))return{description:a,fields:o,id:t,links:s,state:i,title:n,updatedAt:c,url:r}},Ac=[`id`,`identifier`,`title`,`name`,`subject`],jc=e=>Ac.some(t=>!!X(e[t])),Mc=e=>{if(Array.isArray(e))return{records:e.filter(w)};if(!w(e))return{records:[]};if(!jc(e))for(let t of uc){let n=e[t];if(Array.isArray(n))return{collectionKey:t,records:n.filter(w)}}return{records:[e]}},Nc=e=>{if(e)return typeof e==`string`?e.trim()||void 0:w(e)&&(X(e.message)||X(e.error))||gc(e)},Pc=({apiName:e,args:t,content:n,pluginError:r})=>{let i=ut(e||``),a=Ec(n),{collectionKey:o,records:s}=Mc(a),c=s.map(kc).filter(e=>!!e),l=typeof a==`string`?a:void 0,u=o&&s.length===0?o:void 0,d=a!==void 0&&typeof a!=`string`&&c.length===0&&!u?gc(a):void 0;return{actionLabel:lt(i),emptyCollectionKey:u,errorText:Nc(r),requestFields:xc(t),requestLinks:w(t)?Oc(t.links):[],resultEntities:c,resultText:l,rawResultJson:d}}})),Ic,Z,Q,Lc,Rc,zc,Bc,Vc,Hc,Uc=e((()=>{S(),an(),m(),b(),Wt(),g(),nt(),bt(),_(),x(),Ic=t(o()),i(),Fc(),Z=t(s()),Q={container:C(`acss-872usz`,[`.acss-872usz{overflow:hidden;min-width:0;}`],`
    overflow: hidden;
    min-width: 0;
  `),description:C(`acss-gxewn8`,[`.acss-gxewn8{overflow:auto;max-height:180px;padding-block:8px;padding-inline:10px;border:1px solid var(--ant-color-border-secondary);border-radius:6px;background:var(--ant-color-fill-quaternary);}`],`
    overflow: auto;

    max-height: 180px;
    padding-block: 8px;
    padding-inline: 10px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: 6px;

    background: var(--ant-color-fill-quaternary);
  `),empty:C(`acss-12uspgq`,[`.acss-12uspgq{display:flex;gap:6px;align-items:center;justify-content:center;padding-block:16px;border:1px solid var(--ant-color-border-secondary);border-radius:6px;font-size:13px;color:var(--ant-color-text-tertiary);background:var(--ant-color-fill-quaternary);}`],`
    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: center;

    padding-block: 16px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: 6px;

    font-size: 13px;
    color: var(--ant-color-text-tertiary);

    background: var(--ant-color-fill-quaternary);
  `),entityHeader:C(`acss-lw41on`,[`.acss-lw41on{display:flex;gap:12px;align-items:center;justify-content:space-between;min-width:0;}`],`
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: space-between;

    min-width: 0;
  `),headLeft:C(`acss-uhmsk3`,[`.acss-uhmsk3{display:flex;gap:6px;align-items:center;min-width:0;}`],`
    display: flex;
    gap: 6px;
    align-items: center;
    min-width: 0;
  `),timeItem:C(`acss-rqm08e`,[`.acss-rqm08e{flex-shrink:0;font-size:12px;color:var(--ant-color-text-tertiary);white-space:nowrap;}`],`
    flex-shrink: 0;
    font-size: 12px;
    color: var(--ant-color-text-tertiary);
    white-space: nowrap;
  `),metaItem:C(`acss-tyqxyv`,[`.acss-tyqxyv{display:inline-flex;gap:4px;align-items:baseline;min-width:0;font-size:12px;line-height:1.5;}`],`
    display: inline-flex;
    gap: 4px;
    align-items: baseline;

    min-width: 0;

    font-size: 12px;
    line-height: 1.5;
  `),metaLabel:C(`acss-18qijob`,[`.acss-18qijob{flex-shrink:0;color:var(--ant-color-text-tertiary);}`],`
    flex-shrink: 0;
    color: var(--ant-color-text-tertiary);
  `),metaRow:C(`acss-kamtu7`,[`.acss-kamtu7{display:flex;flex-wrap:wrap;gap:4px 16px;align-items:baseline;min-width:0;}`],`
    display: flex;
    flex-wrap: wrap;
    gap: 4px 16px;
    align-items: baseline;

    min-width: 0;
  `),metaValue:C(`acss-1a67lit`,[`.acss-1a67lit{overflow:hidden;min-width:0;color:var(--ant-color-text-secondary);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    min-width: 0;

    color: var(--ant-color-text-secondary);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),linkRow:C(`acss-ec5vb5`,[`.acss-ec5vb5{overflow:hidden;display:flex;gap:8px;align-items:center;min-width:0;padding-block:6px;padding-inline:8px;border-radius:6px;color:var(--ant-color-text);background:var(--ant-color-fill-quaternary);}`,`.acss-ec5vb5:hover{color:var(--ant-color-link);background:var(--ant-color-fill-tertiary);}`],`
    overflow: hidden;
    display: flex;
    gap: 8px;
    align-items: center;

    min-width: 0;
    padding-block: 6px;
    padding-inline: 8px;
    border-radius: 6px;

    color: var(--ant-color-text);

    background: var(--ant-color-fill-quaternary);

    &:hover {
      color: var(--ant-color-link);
      background: var(--ant-color-fill-tertiary);
    }
  `),linkText:C(`acss-872usz`,[`.acss-872usz{overflow:hidden;min-width:0;}`],`
    overflow: hidden;
    min-width: 0;
  `),rawDetails:C(`acss-jmq2ot`,[`.acss-jmq2ot{font-size:12px;color:var(--ant-color-text-secondary);}`,`.acss-jmq2ot summary{cursor:pointer;width:fit-content;margin-block-end:6px;}`],`
    font-size: 12px;
    color: var(--ant-color-text-secondary);

    summary {
      cursor: pointer;
      width: fit-content;
      margin-block-end: 6px;
    }
  `),sectionLabel:C(`acss-um2tu2`,[`.acss-um2tu2{font-size:12px;color:var(--ant-color-text-secondary);}`],`
    font-size: 12px;
    color: var(--ant-color-text-secondary);
  `),titleLink:C(`acss-1d43aao`,[`.acss-1d43aao{display:inline-flex;gap:4px;align-items:center;min-width:0;color:inherit;}`,`.acss-1d43aao:hover{color:var(--ant-color-link);}`],`
    display: inline-flex;
    gap: 4px;
    align-items: center;

    min-width: 0;

    color: inherit;

    &:hover {
      color: var(--ant-color-link);
    }
  `)},Lc=e=>e.length>0,Rc=(0,Ic.memo)(({children:e,title:t})=>(0,Z.jsxs)(d,{gap:6,children:[(0,Z.jsx)(v,{className:Q.sectionLabel,children:t}),e]})),Rc.displayName=`LinearRenderSection`,zc=(0,Ic.memo)(({fields:e})=>Lc(e)?(0,Z.jsx)(`div`,{className:Q.metaRow,children:e.map(e=>(0,Z.jsxs)(`span`,{className:Q.metaItem,children:[(0,Z.jsx)(`span`,{className:Q.metaLabel,children:e.label}),(0,Z.jsx)(`span`,{className:Q.metaValue,title:e.value,children:e.value})]},`${e.key}:${e.value}`))}):null),zc.displayName=`LinearRenderMetaRow`,Bc=(0,Ic.memo)(({links:e})=>Lc(e)?(0,Z.jsx)(d,{gap:4,children:e.map(e=>(0,Z.jsxs)(`a`,{className:Q.linkRow,href:e.url,rel:`noreferrer`,target:`_blank`,children:[(0,Z.jsx)(h,{icon:we,size:13}),(0,Z.jsx)(v,{ellipsis:!0,className:Q.linkText,title:e.title,children:e.title}),(0,Z.jsx)(h,{icon:De,size:12})]},`${e.title}:${e.url}`))}):null),Bc.displayName=`LinearRenderLinkList`,Vc=(0,Ic.memo)(({entity:e})=>{let{t}=r(`plugin`),{title:n,id:i,url:a,state:o,updatedAt:s}=e,c=!!i&&(!n||!fc(i));return(0,Z.jsxs)(u,{gap:8,padding:10,variant:`outlined`,width:`100%`,children:[(0,Z.jsxs)(`div`,{className:Q.entityHeader,children:[(0,Z.jsxs)(`div`,{className:Q.headLeft,children:[n&&(a?(0,Z.jsxs)(`a`,{className:Q.titleLink,href:a,rel:`noreferrer`,target:`_blank`,children:[(0,Z.jsx)(v,{ellipsis:!0,weight:600,children:n}),(0,Z.jsx)(h,{icon:De,size:12})]}):(0,Z.jsx)(v,{ellipsis:!0,weight:600,children:n})),c&&(a&&!n?(0,Z.jsxs)(`a`,{className:Q.titleLink,href:a,rel:`noreferrer`,target:`_blank`,children:[(0,Z.jsx)(xt,{size:`small`,children:i}),(0,Z.jsx)(h,{icon:De,size:12})]}):(0,Z.jsx)(xt,{size:`small`,children:i})),o&&(0,Z.jsx)(xt,{size:`small`,variant:`outlined`,children:o})]}),s&&(0,Z.jsx)(`span`,{className:Q.timeItem,title:vc(s),children:t(`builtins.linear.render.updatedAt`,{time:rn(s)})})]}),(0,Z.jsx)(zc,{fields:e.fields}),e.description&&(0,Z.jsx)(`div`,{className:Q.description,children:(0,Z.jsx)(rt,{fontSize:13,variant:`chat`,children:e.description})}),(0,Z.jsx)(Bc,{links:e.links})]})}),Vc.displayName=`LinearRenderEntityCard`,Hc=(0,Ic.memo)(({apiName:e,args:t,content:n,pluginError:i})=>{let{t:a}=r(`plugin`),o=(0,Ic.useMemo)(()=>Pc({apiName:e,args:t,content:n,pluginError:i}),[e,t,n,i]);return!(Lc(o.resultEntities)||o.resultText||o.rawResultJson||o.emptyCollectionKey)&&!o.errorText?null:(0,Z.jsxs)(d,{className:Q.container,gap:12,children:[Lc(o.resultEntities)&&(0,Z.jsx)(d,{gap:8,children:o.resultEntities.map((e,t)=>(0,Z.jsx)(Vc,{entity:e},`${e.id||e.title||`entity`}:${t}`))}),o.emptyCollectionKey&&(0,Z.jsxs)(`div`,{className:Q.empty,children:[(0,Z.jsx)(h,{icon:pe,size:14}),(0,Z.jsx)(`span`,{children:a(`builtins.linear.render.empty`,{collection:o.emptyCollectionKey})})]}),o.resultText&&(0,Z.jsx)(Be,{wrap:!0,language:`text`,showLanguage:!1,style:{maxHeight:220,overflow:`auto`,paddingInline:8},variant:`filled`,children:o.resultText}),o.rawResultJson&&(0,Z.jsxs)(`details`,{className:Q.rawDetails,children:[(0,Z.jsx)(`summary`,{children:`Raw result`}),(0,Z.jsx)(Be,{wrap:!0,language:`json`,style:{maxHeight:260,overflow:`auto`,paddingInline:8},variant:`filled`,children:o.rawResultJson})]}),o.errorText&&(0,Z.jsx)(Rc,{title:`Error`,children:(0,Z.jsx)(Be,{wrap:!0,language:`text`,showLanguage:!1,style:{maxHeight:220,overflow:`auto`,paddingInline:8},variant:`filled`,children:o.errorText})})]})}),Hc.displayName=`LinearRender`})),Wc=n(((e,t)=>{var n=[[{color:`0, 0, 0`,class:`ansi-black`},{color:`187, 0, 0`,class:`ansi-red`},{color:`0, 187, 0`,class:`ansi-green`},{color:`187, 187, 0`,class:`ansi-yellow`},{color:`0, 0, 187`,class:`ansi-blue`},{color:`187, 0, 187`,class:`ansi-magenta`},{color:`0, 187, 187`,class:`ansi-cyan`},{color:`255,255,255`,class:`ansi-white`}],[{color:`85, 85, 85`,class:`ansi-bright-black`},{color:`255, 85, 85`,class:`ansi-bright-red`},{color:`0, 255, 0`,class:`ansi-bright-green`},{color:`255, 255, 85`,class:`ansi-bright-yellow`},{color:`85, 85, 255`,class:`ansi-bright-blue`},{color:`255, 85, 255`,class:`ansi-bright-magenta`},{color:`85, 255, 255`,class:`ansi-bright-cyan`},{color:`255, 255, 255`,class:`ansi-bright-white`}]],r=/(https?:\/\/(?:[A-Za-z0-9#;/?:@=+$',_.!~*()[\]-]|&amp;|%[A-Fa-f0-9]{2})+)/gm;t.exports=class e{static escapeForHtml(t){return new e().escapeForHtml(t)}static linkify(t){return new e().linkify(t)}static ansiToHtml(t,n){return new e().ansiToHtml(t,n)}static ansiToJson(t,n){return new e().ansiToJson(t,n)}static ansiToText(t){return new e().ansiToText(t)}constructor(){this.fg=this.bg=this.fg_truecolor=this.bg_truecolor=null,this.bright=0,this.decorations=[]}setupPalette(){this.PALETTE_COLORS=[];for(let e=0;e<2;++e)for(let t=0;t<8;++t)this.PALETTE_COLORS.push(n[e][t].color);let e=[0,95,135,175,215,255],t=(t,n,r)=>e[t]+`, `+e[n]+`, `+e[r];for(let e=0;e<6;++e)for(let n=0;n<6;++n)for(let r=0;r<6;++r)this.PALETTE_COLORS.push(t(e,n,r));let r=8;for(let e=0;e<24;++e,r+=10)this.PALETTE_COLORS.push(r+`, `+r+`, `+r)}escapeForHtml(e){return e.replace(/[&<>\"]/gm,e=>e==`&`?`&amp;`:e==`"`?`&quot;`:e==`<`?`&lt;`:e==`>`?`&gt;`:``)}linkify(e){return e.replace(r,e=>`<a href="${e}">${e}</a>`)}ansiToHtml(e,t){return this.process(e,t,!0)}ansiToJson(e,t){return t||={},t.json=!0,t.clearLine=!1,this.process(e,t,!0)}ansiToText(e){return this.process(e,{},!1)}process(e,t,n){let r=this,i=e.split(/\033\[/),a=i.shift();t??={},t.clearLine=/\r/.test(e);let o=i.map(e=>this.processChunk(e,t,n));if(t&&t.json){let e=r.processChunkJson(``);return e.content=a,e.clearLine=t.clearLine,o.unshift(e),t.remove_empty&&(o=o.filter(e=>!e.isEmpty())),o}else o.unshift(a);return o.join(``)}processChunkJson(e,t,r){t=t===void 0?{}:t;let i=t.use_classes=t.use_classes!==void 0&&t.use_classes,a=t.key=i?`class`:`color`,o={content:e,fg:null,bg:null,fg_truecolor:null,bg_truecolor:null,isInverted:!1,clearLine:t.clearLine,decoration:null,decorations:[],was_processed:!1,isEmpty:()=>!o.content},s=e.match(/^([!\x3c-\x3f]*)([\d;]*)([\x20-\x2c]*[\x40-\x7e])([\s\S]*)/m);if(!s)return o;o.content=s[4];let c=s[2].split(`;`);if(s[1]!==``||s[3]!==`m`||!r)return o;let l=this;for(;c.length>0;){let e=c.shift(),t=parseInt(e);if(isNaN(t)||t===0)l.fg=l.bg=null,l.decorations=[];else if(t===1)l.decorations.push(`bold`);else if(t===2)l.decorations.push(`dim`);else if(t===3)l.decorations.push(`italic`);else if(t===4)l.decorations.push(`underline`);else if(t===5)l.decorations.push(`blink`);else if(t===7)l.decorations.push(`reverse`);else if(t===8)l.decorations.push(`hidden`);else if(t===9)l.decorations.push(`strikethrough`);else if(t===21)l.removeDecoration(`bold`);else if(t===22)l.removeDecoration(`bold`),l.removeDecoration(`dim`);else if(t===23)l.removeDecoration(`italic`);else if(t===24)l.removeDecoration(`underline`);else if(t===25)l.removeDecoration(`blink`);else if(t===27)l.removeDecoration(`reverse`);else if(t===28)l.removeDecoration(`hidden`);else if(t===29)l.removeDecoration(`strikethrough`);else if(t===39)l.fg=null;else if(t===49)l.bg=null;else if(t>=30&&t<38)l.fg=n[0][t%10][a];else if(t>=90&&t<98)l.fg=n[1][t%10][a];else if(t>=40&&t<48)l.bg=n[0][t%10][a];else if(t>=100&&t<108)l.bg=n[1][t%10][a];else if(t===38||t===48){let e=t===38;if(c.length>=1){let t=c.shift();if(t===`5`&&c.length>=1){let t=parseInt(c.shift());if(t>=0&&t<=255)if(!i)this.PALETTE_COLORS||l.setupPalette(),e?l.fg=this.PALETTE_COLORS[t]:l.bg=this.PALETTE_COLORS[t];else{let r=t>=16?`ansi-palette-`+t:n[+(t>7)][t%8].class;e?l.fg=r:l.bg=r}}else if(t===`2`&&c.length>=3){let t=parseInt(c.shift()),n=parseInt(c.shift()),r=parseInt(c.shift());if(t>=0&&t<=255&&n>=0&&n<=255&&r>=0&&r<=255){let a=t+`, `+n+`, `+r;i?e?(l.fg=`ansi-truecolor`,l.fg_truecolor=a):(l.bg=`ansi-truecolor`,l.bg_truecolor=a):e?l.fg=a:l.bg=a}}}}}return l.fg===null&&l.bg===null&&l.decorations.length===0?o:(o.fg=l.fg,o.bg=l.bg,o.fg_truecolor=l.fg_truecolor,o.bg_truecolor=l.bg_truecolor,o.decorations=l.decorations,o.decoration=l.decorations.slice(-1).pop()||null,o.was_processed=!0,o)}processChunk(e,t,r){t||={};let i=this.processChunkJson(e,t,r),a=t.use_classes;if(i.decorations=i.decorations.filter(e=>{if(e===`reverse`){i.fg||=n[0][7][a?`class`:`color`],i.bg||=n[0][0][a?`class`:`color`];let e=i.fg;i.fg=i.bg,i.bg=e;let t=i.fg_truecolor;return i.fg_truecolor=i.bg_truecolor,i.bg_truecolor=t,i.isInverted=!0,!1}return!0}),t.json)return i;if(i.isEmpty())return``;if(!i.was_processed)return i.content;let o=[],s=[],c=[],l={},u=e=>{let t=[],n;for(n in e)e.hasOwnProperty(n)&&t.push(`data-`+n+`="`+this.escapeForHtml(e[n])+`"`);return t.length>0?` `+t.join(` `):``};return i.isInverted&&(l[`ansi-is-inverted`]=`true`),i.fg&&(a?(o.push(i.fg+`-fg`),i.fg_truecolor!==null&&(l[`ansi-truecolor-fg`]=i.fg_truecolor,i.fg_truecolor=null)):o.push(`color:rgb(`+i.fg+`)`)),i.bg&&(a?(o.push(i.bg+`-bg`),i.bg_truecolor!==null&&(l[`ansi-truecolor-bg`]=i.bg_truecolor,i.bg_truecolor=null)):o.push(`background-color:rgb(`+i.bg+`)`)),i.decorations.forEach(e=>{if(a){s.push(`ansi-`+e);return}e===`bold`?s.push(`font-weight:bold`):e===`dim`?s.push(`opacity:0.5`):e===`italic`?s.push(`font-style:italic`):e===`hidden`?s.push(`visibility:hidden`):e===`strikethrough`?c.push(`line-through`):c.push(e)}),c.length&&s.push(`text-decoration:`+c.join(` `)),a?`<span class="`+o.concat(s).join(` `)+`"`+u(l)+`>`+i.content+`</span>`:`<span style="`+o.concat(s).join(`;`)+`"`+u(l)+`>`+i.content+`</span>`}removeDecoration(e){let t=this.decorations.indexOf(e);t>=0&&this.decorations.splice(t,1)}}})),Gc,Kc,qc,Jc,Yc,Xc=e((()=>{S(),Gc=t(Wc()),Kc=t(o()),qc=t(s()),Jc={pre:C(`acss-c8zpkb`,[`.acss-c8zpkb{overflow:auto;max-height:200px;margin:0;padding:8px;border-radius:6px;font-family:var(--ant-font-family-code);font-size:12px;line-height:1.6;color:var(--ant-color-text);word-break:break-word;white-space:pre-wrap;background:var(--ant-color-fill-tertiary);}`],`
    overflow: auto;

    max-height: 200px;
    margin: 0;
    padding: 8px;
    border-radius: 6px;

    font-family: var(--ant-font-family-code);
    font-size: 12px;
    line-height: 1.6;
    color: var(--ant-color-text);
    word-break: break-word;
    white-space: pre-wrap;

    background: var(--ant-color-fill-tertiary);
  `)},Yc=(0,Kc.memo)(({text:e})=>{let t=(0,Kc.useMemo)(()=>Gc.default.ansiToJson(e,{json:!0,remove_empty:!0,use_classes:!1}),[e]);return(0,qc.jsx)(`pre`,{className:Jc.pre,children:t.map((e,t)=>{let n=e.decorations??[],r=n.includes(`dim`),i=n.includes(`bold`),a=n.includes(`italic`),o=n.includes(`underline`),s=n.includes(`strikethrough`);return(0,qc.jsx)(`span`,{style:{background:e.bg?`rgb(${e.bg})`:void 0,color:e.fg?`rgb(${e.fg})`:void 0,fontStyle:a?`italic`:void 0,fontWeight:i?600:void 0,opacity:r?.6:void 0,textDecoration:[o&&`underline`,s&&`line-through`].filter(Boolean).join(` `)||void 0},children:e.content},t)})})}),Yc.displayName=`AnsiOutput`})),Zc,Qc,$c,el,tl=e((()=>{S(),m(),b(),Wt(),Zc=t(o()),Tr(),Xc(),Qc=t(s()),$c={container:C(`acss-ohzr5q`,[`.acss-ohzr5q{overflow:hidden;padding-inline:8px 0;}`],`
    overflow: hidden;
    padding-inline: 8px 0;
  `)},el=(0,Zc.memo)(({args:e,content:t,pluginState:n})=>{let r=n?.stdout||n?.output||t,i=n?.stderr,a=wr(e?.command);return(0,Qc.jsx)(d,{className:$c.container,gap:8,children:(0,Qc.jsxs)(u,{gap:8,padding:8,variant:`outlined`,children:[(0,Qc.jsx)(Be,{wrap:!0,language:`sh`,showLanguage:!1,style:{maxHeight:200,overflow:`auto`,paddingInline:8},variant:`borderless`,children:a}),r&&(0,Qc.jsx)(Yc,{text:r}),i?.trim()&&(0,Qc.jsx)(Yc,{text:i})]})})}),el.displayName=`RunCommand`})),nl=e((()=>{ac(),Uc(),tl()})),rl,il,al,ol,sl=e((()=>{S(),b(),nt(),p(),_(),x(),rl=t(o()),i(),Pt(),jt(),il=t(s()),al={container:C(`acss-1c83334`,[`.acss-1c83334{padding-block:4px;}`],`
    padding-block: 4px;
  `),label:C(`acss-1dfa823`,[`.acss-1dfa823{padding-inline-start:4px;font-size:12px;color:var(--ant-color-text-tertiary);}`],`
    padding-inline-start: 4px;
    font-size: 12px;
    color: var(--ant-color-text-tertiary);
  `),labelRow:C(`acss-rmjwcj`,[`.acss-rmjwcj{margin-block-end:4px;}`],`
    margin-block-end: 4px;
  `),openThread:C(`acss-1ar9act`,[`.acss-1ar9act{height:22px;padding-inline:6px;font-size:12px;}`],`
    height: 22px;
    padding-inline: 6px;
    font-size: 12px;
  `),promptBox:C(`acss-1y4smw9`,[`.acss-1y4smw9{padding-block:8px;padding-inline:12px;border-radius:var(--ant-border-radius-lg);background:var(--ant-color-fill-tertiary);}`],`
    padding-block: 8px;
    padding-inline: 12px;
    border-radius: var(--ant-border-radius-lg);
    background: var(--ant-color-fill-tertiary);
  `),resultBox:C(`acss-x1y81k`,[`.acss-x1y81k{padding-block:8px;padding-inline:12px;border-radius:var(--ant-border-radius-lg);background:var(--ant-color-bg-container);}`],`
    padding-block: 8px;
    padding-inline: 12px;
    border-radius: var(--ant-border-radius-lg);
    background: var(--ant-color-bg-container);
  `)},ol=(0,rl.memo)(({args:e,content:t,toolCallId:n})=>{let{t:i}=r(`plugin`),{t:a}=r(`chat`),o=e?.prompt?.trim(),s=typeof t==`string`?t.trim():``,c=Mt(e=>n?(At.currentTopicThreads(e)??[]).find(e=>e.metadata?.sourceToolCallId===n):void 0),l=Mt(e=>e.openThreadInPortal),u=Mt(e=>e.closeThreadPortal),p=Mt(Ft.portalThreadId),m=!!c&&p===c.id,h=(0,rl.useCallback)(()=>{c&&(m?u():l(c.id,c.sourceMessageId))},[c,m,l,u]);if(!o&&!s&&!c)return null;let g=!!s||!!c;return(0,il.jsxs)(d,{className:al.container,gap:12,children:[o&&(0,il.jsxs)(d,{children:[(0,il.jsx)(v,{className:al.label,style:{marginBlockEnd:4},children:i(`builtins.lobe-claude-code.agent.instruction`)}),(0,il.jsx)(d,{className:al.promptBox,children:(0,il.jsx)(rt,{style:{maxHeight:240,overflow:`auto`},variant:`chat`,children:o})})]}),g&&(0,il.jsxs)(d,{children:[(0,il.jsxs)(d,{horizontal:!0,align:`center`,className:al.labelRow,justify:`space-between`,children:[(0,il.jsx)(v,{className:al.label,children:i(`builtins.lobe-claude-code.agent.result`)}),c&&(0,il.jsx)(f,{className:al.openThread,icon:ye,size:`small`,type:`text`,onClick:h,children:a(m?`thread.closeSubagentThread`:`thread.openSubagentThread`)})]}),s&&(0,il.jsx)(d,{className:al.resultBox,children:(0,il.jsx)(rt,{style:{maxHeight:320,overflow:`auto`},variant:`chat`,children:s})})]})]})}),ol.displayName=`ClaudeCodeAgent`})),cl,ll,ul,dl=e((()=>{ea(),cl=t(o()),i(),ll=t(s()),ul=(0,cl.memo)(({args:e,content:t,pluginError:n,pluginState:i})=>{let{t:a}=r([`plugin`,`tool`]);return(0,ll.jsx)(hi,{answers:Xi(i,t),isError:!!n,questions:Ki(e),labels:{noAnswer:a(`plugin:builtins.lobe-claude-code.askUserQuestion.noAnswer`),notAnswered:a(`plugin:builtins.lobe-claude-code.askUserQuestion.notAnswered`),recommendedTag:a(`tool:claudeCode.askUserQuestion.recommendedTag`),supplement:a(`tool:claudeCode.askUserQuestion.supplement.enter`)}})}),ul.displayName=`CCAskUserQuestion`})),fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl=e((()=>{S(),m(),b(),Wt(),$e(),tt(),_(),x(),fl=t(o()),vt(),pl=t(s()),ml={row:C(`acss-2w022e`,[`.acss-2w022e{padding-block:6px;padding-inline:10px;border:1px solid var(--ant-color-border-secondary);border-radius:8px;}`],`
    padding-block: 6px;
    padding-inline: 10px;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: 8px;
  `)},hl=e=>e?.images?.filter(e=>!!e.url)??[],gl=(0,fl.memo)(({content:e})=>e?(0,pl.jsxs)(d,{horizontal:!0,align:`center`,className:ml.row,gap:6,children:[(0,pl.jsx)(ve,{size:14}),(0,pl.jsx)(v,{ellipsis:!0,children:e})]}):null),gl.displayName=`ClaudeCodeBrowserPageRow`,_l=(0,fl.memo)(({content:e})=>(0,pl.jsx)(gl,{content:e})),_l.displayName=`ClaudeCodeBrowserPageAction`,vl=(0,fl.memo)(({content:e,pluginState:t})=>{let n=hl(t);return n.length===0?e?(0,pl.jsx)(gl,{content:e}):null:(0,pl.jsx)(Qe,{children:(0,pl.jsx)(d,{gap:8,children:n.map((e,t)=>(0,pl.jsx)(u,{style:{alignSelf:`flex-start`,display:`flex`,overflow:`hidden`,padding:0},variant:`outlined`,children:(0,pl.jsx)(et,{alt:`Browser screenshot`,maxHeight:600,src:e.url,style:{maxWidth:`100%`}})},e.fileId||e.url||t))})})}),vl.displayName=`ClaudeCodeBrowserScreenshot`,yl=(0,fl.memo)(({content:e})=>e?(0,pl.jsx)(Be,{wrap:!0,language:`text`,showLanguage:!1,style:{maxHeight:240,overflow:`auto`},variant:`borderless`,children:e}):null),yl.displayName=`ClaudeCodeBrowserPageDump`,bl={click:_l,fill:_l,navigate:_l,press:_l,readPage:yl,screenshot:vl,scroll:_l,snapshot:yl},xl=e=>{let t=at(e);return t?bl[t]:void 0},Sl=Object.fromEntries(st.map(e=>[e,xl(e)])),Cl=new Proxy(Sl,{get:(e,t)=>{if(typeof t==`string`)return e[t]||(ot(t)?xl(t):void 0)}})})),Tl,El,Dl,Ol=e((()=>{dn(),b(),He(),Ze(),Tl=t(o()),El=t(s()),Dl=(0,Tl.memo)(({args:e})=>{if(!e)return(0,El.jsx)(We.Text,{rows:4});let t=e.file_path||``,n=t?Xe.basename(t):``,r=t?Xe.extname(t).slice(1).toLowerCase():``;return(0,El.jsx)(d,{gap:12,paddingInline:8,children:(0,El.jsx)(ln,{fileName:n||t,language:r||void 0,newContent:e.new_string??``,oldContent:e.old_string??``,showHeader:!!n,variant:`borderless`,viewMode:`unified`})})}),Dl.displayName=`ClaudeCodeEdit`})),kl,Al,jl,Ml=e((()=>{Wt(),kl=t(o()),Al=t(s()),jl=(0,kl.memo)(({content:e})=>e?(0,Al.jsx)(Be,{wrap:!0,language:`text`,showLanguage:!1,style:{maxHeight:240,overflow:`auto`},variant:`borderless`,children:e}):null),jl.displayName=`ClaudeCodeGlob`})),Nl,Pl,Fl,Il=e((()=>{Wt(),Nl=t(o()),Pl=t(s()),Fl=(0,Nl.memo)(({content:e})=>e?(0,Pl.jsx)(Be,{wrap:!0,language:`text`,showLanguage:!1,style:{maxHeight:240,overflow:`auto`},variant:`borderless`,children:e}):null),Fl.displayName=`ClaudeCodeGrep`})),Ll,Rl,zl,Bl=e((()=>{nl(),dt(),Ll=Hc,Rl=Object.fromEntries(ht.map(e=>[`${gt}${e}`,Ll])),zl=new Proxy(Rl,{get:(e,t)=>{if(typeof t==`string`)return e[t]||(ft(t)?Ll:void 0)}})})),Vl,Hl,Ul,Wl,Gl=e((()=>{b(),Wt(),$e(),tt(),Ze(),Vl=t(o()),Hl=t(s()),Ul=e=>e?e.split(`
`).map(e=>e.replace(/^\s*\d+\t/,``)).join(`
`):``,Wl=(0,Vl.memo)(({args:e,content:t,pluginState:n})=>{let r=e?.file_path||``,i=r?Xe.extname(r).slice(1).toLowerCase():``,a=(0,Vl.useMemo)(()=>n?.images?.filter(e=>!!e.url)??[],[n?.images]),o=(0,Vl.useMemo)(()=>Ul(t||``),[t]);return a.length>0?(0,Hl.jsx)(Qe,{children:(0,Hl.jsx)(d,{horizontal:!0,gap:8,style:{flexWrap:`wrap`},children:a.map((e,t)=>(0,Hl.jsx)(et,{alt:r||e.mediaType||``,maxHeight:600,src:e.url,style:{borderRadius:8}},e.fileId||e.url||t))})}):o?(0,Hl.jsx)(Be,{wrap:!0,language:i||`text`,showLanguage:!1,style:{maxHeight:240,overflow:`auto`},variant:`borderless`,children:o}):null}),Wl.displayName=`ClaudeCodeRead`})),Kl,ql,Jl,Yl,Xl,Zl=e((()=>{S(),b(),g(),nt(),_(),A(),x(),Kl=t(o()),i(),ql=t(s()),Jl=e=>{if(e&&typeof e==`object`)return e;if(!(typeof e!=`string`||!e.trim()))try{return JSON.parse(e)}catch{return}},Yl={bodyBox:C(`acss-14qedj7`,[`.acss-14qedj7{overflow:hidden;padding-block:4px;padding-inline:8px;border-radius:8px;background:var(--ant-color-fill-tertiary);}`],`
    overflow: hidden;

    padding-block: 4px;
    padding-inline: 8px;
    border-radius: 8px;

    background: var(--ant-color-fill-tertiary);
  `),container:C(`acss-1c83334`,[`.acss-1c83334{padding-block:4px;}`],`
    padding-block: 4px;
  `),header:C(`acss-12xtq37`,[`.acss-12xtq37{padding-inline:4px;color:var(--ant-color-text-secondary);}`],`
    padding-inline: 4px;
    color: var(--ant-color-text-secondary);
  `),status:C(`acss-vr4oej`,[`.acss-vr4oej{padding-inline:4px;}`],`
    padding-inline: 4px;
  `)},Xl=(0,Kl.memo)(({args:e,content:t})=>{let{t:n}=r(`plugin`),i=e?.message??e?.content,a=e?.summary?.trim(),o=Jl(t)?.success===!0;return(0,ql.jsxs)(d,{className:Yl.container,gap:8,children:[(0,ql.jsxs)(d,{horizontal:!0,align:`center`,className:Yl.header,gap:8,children:[(0,ql.jsx)(h,{icon:me,size:`small`}),(0,ql.jsx)(v,{ellipsis:!0,strong:!0,children:a||n(`builtins.lobe-claude-code.sendMessage.title`)})]}),i&&(0,ql.jsx)(d,{className:Yl.bodyBox,children:(0,ql.jsx)(rt,{style:{maxHeight:240,overflow:`auto`},variant:`chat`,children:i})}),o&&(0,ql.jsxs)(d,{horizontal:!0,align:`center`,className:Yl.status,gap:6,children:[(0,ql.jsx)(h,{icon:Ce,size:`small`,style:{color:k.colorSuccess}}),(0,ql.jsx)(v,{style:{color:k.colorTextSecondary,fontSize:12},children:n(`builtins.lobe-claude-code.sendMessage.queued`)})]})]})}),Xl.displayName=`ClaudeCodeSendMessage`})),Ql,$l,eu,tu,nu=e((()=>{S(),b(),g(),nt(),_(),x(),Ql=t(o()),$l=t(s()),eu={container:C(`acss-1c83334`,[`.acss-1c83334{padding-block:4px;}`],`
    padding-block: 4px;
  `),header:C(`acss-12xtq37`,[`.acss-12xtq37{padding-inline:4px;color:var(--ant-color-text-secondary);}`],`
    padding-inline: 4px;
    color: var(--ant-color-text-secondary);
  `),previewBox:C(`acss-14qedj7`,[`.acss-14qedj7{overflow:hidden;padding-block:4px;padding-inline:8px;border-radius:8px;background:var(--ant-color-fill-tertiary);}`],`
    overflow: hidden;

    padding-block: 4px;
    padding-inline: 8px;
    border-radius: 8px;

    background: var(--ant-color-fill-tertiary);
  `)},tu=(0,Ql.memo)(({args:e,content:t})=>{let n=e?.skill;return(0,$l.jsxs)(d,{className:eu.container,gap:8,children:[(0,$l.jsxs)(d,{horizontal:!0,align:`center`,className:eu.header,gap:8,children:[(0,$l.jsx)(h,{icon:Pe,size:`small`}),(0,$l.jsx)(v,{strong:!0,children:n||`Skill`})]}),t&&(0,$l.jsx)(d,{className:eu.previewBox,children:(0,$l.jsx)(rt,{style:{maxHeight:240,overflow:`auto`},variant:`chat`,children:t})})]})}),tu.displayName=`ClaudeCodeSkill`})),ru,$,iu,au,ou,su,cu=e((()=>{S(),m(),g(),ae(),A(),x(),ru=t(o()),i(),j(),$=t(s()),iu={header:C(`acss-11cri7g`,[`.acss-11cri7g{display:flex;gap:8px;align-items:center;padding-block:10px;padding-inline:12px;border-block-end:1px solid var(--ant-color-border-secondary);background:var(--ant-color-fill-quaternary);}`],`
    display: flex;
    gap: 8px;
    align-items: center;

    padding-block: 10px;
    padding-inline: 12px;
    border-block-end: 1px solid var(--ant-color-border-secondary);

    background: var(--ant-color-fill-quaternary);
  `),headerCount:C(`acss-1dlvox`,[`.acss-1dlvox{flex-shrink:0;padding-block:2px;padding-inline:8px;border-radius:999px;font-family:var(--ant-font-family-code);font-size:12px;color:var(--ant-color-text-secondary);background:var(--ant-color-fill-tertiary);}`],`
    flex-shrink: 0;

    padding-block: 2px;
    padding-inline: 8px;
    border-radius: 999px;

    font-family: var(--ant-font-family-code);
    font-size: 12px;
    color: var(--ant-color-text-secondary);

    background: var(--ant-color-fill-tertiary);
  `),headerDetail:C(`acss-pz44r4`,[`.acss-pz44r4{overflow:hidden;min-width:0;color:var(--ant-color-text);text-overflow:ellipsis;}`],`
    overflow: hidden;
    min-width: 0;
    color: var(--ant-color-text);
    text-overflow: ellipsis;
  `),headerLabel:C(`acss-6z8hyg`,[`.acss-6z8hyg{overflow:hidden;display:flex;flex:1;gap:0;align-items:center;min-width:0;color:var(--ant-color-text-secondary);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;
    display: flex;
    flex: 1;
    gap: 0;
    align-items: center;

    min-width: 0;

    color: var(--ant-color-text-secondary);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),itemRow:C(`acss-1f626n1`,[`.acss-1f626n1{width:100%;padding-block:10px;padding-inline:12px;border-block-end:1px dashed var(--ant-color-border-secondary);}`,`.acss-1f626n1:last-child{border-block-end:none;}`],`
    width: 100%;
    padding-block: 10px;
    padding-inline: 12px;
    border-block-end: 1px dashed var(--ant-color-border-secondary);

    &:last-child {
      border-block-end: none;
    }
  `),processingRow:C(`acss-skyd4n`,[`.acss-skyd4n{display:flex;gap:7px;align-items:center;}`],`
    display: flex;
    gap: 7px;
    align-items: center;
  `),textCompleted:C(`acss-zwlt0g`,[`.acss-zwlt0g{color:var(--ant-color-text-quaternary);text-decoration:line-through;}`],`
    color: var(--ant-color-text-quaternary);
    text-decoration: line-through;
  `),textPending:C(`acss-15a5nk3`,[`.acss-15a5nk3{color:var(--ant-color-text-secondary);}`],`
    color: var(--ant-color-text-secondary);
  `),textProcessing:C(`acss-644054`,[`.acss-644054{color:var(--ant-color-text);}`],`
    color: var(--ant-color-text);
  `)},au=(0,ru.memo)(({item:e})=>{let{status:t,text:n}=e;if(t===`processing`)return(0,$.jsxs)(`div`,{className:O(iu.itemRow,iu.processingRow),children:[(0,$.jsx)(h,{icon:he,size:17,style:{color:k.colorInfo}}),(0,$.jsx)(`span`,{className:iu.textProcessing,children:n})]});let r=t===`completed`;return(0,$.jsx)(ne,{backgroundColor:k.colorSuccess,checked:r,shape:`circle`,style:{borderWidth:1.5,cursor:`default`},classNames:{text:O(iu.textPending,r&&iu.textCompleted),wrapper:iu.itemRow},textProps:{type:r?`secondary`:void 0},children:n})}),au.displayName=`ClaudeCodeTaskRow`,ou=(0,ru.memo)(({completed:e,total:t,inProgress:n,override:i})=>{let{t:a}=r(`plugin`),o=t>0&&e===t,s=i?.icon??(n?he:o?Ce:oe),c=i?.color??(n?k.colorInfo:o?k.colorSuccess:k.colorTextSecondary),l=i?.label??a(n?`builtins.lobe-claude-code.todoWrite.currentStep`:o?`builtins.lobe-claude-code.todoWrite.allDone`:`builtins.lobe-claude-code.todoWrite.todos`),u=i?i.detail:n?.text;return(0,$.jsxs)(`div`,{className:iu.header,children:[(0,$.jsx)(h,{icon:s,size:16,style:{color:c,flexShrink:0}}),(0,$.jsxs)(`div`,{className:iu.headerLabel,children:[(0,$.jsx)(`span`,{children:l}),u&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{children:`: `}),(0,$.jsx)(`span`,{className:iu.headerDetail,children:u})]})]}),(0,$.jsxs)(`span`,{className:iu.headerCount,children:[e,`/`,t]})]})}),ou.displayName=`ClaudeCodeTaskHeader`,su=(0,ru.memo)(({apiName:e,args:t,pluginState:n})=>{let i=n?.todos?.items,{t:a}=r(`plugin`),o=(0,ru.useMemo)(()=>{let e=i??[];return{completed:e.filter(e=>e.status===`completed`).length,inProgress:e.find(e=>e.status===`processing`),total:e.length}},[i]),s=(0,ru.useMemo)(()=>{if(e!==M.TaskUpdate)return;let n=t?.status,r=t?.taskId,o=t?.subject,s=o??(r?i?.find(e=>e.id===r)?.text:void 0);if(n)return{...{completed:{color:k.colorSuccess,icon:Ce,label:a(`builtins.lobe-claude-code.task.updateCompleted`)},deleted:{color:k.colorError,icon:Ie,label:a(`builtins.lobe-claude-code.task.updateDeleted`)},in_progress:{color:k.colorInfo,icon:he,label:a(`builtins.lobe-claude-code.task.updateInProgress`)},pending:{color:k.colorTextSecondary,icon:ue,label:a(`builtins.lobe-claude-code.task.updatePending`)}}[n],detail:s};if(o)return{color:k.colorTextSecondary,detail:s,icon:oe,label:a(`builtins.lobe-claude-code.task.updateSubject.completed`)}},[e,t,i,a]);return!i||i.length===0?null:(0,$.jsxs)(u,{variant:`outlined`,width:`100%`,children:[(0,$.jsx)(ou,{completed:o.completed,inProgress:o.inProgress,override:s,total:o.total}),i.map((e,t)=>(0,$.jsx)(au,{item:e},t))]})}),su.displayName=`ClaudeCodeTask`})),lu,uu,du,fu,pu,mu=e((()=>{S(),Ut(),m(),g(),ae(),A(),x(),lu=t(o()),i(),ko(),uu=t(s()),du={itemRow:C(`acss-1f626n1`,[`.acss-1f626n1{width:100%;padding-block:10px;padding-inline:12px;border-block-end:1px dashed var(--ant-color-border-secondary);}`,`.acss-1f626n1:last-child{border-block-end:none;}`],`
    width: 100%;
    padding-block: 10px;
    padding-inline: 12px;
    border-block-end: 1px dashed var(--ant-color-border-secondary);

    &:last-child {
      border-block-end: none;
    }
  `),processingRow:C(`acss-skyd4n`,[`.acss-skyd4n{display:flex;gap:7px;align-items:center;}`],`
    display: flex;
    gap: 7px;
    align-items: center;
  `),textCompleted:C(`acss-zwlt0g`,[`.acss-zwlt0g{color:var(--ant-color-text-quaternary);text-decoration:line-through;}`],`
    color: var(--ant-color-text-quaternary);
    text-decoration: line-through;
  `),textPending:C(`acss-15a5nk3`,[`.acss-15a5nk3{color:var(--ant-color-text-secondary);}`],`
    color: var(--ant-color-text-secondary);
  `),textProcessing:C(`acss-644054`,[`.acss-644054{color:var(--ant-color-text);}`],`
    color: var(--ant-color-text);
  `)},fu=(0,lu.memo)(({item:e})=>{let{status:t,content:n,activeForm:r}=e;if(t===`in_progress`)return(0,uu.jsxs)(`div`,{className:O(du.itemRow,du.processingRow),children:[(0,uu.jsx)(h,{icon:he,size:17,style:{color:k.colorInfo}}),(0,uu.jsx)(`span`,{className:du.textProcessing,children:r||n})]});let i=t===`completed`;return(0,uu.jsx)(ne,{backgroundColor:k.colorSuccess,checked:i,shape:`circle`,style:{borderWidth:1.5,cursor:`default`},classNames:{text:O(du.textPending,i&&du.textCompleted),wrapper:du.itemRow},textProps:{type:i?`secondary`:void 0},children:n})}),fu.displayName=`ClaudeCodeTodoRow`,pu=(0,lu.memo)(({args:e})=>{let{t}=r(`plugin`),n=e?.todos,i=(0,lu.useMemo)(()=>Do(e),[e]);return!n||n.length===0?null:(0,uu.jsxs)(u,{variant:`outlined`,width:`100%`,children:[(0,uu.jsx)(Ht,{label:t(Oo[i.state]),summary:i}),n.map((e,t)=>(0,uu.jsx)(fu,{item:e},t))]})}),pu.displayName=`ClaudeCodeTodoWrite`})),hu,gu,_u,vu=e((()=>{nt(),hu=t(o()),gu=t(s()),_u=(0,hu.memo)(({content:e})=>e?(0,gu.jsx)(rt,{style:{maxHeight:240,overflow:`auto`},variant:`chat`,children:e}):null),_u.displayName=`ClaudeCodeWebFetch`})),yu,bu,xu,Su,Cu,wu,Tu=e((()=>{S(),b(),Wt(),_(),yu=t(o()),bu=t(s()),xu={hostname:C(`acss-1mt1k42`,[`.acss-1mt1k42{overflow:hidden;font-size:12px;color:var(--ant-color-text-tertiary);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    font-size: 12px;
    color: var(--ant-color-text-tertiary);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),metadata:C(`acss-8c2atm`,[`.acss-8c2atm{overflow:hidden;min-width:0;font-size:12px;color:var(--ant-color-text-secondary);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    min-width: 0;

    font-size: 12px;
    color: var(--ant-color-text-secondary);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),queryRow:C(`acss-90w4xc`,[`.acss-90w4xc{align-items:center;justify-content:space-between;min-width:0;padding-block:2px;padding-inline:4px;}`],`
    align-items: center;
    justify-content: space-between;

    min-width: 0;
    padding-block: 2px;
    padding-inline: 4px;
  `),resultItem:C(`acss-13uq8i9`,[`.acss-13uq8i9{min-width:0;padding-block:5px;padding-inline:4px;border-block-end:1px solid var(--ant-color-split);}`,`.acss-13uq8i9:last-child{border-block-end:0;}`],`
    min-width: 0;
    padding-block: 5px;
    padding-inline: 4px;
    border-block-end: 1px solid var(--ant-color-split);

    &:last-child {
      border-block-end: 0;
    }
  `),root:C(`acss-tj33xb`,[`.acss-tj33xb{overflow:auto;min-width:0;max-height:280px;padding-block:2px;}`],`
    overflow: auto;
    min-width: 0;
    max-height: 280px;
    padding-block: 2px;
  `),snippet:C(`acss-13xibor`,[`.acss-13xibor{font-size:12px;line-height:1.45;color:var(--ant-color-text-secondary);}`],`
    font-size: 12px;
    line-height: 1.45;
    color: var(--ant-color-text-secondary);
  `),title:C(`acss-v0pnmk`,[`.acss-v0pnmk{overflow:hidden;font-size:13px;font-weight:500;line-height:1.45;color:var(--ant-color-text);text-overflow:ellipsis;white-space:nowrap;}`,`.acss-v0pnmk:hover{color:var(--ant-color-link);}`],`
    overflow: hidden;

    font-size: 13px;
    font-weight: 500;
    line-height: 1.45;
    color: var(--ant-color-text);
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
      color: var(--ant-color-link);
    }
  `)},Su=e=>{try{let t=new URL(e);return(t.protocol===`http:`||t.protocol===`https:`)&&t.hostname||void 0}catch{return}},Cu=e=>{if(!e||typeof e!=`object`)return!1;let{link:t}=e;return typeof t==`string`&&!!Su(t)},wu=(0,yu.memo)(({args:e,content:t,pluginState:n})=>{let r=n?.results?.filter(Cu)??[];if(r.length===0)return t?(0,bu.jsx)(Be,{wrap:!0,language:`text`,showLanguage:!1,style:{maxHeight:240,overflow:`auto`},variant:`borderless`,children:t}):null;let i=n?.query||e?.query,a=typeof n?.durationSeconds==`number`&&Number.isFinite(n.durationSeconds)&&n.durationSeconds>=0?`${n.durationSeconds.toFixed(2)}s`:void 0;return(0,bu.jsxs)(d,{className:xu.root,gap:0,children:[(i||a)&&(0,bu.jsxs)(d,{horizontal:!0,className:xu.queryRow,gap:8,children:[(0,bu.jsx)(`span`,{className:xu.metadata,children:i}),a&&(0,bu.jsx)(`span`,{className:xu.metadata,children:a})]}),r.map((e,t)=>{let n=Su(e.link),r=e.title||n||e.link;return(0,bu.jsxs)(d,{className:xu.resultItem,gap:3,children:[(0,bu.jsx)(`a`,{href:e.link,rel:`noreferrer`,target:`_blank`,children:(0,bu.jsx)(`span`,{className:xu.title,children:r})}),(0,bu.jsx)(v,{className:xu.hostname,children:n||e.link}),e.snippet&&(0,bu.jsx)(v,{className:xu.snippet,children:e.snippet})]},`${e.link}-${t}`)})]})}),wu.displayName=`ClaudeCodeWebSearch`})),Eu,Du,Ou,ku=e((()=>{Wt(),nt(),He(),Ze(),Eu=t(o()),Du=t(s()),Ou=(0,Eu.memo)(({args:e})=>{if(!e)return(0,Du.jsx)(We.Text,{rows:4});let t=e.file_path||``,n=t?Xe.extname(t).slice(1).toLowerCase():``;return e.content?n===`md`||n===`mdx`?(0,Du.jsx)(rt,{style:{maxHeight:240,overflow:`auto`},variant:`chat`,children:e.content}):(0,Du.jsx)(Be,{wrap:!0,language:n||`text`,showLanguage:!1,style:{maxHeight:240,overflow:`auto`},variant:`borderless`,children:e.content}):null}),Ou.displayName=`ClaudeCodeWrite`})),Au,ju,Mu=e((()=>{nl(),j(),sl(),dl(),wl(),Ol(),Ml(),Il(),Bl(),Gl(),Zl(),nu(),cu(),mu(),vu(),Tu(),ku(),pt(),Au={[M.Agent]:ol,[M.AskUserQuestion]:ul,[M.Bash]:el,[M.Edit]:Dl,[M.Glob]:jl,[M.Grep]:Fl,[M.Read]:Wl,[M.SendMessage]:Xl,[M.Skill]:tu,[M.TaskList]:su,[M.TaskUpdate]:su,[M.TodoWrite]:pu,[M.WebFetch]:_u,[M.WebSearch]:wu,[M.Write]:Ou,...Cl,...zl},ju=new Proxy(Au,{get:(e,t)=>{if(typeof t==`string`)return t in e?e[t]:Cl[t]??zl[t]}})})),Nu,Pu,Fu,Iu,Lu=e((()=>{S(),b(),nt(),p(),_(),x(),Nu=t(o()),i(),Pt(),jt(),Pu=t(s()),Fu={container:C(`acss-1c83334`,[`.acss-1c83334{padding-block:4px;}`],`
    padding-block: 4px;
  `),label:C(`acss-1dfa823`,[`.acss-1dfa823{padding-inline-start:4px;font-size:12px;color:var(--ant-color-text-tertiary);}`],`
    padding-inline-start: 4px;
    font-size: 12px;
    color: var(--ant-color-text-tertiary);
  `),labelRow:C(`acss-rmjwcj`,[`.acss-rmjwcj{margin-block-end:4px;}`],`
    margin-block-end: 4px;
  `),openThread:C(`acss-1ar9act`,[`.acss-1ar9act{height:22px;padding-inline:6px;font-size:12px;}`],`
    height: 22px;
    padding-inline: 6px;
    font-size: 12px;
  `),promptBox:C(`acss-1y4smw9`,[`.acss-1y4smw9{padding-block:8px;padding-inline:12px;border-radius:var(--ant-border-radius-lg);background:var(--ant-color-fill-tertiary);}`],`
    padding-block: 8px;
    padding-inline: 12px;
    border-radius: var(--ant-border-radius-lg);
    background: var(--ant-color-fill-tertiary);
  `)},Iu=(0,Nu.memo)(({args:e,toolCallId:t})=>{let{t:n}=r(`plugin`),{t:i}=r(`chat`),a=e?.prompt?.trim(),o=Mt(e=>t?(At.currentTopicThreads(e)??[]).find(e=>e.metadata?.sourceToolCallId===t):void 0),s=Mt(e=>e.openThreadInPortal),c=Mt(e=>e.closeThreadPortal),l=Mt(Ft.portalThreadId),u=!!o&&l===o.id,p=(0,Nu.useCallback)(()=>{o&&(u?c():s(o.id,o.sourceMessageId))},[o,u,s,c]);return!a&&!o?null:(0,Pu.jsx)(d,{className:Fu.container,gap:12,children:a&&(0,Pu.jsxs)(d,{children:[(0,Pu.jsxs)(d,{horizontal:!0,align:`center`,className:Fu.labelRow,justify:`space-between`,children:[(0,Pu.jsx)(v,{className:Fu.label,children:n(`builtins.lobe-claude-code.agent.instruction`)}),o&&(0,Pu.jsx)(f,{className:Fu.openThread,icon:ye,size:`small`,type:`text`,onClick:p,children:i(u?`thread.closeSubagentThread`:`thread.openSubagentThread`)})]}),(0,Pu.jsx)(d,{className:Fu.promptBox,children:(0,Pu.jsx)(rt,{variant:`chat`,children:a})})]})})}),Iu.displayName=`ClaudeCodeAgentStreaming`})),Ru,zu,Bu=e((()=>{Ru=t(o()),zu=e=>({args:t,messageId:n,apiName:r,identifier:i,toolCallId:a})=>(0,Ru.createElement)(e,{apiName:r,args:t,content:null,identifier:i,messageId:n,toolCallId:a})})),Vu,Hu=e((()=>{nl(),j(),Ol(),Ml(),Il(),Gl(),nu(),mu(),ku(),Lu(),Bu(),Vu={[M.Agent]:Iu,[M.Bash]:zu(el),[M.Edit]:zu(Dl),[M.Glob]:zu(jl),[M.Grep]:zu(Fl),[M.Read]:zu(Wl),[M.Skill]:zu(tu),[M.TodoWrite]:zu(pu),[M.Write]:zu(Ou)}})),Uu=e((()=>{j(),_s(),Cs(),Mu(),Hu(),ai()}));export{Un as $,gi as A,Or as B,qi as C,xi as D,Ri as E,ti as F,gr as G,Ar as H,Xr as I,pr as J,_r as K,Zr as L,ii as M,ni as N,Ei as O,ei as P,Xn as Q,Nr as R,Xi as S,Li as T,br as U,kr as V,xr as W,cr as X,sr as Y,Yn as Z,_s as _,Mu as a,hn as at,Qi as b,tl as c,ln as ct,Uc as d,Wn as et,ic as f,gs as g,Cs as h,ju as i,En as it,ai as j,hi as k,Wc as l,un as lt,Ss as m,Vu as n,Rn as nt,nl as o,gn as ot,ac as p,fr as q,Hu as r,_n as rt,el as s,dn as st,Uu as t,Ln as tt,Hc as u,ea as v,Ki as w,Zi as x,$i as y,Pr as z};