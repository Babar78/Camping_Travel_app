import Button from "@/components/Button";
import React from "react";

const DiscoverPassion = () => {
  return (
    <section className="bg-about-us-perfect-camping py-20 lg:py-32 bg-bottom bg-cover min-h-[650px] flex items-center">
      <div className="max-container padding-container text-white xl:w-[75%] space-y-5 flex flex-col items-center">
        <h2 className=" bold-40 lg:bold-64 text-center">
          Discover Our Passion for Outdoor Exploration
        </h2>
        <p className="regular-16 text-center">
          At TravelTrek, we're more than just a platform for camping enthusiasts;
          we're a community united by our love for adventure and the great
          outdoors. Our mission is to inspire, inform, and empower individuals
          to connect with nature and create unforgettable memories under the
          open sky. With a team of seasoned explorers at the helm, we're
          dedicated to providing you with the tools, knowledge, and inspiration
          you need to embark on your own outdoor journey. Join us as we
          celebrate the beauty of nature and the joy of camping in all its
          forms.
        </p>
        <Button type="button" title="Learn More" variant="btn_green" />
      </div>
    </section>
  );
};

export default DiscoverPassion;
