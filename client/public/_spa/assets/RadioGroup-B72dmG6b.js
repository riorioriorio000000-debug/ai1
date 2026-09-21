import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{d as i,f as a,lr as o,ur as s}from"../vendor/vendor-ui-core-BmtybT1r.js";import{$P as c,AT as l,CT as u,DD as d,DN as f,DT as p,Dj as m,Ej as h,Fw as g,HA as _,HM as v,IN as ee,MD as te,MN as ne,NN as re,OD as ie,ON as ae,OT as oe,Pw as y,QP as b,ST as x,UM as se,UP as S,WM as ce,WP as C,XP as w,ZP as T,_D as E,_T as D,aF as O,aM as le,ap as k,bN as A,bT as ue,cM as j,fN as M,fP as N,gF as P,gT as de,hT as F,jD as I,jN as L,jT as R,kM as z,mT as B,nw as fe,oF as V,oP as H,op as pe,pF as U,pN as me,pT as he,rw as W,sF as ge,sM as _e,sP as ve,uF as ye,vT as be,wT as G,xN as xe,xT as Se,yT as K}from"./index-w64_zsxD.js";import{i as Ce,n as we,r as Te,t as Ee}from"./CompositeRoot-UtKEHRRe.js";import{n as De,t as Oe}from"./serializeValue-b22AzPAs.js";var q,ke=e((()=>{s(),ye(),q=U(({css:e,cssVar:t})=>({indicator:e`
    display: block;
    flex: none;
    border-radius: 50%;
    background: currentcolor;
  `,label:e`
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;

    &:has([data-disabled]) {
      cursor: not-allowed;
    }
  `,root:e`
    cursor: pointer;

    display: inline-flex;
    flex: none;
    align-items: center;
    justify-content: center;

    margin: 0;
    padding: 0;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: 50%;

    color: ${t.colorBgLayout};

    background: ${t.colorBgContainer};
    outline: none;

    transition:
      background 150ms ${t.motionEaseOut},
      border-color 150ms ${t.motionEaseOut};

    &:hover:not([data-disabled], [data-checked]) {
      border-color: ${t.colorBorder};
    }

    ${o};

    &[data-checked] {
      border-color: var(--lobe-radio-bg, ${t.colorPrimary});
      background: var(--lobe-radio-bg, ${t.colorPrimary});
    }

    &[data-disabled] {
      cursor: not-allowed;

      border-color: ${t.colorFill};

      color: ${t.colorText};

      opacity: 0.25;
      background: ${t.colorFill};
    }
  `}))})),Ae,je,Me=e((()=>{Ae=`data-checked`,je=`data-unchecked`})),J,Ne=e((()=>{H(),R(),Me(),J={checked(e){return e?{[Ae]:``}:{[je]:``}},...ve,...l}}));function Pe(){return Fe.useContext(Ie)}var Fe,Ie,Le=e((()=>{Fe=t(n(),1),Ie=Fe.createContext(void 0)}));function Re(){let e=ze.useContext(Be);if(e===void 0)throw Error(w(52));return e}var ze,Be,Ve=e((()=>{T(),ze=t(n(),1),Be=ze.createContext(void 0)})),Y,X,He,Ue=e((()=>{Y=t(n(),1),f(),b(),L(),ge(),_e(),j(),_(),Ne(),ce(),d(),A(),E(),Ce(),W(),p(),k(),K(),D(),F(),Le(),Oe(),Ve(),X=t(r(),1),He=Y.forwardRef(function(e,t){let{render:n,className:r,disabled:i=!1,readOnly:a=!1,required:o=!1,"aria-labelledby":s,value:l,inputRef:u,nativeButton:d=!1,id:f,style:p,...m}=e,h=Pe(),{disabled:g,readOnly:_,required:ee,form:te,checkedValue:y,touched:b=!1,validation:x,name:S,setCheckedValue:ce=V,setTouched:C=V,registerInputRef:w=V}=h??{},{setTouched:T,setFilled:E,state:D,disabled:k}=oe(),A=pe(),{labelId:j,getDescriptionProps:M}=ue(),N=k||A.disabled||g||i,P=_||a,F=ee||o,I=te,L=h?y===l:l===``,R=Y.useRef(null),B=Y.useRef(null),H=x?.registerInput,U=ae(u,B,w,Y.useCallback(e=>H?.(e,{controlRef:R,value:void 0}),[H]));c(()=>{B.current?.checked&&E(!0)},[E]),c(()=>{if(B.current){if(N&&L){w(null);return}w(B.current)}},[L,N,w]);let me=ie(),he=de({id:f}),W=d?void 0:he,ge={role:`radio`,"aria-checked":L,"aria-labelledby":be(s,j,B,!d,W),[Te]:L?``:void 0,id:d?he:me,onKeyDown(e){e.key===`Enter`&&e.preventDefault()},onClick(e){if(e.defaultPrevented||N||P)return;e.preventDefault();let t=B.current;t&&se(t,e)},onFocus(e){e.defaultPrevented||N||P||!b||(B.current?.click(),C(!1))}},{getButtonProps:_e,buttonRef:ve}=v({disabled:N,native:d,composite:!1}),ye={type:`radio`,ref:U,form:I,id:W,name:S,tabIndex:-1,style:S?re:ne,"aria-hidden":!0,...l===void 0?O:{value:De(l)},disabled:N,checked:L,required:F,readOnly:P,onChange(e){if(e.nativeEvent.defaultPrevented||N||P||l===void 0)return;let t=le(z,e.nativeEvent);ce(l,t),!t.isCanceled&&T(!0)},onClick(e){e.stopPropagation()},onFocus(){R.current?.focus()}},G=Y.useMemo(()=>({...D,required:F,disabled:N,readOnly:P,checked:L}),[D,N,P,L,F]),Se=G,K=h!==void 0,Ce=[t,R,ve],we=[ge,m,_e,M,x?e=>x.getValidationProps(N,e):O],Ee=xe(`span`,e,{enabled:!K,state:G,ref:Ce,props:we,stateAttributesMapping:J});return(0,X.jsxs)(Be.Provider,{value:Se,children:[K?(0,X.jsx)(fe,{tag:`span`,render:n,className:r,style:p,state:G,refs:Ce,props:we,stateAttributesMapping:J}):Ee,(0,X.jsx)(`input`,{...ye,suppressHydrationWarning:!0})]})})})),We,Ge,Ke=e((()=>{We=t(n(),1),A(),Ve(),Ne(),M(),h(),Ge=We.forwardRef(function(e,t){let{render:n,className:r,style:i,keepMounted:a=!1,...o}=e,s=Re(),c=s.checked,{mounted:l,transitionStatus:u,setMounted:d}=m(c),f={...s,transitionStatus:u},p=We.useRef(null),h=a||l,g=xe(`span`,e,{ref:[t,p],state:f,props:o,stateAttributesMapping:J});return me({batch:!0,enabled:!c,open:c,ref:p,onComplete(){c||d(!1)}}),h?g:null})})),qe=e((()=>{Ue(),Ke()})),Je=e((()=>{qe()})),Ye,Z,Xe,Ze=e((()=>{a(),ke(),Ye=t(n(),1),Z=t(r(),1),ye(),Je(),Xe=(0,Ye.memo)(({size:e=16,backgroundColor:t,children:n,className:r,classNames:a,styles:o,style:s,textProps:c,disabled:l,...u})=>{let d={height:e,width:e,...t?{"--lobe-radio-bg":t}:{},...n?{}:s,...o?.radio},f=(0,Z.jsx)(He,{className:P(q.root,n?a?.radio:r,a?.radio),disabled:l,style:d,...u,children:(0,Z.jsx)(Ge,{className:q.indicator,style:{height:Math.round(e*.375),width:Math.round(e*.375)}})});return n?(0,Z.jsxs)(`label`,{className:P(q.label,r,a?.wrapper),style:{gap:Math.floor(e/2),...s,...o?.wrapper},children:[f,(0,Z.jsx)(i,{as:`span`,className:a?.text,style:o?.text,...c,type:l?`secondary`:c?.type,children:n})]}):f}),Xe.displayName=`Radio`}));function Qe(e,t){return e.matches(`:disabled`)?!1:!t||e.form===t?!0:e.form===null&&!e.hasAttribute(`form`)}var $e=e((()=>{n()}));function et(e=!1){let t=tt.useContext(nt);if(!t&&!e)throw Error(w(86));return t}var tt,nt,rt=e((()=>{T(),tt=t(n(),1),nt=tt.createContext(void 0)})),Q,it,at,ot,st=e((()=>{Q=t(n(),1),I(),S(),d(),ee(),g(),we(),p(),u(),R(),$e(),rt(),Se(),K(),he(),Le(),it=t(r(),1),at=[y],ot=Q.forwardRef(function(e,t){let{render:n,className:r,disabled:i,readOnly:a,required:o,onValueChange:s,value:c,defaultValue:u,form:d,name:f,inputRef:p,id:m,style:h,...g}=e,{setTouched:_,setFocused:v,validationMode:ee,name:ne,disabled:re,state:ae,validation:y,setDirty:b,setFilled:se,validityData:S}=oe(),{labelId:ce}=ue(),{clearErrors:w,elementRef:T}=x(),E=et(!0),D=re||i,O=ne??f,le=ie(m),[k,A]=te({controlled:c,default:u,name:`RadioGroup`,state:`value`}),[j,M]=Q.useState(!1),P=C((e,t)=>{s?.(e,t),!t.isCanceled&&A(e)}),de=y.getInputControl,F=Q.useMemo(()=>({get current(){return de()}}),[de]),I=Q.useRef(null),L=Q.useRef(null);function R(e){let t;return p&&(typeof p==`function`?t=p(e):p.current=e),I.current=e,t}let z=C(e=>{if(!e||e.disabled)return;L.current||=e;let t=I.current,n=e.checked||t==null||t.disabled?R(e):void 0;return()=>{L.current===e&&(L.current=null),I.current===e?n?(n(),I.current=null):R(null):n?.()}}),fe=C(()=>{let e=T.current;if(!e)return k??null;for(let t of y.registeredInputs.keys())if(t.checked&&Qe(t,e))return k??null;return null});G(F,le,k??null,fe,!D,f),B(k,()=>{w(O),b(k!==S.initialValue),se(k!=null),y.change(k);let e=L.current;k==null&&e&&!e.disabled&&R(e)});let V=ce??E?.legendId,H={...ae,disabled:D??!1,required:o??!1,readOnly:a??!1},pe=Q.useMemo(()=>({checkedValue:k,disabled:D,form:d,validation:y,name:O,readOnly:a,registerInputRef:z,required:o,setCheckedValue:P,setTouched:M,touched:j}),[k,D,d,y,O,a,z,o,P,M,j]),U={id:m,role:`radiogroup`,"aria-required":o||void 0,"aria-disabled":D||void 0,"aria-readonly":a||void 0,"aria-labelledby":V,onFocus(){v(!0)},onBlur(e){N(e.currentTarget,e.relatedTarget)||(_(!0),v(!1),ee===`onBlur`&&y.commit(k))},onKeyDownCapture(e){e.key.startsWith(`Arrow`)&&(M(!0),v(!0))}};return(0,it.jsx)(Ie.Provider,{value:pe,children:(0,it.jsx)(Ee,{render:n,className:r,style:h,state:H,props:[U,g,e=>y.getValidationProps(D??!1,e)],refs:[t],stateAttributesMapping:l,enableHomeAndEndKeys:!1,modifierKeys:at})})})})),ct=e((()=>{st()})),lt,ut,$,dt=e((()=>{Ze(),lt=t(n(),1),ut=t(r(),1),ct(),$=(0,lt.memo)(({options:e,onChange:t,gap:n=12,horizontal:r=!0,size:i,textProps:a,style:o,...s})=>{let c=(0,lt.useMemo)(()=>e.map(e=>typeof e==`string`?{label:e,value:e}:e),[e]);return(0,ut.jsx)(ot,{style:{display:`flex`,flexDirection:r?`row`:`column`,flexWrap:`wrap`,gap:n,...o},onValueChange:t,...s,children:c.map(e=>(0,ut.jsx)(Xe,{disabled:e.disabled,size:i,textProps:a,value:e.value,children:e.label},e.value))})}),$.displayName=`RadioGroup`}));export{Qe as i,dt as n,$e as r,$ as t};