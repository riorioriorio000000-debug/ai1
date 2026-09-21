import{n as e}from"../assets/rolldown-runtime-CMxvf4Kt.js";import{$ as t,A as n,B as r,C as i,D as a,E as o,F as s,G as c,H as l,I as u,J as d,K as f,L as p,M as m,N as h,O as g,P as _,Q as v,R as y,S as b,T as x,U as ee,V as te,W as S,X as C,Z as ne,a as re,b as ie,c as ae,d as oe,f as w,g as T,h as se,i as ce,j as le,k as E,l as ue,m as de,n as fe,o as D,p as O,q as k,r as pe,s as me,t as A,u as he,v as j,w as ge,x as _e,y as M,z as N}from"../assets/dist-C96Bw3e_.js";function ve(e,t){return t-e}function ye(e){let t=e[0].name,n=e.length,r=Math.min(4,n);for(let n=1;n<r;n++)t+=`, ${e[n].name}`;return t}function be(e){let t=e[0].time;for(let n=1,r=e.length;n<r;n++)t+=e[n].time;return t}function xe(e){for(let t=0,n=e.length;t<n;t++)if(e[t].forget)return!0;return!1}function Se(e,t){return e===t||e!==e&&t!==t}function Ce(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Ce(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function we(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Ce(e))&&(r&&(r+=` `),r+=t);return r}function Te(){return!1}function Ee(e){function t(t){return this.shouldComponentUpdate=Te,m(e,t)}return t.displayName=`Memo(${e.displayName||e.name})`,t.prototype.isReactComponent=!0,t._forwarded=!0,t}function De(e){let t=e.replace(/\s+/g,` `).trim(),n=[],r=``;for(let e=0;e<t.length;e++){let i=t[e];if(i===`=`&&t[e+1]===`>`){r.trim()&&n.push(r.trim()),n.push(`=>`),r=``,e++;continue}/[(){}[\];,<>:\?!]/.test(i)?(r.trim()&&n.push(r.trim()),n.push(i),r=``):/\s/.test(i)?(r.trim()&&n.push(r.trim()),r=``):r+=i}r.trim()&&n.push(r.trim());let i=[];for(let e=0;e<n.length;e++){let t=n[e],r=n[e+1];t===`(`&&r===`)`||t===`[`&&r===`]`||t===`{`&&r===`}`||t===`<`&&r===`>`?(i.push(t+r),e++):i.push(t)}let a=new Set,o=new Set;function s(e,t,n){let r=0;for(let a=n;a<i.length;a++){let n=i[a];if(n===e)r++;else if(n===t&&(r--,r===0))return a}return-1}for(let e=0;e<i.length;e++)if(i[e]===`(`){let t=s(`(`,`)`,e);if(t!==-1&&i[t+1]===`=>`)for(let n=e;n<=t;n++)a.add(n)}for(let e=1;e<i.length;e++){let t=i[e-1],n=i[e];if(/^[a-zA-Z0-9_$]+$/.test(t)&&n===`<`){let t=s(`<`,`>`,e);if(t!==-1)for(let n=e;n<=t;n++)o.add(n)}}let c=0,l=[],u=``;function d(){u.trim()&&l.push(u.replace(/\s+$/,``)),u=``}function f(){d(),u=`  `.repeat(c)}let p=[];function m(){return p.length?p[p.length-1]:null}function h(e,t=!1){u.trim()?t||/^[),;:\].}>]$/.test(e)?u+=e:u+=` ${e}`:u+=e}for(let e=0;e<i.length;e++){let t=i[e],n=i[e+1]||``;if([`(`,`{`,`[`,`<`].includes(t))h(t),p.push(t),t===`{`?(c++,f()):(t===`(`||t===`[`||t===`<`)&&(a.has(e)&&t===`(`||o.has(e)&&t===`<`||n!=={"(":`)`,"[":`]`,"<":`>`}[t]&&n!==`()`&&n!==`[]`&&n!==`<>`&&(c++,f()));else if([`)`,`}`,`]`,`>`].includes(t)){let n=m();t===`)`&&n===`(`||t===`]`&&n===`[`||t===`>`&&n===`<`?!(a.has(e)&&t===`)`)&&!(o.has(e)&&t===`>`)&&(c=Math.max(c-1,0),f()):t===`}`&&n===`{`&&(c=Math.max(c-1,0),f()),p.pop(),h(t),t===`}`&&f()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(t))h(t);else if(t===`=>`)h(t);else if(t===`;`)h(t,!0),f();else if(t===`,`){h(t,!0);let n=m();!(a.has(e)&&n===`(`)&&!(o.has(e)&&n===`<`)&&n&&[`{`,`[`,`(`,`<`].includes(n)&&f()}else h(t)}return d(),l.join(`
`).replace(/\n\s*\n+/g,`
`).trim()}function Oe(e,t=0){if(t<0)return`…`;switch(typeof e){case`function`:return e.toString();case`string`:return e;case`number`:case`boolean`:case`undefined`:return String(e);case`object`:break;default:return String(e)}if(e===null)return`null`;if(ji.has(e)){let t=ji.get(e);if(t!==void 0)return t}if(Array.isArray(e)){let t=e.length?`[${e.length}]`:`[]`;return ji.set(e,t),t}if(h(e)){let t=`<${N(e.type)??``} ${e.props?Object.keys(e.props).length:0}>`;return ji.set(e,t),t}if(Object.getPrototypeOf(e)===Object.prototype){let t=Object.keys(e),n=t.length?`{${t.length}}`:`{}`;return ji.set(e,n),n}let n=e&&typeof e==`object`?e.constructor:void 0;if(n&&typeof n==`function`&&n.name){let t=`${n.name}{\u2026}`;return ji.set(e,t),t}let r=`${Object.prototype.toString.call(e).slice(8,-1)}{\u2026}`;return ji.set(e,r),r}function ke(e,t){if(!e||!t)return;let n=e.memoizedValue,r={type:4,name:e.context.displayName??`Context.Provider`,value:n,contextType:Fi(e.context)};this.push(r)}function Ae(e,t,n){!Se(t,n)&&!ki(t,n)&&(this.isRequiredChange=!0)}function je(e){return String(ee(e))}function Me(e){let t=je(e),n=Ui.get(r(e));if(n)return n.get(t)}function Ne(e,t){let n=r(e.type),i=je(e),a=Ui.get(n);a||(a=new Map,Ui.set(n,a)),a.set(i,t)}function Pe(e,t){return t[0]-e[0]}function Fe(e){return[...e.entries()].sort(Pe)}function Ie([e,t]){let n=`${t.slice(0,$i).join(`, `)} \xD7${e}`;return n.length>ea&&(n=`${n.slice(0,ea)}\u2026`),n}function Le(e,t){let n=[];for(let t of e){let e=t.target;this.seenElements.has(e)||(this.seenElements.add(e),n.push(t))}n.length>0&&this.resolveNext&&(this.resolveNext(n),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(t.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}function Re(){let e,t;function n(){let r=null;Po=null,Po={},r=ko(Po);let i=performance.timeOrigin,a=performance.now();return e=requestAnimationFrame(()=>{t=setTimeout(()=>{let e=performance.now(),t=e-a,o=performance.timeOrigin;Go.push(e+o);let s=Go.filter(t=>e+o-t<=1e3),c=s.length;Go=s;let l=Ro!==null&&zo!==null?e+o-(zo+Ro)<100:null,u=Vo!==null&&Vo;if(t>Wo&&!l&&document.visibilityState===`visible`&&!u){let n=o+e,r=a+i;Io.getState().actions.addEvent({kind:`long-render`,id:Ge(),data:{endAt:n,startAt:r,meta:{fiberRenders:Po,latency:t,fps:c}}})}Ro=null,zo=null,r?.(),n()},0)}),r}let r=n();return()=>{r(),cancelAnimationFrame(e),clearTimeout(t)}}function ze(){Ts&&=(cancelAnimationFrame(Ts),null),Y?.parentNode&&Y.parentNode.removeChild(Y),Y=null,X=null}var Be,Ve,He,Ue,We,Ge,Ke,P,qe,Je,F,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,I,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,L,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt,R,Zt,Qt,$t,en,tn,nn,rn,z,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,B,wn,Tn,V,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,H,Ln,U,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,W,qn,Jn,Yn,Xn,Zn,G,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,K,Qa,$a,eo,to,no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo,ho,go,_o,vo,yo,bo,xo,So,Co,wo,To,Eo,Do,Oo,ko,Ao,jo,Mo,No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,q,Jo,Yo,J,Xo,Zo,Qo,$o,es,ts,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs,ws,Y,X,Ts,Z,Es,Ds,Os,ks,As,js,Ms,Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,oc,sc,cc,lc,uc,dc,fc,pc,mc,hc,gc,_c,vc,yc,bc,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc,Pc,Fc,Ic,Lc,Rc,zc,Bc,Vc,Hc,Q,$,Uc,Wc,Gc,Kc,qc,Jc,Yc,Xc,Zc,Qc,$c,el,tl=e((()=>{_(),w(),le(),ge(),oe(),re(),ce(),A(),Be=Object.defineProperty,Ve=(e,t,n)=>t in e?Be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,He=(e,t,n)=>Ve(e,typeof t==`symbol`?t:t+``,n),Array.prototype.toSorted||Object.defineProperty(Array.prototype,"toSorted",{value:function(e){return[...this].sort(e)},writable:!0,configurable:!0}),Ue=typeof window<`u`,We=e=>{let t=``,n=new Map;for(let t of e){let{forget:e,time:r,aggregatedCount:i,name:a}=t;n.has(i)||n.set(i,[]);let o=n.get(i);o&&o.push({name:a,forget:e,time:r??0})}let r=Array.from(n.keys()).sort(ve),i=[],a=0;for(let e of r){let t=n.get(e);if(!t)continue;let r=ye(t),o=be(t),s=xe(t);a+=o,t.length>4&&(r+=`…`),e>1&&(r+=` \xD7 ${e}`),s&&(r=`\u2728${r}`),i.push(r)}return t=i.join(`, `),t.length?(t.length>40&&(t=`${t.slice(0,40)}\u2026`),a>=.01&&(t+=` (${Number(a.toFixed(2))}ms)`),t):null},Ge=()=>Ue?(window.reactScanIdCounter===void 0&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):`0`,Ke=e=>{let t=e.createOscillator(),n=e.createGain();t.connect(n),n.connect(e.destination);let r={type:`sine`,freq:[392,600],duration:.3,gain:.12},i=r.freq,a=r.duration/i.length;i.forEach((n,r)=>{t.frequency.setValueAtTime(n,e.currentTime+r*a)}),t.type=r.type,n.gain.setValueAtTime(r.gain,e.currentTime),n.gain.setTargetAtTime(0,e.currentTime+r.duration*.7,.05),t.start(),t.stop(e.currentTime+r.duration)},P=ue(({size:e=15,name:t,fill:n=`currentColor`,stroke:r=`currentColor`,className:i,externalURL:a=``,style:o},s)=>{let c=Array.isArray(e)?e[0]:e,l=Array.isArray(e)?e[1]||e[0]:e,u=`${a}#${t}`;return D(`svg`,{ref:s,width:`${c}px`,height:`${l}px`,fill:n,stroke:r,className:i,style:{...o,minWidth:`${c}px`,maxWidth:`${c}px`,minHeight:`${l}px`,maxHeight:`${l}px`},children:[D(`title`,{children:t}),D(`use`,{href:u})]})}),qe=24,Je=600,F={width:550,height:350,initialHeight:400},Ye=240,Xe=`react-scan-widget-settings-v2`,Ze=`react-scan-widget-collapsed-v1`,Qe=`react-scan-widget-last-view-v1`,$e=`button, a, input, textarea, select, pre, [contenteditable], [data-react-scan-selectable]`,et=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},tt=(e,t)=>({classGroupId:e,validator:t}),nt=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),rt=`-`,it=[],at=`arbitrary..`,ot=e=>{let t=lt(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return ct(e);let n=e.split(rt);return st(n,+(n[0]===``&&n.length>1),t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?et(i,t):t:i||it}return n[e]||it}}},st=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=st(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(rt):e.slice(t).join(rt),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},ct=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?at+r:void 0})(),lt=e=>{let{theme:t,classGroups:n}=e;return ut(n,t)},ut=(e,t)=>{let n=nt();for(let r in e){let i=e[r];dt(i,n,r,t)}return n},dt=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];ft(i,t,n,r)}},ft=(e,t,n,r)=>{if(typeof e==`string`){pt(e,t,n);return}if(typeof e==`function`){mt(e,t,n,r);return}ht(e,t,n,r)},pt=(e,t,n)=>{let r=e===``?t:gt(t,e);r.classGroupId=n},mt=(e,t,n,r)=>{if(_t(e)){dt(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(tt(n,e))},ht=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];dt(o,gt(t,a),n,r)}},gt=(e,t)=>{let n=e,r=t.split(rt),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=nt(),n.nextPart.set(t,i)),n=i}return n},_t=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,vt=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},yt=`!`,bt=`:`,xt=[],St=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),Ct=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===bt){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(yt)?(c=s.slice(0,-1),l=!0):s.startsWith(yt)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return St(t,l,c,u)};if(t){let e=t+bt,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):St(xt,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},wt=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},Tt=e=>({cache:vt(e.cacheSize),parseClassName:Ct(e),sortModifiers:wt(e),...ot(e)}),Et=/\s+/,Dt=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a}=t,o=[],s=e.trim().split(Et),c=``;for(let e=s.length-1;e>=0;--e){let t=s[e],{isExternal:l,modifiers:u,hasImportantModifier:d,baseClassName:f,maybePostfixModifierPosition:p}=n(t);if(l){c=t+(c.length>0?` `+c:c);continue}let m=!!p,h=r(m?f.substring(0,p):f);if(!h){if(!m){c=t+(c.length>0?` `+c:c);continue}if(h=r(f),!h){c=t+(c.length>0?` `+c:c);continue}m=!1}let g=u.length===0?``:u.length===1?u[0]:a(u).join(`:`),_=d?g+yt:g,v=_+h;if(o.indexOf(v)>-1)continue;o.push(v);let y=i(h,m);for(let e=0;e<y.length;++e){let t=y[e];o.push(_+t)}c=t+(c.length>0?` `+c:c)}return c},Ot=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=kt(n))&&(i&&(i+=` `),i+=r);return i},kt=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=kt(e[r]))&&(n&&(n+=` `),n+=t);return n},At=(e,...t)=>{let n,r,i,a,o=o=>(n=Tt(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=Dt(e,n);return i(e,a),a};return a=o,(...e)=>a(Ot(...e))},jt=[],I=e=>{let t=t=>t[e]||jt;return t.isThemeGetter=!0,t},Mt=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Nt=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Pt=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,Ft=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,It=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Lt=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Rt=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,zt=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Bt=e=>Pt.test(e),L=e=>!!e&&!Number.isNaN(Number(e)),Vt=e=>!!e&&Number.isInteger(Number(e)),Ht=e=>e.endsWith(`%`)&&L(e.slice(0,-1)),Ut=e=>Ft.test(e),Wt=()=>!0,Gt=e=>It.test(e)&&!Lt.test(e),Kt=()=>!1,qt=e=>Rt.test(e),Jt=e=>zt.test(e),Yt=e=>!R(e)&&!z(e),Xt=e=>fn(e,gn,Kt),R=e=>Mt.test(e),Zt=e=>fn(e,_n,Gt),Qt=e=>fn(e,vn,L),$t=e=>fn(e,bn,Wt),en=e=>fn(e,yn,Kt),tn=e=>fn(e,mn,Kt),nn=e=>fn(e,hn,Jt),rn=e=>fn(e,xn,qt),z=e=>Nt.test(e),an=e=>pn(e,_n),on=e=>pn(e,yn),sn=e=>pn(e,mn),cn=e=>pn(e,gn),ln=e=>pn(e,hn),un=e=>pn(e,xn,!0),dn=e=>pn(e,bn,!0),fn=(e,t,n)=>{let r=Mt.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},pn=(e,t,n=!1)=>{let r=Nt.exec(e);return r?r[1]?t(r[1]):n:!1},mn=e=>e===`position`||e===`percentage`,hn=e=>e===`image`||e===`url`,gn=e=>e===`length`||e===`size`||e===`bg-size`,_n=e=>e===`length`,vn=e=>e===`number`,yn=e=>e===`family-name`,bn=e=>e===`number`||e===`weight`,xn=e=>e===`shadow`,Sn=()=>{let e=I(`color`),t=I(`font`),n=I(`text`),r=I(`font-weight`),i=I(`tracking`),a=I(`leading`),o=I(`breakpoint`),s=I(`container`),c=I(`spacing`),l=I(`radius`),u=I(`shadow`),d=I(`inset-shadow`),f=I(`text-shadow`),p=I(`drop-shadow`),m=I(`blur`),h=I(`perspective`),g=I(`aspect`),_=I(`ease`),v=I(`animate`),y=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],b=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],x=()=>[...b(),z,R],ee=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],te=()=>[`auto`,`contain`,`none`],S=()=>[z,R,c],C=()=>[Bt,`full`,`auto`,...S()],ne=()=>[Vt,`none`,`subgrid`,z,R],re=()=>[`auto`,{span:[`full`,Vt,z,R]},Vt,z,R],ie=()=>[Vt,`auto`,z,R],ae=()=>[`auto`,`min`,`max`,`fr`,z,R],oe=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],w=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],T=()=>[`auto`,...S()],se=()=>[Bt,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...S()],ce=()=>[Bt,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...S()],le=()=>[Bt,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...S()],E=()=>[e,z,R],ue=()=>[...b(),sn,tn,{position:[z,R]}],de=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],fe=()=>[`auto`,`cover`,`contain`,cn,Xt,{size:[z,R]}],D=()=>[Ht,an,Zt],O=()=>[``,`none`,`full`,l,z,R],k=()=>[``,L,an,Zt],pe=()=>[`solid`,`dashed`,`dotted`,`double`],me=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],A=()=>[L,Ht,sn,tn],he=()=>[``,`none`,m,z,R],j=()=>[`none`,L,z,R],ge=()=>[`none`,L,z,R],_e=()=>[L,z,R],M=()=>[Bt,`full`,...S()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[Ut],breakpoint:[Ut],color:[Wt],container:[Ut],"drop-shadow":[Ut],ease:[`in`,`out`,`in-out`],font:[Yt],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[Ut],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[Ut],shadow:[Ut],spacing:[`px`,L],text:[Ut],"text-shadow":[Ut],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,Bt,R,z,g]}],container:[`container`],columns:[{columns:[L,R,z,s]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:x()}],overflow:[{overflow:ee()}],"overflow-x":[{"overflow-x":ee()}],"overflow-y":[{"overflow-y":ee()}],overscroll:[{overscroll:te()}],"overscroll-x":[{"overscroll-x":te()}],"overscroll-y":[{"overscroll-y":te()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:C()}],"inset-x":[{"inset-x":C()}],"inset-y":[{"inset-y":C()}],start:[{"inset-s":C(),start:C()}],end:[{"inset-e":C(),end:C()}],"inset-bs":[{"inset-bs":C()}],"inset-be":[{"inset-be":C()}],top:[{top:C()}],right:[{right:C()}],bottom:[{bottom:C()}],left:[{left:C()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[Vt,`auto`,z,R]}],basis:[{basis:[Bt,`full`,`auto`,s,...S()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[L,Bt,`auto`,`initial`,`none`,R]}],grow:[{grow:[``,L,z,R]}],shrink:[{shrink:[``,L,z,R]}],order:[{order:[Vt,`first`,`last`,`none`,z,R]}],"grid-cols":[{"grid-cols":ne()}],"col-start-end":[{col:re()}],"col-start":[{"col-start":ie()}],"col-end":[{"col-end":ie()}],"grid-rows":[{"grid-rows":ne()}],"row-start-end":[{row:re()}],"row-start":[{"row-start":ie()}],"row-end":[{"row-end":ie()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":ae()}],"auto-rows":[{"auto-rows":ae()}],gap:[{gap:S()}],"gap-x":[{"gap-x":S()}],"gap-y":[{"gap-y":S()}],"justify-content":[{justify:[...oe(),`normal`]}],"justify-items":[{"justify-items":[...w(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...w()]}],"align-content":[{content:[`normal`,...oe()]}],"align-items":[{items:[...w(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...w(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":oe()}],"place-items":[{"place-items":[...w(),`baseline`]}],"place-self":[{"place-self":[`auto`,...w()]}],p:[{p:S()}],px:[{px:S()}],py:[{py:S()}],ps:[{ps:S()}],pe:[{pe:S()}],pbs:[{pbs:S()}],pbe:[{pbe:S()}],pt:[{pt:S()}],pr:[{pr:S()}],pb:[{pb:S()}],pl:[{pl:S()}],m:[{m:T()}],mx:[{mx:T()}],my:[{my:T()}],ms:[{ms:T()}],me:[{me:T()}],mbs:[{mbs:T()}],mbe:[{mbe:T()}],mt:[{mt:T()}],mr:[{mr:T()}],mb:[{mb:T()}],ml:[{ml:T()}],"space-x":[{"space-x":S()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":S()}],"space-y-reverse":[`space-y-reverse`],size:[{size:se()}],"inline-size":[{inline:[`auto`,...ce()]}],"min-inline-size":[{"min-inline":[`auto`,...ce()]}],"max-inline-size":[{"max-inline":[`none`,...ce()]}],"block-size":[{block:[`auto`,...le()]}],"min-block-size":[{"min-block":[`auto`,...le()]}],"max-block-size":[{"max-block":[`none`,...le()]}],w:[{w:[s,`screen`,...se()]}],"min-w":[{"min-w":[s,`screen`,`none`,...se()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...se()]}],h:[{h:[`screen`,`lh`,...se()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...se()]}],"max-h":[{"max-h":[`screen`,`lh`,...se()]}],"font-size":[{text:[`base`,n,an,Zt]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,dn,$t]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,Ht,R]}],"font-family":[{font:[on,en,t]}],"font-features":[{"font-features":[R]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,z,R]}],"line-clamp":[{"line-clamp":[L,`none`,z,Qt]}],leading:[{leading:[a,...S()]}],"list-image":[{"list-image":[`none`,z,R]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,z,R]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:E()}],"text-color":[{text:E()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...pe(),`wavy`]}],"text-decoration-thickness":[{decoration:[L,`from-font`,`auto`,z,Zt]}],"text-decoration-color":[{decoration:E()}],"underline-offset":[{"underline-offset":[L,`auto`,z,R]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:S()}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,z,R]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,z,R]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:ue()}],"bg-repeat":[{bg:de()}],"bg-size":[{bg:fe()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},Vt,z,R],radial:[``,z,R],conic:[Vt,z,R]},ln,nn]}],"bg-color":[{bg:E()}],"gradient-from-pos":[{from:D()}],"gradient-via-pos":[{via:D()}],"gradient-to-pos":[{to:D()}],"gradient-from":[{from:E()}],"gradient-via":[{via:E()}],"gradient-to":[{to:E()}],rounded:[{rounded:O()}],"rounded-s":[{"rounded-s":O()}],"rounded-e":[{"rounded-e":O()}],"rounded-t":[{"rounded-t":O()}],"rounded-r":[{"rounded-r":O()}],"rounded-b":[{"rounded-b":O()}],"rounded-l":[{"rounded-l":O()}],"rounded-ss":[{"rounded-ss":O()}],"rounded-se":[{"rounded-se":O()}],"rounded-ee":[{"rounded-ee":O()}],"rounded-es":[{"rounded-es":O()}],"rounded-tl":[{"rounded-tl":O()}],"rounded-tr":[{"rounded-tr":O()}],"rounded-br":[{"rounded-br":O()}],"rounded-bl":[{"rounded-bl":O()}],"border-w":[{border:k()}],"border-w-x":[{"border-x":k()}],"border-w-y":[{"border-y":k()}],"border-w-s":[{"border-s":k()}],"border-w-e":[{"border-e":k()}],"border-w-bs":[{"border-bs":k()}],"border-w-be":[{"border-be":k()}],"border-w-t":[{"border-t":k()}],"border-w-r":[{"border-r":k()}],"border-w-b":[{"border-b":k()}],"border-w-l":[{"border-l":k()}],"divide-x":[{"divide-x":k()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":k()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[...pe(),`hidden`,`none`]}],"divide-style":[{divide:[...pe(),`hidden`,`none`]}],"border-color":[{border:E()}],"border-color-x":[{"border-x":E()}],"border-color-y":[{"border-y":E()}],"border-color-s":[{"border-s":E()}],"border-color-e":[{"border-e":E()}],"border-color-bs":[{"border-bs":E()}],"border-color-be":[{"border-be":E()}],"border-color-t":[{"border-t":E()}],"border-color-r":[{"border-r":E()}],"border-color-b":[{"border-b":E()}],"border-color-l":[{"border-l":E()}],"divide-color":[{divide:E()}],"outline-style":[{outline:[...pe(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[L,z,R]}],"outline-w":[{outline:[``,L,an,Zt]}],"outline-color":[{outline:E()}],shadow:[{shadow:[``,`none`,u,un,rn]}],"shadow-color":[{shadow:E()}],"inset-shadow":[{"inset-shadow":[`none`,d,un,rn]}],"inset-shadow-color":[{"inset-shadow":E()}],"ring-w":[{ring:k()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:E()}],"ring-offset-w":[{"ring-offset":[L,Zt]}],"ring-offset-color":[{"ring-offset":E()}],"inset-ring-w":[{"inset-ring":k()}],"inset-ring-color":[{"inset-ring":E()}],"text-shadow":[{"text-shadow":[`none`,f,un,rn]}],"text-shadow-color":[{"text-shadow":E()}],opacity:[{opacity:[L,z,R]}],"mix-blend":[{"mix-blend":[...me(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":me()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[L]}],"mask-image-linear-from-pos":[{"mask-linear-from":A()}],"mask-image-linear-to-pos":[{"mask-linear-to":A()}],"mask-image-linear-from-color":[{"mask-linear-from":E()}],"mask-image-linear-to-color":[{"mask-linear-to":E()}],"mask-image-t-from-pos":[{"mask-t-from":A()}],"mask-image-t-to-pos":[{"mask-t-to":A()}],"mask-image-t-from-color":[{"mask-t-from":E()}],"mask-image-t-to-color":[{"mask-t-to":E()}],"mask-image-r-from-pos":[{"mask-r-from":A()}],"mask-image-r-to-pos":[{"mask-r-to":A()}],"mask-image-r-from-color":[{"mask-r-from":E()}],"mask-image-r-to-color":[{"mask-r-to":E()}],"mask-image-b-from-pos":[{"mask-b-from":A()}],"mask-image-b-to-pos":[{"mask-b-to":A()}],"mask-image-b-from-color":[{"mask-b-from":E()}],"mask-image-b-to-color":[{"mask-b-to":E()}],"mask-image-l-from-pos":[{"mask-l-from":A()}],"mask-image-l-to-pos":[{"mask-l-to":A()}],"mask-image-l-from-color":[{"mask-l-from":E()}],"mask-image-l-to-color":[{"mask-l-to":E()}],"mask-image-x-from-pos":[{"mask-x-from":A()}],"mask-image-x-to-pos":[{"mask-x-to":A()}],"mask-image-x-from-color":[{"mask-x-from":E()}],"mask-image-x-to-color":[{"mask-x-to":E()}],"mask-image-y-from-pos":[{"mask-y-from":A()}],"mask-image-y-to-pos":[{"mask-y-to":A()}],"mask-image-y-from-color":[{"mask-y-from":E()}],"mask-image-y-to-color":[{"mask-y-to":E()}],"mask-image-radial":[{"mask-radial":[z,R]}],"mask-image-radial-from-pos":[{"mask-radial-from":A()}],"mask-image-radial-to-pos":[{"mask-radial-to":A()}],"mask-image-radial-from-color":[{"mask-radial-from":E()}],"mask-image-radial-to-color":[{"mask-radial-to":E()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[L]}],"mask-image-conic-from-pos":[{"mask-conic-from":A()}],"mask-image-conic-to-pos":[{"mask-conic-to":A()}],"mask-image-conic-from-color":[{"mask-conic-from":E()}],"mask-image-conic-to-color":[{"mask-conic-to":E()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:ue()}],"mask-repeat":[{mask:de()}],"mask-size":[{mask:fe()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,z,R]}],filter:[{filter:[``,`none`,z,R]}],blur:[{blur:he()}],brightness:[{brightness:[L,z,R]}],contrast:[{contrast:[L,z,R]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,un,rn]}],"drop-shadow-color":[{"drop-shadow":E()}],grayscale:[{grayscale:[``,L,z,R]}],"hue-rotate":[{"hue-rotate":[L,z,R]}],invert:[{invert:[``,L,z,R]}],saturate:[{saturate:[L,z,R]}],sepia:[{sepia:[``,L,z,R]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,z,R]}],"backdrop-blur":[{"backdrop-blur":he()}],"backdrop-brightness":[{"backdrop-brightness":[L,z,R]}],"backdrop-contrast":[{"backdrop-contrast":[L,z,R]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,L,z,R]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[L,z,R]}],"backdrop-invert":[{"backdrop-invert":[``,L,z,R]}],"backdrop-opacity":[{"backdrop-opacity":[L,z,R]}],"backdrop-saturate":[{"backdrop-saturate":[L,z,R]}],"backdrop-sepia":[{"backdrop-sepia":[``,L,z,R]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":S()}],"border-spacing-x":[{"border-spacing-x":S()}],"border-spacing-y":[{"border-spacing-y":S()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,z,R]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[L,`initial`,z,R]}],ease:[{ease:[`linear`,`initial`,_,z,R]}],delay:[{delay:[L,z,R]}],animate:[{animate:[`none`,v,z,R]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[h,z,R]}],"perspective-origin":[{"perspective-origin":x()}],rotate:[{rotate:j()}],"rotate-x":[{"rotate-x":j()}],"rotate-y":[{"rotate-y":j()}],"rotate-z":[{"rotate-z":j()}],scale:[{scale:ge()}],"scale-x":[{"scale-x":ge()}],"scale-y":[{"scale-y":ge()}],"scale-z":[{"scale-z":ge()}],"scale-3d":[`scale-3d`],skew:[{skew:_e()}],"skew-x":[{"skew-x":_e()}],"skew-y":[{"skew-y":_e()}],transform:[{transform:[z,R,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:x()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:M()}],"translate-x":[{"translate-x":M()}],"translate-y":[{"translate-y":M()}],"translate-z":[{"translate-z":M()}],"translate-none":[`translate-none`],accent:[{accent:E()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:E()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,z,R]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scroll-m":[{"scroll-m":S()}],"scroll-mx":[{"scroll-mx":S()}],"scroll-my":[{"scroll-my":S()}],"scroll-ms":[{"scroll-ms":S()}],"scroll-me":[{"scroll-me":S()}],"scroll-mbs":[{"scroll-mbs":S()}],"scroll-mbe":[{"scroll-mbe":S()}],"scroll-mt":[{"scroll-mt":S()}],"scroll-mr":[{"scroll-mr":S()}],"scroll-mb":[{"scroll-mb":S()}],"scroll-ml":[{"scroll-ml":S()}],"scroll-p":[{"scroll-p":S()}],"scroll-px":[{"scroll-px":S()}],"scroll-py":[{"scroll-py":S()}],"scroll-ps":[{"scroll-ps":S()}],"scroll-pe":[{"scroll-pe":S()}],"scroll-pbs":[{"scroll-pbs":S()}],"scroll-pbe":[{"scroll-pbe":S()}],"scroll-pt":[{"scroll-pt":S()}],"scroll-pr":[{"scroll-pr":S()}],"scroll-pb":[{"scroll-pb":S()}],"scroll-pl":[{"scroll-pl":S()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,z,R]}],fill:[{fill:[`none`,...E()]}],"stroke-w":[{stroke:[L,an,Zt,Qt]}],stroke:[{stroke:[`none`,...E()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`right`,`left`],"inset-y":[`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`pr`,`pl`],py:[`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`mr`,`ml`],my:[`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-r`,`border-w-l`],"border-w-y":[`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-r`,`border-color-l`],"border-color-y":[`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}},Cn=At(Sn),B=(...e)=>Cn(we(e)),typeof navigator<`u`&&navigator.userAgent.includes(`Firefox`),wn=(e,t)=>{let n=0;return r=>{let i=Date.now();if(i-n>=t)return n=i,e(r)}},Tn=e=>{if(!Ue)return null;try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}},V=(e,t)=>{if(Ue)try{window.localStorage.setItem(e,JSON.stringify(t))}catch{}},En=e=>{if(Ue)try{window.localStorage.removeItem(e)}catch{}},Dn=24,On=12,kn=e=>{if(!e)return{name:`Unknown`,wrappers:[],wrapperTypes:[]};let{tag:t,type:n,elementType:r}=e,i=N(n),a=[],o=[];if(f(e)||t===15||t===14||n?.$$typeof===Symbol.for(`react.memo`)||r?.$$typeof===Symbol.for(`react.memo`)){let t=f(e);o.push({type:`memo`,title:t?`This component has been auto-memoized by the React Compiler.`:`Memoized component that skips re-renders if props are the same`,compiler:t})}if(t===Dn&&o.push({type:`lazy`,title:`Lazily loaded component that supports code splitting`}),t===13&&o.push({type:`suspense`,title:`Component that can suspend while content is loading`}),t===On&&o.push({type:`profiler`,title:`Component that measures rendering performance`}),typeof i==`string`){let e=/^(\w+)\((.*)\)$/,t=i;for(;e.test(t);){let n=t.match(e);if(n?.[1]&&n?.[2])a.unshift(n[1]),t=n[2];else break}i=t}return{name:i||`Unknown`,wrappers:a,wrapperTypes:o}},An=e=>typeof e==`number`&&Number.isFinite(e)&&e>=0,jn=e=>!!e&&typeof e==`object`&&!Array.isArray(e),Mn=()=>{let e=$.options.value.safeArea;if(An(e))return{top:e,right:e,bottom:e,left:e};if(jn(e)){let t=e.top,n=e.right,r=e.bottom,i=e.left;return{top:An(t)?t:qe,right:An(n)?n:qe,bottom:An(r)?r:qe,left:An(i)?i:qe}}return{top:qe,right:qe,bottom:qe,left:qe}},Nn=j(!1),Pn=j(null),Fn=()=>({corner:`bottom-right`,dimensions:{isFullWidth:!1,isFullHeight:!1,width:F.width,height:F.height,position:{x:qe,y:qe}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:F.width,height:F.height,position:{x:qe,y:qe}},componentsTree:{width:Ye}}),Fn(),In=()=>{let e=Fn(),t=Tn(Xe);return t?{corner:t.corner??e.corner,dimensions:t.dimensions??e.dimensions,lastDimensions:t.lastDimensions??t.dimensions??e.lastDimensions,componentsTree:t.componentsTree??e.componentsTree}:(V(Xe,{corner:e.corner,dimensions:e.dimensions,lastDimensions:e.lastDimensions,componentsTree:e.componentsTree}),e)},H=j(In()),Ln=()=>{if(!Ue)return;let{dimensions:e}=H.value,{width:t,height:n,position:r}=e,i=Mn();H.value={...H.value,dimensions:{isFullWidth:t>=window.innerWidth-i.left-i.right,isFullHeight:n>=window.innerHeight-i.top-i.bottom,width:t,height:n,position:r}}},U=j({view:`none`}),Rn=Tn(Ze),zn=j(Rn??null),Bn=e=>{let{count:t,getScrollElement:n,estimateSize:r,overscan:a=5}=e,[o,s]=b(0),[c,l]=b(0),u=M(),d=M(null),f=M(null),p=r(),m=x(e=>{d.current&&l((e?.[0])?.contentRect.height??d.current.getBoundingClientRect().height)},[]),h=x(()=>{f.current!==null&&cancelAnimationFrame(f.current),f.current=requestAnimationFrame(()=>{m(),f.current=null})},[m]);i(()=>{let e=n();if(!e)return;d.current=e;let t=()=>{d.current&&s(d.current.scrollTop)};m(),u.current||=new ResizeObserver(()=>{h()}),u.current.observe(e),e.addEventListener(`scroll`,t,{passive:!0});let r=new MutationObserver(h);return r.observe(e,{attributes:!0,childList:!0,subtree:!0}),()=>{e.removeEventListener(`scroll`,t),u.current&&u.current.disconnect(),r.disconnect(),f.current!==null&&cancelAnimationFrame(f.current)}},[n,m,h]);let g=ie(()=>{let e=Math.floor(o/p),n=Math.ceil(c/p);return{start:Math.max(0,e-a),end:Math.min(t,e+n+a)}},[o,p,c,t,a]);return{virtualItems:ie(()=>{let e=[];for(let t=g.start;t<g.end;t++)e.push({key:t,index:t,start:t*p});return e},[g,p]),totalSize:t*p,scrollTop:o,containerHeight:c}},Vn=e=>{let t=[],n=e;for(;n;){let e=n.elementType,r=typeof e==`function`?e.displayName||e.name:typeof e==`string`?e:`Unknown`,i=n.index===void 0?``:`[${n.index}]`;t.unshift(`${r}${i}`),n=n.return??null}return t.join(`::`)},Hn=new WeakMap,Un=(e,t)=>{let n=t.bind(null,e);return document.addEventListener(`scroll`,n,{passive:!0,capture:!0}),()=>{document.removeEventListener(`scroll`,n,{capture:!0})}},Wn={activeFlashes:new Map,create(e){let t=e.querySelector(`.react-scan-flash-overlay`),n=t instanceof HTMLElement?t:(()=>{let t=document.createElement(`div`);t.className=`react-scan-flash-overlay`,e.appendChild(t);let n=Un(e,()=>{e.querySelector(`.react-scan-flash-overlay`)&&this.create(e)});return this.activeFlashes.set(e,{element:e,overlay:t,scrollCleanup:n}),t})(),r=Hn.get(n);r&&(clearTimeout(r),Hn.delete(n)),requestAnimationFrame(()=>{n.style.transition=`none`,n.style.opacity=`0.9`;let t=setTimeout(()=>{n.style.transition=`opacity 150ms ease-out`,n.style.opacity=`0`;let t=setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n);let t=this.activeFlashes.get(e);t?.scrollCleanup&&t.scrollCleanup(),this.activeFlashes.delete(e),Hn.delete(n)},150);Hn.set(n,t)},300);Hn.set(n,t)})},cleanup(e){let t=this.activeFlashes.get(e);if(t){let n=Hn.get(t.overlay);n&&(clearTimeout(n),Hn.delete(t.overlay)),t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.scrollCleanup&&t.scrollCleanup(),this.activeFlashes.delete(e)}},cleanupAll(){for(let[,e]of this.activeFlashes)this.cleanup(e.element)}},Gn=1e3,Kn={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},W=j(Kn),qn=j(0),Jn=[],Yn=null,Xn=()=>{if(Jn.length===0)return;let e=[...Jn],{updates:t,totalUpdates:n,currentIndex:r,isViewingHistory:i}=W.value,a=[...t],o=n;for(let{update:t}of e)a.length>=Gn&&a.shift(),a.push(t),o++;let s=Math.max(0,o-Gn),c;c=i?r===n-1?a.length-1:r===0?0:s===0?r:r-1:a.length-1;let l=e[e.length-1];W.value={...W.value,latestFiber:l.fiber,updates:a,totalUpdates:o,windowOffset:s,currentIndex:c,isViewingHistory:i},Jn=Jn.slice(e.length)},Zn={showTimeline:()=>{W.value={...W.value,isVisible:!0}},hideTimeline:()=>{W.value={...W.value,isVisible:!1,currentIndex:W.value.updates.length-1}},updateFrame:(e,t)=>{W.value={...W.value,currentIndex:e,isViewingHistory:t}},updatePlaybackSpeed:e=>{W.value={...W.value,playbackSpeed:e}},addUpdate:(e,t)=>{if(Jn.push({update:e,fiber:t}),!Yn){let e=()=>{Xn(),Yn=null,Jn.length>0&&(Yn=setTimeout(e,96))};Yn=setTimeout(e,96)}},reset:()=>{Yn&&=(clearTimeout(Yn),null),Jn=[],W.value=Kn}},G=j({query:``,matches:[],currentMatchIndex:-1}),Qn=j(!1),$n=(e,t=0,n=null)=>e.reduce((e,r,i)=>{let a=r.element?Vn(r.fiber):`${n}-${i}`,o=r.fiber?.type?Me(r.fiber):void 0,s={...r,depth:t,nodeId:a,parentId:n,fiber:r.fiber,renderData:o};return e.push(s),r.children?.length&&e.push(...$n(r.children,t+1,a)),e},[]),er=e=>e.reduce((e,t)=>Math.max(e,t.depth),0),tr=(e,t)=>{if(t<=0)return 24;let n=Math.max(0,e-Ye);if(n<24)return 0;let r=Math.min(n*.3,t*24)/t;return Math.max(0,Math.min(24,r))},nr=[`memo`,`forwardRef`,`lazy`,`suspense`],rr=e=>{let t=e.match(/\[(.*?)\]/);if(!t)return null;let n=[],r=t[1].split(`,`);for(let e of r){let t=e.trim().toLowerCase();t&&n.push(t)}return n},ir=e=>{if(e.length===0)return!1;for(let t of e){let e=!1;for(let n of nr)if(n.toLowerCase().includes(t)){e=!0;break}if(!e)return!1}return!0},ar=(e,t)=>{if(e.length===0)return!0;if(!t.length)return!1;for(let n of e){let e=!1;for(let r of t)if(r.type.toLowerCase().includes(n)){e=!0;break}if(!e)return!1}return!0},or=(e,t)=>ie(()=>{let{query:n,matches:r}=t,i=r.some(t=>t.nodeId===e.nodeId),a=rr(n)||[],o=n?n.replace(/\[.*?\]/,``).trim():``;if(!n||!i)return{highlightedText:D(`span`,{className:`truncate`,children:e.label}),typeHighlight:!1};let s=!0;if(a.length>0)if(!e.fiber)s=!1;else{let{wrapperTypes:t}=kn(e.fiber);s=ar(a,t)}let c=D(`span`,{className:`truncate`,children:e.label});if(o)try{if(o.startsWith(`/`)&&o.endsWith(`/`)){let t=o.slice(1,-1),n=RegExp(`(${t})`,`i`),r=e.label.split(n);c=D(`span`,{className:`tree-node-search-highlight`,children:r.map((t,i)=>n.test(t)?D(`span`,{className:B(`regex`,{start:n.test(t)&&i===0,middle:n.test(t)&&i%2==1,end:n.test(t)&&i===r.length-1,"!ml-0":i===1}),children:t},`${e.nodeId}-${t}`):t)})}else{let t=e.label.toLowerCase(),n=o.toLowerCase(),r=t.indexOf(n);r>=0&&(c=D(`span`,{className:`tree-node-search-highlight`,children:[e.label.slice(0,r),D(`span`,{className:`single`,children:e.label.slice(r,r+o.length)}),e.label.slice(r+o.length)]}))}}catch{}return{highlightedText:c,typeHighlight:s&&a.length>0}},[e.label,e.nodeId,e.fiber,t]),sr=e=>e>0?e<.1-2**-52?`< 0.1`:e<1e3?Number(e.toFixed(1)).toString():`${(e/1e3).toFixed(1)}k`:`0`,cr=({node:e,nodeIndex:t,hasChildren:n,isCollapsed:r,handleTreeNodeClick:a,handleTreeNodeToggle:o,searchValue:s})=>{let c=M(null),l=M(e.renderData?.renderCount??0),{highlightedText:u,typeHighlight:d}=or(e,s);i(()=>{let t=e.renderData?.renderCount,n=c.current;!n||!l.current||!t||l.current===t||(n.classList.remove(`count-flash`),n.offsetWidth,n.classList.add(`count-flash`),l.current=t)},[e.renderData?.renderCount]);let f=ie(()=>{if(!e.renderData)return null;let{selfTime:t,totalTime:n,renderCount:r}=e.renderData;return r?D(`span`,{className:B(`flex items-center gap-x-0.5 ml-1.5`,`text-[10px] text-neutral-400`),children:D(`span`,{ref:c,title:`Self time: ${sr(t)}ms
Total time: ${sr(n)}ms`,className:`count-badge`,children:[`×`,r]})}):null},[e.renderData]),p=ie(()=>{if(!e.fiber)return null;let{wrapperTypes:t}=kn(e.fiber),n=t[0];return D(`span`,{className:B(`flex items-center gap-x-1`,`text-[10px] text-neutral-400 tracking-wide`,`overflow-hidden`),children:[n&&D(E,{children:[D(`span`,{title:n?.title,className:B(`rounded py-[1px] px-1`,`bg-neutral-700 text-neutral-300`,`truncate`,n.type===`memo`&&`bg-[#8e61e3] text-white`,d&&`bg-yellow-300 text-black`),children:n.type},n.type),n.compiler&&D(`span`,{className:`text-yellow-300 ml-1`,children:`✨`})]}),t.length>1&&`\xD7${t.length}`,f]})},[e.fiber,d,f]);return D(`button`,{type:`button`,title:e.title,"data-index":t,className:B(`flex items-center gap-x-1`,`pl-1 pr-2`,`w-full h-7`,`text-left`,`rounded`,`cursor-pointer select-none`),onClick:a,children:[D(`button`,{type:`button`,"data-index":t,onClick:o,className:B(`w-6 h-6 flex items-center justify-center`,`text-left`),children:n&&D(P,{name:`icon-chevron-right`,size:12,className:B(`transition-transform`,!r&&`rotate-90`)})}),u,p]})},lr=()=>{let e=M(null),t=M(null),n=M(null),r=M(null),a=M(null),o=M(0),s=M(!1),c=M(!1),l=M(null),[u,d]=b([]),[f,p]=b(new Set),[m,h]=b(void 0),[g,_]=b(G.value),v=ie(()=>{let e=[],t=u,n=new Map(t.map(e=>[e.nodeId,e]));for(let r of t){let t=!0,i=r;for(;i.parentId;){let e=n.get(i.parentId);if(!e)break;if(f.has(e.nodeId)){t=!1;break}i=e}t&&e.push(r)}return e},[f,u]),{virtualItems:y,totalSize:ee}=Bn({count:v.length,getScrollElement:()=>e.current,estimateSize:()=>28,overscan:5}),te=x(t=>{var n;s.current=!0,(n=r.current)==null||n.blur(),Qn.value=!0;let{parentCompositeFiber:i}=Wr(t);if(!i)return;Q.inspectState.value={kind:`focused`,focusedDomElement:t,fiber:i};let a=v.findIndex(e=>e.element===t);if(a!==-1){h(a);let t=a*28,n=e.current;if(n){let e=n.clientHeight,r=n.scrollTop;(t<r||t+28>r+e)&&n.scrollTo({top:Math.max(0,t-e/2),behavior:`instant`})}}},[v]),S=x(e=>{let t=e.currentTarget,n=Number(t.dataset.index);if(Number.isNaN(n))return;let r=v[n].element;r&&te(r)},[v,te]),C=x(e=>{p(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},[]),ne=x(e=>{e.stopPropagation();let t=e.target,n=Number(t.dataset.index);if(Number.isNaN(n))return;let r=v[n].nodeId;C(r)},[v,C]),re=x(t=>{var r,i,a,o,s;(r=n.current)==null||r.classList.remove(`!border-red-500`);let c=[];if(!t){G.value={query:t,matches:c,currentMatchIndex:-1};return}if(t.includes(`[`)&&!t.includes(`]`)&&t.length>t.indexOf(`[`)+1){(i=n.current)==null||i.classList.add(`!border-red-500`);return}let l=rr(t)||[];if(t.includes(`[`)&&!ir(l)){(a=n.current)==null||a.classList.add(`!border-red-500`);return}let d=t.replace(/\[.*?\]/,``).trim(),f=/^\/.*\/$/.test(d),p=e=>!1;if(d.startsWith(`/`)&&!f&&d.length>1){(o=n.current)==null||o.classList.add(`!border-red-500`);return}if(f)try{let e=d.slice(1,-1),t=new RegExp(e,`i`);p=e=>t.test(e)}catch{(s=n.current)==null||s.classList.add(`!border-red-500`);return}else if(d){let e=d.toLowerCase();p=t=>t.toLowerCase().includes(e)}for(let e of u){let t=!0;if(d&&(t=p(e.label)),t&&l.length>0)if(!e.fiber)t=!1;else{let{wrapperTypes:n}=kn(e.fiber);t=ar(l,n)}t&&c.push(e)}if(G.value={query:t,matches:c,currentMatchIndex:c.length>0?0:-1},c.length>0){let t=c[0],n=v.findIndex(e=>e.nodeId===t.nodeId);if(n!==-1){let t=n*28,r=e.current;if(r){let e=r.clientHeight;r.scrollTo({top:Math.max(0,t-e/2),behavior:`instant`})}}}},[u,v]),ae=x(e=>{let t=e.currentTarget;t&&re(t.value)},[re]),oe=x(t=>{let{matches:n,currentMatchIndex:r}=G.value;if(n.length===0)return;let i=t===`next`?(r+1)%n.length:(r-1+n.length)%n.length;G.value={...G.value,currentMatchIndex:i};let a=n[i],o=v.findIndex(e=>e.nodeId===a.nodeId);if(o!==-1){h(o);let t=o*28,n=e.current;if(n){let e=n.clientHeight;n.scrollTo({top:Math.max(0,t-e/2),behavior:`instant`})}}},[v]),w=x(n=>{if(t.current&&(t.current.style.width=`${n}px`),e.current){e.current.style.width=`${n}px`;let t=tr(n,o.current);e.current.style.setProperty(`--indentation-size`,`${t}px`)}},[]),T=x(e=>{if(!l.current)return;let t=H.value.dimensions.width,n=Math.floor(t-Ye/2);l.current.classList.remove(`cursor-ew-resize`,`cursor-w-resize`,`cursor-e-resize`),e<=Ye?l.current.classList.add(`cursor-w-resize`):e>=n?l.current.classList.add(`cursor-e-resize`):l.current.classList.add(`cursor-ew-resize`)},[]),se=x(t=>{if(t.preventDefault(),t.stopPropagation(),!e.current)return;e.current.style.setProperty(`pointer-events`,`none`),c.current=!0;let n=t.clientX,r=e.current.offsetWidth,i=H.value.dimensions.width,a=Math.floor(i-Ye/2);T(r);let o=e=>{let t=r+(n-e.clientX);T(t),w(Math.min(a,Math.max(Ye,t)))},s=()=>{e.current&&(e.current.style.removeProperty(`pointer-events`),document.removeEventListener(`pointermove`,o),document.removeEventListener(`pointerup`,s),H.value={...H.value,componentsTree:{...H.value.componentsTree,width:e.current.offsetWidth}},V(Xe,H.value),c.current=!1)};document.addEventListener(`pointermove`,o),document.addEventListener(`pointerup`,s)},[w,T]);i(()=>{if(!e.current)return;let t=e.current.offsetWidth;return T(t),H.subscribe(()=>{e.current&&T(e.current.offsetWidth)})},[T]);let ce=x(()=>{s.current=!1},[]);return i(()=>{let t=!0,n=e=>{let t=new Map,n=[];for(let{element:n,name:r,fiber:i}of e){if(!n)continue;let e=r,{name:a,wrappers:o}=kn(i);a&&(e=o.length>0?`${o.join(`(`)}(${a})${`)`.repeat(o.length)}`:a),t.set(n,{label:a||r,title:e,children:[],element:n,fiber:i})}for(let{element:r,depth:i}of e){if(!r)continue;let e=t.get(r);if(e)if(i===0)n.push(e);else{let n=r.parentElement;for(;n;){let r=t.get(n);if(r){r.children=r.children||[],r.children.push(e);break}n=n.parentElement}}}return n},r=()=>{let r=a.current;if(!r)return;let i=n(Yr());if(i.length>0){let n=$n(i);if(o.current=er(n),w(H.value.componentsTree.width),d(n),t){t=!1;let i=n.findIndex(e=>e.element===r);if(i!==-1){let t=i*28,n=e.current;n&&setTimeout(()=>{n.scrollTo({top:t,behavior:`instant`})},96)}}}},i=Q.inspectState.subscribe(e=>{if(e.kind===`focused`){if(Qn.value)return;re(``),a.current=e.focusedDomElement,r()}}),s=0,l=qn.subscribe(()=>{if(Q.inspectState.value.kind===`focused`){if(cancelAnimationFrame(s),c.current)return;s=requestAnimationFrame(()=>{Qn.value=!1,r()})}});return()=>{i(),l(),G.value={query:``,matches:[],currentMatchIndex:-1}}},[]),i(()=>{let e=e=>{if(s.current&&m)switch(e.key){case`ArrowUp`:if(e.preventDefault(),e.stopPropagation(),m>0){let e=v[m-1];e?.element&&te(e.element)}return;case`ArrowDown`:if(e.preventDefault(),e.stopPropagation(),m<v.length-1){let e=v[m+1];e?.element&&te(e.element)}return;case`ArrowLeft`:{e.preventDefault(),e.stopPropagation();let t=v[m];t?.nodeId&&C(t.nodeId);return}case`ArrowRight`:{e.preventDefault(),e.stopPropagation();let t=v[m];t?.nodeId&&C(t.nodeId);return}}};return document.addEventListener(`keydown`,e),()=>{document.removeEventListener(`keydown`,e)}},[m,v,te,C]),i(()=>G.subscribe(_),[]),i(()=>H.subscribe(e=>{var n;(n=t.current)==null||n.style.setProperty(`transition`,`width 0.1s`),w(e.componentsTree.width),setTimeout(()=>{var e;(e=t.current)==null||e.style.removeProperty(`transition`)},500)}),[]),D(`div`,{className:`react-scan-components-tree flex`,children:[D(`div`,{ref:l,onPointerDown:se,className:`relative resize-v-line`,children:D(`span`,{children:D(P,{name:`icon-ellipsis`,size:18})})}),D(`div`,{ref:t,className:`flex flex-col h-full`,children:[D(`div`,{className:`p-2 border-b border-[#1e1e1e]`,children:D(`div`,{ref:n,title:`Search components by:

• Name (e.g., "Button") — Case insensitive, matches any part

• Regular Expression (e.g., "/^Button/") — Use forward slashes

• Wrapper Type (e.g., "[memo,forwardRef]"):
   - Available types: memo, forwardRef, lazy, suspense
   - Matches any part of type name (e.g., "mo" matches "memo")
   - Use commas for multiple types

• Combined Search:
   - Mix name/regex with type: "button [for]"
   - Will match components satisfying both conditions

• Navigation:
   - Enter → Next match
   - Shift + Enter → Previous match
   - Cmd/Ctrl + Enter → Select and focus match
`,className:B(`relative`,`flex items-center gap-x-1 px-2`,`rounded`,`border border-transparent`,`focus-within:border-[#454545]`,`bg-[#1e1e1e] text-neutral-300`,`transition-colors`,`whitespace-nowrap`,`overflow-hidden`),children:[D(P,{name:`icon-search`,size:12,className:` text-neutral-500`}),D(`div`,{className:`relative flex-1 h-7 overflow-hidden`,children:D(`input`,{ref:r,type:`text`,value:G.value.query,onClick:e=>{e.stopPropagation(),e.currentTarget.focus()},onPointerDown:e=>{e.stopPropagation()},onKeyDown:e=>{e.key===`Escape`&&e.currentTarget.blur(),G.value.matches.length&&(e.key===`Enter`&&e.shiftKey?oe(`prev`):e.key===`Enter`&&(e.metaKey||e.ctrlKey?(e.preventDefault(),e.stopPropagation(),te(G.value.matches[G.value.currentMatchIndex].element),e.currentTarget.focus()):oe(`next`)))},onChange:ae,className:`absolute inset-y-0 inset-x-1`,placeholder:`Component name, /regex/, or [type]`})}),G.value.query?D(E,{children:[D(`span`,{className:`flex items-center gap-x-0.5 text-xs text-neutral-500`,children:[G.value.currentMatchIndex+1,`|`,G.value.matches.length]}),!!G.value.matches.length&&D(E,{children:[D(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),oe(`prev`)},className:`button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300`,children:D(P,{name:`icon-chevron-right`,className:`-rotate-90`,size:12})}),D(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),oe(`next`)},className:`button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300`,children:D(P,{name:`icon-chevron-right`,className:`rotate-90`,size:12})})]}),D(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),re(``)},className:`button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300`,children:D(P,{name:`icon-close`,size:12})})]}):!!u.length&&D(`span`,{className:`text-xs text-neutral-500`,children:u.length})]})}),D(`div`,{className:`flex-1 overflow-hidden`,children:D(`div`,{ref:e,onPointerLeave:ce,className:`tree h-full overflow-auto will-change-transform`,children:D(`div`,{className:`relative w-full`,style:{height:ee},children:y.map(e=>{let t=v[e.index];if(!t)return null;let n=Q.inspectState.value.kind===`focused`&&t.element===Q.inspectState.value.focusedDomElement,r=e.index===m;return D(`div`,{className:B(`absolute left-0 w-full overflow-hidden`,`text-neutral-400 hover:text-neutral-300`,`bg-transparent hover:bg-[#5f3f9a]/20`,(n||r)&&`text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40`),style:{top:e.start,height:28},children:D(`div`,{className:`w-full h-full`,style:{paddingLeft:`calc(${t.depth} * var(--indentation-size))`},children:D(cr,{node:t,nodeIndex:e.index,hasChildren:!!t.children?.length,isCollapsed:f.has(t.nodeId),handleTreeNodeClick:S,handleTreeNodeToggle:ne,searchValue:g})})},t.nodeId)})})})})]})]})},ur=he(({text:e,children:t,onCopy:n,className:r,iconSize:a=14})=>{let[o,s]=b(!1);i(()=>{if(o){let e=setTimeout(()=>s(!1),600);return()=>{clearTimeout(e)}}},[o]);let c=x(t=>{t.preventDefault(),t.stopPropagation(),navigator.clipboard.writeText(e).then(()=>{s(!0),n?.(!0,e)},()=>{n?.(!1,e)})},[e,n]),l=D(`button`,{onClick:c,type:`button`,className:B(`z-10`,`flex items-center justify-center`,`hover:text-dev-pink-400`,`transition-colors duration-200 ease-in-out`,`cursor-pointer`,`size-[${a}px]`,r),children:D(P,{name:`icon-${o?`check`:`copy`}`,size:[a],className:B(o&&`text-green-500`)})});return t?t({ClipboardIcon:l,onClick:c}):l}),dr=({length:e,expanded:t,onToggle:n,isNegative:r})=>D(`div`,{className:`flex items-center gap-1`,children:[D(`button`,{type:`button`,onClick:n,className:`flex items-center p-0 opacity-50`,children:D(P,{name:`icon-chevron-right`,size:12,className:B(`transition-[color,transform]`,r?`text-[#f87171]`:`text-[#4ade80]`,t&&`rotate-90`)})}),D(`span`,{children:[`Array(`,e,`)`]})]}),fr=({value:e,path:t,isNegative:n})=>{let[r,i]=b(!1);if(!(typeof e==`object`&&e&&!(e instanceof Date)))return D(`div`,{className:`flex items-center gap-1`,children:[D(`span`,{className:`text-gray-500`,children:[t,`:`]}),D(`span`,{className:`truncate`,children:ti(e)})]});let a=Object.entries(e);return D(`div`,{className:`flex flex-col`,children:[D(`div`,{className:`flex items-center gap-1`,children:[D(`button`,{type:`button`,onClick:()=>i(!r),className:`flex items-center p-0 opacity-50`,children:D(P,{name:`icon-chevron-right`,size:12,className:B(`transition-[color,transform]`,n?`text-[#f87171]`:`text-[#4ade80]`,r&&`rotate-90`)})}),D(`span`,{className:`text-gray-500`,children:[t,`:`]}),!r&&D(`span`,{className:`truncate`,children:e instanceof Date?ti(e):`{${Object.keys(e).join(`, `)}}`})]}),r&&D(`div`,{className:`pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5`,children:a.map(([e,t])=>D(fr,{value:t,path:e,isNegative:n},e))})]})},pr=({value:e,expanded:t,onToggle:n,isNegative:r})=>{let{value:i,error:a}=ni(e);return a?D(`span`,{className:`text-gray-500 font-italic`,children:a}):typeof i==`object`&&i&&!(i instanceof Promise)?Array.isArray(i)?D(`div`,{className:`flex flex-col gap-1 relative`,children:[D(dr,{length:i.length,expanded:t,onToggle:n,isNegative:r}),t&&D(`div`,{className:`pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5`,children:i.map((e,t)=>D(fr,{value:e,path:t.toString(),isNegative:r},t.toString()))}),D(ur,{text:Xr(i),className:`absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end`,children:({ClipboardIcon:e})=>D(E,{children:e})})]}):D(`div`,{className:`flex items-start gap-1 relative`,children:[D(`button`,{type:`button`,onClick:n,className:B(`flex items-center`,`p-0 mt-0.5 mr-1`,`opacity-50`),children:D(P,{name:`icon-chevron-right`,size:12,className:B(`transition-[color,transform]`,r?`text-[#f87171]`:`text-[#4ade80]`,t&&`rotate-90`)})}),D(`div`,{className:`flex-1`,children:t?D(`div`,{className:`pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5`,children:Object.entries(i).map(([e,t])=>D(fr,{value:t,path:e,isNegative:r},e))}):D(`span`,{children:ti(i)})}),D(ur,{text:Xr(i),className:`absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end`,children:({ClipboardIcon:e})=>D(E,{children:e})})]}):D(`span`,{children:ti(i)})},mr=50,j({fiber:null,fiberProps:{current:[],changes:new Set},fiberState:{current:[],changes:new Set},fiberContext:{current:[],changes:new Set}}),hr=e=>{switch(e.kind){case`initialized`:return e.changes.currentValue;case`partially-initialized`:return e.value}},gr=(e,t)=>{for(let n of e){let e=t.get(n.name);if(e){t.set(e.name,{count:e.count+1,currentValue:n.value,id:e.name,lastUpdated:Date.now(),name:e.name,previousValue:n.prevValue});continue}t.set(n.name,{count:1,currentValue:n.value,id:n.name,lastUpdated:Date.now(),name:n.name,previousValue:n.prevValue})}},_r=(e,t)=>{for(let n of e){let e=t.contextChanges.get(n.contextType);if(e){if(Se(hr(e),n.value))continue;if(e.kind===`partially-initialized`){t.contextChanges.set(n.contextType,{kind:`initialized`,changes:{count:1,currentValue:n.value,id:n.contextType.toString(),lastUpdated:Date.now(),name:n.name,previousValue:e.value}});continue}t.contextChanges.set(n.contextType,{kind:`initialized`,changes:{count:e.changes.count+1,currentValue:n.value,id:n.contextType.toString(),lastUpdated:Date.now(),name:n.name,previousValue:e.changes.currentValue}});continue}t.contextChanges.set(n.contextType,{kind:`partially-initialized`,id:n.contextType.toString(),lastUpdated:Date.now(),name:n.name,value:n.value})}},vr=e=>{let t={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map};return e.forEach(e=>{_r(e.contextChanges,t),gr(e.stateChanges,t.stateChanges),gr(e.propsChanges,t.propsChanges)}),t},yr=(e,t)=>{let n=new Map;return e.forEach((e,t)=>{n.set(t,e)}),t.forEach((e,t)=>{let r=n.get(t);if(!r){n.set(t,e);return}n.set(t,{count:r.count+e.count,currentValue:e.currentValue,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:e.previousValue})}),n},br=(e,t)=>{let n=new Map;return e.contextChanges.forEach((e,t)=>{n.set(t,e)}),t.contextChanges.forEach((e,t)=>{let r=n.get(t);if(!r){n.set(t,e);return}if(hr(e)!==hr(r))switch(r.kind){case`initialized`:switch(e.kind){case`initialized`:n.set(t,{kind:`initialized`,changes:{...e.changes,count:e.changes.count+r.changes.count+1,currentValue:e.changes.currentValue,previousValue:e.changes.previousValue}});return;case`partially-initialized`:n.set(t,{kind:`initialized`,changes:{count:r.changes.count+1,currentValue:e.value,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:r.changes.currentValue}});return}case`partially-initialized`:switch(e.kind){case`initialized`:n.set(t,{kind:`initialized`,changes:{count:e.changes.count+1,currentValue:e.changes.currentValue,id:e.changes.id,lastUpdated:e.changes.lastUpdated,name:e.changes.name,previousValue:r.value}});return;case`partially-initialized`:n.set(t,{kind:`initialized`,changes:{count:1,currentValue:e.value,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:r.value}});return}}}),n},xr=(e,t)=>({contextChanges:br(e,t),propsChanges:yr(e.propsChanges,t.propsChanges),stateChanges:yr(e.stateChanges,t.stateChanges)}),Sr=e=>Array.from(e.propsChanges.values()).reduce((e,t)=>e+t.count,0)+Array.from(e.stateChanges.values()).reduce((e,t)=>e+t.count,0)+Array.from(e.contextChanges.values()).filter(e=>e.kind===`initialized`).reduce((e,t)=>e+t.changes.count,0),Cr=e=>{let t=M({queue:[]}),[n,r]=b({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),a=Q.inspectState.value.kind===`focused`?Q.inspectState.value.fiber:null,o=a?ee(a):null;return i(()=>{let n=setInterval(()=>{t.current.queue.length!==0&&(r(n=>{var r;let i=xr(n,vr(t.current.queue)),a=Sr(n),o=Sr(i)-a;return(r=e?.onChangeUpdate)==null||r.call(e,o),i}),t.current.queue=[])},mr);return()=>{clearInterval(n)}},[a]),i(()=>{if(!o)return;let e=e=>{var n;(n=t.current)==null||n.queue.push(e)},n=Q.changesListeners.get(o);return n||(n=[],Q.changesListeners.set(o,n)),n.push(e),()=>{r({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[],Q.changesListeners.set(o,Q.changesListeners.get(o)?.filter(t=>t!==e)??[])}},[o]),i(()=>()=>{r({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[]},[o]),n},wr=he(()=>{let[e,t]=b(!0),n=Cr(),[a,o]=b(!1),s=Sr(n)>0;i(()=>{if(!a&&s){let e=setTimeout(()=>{o(!0),requestAnimationFrame(()=>{t(!0)})},0);return()=>clearTimeout(e)}},[a,s]);let c=new Map(Array.from(n.contextChanges.entries()).filter(([,e])=>e.kind===`initialized`).map(([e,t])=>[e,t.kind===`partially-initialized`?null:t.changes])),l=Q.inspectState.value.kind===`focused`?Q.inspectState.value.fiber:null;if(l)return D(E,{children:[D(Er,{}),D(`div`,{className:`overflow-hidden h-full flex flex-col gap-y-2`,children:[D(`div`,{className:`flex flex-col gap-2 px-3 pt-2`,children:[D(`span`,{className:`text-sm font-medium text-[#888]`,children:[`Why did`,` `,D(`span`,{className:`text-[#A855F7]`,children:N(l)}),` `,`render?`]}),!s&&D(`div`,{className:`text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4`,children:[D(`div`,{children:`No changes detected since selecting`}),D(`div`,{children:`The props, state, and context changes within your component will be reported here`})]})]}),D(`div`,{className:B(`flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full`),children:[D(Or,{changes:n.propsChanges,title:`Changed Props`,isExpanded:e}),D(Or,{renderName:e=>Tr(e,N(r(l))??`Unknown Component`),changes:n.stateChanges,title:`Changed State`,isExpanded:e}),D(Or,{changes:c,title:`Changed Context`,isExpanded:e})]})]})]})}),Tr=(e,t)=>{if(Number.isNaN(Number(e)))return e;let n=Number.parseInt(e);return D(`span`,{className:`truncate`,children:[D(`span`,{className:`text-white`,children:[n,(e=>{let t=e%10,n=e%100;if(n>=11&&n<=13)return`th`;switch(t){case 1:return`st`;case 2:return`nd`;case 3:return`rd`;default:return`th`}})(n),` hook`,` `]}),D(`span`,{style:{color:`#666`},children:[`called in `,D(`i`,{className:`text-[#A855F7] truncate`,children:t})]})]})},Er=he(()=>{let e=M(null),t=M(null),n=M(null),r=M({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return i(()=>{let i=wn(()=>{let r=[];e.current?.dataset.flash===`true`&&r.push(e.current),t.current?.dataset.flash===`true`&&r.push(t.current),n.current?.dataset.flash===`true`&&r.push(n.current);for(let e of r)e.classList.remove(`count-flash-white`),e.offsetWidth,e.classList.add(`count-flash-white`)},400);return W.subscribe(a=>{if(!e.current||!t.current||!n.current)return;let{currentIndex:o,updates:s}=a,c=s[o];!c||o===0||(i(),r.current={isPropsChanged:(c.props?.changes?.size??0)>0,isStateChanged:(c.state?.changes?.size??0)>0,isContextChanged:(c.context?.changes?.size??0)>0},e.current.dataset.flash!==`true`&&(e.current.dataset.flash=r.current.isPropsChanged.toString()),t.current.dataset.flash!==`true`&&(t.current.dataset.flash=r.current.isStateChanged.toString()),n.current.dataset.flash!==`true`&&(n.current.dataset.flash=r.current.isContextChanged.toString()))})},[]),D(`button`,{type:`button`,className:B(`react-section-header`,`overflow-hidden`,`max-h-0`,`transition-[max-height]`),children:D(`div`,{className:B(`flex-1 react-scan-expandable`),children:D(`div`,{className:`overflow-hidden`,children:D(`div`,{className:`flex items-center whitespace-nowrap`,children:[D(`div`,{className:`flex items-center gap-x-2`,children:`What changed?`}),D(`div`,{className:B(`ml-auto`,`change-scope`,`transition-opacity duration-300 delay-150`),children:[D(`div`,{ref:e,children:`props`}),D(`div`,{ref:t,children:`state`}),D(`div`,{ref:n,children:`context`})]})]})})})})}),Dr=e=>e,Or=he(({title:e,changes:t,renderName:n=Dr})=>{let[r,i]=b(new Set),[a,o]=b(new Set),s=Array.from(t.entries());return t.size===0?null:D(`div`,{children:[D(`div`,{className:`text-xs text-[#888] mb-1.5`,children:e}),D(`div`,{className:`flex flex-col gap-2`,children:s.map(([t,s])=>{let c=a.has(String(t)),{value:l,error:u}=ni(s.previousValue),{value:d,error:f}=ni(s.currentValue),p=Qr(l,d);return D(`div`,{children:[D(`button`,{onClick:()=>{o(e=>{let n=new Set(e);return n.has(String(t))?n.delete(String(t)):n.add(String(t)),n})},className:`flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs`,children:D(`div`,{className:`flex items-center gap-1.5 flex-1`,children:[D(P,{name:`icon-chevron-right`,size:12,className:B(`text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]`,{"rotate-90":c})}),D(`div`,{className:`whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5`,children:[n(s.name),D(Mr,{count:s.count,isFunction:typeof s.currentValue==`function`,showWarning:p.changes.length===0,forceFlash:!0})]})]})}),D(`div`,{className:B(`react-scan-expandable`,{"react-scan-expanded":c}),children:D(`div`,{className:`pl-3 text-xs font-mono border-l-1 border-[#333]`,children:D(`div`,{className:`flex flex-col gap-0.5`,children:u||f?D(kr,{currError:f,prevError:u}):p.changes.length>0?D(Ar,{change:s,diff:p,expandedFns:r,renderName:n,setExpandedFns:i,title:e}):D(jr,{currValue:d,entryKey:t,expandedFns:r,prevValue:l,setExpandedFns:i})})})})]},t)})})]})}),kr=({prevError:e,currError:t})=>D(E,{children:[e&&D(`div`,{className:`text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic`,children:e}),t&&D(`div`,{className:`text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5`,children:t})]}),Ar=({diff:e,title:t,renderName:n,change:r,expandedFns:i,setExpandedFns:a})=>e.changes.map((o,s)=>{let{value:c,error:l}=ni(o.prevValue),{value:u,error:d}=ni(o.currentValue),f=typeof c==`function`||typeof u==`function`,p;return t===`Props`&&(p=o.path.length>0?`${n(String(r.name))}.${$r(o.path)}`:void 0),t===`State`&&o.path.length>0&&(p=`state.${$r(o.path)}`),p||=$r(o.path),D(`div`,{className:B(`flex flex-col gap-y-1`,s<e.changes.length-1&&`mb-4`),children:[p&&D(`div`,{className:`text-[#666] text-[10px]`,children:p}),D(`button`,{type:`button`,className:B(`group`,`flex items-start`,`py-[3px] px-1.5`,`text-left text-[#f87171] bg-[#2a1515]`,`rounded`,`overflow-hidden break-all`,f&&`cursor-pointer`),onClick:f?()=>{let e=`${$r(o.path)}-prev`;a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})}:void 0,children:[D(`span`,{className:`w-3 flex items-center justify-center opacity-50`,children:`-`}),D(`span`,{className:`flex-1 whitespace-nowrap font-mono`,children:l?D(`span`,{className:`italic text-[#f87171]`,children:l}):f?D(`div`,{className:`flex gap-1 items-start flex-col`,children:[D(`div`,{className:`flex gap-1 items-start w-full`,children:[D(`span`,{className:`flex-1 max-h-40`,children:ei(c,i.has(`${$r(o.path)}-prev`))}),typeof c==`function`&&D(ur,{text:c.toString(),className:`opacity-0 transition-opacity group-hover:opacity-100`,children:({ClipboardIcon:e})=>D(E,{children:e})})]}),c?.toString()===u?.toString()&&D(`div`,{className:`text-[10px] text-[#666] italic`,children:`Function reference changed`})]}):D(pr,{value:c,expanded:i.has(`${$r(o.path)}-prev`),onToggle:()=>{let e=`${$r(o.path)}-prev`;a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},isNegative:!0})})]}),D(`button`,{type:`button`,className:B(`group`,`flex items-start`,`py-[3px] px-1.5`,`text-left text-[#4ade80] bg-[#1a2a1a]`,`rounded`,`overflow-hidden break-all`,f&&`cursor-pointer`),onClick:f?()=>{let e=`${$r(o.path)}-current`;a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})}:void 0,children:[D(`span`,{className:`w-3 flex items-center justify-center opacity-50`,children:`+`}),D(`span`,{className:`flex-1 whitespace-pre-wrap font-mono`,children:d?D(`span`,{className:`italic text-[#4ade80]`,children:d}):f?D(`div`,{className:`flex gap-1 items-start flex-col`,children:[D(`div`,{className:`flex gap-1 items-start w-full`,children:[D(`span`,{className:`flex-1`,children:ei(u,i.has(`${$r(o.path)}-current`))}),typeof u==`function`&&D(ur,{text:u.toString(),className:`opacity-0 transition-opacity group-hover:opacity-100`,children:({ClipboardIcon:e})=>D(E,{children:e})})]}),c?.toString()===u?.toString()&&D(`div`,{className:`text-[10px] text-[#666] italic`,children:`Function reference changed`})]}):D(pr,{value:u,expanded:i.has(`${$r(o.path)}-current`),onToggle:()=>{let e=`${$r(o.path)}-current`;a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},isNegative:!1})})]})]},`${p}-${r.name}-${s}`)}),jr=({prevValue:e,currValue:t,entryKey:n,expandedFns:r,setExpandedFns:i})=>D(E,{children:[D(`div`,{className:`group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded`,children:[D(`span`,{className:`w-3 flex items-center justify-center opacity-50`,children:`-`}),D(`span`,{className:`flex-1 overflow-hidden whitespace-pre-wrap font-mono`,children:D(pr,{value:e,expanded:r.has(`${String(n)}-prev`),onToggle:()=>{let e=`${String(n)}-prev`;i(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},isNegative:!0})})]}),D(`div`,{className:`group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5`,children:[D(`span`,{className:`w-3 flex items-center justify-center opacity-50`,children:`+`}),D(`span`,{className:`flex-1 overflow-hidden whitespace-pre-wrap font-mono`,children:D(pr,{value:t,expanded:r.has(`${String(n)}-current`),onToggle:()=>{let e=`${String(n)}-current`;i(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},isNegative:!1})})]}),typeof t==`object`&&!!t&&D(`div`,{className:`text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1`,children:[D(P,{name:`icon-triangle-alert`,className:`text-yellow-500 mb-px`,size:14}),D(`span`,{children:`Reference changed but objects are structurally the same`})]})]}),Mr=({count:e,forceFlash:t,isFunction:n,showWarning:r})=>{let a=M(!0),o=M(null),s=M(e);return i(()=>{let t=o.current;!t||s.current===e||(t.classList.remove(`count-flash`),t.offsetWidth,t.classList.add(`count-flash`),s.current=e)},[e]),i(()=>{if(a.current){a.current=!1;return}if(t){let e=setTimeout(()=>{var t;(t=o.current)==null||t.classList.add(`count-flash-white`),e=setTimeout(()=>{var e;(e=o.current)==null||e.classList.remove(`count-flash-white`)},300)},500);return()=>{clearTimeout(e)}}},[t]),D(`div`,{ref:o,className:`count-badge`,children:[r&&D(P,{name:`icon-triangle-alert`,className:`text-yellow-500 mb-px`,size:14}),n&&D(P,{name:`icon-function`,className:`text-[#A855F7] mb-px`,size:14}),`x`,e]})},Nr={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{Nr.lastRendered.clear(),Nr.expandedPaths.clear(),Wn.cleanupAll(),di(),Zn.reset()}},Pr=class extends a{constructor(){super(...arguments),He(this,`state`,{hasError:!1,error:null}),He(this,`handleReset`,()=>{this.setState({hasError:!1,error:null}),Nr.cleanup()})}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){return this.state.hasError?D(`div`,{className:`p-4 bg-red-950/50 h-screen backdrop-blur-sm`,children:[D(`div`,{className:`flex items-center gap-2 mb-3 text-red-400 font-medium`,children:[D(P,{name:`icon-flame`,className:`text-red-500`,size:16}),`Something went wrong in the inspector`]}),D(`div`,{className:`p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words`,children:this.state.error?.message||JSON.stringify(this.state.error)}),D(`button`,{type:`button`,onClick:this.handleReset,className:`px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2`,children:`Reset Inspector`})]}):this.props.children}},Fr=T(()=>B(`react-scan-inspector`,`flex-1`,`opacity-0`,`overflow-y-auto overflow-x-hidden`,`transition-opacity delay-0`,`pointer-events-none`,!Nn.value&&`opacity-100 delay-300 pointer-events-auto`)),Ir=Ee(()=>{let e=M(null),t=t=>{if(!t)return;e.current=t;let{data:n,shouldUpdate:r}=vi(t);if(r){let e={timestamp:Date.now(),fiberInfo:ii(t),props:n.fiberProps,state:n.fiberState,context:n.fiberContext,stateNames:ui(t)};Zn.addUpdate(e,t)}};return de(()=>{let n=Q.inspectState.value;se(()=>{if(n.kind!==`focused`||!n.focusedDomElement){e.current=null,Nr.cleanup();return}n.kind===`focused`&&(Nn.value=!1);let{parentCompositeFiber:r}=Gr(n.focusedDomElement,n.fiber);if(!r){Q.inspectState.value={kind:`inspect-off`},U.value={view:`none`};return}e.current?.type!==r.type&&(e.current=r,Nr.cleanup(),t(r))})}),de(()=>{qn.value,se(()=>{let n=Q.inspectState.value;if(n.kind!==`focused`||!n.focusedDomElement){e.current=null,Nr.cleanup();return}let{parentCompositeFiber:r}=Gr(n.focusedDomElement,n.fiber);if(!r){Q.inspectState.value={kind:`inspect-off`},U.value={view:`none`};return}t(r),n.focusedDomElement.isConnected||(e.current=null,Nr.cleanup(),Q.inspectState.value={kind:`inspecting`,hoveredDomElement:null})})}),i(()=>()=>{Nr.cleanup()},[]),D(Pr,{children:D(`div`,{className:Fr,children:D(`div`,{className:`w-full h-full`,children:D(wr,{})})})})}),Lr=Ee(()=>Q.inspectState.value.kind===`focused`?D(Pr,{children:[D(Ir,{}),D(lr,{})]}):null),Rr=e=>{if(`__REACT_DEVTOOLS_GLOBAL_HOOK__`in window){let t=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t?.renderers)return null;for(let[,n]of Array.from(t.renderers))try{let t=n.findFiberByHostInstance?.call(n,e);if(t)return t}catch{}}if(`_reactRootContainer`in e)return e._reactRootContainer?._internalRoot?.current?.child??null;for(let t in e)if(t.startsWith(`__reactInternalInstance$`)||t.startsWith(`__reactFiber`))return e[t];return null},zr=e=>{let t=e;for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.child)break;t=t.child}for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.return)break;t=t.return}return null},Br=e=>{if(!e)return null;try{let t=Rr(e);if(!t)return null;let n=Vr(t);return n?n[0]:null}catch{return null}},Vr=e=>{let t=e,n=null;for(;t;){if(d(t))return[t,n];k(t)&&!n&&(n=t),t=t.return}return null},Hr=(e,t)=>!!s(t,t=>t===e),Ur=async e=>{let t=Br(e);if(!t)return null;let n=zr(t);return n?await new Promise(e=>{let t=new IntersectionObserver(n=>{t.disconnect(),e(n[0]?.boundingClientRect??null)});t.observe(n)}):null},Wr=e=>{let t=Br(e);if(!t||!zr(t))return{};let n=Vr(t);if(!n)return{};let[r]=n;return{parentCompositeFiber:r}},Gr=(e,t)=>{if(!e.isConnected)return{};let n=t??Br(e);if(!n)return{};let r=n,i=null,a=null;for(;r;){if(!r.stateNode){r=r.return;continue}if($.instrumentation?.fiberRoots.has(r.stateNode)){i=r,a=r.stateNode.current;break}r=r.return}if(!i||!a||(n=Hr(n,a)?n:n.alternate??n,!n)||!zr(n))return{};let o=Vr(n)?.[0];return o?{parentCompositeFiber:Hr(o,a)?o:o.alternate??o}:{}},Kr=e=>{let t=e.memoizedProps??{},n=e.alternate?.memoizedProps??{},r=[];for(let e in t){if(e===`children`)continue;let i=t[e],a=n[e];Se(i,a)||r.push({name:e,value:i,prevValue:a,type:1})}return r},qr=new Set([`HTML`,`HEAD`,`META`,`TITLE`,`BASE`,`SCRIPT`,`SCRIPT`,`STYLE`,`LINK`,`NOSCRIPT`,`SOURCE`,`TRACK`,`EMBED`,`OBJECT`,`PARAM`,`TEMPLATE`,`PORTAL`,`SLOT`,`AREA`,`XML`,`DOCTYPE`,`COMMENT`]),Jr=(e,t=!0)=>{if(e.stateNode&&`nodeType`in e.stateNode){let n=e.stateNode;return t&&n.tagName&&qr.has(n.tagName.toLowerCase())?null:n}let n=e.child;for(;n;){let e=Jr(n,t);if(e)return e;n=n.sibling}return null},Yr=(e=document.body)=>{let t=[],n=e=>{if(!e)return null;let{parentCompositeFiber:t}=Wr(e);return t&&Jr(t)===e?e:null},r=(e,i=0)=>{let a=n(e);if(a){let{parentCompositeFiber:e}=Wr(a);if(!e)return;t.push({element:a,depth:i,name:N(e.type)??`Unknown`,fiber:e})}for(let t of Array.from(e.children))r(t,a?i+1:i)};return r(e),t},Xr=e=>{try{if(e===null)return`null`;if(e===void 0)return`undefined`;if(ri(e))return`Promise`;if(typeof e==`function`){let t=e.toString();try{return t.replace(/\s+/g,` `).replace(/{\s+/g,`{
  `).replace(/;\s+/g,`;
  `).replace(/}\s*$/g,`
}`).replace(/\(\s+/g,`(`).replace(/\s+\)/g,`)`).replace(/,\s+/g,`, `)}catch{return t}}switch(!0){case e instanceof Date:return e.toISOString();case e instanceof RegExp:return e.toString();case e instanceof Error:return`${e.name}: ${e.message}`;case e instanceof Map:return JSON.stringify(Array.from(e.entries()),null,2);case e instanceof Set:return JSON.stringify(Array.from(e),null,2);case e instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(e.buffer)),null,2);case e instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(e)),null,2);case ArrayBuffer.isView(e)&&`length`in e:return JSON.stringify(Array.from(e),null,2);case Array.isArray(e):return JSON.stringify(e,null,2);case typeof e==`object`:return JSON.stringify(e,null,2);default:return String(e)}}catch{return String(e)}},Zr=(e,t)=>{try{return typeof e!=`function`||typeof t!=`function`?!1:e.toString()===t.toString()}catch{return!1}},Qr=(e,t,n=[],r=new WeakSet)=>{if(e===t)return{type:`primitive`,changes:[],hasDeepChanges:!1};if(typeof e==`function`&&typeof t==`function`){let r=Zr(e,t);return{type:`primitive`,changes:[{path:n,prevValue:e,currentValue:t,sameFunction:r}],hasDeepChanges:!r}}if(e===null||t===null||e===void 0||t===void 0||typeof e!=`object`||typeof t!=`object`)return{type:`primitive`,changes:[{path:n,prevValue:e,currentValue:t}],hasDeepChanges:!0};if(r.has(e)||r.has(t))return{type:`object`,changes:[{path:n,prevValue:`[Circular]`,currentValue:`[Circular]`}],hasDeepChanges:!1};r.add(e),r.add(t);let i=e,a=t,o=new Set([...Object.keys(i),...Object.keys(a)]),s=[],c=!1;for(let e of o){let t=i[e],o=a[e];if(t!==o)if(typeof t==`object`&&typeof o==`object`&&t!==null&&o!==null){let i=Qr(t,o,[...n,e],r);s.push(...i.changes),i.hasDeepChanges&&(c=!0)}else s.push({path:[...n,e],prevValue:t,currentValue:o}),c=!0}return{type:`object`,changes:s,hasDeepChanges:c}},$r=e=>e.length===0?``:e.reduce((e,t,n)=>/^\d+$/.test(t)?`${e}[${t}]`:n===0?t:`${e}.${t}`,``),ei=(e,t=!1)=>{try{let n=e.toString(),r=n.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!r)return`ƒ`;let i=(r[1]||r[2]||``).replace(/\s+/g,``);return t?De(n):`\u0192 (${i}) => ...`}catch{return`ƒ`}},ti=e=>{if(e===null)return`null`;if(e===void 0)return`undefined`;if(typeof e==`string`)return`"${e.length>150?`${e.slice(0,20)}...`:e}"`;if(typeof e==`number`||typeof e==`boolean`)return String(e);if(typeof e==`function`)return ei(e);if(Array.isArray(e))return`Array(${e.length})`;if(e instanceof Map)return`Map(${e.size})`;if(e instanceof Set)return`Set(${e.size})`;if(e instanceof Date)return e.toISOString();if(e instanceof RegExp)return e.toString();if(e instanceof Error)return`${e.name}: ${e.message}`;if(typeof e==`object`){let t=Object.keys(e);return`{${t.length>2?`${t.slice(0,2).join(`, `)}, ...`:t.join(`, `)}}`}return String(e)},ni=e=>{if(e==null||typeof e==`function`||typeof e!=`object`)return{value:e};if(ri(e))return{value:`Promise`};try{let t=Object.getPrototypeOf(e);return t===Promise.prototype||t?.constructor?.name===`Promise`?{value:`Promise`}:{value:e}}catch{return{value:null,error:`Error accessing value`}}},ri=e=>!!e&&(e instanceof Promise||typeof e==`object`&&`then`in e),ii=e=>{let t=v(e);return{displayName:N(e)||`Unknown`,type:e.type,key:e.key,id:e.index,selfTime:t?.selfTime??null,totalTime:t?.totalTime??null}},ai=new Map,oi=new Map,si=new Map,ci=null,li=/\[(?<name>\w+),\s*set\w+\]/g,ui=e=>{var t;let n=((t=e.type)?.toString)?.call(t)||``;return n?Array.from(n.matchAll(li),e=>e.groups?.name??``):[]},di=()=>{ai.clear(),oi.clear(),si.clear(),ci=null},fi=e=>{let t=e.type!==ci;return ci=e.type,t},pi=(e,t,n,r)=>{let i=e.get(t),a=e===ai||e===si,o=!Se(n,r);if(!i)return e.set(t,{count:o&&a?1:0,currentValue:n,previousValue:r,lastUpdated:Date.now()}),{hasChanged:o,count:o&&a?1:+!a};if(!Se(i.currentValue,n)){let r=i.count+1;return e.set(t,{count:r,currentValue:n,previousValue:i.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:r}}return{hasChanged:!1,count:i.count}},mi=e=>{if(!e)return{};if(e.tag===0||e.tag===11||e.tag===15||e.tag===14){let t=e.memoizedState,n={},r=0;for(;t;)t.queue&&t.memoizedState!==void 0&&(n[r]=t.memoizedState),t=t.next,r++;return n}return e.tag===1&&e.memoizedState||{}},hi=e=>{let t=e.memoizedProps||{},n=e.alternate?.memoizedProps||{},r={},i={},a=Object.keys(t);for(let e of a)e in t&&(r[e]=t[e],i[e]=n[e]);return{current:r,prev:i,changes:Kr(e).map(e=>({name:e.name,value:e.value,prevValue:e.prevValue}))}},gi=e=>{let t=mi(e),n=e.alternate?mi(e.alternate):{},r=[];for(let[i,a]of Object.entries(t)){let t=e.tag===1?i:Number(i);e.alternate&&!Se(n[i],a)&&r.push({name:t,value:a,prevValue:n[i]})}return{current:t,prev:n,changes:r}},_i=e=>{let t=bi(e),n=e.alternate?bi(e.alternate):new Map,r={},i={},a=[],o=new Set;for(let[e,s]of t){let t=s.displayName,c=e;if(o.has(c))continue;o.add(c),r[t]=s.value;let l=n.get(e);l&&(i[t]=l.value,Se(l.value,s.value)||a.push({name:t,value:s.value,prevValue:l.value,contextType:e}))}return{current:r,prev:i,changes:a}},vi=e=>{let t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{data:{fiberProps:t(),fiberState:t(),fiberContext:t()},shouldUpdate:!1};let n=!1,r=fi(e),i=t();if(e.memoizedProps){let{current:t,changes:r}=hi(e);for(let[e,n]of Object.entries(t))i.current.push({name:e,value:ri(n)?{type:`promise`,displayValue:`Promise`}:n});for(let e of r){let{hasChanged:t,count:r}=pi(ai,e.name,e.value,e.prevValue);t&&(n=!0,i.changes.add(e.name),i.changesCounts.set(e.name,r))}}let a=t(),{current:o,changes:s}=gi(e);for(let[t,n]of Object.entries(o)){let r=e.tag===1?t:Number(t);a.current.push({name:r,value:n})}for(let e of s){let{hasChanged:t,count:r}=pi(oi,e.name,e.value,e.prevValue);t&&(n=!0,a.changes.add(e.name),a.changesCounts.set(e.name,r))}let c=t(),{current:l,changes:u}=_i(e);for(let[e,t]of Object.entries(l))c.current.push({name:e,value:t});if(!r)for(let e of u){let{hasChanged:t,count:r}=pi(si,e.name,e.value,e.prevValue);t&&(n=!0,c.changes.add(e.name),c.changesCounts.set(e.name,r))}return!n&&!r&&(i.changes.clear(),a.changes.clear(),c.changes.clear()),{data:{fiberProps:i,fiberState:a,fiberContext:c},shouldUpdate:n||r}},yi=new WeakMap,bi=e=>{if(!e)return new Map;let t=yi.get(e);if(t)return t;let n=new Map,r=e;for(;r;){let e=r.dependencies;if(e?.firstContext){let t=e.firstContext;for(;t;){let e=t.memoizedValue,r=t.context?.displayName;if(n.has(e)||n.set(t.context,{value:e,displayName:r??`UnnamedContext`,contextType:null}),t===t.next)break;t=t.next}}r=r.return}return yi.set(e,n),n},xi=e=>{let t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{fiberProps:t(),fiberState:t(),fiberContext:t()};let n=t();if(e.memoizedProps){let{current:t,changes:r}=hi(e);for(let[e,r]of Object.entries(t))n.current.push({name:e,value:ri(r)?{type:`promise`,displayValue:`Promise`}:r});for(let e of r)n.changes.add(e.name),n.changesCounts.set(e.name,1)}let r=t();if(e.memoizedState){let{current:t,changes:n}=gi(e);for(let[e,n]of Object.entries(t))r.current.push({name:e,value:ri(n)?{type:`promise`,displayValue:`Promise`}:n});for(let e of n)r.changes.add(e.name),r.changesCounts.set(e.name,1)}let i=t(),{current:a,changes:o}=_i(e);for(let[e,t]of Object.entries(a))i.current.push({name:e,value:ri(t)?{type:`promise`,displayValue:`Promise`}:t});for(let e of o)i.changes.add(e.name),i.changesCounts.set(e.name,1);return{fiberProps:n,fiberState:r,fiberContext:i}},Si={mount:1,update:2,unmount:4},Ci=0,wi=performance.now(),Ti=0,Ei=!1,Di=()=>{Ti++;let e=performance.now();e-wi>=1e3&&(Ci=Ti,Ti=0,wi=e),requestAnimationFrame(Di)},Oi=()=>(Ei||(Ei=!0,Di(),Ci=60),Ci),ki=(e,t)=>Oe(e)===Oe(t)&&Ai.includes(typeof e)&&Ai.includes(typeof t),Ai=[`function`,`object`],ji=new WeakMap,Mi=e=>{if(!e)return[];let t=[];if(e.tag===0||e.tag===11||e.tag===15||e.tag===14){let n=e.memoizedState,r=e.alternate?.memoizedState,i=0;for(;n;){if(n.queue&&n.memoizedState!==void 0){let e={type:2,name:i.toString(),value:n.memoizedState,prevValue:r?.memoizedState};Se(e.prevValue,e.value)||t.push(e)}n=n.next,r=r?.next,i++}return t}if(e.tag===1){let n={type:3,name:`state`,value:e.memoizedState,prevValue:e.alternate?.memoizedState};return Se(n.prevValue,n.value)||t.push(n),t}return t},Ni=0,Pi=new WeakMap,Fi=e=>Pi.get(e)||(Ni++,Pi.set(e,Ni),Ni),Ii=e=>{let t=[];return p(e,ke.bind(t)),t},Li=new Map,Ri=!1,zi=()=>Array.from(Li.values()),Bi=e=>{if(!ne(e))return!0;let t=c(e);for(let e of t){let t={isRequiredChange:!1};if(S(e,Ae.bind(t)),t.isRequiredChange)return!1}return!0},Vi=!1,Hi=16,Ui=new WeakMap,Wi=(e,t,n,r,i)=>{let a=Date.now(),o=Me(e);if((r||i)&&(!o||a-(o.lastRenderTimestamp||0)>Hi)){let r=o||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:a};r.renderCount=(r.renderCount||0)+1,r.selfTime=t||0,r.totalTime=n||0,r.lastRenderTimestamp=a,Ne(e,{...r})}},Gi=(e,t)=>{let n={isPaused:j(!$.options.value.enabled),fiberRoots:new WeakSet};return Li.set(e,{key:e,config:t,instrumentation:n}),Ri||(Ri=!0,te({name:`react-scan`,onActive:t.onActive,onCommitFiberRoot(e,t){n.fiberRoots.add(t);let i=zi();for(let e of i)e.config.onCommitStart();u(t.current,(e,t)=>{let n=r(e.type);if(!n)return null;let i=zi(),a=[];for(let t=0,n=i.length;t<n;t++)i[t].config.isValidFiber(e)&&a.push(t);if(!a.length)return null;let o=[];if(i.some(e=>e.config.trackChanges)){let t=hi(e).changes,n=gi(e).changes,r=_i(e).changes;o.push.apply(null,t.map(e=>({type:1,name:e.name,value:e.value})));for(let t of n)e.tag===1?o.push({type:3,name:t.name.toString(),value:t.value}):o.push({type:2,name:t.name.toString(),value:t.value});o.push.apply(null,r.map(e=>({type:4,name:e.name,value:e.value,contextType:Number(e.contextType)})))}let{selfTime:s,totalTime:l}=v(e),u=Oi(),d={phase:Si[t],componentName:N(n),count:1,changes:o,time:s,forget:f(e),unnecessary:Vi?Bi(e):null,didCommit:ne(e),fps:u},p=o.length>0,m=c(e).length>0;t===`update`&&Wi(e,s,l,p,m);for(let t=0,n=a.length;t<n;t++)i[a[t]].config.onRender(e,[d])});for(let e of i)e.config.onCommitFinish()},onPostCommitFiberRoot(){let e=zi();for(let t of e)t.config.onPostCommitFiberRoot()}})),n},Ki=e=>{let t=new Map;for(let n=0,r=e.length;n<r;n++){let r=e[n];if(!r.componentName)continue;let i=t.get(r.componentName)??[],a=We([{aggregatedCount:1,computedKey:null,name:r.componentName,frame:null,...r,changes:{type:r.changes.reduce((e,t)=>e|t.type,0),unstable:r.changes.some(e=>e.unstable)},phase:r.phase,computedCurrent:null}]);if(!a)continue;let o=null,s=null;if(r.changes)for(let e=0,t=r.changes.length;e<t;e++){let{name:t,prevValue:n,nextValue:a,unstable:c,type:l}=r.changes[e];l===1?(o??={},s??={},o[`${c?`⚠️`:``}${t} (prev)`]=n,s[`${c?`⚠️`:``}${t} (next)`]=a):i.push({prev:n,next:a,type:l===4?`context`:`state`,unstable:c??!1})}o&&s&&i.push({prev:o,next:s,type:`props`,unstable:!1}),t.set(a,i)}for(let[e,n]of Array.from(t.entries())){console.group(`%c${e}`,`background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;`);for(let{type:e,prev:t,next:r,unstable:i}of n)console.log(`${e}:`,i?`⚠️`:``,t,`!==`,r);console.groupEnd()}},qi=()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log(`%c[·] %cReact Scan`,`font-weight:bold;color:#7a68e8;font-size:20px;`,`font-weight:bold;font-size:14px;`)},Ji=7,Yi=`Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace`,Xi=.2,Zi=.5,Qi=(e,t)=>{let n=t-e;return Math.abs(n)<Zi?t:e+n*Xi},$i=4,ea=40,ta=45,na=`115,97,230`,ra=e=>{let t=new Map;for(let{name:n,count:r}of e)t.set(n,(t.get(n)||0)+r);let n=new Map;for(let[e,r]of t){let t=n.get(r);t?t.push(e):n.set(r,[e])}let r=Fe(n),i=Ie(r[0]);for(let e=1,t=r.length;e<t;e++)i+=`, `+Ie(r[e]);return i.length>ea?`${i.slice(0,ea)}\u2026`:i},ia=e=>{let t=0;for(let n of e)t+=n.width*n.height;return t},aa=(e,t)=>{for(let{id:n,name:r,count:i,x:a,y:o,width:s,height:c,didCommit:l}of t){let t={id:n,name:r,count:i,x:a,y:o,width:s,height:c,frame:0,targetX:a,targetY:o,targetWidth:s,targetHeight:c,didCommit:l},u=String(t.id),d=e.get(u);d?(d.count++,d.frame=0,d.targetX=a,d.targetY=o,d.targetWidth=s,d.targetHeight=c,d.didCommit=l):e.set(u,t)}},oa=(e,t,n)=>{for(let r of e.values()){let e=r.x-t,i=r.y-n;r.targetX=e,r.targetY=i}},sa=(e,t)=>{let n=e.getContext(`2d`,{alpha:!0});return n&&n.scale(t,t),n},ca=(e,t,n,r)=>{e.clearRect(0,0,t.width/n,t.height/n);let i=new Map,a=new Map;for(let e of r.values()){let{x:t,y:n,width:r,height:o,targetX:s,targetY:c,targetWidth:l,targetHeight:u,frame:d}=e;s!==t&&(e.x=Qi(t,s)),c!==n&&(e.y=Qi(n,c)),l!==r&&(e.width=Qi(r,l)),u!==o&&(e.height=Qi(o,u));let f=`${s??t},${c??n}`,p=`${f},${l??r},${u??o}`,m=i.get(f);m?m.push(e):i.set(f,[e]);let h=1-d/ta;e.frame++;let g=a.get(p)||{x:t,y:n,width:r,height:o,alpha:h};h>g.alpha&&(g.alpha=h),a.set(p,g)}for(let{x:t,y:n,width:r,height:i,alpha:o}of a.values()){e.strokeStyle=`rgba(${na},${o})`,e.lineWidth=1;let a=Math.round(t)+.5,s=Math.round(n)+.5,c=Math.round(r),l=Math.round(i);e.beginPath(),e.rect(a,s,c,l),e.stroke(),e.fillStyle=`rgba(${na},${o*.1})`,e.fill()}e.font=`11px ${Yi}`;let o=new Map;e.textRendering=`optimizeSpeed`;for(let t of i.values()){let{x:n,y:i,frame:a}=t[0],s=1-a/ta,c=ra(t),{width:l}=e.measureText(c);o.set(`${n},${i},${l},${c}`,{text:c,width:l,height:11,alpha:s,x:n,y:i,outlines:t});let u=i-11-4;if(u<0&&(u=0),a>ta)for(let e of t)r.delete(String(e.id))}let s=Array.from(o.entries()).sort(([e,t],[n,r])=>ia(r.outlines)-ia(t.outlines));for(let[t,n]of s)if(o.has(t))for(let[r,i]of o.entries()){if(t===r)continue;let{x:a,y:s,width:c,height:l}=n,{x:u,y:d,width:f,height:p}=i;a+c>u&&u+f>a&&s+l>d&&d+p>s&&(n.text=ra(n.outlines.concat(i.outlines)),n.width=e.measureText(n.text).width,o.delete(r))}for(let t of o.values()){let{x:n,y:r,alpha:i,width:a,height:o,text:s}=t,c=r-o-4;c<0&&(c=0),e.fillStyle=`rgba(${na},${i})`,e.fillRect(n,c,a+4,o+4),e.fillStyle=`rgba(255,255,255,${i})`,e.fillText(s,n+2,c+o)}return r.size>0},la='"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var T=(t,n)=>{let r=n-t;return Math.abs(r)<.5?n:t+r*.2};var x="115,97,230";function P(t,n){return n[0]-t[0]}function F(t){return[...t.entries()].sort(P)}function v([t,n]){let r=`${n.slice(0,4).join(", ")} \\xD7${t}`;return r.length>40&&(r=`${r.slice(0,40)}\\u2026`),r}var $=t=>{let n=new Map;for(let{name:e,count:u}of t)n.set(e,(n.get(e)||0)+u);let r=new Map;for(let[e,u]of n){let A=r.get(u);A?A.push(e):r.set(u,[e])}let d=F(r),a=v(d[0]);for(let e=1,u=d.length;e<u;e++)a+=", "+v(d[e]);return a.length>40?`${a.slice(0,40)}\\u2026`:a},H=t=>{let n=0;for(let r of t)n+=r.width*r.height;return n};var N=(t,n)=>{let r=t.getContext("2d",{alpha:!0});return r&&r.scale(n,n),r},X=(t,n,r,d)=>{t.clearRect(0,0,n.width/r,n.height/r);let a=new Map,e=new Map;for(let i of d.values()){let{x:o,y:c,width:l,height:g,targetX:s,targetY:f,targetWidth:h,targetHeight:m,frame:O}=i;s!==o&&(i.x=T(o,s)),f!==c&&(i.y=T(c,f)),h!==l&&(i.width=T(l,h)),m!==g&&(i.height=T(g,m));let M=`${s??o},${f??c}`,L=`${M},${h??l},${m??g}`,S=a.get(M);S?S.push(i):a.set(M,[i]);let C=1-O/45;i.frame++;let _=e.get(L)||{x:o,y:c,width:l,height:g,alpha:C};C>_.alpha&&(_.alpha=C),e.set(L,_)}for(let{x:i,y:o,width:c,height:l,alpha:g}of e.values()){t.strokeStyle=`rgba(${x},${g})`,t.lineWidth=1;let s=Math.round(i)+.5,f=Math.round(o)+.5,h=Math.round(c),m=Math.round(l);t.beginPath(),t.rect(s,f,h,m),t.stroke(),t.fillStyle=`rgba(${x},${g*.1})`,t.fill()}t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let i of a.values()){let o=i[0],{x:c,y:l,frame:g}=o,s=1-g/45,f=$(i),{width:h}=t.measureText(f),m=11;u.set(`${c},${l},${h},${f}`,{text:f,width:h,height:m,alpha:s,x:c,y:l,outlines:i});let O=l-m-4;if(O<0&&(O=0),g>45)for(let M of i)d.delete(String(M.id))}let A=Array.from(u.entries()).sort(([i,o],[c,l])=>H(l.outlines)-H(o.outlines));for(let[i,o]of A)if(u.has(i))for(let[c,l]of u.entries()){if(i===c)continue;let{x:g,y:s,width:f,height:h}=o,{x:m,y:O,width:M,height:L}=l;g+f>m&&m+M>g&&s+h>O&&O+L>s&&(o.text=$(o.outlines.concat(l.outlines)),o.width=t.measureText(o.text).width,u.delete(c))}for(let i of u.values()){let{x:o,y:c,alpha:l,width:g,height:s,text:f}=i,h=c-s-4;h<0&&(h=0),t.fillStyle=`rgba(${x},${l})`,t.fillRect(o,h,g+4,s+4),t.fillStyle=`rgba(255,255,255,${l})`,t.fillText(f,o+2,h+s)}return d.size>0};var p=null,w=null,b=1,y=new Map,E=null,R=()=>{if(!w||!p)return;X(w,p,b,y)?E=requestAnimationFrame(R):E=null};self.onmessage=t=>{let{type:n}=t.data;if(n==="init"&&(p=t.data.canvas,b=t.data.dpr,p&&(p.width=t.data.width,p.height=t.data.height,w=N(p,b))),!(!p||!w)){if(n==="resize"){b=t.data.dpr,p.width=t.data.width*b,p.height=t.data.height*b,w.resetTransform(),w.scale(b,b),R();return}if(n==="draw-outlines"){let{data:r,names:d}=t.data,a=new Float32Array(r);for(let e=0;e<a.length;e+=7){let u=a[e+2],A=a[e+3],i=a[e+4],o=a[e+5],c=a[e+6],l={id:a[e],name:d[e/7],count:a[e+1],x:u,y:A,width:i,height:o,frame:0,targetX:u,targetY:A,targetWidth:i,targetHeight:o,didCommit:c},g=String(l.id),s=y.get(g);s?(s.count++,s.frame=0,s.targetX=u,s.targetY=A,s.targetWidth=i,s.targetHeight=o,s.didCommit=c):y.set(g,l)}E||(E=requestAnimationFrame(R));return}if(n==="scroll"){let{deltaX:r,deltaY:d}=t.data;for(let a of y.values()){let e=a.x-r,u=a.y-d;a.targetX=e,a.targetY=u}}}};})();\n',ua=null,da=null,fa=null,pa=1,ma=null,ha=new Map,ga=new Map,_a=new Set,va=e=>{if(!d(e))return;let t=typeof e.type==`string`?e.type:N(e);if(!t)return;let n=ga.get(e),r=C(e),i=ne(e);n?n.count++:(ga.set(e,{name:t,count:1,elements:r.map(e=>e.stateNode),didCommit:+!!i}),_a.add(e))},ya=e=>{let t=e[0];if(e.length===1)return t;let n,r,i,a;for(let t=0,o=e.length;t<o;t++){let o=e[t];n=n==null?o.x:Math.min(n,o.x),r=r==null?o.y:Math.min(r,o.y),i=i==null?o.x+o.width:Math.max(i,o.x+o.width),a=a==null?o.y+o.height:Math.max(a,o.y+o.height)}return n==null||r==null||i==null||a==null?e[0]:new DOMRect(n,r,i-n,a-r)},ba=async function*(e){let t={uniqueElements:new Set(e),seenElements:new Set,resolveNext:null,done:!1},n=new IntersectionObserver(Le.bind(t));for(let e of t.uniqueElements)n.observe(e);for(;!t.done;){let e=await new Promise(e=>{t.resolveNext=e});e.length>0&&(yield e)}},xa=typeof SharedArrayBuffer<`u`?SharedArrayBuffer:ArrayBuffer,Sa=async()=>{let e=[];for(let t of _a){let n=ga.get(t);if(n)for(let t=0;t<n.elements.length;t++)n.elements[t]instanceof Element&&e.push(n.elements[t])}let t=new Map;for await(let n of ba(e)){for(let e of n){let n=e.target,r=e.intersectionRect;e.isIntersecting&&r.width&&r.height&&t.set(n,r)}let e=[],r=[],i=[];for(let n of _a){let a=ga.get(n);if(!a)continue;let o=[];for(let e=0;e<a.elements.length;e++){let n=a.elements[e],r=t.get(n);r&&o.push(r)}o.length&&(e.push(a),r.push(ya(o)),i.push(ee(n)))}if(e.length>0){let t=new xa(e.length*Ji*4),n=new Float32Array(t),a=Array(e.length),o;for(let t=0,s=e.length;t<s;t++){let s=e[t],c=i[t],{x:l,y:u,width:d,height:f}=r[t],{count:p,name:m,didCommit:h}=s;if(ua){let e=t*Ji;n[e]=c,n[e+1]=p,n[e+2]=l,n[e+3]=u,n[e+4]=d,n[e+5]=f,n[e+6]=h,a[t]=m}else o||=Array(e.length),o[t]={id:c,name:m,count:p,x:l,y:u,width:d,height:f,didCommit:h}}ua?ua.postMessage({type:`draw-outlines`,data:t,names:a}):da&&fa&&o&&(aa(ha,o),ma||=requestAnimationFrame(Ca))}}for(let e of _a)ga.delete(e),_a.delete(e)},Ca=()=>{!fa||!da||(ma=ca(fa,da,pa,ha)?requestAnimationFrame(Ca):null)},wa=typeof OffscreenCanvas<`u`&&typeof Worker<`u`,Ta=()=>Math.min(window.devicePixelRatio||1,2),Ea=()=>{Oa();let e=document.createElement(`div`);e.setAttribute(`data-react-scan`,`true`);let t=e.attachShadow({mode:`open`}),n=document.createElement(`canvas`);if(n.style.position=`fixed`,n.style.top=`0`,n.style.left=`0`,n.style.pointerEvents=`none`,n.style.zIndex=`2147483646`,n.setAttribute(`aria-hidden`,`true`),t.appendChild(n),!n)return null;pa=Ta(),da=n;let{innerWidth:r,innerHeight:i}=window;n.style.width=`${r}px`,n.style.height=`${i}px`;let a=r*pa,o=i*pa;n.width=a,n.height=o;let s=$.options.value.useOffscreenCanvasWorker===!1;if(wa&&!window.__REACT_SCAN_EXTENSION__&&!s)try{let e=URL.createObjectURL(new Blob([la],{type:`application/javascript`}));ua=new Worker(e);let t=n.transferControlToOffscreen();ua.postMessage({type:`init`,canvas:t,width:n.width,height:n.height,dpr:pa},[t])}catch(e){ua=null,$.options.value._debug===`verbose`&&console.warn(`Failed to initialize OffscreenCanvas worker:`,e)}ua||(fa=sa(n,pa));let c=!1;window.addEventListener(`resize`,()=>{c||(c=!0,setTimeout(()=>{let e=window.innerWidth,t=window.innerHeight;pa=Ta(),n.style.width=`${e}px`,n.style.height=`${t}px`,ua?ua.postMessage({type:`resize`,width:e,height:t,dpr:pa}):(n.width=e*pa,n.height=t*pa,fa&&(fa.resetTransform(),fa.scale(pa,pa)),Ca()),c=!1}))});let l=window.scrollX,u=window.scrollY,d=!1;return window.addEventListener(`scroll`,()=>{d||(d=!0,setTimeout(()=>{let{scrollX:e,scrollY:t}=window,n=e-l,r=t-u;l=e,u=t,ua?ua.postMessage({type:`scroll`,deltaX:n,deltaY:r}):requestAnimationFrame(oa.bind(null,ha,n,r)),d=!1},32))}),setInterval(()=>{_a.size&&requestAnimationFrame(Sa)},32),t.appendChild(n),e},Da=()=>globalThis.__REACT_SCAN_STOP__,Oa=()=>{let e=document.querySelector(`[data-react-scan]`);e&&e.remove()},ka=e=>{if(d(e)&&$.options.value.showToolbar!==!1&&Q.inspectState.value.kind===`focused`){let t=e,{selfTime:n}=v(e),i=N(e.type),a=ee(t),o=Q.reportData.get(a),s=o?.count??0,c=o?.time??0,l=[],u=Q.changesListeners.get(ee(e));if(u?.length){let t=Kr(e).map(e=>({type:1,name:e.name,value:e.value,prevValue:e.prevValue,unstable:!1})),n=Mi(e),r=Ii(e).map(e=>({name:e.name,type:4,value:e.value,contextType:e.contextType}));u.forEach(e=>{e({propsChanges:t,stateChanges:n,contextChanges:r})})}let d={count:s+1,time:c+n||0,renders:[],displayName:i,type:r(e.type)||null,changes:l};Q.reportData.set(a,d),Aa=!0}},Aa=!1,Ma=()=>{clearInterval(ja),ja=setInterval(()=>{Aa&&=(Q.lastReportTime.value=Date.now(),!1)},50)},Na=e=>!el.has(e.memoizedProps),Pa=!1,Fa=e=>{if(Da()||Pa)return;Pa=!0;let t,n=!1,r=()=>{n||(t&&cancelAnimationFrame(t),t=requestAnimationFrame(()=>{n=!0;let t=Ea();t&&document.documentElement.appendChild(t),e()}))};$.instrumentation=Gi(`react-scan-devtools-0.1.0`,{onCommitStart:()=>{var e,t;(t=(e=$.options.value).onCommitStart)==null||t.call(e)},onActive:(()=>{let e=!1;return()=>{Da()||e||(e=!0,r(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:$}),Ma(),qi())}})(),onError:()=>{},isValidFiber:Na,onRender:(e,t)=>{var n,r,i,a;d(e)&&((r=(n=Q).interactionListeningForRenders)==null||r.call(n,e,t));let o=$.instrumentation?.isPaused.value,s=Q.inspectState.value.kind===`inspect-off`||Q.inspectState.value.kind===`uninitialized`;o&&s||(o||va(e),$.options.value.log&&Ki(t),Q.inspectState.value.kind===`focused`&&(qn.value=Date.now()),s||ka(e),(a=(i=$.options.value).onRender)==null||a.call(i,e,t))},onCommitFinish:()=>{var e,t;r(),(t=(e=$.options.value).onCommitFinish)==null||t.call(e)},onPostCommitFiberRoot(){r()},trackChanges:!1})},Ia=`/*! tailwindcss v4.2.4 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --color-red-300: oklch(80.8% 0.114 19.571);
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-600: oklch(57.7% 0.245 27.325);
    --color-red-950: oklch(25.8% 0.092 26.042);
    --color-yellow-300: oklch(90.5% 0.182 98.111);
    --color-yellow-500: oklch(79.5% 0.184 86.047);
    --color-green-500: oklch(72.3% 0.219 149.579);
    --color-purple-400: oklch(71.4% 0.203 305.504);
    --color-purple-500: oklch(62.7% 0.265 303.9);
    --color-purple-800: oklch(43.8% 0.218 303.724);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-zinc-200: oklch(92% 0.004 286.32);
    --color-zinc-400: oklch(70.5% 0.015 286.067);
    --color-zinc-500: oklch(55.2% 0.016 285.938);
    --color-zinc-600: oklch(44.2% 0.017 285.786);
    --color-zinc-700: oklch(37% 0.013 285.805);
    --color-zinc-800: oklch(27.4% 0.006 286.033);
    --color-zinc-900: oklch(21% 0.006 285.885);
    --color-neutral-300: oklch(87% 0 0);
    --color-neutral-400: oklch(70.8% 0 0);
    --color-neutral-500: oklch(55.6% 0 0);
    --color-neutral-700: oklch(37.1% 0 0);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 4px;
    --container-md: 448px;
    --text-xs: 12px;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 14px;
    --text-sm--line-height: calc(1.25 / 0.875);
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --tracking-wide: 0.025em;
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 8px;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --blur-sm: 8px;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
      -o-tab-size: 4;
         tab-size: 4;
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
    font-feature-settings: normal;
    font-variation-settings: normal;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::-moz-placeholder {
    opacity: 1;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::-moz-placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
    ::placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    -webkit-appearance: button;
       -moz-appearance: button;
            appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .pointer-events-auto {
    pointer-events: auto;
  }
  .pointer-events-bounding-box {
    pointer-events: bounding-box;
  }
  .pointer-events-none {
    pointer-events: none;
  }
  .collapse {
    visibility: collapse;
  }
  .visible {
    visibility: visible;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .inset-x-1 {
    inset-inline: calc(var(--spacing) * 1);
  }
  .inset-y-0 {
    inset-block: calc(var(--spacing) * 0);
  }
  .start {
    inset-inline-start: var(--spacing);
  }
  .end {
    inset-inline-end: var(--spacing);
  }
  .-top-1 {
    top: calc(var(--spacing) * -1);
  }
  .-top-2\\.5 {
    top: calc(var(--spacing) * -2.5);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-0\\.5 {
    top: calc(var(--spacing) * 0.5);
  }
  .top-1\\/2 {
    top: calc(1 / 2 * 100%);
  }
  .top-2 {
    top: calc(var(--spacing) * 2);
  }
  .-right-1 {
    right: calc(var(--spacing) * -1);
  }
  .-right-2\\.5 {
    right: calc(var(--spacing) * -2.5);
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-0\\.5 {
    right: calc(var(--spacing) * 0.5);
  }
  .right-2 {
    right: calc(var(--spacing) * 2);
  }
  .right-4 {
    right: calc(var(--spacing) * 4);
  }
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .bottom-4 {
    bottom: calc(var(--spacing) * 4);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-3 {
    left: calc(var(--spacing) * 3);
  }
  .z-10 {
    z-index: 10;
  }
  .z-50 {
    z-index: 50;
  }
  .z-100 {
    z-index: 100;
  }
  .z-\\[214748365\\] {
    z-index: 214748365;
  }
  .z-\\[214748367\\] {
    z-index: 214748367;
  }
  .z-\\[124124124124\\] {
    z-index: 124124124124;
  }
  .container {
    width: 100%;
    @media (width >= 640px) {
      max-width: 640px;
    }
    @media (width >= 768px) {
      max-width: 768px;
    }
    @media (width >= 1024px) {
      max-width: 1024px;
    }
    @media (width >= 1280px) {
      max-width: 1280px;
    }
    @media (width >= 1536px) {
      max-width: 1536px;
    }
  }
  .m-\\[2px\\] {
    margin: 2px;
  }
  .mx-0\\.5 {
    margin-inline: calc(var(--spacing) * 0.5);
  }
  .mt-0\\.5 {
    margin-top: calc(var(--spacing) * 0.5);
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mr-0\\.5 {
    margin-right: calc(var(--spacing) * 0.5);
  }
  .mr-1 {
    margin-right: calc(var(--spacing) * 1);
  }
  .mr-1\\.5 {
    margin-right: calc(var(--spacing) * 1.5);
  }
  .mr-16 {
    margin-right: calc(var(--spacing) * 16);
  }
  .mr-auto {
    margin-right: auto;
  }
  .mb-1\\.5 {
    margin-bottom: calc(var(--spacing) * 1.5);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-px {
    margin-bottom: 1px;
  }
  .\\!ml-0 {
    margin-left: calc(var(--spacing) * 0) !important;
  }
  .ml-1 {
    margin-left: calc(var(--spacing) * 1);
  }
  .ml-1\\.5 {
    margin-left: calc(var(--spacing) * 1.5);
  }
  .ml-auto {
    margin-left: auto;
  }
  .block {
    display: block;
  }
  .contents {
    display: contents;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .h-1 {
    height: calc(var(--spacing) * 1);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-4\\/5 {
    height: calc(4 / 5 * 100%);
  }
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-7 {
    height: calc(var(--spacing) * 7);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-12 {
    height: calc(var(--spacing) * 12);
  }
  .h-\\[28px\\] {
    height: 28px;
  }
  .h-\\[48px\\] {
    height: 48px;
  }
  .h-\\[50px\\] {
    height: 50px;
  }
  .h-\\[150px\\] {
    height: 150px;
  }
  .h-\\[235px\\] {
    height: 235px;
  }
  .h-\\[calc\\(100\\%-25px\\)\\] {
    height: calc(100% - 25px);
  }
  .h-\\[calc\\(100\\%-40px\\)\\] {
    height: calc(100% - 40px);
  }
  .h-\\[calc\\(100\\%-48px\\)\\] {
    height: calc(100% - 48px);
  }
  .h-\\[calc\\(100\\%-150px\\)\\] {
    height: calc(100% - 150px);
  }
  .h-\\[calc\\(100\\%-200px\\)\\] {
    height: calc(100% - 200px);
  }
  .h-fit {
    height: -moz-fit-content;
    height: fit-content;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }
  .max-h-0 {
    max-height: calc(var(--spacing) * 0);
  }
  .max-h-9 {
    max-height: calc(var(--spacing) * 9);
  }
  .max-h-40 {
    max-height: calc(var(--spacing) * 40);
  }
  .min-h-9 {
    min-height: calc(var(--spacing) * 9);
  }
  .min-h-\\[48px\\] {
    min-height: 48px;
  }
  .min-h-fit {
    min-height: -moz-fit-content;
    min-height: fit-content;
  }
  .w-1 {
    width: calc(var(--spacing) * 1);
  }
  .w-1\\/2 {
    width: calc(1 / 2 * 100%);
  }
  .w-1\\/3 {
    width: calc(1 / 3 * 100%);
  }
  .w-2\\/4 {
    width: calc(2 / 4 * 100%);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-4\\/5 {
    width: calc(4 / 5 * 100%);
  }
  .w-6 {
    width: calc(var(--spacing) * 6);
  }
  .w-80 {
    width: calc(var(--spacing) * 80);
  }
  .w-\\[20px\\] {
    width: 20px;
  }
  .w-\\[72px\\] {
    width: 72px;
  }
  .w-\\[90\\%\\] {
    width: 90%;
  }
  .w-\\[calc\\(100\\%-200px\\)\\] {
    width: calc(100% - 200px);
  }
  .w-fit {
    width: -moz-fit-content;
    width: fit-content;
  }
  .w-full {
    width: 100%;
  }
  .w-px {
    width: 1px;
  }
  .w-screen {
    width: 100vw;
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .min-w-\\[200px\\] {
    min-width: 200px;
  }
  .min-w-fit {
    min-width: -moz-fit-content;
    min-width: fit-content;
  }
  .flex-1 {
    flex: 1;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .grow {
    flex-grow: 1;
  }
  .-translate-y-1\\/2 {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-\\[200\\%\\] {
    --tw-translate-y: calc(200% * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-0 {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .scale-110 {
    --tw-scale-x: 110%;
    --tw-scale-y: 110%;
    --tw-scale-z: 110%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .-rotate-90 {
    rotate: calc(90deg * -1);
  }
  .rotate-90 {
    rotate: 90deg;
  }
  .rotate-180 {
    rotate: 180deg;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .animate-fade-in {
    animation: fadeIn ease-in forwards;
  }
  .cursor-default {
    cursor: default;
  }
  .cursor-e-resize {
    cursor: e-resize;
  }
  .cursor-ew-resize {
    cursor: ew-resize;
  }
  .cursor-ew-resize {
    cursor: ew-resize;
  }
  .cursor-move {
    cursor: move;
  }
  .cursor-move {
    cursor: move;
  }
  .cursor-nesw-resize {
    cursor: nesw-resize;
  }
  .cursor-nesw-resize {
    cursor: nesw-resize;
  }
  .cursor-ns-resize {
    cursor: ns-resize;
  }
  .cursor-ns-resize {
    cursor: ns-resize;
  }
  .cursor-nwse-resize {
    cursor: nwse-resize;
  }
  .cursor-nwse-resize {
    cursor: nwse-resize;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .cursor-w-resize {
    cursor: w-resize;
  }
  .\\[touch-action\\:none\\] {
    touch-action: none;
  }
  .resize {
    resize: both;
  }
  .flex-col {
    flex-direction: column;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .gap-0\\.5 {
    gap: calc(var(--spacing) * 0.5);
  }
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .space-y-1\\.5 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .gap-x-0\\.5 {
    -moz-column-gap: calc(var(--spacing) * 0.5);
         column-gap: calc(var(--spacing) * 0.5);
  }
  .gap-x-1 {
    -moz-column-gap: calc(var(--spacing) * 1);
         column-gap: calc(var(--spacing) * 1);
  }
  .gap-x-1\\.5 {
    -moz-column-gap: calc(var(--spacing) * 1.5);
         column-gap: calc(var(--spacing) * 1.5);
  }
  .gap-x-2 {
    -moz-column-gap: calc(var(--spacing) * 2);
         column-gap: calc(var(--spacing) * 2);
  }
  .gap-x-3 {
    -moz-column-gap: calc(var(--spacing) * 3);
         column-gap: calc(var(--spacing) * 3);
  }
  .gap-x-4 {
    -moz-column-gap: calc(var(--spacing) * 4);
         column-gap: calc(var(--spacing) * 4);
  }
  .gap-y-0\\.5 {
    row-gap: calc(var(--spacing) * 0.5);
  }
  .gap-y-1 {
    row-gap: calc(var(--spacing) * 1);
  }
  .gap-y-2 {
    row-gap: calc(var(--spacing) * 2);
  }
  .gap-y-4 {
    row-gap: calc(var(--spacing) * 4);
  }
  .divide-y {
    :where(& > :not(:last-child)) {
      --tw-divide-y-reverse: 0;
      border-bottom-style: var(--tw-border-style);
      border-top-style: var(--tw-border-style);
      border-top-width: calc(1px * var(--tw-divide-y-reverse));
      border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
    }
  }
  .divide-zinc-800 {
    :where(& > :not(:last-child)) {
      border-color: var(--color-zinc-800);
    }
  }
  .place-self-center {
    place-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .\\!overflow-visible {
    overflow: visible !important;
  }
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-x-auto {
    overflow-x: auto;
  }
  .overflow-x-hidden {
    overflow-x: hidden;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .rounded {
    border-radius: 4px;
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-sm {
    border-radius: var(--radius-sm);
  }
  .rounded-t-lg {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
  }
  .rounded-t-sm {
    border-top-left-radius: var(--radius-sm);
    border-top-right-radius: var(--radius-sm);
  }
  .rounded-l-md {
    border-top-left-radius: var(--radius-md);
    border-bottom-left-radius: var(--radius-md);
  }
  .rounded-l-sm {
    border-top-left-radius: var(--radius-sm);
    border-bottom-left-radius: var(--radius-sm);
  }
  .rounded-tl-lg {
    border-top-left-radius: var(--radius-lg);
  }
  .rounded-r-md {
    border-top-right-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-md);
  }
  .rounded-r-sm {
    border-top-right-radius: var(--radius-sm);
    border-bottom-right-radius: var(--radius-sm);
  }
  .rounded-tr-lg {
    border-top-right-radius: var(--radius-lg);
  }
  .rounded-br-lg {
    border-bottom-right-radius: var(--radius-lg);
  }
  .rounded-bl-lg {
    border-bottom-left-radius: var(--radius-lg);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-4 {
    border-style: var(--tw-border-style);
    border-width: 4px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-l {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-l-0 {
    border-left-style: var(--tw-border-style);
    border-left-width: 0px;
  }
  .border-l-1 {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-none {
    --tw-border-style: none;
    border-style: none;
  }
  .\\!border-red-500 {
    border-color: var(--color-red-500) !important;
  }
  .border-\\[\\#1e1e1e\\] {
    border-color: #1e1e1e;
  }
  .border-\\[\\#222\\] {
    border-color: #222;
  }
  .border-\\[\\#333\\] {
    border-color: #333;
  }
  .border-\\[\\#27272A\\] {
    border-color: #27272A;
  }
  .border-transparent {
    border-color: transparent;
  }
  .border-zinc-800 {
    border-color: var(--color-zinc-800);
  }
  .bg-\\[\\#0A0A0A\\] {
    background-color: #0A0A0A;
  }
  .bg-\\[\\#1D3A66\\] {
    background-color: #1D3A66;
  }
  .bg-\\[\\#1E1E1E\\] {
    background-color: #1E1E1E;
  }
  .bg-\\[\\#1a2a1a\\] {
    background-color: #1a2a1a;
  }
  .bg-\\[\\#1e1e1e\\] {
    background-color: #1e1e1e;
  }
  .bg-\\[\\#2a1515\\] {
    background-color: #2a1515;
  }
  .bg-\\[\\#4b4b4b\\] {
    background-color: #4b4b4b;
  }
  .bg-\\[\\#5f3f9a\\] {
    background-color: #5f3f9a;
  }
  .bg-\\[\\#5f3f9a\\]\\/40 {
    background-color: color-mix(in oklab, #5f3f9a 40%, transparent);
  }
  .bg-\\[\\#6a369e\\] {
    background-color: #6a369e;
  }
  .bg-\\[\\#8e61e3\\] {
    background-color: #8e61e3;
  }
  .bg-\\[\\#7521c8\\] {
    background-color: #7521c8;
  }
  .bg-\\[\\#18181B\\] {
    background-color: #18181B;
  }
  .bg-\\[\\#18181B\\]\\/50 {
    background-color: color-mix(in oklab, #18181B 50%, transparent);
  }
  .bg-\\[\\#27272A\\] {
    background-color: #27272A;
  }
  .bg-\\[\\#44444a\\] {
    background-color: #44444a;
  }
  .bg-\\[\\#141414\\] {
    background-color: #141414;
  }
  .bg-\\[\\#214379d4\\] {
    background-color: #214379d4;
  }
  .bg-\\[\\#412162\\] {
    background-color: #412162;
  }
  .bg-\\[\\#EFD81A\\] {
    background-color: #EFD81A;
  }
  .bg-\\[\\#b77116\\] {
    background-color: #b77116;
  }
  .bg-\\[\\#b94040\\] {
    background-color: #b94040;
  }
  .bg-\\[\\#d36cff\\] {
    background-color: #d36cff;
  }
  .bg-\\[\\#efd81a6b\\] {
    background-color: #efd81a6b;
  }
  .bg-black {
    background-color: var(--color-black);
  }
  .bg-black\\/40 {
    background-color: color-mix(in srgb, #000 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 40%, transparent);
    }
  }
  .bg-green-500\\/50 {
    background-color: color-mix(in srgb, oklch(72.3% 0.219 149.579) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-green-500) 50%, transparent);
    }
  }
  .bg-green-500\\/60 {
    background-color: color-mix(in srgb, oklch(72.3% 0.219 149.579) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-green-500) 60%, transparent);
    }
  }
  .bg-neutral-700 {
    background-color: var(--color-neutral-700);
  }
  .bg-purple-500 {
    background-color: var(--color-purple-500);
  }
  .bg-purple-500\\/90 {
    background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-purple-500) 90%, transparent);
    }
  }
  .bg-purple-800 {
    background-color: var(--color-purple-800);
  }
  .bg-red-500 {
    background-color: var(--color-red-500);
  }
  .bg-red-500\\/90 {
    background-color: color-mix(in srgb, oklch(63.7% 0.237 25.331) 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-500) 90%, transparent);
    }
  }
  .bg-red-950\\/50 {
    background-color: color-mix(in srgb, oklch(25.8% 0.092 26.042) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-950) 50%, transparent);
    }
  }
  .bg-transparent {
    background-color: transparent;
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .bg-yellow-300 {
    background-color: var(--color-yellow-300);
  }
  .bg-zinc-800 {
    background-color: var(--color-zinc-800);
  }
  .bg-zinc-900\\/30 {
    background-color: color-mix(in srgb, oklch(21% 0.006 285.885) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-zinc-900) 30%, transparent);
    }
  }
  .bg-zinc-900\\/50 {
    background-color: color-mix(in srgb, oklch(21% 0.006 285.885) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-zinc-900) 50%, transparent);
    }
  }
  .p-0 {
    padding: calc(var(--spacing) * 0);
  }
  .p-1 {
    padding: calc(var(--spacing) * 1);
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-5 {
    padding: calc(var(--spacing) * 5);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
  }
  .px-1\\.5 {
    padding-inline: calc(var(--spacing) * 1.5);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .py-0\\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-\\[1px\\] {
    padding-block: 1px;
  }
  .py-\\[3px\\] {
    padding-block: 3px;
  }
  .py-\\[5px\\] {
    padding-block: 5px;
  }
  .pt-0 {
    padding-top: calc(var(--spacing) * 0);
  }
  .pt-2 {
    padding-top: calc(var(--spacing) * 2);
  }
  .pt-5 {
    padding-top: calc(var(--spacing) * 5);
  }
  .pr-1 {
    padding-right: calc(var(--spacing) * 1);
  }
  .pr-1\\.5 {
    padding-right: calc(var(--spacing) * 1.5);
  }
  .pr-2 {
    padding-right: calc(var(--spacing) * 2);
  }
  .pr-2\\.5 {
    padding-right: calc(var(--spacing) * 2.5);
  }
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pl-1 {
    padding-left: calc(var(--spacing) * 1);
  }
  .pl-2 {
    padding-left: calc(var(--spacing) * 2);
  }
  .pl-2\\.5 {
    padding-left: calc(var(--spacing) * 2.5);
  }
  .pl-3 {
    padding-left: calc(var(--spacing) * 3);
  }
  .pl-5 {
    padding-left: calc(var(--spacing) * 5);
  }
  .pl-6 {
    padding-left: calc(var(--spacing) * 6);
  }
  .text-left {
    text-align: left;
  }
  .font-mono {
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[8px\\] {
    font-size: 8px;
  }
  .text-\\[10px\\] {
    font-size: 10px;
  }
  .text-\\[11px\\] {
    font-size: 11px;
  }
  .text-\\[13px\\] {
    font-size: 13px;
  }
  .text-\\[14px\\] {
    font-size: 14px;
  }
  .text-\\[17px\\] {
    font-size: 17px;
  }
  .leading-6 {
    --tw-leading: calc(var(--spacing) * 6);
    line-height: calc(var(--spacing) * 6);
  }
  .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-wide {
    --tw-tracking: var(--tracking-wide);
    letter-spacing: var(--tracking-wide);
  }
  .text-wrap {
    text-wrap: wrap;
  }
  .break-words {
    overflow-wrap: break-word;
  }
  .break-all {
    word-break: break-all;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }
  .text-\\[\\#4ade80\\] {
    color: #4ade80;
  }
  .text-\\[\\#5a5a5a\\] {
    color: #5a5a5a;
  }
  .text-\\[\\#6E6E77\\] {
    color: #6E6E77;
  }
  .text-\\[\\#6F6F78\\] {
    color: #6F6F78;
  }
  .text-\\[\\#8E61E3\\] {
    color: #8E61E3;
  }
  .text-\\[\\#666\\] {
    color: #666;
  }
  .text-\\[\\#888\\] {
    color: #888;
  }
  .text-\\[\\#999\\] {
    color: #999;
  }
  .text-\\[\\#7346a0\\] {
    color: #7346a0;
  }
  .text-\\[\\#65656D\\] {
    color: #65656D;
  }
  .text-\\[\\#737373\\] {
    color: #737373;
  }
  .text-\\[\\#A1A1AA\\] {
    color: #A1A1AA;
  }
  .text-\\[\\#A855F7\\] {
    color: #A855F7;
  }
  .text-\\[\\#E4E4E7\\] {
    color: #E4E4E7;
  }
  .text-\\[\\#d36cff\\] {
    color: #d36cff;
  }
  .text-\\[\\#f87171\\] {
    color: #f87171;
  }
  .text-black {
    color: var(--color-black);
  }
  .text-gray-100 {
    color: var(--color-gray-100);
  }
  .text-gray-300 {
    color: var(--color-gray-300);
  }
  .text-gray-400 {
    color: var(--color-gray-400);
  }
  .text-gray-500 {
    color: var(--color-gray-500);
  }
  .text-green-500 {
    color: var(--color-green-500);
  }
  .text-neutral-300 {
    color: var(--color-neutral-300);
  }
  .text-neutral-400 {
    color: var(--color-neutral-400);
  }
  .text-neutral-500 {
    color: var(--color-neutral-500);
  }
  .text-purple-400 {
    color: var(--color-purple-400);
  }
  .text-red-300 {
    color: var(--color-red-300);
  }
  .text-red-400 {
    color: var(--color-red-400);
  }
  .text-red-500 {
    color: var(--color-red-500);
  }
  .text-white {
    color: var(--color-white);
  }
  .text-white\\/30 {
    color: color-mix(in srgb, #fff 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-white) 30%, transparent);
    }
  }
  .text-white\\/70 {
    color: color-mix(in srgb, #fff 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-white) 70%, transparent);
    }
  }
  .text-yellow-300 {
    color: var(--color-yellow-300);
  }
  .text-yellow-500 {
    color: var(--color-yellow-500);
  }
  .text-zinc-200 {
    color: var(--color-zinc-200);
  }
  .text-zinc-400 {
    color: var(--color-zinc-400);
  }
  .text-zinc-500 {
    color: var(--color-zinc-500);
  }
  .text-zinc-600 {
    color: var(--color-zinc-600);
  }
  .uppercase {
    text-transform: uppercase;
  }
  .italic {
    font-style: italic;
  }
  .opacity-0 {
    opacity: 0%;
  }
  .opacity-50 {
    opacity: 50%;
  }
  .opacity-100 {
    opacity: 100%;
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-white\\/\\[0\\.08\\] {
    --tw-ring-color: color-mix(in srgb, #fff 8%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-white) 8%, transparent);
    }
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .backdrop-blur-sm {
    --tw-backdrop-blur: blur(var(--blur-sm));
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, backdrop-filter, display, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[border-radius\\] {
    transition-property: border-radius;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[color\\,transform\\] {
    transition-property: color,transform;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[max-height\\] {
    transition-property: max-height;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[opacity\\] {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-none {
    transition-property: none;
  }
  .delay-0 {
    transition-delay: 0ms;
  }
  .delay-150 {
    transition-delay: 150ms;
  }
  .delay-300 {
    transition-delay: 300ms;
  }
  .\\!duration-0 {
    --tw-duration: 0ms !important;
    transition-duration: 0ms !important;
  }
  .duration-0 {
    --tw-duration: 0ms;
    transition-duration: 0ms;
  }
  .duration-120 {
    --tw-duration: 120ms;
    transition-duration: 120ms;
  }
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .duration-300 {
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
  .ease-\\[cubic-bezier\\(0\\.25\\,0\\.1\\,0\\.25\\,1\\)\\] {
    --tw-ease: cubic-bezier(0.25,0.1,0.25,1);
    transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
  }
  .ease-in {
    --tw-ease: var(--ease-in);
    transition-timing-function: var(--ease-in);
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
  .will-change-transform {
    will-change: transform;
  }
  .select-none {
    -webkit-user-select: none;
    -moz-user-select: none;
         user-select: none;
  }
  .animation-delay-0 {
    animation-delay: 0s;
  }
  .animation-delay-100 {
    animation-delay: .1s;
  }
  .animation-delay-150 {
    animation-delay: .15s;
  }
  .animation-delay-200 {
    animation-delay: .2s;
  }
  .animation-delay-300 {
    animation-delay: .3s;
  }
  .animation-delay-500 {
    animation-delay: .5s;
  }
  .animation-delay-700 {
    animation-delay: .7s;
  }
  .animation-delay-1000 {
    animation-delay: 1s;
  }
  .animation-duration-0 {
    animation-duration: 0s;
  }
  .animation-duration-100 {
    animation-duration: .1s;
  }
  .animation-duration-200 {
    animation-duration: .2s;
  }
  .animation-duration-300 {
    animation-duration: .3s;
  }
  .animation-duration-500 {
    animation-duration: .5s;
  }
  .animation-duration-700 {
    animation-duration: .7s;
  }
  .animation-duration-1000 {
    animation-duration: 1s;
  }
  .group-hover\\:bg-\\[\\#5b2d89\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #5b2d89;
      }
    }
  }
  .group-hover\\:bg-\\[\\#6a6a6a\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #6a6a6a;
      }
    }
  }
  .group-hover\\:bg-\\[\\#21437982\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #21437982;
      }
    }
  }
  .group-hover\\:bg-\\[\\#efda1a2f\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #efda1a2f;
      }
    }
  }
  .group-hover\\:opacity-100 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
  .peer-hover\\/bottom\\:rounded-b-none {
    &:is(:where(.peer\\/bottom):hover ~ *) {
      @media (hover: hover) {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
  .peer-hover\\/left\\:rounded-l-none {
    &:is(:where(.peer\\/left):hover ~ *) {
      @media (hover: hover) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
  .peer-hover\\/right\\:rounded-r-none {
    &:is(:where(.peer\\/right):hover ~ *) {
      @media (hover: hover) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
  .peer-hover\\/top\\:rounded-t-none {
    &:is(:where(.peer\\/top):hover ~ *) {
      @media (hover: hover) {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }
  .after\\:absolute {
    &::after {
      content: var(--tw-content);
      position: absolute;
    }
  }
  .after\\:inset-0 {
    &::after {
      content: var(--tw-content);
      inset: calc(var(--spacing) * 0);
    }
  }
  .after\\:top-\\[100\\%\\] {
    &::after {
      content: var(--tw-content);
      top: 100%;
    }
  }
  .after\\:left-1\\/2 {
    &::after {
      content: var(--tw-content);
      left: calc(1 / 2 * 100%);
    }
  }
  .after\\:h-\\[6px\\] {
    &::after {
      content: var(--tw-content);
      height: 6px;
    }
  }
  .after\\:w-\\[10px\\] {
    &::after {
      content: var(--tw-content);
      width: 10px;
    }
  }
  .after\\:-translate-x-1\\/2 {
    &::after {
      content: var(--tw-content);
      --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .after\\:animate-\\[fadeOut_1s_ease-out_forwards\\] {
    &::after {
      content: var(--tw-content);
      animation: fadeOut 1s ease-out forwards;
    }
  }
  .after\\:border-t-\\[6px\\] {
    &::after {
      content: var(--tw-content);
      border-top-style: var(--tw-border-style);
      border-top-width: 6px;
    }
  }
  .after\\:border-r-\\[5px\\] {
    &::after {
      content: var(--tw-content);
      border-right-style: var(--tw-border-style);
      border-right-width: 5px;
    }
  }
  .after\\:border-l-\\[5px\\] {
    &::after {
      content: var(--tw-content);
      border-left-style: var(--tw-border-style);
      border-left-width: 5px;
    }
  }
  .after\\:border-t-white {
    &::after {
      content: var(--tw-content);
      border-top-color: var(--color-white);
    }
  }
  .after\\:border-r-transparent {
    &::after {
      content: var(--tw-content);
      border-right-color: transparent;
    }
  }
  .after\\:border-l-transparent {
    &::after {
      content: var(--tw-content);
      border-left-color: transparent;
    }
  }
  .after\\:bg-purple-500\\/30 {
    &::after {
      content: var(--tw-content);
      background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 30%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-purple-500) 30%, transparent);
      }
    }
  }
  .after\\:content-\\[\\"\\"\\] {
    &::after {
      --tw-content: "";
      content: var(--tw-content);
    }
  }
  .focus-within\\:border-\\[\\#454545\\] {
    &:focus-within {
      border-color: #454545;
    }
  }
  .hover\\:bg-\\[\\#0f0f0f\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #0f0f0f;
      }
    }
  }
  .hover\\:bg-\\[\\#5f3f9a\\]\\/20 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in oklab, #5f3f9a 20%, transparent);
      }
    }
  }
  .hover\\:bg-\\[\\#5f3f9a\\]\\/40 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in oklab, #5f3f9a 40%, transparent);
      }
    }
  }
  .hover\\:bg-\\[\\#18181B\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #18181B;
      }
    }
  }
  .hover\\:bg-\\[\\#34343b\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #34343b;
      }
    }
  }
  .hover\\:bg-red-600 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-red-600);
      }
    }
  }
  .hover\\:bg-zinc-700 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-zinc-700);
      }
    }
  }
  .hover\\:bg-zinc-800\\/50 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in srgb, oklch(27.4% 0.006 286.033) 50%, transparent);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--color-zinc-800) 50%, transparent);
        }
      }
    }
  }
  .hover\\:text-neutral-300 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-neutral-300);
      }
    }
  }
  .hover\\:text-white {
    &:hover {
      @media (hover: hover) {
        color: var(--color-white);
      }
    }
  }
}
* {
  outline: none !important;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}
@-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
    scrollbar-width: 6px;
  }
}
button {
  &:hover {
    @media (hover: hover) {
      background-image: none;
    }
  }
  --tw-outline-style: none;
  outline-style: none;
  --tw-border-style: none;
  border-style: none;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
  cursor: pointer;
}
input {
  --tw-outline-style: none;
  outline-style: none;
  --tw-border-style: none;
  border-style: none;
  background-color: transparent;
  background-image: none;
  &::-moz-placeholder {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  &::placeholder {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  &::-moz-placeholder {
    color: var(--color-neutral-500);
  }
  &::placeholder {
    color: var(--color-neutral-500);
  }
  &::-moz-placeholder {
    font-style: italic;
  }
  &::placeholder {
    font-style: italic;
  }
  &:-moz-placeholder {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &:placeholder-shown {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
svg {
  height: auto;
  width: auto;
  pointer-events: none;
}
.with-data-text {
  overflow: hidden;
  &::before {
    content: attr(data-text);
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
#react-scan-toolbar {
  position: fixed;
  top: calc(var(--spacing) * 0);
  left: calc(var(--spacing) * 0);
  display: flex;
  flex-direction: column;
  --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-size: 13px;
  color: var(--color-white);
  background-color: var(--color-black);
  -webkit-user-select: none;
  -moz-user-select: none;
       user-select: none;
  cursor: move;
  opacity: 0%;
  z-index: 2147483678;
  animation: fadeIn ease-in forwards;
  animation-delay: .3s;
  animation-duration: .3s;
  --tw-shadow: 0 4px 12px var(--tw-shadow-color, rgba(0,0,0,0.2));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  place-self: start;
  will-change: transform;
  backface-visibility: hidden;
}
#react-scan-toolbar pre,
#react-scan-toolbar textarea,
#react-scan-toolbar input[type='text'],
#react-scan-toolbar input[type='search'],
#react-scan-toolbar [data-react-scan-selectable] {
  -webkit-user-select: text;
  -moz-user-select: text;
       user-select: text;
  cursor: text;
}
.button {
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
}
.resize-line-wrapper {
  position: absolute;
  overflow: hidden;
}
.resize-line {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  overflow: hidden;
  background-color: var(--color-black);
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  svg {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-right,
.resize-left {
  inset-block: calc(var(--spacing) * 0);
  width: calc(var(--spacing) * 6);
  cursor: ew-resize;
  .resize-line-wrapper {
    inset-block: calc(var(--spacing) * 0);
    width: calc(1 / 2 * 100%);
  }
  &:hover {
    .resize-line {
      --tw-translate-x: calc(var(--spacing) * 0);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
}
.resize-right {
  right: calc(var(--spacing) * 0);
  --tw-translate-x: calc(1 / 2 * 100%);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    right: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-right-radius: var(--radius-lg);
    border-bottom-right-radius: var(--radius-lg);
    --tw-translate-x: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-left {
  left: calc(var(--spacing) * 0);
  --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    left: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-left-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    --tw-translate-x: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-top,
.resize-bottom {
  inset-inline: calc(var(--spacing) * 0);
  height: calc(var(--spacing) * 6);
  cursor: ns-resize;
  .resize-line-wrapper {
    inset-inline: calc(var(--spacing) * 0);
    height: calc(1 / 2 * 100%);
  }
  &:hover {
    .resize-line {
      --tw-translate-y: calc(var(--spacing) * 0);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
}
.resize-top {
  top: calc(var(--spacing) * 0);
  --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    top: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
    --tw-translate-y: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-bottom {
  bottom: calc(var(--spacing) * 0);
  --tw-translate-y: calc(1 / 2 * 100%);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    bottom: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    --tw-translate-y: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-header {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-right: calc(var(--spacing) * 2);
  padding-left: calc(var(--spacing) * 3);
  min-height: calc(var(--spacing) * 9);
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
  border-color: #222;
  overflow: hidden;
  white-space: nowrap;
}
.react-scan-replay-button,
.react-scan-close-button {
  display: flex;
  align-items: center;
  padding: calc(var(--spacing) * 1);
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: 4px;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.react-scan-replay-button {
  position: relative;
  overflow: hidden;
  background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 50%, transparent) !important;
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-purple-500) 50%, transparent) !important;
  }
  &:hover {
    background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 25%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-purple-500) 25%, transparent);
    }
  }
  &.disabled {
    opacity: 50%;
    pointer-events: none;
  }
  &:before {
    content: "";
    position: absolute;
    inset: calc(var(--spacing) * 0);
    --tw-translate-x: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    animation: shimmer 2s infinite;
    background: linear-gradient(
      to right,
      transparent,
      rgba(142, 97, 227, 0.3),
      transparent
    );
  }
}
.react-scan-close-button {
  background-color: color-mix(in srgb, #fff 10%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-white) 10%, transparent);
  }
  &:hover {
    background-color: color-mix(in srgb, #fff 15%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 15%, transparent);
    }
  }
}
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
.react-section-header {
  position: sticky;
  z-index: 100;
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-inline: calc(var(--spacing) * 3);
  height: calc(var(--spacing) * 7);
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #888;
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
  border-color: #222;
  background-color: #0a0a0a;
}
.react-scan-section {
  display: flex;
  flex-direction: column;
  padding-inline: calc(var(--spacing) * 2);
  color: #888;
  &::before {
    content: var(--tw-content);
    color: var(--color-gray-500);
  }
  &::before {
    --tw-content: attr(data-section);
    content: var(--tw-content);
  }
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  > .react-scan-property {
    margin-left: calc(14px * -1);
  }
}
.react-scan-property {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: calc(var(--spacing) * 8);
  border-left-style: var(--tw-border-style);
  border-left-width: 1px;
  border-color: transparent;
  overflow: hidden;
}
.react-scan-property-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: calc(var(--spacing) * 7);
  max-width: 100%;
  overflow: hidden;
}
.react-scan-string {
  color: #9ecbff;
}
.react-scan-number {
  color: #79c7ff;
}
.react-scan-boolean {
  color: #56b6c2;
}
.react-scan-key {
  width: -moz-fit-content;
  width: fit-content;
  max-width: calc(var(--spacing) * 60);
  white-space: nowrap;
  color: var(--color-white);
}
.react-scan-input {
  color: var(--color-white);
  background-color: var(--color-black);
}
@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.react-scan-arrow {
  position: absolute;
  top: calc(var(--spacing) * 0);
  left: calc(var(--spacing) * 7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: calc(var(--spacing) * 7);
  width: calc(var(--spacing) * 6);
  --tw-translate-x: -100%;
  translate: var(--tw-translate-x) var(--tw-translate-y);
  z-index: 10;
  > svg {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
}
.react-scan-nested {
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: calc(var(--spacing) * 0);
    left: calc(var(--spacing) * 0);
    height: 100%;
    width: 1px;
    background-color: color-mix(in srgb, oklch(55.1% 0.027 264.364) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-500) 30%, transparent);
    }
  }
}
.react-scan-settings {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 4);
  padding-inline: calc(var(--spacing) * 4);
  padding-block: calc(var(--spacing) * 2);
  color: #888;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
}
.react-scan-preview-line {
  position: relative;
  display: flex;
  min-height: calc(var(--spacing) * 7);
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
}
.react-scan-flash-overlay {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  opacity: 0%;
  z-index: 50;
  pointer-events: none;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  mix-blend-mode: multiply;
  background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 90%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-purple-500) 90%, transparent);
  }
}
.react-scan-toggle {
  position: relative;
  display: inline-flex;
  height: calc(var(--spacing) * 6);
  width: calc(var(--spacing) * 10);
  input {
    position: absolute;
    inset: calc(var(--spacing) * 0);
    z-index: 20;
    opacity: 0%;
    cursor: pointer;
    height: 100%;
    width: 100%;
  }
  input:checked {
    + div {
      background-color: #5f3f9a;
      &::before {
        --tw-translate-x: 100%;
        translate: var(--tw-translate-x) var(--tw-translate-y);
        left: auto;
        border-color: #5f3f9a;
      }
    }
  }
  > div {
    position: absolute;
    inset: calc(var(--spacing) * 1);
    background-color: var(--color-neutral-700);
    border-radius: calc(infinity * 1px);
    pointer-events: none;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 300ms;
    transition-duration: 300ms;
    &:before {
      --tw-content: '';
      content: var(--tw-content);
      position: absolute;
      top: calc(1 / 2 * 100%);
      left: calc(var(--spacing) * 0);
      --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
      height: calc(var(--spacing) * 4);
      width: calc(var(--spacing) * 4);
      background-color: var(--color-white);
      border-style: var(--tw-border-style);
      border-width: 2px;
      border-color: var(--color-neutral-700);
      border-radius: calc(infinity * 1px);
      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
      transition-property: all;
      transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
      transition-duration: var(--tw-duration, var(--default-transition-duration));
      --tw-duration: 300ms;
      transition-duration: 300ms;
    }
  }
}
.react-scan-flash-active {
  opacity: 40%;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.react-scan-inspector-overlay {
  display: flex;
  flex-direction: column;
  opacity: 0%;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 200ms;
  transition-duration: 200ms;
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
  will-change: opacity;
  &.fade-out {
    opacity: 0%;
  }
  &.fade-in {
    opacity: 100%;
  }
}
.react-scan-what-changed {
  ul {
    list-style-type: disc;
    padding-left: calc(var(--spacing) * 4);
  }
  li {
    white-space: nowrap;
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      -moz-column-gap: calc(var(--spacing) * 2);
           column-gap: calc(var(--spacing) * 2);
    }
  }
}
.count-badge {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-inline: calc(var(--spacing) * 1.5);
  padding-block: calc(var(--spacing) * 0.5);
  border-radius: 4px;
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  --tw-font-weight: var(--font-weight-medium);
  font-weight: var(--font-weight-medium);
  color: #a855f7;
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  background-color: color-mix(in oklab, #a855f7 10%, transparent);
  transform-origin: center;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  transition-delay: 150ms;
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.count-flash {
  animation: countFlash .3s ease-out forwards;
}
.count-flash-white {
  animation: countFlashShake .3s ease-out forwards;
  transition-delay: 500ms !important;
}
.change-scope {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 1);
       column-gap: calc(var(--spacing) * 1);
  color: #666;
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  > div {
    padding-inline: calc(var(--spacing) * 1.5);
    padding-block: calc(var(--spacing) * 0.5);
    border-radius: 4px;
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
    transform-origin: center;
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    transition-delay: 150ms;
    --tw-duration: 300ms;
    transition-duration: 300ms;
    &[data-flash="true"] {
      background-color: color-mix(in oklab, #a855f7 10%, transparent);
      color: #a855f7;
    }
  }
}
.react-scan-slider {
  position: relative;
  min-height: calc(var(--spacing) * 6);
  > input {
    position: absolute;
    inset: calc(var(--spacing) * 0);
    opacity: 0%;
  }
  &:before {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    top: calc(1 / 2 * 100%);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: calc(var(--spacing) * 1.5);
    background-color: color-mix(in oklab, #8e61e3 40%, transparent);
    border-radius: var(--radius-lg);
    pointer-events: none;
  }
  &:after {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    inset-block: calc(var(--spacing) * -2);
    z-index: calc(10 * -1);
  }
  span {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(var(--spacing) * 0);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: calc(var(--spacing) * 2.5);
    width: calc(var(--spacing) * 2.5);
    border-radius: var(--radius-lg);
    background-color: #8e61e3;
    pointer-events: none;
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 75ms;
    transition-duration: 75ms;
  }
}
.resize-v-line {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: calc(var(--spacing) * 1);
  min-width: calc(var(--spacing) * 1);
  height: 100%;
  width: 100%;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  &:hover,
  &:active {
    > span {
      background-color: #222;
    }
    svg {
      opacity: 100%;
    }
  }
  &::before {
    --tw-content: "";
    content: var(--tw-content);
    position: absolute;
    inset: calc(var(--spacing) * 0);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    width: 1px;
    background-color: #222;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  > span {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: 18px;
    width: calc(var(--spacing) * 1.5);
    border-radius: 4px;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  svg {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    rotate: 90deg;
    color: var(--color-neutral-400);
    opacity: 0%;
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    z-index: 50;
  }
}
.tree-node-search-highlight {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  span {
    padding-block: 1px;
    border-radius: var(--radius-sm);
    background-color: var(--color-yellow-300);
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    color: var(--color-black);
  }
  .single {
    margin-right: 1px;
    padding-inline: 2px;
  }
  .regex {
    padding-inline: 2px;
  }
  .start {
    margin-left: 1px;
    border-top-left-radius: var(--radius-sm);
    border-bottom-left-radius: var(--radius-sm);
  }
  .end {
    margin-right: 1px;
    border-top-right-radius: var(--radius-sm);
    border-bottom-right-radius: var(--radius-sm);
  }
  .middle {
    margin-inline: 1px;
    border-radius: var(--radius-sm);
  }
}
.react-scan-toolbar-notification {
  position: absolute;
  inset-inline: calc(var(--spacing) * 0);
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding: calc(var(--spacing) * 1);
  padding-left: calc(var(--spacing) * 2);
  font-size: 10px;
  color: var(--color-neutral-300);
  background-color: color-mix(in srgb, #000 90%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-black) 90%, transparent);
  }
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  &:before {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    background-color: var(--color-black);
    height: calc(var(--spacing) * 2);
  }
  &.position-top {
    top: 100%;
    --tw-translate-y: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    &::before {
      top: calc(var(--spacing) * 0);
      --tw-translate-y: -100%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  &.position-bottom {
    bottom: 100%;
    --tw-translate-y: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
    &::before {
      bottom: calc(var(--spacing) * 0);
      --tw-translate-y: 100%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  &.is-open {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-header-item {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  --tw-translate-y: calc(200% * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
  &.is-visible {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-components-tree:has(.resize-v-line:hover, .resize-v-line:active)
  .tree {
  overflow: hidden;
}
.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 75ms;
  transition-duration: 75ms;
  transition-timing-function: ease-out;
  > * {
    min-height: 0;
  }
  &.react-scan-expanded {
    grid-template-rows: 1fr;
    transition-duration: 100ms;
  }
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-divide-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@property --tw-content {
  syntax: "*";
  initial-value: "";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes countFlash {
  0% {
    background-color: rgba(168, 85, 247, 0.3);
    transform: scale(1.05);
  }
  100% {
    background-color: rgba(168, 85, 247, 0.1);
    transform: scale(1);
  }
}
@keyframes countFlashShake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px) scale(1.1);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-space-y-reverse: 0;
      --tw-divide-y-reverse: 0;
      --tw-border-style: solid;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-outline-style: solid;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
      --tw-duration: initial;
      --tw-ease: initial;
      --tw-content: "";
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
    }
  }
}
`,La=(e,t,n=t)=>{let[r,a]=b(e);return i(()=>{if(e===r)return;let i=setTimeout(()=>a(e),e?t:n);return()=>clearTimeout(i)},[e,t,n]),r},Ra=async e=>{try{let t=await pe(e),n=`${t.htmlPreview}${t.stackString}`;return n.trim()?(await navigator.clipboard.writeText(n),!0):!1}catch{return!1}},za=()=>{let e=window.getSelection?.call(window);return!!(e&&e.toString().length>0)},Ba=()=>{let e=document.activeElement;if(!e)return!1;let t=e.tagName;return!!(t===`INPUT`||t===`TEXTAREA`||t===`SELECT`||e instanceof HTMLElement&&e.isContentEditable)},Va=()=>{if(typeof navigator>`u`)return!1;let e=navigator.platform||``;return e?/Mac|iPhone|iPad|iPod/i.test(e):/Mac|iPhone|iPad|iPod/i.test(navigator.userAgent)},Ha=()=>typeof window<`u`&&!!window.__REACT_GRAB__,Ua=T(()=>B(`absolute inset-0 flex items-center gap-x-2`,`translate-y-0`,`transition-transform duration-300`,Nn.value&&`-translate-y-[200%]`)),Wa=()=>{let e=M(null),t=M(null),[n,r]=b(null);return de(()=>{let e=Q.inspectState.value;e.kind===`focused`&&r(e.fiber)}),de(()=>{let n=W.value;se(()=>{if(Q.inspectState.value.kind!==`focused`||!e.current||!t.current)return;let{totalUpdates:r,currentIndex:i,updates:a,isVisible:o,windowOffset:s}=n,c=Math.max(0,r-1),l=o?`#${s+i} Re-render`:c>0?`\xD7${c}`:``,u;if(c>0&&i>=0&&i<a.length){let e=a[i]?.fiberInfo?.selfTime;u=e>0?e<.1-2**-52?`< 0.1ms`:`${Number(e.toFixed(1))}ms`:void 0}e.current.dataset.text=l?` \u2022 ${l}`:``,t.current.dataset.text=u?` \u2022 ${u}`:``})}),D(`div`,{className:Ua,children:[ie(()=>{if(!n)return null;let{name:e,wrappers:t,wrapperTypes:r}=kn(n),i=t.length?`${t.join(`(`)}(${e})${`)`.repeat(t.length)}`:e??``,a=r[0];return D(`span`,{title:i,className:`flex items-center gap-x-1`,children:[e??`Unknown`,D(`span`,{title:a?.title,className:`flex items-center gap-x-1 text-[10px] text-purple-400`,children:!!a&&D(E,{children:[D(`span`,{className:B(`rounded py-[1px] px-1`,`truncate`,a.compiler&&`bg-purple-800 text-neutral-400`,!a.compiler&&`bg-neutral-700 text-neutral-300`,a.type===`memo`&&`bg-[#5f3f9a] text-white`),children:a.type},a.type),a.compiler&&D(`span`,{className:`text-yellow-300`,children:`✨`})]})}),r.length>1&&D(`span`,{className:`text-[10px] text-neutral-400`,children:[`×`,r.length-1]})]})},[n]),D(`div`,{className:`flex items-center gap-x-2 mr-auto text-xs text-[#888]`,children:[D(`span`,{ref:e,className:`with-data-text cursor-pointer !overflow-visible`,title:`Click to toggle between rerenders and total renders`}),D(`span`,{ref:t,className:`with-data-text !overflow-visible`})]})]})},Ga=()=>{let e=La(Q.inspectState.value.kind===`focused`,150,0),t=O(!1),n=()=>{U.value={view:`none`},Q.inspectState.value={kind:`inspect-off`}},r=async()=>{let e=Q.inspectState.value;e.kind!==`focused`||!e.focusedDomElement||await Ra(e.focusedDomElement)&&(t.value=!0,setTimeout(()=>{t.value=!1,n()},Je))},a=M(r);if(a.current=r,i(()=>{let e=e=>{let t=Q.inspectState.value;t.kind!==`focused`||!t.focusedDomElement||Ha()||(e.metaKey||e.ctrlKey)&&(e.shiftKey||e.altKey||e.key!==`c`&&e.code!==`KeyC`||Ba()||za()||(e.preventDefault(),e.stopImmediatePropagation(),a.current()))};return document.addEventListener(`keydown`,e,{capture:!0}),()=>{document.removeEventListener(`keydown`,e,{capture:!0})}},[]),U.value.view===`notifications`)return;let o=Q.inspectState.value.kind===`focused`,s=Va()?`⌘C`:`Ctrl+C`;return D(`div`,{className:`react-scan-header`,children:[D(`div`,{className:`relative flex-1 h-full`,children:D(`div`,{className:B(`react-scan-header-item is-visible`,!e&&`!duration-0`),children:D(Wa,{})})}),o&&D(`button`,{type:`button`,title:`Copy element (${s})`,className:`react-scan-close-button`,onClick:r,children:D(P,{name:t.value?`icon-check`:`icon-copy`,className:B(t.value&&`text-green-500`)})}),D(`button`,{type:`button`,title:`Close`,className:`react-scan-close-button`,onClick:n,children:D(P,{name:`icon-close`})})]})},Ka=({className:e,...t})=>D(`div`,{className:B(`react-scan-toggle`,e),children:[D(`input`,{type:`checkbox`,...t}),D(`div`,{})]}),qa=({fps:e})=>D(`div`,{className:B(`flex items-center gap-x-1 px-2 w-full`,`h-6`,`rounded-md`,`font-mono leading-none`,`bg-[#141414]`,`ring-1 ring-white/[0.08]`),children:[D(`div`,{style:{color:(e=>e<30?`#EF4444`:e<50?`#F59E0B`:`rgb(214,132,245)`)(e)},className:`text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center`,children:e}),D(`span`,{className:`text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit`,children:`FPS`})]}),Ja=()=>{let[e,t]=b(null);return i(()=>{let e=setInterval(()=>{t(Oi())},200);return()=>clearInterval(e)},[]),D(`div`,{className:B(`flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]`,`whitespace-nowrap text-sm text-white`),children:e===null?D(E,{children:`️`}):D(qa,{fps:e})})},Ya=!1,Xa=e=>{if(Ya)throw Error(e)},Za=e=>e(),K=class e extends Array{constructor(e=25){super(),He(this,`capacity`,e)}push(...e){let t=super.push(...e);for(;this.length>this.capacity;)this.shift();return t}static fromArray(t,n){let r=new e(n);return r.push(...t),r}},Qa=class{constructor(e){He(this,`subscribers`,new Set),He(this,`currentValue`),this.currentValue=e}subscribe(e){return this.subscribers.add(e),e(this.currentValue),()=>{this.subscribers.delete(e)}}setState(e){this.currentValue=e,this.subscribers.forEach(t=>t(e))}getCurrentState(){return this.currentValue}},$a=150,eo=new Qa(new K($a)),to=50,no=class{constructor(){He(this,`channels`,{})}publish(e,t,n=!0){let r=this.channels[t];if(!r){if(!n)return;this.channels[t]={callbacks:new K(to),state:new K(to)},this.channels[t].state.push(e);return}r.state.push(e),r.callbacks.forEach(t=>t(e))}getAvailableChannels(){return K.fromArray(Object.keys(this.channels),to)}subscribe(e,t,n=!1){let r=()=>(n||this.channels[e].state.forEach(e=>{t(e)}),()=>{let n=this.channels[e].callbacks.filter(e=>e!==t);this.channels[e].callbacks=K.fromArray(n,to)}),i=this.channels[e];return i?(i.callbacks.push(t),r()):(this.channels[e]={callbacks:new K(to),state:new K(to)},this.channels[e].callbacks.push(t),r())}updateChannelState(e,t,n=!0){let r=this.channels[e];if(!r){if(!n)return;let r=new K(to),i={callbacks:new K(to),state:r};this.channels[e]=i,i.state=t(r);return}r.state=t(r.state)}getChannelState(e){return this.channels[e].state??new K(to)}},ro=new no,io={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},ao={providers:[/Provider$/,/^Provider$/,/^Context$/],hocs:[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],containers:[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],utilities:[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],boundaries:[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/]},oo=(e,t=io)=>{let n=[];return t.skipProviders&&n.push(...ao.providers),t.skipHocs&&n.push(...ao.hocs),t.skipContainers&&n.push(...ao.containers),t.skipUtilities&&n.push(...ao.utilities),t.skipBoundaries&&n.push(...ao.boundaries),!n.some(t=>t.test(e))},so=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],co=e=>{for(let t=0;t<so.length;t++)if(so[t].test(e))return!0;let t=!/[aeiou]/i.test(e),n=(e.match(/\d/g)?.length??0)>e.length/2,r=/^[a-z]+$/.test(e),i=/[$_]{2,}/.test(e);return Number(t)+Number(n)+Number(r)+Number(i)>=2},lo=e=>{let t=N(e);return t?t.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,`$<inner>`):``},uo=(e,t=io)=>{if(!e||!N(e.type))return[];let n=[],r=e;for(;r.return;){let e=lo(r.type);e&&!co(e)&&oo(e,t)&&e.toLowerCase()!==e&&n.push(e),r=r.return}let i=Array(n.length);for(let e=0;e<n.length;e++)i[e]=n[n.length-e-1];return i},fo=(e,t=()=>!0)=>{let n=e;for(;n;){let e=N(n.type);if(e&&t(e))return e;n=n.return}return null},mo=`never-hidden`,ho=()=>{po?.();let e=()=>{document.hidden&&(mo=Date.now())};document.addEventListener(`visibilitychange`,e),po=()=>{document.removeEventListener(`visibilitychange`,e)}},go=e=>[`pointerup`,`click`].includes(e)?`pointer`:(e.includes(`key`),[`keydown`,`keyup`].includes(e)?`keyboard`:null),_o=null,vo=e=>{ho();let t=new Map,n=new Map,r=r=>{if(!r.interactionId)return;if(r.interactionId&&r.target&&!n.has(r.interactionId)&&n.set(r.interactionId,r.target),r.target){let e=r.target;for(;e;){if(e.id===`react-scan-toolbar-root`||e.id===`react-scan-root`)return;e=e.parentElement}}let i=t.get(r.interactionId);if(i)r.duration>i.latency?(i.entries=[r],i.latency=r.duration):r.duration===i.latency&&r.startTime===i.entries[0].startTime&&i.entries.push(r);else{let n=go(r.name);if(!n)return;let i={id:r.interactionId,latency:r.duration,entries:[r],target:r.target,type:n,startTime:r.startTime,endTime:Date.now(),processingStart:r.processingStart,processingEnd:r.processingEnd,duration:r.duration,inputDelay:r.processingStart-r.startTime,processingDuration:r.processingEnd-r.processingStart,presentationDelay:r.duration-(r.processingEnd-r.startTime),timestamp:Date.now(),timeSinceTabInactive:mo===`never-hidden`?`never-hidden`:Date.now()-mo,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};t.set(i.id,i),_o||=requestAnimationFrame(()=>{requestAnimationFrame(()=>{e(t.get(i.id)),_o=null})})}},i=new PerformanceObserver(e=>{let t=e.getEntries();for(let e=0,n=t.length;e<n;e++){let n=t[e];r(n)}});try{i.observe({type:`event`,buffered:!0,durationThreshold:16}),i.observe({type:`first-input`,buffered:!0})}catch{}return()=>i.disconnect()},yo=()=>vo(e=>{ro.publish({kind:`entry-received`,entry:e},`recording`)}),bo=25,xo=new K(bo),So=(e,t)=>{let n=null;for(let r of t){if(r.type!==e.type)continue;if(n===null){n=r;continue}let t=(e,t)=>Math.abs(e.startDateTime)-(t.startTime+t.timeOrigin);t(r,e)<t(n,e)&&(n=r)}return n},Co=e=>ro.subscribe(`recording`,t=>{let n=t.kind===`auto-complete-race`?xo.find(e=>e.interactionUUID===t.interactionUUID):So(t.entry,xo);n&&e(n.completeInteraction(t))}),wo=({onMicroTask:e,onRAF:t,onTimeout:n,abort:r})=>{queueMicrotask(()=>{r?.()!==!0&&e()&&requestAnimationFrame(()=>{r?.()!==!0&&t()&&setTimeout(()=>{r?.()!==!0&&n()},0)})})},To=e=>{let t=Rr(e);if(!t)return;let n=t?N(t?.type):`N/A`;if(n||=fo(t,e=>e.length>2)??`N/A`,n)return{componentPath:uo(t),childrenTree:{},componentName:n,elementFiber:t}},Eo=(e,t)=>{let n=null,r=t=>{switch(e){case`pointer`:return t.phase===`start`?`pointerup`:t.target instanceof HTMLInputElement||t.target instanceof HTMLSelectElement?`change`:`click`;case`keyboard`:return t.phase===`start`?`keydown`:`change`}},i={current:{kind:`uninitialized-stage`,interactionUUID:Ge(),stageStart:Date.now(),interactionType:e}},a=n=>{var a,s;if(n.composedPath().some(e=>e instanceof Element&&e.id===`react-scan-toolbar-root`)||(Date.now()-i.current.stageStart>2e3&&(i.current={kind:`uninitialized-stage`,interactionUUID:Ge(),stageStart:Date.now(),interactionType:e}),i.current.kind!==`uninitialized-stage`))return;let c=performance.now();(a=t?.onStart)==null||a.call(t,i.current.interactionUUID);let l=To(n.target);if(!l){(s=t?.onError)==null||s.call(t,i.current.interactionUUID);return}let u={},d=ko(u);i.current={...i.current,interactionType:e,blockingTimeStart:Date.now(),childrenTree:l.childrenTree,componentName:l.componentName,componentPath:l.componentPath,fiberRenders:u,kind:`interaction-start`,interactionStartDetail:c,stopListeningForRenders:d};let f=r({phase:`end`,target:n.target});document.addEventListener(f,o,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(f,o)})};document.addEventListener(r({phase:`start`}),a,{capture:!0});let o=(r,a,o)=>{var s;if(i.current.kind!==`interaction-start`&&a===n){if(e===`pointer`&&r.target instanceof HTMLSelectElement){i.current={kind:`uninitialized-stage`,interactionUUID:Ge(),stageStart:Date.now(),interactionType:e};return}(s=t?.onError)==null||s.call(t,i.current.interactionUUID),i.current={kind:`uninitialized-stage`,interactionUUID:Ge(),stageStart:Date.now(),interactionType:e},Xa(`pointer -> click`);return}n=a,wo({abort:o,onMicroTask:()=>i.current.kind===`uninitialized-stage`?!1:(i.current={...i.current,kind:`js-end-stage`,jsEndDetail:performance.now()},!0),onRAF:()=>{var n;return i.current.kind!==`js-end-stage`&&i.current.kind!==`raf-stage`?((n=t?.onError)==null||n.call(t,i.current.interactionUUID),Xa(`bad transition to raf`),i.current={kind:`uninitialized-stage`,interactionUUID:Ge(),stageStart:Date.now(),interactionType:e},!1):(i.current={...i.current,kind:`raf-stage`,rafStart:performance.now()},!0)},onTimeout:()=>{var n;if(i.current.kind!==`raf-stage`){(n=t?.onError)==null||n.call(t,i.current.interactionUUID),i.current={kind:`uninitialized-stage`,interactionUUID:Ge(),stageStart:Date.now(),interactionType:e},Xa(`raf->timeout`);return}let r=Date.now(),a=Object.freeze({...i.current,kind:`timeout-stage`,blockingTimeEnd:r,commitEnd:performance.now()});i.current={kind:`uninitialized-stage`,interactionUUID:Ge(),stageStart:r,interactionType:e};let o=!1,s=e=>{var n;o=!0;let r={detailedTiming:a,latency:e.kind===`auto-complete-race`?e.detailedTiming.commitEnd-e.detailedTiming.interactionStartDetail:e.entry.latency,completedAt:Date.now(),flushNeeded:!0};(n=t?.onComplete)==null||n.call(t,a.interactionUUID,r,e);let i=xo.filter(e=>e.interactionUUID!==a.interactionUUID);return xo=K.fromArray(i,bo),r},c={completeInteraction:s,endDateTime:Date.now(),startDateTime:a.blockingTimeStart,type:e,interactionUUID:a.interactionUUID};if(xo.push(c),Oo())setTimeout(()=>{if(o)return;s({kind:`auto-complete-race`,detailedTiming:a,interactionUUID:a.interactionUUID});let e=xo.filter(e=>e.interactionUUID!==a.interactionUUID);xo=K.fromArray(e,bo)},1e3);else{let e=xo.filter(e=>e.interactionUUID!==a.interactionUUID);xo=K.fromArray(e,bo),s({kind:`auto-complete-race`,detailedTiming:a,interactionUUID:a.interactionUUID})}}})},s=e=>{let t=Ge();o(e,t,()=>t!==n)};return e===`keyboard`&&document.addEventListener(`keypress`,s),()=>{document.removeEventListener(r({phase:`start`}),a,{capture:!0}),document.removeEventListener(`keypress`,s)}},Do=e=>s(e,e=>{if(k(e))return!0})?.stateNode,Oo=()=>`PerformanceEventTiming`in globalThis,ko=e=>{let t=t=>{let n=N(t.type);if(!n)return;let r=e[n];if(!r){let r=new Set,i=t.return&&Vr(t.return),a=i&&N(i[0]);a&&r.add(a);let{selfTime:o,totalTime:s}=v(t),c=xi(t),l={current:[],changes:new Set,changesCounts:new Map},u={fiberProps:c.fiberProps||l,fiberState:c.fiberState||l,fiberContext:c.fiberContext||l};e[n]={renderCount:1,hasMemoCache:f(t),wasFiberRenderMount:jo(t),parents:r,selfTime:o,totalTime:s,nodeInfo:[{element:Do(t),name:N(t.type)??`Unknown`,selfTime:v(t).selfTime}],changes:u};return}if(Vr(t)?.[0]?.type){let e=t.return&&Vr(t.return),n=e&&N(e[0]);n&&r.parents.add(n)}let{selfTime:i,totalTime:a}=v(t),o=xi(t);if(!o)return;let s={current:[],changes:new Set,changesCounts:new Map};r.wasFiberRenderMount=r.wasFiberRenderMount||jo(t),r.hasMemoCache=r.hasMemoCache||f(t),r.changes={fiberProps:Ao(r.changes?.fiberProps||s,o.fiberProps||s),fiberState:Ao(r.changes?.fiberState||s,o.fiberState||s),fiberContext:Ao(r.changes?.fiberContext||s,o.fiberContext||s)},r.renderCount+=1,r.selfTime+=i,r.totalTime+=a,r.nodeInfo.push({element:Do(t),name:N(t.type)??`Unknown`,selfTime:v(t).selfTime})};return Q.interactionListeningForRenders=t,()=>{Q.interactionListeningForRenders===t&&(Q.interactionListeningForRenders=null)}},Ao=(e,t)=>{let n={current:[...e.current],changes:new Set,changesCounts:new Map};for(let e of t.current)n.current.some(t=>t.name===e.name)||n.current.push(e);for(let r of t.changes)if(typeof r==`string`||typeof r==`number`){n.changes.add(r);let i=e.changesCounts.get(r)||0,a=t.changesCounts.get(r)||0;n.changesCounts.set(r,i+a)}return n},jo=e=>{if(!e.alternate)return!0;let t=e.alternate,n=t&&t.memoizedState!=null&&t.memoizedState.element!=null&&t.memoizedState.isDehydrated!==!0,r=e.memoizedState!=null&&e.memoizedState.element!=null&&e.memoizedState.isDehydrated!==!0;return!n&&r},Mo=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:(e,r)=>{let i,a;r?(i=e,a=r):a=e;let o=i?i(t):void 0,s=(e,t)=>{if(i){let n=i(e),r=i(t);Object.is(o,n)||(o=n,a(n,r))}else a(e,t)};return n.add(s),()=>n.delete(s)}},o=t=e(r,i,a);return a},No=(e=>e?Mo(e):Mo),Po=null,No()(e=>({state:{events:[]},actions:{addEvent:t=>{e(e=>({state:{events:[...e.state.events,t]}}))},clear:()=>{e({state:{events:[]}})}}})),Fo=200,Io=No()((e,t)=>{let n=new Set;return{state:{events:new K(Fo)},actions:{addEvent:r=>{n.forEach(e=>e(r));let i=[...t().state.events,r],a=(e,t)=>{let n=i.find(t=>{if(t.kind!==`long-render`&&t.id!==e.id&&(e.data.startAt<=t.data.startAt&&e.data.endAt<=t.data.endAt&&e.data.endAt>=t.data.startAt||t.data.startAt<=e.data.startAt&&t.data.endAt>=e.data.startAt||e.data.startAt<=t.data.startAt&&e.data.endAt>=t.data.endAt))return!0});n&&t(n)},o=new Set;i.forEach(e=>{e.kind!==`interaction`&&a(e,()=>{o.add(e.id)})});let s=i.filter(e=>!o.has(e.id));e(()=>({state:{events:K.fromArray(s,Fo)}}))},addListener:e=>(n.add(e),()=>{n.delete(e)}),clear:()=>{e({state:{events:new K(Fo)}})}}}}),Lo=()=>ae(Io.subscribe,Io.getState),Ro=null,zo=null,Bo=null,Ho=()=>{let e=e=>{Vo=e.composedPath().map(e=>e.id).filter(Boolean).includes(`react-scan-toolbar`)};return document.addEventListener(`mouseover`,e),Bo=e,()=>{Bo&&document.removeEventListener(`mouseover`,Bo)}},Uo=()=>{let e=()=>{Ro=performance.now(),zo=performance.timeOrigin};return document.addEventListener(`visibilitychange`,e),()=>{document.removeEventListener(`visibilitychange`,e)}},Wo=150,Go=[],Ko=()=>{let e=yo(),t=Ho(),n=Uo(),r=Re(),i=async(e,t,n)=>{Io.getState().actions.addEvent({kind:`interaction`,id:Ge(),data:{startAt:t.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...t,kind:n.kind}}});let r=ro.getChannelState(`recording`);t.detailedTiming.stopListeningForRenders(),r.length&&ro.updateChannelState(`recording`,()=>new K(to))},a=Eo(`pointer`,{onComplete:i}),o=Eo(`keyboard`,{onComplete:i}),s=Co(e=>{eo.setState(K.fromArray(eo.getCurrentState().concat(e),$a))});return()=>{t(),n(),r(),e(),a(),s(),o()}},qo=e=>{let t=e.filter(e=>e.length>2);return t.length===0?e.at(-1)??`Unknown`:t.at(-1)},q=e=>{switch(e.kind){case`interaction`:{let{renderTime:t,otherJSTime:n,framePreparation:r,frameConstruction:i,frameDraw:a}=e;return t+n+r+i+(a??0)}case`dropped-frames`:return e.otherTime+e.renderTime}},Jo=e=>e.wasFiberRenderMount||e.hasMemoCache?!1:e.changes.context.length===0&&e.changes.props.length===0&&e.changes.state.length===0,Yo=e=>{let t=q(e.timing);switch(e.kind){case`interaction`:return t<200?`low`:t<500?`needs-improvement`:`high`;case`dropped-frames`:return t<50?`low`:t<Wo?`needs-improvement`:`high`}},J=()=>o(Xo),Xo=n(null),Zo=({size:e=24,className:t})=>D(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:B([`lucide lucide-chevron-right`,t]),children:D(`path`,{d:`m9 18 6-6-6-6`})}),Qo=({className:e=``,size:t=24,events:n=[]})=>{let r=n.includes(!0),i=n.filter(e=>e).length,a=i>99?`>99`:i,o=r?Math.max(t*.6,14):Math.max(t*.4,6);return D(`div`,{className:`relative`,children:[D(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:`lucide lucide-bell ${e}`,children:[D(`path`,{d:`M10.268 21a2 2 0 0 0 3.464 0`}),D(`path`,{d:`M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`})]}),n.length>0&&i>0&&$.options.value.showNotificationCount&&D(`div`,{className:B([`absolute`,r?`-top-2.5 -right-2.5`:`-top-1 -right-1`,`rounded-full`,`flex items-center justify-center`,`text-[8px] font-medium text-white`,`aspect-square`,r?`bg-red-500/90`:`bg-purple-500/90`]),style:{width:`${o}px`,height:`${o}px`,padding:r?`0.5px`:`0`},children:r&&a})]})},$o=({className:e=``,size:t=24})=>D(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[D(`path`,{d:`M18 6 6 18`}),D(`path`,{d:`m6 6 12 12`})]}),es=({className:e=``,size:t=24})=>D(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[D(`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`}),D(`path`,{d:`M16 9a5 5 0 0 1 0 6`}),D(`path`,{d:`M19.364 18.364a9 9 0 0 0 0-12.728`})]}),ts=({className:e=``,size:t=24})=>D(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[D(`path`,{d:`M16 9a5 5 0 0 1 .95 2.293`}),D(`path`,{d:`M19.364 5.636a9 9 0 0 1 1.889 9.96`}),D(`path`,{d:`m2 2 20 20`}),D(`path`,{d:`m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11`}),D(`path`,{d:`M9.828 4.172A.686.686 0 0 1 11 4.657v.686`})]}),ns=({size:e=24,className:t})=>D(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:B([`lucide lucide-arrow-left`,t]),children:[D(`path`,{d:`m12 19-7-7 7-7`}),D(`path`,{d:`M19 12H5`})]}),rs=({className:e=``,size:t=24})=>D(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[D(`path`,{d:`M14 4.1 12 6`}),D(`path`,{d:`m5.1 8-2.9-.8`}),D(`path`,{d:`m6 12-1.9 2`}),D(`path`,{d:`M7.2 2.2 8 5.1`}),D(`path`,{d:`M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z`})]}),is=({className:e=``,size:t=24})=>D(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[D(`path`,{d:`M10 8h.01`}),D(`path`,{d:`M12 12h.01`}),D(`path`,{d:`M14 8h.01`}),D(`path`,{d:`M16 12h.01`}),D(`path`,{d:`M18 8h.01`}),D(`path`,{d:`M6 8h.01`}),D(`path`,{d:`M7 16h10`}),D(`path`,{d:`M8 12h.01`}),D(`rect`,{width:`20`,height:`16`,x:`2`,y:`4`,rx:`2`})]}),as=({className:e=``,size:t=24})=>D(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,style:{transform:`rotate(180deg)`},children:[D(`circle`,{cx:`12`,cy:`12`,r:`10`}),D(`path`,{d:`m4.9 4.9 14.2 14.2`})]}),os=({className:e=``,size:t=24})=>D(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:e,children:[D(`polyline`,{points:`22 17 13.5 8.5 8.5 13.5 2 7`}),D(`polyline`,{points:`16 17 22 17 22 11`})]}),ss=({children:e,triggerContent:t,wrapperProps:n})=>{let[r,a]=b(`closed`),[s,c]=b(null),[l,u]=b({width:window.innerWidth,height:window.innerHeight}),d=M(null),f=M(null),p=o(jc),m=M(!1);i(()=>{let e=()=>{u({width:window.innerWidth,height:window.innerHeight}),h()};return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let h=()=>{if(d.current&&p){let e=d.current.getBoundingClientRect(),t=p.getBoundingClientRect(),n=e.left+e.width/2,r=e.top;c(new DOMRect(n-t.left,r-t.top,e.width,e.height))}};i(()=>{h()},[d.current]),i(()=>{if(r===`opening`){let e=setTimeout(()=>a(`open`),120);return()=>clearTimeout(e)}else if(r===`closing`){let e=setTimeout(()=>a(`closed`),120);return()=>clearTimeout(e)}},[r]),i(()=>{let e=setInterval(()=>{!m.current&&r!==`closed`&&a(`closing`)},1e3);return()=>clearInterval(e)},[r]);let g=()=>{m.current=!0,h(),a(`opening`)},_=()=>{m.current=!1,h(),a(`closing`)},v=(()=>{if(!s||!p)return{top:0,left:0};let e=p.getBoundingClientRect(),t=f.current?.offsetHeight||40,n=s.x+e.left,r=s.y+e.top,i=n,a=r-4;return i-175/2<5?i=92.5:i+175/2>l.width-5&&(i=l.width-5-175/2),a-t<5&&(a=r+s.height+4),{top:a-e.top,left:i-e.left}})();return D(E,{children:[p&&s&&r!==`closed`&&me(D(`div`,{ref:f,className:B([`absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg`,`transition-[opacity] duration-120 ease-out`,`after:content-[""] after:absolute after:top-[100%]`,`after:left-1/2 after:-translate-x-1/2`,`after:w-[10px] after:h-[6px]`,`after:border-l-[5px] after:border-l-transparent`,`after:border-r-[5px] after:border-r-transparent`,`after:border-t-[6px] after:border-t-white`,`pointer-events-none`,r===`opening`||r===`closing`?`opacity-0`:`opacity-100`]),style:{top:v.top+`px`,left:v.left+`px`,transform:`translate(-50%, calc(-100% - 4px)) scale(${r===`open`?1:.97})`,minWidth:`175px`,willChange:`opacity, transform`},children:e}),p),D(`div`,{ref:d,onMouseEnter:g,onMouseLeave:_,...n,children:t})]})},cs=({selectedEvent:e})=>{let{notificationState:t,setNotificationState:n,setRoute:r}=J();return D(`div`,{className:B([`flex w-full justify-between items-center px-3 py-2 text-xs`]),children:[D(`div`,{className:B([`bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm`]),children:[D(`button`,{onClick:()=>{r({route:`render-visualization`,routeMessage:null})},className:B([`w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1`,t.route===`render-visualization`||t.route===`render-explanation`?`text-white bg-[#7521c8] rounded-sm`:`text-[#6E6E77] bg-[#18181B] rounded-sm`]),children:`Ranked`}),D(`button`,{onClick:()=>{r({route:`other-visualization`,routeMessage:null})},className:B([`w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1`,t.route===`other-visualization`?`text-white bg-[#7521c8] rounded-sm`:`text-[#6E6E77] bg-[#18181B] rounded-sm`]),children:`Overview`}),D(`button`,{onClick:()=>{r({route:`optimize`,routeMessage:null})},className:B([`w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1`,t.route===`optimize`?`text-white bg-[#7521c8] rounded-sm`:`text-[#6E6E77] bg-[#18181B] rounded-sm`]),children:D(`span`,{children:`Prompts`})})]}),D(ss,{triggerContent:D(`button`,{onClick:()=>{n(e=>{e.audioNotificationsOptions.enabled&&e.audioNotificationsOptions.audioContext.state!==`closed`&&e.audioNotificationsOptions.audioContext.close();let t=e.audioNotificationsOptions.enabled;localStorage.setItem(`react-scan-notifications-audio`,String(!t));let n=new AudioContext;return e.audioNotificationsOptions.enabled||Ke(n),t&&n.close(),{...e,audioNotificationsOptions:t?{audioContext:null,enabled:!1}:{audioContext:n,enabled:!0}}})},className:`ml-auto`,children:D(`div`,{className:B([`flex gap-x-2 justify-center items-center text-[#6E6E77]`]),children:[D(`span`,{children:`Alerts`}),t.audioNotificationsOptions.enabled?D(es,{size:16,className:`text-[#6E6E77]`}):D(ts,{size:16,className:`text-[#6E6E77]`})]})}),children:D(E,{children:`Play a chime when a slowdown is recorded`})})]})},ls=e=>{let t=``;return e.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,30).filter(e=>e.totalTime>5).forEach(e=>{let n=``;n+=`Component Name:`,n+=e.name,n+=`
`,n+=`Rendered: ${e.count} times
`,n+=`Sum of self times for ${e.name} is ${e.totalTime.toFixed(0)}ms
`,e.changes.props.length>0&&(n+=`Changed props for all ${e.name} instances ("name:count" pairs)
`,e.changes.props.forEach(e=>{n+=`${e.name}:${e.count}x
`})),e.changes.state.length>0&&(n+=`Changed state for all ${e.name} instances ("hook index:count" pairs)
`,e.changes.state.forEach(e=>{n+=`${e.index}:${e.count}x
`})),e.changes.context.length>0&&(n+=`Changed context for all ${e.name} instances ("context display name (if exists):count" pairs)
`,e.changes.context.forEach(e=>{n+=`${e.name}:${e.count}x
`})),t+=n,t+=`
`}),t},us=({renderTime:e,eHandlerTimeExcludingRenders:t,toRafTime:n,commitTime:r,framePresentTime:i,formattedReactData:a})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${t.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${n.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${r.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${i===null?``:`- how long it took from dom commit for the frame to be presented: ${i.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${a}`,ds=({interactionType:e,name:t,componentPath:n,time:r,renderTime:i,eHandlerTimeExcludingRenders:a,toRafTime:o,commitTime:s,framePresentTime:c,formattedReactData:l})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.


Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)

The interaction was a ${e} on the component named ${t}. This component has the following ancestors ${n}. This is the path from the component, to the root. This should be enough information to figure out where this component is in the user's code base

This path is the component that was clicked, so it should tell you roughly where component had an event handler that triggered a state change.

Please note that the leaf node of this path might not be user code (if they use a UI library), and they may contain many wrapper components that just pass through children that aren't relevant to the actual click. So make you sure analyze the path and understand what the user code is doing

We have a set of high level, and low level data about the performance issue.

The click took ${r.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${i.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${a.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${o.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${s.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${c===null?``:`- how long it took from dom commit for the frame to be presented: ${c.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${l}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

`,fs=({renderTime:e,otherTime:t,formattedReactData:n})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.

Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)


We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time: ${t}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${n}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

If renders don't seem to be the problem, see if there are any expensive CSS properties being added/mutated, or any expensive DOM Element mutations/new elements being created that could cause this slowdown. 
`,ps=({renderTime:e,otherTime:t,formattedReactData:n})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${n}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one, and this can add significant overhead when thousands of effects ran.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,ms=({renderTime:e,otherTime:t,formattedReactData:n})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${n}`,hs=({interactionType:e,name:t,time:n,renderTime:r,eHandlerTimeExcludingRenders:i,toRafTime:a,commitTime:o,framePresentTime:s,formattedReactData:c})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

There was a ${e} on a component named ${t}. This means, roughly, the component that handled the ${e} event was named ${t}.

We have a set of high level, and low level data about the performance issue.

The click took ${n.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${r.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${i.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${a.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${o.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${s===null?``:`- how long it took from dom commit for the frame to be presented: ${s.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${c}


You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,gs=(e,t)=>Za(()=>{switch(e){case`data`:switch(t.kind){case`dropped-frames`:return ms({formattedReactData:ls(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case`interaction`:return us({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:ls(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),toRafTime:t.timing.framePreparation})}case`explanation`:switch(t.kind){case`dropped-frames`:return ps({formattedReactData:ls(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case`interaction`:return hs({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:ls(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:qo(t.componentPath),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),time:q(t.timing),toRafTime:t.timing.framePreparation})}case`fix`:switch(t.kind){case`dropped-frames`:return fs({formattedReactData:ls(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case`interaction`:return ds({commitTime:t.timing.frameConstruction,componentPath:t.componentPath.join(`>`),eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:ls(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:qo(t.componentPath),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),time:q(t.timing),toRafTime:t.timing.framePreparation})}}}),_s=({selectedEvent:e})=>{let[t,n]=b(`fix`),[r,i]=b(!1);return D(`div`,{className:B([`w-full h-full`]),children:[D(`div`,{className:B([`border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden`]),children:[D(`div`,{className:B([`bg-[#18181B] p-1 rounded-t-sm`]),children:D(`div`,{className:B([`flex items-center gap-x-1`]),children:[D(`button`,{onClick:()=>n(`fix`),className:B([`flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm`,t===`fix`?`text-white bg-[#7521c8]`:`text-[#6E6E77] hover:text-white`]),children:`Fix`}),D(`button`,{onClick:()=>n(`explanation`),className:B([`flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm`,t===`explanation`?`text-white bg-[#7521c8]`:`text-[#6E6E77] hover:text-white`]),children:`Explanation`}),D(`button`,{onClick:()=>n(`data`),className:B([`flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm`,t===`data`?`text-white bg-[#7521c8]`:`text-[#6E6E77] hover:text-white`]),children:`Data`})]})}),D(`div`,{className:B([`overflow-y-auto h-full`]),children:D(`pre`,{className:B([`p-2 h-full`,`whitespace-pre-wrap break-words`,`text-gray-300 font-mono `]),children:gs(t,e)})})]}),D(`button`,{onClick:async()=>{let n=gs(t,e);await navigator.clipboard.writeText(n),i(!0),setTimeout(()=>i(!1),1e3)},className:B([`mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm`,`hover:text-white transition-colors duration-200`,`flex items-center justify-center gap-x-2 text-xs`]),children:[D(`span`,{children:r?`Copied!`:`Copy Prompt`}),D(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:B([`transition-transform duration-200`,r&&`scale-110`]),children:r?D(`path`,{d:`M20 6L9 17l-5-5`}):D(E,{children:[D(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}),D(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]})})]})]})},vs=(e,t)=>{switch(e.kind){case`dropped-frames`:return[...t?[{name:`Total Processing Time`,time:q(e.timing),color:`bg-red-500`,kind:`total-processing-time`}]:[{name:`Renders`,time:e.timing.renderTime,color:`bg-purple-500`,kind:`render`},{name:`JavaScript, DOM updates, Draw Frame`,time:e.timing.otherTime,color:`bg-[#4b4b4b]`,kind:`other-frame-drop`}]];case`interaction`:return[...t?[]:[{name:`Renders`,time:e.timing.renderTime,color:`bg-purple-500`,kind:`render`}],{name:t?`React Renders, Hooks, Other JavaScript`:`JavaScript/React Hooks `,time:e.timing.otherJSTime,color:`bg-[#EFD81A]`,kind:`other-javascript`},{name:`Update DOM and Draw New Frame`,time:q(e.timing)-e.timing.renderTime-e.timing.otherJSTime,color:`bg-[#1D3A66]`,kind:`other-not-javascript`}]}},ys=({selectedEvent:e})=>{let[t]=b(Yc()??!1),{notificationState:n}=J(),[r,a]=b(n.routeMessage?.name?[n.routeMessage.name]:[]),s=vs(e,t),c=o(jc);i(()=>{if(n.routeMessage?.name){let e=c?.querySelector(`#overview-scroll-container`),t=c?.querySelector(`#react-scan-overview-bar-${n.routeMessage.name}`);if(e&&t){let n=t.getBoundingClientRect().top-e.getBoundingClientRect().top;e.scrollTop+=n}}},[n.route]),i(()=>{n.route===`other-visualization`&&a(e=>n.routeMessage?.name?[n.routeMessage.name]:e)},[n.route]);let l=s.reduce((e,t)=>e+t.time,0);return D(`div`,{className:`rounded-sm border border-zinc-800 text-xs`,children:[D(`div`,{className:`p-2 border-b border-zinc-800 bg-zinc-900/50`,children:D(`div`,{className:`flex items-center justify-between`,children:[D(`h3`,{className:`text-xs font-medium`,children:`What was time spent on?`}),D(`span`,{className:`text-xs text-zinc-400`,children:[`Total: `,l.toFixed(0),`ms`]})]})}),D(`div`,{className:`divide-y divide-zinc-800`,children:s.map(t=>{let n=r.includes(t.kind);return D(`div`,{id:`react-scan-overview-bar-${t.kind}`,children:[D(`button`,{onClick:()=>a(e=>e.includes(t.kind)?e.filter(e=>e!==t.kind):[...e,t.kind]),className:`w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors`,children:D(`div`,{className:`flex-1`,children:[D(`div`,{className:`flex items-center justify-between mb-2`,children:[D(`div`,{className:`flex items-center gap-0.5`,children:[D(`svg`,{className:`h-4 w-4 text-zinc-400 transition-transform ${n?`rotate-90`:``}`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:D(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5l7 7-7 7`})}),D(`span`,{className:`font-medium flex items-center text-left`,children:t.name})]}),D(`span`,{className:` text-zinc-400`,children:[t.time.toFixed(0),`ms`]})]}),D(`div`,{className:`h-1 bg-zinc-800 rounded-full overflow-hidden`,children:D(`div`,{className:`h-full ${t.color} transition-all`,style:{width:`${t.time/l*100}%`}})})]})}),n&&D(`div`,{className:`bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3`,children:D(`p`,{className:` text-zinc-400 mb-4 text-xs`,children:Za(()=>{switch(e.kind){case`interaction`:switch(t.kind){case`render`:return D(ws,{input:Ss(e)});case`other-javascript`:return D(ws,{input:Cs(e)});case`other-not-javascript`:return D(ws,{input:bs(e)})}case`dropped-frames`:switch(t.kind){case`total-processing-time`:return D(ws,{input:{kind:`total-processing`,data:{time:q(e.timing)}}});case`render`:return D(E,{children:D(ws,{input:{kind:`render`,data:{topByTime:e.groupedFiberRenders.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,3).map(t=>({name:t.name,percentage:t.totalTime/q(e.timing)}))}}})});case`other-frame-drop`:return D(ws,{input:{kind:`other`}})}}})})})]},t.kind)})})]})},bs=e=>{let t=e.groupedFiberRenders.reduce((e,t)=>e+t.count,0),n=e.timing.renderTime/q(e.timing)*100;return t>100?{kind:`high-render-count-update-dom-draw-frame`,data:{count:t,percentageOfTotal:n,copyButton:D(xs,{})}}:{kind:`update-dom-draw-frame`,data:{copyButton:D(xs,{})}}},xs=()=>{let[e,t]=b(!1),{notificationState:n}=J();return D(`button`,{onClick:async()=>{n.selectedEvent&&(await navigator.clipboard.writeText(gs(`explanation`,n.selectedEvent)),t(!0),setTimeout(()=>t(!1),1e3))},className:`bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3`,children:[D(`span`,{children:e?`Copied!`:`Copy Prompt`}),D(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:B([`transition-transform duration-200`,e&&`scale-110`]),children:e?D(`path`,{d:`M20 6L9 17l-5-5`}):D(E,{children:[D(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}),D(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]})})]})},Ss=e=>e.timing.renderTime/q(e.timing)>.3?{kind:`render`,data:{topByTime:e.groupedFiberRenders.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,3).map(t=>({percentage:t.totalTime/q(e.timing),name:t.name}))}}:{kind:`other`},Cs=e=>{let t=e.groupedFiberRenders.reduce((e,t)=>e+t.count,0);return e.timing.otherJSTime/q(e.timing)<.2?{kind:`js-explanation-base`}:e.groupedFiberRenders.find(e=>e.count>200)||e.groupedFiberRenders.reduce((e,t)=>e+t.count,0)>500?{kind:`high-render-count-high-js`,data:{renderCount:t,topByCount:e.groupedFiberRenders.filter(e=>e.count>100).toSorted((e,t)=>t.count-e.count).slice(0,3)}}:e.timing.otherJSTime/q(e.timing)>.3?e.timing.renderTime>.2?{kind:`js-explanation-base`}:{kind:`low-render-count-high-js`,data:{renderCount:t}}:{kind:`js-explanation-base`}},ws=({input:e})=>{switch(e.kind){case`total-processing`:return D(`div`,{className:B([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[D(`p`,{children:[`This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be `,`<=16ms`]}),D(`p`,{children:`To debug the issue, check the "Ranked" tab to see if there are significant component renders`}),D(`p`,{children:`On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build`}),D(`p`,{children:[`To understand precisely what caused the slowdown while in production, use the `,D(`strong`,{children:`Chrome profiler`}),` and analyze the function call times.`]}),D(`p`,{})]});case`render`:return D(`div`,{className:B([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[D(`p`,{children:`This is the time it took React to run components, and internal logic to handle the output of your component.`}),D(`div`,{className:B([`flex flex-col`]),children:[D(`p`,{children:`The slowest components for this time period were:`}),e.data.topByTime.map(e=>D(`div`,{children:[D(`strong`,{children:e.name}),`:`,` `,(e.percentage*100).toFixed(0),`% of total`]},e.name))]}),D(`p`,{children:`To view the render times of all your components, and what caused them to render, go to the "Ranked" tab`}),D(`p`,{children:`The "Ranked" tab shows the render times of every component.`}),D(`p`,{children:`The render times of the same components are grouped together into one bar.`}),D(`p`,{children:`Clicking the component will show you what props, state, or context caused the component to re-render.`})]});case`js-explanation-base`:return D(`div`,{className:B([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[D(`p`,{children:`This is the period when JavaScript hooks and other JavaScript outside of React Renders run.`}),D(`p`,{children:[`The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of `,D(`code`,{children:`useEffect`}),`'s or a large number of useEffect's called, but this can also be JavaScript event handlers (`,D(`code`,{children:`'onclick'`}),`, `,D(`code`,{children:`'onchange'`}),`) that performed expensive computation.`]}),D(`p`,{children:`If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run.`}),D(`p`,{children:[`You should profile your app using the`,` `,D(`strong`,{children:`Chrome DevTools profiler`}),` to learn exactly which functions took the longest to execute.`]})]});case`high-render-count-high-js`:return D(`div`,{className:B([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[D(`p`,{children:`This is the period when JavaScript hooks and other JavaScript outside of React Renders run.`}),e.data.renderCount===0?D(E,{children:[D(`p`,{children:`There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API`}),D(`p`,{children:[`You should try to reproduce the slowdown while profiling your website with the`,D(`strong`,{children:`Chrome DevTools profiler`}),` to see exactly what functions took the longest to execute.`]})]}):D(E,{children:[` `,D(`p`,{children:[`There were `,D(`strong`,{children:e.data.renderCount}),` renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like `,D(`code`,{children:`useEffects`}),`.`]}),D(`div`,{className:B([`flex flex-col`]),children:[D(`p`,{children:`You should try optimizing the renders of:`}),e.data.topByCount.map(e=>D(`div`,{children:[`- `,D(`strong`,{children:e.name}),` (rendered `,e.count,`x)`]},e.name))]}),`and then checking if the problem still exists.`,D(`p`,{children:[`You can also try profiling your app using the`,` `,D(`strong`,{children:`Chrome DevTools profiler`}),` to see exactly what functions took the longest to execute.`]})]})]});case`low-render-count-high-js`:return D(`div`,{className:B([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[D(`p`,{children:`This is the period when JavaScript hooks and other JavaScript outside of React Renders run.`}),D(`p`,{children:[`There were only `,D(`strong`,{children:e.data.renderCount}),` renders detected, which means either you had very expensive hooks like`,` `,D(`code`,{children:`useEffect`}),`/`,D(`code`,{children:`useLayoutEffect`}),`, or there is other JavaScript running during this interaction that took up the majority of the time.`]}),D(`p`,{children:[`To understand precisely what caused the slowdown, use the`,` `,D(`strong`,{children:`Chrome profiler`}),` and analyze the function call times.`]})]});case`high-render-count-update-dom-draw-frame`:return D(`div`,{className:B([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[D(`p`,{children:`These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction.`}),D(`p`,{children:`This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations.`}),D(`p`,{children:[`During this interaction, there were`,` `,D(`strong`,{children:e.data.count}),` renders, which was`,` `,D(`strong`,{children:[e.data.percentageOfTotal.toFixed(0),`%`]}),` of the time spent processing`]}),D(`p`,{children:`The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame.`}),D(`p`,{children:`You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.`}),D(`p`,{children:`If you use an AI-based code editor, you can export the performance data collected as a prompt.`}),D(`p`,{children:e.data.copyButton}),D(`p`,{children:`Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem.`}),D(`p`,{children:`For a larger selection of prompts, try the "Prompts" tab`})]});case`update-dom-draw-frame`:return D(`div`,{className:B([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[D(`p`,{children:`These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction.`}),D(`p`,{children:`This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations.`}),D(`p`,{children:`If you use an AI-based code editor, you can export the performance data collected as a prompt.`}),D(`p`,{children:e.data.copyButton}),D(`p`,{children:`Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem.`}),D(`p`,{children:`For a larger selection of prompts, try the "Prompts" tab`})]});case`other`:return D(`div`,{className:B([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[D(`p`,{children:[`This is the time it took to run everything other than React renders. This can be hooks like `,D(`code`,{children:`useEffect`}),`, other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame.`]}),D(`p`,{children:[`To get a better picture of what happened, profile your app using the`,` `,D(`strong`,{children:`Chrome profiler`}),` when the performance problem arises.`]})]})}},Y=null,X=null,Ts=null,Z=j({kind:`idle`,current:null}),Es=null,Ds=0,Os=1.8,ks=.05,As=1/60,js=()=>{Es&&cancelAnimationFrame(Es),Es=requestAnimationFrame(e=>{if(!Y||!X)return;let t=Ds?Math.min((e-Ds)/1e3,ks):As;Ds=e;let n=Os*t;X.clearRect(0,0,Y.width,Y.height);let r=`hsl(271, 76%, 53%)`,i=Z.value,{alpha:a,current:o}=Za(()=>{switch(i.kind){case`transition`:{let e=i.current?.alpha&&i.current.alpha>0?i.current:i.transitionTo;return{alpha:e?e.alpha:0,current:e}}case`move-out`:return{alpha:i.current?.alpha??0,current:i.current};case`idle`:return{alpha:1,current:i.current}}});switch(o?.rects.forEach(e=>{X&&(X.shadowColor=r,X.shadowBlur=6,X.strokeStyle=r,X.lineWidth=2,X.globalAlpha=a,X.beginPath(),X.rect(e.left,e.top,e.width,e.height),X.stroke(),X.shadowBlur=0,X.beginPath(),X.rect(e.left,e.top,e.width,e.height),X.stroke())}),i.kind){case`move-out`:if(i.current.alpha===0){Z.value={kind:`idle`,current:null},Ds=0;return}i.current.alpha<=.01&&(i.current.alpha=0),i.current.alpha=Math.max(0,i.current.alpha-n),js();return;case`transition`:if(i.current&&i.current.alpha>0){i.current.alpha=Math.max(0,i.current.alpha-n),js();return}if(i.transitionTo.alpha===1){Z.value={kind:`idle`,current:i.transitionTo},Ds=0;return}i.transitionTo.alpha=Math.min(i.transitionTo.alpha+n,1),js();case`idle`:Ds=0;return}})},Ms=null,Ns=e=>{if(Y=document.createElement(`canvas`),X=Y.getContext(`2d`,{alpha:!0}),!X)return null;let t=window.devicePixelRatio||1,{innerWidth:n,innerHeight:r}=window;Y.style.width=`${n}px`,Y.style.height=`${r}px`,Y.width=n*t,Y.height=r*t,Y.style.position=`fixed`,Y.style.left=`0`,Y.style.top=`0`,Y.style.pointerEvents=`none`,Y.style.zIndex=`2147483600`,X.scale(t,t),e.appendChild(Y),Ms&&window.removeEventListener(`resize`,Ms);let i=()=>{if(!Y||!X)return;let e=window.devicePixelRatio||1,{innerWidth:t,innerHeight:n}=window;Y.style.width=`${t}px`,Y.style.height=`${n}px`,Y.width=t*e,Y.height=n*e,X.scale(e,e),js()};return Ms=i,window.addEventListener(`resize`,i),Z.subscribe(()=>{requestAnimationFrame(()=>{js()})}),ze},Ps=()=>{let e=Z.value.current?Z.value.current:Z.value.kind===`transition`?Z.value.transitionTo:null;if(e){if(Z.value.kind===`transition`){Z.value={kind:`move-out`,current:Z.value.current?.alpha===0?Z.value.transitionTo:Z.value.current??Z.value.transitionTo};return}Z.value={kind:`move-out`,current:{alpha:0,...e}}}},Fs=({selectedEvent:e})=>{let t=q(e.timing),n=t-e.timing.renderTime,[r]=b(Yc()),i=e.groupedFiberRenders.map(e=>({event:e,kind:`render`,totalTime:r?e.count:e.totalTime})),a=Za(()=>{switch(e.kind){case`dropped-frames`:return e.timing.renderTime/t<.1;case`interaction`:return(e.timing.otherJSTime+e.timing.renderTime)/t<.2}});e.kind===`interaction`&&!r&&i.push({kind:`other-javascript`,totalTime:e.timing.otherJSTime}),a&&!r&&(e.kind===`interaction`?i.push({kind:`other-not-javascript`,totalTime:q(e.timing)-e.timing.renderTime-e.timing.otherJSTime}):i.push({kind:`other-frame-drop`,totalTime:n}));let o=M({lastCallAt:null,timer:null}),s=i.reduce((e,t)=>e+t.totalTime,0);return D(`div`,{className:B([`flex flex-col h-full w-full gap-y-1`]),children:[Za(()=>{if(r&&i.length===0)return D(`div`,{className:`flex flex-col items-center justify-center h-full text-zinc-400`,children:[D(`p`,{className:`text-sm w-full text-left text-white mb-1.5`,children:`No data available`}),D(`p`,{className:`text-x w-full text-lefts`,children:`No data was collected during this period`})]});if(i.length===0)return D(`div`,{className:`flex flex-col items-center justify-center h-full text-zinc-400`,children:[D(`p`,{className:`text-sm w-full text-left text-white mb-1.5`,children:`No renders collected`}),D(`p`,{className:`text-x w-full text-lefts`,children:`There were no renders during this period`})]})}),i.toSorted((e,t)=>t.totalTime-e.totalTime).map(e=>D(Ls,{bars:i,bar:e,debouncedMouseEnter:o,totalBarTime:s,isProduction:r},e.kind===`render`?e.event.id:e.kind))]})},Is=e=>e.current&&e.current.alpha>0?`fading-out`:`fading-in`,Ls=({bar:e,debouncedMouseEnter:t,totalBarTime:n,isProduction:r,bars:i,depth:a=0})=>{let{setNotificationState:o,setRoute:s}=J(),[c,l]=b(!1),u=e.kind===`render`?e.event.parents.size===0:!0,d=i.filter(t=>t.kind===`render`&&e.kind===`render`?e.event.parents.has(t.event.name)&&t.event.name!==e.event.name:!1),f=e.kind===`render`?Array.from(e.event.parents).filter(e=>!i.some(t=>t.kind===`render`&&t.event.name===e)):[];return D(`div`,{className:`w-full`,children:[D(`div`,{className:B([`w-full flex items-center relative text-xs min-w-0`]),children:[D(`button`,{onMouseLeave:()=>{t.current.timer&&clearTimeout(t.current.timer),Ps()},onMouseEnter:async()=>{let n=async()=>{if(t.current.lastCallAt=Date.now(),e.kind!==`render`){let e=Z.value.current?Z.value.current:Z.value.kind===`transition`?Z.value.transitionTo:null;if(!e){Z.value={kind:`idle`,current:null};return}Z.value={kind:`move-out`,current:{alpha:0,...e}};return}let n=Z.value,r=Za(()=>{switch(n.kind){case`transition`:return n.transitionTo;case`idle`:case`move-out`:return n.current}}),i=[];if(n.kind===`transition`){let t=Is(n);Za(()=>{switch(t){case`fading-in`:Z.value={kind:`transition`,current:n.transitionTo,transitionTo:{rects:i,alpha:0,name:e.event.name}};return;case`fading-out`:Z.value={kind:`transition`,current:Z.value.current?{alpha:0,...Z.value.current}:null,transitionTo:{rects:i,alpha:0,name:e.event.name}};return}})}else Z.value={kind:`transition`,transitionTo:{rects:i,alpha:0,name:e.event.name},current:r?{alpha:0,...r}:null};let a=e.event.elements.filter(e=>e instanceof Element);for await(let e of ba(a))e.forEach(({boundingClientRect:e})=>{i.push(e)}),js()};if(t.current.lastCallAt&&Date.now()-t.current.lastCallAt<200){t.current.timer&&clearTimeout(t.current.timer),t.current.timer=setTimeout(()=>{n()},200);return}n()},onClick:()=>{e.kind===`render`?(o(t=>({...t,selectedFiber:e.event})),s({route:`render-explanation`,routeMessage:null})):s({route:`other-visualization`,routeMessage:{kind:`auto-open-overview-accordion`,name:e.kind}})},className:B([`h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative`]),children:[D(`div`,{style:{minWidth:`fit-content`,width:`${e.totalTime/n*100}%`},className:B([`flex items-center rounded-sm text-white text-xs h-[28px] shrink-0`,e.kind===`render`&&`bg-[#412162] group-hover:bg-[#5b2d89]`,e.kind===`other-frame-drop`&&`bg-[#44444a] group-hover:bg-[#6a6a6a]`,e.kind===`other-javascript`&&`bg-[#efd81a6b] group-hover:bg-[#efda1a2f]`,e.kind===`other-not-javascript`&&`bg-[#214379d4] group-hover:bg-[#21437982]`])}),D(`div`,{className:B([`absolute inset-0 flex items-center px-2`,`min-w-0`]),children:D(`div`,{className:`flex items-center gap-x-2 min-w-0 w-full`,children:[D(`span`,{className:B([`truncate`]),children:Za(()=>{switch(e.kind){case`other-frame-drop`:return`JavaScript, DOM updates, Draw Frame`;case`other-javascript`:return`JavaScript/React Hooks`;case`other-not-javascript`:return`Update DOM and Draw New Frame`;case`render`:return e.event.name}})}),e.kind===`render`&&Jo(e.event)&&D(`div`,{style:{lineHeight:`10px`},className:B([`px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0`]),children:`Memoizable`})]})})]}),D(`button`,{onClick:()=>e.kind===`render`&&!u&&l(!c),className:B([`flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]`,!u&&`hover:bg-[#0f0f0f]`,e.kind===`render`&&!u?`cursor-pointer`:`cursor-default`]),children:[D(`div`,{className:`w-[20px] flex items-center justify-center`,children:e.kind===`render`&&!u&&D(Zo,{className:B(`transition-transform`,c&&`rotate-90`),size:16})}),D(`div`,{style:{minWidth:u?`fit-content`:r?`30px`:`60px`},className:`flex items-center justify-end gap-x-1`,children:[e.kind===`render`&&D(`span`,{className:B([`text-[10px]`]),children:[`x`,e.event.count]}),(e.kind!==`render`||!r)&&D(`span`,{className:`text-[10px] text-[#7346a0] pr-1`,children:[e.totalTime<1?`<1`:e.totalTime.toFixed(0),`ms`]})]})]}),a===0&&D(`div`,{className:B([`absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16`,`pointer-events-none`]),children:`Click to learn more`})]}),c&&(d.length>0||f.length>0)&&D(`div`,{className:`pl-3 flex flex-col gap-y-1 mt-1`,children:[d.toSorted((e,t)=>t.totalTime-e.totalTime).map((e,o)=>D(Ls,{depth:a+1,bar:e,debouncedMouseEnter:t,totalBarTime:n,isProduction:r,bars:i},o)),f.map(e=>D(`div`,{className:`w-full`,children:D(`div`,{className:`w-full flex items-center relative text-xs`,children:D(`div`,{className:`h-full w-full flex items-center relative`,children:[D(`div`,{className:`flex items-center rounded-sm text-white text-xs h-[28px] w-full`}),D(`div`,{className:`absolute inset-0 flex items-center px-2`,children:D(`span`,{className:`truncate whitespace-nowrap text-white/70 w-full`,children:e})})]})})},e))]})]})},Rs=({selectedEvent:e,selectedFiber:t})=>{let{setRoute:n}=J(),[r,i]=b(!0),[a]=b(Yc());_e(()=>{let e=localStorage.getItem(`react-scan-tip-shown`),t=e===`true`?!0:e===`false`?!1:null;if(t===null){i(!0),localStorage.setItem(`react-scan-tip-is-shown`,`true`);return}t||i(!1)},[]);let o=t.changes.context.length===0&&t.changes.props.length===0&&t.changes.state.length===0;return D(`div`,{className:B([`w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm`]),children:[D(`div`,{className:B([`flex items-start gap-x-4 `]),children:[D(`button`,{onClick:()=>{n({route:`render-visualization`,routeMessage:null})},className:B([`text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]`]),children:[D(ns,{size:14}),` `,D(`span`,{children:`Overview`})]}),D(`div`,{className:B([`flex flex-col gap-y-1`]),children:[D(`div`,{className:B([`text-sm font-bold text-white overflow-x-hidden`]),children:D(`div`,{className:`flex items-center gap-x-2 truncate`,children:t.name})}),D(`div`,{className:B([`flex gap-x-2`]),children:[!a&&D(E,{children:D(`div`,{className:B([`text-xs text-gray-400`]),children:[`• Render time: `,t.totalTime.toFixed(0),`ms`]})}),D(`div`,{className:B([`text-xs text-gray-400 mb-4`]),children:[`• Renders: `,t.count,`x`]})]})]})]}),r&&!o&&D(`div`,{className:B([`w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative`]),children:[D(`button`,{onClick:()=>{i(!1),localStorage.setItem(`react-scan-tip-shown`,`false`)},className:B([`absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]`]),children:D($o,{size:12})}),D(`div`,{className:B([`w-1 bg-[#d36cff]`])}),D(`div`,{className:B([`flex-1`]),children:[D(`div`,{className:B([`px-3 py-2 text-gray-100 text-xs font-semibold`]),children:`How to stop renders`}),D(`div`,{className:B([`px-3 pb-2 text-gray-400 text-[10px]`]),children:`Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already`})]})]}),o&&D(`div`,{className:B([`w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex`]),children:[D(`div`,{className:B([`w-1 bg-[#d36cff]`])}),D(`div`,{className:B([`flex-1`]),children:[D(`div`,{className:B([`px-3 py-2 text-gray-100 text-sm font-semibold`]),children:`No changes detected`}),D(`div`,{className:B([`px-3 pb-2 text-gray-400 text-xs`]),children:`This component would not have rendered if it was memoized`})]})]}),D(`div`,{className:B([`flex w-full`]),children:[D(`div`,{className:B([`flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3`]),children:[D(`div`,{className:B([`text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center`]),children:`Changed Props`}),t.changes.props.length>0?t.changes.props.toSorted((e,t)=>t.count-e.count).map(e=>D(`div`,{className:B([`flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]`]),children:[D(`span`,{className:B([`text-white `]),children:e.name}),D(`div`,{className:B([` text-[8px]  text-[#d36cff] pl-1 py-1 `]),children:[e.count,`/`,t.count,`x`]})]},e.name)):D(`div`,{className:B([`flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]`]),children:`No changes`})]}),D(`div`,{className:B([`flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3`]),children:[D(`div`,{className:B([` text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center`]),children:`Changed State`}),t.changes.state.length>0?t.changes.state.toSorted((e,t)=>t.count-e.count).map(e=>D(`div`,{className:B([`flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]`]),children:[D(`span`,{className:B([`text-white `]),children:[`index `,e.index]}),D(`div`,{className:B([`rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]`]),children:[e.count,`/`,t.count,`x`]})]},e.index)):D(`div`,{className:B([`flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]`]),children:`No changes`})]}),D(`div`,{className:B([`flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3`]),children:[D(`div`,{className:B([` text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center`]),children:`Changed Context`}),t.changes.context.length>0?t.changes.context.toSorted((e,t)=>t.count-e.count).map(e=>D(`div`,{className:B([`flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto`]),children:[D(`span`,{className:B([`text-white `]),children:e.name}),D(`div`,{className:B([`rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap`]),children:[e.count,`/`,t.count,`x`]})]},e.name)):D(`div`,{className:B([`flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2`]),children:`No changes`})]})]})]})},zs=()=>{let{notificationState:e,setNotificationState:t}=J(),[n,r]=b(`...`),a=M(null);if(i(()=>{let e=setInterval(()=>{r(e=>e===`...`?``:e+`.`)},500);return()=>clearInterval(e)},[]),!e.selectedEvent)return D(`div`,{ref:a,className:B([`h-full w-full flex flex-col items-center justify-center relative py-2 px-4`]),children:[D(`div`,{className:B([`p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0`]),children:D(`button`,{onClick:()=>{U.value={view:`none`}},children:D($o,{size:18,className:`text-[#6F6F78]`})})}),D(`div`,{className:B([`flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md`,` shadow-lg`]),children:D(`div`,{className:B([`flex flex-col items-start gap-y-4`]),children:[D(`div`,{className:B([`flex items-center`]),children:D(`span`,{className:B([`text-zinc-400 font-medium text-[17px]`]),children:[`Scanning for slowdowns`,n]})}),e.events.length!==0&&D(`p`,{className:B([`text-xs`]),children:[`Click on an item in the`,` `,D(`span`,{className:B([`text-purple-400`]),children:`History`}),` list to get started`]}),D(`p`,{className:B([`text-zinc-600 text-xs`]),children:`You don't need to keep this panel open for React Scan to record slowdowns`}),D(`p`,{className:B([`text-zinc-600 text-xs`]),children:`Enable audio alerts to hear a delightful ding every time a large slowdown is recorded`}),D(`button`,{onClick:()=>{if(e.audioNotificationsOptions.enabled){t(e=>{var t;return e.audioNotificationsOptions.audioContext?.state!==`closed`&&((t=e.audioNotificationsOptions.audioContext)==null||t.close()),localStorage.setItem(`react-scan-notifications-audio`,`false`),{...e,audioNotificationsOptions:{audioContext:null,enabled:!1}}});return}localStorage.setItem(`react-scan-notifications-audio`,`true`);let n=new AudioContext;Ke(n),t(e=>({...e,audioNotificationsOptions:{enabled:!0,audioContext:n}}))},className:B([`px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full`,` text-sm flex items-center gap-x-2 justify-center`]),children:e.audioNotificationsOptions.enabled?D(E,{children:D(`span`,{className:`flex items-center gap-x-1`,children:`Disable audio alerts`})}):D(E,{children:D(`span`,{className:`flex items-center gap-x-1`,children:`Enable audio alerts`})})})]})})]});switch(e.route){case`render-visualization`:return D(Bs,{children:D(Fs,{selectedEvent:e.selectedEvent})});case`render-explanation`:if(!e.selectedFiber)throw Error(`Invariant: must have selected fiber when viewing render explanation`);return D(Bs,{children:D(Rs,{selectedFiber:e.selectedFiber,selectedEvent:e.selectedEvent})});case`other-visualization`:return D(Bs,{children:D(`div`,{className:B([`flex w-full h-full flex-col overflow-y-auto`]),id:`overview-scroll-container`,children:D(ys,{selectedEvent:e.selectedEvent})})});case`optimize`:return D(Bs,{children:D(_s,{selectedEvent:e.selectedEvent})})}e.route},Bs=({children:e})=>{let{notificationState:t}=J();if(!t.selectedEvent)throw Error(`Invariant: d must have selected event when viewing render explanation`);return D(`div`,{className:B([`w-full h-full flex flex-col gap-y-2`]),children:[D(`div`,{className:B([`h-[50px] w-full`]),children:D(cs,{selectedEvent:t.selectedEvent})}),D(`div`,{className:B([`h-calc(100%-50px) flex flex-col overflow-y-auto px-3`]),children:e})]})},Vs=({selectedEvent:e})=>{let t=Yo(e);switch(e.kind){case`interaction`:return D(`div`,{className:B([`w-full flex border-b border-[#27272A] min-h-[48px]`]),children:D(`div`,{className:B([`min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4`]),children:[D(`div`,{className:B([`flex items-center gap-x-2 `]),children:[D(`span`,{className:B([`text-[#5a5a5a] mr-0.5`]),children:e.type===`click`?`Clicked `:`Typed in `}),D(`span`,{children:qo(e.componentPath)}),D(`div`,{className:B([`w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap`,t===`low`&&`bg-green-500/50`,t===`needs-improvement`&&`bg-[#b77116]`,t===`high`&&`bg-[#b94040]`]),children:[q(e.timing).toFixed(0),`ms processing time`]})]}),D(`div`,{className:B([`flex items-center gap-x-2  justify-end ml-auto`]),children:D(`div`,{className:B([`p-2 flex justify-center items-center border-[#27272A]`]),children:D(`button`,{onClick:()=>{U.value={view:`none`}},title:`Close`,children:D($o,{size:18,className:`text-[#6F6F78]`})})})})]})});case`dropped-frames`:return D(`div`,{className:B([`w-full flex border-b border-[#27272A] min-h-[48px]`]),children:D(`div`,{className:B([`min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4`]),children:[D(`div`,{className:B([`flex items-center gap-x-2 `]),children:[`FPS Drop`,D(`div`,{className:B([`w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap`,t===`low`&&`bg-green-500/50`,t===`needs-improvement`&&`bg-[#b77116]`,t===`high`&&`bg-[#b94040]`]),children:[`dropped to `,e.fps,` FPS`]})]}),D(`div`,{className:B([`flex items-center gap-x-2 w-2/4 justify-end ml-auto`]),children:D(`div`,{className:B([`p-2 flex justify-center items-center border-[#27272A]`]),children:D(`button`,{onClick:()=>{U.value={view:`none`}},children:D($o,{size:18,className:`text-[#6F6F78]`})})})})]})})}},Hs=({flashingItemsCount:e,totalEvents:t})=>{let[n,r]=b(!1),a=M(0),o=M(0);return i(()=>{if(a.current>=t)return;let e=Date.now()-o.current;if(e>=250){r(!1);let e=setTimeout(()=>{a.current=t,o.current=Date.now(),r(!0),setTimeout(()=>{r(!1)},2e3)},50);return()=>clearTimeout(e)}else{let n=250-e,i=setTimeout(()=>{r(!1),setTimeout(()=>{a.current=t,o.current=Date.now(),r(!0),setTimeout(()=>{r(!1)},2e3)},50)},n);return()=>clearTimeout(i)}},[e]),n},Us=({item:e,shouldFlash:t})=>{let[n,r]=b(!1),i=e.events.map(Yo).reduce((e,t)=>{switch(t){case`high`:return`high`;case`needs-improvement`:return e===`high`?`high`:`needs-improvement`;case`low`:return e}},`low`),a=Hs({flashingItemsCount:e.events.reduce((e,n)=>t(n.id)?e+1:e,0),totalEvents:e.events.length});return D(`div`,{className:B([`flex flex-col gap-y-0.5`]),children:[D(`button`,{onClick:()=>r(e=>!e),className:B([`pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden`,a&&!n&&`after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]`]),children:[D(`div`,{className:B([`w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5`]),children:[D(`span`,{className:B([`min-w-fit`]),children:D(Zo,{className:B([`text-[#A1A1AA] transition-transform`,n?`rotate-90`:``]),size:14},`chevron-${e.timestamp}`)}),D(`span`,{className:B([`text-xs`]),children:e.kind===`collapsed-frame-drops`?`FPS Drops`:qo(e.events.at(0)?.componentPath??[])})]}),D(`div`,{className:B([`ml-auto min-w-fit flex justify-end items-center`]),children:D(`div`,{style:{lineHeight:`10px`},className:B([`w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold`,i===`low`&&`bg-green-500/60`,i===`needs-improvement`&&`bg-[#b77116] text-[10px]`,i===`high`&&`bg-[#b94040]`]),children:[`x`,e.events.length]})})]}),n&&D(Ws,{children:e.events.toSorted((e,t)=>t.timestamp-e.timestamp).map(e=>D(qs,{event:e,shouldFlash:t(e.id)}))})]})},Ws=({children:e})=>D(`div`,{className:`relative pl-6 flex flex-col gap-y-1`,children:[D(`div`,{className:`absolute left-3 top-0 bottom-0 w-px bg-[#27272A]`}),e]}),Gs=e=>{let t=M([]),[n,r]=b(new Set),a=M(!0);return i(()=>{if(a.current){a.current=!1,t.current=e;return}let n=new Set(e.map(e=>e.id)),i=new Set(t.current.map(e=>e.id)),o=new Set;n.forEach(e=>{i.has(e)||o.add(e)}),o.size>0&&(r(o),setTimeout(()=>{r(new Set)},2e3)),t.current=e},[e]),e=>n.has(e)},Ks=({shouldFlash:e})=>{let[t,n]=b(e);return i(()=>{if(e){n(!0);let e=setTimeout(()=>{n(!1)},1e3);return()=>clearTimeout(e)}},[e]),t},qs=({event:e,shouldFlash:t})=>{let{notificationState:n,setNotificationState:r}=J(),i=Yo(e),a=Ks({shouldFlash:t});switch(e.kind){case`interaction`:return D(`button`,{onClick:()=>{r(t=>({...t,selectedEvent:e,route:`render-visualization`,selectedFiber:null}))},className:B([`pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden`,e.id===n.selectedEvent?.id&&`bg-[#18181B]`,a&&`after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]`]),children:[D(`div`,{className:B([`w-4/5 flex items-center justify-start h-full gap-x-1.5`]),children:[D(`span`,{className:B([`min-w-fit text-xs`]),children:Za(()=>{switch(e.type){case`click`:return D(rs,{size:14});case`keyboard`:return D(is,{size:14})}})}),D(`span`,{className:B([`text-xs pr-1 truncate`]),children:qo(e.componentPath)})]}),D(`div`,{className:B([` min-w-fit flex justify-end items-center ml-auto`]),children:D(`div`,{style:{lineHeight:`10px`},className:B([`gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]`,i===`low`&&`bg-green-500/50`,i===`needs-improvement`&&`bg-[#b77116] text-[10px]`,i===`high`&&`bg-[#b94040]`]),children:D(`div`,{style:{lineHeight:`10px`},className:B([`text-[10px] text-white flex items-end`]),children:[q(e.timing).toFixed(0),`ms`]})})})]});case`dropped-frames`:return D(`button`,{onClick:()=>{r(t=>({...t,selectedEvent:e,route:`render-visualization`,selectedFiber:null}))},className:B([`pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden`,e.id===n.selectedEvent?.id&&`bg-[#18181B]`,a&&`after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]`]),children:[D(`div`,{className:B([`w-4/5 flex items-center justify-start h-full text-xs truncate`]),children:[D(os,{size:14,className:`mr-1.5`}),` FPS Drop`]}),D(`div`,{className:B([` min-w-fit flex justify-end items-center ml-auto`]),children:D(`div`,{style:{lineHeight:`10px`},className:B([`w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold`,i===`low`&&`bg-green-500/60`,i===`needs-improvement`&&`bg-[#b77116] text-[10px]`,i===`high`&&`bg-[#b94040]`]),children:[e.fps,` FPS`]})})]})}},Js=e=>e.reduce((e,t)=>{let n=e.at(-1);if(!n)return[{kind:`single`,event:t,timestamp:t.timestamp}];switch(n.kind){case`collapsed-keyboard`:return t.kind===`interaction`&&t.type===`keyboard`&&t.componentPath.join(`-`)===n.events[0].componentPath.join(`-`)?[...e.filter(e=>e!==n),{kind:`collapsed-keyboard`,events:[...n.events,t],timestamp:Math.max(...[...n.events,t].map(e=>e.timestamp))}]:[...e,{kind:`single`,event:t,timestamp:t.timestamp}];case`single`:return n.event.kind===`interaction`&&n.event.type===`keyboard`&&t.kind===`interaction`&&t.type===`keyboard`&&n.event.componentPath.join(`-`)===t.componentPath.join(`-`)?[...e.filter(e=>e!==n),{kind:`collapsed-keyboard`,events:[n.event,t],timestamp:Math.max(n.event.timestamp,t.timestamp)}]:n.event.kind===`dropped-frames`&&t.kind===`dropped-frames`?[...e.filter(e=>e!==n),{kind:`collapsed-frame-drops`,events:[n.event,t],timestamp:Math.max(n.event.timestamp,t.timestamp)}]:[...e,{kind:`single`,event:t,timestamp:t.timestamp}];case`collapsed-frame-drops`:return t.kind===`dropped-frames`?[...e.filter(e=>e!==n),{kind:`collapsed-frame-drops`,events:[...n.events,t],timestamp:Math.max(...[...n.events,t].map(e=>e.timestamp))}]:[...e,{kind:`single`,event:t,timestamp:t.timestamp}]}},[]),Ys=(e=150)=>{let{notificationState:t}=J(),[n,r]=b(t.events);return i(()=>{setTimeout(()=>{r(t.events)},e)},[t.events]),[n,r]},Xs=()=>{let{notificationState:e,setNotificationState:t}=J(),n=Gs(e.events),[r,i]=Ys(),a=Js(r).toSorted((e,t)=>t.timestamp-e.timestamp);return D(`div`,{className:B([`w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto`]),children:[D(`div`,{className:B([`text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between`]),children:[D(`span`,{children:`History`}),D(ss,{wrapperProps:{className:`h-full flex items-center justify-center ml-auto`},triggerContent:D(`button`,{className:B([`hover:bg-[#18181B] rounded-full p-2`]),title:`Clear all events`,onClick:()=>{Io.getState().actions.clear(),t(e=>({...e,selectedEvent:null,selectedFiber:null,route:e.route===`other-visualization`?`other-visualization`:`render-visualization`})),i([])},children:D(as,{className:B([``]),size:16})}),children:D(`div`,{className:B([`w-full flex justify-center`]),children:`Clear all events`})})]}),D(`div`,{className:B([`flex flex-col px-1 gap-y-1`]),children:[a.length===0&&D(`div`,{className:B([`flex items-center justify-center text-zinc-500 text-sm py-4`]),children:`No Events`}),a.map(e=>Za(()=>{switch(e.kind){case`collapsed-keyboard`:return D(Us,{shouldFlash:n,item:e});case`single`:return D(qs,{event:e.event,shouldFlash:n(e.event.id)},e.event.id);case`collapsed-frame-drops`:return D(Us,{shouldFlash:n,item:e})}}))]})]})},Zs=e=>Object.values(e).map(e=>({id:Ge(),totalTime:e.nodeInfo.reduce((e,t)=>e+t.selfTime,0),count:e.nodeInfo.length,name:e.nodeInfo[0].name,deletedAll:!1,parents:e.parents,hasMemoCache:e.hasMemoCache,wasFiberRenderMount:e.wasFiberRenderMount,elements:e.nodeInfo.map(e=>e.element),changes:{context:e.changes.fiberContext.current.filter(t=>e.changes.fiberContext.changesCounts.get(t.name)).map(t=>({name:String(t.name),count:e.changes.fiberContext.changesCounts.get(t.name)??0})),props:e.changes.fiberProps.current.filter(t=>e.changes.fiberProps.changesCounts.get(t.name)).map(t=>({name:String(t.name),count:e.changes.fiberProps.changesCounts.get(t.name)??0})),state:e.changes.fiberState.current.filter(t=>e.changes.fiberState.changesCounts.get(Number(t.name))).map(t=>({index:t.name,count:e.changes.fiberState.changesCounts.get(Number(t.name))??0}))}})),Qs=e=>{i(()=>{let t=setInterval(()=>{e.forEach(e=>{e.groupedFiberRenders&&e.groupedFiberRenders.forEach(e=>{if(e.deletedAll)return;if(!e.elements||e.elements.length===0){e.deletedAll=!0;return}let t=e.elements.length;e.elements=e.elements.filter(e=>e&&e.isConnected),e.elements.length===0&&t>0&&(e.deletedAll=!0)})})},5e3);return()=>{clearInterval(t)}},[e])},$s=()=>{let e=Lo(),t=[];return Qs(t),e.state.events.forEach(e=>{let n=Zs(e.kind===`interaction`?e.data.meta.detailedTiming.fiberRenders:e.data.meta.fiberRenders),r=n.reduce((e,t)=>e+t.totalTime,0);switch(e.kind){case`interaction`:{let{commitEnd:i,jsEndDetail:a,interactionStartDetail:o,rafStart:s}=e.data.meta.detailedTiming;a-o-r<0&&Xa(`js time must be longer than render time`);let c=Math.max(0,a-o-r),l=Math.max(e.data.meta.latency-(i-o),0);t.push({componentPath:e.data.meta.detailedTiming.componentPath,groupedFiberRenders:n,id:e.id,kind:`interaction`,memory:null,timestamp:e.data.startAt,type:e.data.meta.detailedTiming.interactionType===`keyboard`?`keyboard`:`click`,timing:{renderTime:r,kind:`interaction`,otherJSTime:c,framePreparation:s-a,frameConstruction:i-s,frameDraw:l}});return}case`long-render`:t.push({kind:`dropped-frames`,id:e.id,memory:null,timing:{kind:`dropped-frames`,renderTime:r,otherTime:e.data.meta.latency},groupedFiberRenders:n,timestamp:e.data.startAt,fps:e.data.meta.fps});return}}),t},ec=1e3,tc=()=>{let{notificationState:e,setNotificationState:t}=J(),n=M(null),r=M(null),a=M(0),[o]=Ys(),s=o.filter(e=>Yo(e)===`high`).length;return i(()=>{let e=localStorage.getItem(`react-scan-notifications-audio`);if(e!==`false`&&e!==`true`){localStorage.setItem(`react-scan-notifications-audio`,`false`);return}if(e!==`false`){t(e=>e.audioNotificationsOptions.enabled?e:{...e,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}});return}},[]),i(()=>{let{audioNotificationsOptions:t}=e;if(!t.enabled||s===0||n.current&&n.current>=s)return;r.current&&clearTimeout(r.current);let i=Date.now()-a.current,o=Math.max(0,ec-i);r.current=setTimeout(()=>{Ke(t.audioContext),n.current=s,a.current=Date.now(),r.current=null},o)},[s]),i(()=>{s===0&&(n.current=null)},[s]),i(()=>()=>{r.current&&clearTimeout(r.current)},[]),null},nc=ue((e,t)=>{let n=$s(),[r,i]=b({detailsExpanded:!1,events:n,filterBy:`latest`,moreInfoExpanded:!1,route:`render-visualization`,selectedEvent:n.toSorted((e,t)=>e.timestamp-t.timestamp).at(-1)??null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return r.events=n,D(Xo.Provider,{value:{notificationState:r,setNotificationState:i,setRoute:({route:e,routeMessage:t})=>{i(n=>{let r={...n,route:e,routeMessage:t};switch(e){case`render-visualization`:return Ps(),{...r,selectedFiber:null};case`optimize`:return Ps(),{...r,selectedFiber:null};case`other-visualization`:return Ps(),{...r,selectedFiber:null};case`render-explanation`:return Ps(),r}})}},children:[D(tc,{}),D(rc,{ref:t})]})}),rc=ue((e,t)=>{let{notificationState:n}=J();return D(`div`,{ref:t,className:B([`h-full w-full flex flex-col`]),children:[n.selectedEvent&&D(`div`,{className:B([`w-full h-[48px] flex flex-col`,n.moreInfoExpanded&&`h-[235px]`,n.moreInfoExpanded&&n.selectedEvent.kind===`dropped-frames`&&`h-[150px]`]),children:[D(Vs,{selectedEvent:n.selectedEvent}),n.moreInfoExpanded&&D(ic,{})]}),D(`div`,{className:B([`flex `,n.selectedEvent?`h-[calc(100%-48px)]`:`h-full`,n.moreInfoExpanded&&`h-[calc(100%-200px)]`,n.moreInfoExpanded&&n.selectedEvent?.kind===`dropped-frames`&&`h-[calc(100%-150px)]`]),children:[D(`div`,{className:B([`h-full min-w-[200px]`]),children:D(Xs,{})}),D(`div`,{className:B([`w-[calc(100%-200px)] h-full overflow-y-auto`]),children:D(zs,{})})]})]})}),ic=()=>{let{notificationState:e}=J();if(!e.selectedEvent)throw Error(`Invariant must have selected event for more info`);let t=e.selectedEvent;return D(`div`,{className:B([`px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]`,t.kind===`dropped-frames`&&`h-[calc(100%-25px)]`]),children:D(`div`,{className:B([`flex flex-col gap-y-4 h-full`]),children:Za(()=>{switch(t.kind){case`interaction`:return D(E,{children:[D(`div`,{className:B([`flex items-center gap-x-3`]),children:[D(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:t.type===`click`?`Clicked component location`:`Typed in component location`}),D(`div`,{className:`font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto`,children:t.componentPath.toReversed().map((e,n)=>D(E,{children:[D(`span`,{style:{lineHeight:`14px`},className:`text-[10px] whitespace-nowrap`,children:e},e),n<t.componentPath.length-1&&D(`span`,{className:`text-[#6F6F78] mx-0.5`,children:`‹`})]}))})]}),D(`div`,{className:B([`flex items-center gap-x-3`]),children:[D(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:`Total Time`}),D(`span`,{className:`text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs`,children:[q(t.timing).toFixed(0),`ms`]})]}),D(`div`,{className:B([`flex items-center gap-x-3`]),children:[D(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:`Occurred`}),D(`span`,{className:`text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs`,children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]});case`dropped-frames`:return D(E,{children:[D(`div`,{className:B([`flex items-center gap-x-3`]),children:[D(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:`Total Time`}),D(`span`,{className:`text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs`,children:[q(t.timing).toFixed(0),`ms`]})]}),D(`div`,{className:B([`flex items-center gap-x-3`]),children:[D(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:`Occurred`}),D(`span`,{className:`text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs`,children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})})})},ac=Ee(()=>{let e=$s(),[t,n]=b(e);i(()=>{let t=setTimeout(()=>{n(e)},600);return()=>{clearTimeout(t)}},[e]);let r=Q.inspectState,a=r.value.kind===`inspecting`,o=r.value.kind===`focused`,[s,c]=b([]),l=x(()=>{switch(Q.inspectState.value.kind){case`inspecting`:U.value={view:`none`},Q.inspectState.value={kind:`inspect-off`};return;case`focused`:U.value={view:`inspector`},Q.inspectState.value={kind:`inspecting`,hoveredDomElement:null};return;case`inspect-off`:U.value={view:`none`},Q.inspectState.value={kind:`inspecting`,hoveredDomElement:null};return;case`uninitialized`:return}},[]),u=x(e=>{if(e.preventDefault(),e.stopPropagation(),!$.instrumentation)return;let t=!$.instrumentation.isPaused.value;$.instrumentation.isPaused.value=t,V(`react-scan-options`,{...Tn(`react-scan-options`),enabled:!t})},[]);de(()=>{Q.inspectState.value.kind===`uninitialized`&&(Q.inspectState.value={kind:`inspect-off`})});let d=null,f=`#999`;return a?(d=D(P,{name:`icon-inspect`}),f=`#8e61e3`):o?(d=D(P,{name:`icon-focus`}),f=`#8e61e3`):(d=D(P,{name:`icon-inspect`}),f=`#999`),_e(()=>{U.value.view===`notifications`&&c([...new Set(e.map(e=>e.id)).values()])},[e.length,U.value.view]),D(`div`,{className:`flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden`,children:[D(`div`,{className:`h-full flex items-center min-w-fit`,children:D(`button`,{type:`button`,id:`react-scan-inspect-element`,title:`Inspect element`,onClick:l,className:`button flex items-center justify-center h-full w-full pl-3 pr-2.5`,style:{color:f},children:d})}),D(`div`,{className:`h-full flex items-center justify-center`,children:D(`button`,{type:`button`,id:`react-scan-notifications`,title:`Notifications`,onClick:()=>{switch(Q.inspectState.value.kind!==`inspect-off`&&(Q.inspectState.value={kind:`inspect-off`}),U.value.view){case`inspector`:Q.inspectState.value={kind:`inspect-off`},c([...new Set(e.map(e=>e.id)).values()]),U.value={view:`notifications`};return;case`notifications`:U.value={view:`none`};return;case`none`:c([...new Set(e.map(e=>e.id)).values()]),U.value={view:`notifications`};return}},className:`button flex items-center justify-center h-full pl-2.5 pr-2.5`,style:{color:f},children:D(Qo,{events:t.filter(e=>!s.includes(e.id)).map(e=>Yo(e)===`high`),size:16,className:B([`text-[#999]`,U.value.view===`notifications`&&`text-[#8E61E3]`])})})}),D(Ka,{checked:!$.instrumentation?.isPaused.value,onChange:u,className:`place-self-center`,title:`Outline Re-renders`}),$.options.value.showFPS&&D(Ja,{})]})}),oc=T(()=>Q.inspectState.value.kind===`inspecting`),sc=T(()=>B(`relative`,`flex-1`,`flex flex-col`,`rounded-t-lg`,`overflow-hidden`,`opacity-100`,`transition-[opacity]`,oc.value&&`opacity-0 duration-0 delay-0`)),cc=T(()=>U.value.view===`inspector`),lc=T(()=>U.value.view===`notifications`),uc=()=>D(`div`,{className:B(`flex flex-1 flex-col`,`overflow-hidden z-10`,`rounded-lg`,`bg-black`,`opacity-100`,`transition-[border-radius]`,`peer-hover/left:rounded-l-none`,`peer-hover/right:rounded-r-none`,`peer-hover/top:rounded-t-none`,`peer-hover/bottom:rounded-b-none`),children:[D(`div`,{className:sc,children:[D(Ga,{}),D(`div`,{className:B(`relative`,`flex-1 flex`,`text-white`,`bg-[#0A0A0A]`,`transition-opacity delay-150`,`overflow-hidden`,`border-b border-[#222]`),children:[D(dc,{isOpen:cc,children:D(Lr,{})}),D(dc,{isOpen:lc,children:D(nc,{})})]})]}),D(ac,{})]}),dc=({isOpen:e,children:t})=>D(`div`,{className:B(`flex-1`,`opacity-0`,`overflow-y-auto overflow-x-hidden`,`transition-opacity delay-0`,`pointer-events-none`,e.value&&`opacity-100 delay-150 pointer-events-auto`),children:D(`div`,{className:`absolute inset-0 flex`,children:t})}),fc=(e,t,n)=>e+(t-e)*n,pc={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},mc=Ue&&window.devicePixelRatio||1,hc=()=>{let e=M(null),t=M(null),n=M(null),r=M(null),a=M(null),o=M(0),s=M(),c=M(new Map),l=M(!1),u=M(0),d=(e,t,n,r)=>{e.save(),e.strokeStyle=`white`,e.fillStyle=`white`,e.lineWidth=1.5;let i=r*.6,a=r*.5,o=t+(r-i)/2,s=n;e.beginPath(),e.arc(o+i/2,s+a/2,i/2,Math.PI,0,!1),e.stroke();let c=r*.8,l=r*.5,u=t+(r-c)/2,d=n+a/2;e.fillRect(u,d,c,l),e.restore()},f=(e,t,n,i)=>{if(!i)return;let a=(i?.type&&N(i.type))??`Unknown`;e.save(),e.font=`12px system-ui, -apple-system, sans-serif`;let o=e.measureText(a).width,s=n===`locked`?14:0,c=n===`locked`?6:0,l=o+16+s+c,u=t.left,f=t.top-24-4;if(e.fillStyle=`rgb(37, 37, 38, .75)`,e.beginPath(),e.roundRect(u,f,l,24,3),e.fill(),n===`locked`){let t=u+8,n=f+(24-s)/2+2;d(e,t,n,s),r.current={x:t,y:n,width:s,height:s}}else r.current=null;e.fillStyle=`white`,e.textBaseline=`middle`;let p=u+8+(n===`locked`?s+c:0);e.fillText(a,p,f+24/2),e.restore()},p=(e,t,r,i)=>{if(!n.current)return;let a=n.current;t.clearRect(0,0,e.width,e.height),t.strokeStyle=`rgba(142, 97, 227, 0.5)`,t.fillStyle=`rgba(173, 97, 230, 0.10)`,r===`locked`?t.setLineDash([]):t.setLineDash([4]),t.lineWidth=1,t.fillRect(a.left,a.top,a.width,a.height),t.strokeRect(a.left,a.top,a.width,a.height),f(t,a,r,i)},m=(e,t,r,i,a,c)=>{let l=$.options.value.animationSpeed,d=pc.speeds[l]??pc.speeds.off,f=s=>{if(s-u.current<pc.frameInterval){o.current=requestAnimationFrame(f);return}if(u.current=s,!n.current){cancelAnimationFrame(o.current);return}n.current={left:fc(n.current.left,r.left,d),top:fc(n.current.top,r.top,d),width:fc(n.current.width,r.width,d),height:fc(n.current.height,r.height,d)},p(e,t,i,a),Math.abs(n.current.left-r.left)>.1||Math.abs(n.current.top-r.top)>.1||Math.abs(n.current.width-r.width)>.1||Math.abs(n.current.height-r.height)>.1?o.current=requestAnimationFrame(f):(n.current=r,p(e,t,i,a),cancelAnimationFrame(o.current),t.restore(),c?.())};cancelAnimationFrame(o.current),clearTimeout(s.current),o.current=requestAnimationFrame(f),s.current=setTimeout(()=>{cancelAnimationFrame(o.current),n.current=r,p(e,t,i,a),t.restore(),c?.()},1e3)},h=(e,t,r,i,a)=>{if(t.save(),!n.current){n.current=r,p(e,t,i,a),t.restore();return}m(e,t,r,i,a)},g=async(e,t,n,r)=>{if(!e||!t||!n)return;let{parentCompositeFiber:i}=Wr(e),a=await Ur(e);!i||!a||h(t,n,a,r,i)},_=()=>{for(let e of c.current.values())e?.()},v=e=>{let t=e.getContext(`2d`);t&&t.clearRect(0,0,e.width,e.height),n.current=null,r.current=null,a.current=null,e.classList.remove(`fade-in`),l.current=!1},y=t=>{if(!e.current||l.current)return;let n=r=>{!e.current||r.propertyName!==`opacity`||!l.current||(e.current.removeEventListener(`transitionend`,n),v(e.current),t?.())},r=c.current.get(`fade-out`);r&&(r(),c.current.delete(`fade-out`)),e.current.addEventListener(`transitionend`,n),c.current.set(`fade-out`,()=>{var t;(t=e.current)==null||t.removeEventListener(`transitionend`,n)}),l.current=!0,e.current.classList.remove(`fade-in`),requestAnimationFrame(()=>{var t;(t=e.current)==null||t.classList.add(`fade-out`)})},b=()=>{e.current&&(l.current=!1,e.current.classList.remove(`fade-out`),requestAnimationFrame(()=>{var t;(t=e.current)==null||t.classList.add(`fade-in`)}))},x=e=>{e!==a.current&&(a.current=e,qr.has(e.tagName)?y():b(),Q.inspectState.value={kind:`inspecting`,hoveredDomElement:e})},ee=()=>{!n.current||!e.current||l.current||y()},te=wn(n=>{if(Q.inspectState.peek().kind!==`inspecting`||!t.current)return;t.current.style.pointerEvents=`none`;let r=document.elementFromPoint(n?.clientX??0,n?.clientY??0);if(t.current.style.removeProperty(`pointer-events`),clearTimeout(s.current),r&&r!==e.current){let{parentCompositeFiber:e}=Wr(r);if(e){let t=Jr(e);if(t){x(t);return}}}ee()},32),S=(e,t)=>{let n=r.current;if(!n)return!1;let i=t.getBoundingClientRect(),a=t.width/i.width,o=t.height/i.height,s=(e.clientX-i.left)*a,c=(e.clientY-i.top)*o,l=s/mc,u=c/mc;return l>=n.x&&l<=n.x+n.width&&u>=n.y&&u<=n.y+n.height},C=e=>{e.kind===`focused`&&(Q.inspectState.value={kind:`inspecting`,hoveredDomElement:e.focusedDomElement})},ne=e=>{let t=[`react-scan-inspect-element`,`react-scan-power`];if(e.target instanceof HTMLElement&&t.includes(e.target.id))return;let n=a.current?.tagName;if(n&&qr.has(n))return;e.preventDefault(),e.stopPropagation();let r=a.current??document.elementFromPoint(e.clientX,e.clientY);if(!r)return;let i=e.composedPath().at(0);if(i instanceof HTMLElement&&t.includes(i.id)){let t=new MouseEvent(e.type,e);t.__reactScanSyntheticEvent=!0,i.dispatchEvent(t);return}let{parentCompositeFiber:o}=Wr(r);if(!o)return;let s=Jr(o);if(!s){a.current=null,Q.inspectState.value={kind:`inspect-off`};return}Q.inspectState.value={kind:`focused`,focusedDomElement:s,fiber:o}},re=n=>{if(n.__reactScanSyntheticEvent)return;let r=Q.inspectState.peek(),i=e.current;if(!(!i||!t.current)){if(S(n,i)){n.preventDefault(),n.stopPropagation(),C(r);return}r.kind===`inspecting`&&ne(n)}},ie=t=>{if(t.key!==`Escape`)return;let r=Q.inspectState.peek();if(e.current&&document.activeElement?.id!==`react-scan-root`&&(U.value={view:`none`},r.kind===`focused`||r.kind===`inspecting`))switch(t.preventDefault(),t.stopPropagation(),r.kind){case`focused`:b(),n.current=null,a.current=r.focusedDomElement,Q.inspectState.value={kind:`inspecting`,hoveredDomElement:r.focusedDomElement};break;case`inspecting`:y(()=>{Nn.value=!1,Q.inspectState.value={kind:`inspect-off`}});break}},ae=(e,r,i)=>{var s;(s=c.current.get(e.kind))==null||s(),t.current&&e.kind!==`inspecting`&&(t.current.style.pointerEvents=`none`),o.current&&cancelAnimationFrame(o.current);let l;switch(e.kind){case`inspect-off`:y();return;case`inspecting`:g(e.hoveredDomElement,r,i,`inspecting`);break;case`focused`:if(!e.focusedDomElement)return;a.current!==e.focusedDomElement&&(a.current=e.focusedDomElement),U.value={view:`inspector`},g(e.focusedDomElement,r,i,`locked`),l=Q.lastReportTime.subscribe(()=>{if(o.current&&n.current){let{parentCompositeFiber:t}=Wr(e.focusedDomElement);t&&g(e.focusedDomElement,r,i,`locked`)}}),l&&c.current.set(e.kind,l);break}},oe=(e,t)=>{let n=e.getBoundingClientRect();e.width=n.width*mc,e.height=n.height*mc,t.scale(mc,mc),t.save()},w=()=>{let t=Q.inspectState.peek(),r=e.current;if(!r)return;let i=r?.getContext(`2d`);i&&(cancelAnimationFrame(o.current),clearTimeout(s.current),oe(r,i),n.current=null,t.kind===`focused`&&t.focusedDomElement?g(t.focusedDomElement,r,i,`locked`):t.kind===`inspecting`&&t.hoveredDomElement&&g(t.hoveredDomElement,r,i,`inspecting`))},T=t=>{let n=Q.inspectState.peek(),r=e.current;r&&(n.kind===`inspecting`||S(t,r))&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation())};return i(()=>{let t=e.current;if(!t)return;let n=t?.getContext(`2d`);if(!n)return;oe(t,n);let r=Q.inspectState.subscribe(e=>{ae(e,t,n)});return window.addEventListener(`scroll`,w,{passive:!0}),window.addEventListener(`resize`,w,{passive:!0}),document.addEventListener(`pointermove`,te,{passive:!0,capture:!0}),document.addEventListener(`pointerdown`,T,{capture:!0}),document.addEventListener(`click`,re,{capture:!0}),document.addEventListener(`keydown`,ie,{capture:!0}),()=>{_(),r(),window.removeEventListener(`scroll`,w),window.removeEventListener(`resize`,w),document.removeEventListener(`pointermove`,te,{capture:!0}),document.removeEventListener(`click`,re,{capture:!0}),document.removeEventListener(`pointerdown`,T,{capture:!0}),document.removeEventListener(`keydown`,ie,{capture:!0}),o.current&&cancelAnimationFrame(o.current),clearTimeout(s.current)}},[]),D(E,{children:[D(`div`,{ref:t,className:B(`fixed top-0 left-0 w-screen h-screen`,`z-[214748365]`),style:{pointerEvents:`none`}}),D(`canvas`,{ref:e,dir:`ltr`,className:B(`react-scan-inspector-overlay`,`fixed top-0 left-0 w-screen h-screen`,`pointer-events-none`,`z-[214748367]`)})]})},gc=class{constructor(e,t,n){He(this,`width`,e),He(this,`height`,t),He(this,`safeArea`,n),He(this,`maxWidth`),He(this,`maxHeight`),this.maxWidth=e-n.left-n.right,this.maxHeight=t-n.top-n.bottom}rightEdge(e){return this.width-e-this.safeArea.right}bottomEdge(e){return this.height-e-this.safeArea.bottom}isFullWidth(e){return e>=this.maxWidth}isFullHeight(e){return e>=this.maxHeight}},vc=(e,t)=>e.top===t.top&&e.right===t.right&&e.bottom===t.bottom&&e.left===t.left,yc=()=>{let e=window.innerWidth,t=window.innerHeight,n=Mn();return _c&&_c.width===e&&_c.height===t&&vc(_c.safeArea,n)||(_c=new gc(e,t,n)),_c},bc=(e,t,n,r,i)=>{if(n){if(e===`top-left`)return`bottom-right`;if(e===`top-right`)return`bottom-left`;if(e===`bottom-left`)return`top-right`;if(e===`bottom-right`)return`top-left`;let[n,r]=t.split(`-`);if(e===`left`)return`${n}-right`;if(e===`right`)return`${n}-left`;if(e===`top`)return`bottom-${r}`;if(e===`bottom`)return`top-${r}`}if(r){if(e===`left`)return`${t.split(`-`)[0]}-right`;if(e===`right`)return`${t.split(`-`)[0]}-left`}if(i){if(e===`top`)return`bottom-${t.split(`-`)[1]}`;if(e===`bottom`)return`top-${t.split(`-`)[1]}`}return t},xc=(e,t,n)=>{let r=getComputedStyle(document.body).direction===`rtl`,i=window.innerWidth,a=window.innerHeight,o=Mn(),s=t===F.width,c=s?t:Math.min(t,i-o.left-o.right),l=s?n:Math.min(n,a-o.top-o.bottom),u,d,f=o.left,p=i-c-o.right,m=o.top,h=a-l-o.bottom,g=-o.right,_=-(i-c-o.left);switch(e){case`top-right`:u=r?g:p,d=m;break;case`bottom-right`:u=r?g:p,d=h;break;case`bottom-left`:u=r?_:f,d=h;break;case`top-left`:u=r?_:f,d=m;break;default:u=f,d=m;break}return s&&(u=r?Math.min(g,Math.max(u,_)):Math.max(f,Math.min(u,p)),d=Math.max(m,Math.min(d,h))),{x:u,y:d}},Sc=(e,t)=>{let[n,r]=t.split(`-`);return e!==n&&e!==r},Cc=(e,t,n,r)=>n&&r?!0:!n&&!r?Sc(e,t):n?e!==t.split(`-`)[0]:r?e!==t.split(`-`)[1]:!1,wc=(e,t,n)=>{let r=n?F.width:F.initialHeight,i=n?yc().maxWidth:yc().maxHeight,a=e+t;return Math.min(Math.max(r,a),i)},Tc=(e,t,n,r,i)=>{let a=getComputedStyle(document.body).direction===`rtl`,o=Mn(),s=window.innerWidth-o.left-o.right,c=window.innerHeight-o.top-o.bottom,l=t.width,u=t.height,d=n.x,f=n.y;if(a&&e.includes(`right`)){let e=-n.x+t.width-o.right,i=Math.min(t.width+r,e);l=Math.min(s,Math.max(F.width,i)),d=n.x+(l-t.width)}if(a&&e.includes(`left`)){let e=window.innerWidth-n.x-o.left,i=Math.min(t.width-r,e);l=Math.min(s,Math.max(F.width,i))}if(!a&&e.includes(`right`)){let e=window.innerWidth-n.x-o.right,i=Math.min(t.width+r,e);l=Math.min(s,Math.max(F.width,i))}if(!a&&e.includes(`left`)){let e=n.x+t.width-o.left,i=Math.min(t.width-r,e);l=Math.min(s,Math.max(F.width,i)),d=n.x-(l-t.width)}if(e.includes(`bottom`)){let e=window.innerHeight-n.y-o.bottom,r=Math.min(t.height+i,e);u=Math.min(c,Math.max(F.initialHeight,r))}if(e.includes(`top`)){let e=n.y+t.height-o.top,r=Math.min(t.height-i,e);u=Math.min(c,Math.max(F.initialHeight,r)),f=n.y-(u-t.height)}let p=o.left,m=window.innerWidth-o.right-l,h=o.top,g=window.innerHeight-o.bottom-u,_=-o.right,v=-(window.innerWidth-l-o.left);return d=a?Math.min(_,Math.max(d,v)):Math.max(p,Math.min(d,m)),f=Math.max(h,Math.min(f,g)),{newSize:{width:l,height:u},newPosition:{x:d,y:f}}},Ec=e=>{let t=yc(),n={"top-left":Math.hypot(e.x,e.y),"top-right":Math.hypot(t.maxWidth-e.x,e.y),"bottom-left":Math.hypot(e.x,t.maxHeight-e.y),"bottom-right":Math.hypot(t.maxWidth-e.x,t.maxHeight-e.y)},r=`top-left`;for(let e in n)n[e]<n[r]&&(r=e);return r},Dc=(e,t,n,r,i=100)=>{let a=n===void 0?0:e-n,o=r===void 0?0:t-r,s=window.innerWidth/2,c=window.innerHeight/2,l=a>i,u=a<-i,d=o>i,f=o<-i;if(l||u){let e=t>c;return l?e?`bottom-right`:`top-right`:e?`bottom-left`:`top-left`}if(d||f){let t=e>s;return d?t?`bottom-right`:`bottom-left`:t?`top-right`:`top-left`}return e>s?t>c?`bottom-right`:`top-right`:t>c?`bottom-left`:`top-left`},Oc=({position:e})=>{let t=M(null),n=M(null),r=M(null),a=M(null);return i(()=>{let i=t.current;if(!i)return;let o=()=>{i.classList.remove(`pointer-events-none`);let t=Q.inspectState.value.kind===`focused`,n=U.value.view!==`none`;(t||n)&&Cc(e,H.value.corner,H.value.dimensions.isFullWidth,H.value.dimensions.isFullHeight)?i.classList.remove(`hidden`,`pointer-events-none`,`opacity-0`):i.classList.add(`hidden`,`pointer-events-none`,`opacity-0`)},s=H.subscribe(e=>{n.current!==null&&r.current!==null&&a.current!==null&&e.dimensions.width===n.current&&e.dimensions.height===r.current&&e.corner===a.current||(o(),n.current=e.dimensions.width,r.current=e.dimensions.height,a.current=e.corner)}),c=Q.inspectState.subscribe(()=>{o()});return()=>{s(),c(),n.current=null,r.current=null,a.current=null}},[]),D(`div`,{ref:t,onPointerDown:x(t=>{t.preventDefault(),t.stopPropagation();let n=Pn.value;if(!n)return;let r=n.style,{dimensions:i}=H.value,a=t.clientX,o=t.clientY,s=i.width,c=i.height,l=i.position;H.value={...H.value,dimensions:{...i,isFullWidth:!1,isFullHeight:!1,width:s,height:c,position:l}};let u=null,d=t=>{u||=(r.transition=`none`,requestAnimationFrame(()=>{let{newSize:n,newPosition:i}=Tc(e,{width:s,height:c},l,t.clientX-a,t.clientY-o);r.transform=`translate3d(${i.x}px, ${i.y}px, 0)`,r.width=`${n.width}px`,r.height=`${n.height}px`;let d=Math.floor(n.width-Ye/2),f=H.value.componentsTree.width,p=Math.min(d,Math.max(Ye,f));H.value={...H.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:n.width,height:n.height,position:i},componentsTree:{...H.value.componentsTree,width:p}},u=null}))},f=()=>{u&&=(cancelAnimationFrame(u),null),document.removeEventListener(`pointermove`,d),document.removeEventListener(`pointerup`,f);let{dimensions:e,corner:t}=H.value,i=yc(),a=i.isFullWidth(e.width),o=i.isFullHeight(e.height),s=a&&o,c=t;(s||a||o)&&(c=Ec(e.position));let l=xc(c,e.width,e.height),p=()=>{n.removeEventListener(`transitionend`,p)};n.addEventListener(`transitionend`,p),r.transform=`translate3d(${l.x}px, ${l.y}px, 0)`,H.value={...H.value,corner:c,dimensions:{isFullWidth:a,isFullHeight:o,width:e.width,height:e.height,position:l},lastDimensions:{isFullWidth:a,isFullHeight:o,width:e.width,height:e.height,position:l}},V(Xe,{corner:c,dimensions:H.value.dimensions,lastDimensions:H.value.lastDimensions,componentsTree:H.value.componentsTree})};document.addEventListener(`pointermove`,d,{passive:!0}),document.addEventListener(`pointerup`,f)},[]),onDblClick:x(t=>{t.preventDefault(),t.stopPropagation();let n=Pn.value;if(!n)return;let r=n.style,{dimensions:i,corner:a}=H.value,o=yc(),s=o.isFullWidth(i.width),c=o.isFullHeight(i.height),l=s&&c,u=(s||c)&&!l,d=i.width,f=i.height,p=bc(e,a,l,s,c);e===`left`||e===`right`?(d=s?i.width:o.maxWidth,u&&(d=s?F.width:o.maxWidth)):(f=c?i.height:o.maxHeight,u&&(f=c?F.initialHeight:o.maxHeight)),l&&(e===`left`||e===`right`?d=F.width:f=F.initialHeight);let m=xc(p,d,f),h={isFullWidth:o.isFullWidth(d),isFullHeight:o.isFullHeight(f),width:d,height:f,position:m},g=Math.floor(d-F.width/2),_=H.value.componentsTree.width,v=Math.floor(d*.3),y=s?Ye:(e===`left`||e===`right`)&&!s?Math.min(g,Math.max(Ye,v)):Math.min(g,Math.max(Ye,_));requestAnimationFrame(()=>{H.value={corner:p,dimensions:h,lastDimensions:i,componentsTree:{...H.value.componentsTree,width:y}},r.transition=`all 0.25s cubic-bezier(0, 0, 0.2, 1)`,r.width=`${d}px`,r.height=`${f}px`,r.transform=`translate3d(${m.x}px, ${m.y}px, 0)`}),V(Xe,{corner:p,dimensions:h,lastDimensions:i,componentsTree:{...H.value.componentsTree,width:y}})},[]),className:B(`absolute z-50`,`flex items-center justify-center`,`group`,`transition-colors select-none`,`peer`,{"resize-left peer/left":e===`left`,"resize-right peer/right z-10":e===`right`,"resize-top peer/top":e===`top`,"resize-bottom peer/bottom":e===`bottom`}),children:D(`span`,{className:`resize-line-wrapper`,children:D(`span`,{className:`resize-line`,children:D(P,{name:`icon-ellipsis`,size:18,className:B(`text-neutral-400`,(e===`left`||e===`right`)&&`rotate-90`)})})})})},kc={horizontal:{width:20,height:48},vertical:{width:48,height:20}},Ac=()=>{let e=M(null),t=M(!1),n=M(0),r=M(0),a=M(!1),o=x((i=!0)=>{if(!e.current)return;let{corner:o}=H.value,s,c;if(zn.value){let e=kc[zn.value.orientation||`horizontal`];s=e.width,c=e.height}else if(t.current){let e=H.value.lastDimensions;s=wc(e.width,0,!0),c=wc(e.height,0,!1),a.current&&=!1}else s=n.current,c=r.current;let l=xc(o,s,c);if(zn.value){let{corner:e,orientation:t=`horizontal`}=zn.value,n=kc[t],r=Mn();switch(e){case`top-left`:l=t===`horizontal`?{x:-1,y:r.top}:{x:r.left,y:-1};break;case`bottom-left`:l=t===`horizontal`?{x:-1,y:window.innerHeight-n.height-r.bottom}:{x:r.left,y:window.innerHeight-n.height+1};break;case`top-right`:l=t===`horizontal`?{x:window.innerWidth-n.width+1,y:r.top}:{x:window.innerWidth-n.width-r.right,y:-1};break;default:l=t===`horizontal`?{x:window.innerWidth-n.width+1,y:window.innerHeight-n.height-r.bottom}:{x:window.innerWidth-n.width-r.right,y:window.innerHeight-n.height+1};break}}let u=s<F.width||c<F.initialHeight,d=i&&!u,f=e.current,p=f.style,m=null,h=()=>{Ln(),f.removeEventListener(`transitionend`,h),m&&=(cancelAnimationFrame(m),null)};f.addEventListener(`transitionend`,h),p.transition=`all 0.25s cubic-bezier(0, 0, 0.2, 1)`,m=requestAnimationFrame(()=>{p.width=`${s}px`,p.height=`${c}px`,p.transform=`translate3d(${l.x}px, ${l.y}px, 0)`,m=null});let g=Mn(),_={isFullWidth:s>=window.innerWidth-g.left-g.right,isFullHeight:c>=window.innerHeight-g.top-g.bottom,width:s,height:c,position:l};H.value={corner:o,dimensions:_,lastDimensions:t?H.value.lastDimensions:s>n.current?_:H.value.lastDimensions,componentsTree:H.value.componentsTree},d&&V(Xe,{corner:H.value.corner,dimensions:H.value.dimensions,lastDimensions:H.value.lastDimensions,componentsTree:H.value.componentsTree}),Ln()},[]),s=x(t=>{if(t.target.closest($e)||(t.preventDefault(),!e.current))return;let n=e.current,r=n.style,{dimensions:i}=H.value,a=t.clientX,s=t.clientY,c=i.position.x,l=i.position.y,u=c,d=l,f=null,p=!1,m=a,h=s,g=e=>{f||=(p=!0,m=e.clientX,h=e.clientY,requestAnimationFrame(()=>{let e=m-a,t=h-s;u=Number(c)+e,d=Number(l)+t,r.transition=`none`,r.transform=`translate3d(${u}px, ${d}px, 0)`;let n=u+i.width,p=d+i.height,v=Math.max(0,-u),y=Math.max(0,n-window.innerWidth),b=Math.max(0,-d),x=Math.max(0,p-window.innerHeight),ee=Math.min(i.width,v+y),te=Math.min(i.height,b+x),S=ee*i.height+te*i.width-ee*te>i.width*i.height*.35;if(!S&&$.options.value.showFPS){let e=u+i.width,t=e-100;S=e<=0||t>=window.innerWidth||d+i.height<=0||d>=window.innerHeight}if(S){let e=u+i.width/2,t=d+i.height/2,n=window.innerWidth/2,r=window.innerHeight/2,a;a=e<n?t<r?`top-left`:`bottom-left`:t<r?`top-right`:`bottom-right`;let s;s=Math.max(v,y)>Math.max(b,x)?`horizontal`:`vertical`,H.value={...H.value,corner:a,lastDimensions:{...i,position:xc(a,i.width,i.height)}};let c={corner:a,orientation:s};zn.value=c,V(Ze,c),V(Xe,H.value),o(!1),document.removeEventListener(`pointermove`,g),document.removeEventListener(`pointerup`,_),f&&=(cancelAnimationFrame(f),null)}f=null}))},_=()=>{if(!n)return;f&&=(cancelAnimationFrame(f),null),document.removeEventListener(`pointermove`,g),document.removeEventListener(`pointerup`,_);let e=Math.abs(m-a),t=Math.abs(h-s),o=Math.sqrt(e*e+t*t);if(!p||o<60)return;let v=Dc(m,h,a,s,Q.inspectState.value.kind===`focused`?80:40);if(v===H.value.corner){r.transition=`transform 0.25s cubic-bezier(0, 0, 0.2, 1)`;let e=H.value.dimensions.position;requestAnimationFrame(()=>{r.transform=`translate3d(${e.x}px, ${e.y}px, 0)`});return}let y=xc(v,i.width,i.height);if(u===c&&d===l)return;let b=()=>{r.transition=`none`,Ln(),n.removeEventListener(`transitionend`,b),f&&=(cancelAnimationFrame(f),null)};n.addEventListener(`transitionend`,b),r.transition=`transform 0.25s cubic-bezier(0, 0, 0.2, 1)`,requestAnimationFrame(()=>{r.transform=`translate3d(${y.x}px, ${y.y}px, 0)`}),H.value={corner:v,dimensions:{isFullWidth:i.isFullWidth,isFullHeight:i.isFullHeight,width:i.width,height:i.height,position:y},lastDimensions:H.value.lastDimensions,componentsTree:H.value.componentsTree},V(Xe,{corner:v,dimensions:H.value.dimensions,lastDimensions:H.value.lastDimensions,componentsTree:H.value.componentsTree})};document.addEventListener(`pointermove`,g),document.addEventListener(`pointerup`,_)},[]),c=x(t=>{if(t.preventDefault(),!e.current||!zn.value)return;let{corner:r,orientation:i=`horizontal`}=zn.value,a=t.clientX,s=t.clientY,c=null,l=!1,u=t=>{if(l||c)return;let f=t.clientX-a,p=t.clientY-s,m=!1;i===`horizontal`?(r.endsWith(`left`)&&f>50||r.endsWith(`right`)&&f<-50)&&(m=!0):(r.startsWith(`top`)&&p>50||r.startsWith(`bottom`)&&p<-50)&&(m=!0),m&&(l=!0,zn.value=null,V(Ze,null),n.current===0&&e.current?requestAnimationFrame(()=>{if(e.current){e.current.style.width=`min-content`,n.current=e.current.offsetWidth||300;let r=H.value.lastDimensions,i=wc(r.width,0,!0),a=wc(r.height,0,!1),s=t.clientX-i/2,c=t.clientY-a/2,l=Mn();s=Math.max(l.left,Math.min(s,window.innerWidth-i-l.right)),c=Math.max(l.top,Math.min(c,window.innerHeight-a-l.bottom)),H.value={...H.value,dimensions:{...H.value.dimensions,position:{x:s,y:c}}},o(!0),U.value=Tn(Qe)||{view:`none`},setTimeout(()=>{if(e.current){let n=new PointerEvent(`pointerdown`,{clientX:t.clientX,clientY:t.clientY,pointerId:t.pointerId,bubbles:!0});e.current.dispatchEvent(n)}},100)}}):(o(!0),U.value=Tn(Qe)||{view:`none`}),document.removeEventListener(`pointermove`,u),document.removeEventListener(`pointerup`,d))},d=()=>{c&&=(cancelAnimationFrame(c),null),document.removeEventListener(`pointermove`,u),document.removeEventListener(`pointerup`,d)};document.addEventListener(`pointermove`,u),document.addEventListener(`pointerup`,d)},[]);i(()=>{if(!e.current)return;En(Qe),zn.value?(r.current=36,n.current=0):(e.current.style.width=`min-content`,r.current=36,n.current=e.current.offsetWidth);let i=Mn();e.current.style.maxWidth=`calc(100vw - ${i.left+i.right}px)`,e.current.style.maxHeight=`calc(100vh - ${i.top+i.bottom}px)`,o(),Q.inspectState.value.kind!==`focused`&&!zn.value&&!a.current&&(H.value={...H.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:n.current,height:r.current,position:H.value.dimensions.position}}),Pn.value=e.current;let s=H.subscribe(t=>{if(!e.current)return;let{x:n,y:r}=t.dimensions.position,{width:i,height:a}=t.dimensions,o=e.current;requestAnimationFrame(()=>{o.style.transform=`translate3d(${n}px, ${r}px, 0)`,o.style.width=`${i}px`,o.style.height=`${a}px`})}),c=U.subscribe(e=>{t.current=e.view!==`none`,o(),zn.value||(e.view===`none`?En(Qe):V(Qe,e))}),l=Q.inspectState.subscribe(e=>{t.current=e.kind===`focused`,o()}),u=()=>{o(!0)};return window.addEventListener(`resize`,u,{passive:!0}),()=>{window.removeEventListener(`resize`,u),c(),l(),s(),V(Xe,{...Fn(),corner:H.value.corner})}},[]);let[l,u]=b(!1);i(()=>{u(!0)},[]);let d=zn.value,f=``;if(d){let{orientation:e=`horizontal`,corner:t}=d;f=e===`horizontal`?t?.endsWith(`right`)?`rotate-180`:``:t?.startsWith(`bottom`)?`-rotate-90`:`rotate-90`}return D(E,{children:[D(hc,{}),D(jc.Provider,{value:e.current,children:D(`div`,{id:`react-scan-toolbar`,dir:`ltr`,ref:e,onPointerDown:d?c:s,className:B(`fixed inset-0`,d?(()=>{let{orientation:e=`horizontal`,corner:t}=d;return e===`horizontal`?t?.endsWith(`right`)?`rounded-tl-lg rounded-bl-lg shadow-lg`:`rounded-tr-lg rounded-br-lg shadow-lg`:t?.startsWith(`bottom`)?`rounded-tl-lg rounded-tr-lg shadow-lg`:`rounded-bl-lg rounded-br-lg shadow-lg`})():`rounded-lg shadow-lg`,`flex flex-col`,`font-mono text-[13px]`,`user-select-none`,`opacity-0`,d?`cursor-pointer`:`cursor-move`,`z-[124124124124]`,`animate-fade-in animation-duration-300 animation-delay-300`,`will-change-transform`,`[touch-action:none]`),style:{WebkitAppRegion:`no-drag`},children:d?D(`button`,{type:`button`,onClick:()=>{zn.value=null,V(Ze,null),n.current===0&&e.current&&requestAnimationFrame(()=>{e.current&&(e.current.style.width=`min-content`,n.current=e.current.offsetWidth||300,o(!0))}),U.value=Tn(Qe)||{view:`none`}},className:`flex items-center justify-center w-full h-full text-white`,title:`Expand toolbar`,children:D(P,{name:`icon-chevron-right`,size:16,className:B(`transition-transform`,f)})}):D(E,{children:[D(Oc,{position:`top`}),D(Oc,{position:`bottom`}),D(Oc,{position:`left`}),D(Oc,{position:`right`}),D(uc,{})]})})})]})},jc=n(null),Mc=()=>D(`svg`,{xmlns:`http://www.w3.org/2000/svg`,style:`display: none;`,children:[D(`title`,{children:`React Scan Icons`}),D(`symbol`,{id:`icon-inspect`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[D(`path`,{d:`M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z`}),D(`path`,{d:`M5 3a2 2 0 0 0-2 2`}),D(`path`,{d:`M19 3a2 2 0 0 1 2 2`}),D(`path`,{d:`M5 21a2 2 0 0 1-2-2`}),D(`path`,{d:`M9 3h1`}),D(`path`,{d:`M9 21h2`}),D(`path`,{d:`M14 3h1`}),D(`path`,{d:`M3 9v1`}),D(`path`,{d:`M21 9v2`}),D(`path`,{d:`M3 14v1`})]}),D(`symbol`,{id:`icon-focus`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[D(`path`,{d:`M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z`}),D(`path`,{d:`M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6`})]}),D(`symbol`,{id:`icon-next`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:D(`path`,{d:`M6 9h6V5l7 7-7 7v-4H6V9z`})}),D(`symbol`,{id:`icon-previous`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:D(`path`,{d:`M18 15h-6v4l-7-7 7-7v4h6v6z`})}),D(`symbol`,{id:`icon-close`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[D(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),D(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]}),D(`symbol`,{id:`icon-replay`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[D(`path`,{d:`M3 7V5a2 2 0 0 1 2-2h2`}),D(`path`,{d:`M17 3h2a2 2 0 0 1 2 2v2`}),D(`path`,{d:`M21 17v2a2 2 0 0 1-2 2h-2`}),D(`path`,{d:`M7 21H5a2 2 0 0 1-2-2v-2`}),D(`circle`,{cx:`12`,cy:`12`,r:`1`}),D(`path`,{d:`M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0`})]}),D(`symbol`,{id:`icon-ellipsis`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[D(`circle`,{cx:`12`,cy:`12`,r:`1`}),D(`circle`,{cx:`19`,cy:`12`,r:`1`}),D(`circle`,{cx:`5`,cy:`12`,r:`1`})]}),D(`symbol`,{id:`icon-copy`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[D(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}),D(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]}),D(`symbol`,{id:`icon-check`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:D(`path`,{d:`M20 6 9 17l-5-5`})}),D(`symbol`,{id:`icon-chevron-right`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:D(`path`,{d:`m9 18 6-6-6-6`})}),D(`symbol`,{id:`icon-settings`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[D(`path`,{d:`M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z`}),D(`circle`,{cx:`12`,cy:`12`,r:`3`})]}),D(`symbol`,{id:`icon-flame`,viewBox:`0 0 24 24`,children:D(`path`,{d:`M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z`})}),D(`symbol`,{id:`icon-function`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[D(`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,ry:`2`}),D(`path`,{d:`M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3`}),D(`path`,{d:`M9 11.2h5.7`})]}),D(`symbol`,{id:`icon-triangle-alert`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[D(`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`}),D(`path`,{d:`M12 9v4`}),D(`path`,{d:`M12 17h.01`})]}),D(`symbol`,{id:`icon-gallery-horizontal-end`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[D(`path`,{d:`M2 7v10`}),D(`path`,{d:`M6 5v14`}),D(`rect`,{width:`12`,height:`18`,x:`10`,y:`3`,rx:`2`})]}),D(`symbol`,{id:`icon-search`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[D(`circle`,{cx:`11`,cy:`11`,r:`8`}),D(`line`,{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`})]}),D(`symbol`,{id:`icon-lock`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[D(`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`}),D(`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`})]}),D(`symbol`,{id:`icon-lock-open`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[D(`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`}),D(`path`,{d:`M7 11V7a5 5 0 0 1 9.9-1`})]}),D(`symbol`,{id:`icon-sanil`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[D(`path`,{d:`M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0`}),D(`circle`,{cx:`10`,cy:`13`,r:`8`}),D(`path`,{d:`M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6`}),D(`path`,{d:`M18 3 19.1 5.2`})]})]}),Nc=class extends a{constructor(){super(...arguments),He(this,`state`,{hasError:!1,error:null}),He(this,`handleReset`,()=>{this.setState({hasError:!1,error:null})})}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){return this.state.hasError?D(`div`,{className:`fixed bottom-4 right-4 z-[124124124124]`,children:D(`div`,{className:`p-3 bg-black rounded-lg shadow-lg w-80`,children:[D(`div`,{className:`flex items-center gap-2 mb-2 text-red-400 text-sm font-medium`,children:[D(P,{name:`icon-flame`,className:`text-red-500`,size:14}),`React Scan ran into a problem`]}),D(`div`,{className:`p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words`,children:this.state.error?.message||JSON.stringify(this.state.error)}),D(`button`,{type:`button`,onClick:this.handleReset,className:`px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5`,children:`Restart`})]})}):this.props.children}},Pc=e=>{let t=document.createElement(`div`);t.id=`react-scan-toolbar-root`,window.__REACT_SCAN_TOOLBAR_CONTAINER__=t,e.appendChild(t),g(D(Nc,{children:D(E,{children:[D(Mc,{}),D(Ac,{})]})}),t);let n=t.remove.bind(t);return t.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,t.hasChildNodes()&&(g(null,t),g(null,t)),n()},t},Fc=!1,Ic=()=>{if(Fc||(Fc=!0,typeof window>`u`)||window.__REACT_GRAB__||!navigator.onLine)return;let e={referrerPolicy:`origin`,keepalive:!0,priority:`low`,cache:`no-store`};try{fetch(`https://www.react-grab.com/api/version?source=react-scan&v=${fe}&t=${Date.now()}`,e).then(e=>e.ok?e.text():null).then(e=>{if(!e)return;let t=e.trim();/^\d+\.\d+\.\d+/.test(t)&&t!==`0.2.0`&&console.warn(`[React Scan] react-grab v${fe} is outdated (latest: v${t}). Update react-scan to pick up the newer react-grab.`)}).catch(()=>null)}catch{}},Lc=[`top`,`right`,`bottom`,`left`],Rc=e=>{if(An(e))return{ok:!0,value:e};if(!jn(e))return{ok:!1,error:`- safeArea must be a non-negative number or { top?, right?, bottom?, left? }. Got "${JSON.stringify(e)}"`};let t={};for(let n of Lc){let r=e[n];if(r!==void 0){if(!An(r))return{ok:!1,error:`- safeArea.${n} must be a non-negative number. Got "${JSON.stringify(r)}"`};t[n]=r}}return{ok:!0,value:t}},zc={name:`react-scan`,version:`0.5.7`,description:`Scan your React app for renders`,keywords:[`react`,`react-scan`,`react scan`,`render`,`performance`],homepage:`https://react-scan.million.dev`,bugs:{url:`https://github.com/aidenybai/react-scan/issues`},repository:{type:`git`,url:`git+https://github.com/aidenybai/react-scan.git`},license:`MIT`,author:{name:`Aiden Bai`,email:`aiden@million.dev`,url:`https://million.dev`},scripts:{build:`pnpm build:css && NODE_ENV=production tsup`,"build:copy":`pnpm build && cat dist/auto.global.js | pbcopy`,"build:css":`postcss ./src/web/assets/css/styles.tailwind.css -o ./src/web/assets/css/styles.css`,"dev:css":`postcss ./src/web/assets/css/styles.tailwind.css -o ./src/web/assets/css/styles.css --watch`,"dev:tsup":`NODE_ENV=development tsup --watch`,dev:`pnpm run --parallel "/^dev:(css|tsup)/"`,pack:`npm version patch && pnpm build && npm pack`,"pack:bump":`node scripts/bump-version.mjs && pnpm run pack && echo $(pwd)/react-scan-$(node -p "require('./package.json').version").tgz | pbcopy`,publint:`publint`,test:`vp test run`,"test:watch":`vp test`,lint:`vp lint`,format:`vp fmt`,typecheck:`tsc --noEmit`},exports:{"./package.json":`./package.json`,".":{production:{import:{types:`./dist/index.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/index.mjs`},require:{types:`./dist/index.d.mts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/index.mjs`}},development:{import:{types:`./dist/index.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/index.mjs`},require:{types:`./dist/index.d.ts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/index.js`}},default:{import:{types:`./dist/index.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/index.mjs`},require:{types:`./dist/index.d.ts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/index.js`}}},"./all-environments":{types:`./dist/core/all-environments.d.ts`,import:`./dist/core/all-environments.mjs`,require:`./dist/core/all-environments.js`},"./install-hook":{types:`./dist/install-hook.d.ts`,import:`./dist/install-hook.mjs`,require:`./dist/install-hook.js`},"./lite":{types:`./dist/lite/index.d.ts`,import:`./dist/lite/index.mjs`,require:`./dist/lite/index.js`},"./auto":{production:{import:{types:`./dist/rsc-shim.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/rsc-shim.mjs`},require:{types:`./dist/rsc-shim.d.ts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/rsc-shim.js`}},development:{import:{types:`./dist/auto.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/auto.mjs`},require:{types:`./dist/auto.d.ts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/auto.js`}}},"./dist/*":`./dist/*.js`,"./dist/*.js":`./dist/*.js`,"./dist/*.mjs":`./dist/*.mjs`,"./react-component-name/vite":{types:`./dist/react-component-name/vite.d.ts`,import:`./dist/react-component-name/vite.mjs`,require:`./dist/react-component-name/vite.js`},"./react-component-name/webpack":{types:`./dist/react-component-name/webpack.d.ts`,import:`./dist/react-component-name/webpack.mjs`,require:`./dist/react-component-name/webpack.js`},"./react-component-name/esbuild":{types:`./dist/react-component-name/esbuild.d.ts`,import:`./dist/react-component-name/esbuild.mjs`,require:`./dist/react-component-name/esbuild.js`},"./react-component-name/rspack":{types:`./dist/react-component-name/rspack.d.ts`,import:`./dist/react-component-name/rspack.mjs`,require:`./dist/react-component-name/rspack.js`},"./react-component-name/rolldown":{types:`./dist/react-component-name/rolldown.d.ts`,import:`./dist/react-component-name/rolldown.mjs`,require:`./dist/react-component-name/rolldown.js`},"./react-component-name/rollup":{types:`./dist/react-component-name/rollup.d.ts`,import:`./dist/react-component-name/rollup.mjs`,require:`./dist/react-component-name/rollup.js`},"./react-component-name/astro":{types:`./dist/react-component-name/astro.d.ts`,import:`./dist/react-component-name/astro.mjs`,require:`./dist/react-component-name/astro.js`},"./react-component-name/loader":{types:`./dist/react-component-name/loader.d.ts`,import:`./dist/react-component-name/loader.mjs`,require:`./dist/react-component-name/loader.js`}},main:`dist/index.js`,module:`dist/index.mjs`,browser:`dist/auto.global.js`,types:`dist/index.d.ts`,typesVersions:{"*":{"react-component-name/vite":[`./dist/react-component-name/vite.d.ts`],"react-component-name/webpack":[`./dist/react-component-name/webpack.d.ts`],"react-component-name/esbuild":[`./dist/react-component-name/esbuild.d.ts`],"react-component-name/rspack":[`./dist/react-component-name/rspack.d.ts`],"react-component-name/rolldown":[`./dist/react-component-name/rolldown.d.ts`],"react-component-name/rollup":[`./dist/react-component-name/rollup.d.ts`],"react-component-name/astro":[`./dist/react-component-name/astro.d.ts`],"react-component-name/loader":[`./dist/react-component-name/loader.d.ts`]}},bin:`bin/cli.js`,files:[`dist`,`bin`,`package.json`,`README.md`,`LICENSE`,`auto.d.ts`],dependencies:{"@babel/core":`^7.29.0`,"@babel/types":`^7.29.0`,"@preact/signals":`^2.9.0`,"@rollup/pluginutils":`^5.3.0`,bippy:`^0.5.39`,commander:`^14.0.0`,picocolors:`^1.1.1`,preact:`^10.29.1`,prompts:`^2.4.2`,"react-doctor":`latest`,"react-grab":`latest`},devDependencies:{"@esbuild-plugins/tsconfig-paths":`^0.1.2`,"@remix-run/react":`*`,"@tailwindcss/postcss":`^4.2.4`,"@types/babel__core":`^7.20.5`,"@types/prompts":`^2.4.9`,"@types/react":`^19.2.14`,autoprefixer:`^10.5.0`,clsx:`^2.1.1`,"es-module-lexer":`^2.1.0`,esbuild:`^0.28.0`,next:`*`,postcss:`^8.5.13`,"postcss-cli":`^11.0.0`,publint:`^0.3.18`,react:`*`,"react-dom":`*`,"tailwind-merge":`^3.5.0`,tailwindcss:`^4.2.4`,terser:`^5.46.2`,tsup:`^8.5.1`,vitest:`^3.0.0`},peerDependencies:{esbuild:`>=0.18.0`,react:`^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0`,"react-dom":`^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0`},peerDependenciesMeta:{esbuild:{optional:!0}},optionalDependencies:{unplugin:`^3.0.0`},publishConfig:{access:`public`}},Bc=null,Vc=null,Hc=()=>{if(Bc&&Vc)return{rootContainer:Bc,shadowRoot:Vc};Bc=document.createElement(`div`),Bc.id=`react-scan-root`,Vc=Bc.attachShadow({mode:`open`});let e=document.createElement(`style`);return e.textContent=Ia,Vc.appendChild(e),document.documentElement.appendChild(Bc),{rootContainer:Bc,shadowRoot:Vc}},Q={wasDetailsOpen:j(!0),isInIframe:j(Ue&&window.self!==window.top),inspectState:j({kind:`uninitialized`}),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:j(0),interactionListeningForRenders:null,changesListeners:new Map},$={instrumentation:null,componentAllowList:null,options:j({enabled:!0,log:!1,showToolbar:!0,animationSpeed:`fast`,dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,Store:Q,version:zc.version},Ue&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=$.version),Uc=e=>{let{onCommitStart:t,onRender:n,onCommitFinish:r,...i}=e;return i},Wc=e=>{let t=[],n={};for(let r in e){let i=e[r];switch(r){case`enabled`:case`log`:case`showToolbar`:case`showNotificationCount`:case`dangerouslyForceRunInProduction`:case`showFPS`:case`allowInIframe`:case`useOffscreenCanvasWorker`:typeof i==`boolean`?n[r]=i:t.push(`- ${r} must be a boolean. Got "${i}"`);break;case`animationSpeed`:[`slow`,`fast`,`off`].includes(i)?n[r]=i:t.push(`- Invalid animation speed "${i}". Using default "fast"`);break;case`safeArea`:{let e=Rc(i);e.ok?n.safeArea=e.value:t.push(e.error);break}case`onCommitStart`:typeof i==`function`?n.onCommitStart=i:t.push(`- ${r} must be a function. Got "${i}"`);break;case`onCommitFinish`:typeof i==`function`?n.onCommitFinish=i:t.push(`- ${r} must be a function. Got "${i}"`);break;case`onRender`:typeof i==`function`?n.onRender=i:t.push(`- ${r} must be a function. Got "${i}"`);break;default:t.push(`- Unknown option "${r}"`)}}return t.length>0&&console.warn(`[React Scan] Invalid options:
${t.join(`
`)}`),n},Gc=e=>{try{let t=Wc(e);if(Object.keys(t).length===0)return;let n=`showToolbar`in t&&t.showToolbar!==void 0,r={...$.options.value,...t},{instrumentation:i}=$;i&&`enabled`in t&&(i.isPaused.value=t.enabled===!1),$.options.value=r;try{let e=Tn(`react-scan-options`)?.enabled;typeof e==`boolean`&&(r.enabled=e)}catch(e){$.options.value._debug===`verbose`&&console.error(`[React Scan Internal Error]`,`Failed to create notifications outline canvas`,e)}return V(`react-scan-options`,Uc(r)),n&&Zc(!!r.showToolbar),r}catch(e){$.options.value._debug===`verbose`&&console.error(`[React Scan Internal Error]`,`Failed to create notifications outline canvas`,e)}},Kc=()=>$.options,qc=null,Yc=()=>{if(qc===!1)return!1;Jc??=t();let e=Array.from(Jc.renderers.values());if(e.length===0)return null;for(let t of e)if(l(t)!==`production`)return qc=!1,!1;return!0},Xc=()=>{try{if(!Ue||!$.runInAllEnvironments&&Yc()&&!$.options.value.dangerouslyForceRunInProduction)return;Ic();let e=Tn(`react-scan-options`);if(e){let t=Wc(e);Object.keys(t).length>0&&($.options.value={...$.options.value,...t})}let t=Kc();Fa(()=>{Zc(!!t.value.showToolbar)}),Ue&&setTimeout(()=>{y()||console.error(`[React Scan] Failed to load. Must import React Scan before React runs.`)},5e3)}catch(e){$.options.value._debug===`verbose`&&console.error(`[React Scan Internal Error]`,`Failed to create notifications outline canvas`,e)}},Zc=e=>{var t;(t=window.reactScanCleanupListeners)==null||t.call(window);let n=Ko(),r=Qc();window.reactScanCleanupListeners=()=>{n(),r?.()};let i=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!e){i?.remove();return}i?.remove();let{shadowRoot:a}=Hc();Pc(a)},Qc=()=>{try{let e=document.documentElement;return Ns(e)}catch(e){$.options.value._debug===`verbose`&&console.error(`[React Scan Internal Error]`,`Failed to create notifications outline canvas`,e)}},$c=(e={})=>{Gc(e),!(Q.isInIframe.value&&!$.options.value.allowInIframe&&!$.runInAllEnvironments)&&(e.enabled===!1&&e.showToolbar!==!0||Xc())},el=new WeakSet}));export{el as a,Gc as c,Kc as i,Xc as l,Q as n,tl as o,Yc as r,$c as s,$ as t};