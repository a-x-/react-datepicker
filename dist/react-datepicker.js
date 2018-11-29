!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(
        exports,
        require("react"),
        require("prop-types"),
        require("classnames"),
        require("react-onclickoutside"),
        require("moment"),
        require("react-dom"),
        require("react-popper")
      )
    : "function" == typeof define && define.amd
      ? define([
          "exports",
          "react",
          "prop-types",
          "classnames",
          "react-onclickoutside",
          "moment",
          "react-dom",
          "react-popper"
        ], t)
      : t(
          (e.DatePicker = {}),
          e.React,
          e.PropTypes,
          e.classNames,
          e.onClickOutside,
          e.moment,
          e.ReactDOM,
          e.ReactPopper
        );
})(this, function(e, h, t, d, n, u, i, c) {
  "use strict";
  (h = h && h.hasOwnProperty("default") ? h.default : h),
    (t = t && t.hasOwnProperty("default") ? t.default : t),
    (d = d && d.hasOwnProperty("default") ? d.default : d),
    (n = n && n.hasOwnProperty("default") ? n.default : n),
    (u = u && u.hasOwnProperty("default") ? u.default : u),
    (i = i && i.hasOwnProperty("default") ? i.default : i);
  var f =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function(e) {
            return typeof e;
          }
        : function(e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          },
    m = function(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    },
    r = (function() {
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      };
    })(),
    l =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
    p = function(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    },
    y = function(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    };
  var o = (function(t) {
    function n(e) {
      m(this, n);
      var o = y(this, t.call(this, e));
      return (
        (o.renderOptions = function() {
          var t = o.props.year,
            e = o.state.yearsList.map(function(e) {
              return h.createElement(
                "div",
                {
                  className:
                    t === e
                      ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                      : "react-datepicker__year-option",
                  key: e,
                  ref: e,
                  onClick: o.onChange.bind(o, e)
                },
                t === e
                  ? h.createElement(
                      "span",
                      { className: "react-datepicker__year-option--selected" },
                      "✓"
                    )
                  : "",
                e
              );
            }),
            n = o.props.minDate ? o.props.minDate.year() : null,
            r = o.props.maxDate ? o.props.maxDate.year() : null;
          return (
            (r &&
              o.state.yearsList.find(function(e) {
                return e === r;
              })) ||
              e.unshift(
                h.createElement(
                  "div",
                  {
                    className: "react-datepicker__year-option",
                    ref: "upcoming",
                    key: "upcoming",
                    onClick: o.incrementYears
                  },
                  h.createElement("a", {
                    className:
                      "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming"
                  })
                )
              ),
            (n &&
              o.state.yearsList.find(function(e) {
                return e === n;
              })) ||
              e.push(
                h.createElement(
                  "div",
                  {
                    className: "react-datepicker__year-option",
                    ref: "previous",
                    key: "previous",
                    onClick: o.decrementYears
                  },
                  h.createElement("a", {
                    className:
                      "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous"
                  })
                )
              ),
            e
          );
        }),
        (o.onChange = function(e) {
          o.props.onChange(e);
        }),
        (o.handleClickOutside = function() {
          o.props.onCancel();
        }),
        (o.shiftYears = function(t) {
          var e = o.state.yearsList.map(function(e) {
            return e + t;
          });
          o.setState({ yearsList: e });
        }),
        (o.incrementYears = function() {
          return o.shiftYears(1);
        }),
        (o.decrementYears = function() {
          return o.shiftYears(-1);
        }),
        (o.state = {
          yearsList: (function(e, t, n, r) {
            for (var o = [], a = 0; a < 2 * t + 1; a++) {
              var s = e + t - a,
                p = !0;
              n && (p = n.year() <= s),
                r && p && (p = r.year() >= s),
                p && o.push(s);
            }
            return o;
          })(
            o.props.year,
            e.yearDropdownItemNumber || (e.scrollableYearDropdown ? 10 : 5),
            o.props.minDate,
            o.props.maxDate
          )
        }),
        o
      );
    }
    return (
      p(n, t),
      (n.prototype.render = function() {
        var e = d({
          "react-datepicker__year-dropdown": !0,
          "react-datepicker__year-dropdown--scrollable": this.props
            .scrollableYearDropdown
        });
        return h.createElement("div", { className: e }, this.renderOptions());
      }),
      n
    );
  })(h.Component);
  o.propTypes = {
    minDate: t.object,
    maxDate: t.object,
    onCancel: t.func.isRequired,
    onChange: t.func.isRequired,
    scrollableYearDropdown: t.bool,
    year: t.number.isRequired,
    yearDropdownItemNumber: t.number
  };
  var s = {
    1: "mon",
    2: "tue",
    3: "wed",
    4: "thu",
    5: "fri",
    6: "sat",
    7: "sun"
  };
  function a(e, t, n) {
    return e.set(t, n);
  }
  function D(e, t, n) {
    return e.add(t, n);
  }
  function g(e, t, n) {
    return e.subtract(t, n);
  }
  function b(e, t) {
    return e.get(t);
  }
  function v(e, t) {
    return e.startOf(t);
  }
  function w(e) {
    return u(e);
  }
  function k(e) {
    return null == e
      ? w()
      : ((t = e),
        u()
          .utc()
          .utcOffset(t));
    var t;
  }
  function C(e) {
    return e.clone();
  }
  function S(e) {
    return u.isMoment(e);
  }
  function _(e, t) {
    return e.format(t);
  }
  function M(e, t) {
    return e.set({ hour: t.hour, minute: t.minute, second: t.second }), e;
  }
  function N(e, t) {
    return a(e, "month", t);
  }
  function O(e, t) {
    return a(e, "year", t);
  }
  function T(e) {
    return b(e, "minute");
  }
  function E(e) {
    return b(e, "hour");
  }
  function x(e) {
    return b(e, "month");
  }
  function j(e) {
    return b(e, "year");
  }
  function Y(e) {
    return b(e, "date");
  }
  function P(e) {
    return v(e, "week");
  }
  function R(e) {
    return v(e, "month");
  }
  function F(e, t) {
    return D(e, t, "minutes");
  }
  function I(e, t) {
    return D(e, t, "days");
  }
  function W(e, t) {
    return D(e, t, "weeks");
  }
  function B(e, t) {
    return D(e, t, "months");
  }
  function q(e, t) {
    return g(e, t, "months");
  }
  function L(e, t) {
    return e.isBefore(t);
  }
  function H(e, t) {
    return e.isAfter(t);
  }
  function V(e, t) {
    return e && t ? e.isSame(t, "year") : !e && !t;
  }
  function A(e, t) {
    return e && t ? e.isSame(t, "month") : !e && !t;
  }
  function K(e, t) {
    return e && t ? e.isSame(t, "day") : !e && !t;
  }
  function U(e, t, n) {
    var r = t
        .clone()
        .startOf("day")
        .subtract(1, "seconds"),
      o = n
        .clone()
        .startOf("day")
        .add(1, "seconds");
    return e
      .clone()
      .startOf("day")
      .isBetween(r, o);
  }
  function z(e, t) {
    return e.clone().locale(t || u.locale());
  }
  function G(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
      n = e.minDate,
      r = e.maxDate,
      o = e.excludeDates,
      a = e.includeDates,
      s = e.filterDate;
    return (
      (n && t.isBefore(n, "day")) ||
      (r && t.isAfter(r, "day")) ||
      (o &&
        o.some(function(e) {
          return K(t, e);
        })) ||
      (a &&
        !a.some(function(e) {
          return K(t, e);
        })) ||
      (s && !s(t.clone())) ||
      !1
    );
  }
  function J(e, t) {
    for (var n = t.length, r = 0; r < n; r++)
      if (
        t[r].get("hours") === e.get("hours") &&
        t[r].get("minutes") === e.get("minutes")
      )
        return !0;
    return !1;
  }
  function Q(e, t) {
    var n = t.minTime,
      r = t.maxTime;
    if (!n || !r) throw Error("Both minTime and maxTime props required");
    var o = u()
        .hours(0)
        .minutes(0)
        .seconds(0),
      a = o
        .clone()
        .hours(e.get("hours"))
        .minutes(e.get("minutes")),
      s = o
        .clone()
        .hours(n.get("hours"))
        .minutes(n.get("minutes")),
      p = o
        .clone()
        .hours(r.get("hours"))
        .minutes(r.get("minutes"));
    return !(a.isSameOrAfter(s) && a.isSameOrBefore(p));
  }
  function X(e, t) {
    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
      r = n.minDate,
      o = n.includeDates,
      a = e.clone().subtract(1, t);
    return (
      (r && a.isBefore(r, t)) ||
      (o &&
        o.every(function(e) {
          return a.isBefore(e, t);
        })) ||
      !1
    );
  }
  function Z(e, t) {
    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
      r = n.maxDate,
      o = n.includeDates,
      a = e.clone().add(1, t);
    return (
      (r && a.isAfter(r, t)) ||
      (o &&
        o.every(function(e) {
          return a.isAfter(e, t);
        })) ||
      !1
    );
  }
  function $(e) {
    var t = e.minDate,
      n = e.includeDates;
    return n && t
      ? u.min(
          n.filter(function(e) {
            return t.isSameOrBefore(e, "day");
          })
        )
      : n
        ? u.min(n)
        : t;
  }
  function ee(e) {
    var t = e.maxDate,
      n = e.includeDates;
    return n && t
      ? u.max(
          n.filter(function(e) {
            return t.isSameOrAfter(e, "day");
          })
        )
      : n
        ? u.max(n)
        : t;
  }
  function te() {
    for (
      var e =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
        t =
          1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : "react-datepicker__day--highlighted",
        n = new Map(),
        r = 0,
        o = e.length;
      r < o;
      r++
    ) {
      var a = e[r];
      if (S(a)) {
        var s = a.format("MM.DD.YYYY"),
          p = n.get(s) || [];
        p.includes(t) || (p.push(t), n.set(s, p));
      } else if ("object" === (void 0 === a ? "undefined" : f(a))) {
        var i = Object.keys(a),
          c = i[0],
          l = a[i[0]];
        if ("string" == typeof c && l.constructor === Array)
          for (var d = 0, u = l.length; d < u; d++) {
            var h = l[d].format("MM.DD.YYYY"),
              m = n.get(h) || [];
            m.includes(c) || (m.push(c), n.set(h, m));
          }
      }
    }
    return n;
  }
  function ne(e, t, n, r, o) {
    for (var a, s, p = o.length, i = [], c = 0; c < p; c++) {
      var l = F(((a = C(e)), (s = E(o[c])), D(a, s, "hours")), T(o[c])),
        d = F(C(e), (n + 1) * r);
      l.isBetween(t, d) && i.push(o[c]);
    }
    return i;
  }
  var re = n(o),
    oe = (function(a) {
      function s() {
        var e, o;
        m(this, s);
        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        return (
          ((e = o = y(this, a.call.apply(a, [this].concat(n)))).state = {
            dropdownVisible: !1
          }),
          (o.renderSelectOptions = function() {
            for (
              var e = o.props.minDate ? j(o.props.minDate) : 1900,
                t = o.props.maxDate ? j(o.props.maxDate) : 2100,
                n = [],
                r = e;
              r <= t;
              r++
            )
              n.push(h.createElement("option", { key: r, value: r }, r));
            return n;
          }),
          (o.onSelectChange = function(e) {
            o.onChange(e.target.value);
          }),
          (o.renderSelectMode = function() {
            return h.createElement(
              "select",
              {
                value: o.props.year,
                className: "react-datepicker__year-select",
                onChange: o.onSelectChange
              },
              o.renderSelectOptions()
            );
          }),
          (o.renderReadView = function(e) {
            return h.createElement(
              "div",
              {
                key: "read",
                style: { visibility: e ? "visible" : "hidden" },
                className: "react-datepicker__year-read-view",
                onClick: function(e) {
                  return o.toggleDropdown(e);
                }
              },
              h.createElement("span", {
                className: "react-datepicker__year-read-view--down-arrow"
              }),
              h.createElement(
                "span",
                {
                  className: "react-datepicker__year-read-view--selected-year"
                },
                o.props.year
              )
            );
          }),
          (o.renderDropdown = function() {
            return h.createElement(re, {
              key: "dropdown",
              ref: "options",
              year: o.props.year,
              onChange: o.onChange,
              onCancel: o.toggleDropdown,
              minDate: o.props.minDate,
              maxDate: o.props.maxDate,
              scrollableYearDropdown: o.props.scrollableYearDropdown,
              yearDropdownItemNumber: o.props.yearDropdownItemNumber
            });
          }),
          (o.renderScrollMode = function() {
            var e = o.state.dropdownVisible,
              t = [o.renderReadView(!e)];
            return e && t.unshift(o.renderDropdown()), t;
          }),
          (o.onChange = function(e) {
            o.toggleDropdown(), e !== o.props.year && o.props.onChange(e);
          }),
          (o.toggleDropdown = function(e) {
            o.setState(
              { dropdownVisible: !o.state.dropdownVisible },
              function() {
                o.props.adjustDateOnChange &&
                  o.handleYearChange(o.props.date, e);
              }
            );
          }),
          (o.handleYearChange = function(e, t) {
            o.onSelect(e, t), o.setOpen();
          }),
          (o.onSelect = function(e, t) {
            o.props.onSelect && o.props.onSelect(e, t);
          }),
          (o.setOpen = function() {
            o.props.setOpen && o.props.setOpen(!0);
          }),
          y(o, e)
        );
      }
      return (
        p(s, a),
        (s.prototype.render = function() {
          var e = void 0;
          switch (this.props.dropdownMode) {
            case "scroll":
              e = this.renderScrollMode();
              break;
            case "select":
              e = this.renderSelectMode();
          }
          return h.createElement(
            "div",
            {
              className:
                "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--" +
                this.props.dropdownMode
            },
            e
          );
        }),
        s
      );
    })(h.Component);
  oe.propTypes = {
    adjustDateOnChange: t.bool,
    dropdownMode: t.oneOf(["scroll", "select"]).isRequired,
    maxDate: t.object,
    minDate: t.object,
    onChange: t.func.isRequired,
    scrollableYearDropdown: t.bool,
    year: t.number.isRequired,
    yearDropdownItemNumber: t.number,
    date: t.object,
    onSelect: t.func,
    setOpen: t.func
  };
  var ae = (function(a) {
    function s() {
      var e, n;
      m(this, s);
      for (var t = arguments.length, r = Array(t), o = 0; o < t; o++)
        r[o] = arguments[o];
      return (
        ((e = n = y(
          this,
          a.call.apply(a, [this].concat(r))
        )).renderOptions = function() {
          return n.props.monthNames.map(function(e, t) {
            return h.createElement(
              "div",
              {
                className:
                  n.props.month === t
                    ? "react-datepicker__month-option --selected_month"
                    : "react-datepicker__month-option",
                key: e,
                ref: e,
                onClick: n.onChange.bind(n, t)
              },
              n.props.month === t
                ? h.createElement(
                    "span",
                    { className: "react-datepicker__month-option--selected" },
                    "✓"
                  )
                : "",
              e
            );
          });
        }),
        (n.onChange = function(e) {
          return n.props.onChange(e);
        }),
        (n.handleClickOutside = function() {
          return n.props.onCancel();
        }),
        y(n, e)
      );
    }
    return (
      p(s, a),
      (s.prototype.render = function() {
        return h.createElement(
          "div",
          { className: "react-datepicker__month-dropdown" },
          this.renderOptions()
        );
      }),
      s
    );
  })(h.Component);
  ae.propTypes = {
    onCancel: t.func.isRequired,
    onChange: t.func.isRequired,
    month: t.number.isRequired,
    monthNames: t.arrayOf(t.string.isRequired).isRequired
  };
  var se = n(ae),
    pe = (function(a) {
      function s() {
        var e, r;
        m(this, s);
        for (var t = arguments.length, n = Array(t), o = 0; o < t; o++)
          n[o] = arguments[o];
        return (
          ((e = r = y(this, a.call.apply(a, [this].concat(n)))).state = {
            dropdownVisible: !1
          }),
          (r.renderSelectOptions = function(e) {
            return e.map(function(e, t) {
              return h.createElement("option", { key: t, value: t }, e);
            });
          }),
          (r.renderSelectMode = function(e) {
            return h.createElement(
              "select",
              {
                value: r.props.month,
                className: "react-datepicker__month-select",
                onChange: function(e) {
                  return r.onChange(e.target.value);
                }
              },
              r.renderSelectOptions(e)
            );
          }),
          (r.renderReadView = function(e, t) {
            return h.createElement(
              "div",
              {
                key: "read",
                style: { visibility: e ? "visible" : "hidden" },
                className: "react-datepicker__month-read-view",
                onClick: r.toggleDropdown
              },
              h.createElement("span", {
                className: "react-datepicker__month-read-view--down-arrow"
              }),
              h.createElement(
                "span",
                {
                  className: "react-datepicker__month-read-view--selected-month"
                },
                t[r.props.month]
              )
            );
          }),
          (r.renderDropdown = function(e) {
            return h.createElement(se, {
              key: "dropdown",
              ref: "options",
              month: r.props.month,
              monthNames: e,
              onChange: r.onChange,
              onCancel: r.toggleDropdown
            });
          }),
          (r.renderScrollMode = function(e) {
            var t = r.state.dropdownVisible,
              n = [r.renderReadView(!t, e)];
            return t && n.unshift(r.renderDropdown(e)), n;
          }),
          (r.onChange = function(e) {
            r.toggleDropdown(), e !== r.props.month && r.props.onChange(e);
          }),
          (r.toggleDropdown = function() {
            return r.setState({ dropdownVisible: !r.state.dropdownVisible });
          }),
          y(r, e)
        );
      }
      return (
        p(s, a),
        (s.prototype.render = function() {
          var r = this,
            o = u.localeData(this.props.locale),
            e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
              this.props.useShortMonthInDropdown
                ? function(e) {
                    return (t = o), (n = w({ M: e })), t.monthsShort(n);
                    var t, n;
                  }
                : function(e) {
                    return (
                      (t = o),
                      (n = w({ M: e })),
                      t.months(n, r.props.dateFormat)
                    );
                    var t, n;
                  }
            ),
            t = void 0;
          switch (this.props.dropdownMode) {
            case "scroll":
              t = this.renderScrollMode(e);
              break;
            case "select":
              t = this.renderSelectMode(e);
          }
          return h.createElement(
            "div",
            {
              className:
                "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--" +
                this.props.dropdownMode
            },
            t
          );
        }),
        s
      );
    })(h.Component);
  pe.propTypes = {
    dropdownMode: t.oneOf(["scroll", "select"]).isRequired,
    locale: t.string,
    dateFormat: t.string.isRequired,
    month: t.number.isRequired,
    onChange: t.func.isRequired,
    useShortMonthInDropdown: t.bool
  };
  var ie = (function(t) {
    function n(e) {
      m(this, n);
      var r = y(this, t.call(this, e));
      return (
        (r.renderOptions = function() {
          return r.state.monthYearsList.map(function(e) {
            var t = e.valueOf(),
              n = V(r.props.date, e) && A(r.props.date, e);
            return h.createElement(
              "div",
              {
                className: n
                  ? "react-datepicker__month-year-option --selected_month-year"
                  : "react-datepicker__month-year-option",
                key: t,
                ref: t,
                onClick: r.onChange.bind(r, t)
              },
              n
                ? h.createElement(
                    "span",
                    {
                      className: "react-datepicker__month-year-option--selected"
                    },
                    "✓"
                  )
                : "",
              _(e, r.props.dateFormat)
            );
          });
        }),
        (r.onChange = function(e) {
          return r.props.onChange(e);
        }),
        (r.handleClickOutside = function() {
          r.props.onCancel();
        }),
        (r.state = {
          monthYearsList: (function(e, t) {
            for (var n = [], r = R(C(e)), o = R(C(t)); !H(r, o); )
              n.push(C(r)), B(r, 1);
            return n;
          })(r.props.minDate, r.props.maxDate)
        }),
        r
      );
    }
    return (
      p(n, t),
      (n.prototype.render = function() {
        var e = d({
          "react-datepicker__month-year-dropdown": !0,
          "react-datepicker__month-year-dropdown--scrollable": this.props
            .scrollableMonthYearDropdown
        });
        return h.createElement("div", { className: e }, this.renderOptions());
      }),
      n
    );
  })(h.Component);
  ie.propTypes = {
    minDate: t.object.isRequired,
    maxDate: t.object.isRequired,
    onCancel: t.func.isRequired,
    onChange: t.func.isRequired,
    scrollableMonthYearDropdown: t.bool,
    date: t.object.isRequired,
    dateFormat: t.string.isRequired
  };
  var ce = n(ie),
    le = (function(a) {
      function s() {
        var e, o;
        m(this, s);
        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        return (
          ((e = o = y(this, a.call.apply(a, [this].concat(n)))).state = {
            dropdownVisible: !1
          }),
          (o.renderSelectOptions = function() {
            for (
              var e = R(z(o.props.minDate, o.props.locale)),
                t = R(z(o.props.maxDate, o.props.locale)),
                n = [];
              !H(e, t);

            ) {
              var r = e.valueOf();
              n.push(
                h.createElement(
                  "option",
                  { key: r, value: r },
                  _(e, o.props.dateFormat)
                )
              ),
                B(e, 1);
            }
            return n;
          }),
          (o.onSelectChange = function(e) {
            o.onChange(e.target.value);
          }),
          (o.renderSelectMode = function() {
            return h.createElement(
              "select",
              {
                value: R(o.props.date).valueOf(),
                className: "react-datepicker__month-year-select",
                onChange: o.onSelectChange
              },
              o.renderSelectOptions()
            );
          }),
          (o.renderReadView = function(e) {
            var t = _(z(w(o.props.date), o.props.locale), o.props.dateFormat);
            return h.createElement(
              "div",
              {
                key: "read",
                style: { visibility: e ? "visible" : "hidden" },
                className: "react-datepicker__month-year-read-view",
                onClick: function(e) {
                  return o.toggleDropdown(e);
                }
              },
              h.createElement("span", {
                className: "react-datepicker__month-year-read-view--down-arrow"
              }),
              h.createElement(
                "span",
                {
                  className:
                    "react-datepicker__month-year-read-view--selected-month-year"
                },
                t
              )
            );
          }),
          (o.renderDropdown = function() {
            return h.createElement(ce, {
              key: "dropdown",
              ref: "options",
              date: o.props.date,
              dateFormat: o.props.dateFormat,
              onChange: o.onChange,
              onCancel: o.toggleDropdown,
              minDate: z(o.props.minDate, o.props.locale),
              maxDate: z(o.props.maxDate, o.props.locale),
              scrollableMonthYearDropdown: o.props.scrollableMonthYearDropdown
            });
          }),
          (o.renderScrollMode = function() {
            var e = o.state.dropdownVisible,
              t = [o.renderReadView(!e)];
            return e && t.unshift(o.renderDropdown()), t;
          }),
          (o.onChange = function(e) {
            o.toggleDropdown();
            var t = w(parseInt(e));
            (V(o.props.date, t) && A(o.props.date, t)) || o.props.onChange(t);
          }),
          (o.toggleDropdown = function() {
            return o.setState({ dropdownVisible: !o.state.dropdownVisible });
          }),
          y(o, e)
        );
      }
      return (
        p(s, a),
        (s.prototype.render = function() {
          var e = void 0;
          switch (this.props.dropdownMode) {
            case "scroll":
              e = this.renderScrollMode();
              break;
            case "select":
              e = this.renderSelectMode();
          }
          return h.createElement(
            "div",
            {
              className:
                "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--" +
                this.props.dropdownMode
            },
            e
          );
        }),
        s
      );
    })(h.Component);
  le.propTypes = {
    dropdownMode: t.oneOf(["scroll", "select"]).isRequired,
    dateFormat: t.string.isRequired,
    locale: t.string,
    maxDate: t.object.isRequired,
    minDate: t.object.isRequired,
    date: t.object.isRequired,
    onChange: t.func.isRequired,
    scrollableMonthYearDropdown: t.bool
  };
  var de = (function(o) {
    function a() {
      var e, p;
      m(this, a);
      for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      return (
        ((e = p = y(
          this,
          o.call.apply(o, [this].concat(n))
        )).handleClick = function(e) {
          !p.isDisabled() && p.props.onClick && p.props.onClick(e);
        }),
        (p.handleMouseEnter = function(e) {
          !p.isDisabled() && p.props.onMouseEnter && p.props.onMouseEnter(e);
        }),
        (p.isSameDay = function(e) {
          return K(p.props.day, e);
        }),
        (p.isKeyboardSelected = function() {
          return (
            !p.props.disabledKeyboardNavigation &&
            !p.props.inline &&
            !p.isSameDay(p.props.selected) &&
            p.isSameDay(p.props.preSelection)
          );
        }),
        (p.isDisabled = function() {
          return G(p.props.day, p.props);
        }),
        (p.getHighLightedClass = function(e) {
          var t = p.props,
            n = t.highlightDates;
          if (!n) return !1;
          var r = t.day.format("MM.DD.YYYY");
          return n.get(r);
        }),
        (p.isInRange = function() {
          var e = p.props,
            t = e.startDate,
            n = e.endDate;
          return !(!t || !n) && U(e.day, t, n);
        }),
        (p.isInSelectingRange = function() {
          var e = p.props,
            t = e.day,
            n = e.selectsStart,
            r = e.selectsEnd,
            o = e.selectingDate,
            a = e.startDate,
            s = e.endDate;
          return (
            !((!n && !r) || !o || p.isDisabled()) &&
            (n && s && o.isSameOrBefore(s)
              ? U(t, o, s)
              : !!(r && a && o.isSameOrAfter(a)) && U(t, a, o))
          );
        }),
        (p.isSelectingRangeStart = function() {
          if (!p.isInSelectingRange()) return !1;
          var e = p.props,
            t = e.day;
          return K(t, e.selectsStart ? e.selectingDate : e.startDate);
        }),
        (p.isSelectingRangeEnd = function() {
          if (!p.isInSelectingRange()) return !1;
          var e = p.props,
            t = e.day;
          return K(t, e.selectsEnd ? e.selectingDate : e.endDate);
        }),
        (p.isRangeStart = function() {
          var e = p.props,
            t = e.startDate;
          return !(!t || !e.endDate) && K(t, e.day);
        }),
        (p.isRangeEnd = function() {
          var e = p.props,
            t = e.endDate;
          return !(!e.startDate || !t) && K(t, e.day);
        }),
        (p.isWeekend = function() {
          var e = b(p.props.day, "day");
          return 0 === e || 6 === e;
        }),
        (p.isOutsideMonth = function() {
          return void 0 !== p.props.month && p.props.month !== x(p.props.day);
        }),
        (p.getClassNames = function(e) {
          var t = p.props.dayClassName ? p.props.dayClassName(e) : void 0;
          return d(
            "react-datepicker__day",
            t,
            "react-datepicker__day--" + s[p.props.day.isoWeekday()],
            {
              "react-datepicker__day--disabled": p.isDisabled(),
              "react-datepicker__day--selected": p.isSameDay(p.props.selected),
              "react-datepicker__day--keyboard-selected": p.isKeyboardSelected(),
              "react-datepicker__day--range-start": p.isRangeStart(),
              "react-datepicker__day--range-end": p.isRangeEnd(),
              "react-datepicker__day--in-range": p.isInRange(),
              "react-datepicker__day--in-selecting-range": p.isInSelectingRange(),
              "react-datepicker__day--selecting-range-start": p.isSelectingRangeStart(),
              "react-datepicker__day--selecting-range-end": p.isSelectingRangeEnd(),
              "react-datepicker__day--today": p.isSameDay(k(p.props.utcOffset)),
              "react-datepicker__day--weekend": p.isWeekend(),
              "react-datepicker__day--outside-month": p.isOutsideMonth()
            },
            p.getHighLightedClass("react-datepicker__day--highlighted")
          );
        }),
        y(p, e)
      );
    }
    return (
      p(a, o),
      (a.prototype.render = function() {
        return h.createElement(
          "div",
          {
            className: this.getClassNames(this.props.day),
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            "aria-label": "day-" + Y(this.props.day),
            role: "option"
          },
          this.props.renderDayContents
            ? this.props.renderDayContents(Y(this.props.day))
            : Y(this.props.day)
        );
      }),
      a
    );
  })(h.Component);
  de.propTypes = {
    disabledKeyboardNavigation: t.bool,
    day: t.object.isRequired,
    dayClassName: t.func,
    endDate: t.object,
    highlightDates: t.instanceOf(Map),
    inline: t.bool,
    month: t.number,
    onClick: t.func,
    onMouseEnter: t.func,
    preSelection: t.object,
    selected: t.object,
    selectingDate: t.object,
    selectsEnd: t.bool,
    selectsStart: t.bool,
    startDate: t.object,
    utcOffset: t.oneOfType([t.number, t.string]),
    renderDayContents: t.func
  };
  var ue = (function(a) {
    function s() {
      var e, t;
      m(this, s);
      for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return (
        ((e = t = y(
          this,
          a.call.apply(a, [this].concat(r))
        )).handleClick = function(e) {
          t.props.onClick && t.props.onClick(e);
        }),
        y(t, e)
      );
    }
    return (
      p(s, a),
      (s.prototype.render = function() {
        return h.createElement(
          "div",
          {
            className: d({
              "react-datepicker__week-number": !0,
              "react-datepicker__week-number--clickable": !!this.props.onClick
            }),
            "aria-label": "week-" + this.props.weekNumber,
            onClick: this.handleClick
          },
          this.props.weekNumber
        );
      }),
      s
    );
  })(h.Component);
  ue.propTypes = { weekNumber: t.number.isRequired, onClick: t.func };
  var he = (function(a) {
    function s() {
      var e, o;
      m(this, s);
      for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      return (
        ((e = o = y(
          this,
          a.call.apply(a, [this].concat(n))
        )).handleDayClick = function(e, t) {
          o.props.onDayClick && o.props.onDayClick(e, t);
        }),
        (o.handleDayMouseEnter = function(e) {
          o.props.onDayMouseEnter && o.props.onDayMouseEnter(e);
        }),
        (o.handleWeekClick = function(e, t, n) {
          "function" == typeof o.props.onWeekSelect &&
            o.props.onWeekSelect(e, t, n);
        }),
        (o.formatWeekNumber = function(e) {
          return o.props.formatWeekNumber
            ? o.props.formatWeekNumber(e)
            : b(e, "week");
        }),
        (o.renderDays = function() {
          var n = P(C(o.props.day)),
            e = [],
            t = o.formatWeekNumber(n);
          if (o.props.showWeekNumber) {
            var r = o.props.onWeekSelect
              ? o.handleWeekClick.bind(o, n, t)
              : void 0;
            e.push(
              h.createElement(ue, { key: "W", weekNumber: t, onClick: r })
            );
          }
          return e.concat(
            [0, 1, 2, 3, 4, 5, 6].map(function(e) {
              var t = I(C(n), e);
              return h.createElement(de, {
                key: e,
                day: t,
                month: o.props.month,
                onClick: o.handleDayClick.bind(o, t),
                onMouseEnter: o.handleDayMouseEnter.bind(o, t),
                minDate: o.props.minDate,
                maxDate: o.props.maxDate,
                excludeDates: o.props.excludeDates,
                includeDates: o.props.includeDates,
                inline: o.props.inline,
                highlightDates: o.props.highlightDates,
                selectingDate: o.props.selectingDate,
                filterDate: o.props.filterDate,
                preSelection: o.props.preSelection,
                selected: o.props.selected,
                selectsStart: o.props.selectsStart,
                selectsEnd: o.props.selectsEnd,
                startDate: o.props.startDate,
                endDate: o.props.endDate,
                dayClassName: o.props.dayClassName,
                utcOffset: o.props.utcOffset,
                renderDayContents: o.props.renderDayContents,
                disabledKeyboardNavigation: o.props.disabledKeyboardNavigation
              });
            })
          );
        }),
        y(o, e)
      );
    }
    return (
      p(s, a),
      (s.prototype.render = function() {
        return h.createElement(
          "div",
          { className: "react-datepicker__week" },
          this.renderDays()
        );
      }),
      s
    );
  })(h.Component);
  he.propTypes = {
    disabledKeyboardNavigation: t.bool,
    day: t.object.isRequired,
    dayClassName: t.func,
    endDate: t.object,
    excludeDates: t.array,
    filterDate: t.func,
    formatWeekNumber: t.func,
    highlightDates: t.instanceOf(Map),
    includeDates: t.array,
    inline: t.bool,
    maxDate: t.object,
    minDate: t.object,
    month: t.number,
    onDayClick: t.func,
    onDayMouseEnter: t.func,
    onWeekSelect: t.func,
    preSelection: t.object,
    selected: t.object,
    selectingDate: t.object,
    selectsEnd: t.bool,
    selectsStart: t.bool,
    showWeekNumber: t.bool,
    startDate: t.object,
    utcOffset: t.oneOfType([t.number, t.string]),
    renderDayContents: t.func
  };
  var me = (function(o) {
    function a() {
      var e, p;
      m(this, a);
      for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      return (
        ((e = p = y(
          this,
          o.call.apply(o, [this].concat(n))
        )).handleDayClick = function(e, t) {
          p.props.onDayClick && p.props.onDayClick(e, t);
        }),
        (p.handleDayMouseEnter = function(e) {
          p.props.onDayMouseEnter && p.props.onDayMouseEnter(e);
        }),
        (p.handleMouseLeave = function() {
          p.props.onMouseLeave && p.props.onMouseLeave();
        }),
        (p.isWeekInMonth = function(e) {
          var t = p.props.day,
            n = I(C(e), 6);
          return A(e, t) || A(n, t);
        }),
        (p.renderWeeks = function() {
          for (
            var e = [],
              t = p.props.fixedHeight,
              n = P(R(C(p.props.day))),
              r = 0,
              o = !1;
            e.push(
              h.createElement(he, {
                key: r,
                day: n,
                month: x(p.props.day),
                onDayClick: p.handleDayClick,
                onDayMouseEnter: p.handleDayMouseEnter,
                onWeekSelect: p.props.onWeekSelect,
                formatWeekNumber: p.props.formatWeekNumber,
                minDate: p.props.minDate,
                maxDate: p.props.maxDate,
                excludeDates: p.props.excludeDates,
                includeDates: p.props.includeDates,
                inline: p.props.inline,
                highlightDates: p.props.highlightDates,
                selectingDate: p.props.selectingDate,
                filterDate: p.props.filterDate,
                preSelection: p.props.preSelection,
                selected: p.props.selected,
                selectsStart: p.props.selectsStart,
                selectsEnd: p.props.selectsEnd,
                showWeekNumber: p.props.showWeekNumbers,
                startDate: p.props.startDate,
                endDate: p.props.endDate,
                dayClassName: p.props.dayClassName,
                utcOffset: p.props.utcOffset,
                disabledKeyboardNavigation: p.props.disabledKeyboardNavigation,
                renderDayContents: p.props.renderDayContents
              })
            ),
              !o;

          ) {
            r++, (n = W(C(n), 1));
            var a = t && 6 <= r,
              s = !t && !p.isWeekInMonth(n);
            if (a || s) {
              if (!p.props.peekNextMonth) break;
              o = !0;
            }
          }
          return e;
        }),
        (p.getClassNames = function() {
          var e = p.props;
          return d("react-datepicker__month", {
            "react-datepicker__month--selecting-range":
              e.selectingDate && (e.selectsStart || e.selectsEnd)
          });
        }),
        y(p, e)
      );
    }
    return (
      p(a, o),
      (a.prototype.render = function() {
        return h.createElement(
          "div",
          {
            className: this.getClassNames(),
            onMouseLeave: this.handleMouseLeave,
            role: "listbox",
            "aria-label": "month-" + this.props.day.format("YYYY-MM")
          },
          this.renderWeeks()
        );
      }),
      a
    );
  })(h.Component);
  me.propTypes = {
    disabledKeyboardNavigation: t.bool,
    day: t.object.isRequired,
    dayClassName: t.func,
    endDate: t.object,
    excludeDates: t.array,
    filterDate: t.func,
    fixedHeight: t.bool,
    formatWeekNumber: t.func,
    highlightDates: t.instanceOf(Map),
    includeDates: t.array,
    inline: t.bool,
    maxDate: t.object,
    minDate: t.object,
    onDayClick: t.func,
    onDayMouseEnter: t.func,
    onMouseLeave: t.func,
    onWeekSelect: t.func,
    peekNextMonth: t.bool,
    preSelection: t.object,
    selected: t.object,
    selectingDate: t.object,
    selectsEnd: t.bool,
    selectsStart: t.bool,
    showWeekNumbers: t.bool,
    startDate: t.object,
    utcOffset: t.oneOfType([t.number, t.string]),
    renderDayContents: t.func
  };
  var fe = (function(o) {
    function a() {
      var e, u;
      m(this, a);
      for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      return (
        ((e = u = y(
          this,
          o.call.apply(o, [this].concat(n))
        )).handleClick = function(e) {
          ((u.props.minTime || u.props.maxTime) && Q(e, u.props)) ||
            (u.props.excludeTimes && J(e, u.props.excludeTimes)) ||
            (u.props.includeTimes && !J(e, u.props.includeTimes)) ||
            u.props.onChange(e);
        }),
        (u.liClasses = function(e, t, n) {
          var r = ["react-datepicker__time-list-item"];
          return (
            t === E(e) &&
              n === T(e) &&
              r.push("react-datepicker__time-list-item--selected"),
            (((u.props.minTime || u.props.maxTime) && Q(e, u.props)) ||
              (u.props.excludeTimes && J(e, u.props.excludeTimes)) ||
              (u.props.includeTimes && !J(e, u.props.includeTimes))) &&
              r.push("react-datepicker__time-list-item--disabled"),
            u.props.injectTimes &&
              (60 * E(e) + T(e)) % u.props.intervals != 0 &&
              r.push("react-datepicker__time-list-item--injected"),
            r.join(" ")
          );
        }),
        (u.renderTimes = function() {
          for (
            var e = [],
              n = u.props.format ? u.props.format : "hh:mm A",
              t = u.props.intervals,
              r = u.props.selected ? u.props.selected : w(),
              o = E(r),
              a = T(r),
              s = v(w(), "day"),
              p = 1440 / t,
              i =
                u.props.injectTimes &&
                u.props.injectTimes.sort(function(e, t) {
                  return e - t;
                }),
              c = 0;
            c < p;
            c++
          ) {
            var l = F(C(s), c * t);
            if ((e.push(l), i)) {
              var d = ne(s, l, c, t, i);
              e = e.concat(d);
            }
          }
          return e.map(function(t, e) {
            return h.createElement(
              "li",
              {
                key: e,
                onClick: u.handleClick.bind(u, t),
                className: u.liClasses(t, o, a),
                ref: function(e) {
                  ((o === E(t) && a === T(t)) || (o === E(t) && !u.centerLi)) &&
                    (u.centerLi = e);
                }
              },
              _(t, n)
            );
          });
        }),
        y(u, e)
      );
    }
    return (
      p(a, o),
      (a.prototype.componentDidMount = function() {
        this.list.scrollTop = a.calcCenterPosition(
          this.props.monthRef
            ? this.props.monthRef.clientHeight - this.header.clientHeight
            : this.list.clientHeight,
          this.centerLi
        );
      }),
      (a.prototype.render = function() {
        var t = this,
          e = null;
        return (
          this.props.monthRef &&
            this.header &&
            (e = this.props.monthRef.clientHeight - this.header.clientHeight),
          h.createElement(
            "div",
            {
              className:
                "react-datepicker__time-container " +
                (this.props.todayButton
                  ? "react-datepicker__time-container--with-today-button"
                  : "")
            },
            h.createElement(
              "div",
              {
                className:
                  "react-datepicker__header react-datepicker__header--time",
                ref: function(e) {
                  t.header = e;
                }
              },
              h.createElement(
                "div",
                { className: "react-datepicker-time__header" },
                this.props.timeCaption
              )
            ),
            h.createElement(
              "div",
              { className: "react-datepicker__time" },
              h.createElement(
                "div",
                { className: "react-datepicker__time-box" },
                h.createElement(
                  "ul",
                  {
                    className: "react-datepicker__time-list",
                    ref: function(e) {
                      t.list = e;
                    },
                    style: e ? { height: e } : {}
                  },
                  this.renderTimes.bind(this)()
                )
              )
            )
          )
        );
      }),
      r(a, null, [
        {
          key: "defaultProps",
          get: function() {
            return {
              intervals: 30,
              onTimeChange: function() {},
              todayButton: null,
              timeCaption: "Time"
            };
          }
        }
      ]),
      a
    );
  })(h.Component);
  function ye(e) {
    var t = e.children,
      n = e.arrowProps;
    return h.createElement(
      "div",
      { className: e.className },
      h.createElement(
        "div",
        l({ className: "react-datepicker__triangle" }, void 0 === n ? {} : n)
      ),
      t
    );
  }
  (fe.propTypes = {
    format: t.string,
    includeTimes: t.array,
    intervals: t.number,
    selected: t.object,
    onChange: t.func,
    todayButton: t.node,
    minTime: t.object,
    maxTime: t.object,
    excludeTimes: t.array,
    monthRef: t.object,
    timeCaption: t.string,
    injectTimes: t.array
  }),
    (fe.calcCenterPosition = function(e, t) {
      return t.offsetTop - (e / 2 - t.clientHeight / 2);
    }),
    (ye.propTypes = {
      className: t.string,
      children: t.node,
      arrowProps: t.object
    });
  var De = [
      "react-datepicker__year-select",
      "react-datepicker__month-select",
      "react-datepicker__month-year-select"
    ],
    ge = (function(t) {
      function n(e) {
        m(this, n);
        var c = y(this, t.call(this, e));
        return (
          (c.handleClickOutside = function(e) {
            c.props.onClickOutside(e);
          }),
          (c.handleDropdownFocus = function(e) {
            (function() {
              var t = (
                (0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
                ).className || ""
              ).split(/\s+/);
              return De.some(function(e) {
                return 0 <= t.indexOf(e);
              });
            })(e.target) && c.props.onDropdownFocus();
          }),
          (c.getDateInView = function() {
            var e = c.props,
              t = e.preSelection,
              n = e.selected,
              r = e.openToDate,
              o = e.utcOffset,
              a = $(c.props),
              s = ee(c.props),
              p = k(o),
              i = r || n || t;
            return i || (a && L(p, a) ? a : s && H(p, s) ? s : p);
          }),
          (c.localizeDate = function(e) {
            return z(e, c.props.locale);
          }),
          (c.increaseMonth = function() {
            c.setState({ date: B(C(c.state.date), 1) }, function() {
              return c.handleMonthChange(c.state.date);
            });
          }),
          (c.decreaseMonth = function() {
            c.setState({ date: q(C(c.state.date), 1) }, function() {
              return c.handleMonthChange(c.state.date);
            });
          }),
          (c.handleDayClick = function(e, t) {
            return c.props.onSelect(e, t);
          }),
          (c.handleDayMouseEnter = function(e) {
            return c.setState({ selectingDate: e });
          }),
          (c.handleMonthMouseLeave = function() {
            return c.setState({ selectingDate: null });
          }),
          (c.handleYearChange = function(e) {
            c.props.onYearChange && c.props.onYearChange(e);
          }),
          (c.handleMonthChange = function(e) {
            c.props.onMonthChange && c.props.onMonthChange(e),
              c.props.adjustDateOnChange &&
                (c.props.onSelect && c.props.onSelect(e),
                c.props.setOpen && c.props.setOpen(!0));
          }),
          (c.handleMonthYearChange = function(e) {
            c.handleYearChange(e), c.handleMonthChange(e);
          }),
          (c.changeYear = function(e) {
            c.setState({ date: O(C(c.state.date), e) }, function() {
              return c.handleYearChange(c.state.date);
            });
          }),
          (c.changeMonth = function(e) {
            c.setState({ date: N(C(c.state.date), e) }, function() {
              return c.handleMonthChange(c.state.date);
            });
          }),
          (c.changeMonthYear = function(e) {
            c.setState({ date: O(N(C(c.state.date), x(e)), j(e)) }, function() {
              return c.handleMonthYearChange(c.state.date);
            });
          }),
          (c.header = function() {
            var o = P(
                C(
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : c.state.date
                )
              ),
              e = [];
            return (
              c.props.showWeekNumbers &&
                e.push(
                  h.createElement(
                    "div",
                    { key: "W", className: "react-datepicker__day-name" },
                    c.props.weekLabel || "#"
                  )
                ),
              e.concat(
                [0, 1, 2, 3, 4, 5, 6].map(function(e) {
                  var t = I(C(o), e),
                    n = t.localeData(),
                    r = c.formatWeekday(n, t);
                  return h.createElement(
                    "div",
                    { key: e, className: "react-datepicker__day-name" },
                    r
                  );
                })
              )
            );
          }),
          (c.formatWeekday = function(e, t) {
            return c.props.formatWeekDay
              ? (0, c.props.formatWeekDay)(e.weekdays(t))
              : c.props.useWeekdaysShort
                ? e.weekdaysShort(t)
                : e.weekdaysMin(t);
          }),
          (c.renderPreviousMonthButton = function() {
            if (!c.props.renderCustomHeader) {
              var e = X(c.state.date, "month", c.props);
              if (
                (c.props.forceShowMonthNavigation ||
                  c.props.showDisabledMonthNavigation ||
                  !e) &&
                !c.props.showTimeSelectOnly
              ) {
                var t = [
                    "react-datepicker__navigation",
                    "react-datepicker__navigation--previous"
                  ],
                  n = c.decreaseMonth;
                return (
                  e &&
                    c.props.showDisabledMonthNavigation &&
                    (t.push("react-datepicker__navigation--previous--disabled"),
                    (n = null)),
                  h.createElement(
                    "button",
                    { type: "button", className: t.join(" "), onClick: n },
                    c.props.previousMonthButtonLabel
                  )
                );
              }
            }
          }),
          (c.renderNextMonthButton = function() {
            if (!c.props.renderCustomHeader) {
              var e = Z(c.state.date, "month", c.props);
              if (
                (c.props.forceShowMonthNavigation ||
                  c.props.showDisabledMonthNavigation ||
                  !e) &&
                !c.props.showTimeSelectOnly
              ) {
                var t = [
                  "react-datepicker__navigation",
                  "react-datepicker__navigation--next"
                ];
                c.props.showTimeSelect &&
                  t.push("react-datepicker__navigation--next--with-time"),
                  c.props.todayButton &&
                    t.push(
                      "react-datepicker__navigation--next--with-today-button"
                    );
                var n = c.increaseMonth;
                return (
                  e &&
                    c.props.showDisabledMonthNavigation &&
                    (t.push("react-datepicker__navigation--next--disabled"),
                    (n = null)),
                  h.createElement(
                    "button",
                    { type: "button", className: t.join(" "), onClick: n },
                    c.props.nextMonthButtonLabel
                  )
                );
              }
            }
          }),
          (c.renderCurrentMonth = function() {
            var e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : c.state.date,
              t = ["react-datepicker__current-month"];
            return (
              c.props.showYearDropdown &&
                t.push("react-datepicker__current-month--hasYearDropdown"),
              c.props.showMonthDropdown &&
                t.push("react-datepicker__current-month--hasMonthDropdown"),
              c.props.showMonthYearDropdown &&
                t.push("react-datepicker__current-month--hasMonthYearDropdown"),
              h.createElement(
                "div",
                { className: t.join(" ") },
                _(e, c.props.dateFormat)
              )
            );
          }),
          (c.renderYearDropdown = function() {
            if (
              c.props.showYearDropdown &&
              !(0 < arguments.length && void 0 !== arguments[0] && arguments[0])
            )
              return h.createElement(oe, {
                adjustDateOnChange: c.props.adjustDateOnChange,
                date: c.state.date,
                onSelect: c.props.onSelect,
                setOpen: c.props.setOpen,
                dropdownMode: c.props.dropdownMode,
                onChange: c.changeYear,
                minDate: c.props.minDate,
                maxDate: c.props.maxDate,
                year: j(c.state.date),
                scrollableYearDropdown: c.props.scrollableYearDropdown,
                yearDropdownItemNumber: c.props.yearDropdownItemNumber
              });
          }),
          (c.renderMonthDropdown = function() {
            if (
              c.props.showMonthDropdown &&
              !(0 < arguments.length && void 0 !== arguments[0] && arguments[0])
            )
              return h.createElement(pe, {
                dropdownMode: c.props.dropdownMode,
                locale: c.props.locale,
                dateFormat: c.props.dateFormat,
                onChange: c.changeMonth,
                month: x(c.state.date),
                useShortMonthInDropdown: c.props.useShortMonthInDropdown
              });
          }),
          (c.renderMonthYearDropdown = function() {
            if (
              c.props.showMonthYearDropdown &&
              !(0 < arguments.length && void 0 !== arguments[0] && arguments[0])
            )
              return h.createElement(le, {
                dropdownMode: c.props.dropdownMode,
                locale: c.props.locale,
                dateFormat: c.props.dateFormat,
                onChange: c.changeMonthYear,
                minDate: c.props.minDate,
                maxDate: c.props.maxDate,
                date: c.state.date,
                scrollableMonthYearDropdown: c.props.scrollableMonthYearDropdown
              });
          }),
          (c.renderTodayButton = function() {
            if (c.props.todayButton && !c.props.showTimeSelectOnly)
              return h.createElement(
                "div",
                {
                  className: "react-datepicker__today-button",
                  onClick: function(e) {
                    return c.props.onSelect(v(k(c.props.utcOffset), "date"), e);
                  }
                },
                c.props.todayButton
              );
          }),
          (c.renderDefaultHeader = function(e) {
            var t = e.monthDate,
              n = e.i;
            return h.createElement(
              "div",
              { className: "react-datepicker__header" },
              c.renderCurrentMonth(t),
              h.createElement(
                "div",
                {
                  className:
                    "react-datepicker__header__dropdown react-datepicker__header__dropdown--" +
                    c.props.dropdownMode,
                  onFocus: c.handleDropdownFocus
                },
                c.renderMonthDropdown(0 !== n),
                c.renderMonthYearDropdown(0 !== n),
                c.renderYearDropdown(0 !== n)
              ),
              h.createElement(
                "div",
                { className: "react-datepicker__day-names" },
                c.header(t)
              )
            );
          }),
          (c.renderCustomHeader = function(e) {
            var t = e.monthDate;
            if (0 !== e.i) return null;
            var n = X(c.state.date, "month", c.props),
              r = Z(c.state.date, "month", c.props);
            return h.createElement(
              "div",
              {
                className:
                  "react-datepicker__header react-datepicker__header--custom",
                onFocus: c.props.onDropdownFocus
              },
              c.props.renderCustomHeader(
                l({}, c.state, {
                  changeMonth: c.changeMonth,
                  changeYear: c.changeYear,
                  decreaseMonth: c.decreaseMonth,
                  increaseMonth: c.increaseMonth,
                  prevMonthButtonDisabled: n,
                  nextMonthButtonDisabled: r
                })
              ),
              h.createElement(
                "div",
                { className: "react-datepicker__day-names" },
                c.header(t)
              )
            );
          }),
          (c.renderMonths = function() {
            if (!c.props.showTimeSelectOnly) {
              for (var e = [], t = 0; t < c.props.monthsShown; ++t) {
                var n = B(C(c.state.date), t);
                e.push(
                  h.createElement(
                    "div",
                    {
                      key: "month-" + t,
                      ref: function(e) {
                        c.monthContainer = e;
                      },
                      className: "react-datepicker__month-container"
                    },
                    c.props.renderCustomHeader
                      ? c.renderCustomHeader({ monthDate: n, i: t })
                      : c.renderDefaultHeader({ monthDate: n, i: t }),
                    h.createElement(me, {
                      day: n,
                      dayClassName: c.props.dayClassName,
                      onDayClick: c.handleDayClick,
                      onDayMouseEnter: c.handleDayMouseEnter,
                      onMouseLeave: c.handleMonthMouseLeave,
                      onWeekSelect: c.props.onWeekSelect,
                      formatWeekNumber: c.props.formatWeekNumber,
                      minDate: c.props.minDate,
                      maxDate: c.props.maxDate,
                      excludeDates: c.props.excludeDates,
                      highlightDates: c.props.highlightDates,
                      selectingDate: c.state.selectingDate,
                      includeDates: c.props.includeDates,
                      inline: c.props.inline,
                      fixedHeight: c.props.fixedHeight,
                      filterDate: c.props.filterDate,
                      preSelection: c.props.preSelection,
                      selected: c.props.selected,
                      selectsStart: c.props.selectsStart,
                      selectsEnd: c.props.selectsEnd,
                      showWeekNumbers: c.props.showWeekNumbers,
                      startDate: c.props.startDate,
                      endDate: c.props.endDate,
                      peekNextMonth: c.props.peekNextMonth,
                      utcOffset: c.props.utcOffset,
                      renderDayContents: c.props.renderDayContents,
                      disabledKeyboardNavigation:
                        c.props.disabledKeyboardNavigation
                    })
                  )
                );
              }
              return e;
            }
          }),
          (c.renderTimeSection = function() {
            if (
              c.props.showTimeSelect &&
              (c.state.monthContainer || c.props.showTimeSelectOnly)
            )
              return h.createElement(fe, {
                selected: c.props.selected,
                onChange: c.props.onTimeChange,
                format: c.props.timeFormat,
                includeTimes: c.props.includeTimes,
                intervals: c.props.timeIntervals,
                minTime: c.props.minTime,
                maxTime: c.props.maxTime,
                excludeTimes: c.props.excludeTimes,
                timeCaption: c.props.timeCaption,
                todayButton: c.props.todayButton,
                showMonthDropdown: c.props.showMonthDropdown,
                showMonthYearDropdown: c.props.showMonthYearDropdown,
                showYearDropdown: c.props.showYearDropdown,
                withPortal: c.props.withPortal,
                monthRef: c.state.monthContainer,
                injectTimes: c.props.injectTimes
              });
          }),
          (c.state = {
            date: c.localizeDate(c.getDateInView()),
            selectingDate: null,
            monthContainer: null
          }),
          c
        );
      }
      return (
        p(n, t),
        r(n, null, [
          {
            key: "defaultProps",
            get: function() {
              return {
                onDropdownFocus: function() {},
                monthsShown: 1,
                forceShowMonthNavigation: !1,
                timeCaption: "Time",
                previousMonthButtonLabel: "Previous Month",
                nextMonthButtonLabel: "Next Month"
              };
            }
          }
        ]),
        (n.prototype.componentDidMount = function() {
          var e = this;
          this.props.showTimeSelect &&
            (this.assignMonthContainer = void e.setState({
              monthContainer: e.monthContainer
            }));
        }),
        (n.prototype.componentDidUpdate = function(e) {
          this.props.preSelection && !K(this.props.preSelection, e.preSelection)
            ? this.setState({
                date: this.localizeDate(this.props.preSelection)
              })
            : this.props.openToDate &&
              !K(this.props.openToDate, e.openToDate) &&
              this.setState({ date: this.localizeDate(this.props.openToDate) });
        }),
        (n.prototype.render = function() {
          return h.createElement(
            this.props.container || ye,
            {
              className: d("react-datepicker", this.props.className, {
                "react-datepicker--time-only": this.props.showTimeSelectOnly
              })
            },
            this.renderPreviousMonthButton(),
            this.renderNextMonthButton(),
            this.renderMonths(),
            this.renderTodayButton(),
            this.renderTimeSection(),
            this.props.children
          );
        }),
        n
      );
    })(h.Component);
  ge.propTypes = {
    adjustDateOnChange: t.bool,
    className: t.string,
    children: t.node,
    container: t.func,
    dateFormat: t.oneOfType([t.string, t.array]).isRequired,
    dayClassName: t.func,
    disabledKeyboardNavigation: t.bool,
    dropdownMode: t.oneOf(["scroll", "select"]),
    endDate: t.object,
    excludeDates: t.array,
    filterDate: t.func,
    fixedHeight: t.bool,
    formatWeekNumber: t.func,
    highlightDates: t.instanceOf(Map),
    includeDates: t.array,
    includeTimes: t.array,
    injectTimes: t.array,
    inline: t.bool,
    locale: t.string,
    maxDate: t.object,
    minDate: t.object,
    monthsShown: t.number,
    onClickOutside: t.func.isRequired,
    onMonthChange: t.func,
    onYearChange: t.func,
    forceShowMonthNavigation: t.bool,
    onDropdownFocus: t.func,
    onSelect: t.func.isRequired,
    onWeekSelect: t.func,
    showTimeSelect: t.bool,
    showTimeSelectOnly: t.bool,
    timeFormat: t.string,
    timeIntervals: t.number,
    onTimeChange: t.func,
    minTime: t.object,
    maxTime: t.object,
    excludeTimes: t.array,
    timeCaption: t.string,
    openToDate: t.object,
    peekNextMonth: t.bool,
    scrollableYearDropdown: t.bool,
    scrollableMonthYearDropdown: t.bool,
    preSelection: t.object,
    selected: t.object,
    selectsEnd: t.bool,
    selectsStart: t.bool,
    showMonthDropdown: t.bool,
    showMonthYearDropdown: t.bool,
    showWeekNumbers: t.bool,
    showYearDropdown: t.bool,
    startDate: t.object,
    todayButton: t.node,
    useWeekdaysShort: t.bool,
    formatWeekDay: t.func,
    withPortal: t.bool,
    utcOffset: t.oneOfType([t.number, t.string]),
    weekLabel: t.string,
    yearDropdownItemNumber: t.number,
    setOpen: t.func,
    useShortMonthInDropdown: t.bool,
    showDisabledMonthNavigation: t.bool,
    previousMonthButtonLabel: t.string,
    nextMonthButtonLabel: t.string,
    renderCustomHeader: t.func,
    renderDayContents: t.func
  };
  var be = [
      "bottom",
      "bottom-end",
      "bottom-start",
      "left",
      "left-end",
      "left-start",
      "right",
      "right-end",
      "right-start",
      "top",
      "top-end",
      "top-start"
    ],
    ve = (function(e) {
      function t() {
        return m(this, t), y(this, e.apply(this, arguments));
      }
      return (
        p(t, e),
        (t.prototype.render = function() {
          var e = this.props,
            n = e.popperComponent,
            t = e.popperModifiers,
            r = e.popperPlacement,
            o = e.popperProps,
            a = e.targetComponent,
            s = void 0;
          if (!e.hidePopper) {
            var p = d("react-datepicker-popper", e.className);
            s = h.createElement(
              c.Popper,
              l({ modifiers: t, placement: r }, o),
              function(e) {
                var t = e.arrowProps;
                return h.createElement(
                  "div",
                  l(
                    { ref: e.ref, style: e.style },
                    { className: p, "data-placement": e.placement }
                  ),
                  h.cloneElement(n, { arrowProps: t })
                );
              }
            );
          }
          return (
            this.props.popperContainer &&
              (s = h.createElement(this.props.popperContainer, {}, s)),
            this.props.popperReactPortal &&
              (s = i.createPortal(s, window.document.body)),
            h.createElement(
              c.Manager,
              null,
              h.createElement(c.Reference, null, function(e) {
                return h.createElement(
                  "div",
                  { ref: e.ref, className: "react-datepicker-wrapper" },
                  a
                );
              }),
              s
            )
          );
        }),
        r(t, null, [
          {
            key: "defaultProps",
            get: function() {
              return {
                hidePopper: !0,
                popperModifiers: {
                  preventOverflow: {
                    enabled: !0,
                    escapeWithReference: !0,
                    boundariesElement: "viewport"
                  }
                },
                popperProps: {},
                popperPlacement: "bottom-start"
              };
            }
          }
        ]),
        t
      );
    })(h.Component);
  ve.propTypes = {
    className: t.string,
    hidePopper: t.bool,
    popperComponent: t.element,
    popperModifiers: t.object,
    popperReactPortal: t.bool,
    popperPlacement: t.oneOf(be),
    popperContainer: t.func,
    popperProps: t.object,
    targetComponent: t.element
  };
  var we = "react-datepicker-ignore-onclickoutside",
    ke = n(ge);
  var Ce = "Date input not valid.",
    Se = (function(t) {
      function n(e) {
        m(this, n);
        var l = y(this, t.call(this, e));
        return (
          (l.getPreSelection = function() {
            return l.props.openToDate
              ? w(l.props.openToDate)
              : l.props.selectsEnd && l.props.startDate
                ? w(l.props.startDate)
                : l.props.selectsStart && l.props.endDate
                  ? w(l.props.endDate)
                  : k(l.props.utcOffset);
          }),
          (l.calcInitialState = function() {
            var e = l.getPreSelection(),
              t = $(l.props),
              n = ee(l.props),
              r = t && L(e, t) ? t : n && H(e, n) ? n : e;
            return {
              open: l.props.startOpen || !1,
              preventFocus: !1,
              preSelection: l.props.selected ? w(l.props.selected) : r,
              highlightDates: te(l.props.highlightDates),
              focused: !1
            };
          }),
          (l.clearPreventFocusTimeout = function() {
            l.preventFocusTimeout && clearTimeout(l.preventFocusTimeout);
          }),
          (l.setFocus = function() {
            l.input && l.input.focus && l.input.focus();
          }),
          (l.setBlur = function() {
            l.input && l.input.blur && l.input.blur(),
              l.props.onBlur && l.props.onBlur(),
              l.cancelFocusInput();
          }),
          (l.setOpen = function(e) {
            var t =
              1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            l.setState(
              {
                open: e,
                preSelection:
                  e && l.state.open
                    ? l.state.preSelection
                    : l.calcInitialState().preSelection,
                lastPreSelectChange: Me
              },
              function() {
                e ||
                  l.setState(
                    function(e) {
                      return { focused: !!t && e.focused };
                    },
                    function() {
                      !t && l.setBlur(), l.setState({ inputValue: null });
                    }
                  );
              }
            );
          }),
          (l.inputOk = function() {
            return S(l.state.preSelection) || u.isDate(l.state.preSelection);
          }),
          (l.isCalendarOpen = function() {
            return void 0 === l.props.open
              ? l.state.open && !l.props.disabled && !l.props.readOnly
              : l.props.open;
          }),
          (l.handleFocus = function(e) {
            l.state.preventFocus ||
              (l.props.onFocus(e),
              l.props.preventOpenOnFocus || l.props.readOnly || l.setOpen(!0)),
              l.setState({ focused: !0 });
          }),
          (l.cancelFocusInput = function() {
            clearTimeout(l.inputFocusTimeout), (l.inputFocusTimeout = null);
          }),
          (l.deferFocusInput = function() {
            l.cancelFocusInput(),
              (l.inputFocusTimeout = setTimeout(function() {
                return l.setFocus();
              }, 1));
          }),
          (l.handleDropdownFocus = function() {
            l.cancelFocusInput();
          }),
          (l.handleBlur = function(e) {
            l.state.open && !l.props.withPortal
              ? l.deferFocusInput()
              : l.props.onBlur(e),
              l.setState({ focused: !1 });
          }),
          (l.handleCalendarClickOutside = function(e) {
            l.props.inline || l.setOpen(!1),
              l.props.onClickOutside(e),
              l.props.withPortal && e.preventDefault();
          }),
          (l.handleChange = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            var r = t[0];
            if (
              !l.props.onChangeRaw ||
              (l.props.onChangeRaw.apply(l, t),
              "function" == typeof r.isDefaultPrevented &&
                !r.isDefaultPrevented())
            ) {
              l.setState({
                inputValue: r.target.value,
                lastPreSelectChange: _e
              });
              var o,
                a,
                s = (a = u(
                  r.target.value,
                  (o = l.props).dateFormat,
                  o.locale || u.locale(),
                  !0
                )).isValid()
                  ? a
                  : null;
              (!s && r.target.value) || l.setSelected(s, r, !0);
            }
          }),
          (l.handleSelect = function(e, t) {
            l.setState({ preventFocus: !0 }, function() {
              return (
                (l.preventFocusTimeout = setTimeout(function() {
                  return l.setState({ preventFocus: !1 });
                }, 50)),
                l.preventFocusTimeout
              );
            }),
              l.setSelected(e, t),
              !l.props.shouldCloseOnSelect || l.props.showTimeSelect
                ? l.setPreSelection(e)
                : l.props.inline || l.setOpen(!1);
          }),
          (l.setSelected = function(e, t, n) {
            var r = e;
            if (null !== r && G(r, l.props))
              (function(e) {
                var t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = t.minDate,
                  r = t.maxDate;
                return (
                  (n && e.isBefore(n, "day")) || (r && e.isAfter(r, "day"))
                );
              })(r, l.props) &&
                (l.props.onChange(e, t), l.props.onSelect(r, t));
            else {
              if (!K(l.props.selected, r) || l.props.allowSameDay) {
                if (null !== r) {
                  if (l.props.selected) {
                    var o = l.props.selected;
                    n && (o = w(r)),
                      (r = M(w(r), {
                        hour: E(o),
                        minute: T(o),
                        second: ((a = o), b(a, "second"))
                      }));
                  }
                  l.props.inline || l.setState({ preSelection: r });
                }
                l.props.onChange(r, t);
              }
              var a;
              l.props.onSelect(r, t), n || l.setState({ inputValue: null });
            }
          }),
          (l.setPreSelection = function(e) {
            (!(void 0 !== l.props.minDate && void 0 !== l.props.maxDate) ||
              !e ||
              U(e, l.props.minDate, l.props.maxDate)) &&
              l.setState({ preSelection: e });
          }),
          (l.handleTimeChange = function(e) {
            var t = M(
              C(l.props.selected ? l.props.selected : l.getPreSelection()),
              { hour: E(e), minute: T(e) }
            );
            l.setState({ preSelection: t }),
              l.props.onChange(t),
              l.props.shouldCloseOnSelect && l.setOpen(!1),
              l.setState({ inputValue: null });
          }),
          (l.onInputClick = function() {
            l.props.disabled || l.props.readOnly || l.setOpen(!0),
              l.props.onInputClick();
          }),
          (l.onInputKeyDown = function(e) {
            l.props.onKeyDown(e);
            var t = e.key;
            if (l.state.open || l.props.inline || l.props.preventOpenOnFocus) {
              var n = w(l.state.preSelection);
              if ("Enter" === t)
                e.preventDefault(),
                  l.inputOk() && l.state.lastPreSelectChange === Me
                    ? (l.handleSelect(n, e),
                      !l.props.shouldCloseOnSelect && l.setPreSelection(n))
                    : l.setOpen(!1);
              else if ("Escape" === t)
                e.preventDefault(),
                  l.setOpen(!1),
                  l.inputOk() || l.props.onInputError({ code: 1, msg: Ce });
              else if ("Tab" === t) l.setOpen(!1, !0);
              else if (!l.props.disabledKeyboardNavigation) {
                var r = void 0;
                switch (t) {
                  case "ArrowLeft":
                    r = g(n, 1, "days");
                    break;
                  case "ArrowRight":
                    r = I(n, 1);
                    break;
                  case "ArrowUp":
                    r = g(n, 1, "weeks");
                    break;
                  case "ArrowDown":
                    r = W(n, 1);
                    break;
                  case "PageUp":
                    r = q(n, 1);
                    break;
                  case "PageDown":
                    r = B(n, 1);
                    break;
                  case "Home":
                    r = g(n, 1, "years");
                    break;
                  case "End":
                    r = D(n, 1, "years");
                }
                if (!r)
                  return void (
                    l.props.onInputError &&
                    l.props.onInputError({ code: 1, msg: Ce })
                  );
                e.preventDefault(),
                  l.setState({ lastPreSelectChange: Me }),
                  l.props.adjustDateOnChange && l.setSelected(r),
                  l.setPreSelection(r);
              }
            } else ("ArrowDown" !== t && "ArrowUp" !== t) || l.onInputClick();
          }),
          (l.onClearClick = function(e) {
            e && e.preventDefault && e.preventDefault(),
              l.props.onChange(null, e),
              l.setState({ inputValue: null });
          }),
          (l.clear = function() {
            l.onClearClick();
          }),
          (l.renderCalendar = function() {
            return l.props.inline || l.isCalendarOpen()
              ? h.createElement(
                  ke,
                  {
                    ref: function(e) {
                      l.calendar = e;
                    },
                    locale: l.props.locale,
                    adjustDateOnChange: l.props.adjustDateOnChange,
                    setOpen: l.setOpen,
                    dateFormat: l.props.dateFormatCalendar,
                    useWeekdaysShort: l.props.useWeekdaysShort,
                    formatWeekDay: l.props.formatWeekDay,
                    dropdownMode: l.props.dropdownMode,
                    selected: l.props.selected,
                    preSelection: l.state.preSelection,
                    onSelect: l.handleSelect,
                    onWeekSelect: l.props.onWeekSelect,
                    openToDate: l.props.openToDate,
                    minDate: l.props.minDate,
                    maxDate: l.props.maxDate,
                    selectsStart: l.props.selectsStart,
                    selectsEnd: l.props.selectsEnd,
                    startDate: l.props.startDate,
                    endDate: l.props.endDate,
                    excludeDates: l.props.excludeDates,
                    filterDate: l.props.filterDate,
                    onClickOutside: l.handleCalendarClickOutside,
                    formatWeekNumber: l.props.formatWeekNumber,
                    highlightDates: l.state.highlightDates,
                    includeDates: l.props.includeDates,
                    includeTimes: l.props.includeTimes,
                    injectTimes: l.props.injectTimes,
                    inline: l.props.inline,
                    peekNextMonth: l.props.peekNextMonth,
                    showMonthDropdown: l.props.showMonthDropdown,
                    useShortMonthInDropdown: l.props.useShortMonthInDropdown,
                    showMonthYearDropdown: l.props.showMonthYearDropdown,
                    showWeekNumbers: l.props.showWeekNumbers,
                    showYearDropdown: l.props.showYearDropdown,
                    withPortal: l.props.withPortal,
                    forceShowMonthNavigation: l.props.forceShowMonthNavigation,
                    showDisabledMonthNavigation:
                      l.props.showDisabledMonthNavigation,
                    scrollableYearDropdown: l.props.scrollableYearDropdown,
                    scrollableMonthYearDropdown:
                      l.props.scrollableMonthYearDropdown,
                    todayButton: l.props.todayButton,
                    weekLabel: l.props.weekLabel,
                    utcOffset: l.props.utcOffset,
                    outsideClickIgnoreClass: we,
                    fixedHeight: l.props.fixedHeight,
                    monthsShown: l.props.monthsShown,
                    onDropdownFocus: l.handleDropdownFocus,
                    onMonthChange: l.props.onMonthChange,
                    onYearChange: l.props.onYearChange,
                    dayClassName: l.props.dayClassName,
                    showTimeSelect: l.props.showTimeSelect,
                    showTimeSelectOnly: l.props.showTimeSelectOnly,
                    onTimeChange: l.handleTimeChange,
                    timeFormat: l.props.timeFormat,
                    timeIntervals: l.props.timeIntervals,
                    minTime: l.props.minTime,
                    maxTime: l.props.maxTime,
                    excludeTimes: l.props.excludeTimes,
                    timeCaption: l.props.timeCaption,
                    className: l.props.calendarClassName,
                    container: l.props.calendarContainer,
                    yearDropdownItemNumber: l.props.yearDropdownItemNumber,
                    previousMonthButtonLabel: l.props.previousMonthButtonLabel,
                    nextMonthButtonLabel: l.props.nextMonthButtonLabel,
                    disabledKeyboardNavigation:
                      l.props.disabledKeyboardNavigation,
                    renderCustomHeader: l.props.renderCustomHeader,
                    popperProps: l.props.popperProps,
                    renderDayContents: l.props.renderDayContents
                  },
                  l.props.children
                )
              : null;
          }),
          (l.renderDateInput = function() {
            var e,
              t,
              n,
              r,
              o,
              a,
              s = d(l.props.className, (((e = {})[we] = l.state.open), e)),
              p =
                l.props.customInput ||
                h.createElement("input", { type: "text" }),
              i = l.props.customInputRef || "ref",
              c =
                "string" == typeof l.props.value
                  ? l.props.value
                  : "string" == typeof l.state.inputValue
                    ? l.state.inputValue
                    : ((o = (r = l.props).dateFormat),
                      (a = r.locale),
                      ((n = l.props.selected) &&
                        n
                          .clone()
                          .locale(a || u.locale())
                          .format(Array.isArray(o) ? o[0] : o)) ||
                        "");
            return h.cloneElement(
              p,
              (((t = {})[i] = function(e) {
                l.input = e;
              }),
              (t.value = c),
              (t.onBlur = l.handleBlur),
              (t.onChange = l.handleChange),
              (t.onClick = l.onInputClick),
              (t.onFocus = l.handleFocus),
              (t.onKeyDown = l.onInputKeyDown),
              (t.id = l.props.id),
              (t.name = l.props.name),
              (t.autoFocus = l.props.autoFocus),
              (t.placeholder = l.props.placeholderText),
              (t.disabled = l.props.disabled),
              (t.autoComplete = l.props.autoComplete),
              (t.className = s),
              (t.title = l.props.title),
              (t.readOnly = l.props.readOnly),
              (t.required = l.props.required),
              (t.tabIndex = l.props.tabIndex),
              t)
            );
          }),
          (l.renderClearButton = function() {
            return l.props.isClearable && null != l.props.selected
              ? h.createElement("button", {
                  type: "button",
                  className: "react-datepicker__close-icon",
                  onClick: l.onClearClick,
                  title: l.props.clearButtonTitle,
                  tabIndex: -1
                })
              : null;
          }),
          (l.state = l.calcInitialState()),
          l
        );
      }
      return (
        p(n, t),
        r(n, null, [
          {
            key: "defaultProps",
            get: function() {
              return {
                allowSameDay: !1,
                dateFormat: "L",
                dateFormatCalendar: "MMMM YYYY",
                onChange: function() {},
                disabled: !1,
                disabledKeyboardNavigation: !1,
                dropdownMode: "scroll",
                onFocus: function() {},
                onBlur: function() {},
                onKeyDown: function() {},
                onInputClick: function() {},
                onSelect: function() {},
                onClickOutside: function() {},
                onMonthChange: function() {},
                preventOpenOnFocus: !1,
                onYearChange: function() {},
                onInputError: function() {},
                monthsShown: 1,
                readOnly: !1,
                withPortal: !1,
                shouldCloseOnSelect: !0,
                showTimeSelect: !1,
                timeIntervals: 30,
                timeCaption: "Time",
                previousMonthButtonLabel: "Previous Month",
                nextMonthButtonLabel: "Next month",
                renderDayContents: function(e) {
                  return e;
                }
              };
            }
          }
        ]),
        (n.prototype.componentDidUpdate = function(e, t) {
          var n, r, o, a;
          e.inline &&
            ((r = this.props.selected),
            (n = e.selected) && r ? x(n) !== x(r) || j(n) !== j(r) : n !== r) &&
            this.setPreSelection(this.props.selected),
            e.highlightDates !== this.props.highlightDates &&
              this.setState({ highlightDates: te(this.props.highlightDates) }),
            !t.focused &&
              ((a = this.props.selected),
              (o = e.selected) && a && !o.isSame(a)) &&
              this.setState({ inputValue: null });
        }),
        (n.prototype.componentWillUnmount = function() {
          this.clearPreventFocusTimeout();
        }),
        (n.prototype.render = function() {
          var e = this.renderCalendar();
          return this.props.inline && !this.props.withPortal
            ? e
            : this.props.withPortal
              ? h.createElement(
                  "div",
                  null,
                  this.props.inline
                    ? null
                    : h.createElement(
                        "div",
                        { className: "react-datepicker__input-container" },
                        this.renderDateInput(),
                        this.renderClearButton()
                      ),
                  this.state.open || this.props.inline
                    ? h.createElement(
                        "div",
                        { className: "react-datepicker__portal" },
                        e
                      )
                    : null
                )
              : h.createElement(ve, {
                  className: this.props.popperClassName,
                  hidePopper: !this.isCalendarOpen(),
                  popperModifiers: this.props.popperModifiers,
                  popperReactPortal: this.props.popperReactPortal,
                  targetComponent: h.createElement(
                    "div",
                    { className: "react-datepicker__input-container" },
                    this.renderDateInput(),
                    this.renderClearButton()
                  ),
                  popperContainer: this.props.popperContainer,
                  popperComponent: e,
                  popperPlacement: this.props.popperPlacement,
                  popperProps: this.props.popperProps
                });
        }),
        n
      );
    })(h.Component);
  Se.propTypes = {
    adjustDateOnChange: t.bool,
    allowSameDay: t.bool,
    autoComplete: t.string,
    autoFocus: t.bool,
    calendarClassName: t.string,
    calendarContainer: t.func,
    children: t.node,
    className: t.string,
    customInput: t.element,
    customInputRef: t.string,
    dateFormat: t.oneOfType([t.string, t.array]),
    dateFormatCalendar: t.string,
    dayClassName: t.func,
    disabled: t.bool,
    disabledKeyboardNavigation: t.bool,
    dropdownMode: t.oneOf(["scroll", "select"]).isRequired,
    endDate: t.object,
    excludeDates: t.array,
    filterDate: t.func,
    fixedHeight: t.bool,
    formatWeekNumber: t.func,
    highlightDates: t.array,
    id: t.string,
    includeDates: t.array,
    includeTimes: t.array,
    injectTimes: t.array,
    inline: t.bool,
    isClearable: t.bool,
    locale: t.string,
    maxDate: t.object,
    minDate: t.object,
    monthsShown: t.number,
    name: t.string,
    onBlur: t.func,
    onChange: t.func.isRequired,
    onSelect: t.func,
    onWeekSelect: t.func,
    onClickOutside: t.func,
    onChangeRaw: t.func,
    onFocus: t.func,
    onInputClick: t.func,
    onKeyDown: t.func,
    onMonthChange: t.func,
    onYearChange: t.func,
    onInputError: t.func,
    open: t.bool,
    openToDate: t.object,
    peekNextMonth: t.bool,
    placeholderText: t.string,
    popperContainer: t.func,
    popperClassName: t.string,
    popperModifiers: t.object,
    popperPlacement: t.oneOf(be),
    popperProps: t.object,
    popperReactPortal: t.bool,
    preventOpenOnFocus: t.bool,
    readOnly: t.bool,
    required: t.bool,
    scrollableYearDropdown: t.bool,
    scrollableMonthYearDropdown: t.bool,
    selected: t.object,
    selectsEnd: t.bool,
    selectsStart: t.bool,
    showMonthDropdown: t.bool,
    showMonthYearDropdown: t.bool,
    showWeekNumbers: t.bool,
    showYearDropdown: t.bool,
    forceShowMonthNavigation: t.bool,
    showDisabledMonthNavigation: t.bool,
    startDate: t.object,
    startOpen: t.bool,
    tabIndex: t.number,
    timeCaption: t.string,
    title: t.string,
    todayButton: t.node,
    useWeekdaysShort: t.bool,
    formatWeekDay: t.func,
    utcOffset: t.oneOfType([t.number, t.string]),
    value: t.string,
    weekLabel: t.string,
    withPortal: t.bool,
    yearDropdownItemNumber: t.number,
    shouldCloseOnSelect: t.bool,
    showTimeSelect: t.bool,
    showTimeSelectOnly: t.bool,
    timeFormat: t.string,
    timeIntervals: t.number,
    minTime: t.object,
    maxTime: t.object,
    excludeTimes: t.array,
    useShortMonthInDropdown: t.bool,
    clearButtonTitle: t.string,
    previousMonthButtonLabel: t.string,
    nextMonthButtonLabel: t.string,
    renderCustomHeader: t.func,
    renderDayContents: t.func
  };
  var _e = "input",
    Me = "navigate";
  (e.default = Se),
    (e.CalendarContainer = ye),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
