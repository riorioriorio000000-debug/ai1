import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{B as i,Gt as a,Kt as o,Wt as s,Xn as c,Zn as l,qt as u,z as d}from"../vendor/vendor-ui-core-BmtybT1r.js";import{A as f,G as p}from"../vendor/vendor-ui-runtime-NzUbUsUl.js";import{in as m,r as h}from"../vendor/vendor-antd-BWSxhuJE.js";import{Ml as g,Wh as _,c as v,oh as y,t as b,ut as x}from"../vendor/vendor-icons-vienkZi5.js";import{bF as S,cF as C,gF as w,hF as T,lF as E,pF as D,uF as O}from"./index-w64_zsxD.js";import{i as k,n as A,r as j,t as M}from"./AccordionItem-Be7afNNL.js";var N,P,F,I,L,R=e((()=>{s(),O(),E(),N=`ant`,P=D(({css:e,cssVar:t})=>({banner:e`
      border: none !important;
      border-radius: 0 !important;
    `,borderless:e`
      padding: 0 !important;
      border: none !important;
      background: transparent !important;
    `,borderlessExtraHeaderNoTitle:e`
      margin-block-start: 8px;
      padding-inline: 0;
    `,borderlessExtraHeaderWithTitle:e`
      margin-block-start: 16px;
      padding-inline: 0;
    `,colorfulText:e`
      .${N}-alert-message,.${N}-alert-description {
        color: inherit;
      }
    `,expandText:e`
      padding-inline-end: 12px;

      &:hover {
        cursor: pointer;
      }
    `,extra:e`
      position: relative;

      overflow: hidden;

      max-width: 100%;
      border: 1px solid;
      border-block-start: none;
      border-end-start-radius: ${t.borderRadiusLG};
      border-end-end-radius: ${t.borderRadiusLG};
    `,extraHeader:e`
      border-block-start: 1px dashed;
      border-radius: 0;
      background: transparent !important;
    `,filled:e``,glass:a.blur,hasExtra:e`
      border-block-end: none;
      border-end-start-radius: 0;
      border-end-end-radius: 0;
    `,outlined:e`
      background: transparent !important;
    `,rootBase:e`
      position: relative;

      display: flex;
      flex-direction: row;
      align-items: flex-start;

      max-width: 100%;

      /* Every control anchors itself to the title's FIRST 24px line box via
         align-self. Root-level align-items cannot be relied on: antd v6's own
         base style centers the row, and whether it or these static styles win
         depends on stylesheet injection order, which differs between
         environments. Centering the row is also wrong for message-only alerts
         whose content wraps - the icon drifts to the middle of the block. */
      .${N}-alert-icon {
        display: flex;
        align-items: center;
        align-self: flex-start;

        height: 24px;
        margin: 0;
      }
      .${N}-alert-close-icon {
        display: flex;
        align-items: center;
        align-self: flex-start;

        height: 24px;
        margin: 0;
      }
      .${N}-alert-actions {
        display: flex;
        align-items: center;
        align-self: flex-start;
        height: 24px;
      }
    `,rootNoTitleNoIconNoClosable:e`
      gap: 8px;
      padding-block: 8px;
      padding-inline: 12px;

      .${N}-alert-title {
        font-weight: 400;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
    `,rootNoTitleNoIconWithClosable:e`
      gap: 8px;
      padding-block: 8px;
      padding-inline: 12px 9px;

      .${N}-alert-title {
        font-weight: 400;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
    `,rootNoTitleWithIconNoClosable:e`
      gap: 8px;
      padding-block: 8px;
      padding-inline: 9px 12px;

      .${N}-alert-title {
        font-weight: 400;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
    `,rootNoTitleWithIconWithClosable:e`
      gap: 8px;
      padding-block: 8px;
      padding-inline: 9px;

      .${N}-alert-title {
        font-weight: 400;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
    `,rootWithTitleNoIconNoClosable:e`
      gap: 12px;
      padding-block: 16px;
      padding-inline: 16px;

      .${N}-alert-title {
        font-weight: 500;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
      .${N}-alert-description {
        line-height: 1.5;
        word-break: normal;
        opacity: 0.75;
      }
    `,rootWithTitleNoIconWithClosable:e`
      gap: 12px;
      padding-block: 16px;
      padding-inline: 16px 12px;

      .${N}-alert-title {
        font-weight: 500;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
      .${N}-alert-description {
        line-height: 1.5;
        word-break: normal;
        opacity: 0.75;
      }
    `,rootWithTitleWithIconNoClosable:e`
      gap: 12px;
      padding-block: 16px;
      padding-inline: 12px 16px;

      .${N}-alert-title {
        font-weight: 500;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
      .${N}-alert-description {
        line-height: 1.5;
        word-break: normal;
        opacity: 0.75;
      }
    `,rootWithTitleWithIconWithClosable:e`
      gap: 12px;
      padding-block: 16px;
      padding-inline: 12px;

      .${N}-alert-title {
        font-weight: 500;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
      .${N}-alert-description {
        line-height: 1.5;
        word-break: normal;
        opacity: 0.75;
      }
    `})),F=C(P.extra,{defaultVariants:{variant:`filled`},variants:{variant:{filled:P.filled,outlined:P.outlined,borderless:P.borderless},banner:{false:null,true:P.banner}}}),I=C(P.rootBase,{compoundVariants:[{class:P.rootNoTitleNoIconNoClosable,closable:!1,hasTitle:!1,showIcon:!1},{class:P.rootNoTitleNoIconWithClosable,closable:!0,hasTitle:!1,showIcon:!1},{class:P.rootNoTitleWithIconNoClosable,closable:!1,hasTitle:!1,showIcon:!0},{class:P.rootNoTitleWithIconWithClosable,closable:!0,hasTitle:!1,showIcon:!0},{class:P.rootWithTitleNoIconNoClosable,closable:!1,hasTitle:!0,showIcon:!1},{class:P.rootWithTitleNoIconWithClosable,closable:!0,hasTitle:!0,showIcon:!1},{class:P.rootWithTitleWithIconNoClosable,closable:!1,hasTitle:!0,showIcon:!0},{class:P.rootWithTitleWithIconWithClosable,closable:!0,hasTitle:!0,showIcon:!0}],defaultVariants:{closable:!1,colorfulText:!0,glass:!1,hasTitle:!1,showIcon:!1,variant:`filled`},variants:{closable:{false:null,true:null},colorfulText:{false:null,true:P.colorfulText},glass:{false:null,true:P.glass},hasTitle:{false:null,true:null},showIcon:{false:null,true:null},variant:{borderless:P.borderless,filled:P.filled,outlined:P.outlined},hasExtra:{false:null,true:P.hasExtra}}}),L=C(P.extraHeader,{compoundVariants:[{class:P.borderlessExtraHeaderNoTitle,hasTitle:!1,variant:`borderless`},{class:P.borderlessExtraHeaderWithTitle,hasTitle:!0,variant:`borderless`}],defaultVariants:{hasTitle:!1,variant:`filled`},variants:{hasTitle:{false:null,true:null},variant:{borderless:null,filled:null,outlined:null}}})})),z,B,V,H,U,W=e((()=>{k(),u(),l(),A(),i(),R(),z=t(n(),1),B=t(r(),1),h(),O(),f(),b(),V={error:y,info:g,secondary:x,success:_,warning:x},H=(e,t=`info`,...n)=>t===`secondary`?e[p([`color`,...n].join(`-`))]:e[p([`color`,t,...n].join(`-`))],U=(0,z.memo)(({closable:e=!1,description:t,showIcon:n=!0,type:r=`info`,glass:i,icon:a,colorfulText:s=!0,iconProps:l,style:u,extra:f,classNames:p,styles:h,text:g,extraDefaultExpand:_=!1,extraIsolate:y,banner:b,variant:x=`filled`,ref:C,...E})=>{let D=S(),O=!!t,k=(0,B.jsx)(m,{banner:b,description:t,ref:C,showIcon:n,type:r===`secondary`?`info`:r,className:w(I({closable:!!e,colorfulText:s,glass:i,hasExtra:!!(!y&&f),hasTitle:O,showIcon:!!n,variant:x}),p?.alert),closable:typeof e==`boolean`?e:{closeIcon:(0,B.jsx)(d,{color:H(D,r),icon:v,size:`small`}),...e},icon:(0,B.jsx)(c,{color:r===`secondary`?T.colorTextSecondary:void 0,icon:a||V[r],size:t?24:18,...l}),style:{background:H(D,r,`fillTertiary`),borderColor:H(D,r,`fillSecondary`),color:s?H(D,r):void 0,...u,...h?.alert},...E});return f?y?(0,B.jsxs)(o,{className:p?.container,gap:8,children:[k,f]}):(0,B.jsxs)(o,{className:p?.container,style:h?.container,children:[k,(0,B.jsx)(o,{className:F({banner:b,variant:x}),style:{background:H(D,r,`fillTertiary`),borderColor:H(D,r,`fillSecondary`),color:H(D,r),fontSize:t?14:12},children:(0,B.jsx)(j,{defaultExpandedKeys:_?[`extra`]:[],children:(0,B.jsx)(M,{itemKey:`extra`,title:g?.detail||`Show Details`,classNames:{content:p?.extraContent,header:L({hasTitle:O,variant:x})},styles:{content:{fontSize:12,...h?.extraContent},header:{borderColor:H(D,r,`fillSecondary`)},indicator:{color:H(D,r)},title:{color:H(D,r),fontSize:12}},children:f})})})]}):k}),U.displayName=`Alert`}));export{W as n,U as t};