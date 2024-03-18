import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import React from "react";

const linksArray = [
  {
    name: "Home",
    link: "/",
  },
];

const currentPage = "About Us";

const Hero = () => {
  return (
    <section className="bg-about-us-hero min-h-[400px] bg-cover bg-center flex items-end py-10 lg:py-20">
      <div className="max-container padding-container  w-full flex justify-start items-end">
        <div className="bg-green-50 rounded-md px-3 py-2 text-white">
          <CustomBreadcrumbs
            linksArray={linksArray}
            currentPage={currentPage}
            linksColor="white"
            currentPageColor="#e9e9e9"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
