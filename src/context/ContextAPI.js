import React, { createContext, useContext, useEffect, useState } from "react";
import Translate from "./TranslateData.json";

const ContextAPI = createContext({});

window.localStorage.getItem("language")
  ? window.localStorage.getItem("language")
  : window.localStorage.setItem("language", "en");

const ContextProvider = ({ children }) => {
  const [translat, setTranslat] = useState(
    window.localStorage.getItem("language")
  );
  const [contant, setContant] = useState({});

  useEffect(() => {
    if (window.localStorage.getItem("language") === "ar") {
      document.body.style.direction = "rtl";
      setContant(Translate.ar);
    }
    if (window.localStorage.getItem("language") === "en") {
      document.body.style.direction = "ltr";
      setContant(Translate.en);
    }
  }, [translat, contant]);

  const changeLanguage = () => {
    setTranslat("en");
    window.localStorage.setItem("language", "en");
    window.location.reload(false);
  };
  const changeLanguage2 = () => {
    setTranslat("ar");
    window.localStorage.setItem("language", "ar");
    window.location.reload(false);
  };
  return (
    <ContextAPI.Provider value={{ contant, changeLanguage, changeLanguage2 }}>
      {children}
    </ContextAPI.Provider>
  );
};

export default ContextProvider;

export const useContextTranslate = () => {
  return useContext(ContextAPI);
};
