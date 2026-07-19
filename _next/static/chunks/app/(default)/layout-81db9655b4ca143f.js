(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [498],
  {
    6452: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 7297));
    },
    7297: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => u });
      var i = n(2478),
        a = n(2206),
        o = n(7761),
        r = n.n(o);
      n(8674);
      var s = n(9087),
        c = n(5491);
      let l = "text-fg-muted transition hover:text-rh-green";
      function d() {
        return (0, i.jsx)("footer", {
          className: "border-t border-line bg-ink-2",
          children: (0, i.jsxs)("div", {
            className:
              "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6",
            children: [
              (0, i.jsx)(s.A, {}),
              (0, i.jsxs)("p", {
                className: "text-center text-sm text-fg-muted sm:text-right",
                children: [
                  "Built on",
                  " ",
                  (0, i.jsx)("a", {
                    className:
                      "font-medium text-rh-green transition hover:text-rh-green-hover",
                    href: "https://docs.robinhood.com/chain/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Robinhood Chain",
                  }),
                  (0, i.jsx)("span", {
                    className: "text-fg-muted/50",
                    children: " \xb7 ",
                  }),
                  "\xa9 2026 Priv\xe9",
                ],
              }),
            ],
          }),
        });
      }
      function u(e) {
        let { children: t } = e;
        return (
          (0, a.useEffect)(() => {
            r().init({
              once: !0,
              disable: "phone",
              duration: 600,
              easing: "ease-out-sine",
            });
          }),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("main", {
                className: "relative flex grow flex-col",
                children: t,
              }),
              (0, i.jsx)(d, {}),
            ],
          })
        );
      }
    },
    9087: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => c });
      var i = n(2478),
        a = n(7212),
        o = n.n(a),
        r = n(491),
        s = n.n(r);
      function c() {
        return (0, i.jsxs)(o(), {
          href: "/",
          className: "inline-flex shrink-0 items-center gap-2.5",
          "aria-label": "Priv\xe9",
          children: [
            (0, i.jsx)(s(), {
              src: "/logo.png",
              alt: "",
              width: 30,
              height: 30,
              priority: !0,
              className: "rounded-lg",
            }),
            (0, i.jsx)("span", {
              className:
                "font-nacelle text-base font-semibold tracking-tight text-fg",
              children: "Priv\xe9",
            }),
          ],
        });
      }
    },
    5491: (e, t, n) => {
      "use strict";
      function i() {
        return "";
      }
      n.d(t, { R: () => i });
    },
    7761: function (e, t, n) {
      var i;
      (i = function () {
        "use strict";
        var e =
            "undefined" != typeof window
              ? window
              : void 0 !== n.g
              ? n.g
              : "undefined" != typeof self
              ? self
              : {},
          t = "Expected a function",
          i = NaN,
          a = /^\s+|\s+$/g,
          o = /^[-+]0x[0-9a-f]+$/i,
          r = /^0b[01]+$/i,
          s = /^0o[0-7]+$/i,
          c = parseInt,
          l = "object" == typeof e && e && e.Object === Object && e,
          d = "object" == typeof self && self && self.Object === Object && self,
          u = l || d || Function("return this")(),
          m = Object.prototype.toString,
          f = Math.max,
          p = Math.min,
          h = function () {
            return u.Date.now();
          };
        function v(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function b(e) {
          if ("number" == typeof e) return e;
          if (
            "symbol" == typeof (t = e) ||
            (t && "object" == typeof t && "[object Symbol]" == m.call(t))
          )
            return i;
          if (v(e)) {
            var t,
              n = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = v(n) ? n + "" : n;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(a, "");
          var l = r.test(e);
          return l || s.test(e) ? c(e.slice(2), l ? 2 : 8) : o.test(e) ? i : +e;
        }
        var g = function (e, n, i) {
            var a = !0,
              o = !0;
            if ("function" != typeof e) throw TypeError(t);
            return (
              v(i) &&
                ((a = "leading" in i ? !!i.leading : a),
                (o = "trailing" in i ? !!i.trailing : o)),
              (function (e, n, i) {
                var a,
                  o,
                  r,
                  s,
                  c,
                  l,
                  d = 0,
                  u = !1,
                  m = !1,
                  g = !0;
                if ("function" != typeof e) throw TypeError(t);
                function x(t) {
                  var n = a,
                    i = o;
                  return (a = o = void 0), (d = t), (s = e.apply(i, n));
                }
                function y(e) {
                  var t = e - l;
                  return void 0 === l || t >= n || t < 0 || (m && e - d >= r);
                }
                function w() {
                  var e,
                    t = h();
                  if (y(t)) return j(t);
                  c = setTimeout(
                    w,
                    ((e = n - (t - l)), m ? p(e, r - (t - d)) : e)
                  );
                }
                function j(e) {
                  return (c = void 0), g && a ? x(e) : ((a = o = void 0), s);
                }
                function k() {
                  var e,
                    t = h(),
                    i = y(t);
                  if (((a = arguments), (o = this), (l = t), i)) {
                    if (void 0 === c)
                      return (d = e = l), (c = setTimeout(w, n)), u ? x(e) : s;
                    if (m) return (c = setTimeout(w, n)), x(l);
                  }
                  return void 0 === c && (c = setTimeout(w, n)), s;
                }
                return (
                  (n = b(n) || 0),
                  v(i) &&
                    ((u = !!i.leading),
                    (r = (m = "maxWait" in i) ? f(b(i.maxWait) || 0, n) : r),
                    (g = "trailing" in i ? !!i.trailing : g)),
                  (k.cancel = function () {
                    void 0 !== c && clearTimeout(c),
                      (d = 0),
                      (a = l = o = c = void 0);
                  }),
                  (k.flush = function () {
                    return void 0 === c ? s : j(h());
                  }),
                  k
                );
              })(e, n, { leading: a, maxWait: n, trailing: o })
            );
          },
          x = NaN,
          y = /^\s+|\s+$/g,
          w = /^[-+]0x[0-9a-f]+$/i,
          j = /^0b[01]+$/i,
          k = /^0o[0-7]+$/i,
          N = parseInt,
          O = "object" == typeof e && e && e.Object === Object && e,
          E = "object" == typeof self && self && self.Object === Object && self,
          C = O || E || Function("return this")(),
          z = Object.prototype.toString,
          A = Math.max,
          S = Math.min,
          q = function () {
            return C.Date.now();
          };
        function L(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function T(e) {
          if ("number" == typeof e) return e;
          if (
            "symbol" == typeof (t = e) ||
            (t && "object" == typeof t && "[object Symbol]" == z.call(t))
          )
            return x;
          if (L(e)) {
            var t,
              n = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = L(n) ? n + "" : n;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(y, "");
          var i = j.test(e);
          return i || k.test(e) ? N(e.slice(2), i ? 2 : 8) : w.test(e) ? x : +e;
        }
        var _ = function (e, t, n) {
            var i,
              a,
              o,
              r,
              s,
              c,
              l = 0,
              d = !1,
              u = !1,
              m = !0;
            if ("function" != typeof e) throw TypeError("Expected a function");
            function f(t) {
              var n = i,
                o = a;
              return (i = a = void 0), (l = t), (r = e.apply(o, n));
            }
            function p(e) {
              var n = e - c;
              return void 0 === c || n >= t || n < 0 || (u && e - l >= o);
            }
            function h() {
              var e,
                n = q();
              if (p(n)) return v(n);
              s = setTimeout(h, ((e = t - (n - c)), u ? S(e, o - (n - l)) : e));
            }
            function v(e) {
              return (s = void 0), m && i ? f(e) : ((i = a = void 0), r);
            }
            function b() {
              var e,
                n = q(),
                o = p(n);
              if (((i = arguments), (a = this), (c = n), o)) {
                if (void 0 === s)
                  return (l = e = c), (s = setTimeout(h, t)), d ? f(e) : r;
                if (u) return (s = setTimeout(h, t)), f(c);
              }
              return void 0 === s && (s = setTimeout(h, t)), r;
            }
            return (
              (t = T(t) || 0),
              L(n) &&
                ((d = !!n.leading),
                (o = (u = "maxWait" in n) ? A(T(n.maxWait) || 0, t) : o),
                (m = "trailing" in n ? !!n.trailing : m)),
              (b.cancel = function () {
                void 0 !== s && clearTimeout(s),
                  (l = 0),
                  (i = c = a = s = void 0);
              }),
              (b.flush = function () {
                return void 0 === s ? r : v(q());
              }),
              b
            );
          },
          M = function () {};
        function P(e) {
          e &&
            e.forEach(function (e) {
              var t = Array.prototype.slice.call(e.addedNodes),
                n = Array.prototype.slice.call(e.removedNodes);
              if (
                (function e(t) {
                  var n = void 0,
                    i = void 0;
                  for (n = 0; n < t.length; n += 1)
                    if (
                      ((i = t[n]).dataset && i.dataset.aos) ||
                      (i.children && e(i.children))
                    )
                      return !0;
                  return !1;
                })(t.concat(n))
              )
                return M();
            });
        }
        function D() {
          return (
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver
          );
        }
        var H = {
            isSupported: function () {
              return !!D();
            },
            ready: function (e, t) {
              var n = window.document,
                i = new (D())(P);
              (M = t),
                i.observe(n.documentElement, {
                  childList: !0,
                  subtree: !0,
                  removedNodes: !0,
                });
            },
          },
          $ = function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          },
          I = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          W =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          R =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          F =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          Y =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          B =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
        function K() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        var V = new ((function () {
            function e() {
              $(this, e);
            }
            return (
              I(e, [
                {
                  key: "phone",
                  value: function () {
                    var e = K();
                    return !(!R.test(e) && !F.test(e.substr(0, 4)));
                  },
                },
                {
                  key: "mobile",
                  value: function () {
                    var e = K();
                    return !(!Y.test(e) && !B.test(e.substr(0, 4)));
                  },
                },
                {
                  key: "tablet",
                  value: function () {
                    return this.mobile() && !this.phone();
                  },
                },
                {
                  key: "ie11",
                  value: function () {
                    return (
                      "-ms-scroll-limit" in document.documentElement.style &&
                      "-ms-ime-align" in document.documentElement.style
                    );
                  },
                },
              ]),
              e
            );
          })())(),
          G = function (e, t) {
            var n = void 0;
            return (
              V.ie11()
                ? (n = document.createEvent("CustomEvent")).initCustomEvent(
                    e,
                    !0,
                    !0,
                    { detail: t }
                  )
                : (n = new CustomEvent(e, { detail: t })),
              document.dispatchEvent(n)
            );
          },
          Q = function (e) {
            return e.forEach(function (e, t) {
              var n, i, a, o, r, s;
              return (
                (n = window.pageYOffset),
                (i = e.options),
                (a = e.position),
                (o = e.node),
                e.data,
                (r = function () {
                  var t;
                  e.animated &&
                    ((t = i.animatedClassNames) &&
                      t.forEach(function (e) {
                        return o.classList.remove(e);
                      }),
                    G("aos:out", o),
                    e.options.id && G("aos:in:" + e.options.id, o),
                    (e.animated = !1));
                }),
                void (i.mirror && n >= a.out && !i.once
                  ? r()
                  : n >= a.in
                  ? e.animated ||
                    ((s = i.animatedClassNames) &&
                      s.forEach(function (e) {
                        return o.classList.add(e);
                      }),
                    G("aos:in", o),
                    e.options.id && G("aos:in:" + e.options.id, o),
                    (e.animated = !0))
                  : e.animated && !i.once && r())
              );
            });
          },
          Z = function (e) {
            for (
              var t = 0, n = 0;
              e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

            )
              (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
                (n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
                (e = e.offsetParent);
            return { top: n, left: t };
          },
          J = function (e, t, n) {
            var i = e.getAttribute("data-aos-" + t);
            if (void 0 !== i) {
              if ("true" === i) return !0;
              if ("false" === i) return !1;
            }
            return i || n;
          },
          U = function () {
            var e = document.querySelectorAll("[data-aos]");
            return Array.prototype.map.call(e, function (e) {
              return { node: e };
            });
          },
          X = [],
          ee = !1,
          et = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            mirror: !1,
            anchorPlacement: "top-bottom",
            startEvent: "DOMContentLoaded",
            animatedClassName: "aos-animate",
            initClassName: "aos-init",
            useClassNames: !1,
            disableMutationObserver: !1,
            throttleDelay: 99,
            debounceDelay: 50,
          },
          en = function () {
            return document.all && !window.atob;
          },
          ei = function () {
            var e, t;
            arguments.length > 0 &&
              void 0 !== arguments[0] &&
              arguments[0] &&
              (ee = !0),
              ee &&
                ((e = X),
                (t = et),
                e.forEach(function (e, n) {
                  var i,
                    a,
                    o,
                    r,
                    s,
                    c = J(e.node, "mirror", t.mirror),
                    l = J(e.node, "once", t.once),
                    d = J(e.node, "id"),
                    u = t.useClassNames && e.node.getAttribute("data-aos"),
                    m = [t.animatedClassName]
                      .concat(u ? u.split(" ") : [])
                      .filter(function (e) {
                        return "string" == typeof e;
                      });
                  t.initClassName && e.node.classList.add(t.initClassName),
                    (e.position = {
                      in: (function (e, t, n) {
                        var i = window.innerHeight,
                          a = J(e, "anchor"),
                          o = J(e, "anchor-placement"),
                          r = Number(J(e, "offset", o ? 0 : t)),
                          s = e;
                        a &&
                          document.querySelectorAll(a) &&
                          (s = document.querySelectorAll(a)[0]);
                        var c = Z(s).top - i;
                        switch (o || n) {
                          case "top-bottom":
                            break;
                          case "center-bottom":
                            c += s.offsetHeight / 2;
                            break;
                          case "bottom-bottom":
                            c += s.offsetHeight;
                            break;
                          case "top-center":
                            c += i / 2;
                            break;
                          case "center-center":
                            c += i / 2 + s.offsetHeight / 2;
                            break;
                          case "bottom-center":
                            c += i / 2 + s.offsetHeight;
                            break;
                          case "top-top":
                            c += i;
                            break;
                          case "bottom-top":
                            c += i + s.offsetHeight;
                            break;
                          case "center-top":
                            c += i + s.offsetHeight / 2;
                        }
                        return c + r;
                      })(e.node, t.offset, t.anchorPlacement),
                      out:
                        c &&
                        ((i = e.node),
                        (a = t.offset),
                        window.innerHeight,
                        (o = J(i, "anchor")),
                        (r = J(i, "offset", a)),
                        (s = i),
                        o &&
                          document.querySelectorAll(o) &&
                          (s = document.querySelectorAll(o)[0]),
                        Z(s).top + s.offsetHeight - r),
                    }),
                    (e.options = {
                      once: l,
                      mirror: c,
                      animatedClassNames: m,
                      id: d,
                    });
                }),
                Q((X = e)),
                window.addEventListener(
                  "scroll",
                  g(function () {
                    Q(X, et.once);
                  }, et.throttleDelay)
                ));
          },
          ea = function () {
            if (((X = U()), er(et.disable) || en())) return eo();
            ei();
          },
          eo = function () {
            X.forEach(function (e, t) {
              e.node.removeAttribute("data-aos"),
                e.node.removeAttribute("data-aos-easing"),
                e.node.removeAttribute("data-aos-duration"),
                e.node.removeAttribute("data-aos-delay"),
                et.initClassName && e.node.classList.remove(et.initClassName),
                et.animatedClassName &&
                  e.node.classList.remove(et.animatedClassName);
            });
          },
          er = function (e) {
            return (
              !0 === e ||
              ("mobile" === e && V.mobile()) ||
              ("phone" === e && V.phone()) ||
              ("tablet" === e && V.tablet()) ||
              ("function" == typeof e && !0 === e())
            );
          };
        return {
          init: function (e) {
            return (
              (et = W(et, e)),
              (X = U()),
              et.disableMutationObserver ||
                H.isSupported() ||
                (console.info(
                  '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                ),
                (et.disableMutationObserver = !0)),
              et.disableMutationObserver || H.ready("[data-aos]", ea),
              er(et.disable) || en()
                ? eo()
                : (document
                    .querySelector("body")
                    .setAttribute("data-aos-easing", et.easing),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-duration", et.duration),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-delay", et.delay),
                  -1 === ["DOMContentLoaded", "load"].indexOf(et.startEvent)
                    ? document.addEventListener(et.startEvent, function () {
                        ei(!0);
                      })
                    : window.addEventListener("load", function () {
                        ei(!0);
                      }),
                  "DOMContentLoaded" === et.startEvent &&
                    ["complete", "interactive"].indexOf(document.readyState) >
                      -1 &&
                    ei(!0),
                  window.addEventListener(
                    "resize",
                    _(ei, et.debounceDelay, !0)
                  ),
                  window.addEventListener(
                    "orientationchange",
                    _(ei, et.debounceDelay, !0)
                  ),
                  X)
            );
          },
          refresh: ei,
          refreshHard: ea,
        };
      }),
        (e.exports = i());
    },
    491: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return c;
          },
          getImageProps: function () {
            return s;
          },
        });
      let i = n(1356),
        a = n(8557),
        o = n(1421),
        r = i._(n(3431));
      function s(e) {
        let { props: t } = (0, a.getImgProps)(e, {
          defaultLoader: r.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let c = o.Image;
    },
    8674: () => {},
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [307, 212, 421, 96, 27, 358], () => t(6452)), (_N_E = e.O());
  },
]);
