import React, { type FC, type ReactNode } from "react";

interface ITextProps {
  children?: ReactNode;
}

const Text: FC<ITextProps> = (props) => {
  const { children } = props;

  return (
    <>
      <p>{children ? children : "默认文本"}</p>
    </>
  );
};

export default Text;
