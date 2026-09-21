import{n as e}from"./rolldown-runtime-CMxvf4Kt.js";import{Gt as t,Wt as n}from"../vendor/vendor-ui-core-BmtybT1r.js";import{cF as r,gF as i,lF as a,pF as o,uF as s}from"./index-w64_zsxD.js";var c,l,u=e((()=>{n(),s(),a(),c=o(({css:e,cssVar:n})=>({borderless:e`
      &[class*='ant-input'] {
        ${t.variantBorderless}
        &:hover {
          ${t.variantBorderlessWithoutHover}
        }
      }
    `,borderlessOPT:e`
      &[class*='ant-otp'] {
        [class*='ant-otp-input'] {
          ${t.variantBorderless};
        }
      }
    `,filled:i(t.variantFilled,e`
        &:focus-within {
          ${t.variantFilledWithoutHover}
        }
      `),filledOPT:e`
      &[class*='ant-otp'] {
        [class*='ant-otp-input'] {
          ${t.variantFilled};
        }
      }
    `,outlined:t.variantOutlined,outlinedOPT:e`
      &[class*='ant-otp'] {
        [class*='ant-otp-input'] {
          ${t.variantOutlined};
        }
      }
    `,root:e``,rootOPT:e`
      &[class*='ant-otp'] {
        [class*='ant-otp-input'] {
          &:focus-within {
            border-color: ${n.colorBorder};
          }
        }
      }
    `,shadow:t.shadow,shadowOPT:e`
      &[class*='ant-otp'] {
        [class*='ant-otp-input'] {
          ${t.shadow};
        }
      }
    `})),l=r(c.root,{defaultVariants:{shadow:!1},variants:{variant:{filled:c.filled,outlined:c.outlined,borderless:c.borderless,underlined:null},shadow:{false:null,true:c.shadow}}}),r(c.rootOPT,{defaultVariants:{shadow:!1},variants:{variant:{filled:c.filledOPT,outlined:c.outlinedOPT,borderless:c.borderlessOPT,underlined:null},shadow:{false:null,true:c.shadowOPT}}})}));export{l as n,u as t};