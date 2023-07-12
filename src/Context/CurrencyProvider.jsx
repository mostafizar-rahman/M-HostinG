import React, { createContext, useEffect, useReducer, useState } from "react";

export const CURRENCY_CONTEXT = createContext(null);

const CurrencyProvider = ({ children }) => {
  const [isCurrencyUSD, setIsCurrencyUSD] = useState(true);
  useEffect(() => {
    const currency = JSON.parse(localStorage.getItem("currency"));

    setIsCurrencyUSD(currency);
  }, []);
  return (
    <CURRENCY_CONTEXT.Provider value={{ isCurrencyUSD, setIsCurrencyUSD }}>
      {children}
    </CURRENCY_CONTEXT.Provider>
  );
};

export default CurrencyProvider;
