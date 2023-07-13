import React, { createContext, useEffect, useReducer, useState } from "react";

export const MODE_CONTEXT = createContext(null);

const ModeProvider = ({ children }) => {
  const [isDrake, setIsDrake] = useState(true);
  return (
    <MODE_CONTEXT.Provider value={{ isDrake, setIsDrake }}>
      {children}
    </MODE_CONTEXT.Provider>
  );
};

export default ModeProvider;
