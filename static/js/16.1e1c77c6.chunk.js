/*! For license information please see 16.1e1c77c6.chunk.js.LICENSE.txt */
(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([[16], {
    1085: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            Object.defineProperty(e, "Chart", {
                enumerable: !0,
                get: function() {
                    return a.default
                }
            }),
            e.defaults = e.Scatter = e.Bubble = e.Polar = e.Radar = e.HorizontalBar = e.Bar = e.Line = e.Pie = e.Doughnut = e.default = void 0;
            var r = l(n(0))
              , i = l(n(72))
              , a = l(n(1086))
              , o = l(n(1088))
              , s = l(n(1089));
            function l(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            function u() {
                return (u = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }
                ).apply(this, arguments)
            }
            function d(t) {
                return (d = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function c(t, e) {
                if (null == t)
                    return {};
                var n, r, i = function(t, e) {
                    if (null == t)
                        return {};
                    var n, r, i = {}, a = Object.keys(t);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        e.indexOf(n) >= 0 || (i[n] = t[n]);
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                }
                return i
            }
            function h(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? h(Object(n), !0).forEach((function(e) {
                        k(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }
            function g(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function p(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            function m(t, e, n) {
                return e && p(t.prototype, e),
                n && p(t, n),
                t
            }
            function v(t, e) {
                if ("function" !== typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && y(t, e)
            }
            function y(t, e) {
                return (y = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e,
                    t
                }
                )(t, e)
            }
            function b(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" === typeof Proxy)
                        return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                        ))),
                        !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = w(t);
                    if (e) {
                        var i = w(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else
                        n = r.apply(this, arguments);
                    return _(this, n)
                }
            }
            function _(t, e) {
                return !e || "object" !== d(e) && "function" !== typeof e ? x(t) : e
            }
            function x(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
            function w(t) {
                return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
                )(t)
            }
            function k(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n,
                t
            }
            var M = "undefined" !== typeof t && Object({
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
                REACT_APP_API_PROFILE: "https://profile.pancakeswap.com",
                REACT_APP_CHAIN_ID: "56",
                REACT_APP_GTAG: "GTM-TLF66T4",
                REACT_APP_NODE_1: "https://bsc-dataseed1.ninicoin.io",
                REACT_APP_NODE_2: "https://bsc-dataseed1.defibit.io",
                REACT_APP_NODE_3: "https://bsc-dataseed.binance.org",
                REACT_APP_SUBGRAPH_PROFILE: "https://api.thegraph.com/subgraphs/name/pancakeswap/profile"
            }) && "production"
              , S = function(t) {
                v(n, t);
                var e = b(n);
                function n() {
                    var t;
                    return g(this, n),
                    k(x(t = e.call(this)), "handleOnClick", (function(e) {
                        var n = t.chartInstance
                          , r = t.props
                          , i = r.getDatasetAtEvent
                          , a = r.getElementAtEvent
                          , o = r.getElementsAtEvent
                          , s = r.onElementsClick;
                        i && i(n.getDatasetAtEvent(e), e),
                        a && a(n.getElementAtEvent(e), e),
                        o && o(n.getElementsAtEvent(e), e),
                        s && s(n.getElementsAtEvent(e), e)
                    }
                    )),
                    k(x(t), "ref", (function(e) {
                        t.element = e
                    }
                    )),
                    t.chartInstance = void 0,
                    t
                }
                return m(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.renderChart()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        if (this.props.redraw)
                            return this.destroyChart(),
                            void this.renderChart();
                        this.updateChart()
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(t) {
                        var e = this.props
                          , n = (e.redraw,
                        e.type)
                          , r = e.options
                          , i = e.plugins
                          , a = e.legend
                          , s = e.height
                          , l = e.width;
                        if (!0 === t.redraw)
                            return !0;
                        if (s !== t.height || l !== t.width)
                            return !0;
                        if (n !== t.type)
                            return !0;
                        if (!(0,
                        o.default)(a, t.legend))
                            return !0;
                        if (!(0,
                        o.default)(r, t.options))
                            return !0;
                        var u = this.transformDataProp(t);
                        return !(0,
                        o.default)(this.shadowDataProp, u) || !(0,
                        o.default)(i, t.plugins)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.destroyChart()
                    }
                }, {
                    key: "transformDataProp",
                    value: function(t) {
                        var e = t.data;
                        return "function" == typeof e ? e(this.element) : e
                    }
                }, {
                    key: "memoizeDataProps",
                    value: function() {
                        if (this.props.data) {
                            var t = this.transformDataProp(this.props);
                            return this.shadowDataProp = f(f({}, t), {}, {
                                datasets: t.datasets && t.datasets.map((function(t) {
                                    return f({}, t)
                                }
                                ))
                            }),
                            this.saveCurrentDatasets(),
                            t
                        }
                    }
                }, {
                    key: "checkDatasets",
                    value: function(t) {
                        var e = "production" !== M && "prod" !== M
                          , r = this.props.datasetKeyProvider !== n.getLabelAsKey
                          , i = t.length > 1;
                        if (e && i && !r) {
                            var a = !1;
                            t.forEach((function(t) {
                                t.label || (a = !0)
                            }
                            )),
                            a && console.error('[react-chartjs-2] Warning: Each dataset needs a unique key. By default, the "label" property on each dataset is used. Alternatively, you may provide a "datasetKeyProvider" as a prop that returns a unique key.')
                        }
                    }
                }, {
                    key: "getCurrentDatasets",
                    value: function() {
                        return this.chartInstance && this.chartInstance.config.data && this.chartInstance.config.data.datasets || []
                    }
                }, {
                    key: "saveCurrentDatasets",
                    value: function() {
                        var t = this;
                        this.datasets = this.datasets || {},
                        this.getCurrentDatasets().forEach((function(e) {
                            t.datasets[t.props.datasetKeyProvider(e)] = e
                        }
                        ))
                    }
                }, {
                    key: "updateChart",
                    value: function() {
                        var t = this
                          , e = this.props.options
                          , n = this.memoizeDataProps(this.props);
                        if (this.chartInstance) {
                            e && (this.chartInstance.options = a.default.helpers.configMerge(this.chartInstance.options, e));
                            var r = this.getCurrentDatasets()
                              , i = n.datasets || [];
                            this.checkDatasets(r);
                            var o = (0,
                            s.default)(r, this.props.datasetKeyProvider);
                            this.chartInstance.config.data.datasets = i.map((function(e) {
                                var n = o[t.props.datasetKeyProvider(e)];
                                if (n && n.type === e.type && e.data) {
                                    n.data.splice(e.data.length),
                                    e.data.forEach((function(t, r) {
                                        n.data[r] = e.data[r]
                                    }
                                    ));
                                    e.data;
                                    var r = c(e, ["data"]);
                                    return f(f({}, n), r)
                                }
                                return e
                            }
                            ));
                            n.datasets;
                            var l = c(n, ["datasets"]);
                            this.chartInstance.config.data = f(f({}, this.chartInstance.config.data), l),
                            this.chartInstance.update()
                        }
                    }
                }, {
                    key: "renderChart",
                    value: function() {
                        var t = this.props
                          , e = t.options
                          , r = t.legend
                          , i = t.type
                          , s = t.plugins
                          , l = this.element
                          , u = this.memoizeDataProps();
                        "undefined" === typeof r || (0,
                        o.default)(n.defaultProps.legend, r) || (e.legend = r),
                        this.chartInstance = new a.default(l,{
                            type: i,
                            data: u,
                            options: e,
                            plugins: s
                        })
                    }
                }, {
                    key: "destroyChart",
                    value: function() {
                        if (this.chartInstance) {
                            this.saveCurrentDatasets();
                            var t = Object.values(this.datasets);
                            this.chartInstance.config.data.datasets = t,
                            this.chartInstance.destroy()
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props
                          , e = t.height
                          , n = t.width
                          , i = t.id;
                        return r.default.createElement("canvas", {
                            ref: this.ref,
                            height: e,
                            width: n,
                            id: i,
                            onClick: this.handleOnClick
                        })
                    }
                }]),
                n
            }(r.default.Component);
            k(S, "getLabelAsKey", (function(t) {
                return t.label
            }
            )),
            k(S, "propTypes", {
                data: i.default.oneOfType([i.default.object, i.default.func]).isRequired,
                getDatasetAtEvent: i.default.func,
                getElementAtEvent: i.default.func,
                getElementsAtEvent: i.default.func,
                height: i.default.number,
                legend: i.default.object,
                onElementsClick: i.default.func,
                options: i.default.object,
                plugins: i.default.arrayOf(i.default.object),
                redraw: i.default.bool,
                type: function(t, e, n) {
                    if (!a.default.controllers[t[e]])
                        return new Error("Invalid chart type `" + t[e] + "` supplied to `" + n + "`.")
                },
                width: i.default.number,
                datasetKeyProvider: i.default.func
            }),
            k(S, "defaultProps", {
                legend: {
                    display: !0,
                    position: "bottom"
                },
                type: "doughnut",
                height: 150,
                width: 300,
                redraw: !1,
                options: {},
                datasetKeyProvider: S.getLabelAsKey
            });
            var D = S;
            e.default = D;
            var C = function(t) {
                v(n, t);
                var e = b(n);
                function n() {
                    return g(this, n),
                    e.apply(this, arguments)
                }
                return m(n, [{
                    key: "render",
                    value: function() {
                        var t = this;
                        return r.default.createElement(S, u({}, this.props, {
                            ref: function(e) {
                                return t.chartInstance = e && e.chartInstance
                            },
                            type: "doughnut"
                        }))
                    }
                }]),
                n
            }(r.default.Component);
            e.Doughnut = C;
            var P = function(t) {
                v(n, t);
                var e = b(n);
                function n() {
                    return g(this, n),
                    e.apply(this, arguments)
                }
                return m(n, [{
                    key: "render",
                    value: function() {
                        var t = this;
                        return r.default.createElement(S, u({}, this.props, {
                            ref: function(e) {
                                return t.chartInstance = e && e.chartInstance
                            },
                            type: "pie"
                        }))
                    }
                }]),
                n
            }(r.default.Component);
            e.Pie = P;
            var O = function(t) {
                v(n, t);
                var e = b(n);
                function n() {
                    return g(this, n),
                    e.apply(this, arguments)
                }
                return m(n, [{
                    key: "render",
                    value: function() {
                        var t = this;
                        return r.default.createElement(S, u({}, this.props, {
                            ref: function(e) {
                                return t.chartInstance = e && e.chartInstance
                            },
                            type: "line"
                        }))
                    }
                }]),
                n
            }(r.default.Component);
            e.Line = O;
            var T = function(t) {
                v(n, t);
                var e = b(n);
                function n() {
                    return g(this, n),
                    e.apply(this, arguments)
                }
                return m(n, [{
                    key: "render",
                    value: function() {
                        var t = this;
                        return r.default.createElement(S, u({}, this.props, {
                            ref: function(e) {
                                return t.chartInstance = e && e.chartInstance
                            },
                            type: "bar"
                        }))
                    }
                }]),
                n
            }(r.default.Component);
            e.Bar = T;
            var A = function(t) {
                v(n, t);
                var e = b(n);
                function n() {
                    return g(this, n),
                    e.apply(this, arguments)
                }
                return m(n, [{
                    key: "render",
                    value: function() {
                        var t = this;
                        return r.default.createElement(S, u({}, this.props, {
                            ref: function(e) {
                                return t.chartInstance = e && e.chartInstance
                            },
                            type: "horizontalBar"
                        }))
                    }
                }]),
                n
            }(r.default.Component);
            e.HorizontalBar = A;
            var I = function(t) {
                v(n, t);
                var e = b(n);
                function n() {
                    return g(this, n),
                    e.apply(this, arguments)
                }
                return m(n, [{
                    key: "render",
                    value: function() {
                        var t = this;
                        return r.default.createElement(S, u({}, this.props, {
                            ref: function(e) {
                                return t.chartInstance = e && e.chartInstance
                            },
                            type: "radar"
                        }))
                    }
                }]),
                n
            }(r.default.Component);
            e.Radar = I;
            var F = function(t) {
                v(n, t);
                var e = b(n);
                function n() {
                    return g(this, n),
                    e.apply(this, arguments)
                }
                return m(n, [{
                    key: "render",
                    value: function() {
                        var t = this;
                        return r.default.createElement(S, u({}, this.props, {
                            ref: function(e) {
                                return t.chartInstance = e && e.chartInstance
                            },
                            type: "polarArea"
                        }))
                    }
                }]),
                n
            }(r.default.Component);
            e.Polar = F;
            var R = function(t) {
                v(n, t);
                var e = b(n);
                function n() {
                    return g(this, n),
                    e.apply(this, arguments)
                }
                return m(n, [{
                    key: "render",
                    value: function() {
                        var t = this;
                        return r.default.createElement(S, u({}, this.props, {
                            ref: function(e) {
                                return t.chartInstance = e && e.chartInstance
                            },
                            type: "bubble"
                        }))
                    }
                }]),
                n
            }(r.default.Component);
            e.Bubble = R;
            var N = function(t) {
                v(n, t);
                var e = b(n);
                function n() {
                    return g(this, n),
                    e.apply(this, arguments)
                }
                return m(n, [{
                    key: "render",
                    value: function() {
                        var t = this;
                        return r.default.createElement(S, u({}, this.props, {
                            ref: function(e) {
                                return t.chartInstance = e && e.chartInstance
                            },
                            type: "scatter"
                        }))
                    }
                }]),
                n
            }(r.default.Component);
            e.Scatter = N;
            var L = a.default.defaults;
            e.defaults = L
        }
        ).call(this, n(24))
    },
    1086: function(t, e, n) {
        t.exports = function(t) {
            "use strict";
            function e(t, e) {
                return t(e = {
                    exports: {}
                }, e.exports),
                e.exports
            }
            function n(t) {
                return t && t.default || t
            }
            t = t && t.hasOwnProperty("default") ? t.default : t;
            var r = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
              , i = e((function(t) {
                var e = {};
                for (var n in r)
                    r.hasOwnProperty(n) && (e[r[n]] = n);
                var i = t.exports = {
                    rgb: {
                        channels: 3,
                        labels: "rgb"
                    },
                    hsl: {
                        channels: 3,
                        labels: "hsl"
                    },
                    hsv: {
                        channels: 3,
                        labels: "hsv"
                    },
                    hwb: {
                        channels: 3,
                        labels: "hwb"
                    },
                    cmyk: {
                        channels: 4,
                        labels: "cmyk"
                    },
                    xyz: {
                        channels: 3,
                        labels: "xyz"
                    },
                    lab: {
                        channels: 3,
                        labels: "lab"
                    },
                    lch: {
                        channels: 3,
                        labels: "lch"
                    },
                    hex: {
                        channels: 1,
                        labels: ["hex"]
                    },
                    keyword: {
                        channels: 1,
                        labels: ["keyword"]
                    },
                    ansi16: {
                        channels: 1,
                        labels: ["ansi16"]
                    },
                    ansi256: {
                        channels: 1,
                        labels: ["ansi256"]
                    },
                    hcg: {
                        channels: 3,
                        labels: ["h", "c", "g"]
                    },
                    apple: {
                        channels: 3,
                        labels: ["r16", "g16", "b16"]
                    },
                    gray: {
                        channels: 1,
                        labels: ["gray"]
                    }
                };
                for (var a in i)
                    if (i.hasOwnProperty(a)) {
                        if (!("channels"in i[a]))
                            throw new Error("missing channels property: " + a);
                        if (!("labels"in i[a]))
                            throw new Error("missing channel labels property: " + a);
                        if (i[a].labels.length !== i[a].channels)
                            throw new Error("channel and label counts mismatch: " + a);
                        var o = i[a].channels
                          , s = i[a].labels;
                        delete i[a].channels,
                        delete i[a].labels,
                        Object.defineProperty(i[a], "channels", {
                            value: o
                        }),
                        Object.defineProperty(i[a], "labels", {
                            value: s
                        })
                    }
                function l(t, e) {
                    return Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2) + Math.pow(t[2] - e[2], 2)
                }
                i.rgb.hsl = function(t) {
                    var e, n, r = t[0] / 255, i = t[1] / 255, a = t[2] / 255, o = Math.min(r, i, a), s = Math.max(r, i, a), l = s - o;
                    return s === o ? e = 0 : r === s ? e = (i - a) / l : i === s ? e = 2 + (a - r) / l : a === s && (e = 4 + (r - i) / l),
                    (e = Math.min(60 * e, 360)) < 0 && (e += 360),
                    n = (o + s) / 2,
                    [e, 100 * (s === o ? 0 : n <= .5 ? l / (s + o) : l / (2 - s - o)), 100 * n]
                }
                ,
                i.rgb.hsv = function(t) {
                    var e, n, r, i, a, o = t[0] / 255, s = t[1] / 255, l = t[2] / 255, u = Math.max(o, s, l), d = u - Math.min(o, s, l), c = function(t) {
                        return (u - t) / 6 / d + .5
                    };
                    return 0 === d ? i = a = 0 : (a = d / u,
                    e = c(o),
                    n = c(s),
                    r = c(l),
                    o === u ? i = r - n : s === u ? i = 1 / 3 + e - r : l === u && (i = 2 / 3 + n - e),
                    i < 0 ? i += 1 : i > 1 && (i -= 1)),
                    [360 * i, 100 * a, 100 * u]
                }
                ,
                i.rgb.hwb = function(t) {
                    var e = t[0]
                      , n = t[1]
                      , r = t[2];
                    return [i.rgb.hsl(t)[0], 1 / 255 * Math.min(e, Math.min(n, r)) * 100, 100 * (r = 1 - 1 / 255 * Math.max(e, Math.max(n, r)))]
                }
                ,
                i.rgb.cmyk = function(t) {
                    var e, n = t[0] / 255, r = t[1] / 255, i = t[2] / 255;
                    return [100 * ((1 - n - (e = Math.min(1 - n, 1 - r, 1 - i))) / (1 - e) || 0), 100 * ((1 - r - e) / (1 - e) || 0), 100 * ((1 - i - e) / (1 - e) || 0), 100 * e]
                }
                ,
                i.rgb.keyword = function(t) {
                    var n = e[t];
                    if (n)
                        return n;
                    var i, a = 1 / 0;
                    for (var o in r)
                        if (r.hasOwnProperty(o)) {
                            var s = l(t, r[o]);
                            s < a && (a = s,
                            i = o)
                        }
                    return i
                }
                ,
                i.keyword.rgb = function(t) {
                    return r[t]
                }
                ,
                i.rgb.xyz = function(t) {
                    var e = t[0] / 255
                      , n = t[1] / 255
                      , r = t[2] / 255;
                    return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * r), 100 * (.0193 * e + .1192 * n + .9505 * r)]
                }
                ,
                i.rgb.lab = function(t) {
                    var e = i.rgb.xyz(t)
                      , n = e[0]
                      , r = e[1]
                      , a = e[2];
                    return r /= 100,
                    a /= 108.883,
                    n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116,
                    [116 * (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) - 16, 500 * (n - r), 200 * (r - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))]
                }
                ,
                i.hsl.rgb = function(t) {
                    var e, n, r, i, a, o = t[0] / 360, s = t[1] / 100, l = t[2] / 100;
                    if (0 === s)
                        return [a = 255 * l, a, a];
                    e = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s),
                    i = [0, 0, 0];
                    for (var u = 0; u < 3; u++)
                        (r = o + 1 / 3 * -(u - 1)) < 0 && r++,
                        r > 1 && r--,
                        a = 6 * r < 1 ? e + 6 * (n - e) * r : 2 * r < 1 ? n : 3 * r < 2 ? e + (n - e) * (2 / 3 - r) * 6 : e,
                        i[u] = 255 * a;
                    return i
                }
                ,
                i.hsl.hsv = function(t) {
                    var e = t[0]
                      , n = t[1] / 100
                      , r = t[2] / 100
                      , i = n
                      , a = Math.max(r, .01);
                    return n *= (r *= 2) <= 1 ? r : 2 - r,
                    i *= a <= 1 ? a : 2 - a,
                    [e, 100 * (0 === r ? 2 * i / (a + i) : 2 * n / (r + n)), (r + n) / 2 * 100]
                }
                ,
                i.hsv.rgb = function(t) {
                    var e = t[0] / 60
                      , n = t[1] / 100
                      , r = t[2] / 100
                      , i = Math.floor(e) % 6
                      , a = e - Math.floor(e)
                      , o = 255 * r * (1 - n)
                      , s = 255 * r * (1 - n * a)
                      , l = 255 * r * (1 - n * (1 - a));
                    switch (r *= 255,
                    i) {
                    case 0:
                        return [r, l, o];
                    case 1:
                        return [s, r, o];
                    case 2:
                        return [o, r, l];
                    case 3:
                        return [o, s, r];
                    case 4:
                        return [l, o, r];
                    case 5:
                        return [r, o, s]
                    }
                }
                ,
                i.hsv.hsl = function(t) {
                    var e, n, r, i = t[0], a = t[1] / 100, o = t[2] / 100, s = Math.max(o, .01);
                    return r = (2 - a) * o,
                    n = a * s,
                    [i, 100 * (n = (n /= (e = (2 - a) * s) <= 1 ? e : 2 - e) || 0), 100 * (r /= 2)]
                }
                ,
                i.hwb.rgb = function(t) {
                    var e, n, r, i, a, o, s, l = t[0] / 360, u = t[1] / 100, d = t[2] / 100, c = u + d;
                    switch (c > 1 && (u /= c,
                    d /= c),
                    r = 6 * l - (e = Math.floor(6 * l)),
                    0 !== (1 & e) && (r = 1 - r),
                    i = u + r * ((n = 1 - d) - u),
                    e) {
                    default:
                    case 6:
                    case 0:
                        a = n,
                        o = i,
                        s = u;
                        break;
                    case 1:
                        a = i,
                        o = n,
                        s = u;
                        break;
                    case 2:
                        a = u,
                        o = n,
                        s = i;
                        break;
                    case 3:
                        a = u,
                        o = i,
                        s = n;
                        break;
                    case 4:
                        a = i,
                        o = u,
                        s = n;
                        break;
                    case 5:
                        a = n,
                        o = u,
                        s = i
                    }
                    return [255 * a, 255 * o, 255 * s]
                }
                ,
                i.cmyk.rgb = function(t) {
                    var e = t[0] / 100
                      , n = t[1] / 100
                      , r = t[2] / 100
                      , i = t[3] / 100;
                    return [255 * (1 - Math.min(1, e * (1 - i) + i)), 255 * (1 - Math.min(1, n * (1 - i) + i)), 255 * (1 - Math.min(1, r * (1 - i) + i))]
                }
                ,
                i.xyz.rgb = function(t) {
                    var e, n, r, i = t[0] / 100, a = t[1] / 100, o = t[2] / 100;
                    return n = -.9689 * i + 1.8758 * a + .0415 * o,
                    r = .0557 * i + -.204 * a + 1.057 * o,
                    e = (e = 3.2406 * i + -1.5372 * a + -.4986 * o) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e,
                    n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n,
                    r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r,
                    [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))]
                }
                ,
                i.xyz.lab = function(t) {
                    var e = t[0]
                      , n = t[1]
                      , r = t[2];
                    return n /= 100,
                    r /= 108.883,
                    e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116,
                    [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
                }
                ,
                i.lab.xyz = function(t) {
                    var e, n, r, i = t[0];
                    e = t[1] / 500 + (n = (i + 16) / 116),
                    r = n - t[2] / 200;
                    var a = Math.pow(n, 3)
                      , o = Math.pow(e, 3)
                      , s = Math.pow(r, 3);
                    return n = a > .008856 ? a : (n - 16 / 116) / 7.787,
                    e = o > .008856 ? o : (e - 16 / 116) / 7.787,
                    r = s > .008856 ? s : (r - 16 / 116) / 7.787,
                    [e *= 95.047, n *= 100, r *= 108.883]
                }
                ,
                i.lab.lch = function(t) {
                    var e, n = t[0], r = t[1], i = t[2];
                    return (e = 360 * Math.atan2(i, r) / 2 / Math.PI) < 0 && (e += 360),
                    [n, Math.sqrt(r * r + i * i), e]
                }
                ,
                i.lch.lab = function(t) {
                    var e, n = t[0], r = t[1];
                    return e = t[2] / 360 * 2 * Math.PI,
                    [n, r * Math.cos(e), r * Math.sin(e)]
                }
                ,
                i.rgb.ansi16 = function(t) {
                    var e = t[0]
                      , n = t[1]
                      , r = t[2]
                      , a = 1 in arguments ? arguments[1] : i.rgb.hsv(t)[2];
                    if (0 === (a = Math.round(a / 50)))
                        return 30;
                    var o = 30 + (Math.round(r / 255) << 2 | Math.round(n / 255) << 1 | Math.round(e / 255));
                    return 2 === a && (o += 60),
                    o
                }
                ,
                i.hsv.ansi16 = function(t) {
                    return i.rgb.ansi16(i.hsv.rgb(t), t[2])
                }
                ,
                i.rgb.ansi256 = function(t) {
                    var e = t[0]
                      , n = t[1]
                      , r = t[2];
                    return e === n && n === r ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5)
                }
                ,
                i.ansi16.rgb = function(t) {
                    var e = t % 10;
                    if (0 === e || 7 === e)
                        return t > 50 && (e += 3.5),
                        [e = e / 10.5 * 255, e, e];
                    var n = .5 * (1 + ~~(t > 50));
                    return [(1 & e) * n * 255, (e >> 1 & 1) * n * 255, (e >> 2 & 1) * n * 255]
                }
                ,
                i.ansi256.rgb = function(t) {
                    if (t >= 232) {
                        var e = 10 * (t - 232) + 8;
                        return [e, e, e]
                    }
                    var n;
                    return t -= 16,
                    [Math.floor(t / 36) / 5 * 255, Math.floor((n = t % 36) / 6) / 5 * 255, n % 6 / 5 * 255]
                }
                ,
                i.rgb.hex = function(t) {
                    var e = (((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2]))).toString(16).toUpperCase();
                    return "000000".substring(e.length) + e
                }
                ,
                i.hex.rgb = function(t) {
                    var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                    if (!e)
                        return [0, 0, 0];
                    var n = e[0];
                    3 === e[0].length && (n = n.split("").map((function(t) {
                        return t + t
                    }
                    )).join(""));
                    var r = parseInt(n, 16);
                    return [r >> 16 & 255, r >> 8 & 255, 255 & r]
                }
                ,
                i.rgb.hcg = function(t) {
                    var e, n = t[0] / 255, r = t[1] / 255, i = t[2] / 255, a = Math.max(Math.max(n, r), i), o = Math.min(Math.min(n, r), i), s = a - o;
                    return e = s <= 0 ? 0 : a === n ? (r - i) / s % 6 : a === r ? 2 + (i - n) / s : 4 + (n - r) / s + 4,
                    e /= 6,
                    [360 * (e %= 1), 100 * s, 100 * (s < 1 ? o / (1 - s) : 0)]
                }
                ,
                i.hsl.hcg = function(t) {
                    var e = t[1] / 100
                      , n = t[2] / 100
                      , r = 1
                      , i = 0;
                    return (r = n < .5 ? 2 * e * n : 2 * e * (1 - n)) < 1 && (i = (n - .5 * r) / (1 - r)),
                    [t[0], 100 * r, 100 * i]
                }
                ,
                i.hsv.hcg = function(t) {
                    var e = t[1] / 100
                      , n = t[2] / 100
                      , r = e * n
                      , i = 0;
                    return r < 1 && (i = (n - r) / (1 - r)),
                    [t[0], 100 * r, 100 * i]
                }
                ,
                i.hcg.rgb = function(t) {
                    var e = t[0] / 360
                      , n = t[1] / 100
                      , r = t[2] / 100;
                    if (0 === n)
                        return [255 * r, 255 * r, 255 * r];
                    var i = [0, 0, 0]
                      , a = e % 1 * 6
                      , o = a % 1
                      , s = 1 - o
                      , l = 0;
                    switch (Math.floor(a)) {
                    case 0:
                        i[0] = 1,
                        i[1] = o,
                        i[2] = 0;
                        break;
                    case 1:
                        i[0] = s,
                        i[1] = 1,
                        i[2] = 0;
                        break;
                    case 2:
                        i[0] = 0,
                        i[1] = 1,
                        i[2] = o;
                        break;
                    case 3:
                        i[0] = 0,
                        i[1] = s,
                        i[2] = 1;
                        break;
                    case 4:
                        i[0] = o,
                        i[1] = 0,
                        i[2] = 1;
                        break;
                    default:
                        i[0] = 1,
                        i[1] = 0,
                        i[2] = s
                    }
                    return l = (1 - n) * r,
                    [255 * (n * i[0] + l), 255 * (n * i[1] + l), 255 * (n * i[2] + l)]
                }
                ,
                i.hcg.hsv = function(t) {
                    var e = t[1] / 100
                      , n = e + t[2] / 100 * (1 - e)
                      , r = 0;
                    return n > 0 && (r = e / n),
                    [t[0], 100 * r, 100 * n]
                }
                ,
                i.hcg.hsl = function(t) {
                    var e = t[1] / 100
                      , n = t[2] / 100 * (1 - e) + .5 * e
                      , r = 0;
                    return n > 0 && n < .5 ? r = e / (2 * n) : n >= .5 && n < 1 && (r = e / (2 * (1 - n))),
                    [t[0], 100 * r, 100 * n]
                }
                ,
                i.hcg.hwb = function(t) {
                    var e = t[1] / 100
                      , n = e + t[2] / 100 * (1 - e);
                    return [t[0], 100 * (n - e), 100 * (1 - n)]
                }
                ,
                i.hwb.hcg = function(t) {
                    var e = t[1] / 100
                      , n = 1 - t[2] / 100
                      , r = n - e
                      , i = 0;
                    return r < 1 && (i = (n - r) / (1 - r)),
                    [t[0], 100 * r, 100 * i]
                }
                ,
                i.apple.rgb = function(t) {
                    return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255]
                }
                ,
                i.rgb.apple = function(t) {
                    return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535]
                }
                ,
                i.gray.rgb = function(t) {
                    return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255]
                }
                ,
                i.gray.hsl = i.gray.hsv = function(t) {
                    return [0, 0, t[0]]
                }
                ,
                i.gray.hwb = function(t) {
                    return [0, 100, t[0]]
                }
                ,
                i.gray.cmyk = function(t) {
                    return [0, 0, 0, t[0]]
                }
                ,
                i.gray.lab = function(t) {
                    return [t[0], 0, 0]
                }
                ,
                i.gray.hex = function(t) {
                    var e = 255 & Math.round(t[0] / 100 * 255)
                      , n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
                    return "000000".substring(n.length) + n
                }
                ,
                i.rgb.gray = function(t) {
                    return [(t[0] + t[1] + t[2]) / 3 / 255 * 100]
                }
            }
            ));
            function a() {
                for (var t = {}, e = Object.keys(i), n = e.length, r = 0; r < n; r++)
                    t[e[r]] = {
                        distance: -1,
                        parent: null
                    };
                return t
            }
            function o(t) {
                var e = a()
                  , n = [t];
                for (e[t].distance = 0; n.length; )
                    for (var r = n.pop(), o = Object.keys(i[r]), s = o.length, l = 0; l < s; l++) {
                        var u = o[l]
                          , d = e[u];
                        -1 === d.distance && (d.distance = e[r].distance + 1,
                        d.parent = r,
                        n.unshift(u))
                    }
                return e
            }
            function s(t, e) {
                return function(n) {
                    return e(t(n))
                }
            }
            function l(t, e) {
                for (var n = [e[t].parent, t], r = i[e[t].parent][t], a = e[t].parent; e[a].parent; )
                    n.unshift(e[a].parent),
                    r = s(i[e[a].parent][a], r),
                    a = e[a].parent;
                return r.conversion = n,
                r
            }
            i.rgb,
            i.hsl,
            i.hsv,
            i.hwb,
            i.cmyk,
            i.xyz,
            i.lab,
            i.lch,
            i.hex,
            i.keyword,
            i.ansi16,
            i.ansi256,
            i.hcg,
            i.apple,
            i.gray;
            var u = function(t) {
                for (var e = o(t), n = {}, r = Object.keys(e), i = r.length, a = 0; a < i; a++) {
                    var s = r[a];
                    null !== e[s].parent && (n[s] = l(s, e))
                }
                return n
            }
              , d = {};
            function c(t) {
                var e = function(e) {
                    return void 0 === e || null === e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)),
                    t(e))
                };
                return "conversion"in t && (e.conversion = t.conversion),
                e
            }
            function h(t) {
                var e = function(e) {
                    if (void 0 === e || null === e)
                        return e;
                    arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
                    var n = t(e);
                    if ("object" === typeof n)
                        for (var r = n.length, i = 0; i < r; i++)
                            n[i] = Math.round(n[i]);
                    return n
                };
                return "conversion"in t && (e.conversion = t.conversion),
                e
            }
            Object.keys(i).forEach((function(t) {
                d[t] = {},
                Object.defineProperty(d[t], "channels", {
                    value: i[t].channels
                }),
                Object.defineProperty(d[t], "labels", {
                    value: i[t].labels
                });
                var e = u(t);
                Object.keys(e).forEach((function(n) {
                    var r = e[n];
                    d[t][n] = h(r),
                    d[t][n].raw = c(r)
                }
                ))
            }
            ));
            var f = d
              , g = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
              , p = {
                getRgba: m,
                getHsla: v,
                getRgb: b,
                getHsl: _,
                getHwb: y,
                getAlpha: x,
                hexString: w,
                rgbString: k,
                rgbaString: M,
                percentString: S,
                percentaString: D,
                hslString: C,
                hslaString: P,
                hwbString: O,
                keyword: T
            };
            function m(t) {
                if (t) {
                    var e = /^#([a-fA-F0-9]{3,4})$/i
                      , n = /^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i
                      , r = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
                      , i = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
                      , a = /(\w+)/
                      , o = [0, 0, 0]
                      , s = 1
                      , l = t.match(e)
                      , u = "";
                    if (l) {
                        u = (l = l[1])[3];
                        for (var d = 0; d < o.length; d++)
                            o[d] = parseInt(l[d] + l[d], 16);
                        u && (s = Math.round(parseInt(u + u, 16) / 255 * 100) / 100)
                    } else if (l = t.match(n)) {
                        for (u = l[2],
                        l = l[1],
                        d = 0; d < o.length; d++)
                            o[d] = parseInt(l.slice(2 * d, 2 * d + 2), 16);
                        u && (s = Math.round(parseInt(u, 16) / 255 * 100) / 100)
                    } else if (l = t.match(r)) {
                        for (d = 0; d < o.length; d++)
                            o[d] = parseInt(l[d + 1]);
                        s = parseFloat(l[4])
                    } else if (l = t.match(i)) {
                        for (d = 0; d < o.length; d++)
                            o[d] = Math.round(2.55 * parseFloat(l[d + 1]));
                        s = parseFloat(l[4])
                    } else if (l = t.match(a)) {
                        if ("transparent" == l[1])
                            return [0, 0, 0, 0];
                        if (!(o = g[l[1]]))
                            return
                    }
                    for (d = 0; d < o.length; d++)
                        o[d] = A(o[d], 0, 255);
                    return s = s || 0 == s ? A(s, 0, 1) : 1,
                    o[3] = s,
                    o
                }
            }
            function v(t) {
                if (t) {
                    var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
                      , n = t.match(e);
                    if (n) {
                        var r = parseFloat(n[4]);
                        return [A(parseInt(n[1]), 0, 360), A(parseFloat(n[2]), 0, 100), A(parseFloat(n[3]), 0, 100), A(isNaN(r) ? 1 : r, 0, 1)]
                    }
                }
            }
            function y(t) {
                if (t) {
                    var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
                      , n = t.match(e);
                    if (n) {
                        var r = parseFloat(n[4]);
                        return [A(parseInt(n[1]), 0, 360), A(parseFloat(n[2]), 0, 100), A(parseFloat(n[3]), 0, 100), A(isNaN(r) ? 1 : r, 0, 1)]
                    }
                }
            }
            function b(t) {
                var e = m(t);
                return e && e.slice(0, 3)
            }
            function _(t) {
                var e = v(t);
                return e && e.slice(0, 3)
            }
            function x(t) {
                var e = m(t);
                return e || (e = v(t)) || (e = y(t)) ? e[3] : void 0
            }
            function w(t, e) {
                return e = void 0 !== e && 3 === t.length ? e : t[3],
                "#" + I(t[0]) + I(t[1]) + I(t[2]) + (e >= 0 && e < 1 ? I(Math.round(255 * e)) : "")
            }
            function k(t, e) {
                return e < 1 || t[3] && t[3] < 1 ? M(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
            }
            function M(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
                "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
            }
            function S(t, e) {
                return e < 1 || t[3] && t[3] < 1 ? D(t, e) : "rgb(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%)"
            }
            function D(t, e) {
                return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
            }
            function C(t, e) {
                return e < 1 || t[3] && t[3] < 1 ? P(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
            }
            function P(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
                "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
            }
            function O(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
                "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
            }
            function T(t) {
                return F[t.slice(0, 3)]
            }
            function A(t, e, n) {
                return Math.min(Math.max(e, t), n)
            }
            function I(t) {
                var e = t.toString(16).toUpperCase();
                return e.length < 2 ? "0" + e : e
            }
            var F = {};
            for (var R in g)
                F[g[R]] = R;
            var N = function t(e) {
                return e instanceof t ? e : this instanceof t ? (this.valid = !1,
                this.values = {
                    rgb: [0, 0, 0],
                    hsl: [0, 0, 0],
                    hsv: [0, 0, 0],
                    hwb: [0, 0, 0],
                    cmyk: [0, 0, 0, 0],
                    alpha: 1
                },
                void ("string" === typeof e ? (n = p.getRgba(e)) ? this.setValues("rgb", n) : (n = p.getHsla(e)) ? this.setValues("hsl", n) : (n = p.getHwb(e)) && this.setValues("hwb", n) : "object" === typeof e && (void 0 !== (n = e).r || void 0 !== n.red ? this.setValues("rgb", n) : void 0 !== n.l || void 0 !== n.lightness ? this.setValues("hsl", n) : void 0 !== n.v || void 0 !== n.value ? this.setValues("hsv", n) : void 0 !== n.w || void 0 !== n.whiteness ? this.setValues("hwb", n) : void 0 === n.c && void 0 === n.cyan || this.setValues("cmyk", n)))) : new t(e);
                var n
            };
            N.prototype = {
                isValid: function() {
                    return this.valid
                },
                rgb: function() {
                    return this.setSpace("rgb", arguments)
                },
                hsl: function() {
                    return this.setSpace("hsl", arguments)
                },
                hsv: function() {
                    return this.setSpace("hsv", arguments)
                },
                hwb: function() {
                    return this.setSpace("hwb", arguments)
                },
                cmyk: function() {
                    return this.setSpace("cmyk", arguments)
                },
                rgbArray: function() {
                    return this.values.rgb
                },
                hslArray: function() {
                    return this.values.hsl
                },
                hsvArray: function() {
                    return this.values.hsv
                },
                hwbArray: function() {
                    var t = this.values;
                    return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                },
                cmykArray: function() {
                    return this.values.cmyk
                },
                rgbaArray: function() {
                    var t = this.values;
                    return t.rgb.concat([t.alpha])
                },
                hslaArray: function() {
                    var t = this.values;
                    return t.hsl.concat([t.alpha])
                },
                alpha: function(t) {
                    return void 0 === t ? this.values.alpha : (this.setValues("alpha", t),
                    this)
                },
                red: function(t) {
                    return this.setChannel("rgb", 0, t)
                },
                green: function(t) {
                    return this.setChannel("rgb", 1, t)
                },
                blue: function(t) {
                    return this.setChannel("rgb", 2, t)
                },
                hue: function(t) {
                    return t && (t = (t %= 360) < 0 ? 360 + t : t),
                    this.setChannel("hsl", 0, t)
                },
                saturation: function(t) {
                    return this.setChannel("hsl", 1, t)
                },
                lightness: function(t) {
                    return this.setChannel("hsl", 2, t)
                },
                saturationv: function(t) {
                    return this.setChannel("hsv", 1, t)
                },
                whiteness: function(t) {
                    return this.setChannel("hwb", 1, t)
                },
                blackness: function(t) {
                    return this.setChannel("hwb", 2, t)
                },
                value: function(t) {
                    return this.setChannel("hsv", 2, t)
                },
                cyan: function(t) {
                    return this.setChannel("cmyk", 0, t)
                },
                magenta: function(t) {
                    return this.setChannel("cmyk", 1, t)
                },
                yellow: function(t) {
                    return this.setChannel("cmyk", 2, t)
                },
                black: function(t) {
                    return this.setChannel("cmyk", 3, t)
                },
                hexString: function() {
                    return p.hexString(this.values.rgb)
                },
                rgbString: function() {
                    return p.rgbString(this.values.rgb, this.values.alpha)
                },
                rgbaString: function() {
                    return p.rgbaString(this.values.rgb, this.values.alpha)
                },
                percentString: function() {
                    return p.percentString(this.values.rgb, this.values.alpha)
                },
                hslString: function() {
                    return p.hslString(this.values.hsl, this.values.alpha)
                },
                hslaString: function() {
                    return p.hslaString(this.values.hsl, this.values.alpha)
                },
                hwbString: function() {
                    return p.hwbString(this.values.hwb, this.values.alpha)
                },
                keyword: function() {
                    return p.keyword(this.values.rgb, this.values.alpha)
                },
                rgbNumber: function() {
                    var t = this.values.rgb;
                    return t[0] << 16 | t[1] << 8 | t[2]
                },
                luminosity: function() {
                    for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
                        var r = t[n] / 255;
                        e[n] = r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4)
                    }
                    return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                },
                contrast: function(t) {
                    var e = this.luminosity()
                      , n = t.luminosity();
                    return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
                },
                level: function(t) {
                    var e = this.contrast(t);
                    return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
                },
                dark: function() {
                    var t = this.values.rgb;
                    return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
                },
                light: function() {
                    return !this.dark()
                },
                negate: function() {
                    for (var t = [], e = 0; e < 3; e++)
                        t[e] = 255 - this.values.rgb[e];
                    return this.setValues("rgb", t),
                    this
                },
                lighten: function(t) {
                    var e = this.values.hsl;
                    return e[2] += e[2] * t,
                    this.setValues("hsl", e),
                    this
                },
                darken: function(t) {
                    var e = this.values.hsl;
                    return e[2] -= e[2] * t,
                    this.setValues("hsl", e),
                    this
                },
                saturate: function(t) {
                    var e = this.values.hsl;
                    return e[1] += e[1] * t,
                    this.setValues("hsl", e),
                    this
                },
                desaturate: function(t) {
                    var e = this.values.hsl;
                    return e[1] -= e[1] * t,
                    this.setValues("hsl", e),
                    this
                },
                whiten: function(t) {
                    var e = this.values.hwb;
                    return e[1] += e[1] * t,
                    this.setValues("hwb", e),
                    this
                },
                blacken: function(t) {
                    var e = this.values.hwb;
                    return e[2] += e[2] * t,
                    this.setValues("hwb", e),
                    this
                },
                greyscale: function() {
                    var t = this.values.rgb
                      , e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                    return this.setValues("rgb", [e, e, e]),
                    this
                },
                clearer: function(t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e - e * t),
                    this
                },
                opaquer: function(t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e + e * t),
                    this
                },
                rotate: function(t) {
                    var e = this.values.hsl
                      , n = (e[0] + t) % 360;
                    return e[0] = n < 0 ? 360 + n : n,
                    this.setValues("hsl", e),
                    this
                },
                mix: function(t, e) {
                    var n = this
                      , r = t
                      , i = void 0 === e ? .5 : e
                      , a = 2 * i - 1
                      , o = n.alpha() - r.alpha()
                      , s = ((a * o === -1 ? a : (a + o) / (1 + a * o)) + 1) / 2
                      , l = 1 - s;
                    return this.rgb(s * n.red() + l * r.red(), s * n.green() + l * r.green(), s * n.blue() + l * r.blue()).alpha(n.alpha() * i + r.alpha() * (1 - i))
                },
                toJSON: function() {
                    return this.rgb()
                },
                clone: function() {
                    var t, e, n = new N, r = this.values, i = n.values;
                    for (var a in r)
                        r.hasOwnProperty(a) && (t = r[a],
                        "[object Array]" === (e = {}.toString.call(t)) ? i[a] = t.slice(0) : "[object Number]" === e ? i[a] = t : console.error("unexpected color value:", t));
                    return n
                }
            },
            N.prototype.spaces = {
                rgb: ["red", "green", "blue"],
                hsl: ["hue", "saturation", "lightness"],
                hsv: ["hue", "saturation", "value"],
                hwb: ["hue", "whiteness", "blackness"],
                cmyk: ["cyan", "magenta", "yellow", "black"]
            },
            N.prototype.maxes = {
                rgb: [255, 255, 255],
                hsl: [360, 100, 100],
                hsv: [360, 100, 100],
                hwb: [360, 100, 100],
                cmyk: [100, 100, 100, 100]
            },
            N.prototype.getValues = function(t) {
                for (var e = this.values, n = {}, r = 0; r < t.length; r++)
                    n[t.charAt(r)] = e[t][r];
                return 1 !== e.alpha && (n.a = e.alpha),
                n
            }
            ,
            N.prototype.setValues = function(t, e) {
                var n, r, i = this.values, a = this.spaces, o = this.maxes, s = 1;
                if (this.valid = !0,
                "alpha" === t)
                    s = e;
                else if (e.length)
                    i[t] = e.slice(0, t.length),
                    s = e[t.length];
                else if (void 0 !== e[t.charAt(0)]) {
                    for (n = 0; n < t.length; n++)
                        i[t][n] = e[t.charAt(n)];
                    s = e.a
                } else if (void 0 !== e[a[t][0]]) {
                    var l = a[t];
                    for (n = 0; n < t.length; n++)
                        i[t][n] = e[l[n]];
                    s = e.alpha
                }
                if (i.alpha = Math.max(0, Math.min(1, void 0 === s ? i.alpha : s)),
                "alpha" === t)
                    return !1;
                for (n = 0; n < t.length; n++)
                    r = Math.max(0, Math.min(o[t][n], i[t][n])),
                    i[t][n] = Math.round(r);
                for (var u in a)
                    u !== t && (i[u] = f[t][u](i[t]));
                return !0
            }
            ,
            N.prototype.setSpace = function(t, e) {
                var n = e[0];
                return void 0 === n ? this.getValues(t) : ("number" === typeof n && (n = Array.prototype.slice.call(e)),
                this.setValues(t, n),
                this)
            }
            ,
            N.prototype.setChannel = function(t, e, n) {
                var r = this.values[t];
                return void 0 === n ? r[e] : (n === r[e] || (r[e] = n,
                this.setValues(t, r)),
                this)
            }
            ,
            "undefined" !== typeof window && (window.Color = N);
            var L = N;
            function E(t) {
                return -1 === ["__proto__", "prototype", "constructor"].indexOf(t)
            }
            var Y = {
                noop: function() {},
                uid: function() {
                    var t = 0;
                    return function() {
                        return t++
                    }
                }(),
                isNullOrUndef: function(t) {
                    return null === t || "undefined" === typeof t
                },
                isArray: function(t) {
                    if (Array.isArray && Array.isArray(t))
                        return !0;
                    var e = Object.prototype.toString.call(t);
                    return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6)
                },
                isObject: function(t) {
                    return null !== t && "[object Object]" === Object.prototype.toString.call(t)
                },
                isFinite: function(t) {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e.toString = function() {
                        return t.toString()
                    }
                    ,
                    e
                }((function(t) {
                    return ("number" === typeof t || t instanceof Number) && isFinite(t)
                }
                )),
                valueOrDefault: function(t, e) {
                    return "undefined" === typeof t ? e : t
                },
                valueAtIndexOrDefault: function(t, e, n) {
                    return Y.valueOrDefault(Y.isArray(t) ? t[e] : t, n)
                },
                callback: function(t, e, n) {
                    if (t && "function" === typeof t.call)
                        return t.apply(n, e)
                },
                each: function(t, e, n, r) {
                    var i, a, o;
                    if (Y.isArray(t))
                        if (a = t.length,
                        r)
                            for (i = a - 1; i >= 0; i--)
                                e.call(n, t[i], i);
                        else
                            for (i = 0; i < a; i++)
                                e.call(n, t[i], i);
                    else if (Y.isObject(t))
                        for (a = (o = Object.keys(t)).length,
                        i = 0; i < a; i++)
                            e.call(n, t[o[i]], o[i])
                },
                arrayEquals: function(t, e) {
                    var n, r, i, a;
                    if (!t || !e || t.length !== e.length)
                        return !1;
                    for (n = 0,
                    r = t.length; n < r; ++n)
                        if (i = t[n],
                        a = e[n],
                        i instanceof Array && a instanceof Array) {
                            if (!Y.arrayEquals(i, a))
                                return !1
                        } else if (i !== a)
                            return !1;
                    return !0
                },
                clone: function(t) {
                    if (Y.isArray(t))
                        return t.map(Y.clone);
                    if (Y.isObject(t)) {
                        for (var e = Object.create(t), n = Object.keys(t), r = n.length, i = 0; i < r; ++i)
                            e[n[i]] = Y.clone(t[n[i]]);
                        return e
                    }
                    return t
                },
                _merger: function(t, e, n, r) {
                    if (E(t)) {
                        var i = e[t]
                          , a = n[t];
                        Y.isObject(i) && Y.isObject(a) ? Y.merge(i, a, r) : e[t] = Y.clone(a)
                    }
                },
                _mergerIf: function(t, e, n) {
                    if (E(t)) {
                        var r = e[t]
                          , i = n[t];
                        Y.isObject(r) && Y.isObject(i) ? Y.mergeIf(r, i) : e.hasOwnProperty(t) || (e[t] = Y.clone(i))
                    }
                },
                merge: function(t, e, n) {
                    var r, i, a, o, s, l = Y.isArray(e) ? e : [e], u = l.length;
                    if (!Y.isObject(t))
                        return t;
                    for (r = (n = n || {}).merger || Y._merger,
                    i = 0; i < u; ++i)
                        if (e = l[i],
                        Y.isObject(e))
                            for (s = 0,
                            o = (a = Object.keys(e)).length; s < o; ++s)
                                r(a[s], t, e, n);
                    return t
                },
                mergeIf: function(t, e) {
                    return Y.merge(t, e, {
                        merger: Y._mergerIf
                    })
                },
                extend: Object.assign || function(t) {
                    return Y.merge(t, [].slice.call(arguments, 1), {
                        merger: function(t, e, n) {
                            e[t] = n[t]
                        }
                    })
                }
                ,
                inherits: function(t) {
                    var e = this
                      , n = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                        return e.apply(this, arguments)
                    }
                      , r = function() {
                        this.constructor = n
                    };
                    return r.prototype = e.prototype,
                    n.prototype = new r,
                    n.extend = Y.inherits,
                    t && Y.extend(n.prototype, t),
                    n.__super__ = e.prototype,
                    n
                },
                _deprecated: function(t, e, n, r) {
                    void 0 !== e && console.warn(t + ': "' + n + '" is deprecated. Please use "' + r + '" instead')
                }
            }
              , W = Y;
            Y.callCallback = Y.callback,
            Y.indexOf = function(t, e, n) {
                return Array.prototype.indexOf.call(t, e, n)
            }
            ,
            Y.getValueOrDefault = Y.valueOrDefault,
            Y.getValueAtIndexOrDefault = Y.valueAtIndexOrDefault;
            var z = {
                linear: function(t) {
                    return t
                },
                easeInQuad: function(t) {
                    return t * t
                },
                easeOutQuad: function(t) {
                    return -t * (t - 2)
                },
                easeInOutQuad: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                },
                easeInCubic: function(t) {
                    return t * t * t
                },
                easeOutCubic: function(t) {
                    return (t -= 1) * t * t + 1
                },
                easeInOutCubic: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                },
                easeInQuart: function(t) {
                    return t * t * t * t
                },
                easeOutQuart: function(t) {
                    return -((t -= 1) * t * t * t - 1)
                },
                easeInOutQuart: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                },
                easeInQuint: function(t) {
                    return t * t * t * t * t
                },
                easeOutQuint: function(t) {
                    return (t -= 1) * t * t * t * t + 1
                },
                easeInOutQuint: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                },
                easeInSine: function(t) {
                    return 1 - Math.cos(t * (Math.PI / 2))
                },
                easeOutSine: function(t) {
                    return Math.sin(t * (Math.PI / 2))
                },
                easeInOutSine: function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                },
                easeInExpo: function(t) {
                    return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                },
                easeOutExpo: function(t) {
                    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                },
                easeInOutExpo: function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                },
                easeInCirc: function(t) {
                    return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
                },
                easeOutCirc: function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                },
                easeInOutCirc: function(t) {
                    return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                },
                easeInElastic: function(t) {
                    var e = 1.70158
                      , n = 0
                      , r = 1;
                    return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3),
                    r < 1 ? (r = 1,
                    e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r),
                    -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n))
                },
                easeOutElastic: function(t) {
                    var e = 1.70158
                      , n = 0
                      , r = 1;
                    return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3),
                    r < 1 ? (r = 1,
                    e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r),
                    r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
                },
                easeInOutElastic: function(t) {
                    var e = 1.70158
                      , n = 0
                      , r = 1;
                    return 0 === t ? 0 : 2 === (t /= .5) ? 1 : (n || (n = .45),
                    r < 1 ? (r = 1,
                    e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r),
                    t < 1 ? r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
                },
                easeInBack: function(t) {
                    var e = 1.70158;
                    return t * t * ((e + 1) * t - e)
                },
                easeOutBack: function(t) {
                    var e = 1.70158;
                    return (t -= 1) * t * ((e + 1) * t + e) + 1
                },
                easeInOutBack: function(t) {
                    var e = 1.70158;
                    return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                },
                easeInBounce: function(t) {
                    return 1 - z.easeOutBounce(1 - t)
                },
                easeOutBounce: function(t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                },
                easeInOutBounce: function(t) {
                    return t < .5 ? .5 * z.easeInBounce(2 * t) : .5 * z.easeOutBounce(2 * t - 1) + .5
                }
            }
              , V = {
                effects: z
            };
            W.easingEffects = z;
            var B = Math.PI
              , H = B / 180
              , j = 2 * B
              , U = B / 2
              , G = B / 4
              , q = 2 * B / 3
              , Z = {
                clear: function(t) {
                    t.ctx.clearRect(0, 0, t.width, t.height)
                },
                roundedRect: function(t, e, n, r, i, a) {
                    if (a) {
                        var o = Math.min(a, i / 2, r / 2)
                          , s = e + o
                          , l = n + o
                          , u = e + r - o
                          , d = n + i - o;
                        t.moveTo(e, l),
                        s < u && l < d ? (t.arc(s, l, o, -B, -U),
                        t.arc(u, l, o, -U, 0),
                        t.arc(u, d, o, 0, U),
                        t.arc(s, d, o, U, B)) : s < u ? (t.moveTo(s, n),
                        t.arc(u, l, o, -U, U),
                        t.arc(s, l, o, U, B + U)) : l < d ? (t.arc(s, l, o, -B, 0),
                        t.arc(s, d, o, 0, B)) : t.arc(s, l, o, -B, B),
                        t.closePath(),
                        t.moveTo(e, n)
                    } else
                        t.rect(e, n, r, i)
                },
                drawPoint: function(t, e, n, r, i, a) {
                    var o, s, l, u, d, c = (a || 0) * H;
                    if (e && "object" === typeof e && ("[object HTMLImageElement]" === (o = e.toString()) || "[object HTMLCanvasElement]" === o))
                        return t.save(),
                        t.translate(r, i),
                        t.rotate(c),
                        t.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height),
                        void t.restore();
                    if (!(isNaN(n) || n <= 0)) {
                        switch (t.beginPath(),
                        e) {
                        default:
                            t.arc(r, i, n, 0, j),
                            t.closePath();
                            break;
                        case "triangle":
                            t.moveTo(r + Math.sin(c) * n, i - Math.cos(c) * n),
                            c += q,
                            t.lineTo(r + Math.sin(c) * n, i - Math.cos(c) * n),
                            c += q,
                            t.lineTo(r + Math.sin(c) * n, i - Math.cos(c) * n),
                            t.closePath();
                            break;
                        case "rectRounded":
                            u = n - (d = .516 * n),
                            s = Math.cos(c + G) * u,
                            l = Math.sin(c + G) * u,
                            t.arc(r - s, i - l, d, c - B, c - U),
                            t.arc(r + l, i - s, d, c - U, c),
                            t.arc(r + s, i + l, d, c, c + U),
                            t.arc(r - l, i + s, d, c + U, c + B),
                            t.closePath();
                            break;
                        case "rect":
                            if (!a) {
                                u = Math.SQRT1_2 * n,
                                t.rect(r - u, i - u, 2 * u, 2 * u);
                                break
                            }
                            c += G;
                        case "rectRot":
                            s = Math.cos(c) * n,
                            l = Math.sin(c) * n,
                            t.moveTo(r - s, i - l),
                            t.lineTo(r + l, i - s),
                            t.lineTo(r + s, i + l),
                            t.lineTo(r - l, i + s),
                            t.closePath();
                            break;
                        case "crossRot":
                            c += G;
                        case "cross":
                            s = Math.cos(c) * n,
                            l = Math.sin(c) * n,
                            t.moveTo(r - s, i - l),
                            t.lineTo(r + s, i + l),
                            t.moveTo(r + l, i - s),
                            t.lineTo(r - l, i + s);
                            break;
                        case "star":
                            s = Math.cos(c) * n,
                            l = Math.sin(c) * n,
                            t.moveTo(r - s, i - l),
                            t.lineTo(r + s, i + l),
                            t.moveTo(r + l, i - s),
                            t.lineTo(r - l, i + s),
                            c += G,
                            s = Math.cos(c) * n,
                            l = Math.sin(c) * n,
                            t.moveTo(r - s, i - l),
                            t.lineTo(r + s, i + l),
                            t.moveTo(r + l, i - s),
                            t.lineTo(r - l, i + s);
                            break;
                        case "line":
                            s = Math.cos(c) * n,
                            l = Math.sin(c) * n,
                            t.moveTo(r - s, i - l),
                            t.lineTo(r + s, i + l);
                            break;
                        case "dash":
                            t.moveTo(r, i),
                            t.lineTo(r + Math.cos(c) * n, i + Math.sin(c) * n)
                        }
                        t.fill(),
                        t.stroke()
                    }
                },
                _isPointInArea: function(t, e) {
                    var n = 1e-6;
                    return t.x > e.left - n && t.x < e.right + n && t.y > e.top - n && t.y < e.bottom + n
                },
                clipArea: function(t, e) {
                    t.save(),
                    t.beginPath(),
                    t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
                    t.clip()
                },
                unclipArea: function(t) {
                    t.restore()
                },
                lineTo: function(t, e, n, r) {
                    var i = n.steppedLine;
                    if (i) {
                        if ("middle" === i) {
                            var a = (e.x + n.x) / 2;
                            t.lineTo(a, r ? n.y : e.y),
                            t.lineTo(a, r ? e.y : n.y)
                        } else
                            "after" === i && !r || "after" !== i && r ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
                        t.lineTo(n.x, n.y)
                    } else
                        n.tension ? t.bezierCurveTo(r ? e.controlPointPreviousX : e.controlPointNextX, r ? e.controlPointPreviousY : e.controlPointNextY, r ? n.controlPointNextX : n.controlPointPreviousX, r ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y)
                }
            }
              , K = Z;
            W.clear = Z.clear,
            W.drawRoundedRectangle = function(t) {
                t.beginPath(),
                Z.roundedRect.apply(Z, arguments)
            }
            ;
            var $ = {
                _set: function(t, e) {
                    return W.merge(this[t] || (this[t] = {}), e)
                }
            };
            $._set("global", {
                defaultColor: "rgba(0,0,0,0.1)",
                defaultFontColor: "#666",
                defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                defaultFontSize: 12,
                defaultFontStyle: "normal",
                defaultLineHeight: 1.2,
                showLines: !0
            });
            var X = $
              , J = W.valueOrDefault;
            function Q(t) {
                return !t || W.isNullOrUndef(t.size) || W.isNullOrUndef(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
            }
            var tt = {
                toLineHeight: function(t, e) {
                    var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                    if (!n || "normal" === n[1])
                        return 1.2 * e;
                    switch (t = +n[2],
                    n[3]) {
                    case "px":
                        return t;
                    case "%":
                        t /= 100
                    }
                    return e * t
                },
                toPadding: function(t) {
                    var e, n, r, i;
                    return W.isObject(t) ? (e = +t.top || 0,
                    n = +t.right || 0,
                    r = +t.bottom || 0,
                    i = +t.left || 0) : e = n = r = i = +t || 0,
                    {
                        top: e,
                        right: n,
                        bottom: r,
                        left: i,
                        height: e + r,
                        width: i + n
                    }
                },
                _parseFont: function(t) {
                    var e = X.global
                      , n = J(t.fontSize, e.defaultFontSize)
                      , r = {
                        family: J(t.fontFamily, e.defaultFontFamily),
                        lineHeight: W.options.toLineHeight(J(t.lineHeight, e.defaultLineHeight), n),
                        size: n,
                        style: J(t.fontStyle, e.defaultFontStyle),
                        weight: null,
                        string: ""
                    };
                    return r.string = Q(r),
                    r
                },
                resolve: function(t, e, n, r) {
                    var i, a, o, s = !0;
                    for (i = 0,
                    a = t.length; i < a; ++i)
                        if (void 0 !== (o = t[i]) && (void 0 !== e && "function" === typeof o && (o = o(e),
                        s = !1),
                        void 0 !== n && W.isArray(o) && (o = o[n],
                        s = !1),
                        void 0 !== o))
                            return r && !s && (r.cacheable = !1),
                            o
                }
            }
              , et = {
                _factorize: function(t) {
                    var e, n = [], r = Math.sqrt(t);
                    for (e = 1; e < r; e++)
                        t % e === 0 && (n.push(e),
                        n.push(t / e));
                    return r === (0 | r) && n.push(r),
                    n.sort((function(t, e) {
                        return t - e
                    }
                    )).pop(),
                    n
                },
                log10: Math.log10 || function(t) {
                    var e = Math.log(t) * Math.LOG10E
                      , n = Math.round(e);
                    return t === Math.pow(10, n) ? n : e
                }
            }
              , nt = et;
            W.log10 = et.log10;
            var rt = function(t, e) {
                return {
                    x: function(n) {
                        return t + t + e - n
                    },
                    setWidth: function(t) {
                        e = t
                    },
                    textAlign: function(t) {
                        return "center" === t ? t : "right" === t ? "left" : "right"
                    },
                    xPlus: function(t, e) {
                        return t - e
                    },
                    leftForLtr: function(t, e) {
                        return t - e
                    }
                }
            }
              , it = function() {
                return {
                    x: function(t) {
                        return t
                    },
                    setWidth: function(t) {},
                    textAlign: function(t) {
                        return t
                    },
                    xPlus: function(t, e) {
                        return t + e
                    },
                    leftForLtr: function(t, e) {
                        return t
                    }
                }
            }
              , at = W
              , ot = V
              , st = K
              , lt = tt
              , ut = nt
              , dt = {
                getRtlAdapter: function(t, e, n) {
                    return t ? rt(e, n) : it()
                },
                overrideTextDirection: function(t, e) {
                    var n, r;
                    "ltr" !== e && "rtl" !== e || (r = [(n = t.canvas.style).getPropertyValue("direction"), n.getPropertyPriority("direction")],
                    n.setProperty("direction", e, "important"),
                    t.prevTextDirection = r)
                },
                restoreTextDirection: function(t) {
                    var e = t.prevTextDirection;
                    void 0 !== e && (delete t.prevTextDirection,
                    t.canvas.style.setProperty("direction", e[0], e[1]))
                }
            };
            function ct(t, e, n, r) {
                var i, a, o, s, l, u, d, c, h, f = Object.keys(n);
                for (i = 0,
                a = f.length; i < a; ++i)
                    if (u = n[o = f[i]],
                    e.hasOwnProperty(o) || (e[o] = u),
                    (s = e[o]) !== u && "_" !== o[0]) {
                        if (t.hasOwnProperty(o) || (t[o] = s),
                        (d = typeof u) === typeof (l = t[o]))
                            if ("string" === d) {
                                if ((c = L(l)).valid && (h = L(u)).valid) {
                                    e[o] = h.mix(c, r).rgbString();
                                    continue
                                }
                            } else if (at.isFinite(l) && at.isFinite(u)) {
                                e[o] = l + (u - l) * r;
                                continue
                            }
                        e[o] = u
                    }
            }
            at.easing = ot,
            at.canvas = st,
            at.options = lt,
            at.math = ut,
            at.rtl = dt;
            var ht = function(t) {
                at.extend(this, t),
                this.initialize.apply(this, arguments)
            };
            at.extend(ht.prototype, {
                _type: void 0,
                initialize: function() {
                    this.hidden = !1
                },
                pivot: function() {
                    var t = this;
                    return t._view || (t._view = at.extend({}, t._model)),
                    t._start = {},
                    t
                },
                transition: function(t) {
                    var e = this
                      , n = e._model
                      , r = e._start
                      , i = e._view;
                    return n && 1 !== t ? (i || (i = e._view = {}),
                    r || (r = e._start = {}),
                    ct(r, i, n, t),
                    e) : (e._view = at.extend({}, n),
                    e._start = null,
                    e)
                },
                tooltipPosition: function() {
                    return {
                        x: this._model.x,
                        y: this._model.y
                    }
                },
                hasValue: function() {
                    return at.isNumber(this._model.x) && at.isNumber(this._model.y)
                }
            }),
            ht.extend = at.inherits;
            var ft = ht
              , gt = ft.extend({
                chart: null,
                currentStep: 0,
                numSteps: 60,
                easing: "",
                render: null,
                onAnimationProgress: null,
                onAnimationComplete: null
            })
              , pt = gt;
            Object.defineProperty(gt.prototype, "animationObject", {
                get: function() {
                    return this
                }
            }),
            Object.defineProperty(gt.prototype, "chartInstance", {
                get: function() {
                    return this.chart
                },
                set: function(t) {
                    this.chart = t
                }
            }),
            X._set("global", {
                animation: {
                    duration: 1e3,
                    easing: "easeOutQuart",
                    onProgress: at.noop,
                    onComplete: at.noop
                }
            });
            var mt = {
                animations: [],
                request: null,
                addAnimation: function(t, e, n, r) {
                    var i, a, o = this.animations;
                    for (e.chart = t,
                    e.startTime = Date.now(),
                    e.duration = n,
                    r || (t.animating = !0),
                    i = 0,
                    a = o.length; i < a; ++i)
                        if (o[i].chart === t)
                            return void (o[i] = e);
                    o.push(e),
                    1 === o.length && this.requestAnimationFrame()
                },
                cancelAnimation: function(t) {
                    var e = at.findIndex(this.animations, (function(e) {
                        return e.chart === t
                    }
                    ));
                    -1 !== e && (this.animations.splice(e, 1),
                    t.animating = !1)
                },
                requestAnimationFrame: function() {
                    var t = this;
                    null === t.request && (t.request = at.requestAnimFrame.call(window, (function() {
                        t.request = null,
                        t.startDigest()
                    }
                    )))
                },
                startDigest: function() {
                    var t = this;
                    t.advance(),
                    t.animations.length > 0 && t.requestAnimationFrame()
                },
                advance: function() {
                    for (var t, e, n, r, i = this.animations, a = 0; a < i.length; )
                        e = (t = i[a]).chart,
                        n = t.numSteps,
                        r = Math.floor((Date.now() - t.startTime) / t.duration * n) + 1,
                        t.currentStep = Math.min(r, n),
                        at.callback(t.render, [e, t], e),
                        at.callback(t.onAnimationProgress, [t], e),
                        t.currentStep >= n ? (at.callback(t.onAnimationComplete, [t], e),
                        e.animating = !1,
                        i.splice(a, 1)) : ++a
                }
            }
              , vt = at.options.resolve
              , yt = ["push", "pop", "shift", "splice", "unshift"];
            function bt(t, e) {
                t._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
                    configurable: !0,
                    enumerable: !1,
                    value: {
                        listeners: [e]
                    }
                }),
                yt.forEach((function(e) {
                    var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1)
                      , r = t[e];
                    Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !1,
                        value: function() {
                            var e = Array.prototype.slice.call(arguments)
                              , i = r.apply(this, e);
                            return at.each(t._chartjs.listeners, (function(t) {
                                "function" === typeof t[n] && t[n].apply(t, e)
                            }
                            )),
                            i
                        }
                    })
                }
                )))
            }
            function _t(t, e) {
                var n = t._chartjs;
                if (n) {
                    var r = n.listeners
                      , i = r.indexOf(e);
                    -1 !== i && r.splice(i, 1),
                    r.length > 0 || (yt.forEach((function(e) {
                        delete t[e]
                    }
                    )),
                    delete t._chartjs)
                }
            }
            var xt = function(t, e) {
                this.initialize(t, e)
            };
            at.extend(xt.prototype, {
                datasetElementType: null,
                dataElementType: null,
                _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth"],
                _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "pointStyle"],
                initialize: function(t, e) {
                    var n = this;
                    n.chart = t,
                    n.index = e,
                    n.linkScales(),
                    n.addElements(),
                    n._type = n.getMeta().type
                },
                updateIndex: function(t) {
                    this.index = t
                },
                linkScales: function() {
                    var t = this
                      , e = t.getMeta()
                      , n = t.chart
                      , r = n.scales
                      , i = t.getDataset()
                      , a = n.options.scales;
                    null !== e.xAxisID && e.xAxisID in r && !i.xAxisID || (e.xAxisID = i.xAxisID || a.xAxes[0].id),
                    null !== e.yAxisID && e.yAxisID in r && !i.yAxisID || (e.yAxisID = i.yAxisID || a.yAxes[0].id)
                },
                getDataset: function() {
                    return this.chart.data.datasets[this.index]
                },
                getMeta: function() {
                    return this.chart.getDatasetMeta(this.index)
                },
                getScaleForId: function(t) {
                    return this.chart.scales[t]
                },
                _getValueScaleId: function() {
                    return this.getMeta().yAxisID
                },
                _getIndexScaleId: function() {
                    return this.getMeta().xAxisID
                },
                _getValueScale: function() {
                    return this.getScaleForId(this._getValueScaleId())
                },
                _getIndexScale: function() {
                    return this.getScaleForId(this._getIndexScaleId())
                },
                reset: function() {
                    this._update(!0)
                },
                destroy: function() {
                    this._data && _t(this._data, this)
                },
                createMetaDataset: function() {
                    var t = this
                      , e = t.datasetElementType;
                    return e && new e({
                        _chart: t.chart,
                        _datasetIndex: t.index
                    })
                },
                createMetaData: function(t) {
                    var e = this
                      , n = e.dataElementType;
                    return n && new n({
                        _chart: e.chart,
                        _datasetIndex: e.index,
                        _index: t
                    })
                },
                addElements: function() {
                    var t, e, n = this, r = n.getMeta(), i = n.getDataset().data || [], a = r.data;
                    for (t = 0,
                    e = i.length; t < e; ++t)
                        a[t] = a[t] || n.createMetaData(t);
                    r.dataset = r.dataset || n.createMetaDataset()
                },
                addElementAndReset: function(t) {
                    var e = this.createMetaData(t);
                    this.getMeta().data.splice(t, 0, e),
                    this.updateElement(e, t, !0)
                },
                buildOrUpdateElements: function() {
                    var t = this
                      , e = t.getDataset()
                      , n = e.data || (e.data = []);
                    t._data !== n && (t._data && _t(t._data, t),
                    n && Object.isExtensible(n) && bt(n, t),
                    t._data = n),
                    t.resyncElements()
                },
                _configure: function() {
                    var t = this;
                    t._config = at.merge(Object.create(null), [t.chart.options.datasets[t._type], t.getDataset()], {
                        merger: function(t, e, n) {
                            "_meta" !== t && "data" !== t && at._merger(t, e, n)
                        }
                    })
                },
                _update: function(t) {
                    var e = this;
                    e._configure(),
                    e._cachedDataOpts = null,
                    e.update(t)
                },
                update: at.noop,
                transition: function(t) {
                    for (var e = this.getMeta(), n = e.data || [], r = n.length, i = 0; i < r; ++i)
                        n[i].transition(t);
                    e.dataset && e.dataset.transition(t)
                },
                draw: function() {
                    var t = this.getMeta()
                      , e = t.data || []
                      , n = e.length
                      , r = 0;
                    for (t.dataset && t.dataset.draw(); r < n; ++r)
                        e[r].draw()
                },
                getStyle: function(t) {
                    var e, n = this, r = n.getMeta(), i = r.dataset;
                    return n._configure(),
                    i && void 0 === t ? e = n._resolveDatasetElementOptions(i || {}) : (t = t || 0,
                    e = n._resolveDataElementOptions(r.data[t] || {}, t)),
                    !1 !== e.fill && null !== e.fill || (e.backgroundColor = e.borderColor),
                    e
                },
                _resolveDatasetElementOptions: function(t, e) {
                    var n, r, i, a, o = this, s = o.chart, l = o._config, u = t.custom || {}, d = s.options.elements[o.datasetElementType.prototype._type] || {}, c = o._datasetElementOptions, h = {}, f = {
                        chart: s,
                        dataset: o.getDataset(),
                        datasetIndex: o.index,
                        hover: e
                    };
                    for (n = 0,
                    r = c.length; n < r; ++n)
                        i = c[n],
                        a = e ? "hover" + i.charAt(0).toUpperCase() + i.slice(1) : i,
                        h[i] = vt([u[a], l[a], d[a]], f);
                    return h
                },
                _resolveDataElementOptions: function(t, e) {
                    var n = this
                      , r = t && t.custom
                      , i = n._cachedDataOpts;
                    if (i && !r)
                        return i;
                    var a, o, s, l, u = n.chart, d = n._config, c = u.options.elements[n.dataElementType.prototype._type] || {}, h = n._dataElementOptions, f = {}, g = {
                        chart: u,
                        dataIndex: e,
                        dataset: n.getDataset(),
                        datasetIndex: n.index
                    }, p = {
                        cacheable: !r
                    };
                    if (r = r || {},
                    at.isArray(h))
                        for (o = 0,
                        s = h.length; o < s; ++o)
                            f[l = h[o]] = vt([r[l], d[l], c[l]], g, e, p);
                    else
                        for (o = 0,
                        s = (a = Object.keys(h)).length; o < s; ++o)
                            f[l = a[o]] = vt([r[l], d[h[l]], d[l], c[l]], g, e, p);
                    return p.cacheable && (n._cachedDataOpts = Object.freeze(f)),
                    f
                },
                removeHoverStyle: function(t) {
                    at.merge(t._model, t.$previousStyle || {}),
                    delete t.$previousStyle
                },
                setHoverStyle: function(t) {
                    var e = this.chart.data.datasets[t._datasetIndex]
                      , n = t._index
                      , r = t.custom || {}
                      , i = t._model
                      , a = at.getHoverColor;
                    t.$previousStyle = {
                        backgroundColor: i.backgroundColor,
                        borderColor: i.borderColor,
                        borderWidth: i.borderWidth
                    },
                    i.backgroundColor = vt([r.hoverBackgroundColor, e.hoverBackgroundColor, a(i.backgroundColor)], void 0, n),
                    i.borderColor = vt([r.hoverBorderColor, e.hoverBorderColor, a(i.borderColor)], void 0, n),
                    i.borderWidth = vt([r.hoverBorderWidth, e.hoverBorderWidth, i.borderWidth], void 0, n)
                },
                _removeDatasetHoverStyle: function() {
                    var t = this.getMeta().dataset;
                    t && this.removeHoverStyle(t)
                },
                _setDatasetHoverStyle: function() {
                    var t, e, n, r, i, a, o = this.getMeta().dataset, s = {};
                    if (o) {
                        for (a = o._model,
                        i = this._resolveDatasetElementOptions(o, !0),
                        t = 0,
                        e = (r = Object.keys(i)).length; t < e; ++t)
                            s[n = r[t]] = a[n],
                            a[n] = i[n];
                        o.$previousStyle = s
                    }
                },
                resyncElements: function() {
                    var t = this
                      , e = t.getMeta()
                      , n = t.getDataset().data
                      , r = e.data.length
                      , i = n.length;
                    i < r ? e.data.splice(i, r - i) : i > r && t.insertElements(r, i - r)
                },
                insertElements: function(t, e) {
                    for (var n = 0; n < e; ++n)
                        this.addElementAndReset(t + n)
                },
                onDataPush: function() {
                    var t = arguments.length;
                    this.insertElements(this.getDataset().data.length - t, t)
                },
                onDataPop: function() {
                    this.getMeta().data.pop()
                },
                onDataShift: function() {
                    this.getMeta().data.shift()
                },
                onDataSplice: function(t, e) {
                    this.getMeta().data.splice(t, e),
                    this.insertElements(t, arguments.length - 2)
                },
                onDataUnshift: function() {
                    this.insertElements(0, arguments.length)
                }
            }),
            xt.extend = at.inherits;
            var wt = xt
              , kt = 2 * Math.PI;
            function Mt(t, e) {
                var n = e.startAngle
                  , r = e.endAngle
                  , i = e.pixelMargin
                  , a = i / e.outerRadius
                  , o = e.x
                  , s = e.y;
                t.beginPath(),
                t.arc(o, s, e.outerRadius, n - a, r + a),
                e.innerRadius > i ? (a = i / e.innerRadius,
                t.arc(o, s, e.innerRadius - i, r + a, n - a, !0)) : t.arc(o, s, i, r + Math.PI / 2, n - Math.PI / 2),
                t.closePath(),
                t.clip()
            }
            function St(t, e, n, r) {
                var i, a = n.endAngle;
                for (r && (n.endAngle = n.startAngle + kt,
                Mt(t, n),
                n.endAngle = a,
                n.endAngle === n.startAngle && n.fullCircles && (n.endAngle += kt,
                n.fullCircles--)),
                t.beginPath(),
                t.arc(n.x, n.y, n.innerRadius, n.startAngle + kt, n.startAngle, !0),
                i = 0; i < n.fullCircles; ++i)
                    t.stroke();
                for (t.beginPath(),
                t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.startAngle + kt),
                i = 0; i < n.fullCircles; ++i)
                    t.stroke()
            }
            function Dt(t, e, n) {
                var r = "inner" === e.borderAlign;
                r ? (t.lineWidth = 2 * e.borderWidth,
                t.lineJoin = "round") : (t.lineWidth = e.borderWidth,
                t.lineJoin = "bevel"),
                n.fullCircles && St(t, e, n, r),
                r && Mt(t, n),
                t.beginPath(),
                t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.endAngle),
                t.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0),
                t.closePath(),
                t.stroke()
            }
            X._set("global", {
                elements: {
                    arc: {
                        backgroundColor: X.global.defaultColor,
                        borderColor: "#fff",
                        borderWidth: 2,
                        borderAlign: "center"
                    }
                }
            });
            var Ct = ft.extend({
                _type: "arc",
                inLabelRange: function(t) {
                    var e = this._view;
                    return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                },
                inRange: function(t, e) {
                    var n = this._view;
                    if (n) {
                        for (var r = at.getAngleFromPoint(n, {
                            x: t,
                            y: e
                        }), i = r.angle, a = r.distance, o = n.startAngle, s = n.endAngle; s < o; )
                            s += kt;
                        for (; i > s; )
                            i -= kt;
                        for (; i < o; )
                            i += kt;
                        var l = i >= o && i <= s
                          , u = a >= n.innerRadius && a <= n.outerRadius;
                        return l && u
                    }
                    return !1
                },
                getCenterPoint: function() {
                    var t = this._view
                      , e = (t.startAngle + t.endAngle) / 2
                      , n = (t.innerRadius + t.outerRadius) / 2;
                    return {
                        x: t.x + Math.cos(e) * n,
                        y: t.y + Math.sin(e) * n
                    }
                },
                getArea: function() {
                    var t = this._view;
                    return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                },
                tooltipPosition: function() {
                    var t = this._view
                      , e = t.startAngle + (t.endAngle - t.startAngle) / 2
                      , n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                    return {
                        x: t.x + Math.cos(e) * n,
                        y: t.y + Math.sin(e) * n
                    }
                },
                draw: function() {
                    var t, e = this._chart.ctx, n = this._view, r = "inner" === n.borderAlign ? .33 : 0, i = {
                        x: n.x,
                        y: n.y,
                        innerRadius: n.innerRadius,
                        outerRadius: Math.max(n.outerRadius - r, 0),
                        pixelMargin: r,
                        startAngle: n.startAngle,
                        endAngle: n.endAngle,
                        fullCircles: Math.floor(n.circumference / kt)
                    };
                    if (e.save(),
                    e.fillStyle = n.backgroundColor,
                    e.strokeStyle = n.borderColor,
                    i.fullCircles) {
                        for (i.endAngle = i.startAngle + kt,
                        e.beginPath(),
                        e.arc(i.x, i.y, i.outerRadius, i.startAngle, i.endAngle),
                        e.arc(i.x, i.y, i.innerRadius, i.endAngle, i.startAngle, !0),
                        e.closePath(),
                        t = 0; t < i.fullCircles; ++t)
                            e.fill();
                        i.endAngle = i.startAngle + n.circumference % kt
                    }
                    e.beginPath(),
                    e.arc(i.x, i.y, i.outerRadius, i.startAngle, i.endAngle),
                    e.arc(i.x, i.y, i.innerRadius, i.endAngle, i.startAngle, !0),
                    e.closePath(),
                    e.fill(),
                    n.borderWidth && Dt(e, n, i),
                    e.restore()
                }
            })
              , Pt = at.valueOrDefault
              , Ot = X.global.defaultColor;
            X._set("global", {
                elements: {
                    line: {
                        tension: .4,
                        backgroundColor: Ot,
                        borderWidth: 3,
                        borderColor: Ot,
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        capBezierPoints: !0,
                        fill: !0
                    }
                }
            });
            var Tt = ft.extend({
                _type: "line",
                draw: function() {
                    var t, e, n, r = this, i = r._view, a = r._chart.ctx, o = i.spanGaps, s = r._children.slice(), l = X.global, u = l.elements.line, d = -1, c = r._loop;
                    if (s.length) {
                        if (r._loop) {
                            for (t = 0; t < s.length; ++t)
                                if (e = at.previousItem(s, t),
                                !s[t]._view.skip && e._view.skip) {
                                    s = s.slice(t).concat(s.slice(0, t)),
                                    c = o;
                                    break
                                }
                            c && s.push(s[0])
                        }
                        for (a.save(),
                        a.lineCap = i.borderCapStyle || u.borderCapStyle,
                        a.setLineDash && a.setLineDash(i.borderDash || u.borderDash),
                        a.lineDashOffset = Pt(i.borderDashOffset, u.borderDashOffset),
                        a.lineJoin = i.borderJoinStyle || u.borderJoinStyle,
                        a.lineWidth = Pt(i.borderWidth, u.borderWidth),
                        a.strokeStyle = i.borderColor || l.defaultColor,
                        a.beginPath(),
                        (n = s[0]._view).skip || (a.moveTo(n.x, n.y),
                        d = 0),
                        t = 1; t < s.length; ++t)
                            n = s[t]._view,
                            e = -1 === d ? at.previousItem(s, t) : s[d],
                            n.skip || (d !== t - 1 && !o || -1 === d ? a.moveTo(n.x, n.y) : at.canvas.lineTo(a, e._view, n),
                            d = t);
                        c && a.closePath(),
                        a.stroke(),
                        a.restore()
                    }
                }
            })
              , At = at.valueOrDefault
              , It = X.global.defaultColor;
            function Ft(t) {
                var e = this._view;
                return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
            }
            function Rt(t) {
                var e = this._view;
                return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
            }
            X._set("global", {
                elements: {
                    point: {
                        radius: 3,
                        pointStyle: "circle",
                        backgroundColor: It,
                        borderColor: It,
                        borderWidth: 1,
                        hitRadius: 1,
                        hoverRadius: 4,
                        hoverBorderWidth: 1
                    }
                }
            });
            var Nt = ft.extend({
                _type: "point",
                inRange: function(t, e) {
                    var n = this._view;
                    return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
                },
                inLabelRange: Ft,
                inXRange: Ft,
                inYRange: Rt,
                getCenterPoint: function() {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y
                    }
                },
                getArea: function() {
                    return Math.PI * Math.pow(this._view.radius, 2)
                },
                tooltipPosition: function() {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y,
                        padding: t.radius + t.borderWidth
                    }
                },
                draw: function(t) {
                    var e = this._view
                      , n = this._chart.ctx
                      , r = e.pointStyle
                      , i = e.rotation
                      , a = e.radius
                      , o = e.x
                      , s = e.y
                      , l = X.global
                      , u = l.defaultColor;
                    e.skip || (void 0 === t || at.canvas._isPointInArea(e, t)) && (n.strokeStyle = e.borderColor || u,
                    n.lineWidth = At(e.borderWidth, l.elements.point.borderWidth),
                    n.fillStyle = e.backgroundColor || u,
                    at.canvas.drawPoint(n, r, a, o, s, i))
                }
            })
              , Lt = X.global.defaultColor;
            function Et(t) {
                return t && void 0 !== t.width
            }
            function Yt(t) {
                var e, n, r, i, a;
                return Et(t) ? (a = t.width / 2,
                e = t.x - a,
                n = t.x + a,
                r = Math.min(t.y, t.base),
                i = Math.max(t.y, t.base)) : (a = t.height / 2,
                e = Math.min(t.x, t.base),
                n = Math.max(t.x, t.base),
                r = t.y - a,
                i = t.y + a),
                {
                    left: e,
                    top: r,
                    right: n,
                    bottom: i
                }
            }
            function Wt(t, e, n) {
                return t === e ? n : t === n ? e : t
            }
            function zt(t) {
                var e = t.borderSkipped
                  , n = {};
                return e ? (t.horizontal ? t.base > t.x && (e = Wt(e, "left", "right")) : t.base < t.y && (e = Wt(e, "bottom", "top")),
                n[e] = !0,
                n) : n
            }
            function Vt(t, e, n) {
                var r, i, a, o, s = t.borderWidth, l = zt(t);
                return at.isObject(s) ? (r = +s.top || 0,
                i = +s.right || 0,
                a = +s.bottom || 0,
                o = +s.left || 0) : r = i = a = o = +s || 0,
                {
                    t: l.top || r < 0 ? 0 : r > n ? n : r,
                    r: l.right || i < 0 ? 0 : i > e ? e : i,
                    b: l.bottom || a < 0 ? 0 : a > n ? n : a,
                    l: l.left || o < 0 ? 0 : o > e ? e : o
                }
            }
            function Bt(t) {
                var e = Yt(t)
                  , n = e.right - e.left
                  , r = e.bottom - e.top
                  , i = Vt(t, n / 2, r / 2);
                return {
                    outer: {
                        x: e.left,
                        y: e.top,
                        w: n,
                        h: r
                    },
                    inner: {
                        x: e.left + i.l,
                        y: e.top + i.t,
                        w: n - i.l - i.r,
                        h: r - i.t - i.b
                    }
                }
            }
            function Ht(t, e, n) {
                var r = null === e
                  , i = null === n
                  , a = !(!t || r && i) && Yt(t);
                return a && (r || e >= a.left && e <= a.right) && (i || n >= a.top && n <= a.bottom)
            }
            X._set("global", {
                elements: {
                    rectangle: {
                        backgroundColor: Lt,
                        borderColor: Lt,
                        borderSkipped: "bottom",
                        borderWidth: 0
                    }
                }
            });
            var jt = ft.extend({
                _type: "rectangle",
                draw: function() {
                    var t = this._chart.ctx
                      , e = this._view
                      , n = Bt(e)
                      , r = n.outer
                      , i = n.inner;
                    t.fillStyle = e.backgroundColor,
                    t.fillRect(r.x, r.y, r.w, r.h),
                    r.w === i.w && r.h === i.h || (t.save(),
                    t.beginPath(),
                    t.rect(r.x, r.y, r.w, r.h),
                    t.clip(),
                    t.fillStyle = e.borderColor,
                    t.rect(i.x, i.y, i.w, i.h),
                    t.fill("evenodd"),
                    t.restore())
                },
                height: function() {
                    var t = this._view;
                    return t.base - t.y
                },
                inRange: function(t, e) {
                    return Ht(this._view, t, e)
                },
                inLabelRange: function(t, e) {
                    var n = this._view;
                    return Et(n) ? Ht(n, t, null) : Ht(n, null, e)
                },
                inXRange: function(t) {
                    return Ht(this._view, t, null)
                },
                inYRange: function(t) {
                    return Ht(this._view, null, t)
                },
                getCenterPoint: function() {
                    var t, e, n = this._view;
                    return Et(n) ? (t = n.x,
                    e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2,
                    e = n.y),
                    {
                        x: t,
                        y: e
                    }
                },
                getArea: function() {
                    var t = this._view;
                    return Et(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base)
                },
                tooltipPosition: function() {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y
                    }
                }
            })
              , Ut = {}
              , Gt = Ct
              , qt = Tt
              , Zt = Nt
              , Kt = jt;
            Ut.Arc = Gt,
            Ut.Line = qt,
            Ut.Point = Zt,
            Ut.Rectangle = Kt;
            var $t = at._deprecated
              , Xt = at.valueOrDefault;
            function Jt(t, e) {
                var n, r, i, a, o = t._length;
                for (i = 1,
                a = e.length; i < a; ++i)
                    o = Math.min(o, Math.abs(e[i] - e[i - 1]));
                for (i = 0,
                a = t.getTicks().length; i < a; ++i)
                    r = t.getPixelForTick(i),
                    o = i > 0 ? Math.min(o, Math.abs(r - n)) : o,
                    n = r;
                return o
            }
            function Qt(t, e, n) {
                var r, i, a = n.barThickness, o = e.stackCount, s = e.pixels[t], l = at.isNullOrUndef(a) ? Jt(e.scale, e.pixels) : -1;
                return at.isNullOrUndef(a) ? (r = l * n.categoryPercentage,
                i = n.barPercentage) : (r = a * o,
                i = 1),
                {
                    chunk: r / o,
                    ratio: i,
                    start: s - r / 2
                }
            }
            function te(t, e, n) {
                var r, i = e.pixels, a = i[t], o = t > 0 ? i[t - 1] : null, s = t < i.length - 1 ? i[t + 1] : null, l = n.categoryPercentage;
                return null === o && (o = a - (null === s ? e.end - e.start : s - a)),
                null === s && (s = a + a - o),
                r = a - (a - Math.min(o, s)) / 2 * l,
                {
                    chunk: Math.abs(s - o) / 2 * l / e.stackCount,
                    ratio: n.barPercentage,
                    start: r
                }
            }
            X._set("bar", {
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        offset: !0,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }],
                    yAxes: [{
                        type: "linear"
                    }]
                }
            }),
            X._set("global", {
                datasets: {
                    bar: {
                        categoryPercentage: .8,
                        barPercentage: .9
                    }
                }
            });
            var ee = wt.extend({
                dataElementType: Ut.Rectangle,
                _dataElementOptions: ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "barPercentage", "barThickness", "categoryPercentage", "maxBarThickness", "minBarLength"],
                initialize: function() {
                    var t, e, n = this;
                    wt.prototype.initialize.apply(n, arguments),
                    (t = n.getMeta()).stack = n.getDataset().stack,
                    t.bar = !0,
                    e = n._getIndexScale().options,
                    $t("bar chart", e.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"),
                    $t("bar chart", e.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"),
                    $t("bar chart", e.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"),
                    $t("bar chart", n._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"),
                    $t("bar chart", e.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness")
                },
                update: function(t) {
                    var e, n, r = this, i = r.getMeta().data;
                    for (r._ruler = r.getRuler(),
                    e = 0,
                    n = i.length; e < n; ++e)
                        r.updateElement(i[e], e, t)
                },
                updateElement: function(t, e, n) {
                    var r = this
                      , i = r.getMeta()
                      , a = r.getDataset()
                      , o = r._resolveDataElementOptions(t, e);
                    t._xScale = r.getScaleForId(i.xAxisID),
                    t._yScale = r.getScaleForId(i.yAxisID),
                    t._datasetIndex = r.index,
                    t._index = e,
                    t._model = {
                        backgroundColor: o.backgroundColor,
                        borderColor: o.borderColor,
                        borderSkipped: o.borderSkipped,
                        borderWidth: o.borderWidth,
                        datasetLabel: a.label,
                        label: r.chart.data.labels[e]
                    },
                    at.isArray(a.data[e]) && (t._model.borderSkipped = null),
                    r._updateElementGeometry(t, e, n, o),
                    t.pivot()
                },
                _updateElementGeometry: function(t, e, n, r) {
                    var i = this
                      , a = t._model
                      , o = i._getValueScale()
                      , s = o.getBasePixel()
                      , l = o.isHorizontal()
                      , u = i._ruler || i.getRuler()
                      , d = i.calculateBarValuePixels(i.index, e, r)
                      , c = i.calculateBarIndexPixels(i.index, e, u, r);
                    a.horizontal = l,
                    a.base = n ? s : d.base,
                    a.x = l ? n ? s : d.head : c.center,
                    a.y = l ? c.center : n ? s : d.head,
                    a.height = l ? c.size : void 0,
                    a.width = l ? void 0 : c.size
                },
                _getStacks: function(t) {
                    var e, n, r = this, i = r._getIndexScale(), a = i._getMatchingVisibleMetas(r._type), o = i.options.stacked, s = a.length, l = [];
                    for (e = 0; e < s && (n = a[e],
                    (!1 === o || -1 === l.indexOf(n.stack) || void 0 === o && void 0 === n.stack) && l.push(n.stack),
                    n.index !== t); ++e)
                        ;
                    return l
                },
                getStackCount: function() {
                    return this._getStacks().length
                },
                getStackIndex: function(t, e) {
                    var n = this._getStacks(t)
                      , r = void 0 !== e ? n.indexOf(e) : -1;
                    return -1 === r ? n.length - 1 : r
                },
                getRuler: function() {
                    var t, e, n = this, r = n._getIndexScale(), i = [];
                    for (t = 0,
                    e = n.getMeta().data.length; t < e; ++t)
                        i.push(r.getPixelForValue(null, t, n.index));
                    return {
                        pixels: i,
                        start: r._startPixel,
                        end: r._endPixel,
                        stackCount: n.getStackCount(),
                        scale: r
                    }
                },
                calculateBarValuePixels: function(t, e, n) {
                    var r, i, a, o, s, l, u, d = this, c = d.chart, h = d._getValueScale(), f = h.isHorizontal(), g = c.data.datasets, p = h._getMatchingVisibleMetas(d._type), m = h._parseValue(g[t].data[e]), v = n.minBarLength, y = h.options.stacked, b = d.getMeta().stack, _ = void 0 === m.start ? 0 : m.max >= 0 && m.min >= 0 ? m.min : m.max, x = void 0 === m.start ? m.end : m.max >= 0 && m.min >= 0 ? m.max - m.min : m.min - m.max, w = p.length;
                    if (y || void 0 === y && void 0 !== b)
                        for (r = 0; r < w && (i = p[r]).index !== t; ++r)
                            i.stack === b && (a = void 0 === (u = h._parseValue(g[i.index].data[e])).start ? u.end : u.min >= 0 && u.max >= 0 ? u.max : u.min,
                            (m.min < 0 && a < 0 || m.max >= 0 && a > 0) && (_ += a));
                    return o = h.getPixelForValue(_),
                    l = (s = h.getPixelForValue(_ + x)) - o,
                    void 0 !== v && Math.abs(l) < v && (l = v,
                    s = x >= 0 && !f || x < 0 && f ? o - v : o + v),
                    {
                        size: l,
                        base: o,
                        head: s,
                        center: s + l / 2
                    }
                },
                calculateBarIndexPixels: function(t, e, n, r) {
                    var i = this
                      , a = "flex" === r.barThickness ? te(e, n, r) : Qt(e, n, r)
                      , o = i.getStackIndex(t, i.getMeta().stack)
                      , s = a.start + a.chunk * o + a.chunk / 2
                      , l = Math.min(Xt(r.maxBarThickness, 1 / 0), a.chunk * a.ratio);
                    return {
                        base: s - l / 2,
                        head: s + l / 2,
                        center: s,
                        size: l
                    }
                },
                draw: function() {
                    var t = this
                      , e = t.chart
                      , n = t._getValueScale()
                      , r = t.getMeta().data
                      , i = t.getDataset()
                      , a = r.length
                      , o = 0;
                    for (at.canvas.clipArea(e.ctx, e.chartArea); o < a; ++o) {
                        var s = n._parseValue(i.data[o]);
                        isNaN(s.min) || isNaN(s.max) || r[o].draw()
                    }
                    at.canvas.unclipArea(e.ctx)
                },
                _resolveDataElementOptions: function() {
                    var t = this
                      , e = at.extend({}, wt.prototype._resolveDataElementOptions.apply(t, arguments))
                      , n = t._getIndexScale().options
                      , r = t._getValueScale().options;
                    return e.barPercentage = Xt(n.barPercentage, e.barPercentage),
                    e.barThickness = Xt(n.barThickness, e.barThickness),
                    e.categoryPercentage = Xt(n.categoryPercentage, e.categoryPercentage),
                    e.maxBarThickness = Xt(n.maxBarThickness, e.maxBarThickness),
                    e.minBarLength = Xt(r.minBarLength, e.minBarLength),
                    e
                }
            })
              , ne = at.valueOrDefault
              , re = at.options.resolve;
            X._set("bubble", {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        position: "left",
                        id: "y-axis-0"
                    }]
                },
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t, e) {
                            var n = e.datasets[t.datasetIndex].label || ""
                              , r = e.datasets[t.datasetIndex].data[t.index];
                            return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + r.r + ")"
                        }
                    }
                }
            });
            var ie = wt.extend({
                dataElementType: Ut.Point,
                _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"],
                update: function(t) {
                    var e = this
                      , n = e.getMeta().data;
                    at.each(n, (function(n, r) {
                        e.updateElement(n, r, t)
                    }
                    ))
                },
                updateElement: function(t, e, n) {
                    var r = this
                      , i = r.getMeta()
                      , a = t.custom || {}
                      , o = r.getScaleForId(i.xAxisID)
                      , s = r.getScaleForId(i.yAxisID)
                      , l = r._resolveDataElementOptions(t, e)
                      , u = r.getDataset().data[e]
                      , d = r.index
                      , c = n ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" === typeof u ? u : NaN, e, d)
                      , h = n ? s.getBasePixel() : s.getPixelForValue(u, e, d);
                    t._xScale = o,
                    t._yScale = s,
                    t._options = l,
                    t._datasetIndex = d,
                    t._index = e,
                    t._model = {
                        backgroundColor: l.backgroundColor,
                        borderColor: l.borderColor,
                        borderWidth: l.borderWidth,
                        hitRadius: l.hitRadius,
                        pointStyle: l.pointStyle,
                        rotation: l.rotation,
                        radius: n ? 0 : l.radius,
                        skip: a.skip || isNaN(c) || isNaN(h),
                        x: c,
                        y: h
                    },
                    t.pivot()
                },
                setHoverStyle: function(t) {
                    var e = t._model
                      , n = t._options
                      , r = at.getHoverColor;
                    t.$previousStyle = {
                        backgroundColor: e.backgroundColor,
                        borderColor: e.borderColor,
                        borderWidth: e.borderWidth,
                        radius: e.radius
                    },
                    e.backgroundColor = ne(n.hoverBackgroundColor, r(n.backgroundColor)),
                    e.borderColor = ne(n.hoverBorderColor, r(n.borderColor)),
                    e.borderWidth = ne(n.hoverBorderWidth, n.borderWidth),
                    e.radius = n.radius + n.hoverRadius
                },
                _resolveDataElementOptions: function(t, e) {
                    var n = this
                      , r = n.chart
                      , i = n.getDataset()
                      , a = t.custom || {}
                      , o = i.data[e] || {}
                      , s = wt.prototype._resolveDataElementOptions.apply(n, arguments)
                      , l = {
                        chart: r,
                        dataIndex: e,
                        dataset: i,
                        datasetIndex: n.index
                    };
                    return n._cachedDataOpts === s && (s = at.extend({}, s)),
                    s.radius = re([a.radius, o.r, n._config.radius, r.options.elements.point.radius], l, e),
                    s
                }
            })
              , ae = at.valueOrDefault
              , oe = Math.PI
              , se = 2 * oe
              , le = oe / 2;
            X._set("doughnut", {
                animation: {
                    animateRotate: !0,
                    animateScale: !1
                },
                hover: {
                    mode: "single"
                },
                legendCallback: function(t) {
                    var e, n, r, i = document.createElement("ul"), a = t.data, o = a.datasets, s = a.labels;
                    if (i.setAttribute("class", t.id + "-legend"),
                    o.length)
                        for (e = 0,
                        n = o[0].data.length; e < n; ++e)
                            (r = i.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[e],
                            s[e] && r.appendChild(document.createTextNode(s[e]));
                    return i.outerHTML
                },
                legend: {
                    labels: {
                        generateLabels: function(t) {
                            var e = t.data;
                            return e.labels.length && e.datasets.length ? e.labels.map((function(n, r) {
                                var i = t.getDatasetMeta(0)
                                  , a = i.controller.getStyle(r);
                                return {
                                    text: n,
                                    fillStyle: a.backgroundColor,
                                    strokeStyle: a.borderColor,
                                    lineWidth: a.borderWidth,
                                    hidden: isNaN(e.datasets[0].data[r]) || i.data[r].hidden,
                                    index: r
                                }
                            }
                            )) : []
                        }
                    },
                    onClick: function(t, e) {
                        var n, r, i, a = e.index, o = this.chart;
                        for (n = 0,
                        r = (o.data.datasets || []).length; n < r; ++n)
                            (i = o.getDatasetMeta(n)).data[a] && (i.data[a].hidden = !i.data[a].hidden);
                        o.update()
                    }
                },
                cutoutPercentage: 50,
                rotation: -le,
                circumference: se,
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t, e) {
                            var n = e.labels[t.index]
                              , r = ": " + e.datasets[t.datasetIndex].data[t.index];
                            return at.isArray(n) ? (n = n.slice())[0] += r : n += r,
                            n
                        }
                    }
                }
            });
            var ue = wt.extend({
                dataElementType: Ut.Arc,
                linkScales: at.noop,
                _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
                getRingIndex: function(t) {
                    for (var e = 0, n = 0; n < t; ++n)
                        this.chart.isDatasetVisible(n) && ++e;
                    return e
                },
                update: function(t) {
                    var e, n, r, i, a = this, o = a.chart, s = o.chartArea, l = o.options, u = 1, d = 1, c = 0, h = 0, f = a.getMeta(), g = f.data, p = l.cutoutPercentage / 100 || 0, m = l.circumference, v = a._getRingWeight(a.index);
                    if (m < se) {
                        var y = l.rotation % se
                          , b = (y += y >= oe ? -se : y < -oe ? se : 0) + m
                          , _ = Math.cos(y)
                          , x = Math.sin(y)
                          , w = Math.cos(b)
                          , k = Math.sin(b)
                          , M = y <= 0 && b >= 0 || b >= se
                          , S = y <= le && b >= le || b >= se + le
                          , D = y <= -le && b >= -le || b >= oe + le
                          , C = y === -oe || b >= oe ? -1 : Math.min(_, _ * p, w, w * p)
                          , P = D ? -1 : Math.min(x, x * p, k, k * p)
                          , O = M ? 1 : Math.max(_, _ * p, w, w * p)
                          , T = S ? 1 : Math.max(x, x * p, k, k * p);
                        u = (O - C) / 2,
                        d = (T - P) / 2,
                        c = -(O + C) / 2,
                        h = -(T + P) / 2
                    }
                    for (r = 0,
                    i = g.length; r < i; ++r)
                        g[r]._options = a._resolveDataElementOptions(g[r], r);
                    for (o.borderWidth = a.getMaxBorderWidth(),
                    e = (s.right - s.left - o.borderWidth) / u,
                    n = (s.bottom - s.top - o.borderWidth) / d,
                    o.outerRadius = Math.max(Math.min(e, n) / 2, 0),
                    o.innerRadius = Math.max(o.outerRadius * p, 0),
                    o.radiusLength = (o.outerRadius - o.innerRadius) / (a._getVisibleDatasetWeightTotal() || 1),
                    o.offsetX = c * o.outerRadius,
                    o.offsetY = h * o.outerRadius,
                    f.total = a.calculateTotal(),
                    a.outerRadius = o.outerRadius - o.radiusLength * a._getRingWeightOffset(a.index),
                    a.innerRadius = Math.max(a.outerRadius - o.radiusLength * v, 0),
                    r = 0,
                    i = g.length; r < i; ++r)
                        a.updateElement(g[r], r, t)
                },
                updateElement: function(t, e, n) {
                    var r = this
                      , i = r.chart
                      , a = i.chartArea
                      , o = i.options
                      , s = o.animation
                      , l = (a.left + a.right) / 2
                      , u = (a.top + a.bottom) / 2
                      , d = o.rotation
                      , c = o.rotation
                      , h = r.getDataset()
                      , f = n && s.animateRotate || t.hidden ? 0 : r.calculateCircumference(h.data[e]) * (o.circumference / se)
                      , g = n && s.animateScale ? 0 : r.innerRadius
                      , p = n && s.animateScale ? 0 : r.outerRadius
                      , m = t._options || {};
                    at.extend(t, {
                        _datasetIndex: r.index,
                        _index: e,
                        _model: {
                            backgroundColor: m.backgroundColor,
                            borderColor: m.borderColor,
                            borderWidth: m.borderWidth,
                            borderAlign: m.borderAlign,
                            x: l + i.offsetX,
                            y: u + i.offsetY,
                            startAngle: d,
                            endAngle: c,
                            circumference: f,
                            outerRadius: p,
                            innerRadius: g,
                            label: at.valueAtIndexOrDefault(h.label, e, i.data.labels[e])
                        }
                    });
                    var v = t._model;
                    n && s.animateRotate || (v.startAngle = 0 === e ? o.rotation : r.getMeta().data[e - 1]._model.endAngle,
                    v.endAngle = v.startAngle + v.circumference),
                    t.pivot()
                },
                calculateTotal: function() {
                    var t, e = this.getDataset(), n = this.getMeta(), r = 0;
                    return at.each(n.data, (function(n, i) {
                        t = e.data[i],
                        isNaN(t) || n.hidden || (r += Math.abs(t))
                    }
                    )),
                    r
                },
                calculateCircumference: function(t) {
                    var e = this.getMeta().total;
                    return e > 0 && !isNaN(t) ? se * (Math.abs(t) / e) : 0
                },
                getMaxBorderWidth: function(t) {
                    var e, n, r, i, a, o, s, l, u = this, d = 0, c = u.chart;
                    if (!t)
                        for (e = 0,
                        n = c.data.datasets.length; e < n; ++e)
                            if (c.isDatasetVisible(e)) {
                                t = (r = c.getDatasetMeta(e)).data,
                                e !== u.index && (a = r.controller);
                                break
                            }
                    if (!t)
                        return 0;
                    for (e = 0,
                    n = t.length; e < n; ++e)
                        i = t[e],
                        a ? (a._configure(),
                        o = a._resolveDataElementOptions(i, e)) : o = i._options,
                        "inner" !== o.borderAlign && (s = o.borderWidth,
                        d = (l = o.hoverBorderWidth) > (d = s > d ? s : d) ? l : d);
                    return d
                },
                setHoverStyle: function(t) {
                    var e = t._model
                      , n = t._options
                      , r = at.getHoverColor;
                    t.$previousStyle = {
                        backgroundColor: e.backgroundColor,
                        borderColor: e.borderColor,
                        borderWidth: e.borderWidth
                    },
                    e.backgroundColor = ae(n.hoverBackgroundColor, r(n.backgroundColor)),
                    e.borderColor = ae(n.hoverBorderColor, r(n.borderColor)),
                    e.borderWidth = ae(n.hoverBorderWidth, n.borderWidth)
                },
                _getRingWeightOffset: function(t) {
                    for (var e = 0, n = 0; n < t; ++n)
                        this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
                    return e
                },
                _getRingWeight: function(t) {
                    return Math.max(ae(this.chart.data.datasets[t].weight, 1), 0)
                },
                _getVisibleDatasetWeightTotal: function() {
                    return this._getRingWeightOffset(this.chart.data.datasets.length)
                }
            });
            X._set("horizontalBar", {
                hover: {
                    mode: "index",
                    axis: "y"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        type: "category",
                        position: "left",
                        offset: !0,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }]
                },
                elements: {
                    rectangle: {
                        borderSkipped: "left"
                    }
                },
                tooltips: {
                    mode: "index",
                    axis: "y"
                }
            }),
            X._set("global", {
                datasets: {
                    horizontalBar: {
                        categoryPercentage: .8,
                        barPercentage: .9
                    }
                }
            });
            var de = ee.extend({
                _getValueScaleId: function() {
                    return this.getMeta().xAxisID
                },
                _getIndexScaleId: function() {
                    return this.getMeta().yAxisID
                }
            })
              , ce = at.valueOrDefault
              , he = at.options.resolve
              , fe = at.canvas._isPointInArea;
            function ge(t, e) {
                var n = t && t.options.ticks || {}
                  , r = n.reverse
                  , i = void 0 === n.min ? e : 0
                  , a = void 0 === n.max ? e : 0;
                return {
                    start: r ? a : i,
                    end: r ? i : a
                }
            }
            function pe(t, e, n) {
                var r = n / 2
                  , i = ge(t, r)
                  , a = ge(e, r);
                return {
                    top: a.end,
                    right: i.end,
                    bottom: a.start,
                    left: i.start
                }
            }
            function me(t) {
                var e, n, r, i;
                return at.isObject(t) ? (e = t.top,
                n = t.right,
                r = t.bottom,
                i = t.left) : e = n = r = i = t,
                {
                    top: e,
                    right: n,
                    bottom: r,
                    left: i
                }
            }
            X._set("line", {
                showLines: !0,
                spanGaps: !1,
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        id: "y-axis-0"
                    }]
                }
            });
            var ve = wt.extend({
                datasetElementType: Ut.Line,
                dataElementType: Ut.Point,
                _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth", "cubicInterpolationMode", "fill"],
                _dataElementOptions: {
                    backgroundColor: "pointBackgroundColor",
                    borderColor: "pointBorderColor",
                    borderWidth: "pointBorderWidth",
                    hitRadius: "pointHitRadius",
                    hoverBackgroundColor: "pointHoverBackgroundColor",
                    hoverBorderColor: "pointHoverBorderColor",
                    hoverBorderWidth: "pointHoverBorderWidth",
                    hoverRadius: "pointHoverRadius",
                    pointStyle: "pointStyle",
                    radius: "pointRadius",
                    rotation: "pointRotation"
                },
                update: function(t) {
                    var e, n, r = this, i = r.getMeta(), a = i.dataset, o = i.data || [], s = r.chart.options, l = r._config, u = r._showLine = ce(l.showLine, s.showLines);
                    for (r._xScale = r.getScaleForId(i.xAxisID),
                    r._yScale = r.getScaleForId(i.yAxisID),
                    u && (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension),
                    a._scale = r._yScale,
                    a._datasetIndex = r.index,
                    a._children = o,
                    a._model = r._resolveDatasetElementOptions(a),
                    a.pivot()),
                    e = 0,
                    n = o.length; e < n; ++e)
                        r.updateElement(o[e], e, t);
                    for (u && 0 !== a._model.tension && r.updateBezierControlPoints(),
                    e = 0,
                    n = o.length; e < n; ++e)
                        o[e].pivot()
                },
                updateElement: function(t, e, n) {
                    var r, i, a = this, o = a.getMeta(), s = t.custom || {}, l = a.getDataset(), u = a.index, d = l.data[e], c = a._xScale, h = a._yScale, f = o.dataset._model, g = a._resolveDataElementOptions(t, e);
                    r = c.getPixelForValue("object" === typeof d ? d : NaN, e, u),
                    i = n ? h.getBasePixel() : a.calculatePointY(d, e, u),
                    t._xScale = c,
                    t._yScale = h,
                    t._options = g,
                    t._datasetIndex = u,
                    t._index = e,
                    t._model = {
                        x: r,
                        y: i,
                        skip: s.skip || isNaN(r) || isNaN(i),
                        radius: g.radius,
                        pointStyle: g.pointStyle,
                        rotation: g.rotation,
                        backgroundColor: g.backgroundColor,
                        borderColor: g.borderColor,
                        borderWidth: g.borderWidth,
                        tension: ce(s.tension, f ? f.tension : 0),
                        steppedLine: !!f && f.steppedLine,
                        hitRadius: g.hitRadius
                    }
                },
                _resolveDatasetElementOptions: function(t) {
                    var e = this
                      , n = e._config
                      , r = t.custom || {}
                      , i = e.chart.options
                      , a = i.elements.line
                      , o = wt.prototype._resolveDatasetElementOptions.apply(e, arguments);
                    return o.spanGaps = ce(n.spanGaps, i.spanGaps),
                    o.tension = ce(n.lineTension, a.tension),
                    o.steppedLine = he([r.steppedLine, n.steppedLine, a.stepped]),
                    o.clip = me(ce(n.clip, pe(e._xScale, e._yScale, o.borderWidth))),
                    o
                },
                calculatePointY: function(t, e, n) {
                    var r, i, a, o, s, l, u, d = this, c = d.chart, h = d._yScale, f = 0, g = 0;
                    if (h.options.stacked) {
                        for (s = +h.getRightValue(t),
                        u = (l = c._getSortedVisibleDatasetMetas()).length,
                        r = 0; r < u && (a = l[r]).index !== n; ++r)
                            i = c.data.datasets[a.index],
                            "line" === a.type && a.yAxisID === h.id && ((o = +h.getRightValue(i.data[e])) < 0 ? g += o || 0 : f += o || 0);
                        return s < 0 ? h.getPixelForValue(g + s) : h.getPixelForValue(f + s)
                    }
                    return h.getPixelForValue(t)
                },
                updateBezierControlPoints: function() {
                    var t, e, n, r, i = this, a = i.chart, o = i.getMeta(), s = o.dataset._model, l = a.chartArea, u = o.data || [];
                    function d(t, e, n) {
                        return Math.max(Math.min(t, n), e)
                    }
                    if (s.spanGaps && (u = u.filter((function(t) {
                        return !t._model.skip
                    }
                    ))),
                    "monotone" === s.cubicInterpolationMode)
                        at.splineCurveMonotone(u);
                    else
                        for (t = 0,
                        e = u.length; t < e; ++t)
                            n = u[t]._model,
                            r = at.splineCurve(at.previousItem(u, t)._model, n, at.nextItem(u, t)._model, s.tension),
                            n.controlPointPreviousX = r.previous.x,
                            n.controlPointPreviousY = r.previous.y,
                            n.controlPointNextX = r.next.x,
                            n.controlPointNextY = r.next.y;
                    if (a.options.elements.line.capBezierPoints)
                        for (t = 0,
                        e = u.length; t < e; ++t)
                            n = u[t]._model,
                            fe(n, l) && (t > 0 && fe(u[t - 1]._model, l) && (n.controlPointPreviousX = d(n.controlPointPreviousX, l.left, l.right),
                            n.controlPointPreviousY = d(n.controlPointPreviousY, l.top, l.bottom)),
                            t < u.length - 1 && fe(u[t + 1]._model, l) && (n.controlPointNextX = d(n.controlPointNextX, l.left, l.right),
                            n.controlPointNextY = d(n.controlPointNextY, l.top, l.bottom)))
                },
                draw: function() {
                    var t, e = this, n = e.chart, r = e.getMeta(), i = r.data || [], a = n.chartArea, o = n.canvas, s = 0, l = i.length;
                    for (e._showLine && (t = r.dataset._model.clip,
                    at.canvas.clipArea(n.ctx, {
                        left: !1 === t.left ? 0 : a.left - t.left,
                        right: !1 === t.right ? o.width : a.right + t.right,
                        top: !1 === t.top ? 0 : a.top - t.top,
                        bottom: !1 === t.bottom ? o.height : a.bottom + t.bottom
                    }),
                    r.dataset.draw(),
                    at.canvas.unclipArea(n.ctx)); s < l; ++s)
                        i[s].draw(a)
                },
                setHoverStyle: function(t) {
                    var e = t._model
                      , n = t._options
                      , r = at.getHoverColor;
                    t.$previousStyle = {
                        backgroundColor: e.backgroundColor,
                        borderColor: e.borderColor,
                        borderWidth: e.borderWidth,
                        radius: e.radius
                    },
                    e.backgroundColor = ce(n.hoverBackgroundColor, r(n.backgroundColor)),
                    e.borderColor = ce(n.hoverBorderColor, r(n.borderColor)),
                    e.borderWidth = ce(n.hoverBorderWidth, n.borderWidth),
                    e.radius = ce(n.hoverRadius, n.radius)
                }
            })
              , ye = at.options.resolve;
            X._set("polarArea", {
                scale: {
                    type: "radialLinear",
                    angleLines: {
                        display: !1
                    },
                    gridLines: {
                        circular: !0
                    },
                    pointLabels: {
                        display: !1
                    },
                    ticks: {
                        beginAtZero: !0
                    }
                },
                animation: {
                    animateRotate: !0,
                    animateScale: !0
                },
                startAngle: -.5 * Math.PI,
                legendCallback: function(t) {
                    var e, n, r, i = document.createElement("ul"), a = t.data, o = a.datasets, s = a.labels;
                    if (i.setAttribute("class", t.id + "-legend"),
                    o.length)
                        for (e = 0,
                        n = o[0].data.length; e < n; ++e)
                            (r = i.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[e],
                            s[e] && r.appendChild(document.createTextNode(s[e]));
                    return i.outerHTML
                },
                legend: {
                    labels: {
                        generateLabels: function(t) {
                            var e = t.data;
                            return e.labels.length && e.datasets.length ? e.labels.map((function(n, r) {
                                var i = t.getDatasetMeta(0)
                                  , a = i.controller.getStyle(r);
                                return {
                                    text: n,
                                    fillStyle: a.backgroundColor,
                                    strokeStyle: a.borderColor,
                                    lineWidth: a.borderWidth,
                                    hidden: isNaN(e.datasets[0].data[r]) || i.data[r].hidden,
                                    index: r
                                }
                            }
                            )) : []
                        }
                    },
                    onClick: function(t, e) {
                        var n, r, i, a = e.index, o = this.chart;
                        for (n = 0,
                        r = (o.data.datasets || []).length; n < r; ++n)
                            (i = o.getDatasetMeta(n)).data[a].hidden = !i.data[a].hidden;
                        o.update()
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t, e) {
                            return e.labels[t.index] + ": " + t.yLabel
                        }
                    }
                }
            });
            var be = wt.extend({
                dataElementType: Ut.Arc,
                linkScales: at.noop,
                _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
                _getIndexScaleId: function() {
                    return this.chart.scale.id
                },
                _getValueScaleId: function() {
                    return this.chart.scale.id
                },
                update: function(t) {
                    var e, n, r, i = this, a = i.getDataset(), o = i.getMeta(), s = i.chart.options.startAngle || 0, l = i._starts = [], u = i._angles = [], d = o.data;
                    for (i._updateRadius(),
                    o.count = i.countVisibleElements(),
                    e = 0,
                    n = a.data.length; e < n; e++)
                        l[e] = s,
                        r = i._computeAngle(e),
                        u[e] = r,
                        s += r;
                    for (e = 0,
                    n = d.length; e < n; ++e)
                        d[e]._options = i._resolveDataElementOptions(d[e], e),
                        i.updateElement(d[e], e, t)
                },
                _updateRadius: function() {
                    var t = this
                      , e = t.chart
                      , n = e.chartArea
                      , r = e.options
                      , i = Math.min(n.right - n.left, n.bottom - n.top);
                    e.outerRadius = Math.max(i / 2, 0),
                    e.innerRadius = Math.max(r.cutoutPercentage ? e.outerRadius / 100 * r.cutoutPercentage : 1, 0),
                    e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(),
                    t.outerRadius = e.outerRadius - e.radiusLength * t.index,
                    t.innerRadius = t.outerRadius - e.radiusLength
                },
                updateElement: function(t, e, n) {
                    var r = this
                      , i = r.chart
                      , a = r.getDataset()
                      , o = i.options
                      , s = o.animation
                      , l = i.scale
                      , u = i.data.labels
                      , d = l.xCenter
                      , c = l.yCenter
                      , h = o.startAngle
                      , f = t.hidden ? 0 : l.getDistanceFromCenterForValue(a.data[e])
                      , g = r._starts[e]
                      , p = g + (t.hidden ? 0 : r._angles[e])
                      , m = s.animateScale ? 0 : l.getDistanceFromCenterForValue(a.data[e])
                      , v = t._options || {};
                    at.extend(t, {
                        _datasetIndex: r.index,
                        _index: e,
                        _scale: l,
                        _model: {
                            backgroundColor: v.backgroundColor,
                            borderColor: v.borderColor,
                            borderWidth: v.borderWidth,
                            borderAlign: v.borderAlign,
                            x: d,
                            y: c,
                            innerRadius: 0,
                            outerRadius: n ? m : f,
                            startAngle: n && s.animateRotate ? h : g,
                            endAngle: n && s.animateRotate ? h : p,
                            label: at.valueAtIndexOrDefault(u, e, u[e])
                        }
                    }),
                    t.pivot()
                },
                countVisibleElements: function() {
                    var t = this.getDataset()
                      , e = this.getMeta()
                      , n = 0;
                    return at.each(e.data, (function(e, r) {
                        isNaN(t.data[r]) || e.hidden || n++
                    }
                    )),
                    n
                },
                setHoverStyle: function(t) {
                    var e = t._model
                      , n = t._options
                      , r = at.getHoverColor
                      , i = at.valueOrDefault;
                    t.$previousStyle = {
                        backgroundColor: e.backgroundColor,
                        borderColor: e.borderColor,
                        borderWidth: e.borderWidth
                    },
                    e.backgroundColor = i(n.hoverBackgroundColor, r(n.backgroundColor)),
                    e.borderColor = i(n.hoverBorderColor, r(n.borderColor)),
                    e.borderWidth = i(n.hoverBorderWidth, n.borderWidth)
                },
                _computeAngle: function(t) {
                    var e = this
                      , n = this.getMeta().count
                      , r = e.getDataset()
                      , i = e.getMeta();
                    if (isNaN(r.data[t]) || i.data[t].hidden)
                        return 0;
                    var a = {
                        chart: e.chart,
                        dataIndex: t,
                        dataset: r,
                        datasetIndex: e.index
                    };
                    return ye([e.chart.options.elements.arc.angle, 2 * Math.PI / n], a, t)
                }
            });
            X._set("pie", at.clone(X.doughnut)),
            X._set("pie", {
                cutoutPercentage: 0
            });
            var _e = ue
              , xe = at.valueOrDefault;
            X._set("radar", {
                spanGaps: !1,
                scale: {
                    type: "radialLinear"
                },
                elements: {
                    line: {
                        fill: "start",
                        tension: 0
                    }
                }
            });
            var we = wt.extend({
                datasetElementType: Ut.Line,
                dataElementType: Ut.Point,
                linkScales: at.noop,
                _datasetElementOptions: ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"],
                _dataElementOptions: {
                    backgroundColor: "pointBackgroundColor",
                    borderColor: "pointBorderColor",
                    borderWidth: "pointBorderWidth",
                    hitRadius: "pointHitRadius",
                    hoverBackgroundColor: "pointHoverBackgroundColor",
                    hoverBorderColor: "pointHoverBorderColor",
                    hoverBorderWidth: "pointHoverBorderWidth",
                    hoverRadius: "pointHoverRadius",
                    pointStyle: "pointStyle",
                    radius: "pointRadius",
                    rotation: "pointRotation"
                },
                _getIndexScaleId: function() {
                    return this.chart.scale.id
                },
                _getValueScaleId: function() {
                    return this.chart.scale.id
                },
                update: function(t) {
                    var e, n, r = this, i = r.getMeta(), a = i.dataset, o = i.data || [], s = r.chart.scale, l = r._config;
                    for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension),
                    a._scale = s,
                    a._datasetIndex = r.index,
                    a._children = o,
                    a._loop = !0,
                    a._model = r._resolveDatasetElementOptions(a),
                    a.pivot(),
                    e = 0,
                    n = o.length; e < n; ++e)
                        r.updateElement(o[e], e, t);
                    for (r.updateBezierControlPoints(),
                    e = 0,
                    n = o.length; e < n; ++e)
                        o[e].pivot()
                },
                updateElement: function(t, e, n) {
                    var r = this
                      , i = t.custom || {}
                      , a = r.getDataset()
                      , o = r.chart.scale
                      , s = o.getPointPositionForValue(e, a.data[e])
                      , l = r._resolveDataElementOptions(t, e)
                      , u = r.getMeta().dataset._model
                      , d = n ? o.xCenter : s.x
                      , c = n ? o.yCenter : s.y;
                    t._scale = o,
                    t._options = l,
                    t._datasetIndex = r.index,
                    t._index = e,
                    t._model = {
                        x: d,
                        y: c,
                        skip: i.skip || isNaN(d) || isNaN(c),
                        radius: l.radius,
                        pointStyle: l.pointStyle,
                        rotation: l.rotation,
                        backgroundColor: l.backgroundColor,
                        borderColor: l.borderColor,
                        borderWidth: l.borderWidth,
                        tension: xe(i.tension, u ? u.tension : 0),
                        hitRadius: l.hitRadius
                    }
                },
                _resolveDatasetElementOptions: function() {
                    var t = this
                      , e = t._config
                      , n = t.chart.options
                      , r = wt.prototype._resolveDatasetElementOptions.apply(t, arguments);
                    return r.spanGaps = xe(e.spanGaps, n.spanGaps),
                    r.tension = xe(e.lineTension, n.elements.line.tension),
                    r
                },
                updateBezierControlPoints: function() {
                    var t, e, n, r, i = this, a = i.getMeta(), o = i.chart.chartArea, s = a.data || [];
                    function l(t, e, n) {
                        return Math.max(Math.min(t, n), e)
                    }
                    for (a.dataset._model.spanGaps && (s = s.filter((function(t) {
                        return !t._model.skip
                    }
                    ))),
                    t = 0,
                    e = s.length; t < e; ++t)
                        n = s[t]._model,
                        r = at.splineCurve(at.previousItem(s, t, !0)._model, n, at.nextItem(s, t, !0)._model, n.tension),
                        n.controlPointPreviousX = l(r.previous.x, o.left, o.right),
                        n.controlPointPreviousY = l(r.previous.y, o.top, o.bottom),
                        n.controlPointNextX = l(r.next.x, o.left, o.right),
                        n.controlPointNextY = l(r.next.y, o.top, o.bottom)
                },
                setHoverStyle: function(t) {
                    var e = t._model
                      , n = t._options
                      , r = at.getHoverColor;
                    t.$previousStyle = {
                        backgroundColor: e.backgroundColor,
                        borderColor: e.borderColor,
                        borderWidth: e.borderWidth,
                        radius: e.radius
                    },
                    e.backgroundColor = xe(n.hoverBackgroundColor, r(n.backgroundColor)),
                    e.borderColor = xe(n.hoverBorderColor, r(n.borderColor)),
                    e.borderWidth = xe(n.hoverBorderWidth, n.borderWidth),
                    e.radius = xe(n.hoverRadius, n.radius)
                }
            });
            X._set("scatter", {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        id: "x-axis-1",
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        id: "y-axis-1",
                        type: "linear",
                        position: "left"
                    }]
                },
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t) {
                            return "(" + t.xLabel + ", " + t.yLabel + ")"
                        }
                    }
                }
            }),
            X._set("global", {
                datasets: {
                    scatter: {
                        showLine: !1
                    }
                }
            });
            var ke = {
                bar: ee,
                bubble: ie,
                doughnut: ue,
                horizontalBar: de,
                line: ve,
                polarArea: be,
                pie: _e,
                radar: we,
                scatter: ve
            };
            function Me(t, e) {
                return t.native ? {
                    x: t.x,
                    y: t.y
                } : at.getRelativePosition(t, e)
            }
            function Se(t, e) {
                var n, r, i, a, o, s, l = t._getSortedVisibleDatasetMetas();
                for (r = 0,
                a = l.length; r < a; ++r)
                    for (i = 0,
                    o = (n = l[r].data).length; i < o; ++i)
                        (s = n[i])._view.skip || e(s)
            }
            function De(t, e) {
                var n = [];
                return Se(t, (function(t) {
                    t.inRange(e.x, e.y) && n.push(t)
                }
                )),
                n
            }
            function Ce(t, e, n, r) {
                var i = Number.POSITIVE_INFINITY
                  , a = [];
                return Se(t, (function(t) {
                    if (!n || t.inRange(e.x, e.y)) {
                        var o = t.getCenterPoint()
                          , s = r(e, o);
                        s < i ? (a = [t],
                        i = s) : s === i && a.push(t)
                    }
                }
                )),
                a
            }
            function Pe(t) {
                var e = -1 !== t.indexOf("x")
                  , n = -1 !== t.indexOf("y");
                return function(t, r) {
                    var i = e ? Math.abs(t.x - r.x) : 0
                      , a = n ? Math.abs(t.y - r.y) : 0;
                    return Math.sqrt(Math.pow(i, 2) + Math.pow(a, 2))
                }
            }
            function Oe(t, e, n) {
                var r = Me(e, t);
                n.axis = n.axis || "x";
                var i = Pe(n.axis)
                  , a = n.intersect ? De(t, r) : Ce(t, r, !1, i)
                  , o = [];
                return a.length ? (t._getSortedVisibleDatasetMetas().forEach((function(t) {
                    var e = t.data[a[0]._index];
                    e && !e._view.skip && o.push(e)
                }
                )),
                o) : []
            }
            var Te = {
                modes: {
                    single: function(t, e) {
                        var n = Me(e, t)
                          , r = [];
                        return Se(t, (function(t) {
                            if (t.inRange(n.x, n.y))
                                return r.push(t),
                                r
                        }
                        )),
                        r.slice(0, 1)
                    },
                    label: Oe,
                    index: Oe,
                    dataset: function(t, e, n) {
                        var r = Me(e, t);
                        n.axis = n.axis || "xy";
                        var i = Pe(n.axis)
                          , a = n.intersect ? De(t, r) : Ce(t, r, !1, i);
                        return a.length > 0 && (a = t.getDatasetMeta(a[0]._datasetIndex).data),
                        a
                    },
                    "x-axis": function(t, e) {
                        return Oe(t, e, {
                            intersect: !1
                        })
                    },
                    point: function(t, e) {
                        return De(t, Me(e, t))
                    },
                    nearest: function(t, e, n) {
                        var r = Me(e, t);
                        n.axis = n.axis || "xy";
                        var i = Pe(n.axis);
                        return Ce(t, r, n.intersect, i)
                    },
                    x: function(t, e, n) {
                        var r = Me(e, t)
                          , i = []
                          , a = !1;
                        return Se(t, (function(t) {
                            t.inXRange(r.x) && i.push(t),
                            t.inRange(r.x, r.y) && (a = !0)
                        }
                        )),
                        n.intersect && !a && (i = []),
                        i
                    },
                    y: function(t, e, n) {
                        var r = Me(e, t)
                          , i = []
                          , a = !1;
                        return Se(t, (function(t) {
                            t.inYRange(r.y) && i.push(t),
                            t.inRange(r.x, r.y) && (a = !0)
                        }
                        )),
                        n.intersect && !a && (i = []),
                        i
                    }
                }
            }
              , Ae = at.extend;
            function Ie(t, e) {
                return at.where(t, (function(t) {
                    return t.pos === e
                }
                ))
            }
            function Fe(t, e) {
                return t.sort((function(t, n) {
                    var r = e ? n : t
                      , i = e ? t : n;
                    return r.weight === i.weight ? r.index - i.index : r.weight - i.weight
                }
                ))
            }
            function Re(t) {
                var e, n, r, i = [];
                for (e = 0,
                n = (t || []).length; e < n; ++e)
                    r = t[e],
                    i.push({
                        index: e,
                        box: r,
                        pos: r.position,
                        horizontal: r.isHorizontal(),
                        weight: r.weight
                    });
                return i
            }
            function Ne(t, e) {
                var n, r, i;
                for (n = 0,
                r = t.length; n < r; ++n)
                    (i = t[n]).width = i.horizontal ? i.box.fullWidth && e.availableWidth : e.vBoxMaxWidth,
                    i.height = i.horizontal && e.hBoxMaxHeight
            }
            function Le(t) {
                var e = Re(t)
                  , n = Fe(Ie(e, "left"), !0)
                  , r = Fe(Ie(e, "right"))
                  , i = Fe(Ie(e, "top"), !0)
                  , a = Fe(Ie(e, "bottom"));
                return {
                    leftAndTop: n.concat(i),
                    rightAndBottom: r.concat(a),
                    chartArea: Ie(e, "chartArea"),
                    vertical: n.concat(r),
                    horizontal: i.concat(a)
                }
            }
            function Ee(t, e, n, r) {
                return Math.max(t[n], e[n]) + Math.max(t[r], e[r])
            }
            function Ye(t, e, n) {
                var r, i, a = n.box, o = t.maxPadding;
                if (n.size && (t[n.pos] -= n.size),
                n.size = n.horizontal ? a.height : a.width,
                t[n.pos] += n.size,
                a.getPadding) {
                    var s = a.getPadding();
                    o.top = Math.max(o.top, s.top),
                    o.left = Math.max(o.left, s.left),
                    o.bottom = Math.max(o.bottom, s.bottom),
                    o.right = Math.max(o.right, s.right)
                }
                if (r = e.outerWidth - Ee(o, t, "left", "right"),
                i = e.outerHeight - Ee(o, t, "top", "bottom"),
                r !== t.w || i !== t.h) {
                    t.w = r,
                    t.h = i;
                    var l = n.horizontal ? [r, t.w] : [i, t.h];
                    return l[0] !== l[1] && (!isNaN(l[0]) || !isNaN(l[1]))
                }
            }
            function We(t) {
                var e = t.maxPadding;
                function n(n) {
                    var r = Math.max(e[n] - t[n], 0);
                    return t[n] += r,
                    r
                }
                t.y += n("top"),
                t.x += n("left"),
                n("right"),
                n("bottom")
            }
            function ze(t, e) {
                var n = e.maxPadding;
                function r(t) {
                    var r = {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    };
                    return t.forEach((function(t) {
                        r[t] = Math.max(e[t], n[t])
                    }
                    )),
                    r
                }
                return r(t ? ["left", "right"] : ["top", "bottom"])
            }
            function Ve(t, e, n) {
                var r, i, a, o, s, l, u = [];
                for (r = 0,
                i = t.length; r < i; ++r)
                    (o = (a = t[r]).box).update(a.width || e.w, a.height || e.h, ze(a.horizontal, e)),
                    Ye(e, n, a) && (l = !0,
                    u.length && (s = !0)),
                    o.fullWidth || u.push(a);
                return s && Ve(u, e, n) || l
            }
            function Be(t, e, n) {
                var r, i, a, o, s = n.padding, l = e.x, u = e.y;
                for (r = 0,
                i = t.length; r < i; ++r)
                    o = (a = t[r]).box,
                    a.horizontal ? (o.left = o.fullWidth ? s.left : e.left,
                    o.right = o.fullWidth ? n.outerWidth - s.right : e.left + e.w,
                    o.top = u,
                    o.bottom = u + o.height,
                    o.width = o.right - o.left,
                    u = o.bottom) : (o.left = l,
                    o.right = l + o.width,
                    o.top = e.top,
                    o.bottom = e.top + e.h,
                    o.height = o.bottom - o.top,
                    l = o.right);
                e.x = l,
                e.y = u
            }
            X._set("global", {
                layout: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                }
            });
            var He = {
                defaults: {},
                addBox: function(t, e) {
                    t.boxes || (t.boxes = []),
                    e.fullWidth = e.fullWidth || !1,
                    e.position = e.position || "top",
                    e.weight = e.weight || 0,
                    e._layers = e._layers || function() {
                        return [{
                            z: 0,
                            draw: function() {
                                e.draw.apply(e, arguments)
                            }
                        }]
                    }
                    ,
                    t.boxes.push(e)
                },
                removeBox: function(t, e) {
                    var n = t.boxes ? t.boxes.indexOf(e) : -1;
                    -1 !== n && t.boxes.splice(n, 1)
                },
                configure: function(t, e, n) {
                    for (var r, i = ["fullWidth", "position", "weight"], a = i.length, o = 0; o < a; ++o)
                        r = i[o],
                        n.hasOwnProperty(r) && (e[r] = n[r])
                },
                update: function(t, e, n) {
                    if (t) {
                        var r = t.options.layout || {}
                          , i = at.options.toPadding(r.padding)
                          , a = e - i.width
                          , o = n - i.height
                          , s = Le(t.boxes)
                          , l = s.vertical
                          , u = s.horizontal
                          , d = Object.freeze({
                            outerWidth: e,
                            outerHeight: n,
                            padding: i,
                            availableWidth: a,
                            vBoxMaxWidth: a / 2 / l.length,
                            hBoxMaxHeight: o / 2
                        })
                          , c = Ae({
                            maxPadding: Ae({}, i),
                            w: a,
                            h: o,
                            x: i.left,
                            y: i.top
                        }, i);
                        Ne(l.concat(u), d),
                        Ve(l, c, d),
                        Ve(u, c, d) && Ve(l, c, d),
                        We(c),
                        Be(s.leftAndTop, c, d),
                        c.x += c.w,
                        c.y += c.h,
                        Be(s.rightAndBottom, c, d),
                        t.chartArea = {
                            left: c.left,
                            top: c.top,
                            right: c.left + c.w,
                            bottom: c.top + c.h
                        },
                        at.each(s.chartArea, (function(e) {
                            var n = e.box;
                            Ae(n, t.chartArea),
                            n.update(c.w, c.h)
                        }
                        ))
                    }
                }
            }
              , je = {
                acquireContext: function(t) {
                    return t && t.canvas && (t = t.canvas),
                    t && t.getContext("2d") || null
                }
            }
              , Ue = "/*\r\n * DOM element rendering detection\r\n * https://davidwalsh.name/detect-node-insertion\r\n */\r\n@keyframes chartjs-render-animation {\r\n\tfrom { opacity: 0.99; }\r\n\tto { opacity: 1; }\r\n}\r\n\r\n.chartjs-render-monitor {\r\n\tanimation: chartjs-render-animation 0.001s;\r\n}\r\n\r\n/*\r\n * DOM element resizing detection\r\n * https://github.com/marcj/css-element-queries\r\n */\r\n.chartjs-size-monitor,\r\n.chartjs-size-monitor-expand,\r\n.chartjs-size-monitor-shrink {\r\n\tposition: absolute;\r\n\tdirection: ltr;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\tvisibility: hidden;\r\n\tz-index: -1;\r\n}\r\n\r\n.chartjs-size-monitor-expand > div {\r\n\tposition: absolute;\r\n\twidth: 1000000px;\r\n\theight: 1000000px;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n\r\n.chartjs-size-monitor-shrink > div {\r\n\tposition: absolute;\r\n\twidth: 200%;\r\n\theight: 200%;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n"
              , Ge = n(Object.freeze({
                __proto__: null,
                default: Ue
            }))
              , qe = "$chartjs"
              , Ze = "chartjs-"
              , Ke = Ze + "size-monitor"
              , $e = Ze + "render-monitor"
              , Xe = Ze + "render-animation"
              , Je = ["animationstart", "webkitAnimationStart"]
              , Qe = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup",
                pointerenter: "mouseenter",
                pointerdown: "mousedown",
                pointermove: "mousemove",
                pointerup: "mouseup",
                pointerleave: "mouseout",
                pointerout: "mouseout"
            };
            function tn(t, e) {
                var n = at.getStyle(t, e)
                  , r = n && n.match(/^(\d+)(\.\d+)?px$/);
                return r ? Number(r[1]) : void 0
            }
            function en(t, e) {
                var n = t.style
                  , r = t.getAttribute("height")
                  , i = t.getAttribute("width");
                if (t[qe] = {
                    initial: {
                        height: r,
                        width: i,
                        style: {
                            display: n.display,
                            height: n.height,
                            width: n.width
                        }
                    }
                },
                n.display = n.display || "block",
                null === i || "" === i) {
                    var a = tn(t, "width");
                    void 0 !== a && (t.width = a)
                }
                if (null === r || "" === r)
                    if ("" === t.style.height)
                        t.height = t.width / (e.options.aspectRatio || 2);
                    else {
                        var o = tn(t, "height");
                        void 0 !== a && (t.height = o)
                    }
                return t
            }
            var nn = !!function() {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function() {
                            t = !0
                        }
                    });
                    window.addEventListener("e", null, e)
                } catch (n) {}
                return t
            }() && {
                passive: !0
            };
            function rn(t, e, n) {
                t.addEventListener(e, n, nn)
            }
            function an(t, e, n) {
                t.removeEventListener(e, n, nn)
            }
            function on(t, e, n, r, i) {
                return {
                    type: t,
                    chart: e,
                    native: i || null,
                    x: void 0 !== n ? n : null,
                    y: void 0 !== r ? r : null
                }
            }
            function sn(t, e) {
                var n = Qe[t.type] || t.type
                  , r = at.getRelativePosition(t, e);
                return on(n, e, r.x, r.y, t)
            }
            function ln(t, e) {
                var n = !1
                  , r = [];
                return function() {
                    r = Array.prototype.slice.call(arguments),
                    e = e || this,
                    n || (n = !0,
                    at.requestAnimFrame.call(window, (function() {
                        n = !1,
                        t.apply(e, r)
                    }
                    )))
                }
            }
            function un(t) {
                var e = document.createElement("div");
                return e.className = t || "",
                e
            }
            function dn(t) {
                var e = 1e6
                  , n = un(Ke)
                  , r = un(Ke + "-expand")
                  , i = un(Ke + "-shrink");
                r.appendChild(un()),
                i.appendChild(un()),
                n.appendChild(r),
                n.appendChild(i),
                n._reset = function() {
                    r.scrollLeft = e,
                    r.scrollTop = e,
                    i.scrollLeft = e,
                    i.scrollTop = e
                }
                ;
                var a = function() {
                    n._reset(),
                    t()
                };
                return rn(r, "scroll", a.bind(r, "expand")),
                rn(i, "scroll", a.bind(i, "shrink")),
                n
            }
            function cn(t, e) {
                var n = t[qe] || (t[qe] = {})
                  , r = n.renderProxy = function(t) {
                    t.animationName === Xe && e()
                }
                ;
                at.each(Je, (function(e) {
                    rn(t, e, r)
                }
                )),
                n.reflow = !!t.offsetParent,
                t.classList.add($e)
            }
            function hn(t) {
                var e = t[qe] || {}
                  , n = e.renderProxy;
                n && (at.each(Je, (function(e) {
                    an(t, e, n)
                }
                )),
                delete e.renderProxy),
                t.classList.remove($e)
            }
            function fn(t, e, n) {
                var r = t[qe] || (t[qe] = {})
                  , i = r.resizer = dn(ln((function() {
                    if (r.resizer) {
                        var i = n.options.maintainAspectRatio && t.parentNode
                          , a = i ? i.clientWidth : 0;
                        e(on("resize", n)),
                        i && i.clientWidth < a && n.canvas && e(on("resize", n))
                    }
                }
                )));
                cn(t, (function() {
                    if (r.resizer) {
                        var e = t.parentNode;
                        e && e !== i.parentNode && e.insertBefore(i, e.firstChild),
                        i._reset()
                    }
                }
                ))
            }
            function gn(t) {
                var e = t[qe] || {}
                  , n = e.resizer;
                delete e.resizer,
                hn(t),
                n && n.parentNode && n.parentNode.removeChild(n)
            }
            function pn(t, e) {
                var n = t[qe] || (t[qe] = {});
                if (!n.containsStyles) {
                    n.containsStyles = !0,
                    e = "/* Chart.js */\n" + e;
                    var r = document.createElement("style");
                    r.setAttribute("type", "text/css"),
                    r.appendChild(document.createTextNode(e)),
                    t.appendChild(r)
                }
            }
            var mn = {
                disableCSSInjection: !1,
                _enabled: "undefined" !== typeof window && "undefined" !== typeof document,
                _ensureLoaded: function(t) {
                    if (!this.disableCSSInjection) {
                        var e = t.getRootNode ? t.getRootNode() : document;
                        pn(e.host ? e : document.head, Ge)
                    }
                },
                acquireContext: function(t, e) {
                    "string" === typeof t ? t = document.getElementById(t) : t.length && (t = t[0]),
                    t && t.canvas && (t = t.canvas);
                    var n = t && t.getContext && t.getContext("2d");
                    return n && n.canvas === t ? (this._ensureLoaded(t),
                    en(t, e),
                    n) : null
                },
                releaseContext: function(t) {
                    var e = t.canvas;
                    if (e[qe]) {
                        var n = e[qe].initial;
                        ["height", "width"].forEach((function(t) {
                            var r = n[t];
                            at.isNullOrUndef(r) ? e.removeAttribute(t) : e.setAttribute(t, r)
                        }
                        )),
                        at.each(n.style || {}, (function(t, n) {
                            e.style[n] = t
                        }
                        )),
                        e.width = e.width,
                        delete e[qe]
                    }
                },
                addEventListener: function(t, e, n) {
                    var r = t.canvas;
                    if ("resize" !== e) {
                        var i = n[qe] || (n[qe] = {});
                        rn(r, e, (i.proxies || (i.proxies = {}))[t.id + "_" + e] = function(e) {
                            n(sn(e, t))
                        }
                        )
                    } else
                        fn(r, n, t)
                },
                removeEventListener: function(t, e, n) {
                    var r = t.canvas;
                    if ("resize" !== e) {
                        var i = ((n[qe] || {}).proxies || {})[t.id + "_" + e];
                        i && an(r, e, i)
                    } else
                        gn(r)
                }
            };
            at.addEvent = rn,
            at.removeEvent = an;
            var vn = mn._enabled ? mn : je
              , yn = at.extend({
                initialize: function() {},
                acquireContext: function() {},
                releaseContext: function() {},
                addEventListener: function() {},
                removeEventListener: function() {}
            }, vn);
            X._set("global", {
                plugins: {}
            });
            var bn = {
                _plugins: [],
                _cacheId: 0,
                register: function(t) {
                    var e = this._plugins;
                    [].concat(t).forEach((function(t) {
                        -1 === e.indexOf(t) && e.push(t)
                    }
                    )),
                    this._cacheId++
                },
                unregister: function(t) {
                    var e = this._plugins;
                    [].concat(t).forEach((function(t) {
                        var n = e.indexOf(t);
                        -1 !== n && e.splice(n, 1)
                    }
                    )),
                    this._cacheId++
                },
                clear: function() {
                    this._plugins = [],
                    this._cacheId++
                },
                count: function() {
                    return this._plugins.length
                },
                getAll: function() {
                    return this._plugins
                },
                notify: function(t, e, n) {
                    var r, i, a, o, s, l = this.descriptors(t), u = l.length;
                    for (r = 0; r < u; ++r)
                        if ("function" === typeof (s = (a = (i = l[r]).plugin)[e]) && ((o = [t].concat(n || [])).push(i.options),
                        !1 === s.apply(a, o)))
                            return !1;
                    return !0
                },
                descriptors: function(t) {
                    var e = t.$plugins || (t.$plugins = {});
                    if (e.id === this._cacheId)
                        return e.descriptors;
                    var n = []
                      , r = []
                      , i = t && t.config || {}
                      , a = i.options && i.options.plugins || {};
                    return this._plugins.concat(i.plugins || []).forEach((function(t) {
                        if (-1 === n.indexOf(t)) {
                            var e = t.id
                              , i = a[e];
                            !1 !== i && (!0 === i && (i = at.clone(X.global.plugins[e])),
                            n.push(t),
                            r.push({
                                plugin: t,
                                options: i || {}
                            }))
                        }
                    }
                    )),
                    e.descriptors = r,
                    e.id = this._cacheId,
                    r
                },
                _invalidate: function(t) {
                    delete t.$plugins
                }
            }
              , _n = {
                constructors: {},
                defaults: {},
                registerScaleType: function(t, e, n) {
                    this.constructors[t] = e,
                    this.defaults[t] = at.clone(n)
                },
                getScaleConstructor: function(t) {
                    return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                },
                getScaleDefaults: function(t) {
                    return this.defaults.hasOwnProperty(t) ? at.merge(Object.create(null), [X.scale, this.defaults[t]]) : {}
                },
                updateScaleDefaults: function(t, e) {
                    var n = this;
                    n.defaults.hasOwnProperty(t) && (n.defaults[t] = at.extend(n.defaults[t], e))
                },
                addScalesToLayout: function(t) {
                    at.each(t.scales, (function(e) {
                        e.fullWidth = e.options.fullWidth,
                        e.position = e.options.position,
                        e.weight = e.options.weight,
                        He.addBox(t, e)
                    }
                    ))
                }
            }
              , xn = at.valueOrDefault
              , wn = at.rtl.getRtlAdapter;
            X._set("global", {
                tooltips: {
                    enabled: !0,
                    custom: null,
                    mode: "nearest",
                    position: "average",
                    intersect: !0,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleFontStyle: "bold",
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleFontColor: "#fff",
                    titleAlign: "left",
                    bodySpacing: 2,
                    bodyFontColor: "#fff",
                    bodyAlign: "left",
                    footerFontStyle: "bold",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFontColor: "#fff",
                    footerAlign: "left",
                    yPadding: 6,
                    xPadding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    callbacks: {
                        beforeTitle: at.noop,
                        title: function(t, e) {
                            var n = ""
                              , r = e.labels
                              , i = r ? r.length : 0;
                            if (t.length > 0) {
                                var a = t[0];
                                a.label ? n = a.label : a.xLabel ? n = a.xLabel : i > 0 && a.index < i && (n = r[a.index])
                            }
                            return n
                        },
                        afterTitle: at.noop,
                        beforeBody: at.noop,
                        beforeLabel: at.noop,
                        label: function(t, e) {
                            var n = e.datasets[t.datasetIndex].label || "";
                            return n && (n += ": "),
                            at.isNullOrUndef(t.value) ? n += t.yLabel : n += t.value,
                            n
                        },
                        labelColor: function(t, e) {
                            var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                            return {
                                borderColor: n.borderColor,
                                backgroundColor: n.backgroundColor
                            }
                        },
                        labelTextColor: function() {
                            return this._options.bodyFontColor
                        },
                        afterLabel: at.noop,
                        afterBody: at.noop,
                        beforeFooter: at.noop,
                        footer: at.noop,
                        afterFooter: at.noop
                    }
                }
            });
            var kn = {
                average: function(t) {
                    if (!t.length)
                        return !1;
                    var e, n, r = 0, i = 0, a = 0;
                    for (e = 0,
                    n = t.length; e < n; ++e) {
                        var o = t[e];
                        if (o && o.hasValue()) {
                            var s = o.tooltipPosition();
                            r += s.x,
                            i += s.y,
                            ++a
                        }
                    }
                    return {
                        x: r / a,
                        y: i / a
                    }
                },
                nearest: function(t, e) {
                    var n, r, i, a = e.x, o = e.y, s = Number.POSITIVE_INFINITY;
                    for (n = 0,
                    r = t.length; n < r; ++n) {
                        var l = t[n];
                        if (l && l.hasValue()) {
                            var u = l.getCenterPoint()
                              , d = at.distanceBetweenPoints(e, u);
                            d < s && (s = d,
                            i = l)
                        }
                    }
                    if (i) {
                        var c = i.tooltipPosition();
                        a = c.x,
                        o = c.y
                    }
                    return {
                        x: a,
                        y: o
                    }
                }
            };
            function Mn(t, e) {
                return e && (at.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)),
                t
            }
            function Sn(t) {
                return ("string" === typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
            }
            function Dn(t) {
                var e = t._xScale
                  , n = t._yScale || t._scale
                  , r = t._index
                  , i = t._datasetIndex
                  , a = t._chart.getDatasetMeta(i).controller
                  , o = a._getIndexScale()
                  , s = a._getValueScale();
                return {
                    xLabel: e ? e.getLabelForIndex(r, i) : "",
                    yLabel: n ? n.getLabelForIndex(r, i) : "",
                    label: o ? "" + o.getLabelForIndex(r, i) : "",
                    value: s ? "" + s.getLabelForIndex(r, i) : "",
                    index: r,
                    datasetIndex: i,
                    x: t._model.x,
                    y: t._model.y
                }
            }
            function Cn(t) {
                var e = X.global;
                return {
                    xPadding: t.xPadding,
                    yPadding: t.yPadding,
                    xAlign: t.xAlign,
                    yAlign: t.yAlign,
                    rtl: t.rtl,
                    textDirection: t.textDirection,
                    bodyFontColor: t.bodyFontColor,
                    _bodyFontFamily: xn(t.bodyFontFamily, e.defaultFontFamily),
                    _bodyFontStyle: xn(t.bodyFontStyle, e.defaultFontStyle),
                    _bodyAlign: t.bodyAlign,
                    bodyFontSize: xn(t.bodyFontSize, e.defaultFontSize),
                    bodySpacing: t.bodySpacing,
                    titleFontColor: t.titleFontColor,
                    _titleFontFamily: xn(t.titleFontFamily, e.defaultFontFamily),
                    _titleFontStyle: xn(t.titleFontStyle, e.defaultFontStyle),
                    titleFontSize: xn(t.titleFontSize, e.defaultFontSize),
                    _titleAlign: t.titleAlign,
                    titleSpacing: t.titleSpacing,
                    titleMarginBottom: t.titleMarginBottom,
                    footerFontColor: t.footerFontColor,
                    _footerFontFamily: xn(t.footerFontFamily, e.defaultFontFamily),
                    _footerFontStyle: xn(t.footerFontStyle, e.defaultFontStyle),
                    footerFontSize: xn(t.footerFontSize, e.defaultFontSize),
                    _footerAlign: t.footerAlign,
                    footerSpacing: t.footerSpacing,
                    footerMarginTop: t.footerMarginTop,
                    caretSize: t.caretSize,
                    cornerRadius: t.cornerRadius,
                    backgroundColor: t.backgroundColor,
                    opacity: 0,
                    legendColorBackground: t.multiKeyBackground,
                    displayColors: t.displayColors,
                    borderColor: t.borderColor,
                    borderWidth: t.borderWidth
                }
            }
            function Pn(t, e) {
                var n = t._chart.ctx
                  , r = 2 * e.yPadding
                  , i = 0
                  , a = e.body
                  , o = a.reduce((function(t, e) {
                    return t + e.before.length + e.lines.length + e.after.length
                }
                ), 0);
                o += e.beforeBody.length + e.afterBody.length;
                var s = e.title.length
                  , l = e.footer.length
                  , u = e.titleFontSize
                  , d = e.bodyFontSize
                  , c = e.footerFontSize;
                r += s * u,
                r += s ? (s - 1) * e.titleSpacing : 0,
                r += s ? e.titleMarginBottom : 0,
                r += o * d,
                r += o ? (o - 1) * e.bodySpacing : 0,
                r += l ? e.footerMarginTop : 0,
                r += l * c,
                r += l ? (l - 1) * e.footerSpacing : 0;
                var h = 0
                  , f = function(t) {
                    i = Math.max(i, n.measureText(t).width + h)
                };
                return n.font = at.fontString(u, e._titleFontStyle, e._titleFontFamily),
                at.each(e.title, f),
                n.font = at.fontString(d, e._bodyFontStyle, e._bodyFontFamily),
                at.each(e.beforeBody.concat(e.afterBody), f),
                h = e.displayColors ? d + 2 : 0,
                at.each(a, (function(t) {
                    at.each(t.before, f),
                    at.each(t.lines, f),
                    at.each(t.after, f)
                }
                )),
                h = 0,
                n.font = at.fontString(c, e._footerFontStyle, e._footerFontFamily),
                at.each(e.footer, f),
                {
                    width: i += 2 * e.xPadding,
                    height: r
                }
            }
            function On(t, e) {
                var n, r, i, a, o, s = t._model, l = t._chart, u = t._chart.chartArea, d = "center", c = "center";
                s.y < e.height ? c = "top" : s.y > l.height - e.height && (c = "bottom");
                var h = (u.left + u.right) / 2
                  , f = (u.top + u.bottom) / 2;
                "center" === c ? (n = function(t) {
                    return t <= h
                }
                ,
                r = function(t) {
                    return t > h
                }
                ) : (n = function(t) {
                    return t <= e.width / 2
                }
                ,
                r = function(t) {
                    return t >= l.width - e.width / 2
                }
                ),
                i = function(t) {
                    return t + e.width + s.caretSize + s.caretPadding > l.width
                }
                ,
                a = function(t) {
                    return t - e.width - s.caretSize - s.caretPadding < 0
                }
                ,
                o = function(t) {
                    return t <= f ? "top" : "bottom"
                }
                ,
                n(s.x) ? (d = "left",
                i(s.x) && (d = "center",
                c = o(s.y))) : r(s.x) && (d = "right",
                a(s.x) && (d = "center",
                c = o(s.y)));
                var g = t._options;
                return {
                    xAlign: g.xAlign ? g.xAlign : d,
                    yAlign: g.yAlign ? g.yAlign : c
                }
            }
            function Tn(t, e, n, r) {
                var i = t.x
                  , a = t.y
                  , o = t.caretSize
                  , s = t.caretPadding
                  , l = t.cornerRadius
                  , u = n.xAlign
                  , d = n.yAlign
                  , c = o + s
                  , h = l + s;
                return "right" === u ? i -= e.width : "center" === u && ((i -= e.width / 2) + e.width > r.width && (i = r.width - e.width),
                i < 0 && (i = 0)),
                "top" === d ? a += c : a -= "bottom" === d ? e.height + c : e.height / 2,
                "center" === d ? "left" === u ? i += c : "right" === u && (i -= c) : "left" === u ? i -= h : "right" === u && (i += h),
                {
                    x: i,
                    y: a
                }
            }
            function An(t, e) {
                return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding
            }
            function In(t) {
                return Mn([], Sn(t))
            }
            var Fn = ft.extend({
                initialize: function() {
                    this._model = Cn(this._options),
                    this._lastActive = []
                },
                getTitle: function() {
                    var t = this
                      , e = t._options.callbacks
                      , n = e.beforeTitle.apply(t, arguments)
                      , r = e.title.apply(t, arguments)
                      , i = e.afterTitle.apply(t, arguments)
                      , a = [];
                    return a = Mn(a, Sn(n)),
                    a = Mn(a, Sn(r)),
                    a = Mn(a, Sn(i))
                },
                getBeforeBody: function() {
                    return In(this._options.callbacks.beforeBody.apply(this, arguments))
                },
                getBody: function(t, e) {
                    var n = this
                      , r = n._options.callbacks
                      , i = [];
                    return at.each(t, (function(t) {
                        var a = {
                            before: [],
                            lines: [],
                            after: []
                        };
                        Mn(a.before, Sn(r.beforeLabel.call(n, t, e))),
                        Mn(a.lines, r.label.call(n, t, e)),
                        Mn(a.after, Sn(r.afterLabel.call(n, t, e))),
                        i.push(a)
                    }
                    )),
                    i
                },
                getAfterBody: function() {
                    return In(this._options.callbacks.afterBody.apply(this, arguments))
                },
                getFooter: function() {
                    var t = this
                      , e = t._options.callbacks
                      , n = e.beforeFooter.apply(t, arguments)
                      , r = e.footer.apply(t, arguments)
                      , i = e.afterFooter.apply(t, arguments)
                      , a = [];
                    return a = Mn(a, Sn(n)),
                    a = Mn(a, Sn(r)),
                    a = Mn(a, Sn(i))
                },
                update: function(t) {
                    var e, n, r = this, i = r._options, a = r._model, o = r._model = Cn(i), s = r._active, l = r._data, u = {
                        xAlign: a.xAlign,
                        yAlign: a.yAlign
                    }, d = {
                        x: a.x,
                        y: a.y
                    }, c = {
                        width: a.width,
                        height: a.height
                    }, h = {
                        x: a.caretX,
                        y: a.caretY
                    };
                    if (s.length) {
                        o.opacity = 1;
                        var f = []
                          , g = [];
                        h = kn[i.position].call(r, s, r._eventPosition);
                        var p = [];
                        for (e = 0,
                        n = s.length; e < n; ++e)
                            p.push(Dn(s[e]));
                        i.filter && (p = p.filter((function(t) {
                            return i.filter(t, l)
                        }
                        ))),
                        i.itemSort && (p = p.sort((function(t, e) {
                            return i.itemSort(t, e, l)
                        }
                        ))),
                        at.each(p, (function(t) {
                            f.push(i.callbacks.labelColor.call(r, t, r._chart)),
                            g.push(i.callbacks.labelTextColor.call(r, t, r._chart))
                        }
                        )),
                        o.title = r.getTitle(p, l),
                        o.beforeBody = r.getBeforeBody(p, l),
                        o.body = r.getBody(p, l),
                        o.afterBody = r.getAfterBody(p, l),
                        o.footer = r.getFooter(p, l),
                        o.x = h.x,
                        o.y = h.y,
                        o.caretPadding = i.caretPadding,
                        o.labelColors = f,
                        o.labelTextColors = g,
                        o.dataPoints = p,
                        d = Tn(o, c = Pn(this, o), u = On(this, c), r._chart)
                    } else
                        o.opacity = 0;
                    return o.xAlign = u.xAlign,
                    o.yAlign = u.yAlign,
                    o.x = d.x,
                    o.y = d.y,
                    o.width = c.width,
                    o.height = c.height,
                    o.caretX = h.x,
                    o.caretY = h.y,
                    r._model = o,
                    t && i.custom && i.custom.call(r, o),
                    r
                },
                drawCaret: function(t, e) {
                    var n = this._chart.ctx
                      , r = this._view
                      , i = this.getCaretPosition(t, e, r);
                    n.lineTo(i.x1, i.y1),
                    n.lineTo(i.x2, i.y2),
                    n.lineTo(i.x3, i.y3)
                },
                getCaretPosition: function(t, e, n) {
                    var r, i, a, o, s, l, u = n.caretSize, d = n.cornerRadius, c = n.xAlign, h = n.yAlign, f = t.x, g = t.y, p = e.width, m = e.height;
                    if ("center" === h)
                        s = g + m / 2,
                        "left" === c ? (i = (r = f) - u,
                        a = r,
                        o = s + u,
                        l = s - u) : (i = (r = f + p) + u,
                        a = r,
                        o = s - u,
                        l = s + u);
                    else if ("left" === c ? (r = (i = f + d + u) - u,
                    a = i + u) : "right" === c ? (r = (i = f + p - d - u) - u,
                    a = i + u) : (r = (i = n.caretX) - u,
                    a = i + u),
                    "top" === h)
                        s = (o = g) - u,
                        l = o;
                    else {
                        s = (o = g + m) + u,
                        l = o;
                        var v = a;
                        a = r,
                        r = v
                    }
                    return {
                        x1: r,
                        x2: i,
                        x3: a,
                        y1: o,
                        y2: s,
                        y3: l
                    }
                },
                drawTitle: function(t, e, n) {
                    var r, i, a, o = e.title, s = o.length;
                    if (s) {
                        var l = wn(e.rtl, e.x, e.width);
                        for (t.x = An(e, e._titleAlign),
                        n.textAlign = l.textAlign(e._titleAlign),
                        n.textBaseline = "middle",
                        r = e.titleFontSize,
                        i = e.titleSpacing,
                        n.fillStyle = e.titleFontColor,
                        n.font = at.fontString(r, e._titleFontStyle, e._titleFontFamily),
                        a = 0; a < s; ++a)
                            n.fillText(o[a], l.x(t.x), t.y + r / 2),
                            t.y += r + i,
                            a + 1 === s && (t.y += e.titleMarginBottom - i)
                    }
                },
                drawBody: function(t, e, n) {
                    var r, i, a, o, s, l, u, d, c = e.bodyFontSize, h = e.bodySpacing, f = e._bodyAlign, g = e.body, p = e.displayColors, m = 0, v = p ? An(e, "left") : 0, y = wn(e.rtl, e.x, e.width), b = function(e) {
                        n.fillText(e, y.x(t.x + m), t.y + c / 2),
                        t.y += c + h
                    }, _ = y.textAlign(f);
                    for (n.textAlign = f,
                    n.textBaseline = "middle",
                    n.font = at.fontString(c, e._bodyFontStyle, e._bodyFontFamily),
                    t.x = An(e, _),
                    n.fillStyle = e.bodyFontColor,
                    at.each(e.beforeBody, b),
                    m = p && "right" !== _ ? "center" === f ? c / 2 + 1 : c + 2 : 0,
                    s = 0,
                    u = g.length; s < u; ++s) {
                        for (r = g[s],
                        i = e.labelTextColors[s],
                        a = e.labelColors[s],
                        n.fillStyle = i,
                        at.each(r.before, b),
                        l = 0,
                        d = (o = r.lines).length; l < d; ++l) {
                            if (p) {
                                var x = y.x(v);
                                n.fillStyle = e.legendColorBackground,
                                n.fillRect(y.leftForLtr(x, c), t.y, c, c),
                                n.lineWidth = 1,
                                n.strokeStyle = a.borderColor,
                                n.strokeRect(y.leftForLtr(x, c), t.y, c, c),
                                n.fillStyle = a.backgroundColor,
                                n.fillRect(y.leftForLtr(y.xPlus(x, 1), c - 2), t.y + 1, c - 2, c - 2),
                                n.fillStyle = i
                            }
                            b(o[l])
                        }
                        at.each(r.after, b)
                    }
                    m = 0,
                    at.each(e.afterBody, b),
                    t.y -= h
                },
                drawFooter: function(t, e, n) {
                    var r, i, a = e.footer, o = a.length;
                    if (o) {
                        var s = wn(e.rtl, e.x, e.width);
                        for (t.x = An(e, e._footerAlign),
                        t.y += e.footerMarginTop,
                        n.textAlign = s.textAlign(e._footerAlign),
                        n.textBaseline = "middle",
                        r = e.footerFontSize,
                        n.fillStyle = e.footerFontColor,
                        n.font = at.fontString(r, e._footerFontStyle, e._footerFontFamily),
                        i = 0; i < o; ++i)
                            n.fillText(a[i], s.x(t.x), t.y + r / 2),
                            t.y += r + e.footerSpacing
                    }
                },
                drawBackground: function(t, e, n, r) {
                    n.fillStyle = e.backgroundColor,
                    n.strokeStyle = e.borderColor,
                    n.lineWidth = e.borderWidth;
                    var i = e.xAlign
                      , a = e.yAlign
                      , o = t.x
                      , s = t.y
                      , l = r.width
                      , u = r.height
                      , d = e.cornerRadius;
                    n.beginPath(),
                    n.moveTo(o + d, s),
                    "top" === a && this.drawCaret(t, r),
                    n.lineTo(o + l - d, s),
                    n.quadraticCurveTo(o + l, s, o + l, s + d),
                    "center" === a && "right" === i && this.drawCaret(t, r),
                    n.lineTo(o + l, s + u - d),
                    n.quadraticCurveTo(o + l, s + u, o + l - d, s + u),
                    "bottom" === a && this.drawCaret(t, r),
                    n.lineTo(o + d, s + u),
                    n.quadraticCurveTo(o, s + u, o, s + u - d),
                    "center" === a && "left" === i && this.drawCaret(t, r),
                    n.lineTo(o, s + d),
                    n.quadraticCurveTo(o, s, o + d, s),
                    n.closePath(),
                    n.fill(),
                    e.borderWidth > 0 && n.stroke()
                },
                draw: function() {
                    var t = this._chart.ctx
                      , e = this._view;
                    if (0 !== e.opacity) {
                        var n = {
                            width: e.width,
                            height: e.height
                        }
                          , r = {
                            x: e.x,
                            y: e.y
                        }
                          , i = Math.abs(e.opacity < .001) ? 0 : e.opacity
                          , a = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                        this._options.enabled && a && (t.save(),
                        t.globalAlpha = i,
                        this.drawBackground(r, e, t, n),
                        r.y += e.yPadding,
                        at.rtl.overrideTextDirection(t, e.textDirection),
                        this.drawTitle(r, e, t),
                        this.drawBody(r, e, t),
                        this.drawFooter(r, e, t),
                        at.rtl.restoreTextDirection(t, e.textDirection),
                        t.restore())
                    }
                },
                handleEvent: function(t) {
                    var e = this
                      , n = e._options
                      , r = !1;
                    return e._lastActive = e._lastActive || [],
                    "mouseout" === t.type ? e._active = [] : (e._active = e._chart.getElementsAtEventForMode(t, n.mode, n),
                    n.reverse && e._active.reverse()),
                    (r = !at.arrayEquals(e._active, e._lastActive)) && (e._lastActive = e._active,
                    (n.enabled || n.custom) && (e._eventPosition = {
                        x: t.x,
                        y: t.y
                    },
                    e.update(!0),
                    e.pivot())),
                    r
                }
            })
              , Rn = kn
              , Nn = Fn;
            Nn.positioners = Rn;
            var Ln = at.valueOrDefault;
            function En() {
                return at.merge(Object.create(null), [].slice.call(arguments), {
                    merger: function(t, e, n, r) {
                        if ("xAxes" === t || "yAxes" === t) {
                            var i, a, o, s = n[t].length;
                            for (e[t] || (e[t] = []),
                            i = 0; i < s; ++i)
                                o = n[t][i],
                                a = Ln(o.type, "xAxes" === t ? "category" : "linear"),
                                i >= e[t].length && e[t].push({}),
                                !e[t][i].type || o.type && o.type !== e[t][i].type ? at.merge(e[t][i], [_n.getScaleDefaults(a), o]) : at.merge(e[t][i], o)
                        } else
                            at._merger(t, e, n, r)
                    }
                })
            }
            function Yn() {
                return at.merge(Object.create(null), [].slice.call(arguments), {
                    merger: function(t, e, n, r) {
                        var i = e[t] || Object.create(null)
                          , a = n[t];
                        "scales" === t ? e[t] = En(i, a) : "scale" === t ? e[t] = at.merge(i, [_n.getScaleDefaults(a.type), a]) : at._merger(t, e, n, r)
                    }
                })
            }
            function Wn(t) {
                var e = (t = t || Object.create(null)).data = t.data || {};
                return e.datasets = e.datasets || [],
                e.labels = e.labels || [],
                t.options = Yn(X.global, X[t.type], t.options || {}),
                t
            }
            function zn(t) {
                var e = t.options;
                at.each(t.scales, (function(e) {
                    He.removeBox(t, e)
                }
                )),
                e = Yn(X.global, X[t.config.type], e),
                t.options = t.config.options = e,
                t.ensureScalesHaveIDs(),
                t.buildOrUpdateScales(),
                t.tooltip._options = e.tooltips,
                t.tooltip.initialize()
            }
            function Vn(t, e, n) {
                var r, i = function(t) {
                    return t.id === r
                };
                do {
                    r = e + n++
                } while (at.findIndex(t, i) >= 0);
                return r
            }
            function Bn(t) {
                return "top" === t || "bottom" === t
            }
            function Hn(t, e) {
                return function(n, r) {
                    return n[t] === r[t] ? n[e] - r[e] : n[t] - r[t]
                }
            }
            X._set("global", {
                elements: {},
                events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                hover: {
                    onHover: null,
                    mode: "nearest",
                    intersect: !0,
                    animationDuration: 400
                },
                onClick: null,
                maintainAspectRatio: !0,
                responsive: !0,
                responsiveAnimationDuration: 0
            });
            var jn = function(t, e) {
                return this.construct(t, e),
                this
            };
            at.extend(jn.prototype, {
                construct: function(t, e) {
                    var n = this;
                    e = Wn(e);
                    var r = yn.acquireContext(t, e)
                      , i = r && r.canvas
                      , a = i && i.height
                      , o = i && i.width;
                    n.id = at.uid(),
                    n.ctx = r,
                    n.canvas = i,
                    n.config = e,
                    n.width = o,
                    n.height = a,
                    n.aspectRatio = a ? o / a : null,
                    n.options = e.options,
                    n._bufferedRender = !1,
                    n._layers = [],
                    n.chart = n,
                    n.controller = n,
                    jn.instances[n.id] = n,
                    Object.defineProperty(n, "data", {
                        get: function() {
                            return n.config.data
                        },
                        set: function(t) {
                            n.config.data = t
                        }
                    }),
                    r && i ? (n.initialize(),
                    n.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                },
                initialize: function() {
                    var t = this;
                    return bn.notify(t, "beforeInit"),
                    at.retinaScale(t, t.options.devicePixelRatio),
                    t.bindEvents(),
                    t.options.responsive && t.resize(!0),
                    t.initToolTip(),
                    bn.notify(t, "afterInit"),
                    t
                },
                clear: function() {
                    return at.canvas.clear(this),
                    this
                },
                stop: function() {
                    return mt.cancelAnimation(this),
                    this
                },
                resize: function(t) {
                    var e = this
                      , n = e.options
                      , r = e.canvas
                      , i = n.maintainAspectRatio && e.aspectRatio || null
                      , a = Math.max(0, Math.floor(at.getMaximumWidth(r)))
                      , o = Math.max(0, Math.floor(i ? a / i : at.getMaximumHeight(r)));
                    if ((e.width !== a || e.height !== o) && (r.width = e.width = a,
                    r.height = e.height = o,
                    r.style.width = a + "px",
                    r.style.height = o + "px",
                    at.retinaScale(e, n.devicePixelRatio),
                    !t)) {
                        var s = {
                            width: a,
                            height: o
                        };
                        bn.notify(e, "resize", [s]),
                        n.onResize && n.onResize(e, s),
                        e.stop(),
                        e.update({
                            duration: n.responsiveAnimationDuration
                        })
                    }
                },
                ensureScalesHaveIDs: function() {
                    var t = this.options
                      , e = t.scales || {}
                      , n = t.scale;
                    at.each(e.xAxes, (function(t, n) {
                        t.id || (t.id = Vn(e.xAxes, "x-axis-", n))
                    }
                    )),
                    at.each(e.yAxes, (function(t, n) {
                        t.id || (t.id = Vn(e.yAxes, "y-axis-", n))
                    }
                    )),
                    n && (n.id = n.id || "scale")
                },
                buildOrUpdateScales: function() {
                    var t = this
                      , e = t.options
                      , n = t.scales || {}
                      , r = []
                      , i = Object.keys(n).reduce((function(t, e) {
                        return t[e] = !1,
                        t
                    }
                    ), {});
                    e.scales && (r = r.concat((e.scales.xAxes || []).map((function(t) {
                        return {
                            options: t,
                            dtype: "category",
                            dposition: "bottom"
                        }
                    }
                    )), (e.scales.yAxes || []).map((function(t) {
                        return {
                            options: t,
                            dtype: "linear",
                            dposition: "left"
                        }
                    }
                    )))),
                    e.scale && r.push({
                        options: e.scale,
                        dtype: "radialLinear",
                        isDefault: !0,
                        dposition: "chartArea"
                    }),
                    at.each(r, (function(e) {
                        var r = e.options
                          , a = r.id
                          , o = Ln(r.type, e.dtype);
                        Bn(r.position) !== Bn(e.dposition) && (r.position = e.dposition),
                        i[a] = !0;
                        var s = null;
                        if (a in n && n[a].type === o)
                            (s = n[a]).options = r,
                            s.ctx = t.ctx,
                            s.chart = t;
                        else {
                            var l = _n.getScaleConstructor(o);
                            if (!l)
                                return;
                            s = new l({
                                id: a,
                                type: o,
                                options: r,
                                ctx: t.ctx,
                                chart: t
                            }),
                            n[s.id] = s
                        }
                        s.mergeTicksOptions(),
                        e.isDefault && (t.scale = s)
                    }
                    )),
                    at.each(i, (function(t, e) {
                        t || delete n[e]
                    }
                    )),
                    t.scales = n,
                    _n.addScalesToLayout(this)
                },
                buildOrUpdateControllers: function() {
                    var t, e, n = this, r = [], i = n.data.datasets;
                    for (t = 0,
                    e = i.length; t < e; t++) {
                        var a = i[t]
                          , o = n.getDatasetMeta(t)
                          , s = a.type || n.config.type;
                        if (o.type && o.type !== s && (n.destroyDatasetMeta(t),
                        o = n.getDatasetMeta(t)),
                        o.type = s,
                        o.order = a.order || 0,
                        o.index = t,
                        o.controller)
                            o.controller.updateIndex(t),
                            o.controller.linkScales();
                        else {
                            var l = ke[o.type];
                            if (void 0 === l)
                                throw new Error('"' + o.type + '" is not a chart type.');
                            o.controller = new l(n,t),
                            r.push(o.controller)
                        }
                    }
                    return r
                },
                resetElements: function() {
                    var t = this;
                    at.each(t.data.datasets, (function(e, n) {
                        t.getDatasetMeta(n).controller.reset()
                    }
                    ), t)
                },
                reset: function() {
                    this.resetElements(),
                    this.tooltip.initialize()
                },
                update: function(t) {
                    var e, n, r = this;
                    if (t && "object" === typeof t || (t = {
                        duration: t,
                        lazy: arguments[1]
                    }),
                    zn(r),
                    bn._invalidate(r),
                    !1 !== bn.notify(r, "beforeUpdate")) {
                        r.tooltip._data = r.data;
                        var i = r.buildOrUpdateControllers();
                        for (e = 0,
                        n = r.data.datasets.length; e < n; e++)
                            r.getDatasetMeta(e).controller.buildOrUpdateElements();
                        r.updateLayout(),
                        r.options.animation && r.options.animation.duration && at.each(i, (function(t) {
                            t.reset()
                        }
                        )),
                        r.updateDatasets(),
                        r.tooltip.initialize(),
                        r.lastActive = [],
                        bn.notify(r, "afterUpdate"),
                        r._layers.sort(Hn("z", "_idx")),
                        r._bufferedRender ? r._bufferedRequest = {
                            duration: t.duration,
                            easing: t.easing,
                            lazy: t.lazy
                        } : r.render(t)
                    }
                },
                updateLayout: function() {
                    var t = this;
                    !1 !== bn.notify(t, "beforeLayout") && (He.update(this, this.width, this.height),
                    t._layers = [],
                    at.each(t.boxes, (function(e) {
                        e._configure && e._configure(),
                        t._layers.push.apply(t._layers, e._layers())
                    }
                    ), t),
                    t._layers.forEach((function(t, e) {
                        t._idx = e
                    }
                    )),
                    bn.notify(t, "afterScaleUpdate"),
                    bn.notify(t, "afterLayout"))
                },
                updateDatasets: function() {
                    var t = this;
                    if (!1 !== bn.notify(t, "beforeDatasetsUpdate")) {
                        for (var e = 0, n = t.data.datasets.length; e < n; ++e)
                            t.updateDataset(e);
                        bn.notify(t, "afterDatasetsUpdate")
                    }
                },
                updateDataset: function(t) {
                    var e = this
                      , n = e.getDatasetMeta(t)
                      , r = {
                        meta: n,
                        index: t
                    };
                    !1 !== bn.notify(e, "beforeDatasetUpdate", [r]) && (n.controller._update(),
                    bn.notify(e, "afterDatasetUpdate", [r]))
                },
                render: function(t) {
                    var e = this;
                    t && "object" === typeof t || (t = {
                        duration: t,
                        lazy: arguments[1]
                    });
                    var n = e.options.animation
                      , r = Ln(t.duration, n && n.duration)
                      , i = t.lazy;
                    if (!1 !== bn.notify(e, "beforeRender")) {
                        var a = function(t) {
                            bn.notify(e, "afterRender"),
                            at.callback(n && n.onComplete, [t], e)
                        };
                        if (n && r) {
                            var o = new pt({
                                numSteps: r / 16.66,
                                easing: t.easing || n.easing,
                                render: function(t, e) {
                                    var n = at.easing.effects[e.easing]
                                      , r = e.currentStep
                                      , i = r / e.numSteps;
                                    t.draw(n(i), i, r)
                                },
                                onAnimationProgress: n.onProgress,
                                onAnimationComplete: a
                            });
                            mt.addAnimation(e, o, r, i)
                        } else
                            e.draw(),
                            a(new pt({
                                numSteps: 0,
                                chart: e
                            }));
                        return e
                    }
                },
                draw: function(t) {
                    var e, n, r = this;
                    if (r.clear(),
                    at.isNullOrUndef(t) && (t = 1),
                    r.transition(t),
                    !(r.width <= 0 || r.height <= 0) && !1 !== bn.notify(r, "beforeDraw", [t])) {
                        for (n = r._layers,
                        e = 0; e < n.length && n[e].z <= 0; ++e)
                            n[e].draw(r.chartArea);
                        for (r.drawDatasets(t); e < n.length; ++e)
                            n[e].draw(r.chartArea);
                        r._drawTooltip(t),
                        bn.notify(r, "afterDraw", [t])
                    }
                },
                transition: function(t) {
                    for (var e = this, n = 0, r = (e.data.datasets || []).length; n < r; ++n)
                        e.isDatasetVisible(n) && e.getDatasetMeta(n).controller.transition(t);
                    e.tooltip.transition(t)
                },
                _getSortedDatasetMetas: function(t) {
                    var e, n, r = this, i = [];
                    for (e = 0,
                    n = (r.data.datasets || []).length; e < n; ++e)
                        t && !r.isDatasetVisible(e) || i.push(r.getDatasetMeta(e));
                    return i.sort(Hn("order", "index")),
                    i
                },
                _getSortedVisibleDatasetMetas: function() {
                    return this._getSortedDatasetMetas(!0)
                },
                drawDatasets: function(t) {
                    var e, n, r = this;
                    if (!1 !== bn.notify(r, "beforeDatasetsDraw", [t])) {
                        for (n = (e = r._getSortedVisibleDatasetMetas()).length - 1; n >= 0; --n)
                            r.drawDataset(e[n], t);
                        bn.notify(r, "afterDatasetsDraw", [t])
                    }
                },
                drawDataset: function(t, e) {
                    var n = this
                      , r = {
                        meta: t,
                        index: t.index,
                        easingValue: e
                    };
                    !1 !== bn.notify(n, "beforeDatasetDraw", [r]) && (t.controller.draw(e),
                    bn.notify(n, "afterDatasetDraw", [r]))
                },
                _drawTooltip: function(t) {
                    var e = this
                      , n = e.tooltip
                      , r = {
                        tooltip: n,
                        easingValue: t
                    };
                    !1 !== bn.notify(e, "beforeTooltipDraw", [r]) && (n.draw(),
                    bn.notify(e, "afterTooltipDraw", [r]))
                },
                getElementAtEvent: function(t) {
                    return Te.modes.single(this, t)
                },
                getElementsAtEvent: function(t) {
                    return Te.modes.label(this, t, {
                        intersect: !0
                    })
                },
                getElementsAtXAxis: function(t) {
                    return Te.modes["x-axis"](this, t, {
                        intersect: !0
                    })
                },
                getElementsAtEventForMode: function(t, e, n) {
                    var r = Te.modes[e];
                    return "function" === typeof r ? r(this, t, n) : []
                },
                getDatasetAtEvent: function(t) {
                    return Te.modes.dataset(this, t, {
                        intersect: !0
                    })
                },
                getDatasetMeta: function(t) {
                    var e = this
                      , n = e.data.datasets[t];
                    n._meta || (n._meta = {});
                    var r = n._meta[e.id];
                    return r || (r = n._meta[e.id] = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null,
                        order: n.order || 0,
                        index: t
                    }),
                    r
                },
                getVisibleDatasetCount: function() {
                    for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e)
                        this.isDatasetVisible(e) && t++;
                    return t
                },
                isDatasetVisible: function(t) {
                    var e = this.getDatasetMeta(t);
                    return "boolean" === typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                },
                generateLegend: function() {
                    return this.options.legendCallback(this)
                },
                destroyDatasetMeta: function(t) {
                    var e = this.id
                      , n = this.data.datasets[t]
                      , r = n._meta && n._meta[e];
                    r && (r.controller.destroy(),
                    delete n._meta[e])
                },
                destroy: function() {
                    var t, e, n = this, r = n.canvas;
                    for (n.stop(),
                    t = 0,
                    e = n.data.datasets.length; t < e; ++t)
                        n.destroyDatasetMeta(t);
                    r && (n.unbindEvents(),
                    at.canvas.clear(n),
                    yn.releaseContext(n.ctx),
                    n.canvas = null,
                    n.ctx = null),
                    bn.notify(n, "destroy"),
                    delete jn.instances[n.id]
                },
                toBase64Image: function() {
                    return this.canvas.toDataURL.apply(this.canvas, arguments)
                },
                initToolTip: function() {
                    var t = this;
                    t.tooltip = new Nn({
                        _chart: t,
                        _chartInstance: t,
                        _data: t.data,
                        _options: t.options.tooltips
                    },t)
                },
                bindEvents: function() {
                    var t = this
                      , e = t._listeners = {}
                      , n = function() {
                        t.eventHandler.apply(t, arguments)
                    };
                    at.each(t.options.events, (function(r) {
                        yn.addEventListener(t, r, n),
                        e[r] = n
                    }
                    )),
                    t.options.responsive && (n = function() {
                        t.resize()
                    }
                    ,
                    yn.addEventListener(t, "resize", n),
                    e.resize = n)
                },
                unbindEvents: function() {
                    var t = this
                      , e = t._listeners;
                    e && (delete t._listeners,
                    at.each(e, (function(e, n) {
                        yn.removeEventListener(t, n, e)
                    }
                    )))
                },
                updateHoverStyle: function(t, e, n) {
                    var r, i, a, o = n ? "set" : "remove";
                    for (i = 0,
                    a = t.length; i < a; ++i)
                        (r = t[i]) && this.getDatasetMeta(r._datasetIndex).controller[o + "HoverStyle"](r);
                    "dataset" === e && this.getDatasetMeta(t[0]._datasetIndex).controller["_" + o + "DatasetHoverStyle"]()
                },
                eventHandler: function(t) {
                    var e = this
                      , n = e.tooltip;
                    if (!1 !== bn.notify(e, "beforeEvent", [t])) {
                        e._bufferedRender = !0,
                        e._bufferedRequest = null;
                        var r = e.handleEvent(t);
                        n && (r = n._start ? n.handleEvent(t) : r | n.handleEvent(t)),
                        bn.notify(e, "afterEvent", [t]);
                        var i = e._bufferedRequest;
                        return i ? e.render(i) : r && !e.animating && (e.stop(),
                        e.render({
                            duration: e.options.hover.animationDuration,
                            lazy: !0
                        })),
                        e._bufferedRender = !1,
                        e._bufferedRequest = null,
                        e
                    }
                },
                handleEvent: function(t) {
                    var e = this
                      , n = e.options || {}
                      , r = n.hover
                      , i = !1;
                    return e.lastActive = e.lastActive || [],
                    "mouseout" === t.type ? e.active = [] : e.active = e.getElementsAtEventForMode(t, r.mode, r),
                    at.callback(n.onHover || n.hover.onHover, [t.native, e.active], e),
                    "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(e, t.native, e.active),
                    e.lastActive.length && e.updateHoverStyle(e.lastActive, r.mode, !1),
                    e.active.length && r.mode && e.updateHoverStyle(e.active, r.mode, !0),
                    i = !at.arrayEquals(e.active, e.lastActive),
                    e.lastActive = e.active,
                    i
                }
            }),
            jn.instances = {};
            var Un = jn;
            jn.Controller = jn,
            jn.types = {},
            at.configMerge = Yn,
            at.scaleMerge = En;
            var Gn = function() {
                function t(t, e, n) {
                    var r;
                    return "string" === typeof t ? (r = parseInt(t, 10),
                    -1 !== t.indexOf("%") && (r = r / 100 * e.parentNode[n])) : r = t,
                    r
                }
                function e(t) {
                    return void 0 !== t && null !== t && "none" !== t
                }
                function n(n, r, i) {
                    var a = document.defaultView
                      , o = at._getParentNode(n)
                      , s = a.getComputedStyle(n)[r]
                      , l = a.getComputedStyle(o)[r]
                      , u = e(s)
                      , d = e(l)
                      , c = Number.POSITIVE_INFINITY;
                    return u || d ? Math.min(u ? t(s, n, i) : c, d ? t(l, o, i) : c) : "none"
                }
                at.where = function(t, e) {
                    if (at.isArray(t) && Array.prototype.filter)
                        return t.filter(e);
                    var n = [];
                    return at.each(t, (function(t) {
                        e(t) && n.push(t)
                    }
                    )),
                    n
                }
                ,
                at.findIndex = Array.prototype.findIndex ? function(t, e, n) {
                    return t.findIndex(e, n)
                }
                : function(t, e, n) {
                    n = void 0 === n ? t : n;
                    for (var r = 0, i = t.length; r < i; ++r)
                        if (e.call(n, t[r], r, t))
                            return r;
                    return -1
                }
                ,
                at.findNextWhere = function(t, e, n) {
                    at.isNullOrUndef(n) && (n = -1);
                    for (var r = n + 1; r < t.length; r++) {
                        var i = t[r];
                        if (e(i))
                            return i
                    }
                }
                ,
                at.findPreviousWhere = function(t, e, n) {
                    at.isNullOrUndef(n) && (n = t.length);
                    for (var r = n - 1; r >= 0; r--) {
                        var i = t[r];
                        if (e(i))
                            return i
                    }
                }
                ,
                at.isNumber = function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }
                ,
                at.almostEquals = function(t, e, n) {
                    return Math.abs(t - e) < n
                }
                ,
                at.almostWhole = function(t, e) {
                    var n = Math.round(t);
                    return n - e <= t && n + e >= t
                }
                ,
                at.max = function(t) {
                    return t.reduce((function(t, e) {
                        return isNaN(e) ? t : Math.max(t, e)
                    }
                    ), Number.NEGATIVE_INFINITY)
                }
                ,
                at.min = function(t) {
                    return t.reduce((function(t, e) {
                        return isNaN(e) ? t : Math.min(t, e)
                    }
                    ), Number.POSITIVE_INFINITY)
                }
                ,
                at.sign = Math.sign ? function(t) {
                    return Math.sign(t)
                }
                : function(t) {
                    return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
                }
                ,
                at.toRadians = function(t) {
                    return t * (Math.PI / 180)
                }
                ,
                at.toDegrees = function(t) {
                    return t * (180 / Math.PI)
                }
                ,
                at._decimalPlaces = function(t) {
                    if (at.isFinite(t)) {
                        for (var e = 1, n = 0; Math.round(t * e) / e !== t; )
                            e *= 10,
                            n++;
                        return n
                    }
                }
                ,
                at.getAngleFromPoint = function(t, e) {
                    var n = e.x - t.x
                      , r = e.y - t.y
                      , i = Math.sqrt(n * n + r * r)
                      , a = Math.atan2(r, n);
                    return a < -.5 * Math.PI && (a += 2 * Math.PI),
                    {
                        angle: a,
                        distance: i
                    }
                }
                ,
                at.distanceBetweenPoints = function(t, e) {
                    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                }
                ,
                at.aliasPixel = function(t) {
                    return t % 2 === 0 ? 0 : .5
                }
                ,
                at._alignPixel = function(t, e, n) {
                    var r = t.currentDevicePixelRatio
                      , i = n / 2;
                    return Math.round((e - i) * r) / r + i
                }
                ,
                at.splineCurve = function(t, e, n, r) {
                    var i = t.skip ? e : t
                      , a = e
                      , o = n.skip ? e : n
                      , s = Math.sqrt(Math.pow(a.x - i.x, 2) + Math.pow(a.y - i.y, 2))
                      , l = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2))
                      , u = s / (s + l)
                      , d = l / (s + l)
                      , c = r * (u = isNaN(u) ? 0 : u)
                      , h = r * (d = isNaN(d) ? 0 : d);
                    return {
                        previous: {
                            x: a.x - c * (o.x - i.x),
                            y: a.y - c * (o.y - i.y)
                        },
                        next: {
                            x: a.x + h * (o.x - i.x),
                            y: a.y + h * (o.y - i.y)
                        }
                    }
                }
                ,
                at.EPSILON = Number.EPSILON || 1e-14,
                at.splineCurveMonotone = function(t) {
                    var e, n, r, i, a, o, s, l, u, d = (t || []).map((function(t) {
                        return {
                            model: t._model,
                            deltaK: 0,
                            mK: 0
                        }
                    }
                    )), c = d.length;
                    for (e = 0; e < c; ++e)
                        if (!(r = d[e]).model.skip) {
                            if (n = e > 0 ? d[e - 1] : null,
                            (i = e < c - 1 ? d[e + 1] : null) && !i.model.skip) {
                                var h = i.model.x - r.model.x;
                                r.deltaK = 0 !== h ? (i.model.y - r.model.y) / h : 0
                            }
                            !n || n.model.skip ? r.mK = r.deltaK : !i || i.model.skip ? r.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(r.deltaK) ? r.mK = 0 : r.mK = (n.deltaK + r.deltaK) / 2
                        }
                    for (e = 0; e < c - 1; ++e)
                        r = d[e],
                        i = d[e + 1],
                        r.model.skip || i.model.skip || (at.almostEquals(r.deltaK, 0, this.EPSILON) ? r.mK = i.mK = 0 : (a = r.mK / r.deltaK,
                        o = i.mK / r.deltaK,
                        (l = Math.pow(a, 2) + Math.pow(o, 2)) <= 9 || (s = 3 / Math.sqrt(l),
                        r.mK = a * s * r.deltaK,
                        i.mK = o * s * r.deltaK)));
                    for (e = 0; e < c; ++e)
                        (r = d[e]).model.skip || (n = e > 0 ? d[e - 1] : null,
                        i = e < c - 1 ? d[e + 1] : null,
                        n && !n.model.skip && (u = (r.model.x - n.model.x) / 3,
                        r.model.controlPointPreviousX = r.model.x - u,
                        r.model.controlPointPreviousY = r.model.y - u * r.mK),
                        i && !i.model.skip && (u = (i.model.x - r.model.x) / 3,
                        r.model.controlPointNextX = r.model.x + u,
                        r.model.controlPointNextY = r.model.y + u * r.mK))
                }
                ,
                at.nextItem = function(t, e, n) {
                    return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                }
                ,
                at.previousItem = function(t, e, n) {
                    return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                }
                ,
                at.niceNum = function(t, e) {
                    var n = Math.floor(at.log10(t))
                      , r = t / Math.pow(10, n);
                    return (e ? r < 1.5 ? 1 : r < 3 ? 2 : r < 7 ? 5 : 10 : r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * Math.pow(10, n)
                }
                ,
                at.requestAnimFrame = "undefined" === typeof window ? function(t) {
                    t()
                }
                : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    return window.setTimeout(t, 1e3 / 60)
                }
                ,
                at.getRelativePosition = function(t, e) {
                    var n, r, i = t.originalEvent || t, a = t.target || t.srcElement, o = a.getBoundingClientRect(), s = i.touches;
                    s && s.length > 0 ? (n = s[0].clientX,
                    r = s[0].clientY) : (n = i.clientX,
                    r = i.clientY);
                    var l = parseFloat(at.getStyle(a, "padding-left"))
                      , u = parseFloat(at.getStyle(a, "padding-top"))
                      , d = parseFloat(at.getStyle(a, "padding-right"))
                      , c = parseFloat(at.getStyle(a, "padding-bottom"))
                      , h = o.right - o.left - l - d
                      , f = o.bottom - o.top - u - c;
                    return {
                        x: n = Math.round((n - o.left - l) / h * a.width / e.currentDevicePixelRatio),
                        y: r = Math.round((r - o.top - u) / f * a.height / e.currentDevicePixelRatio)
                    }
                }
                ,
                at.getConstraintWidth = function(t) {
                    return n(t, "max-width", "clientWidth")
                }
                ,
                at.getConstraintHeight = function(t) {
                    return n(t, "max-height", "clientHeight")
                }
                ,
                at._calculatePadding = function(t, e, n) {
                    return (e = at.getStyle(t, e)).indexOf("%") > -1 ? n * parseInt(e, 10) / 100 : parseInt(e, 10)
                }
                ,
                at._getParentNode = function(t) {
                    var e = t.parentNode;
                    return e && "[object ShadowRoot]" === e.toString() && (e = e.host),
                    e
                }
                ,
                at.getMaximumWidth = function(t) {
                    var e = at._getParentNode(t);
                    if (!e)
                        return t.clientWidth;
                    var n = e.clientWidth
                      , r = n - at._calculatePadding(e, "padding-left", n) - at._calculatePadding(e, "padding-right", n)
                      , i = at.getConstraintWidth(t);
                    return isNaN(i) ? r : Math.min(r, i)
                }
                ,
                at.getMaximumHeight = function(t) {
                    var e = at._getParentNode(t);
                    if (!e)
                        return t.clientHeight;
                    var n = e.clientHeight
                      , r = n - at._calculatePadding(e, "padding-top", n) - at._calculatePadding(e, "padding-bottom", n)
                      , i = at.getConstraintHeight(t);
                    return isNaN(i) ? r : Math.min(r, i)
                }
                ,
                at.getStyle = function(t, e) {
                    return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                }
                ,
                at.retinaScale = function(t, e) {
                    var n = t.currentDevicePixelRatio = e || "undefined" !== typeof window && window.devicePixelRatio || 1;
                    if (1 !== n) {
                        var r = t.canvas
                          , i = t.height
                          , a = t.width;
                        r.height = i * n,
                        r.width = a * n,
                        t.ctx.scale(n, n),
                        r.style.height || r.style.width || (r.style.height = i + "px",
                        r.style.width = a + "px")
                    }
                }
                ,
                at.fontString = function(t, e, n) {
                    return e + " " + t + "px " + n
                }
                ,
                at.longestText = function(t, e, n, r) {
                    var i = (r = r || {}).data = r.data || {}
                      , a = r.garbageCollect = r.garbageCollect || [];
                    r.font !== e && (i = r.data = {},
                    a = r.garbageCollect = [],
                    r.font = e),
                    t.font = e;
                    var o, s, l, u, d, c = 0, h = n.length;
                    for (o = 0; o < h; o++)
                        if (void 0 !== (u = n[o]) && null !== u && !0 !== at.isArray(u))
                            c = at.measureText(t, i, a, c, u);
                        else if (at.isArray(u))
                            for (s = 0,
                            l = u.length; s < l; s++)
                                void 0 === (d = u[s]) || null === d || at.isArray(d) || (c = at.measureText(t, i, a, c, d));
                    var f = a.length / 2;
                    if (f > n.length) {
                        for (o = 0; o < f; o++)
                            delete i[a[o]];
                        a.splice(0, f)
                    }
                    return c
                }
                ,
                at.measureText = function(t, e, n, r, i) {
                    var a = e[i];
                    return a || (a = e[i] = t.measureText(i).width,
                    n.push(i)),
                    a > r && (r = a),
                    r
                }
                ,
                at.numberOfLabelLines = function(t) {
                    var e = 1;
                    return at.each(t, (function(t) {
                        at.isArray(t) && t.length > e && (e = t.length)
                    }
                    )),
                    e
                }
                ,
                at.color = L ? function(t) {
                    return t instanceof CanvasGradient && (t = X.global.defaultColor),
                    L(t)
                }
                : function(t) {
                    return console.error("Color.js not found!"),
                    t
                }
                ,
                at.getHoverColor = function(t) {
                    return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : at.color(t).saturate(.5).darken(.1).rgbString()
                }
            };
            function qn() {
                throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")
            }
            function Zn(t) {
                this.options = t || {}
            }
            at.extend(Zn.prototype, {
                formats: qn,
                parse: qn,
                format: qn,
                add: qn,
                diff: qn,
                startOf: qn,
                endOf: qn,
                _create: function(t) {
                    return t
                }
            }),
            Zn.override = function(t) {
                at.extend(Zn.prototype, t)
            }
            ;
            var Kn = {
                _date: Zn
            }
              , $n = {
                formatters: {
                    values: function(t) {
                        return at.isArray(t) ? t : "" + t
                    },
                    linear: function(t, e, n) {
                        var r = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                        Math.abs(r) > 1 && t !== Math.floor(t) && (r = t - Math.floor(t));
                        var i = at.log10(Math.abs(r))
                          , a = "";
                        if (0 !== t)
                            if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
                                var o = at.log10(Math.abs(t))
                                  , s = Math.floor(o) - Math.floor(i);
                                s = Math.max(Math.min(s, 20), 0),
                                a = t.toExponential(s)
                            } else {
                                var l = -1 * Math.floor(i);
                                l = Math.max(Math.min(l, 20), 0),
                                a = t.toFixed(l)
                            }
                        else
                            a = "0";
                        return a
                    },
                    logarithmic: function(t, e, n) {
                        var r = t / Math.pow(10, Math.floor(at.log10(t)));
                        return 0 === t ? "0" : 1 === r || 2 === r || 5 === r || 0 === e || e === n.length - 1 ? t.toExponential() : ""
                    }
                }
            }
              , Xn = at.isArray
              , Jn = at.isNullOrUndef
              , Qn = at.valueOrDefault
              , tr = at.valueAtIndexOrDefault;
            function er(t, e) {
                for (var n = [], r = t.length / e, i = 0, a = t.length; i < a; i += r)
                    n.push(t[Math.floor(i)]);
                return n
            }
            function nr(t, e, n) {
                var r, i = t.getTicks().length, a = Math.min(e, i - 1), o = t.getPixelForTick(a), s = t._startPixel, l = t._endPixel, u = 1e-6;
                if (!(n && (r = 1 === i ? Math.max(o - s, l - o) : 0 === e ? (t.getPixelForTick(1) - o) / 2 : (o - t.getPixelForTick(a - 1)) / 2,
                (o += a < e ? r : -r) < s - u || o > l + u)))
                    return o
            }
            function rr(t, e) {
                at.each(t, (function(t) {
                    var n, r = t.gc, i = r.length / 2;
                    if (i > e) {
                        for (n = 0; n < i; ++n)
                            delete t.data[r[n]];
                        r.splice(0, i)
                    }
                }
                ))
            }
            function ir(t, e, n, r) {
                var i, a, o, s, l, u, d, c, h, f, g, p, m, v = n.length, y = [], b = [], _ = [], x = 0, w = 0;
                for (i = 0; i < v; ++i) {
                    if (s = n[i].label,
                    l = n[i].major ? e.major : e.minor,
                    t.font = u = l.string,
                    d = r[u] = r[u] || {
                        data: {},
                        gc: []
                    },
                    c = l.lineHeight,
                    h = f = 0,
                    Jn(s) || Xn(s)) {
                        if (Xn(s))
                            for (a = 0,
                            o = s.length; a < o; ++a)
                                g = s[a],
                                Jn(g) || Xn(g) || (h = at.measureText(t, d.data, d.gc, h, g),
                                f += c)
                    } else
                        h = at.measureText(t, d.data, d.gc, h, s),
                        f = c;
                    y.push(h),
                    b.push(f),
                    _.push(c / 2),
                    x = Math.max(h, x),
                    w = Math.max(f, w)
                }
                function k(t) {
                    return {
                        width: y[t] || 0,
                        height: b[t] || 0,
                        offset: _[t] || 0
                    }
                }
                return rr(r, v),
                p = y.indexOf(x),
                m = b.indexOf(w),
                {
                    first: k(0),
                    last: k(v - 1),
                    widest: k(p),
                    highest: k(m)
                }
            }
            function ar(t) {
                return t.drawTicks ? t.tickMarkLength : 0
            }
            function or(t) {
                var e, n;
                return t.display ? (e = at.options._parseFont(t),
                n = at.options.toPadding(t.padding),
                e.lineHeight + n.height) : 0
            }
            function sr(t, e) {
                return at.extend(at.options._parseFont({
                    fontFamily: Qn(e.fontFamily, t.fontFamily),
                    fontSize: Qn(e.fontSize, t.fontSize),
                    fontStyle: Qn(e.fontStyle, t.fontStyle),
                    lineHeight: Qn(e.lineHeight, t.lineHeight)
                }), {
                    color: at.options.resolve([e.fontColor, t.fontColor, X.global.defaultFontColor])
                })
            }
            function lr(t) {
                var e = sr(t, t.minor);
                return {
                    minor: e,
                    major: t.major.enabled ? sr(t, t.major) : e
                }
            }
            function ur(t) {
                var e, n, r, i = [];
                for (n = 0,
                r = t.length; n < r; ++n)
                    "undefined" !== typeof (e = t[n])._index && i.push(e);
                return i
            }
            function dr(t) {
                var e, n, r = t.length;
                if (r < 2)
                    return !1;
                for (n = t[0],
                e = 1; e < r; ++e)
                    if (t[e] - t[e - 1] !== n)
                        return !1;
                return n
            }
            function cr(t, e, n, r) {
                var i, a, o, s, l = dr(t), u = (e.length - 1) / r;
                if (!l)
                    return Math.max(u, 1);
                for (o = 0,
                s = (i = at.math._factorize(l)).length - 1; o < s; o++)
                    if ((a = i[o]) > u)
                        return a;
                return Math.max(u, 1)
            }
            function hr(t) {
                var e, n, r = [];
                for (e = 0,
                n = t.length; e < n; e++)
                    t[e].major && r.push(e);
                return r
            }
            function fr(t, e, n) {
                var r, i, a = 0, o = e[0];
                for (n = Math.ceil(n),
                r = 0; r < t.length; r++)
                    i = t[r],
                    r === o ? (i._index = r,
                    o = e[++a * n]) : delete i.label
            }
            function gr(t, e, n, r) {
                var i, a, o, s, l = Qn(n, 0), u = Math.min(Qn(r, t.length), t.length), d = 0;
                for (e = Math.ceil(e),
                r && (e = (i = r - n) / Math.floor(i / e)),
                s = l; s < 0; )
                    d++,
                    s = Math.round(l + d * e);
                for (a = Math.max(l, 0); a < u; a++)
                    o = t[a],
                    a === s ? (o._index = a,
                    d++,
                    s = Math.round(l + d * e)) : delete o.label
            }
            X._set("scale", {
                display: !0,
                position: "left",
                offset: !1,
                gridLines: {
                    display: !0,
                    color: "rgba(0,0,0,0.1)",
                    lineWidth: 1,
                    drawBorder: !0,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickMarkLength: 10,
                    zeroLineWidth: 1,
                    zeroLineColor: "rgba(0,0,0,0.25)",
                    zeroLineBorderDash: [],
                    zeroLineBorderDashOffset: 0,
                    offsetGridLines: !1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                scaleLabel: {
                    display: !1,
                    labelString: "",
                    padding: {
                        top: 4,
                        bottom: 4
                    }
                },
                ticks: {
                    beginAtZero: !1,
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: !1,
                    padding: 0,
                    reverse: !1,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 0,
                    labelOffset: 0,
                    callback: $n.formatters.values,
                    minor: {},
                    major: {}
                }
            });
            var pr = ft.extend({
                zeroLineIndex: 0,
                getPadding: function() {
                    var t = this;
                    return {
                        left: t.paddingLeft || 0,
                        top: t.paddingTop || 0,
                        right: t.paddingRight || 0,
                        bottom: t.paddingBottom || 0
                    }
                },
                getTicks: function() {
                    return this._ticks
                },
                _getLabels: function() {
                    var t = this.chart.data;
                    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
                },
                mergeTicksOptions: function() {},
                beforeUpdate: function() {
                    at.callback(this.options.beforeUpdate, [this])
                },
                update: function(t, e, n) {
                    var r, i, a, o, s, l = this, u = l.options.ticks, d = u.sampleSize;
                    if (l.beforeUpdate(),
                    l.maxWidth = t,
                    l.maxHeight = e,
                    l.margins = at.extend({
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, n),
                    l._ticks = null,
                    l.ticks = null,
                    l._labelSizes = null,
                    l._maxLabelLines = 0,
                    l.longestLabelWidth = 0,
                    l.longestTextCache = l.longestTextCache || {},
                    l._gridLineItems = null,
                    l._labelItems = null,
                    l.beforeSetDimensions(),
                    l.setDimensions(),
                    l.afterSetDimensions(),
                    l.beforeDataLimits(),
                    l.determineDataLimits(),
                    l.afterDataLimits(),
                    l.beforeBuildTicks(),
                    o = l.buildTicks() || [],
                    (!(o = l.afterBuildTicks(o) || o) || !o.length) && l.ticks)
                        for (o = [],
                        r = 0,
                        i = l.ticks.length; r < i; ++r)
                            o.push({
                                value: l.ticks[r],
                                major: !1
                            });
                    return l._ticks = o,
                    s = d < o.length,
                    a = l._convertTicksToLabels(s ? er(o, d) : o),
                    l._configure(),
                    l.beforeCalculateTickRotation(),
                    l.calculateTickRotation(),
                    l.afterCalculateTickRotation(),
                    l.beforeFit(),
                    l.fit(),
                    l.afterFit(),
                    l._ticksToDraw = u.display && (u.autoSkip || "auto" === u.source) ? l._autoSkip(o) : o,
                    s && (a = l._convertTicksToLabels(l._ticksToDraw)),
                    l.ticks = a,
                    l.afterUpdate(),
                    l.minSize
                },
                _configure: function() {
                    var t, e, n = this, r = n.options.ticks.reverse;
                    n.isHorizontal() ? (t = n.left,
                    e = n.right) : (t = n.top,
                    e = n.bottom,
                    r = !r),
                    n._startPixel = t,
                    n._endPixel = e,
                    n._reversePixels = r,
                    n._length = e - t
                },
                afterUpdate: function() {
                    at.callback(this.options.afterUpdate, [this])
                },
                beforeSetDimensions: function() {
                    at.callback(this.options.beforeSetDimensions, [this])
                },
                setDimensions: function() {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth,
                    t.left = 0,
                    t.right = t.width) : (t.height = t.maxHeight,
                    t.top = 0,
                    t.bottom = t.height),
                    t.paddingLeft = 0,
                    t.paddingTop = 0,
                    t.paddingRight = 0,
                    t.paddingBottom = 0
                },
                afterSetDimensions: function() {
                    at.callback(this.options.afterSetDimensions, [this])
                },
                beforeDataLimits: function() {
                    at.callback(this.options.beforeDataLimits, [this])
                },
                determineDataLimits: at.noop,
                afterDataLimits: function() {
                    at.callback(this.options.afterDataLimits, [this])
                },
                beforeBuildTicks: function() {
                    at.callback(this.options.beforeBuildTicks, [this])
                },
                buildTicks: at.noop,
                afterBuildTicks: function(t) {
                    var e = this;
                    return Xn(t) && t.length ? at.callback(e.options.afterBuildTicks, [e, t]) : (e.ticks = at.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks,
                    t)
                },
                beforeTickToLabelConversion: function() {
                    at.callback(this.options.beforeTickToLabelConversion, [this])
                },
                convertTicksToLabels: function() {
                    var t = this
                      , e = t.options.ticks;
                    t.ticks = t.ticks.map(e.userCallback || e.callback, this)
                },
                afterTickToLabelConversion: function() {
                    at.callback(this.options.afterTickToLabelConversion, [this])
                },
                beforeCalculateTickRotation: function() {
                    at.callback(this.options.beforeCalculateTickRotation, [this])
                },
                calculateTickRotation: function() {
                    var t, e, n, r, i, a, o, s = this, l = s.options, u = l.ticks, d = s.getTicks().length, c = u.minRotation || 0, h = u.maxRotation, f = c;
                    !s._isVisible() || !u.display || c >= h || d <= 1 || !s.isHorizontal() ? s.labelRotation = c : (e = (t = s._getLabelSizes()).widest.width,
                    n = t.highest.height - t.highest.offset,
                    r = Math.min(s.maxWidth, s.chart.width - e),
                    e + 6 > (i = l.offset ? s.maxWidth / d : r / (d - 1)) && (i = r / (d - (l.offset ? .5 : 1)),
                    a = s.maxHeight - ar(l.gridLines) - u.padding - or(l.scaleLabel),
                    o = Math.sqrt(e * e + n * n),
                    f = at.toDegrees(Math.min(Math.asin(Math.min((t.highest.height + 6) / i, 1)), Math.asin(Math.min(a / o, 1)) - Math.asin(n / o))),
                    f = Math.max(c, Math.min(h, f))),
                    s.labelRotation = f)
                },
                afterCalculateTickRotation: function() {
                    at.callback(this.options.afterCalculateTickRotation, [this])
                },
                beforeFit: function() {
                    at.callback(this.options.beforeFit, [this])
                },
                fit: function() {
                    var t = this
                      , e = t.minSize = {
                        width: 0,
                        height: 0
                    }
                      , n = t.chart
                      , r = t.options
                      , i = r.ticks
                      , a = r.scaleLabel
                      , o = r.gridLines
                      , s = t._isVisible()
                      , l = "bottom" === r.position
                      , u = t.isHorizontal();
                    if (u ? e.width = t.maxWidth : s && (e.width = ar(o) + or(a)),
                    u ? s && (e.height = ar(o) + or(a)) : e.height = t.maxHeight,
                    i.display && s) {
                        var d = lr(i)
                          , c = t._getLabelSizes()
                          , h = c.first
                          , f = c.last
                          , g = c.widest
                          , p = c.highest
                          , m = .4 * d.minor.lineHeight
                          , v = i.padding;
                        if (u) {
                            var y = 0 !== t.labelRotation
                              , b = at.toRadians(t.labelRotation)
                              , _ = Math.cos(b)
                              , x = Math.sin(b)
                              , w = x * g.width + _ * (p.height - (y ? p.offset : 0)) + (y ? 0 : m);
                            e.height = Math.min(t.maxHeight, e.height + w + v);
                            var k, M, S = t.getPixelForTick(0) - t.left, D = t.right - t.getPixelForTick(t.getTicks().length - 1);
                            y ? (k = l ? _ * h.width + x * h.offset : x * (h.height - h.offset),
                            M = l ? x * (f.height - f.offset) : _ * f.width + x * f.offset) : (k = h.width / 2,
                            M = f.width / 2),
                            t.paddingLeft = Math.max((k - S) * t.width / (t.width - S), 0) + 3,
                            t.paddingRight = Math.max((M - D) * t.width / (t.width - D), 0) + 3
                        } else {
                            var C = i.mirror ? 0 : g.width + v + m;
                            e.width = Math.min(t.maxWidth, e.width + C),
                            t.paddingTop = h.height / 2,
                            t.paddingBottom = f.height / 2
                        }
                    }
                    t.handleMargins(),
                    u ? (t.width = t._length = n.width - t.margins.left - t.margins.right,
                    t.height = e.height) : (t.width = e.width,
                    t.height = t._length = n.height - t.margins.top - t.margins.bottom)
                },
                handleMargins: function() {
                    var t = this;
                    t.margins && (t.margins.left = Math.max(t.paddingLeft, t.margins.left),
                    t.margins.top = Math.max(t.paddingTop, t.margins.top),
                    t.margins.right = Math.max(t.paddingRight, t.margins.right),
                    t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom))
                },
                afterFit: function() {
                    at.callback(this.options.afterFit, [this])
                },
                isHorizontal: function() {
                    var t = this.options.position;
                    return "top" === t || "bottom" === t
                },
                isFullWidth: function() {
                    return this.options.fullWidth
                },
                getRightValue: function(t) {
                    if (Jn(t))
                        return NaN;
                    if (("number" === typeof t || t instanceof Number) && !isFinite(t))
                        return NaN;
                    if (t)
                        if (this.isHorizontal()) {
                            if (void 0 !== t.x)
                                return this.getRightValue(t.x)
                        } else if (void 0 !== t.y)
                            return this.getRightValue(t.y);
                    return t
                },
                _convertTicksToLabels: function(t) {
                    var e, n, r, i = this;
                    for (i.ticks = t.map((function(t) {
                        return t.value
                    }
                    )),
                    i.beforeTickToLabelConversion(),
                    e = i.convertTicksToLabels(t) || i.ticks,
                    i.afterTickToLabelConversion(),
                    n = 0,
                    r = t.length; n < r; ++n)
                        t[n].label = e[n];
                    return e
                },
                _getLabelSizes: function() {
                    var t = this
                      , e = t._labelSizes;
                    return e || (t._labelSizes = e = ir(t.ctx, lr(t.options.ticks), t.getTicks(), t.longestTextCache),
                    t.longestLabelWidth = e.widest.width),
                    e
                },
                _parseValue: function(t) {
                    var e, n, r, i;
                    return Xn(t) ? (e = +this.getRightValue(t[0]),
                    n = +this.getRightValue(t[1]),
                    r = Math.min(e, n),
                    i = Math.max(e, n)) : (e = void 0,
                    n = t = +this.getRightValue(t),
                    r = t,
                    i = t),
                    {
                        min: r,
                        max: i,
                        start: e,
                        end: n
                    }
                },
                _getScaleLabel: function(t) {
                    var e = this._parseValue(t);
                    return void 0 !== e.start ? "[" + e.start + ", " + e.end + "]" : +this.getRightValue(t)
                },
                getLabelForIndex: at.noop,
                getPixelForValue: at.noop,
                getValueForPixel: at.noop,
                getPixelForTick: function(t) {
                    var e = this
                      , n = e.options.offset
                      , r = e._ticks.length
                      , i = 1 / Math.max(r - (n ? 0 : 1), 1);
                    return t < 0 || t > r - 1 ? null : e.getPixelForDecimal(t * i + (n ? i / 2 : 0))
                },
                getPixelForDecimal: function(t) {
                    var e = this;
                    return e._reversePixels && (t = 1 - t),
                    e._startPixel + t * e._length
                },
                getDecimalForPixel: function(t) {
                    var e = (t - this._startPixel) / this._length;
                    return this._reversePixels ? 1 - e : e
                },
                getBasePixel: function() {
                    return this.getPixelForValue(this.getBaseValue())
                },
                getBaseValue: function() {
                    var t = this
                      , e = t.min
                      , n = t.max;
                    return t.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0
                },
                _autoSkip: function(t) {
                    var e, n, r, i, a = this, o = a.options.ticks, s = a._length, l = o.maxTicksLimit || s / a._tickSize() + 1, u = o.major.enabled ? hr(t) : [], d = u.length, c = u[0], h = u[d - 1];
                    if (d > l)
                        return fr(t, u, d / l),
                        ur(t);
                    if (r = cr(u, t, s, l),
                    d > 0) {
                        for (e = 0,
                        n = d - 1; e < n; e++)
                            gr(t, r, u[e], u[e + 1]);
                        return i = d > 1 ? (h - c) / (d - 1) : null,
                        gr(t, r, at.isNullOrUndef(i) ? 0 : c - i, c),
                        gr(t, r, h, at.isNullOrUndef(i) ? t.length : h + i),
                        ur(t)
                    }
                    return gr(t, r),
                    ur(t)
                },
                _tickSize: function() {
                    var t = this
                      , e = t.options.ticks
                      , n = at.toRadians(t.labelRotation)
                      , r = Math.abs(Math.cos(n))
                      , i = Math.abs(Math.sin(n))
                      , a = t._getLabelSizes()
                      , o = e.autoSkipPadding || 0
                      , s = a ? a.widest.width + o : 0
                      , l = a ? a.highest.height + o : 0;
                    return t.isHorizontal() ? l * r > s * i ? s / r : l / i : l * i < s * r ? l / r : s / i
                },
                _isVisible: function() {
                    var t, e, n, r = this, i = r.chart, a = r.options.display;
                    if ("auto" !== a)
                        return !!a;
                    for (t = 0,
                    e = i.data.datasets.length; t < e; ++t)
                        if (i.isDatasetVisible(t) && ((n = i.getDatasetMeta(t)).xAxisID === r.id || n.yAxisID === r.id))
                            return !0;
                    return !1
                },
                _computeGridLineItems: function(t) {
                    var e, n, r, i, a, o, s, l, u, d, c, h, f, g, p, m, v, y = this, b = y.chart, _ = y.options, x = _.gridLines, w = _.position, k = x.offsetGridLines, M = y.isHorizontal(), S = y._ticksToDraw, D = S.length + (k ? 1 : 0), C = ar(x), P = [], O = x.drawBorder ? tr(x.lineWidth, 0, 0) : 0, T = O / 2, A = at._alignPixel, I = function(t) {
                        return A(b, t, O)
                    };
                    for ("top" === w ? (e = I(y.bottom),
                    s = y.bottom - C,
                    u = e - T,
                    c = I(t.top) + T,
                    f = t.bottom) : "bottom" === w ? (e = I(y.top),
                    c = t.top,
                    f = I(t.bottom) - T,
                    s = e + T,
                    u = y.top + C) : "left" === w ? (e = I(y.right),
                    o = y.right - C,
                    l = e - T,
                    d = I(t.left) + T,
                    h = t.right) : (e = I(y.left),
                    d = t.left,
                    h = I(t.right) - T,
                    o = e + T,
                    l = y.left + C),
                    n = 0; n < D; ++n)
                        r = S[n] || {},
                        Jn(r.label) && n < S.length || (n === y.zeroLineIndex && _.offset === k ? (g = x.zeroLineWidth,
                        p = x.zeroLineColor,
                        m = x.zeroLineBorderDash || [],
                        v = x.zeroLineBorderDashOffset || 0) : (g = tr(x.lineWidth, n, 1),
                        p = tr(x.color, n, "rgba(0,0,0,0.1)"),
                        m = x.borderDash || [],
                        v = x.borderDashOffset || 0),
                        void 0 !== (i = nr(y, r._index || n, k)) && (a = A(b, i, g),
                        M ? o = l = d = h = a : s = u = c = f = a,
                        P.push({
                            tx1: o,
                            ty1: s,
                            tx2: l,
                            ty2: u,
                            x1: d,
                            y1: c,
                            x2: h,
                            y2: f,
                            width: g,
                            color: p,
                            borderDash: m,
                            borderDashOffset: v
                        })));
                    return P.ticksLength = D,
                    P.borderValue = e,
                    P
                },
                _computeLabelItems: function() {
                    var t, e, n, r, i, a, o, s, l, u, d, c, h = this, f = h.options, g = f.ticks, p = f.position, m = g.mirror, v = h.isHorizontal(), y = h._ticksToDraw, b = lr(g), _ = g.padding, x = ar(f.gridLines), w = -at.toRadians(h.labelRotation), k = [];
                    for ("top" === p ? (a = h.bottom - x - _,
                    o = w ? "left" : "center") : "bottom" === p ? (a = h.top + x + _,
                    o = w ? "right" : "center") : "left" === p ? (i = h.right - (m ? 0 : x) - _,
                    o = m ? "left" : "right") : (i = h.left + (m ? 0 : x) + _,
                    o = m ? "right" : "left"),
                    t = 0,
                    e = y.length; t < e; ++t)
                        r = (n = y[t]).label,
                        Jn(r) || (s = h.getPixelForTick(n._index || t) + g.labelOffset,
                        u = (l = n.major ? b.major : b.minor).lineHeight,
                        d = Xn(r) ? r.length : 1,
                        v ? (i = s,
                        c = "top" === p ? ((w ? 1 : .5) - d) * u : (w ? 0 : .5) * u) : (a = s,
                        c = (1 - d) * u / 2),
                        k.push({
                            x: i,
                            y: a,
                            rotation: w,
                            label: r,
                            font: l,
                            textOffset: c,
                            textAlign: o
                        }));
                    return k
                },
                _drawGrid: function(t) {
                    var e = this
                      , n = e.options.gridLines;
                    if (n.display) {
                        var r, i, a, o, s, l = e.ctx, u = e.chart, d = at._alignPixel, c = n.drawBorder ? tr(n.lineWidth, 0, 0) : 0, h = e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t));
                        for (a = 0,
                        o = h.length; a < o; ++a)
                            r = (s = h[a]).width,
                            i = s.color,
                            r && i && (l.save(),
                            l.lineWidth = r,
                            l.strokeStyle = i,
                            l.setLineDash && (l.setLineDash(s.borderDash),
                            l.lineDashOffset = s.borderDashOffset),
                            l.beginPath(),
                            n.drawTicks && (l.moveTo(s.tx1, s.ty1),
                            l.lineTo(s.tx2, s.ty2)),
                            n.drawOnChartArea && (l.moveTo(s.x1, s.y1),
                            l.lineTo(s.x2, s.y2)),
                            l.stroke(),
                            l.restore());
                        if (c) {
                            var f, g, p, m, v = c, y = tr(n.lineWidth, h.ticksLength - 1, 1), b = h.borderValue;
                            e.isHorizontal() ? (f = d(u, e.left, v) - v / 2,
                            g = d(u, e.right, y) + y / 2,
                            p = m = b) : (p = d(u, e.top, v) - v / 2,
                            m = d(u, e.bottom, y) + y / 2,
                            f = g = b),
                            l.lineWidth = c,
                            l.strokeStyle = tr(n.color, 0),
                            l.beginPath(),
                            l.moveTo(f, p),
                            l.lineTo(g, m),
                            l.stroke()
                        }
                    }
                },
                _drawLabels: function() {
                    var t = this;
                    if (t.options.ticks.display) {
                        var e, n, r, i, a, o, s, l, u = t.ctx, d = t._labelItems || (t._labelItems = t._computeLabelItems());
                        for (e = 0,
                        r = d.length; e < r; ++e) {
                            if (o = (a = d[e]).font,
                            u.save(),
                            u.translate(a.x, a.y),
                            u.rotate(a.rotation),
                            u.font = o.string,
                            u.fillStyle = o.color,
                            u.textBaseline = "middle",
                            u.textAlign = a.textAlign,
                            s = a.label,
                            l = a.textOffset,
                            Xn(s))
                                for (n = 0,
                                i = s.length; n < i; ++n)
                                    u.fillText("" + s[n], 0, l),
                                    l += o.lineHeight;
                            else
                                u.fillText(s, 0, l);
                            u.restore()
                        }
                    }
                },
                _drawTitle: function() {
                    var t = this
                      , e = t.ctx
                      , n = t.options
                      , r = n.scaleLabel;
                    if (r.display) {
                        var i, a, o = Qn(r.fontColor, X.global.defaultFontColor), s = at.options._parseFont(r), l = at.options.toPadding(r.padding), u = s.lineHeight / 2, d = n.position, c = 0;
                        if (t.isHorizontal())
                            i = t.left + t.width / 2,
                            a = "bottom" === d ? t.bottom - u - l.bottom : t.top + u + l.top;
                        else {
                            var h = "left" === d;
                            i = h ? t.left + u + l.top : t.right - u - l.top,
                            a = t.top + t.height / 2,
                            c = h ? -.5 * Math.PI : .5 * Math.PI
                        }
                        e.save(),
                        e.translate(i, a),
                        e.rotate(c),
                        e.textAlign = "center",
                        e.textBaseline = "middle",
                        e.fillStyle = o,
                        e.font = s.string,
                        e.fillText(r.labelString, 0, 0),
                        e.restore()
                    }
                },
                draw: function(t) {
                    var e = this;
                    e._isVisible() && (e._drawGrid(t),
                    e._drawTitle(),
                    e._drawLabels())
                },
                _layers: function() {
                    var t = this
                      , e = t.options
                      , n = e.ticks && e.ticks.z || 0
                      , r = e.gridLines && e.gridLines.z || 0;
                    return t._isVisible() && n !== r && t.draw === t._draw ? [{
                        z: r,
                        draw: function() {
                            t._drawGrid.apply(t, arguments),
                            t._drawTitle.apply(t, arguments)
                        }
                    }, {
                        z: n,
                        draw: function() {
                            t._drawLabels.apply(t, arguments)
                        }
                    }] : [{
                        z: n,
                        draw: function() {
                            t.draw.apply(t, arguments)
                        }
                    }]
                },
                _getMatchingVisibleMetas: function(t) {
                    var e = this
                      , n = e.isHorizontal();
                    return e.chart._getSortedVisibleDatasetMetas().filter((function(r) {
                        return (!t || r.type === t) && (n ? r.xAxisID === e.id : r.yAxisID === e.id)
                    }
                    ))
                }
            });
            pr.prototype._draw = pr.prototype.draw;
            var mr = pr
              , vr = at.isNullOrUndef
              , yr = {
                position: "bottom"
            }
              , br = mr.extend({
                determineDataLimits: function() {
                    var t, e = this, n = e._getLabels(), r = e.options.ticks, i = r.min, a = r.max, o = 0, s = n.length - 1;
                    void 0 !== i && (t = n.indexOf(i)) >= 0 && (o = t),
                    void 0 !== a && (t = n.indexOf(a)) >= 0 && (s = t),
                    e.minIndex = o,
                    e.maxIndex = s,
                    e.min = n[o],
                    e.max = n[s]
                },
                buildTicks: function() {
                    var t = this
                      , e = t._getLabels()
                      , n = t.minIndex
                      , r = t.maxIndex;
                    t.ticks = 0 === n && r === e.length - 1 ? e : e.slice(n, r + 1)
                },
                getLabelForIndex: function(t, e) {
                    var n = this
                      , r = n.chart;
                    return r.getDatasetMeta(e).controller._getValueScaleId() === n.id ? n.getRightValue(r.data.datasets[e].data[t]) : n._getLabels()[t]
                },
                _configure: function() {
                    var t = this
                      , e = t.options.offset
                      , n = t.ticks;
                    mr.prototype._configure.call(t),
                    t.isHorizontal() || (t._reversePixels = !t._reversePixels),
                    n && (t._startValue = t.minIndex - (e ? .5 : 0),
                    t._valueRange = Math.max(n.length - (e ? 0 : 1), 1))
                },
                getPixelForValue: function(t, e, n) {
                    var r, i, a, o = this;
                    return vr(e) || vr(n) || (t = o.chart.data.datasets[n].data[e]),
                    vr(t) || (r = o.isHorizontal() ? t.x : t.y),
                    (void 0 !== r || void 0 !== t && isNaN(e)) && (i = o._getLabels(),
                    t = at.valueOrDefault(r, t),
                    e = -1 !== (a = i.indexOf(t)) ? a : e,
                    isNaN(e) && (e = t)),
                    o.getPixelForDecimal((e - o._startValue) / o._valueRange)
                },
                getPixelForTick: function(t) {
                    var e = this.ticks;
                    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t], t + this.minIndex)
                },
                getValueForPixel: function(t) {
                    var e = this
                      , n = Math.round(e._startValue + e.getDecimalForPixel(t) * e._valueRange);
                    return Math.min(Math.max(n, 0), e.ticks.length - 1)
                },
                getBasePixel: function() {
                    return this.bottom
                }
            })
              , _r = yr;
            br._defaults = _r;
            var xr = at.noop
              , wr = at.isNullOrUndef;
            function kr(t, e) {
                var n, r, i, a, o = [], s = 1e-14, l = t.stepSize, u = l || 1, d = t.maxTicks - 1, c = t.min, h = t.max, f = t.precision, g = e.min, p = e.max, m = at.niceNum((p - g) / d / u) * u;
                if (m < s && wr(c) && wr(h))
                    return [g, p];
                (a = Math.ceil(p / m) - Math.floor(g / m)) > d && (m = at.niceNum(a * m / d / u) * u),
                l || wr(f) ? n = Math.pow(10, at._decimalPlaces(m)) : (n = Math.pow(10, f),
                m = Math.ceil(m * n) / n),
                r = Math.floor(g / m) * m,
                i = Math.ceil(p / m) * m,
                l && (!wr(c) && at.almostWhole(c / m, m / 1e3) && (r = c),
                !wr(h) && at.almostWhole(h / m, m / 1e3) && (i = h)),
                a = (i - r) / m,
                a = at.almostEquals(a, Math.round(a), m / 1e3) ? Math.round(a) : Math.ceil(a),
                r = Math.round(r * n) / n,
                i = Math.round(i * n) / n,
                o.push(wr(c) ? r : c);
                for (var v = 1; v < a; ++v)
                    o.push(Math.round((r + v * m) * n) / n);
                return o.push(wr(h) ? i : h),
                o
            }
            var Mr = mr.extend({
                getRightValue: function(t) {
                    return "string" === typeof t ? +t : mr.prototype.getRightValue.call(this, t)
                },
                handleTickRangeOptions: function() {
                    var t = this
                      , e = t.options.ticks;
                    if (e.beginAtZero) {
                        var n = at.sign(t.min)
                          , r = at.sign(t.max);
                        n < 0 && r < 0 ? t.max = 0 : n > 0 && r > 0 && (t.min = 0)
                    }
                    var i = void 0 !== e.min || void 0 !== e.suggestedMin
                      , a = void 0 !== e.max || void 0 !== e.suggestedMax;
                    void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)),
                    void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)),
                    i !== a && t.min >= t.max && (i ? t.max = t.min + 1 : t.min = t.max - 1),
                    t.min === t.max && (t.max++,
                    e.beginAtZero || t.min--)
                },
                getTickLimit: function() {
                    var t, e = this, n = e.options.ticks, r = n.stepSize, i = n.maxTicksLimit;
                    return r ? t = Math.ceil(e.max / r) - Math.floor(e.min / r) + 1 : (t = e._computeTickLimit(),
                    i = i || 11),
                    i && (t = Math.min(i, t)),
                    t
                },
                _computeTickLimit: function() {
                    return Number.POSITIVE_INFINITY
                },
                handleDirectionalChanges: xr,
                buildTicks: function() {
                    var t = this
                      , e = t.options.ticks
                      , n = t.getTickLimit()
                      , r = {
                        maxTicks: n = Math.max(2, n),
                        min: e.min,
                        max: e.max,
                        precision: e.precision,
                        stepSize: at.valueOrDefault(e.fixedStepSize, e.stepSize)
                    }
                      , i = t.ticks = kr(r, t);
                    t.handleDirectionalChanges(),
                    t.max = at.max(i),
                    t.min = at.min(i),
                    e.reverse ? (i.reverse(),
                    t.start = t.max,
                    t.end = t.min) : (t.start = t.min,
                    t.end = t.max)
                },
                convertTicksToLabels: function() {
                    var t = this;
                    t.ticksAsNumbers = t.ticks.slice(),
                    t.zeroLineIndex = t.ticks.indexOf(0),
                    mr.prototype.convertTicksToLabels.call(t)
                },
                _configure: function() {
                    var t, e = this, n = e.getTicks(), r = e.min, i = e.max;
                    mr.prototype._configure.call(e),
                    e.options.offset && n.length && (r -= t = (i - r) / Math.max(n.length - 1, 1) / 2,
                    i += t),
                    e._startValue = r,
                    e._endValue = i,
                    e._valueRange = i - r
                }
            })
              , Sr = {
                position: "left",
                ticks: {
                    callback: $n.formatters.linear
                }
            }
              , Dr = 0
              , Cr = 1;
            function Pr(t, e, n) {
                var r = [n.type, void 0 === e && void 0 === n.stack ? n.index : "", n.stack].join(".");
                return void 0 === t[r] && (t[r] = {
                    pos: [],
                    neg: []
                }),
                t[r]
            }
            function Or(t, e, n, r) {
                var i, a, o = t.options, s = Pr(e, o.stacked, n), l = s.pos, u = s.neg, d = r.length;
                for (i = 0; i < d; ++i)
                    a = t._parseValue(r[i]),
                    isNaN(a.min) || isNaN(a.max) || n.data[i].hidden || (l[i] = l[i] || 0,
                    u[i] = u[i] || 0,
                    o.relativePoints ? l[i] = 100 : a.min < 0 || a.max < 0 ? u[i] += a.min : l[i] += a.max)
            }
            function Tr(t, e, n) {
                var r, i, a = n.length;
                for (r = 0; r < a; ++r)
                    i = t._parseValue(n[r]),
                    isNaN(i.min) || isNaN(i.max) || e.data[r].hidden || (t.min = Math.min(t.min, i.min),
                    t.max = Math.max(t.max, i.max))
            }
            var Ar = Mr.extend({
                determineDataLimits: function() {
                    var t, e, n, r, i = this, a = i.options, o = i.chart.data.datasets, s = i._getMatchingVisibleMetas(), l = a.stacked, u = {}, d = s.length;
                    if (i.min = Number.POSITIVE_INFINITY,
                    i.max = Number.NEGATIVE_INFINITY,
                    void 0 === l)
                        for (t = 0; !l && t < d; ++t)
                            l = void 0 !== (e = s[t]).stack;
                    for (t = 0; t < d; ++t)
                        n = o[(e = s[t]).index].data,
                        l ? Or(i, u, e, n) : Tr(i, e, n);
                    at.each(u, (function(t) {
                        r = t.pos.concat(t.neg),
                        i.min = Math.min(i.min, at.min(r)),
                        i.max = Math.max(i.max, at.max(r))
                    }
                    )),
                    i.min = at.isFinite(i.min) && !isNaN(i.min) ? i.min : Dr,
                    i.max = at.isFinite(i.max) && !isNaN(i.max) ? i.max : Cr,
                    i.handleTickRangeOptions()
                },
                _computeTickLimit: function() {
                    var t, e = this;
                    return e.isHorizontal() ? Math.ceil(e.width / 40) : (t = at.options._parseFont(e.options.ticks),
                    Math.ceil(e.height / t.lineHeight))
                },
                handleDirectionalChanges: function() {
                    this.isHorizontal() || this.ticks.reverse()
                },
                getLabelForIndex: function(t, e) {
                    return this._getScaleLabel(this.chart.data.datasets[e].data[t])
                },
                getPixelForValue: function(t) {
                    var e = this;
                    return e.getPixelForDecimal((+e.getRightValue(t) - e._startValue) / e._valueRange)
                },
                getValueForPixel: function(t) {
                    return this._startValue + this.getDecimalForPixel(t) * this._valueRange
                },
                getPixelForTick: function(t) {
                    var e = this.ticksAsNumbers;
                    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t])
                }
            })
              , Ir = Sr;
            Ar._defaults = Ir;
            var Fr = at.valueOrDefault
              , Rr = at.math.log10;
            function Nr(t, e) {
                var n, r, i = [], a = Fr(t.min, Math.pow(10, Math.floor(Rr(e.min)))), o = Math.floor(Rr(e.max)), s = Math.ceil(e.max / Math.pow(10, o));
                0 === a ? (n = Math.floor(Rr(e.minNotZero)),
                r = Math.floor(e.minNotZero / Math.pow(10, n)),
                i.push(a),
                a = r * Math.pow(10, n)) : (n = Math.floor(Rr(a)),
                r = Math.floor(a / Math.pow(10, n)));
                var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                do {
                    i.push(a),
                    10 === ++r && (r = 1,
                    l = ++n >= 0 ? 1 : l),
                    a = Math.round(r * Math.pow(10, n) * l) / l
                } while (n < o || n === o && r < s);
                var u = Fr(t.max, a);
                return i.push(u),
                i
            }
            var Lr = {
                position: "left",
                ticks: {
                    callback: $n.formatters.logarithmic
                }
            };
            function Er(t, e) {
                return at.isFinite(t) && t >= 0 ? t : e
            }
            var Yr = mr.extend({
                determineDataLimits: function() {
                    var t, e, n, r, i, a, o = this, s = o.options, l = o.chart, u = l.data.datasets, d = o.isHorizontal();
                    function c(t) {
                        return d ? t.xAxisID === o.id : t.yAxisID === o.id
                    }
                    o.min = Number.POSITIVE_INFINITY,
                    o.max = Number.NEGATIVE_INFINITY,
                    o.minNotZero = Number.POSITIVE_INFINITY;
                    var h = s.stacked;
                    if (void 0 === h)
                        for (t = 0; t < u.length; t++)
                            if (e = l.getDatasetMeta(t),
                            l.isDatasetVisible(t) && c(e) && void 0 !== e.stack) {
                                h = !0;
                                break
                            }
                    if (s.stacked || h) {
                        var f = {};
                        for (t = 0; t < u.length; t++) {
                            var g = [(e = l.getDatasetMeta(t)).type, void 0 === s.stacked && void 0 === e.stack ? t : "", e.stack].join(".");
                            if (l.isDatasetVisible(t) && c(e))
                                for (void 0 === f[g] && (f[g] = []),
                                i = 0,
                                a = (r = u[t].data).length; i < a; i++) {
                                    var p = f[g];
                                    n = o._parseValue(r[i]),
                                    isNaN(n.min) || isNaN(n.max) || e.data[i].hidden || n.min < 0 || n.max < 0 || (p[i] = p[i] || 0,
                                    p[i] += n.max)
                                }
                        }
                        at.each(f, (function(t) {
                            if (t.length > 0) {
                                var e = at.min(t)
                                  , n = at.max(t);
                                o.min = Math.min(o.min, e),
                                o.max = Math.max(o.max, n)
                            }
                        }
                        ))
                    } else
                        for (t = 0; t < u.length; t++)
                            if (e = l.getDatasetMeta(t),
                            l.isDatasetVisible(t) && c(e))
                                for (i = 0,
                                a = (r = u[t].data).length; i < a; i++)
                                    n = o._parseValue(r[i]),
                                    isNaN(n.min) || isNaN(n.max) || e.data[i].hidden || n.min < 0 || n.max < 0 || (o.min = Math.min(n.min, o.min),
                                    o.max = Math.max(n.max, o.max),
                                    0 !== n.min && (o.minNotZero = Math.min(n.min, o.minNotZero)));
                    o.min = at.isFinite(o.min) ? o.min : null,
                    o.max = at.isFinite(o.max) ? o.max : null,
                    o.minNotZero = at.isFinite(o.minNotZero) ? o.minNotZero : null,
                    this.handleTickRangeOptions()
                },
                handleTickRangeOptions: function() {
                    var t = this
                      , e = t.options.ticks
                      , n = 1
                      , r = 10;
                    t.min = Er(e.min, t.min),
                    t.max = Er(e.max, t.max),
                    t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(Rr(t.min)) - 1),
                    t.max = Math.pow(10, Math.floor(Rr(t.max)) + 1)) : (t.min = n,
                    t.max = r)),
                    null === t.min && (t.min = Math.pow(10, Math.floor(Rr(t.max)) - 1)),
                    null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(Rr(t.min)) + 1) : r),
                    null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(Rr(t.max))) : t.minNotZero = n)
                },
                buildTicks: function() {
                    var t = this
                      , e = t.options.ticks
                      , n = !t.isHorizontal()
                      , r = {
                        min: Er(e.min),
                        max: Er(e.max)
                    }
                      , i = t.ticks = Nr(r, t);
                    t.max = at.max(i),
                    t.min = at.min(i),
                    e.reverse ? (n = !n,
                    t.start = t.max,
                    t.end = t.min) : (t.start = t.min,
                    t.end = t.max),
                    n && i.reverse()
                },
                convertTicksToLabels: function() {
                    this.tickValues = this.ticks.slice(),
                    mr.prototype.convertTicksToLabels.call(this)
                },
                getLabelForIndex: function(t, e) {
                    return this._getScaleLabel(this.chart.data.datasets[e].data[t])
                },
                getPixelForTick: function(t) {
                    var e = this.tickValues;
                    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t])
                },
                _getFirstTickValue: function(t) {
                    var e = Math.floor(Rr(t));
                    return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
                },
                _configure: function() {
                    var t = this
                      , e = t.min
                      , n = 0;
                    mr.prototype._configure.call(t),
                    0 === e && (e = t._getFirstTickValue(t.minNotZero),
                    n = Fr(t.options.ticks.fontSize, X.global.defaultFontSize) / t._length),
                    t._startValue = Rr(e),
                    t._valueOffset = n,
                    t._valueRange = (Rr(t.max) - Rr(e)) / (1 - n)
                },
                getPixelForValue: function(t) {
                    var e = this
                      , n = 0;
                    return (t = +e.getRightValue(t)) > e.min && t > 0 && (n = (Rr(t) - e._startValue) / e._valueRange + e._valueOffset),
                    e.getPixelForDecimal(n)
                },
                getValueForPixel: function(t) {
                    var e = this
                      , n = e.getDecimalForPixel(t);
                    return 0 === n && 0 === e.min ? 0 : Math.pow(10, e._startValue + (n - e._valueOffset) * e._valueRange)
                }
            })
              , Wr = Lr;
            Yr._defaults = Wr;
            var zr = at.valueOrDefault
              , Vr = at.valueAtIndexOrDefault
              , Br = at.options.resolve
              , Hr = {
                display: !0,
                animate: !0,
                position: "chartArea",
                angleLines: {
                    display: !0,
                    color: "rgba(0,0,0,0.1)",
                    lineWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                gridLines: {
                    circular: !1
                },
                ticks: {
                    showLabelBackdrop: !0,
                    backdropColor: "rgba(255,255,255,0.75)",
                    backdropPaddingY: 2,
                    backdropPaddingX: 2,
                    callback: $n.formatters.linear
                },
                pointLabels: {
                    display: !0,
                    fontSize: 10,
                    callback: function(t) {
                        return t
                    }
                }
            };
            function jr(t) {
                var e = t.ticks;
                return e.display && t.display ? zr(e.fontSize, X.global.defaultFontSize) + 2 * e.backdropPaddingY : 0
            }
            function Ur(t, e, n) {
                return at.isArray(n) ? {
                    w: at.longestText(t, t.font, n),
                    h: n.length * e
                } : {
                    w: t.measureText(n).width,
                    h: e
                }
            }
            function Gr(t, e, n, r, i) {
                return t === r || t === i ? {
                    start: e - n / 2,
                    end: e + n / 2
                } : t < r || t > i ? {
                    start: e - n,
                    end: e
                } : {
                    start: e,
                    end: e + n
                }
            }
            function qr(t) {
                var e, n, r, i = at.options._parseFont(t.options.pointLabels), a = {
                    l: 0,
                    r: t.width,
                    t: 0,
                    b: t.height - t.paddingTop
                }, o = {};
                t.ctx.font = i.string,
                t._pointLabelSizes = [];
                var s = t.chart.data.labels.length;
                for (e = 0; e < s; e++) {
                    r = t.getPointPosition(e, t.drawingArea + 5),
                    n = Ur(t.ctx, i.lineHeight, t.pointLabels[e]),
                    t._pointLabelSizes[e] = n;
                    var l = t.getIndexAngle(e)
                      , u = at.toDegrees(l) % 360
                      , d = Gr(u, r.x, n.w, 0, 180)
                      , c = Gr(u, r.y, n.h, 90, 270);
                    d.start < a.l && (a.l = d.start,
                    o.l = l),
                    d.end > a.r && (a.r = d.end,
                    o.r = l),
                    c.start < a.t && (a.t = c.start,
                    o.t = l),
                    c.end > a.b && (a.b = c.end,
                    o.b = l)
                }
                t.setReductions(t.drawingArea, a, o)
            }
            function Zr(t) {
                return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
            }
            function Kr(t, e, n, r) {
                var i, a, o = n.y + r / 2;
                if (at.isArray(e))
                    for (i = 0,
                    a = e.length; i < a; ++i)
                        t.fillText(e[i], n.x, o),
                        o += r;
                else
                    t.fillText(e, n.x, o)
            }
            function $r(t, e, n) {
                90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h)
            }
            function Xr(t) {
                var e = t.ctx
                  , n = t.options
                  , r = n.pointLabels
                  , i = jr(n)
                  , a = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max)
                  , o = at.options._parseFont(r);
                e.save(),
                e.font = o.string,
                e.textBaseline = "middle";
                for (var s = t.chart.data.labels.length - 1; s >= 0; s--) {
                    var l = 0 === s ? i / 2 : 0
                      , u = t.getPointPosition(s, a + l + 5)
                      , d = Vr(r.fontColor, s, X.global.defaultFontColor);
                    e.fillStyle = d;
                    var c = t.getIndexAngle(s)
                      , h = at.toDegrees(c);
                    e.textAlign = Zr(h),
                    $r(h, t._pointLabelSizes[s], u),
                    Kr(e, t.pointLabels[s], u, o.lineHeight)
                }
                e.restore()
            }
            function Jr(t, e, n, r) {
                var i, a = t.ctx, o = e.circular, s = t.chart.data.labels.length, l = Vr(e.color, r - 1), u = Vr(e.lineWidth, r - 1);
                if ((o || s) && l && u) {
                    if (a.save(),
                    a.strokeStyle = l,
                    a.lineWidth = u,
                    a.setLineDash && (a.setLineDash(e.borderDash || []),
                    a.lineDashOffset = e.borderDashOffset || 0),
                    a.beginPath(),
                    o)
                        a.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI);
                    else {
                        i = t.getPointPosition(0, n),
                        a.moveTo(i.x, i.y);
                        for (var d = 1; d < s; d++)
                            i = t.getPointPosition(d, n),
                            a.lineTo(i.x, i.y)
                    }
                    a.closePath(),
                    a.stroke(),
                    a.restore()
                }
            }
            function Qr(t) {
                return at.isNumber(t) ? t : 0
            }
            var ti = Mr.extend({
                setDimensions: function() {
                    var t = this;
                    t.width = t.maxWidth,
                    t.height = t.maxHeight,
                    t.paddingTop = jr(t.options) / 2,
                    t.xCenter = Math.floor(t.width / 2),
                    t.yCenter = Math.floor((t.height - t.paddingTop) / 2),
                    t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2
                },
                determineDataLimits: function() {
                    var t = this
                      , e = t.chart
                      , n = Number.POSITIVE_INFINITY
                      , r = Number.NEGATIVE_INFINITY;
                    at.each(e.data.datasets, (function(i, a) {
                        if (e.isDatasetVisible(a)) {
                            var o = e.getDatasetMeta(a);
                            at.each(i.data, (function(e, i) {
                                var a = +t.getRightValue(e);
                                isNaN(a) || o.data[i].hidden || (n = Math.min(a, n),
                                r = Math.max(a, r))
                            }
                            ))
                        }
                    }
                    )),
                    t.min = n === Number.POSITIVE_INFINITY ? 0 : n,
                    t.max = r === Number.NEGATIVE_INFINITY ? 0 : r,
                    t.handleTickRangeOptions()
                },
                _computeTickLimit: function() {
                    return Math.ceil(this.drawingArea / jr(this.options))
                },
                convertTicksToLabels: function() {
                    var t = this;
                    Mr.prototype.convertTicksToLabels.call(t),
                    t.pointLabels = t.chart.data.labels.map((function() {
                        var e = at.callback(t.options.pointLabels.callback, arguments, t);
                        return e || 0 === e ? e : ""
                    }
                    ))
                },
                getLabelForIndex: function(t, e) {
                    return +this.getRightValue(this.chart.data.datasets[e].data[t])
                },
                fit: function() {
                    var t = this
                      , e = t.options;
                    e.display && e.pointLabels.display ? qr(t) : t.setCenterPoint(0, 0, 0, 0)
                },
                setReductions: function(t, e, n) {
                    var r = this
                      , i = e.l / Math.sin(n.l)
                      , a = Math.max(e.r - r.width, 0) / Math.sin(n.r)
                      , o = -e.t / Math.cos(n.t)
                      , s = -Math.max(e.b - (r.height - r.paddingTop), 0) / Math.cos(n.b);
                    i = Qr(i),
                    a = Qr(a),
                    o = Qr(o),
                    s = Qr(s),
                    r.drawingArea = Math.min(Math.floor(t - (i + a) / 2), Math.floor(t - (o + s) / 2)),
                    r.setCenterPoint(i, a, o, s)
                },
                setCenterPoint: function(t, e, n, r) {
                    var i = this
                      , a = i.width - e - i.drawingArea
                      , o = t + i.drawingArea
                      , s = n + i.drawingArea
                      , l = i.height - i.paddingTop - r - i.drawingArea;
                    i.xCenter = Math.floor((o + a) / 2 + i.left),
                    i.yCenter = Math.floor((s + l) / 2 + i.top + i.paddingTop)
                },
                getIndexAngle: function(t) {
                    var e = this.chart
                      , n = (t * (360 / e.data.labels.length) + ((e.options || {}).startAngle || 0)) % 360;
                    return (n < 0 ? n + 360 : n) * Math.PI * 2 / 360
                },
                getDistanceFromCenterForValue: function(t) {
                    var e = this;
                    if (at.isNullOrUndef(t))
                        return NaN;
                    var n = e.drawingArea / (e.max - e.min);
                    return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n
                },
                getPointPosition: function(t, e) {
                    var n = this
                      , r = n.getIndexAngle(t) - Math.PI / 2;
                    return {
                        x: Math.cos(r) * e + n.xCenter,
                        y: Math.sin(r) * e + n.yCenter
                    }
                },
                getPointPositionForValue: function(t, e) {
                    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                },
                getBasePosition: function(t) {
                    var e = this
                      , n = e.min
                      , r = e.max;
                    return e.getPointPositionForValue(t || 0, e.beginAtZero ? 0 : n < 0 && r < 0 ? r : n > 0 && r > 0 ? n : 0)
                },
                _drawGrid: function() {
                    var t, e, n, r = this, i = r.ctx, a = r.options, o = a.gridLines, s = a.angleLines, l = zr(s.lineWidth, o.lineWidth), u = zr(s.color, o.color);
                    if (a.pointLabels.display && Xr(r),
                    o.display && at.each(r.ticks, (function(t, n) {
                        0 !== n && (e = r.getDistanceFromCenterForValue(r.ticksAsNumbers[n]),
                        Jr(r, o, e, n))
                    }
                    )),
                    s.display && l && u) {
                        for (i.save(),
                        i.lineWidth = l,
                        i.strokeStyle = u,
                        i.setLineDash && (i.setLineDash(Br([s.borderDash, o.borderDash, []])),
                        i.lineDashOffset = Br([s.borderDashOffset, o.borderDashOffset, 0])),
                        t = r.chart.data.labels.length - 1; t >= 0; t--)
                            e = r.getDistanceFromCenterForValue(a.ticks.reverse ? r.min : r.max),
                            n = r.getPointPosition(t, e),
                            i.beginPath(),
                            i.moveTo(r.xCenter, r.yCenter),
                            i.lineTo(n.x, n.y),
                            i.stroke();
                        i.restore()
                    }
                },
                _drawLabels: function() {
                    var t = this
                      , e = t.ctx
                      , n = t.options.ticks;
                    if (n.display) {
                        var r, i, a = t.getIndexAngle(0), o = at.options._parseFont(n), s = zr(n.fontColor, X.global.defaultFontColor);
                        e.save(),
                        e.font = o.string,
                        e.translate(t.xCenter, t.yCenter),
                        e.rotate(a),
                        e.textAlign = "center",
                        e.textBaseline = "middle",
                        at.each(t.ticks, (function(a, l) {
                            (0 !== l || n.reverse) && (r = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]),
                            n.showLabelBackdrop && (i = e.measureText(a).width,
                            e.fillStyle = n.backdropColor,
                            e.fillRect(-i / 2 - n.backdropPaddingX, -r - o.size / 2 - n.backdropPaddingY, i + 2 * n.backdropPaddingX, o.size + 2 * n.backdropPaddingY)),
                            e.fillStyle = s,
                            e.fillText(a, 0, -r))
                        }
                        )),
                        e.restore()
                    }
                },
                _drawTitle: at.noop
            })
              , ei = Hr;
            ti._defaults = ei;
            var ni = at._deprecated
              , ri = at.options.resolve
              , ii = at.valueOrDefault
              , ai = Number.MIN_SAFE_INTEGER || -9007199254740991
              , oi = Number.MAX_SAFE_INTEGER || 9007199254740991
              , si = {
                millisecond: {
                    common: !0,
                    size: 1,
                    steps: 1e3
                },
                second: {
                    common: !0,
                    size: 1e3,
                    steps: 60
                },
                minute: {
                    common: !0,
                    size: 6e4,
                    steps: 60
                },
                hour: {
                    common: !0,
                    size: 36e5,
                    steps: 24
                },
                day: {
                    common: !0,
                    size: 864e5,
                    steps: 30
                },
                week: {
                    common: !1,
                    size: 6048e5,
                    steps: 4
                },
                month: {
                    common: !0,
                    size: 2628e6,
                    steps: 12
                },
                quarter: {
                    common: !1,
                    size: 7884e6,
                    steps: 4
                },
                year: {
                    common: !0,
                    size: 3154e7
                }
            }
              , li = Object.keys(si);
            function ui(t, e) {
                return t - e
            }
            function di(t) {
                var e, n, r, i = {}, a = [];
                for (e = 0,
                n = t.length; e < n; ++e)
                    i[r = t[e]] || (i[r] = !0,
                    a.push(r));
                return a
            }
            function ci(t) {
                return at.valueOrDefault(t.time.min, t.ticks.min)
            }
            function hi(t) {
                return at.valueOrDefault(t.time.max, t.ticks.max)
            }
            function fi(t, e, n, r) {
                if ("linear" === r || !t.length)
                    return [{
                        time: e,
                        pos: 0
                    }, {
                        time: n,
                        pos: 1
                    }];
                var i, a, o, s, l, u = [], d = [e];
                for (i = 0,
                a = t.length; i < a; ++i)
                    (s = t[i]) > e && s < n && d.push(s);
                for (d.push(n),
                i = 0,
                a = d.length; i < a; ++i)
                    l = d[i + 1],
                    o = d[i - 1],
                    s = d[i],
                    void 0 !== o && void 0 !== l && Math.round((l + o) / 2) === s || u.push({
                        time: s,
                        pos: i / (a - 1)
                    });
                return u
            }
            function gi(t, e, n) {
                for (var r, i, a, o = 0, s = t.length - 1; o >= 0 && o <= s; ) {
                    if (i = t[(r = o + s >> 1) - 1] || null,
                    a = t[r],
                    !i)
                        return {
                            lo: null,
                            hi: a
                        };
                    if (a[e] < n)
                        o = r + 1;
                    else {
                        if (!(i[e] > n))
                            return {
                                lo: i,
                                hi: a
                            };
                        s = r - 1
                    }
                }
                return {
                    lo: a,
                    hi: null
                }
            }
            function pi(t, e, n, r) {
                var i = gi(t, e, n)
                  , a = i.lo ? i.hi ? i.lo : t[t.length - 2] : t[0]
                  , o = i.lo ? i.hi ? i.hi : t[t.length - 1] : t[1]
                  , s = o[e] - a[e]
                  , l = s ? (n - a[e]) / s : 0
                  , u = (o[r] - a[r]) * l;
                return a[r] + u
            }
            function mi(t, e) {
                var n = t._adapter
                  , r = t.options.time
                  , i = r.parser
                  , a = i || r.format
                  , o = e;
                return "function" === typeof i && (o = i(o)),
                at.isFinite(o) || (o = "string" === typeof a ? n.parse(o, a) : n.parse(o)),
                null !== o ? +o : (i || "function" !== typeof a || (o = a(e),
                at.isFinite(o) || (o = n.parse(o))),
                o)
            }
            function vi(t, e) {
                if (at.isNullOrUndef(e))
                    return null;
                var n = t.options.time
                  , r = mi(t, t.getRightValue(e));
                return null === r || n.round && (r = +t._adapter.startOf(r, n.round)),
                r
            }
            function yi(t, e, n, r) {
                var i, a, o, s = li.length;
                for (i = li.indexOf(t); i < s - 1; ++i)
                    if (o = (a = si[li[i]]).steps ? a.steps : oi,
                    a.common && Math.ceil((n - e) / (o * a.size)) <= r)
                        return li[i];
                return li[s - 1]
            }
            function bi(t, e, n, r, i) {
                var a, o;
                for (a = li.length - 1; a >= li.indexOf(n); a--)
                    if (o = li[a],
                    si[o].common && t._adapter.diff(i, r, o) >= e - 1)
                        return o;
                return li[n ? li.indexOf(n) : 0]
            }
            function _i(t) {
                for (var e = li.indexOf(t) + 1, n = li.length; e < n; ++e)
                    if (si[li[e]].common)
                        return li[e]
            }
            function xi(t, e, n, r) {
                var i, a = t._adapter, o = t.options, s = o.time, l = s.unit || yi(s.minUnit, e, n, r), u = ri([s.stepSize, s.unitStepSize, 1]), d = "week" === l && s.isoWeekday, c = e, h = [];
                if (d && (c = +a.startOf(c, "isoWeek", d)),
                c = +a.startOf(c, d ? "day" : l),
                a.diff(n, e, l) > 1e5 * u)
                    throw e + " and " + n + " are too far apart with stepSize of " + u + " " + l;
                for (i = c; i < n; i = +a.add(i, u, l))
                    h.push(i);
                return i !== n && "ticks" !== o.bounds || h.push(i),
                h
            }
            function wi(t, e, n, r, i) {
                var a, o, s = 0, l = 0;
                return i.offset && e.length && (a = pi(t, "time", e[0], "pos"),
                s = 1 === e.length ? 1 - a : (pi(t, "time", e[1], "pos") - a) / 2,
                o = pi(t, "time", e[e.length - 1], "pos"),
                l = 1 === e.length ? o : (o - pi(t, "time", e[e.length - 2], "pos")) / 2),
                {
                    start: s,
                    end: l,
                    factor: 1 / (s + 1 + l)
                }
            }
            function ki(t, e, n, r) {
                var i, a, o = t._adapter, s = +o.startOf(e[0].value, r), l = e[e.length - 1].value;
                for (i = s; i <= l; i = +o.add(i, 1, r))
                    (a = n[i]) >= 0 && (e[a].major = !0);
                return e
            }
            function Mi(t, e, n) {
                var r, i, a = [], o = {}, s = e.length;
                for (r = 0; r < s; ++r)
                    o[i = e[r]] = r,
                    a.push({
                        value: i,
                        major: !1
                    });
                return 0 !== s && n ? ki(t, a, o, n) : a
            }
            var Si = {
                position: "bottom",
                distribution: "linear",
                bounds: "data",
                adapters: {},
                time: {
                    parser: !1,
                    unit: !1,
                    round: !1,
                    displayFormat: !1,
                    isoWeekday: !1,
                    minUnit: "millisecond",
                    displayFormats: {}
                },
                ticks: {
                    autoSkip: !1,
                    source: "auto",
                    major: {
                        enabled: !1
                    }
                }
            }
              , Di = mr.extend({
                initialize: function() {
                    this.mergeTicksOptions(),
                    mr.prototype.initialize.call(this)
                },
                update: function() {
                    var t = this
                      , e = t.options
                      , n = e.time || (e.time = {})
                      , r = t._adapter = new Kn._date(e.adapters.date);
                    return ni("time scale", n.format, "time.format", "time.parser"),
                    ni("time scale", n.min, "time.min", "ticks.min"),
                    ni("time scale", n.max, "time.max", "ticks.max"),
                    at.mergeIf(n.displayFormats, r.formats()),
                    mr.prototype.update.apply(t, arguments)
                },
                getRightValue: function(t) {
                    return t && void 0 !== t.t && (t = t.t),
                    mr.prototype.getRightValue.call(this, t)
                },
                determineDataLimits: function() {
                    var t, e, n, r, i, a, o, s = this, l = s.chart, u = s._adapter, d = s.options, c = d.time.unit || "day", h = oi, f = ai, g = [], p = [], m = [], v = s._getLabels();
                    for (t = 0,
                    n = v.length; t < n; ++t)
                        m.push(vi(s, v[t]));
                    for (t = 0,
                    n = (l.data.datasets || []).length; t < n; ++t)
                        if (l.isDatasetVisible(t))
                            if (i = l.data.datasets[t].data,
                            at.isObject(i[0]))
                                for (p[t] = [],
                                e = 0,
                                r = i.length; e < r; ++e)
                                    a = vi(s, i[e]),
                                    g.push(a),
                                    p[t][e] = a;
                            else
                                p[t] = m.slice(0),
                                o || (g = g.concat(m),
                                o = !0);
                        else
                            p[t] = [];
                    m.length && (h = Math.min(h, m[0]),
                    f = Math.max(f, m[m.length - 1])),
                    g.length && (g = n > 1 ? di(g).sort(ui) : g.sort(ui),
                    h = Math.min(h, g[0]),
                    f = Math.max(f, g[g.length - 1])),
                    h = vi(s, ci(d)) || h,
                    f = vi(s, hi(d)) || f,
                    h = h === oi ? +u.startOf(Date.now(), c) : h,
                    f = f === ai ? +u.endOf(Date.now(), c) + 1 : f,
                    s.min = Math.min(h, f),
                    s.max = Math.max(h + 1, f),
                    s._table = [],
                    s._timestamps = {
                        data: g,
                        datasets: p,
                        labels: m
                    }
                },
                buildTicks: function() {
                    var t, e, n, r = this, i = r.min, a = r.max, o = r.options, s = o.ticks, l = o.time, u = r._timestamps, d = [], c = r.getLabelCapacity(i), h = s.source, f = o.distribution;
                    for (u = "data" === h || "auto" === h && "series" === f ? u.data : "labels" === h ? u.labels : xi(r, i, a, c),
                    "ticks" === o.bounds && u.length && (i = u[0],
                    a = u[u.length - 1]),
                    i = vi(r, ci(o)) || i,
                    a = vi(r, hi(o)) || a,
                    t = 0,
                    e = u.length; t < e; ++t)
                        (n = u[t]) >= i && n <= a && d.push(n);
                    return r.min = i,
                    r.max = a,
                    r._unit = l.unit || (s.autoSkip ? yi(l.minUnit, r.min, r.max, c) : bi(r, d.length, l.minUnit, r.min, r.max)),
                    r._majorUnit = s.major.enabled && "year" !== r._unit ? _i(r._unit) : void 0,
                    r._table = fi(r._timestamps.data, i, a, f),
                    r._offsets = wi(r._table, d, i, a, o),
                    s.reverse && d.reverse(),
                    Mi(r, d, r._majorUnit)
                },
                getLabelForIndex: function(t, e) {
                    var n = this
                      , r = n._adapter
                      , i = n.chart.data
                      , a = n.options.time
                      , o = i.labels && t < i.labels.length ? i.labels[t] : ""
                      , s = i.datasets[e].data[t];
                    return at.isObject(s) && (o = n.getRightValue(s)),
                    a.tooltipFormat ? r.format(mi(n, o), a.tooltipFormat) : "string" === typeof o ? o : r.format(mi(n, o), a.displayFormats.datetime)
                },
                tickFormatFunction: function(t, e, n, r) {
                    var i = this
                      , a = i._adapter
                      , o = i.options
                      , s = o.time.displayFormats
                      , l = s[i._unit]
                      , u = i._majorUnit
                      , d = s[u]
                      , c = n[e]
                      , h = o.ticks
                      , f = u && d && c && c.major
                      , g = a.format(t, r || (f ? d : l))
                      , p = f ? h.major : h.minor
                      , m = ri([p.callback, p.userCallback, h.callback, h.userCallback]);
                    return m ? m(g, e, n) : g
                },
                convertTicksToLabels: function(t) {
                    var e, n, r = [];
                    for (e = 0,
                    n = t.length; e < n; ++e)
                        r.push(this.tickFormatFunction(t[e].value, e, t));
                    return r
                },
                getPixelForOffset: function(t) {
                    var e = this
                      , n = e._offsets
                      , r = pi(e._table, "time", t, "pos");
                    return e.getPixelForDecimal((n.start + r) * n.factor)
                },
                getPixelForValue: function(t, e, n) {
                    var r = this
                      , i = null;
                    if (void 0 !== e && void 0 !== n && (i = r._timestamps.datasets[n][e]),
                    null === i && (i = vi(r, t)),
                    null !== i)
                        return r.getPixelForOffset(i)
                },
                getPixelForTick: function(t) {
                    var e = this.getTicks();
                    return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
                },
                getValueForPixel: function(t) {
                    var e = this
                      , n = e._offsets
                      , r = e.getDecimalForPixel(t) / n.factor - n.end
                      , i = pi(e._table, "pos", r, "time");
                    return e._adapter._create(i)
                },
                _getLabelSize: function(t) {
                    var e = this
                      , n = e.options.ticks
                      , r = e.ctx.measureText(t).width
                      , i = at.toRadians(e.isHorizontal() ? n.maxRotation : n.minRotation)
                      , a = Math.cos(i)
                      , o = Math.sin(i)
                      , s = ii(n.fontSize, X.global.defaultFontSize);
                    return {
                        w: r * a + s * o,
                        h: r * o + s * a
                    }
                },
                getLabelWidth: function(t) {
                    return this._getLabelSize(t).w
                },
                getLabelCapacity: function(t) {
                    var e = this
                      , n = e.options.time
                      , r = n.displayFormats
                      , i = r[n.unit] || r.millisecond
                      , a = e.tickFormatFunction(t, 0, Mi(e, [t], e._majorUnit), i)
                      , o = e._getLabelSize(a)
                      , s = Math.floor(e.isHorizontal() ? e.width / o.w : e.height / o.h);
                    return e.options.offset && s--,
                    s > 0 ? s : 1
                }
            })
              , Ci = Si;
            Di._defaults = Ci;
            var Pi = {
                category: br,
                linear: Ar,
                logarithmic: Yr,
                radialLinear: ti,
                time: Di
            }
              , Oi = {
                datetime: "MMM D, YYYY, h:mm:ss a",
                millisecond: "h:mm:ss.SSS a",
                second: "h:mm:ss a",
                minute: "h:mm a",
                hour: "hA",
                day: "MMM D",
                week: "ll",
                month: "MMM YYYY",
                quarter: "[Q]Q - YYYY",
                year: "YYYY"
            };
            Kn._date.override("function" === typeof t ? {
                _id: "moment",
                formats: function() {
                    return Oi
                },
                parse: function(e, n) {
                    return "string" === typeof e && "string" === typeof n ? e = t(e, n) : e instanceof t || (e = t(e)),
                    e.isValid() ? e.valueOf() : null
                },
                format: function(e, n) {
                    return t(e).format(n)
                },
                add: function(e, n, r) {
                    return t(e).add(n, r).valueOf()
                },
                diff: function(e, n, r) {
                    return t(e).diff(t(n), r)
                },
                startOf: function(e, n, r) {
                    return e = t(e),
                    "isoWeek" === n ? e.isoWeekday(r).valueOf() : e.startOf(n).valueOf()
                },
                endOf: function(e, n) {
                    return t(e).endOf(n).valueOf()
                },
                _create: function(e) {
                    return t(e)
                }
            } : {}),
            X._set("global", {
                plugins: {
                    filler: {
                        propagate: !0
                    }
                }
            });
            var Ti = {
                dataset: function(t) {
                    var e = t.fill
                      , n = t.chart
                      , r = n.getDatasetMeta(e)
                      , i = r && n.isDatasetVisible(e) && r.dataset._children || []
                      , a = i.length || 0;
                    return a ? function(t, e) {
                        return e < a && i[e]._view || null
                    }
                    : null
                },
                boundary: function(t) {
                    var e = t.boundary
                      , n = e ? e.x : null
                      , r = e ? e.y : null;
                    return at.isArray(e) ? function(t, n) {
                        return e[n]
                    }
                    : function(t) {
                        return {
                            x: null === n ? t.x : n,
                            y: null === r ? t.y : r
                        }
                    }
                }
            };
            function Ai(t, e, n) {
                var r, i = t._model || {}, a = i.fill;
                if (void 0 === a && (a = !!i.backgroundColor),
                !1 === a || null === a)
                    return !1;
                if (!0 === a)
                    return "origin";
                if (r = parseFloat(a, 10),
                isFinite(r) && Math.floor(r) === r)
                    return "-" !== a[0] && "+" !== a[0] || (r = e + r),
                    !(r === e || r < 0 || r >= n) && r;
                switch (a) {
                case "bottom":
                    return "start";
                case "top":
                    return "end";
                case "zero":
                    return "origin";
                case "origin":
                case "start":
                case "end":
                    return a;
                default:
                    return !1
                }
            }
            function Ii(t) {
                var e, n = t.el._model || {}, r = t.el._scale || {}, i = t.fill, a = null;
                if (isFinite(i))
                    return null;
                if ("start" === i ? a = void 0 === n.scaleBottom ? r.bottom : n.scaleBottom : "end" === i ? a = void 0 === n.scaleTop ? r.top : n.scaleTop : void 0 !== n.scaleZero ? a = n.scaleZero : r.getBasePixel && (a = r.getBasePixel()),
                void 0 !== a && null !== a) {
                    if (void 0 !== a.x && void 0 !== a.y)
                        return a;
                    if (at.isFinite(a))
                        return {
                            x: (e = r.isHorizontal()) ? a : null,
                            y: e ? null : a
                        }
                }
                return null
            }
            function Fi(t) {
                var e, n, r, i, a, o = t.el._scale, s = o.options, l = o.chart.data.labels.length, u = t.fill, d = [];
                if (!l)
                    return null;
                for (e = s.ticks.reverse ? o.max : o.min,
                n = s.ticks.reverse ? o.min : o.max,
                r = o.getPointPositionForValue(0, e),
                i = 0; i < l; ++i)
                    a = "start" === u || "end" === u ? o.getPointPositionForValue(i, "start" === u ? e : n) : o.getBasePosition(i),
                    s.gridLines.circular && (a.cx = r.x,
                    a.cy = r.y,
                    a.angle = o.getIndexAngle(i) - Math.PI / 2),
                    d.push(a);
                return d
            }
            function Ri(t) {
                return (t.el._scale || {}).getPointPositionForValue ? Fi(t) : Ii(t)
            }
            function Ni(t, e, n) {
                var r, i = t[e].fill, a = [e];
                if (!n)
                    return i;
                for (; !1 !== i && -1 === a.indexOf(i); ) {
                    if (!isFinite(i))
                        return i;
                    if (!(r = t[i]))
                        return !1;
                    if (r.visible)
                        return i;
                    a.push(i),
                    i = r.fill
                }
                return !1
            }
            function Li(t) {
                var e = t.fill
                  , n = "dataset";
                return !1 === e ? null : (isFinite(e) || (n = "boundary"),
                Ti[n](t))
            }
            function Ei(t) {
                return t && !t.skip
            }
            function Yi(t, e, n, r, i) {
                var a, o, s, l;
                if (r && i) {
                    for (t.moveTo(e[0].x, e[0].y),
                    a = 1; a < r; ++a)
                        at.canvas.lineTo(t, e[a - 1], e[a]);
                    if (void 0 === n[0].angle)
                        for (t.lineTo(n[i - 1].x, n[i - 1].y),
                        a = i - 1; a > 0; --a)
                            at.canvas.lineTo(t, n[a], n[a - 1], !0);
                    else
                        for (o = n[0].cx,
                        s = n[0].cy,
                        l = Math.sqrt(Math.pow(n[0].x - o, 2) + Math.pow(n[0].y - s, 2)),
                        a = i - 1; a > 0; --a)
                            t.arc(o, s, l, n[a].angle, n[a - 1].angle, !0)
                }
            }
            function Wi(t, e, n, r, i, a) {
                var o, s, l, u, d, c, h, f, g = e.length, p = r.spanGaps, m = [], v = [], y = 0, b = 0;
                for (t.beginPath(),
                o = 0,
                s = g; o < s; ++o)
                    d = n(u = e[l = o % g]._view, l, r),
                    c = Ei(u),
                    h = Ei(d),
                    a && void 0 === f && c && (s = g + (f = o + 1)),
                    c && h ? (y = m.push(u),
                    b = v.push(d)) : y && b && (p ? (c && m.push(u),
                    h && v.push(d)) : (Yi(t, m, v, y, b),
                    y = b = 0,
                    m = [],
                    v = []));
                Yi(t, m, v, y, b),
                t.closePath(),
                t.fillStyle = i,
                t.fill()
            }
            var zi = {
                id: "filler",
                afterDatasetsUpdate: function(t, e) {
                    var n, r, i, a, o = (t.data.datasets || []).length, s = e.propagate, l = [];
                    for (r = 0; r < o; ++r)
                        a = null,
                        (i = (n = t.getDatasetMeta(r)).dataset) && i._model && i instanceof Ut.Line && (a = {
                            visible: t.isDatasetVisible(r),
                            fill: Ai(i, r, o),
                            chart: t,
                            el: i
                        }),
                        n.$filler = a,
                        l.push(a);
                    for (r = 0; r < o; ++r)
                        (a = l[r]) && (a.fill = Ni(l, r, s),
                        a.boundary = Ri(a),
                        a.mapper = Li(a))
                },
                beforeDatasetsDraw: function(t) {
                    var e, n, r, i, a, o, s, l = t._getSortedVisibleDatasetMetas(), u = t.ctx;
                    for (n = l.length - 1; n >= 0; --n)
                        (e = l[n].$filler) && e.visible && (i = (r = e.el)._view,
                        a = r._children || [],
                        o = e.mapper,
                        s = i.backgroundColor || X.global.defaultColor,
                        o && s && a.length && (at.canvas.clipArea(u, t.chartArea),
                        Wi(u, a, o, i, s, r._loop),
                        at.canvas.unclipArea(u)))
                }
            }
              , Vi = at.rtl.getRtlAdapter
              , Bi = at.noop
              , Hi = at.valueOrDefault;
            function ji(t, e) {
                return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth
            }
            X._set("global", {
                legend: {
                    display: !0,
                    position: "top",
                    align: "center",
                    fullWidth: !0,
                    reverse: !1,
                    weight: 1e3,
                    onClick: function(t, e) {
                        var n = e.datasetIndex
                          , r = this.chart
                          , i = r.getDatasetMeta(n);
                        i.hidden = null === i.hidden ? !r.data.datasets[n].hidden : null,
                        r.update()
                    },
                    onHover: null,
                    onLeave: null,
                    labels: {
                        boxWidth: 40,
                        padding: 10,
                        generateLabels: function(t) {
                            var e = t.data.datasets
                              , n = t.options.legend || {}
                              , r = n.labels && n.labels.usePointStyle;
                            return t._getSortedDatasetMetas().map((function(n) {
                                var i = n.controller.getStyle(r ? 0 : void 0);
                                return {
                                    text: e[n.index].label,
                                    fillStyle: i.backgroundColor,
                                    hidden: !t.isDatasetVisible(n.index),
                                    lineCap: i.borderCapStyle,
                                    lineDash: i.borderDash,
                                    lineDashOffset: i.borderDashOffset,
                                    lineJoin: i.borderJoinStyle,
                                    lineWidth: i.borderWidth,
                                    strokeStyle: i.borderColor,
                                    pointStyle: i.pointStyle,
                                    rotation: i.rotation,
                                    datasetIndex: n.index
                                }
                            }
                            ), this)
                        }
                    }
                },
                legendCallback: function(t) {
                    var e, n, r, i = document.createElement("ul"), a = t.data.datasets;
                    for (i.setAttribute("class", t.id + "-legend"),
                    e = 0,
                    n = a.length; e < n; e++)
                        (r = i.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = a[e].backgroundColor,
                        a[e].label && r.appendChild(document.createTextNode(a[e].label));
                    return i.outerHTML
                }
            });
            var Ui = ft.extend({
                initialize: function(t) {
                    var e = this;
                    at.extend(e, t),
                    e.legendHitBoxes = [],
                    e._hoveredItem = null,
                    e.doughnutMode = !1
                },
                beforeUpdate: Bi,
                update: function(t, e, n) {
                    var r = this;
                    return r.beforeUpdate(),
                    r.maxWidth = t,
                    r.maxHeight = e,
                    r.margins = n,
                    r.beforeSetDimensions(),
                    r.setDimensions(),
                    r.afterSetDimensions(),
                    r.beforeBuildLabels(),
                    r.buildLabels(),
                    r.afterBuildLabels(),
                    r.beforeFit(),
                    r.fit(),
                    r.afterFit(),
                    r.afterUpdate(),
                    r.minSize
                },
                afterUpdate: Bi,
                beforeSetDimensions: Bi,
                setDimensions: function() {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth,
                    t.left = 0,
                    t.right = t.width) : (t.height = t.maxHeight,
                    t.top = 0,
                    t.bottom = t.height),
                    t.paddingLeft = 0,
                    t.paddingTop = 0,
                    t.paddingRight = 0,
                    t.paddingBottom = 0,
                    t.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: Bi,
                beforeBuildLabels: Bi,
                buildLabels: function() {
                    var t = this
                      , e = t.options.labels || {}
                      , n = at.callback(e.generateLabels, [t.chart], t) || [];
                    e.filter && (n = n.filter((function(n) {
                        return e.filter(n, t.chart.data)
                    }
                    ))),
                    t.options.reverse && n.reverse(),
                    t.legendItems = n
                },
                afterBuildLabels: Bi,
                beforeFit: Bi,
                fit: function() {
                    var t = this
                      , e = t.options
                      , n = e.labels
                      , r = e.display
                      , i = t.ctx
                      , a = at.options._parseFont(n)
                      , o = a.size
                      , s = t.legendHitBoxes = []
                      , l = t.minSize
                      , u = t.isHorizontal();
                    if (u ? (l.width = t.maxWidth,
                    l.height = r ? 10 : 0) : (l.width = r ? 10 : 0,
                    l.height = t.maxHeight),
                    r) {
                        if (i.font = a.string,
                        u) {
                            var d = t.lineWidths = [0]
                              , c = 0;
                            i.textAlign = "left",
                            i.textBaseline = "middle",
                            at.each(t.legendItems, (function(t, e) {
                                var r = ji(n, o) + o / 2 + i.measureText(t.text).width;
                                (0 === e || d[d.length - 1] + r + 2 * n.padding > l.width) && (c += o + n.padding,
                                d[d.length - (e > 0 ? 0 : 1)] = 0),
                                s[e] = {
                                    left: 0,
                                    top: 0,
                                    width: r,
                                    height: o
                                },
                                d[d.length - 1] += r + n.padding
                            }
                            )),
                            l.height += c
                        } else {
                            var h = n.padding
                              , f = t.columnWidths = []
                              , g = t.columnHeights = []
                              , p = n.padding
                              , m = 0
                              , v = 0;
                            at.each(t.legendItems, (function(t, e) {
                                var r = ji(n, o) + o / 2 + i.measureText(t.text).width;
                                e > 0 && v + o + 2 * h > l.height && (p += m + n.padding,
                                f.push(m),
                                g.push(v),
                                m = 0,
                                v = 0),
                                m = Math.max(m, r),
                                v += o + h,
                                s[e] = {
                                    left: 0,
                                    top: 0,
                                    width: r,
                                    height: o
                                }
                            }
                            )),
                            p += m,
                            f.push(m),
                            g.push(v),
                            l.width += p
                        }
                        t.width = l.width,
                        t.height = l.height
                    } else
                        t.width = l.width = t.height = l.height = 0
                },
                afterFit: Bi,
                isHorizontal: function() {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                draw: function() {
                    var t = this
                      , e = t.options
                      , n = e.labels
                      , r = X.global
                      , i = r.defaultColor
                      , a = r.elements.line
                      , o = t.height
                      , s = t.columnHeights
                      , l = t.width
                      , u = t.lineWidths;
                    if (e.display) {
                        var d, c = Vi(e.rtl, t.left, t.minSize.width), h = t.ctx, f = Hi(n.fontColor, r.defaultFontColor), g = at.options._parseFont(n), p = g.size;
                        h.textAlign = c.textAlign("left"),
                        h.textBaseline = "middle",
                        h.lineWidth = .5,
                        h.strokeStyle = f,
                        h.fillStyle = f,
                        h.font = g.string;
                        var m = ji(n, p)
                          , v = t.legendHitBoxes
                          , y = function(t, e, r) {
                            if (!(isNaN(m) || m <= 0)) {
                                h.save();
                                var o = Hi(r.lineWidth, a.borderWidth);
                                if (h.fillStyle = Hi(r.fillStyle, i),
                                h.lineCap = Hi(r.lineCap, a.borderCapStyle),
                                h.lineDashOffset = Hi(r.lineDashOffset, a.borderDashOffset),
                                h.lineJoin = Hi(r.lineJoin, a.borderJoinStyle),
                                h.lineWidth = o,
                                h.strokeStyle = Hi(r.strokeStyle, i),
                                h.setLineDash && h.setLineDash(Hi(r.lineDash, a.borderDash)),
                                n && n.usePointStyle) {
                                    var s = m * Math.SQRT2 / 2
                                      , l = c.xPlus(t, m / 2)
                                      , u = e + p / 2;
                                    at.canvas.drawPoint(h, r.pointStyle, s, l, u, r.rotation)
                                } else
                                    h.fillRect(c.leftForLtr(t, m), e, m, p),
                                    0 !== o && h.strokeRect(c.leftForLtr(t, m), e, m, p);
                                h.restore()
                            }
                        }
                          , b = function(t, e, n, r) {
                            var i = p / 2
                              , a = c.xPlus(t, m + i)
                              , o = e + i;
                            h.fillText(n.text, a, o),
                            n.hidden && (h.beginPath(),
                            h.lineWidth = 2,
                            h.moveTo(a, o),
                            h.lineTo(c.xPlus(a, r), o),
                            h.stroke())
                        }
                          , _ = function(t, r) {
                            switch (e.align) {
                            case "start":
                                return n.padding;
                            case "end":
                                return t - r;
                            default:
                                return (t - r + n.padding) / 2
                            }
                        }
                          , x = t.isHorizontal();
                        d = x ? {
                            x: t.left + _(l, u[0]),
                            y: t.top + n.padding,
                            line: 0
                        } : {
                            x: t.left + n.padding,
                            y: t.top + _(o, s[0]),
                            line: 0
                        },
                        at.rtl.overrideTextDirection(t.ctx, e.textDirection);
                        var w = p + n.padding;
                        at.each(t.legendItems, (function(e, r) {
                            var i = h.measureText(e.text).width
                              , a = m + p / 2 + i
                              , f = d.x
                              , g = d.y;
                            c.setWidth(t.minSize.width),
                            x ? r > 0 && f + a + n.padding > t.left + t.minSize.width && (g = d.y += w,
                            d.line++,
                            f = d.x = t.left + _(l, u[d.line])) : r > 0 && g + w > t.top + t.minSize.height && (f = d.x = f + t.columnWidths[d.line] + n.padding,
                            d.line++,
                            g = d.y = t.top + _(o, s[d.line]));
                            var k = c.x(f);
                            y(k, g, e),
                            v[r].left = c.leftForLtr(k, v[r].width),
                            v[r].top = g,
                            b(k, g, e, i),
                            x ? d.x += a + n.padding : d.y += w
                        }
                        )),
                        at.rtl.restoreTextDirection(t.ctx, e.textDirection)
                    }
                },
                _getLegendItemAt: function(t, e) {
                    var n, r, i, a = this;
                    if (t >= a.left && t <= a.right && e >= a.top && e <= a.bottom)
                        for (i = a.legendHitBoxes,
                        n = 0; n < i.length; ++n)
                            if (t >= (r = i[n]).left && t <= r.left + r.width && e >= r.top && e <= r.top + r.height)
                                return a.legendItems[n];
                    return null
                },
                handleEvent: function(t) {
                    var e, n = this, r = n.options, i = "mouseup" === t.type ? "click" : t.type;
                    if ("mousemove" === i) {
                        if (!r.onHover && !r.onLeave)
                            return
                    } else {
                        if ("click" !== i)
                            return;
                        if (!r.onClick)
                            return
                    }
                    e = n._getLegendItemAt(t.x, t.y),
                    "click" === i ? e && r.onClick && r.onClick.call(n, t.native, e) : (r.onLeave && e !== n._hoveredItem && (n._hoveredItem && r.onLeave.call(n, t.native, n._hoveredItem),
                    n._hoveredItem = e),
                    r.onHover && e && r.onHover.call(n, t.native, e))
                }
            });
            function Gi(t, e) {
                var n = new Ui({
                    ctx: t.ctx,
                    options: e,
                    chart: t
                });
                He.configure(t, n, e),
                He.addBox(t, n),
                t.legend = n
            }
            var qi = {
                id: "legend",
                _element: Ui,
                beforeInit: function(t) {
                    var e = t.options.legend;
                    e && Gi(t, e)
                },
                beforeUpdate: function(t) {
                    var e = t.options.legend
                      , n = t.legend;
                    e ? (at.mergeIf(e, X.global.legend),
                    n ? (He.configure(t, n, e),
                    n.options = e) : Gi(t, e)) : n && (He.removeBox(t, n),
                    delete t.legend)
                },
                afterEvent: function(t, e) {
                    var n = t.legend;
                    n && n.handleEvent(e)
                }
            }
              , Zi = at.noop;
            X._set("global", {
                title: {
                    display: !1,
                    fontStyle: "bold",
                    fullWidth: !0,
                    padding: 10,
                    position: "top",
                    text: "",
                    weight: 2e3
                }
            });
            var Ki = ft.extend({
                initialize: function(t) {
                    var e = this;
                    at.extend(e, t),
                    e.legendHitBoxes = []
                },
                beforeUpdate: Zi,
                update: function(t, e, n) {
                    var r = this;
                    return r.beforeUpdate(),
                    r.maxWidth = t,
                    r.maxHeight = e,
                    r.margins = n,
                    r.beforeSetDimensions(),
                    r.setDimensions(),
                    r.afterSetDimensions(),
                    r.beforeBuildLabels(),
                    r.buildLabels(),
                    r.afterBuildLabels(),
                    r.beforeFit(),
                    r.fit(),
                    r.afterFit(),
                    r.afterUpdate(),
                    r.minSize
                },
                afterUpdate: Zi,
                beforeSetDimensions: Zi,
                setDimensions: function() {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth,
                    t.left = 0,
                    t.right = t.width) : (t.height = t.maxHeight,
                    t.top = 0,
                    t.bottom = t.height),
                    t.paddingLeft = 0,
                    t.paddingTop = 0,
                    t.paddingRight = 0,
                    t.paddingBottom = 0,
                    t.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: Zi,
                beforeBuildLabels: Zi,
                buildLabels: Zi,
                afterBuildLabels: Zi,
                beforeFit: Zi,
                fit: function() {
                    var t, e = this, n = e.options, r = e.minSize = {}, i = e.isHorizontal();
                    n.display ? (t = (at.isArray(n.text) ? n.text.length : 1) * at.options._parseFont(n).lineHeight + 2 * n.padding,
                    e.width = r.width = i ? e.maxWidth : t,
                    e.height = r.height = i ? t : e.maxHeight) : e.width = r.width = e.height = r.height = 0
                },
                afterFit: Zi,
                isHorizontal: function() {
                    var t = this.options.position;
                    return "top" === t || "bottom" === t
                },
                draw: function() {
                    var t = this
                      , e = t.ctx
                      , n = t.options;
                    if (n.display) {
                        var r, i, a, o = at.options._parseFont(n), s = o.lineHeight, l = s / 2 + n.padding, u = 0, d = t.top, c = t.left, h = t.bottom, f = t.right;
                        e.fillStyle = at.valueOrDefault(n.fontColor, X.global.defaultFontColor),
                        e.font = o.string,
                        t.isHorizontal() ? (i = c + (f - c) / 2,
                        a = d + l,
                        r = f - c) : (i = "left" === n.position ? c + l : f - l,
                        a = d + (h - d) / 2,
                        r = h - d,
                        u = Math.PI * ("left" === n.position ? -.5 : .5)),
                        e.save(),
                        e.translate(i, a),
                        e.rotate(u),
                        e.textAlign = "center",
                        e.textBaseline = "middle";
                        var g = n.text;
                        if (at.isArray(g))
                            for (var p = 0, m = 0; m < g.length; ++m)
                                e.fillText(g[m], 0, p, r),
                                p += s;
                        else
                            e.fillText(g, 0, 0, r);
                        e.restore()
                    }
                }
            });
            function $i(t, e) {
                var n = new Ki({
                    ctx: t.ctx,
                    options: e,
                    chart: t
                });
                He.configure(t, n, e),
                He.addBox(t, n),
                t.titleBlock = n
            }
            var Xi = {}
              , Ji = zi
              , Qi = qi
              , ta = {
                id: "title",
                _element: Ki,
                beforeInit: function(t) {
                    var e = t.options.title;
                    e && $i(t, e)
                },
                beforeUpdate: function(t) {
                    var e = t.options.title
                      , n = t.titleBlock;
                    e ? (at.mergeIf(e, X.global.title),
                    n ? (He.configure(t, n, e),
                    n.options = e) : $i(t, e)) : n && (He.removeBox(t, n),
                    delete t.titleBlock)
                }
            };
            for (var ea in Xi.filler = Ji,
            Xi.legend = Qi,
            Xi.title = ta,
            Un.helpers = at,
            Gn(),
            Un._adapters = Kn,
            Un.Animation = pt,
            Un.animationService = mt,
            Un.controllers = ke,
            Un.DatasetController = wt,
            Un.defaults = X,
            Un.Element = ft,
            Un.elements = Ut,
            Un.Interaction = Te,
            Un.layouts = He,
            Un.platform = yn,
            Un.plugins = bn,
            Un.Scale = mr,
            Un.scaleService = _n,
            Un.Ticks = $n,
            Un.Tooltip = Nn,
            Un.helpers.each(Pi, (function(t, e) {
                Un.scaleService.registerScaleType(e, t, t._defaults)
            }
            )),
            Xi)
                Xi.hasOwnProperty(ea) && Un.plugins.register(Xi[ea]);
            Un.platform.initialize();
            var na = Un;
            return "undefined" !== typeof window && (window.Chart = Un),
            Un.Chart = Un,
            Un.Legend = Xi.legend._element,
            Un.Title = Xi.title._element,
            Un.pluginService = Un.plugins,
            Un.PluginBase = Un.Element.extend({}),
            Un.canvasHelpers = Un.helpers.canvas,
            Un.layoutService = Un.layouts,
            Un.LinearScaleBase = Mr,
            Un.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], (function(t) {
                Un[t] = function(e, n) {
                    return new Un(e,Un.helpers.merge(n || {}, {
                        type: t.charAt(0).toLowerCase() + t.slice(1)
                    }))
                }
            }
            )),
            na
        }(function() {
            try {
                return n(1087)
            } catch (t) {}
        }())
    },
    1087: function(t, e, n) {
        (function(t) {
            t.exports = function() {
                "use strict";
                var e, n;
                function r() {
                    return e.apply(null, arguments)
                }
                function i(t) {
                    e = t
                }
                function a(t) {
                    return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
                }
                function o(t) {
                    return null != t && "[object Object]" === Object.prototype.toString.call(t)
                }
                function s(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }
                function l(t) {
                    if (Object.getOwnPropertyNames)
                        return 0 === Object.getOwnPropertyNames(t).length;
                    var e;
                    for (e in t)
                        if (s(t, e))
                            return !1;
                    return !0
                }
                function u(t) {
                    return void 0 === t
                }
                function d(t) {
                    return "number" === typeof t || "[object Number]" === Object.prototype.toString.call(t)
                }
                function c(t) {
                    return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
                }
                function h(t, e) {
                    var n, r = [];
                    for (n = 0; n < t.length; ++n)
                        r.push(e(t[n], n));
                    return r
                }
                function f(t, e) {
                    for (var n in e)
                        s(e, n) && (t[n] = e[n]);
                    return s(e, "toString") && (t.toString = e.toString),
                    s(e, "valueOf") && (t.valueOf = e.valueOf),
                    t
                }
                function g(t, e, n, r) {
                    return qn(t, e, n, r, !0).utc()
                }
                function p() {
                    return {
                        empty: !1,
                        unusedTokens: [],
                        unusedInput: [],
                        overflow: -2,
                        charsLeftOver: 0,
                        nullInput: !1,
                        invalidEra: null,
                        invalidMonth: null,
                        invalidFormat: !1,
                        userInvalidated: !1,
                        iso: !1,
                        parsedDateParts: [],
                        era: null,
                        meridiem: null,
                        rfc2822: !1,
                        weekdayMismatch: !1
                    }
                }
                function m(t) {
                    return null == t._pf && (t._pf = p()),
                    t._pf
                }
                function v(t) {
                    if (null == t._isValid) {
                        var e = m(t)
                          , r = n.call(e.parsedDateParts, (function(t) {
                            return null != t
                        }
                        ))
                          , i = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidEra && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && r);
                        if (t._strict && (i = i && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour),
                        null != Object.isFrozen && Object.isFrozen(t))
                            return i;
                        t._isValid = i
                    }
                    return t._isValid
                }
                function y(t) {
                    var e = g(NaN);
                    return null != t ? f(m(e), t) : m(e).userInvalidated = !0,
                    e
                }
                n = Array.prototype.some ? Array.prototype.some : function(t) {
                    var e, n = Object(this), r = n.length >>> 0;
                    for (e = 0; e < r; e++)
                        if (e in n && t.call(this, n[e], e, n))
                            return !0;
                    return !1
                }
                ;
                var b = r.momentProperties = []
                  , _ = !1;
                function x(t, e) {
                    var n, r, i;
                    if (u(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject),
                    u(e._i) || (t._i = e._i),
                    u(e._f) || (t._f = e._f),
                    u(e._l) || (t._l = e._l),
                    u(e._strict) || (t._strict = e._strict),
                    u(e._tzm) || (t._tzm = e._tzm),
                    u(e._isUTC) || (t._isUTC = e._isUTC),
                    u(e._offset) || (t._offset = e._offset),
                    u(e._pf) || (t._pf = m(e)),
                    u(e._locale) || (t._locale = e._locale),
                    b.length > 0)
                        for (n = 0; n < b.length; n++)
                            u(i = e[r = b[n]]) || (t[r] = i);
                    return t
                }
                function w(t) {
                    x(this, t),
                    this._d = new Date(null != t._d ? t._d.getTime() : NaN),
                    this.isValid() || (this._d = new Date(NaN)),
                    !1 === _ && (_ = !0,
                    r.updateOffset(this),
                    _ = !1)
                }
                function k(t) {
                    return t instanceof w || null != t && null != t._isAMomentObject
                }
                function M(t) {
                    !1 === r.suppressDeprecationWarnings && "undefined" !== typeof console && console.warn && console.warn("Deprecation warning: " + t)
                }
                function S(t, e) {
                    var n = !0;
                    return f((function() {
                        if (null != r.deprecationHandler && r.deprecationHandler(null, t),
                        n) {
                            var i, a, o, l = [];
                            for (a = 0; a < arguments.length; a++) {
                                if (i = "",
                                "object" === typeof arguments[a]) {
                                    for (o in i += "\n[" + a + "] ",
                                    arguments[0])
                                        s(arguments[0], o) && (i += o + ": " + arguments[0][o] + ", ");
                                    i = i.slice(0, -2)
                                } else
                                    i = arguments[a];
                                l.push(i)
                            }
                            M(t + "\nArguments: " + Array.prototype.slice.call(l).join("") + "\n" + (new Error).stack),
                            n = !1
                        }
                        return e.apply(this, arguments)
                    }
                    ), e)
                }
                var D, C = {};
                function P(t, e) {
                    null != r.deprecationHandler && r.deprecationHandler(t, e),
                    C[t] || (M(e),
                    C[t] = !0)
                }
                function O(t) {
                    return "undefined" !== typeof Function && t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
                }
                function T(t) {
                    var e, n;
                    for (n in t)
                        s(t, n) && (O(e = t[n]) ? this[n] = e : this["_" + n] = e);
                    this._config = t,
                    this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                }
                function A(t, e) {
                    var n, r = f({}, t);
                    for (n in e)
                        s(e, n) && (o(t[n]) && o(e[n]) ? (r[n] = {},
                        f(r[n], t[n]),
                        f(r[n], e[n])) : null != e[n] ? r[n] = e[n] : delete r[n]);
                    for (n in t)
                        s(t, n) && !s(e, n) && o(t[n]) && (r[n] = f({}, r[n]));
                    return r
                }
                function I(t) {
                    null != t && this.set(t)
                }
                r.suppressDeprecationWarnings = !1,
                r.deprecationHandler = null,
                D = Object.keys ? Object.keys : function(t) {
                    var e, n = [];
                    for (e in t)
                        s(t, e) && n.push(e);
                    return n
                }
                ;
                var F = {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                };
                function R(t, e, n) {
                    var r = this._calendar[t] || this._calendar.sameElse;
                    return O(r) ? r.call(e, n) : r
                }
                function N(t, e, n) {
                    var r = "" + Math.abs(t)
                      , i = e - r.length;
                    return (t >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r
                }
                var L = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
                  , E = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
                  , Y = {}
                  , W = {};
                function z(t, e, n, r) {
                    var i = r;
                    "string" === typeof r && (i = function() {
                        return this[r]()
                    }
                    ),
                    t && (W[t] = i),
                    e && (W[e[0]] = function() {
                        return N(i.apply(this, arguments), e[1], e[2])
                    }
                    ),
                    n && (W[n] = function() {
                        return this.localeData().ordinal(i.apply(this, arguments), t)
                    }
                    )
                }
                function V(t) {
                    return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
                }
                function B(t) {
                    var e, n, r = t.match(L);
                    for (e = 0,
                    n = r.length; e < n; e++)
                        W[r[e]] ? r[e] = W[r[e]] : r[e] = V(r[e]);
                    return function(e) {
                        var i, a = "";
                        for (i = 0; i < n; i++)
                            a += O(r[i]) ? r[i].call(e, t) : r[i];
                        return a
                    }
                }
                function H(t, e) {
                    return t.isValid() ? (e = j(e, t.localeData()),
                    Y[e] = Y[e] || B(e),
                    Y[e](t)) : t.localeData().invalidDate()
                }
                function j(t, e) {
                    var n = 5;
                    function r(t) {
                        return e.longDateFormat(t) || t
                    }
                    for (E.lastIndex = 0; n >= 0 && E.test(t); )
                        t = t.replace(E, r),
                        E.lastIndex = 0,
                        n -= 1;
                    return t
                }
                var U = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                };
                function G(t) {
                    var e = this._longDateFormat[t]
                      , n = this._longDateFormat[t.toUpperCase()];
                    return e || !n ? e : (this._longDateFormat[t] = n.match(L).map((function(t) {
                        return "MMMM" === t || "MM" === t || "DD" === t || "dddd" === t ? t.slice(1) : t
                    }
                    )).join(""),
                    this._longDateFormat[t])
                }
                var q = "Invalid date";
                function Z() {
                    return this._invalidDate
                }
                var K = "%d"
                  , $ = /\d{1,2}/;
                function X(t) {
                    return this._ordinal.replace("%d", t)
                }
                var J = {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    w: "a week",
                    ww: "%d weeks",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                };
                function Q(t, e, n, r) {
                    var i = this._relativeTime[n];
                    return O(i) ? i(t, e, n, r) : i.replace(/%d/i, t)
                }
                function tt(t, e) {
                    var n = this._relativeTime[t > 0 ? "future" : "past"];
                    return O(n) ? n(e) : n.replace(/%s/i, e)
                }
                var et = {};
                function nt(t, e) {
                    var n = t.toLowerCase();
                    et[n] = et[n + "s"] = et[e] = t
                }
                function rt(t) {
                    return "string" === typeof t ? et[t] || et[t.toLowerCase()] : void 0
                }
                function it(t) {
                    var e, n, r = {};
                    for (n in t)
                        s(t, n) && (e = rt(n)) && (r[e] = t[n]);
                    return r
                }
                var at = {};
                function ot(t, e) {
                    at[t] = e
                }
                function st(t) {
                    var e, n = [];
                    for (e in t)
                        s(t, e) && n.push({
                            unit: e,
                            priority: at[e]
                        });
                    return n.sort((function(t, e) {
                        return t.priority - e.priority
                    }
                    )),
                    n
                }
                function lt(t) {
                    return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
                }
                function ut(t) {
                    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                }
                function dt(t) {
                    var e = +t
                      , n = 0;
                    return 0 !== e && isFinite(e) && (n = ut(e)),
                    n
                }
                function ct(t, e) {
                    return function(n) {
                        return null != n ? (ft(this, t, n),
                        r.updateOffset(this, e),
                        this) : ht(this, t)
                    }
                }
                function ht(t, e) {
                    return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
                }
                function ft(t, e, n) {
                    t.isValid() && !isNaN(n) && ("FullYear" === e && lt(t.year()) && 1 === t.month() && 29 === t.date() ? (n = dt(n),
                    t._d["set" + (t._isUTC ? "UTC" : "") + e](n, t.month(), Qt(n, t.month()))) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n))
                }
                function gt(t) {
                    return O(this[t = rt(t)]) ? this[t]() : this
                }
                function pt(t, e) {
                    if ("object" === typeof t) {
                        var n, r = st(t = it(t));
                        for (n = 0; n < r.length; n++)
                            this[r[n].unit](t[r[n].unit])
                    } else if (O(this[t = rt(t)]))
                        return this[t](e);
                    return this
                }
                var mt, vt = /\d/, yt = /\d\d/, bt = /\d{3}/, _t = /\d{4}/, xt = /[+-]?\d{6}/, wt = /\d\d?/, kt = /\d\d\d\d?/, Mt = /\d\d\d\d\d\d?/, St = /\d{1,3}/, Dt = /\d{1,4}/, Ct = /[+-]?\d{1,6}/, Pt = /\d+/, Ot = /[+-]?\d+/, Tt = /Z|[+-]\d\d:?\d\d/gi, At = /Z|[+-]\d\d(?::?\d\d)?/gi, It = /[+-]?\d+(\.\d{1,3})?/, Ft = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
                function Rt(t, e, n) {
                    mt[t] = O(e) ? e : function(t, r) {
                        return t && n ? n : e
                    }
                }
                function Nt(t, e) {
                    return s(mt, t) ? mt[t](e._strict, e._locale) : new RegExp(Lt(t))
                }
                function Lt(t) {
                    return Et(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(t, e, n, r, i) {
                        return e || n || r || i
                    }
                    )))
                }
                function Et(t) {
                    return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                }
                mt = {};
                var Yt = {};
                function Wt(t, e) {
                    var n, r = e;
                    for ("string" === typeof t && (t = [t]),
                    d(e) && (r = function(t, n) {
                        n[e] = dt(t)
                    }
                    ),
                    n = 0; n < t.length; n++)
                        Yt[t[n]] = r
                }
                function zt(t, e) {
                    Wt(t, (function(t, n, r, i) {
                        r._w = r._w || {},
                        e(t, r._w, r, i)
                    }
                    ))
                }
                function Vt(t, e, n) {
                    null != e && s(Yt, t) && Yt[t](e, n._a, n, t)
                }
                var Bt, Ht = 0, jt = 1, Ut = 2, Gt = 3, qt = 4, Zt = 5, Kt = 6, $t = 7, Xt = 8;
                function Jt(t, e) {
                    return (t % e + e) % e
                }
                function Qt(t, e) {
                    if (isNaN(t) || isNaN(e))
                        return NaN;
                    var n = Jt(e, 12);
                    return t += (e - n) / 12,
                    1 === n ? lt(t) ? 29 : 28 : 31 - n % 7 % 2
                }
                Bt = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
                    var e;
                    for (e = 0; e < this.length; ++e)
                        if (this[e] === t)
                            return e;
                    return -1
                }
                ,
                z("M", ["MM", 2], "Mo", (function() {
                    return this.month() + 1
                }
                )),
                z("MMM", 0, 0, (function(t) {
                    return this.localeData().monthsShort(this, t)
                }
                )),
                z("MMMM", 0, 0, (function(t) {
                    return this.localeData().months(this, t)
                }
                )),
                nt("month", "M"),
                ot("month", 8),
                Rt("M", wt),
                Rt("MM", wt, yt),
                Rt("MMM", (function(t, e) {
                    return e.monthsShortRegex(t)
                }
                )),
                Rt("MMMM", (function(t, e) {
                    return e.monthsRegex(t)
                }
                )),
                Wt(["M", "MM"], (function(t, e) {
                    e[jt] = dt(t) - 1
                }
                )),
                Wt(["MMM", "MMMM"], (function(t, e, n, r) {
                    var i = n._locale.monthsParse(t, r, n._strict);
                    null != i ? e[jt] = i : m(n).invalidMonth = t
                }
                ));
                var te = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
                  , ee = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
                  , ne = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
                  , re = Ft
                  , ie = Ft;
                function ae(t, e) {
                    return t ? a(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || ne).test(e) ? "format" : "standalone"][t.month()] : a(this._months) ? this._months : this._months.standalone
                }
                function oe(t, e) {
                    return t ? a(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[ne.test(e) ? "format" : "standalone"][t.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
                }
                function se(t, e, n) {
                    var r, i, a, o = t.toLocaleLowerCase();
                    if (!this._monthsParse)
                        for (this._monthsParse = [],
                        this._longMonthsParse = [],
                        this._shortMonthsParse = [],
                        r = 0; r < 12; ++r)
                            a = g([2e3, r]),
                            this._shortMonthsParse[r] = this.monthsShort(a, "").toLocaleLowerCase(),
                            this._longMonthsParse[r] = this.months(a, "").toLocaleLowerCase();
                    return n ? "MMM" === e ? -1 !== (i = Bt.call(this._shortMonthsParse, o)) ? i : null : -1 !== (i = Bt.call(this._longMonthsParse, o)) ? i : null : "MMM" === e ? -1 !== (i = Bt.call(this._shortMonthsParse, o)) || -1 !== (i = Bt.call(this._longMonthsParse, o)) ? i : null : -1 !== (i = Bt.call(this._longMonthsParse, o)) || -1 !== (i = Bt.call(this._shortMonthsParse, o)) ? i : null
                }
                function le(t, e, n) {
                    var r, i, a;
                    if (this._monthsParseExact)
                        return se.call(this, t, e, n);
                    for (this._monthsParse || (this._monthsParse = [],
                    this._longMonthsParse = [],
                    this._shortMonthsParse = []),
                    r = 0; r < 12; r++) {
                        if (i = g([2e3, r]),
                        n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$","i"),
                        this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$","i")),
                        n || this._monthsParse[r] || (a = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""),
                        this._monthsParse[r] = new RegExp(a.replace(".", ""),"i")),
                        n && "MMMM" === e && this._longMonthsParse[r].test(t))
                            return r;
                        if (n && "MMM" === e && this._shortMonthsParse[r].test(t))
                            return r;
                        if (!n && this._monthsParse[r].test(t))
                            return r
                    }
                }
                function ue(t, e) {
                    var n;
                    if (!t.isValid())
                        return t;
                    if ("string" === typeof e)
                        if (/^\d+$/.test(e))
                            e = dt(e);
                        else if (!d(e = t.localeData().monthsParse(e)))
                            return t;
                    return n = Math.min(t.date(), Qt(t.year(), e)),
                    t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n),
                    t
                }
                function de(t) {
                    return null != t ? (ue(this, t),
                    r.updateOffset(this, !0),
                    this) : ht(this, "Month")
                }
                function ce() {
                    return Qt(this.year(), this.month())
                }
                function he(t) {
                    return this._monthsParseExact ? (s(this, "_monthsRegex") || ge.call(this),
                    t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (s(this, "_monthsShortRegex") || (this._monthsShortRegex = re),
                    this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
                }
                function fe(t) {
                    return this._monthsParseExact ? (s(this, "_monthsRegex") || ge.call(this),
                    t ? this._monthsStrictRegex : this._monthsRegex) : (s(this, "_monthsRegex") || (this._monthsRegex = ie),
                    this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
                }
                function ge() {
                    function t(t, e) {
                        return e.length - t.length
                    }
                    var e, n, r = [], i = [], a = [];
                    for (e = 0; e < 12; e++)
                        n = g([2e3, e]),
                        r.push(this.monthsShort(n, "")),
                        i.push(this.months(n, "")),
                        a.push(this.months(n, "")),
                        a.push(this.monthsShort(n, ""));
                    for (r.sort(t),
                    i.sort(t),
                    a.sort(t),
                    e = 0; e < 12; e++)
                        r[e] = Et(r[e]),
                        i[e] = Et(i[e]);
                    for (e = 0; e < 24; e++)
                        a[e] = Et(a[e]);
                    this._monthsRegex = new RegExp("^(" + a.join("|") + ")","i"),
                    this._monthsShortRegex = this._monthsRegex,
                    this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")","i"),
                    this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")","i")
                }
                function pe(t) {
                    return lt(t) ? 366 : 365
                }
                z("Y", 0, 0, (function() {
                    var t = this.year();
                    return t <= 9999 ? N(t, 4) : "+" + t
                }
                )),
                z(0, ["YY", 2], 0, (function() {
                    return this.year() % 100
                }
                )),
                z(0, ["YYYY", 4], 0, "year"),
                z(0, ["YYYYY", 5], 0, "year"),
                z(0, ["YYYYYY", 6, !0], 0, "year"),
                nt("year", "y"),
                ot("year", 1),
                Rt("Y", Ot),
                Rt("YY", wt, yt),
                Rt("YYYY", Dt, _t),
                Rt("YYYYY", Ct, xt),
                Rt("YYYYYY", Ct, xt),
                Wt(["YYYYY", "YYYYYY"], Ht),
                Wt("YYYY", (function(t, e) {
                    e[Ht] = 2 === t.length ? r.parseTwoDigitYear(t) : dt(t)
                }
                )),
                Wt("YY", (function(t, e) {
                    e[Ht] = r.parseTwoDigitYear(t)
                }
                )),
                Wt("Y", (function(t, e) {
                    e[Ht] = parseInt(t, 10)
                }
                )),
                r.parseTwoDigitYear = function(t) {
                    return dt(t) + (dt(t) > 68 ? 1900 : 2e3)
                }
                ;
                var me = ct("FullYear", !0);
                function ve() {
                    return lt(this.year())
                }
                function ye(t, e, n, r, i, a, o) {
                    var s;
                    return t < 100 && t >= 0 ? (s = new Date(t + 400,e,n,r,i,a,o),
                    isFinite(s.getFullYear()) && s.setFullYear(t)) : s = new Date(t,e,n,r,i,a,o),
                    s
                }
                function be(t) {
                    var e, n;
                    return t < 100 && t >= 0 ? ((n = Array.prototype.slice.call(arguments))[0] = t + 400,
                    e = new Date(Date.UTC.apply(null, n)),
                    isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t)) : e = new Date(Date.UTC.apply(null, arguments)),
                    e
                }
                function _e(t, e, n) {
                    var r = 7 + e - n;
                    return -(7 + be(t, 0, r).getUTCDay() - e) % 7 + r - 1
                }
                function xe(t, e, n, r, i) {
                    var a, o, s = 1 + 7 * (e - 1) + (7 + n - r) % 7 + _e(t, r, i);
                    return s <= 0 ? o = pe(a = t - 1) + s : s > pe(t) ? (a = t + 1,
                    o = s - pe(t)) : (a = t,
                    o = s),
                    {
                        year: a,
                        dayOfYear: o
                    }
                }
                function we(t, e, n) {
                    var r, i, a = _e(t.year(), e, n), o = Math.floor((t.dayOfYear() - a - 1) / 7) + 1;
                    return o < 1 ? r = o + ke(i = t.year() - 1, e, n) : o > ke(t.year(), e, n) ? (r = o - ke(t.year(), e, n),
                    i = t.year() + 1) : (i = t.year(),
                    r = o),
                    {
                        week: r,
                        year: i
                    }
                }
                function ke(t, e, n) {
                    var r = _e(t, e, n)
                      , i = _e(t + 1, e, n);
                    return (pe(t) - r + i) / 7
                }
                function Me(t) {
                    return we(t, this._week.dow, this._week.doy).week
                }
                z("w", ["ww", 2], "wo", "week"),
                z("W", ["WW", 2], "Wo", "isoWeek"),
                nt("week", "w"),
                nt("isoWeek", "W"),
                ot("week", 5),
                ot("isoWeek", 5),
                Rt("w", wt),
                Rt("ww", wt, yt),
                Rt("W", wt),
                Rt("WW", wt, yt),
                zt(["w", "ww", "W", "WW"], (function(t, e, n, r) {
                    e[r.substr(0, 1)] = dt(t)
                }
                ));
                var Se = {
                    dow: 0,
                    doy: 6
                };
                function De() {
                    return this._week.dow
                }
                function Ce() {
                    return this._week.doy
                }
                function Pe(t) {
                    var e = this.localeData().week(this);
                    return null == t ? e : this.add(7 * (t - e), "d")
                }
                function Oe(t) {
                    var e = we(this, 1, 4).week;
                    return null == t ? e : this.add(7 * (t - e), "d")
                }
                function Te(t, e) {
                    return "string" !== typeof t ? t : isNaN(t) ? "number" === typeof (t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10)
                }
                function Ae(t, e) {
                    return "string" === typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
                }
                function Ie(t, e) {
                    return t.slice(e, 7).concat(t.slice(0, e))
                }
                z("d", 0, "do", "day"),
                z("dd", 0, 0, (function(t) {
                    return this.localeData().weekdaysMin(this, t)
                }
                )),
                z("ddd", 0, 0, (function(t) {
                    return this.localeData().weekdaysShort(this, t)
                }
                )),
                z("dddd", 0, 0, (function(t) {
                    return this.localeData().weekdays(this, t)
                }
                )),
                z("e", 0, 0, "weekday"),
                z("E", 0, 0, "isoWeekday"),
                nt("day", "d"),
                nt("weekday", "e"),
                nt("isoWeekday", "E"),
                ot("day", 11),
                ot("weekday", 11),
                ot("isoWeekday", 11),
                Rt("d", wt),
                Rt("e", wt),
                Rt("E", wt),
                Rt("dd", (function(t, e) {
                    return e.weekdaysMinRegex(t)
                }
                )),
                Rt("ddd", (function(t, e) {
                    return e.weekdaysShortRegex(t)
                }
                )),
                Rt("dddd", (function(t, e) {
                    return e.weekdaysRegex(t)
                }
                )),
                zt(["dd", "ddd", "dddd"], (function(t, e, n, r) {
                    var i = n._locale.weekdaysParse(t, r, n._strict);
                    null != i ? e.d = i : m(n).invalidWeekday = t
                }
                )),
                zt(["d", "e", "E"], (function(t, e, n, r) {
                    e[r] = dt(t)
                }
                ));
                var Fe = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
                  , Re = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
                  , Ne = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
                  , Le = Ft
                  , Ee = Ft
                  , Ye = Ft;
                function We(t, e) {
                    var n = a(this._weekdays) ? this._weekdays : this._weekdays[t && !0 !== t && this._weekdays.isFormat.test(e) ? "format" : "standalone"];
                    return !0 === t ? Ie(n, this._week.dow) : t ? n[t.day()] : n
                }
                function ze(t) {
                    return !0 === t ? Ie(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort
                }
                function Ve(t) {
                    return !0 === t ? Ie(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin
                }
                function Be(t, e, n) {
                    var r, i, a, o = t.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                        for (this._weekdaysParse = [],
                        this._shortWeekdaysParse = [],
                        this._minWeekdaysParse = [],
                        r = 0; r < 7; ++r)
                            a = g([2e3, 1]).day(r),
                            this._minWeekdaysParse[r] = this.weekdaysMin(a, "").toLocaleLowerCase(),
                            this._shortWeekdaysParse[r] = this.weekdaysShort(a, "").toLocaleLowerCase(),
                            this._weekdaysParse[r] = this.weekdays(a, "").toLocaleLowerCase();
                    return n ? "dddd" === e ? -1 !== (i = Bt.call(this._weekdaysParse, o)) ? i : null : "ddd" === e ? -1 !== (i = Bt.call(this._shortWeekdaysParse, o)) ? i : null : -1 !== (i = Bt.call(this._minWeekdaysParse, o)) ? i : null : "dddd" === e ? -1 !== (i = Bt.call(this._weekdaysParse, o)) || -1 !== (i = Bt.call(this._shortWeekdaysParse, o)) || -1 !== (i = Bt.call(this._minWeekdaysParse, o)) ? i : null : "ddd" === e ? -1 !== (i = Bt.call(this._shortWeekdaysParse, o)) || -1 !== (i = Bt.call(this._weekdaysParse, o)) || -1 !== (i = Bt.call(this._minWeekdaysParse, o)) ? i : null : -1 !== (i = Bt.call(this._minWeekdaysParse, o)) || -1 !== (i = Bt.call(this._weekdaysParse, o)) || -1 !== (i = Bt.call(this._shortWeekdaysParse, o)) ? i : null
                }
                function He(t, e, n) {
                    var r, i, a;
                    if (this._weekdaysParseExact)
                        return Be.call(this, t, e, n);
                    for (this._weekdaysParse || (this._weekdaysParse = [],
                    this._minWeekdaysParse = [],
                    this._shortWeekdaysParse = [],
                    this._fullWeekdaysParse = []),
                    r = 0; r < 7; r++) {
                        if (i = g([2e3, 1]).day(r),
                        n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$","i"),
                        this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$","i"),
                        this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$","i")),
                        this._weekdaysParse[r] || (a = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""),
                        this._weekdaysParse[r] = new RegExp(a.replace(".", ""),"i")),
                        n && "dddd" === e && this._fullWeekdaysParse[r].test(t))
                            return r;
                        if (n && "ddd" === e && this._shortWeekdaysParse[r].test(t))
                            return r;
                        if (n && "dd" === e && this._minWeekdaysParse[r].test(t))
                            return r;
                        if (!n && this._weekdaysParse[r].test(t))
                            return r
                    }
                }
                function je(t) {
                    if (!this.isValid())
                        return null != t ? this : NaN;
                    var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != t ? (t = Te(t, this.localeData()),
                    this.add(t - e, "d")) : e
                }
                function Ue(t) {
                    if (!this.isValid())
                        return null != t ? this : NaN;
                    var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return null == t ? e : this.add(t - e, "d")
                }
                function Ge(t) {
                    if (!this.isValid())
                        return null != t ? this : NaN;
                    if (null != t) {
                        var e = Ae(t, this.localeData());
                        return this.day(this.day() % 7 ? e : e - 7)
                    }
                    return this.day() || 7
                }
                function qe(t) {
                    return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || $e.call(this),
                    t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (s(this, "_weekdaysRegex") || (this._weekdaysRegex = Le),
                    this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
                }
                function Ze(t) {
                    return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || $e.call(this),
                    t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (s(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ee),
                    this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                }
                function Ke(t) {
                    return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || $e.call(this),
                    t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (s(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ye),
                    this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                }
                function $e() {
                    function t(t, e) {
                        return e.length - t.length
                    }
                    var e, n, r, i, a, o = [], s = [], l = [], u = [];
                    for (e = 0; e < 7; e++)
                        n = g([2e3, 1]).day(e),
                        r = Et(this.weekdaysMin(n, "")),
                        i = Et(this.weekdaysShort(n, "")),
                        a = Et(this.weekdays(n, "")),
                        o.push(r),
                        s.push(i),
                        l.push(a),
                        u.push(r),
                        u.push(i),
                        u.push(a);
                    o.sort(t),
                    s.sort(t),
                    l.sort(t),
                    u.sort(t),
                    this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")","i"),
                    this._weekdaysShortRegex = this._weekdaysRegex,
                    this._weekdaysMinRegex = this._weekdaysRegex,
                    this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")","i"),
                    this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")","i"),
                    this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")","i")
                }
                function Xe() {
                    return this.hours() % 12 || 12
                }
                function Je() {
                    return this.hours() || 24
                }
                function Qe(t, e) {
                    z(t, 0, 0, (function() {
                        return this.localeData().meridiem(this.hours(), this.minutes(), e)
                    }
                    ))
                }
                function tn(t, e) {
                    return e._meridiemParse
                }
                function en(t) {
                    return "p" === (t + "").toLowerCase().charAt(0)
                }
                z("H", ["HH", 2], 0, "hour"),
                z("h", ["hh", 2], 0, Xe),
                z("k", ["kk", 2], 0, Je),
                z("hmm", 0, 0, (function() {
                    return "" + Xe.apply(this) + N(this.minutes(), 2)
                }
                )),
                z("hmmss", 0, 0, (function() {
                    return "" + Xe.apply(this) + N(this.minutes(), 2) + N(this.seconds(), 2)
                }
                )),
                z("Hmm", 0, 0, (function() {
                    return "" + this.hours() + N(this.minutes(), 2)
                }
                )),
                z("Hmmss", 0, 0, (function() {
                    return "" + this.hours() + N(this.minutes(), 2) + N(this.seconds(), 2)
                }
                )),
                Qe("a", !0),
                Qe("A", !1),
                nt("hour", "h"),
                ot("hour", 13),
                Rt("a", tn),
                Rt("A", tn),
                Rt("H", wt),
                Rt("h", wt),
                Rt("k", wt),
                Rt("HH", wt, yt),
                Rt("hh", wt, yt),
                Rt("kk", wt, yt),
                Rt("hmm", kt),
                Rt("hmmss", Mt),
                Rt("Hmm", kt),
                Rt("Hmmss", Mt),
                Wt(["H", "HH"], Gt),
                Wt(["k", "kk"], (function(t, e, n) {
                    var r = dt(t);
                    e[Gt] = 24 === r ? 0 : r
                }
                )),
                Wt(["a", "A"], (function(t, e, n) {
                    n._isPm = n._locale.isPM(t),
                    n._meridiem = t
                }
                )),
                Wt(["h", "hh"], (function(t, e, n) {
                    e[Gt] = dt(t),
                    m(n).bigHour = !0
                }
                )),
                Wt("hmm", (function(t, e, n) {
                    var r = t.length - 2;
                    e[Gt] = dt(t.substr(0, r)),
                    e[qt] = dt(t.substr(r)),
                    m(n).bigHour = !0
                }
                )),
                Wt("hmmss", (function(t, e, n) {
                    var r = t.length - 4
                      , i = t.length - 2;
                    e[Gt] = dt(t.substr(0, r)),
                    e[qt] = dt(t.substr(r, 2)),
                    e[Zt] = dt(t.substr(i)),
                    m(n).bigHour = !0
                }
                )),
                Wt("Hmm", (function(t, e, n) {
                    var r = t.length - 2;
                    e[Gt] = dt(t.substr(0, r)),
                    e[qt] = dt(t.substr(r))
                }
                )),
                Wt("Hmmss", (function(t, e, n) {
                    var r = t.length - 4
                      , i = t.length - 2;
                    e[Gt] = dt(t.substr(0, r)),
                    e[qt] = dt(t.substr(r, 2)),
                    e[Zt] = dt(t.substr(i))
                }
                ));
                var nn = /[ap]\.?m?\.?/i
                  , rn = ct("Hours", !0);
                function an(t, e, n) {
                    return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
                }
                var on, sn = {
                    calendar: F,
                    longDateFormat: U,
                    invalidDate: q,
                    ordinal: K,
                    dayOfMonthOrdinalParse: $,
                    relativeTime: J,
                    months: te,
                    monthsShort: ee,
                    week: Se,
                    weekdays: Fe,
                    weekdaysMin: Ne,
                    weekdaysShort: Re,
                    meridiemParse: nn
                }, ln = {}, un = {};
                function dn(t, e) {
                    var n, r = Math.min(t.length, e.length);
                    for (n = 0; n < r; n += 1)
                        if (t[n] !== e[n])
                            return n;
                    return r
                }
                function cn(t) {
                    return t ? t.toLowerCase().replace("_", "-") : t
                }
                function hn(t) {
                    for (var e, n, r, i, a = 0; a < t.length; ) {
                        for (e = (i = cn(t[a]).split("-")).length,
                        n = (n = cn(t[a + 1])) ? n.split("-") : null; e > 0; ) {
                            if (r = fn(i.slice(0, e).join("-")))
                                return r;
                            if (n && n.length >= e && dn(i, n) >= e - 1)
                                break;
                            e--
                        }
                        a++
                    }
                    return on
                }
                function fn(e) {
                    var n = null;
                    if (void 0 === ln[e] && "undefined" !== typeof t && t && t.exports)
                        try {
                            n = on._abbr,
                            function() {
                                var t = new Error("Cannot find module 'undefined'");
                                throw t.code = "MODULE_NOT_FOUND",
                                t
                            }(),
                            gn(n)
                        } catch (r) {
                            ln[e] = null
                        }
                    return ln[e]
                }
                function gn(t, e) {
                    var n;
                    return t && ((n = u(e) ? vn(t) : pn(t, e)) ? on = n : "undefined" !== typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")),
                    on._abbr
                }
                function pn(t, e) {
                    if (null !== e) {
                        var n, r = sn;
                        if (e.abbr = t,
                        null != ln[t])
                            P("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                            r = ln[t]._config;
                        else if (null != e.parentLocale)
                            if (null != ln[e.parentLocale])
                                r = ln[e.parentLocale]._config;
                            else {
                                if (null == (n = fn(e.parentLocale)))
                                    return un[e.parentLocale] || (un[e.parentLocale] = []),
                                    un[e.parentLocale].push({
                                        name: t,
                                        config: e
                                    }),
                                    null;
                                r = n._config
                            }
                        return ln[t] = new I(A(r, e)),
                        un[t] && un[t].forEach((function(t) {
                            pn(t.name, t.config)
                        }
                        )),
                        gn(t),
                        ln[t]
                    }
                    return delete ln[t],
                    null
                }
                function mn(t, e) {
                    if (null != e) {
                        var n, r, i = sn;
                        null != ln[t] && null != ln[t].parentLocale ? ln[t].set(A(ln[t]._config, e)) : (null != (r = fn(t)) && (i = r._config),
                        e = A(i, e),
                        null == r && (e.abbr = t),
                        (n = new I(e)).parentLocale = ln[t],
                        ln[t] = n),
                        gn(t)
                    } else
                        null != ln[t] && (null != ln[t].parentLocale ? (ln[t] = ln[t].parentLocale,
                        t === gn() && gn(t)) : null != ln[t] && delete ln[t]);
                    return ln[t]
                }
                function vn(t) {
                    var e;
                    if (t && t._locale && t._locale._abbr && (t = t._locale._abbr),
                    !t)
                        return on;
                    if (!a(t)) {
                        if (e = fn(t))
                            return e;
                        t = [t]
                    }
                    return hn(t)
                }
                function yn() {
                    return D(ln)
                }
                function bn(t) {
                    var e, n = t._a;
                    return n && -2 === m(t).overflow && (e = n[jt] < 0 || n[jt] > 11 ? jt : n[Ut] < 1 || n[Ut] > Qt(n[Ht], n[jt]) ? Ut : n[Gt] < 0 || n[Gt] > 24 || 24 === n[Gt] && (0 !== n[qt] || 0 !== n[Zt] || 0 !== n[Kt]) ? Gt : n[qt] < 0 || n[qt] > 59 ? qt : n[Zt] < 0 || n[Zt] > 59 ? Zt : n[Kt] < 0 || n[Kt] > 999 ? Kt : -1,
                    m(t)._overflowDayOfYear && (e < Ht || e > Ut) && (e = Ut),
                    m(t)._overflowWeeks && -1 === e && (e = $t),
                    m(t)._overflowWeekday && -1 === e && (e = Xt),
                    m(t).overflow = e),
                    t
                }
                var _n = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
                  , xn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
                  , wn = /Z|[+-]\d\d(?::?\d\d)?/
                  , kn = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]]
                  , Mn = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]]
                  , Sn = /^\/?Date\((-?\d+)/i
                  , Dn = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/
                  , Cn = {
                    UT: 0,
                    GMT: 0,
                    EDT: -240,
                    EST: -300,
                    CDT: -300,
                    CST: -360,
                    MDT: -360,
                    MST: -420,
                    PDT: -420,
                    PST: -480
                };
                function Pn(t) {
                    var e, n, r, i, a, o, s = t._i, l = _n.exec(s) || xn.exec(s);
                    if (l) {
                        for (m(t).iso = !0,
                        e = 0,
                        n = kn.length; e < n; e++)
                            if (kn[e][1].exec(l[1])) {
                                i = kn[e][0],
                                r = !1 !== kn[e][2];
                                break
                            }
                        if (null == i)
                            return void (t._isValid = !1);
                        if (l[3]) {
                            for (e = 0,
                            n = Mn.length; e < n; e++)
                                if (Mn[e][1].exec(l[3])) {
                                    a = (l[2] || " ") + Mn[e][0];
                                    break
                                }
                            if (null == a)
                                return void (t._isValid = !1)
                        }
                        if (!r && null != a)
                            return void (t._isValid = !1);
                        if (l[4]) {
                            if (!wn.exec(l[4]))
                                return void (t._isValid = !1);
                            o = "Z"
                        }
                        t._f = i + (a || "") + (o || ""),
                        zn(t)
                    } else
                        t._isValid = !1
                }
                function On(t, e, n, r, i, a) {
                    var o = [Tn(t), ee.indexOf(e), parseInt(n, 10), parseInt(r, 10), parseInt(i, 10)];
                    return a && o.push(parseInt(a, 10)),
                    o
                }
                function Tn(t) {
                    var e = parseInt(t, 10);
                    return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e
                }
                function An(t) {
                    return t.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                }
                function In(t, e, n) {
                    return !t || Re.indexOf(t) === new Date(e[0],e[1],e[2]).getDay() || (m(n).weekdayMismatch = !0,
                    n._isValid = !1,
                    !1)
                }
                function Fn(t, e, n) {
                    if (t)
                        return Cn[t];
                    if (e)
                        return 0;
                    var r = parseInt(n, 10)
                      , i = r % 100;
                    return (r - i) / 100 * 60 + i
                }
                function Rn(t) {
                    var e, n = Dn.exec(An(t._i));
                    if (n) {
                        if (e = On(n[4], n[3], n[2], n[5], n[6], n[7]),
                        !In(n[1], e, t))
                            return;
                        t._a = e,
                        t._tzm = Fn(n[8], n[9], n[10]),
                        t._d = be.apply(null, t._a),
                        t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
                        m(t).rfc2822 = !0
                    } else
                        t._isValid = !1
                }
                function Nn(t) {
                    var e = Sn.exec(t._i);
                    null === e ? (Pn(t),
                    !1 === t._isValid && (delete t._isValid,
                    Rn(t),
                    !1 === t._isValid && (delete t._isValid,
                    t._strict ? t._isValid = !1 : r.createFromInputFallback(t)))) : t._d = new Date(+e[1])
                }
                function Ln(t, e, n) {
                    return null != t ? t : null != e ? e : n
                }
                function En(t) {
                    var e = new Date(r.now());
                    return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
                }
                function Yn(t) {
                    var e, n, r, i, a, o = [];
                    if (!t._d) {
                        for (r = En(t),
                        t._w && null == t._a[Ut] && null == t._a[jt] && Wn(t),
                        null != t._dayOfYear && (a = Ln(t._a[Ht], r[Ht]),
                        (t._dayOfYear > pe(a) || 0 === t._dayOfYear) && (m(t)._overflowDayOfYear = !0),
                        n = be(a, 0, t._dayOfYear),
                        t._a[jt] = n.getUTCMonth(),
                        t._a[Ut] = n.getUTCDate()),
                        e = 0; e < 3 && null == t._a[e]; ++e)
                            t._a[e] = o[e] = r[e];
                        for (; e < 7; e++)
                            t._a[e] = o[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                        24 === t._a[Gt] && 0 === t._a[qt] && 0 === t._a[Zt] && 0 === t._a[Kt] && (t._nextDay = !0,
                        t._a[Gt] = 0),
                        t._d = (t._useUTC ? be : ye).apply(null, o),
                        i = t._useUTC ? t._d.getUTCDay() : t._d.getDay(),
                        null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
                        t._nextDay && (t._a[Gt] = 24),
                        t._w && "undefined" !== typeof t._w.d && t._w.d !== i && (m(t).weekdayMismatch = !0)
                    }
                }
                function Wn(t) {
                    var e, n, r, i, a, o, s, l, u;
                    null != (e = t._w).GG || null != e.W || null != e.E ? (a = 1,
                    o = 4,
                    n = Ln(e.GG, t._a[Ht], we(Zn(), 1, 4).year),
                    r = Ln(e.W, 1),
                    ((i = Ln(e.E, 1)) < 1 || i > 7) && (l = !0)) : (a = t._locale._week.dow,
                    o = t._locale._week.doy,
                    u = we(Zn(), a, o),
                    n = Ln(e.gg, t._a[Ht], u.year),
                    r = Ln(e.w, u.week),
                    null != e.d ? ((i = e.d) < 0 || i > 6) && (l = !0) : null != e.e ? (i = e.e + a,
                    (e.e < 0 || e.e > 6) && (l = !0)) : i = a),
                    r < 1 || r > ke(n, a, o) ? m(t)._overflowWeeks = !0 : null != l ? m(t)._overflowWeekday = !0 : (s = xe(n, r, i, a, o),
                    t._a[Ht] = s.year,
                    t._dayOfYear = s.dayOfYear)
                }
                function zn(t) {
                    if (t._f !== r.ISO_8601)
                        if (t._f !== r.RFC_2822) {
                            t._a = [],
                            m(t).empty = !0;
                            var e, n, i, a, o, s, l = "" + t._i, u = l.length, d = 0;
                            for (i = j(t._f, t._locale).match(L) || [],
                            e = 0; e < i.length; e++)
                                a = i[e],
                                (n = (l.match(Nt(a, t)) || [])[0]) && ((o = l.substr(0, l.indexOf(n))).length > 0 && m(t).unusedInput.push(o),
                                l = l.slice(l.indexOf(n) + n.length),
                                d += n.length),
                                W[a] ? (n ? m(t).empty = !1 : m(t).unusedTokens.push(a),
                                Vt(a, n, t)) : t._strict && !n && m(t).unusedTokens.push(a);
                            m(t).charsLeftOver = u - d,
                            l.length > 0 && m(t).unusedInput.push(l),
                            t._a[Gt] <= 12 && !0 === m(t).bigHour && t._a[Gt] > 0 && (m(t).bigHour = void 0),
                            m(t).parsedDateParts = t._a.slice(0),
                            m(t).meridiem = t._meridiem,
                            t._a[Gt] = Vn(t._locale, t._a[Gt], t._meridiem),
                            null !== (s = m(t).era) && (t._a[Ht] = t._locale.erasConvertYear(s, t._a[Ht])),
                            Yn(t),
                            bn(t)
                        } else
                            Rn(t);
                    else
                        Pn(t)
                }
                function Vn(t, e, n) {
                    var r;
                    return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? ((r = t.isPM(n)) && e < 12 && (e += 12),
                    r || 12 !== e || (e = 0),
                    e) : e
                }
                function Bn(t) {
                    var e, n, r, i, a, o, s = !1;
                    if (0 === t._f.length)
                        return m(t).invalidFormat = !0,
                        void (t._d = new Date(NaN));
                    for (i = 0; i < t._f.length; i++)
                        a = 0,
                        o = !1,
                        e = x({}, t),
                        null != t._useUTC && (e._useUTC = t._useUTC),
                        e._f = t._f[i],
                        zn(e),
                        v(e) && (o = !0),
                        a += m(e).charsLeftOver,
                        a += 10 * m(e).unusedTokens.length,
                        m(e).score = a,
                        s ? a < r && (r = a,
                        n = e) : (null == r || a < r || o) && (r = a,
                        n = e,
                        o && (s = !0));
                    f(t, n || e)
                }
                function Hn(t) {
                    if (!t._d) {
                        var e = it(t._i)
                          , n = void 0 === e.day ? e.date : e.day;
                        t._a = h([e.year, e.month, n, e.hour, e.minute, e.second, e.millisecond], (function(t) {
                            return t && parseInt(t, 10)
                        }
                        )),
                        Yn(t)
                    }
                }
                function jn(t) {
                    var e = new w(bn(Un(t)));
                    return e._nextDay && (e.add(1, "d"),
                    e._nextDay = void 0),
                    e
                }
                function Un(t) {
                    var e = t._i
                      , n = t._f;
                    return t._locale = t._locale || vn(t._l),
                    null === e || void 0 === n && "" === e ? y({
                        nullInput: !0
                    }) : ("string" === typeof e && (t._i = e = t._locale.preparse(e)),
                    k(e) ? new w(bn(e)) : (c(e) ? t._d = e : a(n) ? Bn(t) : n ? zn(t) : Gn(t),
                    v(t) || (t._d = null),
                    t))
                }
                function Gn(t) {
                    var e = t._i;
                    u(e) ? t._d = new Date(r.now()) : c(e) ? t._d = new Date(e.valueOf()) : "string" === typeof e ? Nn(t) : a(e) ? (t._a = h(e.slice(0), (function(t) {
                        return parseInt(t, 10)
                    }
                    )),
                    Yn(t)) : o(e) ? Hn(t) : d(e) ? t._d = new Date(e) : r.createFromInputFallback(t)
                }
                function qn(t, e, n, r, i) {
                    var s = {};
                    return !0 !== e && !1 !== e || (r = e,
                    e = void 0),
                    !0 !== n && !1 !== n || (r = n,
                    n = void 0),
                    (o(t) && l(t) || a(t) && 0 === t.length) && (t = void 0),
                    s._isAMomentObject = !0,
                    s._useUTC = s._isUTC = i,
                    s._l = n,
                    s._i = t,
                    s._f = e,
                    s._strict = r,
                    jn(s)
                }
                function Zn(t, e, n, r) {
                    return qn(t, e, n, r, !1)
                }
                r.createFromInputFallback = S("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(t) {
                    t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
                }
                )),
                r.ISO_8601 = function() {}
                ,
                r.RFC_2822 = function() {}
                ;
                var Kn = S("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                    var t = Zn.apply(null, arguments);
                    return this.isValid() && t.isValid() ? t < this ? this : t : y()
                }
                ))
                  , $n = S("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                    var t = Zn.apply(null, arguments);
                    return this.isValid() && t.isValid() ? t > this ? this : t : y()
                }
                ));
                function Xn(t, e) {
                    var n, r;
                    if (1 === e.length && a(e[0]) && (e = e[0]),
                    !e.length)
                        return Zn();
                    for (n = e[0],
                    r = 1; r < e.length; ++r)
                        e[r].isValid() && !e[r][t](n) || (n = e[r]);
                    return n
                }
                function Jn() {
                    return Xn("isBefore", [].slice.call(arguments, 0))
                }
                function Qn() {
                    return Xn("isAfter", [].slice.call(arguments, 0))
                }
                var tr = function() {
                    return Date.now ? Date.now() : +new Date
                }
                  , er = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
                function nr(t) {
                    var e, n, r = !1;
                    for (e in t)
                        if (s(t, e) && (-1 === Bt.call(er, e) || null != t[e] && isNaN(t[e])))
                            return !1;
                    for (n = 0; n < er.length; ++n)
                        if (t[er[n]]) {
                            if (r)
                                return !1;
                            parseFloat(t[er[n]]) !== dt(t[er[n]]) && (r = !0)
                        }
                    return !0
                }
                function rr() {
                    return this._isValid
                }
                function ir() {
                    return Cr(NaN)
                }
                function ar(t) {
                    var e = it(t)
                      , n = e.year || 0
                      , r = e.quarter || 0
                      , i = e.month || 0
                      , a = e.week || e.isoWeek || 0
                      , o = e.day || 0
                      , s = e.hour || 0
                      , l = e.minute || 0
                      , u = e.second || 0
                      , d = e.millisecond || 0;
                    this._isValid = nr(e),
                    this._milliseconds = +d + 1e3 * u + 6e4 * l + 1e3 * s * 60 * 60,
                    this._days = +o + 7 * a,
                    this._months = +i + 3 * r + 12 * n,
                    this._data = {},
                    this._locale = vn(),
                    this._bubble()
                }
                function or(t) {
                    return t instanceof ar
                }
                function sr(t) {
                    return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
                }
                function lr(t, e, n) {
                    var r, i = Math.min(t.length, e.length), a = Math.abs(t.length - e.length), o = 0;
                    for (r = 0; r < i; r++)
                        (n && t[r] !== e[r] || !n && dt(t[r]) !== dt(e[r])) && o++;
                    return o + a
                }
                function ur(t, e) {
                    z(t, 0, 0, (function() {
                        var t = this.utcOffset()
                          , n = "+";
                        return t < 0 && (t = -t,
                        n = "-"),
                        n + N(~~(t / 60), 2) + e + N(~~t % 60, 2)
                    }
                    ))
                }
                ur("Z", ":"),
                ur("ZZ", ""),
                Rt("Z", At),
                Rt("ZZ", At),
                Wt(["Z", "ZZ"], (function(t, e, n) {
                    n._useUTC = !0,
                    n._tzm = cr(At, t)
                }
                ));
                var dr = /([\+\-]|\d\d)/gi;
                function cr(t, e) {
                    var n, r, i = (e || "").match(t);
                    return null === i ? null : 0 === (r = 60 * (n = ((i[i.length - 1] || []) + "").match(dr) || ["-", 0, 0])[1] + dt(n[2])) ? 0 : "+" === n[0] ? r : -r
                }
                function hr(t, e) {
                    var n, i;
                    return e._isUTC ? (n = e.clone(),
                    i = (k(t) || c(t) ? t.valueOf() : Zn(t).valueOf()) - n.valueOf(),
                    n._d.setTime(n._d.valueOf() + i),
                    r.updateOffset(n, !1),
                    n) : Zn(t).local()
                }
                function fr(t) {
                    return -Math.round(t._d.getTimezoneOffset())
                }
                function gr(t, e, n) {
                    var i, a = this._offset || 0;
                    if (!this.isValid())
                        return null != t ? this : NaN;
                    if (null != t) {
                        if ("string" === typeof t) {
                            if (null === (t = cr(At, t)))
                                return this
                        } else
                            Math.abs(t) < 16 && !n && (t *= 60);
                        return !this._isUTC && e && (i = fr(this)),
                        this._offset = t,
                        this._isUTC = !0,
                        null != i && this.add(i, "m"),
                        a !== t && (!e || this._changeInProgress ? Ir(this, Cr(t - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
                        r.updateOffset(this, !0),
                        this._changeInProgress = null)),
                        this
                    }
                    return this._isUTC ? a : fr(this)
                }
                function pr(t, e) {
                    return null != t ? ("string" !== typeof t && (t = -t),
                    this.utcOffset(t, e),
                    this) : -this.utcOffset()
                }
                function mr(t) {
                    return this.utcOffset(0, t)
                }
                function vr(t) {
                    return this._isUTC && (this.utcOffset(0, t),
                    this._isUTC = !1,
                    t && this.subtract(fr(this), "m")),
                    this
                }
                function yr() {
                    if (null != this._tzm)
                        this.utcOffset(this._tzm, !1, !0);
                    else if ("string" === typeof this._i) {
                        var t = cr(Tt, this._i);
                        null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
                    }
                    return this
                }
                function br(t) {
                    return !!this.isValid() && (t = t ? Zn(t).utcOffset() : 0,
                    (this.utcOffset() - t) % 60 === 0)
                }
                function _r() {
                    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                }
                function xr() {
                    if (!u(this._isDSTShifted))
                        return this._isDSTShifted;
                    var t, e = {};
                    return x(e, this),
                    (e = Un(e))._a ? (t = e._isUTC ? g(e._a) : Zn(e._a),
                    this._isDSTShifted = this.isValid() && lr(e._a, t.toArray()) > 0) : this._isDSTShifted = !1,
                    this._isDSTShifted
                }
                function wr() {
                    return !!this.isValid() && !this._isUTC
                }
                function kr() {
                    return !!this.isValid() && this._isUTC
                }
                function Mr() {
                    return !!this.isValid() && this._isUTC && 0 === this._offset
                }
                r.updateOffset = function() {}
                ;
                var Sr = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/
                  , Dr = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
                function Cr(t, e) {
                    var n, r, i, a = t, o = null;
                    return or(t) ? a = {
                        ms: t._milliseconds,
                        d: t._days,
                        M: t._months
                    } : d(t) || !isNaN(+t) ? (a = {},
                    e ? a[e] = +t : a.milliseconds = +t) : (o = Sr.exec(t)) ? (n = "-" === o[1] ? -1 : 1,
                    a = {
                        y: 0,
                        d: dt(o[Ut]) * n,
                        h: dt(o[Gt]) * n,
                        m: dt(o[qt]) * n,
                        s: dt(o[Zt]) * n,
                        ms: dt(sr(1e3 * o[Kt])) * n
                    }) : (o = Dr.exec(t)) ? (n = "-" === o[1] ? -1 : 1,
                    a = {
                        y: Pr(o[2], n),
                        M: Pr(o[3], n),
                        w: Pr(o[4], n),
                        d: Pr(o[5], n),
                        h: Pr(o[6], n),
                        m: Pr(o[7], n),
                        s: Pr(o[8], n)
                    }) : null == a ? a = {} : "object" === typeof a && ("from"in a || "to"in a) && (i = Tr(Zn(a.from), Zn(a.to)),
                    (a = {}).ms = i.milliseconds,
                    a.M = i.months),
                    r = new ar(a),
                    or(t) && s(t, "_locale") && (r._locale = t._locale),
                    or(t) && s(t, "_isValid") && (r._isValid = t._isValid),
                    r
                }
                function Pr(t, e) {
                    var n = t && parseFloat(t.replace(",", "."));
                    return (isNaN(n) ? 0 : n) * e
                }
                function Or(t, e) {
                    var n = {};
                    return n.months = e.month() - t.month() + 12 * (e.year() - t.year()),
                    t.clone().add(n.months, "M").isAfter(e) && --n.months,
                    n.milliseconds = +e - +t.clone().add(n.months, "M"),
                    n
                }
                function Tr(t, e) {
                    var n;
                    return t.isValid() && e.isValid() ? (e = hr(e, t),
                    t.isBefore(e) ? n = Or(t, e) : ((n = Or(e, t)).milliseconds = -n.milliseconds,
                    n.months = -n.months),
                    n) : {
                        milliseconds: 0,
                        months: 0
                    }
                }
                function Ar(t, e) {
                    return function(n, r) {
                        var i;
                        return null === r || isNaN(+r) || (P(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
                        i = n,
                        n = r,
                        r = i),
                        Ir(this, Cr(n, r), t),
                        this
                    }
                }
                function Ir(t, e, n, i) {
                    var a = e._milliseconds
                      , o = sr(e._days)
                      , s = sr(e._months);
                    t.isValid() && (i = null == i || i,
                    s && ue(t, ht(t, "Month") + s * n),
                    o && ft(t, "Date", ht(t, "Date") + o * n),
                    a && t._d.setTime(t._d.valueOf() + a * n),
                    i && r.updateOffset(t, o || s))
                }
                Cr.fn = ar.prototype,
                Cr.invalid = ir;
                var Fr = Ar(1, "add")
                  , Rr = Ar(-1, "subtract");
                function Nr(t) {
                    return "string" === typeof t || t instanceof String
                }
                function Lr(t) {
                    return k(t) || c(t) || Nr(t) || d(t) || Yr(t) || Er(t) || null === t || void 0 === t
                }
                function Er(t) {
                    var e, n, r = o(t) && !l(t), i = !1, a = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"];
                    for (e = 0; e < a.length; e += 1)
                        n = a[e],
                        i = i || s(t, n);
                    return r && i
                }
                function Yr(t) {
                    var e = a(t)
                      , n = !1;
                    return e && (n = 0 === t.filter((function(e) {
                        return !d(e) && Nr(t)
                    }
                    )).length),
                    e && n
                }
                function Wr(t) {
                    var e, n, r = o(t) && !l(t), i = !1, a = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
                    for (e = 0; e < a.length; e += 1)
                        n = a[e],
                        i = i || s(t, n);
                    return r && i
                }
                function zr(t, e) {
                    var n = t.diff(e, "days", !0);
                    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
                }
                function Vr(t, e) {
                    1 === arguments.length && (arguments[0] ? Lr(arguments[0]) ? (t = arguments[0],
                    e = void 0) : Wr(arguments[0]) && (e = arguments[0],
                    t = void 0) : (t = void 0,
                    e = void 0));
                    var n = t || Zn()
                      , i = hr(n, this).startOf("day")
                      , a = r.calendarFormat(this, i) || "sameElse"
                      , o = e && (O(e[a]) ? e[a].call(this, n) : e[a]);
                    return this.format(o || this.localeData().calendar(a, this, Zn(n)))
                }
                function Br() {
                    return new w(this)
                }
                function Hr(t, e) {
                    var n = k(t) ? t : Zn(t);
                    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = rt(e) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
                }
                function jr(t, e) {
                    var n = k(t) ? t : Zn(t);
                    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = rt(e) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
                }
                function Ur(t, e, n, r) {
                    var i = k(t) ? t : Zn(t)
                      , a = k(e) ? e : Zn(e);
                    return !!(this.isValid() && i.isValid() && a.isValid()) && ("(" === (r = r || "()")[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) && (")" === r[1] ? this.isBefore(a, n) : !this.isAfter(a, n))
                }
                function Gr(t, e) {
                    var n, r = k(t) ? t : Zn(t);
                    return !(!this.isValid() || !r.isValid()) && ("millisecond" === (e = rt(e) || "millisecond") ? this.valueOf() === r.valueOf() : (n = r.valueOf(),
                    this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
                }
                function qr(t, e) {
                    return this.isSame(t, e) || this.isAfter(t, e)
                }
                function Zr(t, e) {
                    return this.isSame(t, e) || this.isBefore(t, e)
                }
                function Kr(t, e, n) {
                    var r, i, a;
                    if (!this.isValid())
                        return NaN;
                    if (!(r = hr(t, this)).isValid())
                        return NaN;
                    switch (i = 6e4 * (r.utcOffset() - this.utcOffset()),
                    e = rt(e)) {
                    case "year":
                        a = $r(this, r) / 12;
                        break;
                    case "month":
                        a = $r(this, r);
                        break;
                    case "quarter":
                        a = $r(this, r) / 3;
                        break;
                    case "second":
                        a = (this - r) / 1e3;
                        break;
                    case "minute":
                        a = (this - r) / 6e4;
                        break;
                    case "hour":
                        a = (this - r) / 36e5;
                        break;
                    case "day":
                        a = (this - r - i) / 864e5;
                        break;
                    case "week":
                        a = (this - r - i) / 6048e5;
                        break;
                    default:
                        a = this - r
                    }
                    return n ? a : ut(a)
                }
                function $r(t, e) {
                    if (t.date() < e.date())
                        return -$r(e, t);
                    var n = 12 * (e.year() - t.year()) + (e.month() - t.month())
                      , r = t.clone().add(n, "months");
                    return -(n + (e - r < 0 ? (e - r) / (r - t.clone().add(n - 1, "months")) : (e - r) / (t.clone().add(n + 1, "months") - r))) || 0
                }
                function Xr() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                }
                function Jr(t) {
                    if (!this.isValid())
                        return null;
                    var e = !0 !== t
                      , n = e ? this.clone().utc() : this;
                    return n.year() < 0 || n.year() > 9999 ? H(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : O(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", H(n, "Z")) : H(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
                }
                function Qr() {
                    if (!this.isValid())
                        return "moment.invalid(/* " + this._i + " */)";
                    var t, e, n, r, i = "moment", a = "";
                    return this.isLocal() || (i = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
                    a = "Z"),
                    t = "[" + i + '("]',
                    e = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                    n = "-MM-DD[T]HH:mm:ss.SSS",
                    r = a + '[")]',
                    this.format(t + e + n + r)
                }
                function ti(t) {
                    t || (t = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
                    var e = H(this, t);
                    return this.localeData().postformat(e)
                }
                function ei(t, e) {
                    return this.isValid() && (k(t) && t.isValid() || Zn(t).isValid()) ? Cr({
                        to: this,
                        from: t
                    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
                }
                function ni(t) {
                    return this.from(Zn(), t)
                }
                function ri(t, e) {
                    return this.isValid() && (k(t) && t.isValid() || Zn(t).isValid()) ? Cr({
                        from: this,
                        to: t
                    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
                }
                function ii(t) {
                    return this.to(Zn(), t)
                }
                function ai(t) {
                    var e;
                    return void 0 === t ? this._locale._abbr : (null != (e = vn(t)) && (this._locale = e),
                    this)
                }
                r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
                r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                var oi = S("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(t) {
                    return void 0 === t ? this.localeData() : this.locale(t)
                }
                ));
                function si() {
                    return this._locale
                }
                var li = 1e3
                  , ui = 60 * li
                  , di = 60 * ui
                  , ci = 3506328 * di;
                function hi(t, e) {
                    return (t % e + e) % e
                }
                function fi(t, e, n) {
                    return t < 100 && t >= 0 ? new Date(t + 400,e,n) - ci : new Date(t,e,n).valueOf()
                }
                function gi(t, e, n) {
                    return t < 100 && t >= 0 ? Date.UTC(t + 400, e, n) - ci : Date.UTC(t, e, n)
                }
                function pi(t) {
                    var e, n;
                    if (void 0 === (t = rt(t)) || "millisecond" === t || !this.isValid())
                        return this;
                    switch (n = this._isUTC ? gi : fi,
                    t) {
                    case "year":
                        e = n(this.year(), 0, 1);
                        break;
                    case "quarter":
                        e = n(this.year(), this.month() - this.month() % 3, 1);
                        break;
                    case "month":
                        e = n(this.year(), this.month(), 1);
                        break;
                    case "week":
                        e = n(this.year(), this.month(), this.date() - this.weekday());
                        break;
                    case "isoWeek":
                        e = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                        break;
                    case "day":
                    case "date":
                        e = n(this.year(), this.month(), this.date());
                        break;
                    case "hour":
                        e = this._d.valueOf(),
                        e -= hi(e + (this._isUTC ? 0 : this.utcOffset() * ui), di);
                        break;
                    case "minute":
                        e = this._d.valueOf(),
                        e -= hi(e, ui);
                        break;
                    case "second":
                        e = this._d.valueOf(),
                        e -= hi(e, li)
                    }
                    return this._d.setTime(e),
                    r.updateOffset(this, !0),
                    this
                }
                function mi(t) {
                    var e, n;
                    if (void 0 === (t = rt(t)) || "millisecond" === t || !this.isValid())
                        return this;
                    switch (n = this._isUTC ? gi : fi,
                    t) {
                    case "year":
                        e = n(this.year() + 1, 0, 1) - 1;
                        break;
                    case "quarter":
                        e = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                        break;
                    case "month":
                        e = n(this.year(), this.month() + 1, 1) - 1;
                        break;
                    case "week":
                        e = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                        break;
                    case "isoWeek":
                        e = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                        break;
                    case "day":
                    case "date":
                        e = n(this.year(), this.month(), this.date() + 1) - 1;
                        break;
                    case "hour":
                        e = this._d.valueOf(),
                        e += di - hi(e + (this._isUTC ? 0 : this.utcOffset() * ui), di) - 1;
                        break;
                    case "minute":
                        e = this._d.valueOf(),
                        e += ui - hi(e, ui) - 1;
                        break;
                    case "second":
                        e = this._d.valueOf(),
                        e += li - hi(e, li) - 1
                    }
                    return this._d.setTime(e),
                    r.updateOffset(this, !0),
                    this
                }
                function vi() {
                    return this._d.valueOf() - 6e4 * (this._offset || 0)
                }
                function yi() {
                    return Math.floor(this.valueOf() / 1e3)
                }
                function bi() {
                    return new Date(this.valueOf())
                }
                function _i() {
                    var t = this;
                    return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
                }
                function xi() {
                    var t = this;
                    return {
                        years: t.year(),
                        months: t.month(),
                        date: t.date(),
                        hours: t.hours(),
                        minutes: t.minutes(),
                        seconds: t.seconds(),
                        milliseconds: t.milliseconds()
                    }
                }
                function wi() {
                    return this.isValid() ? this.toISOString() : null
                }
                function ki() {
                    return v(this)
                }
                function Mi() {
                    return f({}, m(this))
                }
                function Si() {
                    return m(this).overflow
                }
                function Di() {
                    return {
                        input: this._i,
                        format: this._f,
                        locale: this._locale,
                        isUTC: this._isUTC,
                        strict: this._strict
                    }
                }
                function Ci(t, e) {
                    var n, i, a, o = this._eras || vn("en")._eras;
                    for (n = 0,
                    i = o.length; n < i; ++n) {
                        switch (typeof o[n].since) {
                        case "string":
                            a = r(o[n].since).startOf("day"),
                            o[n].since = a.valueOf()
                        }
                        switch (typeof o[n].until) {
                        case "undefined":
                            o[n].until = 1 / 0;
                            break;
                        case "string":
                            a = r(o[n].until).startOf("day").valueOf(),
                            o[n].until = a.valueOf()
                        }
                    }
                    return o
                }
                function Pi(t, e, n) {
                    var r, i, a, o, s, l = this.eras();
                    for (t = t.toUpperCase(),
                    r = 0,
                    i = l.length; r < i; ++r)
                        if (a = l[r].name.toUpperCase(),
                        o = l[r].abbr.toUpperCase(),
                        s = l[r].narrow.toUpperCase(),
                        n)
                            switch (e) {
                            case "N":
                            case "NN":
                            case "NNN":
                                if (o === t)
                                    return l[r];
                                break;
                            case "NNNN":
                                if (a === t)
                                    return l[r];
                                break;
                            case "NNNNN":
                                if (s === t)
                                    return l[r]
                            }
                        else if ([a, o, s].indexOf(t) >= 0)
                            return l[r]
                }
                function Oi(t, e) {
                    var n = t.since <= t.until ? 1 : -1;
                    return void 0 === e ? r(t.since).year() : r(t.since).year() + (e - t.offset) * n
                }
                function Ti() {
                    var t, e, n, r = this.localeData().eras();
                    for (t = 0,
                    e = r.length; t < e; ++t) {
                        if (n = this.clone().startOf("day").valueOf(),
                        r[t].since <= n && n <= r[t].until)
                            return r[t].name;
                        if (r[t].until <= n && n <= r[t].since)
                            return r[t].name
                    }
                    return ""
                }
                function Ai() {
                    var t, e, n, r = this.localeData().eras();
                    for (t = 0,
                    e = r.length; t < e; ++t) {
                        if (n = this.clone().startOf("day").valueOf(),
                        r[t].since <= n && n <= r[t].until)
                            return r[t].narrow;
                        if (r[t].until <= n && n <= r[t].since)
                            return r[t].narrow
                    }
                    return ""
                }
                function Ii() {
                    var t, e, n, r = this.localeData().eras();
                    for (t = 0,
                    e = r.length; t < e; ++t) {
                        if (n = this.clone().startOf("day").valueOf(),
                        r[t].since <= n && n <= r[t].until)
                            return r[t].abbr;
                        if (r[t].until <= n && n <= r[t].since)
                            return r[t].abbr
                    }
                    return ""
                }
                function Fi() {
                    var t, e, n, i, a = this.localeData().eras();
                    for (t = 0,
                    e = a.length; t < e; ++t)
                        if (n = a[t].since <= a[t].until ? 1 : -1,
                        i = this.clone().startOf("day").valueOf(),
                        a[t].since <= i && i <= a[t].until || a[t].until <= i && i <= a[t].since)
                            return (this.year() - r(a[t].since).year()) * n + a[t].offset;
                    return this.year()
                }
                function Ri(t) {
                    return s(this, "_erasNameRegex") || Vi.call(this),
                    t ? this._erasNameRegex : this._erasRegex
                }
                function Ni(t) {
                    return s(this, "_erasAbbrRegex") || Vi.call(this),
                    t ? this._erasAbbrRegex : this._erasRegex
                }
                function Li(t) {
                    return s(this, "_erasNarrowRegex") || Vi.call(this),
                    t ? this._erasNarrowRegex : this._erasRegex
                }
                function Ei(t, e) {
                    return e.erasAbbrRegex(t)
                }
                function Yi(t, e) {
                    return e.erasNameRegex(t)
                }
                function Wi(t, e) {
                    return e.erasNarrowRegex(t)
                }
                function zi(t, e) {
                    return e._eraYearOrdinalRegex || Pt
                }
                function Vi() {
                    var t, e, n = [], r = [], i = [], a = [], o = this.eras();
                    for (t = 0,
                    e = o.length; t < e; ++t)
                        r.push(Et(o[t].name)),
                        n.push(Et(o[t].abbr)),
                        i.push(Et(o[t].narrow)),
                        a.push(Et(o[t].name)),
                        a.push(Et(o[t].abbr)),
                        a.push(Et(o[t].narrow));
                    this._erasRegex = new RegExp("^(" + a.join("|") + ")","i"),
                    this._erasNameRegex = new RegExp("^(" + r.join("|") + ")","i"),
                    this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")","i"),
                    this._erasNarrowRegex = new RegExp("^(" + i.join("|") + ")","i")
                }
                function Bi(t, e) {
                    z(0, [t, t.length], 0, e)
                }
                function Hi(t) {
                    return Ki.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                }
                function ji(t) {
                    return Ki.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
                }
                function Ui() {
                    return ke(this.year(), 1, 4)
                }
                function Gi() {
                    return ke(this.isoWeekYear(), 1, 4)
                }
                function qi() {
                    var t = this.localeData()._week;
                    return ke(this.year(), t.dow, t.doy)
                }
                function Zi() {
                    var t = this.localeData()._week;
                    return ke(this.weekYear(), t.dow, t.doy)
                }
                function Ki(t, e, n, r, i) {
                    var a;
                    return null == t ? we(this, r, i).year : (e > (a = ke(t, r, i)) && (e = a),
                    $i.call(this, t, e, n, r, i))
                }
                function $i(t, e, n, r, i) {
                    var a = xe(t, e, n, r, i)
                      , o = be(a.year, 0, a.dayOfYear);
                    return this.year(o.getUTCFullYear()),
                    this.month(o.getUTCMonth()),
                    this.date(o.getUTCDate()),
                    this
                }
                function Xi(t) {
                    return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
                }
                z("N", 0, 0, "eraAbbr"),
                z("NN", 0, 0, "eraAbbr"),
                z("NNN", 0, 0, "eraAbbr"),
                z("NNNN", 0, 0, "eraName"),
                z("NNNNN", 0, 0, "eraNarrow"),
                z("y", ["y", 1], "yo", "eraYear"),
                z("y", ["yy", 2], 0, "eraYear"),
                z("y", ["yyy", 3], 0, "eraYear"),
                z("y", ["yyyy", 4], 0, "eraYear"),
                Rt("N", Ei),
                Rt("NN", Ei),
                Rt("NNN", Ei),
                Rt("NNNN", Yi),
                Rt("NNNNN", Wi),
                Wt(["N", "NN", "NNN", "NNNN", "NNNNN"], (function(t, e, n, r) {
                    var i = n._locale.erasParse(t, r, n._strict);
                    i ? m(n).era = i : m(n).invalidEra = t
                }
                )),
                Rt("y", Pt),
                Rt("yy", Pt),
                Rt("yyy", Pt),
                Rt("yyyy", Pt),
                Rt("yo", zi),
                Wt(["y", "yy", "yyy", "yyyy"], Ht),
                Wt(["yo"], (function(t, e, n, r) {
                    var i;
                    n._locale._eraYearOrdinalRegex && (i = t.match(n._locale._eraYearOrdinalRegex)),
                    n._locale.eraYearOrdinalParse ? e[Ht] = n._locale.eraYearOrdinalParse(t, i) : e[Ht] = parseInt(t, 10)
                }
                )),
                z(0, ["gg", 2], 0, (function() {
                    return this.weekYear() % 100
                }
                )),
                z(0, ["GG", 2], 0, (function() {
                    return this.isoWeekYear() % 100
                }
                )),
                Bi("gggg", "weekYear"),
                Bi("ggggg", "weekYear"),
                Bi("GGGG", "isoWeekYear"),
                Bi("GGGGG", "isoWeekYear"),
                nt("weekYear", "gg"),
                nt("isoWeekYear", "GG"),
                ot("weekYear", 1),
                ot("isoWeekYear", 1),
                Rt("G", Ot),
                Rt("g", Ot),
                Rt("GG", wt, yt),
                Rt("gg", wt, yt),
                Rt("GGGG", Dt, _t),
                Rt("gggg", Dt, _t),
                Rt("GGGGG", Ct, xt),
                Rt("ggggg", Ct, xt),
                zt(["gggg", "ggggg", "GGGG", "GGGGG"], (function(t, e, n, r) {
                    e[r.substr(0, 2)] = dt(t)
                }
                )),
                zt(["gg", "GG"], (function(t, e, n, i) {
                    e[i] = r.parseTwoDigitYear(t)
                }
                )),
                z("Q", 0, "Qo", "quarter"),
                nt("quarter", "Q"),
                ot("quarter", 7),
                Rt("Q", vt),
                Wt("Q", (function(t, e) {
                    e[jt] = 3 * (dt(t) - 1)
                }
                )),
                z("D", ["DD", 2], "Do", "date"),
                nt("date", "D"),
                ot("date", 9),
                Rt("D", wt),
                Rt("DD", wt, yt),
                Rt("Do", (function(t, e) {
                    return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
                }
                )),
                Wt(["D", "DD"], Ut),
                Wt("Do", (function(t, e) {
                    e[Ut] = dt(t.match(wt)[0])
                }
                ));
                var Ji = ct("Date", !0);
                function Qi(t) {
                    var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                    return null == t ? e : this.add(t - e, "d")
                }
                z("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
                nt("dayOfYear", "DDD"),
                ot("dayOfYear", 4),
                Rt("DDD", St),
                Rt("DDDD", bt),
                Wt(["DDD", "DDDD"], (function(t, e, n) {
                    n._dayOfYear = dt(t)
                }
                )),
                z("m", ["mm", 2], 0, "minute"),
                nt("minute", "m"),
                ot("minute", 14),
                Rt("m", wt),
                Rt("mm", wt, yt),
                Wt(["m", "mm"], qt);
                var ta = ct("Minutes", !1);
                z("s", ["ss", 2], 0, "second"),
                nt("second", "s"),
                ot("second", 15),
                Rt("s", wt),
                Rt("ss", wt, yt),
                Wt(["s", "ss"], Zt);
                var ea, na, ra = ct("Seconds", !1);
                for (z("S", 0, 0, (function() {
                    return ~~(this.millisecond() / 100)
                }
                )),
                z(0, ["SS", 2], 0, (function() {
                    return ~~(this.millisecond() / 10)
                }
                )),
                z(0, ["SSS", 3], 0, "millisecond"),
                z(0, ["SSSS", 4], 0, (function() {
                    return 10 * this.millisecond()
                }
                )),
                z(0, ["SSSSS", 5], 0, (function() {
                    return 100 * this.millisecond()
                }
                )),
                z(0, ["SSSSSS", 6], 0, (function() {
                    return 1e3 * this.millisecond()
                }
                )),
                z(0, ["SSSSSSS", 7], 0, (function() {
                    return 1e4 * this.millisecond()
                }
                )),
                z(0, ["SSSSSSSS", 8], 0, (function() {
                    return 1e5 * this.millisecond()
                }
                )),
                z(0, ["SSSSSSSSS", 9], 0, (function() {
                    return 1e6 * this.millisecond()
                }
                )),
                nt("millisecond", "ms"),
                ot("millisecond", 16),
                Rt("S", St, vt),
                Rt("SS", St, yt),
                Rt("SSS", St, bt),
                ea = "SSSS"; ea.length <= 9; ea += "S")
                    Rt(ea, Pt);
                function ia(t, e) {
                    e[Kt] = dt(1e3 * ("0." + t))
                }
                for (ea = "S"; ea.length <= 9; ea += "S")
                    Wt(ea, ia);
                function aa() {
                    return this._isUTC ? "UTC" : ""
                }
                function oa() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                }
                na = ct("Milliseconds", !1),
                z("z", 0, 0, "zoneAbbr"),
                z("zz", 0, 0, "zoneName");
                var sa = w.prototype;
                function la(t) {
                    return Zn(1e3 * t)
                }
                function ua() {
                    return Zn.apply(null, arguments).parseZone()
                }
                function da(t) {
                    return t
                }
                sa.add = Fr,
                sa.calendar = Vr,
                sa.clone = Br,
                sa.diff = Kr,
                sa.endOf = mi,
                sa.format = ti,
                sa.from = ei,
                sa.fromNow = ni,
                sa.to = ri,
                sa.toNow = ii,
                sa.get = gt,
                sa.invalidAt = Si,
                sa.isAfter = Hr,
                sa.isBefore = jr,
                sa.isBetween = Ur,
                sa.isSame = Gr,
                sa.isSameOrAfter = qr,
                sa.isSameOrBefore = Zr,
                sa.isValid = ki,
                sa.lang = oi,
                sa.locale = ai,
                sa.localeData = si,
                sa.max = $n,
                sa.min = Kn,
                sa.parsingFlags = Mi,
                sa.set = pt,
                sa.startOf = pi,
                sa.subtract = Rr,
                sa.toArray = _i,
                sa.toObject = xi,
                sa.toDate = bi,
                sa.toISOString = Jr,
                sa.inspect = Qr,
                "undefined" !== typeof Symbol && null != Symbol.for && (sa[Symbol.for("nodejs.util.inspect.custom")] = function() {
                    return "Moment<" + this.format() + ">"
                }
                ),
                sa.toJSON = wi,
                sa.toString = Xr,
                sa.unix = yi,
                sa.valueOf = vi,
                sa.creationData = Di,
                sa.eraName = Ti,
                sa.eraNarrow = Ai,
                sa.eraAbbr = Ii,
                sa.eraYear = Fi,
                sa.year = me,
                sa.isLeapYear = ve,
                sa.weekYear = Hi,
                sa.isoWeekYear = ji,
                sa.quarter = sa.quarters = Xi,
                sa.month = de,
                sa.daysInMonth = ce,
                sa.week = sa.weeks = Pe,
                sa.isoWeek = sa.isoWeeks = Oe,
                sa.weeksInYear = qi,
                sa.weeksInWeekYear = Zi,
                sa.isoWeeksInYear = Ui,
                sa.isoWeeksInISOWeekYear = Gi,
                sa.date = Ji,
                sa.day = sa.days = je,
                sa.weekday = Ue,
                sa.isoWeekday = Ge,
                sa.dayOfYear = Qi,
                sa.hour = sa.hours = rn,
                sa.minute = sa.minutes = ta,
                sa.second = sa.seconds = ra,
                sa.millisecond = sa.milliseconds = na,
                sa.utcOffset = gr,
                sa.utc = mr,
                sa.local = vr,
                sa.parseZone = yr,
                sa.hasAlignedHourOffset = br,
                sa.isDST = _r,
                sa.isLocal = wr,
                sa.isUtcOffset = kr,
                sa.isUtc = Mr,
                sa.isUTC = Mr,
                sa.zoneAbbr = aa,
                sa.zoneName = oa,
                sa.dates = S("dates accessor is deprecated. Use date instead.", Ji),
                sa.months = S("months accessor is deprecated. Use month instead", de),
                sa.years = S("years accessor is deprecated. Use year instead", me),
                sa.zone = S("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", pr),
                sa.isDSTShifted = S("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", xr);
                var ca = I.prototype;
                function ha(t, e, n, r) {
                    var i = vn()
                      , a = g().set(r, e);
                    return i[n](a, t)
                }
                function fa(t, e, n) {
                    if (d(t) && (e = t,
                    t = void 0),
                    t = t || "",
                    null != e)
                        return ha(t, e, n, "month");
                    var r, i = [];
                    for (r = 0; r < 12; r++)
                        i[r] = ha(t, r, n, "month");
                    return i
                }
                function ga(t, e, n, r) {
                    "boolean" === typeof t ? (d(e) && (n = e,
                    e = void 0),
                    e = e || "") : (n = e = t,
                    t = !1,
                    d(e) && (n = e,
                    e = void 0),
                    e = e || "");
                    var i, a = vn(), o = t ? a._week.dow : 0, s = [];
                    if (null != n)
                        return ha(e, (n + o) % 7, r, "day");
                    for (i = 0; i < 7; i++)
                        s[i] = ha(e, (i + o) % 7, r, "day");
                    return s
                }
                function pa(t, e) {
                    return fa(t, e, "months")
                }
                function ma(t, e) {
                    return fa(t, e, "monthsShort")
                }
                function va(t, e, n) {
                    return ga(t, e, n, "weekdays")
                }
                function ya(t, e, n) {
                    return ga(t, e, n, "weekdaysShort")
                }
                function ba(t, e, n) {
                    return ga(t, e, n, "weekdaysMin")
                }
                ca.calendar = R,
                ca.longDateFormat = G,
                ca.invalidDate = Z,
                ca.ordinal = X,
                ca.preparse = da,
                ca.postformat = da,
                ca.relativeTime = Q,
                ca.pastFuture = tt,
                ca.set = T,
                ca.eras = Ci,
                ca.erasParse = Pi,
                ca.erasConvertYear = Oi,
                ca.erasAbbrRegex = Ni,
                ca.erasNameRegex = Ri,
                ca.erasNarrowRegex = Li,
                ca.months = ae,
                ca.monthsShort = oe,
                ca.monthsParse = le,
                ca.monthsRegex = fe,
                ca.monthsShortRegex = he,
                ca.week = Me,
                ca.firstDayOfYear = Ce,
                ca.firstDayOfWeek = De,
                ca.weekdays = We,
                ca.weekdaysMin = Ve,
                ca.weekdaysShort = ze,
                ca.weekdaysParse = He,
                ca.weekdaysRegex = qe,
                ca.weekdaysShortRegex = Ze,
                ca.weekdaysMinRegex = Ke,
                ca.isPM = en,
                ca.meridiem = an,
                gn("en", {
                    eras: [{
                        since: "0001-01-01",
                        until: 1 / 0,
                        offset: 1,
                        name: "Anno Domini",
                        narrow: "AD",
                        abbr: "AD"
                    }, {
                        since: "0000-12-31",
                        until: -1 / 0,
                        offset: 1,
                        name: "Before Christ",
                        narrow: "BC",
                        abbr: "BC"
                    }],
                    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function(t) {
                        var e = t % 10;
                        return t + (1 === dt(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
                    }
                }),
                r.lang = S("moment.lang is deprecated. Use moment.locale instead.", gn),
                r.langData = S("moment.langData is deprecated. Use moment.localeData instead.", vn);
                var _a = Math.abs;
                function xa() {
                    var t = this._data;
                    return this._milliseconds = _a(this._milliseconds),
                    this._days = _a(this._days),
                    this._months = _a(this._months),
                    t.milliseconds = _a(t.milliseconds),
                    t.seconds = _a(t.seconds),
                    t.minutes = _a(t.minutes),
                    t.hours = _a(t.hours),
                    t.months = _a(t.months),
                    t.years = _a(t.years),
                    this
                }
                function wa(t, e, n, r) {
                    var i = Cr(e, n);
                    return t._milliseconds += r * i._milliseconds,
                    t._days += r * i._days,
                    t._months += r * i._months,
                    t._bubble()
                }
                function ka(t, e) {
                    return wa(this, t, e, 1)
                }
                function Ma(t, e) {
                    return wa(this, t, e, -1)
                }
                function Sa(t) {
                    return t < 0 ? Math.floor(t) : Math.ceil(t)
                }
                function Da() {
                    var t, e, n, r, i, a = this._milliseconds, o = this._days, s = this._months, l = this._data;
                    return a >= 0 && o >= 0 && s >= 0 || a <= 0 && o <= 0 && s <= 0 || (a += 864e5 * Sa(Pa(s) + o),
                    o = 0,
                    s = 0),
                    l.milliseconds = a % 1e3,
                    t = ut(a / 1e3),
                    l.seconds = t % 60,
                    e = ut(t / 60),
                    l.minutes = e % 60,
                    n = ut(e / 60),
                    l.hours = n % 24,
                    o += ut(n / 24),
                    s += i = ut(Ca(o)),
                    o -= Sa(Pa(i)),
                    r = ut(s / 12),
                    s %= 12,
                    l.days = o,
                    l.months = s,
                    l.years = r,
                    this
                }
                function Ca(t) {
                    return 4800 * t / 146097
                }
                function Pa(t) {
                    return 146097 * t / 4800
                }
                function Oa(t) {
                    if (!this.isValid())
                        return NaN;
                    var e, n, r = this._milliseconds;
                    if ("month" === (t = rt(t)) || "quarter" === t || "year" === t)
                        switch (e = this._days + r / 864e5,
                        n = this._months + Ca(e),
                        t) {
                        case "month":
                            return n;
                        case "quarter":
                            return n / 3;
                        case "year":
                            return n / 12
                        }
                    else
                        switch (e = this._days + Math.round(Pa(this._months)),
                        t) {
                        case "week":
                            return e / 7 + r / 6048e5;
                        case "day":
                            return e + r / 864e5;
                        case "hour":
                            return 24 * e + r / 36e5;
                        case "minute":
                            return 1440 * e + r / 6e4;
                        case "second":
                            return 86400 * e + r / 1e3;
                        case "millisecond":
                            return Math.floor(864e5 * e) + r;
                        default:
                            throw new Error("Unknown unit " + t)
                        }
                }
                function Ta() {
                    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * dt(this._months / 12) : NaN
                }
                function Aa(t) {
                    return function() {
                        return this.as(t)
                    }
                }
                var Ia = Aa("ms")
                  , Fa = Aa("s")
                  , Ra = Aa("m")
                  , Na = Aa("h")
                  , La = Aa("d")
                  , Ea = Aa("w")
                  , Ya = Aa("M")
                  , Wa = Aa("Q")
                  , za = Aa("y");
                function Va() {
                    return Cr(this)
                }
                function Ba(t) {
                    return t = rt(t),
                    this.isValid() ? this[t + "s"]() : NaN
                }
                function Ha(t) {
                    return function() {
                        return this.isValid() ? this._data[t] : NaN
                    }
                }
                var ja = Ha("milliseconds")
                  , Ua = Ha("seconds")
                  , Ga = Ha("minutes")
                  , qa = Ha("hours")
                  , Za = Ha("days")
                  , Ka = Ha("months")
                  , $a = Ha("years");
                function Xa() {
                    return ut(this.days() / 7)
                }
                var Ja = Math.round
                  , Qa = {
                    ss: 44,
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    w: null,
                    M: 11
                };
                function to(t, e, n, r, i) {
                    return i.relativeTime(e || 1, !!n, t, r)
                }
                function eo(t, e, n, r) {
                    var i = Cr(t).abs()
                      , a = Ja(i.as("s"))
                      , o = Ja(i.as("m"))
                      , s = Ja(i.as("h"))
                      , l = Ja(i.as("d"))
                      , u = Ja(i.as("M"))
                      , d = Ja(i.as("w"))
                      , c = Ja(i.as("y"))
                      , h = a <= n.ss && ["s", a] || a < n.s && ["ss", a] || o <= 1 && ["m"] || o < n.m && ["mm", o] || s <= 1 && ["h"] || s < n.h && ["hh", s] || l <= 1 && ["d"] || l < n.d && ["dd", l];
                    return null != n.w && (h = h || d <= 1 && ["w"] || d < n.w && ["ww", d]),
                    (h = h || u <= 1 && ["M"] || u < n.M && ["MM", u] || c <= 1 && ["y"] || ["yy", c])[2] = e,
                    h[3] = +t > 0,
                    h[4] = r,
                    to.apply(null, h)
                }
                function no(t) {
                    return void 0 === t ? Ja : "function" === typeof t && (Ja = t,
                    !0)
                }
                function ro(t, e) {
                    return void 0 !== Qa[t] && (void 0 === e ? Qa[t] : (Qa[t] = e,
                    "s" === t && (Qa.ss = e - 1),
                    !0))
                }
                function io(t, e) {
                    if (!this.isValid())
                        return this.localeData().invalidDate();
                    var n, r, i = !1, a = Qa;
                    return "object" === typeof t && (e = t,
                    t = !1),
                    "boolean" === typeof t && (i = t),
                    "object" === typeof e && (a = Object.assign({}, Qa, e),
                    null != e.s && null == e.ss && (a.ss = e.s - 1)),
                    r = eo(this, !i, a, n = this.localeData()),
                    i && (r = n.pastFuture(+this, r)),
                    n.postformat(r)
                }
                var ao = Math.abs;
                function oo(t) {
                    return (t > 0) - (t < 0) || +t
                }
                function so() {
                    if (!this.isValid())
                        return this.localeData().invalidDate();
                    var t, e, n, r, i, a, o, s, l = ao(this._milliseconds) / 1e3, u = ao(this._days), d = ao(this._months), c = this.asSeconds();
                    return c ? (t = ut(l / 60),
                    e = ut(t / 60),
                    l %= 60,
                    t %= 60,
                    n = ut(d / 12),
                    d %= 12,
                    r = l ? l.toFixed(3).replace(/\.?0+$/, "") : "",
                    i = c < 0 ? "-" : "",
                    a = oo(this._months) !== oo(c) ? "-" : "",
                    o = oo(this._days) !== oo(c) ? "-" : "",
                    s = oo(this._milliseconds) !== oo(c) ? "-" : "",
                    i + "P" + (n ? a + n + "Y" : "") + (d ? a + d + "M" : "") + (u ? o + u + "D" : "") + (e || t || l ? "T" : "") + (e ? s + e + "H" : "") + (t ? s + t + "M" : "") + (l ? s + r + "S" : "")) : "P0D"
                }
                var lo = ar.prototype;
                return lo.isValid = rr,
                lo.abs = xa,
                lo.add = ka,
                lo.subtract = Ma,
                lo.as = Oa,
                lo.asMilliseconds = Ia,
                lo.asSeconds = Fa,
                lo.asMinutes = Ra,
                lo.asHours = Na,
                lo.asDays = La,
                lo.asWeeks = Ea,
                lo.asMonths = Ya,
                lo.asQuarters = Wa,
                lo.asYears = za,
                lo.valueOf = Ta,
                lo._bubble = Da,
                lo.clone = Va,
                lo.get = Ba,
                lo.milliseconds = ja,
                lo.seconds = Ua,
                lo.minutes = Ga,
                lo.hours = qa,
                lo.days = Za,
                lo.weeks = Xa,
                lo.months = Ka,
                lo.years = $a,
                lo.humanize = io,
                lo.toISOString = so,
                lo.toString = so,
                lo.toJSON = so,
                lo.locale = ai,
                lo.localeData = si,
                lo.toIsoString = S("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", so),
                lo.lang = oi,
                z("X", 0, 0, "unix"),
                z("x", 0, 0, "valueOf"),
                Rt("x", Ot),
                Rt("X", It),
                Wt("X", (function(t, e, n) {
                    n._d = new Date(1e3 * parseFloat(t))
                }
                )),
                Wt("x", (function(t, e, n) {
                    n._d = new Date(dt(t))
                }
                )),
                r.version = "2.29.1",
                i(Zn),
                r.fn = sa,
                r.min = Jn,
                r.max = Qn,
                r.now = tr,
                r.utc = g,
                r.unix = la,
                r.months = pa,
                r.isDate = c,
                r.locale = gn,
                r.invalid = y,
                r.duration = Cr,
                r.isMoment = k,
                r.weekdays = va,
                r.parseZone = ua,
                r.localeData = vn,
                r.isDuration = or,
                r.monthsShort = ma,
                r.weekdaysMin = ba,
                r.defineLocale = pn,
                r.updateLocale = mn,
                r.locales = yn,
                r.weekdaysShort = ya,
                r.normalizeUnits = rt,
                r.relativeTimeRounding = no,
                r.relativeTimeThreshold = ro,
                r.calendarFormat = zr,
                r.prototype = sa,
                r.HTML5_FMT = {
                    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                    DATE: "YYYY-MM-DD",
                    TIME: "HH:mm",
                    TIME_SECONDS: "HH:mm:ss",
                    TIME_MS: "HH:mm:ss.SSS",
                    WEEK: "GGGG-[W]WW",
                    MONTH: "YYYY-MM"
                },
                r
            }()
        }
        ).call(this, n(60)(t))
    },
    1088: function(t, e, n) {
        var r = n(818);
        t.exports = function(t, e) {
            return r(t, e)
        }
    },
    1089: function(t, e, n) {
        var r = n(160)
          , i = n(820)((function(t, e, n) {
            r(t, n, e)
        }
        ));
        t.exports = i
    },
    820: function(t, e, n) {
        var r = n(821)
          , i = n(822)
          , a = n(790)
          , o = n(105);
        t.exports = function(t, e) {
            return function(n, s) {
                var l = o(n) ? r : i
                  , u = e ? e() : {};
                return l(n, t, a(s, 2), u)
            }
        }
    },
    821: function(t, e) {
        t.exports = function(t, e, n, r) {
            for (var i = -1, a = null == t ? 0 : t.length; ++i < a; ) {
                var o = t[i];
                e(r, o, n(o), t)
            }
            return r
        }
    },
    822: function(t, e, n) {
        var r = n(794);
        t.exports = function(t, e, n, i) {
            return r(t, (function(t, r, a) {
                e(i, t, n(t), a)
            }
            )),
            i
        }
    }
}]);
//# sourceMappingURL=16.1e1c77c6.chunk.js.map
