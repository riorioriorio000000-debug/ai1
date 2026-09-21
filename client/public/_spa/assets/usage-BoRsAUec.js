import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{Ht as i,Kt as a,Ut as o,at as s,it as c,qt as l}from"../vendor/vendor-ui-core-BmtybT1r.js";import{T as u,W as d,r as f}from"../vendor/vendor-antd-BWSxhuJE.js";import{Zh as p,ng as m,pF as h,uF as g,yF as _}from"./index-w64_zsxD.js";var v,y,b,x,S,C=e((()=>{o(),l(),s(),f(),g(),v=t(n()),y=t(r()),b=`ant`,x=h(({css:e,cssVar:t})=>({header:e`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: space-between;

    ${_.sm} {
      flex-wrap: wrap;
      margin-block-end: 8px;
    }
  `,statistic:e`
    .${b}-statistic-content-value-int, .${b}-statistic-content-value-decimal {
      font-size: 24px;
      font-weight: bold;
      line-height: 1.2;
    }
  `,title:e`
    overflow: hidden;
    flex: 1;

    font-size: 16px;
    font-weight: 500;
    line-height: 32px;
    color: ${t.colorText};

    ${_.sm} {
      font-size: 14px;
      line-height: 16px;
    }
  `})),S=(0,v.memo)(({title:e,className:t,variant:n=`borderless`,loading:r,extra:o,style:s,padding:l,paddingBlock:f,paddingInline:p,statistic:m})=>(0,y.jsxs)(i,{className:t,flex:1,padding:l,paddingBlock:f,paddingInline:p,style:s,variant:n,children:[(0,y.jsxs)(`div`,{className:x.header,children:[(0,y.jsx)(`div`,{className:x.title,children:typeof e==`string`?(0,y.jsx)(c,{as:`h2`,ellipsis:{rows:1,tooltip:!0},style:{fontSize:`inherit`,fontWeight:`inherit`,lineHeight:`inherit`,margin:0,overflow:`hidden`},children:e}):e}),r?(0,y.jsx)(d,{percent:`auto`,size:`small`}):o]}),m&&(0,y.jsxs)(a,{gap:16,style:m.style,children:[(0,y.jsx)(u,{className:x.statistic,precision:m.precision,prefix:m.prefix,styles:m.valueStyle?{content:m.valueStyle}:void 0,suffix:m.suffix,value:m.value}),m.description]})]}))})),w,T,E=e((()=>{p(),w=class{findByMonth=async e=>m.usage.findByMonth.query({mo:e});findAndGroupByDay=async e=>m.usage.findAndGroupByDay.query({mo:e});getAgentUsageStats=async e=>m.usage.getAgentUsageStats.query(e)},T=new w}));export{C as i,T as n,S as r,E as t};