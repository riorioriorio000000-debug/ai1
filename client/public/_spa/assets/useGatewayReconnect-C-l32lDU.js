import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,Q as r,S as i,V as a,j as o,r as s,s as c,x as l,z as u}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as d,T as f}from"../vendor/vendor-react-B9HSWrpN.js";import{B as p,Kt as m,M as h,Mt as g,Nt as _,X as v,Xn as y,Yn as b,Z as x,Zn as S,at as C,h as w,it as T,j as E,lt as D,m as O,qt as k,z as A}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Bg as j,Bi as M,Ei as N,Kt as P,Ma as ee,Ml as te,Op as ne,Rg as re,X_ as ie,Xr as ae,bd as oe,c as se,cg as ce,ig as le,it as ue,mt as de,o as fe,og as pe,t as F,ua as me,ug as he,wc as ge}from"../vendor/vendor-icons-vienkZi5.js";import{Fr as _e,c as ve}from"./app-const-BpgKVRXh.js";import{Am as ye,Br as be,Dm as xe,Dn as Se,En as Ce,FD as we,Gp as Te,Gr as Ee,Gt as De,Hp as Oe,ID as I,Jp as ke,Kf as Ae,La as je,MA as Me,Mr as Ne,Na as Pe,Or as Fe,Qa as Ie,TA as Le,Tp as Re,Ur as ze,Vr as Be,Wh as Ve,Wt as He,Ya as Ue,Zf as We,Zh as Ge,_p as Ke,_x as qe,ah as Je,am as Ye,bh as Xe,cD as Ze,cf as Qe,ch as $e,dg as et,dy as L,fy as tt,gF as nt,gu as rt,hF as R,hy as it,iC as at,jr as ot,kp as st,lp as ct,ng as lt,py as ut,qf as dt,rg as ft,rh as pt,ry as mt,sD as ht,uF as gt,uh as _t,up as vt,vp as yt,wA as bt,wx as xt,yh as St,zp as Ct}from"./index-w64_zsxD.js";import{n as wt,t as Tt}from"./Popover-Cd3scH3I.js";import{C as Et,S as Dt,T as Ot,_ as kt,b as At,c as jt,d as Mt,f as Nt,g as Pt,h as Ft,i as It,l as Lt,m as Rt,n as zt,o as Bt,s as Vt,t as Ht,u as Ut,v as Wt,w as Gt,x as Kt,y as qt}from"./DropdownMenu-1ae8j9bI.js";import{t as Jt}from"./_virtual_lobe-ui-named__Tooltip-DNompU8a.js";import{Un as Yt,Wn as Xt,a as Zt,n as Qt}from"./chat-D3ilvURJ.js";import{i as $t,t as en}from"./device-Cx36fBwx.js";import{n as tn,t as nn}from"./device-CSpCOZ47.js";import{n as rn,t as an}from"./trpcError-Dgk_pJJV.js";import{i as on,m as sn,r as cn}from"./store-DwGYYuCr.js";import{n as ln,t as un}from"./Input-gdUxluEJ.js";import{n as dn,t as fn}from"./Select-C0UJO2yB.js";import{n as pn,t as mn}from"./RadioGroup-B72dmG6b.js";import{n as hn,t as gn}from"./Segmented-BgY50E-t.js";import{n as _n,t as vn}from"./ModelSelect-BqNzeHDy.js";import{n as yn,t as bn}from"./useWorkspaceAwareNavigate-BbajQ7ta.js";import{n as xn,t as Sn}from"./useQueryRoute-DImyN8D_.js";import{t as Cn}from"./_virtual_lobe-ui-named_base-ui_confirmModal-B6WREEdZ.js";import{n as wn,t as Tn}from"./Conversation-CBWduYtr.js";import{n as En,t as Dn}from"./useEffectiveAgencyConfig-A7Rq2x0Q.js";import{c as On,s as kn}from"./useProjectSkills-U5cztNXt.js";import{a as An,n as jn,o as Mn,t as Nn}from"./useAgentId-Bo4mhZJ8.js";import{D as Pn,E as Fn,Et as In,Ft as Ln,Mt as Rn,Nt as zn,O as Bn,Pt as Vn,St as Hn,T as Un,Tt as Wn,_t as Gn,bt as Kn,ct as qn,dt as Jn,ft as Yn,gt as Xn,h as Zn,ht as Qn,k as $n,lt as er,m as tr,mt as nr,pt as rr,ut as ir,vt as ar,w as or,xt as sr,yt as cr}from"./ChatInput-CA6BEpFt.js";import{_ as lr,g as ur}from"./TypoBar-DXz9K895.js";import{n as dr,t as z}from"./agentQuota-Fg7zdWjW.js";import{r as fr,t as pr}from"./heterogeneousAgent-DL8d5yfC.js";import{a as mr,c as hr,i as gr,l as _r,o as vr,r as yr,s as br,t as xr,u as Sr}from"./modelPicker-CdrJUzdz.js";var Cr,wr,Tr=e((()=>{i(),Cr=l()(()=>({attached:!1,draft:null})),wr=e=>Cr.getState().attached?(Cr.setState({draft:{text:e}}),!0):!1})),Er,Dr,Or=e((()=>{ve(),bt(),Sn(),Ge(),Fe(),Ne(),Er=`CLAUDE_CODE_OAUTH_TOKEN`,Dr=e=>{let t=xn(),n=ot(t=>Ee.getAgencyConfigById(e)(t)?.heterogeneousProvider),r=n?.type===`claude-code`,{data:i,isLoading:a}=ft.market.creds.list.useQuery(void 0,{enabled:r}),o=(i?.data??[]).some(e=>e.key===Er);return{goToConfig:()=>{e&&t.push(Le(`/agent`,e,`profile`))},isConfigured:!r||!!n?.env?.CLAUDE_CODE_CRED_KEY||o||a}}})),kr,Ar=e((()=>{Ge(),fr(),kr=({deviceId:e,env:t,force:n})=>e?lt.device.getClaudeCodeQuota.query({deviceId:e,env:t,...n?{force:!0}:{}}):pr.getClaudeCodeQuota({env:t,...n?{force:!0}:{}})})),jr=e((()=>{})),Mr,Nr,Pr,Fr=e((()=>{Mr=300*60,Nr=10080*60,Pr=e=>e.startsWith(`weekly`)?Nr:Mr})),Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr=e((()=>{Fr(),Ir=e=>Math.min(100,Math.max(0,Math.round(e))),Lr=(e,t)=>e.resetsAt==null?t-e.capturedAt>(e.windowMinutes==null?Pr(e.limitType):e.windowMinutes*60)*1e3:e.resetsAt<=t,Rr=(e,t)=>Lr(e,t)?0:Ir(e.utilization),zr=(e,t)=>{let n=Lr(e,t);return{resetsAt:n?null:e.resetsAt??null,usedPercent:n?0:Ir(e.utilization),windowMinutes:e.windowMinutes??Pr(e.limitType)/60}},Br=e=>e.limitType===`session`||e.limitType===`five_hour`,Vr=e=>e.limitType.startsWith(`weekly`)&&!e.scopeKey,Hr=e=>e.limitType.startsWith(`weekly`)&&!!e.scopeKey,Ur=(e,t)=>e.reduce((e,n)=>t(n)&&(!e||n.capturedAt>e.capturedAt)?n:e,void 0),Wr=(e,t)=>{let n=Ur(e,Br),r=Ur(e,Vr),i=Ur(e,Hr);return{scopedWeekly:i?{modelName:i.scopeKey,window:zr(i,t)}:null,session:n?zr(n,t):null,weekly:r?zr(r,t):null}}})),Kr,qr,Jr=e((()=>{Gr(),Kr=(e,t)=>e.flatMap(e=>{let n=[];for(let[r,i]of[[`primary`,e.primary],[`secondary`,e.secondary]])i&&n.push({capturedAt:t,limitName:e.limitName,limitType:r===`primary`?`session`:`weekly_all`,resetsAt:i.resetsAt,scopeKey:e.limitId.toLowerCase()===`codex`?``:e.limitId,utilization:Math.round(i.usedPercent),windowMinutes:i.windowMinutes});return n}),qr=(e,t)=>{let n=new Map;for(let t of e){if(t.limitType!==`session`&&t.limitType!==`weekly_all`)continue;let e=JSON.stringify([t.limitType,t.scopeKey]),r=n.get(e);(!r||r.capturedAt<t.capturedAt)&&n.set(e,t)}let r=new Map;for(let e of n.values()){let n=e.scopeKey||`codex`,i=r.get(n)??{limitId:n,limitName:e.limitName??null,primary:null,secondary:null};i[e.limitType===`session`?`primary`:`secondary`]=zr(e,t),r.set(n,i)}return[...r.values()]}})),Yr=e((()=>{})),Xr=e((()=>{})),Zr=e((()=>{})),Qr=e((()=>{})),$r=e((()=>{})),ei,ti,ni,ri=e((()=>{Fr(),ei=e=>Math.round(e/6e4)*6e4,ti=e=>JSON.stringify([e.limitType,e.scopeKey,e.resetsAt]),ni=(e,t=Pr)=>{let n=new Map;for(let r of e){if(r.resetsAt==null)continue;let e=ei(r.resetsAt),i=r.windowMinutes==null?t(r.limitType):r.windowMinutes*60,a=ti({...r,resetsAt:e}),o=n.get(a);if(!o){n.set(a,{firstSeenAt:r.capturedAt,lastSeenAt:r.capturedAt,lastUtilization:r.utilization,limitType:r.limitType,peakUtilization:r.utilization,rateLimitedAt:r.rateLimited?r.capturedAt:null,resetsAt:e,scopeKey:r.scopeKey,windowSeconds:i,windowStartAt:e-i*1e3});continue}o.peakUtilization=Math.max(o.peakUtilization,r.utilization),r.capturedAt>=o.lastSeenAt&&(o.lastSeenAt=r.capturedAt,o.lastUtilization=r.utilization),r.capturedAt<o.firstSeenAt&&(o.firstSeenAt=r.capturedAt),r.rateLimited&&(o.rateLimitedAt==null||r.capturedAt<o.rateLimitedAt)&&(o.rateLimitedAt=r.capturedAt)}return[...n.values()].sort((e,t)=>e.resetsAt-t.resetsAt)}})),ii=e((()=>{jr(),Jr(),Yr(),Xr(),Zr(),Gr(),Qr(),Fr(),$r(),ri()})),ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li=e((()=>{ii(),ai=t(r()),oi=Nr*1e3,si=Mr*1e3,ci=300*1e3,li=e=>(0,ai.default)(e).format(`YYYY-MM-DD`),ui={scopeKey:``,type:`session`},di=e=>`${e.type}:${e.scopeKey}`,fi=e=>e.type===`session`?si:oi,pi=e=>e.hasUnpricedTurn?e.cost>0?{cost:e.cost,kind:`lower-bound`}:{kind:`unknown`}:{cost:e.cost,kind:`exact`},mi=(e,t)=>t?e.find(e=>e.externalAccountId===t):e.length===1?e[0]:void 0,hi=(e,t)=>{let n=(0,ai.default)(t).startOf(`month`);return e.isSame(n,`month`)||e.isSame(n.subtract(1,`month`),`month`)},gi=e=>e.limitType===`session`||e.limitType===`five_hour`,_i=(e,t)=>t.type===`session`?gi(e):e.limitType.startsWith(`weekly`)&&(e.scopeKey||``)===t.scopeKey,vi=e=>[...e].sort((e,t)=>e.capturedAt-t.capturedAt),yi=(e,t)=>e.resetsAt!=null&&t.resetsAt!=null?Math.abs(e.resetsAt-t.resetsAt)<ci:t.utilization>=e.utilization,bi=e=>{let t=new Map;for(let n of e){let e=li(n.occurredAt),r=t.get(e)??{cost:0,hasUnpricedTurn:!1,tokens:0};r.tokens+=n.tokens,n.cost==null?r.hasUnpricedTurn=!0:r.cost+=n.cost,t.set(e,r)}return t},xi=(e,t)=>{let n=vi(e.filter(e=>_i(e,t))),r=fi(t),i=new Map;for(let[e,t]of n.entries()){if(e===0)continue;let a=n[e-1];if(t.capturedAt-a.capturedAt>r)continue;let o=yi(a,t)?Math.max(0,t.utilization-a.utilization):t.utilization;if(o<=0)continue;let s=li(t.capturedAt);i.set(s,(i.get(s)??0)+o)}return i},Si=(e,t)=>{if(e<=0||t<=0)return 0;let n=e/t;return n<=.25?1:n<=.5?2:n<=.75?3:4},Ci=(e,t)=>{let n=Math.max(0,...[...e.values()].map(e=>e.tokens)),r=[...t].filter(([t])=>(e.get(t)?.tokens??0)===0),i=Math.max(0,...r.map(([,e])=>e)),a=new Map;for(let[t,r]of e)r.tokens>0&&a.set(t,Si(r.tokens,n));for(let[e,t]of r)a.set(e,Si(t,i));return a},wi=(e,t)=>e>0&&!t,Ti=(e,t,n)=>{let r=null;for(let i of e)_i(i,t)&&(i.resetsAt==null||i.resetsAt<=n||(!r||i.capturedAt>r.capturedAt)&&(r=i));return r?{peakUtilization:r.utilization,rateLimitedAt:null,resetsAt:r.resetsAt,windowStartAt:r.resetsAt-fi(t)}:null},Ei=(e,t,n)=>{let r=vi(e.filter(e=>_i(e,t)&&e.capturedAt>=n.windowStartAt&&e.capturedAt<=n.resetsAt&&(e.resetsAt==null||Math.abs(e.resetsAt-n.resetsAt)<ci))).map(e=>({time:e.capturedAt,utilization:Math.min(100,Math.max(0,e.utilization))}));return[{time:n.windowStartAt,utilization:0},...r]},Di=(e,t)=>e.filter(e=>e.occurredAt>=t.windowStartAt&&e.occurredAt<=t.resetsAt).reduce((e,t)=>({cost:e.cost+(t.cost??0),hasUnpricedTurn:e.hasUnpricedTurn||t.cost==null,tokens:e.tokens+t.tokens}),{cost:0,hasUnpricedTurn:!1,tokens:0}),Oi=e=>(e.resetsAt-e.windowStartAt)/5,ki=(e,t)=>{let n=e.at(-1);if(!n||e.length<2)return{kind:`safe`,projectedEndUtilization:0};if(n.utilization>=100)return{kind:`exhausted`};let r=Oi(t),i=e[0];for(let t of e)t.time<=n.time-r&&(i=t);let a=n.time-i.time,o=a>0?(n.utilization-i.utilization)/a:0;if(o<=0)return{kind:`safe`,projectedEndUtilization:n.utilization};let s=n.time+(100-n.utilization)/o;return s<=t.resetsAt?{exhaustAt:s,kind:`exhaust`}:{kind:`safe`,projectedEndUtilization:Math.min(100,n.utilization+o*(t.resetsAt-n.time))}},Ai=(e,t,n)=>{let r=Di(t,e);return{...e,cost:r.cost,hasUnpricedTurn:r.hasUnpricedTurn,isLive:e.resetsAt>n,tokens:r.tokens}},ji=(e,t,n,r,i=8)=>{let a=[];for(let n of[...e,...t?[t]:[]].sort((e,t)=>e.resetsAt-t.resetsAt)){let e=a.findIndex(e=>Math.abs(e.resetsAt-n.resetsAt)<ci);if(e<0){a.push(n);continue}let t=a[e];a[e]={peakUtilization:Math.max(t.peakUtilization,n.peakUtilization),rateLimitedAt:t.rateLimitedAt??n.rateLimitedAt,resetsAt:Math.max(t.resetsAt,n.resetsAt),windowStartAt:Math.min(t.windowStartAt,n.windowStartAt)}}return a.sort((e,t)=>t.resetsAt-e.resetsAt).slice(0,i).map(e=>Ai(e,n,r))},Mi=(e,t,n=7)=>{let r=new Map;for(let t of e){let e=li(t.windowStartAt);r.set(e,[...r.get(e)??[],t])}for(let e of r.values())e.sort((e,t)=>e.windowStartAt-t.windowStartAt);let i=t.startOf(`day`).subtract(n-1,`day`),a=Array.from({length:n},(e,t)=>{let n=i.add(t,`day`),a=n.format(`YYYY-MM-DD`);return{date:n,key:a,slots:r.get(a)??[]}}),o=Math.max(1,...a.map(e=>e.slots.length));return{columns:a.map(e=>({...e,slots:Array.from({length:o},(t,n)=>e.slots[n]??null)})),rowCount:o}},Ni=e=>e>=100?`error`:e>=80?`warning`:`safe`,Pi=e=>{let t=e.startOf(`month`),n=(t.day()+6)%7,r=t.subtract(n,`day`);return Array.from({length:42},(t,n)=>{let i=r.add(n,`day`);return{date:i,inMonth:i.month()===e.month(),key:i.format(`YYYY-MM-DD`)}})},Fi=e=>e>=1e9?`${(e/1e9).toFixed(e>=1e10?0:1)}B`:e>=1e6?`${(e/1e6).toFixed(e>=1e7?0:1)}M`:e>=1e3?`${Math.round(e/1e3)}K`:String(Math.round(e)),Ii=e=>`$${e.toFixed(e>=10?0:2)}`})),B,V,H,U,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta=e((()=>{we(),ii(),k(),S(),Jt(),p(),We(),hn(),Se(),C(),gt(),B=t(r()),u(),F(),V=t(d()),o(),dr(),Li(),H=t(f()),U={calendarGrid:I(`acss-74cnyk`,[`.acss-74cnyk{display:grid;grid-template-columns:repeat(7, minmax(0, 1fr));gap:4px;}`],`
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 4px;
  `),layout:I(`acss-1mgftb0`,[`.acss-1mgftb0{display:grid;grid-template-columns:minmax(0, 1fr) minmax(0, 1fr);gap:16px;align-items:start;}`,`.acss-1mgftb0[data-single='true']{grid-template-columns:minmax(0, 1fr);}`,`@container quota-calendar (width < 900px){.acss-1mgftb0{grid-template-columns:minmax(0, 1fr);}}`],`
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 16px;
    align-items: start;

    /* Nothing to pair the calendar with, so let it take the whole width. */
    &[data-single='true'] {
      grid-template-columns: minmax(0, 1fr);
    }

    @container quota-calendar (width < 900px) {
      grid-template-columns: minmax(0, 1fr);
    }
  `),root:I(`acss-xy6jmd`,[`.acss-xy6jmd{container-name:quota-calendar;container-type:inline-size;}`],`
    container-name: quota-calendar;
    container-type: inline-size;
  `),chartFrame:I(`acss-b2o548`,[`.acss-b2o548{padding:4px;border-radius:var(--ant-border-radius-lg);background:var(--ant-color-fill-quaternary);}`],`
    padding: 4px;
    border-radius: var(--ant-border-radius-lg);
    background: var(--ant-color-fill-quaternary);
  `),cost:I(`acss-mpdvsx`,[`.acss-mpdvsx{overflow:hidden;font-size:12px;font-weight:600;font-variant-numeric:tabular-nums;line-height:16px;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    font-size: 12px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    line-height: 16px;
    text-overflow: ellipsis;

    /* "at least $404" must stay one line — a wrap pushes it out of the cell. */
    white-space: nowrap;
  `),dayCell:I(`acss-131ift6`,[`.acss-131ift6{position:relative;display:flex;flex-direction:column;justify-content:space-between;height:58px;padding-block:4px;padding-inline:6px;border-radius:var(--ant-border-radius);font-size:12px;background:var(--ant-color-bg-container);}`,`.acss-131ift6[data-in-month='false']{opacity:0.35;}`,`.acss-131ift6 [data-day-number]{color:var(--ant-color-text-secondary);}`,`.acss-131ift6[data-rate-limited='true']{color:var(--ant-color-error-text);background:var(--ant-color-error-bg);}`,`.acss-131ift6[data-rate-limited='true'] [data-day-number],.acss-131ift6[data-rate-limited='true'] [data-day-secondary]{color:inherit;}`,`.acss-131ift6[data-today='true']{box-shadow:inset 0 0 0 1px var(--ant-color-primary-border);}`],`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 58px;
    padding-block: 4px;
    padding-inline: 6px;
    border-radius: var(--ant-border-radius);

    font-size: 12px;

    background: var(--ant-color-bg-container);

    &[data-in-month='false'] {
      opacity: 0.35;
    }

    /* The date labels the cell; the number below it carries the information. */
    & [data-day-number] {
      color: var(--ant-color-text-secondary);
    }

    /* Rate limited: the provider refused work that day — an error state, not heat. */
    &[data-rate-limited='true'] {
      color: var(--ant-color-error-text);
      background: var(--ant-color-error-bg);
    }

    /* A refused day states itself in one colour, date and volume included. */
    &[data-rate-limited='true'] [data-day-number],
    &[data-rate-limited='true'] [data-day-secondary] {
      color: inherit;
    }

    /* Today is a marker, not an alarm — the lightest ring that still reads. */
    &[data-today='true'] {
      box-shadow: inset 0 0 0 1px var(--ant-color-primary-border);
    }
  `),dayFooter:I(`acss-homrzg`,[`.acss-homrzg{display:flex;gap:4px;align-items:flex-end;justify-content:space-between;min-height:14px;}`],`
    display: flex;
    gap: 4px;
    align-items: flex-end;
    justify-content: space-between;

    min-height: 14px;
  `),heatDot:I(`acss-v4u58z`,[`.acss-v4u58z{position:absolute;inset-block-start:6px;inset-inline-end:6px;width:4px;height:4px;border-radius:50%;opacity:0.45;background:var(--ant-color-success);}`,`.acss-v4u58z[data-heat='2']{width:6px;height:6px;opacity:0.65;}`,`.acss-v4u58z[data-heat='3']{width:8px;height:8px;opacity:0.82;}`,`.acss-v4u58z[data-heat='4']{width:10px;height:10px;opacity:1;}`,`.acss-v4u58z[data-legend='true']{position:relative;inset:auto;flex:none;}`],`
    position: absolute;
    inset-block-start: 6px;
    inset-inline-end: 6px;

    width: 4px;
    height: 4px;
    border-radius: 50%;

    opacity: 0.45;
    background: var(--ant-color-success);

    &[data-heat='2'] {
      width: 6px;
      height: 6px;
      opacity: 0.65;
    }

    &[data-heat='3'] {
      width: 8px;
      height: 8px;
      opacity: 0.82;
    }

    &[data-heat='4'] {
      width: 10px;
      height: 10px;
      opacity: 1;
    }

    &[data-legend='true'] {
      position: relative;
      inset: auto;
      flex: none;
    }
  `),legendSwatch:I(`acss-120tti5`,[`.acss-120tti5{width:10px;height:10px;border-radius:3px;background:var(--ant-color-bg-container);}`,`.acss-120tti5[data-rate-limited='true']{background:var(--ant-color-error-bg);}`],`
    width: 10px;
    height: 10px;
    border-radius: 3px;
    background: var(--ant-color-bg-container);

    &[data-rate-limited='true'] {
      background: var(--ant-color-error-bg);
    }
  `),capacityRing:I(`acss-t5o7da`,[`.acss-t5o7da{position:relative;display:grid;flex:none;place-items:center;width:54px;height:54px;color:var(--ant-color-success);}`,`.acss-t5o7da[data-status='warning']{color:var(--ant-color-warning);}`,`.acss-t5o7da[data-status='error']{color:var(--ant-color-error);}`],`
    position: relative;

    display: grid;
    flex: none;
    place-items: center;

    width: 54px;
    height: 54px;

    color: var(--ant-color-success);

    &[data-status='warning'] {
      color: var(--ant-color-warning);
    }

    &[data-status='error'] {
      color: var(--ant-color-error);
    }
  `),capacityRingLabel:I(`acss-1ey89xv`,[`.acss-1ey89xv{position:absolute;font-size:13px;font-weight:600;font-variant-numeric:tabular-nums;color:currentcolor;}`],`
    position: absolute;

    font-size: 13px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    color: currentcolor;
  `),capacityRingSvg:I(`acss-1g5iv57`,[`.acss-1g5iv57{transform:rotate(-90deg);display:block;width:100%;height:100%;}`],`
    transform: rotate(-90deg);
    display: block;
    width: 100%;
    height: 100%;
  `),statusExhausted:I(`acss-ac71y0`,[`.acss-ac71y0{font-size:12px;color:var(--ant-color-error-text);}`],`
    font-size: 12px;
    color: var(--ant-color-error-text);
  `),statusForecast:I(`acss-1owrka7`,[`.acss-1owrka7{font-size:12px;color:var(--ant-color-warning-text);}`],`
    font-size: 12px;
    color: var(--ant-color-warning-text);
  `),statusSafe:I(`acss-um2tu2`,[`.acss-um2tu2{font-size:12px;color:var(--ant-color-text-secondary);}`],`
    font-size: 12px;
    color: var(--ant-color-text-secondary);
  `),tokens:I(`acss-gjbnw1`,[`.acss-gjbnw1{font-size:10px;font-variant-numeric:tabular-nums;line-height:14px;color:var(--ant-color-text-tertiary);white-space:nowrap;}`],`
    font-size: 10px;
    font-variant-numeric: tabular-nums;
    line-height: 14px;
    color: var(--ant-color-text-tertiary);
    white-space: nowrap;
  `),capacityFill:I(`acss-1cs166s`,[`.acss-1cs166s{height:100%;border-radius:inherit;background:var(--ant-color-success);}`,`.acss-1cs166s[data-status='warning']{background:var(--ant-color-warning);}`,`.acss-1cs166s[data-status='error']{background:var(--ant-color-error);}`],`
    height: 100%;
    border-radius: inherit;
    background: var(--ant-color-success);

    &[data-status='warning'] {
      background: var(--ant-color-warning);
    }

    &[data-status='error'] {
      background: var(--ant-color-error);
    }
  `),capacityTrack:I(`acss-1012ezj`,[`.acss-1012ezj{overflow:hidden;width:100%;height:5px;border-radius:999px;background:var(--ant-color-fill-secondary);}`],`
    overflow: hidden;

    width: 100%;
    height: 5px;
    border-radius: 999px;

    background: var(--ant-color-fill-secondary);
  `),windowCell:I(`acss-za1l8b`,[`.acss-za1l8b{display:flex;flex-direction:column;gap:3px;min-width:0;height:38px;padding:4px;border-radius:var(--ant-border-radius-sm);font-size:10px;font-variant-numeric:tabular-nums;line-height:1.2;color:var(--ant-color-text-secondary);white-space:nowrap;background:var(--ant-color-bg-container);}`,`.acss-za1l8b[data-rate-limited='true']{color:var(--ant-color-error-text);background:var(--ant-color-error-bg);}`],`
    display: flex;
    flex-direction: column;
    gap: 3px;

    min-width: 0;
    height: 38px;
    padding: 4px;
    border-radius: var(--ant-border-radius-sm);

    font-size: 10px;
    font-variant-numeric: tabular-nums;
    line-height: 1.2;
    color: var(--ant-color-text-secondary);

    /* "09:42 100%" is one unit — wrapping it splits the percentage in half. */
    white-space: nowrap;

    background: var(--ant-color-bg-container);

    &[data-rate-limited='true'] {
      color: var(--ant-color-error-text);
      background: var(--ant-color-error-bg);
    }
  `),windowGrid:I(`acss-74cnyk`,[`.acss-74cnyk{display:grid;grid-template-columns:repeat(7, minmax(0, 1fr));gap:4px;}`],`
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 4px;
  `),windowListRow:I(`acss-1kl871z`,[`.acss-1kl871z{display:grid;grid-template-columns:minmax(0, 1.1fr) minmax(110px, 1fr) minmax(0, 1fr);gap:12px;align-items:center;min-height:30px;padding-block:5px;padding-inline:2px;}`,`.acss-1kl871z:not(:last-child){border-block-end:1px solid var(--ant-color-border-secondary);}`],`
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(110px, 1fr) minmax(0, 1fr);
    gap: 12px;
    align-items: center;

    min-height: 30px;
    padding-block: 5px;
    padding-inline: 2px;

    &:not(:last-child) {
      border-block-end: 1px solid var(--ant-color-border-secondary);
    }
  `),sectionPanel:I(`acss-o9xp95`,[`.acss-o9xp95{padding:10px;border-radius:var(--ant-border-radius-lg);background:var(--ant-color-fill-quaternary);}`],`
    padding: 10px;
    border-radius: var(--ant-border-radius-lg);
    background: var(--ant-color-fill-quaternary);
  `),weekday:I(`acss-s4ev0g`,[`.acss-s4ev0g{font-size:11px;color:var(--ant-color-text-quaternary);text-align:center;}`],`
    font-size: 11px;
    color: var(--ant-color-text-quaternary);
    text-align: center;
  `)},Ri=e=>e==null?null:new Date(e).getTime(),zi=e=>e.map(e=>({peakUtilization:e.peakUtilization,rateLimitedAt:Ri(e.rateLimitedAt),resetsAt:Ri(e.resetsAt),seriesId:e.limitType.startsWith(`weekly`)?`weekly:${e.scopeKey||``}`:`session:`,windowStartAt:Ri(e.windowStartAt)})),Bi=640,Vi=120,Hi=90,Ui=22,Wi=2*Math.PI*Ui,Gi=(e,t)=>(e-t.windowStartAt)/(t.resetsAt-t.windowStartAt)*Bi,Ki=e=>Vi*(1-e/100),qi=(e,t,n=!1)=>{let r=pi(e);return r.kind===`unknown`?t(`heteroAgent.claudeQuota.calendar.unpricedCost`):r.kind===`lower-bound`?t(n?`heteroAgent.claudeQuota.calendar.partialCostCompact`:`heteroAgent.claudeQuota.calendar.partialCost`,{cost:Ii(r.cost)}):Ii(r.cost)},Ji=(0,V.memo)(({now:e,readings:t,series:r,turns:i,window:a})=>{let{t:o}=n(`chat`),s=(0,V.useMemo)(()=>Ei(t,r,a),[t,r,a]),c=a.resetsAt>e,l=(0,V.useMemo)(()=>ki(s,a),[s,a]),u=(0,V.useMemo)(()=>Di(i,a),[i,a]),d=s.at(-1),f=s.map(e=>`${Gi(e.time,a)},${Ki(e.utilization)}`).join(` `),p=`M0,${Vi} L${f.replaceAll(` `,` L`)} L${Gi(d.time,a)},${Vi} Z`,h=l.kind===`exhaust`?{time:l.exhaustAt,utilization:100}:l.kind===`safe`?{time:a.resetsAt,utilization:l.projectedEndUtilization}:null,g=l.kind===`exhaust`,_=l.kind===`exhausted`,v=r.type===`session`?`HH:mm`:`M/D HH:mm`,y=c?_?o(`heteroAgent.claudeQuota.calendar.burnout.exhausted`,{time:(0,B.default)(a.resetsAt).format(v)}):g?o(`heteroAgent.claudeQuota.calendar.burnout.willExhaust`,{time:(0,B.default)(l.exhaustAt).format(v)}):o(`heteroAgent.claudeQuota.calendar.burnout.safe`,{percent:Math.round(l.projectedEndUtilization)}):o(`heteroAgent.claudeQuota.calendar.pastWindow`);return(0,H.jsxs)(m,{gap:8,children:[(0,H.jsxs)(m,{horizontal:!0,align:`flex-end`,gap:12,justify:`space-between`,children:[(0,H.jsxs)(m,{horizontal:!0,align:`center`,gap:10,children:[(0,H.jsx)(Yi,{utilization:d.utilization}),(0,H.jsxs)(m,{gap:2,children:[(0,H.jsx)(T,{style:{fontSize:12},type:`secondary`,children:o(`heteroAgent.claudeQuota.calendar.usedOfWindow`)}),(0,H.jsx)(T,{style:{fontSize:12},type:`secondary`,children:u.tokens>0?o(`heteroAgent.claudeQuota.calendar.windowSpend`,{cost:qi(u,o,!0),tokens:Fi(u.tokens)}):o(`heteroAgent.claudeQuota.calendar.noLedgerSpend`)})]})]}),(0,H.jsx)(`span`,{className:_?U.statusExhausted:g?U.statusForecast:U.statusSafe,children:y})]}),(0,H.jsx)(`div`,{className:U.chartFrame,children:(0,H.jsxs)(`svg`,{height:Vi,preserveAspectRatio:`none`,style:{display:`block`},viewBox:`0 0 ${Bi} ${Vi}`,width:`100%`,children:[[25,50,75].map(e=>(0,H.jsx)(`line`,{stroke:R.colorBorderSecondary,strokeWidth:1,x1:0,x2:Bi,y1:Ki(e),y2:Ki(e)},e)),(0,H.jsx)(`line`,{stroke:R.colorTextQuaternary,strokeDasharray:`4 4`,strokeWidth:1,x1:0,x2:Bi,y1:Vi,y2:0}),(0,H.jsx)(`path`,{d:p,fill:R.colorSuccess,opacity:.12}),(0,H.jsx)(`polyline`,{fill:`none`,points:f,stroke:R.colorSuccess,strokeWidth:2}),c&&h&&(0,H.jsx)(`line`,{stroke:g?R.colorWarning:R.colorTextTertiary,strokeDasharray:`4 4`,strokeWidth:1.5,x1:Gi(d.time,a),x2:Gi(h.time,a),y1:Ki(d.utilization),y2:Ki(h.utilization)}),c&&g&&(0,H.jsx)(`circle`,{cx:Gi(l.exhaustAt,a),cy:Ki(100),fill:R.colorWarning,r:3.5}),(0,H.jsx)(`circle`,{cx:Gi(d.time,a),cy:Ki(d.utilization),fill:R.colorSuccess,r:3.5})]})}),(0,H.jsxs)(m,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,H.jsx)(T,{style:{fontSize:11},type:`secondary`,children:(0,B.default)(a.windowStartAt).format(v)}),(0,H.jsx)(T,{style:{color:R.colorTextQuaternary,fontSize:11},children:o(`heteroAgent.claudeQuota.calendar.pace`)}),(0,H.jsx)(T,{style:{fontSize:11},type:`secondary`,children:(0,B.default)(a.resetsAt).format(v)})]})]})}),Ji.displayName=`BurnChart`,Yi=(0,V.memo)(({utilization:e})=>{let t=Math.min(100,Math.max(0,e));return(0,H.jsxs)(`div`,{"aria-label":`${Math.round(e)}%`,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":Math.round(e),className:U.capacityRing,"data-status":Ni(e),role:`meter`,children:[(0,H.jsxs)(`svg`,{className:U.capacityRingSvg,viewBox:`0 0 54 54`,children:[(0,H.jsx)(`circle`,{cx:27,cy:27,fill:`none`,r:Ui,stroke:R.colorFillSecondary,strokeWidth:5}),(0,H.jsx)(`circle`,{cx:27,cy:27,fill:`none`,r:Ui,stroke:`currentColor`,strokeDasharray:Wi,strokeDashoffset:Wi*(1-t/100),strokeLinecap:`round`,strokeWidth:5})]}),(0,H.jsxs)(`span`,{className:U.capacityRingLabel,children:[Math.round(e),`%`]})]})}),Yi.displayName=`CapacityRing`,Xi=(0,V.memo)(({utilization:e})=>(0,H.jsx)(`div`,{"aria-label":`${Math.round(e)}%`,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":Math.round(e),className:U.capacityTrack,role:`meter`,children:(0,H.jsx)(`div`,{className:U.capacityFill,"data-status":Ni(e),style:{width:`${Math.min(100,Math.max(0,e))}%`}})})),Xi.displayName=`CapacityMeter`,Zi=(e,t)=>[`${(0,B.default)(e.windowStartAt).format(`M/D HH:mm`)} – ${(0,B.default)(e.resetsAt).format(`M/D HH:mm`)}`,t(`heteroAgent.claudeQuota.calendar.windowUtilization`,{percent:Math.round(e.peakUtilization)}),e.tokens>0?t(`heteroAgent.claudeQuota.calendar.windowSpend`,{cost:qi(e,t),tokens:Fi(e.tokens)}):t(`heteroAgent.claudeQuota.calendar.noLedgerSpendShort`),e.rateLimitedAt&&t(`heteroAgent.claudeQuota.calendar.rateLimited`)].filter(Boolean),Qi=(0,V.memo)(({series:e,stats:t})=>{let{t:r}=n(`chat`);if(t.length===0)return null;if(e.type===`session`){let e=Mi(t,(0,B.default)(Math.max(...t.map(e=>e.windowStartAt))));return(0,H.jsxs)(m,{className:U.sectionPanel,gap:8,children:[(0,H.jsxs)(m,{horizontal:!0,align:`baseline`,justify:`space-between`,children:[(0,H.jsx)(T,{strong:!0,style:{fontSize:13},children:r(`heteroAgent.claudeQuota.calendar.sessionHistory`)}),(0,H.jsx)(T,{style:{fontSize:11},type:`secondary`,children:r(`heteroAgent.claudeQuota.calendar.sessionHistoryHint`)})]}),(0,H.jsxs)(`div`,{className:U.windowGrid,children:[e.columns.map(e=>(0,H.jsx)(`div`,{className:U.weekday,children:e.date.format(`dd M/D`)},e.key)),Array.from({length:e.rowCount},(t,n)=>e.columns.map(e=>{let t=e.slots[n];if(!t)return(0,H.jsx)(`div`,{className:U.windowCell},`${e.key}-${n}`);let i=(0,H.jsxs)(`div`,{className:U.windowCell,"data-rate-limited":t.rateLimitedAt!=null,children:[(0,H.jsxs)(m,{horizontal:!0,justify:`space-between`,style:{minWidth:0,width:`100%`},children:[(0,H.jsx)(`span`,{children:(0,B.default)(t.windowStartAt).format(`HH:mm`)}),(0,H.jsxs)(`strong`,{children:[Math.round(t.peakUtilization),`%`]})]}),(0,H.jsx)(Xi,{utilization:t.peakUtilization})]},`${e.key}-${t.resetsAt}`);return(0,H.jsx)(D,{title:Zi(t,r).join(` · `),children:i},`${e.key}-${t.resetsAt}`)}))]})]})}return(0,H.jsxs)(m,{className:U.sectionPanel,gap:6,children:[(0,H.jsxs)(m,{horizontal:!0,align:`baseline`,justify:`space-between`,children:[(0,H.jsx)(T,{strong:!0,style:{fontSize:13},children:r(`heteroAgent.claudeQuota.calendar.weeklyHistory`)}),(0,H.jsx)(T,{style:{fontSize:11},type:`secondary`,children:r(`heteroAgent.claudeQuota.calendar.weeklyHistoryHint`)})]}),(0,H.jsx)(m,{children:t.map(e=>(0,H.jsxs)(`div`,{className:U.windowListRow,children:[(0,H.jsxs)(m,{horizontal:!0,align:`baseline`,gap:6,children:[(0,H.jsxs)(T,{style:{fontSize:11,whiteSpace:`nowrap`},children:[(0,B.default)(e.windowStartAt).format(`M/D`),` – `,(0,B.default)(e.resetsAt).format(`M/D`)]}),e.isLive&&(0,H.jsx)(T,{style:{fontSize:10,whiteSpace:`nowrap`},type:`secondary`,children:r(`heteroAgent.claudeQuota.calendar.currentWindow`)})]}),(0,H.jsxs)(m,{horizontal:!0,align:`center`,gap:8,children:[(0,H.jsx)(m,{flex:1,style:{minWidth:0},children:(0,H.jsx)(Xi,{utilization:e.peakUtilization})}),(0,H.jsxs)(T,{strong:!0,style:{flex:`none`,fontSize:12,textAlign:`right`,width:34},children:[Math.round(e.peakUtilization),`%`]})]}),e.tokens>0?(0,H.jsx)(D,{title:Zi(e,r).join(` · `),children:(0,H.jsxs)(T,{style:{fontSize:11,textAlign:`right`},type:`secondary`,children:[Fi(e.tokens),` · `,qi(e,r,!0)]})}):(0,H.jsx)(D,{title:r(`heteroAgent.claudeQuota.calendar.noLedgerSpendHint`),children:(0,H.jsxs)(m,{horizontal:!0,align:`center`,gap:4,justify:`flex-end`,children:[(0,H.jsx)(y,{color:R.colorTextTertiary,icon:te,size:11}),(0,H.jsx)(T,{style:{fontSize:11},type:`secondary`,children:r(`heteroAgent.claudeQuota.calendar.noLedgerSpendShort`)})]})})]},e.resetsAt))})]})}),Qi.displayName=`WindowHistory`,$i=(0,V.memo)(({externalAccountId:e})=>{let{t}=n(`chat`),[r,i]=(0,V.useState)(!1),[a,o]=(0,V.useState)(!0),[s,c]=(0,V.useState)([]),[l,u]=(0,V.useState)([]),[d,f]=(0,V.useState)([]),[p,h]=(0,V.useState)(ui),[g,_]=(0,V.useState)(()=>(0,B.default)().startOf(`month`)),v=Date.now();(0,V.useEffect)(()=>{let t=!1;return(async()=>{let n=mi((await z.listAccounts().catch(()=>[])).filter(e=>e.provider===`claude-code`),e);if(!n){t||i(!0);return}i(!1);let[r,a,o]=await Promise.all([z.getWindows(n.id,200).catch(()=>[]),z.listSnapshots(n.id,Hi).catch(()=>[]),z.listUsageTurns(n.id,Hi).catch(()=>[])]);t||(f(zi(r)),c(a),u(o))})().finally(()=>o(!1)),()=>{t=!0}},[e]);let b=(0,V.useMemo)(()=>{let e=[...new Set(s.filter(e=>e.limitType.startsWith(`weekly`)&&e.scopeKey).map(e=>e.scopeKey))].sort();return[{label:t(`heteroAgent.claudeQuota.calendar.sessionWindow`),value:`session:`},{label:t(`heteroAgent.quota.weekly`),value:`weekly:`},...e.map(e=>({label:t(`heteroAgent.claudeQuota.scopedWeekly`,{model:e}),value:`weekly:${e}`}))]},[s,t]),x=(0,V.useMemo)(()=>bi(l),[l]),S=(0,V.useMemo)(()=>xi(s,p),[s,p]),C=(0,V.useMemo)(()=>Ci(x,S),[S,x]),w=(0,V.useMemo)(()=>[...d,...zi(ni(s))],[s,d]),E=(0,V.useMemo)(()=>{let e=Ti(s,p,v);if(e)return e;let t=w.filter(e=>e.seriesId===di(p));return t.length>0?t.reduce((e,t)=>e.resetsAt>t.resetsAt?e:t):null},[w,s,p]),O=(0,V.useMemo)(()=>ji(w.filter(e=>e.seriesId===di(p)),E,l,v,p.type===`session`?40:8),[w,E,l,p]),k=(0,V.useMemo)(()=>{if(p.type===`session`)return new Map;let e=new Map;for(let t of d)t.seriesId===di(p)&&e.set(li(t.resetsAt),t.resetsAt);return E&&E.resetsAt>v&&e.set(li(E.resetsAt),E.resetsAt),e},[d,p,E]),j=(0,V.useMemo)(()=>new Set(d.filter(e=>e.seriesId===di(p)&&e.rateLimitedAt!=null).map(e=>li(e.rateLimitedAt))),[d,p]),M=(0,V.useMemo)(()=>Pi(g),[g]),P=(0,V.useMemo)(()=>Array.from({length:7},(e,t)=>(0,B.default)().day((t+1)%7).format(`dd`)),[]),ee=li(v),te=g.subtract(1,`month`),ne=g.add(1,`month`);if(a)return(0,H.jsxs)(m,{gap:12,children:[(0,H.jsx)(Ce,{height:170}),(0,H.jsx)(Ce,{height:320})]});if(s.length===0&&d.length===0)return(0,H.jsx)(T,{style:{paddingBlock:24,textAlign:`center`},type:`secondary`,children:t(r?`heteroAgent.claudeQuota.calendar.accountUnavailable`:`heteroAgent.claudeQuota.calendar.empty`)});let re=(e,n)=>{let r=e&&(e.cost>0||e.hasUnpricedTurn)?qi(e,t,!0):``,i=e&&e.tokens>0?Fi(e.tokens):``,a=!i&&n>0?`${Math.round(n)}%`:``,o=i||a;return r?{primary:r,secondary:o}:{primary:o,secondary:``}},ae=!!E||O.length>0;return(0,H.jsx)(`div`,{className:U.root,children:(0,H.jsxs)(`div`,{className:U.layout,"data-single":!ae,children:[(0,H.jsxs)(m,{gap:16,children:[(0,H.jsx)(gn,{options:b,size:`small`,style:{alignSelf:`flex-start`},value:di(p),onChange:e=>{let[t,n=``]=String(e).split(`:`);h({scopeKey:n,type:t===`session`?`session`:`weekly`})}}),E&&(0,H.jsx)(Ji,{now:v,readings:s,series:p,turns:l,window:E}),(0,H.jsx)(Qi,{series:p,stats:O})]}),(0,H.jsxs)(m,{className:U.sectionPanel,gap:8,children:[(0,H.jsxs)(m,{horizontal:!0,align:`center`,gap:4,justify:`space-between`,children:[(0,H.jsxs)(m,{horizontal:!0,align:`baseline`,gap:8,children:[(0,H.jsx)(T,{strong:!0,style:{fontSize:13},children:t(`heteroAgent.claudeQuota.calendar.monthSpend`)}),(0,H.jsx)(T,{style:{fontSize:11},type:`secondary`,children:g.format(`YYYY/MM`)})]}),(0,H.jsxs)(m,{horizontal:!0,gap:2,children:[(0,H.jsx)(A,{disabled:!hi(te,v),icon:pe,size:`small`,onClick:()=>_(e=>e.subtract(1,`month`))}),(0,H.jsx)(A,{disabled:!hi(ne,v),icon:le,size:`small`,onClick:()=>_(e=>e.add(1,`month`))})]})]}),(0,H.jsxs)(`div`,{className:U.calendarGrid,children:[P.map(e=>(0,H.jsx)(`div`,{className:U.weekday,children:e},e)),M.map(e=>{let n=x.get(e.key),r=S.get(e.key)??0,i=k.get(e.key),a=j.has(e.key),o=C.get(e.key)??0,{primary:s,secondary:c}=re(n,r),l=[n&&n.tokens>0&&t(`heteroAgent.claudeQuota.calendar.dayTokens`,{cost:qi(n,t),tokens:Fi(n.tokens)}),r>0&&t(`heteroAgent.claudeQuota.calendar.dayShare`,{percent:Math.round(r)}),i&&t(`heteroAgent.claudeQuota.calendar.resetAt`,{time:(0,B.default)(i).format(`HH:mm`)}),a&&t(`heteroAgent.claudeQuota.calendar.rateLimited`)].filter(Boolean),u=(0,H.jsxs)(`div`,{className:U.dayCell,"data-in-month":e.inMonth,"data-rate-limited":a,"data-today":e.key===ee,children:[(0,H.jsx)(`span`,{"data-day-number":!0,children:e.date.date()}),wi(o,a)&&(0,H.jsx)(`span`,{"aria-hidden":!0,className:U.heatDot,"data-heat":o}),(0,H.jsxs)(`span`,{className:U.dayFooter,children:[(0,H.jsx)(`span`,{className:U.cost,children:s}),(0,H.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:2},children:[a&&(0,H.jsx)(y,{color:R.colorError,icon:ie,size:12}),i&&(0,H.jsx)(y,{color:R.colorTextSecondary,icon:N,size:11})]})]}),c&&(0,H.jsx)(`span`,{"data-day-secondary":!0,className:U.tokens,children:c})]},e.key);return l.length>0?(0,H.jsx)(D,{title:l.join(` · `),children:u},e.key):u})]}),(0,H.jsxs)(m,{horizontal:!0,align:`center`,gap:12,style:{fontSize:11},wrap:`wrap`,children:[(0,H.jsxs)(m,{horizontal:!0,align:`center`,gap:4,children:[(0,H.jsx)(T,{style:{fontSize:11},type:`secondary`,children:t(`heteroAgent.claudeQuota.calendar.legendLess`)}),[1,2,3,4].map(e=>(0,H.jsx)(`span`,{className:U.heatDot,"data-heat":e,"data-legend":`true`},e)),(0,H.jsx)(T,{style:{fontSize:11},type:`secondary`,children:t(`heteroAgent.claudeQuota.calendar.legendMore`)})]}),(0,H.jsxs)(m,{horizontal:!0,align:`center`,gap:4,children:[(0,H.jsx)(`span`,{className:U.legendSwatch,"data-rate-limited":`true`}),(0,H.jsx)(y,{color:R.colorError,icon:ie,size:11}),(0,H.jsx)(T,{style:{fontSize:11},type:`secondary`,children:t(`heteroAgent.claudeQuota.calendar.rateLimited`)})]}),p.type!==`session`&&(0,H.jsxs)(m,{horizontal:!0,align:`center`,gap:4,children:[(0,H.jsx)(y,{color:R.colorTextSecondary,icon:N,size:11}),(0,H.jsx)(T,{style:{fontSize:11},type:`secondary`,children:t(`heteroAgent.claudeQuota.calendar.legendReset`)})]})]})]})]})})}),$i.displayName=`QuotaCalendar`,ea=(e={})=>w({content:(0,H.jsx)($i,{externalAccountId:e.externalAccountId}),footer:null,title:a(`heteroAgent.claudeQuota.calendar.title`,{ns:`chat`}),width:1040})})),na=e((()=>{ta()})),W,G,ra,ia,aa,oa,sa,ca,la,ua=e((()=>{we(),ii(),zt(),k(),S(),ln(),p(),_(),We(),pn(),x(),C(),u(),F(),W=t(d()),o(),dr(),G=t(f()),ra={footer:I(`acss-ru3bei`,[`.acss-ru3bei{margin-block-start:4px;padding-block-start:10px;border-block-start:1px solid var(--ant-color-border-secondary);}`],`
    margin-block-start: 4px;
    padding-block-start: 10px;
    border-block-start: 1px solid var(--ant-color-border-secondary);
  `),hint:I(`acss-xwvxkr`,[`.acss-xwvxkr{font-size:12px;color:var(--ant-color-text-tertiary);}`],`
    font-size: 12px;
    color: var(--ant-color-text-tertiary);
  `),interactive:I(`acss-1v6gmkc`,[`.acss-1v6gmkc{display:contents;}`],`
    display: contents;
  `),radioGroup:I(`acss-1x2rzup`,[`.acss-1x2rzup{width:100%;}`,`.acss-1x2rzup >label{width:100%;}`,`.acss-1x2rzup >label>span:last-child{flex:1;min-width:0;}`],`
    width: 100%;

    > label {
      width: 100%;
    }

    > label > span:last-child {
      flex: 1;
      min-width: 0;
    }
  `),routing:I(`acss-1ylfm48`,[`.acss-1ylfm48{padding-block:6px;padding-inline:10px;border-radius:var(--ant-border-radius);font-size:12px;color:var(--ant-color-text-secondary);background:var(--ant-color-fill-quaternary);}`],`
    padding-block: 6px;
    padding-inline: 10px;
    border-radius: var(--ant-border-radius);

    font-size: 12px;
    color: var(--ant-color-text-secondary);

    background: var(--ant-color-fill-quaternary);
  `),row:I(`acss-yxy9xi`,[`.acss-yxy9xi{padding-block:6px;padding-inline:4px;border-radius:var(--ant-border-radius);}`,`.acss-yxy9xi:hover{background:var(--ant-color-fill-quaternary);}`,`.acss-yxy9xi[data-off='true']{opacity:0.5;}`],`
    padding-block: 6px;
    padding-inline: 4px;
    border-radius: var(--ant-border-radius);

    &:hover {
      background: var(--ant-color-fill-quaternary);
    }

    &[data-off='true'] {
      opacity: 0.5;
    }
  `)},ia=`auto`,aa=e=>Math.min(100,Math.max(0,Math.round(e))),oa=(e,t=Date.now())=>{let n=e.find(e=>Vr(e));return n?aa(100-Rr(n,t)):void 0},sa=e=>e.label||e.email||e.externalAccountId,ca=(0,W.memo)(({agentId:e})=>{let{t}=n(`chat`),[r,i]=(0,W.useState)([]),[o,s]=(0,W.useState)([]),[c,l]=(0,W.useState)({}),[u,d]=(0,W.useState)(!1),[f,p]=(0,W.useState)(null),[h,_]=(0,W.useState)(null),[b,x]=(0,W.useState)(``),S=(0,W.useCallback)(async()=>{let[t,n]=await Promise.all([z.listAccounts(),z.listBindings(e)]);i(t),s(n);let r=await Promise.all(t.map(async e=>{let t=await z.getLatestReadings(e.id).catch(()=>[]);return[e.id,oa(t)]}));l(Object.fromEntries(r))},[e]);(0,W.useEffect)(()=>{S().catch(()=>{})},[S]);let C=(0,W.useCallback)(e=>o.find(t=>t.accountId===e)?.role,[o]),w=(0,W.useCallback)(e=>o.find(t=>t.accountId===e),[o]),E=(0,W.useCallback)(e=>{let t=C(e);return t===`pinned`||t===`pool`},[C]),D=o.find(e=>e.role===`pinned`)?.accountId,O=D??ia,k=f??O,j=f!==null&&f!==O,M=(0,W.useCallback)(async e=>{d(!0);try{await e(),await S()}finally{d(!1)}},[S]),N=(0,W.useMemo)(()=>{if(k!==ia)return null;let e=r.filter(e=>E(e.id));return e.length===0?null:[...e].sort((e,t)=>(c[t.id]??100)-(c[e.id]??100))[0].id},[k,r,E,c]),P=r.find(e=>e.id===N),te=(0,W.useCallback)(()=>M(async()=>{let t=f;t!==null&&(t===ia?D&&await z.bindAccount(e,D,`pool`):(o.some(e=>e.accountId===t)||await z.bindAccount(e,t,`pool`),await z.switchAccount(e,t)))}).then(()=>p(null)),[e,o,f,D,M]),re=(0,W.useCallback)((t,n)=>M(()=>z.bindAccount(e,t,n?`pool`:`disabled`)),[e,M]),ie=(0,W.useCallback)(e=>{let t=w(e);if(t)return f===e&&p(null),M(()=>z.unbindAccount(t.id))},[w,f,M]),ae=(0,W.useCallback)(e=>{_(e.id),x(e.label??``)},[]),oe=(0,W.useCallback)(e=>M(()=>z.updateAccount(e,{label:b.trim()||void 0})).then(()=>_(null)),[b,M]),ce=(0,W.useCallback)(e=>{e.preventDefault(),e.stopPropagation()},[]);return(0,G.jsxs)(m,{gap:2,children:[(0,G.jsx)(mn,{className:ra.radioGroup,gap:2,horizontal:!1,value:k,options:[{disabled:u,label:(0,G.jsxs)(m,{className:ra.row,gap:4,children:[(0,G.jsx)(T,{style:{fontSize:13},children:t(`heteroAgent.claudeQuota.manage.modeAuto`)}),k===ia&&(0,G.jsxs)(m,{horizontal:!0,align:`center`,className:ra.routing,gap:6,children:[(0,G.jsx)(y,{icon:fe,size:14}),P?t(`heteroAgent.claudeQuota.manage.autoRoutingTo`,{account:sa(P)}):t(`heteroAgent.claudeQuota.manage.autoNoAccount`)]})]}),value:ia},...r.map(e=>{let n=E(e.id),r=c[e.id],i=h===e.id,a=[{icon:(0,G.jsx)(y,{icon:ee}),key:`edit`,label:t(`heteroAgent.claudeQuota.manage.edit`),onClick:()=>ae(e)},{type:`divider`},{danger:!0,disabled:!w(e.id),icon:(0,G.jsx)(y,{icon:de}),key:`remove`,label:t(`heteroAgent.claudeQuota.manage.remove`),onClick:()=>void ie(e.id)}];return{disabled:u||!n||i,label:(0,G.jsx)(m,{horizontal:!0,align:`center`,className:ra.row,"data-off":!n,gap:8,children:i?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(un,{autoFocus:!0,size:`small`,style:{flex:1},value:b,placeholder:e.email||t(`heteroAgent.claudeQuota.manage.labelPlaceholder`),onChange:e=>x(e.target.value),onPressEnter:()=>void oe(e.id)}),(0,G.jsx)(A,{disabled:u,icon:he,size:`small`,onClick:()=>void oe(e.id)}),(0,G.jsx)(A,{icon:se,size:`small`,onClick:()=>_(null)})]}):(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(m,{flex:1,gap:0,style:{minWidth:0},children:[(0,G.jsxs)(m,{horizontal:!0,align:`center`,gap:6,style:{minWidth:0},children:[(0,G.jsx)(T,{ellipsis:!0,style:{fontSize:13},children:sa(e)}),e.planTier&&(0,G.jsx)(T,{style:{flex:`none`,fontSize:12},type:`secondary`,children:e.planTier})]}),n&&r!=null&&(0,G.jsx)(T,{style:{fontSize:12},type:`secondary`,children:r===0?t(`heteroAgent.claudeQuota.manage.exhausted`):t(`heteroAgent.claudeQuota.manage.weeklyLeft`,{percent:r})})]}),(0,G.jsx)(`span`,{className:ra.interactive,onClick:ce,children:(0,G.jsx)(v,{checked:n,disabled:u,size:`small`,onChange:t=>void re(e.id,t)})}),(0,G.jsx)(`span`,{className:ra.interactive,onClick:ce,children:(0,G.jsx)(Ht,{items:a,placement:`bottomRight`,children:(0,G.jsx)(A,{icon:ne,size:`small`,title:t(`heteroAgent.claudeQuota.manage.more`)})})})]})}),value:e.id}})],onChange:p}),r.length===0&&(0,G.jsx)(T,{className:ra.hint,children:t(`heteroAgent.claudeQuota.manage.empty`)}),j?(0,G.jsxs)(m,{horizontal:!0,className:ra.footer,gap:8,justify:`flex-end`,children:[(0,G.jsx)(g,{disabled:u,onClick:()=>p(null),children:a(`cancel`,{ns:`common`})}),(0,G.jsx)(g,{loading:u,type:`primary`,onClick:()=>void te(),children:t(`heteroAgent.claudeQuota.manage.confirmSwitch`)})]}):(0,G.jsx)(T,{className:ra.hint,style:{marginBlockStart:4},children:t(`heteroAgent.claudeQuota.manage.addHint`)})]})}),ca.displayName=`QuotaAccountManager`,la=e=>w({content:(0,G.jsx)(ca,{agentId:e}),footer:null,title:a(`heteroAgent.claudeQuota.manage.title`,{ns:`chat`}),width:460})})),da,fa,pa,ma,ha=e((()=>{we(),k(),p(),_(),C(),F(),da=t(d()),o(),na(),Nn(),ua(),fa=t(f()),pa={bottom:I(`acss-1nhazk3`,[`.acss-1nhazk3{padding-block-start:8px;border-block-start:1px solid var(--ant-color-border-secondary);}`],`
    padding-block-start: 8px;
    border-block-start: 1px solid var(--ant-color-border-secondary);
  `),top:I(`acss-1xjdkzl`,[`.acss-1xjdkzl{padding-block-end:8px;border-block-end:1px solid var(--ant-color-border-secondary);}`],`
    padding-block-end: 8px;
    border-block-end: 1px solid var(--ant-color-border-secondary);
  `)},ma=(0,da.memo)(({snapshot:e,placement:t=`top`})=>{let{t:r}=n(`chat`),i=jn(),a=e.identity,o=(0,da.useCallback)(()=>{i&&la(i)},[i]);return i?(0,fa.jsxs)(m,{horizontal:!0,align:`center`,className:t===`top`?pa.top:pa.bottom,gap:8,justify:`space-between`,children:[(0,fa.jsxs)(m,{horizontal:!0,align:`center`,gap:6,style:{minWidth:0},children:[(0,fa.jsx)(T,{ellipsis:!0,style:{fontSize:12},children:a?.displayName||a?.email||r(`heteroAgent.claudeQuota.accounts`)}),a?.planTier&&(0,fa.jsx)(T,{style:{flex:`none`,fontSize:12},type:`secondary`,children:a.planTier}),(0,fa.jsx)(A,{icon:re,size:`small`,style:{flex:`none`},title:r(`heteroAgent.claudeQuota.calendar.entry`),onClick:()=>ea({externalAccountId:a?.externalAccountId})})]}),(0,fa.jsx)(g,{size:`small`,style:{flex:`none`},onClick:o,children:r(`heteroAgent.claudeQuota.manage.entry`)})]}):null}),ma.displayName=`QuotaAccountSwitcher`})),K,q,ga,_a,J,va,ya,ba,xa,Sa,Ca,wa=e((()=>{we(),k(),S(),wt(),Jt(),p(),Se(),C(),gt(),F(),K=t(d()),o(),q=t(f()),ga=6e4,_a=6e4,J={compactItem:I(`acss-j7g8hw`,[`.acss-j7g8hw{color:inherit;}`,`.acss-j7g8hw[data-quota-level='low']{color:var(--ant-color-warning-text);}`],`
    color: inherit;

    &[data-quota-level='low'] {
      color: var(--ant-color-warning-text);
    }
  `),compactItems:I(`acss-17aujk7`,[`.acss-17aujk7{display:inline-flex;gap:4px;align-items:center;}`],`
    display: inline-flex;
    gap: 4px;
    align-items: center;
  `),compactSeparator:I(`acss-185s3ho`,[`.acss-185s3ho{color:var(--ant-color-text-quaternary);}`],`
    color: var(--ant-color-text-quaternary);
  `),emptyState:I(`acss-1n9pvjk`,[`.acss-1n9pvjk{padding-block:10px;font-size:12px;color:var(--ant-color-text-description);}`],`
    padding-block: 10px;
    font-size: 12px;
    color: var(--ant-color-text-description);
  `),error:I(`acss-14k9ipn`,[`.acss-14k9ipn{padding:8px;border:1px solid var(--ant-color-error-border);border-radius:var(--ant-border-radius);font-size:12px;color:var(--ant-color-error);background:var(--ant-color-error-bg);}`],`
    padding: 8px;
    border: 1px solid var(--ant-color-error-border);
    border-radius: var(--ant-border-radius);

    font-size: 12px;
    color: var(--ant-color-error);

    background: var(--ant-color-error-bg);
  `),refreshNotice:I(`acss-dbkj12`,[`.acss-dbkj12{padding:8px;border:1px solid var(--ant-color-warning-border);border-radius:var(--ant-border-radius);font-size:12px;color:var(--ant-color-warning-text);background:var(--ant-color-warning-bg);}`],`
    padding: 8px;
    border: 1px solid var(--ant-color-warning-border);
    border-radius: var(--ant-border-radius);

    font-size: 12px;
    color: var(--ant-color-warning-text);

    background: var(--ant-color-warning-bg);
  `),header:I(`acss-1niyov`,[`.acss-1niyov{padding-block-end:6px;border-block-end:1px solid var(--ant-color-border-secondary);}`],`
    padding-block-end: 6px;
    border-block-end: 1px solid var(--ant-color-border-secondary);
  `),popover:I(`acss-19ob3eq`,[`.acss-19ob3eq{width:292px;}`],`
    width: 292px;
  `),progressFill:I(`acss-1v1ogn3`,[`.acss-1v1ogn3{height:100%;border-radius:inherit;background:var(--ant-color-success);}`],`
    height: 100%;
    border-radius: inherit;
    background: var(--ant-color-success);
  `),progressFillWarning:I(`acss-tgdknd`,[`.acss-tgdknd{background:var(--ant-color-warning);}`],`
    background: var(--ant-color-warning);
  `),progressTrack:I(`acss-wfzgpg`,[`.acss-wfzgpg{overflow:hidden;flex:1;min-width:24px;height:6px;border-radius:999px;background:var(--ant-color-fill-quaternary);}`],`
    overflow: hidden;
    flex: 1;

    min-width: 24px;
    height: 6px;
    border-radius: 999px;

    background: var(--ant-color-fill-quaternary);
  `),resetShort:I(`acss-l1ct87`,[`.acss-l1ct87{flex:none;white-space:nowrap;}`],`
    flex: none;
    white-space: nowrap;
  `),trigger:I(`acss-1vazluy`,[`.acss-1vazluy{cursor:pointer;display:flex;flex:none;gap:6px;align-items:center;padding-block:2px;padding-inline:4px;border:0;border-radius:4px;font:inherit;font-size:12px;color:var(--ant-color-text-secondary);white-space:nowrap;appearance:none;background:transparent;transition:all 0.2s;}`,`.acss-1vazluy:hover{color:var(--ant-color-text-secondary);background:var(--ant-color-fill-tertiary);}`,`.acss-1vazluy[data-quota-level='low']{color:var(--ant-color-warning-text);}`,`.acss-1vazluy[data-quota-level='low']:hover{color:var(--ant-color-warning-text);}`],`
    cursor: pointer;

    display: flex;
    flex: none;
    gap: 6px;
    align-items: center;

    padding-block: 2px;
    padding-inline: 4px;
    border: 0;
    border-radius: 4px;

    font: inherit;
    font-size: 12px;
    color: var(--ant-color-text-secondary);
    white-space: nowrap;

    appearance: none;
    background: transparent;

    transition: all 0.2s;

    &:hover {
      color: var(--ant-color-text-secondary);
      background: var(--ant-color-fill-tertiary);
    }

    &[data-quota-level='low'] {
      color: var(--ant-color-warning-text);

      &:hover {
        color: var(--ant-color-warning-text);
      }
    }
  `),triggerOpen:I(`acss-1qys9dt`,[`.acss-1qys9dt{color:var(--ant-color-text-secondary);background:var(--ant-color-fill-secondary);}`],`
    color: var(--ant-color-text-secondary);
    background: var(--ant-color-fill-secondary);
  `),value:I(`acss-1txcbi`,[`.acss-1txcbi{flex:none;font-variant-numeric:tabular-nums;color:var(--ant-color-text);}`],`
    flex: none;
    font-variant-numeric: tabular-nums;
    color: var(--ant-color-text);
  `),valueWarning:I(`acss-rzjruc`,[`.acss-rzjruc{color:var(--ant-color-warning-text);}`],`
    color: var(--ant-color-warning-text);
  `),window:I(`acss-zwlk01`,[`.acss-zwlk01{min-width:0;}`],`
    min-width: 0;
  `),windowExhausted:I(`acss-ijc2s8`,[`.acss-ijc2s8{opacity:0.45;}`],`
    /* nothing to act on until reset → grey the whole row out */
    opacity: 0.45;
  `),windowLabel:I(`acss-6zjzuj`,[`.acss-6zjzuj{flex:none;width:84px;color:var(--ant-color-text-secondary);}`],`
    flex: none;
    width: 84px;
    color: var(--ant-color-text-secondary);
  `)},va=e=>Math.min(100,Math.max(0,Math.round(e))),ya=15,ba=e=>e<ya,xa=e=>!e||typeof e==`string`?e??null:Object.entries(e).sort(([e],[t])=>e.localeCompare(t)),Sa=(...e)=>JSON.stringify(e.map(e=>xa(e))),Ca=({autoRefreshMs:e,contentWidth:t,createErrorSnapshot:r,fetchQuota:i,getErrorText:a,getRefreshErrorText:o,getUnavailableText:s,getWindows:c,hasExtraData:l,renderFooter:u,renderHeader:d,sourceKey:f=`default`,title:p,tooltip:h})=>{let{t:g}=n(`chat`),[_,v]=(0,K.useState)(!1),[b,x]=(0,K.useState)(!1),[S,C]=(0,K.useState)(null),[w,E]=(0,K.useState)(null),[O,k]=(0,K.useState)(()=>Date.now()),j=(0,K.useRef)(0),N=(0,K.useRef)(null),P=(0,K.useRef)(0),ee=(0,K.useRef)(f),te=(0,K.useCallback)(e=>e?c(e).some(e=>e.window)||!!l?.(e):!1,[c,l]),ne=(0,K.useCallback)(e=>{N.current=e,C(e)},[]),re=(0,K.useCallback)(e=>{ee.current===f&&(P.current+=1,x(!1),E(null),ne(e))},[ne,f]),ie=(0,K.useCallback)((e,t)=>e===P.current&&t===ee.current,[]),ae=(0,K.useCallback)((e,t={},n=P.current,r=ee.current)=>{if(ie(n,r)){if(e.status===`error`){if(j.current=Date.now(),te(N.current)){t.manual&&E(e);return}}else j.current=0;E(null),ne(e)}},[te,ie,ne]),se=(0,K.useCallback)(async(e={})=>{let t=ee.current,n=P.current+1;P.current=n,E(null),x(!0);try{ae(await i({...e.manual?{force:!0}:{},...e.revalidate?{revalidate:!0}:{},onInterim:e=>{ie(n,t)&&ne(e)}}),e,n,t)}catch(i){console.error(`Failed to fetch agent quota:`,i),ae(r(i),e,n,t)}finally{ie(n,t)&&x(!1)}},[ae,r,i,ie,ne]);(0,K.useEffect)(()=>{ee.current=f,N.current=null,j.current=0,C(null),E(null)},[f]),(0,K.useEffect)(()=>{se()},[se,f]),(0,K.useEffect)(()=>{let e=window.setInterval(()=>k(Date.now()),ga);return()=>{window.clearInterval(e)}},[]),(0,K.useEffect)(()=>{if(!e)return;let t=window.setInterval(()=>{if(document.visibilityState===`hidden`||b)return;let t=Date.now();j.current>0&&t-j.current<_a||S&&t-S.updatedAt<e||se({revalidate:!0})},e);return()=>{window.clearInterval(t)}},[e,se,b,S]),(0,K.useEffect)(()=>{let e=()=>{if(document.visibilityState===`hidden`||b)return;let e=Date.now();j.current>0&&e-j.current<_a||S&&e-S.updatedAt<=ga||se({revalidate:!0})};return window.addEventListener(`focus`,e),document.addEventListener(`visibilitychange`,e),()=>{window.removeEventListener(`focus`,e),document.removeEventListener(`visibilitychange`,e)}},[se,b,S]);let le=(0,K.useCallback)(e=>{if(e<=0)return;let t=Math.floor(e/6e4),n=Math.floor(t/1440),r=Math.floor(t%1440/60),i=t%60,a=[];return n>0&&a.push(g(`heteroAgent.quota.duration.day`,{count:n})),r>0&&a.push(g(`heteroAgent.quota.duration.hour`,{count:r})),i>0&&a.length<2&&a.push(g(`heteroAgent.quota.duration.minute`,{count:i})),a.slice(0,2).join(` `)||void 0},[g]),ue=(0,K.useCallback)(e=>{let t=le(O-e);return t?g(`heteroAgent.quota.updatedAgo`,{duration:t}):g(`heteroAgent.quota.updatedJustNow`)},[le,O,g]),de=S?c(S):[],fe=new Map;for(let e of de){if(!e.window)continue;let t=va(100-e.window.usedPercent),n=e.compactGroup??`default`,r=fe.get(n);(!r||t<r.leftPercent)&&fe.set(n,{key:n,label:e.compactLabel,leftPercent:t})}let pe=[...fe.values()],F=te(S),me=w&&(o?.(w)||g(`heteroAgent.quota.refreshFailed`)),he=S?.status===`error`&&F?o?.(S)||g(`heteroAgent.quota.refreshFailed`):void 0,ge=me||he,_e=(0,K.useCallback)(e=>{if(v(e),!e||b)return;let t=Date.now(),n=j.current>0&&t-j.current<_a;(!S||t-S.updatedAt>ga)&&!n&&se({revalidate:!0})},[se,b,S]),ve=({key:e,label:t,window:n})=>{if(!n)return null;let r=va(100-n.usedPercent),i=n.resetsAt?le(n.resetsAt-O):void 0,a=r===0,o=!a&&ba(r);return(0,q.jsxs)(m,{horizontal:!0,align:`center`,className:nt(J.window,a&&J.windowExhausted),gap:8,children:[(0,q.jsx)(T,{ellipsis:!0,className:J.windowLabel,style:{fontSize:12},children:t}),(0,q.jsx)(`div`,{className:J.progressTrack,children:(0,q.jsx)(`div`,{className:nt(J.progressFill,o&&J.progressFillWarning),"data-quota-level":o?`low`:`normal`,style:{width:`${r}%`}})}),(0,q.jsx)(T,{className:nt(J.value,o&&J.valueWarning),style:{fontSize:12},children:a?g(`heteroAgent.quota.exhausted`):`${r}%`}),i&&(0,q.jsx)(T,{className:J.resetShort,style:{fontSize:12},type:`secondary`,children:i})]},e)},ye=(0,q.jsxs)(m,{className:J.popover,gap:10,style:{width:t},children:[(0,q.jsxs)(m,{horizontal:!0,align:`center`,className:J.header,gap:8,justify:`space-between`,children:[(0,q.jsxs)(m,{horizontal:!0,align:`baseline`,gap:6,style:{minWidth:0},children:[(0,q.jsx)(T,{strong:!0,style:{fontSize:13},children:p}),S?.updatedAt&&(0,q.jsx)(T,{ellipsis:!0,style:{fontSize:11},type:`secondary`,children:ue(S.updatedAt)})]}),(0,q.jsx)(D,{title:g(`heteroAgent.quota.refresh`),children:(0,q.jsx)(A,{disabled:b,icon:M,size:`small`,onClick:()=>void se({manual:!0})})})]}),b&&!F?(0,q.jsxs)(m,{gap:8,children:[(0,q.jsx)(Ce,{height:18}),(0,q.jsx)(Ce,{height:18}),(0,q.jsx)(Ce,{height:18})]}):S?.status===`unavailable`?(0,q.jsx)(`div`,{className:J.emptyState,children:s?.(S)||S.error||g(`heteroAgent.quota.unavailable`)}):S?.status===`error`&&!F?(0,q.jsx)(`div`,{className:J.error,children:a?.(S)||S.error||g(`heteroAgent.quota.unavailable`)}):F?(0,q.jsxs)(q.Fragment,{children:[S&&d?.(S,{applyQuota:re,formatDuration:le,now:O}),(0,q.jsx)(m,{gap:10,children:de.map(e=>ve(e))}),S&&u?.(S,{applyQuota:re,formatDuration:le,now:O}),ge&&(0,q.jsx)(`div`,{className:J.refreshNotice,children:ge})]}):(0,q.jsx)(`div`,{className:J.emptyState,children:g(`heteroAgent.quota.noData`)})]}),be=(0,q.jsxs)(`button`,{"aria-expanded":_,"aria-haspopup":`dialog`,"aria-label":h,className:nt(J.trigger,_&&J.triggerOpen),type:`button`,"data-quota-level":pe.length===1?ba(pe[0].leftPercent)?`low`:`normal`:void 0,children:[(0,q.jsx)(y,{icon:oe,size:14}),pe.length>0&&(0,q.jsx)(`span`,{className:J.compactItems,children:pe.map((e,t)=>(0,q.jsxs)(`span`,{children:[t>0&&(0,q.jsx)(`span`,{"aria-hidden":!0,className:J.compactSeparator,children:` · `}),(0,q.jsxs)(`span`,{className:J.compactItem,"data-quota-level":pe.length>1?ba(e.leftPercent)?`low`:`normal`:void 0,children:[e.label&&`${e.label} `,e.leftPercent===0&&!e.label?g(`heteroAgent.quota.exhausted`):g(`heteroAgent.quota.compactLeft`,{percent:e.leftPercent})]})]},e.key))}),(0,q.jsx)(y,{icon:ce,size:12})]});return(0,q.jsx)(Tt,{content:ye,open:_,placement:`topRight`,trigger:`click`,onOpenChange:_e,children:(0,q.jsx)(`div`,{children:_?be:(0,q.jsx)(D,{title:h,children:be})})})}})),Ta,Ea,Da,Oa,ka,Aa,ja,Ma=e((()=>{ii(),Ta=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():Date.parse(e);return Number.isNaN(t)?null:t},Ea=e=>({displayName:e.displayName??void 0,email:e.email??void 0,externalAccountId:e.externalAccountId??void 0,organizationId:e.organizationId??void 0,planTier:e.planTier??void 0,rateLimitTier:e.rateLimitTier??void 0}),Da=e=>e.reduce((e,t)=>Math.max(e,t.capturedAt),0),Oa=(e,t)=>{let n=e.externalAccountId;return n?t.identity?.externalAccountId===n:!0},ka=(e,t,n,r=Date.now())=>{let i=n?.status===`ok`&&Oa(e,n)?n:null,a=Wr(i?.readings?.length?[...t,...i.readings]:t,r),o=Ta(e.updatedAt)??0,s=i?Math.max(o,i.updatedAt):o;return{error:null,identity:Ea(e),provider:`claude-code`,scopedWeekly:a.scopedWeekly??i?.scopedWeekly??null,session:a.session??i?.session??null,status:`ok`,updatedAt:s||r,weekly:a.weekly??i?.weekly??null}},Aa=e=>!!e.session||!!e.weekly||!!e.scopedWeekly,ja=(e,t,n)=>{let r=Ta(e);return r===null||t-r>n}})),Na,Pa,Fa,Ia,La,Ra,za,Ba=e((()=>{Na=t(d()),o(),Nn(),ct(),dr(),Ar(),ha(),wa(),Ma(),Pa=t(f()),Fa=120*1e3,Ia=e=>({error:e instanceof Error?e.message:String(e),provider:`claude-code`,scopedWeekly:null,session:null,status:`error`,updatedAt:Date.now(),weekly:null}),La=e=>({error:null,provider:`claude-code`,reason:e,scopedWeekly:null,session:null,status:`unavailable`,updatedAt:Date.now(),weekly:null}),Ra=e=>e.error?.includes(`429`)??!1,za=(0,Na.memo)(({deviceId:e,env:t})=>{let{t:r}=n(`chat`),i=jn(),a=Sa(`claude-code`,e??`local`,t),o=vt(()=>new Map),s=(0,Na.useCallback)(async n=>{let r=!!n?.force,[a,s]=await Promise.all([z.listAccounts().catch(()=>[]),i?z.listBindings(i).catch(()=>[]):[]]),c=a,l=c.filter(e=>e.provider===`claude-code`),u=s.find(e=>e.role===`pinned`)?.accountId,d=e?o.get(e):void 0,f=e?l.find(e=>e.externalAccountId===d):l.find(e=>e.id===u)??l[0],p=f?await z.getLatestReadings(f.id).catch(()=>[]):[],m=null;if(r||n?.revalidate||e&&!d||ja(f?.updatedAt,Date.now(),Fa)){if(f&&p.length>0){let e=ka(f,p,null);Aa(e)&&n?.onInterim?.(e)}m=await kr({deviceId:e,env:t,force:r}).catch(()=>null);let i=m?.identity?.externalAccountId;if(m?.status===`ok`&&i&&m.readings?.length){e&&o.set(e,i);let t=m.readings.reduce((e,t)=>Math.max(e,t.capturedAt),0),n=l.find(e=>e.externalAccountId===i),r=n?await z.getLatestReadings(n.id).catch(()=>[]):[];n&&t<=Da(r)?(f=n,p=r):(await z.ingestClaudeSnapshot({deviceId:e,identity:m.identity,readings:m.readings}).catch(()=>{}),c=await z.listAccounts().catch(()=>c),l=c.filter(e=>e.provider===`claude-code`),f=l.find(e=>e.externalAccountId===i)??l.find(e=>e.id===u)??l[0],p=f?await z.getLatestReadings(f.id).catch(()=>p):p)}}let h=f?ka(f,p,m):null;return h&&Aa(h)?h:m??h??La()},[i,e,t,o]),c=(0,Na.useCallback)(e=>[{compactGroup:`global`,compactLabel:r(`heteroAgent.quota.session`),key:`session`,label:r(`heteroAgent.quota.session`),window:e.session},{compactGroup:`global`,compactLabel:r(`heteroAgent.quota.weekly`),key:`weekly`,label:r(`heteroAgent.quota.weekly`),window:e.weekly},...e.scopedWeekly?[{compactGroup:`scopedWeekly`,compactLabel:e.scopedWeekly.modelName,key:`scopedWeekly`,label:r(`heteroAgent.claudeQuota.scopedWeekly`,{model:e.scopedWeekly.modelName}),window:e.scopedWeekly.window}]:[]],[r]),l=(0,Na.useCallback)(e=>{switch(e.reason){case`credentials-expired`:return r(`heteroAgent.claudeQuota.unavailableExpired`);case`credentials-not-found`:return r(`heteroAgent.claudeQuota.unavailableNotFound`);case`external-auth`:return r(`heteroAgent.claudeQuota.unavailableExternalAuth`);default:return}},[r]);return(0,Pa.jsx)(Ca,{autoRefreshMs:Fa,createErrorSnapshot:Ia,fetchQuota:s,getErrorText:(0,Na.useCallback)(e=>Ra(e)?r(`heteroAgent.claudeQuota.errorRateLimited`):r(`heteroAgent.claudeQuota.errorGeneric`),[r]),getRefreshErrorText:(0,Na.useCallback)(e=>{if(Ra(e))return r(`heteroAgent.claudeQuota.refreshRateLimited`)},[r]),getUnavailableText:l,getWindows:c,renderHeader:e=>(0,Pa.jsx)(ma,{placement:`top`,snapshot:e}),sourceKey:a,title:r(`heteroAgent.claudeQuota.title`),tooltip:r(`heteroAgent.claudeQuota.tooltip`)})}),za.displayName=`ClaudeCodeQuotaMenu`})),Va,Ha=e((()=>{ii(),Va=(e,t,n,r=Date.now())=>{let i=n?.status===`ok`&&n.identity?.externalAccountId===e.externalAccountId?n:null,a=i?.readings??(i?Kr(i.rateLimits??[{limitId:`codex`,limitName:null,primary:i.session,secondary:i.weekly}],i.updatedAt):[]),o=qr([...t,...a],r),s=o.find(e=>e.limitId===`codex`)??o[0];return{error:null,identity:{externalAccountId:e.externalAccountId??void 0},provider:`codex`,rateLimitResetCredits:i?.rateLimitResetCredits,rateLimits:o,session:s?.primary??null,status:`ok`,updatedAt:Math.max(e.updatedAt?new Date(e.updatedAt).getTime():0,i?.updatedAt??0)||r,weekly:s?.secondary??null}}})),Ua,Wa,Ga,Ka=e((()=>{dr(),Ha(),fr(),Ua=2*6e4,Wa=async(e,t)=>{try{return await e}catch(e){return console.error(`[codexQuota:read-persisted]`,e),t}},Ga=e=>{let t,n=null;return Object.assign(async(r={})=>{let[i,a]=await Promise.all([Wa(z.listAccounts(),[]),e.agentId?Wa(z.listBindings(e.agentId),[]):[]]),o=i.filter(e=>e.provider===`codex`),s=a.find(e=>e.role===`pinned`)?.accountId,c=e.deviceId||e.env?.CODEX_HOME?o.find(e=>e.externalAccountId===t):o.find(e=>e.externalAccountId===t)??o.find(e=>e.id===s)??o[0],l=c?await Wa(z.getLatestReadings(c.id),[]):[],u=c&&l.length?Va(c,l,n):null,d=c?.updatedAt?new Date(c.updatedAt).getTime():0;if(u&&!r.force&&!r.revalidate&&Date.now()-d<Ua)return u;u&&r.onInterim?.(u);let f;try{f=e.deviceId?await z.refreshCodexQuota({command:e.command,env:e.env,deviceId:e.deviceId,...r.force?{force:!0}:{}}):await pr.getCodexQuota({command:e.command,env:e.env,...r.force?{force:!0}:{}})}catch(e){if(console.error(`[codexQuota:refresh]`,e),u)return u;throw e}f?.status===`ok`&&(n=f);let p=f?.identity?.externalAccountId;if(f?.status===`ok`&&p){t=p,c=o.find(e=>e.externalAccountId===p),l=c?await Wa(z.getLatestReadings(c.id),[]):[];let n=f.readings?.filter(e=>!l.some(t=>t.limitType===e.limitType&&t.scopeKey===e.scopeKey&&t.capturedAt>=e.capturedAt));if(!e.deviceId&&n?.length)try{c=await z.ingestCodexSnapshot({identity:f.identity,readings:n})}catch(e){console.error(`[codexQuota:ingest]`,e)}e.deviceId&&!c&&(c=(await Wa(z.listAccounts(),[])).find(e=>e.provider===`codex`&&e.externalAccountId===p)),c&&(l=await Wa(z.getLatestReadings(c.id),[]))}else f?.status===`ok`&&(t=void 0,c=void 0,l=[]);return c&&l.length?Va(c,l,f):f??u??{error:`Device is unavailable`,provider:`codex`,session:null,status:`error`,updatedAt:Date.now(),weekly:null}},{acceptLocalSnapshot:async e=>{n=e,e.status===`ok`&&e.identity?.externalAccountId&&e.readings?.length&&(t=e.identity.externalAccountId,await z.ingestCodexSnapshot({identity:e.identity,readings:e.readings}))}})}})),Y,X,qa,Ja,Ya,Xa,Za,Qa,$a,eo,to,no=e((()=>{we(),rt(),k(),S(),Ze(),_(),Cn(),C(),Me(),gt(),F(),Y=t(d()),o(),Nn(),Ka(),fr(),wa(),X=t(f()),qa=300,Ja=10080,Ya=672*60,Xa=744*60,Za=e=>/error sending request for url|fetch failed|\b(?:ECONNREFUSED|ENOTFOUND|ETIMEDOUT)\b/i.test(e.error??``),Qa={credit:I(`acss-12ktnfp`,[`.acss-12ktnfp{min-width:0;padding-block:8px;padding-inline:10px;}`,`.acss-12ktnfp:not(:last-child){border-block-end:1px solid var(--ant-color-border-secondary);}`],`
    min-width: 0;
    padding-block: 8px;
    padding-inline: 10px;

    &:not(:last-child) {
      border-block-end: 1px solid var(--ant-color-border-secondary);
    }
  `),creditCollapse:I(`acss-ybrhvy`,[`.acss-ybrhvy{width:100%;}`],`
    width: 100%;
  `),creditExpiry:I(`acss-1qveugi`,[`.acss-1qveugi{flex:none;text-align:end;white-space:nowrap;}`],`
    flex: none;
    text-align: end;
    white-space: nowrap;
  `),creditIndex:I(`acss-ggzihe`,[`.acss-ggzihe{flex:0 0 20px;font-variant-numeric:tabular-nums;color:var(--ant-color-text-tertiary);text-align:center;}`],`
    flex: 0 0 20px;
    font-variant-numeric: tabular-nums;
    color: var(--ant-color-text-tertiary);
    text-align: center;
  `),creditList:I(`acss-1rqosxp`,[`.acss-1rqosxp{overflow:hidden;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius);background:var(--ant-color-fill-quaternary);}`],`
    overflow: hidden;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius);
    background: var(--ant-color-fill-quaternary);
  `),creditTitle:I(`acss-9iogpv`,[`.acss-9iogpv{overflow:hidden;flex:1;min-width:0;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;
    flex: 1;

    min-width: 0;

    text-overflow: ellipsis;
    white-space: nowrap;
  `),feedback:I(`acss-r2t5y9`,[`.acss-r2t5y9{padding:8px;border:1px solid var(--ant-color-info-border);border-radius:var(--ant-border-radius);color:var(--ant-color-info-text);background:var(--ant-color-info-bg);}`,`.acss-r2t5y9[data-kind='error']{border-color:var(--ant-color-error-border);color:var(--ant-color-error-text);background:var(--ant-color-error-bg);}`,`.acss-r2t5y9[data-kind='success']{border-color:var(--ant-color-success-border);color:var(--ant-color-success-text);background:var(--ant-color-success-bg);}`],`
    padding: 8px;
    border: 1px solid var(--ant-color-info-border);
    border-radius: var(--ant-border-radius);

    color: var(--ant-color-info-text);

    background: var(--ant-color-info-bg);

    &[data-kind='error'] {
      border-color: var(--ant-color-error-border);
      color: var(--ant-color-error-text);
      background: var(--ant-color-error-bg);
    }

    &[data-kind='success'] {
      border-color: var(--ant-color-success-border);
      color: var(--ant-color-success-text);
      background: var(--ant-color-success-bg);
    }
  `),resetCredits:I(`acss-1nhazk3`,[`.acss-1nhazk3{padding-block-start:8px;border-block-start:1px solid var(--ant-color-border-secondary);}`],`
    padding-block-start: 8px;
    border-block-start: 1px solid var(--ant-color-border-secondary);
  `)},$a=e=>({error:e instanceof Error?e.message:String(e),provider:`codex`,rateLimitResetCredits:null,session:null,status:`error`,updatedAt:Date.now(),weekly:null}),eo=(e,t)=>[...e??[]].filter(e=>e.status===`available`&&(e.expiresAt===null||e.expiresAt>t)).sort((e,t)=>{let n=(e.expiresAt??1/0)-(t.expiresAt??1/0);return n===0?(e.id??``).localeCompare(t.id??``):n}),to=(0,Y.memo)(({command:e,deviceId:t,env:r})=>{let{t:i}=n(`chat`),a=jn(),o=Sa(`codex`,a,t,e,r),s=(0,Y.useRef)(o),c=(0,Y.useRef)(null),[l,u]=(0,Y.useState)(),[d,f]=(0,Y.useState)(!1);(0,Y.useEffect)(()=>{s.current=o,c.current=null,u(void 0),f(!1)},[o]);let p=(0,Y.useMemo)(()=>Ga({agentId:a,command:e,deviceId:t,env:r}),[a,e,t,r]),h=(0,Y.useCallback)((e,t)=>e?e.windowMinutes===qa?i(`heteroAgent.codexQuota.fiveHour`):e.windowMinutes===Ja?i(`heteroAgent.quota.weekly`):e.windowMinutes>=Ya&&e.windowMinutes<=Xa?i(`heteroAgent.codexQuota.monthly`):t:t,[i]),_=(0,Y.useCallback)(e=>{let t=e.rateLimits?.find(e=>e.limitId.toLowerCase()===`codex`);return t?[{key:`${t.limitId}:primary`,label:h(t.primary,i(`heteroAgent.quota.session`)),window:t.primary},{key:`${t.limitId}:secondary`,label:h(t.secondary,i(`heteroAgent.quota.weekly`)),window:t.secondary}]:[{key:`primary`,label:h(e.session,i(`heteroAgent.quota.session`)),window:e.session},{key:`secondary`,label:h(e.weekly,i(`heteroAgent.quota.weekly`)),window:e.weekly}]},[h,i]),v=(0,Y.useCallback)(e=>!t&&!!e.rateLimitResetCredits,[t]),x=(0,Y.useCallback)(e=>Za(e)?i(`heteroAgent.codexQuota.errorConnection`):i(`heteroAgent.codexQuota.errorGeneric`),[i]),S=(0,Y.useCallback)(async(t,n,a)=>{let o=c.current,l=o&&o.creditId===t?o:{...t?{creditId:t}:{},idempotencyKey:Qe()};c.current=l,u(void 0),f(!0);try{let t=await pr.consumeCodexRateLimitResetCredit({command:e,...l.creditId?{creditId:l.creditId}:{},env:r,idempotencyKey:l.idempotencyKey});if(s.current!==a)return;switch(n(t.quota),p.acceptLocalSnapshot(t.quota).catch(e=>console.error(`[codexQuota:reset-ingest]`,e)),c.current=null,t.outcome){case`alreadyRedeemed`:case`reset`:{let e=i(`heteroAgent.codexQuota.resetSuccess`);u({kind:`success`,text:e}),b.success(e);break}case`nothingToReset`:u({kind:`info`,text:i(`heteroAgent.codexQuota.resetNothingToReset`)});break;case`noCredit`:u({kind:`error`,text:i(`heteroAgent.codexQuota.resetNoCredit`)});break}}catch(e){if(console.error(`Failed to consume Codex rate-limit reset credit:`,e),s.current!==a)return;let t=i(`heteroAgent.codexQuota.resetFailed`);u({kind:`error`,text:t}),b.error(t)}finally{s.current===a&&f(!1)}},[e,r,p,i]),C=(0,Y.useCallback)((e,t)=>{let n=o;O({cancelText:i(`cancel`,{ns:`common`}),content:i(`heteroAgent.codexQuota.resetConfirmDescription`),okText:i(`heteroAgent.codexQuota.resetNow`),onOk:()=>S(e,t,n),title:i(`heteroAgent.codexQuota.resetConfirmTitle`)})},[S,o,i]);return(0,X.jsx)(Ca,{contentWidth:360,createErrorSnapshot:$a,fetchQuota:p,getErrorText:x,getRefreshErrorText:x,getWindows:_,hasExtraData:v,renderFooter:(0,Y.useCallback)((e,{applyQuota:t,formatDuration:n,now:r})=>{let a=e.rateLimitResetCredits;if(!a)return(0,X.jsx)(m,{className:Qa.resetCredits,gap:4,children:(0,X.jsxs)(m,{horizontal:!0,align:`center`,gap:4,children:[(0,X.jsx)(y,{icon:N,size:14}),(0,X.jsx)(T,{style:{fontSize:12},type:`secondary`,children:i(`heteroAgent.codexQuota.resetCreditsUnavailable`)})]})});let o=a.availableCount,s=eo(a.credits,r).slice(0,o),c=s[0],u=Array.from({length:o},(e,t)=>({credit:s[t],index:t+1}));return(0,X.jsx)(m,{className:Qa.resetCredits,children:(0,X.jsx)(ht,{className:Qa.creditCollapse,defaultValue:[],indicatorPlacement:`end`,variant:`borderless`,items:[{children:(0,X.jsxs)(m,{gap:8,children:[u.length>0&&(0,X.jsx)(m,{className:Qa.creditList,children:u.map(({credit:e,index:t})=>{let o=t===1?a.nextExpiresAt:void 0,s=e?e.expiresAt:o,c=s?n(s-r):void 0;return(0,X.jsxs)(m,{horizontal:!0,align:`center`,className:Qa.credit,gap:8,children:[(0,X.jsx)(T,{className:Qa.creditIndex,style:{fontSize:12},children:`#${t}`}),(0,X.jsx)(T,{strong:!0,className:Qa.creditTitle,style:{fontSize:12},children:e?.title||i(`heteroAgent.codexQuota.resetCreditTitle`)}),(0,X.jsx)(T,{className:Qa.creditExpiry,style:{fontSize:12},type:`secondary`,children:s?c?i(`heteroAgent.codexQuota.expiresIn`,{duration:c}):i(`heteroAgent.codexQuota.expiresSoon`):i(e?`heteroAgent.codexQuota.doesNotExpire`:`heteroAgent.codexQuota.resetCreditDetailsUnavailable`)})]},e?.id??`reset-credit-${t}`)})}),l&&(0,X.jsx)(`div`,{"aria-live":`polite`,className:Qa.feedback,"data-kind":l.kind,role:l.kind===`error`?`alert`:`status`,children:l.text}),o>0&&(0,X.jsx)(g,{block:!0,icon:N,loading:d,size:`small`,type:`primary`,onClick:()=>C(c?.id??void 0,t),children:i(d?`heteroAgent.codexQuota.resetting`:`heteroAgent.codexQuota.resetNow`)})]}),disabled:!(o>0||l),key:`reset-credits`,title:(0,X.jsxs)(m,{gap:2,children:[(0,X.jsxs)(m,{horizontal:!0,align:`center`,gap:4,children:[(0,X.jsx)(y,{icon:N,size:14}),(0,X.jsx)(T,{strong:!0,style:{fontSize:12},children:i(`heteroAgent.codexQuota.resetCredits`,{count:o})})]}),a.totalEarnedCount!==void 0&&(0,X.jsx)(T,{color:R.colorTextTertiary,style:{fontSize:12},children:i(`heteroAgent.codexQuota.totalEarned`,{count:a.totalEarnedCount})})]})}]})})},[C,l,d,i]),sourceKey:o,title:i(`heteroAgent.codexQuota.title`),tooltip:i(`heteroAgent.codexQuota.tooltip`)})}),to.displayName=`CodexQuotaMenu`})),ro=e((()=>{Ba(),no()})),io,ao,oo,so,co=e((()=>{we(),ve(),pt(),k(),S(),Jt(),Se(),gt(),F(),io=t(d()),o(),$n(),Pn(),Zn(),Nn(),Vn(),be(),Dn(),Fe(),Ne(),ro(),ao=t(f()),oo={bar:I(`acss-14299y6`,[`.acss-14299y6{container:runtimebar/inline-size;flex:none;height:28px;padding-block:0;padding-inline:4px;}`],`
    container: runtimebar / inline-size;
    flex: none;

    height: 28px;
    padding-block: 0;
    padding-inline: 4px;
  `),fullAccess:I(`acss-168nvpb`,[`.acss-168nvpb{cursor:default;display:flex;flex:none;gap:6px;align-items:center;padding-block:2px;padding-inline:4px;border-radius:4px;font-size:12px;color:var(--ant-color-text-secondary);white-space:nowrap;}`],`
    cursor: default;

    display: flex;
    flex: none;
    gap: 6px;
    align-items: center;

    padding-block: 2px;
    padding-inline: 4px;
    border-radius: 4px;

    font-size: 12px;
    color: var(--ant-color-text-secondary);
    white-space: nowrap;
  `),fullAccessLabel:I(`acss-16jxh9s`,[`@container runtimebar (width < 600px){.acss-16jxh9s{display:none;}}`],`
    @container runtimebar (width < 600px) {
      display: none;
    }
  `),sdkRuntime:I(`acss-twzgnl`,[`.acss-twzgnl{cursor:default;display:flex;flex:none;gap:6px;align-items:center;padding-block:2px;padding-inline:4px;border-radius:4px;font-size:12px;color:var(--ant-color-info);white-space:nowrap;background:color-mix(in srgb, var(--ant-color-info-bg) 55%, transparent);}`],`
    cursor: default;

    display: flex;
    flex: none;
    gap: 6px;
    align-items: center;

    padding-block: 2px;
    padding-inline: 4px;
    border-radius: 4px;

    font-size: 12px;
    color: var(--ant-color-info);
    white-space: nowrap;

    background: color-mix(in srgb, var(--ant-color-info-bg) 55%, transparent);
  `),sdkRuntimeClosing:I(`acss-a82c63`,[`.acss-a82c63{color:var(--ant-color-text-description);background:var(--ant-color-fill-quaternary);}`],`
    color: var(--ant-color-text-description);
    background: var(--ant-color-fill-quaternary);
  `),sdkRuntimeError:I(`acss-1l9fetf`,[`.acss-1l9fetf{color:var(--ant-color-error);background:color-mix(in srgb, var(--ant-color-error-bg) 55%, transparent);}`],`
    color: var(--ant-color-error);
    background: color-mix(in srgb, var(--ant-color-error-bg) 55%, transparent);
  `),sdkRuntimeIdle:I(`acss-dgz4yc`,[`.acss-dgz4yc{color:var(--ant-color-text-secondary);background:var(--ant-color-fill-quaternary);}`],`
    color: var(--ant-color-text-secondary);
    background: var(--ant-color-fill-quaternary);
  `),sdkRuntimeMonitoring:I(`acss-1t24isx`,[`.acss-1t24isx{color:var(--ant-color-warning);background:color-mix(in srgb, var(--ant-color-warning-bg) 55%, transparent);}`],`
    color: var(--ant-color-warning);
    background: color-mix(in srgb, var(--ant-color-warning-bg) 55%, transparent);
  `),sdkRuntimeStale:I(`acss-1t24isx`,[`.acss-1t24isx{color:var(--ant-color-warning);background:color-mix(in srgb, var(--ant-color-warning-bg) 55%, transparent);}`],`
    color: var(--ant-color-warning);
    background: color-mix(in srgb, var(--ant-color-warning-bg) 55%, transparent);
  `),leftGroup:I(`acss-1tfac5x`,[`.acss-1tfac5x{scrollbar-width:none;overflow:auto hidden;flex:1;min-width:0;}`,`.acss-1tfac5x::-webkit-scrollbar{display:none;}`],`
    scrollbar-width: none;
    overflow: auto hidden;
    flex: 1;
    min-width: 0;

    &::-webkit-scrollbar {
      display: none;
    }
  `),rightGroup:I(`acss-1dkyhev`,[`.acss-1dkyhev{flex:none;}`],`
    flex: none;
  `)},new Set([`starting`,`running`,`monitoring`,`idle`,`stale`,`closing`,`error`]),so=(0,io.memo)(()=>{let{t:e}=n(`chat`),t=jn(),{canConfigureResource:r,isAccessLoading:i}=Ln(),[a,o]=(0,io.useState)();Je(`heteroAgentRuntimeStatus`,e=>{e.transport===`claude-sdk`&&o(e)});let s=ot(Ee.isAgentConfigLoadingById(t)),{agencyConfig:c,workspaceScoped:l}=En(t),u=c?.heterogeneousProvider,d=ze(c,{clientExecutionAvailable:!1,isHetero:!!u,workspaceScoped:l}),f=d===`local`,p=(u?.authMode??`subscription`)===`subscription`,h=u?.authMode===`api`,g=d===`device`?c?.boundDeviceId:void 0,_=p&&u?.type===`claude-code`&&(f||!!g),v=p&&u?.type===`codex`&&(f||!!g);return i?null:r?t?(0,ao.jsxs)(m,{horizontal:!0,align:`center`,className:oo.bar,justify:`space-between`,children:[(0,ao.jsx)(m,{horizontal:!0,align:`center`,className:oo.leftGroup,gap:4,children:(0,ao.jsx)(tr,{alwaysShowWorkspace:!0,agentId:t})}),(h||_&&g||v&&g)&&(0,ao.jsxs)(m,{horizontal:!0,align:`center`,className:oo.rightGroup,gap:4,children:[h&&(0,ao.jsx)(Bn,{}),_&&g&&(0,ao.jsx)(za,{deviceId:g,env:u?.env}),v&&g&&(0,ao.jsx)(to,{command:u?.command,deviceId:g,env:u?.env})]})]}):null:!t||s?null:(0,ao.jsxs)(m,{horizontal:!0,align:`center`,className:oo.bar,justify:`space-between`,children:[(0,ao.jsx)(Fn,{agentId:t}),h&&(0,ao.jsx)(Bn,{})]})}),so.displayName=`HeteroControlBar`})),lo=e((()=>{Ot()})),uo=e((()=>{Ot()})),fo=e((()=>{Ot()})),po=e((()=>{Ot()})),mo,ho,go=e((()=>{mo=t(d()),ho=e=>{let[t,n]=(0,mo.useState)(!1),r=(0,mo.useRef)(void 0);return{deferSelection:(0,mo.useCallback)(e=>{r.current=e,n(!1)},[]),handleOpenChange:n,handleOpenChangeComplete:(0,mo.useCallback)(t=>{if(t||r.current===void 0)return;let n=r.current;r.current=void 0,e(n)},[e]),open:t}}})),_o,vo,yo=e((()=>{Ge(),fr(),_o=class{listModels({deviceId:e,...t}){return e?lt.device.listHeterogeneousAgentModels.query({deviceId:e,...t}):pr.listModels(t)}},vo=new _o})),bo,xo,So,Co,wo=e((()=>{bo=t(d()),s(),yo(),xo=300*1e3,So=e=>{let t=JSON.stringify({args:e?.args??[],env:Object.entries(e?.env??{}).sort(([e],[t])=>e.localeCompare(t))}),n=2166136261;for(let e=0;e<t.length;e+=1)n^=t.charCodeAt(e),n=Math.imul(n,16777619);return(n>>>0).toString(36)},Co=({cwd:e,deviceId:t,isDeviceListLoading:n,isPreferenceLoading:r,open:i,provider:a,targetReady:o,type:s})=>{let l=(0,bo.useRef)(i),u=c(o&&!n&&!r?[`heterogeneous-agent-model-catalog`,s,t??`local`,e??``,a?.command??``,So(a)]:null,async()=>{let n=await vo.listModels({args:a?.args,command:a?.command,cwd:e,deviceId:t,env:a?.env,type:s});if(n.status===`error`){let e=Error(n.error.message);throw e.name=n.error.code,e}return n},{dedupingInterval:xo,revalidateOnFocus:!1,shouldRetryOnError:!1});return(0,bo.useEffect)(()=>{let e=i&&!l.current;l.current=i,e&&u.error&&u.mutate()},[i,u.error,u.mutate]),u}})),To,Z,Q,Eo,Do,Oo=e((()=>{we(),$e(),et(),S(),ln(),Jt(),p(),_(),lo(),uo(),Un(),Hn(),sr(),fo(),Kn(),cr(),po(),ar(),Gn(),Xn(),Qn(),or(),nr(),rr(),Yn(),Jn(),gt(),F(),To=t(d()),o(),_e(),Pe(),be(),Dn(),kn(),en(),Ct(),Te(),Ye(),go(),wo(),Z=t(f()),Q={check:I(`acss-hrod7t`,[`.acss-hrod7t{flex:none;color:var(--ant-color-primary);}`],`
    flex: none;
    color: var(--ant-color-primary);
  `),empty:I(`acss-107nerp`,[`.acss-107nerp{padding-block:24px;padding-inline:16px;font-size:12px;color:var(--ant-color-text-tertiary);text-align:center;}`],`
    padding-block: 24px;
    padding-inline: 16px;

    font-size: 12px;
    color: var(--ant-color-text-tertiary);
    text-align: center;
  `),item:I(`acss-1xu0uzy`,[`.acss-1xu0uzy{min-height:42px;}`],`
    min-height: 42px;
  `),popup:I(`acss-rjg3jv`,[`.acss-rjg3jv{overflow:hidden;display:flex;flex-direction:column;width:340px;max-height:430px;}`],`
    overflow: hidden;
    display: flex;
    flex-direction: column;

    width: 340px;
    max-height: 430px;
  `),search:I(`acss-7553by`,[`.acss-7553by{display:flex;gap:6px;align-items:center;}`],`
    display: flex;
    gap: 6px;
    align-items: center;
  `),spinning:I(`acss-boh52j`,[`.acss-boh52j{animation:heterogeneous-agent-model-spin 0.8s linear infinite;}`,`@keyframes heterogeneous-agent-model-spin{to{transform:rotate(360deg);}}`],`
    animation: heterogeneous-agent-model-spin 0.8s linear infinite;

    @keyframes heterogeneous-agent-model-spin {
      to {
        transform: rotate(360deg);
      }
    }
  `),stale:I(`acss-rc3uuo`,[`.acss-rc3uuo{color:var(--ant-color-warning);}`],`
    color: var(--ant-color-warning);
  `),submenuMeta:I(`acss-13t6g3s`,[`.acss-13t6g3s{overflow:hidden;max-width:150px;font-family:inherit;text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    max-width: 150px;

    font-family: inherit;
    text-overflow: ellipsis;
    white-space: nowrap;
  `),trigger:I(`acss-zr61tv`,[`.acss-zr61tv{cursor:pointer;display:flex;flex:none;gap:6px;align-items:center;height:28px;padding-inline:8px;border-radius:6px;font-size:12px;color:var(--ant-color-text-secondary);}`,`.acss-zr61tv:hover{color:var(--ant-color-text);background:var(--ant-color-fill-secondary);}`],`
    cursor: pointer;

    display: flex;
    flex: none;
    gap: 6px;
    align-items: center;

    height: 28px;
    padding-inline: 8px;
    border-radius: 6px;

    font-size: 12px;
    color: var(--ant-color-text-secondary);

    &:hover {
      color: var(--ant-color-text);
      background: var(--ant-color-fill-secondary);
    }
  `),triggerDisabled:I(`acss-1djmc02`,[`.acss-1djmc02{cursor:not-allowed;opacity:0.5;}`],`
    cursor: not-allowed;
    opacity: 0.5;
  `),triggerLabel:I(`acss-16tmax3`,[`.acss-16tmax3{white-space:nowrap;}`],`
    white-space: nowrap;
  `)},Eo=e=>{switch(e){case`cli_not_found`:return`heteroAgent.cliModel.cliNotFound`;case`device_unavailable`:return`heteroAgent.cliModel.targetUnavailable`;case`timeout`:return`heteroAgent.cliModel.timeout`;case`unsupported_client`:return`heteroAgent.cliModel.unsupportedClient`;default:return`heteroAgent.cliModel.error`}},Do=(0,To.memo)(({agentId:e,disabled:t,model:r,onSelect:i,permissionReason:a,type:o,variant:s=`standalone`})=>{let{t:c}=n(`chat`),l=Xe(o)??o,[u,d]=(0,To.useState)(``),{deferSelection:f,handleOpenChange:p,handleOpenChangeComplete:m,open:h}=ho(i),{agencyConfig:_,isPreferenceLoading:v,workspaceScoped:b}=En(e),x=ke(ye.isLogin),{isLoading:S}=$t(e=>e.useFetchDevices)(x||!1),C=On(e),w=_?.heterogeneousProvider;Oe(e=>e.useFetchGatewayDeviceInfo)();let T=Oe(e=>e.gatewayDeviceInfo?.deviceId),E=ze(_,{clientExecutionAvailable:!1,isHetero:!0,workspaceScoped:b}),O=je(_,T,{workspaceScoped:b}),k=E===`device`&&!!O,j=r&&r!=="default"?r:L,{data:N,error:P,isLoading:ee,isValidating:te,mutate:ne}=Co({cwd:C,deviceId:O,isDeviceListLoading:S,isPreferenceLoading:v,open:h,provider:w,targetReady:k,type:o}),re=(0,To.useMemo)(()=>N?.models??[],[N]),ie=j!=="default"&&!!N&&!re.some(e=>e.id===j),oe=(0,To.useMemo)(()=>{let e=ie?[{id:j,modelId:j.includes(`/`)?j.slice(j.indexOf(`/`)+1):j,providerId:c(`heteroAgent.cliModel.saved`)},...re]:re,t=u.trim().toLowerCase();return t?e.filter(e=>[e.id,e.label,e.providerId,e.modelId].some(e=>e&&e.toLowerCase().includes(t))):e},[re,j,u,ie,c]),se=(0,To.useMemo)(()=>oe.reduce((e,t)=>((e[t.providerId]||=[]).push(t),e),{}),[oe]),ue=(0,To.useCallback)(e=>{m(e),e||d(``)},[m]),de=(0,Z.jsxs)(`div`,{className:nt(Q.trigger,t&&Q.triggerDisabled),"aria-label":c(`heteroAgent.cliModel.ariaLabel`,{name:l,model:j==="default"?c(`heteroAgent.modelSelector.default`):j}),children:[(0,Z.jsx)(`span`,{className:Q.triggerLabel,children:j==="default"?c(`heteroAgent.modelSelector.default`):j}),(0,Z.jsx)(y,{icon:ce,size:12})]});if(t)return(0,Z.jsx)(D,{title:a,children:(0,Z.jsx)(`div`,{children:de})});let fe=s===`submenu`?i:f,pe=s!==`submenu`,F=(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(jt,{className:Q.search,children:[(0,Z.jsx)(un,{autoFocus:!0,placeholder:c(`heteroAgent.cliModel.search`),prefix:(0,Z.jsx)(y,{icon:ae,size:14}),size:`small`,value:u,variant:`borderless`,onChange:e=>d(e.target.value),onKeyDown:e=>e.stopPropagation()}),(0,Z.jsx)(A,{"aria-label":c(`heteroAgent.cliModel.reload`),className:nt(te&&Q.spinning),disabled:!k||te,icon:te?ge:M,size:`small`,title:c(`heteroAgent.cliModel.reload`),onClick:()=>void ne()})]}),(0,Z.jsxs)(At,{children:[(0,Z.jsx)(Lt,{className:Q.item,closeOnClick:pe,onClick:()=>fe(L),children:(0,Z.jsxs)(Ut,{children:[(0,Z.jsxs)(Ft,{children:[(0,Z.jsx)(Rt,{children:c(`heteroAgent.modelSelector.default`)}),(0,Z.jsx)(Mt,{children:c(`heteroAgent.cliModel.defaultDesc`,{name:l})})]}),j==="default"&&(0,Z.jsx)(Nt,{className:Q.check,children:(0,Z.jsx)(y,{icon:he,size:14})})]})}),ee&&!N&&(0,Z.jsx)(`div`,{className:Q.empty,children:c(`heteroAgent.cliModel.loading`,{name:l})}),!k&&(0,Z.jsx)(`div`,{className:Q.empty,children:c(`heteroAgent.cliModel.targetUnavailable`)}),P&&(0,Z.jsxs)(`div`,{className:Q.empty,children:[c(Eo(P.name)),(0,Z.jsx)(`br`,{}),(0,Z.jsx)(g,{size:`small`,type:`text`,onClick:()=>void ne(),children:c(`heteroAgent.cliModel.retry`)})]}),N&&oe.length===0&&(0,Z.jsx)(`div`,{className:Q.empty,children:u.trim()?c(`heteroAgent.cliModel.noMatch`):c(`heteroAgent.cliModel.empty`,{name:l})}),Object.entries(se).map(([e,t])=>(0,Z.jsxs)(Bt,{children:[(0,Z.jsx)(Vt,{children:e}),t.map(e=>{let t=ie&&e.id===j;return(0,Z.jsx)(Lt,{className:Q.item,closeOnClick:pe,onClick:()=>fe(e.id),children:(0,Z.jsxs)(Ut,{children:[(0,Z.jsxs)(Ft,{children:[(0,Z.jsx)(Rt,{children:e.label??e.modelId}),(0,Z.jsxs)(Mt,{className:nt(t&&Q.stale),children:[e.id,t?` · ${c(`heteroAgent.cliModel.stale`)}`:``]})]}),e.id===j&&(0,Z.jsx)(Nt,{className:Q.check,children:(0,Z.jsx)(y,{icon:he,size:14})})]})},e.id)})]},e))]})]});return s===`submenu`?(0,Z.jsxs)(Dt,{open:h,onOpenChange:p,onOpenChangeComplete:ue,children:[(0,Z.jsx)(Et,{label:c(`heteroAgent.modelSelector.model`),openOnHover:!1,children:(0,Z.jsxs)(Ut,{children:[(0,Z.jsx)(Rt,{children:c(`heteroAgent.modelSelector.model`)}),(0,Z.jsx)(Nt,{className:Q.submenuMeta,children:j==="default"?c(`heteroAgent.modelSelector.default`):j}),(0,Z.jsx)(Kt,{children:(0,Z.jsx)(y,{icon:le,size:12})})]})}),(0,Z.jsx)(kt,{children:(0,Z.jsx)(Wt,{alignOffset:-4,anchor:null,placement:`right`,sideOffset:8,children:(0,Z.jsx)(Pt,{className:Q.popup,"data-has-header":``,children:F})})})]}):(0,Z.jsxs)(qt,{open:h,onOpenChange:p,onOpenChangeComplete:ue,children:[(0,Z.jsx)(Gt,{nativeButton:!1,children:de}),(0,Z.jsx)(kt,{children:(0,Z.jsx)(Wt,{placement:`topLeft`,sideOffset:8,children:(0,Z.jsx)(Pt,{className:Q.popup,"data-has-header":``,children:F})})})]})}),Do.displayName=`ModelCatalogSelector`})),ko,Ao,jo,Mo=e((()=>{ko={"claude-code":[{label:`Fable`,value:`fable`},{label:`Opus`,value:`opus`},{label:`Sonnet`,value:`sonnet`},{label:`Haiku`,value:`haiku`}],codex:[{label:`GPT-6 Astra`,value:`gpt-6-astra`},{label:`GPT-5.6 Sol`,value:`gpt-5.6-sol`},{label:`GPT-5.6 Terra`,value:`gpt-5.6-terra`},{label:`GPT-5.6 Luna`,value:`gpt-5.6-luna`},{label:`GPT-5.5`,value:`gpt-5.5`},{label:`GPT-5.4`,value:`gpt-5.4`},{label:`GPT-5.4 Mini`,value:`gpt-5.4-mini`},{label:`GPT-5.3 Codex Spark`,value:`gpt-5.3-codex-spark`}]},Ao=e=>e&&ko[e]||[],jo={"gpt-5.6":`GPT-5.6`,...Object.fromEntries(Object.values(ko).flat().map(e=>[e.value,e.label]))}})),No,Po,Fo,Io,Lo,Ro,zo,Bo=e((()=>{et(),Mo(),No={[L]:`heteroAgent.modelSelector.default`,high:`heteroAgent.modelSelector.reasoning.high`,low:`heteroAgent.modelSelector.reasoning.low`,max:`heteroAgent.modelSelector.reasoning.max`,medium:`heteroAgent.modelSelector.reasoning.medium`,ultra:`heteroAgent.modelSelector.reasoning.ultra`,xhigh:`heteroAgent.modelSelector.reasoning.xhigh`},Po={...No,low:`heteroAgent.modelSelector.reasoning.light`},Fo={[L]:`heteroAgent.modelSelector.default`,high:`heteroAgent.modelSelector.mode.high`,low:`heteroAgent.modelSelector.mode.low`,medium:`heteroAgent.modelSelector.mode.medium`,ultra:`heteroAgent.modelSelector.mode.ultra`},Io=e=>e===`codex`?Po:No,Lo=e=>Fo[e],Ro=(e,t)=>{if(e==="default")return t;let n=jo[e];if(n)return n;let r=/^claude-(opus|sonnet|haiku)-(\d+)-(\d+)/.exec(e);if(!r)return e;let[,i,a,o]=r;return`${i[0].toUpperCase()}${i.slice(1)} ${a}.${o}`},zo=({defaultConfigLabel:e,defaultModelLabel:t,defaultReasoningLabel:n,effort:r,effortLabel:i,model:a,modelLabel:o})=>{let s=a===L,c=s?t:o;if(!r)return{text:s?e:c};let l=r===L;return s&&l?{text:e}:{secondaryText:l?n:i,text:c}}})),Vo,Ho,Uo,Wo=e((()=>{et(),Bo(),Mo(),Vo=(e,t)=>{let n=ut(e?.type);if(!e||!t||!n||Object.keys(n).length===0)return{kind:`none`};let r=!!n.effort||!!n.mode||!!n.speed;return n.model?.source===`catalog`&&!r?{capability:{...n,model:n.model},kind:`catalog`}:{capability:n,kind:`menu`}},Ho=({capability:e,effort:t,isFastSpeed:n,value:r})=>{let i=n&&!!e.speed&&!e.speed.supported(r);return{...t&&t!=="default"&&e.effort&&!e.effort.levels(r).includes(t)?{effort:L}:{},model:r,...i?{speed:L}:{}}},Uo=({capability:e,provider:t,t:n})=>{let r=e.model?.resolve(t)??`default`,i=e.effort?.resolve(t),a=e.mode?.resolve(t),o=e.speed?.supported(r)??!1,s=o?e.speed.resolve(t):L,c=s===`fast`,l=n(`heteroAgent.modelSelector.default`),u=Ro(r,l),d=Io(t.type),f=i?n(d[i]):void 0,p=a?n(Lo(a)):void 0,m=e.model?.source===`catalog`,h=!!e.mode&&!e.model&&!e.effort&&!e.speed,g=[];if(e.model&&!m){let e=[{label:l,value:L},...Ao(t.type)];g.push({current:r,key:`model`,label:n(`heteroAgent.modelSelector.model`),options:e.some(e=>e.value===r)?e:[{label:r,value:r},...e],valueLabel:u})}return e.mode&&a&&g.push({current:a,key:`mode`,label:n(`heteroAgent.modelSelector.mode.label`),options:[{label:l,value:L},...e.mode.levels.map(e=>({label:n(Lo(e)),value:e}))],valueLabel:p??l}),e.effort&&i&&g.push({current:i,key:`reasoning`,label:n(`heteroAgent.modelSelector.reasoning`),options:[{label:l,value:L},...e.effort.levels(r).map(e=>({label:n(d[e]),value:e}))],valueLabel:f}),o&&g.push({current:s,key:`speed`,label:n(`heteroAgent.modelSelector.speed`),options:[{desc:n(`heteroAgent.modelSelector.speed.standardDesc`),label:n(`heteroAgent.modelSelector.speed.standard`),value:L},{desc:n(`heteroAgent.modelSelector.speed.fastDesc`),label:n(`heteroAgent.modelSelector.speed.fast`),value:`fast`}],valueLabel:n(c?`heteroAgent.modelSelector.speed.fast`:`heteroAgent.modelSelector.speed.standard`)}),{ariaLabel:h?n(`heteroAgent.modelSelector.mode.ariaLabel`,{mode:p??l}):n(`heteroAgent.modelSelector.ariaLabel`,{model:u,reasoning:f??l}),dimensions:g,isCatalogModel:m,isFastSpeed:c,model:r,triggerLabel:h?{text:a==="default"?n(`heteroAgent.modelSelector.defaultConfig`):p??l}:zo({defaultConfigLabel:n(`heteroAgent.modelSelector.defaultConfig`),defaultModelLabel:n(`heteroAgent.modelSelector.defaultModel`),defaultReasoningLabel:n(`heteroAgent.modelSelector.defaultReasoning`),effort:i,effortLabel:f,model:r,modelLabel:u})}}})),Go,Ko,qo,Jo=e((()=>{ar(),Gn(),Xn(),Qn(),Jn(),ir(),Go=t(d()),o(),er(),In(),Oo(),Wo(),Ko=t(f()),qo=(0,Go.memo)(({agentId:e,capability:t,patch:r,permissionReason:i,provider:a})=>{let{t:o}=n(`chat`),s=(0,Go.useMemo)(()=>Uo({capability:t,provider:a,t:o}),[t,a,o]),c=(0,Go.useCallback)((e,n)=>{if(e===`model`&&t.model)return void r(Ho({capability:{...t,model:t.model},effort:t.effort?.resolve(a),isFastSpeed:s.isFastSpeed,value:n}));if(e===`mode`)return void r({mode:n});if(e===`speed`)return void r({speed:n});r({effort:n})},[t,r,a,s.isFastSpeed]),l=s.dimensions.map(e=>qn({current:e.current,label:e.label,onSelect:t=>c(e.key,t),options:e.options,valueLabel:e.valueLabel}));return(0,Ko.jsxs)(qt,{children:[(0,Ko.jsx)(Gt,{nativeButton:!1,children:(0,Ko.jsx)(Wn,{ariaLabel:s.ariaLabel,fast:s.isFastSpeed,secondaryText:s.triggerLabel.secondaryText,text:s.triggerLabel.text})}),(0,Ko.jsx)(kt,{children:(0,Ko.jsx)(Wt,{placement:`topRight`,sideOffset:8,children:(0,Ko.jsxs)(Pt,{style:{width:240},children:[s.isCatalogModel&&(0,Ko.jsx)(Do,{agentId:e,disabled:!1,model:s.model,permissionReason:i,type:a.type,variant:`submenu`,onSelect:e=>c(`model`,e)}),It(l)]})})})]})}),qo.displayName=`HeteroModelSelectorMenu`})),Yo,Xo,Zo=e((()=>{et(),Yo=t(d()),Fe(),Qt(),Xo=({agentId:e,enabled:t,provider:n})=>{let r=ot(e=>e.updateAgentConfigById),i=Zt(e=>e.activeTopicId),a=Zt(e=>e.updateTopicHeteroPin);return(0,Yo.useCallback)(async o=>{if(!t||!e||!n)return;let{effort:s,model:c,...l}=o;i&&((c!==void 0||s!==void 0)&&await a(i,{effort:s,model:c,provider:n.type}),Object.keys(l).length===0)||await r(e,{agencyConfig:{heterogeneousProvider:tt(n,i?l:o)}})},[i,e,t,n,r,a])}})),Qo,$o,es,ts,ns=e((()=>{et(),Qo=t(at()),$o=t(d()),Ae(),Fe(),Ne(),Qt(),Yt(),Nn(),Vn(),Oo(),Jo(),Wo(),Zo(),es=t(f()),ts=(0,$o.memo)(()=>{let e=jn(),t=ot(t=>Ee.getAgencyConfigById(e)(t)?.heterogeneousProvider,Qo.default),{allowed:n,reason:r}=dt(`create_content`),{canConfigureResource:i}=Ln(),a=n&&i,o=Xo({agentId:e,enabled:a,provider:t}),s=Zt(Xt.activeTopicHeteroPin,Qo.default),c=t?mt(t,s):void 0,l=Vo(c,a);return l.kind===`none`||!c?null:l.kind===`catalog`?(0,es.jsx)(Do,{agentId:e,disabled:!1,model:l.capability.model.resolve(c),permissionReason:r,type:c.type,onSelect:e=>void o({model:e})}):(0,es.jsx)(qo,{agentId:e,capability:l.capability,patch:o,permissionReason:r,provider:c})}),ts.displayName=`HeteroModel`})),rs,is=e((()=>{rs=({active:e,error:t,isReady:n})=>({blocked:e&&(!n||!!t),error:e&&n?t:void 0})})),as,os,ss=e((()=>{$e(),as=t(d()),Dn(),tn(),os=({agentId:e,enabled:t=!0})=>{let{agencyConfig:n,isPreferenceLoading:r}=En(e),i=n?.boundDeviceId,a=n?.heterogeneousProvider?.type,[o,s]=(0,as.useState)(`checking`),c=(0,as.useCallback)(async()=>{if(t){if(r){s(`checking`);return}if(!i){s(`no-device`);return}s(`checking`);try{let e=(await nn.listDevices()).find(e=>e.deviceId===i);if(!e){s(`ok`);return}if(!e.online){s(`device-offline`);return}a&&Ve(a)?s((await nn.checkCapability({deviceId:i,platform:a,scope:e.scope})).available?`ok`:`platform-unavailable`):s(`ok`)}catch{s(`ok`)}}},[t,r,i,a]);return(0,as.useEffect)(()=>{c()},[c]),(0,as.useEffect)(()=>{if(!t)return;let e=()=>void c();return document.addEventListener(`visibilitychange`,e),()=>document.removeEventListener(`visibilitychange`,e)},[t,c]),{refresh:()=>void c(),status:o}}})),cs,ls,us,ds,fs,ps=e((()=>{$e(),et(),h(),dn(),cs=t(at()),ls=t(d()),hr(),mr(),_n(),Fe(),Ne(),Ue(),Qt(),Yt(),us=t(f()),ds=e=>(0,us.jsx)(`span`,{className:vr.compactLabel,children:gr(e)}),fs=(0,ls.memo)(({agentId:e})=>{let t=ot(Ee.getAgencyConfigById(e)),n=ot(e=>e.updateAgentConfigById),r=t?.heterogeneousProvider,i=Zt(e=>e.activeTopicId),a=Zt(Xt.activeTopicHeteroPin,cs.default),o=Zt(e=>e.updateTopicModel),{providers:s}=_r(r?.type),c=(0,ls.useMemo)(()=>s.map(({id:e})=>e),[s]),l=r&&_t(r.type)?r.type:void 0,u=r?.apiConfig,d=u?.source===`server-default`?u:void 0,f=u&&u.source!==`server-default`?u:void 0,p=ot(e=>e.useFetchServerDefaultHeterogeneousCapability)(!!d&&!!l),m=Ie(e=>e.builtinAiModelList),h=(0,ls.useMemo)(()=>yr(p.data?.enabled===!0&&l?br(p.data.models,l):[],m),[m,p.data,l]);if(!r||r.authMode!==`api`||!d&&c.length===0)return null;let g=mt(r,a).apiConfig,_=g?.source===`server-default`?void 0:g,v=async a=>{if(i&&a.source!==`server-default`&&a.providerId){await o(i,{model:a.model,provider:a.providerId});return}await n(e,{agencyConfig:{...t,heterogeneousProvider:{...r,apiConfig:a}}})};return d?(0,us.jsx)(E,{children:(0,us.jsx)(fn,{className:vr.picker,labelRender:ds,loading:p.isLoading,options:h,popupMatchSelectWidth:!1,size:`small`,style:xr,value:d.model,variant:`borderless`,onChange:e=>{typeof e==`string`&&v({model:e,source:`server-default`})}})}):(0,us.jsx)(vn,{labelRender:ds,popupWidth:360,providerIds:c,size:`small`,style:xr,variant:`borderless`,value:_?{model:_.model,provider:_.providerId}:void 0,onChange:({model:e,provider:t})=>{v({model:e,providerId:t,smallFastModel:f?.providerId===t?f.smallFastModel:void 0})}})}),fs.displayName=`ApiModeModelBar`})),ms,hs,gs,_s,vs=e((()=>{ms=t(r()),hs=[1,3,8,24],gs=10,_s=(e,t=(0,ms.default)())=>{let n=t.add(e,`hour`).startOf(`hour`);return n.diff(t,`minute`)<gs?n.add(1,`hour`):n}})),ys,bs,xs,Ss,Cs=e((()=>{S(),gt(),ys=t(r()),F(),bs=t(d()),o(),zn(),ur(),An(),Tn(),Te(),Ye(),vs(),xs=t(f()),Ss=(0,bs.memo)(()=>{let{t:e}=n(`chat`),{t}=n(`editor`),[r,i]=(0,bs.useState)(!1),[a,o,s]=Mn(e=>[e.editor,e.showTypoBar,e.setShowTypoBar]),c=on(e=>e.scheduledSendAt),l=on(e=>e.setScheduledSendAt),u=ke(xe.enableTopicAcceptance),d=(0,bs.useCallback)(e=>{l(_s(e).toISOString()),i(!1)},[l]),f=(0,bs.useMemo)(()=>{let n=c?hs.find(e=>_s(e).isSame((0,ys.default)(c),`minute`)):void 0;return[{children:hs.map(t=>({extra:n===t?(0,xs.jsx)(y,{icon:he,size:16,style:{color:R.colorSuccess}}):(0,xs.jsx)(`span`,{style:{color:R.colorTextTertiary,fontSize:12},children:_s(t).format(`MM-DD HH:mm`)}),key:`scheduleSend-${t}h`,label:e(`input.schedule.inHours`,{count:t}),onClick:()=>d(t)})),extra:(0,xs.jsx)(y,{className:`lobe-submenu-chevron`,icon:le,size:16}),icon:j,key:`scheduleSend`,label:e(`input.schedule.title`)},{type:`divider`},{checked:!!o,icon:ue,key:`typo`,label:t(`actions.typobar.title`),onCheckedChange:e=>s(e),type:`switch`},...u?[{type:`divider`},{icon:P,key:`set-topic-goal`,label:t(`slash.goal`),onClick:()=>{i(!1),lr(a,t(`slash.goal`))}}]:[]]},[e,t,o,s,d,c,u,a]);return(0,xs.jsx)(Rn,{icon:me,open:r,size:{blockSize:32,borderRadius:16,size:18},title:e(`input.heteroPlus.tooltip`),tooltipProps:{placement:`top`},dropdown:{menu:{items:f},minWidth:220,placement:`topLeft`},onOpenChange:i})}),Ss.displayName=`HeteroPlus`})),ws,Ts,Es,Ds,Os,ks=e((()=>{we(),k(),S(),p(),C(),gt(),ws=t(r()),F(),Ts=t(d()),o(),Tn(),Es=t(f()),Ds={chip:I(`acss-twmzhc`,[`.acss-twmzhc{flex:none;height:28px;padding-inline:8px 4px;border-radius:14px;background:var(--ant-color-info-bg);}`],`
    flex: none;

    height: 28px;
    padding-inline: 8px 4px;
    border-radius: 14px;

    background: var(--ant-color-info-bg);
  `),label:I(`acss-1bxi4cy`,[`.acss-1bxi4cy{font-size:12px;line-height:1;color:var(--ant-color-info-text);white-space:nowrap;}`],`
    font-size: 12px;
    line-height: 1;
    color: var(--ant-color-info-text);
    white-space: nowrap;
  `)},Os=(0,Ts.memo)(()=>{let{t:e}=n(`chat`),t=on(e=>e.scheduledSendAt),r=on(e=>e.setScheduledSendAt);return t?(0,Es.jsxs)(m,{horizontal:!0,align:`center`,className:Ds.chip,gap:4,children:[(0,Es.jsx)(y,{icon:j,size:12,style:{color:R.colorInfoText}}),(0,Es.jsx)(T,{className:Ds.label,children:(0,ws.default)(t).format(`MM-DD HH:mm`)}),(0,Es.jsx)(A,{icon:se,size:`small`,title:e(`input.schedule.clear`),onClick:()=>r(void 0)})]}):null}),Os.displayName=`ScheduledSendChip`})),As,js=e((()=>{et(),As=({boundDeviceId:e,executionTarget:t,isDesktopClient:n,providerType:r})=>ut(r)?.model?.source===`catalog`?t===`local`?n:t===`device`&&!!e:!0})),Ms,$,Ns,Ps,Fs,Is=e((()=>{$e(),et(),k(),yt(),_(),Ms=t(d()),o(),Or(),_e(),co(),ns(),Tn(),cn(),hr(),De(),bn(),be(),is(),Dn(),ss(),Qt(),ps(),Cs(),ks(),js(),$=t(f()),Ns=[],Ps=(0,Ms.memo)(({title:e,hint:t,action:n})=>(0,$.jsx)(He,{children:(0,$.jsx)(m,{align:`center`,paddingBlock:`0 8px`,paddingInline:12,children:(0,$.jsx)(Ke,{action:n,style:{maxWidth:880,width:`100%`},type:`warning`,title:(0,$.jsxs)(m,{horizontal:!0,align:`baseline`,gap:6,style:{flexWrap:`wrap`},children:[(0,$.jsx)(`span`,{children:e}),t&&(0,$.jsx)(`span`,{style:{fontWeight:400,opacity:.75},children:t})]})})})})),Ps.displayName=`GuardBanner`,Fs=(0,Ms.memo)(()=>{let{t:e}=n(`chat`),t=on(sn.agentId),{isConfigured:r,goToConfig:i}=Dr(t),a=yn(),{agencyConfig:o,isPreferenceLoading:s,workspaceScoped:c}=En(t),l=o?.heterogeneousProvider,u=l?.type,d=l?.authMode===`api`,f=d&&l.apiConfig&&l.apiConfig.source!==`server-default`?l.apiConfig:void 0,p=d&&!l.apiConfig,h=ze(o,{isHetero:!!u,clientExecutionAvailable:!1,workspaceScoped:c}),{error:_,isReady:v}=Sr(u,f),y=!!u&&!Be(u)&&h===`none`,b=!d&&it(u)&&As({boundDeviceId:o?.boundDeviceId,executionTarget:h,isDesktopClient:!1,providerType:u}),x=!!t&&d&&h===`local`,S=d&&h!==`local`,{blocked:C,error:w}=rs({active:(p||!!f)&&h===`local`,error:_,isReady:v}),T=(0,Ms.useMemo)(()=>[{alwaysDisplay:!0,children:(0,$.jsx)(Ss,{}),key:`heteroPlus`},{alwaysDisplay:!0,children:(0,$.jsx)(Os,{}),key:`scheduledSendChip`}],[]),E=(0,Ms.useMemo)(()=>x?(0,$.jsx)(fs,{agentId:t}):b?(0,$.jsx)(ts,{}):void 0,[t,x,b]),D=h===`device`&&!!o?.boundDeviceId,{status:O,refresh:k}=os({agentId:t,enabled:D}),A=()=>{t&&a(`/agent/${t}/profile`)},j=D&&(O===`device-offline`||O===`platform-unavailable`||O===`no-device`),M=()=>{if(!j)return null;let t,n;if(O===`no-device`)t=e(`platformAgent.deviceGuard.noDevice.title`),n=e(`platformAgent.deviceGuard.noDevice.desc`);else if(O===`device-offline`)t=e(`platformAgent.deviceGuard.deviceOffline.title`),n=e(`platformAgent.deviceGuard.deviceOffline.desc`);else{let r=u&&St[u]||u||``;t=e(`platformAgent.deviceGuard.platformUnavailable.title`,{name:r}),n=e(`platformAgent.deviceGuard.platformUnavailable.desc`,{name:r})}return(0,$.jsx)(Ps,{hint:n,title:t,action:(0,$.jsxs)(m,{horizontal:!0,gap:4,children:[(0,$.jsx)(g,{size:`small`,type:`fill`,onClick:k,children:e(`platformAgent.deviceGuard.refresh`)}),(0,$.jsx)(g,{size:`small`,type:`primary`,onClick:A,children:e(`platformAgent.deviceGuard.configure`)})]})})},N=()=>S||s||y||D||r?null:(0,$.jsx)(Ps,{hint:e(`heteroAgent.cloudNotConfigured.desc`),title:e(`heteroAgent.cloudNotConfigured.title`),action:(0,$.jsx)(g,{size:`small`,type:`primary`,onClick:i,children:e(`heteroAgent.cloudNotConfigured.action`)})}),P=()=>S?(0,$.jsx)(Ps,{hint:e(`heteroAgent.apiMode.localOnly.desc`),title:e(`heteroAgent.apiMode.localOnly.title`),action:(0,$.jsx)(g,{size:`small`,type:`primary`,onClick:A,children:e(`platformAgent.deviceGuard.configure`)})}):null,ee=()=>w?(0,$.jsx)(Ps,{title:w.code===`configMissing`?e(`heteroAgent.apiMode.configMissing`):w.code===`agentUnsupported`?e(`heteroAgent.apiMode.agentUnsupported`,{name:u}):e(`heteroAgent.apiMode.${w.code}`,w),action:(0,$.jsx)(g,{size:`small`,type:`primary`,onClick:A,children:e(`platformAgent.deviceGuard.configure`)})}):null,te=()=>y?(0,$.jsx)(Ps,{title:e(`platformAgent.deviceGuard.noDevice.title`),hint:e(`heteroAgent.executionTarget.sandboxUnsupported`,{name:u?St[u]:void 0})}):null,ne=S||C||s||y||!r&&!D||j,re=S||!!w||y||j||!r&&!D;return(0,$.jsxs)(m,{children:[P(),ee(),te(),N(),M(),(0,$.jsx)(wn,{allowExpand:!1,controlBarSlot:(0,$.jsx)(so,{}),extraActionItems:T,leftActions:Ns,sendAreaPrefix:E,sendButtonProps:{disabled:ne,shape:`round`},skipScrollMarginWithList:!re,onEditorReady:e=>{Zt.setState({mainInputEditor:e})}})]})}),Fs.displayName=`HeterogeneousChatInput`})),Ls,Rs=e((()=>{s(),xt(),Qt(),Re(),an(),Ls=(e,t,n,r)=>{let i=st(e=>e.serverConfig.agentGatewayUrl);c(t&&e&&i?qe.reconnect(t.operationId):null,async()=>{!t||!e||await Zt.getState().reconnectToGatewayOperation({agentId:n,agentShareId:r,assistantMessageId:t.assistantMessageId,heteroType:t.heteroType,operationId:t.operationId,scope:t.scope,startedAt:t.startedAt,threadId:t.threadId,topicId:e})},{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1,shouldRetryOnError:e=>!rn(e,`NOT_FOUND`)})}}));export{wr as a,Is as i,Ls as n,Tr as o,Fs as r,Cr as s,Rs as t};