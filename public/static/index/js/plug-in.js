//判断是否是谷歌浏览器
var userAgent = navigator.userAgent;
if (userAgent.indexOf('Chrome') > -1 && $(window).width() > 1200) {
    ! function(a) {
        a(document).ready(function() {
            function q() {
                if (document.URL.indexOf("google.com/reader/view") > -1 && (g = !0), i)
                    for (var a = i.split(/[,\n] ?/), b = a.length; b--;)
                        if (document.URL.indexOf(a[b]) > -1) { D("mousewheel", v), g = !0; break }
            }

            function r() {
                if (document.body) {
                    var a = document.body,
                        b = document.documentElement,
                        c = window.innerHeight,
                        d = a.scrollHeight;
                    if (o = document.compatMode.indexOf("CSS") >= 0 ? b : a, n = a, q(), l = !0, top != self) j = !0;
                    else if (d > c && (a.offsetHeight <= c || b.offsetHeight <= c) && (o.style.height = "auto", o.offsetHeight <= c)) {
                        var e = document.createElement("div");
                        e.style.clear = "both", a.appendChild(e)
                    }
                    if (document.URL.indexOf("mail.google.com") > -1) {
                        var f = document.createElement("style");
                        f.innerHTML = ".iu { visibility: hidden }", (document.getElementsByTagName("head")[0] || b).appendChild(f)
                    }
                    m || (a.style.backgroundAttachment = "scroll"), g && D("keydown", w)
                }
            }

            function u(c, e, f, g) {
                if (g || (g = 1e3), F(e, f), s.push({ x: e, y: f, lastX: 0 > e ? .99 : -.99, lastY: 0 > f ? .99 : -.99, start: +new Date }), !t) {
                    var h = function() {
                        for (var i = +new Date, j = 0, k = 0, l = 0; l < s.length; l++) {
                            var m = s[l],
                                n = i - m.start,
                                o = n >= b,
                                p = o ? 1 : n / b;
                            d && (p = H(p));
                            var q = m.x * p - m.lastX >> 0,
                                r = m.y * p - m.lastY >> 0;
                            j += q, k += r, m.lastX += q, m.lastY += r, o && (s.splice(l, 1), l--)
                        }
                        if (e) {
                            var u = c.scrollLeft;
                            c.scrollLeft += j, j && c.scrollLeft === u && (e = 0)
                        }
                        if (f) {
                            var v = c.scrollTop;
                            c.scrollTop += k, k && c.scrollTop === v && (f = 0)
                        }
                        e || f || (s = []), s.length ? setTimeout(h, g / a + 1) : t = !1
                    };
                    setTimeout(h, 0), t = !0
                }
            }

            function v(a) {
                l || r();
                var b = a.target;
                var version = getChromeVersion();
                var d = B(b);
                var vision = getChromeVersion();
                if (vision > 60) { d = document.documentElement }

                function getChromeVersion() { var arr = navigator.userAgent.split(' '); var chromeVersion = ''; for (var i = 0; i < arr.length; i++) { if (/chrome/i.test(arr[i])) chromeVersion = arr[i] } if (chromeVersion) { return Number(chromeVersion.split('/')[1].split('.')[0]) } else { return false } }
                if (!d || a.defaultPrevented || E(n, "embed") || E(b, "embed") && /\.pdf/i.test(b.src)) return !0;
                var e = a.wheelDeltaX || 0,
                    f = a.wheelDeltaY || 0;
                e || f || (f = a.wheelDelta || 0), Math.abs(e) > 1.2 && (e *= c / 120), Math.abs(f) > 1.2 && (f *= c / 120), u(d, -e, -f)
            }

            function w(a) {
                var b = a.target,
                    c = a.ctrlKey || a.altKey || a.metaKey;
                if (/input|textarea|embed/i.test(b.nodeName) || b.isContentEditable || a.defaultPrevented || c) return !0;
                if (E(b, "button") && a.keyCode === p.spacebar) return !0;
                var d, e = 0,
                    f = 0,
                    g = B(n),
                    i = g.clientHeight;
                switch (g == document.body && (i = window.innerHeight), a.keyCode) {
                    case p.up:
                        f = -h;
                        break;
                    case p.down:
                        f = h;
                        break;
                    case p.spacebar:
                        d = a.shiftKey ? 1 : -1, f = .9 * -d * i;
                        break;
                    case p.pageup:
                        f = .9 * -i;
                        break;
                    case p.pagedown:
                        f = .9 * i;
                        break;
                    case p.home:
                        f = -g.scrollTop;
                        break;
                    case p.end:
                        var j = g.scrollHeight - g.scrollTop - i;
                        f = j > 0 ? j + 10 : 0;
                        break;
                    case p.left:
                        e = -h;
                        break;
                    case p.right:
                        e = h;
                        break;
                    default:
                        return !0
                }
                u(g, e, f), a.preventDefault()
            }

            function x(a) { n = a.target }

            function A(a, b) { for (var c = a.length; c--;) y[z(a[c])] = b; return b }

            function B(a) {
                var b = [],
                    c = o.scrollHeight;
                do { var d = y[z(a)]; if (d) return A(b, d); if (b.push(a), c === a.scrollHeight) { if (!j || o.clientHeight + 10 < c) return A(b, document.body) } else if (a.clientHeight + 10 < a.scrollHeight && (overflow = getComputedStyle(a, "").getPropertyValue("overflow"), "scroll" === overflow || "auto" === overflow)) return A(b, a) } while (a = a.parentNode)
            }

            function C(a, b, c) { window.addEventListener(a, b, c || !1) }

            function D(a, b, c) { window.removeEventListener(a, b, c || !1) }

            function E(a, b) { return a.nodeName.toLowerCase() === b.toLowerCase() }

            function F(a, b) { a = a > 0 ? 1 : -1, b = b > 0 ? 1 : -1, (k.x !== a || k.y !== b) && (k.x = a, k.y = b, s = []) }

            function G(a) { var b, c, d; return a *= e, 1 > a ? b = a - (1 - Math.exp(-a)) : (c = Math.exp(-1), a -= 1, d = 1 - Math.exp(-a), b = c + d * (1 - c)), b * f }

            function H(a) { return a >= 1 ? 1 : 0 >= a ? 0 : (1 == f && (f /= G(1)), G(a)) }
            var n, o, a = 150,
                b = 600,
                c = 150,
                d = !0,
                e = 5,
                f = 1,
                g = !1,
                h = 50,
                i = "",
                j = !1,
                k = { x: 0, y: 0 },
                l = !1,
                m = !0,
                p = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36 },
                s = [],
                t = !1,
                y = {};
            setInterval(function() { y = {} }, 1e4);
            var z = function() { var a = 0; return function(b) { return b.uniqueID || (b.uniqueID = a++) } }();
            /chrome/.test(navigator.userAgent.toLowerCase()) && (C("mousedown", x), C("mousewheel", v), C("keydown", w), C("load", r))
        })
    }(jQuery);
}
/*! pace 0.4.17 */
(function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V = [].slice,
        W = {}.hasOwnProperty,
        X = function(a, b) {
            function c() { this.constructor = a }
            for (var d in b) W.call(b, d) && (a[d] = b[d]);
            return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
        },
        Y = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    for (t = { catchupTime: 500, initialRate: .03, minTime: 500, ghostTime: 500, maxProgressPerFrame: 10, easeFactor: 1.25, startOnPageLoad: !0, restartOnPushState: !0, restartOnRequestAfter: 500, target: "body", elements: { checkInterval: 100, selectors: ["body"] }, eventLag: { minSamples: 10, sampleCount: 3, lagThreshold: 3 }, ajax: { trackMethods: ["GET"], trackWebSockets: !1 } }, B = function() { var a; return null != (a = "undefined" != typeof performance && null !== performance ? "function" == typeof performance.now ? performance.now() : void 0 : void 0) ? a : +new Date }, D = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, s = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == D && (D = function(a) { return setTimeout(a, 50) }, s = function(a) { return clearTimeout(a) }), F = function(a) { var b, c; return b = B(), (c = function() { var d; return d = B() - b, d >= 33 ? (b = B(), a(d, function() { return D(c) })) : setTimeout(c, 33 - d) })() }, E = function() { var a, b, c; return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? V.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b] }, u = function() {
            var a, b, c, d, e, f, g;
            for (b = arguments[0], d = 2 <= arguments.length ? V.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++)
                if (c = d[f])
                    for (a in c) W.call(c, a) && (e = c[a], null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? u(b[a], e) : b[a] = e);
            return b
        }, p = function(a) { var b, c, d, e, f; for (c = b = 0, e = 0, f = a.length; f > e; e++) d = a[e], c += Math.abs(d), b++; return c / b }, w = function(a, b) { var c, d, e; if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) { if (c = e.getAttribute("data-pace-" + a), !b) return c; try { return JSON.parse(c) } catch (f) { return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0 } } }, g = function() {
            function a() {}
            return a.prototype.on = function(a, b, c, d) { var e; return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({ handler: b, ctx: c, once: d }) }, a.prototype.once = function(a, b, c) { return this.on(a, b, c, !0) }, a.prototype.off = function(a, b) { var c, d, e; if (null != (null != (d = this.bindings) ? d[a] : void 0)) { if (null == b) return delete this.bindings[a]; for (c = 0, e = []; c < this.bindings[a].length;) this.bindings[a][c].handler === b ? e.push(this.bindings[a].splice(c, 1)) : e.push(c++); return e } }, a.prototype.trigger = function() { var a, b, c, d, e, f, g, h, i; if (c = arguments[0], a = 2 <= arguments.length ? V.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) { for (e = 0, i = []; e < this.bindings[c].length;) h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), f ? i.push(this.bindings[c].splice(e, 1)) : i.push(e++); return i } }, a
        }(), null == window.Pace && (window.Pace = {}), u(Pace, g.prototype), C = Pace.options = u({}, t, window.paceOptions, w()), S = ["ajax", "document", "eventLag", "elements"], O = 0, Q = S.length; Q > O; O++) I = S[O], C[I] === !0 && (C[I] = t[I]);
    i = function(a) {
        function b() { return T = b.__super__.constructor.apply(this, arguments) }
        return X(b, a), b
    }(Error), b = function() {
        function a() { this.progress = 0 }
        return a.prototype.getElement = function() {
            var a;
            if (null == this.el) {
                if (a = document.querySelector(C.target), !a) throw new i;
                this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace("pace-done", ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el)
            }
            return this.el
        }, a.prototype.finish = function() { var a; return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done" }, a.prototype.update = function(a) { return this.progress = a, this.render() }, a.prototype.destroy = function() { try { this.getElement().parentNode.removeChild(this.getElement()) } catch (a) { i = a } return this.el = void 0 }, a.prototype.render = function() { var a, b; return null == document.querySelector(C.target) ? !1 : (a = this.getElement(), a.children[0].style.width = "" + this.progress + "%", (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? b = "99" : (b = this.progress < 10 ? "0" : "", b += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + b)), this.lastRenderedProgress = this.progress) }, a.prototype.done = function() { return this.progress >= 100 }, a
    }(), h = function() {
        function a() { this.bindings = {} }
        return a.prototype.trigger = function(a, b) { var c, d, e, f, g; if (null != this.bindings[a]) { for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.call(this, b)); return g } }, a.prototype.on = function(a, b) { var c; return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b) }, a
    }(), N = window.XMLHttpRequest, M = window.XDomainRequest, L = window.WebSocket, v = function(a, b) {
        var c, d, e, f;
        f = [];
        for (d in b.prototype) try { e = b.prototype[d], null == a[d] && "function" != typeof e ? f.push(a[d] = e) : f.push(void 0) } catch (g) { c = g }
        return f
    }, z = [], Pace.ignore = function() { var a, b, c; return b = arguments[0], a = 2 <= arguments.length ? V.call(arguments, 1) : [], z.unshift("ignore"), c = b.apply(null, a), z.shift(), c }, Pace.track = function() { var a, b, c; return b = arguments[0], a = 2 <= arguments.length ? V.call(arguments, 1) : [], z.unshift("track"), c = b.apply(null, a), z.shift(), c }, H = function(a) { var b; if (null == a && (a = "GET"), "track" === z[0]) return "force"; if (!z.length && C.ajax) { if ("socket" === a && C.ajax.trackWebSockets) return !0; if (b = a.toUpperCase(), Y.call(C.ajax.trackMethods, b) >= 0) return !0 } return !1 }, j = function(a) {
        function b() {
            var a, c = this;
            b.__super__.constructor.apply(this, arguments), a = function(a) { var b; return b = a.open, a.open = function(d, e) { return H(d) && c.trigger("request", { type: d, url: e, request: a }), b.apply(a, arguments) } }, window.XMLHttpRequest = function(b) { var c; return c = new N(b), a(c), c }, v(window.XMLHttpRequest, N), null != M && (window.XDomainRequest = function() { var b; return b = new M, a(b), b }, v(window.XDomainRequest, M)), null != L && C.ajax.trackWebSockets && (window.WebSocket = function(a, b) { var d; return d = new L(a, b), H("socket") && c.trigger("request", { type: "socket", url: a, protocols: b, request: d }), d }, v(window.WebSocket, L))
        }
        return X(b, a), b
    }(h), P = null, x = function() { return null == P && (P = new j), P }, x().on("request", function(b) {
        var c, d, e, f;
        return f = b.type, e = b.request, Pace.running || C.restartOnRequestAfter === !1 && "force" !== H(f) ? void 0 : (d = arguments, c = C.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function() {
            var b, c, g, h, i, j;
            if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
                for (Pace.restart(), i = Pace.sources, j = [], c = 0, g = i.length; g > c; c++) {
                    if (I = i[c], I instanceof a) { I.watch.apply(I, d); break }
                    j.push(void 0)
                }
                return j
            }
        }, c))
    }), a = function() {
        function a() {
            var a = this;
            this.elements = [], x().on("request", function() { return a.watch.apply(a, arguments) })
        }
        return a.prototype.watch = function(a) { var b, c, d; return d = a.type, b = a.request, c = "socket" === d ? new m(b) : new n(b), this.elements.push(c) }, a
    }(), n = function() {
        function a(a) {
            var b, c, d, e, f, g, h = this;
            if (this.progress = 0, null != window.ProgressEvent)
                for (c = null, a.addEventListener("progress", function(a) { return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2 }), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) b = g[d], a.addEventListener(b, function() { return h.progress = 100 });
            else f = a.onreadystatechange, a.onreadystatechange = function() { var b; return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0 }
        }
        return a
    }(), m = function() {
        function a(a) { var b, c, d, e, f = this; for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) b = e[c], a.addEventListener(b, function() { return f.progress = 100 }) }
        return a
    }(), d = function() {
        function a(a) { var b, c, d, f; for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) b = f[c], this.elements.push(new e(b)) }
        return a
    }(), e = function() {
        function a(a) { this.selector = a, this.progress = 0, this.check() }
        return a.prototype.check = function() { var a = this; return document.querySelector(this.selector) ? this.done() : setTimeout(function() { return a.check() }, C.elements.checkInterval) }, a.prototype.done = function() { return this.progress = 100 }, a
    }(), c = function() {
        function a() {
            var a, b, c = this;
            this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function() { return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0 }
        }
        return a.prototype.states = { loading: 0, interactive: 50, complete: 100 }, a
    }(), f = function() {
        function a() {
            var a, b, c, d, e, f = this;
            this.progress = 0, a = 0, e = [], d = 0, c = B(), b = setInterval(function() { var g; return g = B() - c - 50, c = B(), e.push(g), e.length > C.eventLag.sampleCount && e.shift(), a = p(e), ++d >= C.eventLag.minSamples && a < C.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3)) }, 50)
        }
        return a
    }(), l = function() {
        function a(a) { this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = C.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = E(this.source, "progress")) }
        return a.prototype.tick = function(a, b) { var c; return null == b && (b = E(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / C.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, C.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + C.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress }, a
    }(), J = null, G = null, q = null, K = null, o = null, r = null, Pace.running = !1, y = function() { return C.restartOnPushState ? Pace.restart() : void 0 }, null != window.history.pushState && (R = window.history.pushState, window.history.pushState = function() { return y(), R.apply(window.history, arguments) }), null != window.history.replaceState && (U = window.history.replaceState, window.history.replaceState = function() { return y(), U.apply(window.history, arguments) }), k = { ajax: a, elements: d, document: c, eventLag: f }, (A = function() { var a, c, d, e, f, g, h, i; for (Pace.sources = J = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) a = g[c], C[a] !== !1 && J.push(new k[a](C[a])); for (i = null != (h = C.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) I = i[d], J.push(new I(C)); return Pace.bar = q = new b, G = [], K = new l })(), Pace.stop = function() { return Pace.trigger("stop"), Pace.running = !1, q.destroy(), r = !0, null != o && ("function" == typeof s && s(o), o = null), A() }, Pace.restart = function() { return Pace.trigger("restart"), Pace.stop(), Pace.start() }, Pace.go = function() {
        return Pace.running = !0, q.render(), r = !1, o = F(function(a, b) {
            var c, d, e, f, g, h, i, j, k, m, n, o, p, s, t, u, v;
            for (j = 100 - q.progress, d = o = 0, e = !0, h = p = 0, t = J.length; t > p; h = ++p)
                for (I = J[h], m = null != G[h] ? G[h] : G[h] = [], g = null != (v = I.elements) ? v : [I], i = s = 0, u = g.length; u > s; i = ++s) f = g[i], k = null != m[i] ? m[i] : m[i] = new l(f), e &= k.done, k.done || (d++, o += k.tick(a));
            return c = o / d, q.update(K.tick(a, c)), n = B(), q.done() || e || r ? (q.update(100), Pace.trigger("done"), setTimeout(function() { return q.finish(), Pace.running = !1, Pace.trigger("hide") }, Math.max(C.ghostTime, Math.min(C.minTime, B() - n)))) : b()
        })
    }, Pace.start = function(a) { u(C, a), Pace.running = !0; try { q.render() } catch (b) { i = b } return document.querySelector(".pace") ? (Pace.trigger("start"), Pace.go()) : setTimeout(Pace.start, 50) }, "function" == typeof define && define.amd ? define(function() { return Pace }) : "object" == typeof exports ? module.exports = Pace : C.startOnPageLoad && Pace.start()
}).call(this);
//锚链接 smoothscroll
/*使用方法链接导航<a data-scroll href="#demo">锚链接</a>*/
eval(function(p, a, c, k, e, r) {
    e = function(c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function(e) { return r[e] }];
        e = function() { return '\\w+' };
        c = 1
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('(7(a,b){6(12 1r===\'7\'&&1r.2j){1r([],b(a))}Z 6(12 1O===\'S\'){2o.1O=b(a)}Z{a.2K=b(a)}})(12 1f!==\'2k\'?1f:24.1w||24.1f,7(u){\'37 2g\';3 v={};3 w=\'13\'1e L&&\'1g\'1e u;3 x,T,N,O,X;3 y={1P:\'[1o-1H]\',1s:\'[1o-1H-2n]\',1L:2H,1x:\'1V\',1Q:0,1E:11,1A:7(){}};3 z=7(){3 c={};3 d=Q;3 i=0;3 e=1d.14;6(V.15.17.18(1d[0])===\'[S 2L]\'){d=1d[0];i++}3 f=7(a){1p(3 b 1e a){6(V.15.2i.18(a,b)){6(d&&V.15.17.18(a[b])===\'[S V]\'){c[b]=z(11,c[b],a[b])}Z{c[b]=a[b]}}}};1p(;i<e;i++){3 g=1d[i];f(g)}9 c};3 A=7(a){9 R.1a(a.1k,a.1h,a.1b)};3 B=7(a,b){3 c=b.1c(0);3 d=\'1G\'1e L.P;3 e,1n;6(c===\'[\'){b=b.Y(1,b.14-2);e=b.2p(\'=\');6(e.14>1){1n=11;e[1]=e[1].1R(/"/g,\'\').1R(/\'/g,\'\')}}1p(;a&&a!==L&&a.2I===1;a=a.2J){6(c===\'.\'){6(d){6(a.1G.1S(b.Y(1))){9 a}}Z{6(1U 2U(\'(^|\\\\s)\'+b.Y(1)+\'(\\\\s|$)\').38(a.29)){9 a}}}6(c===\'#\'){6(a.2d===b.Y(1)){9 a}}6(c===\'[\'){6(a.2e(e[0])){6(1n){6(a.1W(e[0])===e[1]){9 a}}Z{9 a}}}6(a.1Z.20()===b){9 a}}9 M};v.1t=7(a){6(a.1c(0)===\'#\'){a=a.Y(1)}3 b=2m(a);3 c=b.14;3 d=-1;3 e;3 f=\'\';3 g=b.1u(0);1v(++d<c){e=b.1u(d);6(e===3a){2q 1U 2r(\'2s 2t: 2z 2A 1S U+2C.\');}6((e>=2E&&e<=2F)||e==2G||(d===0&&e>=1i&&e<=1j)||(d===1&&e>=1i&&e<=1j&&g===1z)){f+=\'\\\\\'+e.17(16)+\' \';1B}6(e>=2M||e===1z||e===2N||e>=1i&&e<=1j||e>=2O&&e<=2P||e>=2Q&&e<=2S){f+=b.1c(d);1B}f+=\'\\\\\'+b.1c(d)}9\'#\'+f};3 C=7(a,b){3 c;6(a===\'2W\')c=b*b;6(a===\'33\')c=b*(2-b);6(a===\'36\')c=b<0.5?2*b*b:-1+(4-2*b)*b;6(a===\'39\')c=b*b*b;6(a===\'25\')c=(--b)*b*b+1;6(a===\'1V\')c=b<0.5?4*b*b*b:(b-1)*(2*b-2)*(2*b-2)+1;6(a===\'26\')c=b*b*b*b;6(a===\'27\')c=1-(--b)*b*b*b;6(a===\'28\')c=b<0.5?8*b*b*b*b:1-8*(--b)*b*b*b;6(a===\'2a\')c=b*b*b*b*b;6(a===\'2b\')c=1+(--b)*b*b*b*b;6(a===\'2c\')c=b<0.5?16*b*b*b*b*b:1+16*(--b)*b*b*b*b;9 c||b};3 D=7(a,b,c){3 d=0;6(a.1C){2f{d+=a.1D;a=a.1C}1v(a)}d=R.1a(d-b-c,0);9 R.2h(d,F()-E())};3 E=7(){9 R.1a(L.P.1b,1w.1F||0)};3 F=7(){9 R.1a(u.L.1l.1k,u.L.P.1k,u.L.1l.1h,u.L.P.1h,u.L.1l.1b,u.L.P.1b)};3 G=7(a){9!a||!(12 1m===\'S\'&&12 1m.1I===\'7\')?{}:1m.1I(a)};3 H=7(a,b){6(u.1J.1K&&(b||b===\'11\')&&u.W.1M!==\'2u:\'){u.1J.1K(M,M,[u.W.1M,\'//\',u.W.2v,u.W.2w,u.W.2x,a].2y(\'\'))}};3 I=7(a){9 a===M?0:(A(a)+a.1D)};v.1N=7(e,f,g){3 h=G(f?f.1W(\'1o-2B\'):M);3 i=z(x||y,g||{},h);3 j=V.15.17.18(e)===\'[S 2D]\'?11:Q;3 k=j?M:(e===\'#\'?u.L.P:u.L.13(e));6(!j&&!k)9;3 l=u.1q;6(!N){N=u.L.13(i.1s)}6(!O){O=I(N)}3 m=j?e:D(k,O,1T(i.1Q,10));3 n=m-l;3 o=F();3 p=0;3 q,19;6(!j){H(e,i.1E)}3 r=7(a,b,c){3 d=u.1q;6(a==b||d==b||((u.1F+d)>=o)){1X(c);6(!j){k.2R()}i.1A(e,f)}};3 s=7(){p+=16;q=(p/1T(i.1L,10));q=(q>1)?1:q;19=l+(n*C(i.1x,q));u.1Y(0,R.2T(19));r(19,m,X)};3 t=7(){1X(X);X=2V(s,16)};6(u.1q===0){u.1Y(0,0)}t()};3 J=7(a){6(a.2X!==0||a.2Y||a.2Z)9;3 b=B(a.30,x.1P);6(b&&b.1Z.20()===\'a\'){a.31();3 c=v.1t(b.32);v.1N(c,b,x)}};3 K=7(a){6(!T){T=34(7(){T=M;O=I(N)},35)}};v.21=7(){6(!x)9;u.L.22(\'23\',J,Q);u.22(\'1y\',K,Q);x=M;T=M;N=M;O=M;X=M};v.2l=7(a){6(!w)9;v.21();x=z(y,a||{});N=u.L.13(x.1s);O=I(N);u.L.1g(\'23\',J,Q);6(N){u.1g(\'1y\',K,Q)}};9 v});', 62, 197, '|||var|||if|function||return||||||||||||||||||||||||||||||||||||||document|null|fixedHeader|headerHeight|documentElement|false|Math|object|eventTimeout||Object|location|animationInterval|substr|else||true|typeof|querySelector|length|prototype||toString|call|position|max|clientHeight|charAt|arguments|in|global|addEventListener|offsetHeight|0x0030|0x0039|scrollHeight|body|JSON|value|data|for|pageYOffset|define|selectorHeader|escapeCharacters|charCodeAt|while|window|easing|resize|0x002D|callback|continue|offsetParent|offsetTop|updateURL|innerHeight|classList|scroll|parse|history|pushState|speed|protocol|animateScroll|exports|selector|offset|replace|contains|parseInt|new|easeInOutCubic|getAttribute|clearInterval|scrollTo|tagName|toLowerCase|destroy|removeEventListener|click|this|easeOutCubic|easeInQuart|easeOutQuart|easeInOutQuart|className|easeInQuint|easeOutQuint|easeInOutQuint|id|hasAttribute|do|strict|min|hasOwnProperty|amd|undefined|init|String|header|module|split|throw|InvalidCharacterError|Invalid|character|file|host|pathname|search|join|the|input|options|0000|Number|0x0001|0x001F|0x007F|500|nodeType|parentNode|smoothScroll|Boolean|0x0080|0x005F|0x0041|0x005A|0x0061|focus|0x007A|floor|RegExp|setInterval|easeInQuad|button|metaKey|ctrlKey|target|preventDefault|hash|easeOutQuad|setTimeout|66|easeInOutQuad|use|test|easeInCubic|0x0000'.split('|'), 0, {}));
/*wow*/
/*! WOW - v1.0.1 - 2014-09-03
 * Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */
(function() {
    var a, b, c, d, e, f = function(a, b) { return function() { return a.apply(b, arguments) } },
        g = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) { var c, d; for (c in b) d = b[c], null == a[c] && (a[c] = d); return a }, a.prototype.isMobile = function(a) { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a) }, a.prototype.addEvent = function(a, b, c) { return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c }, a.prototype.removeEvent = function(a, b, c) { return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b] }, a.prototype.innerHeight = function() { return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight }, a
    }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() { this.keys = [], this.values = [] }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                if (c = f[b], c === a) return this.values[b]
        }, a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a), this.values.push(b)
        }, a
    }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() { "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.") }
        return a.notSupported = !0, a.prototype.observe = function() {}, a
    }()), d = this.getComputedStyle || function(a) { return this.getPropertyValue = function(b) { var c; return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) { return b.toUpperCase() }), (null != (c = a.currentStyle) ? c[b] : void 0) || null }, this }, e = /(\-([a-z]){1})/g, this.WOW = function() {
        function e(a) { null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c }
        return e.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0 }, e.prototype.init = function() { var a; return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [] }, e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function() { var a, c, d, e; for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b); return e }.call(this), this.all = function() { var a, c, d, e; for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b); return e }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else {
                    for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
                    this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)
                }
            return this.config.live ? new a(function(a) { return function(b) { var c, d, e, f, g; for (g = [], e = 0, f = b.length; f > e; e++) d = b[e], g.push(function() { var a, b, e, f; for (e = d.addedNodes || [], f = [], a = 0, b = e.length; b > a; a++) c = e[a], f.push(this.doSync(c)); return f }.call(a)); return g } }(this)).observe(document.body, { childList: !0, subtree: !0 }) : void 0
        }, e.prototype.stop = function() { return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0 }, e.prototype.sync = function() { return a.notSupported ? this.doSync(this.element) : void 0 }, e.prototype.doSync = function(a) { var b, c, d, e, f; if (!this.stopped) { if (null == a && (a = this.element), 1 !== a.nodeType) return; for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.applyStyle(b, !0), this.boxes.push(b), this.all.push(b), f.push(this.scrolled = !0)) : f.push(void 0); return f } }, e.prototype.show = function(a) { return this.applyStyle(a), a.className = "" + a.className + " " + this.config.animateClass }, e.prototype.applyStyle = function(a, b) { var c, d, e; return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) { return function() { return f.customStyle(a, b, d, c, e) } }(this)) }, e.prototype.animate = function() { return "requestAnimationFrame" in window ? function(a) { return window.requestAnimationFrame(a) } : function(a) { return a() } }(), e.prototype.resetStyle = function() { var a, b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.setAttribute("style", "visibility: visible;")); return e }, e.prototype.customStyle = function(a, b, c, d, e) { return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, { animationDuration: c }), d && this.vendorSet(a.style, { animationDelay: d }), e && this.vendorSet(a.style, { animationIterationCount: e }), this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }), a }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            f = [];
            for (c in b) d = b[c], a["" + c] = d, f.push(function() { var b, f, g, h; for (g = this.vendors, h = [], b = 0, f = g.length; f > b; b++) e = g[b], h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d); return h }.call(this));
            return f
        }, e.prototype.vendorCSS = function(a, b) { var c, e, f, g, h, i; for (e = d(a), c = e.getPropertyCSSValue(b), i = this.vendors, g = 0, h = i.length; h > g; g++) f = i[g], c = c || e.getPropertyCSSValue("-" + f + "-" + b); return c }, e.prototype.animationName = function(a) { var b; try { b = this.vendorCSS(a, "animation-name").cssText } catch (c) { b = d(a).getPropertyValue("animation-name") } return "none" === b ? "" : b }, e.prototype.cacheAnimationName = function(a) { return this.animationNameCache.set(a, this.animationName(a)) }, e.prototype.cachedAnimationName = function(a) { return this.animationNameCache.get(a) }, e.prototype.scrollHandler = function() { return this.scrolled = !0 }, e.prototype.scrollCallback = function() { var a; return !this.scrolled || (this.scrolled = !1, this.boxes = function() { var b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a)); return e }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop() }, e.prototype.offsetTop = function(a) { for (var b; void 0 === a.offsetTop;) a = a.parentNode; for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop; return b }, e.prototype.isVisible = function(a) { var b, c, d, e, f; return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f }, e.prototype.util = function() { return null != this._util ? this._util : this._util = new b }, e.prototype.disabled = function() { return !this.config.mobile && this.util().isMobile(navigator.userAgent) }, e
    }()
}).call(this);
/*mousewheel*/
(function(a) {
    function d(b) {
        var c = b || window.event,
            d = [].slice.call(arguments, 1),
            e = 0,
            f = !0,
            g = 0,
            h = 0;
        return b = a.event.fix(c), b.type = "mousewheel", c.wheelDelta && (e = c.wheelDelta / 120), c.detail && (e = -c.detail / 3), h = e, c.axis !== undefined && c.axis === c.HORIZONTAL_AXIS && (h = 0, g = -1 * e), c.wheelDeltaY !== undefined && (h = c.wheelDeltaY / 120), c.wheelDeltaX !== undefined && (g = -1 * c.wheelDeltaX / 120), d.unshift(b, e, g, h), (a.event.dispatch || a.event.handle).apply(this, d)
    }
    var b = ["DOMMouseScroll", "mousewheel"];
    if (a.event.fixHooks)
        for (var c = b.length; c;) a.event.fixHooks[b[--c]] = a.event.mouseHooks;
    a.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var a = b.length; a;) this.addEventListener(b[--a], d, !1);
            else this.onmousewheel = d
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var a = b.length; a;) this.removeEventListener(b[--a], d, !1);
            else this.onmousewheel = null
        }
    }, a.fn.extend({ mousewheel: function(a) { return a ? this.bind("mousewheel", a) : this.trigger("mousewheel") }, unmousewheel: function(a) { return this.unbind("mousewheel", a) } })
})(jQuery);
/*iscroll*/
(function(window, document, Math) {
    var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) { window.setTimeout(callback, 1000 / 60) };
    var utils = (function() {
        var me = {};
        var _elementStyle = document.createElement('div').style;
        var _vendor = (function() {
            var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
                transform, i = 0,
                l = vendors.length;
            for (; i < l; i++) { transform = vendors[i] + 'ransform'; if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1) }
            return false
        })();

        function _prefixStyle(style) { if (_vendor === false) return false; if (_vendor === '') return style; return _vendor + style.charAt(0).toUpperCase() + style.substr(1) }
        me.getTime = Date.now || function getTime() { return new Date().getTime() };
        me.extend = function(target, obj) { for (var i in obj) { target[i] = obj[i] } };
        me.addEvent = function(el, type, fn, capture) { el.addEventListener(type, fn, !!capture) };
        me.removeEvent = function(el, type, fn, capture) { el.removeEventListener(type, fn, !!capture) };
        me.prefixPointerEvent = function(pointerEvent) { return window.MSPointerEvent ? 'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8) : pointerEvent };
        me.momentum = function(current, start, time, lowerMargin, wrapperSize, deceleration) {
            var distance = current - start,
                speed = Math.abs(distance) / time,
                destination, duration;
            deceleration = deceleration === undefined ? 0.0006 : deceleration;
            destination = current + (speed * speed) / (2 * deceleration) * (distance < 0 ? -1 : 1);
            duration = speed / deceleration;
            if (destination < lowerMargin) {
                destination = wrapperSize ? lowerMargin - (wrapperSize / 2.5 * (speed / 8)) : lowerMargin;
                distance = Math.abs(destination - current);
                duration = distance / speed
            } else if (destination > 0) {
                destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
                distance = Math.abs(current) + destination;
                duration = distance / speed
            }
            return { destination: Math.round(destination), duration: duration }
        };
        var _transform = _prefixStyle('transform');
        me.extend(me, { hasTransform: _transform !== false, hasPerspective: _prefixStyle('perspective') in _elementStyle, hasTouch: 'ontouchstart' in window, hasPointer: !!(window.PointerEvent || window.MSPointerEvent), hasTransition: _prefixStyle('transition') in _elementStyle });
        me.isBadAndroid = (function() { var appVersion = window.navigator.appVersion; if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) { var safariVersion = appVersion.match(/Safari\/(\d+.\d)/); if (safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) { return parseFloat(safariVersion[1]) < 535.19 } else { return true } } else { return false } })();
        me.extend(me.style = {}, { transform: _transform, transitionTimingFunction: _prefixStyle('transitionTimingFunction'), transitionDuration: _prefixStyle('transitionDuration'), transitionDelay: _prefixStyle('transitionDelay'), transformOrigin: _prefixStyle('transformOrigin') });
        me.hasClass = function(e, c) { var re = new RegExp("(^|\\s)" + c + "(\\s|$)"); return re.test(e.className) };
        me.addClass = function(e, c) {
            if (me.hasClass(e, c)) { return }
            var newclass = e.className.split(' ');
            newclass.push(c);
            e.className = newclass.join(' ')
        };
        me.removeClass = function(e, c) {
            if (!me.hasClass(e, c)) { return }
            var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
            e.className = e.className.replace(re, ' ')
        };
        me.offset = function(el) {
            var left = -el.offsetLeft,
                top = -el.offsetTop;
            while (el = el.offsetParent) {
                left -= el.offsetLeft;
                top -= el.offsetTop
            }
            return { left: left, top: top }
        };
        me.preventDefaultException = function(el, exceptions) { for (var i in exceptions) { if (exceptions[i].test(el[i])) { return true } } return false };
        me.extend(me.eventType = {}, { touchstart: 1, touchmove: 1, touchend: 1, mousedown: 2, mousemove: 2, mouseup: 2, pointerdown: 3, pointermove: 3, pointerup: 3, MSPointerDown: 3, MSPointerMove: 3, MSPointerUp: 3 });
        me.extend(me.ease = {}, {
            quadratic: { style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', fn: function(k) { return k * (2 - k) } },
            circular: { style: 'cubic-bezier(0.1, 0.57, 0.1, 1)', fn: function(k) { return Math.sqrt(1 - (--k * k)) } },
            back: { style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', fn: function(k) { var b = 4; return (k = k - 1) * k * ((b + 1) * k + b) + 1 } },
            bounce: { style: '', fn: function(k) { if ((k /= 1) < (1 / 2.75)) { return 7.5625 * k * k } else if (k < (2 / 2.75)) { return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75 } else if (k < (2.5 / 2.75)) { return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375 } else { return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375 } } },
            elastic: {
                style: '',
                fn: function(k) {
                    var f = 0.22,
                        e = 0.4;
                    if (k === 0) { return 0 }
                    if (k == 1) { return 1 }
                    return (e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1)
                }
            }
        });
        me.tap = function(e, eventName) {
            var ev = document.createEvent('Event');
            ev.initEvent(eventName, true, true);
            ev.pageX = e.pageX;
            ev.pageY = e.pageY;
            e.target.dispatchEvent(ev)
        };
        me.click = function(e) {
            var target = e.target,
                ev;
            if (!(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName)) {
                ev = document.createEvent(window.MouseEvent ? 'MouseEvents' : 'Event');
                ev.initEvent('click', true, true);
                ev.view = e.view || window;
                ev.detail = 1;
                ev.screenX = target.screenX || 0;
                ev.screenY = target.screenY || 0;
                ev.clientX = target.clientX || 0;
                ev.clientY = target.clientY || 0;
                ev.ctrlKey = !!e.ctrlKey;
                ev.altKey = !!e.altKey;
                ev.shiftKey = !!e.shiftKey;
                ev.metaKey = !!e.metaKey;
                ev.button = 0;
                ev.relatedTarget = null;
                ev._constructed = true;
                target.dispatchEvent(ev)
            }
        };
        return me
    })();

    function IScroll(el, options) {
        this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
        this.scroller = this.wrapper.children[0];
        this.scrollerStyle = this.scroller.style;
        this.options = { resizeScrollbars: true, mouseWheelSpeed: 20, snapThreshold: 0.334, disablePointer: !utils.hasPointer, disableTouch: utils.hasPointer || !utils.hasTouch, disableMouse: utils.hasPointer || utils.hasTouch, startX: 0, startY: 0, scrollY: true, directionLockThreshold: 5, momentum: true, bounce: true, bounceTime: 600, bounceEasing: '', preventDefault: true, preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ }, HWCompositing: true, useTransition: true, useTransform: true, bindToWrapper: typeof window.onmousedown === "undefined" };
        for (var i in options) { this.options[i] = options[i] }
        this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';
        this.options.useTransition = utils.hasTransition && this.options.useTransition;
        this.options.useTransform = utils.hasTransform && this.options.useTransform;
        this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
        this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
        this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
        this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;
        this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;
        if (this.options.tap === true) { this.options.tap = 'tap' }
        if (!this.options.useTransition && !this.options.useTransform) { if (!(/relative|absolute/i).test(this.scrollerStyle.position)) { this.scrollerStyle.position = "relative" } }
        if (this.options.shrinkScrollbars == 'scale') { this.options.useTransition = false }
        this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;
        this.x = 0;
        this.y = 0;
        this.directionX = 0;
        this.directionY = 0;
        this._events = {};
        this._init();
        this.refresh();
        this.scrollTo(this.options.startX, this.options.startY);
        this.enable()
    }
    IScroll.prototype = {
        version: '5.2.0',
        _init: function() { this._initEvents(); if (this.options.scrollbars || this.options.indicators) { this._initIndicators() } if (this.options.mouseWheel) { this._initWheel() } if (this.options.snap) { this._initSnap() } if (this.options.keyBindings) { this._initKeys() } },
        destroy: function() {
            this._initEvents(true);
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = null;
            this._execEvent('destroy')
        },
        _transitionEnd: function(e) {
            if (e.target != this.scroller || !this.isInTransition) { return }
            this._transitionTime();
            if (!this.resetPosition(this.options.bounceTime)) {
                this.isInTransition = false;
                this._execEvent('scrollEnd')
            }
        },
        _start: function(e) {
            if (utils.eventType[e.type] != 1) { var button; if (!e.which) { button = (e.button < 2) ? 0 : ((e.button == 4) ? 1 : 2) } else { button = e.button } if (button !== 0) { return } }
            if (!this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated)) { return }
            if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) { e.preventDefault() }
            var point = e.touches ? e.touches[0] : e,
                pos;
            this.initiated = utils.eventType[e.type];
            this.moved = false;
            this.distX = 0;
            this.distY = 0;
            this.directionX = 0;
            this.directionY = 0;
            this.directionLocked = 0;
            this.startTime = utils.getTime();
            if (this.options.useTransition && this.isInTransition) {
                this._transitionTime();
                this.isInTransition = false;
                pos = this.getComputedPosition();
                this._translate(Math.round(pos.x), Math.round(pos.y));
                this._execEvent('scrollEnd')
            } else if (!this.options.useTransition && this.isAnimating) {
                this.isAnimating = false;
                this._execEvent('scrollEnd')
            }
            this.startX = this.x;
            this.startY = this.y;
            this.absStartX = this.x;
            this.absStartY = this.y;
            this.pointX = point.pageX;
            this.pointY = point.pageY;
            this._execEvent('beforeScrollStart')
        },
        _move: function(e) {
            if (!this.enabled || utils.eventType[e.type] !== this.initiated) { return }
            if (this.options.preventDefault) { e.preventDefault() }
            var point = e.touches ? e.touches[0] : e,
                deltaX = point.pageX - this.pointX,
                deltaY = point.pageY - this.pointY,
                timestamp = utils.getTime(),
                newX, newY, absDistX, absDistY;
            this.pointX = point.pageX;
            this.pointY = point.pageY;
            this.distX += deltaX;
            this.distY += deltaY;
            absDistX = Math.abs(this.distX);
            absDistY = Math.abs(this.distY);
            if (timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10)) { return }
            if (!this.directionLocked && !this.options.freeScroll) { if (absDistX > absDistY + this.options.directionLockThreshold) { this.directionLocked = 'h' } else if (absDistY >= absDistX + this.options.directionLockThreshold) { this.directionLocked = 'v' } else { this.directionLocked = 'n' } }
            if (this.directionLocked == 'h') {
                if (this.options.eventPassthrough == 'vertical') { e.preventDefault() } else if (this.options.eventPassthrough == 'horizontal') { this.initiated = false; return }
                deltaY = 0
            } else if (this.directionLocked == 'v') {
                if (this.options.eventPassthrough == 'horizontal') { e.preventDefault() } else if (this.options.eventPassthrough == 'vertical') { this.initiated = false; return }
                deltaX = 0
            }
            deltaX = this.hasHorizontalScroll ? deltaX : 0;
            deltaY = this.hasVerticalScroll ? deltaY : 0;
            newX = this.x + deltaX;
            newY = this.y + deltaY;
            if (newX > 0 || newX < this.maxScrollX) { newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX }
            if (newY > 0 || newY < this.maxScrollY) { newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY }
            this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
            this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;
            if (!this.moved) { this._execEvent('scrollStart') }
            this.moved = true;
            this._translate(newX, newY);
            if (timestamp - this.startTime > 300) {
                this.startTime = timestamp;
                this.startX = this.x;
                this.startY = this.y
            }
        },
        _end: function(e) {
            if (!this.enabled || utils.eventType[e.type] !== this.initiated) { return }
            if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) { e.preventDefault() }
            var point = e.changedTouches ? e.changedTouches[0] : e,
                momentumX, momentumY, duration = utils.getTime() - this.startTime,
                newX = Math.round(this.x),
                newY = Math.round(this.y),
                distanceX = Math.abs(newX - this.startX),
                distanceY = Math.abs(newY - this.startY),
                time = 0,
                easing = '';
            this.isInTransition = 0;
            this.initiated = 0;
            this.endTime = utils.getTime();
            if (this.resetPosition(this.options.bounceTime)) { return }
            this.scrollTo(newX, newY);
            if (!this.moved) {
                if (this.options.tap) { utils.tap(e, this.options.tap) }
                if (this.options.click) { utils.click(e) }
                this._execEvent('scrollCancel');
                return
            }
            if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) { this._execEvent('flick'); return }
            if (this.options.momentum && duration < 300) {
                momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
                momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
                newX = momentumX.destination;
                newY = momentumY.destination;
                time = Math.max(momentumX.duration, momentumY.duration);
                this.isInTransition = 1
            }
            if (this.options.snap) {
                var snap = this._nearestSnap(newX, newY);
                this.currentPage = snap;
                time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
                newX = snap.x;
                newY = snap.y;
                this.directionX = 0;
                this.directionY = 0;
                easing = this.options.bounceEasing
            }
            if (newX != this.x || newY != this.y) {
                if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) { easing = utils.ease.quadratic }
                this.scrollTo(newX, newY, time, easing);
                return
            }
            this._execEvent('scrollEnd')
        },
        _resize: function() {
            var that = this;
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(function() { that.refresh() }, this.options.resizePolling)
        },
        resetPosition: function(time) {
            var x = this.x,
                y = this.y;
            time = time || 0;
            if (!this.hasHorizontalScroll || this.x > 0) { x = 0 } else if (this.x < this.maxScrollX) { x = this.maxScrollX }
            if (!this.hasVerticalScroll || this.y > 0) { y = 0 } else if (this.y < this.maxScrollY) { y = this.maxScrollY }
            if (x == this.x && y == this.y) { return false }
            this.scrollTo(x, y, time, this.options.bounceEasing);
            return true
        },
        disable: function() { this.enabled = false },
        enable: function() { this.enabled = true },
        refresh: function() {
            var rf = this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth;
            this.wrapperHeight = this.wrapper.clientHeight;
            this.scrollerWidth = this.scroller.offsetWidth;
            this.scrollerHeight = this.scroller.offsetHeight;
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;
            if (!this.hasHorizontalScroll) {
                this.maxScrollX = 0;
                this.scrollerWidth = this.wrapperWidth
            }
            if (!this.hasVerticalScroll) {
                this.maxScrollY = 0;
                this.scrollerHeight = this.wrapperHeight
            }
            this.endTime = 0;
            this.directionX = 0;
            this.directionY = 0;
            this.wrapperOffset = utils.offset(this.wrapper);
            this._execEvent('refresh');
            this.resetPosition()
        },
        on: function(type, fn) {
            if (!this._events[type]) { this._events[type] = [] }
            this._events[type].push(fn)
        },
        off: function(type, fn) { if (!this._events[type]) { return } var index = this._events[type].indexOf(fn); if (index > -1) { this._events[type].splice(index, 1) } },
        _execEvent: function(type) {
            if (!this._events[type]) { return }
            var i = 0,
                l = this._events[type].length;
            if (!l) { return }
            for (; i < l; i++) { this._events[type][i].apply(this, [].slice.call(arguments, 1)) }
        },
        scrollBy: function(x, y, time, easing) {
            x = this.x + x;
            y = this.y + y;
            time = time || 0;
            this.scrollTo(x, y, time, easing)
        },
        scrollTo: function(x, y, time, easing) {
            easing = easing || utils.ease.circular;
            this.isInTransition = this.options.useTransition && time > 0;
            var transitionType = this.options.useTransition && easing.style;
            if (!time || transitionType) {
                if (transitionType) {
                    this._transitionTimingFunction(easing.style);
                    this._transitionTime(time)
                }
                this._translate(x, y)
            } else { this._animate(x, y, time, easing.fn) }
        },
        scrollToElement: function(el, time, offsetX, offsetY, easing) {
            el = el.nodeType ? el : this.scroller.querySelector(el);
            if (!el) { return }
            var pos = utils.offset(el);
            pos.left -= this.wrapperOffset.left;
            pos.top -= this.wrapperOffset.top;
            if (offsetX === true) { offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2) }
            if (offsetY === true) { offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2) }
            pos.left -= offsetX || 0;
            pos.top -= offsetY || 0;
            pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
            pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;
            time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;
            this.scrollTo(pos.left, pos.top, time, easing)
        },
        _transitionTime: function(time) {
            if (!this.options.useTransition) { return }
            time = time || 0;
            var durationProp = utils.style.transitionDuration;
            if (!durationProp) { return }
            this.scrollerStyle[durationProp] = time + 'ms';
            if (!time && utils.isBadAndroid) {
                this.scrollerStyle[durationProp] = '0.0001ms';
                var self = this;
                rAF(function() { if (self.scrollerStyle[durationProp] === '0.0001ms') { self.scrollerStyle[durationProp] = '0s' } })
            }
            if (this.indicators) { for (var i = this.indicators.length; i--;) { this.indicators[i].transitionTime(time) } }
        },
        _transitionTimingFunction: function(easing) { this.scrollerStyle[utils.style.transitionTimingFunction] = easing; if (this.indicators) { for (var i = this.indicators.length; i--;) { this.indicators[i].transitionTimingFunction(easing) } } },
        _translate: function(x, y) {
            if (this.options.useTransform) { this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ } else {
                x = Math.round(x);
                y = Math.round(y);
                this.scrollerStyle.left = x + 'px';
                this.scrollerStyle.top = y + 'px'
            }
            this.x = x;
            this.y = y;
            if (this.indicators) { for (var i = this.indicators.length; i--;) { this.indicators[i].updatePosition() } }
        },
        _initEvents: function(remove) {
            var eventType = remove ? utils.removeEvent : utils.addEvent,
                target = this.options.bindToWrapper ? this.wrapper : window;
            eventType(window, 'orientationchange', this);
            eventType(window, 'resize', this);
            if (this.options.click) { eventType(this.wrapper, 'click', this, true) }
            if (!this.options.disableMouse) {
                eventType(this.wrapper, 'mousedown', this);
                eventType(target, 'mousemove', this);
                eventType(target, 'mousecancel', this);
                eventType(target, 'mouseup', this)
            }
            if (utils.hasPointer && !this.options.disablePointer) {
                eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
                eventType(target, utils.prefixPointerEvent('pointermove'), this);
                eventType(target, utils.prefixPointerEvent('pointercancel'), this);
                eventType(target, utils.prefixPointerEvent('pointerup'), this)
            }
            if (utils.hasTouch && !this.options.disableTouch) {
                eventType(this.wrapper, 'touchstart', this);
                eventType(target, 'touchmove', this);
                eventType(target, 'touchcancel', this);
                eventType(target, 'touchend', this)
            }
            eventType(this.scroller, 'transitionend', this);
            eventType(this.scroller, 'webkitTransitionEnd', this);
            eventType(this.scroller, 'oTransitionEnd', this);
            eventType(this.scroller, 'MSTransitionEnd', this)
        },
        getComputedPosition: function() {
            var matrix = window.getComputedStyle(this.scroller, null),
                x, y;
            if (this.options.useTransform) {
                matrix = matrix[utils.style.transform].split(')')[0].split(', ');
                x = +(matrix[12] || matrix[4]);
                y = +(matrix[13] || matrix[5])
            } else {
                x = +matrix.left.replace(/[^-\d.]/g, '');
                y = +matrix.top.replace(/[^-\d.]/g, '')
            }
            return { x: x, y: y }
        },
        _initIndicators: function() {
            var interactive = this.options.interactiveScrollbars,
                customStyle = typeof this.options.scrollbars != 'string',
                indicators = [],
                indicator;
            var that = this;
            this.indicators = [];
            if (this.options.scrollbars) {
                if (this.options.scrollY) {
                    indicator = { el: createDefaultScrollbar('v', interactive, this.options.scrollbars), interactive: interactive, defaultScrollbars: true, customStyle: customStyle, resize: this.options.resizeScrollbars, shrink: this.options.shrinkScrollbars, fade: this.options.fadeScrollbars, listenX: false };
                    this.wrapper.appendChild(indicator.el);
                    indicators.push(indicator)
                }
                if (this.options.scrollX) {
                    indicator = { el: createDefaultScrollbar('h', interactive, this.options.scrollbars), interactive: interactive, defaultScrollbars: true, customStyle: customStyle, resize: this.options.resizeScrollbars, shrink: this.options.shrinkScrollbars, fade: this.options.fadeScrollbars, listenY: false };
                    this.wrapper.appendChild(indicator.el);
                    indicators.push(indicator)
                }
            }
            if (this.options.indicators) { indicators = indicators.concat(this.options.indicators) }
            for (var i = indicators.length; i--;) { this.indicators.push(new Indicator(this, indicators[i])) }

            function _indicatorsMap(fn) { if (that.indicators) { for (var i = that.indicators.length; i--;) { fn.call(that.indicators[i]) } } }
            if (this.options.fadeScrollbars) {
                this.on('scrollEnd', function() { _indicatorsMap(function() { this.fade() }) });
                this.on('scrollCancel', function() { _indicatorsMap(function() { this.fade() }) });
                this.on('scrollStart', function() { _indicatorsMap(function() { this.fade(1) }) });
                this.on('beforeScrollStart', function() { _indicatorsMap(function() { this.fade(1, true) }) })
            }
            this.on('refresh', function() { _indicatorsMap(function() { this.refresh() }) });
            this.on('destroy', function() {
                _indicatorsMap(function() { this.destroy() });
                delete this.indicators
            })
        },
        _initWheel: function() {
            utils.addEvent(this.wrapper, 'wheel', this);
            utils.addEvent(this.wrapper, 'mousewheel', this);
            utils.addEvent(this.wrapper, 'DOMMouseScroll', this);
            this.on('destroy', function() {
                clearTimeout(this.wheelTimeout);
                this.wheelTimeout = null;
                utils.removeEvent(this.wrapper, 'wheel', this);
                utils.removeEvent(this.wrapper, 'mousewheel', this);
                utils.removeEvent(this.wrapper, 'DOMMouseScroll', this)
            })
        },
        _wheel: function(e) {
            if (!this.enabled) { return }
            e.preventDefault();
            var wheelDeltaX, wheelDeltaY, newX, newY, that = this;
            if (this.wheelTimeout === undefined) { that._execEvent('scrollStart') }
            clearTimeout(this.wheelTimeout);
            this.wheelTimeout = setTimeout(function() {
                if (!that.options.snap) { that._execEvent('scrollEnd') }
                that.wheelTimeout = undefined
            }, 400);
            if ('deltaX' in e) {
                if (e.deltaMode === 1) {
                    wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
                    wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed
                } else {
                    wheelDeltaX = -e.deltaX;
                    wheelDeltaY = -e.deltaY
                }
            } else if ('wheelDeltaX' in e) {
                wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
                wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed
            } else if ('wheelDelta' in e) { wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed } else if ('detail' in e) { wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed } else { return }
            wheelDeltaX *= this.options.invertWheelDirection;
            wheelDeltaY *= this.options.invertWheelDirection;
            if (!this.hasVerticalScroll) {
                wheelDeltaX = wheelDeltaY;
                wheelDeltaY = 0
            }
            if (this.options.snap) {
                newX = this.currentPage.pageX;
                newY = this.currentPage.pageY;
                if (wheelDeltaX > 0) { newX-- } else if (wheelDeltaX < 0) { newX++ }
                if (wheelDeltaY > 0) { newY-- } else if (wheelDeltaY < 0) { newY++ }
                this.goToPage(newX, newY);
                return
            }
            newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
            newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);
            this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
            this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;
            if (newX > 0) { newX = 0 } else if (newX < this.maxScrollX) { newX = this.maxScrollX }
            if (newY > 0) { newY = 0 } else if (newY < this.maxScrollY) { newY = this.maxScrollY }
            this.scrollTo(newX, newY, 0)
        },
        _initSnap: function() {
            this.currentPage = {};
            if (typeof this.options.snap == 'string') { this.options.snap = this.scroller.querySelectorAll(this.options.snap) }
            this.on('refresh', function() {
                var i = 0,
                    l, m = 0,
                    n, cx, cy, x = 0,
                    y, stepX = this.options.snapStepX || this.wrapperWidth,
                    stepY = this.options.snapStepY || this.wrapperHeight,
                    el;
                this.pages = [];
                if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) { return }
                if (this.options.snap === true) {
                    cx = Math.round(stepX / 2);
                    cy = Math.round(stepY / 2);
                    while (x > -this.scrollerWidth) {
                        this.pages[i] = [];
                        l = 0;
                        y = 0;
                        while (y > -this.scrollerHeight) {
                            this.pages[i][l] = { x: Math.max(x, this.maxScrollX), y: Math.max(y, this.maxScrollY), width: stepX, height: stepY, cx: x - cx, cy: y - cy };
                            y -= stepY;
                            l++
                        }
                        x -= stepX;
                        i++
                    }
                } else {
                    el = this.options.snap;
                    l = el.length;
                    n = -1;
                    for (; i < l; i++) {
                        if (i === 0 || el[i].offsetLeft <= el[i - 1].offsetLeft) {
                            m = 0;
                            n++
                        }
                        if (!this.pages[m]) { this.pages[m] = [] }
                        x = Math.max(-el[i].offsetLeft, this.maxScrollX);
                        y = Math.max(-el[i].offsetTop, this.maxScrollY);
                        cx = x - Math.round(el[i].offsetWidth / 2);
                        cy = y - Math.round(el[i].offsetHeight / 2);
                        this.pages[m][n] = { x: x, y: y, width: el[i].offsetWidth, height: el[i].offsetHeight, cx: cx, cy: cy };
                        if (x > this.maxScrollX) { m++ }
                    }
                }
                this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
                if (this.options.snapThreshold % 1 === 0) {
                    this.snapThresholdX = this.options.snapThreshold;
                    this.snapThresholdY = this.options.snapThreshold
                } else {
                    this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
                    this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold)
                }
            });
            this.on('flick', function() {
                var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.x - this.startX), 1000), Math.min(Math.abs(this.y - this.startY), 1000)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, time)
            })
        },
        _nearestSnap: function(x, y) {
            if (!this.pages.length) { return { x: 0, y: 0, pageX: 0, pageY: 0 } }
            var i = 0,
                l = this.pages.length,
                m = 0;
            if (Math.abs(x - this.absStartX) < this.snapThresholdX && Math.abs(y - this.absStartY) < this.snapThresholdY) { return this.currentPage }
            if (x > 0) { x = 0 } else if (x < this.maxScrollX) { x = this.maxScrollX }
            if (y > 0) { y = 0 } else if (y < this.maxScrollY) { y = this.maxScrollY }
            for (; i < l; i++) { if (x >= this.pages[i][0].cx) { x = this.pages[i][0].x; break } }
            l = this.pages[i].length;
            for (; m < l; m++) { if (y >= this.pages[0][m].cy) { y = this.pages[0][m].y; break } }
            if (i == this.currentPage.pageX) {
                i += this.directionX;
                if (i < 0) { i = 0 } else if (i >= this.pages.length) { i = this.pages.length - 1 }
                x = this.pages[i][0].x
            }
            if (m == this.currentPage.pageY) {
                m += this.directionY;
                if (m < 0) { m = 0 } else if (m >= this.pages[0].length) { m = this.pages[0].length - 1 }
                y = this.pages[0][m].y
            }
            return { x: x, y: y, pageX: i, pageY: m }
        },
        goToPage: function(x, y, time, easing) {
            easing = easing || this.options.bounceEasing;
            if (x >= this.pages.length) { x = this.pages.length - 1 } else if (x < 0) { x = 0 }
            if (y >= this.pages[x].length) { y = this.pages[x].length - 1 } else if (y < 0) { y = 0 }
            var posX = this.pages[x][y].x,
                posY = this.pages[x][y].y;
            time = time === undefined ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;
            this.currentPage = { x: posX, y: posY, pageX: x, pageY: y };
            this.scrollTo(posX, posY, time, easing)
        },
        next: function(time, easing) {
            var x = this.currentPage.pageX,
                y = this.currentPage.pageY;
            x++;
            if (x >= this.pages.length && this.hasVerticalScroll) {
                x = 0;
                y++
            }
            this.goToPage(x, y, time, easing)
        },
        prev: function(time, easing) {
            var x = this.currentPage.pageX,
                y = this.currentPage.pageY;
            x--;
            if (x < 0 && this.hasVerticalScroll) {
                x = 0;
                y--
            }
            this.goToPage(x, y, time, easing)
        },
        _initKeys: function(e) {
            var keys = { pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40 };
            var i;
            if (typeof this.options.keyBindings == 'object') { for (i in this.options.keyBindings) { if (typeof this.options.keyBindings[i] == 'string') { this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0) } } } else { this.options.keyBindings = {} }
            for (i in keys) { this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i] }
            utils.addEvent(window, 'keydown', this);
            this.on('destroy', function() { utils.removeEvent(window, 'keydown', this) })
        },
        _key: function(e) {
            if (!this.enabled) { return }
            var snap = this.options.snap,
                newX = snap ? this.currentPage.pageX : this.x,
                newY = snap ? this.currentPage.pageY : this.y,
                now = utils.getTime(),
                prevTime = this.keyTime || 0,
                acceleration = 0.250,
                pos;
            if (this.options.useTransition && this.isInTransition) {
                pos = this.getComputedPosition();
                this._translate(Math.round(pos.x), Math.round(pos.y));
                this.isInTransition = false
            }
            this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;
            switch (e.keyCode) {
                case this.options.keyBindings.pageUp:
                    if (this.hasHorizontalScroll && !this.hasVerticalScroll) { newX += snap ? 1 : this.wrapperWidth } else { newY += snap ? 1 : this.wrapperHeight }
                    break;
                case this.options.keyBindings.pageDown:
                    if (this.hasHorizontalScroll && !this.hasVerticalScroll) { newX -= snap ? 1 : this.wrapperWidth } else { newY -= snap ? 1 : this.wrapperHeight }
                    break;
                case this.options.keyBindings.end:
                    newX = snap ? this.pages.length - 1 : this.maxScrollX;
                    newY = snap ? this.pages[0].length - 1 : this.maxScrollY;
                    break;
                case this.options.keyBindings.home:
                    newX = 0;
                    newY = 0;
                    break;
                case this.options.keyBindings.left:
                    newX += snap ? -1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.up:
                    newY += snap ? 1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.right:
                    newX -= snap ? -1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.down:
                    newY -= snap ? 1 : 5 + this.keyAcceleration >> 0;
                    break;
                default:
                    return
            }
            if (snap) { this.goToPage(newX, newY); return }
            if (newX > 0) {
                newX = 0;
                this.keyAcceleration = 0
            } else if (newX < this.maxScrollX) {
                newX = this.maxScrollX;
                this.keyAcceleration = 0
            }
            if (newY > 0) {
                newY = 0;
                this.keyAcceleration = 0
            } else if (newY < this.maxScrollY) {
                newY = this.maxScrollY;
                this.keyAcceleration = 0
            }
            this.scrollTo(newX, newY, 0);
            this.keyTime = now
        },
        _animate: function(destX, destY, duration, easingFn) {
            var that = this,
                startX = this.x,
                startY = this.y,
                startTime = utils.getTime(),
                destTime = startTime + duration;

            function step() {
                var now = utils.getTime(),
                    newX, newY, easing;
                if (now >= destTime) {
                    that.isAnimating = false;
                    that._translate(destX, destY);
                    if (!that.resetPosition(that.options.bounceTime)) { that._execEvent('scrollEnd') }
                    return
                }
                now = (now - startTime) / duration;
                easing = easingFn(now);
                newX = (destX - startX) * easing + startX;
                newY = (destY - startY) * easing + startY;
                that._translate(newX, newY);
                if (that.isAnimating) { rAF(step) }
            }
            this.isAnimating = true;
            step()
        },
        handleEvent: function(e) {
            switch (e.type) {
                case 'touchstart':
                case 'pointerdown':
                case 'MSPointerDown':
                case 'mousedown':
                    this._start(e);
                    break;
                case 'touchmove':
                case 'pointermove':
                case 'MSPointerMove':
                case 'mousemove':
                    this._move(e);
                    break;
                case 'touchend':
                case 'pointerup':
                case 'MSPointerUp':
                case 'mouseup':
                case 'touchcancel':
                case 'pointercancel':
                case 'MSPointerCancel':
                case 'mousecancel':
                    this._end(e);
                    break;
                case 'orientationchange':
                case 'resize':
                    this._resize();
                    break;
                case 'transitionend':
                case 'webkitTransitionEnd':
                case 'oTransitionEnd':
                case 'MSTransitionEnd':
                    this._transitionEnd(e);
                    break;
                case 'wheel':
                case 'DOMMouseScroll':
                case 'mousewheel':
                    this._wheel(e);
                    break;
                case 'keydown':
                    this._key(e);
                    break;
                case 'click':
                    if (this.enabled && !e._constructed) {
                        e.preventDefault();
                        e.stopPropagation()
                    }
                    break
            }
        }
    };

    function createDefaultScrollbar(direction, interactive, type) {
        var scrollbar = document.createElement('div'),
            indicator = document.createElement('div');
        if (type === true) {
            scrollbar.style.cssText = 'position:absolute;z-index:9999';
            indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px'
        }
        indicator.className = 'iScrollIndicator';
        if (direction == 'h') {
            if (type === true) {
                scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
                indicator.style.height = '100%'
            }
            scrollbar.className = 'iScrollHorizontalScrollbar'
        } else {
            if (type === true) {
                scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
                indicator.style.width = '100%'
            }
            scrollbar.className = 'iScrollVerticalScrollbar'
        }
        scrollbar.style.cssText += ';overflow:hidden';
        if (!interactive) { scrollbar.style.pointerEvents = 'none' }
        scrollbar.appendChild(indicator);
        return scrollbar
    }

    function Indicator(scroller, options) {
        this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
        this.wrapperStyle = this.wrapper.style;
        this.indicator = this.wrapper.children[0];
        this.indicatorStyle = this.indicator.style;
        this.scroller = scroller;
        this.options = { listenX: true, listenY: true, interactive: false, resize: true, defaultScrollbars: false, shrink: false, fade: false, speedRatioX: 0, speedRatioY: 0 };
        for (var i in options) { this.options[i] = options[i] }
        this.sizeRatioX = 1;
        this.sizeRatioY = 1;
        this.maxPosX = 0;
        this.maxPosY = 0;
        if (this.options.interactive) {
            if (!this.options.disableTouch) {
                utils.addEvent(this.indicator, 'touchstart', this);
                utils.addEvent(window, 'touchend', this)
            }
            if (!this.options.disablePointer) {
                utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
                utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this)
            }
            if (!this.options.disableMouse) {
                utils.addEvent(this.indicator, 'mousedown', this);
                utils.addEvent(window, 'mouseup', this)
            }
        }
        if (this.options.fade) {
            this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
            var durationProp = utils.style.transitionDuration;
            if (!durationProp) { return }
            this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';
            var self = this;
            if (utils.isBadAndroid) { rAF(function() { if (self.wrapperStyle[durationProp] === '0.0001ms') { self.wrapperStyle[durationProp] = '0s' } }) }
            this.wrapperStyle.opacity = '0'
        }
    }
    Indicator.prototype = {
        handleEvent: function(e) {
            switch (e.type) {
                case 'touchstart':
                case 'pointerdown':
                case 'MSPointerDown':
                case 'mousedown':
                    this._start(e);
                    break;
                case 'touchmove':
                case 'pointermove':
                case 'MSPointerMove':
                case 'mousemove':
                    this._move(e);
                    break;
                case 'touchend':
                case 'pointerup':
                case 'MSPointerUp':
                case 'mouseup':
                case 'touchcancel':
                case 'pointercancel':
                case 'MSPointerCancel':
                case 'mousecancel':
                    this._end(e);
                    break
            }
        },
        destroy: function() {
            if (this.options.fadeScrollbars) {
                clearTimeout(this.fadeTimeout);
                this.fadeTimeout = null
            }
            if (this.options.interactive) {
                utils.removeEvent(this.indicator, 'touchstart', this);
                utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
                utils.removeEvent(this.indicator, 'mousedown', this);
                utils.removeEvent(window, 'touchmove', this);
                utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
                utils.removeEvent(window, 'mousemove', this);
                utils.removeEvent(window, 'touchend', this);
                utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
                utils.removeEvent(window, 'mouseup', this)
            }
            if (this.options.defaultScrollbars) { this.wrapper.parentNode.removeChild(this.wrapper) }
        },
        _start: function(e) {
            var point = e.touches ? e.touches[0] : e;
            e.preventDefault();
            e.stopPropagation();
            this.transitionTime();
            this.initiated = true;
            this.moved = false;
            this.lastPointX = point.pageX;
            this.lastPointY = point.pageY;
            this.startTime = utils.getTime();
            if (!this.options.disableTouch) { utils.addEvent(window, 'touchmove', this) }
            if (!this.options.disablePointer) { utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this) }
            if (!this.options.disableMouse) { utils.addEvent(window, 'mousemove', this) }
            this.scroller._execEvent('beforeScrollStart')
        },
        _move: function(e) {
            var point = e.touches ? e.touches[0] : e,
                deltaX, deltaY, newX, newY, timestamp = utils.getTime();
            if (!this.moved) { this.scroller._execEvent('scrollStart') }
            this.moved = true;
            deltaX = point.pageX - this.lastPointX;
            this.lastPointX = point.pageX;
            deltaY = point.pageY - this.lastPointY;
            this.lastPointY = point.pageY;
            newX = this.x + deltaX;
            newY = this.y + deltaY;
            this._pos(newX, newY);
            e.preventDefault();
            e.stopPropagation()
        },
        _end: function(e) {
            if (!this.initiated) { return }
            this.initiated = false;
            e.preventDefault();
            e.stopPropagation();
            utils.removeEvent(window, 'touchmove', this);
            utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
            utils.removeEvent(window, 'mousemove', this);
            if (this.scroller.options.snap) {
                var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
                var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);
                if (this.scroller.x != snap.x || this.scroller.y != snap.y) {
                    this.scroller.directionX = 0;
                    this.scroller.directionY = 0;
                    this.scroller.currentPage = snap;
                    this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing)
                }
            }
            if (this.moved) { this.scroller._execEvent('scrollEnd') }
        },
        transitionTime: function(time) {
            time = time || 0;
            var durationProp = utils.style.transitionDuration;
            if (!durationProp) { return }
            this.indicatorStyle[durationProp] = time + 'ms';
            if (!time && utils.isBadAndroid) {
                this.indicatorStyle[durationProp] = '0.0001ms';
                var self = this;
                rAF(function() { if (self.indicatorStyle[durationProp] === '0.0001ms') { self.indicatorStyle[durationProp] = '0s' } })
            }
        },
        transitionTimingFunction: function(easing) { this.indicatorStyle[utils.style.transitionTimingFunction] = easing },
        refresh: function() {
            this.transitionTime();
            if (this.options.listenX && !this.options.listenY) { this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none' } else if (this.options.listenY && !this.options.listenX) { this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none' } else { this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none' }
            if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
                utils.addClass(this.wrapper, 'iScrollBothScrollbars');
                utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');
                if (this.options.defaultScrollbars && this.options.customStyle) { if (this.options.listenX) { this.wrapper.style.right = '8px' } else { this.wrapper.style.bottom = '8px' } }
            } else {
                utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
                utils.addClass(this.wrapper, 'iScrollLoneScrollbar');
                if (this.options.defaultScrollbars && this.options.customStyle) { if (this.options.listenX) { this.wrapper.style.right = '2px' } else { this.wrapper.style.bottom = '2px' } }
            }
            var r = this.wrapper.offsetHeight;
            if (this.options.listenX) {
                this.wrapperWidth = this.wrapper.clientWidth;
                if (this.options.resize) {
                    this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
                    this.indicatorStyle.width = this.indicatorWidth + 'px'
                } else { this.indicatorWidth = this.indicator.clientWidth }
                this.maxPosX = this.wrapperWidth - this.indicatorWidth;
                if (this.options.shrink == 'clip') {
                    this.minBoundaryX = -this.indicatorWidth + 8;
                    this.maxBoundaryX = this.wrapperWidth - 8
                } else {
                    this.minBoundaryX = 0;
                    this.maxBoundaryX = this.maxPosX
                }
                this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX))
            }
            if (this.options.listenY) {
                this.wrapperHeight = this.wrapper.clientHeight;
                if (this.options.resize) {
                    this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
                    this.indicatorStyle.height = this.indicatorHeight + 'px'
                } else { this.indicatorHeight = this.indicator.clientHeight }
                this.maxPosY = this.wrapperHeight - this.indicatorHeight;
                if (this.options.shrink == 'clip') {
                    this.minBoundaryY = -this.indicatorHeight + 8;
                    this.maxBoundaryY = this.wrapperHeight - 8
                } else {
                    this.minBoundaryY = 0;
                    this.maxBoundaryY = this.maxPosY
                }
                this.maxPosY = this.wrapperHeight - this.indicatorHeight;
                this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY))
            }
            this.updatePosition()
        },
        updatePosition: function() {
            var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
                y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;
            if (!this.options.ignoreBoundaries) {
                if (x < this.minBoundaryX) {
                    if (this.options.shrink == 'scale') {
                        this.width = Math.max(this.indicatorWidth + x, 8);
                        this.indicatorStyle.width = this.width + 'px'
                    }
                    x = this.minBoundaryX
                } else if (x > this.maxBoundaryX) {
                    if (this.options.shrink == 'scale') {
                        this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
                        this.indicatorStyle.width = this.width + 'px';
                        x = this.maxPosX + this.indicatorWidth - this.width
                    } else { x = this.maxBoundaryX }
                } else if (this.options.shrink == 'scale' && this.width != this.indicatorWidth) {
                    this.width = this.indicatorWidth;
                    this.indicatorStyle.width = this.width + 'px'
                }
                if (y < this.minBoundaryY) {
                    if (this.options.shrink == 'scale') {
                        this.height = Math.max(this.indicatorHeight + y * 3, 8);
                        this.indicatorStyle.height = this.height + 'px'
                    }
                    y = this.minBoundaryY
                } else if (y > this.maxBoundaryY) {
                    if (this.options.shrink == 'scale') {
                        this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
                        this.indicatorStyle.height = this.height + 'px';
                        y = this.maxPosY + this.indicatorHeight - this.height
                    } else { y = this.maxBoundaryY }
                } else if (this.options.shrink == 'scale' && this.height != this.indicatorHeight) {
                    this.height = this.indicatorHeight;
                    this.indicatorStyle.height = this.height + 'px'
                }
            }
            this.x = x;
            this.y = y;
            if (this.scroller.options.useTransform) { this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ } else {
                this.indicatorStyle.left = x + 'px';
                this.indicatorStyle.top = y + 'px'
            }
        },
        _pos: function(x, y) {
            if (x < 0) { x = 0 } else if (x > this.maxPosX) { x = this.maxPosX }
            if (y < 0) { y = 0 } else if (y > this.maxPosY) { y = this.maxPosY }
            x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
            y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;
            this.scroller.scrollTo(x, y)
        },
        fade: function(val, hold) {
            if (hold && !this.visible) { return }
            clearTimeout(this.fadeTimeout);
            this.fadeTimeout = null;
            var time = val ? 250 : 500,
                delay = val ? 0 : 300;
            val = val ? '1' : '0';
            this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';
            this.fadeTimeout = setTimeout((function(val) {
                this.wrapperStyle.opacity = val;
                this.visible = +val
            }).bind(this, val), delay)
        }
    };
    IScroll.utils = utils;
    if (typeof module != 'undefined' && module.exports) { module.exports = IScroll } else if (typeof define == 'function' && define.amd) { define(function() { return IScroll }) } else { window.IScroll = IScroll }
})(window, document, Math);
/*
 * 移动端模拟导航可点击自动滑动 0.1.4
 * Date: 2017-01-11
 * by: xiewei
 * 导航可左右滑动，可点击边缘的一个，自动滚动下一个到可视范围【依赖于iscroll.js】
 */
