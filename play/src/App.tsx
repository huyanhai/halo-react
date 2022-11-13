import { useState, createRef } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { Button, Text, Provider } from "../../packages/halo";
import List from "./components/List";

function App() {
  const [lang, setLang] = useState<"zh" | "en" | "ja">("zh");
  const ref = createRef<HTMLButtonElement>();

  const changeLang = (v: number) => {
    setLang(lang === "zh" ? "en" : "zh");
  };

  return (
    <div className="App">
      <Provider lang={lang}>
        <Button onClick={changeLang} ref={ref}>
          按钮文字
        </Button>
        <Text>文本</Text>
        <List />
      </Provider>
    </div>
  );
}

export default App;
