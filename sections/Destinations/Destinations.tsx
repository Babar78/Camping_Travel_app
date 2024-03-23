import React from "react";
import DestinationCard from "@/components/DestinationCard";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { DESTINATIONS, TOUR_PACKAGES } from "@/constants/index";
import FeaturedDestinationCard from "@/components/FeaturedDestinationCard";

const Destinations = () => {
  return (
    <section className="py-20 lg:py-32 max-container padding-container flex flex-col items-center gap-10">
      <div className="headings">
        <p className="text-center regular-16 text-green-50 uppercase">
          Featured Destinations
        </p>
        <h2 className="bold-40 lg:bold-64 text-center max-w-[950px] m-auto text-green-90">
          Discover Top Camping Spots
        </h2>
      </div>
      <div className="cardsDiv grid mt-5 lg:grid-cols-3 md:grid-cols-2 gap-10 w-full place-items-center">
        {DESTINATIONS.map((destination) => (
          <FeaturedDestinationCard
            key={destination.id}
            destination={destination.destination}
            imageUrl={destination.imgSrc}
            tours={destination.tours}
          />
        ))}
      </div>
    </section>
  );
};

export default Destinations;
