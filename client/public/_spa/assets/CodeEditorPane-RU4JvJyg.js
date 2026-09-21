import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{N as n,j as r}from"../vendor/vendor-data-runtime--g3k1Ms_.js";import{E as i,T as a}from"../vendor/vendor-react-B9HSWrpN.js";import{Kt as o,lt as s,qt as c}from"../vendor/vendor-ui-core-BmtybT1r.js";import{FD as l,ID as u,eE as d,tE as f}from"./index-w64_zsxD.js";import{t as p}from"./_virtual_lobe-ui-named__Tooltip-DNompU8a.js";import{F as m,M as h,N as g,P as _}from"./es-BfaWydN2.js";var v=e((()=>{_(),h()})),y,b,x,S,C=e((()=>{y={size:2,useTabs:!1},b=400,x=/^\s*\*/,S=e=>{let t=e.split(`
`,b),n=0,r=0,i=new Map,a=0;for(let e of t){if(x.test(e))continue;let t=/^[\t ]*/.exec(e)?.[0]??``;if(!t||t.length===e.length)continue;if(t.includes(`	`)){n+=1;continue}r+=1;let o=t.length-a;a=t.length,o>0&&i.set(o,(i.get(o)??0)+1)}if(n>r)return{size:4,useTabs:!0};if(r===0)return y;let o=0,s=0;for(let[e,t]of i)(t>s||t===s&&e<o)&&(o=e,s=t);return o<1||o>8?y:{size:o,useTabs:!1}}})),w,T,E,D,O,k,A=e((()=>{w=e=>({label:e,mode:``}),T=(e,t)=>({label:e,mode:t}),E={".bash_profile":T(`Shell`,`shell`),".bashrc":T(`Shell`,`shell`),".dockerignore":T(`Ignore`,`properties`),".env":T(`Dotenv`,`properties`),".editorconfig":T(`EditorConfig`,`properties`),".gitattributes":T(`Git Attributes`,`properties`),".gitignore":T(`Ignore`,`properties`),".npmrc":T(`npmrc`,`properties`),".profile":T(`Shell`,`shell`),".zshrc":T(`Shell`,`shell`),"cmakelists.txt":T(`CMake`,`cmake`),containerfile:T(`Dockerfile`,`dockerfile`),dockerfile:T(`Dockerfile`,`dockerfile`),gnumakefile:T(`Makefile`,`makefile`),makefile:T(`Makefile`,`makefile`),"nginx.conf":T(`Nginx`,`nginx`)},D={bash:T(`Shell`,`shell`),c:T(`C`,`c`),cc:T(`C++`,`cpp`),cfg:T(`Config`,`properties`),cjs:T(`JavaScript`,`javascript`),cmake:T(`CMake`,`cmake`),conf:T(`Config`,`properties`),cpp:T(`C++`,`cpp`),cs:T(`C#`,`csharp`),css:T(`CSS`,`css`),cts:T(`TypeScript`,`typescript`),cxx:T(`C++`,`cpp`),dart:T(`Dart`,`dart`),diff:T(`Diff`,`diff`),dockerfile:T(`Dockerfile`,`dockerfile`),env:T(`Dotenv`,`properties`),erl:T(`Erlang`,`erlang`),ets:T(`ArkTS`,`arkts`),fish:T(`Shell`,`shell`),frag:T(`GLSL`,`glsl`),glsl:T(`GLSL`,`glsl`),gql:T(`GraphQL`,`graphql`),gradle:T(`Gradle`,`groovy`),graphql:T(`GraphQL`,`graphql`),groovy:T(`Groovy`,`groovy`),h:T(`C`,`c`),hh:T(`C++`,`cpp`),hpp:T(`C++`,`cpp`),hrl:T(`Erlang`,`erlang`),clj:T(`Clojure`,`clojure`),cljc:T(`Clojure`,`clojure`),cljs:T(`Clojure`,`clojure`),hs:T(`Haskell`,`haskell`),htm:T(`HTML`,`html`),html:T(`HTML`,`html`),http:w(`HTTP`),hxx:T(`C++`,`cpp`),ini:T(`INI`,`properties`),java:T(`Java`,`java`),js:T(`JavaScript`,`javascript`),json:T(`JSON`,`json`),jl:T(`Julia`,`julia`),json5:T(`JSON5`,`json`),jsonc:T(`JSON`,`json`),jsx:T(`JSX`,`jsx`),kt:T(`Kotlin`,`kotlin`),kts:T(`Kotlin`,`kotlin`),ksh:T(`Shell`,`shell`),less:T(`Less`,`css`),lua:T(`Lua`,`lua`),markdown:w(`Markdown`),md:w(`Markdown`),mdx:w(`MDX`),mjs:T(`JavaScript`,`javascript`),mts:T(`TypeScript`,`typescript`),patch:T(`Diff`,`diff`),pas:T(`Pascal`,`pascal`),php:T(`PHP`,`php`),pl:T(`Perl`,`perl`),plist:T(`Property List`,`xml`),pm:T(`Perl`,`perl`),prisma:w(`Prisma`),properties:T(`Properties`,`properties`),proto:T(`Protocol Buffers`,`protobuf`),ps1:T(`PowerShell`,`powershell`),psm1:T(`PowerShell`,`powershell`),py:T(`Python`,`python`),pyi:T(`Python`,`python`),pyw:T(`Python`,`python`),r:T(`R`,`r`),rake:T(`Ruby`,`ruby`),rb:T(`Ruby`,`ruby`),rs:T(`Rust`,`rust`),sass:T(`Sass`,`sass`),scala:T(`Scala`,`scala`),scss:T(`SCSS`,`sass`),sh:T(`Shell`,`shell`),sol:T(`Solidity`,`solidity`),sql:T(`SQL`,`sql`),sv:T(`SystemVerilog`,`verilog`),svelte:T(`Svelte`,`html`),svg:T(`SVG`,`xml`),svh:T(`SystemVerilog`,`verilog`),swift:T(`Swift`,`swift`),tcl:T(`Tcl`,`tcl`),tex:T(`LaTeX`,`stex`),tf:w(`Terraform`),tfvars:w(`Terraform`),toml:T(`TOML`,`toml`),ts:T(`TypeScript`,`typescript`),tsx:T(`TSX`,`tsx`),txt:w(`Plain Text`),v:T(`Verilog`,`verilog`),vb:T(`Visual Basic`,`vbnet`),vh:T(`Verilog`,`verilog`),vert:T(`GLSL`,`glsl`),vue:T(`Vue`,`vue`),xml:T(`XML`,`xml`),xsl:T(`XSL`,`xml`),yaml:T(`YAML`,`yaml`),yml:T(`YAML`,`yaml`),zsh:T(`Shell`,`shell`)},O=w(`Plain Text`),k=e=>{if(!e)return O;let t=(e.split(/[/\\]/).at(-1)??``).toLowerCase();if(!t)return O;let n=E[t];if(n)return n;let r=t.lastIndexOf(`.`);if(r>0){let e=D[t.slice(r+1)];if(e)return e}let i=t.split(`.`).find(Boolean);if(i&&t.includes(`.`)){let e=E[i]??E[`.${i}`];if(e)return e}return O}})),j,M,N,P=e((()=>{l(),c(),p(),r(),j=t(a()),M={bar:u(`acss-1ia0ipw`,[`.acss-1ia0ipw{flex-shrink:0;height:24px;padding-inline:10px;border-block-start:1px solid var(--ant-color-border-secondary);font-size:11px;line-height:1;color:var(--ant-color-text-tertiary);background:var(--ant-color-bg-container);}`],`
    flex-shrink: 0;

    height: 24px;
    padding-inline: 10px;
    border-block-start: 1px solid var(--ant-color-border-secondary);

    font-size: 11px;
    line-height: 1;
    color: var(--ant-color-text-tertiary);

    background: var(--ant-color-bg-container);
  `),button:u(`acss-1fbhfws`,[`.acss-1fbhfws{cursor:pointer;height:18px;padding-inline:6px;border:none;border-radius:var(--ant-border-radius-sm);font-size:11px;line-height:1;color:inherit;white-space:nowrap;background:none;}`,`.acss-1fbhfws:hover{color:var(--ant-color-text);background:var(--ant-color-fill-tertiary);}`],`
    cursor: pointer;

    height: 18px;
    padding-inline: 6px;
    border: none;
    border-radius: var(--ant-border-radius-sm);

    font-size: 11px;
    line-height: 1;
    color: inherit;
    white-space: nowrap;

    background: none;

    &:hover {
      color: var(--ant-color-text);
      background: var(--ant-color-fill-tertiary);
    }
  `),item:u(`acss-73e5c2`,[`.acss-73e5c2{padding-inline:6px;white-space:nowrap;}`],`
    padding-inline: 6px;
    white-space: nowrap;
  `),readOnly:u(`acss-1cii7lg`,[`.acss-1cii7lg{padding-inline:6px;border-radius:var(--ant-border-radius-sm);color:var(--ant-color-text-secondary);background:var(--ant-color-fill-tertiary);}`],`
    padding-inline: 6px;
    border-radius: var(--ant-border-radius-sm);
    color: var(--ant-color-text-secondary);
    background: var(--ant-color-fill-tertiary);
  `)},N=({cursor:e,indent:t,languageLabel:r,lineWrapping:i,onLineWrappingChange:a,readOnly:c})=>{let{t:l}=n(`components`);return(0,j.jsxs)(o,{horizontal:!0,align:`center`,className:M.bar,justify:`space-between`,children:[(0,j.jsx)(o,{horizontal:!0,align:`center`,children:c&&(0,j.jsx)(`span`,{className:M.readOnly,children:l(`CodeEditorPane.readOnly`)})}),(0,j.jsxs)(o,{horizontal:!0,align:`center`,children:[e&&(0,j.jsxs)(`span`,{className:M.item,children:[l(`CodeEditorPane.cursor`,{column:e.column,line:e.line}),e.selectionLength>0&&` ${l(`CodeEditorPane.selected`,{length:e.selectionLength})}`]}),(0,j.jsx)(`span`,{className:M.item,children:l(t.useTabs?`CodeEditorPane.tabSize`:`CodeEditorPane.spaces`,{size:t.size})}),(0,j.jsx)(s,{title:l(`CodeEditorPane.toggleWordWrap`),children:(0,j.jsx)(`button`,{"aria-pressed":i,className:M.button,type:`button`,onClick:()=>a(!i),children:l(i?`CodeEditorPane.wrapOn`:`CodeEditorPane.wrapOff`)})}),(0,j.jsx)(`span`,{className:M.item,children:r})]})]})},N.displayName=`StatusBar`})),F,I=e((()=>{l(),F={container:u(`acss-xdgdjv`,[`.acss-xdgdjv{overflow:hidden;display:flex;flex-direction:column;width:100%;height:100%;background:var(--ant-color-bg-container);}`,`.acss-xdgdjv .cm-textarea{height:0;opacity:0;}`],`
    overflow: hidden;
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    background: var(--ant-color-bg-container);

    .cm-textarea {
      height: 0;
      opacity: 0;
    }
  `),editorArea:u(`acss-16a5onw`,[`.acss-16a5onw{overflow:hidden;flex:1;min-height:0;}`,`.acss-16a5onw .cm-editor{height:100%;padding-block:0;}`,`.acss-16a5onw .cm-scroller{overflow:auto;font-variant-ligatures:none;line-height:20px;}`,`.acss-16a5onw .cm-editor.cm-editor span,.acss-16a5onw .cm-editor.cm-editor .cm-line{font-family:var(--ant-font-family-code);font-size:12px;line-height:20px;}`,`.acss-16a5onw .cm-content{min-height:100%;padding-block:8px;}`,`.acss-16a5onw .cm-gutters{-webkit-user-select:none;user-select:none;border-inline-end:1px solid var(--ant-color-border-secondary);background:var(--ant-color-bg-container);}`,`.acss-16a5onw .cm-editor.cm-editor .cm-line{padding-inline:6px 12px;}`,`.acss-16a5onw .cm-lineNumbers .cm-gutterElement{min-width:22px;padding-inline:16px 2px;font-family:var(--ant-font-family-code);font-size:11px;font-variant-numeric:tabular-nums;line-height:20px;color:var(--ant-color-text-quaternary);}`,`.acss-16a5onw .cm-editor.cm-editor .cm-activeLineGutter{color:var(--ant-color-text)!important;background:transparent;}`,`.acss-16a5onw .cm-editor.cm-editor .cm-activeLine{background:var(--ant-color-fill-quaternary);}`,`.acss-16a5onw .cm-editor.cm-editor:not(.cm-focused) .cm-activeLine{background:transparent;}`,`.acss-16a5onw .cm-matchingBracket,.acss-16a5onw .cm-editor.cm-focused .cm-matchingBracket{border-radius:2px;background:var(--ant-color-fill-secondary);outline:1px solid var(--ant-color-border);}`,`.acss-16a5onw .cm-nonmatchingBracket{border-radius:2px;background:var(--ant-color-error-bg);}`,`.acss-16a5onw .gutter-fold-open,.acss-16a5onw .gutter-fold-close{cursor:pointer;display:flex;align-items:center;justify-content:center;width:13px;height:20px;color:var(--ant-color-text-tertiary);transition:opacity 0.15s;}`,`.acss-16a5onw .gutter-fold-open::before,.acss-16a5onw .gutter-fold-close::before{content:'';width:5px;height:5px;border-block-end:1.4px solid currentcolor;border-inline-end:1.4px solid currentcolor;}`,`.acss-16a5onw .gutter-fold-open{opacity:0;}`,`.acss-16a5onw .gutter-fold-open::before{transform:translateY(-1px) rotate(45deg);}`,`.acss-16a5onw .gutter-fold-close::before{transform:translateX(-2px) rotate(-45deg);}`,`.acss-16a5onw .gutter-fold-open:hover,.acss-16a5onw .gutter-fold-close:hover{color:var(--ant-color-text);}`,`.acss-16a5onw .cm-gutters:hover .gutter-fold-open{opacity:1;}`,`.acss-16a5onw .cm-editor.cm-editor .cm-foldPlaceholder{width:auto;height:auto;padding-inline:6px;border:1px solid var(--ant-color-border-secondary);border-radius:4px;font-size:11px;color:var(--ant-color-text-tertiary);background:var(--ant-color-fill-tertiary);}`],`
    overflow: hidden;
    flex: 1;
    min-height: 0;

    .cm-editor {
      height: 100%;
      padding-block: 0;
    }

    /* Own the vertical scroll here rather than in an outer wrapper, so the
       gutter and the fold markers stay pinned while the text scrolls. */
    .cm-scroller {
      overflow: auto;
      font-variant-ligatures: none;
      line-height: 20px;
    }

    .cm-editor.cm-editor span,
    .cm-editor.cm-editor .cm-line {
      font-family: var(--ant-font-family-code);
      font-size: 12px;
      line-height: 20px;
    }

    /* Clicking below the last line should still land in the document, the way
       every desktop editor behaves. */
    .cm-content {
      min-height: 100%;
      padding-block: 8px;
    }

    .cm-gutters {
      user-select: none;
      border-inline-end: 1px solid var(--ant-color-border-secondary);
      background: var(--ant-color-bg-container);
    }

    /* The bundled theme pads every line by 12px, which lands on top of the
       gutter's own trailing space and pushes the code away from its number. */
    .cm-editor.cm-editor .cm-line {
      padding-inline: 6px 12px;
    }

    /* The number sits closer to the code than to the pane edge: it labels the
       line, so the eye should travel from it rightwards, not across a gap. */
    .cm-lineNumbers .cm-gutterElement {
      min-width: 22px;
      padding-inline: 16px 2px;

      font-family: var(--ant-font-family-code);
      font-size: 11px;
      font-variant-numeric: tabular-nums;
      line-height: 20px;
      color: var(--ant-color-text-quaternary);
    }

    /* The bundle carries a base style that paints the caret's line and gutter a
       hard-coded near-white, in dark mode too, and qualifies both of them with
       the editor class. Naming that class twice is what outranks it: otherwise
       the focused line reads as a white band with its punctuation washed out. */
    .cm-editor.cm-editor .cm-activeLineGutter {
      color: var(--ant-color-text) !important;
      background: transparent;
    }

    .cm-editor.cm-editor .cm-activeLine {
      background: var(--ant-color-fill-quaternary);
    }

    /* A focused editor gets the stronger cue; an unfocused one keeps a faint
       marker so the caret position is still findable after a click elsewhere. */
    .cm-editor.cm-editor:not(.cm-focused) .cm-activeLine {
      background: transparent;
    }

    .cm-matchingBracket,
    .cm-editor.cm-focused .cm-matchingBracket {
      border-radius: 2px;
      background: var(--ant-color-fill-secondary);
      outline: 1px solid var(--ant-color-border);
    }

    .cm-nonmatchingBracket {
      border-radius: 2px;
      background: var(--ant-color-error-bg);
    }

    /* Fold markers render as empty divs; the chevron is entirely ours. */
    .gutter-fold-open,
    .gutter-fold-close {
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 13px;
      height: 20px;

      color: var(--ant-color-text-tertiary);

      transition: opacity 0.15s;

      &::before {
        content: '';

        width: 5px;
        height: 5px;
        border-block-end: 1.4px solid currentcolor;
        border-inline-end: 1.4px solid currentcolor;
      }
    }

    /* Pointing down: this range is expanded. Only offered on gutter hover, so
       the gutter is not a column of permanent arrows. */
    .gutter-fold-open {
      opacity: 0;

      &::before {
        transform: translateY(-1px) rotate(45deg);
      }
    }

    /* Pointing right: content is hidden here, so this one always shows. */
    .gutter-fold-close::before {
      transform: translateX(-2px) rotate(-45deg);
    }

    .gutter-fold-open:hover,
    .gutter-fold-close:hover {
      color: var(--ant-color-text);
    }

    .cm-gutters:hover .gutter-fold-open {
      opacity: 1;
    }

    .cm-editor.cm-editor .cm-foldPlaceholder {
      width: auto;
      height: auto;
      padding-inline: 6px;
      border: 1px solid var(--ant-color-border-secondary);
      border-radius: 4px;

      font-size: 11px;
      color: var(--ant-color-text-tertiary);

      background: var(--ant-color-fill-tertiary);
    }
  `)}})),L,R,z,B,V,H=e((()=>{v(),L=t(i()),d(),C(),A(),P(),I(),R=t(a()),z=(e,t,n)=>e?.setOption(t,n),B=e=>{let{from:t,head:n,to:r}=e.state.selection.main,i=e.state.doc.lineAt(n);return{column:n-i.from+1,line:i.number,selectionLength:r-t}},V=(0,L.memo)(({value:e,filePath:t,language:n,style:r,className:i,readOnly:a=!1,showStatusBar:o=!1,onChange:s,onSave:c})=>{let l=(0,L.useRef)(null),u=(0,L.useRef)(null),d=(0,L.useRef)(s),p=(0,L.useRef)(c);d.current=s,p.current=c;let h=f(),[_,v]=(0,L.useState)(!0),[y,b]=(0,L.useState)(),x=(0,L.useMemo)(()=>t?k(t):void 0,[t]),C=x?.mode??n??``,[w]=(0,L.useState)(()=>S(e)),T=(0,L.useRef)({indent:w,lineWrapping:_,mode:C,readOnly:a});return(0,L.useEffect)(()=>{if(!l.current)return;let t=l.current,n=!1,r;return m().then(i=>{if(n||u.current)return;let a=T.current,o={autoCloseBrackets:!a.readOnly,foldGutter:!0,indentWithTabs:a.indent.useTabs,lineNumbers:!0,lineWrapping:a.lineWrapping,matchBrackets:!0,mode:a.mode,readOnly:a.readOnly,styleActiveLine:!0,tabSize:a.indent.size,theme:`default`,value:e},s=i.fromTextArea(t,o),c=s.view;c.dispatch({effects:s.optionHelper.theme.reconfigure(c.constructor.theme(g,{dark:h}))}),s.on(`change`,()=>{d.current?.(s.getValue())}),s.on(`keydown`,(e,t)=>{(t.metaKey||t.ctrlKey)&&t.key.toLowerCase()===`s`&&(t.preventDefault(),t.stopPropagation(),p.current?.())});let l=()=>b(B(c));l();let f=[`keyup`,`mouseup`,`focusin`];for(let e of f)c.dom.addEventListener(e,l);r=()=>{for(let e of f)c.dom.removeEventListener(e,l)},u.current=s}),()=>{n=!0,r?.(),u.current&&=(u.current.destroy(),null)}},[]),(0,L.useEffect)(()=>{let t=u.current;t&&t.getValue()!==e&&t.setValue(e)},[e]),(0,L.useEffect)(()=>{z(u.current,`mode`,C)},[C]),(0,L.useEffect)(()=>{z(u.current,`readOnly`,a),z(u.current,`autoCloseBrackets`,!a)},[a]),(0,L.useEffect)(()=>{z(u.current,`lineWrapping`,_)},[_]),(0,L.useEffect)(()=>{let e=u.current;if(!e)return;let t=e.view;t.dispatch({effects:e.optionHelper.theme.reconfigure(t.constructor.theme(g,{dark:h}))})},[h]),(0,R.jsxs)(`div`,{className:`${F.container} ${i??``}`.trim(),style:r,children:[(0,R.jsx)(`div`,{className:F.editorArea,children:(0,R.jsx)(`textarea`,{className:`cm-textarea`,ref:l})}),o&&(0,R.jsx)(N,{cursor:y,indent:w,languageLabel:x?.label??n??``,lineWrapping:_,readOnly:a,onLineWrappingChange:v})]})}),V.displayName=`CodeEditorPane`}));export{H as n,V as t};