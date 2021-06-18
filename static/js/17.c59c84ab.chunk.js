(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([[17], {
    1107: function(e, t, n) {
        "use strict";
        n.r(t);
        n(0);
        var r, i, c, s, o, a, b, l = n(204), j = n(34), d = n(94), u = n(19), x = n(224), p = n(120), O = n(201), m = n(48), h = n(54), f = n(3), g = n(819), v = n(841), y = n(8), w = f.e.div(r || (r = Object(h.a)(["\n  padding-top: 16px;\n\n  ", " {\n    padding-top: 24px;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.md
        }
        )), k = f.e.img(i || (i = Object(h.a)(["\n  border-radius: 50%;\n  height: 64px;\n  margin-top: -12px;\n  width: 64px;\n  border: solid 2px white;\n\n  ", " {\n    height: 128px;\n    margin-top: -24px;\n    width: 128px;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.md
        }
        )), z = f.e.div(c || (c = Object(h.a)(["\n  margin-bottom: 8px;\n  text-align: center;\n"]))), D = Object(f.e)(u.o)(s || (s = Object(h.a)(["\n  overflow: visible;\n"]))), S = Object(f.e)(u.r)(o || (o = Object(h.a)(["\n  position: relative;\n  background: url(", ");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  border-radius: 32px 32px 0 0;\n  padding-top: 0;\n  text-align: center;\n"])), (function(e) {
            return e.bg
        }
        )), C = Object(f.e)(u.F).attrs({
            as: "h2"
        })(a || (a = Object(h.a)(["\n  font-size: 24px;\n\n  ", " {\n    font-size: 40px;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.md
        }
        )), F = f.e.div(b || (b = Object(h.a)(["\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: 1fr;\n  margin-bottom: 16px;\n\n  ", " {\n    grid-gap: 32px;\n    grid-template-columns: repeat(2, 1fr);\n    margin-bottom: 32px;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.md
        }
        )), I = function(e) {
            var t = e.team
              , n = Object(O.a)();
            return Object(y.jsx)(w, {
                children: Object(y.jsxs)(D, {
                    children: [Object(y.jsxs)(S, {
                        bg: "/images/teams/".concat(t.background),
                        children: [Object(y.jsx)(z, {
                            children: Object(y.jsx)(k, {
                                src: "/images/teams/".concat(t.images.md),
                                alt: "team avatar"
                            })
                        }), Object(y.jsx)(C, {
                            color: t.textColor,
                            children: t.name
                        }), Object(y.jsx)(u.db, {
                            as: "p",
                            color: t.textColor,
                            children: t.description
                        })]
                    }), Object(y.jsxs)(u.p, {
                        children: [Object(y.jsxs)(F, {
                            children: [Object(y.jsx)(v.a, {
                                icon: u.B,
                                title: t.users,
                                subtitle: n(1048, "Active Members")
                            }), Object(y.jsx)(v.a, {
                                icon: u.W,
                                title: n(350, "Coming Soon"),
                                subtitle: n(1046, "Team Points"),
                                isDisabled: !0
                            })]
                        }), Object(y.jsx)(u.F, {
                            as: "h3",
                            children: n(1044, "Team Achievements")
                        }), Object(y.jsx)(g.a, {})]
                    })]
                })
            })
        }, E = n(840);
        t.default = function() {
            var e = Object(j.h)().id
              , t = Number(e)
              , n = Object(O.a)()
              , r = -1 !== p.a.findIndex((function(e) {
                return e.id === t
            }
            ))
              , i = Object(m.p)(t);
            return r ? i ? Object(y.jsxs)(l.a, {
                children: [Object(y.jsx)(E.a, {}), Object(y.jsx)(u.E, {
                    mb: "24px",
                    children: Object(y.jsx)(d.a, {
                        to: "/teams",
                        children: Object(y.jsxs)(u.E, {
                            alignItems: "center",
                            children: [Object(y.jsx)(u.y, {
                                color: "primary"
                            }), Object(y.jsx)(u.db, {
                                color: "primary",
                                children: n(1038, "Teams Overview")
                            })]
                        })
                    })
                }), Object(y.jsx)(I, {
                    team: i
                })]
            }) : Object(y.jsx)(x.a, {}) : Object(y.jsx)(j.a, {
                to: "/404"
            })
        }
    },
    766: function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (null == e)
                return {};
            var n, r, i = function(e, t) {
                if (null == e)
                    return {};
                var n, r, i = {}, c = Object.keys(e);
                for (r = 0; r < c.length; r++)
                    n = c[r],
                    t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                    n = c[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        n.d(t, "a", (function() {
            return r
        }
        ))
    },
    799: function(e, t, n) {
        "use strict";
        var r, i = n(54), c = n(3).e.div(r || (r = Object(i.a)(["\n  border-bottom: 2px solid ", ";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])), (function(e) {
            return e.theme.colors.textSubtle
        }
        ));
        t.a = c
    },
    819: function(e, t, n) {
        "use strict";
        n(0);
        var r = n(19)
          , i = n(201)
          , c = n(8);
        t.a = function(e) {
            var t = e.children
              , n = Object(i.a)();
            return Object(c.jsxs)(r.E, {
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: "24px",
                children: [Object(c.jsx)(r.j, {
                    width: "72px",
                    height: "72px"
                }), Object(c.jsx)(r.F, {
                    as: "h5",
                    size: "md",
                    color: "textDisabled",
                    children: t || n(999, "Coming Soon!")
                })]
            })
        }
    },
    840: function(e, t, n) {
        "use strict";
        n(0);
        var r = n(19)
          , i = n(48)
          , c = n(201)
          , s = n(799)
          , o = n(94)
          , a = n(8)
          , b = function() {
            var e = Object(c.a)();
            return Object(a.jsx)(r.o, {
                mb: "32px",
                isActive: !0,
                children: Object(a.jsx)(r.p, {
                    children: Object(a.jsxs)(r.E, {
                        alignItems: ["start", null, "center"],
                        justifyContent: ["start", null, "space-between"],
                        flexDirection: ["column", null, "row"],
                        children: [Object(a.jsxs)("div", {
                            children: [Object(a.jsx)(r.F, {
                                size: "lg",
                                mb: "8px",
                                children: e(1052, "You haven't set up your profile yet!")
                            }), Object(a.jsx)(r.db, {
                                children: e(1054, "You can do this at any time by clicking on your profile picture in the menu")
                            })]
                        }), Object(a.jsx)(r.k, {
                            as: o.a,
                            to: "/profile",
                            mt: ["16px", null, 0],
                            children: e(1050, "Set up now")
                        })]
                    })
                })
            })
        };
        t.a = function() {
            var e = Object(c.a)()
              , t = Object(i.o)()
              , n = t.isInitialized
              , o = t.profile
              , l = n && !o;
            return Object(a.jsxs)(a.Fragment, {
                children: [l && Object(a.jsx)(b, {}), Object(a.jsxs)(s.a, {
                    children: [Object(a.jsx)(r.F, {
                        as: "h1",
                        size: "xxl",
                        color: "secondary",
                        children: e(1082, "Teams & Profiles")
                    }), Object(a.jsx)(r.db, {
                        bold: !0,
                        children: e(999, "Show off your stats and collectibles with your unique profile. Team features will be revealed soon!")
                    })]
                })]
            })
        }
    },
    841: function(e, t, n) {
        "use strict";
        var r, i = n(16), c = n(766), s = (n(0),
        n(19)), o = n(54), a = n(3), b = Object(a.e)(s.db)(r || (r = Object(o.a)(["\n  border: 2px solid ", ";\n  border-radius: 16px;\n"])), (function(e) {
            return e.theme.colors.tertiary
        }
        ));
        b.defaultProps = {
            p: "24px"
        };
        var l = b
          , j = n(8);
        t.a = function(e) {
            var t = e.icon
              , n = e.title
              , r = e.subtitle
              , o = e.isDisabled
              , a = void 0 !== o && o
              , b = Object(c.a)(e, ["icon", "title", "subtitle", "isDisabled"]);
            return Object(j.jsx)(l, Object(i.a)(Object(i.a)({}, b), {}, {
                children: Object(j.jsxs)(s.E, {
                    alignItems: "start",
                    children: [Object(j.jsx)(t, {
                        width: "44px",
                        mr: "24px",
                        color: a ? "textDisabled" : "currentColor"
                    }), Object(j.jsxs)("div", {
                        children: [Object(j.jsx)(s.F, {
                            as: "h3",
                            size: "xl",
                            color: a ? "textDisabled" : "text",
                            children: n
                        }), Object(j.jsx)(s.db, {
                            textTransform: "uppercase",
                            color: a ? "textDisabled" : "textSubtle",
                            fontSize: "12px",
                            bold: !0,
                            children: r
                        })]
                    })]
                })
            }))
        }
    }
}]);
//# sourceMappingURL=17.c59c84ab.chunk.js.map
