import React from "react";
import visuBg from "../../assets/images/visu-bg.png";
import { Link } from "react-router-dom";
import SingupForm from "../../Components/Shared/SingupForm/SingupForm";
import { Helmet } from "react-helmet";
const Login = () => {
  return (
    <>
      <Helmet>
        ‍<title>Login-HostCity</title>‍
        <meta
          name="description"
          content="the process where a web hosting provider stores and maintains website files and applications on a server to make its customers' websites accessible on the internet"
        />
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <section
        className="min-h-screen h-full  relative"
        style={{
          backgroundImage: `url(${visuBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <SingupForm />

        <div className="lg:absolute py-[80px] lg:py-0  right-[30px] bottom-5 max-w-[500px] mx-auto text-center lg:text-left">
          <div className="space-x-3">
            <Link className="text-white text-[13px]">Home</Link>
            <Link className="text-white text-[13px]">Help Center</Link>
            <Link className="text-white text-[13px]">Privacy Policy</Link>
          </div>
          <small className="text-[#9193a8] text-[13px]">
            Use of this Site is subject to express terms of use. By using this
            site, you signify that you agree to be bound by these{" "}
            <Link className="text-white font-medium hover:underline">
              Universal Terms of Service.
            </Link>
          </small>
        </div>
      </section>
    </>
  );
};

export default Login;
