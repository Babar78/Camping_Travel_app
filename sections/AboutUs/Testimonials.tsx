import Carousel from "@/components/Carousel";
import TestimonialCard from "@/components/TestimonialCard";
import React from "react";

const testimonials = [
  {
    name: "Amelia Rose",
    experience: "Frequent Camper",
    imageSrc: "/sections/about-us/testimonial-1.jpg",
    description:
      "Outstanding Experience! From the breathtaking views to the seamless logistics, our trip organized by Hilink exceeded all expectations. The knowledgeable guides made every moment memorable, and the attention to detail ensured a stress-free adventure. Can't wait to book our next journey with them!",
    rating: 5,
  },
  {
    name: "Olivia Jones",
    experience: "Adventure Seeker",
    imageSrc: "/sections/about-us/testimonial-2.jpg",
    description:
      "Unforgettable Journey! Thanks to Hilink, we embarked on an unforgettable journey filled with discovery and excitement. The carefully curated itinerary introduced us to hidden gems and cultural treasures we wouldn't have found on our own. Exceptional service, knowledgeable guides, and impeccable planning made this trip one for the books!",
    rating: 5,
  },
  {
    name: "Jane Doe",
    experience: "Family Camper",
    imageSrc: "/sections/about-us/testimonial-3.jpg",
    description:
      "Highly Recommend! Our recent trip with Hilink was nothing short of incredible. From start to finish, every aspect was meticulously planned, allowing us to relax and immerse ourselves in the beauty of our surroundings. The passionate guides shared fascinating insights, and the personalized touches made us feel truly valued as customers. We'll definitely be returning for another adventure!",
    rating: 5,
  },
];

const Testimonials = () => {
  // Slide Items

  const slideItems = testimonials.map((testimonial, index) => ({
    id: index,
    content: (
      <TestimonialCard
        name={testimonial.name}
        experience={testimonial.experience}
        imageSrc={testimonial.imageSrc}
        description={testimonial.description}
        rating={testimonial.rating}
      />
    ),
  }));

  return (
    <section className="py-20 lg:py-32 bg-feature-bg bg-no-repeat bg-contain bg-center">
      <div className="max-container padding-container">
        <p className="uppercase text-green-50 regular-16 text-center">
          Testimonial
        </p>
        <h2 className="bold-40 lg:bold-64 text-green-90 mb-5 mt-3 text-center">
          What Our Clients Say?
        </h2>
        <div className="mt-5 testimonialsCarousel">
          <Carousel slideItems={slideItems} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
