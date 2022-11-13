(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.halo = {}, global.React));
})(this, (function (exports, React) { 'use strict';

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

  const Text = () => {
    return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, /* @__PURE__ */ React__default["default"].createElement("p", null, "\u6587\u672C"));
  };

  exports.Button = Button;
  exports.Text = Text;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.full.js.map
