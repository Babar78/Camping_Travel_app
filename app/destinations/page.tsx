import CallToAction from "@/components/CallToAction";
import ExploreByRegion from "@/sections/Destinations/ExploreByRegion";
import FeaturedDestinations from "@/sections/Destinations/FeaturedDestinations";
import Hero from "@/sections/Destinations/Hero";
import Images from "@/sections/Destinations/Images";
import PlanYourTrip from "@/sections/Destinations/PlanYourTrip";
import React from "react";

const Destinations = () => {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <Images />
      <ExploreByRegion />
      <PlanYourTrip />
      <CallToAction />
    </>
  );
};

export default Destinations;
