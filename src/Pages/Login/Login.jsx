import React from "react";
import visuBg from "../../assets/images/visu-bg.png";
import { Link } from "react-router-dom";
import SingupForm from "../../Components/Shared/SingupForm/SingupForm";
const Login = () => {
  return (
    <section
      className="min-h-screen h-full  relative"
      style={{
        backgroundImage: `url(${visuBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SingupForm />

      <div className="absolute right-[30px] bottom-5 lg:w-[500px] text-center">
        <div className="space-x-3">
          <Link className="text-white text-[13px]">Home</Link>
          <Link className="text-white text-[13px]">Help Center</Link>
          <Link className="text-white text-[13px]">Privacy Policy</Link>
        </div>
        <small className="text-[#9193a8] text-[13px]">
          Use of this Site is subject to express terms of use. By using this
          site, you signify that you agree to be bound by these{" "}
          <Link>Universal Terms of Service.</Link>
        </small>
      </div>
    </section>
  );
};

export default Login;
