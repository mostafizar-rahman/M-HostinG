import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layouts/Root/Root";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import VPSHostingServers from "../../Pages/VpsHostingServices/VPSHostingServers";
import Domains from "../../Pages/Domains/Domains";
import SharedHosting from "../../Pages/SharedHosting/SharedHosting";
import DedicatedHosting from "../../Pages/DedicatedHosting/DedicatedHosting";
import About from "../../Pages/About/About";
import Register from "../../Pages/Register/Register";
import Contact from "../../Pages/Contact/Contact";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/VPS-Hosting-Servers", element: <VPSHostingServers /> },
      { path: "/Shared-Hosting-Services", element: <SharedHosting /> },
      { path: "/Dedicated-Hosting-Servers", element: <DedicatedHosting /> },
      { path: "/about", element: <About /> },
      { path: "/domains", element: <Domains /> },
      { path: "/contact", element: <Contact/> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register/> },
]);
