'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Button = (props) => {
  const [count, setCount] = React.useState();
  const show = () => {
    setCount(count + 1);
    props.show(count);
  };
  return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, /* @__PURE__ */ React__default["default"].createElement("button", {
    onClick: show
  }, props.children ? props.children : "\u9ED8\u8BA4\u6587\u6848"));
};

exports["default"] = Button;
//# sourceMappingURL=Button.js.map
