"use client";
import React from "react";
import SurfingIcon from "@mui/icons-material/Surfing";
import ForestIcon from "@mui/icons-material/Forest";
import FilterHdrIcon from "@mui/icons-material/FilterHdr";
import { Button } from "@mui/material";

const ExploreByRegion = () => {
  const [region, setRegion] = React.useState<string>("mountain");
  const [hoveredRegion, setHoveredRegion] = React.useState<boolean>(false);

  return (
    <section className="max-container padding-container space-y-[3.75rem]">
      <div className="headings">
        <p className="text-center regular-16 text-green-50 uppercase">
          Explore By Region
        </p>
        <h2 className="bold-40 lg:bold-64 text-center max-w-[900px] m-auto text-green-90">
          Camping Destinations Grouped By Region
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-10">
        <div className="col-span-1 shadow-md rounded-3xl p-10 flex flex-col">
          <div className="heading border-b-[1px] border-green-50 pb-5">
            <h2 className="bold-20 text-green-90">Explore By Region</h2>
            <p className="text-gray-30 regular-16 mt-1">
              Discover camping destinations grouped by region, making it easier
              to find the perfect spot for your next adventure:
            </p>
          </div>
          <div className="space-y-2 mt-5 flex flex-col flex-1 justify-between">
            <div
              className={`px-2 py-3 rounded-md border-b-[0.5px] border-gray-20 flex gap-2 hover:cursor-pointer ${
                region === "mountain"
                  ? "text-green-90 bg-gray-100"
                  : "text-gray-30"
              }  hover:text-green-90`}
              onClick={() => setRegion("mountain")}
            >
              <FilterHdrIcon className="text-green-50" />
              <span className="bold-16">Mountain Region</span>
            </div>
            <div
              className={`px-2 py-3 rounded-md border-b-[0.5px] border-gray-20 flex gap-2 hover:cursor-pointer ${
                region === "coastal"
                  ? "text-green-90 bg-gray-100"
                  : "text-gray-30"
              }  hover:text-green-90`}
              onClick={() => setRegion("coastal")}
            >
              <SurfingIcon className="text-green-50" />
              <span className="bold-16">Coastal Region</span>
            </div>
            <div
              className={`px-2 py-3 rounded-md border-b-[0.5px] border-gray-20 flex gap-2 hover:cursor-pointer ${
                region === "forest"
                  ? "text-green-90 bg-gray-100"
                  : "text-gray-30"
              }  hover:text-green-90`}
              onClick={() => setRegion("forest")}
            >
              <ForestIcon className="text-green-50" />
              <span className="bold-16">Forest Region</span>
            </div>
          </div>
        </div>
        <div
          className={`col-span-3 min-h-[450px] rounded-3xl bg-cover bg-center flex justify-center items-center relative hover:cursor-pointer ${
            hoveredRegion ? "" : "bg-opacity-80"
          }`}
          onMouseEnter={() => setHoveredRegion(true)}
          onMouseLeave={() => setHoveredRegion(false)}
          style={{
            backgroundImage:
              hoveredRegion && region === "mountain"
                ? "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url('/sections/Destinations/Region/mountain-camping.jpg')"
                : hoveredRegion && region === "forest"
                ? "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url('/sections/Destinations/Region/forest-camping.jpg')"
                : hoveredRegion && region === "coastal"
                ? "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url('/sections/Destinations/Region/costal-camping.jpg')"
                : region === "mountain"
                ? "url('/sections/Destinations/Region/mountain-camping.jpg')"
                : region === "forest"
                ? "url('/sections/Destinations/Region/forest-camping.jpg')"
                : "url('/sections/Destinations/Region/costal-camping.jpg')",
          }}
        >
          <Button
            className={`border-white hover:bg-green-600 hover:border-green-50 text-white regular-16 rounded-md capitalize transition-all ease-in-out duration-500 ${
              hoveredRegion ? "mt-0 opacity-100" : "mt-20 opacity-0"
            }`}
            variant="outlined"
          >
            Explore More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExploreByRegion;
