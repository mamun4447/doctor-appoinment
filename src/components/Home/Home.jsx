import React from "react";
import Appoinment from "./Appoinment";
import Category from "./Category";
import ContactUs from "./ContactUs";
import Hero from "./Hero";
import Service from "./Service";
import Terms from "./Terms";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Service />
      <Terms />
      <Appoinment />
      <Testimonial />
      <ContactUs />
    </div>
  );
};

export default Home;
