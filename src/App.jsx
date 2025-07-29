import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CardSection from "./components/CardSection";
import AboutUs from "./components/AboutUs";
import OurServicesSection from "./components/Services";
import TestimonialSection from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FloatingButtons />
      <CardSection />
      <AboutUs />
      <OurServicesSection/>
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;
