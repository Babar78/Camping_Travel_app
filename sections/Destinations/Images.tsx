import Image from "next/image";
import React from "react";

const Images = () => {
  return (
    <section className="pb-20 lg:pb-32 max-container padding-container flex justify-center">
      <div className="xs:grid xs:grid-cols-5 grid-cols-1 flex flex-col justify-center items-center gap-10 lg:gap-20 w-fit">
        <Image
          src="/sections/Destinations/g1.png"
          alt="Image 1"
          width={300}
          height={300}
          className="sm:w-full w-[200px] h-auto max-w-[200px]"
        />
        <Image
          src="/sections/Destinations/g2.png"
          alt="Image 1"
          width={300}
          height={300}
          className="sm:w-full w-[200px] h-auto max-w-[200px]"
        />
        <Image
          src="/sections/Destinations/g3.png"
          alt="Image 1"
          width={300}
          height={300}
          className="sm:w-full w-[200px] h-auto max-w-[200px]"
        />
        <Image
          src="/sections/Destinations/g4.png"
          alt="Image 1"
          width={300}
          height={300}
          className="sm:w-full w-[200px] h-auto max-w-[200px]"
        />
        <Image
          src="/sections/Destinations/g5.png"
          alt="Image 1"
          width={300}
          height={300}
          className="sm:w-full w-[200px] h-auto max-w-[200px]"
        />
      </div>
    </section>
  );
};

export default Images;
