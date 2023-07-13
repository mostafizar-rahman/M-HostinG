import React, { useEffect, useRef } from "react";
import Title from "../../Components/Title/Title";
import screenShareIcon from "../../assets/images/screen-share-icon.svg";
import media1 from "../../assets/images/media-01.jpg";
import media2 from "../../assets/images/02.jpg";
import solution from "../../assets/images/solution.png";
import Footer from "../../Components/Shared/Footer/Footer";
const About = () => {
  const scrollRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        scrollRef.current.style.top = '32%'
        scrollRef.current.style.transition = 'all .5s '

        console.log("first")
      }
      else if(scrollPosition < 150){
        scrollRef.current.style.top = '25%'
        scrollRef.current.style.transition = 'all .5s '
      }
    };

    // Add event listener to window for scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <section className="dark:bg-[#0b0c1b]  ">
        <div className="max-w-[1400px] mx-auto lg:px-14 px-5 py-[120px] relative">
          <Title
            main={
              "We champion entrepreneurs by delivering the perfect help and tools for their journey."
            }
            sub={"ABOUT HOSTX"}
          />
          <div
            ref={scrollRef}
            className="animation hidden xl:flex justify-between w-[80%]  absolute left-1/2 -translate-x-1/2 top-[25%]"
          >
            <div>
              <img src={screenShareIcon} alt="" />
            </div>
            <div>
              <img src={screenShareIcon} alt="" />
            </div>
          </div>
          <div className="max-w-[900px] max-h-[470px] flex justify-center items-center mt-[120px] mx-auto">
            <img src={media1} alt="" className="w-full" />
          </div>
        </div>
      </section>

      <section className="dark:bg-[#0b0c1b]  ">
        <div className="max-w-[1400px] mx-auto lg:px-14 px-5 py-[70px] ">
          <Title
            main={
              "We’re a trusted growth partner to millions of everyday entrepreneurs."
            }
            sub={"OVERVIEW"}
          />
          <div className="flex flex-wrap justify-between">
            <div className="text-center basis-1/3 px-[30px] pt-[60px]">
              <h1 className="xl:text-5xl md:text-4xl text-[32px] font-bold mb-[25px] dark:text-white">
                2003
              </h1>
              <p className="xl:text-xl md:text-lg text-sm  mb-[25px] dark:text-[#9193a8] font-semibold">
                Hostx hosting services was founded by Matt Heaton and Danny in
                Provo.
              </p>
            </div>
            <div className="text-center basis-1/3 px-[30px] pt-[60px]">
              <h1 className="xl:text-5xl md:text-4xl text-[32px] font-bold mb-[25px] dark:text-white">
                2003
              </h1>
              <p className="xl:text-xl md:text-lg text-sm  mb-[25px] dark:text-[#9193a8] font-semibold">
                We power websites all over the world and support thousands more
                every day.
              </p>
            </div>
            <div className="text-center basis-1/3 px-[30px] pt-[60px]">
              <h1 className="xl:text-5xl md:text-4xl text-[32px] font-bold mb-[25px] dark:text-white">
                2003
              </h1>
              <p className="xl:text-xl md:text-lg text-sm  mb-[25px] dark:text-[#9193a8] font-semibold">
                Our vast team is dedicated to helping our customers around the
                clock.
              </p>
            </div>
          </div>
          {/* ------------------ */}
          <div className="flex lg:flex-row flex-col items-center lg:space-x-20 space-x-0 pt-[145px] mb-[100px]">
            <div className="lg:basis-1/2 w-full lg:mb-0 mb-[30px]">
              <img src={media2} alt="" className="w-full" />
            </div>
            <div className="lg:basis-1/2 w-full text-center lg:text-left">
              <h4 className="text-xl font-semibold mb-[10px] text-[#0060fe]">
                Committed to WordPress
              </h4>
              <h1 className="xl:text-4xl lg:text-2xl text-xl font-semibold dark:text-white mb-9 leading-[1.3]">
                Our leadership team humbly and passionately dedicates itself to
                unleashing the collective power of everyday entrepreneurs.
              </h1>
              <p className="xl:text-lg lg:text-base text-sm font-medium dark:text-[#9193a8] mb-9 leading-[1.7]">
                Hostx is the place folks come to name their idea, create a
                compelling brand and a great looking website, attract customers
                with digital and social marketing, and manage their work. Where
                no tool alone will do, we give direct one-on-one guidance with a
                human connection.
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center mb-[100px]">
            <div className="lg:basis-1/2 w-full lg:mb-0 mb-[30px] lg:order-2 lg:ml-[45px] ml-0">
              <img src={media2} alt="" className="w-full" />
            </div>
            <div className="lg:basis-1/2 w-full text-center lg:text-left lg:mr-[45px] mr-0">
              <h4 className="text-xl font-semibold mb-[10px] text-[#0060fe]">
                Committed to WordPress
              </h4>
              <h1 className="xl:text-4xl lg:text-2xl text-xl font-semibold dark:text-white mb-9 leading-[1.3]">
                Our leadership team humbly and passionately dedicates itself to
                unleashing the collective power of everyday entrepreneurs.
              </h1>
              <p className="xl:text-lg lg:text-base text-sm font-medium dark:text-[#9193a8] mb-9 leading-[1.7]">
                Hostx is the place folks come to name their idea, create a
                compelling brand and a great looking website, attract customers
                with digital and social marketing, and manage their work. Where
                no tool alone will do, we give direct one-on-one guidance with a
                human connection.
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center lg:space-x-20 space-x-0">
            <div className="lg:basis-1/2 w-full lg:mb-0 mb-[30px]">
              <img src={media2} alt="" className="w-full" />
            </div>
            <div className="lg:basis-1/2 w-full text-center lg:text-left">
              <h4 className="text-xl font-semibold mb-[10px] text-[#0060fe]">
                Committed to WordPress
              </h4>
              <h1 className="xl:text-4xl lg:text-2xl text-xl font-semibold dark:text-white mb-9 leading-[1.3]">
                Our leadership team humbly and passionately dedicates itself to
                unleashing the collective power of everyday entrepreneurs.
              </h1>
              <p className="xl:text-lg lg:text-base text-sm font-medium dark:text-[#9193a8] mb-9 leading-[1.7]">
                Hostx is the place folks come to name their idea, create a
                compelling brand and a great looking website, attract customers
                with digital and social marketing, and manage their work. Where
                no tool alone will do, we give direct one-on-one guidance with a
                human connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark:bg-[#0b0c1b]  ">
        <div className="max-w-[1400px] mx-auto lg:px-14 px-5 py-[70px]">
          <Title
            main={
              "We champion entrepreneurs by delivering the perfect help and tools for their journey."
            }
            sub={"WHAT WE DO"}
          />
          <div className="flex flex-wrap justify-between">
            <div className="text-center basis-1/3 px-[30px] pt-[60px]">
              <div>
                <img
                  src={solution}
                  alt=""
                  className="w-[140px] mb-[30px] mx-auto"
                />
              </div>
              <h1 className="lg:text-xl text-lg  font-bold mb-5 dark:text-white">
                Complete Web Solutions
              </h1>
              <p className="lg:text-base  text-sm   dark:text-[#9193a8] font-normal">
                Hostx hosting services was founded by Matt Heaton and Danny in
                Provo.
              </p>
            </div>
            <div className="text-center basis-1/3 px-[30px] pt-[60px]">
              <div>
                <img
                  src={solution}
                  alt=""
                  className="w-[140px] mb-[30px] mx-auto"
                />
              </div>
              <h1 className="lg:text-xl text-lg  font-bold mb-5 dark:text-white">
                Complete Web Solutions
              </h1>
              <p className="lg:text-base  text-sm   dark:text-[#9193a8] font-normal">
                Hostx hosting services was founded by Matt Heaton and Danny in
                Provo.
              </p>
            </div>
            <div className="text-center basis-1/3 px-[30px] pt-[60px]">
              <div>
                <img
                  src={solution}
                  alt=""
                  className="w-[140px] mb-[30px] mx-auto"
                />
              </div>
              <h1 className="lg:text-xl text-lg  font-bold mb-5 dark:text-white">
                Complete Web Solutions
              </h1>
              <p className="lg:text-base  text-sm   dark:text-[#9193a8] font-normal">
                Hostx hosting services was founded by Matt Heaton and Danny in
                Provo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
