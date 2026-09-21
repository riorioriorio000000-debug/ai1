import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{en as i,r as a}from"../vendor/vendor-antd-BWSxhuJE.js";import{gF as o,pF as s,uF as c,vC as l,yC as u,yF as d}from"./index-w64_zsxD.js";import{a as f,i as p}from"./MakedownRender-BkZLmvdN.js";import{n as m,r as h}from"./const-Cx_ztRKW.js";var g,_,v,y,b,x=e((()=>{a(),c(),g=t(n()),h(),l(),f(),_=t(r()),v=`ant`,y=s(({css:e,cssVar:t})=>({toc:e`
      a {
        line-height: 1.4 !important;
        white-space: normal !important;
      }

      .${v}-anchor {
        display: flex;
        flex-direction: column;
        gap: 8px;

        &::before {
          display: none;
        }

        .${v}-anchor-ink {
          display: none !important;
        }

        .${v}-anchor-link-title {
          overflow: hidden;
          display: box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;

          word-break: break-word;
        }

        .${v}-anchor-link-title,.${v}-anchor-link {
          margin: 0 !important;
          padding-block: 0 !important;
        }

        > .${v}-anchor-link {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-inline-start: 0 !important;
        }

        .${v}-anchor-link-title-active {
          color: ${t.colorText} !important;
        }

        .${v}-anchor-link-title:not(.${v}-anchor-link-title-active) {
          color: ${t.colorTextSecondary};

          &:hover {
            color: ${t.colorText};
          }
        }
      }

      ${d.lg} {
        display: none;
      }
    `})),b=(0,g.memo)(({items:e,className:t,...n})=>{let r=(0,g.useMemo)(()=>p(e),[e]);return(0,_.jsx)(i,{affix:!1,className:o(t,y.toc),items:r,getContainer:u?void 0:()=>document.querySelector(`#${m}`),...n})})}));export{x as n,b as t};