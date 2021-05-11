var rt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wt=Symbol(),st=class{constructor(t,e){if(e!==wt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return rt&&this.t===void 0&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}},_t=new Map,kt=n=>{let t=_t.get(n);return t===void 0&&_t.set(n,t=new st(n,wt)),t},ce=n=>kt(typeof n=="string"?n:n+""),j=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((i,r,s)=>i+(o=>{if(o instanceof st)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[s+1],n[0]);return kt(e)},de=(n,t)=>{rt?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let i=document.createElement("style");i.textContent=e.cssText,n.appendChild(i)})},xt=rt?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return ce(e)})(n):n;var St,ot,at,Pt,lt={toAttribute(n,t){switch(t){case Boolean:n=n?"":null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch(i){e=null}}return e}},Tt=(n,t)=>t!==n&&(t==t||n==n),ut={attribute:!0,type:String,converter:lt,reflect:!1,hasChanged:Tt},$=class extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;(e=this.v)!==null&&e!==void 0||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let r=this.Πp(i,e);r!==void 0&&(this.Πm.set(r,i),t.push(r))}),t}static createProperty(t,e=ut){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i=typeof t=="symbol"?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);r!==void 0&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){let s=this[t];this[e]=r,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ut}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let r of i)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let r of i)e.unshift(xt(r))}else t!==void 0&&e.push(xt(t));return e}static Πp(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise(e=>this.enableUpdating=e),this.L=new Map,this.Π_(),this.requestUpdate(),(t=this.constructor.v)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this.ΠU)!==null&&e!==void 0?e:this.ΠU=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this.ΠU)===null||e===void 0||e.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return de(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this.ΠU)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)}),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;(t=this.ΠU)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)}),this.Πo=new Promise(e=>this.Πl=e)}attributeChangedCallback(t,e,i){this.K(t,i)}Πj(t,e,i=ut){var r,s;let o=this.constructor.Πp(t,i);if(o!==void 0&&i.reflect===!0){let a=((s=(r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==null&&s!==void 0?s:lt.toAttribute)(e,i.type);this.Πh=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this.Πh=null}}K(t,e){var i,r,s;let o=this.constructor,a=o.Πm.get(t);if(a!==void 0&&this.Πh!==a){let l=o.getPropertyOptions(a),u=l.converter,h=(s=(r=(i=u)===null||i===void 0?void 0:i.fromAttribute)!==null&&r!==void 0?r:typeof u=="function"?u:null)!==null&&s!==void 0?s:lt.fromAttribute;this.Πh=a,this[a]=h(e,l.type),this.Πh=null}}requestUpdate(t,e,i){let r=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Tt)(this[t],e)?(this.L.has(t)||this.L.set(t,e),i.reflect===!0&&this.Πh!==t&&(this.Πk===void 0&&(this.Πk=new Map),this.Πk.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(e){Promise.reject(e)}let t=this.performUpdate();return t!=null&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach((r,s)=>this[s]=r),this.Πi=void 0);let e=!1,i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this.ΠU)===null||t===void 0||t.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(i)):this.Π$()}catch(r){throw e=!1,this.Π$(),r}e&&this.E(i)}willUpdate(t){}E(t){var e;(e=this.ΠU)===null||e===void 0||e.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){this.Πk!==void 0&&(this.Πk.forEach((e,i)=>this.Πj(i,this[i],e)),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}};$.finalized=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},(ot=(St=globalThis).reactiveElementPlatformSupport)===null||ot===void 0||ot.call(St,{ReactiveElement:$}),((at=(Pt=globalThis).reactiveElementVersions)!==null&&at!==void 0?at:Pt.reactiveElementVersions=[]).push("1.0.0-rc.2");var At,ct,dt,$t,K=globalThis.trustedTypes,Ot=K?K.createPolicy("lit-html",{createHTML:n=>n}):void 0,S=`lit$${(Math.random()+"").slice(9)}$`,jt="?"+S,he=`<${jt}>`,H=document,D=(n="")=>H.createComment(n),C=n=>n===null||typeof n!="object"&&typeof n!="function",Ht=Array.isArray,fe=n=>{var t;return Ht(n)||typeof((t=n)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Mt=/-->/g,Rt=/>/g,O=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Et=/'/g,Lt=/"/g,zt=/^(?:script|style|textarea)$/i,pe=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),w=pe(1),M=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Nt=new WeakMap,ge=(n,t,e)=>{var i,r;let s=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t,o=s._$litPart$;if(o===void 0){let a=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=o=new R(t.insertBefore(D(),a),a,void 0,e)}return o.I(n),o},E=H.createTreeWalker(H,129,null,!1),me=(n,t)=>{let e=n.length-1,i=[],r,s=t===2?"<svg>":"",o=I;for(let l=0;l<e;l++){let u=n[l],h,c,d=-1,f=0;for(;f<u.length&&(o.lastIndex=f,c=o.exec(u),c!==null);)f=o.lastIndex,o===I?c[1]==="!--"?o=Mt:c[1]!==void 0?o=Rt:c[2]!==void 0?(zt.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=O):c[3]!==void 0&&(o=O):o===O?c[0]===">"?(o=r!=null?r:I,d=-1):c[1]===void 0?d=-2:(d=o.lastIndex-c[2].length,h=c[1],o=c[3]===void 0?O:c[3]==='"'?Lt:Et):o===Lt||o===Et?o=O:o===Mt||o===Rt?o=I:(o=O,r=void 0);let y=o===O&&n[l+1].startsWith("/>")?" ":"";s+=o===I?u+he:d>=0?(i.push(h),u.slice(0,d)+"$lit$"+u.slice(d)+S+y):u+S+(d===-2?(i.push(void 0),l):y)}let a=s+(n[e]||"<?>")+(t===2?"</svg>":"");return[Ot!==void 0?Ot.createHTML(a):a,i]},L=class{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,o=0,a=t.length-1,l=this.parts,[u,h]=me(t,e);if(this.el=L.createElement(u,i),E.currentNode=this.el.content,e===2){let c=this.el.content,d=c.firstChild;d.remove(),c.append(...d.childNodes)}for(;(r=E.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes()){let c=[];for(let d of r.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(S)){let f=h[o++];if(c.push(d),f!==void 0){let y=r.getAttribute(f.toLowerCase()+"$lit$").split(S),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:m[2],strings:y,ctor:m[1]==="."?Bt:m[1]==="?"?Ut:m[1]==="@"?Dt:V})}else l.push({type:6,index:s})}for(let d of c)r.removeAttribute(d)}if(zt.test(r.tagName)){let c=r.textContent.split(S),d=c.length-1;if(d>0){r.textContent=K?K.emptyScript:"";for(let f=0;f<d;f++)r.append(c[f],D()),E.nextNode(),l.push({type:2,index:++s});r.append(c[d],D())}}}else if(r.nodeType===8)if(r.data===jt)l.push({type:2,index:s});else{let c=-1;for(;(c=r.data.indexOf(S,c+1))!==-1;)l.push({type:7,index:s}),c+=S.length-1}s++}}static createElement(t,e){let i=H.createElement("template");return i.innerHTML=t,i}};function z(n,t,e=n,i){var r,s,o,a;if(t===M)return t;let l=i!==void 0?(r=e.Σi)===null||r===void 0?void 0:r[i]:e.Σo,u=C(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==u&&((s=l==null?void 0:l.O)===null||s===void 0||s.call(l,!1),u===void 0?l=void 0:(l=new u(n),l.T(n,e,i)),i!==void 0?((o=(a=e).Σi)!==null&&o!==void 0?o:a.Σi=[])[i]=l:e.Σo=l),l!==void 0&&(t=z(n,l.S(n,t.values),l,i)),t}var It=class{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;let{el:{content:i},parts:r}=this.D,s=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:H).importNode(i,!0);E.currentNode=s;let o=E.nextNode(),a=0,l=0,u=r[0];for(;u!==void 0;){if(a===u.index){let h;u.type===2?h=new R(o,o.nextSibling,this,t):u.type===1?h=new u.ctor(o,u.name,u.strings,this,t):u.type===6&&(h=new Vt(o,this,t)),this.l.push(h),u=r[++l]}a!==(u==null?void 0:u.index)&&(o=E.nextNode(),a++)}return s}v(t){let e=0;for(let i of this.l)i!==void 0&&(i.strings!==void 0?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}},R=class{constructor(t,e,i,r){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=r}setConnected(t){var e;(e=this.P)===null||e===void 0||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=z(this,t,e),C(t)?t===b||t==null||t===""?(this.H!==b&&this.R(),this.H=b):t!==this.H&&t!==M&&this.m(t):t._$litType$!==void 0?this._(t):t.nodeType!==void 0?this.$(t):fe(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){let e=this.A.nextSibling;e!==null&&e.nodeType===3&&(this.B===null?e.nextSibling===null:e===this.B.previousSibling)?e.data=t:this.$(H.createTextNode(t)),this.H=t}_(t){var e;let{values:i,_$litType$:r}=t,s=typeof r=="number"?this.C(t):(r.el===void 0&&(r.el=L.createElement(r.h,this.options)),r);if(((e=this.H)===null||e===void 0?void 0:e.D)===s)this.H.v(i);else{let o=new It(s,this),a=o.u(this.options);o.v(i),this.$(a),this.H=o}}C(t){let e=Nt.get(t.strings);return e===void 0&&Nt.set(t.strings,e=new L(t)),e}g(t){Ht(this.H)||(this.H=[],this.R());let e=this.H,i,r=0;for(let s of t)r===e.length?e.push(i=new R(this.k(D()),this.k(D()),this,this.options)):i=e[r],i.I(s),r++;r<e.length&&(this.R(i&&i.B.nextSibling,r),e.length=r)}R(t=this.A.nextSibling,e){var i;for((i=this.P)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this.B;){let r=t.nextSibling;t.remove(),t=r}}},V=class{constructor(t,e,i,r,s){this.type=1,this.H=b,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this.H=Array(i.length-1).fill(b),this.strings=i):this.H=b}get tagName(){return this.element.tagName}I(t,e=this,i,r){let s=this.strings,o=!1;if(s===void 0)t=z(this,t,e,0),o=!C(t)||t!==this.H&&t!==M,o&&(this.H=t);else{let a=t,l,u;for(t=s[0],l=0;l<s.length-1;l++)u=z(this,a[i+l],e,l),u===M&&(u=this.H[l]),o||(o=!C(u)||u!==this.H[l]),u===b?t=b:t!==b&&(t+=(u!=null?u:"")+s[l+1]),this.H[l]=u}o&&!r&&this.W(t)}W(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},Bt=class extends V{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===b?void 0:t}},Ut=class extends V{constructor(){super(...arguments),this.type=4}W(t){t&&t!==b?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}},Dt=class extends V{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=(i=z(this,t,e,0))!==null&&i!==void 0?i:b)===M)return;let r=this.H,s=t===b&&r!==b||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==b&&(r===b||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;typeof this.H=="function"?this.H.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this.H.handleEvent(t)}},Vt=class{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){z(this,t)}};(ct=(At=globalThis).litHtmlPlatformSupport)===null||ct===void 0||ct.call(At,L,R),((dt=($t=globalThis).litHtmlVersions)!==null&&dt!==void 0?dt:$t.litHtmlVersions=[]).push("2.0.0-rc.3");var ht,Wt,ft,qt,pt,Kt;((ht=(Kt=globalThis).litElementVersions)!==null&&ht!==void 0?ht:Kt.litElementVersions=[]).push("3.0.0-rc.2");var _=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();super.update(t),this.Φt=ge(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.Φt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.Φt)===null||t===void 0||t.setConnected(!1)}render(){return M}};_.finalized=!0,_._$litElement$=!0,(ft=(Wt=globalThis).litElementHydrateSupport)===null||ft===void 0||ft.call(Wt,{LitElement:_}),(pt=(qt=globalThis).litElementPlatformSupport)===null||pt===void 0||pt.call(qt,{LitElement:_});var P=n=>t=>typeof t=="function"?((e,i)=>(window.customElements.define(e,i),i))(n,t):((e,i)=>{let{kind:r,elements:s}=i;return{kind:r,elements:s,finisher(o){window.customElements.define(e,o)}}})(n,t);var ve=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}};function be(n){return(t,e)=>e!==void 0?((i,r,s)=>{r.constructor.createProperty(s,i)})(n,t,e):ve(n,t)}function F(n){return be({...n,state:!0,attribute:!1})}var ye=({finisher:n,descriptor:t})=>(e,i)=>{var r;if(i===void 0){let s=(r=e.originalKey)!==null&&r!==void 0?r:e.key,o=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(e.key)}:{...e,key:s};return n!=null&&(o.finisher=function(a){n(a,s)}),o}{let s=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),n==null||n(s,i)}};function N(n,t){return ye({descriptor:e=>{let i={get(){var r;return(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(n)},enumerable:!0,configurable:!0};if(t){let r=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var s;return this[r]===void 0&&(this[r]=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n)),this[r]}}return i}})}var we=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,W=(n,t,e,i)=>{for(var r=i>1?void 0:i?_e(t,e):t,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&we(t,e,r),r},B=class extends _{constructor(){super(...arguments);this._active=!1,this.condition=!1,this.val=0}toggle_button(){this._active?this._active=!1:this._active=!0}isMobile(){return console.log(window.matchMedia("(max-width: 768px)").matches),this.condition=window.matchMedia("(max-width: 768px)").matches}firstUpdated(){window.onscroll=()=>{let n=document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight,e=n/t*100;this.val=e},this.isMobile()}render(){return w`<nav
      @click=${()=>{console.log(this.val>10||this.condition),console.log(this.val>10),console.log(this.condition)}}
      class="m-auto fixed block z-50 container py-4 sm:text-xlbg-white font-bold ${this.val>10?"bg-white text-black shadow-md":"bg-white text-black sm:bg-transparent sm:text-white"}"
    >
      <div class="relative top-0 left-0 w-full">
        <div class="flex flex-wrap justify-between px-4">
          <div class="block w-32 md:w-48 lg:w-64">
            <a href="/">
              ${this.val>10||this.condition?w`<img class="" src="/dist/img/lpa.svg" alt="LPA" />`:w`<img class="" src="/dist/img/lpaw.svg" alt="LPA" />`}
            </a>
          </div>
          <div class="flex lg:hidden">
            <button @click=${this.toggle_button}>
              <img
                class="w-8 ${this._active&&"hidden"}"
                src="/dist/img/menu.svg"
                width="40"
                height="40"
              />
              <img
                class="w-8 ${!this._active&&"hidden"}"
                src="/dist/img/close.svg"
                width="40"
                height="40"
              />
            </button>
          </div>
          <ul
            class="${!this._active&&"hidden"}  lg:flex w-full lg:w-auto text-right mt-5 lg:mt-0 border-t-2 lg:border-none "
          >
            <li
              class="block lg:inline-block self-center px-3 py-3 border-b-2 lg:border-none"
            >
              <a href="/about">About</a>
            </li>
            <li
              class="block lg:inline-block self-center px-3 py-3 border-b-2 lg:border-none"
            >
              <a>Services</a>
            </li>
            <li
              class="block lg:inline-block self-center px-3 py-3 border-b-2 lg:border-none"
            >
              <a>Showroom</a>
            </li>
            <li
              class="block lg:inline-block self-center px-3 py-3 border-b-2 lg:border-none"
            >
              <a>Contact</a>
            </li>
          </ul>

          <a
            href="https://wa.me/628123393111?text=Halo saya ingin bertanya"
            class="${!this._active&&"hidden"} lg:flex w-full lg:w-auto p-4 text-right font-bold self-center bg-blue-900 hover:bg-blue-500 text-white lg:rounded"
          >
            GRATIS ESTIMASI
          </a>
        </div>
      </div>
    </nav>`}createRenderRoot(){return this}};W([F()],B.prototype,"_active",2);W([N("nav")],B.prototype,"oke",2);W([F()],B.prototype,"condition",2);W([F()],B.prototype,"val",2);B=W([P("my-nav")],B);var ke={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perTouch:!1,touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",throttle:10,direction:"ltr",peek:0,breakpoints:{},classes:{direction:{ltr:"glide--ltr",rtl:"glide--rtl"},slider:"glide--slider",carousel:"glide--carousel",swipeable:"glide--swipeable",dragging:"glide--dragging",cloneSlide:"glide__slide--clone",activeNav:"glide__bullet--active",activeSlide:"glide__slide--active",disabledArrow:"glide__arrow--disabled"}};function k(n){console.error("[Glide warn]: "+n)}var xe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Y=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")},J=function(){function n(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}(),T=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},Se=function n(t,e,i){t===null&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(r===void 0){var s=Object.getPrototypeOf(t);return s===null?void 0:n(s,e,i)}else{if("value"in r)return r.value;var o=r.get;return o===void 0?void 0:o.call(i)}},Pe=function(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)},Te=function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:n};function g(n){return parseInt(n)}function Ae(n){return parseFloat(n)}function gt(n){return typeof n=="string"}function U(n){var t=typeof n=="undefined"?"undefined":xe(n);return t==="function"||t==="object"&&!!n}function $e(n){return typeof n=="number"}function X(n){return typeof n=="function"}function Ct(n){return typeof n=="undefined"}function mt(n){return n.constructor===Array}function Oe(n,t,e){var i={};for(var r in t)X(t[r])?i[r]=t[r](n,i,e):k("Extension must be a function");for(var s in i)X(i[s].mount)&&i[s].mount();return i}function p(n,t,e){Object.defineProperty(n,t,e)}function je(n){return Object.keys(n).sort().reduce(function(t,e){return t[e]=n[e],t[e],t},{})}function vt(n,t){var e=T({},n,t);return t.hasOwnProperty("classes")&&(e.classes=T({},n.classes,t.classes),t.classes.hasOwnProperty("direction")&&(e.classes.direction=T({},n.classes.direction,t.classes.direction))),t.hasOwnProperty("breakpoints")&&(e.breakpoints=T({},n.breakpoints,t.breakpoints)),e}var He=function(){function n(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Y(this,n),this.events=t,this.hop=t.hasOwnProperty}return J(n,[{key:"on",value:function(e,i){if(mt(e))for(var r=0;r<e.length;r++)this.on(e[r],i);this.hop.call(this.events,e)||(this.events[e]=[]);var s=this.events[e].push(i)-1;return{remove:function(){delete this.events[e][s]}}}},{key:"emit",value:function(e,i){if(mt(e))for(var r=0;r<e.length;r++)this.emit(e[r],i);!this.hop.call(this.events,e)||this.events[e].forEach(function(s){s(i||{})})}}]),n}(),Me=function(){function n(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Y(this,n),this._c={},this._t=[],this._e=new He,this.disabled=!1,this.selector=t,this.settings=vt(ke,e),this.index=this.settings.startAt}return J(n,[{key:"mount",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this._e.emit("mount.before"),U(e)?this._c=Oe(this,e,this._e):k("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return mt(e)?this._t=e:k("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.settings=vt(this.settings,e),e.hasOwnProperty("startAt")&&(this.index=e.startAt),this._e.emit("update"),this}},{key:"go",value:function(e){return this._c.Run.make(e),this}},{key:"move",value:function(e){return this._c.Transition.disable(),this._c.Move.make(e),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return e&&(this.settings.autoplay=e),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(e,i){return this._e.on(e,i),this}},{key:"isType",value:function(e){return this.settings.type===e}},{key:"settings",get:function(){return this._o},set:function(e){U(e)?this._o=e:k("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(e){this._i=g(e)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(e){this._d=!!e}}]),n}();function Re(n,t,e){var i={mount:function(){this._o=!1},make:function(s){var o=this;n.disabled||(n.disable(),this.move=s,e.emit("run.before",this.move),this.calculate(),e.emit("run",this.move),t.Transition.after(function(){o.isStart()&&e.emit("run.start",o.move),o.isEnd()&&e.emit("run.end",o.move),(o.isOffset("<")||o.isOffset(">"))&&(o._o=!1,e.emit("run.offset",o.move)),e.emit("run.after",o.move),n.enable()}))},calculate:function(){var s=this.move,o=this.length,a=s.steps,l=s.direction,u=$e(g(a))&&g(a)!==0;switch(l){case">":a===">"?n.index=o:this.isEnd()?n.isType("slider")&&!n.settings.rewind||(this._o=!0,n.index=0):u?n.index+=Math.min(o-n.index,-g(a)):n.index++;break;case"<":a==="<"?n.index=0:this.isStart()?n.isType("slider")&&!n.settings.rewind||(this._o=!0,n.index=o):u?n.index-=Math.min(n.index,g(a)):n.index--;break;case"=":n.index=a;break;default:k("Invalid direction pattern ["+l+a+"] has been used");break}},isStart:function(){return n.index===0},isEnd:function(){return n.index===this.length},isOffset:function(s){return this._o&&this.move.direction===s}};return p(i,"move",{get:function(){return this._m},set:function(s){var o=s.substr(1);this._m={direction:s.substr(0,1),steps:o?g(o)?g(o):o:0}}}),p(i,"length",{get:function(){var s=n.settings,o=t.Html.slides.length;return n.isType("slider")&&s.focusAt!=="center"&&s.bound?o-1-(g(s.perView)-1)+g(s.focusAt):o-1}}),p(i,"offset",{get:function(){return this._o}}),i}function Ft(){return new Date().getTime()}function Z(n,t,e){var i=void 0,r=void 0,s=void 0,o=void 0,a=0;e||(e={});var l=function(){a=e.leading===!1?0:Ft(),i=null,o=n.apply(r,s),i||(r=s=null)},u=function(){var c=Ft();!a&&e.leading===!1&&(a=c);var d=t-(c-a);return r=this,s=arguments,d<=0||d>t?(i&&(clearTimeout(i),i=null),a=c,o=n.apply(r,s),i||(r=s=null)):!i&&e.trailing!==!1&&(i=setTimeout(l,d)),o};return u.cancel=function(){clearTimeout(i),a=0,i=r=s=null},u}var Q={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function Ee(n,t,e){var i={apply:function(s){for(var o=0,a=s.length;o<a;o++){var l=s[o].style,u=t.Direction.value;o!==0?l[Q[u][0]]=this.value/2+"px":l[Q[u][0]]="",o!==s.length-1?l[Q[u][1]]=this.value/2+"px":l[Q[u][1]]=""}},remove:function(s){for(var o=0,a=s.length;o<a;o++){var l=s[o].style;l.marginLeft="",l.marginRight=""}}};return p(i,"value",{get:function(){return g(n.settings.gap)}}),p(i,"grow",{get:function(){return i.value*(t.Sizes.length-1)}}),p(i,"reductor",{get:function(){var s=n.settings.perView;return i.value*(s-1)/s}}),e.on(["build.after","update"],Z(function(){i.apply(t.Html.wrapper.children)},30)),e.on("destroy",function(){i.remove(t.Html.wrapper.children)}),i}function Yt(n){if(n&&n.parentNode){for(var t=n.parentNode.firstChild,e=[];t;t=t.nextSibling)t.nodeType===1&&t!==n&&e.push(t);return e}return[]}function Jt(n){return!!(n&&n instanceof window.HTMLElement)}var Xt='[data-glide-el="track"]';function Le(n,t){var e={mount:function(){this.root=n.selector,this.track=this.root.querySelector(Xt),this.slides=Array.prototype.slice.call(this.wrapper.children).filter(function(r){return!r.classList.contains(n.settings.classes.cloneSlide)})}};return p(e,"root",{get:function(){return e._r},set:function(r){gt(r)&&(r=document.querySelector(r)),Jt(r)?e._r=r:k("Root element must be a existing Html node")}}),p(e,"track",{get:function(){return e._t},set:function(r){Jt(r)?e._t=r:k("Could not find track element. Please use "+Xt+" attribute.")}}),p(e,"wrapper",{get:function(){return e.track.children[0]}}),e}function ze(n,t,e){var i={mount:function(){this.value=n.settings.peek}};return p(i,"value",{get:function(){return i._v},set:function(s){U(s)?(s.before=g(s.before),s.after=g(s.after)):s=g(s),i._v=s}}),p(i,"reductor",{get:function(){var s=i.value,o=n.settings.perView;return U(s)?s.before/o+s.after/o:s*2/o}}),e.on(["resize","update"],function(){i.mount()}),i}function Ne(n,t,e){var i={mount:function(){this._o=0},make:function(){var s=this,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;this.offset=o,e.emit("move",{movement:this.value}),t.Transition.after(function(){e.emit("move.after",{movement:s.value})})}};return p(i,"offset",{get:function(){return i._o},set:function(s){i._o=Ct(s)?0:g(s)}}),p(i,"translate",{get:function(){return t.Sizes.slideWidth*n.index}}),p(i,"value",{get:function(){var s=this.offset,o=this.translate;return t.Direction.is("rtl")?o+s:o-s}}),e.on(["build.before","run"],function(){i.make()}),i}function Be(n,t,e){var i={setupSlides:function(){for(var s=this.slideWidth+"px",o=t.Html.slides,a=0;a<o.length;a++)o[a].style.width=s},setupWrapper:function(s){t.Html.wrapper.style.width=this.wrapperSize+"px"},remove:function(){for(var s=t.Html.slides,o=0;o<s.length;o++)s[o].style.width="";t.Html.wrapper.style.width=""}};return p(i,"length",{get:function(){return t.Html.slides.length}}),p(i,"width",{get:function(){return t.Html.root.offsetWidth}}),p(i,"wrapperSize",{get:function(){return i.slideWidth*i.length+t.Gaps.grow+t.Clones.grow}}),p(i,"slideWidth",{get:function(){return i.width/n.settings.perView-t.Peek.reductor-t.Gaps.reductor}}),e.on(["build.before","resize","update"],function(){i.setupSlides(),i.setupWrapper()}),e.on("destroy",function(){i.remove()}),i}function Ue(n,t,e){var i={mount:function(){e.emit("build.before"),this.typeClass(),this.activeClass(),e.emit("build.after")},typeClass:function(){t.Html.root.classList.add(n.settings.classes[n.settings.type])},activeClass:function(){var s=n.settings.classes,o=t.Html.slides[n.index];o&&(o.classList.add(s.activeSlide),Yt(o).forEach(function(a){a.classList.remove(s.activeSlide)}))},removeClasses:function(){var s=n.settings.classes;t.Html.root.classList.remove(s[n.settings.type]),t.Html.slides.forEach(function(o){o.classList.remove(s.activeSlide)})}};return e.on(["destroy","update"],function(){i.removeClasses()}),e.on(["resize","update"],function(){i.mount()}),e.on("move.after",function(){i.activeClass()}),i}function De(n,t,e){var i={mount:function(){this.items=[],n.isType("carousel")&&(this.items=this.collect())},collect:function(){for(var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],o=t.Html.slides,a=n.settings,l=a.perView,u=a.classes,h=+!!n.settings.peek,c=l+h,d=o.slice(0,c),f=o.slice(-c),y=0;y<Math.max(1,Math.floor(l/o.length));y++){for(var m=0;m<d.length;m++){var x=d[m].cloneNode(!0);x.classList.add(u.cloneSlide),s.push(x)}for(var v=0;v<f.length;v++){var q=f[v].cloneNode(!0);q.classList.add(u.cloneSlide),s.unshift(q)}}return s},append:function(){for(var s=this.items,o=t.Html,a=o.wrapper,l=o.slides,u=Math.floor(s.length/2),h=s.slice(0,u).reverse(),c=s.slice(u,s.length),d=t.Sizes.slideWidth+"px",f=0;f<c.length;f++)a.appendChild(c[f]);for(var y=0;y<h.length;y++)a.insertBefore(h[y],l[0]);for(var m=0;m<s.length;m++)s[m].style.width=d},remove:function(){for(var s=this.items,o=0;o<s.length;o++)t.Html.wrapper.removeChild(s[o])}};return p(i,"grow",{get:function(){return(t.Sizes.slideWidth+t.Gaps.value)*i.items.length}}),e.on("update",function(){i.remove(),i.mount(),i.append()}),e.on("build.before",function(){n.isType("carousel")&&i.append()}),e.on("destroy",function(){i.remove()}),i}var A=function(){function n(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Y(this,n),this.listeners=t}return J(n,[{key:"on",value:function(e,i,r){var s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;gt(e)&&(e=[e]);for(var o=0;o<e.length;o++)this.listeners[e[o]]=r,i.addEventListener(e[o],this.listeners[e[o]],s)}},{key:"off",value:function(e,i){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;gt(e)&&(e=[e]);for(var s=0;s<e.length;s++)i.removeEventListener(e[s],this.listeners[e[s]],r)}},{key:"destroy",value:function(){delete this.listeners}}]),n}();function Ie(n,t,e){var i=new A,r={mount:function(){this.bind()},bind:function(){i.on("resize",window,Z(function(){e.emit("resize")},n.settings.throttle))},unbind:function(){i.off("resize",window)}};return e.on("destroy",function(){r.unbind(),i.destroy()}),r}var Ve=["ltr","rtl"],We={">":"<","<":">","=":"="};function qe(n,t,e){var i={mount:function(){this.value=n.settings.direction},resolve:function(s){var o=s.slice(0,1);return this.is("rtl")?s.split(o).join(We[o]):s},is:function(s){return this.value===s},addClass:function(){t.Html.root.classList.add(n.settings.classes.direction[this.value])},removeClass:function(){t.Html.root.classList.remove(n.settings.classes.direction[this.value])}};return p(i,"value",{get:function(){return i._v},set:function(s){Ve.indexOf(s)>-1?i._v=s:k("Direction value must be `ltr` or `rtl`")}}),e.on(["destroy","update"],function(){i.removeClass()}),e.on("update",function(){i.mount()}),e.on(["build.before","update"],function(){i.addClass()}),i}function Ke(n,t){return{modify:function(i){return t.Direction.is("rtl")?-i:i}}}function Ce(n,t){return{modify:function(i){return i+t.Gaps.value*n.index}}}function Fe(n,t){return{modify:function(i){return i+t.Clones.grow/2}}}function Ye(n,t){return{modify:function(i){if(n.settings.focusAt>=0){var r=t.Peek.value;return U(r)?i-r.before:i-r}return i}}}function Je(n,t){return{modify:function(i){var r=t.Gaps.value,s=t.Sizes.width,o=n.settings.focusAt,a=t.Sizes.slideWidth;return o==="center"?i-(s/2-a/2):i-a*o-r*o}}}function Xe(n,t,e){var i=[Ce,Fe,Ye,Je].concat(n._t,[Ke]);return{mutate:function(s){for(var o=0;o<i.length;o++){var a=i[o];X(a)&&X(a().modify)?s=a(n,t,e).modify(s):k("Transformer should be a function that returns an object with `modify()` method")}return s}}}function Ze(n,t,e){var i={set:function(s){var o=Xe(n,t).mutate(s);t.Html.wrapper.style.transform="translate3d("+-1*o+"px, 0px, 0px)"},remove:function(){t.Html.wrapper.style.transform=""}};return e.on("move",function(r){var s=t.Gaps.value,o=t.Sizes.length,a=t.Sizes.slideWidth;return n.isType("carousel")&&t.Run.isOffset("<")?(t.Transition.after(function(){e.emit("translate.jump"),i.set(a*(o-1))}),i.set(-a-s*o)):n.isType("carousel")&&t.Run.isOffset(">")?(t.Transition.after(function(){e.emit("translate.jump"),i.set(0)}),i.set(a*o+s*o)):i.set(r.movement)}),e.on("destroy",function(){i.remove()}),i}function Qe(n,t,e){var i=!1,r={compose:function(o){var a=n.settings;return i?o+" 0ms "+a.animationTimingFunc:o+" "+this.duration+"ms "+a.animationTimingFunc},set:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";t.Html.wrapper.style.transition=this.compose(o)},remove:function(){t.Html.wrapper.style.transition=""},after:function(o){setTimeout(function(){o()},this.duration)},enable:function(){i=!1,this.set()},disable:function(){i=!0,this.set()}};return p(r,"duration",{get:function(){var o=n.settings;return n.isType("slider")&&t.Run.offset?o.rewindDuration:o.animationDuration}}),e.on("move",function(){r.set()}),e.on(["build.before","resize","translate.jump"],function(){r.disable()}),e.on("run",function(){r.enable()}),e.on("destroy",function(){r.remove()}),r}var Zt=!1;try{bt=Object.defineProperty({},"passive",{get:function(){Zt=!0}}),window.addEventListener("testPassive",null,bt),window.removeEventListener("testPassive",null,bt)}catch(n){}var bt,Qt=Zt,G=["touchstart","mousedown"],Gt=["touchmove","mousemove"],te=["touchend","touchcancel","mouseup","mouseleave"],ee=["mousedown","mousemove","mouseup","mouseleave"];function Ge(n,t,e){var i=new A,r=0,s=0,o=0,a=!1,l=Qt?{passive:!0}:!1,u={mount:function(){this.bindSwipeStart()},start:function(c){if(!a&&!n.disabled){this.disable();var d=this.touches(c);r=null,s=g(d.pageX),o=g(d.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),e.emit("swipe.start")}},move:function(c){if(!n.disabled){var d=n.settings,f=d.touchAngle,y=d.touchRatio,m=d.classes,x=this.touches(c),v=g(x.pageX)-s,q=g(x.pageY)-o,ae=Math.abs(v<<2),yt=Math.abs(q<<2),le=Math.sqrt(ae+yt),ue=Math.sqrt(yt);if(r=Math.asin(ue/le),r*180/Math.PI<f)c.stopPropagation(),t.Move.make(v*Ae(y)),t.Html.root.classList.add(m.dragging),e.emit("swipe.move");else return!1}},end:function(c){if(!n.disabled){var d=n.settings,f=this.touches(c),y=this.threshold(c),m=f.pageX-s,x=r*180/Math.PI,v=Math.round(m/t.Sizes.slideWidth);this.enable(),m>y&&x<d.touchAngle?(d.perTouch&&(v=Math.min(v,g(d.perTouch))),t.Direction.is("rtl")&&(v=-v),t.Run.make(t.Direction.resolve("<"+v))):m<-y&&x<d.touchAngle?(d.perTouch&&(v=Math.max(v,-g(d.perTouch))),t.Direction.is("rtl")&&(v=-v),t.Run.make(t.Direction.resolve(">"+v))):t.Move.make(),t.Html.root.classList.remove(d.classes.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),e.emit("swipe.end")}},bindSwipeStart:function(){var c=this,d=n.settings;d.swipeThreshold&&i.on(G[0],t.Html.wrapper,function(f){c.start(f)},l),d.dragThreshold&&i.on(G[1],t.Html.wrapper,function(f){c.start(f)},l)},unbindSwipeStart:function(){i.off(G[0],t.Html.wrapper,l),i.off(G[1],t.Html.wrapper,l)},bindSwipeMove:function(){var c=this;i.on(Gt,t.Html.wrapper,Z(function(d){c.move(d)},n.settings.throttle),l)},unbindSwipeMove:function(){i.off(Gt,t.Html.wrapper,l)},bindSwipeEnd:function(){var c=this;i.on(te,t.Html.wrapper,function(d){c.end(d)})},unbindSwipeEnd:function(){i.off(te,t.Html.wrapper)},touches:function(c){return ee.indexOf(c.type)>-1?c:c.touches[0]||c.changedTouches[0]},threshold:function(c){var d=n.settings;return ee.indexOf(c.type)>-1?d.dragThreshold:d.swipeThreshold},enable:function(){return a=!1,t.Transition.enable(),this},disable:function(){return a=!0,t.Transition.disable(),this}};return e.on("build.after",function(){t.Html.root.classList.add(n.settings.classes.swipeable)}),e.on("destroy",function(){u.unbindSwipeStart(),u.unbindSwipeMove(),u.unbindSwipeEnd(),i.destroy()}),u}function ti(n,t,e){var i=new A,r={mount:function(){this.bind()},bind:function(){i.on("dragstart",t.Html.wrapper,this.dragstart)},unbind:function(){i.off("dragstart",t.Html.wrapper)},dragstart:function(o){o.preventDefault()}};return e.on("destroy",function(){r.unbind(),i.destroy()}),r}function ei(n,t,e){var i=new A,r=!1,s=!1,o={mount:function(){this._a=t.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){i.on("click",t.Html.wrapper,this.click)},unbind:function(){i.off("click",t.Html.wrapper)},click:function(l){s&&(l.stopPropagation(),l.preventDefault())},detach:function(){if(s=!0,!r){for(var l=0;l<this.items.length;l++)this.items[l].draggable=!1,this.items[l].setAttribute("data-href",this.items[l].getAttribute("href")),this.items[l].removeAttribute("href");r=!0}return this},attach:function(){if(s=!1,r){for(var l=0;l<this.items.length;l++)this.items[l].draggable=!0,this.items[l].setAttribute("href",this.items[l].getAttribute("data-href"));r=!1}return this}};return p(o,"items",{get:function(){return o._a}}),e.on("swipe.move",function(){o.detach()}),e.on("swipe.end",function(){t.Transition.after(function(){o.attach()})}),e.on("destroy",function(){o.attach(),o.unbind(),i.destroy()}),o}var ii='[data-glide-el="controls[nav]"]',ni='[data-glide-el^="controls"]';function ri(n,t,e){var i=new A,r=Qt?{passive:!0}:!1,s={mount:function(){this._n=t.Html.root.querySelectorAll(ii),this._c=t.Html.root.querySelectorAll(ni),this.addBindings()},setActive:function(){for(var a=0;a<this._n.length;a++)this.addClass(this._n[a].children)},removeActive:function(){for(var a=0;a<this._n.length;a++)this.removeClass(this._n[a].children)},addClass:function(a){var l=n.settings,u=a[n.index];u&&(u.classList.add(l.classes.activeNav),Yt(u).forEach(function(h){h.classList.remove(l.classes.activeNav)}))},removeClass:function(a){var l=a[n.index];l&&l.classList.remove(n.settings.classes.activeNav)},addBindings:function(){for(var a=0;a<this._c.length;a++)this.bind(this._c[a].children)},removeBindings:function(){for(var a=0;a<this._c.length;a++)this.unbind(this._c[a].children)},bind:function(a){for(var l=0;l<a.length;l++)i.on("click",a[l],this.click),i.on("touchstart",a[l],this.click,r)},unbind:function(a){for(var l=0;l<a.length;l++)i.off(["click","touchstart"],a[l])},click:function(a){a.preventDefault(),t.Run.make(t.Direction.resolve(a.currentTarget.getAttribute("data-glide-dir")))}};return p(s,"items",{get:function(){return s._c}}),e.on(["mount.after","move.after"],function(){s.setActive()}),e.on("destroy",function(){s.removeBindings(),s.removeActive(),i.destroy()}),s}function si(n,t,e){var i=new A,r={mount:function(){n.settings.keyboard&&this.bind()},bind:function(){i.on("keyup",document,this.press)},unbind:function(){i.off("keyup",document)},press:function(o){o.keyCode===39&&t.Run.make(t.Direction.resolve(">")),o.keyCode===37&&t.Run.make(t.Direction.resolve("<"))}};return e.on(["destroy","update"],function(){r.unbind()}),e.on("update",function(){r.mount()}),e.on("destroy",function(){i.destroy()}),r}function oi(n,t,e){var i=new A,r={mount:function(){this.start(),n.settings.hoverpause&&this.bind()},start:function(){var o=this;n.settings.autoplay&&Ct(this._i)&&(this._i=setInterval(function(){o.stop(),t.Run.make(">"),o.start()},this.time))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var o=this;i.on("mouseover",t.Html.root,function(){o.stop()}),i.on("mouseout",t.Html.root,function(){o.start()})},unbind:function(){i.off(["mouseover","mouseout"],t.Html.root)}};return p(r,"time",{get:function(){var o=t.Html.slides[n.index].getAttribute("data-glide-autoplay");return g(o||n.settings.autoplay)}}),e.on(["destroy","update"],function(){r.unbind()}),e.on(["run.before","pause","destroy","swipe.start","update"],function(){r.stop()}),e.on(["run.after","play","swipe.end"],function(){r.start()}),e.on("update",function(){r.mount()}),e.on("destroy",function(){i.destroy()}),r}function ie(n){return U(n)?je(n):(k("Breakpoints option must be an object"),{})}function ai(n,t,e){var i=new A,r=n.settings,s=ie(r.breakpoints),o=T({},r),a={match:function(u){if(typeof window.matchMedia!="undefined"){for(var h in u)if(u.hasOwnProperty(h)&&window.matchMedia("(max-width: "+h+"px)").matches)return u[h]}return o}};return T(r,a.match(s)),i.on("resize",window,Z(function(){n.settings=vt(r,a.match(s))},n.settings.throttle)),e.on("update",function(){s=ie(s),o=T({},r)}),e.on("destroy",function(){i.off("resize",window)}),a}var li={Html:Le,Translate:Ze,Transition:Qe,Direction:qe,Peek:ze,Sizes:Be,Gaps:Ee,Move:Ne,Clones:De,Resize:Ie,Build:Ue,Run:Re,Swipe:Ge,Images:ti,Anchors:ei,Controls:ri,Keyboard:si,Autoplay:oi,Breakpoints:ai},ui=function(n){Pe(t,n);function t(){return Y(this,t),Te(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return J(t,[{key:"mount",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Se(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"mount",this).call(this,T({},li,i))}}]),t}(Me),tt=ui;var et=j`
  .glide {
    position: relative;
    width: 100%;
    box-sizing: border-box;
  }
  .glide * {
    box-sizing: inherit;
  }
  .glide__track {
    overflow: hidden;
  }
  .glide__slides {
    position: relative;
    width: 100%;
    list-style: none;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    touch-action: pan-Y;
    overflow: hidden;
    padding: 0;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
    will-change: transform;
  }
  .glide__slides--dragging {
    user-select: none;
  }
  .glide__slide {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    white-space: normal;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
  }
  .glide__slide a {
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
  .glide__arrows {
    -webkit-touch-callout: none;
    user-select: none;
  }
  .glide__bullets {
    -webkit-touch-callout: none;
    user-select: none;
  }
  .glide--rtl {
    direction: rtl;
  }

  .glide__arrow {
    position: absolute;
    display: block;
    top: 50%;
    z-index: 2;
    color: white;
    text-transform: uppercase;
    padding: 9px 12px;
    background-color: transparent;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);
    text-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.1);
    opacity: 1;
    cursor: pointer;
    transition: opacity 150ms ease, border 300ms ease-in-out;
    transform: translateY(-50%);
    line-height: 1;
  }
  .glide__arrow:focus {
    outline: none;
  }
  .glide__arrow:hover {
    border-color: white;
  }
  .glide__arrow--left {
    left: 2em;
  }
  .glide__arrow--right {
    right: 2em;
  }
  .glide__arrow--disabled {
    opacity: 0.33;
  }

  .glide__bullets {
    position: absolute;
    z-index: 2;
    bottom: 2em;
    left: 50%;
    display: inline-flex;
    list-style: none;
    transform: translateX(-50%);
  }

  .glide__bullet {
    background-color: rgba(255, 255, 255, 0.5);
    width: 9px;
    height: 9px;
    padding: 0;
    border-radius: 50%;
    border: 2px solid transparent;
    transition: all 300ms ease-in-out;
    cursor: pointer;
    line-height: 0;
    box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);
    margin: 0 0.25em;
  }
  .glide__bullet:focus {
    outline: none;
  }
  .glide__bullet:hover,
  .glide__bullet:focus {
    border: 2px solid white;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .glide__bullet--active {
    background-color: white;
  }

  .glide--swipeable {
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
  }

  .glide--dragging {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }
`;var ci=Object.defineProperty,di=Object.getOwnPropertyDescriptor,ne=(n,t,e,i)=>{for(var r=i>1?void 0:i?di(t,e):t,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&ci(t,e,r),r},it=class extends _{constructor(){super(...arguments);this.sources=["dist/img/jumbotron/1.jpg","dist/img/jumbotron/2.jpg","dist/img/jumbotron/3.jpg","dist/img/jumbotron/4.jpg","dist/img/jumbotron/5.jpg","dist/img/jumbotron/6.jpg"]}firstUpdated(){new tt(this._mantab,{type:"carousel",autoplay:3e3,gap:0}).mount()}render(){return w`
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            ${this.sources.map(n=>w`<li class="glide__slide"><img src="${n}" /></li>`)}
          </ul>
          <div class="glide__bullets" data-glide-el="controls[nav]">
            ${this.sources.map((n,t)=>w`<button
                  class="glide__bullet"
                  data-glide-dir="=${t}"
                ></button>`)}
          </div>
        </div>
      </div>
    `}};it.styles=[et,j`
      .glide__slides {
        margin: 0px;
        transform: translate3d(0, 0, 0) !important;
      }

      .glide__slide {
        position: absolute;
        top: 0;
        left: 0;
        order: 2;
        opacity: 0;
        transition: opacity 250ms ease-in-out;
      }

      .glide__slide.glide__slide--active {
        position: relative;
        order: 1;
        opacity: 1;
        z-index: 1;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        width: 100%;
        height: 300px;
        object-fit: cover;
      }
      @media (min-width: 640px) {
        img {
          height: 400px;
        }
      }
      @media (min-width: 768px) {
        img {
          height: 400px;
        }
      }
      @media (min-width: 1024px) {
        img {
          height: 600px;
        }
      }
      @media (min-width: 1280px) {
        img {
          height: 600px;
        }
      }
      @media (min-width: 1536px) {
        img {
          height: 600px;
        }
      }
    `];ne([N(".glide")],it.prototype,"_mantab",2);it=ne([P("my-carousel")],it);var hi=Object.defineProperty,fi=Object.getOwnPropertyDescriptor,pi=(n,t,e,i)=>{for(var r=i>1?void 0:i?fi(t,e):t,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&hi(t,e,r),r},re=class extends _{render(){return w`<footer class="grid">
      <div class="col-span-full bg-blue-900 text-gray-200 pt-16 sm:pt-48">
        <div class="w-10/12 m-auto">
          <div class="pb-20 grid grid-cols-6 sm:grid-cols-12">
            <div class="col-span-6">
              <h3 class="text-lg">PT. Langgeng Prayadena Amini</h3>
              <p class="text-sm">
                Kami siap melayani dimanapun lokasi anda. Khusus
                wilayah Malang kami akan langsung datang!
              </p>
            </div>
            <div class="col-span-6 flex items-center justify-center my-8">
              <div
                class="w-full flex items-center justify-items-center m-auto sm:float-right"
              >
                <img class="block w-full" src="/dist/img/lpaw.svg" alt="LPA" />
              </div>
            </div>
            <div class="col-span-full border-white border-b-[1px] mt-10"></div>
            <div class="col-span-full border-white border-b-[1px]">
              <div class="grid grid-cols-4 sm:grid-cols-12 col-span-full my-10">
                <div
                  class="col-span-4 flex flex-col items-center justify-center p-2"
                >
                  <a
                    href="tel:0341805738"
                    class="text-lg font-extrabold underline"
                    >(0341)805738</a
                  >
                  <a
                    href="tel:628123393111"
                    class="text-lg font-extrabold underline"
                    >(+62)8123393111</a
                  >
                  <p class="text-center my-4">
                    Kami melayani untuk seluruh wilayah Jawa.
                  </p>
                  <a
                    href="#"
                    class="bg-blue-600 my-4 py-2 mx-2 px-10 rounded text-white font-bold cursor-pointer"
                    >GRATIS ESTIMASI</a
                  >
                </div>
                <div
                  class="col-span-4 flex flex-col items-center justify-center my-4"
                >
                  <div
                    class="w-48 flex items-center justify-items-center flex-initial"
                  >
                    <img
                      class="block w-full"
                      src="/dist/img/lpaw.svg"
                      alt="LPA"
                    />
                  </div>
                  <p class="text-center">
                    Layanan Pintu dan Jendela uPVC terbaik.
                  </p>
                </div>
                <div
                  class="col-span-4 flex flex-col items-center p-2 text-center"
                >
                  <h4 class="font-extrabold text-lg">Servis & Jasa</h4>
                  <p class="my-4">Kreativitas tanpa batas.</p>
                  <a class="font-bold">Manufatur</a>
                  <a class="font-bold">Desain</a>
                  <a class="font-bold">Pemasangan</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>`}createRenderRoot(){return this}};re=pi([P("my-footer")],re);var se=[{src:"dist/img/services/1.jpg",title:"Manufaktur",description:"Satu jendela tidak seperti jendela lainnya. Ada kecocokan secara visual dengan arsitektur bangunan adalah kepuasan tersendiri. Kami melayani produk pintu dan jendela kustom sesuai kebutuhan anda.",link:"#"},{src:"dist/img/services/2.jpg",title:"Desain",description:"Baik Anda sedang membangun rumah baru atau merenovasi bangunan yang sudah ada - PT. LPA memiliki sistem jendela dan pintu yang sempurna untuk hunian Anda.",link:"#"},{src:"dist/img/services/3.jpg",title:"Pemasangan",description:"Spesialis kami mengetahui keluhan Anda dan kami punya solusinya! Teknisi PT. LPA mendukung Anda dengan cepat dan profesional, serta membantu Anda memilih dan menyetel produk yang pas. Teknisi yang terlatih secara khusus membantu Anda dengan penginstalan di rumah Anda.",link:"#"},{src:"dist/img/services/4.jpg",title:"Showroom",description:"Setiap orang mempunyai preferensi yang berbeda. Silahkan mengunjungi Showroom dan Workshop, Kami siap menjelaskan produk dan jasa kami dengan detail.",link:"#"}];var gi=Object.defineProperty,mi=Object.getOwnPropertyDescriptor,oe=(n,t,e,i)=>{for(var r=i>1?void 0:i?mi(t,e):t,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&gi(t,e,r),r},nt=class extends _{constructor(){super(...arguments);this.dataku=se}firstUpdated(){new tt(this._mantab,{type:"carousel",perView:this.dataku.length,breakpoints:{768:{perView:1}}}).mount()}render(){return w`
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            ${this.dataku.map(n=>w` <li class="glide__slide">
                <div class="card">
                  <img src="${n.src}" alt="Avatar" />
                  <div class="container">
                    <h4>
                      <b><strong>${n.title}</strong></b>
                    </h4>
                    <p>${n.description}</p>
                  </div>
                </div>
              </li>`)}
          </ul>
          <div class="glide__bullets" data-glide-el="controls[nav]">
            ${this.dataku.map((n,t)=>w`<button
                  class="glide__bullet"
                  data-glide-dir="=${t}"
                ></button>`)}
          </div>
        </div>
      </div>
    `}};nt.styles=[et,j`
      .card {
        width: 100%; /* half-width */
        height: 100%;
        padding: 10px 20px;
        margin-bottom: 10px;
      }

      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }

      .container {
        margin: auto;
        text-align: center;
      }
      img {
        object-fit: cover;
        width: 100%;
        box-shadow: 5px 5px  5px grey;
      }

      h4 {
        font-size: x-large;
        margin: 0;
      }
      .glide__bullets{
        bottom: 0.75em;
      }
    `];oe([N(".glide")],nt.prototype,"_mantab",2);nt=oe([P("my-services")],nt);
/*!
 * Glide.js v3.4.1
 * (c) 2013-2019 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
 * Released under the MIT License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//# sourceMappingURL=index.js.map
