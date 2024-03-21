import ExploreByRegion from "@/sections/Destinations/ExploreByRegion";
import FeaturedDestinations from "@/sections/Destinations/FeaturedDestinations";
import Hero from "@/sections/Destinations/Hero";
import Images from "@/sections/Destinations/Images";
import PlanYourTrip from "@/sections/Destinations/PlanYourTrip";
import Tips from "@/sections/Destinations/Tips";
import React from "react";

const Destinations = () => {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <ExploreByRegion />
      <Tips />
      <PlanYourTrip />
      <Images />
    </>
  );
};

export default Destinations;