(function($) {
    $.fn.navbarscroll = function(options) {
        //各种属性、参数
        var _defaults = {
            className: 'cur', //当前选中点击元素的class类名
            clickScrollTime: 300, //点击后滑动时间
            duibiScreenWidth: 0.4, //单位以rem为准，默认为0.4rem
            scrollerWidth: 3, //单位以px为准，默认为3,[仅用于特殊情况：外层宽度因为小数点造成的不精准情况]
            defaultSelect: 0, //初始选中第n个，默认第0个
            fingerClick: 0, //目标第0或1个选项触发,必须每一项长度一致，方可用此项
            endClickScroll: function(thisObj) {} //回调函数
        }
        var _opt = $.extend(_defaults, options);
        this.each(function() {
            //插件实现代码
            var _wrapper = $(this);
            var _win = $(window);
            var _win_width = _win.width(),
                _wrapper_width = _wrapper.width(),
                _wrapper_off_left = _wrapper.offset().left;
            var _wrapper_off_right = _win_width - _wrapper_off_left - _wrapper_width;
            var _obj_scroller = _wrapper.children('.scroller');
            var _obj_ul = _obj_scroller.children('ul');
            var _obj_li = _obj_ul.children('li');
            var _scroller_w = 0;
            _obj_li.css({ "margin-left": "0", "margin-right": "0" });
            for (var i = 0; i < _obj_li.length; i++) {
                _scroller_w += _obj_li[i].offsetWidth;
            }
            _obj_scroller.width(_scroller_w + _opt.scrollerWidth);
            var myScroll = new IScroll('#' + _wrapper.attr('id'), {
                eventPassthrough: true,
                scrollX: true,
                scrollY: false,
                preventDefault: false
            });
            _init(_obj_li.eq(_opt.defaultSelect));
            _obj_li.click(function() {
                _init($(this));
            });
            //解决PC端谷歌浏览器模拟的手机屏幕出现莫名的卡顿现象，滑动时禁止默认事件（2017-01-11）
            _wrapper[0].addEventListener('touchmove', function(e) { e.preventDefault(); }, false);

            function _init(thiObj) {
                var $this_obj = thiObj;
                var duibi = _opt.duibiScreenWidth * _win_width / 10,
                    this_index = $this_obj.index(),
                    this_off_left = $this_obj.offset().left,
                    this_pos_left = $this_obj.position().left,
                    this_width = $this_obj.width(),
                    this_prev_width = $this_obj.prev('li').width(),
                    this_next_width = $this_obj.next('li').width();
                var this_off_right = _win_width - this_off_left - this_width;
                if (_scroller_w + 2 > _wrapper_width) {
                    if (_opt.fingerClick == 1) {
                        if (this_index == 1) {
                            myScroll.scrollTo(-this_pos_left + this_prev_width, 0, _opt.clickScrollTime);
                        } else if (this_index == 0) {
                            myScroll.scrollTo(-this_pos_left, 0, _opt.clickScrollTime);
                        } else if (this_index == _obj_li.length - 2) {
                            myScroll.scrollBy(this_off_right - _wrapper_off_right - this_width, 0, _opt.clickScrollTime);
                        } else if (this_index == _obj_li.length - 1) {
                            myScroll.scrollBy(this_off_right - _wrapper_off_right, 0, _opt.clickScrollTime);
                        } else {
                            if (this_off_left - _wrapper_off_left - (this_width * _opt.fingerClick) < duibi) {
                                myScroll.scrollTo(-this_pos_left + this_prev_width + (this_width * _opt.fingerClick), 0, _opt.clickScrollTime);
                            } else if (this_off_right - _wrapper_off_right - (this_width * _opt.fingerClick) < duibi) {
                                myScroll.scrollBy(this_off_right - this_next_width - _wrapper_off_right - (this_width * _opt.fingerClick), 0, _opt.clickScrollTime);
                            }
                        }
                    } else {
                        if (this_index == 1) {
                            myScroll.scrollTo(-this_pos_left + this_prev_width, 0, _opt.clickScrollTime);
                        } else if (this_index == _obj_li.length - 1) {
                            if (this_off_right - _wrapper_off_right > 1 || this_off_right - _wrapper_off_right < -1) {
                                myScroll.scrollBy(this_off_right - _wrapper_off_right, 0, _opt.clickScrollTime);
                            }
                        } else {
                            if (this_off_left - _wrapper_off_left < duibi) {
                                myScroll.scrollTo(-this_pos_left + this_prev_width, 0, _opt.clickScrollTime);
                            } else if (this_off_right - _wrapper_off_right < duibi) {
                                myScroll.scrollBy(this_off_right - this_next_width - _wrapper_off_right, 0, _opt.clickScrollTime);
                            }
                        }
                    }
                }
                $this_obj.addClass(_opt.className).siblings('li').removeClass(_opt.className);
                _opt.endClickScroll.call(this, $this_obj);
            }
        });
    };
})(jQuery);
/*lazyload*/
(function($, window, document, undefined) {
    var $window = $(window);
    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = { threshold: 0, failure_limit: 0, event: "scroll", effect: "show", container: window, data_attribute: "original", skip_invisible: true, appear: null, load: null, placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" };

        function update() {
            var counter = 0;
            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) { return; }
                if ($.abovethetop(this, settings) || $.leftofbegin(this, settings)) {} else if (!$.belowthefold(this, settings) && !$.rightoffold(this, settings)) {
                    $this.trigger("appear");
                    counter = 0;
                } else { if (++counter > settings.failure_limit) { return false; } }
            });
        }
        if (options) {
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }
            $.extend(settings, options);
        }
        $container = (settings.container === undefined || settings.container === window) ? $window : $(settings.container);
        if (0 === settings.event.indexOf("scroll")) { $container.bind(settings.event, function() { return update(); }); }
        this.each(function() {
            var self = this;
            var $self = $(self);
            self.loaded = false;
            if ($self.attr("src") === undefined || $self.attr("src") === false) { if ($self.is("img")) { $self.attr("src", settings.placeholder); } }
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />").bind("load", function() {
                        var original = $self.attr("data-" + settings.data_attribute);
                        $self.hide();
                        if ($self.is("img")) { $self.attr("src", original); } else { $self.css("background-image", "url('" + original + "')"); }
                        $self[settings.effect](settings.effect_speed);
                        self.loaded = true;
                        var temp = $.grep(elements, function(element) { return !element.loaded; });
                        elements = $(temp);
                        if (settings.load) {
                            var elements_left = elements.length;
                            settings.load.call(self, elements_left, settings);
                        }
                    }).attr("src", $self.attr("data-" + settings.data_attribute));
                }
            });
            if (0 !== settings.event.indexOf("scroll")) { $self.bind(settings.event, function() { if (!self.loaded) { $self.trigger("appear"); } }); }
        });
        $window.bind("resize", function() { update(); });
        if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) { $window.bind("pageshow", function(event) { if (event.originalEvent && event.originalEvent.persisted) { elements.each(function() { $(this).trigger("appear"); }); } }); }
        $(document).ready(function() { update(); });
        return this;
    };
    $.belowthefold = function(element, settings) {
        var fold;
        if (settings.container === undefined || settings.container === window) { fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop(); } else { fold = $(settings.container).offset().top + $(settings.container).height(); }
        return fold <= $(element).offset().top - settings.threshold;
    };
    $.rightoffold = function(element, settings) {
        var fold;
        if (settings.container === undefined || settings.container === window) { fold = $window.width() + $window.scrollLeft(); } else { fold = $(settings.container).offset().left + $(settings.container).width(); }
        return fold <= $(element).offset().left - settings.threshold;
    };
    $.abovethetop = function(element, settings) {
        var fold;
        if (settings.container === undefined || settings.container === window) { fold = $window.scrollTop(); } else { fold = $(settings.container).offset().top; }
        return fold >= $(element).offset().top + settings.threshold + $(element).height();
    };
    $.leftofbegin = function(element, settings) {
        var fold;
        if (settings.container === undefined || settings.container === window) { fold = $window.scrollLeft(); } else { fold = $(settings.container).offset().left; }
        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };
    $.inviewport = function(element, settings) { return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) && !$.belowthefold(element, settings) && !$.abovethetop(element, settings); };
    $.extend($.expr[":"], { "below-the-fold": function(a) { return $.belowthefold(a, { threshold: 0 }); }, "above-the-top": function(a) { return !$.belowthefold(a, { threshold: 0 }); }, "right-of-screen": function(a) { return $.rightoffold(a, { threshold: 0 }); }, "left-of-screen": function(a) { return !$.rightoffold(a, { threshold: 0 }); }, "in-viewport": function(a) { return $.inviewport(a, { threshold: 0 }); }, "above-the-fold": function(a) { return !$.belowthefold(a, { threshold: 0 }); }, "right-of-fold": function(a) { return $.rightoffold(a, { threshold: 0 }); }, "left-of-fold": function(a) { return !$.rightoffold(a, { threshold: 0 }); } });
})(jQuery, window, document);
/*imgloaded*/
(function() {
    function e() {}

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }

    function n(e) { return function() { return this[e].apply(this, arguments) } }
    var i = e.prototype,
        r = this,
        o = r.EventEmitter;
    i.getListeners = function(e) { var t, n, i = this._getEvents(); if ("object" == typeof e) { t = {}; for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]) } else t = i[e] || (i[e] = []); return t }, i.flattenListeners = function(e) { var t, n = []; for (t = 0; e.length > t; t += 1) n.push(e[t].listener); return n }, i.getListenersAsObject = function(e) { var t, n = this.getListeners(e); return n instanceof Array && (t = {}, t[e] = n), t || n }, i.addListener = function(e, n) {
        var i, r = this.getListenersAsObject(e),
            o = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : { listener: n, once: !1 });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function(e, t) { return this.addListener(e, { listener: t, once: !0 }) }, i.once = n("addOnceListener"), i.defineEvent = function(e) { return this.getListeners(e), this }, i.defineEvents = function(e) { for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]); return this }, i.removeListener = function(e, n) { var i, r, o = this.getListenersAsObject(e); for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1)); return this }, i.off = n("removeListener"), i.addListeners = function(e, t) { return this.manipulateListeners(!1, e, t) }, i.removeListeners = function(e, t) { return this.manipulateListeners(!0, e, t) }, i.manipulateListeners = function(e, t, n) {
        var i, r, o = e ? this.removeListener : this.addListener,
            s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) o.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    }, i.removeEvent = function(e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
        var n, i, r, o, s = this.getListenersAsObject(e);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function(e) { var t = Array.prototype.slice.call(arguments, 1); return this.emitEvent(e, t) }, i.setOnceReturnValue = function(e) { return this._onceReturnValue = e, this }, i._getOnceReturnValue = function() { return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0 }, i._getEvents = function() { return this._events || (this._events = {}) }, e.noConflict = function() { return r.EventEmitter = o, e }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() { return e }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
    function(e) {
        function t(t) { var n = e.event; return n.target = n.target || n.srcElement || t, n }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(e, t, n) { e.addEventListener(t, n, !1) } : n.attachEvent && (i = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function() {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function() {};
        n.removeEventListener ? r = function(e, t, n) { e.removeEventListener(t, n, !1) } : n.detachEvent && (r = function(e, t, n) { e.detachEvent("on" + t, e[t + n]); try { delete e[t + n] } catch (i) { e[t + n] = void 0 } });
        var o = { bind: i, unbind: r };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
    }(this),
    function(e, t) { "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) { return t(e, n, i) }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie) }(window, function(e, t, n) {
        function i(e, t) { for (var n in t) e[n] = t[n]; return e }

        function r(e) { return "[object Array]" === d.call(e) }

        function o(e) {
            var t = [];
            if (r(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function s(e, t, n) {
            if (!(this instanceof s)) return new s(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
            var r = this;
            setTimeout(function() { r.check() })
        }

        function f(e) { this.img = e }

        function c(e) { this.src = e, v[e] = this }
        var a = e.jQuery,
            u = e.console,
            h = u !== void 0,
            d = Object.prototype.toString;
        s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
            this.images = [];
            for (var e = 0, t = this.elements.length; t > e; e++) {
                var n = this.elements[e];
                "IMG" === n.nodeName && this.addImage(n);
                var i = n.nodeType;
                if (i && (1 === i || 9 === i || 11 === i))
                    for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                        var f = r[o];
                        this.addImage(f)
                    }
            }
        }, s.prototype.addImage = function(e) {
            var t = new f(e);
            this.images.push(t)
        }, s.prototype.check = function() {
            function e(e, r) { return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0 }
            var t = this,
                n = 0,
                i = this.images.length;
            if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
            for (var r = 0; i > r; r++) {
                var o = this.images[r];
                o.on("confirm", e), o.check()
            }
        }, s.prototype.progress = function(e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
            var t = this;
            setTimeout(function() { t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e) })
        }, s.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var t = this;
            setTimeout(function() {
                if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                    var n = t.hasAnyBroken ? "reject" : "resolve";
                    t.jqDeferred[n](t)
                }
            })
        }, a && (a.fn.imagesLoaded = function(e, t) { var n = new s(this, e, t); return n.jqDeferred.promise(a(this)) }), f.prototype = new t, f.prototype.check = function() {
            var e = v[this.img.src] || new c(this.img.src);
            if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
            if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
            var t = this;
            e.on("confirm", function(e, n) { return t.confirm(e.isLoaded, n), !0 }), e.check()
        }, f.prototype.confirm = function(e, t) { this.isLoaded = e, this.emit("confirm", this, t) };
        var v = {};
        return c.prototype = new t, c.prototype.check = function() {
            if (!this.isChecked) {
                var e = new Image;
                n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
            }
        }, c.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, c.prototype.onload = function(e) { this.confirm(!0, "onload"), this.unbindProxyEvents(e) }, c.prototype.onerror = function(e) { this.confirm(!1, "onerror"), this.unbindProxyEvents(e) }, c.prototype.confirm = function(e, t) { this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t) }, c.prototype.unbindProxyEvents = function(e) { n.unbind(e.target, "load", this), n.unbind(e.target, "error", this) }, s
    });
