import FeatureItem from "@/components/FeatureItem";
import Image from "next/image";
import React from "react";
import LinearProgressBar from "@/components/LinearProgressBar";
import Button from "@/components/Button";
// Icons
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import GroupsIcon from "@mui/icons-material/Groups";

const GetToKnow = () => {
  return (
    <section className="max-container padding-container py-20 lg:py-32 grid xl:grid-cols-7 md:grid-cols-4 lg:gap-20 gap-10 items-center">
      <div className="grid grid-cols-2 gap-10 items-end xl:col-span-3 md:col-span-2 h-full">
        <Image
          src="/sections/about-us/get-to-know-1.jpg"
          width={250} // Set width to a percentage value
          height={100}
          alt="Get to know 1"
          className="rounded-full overflow-hidden md:h-full h-[550px] w-full object-cover"
        />
        <div className="relative h-full flex flex-col justify-between w-full bg-green-90 rounded-full">
          <h2 className="lg:bold-28 bold-20 text-white text-center mt-14">
            <i className="regular-20">30%</i>
            <br />
            Discount
          </h2>
          <Image
            src="/sections/about-us/get-to-know-2.jpg"
            width={250} // Set width to a percentage value
            height={100}
            alt="Get to know 1"
            className="rounded-full overflow-hidden md:h-full h-[400px] w-full object-cover"
          />
        </div>
      </div>
      <div className="xl:col-span-4 md:col-span-2">
        <p className="uppercase text-green-50 regular-16">GET TO KNOW US</p>
        <h2 className="bold-40 lg:bold-64 text-green-90 mb-5 mt-3">
          Experience the World with Our Trevlo Company
        </h2>
        <p className="regular-16 text-gray-30 lg:max-w-[80%]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some There are many
          variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some
        </p>

        <div className="featuresDiv flex lg:gap-10 gap-5 my-10">
          <FeatureItem
            title="Safety First
            Always"
            icon={
              <HealthAndSafetyIcon
                sx={{
                  width: 40,
                  height: 40,
                }}
              />
            }
          />
          <FeatureItem
            title="Friendly Guides"
            icon={
              <GroupsIcon
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
        <Button variant="btn_dark_green" title="Discover More" type="button" />
      </div>
    </section>
  );
};

export default GetToKnow;
