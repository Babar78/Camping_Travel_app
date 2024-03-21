import React from "react";
import DestinationCard from "@/components/DestinationCard";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { FEATURED_DESTINATIONS } from "@/constants/index";

const FeaturedDestinations = () => {
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
      <div className="cardsDiv mt-5 grid lg:grid-cols-3 md:grid-cols-2 gap-10 ">
        {FEATURED_DESTINATIONS.map((destination) => (
          <DestinationCard
            key={destination.title}
            imgSrc={destination.imgSrc}
            title={destination.title}
            location={destination.location}
            price={destination.price}
            amenities={destination.amenities}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedDestinations;
