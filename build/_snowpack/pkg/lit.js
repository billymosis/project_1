/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, e = Symbol();
class s {
  constructor(t2, s2) {
    if (s2 !== e)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2;
  }
  get styleSheet() {
    return t && this.t === void 0 && (this.t = new CSSStyleSheet(), this.t.replaceSync(this.cssText)), this.t;
  }
  toString() {
    return this.cssText;
  }
}
const n = new Map(), o = (t2) => {
  let o2 = n.get(t2);
  return o2 === void 0 && n.set(t2, o2 = new s(t2, e)), o2;
}, r = (t2) => o(typeof t2 == "string" ? t2 : t2 + ""), i = (t2, ...e2) => {
  const n2 = t2.length === 1 ? t2[0] : e2.reduce((e3, n3, o2) => e3 + ((t3) => {
    if (t3 instanceof s)
      return t3.cssText;
    if (typeof t3 == "number")
      return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n3) + t2[o2 + 1], t2[0]);
  return o(n2);
}, S = (e2, s2) => {
  t ? e2.adoptedStyleSheets = s2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet) : s2.forEach((t2) => {
    const s3 = document.createElement("style");
    s3.textContent = t2.cssText, e2.appendChild(s3);
  });
}, u = t ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const s2 of t3.cssRules)
    e2 += s2.cssText;
  return r(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s$1, e$1, h, r$1;
const o$1 = {toAttribute(t2, i2) {
  switch (i2) {
    case Boolean:
      t2 = t2 ? "" : null;
      break;
    case Object:
    case Array:
      t2 = t2 == null ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, i2) {
  let s2 = t2;
  switch (i2) {
    case Boolean:
      s2 = t2 !== null;
      break;
    case Number:
      s2 = t2 === null ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        s2 = JSON.parse(t2);
      } catch (t3) {
        s2 = null;
      }
  }
  return s2;
}}, n$1 = (t2, i2) => i2 !== t2 && (i2 == i2 || t2 == t2), l = {attribute: true, type: String, converter: o$1, reflect: false, hasChanged: n$1};
class a extends HTMLElement {
  constructor() {
    super(), this.Πi = new Map(), this.Πo = void 0, this.Πl = void 0, this.isUpdatePending = false, this.hasUpdated = false, this.Πh = null, this.u();
  }
  static addInitializer(t2) {
    var i2;
    (i2 = this.v) !== null && i2 !== void 0 || (this.v = []), this.v.push(t2);
  }
  static get observedAttributes() {
    this.finalize();
    const t2 = [];
    return this.elementProperties.forEach((i2, s2) => {
      const e2 = this.Πp(s2, i2);
      e2 !== void 0 && (this.Πm.set(e2, s2), t2.push(e2));
    }), t2;
  }
  static createProperty(t2, i2 = l) {
    if (i2.state && (i2.attribute = false), this.finalize(), this.elementProperties.set(t2, i2), !i2.noAccessor && !this.prototype.hasOwnProperty(t2)) {
      const s2 = typeof t2 == "symbol" ? Symbol() : "__" + t2, e2 = this.getPropertyDescriptor(t2, s2, i2);
      e2 !== void 0 && Object.defineProperty(this.prototype, t2, e2);
    }
  }
  static getPropertyDescriptor(t2, i2, s2) {
    return {get() {
      return this[i2];
    }, set(e2) {
      const h2 = this[t2];
      this[i2] = e2, this.requestUpdate(t2, h2, s2);
    }, configurable: true, enumerable: true};
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) || l;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return false;
    this.finalized = true;
    const t2 = Object.getPrototypeOf(this);
    if (t2.finalize(), this.elementProperties = new Map(t2.elementProperties), this.Πm = new Map(), this.hasOwnProperty("properties")) {
      const t3 = this.properties, i2 = [...Object.getOwnPropertyNames(t3), ...Object.getOwnPropertySymbols(t3)];
      for (const s2 of i2)
        this.createProperty(s2, t3[s2]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i2) {
    const s2 = [];
    if (Array.isArray(i2)) {
      const e2 = new Set(i2.flat(1 / 0).reverse());
      for (const i3 of e2)
        s2.unshift(u(i3));
    } else
      i2 !== void 0 && s2.push(u(i2));
    return s2;
  }
  static Πp(t2, i2) {
    const s2 = i2.attribute;
    return s2 === false ? void 0 : typeof s2 == "string" ? s2 : typeof t2 == "string" ? t2.toLowerCase() : void 0;
  }
  u() {
    var t2;
    this.Πg = new Promise((t3) => this.enableUpdating = t3), this.L = new Map(), this.Π_(), this.requestUpdate(), (t2 = this.constructor.v) === null || t2 === void 0 || t2.forEach((t3) => t3(this));
  }
  addController(t2) {
    var i2, s2;
    ((i2 = this.ΠU) !== null && i2 !== void 0 ? i2 : this.ΠU = []).push(t2), this.renderRoot !== void 0 && this.isConnected && ((s2 = t2.hostConnected) === null || s2 === void 0 || s2.call(t2));
  }
  removeController(t2) {
    var i2;
    (i2 = this.ΠU) === null || i2 === void 0 || i2.splice(this.ΠU.indexOf(t2) >>> 0, 1);
  }
  Π_() {
    this.constructor.elementProperties.forEach((t2, i2) => {
      this.hasOwnProperty(i2) && (this.Πi.set(i2, this[i2]), delete this[i2]);
    });
  }
  createRenderRoot() {
    var t2;
    const s2 = (t2 = this.shadowRoot) !== null && t2 !== void 0 ? t2 : this.attachShadow(this.constructor.shadowRootOptions);
    return S(s2, this.constructor.elementStyles), s2;
  }
  connectedCallback() {
    var t2;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t2 = this.ΠU) === null || t2 === void 0 || t2.forEach((t3) => {
      var i2;
      return (i2 = t3.hostConnected) === null || i2 === void 0 ? void 0 : i2.call(t3);
    }), this.Πl && (this.Πl(), this.Πo = this.Πl = void 0);
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var t2;
    (t2 = this.ΠU) === null || t2 === void 0 || t2.forEach((t3) => {
      var i2;
      return (i2 = t3.hostDisconnected) === null || i2 === void 0 ? void 0 : i2.call(t3);
    }), this.Πo = new Promise((t3) => this.Πl = t3);
  }
  attributeChangedCallback(t2, i2, s2) {
    this.K(t2, s2);
  }
  Πj(t2, i2, s2 = l) {
    var e2, h2;
    const r2 = this.constructor.Πp(t2, s2);
    if (r2 !== void 0 && s2.reflect === true) {
      const n2 = ((h2 = (e2 = s2.converter) === null || e2 === void 0 ? void 0 : e2.toAttribute) !== null && h2 !== void 0 ? h2 : o$1.toAttribute)(i2, s2.type);
      this.Πh = t2, n2 == null ? this.removeAttribute(r2) : this.setAttribute(r2, n2), this.Πh = null;
    }
  }
  K(t2, i2) {
    var s2, e2, h2;
    const r2 = this.constructor, n2 = r2.Πm.get(t2);
    if (n2 !== void 0 && this.Πh !== n2) {
      const t3 = r2.getPropertyOptions(n2), l2 = t3.converter, a2 = (h2 = (e2 = (s2 = l2) === null || s2 === void 0 ? void 0 : s2.fromAttribute) !== null && e2 !== void 0 ? e2 : typeof l2 == "function" ? l2 : null) !== null && h2 !== void 0 ? h2 : o$1.fromAttribute;
      this.Πh = n2, this[n2] = a2(i2, t3.type), this.Πh = null;
    }
  }
  requestUpdate(t2, i2, s2) {
    let e2 = true;
    t2 !== void 0 && (((s2 = s2 || this.constructor.getPropertyOptions(t2)).hasChanged || n$1)(this[t2], i2) ? (this.L.has(t2) || this.L.set(t2, i2), s2.reflect === true && this.Πh !== t2 && (this.Πk === void 0 && (this.Πk = new Map()), this.Πk.set(t2, s2))) : e2 = false), !this.isUpdatePending && e2 && (this.Πg = this.Πq());
  }
  async Πq() {
    this.isUpdatePending = true;
    try {
      for (await this.Πg; this.Πo; )
        await this.Πo;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.performUpdate();
    return t2 != null && await t2, !this.isUpdatePending;
  }
  performUpdate() {
    var t2;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this.Πi && (this.Πi.forEach((t3, i3) => this[i3] = t3), this.Πi = void 0);
    let i2 = false;
    const s2 = this.L;
    try {
      i2 = this.shouldUpdate(s2), i2 ? (this.willUpdate(s2), (t2 = this.ΠU) === null || t2 === void 0 || t2.forEach((t3) => {
        var i3;
        return (i3 = t3.hostUpdate) === null || i3 === void 0 ? void 0 : i3.call(t3);
      }), this.update(s2)) : this.Π$();
    } catch (t3) {
      throw i2 = false, this.Π$(), t3;
    }
    i2 && this.E(s2);
  }
  willUpdate(t2) {
  }
  E(t2) {
    var i2;
    (i2 = this.ΠU) === null || i2 === void 0 || i2.forEach((t3) => {
      var i3;
      return (i3 = t3.hostUpdated) === null || i3 === void 0 ? void 0 : i3.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  Π$() {
    this.L = new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this.Πg;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this.Πk !== void 0 && (this.Πk.forEach((t3, i2) => this.Πj(i2, this[i2], t3)), this.Πk = void 0), this.Π$();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
}
a.finalized = true, a.elementProperties = new Map(), a.elementStyles = [], a.shadowRootOptions = {mode: "open"}, (e$1 = (s$1 = globalThis).reactiveElementPlatformSupport) === null || e$1 === void 0 || e$1.call(s$1, {ReactiveElement: a}), ((h = (r$1 = globalThis).reactiveElementVersions) !== null && h !== void 0 ? h : r$1.reactiveElementVersions = []).push("1.0.0-rc.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1, i$1, s$2, e$2;
const o$2 = globalThis.trustedTypes, l$1 = o$2 ? o$2.createPolicy("lit-html", {createHTML: (t2) => t2}) : void 0, n$2 = `lit$${(Math.random() + "").slice(9)}$`, h$1 = "?" + n$2, r$2 = `<${h$1}>`, u$1 = document, c = (t2 = "") => u$1.createComment(t2), d = (t2) => t2 === null || typeof t2 != "object" && typeof t2 != "function", v = Array.isArray, a$1 = (t2) => {
  var i2;
  return v(t2) || typeof ((i2 = t2) === null || i2 === void 0 ? void 0 : i2[Symbol.iterator]) == "function";
}, f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _ = /-->/g, m = />/g, p = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g, $ = /'/g, g = /"/g, y = /^(?:script|style|textarea)$/i, b = (t2) => (i2, ...s2) => ({_$litType$: t2, strings: i2, values: s2}), T = b(1), x = b(2), w = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), P = new WeakMap(), V = (t2, i2, s2) => {
  var e2, o2;
  const l2 = (e2 = s2 == null ? void 0 : s2.renderBefore) !== null && e2 !== void 0 ? e2 : i2;
  let n2 = l2._$litPart$;
  if (n2 === void 0) {
    const t3 = (o2 = s2 == null ? void 0 : s2.renderBefore) !== null && o2 !== void 0 ? o2 : null;
    l2._$litPart$ = n2 = new C(i2.insertBefore(c(), t3), t3, void 0, s2);
  }
  return n2.I(t2), n2;
}, E = u$1.createTreeWalker(u$1, 129, null, false), M = (t2, i2) => {
  const s2 = t2.length - 1, e2 = [];
  let o2, h2 = i2 === 2 ? "<svg>" : "", u2 = f;
  for (let i3 = 0; i3 < s2; i3++) {
    const s3 = t2[i3];
    let l2, c3, d2 = -1, v2 = 0;
    for (; v2 < s3.length && (u2.lastIndex = v2, c3 = u2.exec(s3), c3 !== null); )
      v2 = u2.lastIndex, u2 === f ? c3[1] === "!--" ? u2 = _ : c3[1] !== void 0 ? u2 = m : c3[2] !== void 0 ? (y.test(c3[2]) && (o2 = RegExp("</" + c3[2], "g")), u2 = p) : c3[3] !== void 0 && (u2 = p) : u2 === p ? c3[0] === ">" ? (u2 = o2 != null ? o2 : f, d2 = -1) : c3[1] === void 0 ? d2 = -2 : (d2 = u2.lastIndex - c3[2].length, l2 = c3[1], u2 = c3[3] === void 0 ? p : c3[3] === '"' ? g : $) : u2 === g || u2 === $ ? u2 = p : u2 === _ || u2 === m ? u2 = f : (u2 = p, o2 = void 0);
    const a2 = u2 === p && t2[i3 + 1].startsWith("/>") ? " " : "";
    h2 += u2 === f ? s3 + r$2 : d2 >= 0 ? (e2.push(l2), s3.slice(0, d2) + "$lit$" + s3.slice(d2) + n$2 + a2) : s3 + n$2 + (d2 === -2 ? (e2.push(void 0), i3) : a2);
  }
  const c2 = h2 + (t2[s2] || "<?>") + (i2 === 2 ? "</svg>" : "");
  return [l$1 !== void 0 ? l$1.createHTML(c2) : c2, e2];
};
class N {
  constructor({strings: t2, _$litType$: i2}, s2) {
    let e2;
    this.parts = [];
    let l2 = 0, r2 = 0;
    const u2 = t2.length - 1, d2 = this.parts, [v2, a2] = M(t2, i2);
    if (this.el = N.createElement(v2, s2), E.currentNode = this.el.content, i2 === 2) {
      const t3 = this.el.content, i3 = t3.firstChild;
      i3.remove(), t3.append(...i3.childNodes);
    }
    for (; (e2 = E.nextNode()) !== null && d2.length < u2; ) {
      if (e2.nodeType === 1) {
        if (e2.hasAttributes()) {
          const t3 = [];
          for (const i3 of e2.getAttributeNames())
            if (i3.endsWith("$lit$") || i3.startsWith(n$2)) {
              const s3 = a2[r2++];
              if (t3.push(i3), s3 !== void 0) {
                const t4 = e2.getAttribute(s3.toLowerCase() + "$lit$").split(n$2), i4 = /([.?@])?(.*)/.exec(s3);
                d2.push({type: 1, index: l2, name: i4[2], strings: t4, ctor: i4[1] === "." ? I : i4[1] === "?" ? L : i4[1] === "@" ? R : H});
              } else
                d2.push({type: 6, index: l2});
            }
          for (const i3 of t3)
            e2.removeAttribute(i3);
        }
        if (y.test(e2.tagName)) {
          const t3 = e2.textContent.split(n$2), i3 = t3.length - 1;
          if (i3 > 0) {
            e2.textContent = o$2 ? o$2.emptyScript : "";
            for (let s3 = 0; s3 < i3; s3++)
              e2.append(t3[s3], c()), E.nextNode(), d2.push({type: 2, index: ++l2});
            e2.append(t3[i3], c());
          }
        }
      } else if (e2.nodeType === 8)
        if (e2.data === h$1)
          d2.push({type: 2, index: l2});
        else {
          let t3 = -1;
          for (; (t3 = e2.data.indexOf(n$2, t3 + 1)) !== -1; )
            d2.push({type: 7, index: l2}), t3 += n$2.length - 1;
        }
      l2++;
    }
  }
  static createElement(t2, i2) {
    const s2 = u$1.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function S$1(t2, i2, s2 = t2, e2) {
  var o2, l2, n2, h2;
  if (i2 === w)
    return i2;
  let r2 = e2 !== void 0 ? (o2 = s2.Σi) === null || o2 === void 0 ? void 0 : o2[e2] : s2.Σo;
  const u2 = d(i2) ? void 0 : i2._$litDirective$;
  return (r2 == null ? void 0 : r2.constructor) !== u2 && ((l2 = r2 == null ? void 0 : r2.O) === null || l2 === void 0 || l2.call(r2, false), u2 === void 0 ? r2 = void 0 : (r2 = new u2(t2), r2.T(t2, s2, e2)), e2 !== void 0 ? ((n2 = (h2 = s2).Σi) !== null && n2 !== void 0 ? n2 : h2.Σi = [])[e2] = r2 : s2.Σo = r2), r2 !== void 0 && (i2 = S$1(t2, r2.S(t2, i2.values), r2, e2)), i2;
}
class k {
  constructor(t2, i2) {
    this.l = [], this.N = void 0, this.D = t2, this.M = i2;
  }
  u(t2) {
    var i2;
    const {el: {content: s2}, parts: e2} = this.D, o2 = ((i2 = t2 == null ? void 0 : t2.creationScope) !== null && i2 !== void 0 ? i2 : u$1).importNode(s2, true);
    E.currentNode = o2;
    let l2 = E.nextNode(), n2 = 0, h2 = 0, r2 = e2[0];
    for (; r2 !== void 0; ) {
      if (n2 === r2.index) {
        let i3;
        r2.type === 2 ? i3 = new C(l2, l2.nextSibling, this, t2) : r2.type === 1 ? i3 = new r2.ctor(l2, r2.name, r2.strings, this, t2) : r2.type === 6 && (i3 = new z(l2, this, t2)), this.l.push(i3), r2 = e2[++h2];
      }
      n2 !== (r2 == null ? void 0 : r2.index) && (l2 = E.nextNode(), n2++);
    }
    return o2;
  }
  v(t2) {
    let i2 = 0;
    for (const s2 of this.l)
      s2 !== void 0 && (s2.strings !== void 0 ? (s2.I(t2, s2, i2), i2 += s2.strings.length - 2) : s2.I(t2[i2])), i2++;
  }
}
class C {
  constructor(t2, i2, s2, e2) {
    this.type = 2, this.N = void 0, this.A = t2, this.B = i2, this.M = s2, this.options = e2;
  }
  setConnected(t2) {
    var i2;
    (i2 = this.P) === null || i2 === void 0 || i2.call(this, t2);
  }
  get parentNode() {
    return this.A.parentNode;
  }
  get startNode() {
    return this.A;
  }
  get endNode() {
    return this.B;
  }
  I(t2, i2 = this) {
    t2 = S$1(this, t2, i2), d(t2) ? t2 === A || t2 == null || t2 === "" ? (this.H !== A && this.R(), this.H = A) : t2 !== this.H && t2 !== w && this.m(t2) : t2._$litType$ !== void 0 ? this._(t2) : t2.nodeType !== void 0 ? this.$(t2) : a$1(t2) ? this.g(t2) : this.m(t2);
  }
  k(t2, i2 = this.B) {
    return this.A.parentNode.insertBefore(t2, i2);
  }
  $(t2) {
    this.H !== t2 && (this.R(), this.H = this.k(t2));
  }
  m(t2) {
    const i2 = this.A.nextSibling;
    i2 !== null && i2.nodeType === 3 && (this.B === null ? i2.nextSibling === null : i2 === this.B.previousSibling) ? i2.data = t2 : this.$(u$1.createTextNode(t2)), this.H = t2;
  }
  _(t2) {
    var i2;
    const {values: s2, _$litType$: e2} = t2, o2 = typeof e2 == "number" ? this.C(t2) : (e2.el === void 0 && (e2.el = N.createElement(e2.h, this.options)), e2);
    if (((i2 = this.H) === null || i2 === void 0 ? void 0 : i2.D) === o2)
      this.H.v(s2);
    else {
      const t3 = new k(o2, this), i3 = t3.u(this.options);
      t3.v(s2), this.$(i3), this.H = t3;
    }
  }
  C(t2) {
    let i2 = P.get(t2.strings);
    return i2 === void 0 && P.set(t2.strings, i2 = new N(t2)), i2;
  }
  g(t2) {
    v(this.H) || (this.H = [], this.R());
    const i2 = this.H;
    let s2, e2 = 0;
    for (const o2 of t2)
      e2 === i2.length ? i2.push(s2 = new C(this.k(c()), this.k(c()), this, this.options)) : s2 = i2[e2], s2.I(o2), e2++;
    e2 < i2.length && (this.R(s2 && s2.B.nextSibling, e2), i2.length = e2);
  }
  R(t2 = this.A.nextSibling, i2) {
    var s2;
    for ((s2 = this.P) === null || s2 === void 0 || s2.call(this, false, true, i2); t2 && t2 !== this.B; ) {
      const i3 = t2.nextSibling;
      t2.remove(), t2 = i3;
    }
  }
}
class H {
  constructor(t2, i2, s2, e2, o2) {
    this.type = 1, this.H = A, this.N = void 0, this.V = void 0, this.element = t2, this.name = i2, this.M = e2, this.options = o2, s2.length > 2 || s2[0] !== "" || s2[1] !== "" ? (this.H = Array(s2.length - 1).fill(A), this.strings = s2) : this.H = A;
  }
  get tagName() {
    return this.element.tagName;
  }
  I(t2, i2 = this, s2, e2) {
    const o2 = this.strings;
    let l2 = false;
    if (o2 === void 0)
      t2 = S$1(this, t2, i2, 0), l2 = !d(t2) || t2 !== this.H && t2 !== w, l2 && (this.H = t2);
    else {
      const e3 = t2;
      let n2, h2;
      for (t2 = o2[0], n2 = 0; n2 < o2.length - 1; n2++)
        h2 = S$1(this, e3[s2 + n2], i2, n2), h2 === w && (h2 = this.H[n2]), l2 || (l2 = !d(h2) || h2 !== this.H[n2]), h2 === A ? t2 = A : t2 !== A && (t2 += (h2 != null ? h2 : "") + o2[n2 + 1]), this.H[n2] = h2;
    }
    l2 && !e2 && this.W(t2);
  }
  W(t2) {
    t2 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 != null ? t2 : "");
  }
}
class I extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  W(t2) {
    this.element[this.name] = t2 === A ? void 0 : t2;
  }
}
class L extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  W(t2) {
    t2 && t2 !== A ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name);
  }
}
class R extends H {
  constructor() {
    super(...arguments), this.type = 5;
  }
  I(t2, i2 = this) {
    var s2;
    if ((t2 = (s2 = S$1(this, t2, i2, 0)) !== null && s2 !== void 0 ? s2 : A) === w)
      return;
    const e2 = this.H, o2 = t2 === A && e2 !== A || t2.capture !== e2.capture || t2.once !== e2.once || t2.passive !== e2.passive, l2 = t2 !== A && (e2 === A || o2);
    o2 && this.element.removeEventListener(this.name, this, e2), l2 && this.element.addEventListener(this.name, this, t2), this.H = t2;
  }
  handleEvent(t2) {
    var i2, s2;
    typeof this.H == "function" ? this.H.call((s2 = (i2 = this.options) === null || i2 === void 0 ? void 0 : i2.host) !== null && s2 !== void 0 ? s2 : this.element, t2) : this.H.handleEvent(t2);
  }
}
class z {
  constructor(t2, i2, s2) {
    this.element = t2, this.type = 6, this.N = void 0, this.V = void 0, this.M = i2, this.options = s2;
  }
  I(t2) {
    S$1(this, t2);
  }
}
const Z = {Z: "$lit$", U: n$2, Y: h$1, q: 1, X: M, tt: k, it: a$1, st: S$1, et: C, ot: H, nt: L, rt: R, lt: I, ht: z};
(i$1 = (t$1 = globalThis).litHtmlPlatformSupport) === null || i$1 === void 0 || i$1.call(t$1, N, C), ((s$2 = (e$2 = globalThis).litHtmlVersions) !== null && s$2 !== void 0 ? s$2 : e$2.litHtmlVersions = []).push("2.0.0-rc.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var i$2, l$2, o$3, s$3, n$3, a$2;
const c$1 = a;
((i$2 = (a$2 = globalThis).litElementVersions) !== null && i$2 !== void 0 ? i$2 : a$2.litElementVersions = []).push("3.0.0-rc.2");
class h$2 extends a {
  constructor() {
    super(...arguments), this.renderOptions = {host: this}, this.Φt = void 0;
  }
  createRenderRoot() {
    var t2, e2;
    const r2 = super.createRenderRoot();
    return (t2 = (e2 = this.renderOptions).renderBefore) !== null && t2 !== void 0 || (e2.renderBefore = r2.firstChild), r2;
  }
  update(t2) {
    const r2 = this.render();
    super.update(t2), this.Φt = V(r2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t2;
    super.connectedCallback(), (t2 = this.Φt) === null || t2 === void 0 || t2.setConnected(true);
  }
  disconnectedCallback() {
    var t2;
    super.disconnectedCallback(), (t2 = this.Φt) === null || t2 === void 0 || t2.setConnected(false);
  }
  render() {
    return w;
  }
}
h$2.finalized = true, h$2._$litElement$ = true, (o$3 = (l$2 = globalThis).litElementHydrateSupport) === null || o$3 === void 0 || o$3.call(l$2, {LitElement: h$2}), (n$3 = (s$3 = globalThis).litElementPlatformSupport) === null || n$3 === void 0 || n$3.call(s$3, {LitElement: h$2});
const u$2 = {K: (t2, e2, r2) => {
  t2.K(e2, r2);
}, L: (t2) => t2.L};
export {s as CSSResult, h$2 as LitElement, a as ReactiveElement, c$1 as UpdatingElement, Z as _Σ, u$2 as _Φ, S as adoptStyles, i as css, o$1 as defaultConverter, u as getCompatibleStyle, T as html, w as noChange, n$1 as notEqual, A as nothing, V as render, t as supportsAdoptingStyleSheets, x as svg, r as unsafeCSS};
