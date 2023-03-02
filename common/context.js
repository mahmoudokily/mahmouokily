import { createContext, useContext } from "react";
import React, { useEffect } from "react";
const AppContext = createContext();

export function AppWrapper({ children }) {
  const [lang, setLang] = React.useState("en");

  let sharedState = React.useMemo(() => ({ lang, setLang }), [lang]);

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
