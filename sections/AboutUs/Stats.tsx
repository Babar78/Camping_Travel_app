"use client";
import CountUp from "react-countup";
import React, { useState, useEffect, useRef } from "react";

const Stats = () => {
  const [isCounting, setIsCounting] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.7; // Adjusted viewport threshold
      const element = statsRef.current;

      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        const sectionTop = top + window.scrollY;
        const sectionBottom = bottom + window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          setIsCounting(true);
        } else {
          setIsCounting(false); // Reset the counting if section is not in viewport
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check to see if section is in viewport on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="py-20 lg:py-32 bg-about-us-stats max-container padding-container rounded-5xl bg-cover bg-center"
      id="Our Stats"
      ref={statsRef}
    >
      <div className="p-10 grid lg:grid-cols-4 md:grid-cols-2 text-white gap-10 w-full">
        <div className="space-y-2 text-center">
          <h4 className="bold-40 lg:bold-52">
            <CountUp start={0} end={30} duration={2.5}>
              {({ countUpRef, start }) => (
                <>
                  <span ref={countUpRef} />
                  {isCounting && start()}
                </>
              )}
            </CountUp>
            .
            <CountUp start={0} end={3} duration={2.5} suffix="k">
              {({ countUpRef, start }) => (
                <>
                  <span ref={countUpRef} />
                  {isCounting && start()}
                </>
              )}
            </CountUp>
          </h4>
          <p className="text-gray-20 regular-16 lg:regular-20">
            Happy Customers
          </p>
        </div>
        <div className="space-y-2 text-center">
          <h4 className="bold-40 lg:bold-52">
            <CountUp start={0} end={40} duration={2.5}>
              {({ countUpRef, start }) => (
                <>
                  <span ref={countUpRef} />
                  {isCounting && start()}
                </>
              )}
            </CountUp>
            .
            <CountUp start={0} end={5} duration={2.5} suffix="k">
              {({ countUpRef, start }) => (
                <>
                  <span ref={countUpRef} />
                  {isCounting && start()}
                </>
              )}
            </CountUp>
          </h4>
          <p className="text-gray-20 regular-16 lg:regular-20">Tent Sites</p>
        </div>
        <div className="space-y-2 text-center">
          <h4 className="bold-40 lg:bold-52">
            <CountUp start={0} end={88} duration={2.5}>
              {({ countUpRef, start }) => (
                <>
                  <span ref={countUpRef} />
                  {isCounting && start()}
                </>
              )}
            </CountUp>
            .
            <CountUp start={0} end={9} duration={2.5} suffix="%">
              {({ countUpRef, start }) => (
                <>
                  <span ref={countUpRef} />
                  {isCounting && start()}
                </>
              )}
            </CountUp>
          </h4>
          <p className="text-gray-20 regular-16 lg:regular-20">
            Satisfaction Rate
          </p>
        </div>
        <div className="space-y-2 text-center">
          <h4 className="bold-40 lg:bold-52">
            <CountUp start={0} end={6} duration={2.5}>
              {({ countUpRef, start }) => (
                <>
                  <span ref={countUpRef} />
                  {isCounting && start()}
                </>
              )}
            </CountUp>
            .
            <CountUp start={0} end={3} duration={2.5} suffix="+">
              {({ countUpRef, start }) => (
                <>
                  <span ref={countUpRef} />
                  {isCounting && start()}
                </>
              )}
            </CountUp>
          </h4>
          <p className="text-gray-20 regular-16 lg:regular-20">
            Years of Experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
