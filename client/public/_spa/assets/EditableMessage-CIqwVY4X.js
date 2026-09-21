import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{Dt as i,Et as a,Gt as o,Kt as s,L as c,R as l,Wt as u,gt as d,ht as f,lt as p,qt as m,ut as h}from"../vendor/vendor-ui-core-BmtybT1r.js";import{l as g,u as _}from"./Highlighter-BL3jikMb.js";import{SF as v,Xw as y,Zw as b,cF as x,gF as S,hF as C,lF as w,pF as T,uF as E,wF as D,xF as O}from"./index-w64_zsxD.js";import{n as k,t as A}from"./Button-BJu-2Vr-.js";import{n as j,t as M}from"./Markdown-DWQvr47S.js";import{n as ee,t as te}from"./messageModal-CAxBKmP3.js";import{n as N,t as P}from"./TextArea-D_Rfq5JU.js";import{a as F,t as I}from"./dist-D0KNI92g.js";var L,R,ne=e((()=>{u(),E(),w(),L=T(({css:e,cssVar:t})=>({borderless:S(o.variantBorderlessWithoutHover,e`
        border-radius: 0;

        pre,
        textarea {
          padding: 0;
        }
      `),filled:o.variantFilledWithoutHover,highlight:e`
      pointer-events: none;

      /* Mirror the textarea's text flow instead of the highlighter's flex rows. */
      pre code {
        display: block;

        /* Keep the final empty line measurable after a trailing newline. */
        &::after {
          content: '\\200b';
        }

        .line {
          display: inline;
          margin: 0;
          padding: 0;
        }

        /* Token emphasis must not change glyph metrics relative to the textarea. */
        span {
          font-weight: inherit !important;
          font-style: inherit !important;
        }
      }
    `,outlined:o.variantOutlinedWithoutHover,root:e`
      position: relative;

      overflow: hidden auto;

      width: 100%;
      height: fit-content;
      border-radius: ${t.borderRadius};

      font-size: 12px;

      pre,
      textarea {
        margin: 0;
        padding: 16px;
      }

      textarea,
      pre,
      code {
        overflow: hidden;

        font-family: ${t.fontFamilyCode};
        font-size: inherit;
        line-height: inherit;
        word-break: inherit;
        word-wrap: break-word;
        white-space: pre-wrap;
      }
    `,textarea:e`
      resize: none;

      position: absolute;
      inset-block-start: 0;
      inset-inline-start: 0;

      overflow: hidden;

      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 0;
      border: none;

      color: transparent;
      text-align: start;

      background: transparent;
      outline: none;
      caret-color: ${t.colorText};

      &::placeholder {
        color: ${t.colorTextQuaternary};
      }

      &:focus {
        border: none;
        outline: none;
        box-shadow: none;
      }
    `})),R=x(L.root,{defaultVariants:{variant:`borderless`},variants:{variant:{filled:L.filled,outlined:L.outlined,borderless:L.borderless}}})})),z,B,V,H=e((()=>{m(),ne(),_(),z=t(n(),1),B=t(r(),1),E(),O(),V=(0,z.memo)(({autoFocus:e,classNames:t,styles:n,defaultValue:r=``,onChange:i,placeholder:a=``,style:o,className:c,onValueChange:l,value:u,language:d=`markdown`,variant:f=`borderless`,width:p,height:m,flex:h,ref:_,...y})=>{let[b,x]=v(r,{defaultValue:r,onChange:l,value:u});return(0,B.jsxs)(s,{className:S(R({variant:f}),c),flex:h,height:m,style:o,width:p,children:[u?(0,B.jsx)(g,{className:S(L.highlight,t?.highlight),language:d,style:n?.highlight,variant:f,children:u}):(0,B.jsx)(`pre`,{className:S(L.highlight,t?.highlight),style:{color:C.colorTextDescription},children:a||` `}),(0,B.jsx)(`textarea`,{autoCapitalize:`off`,autoComplete:`off`,autoCorrect:`off`,autoFocus:e,className:S(L.textarea,t?.textarea),"data-gramm":!1,ref:_,style:n?.textarea,value:b,onChange:e=>{i?.(e),x(e.target.value)},...y})]})}),V.displayName=`CodeEditor`})),U,W=e((()=>{E(),U=T(({css:e,cssVar:t})=>e`
    position: relative;

    height: 100%;

    font-family: ${t.fontFamilyCode};
    font-size: 13px;
    line-height: 1.8;
  `)})),G,K,q,re=e((()=>{m(),i(),d(),h(),k(),H(),N(),W(),G=t(n(),1),K=t(r(),1),E(),F(),q=(0,G.memo)(({text:e,variant:t=`borderless`,onCancel:n,defaultValue:r,onConfirm:i,renderButtons:o,placeholder:c,styles:l,style:u,editButtonSize:d=`middle`,classNames:m,shortcut:h,language:g=`markdown`,..._})=>{let{mobile:v}=D(),[y,b]=(0,G.useState)(r||``),x=f([a.Mod,a.Enter]),C=e?.confirm||`Confirm`,w=f([a.Esc]),T=e?.cancel||`Cancel`,E=()=>i?.(y),O=()=>n?.();I(x,E,{enableOnFormTags:!0,enabled:h,preventDefault:!0});let k=(0,K.jsx)(A,{size:d,type:`primary`,onClick:E,children:C}),j=(0,K.jsx)(A,{size:d,variant:`filled`,onClick:O,children:e?.cancel||`Cancel`});return(0,K.jsxs)(s,{gap:16,style:{flex:1,width:`100%`,...u},..._,children:[v?(0,K.jsx)(P,{autoSize:!0,className:S(U,m?.editor),placeholder:c,style:l?.editor,value:y,variant:t,onBlur:e=>b(e.target.value),onChange:e=>b(e.target.value)}):(0,K.jsx)(V,{className:S(U,m?.editor),classNames:m,language:g,placeholder:c,style:l?.editor,styles:l,value:y,variant:t,onBlur:e=>b(e.target.value),onValueChange:e=>b(e)}),(0,K.jsx)(s,{direction:`horizontal-reverse`,gap:8,children:o?o(y).map((e,t)=>(0,K.jsx)(A,{size:d,...e},t)):(0,K.jsxs)(K.Fragment,{children:[h?(0,K.jsx)(p,{hotkey:x,title:C,children:k}):k,h?(0,K.jsx)(p,{hotkey:w,title:T,children:j}):j]})})]})})})),J,Y,X,ie=e((()=>{m(),k(),H(),y(),N(),l(),j(),W(),te(),J=t(n(),1),Y=t(r(),1),E(),O(),X=(0,J.memo)(({panelRef:e,editing:t,open:n,height:r=`75vh`,onOpenChange:i,onEditingChange:a,placeholder:o,value:l,language:u=`markdown`,onChange:d,text:f,footer:p,extra:m})=>{let{mobile:h}=D(),{t:g}=b(ee),[_,y]=v(!1,{onChange:a,value:t}),[x,S]=v(!1,{onChange:i,value:n}),[C,w]=(0,J.useState)(l),T=f?.confirm??g(`messageModal.confirm`),E=f?.cancel??g(`messageModal.cancel`),O=f?.edit??g(`messageModal.edit`);return(0,Y.jsx)(c,{allowFullscreen:!0,destroyOnHidden:!0,cancelText:E,footer:_?(0,Y.jsxs)(s,{direction:`horizontal-reverse`,gap:8,children:[(0,Y.jsx)(A,{type:`primary`,onClick:()=>{y(!1),d?.(C),w(l)},children:T}),(0,Y.jsx)(A,{onClick:()=>{y(!1),w(l)},children:E})]}):p,height:r,okText:O,open:x,panelRef:e,title:f?.title,onOk:()=>y(!0),onCancel:()=>{S(!1),y(!1),w(l)},children:_?h?(0,Y.jsx)(P,{autoSize:!0,className:U,defaultValue:C,placeholder:o,value:C,variant:`borderless`,onBlur:e=>w(e.target.value),onChange:e=>w(e.target.value)}):(0,Y.jsx)(V,{className:U,defaultValue:C,language:u,placeholder:o,value:C,variant:`borderless`,onBlur:e=>w(e.target.value),onValueChange:e=>w(e)}):(0,Y.jsxs)(Y.Fragment,{children:[m,(0,Y.jsx)(M,{variant:`chat`,children:String(l||o)})]})})}),X.displayName=`MessageModal`})),Z,Q,$,ae=e((()=>{j(),re(),ie(),Z=t(n(),1),Q=t(r(),1),E(),O(),$=(0,Z.memo)(({value:e,onChange:t,classNames:n={},onEditingChange:r,editing:i,openModal:a,onOpenChange:o,placeholder:s,showEditWhenEmpty:c=!1,styles:l,className:u,style:d,height:f,variant:p,editButtonSize:m,text:h,fullFeaturedCodeBlock:g,model:_,fontSize:y,language:b=`markdown`,markdownProps:x})=>{let[C,w]=v(!1,{onChange:r,value:i}),[T,E]=v(!1,{onChange:o,value:a}),D=f===`auto`,O=(0,Q.jsx)(q,{shortcut:!0,className:S(u,n?.input),classNames:n,defaultValue:e,editButtonSize:m,height:f,language:b,placeholder:s,styles:l,text:h,variant:p,style:{...d,...l?.input},onCancel:()=>w(!1),onConfirm:e=>{t?.(e),w(!1)}});return!e&&c?O:(0,Q.jsxs)(Q.Fragment,{children:[!T&&C?O:(0,Q.jsx)(M,{className:S(u,n?.markdown),fontSize:y,fullFeaturedCodeBlock:g,variant:`chat`,style:{height:D?`unset`:f,...d,...l?.markdown},...x,children:e||s||``}),T&&(0,Q.jsx)(X,{editing:C,extra:_?.extra,footer:_?.footer,height:f,language:b,open:T,placeholder:s,text:h,value:e,onChange:t,onEditingChange:w,onOpenChange:e=>{E(e),w(!1)}})]})}),$.displayName=`EditableMessage`}));export{ae as n,$ as t};