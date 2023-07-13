import React, { useContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router";
import { router } from "./Routes/MainRouter/MainRouter";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { CURRENCY_CONTEXT } from "./Context/CurrencyProvider";
import { HiOutlineCurrencyBangladeshi, HiOutlineCurrencyDollar } from "react-icons/hi";
import { MODE_CONTEXT } from "./Context/ModeProvider";

const App = () => {
 const {isDrake,  setIsDrake} = useContext(MODE_CONTEXT)
  const { setIsCurrencyUSD, isCurrencyUSD } = useContext(CURRENCY_CONTEXT);

  useEffect(()=>{
    // ---------- Mode set in localStroge
    const mode = JSON.parse(localStorage.getItem("mode")) ;
    setIsDrake(mode);
  }, [])

  // ------------- This hendler for currency converter 
  const handleCurrenryConveter = () =>{
    setIsCurrencyUSD(!isCurrencyUSD)
    localStorage.setItem("currency", !isCurrencyUSD);
  }

  // -------------- This hendler for mode 
  const handleMode = () =>{
    setIsDrake(!isDrake)
    localStorage.setItem("mode", !isDrake);
  }

  return (
    <main className={` ${isDrake && "dark"}`}>
      <div className="">
        <div className="dark:bg-white fixed right-0 top-1/2 -translate-y-1/2 flex flex-col py-3 px-1 space-y-2 rounded-sm shadow-lg z-50">
          <button onClick={handleMode}>
            {isDrake ? (
              <BiSolidSun className="text-yellow-500" />
            ) : (
              <BiSolidMoon />
            )}
          </button>
          <hr />
          <button onClick={handleCurrenryConveter}>
            {isCurrencyUSD? <HiOutlineCurrencyBangladeshi/>: <HiOutlineCurrencyDollar/>}
          </button>
        </div>

        <RouterProvider router={router}></RouterProvider>
      </div>
    </main>
  );
};

export default App;
