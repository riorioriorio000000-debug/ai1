import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r,r as i,s as a}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as o,T as s}from"../vendor/vendor-react-B9HSWrpN.js";import{Kt as c,at as l,i as u,it as d,qt as f,r as p}from"../vendor/vendor-ui-core-BmtybT1r.js";import{mn as m}from"./app-const-BpgKVRXh.js";import{FD as h,ID as g,Qv as _,dg as v,jx as y,wx as b}from"./index-w64_zsxD.js";import{n as x,t as S}from"./Tag-C95BKTI7.js";import{n as C,t as w}from"./Select-C0UJO2yB.js";import{o as T,s as E}from"./i18n-OYqpBl2i.js";var D,O,k,A=e((()=>{v(),f(),u(),C(),l(),D=t(o()),r(),i(),m(),b(),T(),O=t(s()),k=(0,D.memo)(({value:e,onChange:t,workspaceId:r,defaultToInbox:i,...o})=>{let{t:s}=n(`common`),l=a(y.agentsForBinding(r),()=>E.listAgentsForBinding(r)),u=s(`defaultSession`),f=(0,D.useMemo)(()=>(l.data??[]).map(e=>{let t=_(e,u);return{label:(0,O.jsxs)(c,{horizontal:!0,align:`center`,gap:8,children:[(0,O.jsx)(p,{avatar:e.avatar||`/avatars/agent-default.png`,background:e.backgroundColor??void 0,size:20}),(0,O.jsx)(d,{ellipsis:!0,children:t})]}),title:t,value:e.id}}),[l.data,u]),m=(0,D.useMemo)(()=>(l.data??[]).find(e=>e.isInbox)?.id,[l.data]),h=(0,D.useRef)(t);return h.current=t,(0,D.useEffect)(()=>{!i||e||!m||h.current?.(m)},[i,e,m]),(0,O.jsx)(w,{loading:l.isLoading,options:f,value:e??null,onChange:e=>t?.(e??void 0),...o})}),k.displayName=`MessengerAgentSelect`})),j,M,N,P,F,I,L,R=e((()=>{h(),f(),u(),x(),l(),j=t(s()),M=`personal`,N={personalTag:g(`acss-exfgbk`,[`.acss-exfgbk{cursor:default;flex:none;margin-block:0;margin-inline:auto 0;}`],`
    cursor: default;
    flex: none;
    margin-block: 0;
    margin-inline: auto 0;
  `),scopeName:g(`acss-1chx42j`,[`.acss-1chx42j{flex:0 1 auto;min-width:0;}`],`
    flex: 0 1 auto;
    min-width: 0;
  `),scopeOption:g(`acss-1kd90xv`,[`.acss-1kd90xv{flex:1 1 auto;width:100%;min-width:0;}`],`
    flex: 1 1 auto;
    width: 100%;
    min-width: 0;
  `),scopeTitle:g(`acss-rimv92`,[`.acss-rimv92{flex:1;min-width:0;}`],`
    flex: 1;
    min-width: 0;
  `),scopeValue:g(`acss-15brm0n`,[`.acss-15brm0n >span{display:flex;width:100%;min-width:0;}`],`
    > span {
      display: flex;
      width: 100%;
      min-width: 0;
    }
  `)},P={value:N.scopeValue},F=({fallbackLabel:e,fullName:t})=>t?.trim()||e,I=({avatar:e,isPersonal:t,label:n,personalTagLabel:r})=>(0,j.jsxs)(c,{horizontal:!0,align:`center`,className:N.scopeOption,gap:8,children:[(0,j.jsx)(p,{avatar:e||n,shape:`square`,size:20}),(0,j.jsx)(c,{horizontal:!0,align:`center`,className:N.scopeTitle,gap:6,children:(0,j.jsx)(d,{ellipsis:!0,className:N.scopeName,children:n})}),t&&r&&(0,j.jsx)(S,{className:N.personalTag,variant:`filled`,children:r})]}),L=({personalAvatar:e,personalLabel:t,personalTagLabel:n,workspaces:r=[]})=>[{label:I({avatar:e,isPersonal:!0,label:t,personalTagLabel:n}),title:t,value:M},...r.map(e=>({label:I({avatar:e.avatar,label:e.name}),title:e.name,value:e.id}))]}));export{F as a,P as i,L as n,k as o,R as r,A as s,M as t};