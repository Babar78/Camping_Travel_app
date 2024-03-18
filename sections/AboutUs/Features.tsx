import React from "react";

const Features = () => {
  return (
    <section className="max-container padding-container py-20 lg:py-32">
      <p className="text-center regular-16 text-green-50 uppercase">
        Why Choose Us?
      </p>
      <h2 className="bold-40 lg:bold-64 text-center max-w-[900px] m-auto text-green-90">
        Camping Excellence
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 lg:gap-14 mt-6">
        <div className="text-center">
          <h2 className="bold-20 text-green-90">Expert Guides</h2>
          <p className="regular-14 text-gray-30 mt-3">
            Benefit from our team's expert advice and insider tips on the best
            camping spots, gear essentials, and safety protocols.
          </p>
        </div>
        <div className=" text-center">
          <h2 className="bold-20 text-green-90">Community Connection</h2>
          <p className="regular-14 text-gray-30 mt-3">
            Connect with like-minded outdoor enthusiasts, share experiences, and
            exchange recommendations in our vibrant camping community.
          </p>
        </div>
        <div className=" text-center">
          <h2 className="bold-20 text-green-90">Nature Education</h2>
          <p className="regular-14 text-gray-30 mt-3">
            Dive deeper into the natural world with our educational resources,
            including articles, guides, and videos on wildlife, conservation,
            and sustainable camping practices.
          </p>
        </div>
        <div className=" text-center">
          <h2 className="bold-20 text-green-90">Exclusive Offers</h2>
          <p className="regular-14 text-gray-30 mt-3">
            Enjoy exclusive discounts, deals, and special offers on camping
            gear, equipment rentals, and outdoor experiences curated just for
            our community members.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
