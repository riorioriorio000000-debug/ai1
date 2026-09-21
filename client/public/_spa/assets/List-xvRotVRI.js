import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{Q as n}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as r,T as i}from"../vendor/vendor-react-B9HSWrpN.js";import{Gt as a,Kt as o,Wt as s,Xn as c,Zn as l,d as u,et as d,f,nt as p,qt as m}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Ss as h,t as g,wc as _}from"../vendor/vendor-icons-vienkZi5.js";import{gF as v,pF as y,uF as b}from"./index-w64_zsxD.js";var x,S=e((()=>{s(),b(),x=y(({css:e,cssVar:t})=>({actions:e`
      position: absolute;
      inset-block-start: 50%;
      inset-inline-end: 16px;
      transform: translateY(-50%);
    `,active:a.active,content:e`
      position: relative;
      overflow: hidden;
      flex: 1;
      align-self: center;
    `,date:e`
      font-size: 12px;
      color: ${t.colorTextPlaceholder};
    `,desc:e`
      width: 100%;
      margin: 0;

      font-size: 12px;
      line-height: 1.2;
      color: ${t.colorTextDescription};
    `,pin:e`
      position: absolute;
      inset-block-start: 6px;
      inset-inline-end: 6px;
    `,root:v(a.variantBorderless,e`
        cursor: pointer;
        position: relative;
        border-radius: ${t.borderRadius};
        color: ${t.colorTextTertiary};
      `),title:e`
      width: 100%;
      margin: 0;

      font-size: 14px;
      font-weight: 500;
      line-height: 1.2;
      color: ${t.colorText};
    `,triangle:e`
      width: 10px;
      height: 10px;
      border-radius: 2px;

      opacity: 0.5;
      background: ${t.colorPrimaryBorder};
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
    `}))})),C,w,T=e((()=>{C=t(n(),1),w=e=>{let t=(0,C.default)(e);return t.isSame((0,C.default)(),`day`)?t.format(`HH:mm`):t.format(`MM-DD`)}})),E,D,O,k=e((()=>{m(),l(),f(),d(),S(),T(),E=t(r(),1),D=t(i(),1),b(),g(),O=(0,E.memo)(({ref:e,active:t,avatar:n,loading:r,description:i,date:a,title:s,onHoverChange:l,actions:d,className:f,style:m,showAction:g,children:y,classNames:b,addon:S,pin:C,styles:T,...E})=>{let O=(0,D.jsx)(c,{spin:!0,icon:_}),k=C&&(0,D.jsx)(`div`,{className:v(x.pin,b?.pin),style:T?.pin,children:(0,D.jsx)(`div`,{className:x.triangle})}),A=d&&(0,D.jsx)(o,{horizontal:!0,className:v(x.actions,b?.actions),gap:4,style:{display:g?void 0:`none`,...T?.actions},onClick:p,children:d}),j=a&&(0,D.jsx)(`div`,{className:v(x.date,b?.date),style:{opacity:g?0:void 0,...T?.date},children:w(a)});return(0,D.jsxs)(o,{horizontal:!0,align:`flex-start`,className:v(x.root,t&&x.active,f),distribution:`space-between`,gap:8,padding:12,ref:e,style:m,onMouseEnter:()=>{l?.(!0)},onMouseLeave:()=>{l?.(!1)},...E,children:[k,(0,D.jsxs)(o,{horizontal:!0,align:`flex-start`,className:b?.container,flex:1,gap:8,style:{overflow:`hidden`,...T?.container},children:[n??(0,D.jsx)(c,{icon:h,style:{marginTop:4}}),(0,D.jsxs)(o,{className:v(x.content,b?.content),gap:4,style:T?.content,children:[(0,D.jsx)(u,{ellipsis:!0,as:`h3`,className:v(x.title,b?.title),style:T?.title,children:s}),i&&(0,D.jsx)(u,{ellipsis:!0,className:v(x.desc,b?.desc),style:T?.desc,children:i}),S]})]}),r?O:(0,D.jsxs)(D.Fragment,{children:[A,j]}),y]})}),O.displayName=`ListItem`})),A,j,M,N=e((()=>{m(),k(),A=t(r(),1),j=t(i(),1),b(),M=(0,A.memo)(({ref:e,activeKey:t,classNames:n,styles:r,onClick:i,items:a,...s})=>(0,j.jsx)(o,{gap:4,padding:4,...s,children:a.map(a=>{let{key:o,onClick:s,className:c,style:l,...u}=a,{item:d,...f}=n||{},{item:p,...m}=r||{};return(0,j.jsx)(O,{active:a.key===t,className:v(d,c),classNames:f,ref:e,style:{...p,...l},styles:m,onClick:e=>{i?.({item:a,key:o}),s?.(e)},...u},o)})})),M.displayName=`List`})),P,F=e((()=>{k(),N(),P=M,P.Item=O}));export{F as n,P as t};