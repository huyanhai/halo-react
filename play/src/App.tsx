import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { Button, Text } from "../../packages/halo";

function App() {
  const [count, setCount] = useState(0);

  const show = (count: number) => {
    setCount(count);
  };

  const showObj = (obj) => {
    console.log(obj);
  };

  return (
    <div className="App">
      count:{count}
      按钮{" "}
      <Button show={show} showObj={showObj}>
        按钮文字
      </Button>
      文本
      <Text />
    </div>
  );
}

export default App;
