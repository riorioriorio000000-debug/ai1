import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{lr as i,ur as a}from"../vendor/vendor-ui-core-BmtybT1r.js";import{$P as o,AD as s,BP as c,CE as l,DD as u,Dj as d,Ej as f,FP as p,HM as m,IN as h,IP as g,KM as _,LP as v,MD as y,MP as b,NP as x,OD as S,OM as C,OP as w,QP as T,SE as E,SF as D,UP as O,WP as k,XP as A,ZP as j,_D as M,_N as N,aM as ee,aw as P,bD as F,bM as te,bN as I,cF as L,cM as R,dP as z,fN as B,fP as V,gF as H,gN as ne,iF as re,iw as ie,jD as ae,kD as oe,kM as se,kP as ce,lF as le,nN as ue,oP as de,pF as fe,pM as pe,pN as me,qM as he,rN as ge,sF as _e,sM as ve,sP as ye,uF as be,xD as xe,xF as Se,xN as U,zP as Ce}from"./index-w64_zsxD.js";import{i as we,n as Te,r as Ee,t as De}from"./CompositeRoot-UtKEHRRe.js";import{a as Oe,n as ke,t as Ae}from"./PrehydrationScript-Bn4L1ROd.js";var W,je,Me,Ne,Pe=e((()=>{a(),be(),le(),W=fe(({css:e,cssVar:t})=>({indicator:e`
    pointer-events: none;

    position: absolute;
    z-index: 0;

    transition-timing-function: ${t.motionEaseOut};
    transition-duration: 240ms;
    transition-property: inset-inline-start, inset-block-start, width, height, transform;

    @media (prefers-reduced-motion: reduce) {
      transition-duration: 0s;
    }
  `,indicatorPoint:e`
    inset-block-end: 6px;
    inset-inline-start: calc(var(--active-tab-left) + var(--active-tab-width) / 2 - 2.5px);

    width: 5px;
    height: 5px;
    border-radius: 50%;

    background: ${t.colorPrimary};

    [data-orientation='horizontal'] &:dir(rtl) {
      inset-inline-start: calc(var(--active-tab-right) + var(--active-tab-width) / 2 - 2.5px);
    }
  `,indicatorRounded:e`
    inset-block-start: var(--active-tab-top);
    inset-inline-start: var(--active-tab-left);

    width: var(--active-tab-width);
    height: var(--active-tab-height);
    border-radius: ${t.borderRadius};

    background: ${t.colorBgElevated};
    box-shadow: ${t.boxShadowTertiary};

    [data-orientation='horizontal'] &:dir(rtl) {
      inset-inline-start: var(--active-tab-right);
    }
  `,indicatorSquare:e`
    inset-block-end: 0;
    inset-inline-start: var(--active-tab-left);

    width: var(--active-tab-width);
    height: 2px;

    background: ${t.colorPrimary};

    [data-orientation='horizontal'] &:dir(rtl) {
      inset-inline-start: var(--active-tab-right);
    }
  `,list:e`
    position: relative;

    display: inline-flex;
    flex-wrap: nowrap;
    gap: 2px;
    align-items: center;

    &[data-orientation='vertical'] {
      flex-direction: column;
      align-items: stretch;
    }
  `,listRounded:e`
    gap: 4px;
    align-self: flex-start;

    padding: 3px;
    border-radius: ${t.borderRadiusLG};

    background: ${t.colorBgLayout};

    &[data-orientation='vertical'] {
      align-self: stretch;
    }
  `,listSquare:e`
    gap: 16px;
    box-shadow: inset 0 -1px 0 ${t.colorBorderSecondary};

    &[data-orientation='vertical'] {
      box-shadow: inset -1px 0 0 ${t.colorBorderSecondary};
    }
  `,panel:e`
    padding-block-start: 12px;
    outline: none;
    border-radius: ${t.borderRadius};
    ${i};
  `,root:e`
    display: flex;
    flex-direction: column;
    width: 100%;

    &[data-orientation='vertical'] {
      flex-direction: row;
    }
  `,tab:e`
    cursor: pointer;
    user-select: none;

    position: relative;
    z-index: 1;

    display: inline-flex;
    flex-shrink: 0;
    gap: 6px;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    border: 0;

    font-weight: 500;
    color: ${t.colorTextSecondary};
    white-space: nowrap;

    background: transparent;
    outline: none;

    transition:
      color 120ms ${t.motionEaseOut},
      transform 120ms ${t.motionEaseOut};

    &:hover:not([data-disabled]) {
      color: ${t.colorText};
    }

    &:active:not([data-disabled]) {
      transform: scale(0.98);
    }

    ${i};

    &[data-active] {
      color: ${t.colorPrimary};
    }

    &[data-disabled] {
      cursor: not-allowed;
      color: ${t.colorTextDisabled};
    }

    @media (prefers-reduced-motion: reduce) {
      transition-duration: 0s;
    }
  `,tabLarge:e`
    height: 36px;
    padding-inline: 16px;
    border-radius: ${t.borderRadius};
    font-size: 14px;
  `,tabMiddle:e`
    height: 32px;
    padding-inline: 12px;
    border-radius: ${t.borderRadius};
    font-size: 13px;
  `,tabPoint:e`
    height: auto;
    padding-block: 8px 14px;
  `,tabSmall:e`
    height: 26px;
    padding-inline: 10px;
    border-radius: ${t.borderRadius};
    font-size: 12px;
  `,tabSquare:e`
    height: auto;
    padding-block: 8px;
    border-radius: 0;
  `})),je=L(W.tab,{defaultVariants:{size:`middle`,variant:`rounded`},variants:{size:{large:W.tabLarge,middle:W.tabMiddle,small:W.tabSmall},variant:{point:W.tabPoint,rounded:null,square:W.tabSquare}}}),Me=L(W.indicator,{defaultVariants:{variant:`rounded`},variants:{variant:{point:W.indicatorPoint,rounded:W.indicatorRounded,square:W.indicatorSquare}}}),Ne=L(W.list,{defaultVariants:{variant:`rounded`},variants:{variant:{point:null,rounded:W.listRounded,square:W.listSquare}}})}));function G(){let e=Fe.useContext(Ie);if(e===void 0)throw Error(A(64));return e}var Fe,Ie,K=e((()=>{j(),Fe=t(n(),1),Ie=Fe.createContext(void 0)})),Le,Re=e((()=>{Le=`data-activation-direction`})),q,J=e((()=>{Re(),q={tabActivationDirection:e=>({[Le]:e})}}));function ze(e,t){for(let[n,r]of e.entries())if(t===r.value)return n;return null}function Be(e,t,n,r){if(e==null||t==null)return`none`;let[i,a,o]=n===`horizontal`?[`left`,`left`,`right`]:[`top`,`up`,`down`],s=ze(r,e),c=ze(r,t);if(s==null||c==null)return s!==c&&(typeof e==`number`||typeof e==`string`)&&typeof e==typeof t?t>e?o:a:`none`;let l=s.getBoundingClientRect()[i],u=c.getBoundingClientRect()[i];return u<l?a:u>l?o:`none`}var Y,Ve,He,Ue=e((()=>{Y=t(n(),1),ae(),T(),O(),I(),s(),K(),J(),ve(),R(),Ve=t(r(),1),He=Y.forwardRef(function(e,t){let{className:n,defaultValue:r=0,onValueChange:i,orientation:a=`horizontal`,render:s,value:c,style:l,...u}=e,d=e.defaultValue!==void 0,f=Y.useRef([]),[p,m]=Y.useState(()=>new Map),[h,g]=y({controlled:c,default:r,name:`Tabs`,state:`value`}),_=c!==void 0,[v,b]=Y.useState(()=>new Map),x=Y.useRef(void 0),S=Y.useCallback(e=>ze(v,e),[v]),[w,T]=Y.useState(()=>({previousValue:h,tabActivationDirection:`none`})),{previousValue:E,tabActivationDirection:D}=w,O=D,A=!1;E!==h&&(O=Be(E,h,a,v),A=E!=null&&h!=null&&S(h)==null);let j=A?E:h,M=E!==j||D!==O;o(()=>{M&&T({previousValue:j,tabActivationDirection:O})},[j,M,O]);let N=k((e,t)=>{t.activationDirection=Be(h,e,a,v),i?.(e,t),!t.isCanceled&&g(e)}),P=k((e,t)=>{i?.(e,ee(t,void 0,void 0,{activationDirection:`none`}))}),F=k((e,t)=>(m(n=>{let r=new Map(n);return r.set(e,t),r}),()=>{m(n=>{if(n.get(e)!==t)return n;let r=new Map(n);return r.delete(e),r})})),I=Y.useCallback(e=>p.get(e),[p]),L=Y.useCallback(e=>{for(let t of v.values())if(e===t.value)return t.id},[v]),R=Y.useMemo(()=>({getTabElementBySelectedValue:S,getTabIdByPanelValue:L,getTabPanelIdByValue:I,onValueChange:N,orientation:a,registerMountedTabPanel:F,setTabMap:b,tabActivationDirection:O,value:h}),[S,L,I,N,a,F,b,O,h]),z=Y.useMemo(()=>{for(let e of v.values())if(e.value===h)return e},[v,h]),B=Y.useMemo(()=>{for(let e of v.values())if(!e.disabled)return e.value},[v]),V=Y.useRef(!d),H=Y.useRef(r),ne=Y.useRef(d),re=Y.useRef(!1);o(()=>{if(_)return;function e(e,t){g(e),T({previousValue:e,tabActivationDirection:`none`}),P(e,t),V.current=!1}if(v.size===0){re.current&&h!==null&&!x.current?.isConnected&&e(null,C);return}re.current=!0,x.current=v.keys().next().value;let t=z?.disabled,n=z==null&&h!==null;if(!t&&h===H.current&&(ne.current=!1),ne.current&&t&&h===H.current)return;let r=V.current;if(t||n){let n=B??null;if(h===n){V.current=!1;return}let i=C;r?i=te:t&&(i=pe),e(n,i);return}r&&z!=null&&(P(h,te),V.current=!1)},[B,_,P,z,g,v,h]);let ie=U(`div`,e,{state:{orientation:a,tabActivationDirection:O},ref:t,props:u,stateAttributesMapping:q});return(0,Ve.jsx)(Ie.Provider,{value:R,children:(0,Ve.jsx)(oe,{elementsRef:f,children:ie})})})}));function We(){let e=Ge.useContext(Ke);if(e===void 0)throw Error(A(65));return e}var Ge,Ke,qe=e((()=>{j(),Ge=t(n(),1),Ke=Ge.createContext(void 0)})),X,Je,Ye=e((()=>{X=t(n(),1),b(),T(),O(),u(),I(),M(),we(),ie(),_(),K(),J(),qe(),ve(),R(),h(),Je=X.forwardRef(function(e,t){let{className:n,disabled:r=!1,render:i,value:a,id:s,nativeButton:c=!0,style:l,...u}=e,{value:d,getTabPanelIdByValue:f,onValueChange:p,orientation:h,tabActivationDirection:g}=G(),{activateOnFocus:_,registerTabResizeObserverElement:v,tabsListElement:y}=We(),{highlightedIndex:b,onHighlightedIndexChange:C}=he(),w=S(s),{compositeProps:T,compositeRef:E,index:D}=P({metadata:X.useMemo(()=>({disabled:r,id:w,value:a}),[r,w,a])}),O=a===d,A=X.useRef(!1),j=X.useRef(null),M=k(e=>{j.current?.(),j.current=e?v(e):null});o(()=>{if(A.current){A.current=!1;return}if(!(O&&D>-1&&b!==D))return;let e=y;if(e!=null){let t=z(x(e));if(t&&V(e,t))return}r||C(D)},[O,D,b,C,r,y]);let{getButtonProps:N,buttonRef:F}=m({disabled:r,native:c,focusableWhenDisabled:!0}),te=f(a),I=X.useRef(!1),L=X.useRef(!1);function R(e){p(a,ee(se,e.nativeEvent,void 0,{activationDirection:`none`}))}function B(e){O||r||R(e)}function H(e){O||r||_&&(!I.current||L.current)&&R(e)}function ne(e){if(O||r)return;I.current=!0,L.current=e.button===0;let t=x(e.currentTarget);function n(){I.current=!1,L.current=!1,t.removeEventListener(`pointerup`,n),t.removeEventListener(`pointercancel`,n)}t.addEventListener(`pointerup`,n),t.addEventListener(`pointercancel`,n)}return U(`button`,e,{state:{disabled:r,active:O,orientation:h,tabActivationDirection:g},ref:[t,F,E,M],props:[T,{role:`tab`,"aria-controls":te,"aria-selected":O,id:w,onClick:B,onFocus:H,onPointerDown:ne,[Ee]:O?``:void 0,onKeyDownCapture(){A.current=!0}},u,N],stateAttributesMapping:q})})})),Xe,Ze,Qe,$e,et,tt,nt=e((()=>{Xe=`--active-tab-left`,Ze=`--active-tab-right`,Qe=`--active-tab-top`,$e=`--active-tab-bottom`,et=`--active-tab-width`,tt=`--active-tab-height`}));function rt(e,t){let n=it(e),r=it(t),i=n.left-r.left-t.clientLeft,a=n.top-r.top-t.clientTop,o=p(e);for(;Ce(o)&&o!==t&&!c(o);)i-=o.scrollLeft,a-=o.scrollTop,o=p(o);return{left:i,top:a}}function it(e){let t=0,n=0,r=e;for(;r!=null;){t+=r.offsetLeft,n+=r.offsetTop;let e=r.offsetParent;e!=null&&(t+=e.clientLeft,n+=e.clientTop),r=e}return{left:t,top:n}}function at(e){let t=g(e).getComputedStyle(e),{x:n,y:r}=ue(e,t),i=n,a=r,{translate:o}=t;if(o&&o!==`none`){let t=o.split(` `);i+=ot(t[0],e.offsetWidth),a+=ot(t[1],e.offsetHeight)}return{x:i,y:a}}function ot(e,t){if(!e)return 0;let n=parseFloat(e);return Number.isFinite(n)?e.endsWith(`%`)?n/100*t:n:0}var st,ct,lt,ut,dt,ft,pt=e((()=>{st=t(n(),1),v(),w(),b(),Oe(),ke(),I(),l(),ge(),K(),J(),qe(),nt(),ct=t(r(),1),ut={...q,activeTabPosition:()=>null,activeTabSize:()=>null},dt=2,ft=st.forwardRef(function(e,t){let{className:n,render:r,renderBeforeHydration:i=!1,style:a,...o}=e,{getTabElementBySelectedValue:s,orientation:c,tabActivationDirection:l,value:u}=G(),{tabsListElement:d,registerIndicatorUpdateListener:f}=We(),p=ce();st.useEffect(()=>f(p),[f,p]);let m=0,h=0,g=0,_=0,v=0,y=0,b=!1;if(u!=null&&d!=null){let e=s(u);if(e!=null){b=!0;let{width:t,height:n}=E(e),{width:r,height:i}=E(d),a=e.getBoundingClientRect(),o=d.getBoundingClientRect(),s=r>0?o.width/r:1,c=i>0?o.height/i:1,l=rt(e,d);m=l.left,g=l.top;let u=(a.left-o.left)/s+d.scrollLeft-d.clientLeft,f=(a.top-o.top)/c+d.scrollTop-d.clientTop,p=at(e);Math.abs(u-p.x-m)<=dt&&Math.abs(f-p.y-g)<=dt&&(m=u,g=f),v=t,y=n,h=d.scrollWidth-m-v,_=d.scrollHeight-g-y}}let x=b?{left:m,right:h,top:g,bottom:_}:null,S=b?{width:v,height:y}:null,C=b?{[Xe]:`${m}px`,[Ze]:`${h}px`,[Qe]:`${g}px`,[$e]:`${_}px`,[et]:`${v}px`,[tt]:`${y}px`}:void 0,w=U(`span`,e,{state:{orientation:c,activeTabPosition:x,activeTabSize:S,tabActivationDirection:l},ref:t,props:[{role:`presentation`,style:C,hidden:!(b&&v>0&&y>0)},o,{suppressHydrationWarning:!0}],stateAttributesMapping:ut});return u==null?null:(0,ct.jsxs)(st.Fragment,{children:[w,i&&(lt||=(0,ct.jsx)(Ae,{script:``}))]})})})),mt,ht=e((()=>{de(),mt=`data-index`})),gt,_t,vt,yt=e((()=>{gt=t(n(),1),N(),T(),u(),de(),B(),f(),I(),F(),J(),K(),ht(),_t={...q,...ye},vt=gt.forwardRef(function(e,t){let{className:n,value:r,render:i,keepMounted:a=!1,style:s,...c}=e,{value:l,getTabIdByPanelValue:u,orientation:f,tabActivationDirection:p,registerMountedTabPanel:m}=G(),h=S(),{ref:g,index:_}=xe(),v=r===l,{mounted:y,transitionStatus:b,setMounted:x}=d(v),C=!y,w=u(r),T={hidden:C,orientation:f,tabActivationDirection:p,transitionStatus:b},E=gt.useRef(null),D=U(`div`,e,{state:T,ref:[t,g,E],props:[{"aria-labelledby":w,hidden:C,id:h,role:`tabpanel`,tabIndex:v?0:-1,inert:ne(!v),[mt]:_},c],stateAttributesMapping:_t});return me({open:v,ref:E,onComplete(){v||x(!1)}}),o(()=>{if(!(h==null||C&&!a))return m(r,h)},[C,a,r,h,m]),a||y?D:null})})),Z,bt,xt,St=e((()=>{Z=t(n(),1),O(),T(),_e(),Te(),J(),K(),qe(),bt=t(r(),1),xt=Z.forwardRef(function(e,t){let{activateOnFocus:n=!1,className:r,loopFocus:i=!0,render:a,style:s,...c}=e,{orientation:l,setTabMap:u,tabActivationDirection:d}=G(),[f,p]=Z.useState(0),[m,h]=Z.useState(null),g=Z.useRef(new Set),_=Z.useRef(new Set),v=Z.useRef(null);o(()=>{if(typeof ResizeObserver>`u`)return;let e=new ResizeObserver(()=>{g.current.forEach(e=>{e()})});return v.current=e,m&&e.observe(m),_.current.forEach(t=>{e.observe(t)}),()=>{e.disconnect(),v.current=null}},[m]);let y=k(e=>(g.current.add(e),()=>{g.current.delete(e)})),b=k(e=>(_.current.add(e),v.current?.observe(e),()=>{_.current.delete(e),v.current?.unobserve(e)})),x={orientation:l,tabActivationDirection:d},S={"aria-orientation":l===`vertical`?`vertical`:void 0,role:`tablist`},C=Z.useMemo(()=>({activateOnFocus:n,registerIndicatorUpdateListener:y,registerTabResizeObserverElement:b,tabsListElement:m}),[n,y,b,m]);return(0,bt.jsx)(Ke.Provider,{value:C,children:(0,bt.jsx)(De,{render:a,className:r,style:s,state:x,refs:[t,h],props:[S,c],stateAttributesMapping:q,highlightedIndex:f,enableHomeAndEndKeys:!0,loopFocus:i,orientation:l,onHighlightedIndexChange:p,onMapChange:u,disabledIndices:re})})})})),Ct=e((()=>{Ue(),Ye(),pt(),yt(),St()})),wt=e((()=>{Ct()})),Tt,Q,Et,Dt,Ot,kt,At,jt,Mt,Nt=e((()=>{Pe(),Tt=t(n(),1),Q=t(r(),1),be(),wt(),Et=(0,Tt.createContext)({size:`middle`,variant:`rounded`}),Dt=()=>(0,Tt.use)(Et),Ot=({children:e,size:t=`middle`,variant:n=`rounded`,...r})=>(0,Q.jsx)(Et,{value:(0,Tt.useMemo)(()=>({size:t,variant:n}),[t,n]),children:(0,Q.jsx)(He,{...r,children:e})}),Ot.displayName=`TabsRoot`,kt=({className:e,variant:t,...n})=>{let r=Dt(),i=t??r.variant;return(0,Q.jsx)(xt,{className:H(Ne({variant:i}),e),...n})},kt.displayName=`TabsList`,At=({className:e,size:t,variant:n,...r})=>{let i=Dt(),a=t??i.size,o=n??i.variant;return(0,Q.jsx)(Je,{className:H(je({size:a,variant:o}),e),...r})},At.displayName=`TabsTab`,jt=({className:e,...t})=>(0,Q.jsx)(vt,{className:H(W.panel,e),...t}),jt.displayName=`TabsPanel`,Mt=({className:e,variant:t,...n})=>{let r=Dt(),i=t??r.variant;return(0,Q.jsx)(ft,{renderBeforeHydration:!0,className:H(Me({variant:i}),e),...n})},Mt.displayName=`TabsIndicator`})),$,Pt,Ft=e((()=>{Pe(),Nt(),$=t(r(),1),be(),Se(),Pt=({activeKey:e,className:t,classNames:n,defaultActiveKey:r,items:i,onChange:a,orientation:o=`horizontal`,ref:s,size:c=`middle`,style:l,styles:u,variant:d=`rounded`})=>{let f=r??i?.find(e=>!e.disabled)?.key??null,[p,m]=D(f,{defaultValue:f,onChange:e=>{e!=null&&a?.(e)},value:e}),h=i?.some(e=>e.children!=null);return(0,$.jsxs)(Ot,{className:H(W.root,n?.root,t),orientation:o,ref:s,size:c,style:{...l,...u?.root},value:p,variant:d,onValueChange:e=>m(e??null),children:[(0,$.jsxs)(kt,{className:H(n?.list),style:u?.list,children:[(0,$.jsx)(Mt,{className:H(n?.indicator),style:u?.indicator}),i?.map(e=>(0,$.jsxs)(At,{className:H(n?.tab),disabled:e.disabled,style:u?.tab,value:e.key,children:[e.icon,e.label]},e.key))]}),h&&i?.map(e=>(0,$.jsx)(jt,{className:H(n?.panel),style:u?.panel,value:e.key,children:e.children},e.key))]})},Pt.displayName=`Tabs`}));export{Ot as a,kt as i,Ft as n,At as o,Mt as r,Nt as s,Pt as t};