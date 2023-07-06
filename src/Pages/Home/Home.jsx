import React from "react";
import Banner from "../../Components/Banner/Banner";
import OperatingSystems from "../../Components/OperatingSystems/OperatingSystems";
import HostingPlans from "../../Components/HostingPlans/HostingPlans";
import Features from "../../Components/Features/Features";
import SupportServices from "../../Components/SupportServices/SupportServices";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Faqs from "../../Components/Shared/Faqs/Faqs";
import Footer from "../../Components/Shared/Footer/Footer";

const Home = () => {
  return (
    <section >
      <Banner />
      <OperatingSystems />
      <HostingPlans />
      <Features />
      <SupportServices />
      <Testimonial />
      <Faqs />
      <Footer />
    </section>
  );
};

export default Home;
