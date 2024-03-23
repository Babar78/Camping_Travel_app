"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

interface FeaturedDestinationCardProps {
  destination: string;
  imageUrl: string;
  tours: number;
}

const FeaturedDestinationCard = ({
  destination,
  imageUrl,
  tours,
}: FeaturedDestinationCardProps) => {
  const [hoveredDestination, setHoveredDestination] =
    React.useState<boolean>(false);
  return (
    <div
      className={`rounded-md bg-cover bg-center bg-no-repeat relative flex justify-center items-center lg:h-[450px] lg:max-w-[400px] h-[350px] max-w-[300px] w-full transition-all ease-in-out duration-500 ${
        hoveredDestination ? "" : "delay-500"
      }`}
      style={{
        backgroundImage: hoveredDestination
          ? `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url('${imageUrl}')`
          : `url('${imageUrl}')`,
      }}
      onMouseEnter={() => setHoveredDestination(true)}
      onMouseLeave={() => setHoveredDestination(false)}
    >
      <div className="bg-green-90 px-2 py-1 absolute top-[10px] right-[10px] rounded-md">
        <p className="text-white text-[12px]">
          {tours} {tours > 1 ? "Tours" : "Tour"}
        </p>
      </div>
      <div
        className={`transition-all ease-in-out duration-500 text-center ${
          hoveredDestination ? "transform -translate-y-1/2 top-1/2" : "bottom-0"
        } absolute`}
      >
        <h2 className="bold-20 text-white">{destination}</h2>
        <Link
          href="#"
          className={`text-green-50 bold-16 rounded-md capitalize transition-all ease-in-out duration-300 delay-100 ${
            hoveredDestination ? "opacity-100" : "opacity-0"
          }`}
        >
          View All Tours
        </Link>
      </div>
    </div>
  );
};

export default FeaturedDestinationCard;
