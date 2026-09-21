import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{Kt as o,Mt as s,Nt as c,Xn as l,Zn as u,qt as d}from"../vendor/vendor-ui-core-BmtybT1r.js";import{Ac as f,Pl as p,cg as m,t as h}from"../vendor/vendor-icons-vienkZi5.js";import{FD as g,ID as _,Kf as v,gF as y,hF as b,qf as x,uF as S}from"./index-w64_zsxD.js";import{n as C,t as w}from"./Popover-Cd3scH3I.js";var T=e((()=>{})),E,D,O=e((()=>{E=(e,t)=>e===`task`&&!t,D=(e,t)=>E(e,t)?`chat`:e})),k,A,j,M,N,P=e((()=>{g(),d(),u(),c(),C(),S(),h(),k=t(i()),r(),v(),O(),A=t(a()),j={activeOption:_(`acss-1dgnwnt`,[`.acss-1dgnwnt{background:var(--ant-color-fill-secondary);}`],`
    background: var(--ant-color-fill-secondary);
  `),button:_(`acss-1bilk76`,[`.acss-1bilk76{display:flex;gap:6px;align-items:center;height:32px;padding-inline:8px;border:0;border-radius:var(--ant-border-radius);font-size:12px;color:var(--ant-color-text-secondary);background:transparent;transition:all 0.2s;}`,`.acss-1bilk76:hover{color:var(--ant-color-text);background:var(--ant-color-fill-secondary);}`],`
    display: flex;
    gap: 6px;
    align-items: center;

    height: 32px;
    padding-inline: 8px;
    border: 0;
    border-radius: var(--ant-border-radius);

    font-size: 12px;
    color: var(--ant-color-text-secondary);

    background: transparent;

    transition: all 0.2s;

    &:hover {
      color: var(--ant-color-text);
      background: var(--ant-color-fill-secondary);
    }
  `),option:_(`acss-1mocv8s`,[`.acss-1mocv8s{overflow:hidden;justify-content:flex-start;width:100%;height:auto;padding-block:10px;padding-inline:8px;border:0;border-radius:var(--ant-border-radius);text-align:start;transition:background-color 0.2s;}`,`.acss-1mocv8s:hover{background:var(--ant-color-fill-secondary);}`],`
    overflow: hidden;
    justify-content: flex-start;

    width: 100%;
    height: auto;
    padding-block: 10px;
    padding-inline: 8px;
    border: 0;
    border-radius: var(--ant-border-radius);

    text-align: start;

    transition: background-color 0.2s;

    &:hover {
      background: var(--ant-color-fill-secondary);
    }
  `),optionDesc:_(`acss-mqzf0z`,[`.acss-mqzf0z{overflow:hidden;font-size:12px;line-height:1.4;color:var(--ant-color-text-description);text-overflow:ellipsis;white-space:nowrap;}`],`
    overflow: hidden;

    font-size: 12px;
    line-height: 1.4;
    color: var(--ant-color-text-description);
    text-overflow: ellipsis;
    white-space: nowrap;
  `),optionIcon:_(`acss-9zq0vr`,[`.acss-9zq0vr{flex-shrink:0;border:1px solid var(--ant-color-border-secondary);border-radius:var(--ant-border-radius);background:var(--ant-color-bg-elevated);}`],`
    flex-shrink: 0;
    border: 1px solid var(--ant-color-border-secondary);
    border-radius: var(--ant-border-radius);
    background: var(--ant-color-bg-elevated);
  `),optionTitle:_(`acss-1m79a1h`,[`.acss-1m79a1h{font-size:14px;font-weight:500;line-height:1.4;color:var(--ant-color-text);}`],`
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
    color: var(--ant-color-text);
  `),optionContent:_(`acss-vg3mbr`,[`.acss-vg3mbr{width:100%;min-width:0;}`],`
    width: 100%;
    min-width: 0;
  `),optionText:_(`acss-872usz`,[`.acss-872usz{overflow:hidden;min-width:0;}`],`
    overflow: hidden;
    min-width: 0;
  `),popoverPopup:_(`acss-yoryw8`,[`.acss-yoryw8.acss-yoryw8.acss-yoryw8{border-radius:var(--ant-border-radius-lg);}`],`
    /* The popup pads its option rows by 4px, so its corner must be one step larger
       than the rows' radius to wrap them concentrically. &&& outranks the base
       popup style's border-radius. */
    &&& {
      border-radius: var(--ant-border-radius-lg);
    }
  `)},M=[{icon:p,key:`chat`},{icon:f,key:`task`}],N=(0,k.memo)(({onChange:e,value:t})=>{let{t:r}=n(`home`),{t:i}=n(`chat`),{allowed:a,reason:c}=x(`create_content`),[u,d]=(0,k.useState)(!1);(0,k.useEffect)(()=>{let n=D(t,a);n!==t&&e(n)},[a,e,t]);let f=(0,k.useCallback)(t=>{d(!1),e(t)},[e]),p=M.find(e=>e.key===t)??M[0],h=(0,A.jsx)(o,{gap:4,role:`menu`,style:{maxWidth:320,minWidth:280},children:M.map(({icon:e,key:n})=>{let u=E(n,a);return(0,A.jsx)(s,{"aria-checked":n===t,className:y(j.option,n===t&&j.activeOption),disabled:u,role:`menuitemradio`,title:u?c:void 0,type:`text`,onClick:()=>f(n),children:(0,A.jsxs)(o,{horizontal:!0,align:`center`,className:j.optionContent,gap:12,children:[(0,A.jsx)(o,{align:`center`,className:j.optionIcon,height:32,justify:`center`,width:32,children:(0,A.jsx)(l,{icon:e,size:16})}),(0,A.jsxs)(o,{className:j.optionText,flex:1,children:[(0,A.jsx)(`div`,{className:j.optionTitle,children:r(`dashboard.mode.${n}`)}),(0,A.jsx)(`div`,{className:j.optionDesc,children:n===`chat`?i(`chatMode.agentDesc`):r(`dashboard.modeDesc.task`)})]})]})},n)})});return(0,A.jsx)(w,{className:j.popoverPopup,content:h,open:u,placement:`bottomLeft`,trigger:`click`,styles:{content:{border:`1px solid ${b.colorBorderSecondary}`,borderRadius:b.borderRadiusLG,padding:4}},onOpenChange:d,children:(0,A.jsxs)(s,{"aria-expanded":u,"aria-haspopup":`menu`,className:j.button,type:`text`,children:[(0,A.jsx)(l,{icon:p.icon,size:14}),(0,A.jsx)(`span`,{children:r(`dashboard.mode.${t}`)}),(0,A.jsx)(l,{icon:m,size:12})]})})})}));export{P as n,T as r,N as t};