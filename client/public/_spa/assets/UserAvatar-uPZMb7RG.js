import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{i,r as a}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Fr as o,mn as s,pn as c}from"./app-const-BpgKVRXh.js";import{Am as l,FD as u,Gp as d,HE as f,Hp as p,ID as m,Jp as h,Mm as g,Mp as _,Np as v,am as y,hF as b,uF as x,zp as S}from"./index-w64_zsxD.js";var C,w,T,E,D=e((()=>{u(),f(),i(),x(),C=t(n()),s(),o(),S(),_(),d(),y(),w=t(r()),T={clickable:m(`acss-8azr7o`,[`.acss-8azr7o{position:relative;transition:all 200ms ease-out 0s;}`,`.acss-8azr7o::before{content:'';position:absolute;transform:skewX(-45deg) translateX(-400%);overflow:hidden;box-sizing:border-box;width:25%;height:100%;background:rgb(255 255 255 / 50%);transition:all 200ms ease-out 0s;}`,`.acss-8azr7o:hover{box-shadow:0 0 0 2px var(--ant-color-primary);}`,`.acss-8azr7o:hover::before{transform:skewX(-45deg) translateX(400%);}`],`
    position: relative;
    transition: all 200ms ease-out 0s;

    &::before {
      content: '';

      position: absolute;
      transform: skewX(-45deg) translateX(-400%);

      overflow: hidden;

      box-sizing: border-box;
      width: 25%;
      height: 100%;

      background: rgb(255 255 255 / 50%);

      transition: all 200ms ease-out 0s;
    }

    &:hover {
      box-shadow: 0 0 0 2px var(--ant-color-primary);

      &::before {
        transform: skewX(-45deg) translateX(400%);
      }
    }
  `)},E=({ref:e,size:t=40,background:n,clickable:r,className:i,style:o,avatarOverride:s,nameOverride:u,...d})=>{let[f,m,_]=h(e=>[g.userAvatar(e),g.nickName(e),g.username(e)]),y=h(l.isLogin),x=p(v.remoteServerUrl),S=(0,C.useMemo)(()=>{if(!y)return c;if(f)return f},[y,f,x]);return(0,w.jsx)(a,{alt:u||(y?m||_||`User`:`LobeHub`),avatar:u?s||u:s||S||m||_,background:n,className:r?T.clickable:i,ref:e,shape:`square`,size:t,style:{color:b.colorText,flex:`none`,...o},...d})}}));export{D as n,E as t};