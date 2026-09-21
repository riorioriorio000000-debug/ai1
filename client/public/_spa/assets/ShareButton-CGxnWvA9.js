import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{B as o,Bt as s,Kt as c,Mt as l,Nt as u,Vt as d,Xn as f,Zn as p,at as m,i as h,it as ee,qt as g,r as _,z as te}from"../vendor/vendor-ui-core-BmtybT1r.js";import{A as v,B as ne,Ft as y,G as b,it as x}from"../vendor/vendor-ui-runtime-NzUbUsUl.js";import{Jc as S,Pr as C,t as re}from"../vendor/vendor-icons-vienkZi5.js";import{Ay as ie,Dn as ae,En as oe,FD as w,ID as T,Iy as se,Jf as ce,Jy as E,My as D,Ry as O,Ty as k,Yf as A,fb as j,gF as M,hF as N,uF as P}from"./index-w64_zsxD.js";import{n as F,t as I}from"./CopyButton-BjxUZD85.js";import{n as L,t as R}from"./Tag-C95BKTI7.js";import{n as z,t as B}from"./Input-gdUxluEJ.js";import{n as V,t as H}from"./query-string-BqMU_9Da.js";var U,W,le=e((()=>{k(),v(),H(),U=(e,t=`,`,n)=>(n&&(e=e.map(e=>n+b(e))),e.filter(Boolean).join(t)),W=({url:e,title:t,desc:n,hashtags:r=[]})=>({linkedin:{link:(()=>{let t=x({url:e},y);return V.stringifyUrl({query:t,url:`https://www.linkedin.com/sharing/share-offsite/`})})(),title:`Linkedin`},mastodon:{icon:j,link:(()=>{let i=x({text:[[t,n].filter(Boolean).join(` - `),r&&U(r,` `,`#`)].filter(Boolean).join(` `),url:e},y);return V.stringifyUrl({query:i,url:`https://mastodon.social/share`})})(),title:`Mastodon`},reddit:{icon:E,link:(()=>{let i=x({title:[[t,n].filter(Boolean).join(` - `),r&&U(r,` `,`#`)].filter(Boolean).join(` `),url:e},y);return V.stringifyUrl({query:i,url:`https://www.reddit.com/submit`})})(),title:`Reddit`},telegram:{icon:se,link:(()=>{let i=x({text:[[t,n].filter(Boolean).join(` - `),r&&U(r,` `,`#`)].filter(Boolean).join(` `),url:e},y);return V.stringifyUrl({query:i,url:`https://t.me/share/url"`})})(),title:`Telegram`},weibo:{icon:O,link:(()=>{let i=x({sharesource:`weibo`,title:[[t,n].filter(Boolean).join(` - `),r&&U(r,` `,`#`)].filter(Boolean).join(` `),url:e},y);return V.stringifyUrl({query:i,url:`http://service.weibo.com/share/share.php`})})(),title:`Weibo`},whatsapp:{icon:D,link:(()=>{let i=x({text:[[t,n].filter(Boolean).join(` - `),e,r&&U(r,` `,`#`)].filter(Boolean).join(` `)},y);return V.stringifyUrl({query:i,url:`https://api.whatsapp.com/send`})})(),title:`WhatsApp`},x:{icon:ie,link:(()=>{let i=x({hashtags:r&&U(r),text:[t,n].filter(Boolean).join(` - `),url:e},y);return V.stringifyUrl({query:i,url:`https://x.com/intent/tweet`})})(),title:`X`}})})),G,K,q,J,Y=e((()=>{w(),g(),h(),P(),G=t(i()),K=t(a()),q={banner:T(`acss-1nupfqb`,[`.acss-1nupfqb{position:relative;overflow:hidden;height:64px;margin-block-end:-56px;background:var(--ant-color-fill-secondary);}`],`
    position: relative;

    overflow: hidden;

    height: 64px;
    margin-block-end: -56px;

    background: var(--ant-color-fill-secondary);
  `),bannerImg:T(`acss-gs16jo`,[`.acss-gs16jo{position:absolute;filter:blur(40px) saturate(1.5);}`],`
    position: absolute;
    filter: blur(40px) saturate(1.5);
  `)},J=(0,G.memo)(({avatar:e,className:t,size:n=600,children:r,...i})=>(0,K.jsxs)(c,{align:`center`,className:M(q.banner,t),justify:`center`,style:e?{}:{backgroundColor:N.colorFillTertiary},width:`100%`,...i,children:[e&&(0,K.jsx)(_,{alt:`banner`,avatar:e,className:q.bannerImg,shape:`square`,size:n}),r]}))})),X,Z,Q,$,ue=e((()=>{w(),d(),F(),g(),p(),z(),o(),h(),u(),ae(),L(),m(),P(),v(),re(),X=t(i()),r(),A(),le(),Y(),Z=t(a()),Q={banner:T(`acss-1b6wdt6`,[`.acss-1b6wdt6{overflow:hidden;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius-lg);background:var(--ant-color-bg-container);box-shadow:var(--ant-box-shadow-tertiary);}`],`
      overflow: hidden;

      border: 1px solid var(--ant-color-border-secondary);
      border-radius: var(--ant-border-radius-lg);

      background: var(--ant-color-bg-container);
      box-shadow: var(--ant-box-shadow-tertiary);
    `),copy:T(`acss-2ej1vt`,[`.acss-2ej1vt{background:var(--ant-color-primary);}`,`.acss-2ej1vt:hover{background:var(--ant-color-primary-hover);}`],`
      background: var(--ant-color-primary);

      &:hover {
        background: var(--ant-color-primary-hover);
      }
    `),icon:T(`acss-lz34eg`,[`.acss-lz34eg{border:1px solid var(--ant-color-fill-secondary);}`,`.acss-lz34eg svg{fill:var(--ant-color-text-secondary);}`,`.acss-lz34eg:hover{border:1px solid var(--ant-color-border-secondary);}`,`.acss-lz34eg:hover svg{fill:var(--ant-color-text);}`],`
      border: 1px solid var(--ant-color-fill-secondary);

      svg {
        fill: var(--ant-color-text-secondary);
      }

      &:hover {
        border: 1px solid var(--ant-color-border-secondary);

        svg {
          fill: var(--ant-color-text);
        }
      }
    `)},$=(0,X.memo)(({meta:e,...t})=>{let{x:r,reddit:i,telegram:a,whatsapp:o,mastodon:u,weibo:d}=W({avatar:``,desc:``,hashtags:[],title:``,url:``,...e}),{t:p}=n(`common`),[m,h]=(0,X.useState)(!1),g;return g=e?(0,Z.jsxs)(s,{gap:16,style:{position:`relative`},width:`100%`,children:[(0,Z.jsxs)(c,{align:`center`,className:Q.banner,width:`100%`,children:[(0,Z.jsx)(J,{avatar:e.avatar,size:640,style:{height:72,marginBottom:-36}}),(0,Z.jsx)(s,{flex:`none`,height:72,width:72,style:{backgroundColor:N.colorBgContainer,borderRadius:`50%`,overflow:`hidden`,zIndex:2},children:(0,Z.jsx)(_,{animation:!0,avatar:e.avatar,shape:`square`,size:64})}),(0,Z.jsxs)(s,{padding:12,width:`100%`,children:[(0,Z.jsx)(`h3`,{style:{fontWeight:`bold`,textAlign:`center`},children:e.title}),(0,Z.jsx)(ee,{as:`p`,style:{color:N.colorTextSecondary,textAlign:`center`},children:e.desc}),e.hashtags&&(0,Z.jsx)(c,{horizontal:!0,align:`center`,gap:4,justify:`center`,wrap:`wrap`,children:e.hashtags.map((e,t)=>(0,Z.jsx)(R,{children:ne(e).trim()},t))}),e.tags]})]}),(0,Z.jsx)(c,{horizontal:!0,align:`center`,gap:8,justify:`center`,wrap:`wrap`,children:[r,i,a,o,u,d].map(e=>e.icon&&(0,Z.jsx)(`a`,{href:e.link,rel:`noreferrer`,target:`_blank`,children:(0,Z.jsx)(te,{className:Q.icon,icon:e.icon,size:{blockSize:36,borderRadius:18,size:16},title:e.title})},e.title))}),(0,Z.jsxs)(c,{horizontal:!0,align:`center`,gap:8,width:`100%`,children:[(0,Z.jsx)(B,{value:e.url,variant:`filled`}),(0,Z.jsx)(I,{className:Q.copy,color:N.colorBgLayout,content:e.url,icon:S,size:{blockSize:36,size:16}})]})]}):(0,Z.jsx)(oe.Text,{rows:4}),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(l,{icon:(0,Z.jsx)(f,{icon:C}),size:`large`,onClick:()=>h(!0),...t}),(0,Z.jsx)(ce,{footer:null,open:m,title:p(`share`),width:360,onCancel:()=>h(!1),children:g})]})})}));export{ue as n,$ as t};