import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{T as n}from"../vendor/vendor-react-B9HSWrpN.js";import{B as r,z as i}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Ot as a,r as o}from"../vendor/vendor-antd-BWSxhuJE.js";import{Op as s,t as c}from"../vendor/vendor-icons-vienkZi5.js";import{cF as l,gF as u,lF as d,pF as f,uF as p}from"./index-w64_zsxD.js";var m,h,g,_=e((()=>{p(),d(),m=`ant`,h=f(({css:e,cssVar:t})=>({compact:e`
      &.${m}-tabs {
        .${m}-tabs-tab {
          margin: 4px;

          + [class*='ant-tabs-tab'] {
            margin: 4px;
          }
        }
      }
    `,dropdown:e`
      .${m}-tabs-dropdown-menu {
        padding: 4px;
        border: 1px solid ${t.colorBorderSecondary};

        .${m}-tabs-dropdown-menu-item {
          border-radius: ${t.borderRadius};
        }
      }
    `,hideHolder:e`
      &.${m}-tabs {
        .${m}-tabs-content-holder {
          display: none;
        }

        .${m}-tabs-nav {
          margin: 0;

          &::before {
            display: none;
          }
        }
      }
    `,margin:e`
      &.${m}-tabs {
        .${m}-tabs-tab {
          margin: 8px;

          + .${m}-tabs-tab {
            margin: 8px;
          }
        }
      }
    `,point:e`
      &.${m}-tabs {
        &.${m}-tabs-top {
          .${m}-tabs-ink-bar {
            width: 8px !important;
            height: 4px;
            border-start-start-radius: 4px;
            border-start-end-radius: 4px;
          }
        }

        &.${m}-tabs-bottom {
          .${m}-tabs-ink-bar {
            width: 8px !important;
            height: 4px;
            border-end-start-radius: 4px;
            border-end-end-radius: 4px;
          }
        }

        &.${m}-tabs-left {
          .${m}-tabs-ink-bar {
            width: 4px;
            height: 8px !important;
            border-start-start-radius: 4px;
            border-end-start-radius: 4px;
          }
        }

        &.${m}-tabs-right {
          .${m}-tabs-ink-bar {
            width: 4px;
            height: 8px !important;
            border-start-end-radius: 4px;
            border-end-end-radius: 4px;
          }
        }
      }
    `,root:e`
      &.${m}-tabs {
        .${m}-tabs-tab {
          padding-block: 8px;
          padding-inline: 12px;
          color: ${t.colorTextSecondary};
          transition: background-color 100ms ease-out;

          &:hover {
            border-radius: ${t.borderRadius};
            color: ${t.colorText};
            background: ${t.colorFillTertiary};
          }
        }
      }
    `,rounded:e`
      &.${m}-tabs {
        &.${m}-tabs-top {
          .${m}-tabs-ink-bar {
            height: 3px;
            border-start-start-radius: 3px;
            border-start-end-radius: 3px;
          }
        }

        &.${m}-tabs-bottom {
          .${m}-tabs-ink-bar {
            height: 3px;
            border-end-start-radius: 3px;
            border-end-end-radius: 3px;
          }
        }

        &.${m}-tabs-left {
          .${m}-tabs-ink-bar {
            width: 3px;
            border-start-start-radius: 3px;
            border-end-start-radius: 3px;
          }
        }

        &.${m}-tabs-right {
          .${m}-tabs-ink-bar {
            width: 3px;
            border-start-end-radius: 3px;
            border-end-end-radius: 3px;
          }
        }
      }
    `})),g=l(h.root,{defaultVariants:{compact:!1,underlined:!1,variant:`rounded`},variants:{variant:{square:null,rounded:h.rounded,point:h.point},compact:{false:h.margin,true:h.compact},underlined:{false:h.hideHolder,true:null}}})})),v,y,b=e((()=>{r(),_(),v=t(n(),1),o(),p(),c(),y=({className:e,compact:t,variant:n=`rounded`,items:r,classNames:o,...c})=>{let l=r?.some(e=>!!e.children),d={root:h.dropdown,...typeof o==`function`?void 0:o?.popup},f=typeof o==`function`?Object.assign(e=>o(e),{popup:d}):{...o,popup:d};return(0,v.jsx)(a,{className:u(g({compact:t,underlined:l,variant:n}),e),items:r,...c,classNames:f,more:{icon:(0,v.jsx)(i,{icon:s}),...c?.more}})},y.displayName=`Tabs`}));export{b as n,y as t};