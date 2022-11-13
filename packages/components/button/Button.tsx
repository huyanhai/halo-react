import React, { useState, forwardRef, type ForwardRefRenderFunction, type ReactNode, type ForwardedRef, useContext } from "react";

import { GlobalContext } from "../provider/Provider";

interface IButtonProps {
  onClick?: (v: number) => void;
  children?: ReactNode;
  ref?: ForwardedRef<any>;
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, IButtonProps> = (props, ref) => {
  const [count, setCount] = useState(0);
  const { onClick, children } = props;
  const { lang, theme } = useContext(GlobalContext);

  const show = () => {
    setCount(count + 1);
    onClick && onClick(count);
  };

  return (
    <>
      <button ref={ref} onClick={show}>
        {lang}
        {children ? children : "默认文案"}
      </button>
    </>
  );
};

export default forwardRef<HTMLButtonElement, IButtonProps>(Button);
