import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{$n as i,Gt as a,Qn as o,Wt as s}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Pt as c,nn as l,r as u}from"../vendor/vendor-antd-BWSxhuJE.js";import{bF as d,cF as f,gF as p,lF as m,pF as h,uF as g}from"./index-w64_zsxD.js";import{n as _,t as v}from"./utils-CWB9Cf5F.js";var y,b,x=e((()=>{s(),g(),m(),y=h(({css:e,cssVar:t})=>({borderless:p(a.variantBorderlessWithoutHover,e`
      padding: 0;
      border-radius: unset;
    `),compact:e`
    &[class*='ant-menu'] {
      [class*='ant-menu-item-divider'] {
        margin: 0;
      }
    }
  `,filled:a.variantFilledWithoutHover,outlined:a.variantOutlinedWithoutHover,root:e`
    &[class*='ant-menu'] {
      flex: 1;

      padding: 4px;
      border: none !important;
      border-radius: ${t.borderRadiusLG};

      background: transparent;

      [class*='ant-menu-sub'][class*='ant-menu-inline'] {
        background: transparent;

        > [class*='ant-menu-item'] {
          padding-inline-start: 36px !important;
        }
      }

      [class*='ant-menu-item-divider'] {
        margin-block: 1em;
      }
    }
  `,shadow:a.shadow})),b=f(y.root,{defaultVariants:{compact:!1,shadow:!1,variant:`borderless`},variants:{variant:{filled:y.filled,outlined:y.outlined,borderless:y.borderless},shadow:{false:null,true:y.shadow},compact:{false:null,true:y.compact}}})})),S,C,w,T=e((()=>{i(),v(),x(),S=t(n(),1),C=t(r(),1),u(),g(),w=(0,S.memo)(({compact:e,shadow:t,variant:n=`borderless`,className:r,selectable:i,iconProps:a,items:s,ref:u,...f})=>{let m=d(),h=(0,S.useMemo)(()=>s.map(e=>_(e)),[s]);return(0,C.jsx)(l,{theme:{components:{Menu:{controlHeightLG:36,iconMarginInlineEnd:8,iconSize:16,itemActiveBg:m.isDarkMode?m.colorFillQuaternary:m.colorFillSecondary,itemBorderRadius:m.borderRadius,itemColor:m.colorTextSecondary,itemHoverBg:m.colorFillTertiary,itemMarginBlock:4,itemMarginInline:4,itemSelectedBg:m.colorFillSecondary}}},children:(0,C.jsx)(o,{config:{size:`small`,...a},children:(0,C.jsx)(c,{className:p(b({compact:e,shadow:t,variant:n}),r),inlineIndent:12,items:h,mode:`vertical`,ref:u,selectable:i,...f})})})}),w.displayName=`Menu`}));export{T as n,w as t};