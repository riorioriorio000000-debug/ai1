import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{Ht as i,Ut as a,a as o,o as s}from"../vendor/vendor-ui-core-BmtybT1r.js";import{mn as c,un as l}from"./app-const-BpgKVRXh.js";import{Dn as u,En as d,Gp as f,Jp as p,Mm as m,cF as h,gF as g,hF as _,jm as v,lF as y,pF as b,uF as x}from"./index-w64_zsxD.js";import{n as S,t as C}from"./Avatar-CBK5iSUv.js";var w,T,E,D,O,k=e((()=>{w=(e,t=4)=>{let n=e/2,r=[];for(let e=0;e<=360;e+=2){let i=e*Math.PI/180,a=Math.cos(i),o=Math.sin(i),s=n*Math.sign(a)*Math.abs(a)**(2/t),c=n*Math.sign(o)*Math.abs(o)**(2/t);r.push(`${n+s},${n+c}`)}return`M${r[0]}L${r.slice(1).join(`L`)}Z`},T=(e={})=>{let{size:t=100,cornerValue:n=4}=e,r=`
    <svg width="${t}" height="${t}" viewBox="0 0 ${t} ${t}" xmlns="http://www.w3.org/2000/svg">
      <path d="${w(t,n)}" fill="white"/>
    </svg>
  `.trim().replaceAll(/\s+/g,` `);return`data:image/svg+xml;base64,${btoa(r)}`},E=(e={})=>{let{size:t=100}=e,n=t/2,r=`
    <svg width="${t}" height="${t}" viewBox="0 0 ${t} ${t}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${n}" cy="${n}" r="${n}" fill="white"/>
    </svg>
  `.trim().replaceAll(/\s+/g,` `);return`data:image/svg+xml;base64,${btoa(r)}`},D=(e={})=>{let{size:t=100,borderRadius:n=15}=e,r=`
    <svg width="${t}" height="${t}" viewBox="0 0 ${t} ${t}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${t}" height="${t}" rx="${n}" ry="${n}" fill="white"/>
    </svg>
  `.trim().replaceAll(/\s+/g,` `);return`data:image/svg+xml;base64,${btoa(r)}`},O={circle:E(),ios:T({cornerValue:5}),sharp:T({cornerValue:6}),smooth:T({cornerValue:3}),square:D({borderRadius:15}),squircle:T({cornerValue:4})}})),A,j,M=e((()=>{k(),x(),y(),A=b(({css:e})=>{let t=t=>e`
    mask-image: url('${O[t]}');
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: 100% 100%;
  `;return{circle:t(`circle`),ios:t(`ios`),root:e`
      overflow: hidden;
      flex: none;

      /* Fallback for browsers without mask support */
      border-radius: 15%;

      /* Apply smooth corners mask with fallback */
      @supports (mask-image: url('data:image/svg+xml;base64,')) {
        border-radius: 0;
      }
    `,sharp:t(`sharp`),smooth:t(`smooth`),square:t(`square`),squircle:t(`squircle`)}}),j=h(A.root,{defaultVariants:{cornerShape:`squircle`},variants:{cornerShape:{circle:A.circle,ios:A.ios,sharp:A.sharp,smooth:A.smooth,square:A.square,squircle:A.squircle}}})})),N,P,F,I=e((()=>{a(),S(),s(),M(),N=t(n(),1),P=t(r(),1),x(),F=({className:e,style:t,avatars:n=[],size:r=32,grid:a=2,cornerShape:s=`square`,avatarShape:c=`square`,...l})=>{let u=(0,N.useMemo)(()=>{let e=n.length,t=a===`auto`?e>4?3:2:a,i=s===`circle`,o=Math.floor(r/t*(i?.65:.75)),c=Math.floor((r-o*t)/(i?6:4));return{avatarSize:o,gapSize:c,gridSize:t,gridWidth:o*t+c,maxItemWidth:o-1}},[n,a,r,s]),d=(0,N.useMemo)(()=>n?.slice(0,u.gridSize*u.gridSize),[n,u.gridSize]),f=d?.length===1;return(0,P.jsx)(i,{align:`center`,className:g(j({cornerShape:s}),e),height:r,justify:`center`,style:t,width:r,...l,children:(0,P.jsx)(o,{gap:u.gapSize,maxItemWidth:0,rows:u.gridSize,width:u.gridWidth,children:d.map((e,t)=>typeof e==`string`?(0,P.jsx)(C,{avatar:e,shape:c,size:f?r*.8:u.avatarSize},t):(0,P.jsx)(C,{...e,shape:c,size:f?r*.8:u.avatarSize},t))})})}})),L,R,z,B=e((()=>{I(),u(),x(),L=t(n()),c(),f(),v(),R=t(r()),z=(0,L.memo)(({size:e=28,avatars:t=[],background:n,loading:r,...i})=>{let[a,o,s]=p(e=>[m.userAvatar(e),m.nickName(e),m.username(e)]),c=(0,L.useMemo)(()=>{let e=t;return e.length===0&&(e=[{avatar:l}]),[{avatar:a||o||s,style:{color:_.colorText}},...e]},[t,a,o,s]);return r?(0,R.jsx)(d.Avatar,{shape:`square`,size:e}):(0,R.jsx)(F,{avatarShape:`square`,cornerShape:`square`,size:e,avatars:c.map(e=>({avatar:e.avatar||`/avatars/agent-default.png`,background:e?.backgroundColor||void 0,...e})),style:n&&n!==`rgba(0,0,0,0)`?{background:n,borderRadius:`22%`}:void 0,...i})})}));export{I as i,B as n,F as r,z as t};