(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=globalThis,G=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),Z=new WeakMap;let rt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(G&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Z.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Z.set(e,t))}return t}toString(){return this.cssText}};const ut=r=>new rt(typeof r=="string"?r:r+"",void 0,V),gt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce(((s,o,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[i+1]),r[0]);return new rt(e,r,V)},mt=(r,t)=>{if(G)r.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const s=document.createElement("style"),o=j.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=e.cssText,r.appendChild(s)}},J=G?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ut(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ft,defineProperty:vt,getOwnPropertyDescriptor:wt,getOwnPropertyNames:yt,getOwnPropertySymbols:bt,getPrototypeOf:xt}=Object,N=globalThis,K=N.trustedTypes,$t=K?K.emptyScript:"",kt=N.reactiveElementPolyfillSupport,E=(r,t)=>r,H={toAttribute(r,t){switch(t){case Boolean:r=r?$t:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},nt=(r,t)=>!ft(r,t),Q={attribute:!0,type:String,converter:H,reflect:!1,useDefault:!1,hasChanged:nt};Symbol.metadata??=Symbol("metadata"),N.litPropertyMetadata??=new WeakMap;let _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Q){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),o=this.getPropertyDescriptor(t,s,e);o!==void 0&&vt(this.prototype,t,o)}}static getPropertyDescriptor(t,e,s){const{get:o,set:i}=wt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:o,set(n){const c=o?.call(this);i?.call(this,n),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Q}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const t=xt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const e=this.properties,s=[...yt(e),...bt(e)];for(const o of s)this.createProperty(o,e[o])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,o]of e)this.elementProperties.set(s,o)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const o=this._$Eu(e,s);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const o of s)e.unshift(J(o))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return mt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,s);if(o!==void 0&&s.reflect===!0){const i=(s.converter?.toAttribute!==void 0?s.converter:H).toAttribute(e,s.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,e){const s=this.constructor,o=s._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const i=s.getPropertyOptions(o),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:H;this._$Em=o;const c=n.fromAttribute(e,i.type);this[o]=c??this._$Ej?.get(o)??c,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){const o=this.constructor,i=this[t];if(s??=o.getPropertyOptions(t),!((s.hasChanged??nt)(i,e)||s.useDefault&&s.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:o,wrapped:i},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),i!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,i]of s){const{wrapped:n}=i,c=this[o];n!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,i,c)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[E("elementProperties")]=new Map,_[E("finalized")]=new Map,kt?.({ReactiveElement:_}),(N.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis,T=q.trustedTypes,X=T?T.createPolicy("lit-html",{createHTML:r=>r}):void 0,at="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,lt="?"+w,_t=`<${lt}>`,$=document,P=()=>$.createComment(""),M=r=>r===null||typeof r!="object"&&typeof r!="function",W=Array.isArray,At=r=>W(r)||typeof r?.[Symbol.iterator]=="function",U=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,et=/>/g,b=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),st=/'/g,ot=/"/g,ct=/^(?:script|style|textarea|title)$/i,St=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),l=St(1),k=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),it=new WeakMap,x=$.createTreeWalker($,129);function dt(r,t){if(!W(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return X!==void 0?X.createHTML(t):t}const Et=(r,t)=>{const e=r.length-1,s=[];let o,i=t===2?"<svg>":t===3?"<math>":"",n=S;for(let c=0;c<e;c++){const a=r[c];let p,u,d=-1,f=0;for(;f<a.length&&(n.lastIndex=f,u=n.exec(a),u!==null);)f=n.lastIndex,n===S?u[1]==="!--"?n=tt:u[1]!==void 0?n=et:u[2]!==void 0?(ct.test(u[2])&&(o=RegExp("</"+u[2],"g")),n=b):u[3]!==void 0&&(n=b):n===b?u[0]===">"?(n=o??S,d=-1):u[1]===void 0?d=-2:(d=n.lastIndex-u[2].length,p=u[1],n=u[3]===void 0?b:u[3]==='"'?ot:st):n===ot||n===st?n=b:n===tt||n===et?n=S:(n=b,o=void 0);const v=n===b&&r[c+1].startsWith("/>")?" ":"";i+=n===S?a+_t:d>=0?(s.push(p),a.slice(0,d)+at+a.slice(d)+w+v):a+w+(d===-2?c:v)}return[dt(r,i+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class B{constructor({strings:t,_$litType$:e},s){let o;this.parts=[];let i=0,n=0;const c=t.length-1,a=this.parts,[p,u]=Et(t,e);if(this.el=B.createElement(p,s),x.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=x.nextNode())!==null&&a.length<c;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(at)){const f=u[n++],v=o.getAttribute(d).split(w),L=/([.?@])?(.*)/.exec(f);a.push({type:1,index:i,name:L[2],strings:v,ctor:L[1]==="."?Pt:L[1]==="?"?Mt:L[1]==="@"?Bt:O}),o.removeAttribute(d)}else d.startsWith(w)&&(a.push({type:6,index:i}),o.removeAttribute(d));if(ct.test(o.tagName)){const d=o.textContent.split(w),f=d.length-1;if(f>0){o.textContent=T?T.emptyScript:"";for(let v=0;v<f;v++)o.append(d[v],P()),x.nextNode(),a.push({type:2,index:++i});o.append(d[f],P())}}}else if(o.nodeType===8)if(o.data===lt)a.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(w,d+1))!==-1;)a.push({type:7,index:i}),d+=w.length-1}i++}}static createElement(t,e){const s=$.createElement("template");return s.innerHTML=t,s}}function A(r,t,e=r,s){if(t===k)return t;let o=s!==void 0?e._$Co?.[s]:e._$Cl;const i=M(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(r),o._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=o:e._$Cl=o),o!==void 0&&(t=A(r,o._$AS(r,t.values),o,s)),t}class Ct{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,o=(t?.creationScope??$).importNode(e,!0);x.currentNode=o;let i=x.nextNode(),n=0,c=0,a=s[0];for(;a!==void 0;){if(n===a.index){let p;a.type===2?p=new I(i,i.nextSibling,this,t):a.type===1?p=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(p=new It(i,this,t)),this._$AV.push(p),a=s[++c]}n!==a?.index&&(i=x.nextNode(),n++)}return x.currentNode=$,o}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class I{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,o){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=A(this,t,e),M(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==k&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):At(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T($.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=B.createElement(dt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===o)this._$AH.p(e);else{const i=new Ct(o,this),n=i.u(this.options);i.p(e),this.T(n),this._$AH=i}}_$AC(t){let e=it.get(t.strings);return e===void 0&&it.set(t.strings,e=new B(t)),e}k(t){W(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,o=0;for(const i of t)o===e.length?e.push(s=new I(this.O(P()),this.O(P()),this,this.options)):s=e[o],s._$AI(i),o++;o<e.length&&(this._$AR(s&&s._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class O{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,o,i){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(t,e=this,s,o){const i=this.strings;let n=!1;if(i===void 0)t=A(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==k,n&&(this._$AH=t);else{const c=t;let a,p;for(t=i[0],a=0;a<i.length-1;a++)p=A(this,c[s+a],e,a),p===k&&(p=this._$AH[a]),n||=!M(p)||p!==this._$AH[a],p===h?t=h:t!==h&&(t+=(p??"")+i[a+1]),this._$AH[a]=p}n&&!o&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Pt extends O{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class Mt extends O{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class Bt extends O{constructor(t,e,s,o,i){super(t,e,s,o,i),this.type=5}_$AI(t,e=this){if((t=A(this,t,e,0)??h)===k)return;const s=this._$AH,o=t===h&&s!==h||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==h&&(s===h||o);o&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class It{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){A(this,t)}}const Lt=q.litHtmlPolyfillSupport;Lt?.(B,I),(q.litHtmlVersions??=[]).push("3.3.1");const jt=(r,t,e)=>{const s=e?.renderBefore??t;let o=s._$litPart$;if(o===void 0){const i=e?.renderBefore??null;s._$litPart$=o=new I(t.insertBefore(P(),i),i,void 0,e??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=globalThis;let g=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=jt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return k}};g._$litElement$=!0,g.finalized=!0,Y.litElementHydrateSupport?.({LitElement:g});const Tt=Y.litElementPolyfillSupport;Tt?.({LitElement:g});(Y.litElementVersions??=[]).push("4.2.1");const y=gt`
@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Figtree", sans-serif;
    font-optical-sizing: auto;
}
:root {
    --Gris1: #f8f9fa;
    --Gris2: #dee2e6;
    --Negro: #232323;
    --PaddingSections: 2rem;
    --PaddingButtons: 0.5rem;
    --RadiusSections: 2rem;
    --RadiusButtons: 1rem;
}
.general--sections {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    height: auto;
    overflow: hidden;
    position: relative;
    border-radius: var(--RadiusSections);
    padding: var(--PaddingSections);
}
.d-flexx {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
}
.d-row {
    flex-direction: row;
}

.d-col {
    flex-direction: column;
}
.btn-general {
    background-color: var(--Gris2);
    color: var(--Negro);
    transition: ease-out 0.4s;
    width: fit-content;
    height: auto;
    min-height: 2rem;
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    border: solid 1px var(--Gris2);
    border-radius: var(--RadiusButtons);
    cursor: pointer;
}
    .btn-general:hover {
        border: solid 1px var(--Gris2);
        background-color: var(--Negro);
        color: white;
    }
.btn-active {
    background-color: var(--Negro);
    color: var(--Gris2);
}


/* NAV STYLES  */
.nav--container {
    width: 100%;
    padding: 1.5rem;
    gap: 0;
    margin: 0 auto;
    margin-bottom: 1rem;
    border: solid 1px var(--Gris2);
    justify-content: end;
}
    .nav--container > figure{
        height: 100%;
        width: 10rem;
        overflow: hidden;
        margin-right: auto;
    }
    .nav--container img{
        height: 100%;
        width:  100%;
        object-fit: contain;
    }
    
    .btn-nav {
        border: none;
        border-radius: 0px;
        gap: var(--PaddingButtons);
        border-radius: var(--PaddingButtons);
    }
        .btn-nav:hover {
            border: none;
            opacity: 0.8;
        }
    .btn-nav-left{
        border-radius: var(--PaddingButtons) 0px 0px var(--PaddingButtons);
    }
    .btn-nav-middle{
        border-radius: 0px ;
    }
    .btn-nav-rigth{
        border-radius: 0px var(--PaddingButtons) var(--PaddingButtons) 0px;
    }
/* NAV STYLES  */


/* PARTY STYLES */
.form--container{
    border: solid 1px var(--Gris2);
    gap: 2rem;
    flex-wrap: wrap;
    align-items: start;
}   
    .form--sides{
        width: 40%;
        height: fit-content;
        flex-grow: 1;
        gap: var(--PaddingButtons);
        justify-content: start;
        align-items: start;
    }
    .left--form{
        
    }
        .input-general{
            width: 100%;
            padding: 1rem 1.5rem;
            border: solid 1px var(--Gris2);
            border-radius: var(--RadiusButtons);
        }
            .input-general:focus{
                border: solid 1px var(--Gris2);
            }
    .rigth--form {
        
    }
        .tipos--container{
            width: 100%;
            gap: var(--PaddingButtons);
            flex-wrap: wrap;
            justify-content: start;
        }
            .check--container{
                gap: 3px;
                width: fit-content;
                height: auto;
                flex-grow: 1;
            }
                .input--check{
                    display: none;
                }
                .label--check{
                    cursor: pointer;
                    padding: 3px;
                    width: 100%;
                    height: auto;
                    border-radius: 5px;
                    overflow: hidden;
                    gap: var(--PaddingButtons);
                    color: var(--Negro);
                    transition: all 0.3s;
                    border: solid 1px var(--Negro);
                    opacity: 0.8;
                }
                    .input--check[type="checkbox"]:checked + .label--check{
                        background-color: var(--color-type);
                        color: white;
                        opacity: 1;
                        border: solid 1px var(--color-type);
                    }

    .form--container > button {
        width: 100%;
        flex-grow: 1;
        flex-shrink: 0;
    }
/* PARTY STYLES */


/* LIST STYLES */
.list--container {
    width: 100%;
    height: auto;
    padding: 0;
    border-radius: 0;
}
    .container--list{
        width: 100%;
        height: auto;
        flex-wrap: wrap;
        gap: var(--PaddingButtons);
    }
    .api--container .card--list{
        height: 20rem;
    }
        .card--list{
            width: 30%;
            height: 25rem;
            flex-grow: 1;
            flex-shrink: 1;
            justify-content: space-between;
            padding: var(--PaddingButtons);
            border-radius: var(--RadiusButtons);
            border: solid 1px var(--Gris2);
            overflow: hidden;
            gap: var(--PaddingButtons);
            position: relative;
        }
            .cont--img{
                width: 100%;
                min-height: 40%;
                height: 40%;
                position: relative;
                z-index: 2;
            }
                .gradient-decorator{
                    width: auto;
                    height: 80%;
                    aspect-ratio: 1/1;
                    position: absolute;
                    z-index: 0;
                    transform: translate(-50%, -50%);
                    top: 30%;
                    left: 50%;
                    background: #fff;
                }
                .cont--img img{
                    position: relative;
                    z-index: 4;
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            .card--list > span{
                width: 100%;
                height: fit-content;
                overflow: hidden;
                z-index: 2;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: var(--PaddingButtons);
            }
            span.name{
                font-size: 1.5em;
                font-weight: bold;
                text-transform: uppercase;
                z-index: 2;
            }
            span.types {
                justify-content: start;
                font-size: 0.8rem;
                z-index: 2;
            }
                span.types > small{
                    padding: 0.3rem 0.5rem;
                    border-radius: 0.4rem;
                    gap: 0.2rem;
                    color: white ;
                }
                    span.types > small > svg{
                        width: 15px;
                        height: auto;
                        aspect-ratio: 1/1;
                    }
                span.types > span{
                    width: fit-content;
                    height: auto;
                    padding: 3px;
                    aspect-ratio: 1/1;
                    border-radius: 50%;
                    background-color: var(--Negro);
                    color: var(--Gris2);
                }
            span.metrics {  
                z-index: 2;
            }
                span.metrics > small{
                    width: 40%;
                    flex-grow: 1;
                    gap: var(--PaddingButtons);
                    display: flex;
                    justify-self: center;
                    align-items: center;
                    flex-direction: column;
                    padding: var(--PaddingButtons) 1rem;
                    border-radius: 0.4rem;
                    background-color: var(--Negro);
                    color: var(--Gris2);
                }
            span.btns-interact {
                z-index: 2;
            }
                .btn-card{
                    width: 30%;
                    flex-grow: 1;
                    padding: 0.5rem;
                    border-radius: 0.4rem;
                    gap: 0.2rem;
                    border: solid 2px var(--Gris2);
                }
                    .btn-card > svg{
                        width: 15px;
                        height: auto;
                        aspect-ratio: 1/1;
                    }
h2 {
    text-align: center;
}
.btn-edit:hover {
    background-color: rgba(2, 64, 220, 0.587);
    border: solid 2px blue;
}
.btn-delete:hover {
    background-color: rgba(220, 2, 2, 0.587);
    border: solid 2px red;
    color: white;
}
/* LIST STYLES */


/* MODAL STYLES */
.modal--container{
    width: 100%;
    height: 100%;
    background-color: #232323a2;
    position: fixed;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 10;
}
    .modal{
        width: 500px;
        height: auto;
        background-color: white;
        border: solid 1px var(--Gris2);
        padding: var(--PaddingSections);
        border-radius: var(--RadiusSections);
        gap: var(--PaddingButtons);
    }
        .close{
            width: 100%;
        }
            .close > button{
                aspect-ratio: 1/1;
                padding: var(--PaddingButtons);
                border-radius: 0.3rem;
                margin: 0;
                margin-left: auto;
            }
        .mensaje--container{
            width: 100%;
            height: 80%;
            gap: var(--PaddingButtons);
            overflow: hidden;
            border-radius: var(--PaddingButtons);
            flex-wrap: wrap;
        }   
            .modal .form--container{
                gap: 1rem;
            }
            .text-msg{
                width:100%;
                gap: var(--PaddingButtons);
                border-radius: 0.3rem;
                padding: var(--PaddingButtons);
                color: var(--Negro);
                flex-grow: 1;
            }
            .error--msg{
                background-color: rgba(220, 2, 2, 0.587);
                border: solid 2px red;
                color: white;
            }
            .edit--msg{
                background-color: rgba(2, 64, 220, 0.59);
                border: solid 2px blue;
                color: white;
            }
                .form--edit{
                    width: 100%;
                }
                .form--edit > .form--sides {
                    width: 100%;
                }
                .form--container > .error--msg{
                    display: none;
                }
            .war--msg{
                background-color: rgba(220, 216, 2, 0.587);
                border: solid 2px yellow;
            }
            .btn-modal{
                width: 40%;
                flex-grow: 1;
            }
            .btn-eliminar{
                background-color: red;
                color: white;
            }
            .btn-editar{
                background-color: blue;
                color: white;
            }
/* MODAL STYLES */


.layout--container{
    margin-block: 1rem;
    width: 100%;
    flex-wrap: wrap;
    gap: var(--PaddingButtons);
    border: solid 1px var(--Gris2);
}
.layout--container > p{
    width: 100%;
    text-align: center;
}
`,Nt="/P001-CRUD-POKEMON/assets/logo-BTFUT0M4.png";class Ot extends g{static properties={pageState:{type:String}};constructor(){super(),this.pageState=""}static styles=[y];render(){return l`
            <nav class="nav--container d-flexx d-row general--sections">
                <figure>
                    <img src="${Nt}">
                </figure>
                <button @click=${this._pageState} data-page="form" type="button" class="btn-general btn-nav btn-nav-left d-flexx d-row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-todo-icon lucide-list-todo"><path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="m3 17 2 2 4-4"/><rect x="3" y="4" width="6" height="6" rx="1"/></svg>    
                    <p>Form</p>
                </button>
                <button @click=${this._pageState} data-page="party" type="button" class="btn-general btn-nav btn-nav-middle btn-active d-flexx d-row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-half-icon lucide-shield-half"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 22V2"/></svg>
                    <p>Team</p>
                </button>
                <button @click=${this._pageState} data-page="pokedex" type="button" class="btn-general btn-nav btn-nav-rigth d-flexx d-row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-marked-icon lucide-book-marked"><path d="M10 2v8l3-3 3 3V2"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>    
                    <p>Pokedex</p>
                </button>
            </nav>
        `}_pageState(t){const e=t.target.closest("button");this.renderRoot.querySelectorAll(".btn-nav").forEach(o=>{o.classList.remove("btn-active")}),e.classList.add("btn-active"),this.pageState=e.dataset.page,this.dispatchEvent(new CustomEvent("page-state",{bubbles:!0,composed:!0,detail:{page:this.pageState}}))}}customElements.define("nav-component",Ot);const C=r=>{const t=localStorage.getItem(r);return t?JSON.parse(t):null},z=(r,t)=>{localStorage.setItem(r,JSON.stringify(t))},F=()=>{window.location.reload()},m={Water:{name:"Water",color:"#39f",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bubbles-icon lucide-bubbles"><path d="M7.2 14.8a2 2 0 0 1 2 2"/><circle cx="18.5" cy="8.5" r="3.5"/><circle cx="7.5" cy="16.5" r="5.5"/><circle cx="7.5" cy="4.5" r="2.5"/></svg>'},Fire:{name:"Fire",color:"#f63",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame-icon lucide-flame"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>'},Bug:{name:"Bug",color:"#9c3",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bug-icon lucide-bug"><path d="M12 20v-9"/><path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"/><path d="M14.12 3.88 16 2"/><path d="M21 21a4 4 0 0 0-3.81-4"/><path d="M21 5a4 4 0 0 1-3.55 3.97"/><path d="M22 13h-4"/><path d="M3 21a4 4 0 0 1 3.81-4"/><path d="M3 5a4 4 0 0 0 3.55 3.97"/><path d="M6 13H2"/><path d="m8 2 1.88 1.88"/><path d="M9 7.13V6a3 3 0 1 1 6 0v1.13"/></svg>'},Grass:{name:"Grass",color:"#6c3",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-leafy-green-icon lucide-leafy-green"><path d="M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"/><path d="M2 22 17 7"/></svg>'},Electric:{name:"Electric",color:"rgba(255, 215, 39, 1)",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>'},Rock:{name:"Rock",color:"#c96",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mountain-icon lucide-mountain"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>'},Ground:{name:"Ground",color:"rgba(121, 78, 31, 1)",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shovel-icon lucide-shovel"><path d="M21.56 4.56a1.5 1.5 0 0 1 0 2.122l-.47.47a3 3 0 0 1-4.212-.03 3 3 0 0 1 0-4.243l.44-.44a1.5 1.5 0 0 1 2.121 0z"/><path d="M3 22a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707l3.355-3.355a1.205 1.205 0 0 1 1.704 0l3.296 3.296a1.205 1.205 0 0 1 0 1.704l-3.355 3.355a1 1 0 0 1-.707.293z"/><path d="m9 15 7.879-7.878"/></svg>'},Normal:{name:"Normal",color:"#fc9",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-icon lucide-circle"><circle cx="12" cy="12" r="10"/></svg>'},Fighting:{name:"Fighting",color:"#f33",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-electric-icon lucide-bell-electric"><path d="M18.518 17.347A7 7 0 0 1 14 19"/><path d="M18.8 4A11 11 0 0 1 20 9"/><path d="M9 9h.01"/><circle cx="20" cy="16" r="2"/><circle cx="9" cy="9" r="7"/><rect x="4" y="16" width="10" height="6" rx="2"/></svg>'},Dark:{name:"Dark",color:"#333",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-star-icon lucide-moon-star"><path d="M18 5h4"/><path d="M20 3v4"/><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>'},Steel:{name:"Steel",color:"#a5a4a4",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bolt-icon lucide-bolt"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><circle cx="12" cy="12" r="4"/></svg>'},Psychic:{name:"Psychic",color:"#f69",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shell-icon lucide-shell"><path d="M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"/></svg>'},Ghost:{name:"Ghost",color:"#66c",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ghost-icon lucide-ghost"><path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/></svg>'},Poison:{name:"Poison",color:"#a6c",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-syringe-icon lucide-syringe"><path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/></svg>'},Flying:{name:"Flying",color:"#69f",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wind-icon lucide-wind"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"/><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/></svg>'},Fairy:{name:"Fairy",color:"#f9c",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wand-icon lucide-wand"><path d="M15 4V2"/><path d="M15 16v-2"/><path d="M8 9h2"/><path d="M20 9h2"/><path d="M17.8 11.8 19 13"/><path d="M15 9h.01"/><path d="M17.8 6.2 19 5"/><path d="m3 21 9-9"/><path d="M12.2 6.2 11 5"/></svg>'},Ice:{name:"Ice",color:"#9ff",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-snowflake-icon lucide-snowflake"><path d="m10 20-1.25-2.5L6 18"/><path d="M10 4 8.75 6.5 6 6"/><path d="m14 20 1.25-2.5L18 18"/><path d="m14 4 1.25 2.5L18 6"/><path d="m17 21-3-6h-4"/><path d="m17 3-3 6 1.5 3"/><path d="M2 12h6.5L10 9"/><path d="m20 10-1.5 2 1.5 2"/><path d="M22 12h-6.5L14 15"/><path d="m4 10 1.5 2L4 14"/><path d="m7 21 3-6-1.5-3"/><path d="m7 3 3 6h4"/></svg>'},Dragon:{name:"Dragon",color:"#7038f8",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-origami-icon lucide-origami"><path d="M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025"/><path d="m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009"/><path d="m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027"/></svg>'}},ht=["Water","Fire","Grass","Electric","Rock","Ground","Normal","Fighting","Dark","Steel","Psychic","Ghost","Bug","Poison","Flying","Fairy","Ice","Dragon"],pt=(r,t,e)=>{switch(r){case"1":return l`
        <img alt="${t}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${e}.png">
      `;case"2":return l`
        <img alt="${t}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e}.png">
      `;case"3":return l`
       <img alt="${t}" style="filter: saturate(1.6)" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e}.png">
      `;case"4":return l`
       <img alt="${t}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world//${e}.svg">
      `;case"5":return l`
       <img alt="${t}" style="width: 30%; margin: 0 auto;" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${e}.gif">
      `;default:return l`
        <img alt="${t}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${e}.png">
      `}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt={CHILD:2},Ut=r=>(...t)=>({_$litDirective$:r,values:t});class Ht{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class D extends Ht{constructor(t){if(super(t),this.it=h,t.type!==Rt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===h||t==null)return this._t=void 0,this.it=t;if(t===k)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}D.directiveName="unsafeHTML",D.resultType=1;const R=Ut(D);class zt extends g{static properties={pokemones:{type:Array},localespokemones:{type:Array},styleImg:{type:String}};constructor(){super(),this.pokemones=[],this.localespokemones=[],this.styleImg=""}async firstUpdated(){const t=Math.floor(Math.random()*1280)+1;try{const s=await(await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${t}&limit=20`)).json(),o=await Promise.all(s.results.map(i=>fetch(i.url).then(n=>n.json())));this.pokemones=o}catch(e){console.error(e)}}static styles=[y];render(){return l`
      <layout-component @style-state=${this._changeStyle}></layout-component>
      <section class="general--sections list--container api--container">
        <div class="container--list d-flexx d-row">
          ${this._templateTable()}
        </div>    
      </section>
    `}_changeStyle(t){this.styleImg=t.detail.styleimg}_templateTable(){return this.pokemones&&this.pokemones.length>0?this.pokemones.map(t=>l`
              <div class="card--list d-flexx d-col">
                <div class="gradient-decorator" style="background: radial-gradient(circle,  ${(()=>{const e=t.types[0]?.type.name,s=e.charAt(0).toUpperCase()+e.slice(1);return m[s]?.color})()} 20%, rgba(255, 255, 255, 1) 30%);"></div>
                <span class="types">
                  <span class="d-flexx">#${t.id}</span>
                    ${t.types.map(e=>{let s=e.type.name,i=s.charAt(0).toUpperCase().concat(s.slice(1));const n=m[i];return l`
                        <small class="d-flexx" style="background-color: ${n.color};"> ${R(n.icon)}  ${n.name}</small>
                        `})}
                </span>
                <figure class="cont--img  d-flexx">
                    ${pt(this.styleImg,t.nombre,t.id)}
                </figure>
                <span class="name">
                  <p class="d-flexx d-row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
                    ${t.name}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
                  </p>
                </span> 
                <span class="metrics">
                  <small>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-weight-icon lucide-weight"><circle cx="12" cy="5" r="3"/><path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"/></svg>
                      ${(t.weight*.1).toFixed(1)} kg
                  </small>
                  <small>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ruler-icon lucide-ruler"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg>
                      ${(t.height*.1).toFixed(1)} m
                  </small>
                </span>
              </div>
            `):l`
            <p colspan="6">No hay pokemones guardados.</p>
          `}}customElements.define("pokedex-component",zt);class Ft extends g{static properties={styleImg:{type:String}};constructor(){super(),this.styleImg=""}firstUpdated(){const t=localStorage.getItem("estilo");t?(this.styleImg=t,this._changeImageStyle()):localStorage.setItem("estilo",this.styleImg)}static styles=[y];render(){return l`
            <div class="layout--container d-flexx d-row general--sections">
                <p>Estilos de imágenes pokemon.</p>
                <button @click=${this._changeImageStyle} data-style="1" type="button" class="btn-general btn-nav btn-active d-flexx d-row">
                    <small>ESTILO #1</small>
                </button>
                <button @click=${this._changeImageStyle} data-style="2" type="button" class="btn-general btn-nav d-flexx d-row">
                    <small>ESTILO #2</small>
                </button>
                <button @click=${this._changeImageStyle} data-style="3" type="button" class="btn-general btn-nav d-flexx d-row">
                    <small>ESTILO #3</small>
                </button>
                <button @click=${this._changeImageStyle} data-style="4" type="button" class="btn-general btn-nav d-flexx d-row">
                    <small>ESTILO #4</small>
                </button>
                <button @click=${this._changeImageStyle} data-style="5" type="button" class="btn-general btn-nav d-flexx d-row">
                    <small>ESTILO #5</small>
                </button>
            </div>
        `}_changeImageStyle(t){const e=this.renderRoot.querySelectorAll(".btn-nav");if(e.forEach(s=>{s.classList.remove("btn-active")}),t){const s=t.target.closest("button");s.classList.add("btn-active"),this.styleImg=s.dataset.style,localStorage.setItem("estilo",this.styleImg)}else{let s=parseInt(this.styleImg);e[s-1].classList.add("btn-active")}this.dispatchEvent(new CustomEvent("style-state",{bubbles:!0,composed:!0,detail:{styleimg:this.styleImg}}))}}customElements.define("layout-component",Ft);class Dt extends g{static properties={styleImg:{type:String}};constructor(){super(),this.styleImg=""}static styles=[y];render(){return l`
            <section class="general--sections list--container">
                <div class="container--list d-flexx d-row">
                    ${this._renderLocal()}
                </div>
            </section>
        `}_renderLocal(){const t=C("pokemones");return t&&t.length>0?t.map((e,s)=>l`
                    <div class="card--list d-flexx d-col">
                        <div class="gradient-decorator" style="background: radial-gradient(circle, ${m[e.tipos[0]].color} 20%, rgba(255, 255, 255, 1) 30%);"></div>
                        <span class="types">
                            <span class="d-flexx">#${s+1}</span>
                            ${e.tipos.map(o=>l`
                                        <small class="d-flexx" style="background-color: ${m[o].color};"> ${R(m[o].icon)}  ${m[o].name}</small>
                                    `)}
                        </span>
                        <figure class="cont--img d-flexx">
                            ${pt(this.styleImg,e.nombre,e.id)}
                        </figure>
                        <span class="name">
                            <p class="d-flexx d-row">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
                            ${e.nombre}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
                            </p>
                        </span>                        
                        <span class="metrics">
                            <small>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-weight-icon lucide-weight"><circle cx="12" cy="5" r="3"/><path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"/></svg>
                                ${e.peso} kg
                            </small>
                            <small>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ruler-icon lucide-ruler"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg>
                                ${e.altura} m
                            </small>
                        </span>
                        <span class="btns-interact">
                            <button @click=${this._editPoke} class="btn-general btn-card btn-edit d-flexx d-row" data-id="${s}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-line-icon lucide-pencil-line"><path d="M13 21h8"/><path d="m15 5 4 4"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>
                                Editar
                            </button>
                            <button @click=${this._deletePoke} class="btn-general btn-card btn-delete d-flexx d-row" data-id="${s}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"> <path d="M10 11v6" /> <path d="M14 11v6" /> <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /> <path d="M3 6h18" /> <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /> </svg> 
                                Eliminar
                            </button>
                        </span>
                    </div>
                `):l`
                    <p colspan="6">No hay Pokémones guardados.</p>
                `}_editPoke(t){const s=t.target.closest("button").dataset.id;this._alertForm("edit",s)}_deletePoke(t){const s=t.target.closest("button").dataset.id;this._alertForm("delete",s)}_alertForm(t,e){this.dispatchEvent(new CustomEvent("alert-modal",{bubbles:!0,composed:!0,detail:{type:t,id:e}}))}}customElements.define("list-component",Dt);class Gt extends g{static properties={styleImg:{type:String}};constructor(){super(),this.styleImg=""}static styles=[y];render(){return l`           
            <layout-component @style-state=${this._changeStyle}></layout-component>
            
            <list-component .styleImg=${this.styleImg}></list-component>
        `}_changeStyle(t){this.styleImg=t.detail.styleimg}}customElements.define("party-component",Gt);class Vt extends g{static properties={type:{type:String},item:{type:String},mostrar:{type:Boolean},tiposSeleccionados:{type:Array},nombre2:{type:String}};constructor(){super(),this.type="",this.nombre2="",this.item="",this.mostrar=!1,this.tiposSeleccionados=[]}static styles=[y];render(){if(this.mostrar)return l`
                <section class="modal--container d-flexx" id="modal">
                    <modal class="modal d-flexx d-col">
                            <div class="close">
                                <button @click=${this._closeModal} class="btn-general d-flexx d-col">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                                </button>
                            </div>
                            <div class="mensaje--container d-flexx d-row">
                                ${this._renderType()}
                            </div>
                        </modal>
                </section>
            `}_deleteItem(){const t=C("pokemones");t.splice(this.item,1),z("pokemones",t),this._closeModal(),F()}_loadInformation(t){return C("pokemones")[this.item][t]}_validateForm(t){t.preventDefault();const e=this.renderRoot.querySelector("#id").value,s=this.renderRoot.querySelector("#pos").value,o=this.renderRoot.querySelector("#nombre").value.trim(),i=parseFloat(this.renderRoot.querySelector("#peso").value),n=parseFloat(this.renderRoot.querySelector("#altura").value),c=this.renderRoot.querySelector(".form--container > .error--msg");this._handleCheckboxChange();const a=this.tiposSeleccionados.length;if(!o||isNaN(i)||isNaN(n)||a===0||a>=3||n<=0||i<=0){c.style.display="flex";return}this._editItem(s,e,o,i,n,this.tiposSeleccionados)}_editItem(t,e,s,o,i,n){const c=C("pokemones"),a={id:e,nombre:s,peso:o,altura:i,tipos:n};c[t]=a,z("pokemones",c),this._closeModal(),F()}_multipleTypes(t){return l`
            <p>Máximo 2 tipos por pokemon:</p>
            <div class="tipos--container d-flexx d-row">
                ${ht.map(e=>{const s=t.includes(e);return l` 

                        <div class="check--container d-flexx">
                                                    <input class="input--check" type="checkbox" id="${e}" value="${e}" ?checked=${s} @change=${this._handleCheckboxChange}>
                                                    <label class="label--check d-flexx" for="${e}" style="--color-type: ${m[e].color};">
                                                        ${R(m[e].icon)}
                                                        <small>${e}</small>
                                                    </label>
                                                </div>
                    `})}
            </div>
            `}_handleCheckboxChange(t){if(t){const{value:e,checked:s}=t.target;this._cehckeds(s,e)}else{const e=this.renderRoot.querySelectorAll('input[type="checkbox"]');this.tiposSeleccionados=[],e.forEach(s=>{const{value:o,checked:i}=s;this._cehckeds(i,o)})}}_cehckeds(t,e){t?this.tiposSeleccionados=[...this.tiposSeleccionados,e]:this.tiposSeleccionados=this.tiposSeleccionados.filter(s=>s!==e)}_closeModal(){this.mostrar=!1,this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}_renderType(){switch(this.type){case"error":return l`
                        <p class="text-msg error--msg d-flexx">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                            ¡Verifica la información ingresada!
                        </p>
                    `;case"edit":return l`
                    
                        <p class="text-msg edit--msg d-flexx">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-line-icon lucide-pencil-line"><path d="M13 21h8"/><path d="m15 5 4 4"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>
                            Editar información de Pokémon
                        </p>
                        <form class="general--sections form--edit form--container d-flexx" @submit=${this._validateForm}>
                            <div class="form--sides left--form d-flexx d-col">
                                <p>Agregar un nuevo Pokemon:</p>
                                <input type="hidden"  id="id" value="${this._loadInformation("id")}">
                                <input type="hidden"  id="pos" value="${this.item}">
                                <input type="text" class="input-general" id="nombre" placeholder="Nombre" value="${this._loadInformation("nombre")}">
                                <input type="number" class="input-general" id="peso" placeholder="Peso (kg)" value="${this._loadInformation("peso")}" step="0.1">
                                <input type="number" class="input-general" id="altura" placeholder="Altura (m)" value="${this._loadInformation("altura")}" step="0.1">
                            </div>
                             
                            <div class="form--sides rigth--form d-flexx d-col">
                                ${this._multipleTypes(this._loadInformation("tipos"))}
                            </div>

                            <p class="text-msg error--msg d-flexx">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                                ¡Verifica la información ingresada!
                            </p>
                            <button type="submit" class="btn-modal btn-general btn-editar">Editar</button>
                        </form>
                    `;case"delete":return l`
                        <p class="text-msg war--msg d-flexx">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert-icon lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                            ¿Confirmas la acción de eliminar?
                        </p>
                        <button class="btn-modal btn-general" @click=${this._closeModal}>Cancelar</button>
                        <button class="btn-modal btn-general btn-eliminar" @click=${this._deleteItem}>Eliminar</button>
                    `}}}customElements.define("modal-component",Vt);class qt extends g{static properties={pokemonesObject:{type:Object},tiposSeleccionados:{type:Array}};constructor(){super(),this.pokemonesObject={id:"",nombre:"",peso:"",altura:"",tipos:[]},this.tiposSeleccionados=[]}static styles=[y];render(){return l`
            <form class="general--sections form--container d-flexx d-row" @submit=${this._validateForm}>
                <div class="form--sides left--form d-flexx d-col">
                    <p>Agregar un nuevo Pokemon:</p>
                    <input type="text" class="input-general" id="nombre" placeholder="Nombre">
                    <input type="number" class="input-general" id="peso" placeholder="Peso (kg)" step="0.1">
                    <input type="number" class="input-general" id="altura" placeholder="Altura (m)" step="0.1">
                </div>
                <div class="form--sides rigth--form d-flexx d-col">
                    ${this._multipleTypes()}
                </div>
                <button type="submit" class="btn-general d-flexx d-col">Guardar</button>
            </form>
        `}_validateForm(t){t.preventDefault();const e=this.renderRoot.querySelector("#nombre").value.trim(),s=parseFloat(this.renderRoot.querySelector("#peso").value),o=parseFloat(this.renderRoot.querySelector("#altura").value),i=this.tiposSeleccionados.length;if(!e||isNaN(s)||isNaN(o)||i===0||i>=3||o<=0||s<=0){this._alertForm("error");return}this._setPokem(e,s,o,this.tiposSeleccionados),F()}_alertForm(t){this.dispatchEvent(new CustomEvent("alert-modal",{bubbles:!0,composed:!0,detail:{type:t}}))}_multipleTypes(){return l`
            <p>Máximo 2 tipos por pokemon:</p>
            <div class="tipos--container d-flexx d-row">
                ${ht.map(t=>l` 
                        
                        <div class="check--container d-flexx">
                            <input class="input--check" type="checkbox" id="${t}" value="${t}" @change=${this._handleCheckboxChange}>
                            <label class="label--check d-flexx" for="${t}" style="--color-type: ${m[t].color};">
                                ${R(m[t].icon)}
                                <small>${t}</small>
                            </label>
                        </div>
                    `)}
            </div>
            `}_handleCheckboxChange(t){const{value:e,checked:s}=t.target;s?this.tiposSeleccionados=[...this.tiposSeleccionados,e]:this.tiposSeleccionados=this.tiposSeleccionados.filter(o=>o!==e)}_setPokem(t,e,s,o){let i=[];const n=Math.floor(Math.random()*1302)+1,c=C("pokemones");c&&(i=c),this.pokemonesObject={id:n,nombre:t,peso:e,altura:s,tipos:o},i.push(this.pokemonesObject),z("pokemones",i)}}customElements.define("form-component",qt);class Wt extends g{static properties={pageLoc:{type:String},type:{type:String},item:{type:String},mostrar:{type:Boolean}};constructor(){super(),this.pageLoc="party",this.type="error",this.item="",this.mostrar=!1}static styles=[y];render(){return l`
            <main class="general--sections" @alert-modal=${this._changeType} @close-modal=${this._closeModal}>
                <nav-component @page-state=${this._changePage}></nav-component>

                <modal-component .type=${this.type} .mostrar=${this.mostrar} .item=${this.item}></modal-component>

                ${this._renderPages()}
            </main>
            
        `}_changePage(t){this.pageLoc=t.detail.page}_renderPages(){switch(this.pageLoc){case"party":return l`<party-component @delete-item=${this._closeModal}></party-component>`;case"pokedex":return l`<pokedex-component></pokedex-component>`;case"form":return l`<form-component></form-component>`;default:return l`<form-component></form-component>`}}_closeModal(){this.mostrar=!1}_changeType(t){this.type=t.detail.type,this.mostrar=!0,this.item=t.detail.id}}customElements.define("main-component",Wt);
