import React from "react";
// Icons
import MapIcon from "@mui/icons-material/Map";

const PlanYourTrip = () => {
  return (
    <section className="py-20 lg:py-32 max-container padding-container flex flex-col items-center gap-10">
      <div className="headings">
        <p className="text-center regular-16 text-green-50 uppercase">
          Plan Your Trip
        </p>
        <h2 className="bold-40 lg:bold-64 text-center max-w-[900px] m-auto text-green-90">
          Prepare Your Journey
        </h2>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 lg:gap-20 mt-6">
        <div className="text-center">
          <h2 className="bold-20 text-green-90">Trip Planner</h2>
          <p className="regular-14 text-gray-30 mt-3">
            Plan your itinerary, book campsites, and map out your route with our
            easy-to-use trip planning tool.
          </p>
        </div>
        <div className=" text-center">
          <h2 className="bold-20 text-green-90">Gear Rental</h2>
          <p className="regular-14 text-gray-30 mt-3">
            Rent camping gear, equipment, and outdoor essentials from trusted
            providers to ensure you have everything you need for a successful
            trip.
          </p>
        </div>
        <div className=" text-center">
          <h2 className="bold-20 text-green-90">Community Forums</h2>
          <p className="regular-14 text-gray-30 mt-3">
            Connect with fellow campers, share tips and advice, and get answers
            to your burning questions in our vibrant camping community forums.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlanYourTrip;
