import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{E as n,T as r}from"../vendor/vendor-react-B9HSWrpN.js";import{B as i,Gn as a,Kn as o,z as s}from"../vendor/vendor-ui-core-BmtybT1r.js";import{C as c,d as l,o as u}from"../vendor/vendor-ui-runtime-NzUbUsUl.js";import{og as d,t as f}from"../vendor/vendor-icons-vienkZi5.js";import{Dk as p,SF as m,cF as h,gF as g,lF as _,pF as v,uF as y,xF as b}from"./index-w64_zsxD.js";var x,S=e((()=>{x={bottom:{anchorEnd:!0,ariaOrientation:`horizontal`,cross:`width`,cursor:`row-resize`,edge:`top`,extent:`height`,grow:-1,point:`y`,vertical:!0},left:{anchorEnd:!1,ariaOrientation:`vertical`,cross:`height`,cursor:`col-resize`,edge:`right`,extent:`width`,grow:1,point:`x`,vertical:!1},right:{anchorEnd:!0,ariaOrientation:`vertical`,cross:`height`,cursor:`col-resize`,edge:`left`,extent:`width`,grow:-1,point:`x`,vertical:!1},top:{anchorEnd:!1,ariaOrientation:`horizontal`,cross:`width`,cursor:`row-resize`,edge:`bottom`,extent:`height`,grow:1,point:`y`,vertical:!0}}})),C,w,T,E=e((()=>{C=t(n(),1),w=(0,C.createContext)(null),T=()=>{let e=(0,C.use)(w);if(!e)throw Error(`DraggablePanel atoms must be used inside DraggablePanelRoot`);return e}})),D,O,k,A,j,M,N,P=e((()=>{D=e=>{let t,n=()=>(t??=typeof matchMedia==`function`?matchMedia(e):void 0,t);return{get:()=>n()?.matches??!1,subscribe:e=>(n()?.addEventListener(`change`,e),()=>n()?.removeEventListener(`change`,e))}},O=D(`(pointer: coarse)`),k=D(`(prefers-reduced-motion: reduce)`),A=8,j=16,M=20,N=(e=!0)=>O.get()?M:e?j:A})),F,ee,te,ne=e((()=>{P(),F={duration:.25,ease:[.32,.72,0,1]},ee={duration:0},te=e=>k.get()?ee:e??F})),re,I,ie,ae,oe=e((()=>{re=e=>!!e&&getComputedStyle(e).direction===`rtl`,I=0,ie={},ae=(e,t)=>{let{style:n}=document.body,r=e=>{e.key===`Escape`&&(e.preventDefault(),t())};return I===0&&(ie={cursor:n.cursor,userSelect:n.userSelect,webkitUserSelect:n.webkitUserSelect}),I+=1,Object.assign(n,{cursor:e,userSelect:`none`,webkitUserSelect:`none`}),addEventListener(`keydown`,r,!0),()=>{--I,I===0&&Object.assign(n,ie),removeEventListener(`keydown`,r,!0)}}})),se,ce,le=e((()=>{se=(e,t,n)=>Math.min(Math.max(e,t),n),ce=()=>{let e=new Set;return{emit:()=>{for(let t of e)t()},subscribe:t=>(e.add(t),()=>{e.delete(t)})}}})),ue,de,fe,pe,me=e((()=>{S(),oe(),ne(),le(),u(),ue=10,de=50,fe={ArrowDown:1,ArrowLeft:-1,ArrowRight:1,ArrowUp:-1},pe=e=>{let{emit:t,subscribe:n}=ce(),r=null,i=e,a=e.expand?e.size:0,o={collapsing:!1,dragging:!1,folding:!1},s,l=a,u=p(a),d=p(e.size),f={collapsing:!1,max:0,min:0,sign:1,start:0},m=e=>{Object.entries(e).some(([e,t])=>o[e]!==t)&&(o={...o,...e},t())},h=()=>{let e=Math.max(0,i.min);return{max:i.max===void 0?1/0:Math.max(e,i.max),min:e}},g=()=>{let e=x[i.placement];return e.grow*(e.vertical||!re(r)?1:-1)},_=e=>{l=e,m({folding:!0}),u.get()===0?d.jump(e||d.get()):e>0&&c(d,e,te()),c(u,e,te())},v=()=>{s?.(),s=void 0},y=()=>{v(),m({collapsing:!1,dragging:!1})},b={cancel:()=>{o.dragging&&(u.jump(f.start),d.jump(f.start),y())},end:()=>{if(!o.dragging)return;let{collapsing:e,start:t}=f,n=e?t:u.get();y(),e&&(d.jump(t),i.onExpandChange?.(!1)),i.onSizeChange?.(n,n-t)},move:e=>{if(!o.dragging)return;let t=x[i.placement],n=f.start+e[t.point]*f.sign,r=i.collapseThreshold!==void 0&&n<i.collapseThreshold,a=r?0:Math.round(se(n,f.min,f.max));u.jump(a),r||d.jump(a),r!==f.collapsing&&(f.collapsing=r,m({collapsing:r}));let s=r?f.start:a;i.onSizeDragging?.(s,s-f.start)},start:()=>{Object.assign(f,{...h(),collapsing:!1,sign:g(),start:u.get()}),v(),s=ae(x[i.placement].cursor,b.cancel),m({dragging:!0,folding:!1})}};return{attach:e=>{r=e;let t=u.on(`animationComplete`,()=>{u.get()===a&&m({folding:!1})});return()=>{t(),v(),r=null}},get axis(){return x[i.placement]},bounds:h,drag:b,motion:{content:d,size:u},get options(){return i},reset:()=>{i.expand||i.onExpandChange?.(!0),i.onSizeChange?.(i.defaultSize,i.defaultSize-a)},resizeByKey:e=>{if(e.key===`Enter`||e.key===` `){if(!i.onExpandChange)return;e.preventDefault(),i.onExpandChange(!i.expand);return}let{max:t,min:n}=h(),r=(e.shiftKey||e.key===`PageUp`||e.key===`PageDown`?de:ue)*g(),o=(x[i.placement].vertical?e.key===`ArrowUp`||e.key===`ArrowDown`:e.key===`ArrowLeft`||e.key===`ArrowRight`)?fe[e.key]:void 0,s={End:Number.isFinite(t)?t:a,Home:n,PageDown:a+r,PageUp:a-r},c=o===void 0?s[e.key]:a+o*r;if(c===void 0)return;e.preventDefault();let l=se(c,n,t);!i.expand&&l>0&&i.onExpandChange?.(!0),i.onSizeChange?.(l,l-a)},get state(){return o},subscribe:n,sync:e=>{i=e;let n=e.expand?e.size:0;u.get()===0&&n>0&&d.jump(e.size),n!==a&&(a=n,t()),!o.dragging&&(u.get()===a?(u.stop(),d.stop(),o.folding&&(m({folding:!1}),d.jump(a||d.get())),l=a):(!o.folding||l!==a)&&_(a))},get target(){return a}}}})),L,he,R,ge=e((()=>{L=t(n(),1),he=typeof window>`u`?L.useEffect:L.useLayoutEffect,R=(e,t)=>(0,L.useSyncExternalStore)(e,t,t)})),z,B,V,H,U,_e,ve,ye,be=e((()=>{y(),_(),z=26,B=34,V={bulge:10,curve:.44,gap:45,half:46,stroke:1.25},H=`base-draggable-panel`,U=v(({css:e,cssVar:t})=>{let n=e`
    position: absolute;
    z-index: 200;
  `,r=g(`${H}-toggle`,e`
      pointer-events: none;

      position: absolute;
      z-index: 110;

      display: flex;
      align-items: center;
      justify-content: center;

      > button {
        pointer-events: all;
        cursor: pointer;

        position: relative;

        width: ${z}px;
        height: ${B}px;
        padding: 0;
        border: none;

        color: ${t.colorTextTertiary};

        background: none;

        &:hover {
          color: ${t.colorText};
        }

        &:focus-visible {
          outline: 2px solid ${t.colorPrimary};
          outline-offset: 3px;
        }
      }

      svg {
        pointer-events: none;

        position: absolute;
        inset-block-start: 50%;
        inset-inline-start: 50%;
        transform: translate(-50%, -50%) scaleX(0.45);

        overflow: visible;

        opacity: 0;

        transition:
          opacity 0.18s ${t.motionEaseOut},
          transform 0.24s ${t.motionEaseOut};
      }

      path {
        transition: stroke 0.16s ${t.motionEaseOut};
      }

      /* The bow is the seam bending, so it carries the seam's color, not the chevron's. */
      path[data-bow] {
        stroke: ${t.colorBorderSecondary};
      }

      button:hover path[data-bow] {
        stroke: ${t.colorBorder};
      }
    `);return{body:e`
      overflow: hidden auto;
      padding: 16px;
    `,bottomFloat:g(n,e`
        inset-block-end: 0;
        inset-inline: 0;
        width: 100%;
      `),container:e`
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    `,content:g(`${H}-content`,e`
        display: flex;
        flex-direction: column;
        flex-shrink: 0;

        min-width: 0;
        min-height: 0;

        background: var(--draggable-panel-bg, transparent);
      `),fixed:e`
      position: relative;
    `,footer:e`
      display: flex;
      flex: none;
      gap: 8px;
      align-items: center;

      padding-block: 8px;
      padding-inline: 16px;
      border-block-start: 1px solid ${t.colorBorderSecondary};
    `,handle:g(`${H}-handle`,e`
        touch-action: none;
        position: absolute;
        z-index: 100;

        &::before,
        &::after {
          content: '';
          position: absolute;
          background: ${t.colorBorderSecondary};
          transition:
            width 0.25s ${t.motionEaseOut},
            height 0.25s ${t.motionEaseOut},
            background 0.16s ${t.motionEaseOut};
        }

        &:hover::before,
        &:hover::after {
          background: ${t.colorFill};
        }

        &[data-resizing]::before,
        &[data-resizing]::after {
          background: ${t.colorPrimary};
        }

        &[data-border='false']::before,
        &[data-border='false']::after {
          background: transparent;
        }

        &:focus-visible {
          outline: 2px solid ${t.colorPrimary};
          outline-offset: -2px;
        }
      `),handleHorizontal:e`
      cursor: row-resize;
      inset-inline: 0;
      height: var(--draggable-panel-handle-size);

      &::before,
      &::after {
        inset-block-start: 50%;
        height: 1px;
        margin-block-start: -0.5px;
      }

      &::before {
        inset-inline-start: 0;
        width: calc(50% - var(--draggable-panel-gap, 0px));
      }

      &::after {
        inset-inline-end: 0;
        width: calc(50% - var(--draggable-panel-gap, 0px));
      }
    `,handleVertical:e`
      cursor: col-resize;
      inset-block: 0;
      width: var(--draggable-panel-handle-size);

      &::before,
      &::after {
        inset-inline-start: 50%;
        width: 1px;
        margin-inline-start: -0.5px;
      }

      &::before {
        inset-block-start: 0;
        height: calc(50% - var(--draggable-panel-gap, 0px));
      }

      &::after {
        inset-block-end: 0;
        height: calc(50% - var(--draggable-panel-gap, 0px));
      }
    `,header:e`
      display: flex;
      flex: none;
      gap: 8px;
      align-items: center;
      justify-content: space-between;

      padding-block: 8px;
      padding-inline: 16px;
      border-block-end: 1px solid ${t.colorBorderSecondary};

      font-weight: 500;
    `,leftFloat:g(n,e`
        inset-block: 0;
        inset-inline-start: 0;
        height: 100%;
      `),rightFloat:g(n,e`
        inset-block: 0;
        inset-inline-end: 0;
        height: 100%;
      `),root:g(H,e`
        --draggable-panel-gap: 0px;

        display: flex;
        flex-shrink: 0;
        min-width: 0;
        min-height: 0;

        &[data-expandable='true']:hover,
        &[data-expandable='true']:focus-within,
        &[data-expandable='true'][data-expand='false'] {
          --draggable-panel-gap: ${V.gap}px;
        }

        /* The wrapper carries an inline opacity when collapsed, so beat it. */
        &[data-expandable='true']:hover
          .${H}-toggle,
          &[data-expandable='true']:focus-within
          .${H}-toggle {
          opacity: 1 !important;
        }

        &[data-expandable='true']:hover .${H}-toggle svg,
        &[data-expandable='true']:focus-within .${H}-toggle svg,
        &[data-expandable='true'][data-expand='false'] .${H}-toggle svg {
          transform: translate(-50%, -50%) scaleX(1);
          opacity: 1;
        }

        &[data-expandable='true'][data-resizing='true'] {
          --draggable-panel-gap: 0px;
        }

        &[data-expandable='true'][data-resizing='true'] .${H}-toggle svg {
          opacity: 0;
        }
      `),toggleBottom:g(`${H}-toggle-bottom`,e`
        inset-block-end: -${z/2}px;
        inset-inline: 0;
        height: ${z}px;

        > button {
          width: ${B}px;
          height: ${z}px;
        }
      `),toggleLeft:g(`${H}-toggle-left`,e`
        inset-block: 0;
        inset-inline-start: -${z/2}px;
        width: ${z}px;
      `),toggleRight:g(`${H}-toggle-right`,e`
        inset-block: 0;
        inset-inline-end: -${z/2}px;
        width: ${z}px;
      `),toggleRoot:r,toggleTop:g(`${H}-toggle-top`,e`
        inset-block-start: -${z/2}px;
        inset-inline: 0;
        height: ${z}px;

        > button {
          width: ${B}px;
          height: ${z}px;
        }
      `),topFloat:g(n,e`
        inset-block-start: 0;
        inset-inline: 0;
        width: 100%;
      `)}}),_e=h(U.root,{compoundVariants:[{class:U.leftFloat,mode:`float`,placement:`left`},{class:U.rightFloat,mode:`float`,placement:`right`},{class:U.topFloat,mode:`float`,placement:`top`},{class:U.bottomFloat,mode:`float`,placement:`bottom`}],defaultVariants:{mode:`fixed`,placement:`right`},variants:{mode:{fixed:U.fixed,float:null},placement:{bottom:null,left:null,right:null,top:null}}}),ve=h(U.handle,{variants:{edge:{bottom:U.handleHorizontal,left:U.handleVertical,right:U.handleVertical,top:U.handleHorizontal}}}),ye=h(U.toggleRoot,{variants:{placement:{bottom:U.toggleTop,left:U.toggleRight,right:U.toggleLeft,top:U.toggleBottom}}})})),W,G,xe,K,q,J,Y,X,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie=e((()=>{a(),i(),E(),S(),P(),ne(),me(),ge(),be(),W=t(n(),1),G=t(r(),1),y(),u(),b(),f(),xe=3,K=15,q=V.half+8,J=30,Y=q*2,X=(e,t)=>{let n=V.half*V.curve,r=K+V.bulge*e,i=q-V.half,a=q+V.half,o=(e,n)=>t?`${e} ${n}`:`${n} ${e}`;return[`M${o(K,i)}`,`C${o(K,i+n)} ${o(r,q-n)} ${o(r,q)}`,`C${o(r,q+n)} ${o(K,a-n)} ${o(K,a)}`].join(` `)},Se={horizontalSeam:[X(-1,!1),X(1,!1)],verticalSeam:[X(-1,!0),X(1,!0)]},Ce={bottom:270,left:0,right:180,top:90},we=(e,t)=>`M${e+2.4} ${t-4.8} L${e-2.4} ${t} L${e+2.4} ${t+4.8}`,Te={bottom:`center bottom`,left:`left center`,right:`right center`,top:`center top`},Ee=.97,De={bottom:`insetBlockEnd`,left:`insetInlineStart`,right:`insetInlineEnd`,top:`insetBlockStart`},Oe=(0,W.memo)(({backgroundColor:e,children:t,className:n,collapseThreshold:r,defaultExpand:i=!0,defaultSize:a,expand:o,expandable:s=!0,max:c,min:l=0,mode:u=`fixed`,onExpandChange:d,onSizeChange:f,onSizeDragging:p,placement:h=`right`,showBorder:_=!0,size:v,style:y,...b})=>{let S=x[h],C=S.vertical?180:280,T=a??C,[E,D]=m(i,{onChange:d,value:o}),[O,k]=(0,W.useState)(T),A=v??O,j={collapseThreshold:r,defaultSize:T,expand:E,max:c,min:l,onExpandChange:D,onSizeChange:(0,W.useCallback)((e,t)=>{v===void 0&&k(e),f?.(e,t)},[f,v]),onSizeDragging:p,placement:h,size:A},[M]=(0,W.useState)(()=>pe(j)),N=R(M.subscribe,()=>M.state),P=(0,W.useRef)(null);he(()=>{M.sync(j)}),he(()=>{let e=P.current;return e?M.attach(e):void 0},[M]);let F=(0,W.useCallback)(()=>{s&&D(!E)},[s,E,D]);return(0,G.jsx)(w,{value:(0,W.useMemo)(()=>({axis:S,controller:M,expand:E,expandable:s,placement:h,showBorder:_,state:N,toggleExpand:F}),[S,M,E,s,h,_,N,F]),children:(0,G.jsx)(`aside`,{className:g(_e({mode:u,placement:h}),n),"data-expand":E,"data-expandable":s,"data-resizing":N.dragging,ref:P,style:{"--draggable-panel-bg":e||``,flexDirection:S.vertical?`column`:`row`,...y},...b,children:t})})}),Oe.displayName=`DraggablePanelRoot`,ke=(0,W.memo)(({children:e,className:t,style:n,...r})=>{let i=o(),{axis:a,controller:s,expand:c,placement:u,state:d}=T(),f=l(s.motion.size,e=>Math.max(0,e)),p=R(s.subscribe,()=>s.target),m=d.dragging||d.folding||p===0,h=d.collapsing||!c;return(0,G.jsx)(i.div,{inert:!c,style:{display:`flex`,flexDirection:a.vertical?`column`:`row`,flexShrink:0,justifyContent:a.anchorEnd?`flex-end`:`flex-start`,overflow:m?`clip`:`visible`,[a.cross]:`100%`,[a.extent]:f},children:(0,G.jsx)(i.div,{animate:{scale:h?Ee:1},className:g(U.content,t),transition:te(),style:{transformOrigin:Te[u],[a.cross]:`100%`,[a.extent]:s.motion.content,...n},...r,children:e})})}),ke.displayName=`DraggablePanelContent`,Ae=(0,W.memo)(({className:e,style:t,wideArea:n=!0,...r})=>{let{axis:i,controller:a,expand:o,showBorder:s,state:c}=T(),l=R(O.subscribe,()=>N(n)),u=R(a.subscribe,()=>a.target);(0,W.useEffect)(()=>()=>a.drag.cancel(),[a]);let d=(0,W.useRef)(null),f=(0,W.useRef)(!1),p=(0,W.useRef)(!1),{max:m,min:h}=a.bounds();return o?(0,G.jsx)(`div`,{"aria-orientation":i.ariaOrientation,"aria-valuemax":Number.isFinite(m)?m:void 0,"aria-valuemin":h,"aria-valuenow":u,"aria-valuetext":`${u} pixels`,className:g(ve({edge:i.edge}),e),"data-border":s,"data-resizing":c.dragging||void 0,role:`separator`,tabIndex:0,style:{"--draggable-panel-handle-size":`${l}px`,[De[i.edge]]:-l/2,...t},onKeyDown:e=>a.resizeByKey(e),onDoubleClick:()=>{p.current||a.reset()},onLostPointerCapture:()=>{f.current&&a.drag.end(),d.current=null,f.current=!1},onPointerCancel:()=>{a.drag.cancel(),d.current=null,f.current=!1},onPointerDown:e=>{p.current=!1,d.current={x:e.clientX,y:e.clientY};try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}},onPointerMove:e=>{if(!d.current)return;let t={x:e.clientX-d.current.x,y:e.clientY-d.current.y};if(!f.current){if(Math.hypot(t.x,t.y)<xe)return;f.current=!0,p.current=!0,a.drag.start()}a.drag.move(t)},onPointerUp:()=>{f.current&&a.drag.end(),d.current=null,f.current=!1},...r}):null}),Ae.displayName=`DraggablePanelHandle`,je=(0,W.memo)(({className:e,showHandleWhenCollapsed:t,style:n,...r})=>{let{axis:i,expand:a,expandable:o,placement:s,toggleExpand:c}=T();if(!o)return null;let l=Ce[s]+(a?0:180),u=i.vertical?q:K,d=i.vertical?K:q;return(0,G.jsx)(`div`,{className:g(ye({placement:s}),e),style:{opacity:a?void 0:+!!t,...n},...r,children:(0,G.jsx)(`button`,{"aria-label":a?`Collapse panel`:`Expand panel`,type:`button`,onClick:c,children:(0,G.jsxs)(`svg`,{fill:`none`,height:i.vertical?J:Y,viewBox:`0 0 ${i.vertical?Y:J} ${i.vertical?J:Y}`,width:i.vertical?Y:J,children:[Se[i.vertical?`horizontalSeam`:`verticalSeam`].map(e=>(0,G.jsx)(`path`,{d:e,"data-bow":``,strokeLinecap:`round`,strokeWidth:V.stroke},e)),(0,G.jsx)(`g`,{style:{rotate:`${l}deg`,transformOrigin:`${u}px ${d}px`,transition:`rotate 0.25s var(--ant-motion-ease-out, ease)`},children:(0,G.jsx)(`path`,{d:we(u,d),stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.6})})]})})})}),je.displayName=`DraggablePanelToggle`,Me=(0,W.memo)(({className:e,...t})=>(0,G.jsx)(`div`,{className:g(U.container,e),...t})),Me.displayName=`DraggablePanelContainer`,Ne=(0,W.memo)(({className:e,style:t,...n})=>(0,G.jsx)(`div`,{className:g(U.body,e),style:{flex:1,...t},...n})),Ne.displayName=`DraggablePanelBody`,Pe=(0,W.memo)(({className:e,...t})=>(0,G.jsx)(`div`,{className:g(U.footer,e),...t})),Pe.displayName=`DraggablePanelFooter`,Fe=(0,W.memo)(({className:e,extra:t,onCollapse:n,title:r,...i})=>{let{toggleExpand:a}=T();return(0,G.jsxs)(`div`,{className:g(U.header,e),...i,children:[(0,G.jsx)(s,{icon:d,size:`small`,onClick:n??a}),r,t]})}),Fe.displayName=`DraggablePanelHeader`})),Z,Q,$,Le,Re=e((()=>{S(),Ie(),Z=t(n(),1),Q=t(r(),1),y(),$=e=>typeof e==`number`?Math.max(e,0):void 0,Le=(0,Z.memo)(({backgroundColor:e,children:t,className:n,classNames:r,collapseThreshold:i,defaultExpand:a,defaultSize:o,expand:s,expandable:c=!0,maxHeight:l,maxWidth:u,minHeight:d,minWidth:f,mode:p=`fixed`,onExpandChange:m,onSizeChange:h,onSizeDragging:_,placement:v=`right`,showBorder:y=!0,showHandleWhenCollapsed:b,showHandleWideArea:S=!0,size:C,style:w,styles:T,...E})=>{let{vertical:D}=x[v],O=(0,Z.useCallback)(e=>D?{height:e,width:`100%`}:{height:`100%`,width:e},[D]),k=(0,Z.useCallback)(e=>D?{height:e,width:0}:{height:0,width:e},[D]),A=(0,Z.useCallback)((e,t)=>h?.(k(t),O(e)),[h,k,O]),j=(0,Z.useCallback)((e,t)=>_?.(k(t),O(e)),[_,k,O]);return(0,Q.jsxs)(Oe,{backgroundColor:e,className:n,collapseThreshold:i,defaultExpand:a,defaultSize:$(D?o?.height:o?.width),expand:s,expandable:c,max:$(D?l:u),min:$(D?d:f)??0,mode:p,placement:v,showBorder:y,size:$(D?C?.height:C?.width),onExpandChange:m,onSizeChange:A,onSizeDragging:j,...E,children:[(0,Q.jsx)(je,{showHandleWhenCollapsed:b}),(0,Q.jsx)(ke,{className:g(r?.content),style:{...T?.content,...w},children:t}),(0,Q.jsx)(Ae,{wideArea:S})]})}),Le.displayName=`DraggablePanel`}));export{Ie as i,Re as n,Me as r,Le as t};