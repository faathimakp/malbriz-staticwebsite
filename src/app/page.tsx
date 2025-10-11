import React from "react";
import Hero from "./_components/Hero";
import About from "./_components/About";
import WhyChooseUs from "./_components/WhyChooseUs";
import ContactUs from "./_components/ContactUs";
import Products from "./_components/Products";
// import Shopping from "./_components/Shopping";
import Export from "./_components/Export";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      {/* <Shopping /> */}
      <Products />
      <WhyChooseUs />
      <Export/>
      <ContactUs />
    </>
  );
};

export default page;
