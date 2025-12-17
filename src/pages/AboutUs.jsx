import React from "react";
import PageBanner from "../component/PageBanner";
import aboutbg from "../images/pinban.jpg"
import About from "../component/About";



function AboutUs() {
  return (
    <>
    <PageBanner
  title="About Us"
  bgImage={aboutbg}
/>
     
      <About/>
     
    </>
  );
}

export default AboutUs;
