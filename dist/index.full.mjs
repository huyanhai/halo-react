import React, { useState } from 'react';

const Button = (props) => {
  const [count, setCount] = useState();
  const show = () => {
    setCount(count + 1);
    props.show(count);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
    onClick: show
  }, props.children ? props.children : "\u9ED8\u8BA4\u6587\u6848"));
};

const Text = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, "\u6587\u672C"));
};

export { Button, Text };