/*数字递减 data-to='300' data-speed='1500' class="timer"*/
$.fn.countTo = function(options) {
    options = options || {};
    return $(this).each(function() {
        var settings = $.extend({}, $.fn.countTo.defaults, {
            from: $(this).data('from'),
            to: $(this).data('to'),
            speed: $(this).data('speed'),
            refreshInterval: $(this).data('refresh-interval'),
            decimals: $(this).data('decimals')
        }, options);
        var loops = Math.ceil(settings.speed / settings.refreshInterval),
            increment = (settings.to - settings.from) / loops;
        var self = this,
            $self = $(this),
            loopCount = 0,
            value = settings.from,
            data = $self.data('countTo') || {};
        $self.data('countTo', data);
        if (data.interval) {
            clearInterval(data.interval)
        }
        data.interval = setInterval(updateTimer, settings.refreshInterval);
        render(value);

        function updateTimer() {
            value += increment;
            loopCount++;
            render(value);
            if (typeof(settings.onUpdate) == 'function') {
                settings.onUpdate.call(self, value)
            }
            if (loopCount >= loops) {
                $self.removeData('countTo');
                clearInterval(data.interval);
                value = settings.to;
                if (typeof(settings.onComplete) == 'function') {
                    settings.onComplete.call(self, value)
                }
            }
        }

        function render(value) {
            var formattedValue = settings.formatter.call(self, value, settings);
            $self.html(formattedValue)
        }
    })
};
$.fn.countTo.defaults = {
    from: 0,
    to: 0,
    speed: 1000,
    refreshInterval: 100,
    decimals: 0,
    formatter: formatter,
    onUpdate: null,
    onComplete: null
};

