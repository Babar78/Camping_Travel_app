import React from "react";
import Button from "@/components/Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-center justify-center gap-12">
          <h2 className="bold-40 lg:bold-64">Ready for Your Next Journey?</h2>
          <p className="regular-16 text-gray-10">Browse Travel Packages</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row justify-center">
            <Button
              type="button"
              title="Get Inspired"
              // icon="/apple.svg"
              variant="btn_white"
            />
            <Button
              type="button"
              title="Start Planning"
              // icon="/android.svg"
              variant="btn_dark_green_outline"
            />
          </div>
        </div>

        {/* <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div> */}
      </div>
    </section>
  );
};

export default GetApp;
