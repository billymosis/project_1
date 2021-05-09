/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n = (n2) => (e2) => typeof e2 == "function" ? ((n3, e3) => (window.customElements.define(n3, e3), e3))(n2, e2) : ((n3, e3) => {
  const {kind: t2, elements: i2} = e3;
  return {kind: t2, elements: i2, finisher(e4) {
    window.customElements.define(n3, e4);
  }};
})(n2, e2);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i = (i2, e2) => e2.kind === "method" && e2.descriptor && !("value" in e2.descriptor) ? {...e2, finisher(n2) {
  n2.createProperty(e2.key, i2);
}} : {kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e2.key, initializer() {
  typeof e2.initializer == "function" && (this[e2.key] = e2.initializer.call(this));
}, finisher(n2) {
  n2.createProperty(e2.key, i2);
}};
function e(e2) {
  return (n2, t2) => t2 !== void 0 ? ((i2, e3, n3) => {
    e3.constructor.createProperty(n3, i2);
  })(e2, n2, t2) : i(e2, n2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function r(r2) {
  return e({...r2, state: true, attribute: false});
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o = ({finisher: e2, descriptor: t2}) => (o2, n2) => {
  var r2;
  if (n2 === void 0) {
    const n3 = (r2 = o2.originalKey) !== null && r2 !== void 0 ? r2 : o2.key, i2 = t2 != null ? {kind: "method", placement: "prototype", key: n3, descriptor: t2(o2.key)} : {...o2, key: n3};
    return e2 != null && (i2.finisher = function(t3) {
      e2(t3, n3);
    }), i2;
  }
  {
    const r3 = o2.constructor;
    t2 !== void 0 && Object.defineProperty(o2, n2, t2(n2)), e2 == null || e2(r3, n2);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e$1(e2) {
  return o({finisher: (r2, t2) => {
    Object.assign(r2.prototype[t2], e2);
  }});
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function o$1(o$12, r2) {
  return o({descriptor: (t2) => {
    const i2 = {get() {
      var t3;
      return (t3 = this.renderRoot) === null || t3 === void 0 ? void 0 : t3.querySelector(o$12);
    }, enumerable: true, configurable: true};
    if (r2) {
      const r3 = typeof t2 == "symbol" ? Symbol() : "__" + t2;
      i2.get = function() {
        var t3;
        return this[r3] === void 0 && (this[r3] = (t3 = this.renderRoot) === null || t3 === void 0 ? void 0 : t3.querySelector(o$12)), this[r3];
      };
    }
    return i2;
  }});
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e$2(e2) {
  return o({descriptor: (r2) => ({get() {
    var r3;
    return (r3 = this.renderRoot) === null || r3 === void 0 ? void 0 : r3.querySelectorAll(e2);
  }, enumerable: true, configurable: true})});
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e$3(e2) {
  return o({descriptor: (r2) => ({async get() {
    var r3;
    return await this.updateComplete, (r3 = this.renderRoot) === null || r3 === void 0 ? void 0 : r3.querySelector(e2);
  }, enumerable: true, configurable: true})});
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = Element.prototype, n$1 = t.msMatchesSelector || t.webkitMatchesSelector;
function o$2(t2 = "", o$12 = false, r2 = "") {
  return o({descriptor: (e2) => ({get() {
    var e3, l;
    const i2 = "slot" + (t2 ? `[name=${t2}]` : ":not([name])");
    let a = (l = (e3 = this.renderRoot) === null || e3 === void 0 ? void 0 : e3.querySelector(i2)) === null || l === void 0 ? void 0 : l.assignedNodes({flatten: o$12});
    return a && r2 && (a = a.filter((e4) => e4.nodeType === Node.ELEMENT_NODE && (e4.matches ? e4.matches(r2) : n$1.call(e4, r2)))), a;
  }, enumerable: true, configurable: true})});
}
export {n as customElement, e$1 as eventOptions, e as property, o$1 as query, e$2 as queryAll, o$2 as queryAssignedNodes, e$3 as queryAsync, r as state};