function formatter(value, settings) {
    return value.toFixed(settings.decimals)
}
/*rgbaster.js获取图片主色*/
! function(n, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.RGBaster = t() }(this, function() {
    "use strict";
    var t = function(n, o) {
            var u = new Image,
                t = n.src || n;
            "data:" !== t.substring(0, 5) && (u.crossOrigin = "Anonymous"), u.onload = function() {
                var n, t, e, r = (n = u.width, t = u.height, (e = document.createElement("canvas")).setAttribute("width", n), e.setAttribute("height", t), e.getContext("2d"));
                r.drawImage(u, 0, 0);
                var i = r.getImageData(0, 0, u.width, u.height);
                o && o(i.data)
            }, u.src = t
        },
        s = function(n) { return ["rgb(", n, ")"].join("") },
        f = function(n, t) { return { name: s(n), count: t } },
        n = {};
    return n.colors = function(n, u) {
        var a = (u = u || {}).exclude || [],
            c = u.paletteSize || 10;
        t(n, function(n) {
            for (var t = {}, e = "", r = [], i = 0; i < n.length; i += 4) r[0] = n[i], r[1] = n[i + 1], r[2] = n[i + 2], e = r.join(","), -1 === r.indexOf(void 0) && 0 !== n[i + 3] && -1 === a.indexOf(s(e)) && (t[e] = e in t ? t[e] + 1 : 1);
            if (u.success) {
                var o = function(n, t) { if (n.length > t) return n.slice(0, t); for (var e = n.length - 1; e < t - 1; e++) n.push(f("0,0,0", 0)); return n }(function(n) { var t = []; for (var e in n) t.push(f(e, n[e])); return t.sort(function(n, t) { return t.count - n.count }), t }(t), c + 1);
                u.success({ dominant: o[0].name, secondary: o[1].name, palette: o.map(function(n) { return n.name }).slice(1) })
            }
        })
    }, n
});
/*生成分享二维码*/
(function(r) {
    r.fn.qrcode = function(h) {
        var s;

        function u(a) {
            this.mode = s;
            this.data = a
        }

        function o(a, c) {
            this.typeNumber = a;
            this.errorCorrectLevel = c;
            this.modules = null;
            this.moduleCount = 0;
            this.dataCache = null;
            this.dataList = []
        }

        function q(a, c) {
            if (void 0 == a.length) throw Error(a.length + "/" + c);
            for (var d = 0; d < a.length && 0 == a[d];) d++;
            this.num = Array(a.length - d + c);
            for (var b = 0; b < a.length - d; b++) this.num[b] = a[b + d]
        }

        function p(a, c) {
            this.totalCount = a;
            this.dataCount = c
        }

        function t() {
            this.buffer = [];
            this.length = 0
        }
        u.prototype = {
            getLength: function() { return this.data.length },
            write: function(a) { for (var c = 0; c < this.data.length; c++) a.put(this.data.charCodeAt(c), 8) }
        };
        o.prototype = {
            addData: function(a) {
                this.dataList.push(new u(a));
                this.dataCache = null
            },
            isDark: function(a, c) { if (0 > a || this.moduleCount <= a || 0 > c || this.moduleCount <= c) throw Error(a + "," + c); return this.modules[a][c] },
            getModuleCount: function() { return this.moduleCount },
            make: function() {
                if (1 > this.typeNumber) {
                    for (var a = 1, a = 1; 40 > a; a++) {
                        for (var c = p.getRSBlocks(a, this.errorCorrectLevel), d = new t, b = 0, e = 0; e < c.length; e++) b += c[e].dataCount;
                        for (e = 0; e < this.dataList.length; e++) c = this.dataList[e], d.put(c.mode, 4), d.put(c.getLength(), j.getLengthInBits(c.mode, a)), c.write(d);
                        if (d.getLengthInBits() <= 8 * b) break
                    }
                    this.typeNumber = a
                }
                this.makeImpl(!1, this.getBestMaskPattern())
            },
            makeImpl: function(a, c) {
                this.moduleCount = 4 * this.typeNumber + 17;
                this.modules = Array(this.moduleCount);
                for (var d = 0; d < this.moduleCount; d++) { this.modules[d] = Array(this.moduleCount); for (var b = 0; b < this.moduleCount; b++) this.modules[d][b] = null }
                this.setupPositionProbePattern(0, 0);
                this.setupPositionProbePattern(this.moduleCount -
                    7, 0);
                this.setupPositionProbePattern(0, this.moduleCount - 7);
                this.setupPositionAdjustPattern();
                this.setupTimingPattern();
                this.setupTypeInfo(a, c);
                7 <= this.typeNumber && this.setupTypeNumber(a);
                null == this.dataCache && (this.dataCache = o.createData(this.typeNumber, this.errorCorrectLevel, this.dataList));
                this.mapData(this.dataCache, c)
            },
            setupPositionProbePattern: function(a, c) {
                for (var d = -1; 7 >= d; d++)
                    if (!(-1 >= a + d || this.moduleCount <= a + d))
                        for (var b = -1; 7 >= b; b++) - 1 >= c + b || this.moduleCount <= c + b || (this.modules[a + d][c + b] =
                            0 <= d && 6 >= d && (0 == b || 6 == b) || 0 <= b && 6 >= b && (0 == d || 6 == d) || 2 <= d && 4 >= d && 2 <= b && 4 >= b ? !0 : !1)
            },
            getBestMaskPattern: function() { for (var a = 0, c = 0, d = 0; 8 > d; d++) { this.makeImpl(!0, d); var b = j.getLostPoint(this); if (0 == d || a > b) a = b, c = d } return c },
            createMovieClip: function(a, c, d) {
                a = a.createEmptyMovieClip(c, d);
                this.make();
                for (c = 0; c < this.modules.length; c++)
                    for (var d = 1 * c, b = 0; b < this.modules[c].length; b++) {
                        var e = 1 * b;
                        this.modules[c][b] && (a.beginFill(0, 100), a.moveTo(e, d), a.lineTo(e + 1, d), a.lineTo(e + 1, d + 1), a.lineTo(e, d + 1), a.endFill())
                    }
                return a
            },
            setupTimingPattern: function() { for (var a = 8; a < this.moduleCount - 8; a++) null == this.modules[a][6] && (this.modules[a][6] = 0 == a % 2); for (a = 8; a < this.moduleCount - 8; a++) null == this.modules[6][a] && (this.modules[6][a] = 0 == a % 2) },
            setupPositionAdjustPattern: function() {
                for (var a = j.getPatternPosition(this.typeNumber), c = 0; c < a.length; c++)
                    for (var d = 0; d < a.length; d++) {
                        var b = a[c],
                            e = a[d];
                        if (null == this.modules[b][e])
                            for (var f = -2; 2 >= f; f++)
                                for (var i = -2; 2 >= i; i++) this.modules[b + f][e + i] = -2 == f || 2 == f || -2 == i || 2 == i || 0 == f && 0 == i ? !0 : !1
                    }
            },
            setupTypeNumber: function(a) {
                for (var c =
                        j.getBCHTypeNumber(this.typeNumber), d = 0; 18 > d; d++) {
                    var b = !a && 1 == (c >> d & 1);
                    this.modules[Math.floor(d / 3)][d % 3 + this.moduleCount - 8 - 3] = b
                }
                for (d = 0; 18 > d; d++) b = !a && 1 == (c >> d & 1), this.modules[d % 3 + this.moduleCount - 8 - 3][Math.floor(d / 3)] = b
            },
            setupTypeInfo: function(a, c) {
                for (var d = j.getBCHTypeInfo(this.errorCorrectLevel << 3 | c), b = 0; 15 > b; b++) {
                    var e = !a && 1 == (d >> b & 1);
                    6 > b ? this.modules[b][8] = e : 8 > b ? this.modules[b + 1][8] = e : this.modules[this.moduleCount - 15 + b][8] = e
                }
                for (b = 0; 15 > b; b++) e = !a && 1 == (d >> b & 1), 8 > b ? this.modules[8][this.moduleCount -
                    b - 1
                ] = e : 9 > b ? this.modules[8][15 - b - 1 + 1] = e : this.modules[8][15 - b - 1] = e;
                this.modules[this.moduleCount - 8][8] = !a
            },
            mapData: function(a, c) {
                for (var d = -1, b = this.moduleCount - 1, e = 7, f = 0, i = this.moduleCount - 1; 0 < i; i -= 2)
                    for (6 == i && i--;;) {
                        for (var g = 0; 2 > g; g++)
                            if (null == this.modules[b][i - g]) {
                                var n = !1;
                                f < a.length && (n = 1 == (a[f] >>> e & 1));
                                j.getMask(c, b, i - g) && (n = !n);
                                this.modules[b][i - g] = n;
                                e--; - 1 == e && (f++, e = 7)
                            }
                        b += d;
                        if (0 > b || this.moduleCount <= b) {
                            b -= d;
                            d = -d;
                            break
                        }
                    }
            }
        };
        o.PAD0 = 236;
        o.PAD1 = 17;
        o.createData = function(a, c, d) {
            for (var c = p.getRSBlocks(a,
                    c), b = new t, e = 0; e < d.length; e++) {
                var f = d[e];
                b.put(f.mode, 4);
                b.put(f.getLength(), j.getLengthInBits(f.mode, a));
                f.write(b)
            }
            for (e = a = 0; e < c.length; e++) a += c[e].dataCount;
            if (b.getLengthInBits() > 8 * a) throw Error("code length overflow. (" + b.getLengthInBits() + ">" + 8 * a + ")");
            for (b.getLengthInBits() + 4 <= 8 * a && b.put(0, 4); 0 != b.getLengthInBits() % 8;) b.putBit(!1);
            for (; !(b.getLengthInBits() >= 8 * a);) {
                b.put(o.PAD0, 8);
                if (b.getLengthInBits() >= 8 * a) break;
                b.put(o.PAD1, 8)
            }
            return o.createBytes(b, c)
        };
        o.createBytes = function(a, c) {
            for (var d =
                    0, b = 0, e = 0, f = Array(c.length), i = Array(c.length), g = 0; g < c.length; g++) {
                var n = c[g].dataCount,
                    h = c[g].totalCount - n,
                    b = Math.max(b, n),
                    e = Math.max(e, h);
                f[g] = Array(n);
                for (var k = 0; k < f[g].length; k++) f[g][k] = 255 & a.buffer[k + d];
                d += n;
                k = j.getErrorCorrectPolynomial(h);
                n = (new q(f[g], k.getLength() - 1)).mod(k);
                i[g] = Array(k.getLength() - 1);
                for (k = 0; k < i[g].length; k++) h = k + n.getLength() - i[g].length, i[g][k] = 0 <= h ? n.get(h) : 0
            }
            for (k = g = 0; k < c.length; k++) g += c[k].totalCount;
            d = Array(g);
            for (k = n = 0; k < b; k++)
                for (g = 0; g < c.length; g++) k < f[g].length &&
                    (d[n++] = f[g][k]);
            for (k = 0; k < e; k++)
                for (g = 0; g < c.length; g++) k < i[g].length && (d[n++] = i[g][k]);
            return d
        };
        s = 4;
        for (var j = {
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
                    [6, 26, 52,
                        78, 104, 130
                    ],
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
                getBCHTypeInfo: function(a) { for (var c = a << 10; 0 <= j.getBCHDigit(c) - j.getBCHDigit(j.G15);) c ^= j.G15 << j.getBCHDigit(c) - j.getBCHDigit(j.G15); return (a << 10 | c) ^ j.G15_MASK },
                getBCHTypeNumber: function(a) {
                    for (var c = a << 12; 0 <= j.getBCHDigit(c) -
                        j.getBCHDigit(j.G18);) c ^= j.G18 << j.getBCHDigit(c) - j.getBCHDigit(j.G18);
                    return a << 12 | c
                },
                getBCHDigit: function(a) { for (var c = 0; 0 != a;) c++, a >>>= 1; return c },
                getPatternPosition: function(a) { return j.PATTERN_POSITION_TABLE[a - 1] },
                getMask: function(a, c, d) {
                    switch (a) {
                        case 0:
                            return 0 == (c + d) % 2;
                        case 1:
                            return 0 == c % 2;
                        case 2:
                            return 0 == d % 3;
                        case 3:
                            return 0 == (c + d) % 3;
                        case 4:
                            return 0 == (Math.floor(c / 2) + Math.floor(d / 3)) % 2;
                        case 5:
                            return 0 == c * d % 2 + c * d % 3;
                        case 6:
                            return 0 == (c * d % 2 + c * d % 3) % 2;
                        case 7:
                            return 0 == (c * d % 3 + (c + d) % 2) % 2;
                        default:
                            throw Error("bad maskPattern:" +
                                a);
                    }
                },
                getErrorCorrectPolynomial: function(a) { for (var c = new q([1], 0), d = 0; d < a; d++) c = c.multiply(new q([1, l.gexp(d)], 0)); return c },
                getLengthInBits: function(a, c) {
                    if (1 <= c && 10 > c) switch (a) {
                        case 1:
                            return 10;
                        case 2:
                            return 9;
                        case s:
                            return 8;
                        case 8:
                            return 8;
                        default:
                            throw Error("mode:" + a);
                    } else if (27 > c) switch (a) {
                        case 1:
                            return 12;
                        case 2:
                            return 11;
                        case s:
                            return 16;
                        case 8:
                            return 10;
                        default:
                            throw Error("mode:" + a);
                    } else if (41 > c) switch (a) {
                        case 1:
                            return 14;
                        case 2:
                            return 13;
                        case s:
                            return 16;
                        case 8:
                            return 12;
                        default:
                            throw Error("mode:" +
                                a);
                    } else throw Error("type:" + c);
                },
                getLostPoint: function(a) {
                    for (var c = a.getModuleCount(), d = 0, b = 0; b < c; b++)
                        for (var e = 0; e < c; e++) {
                            for (var f = 0, i = a.isDark(b, e), g = -1; 1 >= g; g++)
                                if (!(0 > b + g || c <= b + g))
                                    for (var h = -1; 1 >= h; h++) 0 > e + h || c <= e + h || 0 == g && 0 == h || i == a.isDark(b + g, e + h) && f++;
                            5 < f && (d += 3 + f - 5)
                        }
                    for (b = 0; b < c - 1; b++)
                        for (e = 0; e < c - 1; e++)
                            if (f = 0, a.isDark(b, e) && f++, a.isDark(b + 1, e) && f++, a.isDark(b, e + 1) && f++, a.isDark(b + 1, e + 1) && f++, 0 == f || 4 == f) d += 3;
                    for (b = 0; b < c; b++)
                        for (e = 0; e < c - 6; e++) a.isDark(b, e) && !a.isDark(b, e + 1) && a.isDark(b, e +
                            2) && a.isDark(b, e + 3) && a.isDark(b, e + 4) && !a.isDark(b, e + 5) && a.isDark(b, e + 6) && (d += 40);
                    for (e = 0; e < c; e++)
                        for (b = 0; b < c - 6; b++) a.isDark(b, e) && !a.isDark(b + 1, e) && a.isDark(b + 2, e) && a.isDark(b + 3, e) && a.isDark(b + 4, e) && !a.isDark(b + 5, e) && a.isDark(b + 6, e) && (d += 40);
                    for (e = f = 0; e < c; e++)
                        for (b = 0; b < c; b++) a.isDark(b, e) && f++;
                    a = Math.abs(100 * f / c / c - 50) / 5;
                    return d + 10 * a
                }
            }, l = {
                glog: function(a) { if (1 > a) throw Error("glog(" + a + ")"); return l.LOG_TABLE[a] },
                gexp: function(a) { for (; 0 > a;) a += 255; for (; 256 <= a;) a -= 255; return l.EXP_TABLE[a] },
                EXP_TABLE: Array(256),
                LOG_TABLE: Array(256)
            }, m = 0; 8 > m; m++) l.EXP_TABLE[m] = 1 << m;
        for (m = 8; 256 > m; m++) l.EXP_TABLE[m] = l.EXP_TABLE[m - 4] ^ l.EXP_TABLE[m - 5] ^ l.EXP_TABLE[m - 6] ^ l.EXP_TABLE[m - 8];
        for (m = 0; 255 > m; m++) l.LOG_TABLE[l.EXP_TABLE[m]] = m;
        q.prototype = {
            get: function(a) { return this.num[a] },
            getLength: function() { return this.num.length },
            multiply: function(a) {
                for (var c = Array(this.getLength() + a.getLength() - 1), d = 0; d < this.getLength(); d++)
                    for (var b = 0; b < a.getLength(); b++) c[d + b] ^= l.gexp(l.glog(this.get(d)) + l.glog(a.get(b)));
                return new q(c, 0)
            },
            mod: function(a) {
                if (0 >
                    this.getLength() - a.getLength()) return this;
                for (var c = l.glog(this.get(0)) - l.glog(a.get(0)), d = Array(this.getLength()), b = 0; b < this.getLength(); b++) d[b] = this.get(b);
                for (b = 0; b < a.getLength(); b++) d[b] ^= l.gexp(l.glog(a.get(b)) + c);
                return (new q(d, 0)).mod(a)
            }
        };
        p.RS_BLOCK_TABLE = [
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
            [3, 145, 115, 1, 146,
                116
            ],
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
            [15,
                43, 15, 10, 44, 16
            ],
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
            [22, 73, 45,
                3, 74, 46
            ],
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
            [29, 54, 24, 19,
                55, 25
            ],
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
            [10,
                45, 15, 67, 46, 16
            ],
            [19, 148, 118, 6, 149, 119],
            [18, 75, 47, 31, 76, 48],
            [34, 54, 24, 34, 55, 25],
            [20, 45, 15, 61, 46, 16]
        ];
        p.getRSBlocks = function(a, c) {
            var d = p.getRsBlockTable(a, c);
            if (void 0 == d) throw Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + c);
            for (var b = d.length / 3, e = [], f = 0; f < b; f++)
                for (var h = d[3 * f + 0], g = d[3 * f + 1], j = d[3 * f + 2], l = 0; l < h; l++) e.push(new p(g, j));
            return e
        };
        p.getRsBlockTable = function(a, c) {
            switch (c) {
                case 1:
                    return p.RS_BLOCK_TABLE[4 * (a - 1) + 0];
                case 0:
                    return p.RS_BLOCK_TABLE[4 * (a - 1) + 1];
                case 3:
                    return p.RS_BLOCK_TABLE[4 *
                        (a - 1) + 2];
                case 2:
                    return p.RS_BLOCK_TABLE[4 * (a - 1) + 3]
            }
        };
        t.prototype = {
            get: function(a) { return 1 == (this.buffer[Math.floor(a / 8)] >>> 7 - a % 8 & 1) },
            put: function(a, c) { for (var d = 0; d < c; d++) this.putBit(1 == (a >>> c - d - 1 & 1)) },
            getLengthInBits: function() { return this.length },
            putBit: function(a) {
                var c = Math.floor(this.length / 8);
                this.buffer.length <= c && this.buffer.push(0);
                a && (this.buffer[c] |= 128 >>> this.length % 8);
                this.length++
            }
        };
        "string" === typeof h && (h = { text: h });
        h = r.extend({}, {
            render: "canvas",
            width: 256,
            height: 256,
            typeNumber: -1,
            correctLevel: 2,
            background: "#ffffff",
            foreground: "#000000"
        }, h);
        return this.each(function() {
            var a;
            if ("canvas" == h.render) {
                a = new o(h.typeNumber, h.correctLevel);
                a.addData(h.text);
                a.make();
                var c = document.createElement("canvas");
                c.width = h.width;
                c.height = h.height;
                for (var d = c.getContext("2d"), b = h.width / a.getModuleCount(), e = h.height / a.getModuleCount(), f = 0; f < a.getModuleCount(); f++)
                    for (var i = 0; i < a.getModuleCount(); i++) {
                        d.fillStyle = a.isDark(f, i) ? h.foreground : h.background;
                        var g = Math.ceil((i + 1) * b) - Math.floor(i * b),
                            j = Math.ceil((f + 1) * b) - Math.floor(f * b);
                        d.fillRect(Math.round(i * b), Math.round(f * e), g, j)
                    }
            } else {
                a = new o(h.typeNumber, h.correctLevel);
                a.addData(h.text);
                a.make();
                c = r("<table></table>").css("width", h.width + "px").css("height", h.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", h.background);
                d = h.width / a.getModuleCount();
                b = h.height / a.getModuleCount();
                for (e = 0; e < a.getModuleCount(); e++) {
                    f = r("<tr></tr>").css("height", b + "px").appendTo(c);
                    for (i = 0; i < a.getModuleCount(); i++) r("<td></td>").css("width",
                        d + "px").css("background-color", a.isDark(e, i) ? h.foreground : h.background).appendTo(f)
                }
            }
            a = c;
            jQuery(a).appendTo(this)
        })
    }
})(jQuery);

