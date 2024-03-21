import Button from "@/components/Button";
import React from "react";

const CallToAction = () => {
  return (
    <section className="pb-20 lg:pb-32">
      <div className="max-container bg-green-90 p-14 rounded-5xl space-y-5 flex flex-col justify-center items-center">
        <h2 className="bold-32 lg:bold-40 text-white">
          Ready to start your adventure?
        </h2>
        <p className="lg:regular-20 regular-16 text-gray-30">
          Explore our camping packages and book your next trip today!
        </p>
        <Button variant="btn_green" title="Book Now" type="button" />
      </div>
    </section>
  );
};

export default CallToAction;
