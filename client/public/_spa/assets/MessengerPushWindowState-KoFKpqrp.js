import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{Kt as o,Mt as s,Nt as c,Xn as l,Zn as u,at as d,it as f,qt as p}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Bi as m,Hh as h,Hm as g,Xo as _,t as v}from"../vendor/vendor-icons-vienkZi5.js";import{Dn as y,En as b,FD as x,ID as S}from"./index-w64_zsxD.js";import{n as C,t as w}from"./Tag-C95BKTI7.js";var T,E,D,O,k,A=e((()=>{x(),p(),u(),c(),y(),C(),d(),v(),T=t(i()),r(),E=t(a()),D={quotaText:S(`acss-1l8pbc`,[`.acss-1l8pbc{font-size:13px;color:var(--ant-color-text);white-space:nowrap;}`,`.acss-1l8pbc >span{color:var(--ant-color-text-secondary);}`],`
    font-size: 13px;
    color: var(--ant-color-text);
    white-space: nowrap;

    > span {
      color: var(--ant-color-text-secondary);
    }
  `),statBar:S(`acss-axt6n5`,[`.acss-axt6n5{width:4px;height:16px;border-radius:2px;background:var(--ant-color-fill-secondary);}`,`.acss-axt6n5[data-filled='true']{background:var(--ant-color-info);}`],`
    width: 4px;
    height: 16px;
    border-radius: 2px;
    background: var(--ant-color-fill-secondary);

    &[data-filled='true'] {
      background: var(--ant-color-info);
    }
  `)},O=(0,T.memo)(({remaining:e,total:t})=>(0,E.jsx)(o,{horizontal:!0,align:`center`,gap:3,children:Array.from({length:t},(t,n)=>(0,E.jsx)(`div`,{className:D.statBar,"data-filled":n<e},n))})),O.displayName=`MessengerPushQuotaBars`,k=(0,T.memo)(({error:e,name:t,onRetry:r,status:i})=>{let{t:a}=n(`messenger`);if(e)return(0,E.jsxs)(o,{horizontal:!0,align:`center`,gap:8,children:[(0,E.jsx)(f,{type:`secondary`,children:a(`messenger.push.loadFailed`)}),(0,E.jsx)(s,{icon:(0,E.jsx)(l,{icon:m}),size:`small`,onClick:r,children:a(`messenger.push.retry`)})]});if(!i)return(0,E.jsx)(b,{height:28,width:220});if(i.deliverability===`always`)return(0,E.jsxs)(o,{horizontal:!0,align:`center`,gap:8,wrap:`wrap`,children:[(0,E.jsx)(w,{color:`success`,icon:(0,E.jsx)(l,{icon:h,size:`small`}),children:a(`messenger.push.alwaysAvailable`)}),(0,E.jsx)(f,{style:{fontSize:13},type:`secondary`,children:a(`messenger.push.alwaysAvailableHint`,{platform:t})})]});if(!i.windowOpen)return(0,E.jsxs)(o,{horizontal:!0,align:`center`,gap:8,wrap:`wrap`,children:[(0,E.jsx)(w,{icon:(0,E.jsx)(l,{icon:_,size:`small`}),children:a(`messenger.push.windowClosed`)}),(0,E.jsx)(f,{style:{fontSize:13},type:`secondary`,children:a(`messenger.push.windowClosedHint`,{platform:t})})]});let c=i.expiresInSeconds===null?null:i.expiresInSeconds>=3600?`~${Math.round(i.expiresInSeconds/3600)}h`:`~${Math.max(1,Math.round(i.expiresInSeconds/60))}m`;return(0,E.jsxs)(o,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,wrap:`wrap`,children:[(0,E.jsxs)(o,{horizontal:!0,align:`center`,gap:8,children:[(0,E.jsx)(w,{color:`success`,icon:(0,E.jsx)(l,{icon:h,size:`small`}),children:a(`messenger.push.windowOpen`)}),c&&(0,E.jsx)(w,{icon:(0,E.jsx)(l,{icon:g,size:`small`}),children:a(`messenger.push.expiresIn`,{value:c})})]}),(0,E.jsxs)(o,{horizontal:!0,align:`center`,gap:8,children:[(0,E.jsx)(O,{remaining:i.remaining,total:i.maxSends}),(0,E.jsxs)(`span`,{className:D.quotaText,children:[i.remaining,(0,E.jsxs)(`span`,{children:[` / `,i.maxSends]})]})]})]})}),k.displayName=`MessengerPushWindowState`}));export{A as n,k as t};