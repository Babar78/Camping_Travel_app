import Features from "@/sections/AboutUs/Features";
import GetToNow from "@/sections/AboutUs/GetToKnow";
import Hero from "@/sections/AboutUs/Hero";
import DiscoverPassion from "@/sections/AboutUs/DiscoverPassion";
import React from "react";
import ReadyToTravel from "@/sections/AboutUs/ReadyToTravel";
import Testimonials from "@/sections/AboutUs/Testimonials";
import Stats from "@/sections/AboutUs/Stats";

const AboutUs = () => {
  return (
    <>
      <Hero />
      <GetToNow />
      <DiscoverPassion />
      <Features />
      <Stats />
      <Testimonials />
      <ReadyToTravel />
    </>
  );
};

export default AboutUs;
