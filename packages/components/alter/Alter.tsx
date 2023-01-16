import React, { useEffect, useState, type FC, type ReactNode } from "react";
import { createRoot } from "react-dom/client";

interface IAlterProps {
  info: string;
  count?: number;
}

const queue = new Set();

const Alter: FC<IAlterProps> = ({ info, count = 1 }) => {
  useEffect(() => {
    return () => {
      console.log("执行卸载");
    };
  }, [[]]);
  return (
    <div className="ha-alter" style={{ top: `${count * 30}px` }}>
      {info ? info : "alter"}
    </div>
  );
};

const kkbAlter = (info: string, timer: number = 3000) => {
  let warp = document.createElement("div");
  const root = createRoot(warp);

  queue.add(warp);

  document.body.appendChild(warp);
  setTimeout(() => {
    document.body.removeChild(warp);
    root.unmount();
    queue.delete(warp);
  }, timer);
  root.render(<Alter info={info} count={queue.size} />);
};

export default kkbAlter;
