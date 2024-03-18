import React from "react";

const Features = () => {
  return (
    <section className="max-container padding-container">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 lg:gap-14">
        <div className="text-center">
          <h2 className="bold-20">Expert Guides</h2>
          <p className="regular-14 text-gray-30 mt-3">
            Benefit from our team's expert advice and insider tips on the best
            camping spots, gear essentials, and safety protocols.
          </p>
        </div>
        <div className=" text-center">
          <h2 className="bold-20">Community Connection</h2>
          <p className="regular-14 text-gray-30 mt-3">
            Connect with like-minded outdoor enthusiasts, share experiences, and
            exchange recommendations in our vibrant camping community.
          </p>
        </div>
        <div className=" text-center">
          <h2 className="bold-20">Nature Education</h2>
          <p className="regular-14 text-gray-30 mt-3">
            Dive deeper into the natural world with our educational resources,
            including articles, guides, and videos on wildlife, conservation,
            and sustainable camping practices.
          </p>
        </div>
        <div className=" text-center">
          <h2 className="bold-20">Exclusive Offers</h2>
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
