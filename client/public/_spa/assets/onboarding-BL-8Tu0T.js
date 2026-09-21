import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{B as n,N as r,P as i,j as a,r as o,s,z as c}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as l,T as u,_ as d,c as f,i as p,l as m,m as h}from"../vendor/vendor-react-B9HSWrpN.js";import{Bt as ee,Gn as te,Ht as g,Kn as ne,Kt as _,Mt as v,Nt as y,Ut as re,Vt as ie,X as b,Xn as x,Z as ae,Zn as S,a as oe,at as C,i as se,it as w,o as ce,qt as T,r as le}from"../vendor/vendor-ui-core-BmtybT1r.js";import{S as ue,bt as de,r as fe}from"../vendor/vendor-antd-BWSxhuJE.js";import{Ar as pe,Ku as me,Pa as E,Qg as he,Xg as ge,et as _e,ig as ve,iu as ye,oh as be,t as D,ug as xe,vr as Se,wc as Ce}from"../vendor/vendor-icons-vienkZi5.js";import{Xn as we,Zn as Te,c as Ee,er as De,rr as Oe,rt as ke}from"./app-const-BpgKVRXh.js";import{$l as Ae,Cr as je,Er as Me,FD as Ne,Gp as O,HE as Pe,ID as k,Jp as A,Ml as Fe,Mm as Ie,QE as Le,Ql as Re,Tp as ze,Tr as Be,Un as Ve,Wn as He,Zh as Ue,am as We,bF as Ge,bm as Ke,dg as qe,eE as Je,gF as Ye,hF as j,iC as Xe,iu as Ze,jl as Qe,km as $e,kp as et,lC as tt,lp as nt,nE as rt,ng as it,nu as at,pF as ot,rE as st,tE as ct,uF as M,up as lt,vF as ut,wr as dt,xm as ft,ym as pt}from"./index-w64_zsxD.js";import{n as mt,t as ht}from"./DropdownMenu-1ae8j9bI.js";import{n as gt,t as _t}from"./ScrollShadow-nHmz9Ona.js";import{I as N}from"./connector-CYSAQBuT.js";import{K as vt,Z as P,q as yt}from"./selectors-D4u9uv4T.js";import{i as bt}from"./store-AMf-eC3D.js";import{t as xt}from"./tool-rW_9PyAl.js";import{n as St,t as Ct}from"./LoadingDots-BXIQCy0h.js";import{n as wt,t as Tt}from"./Input-gdUxluEJ.js";import{n as Et,t as Dt}from"./react-DuJYEZ-k.js";import{n as Ot,t as kt}from"./Select-C0UJO2yB.js";import{a as At,n as jt,r as Mt}from"./agent-templates-BG3Z_WPz.js";import{t as Nt}from"./ProductLogo-Dfher0ve.js";import{t as Pt}from"./Branding-vUGiPCQE.js";import{t as Ft}from"./agentMarketplace-TU0QPF2y.js";import{n as It,t as Lt}from"./installMarketplaceAgents--P0vOtY9.js";import{n as Rt,t as zt}from"./config-BK01C2lk.js";import{n as Bt,t as Vt}from"./preloadLang-C-NTw5yL.js";import{n as Ht,t as Ut}from"./ThemeButton-D5JNteu7.js";import{a as Wt,i as Gt,n as Kt,o as qt,r as Jt,t as Yt}from"./onboardingMetrics-HMgYUKoA.js";var Xt,Zt=e((()=>{pt(),Xt=(e,t,n)=>{let r=e===`auto`?t:e,i=Ke.find(e=>e.value===r)?.label||`English`;return e===`auto`?`${n} · ${i}`:i}})),Qt,F,$t,en=e((()=>{mt(),T(),S(),y(),C(),M(),D(),Qt=t(l()),a(),pt(),at(),Re(),He(),Vt(),Zt(),F=t(u()),$t=(0,Qt.memo)(({compact:e,placement:t})=>{let[n,i,a]=Ze(e=>[Ae.language(e),Ae.currentLanguage(e),e.switchLocale]),{t:o}=r([`setting`,`common`]),s=Xt(n,i,o(`settingCommon.lang.autoMode`)),c=(0,Qt.useMemo)(()=>[{checked:n===`auto`,closeOnClick:!0,key:`auto`,label:(0,F.jsxs)(_,{gap:4,onMouseEnter:()=>Bt(`auto`),children:[(0,F.jsx)(w,{style:{lineHeight:1.2},children:o(`settingCommon.lang.autoMode`)}),(0,F.jsx)(w,{fontSize:12,style:{lineHeight:1.2},type:`secondary`,children:o(`lang.auto`,{ns:`common`})})]}),onCheckedChange:e=>{e&&a(`auto`)},type:`checkbox`},...Ke.map(e=>({checked:n===e.value,closeOnClick:!0,key:e.value,label:(0,F.jsxs)(_,{gap:4,onMouseEnter:()=>Bt(e.value),children:[(0,F.jsx)(w,{style:{lineHeight:1.2},children:e.label}),(0,F.jsx)(w,{fontSize:12,style:{lineHeight:1.2},type:`secondary`,children:o(`lang.${e.value}`,{ns:`common`})})]},e.value),onCheckedChange:t=>{t&&a(e.value)},type:`checkbox`}))],[n,a,o]),l;return l=e?(0,F.jsx)(v,{icon:me,iconPosition:`end`,size:`small`,type:`text`,style:{height:32,paddingInline:8},children:(0,F.jsx)(w,{fontSize:12,children:s})}):(0,F.jsxs)(_,{horizontal:!0,align:`center`,gap:12,style:{borderRadius:8,boxSizing:`content-box`,cursor:`pointer`,height:28,marginInline:4,paddingBlock:6,paddingInline:12},onMouseEnter:e=>{e.currentTarget.style.background=j.colorFillTertiary},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},children:[(0,F.jsx)(_,{flex:1,children:s}),(0,F.jsx)(x,{icon:me,size:`small`,style:{color:j.colorTextSecondary}}),(0,F.jsx)(x,{icon:ve,size:`small`,style:{color:j.colorTextSecondary}})]}),(0,F.jsx)(ht,{items:c,placement:t,trigger:`hover`,popupProps:{className:Ve.nodrag,style:{maxHeight:360,minWidth:240,overflow:`auto`,transition:`none`}},children:l})})})),tn,nn=e((()=>{Ne(),tn={divider:k(`acss-1o91iar`,[`.acss-1o91iar{height:24px;}`],`
    height: 24px;
  `),innerContainerDark:k(`acss-ox08h2`,[`.acss-ox08h2{position:relative;overflow:hidden auto;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius);background:var(--ant-color-bg-container);}`],`
    position: relative;

    overflow: hidden auto;

    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius);

    background: var(--ant-color-bg-container);
  `),innerContainerLight:k(`acss-1vbbzhe`,[`.acss-1vbbzhe{position:relative;overflow:hidden auto;border:1px solid var(--ant-color-border);border-radius:var(--ant-border-radius);background:var(--ant-color-bg-container);}`],`
    position: relative;

    overflow: hidden auto;

    border: 1px solid var(--ant-color-border);
    border-radius: var(--ant-border-radius);

    background: var(--ant-color-bg-container);
  `),innerContainerMobile:k(`acss-nmii1o`,[`.acss-nmii1o{position:relative;overflow:hidden auto;background:var(--ant-color-bg-container);}`],`
    position: relative;
    overflow: hidden auto;
    background: var(--ant-color-bg-container);
  `),outerContainer:k(`acss-1psltl0`,[`.acss-1psltl0{position:relative;}`],`
    position: relative;
  `)}})),rn,I,an,on=e((()=>{ie(),T(),fe(),M(),rn=t(l()),p(),Pt(),en(),Ht(),Je(),Qe(),dt(),nn(),I=t(u()),an=({children:e})=>{let t=ct(),n=Fe(),r=Ge(),{search:i}=h();return(0,rn.useEffect)(()=>{Me(i)},[i]),(0,I.jsx)(_,{className:tn.outerContainer,height:`100%`,padding:n?0:8,width:`100%`,children:(0,I.jsxs)(_,{height:`100%`,width:`100%`,className:Ye(n?tn.innerContainerMobile:t?tn.innerContainerDark:tn.innerContainerLight),children:[(0,I.jsxs)(_,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,padding:n?12:16,width:`100%`,children:[(0,I.jsx)(Nt,{color:r.colorText,size:28,type:`text`}),(0,I.jsx)(_,{horizontal:!0,align:`center`,gap:16,children:(0,I.jsxs)(_,{horizontal:!0,align:`center`,children:[(0,I.jsx)($t,{compact:!0,placement:`bottomRight`}),(0,I.jsx)(de,{className:tn.divider,orientation:`vertical`}),(0,I.jsx)(Ut,{placement:`bottomRight`,size:18})]})})]}),(0,I.jsx)(ee,{height:`100%`,width:`100%`,children:e})]})})}})),sn,cn,ln=e((()=>{Ft(),c(),Ue(),pt(),sn=()=>ft(n.resolvedLanguage||n.language||globalThis.navigator?.language),cn=async e=>{let t=await it.market.agent.getOnboardingFull.query({locale:sn()},{signal:e?.signal});if(!t||typeof t!=`object`)return[];let n=[];for(let[e,r]of Object.entries(t))if(Array.isArray(r))for(let t of r){let r=At(t,e);r&&n.push(r)}return n}})),un,dn,fn=e((()=>{Ft(),a(),o(),ln(),un={dedupingInterval:6e4,revalidateOnFocus:!1,shouldRetryOnError:!1},dn=(e=!0)=>{let{i18n:t}=r(),n=t.resolvedLanguage||t.language;return s(e?jt(n):null,()=>cn(),un)}})),L,pn=e((()=>{Ne(),L={container:k(`acss-9no8jf`,[`.acss-9no8jf{display:inline-block;white-space:pre-wrap;}`],`
    display: inline-block;
    white-space: pre-wrap;
  `),cursor:k(`acss-44dldh`,[`.acss-44dldh{transform:translateY(10%);display:inline-block;align-items:center;width:3px;height:1em;margin-inline-start:0.25rem;border-radius:2px;opacity:1;background-color:var(--ant-color-primary);}`],`
    transform: translateY(10%);

    display: inline-block;
    align-items: center;

    width: 3px;
    height: 1em;
    margin-inline-start: 0.25rem;
    border-radius: 2px;

    opacity: 1;
    background-color: var(--ant-color-primary);
  `),cursorBlock:k(`acss-k5h3wo`,[`.acss-k5h3wo{transform:translateY(10%);display:inline-block;align-items:center;width:0.5em;height:1em;margin-inline-start:0.25rem;border-radius:2px;opacity:1;background-color:var(--ant-color-primary);}`],`
    transform: translateY(10%);

    display: inline-block;
    align-items: center;

    width: 0.5em;
    height: 1em;
    margin-inline-start: 0.25rem;
    border-radius: 2px;

    opacity: 1;
    background-color: var(--ant-color-primary);
  `),cursorCustom:k(`acss-5fwlpc`,[`.acss-5fwlpc{display:inline-block;align-items:center;margin-inline-start:0.25rem;opacity:1;}`],`
    display: inline-block;
    align-items: center;
    margin-inline-start: 0.25rem;
    opacity: 1;
  `),cursorDot:k(`acss-1ae1ezv`,[`.acss-1ae1ezv{display:inline-block;align-items:center;width:0.75em;height:0.75em;margin-inline-start:0.25rem;border-radius:50%;opacity:1;background-color:var(--ant-color-primary);}`],`
    display: inline-block;
    align-items: center;

    width: 0.75em;
    height: 0.75em;
    margin-inline-start: 0.25rem;
    border-radius: 50%;

    opacity: 1;
    background-color: var(--ant-color-primary);
  `),cursorHidden:k(`acss-k26awr`,[`.acss-k26awr{display:none;}`],`
    display: none;
  `),cursorUnderscore:k(`acss-2wwhum`,[`.acss-2wwhum{transform:translateY(0.3em);display:inline-block;align-items:center;width:0.6em;height:0.15em;margin-inline-start:0.25rem;border-radius:2px;opacity:1;background-color:var(--ant-color-primary);}`],`
    transform: translateY(0.3em);

    display: inline-block;
    align-items: center;

    width: 0.6em;
    height: 0.15em;
    margin-inline-start: 0.25rem;
    border-radius: 2px;

    opacity: 1;
    background-color: var(--ant-color-primary);
  `),text:k(`acss-644054`,[`.acss-644054{color:var(--ant-color-text);}`],`
    color: var(--ant-color-text);
  `)}})),R,mn,hn,gn=e((()=>{te(),pn(),R=t(l(),1),mn=t(u(),1),M(),hn=(0,R.memo)(({sentences:e,as:t=`div`,typingSpeed:n=100,initialDelay:r=0,pauseDuration:i=2e3,deletingSpeed:a=50,deletePauseDuration:o=0,loop:s=!0,className:c=``,color:l,showCursor:u=!0,hideCursorWhileTyping:d=!1,cursorCharacter:f,cursorClassName:p=``,cursorColor:m,cursorBlinkDuration:h=.8,cursorFade:ee=!0,cursorStyle:te=`pipe`,textColors:g=[],variableSpeed:_,onSentenceComplete:v,startOnVisible:y=!1,reverseMode:re=!1,segmentMode:ie=`grapheme`,...b})=>{let x=ne(),ae=Ye,[S,oe]=(0,R.useState)(``),[C,se]=(0,R.useState)(0),[w,ce]=(0,R.useState)(!1),[T,le]=(0,R.useState)(0),[ue,de]=(0,R.useState)(!y),[fe,pe]=(0,R.useState)(!1),me=(0,R.useRef)(null),E=(0,R.useMemo)(()=>Array.isArray(e)?e:[e],[e]),he=(0,R.useCallback)(e=>{if(typeof Intl<`u`&&`Segmenter`in Intl){let t=new Intl.Segmenter(void 0,{granularity:ie});return Array.from(t.segment(e),e=>e.segment)}return ie===`word`?e.split(/(\s+)/).filter(Boolean):Array.from(e)},[ie]),ge=(0,R.useCallback)(()=>{if(!_)return n;let{min:e,max:t}=_;return Math.random()*(t-e)+e},[_,n]),_e=()=>g.length>0?g[T%g.length]:l,ve=()=>m||l;(0,R.useEffect)(()=>{if(!y||!me.current)return;let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&de(!0)})},{threshold:.1});return e.observe(me.current),()=>e.disconnect()},[y]),(0,R.useEffect)(()=>{if(!ue)return;let e,t=E[T],c=he(t),l=re?c.reverse().join(``):t;if(fe)return e=setTimeout(()=>{pe(!1)},o),()=>clearTimeout(e);let u=()=>{if(w)if(S===``){if(ce(!1),T===E.length-1&&!s)return;if(v&&v(E[T],T),le(e=>(e+1)%E.length),se(0),o>0){pe(!0);return}}else e=setTimeout(()=>{oe(e=>he(e).slice(0,-1).join(``))},a);else{let t=he(l);if(C<t.length)e=setTimeout(()=>{oe(e=>e+t[C]),se(e=>e+1)},_?ge():n);else if(E.length>=1){if(!s&&T===E.length-1)return;e=setTimeout(()=>{ce(!0)},i)}}};return C===0&&!w&&S===``?e=setTimeout(u,r):u(),()=>clearTimeout(e)},[C,S,w,fe,n,a,o,i,E,T,s,r,ue,re,_,v,ge,he]);let ye=()=>{if(f)return L.cursorCustom;switch(te){case`block`:return L.cursorBlock;case`dot`:return L.cursorDot;case`underscore`:return L.cursorUnderscore;case`pipe`:return L.cursor}},be=he(E[T]).length,D=d===!0?!0:d===`typing`?C<be&&!w||w:d===`afterTyping`?C===be&&!w:!1,xe=_e(),Se=ve(),Ce=he(S);return(0,R.createElement)(t,{className:ae(L.container,c),ref:me,...b},(0,mn.jsxs)(mn.Fragment,{children:[(0,mn.jsx)(`span`,{className:L.text,style:xe?{color:xe}:void 0,children:Ce.map((e,t)=>(0,mn.jsx)(x.span,{animate:{opacity:1},initial:{opacity:0},style:{display:`inline-block`},transition:{duration:n/500,ease:`easeInOut`},children:e===` `?`\xA0`:e},`${T}-${t}`))}),u&&(ee?(0,mn.jsx)(x.span,{animate:{opacity:+!D},className:ae(ye(),p),initial:{opacity:0},style:Se?{backgroundColor:Se}:void 0,transition:{duration:D?.2:h,ease:`easeInOut`,repeat:D?0:1/0,repeatType:`reverse`},children:f}):(0,mn.jsx)(`span`,{className:ae(ye(),p),style:{backgroundColor:Se,opacity:+!D},children:f}))]}))}),hn.displayName=`TypewriterEffect`})),_n,vn,yn,bn=e((()=>{T(),gn(),se(),C(),St(),_n=t(l()),a(),Pt(),vn=t(u()),yn=(0,_n.memo)(({gap:e=8,align:t,avatar:n,avatarSize:i,horizontal:a,disableTypewriter:o,sentences:s,fontSize:c=24,...l})=>{let{i18n:u}=r(),d=u.language,f=t??`flex-start`,p=f===`center`;return(0,vn.jsxs)(_,{align:f,gap:e,horizontal:a,...l,children:[n?(0,vn.jsx)(le,{avatar:n,size:i||c*2,style:{flexShrink:0}}):(0,vn.jsx)(Nt,{size:i||c*2,style:{flexShrink:0}}),(0,vn.jsx)(w,{as:`h1`,fontSize:c,weight:`bold`,style:{lineHeight:1.3,textAlign:p?`center`:void 0,wordBreak:`break-word`},children:o?s[0]??``:(0,vn.jsx)(hn,{cursorCharacter:(0,vn.jsx)(Ct,{size:c,variant:`pulse`}),cursorFade:!1,deletePauseDuration:1e3,deletingSpeed:16,hideCursorWhileTyping:`afterTyping`,pauseDuration:16e3,sentences:s,typingSpeed:32},d)})]})})})),xn,Sn,Cn=e((()=>{Ft(),xn={business:N.BusinessStrategy,coding:N.Engineering,creator:N.CreatorEconomy,design:N.DesignCreative,education:N.LearningResearch,"finance-legal":N.FinanceLegal,hr:N.PeopleHR,investing:N.FinanceLegal,marketing:N.Marketing,operations:N.Operations,personal:N.PersonalLife,product:N.ProductManagement,sales:N.SalesCustomer,writing:N.ContentCreation},Sn=e=>{let t=new Set,n=[];for(let r of e){let e=xn[r];e&&!t.has(e)&&(t.add(e),n.push(e))}return n}})),wn,z,Tn=e((()=>{M(),wn=ut`
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
`,z=ot(({css:e,cssVar:t})=>({card:e`
    cursor: pointer;

    display: flex;
    gap: 12px;
    align-items: flex-start;

    padding-block: 12px;
    padding-inline: 14px;
    border: 1px solid ${t.colorFillSecondary};
    border-radius: ${t.borderRadiusLG};

    background: ${t.colorBgContainer};

    transition:
      border-color ${t.motionDurationMid},
      background ${t.motionDurationMid};

    &:hover {
      border-color: ${t.colorPrimaryHover};
    }

    &:focus-visible {
      outline: 2px solid ${t.colorPrimary};
      outline-offset: 2px;
    }
  `,cardBody:e`
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 2px;

    min-width: 0;
  `,cardCheck:e`
    flex: none;
    color: ${t.colorPrimary};
  `,cardCheckHidden:e`
    visibility: hidden;
  `,cardDescription:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    font-size: 12px;
    line-height: 1.5;
    color: ${t.colorTextSecondary};
  `,cardSelected:e`
    border-color: ${t.colorPrimary};
    background: ${t.colorPrimaryBg};

    &:hover {
      border-color: ${t.colorPrimary};
    }
  `,cardTitle:e`
    overflow: hidden;

    font-size: 14px;
    font-weight: 600;
    color: ${t.colorText};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,empty:e`
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 160px;
    padding: 24px;

    font-size: 13px;
    color: ${t.colorTextTertiary};
    text-align: center;
  `,filterBar:e`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  `,footer:e`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block-start: 8px;
  `,footerActions:e`
    display: flex;
    gap: 8px;
    align-items: center;
  `,grid:e`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 10px;
    align-content: start;
  `,pill:e`
    cursor: pointer;

    padding-block: 4px;
    padding-inline: 12px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: 999px;

    font-size: 13px;
    color: ${t.colorTextSecondary};
    white-space: nowrap;

    background: transparent;

    transition:
      border-color ${t.motionDurationMid},
      background ${t.motionDurationMid},
      color ${t.motionDurationMid};

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFillTertiary};
    }

    &:focus-visible {
      outline: 2px solid ${t.colorPrimary};
      outline-offset: 2px;
    }
  `,pillActive:e`
    border-color: ${t.colorFillSecondary};
    font-weight: 500;
    color: ${t.colorText};
    background: ${t.colorFillSecondary};

    &:hover {
      background: ${t.colorFillSecondary};
    }
  `,scrollArea:e`
    overflow-y: auto;
    overscroll-behavior: contain;

    max-height: min(46vh, 360px);
    margin-inline: -4px;
    padding-inline: 4px;
  `,skeletonAvatar:e`
    flex: none;

    width: 36px;
    height: 36px;
    border-radius: ${t.borderRadius};

    background: ${t.colorFillTertiary};

    animation: ${wn} 1.5s ease-in-out infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `,skeletonCard:e`
    display: flex;
    gap: 12px;

    padding-block: 12px;
    padding-inline: 14px;
    border: 1px solid ${t.colorFillSecondary};
    border-radius: ${t.borderRadiusLG};
  `,skeletonLine:e`
    height: 10px;
    border-radius: ${t.borderRadius};
    background: ${t.colorFillTertiary};
    animation: ${wn} 1.5s ease-in-out infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `,skeletonPill:e`
    width: 72px;
    height: 28px;
    border-radius: 999px;

    background: ${t.colorFillTertiary};

    animation: ${wn} 1.5s ease-in-out infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}))})),En,Dn,On,kn=e((()=>{S(),se(),M(),D(),En=t(l()),Tn(),Dn=t(u()),On=(0,En.memo)(({onToggle:e,selected:t,template:n})=>{let r=(0,En.useCallback)(()=>e(n.id),[e,n.id]),i=(0,En.useCallback)(t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),e(n.id))},[e,n.id]);return(0,Dn.jsxs)(`div`,{"aria-pressed":t,className:Ye(z.card,t&&z.cardSelected),role:`button`,tabIndex:0,onClick:r,onKeyDown:i,children:[(0,Dn.jsx)(le,{avatar:n.avatar,shape:`square`,size:36}),(0,Dn.jsxs)(`div`,{className:z.cardBody,children:[(0,Dn.jsx)(`div`,{className:z.cardTitle,children:n.title}),n.description&&(0,Dn.jsx)(`div`,{className:z.cardDescription,children:n.description})]}),(0,Dn.jsx)(x,{className:Ye(z.cardCheck,!t&&z.cardCheckHidden),icon:xe,size:16})]})}),On.displayName=`AgentCard`})),An,jn=e((()=>{Ft(),An={[N.BusinessStrategy]:`agentMarketplace.category.businessStrategy`,[N.ContentCreation]:`agentMarketplace.category.contentCreation`,[N.CreatorEconomy]:`agentMarketplace.category.creatorEconomy`,[N.DesignCreative]:`agentMarketplace.category.designCreative`,[N.Engineering]:`agentMarketplace.category.engineering`,[N.FinanceLegal]:`agentMarketplace.category.financeLegal`,[N.LearningResearch]:`agentMarketplace.category.learningResearch`,[N.Marketing]:`agentMarketplace.category.marketing`,[N.Operations]:`agentMarketplace.category.operations`,[N.PeopleHR]:`agentMarketplace.category.peopleHR`,[N.PersonalLife]:`agentMarketplace.category.personalLife`,[N.ProductManagement]:`agentMarketplace.category.productManagement`,[N.SalesCustomer]:`agentMarketplace.category.salesCustomer`}})),Mn,Nn,Pn,Fn=e((()=>{M(),Mn=t(l()),a(),jn(),Tn(),Nn=t(u()),Pn=(0,Mn.memo)(({active:e,allLabel:t,categories:n,onChange:i})=>{let{t:a}=r(`tool`),o=(t,n)=>(0,Nn.jsx)(`button`,{"aria-pressed":e===t,className:Ye(z.pill,e===t&&z.pillActive),type:`button`,onClick:()=>i(t),children:n},t);return(0,Nn.jsxs)(`div`,{className:z.filterBar,children:[o(`all`,t),n.map(e=>o(e,a(An[e])))]})}),Pn.displayName=`CategoryFilter`})),In,B,Ln,Rn,zn,Bn=e((()=>{In=t(l()),Tn(),B=t(u()),Ln=6,Rn=4,zn=(0,In.memo)(()=>(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`div`,{className:z.filterBar,children:Array.from({length:Rn}).map((e,t)=>(0,B.jsx)(`div`,{className:z.skeletonPill},t))}),(0,B.jsx)(`div`,{className:z.grid,children:Array.from({length:Ln}).map((e,t)=>(0,B.jsxs)(`div`,{className:z.skeletonCard,children:[(0,B.jsx)(`div`,{className:z.skeletonAvatar}),(0,B.jsxs)(`div`,{style:{display:`flex`,flex:1,flexDirection:`column`,gap:8,paddingTop:4},children:[(0,B.jsx)(`div`,{className:z.skeletonLine,style:{width:`60%`}}),(0,B.jsx)(`div`,{className:z.skeletonLine,style:{width:`90%`}})]})]},t))})]})),zn.displayName=`AgentPickerSkeleton`})),V,H,Vn,Hn,Un=e((()=>{Ft(),T(),y(),C(),M(),D(),V=t(l()),a(),p(),fn(),Lt(),Yt(),O(),We(),dt(),bn(),Cn(),kn(),Fn(),Bn(),Tn(),H=t(u()),Vn=[],Hn=(0,V.memo)(({onBack:e})=>{let{t}=r(`onboarding`),{t:n}=r(`tool`),i=d(),[a]=f(),o=a.get(`entry`)===`skip`,s=!o,c=o?`agent`:`classic`,l=A(e=>e.finishOnboarding),u=A(Ie.interests),p=(0,V.useMemo)(()=>Sn(u),[u]),[m]=(0,V.useState)(()=>Math.random().toString(36).slice(2)),{data:h=Vn,error:ee,isLoading:te}=dn(),g=(0,V.useMemo)(()=>Mt(h,p),[h,p]),ne=(0,V.useMemo)(()=>{let e=new Set,t=[];for(let n of g)e.has(n.category)||(e.add(n.category),t.push(n.category));return t},[g]),[y,re]=(0,V.useState)(`all`),ie=(0,V.useMemo)(()=>y===`all`?g:g.filter(e=>e.category===y),[y,g]),[b,x]=(0,V.useState)(()=>new Set),ae=(0,V.useCallback)(e=>{x(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},[]),[S,oe]=(0,V.useState)(),C=(0,V.useRef)(!1),se=(0,V.useRef)(!1);(0,V.useEffect)(()=>{se.current||(se.current=!0,Gt({categoryHints:p,requestId:m}))},[p,m]);let ce=(0,V.useCallback)(async(e,t)=>{await l(),Wt({action:e,entry:o?`agent_skip`:`classic`,flow:c,selectedCount:t,step:`agentpicker`,stepIndex:4});let n=Be();Kt({flow:c,targetUrl:n}),i(n)},[c,l,o,i]),T=(0,V.useCallback)(async()=>{C.current||(C.current=!0,oe(`skip`),await ce(`skip`,0))},[ce]),le=(0,V.useCallback)(async()=>{if(C.current||b.size===0)return;C.current=!0,oe(`continue`);let e=[...b];Jt({categoryHints:p,requestId:m,selectedTemplateIds:e});try{await It(e)}catch(e){console.error(`[AgentPickerStep] install failed`,e)}await ce(`continue`,e.length)},[p,ce,m,b]),ue=(0,V.useCallback)(()=>{C.current||e()},[e]),de=te&&h.length===0,fe=!te&&ie.length===0;return(0,H.jsxs)(_,{gap:16,children:[(0,H.jsx)(yn,{sentences:[t(`agentPicker.title`),t(`agentPicker.title2`),t(`agentPicker.title3`)]}),(0,H.jsx)(w,{fontSize:14,type:`secondary`,children:t(`agentPicker.subtitle`)}),de?(0,H.jsx)(zn,{}):fe?(0,H.jsx)(`div`,{className:z.empty,children:n(ee?`agentMarketplace.picker.failedToLoad`:`agentMarketplace.picker.empty`)}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(Pn,{active:y,allLabel:t(`agentPicker.allCategories`),categories:ne,onChange:re}),(0,H.jsx)(`div`,{className:z.scrollArea,children:(0,H.jsx)(`div`,{className:z.grid,children:ie.map(e=>(0,H.jsx)(On,{selected:b.has(e.id),template:e,onToggle:ae},e.id))})})]}),(0,H.jsxs)(`div`,{className:z.footer,children:[s?(0,H.jsx)(v,{disabled:!!S,icon:_e,style:{color:j.colorTextDescription},type:`text`,onClick:ue,children:t(`back`)}):(0,H.jsx)(`span`,{}),(0,H.jsxs)(`div`,{className:z.footerActions,children:[(0,H.jsx)(v,{disabled:!!S,type:`text`,onClick:()=>void T(),children:t(`agentPicker.skip`)}),(0,H.jsx)(v,{disabled:b.size===0||S===`skip`,loading:S===`continue`,type:`primary`,onClick:()=>void le(),children:`${t(`agentPicker.continue`)} (${b.size})`})]})]})]})}),Hn.displayName=`AgentPickerStep`})),Wn,U,Gn,Kn=e((()=>{Dt(),T(),S(),wt(),y(),M(),D(),Wn=t(l()),a(),O(),We(),bn(),U=t(u()),Gn=(0,Wn.memo)(({onBack:e,onNext:t})=>{let{t:n}=r(`onboarding`),i=A(Ie.fullName),a=A(e=>e.updateFullName),[o,s]=(0,Wn.useState)(i||``),[c,l]=(0,Wn.useState)(!1),u=(0,Wn.useRef)(!1),d=(0,Wn.useCallback)(()=>{u.current||(u.current=!0,l(!0),o.trim()&&a(o.trim()),t())},[o,a,t]),f=(0,Wn.useCallback)(()=>{u.current||(u.current=!0,l(!0),e())},[e]);return(0,U.jsxs)(_,{gap:16,children:[(0,U.jsx)(yn,{sentences:[n(`username.title`),n(`username.title2`),n(`username.title3`)]}),(0,U.jsx)(_,{horizontal:!0,align:`center`,gap:12,children:(0,U.jsx)(Tt,{autoFocus:!0,placeholder:n(`username.placeholder`),size:`large`,title:n(`username.hint`),value:o,prefix:(0,U.jsx)(x,{color:j.colorTextDescription,icon:Se,size:32,style:{marginInline:8}}),styles:{input:{fontSize:28,fontWeight:`bolder`}},suffix:(0,U.jsx)(Et,{disabled:!o?.trim()||c,type:`primary`,style:{zoom:1.5},onClick:d}),onChange:e=>s(e.target.value),onPressEnter:d})}),(0,U.jsx)(_,{horizontal:!0,justify:`flex-start`,style:{marginTop:32},children:(0,U.jsx)(v,{disabled:c,icon:_e,type:`text`,style:{color:j.colorTextDescription},onClick:f,children:n(`back`)})})]})}),Gn.displayName=`FullNameStep`})),W,G,qn,Jn=e((()=>{Ee(),re(),T(),S(),wt(),y(),C(),M(),D(),W=t(l()),a(),O(),We(),bn(),Rt(),G=t(u()),qn=(0,W.memo)(({onBack:e,onNext:t})=>{let{t:n}=r(`onboarding`),i=A(Ie.interests),a=A(e=>e.updateInterests),[o,s]=(0,W.useState)(()=>ke(i)),[c,l]=(0,W.useState)(``),[u,d]=(0,W.useState)(!1),[f,p]=(0,W.useState)(!1),m=(0,W.useRef)(!1),h=(0,W.useMemo)(()=>zt.map(e=>({...e,label:n(`interests.area.${e.key}`)})),[n]),ee=(0,W.useCallback)(e=>{s(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},[]),te=(0,W.useCallback)(()=>{let e=c.trim();e&&!o.includes(e)&&(s(t=>[...t,e]),l(``))},[c,o]),ne=(0,W.useCallback)(()=>{if(m.current)return;m.current=!0,p(!0);let e=[...o],n=c.trim();u&&n&&e.push(n),a(ke(e)),t()},[o,c,u,a,t]),y=(0,W.useCallback)(()=>{m.current||(m.current=!0,p(!0),e())},[e]);return(0,G.jsxs)(_,{gap:16,children:[(0,G.jsx)(yn,{sentences:[n(`interests.title`),n(`interests.title2`),n(`interests.title3`)]}),(0,G.jsxs)(_,{horizontal:!0,align:`center`,gap:12,wrap:`wrap`,children:[h.map(e=>(0,G.jsxs)(g,{clickable:!0,horizontal:!0,gap:8,padding:12,variant:`outlined`,style:o.includes(e.key)?{background:j.colorFillSecondary,borderColor:j.colorFillSecondary}:{},onClick:()=>ee(e.key),children:[(0,G.jsx)(x,{color:j.colorTextSecondary,icon:e.icon,size:16}),(0,G.jsx)(w,{fontSize:15,weight:500,children:e.label})]},e.key)),(0,G.jsxs)(g,{clickable:!0,horizontal:!0,gap:8,padding:12,variant:`outlined`,style:u?{background:j.colorFillSecondary,borderColor:j.colorFillSecondary}:{},onClick:()=>d(!u),children:[(0,G.jsx)(x,{color:j.colorTextSecondary,icon:ge,size:16}),(0,G.jsx)(w,{fontSize:15,weight:500,children:n(`interests.area.other`)})]})]}),u&&(0,G.jsx)(Tt,{autoFocus:!0,placeholder:n(`interests.placeholder`),size:`large`,title:n(`interests.hint`),value:c,prefix:(0,G.jsx)(x,{color:j.colorTextDescription,icon:ge,style:{marginInline:8}}),onChange:e=>l(e.target.value),onPressEnter:te}),(0,G.jsxs)(_,{horizontal:!0,justify:`space-between`,style:{marginTop:32},children:[(0,G.jsx)(v,{disabled:f,icon:_e,style:{color:j.colorTextDescription},type:`text`,onClick:y,children:n(`back`)}),(0,G.jsx)(v,{disabled:f,type:`primary`,onClick:ne,children:n(`next`)})]})]})}),qn.displayName=`InterestsStep`})),K,Yn,Xn,Zn,Qn,$n=e((()=>{K=t(l()),xt(),vt(),Yn=1e3,Xn=15e3,Zn=4e3,Qn=({serverStatus:e})=>{let[t,n]=(0,K.useState)(!1),r=(0,K.useRef)(null),i=(0,K.useRef)(null),a=(0,K.useRef)(null),o=(0,K.useRef)(null),s=bt(e=>e.refreshComposioConnectionStatus),c=(0,K.useCallback)(()=>{i.current&&=(clearInterval(i.current),null),a.current&&=(clearInterval(a.current),null),o.current&&=(clearTimeout(o.current),null),r.current=null,n(!1)},[]);(0,K.useEffect)(()=>()=>{c()},[c]),(0,K.useEffect)(()=>{e===P.ACTIVE&&t&&c()},[e,t,c]);let l=(0,K.useCallback)((e,t=Xn)=>{a.current||(a.current=setInterval(async()=>{try{await s(e)}catch(e){console.info(`[Composio] Polling check (expected during auth):`,e)}},Yn),o.current=setTimeout(()=>{a.current&&=(clearInterval(a.current),null),n(!1)},t))},[s]),u=(0,K.useCallback)((e,t)=>{i.current=setInterval(()=>{try{e.closed&&(i.current&&=(clearInterval(i.current),null),r.current=null,l(t,Zn))}catch{i.current&&=(clearInterval(i.current),null),l(t)}},500)},[l]);return{isWaitingAuth:t,openOAuthWindow:(0,K.useCallback)((e,t)=>{c(),n(!0);let i=window.open(e,`_blank`,`width=600,height=700`);i?(r.current=i,u(i,t)):l(t)},[c,u,l])}}})),er,tr,nr=e((()=>{er=t(l()),xt(),vt(),O(),tr=({identifier:e,appSlug:t,label:n,server:r,onAuthRequired:i})=>{let[a,o]=(0,er.useState)(!1),s=bt(e=>e.createComposioConnection),c=bt(e=>e.refreshComposioConnectionStatus),l=bt(e=>e.reauthorizeComposioConnection),u=A(e=>e.toggleInboxAgentDefaultPlugin);return{handleConnect:async()=>{if(!r){o(!0);try{let r=await s({appSlug:t,identifier:e,label:n});if(r){let e=r.identifier;await u(e),r.status===P.ACTIVE?await c(r.identifier):r.redirectUrl&&i?.(r.redirectUrl,r.identifier)}}catch(e){console.error(`[Composio] Failed to connect server:`,e)}finally{o(!1)}}},handleReauthorize:async()=>{if(r){o(!0);try{let e=await l(r.identifier);e?.redirectUrl&&i?.(e.redirectUrl,e.identifier)}catch(e){console.error(`[Composio] Failed to re-authorize server:`,e)}finally{o(!1)}}},isConnecting:a}}})),rr,ir,ar,or=e((()=>{S(),se(),M(),rr=t(l()),ir=t(u()),ar=(0,rr.memo)(({icon:e,label:t})=>typeof e==`string`?(0,ir.jsx)(le,{alt:t,avatar:e,shape:`square`,size:24,style:{flex:`none`}}):(0,ir.jsx)(x,{fill:j.colorText,icon:e,size:24})),ar.displayName=`ServerIcon`})),sr,cr,lr,ur=e((()=>{S(),M(),D(),sr=t(l()),a(),vt(),cr=t(u()),lr=(0,sr.memo)(({isConnecting:e,isWaitingAuth:t,server:n})=>{let{t:i}=r(`setting`);if(e||t)return(0,cr.jsx)(x,{spin:!0,color:j.colorTextDescription,icon:Ce});if(!n)return null;switch(n.status){case P.ACTIVE:return(0,cr.jsx)(x,{color:j.colorSuccess,icon:xe});case P.PENDING_AUTH:return null;case P.ERROR:return(0,cr.jsx)(x,{color:j.colorError,icon:be,title:i(`tools.composio.error`,{defaultValue:`Error`})});default:return null}}),lr.displayName=`ServerStatusControl`})),dr,fr,pr,mr=e((()=>{re(),T(),C(),M(),dr=t(l()),vt(),$n(),nr(),or(),ur(),fr=t(u()),pr=(0,dr.memo)(({identifier:e,label:t,server:n,appSlug:r,icon:i})=>{let{isWaitingAuth:a,openOAuthWindow:o}=Qn({serverStatus:n?.status}),{isConnecting:s,handleConnect:c,handleReauthorize:l}=tr({appSlug:r,identifier:e,label:t,onAuthRequired:o,server:n}),u=n?.status===P.ACTIVE,d=n?.status===P.PENDING_AUTH,f=n?.status===P.ERROR,p=!u;return(0,fr.jsxs)(g,{horizontal:!0,align:`center`,clickable:p,gap:8,justify:`space-between`,padding:12,variant:`outlined`,style:u?{background:j.colorSuccessBg,borderColor:j.colorSuccessBorder}:{},onClick:()=>{u||(n?(d||f)&&l():c())},children:[(0,fr.jsxs)(_,{horizontal:!0,align:`center`,flex:1,gap:12,style:{overflow:`hidden`},children:[(0,fr.jsx)(ar,{icon:i,label:t}),(0,fr.jsx)(w,{ellipsis:!0,children:t})]}),(0,fr.jsx)(lr,{isConnecting:s,isWaitingAuth:a,server:n})]})}),pr.displayName=`ComposioServerItem`})),hr,gr,_r,vr,yr=e((()=>{ce(),gt(),hr=t(Xe()),gr=t(l()),Ee(),xt(),vt(),mr(),_r=t(u()),vr=(0,gr.memo)(()=>{let e=bt(yt.getServers,hr.default);bt(e=>e.useFetchUserComposioConnections)(!0);let t=t=>e.find(e=>e.identifier===t);return(0,_r.jsx)(_t,{height:`33vh`,offset:8,size:12,children:(0,_r.jsx)(oe,{gap:8,maxItemWidth:120,rows:2,children:Oe.map(e=>(0,_r.jsx)(pr,{appSlug:e.appSlug,icon:e.icon,identifier:e.identifier,label:e.label,server:t(e.identifier)},e.identifier))})})}),vr.displayName=`ComposioServerList`})),br,xr,Sr,Cr=e((()=>{T(),y(),M(),D(),br=t(l()),a(),bn(),yr(),xr=t(u()),Sr=(0,br.memo)(({onBack:e,onNext:t})=>{let{t:n}=r(`onboarding`),[i,a]=(0,br.useState)(!1),o=(0,br.useRef)(!1),s=(0,br.useCallback)(()=>{o.current||(o.current=!0,a(!0),t())},[t]),c=(0,br.useCallback)(()=>{o.current||(o.current=!0,a(!0),e())},[e]);return(0,xr.jsxs)(_,{gap:16,children:[(0,xr.jsx)(yn,{sentences:[n(`proSettings.connectors.title`)]}),(0,xr.jsx)(vr,{}),(0,xr.jsxs)(_,{horizontal:!0,align:`center`,justify:`space-between`,style:{marginTop:16},children:[(0,xr.jsx)(v,{disabled:i,icon:_e,type:`text`,style:{color:j.colorTextDescription},onClick:c,children:n(`back`)}),(0,xr.jsx)(v,{disabled:i,style:{minWidth:120},type:`primary`,onClick:s,children:n(`next`)})]})]})}),Sr.displayName=`ProSettingsStep`})),wr,Tr,Er=e((()=>{qe(),wr=e=>e<=2?1:e===3?2:3,Tr=e=>e>4})),q,J,Dr,Or,kr,Ar,jr,Mr=e((()=>{qe(),T(),q=t(l()),p(),st(),on(),Un(),Kn(),Jn(),Cr(),Qe(),fn(),nt(),Yt(),ze(),O(),We(),Er(),J=t(u()),Dr=2,Or=3,kr={1:{flow:`classic`,step:`fullname`,stepIndex:1},[Dr]:{flow:`classic`,step:`interests`,stepIndex:2},[Or]:{flow:`classic`,step:`prosettings`,stepIndex:3},4:{flow:`classic`,step:`agentpicker`,stepIndex:4}},Ar=e=>kr[e],jr=(0,q.memo)(()=>{let e=d(),t=Fe(),[n,r,i,a,o,s]=A(e=>[e.isUserStateInit,$e.commonStepsCompleted(e),$e.currentStep(e),e.goToNextStep,e.goToPreviousStep,e.setOnboardingStep]),c=et(tt.enableComposio),l=et(e=>e.serverConfigInit),u=l&&!c,f=lt(()=>new Set),p=lt(()=>new Set),h=(0,q.useRef)(!1);dn(n&&r),(0,q.useEffect)(()=>{!n||h.current||(h.current=!0,Tr(i)&&s(wr(i)))},[i,n,s]);let ee=Tr(i)?wr(i):i,te=(0,q.useCallback)(()=>{e(`/onboarding?step=2`,{replace:!0})},[e]);(0,q.useEffect)(()=>{if(!n||!r||i!==Or||!u)return;let e=kr[Or];f.has(e.step)||(f.add(e.step),Wt({...e,action:`auto_skip`,skipped:!0}),a())},[f,r,i,a,n,u]),(0,q.useEffect)(()=>{if(!n||!r||i===Or&&(!l||u))return;let e=Ar(i);!e||p.has(e.step)||(p.add(e.step),qt(e))},[r,i,n,l,u,p]);let g=(0,q.useCallback)(()=>{Wt(kr[1]),a()},[a]),ne=(0,q.useCallback)(()=>{if(Wt(u?{...kr[Dr],skippedNextStep:`prosettings`}:kr[Dr]),u){a(),a();return}a()},[a,u]),v=(0,q.useCallback)(()=>{Wt(kr[Or]),a()},[a]),y=(0,q.useCallback)(()=>{if(u){o(),o();return}o()},[o,u]);return n?r?(0,J.jsx)(an,{children:(0,J.jsx)(_,{gap:24,paddingInline:t?16:0,style:{maxWidth:ee===4?780:600,width:`100%`},children:(()=>{switch(ee){case 1:return(0,J.jsx)(Gn,{onBack:te,onNext:g});case Dr:return(0,J.jsx)(qn,{onBack:o,onNext:ne});case Or:return l?u?null:(0,J.jsx)(Sr,{onBack:o,onNext:v}):(0,J.jsx)(rt,{debugId:`ClassicOnboarding/serverConfig`});case 4:return(0,J.jsx)(Hn,{onBack:y});default:return null}})()})}):(0,J.jsx)(m,{replace:!0,to:`/onboarding`}):(0,J.jsx)(rt,{debugId:`ClassicOnboarding`})}),jr.displayName=`ClassicOnboardingPage`})),Y,X,Nr,Pr=e((()=>{Dt(),T(),y(),Ot(),C(),M(),D(),Y=t(l()),a(),pt(),at(),O(),bn(),X=t(u()),Nr=(0,Y.memo)(({onBack:e,onNext:t})=>{let{i18n:n,t:i}=r([`onboarding`,`common`]),a=Ze(e=>e.switchLocale),o=A(e=>e.setSettings),s=ft(n.resolvedLanguage||n.language||navigator.language),[c,l]=(0,Y.useState)(!1),[u,d]=(0,Y.useState)(!1),f=(0,Y.useRef)(!1),p=(0,Y.useCallback)(async()=>{if(!f.current){f.current=!0,l(!0),d(!1);try{await o({general:{responseLanguage:s}}),await t()}catch{d(!0),f.current=!1,l(!1)}}},[s,o,t]),m=(0,Y.useCallback)(()=>{f.current||(f.current=!0,l(!0),e())},[e]);return(0,X.jsxs)(_,{gap:16,children:[(0,X.jsx)((0,Y.useCallback)(()=>(0,X.jsx)(yn,{sentences:[i(`responseLanguage.title`),i(`responseLanguage.title2`),i(`responseLanguage.title3`)]}),[i]),{}),(0,X.jsxs)(_,{horizontal:!0,align:`center`,gap:12,children:[(0,X.jsx)(kt,{showSearch:!0,options:Ke,size:`large`,value:s,optionRender:e=>(0,X.jsxs)(_,{children:[(0,X.jsx)(w,{children:e.label}),(0,X.jsx)(w,{fontSize:12,type:`secondary`,children:i(`lang.${e.value}`,{ns:`common`})})]},e.value),style:{fontSize:20,fontWeight:`bold`,width:`100%`},onChange:e=>{e&&a(e)}}),(0,X.jsx)(Et,{disabled:c,type:`primary`,style:{zoom:1.5},onClick:p})]}),(0,X.jsx)(w,{style:{fontSize:12},type:`secondary`,children:i(`responseLanguage.hint`)}),u&&(0,X.jsx)(w,{style:{color:j.colorError,fontSize:12},children:i(`responseLanguage.saveFailed`)}),(0,X.jsx)(_,{horizontal:!0,justify:`flex-start`,style:{marginTop:32},children:(0,X.jsx)(v,{disabled:c,icon:_e,type:`text`,style:{color:j.colorTextDescription},onClick:m,children:i(`back`)})})]})}),Nr.displayName=`ResponseLanguageStep`})),Fr,Z,Ir,Lr=e((()=>{Pe(),re(),T(),S(),gn(),y(),ae(),C(),St(),fe(),M(),D(),Fr=t(l()),a(),Pt(),De(),O(),Z=t(u()),Ir=(0,Fr.memo)(({onNext:e})=>{let{t,i18n:n}=r(`onboarding`),a=n.language,[o,s]=(0,Fr.useState)(!0),[c,l]=(0,Fr.useState)(!1),u=(0,Fr.useRef)(!1),d=A(e=>e.updateGeneralConfig),f=(0,Fr.useCallback)(t=>{u.current||(u.current=!0,l(!0),d({telemetry:t}),e())},[d,e]),p=(0,Fr.useCallback)(({icon:e})=>(0,Z.jsx)(g,{shadow:!0,align:`center`,height:32,justify:`center`,padding:4,variant:`outlined`,width:32,children:(0,Z.jsx)(x,{color:j.colorTextDescription,icon:e,size:16})}),[]);return(0,Z.jsxs)(_,{gap:16,children:[(0,Z.jsx)(Nt,{size:64}),(0,Z.jsxs)(_,{style:{marginBottom:16},children:[(0,Z.jsx)(w,{as:`h1`,fontSize:28,weight:`bold`,children:(0,Z.jsx)(hn,{cursorCharacter:(0,Z.jsx)(Ct,{size:28,variant:`pulse`}),cursorFade:!1,deletePauseDuration:1e3,deletingSpeed:32,hideCursorWhileTyping:`afterTyping`,pauseDuration:16e3,typingSpeed:64,sentences:[t(`telemetry.title`,{name:`Lobe AI`}),t(`telemetry.title2`),t(`telemetry.title3`)]},a)}),(0,Z.jsx)(w,{as:`p`,children:t(`telemetry.desc`)})]}),(0,Z.jsx)(ue,{current:null,direction:`vertical`,items:[{description:(0,Z.jsx)(w,{as:`p`,color:j.colorTextSecondary,style:{marginBottom:16},children:t(`telemetry.rows.create.desc`)}),icon:(0,Z.jsx)(p,{icon:E}),title:(0,Z.jsx)(w,{as:`h2`,fontSize:16,children:t(`telemetry.rows.create.title`)})},{description:(0,Z.jsx)(w,{as:`p`,color:j.colorTextSecondary,style:{marginBottom:16},children:t(`telemetry.rows.collaborate.desc`)}),icon:(0,Z.jsx)(p,{icon:ye}),title:(0,Z.jsx)(w,{as:`h2`,fontSize:16,children:t(`telemetry.rows.collaborate.title`)})},{description:(0,Z.jsx)(w,{as:`p`,color:j.colorTextSecondary,children:t(`telemetry.rows.evolve.desc`)}),icon:(0,Z.jsx)(p,{icon:he}),title:(0,Z.jsx)(w,{as:`h2`,fontSize:16,children:t(`telemetry.rows.evolve.title`)})}]}),(0,Z.jsxs)(_,{gap:8,children:[(0,Z.jsx)(w,{as:`p`,color:j.colorTextSecondary,children:t(`telemetry.rows.privacy.desc`,{appName:Le})}),(0,Z.jsxs)(_,{horizontal:!0,align:`center`,gap:8,children:[(0,Z.jsx)(b,{checked:o,size:`small`,onChange:e=>s(e)}),(0,Z.jsx)(w,{fontSize:12,type:o?void 0:`secondary`,children:t(`telemetry.rows.privacy.title`,{appName:Le})})]})]}),(0,Z.jsx)(v,{disabled:c,size:`large`,type:`primary`,style:{marginBlock:8,maxWidth:240},onClick:()=>f(o),children:t(`telemetry.next`)}),o&&(0,Z.jsxs)(g,{horizontal:!0,align:`flex-start`,gap:8,variant:`borderless`,children:[(0,Z.jsx)(x,{icon:pe,size:16,style:{color:j.colorSuccess,flexShrink:0}}),(0,Z.jsx)(w,{fontSize:12,type:`secondary`,children:(0,Z.jsx)(i,{i18nKey:`telemetry.agreement`,ns:`onboarding`,components:{privacy:(0,Z.jsx)(`a`,{href:we,style:{color:`inherit`,cursor:`pointer`,textDecoration:`underline`},children:t(`telemetry.terms`)}),terms:(0,Z.jsx)(`a`,{href:Te,style:{color:`inherit`,cursor:`pointer`,textDecoration:`underline`},children:t(`telemetry.privacy`)})}})})]})]})}),Ir.displayName=`TelemetryStep`})),Q,$,Rr,zr,Br=e((()=>{T(),Q=t(l()),p(),st(),Mr(),on(),Pr(),Lr(),fn(),nt(),Yt(),O(),We(),dt(),$=t(u()),Rr={1:{flow:`common`,step:`telemetry`,stepIndex:1},2:{flow:`common`,step:`response_language`,stepIndex:2}},zr=(0,Q.memo)(()=>{let e=A(e=>e.isUserStateInit),t=A($e.commonStepsCompleted),[n,r]=f(),i=n.get(`step`)===`2`?2:1,a=n.has(`step`),o=lt(()=>new Set);dn(e&&(!t||a)),(0,Q.useEffect)(()=>{je(window.location.pathname,window.location.search)},[]),(0,Q.useEffect)(()=>{if(!e||t&&!a)return;let n=Rr[i];o.has(n.step)||(o.add(n.step),qt(n))},[t,a,e,i,o]);let s=(0,Q.useCallback)(()=>{Wt(Rr[1]),r({step:`2`},{replace:!0})},[r]),c=(0,Q.useCallback)(()=>{r({step:`1`},{replace:!0})},[r]),l=(0,Q.useCallback)(()=>{Wt(Rr[2]),r({},{replace:!0})},[r]);return e?t&&!a?(0,$.jsx)(jr,{}):(0,$.jsx)(an,{children:(0,$.jsx)(_,{gap:24,style:{maxWidth:600,width:`100%`},children:i===1?(0,$.jsx)(Ir,{onNext:s}):(0,$.jsx)(Nr,{onBack:c,onNext:l})})}):(0,$.jsx)(rt,{debugId:`Onboarding/userState`})}),zr.displayName=`OnboardingPage`}));e((()=>{Br()}))();export{zr as default};