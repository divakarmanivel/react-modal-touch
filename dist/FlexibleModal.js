"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _BaseModal = _interopRequireDefault(require("./@components/BaseModal"));

var _Resizer = _interopRequireDefault(require("./@components/Resizer"));

require("./FlexibleModal.css");

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FlexibleModal = /*#__PURE__*/function (_Component) {
  _inherits(FlexibleModal, _Component);

  var _super = _createSuper(FlexibleModal);

  function FlexibleModal(props) {
    var _this;

    _classCallCheck(this, FlexibleModal);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e) {
      // only left mouse button
      document.addEventListener('mousemove', _this.onMouseMove);
      if (e.button !== 0) return;
      var pos = _this.baseModalRef.current.node;

      _this.setState({
        isDragging: true,
        rel: {
          x: e.pageX - pos.offsetLeft,
          y: e.pageY - pos.offsetTop
        }
      });

      e.stopPropagation();
      e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function (e) {
      document.removeEventListener('mousemove', _this.onMouseMove);

      _this.setState({
        isDragging: false
      });

      _this.setState({
        isResizing: false
      });

      e.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseMove", function (e) {
      var _this$props = _this.props,
          disableMove = _this$props.disableMove,
          disableVerticalMove = _this$props.disableVerticalMove,
          disableHorizontalMove = _this$props.disableHorizontalMove;

      if (_this.state.isDragging) {
        if (disableMove) {} else if (disableVerticalMove && disableHorizontalMove) {} else if (!disableVerticalMove && disableHorizontalMove) {
          _this.setState({
            top: e.pageY - _this.state.rel.y
          });
        } else if (disableVerticalMove && !disableHorizontalMove) {
          _this.setState({
            left: e.pageX - _this.state.rel.x
          });
        } else if (!disableVerticalMove && !disableHorizontalMove) {
          _this.setState({
            left: e.pageX - _this.state.rel.x,
            top: e.pageY - _this.state.rel.y
          });
        }
      } else if (_this.state.isResizing) {
        _this.funcResizing(e.clientX, e.clientY);
      } else {
        return;
      }

      e.stopPropagation();
      e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchStart", function (e) {
      document.addEventListener('touchmove', _this.onTouchMove); // if (e.button !== 0) return;

      var pos = _this.baseModalRef.current.node;

      _this.setState({
        isDragging: true,
        rel: {
          x: e.touches[0].pageX - pos.offsetLeft,
          y: e.touches[0].pageY - pos.offsetTop
        }
      });

      e.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchEnd", function (e) {
      document.removeEventListener('touchmove', _this.onTouchMove);

      _this.setState({
        isDragging: false
      });

      _this.setState({
        isResizing: false
      });

      e.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchMove", function (e) {
      var _this$props2 = _this.props,
          disableMove = _this$props2.disableMove,
          disableVerticalMove = _this$props2.disableVerticalMove,
          disableHorizontalMove = _this$props2.disableHorizontalMove;

      if (_this.state.isDragging) {
        if (disableMove) {} else if (disableVerticalMove && disableHorizontalMove) {} else if (!disableVerticalMove && disableHorizontalMove) {
          _this.setState({
            top: e.touches[0].pageY - _this.state.rel.y
          });
        } else if (disableVerticalMove && !disableHorizontalMove) {
          _this.setState({
            left: e.touches[0].pageX - _this.state.rel.x
          });
        } else if (!disableVerticalMove && !disableHorizontalMove) {
          _this.setState({
            left: e.touches[0].pageX - _this.state.rel.x,
            top: e.touches[0].pageY - _this.state.rel.y
          });
        }
      } else if (_this.state.isResizing) {
        _this.funcResizing(e.touches[0].clientX, e.touches[0].clientY);
      } else {
        return;
      }

      e.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "updateStateResizing", function (isResizing) {
      document.addEventListener('mousemove', _this.onMouseMove);
      document.addEventListener('touchmove', _this.onTouchMove);

      _this.setState({
        isResizing: isResizing
      });
    });

    _defineProperty(_assertThisInitialized(_this), "funcResizing", function (clientX, clientY) {
      var _this$props3 = _this.props,
          mWidth = _this$props3.minWidth,
          mHeight = _this$props3.minHeight,
          disableVerticalResize = _this$props3.disableVerticalResize,
          disableHorizontalResize = _this$props3.disableHorizontalResize;
      var node = _this.baseModalRef.current.node;
      var minWidth = mWidth ? mWidth : 200;
      var minHeight = mHeight ? mHeight : 100;

      if (!disableHorizontalResize && clientX > node.offsetLeft + minWidth) {
        _this.setState({
          width: clientX - node.offsetLeft + 16 / 2
        });
      }

      if (!disableVerticalResize && clientY > node.offsetTop + minHeight) {
        _this.setState({
          height: clientY - node.offsetTop + 16 / 2
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateStateDragging", function (isDragging) {
      _this.setState({
        isDragging: isDragging
      });
    });

    _defineProperty(_assertThisInitialized(_this), "pressKey", function (e) {
      var _this$props4 = _this.props,
          onRequestClose = _this$props4.onRequestClose,
          disableResize = _this$props4.disableResize,
          disableMove = _this$props4.disableMove,
          disableVerticalMove = _this$props4.disableVerticalMove,
          disableHorizontalMove = _this$props4.disableHorizontalMove;

      if (e.ctrlKey) {
        switch (e.keyCode) {
          case 37:
            !disableResize && _this.setState(function (prevState) {
              return {
                width: prevState.width - 20
              };
            });
            break;

          case 38:
            !disableResize && _this.setState(function (prevState) {
              return {
                height: prevState.height - 20
              };
            });
            break;

          case 39:
            !disableResize && _this.setState(function (prevState) {
              return {
                width: prevState.width + 20
              };
            });
            break;

          case 40:
            !disableResize && _this.setState(function (prevState) {
              return {
                height: prevState.height + 20
              };
            });
            break;
        }
      } else {
        switch (e.keyCode) {
          case 27:
            onRequestClose();
            break;

          case 37:
            !disableMove && !disableHorizontalMove && _this.setState(function (prevState) {
              return {
                left: prevState.left - 20
              };
            });
            break;

          case 38:
            !disableMove && !disableVerticalMove && _this.setState(function (prevState) {
              return {
                top: prevState.top - 20
              };
            });
            break;

          case 39:
            !disableMove && !disableHorizontalMove && _this.setState(function (prevState) {
              return {
                left: prevState.left + 20
              };
            });
            break;

          case 40:
            !disableMove && !disableVerticalMove && _this.setState(function (prevState) {
              return {
                top: prevState.top + 20
              };
            });
            break;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "resize", function (width, height) {
      _this.setState(function (prevState) {
        return {
          width: width || prevState.width,
          height: height || prevState.height
        };
      });
    });

    _this.state = {
      isDragging: false,
      isResizing: false,
      top: _this.props.top !== undefined ? _this.props.top : _this.props.initHeight ? window.innerHeight / 2 - _this.props.initHeight / 2 - 50 : window.innerHeight / 2 - 400 / 2 - 50,
      left: _this.props.left !== undefined ? _this.props.left : _this.props.initWidth ? window.innerWidth / 2 - _this.props.initWidth / 2 - 21 : window.innerWidth / 2 - 800 / 2 - 21,
      width: _this.props.initWidth ? _this.props.initWidth : 800,
      height: _this.props.initHeight ? _this.props.initHeight : 400,
      rel: null
    };
    _this.baseModalRef = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }

  _createClass(FlexibleModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var disableKeystroke = this.props.disableKeystroke;
      document.addEventListener('mouseup', this.onMouseUp);
      document.addEventListener('touchend', this.onTouchEnd);
      if (!disableKeystroke) document.addEventListener('keydown', this.pressKey);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var disableKeystroke = this.props.disableKeystroke;

      if (document.removeEventListener) {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
        if (!disableKeystroke) document.removeEventListener('keydown', this.pressKey);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          isOpen = _this$props5.isOpen,
          isMinimised = _this$props5.isMinimised,
          onRequestClose = _this$props5.onRequestClose,
          onRequestMinimise = _this$props5.onRequestMinimise,
          onRequestRecover = _this$props5.onRequestRecover,
          disableResize = _this$props5.disableResize,
          className = _this$props5.className,
          onFocus = _this$props5.onFocus;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "flexible-modal-container"
      }, isOpen && !isMinimised && /*#__PURE__*/_react["default"].createElement("div", {
        onClick: onRequestMinimise ? onRequestMinimise : onRequestClose,
        className: "flexible-modal-mask"
      }), /*#__PURE__*/_react["default"].createElement(_BaseModal["default"], {
        className: className,
        onFocus: onFocus,
        width: this.state.width,
        height: this.state.height,
        top: this.state.top,
        left: this.state.left,
        isDragging: this.state.isDragging,
        onRequestRecover: onRequestRecover,
        isMinimised: isMinimised,
        isOpen: isOpen,
        updateStateDragging: this.updateStateDragging,
        transitionName: "modal-anim",
        ref: this.baseModalRef
      }, this.props.children, /*#__PURE__*/_react["default"].createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        className: "flexible-modal-drag-area",
        style: {
          width: this.state.width
        },
        ref: function ref(dragArea) {
          _this2.dragArea = dragArea;
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        className: "flexible-modal-drag-area-left",
        style: {
          height: this.state.height
        },
        ref: function ref(dragArea) {
          _this2.dragArea2 = dragArea;
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        className: "flexible-modal-drag-area-bottom",
        style: {
          width: this.state.width
        },
        ref: function ref(dragArea) {
          _this2.dragArea3 = dragArea;
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        className: "flexible-modal-drag-area-right",
        style: {
          height: this.state.height
        },
        ref: function ref(dragArea) {
          _this2.dragArea4 = dragArea;
        }
      }), !disableResize && /*#__PURE__*/_react["default"].createElement(_Resizer["default"], {
        updateStateResizing: this.updateStateResizing
      })));
    }
  }]);

  return FlexibleModal;
}(_react.Component);

FlexibleModal.propTypes = {
  className: _propTypes["default"].string,
  minWidth: _propTypes["default"].number,
  minHeight: _propTypes["default"].number,
  isOpen: _propTypes["default"].bool.isRequired,
  isMinimised: _propTypes["default"].bool,
  onRequestClose: _propTypes["default"].func.isRequired,
  onRequestMinimise: _propTypes["default"].func,
  onRequestRecover: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  disableKeystroke: _propTypes["default"].bool,
  disableResize: _propTypes["default"].bool,
  disableMove: _propTypes["default"].bool,
  disableVerticalMove: _propTypes["default"].bool,
  disableHorizontalMove: _propTypes["default"].bool
};
FlexibleModal.defaultProps = {
  className: "",
  isMinimised: false,
  onRequestMinimise: function onRequestMinimise() {},
  onRequestRecover: function onRequestRecover() {},
  onFocus: function onFocus() {},
  disableKeystroke: false,
  disableResize: false,
  disableMove: false,
  disableVerticalMove: false,
  disableHorizontalMove: false
};
var _default = FlexibleModal;
exports["default"] = _default;