"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fa = require("react-icons/fa");

var _reactTransitionGroup = require("react-transition-group");

require("./BaseModal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BaseModal = /*#__PURE__*/function (_Component) {
  _inherits(BaseModal, _Component);

  var _super = _createSuper(BaseModal);

  function BaseModal() {
    _classCallCheck(this, BaseModal);

    return _super.apply(this, arguments);
  }

  _createClass(BaseModal, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          isDragging = _this$props.isDragging,
          width = _this$props.width,
          height = _this$props.height,
          top = _this$props.top,
          left = _this$props.left,
          isOpen = _this$props.isOpen,
          isMinimised = _this$props.isMinimised,
          onRequestRecover = _this$props.onRequestRecover,
          className = _this$props.className,
          onFocus = _this$props.onFocus;

      if (isOpen) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.CSSTransition, {
          "in": !isMinimised,
          timeout: 300,
          classNames: "minimise",
          unmountOnExit: true
        }, /*#__PURE__*/_react["default"].createElement("div", {
          onClick: onFocus,
          ref: function ref(node) {
            _this.node = node;
          },
          draggable: isDragging,
          className: !className ? "flexible-modal" : "flexible-modal " + className,
          style: {
            width: width,
            height: height,
            top: top,
            left: left
          }
        }, this.props.children)), isMinimised && /*#__PURE__*/_react["default"].createElement("button", {
          className: "flexible-modal-rebound-btn",
          onClick: onRequestRecover
        }, /*#__PURE__*/_react["default"].createElement(_fa.FaBars, null)));
      } else {
        return null;
      }
    }
  }]);

  return BaseModal;
}(_react.Component);

BaseModal.propTypes = {
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  top: _propTypes["default"].number.isRequired,
  left: _propTypes["default"].number.isRequired,
  className: _propTypes["default"].string,
  onFocus: _propTypes["default"].func,
  onRequestRecover: _propTypes["default"].func,
  isDragging: _propTypes["default"].bool,
  isMinimised: _propTypes["default"].bool,
  isOpen: _propTypes["default"].bool,
  transitionName: _propTypes["default"].string
};
BaseModal.defaultProps = {
  className: "",
  onFocus: function onFocus() {},
  onRequestRecover: function onRequestRecover() {},
  isDragging: false,
  isMinimised: false,
  isOpen: false,
  transitionName: "modal-anim"
};
var _default = BaseModal;
exports["default"] = _default;