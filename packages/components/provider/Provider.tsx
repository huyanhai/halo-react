import React, { createContext, type FC, type ReactNode } from "react";
type TLang = "zh" | "en" | "ja";

interface IPriverType extends IGlobalProvider {
  children: ReactNode;
}

interface IGlobalProvider {
  lang?: TLang;
  theme?: "dark" | "light";
}

export const GlobalContext = createContext<IGlobalProvider>({
  lang: "zh",
  theme: "light",
});

const Provider: FC<IPriverType> = ({ lang, theme, children }) => {
  return (
    <>
      <GlobalContext.Provider value={{ lang, theme }}>{children && children}</GlobalContext.Provider>
    </>
  );
};

export default Provider;
