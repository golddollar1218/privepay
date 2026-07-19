(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    7114: (e, t, r) => {
      Promise.resolve().then(r.t.bind(r, 5075, 23)),
        Promise.resolve().then(r.bind(r, 8025)),
        Promise.resolve().then(r.t.bind(r, 7480, 23)),
        Promise.resolve().then(r.t.bind(r, 9634, 23));
    },
    8025: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => x });
      var n = r(2478),
        s = r(2206),
        a = r(7212),
        i = r.n(a),
        l = r(9087),
        o = r(5491);
      let d =
          "https://app.uniswap.org/swap?chain=robinhood&inputCurrency=NATIVE&outputCurrency=0x95065121762ae01248a55cb08eeeed24960e42d6",
        c = [
          { href: "/docs", label: "Introduction", hint: "What Priv\xe9 is" },
          {
            href: "/docs/how-it-works",
            label: "How it works",
            hint: "Deposit, prove, withdraw",
          },
          {
            href: "/docs/architecture",
            label: "Architecture",
            hint: "Contracts, circuits, SDK",
          },
          {
            href: "/docs/contracts",
            label: "Contracts",
            hint: "Live addresses on Robinhood Chain",
          },
          {
            href: "/docs/compliance",
            label: "Compliance model",
            hint: "What is live, what is planned",
          },
          {
            href: "/docs/testnet",
            label: "Testnet guide",
            hint: "Try it step by step",
          },
          {
            href: "/docs/security",
            label: "Security and risk",
            hint: "Read before you deposit",
          },
          { href: "/docs/faq", label: "FAQ", hint: "Straight answers" },
        ],
        h =
          "text-fg-muted transition hover:text-rh-green focus-visible:text-rh-green focus-visible:outline-none";
      function m() {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          width: "16",
          height: "16",
          fill: "currentColor",
          "aria-hidden": "true",
          children: (0, n.jsx)("path", {
            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
          }),
        });
      }
      function x() {
        let [e, t] = (0, s.useState)(!1),
          [r, a] = (0, s.useState)(!1),
          x = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            if (!e) return;
            let r = (e) => {
                x.current && !x.current.contains(e.target) && t(!1);
              },
              n = (e) => {
                "Escape" === e.key && t(!1);
              };
            return (
              document.addEventListener("mousedown", r),
              document.addEventListener("keydown", n),
              () => {
                document.removeEventListener("mousedown", r),
                  document.removeEventListener("keydown", n);
              }
            );
          }, [e]),
          (0, n.jsx)("header", {
            className: "z-30 mt-2 w-full md:mt-5",
            children: (0, n.jsxs)("div", {
              className: "mx-auto max-w-6xl px-4 sm:px-6",
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "relative flex h-14 items-center justify-between gap-3 rounded-2xl border border-line bg-ink-2/80 px-3 shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset] after:absolute after:inset-0 after:-z-10 after:rounded-[inherit] after:backdrop-blur-md",
                  children: [
                    (0, n.jsx)("div", {
                      className: "flex flex-1 items-center",
                      children: (0, n.jsx)(l.A, {}),
                    }),
                    (0, n.jsxs)("nav", {
                      className:
                        "hidden items-center gap-6 text-sm font-medium md:flex",
                      children: [
                        (0, n.jsx)(i(), {
                          href: "/#how-it-works",
                          className: h,
                          children: "How it works",
                        }),
                        (0, n.jsx)(i(), {
                          href: "/#compliance",
                          className: h,
                          children: "Compliance",
                        }),
                        (0, n.jsxs)("div", {
                          ref: x,
                          className: "relative",
                          children: [
                            (0, n.jsxs)("button", {
                              type: "button",
                              className: "inline-flex items-center gap-1 "
                                .concat(h, " ")
                                .concat(e ? "text-rh-green" : ""),
                              "aria-expanded": e,
                              "aria-haspopup": "true",
                              onClick: () => t((e) => !e),
                              children: [
                                "Docs",
                                (0, n.jsx)("svg", {
                                  viewBox: "0 0 24 24",
                                  width: "14",
                                  height: "14",
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: "2",
                                  "aria-hidden": "true",
                                  className: "transition-transform ".concat(
                                    e ? "rotate-180" : ""
                                  ),
                                  children: (0, n.jsx)("path", {
                                    d: "m6 9 6 6 6-6",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }),
                                }),
                              ],
                            }),
                            e &&
                              (0, n.jsx)("div", {
                                className:
                                  "absolute right-1/2 top-full z-40 mt-3 w-[19rem] translate-x-1/2 rounded-2xl border border-line bg-ink-2 p-2 shadow-2xl shadow-black/60",
                                children: (0, n.jsx)("ul", {
                                  children: c.map((e) =>
                                    (0, n.jsx)(
                                      "li",
                                      {
                                        children: (0, n.jsxs)(i(), {
                                          href: e.href,
                                          onClick: () => t(!1),
                                          className:
                                            "block rounded-xl px-3 py-2 transition hover:bg-ink-3",
                                          children: [
                                            (0, n.jsx)("span", {
                                              className:
                                                "block text-sm font-medium text-fg",
                                              children: e.label,
                                            }),
                                            (0, n.jsx)("span", {
                                              className:
                                                "block text-xs text-fg-muted",
                                              children: e.hint,
                                            }),
                                          ],
                                        }),
                                      },
                                      e.href
                                    )
                                  ),
                                }),
                              }),
                          ],
                        }),
                        (0, n.jsx)(i(), {
                          href: "/roadmap",
                          className: h,
                          children: "Roadmap",
                        }),
                        (0, n.jsx)(i(), {
                          href: "/token",
                          className: h,
                          children: "$PRIVE",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("ul", {
                      className: "flex flex-1 items-center justify-end gap-1.5",
                      children: [
                        (0, n.jsx)("li", {
                          className: "hidden sm:block",
                          children: (0, n.jsx)("a", {
                            href: "https://x.com/privepay_rh",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": "Priv\xe9 on X",
                            className:
                              "inline-flex h-8 w-8 items-center justify-center rounded-lg text-fg-muted transition hover:bg-ink-3 hover:text-rh-green",
                            children: (0, n.jsx)(m, {}),
                          }),
                        }),
                        d
                          ? (0, n.jsx)("li", {
                              className: "hidden sm:block",
                              children: (0, n.jsx)("a", {
                                href: d,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "btn-sm border border-rh-green/40 bg-ink-3 py-[5px] font-semibold text-rh-green transition-colors hover:border-rh-green/70 hover:bg-ink-2",
                                children: "Buy $PRIVE",
                              }),
                            })
                          : null,
                        (0, n.jsx)("li", {
                          className: "md:hidden",
                          children: (0, n.jsx)("button", {
                            type: "button",
                            "aria-label": r ? "Close menu" : "Open menu",
                            "aria-expanded": r,
                            onClick: () => a((e) => !e),
                            className:
                              "inline-flex h-8 w-8 items-center justify-center rounded-lg text-fg transition hover:bg-ink-3",
                            children: (0, n.jsx)("svg", {
                              viewBox: "0 0 24 24",
                              width: "18",
                              height: "18",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              "aria-hidden": "true",
                              children: r
                                ? (0, n.jsx)("path", {
                                    d: "M6 6l12 12M18 6 6 18",
                                  })
                                : (0, n.jsxs)(n.Fragment, {
                                    children: [
                                      (0, n.jsx)("path", { d: "M4 7h16" }),
                                      (0, n.jsx)("path", { d: "M4 12h16" }),
                                      (0, n.jsx)("path", { d: "M4 17h16" }),
                                    ],
                                  }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                r &&
                  (0, n.jsx)("div", {
                    className:
                      "mt-2 rounded-2xl border border-line bg-ink-2 p-3 shadow-2xl shadow-black/60 md:hidden",
                    children: (0, n.jsxs)("nav", {
                      children: [
                        (0, n.jsx)("p", {
                          className:
                            "px-2 pb-1 pt-1 text-[0.65rem] font-semibold uppercase tracking-wider text-fg-muted",
                          children: "Product",
                        }),
                        (0, n.jsx)(i(), {
                          href: "/#how-it-works",
                          onClick: () => a(!1),
                          className:
                            "block rounded-lg px-2 py-2 text-sm text-fg-muted transition hover:bg-ink-3 hover:text-fg",
                          children: "How it works",
                        }),
                        (0, n.jsx)(i(), {
                          href: "/#compliance",
                          onClick: () => a(!1),
                          className:
                            "block rounded-lg px-2 py-2 text-sm text-fg-muted transition hover:bg-ink-3 hover:text-fg",
                          children: "Compliance",
                        }),
                        (0, n.jsx)(i(), {
                          href: "/roadmap",
                          onClick: () => a(!1),
                          className:
                            "block rounded-lg px-2 py-2 text-sm text-fg-muted transition hover:bg-ink-3 hover:text-fg",
                          children: "Roadmap",
                        }),
                        (0, n.jsx)(i(), {
                          href: "/token",
                          onClick: () => a(!1),
                          className:
                            "block rounded-lg px-2 py-2 text-sm text-fg-muted transition hover:bg-ink-3 hover:text-fg",
                          children: "$PRIVE",
                        }),
                        d
                          ? (0, n.jsx)("a", {
                              href: d,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              onClick: () => a(!1),
                              className:
                                "block rounded-lg px-2 py-2 text-sm font-semibold text-rh-green transition hover:bg-ink-3",
                              children: "Buy $PRIVE",
                            })
                          : null,
                        (0, n.jsx)("p", {
                          className:
                            "px-2 pb-1 pt-3 text-[0.65rem] font-semibold uppercase tracking-wider text-fg-muted",
                          children: "Docs",
                        }),
                        c.map((e) =>
                          (0, n.jsx)(
                            i(),
                            {
                              href: e.href,
                              onClick: () => a(!1),
                              className:
                                "block rounded-lg px-2 py-2 text-sm text-fg-muted transition hover:bg-ink-3 hover:text-fg",
                              children: e.label,
                            },
                            e.href
                          )
                        ),
                        (0, n.jsxs)("a", {
                          href: "https://x.com/privepay_rh",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "mt-3 flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-fg-muted transition hover:bg-ink-3 hover:text-fg",
                          children: [(0, n.jsx)(m, {}), "Follow on X"],
                        }),
                      ],
                    }),
                  }),
              ],
            }),
          })
        );
      }
    },
    9087: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => o });
      var n = r(2478),
        s = r(7212),
        a = r.n(s),
        i = r(491),
        l = r.n(i);
      function o() {
        return (0, n.jsxs)(a(), {
          href: "/",
          className: "inline-flex shrink-0 items-center gap-2.5",
          "aria-label": "Priv\xe9",
          children: [
            (0, n.jsx)(l(), {
              src: "/logo.png",
              alt: "",
              width: 30,
              height: 30,
              priority: !0,
              className: "rounded-lg",
            }),
            (0, n.jsx)("span", {
              className:
                "font-nacelle text-base font-semibold tracking-tight text-fg",
              children: "Priv\xe9",
            }),
          ],
        });
      }
    },
    5491: (e, t, r) => {
      "use strict";
      function n() {
        return "";
      }
      r.d(t, { R: () => n });
    },
    491: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return o;
          },
          getImageProps: function () {
            return l;
          },
        });
      let n = r(1356),
        s = r(8557),
        a = r(1421),
        i = n._(r(3431));
      function l(e) {
        let { props: t } = (0, s.getImgProps)(e, {
          defaultLoader: i.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return { props: t };
      }
      let o = a.Image;
    },
    5075: () => {},
    7480: (e) => {
      e.exports = {
        style: { fontFamily: "'Inter', 'Inter Fallback'", fontStyle: "normal" },
        className: "__className_f367f3",
        variable: "__variable_f367f3",
      };
    },
    9634: (e) => {
      e.exports = {
        style: { fontFamily: "'nacelle', 'nacelle Fallback'" },
        className: "__className_f04781",
        variable: "__variable_f04781",
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [393, 212, 421, 96, 27, 358], () => t(7114)), (_N_E = e.O());
  },
]);
