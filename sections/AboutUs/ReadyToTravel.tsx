import FeatureItem from "@/components/FeatureItem";
import Image from "next/image";
import React from "react";
import LinearProgressBar from "@/components/LinearProgressBar";
import Button from "@/components/Button";
// Icons
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const ReadyToTravel = () => {
  //
  return (
    <section className=" py-20 lg:py-32 bg-gray-10 mb-20">
      <div className="max-container padding-container grid md:grid-cols-4 lg:gap-20 gap-10 items-center h-fit">
        <div className="md:col-span-2">
          <p className="uppercase text-green-50 regular-16">
            ARE YOU READY TO TRAVEL
          </p>
          <h2 className="bold-40 lg:bold-64 text-green-90 mb-5 mt-3">
            Choose Our Tour Types & Enjoy Now
          </h2>
          <p className="regular-16 text-gray-30 lg:max-w-[80%]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteradution in some form by injected
            humour, some form
          </p>

          <div className="featuresDiv flex lg:gap-10 gap-5 my-10">
            <FeatureItem
              title="Low Price Friendly"
              icon={
                <MonetizationOnIcon
                  sx={{
                    width: 40,
                    height: 40,
                  }}
                />
              }
            />
            <FeatureItem
              title="Safety First always"
              icon={
                <HealthAndSafetyIcon
                  sx={{
                    width: 40,
                    height: 40,
                  }}
                />
              }
            />
          </div>
          <div className="lg:max-w-[80%] getToKnowProgressBar mb-10">
            <p className="bold-16 mb-1.5">Experience</p>
            <LinearProgressBar />
          </div>
          <Button
            variant="btn_dark_green"
            title="Discover More"
            type="button"
          />
        </div>
        <div className="grid grid-cols-2 gap-10 md:col-span-2 max-h-[550px]">
          <div className="relative flex flex-col w-full rounded-full gap-10">
            <Image
              src="/sections/about-us/get-to-know-2.jpg"
              width={250} // Set width to a percentage value
              height={100}
              alt="Get to know 1"
              className="rounded-lg overflow-hidden h-[350px] w-full object-cover"
            />
            <Image
              src="/sections/about-us/get-to-know-2.jpg"
              width={250} // Set width to a percentage value
              height={100}
              alt="Get to know 1"
              className="rounded-lg overflow-hidden h-[180px] w-full object-cover"
            />
          </div>
          <div className="relative flex flex-col justify-between w-full rounded-full gap-10 h-[90%]">
            <Image
              src="/sections/about-us/get-to-know-2.jpg"
              width={250} // Set width to a percentage value
              height={100}
              alt="Get to know 1"
              className="rounded-md overflow-hidden h-[250px] w-full object-cover"
            />
            <Image
              src="/sections/about-us/get-to-know-2.jpg"
              width={250} // Set width to a percentage value
              height={100}
              alt="Get to know 1"
              className="rounded-md overflow-hidden h-[250px] w-[90%] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToTravel;
