import React, { useState } from "react";
const Button = (props: any) => {
  const [count, setCount] = useState(0);

  const show = () => {
    setCount(count + 1);
    props.show(count);
  };

  const showObj = () => {
    props.showObj({
      name: "test",
      age: 10,
    });
  };

  return (
    <>
      <button onClick={show}>{props.children ? props.children : "默认文案"}</button>
      <button onClick={showObj}>对象</button>
    </>
  );
};

export default Button;
