import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{Kt as o,Mt as s,Nt as c,qt as l}from"../vendor/vendor-ui-core-BmtybT1r.js";import{FD as u,HE as d,ID as f,M_ as p,Rd as m,Yd as h,_g as g,dg as _,eD as v,zd as y}from"./index-w64_zsxD.js";import{n as b,r as x,t as S}from"./style-NK_j2rkJ.js";var C,w,T,E,D,O=e((()=>{_(),C=e=>{let t=e?.budget;return t&&typeof t==`object`?t:void 0},w=new Set(Object.values(g)),T=e=>!!e&&w.has(e),E={[g.Free]:g.Starter,[g.Premium]:g.Ultimate,[g.Starter]:g.Premium},D=e=>e?E[e]:void 0})),k,A,j,M,N,P,F,I;e((()=>{u(),d(),_(),l(),c(),k=t(i()),r(),h(),x(),O(),A=t(a()),j=1e6,M={[g.Free]:`plans.plan.free.title`,[g.Hobby]:`plans.plan.hobby.title`,[g.Premium]:`plans.plan.premium.title`,[g.Starter]:`plans.plan.starter.title`,[g.Ultimate]:`plans.plan.ultimate.title`},N={budgetFact:f(`acss-hkx68s`,[`.acss-hkx68s{display:flex;justify-content:space-between;width:100%;font-size:13px;line-height:1.4;}`],`
    display: flex;
    justify-content: space-between;

    width: 100%;

    font-size: 13px;
    line-height: 1.4;
  `),budgetFactLabel:f(`acss-nt432w`,[`.acss-nt432w{color:var(--ant-color-text-tertiary);}`],`
    color: var(--ant-color-text-tertiary);
  `),budgetFactValue:f(`acss-1f9uajb`,[`.acss-1f9uajb{font-weight:600;color:var(--ant-color-text);white-space:nowrap;}`],`
    font-weight: 600;
    color: var(--ant-color-text);
    white-space: nowrap;
  `),budgetFactWarningValue:f(`acss-t05ygq`,[`.acss-t05ygq{font-weight:700;color:var(--ant-color-error);}`],`
    font-weight: 700;
    color: var(--ant-color-error);
  `),budgetFacts:f(`acss-ybrhvy`,[`.acss-ybrhvy{width:100%;}`],`
    width: 100%;
  `)},P=e=>{switch(e){case`approximate`:return`limitation.insufficientBudget.approximateDesc`;case`estimated`:return`limitation.insufficientBudget.estimatedDesc`;case`exact`:return`limitation.insufficientBudget.exactDesc`;default:return`limitation.insufficientBudget.desc`}},F=e=>e>=j?`${y(e/j,2)}M`:m(e),I=(0,k.memo)(({errorBody:e,errorType:t,onRetry:r})=>{let{t:i}=n(`subscription`),a=C(e),c=t===p.InsufficientBudgetForModel,l=T(a?.planAtError)?a.planAtError:g.Free,u=e=>i(M[e]),d=D(l),f=i(c?`limitation.insufficientBudget.title`:`limitation.limited.title`),m=c?i(P(a?.pricingBasis)):i(`limitation.limited.desc`,{plan:u(l)}),h=d?i(`limitation.limited.upgradeToPlan`,{plan:u(d)}):i(`limitation.limited.upgrade`),_=[{label:i(`limitation.insufficientBudget.required`),value:a?.requiredCredits,warning:!1},{label:i(`limitation.insufficientBudget.shortfall`),value:a?.shortfallCredits,warning:!0}].filter(e=>e.value!==void 0&&e.value>0);return(0,A.jsx)(S,{children:(0,A.jsxs)(b,{animation:!0,avatar:`💰`,description:m,title:f,children:[_.length>0&&(0,A.jsx)(o,{className:N.budgetFacts,gap:8,children:_.map(e=>(0,A.jsxs)(`div`,{className:N.budgetFact,children:[(0,A.jsx)(`span`,{className:N.budgetFactLabel,children:e.label}),(0,A.jsx)(`span`,{className:e.warning?`${N.budgetFactValue} ${N.budgetFactWarningValue}`:N.budgetFactValue,children:F(e.value)})]},e.label))}),(0,A.jsxs)(o,{gap:8,width:`100%`,children:[v.subscription&&(0,A.jsx)(`a`,{href:v.subscription,rel:`noopener noreferrer`,style:{width:`100%`},target:`_blank`,children:(0,A.jsx)(s,{block:!0,size:`large`,type:`primary`,children:h})}),(0,A.jsx)(s,{block:!0,size:`large`,onClick:r,children:i(`limitation.insufficientBudget.retry`)})]})]})})})}))();export{I as default};