/*倒计时*/
(function($) {
    $.fn.countDown = function(options) {
        config = {};
        $.extend(config, options);
        diffSecs = this.setCountDown(config);
        if (config.onComplete) {
            $.data($(this)[0], 'callback', config.onComplete);
        }
        if (config.omitWeeks) {
            $.data($(this)[0], 'omitWeeks', config.omitWeeks);
        }
        $('#' + $(this).attr('id') + ' .digit').html('<div class="top"></div><div class="bottom"></div>');
        $(this).doCountDown($(this).attr('id'), diffSecs, 500);
        return this;
    };
    $.fn.stopCountDown = function() {
        clearTimeout($.data(this[0], 'timer'));
    };
    $.fn.startCountDown = function() {
        this.doCountDown($(this).attr('id'), $.data(this[0], 'diffSecs'), 500);
    };
    $.fn.setCountDown = function(options) {
        var targetTime = new Date();
        if (options.targetDate) {
            targetTime = new Date(options.targetDate.month + '/' + options.targetDate.day + '/' + options.targetDate.year + ' ' + options.targetDate.hour + ':' + options.targetDate.min + ':' + options.targetDate.sec + (options.targetDate.utc ? ' UTC' : ''));
        } else if (options.targetOffset) {
            targetTime.setFullYear(options.targetOffset.year + targetTime.getFullYear());
            targetTime.setMonth(options.targetOffset.month + targetTime.getMonth());
            targetTime.setDate(options.targetOffset.day + targetTime.getDate());
            targetTime.setHours(options.targetOffset.hour + targetTime.getHours());
            targetTime.setMinutes(options.targetOffset.min + targetTime.getMinutes());
            targetTime.setSeconds(options.targetOffset.sec + targetTime.getSeconds());
        }
        var nowTime = new Date();
        diffSecs = Math.floor((targetTime.valueOf() - nowTime.valueOf()) / 1000);
        $.data(this[0], 'diffSecs', diffSecs);
        return diffSecs;
    };
    $.fn.doCountDown = function(id, diffSecs, duration) {
        $this = $('#' + id);
        if (diffSecs <= 0) {
            diffSecs = 0;
            if ($.data($this[0], 'timer')) {
                clearTimeout($.data($this[0], 'timer'));
            }
        }
        secs = diffSecs % 60;
        mins = Math.floor(diffSecs / 60) % 60;
        hours = Math.floor(diffSecs / 60 / 60) % 24;
        if ($.data($this[0], 'omitWeeks') == true) {
            days = Math.floor(diffSecs / 60 / 60 / 24);
            //weeks = Math.floor(diffSecs / 60 / 60 / 24 / 7);
        } else {
            days = Math.floor(diffSecs / 60 / 60 / 24);
            //weeks = Math.floor(diffSecs / 60 / 60 / 24 / 7);
        }
        $this.dashChangeTo(id, 'seconds_dash', secs, duration ? duration : 800);
        $this.dashChangeTo(id, 'minutes_dash', mins, duration ? duration : 1200);
        $this.dashChangeTo(id, 'hours_dash', hours, duration ? duration : 1200);
        $this.dashChangeTo(id, 'days_dash', days, duration ? duration : 1200);
        //$this.dashChangeTo(id, 'weeks_dash', weeks, duration ? duration : 1200);
        $.data($this[0], 'diffSecs', diffSecs);
        if (diffSecs > 0) {
            e = $this;
            t = setTimeout(function() {
                e.doCountDown(id, diffSecs - 1)
            }, 1000);
            $.data(e[0], 'timer', t);
        } else if (cb = $.data($this[0], 'callback')) {
            $.data($this[0], 'callback')();
        }
    };
    $.fn.dashChangeTo = function(id, dash, n, duration) {
        $this = $('#' + id);
        for (var i = ($this.find('.' + dash + ' .digit').length - 1); i >= 0; i--) {
            var d = n % 10;
            n = (n - d) / 10;
            $this.digitChangeTo('#' + $this.attr('id') + ' .' + dash + ' .digit:eq(' + i + ')', d, duration);
        }
    };
    $.fn.digitChangeTo = function(digit, n, duration) {
        if (!duration) {
            duration = 800;
        }
        if ($(digit + ' div.top').html() != n + '') {
            $(digit + ' div.top').css({
                'display': 'none'
            });
            $(digit + ' div.top').html((n ? n : '0')).slideDown(duration);
            $(digit + ' div.bottom').animate({
                'height': ''
            }, duration, function() {
                $(digit + ' div.bottom').html($(digit + ' div.top').html());
                $(digit + ' div.bottom').css({
                    'display': 'block',
                    'height': ''
                });
                $(digit + ' div.top').hide().slideUp(10);
            });
        }
    };
})(jQuery);