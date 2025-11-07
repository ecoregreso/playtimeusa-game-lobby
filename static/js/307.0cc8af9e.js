/*! For license information please see 307.0cc8af9e.js.LICENSE.txt */
(self.webpackChunksite = self.webpackChunksite || []).push([
["307"], {
    4444: function(e, t, n) {
        "use strict";
        n.d(t, {
            BH: function() {
                return u
            },
            L: function() {
                return s
            },
            LL: function() {
                return p
            },
            ZR: function() {
                return h
            },
            eu: function() {
                return l
            },
            hl: function() {
                return d
            },
            m9: function() {
                return y
            },
            vZ: function() {
                return m
            },
            zI: function() {
                return c
            }
        });
        let r = function(e) {
                let t = [],
                    n = 0;
                for (let r = 0; r < e.length; r++) {
                    let i = e.charCodeAt(r);
                    i < 128 ? t[n++] = i : (i < 2048 ? t[n++] = i >> 6 | 192 : ((64512 & i) == 55296 && r + 1 < e.length && (64512 & e.charCodeAt(r + 1)) == 56320 ? (i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r)), t[n++] = i >> 18 | 240, t[n++] = i >> 12 & 63 | 128) : t[n++] = i >> 12 | 224, t[n++] = i >> 6 & 63 | 128), t[n++] = 63 & i | 128)
                }
                return t
            },
            i = function(e) {
                let t = [],
                    n = 0,
                    r = 0;
                for (; n < e.length;) {
                    let i = e[n++];
                    if (i < 128) t[r++] = String.fromCharCode(i);
                    else if (i > 191 && i < 224) {
                        let o = e[n++];
                        t[r++] = String.fromCharCode((31 & i) << 6 | 63 & o)
                    } else if (i > 239 && i < 365) {
                        let o = e[n++],
                            a = ((7 & i) << 18 | (63 & o) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) - 65536;
                        t[r++] = String.fromCharCode(55296 + (a >> 10)), t[r++] = String.fromCharCode(56320 + (1023 & a))
                    } else {
                        let o = e[n++],
                            a = e[n++];
                        t[r++] = String.fromCharCode((15 & i) << 12 | (63 & o) << 6 | 63 & a)
                    }
                }
                return t.join("")
            },
            o = {
                byteToCharMap_: null,
                charToByteMap_: null,
                byteToCharMapWebSafe_: null,
                charToByteMapWebSafe_: null,
                ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                get ENCODED_VALS() {
                    return this.ENCODED_VALS_BASE + "+/="
                },
                get ENCODED_VALS_WEBSAFE() {
                    return this.ENCODED_VALS_BASE + "-_."
                },
                HAS_NATIVE_SUPPORT: "function" == typeof atob,
                encodeByteArray(e, t) {
                    if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
                    this.init_();
                    let n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                        r = [];
                    for (let t = 0; t < e.length; t += 3) {
                        let i = e[t],
                            o = t + 1 < e.length,
                            a = o ? e[t + 1] : 0,
                            s = t + 2 < e.length,
                            u = s ? e[t + 2] : 0,
                            d = i >> 2,
                            l = (3 & i) << 4 | a >> 4,
                            c = (15 & a) << 2 | u >> 6,
                            f = 63 & u;
                        s || (f = 64, o || (c = 64)), r.push(n[d], n[l], n[c], n[f])
                    }
                    return r.join("")
                },
                encodeString(e, t) {
                    return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(r(e), t)
                },
                decodeString(e, t) {
                    return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : i(this.decodeStringToByteArray(e, t))
                },
                decodeStringToByteArray(e, t) {
                    this.init_();
                    let n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                        r = [];
                    for (let t = 0; t < e.length;) {
                        let i = n[e.charAt(t++)],
                            o = t < e.length ? n[e.charAt(t)] : 0,
                            a = ++t < e.length ? n[e.charAt(t)] : 64,
                            s = ++t < e.length ? n[e.charAt(t)] : 64;
                        if (++t, null == i || null == o || null == a || null == s) throw Error();
                        let u = i << 2 | o >> 4;
                        if (r.push(u), 64 !== a) {
                            let e = o << 4 & 240 | a >> 2;
                            if (r.push(e), 64 !== s) {
                                let e = a << 6 & 192 | s;
                                r.push(e)
                            }
                        }
                    }
                    return r
                },
                init_() {
                    if (!this.byteToCharMap_) {
                        this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                        for (let e = 0; e < this.ENCODED_VALS.length; e++) this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
                    }
                }
            },
            a = function(e) {
                let t = r(e);
                return o.encodeByteArray(t, !0)
            },
            s = function(e) {
                return a(e).replace(/\./g, "")
            };
        class u {
            constructor() {
                this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise((e, t) => {
                    this.resolve = e, this.reject = t
                })
            }
            wrapCallback(e) {
                return (t, n) => {
                    t ? this.reject(t) : this.resolve(n), "function" == typeof e && (this.promise.catch(() => {}), 1 === e.length ? e(t) : e(t, n))
                }
            }
        }

        function d() {
            return "object" == typeof indexedDB
        }

        function l() {
            return new Promise((e, t) => {
                try {
                    let n = !0,
                        r = "validate-browser-context-for-indexeddb-analytics-module",
                        i = self.indexedDB.open(r);
                    i.onsuccess = () => {
                        i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0)
                    }, i.onupgradeneeded = () => {
                        n = !1
                    }, i.onerror = () => {
                        var e;
                        t((null === (e = i.error) || void 0 === e ? void 0 : e.message) || "")
                    }
                } catch (e) {
                    t(e)
                }
            })
        }

        function c() {
            return "undefined" != typeof navigator && !!navigator.cookieEnabled
        }
        let f = "FirebaseError";
        class h extends Error {
            constructor(e, t, n) {
                super(t), this.code = e, this.customData = n, this.name = f, Object.setPrototypeOf(this, h.prototype), Error.captureStackTrace && Error.captureStackTrace(this, p.prototype.create)
            }
        }
        class p {
            constructor(e, t, n) {
                this.service = e, this.serviceName = t, this.errors = n
            }
            create(e, ...t) {
                let n = t[0] || {},
                    r = `${this.service}/${e}`,
                    i = this.errors[e],
                    o = i ? g(i, n) : "Error",
                    a = `${this.serviceName}: ${o} (${r}).`;
                return new h(r, a, n)
            }
        }

        function g(e, t) {
            return e.replace(b, (e, n) => {
                let r = t[n];
                return null != r ? String(r) : `<${n}?>`
            })
        }
        let b = /\{\$([^}]+)}/g;

        function m(e, t) {
            if (e === t) return !0;
            let n = Object.keys(e),
                r = Object.keys(t);
            for (let i of n) {
                if (!r.includes(i)) return !1;
                let n = e[i],
                    o = t[i];
                if (v(n) && v(o)) {
                    if (!m(n, o)) return !1
                } else if (n !== o) return !1
            }
            for (let e of r)
                if (!n.includes(e)) return !1;
            return !0
        }

        function v(e) {
            return null !== e && "object" == typeof e
        }

        function y(e) {
            return e && e._delegate ? e._delegate : e
        }
    },
    4537: function(e) {
        "use strict";

        function t(e, t) {
            for (var n = Array(arguments.length - 1), r = 0, i = 2, o = !0; i < arguments.length;) n[r++] = arguments[i++];
            return new Promise(function(i, a) {
                n[r] = function(e) {
                    if (o) {
                        if (o = !1, e) a(e);
                        else {
                            for (var t = Array(arguments.length - 1), n = 0; n < t.length;) t[n++] = arguments[n];
                            i.apply(null, t)
                        }
                    }
                };
                try {
                    e.apply(t || null, n)
                } catch (e) {
                    o && (o = !1, a(e))
                }
            })
        }
        e.exports = t
    },
    7419: function(e, t) {
        "use strict";
        var n = t;
        n.length = function(e) {
            var t = e.length;
            if (!t) return 0;
            for (var n = 0; --t % 4 > 1 && "=" === e.charAt(t);) ++n;
            return Math.ceil(3 * e.length) / 4 - n
        };
        for (var r = Array(64), i = Array(123), o = 0; o < 64;) i[r[o] = o < 26 ? o + 65 : o < 52 ? o + 71 : o < 62 ? o - 4 : o - 59 | 43] = o++;
        n.encode = function(e, t, n) {
            for (var i, o = null, a = [], s = 0, u = 0; t < n;) {
                var d = e[t++];
                switch (u) {
                    case 0:
                        a[s++] = r[d >> 2], i = (3 & d) << 4, u = 1;
                        break;
                    case 1:
                        a[s++] = r[i | d >> 4], i = (15 & d) << 2, u = 2;
                        break;
                    case 2:
                        a[s++] = r[i | d >> 6], a[s++] = r[63 & d], u = 0
                }
                s > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, a)), s = 0)
            }
            return (u && (a[s++] = r[i], a[s++] = 61, 1 === u && (a[s++] = 61)), o) ? (s && o.push(String.fromCharCode.apply(String, a.slice(0, s))), o.join("")) : String.fromCharCode.apply(String, a.slice(0, s))
        };
        var a = "invalid encoding";
        n.decode = function(e, t, n) {
            for (var r, o = n, s = 0, u = 0; u < e.length;) {
                var d = e.charCodeAt(u++);
                if (61 === d && s > 1) break;
                if (void 0 === (d = i[d])) throw Error(a);
                switch (s) {
                    case 0:
                        r = d, s = 1;
                        break;
                    case 1:
                        t[n++] = r << 2 | (48 & d) >> 4, r = d, s = 2;
                        break;
                    case 2:
                        t[n++] = (15 & r) << 4 | (60 & d) >> 2, r = d, s = 3;
                        break;
                    case 3:
                        t[n++] = (3 & r) << 6 | d, s = 0
                }
            }
            if (1 === s) throw Error(a);
            return n - o
        }, n.test = function(e) {
            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)
        }
    },
    9211: function(e) {
        "use strict";

        function t() {
            this._listeners = {}
        }
        e.exports = t, t.prototype.on = function(e, t, n) {
            return (this._listeners[e] || (this._listeners[e] = [])).push({
                fn: t,
                ctx: n || this
            }), this
        }, t.prototype.off = function(e, t) {
            if (void 0 === e) this._listeners = {};
            else if (void 0 === t) this._listeners[e] = [];
            else
                for (var n = this._listeners[e], r = 0; r < n.length;) n[r].fn === t ? n.splice(r, 1) : ++r;
            return this
        }, t.prototype.emit = function(e) {
            var t = this._listeners[e];
            if (t) {
                for (var n = [], r = 1; r < arguments.length;) n.push(arguments[r++]);
                for (r = 0; r < t.length;) t[r].fn.apply(t[r++].ctx, n)
            }
            return this
        }
    },
    945: function(e) {
        "use strict";

        function t(e) {
            return "undefined" != typeof Float32Array ? function() {
                var t = new Float32Array([-0]),
                    n = new Uint8Array(t.buffer),
                    r = 128 === n[3];

                function i(e, r, i) {
                    t[0] = e, r[i] = n[0], r[i + 1] = n[1], r[i + 2] = n[2], r[i + 3] = n[3]
                }

                function o(e, r, i) {
                    t[0] = e, r[i] = n[3], r[i + 1] = n[2], r[i + 2] = n[1], r[i + 3] = n[0]
                }

                function a(e, r) {
                    return n[0] = e[r], n[1] = e[r + 1], n[2] = e[r + 2], n[3] = e[r + 3], t[0]
                }

                function s(e, r) {
                    return n[3] = e[r], n[2] = e[r + 1], n[1] = e[r + 2], n[0] = e[r + 3], t[0]
                }
                e.writeFloatLE = r ? i : o, e.writeFloatBE = r ? o : i, e.readFloatLE = r ? a : s, e.readFloatBE = r ? s : a
            }() : function() {
                function t(e, t, n, r) {
                    var i = +(t < 0);
                    if (i && (t = -t), 0 === t) e(1 / t > 0 ? 0 : 0x80000000, n, r);
                    else if (isNaN(t)) e(0x7fc00000, n, r);
                    else if (t > 34028234663852886e22) e((i << 31 | 0x7f800000) >>> 0, n, r);
                    else if (t < 11754943508222875e-54) e((i << 31 | Math.round(t / 1401298464324817e-60)) >>> 0, n, r);
                    else {
                        var o = Math.floor(Math.log(t) / Math.LN2),
                            a = 8388607 & Math.round(t * Math.pow(2, -o) * 8388608);
                        e((i << 31 | o + 127 << 23 | a) >>> 0, n, r)
                    }
                }

                function a(e, t, n) {
                    var r = e(t, n),
                        i = (r >> 31) * 2 + 1,
                        o = r >>> 23 & 255,
                        a = 8388607 & r;
                    return 255 === o ? a ? NaN : 1 / 0 * i : 0 === o ? 1401298464324817e-60 * i * a : i * Math.pow(2, o - 150) * (a + 8388608)
                }
                e.writeFloatLE = t.bind(null, n), e.writeFloatBE = t.bind(null, r), e.readFloatLE = a.bind(null, i), e.readFloatBE = a.bind(null, o)
            }(), "undefined" != typeof Float64Array ? function() {
                var t = new Float64Array([-0]),
                    n = new Uint8Array(t.buffer),
                    r = 128 === n[7];

                function i(e, r, i) {
                    t[0] = e, r[i] = n[0], r[i + 1] = n[1], r[i + 2] = n[2], r[i + 3] = n[3], r[i + 4] = n[4], r[i + 5] = n[5], r[i + 6] = n[6], r[i + 7] = n[7]
                }

                function o(e, r, i) {
                    t[0] = e, r[i] = n[7], r[i + 1] = n[6], r[i + 2] = n[5], r[i + 3] = n[4], r[i + 4] = n[3], r[i + 5] = n[2], r[i + 6] = n[1], r[i + 7] = n[0]
                }

                function a(e, r) {
                    return n[0] = e[r], n[1] = e[r + 1], n[2] = e[r + 2], n[3] = e[r + 3], n[4] = e[r + 4], n[5] = e[r + 5], n[6] = e[r + 6], n[7] = e[r + 7], t[0]
                }

                function s(e, r) {
                    return n[7] = e[r], n[6] = e[r + 1], n[5] = e[r + 2], n[4] = e[r + 3], n[3] = e[r + 4], n[2] = e[r + 5], n[1] = e[r + 6], n[0] = e[r + 7], t[0]
                }
                e.writeDoubleLE = r ? i : o, e.writeDoubleBE = r ? o : i, e.readDoubleLE = r ? a : s, e.readDoubleBE = r ? s : a
            }() : function() {
                function t(e, t, n, r, i, o) {
                    var a, s = +(r < 0);
                    if (s && (r = -r), 0 === r) e(0, i, o + t), e(1 / r > 0 ? 0 : 0x80000000, i, o + n);
                    else if (isNaN(r)) e(0, i, o + t), e(0x7ff80000, i, o + n);
                    else if (r > 17976931348623157e292) e(0, i, o + t), e((s << 31 | 0x7ff00000) >>> 0, i, o + n);
                    else if (r < 22250738585072014e-324) e((a = r / 5e-324) >>> 0, i, o + t), e((s << 31 | a / 0x100000000) >>> 0, i, o + n);
                    else {
                        var u = Math.floor(Math.log(r) / Math.LN2);
                        1024 === u && (u = 1023), e(0x10000000000000 * (a = r * Math.pow(2, -u)) >>> 0, i, o + t), e((s << 31 | u + 1023 << 20 | 1048576 * a & 1048575) >>> 0, i, o + n)
                    }
                }

                function a(e, t, n, r, i) {
                    var o = e(r, i + t),
                        a = e(r, i + n),
                        s = (a >> 31) * 2 + 1,
                        u = a >>> 20 & 2047,
                        d = 0x100000000 * (1048575 & a) + o;
                    return 2047 === u ? d ? NaN : 1 / 0 * s : 0 === u ? 5e-324 * s * d : s * Math.pow(2, u - 1075) * (d + 0x10000000000000)
                }
                e.writeDoubleLE = t.bind(null, n, 0, 4), e.writeDoubleBE = t.bind(null, r, 4, 0), e.readDoubleLE = a.bind(null, i, 0, 4), e.readDoubleBE = a.bind(null, o, 4, 0)
            }(), e
        }

        function n(e, t, n) {
            t[n] = 255 & e, t[n + 1] = e >>> 8 & 255, t[n + 2] = e >>> 16 & 255, t[n + 3] = e >>> 24
        }

        function r(e, t, n) {
            t[n] = e >>> 24, t[n + 1] = e >>> 16 & 255, t[n + 2] = e >>> 8 & 255, t[n + 3] = 255 & e
        }

        function i(e, t) {
            return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
        }

        function o(e, t) {
            return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
        }
        e.exports = t(t)
    },
    7199: function(module) {
        "use strict";

        function inquire(moduleName) {
            try {
                var mod = eval("quire".replace(/^/, "re"))(moduleName);
                if (mod && (mod.length || Object.keys(mod).length)) return mod
            } catch (e) {}
            return null
        }
        module.exports = inquire
    },
    6662: function(e) {
        "use strict";

        function t(e, t, n) {
            var r = n || 8192,
                i = r >>> 1,
                o = null,
                a = r;
            return function(n) {
                if (n < 1 || n > i) return e(n);
                a + n > r && (o = e(r), a = 0);
                var s = t.call(o, a, a += n);
                return 7 & a && (a = (7 | a) + 1), s
            }
        }
        e.exports = t
    },
    4997: function(e, t) {
        "use strict";
        var n = t;
        n.length = function(e) {
            for (var t = 0, n = 0, r = 0; r < e.length; ++r)(n = e.charCodeAt(r)) < 128 ? t += 1 : n < 2048 ? t += 2 : (64512 & n) == 55296 && (64512 & e.charCodeAt(r + 1)) == 56320 ? (++r, t += 4) : t += 3;
            return t
        }, n.read = function(e, t, n) {
            if (n - t < 1) return "";
            for (var r, i = null, o = [], a = 0; t < n;)(r = e[t++]) < 128 ? o[a++] = r : r > 191 && r < 224 ? o[a++] = (31 & r) << 6 | 63 & e[t++] : r > 239 && r < 365 ? (r = ((7 & r) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536, o[a++] = 55296 + (r >> 10), o[a++] = 56320 + (1023 & r)) : o[a++] = (15 & r) << 12 | (63 & e[t++]) << 6 | 63 & e[t++], a > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, o)), a = 0);
            return i ? (a && i.push(String.fromCharCode.apply(String, o.slice(0, a))), i.join("")) : String.fromCharCode.apply(String, o.slice(0, a))
        }, n.write = function(e, t, n) {
            for (var r, i, o = n, a = 0; a < e.length; ++a)(r = e.charCodeAt(a)) < 128 ? t[n++] = r : (r < 2048 ? t[n++] = r >> 6 | 192 : ((64512 & r) == 55296 && (64512 & (i = e.charCodeAt(a + 1))) == 56320 ? (r = 65536 + ((1023 & r) << 10) + (1023 & i), ++a, t[n++] = r >> 18 | 240, t[n++] = r >> 12 & 63 | 128) : t[n++] = r >> 12 | 224, t[n++] = r >> 6 & 63 | 128), t[n++] = 63 & r | 128);
            return n - o
        }
    },
    6352: function() {},
    743: function(e, t) {
        ! function(n, r) {
            var i = {};
            i.version = "0.4.1", i.settings = {
                currency: {
                    symbol: "$",
                    format: "%s%v",
                    decimal: ".",
                    thousand: ",",
                    precision: 2,
                    grouping: 3
                },
                number: {
                    precision: 0,
                    grouping: 3,
                    thousand: ",",
                    decimal: "."
                }
            };
            var o = Array.prototype.map,
                a = Array.isArray,
                s = Object.prototype.toString;

            function u(e) {
                return !!("" === e || e && e.charCodeAt && e.substr)
            }

            function d(e) {
                return a ? a(e) : "[object Array]" === s.call(e)
            }

            function l(e) {
                return e && "[object Object]" === s.call(e)
            }

            function c(e, t) {
                var n;
                for (n in e = e || {}, t = t || {}) t.hasOwnProperty(n) && null == e[n] && (e[n] = t[n]);
                return e
            }

            function f(e, t, n) {
                var r, i, a = [];
                if (!e) return a;
                if (o && e.map === o) return e.map(t, n);
                for (r = 0, i = e.length; r < i; r++) a[r] = t.call(n, e[r], r, e);
                return a
            }

            function h(e, t) {
                return isNaN(e = Math.round(Math.abs(e))) ? t : e
            }

            function p(e) {
                var t = i.settings.currency.format;
                return ("function" == typeof e && (e = e()), u(e) && e.match("%v")) ? {
                    pos: e,
                    neg: e.replace("-", "").replace("%v", "-%v"),
                    zero: e
                } : e && e.pos && e.pos.match("%v") ? e : u(t) ? i.settings.currency.format = {
                    pos: t,
                    neg: t.replace("%v", "-%v"),
                    zero: t
                } : t
            }
            var g = i.unformat = i.parse = function(e, t) {
                    if (d(e)) return f(e, function(e) {
                        return g(e, t)
                    });
                    if ("number" == typeof(e = e || 0)) return e;
                    var n = RegExp("[^0-9-" + (t = t || i.settings.number.decimal) + "]", ["g"]),
                        r = parseFloat(("" + e).replace(/\((.*)\)/, "-$1").replace(n, "").replace(t, "."));
                    return isNaN(r) ? 0 : r
                },
                b = i.toFixed = function(e, t) {
                    var n = Math.pow(10, t = h(t, i.settings.number.precision));
                    return (Math.round(i.unformat(e) * n) / n).toFixed(t)
                },
                m = i.formatNumber = i.format = function(e, t, n, r) {
                    if (d(e)) return f(e, function(e) {
                        return m(e, t, n, r)
                    });
                    e = g(e);
                    var o = c(l(t) ? t : {
                            precision: t,
                            thousand: n,
                            decimal: r
                        }, i.settings.number),
                        a = h(o.precision),
                        s = e < 0 ? "-" : "",
                        u = parseInt(b(Math.abs(e || 0), a), 10) + "",
                        p = u.length > 3 ? u.length % 3 : 0;
                    return s + (p ? u.substr(0, p) + o.thousand : "") + u.substr(p).replace(/(\d{3})(?=\d)/g, "$1" + o.thousand) + (a ? o.decimal + b(Math.abs(e), a).split(".")[1] : "")
                },
                v = i.formatMoney = function(e, t, n, r, o, a) {
                    if (d(e)) return f(e, function(e) {
                        return v(e, t, n, r, o, a)
                    });
                    e = g(e);
                    var s = c(l(t) ? t : {
                            symbol: t,
                            precision: n,
                            thousand: r,
                            decimal: o,
                            format: a
                        }, i.settings.currency),
                        u = p(s.format);
                    return (e > 0 ? u.pos : e < 0 ? u.neg : u.zero).replace("%s", s.symbol).replace("%v", m(Math.abs(e), h(s.precision), s.thousand, s.decimal))
                };
            i.formatColumn = function(e, t, n, r, o, a) {
                if (!e) return [];
                var s = c(l(t) ? t : {
                        symbol: t,
                        precision: n,
                        thousand: r,
                        decimal: o,
                        format: a
                    }, i.settings.currency),
                    b = p(s.format),
                    v = b.pos.indexOf("%s") < b.pos.indexOf("%v"),
                    y = 0,
                    S = f(e, function(e, t) {
                        if (d(e)) return i.formatColumn(e, s);
                        var n = ((e = g(e)) > 0 ? b.pos : e < 0 ? b.neg : b.zero).replace("%s", s.symbol).replace("%v", m(Math.abs(e), h(s.precision), s.thousand, s.decimal));
                        return n.length > y && (y = n.length), n
                    });
                return f(S, function(e, t) {
                    return u(e) && e.length < y ? v ? e.replace(s.symbol, s.symbol + Array(y - e.length + 1).join(" ")) : Array(y - e.length + 1).join(" ") + e : e
                })
            }, e.exports && (t = e.exports = i), t.accounting = i
        }(0)
    },
    640: function(e, t, n) {
        "use strict";
        var r = n(1742),
            i = {
                "text/plain": "Text",
                "text/html": "Url",
                default: "Text"
            },
            o = "Copy to clipboard: #{key}, Enter";

        function a(e) {
            var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
            return e.replace(/#{\s*key\s*}/g, t)
        }

        function s(e, t) {
            var n, s, u, d, l, c, f = !1;
            t || (t = {}), n = t.debug || !1;
            try {
                if (u = r(), d = document.createRange(), l = document.getSelection(), (c = document.createElement("span")).textContent = e, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", function(r) {
                        if (r.stopPropagation(), t.format) {
                            if (r.preventDefault(), void 0 === r.clipboardData) {
                                n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                                var o = i[t.format] || i.default;
                                window.clipboardData.setData(o, e)
                            } else r.clipboardData.clearData(), r.clipboardData.setData(t.format, e)
                        }
                        t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData))
                    }), document.body.appendChild(c), d.selectNodeContents(c), l.addRange(d), !document.execCommand("copy")) throw Error("copy command was unsuccessful");
                f = !0
            } catch (r) {
                n && console.error("unable to copy using execCommand: ", r), n && console.warn("trying IE specific stuff");
                try {
                    window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), f = !0
                } catch (r) {
                    n && console.error("unable to copy using clipboardData: ", r), n && console.error("falling back to prompt"), s = a("message" in t ? t.message : o), window.prompt(s, e)
                }
            } finally {
                l && ("function" == typeof l.removeRange ? l.removeRange(d) : l.removeAllRanges()), c && document.body.removeChild(c), u()
            }
            return f
        }
        e.exports = s
    },
    993: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, {
            CountUp: function() {
                return i
            }
        });
        var r = function() {
                return (r = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            },
            i = function() {
                function e(e, t, n) {
                    var i = this;
                    this.endVal = t, this.options = n, this.version = "2.8.0", this.defaults = {
                        startVal: 0,
                        decimalPlaces: 0,
                        duration: 2,
                        useEasing: !0,
                        useGrouping: !0,
                        useIndianSeparators: !1,
                        smartEasingThreshold: 999,
                        smartEasingAmount: 333,
                        separator: ",",
                        decimal: ".",
                        prefix: "",
                        suffix: "",
                        enableScrollSpy: !1,
                        scrollSpyDelay: 200,
                        scrollSpyOnce: !1
                    }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.once = !1, this.count = function(e) {
                        i.startTime || (i.startTime = e);
                        var t = e - i.startTime;
                        i.remaining = i.duration - t, i.useEasing ? i.countDown ? i.frameVal = i.startVal - i.easingFn(t, 0, i.startVal - i.endVal, i.duration) : i.frameVal = i.easingFn(t, i.startVal, i.endVal - i.startVal, i.duration) : i.frameVal = i.startVal + (i.endVal - i.startVal) * (t / i.duration);
                        var n = i.countDown ? i.frameVal < i.endVal : i.frameVal > i.endVal;
                        i.frameVal = n ? i.endVal : i.frameVal, i.frameVal = Number(i.frameVal.toFixed(i.options.decimalPlaces)), i.printValue(i.frameVal), t < i.duration ? i.rAF = requestAnimationFrame(i.count) : null !== i.finalEndVal ? i.update(i.finalEndVal) : i.options.onCompleteCallback && i.options.onCompleteCallback()
                    }, this.formatNumber = function(e) {
                        var t, n, r, o, a = e < 0 ? "-" : "",
                            s = (t = Math.abs(e).toFixed(i.options.decimalPlaces) + "").split(".");
                        if (n = s[0], r = s.length > 1 ? i.options.decimal + s[1] : "", i.options.useGrouping) {
                            o = "";
                            for (var u = 3, d = 0, l = 0, c = n.length; l < c; ++l) i.options.useIndianSeparators && 4 === l && (u = 2, d = 1), 0 !== l && d % u == 0 && (o = i.options.separator + o), d++, o = n[c - l - 1] + o;
                            n = o
                        }
                        return i.options.numerals && i.options.numerals.length && (n = n.replace(/[0-9]/g, function(e) {
                            return i.options.numerals[+e]
                        }), r = r.replace(/[0-9]/g, function(e) {
                            return i.options.numerals[+e]
                        })), a + i.options.prefix + n + r + i.options.suffix
                    }, this.easeOutExpo = function(e, t, n, r) {
                        return n * (1 - Math.pow(2, -10 * e / r)) * 1024 / 1023 + t
                    }, this.options = r(r({}, this.defaults), n), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(t), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el = "string" == typeof e ? document.getElementById(e) : e, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, e) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
                        return i.handleScroll(i)
                    }), window.onscroll = function() {
                        window.onScrollFns.forEach(function(e) {
                            return e()
                        })
                    }, this.handleScroll(this)))
                }
                return e.prototype.handleScroll = function(e) {
                    if (e && window && !e.once) {
                        var t = window.innerHeight + window.scrollY,
                            n = e.el.getBoundingClientRect(),
                            r = n.top + window.pageYOffset,
                            i = n.top + n.height + window.pageYOffset;
                        i < t && i > window.scrollY && e.paused ? (e.paused = !1, setTimeout(function() {
                            return e.start()
                        }, e.options.scrollSpyDelay), e.options.scrollSpyOnce && (e.once = !0)) : (window.scrollY > i || r > t) && !e.paused && e.reset()
                    }
                }, e.prototype.determineDirectionAndSmartEasing = function() {
                    var e = this.finalEndVal ? this.finalEndVal : this.endVal;
                    if (this.countDown = this.startVal > e, Math.abs(e - this.startVal) > this.options.smartEasingThreshold && this.options.useEasing) {
                        this.finalEndVal = e;
                        var t = this.countDown ? 1 : -1;
                        this.endVal = e + t * this.options.smartEasingAmount, this.duration = this.duration / 2
                    } else this.endVal = e, this.finalEndVal = null;
                    null !== this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing
                }, e.prototype.start = function(e) {
                    this.error || (this.options.onStartCallback && this.options.onStartCallback(), e && (this.options.onCompleteCallback = e), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
                }, e.prototype.pauseResume = function() {
                    this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused
                }, e.prototype.reset = function() {
                    cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal)
                }, e.prototype.update = function(e) {
                    cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(e), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count))
                }, e.prototype.printValue = function(e) {
                    var t;
                    if (this.el) {
                        var n = this.formattingFn(e);
                        (null === (t = this.options.plugin) || void 0 === t ? void 0 : t.render) ? this.options.plugin.render(this.el, n): "INPUT" === this.el.tagName ? this.el.value = n : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n : this.el.innerHTML = n
                    }
                }, e.prototype.ensureNumber = function(e) {
                    return "number" == typeof e && !isNaN(e)
                }, e.prototype.validateValue = function(e) {
                    var t = Number(e);
                    return this.ensureNumber(t) ? t : (this.error = "[CountUp] invalid start or end value: ".concat(e), null)
                }, e.prototype.resetDuration = function() {
                    this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration
                }, e
            }()
    },
    2250: function(e, t, n) {
        "use strict";

        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function i(e, t) {
            if (t.length < e) throw TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present")
        }

        function o(e) {
            return i(1, arguments), e instanceof Date || "object" === r(e) && "[object Date]" === Object.prototype.toString.call(e)
        }

        function a(e) {
            i(1, arguments);
            var t = Object.prototype.toString.call(e);
            return e instanceof Date || "object" === r(e) && "[object Date]" === t ? new Date(e.getTime()) : "number" == typeof e || "[object Number]" === t ? new Date(e) : (("string" == typeof e || "[object String]" === t) && "undefined" != typeof console && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(Error().stack)), new Date(NaN))
        }

        function s(e) {
            return i(1, arguments), (!!o(e) || "number" == typeof e) && !isNaN(Number(a(e)))
        }

        function u(e) {
            if (null === e || !0 === e || !1 === e) return NaN;
            var t = Number(e);
            return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
        }

        function d(e, t) {
            return i(2, arguments), new Date(a(e).getTime() + u(t))
        }

        function l(e, t) {
            return i(2, arguments), d(e, -u(t))
        }
        n.d(t, {
            Z: function() {
                return eT
            }
        });
        var c = 864e5;

        function f(e) {
            i(1, arguments);
            var t = a(e),
                n = t.getTime();
            return t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0), Math.floor((n - t.getTime()) / c) + 1
        }

        function h(e) {
            i(1, arguments);
            var t = 1,
                n = a(e),
                r = n.getUTCDay(),
                o = 7 * (r < t) + r - t;
            return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n
        }

        function p(e) {
            i(1, arguments);
            var t = a(e),
                n = t.getUTCFullYear(),
                r = new Date(0);
            r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
            var o = h(r),
                s = new Date(0);
            s.setUTCFullYear(n, 0, 4), s.setUTCHours(0, 0, 0, 0);
            var u = h(s);
            return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= u.getTime() ? n : n - 1
        }

        function g(e) {
            i(1, arguments);
            var t = p(e),
                n = new Date(0);
            return n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0), h(n)
        }
        var b = 6048e5;

        function m(e) {
            i(1, arguments);
            var t = a(e);
            return Math.round((h(t).getTime() - g(t).getTime()) / b) + 1
        }
        var v = {};

        function y() {
            return v
        }

        function S(e, t) {
            i(1, arguments);
            var n, r, o, s, d, l, c, f, h = y(),
                p = u(null !== (n = null !== (r = null !== (o = null !== (s = null == t ? void 0 : t.weekStartsOn) && void 0 !== s ? s : null == t ? void 0 : null === (d = t.locale) || void 0 === d ? void 0 : null === (l = d.options) || void 0 === l ? void 0 : l.weekStartsOn) && void 0 !== o ? o : h.weekStartsOn) && void 0 !== r ? r : null === (c = h.locale) || void 0 === c ? void 0 : null === (f = c.options) || void 0 === f ? void 0 : f.weekStartsOn) && void 0 !== n ? n : 0);
            if (!(p >= 0 && p <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
            var g = a(e),
                b = g.getUTCDay(),
                m = 7 * (b < p) + b - p;
            return g.setUTCDate(g.getUTCDate() - m), g.setUTCHours(0, 0, 0, 0), g
        }

        function $(e, t) {
            i(1, arguments);
            var n, r, o, s, d, l, c, f, h = a(e),
                p = h.getUTCFullYear(),
                g = y(),
                b = u(null !== (n = null !== (r = null !== (o = null !== (s = null == t ? void 0 : t.firstWeekContainsDate) && void 0 !== s ? s : null == t ? void 0 : null === (d = t.locale) || void 0 === d ? void 0 : null === (l = d.options) || void 0 === l ? void 0 : l.firstWeekContainsDate) && void 0 !== o ? o : g.firstWeekContainsDate) && void 0 !== r ? r : null === (c = g.locale) || void 0 === c ? void 0 : null === (f = c.options) || void 0 === f ? void 0 : f.firstWeekContainsDate) && void 0 !== n ? n : 1);
            if (!(b >= 1 && b <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
            var m = new Date(0);
            m.setUTCFullYear(p + 1, 0, b), m.setUTCHours(0, 0, 0, 0);
            var v = S(m, t),
                $ = new Date(0);
            $.setUTCFullYear(p, 0, b), $.setUTCHours(0, 0, 0, 0);
            var T = S($, t);
            return h.getTime() >= v.getTime() ? p + 1 : h.getTime() >= T.getTime() ? p : p - 1
        }

        function T(e, t) {
            i(1, arguments);
            var n, r, o, a, s, d, l, c, f = y(),
                h = u(null !== (n = null !== (r = null !== (o = null !== (a = null == t ? void 0 : t.firstWeekContainsDate) && void 0 !== a ? a : null == t ? void 0 : null === (s = t.locale) || void 0 === s ? void 0 : null === (d = s.options) || void 0 === d ? void 0 : d.firstWeekContainsDate) && void 0 !== o ? o : f.firstWeekContainsDate) && void 0 !== r ? r : null === (l = f.locale) || void 0 === l ? void 0 : null === (c = l.options) || void 0 === c ? void 0 : c.firstWeekContainsDate) && void 0 !== n ? n : 1),
                p = $(e, t),
                g = new Date(0);
            return g.setUTCFullYear(p, 0, h), g.setUTCHours(0, 0, 0, 0), S(g, t)
        }
        var w = 6048e5;

        function P(e, t) {
            i(1, arguments);
            var n = a(e);
            return Math.round((S(n, t).getTime() - T(n, t).getTime()) / w) + 1
        }

        function A(e, t) {
            for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t;) r = "0" + r;
            return n + r
        }
        var M = {
                y: function(e, t) {
                    var n = e.getUTCFullYear(),
                        r = n > 0 ? n : 1 - n;
                    return A("yy" === t ? r % 100 : r, t.length)
                },
                M: function(e, t) {
                    var n = e.getUTCMonth();
                    return "M" === t ? String(n + 1) : A(n + 1, 2)
                },
                d: function(e, t) {
                    return A(e.getUTCDate(), t.length)
                },
                h: function(e, t) {
                    return A(e.getUTCHours() % 12 || 12, t.length)
                },
                H: function(e, t) {
                    return A(e.getUTCHours(), t.length)
                },
                m: function(e, t) {
                    return A(e.getUTCMinutes(), t.length)
                },
                s: function(e, t) {
                    return A(e.getUTCSeconds(), t.length)
                },
                S: function(e, t) {
                    var n = t.length;
                    return A(Math.floor(e.getUTCMilliseconds() * Math.pow(10, n - 3)), t.length)
                }
            },
            C = {
                midnight: "midnight",
                noon: "noon",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night"
            };

        function O(e, t) {
            var n = e > 0 ? "-" : "+",
                r = Math.abs(e),
                i = Math.floor(r / 60),
                o = r % 60;
            if (0 === o) return n + String(i);
            var a = t || "";
            return n + String(i) + a + A(o, 2)
        }

        function E(e, t) {
            return e % 60 == 0 ? (e > 0 ? "-" : "+") + A(Math.abs(e) / 60, 2) : x(e, t)
        }

        function x(e, t) {
            var n = t || "",
                r = e > 0 ? "-" : "+",
                i = Math.abs(e);
            return r + A(Math.floor(i / 60), 2) + n + A(i % 60, 2)
        }
        var B = {
                G: function(e, t, n) {
                    var r = +(e.getUTCFullYear() > 0);
                    switch (t) {
                        case "G":
                        case "GG":
                        case "GGG":
                            return n.era(r, {
                                width: "abbreviated"
                            });
                        case "GGGGG":
                            return n.era(r, {
                                width: "narrow"
                            });
                        default:
                            return n.era(r, {
                                width: "wide"
                            })
                    }
                },
                y: function(e, t, n) {
                    if ("yo" === t) {
                        var r = e.getUTCFullYear(),
                            i = r > 0 ? r : 1 - r;
                        return n.ordinalNumber(i, {
                            unit: "year"
                        })
                    }
                    return M.y(e, t)
                },
                Y: function(e, t, n, r) {
                    var i = $(e, r),
                        o = i > 0 ? i : 1 - i;
                    return "YY" === t ? A(o % 100, 2) : "Yo" === t ? n.ordinalNumber(o, {
                        unit: "year"
                    }) : A(o, t.length)
                },
                R: function(e, t) {
                    return A(p(e), t.length)
                },
                u: function(e, t) {
                    return A(e.getUTCFullYear(), t.length)
                },
                Q: function(e, t, n) {
                    var r = Math.ceil((e.getUTCMonth() + 1) / 3);
                    switch (t) {
                        case "Q":
                            return String(r);
                        case "QQ":
                            return A(r, 2);
                        case "Qo":
                            return n.ordinalNumber(r, {
                                unit: "quarter"
                            });
                        case "QQQ":
                            return n.quarter(r, {
                                width: "abbreviated",
                                context: "formatting"
                            });
                        case "QQQQQ":
                            return n.quarter(r, {
                                width: "narrow",
                                context: "formatting"
                            });
                        default:
                            return n.quarter(r, {
                                width: "wide",
                                context: "formatting"
                            })
                    }
                },
                q: function(e, t, n) {
                    var r = Math.ceil((e.getUTCMonth() + 1) / 3);
                    switch (t) {
                        case "q":
                            return String(r);
                        case "qq":
                            return A(r, 2);
                        case "qo":
                            return n.ordinalNumber(r, {
                                unit: "quarter"
                            });
                        case "qqq":
                            return n.quarter(r, {
                                width: "abbreviated",
                                context: "standalone"
                            });
                        case "qqqqq":
                            return n.quarter(r, {
                                width: "narrow",
                                context: "standalone"
                            });
                        default:
                            return n.quarter(r, {
                                width: "wide",
                                context: "standalone"
                            })
                    }
                },
                M: function(e, t, n) {
                    var r = e.getUTCMonth();
                    switch (t) {
                        case "M":
                        case "MM":
                            return M.M(e, t);
                        case "Mo":
                            return n.ordinalNumber(r + 1, {
                                unit: "month"
                            });
                        case "MMM":
                            return n.month(r, {
                                width: "abbreviated",
                                context: "formatting"
                            });
                        case "MMMMM":
                            return n.month(r, {
                                width: "narrow",
                                context: "formatting"
                            });
                        default:
                            return n.month(r, {
                                width: "wide",
                                context: "formatting"
                            })
                    }
                },
                L: function(e, t, n) {
                    var r = e.getUTCMonth();
                    switch (t) {
                        case "L":
                            return String(r + 1);
                        case "LL":
                            return A(r + 1, 2);
                        case "Lo":
                            return n.ordinalNumber(r + 1, {
                                unit: "month"
                            });
                        case "LLL":
                            return n.month(r, {
                                width: "abbreviated",
                                context: "standalone"
                            });
                        case "LLLLL":
                            return n.month(r, {
                                width: "narrow",
                                context: "standalone"
                            });
                        default:
                            return n.month(r, {
                                width: "wide",
                                context: "standalone"
                            })
                    }
                },
                w: function(e, t, n, r) {
                    var i = P(e, r);
                    return "wo" === t ? n.ordinalNumber(i, {
                        unit: "week"
                    }) : A(i, t.length)
                },
                I: function(e, t, n) {
                    var r = m(e);
                    return "Io" === t ? n.ordinalNumber(r, {
                        unit: "week"
                    }) : A(r, t.length)
                },
                d: function(e, t, n) {
                    return "do" === t ? n.ordinalNumber(e.getUTCDate(), {
                        unit: "date"
                    }) : M.d(e, t)
                },
                D: function(e, t, n) {
                    var r = f(e);
                    return "Do" === t ? n.ordinalNumber(r, {
                        unit: "dayOfYear"
                    }) : A(r, t.length)
                },
                E: function(e, t, n) {
                    var r = e.getUTCDay();
                    switch (t) {
                        case "E":
                        case "EE":
                        case "EEE":
                            return n.day(r, {
                                width: "abbreviated",
                                context: "formatting"
                            });
                        case "EEEEE":
                            return n.day(r, {
                                width: "narrow",
                                context: "formatting"
                            });
                        case "EEEEEE":
                            return n.day(r, {
                                width: "short",
                                context: "formatting"
                            });
                        default:
                            return n.day(r, {
                                width: "wide",
                                context: "formatting"
                            })
                    }
                },
                e: function(e, t, n, r) {
                    var i = e.getUTCDay(),
                        o = (i - r.weekStartsOn + 8) % 7 || 7;
                    switch (t) {
                        case "e":
                            return String(o);
                        case "ee":
                            return A(o, 2);
                        case "eo":
                            return n.ordinalNumber(o, {
                                unit: "day"
                            });
                        case "eee":
                            return n.day(i, {
                                width: "abbreviated",
                                context: "formatting"
                            });
                        case "eeeee":
                            return n.day(i, {
                                width: "narrow",
                                context: "formatting"
                            });
                        case "eeeeee":
                            return n.day(i, {
                                width: "short",
                                context: "formatting"
                            });
                        default:
                            return n.day(i, {
                                width: "wide",
                                context: "formatting"
                            })
                    }
                },
                c: function(e, t, n, r) {
                    var i = e.getUTCDay(),
                        o = (i - r.weekStartsOn + 8) % 7 || 7;
                    switch (t) {
                        case "c":
                            return String(o);
                        case "cc":
                            return A(o, t.length);
                        case "co":
                            return n.ordinalNumber(o, {
                                unit: "day"
                            });
                        case "ccc":
                            return n.day(i, {
                                width: "abbreviated",
                                context: "standalone"
                            });
                        case "ccccc":
                            return n.day(i, {
                                width: "narrow",
                                context: "standalone"
                            });
                        case "cccccc":
                            return n.day(i, {
                                width: "short",
                                context: "standalone"
                            });
                        default:
                            return n.day(i, {
                                width: "wide",
                                context: "standalone"
                            })
                    }
                },
                i: function(e, t, n) {
                    var r = e.getUTCDay(),
                        i = 0 === r ? 7 : r;
                    switch (t) {
                        case "i":
                            return String(i);
                        case "ii":
                            return A(i, t.length);
                        case "io":
                            return n.ordinalNumber(i, {
                                unit: "day"
                            });
                        case "iii":
                            return n.day(r, {
                                width: "abbreviated",
                                context: "formatting"
                            });
                        case "iiiii":
                            return n.day(r, {
                                width: "narrow",
                                context: "formatting"
                            });
                        case "iiiiii":
                            return n.day(r, {
                                width: "short",
                                context: "formatting"
                            });
                        default:
                            return n.day(r, {
                                width: "wide",
                                context: "formatting"
                            })
                    }
                },
                a: function(e, t, n) {
                    var r = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
                    switch (t) {
                        case "a":
                        case "aa":
                            return n.dayPeriod(r, {
                                width: "abbreviated",
                                context: "formatting"
                            });
                        case "aaa":
                            return n.dayPeriod(r, {
                                width: "abbreviated",
                                context: "formatting"
                            }).toLowerCase();
                        case "aaaaa":
                            return n.dayPeriod(r, {
                                width: "narrow",
                                context: "formatting"
                            });
                        default:
                            return n.dayPeriod(r, {
                                width: "wide",
                                context: "formatting"
                            })
                    }
                },
                b: function(e, t, n) {
                    var r, i = e.getUTCHours();
                    switch (r = 12 === i ? C.noon : 0 === i ? C.midnight : i / 12 >= 1 ? "pm" : "am", t) {
                        case "b":
                        case "bb":
                            return n.dayPeriod(r, {
                                width: "abbreviated",
                                context: "formatting"
                            });
                        case "bbb":
                            return n.dayPeriod(r, {
                                width: "abbreviated",
                                context: "formatting"
                            }).toLowerCase();
                        case "bbbbb":
                            return n.dayPeriod(r, {
                                width: "narrow",
                                context: "formatting"
                            });
                        default:
                            return n.dayPeriod(r, {
                                width: "wide",
                                context: "formatting"
                            })
                    }
                },
                B: function(e, t, n) {
                    var r, i = e.getUTCHours();
                    switch (r = i >= 17 ? C.evening : i >= 12 ? C.afternoon : i >= 4 ? C.morning : C.night, t) {
                        case "B":
                        case "BB":
                        case "BBB":
                            return n.dayPeriod(r, {
                                width: "abbreviated",
                                context: "formatting"
                            });
                        case "BBBBB":
                            return n.dayPeriod(r, {
                                width: "narrow",
                                context: "formatting"
                            });
                        default:
                            return n.dayPeriod(r, {
                                width: "wide",
                                context: "formatting"
                            })
                    }
                },
                h: function(e, t, n) {
                    if ("ho" === t) {
                        var r = e.getUTCHours() % 12;
                        return 0 === r && (r = 12), n.ordinalNumber(r, {
                            unit: "hour"
                        })
                    }
                    return M.h(e, t)
                },
                H: function(e, t, n) {
                    return "Ho" === t ? n.ordinalNumber(e.getUTCHours(), {
                        unit: "hour"
                    }) : M.H(e, t)
                },
                K: function(e, t, n) {
                    var r = e.getUTCHours() % 12;
                    return "Ko" === t ? n.ordinalNumber(r, {
                        unit: "hour"
                    }) : A(r, t.length)
                },
                k: function(e, t, n) {
                    var r = e.getUTCHours();
                    return (0 === r && (r = 24), "ko" === t) ? n.ordinalNumber(r, {
                        unit: "hour"
                    }) : A(r, t.length)
                },
                m: function(e, t, n) {
                    return "mo" === t ? n.ordinalNumber(e.getUTCMinutes(), {
                        unit: "minute"
                    }) : M.m(e, t)
                },
                s: function(e, t, n) {
                    return "so" === t ? n.ordinalNumber(e.getUTCSeconds(), {
                        unit: "second"
                    }) : M.s(e, t)
                },
                S: function(e, t) {
                    return M.S(e, t)
                },
                X: function(e, t, n, r) {
                    var i = (r._originalDate || e).getTimezoneOffset();
                    if (0 === i) return "Z";
                    switch (t) {
                        case "X":
                            return E(i);
                        case "XXXX":
                        case "XX":
                            return x(i);
                        default:
                            return x(i, ":")
                    }
                },
                x: function(e, t, n, r) {
                    var i = (r._originalDate || e).getTimezoneOffset();
                    switch (t) {
                        case "x":
                            return E(i);
                        case "xxxx":
                        case "xx":
                            return x(i);
                        default:
                            return x(i, ":")
                    }
                },
                O: function(e, t, n, r) {
                    var i = (r._originalDate || e).getTimezoneOffset();
                    switch (t) {
                        case "O":
                        case "OO":
                        case "OOO":
                            return "GMT" + O(i, ":");
                        default:
                            return "GMT" + x(i, ":")
                    }
                },
                z: function(e, t, n, r) {
                    var i = (r._originalDate || e).getTimezoneOffset();
                    switch (t) {
                        case "z":
                        case "zz":
                        case "zzz":
                            return "GMT" + O(i, ":");
                        default:
                            return "GMT" + x(i, ":")
                    }
                },
                t: function(e, t, n, r) {
                    return A(Math.floor((r._originalDate || e).getTime() / 1e3), t.length)
                },
                T: function(e, t, n, r) {
                    return A((r._originalDate || e).getTime(), t.length)
                }
            },
            I = function(e, t) {
                switch (e) {
                    case "P":
                        return t.date({
                            width: "short"
                        });
                    case "PP":
                        return t.date({
                            width: "medium"
                        });
                    case "PPP":
                        return t.date({
                            width: "long"
                        });
                    default:
                        return t.date({
                            width: "full"
                        })
                }
            },
            D = function(e, t) {
                switch (e) {
                    case "p":
                        return t.time({
                            width: "short"
                        });
                    case "pp":
                        return t.time({
                            width: "medium"
                        });
                    case "ppp":
                        return t.time({
                            width: "long"
                        });
                    default:
                        return t.time({
                            width: "full"
                        })
                }
            },
            _ = function(e, t) {
                var n, r = e.match(/(P+)(p+)?/) || [],
                    i = r[1],
                    o = r[2];
                if (!o) return I(e, t);
                switch (i) {
                    case "P":
                        n = t.dateTime({
                            width: "short"
                        });
                        break;
                    case "PP":
                        n = t.dateTime({
                            width: "medium"
                        });
                        break;
                    case "PPP":
                        n = t.dateTime({
                            width: "long"
                        });
                        break;
                    default:
                        n = t.dateTime({
                            width: "full"
                        })
                }
                return n.replace("{{date}}", I(i, t)).replace("{{time}}", D(o, t))
            },
            k = {
                p: D,
                P: _
            };

        function G(e) {
            var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
            return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime()
        }
        var N = ["D", "DD"],
            L = ["YY", "YYYY"];

        function R(e) {
            return -1 !== N.indexOf(e)
        }

        function H(e) {
            return -1 !== L.indexOf(e)
        }

        function j(e, t, n) {
            if ("YYYY" === e) throw RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
            if ("YY" === e) throw RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
            if ("D" === e) throw RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
            if ("DD" === e) throw RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))
        }
        var F = {
                lessThanXSeconds: {
                    one: "less than a second",
                    other: "less than {{count}} seconds"
                },
                xSeconds: {
                    one: "1 second",
                    other: "{{count}} seconds"
                },
                halfAMinute: "half a minute",
                lessThanXMinutes: {
                    one: "less than a minute",
                    other: "less than {{count}} minutes"
                },
                xMinutes: {
                    one: "1 minute",
                    other: "{{count}} minutes"
                },
                aboutXHours: {
                    one: "about 1 hour",
                    other: "about {{count}} hours"
                },
                xHours: {
                    one: "1 hour",
                    other: "{{count}} hours"
                },
                xDays: {
                    one: "1 day",
                    other: "{{count}} days"
                },
                aboutXWeeks: {
                    one: "about 1 week",
                    other: "about {{count}} weeks"
                },
                xWeeks: {
                    one: "1 week",
                    other: "{{count}} weeks"
                },
                aboutXMonths: {
                    one: "about 1 month",
                    other: "about {{count}} months"
                },
                xMonths: {
                    one: "1 month",
                    other: "{{count}} months"
                },
                aboutXYears: {
                    one: "about 1 year",
                    other: "about {{count}} years"
                },
                xYears: {
                    one: "1 year",
                    other: "{{count}} years"
                },
                overXYears: {
                    one: "over 1 year",
                    other: "over {{count}} years"
                },
                almostXYears: {
                    one: "almost 1 year",
                    other: "almost {{count}} years"
                }
            },
            V = function(e, t, n) {
                var r, i = F[e];
                return (r = "string" == typeof i ? i : 1 === t ? i.one : i.other.replace("{{count}}", t.toString()), null != n && n.addSuffix) ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r
            };

        function U(e) {
            return function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.width ? String(t.width) : e.defaultWidth;
                return e.formats[n] || e.formats[e.defaultWidth]
            }
        }
        var W = {
                full: "h:mm:ss a zzzz",
                long: "h:mm:ss a z",
                medium: "h:mm:ss a",
                short: "h:mm a"
            },
            X = {
                full: "{{date}} 'at' {{time}}",
                long: "{{date}} 'at' {{time}}",
                medium: "{{date}}, {{time}}",
                short: "{{date}}, {{time}}"
            },
            K = {
                date: U({
                    formats: {
                        full: "EEEE, MMMM do, y",
                        long: "MMMM do, y",
                        medium: "MMM d, y",
                        short: "MM/dd/yyyy"
                    },
                    defaultWidth: "full"
                }),
                time: U({
                    formats: W,
                    defaultWidth: "full"
                }),
                dateTime: U({
                    formats: X,
                    defaultWidth: "full"
                })
            },
            z = {
                lastWeek: "'last' eeee 'at' p",
                yesterday: "'yesterday at' p",
                today: "'today at' p",
                tomorrow: "'tomorrow at' p",
                nextWeek: "eeee 'at' p",
                other: "P"
            },
            q = function(e, t, n, r) {
                return z[e]
            };

        function Y(e) {
            return function(t, n) {
                var r;
                if ("formatting" === (null != n && n.context ? String(n.context) : "standalone") && e.formattingValues) {
                    var i = e.defaultFormattingWidth || e.defaultWidth,
                        o = null != n && n.width ? String(n.width) : i;
                    r = e.formattingValues[o] || e.formattingValues[i]
                } else {
                    var a = e.defaultWidth,
                        s = null != n && n.width ? String(n.width) : e.defaultWidth;
                    r = e.values[s] || e.values[a]
                }
                return r[e.argumentCallback ? e.argumentCallback(t) : t]
            }
        }
        var Q = {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
            },
            Z = {
                narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            },
            J = {
                narrow: ["S", "M", "T", "W", "T", "F", "S"],
                short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            ee = {
                narrow: {
                    am: "a",
                    pm: "p",
                    midnight: "mi",
                    noon: "n",
                    morning: "morning",
                    afternoon: "afternoon",
                    evening: "evening",
                    night: "night"
                },
                abbreviated: {
                    am: "AM",
                    pm: "PM",
                    midnight: "midnight",
                    noon: "noon",
                    morning: "morning",
                    afternoon: "afternoon",
                    evening: "evening",
                    night: "night"
                },
                wide: {
                    am: "a.m.",
                    pm: "p.m.",
                    midnight: "midnight",
                    noon: "noon",
                    morning: "morning",
                    afternoon: "afternoon",
                    evening: "evening",
                    night: "night"
                }
            },
            et = {
                narrow: {
                    am: "a",
                    pm: "p",
                    midnight: "mi",
                    noon: "n",
                    morning: "in the morning",
                    afternoon: "in the afternoon",
                    evening: "in the evening",
                    night: "at night"
                },
                abbreviated: {
                    am: "AM",
                    pm: "PM",
                    midnight: "midnight",
                    noon: "noon",
                    morning: "in the morning",
                    afternoon: "in the afternoon",
                    evening: "in the evening",
                    night: "at night"
                },
                wide: {
                    am: "a.m.",
                    pm: "p.m.",
                    midnight: "midnight",
                    noon: "noon",
                    morning: "in the morning",
                    afternoon: "in the afternoon",
                    evening: "in the evening",
                    night: "at night"
                }
            },
            en = {
                ordinalNumber: function(e, t) {
                    var n = Number(e),
                        r = n % 100;
                    if (r > 20 || r < 10) switch (r % 10) {
                        case 1:
                            return n + "st";
                        case 2:
                            return n + "nd";
                        case 3:
                            return n + "rd"
                    }
                    return n + "th"
                },
                era: Y({
                    values: {
                        narrow: ["B", "A"],
                        abbreviated: ["BC", "AD"],
                        wide: ["Before Christ", "Anno Domini"]
                    },
                    defaultWidth: "wide"
                }),
                quarter: Y({
                    values: Q,
                    defaultWidth: "wide",
                    argumentCallback: function(e) {
                        return e - 1
                    }
                }),
                month: Y({
                    values: Z,
                    defaultWidth: "wide"
                }),
                day: Y({
                    values: J,
                    defaultWidth: "wide"
                }),
                dayPeriod: Y({
                    values: ee,
                    defaultWidth: "wide",
                    formattingValues: et,
                    defaultFormattingWidth: "wide"
                })
            };

        function er(e) {
            return function(t) {
                var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = r.width,
                    o = i && e.matchPatterns[i] || e.matchPatterns[e.defaultMatchWidth],
                    a = t.match(o);
                if (!a) return null;
                var s = a[0],
                    u = i && e.parsePatterns[i] || e.parsePatterns[e.defaultParseWidth],
                    d = Array.isArray(u) ? eo(u, function(e) {
                        return e.test(s)
                    }) : ei(u, function(e) {
                        return e.test(s)
                    });
                return n = e.valueCallback ? e.valueCallback(d) : d, {
                    value: n = r.valueCallback ? r.valueCallback(n) : n,
                    rest: t.slice(s.length)
                }
            }
        }

        function ei(e, t) {
            for (var n in e)
                if (e.hasOwnProperty(n) && t(e[n])) return n
        }

        function eo(e, t) {
            for (var n = 0; n < e.length; n++)
                if (t(e[n])) return n
        }
        var ea = {
                narrow: /^(b|a)/i,
                abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                wide: /^(before christ|before common era|anno domini|common era)/i
            },
            es = {
                any: [/^b/i, /^(a|c)/i]
            },
            eu = {
                narrow: /^[1234]/i,
                abbreviated: /^q[1234]/i,
                wide: /^[1234](th|st|nd|rd)? quarter/i
            },
            ed = {
                any: [/1/i, /2/i, /3/i, /4/i]
            },
            el = {
                narrow: /^[jfmasond]/i,
                abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
            },
            ec = {
                narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
            },
            ef = {
                narrow: /^[smtwf]/i,
                short: /^(su|mo|tu|we|th|fr|sa)/i,
                abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
            },
            eh = {
                narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
            },
            ep = {
                narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
            },
            eg = {
                any: {
                    am: /^a/i,
                    pm: /^p/i,
                    midnight: /^mi/i,
                    noon: /^no/i,
                    morning: /morning/i,
                    afternoon: /afternoon/i,
                    evening: /evening/i,
                    night: /night/i
                }
            },
            eb = {
                code: "en-US",
                formatDistance: V,
                formatLong: K,
                formatRelative: q,
                localize: en,
                match: {
                    ordinalNumber: function(e) {
                        return function(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = t.match(e.matchPattern);
                            if (!r) return null;
                            var i = r[0],
                                o = t.match(e.parsePattern);
                            if (!o) return null;
                            var a = e.valueCallback ? e.valueCallback(o[0]) : o[0];
                            return {
                                value: a = n.valueCallback ? n.valueCallback(a) : a,
                                rest: t.slice(i.length)
                            }
                        }
                    }({
                        matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                        parsePattern: /\d+/i,
                        valueCallback: function(e) {
                            return parseInt(e, 10)
                        }
                    }),
                    era: er({
                        matchPatterns: ea,
                        defaultMatchWidth: "wide",
                        parsePatterns: es,
                        defaultParseWidth: "any"
                    }),
                    quarter: er({
                        matchPatterns: eu,
                        defaultMatchWidth: "wide",
                        parsePatterns: ed,
                        defaultParseWidth: "any",
                        valueCallback: function(e) {
                            return e + 1
                        }
                    }),
                    month: er({
                        matchPatterns: el,
                        defaultMatchWidth: "wide",
                        parsePatterns: ec,
                        defaultParseWidth: "any"
                    }),
                    day: er({
                        matchPatterns: ef,
                        defaultMatchWidth: "wide",
                        parsePatterns: eh,
                        defaultParseWidth: "any"
                    }),
                    dayPeriod: er({
                        matchPatterns: ep,
                        defaultMatchWidth: "any",
                        parsePatterns: eg,
                        defaultParseWidth: "any"
                    })
                },
                options: {
                    weekStartsOn: 0,
                    firstWeekContainsDate: 1
                }
            },
            em = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
            ev = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
            ey = /^'([^]*?)'?$/,
            eS = /''/g,
            e$ = /[a-zA-Z]/;

        function eT(e, t, n) {
            i(2, arguments);
            var r, o, d, c, f, h, p, g, b, m, v, S, $, T, w, P, A, M, C = String(t),
                O = y(),
                E = null !== (r = null !== (o = null == n ? void 0 : n.locale) && void 0 !== o ? o : O.locale) && void 0 !== r ? r : eb,
                x = u(null !== (d = null !== (c = null !== (f = null !== (h = null == n ? void 0 : n.firstWeekContainsDate) && void 0 !== h ? h : null == n ? void 0 : null === (p = n.locale) || void 0 === p ? void 0 : null === (g = p.options) || void 0 === g ? void 0 : g.firstWeekContainsDate) && void 0 !== f ? f : O.firstWeekContainsDate) && void 0 !== c ? c : null === (b = O.locale) || void 0 === b ? void 0 : null === (m = b.options) || void 0 === m ? void 0 : m.firstWeekContainsDate) && void 0 !== d ? d : 1);
            if (!(x >= 1 && x <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
            var I = u(null !== (v = null !== (S = null !== ($ = null !== (T = null == n ? void 0 : n.weekStartsOn) && void 0 !== T ? T : null == n ? void 0 : null === (w = n.locale) || void 0 === w ? void 0 : null === (P = w.options) || void 0 === P ? void 0 : P.weekStartsOn) && void 0 !== $ ? $ : O.weekStartsOn) && void 0 !== S ? S : null === (A = O.locale) || void 0 === A ? void 0 : null === (M = A.options) || void 0 === M ? void 0 : M.weekStartsOn) && void 0 !== v ? v : 0);
            if (!(I >= 0 && I <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
            if (!E.localize) throw RangeError("locale must contain localize property");
            if (!E.formatLong) throw RangeError("locale must contain formatLong property");
            var D = a(e);
            if (!s(D)) throw RangeError("Invalid time value");
            var _ = G(D),
                N = l(D, _),
                L = {
                    firstWeekContainsDate: x,
                    weekStartsOn: I,
                    locale: E,
                    _originalDate: D
                };
            return C.match(ev).map(function(e) {
                var t = e[0];
                return "p" === t || "P" === t ? (0, k[t])(e, E.formatLong) : e
            }).join("").match(em).map(function(r) {
                if ("''" === r) return "'";
                var i = r[0];
                if ("'" === i) return ew(r);
                var o = B[i];
                if (o) return !(null != n && n.useAdditionalWeekYearTokens) && H(r) && j(r, t, String(e)), !(null != n && n.useAdditionalDayOfYearTokens) && R(r) && j(r, t, String(e)), o(N, r, E.localize, L);
                if (i.match(e$)) throw RangeError("Format string contains an unescaped latin alphabet character `" + i + "`");
                return r
            }).join("")
        }

        function ew(e) {
            var t = e.match(ey);
            return t ? t[1].replace(eS, "'") : e
        }
    },
    2988: function(e, t, n) {
        var r = n(1755),
            i = n(6665).each;

        function o(e, t) {
            this.query = e, this.isUnconditional = t, this.handlers = [], this.mql = window.matchMedia(e);
            var n = this;
            this.listener = function(e) {
                n.mql = e.currentTarget || e, n.assess()
            }, this.mql.addListener(this.listener)
        }
        o.prototype = {
            constuctor: o,
            addHandler: function(e) {
                var t = new r(e);
                this.handlers.push(t), this.matches() && t.on()
            },
            removeHandler: function(e) {
                var t = this.handlers;
                i(t, function(n, r) {
                    if (n.equals(e)) return n.destroy(), !t.splice(r, 1)
                })
            },
            matches: function() {
                return this.mql.matches || this.isUnconditional
            },
            clear: function() {
                i(this.handlers, function(e) {
                    e.destroy()
                }), this.mql.removeListener(this.listener), this.handlers.length = 0
            },
            assess: function() {
                var e = this.matches() ? "on" : "off";
                i(this.handlers, function(t) {
                    t[e]()
                })
            }
        }, e.exports = o
    },
    8177: function(e, t, n) {
        var r = n(2988),
            i = n(6665),
            o = i.each,
            a = i.isFunction,
            s = i.isArray;

        function u() {
            if (!window.matchMedia) throw Error("matchMedia not present, legacy browsers require a polyfill");
            this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches
        }
        u.prototype = {
            constructor: u,
            register: function(e, t, n) {
                var i = this.queries,
                    u = n && this.browserIsIncapable;
                return i[e] || (i[e] = new r(e, u)), a(t) && (t = {
                    match: t
                }), s(t) || (t = [t]), o(t, function(t) {
                    a(t) && (t = {
                        match: t
                    }), i[e].addHandler(t)
                }), this
            },
            unregister: function(e, t) {
                var n = this.queries[e];
                return n && (t ? n.removeHandler(t) : (n.clear(), delete this.queries[e])), this
            }
        }, e.exports = u
    },
    1755: function(e) {
        function t(e) {
            this.options = e, e.deferSetup || this.setup()
        }
        t.prototype = {
            constructor: t,
            setup: function() {
                this.options.setup && this.options.setup(), this.initialised = !0
            },
            on: function() {
                this.initialised || this.setup(), this.options.match && this.options.match()
            },
            off: function() {
                this.options.unmatch && this.options.unmatch()
            },
            destroy: function() {
                this.options.destroy ? this.options.destroy() : this.off()
            },
            equals: function(e) {
                return this.options === e || this.options.match === e
            }
        }, e.exports = t
    },
    6665: function(e) {
        function t(e, t) {
            for (var n = 0, r = e.length; n < r && !1 !== t(e[n], n); n++);
        }

        function n(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        }

        function r(e) {
            return "function" == typeof e
        }
        e.exports = {
            isFunction: r,
            isArray: n,
            each: t
        }
    },
    4974: function(e, t, n) {
        var r = n(8177);
        e.exports = new r
    },
    1605: function(e) {
        ! function(t, n, r) {
            "use strict";
            "function" == typeof window.define && window.define.amd ? window.define(r) : e.exports ? e.exports = r() : n.exports ? n.exports = r() : n.Fingerprint2 = r()
        }(0, this, function() {
            "use strict";
            var e = function(t) {
                if (!(this instanceof e)) return new e(t);
                this.options = this.extend(t, {
                    swfContainerId: "fingerprintjs2",
                    swfPath: "flash/compiled/FontList.swf",
                    detectScreenOrientation: !0,
                    sortPluginsFor: [/palemoon/i],
                    userDefinedFonts: [],
                    excludeDoNotTrack: !0,
                    excludePixelRatio: !0
                }), this.nativeForEach = Array.prototype.forEach, this.nativeMap = Array.prototype.map
            };
            return e.prototype = {
                extend: function(e, t) {
                    if (null == e) return t;
                    for (var n in e) null != e[n] && t[n] !== e[n] && (t[n] = e[n]);
                    return t
                },
                get: function(e) {
                    var t = this,
                        n = {
                            data: [],
                            addPreprocessedComponent: function(e) {
                                var r = e.value;
                                "function" == typeof t.options.preprocessor && (r = t.options.preprocessor(e.key, r)), n.data.push({
                                    key: e.key,
                                    value: r
                                })
                            }
                        };
                    n = this.userAgentKey(n), n = this.languageKey(n), n = this.colorDepthKey(n), n = this.deviceMemoryKey(n), n = this.pixelRatioKey(n), n = this.hardwareConcurrencyKey(n), n = this.screenResolutionKey(n), n = this.availableScreenResolutionKey(n), n = this.timezoneOffsetKey(n), n = this.sessionStorageKey(n), n = this.localStorageKey(n), n = this.indexedDbKey(n), n = this.addBehaviorKey(n), n = this.openDatabaseKey(n), n = this.cpuClassKey(n), n = this.platformKey(n), n = this.doNotTrackKey(n), n = this.pluginsKey(n), n = this.canvasKey(n), n = this.webglKey(n), n = this.webglVendorAndRendererKey(n), n = this.adBlockKey(n), n = this.hasLiedLanguagesKey(n), n = this.hasLiedResolutionKey(n), n = this.hasLiedOsKey(n), n = this.hasLiedBrowserKey(n), n = this.touchSupportKey(n), n = this.customEntropyFunction(n), this.fontsKey(n, function(n) {
                        t.audioKey(n, function(n) {
                            var r = [];
                            return t.each(n.data, function(e) {
                                var t = e.value;
                                t && "function" == typeof t.join ? r.push(t.join(";")) : r.push(t)
                            }), e(t.x64hash128(r.join("~~~"), 31), n.data)
                        })
                    })
                },
                audioKey: function(e, t) {
                    if (this.options.excludeAudioFP) return t(e);
                    var n = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                    if (null == n) return e.addPreprocessedComponent({
                        key: "audio_fp",
                        value: null
                    }), t(e);
                    var r = new n(1, 44100, 44100),
                        i = r.createOscillator();
                    i.type = "triangle", i.frequency.setValueAtTime(1e4, r.currentTime);
                    var o = r.createDynamicsCompressor();
                    this.each([
                        ["threshold", -50],
                        ["knee", 40],
                        ["ratio", 12],
                        ["reduction", -20],
                        ["attack", 0],
                        ["release", .25]
                    ], function(e) {
                        void 0 !== o[e[0]] && "function" == typeof o[e[0]].setValueAtTime && o[e[0]].setValueAtTime(e[1], r.currentTime)
                    }), r.oncomplete = function(n) {
                        var r = n.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce(function(e, t) {
                            return e + Math.abs(t)
                        }, 0).toString();
                        return i.disconnect(), o.disconnect(), e.addPreprocessedComponent({
                            key: "audio_fp",
                            value: r
                        }), t(e)
                    }, i.connect(o), o.connect(r.destination), i.start(0), r.startRendering()
                },
                customEntropyFunction: function(e) {
                    return "function" == typeof this.options.customFunction && e.addPreprocessedComponent({
                        key: "custom",
                        value: this.options.customFunction()
                    }), e
                },
                userAgentKey: function(e) {
                    return this.options.excludeUserAgent || e.addPreprocessedComponent({
                        key: "user_agent",
                        value: this.getUserAgent()
                    }), e
                },
                getUserAgent: function() {
                    return navigator.userAgent
                },
                languageKey: function(e) {
                    return this.options.excludeLanguage || e.addPreprocessedComponent({
                        key: "language",
                        value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || ""
                    }), e
                },
                colorDepthKey: function(e) {
                    return this.options.excludeColorDepth || e.addPreprocessedComponent({
                        key: "color_depth",
                        value: window.screen.colorDepth || -1
                    }), e
                },
                deviceMemoryKey: function(e) {
                    return this.options.excludeDeviceMemory || e.addPreprocessedComponent({
                        key: "device_memory",
                        value: this.getDeviceMemory()
                    }), e
                },
                getDeviceMemory: function() {
                    return navigator.deviceMemory || -1
                },
                pixelRatioKey: function(e) {
                    return this.options.excludePixelRatio || e.addPreprocessedComponent({
                        key: "pixel_ratio",
                        value: this.getPixelRatio()
                    }), e
                },
                getPixelRatio: function() {
                    return window.devicePixelRatio || ""
                },
                screenResolutionKey: function(e) {
                    return this.options.excludeScreenResolution ? e : this.getScreenResolution(e)
                },
                getScreenResolution: function(e) {
                    var t;
                    return t = this.options.detectScreenOrientation && window.screen.height > window.screen.width ? [window.screen.height, window.screen.width] : [window.screen.width, window.screen.height], e.addPreprocessedComponent({
                        key: "resolution",
                        value: t
                    }), e
                },
                availableScreenResolutionKey: function(e) {
                    return this.options.excludeAvailableScreenResolution ? e : this.getAvailableScreenResolution(e)
                },
                getAvailableScreenResolution: function(e) {
                    var t;
                    return window.screen.availWidth && window.screen.availHeight && (t = this.options.detectScreenOrientation ? window.screen.availHeight > window.screen.availWidth ? [window.screen.availHeight, window.screen.availWidth] : [window.screen.availWidth, window.screen.availHeight] : [window.screen.availHeight, window.screen.availWidth]), void 0 !== t && e.addPreprocessedComponent({
                        key: "available_resolution",
                        value: t
                    }), e
                },
                timezoneOffsetKey: function(e) {
                    return this.options.excludeTimezoneOffset || e.addPreprocessedComponent({
                        key: "timezone_offset",
                        value: (new Date).getTimezoneOffset()
                    }), e
                },
                sessionStorageKey: function(e) {
                    return !this.options.excludeSessionStorage && this.hasSessionStorage() && e.addPreprocessedComponent({
                        key: "session_storage",
                        value: 1
                    }), e
                },
                localStorageKey: function(e) {
                    return !this.options.excludeSessionStorage && this.hasLocalStorage() && e.addPreprocessedComponent({
                        key: "local_storage",
                        value: 1
                    }), e
                },
                indexedDbKey: function(e) {
                    return !this.options.excludeIndexedDB && this.hasIndexedDB() && e.addPreprocessedComponent({
                        key: "indexed_db",
                        value: 1
                    }), e
                },
                addBehaviorKey: function(e) {
                    return !this.options.excludeAddBehavior && document.body && document.body.addBehavior && e.addPreprocessedComponent({
                        key: "add_behavior",
                        value: 1
                    }), e
                },
                openDatabaseKey: function(e) {
                    return !this.options.excludeOpenDatabase && window.openDatabase && e.addPreprocessedComponent({
                        key: "open_database",
                        value: 1
                    }), e
                },
                cpuClassKey: function(e) {
                    return this.options.excludeCpuClass || e.addPreprocessedComponent({
                        key: "cpu_class",
                        value: this.getNavigatorCpuClass()
                    }), e
                },
                platformKey: function(e) {
                    return this.options.excludePlatform || e.addPreprocessedComponent({
                        key: "navigator_platform",
                        value: this.getNavigatorPlatform()
                    }), e
                },
                doNotTrackKey: function(e) {
                    return this.options.excludeDoNotTrack || e.addPreprocessedComponent({
                        key: "do_not_track",
                        value: this.getDoNotTrack()
                    }), e
                },
                canvasKey: function(e) {
                    return !this.options.excludeCanvas && this.isCanvasSupported() && e.addPreprocessedComponent({
                        key: "canvas",
                        value: this.getCanvasFp()
                    }), e
                },
                webglKey: function(e) {
                    return !this.options.excludeWebGL && this.isWebGlSupported() && e.addPreprocessedComponent({
                        key: "webgl",
                        value: this.getWebglFp()
                    }), e
                },
                webglVendorAndRendererKey: function(e) {
                    return !this.options.excludeWebGLVendorAndRenderer && this.isWebGlSupported() && e.addPreprocessedComponent({
                        key: "webgl_vendor",
                        value: this.getWebglVendorAndRenderer()
                    }), e
                },
                adBlockKey: function(e) {
                    return this.options.excludeAdBlock || e.addPreprocessedComponent({
                        key: "adblock",
                        value: this.getAdBlock()
                    }), e
                },
                hasLiedLanguagesKey: function(e) {
                    return this.options.excludeHasLiedLanguages || e.addPreprocessedComponent({
                        key: "has_lied_languages",
                        value: this.getHasLiedLanguages()
                    }), e
                },
                hasLiedResolutionKey: function(e) {
                    return this.options.excludeHasLiedResolution || e.addPreprocessedComponent({
                        key: "has_lied_resolution",
                        value: this.getHasLiedResolution()
                    }), e
                },
                hasLiedOsKey: function(e) {
                    return this.options.excludeHasLiedOs || e.addPreprocessedComponent({
                        key: "has_lied_os",
                        value: this.getHasLiedOs()
                    }), e
                },
                hasLiedBrowserKey: function(e) {
                    return this.options.excludeHasLiedBrowser || e.addPreprocessedComponent({
                        key: "has_lied_browser",
                        value: this.getHasLiedBrowser()
                    }), e
                },
                fontsKey: function(e, t) {
                    return this.options.excludeJsFonts ? this.flashFontsKey(e, t) : this.jsFontsKey(e, t)
                },
                flashFontsKey: function(e, t) {
                    return this.options.excludeFlashFonts ? t(e) : this.hasSwfObjectLoaded() && this.hasMinFlashInstalled() ? void 0 === this.options.swfPath ? t(e) : void this.loadSwfAndDetectFonts(function(n) {
                        e.addPreprocessedComponent({
                            key: "swf_fonts",
                            value: n.join(";")
                        }), t(e)
                    }) : t(e)
                },
                jsFontsKey: function(e, t) {
                    var n = this;
                    return setTimeout(function() {
                        var r = ["monospace", "sans-serif", "serif"],
                            i = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
                        n.options.extendedJsFonts && (i = i.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"])), i = (i = i.concat(n.options.userDefinedFonts)).filter(function(e, t) {
                            return i.indexOf(e) === t
                        });
                        var o = document.getElementsByTagName("body")[0],
                            a = document.createElement("div"),
                            s = document.createElement("div"),
                            u = {},
                            d = {},
                            l = function() {
                                var e = document.createElement("span");
                                return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "72px", e.style.fontStyle = "normal", e.style.fontWeight = "normal", e.style.letterSpacing = "normal", e.style.lineBreak = "auto", e.style.lineHeight = "normal", e.style.textTransform = "none", e.style.textAlign = "left", e.style.textDecoration = "none", e.style.textShadow = "none", e.style.whiteSpace = "normal", e.style.wordBreak = "normal", e.style.wordSpacing = "normal", e.innerHTML = "mmmmmmmmmmlli", e
                            },
                            c = function(e) {
                                for (var t = !1, n = 0; n < r.length && !(t = e[n].offsetWidth !== u[r[n]] || e[n].offsetHeight !== d[r[n]]); n++);
                                return t
                            },
                            f = function() {
                                for (var e = [], t = 0, n = r.length; t < n; t++) {
                                    var i = l();
                                    i.style.fontFamily = r[t], a.appendChild(i), e.push(i)
                                }
                                return e
                            }();
                        o.appendChild(a);
                        for (var h = 0, p = r.length; h < p; h++) u[r[h]] = f[h].offsetWidth, d[r[h]] = f[h].offsetHeight;
                        var g = function() {
                            for (var e, t, n, o = {}, a = 0, u = i.length; a < u; a++) {
                                for (var d = [], c = 0, f = r.length; c < f; c++) {
                                    var h = (e = i[a], t = r[c], n = void 0, (n = l()).style.fontFamily = "'" + e + "'," + t, n);
                                    s.appendChild(h), d.push(h)
                                }
                                o[i[a]] = d
                            }
                            return o
                        }();
                        o.appendChild(s);
                        for (var b = [], m = 0, v = i.length; m < v; m++) c(g[i[m]]) && b.push(i[m]);
                        o.removeChild(s), o.removeChild(a), e.addPreprocessedComponent({
                            key: "js_fonts",
                            value: b
                        }), t(e)
                    }, 1)
                },
                pluginsKey: function(e) {
                    return this.options.excludePlugins || (this.isIE() ? this.options.excludeIEPlugins || e.addPreprocessedComponent({
                        key: "ie_plugins",
                        value: this.getIEPlugins()
                    }) : e.addPreprocessedComponent({
                        key: "regular_plugins",
                        value: this.getRegularPlugins()
                    })), e
                },
                getRegularPlugins: function() {
                    var e = [];
                    if (navigator.plugins)
                        for (var t = 0, n = navigator.plugins.length; t < n; t++) navigator.plugins[t] && e.push(navigator.plugins[t]);
                    return this.pluginsShouldBeSorted() && (e = e.sort(function(e, t) {
                        return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
                    })), this.map(e, function(e) {
                        var t = this.map(e, function(e) {
                            return [e.type, e.suffixes].join("~")
                        }).join(",");
                        return [e.name, e.description, t].join("::")
                    }, this)
                },
                getIEPlugins: function() {
                    var e = [];
                    return (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) && (e = this.map(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], function(e) {
                        try {
                            return new window.ActiveXObject(e), e
                        } catch (e) {
                            return null
                        }
                    })), navigator.plugins && (e = e.concat(this.getRegularPlugins())), e
                },
                pluginsShouldBeSorted: function() {
                    for (var e = !1, t = 0, n = this.options.sortPluginsFor.length; t < n; t++) {
                        var r = this.options.sortPluginsFor[t];
                        if (navigator.userAgent.match(r)) {
                            e = !0;
                            break
                        }
                    }
                    return e
                },
                touchSupportKey: function(e) {
                    return this.options.excludeTouchSupport || e.addPreprocessedComponent({
                        key: "touch_support",
                        value: this.getTouchSupport()
                    }), e
                },
                hardwareConcurrencyKey: function(e) {
                    return this.options.excludeHardwareConcurrency || e.addPreprocessedComponent({
                        key: "hardware_concurrency",
                        value: this.getHardwareConcurrency()
                    }), e
                },
                hasSessionStorage: function() {
                    try {
                        return !!window.sessionStorage
                    } catch (e) {
                        return !0
                    }
                },
                hasLocalStorage: function() {
                    try {
                        return !!window.localStorage
                    } catch (e) {
                        return !0
                    }
                },
                hasIndexedDB: function() {
                    try {
                        return !!window.indexedDB
                    } catch (e) {
                        return !0
                    }
                },
                getHardwareConcurrency: function() {
                    return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "unknown"
                },
                getNavigatorCpuClass: function() {
                    return navigator.cpuClass ? navigator.cpuClass : "unknown"
                },
                getNavigatorPlatform: function() {
                    return navigator.platform ? navigator.platform : "unknown"
                },
                getDoNotTrack: function() {
                    return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : "unknown"
                },
                getTouchSupport: function() {
                    var e = 0,
                        t = !1;
                    void 0 !== navigator.maxTouchPoints ? e = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (e = navigator.msMaxTouchPoints);
                    try {
                        document.createEvent("TouchEvent"), t = !0
                    } catch (e) {}
                    return [e, t, "ontouchstart" in window]
                },
                getCanvasFp: function() {
                    var e = [],
                        t = document.createElement("canvas");
                    t.width = 2e3, t.height = 200, t.style.display = "inline";
                    var n = t.getContext("2d");
                    return n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), e.push("canvas winding:" + (!1 === n.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", this.options.dontUseFakeFontInCanvas ? n.font = "11pt Arial" : n.font = "11pt no-real-font-123", n.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.2)", n.font = "18pt Arial", n.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45), n.globalCompositeOperation = "multiply", n.fillStyle = "rgb(255,0,255)", n.beginPath(), n.arc(50, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(0,255,255)", n.beginPath(), n.arc(100, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,255,0)", n.beginPath(), n.arc(75, 100, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,0,255)", n.arc(75, 75, 75, 0, 2 * Math.PI, !0), n.arc(75, 75, 25, 0, 2 * Math.PI, !0), n.fill("evenodd"), t.toDataURL && e.push("canvas fp:" + t.toDataURL()), e.join("~")
                },
                getWebglFp: function() {
                    var e, t = function(t) {
                        return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), "[" + t[0] + ", " + t[1] + "]"
                    };
                    if (!(e = this.getWebglCanvas())) return null;
                    var n = [],
                        r = e.createBuffer();
                    e.bindBuffer(e.ARRAY_BUFFER, r);
                    var i = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                    e.bufferData(e.ARRAY_BUFFER, i, e.STATIC_DRAW), r.itemSize = 3, r.numItems = 3;
                    var o = e.createProgram(),
                        a = e.createShader(e.VERTEX_SHADER);
                    e.shaderSource(a, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), e.compileShader(a);
                    var s = e.createShader(e.FRAGMENT_SHADER);
                    e.shaderSource(s, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), e.compileShader(s), e.attachShader(o, a), e.attachShader(o, s), e.linkProgram(o), e.useProgram(o), o.vertexPosAttrib = e.getAttribLocation(o, "attrVertex"), o.offsetUniform = e.getUniformLocation(o, "uniformOffset"), e.enableVertexAttribArray(o.vertexPosArray), e.vertexAttribPointer(o.vertexPosAttrib, r.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(o.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, r.numItems);
                    try {
                        n.push(e.canvas.toDataURL())
                    } catch (e) {}
                    n.push("extensions:" + (e.getSupportedExtensions() || []).join(";")), n.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))), n.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))), n.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)), n.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")), n.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)), n.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)), n.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)), n.push("webgl max anisotropy:" + function(e) {
                        var t = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                        if (t) {
                            var n = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                            return 0 === n && (n = 2), n
                        }
                        return null
                    }(e)), n.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), n.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)), n.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)), n.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)), n.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), n.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)), n.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)), n.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)), n.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), n.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)), n.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))), n.push("webgl red bits:" + e.getParameter(e.RED_BITS)), n.push("webgl renderer:" + e.getParameter(e.RENDERER)), n.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)), n.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)), n.push("webgl vendor:" + e.getParameter(e.VENDOR)), n.push("webgl version:" + e.getParameter(e.VERSION));
                    try {
                        var u = e.getExtension("WEBGL_debug_renderer_info");
                        u && (n.push("webgl unmasked vendor:" + e.getParameter(u.UNMASKED_VENDOR_WEBGL)), n.push("webgl unmasked renderer:" + e.getParameter(u.UNMASKED_RENDERER_WEBGL)))
                    } catch (e) {}
                    if (!e.getShaderPrecisionFormat) return n.join("~");
                    var d = this;
                    return d.each(["FLOAT", "INT"], function(t) {
                        d.each(["VERTEX", "FRAGMENT"], function(r) {
                            d.each(["HIGH", "MEDIUM", "LOW"], function(i) {
                                d.each(["precision", "rangeMin", "rangeMax"], function(o) {
                                    var a = e.getShaderPrecisionFormat(e[r + "_SHADER"], e[i + "_" + t])[o];
                                    "precision" !== o && (o = "precision " + o);
                                    var s = ["webgl ", r.toLowerCase(), " shader ", i.toLowerCase(), " ", t.toLowerCase(), " ", o, ":", a];
                                    n.push(s.join(""))
                                })
                            })
                        })
                    }), n.join("~")
                },
                getWebglVendorAndRenderer: function() {
                    try {
                        var e = this.getWebglCanvas(),
                            t = e.getExtension("WEBGL_debug_renderer_info");
                        return e.getParameter(t.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(t.UNMASKED_RENDERER_WEBGL)
                    } catch (e) {
                        return null
                    }
                },
                getAdBlock: function() {
                    var e = document.createElement("div");
                    e.innerHTML = "&nbsp;";
                    var t = (e.className = "adsbox", !1);
                    try {
                        document.body.appendChild(e), t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
                    } catch (e) {
                        t = !1
                    }
                    return t
                },
                getHasLiedLanguages: function() {
                    if (void 0 !== navigator.languages) try {
                        if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0
                    } catch (e) {
                        return !0
                    }
                    return !1
                },
                getHasLiedResolution: function() {
                    return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
                },
                getHasLiedOs: function() {
                    var e, t = navigator.userAgent.toLowerCase(),
                        n = navigator.oscpu,
                        r = navigator.platform.toLowerCase();
                    return e = 0 <= t.indexOf("windows phone") ? "Windows Phone" : 0 <= t.indexOf("win") ? "Windows" : 0 <= t.indexOf("android") ? "Android" : 0 <= t.indexOf("linux") ? "Linux" : 0 <= t.indexOf("iphone") || 0 <= t.indexOf("ipad") ? "iOS" : 0 <= t.indexOf("mac") ? "Mac" : "Other", !!(("ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints) && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e || void 0 !== n && (0 <= (n = n.toLowerCase()).indexOf("win") && "Windows" !== e && "Windows Phone" !== e || 0 <= n.indexOf("linux") && "Linux" !== e && "Android" !== e || 0 <= n.indexOf("mac") && "Mac" !== e && "iOS" !== e || (-1 === n.indexOf("win") && -1 === n.indexOf("linux") && -1 === n.indexOf("mac")) != ("Other" === e))) || 0 <= r.indexOf("win") && "Windows" !== e && "Windows Phone" !== e || (0 <= r.indexOf("linux") || 0 <= r.indexOf("android") || 0 <= r.indexOf("pike")) && "Linux" !== e && "Android" !== e || (0 <= r.indexOf("mac") || 0 <= r.indexOf("ipad") || 0 <= r.indexOf("ipod") || 0 <= r.indexOf("iphone")) && "Mac" !== e && "iOS" !== e || (-1 === r.indexOf("win") && -1 === r.indexOf("linux") && -1 === r.indexOf("mac")) != ("Other" === e) || void 0 === navigator.plugins && "Windows" !== e && "Windows Phone" !== e
                },
                getHasLiedBrowser: function() {
                    var e, t = navigator.userAgent.toLowerCase(),
                        n = navigator.productSub;
                    if (("Chrome" === (e = 0 <= t.indexOf("firefox") ? "Firefox" : 0 <= t.indexOf("opera") || 0 <= t.indexOf("opr") ? "Opera" : 0 <= t.indexOf("chrome") ? "Chrome" : 0 <= t.indexOf("safari") ? "Safari" : 0 <= t.indexOf("trident") ? "Internet Explorer" : "Other") || "Safari" === e || "Opera" === e) && "20030107" !== n) return !0;
                    var r, i = eval.toString().length;
                    if (37 === i && "Safari" !== e && "Firefox" !== e && "Other" !== e || 39 === i && "Internet Explorer" !== e && "Other" !== e || 33 === i && "Chrome" !== e && "Opera" !== e && "Other" !== e) return !0;
                    try {
                        throw "a"
                    } catch (e) {
                        try {
                            e.toSource(), r = !0
                        } catch (e) {
                            r = !1
                        }
                    }
                    return !(!r || "Firefox" === e || "Other" === e)
                },
                isCanvasSupported: function() {
                    var e = document.createElement("canvas");
                    return !(!e.getContext || !e.getContext("2d"))
                },
                isWebGlSupported: function() {
                    if (!this.isCanvasSupported()) return !1;
                    var e = this.getWebglCanvas();
                    return !!window.WebGLRenderingContext && !!e
                },
                isIE: function() {
                    return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
                },
                hasSwfObjectLoaded: function() {
                    return void 0 !== window.swfobject
                },
                hasMinFlashInstalled: function() {
                    return window.swfobject.hasFlashPlayerVersion("9.0.0")
                },
                addFlashDivNode: function() {
                    var e = document.createElement("div");
                    e.setAttribute("id", this.options.swfContainerId), document.body.appendChild(e)
                },
                loadSwfAndDetectFonts: function(e) {
                    var t = "___fp_swf_loaded";
                    window[t] = function(t) {
                        e(t)
                    };
                    var n = this.options.swfContainerId;
                    this.addFlashDivNode();
                    var r = {
                        onReady: t
                    };
                    window.swfobject.embedSWF(this.options.swfPath, n, "1", "1", "9.0.0", !1, r, {
                        allowScriptAccess: "always",
                        menu: "false"
                    }, {})
                },
                getWebglCanvas: function() {
                    var e = document.createElement("canvas"),
                        t = null;
                    try {
                        t = e.getContext("webgl") || e.getContext("experimental-webgl")
                    } catch (e) {}
                    return t || (t = null), t
                },
                each: function(e, t, n) {
                    if (null !== e) {
                        if (this.nativeForEach && e.forEach === this.nativeForEach) e.forEach(t, n);
                        else if (e.length === +e.length) {
                            for (var r = 0, i = e.length; r < i; r++)
                                if (t.call(n, e[r], r, e) === {}) return
                        } else
                            for (var o in e)
                                if (e.hasOwnProperty(o) && t.call(n, e[o], o, e) === {}) return
                    }
                },
                map: function(e, t, n) {
                    var r = [];
                    return null == e ? r : this.nativeMap && e.map === this.nativeMap ? e.map(t, n) : (this.each(e, function(e, i, o) {
                        r[r.length] = t.call(n, e, i, o)
                    }), r)
                },
                x64Add: function(e, t) {
                    e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                    var n = [0, 0, 0, 0];
                    return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
                },
                x64Multiply: function(e, t) {
                    e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                    var n = [0, 0, 0, 0];
                    return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
                },
                x64Rotl: function(e, t) {
                    return 32 == (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
                },
                x64LeftShift: function(e, t) {
                    return 0 == (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
                },
                x64Xor: function(e, t) {
                    return [e[0] ^ t[0], e[1] ^ t[1]]
                },
                x64Fmix: function(e) {
                    return e = this.x64Xor(e, [0, e[0] >>> 1]), e = this.x64Multiply(e, [0xff51afd7, 0xed558ccd]), e = this.x64Xor(e, [0, e[0] >>> 1]), e = this.x64Multiply(e, [0xc4ceb9fe, 0x1a85ec53]), e = this.x64Xor(e, [0, e[0] >>> 1])
                },
                x64hash128: function(e, t) {
                    t = t || 0;
                    for (var n = (e = e || "").length % 16, r = e.length - n, i = [0, t], o = [0, t], a = [0, 0], s = [0, 0], u = [0x87c37b91, 0x114253d5], d = [0x4cf5ad43, 0x2745937f], l = 0; l < r; l += 16) a = [255 & e.charCodeAt(l + 4) | (255 & e.charCodeAt(l + 5)) << 8 | (255 & e.charCodeAt(l + 6)) << 16 | (255 & e.charCodeAt(l + 7)) << 24, 255 & e.charCodeAt(l) | (255 & e.charCodeAt(l + 1)) << 8 | (255 & e.charCodeAt(l + 2)) << 16 | (255 & e.charCodeAt(l + 3)) << 24], s = [255 & e.charCodeAt(l + 12) | (255 & e.charCodeAt(l + 13)) << 8 | (255 & e.charCodeAt(l + 14)) << 16 | (255 & e.charCodeAt(l + 15)) << 24, 255 & e.charCodeAt(l + 8) | (255 & e.charCodeAt(l + 9)) << 8 | (255 & e.charCodeAt(l + 10)) << 16 | (255 & e.charCodeAt(l + 11)) << 24], a = this.x64Multiply(a, u), a = this.x64Rotl(a, 31), a = this.x64Multiply(a, d), i = this.x64Xor(i, a), i = this.x64Rotl(i, 27), i = this.x64Add(i, o), i = this.x64Add(this.x64Multiply(i, [0, 5]), [0, 0x52dce729]), s = this.x64Multiply(s, d), s = this.x64Rotl(s, 33), s = this.x64Multiply(s, u), o = this.x64Xor(o, s), o = this.x64Rotl(o, 31), o = this.x64Add(o, i), o = this.x64Add(this.x64Multiply(o, [0, 5]), [0, 0x38495ab5]);
                    switch (a = [0, 0], s = [0, 0], n) {
                        case 15:
                            s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 14)], 48));
                        case 14:
                            s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 13)], 40));
                        case 13:
                            s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 12)], 32));
                        case 12:
                            s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 11)], 24));
                        case 11:
                            s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 10)], 16));
                        case 10:
                            s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 9)], 8));
                        case 9:
                            s = this.x64Xor(s, [0, e.charCodeAt(l + 8)]), s = this.x64Multiply(s, d), s = this.x64Rotl(s, 33), s = this.x64Multiply(s, u), o = this.x64Xor(o, s);
                        case 8:
                            a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 7)], 56));
                        case 7:
                            a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 6)], 48));
                        case 6:
                            a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 5)], 40));
                        case 5:
                            a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 4)], 32));
                        case 4:
                            a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 3)], 24));
                        case 3:
                            a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 2)], 16));
                        case 2:
                            a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 1)], 8));
                        case 1:
                            a = this.x64Xor(a, [0, e.charCodeAt(l)]), a = this.x64Multiply(a, u), a = this.x64Rotl(a, 31), a = this.x64Multiply(a, d), i = this.x64Xor(i, a)
                    }
                    return i = this.x64Xor(i, [0, e.length]), o = this.x64Xor(o, [0, e.length]), i = this.x64Add(i, o), o = this.x64Add(o, i), i = this.x64Fmix(i), o = this.x64Fmix(o), i = this.x64Add(i, o), o = this.x64Add(o, i), ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8)
                }
            }, e.VERSION = "1.8.0", e
        })
    },
    5503: function(e, t, n) {
        "use strict";
        n.d(t, {
            ZF: function() {
                return r.ZF
            }
        });
        var r = n(6159),
            i = "firebase",
            o = "9.9.1";
        (0, r.KN)(i, o, "app")
    },
    1639: function(e, t, n) {
        "use strict";
        n.d(t, {
            KL: function() {
                return tw
            },
            LP: function() {
                return tP
            },
            pQ: function() {
                return tA
            }
        });
        var r, i, o = n(6159),
            a = n(9337),
            s = n(4444),
            u = n(4095);
        let d = "@firebase/installations",
            l = "0.5.12",
            c = 1e4,
            f = `w:${l}`,
            h = "FIS_v2",
            p = "https://firebaseinstallations.googleapis.com/v1",
            g = 36e5,
            b = "installations",
            m = "Installations",
            v = {
                "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
                "not-registered": "Firebase Installation is not registered.",
                "installation-not-found": "Firebase Installation not found.",
                "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
                "app-offline": "Could not process request. Application offline.",
                "delete-pending-registration": "Can't delete installation while there is a pending registration request."
            },
            y = new s.LL(b, m, v);

        function S(e) {
            return e instanceof s.ZR && e.code.includes("request-failed")
        }

        function $({
            projectId: e
        }) {
            return `${p}/projects/${e}/installations`
        }

        function T(e) {
            return {
                token: e.token,
                requestStatus: 2,
                expiresIn: C(e.expiresIn),
                creationTime: Date.now()
            }
        }
        async function w(e, t) {
            let n = (await t.json()).error;
            return y.create("request-failed", {
                requestName: e,
                serverCode: n.code,
                serverMessage: n.message,
                serverStatus: n.status
            })
        }

        function P({
            apiKey: e
        }) {
            return new Headers({
                "Content-Type": "application/json",
                Accept: "application/json",
                "x-goog-api-key": e
            })
        }

        function A(e, {
            refreshToken: t
        }) {
            let n = P(e);
            return n.append("Authorization", O(t)), n
        }
        async function M(e) {
            let t = await e();
            return t.status >= 500 && t.status < 600 ? e() : t
        }

        function C(e) {
            return Number(e.replace("s", "000"))
        }

        function O(e) {
            return `${h} ${e}`
        }
        async function E({
            appConfig: e,
            heartbeatServiceProvider: t
        }, {
            fid: n
        }) {
            let r = $(e),
                i = P(e),
                o = t.getImmediate({
                    optional: !0
                });
            if (o) {
                let e = await o.getHeartbeatsHeader();
                e && i.append("x-firebase-client", e)
            }
            let a = {
                    method: "POST",
                    headers: i,
                    body: JSON.stringify({
                        fid: n,
                        authVersion: h,
                        appId: e.appId,
                        sdkVersion: f
                    })
                },
                s = await M(() => fetch(r, a));
            if (s.ok) {
                let e = await s.json();
                return {
                    fid: e.fid || n,
                    registrationStatus: 2,
                    refreshToken: e.refreshToken,
                    authToken: T(e.authToken)
                }
            }
            throw await w("Create Installation", s)
        }

        function x(e) {
            return new Promise(t => {
                setTimeout(t, e)
            })
        }

        function B(e) {
            return btoa(String.fromCharCode(...e)).replace(/\+/g, "-").replace(/\//g, "_")
        }
        let I = /^[cdef][\w-]{21}$/,
            D = "";

        function _() {
            try {
                let e = new Uint8Array(17);
                (self.crypto || self.msCrypto).getRandomValues(e), e[0] = 112 + e[0] % 16;
                let t = k(e);
                return I.test(t) ? t : D
            } catch (e) {
                return D
            }
        }

        function k(e) {
            return B(e).substr(0, 22)
        }

        function G(e) {
            return `${e.appName}!${e.appId}`
        }
        let N = new Map;

        function L(e, t) {
            let n = G(e);
            R(n, t), H(n, t)
        }

        function R(e, t) {
            let n = N.get(e);
            if (n)
                for (let e of n) e(t)
        }

        function H(e, t) {
            let n = F();
            n && n.postMessage({
                key: e,
                fid: t
            }), V()
        }
        let j = null;

        function F() {
            return !j && "BroadcastChannel" in self && ((j = new BroadcastChannel("[Firebase] FID Change")).onmessage = e => {
                R(e.data.key, e.data.fid)
            }), j
        }

        function V() {
            0 === N.size && j && (j.close(), j = null)
        }
        let U = "firebase-installations-database",
            W = 1,
            X = "firebase-installations-store",
            K = null;

        function z() {
            return K || (K = (0, u.X3)(U, W, {
                upgrade: (e, t) => {
                    0 === t && e.createObjectStore(X)
                }
            })), K
        }
        async function q(e, t) {
            let n = G(e),
                r = (await z()).transaction(X, "readwrite"),
                i = r.objectStore(X),
                o = await i.get(n);
            return await i.put(t, n), await r.done, o && o.fid === t.fid || L(e, t.fid), t
        }
        async function Y(e) {
            let t = G(e),
                n = (await z()).transaction(X, "readwrite");
            await n.objectStore(X).delete(t), await n.done
        }
        async function Q(e, t) {
            let n = G(e),
                r = (await z()).transaction(X, "readwrite"),
                i = r.objectStore(X),
                o = await i.get(n),
                a = t(o);
            return void 0 === a ? await i.delete(n) : await i.put(a, n), await r.done, a && (!o || o.fid !== a.fid) && L(e, a.fid), a
        }
        async function Z(e) {
            let t;
            let n = await Q(e.appConfig, n => {
                let r = ee(e, J(n));
                return t = r.registrationPromise, r.installationEntry
            });
            return n.fid === D ? {
                installationEntry: await t
            } : {
                installationEntry: n,
                registrationPromise: t
            }
        }

        function J(e) {
            return ei(e || {
                fid: _(),
                registrationStatus: 0
            })
        }

        function ee(e, t) {
            if (0 === t.registrationStatus) {
                if (!navigator.onLine) return {
                    installationEntry: t,
                    registrationPromise: Promise.reject(y.create("app-offline"))
                };
                let n = {
                        fid: t.fid,
                        registrationStatus: 1,
                        registrationTime: Date.now()
                    },
                    r = et(e, n);
                return {
                    installationEntry: n,
                    registrationPromise: r
                }
            }
            return 1 === t.registrationStatus ? {
                installationEntry: t,
                registrationPromise: en(e)
            } : {
                installationEntry: t
            }
        }
        async function et(e, t) {
            try {
                let n = await E(e, t);
                return q(e.appConfig, n)
            } catch (n) {
                throw S(n) && 409 === n.customData.serverCode ? await Y(e.appConfig) : await q(e.appConfig, {
                    fid: t.fid,
                    registrationStatus: 0
                }), n
            }
        }
        async function en(e) {
            let t = await er(e.appConfig);
            for (; 1 === t.registrationStatus;) await x(100), t = await er(e.appConfig);
            if (0 === t.registrationStatus) {
                let {
                    installationEntry: t,
                    registrationPromise: n
                } = await Z(e);
                return n || t
            }
            return t
        }

        function er(e) {
            return Q(e, e => {
                if (!e) throw y.create("installation-not-found");
                return ei(e)
            })
        }

        function ei(e) {
            return eo(e) ? {
                fid: e.fid,
                registrationStatus: 0
            } : e
        }

        function eo(e) {
            return 1 === e.registrationStatus && e.registrationTime + c < Date.now()
        }
        async function ea({
            appConfig: e,
            heartbeatServiceProvider: t
        }, n) {
            let r = es(e, n),
                i = A(e, n),
                o = t.getImmediate({
                    optional: !0
                });
            if (o) {
                let e = await o.getHeartbeatsHeader();
                e && i.append("x-firebase-client", e)
            }
            let a = {
                    method: "POST",
                    headers: i,
                    body: JSON.stringify({
                        installation: {
                            sdkVersion: f,
                            appId: e.appId
                        }
                    })
                },
                s = await M(() => fetch(r, a));
            if (s.ok) return T(await s.json());
            throw await w("Generate Auth Token", s)
        }

        function es(e, {
            fid: t
        }) {
            return `${$(e)}/${t}/authTokens:generate`
        }
        async function eu(e, t = !1) {
            let n;
            let r = await Q(e.appConfig, r => {
                if (!ef(r)) throw y.create("not-registered");
                let i = r.authToken;
                if (!t && eh(i)) return r;
                if (1 === i.requestStatus) return n = ed(e, t), r; {
                    if (!navigator.onLine) throw y.create("app-offline");
                    let t = eg(r);
                    return n = ec(e, t), t
                }
            });
            return n ? await n : r.authToken
        }
        async function ed(e, t) {
            let n = await el(e.appConfig);
            for (; 1 === n.authToken.requestStatus;) await x(100), n = await el(e.appConfig);
            let r = n.authToken;
            return 0 === r.requestStatus ? eu(e, t) : r
        }

        function el(e) {
            return Q(e, e => {
                if (!ef(e)) throw y.create("not-registered");
                return eb(e.authToken) ? Object.assign(Object.assign({}, e), {
                    authToken: {
                        requestStatus: 0
                    }
                }) : e
            })
        }
        async function ec(e, t) {
            try {
                let n = await ea(e, t),
                    r = Object.assign(Object.assign({}, t), {
                        authToken: n
                    });
                return await q(e.appConfig, r), n
            } catch (n) {
                if (S(n) && (401 === n.customData.serverCode || 404 === n.customData.serverCode)) await Y(e.appConfig);
                else {
                    let n = Object.assign(Object.assign({}, t), {
                        authToken: {
                            requestStatus: 0
                        }
                    });
                    await q(e.appConfig, n)
                }
                throw n
            }
        }

        function ef(e) {
            return void 0 !== e && 2 === e.registrationStatus
        }

        function eh(e) {
            return 2 === e.requestStatus && !ep(e)
        }

        function ep(e) {
            let t = Date.now();
            return t < e.creationTime || e.creationTime + e.expiresIn < t + g
        }

        function eg(e) {
            let t = {
                requestStatus: 1,
                requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, e), {
                authToken: t
            })
        }

        function eb(e) {
            return 1 === e.requestStatus && e.requestTime + c < Date.now()
        }
        async function em(e) {
            let t = e,
                {
                    installationEntry: n,
                    registrationPromise: r
                } = await Z(t);
            return r ? r.catch(console.error) : eu(t).catch(console.error), n.fid
        }
        async function ev(e, t = !1) {
            let n = e;
            return await ey(n), (await eu(n, t)).token
        }
        async function ey(e) {
            let {
                registrationPromise: t
            } = await Z(e);
            t && await t
        }

        function eS(e) {
            if (!e || !e.options) throw e$("App Configuration");
            if (!e.name) throw e$("App Name");
            for (let t of ["projectId", "apiKey", "appId"])
                if (!e.options[t]) throw e$(t);
            return {
                appName: e.name,
                projectId: e.options.projectId,
                apiKey: e.options.apiKey,
                appId: e.options.appId
            }
        }

        function e$(e) {
            return y.create("missing-app-config-values", {
                valueName: e
            })
        }
        let eT = "installations",
            ew = "installations-internal",
            eP = e => {
                let t = e.getProvider("app").getImmediate(),
                    n = eS(t),
                    r = (0, o.qX)(t, "heartbeat");
                return {
                    app: t,
                    appConfig: n,
                    heartbeatServiceProvider: r,
                    _delete: () => Promise.resolve()
                }
            },
            eA = e => {
                let t = e.getProvider("app").getImmediate(),
                    n = (0, o.qX)(t, eT).getImmediate();
                return {
                    getId: () => em(n),
                    getToken: e => ev(n, e)
                }
            };
        (function() {
            (0, o.Xd)(new a.wA(eT, eP, "PUBLIC")), (0, o.Xd)(new a.wA(ew, eA, "PRIVATE"))
        })(), (0, o.KN)(d, l), (0, o.KN)(d, l, "esm2017");
        let eM = "/firebase-messaging-sw.js",
            eC = "/firebase-cloud-messaging-push-scope",
            eO = "BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",
            eE = "https://fcmregistrations.googleapis.com/v1",
            ex = "google.c.a.c_id",
            eB = "google.c.a.c_l",
            eI = "google.c.a.ts",
            eD = "google.c.a.e";

        function e_(e) {
            return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
        }

        function ek(e) {
            let t = "=".repeat((4 - e.length % 4) % 4),
                n = atob((e + t).replace(/\-/g, "+").replace(/_/g, "/")),
                r = new Uint8Array(n.length);
            for (let e = 0; e < n.length; ++e) r[e] = n.charCodeAt(e);
            return r
        }! function(e) {
            e[e.DATA_MESSAGE = 1] = "DATA_MESSAGE", e[e.DISPLAY_NOTIFICATION = 3] = "DISPLAY_NOTIFICATION"
        }(r || (r = {})),
        function(e) {
            e.PUSH_RECEIVED = "push-received", e.NOTIFICATION_CLICKED = "notification-clicked"
        }(i || (i = {}));
        let eG = "fcm_token_details_db",
            eN = 5,
            eL = "fcm_token_object_Store";
        async function eR(e) {
            if ("databases" in indexedDB && !(await indexedDB.databases()).map(e => e.name).includes(eG)) return null;
            let t = null;
            return (await (0, u.X3)(eG, eN, {
                upgrade: async (n, r, i, o) => {
                    var a;
                    if (r < 2 || !n.objectStoreNames.contains(eL)) return;
                    let s = o.objectStore(eL),
                        u = await s.index("fcmSenderId").get(e);
                    if (await s.clear(), u) {
                        if (2 === r) {
                            let e = u;
                            if (!e.auth || !e.p256dh || !e.endpoint) return;
                            t = {
                                token: e.fcmToken,
                                createTime: null !== (a = e.createTime) && void 0 !== a ? a : Date.now(),
                                subscriptionOptions: {
                                    auth: e.auth,
                                    p256dh: e.p256dh,
                                    endpoint: e.endpoint,
                                    swScope: e.swScope,
                                    vapidKey: "string" == typeof e.vapidKey ? e.vapidKey : e_(e.vapidKey)
                                }
                            }
                        } else if (3 === r) {
                            let e = u;
                            t = {
                                token: e.fcmToken,
                                createTime: e.createTime,
                                subscriptionOptions: {
                                    auth: e_(e.auth),
                                    p256dh: e_(e.p256dh),
                                    endpoint: e.endpoint,
                                    swScope: e.swScope,
                                    vapidKey: e_(e.vapidKey)
                                }
                            }
                        } else if (4 === r) {
                            let e = u;
                            t = {
                                token: e.fcmToken,
                                createTime: e.createTime,
                                subscriptionOptions: {
                                    auth: e_(e.auth),
                                    p256dh: e_(e.p256dh),
                                    endpoint: e.endpoint,
                                    swScope: e.swScope,
                                    vapidKey: e_(e.vapidKey)
                                }
                            }
                        }
                    }
                }
            })).close(), await (0, u.Lj)(eG), await (0, u.Lj)("fcm_vapid_details_db"), await (0, u.Lj)("undefined"), eH(t) ? t : null
        }

        function eH(e) {
            if (!e || !e.subscriptionOptions) return !1;
            let {
                subscriptionOptions: t
            } = e;
            return "number" == typeof e.createTime && e.createTime > 0 && "string" == typeof e.token && e.token.length > 0 && "string" == typeof t.auth && t.auth.length > 0 && "string" == typeof t.p256dh && t.p256dh.length > 0 && "string" == typeof t.endpoint && t.endpoint.length > 0 && "string" == typeof t.swScope && t.swScope.length > 0 && "string" == typeof t.vapidKey && t.vapidKey.length > 0
        }
        let ej = "firebase-messaging-database",
            eF = 1,
            eV = "firebase-messaging-store",
            eU = null;

        function eW() {
            return eU || (eU = (0, u.X3)(ej, eF, {
                upgrade: (e, t) => {
                    0 === t && e.createObjectStore(eV)
                }
            })), eU
        }
        async function eX(e) {
            let t = eq(e),
                n = await eW(),
                r = await n.transaction(eV).objectStore(eV).get(t);
            if (r) return r; {
                let t = await eR(e.appConfig.senderId);
                if (t) return await eK(e, t), t
            }
        }
        async function eK(e, t) {
            let n = eq(e),
                r = (await eW()).transaction(eV, "readwrite");
            return await r.objectStore(eV).put(t, n), await r.done, t
        }
        async function ez(e) {
            let t = eq(e),
                n = (await eW()).transaction(eV, "readwrite");
            await n.objectStore(eV).delete(t), await n.done
        }

        function eq({
            appConfig: e
        }) {
            return e.appId
        }
        let eY = {
                "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
                "only-available-in-window": "This method is available in a Window context.",
                "only-available-in-sw": "This method is available in a service worker context.",
                "permission-default": "The notification permission was not granted and dismissed instead.",
                "permission-blocked": "The notification permission was not granted and blocked instead.",
                "unsupported-browser": "This browser doesn't support the API's required to use the Firebase SDK.",
                "indexed-db-unsupported": "This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",
                "failed-service-worker-registration": "We are unable to register the default service worker. {$browserErrorMessage}",
                "token-subscribe-failed": "A problem occurred while subscribing the user to FCM: {$errorInfo}",
                "token-subscribe-no-token": "FCM returned no token when subscribing the user to push.",
                "token-unsubscribe-failed": "A problem occurred while unsubscribing the user from FCM: {$errorInfo}",
                "token-update-failed": "A problem occurred while updating the user from FCM: {$errorInfo}",
                "token-update-no-token": "FCM returned no token when updating the user to push.",
                "use-sw-after-get-token": "The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",
                "invalid-sw-registration": "The input to useServiceWorker() must be a ServiceWorkerRegistration.",
                "invalid-bg-handler": "The input to setBackgroundMessageHandler() must be a function.",
                "invalid-vapid-key": "The public VAPID key must be a string.",
                "use-vapid-key-after-get-token": "The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."
            },
            eQ = new s.LL("messaging", "Messaging", eY);
        async function eZ(e, t) {
            var n;
            let r;
            let i = {
                method: "POST",
                headers: await e2(e),
                body: JSON.stringify(e3(t))
            };
            try {
                let t = await fetch(e1(e.appConfig), i);
                r = await t.json()
            } catch (e) {
                throw eQ.create("token-subscribe-failed", {
                    errorInfo: null === (n = e) || void 0 === n ? void 0 : n.toString()
                })
            }
            if (r.error) {
                let e = r.error.message;
                throw eQ.create("token-subscribe-failed", {
                    errorInfo: e
                })
            }
            if (!r.token) throw eQ.create("token-subscribe-no-token");
            return r.token
        }
        async function eJ(e, t) {
            var n;
            let r;
            let i = {
                method: "PATCH",
                headers: await e2(e),
                body: JSON.stringify(e3(t.subscriptionOptions))
            };
            try {
                let n = await fetch(`${e1(e.appConfig)}/${t.token}`, i);
                r = await n.json()
            } catch (e) {
                throw eQ.create("token-update-failed", {
                    errorInfo: null === (n = e) || void 0 === n ? void 0 : n.toString()
                })
            }
            if (r.error) {
                let e = r.error.message;
                throw eQ.create("token-update-failed", {
                    errorInfo: e
                })
            }
            if (!r.token) throw eQ.create("token-update-no-token");
            return r.token
        }
        async function e0(e, t) {
            var n;
            let r = {
                method: "DELETE",
                headers: await e2(e)
            };
            try {
                let n = await fetch(`${e1(e.appConfig)}/${t}`, r),
                    i = await n.json();
                if (i.error) {
                    let e = i.error.message;
                    throw eQ.create("token-unsubscribe-failed", {
                        errorInfo: e
                    })
                }
            } catch (e) {
                throw eQ.create("token-unsubscribe-failed", {
                    errorInfo: null === (n = e) || void 0 === n ? void 0 : n.toString()
                })
            }
        }

        function e1({
            projectId: e
        }) {
            return `${eE}/projects/${e}/registrations`
        }
        async function e2({
            appConfig: e,
            installations: t
        }) {
            let n = await t.getToken();
            return new Headers({
                "Content-Type": "application/json",
                Accept: "application/json",
                "x-goog-api-key": e.apiKey,
                "x-goog-firebase-installations-auth": `FIS ${n}`
            })
        }

        function e3({
            p256dh: e,
            auth: t,
            endpoint: n,
            vapidKey: r
        }) {
            let i = {
                web: {
                    endpoint: n,
                    auth: t,
                    p256dh: e
                }
            };
            return r !== eO && (i.web.applicationPubKey = r), i
        }
        let e5 = 6048e5;
        async function e4(e) {
            let t = await e8(e.swRegistration, e.vapidKey),
                n = {
                    vapidKey: e.vapidKey,
                    swScope: e.swRegistration.scope,
                    endpoint: t.endpoint,
                    auth: e_(t.getKey("auth")),
                    p256dh: e_(t.getKey("p256dh"))
                },
                r = await eX(e.firebaseDependencies);
            if (!r) return e6(e.firebaseDependencies, n);
            if (te(r.subscriptionOptions, n)) return Date.now() >= r.createTime + e5 ? e9(e, {
                token: r.token,
                createTime: Date.now(),
                subscriptionOptions: n
            }) : r.token;
            try {
                await e0(e.firebaseDependencies, r.token)
            } catch (e) {
                console.warn(e)
            }
            return e6(e.firebaseDependencies, n)
        }
        async function e7(e) {
            let t = await eX(e.firebaseDependencies);
            t && (await e0(e.firebaseDependencies, t.token), await ez(e.firebaseDependencies));
            let n = await e.swRegistration.pushManager.getSubscription();
            return !n || n.unsubscribe()
        }
        async function e9(e, t) {
            try {
                let n = await eJ(e.firebaseDependencies, t),
                    r = Object.assign(Object.assign({}, t), {
                        token: n,
                        createTime: Date.now()
                    });
                return await eK(e.firebaseDependencies, r), n
            } catch (t) {
                throw await e7(e), t
            }
        }
        async function e6(e, t) {
            let n = {
                token: await eZ(e, t),
                createTime: Date.now(),
                subscriptionOptions: t
            };
            return await eK(e, n), n.token
        }
        async function e8(e, t) {
            let n = await e.pushManager.getSubscription();
            return n || e.pushManager.subscribe({
                userVisibleOnly: !0,
                applicationServerKey: ek(t)
            })
        }

        function te(e, t) {
            let n = t.vapidKey === e.vapidKey,
                r = t.endpoint === e.endpoint,
                i = t.auth === e.auth,
                o = t.p256dh === e.p256dh;
            return n && r && i && o
        }

        function tt(e) {
            let t = {
                from: e.from,
                collapseKey: e.collapse_key,
                messageId: e.fcmMessageId
            };
            return tn(t, e), tr(t, e), ti(t, e), t
        }

        function tn(e, t) {
            if (!t.notification) return;
            e.notification = {};
            let n = t.notification.title;
            n && (e.notification.title = n);
            let r = t.notification.body;
            r && (e.notification.body = r);
            let i = t.notification.image;
            i && (e.notification.image = i)
        }

        function tr(e, t) {
            t.data && (e.data = t.data)
        }

        function ti(e, t) {
            var n, r, i, o, a;
            if (!t.fcmOptions && !(null === (n = t.notification) || void 0 === n ? void 0 : n.click_action)) return;
            e.fcmOptions = {};
            let s = null !== (i = null === (r = t.fcmOptions) || void 0 === r ? void 0 : r.link) && void 0 !== i ? i : null === (o = t.notification) || void 0 === o ? void 0 : o.click_action;
            s && (e.fcmOptions.link = s);
            let u = null === (a = t.fcmOptions) || void 0 === a ? void 0 : a.analytics_label;
            u && (e.fcmOptions.analyticsLabel = u)
        }

        function to(e) {
            return "object" == typeof e && !!e && ex in e
        }

        function ta(e, t) {
            let n = [];
            for (let r = 0; r < e.length; r++) n.push(e.charAt(r)), r < t.length && n.push(t.charAt(r));
            return n.join("")
        }

        function ts(e) {
            if (!e || !e.options) throw tu("App Configuration Object");
            if (!e.name) throw tu("App Name");
            let {
                options: t
            } = e;
            for (let e of ["projectId", "apiKey", "appId", "messagingSenderId"])
                if (!t[e]) throw tu(e);
            return {
                appName: e.name,
                projectId: t.projectId,
                apiKey: t.apiKey,
                appId: t.appId,
                senderId: t.messagingSenderId
            }
        }

        function tu(e) {
            return eQ.create("missing-app-config-values", {
                valueName: e
            })
        }
        ta("hts/frbslgigp.ogepscmv/ieo/eaylg", "tp:/ieaeogn-agolai.o/1frlglgc/o"), ta("AzSCbw63g1R0nCw85jG8", "Iaya3yLKwmgvh7cF0q4");
        class td {
            constructor(e, t, n) {
                this.deliveryMetricsExportedToBigQueryEnabled = !1, this.onBackgroundMessageHandler = null, this.onMessageHandler = null, this.logEvents = [], this.isLogServiceStarted = !1;
                let r = ts(e);
                this.firebaseDependencies = {
                    app: e,
                    appConfig: r,
                    installations: t,
                    analyticsProvider: n
                }
            }
            _delete() {
                return Promise.resolve()
            }
        }
        async function tl(e) {
            var t;
            try {
                e.swRegistration = await navigator.serviceWorker.register(eM, {
                    scope: eC
                }), e.swRegistration.update().catch(() => {})
            } catch (e) {
                throw eQ.create("failed-service-worker-registration", {
                    browserErrorMessage: null === (t = e) || void 0 === t ? void 0 : t.message
                })
            }
        }
        async function tc(e, t) {
            if (t || e.swRegistration || await tl(e), t || !e.swRegistration) {
                if (!(t instanceof ServiceWorkerRegistration)) throw eQ.create("invalid-sw-registration");
                e.swRegistration = t
            }
        }
        async function tf(e, t) {
            t ? e.vapidKey = t : e.vapidKey || (e.vapidKey = eO)
        }
        async function th(e, t) {
            if (!navigator) throw eQ.create("only-available-in-window");
            if ("default" === Notification.permission && await Notification.requestPermission(), "granted" !== Notification.permission) throw eQ.create("permission-blocked");
            return await tf(e, null == t ? void 0 : t.vapidKey), await tc(e, null == t ? void 0 : t.serviceWorkerRegistration), e4(e)
        }
        async function tp(e, t, n) {
            let r = tg(t);
            (await e.firebaseDependencies.analyticsProvider.get()).logEvent(r, {
                message_id: n[ex],
                message_name: n[eB],
                message_time: n[eI],
                message_device_time: Math.floor(Date.now() / 1e3)
            })
        }

        function tg(e) {
            switch (e) {
                case i.NOTIFICATION_CLICKED:
                    return "notification_open";
                case i.PUSH_RECEIVED:
                    return "notification_foreground";
                default:
                    throw Error()
            }
        }
        async function tb(e, t) {
            let n = t.data;
            if (!n.isFirebaseMessaging) return;
            e.onMessageHandler && n.messageType === i.PUSH_RECEIVED && ("function" == typeof e.onMessageHandler ? e.onMessageHandler(tt(n)) : e.onMessageHandler.next(tt(n)));
            let r = n.data;
            to(r) && "1" === r[eD] && await tp(e, n.messageType, r)
        }
        let tm = "@firebase/messaging",
            tv = "0.9.16",
            ty = e => {
                let t = new td(e.getProvider("app").getImmediate(), e.getProvider("installations-internal").getImmediate(), e.getProvider("analytics-internal"));
                return navigator.serviceWorker.addEventListener("message", e => tb(t, e)), t
            },
            tS = e => {
                let t = e.getProvider("messaging").getImmediate();
                return {
                    getToken: e => th(t, e)
                }
            };
        async function t$() {
            try {
                await (0, s.eu)()
            } catch (e) {
                return !1
            }
            return "undefined" != typeof window && (0, s.hl)() && (0, s.zI)() && "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && "fetch" in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey")
        }
        async function tT(e) {
            if (!navigator) throw eQ.create("only-available-in-window");
            return e.swRegistration || await tl(e), e7(e)
        }

        function tw(e = (0, o.Mq)()) {
            return t$().then(e => {
                if (!e) throw eQ.create("unsupported-browser")
            }, e => {
                throw eQ.create("indexed-db-unsupported")
            }), (0, o.qX)((0, s.m9)(e), "messaging").getImmediate()
        }
        async function tP(e, t) {
            return th(e = (0, s.m9)(e), t)
        }

        function tA(e) {
            return tT(e = (0, s.m9)(e))
        }! function() {
            (0, o.Xd)(new a.wA("messaging", ty, "PUBLIC")), (0, o.Xd)(new a.wA("messaging-internal", tS, "PRIVATE")), (0, o.KN)(tm, tv), (0, o.KN)(tm, tv, "esm2017")
        }()
    },
    8356: function(e) {
        function t(e) {
            this.options = e || {}, this.options.pool || (this.options.pool = 5), null != this.options.timeout || (this.options.timeout = 3e3), this._pool = [], this._queue = [], this._callbacks = {}, this.pool(this.options.pool)
        }
        t.emptyGif = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=", e.exports = t, t.prototype.load = function(e, t) {
            return this._callbacks[e] ? this._callbacks[e].push(t) : this._pool.length ? (this._callbacks[e] = [t], this._load(this._pool.pop(), e)) : this._queue.push(arguments), this
        }, t.prototype.pool = function(e) {
            var t;
            if (null == e) return this.options.pool;
            for (t = 0; t < e; t++) this._pool.push(new Image);
            return this.options.pool = e
        }, t.prototype._load = function(e, n) {
            var r, i = this;
            e.onerror = e.onload = function(o) {
                var a, s, u, d = i._callbacks[n];
                for ("error" == o.type || "timeout" == o.type ? ((a = Error("Could not load image: " + n)).type = o.type, a.event = o) : u = {
                        width: e.width,
                        height: e.height
                    }, s = 0; s < d.length; s++) d[s] && d[s](a, u);
                delete i._callbacks[n], e.onerror = e.onload = null, e.src = t.emptyGif, i._pool.push(e), r && clearTimeout(r), i._next()
            }, e.src = n, this.options.timeout && (r = setTimeout(function() {
                e.onerror({
                    type: "timeout"
                })
            }, this.options.timeout))
        }, t.prototype._next = function() {
            this._queue.length && this.load.apply(this, this._queue.shift())
        }
    },
    1143: function(e) {
        "use strict";
        var t = function(e, t, n, r, i, o, a, s) {
            if (!e) {
                var u;
                if (void 0 === t) u = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var d = [n, r, i, o, a, s],
                        l = 0;
                    (u = Error(t.replace(/%s/g, function() {
                        return d[l++]
                    }))).name = "Invariant Violation"
                }
                throw u.framesToPop = 1, u
            }
        };
        e.exports = t
    },
    5826: function(e) {
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == Object.prototype.toString.call(e)
        }
    },
    973: function(e, t, n) {
        var r = n(1169),
            i = function(e) {
                return /[height|width]$/.test(e)
            },
            o = function(e) {
                var t = "",
                    n = Object.keys(e);
                return n.forEach(function(o, a) {
                    var s = e[o];
                    i(o = r(o)) && "number" == typeof s && (s += "px"), !0 === s ? t += o : !1 === s ? t += "not " + o : t += "(" + o + ": " + s + ")", a < n.length - 1 && (t += " and ")
                }), t
            },
            a = function(e) {
                var t = "";
                return "string" == typeof e ? e : e instanceof Array ? (e.forEach(function(n, r) {
                    t += o(n), r < e.length - 1 && (t += ", ")
                }), t) : o(e)
            };
        e.exports = a
    },
    1296: function(e, t, n) {
        var r = "Expected a function",
            i = 0 / 0,
            o = "[object Symbol]",
            a = /^\s+|\s+$/g,
            s = /^[-+]0x[0-9a-f]+$/i,
            u = /^0b[01]+$/i,
            d = /^0o[0-7]+$/i,
            l = parseInt,
            c = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
            f = "object" == typeof self && self && self.Object === Object && self,
            h = c || f || Function("return this")(),
            p = Object.prototype.toString,
            g = Math.max,
            b = Math.min,
            m = function() {
                return h.Date.now()
            };

        function v(e, t, n) {
            var i, o, a, s, u, d, l = 0,
                c = !1,
                f = !1,
                h = !0;
            if ("function" != typeof e) throw TypeError(r);

            function p(t) {
                var n = i,
                    r = o;
                return i = o = void 0, l = t, s = e.apply(r, n)
            }

            function v(e) {
                return l = e, u = setTimeout(w, t), c ? p(e) : s
            }

            function S(e) {
                var n = e - d,
                    r = e - l,
                    i = t - n;
                return f ? b(i, a - r) : i
            }

            function $(e) {
                var n = e - d,
                    r = e - l;
                return void 0 === d || n >= t || n < 0 || f && r >= a
            }

            function w() {
                var e = m();
                if ($(e)) return P(e);
                u = setTimeout(w, S(e))
            }

            function P(e) {
                return (u = void 0, h && i) ? p(e) : (i = o = void 0, s)
            }

            function A() {
                void 0 !== u && clearTimeout(u), l = 0, i = d = o = u = void 0
            }

            function M() {
                return void 0 === u ? s : P(m())
            }

            function C() {
                var e = m(),
                    n = $(e);
                if (i = arguments, o = this, d = e, n) {
                    if (void 0 === u) return v(d);
                    if (f) return u = setTimeout(w, t), p(d)
                }
                return void 0 === u && (u = setTimeout(w, t)), s
            }
            return t = T(t) || 0, y(n) && (c = !!n.leading, a = (f = "maxWait" in n) ? g(T(n.maxWait) || 0, t) : a, h = "trailing" in n ? !!n.trailing : h), C.cancel = A, C.flush = M, C
        }

        function y(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function S(e) {
            return !!e && "object" == typeof e
        }

        function $(e) {
            return "symbol" == typeof e || S(e) && p.call(e) == o
        }

        function T(e) {
            if ("number" == typeof e) return e;
            if ($(e)) return i;
            if (y(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = y(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(a, "");
            var n = u.test(e);
            return n || d.test(e) ? l(e.slice(2), n ? 2 : 8) : s.test(e) ? i : +e
        }
        e.exports = v
    },
    3720: function(e) {
        e.exports = n;
        var t = null;
        try {
            t = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports
        } catch (e) {}

        function n(e, t, n) {
            this.low = 0 | e, this.high = 0 | t, this.unsigned = !!n
        }

        function r(e) {
            return !0 === (e && e.__isLong__)
        }
        n.prototype.__isLong__, Object.defineProperty(n.prototype, "__isLong__", {
            value: !0
        }), n.isLong = r;
        var i = {},
            o = {};

        function a(e, t) {
            var n, r, a;
            return t ? (e >>>= 0, (a = 0 <= e && e < 256) && (r = o[e])) ? r : (n = u(e, (0 | e) < 0 ? -1 : 0, !0), a && (o[e] = n), n) : (e |= 0, (a = -128 <= e && e < 128) && (r = i[e])) ? r : (n = u(e, e < 0 ? -1 : 0, !1), a && (i[e] = n), n)
        }

        function s(e, t) {
            if (isNaN(e)) return t ? m : b;
            if (t) {
                if (e < 0) return m;
                if (e >= h) return T
            } else {
                if (e <= -p) return w;
                if (e + 1 >= p) return $
            }
            return e < 0 ? s(-e, t).neg() : u(e % f | 0, e / f | 0, t)
        }

        function u(e, t, r) {
            return new n(e, t, r)
        }
        n.fromInt = a, n.fromNumber = s, n.fromBits = u;
        var d = Math.pow;

        function l(e, t, n) {
            if (0 === e.length) throw Error("empty string");
            if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) return b;
            if ("number" == typeof t ? (n = t, t = !1) : t = !!t, (n = n || 10) < 2 || 36 < n) throw RangeError("radix");
            if ((r = e.indexOf("-")) > 0) throw Error("interior hyphen");
            if (0 === r) return l(e.substring(1), t, n).neg();
            for (var r, i = s(d(n, 8)), o = b, a = 0; a < e.length; a += 8) {
                var u = Math.min(8, e.length - a),
                    c = parseInt(e.substring(a, a + u), n);
                if (u < 8) {
                    var f = s(d(n, u));
                    o = o.mul(f).add(s(c))
                } else o = (o = o.mul(i)).add(s(c))
            }
            return o.unsigned = t, o
        }

        function c(e, t) {
            return "number" == typeof e ? s(e, t) : "string" == typeof e ? l(e, t) : u(e.low, e.high, "boolean" == typeof t ? t : e.unsigned)
        }
        n.fromString = l, n.fromValue = c;
        var f = 0x100000000,
            h = 0xffffffffffffffff,
            p = 0x8000000000000000,
            g = a(0x1000000),
            b = a(0);
        n.ZERO = b;
        var m = a(0, !0);
        n.UZERO = m;
        var v = a(1);
        n.ONE = v;
        var y = a(1, !0);
        n.UONE = y;
        var S = a(-1);
        n.NEG_ONE = S;
        var $ = u(-1, 0x7fffffff, !1);
        n.MAX_VALUE = $;
        var T = u(-1, -1, !0);
        n.MAX_UNSIGNED_VALUE = T;
        var w = u(0, -0x80000000, !1);
        n.MIN_VALUE = w;
        var P = n.prototype;
        P.toInt = function() {
            return this.unsigned ? this.low >>> 0 : this.low
        }, P.toNumber = function() {
            return this.unsigned ? (this.high >>> 0) * f + (this.low >>> 0) : this.high * f + (this.low >>> 0)
        }, P.toString = function(e) {
            if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
            if (this.isZero()) return "0";
            if (this.isNegative()) {
                if (!this.eq(w)) return "-" + this.neg().toString(e);
                var t = s(e),
                    n = this.div(t),
                    r = n.mul(t).sub(this);
                return n.toString(e) + r.toInt().toString(e)
            }
            for (var i = s(d(e, 6), this.unsigned), o = this, a = "";;) {
                var u = o.div(i),
                    l = (o.sub(u.mul(i)).toInt() >>> 0).toString(e);
                if ((o = u).isZero()) return l + a;
                for (; l.length < 6;) l = "0" + l;
                a = "" + l + a
            }
        }, P.getHighBits = function() {
            return this.high
        }, P.getHighBitsUnsigned = function() {
            return this.high >>> 0
        }, P.getLowBits = function() {
            return this.low
        }, P.getLowBitsUnsigned = function() {
            return this.low >>> 0
        }, P.getNumBitsAbs = function() {
            if (this.isNegative()) return this.eq(w) ? 64 : this.neg().getNumBitsAbs();
            for (var e = 0 != this.high ? this.high : this.low, t = 31; t > 0 && (e & 1 << t) == 0; t--);
            return 0 != this.high ? t + 33 : t + 1
        }, P.isZero = function() {
            return 0 === this.high && 0 === this.low
        }, P.eqz = P.isZero, P.isNegative = function() {
            return !this.unsigned && this.high < 0
        }, P.isPositive = function() {
            return this.unsigned || this.high >= 0
        }, P.isOdd = function() {
            return (1 & this.low) == 1
        }, P.isEven = function() {
            return (1 & this.low) == 0
        }, P.equals = function(e) {
            return r(e) || (e = c(e)), (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && this.high === e.high && this.low === e.low
        }, P.eq = P.equals, P.notEquals = function(e) {
            return !this.eq(e)
        }, P.neq = P.notEquals, P.ne = P.notEquals, P.lessThan = function(e) {
            return 0 > this.comp(e)
        }, P.lt = P.lessThan, P.lessThanOrEqual = function(e) {
            return 0 >= this.comp(e)
        }, P.lte = P.lessThanOrEqual, P.le = P.lessThanOrEqual, P.greaterThan = function(e) {
            return this.comp(e) > 0
        }, P.gt = P.greaterThan, P.greaterThanOrEqual = function(e) {
            return this.comp(e) >= 0
        }, P.gte = P.greaterThanOrEqual, P.ge = P.greaterThanOrEqual, P.compare = function(e) {
            if (r(e) || (e = c(e)), this.eq(e)) return 0;
            var t = this.isNegative(),
                n = e.isNegative();
            return t && !n ? -1 : !t && n ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1
        }, P.comp = P.compare, P.negate = function() {
            return !this.unsigned && this.eq(w) ? w : this.not().add(v)
        }, P.neg = P.negate, P.add = function(e) {
            r(e) || (e = c(e));
            var t, n, i = this.high >>> 16,
                o = 65535 & this.high,
                a = this.low >>> 16,
                s = 65535 & this.low,
                d = e.high >>> 16,
                l = 65535 & e.high,
                f = e.low >>> 16,
                h = 65535 & e.low,
                p = 0,
                g = 0;
            return t = 0 + ((n = 0 + (s + h)) >>> 16), n &= 65535, t += a + f, g += t >>> 16, t &= 65535, g += o + l, p += g >>> 16, g &= 65535, p += i + d, u(t << 16 | n, (p &= 65535) << 16 | g, this.unsigned)
        }, P.subtract = function(e) {
            return r(e) || (e = c(e)), this.add(e.neg())
        }, P.sub = P.subtract, P.multiply = function(e) {
            if (this.isZero()) return b;
            if (r(e) || (e = c(e)), t) return u(t.mul(this.low, this.high, e.low, e.high), t.get_high(), this.unsigned);
            if (e.isZero()) return b;
            if (this.eq(w)) return e.isOdd() ? w : b;
            if (e.eq(w)) return this.isOdd() ? w : b;
            if (this.isNegative()) return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
            if (e.isNegative()) return this.mul(e.neg()).neg();
            if (this.lt(g) && e.lt(g)) return s(this.toNumber() * e.toNumber(), this.unsigned);
            var n, i, o = this.high >>> 16,
                a = 65535 & this.high,
                d = this.low >>> 16,
                l = 65535 & this.low,
                f = e.high >>> 16,
                h = 65535 & e.high,
                p = e.low >>> 16,
                m = 65535 & e.low,
                v = 0,
                y = 0;
            return n = 0 + ((i = 0 + l * m) >>> 16), i &= 65535, n += d * m, y += n >>> 16, n &= 65535, n += l * p, y += n >>> 16, n &= 65535, y += a * m, v += y >>> 16, y &= 65535, y += d * p, v += y >>> 16, y &= 65535, y += l * h, v += y >>> 16, y &= 65535, v += o * m + a * p + d * h + l * f, u(n << 16 | i, (v &= 65535) << 16 | y, this.unsigned)
        }, P.mul = P.multiply, P.divide = function(e) {
            if (r(e) || (e = c(e)), e.isZero()) throw Error("division by zero");
            if (t) {
                var n, i, o;
                return this.unsigned || -0x80000000 !== this.high || -1 !== e.low || -1 !== e.high ? u((this.unsigned ? t.div_u : t.div_s)(this.low, this.high, e.low, e.high), t.get_high(), this.unsigned) : this
            }
            if (this.isZero()) return this.unsigned ? m : b;
            if (this.unsigned) {
                if (e.unsigned || (e = e.toUnsigned()), e.gt(this)) return m;
                if (e.gt(this.shru(1))) return y;
                o = m
            } else {
                if (this.eq(w)) return e.eq(v) || e.eq(S) ? w : e.eq(w) ? v : (n = this.shr(1).div(e).shl(1)).eq(b) ? e.isNegative() ? v : S : (i = this.sub(e.mul(n)), o = n.add(i.div(e)));
                if (e.eq(w)) return this.unsigned ? m : b;
                if (this.isNegative()) return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
                if (e.isNegative()) return this.div(e.neg()).neg();
                o = b
            }
            for (i = this; i.gte(e);) {
                for (var a = Math.ceil(Math.log(n = Math.max(1, Math.floor(i.toNumber() / e.toNumber()))) / Math.LN2), l = a <= 48 ? 1 : d(2, a - 48), f = s(n), h = f.mul(e); h.isNegative() || h.gt(i);) n -= l, h = (f = s(n, this.unsigned)).mul(e);
                f.isZero() && (f = v), o = o.add(f), i = i.sub(h)
            }
            return o
        }, P.div = P.divide, P.modulo = function(e) {
            return (r(e) || (e = c(e)), t) ? u((this.unsigned ? t.rem_u : t.rem_s)(this.low, this.high, e.low, e.high), t.get_high(), this.unsigned) : this.sub(this.div(e).mul(e))
        }, P.mod = P.modulo, P.rem = P.modulo, P.not = function() {
            return u(~this.low, ~this.high, this.unsigned)
        }, P.and = function(e) {
            return r(e) || (e = c(e)), u(this.low & e.low, this.high & e.high, this.unsigned)
        }, P.or = function(e) {
            return r(e) || (e = c(e)), u(this.low | e.low, this.high | e.high, this.unsigned)
        }, P.xor = function(e) {
            return r(e) || (e = c(e)), u(this.low ^ e.low, this.high ^ e.high, this.unsigned)
        }, P.shiftLeft = function(e) {
            return (r(e) && (e = e.toInt()), 0 == (e &= 63)) ? this : e < 32 ? u(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : u(0, this.low << e - 32, this.unsigned)
        }, P.shl = P.shiftLeft, P.shiftRight = function(e) {
            return (r(e) && (e = e.toInt()), 0 == (e &= 63)) ? this : e < 32 ? u(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : u(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned)
        }, P.shr = P.shiftRight, P.shiftRightUnsigned = function(e) {
            if (r(e) && (e = e.toInt()), 0 == (e &= 63)) return this;
            var t = this.high;
            return e < 32 ? u(this.low >>> e | t << 32 - e, t >>> e, this.unsigned) : 32 === e ? u(t, 0, this.unsigned) : u(t >>> e - 32, 0, this.unsigned)
        }, P.shru = P.shiftRightUnsigned, P.shr_u = P.shiftRightUnsigned, P.toSigned = function() {
            return this.unsigned ? u(this.low, this.high, !1) : this
        }, P.toUnsigned = function() {
            return this.unsigned ? this : u(this.low, this.high, !0)
        }, P.toBytes = function(e) {
            return e ? this.toBytesLE() : this.toBytesBE()
        }, P.toBytesLE = function() {
            var e = this.high,
                t = this.low;
            return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24]
        }, P.toBytesBE = function() {
            var e = this.high,
                t = this.low;
            return [e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t]
        }, n.fromBytes = function(e, t, r) {
            return r ? n.fromBytesLE(e, t) : n.fromBytesBE(e, t)
        }, n.fromBytesLE = function(e, t) {
            return new n(e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24, e[4] | e[5] << 8 | e[6] << 16 | e[7] << 24, t)
        }, n.fromBytesBE = function(e, t) {
            return new n(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7], e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], t)
        }
    },
    2437: function(e) {
        ! function(e, t) {
            e(function() {
                "use strict";
                var e = {};
                e.mobileDetectRules = {
                    phones: {
                        iPhone: "\\biPhone\\b|\\biPod\\b",
                        BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
                        Pixel: "; \\bPixel\\b",
                        HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
                        Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 5X|Nexus 6",
                        Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                        Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
                        Samsung: "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F|SM-G610F|SM-G981B|SM-G892A|SM-A530F",
                        LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
                        Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533|SOV34|601SO|F8332",
                        Asus: "Asus.*Galaxy|PadFone.*Mobile",
                        Xiaomi: "^(?!.*\\bx11\\b).*xiaomi.*$|POCOPHONE F1|MI 8|Redmi Note 9S|Redmi Note 5A Prime|N2G47H|M2001J2G|M2001J2I|M1805E10A|M2004J11G|M1902F1G|M2002J9G|M2004J19G|M2003J6A1G",
                        NokiaLumia: "Lumia [0-9]{3,4}",
                        Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                        Palm: "PalmSource|Palm",
                        Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                        Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                        Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                        Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                        iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                        SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                        Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                        Alcatel: "Alcatel",
                        Nintendo: "Nintendo (3DS|Switch)",
                        Amoi: "Amoi",
                        INQ: "INQ",
                        OnePlus: "ONEPLUS",
                        GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
                    },
                    tablets: {
                        iPad: "iPad|iPad.*Mobile",
                        NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                        GoogleTablet: "Android.*Pixel C",
                        SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V|SM-P610|SM-T290|SM-T515|SM-T590|SM-T595|SM-T725|SM-T817P|SM-P585N0|SM-T395|SM-T295|SM-T865|SM-P610N|SM-P615|SM-T970|SM-T380|SM-T5950|SM-T905|SM-T231|SM-T500|SM-T860",
                        Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
                        SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                        HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                        AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
                        BlackBerryTablet: "PlayBook|RIM Tablet",
                        HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                        MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                        NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                        AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30|A3-A40",
                        ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                        LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                        FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                        PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                        LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X|TB-X704F|TB-X104F|TB3-X70F|TB-X705F|TB-8504F|TB3-X70L|TB3-710F|TB-X704L",
                        DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                        YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                        MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                        ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                        IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                        IRUTablet: "M702pro",
                        MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                        EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                        AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                        ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                        AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                        NokiaLumiaTablet: "Lumia 2520",
                        SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
                        PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                        CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                        CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                        MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                        MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                        SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                        RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                        FlyTablet: "IQ310|Fly Vision",
                        bqTablet: "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
                        HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
                        NecTablet: "\\bN-06D|\\bN-08D",
                        PantechTablet: "Pantech.*P4100",
                        BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                        VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                        ZyncTablet: "z1000|Z99 2G|z930|z990|z909|Z919|z900",
                        PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                        NabiTablet: "Android.*\\bNabi",
                        KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                        DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                        TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                        PlaystationTablet: "Playstation.*(Portable|Vita)",
                        TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                        PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                        AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                        DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                        GalapadTablet: "Android [0-9.]+; [a-z-]+; \\bG1\\b",
                        MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                        KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                        AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                        PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                        YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                        ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                        GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                        PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                        OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
                        HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                        DPSTablet: "DPS Dream 9|DPS Dual 7",
                        VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                        CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                        MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                        ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                        GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                        ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                        VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                        ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                        StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                        VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
                        EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                        RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                        iMobileTablet: "i-mobile i-note",
                        TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                        AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                        AMPETablet: "Android.* A78 ",
                        SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                        TecnoTablet: "TECNO P9|TECNO DP8D",
                        JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                        iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                        FX2Tablet: "FX2 PAD7|FX2 PAD10",
                        XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                        ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                        VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
                        OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                        CaptivaTablet: "CAPTIVA PAD",
                        IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                        TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                        OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
                        JaytechTablet: "TPC-PA762",
                        BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                        DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                        EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                        LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                        AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                        MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                        CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                        WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                        MediacomTablet: "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
                        MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                        NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                        NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                        LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                        UbislateTablet: "UbiSlate[\\s]?7C",
                        PocketBookTablet: "Pocketbook",
                        KocasoTablet: "\\b(TB-1207)\\b",
                        HisenseTablet: "\\b(F5281|E2371)\\b",
                        Hudl: "Hudl HT7S3|Hudl 2",
                        TelstraTablet: "T-Hub2",
                        GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
                    },
                    oss: {
                        AndroidOS: "Android",
                        BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                        PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                        SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                        WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
                        WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                        iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
                        iPadOS: "CPU OS 13",
                        SailfishOS: "Sailfish",
                        MeeGoOS: "MeeGo",
                        MaemoOS: "Maemo",
                        JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                        webOS: "webOS|hpwOS",
                        badaOS: "\\bBada\\b",
                        BREWOS: "BREW"
                    },
                    uas: {
                        Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                        Dolfin: "\\bDolfin\\b",
                        Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
                        Skyfire: "Skyfire",
                        Edge: "\\bEdgiOS\\b|Mobile Safari/[.0-9]* Edge",
                        IE: "IEMobile|MSIEMobile",
                        Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                        Bolt: "bolt",
                        TeaShark: "teashark",
                        Blazer: "Blazer",
                        Safari: "Version((?!\\bEdgiOS\\b).)*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                        WeChat: "\\bMicroMessenger\\b",
                        UCBrowser: "UC.*Browser|UCWEB",
                        baiduboxapp: "baiduboxapp",
                        baidubrowser: "baidubrowser",
                        DiigoBrowser: "DiigoBrowser",
                        Mercury: "\\bMercury\\b",
                        ObigoBrowser: "Obigo",
                        NetFront: "NF-Browser",
                        GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                        PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
                    },
                    props: {
                        Mobile: "Mobile/[VER]",
                        Build: "Build/[VER]",
                        Version: "Version/[VER]",
                        VendorID: "VendorID/[VER]",
                        iPad: "iPad.*CPU[a-z ]+[VER]",
                        iPhone: "iPhone.*CPU[a-z ]+[VER]",
                        iPod: "iPod.*CPU[a-z ]+[VER]",
                        Kindle: "Kindle/[VER]",
                        Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                        Coast: ["Coast/[VER]"],
                        Dolfin: "Dolfin/[VER]",
                        Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
                        Fennec: "Fennec/[VER]",
                        Edge: "Edge/[VER]",
                        IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                        NetFront: "NetFront/[VER]",
                        NokiaBrowser: "NokiaBrowser/[VER]",
                        Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                        "Opera Mini": "Opera Mini/[VER]",
                        "Opera Mobi": "Version/[VER]",
                        UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
                        MQQBrowser: "MQQBrowser/[VER]",
                        MicroMessenger: "MicroMessenger/[VER]",
                        baiduboxapp: "baiduboxapp/[VER]",
                        baidubrowser: "baidubrowser/[VER]",
                        SamsungBrowser: "SamsungBrowser/[VER]",
                        Iron: "Iron/[VER]",
                        Safari: ["Version/[VER]", "Safari/[VER]"],
                        Skyfire: "Skyfire/[VER]",
                        Tizen: "Tizen/[VER]",
                        Webkit: "webkit[ /][VER]",
                        PaleMoon: "PaleMoon/[VER]",
                        SailfishBrowser: "SailfishBrowser/[VER]",
                        Gecko: "Gecko/[VER]",
                        Trident: "Trident/[VER]",
                        Presto: "Presto/[VER]",
                        Goanna: "Goanna/[VER]",
                        iOS: " \\bi?OS\\b [VER][ ;]{1}",
                        Android: "Android [VER]",
                        Sailfish: "Sailfish [VER]",
                        BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                        BREW: "BREW [VER]",
                        Java: "Java/[VER]",
                        "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                        "Windows Phone": "Windows Phone [VER]",
                        "Windows CE": "Windows CE/[VER]",
                        "Windows NT": "Windows NT [VER]",
                        Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                        webOS: ["webOS/[VER]", "hpwOS/[VER];"]
                    },
                    utils: {
                        Bot: "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp|AspiegelBot",
                        MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                        DesktopMode: "WPDesktop",
                        TV: "SonyDTV|HbbTV",
                        WebKit: "(webkit)[ /]([\\w.]+)",
                        Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
                        Watch: "SM-V700"
                    }
                }, e.detectMobileBrowsers = {
                    fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                    shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    tabletPattern: /android|ipad|playbook|silk/i
                };
                var n, r = Object.prototype.hasOwnProperty;

                function i(e, t) {
                    return null != e && null != t && e.toLowerCase() === t.toLowerCase()
                }

                function o(e, t) {
                    var n, r, i = e.length;
                    if (!i || !t) return !1;
                    for (r = 0, n = t.toLowerCase(); r < i; ++r)
                        if (n === e[r].toLowerCase()) return !0;
                    return !1
                }

                function a(e) {
                    for (var t in e) r.call(e, t) && (e[t] = RegExp(e[t], "i"))
                }

                function s(e) {
                    return (e || "").substr(0, 500)
                }

                function u(e, t) {
                    this.ua = s(e), this._cache = {}, this.maxPhoneWidth = t || 600
                }
                return e.FALLBACK_PHONE = "UnknownPhone", e.FALLBACK_TABLET = "UnknownTablet", e.FALLBACK_MOBILE = "UnknownMobile", n = "isArray" in Array ? Array.isArray : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }, ! function() {
                    var t, i, o, s, u, d, l = e.mobileDetectRules;
                    for (t in l.props)
                        if (r.call(l.props, t)) {
                            for (n(i = l.props[t]) || (i = [i]), u = i.length, s = 0; s < u; ++s)(d = (o = i[s]).indexOf("[VER]")) >= 0 && (o = o.substring(0, d) + "([\\w._\\+]+)" + o.substring(d + 5)), i[s] = RegExp(o, "i");
                            l.props[t] = i
                        } a(l.oss), a(l.phones), a(l.tablets), a(l.uas), a(l.utils), l.oss0 = {
                        WindowsPhoneOS: l.oss.WindowsPhoneOS,
                        WindowsMobileOS: l.oss.WindowsMobileOS
                    }
                }(), e.findMatch = function(e, t) {
                    for (var n in e)
                        if (r.call(e, n) && e[n].test(t)) return n;
                    return null
                }, e.findMatches = function(e, t) {
                    var n = [];
                    for (var i in e) r.call(e, i) && e[i].test(t) && n.push(i);
                    return n
                }, e.getVersionStr = function(t, n) {
                    var i, o, a, s, u = e.mobileDetectRules.props;
                    if (r.call(u, t)) {
                        for (o = 0, a = (i = u[t]).length; o < a; ++o)
                            if (null !== (s = i[o].exec(n))) return s[1]
                    }
                    return null
                }, e.getVersion = function(t, n) {
                    var r = e.getVersionStr(t, n);
                    return r ? e.prepareVersionNo(r) : NaN
                }, e.prepareVersionNo = function(e) {
                    var t;
                    return 1 === (t = e.split(/[a-z._ \/\-]/i)).length && (e = t[0]), t.length > 1 && (e = t[0] + ".", t.shift(), e += t.join("")), Number(e)
                }, e.isMobileFallback = function(t) {
                    return e.detectMobileBrowsers.fullPattern.test(t) || e.detectMobileBrowsers.shortPattern.test(t.substr(0, 4))
                }, e.isTabletFallback = function(t) {
                    return e.detectMobileBrowsers.tabletPattern.test(t)
                }, e.prepareDetectionCache = function(t, n, r) {
                    var i, o, a;
                    if (void 0 === t.mobile) {
                        if (o = e.findMatch(e.mobileDetectRules.tablets, n)) {
                            t.mobile = t.tablet = o, t.phone = null;
                            return
                        }
                        if (i = e.findMatch(e.mobileDetectRules.phones, n)) {
                            t.mobile = t.phone = i, t.tablet = null;
                            return
                        }
                        e.isMobileFallback(n) ? void 0 === (a = u.isPhoneSized(r)) ? (t.mobile = e.FALLBACK_MOBILE, t.tablet = t.phone = null) : a ? (t.mobile = t.phone = e.FALLBACK_PHONE, t.tablet = null) : (t.mobile = t.tablet = e.FALLBACK_TABLET, t.phone = null) : e.isTabletFallback(n) ? (t.mobile = t.tablet = e.FALLBACK_TABLET, t.phone = null) : t.mobile = t.tablet = t.phone = null
                    }
                }, e.mobileGrade = function(e) {
                    var t = null !== e.mobile();
                    return e.os("iOS") && e.version("iPad") >= 4.3 || e.os("iOS") && e.version("iPhone") >= 3.1 || e.os("iOS") && e.version("iPod") >= 3.1 || e.version("Android") > 2.1 && e.is("Webkit") || e.version("Windows Phone OS") >= 7 || e.is("BlackBerry") && e.version("BlackBerry") >= 6 || e.match("Playbook.*Tablet") || e.version("webOS") >= 1.4 && e.match("Palm|Pre|Pixi") || e.match("hp.*TouchPad") || e.is("Firefox") && e.version("Firefox") >= 12 || e.is("Chrome") && e.is("AndroidOS") && e.version("Android") >= 4 || e.is("Skyfire") && e.version("Skyfire") >= 4.1 && e.is("AndroidOS") && e.version("Android") >= 2.3 || e.is("Opera") && e.version("Opera Mobi") > 11 && e.is("AndroidOS") || e.is("MeeGoOS") || e.is("Tizen") || e.is("Dolfin") && e.version("Bada") >= 2 || (e.is("UC Browser") || e.is("Dolfin")) && e.version("Android") >= 2.3 || e.match("Kindle Fire") || e.is("Kindle") && e.version("Kindle") >= 3 || e.is("AndroidOS") && e.is("NookTablet") || e.version("Chrome") >= 11 && !t || e.version("Safari") >= 5 && !t || e.version("Firefox") >= 4 && !t || e.version("MSIE") >= 7 && !t || e.version("Opera") >= 10 && !t ? "A" : e.os("iOS") && 4.3 > e.version("iPad") || e.os("iOS") && 3.1 > e.version("iPhone") || e.os("iOS") && 3.1 > e.version("iPod") || e.is("Blackberry") && e.version("BlackBerry") >= 5 && 6 > e.version("BlackBerry") || e.version("Opera Mini") >= 5 && 6.5 >= e.version("Opera Mini") && (e.version("Android") >= 2.3 || e.is("iOS")) || e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || e.version("Opera Mobi") >= 11 && e.is("SymbianOS") ? "B" : (5 > e.version("BlackBerry") || e.match("MSIEMobile|Windows CE.*Mobile") || e.version("Windows Mobile"), "C")
                }, e.detectOS = function(t) {
                    return e.findMatch(e.mobileDetectRules.oss0, t) || e.findMatch(e.mobileDetectRules.oss, t)
                }, e.getDeviceSmallerSide = function() {
                    return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
                }, u.prototype = {
                    constructor: u,
                    mobile: function() {
                        return e.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile
                    },
                    phone: function() {
                        return e.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone
                    },
                    tablet: function() {
                        return e.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet
                    },
                    userAgent: function() {
                        return this._cache.userAgent === t && (this._cache.userAgent = e.findMatch(e.mobileDetectRules.uas, this.ua)), this._cache.userAgent
                    },
                    userAgents: function() {
                        return this._cache.userAgents === t && (this._cache.userAgents = e.findMatches(e.mobileDetectRules.uas, this.ua)), this._cache.userAgents
                    },
                    os: function() {
                        return this._cache.os === t && (this._cache.os = e.detectOS(this.ua)), this._cache.os
                    },
                    version: function(t) {
                        return e.getVersion(t, this.ua)
                    },
                    versionStr: function(t) {
                        return e.getVersionStr(t, this.ua)
                    },
                    is: function(t) {
                        return o(this.userAgents(), t) || i(t, this.os()) || i(t, this.phone()) || i(t, this.tablet()) || o(e.findMatches(e.mobileDetectRules.utils, this.ua), t)
                    },
                    match: function(e) {
                        return e instanceof RegExp || (e = RegExp(e, "i")), e.test(this.ua)
                    },
                    isPhoneSized: function(e) {
                        return u.isPhoneSized(e || this.maxPhoneWidth)
                    },
                    mobileGrade: function() {
                        return this._cache.grade === t && (this._cache.grade = e.mobileGrade(this)), this._cache.grade
                    }
                }, "undefined" != typeof window && window.screen ? u.isPhoneSized = function(n) {
                    return n < 0 ? t : e.getDeviceSmallerSide() <= n
                } : u.isPhoneSized = function() {}, u._impl = e, u.version = "1.4.5 2021-03-13", u
            })
        }(function(t) {
            if (e.exports) return function(t) {
                e.exports = t()
            };
            if ("function" == typeof define && define.amd) return define;
            if ("undefined" != typeof window) return function(e) {
                window.MobileDetect = e()
            };
            throw Error("unknown environment")
        }())
    },
    6907: function(e, t, n) {
        "use strict";
        n.d(t, {
            Pi: function() {
                return ec
            }
        });
        var r, i = n(2188),
            o = n(7294);
        if (!o.useState) throw Error("mobx-react-lite requires React with Hooks support");
        if (!i.rV) throw Error("mobx-react-lite requires mobx at least version 4 to be available");
        var a = n(3935),
            s = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, i, o = n.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return a
            };

        function u() {
            var e = s((0, o.useState)(0), 2)[1];
            return (0, o.useCallback)(function() {
                e(function(e) {
                    return e + 1
                })
            }, [])
        }
        var d = {};

        function l() {
            return "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : d
        }
        var c = function(e) {
            return "function" == typeof Symbol ? Symbol.for(e) : "__$mobx-react " + e + "__"
        }("observerBatching");

        function f(e) {
            e()
        }

        function h(e) {
            e || (e = f), (0, i.jQ)({
                reactionScheduler: e
            }), l()[c] = !0
        }
        var p = !1;

        function g() {
            return p
        }

        function b(e) {
            return (0, i.Gf)(e)
        }

        function m(e) {
            return {
                cleanAt: Date.now() + v,
                reaction: e
            }
        }
        var v = 1e4,
            y = 1e4,
            S = new Set;

        function $() {
            void 0 === r && (r = setTimeout(P, y))
        }

        function T(e) {
            S.add(e), $()
        }

        function w(e) {
            S.delete(e)
        }

        function P() {
            r = void 0;
            var e = Date.now();
            S.forEach(function(t) {
                var n = t.current;
                n && e >= n.cleanAt && (n.reaction.dispose(), t.current = null, S.delete(t))
            }), S.size > 0 && $()
        }
        var A = !1,
            M = [];

        function C(e) {
            return function() {
                A ? M.push(e) : e()
            }
        }

        function O(e) {
            A = !0, M = [];
            try {
                var t = e();
                A = !1;
                var n = M.length > 0 ? M : void 0;
                return o.useLayoutEffect(function() {
                    n && n.forEach(function(e) {
                        return e()
                    })
                }, [n]), t
            } finally {
                A = !1
            }
        }
        var E = {};

        function x(e) {
            return "observer" + e
        }

        function B(e, t, n) {
            if (void 0 === t && (t = "observed"), void 0 === n && (n = E), g()) return e();
            var r = C((n.useForceUpdate || u)()),
                a = o.useRef(null);
            if (!a.current) {
                var s = new i.le(x(t), function() {
                        d.mounted ? r() : (s.dispose(), a.current = null)
                    }),
                    d = m(s);
                a.current = d, T(a)
            }
            var l = a.current.reaction;
            return o.useDebugValue(l, b), o.useEffect(function() {
                return w(a), a.current ? a.current.mounted = !0 : (a.current = {
                        reaction: new i.le(x(t), function() {
                            r()
                        }),
                        cleanAt: 1 / 0
                    }, r()),
                    function() {
                        a.current.reaction.dispose(), a.current = null
                    }
            }, []), O(function() {
                var t, n;
                if (l.track(function() {
                        try {
                            t = e()
                        } catch (e) {
                            n = e
                        }
                    }), n) throw n;
                return t
            })
        }
        var I = function() {
            return (I = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        };

        function D(e, t) {
            if (g()) return e;
            var n, r = I({
                    forwardRef: !1
                }, t),
                i = e.displayName || e.name,
                a = function(t, n) {
                    return B(function() {
                        return e(t, n)
                    }, i)
                };
            return a.displayName = i, k(e, n = r.forwardRef ? (0, o.memo)((0, o.forwardRef)(a)) : (0, o.memo)(a)), n.displayName = i, n
        }
        var _ = {
            $$typeof: !0,
            render: !0,
            compare: !0,
            type: !0
        };

        function k(e, t) {
            Object.keys(e).forEach(function(n) {
                _[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
            })
        }

        function G(e) {
            var t = e.children,
                n = e.render,
                r = t || n;
            return "function" != typeof r ? null : B(r)
        }

        function N(e, t, n, r, i) {
            var o = "children" === t ? "render" : "children",
                a = "function" == typeof e[t],
                s = "function" == typeof e[o];
            return a && s ? Error("MobX Observer: Do not use children and render in the same time in`" + n) : a || s ? null : Error("Invalid prop `" + i + "` of type `" + typeof e[t] + "` supplied to `" + n + "`, expected `function`.")
        }
        G.propTypes = {
            children: N,
            render: N
        }, G.displayName = "Observer", h(a.unstable_batchedUpdates);
        var L = 0;

        function R(e) {
            if ("function" == typeof Symbol) return Symbol(e);
            var t = "__$mobx-react " + e + " (" + L + ")";
            return L++, t
        }
        var H = {};

        function j(e) {
            return H[e] || (H[e] = R(e)), H[e]
        }

        function F(e, t) {
            if (V(e, t)) return !0;
            if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
            var n = Object.keys(e),
                r = Object.keys(t);
            if (n.length !== r.length) return !1;
            for (var i = 0; i < n.length; i++)
                if (!Object.hasOwnProperty.call(t, n[i]) || !V(e[n[i]], t[n[i]])) return !1;
            return !0
        }

        function V(e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
        }

        function U(e, t, n) {
            Object.hasOwnProperty.call(e, t) ? e[t] = n : Object.defineProperty(e, t, {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: n
            })
        }
        var W = j("patchMixins"),
            X = j("patchedDefinition");

        function K(e, t) {
            var n = e[W] = e[W] || {},
                r = n[t] = n[t] || {};
            return r.locks = r.locks || 0, r.methods = r.methods || [], r
        }

        function z(e, t) {
            for (var n, r = this, i = arguments.length, o = Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) o[a - 2] = arguments[a];
            t.locks++;
            try {
                return null != e && (n = e.apply(this, o)), n
            } finally {
                t.locks--, 0 === t.locks && t.methods.forEach(function(e) {
                    e.apply(r, o)
                })
            }
        }

        function q(e, t) {
            return function() {
                for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                z.call.apply(z, [this, e, t].concat(r))
            }
        }

        function Y(e, t, n) {
            var r = K(e, t);
            0 > r.methods.indexOf(n) && r.methods.push(n);
            var i = Object.getOwnPropertyDescriptor(e, t);
            if (!i || !i[X]) {
                var o = e[t],
                    a = Q(e, t, i ? i.enumerable : void 0, r, o);
                Object.defineProperty(e, t, a)
            }
        }

        function Q(e, t, n, r, i) {
            var o, a = q(i, r);
            return (o = {})[X] = !0, o.get = function() {
                return a
            }, o.set = function(i) {
                if (this === e) a = q(i, r);
                else {
                    var o = Q(this, t, n, r, i);
                    Object.defineProperty(this, t, o)
                }
            }, o.configurable = !0, o.enumerable = n, o
        }
        var Z = i.so || "$mobx",
            J = j("isMobXReactObserver"),
            ee = j("isUnmounted"),
            et = j("skipRender"),
            en = j("isForcingUpdate");

        function er(e) {
            var t = e.prototype;
            if (e[J] ? console.warn("The provided component class (" + ei(t) + ") \n                has already been declared as an observer component.") : e[J] = !0, t.componentWillReact) throw Error("The componentWillReact life-cycle event is no longer supported");
            if (e.__proto__ !== o.PureComponent) {
                if (t.shouldComponentUpdate) {
                    if (t.shouldComponentUpdate !== ea) throw Error("It is not allowed to use shouldComponentUpdate in observer based components.")
                } else t.shouldComponentUpdate = ea
            }
            es(t, "props"), es(t, "state");
            var n = t.render;
            return t.render = function() {
                return eo.call(this, n)
            }, Y(t, "componentWillUnmount", function() {
                var e;
                !0 === g() || (null === (e = this.render[Z]) || void 0 === e || e.dispose(), this[ee] = !0, this.render[Z] || console.warn("The reactive render of an observer class component (" + ei(this) + ") \n                was overriden after MobX attached. This may result in a memory leak if the \n                overriden reactive render was not properly disposed."))
            }), e
        }

        function ei(e) {
            return e.displayName || e.name || e.constructor && (e.constructor.displayName || e.constructor.name) || "<component>"
        }

        function eo(e) {
            var t = this;
            if (!0 === g()) return e.call(this);
            U(this, et, !1), U(this, en, !1);
            var n = ei(this),
                r = e.bind(this),
                a = !1,
                s = new i.le(n + ".render()", function() {
                    if (!a && (a = !0, !0 !== t[ee])) {
                        var e = !0;
                        try {
                            U(t, en, !0), t[et] || o.Component.prototype.forceUpdate.call(t), e = !1
                        } finally {
                            U(t, en, !1), e && s.dispose()
                        }
                    }
                });

            function u() {
                a = !1;
                var e = void 0,
                    t = void 0;
                if (s.track(function() {
                        try {
                            t = (0, i.$$)(!1, r)
                        } catch (t) {
                            e = t
                        }
                    }), e) throw e;
                return t
            }
            return s.reactComponent = this, u[Z] = s, this.render = u, u.call(this)
        }

        function ea(e, t) {
            return g() && console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."), this.state !== t || !F(this.props, e)
        }

        function es(e, t) {
            var n = j("reactProp_" + t + "_valueHolder"),
                r = j("reactProp_" + t + "_atomHolder");

            function o() {
                return this[r] || U(this, r, (0, i.cp)("reactive " + t)), this[r]
            }
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    var e = !1;
                    return i.wM && i.mJ && (e = (0, i.wM)(!0)), o.call(this).reportObserved(), i.wM && i.mJ && (0, i.mJ)(e), this[n]
                },
                set: function(e) {
                    this[en] || F(this[n], e) ? U(this, n, e) : (U(this, n, e), U(this, et, !0), o.call(this).reportChanged(), U(this, et, !1))
                }
            })
        }
        var eu = "function" == typeof Symbol && Symbol.for,
            ed = eu ? Symbol.for("react.forward_ref") : "function" == typeof o.forwardRef && (0, o.forwardRef)(function(e) {
                return null
            }).$$typeof,
            el = eu ? Symbol.for("react.memo") : "function" == typeof o.memo && (0, o.memo)(function(e) {
                return null
            }).$$typeof;

        function ec(e) {
            if (!0 === e.isMobxInjector && console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'"), el && e.$$typeof === el) throw Error("Mobx observer: You are trying to use 'observer' on a function component wrapped in either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");
            if (ed && e.$$typeof === ed) {
                var t = e.render;
                if ("function" != typeof t) throw Error("render property of ForwardRef was not a function");
                return (0, o.forwardRef)(function() {
                    var e = arguments;
                    return (0, o.createElement)(G, null, function() {
                        return t.apply(void 0, e)
                    })
                })
            }
            return "function" != typeof e || e.prototype && e.prototype.render || e.isReactClass || Object.prototype.isPrototypeOf.call(o.Component, e) ? er(e) : D(e)
        }

        function ef() {
            return (ef = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function eh(e, t) {
            if (null == e) return {};
            var n, r, i = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
        }
        var ep = o.createContext({});
        if (!o.Component) throw Error("mobx-react requires React to be available");
        if (!i.LO) throw Error("mobx-react requires mobx to be available")
    },
    2188: function(e, t, n) {
        "use strict";
        n.d(t, {
            $$: function() {
                return eG
            },
            EH: function() {
                return th
            },
            Fl: function() {
                return eh
            },
            Gf: function() {
                return tw
            },
            LO: function() {
                return ed
            },
            N7: function() {
                return tO
            },
            aD: function() {
                return tl
            },
            cp: function() {
                return _
            },
            jQ: function() {
                return ty
            },
            le: function() {
                return e7
            },
            mJ: function() {
                return eC
            },
            rV: function() {
                return to
            },
            so: function() {
                return B
            },
            wM: function() {
                return eM
            },
            z: function() {
                return tc
            }
        });
        var r, i, o, a, s = "An invariant failed, however the error is obfuscated because this is a production build.",
            u = [];
        Object.freeze(u);
        var d = {};

        function l() {
            return ++eK.mobxGuid
        }

        function c(e) {
            throw f(!1, e), "X"
        }

        function f(e, t) {
            if (!e) throw Error("[mobx] " + (t || s))
        }

        function h(e, t) {
            return !1
        }

        function p(e) {
            var t = !1;
            return function() {
                if (!t) return t = !0, e.apply(this, arguments)
            }
        }
        Object.freeze(d);
        var g = function() {};

        function b(e) {
            var t = [];
            return e.forEach(function(e) {
                -1 === t.indexOf(e) && t.push(e)
            }), t
        }

        function m(e) {
            return null !== e && "object" == typeof e
        }

        function v(e) {
            if (null === e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            return t === Object.prototype || null === t
        }

        function y(e) {
            if (A(e) || tJ(e)) return e;
            if (Array.isArray(e)) return new Map(e);
            if (!v(e)) return c("Cannot convert to map from '" + e + "'");
            var t = new Map;
            for (var n in e) t.set(n, e[n]);
            return t
        }

        function S(e, t, n) {
            Object.defineProperty(e, t, {
                enumerable: !1,
                writable: !0,
                configurable: !0,
                value: n
            })
        }

        function $(e, t, n) {
            Object.defineProperty(e, t, {
                enumerable: !1,
                writable: !1,
                configurable: !0,
                value: n
            })
        }

        function T(e, t) {
            var n = Object.getOwnPropertyDescriptor(e, t);
            return !n || !1 !== n.configurable && !1 !== n.writable
        }

        function w(e, t) {}

        function P(e, t) {
            var n = "isMobX" + e;
            return t.prototype[n] = !0,
                function(e) {
                    return m(e) && !0 === e[n]
                }
        }

        function A(e) {
            return e instanceof Map
        }

        function M(e) {
            return e instanceof Set
        }

        function C(e) {
            var t = new Set;
            for (var n in e) t.add(n);
            return Object.getOwnPropertySymbols(e).forEach(function(n) {
                Object.getOwnPropertyDescriptor(e, n).enumerable && t.add(n)
            }), Array.from(t)
        }

        function O(e) {
            return e && e.toString ? e.toString() : new String(e).toString()
        }

        function E(e) {
            return null === e ? null : "object" == typeof e ? "" + e : e
        }
        var x = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols ? function(e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
            } : Object.getOwnPropertyNames,
            B = Symbol("mobx administration"),
            I = function() {
                function e(e) {
                    void 0 === e && (e = "Atom@" + l()), this.name = e, this.isPendingUnobservation = !1, this.isBeingObserved = !1, this.observers = new Set, this.diffValue = 0, this.lastAccessedBy = 0, this.lowestObserverState = r.NOT_TRACKING
                }
                return e.prototype.onBecomeObserved = function() {
                    this.onBecomeObservedListeners && this.onBecomeObservedListeners.forEach(function(e) {
                        return e()
                    })
                }, e.prototype.onBecomeUnobserved = function() {
                    this.onBecomeUnobservedListeners && this.onBecomeUnobservedListeners.forEach(function(e) {
                        return e()
                    })
                }, e.prototype.reportObserved = function() {
                    return e0(this)
                }, e.prototype.reportChanged = function() {
                    eZ(), e1(this), eJ()
                }, e.prototype.toString = function() {
                    return this.name
                }, e
            }(),
            D = P("Atom", I);

        function _(e, t, n) {
            void 0 === t && (t = g), void 0 === n && (n = g);
            var r = new I(e);
            return t !== g && tb(r, t), n !== g && tm(r, n), r
        }
        var k = {
                structural: function(e, t) {
                    return na(e, t)
                },
                default: function(e, t) {
                    return Object.is(e, t)
                }
            },
            G = function(e, t) {
                return (G = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
            };

        function N(e, t) {
            function n() {
                this.constructor = e
            }
            G(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }
        var L = function() {
            return (L = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        };

        function R(e) {
            var t = "function" == typeof Symbol && e[Symbol.iterator],
                n = 0;
            return t ? t.call(e) : {
                next: function() {
                    return e && n >= e.length && (e = void 0), {
                        value: e && e[n++],
                        done: !e
                    }
                }
            }
        }

        function H(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r, i, o = n.call(e),
                a = [];
            try {
                for (;
                    (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(r.value)
            } catch (e) {
                i = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (n = o.return) && n.call(o)
                } finally {
                    if (i) throw i.error
                }
            }
            return a
        }

        function j() {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(H(arguments[t]));
            return e
        }
        var F = Symbol("mobx did run lazy initializers"),
            V = Symbol("mobx pending decorators"),
            U = {},
            W = {};

        function X(e, t) {
            var n = t ? U : W;
            return n[e] || (n[e] = {
                configurable: !0,
                enumerable: t,
                get: function() {
                    return K(this), this[e]
                },
                set: function(t) {
                    K(this), this[e] = t
                }
            })
        }

        function K(e) {
            if (!0 !== e[F]) {
                var t, n, r = e[V];
                if (r) {
                    S(e, F, !0);
                    var i = j(Object.getOwnPropertySymbols(r), Object.keys(r));
                    try {
                        for (var o = R(i), a = o.next(); !a.done; a = o.next()) {
                            var s = r[a.value];
                            s.propertyCreator(e, s.prop, s.descriptor, s.decoratorTarget, s.decoratorArguments)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (n = o.return) && n.call(o)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                }
            }
        }

        function z(e, t) {
            return function() {
                var n, r = function(r, i, o, a) {
                    if (!0 === a) return t(r, i, o, r, n), null;
                    if (!Object.prototype.hasOwnProperty.call(r, V)) {
                        var s = r[V];
                        S(r, V, L({}, s))
                    }
                    return r[V][i] = {
                        prop: i,
                        propertyCreator: t,
                        descriptor: o,
                        decoratorTarget: r,
                        decoratorArguments: n
                    }, X(i, e)
                };
                return q(arguments) ? (n = u, r.apply(null, arguments)) : (n = Array.prototype.slice.call(arguments), r)
            }
        }

        function q(e) {
            return (2 === e.length || 3 === e.length) && ("string" == typeof e[1] || "symbol" == typeof e[1]) || 4 === e.length && !0 === e[3]
        }

        function Y(e, t, n) {
            return tM(e) ? e : Array.isArray(e) ? ed.array(e, {
                name: n
            }) : v(e) ? ed.object(e, void 0, {
                name: n
            }) : A(e) ? ed.map(e, {
                name: n
            }) : M(e) ? ed.set(e, {
                name: n
            }) : e
        }

        function Q(e, t, n) {
            return null == e || nt(e) || tY(e) || tJ(e) || t2(e) ? e : Array.isArray(e) ? ed.array(e, {
                name: n,
                deep: !1
            }) : v(e) ? ed.object(e, void 0, {
                name: n,
                deep: !1
            }) : A(e) ? ed.map(e, {
                name: n,
                deep: !1
            }) : M(e) ? ed.set(e, {
                name: n,
                deep: !1
            }) : c(!1)
        }

        function Z(e) {
            return e
        }

        function J(e, t, n) {
            return na(e, t) ? t : e
        }

        function ee(e) {
            f(e);
            var t = z(!0, function(t, n, r, i, o) {
                    var a = r ? r.initializer ? r.initializer.call(t) : r.value : void 0;
                    t5(t).addObservableProp(n, a, e)
                }),
                n = ("undefined" != typeof process && process.env, t);
            return n.enhancer = e, n
        }
        var et = {
            deep: !0,
            name: void 0,
            defaultDecorator: void 0,
            proxy: !0
        };

        function en(e) {
            return null == e ? et : "string" == typeof e ? {
                name: e,
                deep: !0,
                proxy: !0
            } : e
        }
        Object.freeze(et);
        var er = ee(Y),
            ei = ee(Q),
            eo = ee(Z);

        function ea(e) {
            return e.defaultDecorator ? e.defaultDecorator.enhancer : !1 === e.deep ? Z : Y
        }

        function es(e, t, n) {
            if ("string" == typeof arguments[1] || "symbol" == typeof arguments[1]) return er.apply(null, arguments);
            if (tM(e)) return e;
            var r = v(e) ? ed.object(e, t, n) : Array.isArray(e) ? ed.array(e, t) : A(e) ? ed.map(e, t) : M(e) ? ed.set(e, t) : e;
            if (r !== e) return r;
            c(!1)
        }
        var eu = {
                box: function(e, t) {
                    arguments.length > 2 && el("box");
                    var n = en(t);
                    return new eR(e, ea(n), n.name, !0, n.equals)
                },
                array: function(e, t) {
                    arguments.length > 2 && el("array");
                    var n = en(t);
                    return tX(e, ea(n), n.name)
                },
                map: function(e, t) {
                    arguments.length > 2 && el("map");
                    var n = en(t);
                    return new tZ(e, ea(n), n.name)
                },
                set: function(e, t) {
                    arguments.length > 2 && el("set");
                    var n = en(t);
                    return new t1(e, ea(n), n.name)
                },
                object: function(e, t, n) {
                    "string" == typeof arguments[1] && el("object");
                    var r = en(n);
                    if (!1 === r.proxy) return tS({}, e, t, r);
                    var i = t$(r),
                        o = tN(tS({}, void 0, void 0, r));
                    return tT(o, e, t, i), o
                },
                ref: eo,
                shallow: ei,
                deep: er,
                struct: ee(J)
            },
            ed = es;

        function el(e) {
            c("Expected one or two arguments to observable." + e + ". Did you accidentally try to use observable." + e + " as decorator?")
        }
        Object.keys(eu).forEach(function(e) {
            return ed[e] = eu[e]
        });
        var ec = z(!1, function(e, t, n, r, i) {
                var o = n.get,
                    a = n.set,
                    s = i[0] || {};
                t5(e).addComputedProp(e, t, L({
                    get: o,
                    set: a,
                    context: e
                }, s))
            }),
            ef = ec({
                equals: k.structural
            }),
            eh = function(e, t, n) {
                if ("string" == typeof t || null !== e && "object" == typeof e && 1 == arguments.length) return ec.apply(null, arguments);
                var r = "object" == typeof t ? t : {};
                return r.get = e, r.set = "function" == typeof t ? t : r.set, r.name = r.name || e.name || "", new eH(r)
            };
        eh.struct = ef,
            function(e) {
                e[e.NOT_TRACKING = -1] = "NOT_TRACKING", e[e.UP_TO_DATE = 0] = "UP_TO_DATE", e[e.POSSIBLY_STALE = 1] = "POSSIBLY_STALE", e[e.STALE = 2] = "STALE"
            }(r || (r = {})),
            function(e) {
                e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK"
            }(i || (i = {}));
        var ep = function() {
            return function(e) {
                this.cause = e
            }
        }();

        function eg(e) {
            return e instanceof ep
        }

        function eb(e) {
            switch (e.dependenciesState) {
                case r.UP_TO_DATE:
                    return !1;
                case r.NOT_TRACKING:
                case r.STALE:
                    return !0;
                case r.POSSIBLY_STALE:
                    for (var t = eM(!0), n = eP(), i = e.observing, o = i.length, a = 0; a < o; a++) {
                        var s = i[a];
                        if (ej(s)) {
                            if (eK.disableErrorBoundaries) s.get();
                            else try {
                                s.get()
                            } catch (e) {
                                return eA(n), eC(t), !0
                            }
                            if (e.dependenciesState === r.STALE) return eA(n), eC(t), !0
                        }
                    }
                    return eO(e), eA(n), eC(t), !1
            }
        }

        function em(e) {
            var t = e.observers.size > 0;
            eK.computationDepth > 0 && t && c(!1), !eK.allowStateChanges && (t || "strict" === eK.enforceActions) && c(!1)
        }

        function ev(e) {}

        function ey(e, t, n) {
            var r, i = eM(!0);
            eO(e), e.newObserving = Array(e.observing.length + 100), e.unboundDepsCount = 0, e.runId = ++eK.runId;
            var o = eK.trackingDerivation;
            if (eK.trackingDerivation = e, !0 === eK.disableErrorBoundaries) r = t.call(n);
            else try {
                r = t.call(n)
            } catch (e) {
                r = new ep(e)
            }
            return eK.trackingDerivation = o, e$(e), eC(i), r
        }

        function eS(e) {}

        function e$(e) {
            for (var t = e.observing, n = e.observing = e.newObserving, i = r.UP_TO_DATE, o = 0, a = e.unboundDepsCount, s = 0; s < a; s++) {
                var u = n[s];
                0 === u.diffValue && (u.diffValue = 1, o !== s && (n[o] = u), o++), u.dependenciesState > i && (i = u.dependenciesState)
            }
            for (n.length = o, e.newObserving = null, a = t.length; a--;) {
                var u = t[a];
                0 === u.diffValue && eY(u, e), u.diffValue = 0
            }
            for (; o--;) {
                var u = n[o];
                1 === u.diffValue && (u.diffValue = 0, eq(u, e))
            }
            i !== r.UP_TO_DATE && (e.dependenciesState = i, e.onBecomeStale())
        }

        function eT(e) {
            var t = e.observing;
            e.observing = [];
            for (var n = t.length; n--;) eY(t[n], e);
            e.dependenciesState = r.NOT_TRACKING
        }

        function ew(e) {
            var t = eP();
            try {
                return e()
            } finally {
                eA(t)
            }
        }

        function eP() {
            var e = eK.trackingDerivation;
            return eK.trackingDerivation = null, e
        }

        function eA(e) {
            eK.trackingDerivation = e
        }

        function eM(e) {
            var t = eK.allowStateReads;
            return eK.allowStateReads = e, t
        }

        function eC(e) {
            eK.allowStateReads = e
        }

        function eO(e) {
            if (e.dependenciesState !== r.UP_TO_DATE) {
                e.dependenciesState = r.UP_TO_DATE;
                for (var t = e.observing, n = t.length; n--;) t[n].lowestObserverState = r.UP_TO_DATE
            }
        }
        var eE = 0,
            ex = 1,
            eB = Object.getOwnPropertyDescriptor(function() {}, "name");

        function eI(e, t, n) {
            var r = function() {
                return eD(e, t, n || this, arguments)
            };
            return r.isMobxAction = !0, r
        }

        function eD(e, t, n, r) {
            var i = e_(e, n, r);
            try {
                return t.apply(n, r)
            } catch (e) {
                throw i.error = e, e
            } finally {
                ek(i)
            }
        }

        function e_(e, t, n) {
            var r = tr() && !!e,
                i = 0,
                o = eP();
            eZ();
            var a = {
                prevDerivation: o,
                prevAllowStateChanges: eN(!0),
                prevAllowStateReads: eM(!0),
                notifySpy: r,
                startTime: i,
                actionId: ex++,
                parentActionId: eE
            };
            return eE = a.actionId, a
        }

        function ek(e) {
            eE !== e.actionId && c("invalid action stack. did you forget to finish an action?"), eE = e.parentActionId, void 0 !== e.error && (eK.suppressReactionErrors = !0), eL(e.prevAllowStateChanges), eC(e.prevAllowStateReads), eJ(), eA(e.prevDerivation), e.notifySpy, eK.suppressReactionErrors = !1
        }

        function eG(e, t) {
            var n, r = eN(e);
            try {
                n = t()
            } finally {
                eL(r)
            }
            return n
        }

        function eN(e) {
            var t = eK.allowStateChanges;
            return eK.allowStateChanges = e, t
        }

        function eL(e) {
            eK.allowStateChanges = e
        }
        eB && eB.configurable;
        var eR = function(e) {
            function t(t, n, r, i, o) {
                void 0 === r && (r = "ObservableValue@" + l()), void 0 === i && (i = !0), void 0 === o && (o = k.default);
                var a = e.call(this, r) || this;
                return a.enhancer = n, a.name = r, a.equals = o, a.hasUnreportedChange = !1, a.value = n(t, void 0, r), i && tr(), a
            }
            return N(t, e), t.prototype.dehanceValue = function(e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e
            }, t.prototype.set = function(e) {
                this.value, (e = this.prepareNewValue(e)) !== eK.UNCHANGED && (tr(), this.setNewValue(e))
            }, t.prototype.prepareNewValue = function(e) {
                if (em(this), tL(this)) {
                    var t = tH(this, {
                        object: this,
                        type: "update",
                        newValue: e
                    });
                    if (!t) return eK.UNCHANGED;
                    e = t.newValue
                }
                return e = this.enhancer(e, this.value, this.name), this.equals(this.value, e) ? eK.UNCHANGED : e
            }, t.prototype.setNewValue = function(e) {
                var t = this.value;
                this.value = e, this.reportChanged(), tj(this) && tV(this, {
                    type: "update",
                    object: this,
                    newValue: e,
                    oldValue: t
                })
            }, t.prototype.get = function() {
                return this.reportObserved(), this.dehanceValue(this.value)
            }, t.prototype.intercept = function(e) {
                return tR(this, e)
            }, t.prototype.observe = function(e, t) {
                return t && e({
                    object: this,
                    type: "update",
                    newValue: this.value,
                    oldValue: void 0
                }), tF(this, e)
            }, t.prototype.toJSON = function() {
                return this.get()
            }, t.prototype.toString = function() {
                return this.name + "[" + this.value + "]"
            }, t.prototype.valueOf = function() {
                return E(this.get())
            }, t.prototype[Symbol.toPrimitive] = function() {
                return this.valueOf()
            }, t
        }(I);
        P("ObservableValue", eR);
        var eH = function() {
                function e(e) {
                    this.dependenciesState = r.NOT_TRACKING, this.observing = [], this.newObserving = null, this.isBeingObserved = !1, this.isPendingUnobservation = !1, this.observers = new Set, this.diffValue = 0, this.runId = 0, this.lastAccessedBy = 0, this.lowestObserverState = r.UP_TO_DATE, this.unboundDepsCount = 0, this.__mapid = "#" + l(), this.value = new ep(null), this.isComputing = !1, this.isRunningSetter = !1, this.isTracing = i.NONE, f(e.get, "missing option for computed: get"), this.derivation = e.get, this.name = e.name || "ComputedValue@" + l(), e.set && (this.setter = eI(this.name + "-setter", e.set)), this.equals = e.equals || (e.compareStructural || e.struct ? k.structural : k.default), this.scope = e.context, this.requiresReaction = !!e.requiresReaction, this.keepAlive = !!e.keepAlive
                }
                return e.prototype.onBecomeStale = function() {
                    e3(this)
                }, e.prototype.onBecomeObserved = function() {
                    this.onBecomeObservedListeners && this.onBecomeObservedListeners.forEach(function(e) {
                        return e()
                    })
                }, e.prototype.onBecomeUnobserved = function() {
                    this.onBecomeUnobservedListeners && this.onBecomeUnobservedListeners.forEach(function(e) {
                        return e()
                    })
                }, e.prototype.get = function() {
                    this.isComputing && c("Cycle detected in computation " + this.name + ": " + this.derivation), 0 !== eK.inBatch || 0 !== this.observers.size || this.keepAlive ? (e0(this), eb(this) && this.trackAndCompute() && e2(this)) : eb(this) && (this.warnAboutUntrackedRead(), eZ(), this.value = this.computeValue(!1), eJ());
                    var e = this.value;
                    if (eg(e)) throw e.cause;
                    return e
                }, e.prototype.peek = function() {
                    var e = this.computeValue(!1);
                    if (eg(e)) throw e.cause;
                    return e
                }, e.prototype.set = function(e) {
                    if (this.setter) {
                        f(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"), this.isRunningSetter = !0;
                        try {
                            this.setter.call(this.scope, e)
                        } finally {
                            this.isRunningSetter = !1
                        }
                    } else f(!1, !1)
                }, e.prototype.trackAndCompute = function() {
                    tr();
                    var e = this.value,
                        t = this.dependenciesState === r.NOT_TRACKING,
                        n = this.computeValue(!0),
                        i = t || eg(e) || eg(n) || !this.equals(e, n);
                    return i && (this.value = n), i
                }, e.prototype.computeValue = function(e) {
                    var t;
                    if (this.isComputing = !0, eK.computationDepth++, e) t = ey(this, this.derivation, this.scope);
                    else if (!0 === eK.disableErrorBoundaries) t = this.derivation.call(this.scope);
                    else try {
                        t = this.derivation.call(this.scope)
                    } catch (e) {
                        t = new ep(e)
                    }
                    return eK.computationDepth--, this.isComputing = !1, t
                }, e.prototype.suspend = function() {
                    this.keepAlive || (eT(this), this.value = void 0)
                }, e.prototype.observe = function(e, t) {
                    var n = this,
                        r = !0,
                        i = void 0;
                    return th(function() {
                        var o = n.get();
                        if (!r || t) {
                            var a = eP();
                            e({
                                type: "update",
                                object: n,
                                newValue: o,
                                oldValue: i
                            }), eA(a)
                        }
                        r = !1, i = o
                    })
                }, e.prototype.warnAboutUntrackedRead = function() {}, e.prototype.toJSON = function() {
                    return this.get()
                }, e.prototype.toString = function() {
                    return this.name + "[" + this.derivation.toString() + "]"
                }, e.prototype.valueOf = function() {
                    return E(this.get())
                }, e.prototype[Symbol.toPrimitive] = function() {
                    return this.valueOf()
                }, e
            }(),
            ej = P("ComputedValue", eH),
            eF = function() {
                return function() {
                    this.version = 5, this.UNCHANGED = {}, this.trackingDerivation = null, this.computationDepth = 0, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !0, this.allowStateReads = !0, this.enforceActions = !1, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.computedConfigurable = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1
                }
            }(),
            eV = {};

        function eU() {
            return "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : eV
        }
        var eW = !0,
            eX = !1,
            eK = function() {
                var e = eU();
                return (e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (eW = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new eF().version && (eW = !1), eW) ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = new eF) : (setTimeout(function() {
                    eX || c("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`")
                }, 1), new eF)
            }();

        function ez() {
            (eK.pendingReactions.length || eK.inBatch || eK.isRunningReactions) && c("isolateGlobalState should be called before MobX is running any reactions"), eX = !0, eW && (0 == --eU().__mobxInstanceCount && (eU().__mobxGlobals = void 0), eK = new eF)
        }

        function eq(e, t) {
            e.observers.add(t), e.lowestObserverState > t.dependenciesState && (e.lowestObserverState = t.dependenciesState)
        }

        function eY(e, t) {
            e.observers.delete(t), 0 === e.observers.size && eQ(e)
        }

        function eQ(e) {
            !1 === e.isPendingUnobservation && (e.isPendingUnobservation = !0, eK.pendingUnobservations.push(e))
        }

        function eZ() {
            eK.inBatch++
        }

        function eJ() {
            if (0 == --eK.inBatch) {
                e8();
                for (var e = eK.pendingUnobservations, t = 0; t < e.length; t++) {
                    var n = e[t];
                    n.isPendingUnobservation = !1, 0 === n.observers.size && (n.isBeingObserved && (n.isBeingObserved = !1, n.onBecomeUnobserved()), n instanceof eH && n.suspend())
                }
                eK.pendingUnobservations = []
            }
        }

        function e0(e) {
            var t = eK.trackingDerivation;
            return null !== t ? (t.runId === e.lastAccessedBy || (e.lastAccessedBy = t.runId, t.newObserving[t.unboundDepsCount++] = e, e.isBeingObserved || (e.isBeingObserved = !0, e.onBecomeObserved())), !0) : (0 === e.observers.size && eK.inBatch > 0 && eQ(e), !1)
        }

        function e1(e) {
            e.lowestObserverState !== r.STALE && (e.lowestObserverState = r.STALE, e.observers.forEach(function(t) {
                t.dependenciesState === r.UP_TO_DATE && (t.isTracing !== i.NONE && e5(t, e), t.onBecomeStale()), t.dependenciesState = r.STALE
            }))
        }

        function e2(e) {
            e.lowestObserverState !== r.STALE && (e.lowestObserverState = r.STALE, e.observers.forEach(function(t) {
                t.dependenciesState === r.POSSIBLY_STALE ? t.dependenciesState = r.STALE : t.dependenciesState === r.UP_TO_DATE && (e.lowestObserverState = r.UP_TO_DATE)
            }))
        }

        function e3(e) {
            e.lowestObserverState === r.UP_TO_DATE && (e.lowestObserverState = r.POSSIBLY_STALE, e.observers.forEach(function(t) {
                t.dependenciesState === r.UP_TO_DATE && (t.dependenciesState = r.POSSIBLY_STALE, t.isTracing !== i.NONE && e5(t, e), t.onBecomeStale())
            }))
        }

        function e5(e, t) {
            if (console.log("[mobx.trace] '" + e.name + "' is invalidated due to a change in: '" + t.name + "'"), e.isTracing === i.BREAK) {
                var n = [];
                e4(tw(e), n, 1), Function("debugger;\n/*\nTracing '" + e.name + "'\n\nYou are entering this break point because derivation '" + e.name + "' is being traced and '" + t.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (e instanceof eH ? e.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + n.join("\n") + "\n*/\n    ")()
            }
        }

        function e4(e, t, n) {
            if (t.length >= 1e3) {
                t.push("(and many more)");
                return
            }
            t.push("" + Array(n).join("	") + e.name), e.dependencies && e.dependencies.forEach(function(e) {
                return e4(e, t, n + 1)
            })
        }
        var e7 = function() {
                function e(e, t, n, o) {
                    void 0 === e && (e = "Reaction@" + l()), void 0 === o && (o = !1), this.name = e, this.onInvalidate = t, this.errorHandler = n, this.requiresObservable = o, this.observing = [], this.newObserving = [], this.dependenciesState = r.NOT_TRACKING, this.diffValue = 0, this.runId = 0, this.unboundDepsCount = 0, this.__mapid = "#" + l(), this.isDisposed = !1, this._isScheduled = !1, this._isTrackPending = !1, this._isRunning = !1, this.isTracing = i.NONE
                }
                return e.prototype.onBecomeStale = function() {
                    this.schedule()
                }, e.prototype.schedule = function() {
                    this._isScheduled || (this._isScheduled = !0, eK.pendingReactions.push(this), e8())
                }, e.prototype.isScheduled = function() {
                    return this._isScheduled
                }, e.prototype.runReaction = function() {
                    if (!this.isDisposed) {
                        if (eZ(), this._isScheduled = !1, eb(this)) {
                            this._isTrackPending = !0;
                            try {
                                this.onInvalidate(), this._isTrackPending && tr()
                            } catch (e) {
                                this.reportExceptionInDerivation(e)
                            }
                        }
                        eJ()
                    }
                }, e.prototype.track = function(e) {
                    if (!this.isDisposed) {
                        eZ(), tr(), this._isRunning = !0;
                        var t = ey(this, e, void 0);
                        this._isRunning = !1, this._isTrackPending = !1, this.isDisposed && eT(this), eg(t) && this.reportExceptionInDerivation(t.cause), eJ()
                    }
                }, e.prototype.reportExceptionInDerivation = function(e) {
                    var t = this;
                    if (this.errorHandler) {
                        this.errorHandler(e, this);
                        return
                    }
                    if (eK.disableErrorBoundaries) throw e;
                    var n = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
                    eK.suppressReactionErrors ? console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)") : console.error(n, e), tr() && this.name, eK.globalReactionErrorHandlers.forEach(function(n) {
                        return n(e, t)
                    })
                }, e.prototype.dispose = function() {
                    this.isDisposed || (this.isDisposed = !0, this._isRunning || (eZ(), eT(this), eJ()))
                }, e.prototype.getDisposer = function() {
                    var e = this.dispose.bind(this);
                    return e[B] = this, e
                }, e.prototype.toString = function() {
                    return "Reaction[" + this.name + "]"
                }, e.prototype.trace = function(e) {
                    void 0 === e && (e = !1), tB(this, e)
                }, e
            }(),
            e9 = 100,
            e6 = function(e) {
                return e()
            };

        function e8() {
            eK.inBatch > 0 || eK.isRunningReactions || e6(te)
        }

        function te() {
            eK.isRunningReactions = !0;
            for (var e = eK.pendingReactions, t = 0; e.length > 0;) {
                ++t === e9 && (console.error("Reaction doesn't converge to a stable state after " + e9 + " iterations. Probably there is a cycle in the reactive function: " + e[0]), e.splice(0));
                for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction()
            }
            eK.isRunningReactions = !1
        }
        var tt = P("Reaction", e7);

        function tn(e) {
            var t = e6;
            e6 = function(n) {
                return e(function() {
                    return t(n)
                })
            }
        }

        function tr() {
            return !1
        }

        function ti(e) {}

        function to(e) {
            return console.warn("[mobx.spy] Is a no-op in production builds"),
                function() {}
        }

        function ta() {
            c(!1)
        }

        function ts(e) {
            return function(t, n, r) {
                if (r) {
                    if (r.value) return {
                        value: eI(e, r.value),
                        enumerable: !1,
                        configurable: !0,
                        writable: !0
                    };
                    var i = r.initializer;
                    return {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        initializer: function() {
                            return eI(e, i.call(this))
                        }
                    }
                }
                return tu(e).apply(this, arguments)
            }
        }

        function tu(e) {
            return function(t, n, r) {
                Object.defineProperty(t, n, {
                    configurable: !0,
                    enumerable: !1,
                    get: function() {},
                    set: function(t) {
                        S(this, n, tl(e, t))
                    }
                })
            }
        }

        function td(e, t, n, r) {
            return !0 === r ? (tf(e, t, n.value), null) : n ? {
                configurable: !0,
                enumerable: !1,
                get: function() {
                    return tf(this, t, n.value || n.initializer.call(this)), this[t]
                },
                set: ta
            } : {
                enumerable: !1,
                configurable: !0,
                set: function(e) {
                    tf(this, t, e)
                },
                get: function() {}
            }
        }
        var tl = function(e, t, n, r) {
            return 1 == arguments.length && "function" == typeof e ? eI(e.name || "<unnamed action>", e) : 2 == arguments.length && "function" == typeof t ? eI(e, t) : 1 == arguments.length && "string" == typeof e ? ts(e) : !0 !== r ? ts(t).apply(null, arguments) : void S(e, t, eI(e.name || t, n.value, this))
        };

        function tc(e, t) {
            return eD("string" == typeof e ? e : e.name || "<unnamed action>", "function" == typeof e ? e : t, this, void 0)
        }

        function tf(e, t, n) {
            S(e, t, eI(t, n.bind(e)))
        }

        function th(e, t) {
            void 0 === t && (t = d);
            var n, r = t && t.name || e.name || "Autorun@" + l();
            if (t.scheduler || t.delay) {
                var i = tg(t),
                    o = !1;
                n = new e7(r, function() {
                    o || (o = !0, i(function() {
                        o = !1, n.isDisposed || n.track(a)
                    }))
                }, t.onError, t.requiresObservable)
            } else n = new e7(r, function() {
                this.track(a)
            }, t.onError, t.requiresObservable);

            function a() {
                e(n)
            }
            return n.schedule(), n.getDisposer()
        }
        tl.bound = td;
        var tp = function(e) {
            return e()
        };

        function tg(e) {
            return e.scheduler ? e.scheduler : e.delay ? function(t) {
                return setTimeout(t, e.delay)
            } : tp
        }

        function tb(e, t, n) {
            return tv("onBecomeObserved", e, t, n)
        }

        function tm(e, t, n) {
            return tv("onBecomeUnobserved", e, t, n)
        }

        function tv(e, t, n, r) {
            var i = "function" == typeof r ? nn(t, n) : nn(t),
                o = "function" == typeof r ? r : n,
                a = e + "Listeners";
            return (i[a] ? i[a].add(o) : i[a] = new Set([o]), "function" != typeof i[e]) ? c(!1) : function() {
                var e = i[a];
                e && (e.delete(o), 0 === e.size && delete i[a])
            }
        }

        function ty(e) {
            var t = e.enforceActions,
                n = e.computedRequiresReaction,
                r = e.computedConfigurable,
                i = e.disableErrorBoundaries,
                o = e.reactionScheduler,
                a = e.reactionRequiresObservable,
                s = e.observableRequiresReaction;
            if (!0 === e.isolateGlobalState && ez(), void 0 !== t) {
                ("boolean" == typeof t || "strict" === t) && h("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
                var u = void 0;
                switch (t) {
                    case !0:
                    case "observed":
                        u = !0;
                        break;
                    case !1:
                    case "never":
                        u = !1;
                        break;
                    case "strict":
                    case "always":
                        u = "strict";
                        break;
                    default:
                        c("Invalid value for 'enforceActions': '" + t + "', expected 'never', 'always' or 'observed'")
                }
                eK.enforceActions = u, eK.allowStateChanges = !0 !== u && "strict" !== u
            }
            void 0 !== n && (eK.computedRequiresReaction = !!n), void 0 !== a && (eK.reactionRequiresObservable = !!a), void 0 !== s && (eK.observableRequiresReaction = !!s, eK.allowStateReads = !eK.observableRequiresReaction), void 0 !== r && (eK.computedConfigurable = !!r), void 0 !== i && (!0 === i && console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled."), eK.disableErrorBoundaries = !!i), o && tn(o)
        }

        function tS(e, t, n, r) {
            var i = t$(r = en(r));
            return K(e), t5(e, r.name, i.enhancer), t && tT(e, t, n, i), e
        }

        function t$(e) {
            return e.defaultDecorator || (!1 === e.deep ? eo : er)
        }

        function tT(e, t, n, r) {
            eZ();
            try {
                var i, o, a, s = x(t);
                try {
                    for (var u = R(s), d = u.next(); !d.done; d = u.next()) {
                        var a = d.value,
                            l = Object.getOwnPropertyDescriptor(t, a),
                            c = (n && a in n ? n[a] : l.get ? ec : r)(e, a, l, !0);
                        c && Object.defineProperty(e, a, c)
                    }
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        d && !d.done && (o = u.return) && o.call(u)
                    } finally {
                        if (i) throw i.error
                    }
                }
            } finally {
                eJ()
            }
        }

        function tw(e, t) {
            return tP(nn(e, t))
        }

        function tP(e) {
            var t = {
                name: e.name
            };
            return e.observing && e.observing.length > 0 && (t.dependencies = b(e.observing).map(tP)), t
        }

        function tA(e, t) {
            return null != e && (void 0 !== t ? !!nt(e) && e[B].values.has(t) : nt(e) || !!e[B] || D(e) || tt(e) || ej(e))
        }

        function tM(e) {
            return 1 != arguments.length && c(!1), tA(e)
        }

        function tC(e, t, n) {
            if (2 == arguments.length && !t2(e)) {
                eZ();
                var r = t;
                try {
                    for (var i in r) tC(e, i, r[i])
                } finally {
                    eJ()
                }
                return
            }
            if (nt(e)) {
                var o = e[B];
                o.values.get(t) ? o.write(t, n) : o.addObservableProp(t, n, o.defaultEnhancer)
            } else if (tJ(e)) e.set(t, n);
            else if (t2(e)) e.add(t);
            else {
                if (!tY(e)) return c(!1);
                "number" != typeof t && (t = parseInt(t, 10)), f(t >= 0, "Not a valid index: '" + t + "'"), eZ(), t >= e.length && (e.length = t + 1), e[t] = n, eJ()
            }
        }

        function tO(e, t, n, r) {
            return "function" == typeof n ? tx(e, t, n, r) : tE(e, t, n)
        }

        function tE(e, t, n) {
            return nr(e).observe(t, n)
        }

        function tx(e, t, n, r) {
            return nr(e, t).observe(n, r)
        }

        function tB() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = !1;
            "boolean" == typeof e[e.length - 1] && (n = e.pop());
            var r = tI(e);
            if (!r) return c(!1);
            r.isTracing === i.NONE && console.log("[mobx.trace] '" + r.name + "' tracing enabled"), r.isTracing = n ? i.BREAK : i.LOG
        }

        function tI(e) {
            switch (e.length) {
                case 0:
                    return eK.trackingDerivation;
                case 1:
                    return nn(e[0]);
                case 2:
                    return nn(e[0], e[1])
            }
        }

        function tD(e, t) {
            void 0 === t && (t = void 0), eZ();
            try {
                return e.apply(t)
            } finally {
                eJ()
            }
        }

        function t_(e) {
            return e[B]
        }

        function tk(e) {
            return "string" == typeof e || "number" == typeof e || "symbol" == typeof e
        }
        Object.create(Error.prototype);
        var tG = {
            has: function(e, t) {
                if (t === B || "constructor" === t || t === F) return !0;
                var n = t_(e);
                return tk(t) ? n.has(t) : t in e
            },
            get: function(e, t) {
                if (t === B || "constructor" === t || t === F) return e[t];
                var n = t_(e),
                    r = n.values.get(t);
                if (r instanceof I) {
                    var i = r.get();
                    return void 0 === i && n.has(t), i
                }
                return tk(t) && n.has(t), e[t]
            },
            set: function(e, t, n) {
                return !!tk(t) && (tC(e, t, n), !0)
            },
            deleteProperty: function(e, t) {
                return !!tk(t) && (t_(e).remove(t), !0)
            },
            ownKeys: function(e) {
                return t_(e).keysAtom.reportObserved(), Reflect.ownKeys(e)
            },
            preventExtensions: function(e) {
                return c("Dynamic observable objects cannot be frozen"), !1
            }
        };

        function tN(e) {
            var t = new Proxy(e, tG);
            return e[B].proxy = t, t
        }

        function tL(e) {
            return void 0 !== e.interceptors && e.interceptors.length > 0
        }

        function tR(e, t) {
            var n = e.interceptors || (e.interceptors = []);
            return n.push(t), p(function() {
                var e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
            })
        }

        function tH(e, t) {
            var n = eP();
            try {
                for (var r = j(e.interceptors || []), i = 0, o = r.length; i < o && (t = r[i](t), f(!t || t.type, "Intercept handlers should return nothing or a change object"), t); i++);
                return t
            } finally {
                eA(n)
            }
        }

        function tj(e) {
            return void 0 !== e.changeListeners && e.changeListeners.length > 0
        }

        function tF(e, t) {
            var n = e.changeListeners || (e.changeListeners = []);
            return n.push(t), p(function() {
                var e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
            })
        }

        function tV(e, t) {
            var n = eP(),
                r = e.changeListeners;
            if (r) {
                r = r.slice();
                for (var i = 0, o = r.length; i < o; i++) r[i](t);
                eA(n)
            }
        }
        var tU = 1e4,
            tW = {
                get: function(e, t) {
                    return t === B ? e[B] : "length" === t ? e[B].getArrayLength() : "number" == typeof t ? tz.get.call(e, t) : "string" != typeof t || isNaN(t) ? tz.hasOwnProperty(t) ? tz[t] : e[t] : tz.get.call(e, parseInt(t))
                },
                set: function(e, t, n) {
                    return "length" === t && e[B].setArrayLength(n), "number" == typeof t && tz.set.call(e, t, n), "symbol" == typeof t || isNaN(t) ? e[t] = n : tz.set.call(e, parseInt(t), n), !0
                },
                preventExtensions: function(e) {
                    return c("Observable arrays cannot be frozen"), !1
                }
            };

        function tX(e, t, n, r) {
            void 0 === n && (n = "ObservableArray@" + l()), void 0 === r && (r = !1);
            var i = new tK(n, t, r);
            $(i.values, B, i);
            var o = new Proxy(i.values, tW);
            if (i.proxy = o, e && e.length) {
                var a = eN(!0);
                i.spliceWithArray(0, 0, e), eL(a)
            }
            return o
        }
        var tK = function() {
                function e(e, t, n) {
                    this.owned = n, this.values = [], this.proxy = void 0, this.lastKnownLength = 0, this.atom = new I(e || "ObservableArray@" + l()), this.enhancer = function(n, r) {
                        return t(n, r, e + "[..]")
                    }
                }
                return e.prototype.dehanceValue = function(e) {
                    return void 0 !== this.dehancer ? this.dehancer(e) : e
                }, e.prototype.dehanceValues = function(e) {
                    return void 0 !== this.dehancer && e.length > 0 ? e.map(this.dehancer) : e
                }, e.prototype.intercept = function(e) {
                    return tR(this, e)
                }, e.prototype.observe = function(e, t) {
                    return void 0 === t && (t = !1), t && e({
                        object: this.proxy,
                        type: "splice",
                        index: 0,
                        added: this.values.slice(),
                        addedCount: this.values.length,
                        removed: [],
                        removedCount: 0
                    }), tF(this, e)
                }, e.prototype.getArrayLength = function() {
                    return this.atom.reportObserved(), this.values.length
                }, e.prototype.setArrayLength = function(e) {
                    if ("number" != typeof e || e < 0) throw Error("[mobx.array] Out of range: " + e);
                    var t = this.values.length;
                    if (e !== t) {
                        if (e > t) {
                            for (var n = Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
                            this.spliceWithArray(t, 0, n)
                        } else this.spliceWithArray(e, t - e)
                    }
                }, e.prototype.updateArrayLength = function(e, t) {
                    if (e !== this.lastKnownLength) throw Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
                    this.lastKnownLength += t
                }, e.prototype.spliceWithArray = function(e, t, n) {
                    var r = this;
                    em(this.atom);
                    var i = this.values.length;
                    if (void 0 === e ? e = 0 : e > i ? e = i : e < 0 && (e = Math.max(0, i + e)), t = 1 == arguments.length ? i - e : null == t ? 0 : Math.max(0, Math.min(t, i - e)), void 0 === n && (n = u), tL(this)) {
                        var o = tH(this, {
                            object: this.proxy,
                            type: "splice",
                            index: e,
                            removedCount: t,
                            added: n
                        });
                        if (!o) return u;
                        t = o.removedCount, n = o.added
                    }
                    n = 0 === n.length ? n : n.map(function(e) {
                        return r.enhancer(e, void 0)
                    });
                    var a = this.spliceItemsIntoValues(e, t, n);
                    return (0 !== t || 0 !== n.length) && this.notifyArraySplice(e, n, a), this.dehanceValues(a)
                }, e.prototype.spliceItemsIntoValues = function(e, t, n) {
                    if (n.length < tU) return (r = this.values).splice.apply(r, j([e, t], n));
                    var r, i = this.values.slice(e, e + t);
                    return this.values = this.values.slice(0, e).concat(n, this.values.slice(e + t)), i
                }, e.prototype.notifyArrayChildUpdate = function(e, t, n) {
                    var r = !this.owned && tr(),
                        i = tj(this),
                        o = i || r ? {
                            object: this.proxy,
                            type: "update",
                            index: e,
                            newValue: t,
                            oldValue: n
                        } : null;
                    this.atom.reportChanged(), i && tV(this, o)
                }, e.prototype.notifyArraySplice = function(e, t, n) {
                    var r = !this.owned && tr(),
                        i = tj(this),
                        o = i || r ? {
                            object: this.proxy,
                            type: "splice",
                            index: e,
                            removed: n,
                            added: t,
                            removedCount: n.length,
                            addedCount: t.length
                        } : null;
                    this.atom.reportChanged(), i && tV(this, o)
                }, e
            }(),
            tz = {
                intercept: function(e) {
                    return this[B].intercept(e)
                },
                observe: function(e, t) {
                    return void 0 === t && (t = !1), this[B].observe(e, t)
                },
                clear: function() {
                    return this.splice(0)
                },
                replace: function(e) {
                    var t = this[B];
                    return t.spliceWithArray(0, t.values.length, e)
                },
                toJS: function() {
                    return this.slice()
                },
                toJSON: function() {
                    return this.toJS()
                },
                splice: function(e, t) {
                    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                    var i = this[B];
                    switch (arguments.length) {
                        case 0:
                            return [];
                        case 1:
                            return i.spliceWithArray(e);
                        case 2:
                            return i.spliceWithArray(e, t)
                    }
                    return i.spliceWithArray(e, t, n)
                },
                spliceWithArray: function(e, t, n) {
                    return this[B].spliceWithArray(e, t, n)
                },
                push: function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = this[B];
                    return n.spliceWithArray(n.values.length, 0, e), n.values.length
                },
                pop: function() {
                    return this.splice(Math.max(this[B].values.length - 1, 0), 1)[0]
                },
                shift: function() {
                    return this.splice(0, 1)[0]
                },
                unshift: function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = this[B];
                    return n.spliceWithArray(0, 0, e), n.values.length
                },
                reverse: function() {
                    var e = this.slice();
                    return e.reverse.apply(e, arguments)
                },
                sort: function(e) {
                    var t = this.slice();
                    return t.sort.apply(t, arguments)
                },
                remove: function(e) {
                    var t = this[B],
                        n = t.dehanceValues(t.values).indexOf(e);
                    return n > -1 && (this.splice(n, 1), !0)
                },
                get: function(e) {
                    var t = this[B];
                    if (t) {
                        if (e < t.values.length) return t.atom.reportObserved(), t.dehanceValue(t.values[e]);
                        console.warn("[mobx.array] Attempt to read an array index (" + e + ") that is out of bounds (" + t.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX")
                    }
                },
                set: function(e, t) {
                    var n = this[B],
                        r = n.values;
                    if (e < r.length) {
                        em(n.atom);
                        var i = r[e];
                        if (tL(n)) {
                            var o = tH(n, {
                                type: "update",
                                object: n.proxy,
                                index: e,
                                newValue: t
                            });
                            if (!o) return;
                            t = o.newValue
                        }(t = n.enhancer(t, i)) !== i && (r[e] = t, n.notifyArrayChildUpdate(e, t, i))
                    } else if (e === r.length) n.spliceWithArray(e, 0, [t]);
                    else throw Error("[mobx.array] Index out of bounds, " + e + " is larger than " + r.length)
                }
            };
        ["concat", "flat", "includes", "indexOf", "join", "lastIndexOf", "slice", "toString", "toLocaleString"].forEach(function(e) {
            "function" == typeof Array.prototype[e] && (tz[e] = function() {
                var t = this[B];
                t.atom.reportObserved();
                var n = t.dehanceValues(t.values);
                return n[e].apply(n, arguments)
            })
        }), ["every", "filter", "find", "findIndex", "flatMap", "forEach", "map", "some"].forEach(function(e) {
            "function" == typeof Array.prototype[e] && (tz[e] = function(t, n) {
                var r = this,
                    i = this[B];
                return i.atom.reportObserved(), i.dehanceValues(i.values)[e](function(e, i) {
                    return t.call(n, e, i, r)
                }, n)
            })
        }), ["reduce", "reduceRight"].forEach(function(e) {
            tz[e] = function() {
                var t = this,
                    n = this[B];
                n.atom.reportObserved();
                var r = arguments[0];
                return arguments[0] = function(e, i, o) {
                    return r(e, i = n.dehanceValue(i), o, t)
                }, n.values[e].apply(n.values, arguments)
            }
        });
        var tq = P("ObservableArrayAdministration", tK);

        function tY(e) {
            return m(e) && tq(e[B])
        }
        var tQ = {},
            tZ = function() {
                function e(e, t, n) {
                    if (void 0 === t && (t = Y), void 0 === n && (n = "ObservableMap@" + l()), this.enhancer = t, this.name = n, this[o] = tQ, this._keysAtom = _(this.name + ".keys()"), this[Symbol.toStringTag] = "Map", "function" != typeof Map) throw Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
                    this._data = new Map, this._hasMap = new Map, this.merge(e)
                }
                return e.prototype._has = function(e) {
                    return this._data.has(e)
                }, e.prototype.has = function(e) {
                    var t = this;
                    if (!eK.trackingDerivation) return this._has(e);
                    var n = this._hasMap.get(e);
                    if (!n) {
                        var r = n = new eR(this._has(e), Z, this.name + "." + O(e) + "?", !1);
                        this._hasMap.set(e, r), tm(r, function() {
                            return t._hasMap.delete(e)
                        })
                    }
                    return n.get()
                }, e.prototype.set = function(e, t) {
                    var n = this._has(e);
                    if (tL(this)) {
                        var r = tH(this, {
                            type: n ? "update" : "add",
                            object: this,
                            newValue: t,
                            name: e
                        });
                        if (!r) return this;
                        t = r.newValue
                    }
                    return n ? this._updateValue(e, t) : this._addValue(e, t), this
                }, e.prototype.delete = function(e) {
                    var t = this;
                    if (em(this._keysAtom), tL(this)) {
                        var n = tH(this, {
                            type: "delete",
                            object: this,
                            name: e
                        });
                        if (!n) return !1
                    }
                    if (this._has(e)) {
                        var r = tr(),
                            i = tj(this),
                            n = i || r ? {
                                type: "delete",
                                object: this,
                                oldValue: this._data.get(e).value,
                                name: e
                            } : null;
                        return tD(function() {
                            t._keysAtom.reportChanged(), t._updateHasMapEntry(e, !1), t._data.get(e).setNewValue(void 0), t._data.delete(e)
                        }), i && tV(this, n), !0
                    }
                    return !1
                }, e.prototype._updateHasMapEntry = function(e, t) {
                    var n = this._hasMap.get(e);
                    n && n.setNewValue(t)
                }, e.prototype._updateValue = function(e, t) {
                    var n = this._data.get(e);
                    if ((t = n.prepareNewValue(t)) !== eK.UNCHANGED) {
                        var r = tr(),
                            i = tj(this),
                            o = i || r ? {
                                type: "update",
                                object: this,
                                oldValue: n.value,
                                name: e,
                                newValue: t
                            } : null;
                        n.setNewValue(t), i && tV(this, o)
                    }
                }, e.prototype._addValue = function(e, t) {
                    var n = this;
                    em(this._keysAtom), tD(function() {
                        var r = new eR(t, n.enhancer, n.name + "." + O(e), !1);
                        n._data.set(e, r), t = r.value, n._updateHasMapEntry(e, !0), n._keysAtom.reportChanged()
                    });
                    var r = tr(),
                        i = tj(this),
                        o = i || r ? {
                            type: "add",
                            object: this,
                            name: e,
                            newValue: t
                        } : null;
                    i && tV(this, o)
                }, e.prototype.get = function(e) {
                    return this.has(e) ? this.dehanceValue(this._data.get(e).get()) : this.dehanceValue(void 0)
                }, e.prototype.dehanceValue = function(e) {
                    return void 0 !== this.dehancer ? this.dehancer(e) : e
                }, e.prototype.keys = function() {
                    return this._keysAtom.reportObserved(), this._data.keys()
                }, e.prototype.values = function() {
                    var e = this,
                        t = this.keys();
                    return nl({
                        next: function() {
                            var n = t.next(),
                                r = n.done,
                                i = n.value;
                            return {
                                done: r,
                                value: r ? void 0 : e.get(i)
                            }
                        }
                    })
                }, e.prototype.entries = function() {
                    var e = this,
                        t = this.keys();
                    return nl({
                        next: function() {
                            var n = t.next(),
                                r = n.done,
                                i = n.value;
                            return {
                                done: r,
                                value: r ? void 0 : [i, e.get(i)]
                            }
                        }
                    })
                }, e.prototype[o = B, Symbol.iterator] = function() {
                    return this.entries()
                }, e.prototype.forEach = function(e, t) {
                    var n, r;
                    try {
                        for (var i = R(this), o = i.next(); !o.done; o = i.next()) {
                            var a = H(o.value, 2),
                                s = a[0],
                                u = a[1];
                            e.call(t, u, s, this)
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (r = i.return) && r.call(i)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                }, e.prototype.merge = function(e) {
                    var t = this;
                    return tJ(e) && (e = e.toJS()), tD(function() {
                        var n = eN(!0);
                        try {
                            v(e) ? C(e).forEach(function(n) {
                                return t.set(n, e[n])
                            }) : Array.isArray(e) ? e.forEach(function(e) {
                                var n = H(e, 2),
                                    r = n[0],
                                    i = n[1];
                                return t.set(r, i)
                            }) : A(e) ? (e.constructor !== Map && c("Cannot initialize from classes that inherit from Map: " + e.constructor.name), e.forEach(function(e, n) {
                                return t.set(n, e)
                            })) : null != e && c("Cannot initialize map from " + e)
                        } finally {
                            eL(n)
                        }
                    }), this
                }, e.prototype.clear = function() {
                    var e = this;
                    tD(function() {
                        ew(function() {
                            var t, n;
                            try {
                                for (var r = R(e.keys()), i = r.next(); !i.done; i = r.next()) {
                                    var o = i.value;
                                    e.delete(o)
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = r.return) && n.call(r)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                        })
                    })
                }, e.prototype.replace = function(e) {
                    var t = this;
                    return tD(function() {
                        var n, r, i, o, a = y(e),
                            s = new Map,
                            u = !1;
                        try {
                            for (var d = R(t._data.keys()), l = d.next(); !l.done; l = d.next()) {
                                var c = l.value;
                                if (!a.has(c)) {
                                    if (t.delete(c)) u = !0;
                                    else {
                                        var f = t._data.get(c);
                                        s.set(c, f)
                                    }
                                }
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                l && !l.done && (r = d.return) && r.call(d)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        try {
                            for (var h = R(a.entries()), p = h.next(); !p.done; p = h.next()) {
                                var g = H(p.value, 2),
                                    c = g[0],
                                    f = g[1],
                                    b = t._data.has(c);
                                if (t.set(c, f), t._data.has(c)) {
                                    var m = t._data.get(c);
                                    s.set(c, m), b || (u = !0)
                                }
                            }
                        } catch (e) {
                            i = {
                                error: e
                            }
                        } finally {
                            try {
                                p && !p.done && (o = h.return) && o.call(h)
                            } finally {
                                if (i) throw i.error
                            }
                        }
                        if (!u) {
                            if (t._data.size !== s.size) t._keysAtom.reportChanged();
                            else
                                for (var v = t._data.keys(), S = s.keys(), $ = v.next(), T = S.next(); !$.done;) {
                                    if ($.value !== T.value) {
                                        t._keysAtom.reportChanged();
                                        break
                                    }
                                    $ = v.next(), T = S.next()
                                }
                        }
                        t._data = s
                    }), this
                }, Object.defineProperty(e.prototype, "size", {
                    get: function() {
                        return this._keysAtom.reportObserved(), this._data.size
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.toPOJO = function() {
                    var e, t, n = {};
                    try {
                        for (var r = R(this), i = r.next(); !i.done; i = r.next()) {
                            var o = H(i.value, 2),
                                a = o[0],
                                s = o[1];
                            n["symbol" == typeof a ? a : O(a)] = s
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            i && !i.done && (t = r.return) && t.call(r)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    return n
                }, e.prototype.toJS = function() {
                    return new Map(this)
                }, e.prototype.toJSON = function() {
                    return this.toPOJO()
                }, e.prototype.toString = function() {
                    var e = this;
                    return this.name + "[{ " + Array.from(this.keys()).map(function(t) {
                        return O(t) + ": " + e.get(t)
                    }).join(", ") + " }]"
                }, e.prototype.observe = function(e, t) {
                    return tF(this, e)
                }, e.prototype.intercept = function(e) {
                    return tR(this, e)
                }, e
            }(),
            tJ = P("ObservableMap", tZ),
            t0 = {},
            t1 = function() {
                function e(e, t, n) {
                    if (void 0 === t && (t = Y), void 0 === n && (n = "ObservableSet@" + l()), this.name = n, this[a] = t0, this._data = new Set, this._atom = _(this.name), this[Symbol.toStringTag] = "Set", "function" != typeof Set) throw Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
                    this.enhancer = function(e, r) {
                        return t(e, r, n)
                    }, e && this.replace(e)
                }
                return e.prototype.dehanceValue = function(e) {
                    return void 0 !== this.dehancer ? this.dehancer(e) : e
                }, e.prototype.clear = function() {
                    var e = this;
                    tD(function() {
                        ew(function() {
                            var t, n;
                            try {
                                for (var r = R(e._data.values()), i = r.next(); !i.done; i = r.next()) {
                                    var o = i.value;
                                    e.delete(o)
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = r.return) && n.call(r)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                        })
                    })
                }, e.prototype.forEach = function(e, t) {
                    var n, r;
                    try {
                        for (var i = R(this), o = i.next(); !o.done; o = i.next()) {
                            var a = o.value;
                            e.call(t, a, a, this)
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (r = i.return) && r.call(i)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                }, Object.defineProperty(e.prototype, "size", {
                    get: function() {
                        return this._atom.reportObserved(), this._data.size
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.add = function(e) {
                    var t = this;
                    if (em(this._atom), tL(this)) {
                        var n = tH(this, {
                            type: "add",
                            object: this,
                            newValue: e
                        });
                        if (!n) return this
                    }
                    if (!this.has(e)) {
                        tD(function() {
                            t._data.add(t.enhancer(e, void 0)), t._atom.reportChanged()
                        });
                        var r = tr(),
                            i = tj(this),
                            n = i || r ? {
                                type: "add",
                                object: this,
                                newValue: e
                            } : null;
                        i && tV(this, n)
                    }
                    return this
                }, e.prototype.delete = function(e) {
                    var t = this;
                    if (tL(this)) {
                        var n = tH(this, {
                            type: "delete",
                            object: this,
                            oldValue: e
                        });
                        if (!n) return !1
                    }
                    if (this.has(e)) {
                        var r = tr(),
                            i = tj(this),
                            n = i || r ? {
                                type: "delete",
                                object: this,
                                oldValue: e
                            } : null;
                        return tD(function() {
                            t._atom.reportChanged(), t._data.delete(e)
                        }), i && tV(this, n), !0
                    }
                    return !1
                }, e.prototype.has = function(e) {
                    return this._atom.reportObserved(), this._data.has(this.dehanceValue(e))
                }, e.prototype.entries = function() {
                    var e = 0,
                        t = Array.from(this.keys()),
                        n = Array.from(this.values());
                    return nl({
                        next: function() {
                            var r = e;
                            return e += 1, r < n.length ? {
                                value: [t[r], n[r]],
                                done: !1
                            } : {
                                done: !0
                            }
                        }
                    })
                }, e.prototype.keys = function() {
                    return this.values()
                }, e.prototype.values = function() {
                    this._atom.reportObserved();
                    var e = this,
                        t = 0,
                        n = Array.from(this._data.values());
                    return nl({
                        next: function() {
                            return t < n.length ? {
                                value: e.dehanceValue(n[t++]),
                                done: !1
                            } : {
                                done: !0
                            }
                        }
                    })
                }, e.prototype.replace = function(e) {
                    var t = this;
                    return t2(e) && (e = e.toJS()), tD(function() {
                        var n = eN(!0);
                        try {
                            Array.isArray(e) ? (t.clear(), e.forEach(function(e) {
                                return t.add(e)
                            })) : M(e) ? (t.clear(), e.forEach(function(e) {
                                return t.add(e)
                            })) : null != e && c("Cannot initialize set from " + e)
                        } finally {
                            eL(n)
                        }
                    }), this
                }, e.prototype.observe = function(e, t) {
                    return tF(this, e)
                }, e.prototype.intercept = function(e) {
                    return tR(this, e)
                }, e.prototype.toJS = function() {
                    return new Set(this)
                }, e.prototype.toString = function() {
                    return this.name + "[ " + Array.from(this).join(", ") + " ]"
                }, e.prototype[a = B, Symbol.iterator] = function() {
                    return this.values()
                }, e
            }(),
            t2 = P("ObservableSet", t1),
            t3 = function() {
                function e(e, t, n, r) {
                    void 0 === t && (t = new Map), this.target = e, this.values = t, this.name = n, this.defaultEnhancer = r, this.keysAtom = new I(n + ".keys")
                }
                return e.prototype.read = function(e) {
                    return this.values.get(e).get()
                }, e.prototype.write = function(e, t) {
                    var n = this.target,
                        r = this.values.get(e);
                    if (r instanceof eH) {
                        r.set(t);
                        return
                    }
                    if (tL(this)) {
                        var i = tH(this, {
                            type: "update",
                            object: this.proxy || n,
                            name: e,
                            newValue: t
                        });
                        if (!i) return;
                        t = i.newValue
                    }
                    if ((t = r.prepareNewValue(t)) !== eK.UNCHANGED) {
                        var o = tj(this),
                            a = tr(),
                            i = o || a ? {
                                type: "update",
                                object: this.proxy || n,
                                oldValue: r.value,
                                name: e,
                                newValue: t
                            } : null;
                        r.setNewValue(t), o && tV(this, i)
                    }
                }, e.prototype.has = function(e) {
                    var t = this.pendingKeys || (this.pendingKeys = new Map),
                        n = t.get(e);
                    return n || (n = new eR(!!this.values.get(e), Z, this.name + "." + O(e) + "?", !1), t.set(e, n)), n.get()
                }, e.prototype.addObservableProp = function(e, t, n) {
                    void 0 === n && (n = this.defaultEnhancer);
                    var r = this.target;
                    if (tL(this)) {
                        var i = tH(this, {
                            object: this.proxy || r,
                            name: e,
                            type: "add",
                            newValue: t
                        });
                        if (!i) return;
                        t = i.newValue
                    }
                    var o = new eR(t, n, this.name + "." + O(e), !1);
                    this.values.set(e, o), t = o.value, Object.defineProperty(r, e, t9(e)), this.notifyPropertyAddition(e, t)
                }, e.prototype.addComputedProp = function(e, t, n) {
                    var r = this.target;
                    n.name = n.name || this.name + "." + O(t), this.values.set(t, new eH(n)), (e === r || T(e, t)) && Object.defineProperty(e, t, t8(t))
                }, e.prototype.remove = function(e) {
                    if (this.values.has(e)) {
                        var t = this.target;
                        if (tL(this)) {
                            var n = tH(this, {
                                object: this.proxy || t,
                                name: e,
                                type: "remove"
                            });
                            if (!n) return
                        }
                        try {
                            eZ();
                            var r = tj(this),
                                i = tr(),
                                o = this.values.get(e),
                                a = o && o.get();
                            if (o && o.set(void 0), this.keysAtom.reportChanged(), this.values.delete(e), this.pendingKeys) {
                                var s = this.pendingKeys.get(e);
                                s && s.set(!1)
                            }
                            delete this.target[e];
                            var n = r || i ? {
                                type: "remove",
                                object: this.proxy || t,
                                oldValue: a,
                                name: e
                            } : null;
                            r && tV(this, n)
                        } finally {
                            eJ()
                        }
                    }
                }, e.prototype.illegalAccess = function(e, t) {
                    console.warn("Property '" + t + "' of '" + e + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner")
                }, e.prototype.observe = function(e, t) {
                    return tF(this, e)
                }, e.prototype.intercept = function(e) {
                    return tR(this, e)
                }, e.prototype.notifyPropertyAddition = function(e, t) {
                    var n = tj(this),
                        r = tr(),
                        i = n || r ? {
                            type: "add",
                            object: this.proxy || this.target,
                            name: e,
                            newValue: t
                        } : null;
                    if (n && tV(this, i), this.pendingKeys) {
                        var o = this.pendingKeys.get(e);
                        o && o.set(!0)
                    }
                    this.keysAtom.reportChanged()
                }, e.prototype.getKeys = function() {
                    this.keysAtom.reportObserved();
                    var e, t, n = [];
                    try {
                        for (var r = R(this.values), i = r.next(); !i.done; i = r.next()) {
                            var o = H(i.value, 2),
                                a = o[0];
                            o[1] instanceof eR && n.push(a)
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            i && !i.done && (t = r.return) && t.call(r)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    return n
                }, e
            }();

        function t5(e, t, n) {
            if (void 0 === t && (t = ""), void 0 === n && (n = Y), Object.prototype.hasOwnProperty.call(e, B)) return e[B];
            v(e) || (t = (e.constructor.name || "ObservableObject") + "@" + l()), t || (t = "ObservableObject@" + l());
            var r = new t3(e, new Map, O(t), n);
            return S(e, B, r), r
        }
        var t4 = Object.create(null),
            t7 = Object.create(null);

        function t9(e) {
            return t4[e] || (t4[e] = {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this[B].read(e)
                },
                set: function(t) {
                    this[B].write(e, t)
                }
            })
        }

        function t6(e) {
            var t = e[B];
            return t || (K(e), e[B])
        }

        function t8(e) {
            return t7[e] || (t7[e] = {
                configurable: eK.computedConfigurable,
                enumerable: !1,
                get: function() {
                    return t6(this).read(e)
                },
                set: function(t) {
                    t6(this).write(e, t)
                }
            })
        }
        var ne = P("ObservableObjectAdministration", t3);

        function nt(e) {
            return !!m(e) && (K(e), ne(e[B]))
        }

        function nn(e, t) {
            if ("object" == typeof e && null !== e) {
                if (tY(e)) return void 0 !== t && c(!1), e[B].atom;
                if (t2(e)) return e[B];
                if (tJ(e)) {
                    var n = e;
                    if (void 0 === t) return n._keysAtom;
                    var r = n._data.get(t) || n._hasMap.get(t);
                    return r || c(!1), r
                }
                if (K(e), t && !e[B] && e[t], nt(e)) {
                    if (!t) return c(!1);
                    var r = e[B].values.get(t);
                    return r || c(!1), r
                }
                if (D(e) || ej(e) || tt(e)) return e
            } else if ("function" == typeof e && tt(e[B])) return e[B];
            return c(!1)
        }

        function nr(e, t) {
            return (e || c("Expecting some object"), void 0 !== t) ? nr(nn(e, t)) : D(e) || ej(e) || tt(e) || tJ(e) || t2(e) ? e : (K(e), e[B]) ? e[B] : void c(!1)
        }

        function ni(e, t) {
            var n;
            return (n = void 0 !== t ? nn(e, t) : nt(e) || tJ(e) || t2(e) ? nr(e) : nn(e)).name
        }
        var no = Object.prototype.toString;

        function na(e, t, n) {
            return void 0 === n && (n = -1), ns(e, t, n)
        }

        function ns(e, t, n, r, i) {
            if (e === t) return 0 !== e || 1 / e == 1 / t;
            if (null == e || null == t) return !1;
            if (e != e) return t != t;
            var o = typeof e;
            if ("function" !== o && "object" !== o && "object" != typeof t) return !1;
            var a = no.call(e);
            if (a !== no.call(t)) return !1;
            switch (a) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + e == "" + t;
                case "[object Number]":
                    if (+e != +e) return +t != +t;
                    return 0 == +e ? 1 / +e == 1 / t : +e == +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e == +t;
                case "[object Symbol]":
                    return "undefined" != typeof Symbol && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
                case "[object Map]":
                case "[object Set]":
                    n >= 0 && n++
            }
            e = nu(e), t = nu(t);
            var s = "[object Array]" === a;
            if (!s) {
                if ("object" != typeof e || "object" != typeof t) return !1;
                var u = e.constructor,
                    d = t.constructor;
                if (u !== d && !("function" == typeof u && u instanceof u && "function" == typeof d && d instanceof d) && "constructor" in e && "constructor" in t) return !1
            }
            if (0 === n) return !1;
            n < 0 && (n = -1), i = i || [];
            for (var l = (r = r || []).length; l--;)
                if (r[l] === e) return i[l] === t;
            if (r.push(e), i.push(t), s) {
                if ((l = e.length) !== t.length) return !1;
                for (; l--;)
                    if (!ns(e[l], t[l], n - 1, r, i)) return !1
            } else {
                var c = Object.keys(e),
                    f = void 0;
                if (l = c.length, Object.keys(t).length !== l) return !1;
                for (; l--;)
                    if (!(nd(t, f = c[l]) && ns(e[f], t[f], n - 1, r, i))) return !1
            }
            return r.pop(), i.pop(), !0
        }

        function nu(e) {
            return tY(e) ? e.slice() : A(e) || tJ(e) || M(e) || t2(e) ? Array.from(e.entries()) : e
        }

        function nd(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        function nl(e) {
            return e[Symbol.iterator] = nc, e
        }

        function nc() {
            return this
        }
        if ("undefined" == typeof Proxy || "undefined" == typeof Symbol) throw Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
        "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: to,
            extras: {
                getDebugName: ni
            },
            $mobx: B
        })
    },
    7418: function(e) {
        "use strict";
        var t = Object.getOwnPropertySymbols,
            n = Object.prototype.hasOwnProperty,
            r = Object.prototype.propertyIsEnumerable;

        function i(e) {
            if (null == e) throw TypeError("Object.assign cannot be called with null or undefined");
            return Object(e)
        }

        function o() {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                var r = Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e]
                });
                if ("0123456789" !== r.join("")) return !1;
                var i = {};
                if ("abcdefghijklmnopqrst".split("").forEach(function(e) {
                        i[e] = e
                    }), "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, i)).join("")) return !1;
                return !0
            } catch (e) {
                return !1
            }
        }
        e.exports = o() ? Object.assign : function(e, o) {
            for (var a, s, u = i(e), d = 1; d < arguments.length; d++) {
                for (var l in a = Object(arguments[d])) n.call(a, l) && (u[l] = a[l]);
                if (t) {
                    s = t(a);
                    for (var c = 0; c < s.length; c++) r.call(a, s[c]) && (u[s[c]] = a[s[c]])
                }
            }
            return u
        }
    },
    4779: function(e, t, n) {
        var r = n(5826);
        e.exports = y, e.exports.parse = o, e.exports.compile = s, e.exports.tokensToFunction = l, e.exports.tokensToRegExp = v;
        var i = RegExp("(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))", "g");

        function o(e, t) {
            for (var n, r = [], o = 0, s = 0, u = "", d = t && t.delimiter || "/"; null != (n = i.exec(e));) {
                var l = n[0],
                    c = n[1],
                    h = n.index;
                if (u += e.slice(s, h), s = h + l.length, c) {
                    u += c[1];
                    continue
                }
                var p = e[s],
                    g = n[2],
                    b = n[3],
                    m = n[4],
                    v = n[5],
                    y = n[6],
                    S = n[7];
                u && (r.push(u), u = "");
                var $ = null != g && null != p && p !== g,
                    T = "+" === y || "*" === y,
                    w = "?" === y || "*" === y,
                    P = g || d,
                    A = m || v,
                    M = g || ("string" == typeof r[r.length - 1] ? r[r.length - 1] : "");
                r.push({
                    name: b || o++,
                    prefix: g || "",
                    delimiter: P,
                    optional: w,
                    repeat: T,
                    partial: $,
                    asterisk: !!S,
                    pattern: A ? f(A) : S ? ".*" : a(P, M)
                })
            }
            return s < e.length && (u += e.substr(s)), u && r.push(u), r
        }

        function a(e, t) {
            return !t || t.indexOf(e) > -1 ? "[^" + c(e) + "]+?" : c(t) + "|(?:(?!" + c(t) + ")[^" + c(e) + "])+?"
        }

        function s(e, t) {
            return l(o(e, t), t)
        }

        function u(e) {
            return encodeURI(e).replace(/[\/?#]/g, function(e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            })
        }

        function d(e) {
            return encodeURI(e).replace(/[?#]/g, function(e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            })
        }

        function l(e, t) {
            for (var n = Array(e.length), i = 0; i < e.length; i++) "object" == typeof e[i] && (n[i] = RegExp("^(?:" + e[i].pattern + ")$", p(t)));
            return function(t, i) {
                for (var o = "", a = t || {}, s = (i || {}).pretty ? u : encodeURIComponent, l = 0; l < e.length; l++) {
                    var c, f = e[l];
                    if ("string" == typeof f) {
                        o += f;
                        continue
                    }
                    var h = a[f.name];
                    if (null == h) {
                        if (f.optional) {
                            f.partial && (o += f.prefix);
                            continue
                        }
                        throw TypeError('Expected "' + f.name + '" to be defined')
                    }
                    if (r(h)) {
                        if (!f.repeat) throw TypeError('Expected "' + f.name + '" to not repeat, but received `' + JSON.stringify(h) + "`");
                        if (0 === h.length) {
                            if (f.optional) continue;
                            throw TypeError('Expected "' + f.name + '" to not be empty')
                        }
                        for (var p = 0; p < h.length; p++) {
                            if (c = s(h[p]), !n[l].test(c)) throw TypeError('Expected all "' + f.name + '" to match "' + f.pattern + '", but received `' + JSON.stringify(c) + "`");
                            o += (0 === p ? f.prefix : f.delimiter) + c
                        }
                        continue
                    }
                    if (c = f.asterisk ? d(h) : s(h), !n[l].test(c)) throw TypeError('Expected "' + f.name + '" to match "' + f.pattern + '", but received "' + c + '"');
                    o += f.prefix + c
                }
                return o
            }
        }

        function c(e) {
            return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
        }

        function f(e) {
            return e.replace(/([=!:$\/()])/g, "\\$1")
        }

        function h(e, t) {
            return e.keys = t, e
        }

        function p(e) {
            return e && e.sensitive ? "" : "i"
        }

        function g(e, t) {
            var n = e.source.match(/\((?!\?)/g);
            if (n)
                for (var r = 0; r < n.length; r++) t.push({
                    name: r,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    partial: !1,
                    asterisk: !1,
                    pattern: null
                });
            return h(e, t)
        }

        function b(e, t, n) {
            for (var r = [], i = 0; i < e.length; i++) r.push(y(e[i], t, n).source);
            return h(RegExp("(?:" + r.join("|") + ")", p(n)), t)
        }

        function m(e, t, n) {
            return v(o(e, n), t, n)
        }

        function v(e, t, n) {
            r(t) || (n = t || n, t = []);
            for (var i = (n = n || {}).strict, o = !1 !== n.end, a = "", s = 0; s < e.length; s++) {
                var u = e[s];
                if ("string" == typeof u) a += c(u);
                else {
                    var d = c(u.prefix),
                        l = "(?:" + u.pattern + ")";
                    t.push(u), u.repeat && (l += "(?:" + d + l + ")*"), a += l = u.optional ? u.partial ? d + "(" + l + ")?" : "(?:" + d + "(" + l + "))?" : d + "(" + l + ")"
                }
            }
            var f = c(n.delimiter || "/"),
                g = a.slice(-f.length) === f;
            return i || (a = (g ? a.slice(0, -f.length) : a) + "(?:" + f + "(?=$))?"), o ? a += "$" : a += i && g ? "" : "(?=" + f + "|$)", h(RegExp("^" + a, p(n)), t)
        }

        function y(e, t, n) {
            return (r(t) || (n = t || n, t = []), n = n || {}, e instanceof RegExp) ? g(e, t) : r(e) ? b(e, t, n) : m(e, t, n)
        }
    },
    1795: function(e, t, n) {
        e = n.nmd(e), (function() {
            "use strict";
            var r = {
                    function: !0,
                    object: !0
                },
                i = r[typeof window] && window || this,
                o = r[typeof t] && t,
                a = r.object && e && !e.nodeType && e,
                s = o && a && "object" == typeof n.g && n.g;
            s && (s.global === s || s.window === s || s.self === s) && (i = s);
            var u = 0x1fffffffffffff,
                d = /\bOpera/,
                l = Object.prototype,
                c = l.hasOwnProperty,
                f = l.toString;

            function h(e) {
                return (e = String(e)).charAt(0).toUpperCase() + e.slice(1)
            }

            function p(e, t, n) {
                var r = {
                    "10.0": "10",
                    "6.4": "10 Technical Preview",
                    "6.3": "8.1",
                    "6.2": "8",
                    "6.1": "Server 2008 R2 / 7",
                    "6.0": "Server 2008 / Vista",
                    "5.2": "Server 2003 / XP 64-bit",
                    "5.1": "XP",
                    "5.01": "2000 SP1",
                    "5.0": "2000",
                    "4.0": "NT",
                    "4.90": "ME"
                };
                return t && n && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (r = r[/[\d.]+$/.exec(e)]) && (e = "Windows " + r), e = String(e), t && n && (e = e.replace(RegExp(t, "i"), n)), e = b(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
            }

            function g(e, t) {
                var n = -1,
                    r = e ? e.length : 0;
                if ("number" == typeof r && r > -1 && r <= u)
                    for (; ++n < r;) t(e[n], n, e);
                else m(e, t)
            }

            function b(e) {
                return e = T(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : h(e)
            }

            function m(e, t) {
                for (var n in e) c.call(e, n) && t(e[n], n, e)
            }

            function v(e) {
                return null == e ? h(e) : f.call(e).slice(8, -1)
            }

            function y(e, t) {
                var n = null != e ? typeof e[t] : "number";
                return !/^(?:boolean|number|string|undefined)$/.test(n) && ("object" != n || !!e[t])
            }

            function S(e) {
                return String(e).replace(/([ -])(?!$)/g, "$1?")
            }

            function $(e, t) {
                var n = null;
                return g(e, function(r, i) {
                    n = t(n, r, i, e)
                }), n
            }

            function T(e) {
                return String(e).replace(/^ +| +$/g, "")
            }

            function w(e) {
                var t, n, r = i,
                    o = e && "object" == typeof e && "String" != v(e);
                o && (r = e, e = null);
                var a = r.navigator || {},
                    s = a.userAgent || "";
                e || (e = s);
                var u = o ? !!a.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(f.toString()),
                    l = "Object",
                    c = o ? l : "ScriptBridgingProxyObject",
                    h = o ? l : "Environment",
                    g = o && r.java ? "JavaPackage" : v(r.java),
                    P = o ? l : "RuntimeObject",
                    A = /\bJava/.test(g) && r.java,
                    M = A && v(r.environment) == h,
                    C = A ? "a" : "α",
                    O = A ? "b" : "β",
                    E = r.document || {},
                    x = r.operamini || r.opera,
                    B = d.test(B = o && x ? x["[[Class]]"] : v(x)) ? B : x = null,
                    I = e,
                    D = [],
                    _ = null,
                    k = e == s,
                    G = k && x && "function" == typeof x.version && x.version(),
                    N = F([{
                        label: "EdgeHTML",
                        pattern: "Edge"
                    }, "Trident", {
                        label: "WebKit",
                        pattern: "AppleWebKit"
                    }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
                    L = U(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                        label: "Microsoft Edge",
                        pattern: "(?:Edge|Edg|EdgA|EdgiOS)"
                    }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                        label: "Samsung Internet",
                        pattern: "SamsungBrowser"
                    }, "SeaMonkey", {
                        label: "Silk",
                        pattern: "(?:Cloud9|Silk-Accelerated)"
                    }, "Sleipnir", "SlimBrowser", {
                        label: "SRWare Iron",
                        pattern: "Iron"
                    }, "Sunrise", "Swiftfox", "Vivaldi", "Waterfox", "WebPositive", {
                        label: "Yandex Browser",
                        pattern: "YaBrowser"
                    }, {
                        label: "UC Browser",
                        pattern: "UCBrowser"
                    }, "Opera Mini", {
                        label: "Opera Mini",
                        pattern: "OPiOS"
                    }, "Opera", {
                        label: "Opera",
                        pattern: "OPR"
                    }, "Chromium", "Chrome", {
                        label: "Chrome",
                        pattern: "(?:HeadlessChrome)"
                    }, {
                        label: "Chrome Mobile",
                        pattern: "(?:CriOS|CrMo)"
                    }, {
                        label: "Firefox",
                        pattern: "(?:Firefox|Minefield)"
                    }, {
                        label: "Firefox for iOS",
                        pattern: "FxiOS"
                    }, {
                        label: "IE",
                        pattern: "IEMobile"
                    }, {
                        label: "IE",
                        pattern: "MSIE"
                    }, "Safari"]),
                    R = X([{
                        label: "BlackBerry",
                        pattern: "BB10"
                    }, "BlackBerry", {
                        label: "Galaxy S",
                        pattern: "GT-I9000"
                    }, {
                        label: "Galaxy S2",
                        pattern: "GT-I9100"
                    }, {
                        label: "Galaxy S3",
                        pattern: "GT-I9300"
                    }, {
                        label: "Galaxy S4",
                        pattern: "GT-I9500"
                    }, {
                        label: "Galaxy S5",
                        pattern: "SM-G900"
                    }, {
                        label: "Galaxy S6",
                        pattern: "SM-G920"
                    }, {
                        label: "Galaxy S6 Edge",
                        pattern: "SM-G925"
                    }, {
                        label: "Galaxy S7",
                        pattern: "SM-G930"
                    }, {
                        label: "Galaxy S7 Edge",
                        pattern: "SM-G935"
                    }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                        label: "Kindle Fire",
                        pattern: "(?:Cloud9|Silk-Accelerated)"
                    }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                        label: "Wii U",
                        pattern: "WiiU"
                    }, "Wii", "Xbox One", {
                        label: "Xbox 360",
                        pattern: "Xbox"
                    }, "Xoom"]),
                    H = V({
                        Apple: {
                            iPad: 1,
                            iPhone: 1,
                            iPod: 1
                        },
                        Alcatel: {},
                        Archos: {},
                        Amazon: {
                            Kindle: 1,
                            "Kindle Fire": 1
                        },
                        Asus: {
                            Transformer: 1
                        },
                        "Barnes & Noble": {
                            Nook: 1
                        },
                        BlackBerry: {
                            PlayBook: 1
                        },
                        Google: {
                            "Google TV": 1,
                            Nexus: 1
                        },
                        HP: {
                            TouchPad: 1
                        },
                        HTC: {},
                        Huawei: {},
                        Lenovo: {},
                        LG: {},
                        Microsoft: {
                            Xbox: 1,
                            "Xbox One": 1
                        },
                        Motorola: {
                            Xoom: 1
                        },
                        Nintendo: {
                            "Wii U": 1,
                            Wii: 1
                        },
                        Nokia: {
                            Lumia: 1
                        },
                        Oppo: {},
                        Samsung: {
                            "Galaxy S": 1,
                            "Galaxy S2": 1,
                            "Galaxy S3": 1,
                            "Galaxy S4": 1
                        },
                        Sony: {
                            PlayStation: 1,
                            "PlayStation Vita": 1
                        },
                        Xiaomi: {
                            Mi: 1,
                            Redmi: 1
                        }
                    }),
                    j = W(["Windows Phone", "KaiOS", "Android", "CentOS", {
                        label: "Chrome OS",
                        pattern: "CrOS"
                    }, "Debian", {
                        label: "DragonFly BSD",
                        pattern: "DragonFly"
                    }, "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);

                function F(t) {
                    return $(t, function(t, n) {
                        return t || RegExp("\\b" + (n.pattern || S(n)) + "\\b", "i").exec(e) && (n.label || n)
                    })
                }

                function V(t) {
                    return $(t, function(t, n, r) {
                        return t || (n[R] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(R)] || RegExp("\\b" + S(r) + "(?:\\b|\\w*\\d)", "i").exec(e)) && r
                    })
                }

                function U(t) {
                    return $(t, function(t, n) {
                        return t || RegExp("\\b" + (n.pattern || S(n)) + "\\b", "i").exec(e) && (n.label || n)
                    })
                }

                function W(t) {
                    return $(t, function(t, n) {
                        var r = n.pattern || S(n);
                        return !t && (t = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e)) && (t = p(t, r, n.label || n)), t
                    })
                }

                function X(t) {
                    return $(t, function(t, n) {
                        var r = n.pattern || S(n);
                        return !t && (t = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(e) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(e) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(e)) && ((t = String(n.label && !RegExp(r, "i").test(n.label) ? n.label : t).split("/"))[1] && !/[\d.]+/.test(t[0]) && (t[0] += " " + t[1]), n = n.label || n, t = b(t[0].replace(RegExp(r, "i"), n).replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ").replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2"))), t
                    })
                }

                function K(t) {
                    return $(t, function(t, n) {
                        return t || (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) || 0)[1] || null
                    })
                }

                function z() {
                    return this.description || ""
                }
                if (N && (N = [N]), /\bAndroid\b/.test(j) && !R && (t = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(e)) && (R = T(t[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null), H && !R ? R = X([H]) : H && R && (R = R.replace(RegExp("^(" + S(H) + ")[-_.\\s]", "i"), H + " ").replace(RegExp("^(" + S(H) + ")[-_.]?(\\w)", "i"), H + " $2")), (t = /\bGoogle TV\b/.exec(R)) && (R = t[0]), /\bSimulator\b/i.test(e) && (R = (R ? R + " " : "") + "Simulator"), "Opera Mini" == L && /\bOPiOS\b/.test(e) && D.push("running in Turbo/Uncompressed mode"), "IE" == L && /\blike iPhone OS\b/.test(e) ? (H = (t = w(e.replace(/like iPhone OS/, ""))).manufacturer, R = t.product) : /^iP/.test(R) ? (L || (L = "Safari"), j = "iOS" + ((t = / OS ([\d_]+)/i.exec(e)) ? " " + t[1].replace(/_/g, ".") : "")) : "Konqueror" == L && /^Linux\b/i.test(j) ? j = "Kubuntu" : H && "Google" != H && (/Chrome/.test(L) && !/\bMobile Safari\b/i.test(e) || /\bVita\b/.test(R)) || /\bAndroid\b/.test(j) && /^Chrome/.test(L) && /\bVersion\//i.test(e) ? (L = "Android Browser", j = /\bAndroid\b/.test(j) ? j : "Android") : "Silk" == L ? (/\bMobi/i.test(e) || (j = "Android", D.unshift("desktop mode")), /Accelerated *= *true/i.test(e) && D.unshift("accelerated")) : "UC Browser" == L && /\bUCWEB\b/.test(e) ? D.push("speed mode") : "PaleMoon" == L && (t = /\bFirefox\/([\d.]+)\b/.exec(e)) ? D.push("identifying as Firefox " + t[1]) : "Firefox" == L && (t = /\b(Mobile|Tablet|TV)\b/i.exec(e)) ? (j || (j = "Firefox OS"), R || (R = t[1])) : !L || (t = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(L)) ? (L && !R && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(t + "/") + 8)) && (L = null), (t = R || H || j) && (R || H || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(j)) && (L = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(j) ? j : t) + " Browser")) : "Electron" == L && (t = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) && D.push("Chromium " + t), G || (G = K(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)", "Version", S(L), "(?:Firefox|Minefield|NetFront)"])), (t = "iCab" == N && parseFloat(G) > 3 && "WebKit" || /\bOpera\b/.test(L) && (/\bOPR\b/.test(e) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(N) && "WebKit" || !N && /\bMSIE\b/i.test(e) && ("Mac OS" == j ? "Tasman" : "Trident") || "WebKit" == N && /\bPlayStation\b(?! Vita\b)/i.test(L) && "NetFront") && (N = [t]), "IE" == L && (t = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1]) ? (L += " Mobile", j = "Windows Phone " + (/\+$/.test(t) ? t : t + ".x"), D.unshift("desktop mode")) : /\bWPDesktop\b/i.test(e) ? (L = "IE Mobile", j = "Windows Phone 8.x", D.unshift("desktop mode"), G || (G = (/\brv:([\d.]+)/.exec(e) || 0)[1])) : "IE" != L && "Trident" == N && (t = /\brv:([\d.]+)/.exec(e)) && (L && D.push("identifying as " + L + (G ? " " + G : "")), L = "IE", G = t[1]), k) {
                    if (y(r, "global")) {
                        if (A && (I = (t = A.lang.System).getProperty("os.arch"), j = j || t.getProperty("os.name") + " " + t.getProperty("os.version")), M) {
                            try {
                                G = r.require("ringo/engine").version.join("."), L = "RingoJS"
                            } catch (e) {
                                (t = r.system) && t.global.system == r.system && (L = "Narwhal", j || (j = t[0].os || null))
                            }
                            L || (L = "Rhino")
                        } else "object" == typeof r.process && !r.process.browser && (t = r.process) && ("object" == typeof t.versions && ("string" == typeof t.versions.electron ? (D.push("Node " + t.versions.node), L = "Electron", G = t.versions.electron) : "string" == typeof t.versions.nw && (D.push("Chromium " + G, "Node " + t.versions.node), L = "NW.js", G = t.versions.nw)), L || (L = "Node.js", I = t.arch, j = t.platform, G = (G = /[\d.]+/.exec(t.version)) ? G[0] : null))
                    } else v(t = r.runtime) == c ? (L = "Adobe AIR", j = t.flash.system.Capabilities.os) : v(t = r.phantom) == P ? (L = "PhantomJS", G = (t = t.version || null) && t.major + "." + t.minor + "." + t.patch) : "number" == typeof E.documentMode && (t = /\bTrident\/(\d+)/i.exec(e)) ? (G = [G, E.documentMode], (t = +t[1] + 4) != G[1] && (D.push("IE " + G[1] + " mode"), N && (N[1] = ""), G[1] = t), G = "IE" == L ? String(G[1].toFixed(1)) : G[0]) : "number" == typeof E.documentMode && /^(?:Chrome|Firefox)\b/.test(L) && (D.push("masking as " + L + " " + G), L = "IE", G = "11.0", N = ["Trident"], j = "Windows");
                    j = j && b(j)
                }
                if (G && (t = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(G) || /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (k && a.appMinorVersion)) || /\bMinefield\b/i.test(e) && "a") && (_ = /b/i.test(t) ? "beta" : "alpha", G = G.replace(RegExp(t + "\\+?$"), "") + ("beta" == _ ? O : C) + (/\d+\+?/.exec(t) || "")), "Fennec" == L || "Firefox" == L && /\b(?:Android|Firefox OS|KaiOS)\b/.test(j)) L = "Firefox Mobile";
                else if ("Maxthon" == L && G) G = G.replace(/\.[\d.]+/, ".x");
                else if (/\bXbox\b/i.test(R)) "Xbox 360" == R && (j = null), "Xbox 360" == R && /\bIEMobile\b/.test(e) && D.unshift("mobile mode");
                else if ((/^(?:Chrome|IE|Opera)$/.test(L) || L && !R && !/Browser|Mobi/.test(L)) && ("Windows CE" == j || /Mobi/i.test(e))) L += " Mobile";
                else if ("IE" == L && k) try {
                    null === r.external && D.unshift("platform preview")
                } catch (e) {
                    D.unshift("embedded")
                } else(/\bBlackBerry\b/.test(R) || /\bBB10\b/.test(e)) && (t = (RegExp(R.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || G) ? (j = ((t = [t, /BB10/.test(e)])[1] ? (R = null, H = "BlackBerry") : "Device Software") + " " + t[0], G = null) : this != m && "Wii" != R && (k && x || /Opera/.test(L) && /\b(?:MSIE|Firefox)\b/i.test(e) || "Firefox" == L && /\bOS X (?:\d+\.){2,}/.test(j) || "IE" == L && (j && !/^Win/.test(j) && G > 5.5 || /\bWindows XP\b/.test(j) && G > 8 || 8 == G && !/\bTrident\b/.test(e))) && !d.test(t = w.call(m, e.replace(d, "") + ";")) && t.name && (t = "ing as " + t.name + ((t = t.version) ? " " + t : ""), d.test(L) ? (/\bIE\b/.test(t) && "Mac OS" == j && (j = null), t = "identify" + t) : (t = "mask" + t, L = B ? b(B.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(t) && (j = null), k || (G = null)), N = ["Presto"], D.push(t));
                (t = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) && (t = [parseFloat(t.replace(/\.(\d)$/, ".0$1")), t], "Safari" == L && "+" == t[1].slice(-1) ? (L = "WebKit Nightly", _ = "alpha", G = t[1].slice(0, -1)) : (G == t[1] || G == (t[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) && (G = null), t[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(e) || 0)[1], 537.36 == t[0] && 537.36 == t[2] && parseFloat(t[1]) >= 28 && "WebKit" == N && (N = ["Blink"]), k && (u || t[1]) ? (N && (N[1] = "like Chrome"), t = t[1] || ((t = t[0]) < 530 ? 1 : t < 532 ? 2 : t < 532.05 ? 3 : t < 533 ? 4 : t < 534.03 ? 5 : t < 534.07 ? 6 : t < 534.1 ? 7 : t < 534.13 ? 8 : t < 534.16 ? 9 : t < 534.24 ? 10 : t < 534.3 ? 11 : t < 535.01 ? 12 : t < 535.02 ? "13+" : t < 535.07 ? 15 : t < 535.11 ? 16 : t < 535.19 ? 17 : t < 536.05 ? 18 : t < 536.1 ? 19 : t < 537.01 ? 20 : t < 537.11 ? "21+" : t < 537.13 ? 23 : t < 537.18 ? 24 : t < 537.24 ? 25 : t < 537.36 ? 26 : "Blink" != N ? "27" : "28")) : (N && (N[1] = "like Safari"), t = (t = t[0]) < 400 ? 1 : t < 500 ? 2 : t < 526 ? 3 : t < 533 ? 4 : t < 534 ? "4+" : t < 535 ? 5 : t < 537 ? 6 : t < 538 ? 7 : t < 601 ? 8 : t < 602 ? 9 : t < 604 ? 10 : t < 606 ? 11 : t < 608 ? 12 : "12"), N && (N[1] += " " + (t += "number" == typeof t ? ".x" : /[.+]/.test(t) ? "" : "+")), "Safari" == L && (!G || parseInt(G) > 45) ? G = t : "Chrome" == L && /\bHeadlessChrome/i.test(e) && D.unshift("headless")), "Opera" == L && (t = /\bzbov|zvav$/.exec(j)) ? (L += " ", D.unshift("desktop mode"), "zvav" == t ? (L += "Mini", G = null) : L += "Mobile", j = j.replace(RegExp(" *" + t + "$"), "")) : "Safari" == L && /\bChrome\b/.exec(N && N[1]) ? (D.unshift("desktop mode"), L = "Chrome Mobile", G = null, /\bOS X\b/.test(j) ? (H = "Apple", j = "iOS 4.3+") : j = null) : /\bSRWare Iron\b/.test(L) && !G && (G = K("Chrome")), G && 0 == G.indexOf(t = /[\d.]+$/.exec(j)) && e.indexOf("/" + t + "-") > -1 && (j = T(j.replace(t, ""))), j && -1 != j.indexOf(L) && !RegExp(L + " OS").test(j) && (j = j.replace(RegExp(" *" + S(L) + " *"), "")), N && !/\b(?:Avant|Nook)\b/.test(L) && (/Browser|Lunascape|Maxthon/.test(L) || "Safari" != L && /^iOS/.test(j) && /\bSafari\b/.test(N[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(L) && N[1]) && (t = N[N.length - 1]) && D.push(t), D.length && (D = ["(" + D.join("; ") + ")"]), H && R && 0 > R.indexOf(H) && D.push("on " + H), R && D.push((/^on /.test(D[D.length - 1]) ? "" : "on ") + R), j && (n = (t = / ([\d.+]+)$/.exec(j)) && "/" == j.charAt(j.length - t[0].length - 1), j = {
                    architecture: 32,
                    family: t && !n ? j.replace(t[0], "") : j,
                    version: t ? t[1] : null,
                    toString: function() {
                        var e = this.version;
                        return this.family + (e && !n ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
                    }
                }), (t = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(I)) && !/\bi686\b/i.test(I) ? (j && (j.architecture = 64, j.family = j.family.replace(RegExp(" *" + t), "")), L && (/\bWOW64\b/i.test(e) || k && /\w(?:86|32)$/.test(a.cpuClass || a.platform) && !/\bWin64; x64\b/i.test(e)) && D.unshift("32-bit")) : j && /^OS X/.test(j.family) && "Chrome" == L && parseFloat(G) >= 39 && (j.architecture = 64), e || (e = null);
                var q = {};
                return q.description = e, q.layout = N && N[0], q.manufacturer = H, q.name = L, q.prerelease = _, q.product = R, q.ua = e, q.version = L && G, q.os = j || {
                    architecture: null,
                    family: null,
                    version: null,
                    toString: function() {
                        return "null"
                    }
                }, q.parse = w, q.toString = z, q.version && D.unshift(G), q.name && D.unshift(L), j && L && !(j == String(j).split(" ")[0] && (j == L.split(" ")[0] || R)) && D.push(R ? "(" + j + ")" : "on " + j), D.length && (q.description = D.join(" ")), q
            }
            var P = w();
            "function" == typeof define && "object" == typeof define.amd && define.amd ? (i.platform = P, define(function() {
                return P
            })) : o && a ? m(P, function(e, t) {
                o[t] = e
            }) : i.platform = P
        }).call(this)
    },
    2703: function(e, t, n) {
        "use strict";
        var r = n(414);

        function i() {}

        function o() {}
        o.resetWarningCache = i, e.exports = function() {
            function e(e, t, n, i, o, a) {
                if (a !== r) {
                    var s = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw s.name = "Invariant Violation", s
                }
            }

            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bigint: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: o,
                resetWarningCache: i
            };
            return n.PropTypes = n, n
        }
    },
    5697: function(e, t, n) {
        e.exports = n(2703)()
    },
    414: function(e) {
        "use strict";
        var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        e.exports = t
    },
    2100: function(e, t, n) {
        "use strict";
        e.exports = n(9482)
    },
    9482: function(e, t, n) {
        "use strict";
        var r = t;

        function i() {
            r.util._configure(), r.Writer._configure(r.BufferWriter), r.Reader._configure(r.BufferReader)
        }
        r.build = "minimal", r.Writer = n(1173), r.BufferWriter = n(3155), r.Reader = n(1408), r.BufferReader = n(593), r.util = n(9693), r.rpc = n(5994), r.roots = n(5054), r.configure = i, i()
    },
    1408: function(e, t, n) {
        "use strict";
        e.exports = u;
        var r, i = n(9693),
            o = i.LongBits,
            a = i.utf8;

        function s(e, t) {
            return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len)
        }

        function u(e) {
            this.buf = e, this.pos = 0, this.len = e.length
        }
        var d = "undefined" != typeof Uint8Array ? function(e) {
                if (e instanceof Uint8Array || Array.isArray(e)) return new u(e);
                throw Error("illegal buffer")
            } : function(e) {
                if (Array.isArray(e)) return new u(e);
                throw Error("illegal buffer")
            },
            l = function() {
                return i.Buffer ? function(e) {
                    return (u.create = function(e) {
                        return i.Buffer.isBuffer(e) ? new r(e) : d(e)
                    })(e)
                } : d
            };

        function c() {
            var e = new o(0, 0),
                t = 0;
            if (this.len - this.pos > 4) {
                for (; t < 4; ++t)
                    if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, this.buf[this.pos++] < 128) return e;
                if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 28) >>> 0, e.hi = (e.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return e;
                t = 0
            } else {
                for (; t < 3; ++t) {
                    if (this.pos >= this.len) throw s(this);
                    if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, this.buf[this.pos++] < 128) return e
                }
                return e.lo = (e.lo | (127 & this.buf[this.pos++]) << 7 * t) >>> 0, e
            }
            if (this.len - this.pos > 4) {
                for (; t < 5; ++t)
                    if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, this.buf[this.pos++] < 128) return e
            } else
                for (; t < 5; ++t) {
                    if (this.pos >= this.len) throw s(this);
                    if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, this.buf[this.pos++] < 128) return e
                }
            throw Error("invalid varint encoding")
        }

        function f(e, t) {
            return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0
        }

        function h() {
            if (this.pos + 8 > this.len) throw s(this, 8);
            return new o(f(this.buf, this.pos += 4), f(this.buf, this.pos += 4))
        }
        u.create = l(), u.prototype._slice = i.Array.prototype.subarray || i.Array.prototype.slice, u.prototype.uint32 = function() {
            var e = 0xffffffff;
            return function() {
                if (e = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128 || (e = (e | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128)) return e;
                if ((this.pos += 5) > this.len) throw this.pos = this.len, s(this, 10);
                return e
            }
        }(), u.prototype.int32 = function() {
            return 0 | this.uint32()
        }, u.prototype.sint32 = function() {
            var e = this.uint32();
            return e >>> 1 ^ -(1 & e) | 0
        }, u.prototype.bool = function() {
            return 0 !== this.uint32()
        }, u.prototype.fixed32 = function() {
            if (this.pos + 4 > this.len) throw s(this, 4);
            return f(this.buf, this.pos += 4)
        }, u.prototype.sfixed32 = function() {
            if (this.pos + 4 > this.len) throw s(this, 4);
            return 0 | f(this.buf, this.pos += 4)
        }, u.prototype.float = function() {
            if (this.pos + 4 > this.len) throw s(this, 4);
            var e = i.float.readFloatLE(this.buf, this.pos);
            return this.pos += 4, e
        }, u.prototype.double = function() {
            if (this.pos + 8 > this.len) throw s(this, 4);
            var e = i.float.readDoubleLE(this.buf, this.pos);
            return this.pos += 8, e
        }, u.prototype.bytes = function() {
            var e = this.uint32(),
                t = this.pos,
                n = this.pos + e;
            if (n > this.len) throw s(this, e);
            return (this.pos += e, Array.isArray(this.buf)) ? this.buf.slice(t, n) : t === n ? new this.buf.constructor(0) : this._slice.call(this.buf, t, n)
        }, u.prototype.string = function() {
            var e = this.bytes();
            return a.read(e, 0, e.length)
        }, u.prototype.skip = function(e) {
            if ("number" == typeof e) {
                if (this.pos + e > this.len) throw s(this, e);
                this.pos += e
            } else
                do
                    if (this.pos >= this.len) throw s(this); while (128 & this.buf[this.pos++]);
            return this
        }, u.prototype.skipType = function(e) {
            switch (e) {
                case 0:
                    this.skip();
                    break;
                case 1:
                    this.skip(8);
                    break;
                case 2:
                    this.skip(this.uint32());
                    break;
                case 3:
                    for (; 4 != (e = 7 & this.uint32());) this.skipType(e);
                    break;
                case 5:
                    this.skip(4);
                    break;
                default:
                    throw Error("invalid wire type " + e + " at offset " + this.pos)
            }
            return this
        }, u._configure = function(e) {
            r = e, u.create = l(), r._configure();
            var t = i.Long ? "toLong" : "toNumber";
            i.merge(u.prototype, {
                int64: function() {
                    return c.call(this)[t](!1)
                },
                uint64: function() {
                    return c.call(this)[t](!0)
                },
                sint64: function() {
                    return c.call(this).zzDecode()[t](!1)
                },
                fixed64: function() {
                    return h.call(this)[t](!0)
                },
                sfixed64: function() {
                    return h.call(this)[t](!1)
                }
            })
        }
    },
    593: function(e, t, n) {
        "use strict";
        e.exports = o;
        var r = n(1408);
        (o.prototype = Object.create(r.prototype)).constructor = o;
        var i = n(9693);

        function o(e) {
            r.call(this, e)
        }
        o._configure = function() {
            i.Buffer && (o.prototype._slice = i.Buffer.prototype.slice)
        }, o.prototype.string = function() {
            var e = this.uint32();
            return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len))
        }, o._configure()
    },
    5054: function(e) {
        "use strict";
        e.exports = {}
    },
    5994: function(e, t, n) {
        "use strict";
        t.Service = n(7948)
    },
    7948: function(e, t, n) {
        "use strict";
        e.exports = i;
        var r = n(9693);

        function i(e, t, n) {
            if ("function" != typeof e) throw TypeError("rpcImpl must be a function");
            r.EventEmitter.call(this), this.rpcImpl = e, this.requestDelimited = !!t, this.responseDelimited = !!n
        }(i.prototype = Object.create(r.EventEmitter.prototype)).constructor = i, i.prototype.rpcCall = function e(t, n, i, o, a) {
            if (!o) throw TypeError("request must be specified");
            var s = this;
            if (!a) return r.asPromise(e, s, t, n, i, o);
            if (!s.rpcImpl) {
                setTimeout(function() {
                    a(Error("already ended"))
                }, 0);
                return
            }
            try {
                return s.rpcImpl(t, n[s.requestDelimited ? "encodeDelimited" : "encode"](o).finish(), function(e, n) {
                    if (e) return s.emit("error", e, t), a(e);
                    if (null === n) {
                        s.end(!0);
                        return
                    }
                    if (!(n instanceof i)) try {
                        n = i[s.responseDelimited ? "decodeDelimited" : "decode"](n)
                    } catch (e) {
                        return s.emit("error", e, t), a(e)
                    }
                    return s.emit("data", n, t), a(null, n)
                })
            } catch (e) {
                s.emit("error", e, t), setTimeout(function() {
                    a(e)
                }, 0);
                return
            }
        }, i.prototype.end = function(e) {
            return this.rpcImpl && (e || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this
        }
    },
    1945: function(e, t, n) {
        "use strict";
        e.exports = i;
        var r = n(9693);

        function i(e, t) {
            this.lo = e >>> 0, this.hi = t >>> 0
        }
        var o = i.zero = new i(0, 0);
        o.toNumber = function() {
            return 0
        }, o.zzEncode = o.zzDecode = function() {
            return this
        }, o.length = function() {
            return 1
        };
        var a = i.zeroHash = "\0\0\0\0\0\0\0\0";
        i.fromNumber = function(e) {
            if (0 === e) return o;
            var t = e < 0;
            t && (e = -e);
            var n = e >>> 0,
                r = (e - n) / 0x100000000 >>> 0;
            return t && (r = ~r >>> 0, n = ~n >>> 0, ++n > 0xffffffff && (n = 0, ++r > 0xffffffff && (r = 0))), new i(n, r)
        }, i.from = function(e) {
            if ("number" == typeof e) return i.fromNumber(e);
            if (r.isString(e)) {
                if (!r.Long) return i.fromNumber(parseInt(e, 10));
                e = r.Long.fromString(e)
            }
            return e.low || e.high ? new i(e.low >>> 0, e.high >>> 0) : o
        }, i.prototype.toNumber = function(e) {
            if (!e && this.hi >>> 31) {
                var t = ~this.lo + 1 >>> 0,
                    n = ~this.hi >>> 0;
                return t || (n = n + 1 >>> 0), -(t + 0x100000000 * n)
            }
            return this.lo + 0x100000000 * this.hi
        }, i.prototype.toLong = function(e) {
            return r.Long ? new r.Long(0 | this.lo, 0 | this.hi, !!e) : {
                low: 0 | this.lo,
                high: 0 | this.hi,
                unsigned: !!e
            }
        };
        var s = String.prototype.charCodeAt;
        i.fromHash = function(e) {
            return e === a ? o : new i((s.call(e, 0) | s.call(e, 1) << 8 | s.call(e, 2) << 16 | s.call(e, 3) << 24) >>> 0, (s.call(e, 4) | s.call(e, 5) << 8 | s.call(e, 6) << 16 | s.call(e, 7) << 24) >>> 0)
        }, i.prototype.toHash = function() {
            return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
        }, i.prototype.zzEncode = function() {
            var e = this.hi >> 31;
            return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0, this.lo = (this.lo << 1 ^ e) >>> 0, this
        }, i.prototype.zzDecode = function() {
            var e = -(1 & this.lo);
            return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0, this.hi = (this.hi >>> 1 ^ e) >>> 0, this
        }, i.prototype.length = function() {
            var e = this.lo,
                t = (this.lo >>> 28 | this.hi << 4) >>> 0,
                n = this.hi >>> 24;
            return 0 === n ? 0 === t ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : n < 128 ? 9 : 10
        }
    },
    9693: function(e, t, n) {
        "use strict";
        var r = t;

        function i(e, t, n) {
            for (var r = Object.keys(t), i = 0; i < r.length; ++i) void 0 !== e[r[i]] && n || (e[r[i]] = t[r[i]]);
            return e
        }

        function o(e) {
            function t(e, n) {
                if (!(this instanceof t)) return new t(e, n);
                Object.defineProperty(this, "message", {
                    get: function() {
                        return e
                    }
                }), Error.captureStackTrace ? Error.captureStackTrace(this, t) : Object.defineProperty(this, "stack", {
                    value: Error().stack || ""
                }), n && i(this, n)
            }
            return (t.prototype = Object.create(Error.prototype)).constructor = t, Object.defineProperty(t.prototype, "name", {
                get: function() {
                    return e
                }
            }), t.prototype.toString = function() {
                return this.name + ": " + this.message
            }, t
        }
        r.asPromise = n(4537), r.base64 = n(7419), r.EventEmitter = n(9211), r.float = n(945), r.inquire = n(7199), r.utf8 = n(4997), r.pool = n(6662), r.LongBits = n(1945), r.global = "undefined" != typeof window && window || void 0 !== n.g && n.g || "undefined" != typeof self && self || this, r.emptyArray = Object.freeze ? Object.freeze([]) : [], r.emptyObject = Object.freeze ? Object.freeze({}) : {}, r.isNode = !!(r.global.process && r.global.process.versions && r.global.process.versions.node), r.isInteger = Number.isInteger || function(e) {
            return "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }, r.isString = function(e) {
            return "string" == typeof e || e instanceof String
        }, r.isObject = function(e) {
            return e && "object" == typeof e
        }, r.isset = r.isSet = function(e, t) {
            var n = e[t];
            return !!(null != n && e.hasOwnProperty(t)) && ("object" != typeof n || (Array.isArray(n) ? n.length : Object.keys(n).length) > 0)
        }, r.Buffer = function() {
            try {
                var e = r.inquire("buffer").Buffer;
                return e.prototype.utf8Write ? e : null
            } catch (e) {
                return null
            }
        }(), r._Buffer_from = null, r._Buffer_allocUnsafe = null, r.newBuffer = function(e) {
            return "number" == typeof e ? r.Buffer ? r._Buffer_allocUnsafe(e) : new r.Array(e) : r.Buffer ? r._Buffer_from(e) : "undefined" == typeof Uint8Array ? e : new Uint8Array(e)
        }, r.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, r.Long = r.global.dcodeIO && r.global.dcodeIO.Long || r.global.Long || r.inquire("long"), r.key2Re = /^true|false|0|1$/, r.key32Re = /^-?(?:0|[1-9][0-9]*)$/, r.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, r.longToHash = function(e) {
            return e ? r.LongBits.from(e).toHash() : r.LongBits.zeroHash
        }, r.longFromHash = function(e, t) {
            var n = r.LongBits.fromHash(e);
            return r.Long ? r.Long.fromBits(n.lo, n.hi, t) : n.toNumber(!!t)
        }, r.merge = i, r.lcFirst = function(e) {
            return e.charAt(0).toLowerCase() + e.substring(1)
        }, r.newError = o, r.ProtocolError = o("ProtocolError"), r.oneOfGetter = function(e) {
            for (var t = {}, n = 0; n < e.length; ++n) t[e[n]] = 1;
            return function() {
                for (var e = Object.keys(this), n = e.length - 1; n > -1; --n)
                    if (1 === t[e[n]] && void 0 !== this[e[n]] && null !== this[e[n]]) return e[n]
            }
        }, r.oneOfSetter = function(e) {
            return function(t) {
                for (var n = 0; n < e.length; ++n) e[n] !== t && delete this[e[n]]
            }
        }, r.toJSONOptions = {
            longs: String,
            enums: String,
            bytes: String,
            json: !0
        }, r._configure = function() {
            var e = r.Buffer;
            if (!e) {
                r._Buffer_from = r._Buffer_allocUnsafe = null;
                return
            }
            r._Buffer_from = e.from !== Uint8Array.from && e.from || function(t, n) {
                return new e(t, n)
            }, r._Buffer_allocUnsafe = e.allocUnsafe || function(t) {
                return new e(t)
            }
        }
    },
    1173: function(e, t, n) {
        "use strict";
        e.exports = c;
        var r, i = n(9693),
            o = i.LongBits,
            a = i.base64,
            s = i.utf8;

        function u(e, t, n) {
            this.fn = e, this.len = t, this.next = void 0, this.val = n
        }

        function d() {}

        function l(e) {
            this.head = e.head, this.tail = e.tail, this.len = e.len, this.next = e.states
        }

        function c() {
            this.len = 0, this.head = new u(d, 0, 0), this.tail = this.head, this.states = null
        }
        var f = function() {
            return i.Buffer ? function() {
                return (c.create = function() {
                    return new r
                })()
            } : function() {
                return new c
            }
        };

        function h(e, t, n) {
            t[n] = 255 & e
        }

        function p(e, t, n) {
            for (; e > 127;) t[n++] = 127 & e | 128, e >>>= 7;
            t[n] = e
        }

        function g(e, t) {
            this.len = e, this.next = void 0, this.val = t
        }

        function b(e, t, n) {
            for (; e.hi;) t[n++] = 127 & e.lo | 128, e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0, e.hi >>>= 7;
            for (; e.lo > 127;) t[n++] = 127 & e.lo | 128, e.lo = e.lo >>> 7;
            t[n++] = e.lo
        }

        function m(e, t, n) {
            t[n] = 255 & e, t[n + 1] = e >>> 8 & 255, t[n + 2] = e >>> 16 & 255, t[n + 3] = e >>> 24
        }
        c.create = f(), c.alloc = function(e) {
            return new i.Array(e)
        }, i.Array !== Array && (c.alloc = i.pool(c.alloc, i.Array.prototype.subarray)), c.prototype._push = function(e, t, n) {
            return this.tail = this.tail.next = new u(e, t, n), this.len += t, this
        }, g.prototype = Object.create(u.prototype), g.prototype.fn = p, c.prototype.uint32 = function(e) {
            return this.len += (this.tail = this.tail.next = new g((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 0x10000000 ? 4 : 5, e)).len, this
        }, c.prototype.int32 = function(e) {
            return e < 0 ? this._push(b, 10, o.fromNumber(e)) : this.uint32(e)
        }, c.prototype.sint32 = function(e) {
            return this.uint32((e << 1 ^ e >> 31) >>> 0)
        }, c.prototype.uint64 = function(e) {
            var t = o.from(e);
            return this._push(b, t.length(), t)
        }, c.prototype.int64 = c.prototype.uint64, c.prototype.sint64 = function(e) {
            var t = o.from(e).zzEncode();
            return this._push(b, t.length(), t)
        }, c.prototype.bool = function(e) {
            return this._push(h, 1, +!!e)
        }, c.prototype.fixed32 = function(e) {
            return this._push(m, 4, e >>> 0)
        }, c.prototype.sfixed32 = c.prototype.fixed32, c.prototype.fixed64 = function(e) {
            var t = o.from(e);
            return this._push(m, 4, t.lo)._push(m, 4, t.hi)
        }, c.prototype.sfixed64 = c.prototype.fixed64, c.prototype.float = function(e) {
            return this._push(i.float.writeFloatLE, 4, e)
        }, c.prototype.double = function(e) {
            return this._push(i.float.writeDoubleLE, 8, e)
        };
        var v = i.Array.prototype.set ? function(e, t, n) {
            t.set(e, n)
        } : function(e, t, n) {
            for (var r = 0; r < e.length; ++r) t[n + r] = e[r]
        };
        c.prototype.bytes = function(e) {
            var t = e.length >>> 0;
            if (!t) return this._push(h, 1, 0);
            if (i.isString(e)) {
                var n = c.alloc(t = a.length(e));
                a.decode(e, n, 0), e = n
            }
            return this.uint32(t)._push(v, t, e)
        }, c.prototype.string = function(e) {
            var t = s.length(e);
            return t ? this.uint32(t)._push(s.write, t, e) : this._push(h, 1, 0)
        }, c.prototype.fork = function() {
            return this.states = new l(this), this.head = this.tail = new u(d, 0, 0), this.len = 0, this
        }, c.prototype.reset = function() {
            return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new u(d, 0, 0), this.len = 0), this
        }, c.prototype.ldelim = function() {
            var e = this.head,
                t = this.tail,
                n = this.len;
            return this.reset().uint32(n), n && (this.tail.next = e.next, this.tail = t, this.len += n), this
        }, c.prototype.finish = function() {
            for (var e = this.head.next, t = this.constructor.alloc(this.len), n = 0; e;) e.fn(e.val, t, n), n += e.len, e = e.next;
            return t
        }, c._configure = function(e) {
            r = e, c.create = f(), r._configure()
        }
    },
    3155: function(e, t, n) {
        "use strict";
        e.exports = o;
        var r = n(1173);
        (o.prototype = Object.create(r.prototype)).constructor = o;
        var i = n(9693);

        function o() {
            r.call(this)
        }

        function a(e, t, n) {
            e.length < 40 ? i.utf8.write(e, t, n) : t.utf8Write ? t.utf8Write(e, n) : t.write(e, n)
        }
        o._configure = function() {
            o.alloc = i._Buffer_allocUnsafe, o.writeBytesBuffer = i.Buffer && i.Buffer.prototype instanceof Uint8Array && "set" === i.Buffer.prototype.set.name ? function(e, t, n) {
                t.set(e, n)
            } : function(e, t, n) {
                if (e.copy) e.copy(t, n, 0, e.length);
                else
                    for (var r = 0; r < e.length;) t[n++] = e[r++]
            }
        }, o.prototype.bytes = function(e) {
            i.isString(e) && (e = i._Buffer_from(e, "base64"));
            var t = e.length >>> 0;
            return this.uint32(t), t && this._push(o.writeBytesBuffer, t, e), this
        }, o.prototype.string = function(e) {
            var t = i.Buffer.byteLength(e);
            return this.uint32(t), t && this._push(a, t, e), this
        }, o._configure()
    },
    3664: function() {
        var e;
        ! function() {
            function t(e) {
                this.mode = l.MODE_8BIT_BYTE, this.data = e, this.parsedData = [];
                for (var t = [], n = 0, r = this.data.length; r > n; n++) {
                    var i = this.data.charCodeAt(n);
                    i > 65536 ? (t[0] = 240 | (1835008 & i) >>> 18, t[1] = 128 | (258048 & i) >>> 12, t[2] = 128 | (4032 & i) >>> 6, t[3] = 128 | 63 & i) : i > 2048 ? (t[0] = 224 | (61440 & i) >>> 12, t[1] = 128 | (4032 & i) >>> 6, t[2] = 128 | 63 & i) : i > 128 ? (t[0] = 192 | (1984 & i) >>> 6, t[1] = 128 | 63 & i) : t[0] = i, this.parsedData = this.parsedData.concat(t)
                }
                this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
            }

            function n(e, t) {
                this.typeNumber = e, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
            }

            function r(e, t) {
                if (void 0 == e.length) throw Error(e.length + "/" + t);
                for (var n = 0; n < e.length && 0 == e[n];) n++;
                this.num = Array(e.length - n + t);
                for (var r = 0; r < e.length - n; r++) this.num[r] = e[r + n]
            }

            function i(e, t) {
                this.totalCount = e, this.dataCount = t
            }

            function o() {
                this.buffer = [], this.length = 0
            }

            function a() {
                return "undefined" != typeof CanvasRenderingContext2D
            }

            function s() {
                var e = !1,
                    t = navigator.userAgent;
                return /android/i.test(t) && (e = !0, (aMat = t.toString().match(/android ([0-9]\.[0-9])/i)) && aMat[1] && (e = parseFloat(aMat[1]))), e
            }

            function u(e, t) {
                for (var n = 1, r = d(e), i = 0, o = b.length; o >= i; i++) {
                    var a = 0;
                    switch (t) {
                        case c.L:
                            a = b[i][0];
                            break;
                        case c.M:
                            a = b[i][1];
                            break;
                        case c.Q:
                            a = b[i][2];
                            break;
                        case c.H:
                            a = b[i][3]
                    }
                    if (a >= r) break;
                    n++
                }
                if (n > b.length) throw Error("Too long data");
                return n
            }

            function d(e) {
                var t = encodeURI(e).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
                return t.length + 3 * (t.length != e)
            }
            t.prototype = {
                getLength: function() {
                    return this.parsedData.length
                },
                write: function(e) {
                    for (var t = 0, n = this.parsedData.length; n > t; t++) e.put(this.parsedData[t], 8)
                }
            }, n.prototype = {
                addData: function(e) {
                    var n = new t(e);
                    this.dataList.push(n), this.dataCache = null
                },
                isDark: function(e, t) {
                    if (0 > e || this.moduleCount <= e || 0 > t || this.moduleCount <= t) throw Error(e + "," + t);
                    return this.modules[e][t]
                },
                getModuleCount: function() {
                    return this.moduleCount
                },
                make: function() {
                    this.makeImpl(!1, this.getBestMaskPattern())
                },
                makeImpl: function(e, t) {
                    this.moduleCount = 4 * this.typeNumber + 17, this.modules = Array(this.moduleCount);
                    for (var r = 0; r < this.moduleCount; r++) {
                        this.modules[r] = Array(this.moduleCount);
                        for (var i = 0; i < this.moduleCount; i++) this.modules[r][i] = null
                    }
                    this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, t), this.typeNumber >= 7 && this.setupTypeNumber(e), null == this.dataCache && (this.dataCache = n.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, t)
                },
                setupPositionProbePattern: function(e, t) {
                    for (var n = -1; 7 >= n; n++)
                        if (!(-1 >= e + n || this.moduleCount <= e + n))
                            for (var r = -1; 7 >= r; r++) - 1 >= t + r || this.moduleCount <= t + r || (this.modules[e + n][t + r] = n >= 0 && 6 >= n && (0 == r || 6 == r) || r >= 0 && 6 >= r && (0 == n || 6 == n) || n >= 2 && 4 >= n && r >= 2 && 4 >= r)
                },
                getBestMaskPattern: function() {
                    for (var e = 0, t = 0, n = 0; 8 > n; n++) {
                        this.makeImpl(!0, n);
                        var r = h.getLostPoint(this);
                        (0 == n || e > r) && (e = r, t = n)
                    }
                    return t
                },
                createMovieClip: function(e, t, n) {
                    var r = e.createEmptyMovieClip(t, n),
                        i = 1;
                    this.make();
                    for (var o = 0; o < this.modules.length; o++)
                        for (var a = o * i, s = 0; s < this.modules[o].length; s++) {
                            var u = s * i;
                            this.modules[o][s] && (r.beginFill(0, 100), r.moveTo(u, a), r.lineTo(u + i, a), r.lineTo(u + i, a + i), r.lineTo(u, a + i), r.endFill())
                        }
                    return r
                },
                setupTimingPattern: function() {
                    for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[e][6] && (this.modules[e][6] = 0 == e % 2);
                    for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[6][t] && (this.modules[6][t] = 0 == t % 2)
                },
                setupPositionAdjustPattern: function() {
                    for (var e = h.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
                        for (var n = 0; n < e.length; n++) {
                            var r = e[t],
                                i = e[n];
                            if (null == this.modules[r][i])
                                for (var o = -2; 2 >= o; o++)
                                    for (var a = -2; 2 >= a; a++) this.modules[r + o][i + a] = -2 == o || 2 == o || -2 == a || 2 == a || 0 == o && 0 == a
                        }
                },
                setupTypeNumber: function(e) {
                    for (var t = h.getBCHTypeNumber(this.typeNumber), n = 0; 18 > n; n++) {
                        var r = !e && 1 == (1 & t >> n);
                        this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r
                    }
                    for (var n = 0; 18 > n; n++) {
                        var r = !e && 1 == (1 & t >> n);
                        this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r
                    }
                },
                setupTypeInfo: function(e, t) {
                    for (var n = this.errorCorrectLevel << 3 | t, r = h.getBCHTypeInfo(n), i = 0; 15 > i; i++) {
                        var o = !e && 1 == (1 & r >> i);
                        6 > i ? this.modules[i][8] = o : 8 > i ? this.modules[i + 1][8] = o : this.modules[this.moduleCount - 15 + i][8] = o
                    }
                    for (var i = 0; 15 > i; i++) {
                        var o = !e && 1 == (1 & r >> i);
                        8 > i ? this.modules[8][this.moduleCount - i - 1] = o : 9 > i ? this.modules[8][15 - i - 1 + 1] = o : this.modules[8][15 - i - 1] = o
                    }
                    this.modules[this.moduleCount - 8][8] = !e
                },
                mapData: function(e, t) {
                    for (var n = -1, r = this.moduleCount - 1, i = 7, o = 0, a = this.moduleCount - 1; a > 0; a -= 2)
                        for (6 == a && a--;;) {
                            for (var s = 0; 2 > s; s++)
                                if (null == this.modules[r][a - s]) {
                                    var u = !1;
                                    o < e.length && (u = 1 == (1 & e[o] >>> i)), h.getMask(t, r, a - s) && (u = !u), this.modules[r][a - s] = u, -1 == --i && (o++, i = 7)
                                } if (0 > (r += n) || this.moduleCount <= r) {
                                r -= n, n = -n;
                                break
                            }
                        }
                }
            }, n.PAD0 = 236, n.PAD1 = 17, n.createData = function(e, t, r) {
                for (var a = i.getRSBlocks(e, t), s = new o, u = 0; u < r.length; u++) {
                    var d = r[u];
                    s.put(d.mode, 4), s.put(d.getLength(), h.getLengthInBits(d.mode, e)), d.write(s)
                }
                for (var l = 0, u = 0; u < a.length; u++) l += a[u].dataCount;
                if (s.getLengthInBits() > 8 * l) throw Error("code length overflow. (" + s.getLengthInBits() + ">" + 8 * l + ")");
                for (s.getLengthInBits() + 4 <= 8 * l && s.put(0, 4); 0 != s.getLengthInBits() % 8;) s.putBit(!1);
                for (; !(s.getLengthInBits() >= 8 * l) && (s.put(n.PAD0, 8), !(s.getLengthInBits() >= 8 * l));) s.put(n.PAD1, 8);
                return n.createBytes(s, a)
            }, n.createBytes = function(e, t) {
                for (var n = 0, i = 0, o = 0, a = Array(t.length), s = Array(t.length), u = 0; u < t.length; u++) {
                    var d = t[u].dataCount,
                        l = t[u].totalCount - d;
                    i = Math.max(i, d), o = Math.max(o, l), a[u] = Array(d);
                    for (var c = 0; c < a[u].length; c++) a[u][c] = 255 & e.buffer[c + n];
                    n += d;
                    var f = h.getErrorCorrectPolynomial(l),
                        p = new r(a[u], f.getLength() - 1).mod(f);
                    s[u] = Array(f.getLength() - 1);
                    for (var c = 0; c < s[u].length; c++) {
                        var g = c + p.getLength() - s[u].length;
                        s[u][c] = g >= 0 ? p.get(g) : 0
                    }
                }
                for (var b = 0, c = 0; c < t.length; c++) b += t[c].totalCount;
                for (var m = Array(b), v = 0, c = 0; i > c; c++)
                    for (var u = 0; u < t.length; u++) c < a[u].length && (m[v++] = a[u][c]);
                for (var c = 0; o > c; c++)
                    for (var u = 0; u < t.length; u++) c < s[u].length && (m[v++] = s[u][c]);
                return m
            };
            for (var l = {
                    MODE_NUMBER: 1,
                    MODE_ALPHA_NUM: 2,
                    MODE_8BIT_BYTE: 4,
                    MODE_KANJI: 8
                }, c = {
                    L: 1,
                    M: 0,
                    Q: 3,
                    H: 2
                }, f = {
                    PATTERN000: 0,
                    PATTERN001: 1,
                    PATTERN010: 2,
                    PATTERN011: 3,
                    PATTERN100: 4,
                    PATTERN101: 5,
                    PATTERN110: 6,
                    PATTERN111: 7
                }, h = {
                    PATTERN_POSITION_TABLE: [
                        [],
                        [6, 18],
                        [6, 22],
                        [6, 26],
                        [6, 30],
                        [6, 34],
                        [6, 22, 38],
                        [6, 24, 42],
                        [6, 26, 46],
                        [6, 28, 50],
                        [6, 30, 54],
                        [6, 32, 58],
                        [6, 34, 62],
                        [6, 26, 46, 66],
                        [6, 26, 48, 70],
                        [6, 26, 50, 74],
                        [6, 30, 54, 78],
                        [6, 30, 56, 82],
                        [6, 30, 58, 86],
                        [6, 34, 62, 90],
                        [6, 28, 50, 72, 94],
                        [6, 26, 50, 74, 98],
                        [6, 30, 54, 78, 102],
                        [6, 28, 54, 80, 106],
                        [6, 32, 58, 84, 110],
                        [6, 30, 58, 86, 114],
                        [6, 34, 62, 90, 118],
                        [6, 26, 50, 74, 98, 122],
                        [6, 30, 54, 78, 102, 126],
                        [6, 26, 52, 78, 104, 130],
                        [6, 30, 56, 82, 108, 134],
                        [6, 34, 60, 86, 112, 138],
                        [6, 30, 58, 86, 114, 142],
                        [6, 34, 62, 90, 118, 146],
                        [6, 30, 54, 78, 102, 126, 150],
                        [6, 24, 50, 76, 102, 128, 154],
                        [6, 28, 54, 80, 106, 132, 158],
                        [6, 32, 58, 84, 110, 136, 162],
                        [6, 26, 54, 82, 110, 138, 166],
                        [6, 30, 58, 86, 114, 142, 170]
                    ],
                    G15: 1335,
                    G18: 7973,
                    G15_MASK: 21522,
                    getBCHTypeInfo: function(e) {
                        for (var t = e << 10; h.getBCHDigit(t) - h.getBCHDigit(h.G15) >= 0;) t ^= h.G15 << h.getBCHDigit(t) - h.getBCHDigit(h.G15);
                        return (e << 10 | t) ^ h.G15_MASK
                    },
                    getBCHTypeNumber: function(e) {
                        for (var t = e << 12; h.getBCHDigit(t) - h.getBCHDigit(h.G18) >= 0;) t ^= h.G18 << h.getBCHDigit(t) - h.getBCHDigit(h.G18);
                        return e << 12 | t
                    },
                    getBCHDigit: function(e) {
                        for (var t = 0; 0 != e;) t++, e >>>= 1;
                        return t
                    },
                    getPatternPosition: function(e) {
                        return h.PATTERN_POSITION_TABLE[e - 1]
                    },
                    getMask: function(e, t, n) {
                        switch (e) {
                            case f.PATTERN000:
                                return 0 == (t + n) % 2;
                            case f.PATTERN001:
                                return 0 == t % 2;
                            case f.PATTERN010:
                                return 0 == n % 3;
                            case f.PATTERN011:
                                return 0 == (t + n) % 3;
                            case f.PATTERN100:
                                return 0 == (Math.floor(t / 2) + Math.floor(n / 3)) % 2;
                            case f.PATTERN101:
                                return 0 == t * n % 2 + t * n % 3;
                            case f.PATTERN110:
                                return 0 == (t * n % 2 + t * n % 3) % 2;
                            case f.PATTERN111:
                                return 0 == (t * n % 3 + (t + n) % 2) % 2;
                            default:
                                throw Error("bad maskPattern:" + e)
                        }
                    },
                    getErrorCorrectPolynomial: function(e) {
                        for (var t = new r([1], 0), n = 0; e > n; n++) t = t.multiply(new r([1, p.gexp(n)], 0));
                        return t
                    },
                    getLengthInBits: function(e, t) {
                        if (t >= 1 && 10 > t) switch (e) {
                            case l.MODE_NUMBER:
                                return 10;
                            case l.MODE_ALPHA_NUM:
                                return 9;
                            case l.MODE_8BIT_BYTE:
                            case l.MODE_KANJI:
                                return 8;
                            default:
                                throw Error("mode:" + e)
                        } else if (27 > t) switch (e) {
                            case l.MODE_NUMBER:
                                return 12;
                            case l.MODE_ALPHA_NUM:
                                return 11;
                            case l.MODE_8BIT_BYTE:
                                return 16;
                            case l.MODE_KANJI:
                                return 10;
                            default:
                                throw Error("mode:" + e)
                        } else {
                            if (!(41 > t)) throw Error("type:" + t);
                            switch (e) {
                                case l.MODE_NUMBER:
                                    return 14;
                                case l.MODE_ALPHA_NUM:
                                    return 13;
                                case l.MODE_8BIT_BYTE:
                                    return 16;
                                case l.MODE_KANJI:
                                    return 12;
                                default:
                                    throw Error("mode:" + e)
                            }
                        }
                    },
                    getLostPoint: function(e) {
                        for (var t = e.getModuleCount(), n = 0, r = 0; t > r; r++)
                            for (var i = 0; t > i; i++) {
                                for (var o = 0, a = e.isDark(r, i), s = -1; 1 >= s; s++)
                                    if (!(0 > r + s || r + s >= t))
                                        for (var u = -1; 1 >= u; u++) 0 > i + u || i + u >= t || (0 != s || 0 != u) && a == e.isDark(r + s, i + u) && o++;
                                o > 5 && (n += 3 + o - 5)
                            }
                        for (var r = 0; t - 1 > r; r++)
                            for (var i = 0; t - 1 > i; i++) {
                                var d = 0;
                                e.isDark(r, i) && d++, e.isDark(r + 1, i) && d++, e.isDark(r, i + 1) && d++, e.isDark(r + 1, i + 1) && d++, (0 == d || 4 == d) && (n += 3)
                            }
                        for (var r = 0; t > r; r++)
                            for (var i = 0; t - 6 > i; i++) e.isDark(r, i) && !e.isDark(r, i + 1) && e.isDark(r, i + 2) && e.isDark(r, i + 3) && e.isDark(r, i + 4) && !e.isDark(r, i + 5) && e.isDark(r, i + 6) && (n += 40);
                        for (var i = 0; t > i; i++)
                            for (var r = 0; t - 6 > r; r++) e.isDark(r, i) && !e.isDark(r + 1, i) && e.isDark(r + 2, i) && e.isDark(r + 3, i) && e.isDark(r + 4, i) && !e.isDark(r + 5, i) && e.isDark(r + 6, i) && (n += 40);
                        for (var l = 0, i = 0; t > i; i++)
                            for (var r = 0; t > r; r++) e.isDark(r, i) && l++;
                        return n + 10 * (Math.abs(100 * l / t / t - 50) / 5)
                    }
                }, p = {
                    glog: function(e) {
                        if (1 > e) throw Error("glog(" + e + ")");
                        return p.LOG_TABLE[e]
                    },
                    gexp: function(e) {
                        for (; 0 > e;) e += 255;
                        for (; e >= 256;) e -= 255;
                        return p.EXP_TABLE[e]
                    },
                    EXP_TABLE: Array(256),
                    LOG_TABLE: Array(256)
                }, g = 0; 8 > g; g++) p.EXP_TABLE[g] = 1 << g;
            for (var g = 8; 256 > g; g++) p.EXP_TABLE[g] = p.EXP_TABLE[g - 4] ^ p.EXP_TABLE[g - 5] ^ p.EXP_TABLE[g - 6] ^ p.EXP_TABLE[g - 8];
            for (var g = 0; 255 > g; g++) p.LOG_TABLE[p.EXP_TABLE[g]] = g;
            r.prototype = {
                get: function(e) {
                    return this.num[e]
                },
                getLength: function() {
                    return this.num.length
                },
                multiply: function(e) {
                    for (var t = Array(this.getLength() + e.getLength() - 1), n = 0; n < this.getLength(); n++)
                        for (var i = 0; i < e.getLength(); i++) t[n + i] ^= p.gexp(p.glog(this.get(n)) + p.glog(e.get(i)));
                    return new r(t, 0)
                },
                mod: function(e) {
                    if (this.getLength() - e.getLength() < 0) return this;
                    for (var t = p.glog(this.get(0)) - p.glog(e.get(0)), n = Array(this.getLength()), i = 0; i < this.getLength(); i++) n[i] = this.get(i);
                    for (var i = 0; i < e.getLength(); i++) n[i] ^= p.gexp(p.glog(e.get(i)) + t);
                    return new r(n, 0).mod(e)
                }
            }, i.RS_BLOCK_TABLE = [
                [1, 26, 19],
                [1, 26, 16],
                [1, 26, 13],
                [1, 26, 9],
                [1, 44, 34],
                [1, 44, 28],
                [1, 44, 22],
                [1, 44, 16],
                [1, 70, 55],
                [1, 70, 44],
                [2, 35, 17],
                [2, 35, 13],
                [1, 100, 80],
                [2, 50, 32],
                [2, 50, 24],
                [4, 25, 9],
                [1, 134, 108],
                [2, 67, 43],
                [2, 33, 15, 2, 34, 16],
                [2, 33, 11, 2, 34, 12],
                [2, 86, 68],
                [4, 43, 27],
                [4, 43, 19],
                [4, 43, 15],
                [2, 98, 78],
                [4, 49, 31],
                [2, 32, 14, 4, 33, 15],
                [4, 39, 13, 1, 40, 14],
                [2, 121, 97],
                [2, 60, 38, 2, 61, 39],
                [4, 40, 18, 2, 41, 19],
                [4, 40, 14, 2, 41, 15],
                [2, 146, 116],
                [3, 58, 36, 2, 59, 37],
                [4, 36, 16, 4, 37, 17],
                [4, 36, 12, 4, 37, 13],
                [2, 86, 68, 2, 87, 69],
                [4, 69, 43, 1, 70, 44],
                [6, 43, 19, 2, 44, 20],
                [6, 43, 15, 2, 44, 16],
                [4, 101, 81],
                [1, 80, 50, 4, 81, 51],
                [4, 50, 22, 4, 51, 23],
                [3, 36, 12, 8, 37, 13],
                [2, 116, 92, 2, 117, 93],
                [6, 58, 36, 2, 59, 37],
                [4, 46, 20, 6, 47, 21],
                [7, 42, 14, 4, 43, 15],
                [4, 133, 107],
                [8, 59, 37, 1, 60, 38],
                [8, 44, 20, 4, 45, 21],
                [12, 33, 11, 4, 34, 12],
                [3, 145, 115, 1, 146, 116],
                [4, 64, 40, 5, 65, 41],
                [11, 36, 16, 5, 37, 17],
                [11, 36, 12, 5, 37, 13],
                [5, 109, 87, 1, 110, 88],
                [5, 65, 41, 5, 66, 42],
                [5, 54, 24, 7, 55, 25],
                [11, 36, 12],
                [5, 122, 98, 1, 123, 99],
                [7, 73, 45, 3, 74, 46],
                [15, 43, 19, 2, 44, 20],
                [3, 45, 15, 13, 46, 16],
                [1, 135, 107, 5, 136, 108],
                [10, 74, 46, 1, 75, 47],
                [1, 50, 22, 15, 51, 23],
                [2, 42, 14, 17, 43, 15],
                [5, 150, 120, 1, 151, 121],
                [9, 69, 43, 4, 70, 44],
                [17, 50, 22, 1, 51, 23],
                [2, 42, 14, 19, 43, 15],
                [3, 141, 113, 4, 142, 114],
                [3, 70, 44, 11, 71, 45],
                [17, 47, 21, 4, 48, 22],
                [9, 39, 13, 16, 40, 14],
                [3, 135, 107, 5, 136, 108],
                [3, 67, 41, 13, 68, 42],
                [15, 54, 24, 5, 55, 25],
                [15, 43, 15, 10, 44, 16],
                [4, 144, 116, 4, 145, 117],
                [17, 68, 42],
                [17, 50, 22, 6, 51, 23],
                [19, 46, 16, 6, 47, 17],
                [2, 139, 111, 7, 140, 112],
                [17, 74, 46],
                [7, 54, 24, 16, 55, 25],
                [34, 37, 13],
                [4, 151, 121, 5, 152, 122],
                [4, 75, 47, 14, 76, 48],
                [11, 54, 24, 14, 55, 25],
                [16, 45, 15, 14, 46, 16],
                [6, 147, 117, 4, 148, 118],
                [6, 73, 45, 14, 74, 46],
                [11, 54, 24, 16, 55, 25],
                [30, 46, 16, 2, 47, 17],
                [8, 132, 106, 4, 133, 107],
                [8, 75, 47, 13, 76, 48],
                [7, 54, 24, 22, 55, 25],
                [22, 45, 15, 13, 46, 16],
                [10, 142, 114, 2, 143, 115],
                [19, 74, 46, 4, 75, 47],
                [28, 50, 22, 6, 51, 23],
                [33, 46, 16, 4, 47, 17],
                [8, 152, 122, 4, 153, 123],
                [22, 73, 45, 3, 74, 46],
                [8, 53, 23, 26, 54, 24],
                [12, 45, 15, 28, 46, 16],
                [3, 147, 117, 10, 148, 118],
                [3, 73, 45, 23, 74, 46],
                [4, 54, 24, 31, 55, 25],
                [11, 45, 15, 31, 46, 16],
                [7, 146, 116, 7, 147, 117],
                [21, 73, 45, 7, 74, 46],
                [1, 53, 23, 37, 54, 24],
                [19, 45, 15, 26, 46, 16],
                [5, 145, 115, 10, 146, 116],
                [19, 75, 47, 10, 76, 48],
                [15, 54, 24, 25, 55, 25],
                [23, 45, 15, 25, 46, 16],
                [13, 145, 115, 3, 146, 116],
                [2, 74, 46, 29, 75, 47],
                [42, 54, 24, 1, 55, 25],
                [23, 45, 15, 28, 46, 16],
                [17, 145, 115],
                [10, 74, 46, 23, 75, 47],
                [10, 54, 24, 35, 55, 25],
                [19, 45, 15, 35, 46, 16],
                [17, 145, 115, 1, 146, 116],
                [14, 74, 46, 21, 75, 47],
                [29, 54, 24, 19, 55, 25],
                [11, 45, 15, 46, 46, 16],
                [13, 145, 115, 6, 146, 116],
                [14, 74, 46, 23, 75, 47],
                [44, 54, 24, 7, 55, 25],
                [59, 46, 16, 1, 47, 17],
                [12, 151, 121, 7, 152, 122],
                [12, 75, 47, 26, 76, 48],
                [39, 54, 24, 14, 55, 25],
                [22, 45, 15, 41, 46, 16],
                [6, 151, 121, 14, 152, 122],
                [6, 75, 47, 34, 76, 48],
                [46, 54, 24, 10, 55, 25],
                [2, 45, 15, 64, 46, 16],
                [17, 152, 122, 4, 153, 123],
                [29, 74, 46, 14, 75, 47],
                [49, 54, 24, 10, 55, 25],
                [24, 45, 15, 46, 46, 16],
                [4, 152, 122, 18, 153, 123],
                [13, 74, 46, 32, 75, 47],
                [48, 54, 24, 14, 55, 25],
                [42, 45, 15, 32, 46, 16],
                [20, 147, 117, 4, 148, 118],
                [40, 75, 47, 7, 76, 48],
                [43, 54, 24, 22, 55, 25],
                [10, 45, 15, 67, 46, 16],
                [19, 148, 118, 6, 149, 119],
                [18, 75, 47, 31, 76, 48],
                [34, 54, 24, 34, 55, 25],
                [20, 45, 15, 61, 46, 16]
            ], i.getRSBlocks = function(e, t) {
                var n = i.getRsBlockTable(e, t);
                if (void 0 == n) throw Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
                for (var r = n.length / 3, o = [], a = 0; r > a; a++)
                    for (var s = n[3 * a + 0], u = n[3 * a + 1], d = n[3 * a + 2], l = 0; s > l; l++) o.push(new i(u, d));
                return o
            }, i.getRsBlockTable = function(e, t) {
                switch (t) {
                    case c.L:
                        return i.RS_BLOCK_TABLE[4 * (e - 1) + 0];
                    case c.M:
                        return i.RS_BLOCK_TABLE[4 * (e - 1) + 1];
                    case c.Q:
                        return i.RS_BLOCK_TABLE[4 * (e - 1) + 2];
                    case c.H:
                        return i.RS_BLOCK_TABLE[4 * (e - 1) + 3];
                    default:
                        return
                }
            }, o.prototype = {
                get: function(e) {
                    var t = Math.floor(e / 8);
                    return 1 == (1 & this.buffer[t] >>> 7 - e % 8)
                },
                put: function(e, t) {
                    for (var n = 0; t > n; n++) this.putBit(1 == (1 & e >>> t - n - 1))
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(e) {
                    var t = Math.floor(this.length / 8);
                    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
                }
            };
            var b = [
                    [17, 14, 11, 7],
                    [32, 26, 20, 14],
                    [53, 42, 32, 24],
                    [78, 62, 46, 34],
                    [106, 84, 60, 44],
                    [134, 106, 74, 58],
                    [154, 122, 86, 64],
                    [192, 152, 108, 84],
                    [230, 180, 130, 98],
                    [271, 213, 151, 119],
                    [321, 251, 177, 137],
                    [367, 287, 203, 155],
                    [425, 331, 241, 177],
                    [458, 362, 258, 194],
                    [520, 412, 292, 220],
                    [586, 450, 322, 250],
                    [644, 504, 364, 280],
                    [718, 560, 394, 310],
                    [792, 624, 442, 338],
                    [858, 666, 482, 382],
                    [929, 711, 509, 403],
                    [1003, 779, 565, 439],
                    [1091, 857, 611, 461],
                    [1171, 911, 661, 511],
                    [1273, 997, 715, 535],
                    [1367, 1059, 751, 593],
                    [1465, 1125, 805, 625],
                    [1528, 1190, 868, 658],
                    [1628, 1264, 908, 698],
                    [1732, 1370, 982, 742],
                    [1840, 1452, 1030, 790],
                    [1952, 1538, 1112, 842],
                    [2068, 1628, 1168, 898],
                    [2188, 1722, 1228, 958],
                    [2303, 1809, 1283, 983],
                    [2431, 1911, 1351, 1051],
                    [2563, 1989, 1423, 1093],
                    [2699, 2099, 1499, 1139],
                    [2809, 2213, 1579, 1219],
                    [2953, 2331, 1663, 1273]
                ],
                m = function() {
                    var e = function(e, t) {
                        this._el = e, this._htOption = t
                    };
                    return e.prototype.draw = function(e) {
                        function t(e, t) {
                            var n = document.createElementNS("http://www.w3.org/2000/svg", e);
                            for (var r in t) t.hasOwnProperty(r) && n.setAttribute(r, t[r]);
                            return n
                        }
                        var n = this._htOption,
                            r = this._el,
                            i = e.getModuleCount();
                        n.width, n.height, this.clear();
                        var o = t("svg", {
                            viewBox: "0 0 " + String(i) + " " + String(i),
                            width: "100%",
                            height: "100%",
                            fill: n.colorLight
                        });
                        o.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), r.appendChild(o), o.appendChild(t("rect", {
                            fill: n.colorDark,
                            width: "1",
                            height: "1",
                            id: "template"
                        }));
                        for (var a = 0; i > a; a++)
                            for (var s = 0; i > s; s++)
                                if (e.isDark(a, s)) {
                                    var u = t("use", {
                                        x: String(a),
                                        y: String(s)
                                    });
                                    u.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), o.appendChild(u)
                                }
                    }, e.prototype.clear = function() {
                        for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild)
                    }, e
                }(),
                v = "svg" === document.documentElement.tagName.toLowerCase() ? m : a() ? function() {
                    function e() {
                        this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none"
                    }

                    function t(e, t) {
                        var n = this;
                        if (n._fFail = t, n._fSuccess = e, null === n._bSupportDataURI) {
                            var r = document.createElement("img"),
                                i = function() {
                                    n._bSupportDataURI = !1, n._fFail && _fFail.call(n)
                                },
                                o = function() {
                                    n._bSupportDataURI = !0, n._fSuccess && n._fSuccess.call(n)
                                };
                            return r.onabort = i, r.onerror = i, r.onload = o, void(r.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
                        }!0 === n._bSupportDataURI && n._fSuccess ? n._fSuccess.call(n) : !1 === n._bSupportDataURI && n._fFail && n._fFail.call(n)
                    }
                    if (this._android && this._android <= 2.1) {
                        var n = 1 / window.devicePixelRatio,
                            r = CanvasRenderingContext2D.prototype.drawImage;
                        CanvasRenderingContext2D.prototype.drawImage = function(e, t, i, o, a, s, u, d) {
                            if ("nodeName" in e && /img/i.test(e.nodeName))
                                for (var l = arguments.length - 1; l >= 1; l--) arguments[l] = arguments[l] * n;
                            else void 0 === d && (arguments[1] *= n, arguments[2] *= n, arguments[3] *= n, arguments[4] *= n);
                            r.apply(this, arguments)
                        }
                    }
                    var i = function(e, t) {
                        this._bIsPainted = !1, this._android = s(), this._htOption = t, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = t.width, this._elCanvas.height = t.height, e.appendChild(this._elCanvas), this._el = e, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null
                    };
                    return i.prototype.draw = function(e) {
                        var t = this._elImage,
                            n = this._oContext,
                            r = this._htOption,
                            i = e.getModuleCount(),
                            o = r.width / i,
                            a = r.height / i,
                            s = Math.round(o),
                            u = Math.round(a);
                        t.style.display = "none", this.clear();
                        for (var d = 0; i > d; d++)
                            for (var l = 0; i > l; l++) {
                                var c = e.isDark(d, l),
                                    f = l * o,
                                    h = d * a;
                                n.strokeStyle = c ? r.colorDark : r.colorLight, n.lineWidth = 1, n.fillStyle = c ? r.colorDark : r.colorLight, n.fillRect(f, h, o, a), n.strokeRect(Math.floor(f) + .5, Math.floor(h) + .5, s, u), n.strokeRect(Math.ceil(f) - .5, Math.ceil(h) - .5, s, u)
                            }
                        this._bIsPainted = !0
                    }, i.prototype.makeImage = function() {
                        this._bIsPainted && t.call(this, e)
                    }, i.prototype.isPainted = function() {
                        return this._bIsPainted
                    }, i.prototype.clear = function() {
                        this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1
                    }, i.prototype.round = function(e) {
                        return e ? Math.floor(1e3 * e) / 1e3 : e
                    }, i
                }() : function() {
                    var e = function(e, t) {
                        this._el = e, this._htOption = t
                    };
                    return e.prototype.draw = function(e) {
                        for (var t = this._htOption, n = this._el, r = e.getModuleCount(), i = Math.floor(t.width / r), o = Math.floor(t.height / r), a = ['<table style="border:0;border-collapse:collapse;">'], s = 0; r > s; s++) {
                            a.push("<tr>");
                            for (var u = 0; r > u; u++) a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + i + "px;height:" + o + "px;background-color:" + (e.isDark(s, u) ? t.colorDark : t.colorLight) + ';"></td>');
                            a.push("</tr>")
                        }
                        a.push("</table>"), n.innerHTML = a.join("");
                        var d = n.childNodes[0],
                            l = (t.width - d.offsetWidth) / 2,
                            c = (t.height - d.offsetHeight) / 2;
                        l > 0 && c > 0 && (d.style.margin = c + "px " + l + "px")
                    }, e.prototype.clear = function() {
                        this._el.innerHTML = ""
                    }, e
                }();
            (e = function(e, t) {
                if (this._htOption = {
                        width: 256,
                        height: 256,
                        typeNumber: 4,
                        colorDark: "#000000",
                        colorLight: "#ffffff",
                        correctLevel: c.H
                    }, "string" == typeof t && (t = {
                        text: t
                    }), t)
                    for (var n in t) this._htOption[n] = t[n];
                "string" == typeof e && (e = document.getElementById(e)), this._android = s(), this._el = e, this._oQRCode = null, this._oDrawing = new v(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text)
            }).prototype.makeCode = function(e) {
                this._oQRCode = new n(u(e, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(e), this._oQRCode.make(), this._el.title = e, this._oDrawing.draw(this._oQRCode), this.makeImage()
            }, e.prototype.makeImage = function() {
                "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
            }, e.prototype.clear = function() {
                this._oDrawing.clear()
            }, e.CorrectLevel = c
        }()
    },
    7857: function(e, t, n) {
        "use strict";
        r = {
            value: !0
        };
        var r, i = n(7294),
            o = n(993);

        function a(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var r, i, o, a, s = [],
                    u = !0,
                    d = !1;
                try {
                    if (o = (n = n.call(e)).next, 0 === t) {
                        if (Object(n) !== n) return;
                        u = !1
                    } else
                        for (; !(u = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); u = !0);
                } catch (e) {
                    d = !0, i = e
                } finally {
                    try {
                        if (!u && null != n.return && (a = n.return(), Object(a) !== a)) return
                    } finally {
                        if (d) throw i
                    }
                }
                return s
            }
        }

        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }

        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(n), !0).forEach(function(t) {
                    c(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        function d(e, t) {
            if ("object" != typeof e || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != typeof r) return r;
                throw TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }

        function l(e) {
            var t = d(e, "string");
            return "symbol" == typeof t ? t : String(t)
        }

        function c(e, t, n) {
            return (t = l(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function f() {
            return (f = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function h(e, t) {
            if (null == e) return {};
            var n, r, i = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
        }

        function p(e, t) {
            if (null == e) return {};
            var n, r, i = h(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }

        function g(e, t) {
            return b(e) || a(e, t) || m(e, t) || y()
        }

        function b(e) {
            if (Array.isArray(e)) return e
        }

        function m(e, t) {
            if (e) {
                if ("string" == typeof e) return v(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
            }
        }

        function v(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function y() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var S = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? i.useLayoutEffect : i.useEffect;

        function $(e) {
            var t = i.useRef(e);
            return S(function() {
                t.current = e
            }), i.useCallback(function() {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return t.current.apply(void 0, n)
            }, [])
        }
        var T = function(e, t) {
                var n = t.decimal,
                    r = t.decimals,
                    i = t.duration,
                    a = t.easingFn,
                    s = t.end,
                    u = t.formattingFn,
                    d = t.numerals,
                    l = t.prefix,
                    c = t.separator,
                    f = t.start,
                    h = t.suffix,
                    p = t.useEasing,
                    g = t.useGrouping,
                    b = t.useIndianSeparators,
                    m = t.enableScrollSpy,
                    v = t.scrollSpyDelay,
                    y = t.scrollSpyOnce,
                    S = t.plugin;
                return new o.CountUp(e, s, {
                    startVal: f,
                    duration: i,
                    decimal: n,
                    decimalPlaces: r,
                    easingFn: a,
                    formattingFn: u,
                    numerals: d,
                    separator: c,
                    prefix: l,
                    suffix: h,
                    plugin: S,
                    useEasing: p,
                    useIndianSeparators: b,
                    useGrouping: g,
                    enableScrollSpy: m,
                    scrollSpyDelay: v,
                    scrollSpyOnce: y
                })
            },
            w = ["ref", "startOnMount", "enableReinitialize", "delay", "onEnd", "onStart", "onPauseResume", "onReset", "onUpdate"],
            P = {
                decimal: ".",
                separator: ",",
                delay: null,
                prefix: "",
                suffix: "",
                duration: 2,
                start: 0,
                decimals: 0,
                startOnMount: !0,
                enableReinitialize: !0,
                useEasing: !0,
                useGrouping: !0,
                useIndianSeparators: !1
            },
            A = function(e) {
                var t = Object.fromEntries(Object.entries(e).filter(function(e) {
                        return void 0 !== g(e, 2)[1]
                    })),
                    n = i.useMemo(function() {
                        return u(u({}, P), t)
                    }, [e]),
                    r = n.ref,
                    o = n.startOnMount,
                    a = n.enableReinitialize,
                    s = n.delay,
                    d = n.onEnd,
                    l = n.onStart,
                    c = n.onPauseResume,
                    f = n.onReset,
                    h = n.onUpdate,
                    b = p(n, w),
                    m = i.useRef(),
                    v = i.useRef(),
                    y = i.useRef(!1),
                    S = $(function() {
                        return T("string" == typeof r ? r : r.current, b)
                    }),
                    A = $(function(e) {
                        var t = m.current;
                        if (t && !e) return t;
                        var n = S();
                        return m.current = n, n
                    }),
                    M = $(function() {
                        var e = function() {
                            return A(!0).start(function() {
                                null == d || d({
                                    pauseResume: C,
                                    reset: O,
                                    start: x,
                                    update: E
                                })
                            })
                        };
                        s && s > 0 ? v.current = setTimeout(e, 1e3 * s) : e(), null == l || l({
                            pauseResume: C,
                            reset: O,
                            update: E
                        })
                    }),
                    C = $(function() {
                        A().pauseResume(), null == c || c({
                            reset: O,
                            start: x,
                            update: E
                        })
                    }),
                    O = $(function() {
                        A().el && (v.current && clearTimeout(v.current), A().reset(), null == f || f({
                            pauseResume: C,
                            start: x,
                            update: E
                        }))
                    }),
                    E = $(function(e) {
                        A().update(e), null == h || h({
                            pauseResume: C,
                            reset: O,
                            start: x
                        })
                    }),
                    x = $(function() {
                        O(), M()
                    }),
                    B = $(function(e) {
                        o && (e && O(), M())
                    });
                return i.useEffect(function() {
                    y.current ? a && B(!0) : (y.current = !0, B())
                }, [a, y, B, s, e.start, e.suffix, e.prefix, e.duration, e.separator, e.decimals, e.decimal, e.formattingFn]), i.useEffect(function() {
                    return function() {
                        O()
                    }
                }, [O]), {
                    start: x,
                    pauseResume: C,
                    reset: O,
                    update: E,
                    getCountUp: A
                }
            },
            M = ["className", "redraw", "containerProps", "children", "style"],
            C = function(e) {
                var t = e.className,
                    n = e.redraw,
                    r = e.containerProps,
                    o = e.children,
                    a = e.style,
                    s = p(e, M),
                    d = i.useRef(null),
                    l = i.useRef(!1),
                    c = A(u(u({}, s), {}, {
                        ref: d,
                        startOnMount: "function" != typeof o || 0 === e.delay,
                        enableReinitialize: !1
                    })),
                    h = c.start,
                    g = c.reset,
                    b = c.update,
                    m = c.pauseResume,
                    v = c.getCountUp,
                    y = $(function() {
                        h()
                    }),
                    S = $(function(t) {
                        e.preserveValue || g(), b(t)
                    }),
                    T = $(function() {
                        if ("function" == typeof e.children && !(d.current instanceof Element)) {
                            console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');
                            return
                        }
                        v()
                    });
                i.useEffect(function() {
                    T()
                }, [T]), i.useEffect(function() {
                    l.current && S(e.end)
                }, [e.end, S]);
                var w = n && e;
                return (i.useEffect(function() {
                    n && l.current && y()
                }, [y, n, w]), i.useEffect(function() {
                    !n && l.current && y()
                }, [y, n, e.start, e.suffix, e.prefix, e.duration, e.separator, e.decimals, e.decimal, e.className, e.formattingFn]), i.useEffect(function() {
                    l.current = !0
                }, []), "function" == typeof o) ? o({
                    countUpRef: d,
                    start: h,
                    reset: g,
                    update: b,
                    pauseResume: m,
                    getCountUp: v
                }) : i.createElement("span", f({
                    className: t,
                    ref: d,
                    style: a
                }, r), void 0 !== e.start ? v().formattingFn(e.start) : "")
            };
        t.default = C
    },
    7333: function(e, t, n) {
        "use strict";
        var r = n(7294);

        function i() {}

        function o(e) {
            return !!(e || "").match(/\d/)
        }

        function a(e) {
            return null == e
        }

        function s(e) {
            return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
        }

        function u(e) {
            switch (e) {
                case "lakh":
                    return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
                case "wan":
                    return /(\d)(?=(\d{4})+(?!\d))/g;
                default:
                    return /(\d)(?=(\d{3})+(?!\d))/g
            }
        }

        function d(e, t, n) {
            var r = u(n),
                i = e.search(/[1-9]/);
            return i = -1 === i ? e.length : i, e.substring(0, i) + e.substring(i, e.length).replace(r, "$1" + t)
        }

        function l(e, t) {
            void 0 === t && (t = !0);
            var n = "-" === e[0],
                r = n && t,
                i = (e = e.replace("-", "")).split(".");
            return {
                beforeDecimal: i[0],
                afterDecimal: i[1] || "",
                hasNagation: n,
                addNegation: r
            }
        }

        function c(e) {
            if (!e) return e;
            var t = "-" === e[0];
            t && (e = e.substring(1, e.length));
            var n = e.split("."),
                r = n[0].replace(/^0+/, "") || "0",
                i = n[1] || "";
            return (t ? "-" : "") + r + (i ? "." + i : "")
        }

        function f(e, t, n) {
            for (var r = "", i = n ? "0" : "", o = 0; o <= t - 1; o++) r += e[o] || i;
            return r
        }

        function h(e, t) {
            return Array(t + 1).join(e)
        }

        function p(e) {
            var t = "-" === (e += "")[0] ? "-" : "";
            t && (e = e.substring(1));
            var n = e.split(/[eE]/g),
                r = n[0],
                i = n[1];
            if (!(i = Number(i))) return t + r;
            r = r.replace(".", "");
            var o = 1 + i,
                a = r.length;
            return o < 0 ? r = "0." + h("0", Math.abs(o)) + r : o >= a ? r += h("0", o - a) : r = (r.substring(0, o) || "0") + "." + r.substring(o), t + r
        }

        function g(e, t, n) {
            if (-1 !== ["", "-"].indexOf(e)) return e;
            var r = -1 !== e.indexOf(".") && t,
                i = l(e),
                o = i.beforeDecimal,
                a = i.afterDecimal,
                s = i.hasNagation,
                u = parseFloat("0." + (a || "0")),
                d = (a.length <= t ? "0." + a : u.toFixed(t)).split(".");
            return (s ? "-" : "") + o.split("").reverse().reduce(function(e, t, n) {
                return e.length > n ? (Number(e[0]) + Number(t)).toString() + e.substring(1, e.length) : t + e
            }, d[0]) + (r ? "." : "") + f(d[1] || "", Math.min(t, a.length), n)
        }

        function b(e, t) {
            if (e.value = e.value, null !== e) {
                if (e.createTextRange) {
                    var n = e.createTextRange();
                    return n.move("character", t), n.select(), !0
                }
                return e.selectionStart || 0 === e.selectionStart ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1)
            }
        }

        function m(e, t) {
            for (var n = 0, r = 0, i = e.length, o = t.length; e[n] === t[n] && n < i;) n++;
            for (; e[i - 1 - r] === t[o - 1 - r] && o - r > n && i - r > n;) r++;
            return {
                start: n,
                end: i - r
            }
        }

        function v(e, t, n) {
            return Math.min(Math.max(e, t), n)
        }

        function y(e) {
            return Math.max(e.selectionStart, e.selectionEnd)
        }

        function S(e) {
            return e || "undefined" != typeof navigator && !(navigator.platform && /iPhone|iPod/.test(navigator.platform))
        }

        function $(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && -1 === t.indexOf(r) && (n[r] = e[r]);
            return n
        }
        var T = {
                displayType: "input",
                decimalSeparator: ".",
                thousandsGroupStyle: "thousand",
                fixedDecimalScale: !1,
                prefix: "",
                suffix: "",
                allowNegative: !0,
                allowEmptyFormatting: !1,
                allowLeadingZeros: !1,
                isNumericString: !1,
                type: "text",
                onValueChange: i,
                onChange: i,
                onKeyDown: i,
                onMouseUp: i,
                onFocus: i,
                onBlur: i,
                isAllowed: function() {
                    return !0
                }
            },
            w = function(e) {
                function t(t) {
                    e.call(this, t);
                    var n = t.defaultValue;
                    this.validateProps();
                    var r = this.formatValueProp(n);
                    this.state = {
                        value: r,
                        numAsString: this.removeFormatting(r),
                        mounted: !1
                    }, this.selectionBeforeInput = {
                        selectionStart: 0,
                        selectionEnd: 0
                    }, this.onChange = this.onChange.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.onFocus = this.onFocus.bind(this), this.onBlur = this.onBlur.bind(this)
                }
                return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.componentDidMount = function() {
                    this.setState({
                        mounted: !0
                    })
                }, t.prototype.componentDidUpdate = function(e) {
                    this.updateValueIfRequired(e)
                }, t.prototype.componentWillUnmount = function() {
                    clearTimeout(this.focusTimeout), clearTimeout(this.caretPositionTimeout)
                }, t.prototype.updateValueIfRequired = function(e) {
                    var t = this,
                        n = t.props,
                        r = t.state,
                        i = t.focusedElm,
                        o = r.value,
                        s = r.numAsString;
                    if (void 0 === s && (s = ""), e !== n) {
                        this.validateProps();
                        var u = this.formatNumString(s),
                            d = a(n.value) ? u : this.formatValueProp(),
                            l = this.removeFormatting(d),
                            c = parseFloat(l),
                            f = parseFloat(s);
                        (isNaN(c) && isNaN(f) || c === f) && u === o && (null !== i || d === o) || this.updateValue({
                            formattedValue: d,
                            numAsString: l,
                            input: i,
                            source: "prop",
                            event: null
                        })
                    }
                }, t.prototype.getFloatString = function(e) {
                    void 0 === e && (e = "");
                    var t = this.props.decimalScale,
                        n = this.getSeparators().decimalSeparator,
                        r = this.getNumberRegex(!0),
                        i = "-" === e[0];
                    i && (e = e.replace("-", "")), n && 0 === t && (e = e.split(n)[0]);
                    var o = (e = (e.match(r) || []).join("").replace(n, ".")).indexOf(".");
                    return -1 !== o && (e = e.substring(0, o) + "." + e.substring(o + 1, e.length).replace(RegExp(s(n), "g"), "")), i && (e = "-" + e), e
                }, t.prototype.getNumberRegex = function(e, t) {
                    var n = this.props,
                        r = n.format,
                        i = n.decimalScale,
                        o = n.customNumerals,
                        a = this.getSeparators().decimalSeparator;
                    return RegExp("[0-9" + (o ? o.join("") : "") + "]" + (!a || 0 === i || t || r ? "" : "|" + s(a)), e ? "g" : void 0)
                }, t.prototype.getSeparators = function() {
                    var e = this.props.decimalSeparator,
                        t = this.props,
                        n = t.thousandSeparator,
                        r = t.allowedDecimalSeparators;
                    return !0 === n && (n = ","), r || (r = [e, "."]), {
                        decimalSeparator: e,
                        thousandSeparator: n,
                        allowedDecimalSeparators: r
                    }
                }, t.prototype.getMaskAtIndex = function(e) {
                    var t = this.props.mask;
                    return (void 0 === t && (t = " "), "string" == typeof t) ? t : t[e] || " "
                }, t.prototype.getValueObject = function(e, t) {
                    var n = parseFloat(t);
                    return {
                        formattedValue: e,
                        value: t,
                        floatValue: isNaN(n) ? void 0 : n
                    }
                }, t.prototype.validateProps = function() {
                    var e = this.props.mask,
                        t = this.getSeparators(),
                        n = t.decimalSeparator,
                        r = t.thousandSeparator;
                    if (n === r) throw Error("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: " + r + ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n          decimalSeparator: ' + n + " (default value for decimalSeparator is .)\n       ");
                    if (e && ("string" === e ? e : e.toString()).match(/\d/g)) throw Error("\n          Mask " + e + " should not contain numeric character;\n        ")
                }, t.prototype.setPatchedCaretPosition = function(e, t, n) {
                    b(e, t), this.caretPositionTimeout = setTimeout(function() {
                        e.value === n && b(e, t)
                    }, 0)
                }, t.prototype.correctCaretPosition = function(e, t, n) {
                    var r = this.props,
                        i = r.prefix,
                        a = r.suffix,
                        s = r.format;
                    if ("" === e) return 0;
                    if (t = v(t, 0, e.length), !s) {
                        var u = "-" === e[0];
                        return v(t, i.length + +!!u, e.length - a.length)
                    }
                    if ("function" == typeof s || "#" === s[t] && o(e[t]) || "#" === s[t - 1] && o(e[t - 1])) return t;
                    var d = s.indexOf("#");
                    t = v(t, d, s.lastIndexOf("#") + 1);
                    for (var l = s.substring(t, s.length).indexOf("#"), c = t, f = t + (-1 === l ? 0 : l); c > d && ("#" !== s[c] || !o(e[c]));) c -= 1;
                    return !o(e[f]) || "left" === n && t !== d || t - c < f - t ? o(e[c]) ? c + 1 : c : f
                }, t.prototype.getCaretPosition = function(e, t, n) {
                    var r, i, o = this.props.format,
                        a = this.state.value,
                        s = this.getNumberRegex(!0),
                        u = (e.match(s) || []).join(""),
                        d = (t.match(s) || []).join("");
                    for (i = 0, r = 0; i < n; i++) {
                        var l = e[i] || "",
                            c = t[r] || "";
                        if (!(!l.match(s) && l !== c || "0" === l && c.match(s) && "0" !== c && u.length !== d.length)) {
                            for (; l !== t[r] && r < t.length;) r++;
                            r++
                        }
                    }
                    return "string" != typeof o || a || (r = t.length), r = this.correctCaretPosition(t, r)
                }, t.prototype.removePrefixAndSuffix = function(e) {
                    var t = this.props,
                        n = t.format,
                        r = t.prefix,
                        i = t.suffix;
                    if (!n && e) {
                        var o = "-" === e[0];
                        o && (e = e.substring(1, e.length));
                        var a = (e = r && 0 === e.indexOf(r) ? e.substring(r.length, e.length) : e).lastIndexOf(i);
                        e = i && -1 !== a && a === e.length - i.length ? e.substring(0, a) : e, o && (e = "-" + e)
                    }
                    return e
                }, t.prototype.removePatternFormatting = function(e) {
                    for (var t = this.props.format.split("#").filter(function(e) {
                            return "" !== e
                        }), n = 0, r = "", i = 0, o = t.length; i <= o; i++) {
                        var a = t[i] || "",
                            s = i === o ? e.length : e.indexOf(a, n);
                        if (-1 === s) {
                            r = e;
                            break
                        }
                        r += e.substring(n, s), n = s + a.length
                    }
                    return (r.match(/\d/g) || []).join("")
                }, t.prototype.removeFormatting = function(e) {
                    var t = this.props,
                        n = t.format,
                        r = t.removeFormatting;
                    return e && (n ? e = "string" == typeof n ? this.removePatternFormatting(e) : "function" == typeof r ? r(e) : (e.match(/\d/g) || []).join("") : (e = this.removePrefixAndSuffix(e), e = this.getFloatString(e))), e
                }, t.prototype.formatWithPattern = function(e) {
                    for (var t = this.props.format, n = 0, r = t.split(""), i = 0, o = t.length; i < o; i++) "#" === t[i] && (r[i] = e[n] || this.getMaskAtIndex(n), n += 1);
                    return r.join("")
                }, t.prototype.formatAsNumber = function(e) {
                    var t = this.props,
                        n = t.decimalScale,
                        r = t.fixedDecimalScale,
                        i = t.prefix,
                        o = t.suffix,
                        a = t.allowNegative,
                        s = t.thousandsGroupStyle,
                        u = this.getSeparators(),
                        c = u.thousandSeparator,
                        h = u.decimalSeparator,
                        p = -1 !== e.indexOf(".") || n && r,
                        g = l(e, a),
                        b = g.beforeDecimal,
                        m = g.afterDecimal,
                        v = g.addNegation;
                    return void 0 !== n && (m = f(m, n, r)), c && (b = d(b, c, s)), i && (b = i + b), o && (m += o), v && (b = "-" + b), e = b + (p && h || "") + m
                }, t.prototype.formatNumString = function(e) {
                    void 0 === e && (e = "");
                    var t = this.props,
                        n = t.format,
                        r = t.allowEmptyFormatting,
                        i = t.customNumerals,
                        o = e;
                    if (i && 10 === i.length) {
                        var a = RegExp("[" + i.join("") + "]", "g");
                        o = e.replace(a, function(e) {
                            return i.indexOf(e).toString()
                        })
                    }
                    return "" !== e || r ? "-" !== e || n ? "string" == typeof n ? this.formatWithPattern(o) : "function" == typeof n ? n(o) : this.formatAsNumber(o) : "-" : ""
                }, t.prototype.formatValueProp = function(e) {
                    var t = this.props,
                        n = t.format,
                        r = t.decimalScale,
                        i = t.fixedDecimalScale,
                        o = t.allowEmptyFormatting,
                        s = this.props,
                        u = s.value,
                        d = s.isNumericString,
                        l = !(u = a(u) ? e : u) && 0 !== u;
                    return (l && o && (u = ""), l && !o) ? "" : ("number" == typeof u && (u = p(u), d = !0), "Infinity" === u && d && (u = ""), d && !n && "number" == typeof r && (u = g(u, r, i)), d ? this.formatNumString(u) : this.formatInput(u))
                }, t.prototype.formatNegation = function(e) {
                    void 0 === e && (e = "");
                    var t = this.props.allowNegative,
                        n = /(-)/,
                        r = RegExp("(-)(.)*(-)"),
                        i = n.test(e),
                        o = r.test(e);
                    return e = e.replace(/-/g, ""), i && !o && t && (e = "-" + e), e
                }, t.prototype.formatInput = function(e) {
                    return void 0 === e && (e = ""), this.props.format || (e = this.removePrefixAndSuffix(e), e = this.formatNegation(e)), e = this.removeFormatting(e), this.formatNumString(e)
                }, t.prototype.isCharacterAFormat = function(e, t) {
                    var n = this.props,
                        r = n.format,
                        i = n.prefix,
                        o = n.suffix,
                        a = n.decimalScale,
                        s = n.fixedDecimalScale,
                        u = this.getSeparators().decimalSeparator;
                    return "string" == typeof r && "#" !== r[e] || !r && (!!(e < i.length) || !!(e >= t.length - o.length) || !!a && !!s && t[e] === u)
                }, t.prototype.correctInputValue = function(e, t, n) {
                    var r = this,
                        i = this.props,
                        o = i.format,
                        a = i.allowNegative,
                        s = i.prefix,
                        u = i.suffix,
                        d = i.decimalScale,
                        c = this.getSeparators(),
                        f = c.allowedDecimalSeparators,
                        h = c.decimalSeparator,
                        p = this.state.numAsString || "",
                        g = this.selectionBeforeInput,
                        b = g.selectionStart,
                        v = g.selectionEnd,
                        y = m(t, n),
                        S = y.start,
                        $ = y.end;
                    if (!o && S === $ && -1 !== f.indexOf(n[b])) {
                        var T = 0 === d ? "" : h;
                        return n.substr(0, b) + T + n.substr(b + 1, n.length)
                    }
                    var w = o ? 0 : s.length,
                        P = t.length - (o ? 0 : u.length);
                    if (n.length > t.length || !n.length || S === $ || 0 === b && v === t.length || 0 === S && $ === t.length || b === w && v === P) return n;
                    var A = t.substr(S, $ - S);
                    if ([].concat(A).find(function(e, n) {
                            return r.isCharacterAFormat(n + S, t)
                        })) {
                        var M = t.substr(S),
                            C = {},
                            O = [];
                        [].concat(M).forEach(function(e, n) {
                            r.isCharacterAFormat(n + S, t) ? C[n] = e : n > A.length - 1 && O.push(e)
                        }), Object.keys(C).forEach(function(e) {
                            O.length > e ? O.splice(e, 0, C[e]) : O.push(C[e])
                        }), n = t.substr(0, S) + O.join("")
                    }
                    if (!o) {
                        var E = this.removeFormatting(n),
                            x = l(E, a),
                            B = x.beforeDecimal,
                            I = x.afterDecimal,
                            D = x.addNegation,
                            _ = e < n.indexOf(h) + 1;
                        if (E.length < p.length && _ && "" === B && !parseFloat(I)) return D ? "-" : ""
                    }
                    return n
                }, t.prototype.updateValue = function(e) {
                    var t = e.formattedValue,
                        n = e.input,
                        r = e.setCaretPosition;
                    void 0 === r && (r = !0);
                    var i = e.source,
                        o = e.event,
                        a = e.numAsString,
                        s = e.caretPos,
                        u = this.props.onValueChange,
                        d = this.state.value;
                    if (n) {
                        if (r) {
                            if (!s) {
                                var l = e.inputValue || n.value,
                                    c = y(n);
                                n.value = t, s = this.getCaretPosition(l, t, c)
                            }
                            this.setPatchedCaretPosition(n, s, t)
                        } else n.value = t
                    }
                    void 0 === a && (a = this.removeFormatting(t)), t !== d && (this.setState({
                        value: t,
                        numAsString: a
                    }), u(this.getValueObject(t, a), {
                        event: o,
                        source: i
                    }))
                }, t.prototype.onChange = function(e) {
                    var t = e.target,
                        n = t.value,
                        r = this,
                        i = r.state,
                        o = r.props,
                        a = o.isAllowed,
                        s = i.value || "",
                        u = y(t);
                    n = this.correctInputValue(u, s, n);
                    var d = this.formatInput(n) || "",
                        l = this.removeFormatting(d),
                        c = a(this.getValueObject(d, l));
                    c || (d = s), this.updateValue({
                        formattedValue: d,
                        numAsString: l,
                        inputValue: n,
                        input: t,
                        event: e,
                        source: "event"
                    }), c && o.onChange(e)
                }, t.prototype.onBlur = function(e) {
                    var t = this,
                        n = t.props,
                        r = t.state,
                        i = n.format,
                        o = n.onBlur,
                        a = n.allowLeadingZeros,
                        s = r.numAsString,
                        u = r.value;
                    if (this.focusedElm = null, clearTimeout(this.focusTimeout), clearTimeout(this.caretPositionTimeout), !i) {
                        isNaN(parseFloat(s)) && (s = ""), a || (s = c(s));
                        var d = this.formatNumString(s);
                        if (d !== u) {
                            this.updateValue({
                                formattedValue: d,
                                numAsString: s,
                                input: e.target,
                                setCaretPosition: !1,
                                event: e,
                                source: "event"
                            }), o(e);
                            return
                        }
                    }
                    o(e)
                }, t.prototype.onKeyDown = function(e) {
                    var t, n = e.target,
                        r = e.key,
                        i = n.selectionStart,
                        o = n.selectionEnd,
                        a = n.value;
                    void 0 === a && (a = "");
                    var s = this.props,
                        u = s.decimalScale,
                        d = s.fixedDecimalScale,
                        l = s.prefix,
                        c = s.suffix,
                        f = s.format,
                        h = s.onKeyDown,
                        p = void 0 !== u && d,
                        g = this.getNumberRegex(!1, p),
                        b = /-/,
                        m = "string" == typeof f;
                    if (this.selectionBeforeInput = {
                            selectionStart: i,
                            selectionEnd: o
                        }, "ArrowLeft" === r || "Backspace" === r ? t = i - 1 : "ArrowRight" === r ? t = i + 1 : "Delete" === r && (t = i), void 0 === t || i !== o) {
                        h(e);
                        return
                    }
                    var v = t,
                        y = m ? f.indexOf("#") : l.length,
                        S = m ? f.lastIndexOf("#") + 1 : a.length - c.length;
                    if ("ArrowLeft" === r || "ArrowRight" === r) {
                        var $ = "ArrowLeft" === r ? "left" : "right";
                        v = this.correctCaretPosition(a, t, $)
                    } else if ("Delete" !== r || g.test(a[t]) || b.test(a[t])) {
                        if ("Backspace" === r && !g.test(a[t])) {
                            if (i <= y + 1 && "-" === a[0] && void 0 === f) {
                                var T = a.substring(1);
                                this.updateValue({
                                    formattedValue: T,
                                    caretPos: v,
                                    input: n,
                                    event: e,
                                    source: "event"
                                })
                            } else if (!b.test(a[t])) {
                                for (; !g.test(a[v - 1]) && v > y;) v--;
                                v = this.correctCaretPosition(a, v, "left")
                            }
                        }
                    } else
                        for (; !g.test(a[v]) && v < S;) v++;
                    (v !== t || t < y || t > S) && (e.preventDefault(), this.setPatchedCaretPosition(n, v, a)), e.isUnitTestRun && this.setPatchedCaretPosition(n, v, a), h(e)
                }, t.prototype.onMouseUp = function(e) {
                    var t = e.target,
                        n = t.selectionStart,
                        r = t.selectionEnd,
                        i = t.value;
                    if (void 0 === i && (i = ""), n === r) {
                        var o = this.correctCaretPosition(i, n);
                        o !== n && this.setPatchedCaretPosition(t, o, i)
                    }
                    this.props.onMouseUp(e)
                }, t.prototype.onFocus = function(e) {
                    var t = this;
                    e.persist(), this.focusedElm = e.target, this.focusTimeout = setTimeout(function() {
                        var n = e.target,
                            r = n.selectionStart,
                            i = n.selectionEnd,
                            o = n.value;
                        void 0 === o && (o = "");
                        var a = t.correctCaretPosition(o, r);
                        a !== r && (0 !== r || i !== o.length) && t.setPatchedCaretPosition(n, a, o), t.props.onFocus(e)
                    }, 0)
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.type,
                        n = e.displayType,
                        i = e.customInput,
                        o = e.renderText,
                        a = e.getInputRef,
                        s = e.format;
                    e.thousandSeparator, e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle, e.decimalScale, e.fixedDecimalScale, e.prefix, e.suffix, e.removeFormatting, e.mask, e.defaultValue, e.isNumericString, e.allowNegative, e.allowEmptyFormatting, e.allowLeadingZeros, e.onValueChange, e.isAllowed, e.customNumerals, e.onChange, e.onKeyDown, e.onMouseUp, e.onFocus, e.onBlur, e.value;
                    var u = $(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "thousandSeparator", "decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "decimalScale", "fixedDecimalScale", "prefix", "suffix", "removeFormatting", "mask", "defaultValue", "isNumericString", "allowNegative", "allowEmptyFormatting", "allowLeadingZeros", "onValueChange", "isAllowed", "customNumerals", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value"]),
                        d = this.state,
                        l = d.value,
                        c = Object.assign({
                            inputMode: d.mounted && S(s) ? "numeric" : void 0
                        }, u, {
                            type: t,
                            value: l,
                            onChange: this.onChange,
                            onKeyDown: this.onKeyDown,
                            onMouseUp: this.onMouseUp,
                            onFocus: this.onFocus,
                            onBlur: this.onBlur
                        });
                    if ("text" === n) return o ? o(l, u) || null : r.createElement("span", Object.assign({}, u, {
                        ref: a
                    }), l);
                    if (i) {
                        var f = i;
                        return r.createElement(f, Object.assign({}, c, {
                            ref: a
                        }))
                    }
                    return r.createElement("input", Object.assign({}, c, {
                        ref: a
                    }))
                }, t
            }(r.Component);
        w.defaultProps = T, t.Z = w
    },
    8205: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.NextArrow = t.PrevArrow = void 0;
        var r = a(n(7294)),
            i = a(n(3387)),
            o = n(5518);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function s(e) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function u() {
            return (u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function d(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }

        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? d(Object(n), !0).forEach(function(t) {
                    c(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        function c(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function f(e, t) {
            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
        }

        function h(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function p(e, t, n) {
            return t && h(e.prototype, t), n && h(e, n), e
        }

        function g(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && b(e, t)
        }

        function b(e, t) {
            return (b = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function m(e) {
            var t = S();
            return function() {
                var n, r = $(e);
                return n = t ? Reflect.construct(r, arguments, $(this).constructor) : r.apply(this, arguments), v(this, n)
            }
        }

        function v(e, t) {
            return t && ("object" === s(t) || "function" == typeof t) ? t : y(e)
        }

        function y(e) {
            if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function S() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }

        function $(e) {
            return ($ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var T = function(e) {
            g(n, e);
            var t = m(n);

            function n() {
                return f(this, n), t.apply(this, arguments)
            }
            return p(n, [{
                key: "clickHandler",
                value: function(e, t) {
                    t && t.preventDefault(), this.props.clickHandler(e, t)
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = {
                            "slick-arrow": !0,
                            "slick-prev": !0
                        },
                        n = this.clickHandler.bind(this, {
                            message: "previous"
                        });
                    !this.props.infinite && (0 === this.props.currentSlide || this.props.slideCount <= this.props.slidesToShow) && (t["slick-disabled"] = !0, n = null);
                    var o = {
                            key: "0",
                            "data-role": "none",
                            className: (0, i.default)(t),
                            style: {
                                display: "block"
                            },
                            onClick: n
                        },
                        a = {
                            currentSlide: this.props.currentSlide,
                            slideCount: this.props.slideCount
                        };
                    return this.props.prevArrow ? r.default.cloneElement(this.props.prevArrow, l(l({}, o), a)) : r.default.createElement("button", u({
                        key: "0",
                        type: "button"
                    }, o), " ", "Previous")
                }
            }]), n
        }(r.default.PureComponent);
        t.PrevArrow = T;
        var w = function(e) {
            g(n, e);
            var t = m(n);

            function n() {
                return f(this, n), t.apply(this, arguments)
            }
            return p(n, [{
                key: "clickHandler",
                value: function(e, t) {
                    t && t.preventDefault(), this.props.clickHandler(e, t)
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = {
                            "slick-arrow": !0,
                            "slick-next": !0
                        },
                        n = this.clickHandler.bind(this, {
                            message: "next"
                        });
                    (0, o.canGoNext)(this.props) || (t["slick-disabled"] = !0, n = null);
                    var a = {
                            key: "1",
                            "data-role": "none",
                            className: (0, i.default)(t),
                            style: {
                                display: "block"
                            },
                            onClick: n
                        },
                        s = {
                            currentSlide: this.props.currentSlide,
                            slideCount: this.props.slideCount
                        };
                    return this.props.nextArrow ? r.default.cloneElement(this.props.nextArrow, l(l({}, a), s)) : r.default.createElement("button", u({
                        key: "1",
                        type: "button"
                    }, a), " ", "Next")
                }
            }]), n
        }(r.default.PureComponent);
        t.NextArrow = w
    },
    3492: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = i(n(7294));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = {
            accessibility: !0,
            adaptiveHeight: !1,
            afterChange: null,
            appendDots: function(e) {
                return r.default.createElement("ul", {
                    style: {
                        display: "block"
                    }
                }, e)
            },
            arrows: !0,
            autoplay: !1,
            autoplaySpeed: 3e3,
            beforeChange: null,
            centerMode: !1,
            centerPadding: "50px",
            className: "",
            cssEase: "ease",
            customPaging: function(e) {
                return r.default.createElement("button", null, e + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: null,
            nextArrow: null,
            onEdge: null,
            onInit: null,
            onLazyLoadError: null,
            onReInit: null,
            pauseOnDotsHover: !1,
            pauseOnFocus: !1,
            pauseOnHover: !0,
            prevArrow: null,
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "div",
            slidesPerRow: 1,
            slidesToScroll: 1,
            slidesToShow: 1,
            speed: 500,
            swipe: !0,
            swipeEvent: null,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            waitForAnimate: !0
        };
        t.default = o
    },
    6329: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Dots = void 0;
        var r = a(n(7294)),
            i = a(n(3387)),
            o = n(5518);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function s(e) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }

        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach(function(t) {
                    l(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        function l(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function c(e, t) {
            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
        }

        function f(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function h(e, t, n) {
            return t && f(e.prototype, t), n && f(e, n), e
        }

        function p(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && g(e, t)
        }

        function g(e, t) {
            return (g = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function b(e) {
            var t = y();
            return function() {
                var n, r = S(e);
                return n = t ? Reflect.construct(r, arguments, S(this).constructor) : r.apply(this, arguments), m(this, n)
            }
        }

        function m(e, t) {
            return t && ("object" === s(t) || "function" == typeof t) ? t : v(e)
        }

        function v(e) {
            if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function y() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }

        function S(e) {
            return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var $ = function(e) {
                var t;
                return e.infinite ? Math.ceil(e.slideCount / e.slidesToScroll) : Math.ceil((e.slideCount - e.slidesToShow) / e.slidesToScroll) + 1
            },
            T = function(e) {
                p(n, e);
                var t = b(n);

                function n() {
                    return c(this, n), t.apply(this, arguments)
                }
                return h(n, [{
                    key: "clickHandler",
                    value: function(e, t) {
                        t.preventDefault(), this.props.clickHandler(e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        for (var e = this.props, t = e.onMouseEnter, n = e.onMouseOver, a = e.onMouseLeave, s = e.infinite, u = e.slidesToScroll, l = e.slidesToShow, c = e.slideCount, f = e.currentSlide, h = $({
                                slideCount: c,
                                slidesToScroll: u,
                                slidesToShow: l,
                                infinite: s
                            }), p = {
                                onMouseEnter: t,
                                onMouseOver: n,
                                onMouseLeave: a
                            }, g = [], b = 0; b < h; b++) {
                            var m = (b + 1) * u - 1,
                                v = s ? m : (0, o.clamp)(m, 0, c - 1),
                                y = v - (u - 1),
                                S = s ? y : (0, o.clamp)(y, 0, c - 1),
                                T = (0, i.default)({
                                    "slick-active": s ? f >= S && f <= v : f === S
                                }),
                                w = {
                                    message: "dots",
                                    index: b,
                                    slidesToScroll: u,
                                    currentSlide: f
                                },
                                P = this.clickHandler.bind(this, w);
                            g = g.concat(r.default.createElement("li", {
                                key: b,
                                className: T
                            }, r.default.cloneElement(this.props.customPaging(b), {
                                onClick: P
                            })))
                        }
                        return r.default.cloneElement(this.props.appendDots(g), d({
                            className: this.props.dotsClass
                        }, p))
                    }
                }]), n
            }(r.default.PureComponent);
        t.Dots = T
    },
    6066: function(e, t, n) {
        "use strict";
        r = {
            value: !0
        }, t.default = void 0;
        var r, i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(5798)).default;
        t.default = i
    },
    6948: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n = {
            animating: !1,
            autoplaying: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            dragging: !1,
            edgeDragged: !1,
            initialized: !1,
            lazyLoadedList: [],
            listHeight: null,
            listWidth: null,
            scrolling: !1,
            slideCount: null,
            slideHeight: null,
            slideWidth: null,
            swipeLeft: null,
            swiped: !1,
            swiping: !1,
            touchObject: {
                startX: 0,
                startY: 0,
                curX: 0,
                curY: 0
            },
            trackStyle: {},
            trackWidth: 0,
            targetSlide: 0
        };
        t.default = n
    },
    8517: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.InnerSlider = void 0;
        var r = f(n(7294)),
            i = f(n(6948)),
            o = f(n(1296)),
            a = f(n(3387)),
            s = n(5518),
            u = n(4740),
            d = n(6329),
            l = n(8205),
            c = f(n(1033));

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function h(e) {
            return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function p() {
            return (p = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function g(e, t) {
            if (null == e) return {};
            var n, r, i = b(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }

        function b(e, t) {
            if (null == e) return {};
            var n, r, i = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
        }

        function m(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }

        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? m(Object(n), !0).forEach(function(t) {
                    E(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        function y(e, t) {
            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
        }

        function S(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function $(e, t, n) {
            return t && S(e.prototype, t), n && S(e, n), e
        }

        function T(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && w(e, t)
        }

        function w(e, t) {
            return (w = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function P(e) {
            var t = C();
            return function() {
                var n, r = O(e);
                return n = t ? Reflect.construct(r, arguments, O(this).constructor) : r.apply(this, arguments), A(this, n)
            }
        }

        function A(e, t) {
            return t && ("object" === h(t) || "function" == typeof t) ? t : M(e)
        }

        function M(e) {
            if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function C() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }

        function O(e) {
            return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function E(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var x = function(e) {
            T(n, e);
            var t = P(n);

            function n(e) {
                y(this, n), E(M(f = t.call(this, e)), "listRefHandler", function(e) {
                    return f.list = e
                }), E(M(f), "trackRefHandler", function(e) {
                    return f.track = e
                }), E(M(f), "adaptHeight", function() {
                    if (f.props.adaptiveHeight && f.list) {
                        var e = f.list.querySelector('[data-index="'.concat(f.state.currentSlide, '"]'));
                        f.list.style.height = (0, s.getHeight)(e) + "px"
                    }
                }), E(M(f), "componentDidMount", function() {
                    if (f.props.onInit && f.props.onInit(), f.props.lazyLoad) {
                        var e = (0, s.getOnDemandLazySlides)(v(v({}, f.props), f.state));
                        e.length > 0 && (f.setState(function(t) {
                            return {
                                lazyLoadedList: t.lazyLoadedList.concat(e)
                            }
                        }), f.props.onLazyLoad && f.props.onLazyLoad(e))
                    }
                    var t = v({
                        listRef: f.list,
                        trackRef: f.track
                    }, f.props);
                    f.updateState(t, !0, function() {
                        f.adaptHeight(), f.props.autoplay && f.autoPlay("update")
                    }), "progressive" === f.props.lazyLoad && (f.lazyLoadTimer = setInterval(f.progressiveLazyLoad, 1e3)), f.ro = new c.default(function() {
                        f.state.animating ? (f.onWindowResized(!1), f.callbackTimers.push(setTimeout(function() {
                            return f.onWindowResized()
                        }, f.props.speed))) : f.onWindowResized()
                    }), f.ro.observe(f.list), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(e) {
                        e.onfocus = f.props.pauseOnFocus ? f.onSlideFocus : null, e.onblur = f.props.pauseOnFocus ? f.onSlideBlur : null
                    }), window.addEventListener ? window.addEventListener("resize", f.onWindowResized) : window.attachEvent("onresize", f.onWindowResized)
                }), E(M(f), "componentWillUnmount", function() {
                    f.animationEndCallback && clearTimeout(f.animationEndCallback), f.lazyLoadTimer && clearInterval(f.lazyLoadTimer), f.callbackTimers.length && (f.callbackTimers.forEach(function(e) {
                        return clearTimeout(e)
                    }), f.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", f.onWindowResized) : window.detachEvent("onresize", f.onWindowResized), f.autoplayTimer && clearInterval(f.autoplayTimer), f.ro.disconnect()
                }), E(M(f), "componentDidUpdate", function(e) {
                    if (f.checkImagesLoad(), f.props.onReInit && f.props.onReInit(), f.props.lazyLoad) {
                        var t = (0, s.getOnDemandLazySlides)(v(v({}, f.props), f.state));
                        t.length > 0 && (f.setState(function(e) {
                            return {
                                lazyLoadedList: e.lazyLoadedList.concat(t)
                            }
                        }), f.props.onLazyLoad && f.props.onLazyLoad(t))
                    }
                    f.adaptHeight();
                    var n = v(v({
                            listRef: f.list,
                            trackRef: f.track
                        }, f.props), f.state),
                        i = f.didPropsChange(e);
                    i && f.updateState(n, i, function() {
                        f.state.currentSlide >= r.default.Children.count(f.props.children) && f.changeSlide({
                            message: "index",
                            index: r.default.Children.count(f.props.children) - f.props.slidesToShow,
                            currentSlide: f.state.currentSlide
                        }), f.props.autoplay ? f.autoPlay("update") : f.pause("paused")
                    })
                }), E(M(f), "onWindowResized", function(e) {
                    f.debouncedResize && f.debouncedResize.cancel(), f.debouncedResize = (0, o.default)(function() {
                        return f.resizeWindow(e)
                    }, 50), f.debouncedResize()
                }), E(M(f), "resizeWindow", function() {
                    var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    if (f.track && f.track.node) {
                        var t = v(v({
                            listRef: f.list,
                            trackRef: f.track
                        }, f.props), f.state);
                        f.updateState(t, e, function() {
                            f.props.autoplay ? f.autoPlay("update") : f.pause("paused")
                        }), f.setState({
                            animating: !1
                        }), clearTimeout(f.animationEndCallback), delete f.animationEndCallback
                    }
                }), E(M(f), "updateState", function(e, t, n) {
                    var i = (0, s.initializedState)(e);
                    e = v(v(v({}, e), i), {}, {
                        slideIndex: i.currentSlide
                    });
                    var o = (0, s.getTrackLeft)(e);
                    e = v(v({}, e), {}, {
                        left: o
                    });
                    var a = (0, s.getTrackCSS)(e);
                    (t || r.default.Children.count(f.props.children) !== r.default.Children.count(e.children)) && (i.trackStyle = a), f.setState(i, n)
                }), E(M(f), "ssrInit", function() {
                    if (f.props.variableWidth) {
                        var e = 0,
                            t = 0,
                            n = [],
                            i = (0, s.getPreClones)(v(v(v({}, f.props), f.state), {}, {
                                slideCount: f.props.children.length
                            })),
                            o = (0, s.getPostClones)(v(v(v({}, f.props), f.state), {}, {
                                slideCount: f.props.children.length
                            }));
                        f.props.children.forEach(function(t) {
                            n.push(t.props.style.width), e += t.props.style.width
                        });
                        for (var a = 0; a < i; a++) t += n[n.length - 1 - a], e += n[n.length - 1 - a];
                        for (var u = 0; u < o; u++) e += n[u];
                        for (var d = 0; d < f.state.currentSlide; d++) t += n[d];
                        var l = {
                            width: e + "px",
                            left: -t + "px"
                        };
                        if (f.props.centerMode) {
                            var c = "".concat(n[f.state.currentSlide], "px");
                            l.left = "calc(".concat(l.left, " + (100% - ").concat(c, ") / 2 ) ")
                        }
                        return {
                            trackStyle: l
                        }
                    }
                    var h = r.default.Children.count(f.props.children),
                        p = v(v(v({}, f.props), f.state), {}, {
                            slideCount: h
                        }),
                        g = (0, s.getPreClones)(p) + (0, s.getPostClones)(p) + h,
                        b = 100 / f.props.slidesToShow * g,
                        m = 100 / g,
                        y = -m * ((0, s.getPreClones)(p) + f.state.currentSlide) * b / 100;
                    return f.props.centerMode && (y += (100 - m * b / 100) / 2), {
                        slideWidth: m + "%",
                        trackStyle: {
                            width: b + "%",
                            left: y + "%"
                        }
                    }
                }), E(M(f), "checkImagesLoad", function() {
                    var e = f.list && f.list.querySelectorAll && f.list.querySelectorAll(".slick-slide img") || [],
                        t = e.length,
                        n = 0;
                    Array.prototype.forEach.call(e, function(e) {
                        var r = function() {
                            return ++n && n >= t && f.onWindowResized()
                        };
                        if (e.onclick) {
                            var i = e.onclick;
                            e.onclick = function() {
                                i(), e.parentNode.focus()
                            }
                        } else e.onclick = function() {
                            return e.parentNode.focus()
                        };
                        e.onload || (f.props.lazyLoad ? e.onload = function() {
                            f.adaptHeight(), f.callbackTimers.push(setTimeout(f.onWindowResized, f.props.speed))
                        } : (e.onload = r, e.onerror = function() {
                            r(), f.props.onLazyLoadError && f.props.onLazyLoadError()
                        }))
                    })
                }), E(M(f), "progressiveLazyLoad", function() {
                    for (var e = [], t = v(v({}, f.props), f.state), n = f.state.currentSlide; n < f.state.slideCount + (0, s.getPostClones)(t); n++)
                        if (0 > f.state.lazyLoadedList.indexOf(n)) {
                            e.push(n);
                            break
                        } for (var r = f.state.currentSlide - 1; r >= -(0, s.getPreClones)(t); r--)
                        if (0 > f.state.lazyLoadedList.indexOf(r)) {
                            e.push(r);
                            break
                        } e.length > 0 ? (f.setState(function(t) {
                        return {
                            lazyLoadedList: t.lazyLoadedList.concat(e)
                        }
                    }), f.props.onLazyLoad && f.props.onLazyLoad(e)) : f.lazyLoadTimer && (clearInterval(f.lazyLoadTimer), delete f.lazyLoadTimer)
                }), E(M(f), "slideHandler", function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = f.props,
                        r = n.asNavFor,
                        i = n.beforeChange,
                        o = n.onLazyLoad,
                        a = n.speed,
                        u = n.afterChange,
                        d = f.state.currentSlide,
                        l = (0, s.slideHandler)(v(v(v({
                            index: e
                        }, f.props), f.state), {}, {
                            trackRef: f.track,
                            useCSS: f.props.useCSS && !t
                        })),
                        c = l.state,
                        h = l.nextState;
                    if (c) {
                        i && i(d, c.currentSlide);
                        var p = c.lazyLoadedList.filter(function(e) {
                            return 0 > f.state.lazyLoadedList.indexOf(e)
                        });
                        o && p.length > 0 && o(p), !f.props.waitForAnimate && f.animationEndCallback && (clearTimeout(f.animationEndCallback), u && u(d), delete f.animationEndCallback), f.setState(c, function() {
                            r && f.asNavForIndex !== e && (f.asNavForIndex = e, r.innerSlider.slideHandler(e)), h && (f.animationEndCallback = setTimeout(function() {
                                var e = h.animating,
                                    t = g(h, ["animating"]);
                                f.setState(t, function() {
                                    f.callbackTimers.push(setTimeout(function() {
                                        return f.setState({
                                            animating: e
                                        })
                                    }, 10)), u && u(c.currentSlide), delete f.animationEndCallback
                                })
                            }, a))
                        })
                    }
                }), E(M(f), "changeSlide", function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = v(v({}, f.props), f.state),
                        r = (0, s.changeSlide)(n, e);
                    if ((0 === r || r) && (!0 === t ? f.slideHandler(r, t) : f.slideHandler(r), f.props.autoplay && f.autoPlay("update"), f.props.focusOnSelect)) {
                        var i = f.list.querySelectorAll(".slick-current");
                        i[0] && i[0].focus()
                    }
                }), E(M(f), "clickHandler", function(e) {
                    !1 === f.clickable && (e.stopPropagation(), e.preventDefault()), f.clickable = !0
                }), E(M(f), "keyHandler", function(e) {
                    var t = (0, s.keyHandler)(e, f.props.accessibility, f.props.rtl);
                    "" !== t && f.changeSlide({
                        message: t
                    })
                }), E(M(f), "selectHandler", function(e) {
                    f.changeSlide(e)
                }), E(M(f), "disableBodyScroll", function() {
                    var e = function(e) {
                        (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
                    };
                    window.ontouchmove = e
                }), E(M(f), "enableBodyScroll", function() {
                    window.ontouchmove = null
                }), E(M(f), "swipeStart", function(e) {
                    f.props.verticalSwiping && f.disableBodyScroll();
                    var t = (0, s.swipeStart)(e, f.props.swipe, f.props.draggable);
                    "" !== t && f.setState(t)
                }), E(M(f), "swipeMove", function(e) {
                    var t = (0, s.swipeMove)(e, v(v(v({}, f.props), f.state), {}, {
                        trackRef: f.track,
                        listRef: f.list,
                        slideIndex: f.state.currentSlide
                    }));
                    t && (t.swiping && (f.clickable = !1), f.setState(t))
                }), E(M(f), "swipeEnd", function(e) {
                    var t = (0, s.swipeEnd)(e, v(v(v({}, f.props), f.state), {}, {
                        trackRef: f.track,
                        listRef: f.list,
                        slideIndex: f.state.currentSlide
                    }));
                    if (t) {
                        var n = t.triggerSlideHandler;
                        delete t.triggerSlideHandler, f.setState(t), void 0 !== n && (f.slideHandler(n), f.props.verticalSwiping && f.enableBodyScroll())
                    }
                }), E(M(f), "touchEnd", function(e) {
                    f.swipeEnd(e), f.clickable = !0
                }), E(M(f), "slickPrev", function() {
                    f.callbackTimers.push(setTimeout(function() {
                        return f.changeSlide({
                            message: "previous"
                        })
                    }, 0))
                }), E(M(f), "slickNext", function() {
                    f.callbackTimers.push(setTimeout(function() {
                        return f.changeSlide({
                            message: "next"
                        })
                    }, 0))
                }), E(M(f), "slickGoTo", function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (isNaN(e = Number(e))) return "";
                    f.callbackTimers.push(setTimeout(function() {
                        return f.changeSlide({
                            message: "index",
                            index: e,
                            currentSlide: f.state.currentSlide
                        }, t)
                    }, 0))
                }), E(M(f), "play", function() {
                    var e;
                    if (f.props.rtl) e = f.state.currentSlide - f.props.slidesToScroll;
                    else {
                        if (!(0, s.canGoNext)(v(v({}, f.props), f.state))) return !1;
                        e = f.state.currentSlide + f.props.slidesToScroll
                    }
                    f.slideHandler(e)
                }), E(M(f), "autoPlay", function(e) {
                    f.autoplayTimer && clearInterval(f.autoplayTimer);
                    var t = f.state.autoplaying;
                    if ("update" === e) {
                        if ("hovered" === t || "focused" === t || "paused" === t) return
                    } else if ("leave" === e) {
                        if ("paused" === t || "focused" === t) return
                    } else if ("blur" === e && ("paused" === t || "hovered" === t)) return;
                    f.autoplayTimer = setInterval(f.play, f.props.autoplaySpeed + 50), f.setState({
                        autoplaying: "playing"
                    })
                }), E(M(f), "pause", function(e) {
                    f.autoplayTimer && (clearInterval(f.autoplayTimer), f.autoplayTimer = null);
                    var t = f.state.autoplaying;
                    "paused" === e ? f.setState({
                        autoplaying: "paused"
                    }) : "focused" === e ? ("hovered" === t || "playing" === t) && f.setState({
                        autoplaying: "focused"
                    }) : "playing" === t && f.setState({
                        autoplaying: "hovered"
                    })
                }), E(M(f), "onDotsOver", function() {
                    return f.props.autoplay && f.pause("hovered")
                }), E(M(f), "onDotsLeave", function() {
                    return f.props.autoplay && "hovered" === f.state.autoplaying && f.autoPlay("leave")
                }), E(M(f), "onTrackOver", function() {
                    return f.props.autoplay && f.pause("hovered")
                }), E(M(f), "onTrackLeave", function() {
                    return f.props.autoplay && "hovered" === f.state.autoplaying && f.autoPlay("leave")
                }), E(M(f), "onSlideFocus", function() {
                    return f.props.autoplay && f.pause("focused")
                }), E(M(f), "onSlideBlur", function() {
                    return f.props.autoplay && "focused" === f.state.autoplaying && f.autoPlay("blur")
                }), E(M(f), "render", function() {
                    var e, t, n, i = (0, a.default)("slick-slider", f.props.className, {
                            "slick-vertical": f.props.vertical,
                            "slick-initialized": !0
                        }),
                        o = v(v({}, f.props), f.state),
                        c = (0, s.extractObject)(o, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]),
                        h = f.props.pauseOnHover;
                    if (c = v(v({}, c), {}, {
                            onMouseEnter: h ? f.onTrackOver : null,
                            onMouseLeave: h ? f.onTrackLeave : null,
                            onMouseOver: h ? f.onTrackOver : null,
                            focusOnSelect: f.props.focusOnSelect && f.clickable ? f.selectHandler : null
                        }), !0 === f.props.dots && f.state.slideCount >= f.props.slidesToShow) {
                        var g = (0, s.extractObject)(o, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]),
                            b = f.props.pauseOnDotsHover;
                        g = v(v({}, g), {}, {
                            clickHandler: f.changeSlide,
                            onMouseEnter: b ? f.onDotsLeave : null,
                            onMouseOver: b ? f.onDotsOver : null,
                            onMouseLeave: b ? f.onDotsLeave : null
                        }), e = r.default.createElement(d.Dots, g)
                    }
                    var m = (0, s.extractObject)(o, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
                    m.clickHandler = f.changeSlide, f.props.arrows && (t = r.default.createElement(l.PrevArrow, m), n = r.default.createElement(l.NextArrow, m));
                    var y = null;
                    f.props.vertical && (y = {
                        height: f.state.listHeight
                    });
                    var S = null;
                    !1 === f.props.vertical ? !0 === f.props.centerMode && (S = {
                        padding: "0px " + f.props.centerPadding
                    }) : !0 === f.props.centerMode && (S = {
                        padding: f.props.centerPadding + " 0px"
                    });
                    var $ = v(v({}, y), S),
                        T = f.props.touchMove,
                        w = {
                            className: "slick-list",
                            style: $,
                            onClick: f.clickHandler,
                            onMouseDown: T ? f.swipeStart : null,
                            onMouseMove: f.state.dragging && T ? f.swipeMove : null,
                            onMouseUp: T ? f.swipeEnd : null,
                            onMouseLeave: f.state.dragging && T ? f.swipeEnd : null,
                            onTouchStart: T ? f.swipeStart : null,
                            onTouchMove: f.state.dragging && T ? f.swipeMove : null,
                            onTouchEnd: T ? f.touchEnd : null,
                            onTouchCancel: f.state.dragging && T ? f.swipeEnd : null,
                            onKeyDown: f.props.accessibility ? f.keyHandler : null
                        },
                        P = {
                            className: i,
                            dir: "ltr",
                            style: f.props.style
                        };
                    return f.props.unslick && (w = {
                        className: "slick-list"
                    }, P = {
                        className: i
                    }), r.default.createElement("div", P, f.props.unslick ? "" : t, r.default.createElement("div", p({
                        ref: f.listRefHandler
                    }, w), r.default.createElement(u.Track, p({
                        ref: f.trackRefHandler
                    }, c), f.props.children)), f.props.unslick ? "" : n, f.props.unslick ? "" : e)
                }), f.list = null, f.track = null, f.state = v(v({}, i.default), {}, {
                    currentSlide: f.props.initialSlide,
                    slideCount: r.default.Children.count(f.props.children)
                }), f.callbackTimers = [], f.clickable = !0, f.debouncedResize = null;
                var f, h = f.ssrInit();
                return f.state = v(v({}, f.state), h), f
            }
            return $(n, [{
                key: "didPropsChange",
                value: function(e) {
                    for (var t = !1, n = 0, i = Object.keys(this.props); n < i.length; n++) {
                        var o = i[n];
                        if (!e.hasOwnProperty(o) || "object" !== h(e[o]) && "function" != typeof e[o] && e[o] !== this.props[o]) {
                            t = !0;
                            break
                        }
                    }
                    return t || r.default.Children.count(this.props.children) !== r.default.Children.count(e.children)
                }
            }]), n
        }(r.default.Component);
        t.InnerSlider = x
    },
    5798: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = u(n(7294)),
            i = n(8517),
            o = u(n(973)),
            a = u(n(3492)),
            s = n(5518);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function d(e) {
            return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function l() {
            return (l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function c(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }

        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(Object(n), !0).forEach(function(t) {
                    w(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        function h(e, t) {
            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
        }

        function p(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function g(e, t, n) {
            return t && p(e.prototype, t), n && p(e, n), e
        }

        function b(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && m(e, t)
        }

        function m(e, t) {
            return (m = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function v(e) {
            var t = $();
            return function() {
                var n, r = T(e);
                return n = t ? Reflect.construct(r, arguments, T(this).constructor) : r.apply(this, arguments), y(this, n)
            }
        }

        function y(e, t) {
            return t && ("object" === d(t) || "function" == typeof t) ? t : S(e)
        }

        function S(e) {
            if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function $() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }

        function T(e) {
            return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function w(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var P = (0, s.canUseDOM)() && n(4974),
            A = function(e) {
                b(n, e);
                var t = v(n);

                function n(e) {
                    var r;
                    return h(this, n), w(S(r = t.call(this, e)), "innerSliderRefHandler", function(e) {
                        return r.innerSlider = e
                    }), w(S(r), "slickPrev", function() {
                        return r.innerSlider.slickPrev()
                    }), w(S(r), "slickNext", function() {
                        return r.innerSlider.slickNext()
                    }), w(S(r), "slickGoTo", function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return r.innerSlider.slickGoTo(e, t)
                    }), w(S(r), "slickPause", function() {
                        return r.innerSlider.pause("paused")
                    }), w(S(r), "slickPlay", function() {
                        return r.innerSlider.autoPlay("play")
                    }), r.state = {
                        breakpoint: null
                    }, r._responsiveMediaHandlers = [], r
                }
                return g(n, [{
                    key: "media",
                    value: function(e, t) {
                        P.register(e, t), this._responsiveMediaHandlers.push({
                            query: e,
                            handler: t
                        })
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        if (this.props.responsive) {
                            var t = this.props.responsive.map(function(e) {
                                return e.breakpoint
                            });
                            t.sort(function(e, t) {
                                return e - t
                            }), t.forEach(function(n, r) {
                                var i;
                                i = 0 === r ? (0, o.default)({
                                    minWidth: 0,
                                    maxWidth: n
                                }) : (0, o.default)({
                                    minWidth: t[r - 1] + 1,
                                    maxWidth: n
                                }), (0, s.canUseDOM)() && e.media(i, function() {
                                    e.setState({
                                        breakpoint: n
                                    })
                                })
                            });
                            var n = (0, o.default)({
                                minWidth: t.slice(-1)[0]
                            });
                            (0, s.canUseDOM)() && this.media(n, function() {
                                e.setState({
                                    breakpoint: null
                                })
                            })
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this._responsiveMediaHandlers.forEach(function(e) {
                            P.unregister(e.query, e.handler)
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t, n = this;
                        (e = this.state.breakpoint ? "unslick" === (t = this.props.responsive.filter(function(e) {
                            return e.breakpoint === n.state.breakpoint
                        }))[0].settings ? "unslick" : f(f(f({}, a.default), this.props), t[0].settings) : f(f({}, a.default), this.props)).centerMode && (e.slidesToScroll, e.slidesToScroll = 1), e.fade && (e.slidesToShow, e.slidesToScroll, e.slidesToShow = 1, e.slidesToScroll = 1);
                        var o = r.default.Children.toArray(this.props.children);
                        o = o.filter(function(e) {
                            return "string" == typeof e ? !!e.trim() : !!e
                        }), e.variableWidth && (e.rows > 1 || e.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), e.variableWidth = !1);
                        for (var s = [], u = null, d = 0; d < o.length; d += e.rows * e.slidesPerRow) {
                            for (var c = [], h = d; h < d + e.rows * e.slidesPerRow; h += e.slidesPerRow) {
                                for (var p = [], g = h; g < h + e.slidesPerRow && (e.variableWidth && o[g].props.style && (u = o[g].props.style.width), !(g >= o.length)); g += 1) p.push(r.default.cloneElement(o[g], {
                                    key: 100 * d + 10 * h + g,
                                    tabIndex: -1,
                                    style: {
                                        width: "".concat(100 / e.slidesPerRow, "%"),
                                        display: "inline-block"
                                    }
                                }));
                                c.push(r.default.createElement("div", {
                                    key: 10 * d + h
                                }, p))
                            }
                            e.variableWidth ? s.push(r.default.createElement("div", {
                                key: d,
                                style: {
                                    width: u
                                }
                            }, c)) : s.push(r.default.createElement("div", {
                                key: d
                            }, c))
                        }
                        if ("unslick" === e) {
                            var b = "regular slider " + (this.props.className || "");
                            return r.default.createElement("div", {
                                className: b
                            }, o)
                        }
                        return s.length <= e.slidesToShow && (e.unslick = !0), r.default.createElement(i.InnerSlider, l({
                            style: this.props.style,
                            ref: this.innerSliderRefHandler
                        }, e), s)
                    }
                }]), n
            }(r.default.Component);
        t.default = A
    },
    4740: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Track = void 0;
        var r = a(n(7294)),
            i = a(n(3387)),
            o = n(5518);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function s(e) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function u() {
            return (u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function d(e, t) {
            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
        }

        function l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function c(e, t, n) {
            return t && l(e.prototype, t), n && l(e, n), e
        }

        function f(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && h(e, t)
        }

        function h(e, t) {
            return (h = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function p(e) {
            var t = m();
            return function() {
                var n, r = v(e);
                return n = t ? Reflect.construct(r, arguments, v(this).constructor) : r.apply(this, arguments), g(this, n)
            }
        }

        function g(e, t) {
            return t && ("object" === s(t) || "function" == typeof t) ? t : b(e)
        }

        function b(e) {
            if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function m() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }

        function v(e) {
            return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function y(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }

        function S(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? y(Object(n), !0).forEach(function(t) {
                    $(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        function $(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var T = function(e) {
                var t, n, r, i, o, a;
                return r = (o = e.rtl ? e.slideCount - 1 - e.index : e.index) < 0 || o >= e.slideCount, e.centerMode ? (i = Math.floor(e.slidesToShow / 2), n = (o - e.currentSlide) % e.slideCount == 0, o > e.currentSlide - i - 1 && o <= e.currentSlide + i && (t = !0)) : t = e.currentSlide <= o && o < e.currentSlide + e.slidesToShow, {
                    "slick-slide": !0,
                    "slick-active": t,
                    "slick-center": n,
                    "slick-cloned": r,
                    "slick-current": o === (a = e.targetSlide < 0 ? e.targetSlide + e.slideCount : e.targetSlide >= e.slideCount ? e.targetSlide - e.slideCount : e.targetSlide)
                }
            },
            w = function(e) {
                var t = {};
                return (void 0 === e.variableWidth || !1 === e.variableWidth) && (t.width = e.slideWidth), e.fade && (t.position = "relative", e.vertical ? t.top = -e.index * parseInt(e.slideHeight) : t.left = -e.index * parseInt(e.slideWidth), t.opacity = +(e.currentSlide === e.index), e.useCSS && (t.transition = "opacity " + e.speed + "ms " + e.cssEase + ", visibility " + e.speed + "ms " + e.cssEase)), t
            },
            P = function(e, t) {
                return e.key || t
            },
            A = function(e) {
                var t, n = [],
                    a = [],
                    s = [],
                    u = r.default.Children.count(e.children),
                    d = (0, o.lazyStartIndex)(e),
                    l = (0, o.lazyEndIndex)(e);
                return (r.default.Children.forEach(e.children, function(c, f) {
                    var h, p = {
                        message: "children",
                        index: f,
                        slidesToScroll: e.slidesToScroll,
                        currentSlide: e.currentSlide
                    };
                    h = !e.lazyLoad || e.lazyLoad && e.lazyLoadedList.indexOf(f) >= 0 ? c : r.default.createElement("div", null);
                    var g = w(S(S({}, e), {}, {
                            index: f
                        })),
                        b = h.props.className || "",
                        m = T(S(S({}, e), {}, {
                            index: f
                        }));
                    if (n.push(r.default.cloneElement(h, {
                            key: "original" + P(h, f),
                            "data-index": f,
                            className: (0, i.default)(m, b),
                            tabIndex: "-1",
                            "aria-hidden": !m["slick-active"],
                            style: S(S({
                                outline: "none"
                            }, h.props.style || {}), g),
                            onClick: function(t) {
                                h.props && h.props.onClick && h.props.onClick(t), e.focusOnSelect && e.focusOnSelect(p)
                            }
                        })), e.infinite && !1 === e.fade) {
                        var v = u - f;
                        v <= (0, o.getPreClones)(e) && u !== e.slidesToShow && ((t = -v) >= d && (h = c), m = T(S(S({}, e), {}, {
                            index: t
                        })), a.push(r.default.cloneElement(h, {
                            key: "precloned" + P(h, t),
                            "data-index": t,
                            tabIndex: "-1",
                            className: (0, i.default)(m, b),
                            "aria-hidden": !m["slick-active"],
                            style: S(S({}, h.props.style || {}), g),
                            onClick: function(t) {
                                h.props && h.props.onClick && h.props.onClick(t), e.focusOnSelect && e.focusOnSelect(p)
                            }
                        }))), u !== e.slidesToShow && ((t = u + f) < l && (h = c), m = T(S(S({}, e), {}, {
                            index: t
                        })), s.push(r.default.cloneElement(h, {
                            key: "postcloned" + P(h, t),
                            "data-index": t,
                            tabIndex: "-1",
                            className: (0, i.default)(m, b),
                            "aria-hidden": !m["slick-active"],
                            style: S(S({}, h.props.style || {}), g),
                            onClick: function(t) {
                                h.props && h.props.onClick && h.props.onClick(t), e.focusOnSelect && e.focusOnSelect(p)
                            }
                        })))
                    }
                }), e.rtl) ? a.concat(n, s).reverse() : a.concat(n, s)
            },
            M = function(e) {
                f(n, e);
                var t = p(n);

                function n() {
                    var e;
                    d(this, n);
                    for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                    return $(b(e = t.call.apply(t, [this].concat(i))), "node", null), $(b(e), "handleRef", function(t) {
                        e.node = t
                    }), e
                }
                return c(n, [{
                    key: "render",
                    value: function() {
                        var e = A(this.props),
                            t = this.props,
                            n = {
                                onMouseEnter: t.onMouseEnter,
                                onMouseOver: t.onMouseOver,
                                onMouseLeave: t.onMouseLeave
                            };
                        return r.default.createElement("div", u({
                            ref: this.handleRef,
                            className: "slick-track",
                            style: this.props.trackStyle
                        }, n), e)
                    }
                }]), n
            }(r.default.PureComponent);
        t.Track = M
    },
    5518: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.clamp = u, t.canUseDOM = t.slidesOnLeft = t.slidesOnRight = t.siblingDirection = t.getTotalSlides = t.getPostClones = t.getPreClones = t.getTrackLeft = t.getTrackAnimateCSS = t.getTrackCSS = t.checkSpecKeys = t.getSlideCount = t.checkNavigable = t.getNavigableIndexes = t.swipeEnd = t.swipeMove = t.swipeStart = t.keyHandler = t.changeSlide = t.slideHandler = t.initializedState = t.extractObject = t.canGoNext = t.getSwipeDirection = t.getHeight = t.getWidth = t.lazySlidesOnRight = t.lazySlidesOnLeft = t.lazyEndIndex = t.lazyStartIndex = t.getRequiredLazySlides = t.getOnDemandLazySlides = t.safePreventDefault = void 0;
        var r = i(n(7294));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }

        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach(function(t) {
                    s(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function u(e, t, n) {
            return Math.max(t, Math.min(e, n))
        }
        var d = function(e) {
            ["onTouchStart", "onTouchMove", "onWheel"].includes(e._reactName) || e.preventDefault()
        };
        t.safePreventDefault = d;
        var l = function(e) {
            for (var t = [], n = f(e), r = h(e), i = n; i < r; i++) 0 > e.lazyLoadedList.indexOf(i) && t.push(i);
            return t
        };
        t.getOnDemandLazySlides = l;
        var c = function(e) {
            for (var t = [], n = f(e), r = h(e), i = n; i < r; i++) t.push(i);
            return t
        };
        t.getRequiredLazySlides = c;
        var f = function(e) {
            return e.currentSlide - p(e)
        };
        t.lazyStartIndex = f;
        var h = function(e) {
            return e.currentSlide + g(e)
        };
        t.lazyEndIndex = h;
        var p = function(e) {
            return e.centerMode ? Math.floor(e.slidesToShow / 2) + +(parseInt(e.centerPadding) > 0) : 0
        };
        t.lazySlidesOnLeft = p;
        var g = function(e) {
            return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + +(parseInt(e.centerPadding) > 0) : e.slidesToShow
        };
        t.lazySlidesOnRight = g;
        var b = function(e) {
            return e && e.offsetWidth || 0
        };
        t.getWidth = b;
        var m = function(e) {
            return e && e.offsetHeight || 0
        };
        t.getHeight = m;
        var v = function(e) {
            var t, n, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return (t = e.startX - e.curX, (n = Math.round(180 * Math.atan2(e.startY - e.curY, t) / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 || n <= 360 && n >= 315) ? "left" : n >= 135 && n <= 225 ? "right" : !0 === r ? n >= 35 && n <= 135 ? "up" : "down" : "vertical"
        };
        t.getSwipeDirection = v;
        var y = function(e) {
            var t = !0;
            return !e.infinite && (e.centerMode && e.currentSlide >= e.slideCount - 1 ? t = !1 : (e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (t = !1)), t
        };
        t.canGoNext = y;
        var S = function(e, t) {
            var n = {};
            return t.forEach(function(t) {
                return n[t] = e[t]
            }), n
        };
        t.extractObject = S;
        var $ = function(e) {
            var t, n = r.default.Children.count(e.children),
                i = e.listRef,
                o = Math.ceil(b(i)),
                s = Math.ceil(b(e.trackRef && e.trackRef.node));
            if (e.vertical) t = o;
            else {
                var u = e.centerMode && 2 * parseInt(e.centerPadding);
                "string" == typeof e.centerPadding && "%" === e.centerPadding.slice(-1) && (u *= o / 100), t = Math.ceil((o - u) / e.slidesToShow)
            }
            var d = i && m(i.querySelector('[data-index="0"]')),
                c = d * e.slidesToShow,
                f = void 0 === e.currentSlide ? e.initialSlide : e.currentSlide;
            e.rtl && void 0 === e.currentSlide && (f = n - 1 - e.initialSlide);
            var h = e.lazyLoadedList || [],
                p = l(a(a({}, e), {}, {
                    currentSlide: f,
                    lazyLoadedList: h
                })),
                g = {
                    slideCount: n,
                    slideWidth: t,
                    listWidth: o,
                    trackWidth: s,
                    currentSlide: f,
                    slideHeight: d,
                    listHeight: c,
                    lazyLoadedList: h = h.concat(p)
                };
            return null === e.autoplaying && e.autoplay && (g.autoplaying = "playing"), g
        };
        t.initializedState = $;
        var T = function(e) {
            var t = e.waitForAnimate,
                n = e.animating,
                r = e.fade,
                i = e.infinite,
                o = e.index,
                s = e.slideCount,
                d = e.lazyLoad,
                c = e.currentSlide,
                f = e.centerMode,
                h = e.slidesToScroll,
                p = e.slidesToShow,
                g = e.useCSS,
                b = e.lazyLoadedList;
            if (t && n) return {};
            var m, v, S, $ = o,
                T = {},
                w = {},
                P = i ? o : u(o, 0, s - 1);
            if (r) {
                if (!i && (o < 0 || o >= s)) return {};
                o < 0 ? $ = o + s : o >= s && ($ = o - s), d && 0 > b.indexOf($) && (b = b.concat($)), T = {
                    animating: !0,
                    currentSlide: $,
                    lazyLoadedList: b,
                    targetSlide: $
                }, w = {
                    animating: !1,
                    targetSlide: $
                }
            } else m = $, $ < 0 ? (m = $ + s, i ? s % h != 0 && (m = s - s % h) : m = 0) : !y(e) && $ > c ? $ = m = c : f && $ >= s ? ($ = i ? s : s - 1, m = i ? 0 : s - 1) : $ >= s && (m = $ - s, i ? s % h != 0 && (m = 0) : m = s - p), !i && $ + p >= s && (m = s - p), v = _(a(a({}, e), {}, {
                slideIndex: $
            })), S = _(a(a({}, e), {}, {
                slideIndex: m
            })), i || (v === S && ($ = m), v = S), d && (b = b.concat(l(a(a({}, e), {}, {
                currentSlide: $
            })))), g ? (T = {
                animating: !0,
                currentSlide: m,
                trackStyle: D(a(a({}, e), {}, {
                    left: v
                })),
                lazyLoadedList: b,
                targetSlide: P
            }, w = {
                animating: !1,
                currentSlide: m,
                trackStyle: I(a(a({}, e), {}, {
                    left: S
                })),
                swipeLeft: null,
                targetSlide: P
            }) : T = {
                currentSlide: m,
                trackStyle: I(a(a({}, e), {}, {
                    left: S
                })),
                lazyLoadedList: b,
                targetSlide: P
            };
            return {
                state: T,
                nextState: w
            }
        };
        t.slideHandler = T;
        var w = function(e, t) {
            var n, r, i, o, s = e.slidesToScroll,
                u = e.slidesToShow,
                d = e.slideCount,
                l = e.currentSlide,
                c = e.targetSlide,
                f = e.lazyLoad,
                h = e.infinite;
            if (n = d % s != 0 ? 0 : (d - l) % s, "previous" === t.message) o = l - (i = 0 === n ? s : u - n), f && !h && (o = -1 == (r = l - i) ? d - 1 : r), h || (o = c - s);
            else if ("next" === t.message) o = l + (i = 0 === n ? s : n), f && !h && (o = (l + s) % d + n), h || (o = c + s);
            else if ("dots" === t.message) o = t.index * t.slidesToScroll;
            else if ("children" === t.message) {
                if (o = t.index, h) {
                    var p = L(a(a({}, e), {}, {
                        targetSlide: o
                    }));
                    o > t.currentSlide && "left" === p ? o -= d : o < t.currentSlide && "right" === p && (o += d)
                }
            } else "index" === t.message && (o = Number(t.index));
            return o
        };
        t.changeSlide = w;
        var P = function(e, t, n) {
            return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !t ? "" : 37 === e.keyCode ? n ? "next" : "previous" : 39 === e.keyCode ? n ? "previous" : "next" : ""
        };
        t.keyHandler = P;
        var A = function(e, t, n) {
            return ("IMG" === e.target.tagName && d(e), t && (n || -1 === e.type.indexOf("mouse"))) ? {
                dragging: !0,
                touchObject: {
                    startX: e.touches ? e.touches[0].pageX : e.clientX,
                    startY: e.touches ? e.touches[0].pageY : e.clientY,
                    curX: e.touches ? e.touches[0].pageX : e.clientX,
                    curY: e.touches ? e.touches[0].pageY : e.clientY
                }
            } : ""
        };
        t.swipeStart = A;
        var M = function(e, t) {
            var n = t.scrolling,
                r = t.animating,
                i = t.vertical,
                o = t.swipeToSlide,
                s = t.verticalSwiping,
                u = t.rtl,
                l = t.currentSlide,
                c = t.edgeFriction,
                f = t.edgeDragged,
                h = t.onEdge,
                p = t.swiped,
                g = t.swiping,
                b = t.slideCount,
                m = t.slidesToScroll,
                S = t.infinite,
                $ = t.touchObject,
                T = t.swipeEvent,
                w = t.listHeight,
                P = t.listWidth;
            if (!n) {
                if (r) return d(e);
                i && o && s && d(e);
                var A, M = {},
                    C = _(t);
                $.curX = e.touches ? e.touches[0].pageX : e.clientX, $.curY = e.touches ? e.touches[0].pageY : e.clientY, $.swipeLength = Math.round(Math.sqrt(Math.pow($.curX - $.startX, 2)));
                var O = Math.round(Math.sqrt(Math.pow($.curY - $.startY, 2)));
                if (!s && !g && O > 10) return {
                    scrolling: !0
                };
                s && ($.swipeLength = O);
                var E = (u ? -1 : 1) * ($.curX > $.startX ? 1 : -1);
                s && (E = $.curY > $.startY ? 1 : -1);
                var x = Math.ceil(b / m),
                    B = v(t.touchObject, s),
                    D = $.swipeLength;
                return !S && (0 === l && ("right" === B || "down" === B) || l + 1 >= x && ("left" === B || "up" === B) || !y(t) && ("left" === B || "up" === B)) && (D = $.swipeLength * c, !1 === f && h && (h(B), M.edgeDragged = !0)), !p && T && (T(B), M.swiped = !0), A = i ? C + w / P * D * E : u ? C - D * E : C + D * E, s && (A = C + D * E), M = a(a({}, M), {}, {
                    touchObject: $,
                    swipeLeft: A,
                    trackStyle: I(a(a({}, t), {}, {
                        left: A
                    }))
                }), Math.abs($.curX - $.startX) < .8 * Math.abs($.curY - $.startY) || $.swipeLength > 10 && (M.swiping = !0, d(e)), M
            }
        };
        t.swipeMove = M;
        var C = function(e, t) {
            var n = t.dragging,
                r = t.swipe,
                i = t.touchObject,
                o = t.listWidth,
                s = t.touchThreshold,
                u = t.verticalSwiping,
                l = t.listHeight,
                c = t.swipeToSlide,
                f = t.scrolling,
                h = t.onSwipe,
                p = t.targetSlide,
                g = t.currentSlide,
                b = t.infinite;
            if (!n) return r && d(e), {};
            var m = u ? l / s : o / s,
                y = v(i, u),
                S = {
                    dragging: !1,
                    edgeDragged: !1,
                    scrolling: !1,
                    swiping: !1,
                    swiped: !1,
                    swipeLeft: null,
                    touchObject: {}
                };
            if (f || !i.swipeLength) return S;
            if (i.swipeLength > m) {
                d(e), h && h(y);
                var $, T, w = b ? g : p;
                switch (y) {
                    case "left":
                    case "up":
                        T = w + x(t), $ = c ? E(t, T) : T, S.currentDirection = 0;
                        break;
                    case "right":
                    case "down":
                        T = w - x(t), $ = c ? E(t, T) : T, S.currentDirection = 1;
                        break;
                    default:
                        $ = w
                }
                S.triggerSlideHandler = $
            } else {
                var P = _(t);
                S.trackStyle = D(a(a({}, t), {}, {
                    left: P
                }))
            }
            return S
        };
        t.swipeEnd = C;
        var O = function(e) {
            for (var t = e.infinite ? 2 * e.slideCount : e.slideCount, n = e.infinite ? -1 * e.slidesToShow : 0, r = e.infinite ? -1 * e.slidesToShow : 0, i = []; n < t;) i.push(n), n = r + e.slidesToScroll, r += Math.min(e.slidesToScroll, e.slidesToShow);
            return i
        };
        t.getNavigableIndexes = O;
        var E = function(e, t) {
            var n = O(e),
                r = 0;
            if (t > n[n.length - 1]) t = n[n.length - 1];
            else
                for (var i in n) {
                    if (t < n[i]) {
                        t = r;
                        break
                    }
                    r = n[i]
                }
            return t
        };
        t.checkNavigable = E;
        var x = function(e) {
            var t = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
            if (!e.swipeToSlide) return e.slidesToScroll;
            var n, r = e.listRef;
            if (Array.from(r.querySelectorAll && r.querySelectorAll(".slick-slide") || []).every(function(r) {
                    if (e.vertical) {
                        if (r.offsetTop + m(r) / 2 > -1 * e.swipeLeft) return n = r, !1
                    } else if (r.offsetLeft - t + b(r) / 2 > -1 * e.swipeLeft) return n = r, !1;
                    return !0
                }), !n) return 0;
            var i = !0 === e.rtl ? e.slideCount - e.currentSlide : e.currentSlide;
            return Math.abs(n.dataset.index - i) || 1
        };
        t.getSlideCount = x;
        var B = function(e, t) {
            return t.reduce(function(t, n) {
                return t && e.hasOwnProperty(n)
            }, !0) ? null : console.error("Keys Missing:", e)
        };
        t.checkSpecKeys = B;
        var I = function(e) {
            B(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
            var t, n, r = e.slideCount + 2 * e.slidesToShow;
            e.vertical ? n = r * e.slideHeight : t = N(e) * e.slideWidth;
            var i = {
                opacity: 1,
                transition: "",
                WebkitTransition: ""
            };
            if (e.useTransform) {
                var o = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
                    s = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
                    u = e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)";
                i = a(a({}, i), {}, {
                    WebkitTransform: o,
                    transform: s,
                    msTransform: u
                })
            } else e.vertical ? i.top = e.left : i.left = e.left;
            return e.fade && (i = {
                opacity: 1
            }), t && (i.width = t), n && (i.height = n), window && !window.addEventListener && window.attachEvent && (e.vertical ? i.marginTop = e.left + "px" : i.marginLeft = e.left + "px"), i
        };
        t.getTrackCSS = I;
        var D = function(e) {
            B(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
            var t = I(e);
            return e.useTransform ? (t.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, t.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? t.transition = "top " + e.speed + "ms " + e.cssEase : t.transition = "left " + e.speed + "ms " + e.cssEase, t
        };
        t.getTrackAnimateCSS = D;
        var _ = function(e) {
            if (e.unslick) return 0;
            B(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
            var t = e.slideIndex,
                n = e.trackRef,
                r = e.infinite,
                i = e.centerMode,
                o = e.slideCount,
                a = e.slidesToShow,
                s = e.slidesToScroll,
                u = e.slideWidth,
                d = e.listWidth,
                l = e.variableWidth,
                c = e.slideHeight,
                f = e.fade,
                h = e.vertical,
                p = 0,
                g = 0;
            if (f || 1 === e.slideCount) return 0;
            var b = 0;
            if (r ? (b = -k(e), o % s != 0 && t + s > o && (b = -(t > o ? a - (t - o) : o % s)), i && (b += parseInt(a / 2))) : (o % s != 0 && t + s > o && (b = a - o % s), i && (b = parseInt(a / 2))), p = b * u, g = b * c, m = h ? -(t * c * 1) + g : -(t * u * 1) + p, !0 === l) {
                var m, v, y, S = n && n.node;
                if (y = t + k(e), m = (v = S && S.childNodes[y]) ? -1 * v.offsetLeft : 0, !0 === i) {
                    y = r ? t + k(e) : t, v = S && S.children[y], m = 0;
                    for (var $ = 0; $ < y; $++) m -= S && S.children[$] && S.children[$].offsetWidth;
                    m -= parseInt(e.centerPadding), m += v && (d - v.offsetWidth) / 2
                }
            }
            return m
        };
        t.getTrackLeft = _;
        var k = function(e) {
            return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + +!!e.centerMode
        };
        t.getPreClones = k;
        var G = function(e) {
            return e.unslick || !e.infinite ? 0 : e.slideCount
        };
        t.getPostClones = G;
        var N = function(e) {
            return 1 === e.slideCount ? 1 : k(e) + e.slideCount + G(e)
        };
        t.getTotalSlides = N;
        var L = function(e) {
            return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + R(e) ? "left" : "right" : e.targetSlide < e.currentSlide - H(e) ? "right" : "left"
        };
        t.siblingDirection = L;
        var R = function(e) {
            var t = e.slidesToShow,
                n = e.centerMode,
                r = e.rtl,
                i = e.centerPadding;
            if (n) {
                var o = (t - 1) / 2 + 1;
                return parseInt(i) > 0 && (o += 1), r && t % 2 == 0 && (o += 1), o
            }
            return r ? 0 : t - 1
        };
        t.slidesOnRight = R;
        var H = function(e) {
            var t = e.slidesToShow,
                n = e.centerMode,
                r = e.rtl,
                i = e.centerPadding;
            if (n) {
                var o = (t - 1) / 2 + 1;
                return parseInt(i) > 0 && (o += 1), r || t % 2 != 0 || (o += 1), o
            }
            return r ? t - 1 : 0
        };
        t.slidesOnLeft = H;
        var j = function() {
            return !!("undefined" != typeof window && window.document && window.document.createElement)
        };
        t.canUseDOM = j
    },
    1033: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                if ("undefined" != typeof Map) return Map;

                function e(e, t) {
                    var n = -1;
                    return e.some(function(e, r) {
                        return e[0] === t && (n = r, !0)
                    }), n
                }
                return function() {
                    function t() {
                        this.__entries__ = []
                    }
                    return Object.defineProperty(t.prototype, "size", {
                        get: function() {
                            return this.__entries__.length
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.get = function(t) {
                        var n = e(this.__entries__, t),
                            r = this.__entries__[n];
                        return r && r[1]
                    }, t.prototype.set = function(t, n) {
                        var r = e(this.__entries__, t);
                        ~r ? this.__entries__[r][1] = n : this.__entries__.push([t, n])
                    }, t.prototype.delete = function(t) {
                        var n = this.__entries__,
                            r = e(n, t);
                        ~r && n.splice(r, 1)
                    }, t.prototype.has = function(t) {
                        return !!~e(this.__entries__, t)
                    }, t.prototype.clear = function() {
                        this.__entries__.splice(0)
                    }, t.prototype.forEach = function(e, t) {
                        void 0 === t && (t = null);
                        for (var n = 0, r = this.__entries__; n < r.length; n++) {
                            var i = r[n];
                            e.call(t, i[1], i[0])
                        }
                    }, t
                }()
            }(),
            i = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
            o = function() {
                return void 0 !== n.g && n.g.Math === Math ? n.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")()
            }(),
            a = function() {
                return "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(o) : function(e) {
                    return setTimeout(function() {
                        return e(Date.now())
                    }, 1e3 / 60)
                }
            }(),
            s = 2;

        function u(e, t) {
            var n = !1,
                r = !1,
                i = 0;

            function o() {
                n && (n = !1, e()), r && d()
            }

            function u() {
                a(o)
            }

            function d() {
                var e = Date.now();
                if (n) {
                    if (e - i < s) return;
                    r = !0
                } else n = !0, r = !1, setTimeout(u, t);
                i = e
            }
            return d
        }
        var d = 20,
            l = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
            c = "undefined" != typeof MutationObserver,
            f = function() {
                function e() {
                    this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = u(this.refresh.bind(this), d)
                }
                return e.prototype.addObserver = function(e) {
                    ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
                }, e.prototype.removeObserver = function(e) {
                    var t = this.observers_,
                        n = t.indexOf(e);
                    ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
                }, e.prototype.refresh = function() {
                    this.updateObservers_() && this.refresh()
                }, e.prototype.updateObservers_ = function() {
                    var e = this.observers_.filter(function(e) {
                        return e.gatherActive(), e.hasActive()
                    });
                    return e.forEach(function(e) {
                        return e.broadcastActive()
                    }), e.length > 0
                }, e.prototype.connect_ = function() {
                    i && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), c ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                }, e.prototype.disconnect_ = function() {
                    i && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                }, e.prototype.onTransitionEnd_ = function(e) {
                    var t = e.propertyName,
                        n = void 0 === t ? "" : t;
                    l.some(function(e) {
                        return !!~n.indexOf(e)
                    }) && this.refresh()
                }, e.getInstance = function() {
                    return this.instance_ || (this.instance_ = new e), this.instance_
                }, e.instance_ = null, e
            }(),
            h = function(e, t) {
                for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                    var i = r[n];
                    Object.defineProperty(e, i, {
                        value: t[i],
                        enumerable: !1,
                        writable: !1,
                        configurable: !0
                    })
                }
                return e
            },
            p = function(e) {
                return e && e.ownerDocument && e.ownerDocument.defaultView || o
            },
            g = A(0, 0, 0, 0);

        function b(e) {
            return parseFloat(e) || 0
        }

        function m(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            return t.reduce(function(t, n) {
                return t + b(e["border-" + n + "-width"])
            }, 0)
        }

        function v(e) {
            for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, i = t; r < i.length; r++) {
                var o = i[r],
                    a = e["padding-" + o];
                n[o] = b(a)
            }
            return n
        }

        function y(e) {
            var t = e.getBBox();
            return A(0, 0, t.width, t.height)
        }

        function S(e) {
            var t = e.clientWidth,
                n = e.clientHeight;
            if (!t && !n) return g;
            var r = p(e).getComputedStyle(e),
                i = v(r),
                o = i.left + i.right,
                a = i.top + i.bottom,
                s = b(r.width),
                u = b(r.height);
            if ("border-box" === r.boxSizing && (Math.round(s + o) !== t && (s -= m(r, "left", "right") + o), Math.round(u + a) !== n && (u -= m(r, "top", "bottom") + a)), !T(e)) {
                var d = Math.round(s + o) - t,
                    l = Math.round(u + a) - n;
                1 !== Math.abs(d) && (s -= d), 1 !== Math.abs(l) && (u -= l)
            }
            return A(i.left, i.top, s, u)
        }
        var $ = function() {
            return "undefined" != typeof SVGGraphicsElement ? function(e) {
                return e instanceof p(e).SVGGraphicsElement
            } : function(e) {
                return e instanceof p(e).SVGElement && "function" == typeof e.getBBox
            }
        }();

        function T(e) {
            return e === p(e).document.documentElement
        }

        function w(e) {
            return i ? $(e) ? y(e) : S(e) : g
        }

        function P(e) {
            var t = e.x,
                n = e.y,
                r = e.width,
                i = e.height,
                o = Object.create(("undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object).prototype);
            return h(o, {
                x: t,
                y: n,
                width: r,
                height: i,
                top: n,
                right: t + r,
                bottom: i + n,
                left: t
            }), o
        }

        function A(e, t, n, r) {
            return {
                x: e,
                y: t,
                width: n,
                height: r
            }
        }
        var M = function() {
                function e(e) {
                    this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = A(0, 0, 0, 0), this.target = e
                }
                return e.prototype.isActive = function() {
                    var e = w(this.target);
                    return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                }, e.prototype.broadcastRect = function() {
                    var e = this.contentRect_;
                    return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
                }, e
            }(),
            C = function() {
                return function(e, t) {
                    h(this, {
                        target: e,
                        contentRect: P(t)
                    })
                }
            }(),
            O = function() {
                function e(e, t, n) {
                    if (this.activeObservations_ = [], this.observations_ = new r, "function" != typeof e) throw TypeError("The callback provided as parameter 1 is not a function.");
                    this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
                }
                return e.prototype.observe = function(e) {
                    if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
                    if ("undefined" != typeof Element && Element instanceof Object) {
                        if (!(e instanceof p(e).Element)) throw TypeError('parameter 1 is not of type "Element".');
                        var t = this.observations_;
                        !t.has(e) && (t.set(e, new M(e)), this.controller_.addObserver(this), this.controller_.refresh())
                    }
                }, e.prototype.unobserve = function(e) {
                    if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
                    if ("undefined" != typeof Element && Element instanceof Object) {
                        if (!(e instanceof p(e).Element)) throw TypeError('parameter 1 is not of type "Element".');
                        var t = this.observations_;
                        t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
                    }
                }, e.prototype.disconnect = function() {
                    this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                }, e.prototype.gatherActive = function() {
                    var e = this;
                    this.clearActive(), this.observations_.forEach(function(t) {
                        t.isActive() && e.activeObservations_.push(t)
                    })
                }, e.prototype.broadcastActive = function() {
                    if (this.hasActive()) {
                        var e = this.callbackCtx_,
                            t = this.activeObservations_.map(function(e) {
                                return new C(e.target, e.broadcastRect())
                            });
                        this.callback_.call(e, t, e), this.clearActive()
                    }
                }, e.prototype.clearActive = function() {
                    this.activeObservations_.splice(0)
                }, e.prototype.hasActive = function() {
                    return this.activeObservations_.length > 0
                }, e
            }(),
            E = "undefined" != typeof WeakMap ? new WeakMap : new r,
            x = function() {
                function e(t) {
                    if (!(this instanceof e)) throw TypeError("Cannot call a class as a function.");
                    if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
                    var n = new O(t, f.getInstance(), this);
                    E.set(this, n)
                }
                return e
            }();
        ["observe", "unobserve", "disconnect"].forEach(function(e) {
            x.prototype[e] = function() {
                var t;
                return (t = E.get(this))[e].apply(t, arguments)
            }
        });
        var B = function() {
            return void 0 !== o.ResizeObserver ? o.ResizeObserver : x
        }();
        t.default = B
    },
    8273: function(e, t) {
        "use strict";

        function n(e) {
            return "/" === e.charAt(0)
        }

        function r(e, t) {
            for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1) e[n] = e[r];
            e.pop()
        }

        function i(e, t) {
            void 0 === t && (t = "");
            var i, o = e && e.split("/") || [],
                a = t && t.split("/") || [],
                s = e && n(e),
                u = t && n(t),
                d = s || u;
            if (e && n(e) ? a = o : o.length && (a.pop(), a = a.concat(o)), !a.length) return "/";
            if (a.length) {
                var l = a[a.length - 1];
                i = "." === l || ".." === l || "" === l
            } else i = !1;
            for (var c = 0, f = a.length; f >= 0; f--) {
                var h = a[f];
                "." === h ? r(a, f) : ".." === h ? (r(a, f), c++) : c && (r(a, f), c--)
            }
            if (!d)
                for (; c--; c) a.unshift("..");
            !d || "" === a[0] || a[0] && n(a[0]) || a.unshift("");
            var p = a.join("/");
            return i && "/" !== p.substr(-1) && (p += "/"), p
        }
        t.Z = i
    },
    1169: function(e) {
        var t = function(e) {
            return e.replace(/[A-Z]/g, function(e) {
                return "-" + e.toLowerCase()
            }).toLowerCase()
        };
        e.exports = t
    },
    1742: function(e) {
        e.exports = function() {
            var e = document.getSelection();
            if (!e.rangeCount) return function() {};
            for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) n.push(e.getRangeAt(r));
            switch (t.tagName.toUpperCase()) {
                case "INPUT":
                case "TEXTAREA":
                    t.blur();
                    break;
                default:
                    t = null
            }
            return e.removeAllRanges(),
                function() {
                    "Caret" === e.type && e.removeAllRanges(), e.rangeCount || n.forEach(function(t) {
                        e.addRange(t)
                    }), t && t.focus()
                }
        }
    },
    5429: function(e, t) {
        "use strict";

        function n(e) {
            return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e)
        }

        function r(e, t) {
            if (e === t) return !0;
            if (null == e || null == t) return !1;
            if (Array.isArray(e)) return Array.isArray(t) && e.length === t.length && e.every(function(e, n) {
                return r(e, t[n])
            });
            if ("object" == typeof e || "object" == typeof t) {
                var i = n(e),
                    o = n(t);
                return i !== e || o !== t ? r(i, o) : Object.keys(Object.assign({}, e, t)).every(function(n) {
                    return r(e[n], t[n])
                })
            }
            return !1
        }
        t.Z = r
    },
    3876: function(e, t, n) {
        e.exports = n(6253)
    },
    9661: function(e, t, n) {
        e = n.nmd(e),
            function(t) {
                var n = -1,
                    r = {
                        onVisible: function(e) {
                            var t = r.isSupported();
                            if (!t || !r.hidden()) return e(), t;
                            var n = r.change(function(t, i) {
                                r.hidden() || (r.unbind(n), e())
                            });
                            return n
                        },
                        change: function(e) {
                            if (!r.isSupported()) return !1;
                            var t = n += 1;
                            return r._callbacks[t] = e, r._listen(), t
                        },
                        unbind: function(e) {
                            delete r._callbacks[e]
                        },
                        afterPrerendering: function(e) {
                            var t = r.isSupported(),
                                n = "prerender";
                            if (!t || n != r.state()) return e(), t;
                            var i = r.change(function(t, o) {
                                n != o && (r.unbind(i), e())
                            });
                            return i
                        },
                        hidden: function() {
                            return !!(r._doc.hidden || r._doc.webkitHidden)
                        },
                        state: function() {
                            return r._doc.visibilityState || r._doc.webkitVisibilityState || "visible"
                        },
                        isSupported: function() {
                            return void 0 !== r._doc.hidden || void 0 !== r._doc.webkitHidden
                        },
                        _doc: document || {},
                        _callbacks: {},
                        _change: function(e) {
                            var t = r.state();
                            for (var n in r._callbacks) r._callbacks[n].call(r._doc, e, t)
                        },
                        _listen: function() {
                            if (!r._init) {
                                var e = "visibilitychange";
                                r._doc.webkitVisibilityState && (e = "webkit" + e);
                                var t = function() {
                                    r._change.apply(r, arguments)
                                };
                                r._doc.addEventListener ? r._doc.addEventListener(e, t) : r._doc.attachEvent(e, t), r._init = !0
                            }
                        }
                    };
                void 0 !== e && e.exports ? e.exports = r : t.Visibility = r
            }(this)
    },
    6253: function(e, t, n) {
        e = n.nmd(e),
            function(t) {
                var r = -1,
                    i = function(e) {
                        return e.every = function(t, n, i) {
                            e._time(), i || (i = n, n = null);
                            var o = r += 1;
                            return e._timers[o] = {
                                visible: t,
                                hidden: n,
                                callback: i
                            }, e._run(o, !1), e.isSupported() && e._listen(), o
                        }, e.stop = function(t) {
                            return !!e._timers[t] && (e._stop(t), delete e._timers[t], !0)
                        }, e._timers = {}, e._time = function() {
                            !e._timed && (e._timed = !0, e._wasHidden = e.hidden(), e.change(function() {
                                e._stopRun(), e._wasHidden = e.hidden()
                            }))
                        }, e._run = function(n, r) {
                            var i, o = e._timers[n];
                            if (e.hidden()) {
                                if (null === o.hidden) return;
                                i = o.hidden
                            } else i = o.visible;
                            var a = function() {
                                o.last = new Date, o.callback.call(t)
                            };
                            if (r) {
                                var s = new Date - o.last;
                                i > s ? o.delay = setTimeout(function() {
                                    o.id = setInterval(a, i), a()
                                }, i - s) : (o.id = setInterval(a, i), a())
                            } else o.id = setInterval(a, i)
                        }, e._stop = function(t) {
                            var n = e._timers[t];
                            clearInterval(n.id), clearTimeout(n.delay), delete n.id, delete n.delay
                        }, e._stopRun = function(t) {
                            var n = e.hidden(),
                                r = e._wasHidden;
                            if (n && !r || !n && r)
                                for (var i in e._timers) e._stop(i), e._run(i, !n)
                        }, e
                    };
                void 0 !== e && e.exports ? e.exports = i(n(9661)) : i(t.Visibility || n(9661))
            }(window)
    },
    2473: function(e) {
        "use strict";
        var t = function() {};
        e.exports = t
    },
    3387: function(e) {
        ! function() {
            "use strict";
            var t = {}.hasOwnProperty;

            function n() {
                for (var e = "", t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    n && (e = i(e, r(n)))
                }
                return e
            }

            function r(e) {
                if ("string" == typeof e || "number" == typeof e) return e;
                if ("object" != typeof e) return "";
                if (Array.isArray(e)) return n.apply(null, e);
                if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                var r = "";
                for (var o in e) t.call(e, o) && e[o] && (r = i(r, o));
                return r
            }

            function i(e, t) {
                return t ? e ? e + " " + t : e + t : e
            }
            e.exports ? (n.default = n, e.exports = n) : "function" == typeof define && "object" == typeof define.amd && define.amd ? define("classnames", [], function() {
                return n
            }) : window.classNames = n
        }()
    },
    6019: function(e, t, n) {
        "use strict";

        function r() {
            return (r = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(null, arguments)
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    6159: function(e, t, n) {
        "use strict";
        n.d(t, {
            KN: function() {
                return x
            },
            qX: function() {
                return P
            },
            Mq: function() {
                return E
            },
            ZF: function() {
                return O
            },
            Xd: function() {
                return w
            }
        });
        var r, i = n(9337);
        let o = [];
        ! function(e) {
            e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT"
        }(r || (r = {}));
        let a = {
                debug: r.DEBUG,
                verbose: r.VERBOSE,
                info: r.INFO,
                warn: r.WARN,
                error: r.ERROR,
                silent: r.SILENT
            },
            s = r.INFO,
            u = {
                [r.DEBUG]: "log",
                [r.VERBOSE]: "log",
                [r.INFO]: "info",
                [r.WARN]: "warn",
                [r.ERROR]: "error"
            },
            d = (e, t, ...n) => {
                if (t < e.logLevel) return;
                let r = new Date().toISOString(),
                    i = u[t];
                if (i) console[i](`[${r}]  ${e.name}:`, ...n);
                else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)
            };
        class l {
            constructor(e) {
                this.name = e, this._logLevel = s, this._logHandler = d, this._userLogHandler = null, o.push(this)
            }
            get logLevel() {
                return this._logLevel
            }
            set logLevel(e) {
                if (!(e in r)) throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
                this._logLevel = e
            }
            setLogLevel(e) {
                this._logLevel = "string" == typeof e ? a[e] : e
            }
            get logHandler() {
                return this._logHandler
            }
            set logHandler(e) {
                if ("function" != typeof e) throw TypeError("Value assigned to `logHandler` must be a function");
                this._logHandler = e
            }
            get userLogHandler() {
                return this._userLogHandler
            }
            set userLogHandler(e) {
                this._userLogHandler = e
            }
            debug(...e) {
                this._userLogHandler && this._userLogHandler(this, r.DEBUG, ...e), this._logHandler(this, r.DEBUG, ...e)
            }
            log(...e) {
                this._userLogHandler && this._userLogHandler(this, r.VERBOSE, ...e), this._logHandler(this, r.VERBOSE, ...e)
            }
            info(...e) {
                this._userLogHandler && this._userLogHandler(this, r.INFO, ...e), this._logHandler(this, r.INFO, ...e)
            }
            warn(...e) {
                this._userLogHandler && this._userLogHandler(this, r.WARN, ...e), this._logHandler(this, r.WARN, ...e)
            }
            error(...e) {
                this._userLogHandler && this._userLogHandler(this, r.ERROR, ...e), this._logHandler(this, r.ERROR, ...e)
            }
        }
        var c = n(4444),
            f = n(4095);
        class h {
            constructor(e) {
                this.container = e
            }
            getPlatformInfoString() {
                return this.container.getProviders().map(e => {
                    if (!p(e)) return null; {
                        let t = e.getImmediate();
                        return `${t.library}/${t.version}`
                    }
                }).filter(e => e).join(" ")
            }
        }

        function p(e) {
            let t = e.getComponent();
            return (null == t ? void 0 : t.type) === "VERSION"
        }
        let g = "@firebase/app",
            b = "0.7.29",
            m = new l("@firebase/app"),
            v = "[DEFAULT]",
            y = {
                [g]: "fire-core",
                "@firebase/app-compat": "fire-core-compat",
                "@firebase/analytics": "fire-analytics",
                "@firebase/analytics-compat": "fire-analytics-compat",
                "@firebase/app-check": "fire-app-check",
                "@firebase/app-check-compat": "fire-app-check-compat",
                "@firebase/auth": "fire-auth",
                "@firebase/auth-compat": "fire-auth-compat",
                "@firebase/database": "fire-rtdb",
                "@firebase/database-compat": "fire-rtdb-compat",
                "@firebase/functions": "fire-fn",
                "@firebase/functions-compat": "fire-fn-compat",
                "@firebase/installations": "fire-iid",
                "@firebase/installations-compat": "fire-iid-compat",
                "@firebase/messaging": "fire-fcm",
                "@firebase/messaging-compat": "fire-fcm-compat",
                "@firebase/performance": "fire-perf",
                "@firebase/performance-compat": "fire-perf-compat",
                "@firebase/remote-config": "fire-rc",
                "@firebase/remote-config-compat": "fire-rc-compat",
                "@firebase/storage": "fire-gcs",
                "@firebase/storage-compat": "fire-gcs-compat",
                "@firebase/firestore": "fire-fst",
                "@firebase/firestore-compat": "fire-fst-compat",
                "fire-js": "fire-js",
                firebase: "fire-js-all"
            },
            S = new Map,
            $ = new Map;

        function T(e, t) {
            try {
                e.container.addComponent(t)
            } catch (n) {
                m.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n)
            }
        }

        function w(e) {
            let t = e.name;
            if ($.has(t)) return m.debug(`There were multiple attempts to register component ${t}.`), !1;
            for (let n of ($.set(t, e), S.values())) T(n, e);
            return !0
        }

        function P(e, t) {
            let n = e.container.getProvider("heartbeat").getImmediate({
                optional: !0
            });
            return n && n.triggerHeartbeat(), e.container.getProvider(t)
        }
        let A = {
                "no-app": "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
                "bad-app-name": "Illegal App name: '{$appName}",
                "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
                "app-deleted": "Firebase App named '{$appName}' already deleted",
                "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
                "invalid-log-argument": "First argument to `onLog` must be null or a function.",
                "storage-open": "Error thrown when opening storage. Original error: {$originalErrorMessage}.",
                "storage-get": "Error thrown when reading from storage. Original error: {$originalErrorMessage}.",
                "storage-set": "Error thrown when writing to storage. Original error: {$originalErrorMessage}.",
                "storage-delete": "Error thrown when deleting from storage. Original error: {$originalErrorMessage}."
            },
            M = new c.LL("app", "Firebase", A);
        class C {
            constructor(e, t, n) {
                this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, t), this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new i.wA("app", () => this, "PUBLIC"))
            }
            get automaticDataCollectionEnabled() {
                return this.checkDestroyed(), this._automaticDataCollectionEnabled
            }
            set automaticDataCollectionEnabled(e) {
                this.checkDestroyed(), this._automaticDataCollectionEnabled = e
            }
            get name() {
                return this.checkDestroyed(), this._name
            }
            get options() {
                return this.checkDestroyed(), this._options
            }
            get config() {
                return this.checkDestroyed(), this._config
            }
            get container() {
                return this._container
            }
            get isDeleted() {
                return this._isDeleted
            }
            set isDeleted(e) {
                this._isDeleted = e
            }
            checkDestroyed() {
                if (this.isDeleted) throw M.create("app-deleted", {
                    appName: this._name
                })
            }
        }

        function O(e, t = {}) {
            "object" != typeof t && (t = {
                name: t
            });
            let n = Object.assign({
                    name: v,
                    automaticDataCollectionEnabled: !1
                }, t),
                r = n.name;
            if ("string" != typeof r || !r) throw M.create("bad-app-name", {
                appName: String(r)
            });
            let o = S.get(r);
            if (o) {
                if ((0, c.vZ)(e, o.options) && (0, c.vZ)(n, o.config)) return o;
                throw M.create("duplicate-app", {
                    appName: r
                })
            }
            let a = new i.H0(r);
            for (let e of $.values()) a.addComponent(e);
            let s = new C(e, n, a);
            return S.set(r, s), s
        }

        function E(e = v) {
            let t = S.get(e);
            if (!t) throw M.create("no-app", {
                appName: e
            });
            return t
        }

        function x(e, t, n) {
            var r;
            let o = null !== (r = y[e]) && void 0 !== r ? r : e;
            n && (o += `-${n}`);
            let a = o.match(/\s|\//),
                s = t.match(/\s|\//);
            if (a || s) {
                let e = [`Unable to register library "${o}" with version "${t}":`];
                a && e.push(`library name "${o}" contains illegal characters (whitespace or "/")`), a && s && e.push("and"), s && e.push(`version name "${t}" contains illegal characters (whitespace or "/")`), m.warn(e.join(" "));
                return
            }
            w(new i.wA(`${o}-version`, () => ({
                library: o,
                version: t
            }), "VERSION"))
        }
        let B = "firebase-heartbeat-database",
            I = 1,
            D = "firebase-heartbeat-store",
            _ = null;

        function k() {
            return _ || (_ = (0, f.X3)(B, I, {
                upgrade: (e, t) => {
                    0 === t && e.createObjectStore(D)
                }
            }).catch(e => {
                throw M.create("storage-open", {
                    originalErrorMessage: e.message
                })
            })), _
        }
        async function G(e) {
            var t;
            try {
                return (await k()).transaction(D).objectStore(D).get(L(e))
            } catch (e) {
                throw M.create("storage-get", {
                    originalErrorMessage: null === (t = e) || void 0 === t ? void 0 : t.message
                })
            }
        }
        async function N(e, t) {
            var n;
            try {
                let n = (await k()).transaction(D, "readwrite"),
                    r = n.objectStore(D);
                return await r.put(t, L(e)), n.done
            } catch (e) {
                throw M.create("storage-set", {
                    originalErrorMessage: null === (n = e) || void 0 === n ? void 0 : n.message
                })
            }
        }

        function L(e) {
            return `${e.name}!${e.options.appId}`
        }
        let R = 1024,
            H = 2592e6;
        class j {
            constructor(e) {
                this.container = e, this._heartbeatsCache = null;
                let t = this.container.getProvider("app").getImmediate();
                this._storage = new U(t), this._heartbeatsCachePromise = this._storage.read().then(e => (this._heartbeatsCache = e, e))
            }
            async triggerHeartbeat() {
                let e = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
                    t = F();
                return (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate === t || this._heartbeatsCache.heartbeats.some(e => e.date === t)) ? void 0 : (this._heartbeatsCache.heartbeats.push({
                    date: t,
                    agent: e
                }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(e => {
                    let t = new Date(e.date).valueOf();
                    return Date.now() - t <= H
                }), this._storage.overwrite(this._heartbeatsCache))
            }
            async getHeartbeatsHeader() {
                if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, null === this._heartbeatsCache || 0 === this._heartbeatsCache.heartbeats.length) return "";
                let e = F(),
                    {
                        heartbeatsToSend: t,
                        unsentEntries: n
                    } = V(this._heartbeatsCache.heartbeats),
                    r = (0, c.L)(JSON.stringify({
                        version: 2,
                        heartbeats: t
                    }));
                return this._heartbeatsCache.lastSentHeartbeatDate = e, n.length > 0 ? (this._heartbeatsCache.heartbeats = n, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), r
            }
        }

        function F() {
            return new Date().toISOString().substring(0, 10)
        }

        function V(e, t = R) {
            let n = [],
                r = e.slice();
            for (let i of e) {
                let e = n.find(e => e.agent === i.agent);
                if (e) {
                    if (e.dates.push(i.date), W(n) > t) {
                        e.dates.pop();
                        break
                    }
                } else if (n.push({
                        agent: i.agent,
                        dates: [i.date]
                    }), W(n) > t) {
                    n.pop();
                    break
                }
                r = r.slice(1)
            }
            return {
                heartbeatsToSend: n,
                unsentEntries: r
            }
        }
        class U {
            constructor(e) {
                this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
            }
            async runIndexedDBEnvironmentCheck() {
                return !!(0, c.hl)() && (0, c.eu)().then(() => !0).catch(() => !1)
            }
            async read() {
                return await this._canUseIndexedDBPromise && await G(this.app) || {
                    heartbeats: []
                }
            }
            async overwrite(e) {
                var t;
                if (await this._canUseIndexedDBPromise) {
                    let n = await this.read();
                    return N(this.app, {
                        lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
                        heartbeats: e.heartbeats
                    })
                }
            }
            async add(e) {
                var t;
                if (await this._canUseIndexedDBPromise) {
                    let n = await this.read();
                    return N(this.app, {
                        lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
                        heartbeats: [...n.heartbeats, ...e.heartbeats]
                    })
                }
            }
        }

        function W(e) {
            return (0, c.L)(JSON.stringify({
                version: 2,
                heartbeats: e
            })).length
        }! function(e) {
            w(new i.wA("platform-logger", e => new h(e), "PRIVATE")), w(new i.wA("heartbeat", e => new j(e), "PRIVATE")), x(g, b, ""), x(g, b, "esm2017"), x("fire-js", "")
        }("")
    },
    9337: function(e, t, n) {
        "use strict";
        n.d(t, {
            H0: function() {
                return d
            },
            wA: function() {
                return i
            }
        });
        var r = n(4444);
        class i {
            constructor(e, t, n) {
                this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
            }
            setInstantiationMode(e) {
                return this.instantiationMode = e, this
            }
            setMultipleInstances(e) {
                return this.multipleInstances = e, this
            }
            setServiceProps(e) {
                return this.serviceProps = e, this
            }
            setInstanceCreatedCallback(e) {
                return this.onInstanceCreated = e, this
            }
        }
        let o = "[DEFAULT]";
        class a {
            constructor(e, t) {
                this.name = e, this.container = t, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
            }
            get(e) {
                let t = this.normalizeInstanceIdentifier(e);
                if (!this.instancesDeferred.has(t)) {
                    let e = new r.BH;
                    if (this.instancesDeferred.set(t, e), this.isInitialized(t) || this.shouldAutoInitialize()) try {
                        let n = this.getOrInitializeService({
                            instanceIdentifier: t
                        });
                        n && e.resolve(n)
                    } catch (e) {}
                }
                return this.instancesDeferred.get(t).promise
            }
            getImmediate(e) {
                var t;
                let n = this.normalizeInstanceIdentifier(null == e ? void 0 : e.identifier),
                    r = null !== (t = null == e ? void 0 : e.optional) && void 0 !== t && t;
                if (this.isInitialized(n) || this.shouldAutoInitialize()) try {
                    return this.getOrInitializeService({
                        instanceIdentifier: n
                    })
                } catch (e) {
                    if (r) return null;
                    throw e
                } else {
                    if (r) return null;
                    throw Error(`Service ${this.name} is not available`)
                }
            }
            getComponent() {
                return this.component
            }
            setComponent(e) {
                if (e.name !== this.name) throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
                if (this.component) throw Error(`Component for ${this.name} has already been provided`);
                if (this.component = e, this.shouldAutoInitialize()) {
                    if (u(e)) try {
                        this.getOrInitializeService({
                            instanceIdentifier: o
                        })
                    } catch (e) {}
                    for (let [e, t] of this.instancesDeferred.entries()) {
                        let n = this.normalizeInstanceIdentifier(e);
                        try {
                            let e = this.getOrInitializeService({
                                instanceIdentifier: n
                            });
                            t.resolve(e)
                        } catch (e) {}
                    }
                }
            }
            clearInstance(e = o) {
                this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
            }
            async delete() {
                let e = Array.from(this.instances.values());
                await Promise.all([...e.filter(e => "INTERNAL" in e).map(e => e.INTERNAL.delete()), ...e.filter(e => "_delete" in e).map(e => e._delete())])
            }
            isComponentSet() {
                return null != this.component
            }
            isInitialized(e = o) {
                return this.instances.has(e)
            }
            getOptions(e = o) {
                return this.instancesOptions.get(e) || {}
            }
            initialize(e = {}) {
                let {
                    options: t = {}
                } = e, n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
                if (this.isInitialized(n)) throw Error(`${this.name}(${n}) has already been initialized`);
                if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
                let r = this.getOrInitializeService({
                    instanceIdentifier: n,
                    options: t
                });
                for (let [e, t] of this.instancesDeferred.entries()) n === this.normalizeInstanceIdentifier(e) && t.resolve(r);
                return r
            }
            onInit(e, t) {
                var n;
                let r = this.normalizeInstanceIdentifier(t),
                    i = null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n ? n : new Set;
                i.add(e), this.onInitCallbacks.set(r, i);
                let o = this.instances.get(r);
                return o && e(o, r), () => {
                    i.delete(e)
                }
            }
            invokeOnInitCallbacks(e, t) {
                let n = this.onInitCallbacks.get(t);
                if (n)
                    for (let r of n) try {
                        r(e, t)
                    } catch (e) {}
            }
            getOrInitializeService({
                instanceIdentifier: e,
                options: t = {}
            }) {
                let n = this.instances.get(e);
                if (!n && this.component && (n = this.component.instanceFactory(this.container, {
                        instanceIdentifier: s(e),
                        options: t
                    }), this.instances.set(e, n), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(n, e), this.component.onInstanceCreated)) try {
                    this.component.onInstanceCreated(this.container, e, n)
                } catch (e) {}
                return n || null
            }
            normalizeInstanceIdentifier(e = o) {
                return this.component ? this.component.multipleInstances ? e : o : e
            }
            shouldAutoInitialize() {
                return !!this.component && "EXPLICIT" !== this.component.instantiationMode
            }
        }

        function s(e) {
            return e === o ? void 0 : e
        }

        function u(e) {
            return "EAGER" === e.instantiationMode
        }
        class d {
            constructor(e) {
                this.name = e, this.providers = new Map
            }
            addComponent(e) {
                let t = this.getProvider(e.name);
                if (t.isComponentSet()) throw Error(`Component ${e.name} has already been registered with ${this.name}`);
                t.setComponent(e)
            }
            addOrOverwriteComponent(e) {
                this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
            }
            getProvider(e) {
                if (this.providers.has(e)) return this.providers.get(e);
                let t = new a(e, this);
                return this.providers.set(e, t), t
            }
            getProviders() {
                return Array.from(this.providers.values())
            }
        }
    },
    7245: function(e, t, n) {
        "use strict";

        function r(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
            return r
        }
        n.d(t, {
            _: function() {
                return r
            }
        })
    },
    6150: function(e, t, n) {
        "use strict";

        function r(e, t, n, r, i, o, a) {
            try {
                var s = e[o](a),
                    u = s.value
            } catch (e) {
                n(e);
                return
            }
            s.done ? t(u) : Promise.resolve(u).then(r, i)
        }

        function i(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise(function(i, o) {
                    var a = e.apply(t, n);

                    function s(e) {
                        r(a, i, o, s, u, "next", e)
                    }

                    function u(e) {
                        r(a, i, o, s, u, "throw", e)
                    }
                    s(void 0)
                })
            }
        }
        n.d(t, {
            _: function() {
                return i
            }
        })
    },
    2969: function(e, t, n) {
        "use strict";
        n.d(t, {
            _: function() {
                return u
            }
        });
        var r = n(1344);

        function i() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch (e) {}
            return (i = function() {
                return !!e
            })()
        }

        function o(e) {
            if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        var a = n(9995);

        function s(e, t) {
            return t && ("object" === (0, a._)(t) || "function" == typeof t) ? t : o(e)
        }

        function u(e, t, n) {
            return t = (0, r._)(t), s(e, i() ? Reflect.construct(t, n || [], (0, r._)(e).constructor) : t.apply(e, n))
        }
    },
    3830: function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
        }
        n.d(t, {
            _: function() {
                return r
            }
        })
    },
    2062: function(e, t, n) {
        "use strict";

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function i(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }
        n.d(t, {
            _: function() {
                return i
            }
        })
    },
    7412: function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        n.d(t, {
            _: function() {
                return r
            }
        })
    },
    4141: function(e, t, n) {
        "use strict";
        n.d(t, {
            _: function() {
                return o
            }
        });
        var r = n(1344);

        function i(e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = (0, r._)(e)););
            return e
        }

        function o(e, t, n) {
            return (o = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var r = i(e, t);
                if (r) {
                    var o = Object.getOwnPropertyDescriptor(r, t);
                    return o.get ? o.get.call(n || e) : o.value
                }
            })(e, t, n || e)
        }
    },
    1344: function(e, t, n) {
        "use strict";

        function r(e) {
            return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        n.d(t, {
            _: function() {
                return r
            }
        })
    },
    8028: function(e, t, n) {
        "use strict";

        function r(e, t) {
            return (r = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && r(e, t)
        }
        n.d(t, {
            _: function() {
                return i
            }
        })
    },
    7409: function(e, t, n) {
        "use strict";
        n.d(t, {
            _: function() {
                return i
            }
        });
        var r = n(7412);

        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), i.forEach(function(t) {
                    (0, r._)(e, t, n[t])
                })
            }
            return e
        }
    },
    9282: function(e, t, n) {
        "use strict";

        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }

        function i(e, t) {
            return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }), e
        }
        n.d(t, {
            _: function() {
                return i
            }
        })
    },
    4460: function(e, t, n) {
        "use strict";

        function r(e) {
            if (Array.isArray(e)) return e
        }

        function i(e, t) {
            var n, r, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != i) {
                var o = [],
                    a = !0,
                    s = !1;
                try {
                    for (i = i.call(e); !(a = (n = i.next()).done) && (o.push(n.value), !t || o.length !== t); a = !0);
                } catch (e) {
                    s = !0, r = e
                } finally {
                    try {
                        a || null == i.return || i.return()
                    } finally {
                        if (s) throw r
                    }
                }
                return o
            }
        }

        function o() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        n.d(t, {
            _: function() {
                return s
            }
        });
        var a = n(7501);

        function s(e, t) {
            return r(e) || i(e, t) || (0, a._)(e, t) || o()
        }
    },
    5210: function(e, t, n) {
        "use strict";
        n.d(t, {
            _: function() {
                return u
            }
        });
        var r = n(7245);

        function i(e) {
            if (Array.isArray(e)) return (0, r._)(e)
        }

        function o(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }

        function a() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var s = n(7501);

        function u(e) {
            return i(e) || o(e) || (0, s._)(e) || a()
        }
    },
    9995: function(e, t, n) {
        "use strict";

        function r(e) {
            return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
        }
        n.d(t, {
            _: function() {
                return r
            }
        })
    },
    7501: function(e, t, n) {
        "use strict";
        n.d(t, {
            _: function() {
                return i
            }
        });
        var r = n(7245);

        function i(e, t) {
            if (e) {
                if ("string" == typeof e) return (0, r._)(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, r._)(e, t)
            }
        }
    },
    5672: function(e, t) {
        "use strict";
        var n = {};
        ! function e(t, n, r, i) {
            var o, a = !!(t.Worker && t.Blob && t.Promise && t.OffscreenCanvas && t.OffscreenCanvasRenderingContext2D && t.HTMLCanvasElement && t.HTMLCanvasElement.prototype.transferControlToOffscreen && t.URL && t.URL.createObjectURL),
                s = "function" == typeof Path2D && "function" == typeof DOMMatrix;

            function u() {}

            function d(e) {
                var r = n.exports.Promise,
                    i = void 0 !== r ? r : t.Promise;
                return "function" == typeof i ? new i(e) : (e(u, u), null)
            }
            var l = function(e, t) {
                    return {
                        transform: function(n) {
                            if (e) return n;
                            if (t.has(n)) return t.get(n);
                            var r = new OffscreenCanvas(n.width, n.height);
                            return r.getContext("2d").drawImage(n, 0, 0), t.set(n, r), r
                        },
                        clear: function() {
                            t.clear()
                        }
                    }
                }(function() {
                    if (!t.OffscreenCanvas) return !1;
                    var e = new OffscreenCanvas(1, 1),
                        n = e.getContext("2d");
                    n.fillRect(0, 0, 1, 1);
                    var r = e.transferToImageBitmap();
                    try {
                        n.createPattern(r, "no-repeat")
                    } catch (e) {
                        return !1
                    }
                    return !0
                }(), new Map),
                c = function() {
                    var e, t, n = Math.floor(1e3 / 60),
                        r = {},
                        i = 0;
                    return "function" == typeof requestAnimationFrame && "function" == typeof cancelAnimationFrame ? (e = function(e) {
                        var t = Math.random();
                        return r[t] = requestAnimationFrame(function o(a) {
                            i === a || i + n - 1 < a ? (i = a, delete r[t], e()) : r[t] = requestAnimationFrame(o)
                        }), t
                    }, t = function(e) {
                        r[e] && cancelAnimationFrame(r[e])
                    }) : (e = function(e) {
                        return setTimeout(e, n)
                    }, t = function(e) {
                        return clearTimeout(e)
                    }), {
                        frame: e,
                        cancel: t
                    }
                }(),
                f = function() {
                    var t, n, i = {};

                    function o(e) {
                        function t(t, n) {
                            e.postMessage({
                                options: t || {},
                                callback: n
                            })
                        }
                        e.init = function(t) {
                            var n = t.transferControlToOffscreen();
                            e.postMessage({
                                canvas: n
                            }, [n])
                        }, e.fire = function(r, o, a) {
                            if (n) return t(r, null), n;
                            var s = Math.random().toString(36).slice(2);
                            return n = d(function(o) {
                                function u(t) {
                                    t.data.callback === s && (delete i[s], e.removeEventListener("message", u), n = null, l.clear(), a(), o())
                                }
                                e.addEventListener("message", u), t(r, s), i[s] = u.bind(null, {
                                    data: {
                                        callback: s
                                    }
                                })
                            })
                        }, e.reset = function() {
                            for (var t in e.postMessage({
                                    reset: !0
                                }), i) i[t](), delete i[t]
                        }
                    }
                    return function() {
                        if (t) return t;
                        if (!r && a) {
                            var n = ["var CONFETTI, SIZE = {}, module = {};", "(" + e.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI && CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join("\n");
                            try {
                                t = new Worker(URL.createObjectURL(new Blob([n])))
                            } catch (e) {
                                return "function" == typeof console.warn && console.warn("\uD83C\uDF8A Could not load worker", e), null
                            }
                            o(t)
                        }
                        return t
                    }
                }(),
                h = {
                    particleCount: 50,
                    angle: 90,
                    spread: 45,
                    startVelocity: 45,
                    decay: .9,
                    gravity: 1,
                    drift: 0,
                    ticks: 200,
                    x: .5,
                    y: .5,
                    shapes: ["square", "circle"],
                    zIndex: 100,
                    colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"],
                    disableForReducedMotion: !1,
                    scalar: 1
                };

            function p(e, t) {
                return t ? t(e) : e
            }

            function g(e) {
                return null != e
            }

            function b(e, t, n) {
                return p(e && g(e[t]) ? e[t] : h[t], n)
            }

            function m(e) {
                return e < 0 ? 0 : Math.floor(e)
            }

            function v(e, t) {
                return Math.floor(Math.random() * (t - e)) + e
            }

            function y(e) {
                return parseInt(e, 16)
            }

            function S(e) {
                return e.map($)
            }

            function $(e) {
                var t = String(e).replace(/[^0-9a-f]/gi, "");
                return t.length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), {
                    r: y(t.substring(0, 2)),
                    g: y(t.substring(2, 4)),
                    b: y(t.substring(4, 6))
                }
            }

            function T(e) {
                var t = b(e, "origin", Object);
                return t.x = b(t, "x", Number), t.y = b(t, "y", Number), t
            }

            function w(e) {
                e.width = document.documentElement.clientWidth, e.height = document.documentElement.clientHeight
            }

            function P(e) {
                var t = e.getBoundingClientRect();
                e.width = t.width, e.height = t.height
            }

            function A(e) {
                var t = document.createElement("canvas");
                return t.style.position = "fixed", t.style.top = "0px", t.style.left = "0px", t.style.pointerEvents = "none", t.style.zIndex = e, t
            }

            function M(e, t, n, r, i, o, a, s, u) {
                e.save(), e.translate(t, n), e.rotate(o), e.scale(r, i), e.arc(0, 0, 1, a, s, u), e.restore()
            }

            function C(e) {
                var t = e.angle * (Math.PI / 180),
                    n = e.spread * (Math.PI / 180);
                return {
                    x: e.x,
                    y: e.y,
                    wobble: 10 * Math.random(),
                    wobbleSpeed: Math.min(.11, .1 * Math.random() + .05),
                    velocity: .5 * e.startVelocity + Math.random() * e.startVelocity,
                    angle2D: -t + (.5 * n - Math.random() * n),
                    tiltAngle: (.5 * Math.random() + .25) * Math.PI,
                    color: e.color,
                    shape: e.shape,
                    tick: 0,
                    totalTicks: e.ticks,
                    decay: e.decay,
                    drift: e.drift,
                    random: Math.random() + 2,
                    tiltSin: 0,
                    tiltCos: 0,
                    wobbleX: 0,
                    wobbleY: 0,
                    gravity: 3 * e.gravity,
                    ovalScalar: .6,
                    scalar: e.scalar,
                    flat: e.flat
                }
            }

            function O(e, t) {
                t.x += Math.cos(t.angle2D) * t.velocity + t.drift, t.y += Math.sin(t.angle2D) * t.velocity + t.gravity, t.velocity *= t.decay, t.flat ? (t.wobble = 0, t.wobbleX = t.x + 10 * t.scalar, t.wobbleY = t.y + 10 * t.scalar, t.tiltSin = 0, t.tiltCos = 0, t.random = 1) : (t.wobble += t.wobbleSpeed, t.wobbleX = t.x + 10 * t.scalar * Math.cos(t.wobble), t.wobbleY = t.y + 10 * t.scalar * Math.sin(t.wobble), t.tiltAngle += .1, t.tiltSin = Math.sin(t.tiltAngle), t.tiltCos = Math.cos(t.tiltAngle), t.random = Math.random() + 2);
                var n = t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,o=t.wobbleX+t.random*t.tiltCos,a=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),s&&"path"===t.shape.type&&"string"==typeof t.shape.path&&Array.isArray(t.shape.matrix))e.fill(I(t.shape.path,t.shape.matrix,t.x,t.y,.1*Math.abs(o-r),.1*Math.abs(a-i),Math.PI/
                10 * t.wobble));
        else if ("bitmap" === t.shape.type) {
            var u = Math.PI / 10 * t.wobble,
                d = .1 * Math.abs(o - r),
                c = .1 * Math.abs(a - i),
                f = t.shape.bitmap.width * t.scalar,
                h = t.shape.bitmap.height * t.scalar,
                p = new DOMMatrix([Math.cos(u) * d, Math.sin(u) * d, -Math.sin(u) * c, Math.cos(u) * c, t.x, t.y]);
            p.multiplySelf(new DOMMatrix(t.shape.matrix));
            var g = e.createPattern(l.transform(t.shape.bitmap), "no-repeat");
            g.setTransform(p), e.globalAlpha = 1 - n, e.fillStyle = g, e.fillRect(t.x - f / 2, t.y - h / 2, f, h), e.globalAlpha = 1
        } else if ("circle" === t.shape) e.ellipse ? e.ellipse(t.x, t.y, Math.abs(o - r) * t.ovalScalar, Math.abs(a - i) * t.ovalScalar, Math.PI / 10 * t.wobble, 0, 2 * Math.PI) : M(e, t.x, t.y, Math.abs(o - r) * t.ovalScalar, Math.abs(a - i) * t.ovalScalar, Math.PI / 10 * t.wobble, 0, 2 * Math.PI);
        else if ("star" === t.shape)
            for (var b = Math.PI / 2 * 3, m = 4 * t.scalar, v = 8 * t.scalar, y = t.x, S = t.y, $ = 5, T = Math.PI / 5; $--;) y = t.x + Math.cos(b) * v, S = t.y + Math.sin(b) * v, e.lineTo(y, S), b += T, y = t.x + Math.cos(b) * m, S = t.y + Math.sin(b) * m, e.lineTo(y, S), b += T;
        else e.moveTo(Math.floor(t.x), Math.floor(t.y)), e.lineTo(Math.floor(t.wobbleX), Math.floor(i)), e.lineTo(Math.floor(o), Math.floor(a)), e.lineTo(Math.floor(r), Math.floor(t.wobbleY));
        return e.closePath(), e.fill(), t.tick < t.totalTicks
    }

    function E(e, t, n, o, a) {
        var s, u, f = t.slice(),
            h = e.getContext("2d"),
            p = d(function(t) {
                function d() {
                    s = u = null, h.clearRect(0, 0, o.width, o.height), l.clear(), a(), t()
                }

                function p() {
                    r && (o.width !== i.width || o.height !== i.height) && (o.width = e.width = i.width, o.height = e.height = i.height), o.width || o.height || (n(e), o.width = e.width, o.height = e.height), h.clearRect(0, 0, o.width, o.height), (f = f.filter(function(e) {
                        return O(h, e)
                    })).length ? s = c.frame(p) : d()
                }
                s = c.frame(p), u = d
            });
        return {
            addFettis: function(e) {
                return f = f.concat(e), p
            },
            canvas: e,
            promise: p,
            reset: function() {
                s && c.cancel(s), u && u()
            }
        }
    }

    function x(e, n) {
        var r, i = !e,
            o = !!b(n || {}, "resize"),
            s = !1,
            u = b(n, "disableForReducedMotion", Boolean),
            l = a && b(n || {}, "useWorker") ? f() : null,
            c = i ? w : P,
            h = !!e && !!l && !!e.__confetti_initialized,
            p = "function" == typeof matchMedia && matchMedia("(prefers-reduced-motion)").matches;

        function g(t, n, i) {
            for (var o = b(t, "particleCount", m), a = b(t, "angle", Number), s = b(t, "spread", Number), u = b(t, "startVelocity", Number), d = b(t, "decay", Number), l = b(t, "gravity", Number), f = b(t, "drift", Number), h = b(t, "colors", S), p = b(t, "ticks", Number), g = b(t, "shapes"), y = b(t, "scalar"), $ = !!b(t, "flat"), w = T(t), P = o, A = [], M = e.width * w.x, O = e.height * w.y; P--;) A.push(C({
                x: M,
                y: O,
                angle: a,
                spread: s,
                startVelocity: u,
                color: h[P % h.length],
                shape: g[v(0, g.length)],
                ticks: p,
                decay: d,
                gravity: l,
                drift: f,
                scalar: y,
                flat: $
            }));
            return r ? r.addFettis(A) : (r = E(e, A, c, n, i)).promise
        }

        function y(n) {
            var a = u || b(n, "disableForReducedMotion", Boolean),
                f = b(n, "zIndex", Number);
            if (a && p) return d(function(e) {
                e()
            });
            i && r ? e = r.canvas : i && !e && (e = A(f), document.body.appendChild(e)), o && !h && c(e);
            var m = {
                width: e.width,
                height: e.height
            };

            function v() {
                if (l) {
                    var t = {
                        getBoundingClientRect: function() {
                            if (!i) return e.getBoundingClientRect()
                        }
                    };
                    c(t), l.postMessage({
                        resize: {
                            width: t.width,
                            height: t.height
                        }
                    });
                    return
                }
                m.width = m.height = null
            }

            function y() {
                r = null, o && (s = !1, t.removeEventListener("resize", v)), i && e && (document.body.contains(e) && document.body.removeChild(e), e = null, h = !1)
            }
            return (l && !h && l.init(e), h = !0, l && (e.__confetti_initialized = !0), o && !s && (s = !0, t.addEventListener("resize", v, !1)), l) ? l.fire(n, m, y) : g(n, m, y)
        }
        return y.reset = function() {
            l && l.reset(), r && r.reset()
        }, y
    }

    function B() {
        return o || (o = x(null, {
            useWorker: !0,
            resize: !0
        })), o
    }

    function I(e, t, n, r, i, o, a) {
        var s = new Path2D(e),
            u = new Path2D;
        u.addPath(s, new DOMMatrix(t));
        var d = new Path2D;
        return d.addPath(u, new DOMMatrix([Math.cos(a) * i, Math.sin(a) * i, -Math.sin(a) * o, Math.cos(a) * o, n, r])), d
    }

    function D(e) {
        if (!s) throw Error("path confetti are not supported in this browser");
        "string" == typeof e ? r = e : (r = e.path, i = e.matrix);
        var t = new Path2D(r),
            n = document.createElement("canvas").getContext("2d");
        if (!i) {
            for (var r, i, o, a, u = 1e3, d = 1e3, l = 1e3, c = 0, f = 0, h = 0; h < u; h += 2)
                for (var p = 0; p < u; p += 2) n.isPointInPath(t, h, p, "nonzero") && (d = Math.min(d, h), l = Math.min(l, p), c = Math.max(c, h), f = Math.max(f, p));
            var g = 10,
                b = Math.min(10 / (o = c - d), g / (a = f - l));
            i = [b, 0, 0, b, -Math.round(o / 2 + d) * b, -Math.round(a / 2 + l) * b]
        }
        return {
            type: "path",
            path: r,
            matrix: i
        }
    }

    function _(e) {
        var t, n = 1,
            r = "#000000",
            i = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
        "string" == typeof e ? t = e : (t = e.text, n = "scalar" in e ? e.scalar : n, i = "fontFamily" in e ? e.fontFamily : i, r = "color" in e ? e.color : r);
        var o = 10 * n,
            a = "" + o + "px " + i,
            s = new OffscreenCanvas(o, o),
            u = s.getContext("2d");
        u.font = a;
        var d = u.measureText(t),
            l = Math.ceil(d.actualBoundingBoxRight + d.actualBoundingBoxLeft),
            c = Math.ceil(d.actualBoundingBoxAscent + d.actualBoundingBoxDescent),
            f = 2,
            h = d.actualBoundingBoxLeft + f,
            p = d.actualBoundingBoxAscent + f;
        l += f + f, c += f + f, (u = (s = new OffscreenCanvas(l, c)).getContext("2d")).font = a, u.fillStyle = r, u.fillText(t, h, p);
        var g = 1 / n;
        return {
            type: "bitmap",
            bitmap: s.transferToImageBitmap(),
            matrix: [g, 0, 0, g, -l * g / 2, -c * g / 2]
        }
    }
    n.exports = function() {
        return B().apply(this, arguments)
    },
    n.exports.reset = function() {
        B().reset()
    },
    n.exports.create = x,
    n.exports.shapeFromPath = D,
    n.exports.shapeFromText = _
}(function() {
    return "undefined" != typeof window ? window : "undefined" != typeof self ? self : this || {}
}(), n, !1), t.Z = n.exports, n.exports.create
}, 4095: function(e, t, n) {
"use strict";
let r, i;
n.d(t, {
    Lj: function() {
        return T
    },
    X3: function() {
        return $
    }
});
let o = (e, t) => t.some(t => e instanceof t);

function a() {
    return r || (r = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
}

function s() {
    return i || (i = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
}
let u = new WeakMap,
    d = new WeakMap,
    l = new WeakMap,
    c = new WeakMap,
    f = new WeakMap;

function h(e) {
    let t = new Promise((t, n) => {
        let r = () => {
                e.removeEventListener("success", i), e.removeEventListener("error", o)
            },
            i = () => {
                t(y(e.result)), r()
            },
            o = () => {
                n(e.error), r()
            };
        e.addEventListener("success", i), e.addEventListener("error", o)
    });
    return t.then(t => {
        t instanceof IDBCursor && u.set(t, e)
    }).catch(() => {}), f.set(t, e), t
}

function p(e) {
    if (d.has(e)) return;
    let t = new Promise((t, n) => {
        let r = () => {
                e.removeEventListener("complete", i), e.removeEventListener("error", o), e.removeEventListener("abort", o)
            },
            i = () => {
                t(), r()
            },
            o = () => {
                n(e.error || new DOMException("AbortError", "AbortError")), r()
            };
        e.addEventListener("complete", i), e.addEventListener("error", o), e.addEventListener("abort", o)
    });
    d.set(e, t)
}
let g = {
    get(e, t, n) {
        if (e instanceof IDBTransaction) {
            if ("done" === t) return d.get(e);
            if ("objectStoreNames" === t) return e.objectStoreNames || l.get(e);
            if ("store" === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
        }
        return y(e[t])
    },
    set: (e, t, n) => (e[t] = n, !0),
    has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
};

function b(e) {
    g = e(g)
}

function m(e) {
    return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? s().includes(e) ? function(...t) {
        return e.apply(S(this), t), y(u.get(this))
    } : function(...t) {
        return y(e.apply(S(this), t))
    } : function(t, ...n) {
        let r = e.call(S(this), t, ...n);
        return l.set(r, t.sort ? t.sort() : [t]), y(r)
    }
}

function v(e) {
    return "function" == typeof e ? m(e) : (e instanceof IDBTransaction && p(e), o(e, a())) ? new Proxy(e, g) : e
}

function y(e) {
    if (e instanceof IDBRequest) return h(e);
    if (c.has(e)) return c.get(e);
    let t = v(e);
    return t !== e && (c.set(e, t), f.set(t, e)), t
}
let S = e => f.get(e);

function $(e, t, {
    blocked: n,
    upgrade: r,
    blocking: i,
    terminated: o
} = {}) {
    let a = indexedDB.open(e, t),
        s = y(a);
    return r && a.addEventListener("upgradeneeded", e => {
        r(y(a.result), e.oldVersion, e.newVersion, y(a.transaction))
    }), n && a.addEventListener("blocked", () => n()), s.then(e => {
        o && e.addEventListener("close", () => o()), i && e.addEventListener("versionchange", () => i())
    }).catch(() => {}), s
}

function T(e, {
    blocked: t
} = {}) {
    let n = indexedDB.deleteDatabase(e);
    return t && n.addEventListener("blocked", () => t()), y(n).then(() => void 0)
}
let w = ["get", "getKey", "getAll", "getAllKeys", "count"],
    P = ["put", "add", "delete", "clear"],
    A = new Map;

function M(e, t) {
    if (!(e instanceof IDBDatabase && !(t in e) && "string" == typeof t)) return;
    if (A.get(t)) return A.get(t);
    let n = t.replace(/FromIndex$/, ""),
        r = t !== n,
        i = P.includes(n);
    if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || w.includes(n))) return;
    let o = async function(e, ...t) {
        let o = this.transaction(e, i ? "readwrite" : "readonly"),
            a = o.store;
        return r && (a = a.index(t.shift())), (await Promise.all([a[n](...t), i && o.done]))[0]
    };
    return A.set(t, o), o
}
b(e => ({ ...e,
    get: (t, n, r) => M(t, n) || e.get(t, n, r),
    has: (t, n) => !!M(t, n) || e.has(t, n)
}))
}, 7073: function(e, t, n) {
"use strict";
n.d(t, {
    S: function() {
        return t0
    }
});
var r = {
    version: 4,
    country_calling_codes: {
        1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
        7: ["RU", "KZ"],
        20: ["EG"],
        27: ["ZA"],
        30: ["GR"],
        31: ["NL"],
        32: ["BE"],
        33: ["FR"],
        34: ["ES"],
        36: ["HU"],
        39: ["IT", "VA"],
        40: ["RO"],
        41: ["CH"],
        43: ["AT"],
        44: ["GB", "GG", "IM", "JE"],
        45: ["DK"],
        46: ["SE"],
        47: ["NO", "SJ"],
        48: ["PL"],
        49: ["DE"],
        51: ["PE"],
        52: ["MX"],
        53: ["CU"],
        54: ["AR"],
        55: ["BR"],
        56: ["CL"],
        57: ["CO"],
        58: ["VE"],
        60: ["MY"],
        61: ["AU", "CC", "CX"],
        62: ["ID"],
        63: ["PH"],
        64: ["NZ"],
        65: ["SG"],
        66: ["TH"],
        81: ["JP"],
        82: ["KR"],
        84: ["VN"],
        86: ["CN"],
        90: ["TR"],
        91: ["IN"],
        92: ["PK"],
        93: ["AF"],
        94: ["LK"],
        95: ["MM"],
        98: ["IR"],
        211: ["SS"],
        212: ["MA", "EH"],
        213: ["DZ"],
        216: ["TN"],
        218: ["LY"],
        220: ["GM"],
        221: ["SN"],
        222: ["MR"],
        223: ["ML"],
        224: ["GN"],
        225: ["CI"],
        226: ["BF"],
        227: ["NE"],
        228: ["TG"],
        229: ["BJ"],
        230: ["MU"],
        231: ["LR"],
        232: ["SL"],
        233: ["GH"],
        234: ["NG"],
        235: ["TD"],
        236: ["CF"],
        237: ["CM"],
        238: ["CV"],
        239: ["ST"],
        240: ["GQ"],
        241: ["GA"],
        242: ["CG"],
        243: ["CD"],
        244: ["AO"],
        245: ["GW"],
        246: ["IO"],
        247: ["AC"],
        248: ["SC"],
        249: ["SD"],
        250: ["RW"],
        251: ["ET"],
        252: ["SO"],
        253: ["DJ"],
        254: ["KE"],
        255: ["TZ"],
        256: ["UG"],
        257: ["BI"],
        258: ["MZ"],
        260: ["ZM"],
        261: ["MG"],
        262: ["RE", "YT"],
        263: ["ZW"],
        264: ["NA"],
        265: ["MW"],
        266: ["LS"],
        267: ["BW"],
        268: ["SZ"],
        269: ["KM"],
        290: ["SH", "TA"],
        291: ["ER"],
        297: ["AW"],
        298: ["FO"],
        299: ["GL"],
        350: ["GI"],
        351: ["PT"],
        352: ["LU"],
        353: ["IE"],
        354: ["IS"],
        355: ["AL"],
        356: ["MT"],
        357: ["CY"],
        358: ["FI", "AX"],
        359: ["BG"],
        370: ["LT"],
        371: ["LV"],
        372: ["EE"],
        373: ["MD"],
        374: ["AM"],
        375: ["BY"],
        376: ["AD"],
        377: ["MC"],
        378: ["SM"],
        380: ["UA"],
        381: ["RS"],
        382: ["ME"],
        383: ["XK"],
        385: ["HR"],
        386: ["SI"],
        387: ["BA"],
        389: ["MK"],
        420: ["CZ"],
        421: ["SK"],
        423: ["LI"],
        500: ["FK"],
        501: ["BZ"],
        502: ["GT"],
        503: ["SV"],
        504: ["HN"],
        505: ["NI"],
        506: ["CR"],
        507: ["PA"],
        508: ["PM"],
        509: ["HT"],
        590: ["GP", "BL", "MF"],
        591: ["BO"],
        592: ["GY"],
        593: ["EC"],
        594: ["GF"],
        595: ["PY"],
        596: ["MQ"],
        597: ["SR"],
        598: ["UY"],
        599: ["CW", "BQ"],
        670: ["TL"],
        672: ["NF"],
        673: ["BN"],
        674: ["NR"],
        675: ["PG"],
        676: ["TO"],
        677: ["SB"],
        678: ["VU"],
        679: ["FJ"],
        680: ["PW"],
        681: ["WF"],
        682: ["CK"],
        683: ["NU"],
        685: ["WS"],
        686: ["KI"],
        687: ["NC"],
        688: ["TV"],
        689: ["PF"],
        690: ["TK"],
        691: ["FM"],
        692: ["MH"],
        850: ["KP"],
        852: ["HK"],
        853: ["MO"],
        855: ["KH"],
        856: ["LA"],
        880: ["BD"],
        886: ["TW"],
        960: ["MV"],
        961: ["LB"],
        962: ["JO"],
        963: ["SY"],
        964: ["IQ"],
        965: ["KW"],
        966: ["SA"],
        967: ["YE"],
        968: ["OM"],
        970: ["PS"],
        971: ["AE"],
        972: ["IL"],
        973: ["BH"],
        974: ["QA"],
        975: ["BT"],
        976: ["MN"],
        977: ["NP"],
        992: ["TJ"],
        993: ["TM"],
        994: ["AZ"],
        995: ["GE"],
        996: ["KG"],
        998: ["UZ"]
    },
    countries: {
        AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]],
        AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9],
            [
                ["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]],
                ["(\\d{4})(\\d{4})", "$1 $2", ["1"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
            ]
        ],
        AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12],
            [
                ["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]],
                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"],
                ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]
            ], "0"
        ],
        AF: ["93", "00", "[2-7]\\d{8}", [9],
            [
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]
            ], "0"
        ],
        AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"],
        AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"],
        AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9],
            [
                ["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"],
                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"],
                ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]
            ], "0"
        ],
        AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8],
            [
                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"],
                ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"],
                ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
                ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]
            ], "0"
        ],
        AO: ["244", "00", "[29]\\d{8}", [9],
            [
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]
            ]
        ],
        AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11],
            [
                ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1],
                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1],
                ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"],
                ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"],
                ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"],
                ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]
            ], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"
        ],
        AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"],
        AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            [
                ["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
                ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
                ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
                ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"],
                ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
                ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]
            ], "0"
        ],
        AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12],
            [
                ["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"],
                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]
            ], "0", 0, "(183[12])|0", 0, 0, 0, [
                ["(?:(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|7(?:[013-57-9]\\d|2[0-8]))\\d|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90)))\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|3\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]],
                ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]],
                ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]],
                ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
            ], "0011"
        ],
        AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]
            ]
        ],
        AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"],
        AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9],
            [
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"],
                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]
            ], "0"
        ],
        BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9],
            [
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]
            ], "0"
        ],
        BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"],
        BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10],
            [
                ["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"],
                ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"],
                ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"],
                ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]
            ], "0"
        ],
        BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9],
            [
                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"],
                ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]
            ], "0"
        ],
        BF: ["226", "00", "[025-7]\\d{7}", [8],
            [
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]
            ]
        ],
        BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12],
            [
                ["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
                ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
                ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]
            ], "0"
        ],
        BH: ["973", "00", "[136-9]\\d{7}", [8],
            [
                ["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]
            ]
        ],
        BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8],
            [
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]
            ]
        ],
        BJ: ["229", "00", "(?:01\\d|[24-689])\\d{7}", [8, 10],
            [
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["0"]]
            ]
        ],
        BL: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [
            ["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"],
            ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"],
            ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]
        ]],
        BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"],
        BN: ["673", "00", "[2-578]\\d{6}", [7],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]
            ]
        ],
        BO: ["591", "00(?:1\\d)?", "8001\\d{5}|(?:[2-467]\\d|50)\\d{6}", [8, 9],
            [
                ["(\\d)(\\d{7})", "$1 $2", ["[235]|4[46]"]],
                ["(\\d{8})", "$1", ["[67]"]],
                ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]
            ], "0", 0, "0(1\\d)?"
        ],
        BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"],
        BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11],
            [
                ["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]],
                ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"],
                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"],
                ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]
            ], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"
        ],
        BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"],
        BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8],
            [
                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]
            ]
        ],
        BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10],
            [
                ["(\\d{2})(\\d{5})", "$1 $2", ["90"]],
                ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]],
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]],
                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]],
                ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]
            ]
        ],
        BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11],
            [
                ["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"],
                ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"],
                ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"],
                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"],
                ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]
            ], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"
        ],
        BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11],
            [
                ["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
                ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]
            ]
        ],
        CA: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [
            ["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}", [10]],
            ["", [10]],
            ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]],
            ["900[2-9]\\d{6}", [10]],
            ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|33|44|66|77|88)|6(?:22|33))[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]
        ]],
        CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [
            ["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]],
            ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]],
            ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
            ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
            ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
        ], "0011"],
        CD: ["243", "00", "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}", [7, 8, 9, 10],
            [
                ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"],
                ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"],
                ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"]
            ], "0"
        ],
        CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8],
            [
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]
            ]
        ],
        CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9],
            [
                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]
            ]
        ],
        CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9, 12],
            [
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]
            ], "0"
        ],
        CI: ["225", "00", "[02]\\d{9}", [10],
            [
                ["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]
            ]
        ],
        CK: ["682", "00", "[2-578]\\d{4}", [5],
            [
                ["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]
            ]
        ],
        CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11],
            [
                ["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"],
                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"],
                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]
            ]
        ],
        CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9],
            [
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]],
                ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]
            ]
        ],
        CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}", [7, 8, 9, 10, 11, 12],
            [
                ["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]", "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"], "0$1"],
                ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1],
                ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]],
                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1],
                ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1],
                ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]],
                ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]
            ], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"
        ],
        CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}", [8, 10, 11],
            [
                ["(\\d{4})(\\d{4})", "$1 $2", ["46"]],
                ["(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)"],
                ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]],
                ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]
            ], "0", 0, "0([3579]|4(?:[14]4|56))?"
        ],
        CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10],
            [
                ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]
            ], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"
        ],
        CU: ["53", "119", "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8, 10],
            [
                ["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"],
                ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
                ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"],
                ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]
            ], "0"
        ],
        CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7],
            [
                ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]
            ]
        ],
        CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]],
                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]
            ], 0, 0, 0, 0, 0, "[69]"
        ],
        CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [
            ["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]],
            ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]],
            ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
            ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
            ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
        ], "0011"],
        CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8],
            [
                ["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]
            ]
        ],
        CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9, 10, 11, 12],
            [
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
                ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]],
                ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
                ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
            ]
        ],
        DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [
                ["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
                ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"],
                ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"],
                ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
                ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"],
                ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
                ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"],
                ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
                ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
                ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"],
                ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
                ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
                ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|31)"], "0$1"],
                ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"],
                ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]
            ], "0"
        ],
        DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8],
            [
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]
            ]
        ],
        DK: ["45", "00", "[2-9]\\d{7}", [8],
            [
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]
            ]
        ],
        DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"],
        DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"],
        DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9],
            [
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]
            ], "0"
        ],
        EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11],
            [
                ["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]
            ], "0"
        ],
        EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],
                ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]],
                ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]],
                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
            ]
        ],
        EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10],
            [
                ["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
                ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]
            ], "0"
        ],
        EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"],
        ER: ["291", "00", "[178]\\d{6}", [7],
            [
                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]
            ], "0"
        ],
        ES: ["34", "00", "[5-9]\\d{8}", [9],
            [
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]
            ]
        ],
        ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9],
            [
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]
            ], "0"
        ],
        FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12],
            [
                ["(\\d{5})", "$1", ["20[2-59]"], "0$1"],
                ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"],
                ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"],
                ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"],
                ["(\\d)(\\d{4,9})", "$1 $2", ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]
            ], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"
        ],
        FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]],
                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
            ], 0, 0, 0, 0, 0, 0, 0, "00"
        ],
        FK: ["500", "00", "[2-7]\\d{4}", [5]],
        FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]
            ]
        ],
        FO: ["298", "00", "[2-9]\\d{5}", [6],
            [
                ["(\\d{6})", "$1", ["[2-9]"]]
            ], 0, 0, "(10(?:01|[12]0|88))"
        ],
        FR: ["33", "00", "[1-9]\\d{8}", [9],
            [
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"],
                ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]
            ], "0"
        ],
        GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8],
            [
                ["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]
            ], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"
        ],
        GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"],
                ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"],
                ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"],
                ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"],
                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"],
                ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]
            ], "0", 0, 0, 0, 0, 0, [
                ["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-35])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]],
                ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]],
                ["80[08]\\d{7}|800\\d{6}|8001111"],
                ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]],
                ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
                ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]],
                ["56\\d{8}", [10]]
            ], 0, " x"
        ],
        GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"],
        GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9],
            [
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]
            ], "0"
        ],
        GF: ["594", "00", "(?:[56]94\\d|7093)\\d{5}|(?:80|9\\d)\\d{7}", [9],
            [
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]|9[47]"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]
            ], "0"
        ],
        GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0", "1481$1", 0, 0, [
            ["1481[25-9]\\d{5}", [10]],
            ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]],
            ["80[08]\\d{7}|800\\d{6}|8001111"],
            ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]],
            ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
            ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]],
            ["56\\d{8}", [10]]
        ]],
        GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9],
            [
                ["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]
            ], "0"
        ],
        GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8],
            [
                ["(\\d{3})(\\d{5})", "$1 $2", ["2"]]
            ]
        ],
        GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6],
            [
                ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]
            ]
        ],
        GM: ["220", "00", "[2-9]\\d{6}", [7],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
            ]
        ],
        GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9],
            [
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]
            ]
        ],
        GP: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9],
            [
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
            ], "0", 0, 0, 0, 0, 0, [
                ["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"],
                ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"],
                ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]
            ]
        ],
        GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9],
            [
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
                ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]
            ]
        ],
        GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12],
            [
                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
                ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]],
                ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]
            ]
        ],
        GT: ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11],
            [
                ["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]],
                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
            ]
        ],
        GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"],
        GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["40"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]
            ]
        ],
        GY: ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
            ]
        ],
        HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11],
            [
                ["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]],
                ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
            ], 0, 0, 0, 0, 0, 0, 0, "00"
        ],
        HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11],
            [
                ["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]
            ]
        ],
        HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9],
            [
                ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"],
                ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]
            ], "0"
        ],
        HT: ["509", "00", "(?:[2-489]\\d|55)\\d{6}", [8],
            [
                ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]
            ]
        ],
        HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9],
            [
                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"],
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]
            ], "06"
        ],
        ID: ["62", "00[89]", "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
            [
                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]],
                ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
                ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"],
                ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"],
                ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
                ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
                ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"],
                ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]
            ], "0"
        ],
        IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10],
            [
                ["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"],
                ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"],
                ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"],
                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"],
                ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]
            ], "0"
        ],
        IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12],
            [
                ["(\\d{4})(\\d{3})", "$1-$2", ["125"]],
                ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]],
                ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]],
                ["(\\d{4})(\\d{6})", "$1-$2", ["159"]],
                ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
                ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]
            ], "0"
        ],
        IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0", "1624$1", 0, "74576|(?:16|7[56])24"],
        IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13],
            [
                ["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1],
                ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1],
                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1],
                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1],
                ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1],
                ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1],
                ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]
            ], "0"
        ],
        IO: ["246", "00", "3\\d{6}", [7],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["3"]]
            ]
        ],
        IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10],
            [
                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
            ], "0"
        ],
        IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10],
            [
                ["(\\d{4,5})", "$1", ["96"], "0$1"],
                ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]
            ], "0"
        ],
        IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]
            ], 0, 0, 0, 0, 0, 0, 0, "00"
        ],
        IT: ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11, 12],
            [
                ["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
                ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],
                ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
                ["(\\d{4})(\\d{4})", "$1 $2", ["894"]],
                ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]],
                ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]],
                ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
                ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]
            ], 0, 0, 0, 0, 0, 0, [
                ["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}", [6, 7, 8, 9, 10, 11]],
                ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]],
                ["80(?:0\\d{3}|3)\\d{3}", [6, 9]],
                ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]],
                ["1(?:78\\d|99)\\d{6}", [9, 10]],
                ["3[2-8]\\d{9,10}", [11, 12]], 0, 0, ["55\\d{8}", [10]],
                ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]
            ]
        ],
        JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0", "1534$1", 0, 0, [
            ["1534[0-24-8]\\d{5}"],
            ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"],
            ["80(?:07(?:35|81)|8901)\\d{4}"],
            ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],
            ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],
            ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"],
            ["56\\d{8}"]
        ]],
        JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"],
        JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9],
            [
                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
                ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"],
                ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"],
                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
            ], "0"
        ],
        JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
            [
                ["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
                ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"],
                ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]
            ], "0", 0, "(000[259]\\d{6})$|(?:(?:003768)0?)|0", "$1"
        ],
        KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10],
            [
                ["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
                ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
            ], "0"
        ],
        KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10],
            [
                ["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]
            ], "0"
        ],
        KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10],
            [
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
            ], "0"
        ],
        KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"],
        KM: ["269", "00", "[3478]\\d{6}", [7],
            [
                ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]
            ]
        ],
        KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"],
        KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10],
            [
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]
            ], "0"
        ],
        KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14],
            [
                ["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"],
                ["(\\d{4})(\\d{4})", "$1-$2", ["1"]],
                ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1"],
                ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"],
                ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]
            ], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"
        ],
        KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8],
            [
                ["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]],
                ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]
            ]
        ],
        KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"],
        KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"],
        LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10],
            [
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[0135-9]"], "0$1"],
                ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]
            ], "0"
        ],
        LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8],
            [
                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]
            ], "0"
        ],
        LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"],
        LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9],
            [
                ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
            ], "0", 0, "(1001)|0"
        ],
        LK: ["94", "00", "[1-9]\\d{8}", [9],
            [
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]
            ], "0"
        ],
        LR: ["231", "00", "(?:[245]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9],
            [
                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]
            ], "0"
        ],
        LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8],
            [
                ["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]
            ]
        ],
        LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8],
            [
                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1],
                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1],
                ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1],
                ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1]
            ], "0", 0, "[08]"
        ],
        LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11],
            [
                ["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]],
                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]
            ], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"
        ],
        LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8],
            [
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]
            ]
        ],
        LY: ["218", "00", "[2-9]\\d{8}", [9],
            [
                ["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]
            ], "0"
        ],
        MA: ["212", "00", "[5-8]\\d{8}", [9],
            [
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"],
                ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"], "0$1"],
                ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"],
                ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]
            ], "0", 0, 0, 0, 0, 0, [
                ["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"],
                ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-467]|5[0-3]|8[0-5]))\\d{6}"],
                ["80[0-7]\\d{6}"],
                ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]
            ]
        ],
        MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9],
            [
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]],
                ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]
            ], "0"
        ],
        MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8],
            [
                ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]
            ], "0"
        ],
        ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9],
            [
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]
            ], "0"
        ],
        MF: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [
            ["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"],
            ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"],
            ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]
        ]],
        MG: ["261", "00", "[23]\\d{8}", [9],
            [
                ["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]
            ], "0", 0, "([24-9]\\d{6})$|0", "20$1"
        ],
        MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7],
            [
                ["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]
            ], "1"
        ],
        MK: ["389", "00", "[2-578]\\d{7}", [8],
            [
                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
                ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]
            ], "0"
        ],
        ML: ["223", "00", "[24-9]\\d{7}", [8],
            [
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]
            ]
        ],
        MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10],
            [
                ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
                ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"], "0$1"],
                ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|452|678|86", "[12]|452|6788|86"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"],
                ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"],
                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
                ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"],
                ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]
            ], "0"
        ],
        MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10],
            [
                ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
                ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]],
                ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
                ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"],
                ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]
            ], "0"
        ],
        MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8],
            [
                ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]
            ]
        ],
        MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"],
        MQ: ["596", "00", "(?:596\\d|7091)\\d{5}|(?:69|[89]\\d)\\d{7}", [9],
            [
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|8(?:0[6-9]|[36])"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
            ], "0"
        ],
        MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8],
            [
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]
            ]
        ],
        MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"],
        MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8],
            [
                ["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]
            ]
        ],
        MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]],
                ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]],
                ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]
            ], 0, 0, 0, 0, 0, 0, 0, "020"
        ],
        MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10],
            [
                ["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]
            ], 0, 0, 0, 0, 0, 0, 0, "00"
        ],
        MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9],
            [
                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]
            ], "0"
        ],
        MX: ["52", "0[09]", "[2-9]\\d{9}", [10],
            [
                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]
            ], 0, 0, 0, 0, 0, 0, 0, "00"
        ],
        MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10],
            [
                ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"],
                ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
                ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"],
                ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]
            ], "0"
        ],
        MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9],
            [
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
            ]
        ],
        NA: ["264", "00", "[68]\\d{7,8}", [8, 9],
            [
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
            ], "0"
        ],
        NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6],
            [
                ["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]
            ]
        ],
        NE: ["227", "00", "[027-9]\\d{7}", [8],
            [
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]
            ]
        ],
        NF: ["672", "00", "[13]\\d{5}", [6],
            [
                ["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]],
                ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]
            ], 0, 0, "([0-258]\\d{4})$", "3$1"
        ],
        NG: ["234", "009", "38\\d{6}|[78]\\d{9,13}|(?:20|9\\d)\\d{8}", [8, 10, 11, 12, 13, 14],
            [
                ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["3"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"],
                ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"],
                ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]
            ], "0"
        ],
        NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8],
            [
                ["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]
            ]
        ],
        NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11],
            [
                ["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
                ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"],
                ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]
            ], "0"
        ],
        NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8],
            [
                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]
            ], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"
        ],
        NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11],
            [
                ["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
                ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"],
                ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]
            ], "0"
        ],
        NR: ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]
            ]
        ],
        NU: ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["8"]]
            ]
        ],
        NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10],
            [
                ["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"],
                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"],
                ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]
            ], "0", 0, 0, 0, 0, 0, 0, "00"
        ],
        OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9],
            [
                ["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]],
                ["(\\d{2})(\\d{6})", "$1 $2", ["2"]],
                ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]
            ]
        ],
        PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11],
            [
                ["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
                ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
            ]
        ],
        PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9],
            [
                ["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"],
                ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
                ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]
            ], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "
        ],
        PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9],
            [
                ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
            ]
        ],
        PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]],
                ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]
            ], 0, 0, 0, 0, 0, 0, 0, "00"
        ],
        PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13],
            [
                ["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
                ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"],
                ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"],
                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]
            ], "0"
        ],
        PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12],
            [
                ["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"],
                ["(\\d{4})(\\d{5})", "$1 $2", ["1"]],
                ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"],
                ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"],
                ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"],
                ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"],
                ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]
            ], "0"
        ],
        PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10],
            [
                ["(\\d{5})", "$1", ["19"]],
                ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]],
                ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],
                ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],
                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]],
                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]
            ]
        ],
        PM: ["508", "00", "[45]\\d{5}|(?:708|8\\d\\d)\\d{6}", [6, 9],
            [
                ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
            ], "0"
        ],
        PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"],
        PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10],
            [
                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"],
                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
            ], "0"
        ],
        PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9],
            [
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]
            ]
        ],
        PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
            ]
        ],
        PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11],
            [
                ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
                ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]],
                ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"],
                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]
            ], "0"
        ],
        QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]],
                ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]
            ]
        ],
        RE: ["262", "00", "709\\d{6}|(?:26|[689]\\d)\\d{7}", [9],
            [
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"], "0$1"]
            ], "0", 0, 0, 0, 0, 0, [
                ["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"],
                ["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"],
                ["80\\d{7}"],
                ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"],
                ["8(?:1[019]|2[0156]|84|90)\\d{6}"]
            ]
        ],
        RO: ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9],
            [
                ["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"],
                ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]
            ], "0", 0, 0, 0, 0, 0, 0, 0, " int "
        ],
        RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12],
            [
                ["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"],
                ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]
            ], "0"
        ],
        RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14],
            [
                ["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1],
                ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1],
                ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1],
                ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]
            ], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"
        ],
        RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9],
            [
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]
            ], "0"
        ],
        SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10],
            [
                ["(\\d{4})(\\d{5})", "$1 $2", ["9"]],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
            ], "0"
        ],
        SB: ["677", "0[01]", "[6-9]\\d{6}|[1-6]\\d{4}", [5, 7],
            [
                ["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]
            ]
        ],
        SC: ["248", "010|0[0-2]", "(?:[2489]\\d|64)\\d{5}", [7],
            [
                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]
            ], 0, 0, 0, 0, 0, 0, 0, "00"
        ],
        SD: ["249", "00", "[19]\\d{8}", [9],
            [
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]
            ], "0"
        ],
        SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10, 12],
            [
                ["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"],
                ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"],
                ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"],
                ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"],
                ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"],
                ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"],
                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"],
                ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"],
                ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]
            ], "0"
        ],
        SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11],
            [
                ["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
                ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
            ]
        ],
        SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"],
        SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8],
            [
                ["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"],
                ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"],
                ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]
            ], "0", 0, 0, 0, 0, 0, 0, "00"
        ],
        SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"],
        SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9],
            [
                ["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
                ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"],
                ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]
            ], "0"
        ],
        SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8],
            [
                ["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]
            ], "0"
        ],
        SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10],
            [
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
                ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]
            ], 0, 0, "([89]\\d{5})$", "0549$1"
        ],
        SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9],
            [
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]
            ]
        ],
        SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9],
            [
                ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
                ["(\\d{6})", "$1", ["[134]"]],
                ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],
                ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]],
                ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|7[67]|9[2-9]"]]
            ], "0"
        ],
        SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7],
            [
                ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
                ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]],
                ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]
            ]
        ],
        SS: ["211", "00", "[19]\\d{8}", [9],
            [
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]
            ], "0"
        ],
        ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]
            ]
        ],
        SV: ["503", "00", "[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
                ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
                ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]
            ]
        ],
        SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"],
        SY: ["963", "00", "[1-359]\\d{8}|[1-5]\\d{7}", [8, 9],
            [
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-4]|5[1-3]"], "0$1", 1],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[59]"], "0$1", 1]
            ], "0"
        ],
        SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9],
            [
                ["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]],
                ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]
            ]
        ],
        TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
        TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"],
        TD: ["235", "00|16", "(?:22|[689]\\d|77)\\d{6}", [8],
            [
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"]]
            ], 0, 0, 0, 0, 0, 0, 0, "00"
        ],
        TG: ["228", "00", "[279]\\d{7}", [8],
            [
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]
            ]
        ],
        TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13],
            [
                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"],
                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
            ], "0"
        ],
        TJ: ["992", "810", "[0-57-9]\\d{8}", [9],
            [
                ["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]],
                ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]],
                ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]
            ], 0, 0, 0, 0, 0, 0, 0, "8~10"
        ],
        TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]],
        TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
                ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]
            ]
        ],
        TM: ["993", "810", "(?:[1-6]\\d|71)\\d{6}", [8],
            [
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"],
                ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"],
                ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]
            ], "8", 0, 0, 0, 0, 0, 0, "8~10"
        ],
        TN: ["216", "00", "[2-57-9]\\d{7}", [8],
            [
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]
            ]
        ],
        TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7],
            [
                ["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],
                ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]
            ]
        ],
        TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13],
            [
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1],
                ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1],
                ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1],
                ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]
            ], "0"
        ],
        TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"],
        TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7],
            [
                ["(\\d{2})(\\d{3})", "$1 $2", ["2"]],
                ["(\\d{2})(\\d{4})", "$1 $2", ["90"]],
                ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
            ]
        ],
        TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11],
            [
                ["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"],
                ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"],
                ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]
            ], "0", 0, 0, 0, 0, 0, 0, 0, "#"
        ],
        TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9],
            [
                ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
                ["(\\d{2})(\\d{7})", "$1 $2", ["5"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]
            ], "0"
        ],
        UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10],
            [
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"],
                ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
            ], "0", 0, 0, 0, 0, 0, 0, "0~0"
        ],
        UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9],
            [
                ["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"],
                ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"],
                ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]
            ], "0"
        ],
        US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10],
            [
                ["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1],
                ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]
            ], "1", 0, 0, 0, 0, 0, [
                ["(?:3052(?:0[0-8]|[1-9]\\d)|5056(?:[0-35-9]\\d|4[0-468]))\\d{4}|(?:2742|305[3-9]|472[247-9]|505[2-57-9]|983[2-47-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[0135-79]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"],
                [""],
                ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                ["900[2-9]\\d{6}"],
                ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, 0, ["305209\\d{4}"]
            ]
        ],
        UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [6, 7, 8, 9, 10, 11, 12, 13],
            [
                ["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]],
                ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
                ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]],
                ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]],
                ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]
            ], "0", 0, 0, 0, 0, 0, 0, "00", " int. "
        ],
        UZ: ["998", "00", "(?:20|33|[5-9]\\d)\\d{7}", [9],
            [
                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]
            ]
        ],
        VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11, 12], 0, 0, 0, 0, 0, 0, "06698"],
        VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"],
        VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10],
            [
                ["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]
            ], "0"
        ],
        VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"],
        VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"],
        VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10],
            [
                ["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1],
                ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1],
                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1],
                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1],
                ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]
            ], "0"
        ],
        VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]
            ]
        ],
        WF: ["681", "00", "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}", [6, 9],
            [
                ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
            ]
        ],
        WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10],
            [
                ["(\\d{5})", "$1", ["[2-5]|6[1-9]"]],
                ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]],
                ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
            ]
        ],
        XK: ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12],
            [
                ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"],
                ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]
            ], "0"
        ],
        YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9],
            [
                ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]
            ], "0"
        ],
        YT: ["262", "00", "7093\\d{5}|(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [
            ["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"],
            ["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"],
            ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]
        ]],
        ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10],
            [
                ["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
            ], "0"
        ],
        ZM: ["260", "00", "800\\d{6}|(?:21|[579]\\d|63)\\d{7}", [9],
            [
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
                ["(\\d{2})(\\d{7})", "$1 $2", ["[579]"], "0$1"]
            ], "0"
        ],
        ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10],
            [
                ["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"],
                ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
                ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
                ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"],
                ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
                ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"],
                ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]
            ], "0"
        ]
    },
    nonGeographic: {
        800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8],
            [
                ["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]
            ], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]
        ],
        808: ["808", 0, "[1-9]\\d{7}", [8],
            [
                ["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]
            ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]
        ],
        870: ["870", 0, "7\\d{11}|[235-7]\\d{8}", [9, 12],
            [
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-7]"]]
            ], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"], 0, 0, 0, 0, 0, 0, ["2\\d{8}", [9]]]
        ],
        878: ["878", 0, "10\\d{10}", [12],
            [
                ["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]
            ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]
        ],
        881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10],
            [
                ["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]],
                ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]
            ], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]
        ],
        882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12],
            [
                ["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]],
                ["(\\d{2})(\\d{6})", "$1 $2", ["49"]],
                ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]],
                ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]],
                ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]],
                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]],
                ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]],
                ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]
            ], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, ["348[57]\\d{7}", [11]], 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]
        ],
        883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12],
            [
                ["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]],
                ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]],
                ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]
            ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]
        ],
        888: ["888", 0, "\\d{11}", [11],
            [
                ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]
            ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]
        ],
        979: ["979", 0, "[1359]\\d{8}", [9],
            [
                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]
            ], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]
        ]
    }
};

function i(e, t) {
    var n = Array.prototype.slice.call(t);
    return n.push(r), e.apply(this, n)
}
var o = {}.constructor;

function a(e) {
    return null != e && e.constructor === o
}

function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? s(Object(n), !0).forEach(function(t) {
            d(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}

function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function l(e, t) {
    return g(e) || p(e, t) || f(e, t) || c()
}

function c() {
    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function f(e, t) {
    if (e) {
        if ("string" == typeof e) return h(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
    }
}

function h(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r
}

function p(e, t) {
    var n, r, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != i) {
        var o = [],
            a = !0,
            s = !1;
        try {
            for (i = i.call(e); !(a = (n = i.next()).done) && (o.push(n.value), !t || o.length !== t); a = !0);
        } catch (e) {
            s = !0, r = e
        } finally {
            try {
                a || null == i.return || i.return()
            } finally {
                if (s) throw r
            }
        }
        return o
    }
}

function g(e) {
    if (Array.isArray(e)) return e
}

function b(e) {
    var t, n, r, i = l(Array.prototype.slice.call(e), 4),
        o = i[0],
        s = i[1],
        d = i[2],
        c = i[3];
    if ("string" == typeof o) t = o;
    else throw TypeError("A text for parsing must be a string.");
    if (s && "string" != typeof s) {
        if (a(s)) d ? (n = s, r = d) : r = s;
        else throw Error("Invalid second argument: ".concat(s))
    } else c ? (n = d, r = c) : (n = void 0, r = d), s && (n = u({
        defaultCountry: s
    }, n));
    return {
        text: t,
        options: n,
        metadata: r
    }
}
var m = 2,
    v = 17,
    y = 3,
    S = "0-9０-９٠-٩۰-۹",
    $ = "-‐-―−ー－",
    T = "／/",
    w = "．.",
    P = " \xa0\xad​⁠　",
    A = "()（）［］\\[\\]",
    M = "~⁓∼～",
    C = "".concat($).concat(T).concat(w).concat(P).concat(A).concat(M),
    O = "+＋";

function E(e) {
    return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function x(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function B(e, t, n) {
    return t && x(e.prototype, t), n && x(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function I(e, t) {
    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}

function D(e, t) {
    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && j(e, t)
}

function _(e) {
    var t = R();
    return function() {
        var n, r = F(e);
        return n = t ? Reflect.construct(r, arguments, F(this).constructor) : r.apply(this, arguments), k(this, n)
    }
}

function k(e, t) {
    if (t && ("object" === E(t) || "function" == typeof t)) return t;
    if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
    return G(e)
}

function G(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function N(e) {
    var t = "function" == typeof Map ? new Map : void 0;
    return (N = function(e) {
        if (null === e || !H(e)) return e;
        if ("function" != typeof e) throw TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n)
        }

        function n() {
            return L(e, arguments, F(this).constructor)
        }
        return n.prototype = Object.create(e.prototype, {
            constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), j(n, e)
    })(e)
}

function L(e, t, n) {
    return (L = R() ? Reflect.construct : function(e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var i = new(Function.bind.apply(e, r));
        return n && j(i, n.prototype), i
    }).apply(null, arguments)
}

function R() {
    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch (e) {
        return !1
    }
}

function H(e) {
    return -1 !== Function.toString.call(e).indexOf("[native code]")
}

function j(e, t) {
    return (j = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
    })(e, t)
}

function F(e) {
    return (F = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
}
var V = function(e) {
    D(n, e);
    var t = _(n);

    function n(e) {
        var r;
        return I(this, n), Object.setPrototypeOf(G(r = t.call(this, e)), n.prototype), r.name = r.constructor.name, r
    }
    return B(n)
}(N(Error));

function U(e, t) {
    e = e.split("-"), t = t.split("-");
    for (var n = e[0].split("."), r = t[0].split("."), i = 0; i < 3; i++) {
        var o = Number(n[i]),
            a = Number(r[i]);
        if (o > a) return 1;
        if (a > o) return -1;
        if (!isNaN(o) && isNaN(a)) return 1;
        if (isNaN(o) && !isNaN(a)) return -1
    }
    return e[1] && t[1] ? e[1] > t[1] ? 1 : e[1] < t[1] ? -1 : 0 : !e[1] && t[1] ? 1 : e[1] && !t[1] ? -1 : 0
}

function W(e) {
    return (W = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function X(e, t) {
    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}

function K(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function z(e, t, n) {
    return t && K(e.prototype, t), n && K(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}
var q = "1.2.0",
    Y = "1.7.35",
    Q = " ext. ",
    Z = /^\d+$/,
    J = function() {
        function e(t) {
            X(this, e), eo(t), this.metadata = t, ed.call(this, t)
        }
        return z(e, [{
            key: "getCountries",
            value: function() {
                return Object.keys(this.metadata.countries).filter(function(e) {
                    return "001" !== e
                })
            }
        }, {
            key: "getCountryMetadata",
            value: function(e) {
                return this.metadata.countries[e]
            }
        }, {
            key: "nonGeographic",
            value: function() {
                if (!this.v1 && !this.v2 && !this.v3) return this.metadata.nonGeographic || this.metadata.nonGeographical
            }
        }, {
            key: "hasCountry",
            value: function(e) {
                return void 0 !== this.getCountryMetadata(e)
            }
        }, {
            key: "hasCallingCode",
            value: function(e) {
                if (this.getCountryCodesForCallingCode(e)) return !0;
                if (this.nonGeographic()) {
                    if (this.nonGeographic()[e]) return !0
                } else {
                    var t = this.countryCallingCodes()[e];
                    if (t && 1 === t.length && "001" === t[0]) return !0
                }
            }
        }, {
            key: "isNonGeographicCallingCode",
            value: function(e) {
                return this.nonGeographic() ? !!this.nonGeographic()[e] : !this.getCountryCodesForCallingCode(e)
            }
        }, {
            key: "country",
            value: function(e) {
                return this.selectNumberingPlan(e)
            }
        }, {
            key: "selectNumberingPlan",
            value: function(e, t) {
                if (e && Z.test(e) && (t = e, e = null), e && "001" !== e) {
                    if (!this.hasCountry(e)) throw Error("Unknown country: ".concat(e));
                    this.numberingPlan = new ee(this.getCountryMetadata(e), this)
                } else if (t) {
                    if (!this.hasCallingCode(t)) throw Error("Unknown calling code: ".concat(t));
                    this.numberingPlan = new ee(this.getNumberingPlanMetadata(t), this)
                } else this.numberingPlan = void 0;
                return this
            }
        }, {
            key: "getCountryCodesForCallingCode",
            value: function(e) {
                var t = this.countryCallingCodes()[e];
                if (t) {
                    if (1 === t.length && 3 === t[0].length) return;
                    return t
                }
            }
        }, {
            key: "getCountryCodeForCallingCode",
            value: function(e) {
                var t = this.getCountryCodesForCallingCode(e);
                if (t) return t[0]
            }
        }, {
            key: "getNumberingPlanMetadata",
            value: function(e) {
                var t = this.getCountryCodeForCallingCode(e);
                if (t) return this.getCountryMetadata(t);
                if (this.nonGeographic()) {
                    var n = this.nonGeographic()[e];
                    if (n) return n
                } else {
                    var r = this.countryCallingCodes()[e];
                    if (r && 1 === r.length && "001" === r[0]) return this.metadata.countries["001"]
                }
            }
        }, {
            key: "countryCallingCode",
            value: function() {
                return this.numberingPlan.callingCode()
            }
        }, {
            key: "IDDPrefix",
            value: function() {
                return this.numberingPlan.IDDPrefix()
            }
        }, {
            key: "defaultIDDPrefix",
            value: function() {
                return this.numberingPlan.defaultIDDPrefix()
            }
        }, {
            key: "nationalNumberPattern",
            value: function() {
                return this.numberingPlan.nationalNumberPattern()
            }
        }, {
            key: "possibleLengths",
            value: function() {
                return this.numberingPlan.possibleLengths()
            }
        }, {
            key: "formats",
            value: function() {
                return this.numberingPlan.formats()
            }
        }, {
            key: "nationalPrefixForParsing",
            value: function() {
                return this.numberingPlan.nationalPrefixForParsing()
            }
        }, {
            key: "nationalPrefixTransformRule",
            value: function() {
                return this.numberingPlan.nationalPrefixTransformRule()
            }
        }, {
            key: "leadingDigits",
            value: function() {
                return this.numberingPlan.leadingDigits()
            }
        }, {
            key: "hasTypes",
            value: function() {
                return this.numberingPlan.hasTypes()
            }
        }, {
            key: "type",
            value: function(e) {
                return this.numberingPlan.type(e)
            }
        }, {
            key: "ext",
            value: function() {
                return this.numberingPlan.ext()
            }
        }, {
            key: "countryCallingCodes",
            value: function() {
                return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes
            }
        }, {
            key: "chooseCountryByCountryCallingCode",
            value: function(e) {
                return this.selectNumberingPlan(e)
            }
        }, {
            key: "hasSelectedNumberingPlan",
            value: function() {
                return void 0 !== this.numberingPlan
            }
        }]), e
    }(),
    ee = function() {
        function e(t, n) {
            X(this, e), this.globalMetadataObject = n, this.metadata = t, ed.call(this, n.metadata)
        }
        return z(e, [{
            key: "callingCode",
            value: function() {
                return this.metadata[0]
            }
        }, {
            key: "getDefaultCountryMetadataForRegion",
            value: function() {
                return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())
            }
        }, {
            key: "IDDPrefix",
            value: function() {
                if (!this.v1 && !this.v2) return this.metadata[1]
            }
        }, {
            key: "defaultIDDPrefix",
            value: function() {
                if (!this.v1 && !this.v2) return this.metadata[12]
            }
        }, {
            key: "nationalNumberPattern",
            value: function() {
                return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2]
            }
        }, {
            key: "possibleLengths",
            value: function() {
                if (!this.v1) return this.metadata[this.v2 ? 2 : 3]
            }
        }, {
            key: "_getFormats",
            value: function(e) {
                return e[this.v1 ? 2 : this.v2 ? 3 : 4]
            }
        }, {
            key: "formats",
            value: function() {
                var e = this;
                return (this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || []).map(function(t) {
                    return new et(t, e)
                })
            }
        }, {
            key: "nationalPrefix",
            value: function() {
                return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5]
            }
        }, {
            key: "_getNationalPrefixFormattingRule",
            value: function(e) {
                return e[this.v1 ? 4 : this.v2 ? 5 : 6]
            }
        }, {
            key: "nationalPrefixFormattingRule",
            value: function() {
                return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())
            }
        }, {
            key: "_nationalPrefixForParsing",
            value: function() {
                return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7]
            }
        }, {
            key: "nationalPrefixForParsing",
            value: function() {
                return this._nationalPrefixForParsing() || this.nationalPrefix()
            }
        }, {
            key: "nationalPrefixTransformRule",
            value: function() {
                return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8]
            }
        }, {
            key: "_getNationalPrefixIsOptionalWhenFormatting",
            value: function() {
                return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9]
            }
        }, {
            key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
            value: function() {
                return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())
            }
        }, {
            key: "leadingDigits",
            value: function() {
                return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10]
            }
        }, {
            key: "types",
            value: function() {
                return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11]
            }
        }, {
            key: "hasTypes",
            value: function() {
                return (!this.types() || 0 !== this.types().length) && !!this.types()
            }
        }, {
            key: "type",
            value: function(e) {
                if (this.hasTypes() && ei(this.types(), e)) return new er(ei(this.types(), e), this)
            }
        }, {
            key: "ext",
            value: function() {
                return this.v1 || this.v2 ? Q : this.metadata[13] || Q
            }
        }]), e
    }(),
    et = function() {
        function e(t, n) {
            X(this, e), this._format = t, this.metadata = n
        }
        return z(e, [{
            key: "pattern",
            value: function() {
                return this._format[0]
            }
        }, {
            key: "format",
            value: function() {
                return this._format[1]
            }
        }, {
            key: "leadingDigitsPatterns",
            value: function() {
                return this._format[2] || []
            }
        }, {
            key: "nationalPrefixFormattingRule",
            value: function() {
                return this._format[3] || this.metadata.nationalPrefixFormattingRule()
            }
        }, {
            key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
            value: function() {
                return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
            }
        }, {
            key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
            value: function() {
                return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
            }
        }, {
            key: "usesNationalPrefix",
            value: function() {
                return !!this.nationalPrefixFormattingRule() && !en.test(this.nationalPrefixFormattingRule())
            }
        }, {
            key: "internationalFormat",
            value: function() {
                return this._format[5] || this.format()
            }
        }]), e
    }(),
    en = /^\(?\$1\)?$/,
    er = function() {
        function e(t, n) {
            X(this, e), this.type = t, this.metadata = n
        }
        return z(e, [{
            key: "pattern",
            value: function() {
                return this.metadata.v1 ? this.type : this.type[0]
            }
        }, {
            key: "possibleLengths",
            value: function() {
                if (!this.metadata.v1) return this.type[1] || this.metadata.possibleLengths()
            }
        }]), e
    }();

function ei(e, t) {
    switch (t) {
        case "FIXED_LINE":
            return e[0];
        case "MOBILE":
            return e[1];
        case "TOLL_FREE":
            return e[2];
        case "PREMIUM_RATE":
            return e[3];
        case "PERSONAL_NUMBER":
            return e[4];
        case "VOICEMAIL":
            return e[5];
        case "UAN":
            return e[6];
        case "PAGER":
            return e[7];
        case "VOIP":
            return e[8];
        case "SHARED_COST":
            return e[9]
    }
}

function eo(e) {
    if (!e) throw Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
    if (!a(e) || !a(e.countries)) throw Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(a(e) ? "an object of shape: { " + Object.keys(e).join(", ") + " }" : "a " + ea(e) + ": " + e, "."))
}
var ea = function(e) {
    return W(e)
};

function es(e, t) {
    if ((t = new J(t)).hasCountry(e)) return t.country(e).countryCallingCode();
    throw Error("Unknown country: ".concat(e))
}

function eu(e, t) {
    return t.countries.hasOwnProperty(e)
}

function ed(e) {
    var t = e.version;
    "number" == typeof t ? (this.v1 = 1 === t, this.v2 = 2 === t, this.v3 = 3 === t, this.v4 = 4 === t) : t ? -1 === U(t, q) ? this.v2 = !0 : -1 === U(t, Y) ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0
}
var el = ";ext=",
    ec = function(e) {
        return "([".concat(S, "]{1,").concat(e, "})")
    };

function ef(e) {
    var t = "20",
        n = "15",
        r = "9",
        i = "6",
        o = "[ \xa0\\t,]*",
        a = "[:\\.．]?[ \xa0\\t,-]*",
        s = "#?",
        u = "(?:e?xt(?:ensi(?:ó?|\xf3))?n?|ｅ?ｘｔｎ?|доб|anexo)",
        d = "(?:[xｘ#＃~～]|int|ｉｎｔ)",
        l = "[- ]+",
        c = "[ \xa0\\t]*",
        f = "(?:,{2}|;)";
    return el + ec(t) + "|" + (o + u + a + ec(t) + s) + "|" + (o + d + a + ec(r) + s) + "|" + (l + ec(i)) + "#|" + (c + f + a + ec(n) + s) + "|" + (c + "(?:,)+" + a + ec(r)) + s
}
var eh = "[" + S + "]{" + m + "}",
    ep = "[" + O + "]{0,1}(?:[" + C + "]*[" + S + "]){3,}[" + C + S + "]*",
    eg = RegExp("^[" + O + "]{0,1}(?:[" + C + "]*[" + S + "]){1,2}$", "i"),
    eb = RegExp("^" + eh + "$|^" + (ep + "(?:" + ef()) + ")?$", "i");

function em(e) {
    return e.length >= m && eb.test(e)
}

function ev(e) {
    return eg.test(e)
}
var ey = RegExp("(?:" + ef() + ")$", "i");

function eS(e) {
    var t = e.search(ey);
    if (t < 0) return {};
    for (var n = e.slice(0, t), r = e.match(ey), i = 1; i < r.length;) {
        if (r[i]) return {
            number: n,
            ext: r[i]
        };
        i++
    }
}
var e$ = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "０": "0",
    "１": "1",
    "２": "2",
    "３": "3",
    "４": "4",
    "５": "5",
    "６": "6",
    "７": "7",
    "８": "8",
    "９": "9",
    "٠": "0",
    "١": "1",
    "٢": "2",
    "٣": "3",
    "٤": "4",
    "٥": "5",
    "٦": "6",
    "٧": "7",
    "٨": "8",
    "٩": "9",
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9"
};

function eT(e) {
    return e$[e]
}

function ew(e, t) {
    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (n) return (n = n.call(e)).next.bind(n);
    if (Array.isArray(e) || (n = eP(e)) || t && e && "number" == typeof e.length) {
        n && (e = n);
        var r = 0;
        return function() {
            return r >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[r++]
            }
        }
    }
    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function eP(e, t) {
    if (e) {
        if ("string" == typeof e) return eA(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return eA(e, t)
    }
}

function eA(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r
}

function eM(e) {
    for (var t, n = "", r = ew(e.split("")); !(t = r()).done;) {
        var i = t.value;
        n += eC(i, n) || ""
    }
    return n
}

function eC(e, t, n) {
    if ("+" === e) {
        if (t) {
            "function" == typeof n && n("end");
            return
        }
        return "+"
    }
    return eT(e)
}

function eO(e, t) {
    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (n) return (n = n.call(e)).next.bind(n);
    if (Array.isArray(e) || (n = eE(e)) || t && e && "number" == typeof e.length) {
        n && (e = n);
        var r = 0;
        return function() {
            return r >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[r++]
            }
        }
    }
    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function eE(e, t) {
    if (e) {
        if ("string" == typeof e) return ex(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ex(e, t)
    }
}

function ex(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r
}

function eB(e, t) {
    for (var n, r = e.slice(), i = eO(t); !(n = i()).done;) {
        var o = n.value;
        0 > e.indexOf(o) && r.push(o)
    }
    return r.sort(function(e, t) {
        return e - t
    })
}

function eI(e, t) {
    return eD(e, void 0, t)
}

function eD(e, t, n) {
    var r = n.type(t),
        i = r && r.possibleLengths() || n.possibleLengths();
    if (!i) return "IS_POSSIBLE";
    if ("FIXED_LINE_OR_MOBILE" === t) {
        if (!n.type("FIXED_LINE")) return eD(e, "MOBILE", n);
        var o = n.type("MOBILE");
        o && (i = eB(i, o.possibleLengths()))
    } else if (t && !r) return "INVALID_LENGTH";
    var a = e.length,
        s = i[0];
    return s === a ? "IS_POSSIBLE" : s > a ? "TOO_SHORT" : i[i.length - 1] < a ? "TOO_LONG" : i.indexOf(a, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH"
}

function e_(e, t, n) {
    if (void 0 === t && (t = {}), n = new J(n), t.v2) {
        if (!e.countryCallingCode) throw Error("Invalid phone number object passed");
        n.selectNumberingPlan(e.countryCallingCode)
    } else {
        if (!e.phone) return !1;
        if (e.country) {
            if (!n.hasCountry(e.country)) throw Error("Unknown country: ".concat(e.country));
            n.country(e.country)
        } else {
            if (!e.countryCallingCode) throw Error("Invalid phone number object passed");
            n.selectNumberingPlan(e.countryCallingCode)
        }
    }
    if (n.possibleLengths()) return ek(e.phone || e.nationalNumber, n);
    if (e.countryCallingCode && n.isNonGeographicCallingCode(e.countryCallingCode)) return !0;
    throw Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.')
}

function ek(e, t) {
    return "IS_POSSIBLE" === eI(e, t)
}

function eG(e, t) {
    return e = e || "", RegExp("^(?:" + t + ")$").test(e)
}

function eN(e, t) {
    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (n) return (n = n.call(e)).next.bind(n);
    if (Array.isArray(e) || (n = eL(e)) || t && e && "number" == typeof e.length) {
        n && (e = n);
        var r = 0;
        return function() {
            return r >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[r++]
            }
        }
    }
    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function eL(e, t) {
    if (e) {
        if ("string" == typeof e) return eR(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return eR(e, t)
    }
}

function eR(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r
}
var eH = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];

function ej(e, t, n) {
    if (t = t || {}, e.country || e.countryCallingCode) {
        (n = new J(n)).selectNumberingPlan(e.country, e.countryCallingCode);
        var r = t.v2 ? e.nationalNumber : e.phone;
        if (eG(r, n.nationalNumberPattern())) {
            if (eF(r, "FIXED_LINE", n)) return n.type("MOBILE") && "" === n.type("MOBILE").pattern() || !n.type("MOBILE") || eF(r, "MOBILE", n) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
            for (var i, o = eN(eH); !(i = o()).done;) {
                var a = i.value;
                if (eF(r, a, n)) return a
            }
        }
    }
}

function eF(e, t, n) {
    return !(!(t = n.type(t)) || !t.pattern() || t.possibleLengths() && 0 > t.possibleLengths().indexOf(e.length)) && eG(e, t.pattern())
}

function eV(e, t, n) {
    return (t = t || {}, (n = new J(n)).selectNumberingPlan(e.country, e.countryCallingCode), n.hasTypes()) ? void 0 !== ej(e, t, n.metadata) : eG(t.v2 ? e.nationalNumber : e.phone, n.nationalNumberPattern())
}

function eU(e, t, n) {
    var r = new J(n).getCountryCodesForCallingCode(e);
    return r ? r.filter(function(e) {
        return eW(t, e, n)
    }) : []
}

function eW(e, t, n) {
    var r = new J(n);
    return r.selectNumberingPlan(t), r.numberingPlan.possibleLengths().indexOf(e.length) >= 0
}
var eX = RegExp("([" + S + "])");

function eK(e, t, n, r) {
    if (!!t) {
        var i = new J(r);
        i.selectNumberingPlan(t, n);
        var o = new RegExp(i.IDDPrefix());
        if (0 === e.search(o)) {
            var a = (e = e.slice(e.match(o)[0].length)).match(eX);
            if (!a || null == a[1] || !(a[1].length > 0) || "0" !== a[1]) return e
        }
    }
}

function ez(e, t) {
    if (e && t.numberingPlan.nationalPrefixForParsing()) {
        var n = RegExp("^(?:" + t.numberingPlan.nationalPrefixForParsing() + ")"),
            r = n.exec(e);
        if (r) {
            var i, o, a, s = r.length - 1,
                u = s > 0 && r[s];
            if (t.nationalPrefixTransformRule() && u) i = e.replace(n, t.nationalPrefixTransformRule()), s > 1 && (o = r[1]);
            else {
                var d = r[0];
                i = e.slice(d.length), u && (o = r[1])
            }
            if (u) {
                var l = e.indexOf(r[1]);
                e.slice(0, l) === t.numberingPlan.nationalPrefix() && (a = t.numberingPlan.nationalPrefix())
            } else a = r[0];
            return {
                nationalNumber: i,
                nationalPrefix: a,
                carrierCode: o
            }
        }
    }
    return {
        nationalNumber: e
    }
}

function eq(e, t) {
    var n = ez(e, t),
        r = n.carrierCode,
        i = n.nationalNumber;
    return i !== e && (!eY(e, i, t) || t.possibleLengths() && !eQ(i, t)) ? {
        nationalNumber: e
    } : {
        nationalNumber: i,
        carrierCode: r
    }
}

function eY(e, t, n) {
    return !eG(e, n.nationalNumberPattern()) || !!eG(t, n.nationalNumberPattern())
}

function eQ(e, t) {
    switch (eI(e, t)) {
        case "TOO_SHORT":
        case "INVALID_LENGTH":
            return !1;
        default:
            return !0
    }
}

function eZ(e, t, n, r) {
    var i = t ? es(t, r) : n;
    if (0 === e.indexOf(i)) {
        (r = new J(r)).selectNumberingPlan(t, n);
        var o = e.slice(i.length),
            a = eq(o, r).nationalNumber,
            s = eq(e, r).nationalNumber;
        if (!eG(s, r.nationalNumberPattern()) && eG(a, r.nationalNumberPattern()) || "TOO_LONG" === eI(s, r)) return {
            countryCallingCode: i,
            number: o
        }
    }
    return {
        number: e
    }
}

function eJ(e, t, n, r) {
    if (!e) return {};
    if ("+" !== e[0]) {
        var i, o = eK(e, t, n, r);
        if (o && o !== e) i = !0, e = "+" + o;
        else {
            if (t || n) {
                var a = eZ(e, t, n, r),
                    s = a.countryCallingCode,
                    u = a.number;
                if (s) return {
                    countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
                    countryCallingCode: s,
                    number: u
                }
            }
            return {
                number: e
            }
        }
    }
    if ("0" === e[1]) return {};
    r = new J(r);
    for (var d = 2; d - 1 <= y && d <= e.length;) {
        var l = e.slice(1, d);
        if (r.hasCallingCode(l)) return r.selectNumberingPlan(l), {
            countryCallingCodeSource: i ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
            countryCallingCode: l,
            number: e.slice(d)
        };
        d++
    }
    return {}
}

function e0(e) {
    return e.replace(RegExp("[".concat(C, "]+"), "g"), " ").trim()
}
var e1 = /(\$\d)/;

function e2(e, t, n) {
    var r = n.useInternationalFormat,
        i = n.withNationalPrefix;
    n.carrierCode, n.metadata;
    var o = e.replace(new RegExp(t.pattern()), r ? t.internationalFormat() : i && t.nationalPrefixFormattingRule() ? t.format().replace(e1, t.nationalPrefixFormattingRule()) : t.format());
    return r ? e0(o) : o
}
var e3 = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;

function e5(e, t, n) {
    var r = new J(n);
    return (r.selectNumberingPlan(e, t), r.defaultIDDPrefix()) ? r.defaultIDDPrefix() : e3.test(r.IDDPrefix()) ? r.IDDPrefix() : void 0
}

function e4(e) {
    var t = e.number,
        n = e.ext;
    if (!t) return "";
    if ("+" !== t[0]) throw Error('"formatRFC3966()" expects "number" to be in E.164 format.');
    return "tel:".concat(t).concat(n ? ";ext=" + n : "")
}

function e7(e, t) {
    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (n) return (n = n.call(e)).next.bind(n);
    if (Array.isArray(e) || (n = e9(e)) || t && e && "number" == typeof e.length) {
        n && (e = n);
        var r = 0;
        return function() {
            return r >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[r++]
            }
        }
    }
    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function e9(e, t) {
    if (e) {
        if ("string" == typeof e) return e6(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return e6(e, t)
    }
}

function e6(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r
}

function e8(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function te(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? e8(Object(n), !0).forEach(function(t) {
            tt(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : e8(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}

function tt(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var tn = {
    formatExtension: function(e, t, n) {
        return "".concat(e).concat(n.ext()).concat(t)
    }
};

function tr(e, t, n, r) {
    if (n = n ? te(te({}, tn), n) : tn, r = new J(r), e.country && "001" !== e.country) {
        if (!r.hasCountry(e.country)) throw Error("Unknown country: ".concat(e.country));
        r.country(e.country)
    } else {
        if (!e.countryCallingCode) return e.phone || "";
        r.selectNumberingPlan(e.countryCallingCode)
    }
    var i, o = r.countryCallingCode(),
        a = n.v2 ? e.nationalNumber : e.phone;
    switch (t) {
        case "NATIONAL":
            if (!a) return "";
            return ta(i = ti(a, e.carrierCode, "NATIONAL", r, n), e.ext, r, n.formatExtension);
        case "INTERNATIONAL":
            if (!a) return "+".concat(o);
            return i = ti(a, null, "INTERNATIONAL", r, n), ta(i = "+".concat(o, " ").concat(i), e.ext, r, n.formatExtension);
        case "E.164":
            return "+".concat(o).concat(a);
        case "RFC3966":
            return e4({
                number: "+".concat(o).concat(a),
                ext: e.ext
            });
        case "IDD":
            if (!n.fromCountry) return;
            return ta(ts(a, e.carrierCode, o, n.fromCountry, r), e.ext, r, n.formatExtension);
        default:
            throw Error('Unknown "format" argument passed to "formatNumber()": "'.concat(t, '"'))
    }
}

function ti(e, t, n, r, i) {
    var o = to(r.formats(), e);
    return o ? e2(e, o, {
        useInternationalFormat: "INTERNATIONAL" === n,
        withNationalPrefix: !o.nationalPrefixIsOptionalWhenFormattingInNationalFormat() || !i || !1 !== i.nationalPrefix,
        carrierCode: t,
        metadata: r
    }) : e
}

function to(e, t) {
    for (var n, r = e7(e); !(n = r()).done;) {
        var i = n.value;
        if (i.leadingDigitsPatterns().length > 0) {
            var o = i.leadingDigitsPatterns()[i.leadingDigitsPatterns().length - 1];
            if (0 !== t.search(o)) continue
        }
        if (eG(t, i.pattern())) return i
    }
}

function ta(e, t, n, r) {
    return t ? r(e, t, n) : e
}

function ts(e, t, n, r, i) {
    if (es(r, i.metadata) === n) {
        var o = ti(e, t, "NATIONAL", i);
        return "1" === n ? n + " " + o : o
    }
    var a = e5(r, void 0, i.metadata);
    if (a) return "".concat(a, " ").concat(n, " ").concat(ti(e, null, "INTERNATIONAL", i))
}

function tu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function td(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? tu(Object(n), !0).forEach(function(t) {
            tl(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tu(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}

function tl(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function tc(e, t) {
    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}

function tf(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function th(e, t, n) {
    return t && tf(e.prototype, t), n && tf(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}
var tp = !1,
    tg = function() {
        function e(t, n, r) {
            if (tc(this, e), !t) throw TypeError("First argument is required");
            if ("string" != typeof t) throw TypeError("First argument must be a string");
            if ("string" == typeof t) {
                if ("+" === t[0] && !n) throw TypeError("`metadata` argument not passed");
                if (a(n) && a(n.countries)) {
                    r = n;
                    var i = t;
                    if (!tv.test(i)) throw Error('Invalid `number` argument passed: must consist of a "+" followed by digits');
                    var o = eJ(i, void 0, void 0, r),
                        s = o.countryCallingCode;
                    if (n = o.number, t = s, !n) throw Error("Invalid `number` argument passed: too short")
                }
            }
            if (!n) throw TypeError("`nationalNumber` argument is required");
            if ("string" != typeof n) throw TypeError("`nationalNumber` argument must be a string");
            eo(r);
            var u = tm(t, r),
                d = u.country,
                l = u.countryCallingCode;
            this.country = d, this.countryCallingCode = l, this.nationalNumber = n, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
                return r
            }
        }
        return th(e, [{
            key: "setExt",
            value: function(e) {
                this.ext = e
            }
        }, {
            key: "getPossibleCountries",
            value: function() {
                return this.country ? [this.country] : eU(this.countryCallingCode, this.nationalNumber, this.getMetadata())
            }
        }, {
            key: "isPossible",
            value: function() {
                return e_(this, {
                    v2: !0
                }, this.getMetadata())
            }
        }, {
            key: "isValid",
            value: function() {
                return eV(this, {
                    v2: !0
                }, this.getMetadata())
            }
        }, {
            key: "isNonGeographic",
            value: function() {
                return new J(this.getMetadata()).isNonGeographicCallingCode(this.countryCallingCode)
            }
        }, {
            key: "isEqual",
            value: function(e) {
                return this.number === e.number && this.ext === e.ext
            }
        }, {
            key: "getType",
            value: function() {
                return ej(this, {
                    v2: !0
                }, this.getMetadata())
            }
        }, {
            key: "format",
            value: function(e, t) {
                return tr(this, e, t ? td(td({}, t), {}, {
                    v2: !0
                }) : {
                    v2: !0
                }, this.getMetadata())
            }
        }, {
            key: "formatNational",
            value: function(e) {
                return this.format("NATIONAL", e)
            }
        }, {
            key: "formatInternational",
            value: function(e) {
                return this.format("INTERNATIONAL", e)
            }
        }, {
            key: "getURI",
            value: function(e) {
                return this.format("RFC3966", e)
            }
        }]), e
    }(),
    tb = function(e) {
        return /^[A-Z]{2}$/.test(e)
    };

function tm(e, t) {
    var n, r, i = new J(t);
    return tb(e) ? (n = e, i.selectNumberingPlan(n), r = i.countryCallingCode()) : (r = e, tp && i.isNonGeographicCallingCode(r) && (n = "001")), {
        country: n,
        countryCallingCode: r
    }
}
var tv = /^\+\d+$/;

function ty(e, t) {
    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (n) return (n = n.call(e)).next.bind(n);
    if (Array.isArray(e) || (n = tS(e)) || t && e && "number" == typeof e.length) {
        n && (e = n);
        var r = 0;
        return function() {
            return r >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[r++]
            }
        }
    }
    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function tS(e, t) {
    if (e) {
        if ("string" == typeof e) return t$(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return t$(e, t)
    }
}

function t$(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r
}

function tT(e, t) {
    var n = t.countries,
        r = (t.defaultCountry, t.metadata);
    r = new J(r);
    for (var i, o = ty(n); !(i = o()).done;) {
        var a = i.value;
        if (r.country(a), r.leadingDigits()) {
            if (e && 0 === e.search(r.leadingDigits())) return a
        } else if (ej({
                phone: e,
                country: a
            }, void 0, r.metadata)) return a
    }
}
var tw = !1;

function tP(e, t) {
    var n = t.nationalNumber,
        r = t.defaultCountry,
        i = t.metadata;
    if (tw && i.isNonGeographicCallingCode(e)) return "001";
    var o = i.getCountryCodesForCallingCode(e);
    return o ? 1 === o.length ? o[0] : tT(n, {
        countries: o,
        defaultCountry: r,
        metadata: i.metadata
    }) : void 0
}
var tA = "+",
    tM = "([" + S + "]|[\\-\\.\\(\\)]?)",
    tC = RegExp("^\\" + tA + tM + "*[" + S + "]" + tM + "*$", "g"),
    tO = S,
    tE = RegExp("^(" + ("[" + tO + "]+((\\-)*[" + tO) + "])*\\.)*" + ("[a-zA-Z]+((\\-)*[" + tO) + "])*\\.?$", "g"),
    tx = "tel:",
    tB = ";phone-context=",
    tI = ";isub=";

function tD(e) {
    var t = e.indexOf(tB);
    if (t < 0) return null;
    var n = t + tB.length;
    if (n >= e.length) return "";
    var r = e.indexOf(";", n);
    return r >= 0 ? e.substring(n, r) : e.substring(n)
}

function t_(e) {
    return null === e || 0 !== e.length && (tC.test(e) || tE.test(e))
}

function tk(e, t) {
    var n = t.extractFormattedPhoneNumber,
        r = tD(e);
    if (!t_(r)) throw new V("NOT_A_NUMBER");
    if (null === r) i = n(e) || "";
    else {
        i = "", r.charAt(0) === tA && (i += r);
        var i, o, a = e.indexOf(tx);
        o = a >= 0 ? a + tx.length : 0;
        var s = e.indexOf(tB);
        i += e.substring(o, s)
    }
    var u = i.indexOf(tI);
    if (u > 0 && (i = i.substring(0, u)), "" !== i) return i
}
var tG = 250,
    tN = RegExp("[" + O + S + "]"),
    tL = RegExp("[^" + S + "#]+$"),
    tR = !1;

function tH(e, t, n) {
    if (t = t || {}, n = new J(n), t.defaultCountry && !n.hasCountry(t.defaultCountry)) {
        if (t.v2) throw new V("INVALID_COUNTRY");
        throw Error("Unknown country: ".concat(t.defaultCountry))
    }
    var r = tF(e, t.v2, t.extract),
        i = r.number,
        o = r.ext,
        a = r.error;
    if (!i) {
        if (t.v2) {
            if ("TOO_SHORT" === a) throw new V("TOO_SHORT");
            throw new V("NOT_A_NUMBER")
        }
        return {}
    }
    var s = tU(i, t.defaultCountry, t.defaultCallingCode, n),
        u = s.country,
        d = s.nationalNumber,
        l = s.countryCallingCode,
        c = s.countryCallingCodeSource,
        f = s.carrierCode;
    if (!n.hasSelectedNumberingPlan()) {
        if (t.v2) throw new V("INVALID_COUNTRY");
        return {}
    }
    if (!d || d.length < m) {
        if (t.v2) throw new V("TOO_SHORT");
        return {}
    }
    if (d.length > v) {
        if (t.v2) throw new V("TOO_LONG");
        return {}
    }
    if (t.v2) {
        var h = new tg(l, d, n.metadata);
        return u && (h.country = u), f && (h.carrierCode = f), o && (h.ext = o), h.__countryCallingCodeSource = c, h
    }
    var p = (t.extended ? !!n.hasSelectedNumberingPlan() : !!u) && eG(d, n.nationalNumberPattern());
    return t.extended ? {
        country: u,
        countryCallingCode: l,
        carrierCode: f,
        valid: p,
        possible: !!p || !!(!0 === t.extended && n.possibleLengths() && ek(d, n)),
        phone: d,
        ext: o
    } : p ? tV(u, d, o) : {}
}

function tj(e, t, n) {
    if (e) {
        if (e.length > tG) {
            if (n) throw new V("TOO_LONG");
            return
        }
        if (!1 === t) return e;
        var r = e.search(tN);
        if (!(r < 0)) return e.slice(r).replace(tL, "")
    }
}

function tF(e, t, n) {
    var r = tk(e, {
        extractFormattedPhoneNumber: function(e) {
            return tj(e, n, t)
        }
    });
    if (!r) return {};
    if (!em(r)) return ev(r) ? {
        error: "TOO_SHORT"
    } : {};
    var i = eS(r);
    return i.ext ? i : {
        number: r
    }
}

function tV(e, t, n) {
    var r = {
        country: e,
        phone: t
    };
    return n && (r.ext = n), r
}

function tU(e, t, n, r) {
    var i, o = eJ(eM(e), t, n, r.metadata),
        a = o.countryCallingCodeSource,
        s = o.countryCallingCode,
        u = o.number;
    if (s) r.selectNumberingPlan(s);
    else {
        if (!u || !t && !n) return {};
        r.selectNumberingPlan(t, n), t ? i = t : tR && r.isNonGeographicCallingCode(n) && (i = "001"), s = n || es(t, r.metadata)
    }
    if (!u) return {
        countryCallingCodeSource: a,
        countryCallingCode: s
    };
    var d = eq(eM(u), r),
        l = d.nationalNumber,
        c = d.carrierCode,
        f = tP(s, {
            nationalNumber: l,
            defaultCountry: t,
            metadata: r
        });
    return f && (i = f, "001" === f || r.country(i)), {
        country: i,
        countryCallingCode: s,
        countryCallingCodeSource: a,
        nationalNumber: l,
        carrierCode: c
    }
}

function tW(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function tX(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? tW(Object(n), !0).forEach(function(t) {
            tK(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tW(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}

function tK(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function tz(e, t, n) {
    return tH(e, tX(tX({}, t), {}, {
        v2: !0
    }), n)
}

function tq(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function tY(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? tq(Object(n), !0).forEach(function(t) {
            tQ(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tq(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}

function tQ(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function tZ(e, t, n) {
    t && t.defaultCountry && !eu(t.defaultCountry, n) && (t = tY(tY({}, t), {}, {
        defaultCountry: void 0
    }));
    try {
        return tz(e, t, n)
    } catch (e) {
        if (e instanceof V);
        else throw e
    }
}

function tJ() {
    var e = b(arguments);
    return tZ(e.text, e.options, e.metadata)
}

function t0() {
    return i(tJ, arguments)
}
}, 1835: function(e, t, n) {
"use strict";
n.d(t, {
    Z: function() {
        return o
    }
});
var r = !0,
    i = "Invariant failed";

function o(e, t) {
    if (!e) {
        if (r) throw Error(i);
        var n = "function" == typeof t ? t() : t;
        throw Error(n ? "".concat(i, ": ").concat(n) : i)
    }
}
}, 8395: function(e, t, n) {
"use strict";

function r(e, t, n, r) {
    var i, o = arguments.length,
        a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
    else
        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
    return o > 3 && a && Object.defineProperty(t, n, a), a
}

function i(e, t) {
    var n, r, i, o = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        },
        a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
    return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }), a;

    function s(e) {
        return function(t) {
            return u([e, t])
        }
    }

    function u(s) {
        if (n) throw TypeError("Generator is already executing.");
        for (; a && (a = 0, s[0] && (o = 0)), o;) try {
            if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
            switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                case 0:
                case 1:
                    i = s;
                    break;
                case 4:
                    return o.label++, {
                        value: s[1],
                        done: !1
                    };
                case 5:
                    o.label++, r = s[1], s = [0];
                    continue;
                case 7:
                    s = o.ops.pop(), o.trys.pop();
                    continue;
                default:
                    if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                        o = 0;
                        continue
                    }
                    if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                        o.label = s[1];
                        break
                    }
                    if (6 === s[0] && o.label < i[1]) {
                        o.label = i[1], i = s;
                        break
                    }
                    if (i && o.label < i[2]) {
                        o.label = i[2], o.ops.push(s);
                        break
                    }
                    i[2] && o.ops.pop(), o.trys.pop();
                    continue
            }
            s = t.call(e, o)
        } catch (e) {
            s = [6, e], r = 0
        } finally {
            n = i = 0
        }
        if (5 & s[0]) throw s[1];
        return {
            value: s[0] ? s[1] : void 0,
            done: !0
        }
    }
}
n.d(t, {
    Jh: function() {
        return i
    },
    gn: function() {
        return r
    }
})
}, 434: function(e, t, n) {
"use strict";
let r;
n.d(t, {
    Z: function() {
        return d
    }
});
var i = {
    randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
};
let o = new Uint8Array(16);

function a() {
    if (!r) {
        if ("undefined" == typeof crypto || !crypto.getRandomValues) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        r = crypto.getRandomValues.bind(crypto)
    }
    return r(o)
}
let s = [];
for (let e = 0; e < 256; ++e) s.push((e + 256).toString(16).slice(1));

function u(e, t = 0) {
    return (s[e[t + 0]] + s[e[t + 1]] + s[e[t + 2]] + s[e[t + 3]] + "-" + s[e[t + 4]] + s[e[t + 5]] + "-" + s[e[t + 6]] + s[e[t + 7]] + "-" + s[e[t + 8]] + s[e[t + 9]] + "-" + s[e[t + 10]] + s[e[t + 11]] + s[e[t + 12]] + s[e[t + 13]] + s[e[t + 14]] + s[e[t + 15]]).toLowerCase()
}
var d = function(e, t, n) {
    if (i.randomUUID && !t && !e) return i.randomUUID();
    let r = (e = e || {}).random ? ? e.rng ? .() ? ? a();
    if (r.length < 16) throw Error("Random bytes length must be >= 16");
    if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
        if ((n = n || 0) < 0 || n + 16 > t.length) throw RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);
        for (let e = 0; e < 16; ++e) t[n + e] = r[e];
        return t
    }
    return u(r)
}
}
}]);