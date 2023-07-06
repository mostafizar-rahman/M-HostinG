import React, { useState } from "react";
import { RouterProvider } from "react-router";
import { router } from "./Routes/MainRouter/MainRouter";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const App = () => {
  const [drake, setDrake] = useState(true);
  return (
    <main className={` ${drake && "dark"}`}>
      <div className="dark:bg-[#0b0c1b]">
        <div className="dark:bg-white fixed right-0 top-1/2 -translate-y-1/2 flex flex-col py-3 px-1 space-y-2 rounded-sm shadow-lg">
          <button onClick={()=> setDrake(!drake)}>{drake ? <BiSolidSun className="text-yellow-500"/> : <BiSolidMoon />}</button>
          <hr />
          <button>$</button>
        </div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </main>
  );
};

export default App;
