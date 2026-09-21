import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{$t as i,Bt as a,Gt as o,It as s,Kt as c,Lt as l,Qt as u,Rt as d,Vt as f,Wt as p,Xn as m,Zn as h,qt as g,zt as _}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Rt as v,r as y}from"../vendor/vendor-antd-BWSxhuJE.js";import{t as b,wc as x}from"../vendor/vendor-icons-vienkZi5.js";import{FD as S,ID as C,cF as w,f as T,gF as E,hF as D,lF as O,p as k,pF as A,uF as j}from"./index-w64_zsxD.js";var M,N,P=e((()=>{p(),j(),O(),M=A(({css:e,cssVar:t})=>({borderless:o.variantBorderlessWithoutHover,filled:o.variantFilledWithoutHover,loading:e`
      position: absolute;
      color: #fff;
      background: ${t.colorBgMask};
    `,outlined:o.variantOutlinedWithoutHover,root:e`
      flex: none;
      background: transparent;

      &[class*='ant-avatar'] {
        user-select: none;

        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        border: none;

        [class*='ant-avatar-string'] {
          transform: none !important;

          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;

          width: 100%;
          height: 100%;
          padding: 0;

          font-size: inherit;
          font-weight: bolder;
          line-height: 1;
          color: inherit;
        }
      }
    `,shadow:o.shadow})),N=w(M.root,{defaultVariants:{shadow:!1,variant:`borderless`},variants:{variant:{filled:M.filled,outlined:M.outlined,borderless:M.borderless},shadow:{false:null,true:M.shadow}}})})),F,I,L,R,z,B=e((()=>{F=t(n(),1),I=e=>e?!!(typeof e==`string`&&[`/`,`http`,`data:`].some(t=>e.startsWith(t))||(0,F.isValidElement)(e)):!1,L=e=>!!(e&&e!==`transparent`&&e!==`rgba(0,0,0,0)`&&e!==null),R=(e,t)=>{if(!e)return``;let n=e.toUpperCase();return t?n.slice(0,2):n},z=(e,t,n)=>n?t?e*.85:e:e*.85})),V,H,U,W=e((()=>{f(),u(),h(),_(),l(),P(),B(),V=t(n(),1),H=t(r(),1),y(),j(),b(),T(),U=(0,V.memo)(({bordered:e,className:t,avatar:n,title:r,animation:o,borderedColor:c,size:l=48,shape:u=`square`,background:f,style:p,unoptimized:h,alt:g,variant:_=`borderless`,shadow:y,loading:b,sliceText:S=!0,emojiScaleWithBackground:C=!0,ref:w,...T})=>{let O=typeof n==`string`,A=(0,V.useMemo)(()=>I(n),[n]),[j,P]=(0,V.useState)(!1),F=(0,V.useMemo)(()=>n&&!A&&O&&k(n),[n,O,A]),B=String(A?r:n),U=g||r||`avatar`,W=(0,V.useMemo)(()=>typeof n==`string`?(0,H.jsx)(d,{alt:U,height:l,loading:`lazy`,src:n,unoptimized:h,width:l,onError:()=>P(!0)}):n,[n,U,l,h]),G=L(f),K=(0,V.useMemo)(()=>F?(0,H.jsx)(s,{emoji:F,size:z(l,G,C),type:o?`anim`:`3d`,unoptimized:h}):R(B||r,S),[o,F,G,l,S,B,r,h,C]),q=(0,V.useMemo)(()=>({backgroundColor:A&&!j||F?f:f||D.colorBorder,borderRadius:u===`square`&&l&&l<24?`33%`:void 0,boxShadow:e?`${D.colorBgLayout} 0 0 0 2px, ${c||D.colorTextTertiary} 0 0 0 4px`:void 0,color:i(f||D.colorBorder),cursor:T?.onClick?`pointer`:void 0,fontSize:l*(F?.7:.5),...p}),[A,j,f,u,F,l,e,c,T?.onClick,p]),J=!A||j;return(0,H.jsxs)(v,{alt:U,className:E(N({shadow:y,variant:_}),t),draggable:!1,ref:w,shape:u,size:l,src:A&&!j?W:void 0,style:q,...T,children:[b&&(0,H.jsx)(a,{className:M.loading,height:`100%`,width:`100%`,children:(0,H.jsx)(m,{spin:!0,icon:x})}),J&&K]})}),U.displayName=`Avatar`})),G,K=e((()=>{S(),G={avatar:C(`acss-1g3rycd`,[`.acss-1g3rycd{border:2px solid var(--ant-color-bg-container)!important;}`],`
      border: 2px solid var(--ant-color-bg-container) !important;
    `),count:C(`acss-167j6pf`,[`.acss-167j6pf[class*='ant-avatar']{background:var(--ant-color-text);}`,`.acss-167j6pf[class*='ant-avatar'] >[class*='ant-avatar-string']{transform:scale(0.8)!important;color:var(--ant-color-bg-layout);}`],`
      &[class*='ant-avatar'] {
        background: var(--ant-color-text);

        > [class*='ant-avatar-string'] {
          transform: scale(0.8) !important;
          color: var(--ant-color-bg-layout);
        }
      }
    `)}})),q,J,Y,X=e((()=>{g(),W(),K(),q=t(n(),1),J=t(r(),1),j(),Y=(0,q.memo)(({items:e,max:t,gap:n,variant:r=`borderless`,bordered:i,shadow:a,size:o=48,background:s,animation:l,draggable:u,classNames:d,shape:f,styles:p,onClick:m,ref:h,zIndexReverse:g,..._})=>{let v=t?e.slice(0,t):e,y=e.slice(t,e.length),b=n??Math.floor(-o/4),x={animation:l,background:s,bordered:i,draggable:u,shadow:a,shape:f,size:o,variant:r};return(0,J.jsxs)(c,{horizontal:!0,gap:n,ref:h,style:{position:`relative`},..._,children:[v.map((t,n)=>{let{key:r,style:i,className:a,...o}=t;return(0,J.jsx)(U,{className:E(d?.avatar,a,G.avatar),style:{marginLeft:n===0?0:b,zIndex:g?e.length-n:n,...p?.avatar,...i},onClick:()=>m?.({item:t,key:r}),...x,...o},r)}),t&&y.length>0&&(0,J.jsx)(U,{...x,avatar:`+${y.length}`,background:D.colorText,className:E(G.avatar,G.count,d?.count),sliceText:!1,style:{marginLeft:b,zIndex:g?0:v.length,...p?.count}})]})}),Y.displayName=`AvatarGroup`})),Z,Q=e((()=>{W(),X(),Z=U,Z.Group=Y}));export{Q as n,Z as t};