"use client";
import React, { useState } from "react";

interface ItemProps {
  title: string;
  icon: React.ReactNode;
}

const FeatureItem = ({ title, icon }: ItemProps) => {
  const [itemHovered, setItemHovered] = useState(false);

  const handleHovered = () => {
    setItemHovered(!itemHovered);
  };

  return (
    <div
      className="flex justify-center items-center w-fit gap-3 cursor-pointer"
      onMouseEnter={handleHovered}
      onMouseLeave={handleHovered}
    >
      <div
        className={`rounded-full ${
          itemHovered ? "bg-green-90" : "bg-green-50"
        } flex items-center justify-center p-3 text-white`}
      >
        {icon}
      </div>
      <span className="bold-16 text-green-90">{title}</span>
    </div>
  );
};

export default FeatureItem;
