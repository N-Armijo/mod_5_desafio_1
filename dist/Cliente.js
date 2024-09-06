function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.weak-map.js";
import "core-js/modules/web.dom-collections.iterator.js";
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _nombre = /*#__PURE__*/new WeakMap();
var _impuesto = /*#__PURE__*/new WeakMap();
var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);
    _classPrivateFieldInitSpec(this, _nombre, void 0);
    _classPrivateFieldInitSpec(this, _impuesto, void 0);
    _classPrivateFieldSet(_nombre, this, nombre);
    _classPrivateFieldSet(_impuesto, this, impuesto);
  }

  // Métodos get y set para nombre
  return _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return _classPrivateFieldGet(_nombre, this);
    },
    set: function set(value) {
      _classPrivateFieldSet(_nombre, this, value);
    }

    // Métodos get y set para impuesto
  }, {
    key: "impuesto",
    get: function get() {
      return _classPrivateFieldGet(_impuesto, this);
    },
    set: function set(value) {
      _classPrivateFieldSet(_impuesto, this, value);
    }

    // Método para calcular el impuesto
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      return (_classPrivateFieldGet(_impuesto, this).montoBrutoAnual - _classPrivateFieldGet(_impuesto, this).deducciones) * 0.21;
    }
  }]);
}();
export default Cliente;