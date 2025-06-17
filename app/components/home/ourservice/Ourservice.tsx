import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

// interface Service {
//   id: number;
//   image: string;
//   title: string;
//   description: string;
//   bgColor: string;
// }

// interface Review {
//   id: number;
//   name: string;
//   role: string;
//   avatar: string;
//   rating: number;
//   review: string;
// }

const TravelServicesComponent = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const services = [
    {
      id: 1,
      image: "/ourservices/service1.png",
      title: "Ticket Booking",
      description:
        "We book all types of domestic and international tickets for your convenience.",
      bgColor: "bg-blue-500",
    },
    {
      id: 2,
      image: "/ourservices/service2.png",
      title: "Hotel Booking",
      description:
        "We carefully book your stay according to your budget and preferences.",
      bgColor: "bg-gray-100",
    },
    {
      id: 3,
      image: "/ourservices/service3.png",
      title: "Tour Plan",
      description:
        "We provide the best tour plan according to your budget and preferences.",
      bgColor: "bg-blue-500",
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "John Doe",
      role: "Travel Photographer",
      avatar: "/reviews/review2.png",
      rating: 5,
      review:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
    },
    {
      id: 2,
      name: "John Smith",
      role: "Travel Photographer",
      avatar: "/reviews/reviews1.png",
      rating: 5,
      review:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
    },
    {
      id: 3,
      name: "Tamara Smith",
      role: "Travel Photographer",
      avatar: "/reviews/review3.png",
      rating: 5,
      review:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
  };

  const prevReview = () => {
    setCurrentReview(
      (prev) =>
        (prev - 1 + Math.ceil(reviews.length / 3)) %
        Math.ceil(reviews.length / 3)
    );
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Our Service Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
            Our Service
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={`${service.bgColor} ${
                  service.bgColor === "bg-gray-100"
                    ? "text-black"
                    : "text-white"
                } rounded-lg p-6 shadow-md flex flex-col items-start justify-center h-48 sm:h-52 transition-transform transform hover:scale-105`}
              >
                <div className="mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Traveler's Experiences Section */}
        <div className="text-center py-12 ">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Traveler&apos;s Experiences
          </h2>
          <p className="text-base sm:text-lg text-gray-500 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Discover the incredible stories and feedback from our travelers who
            explored the world with us.
          </p>

          <div className="relative px-4 sm:px-8 lg:px-12">
            {/* Carousel Container with proper spacing for avatars */}
            <div className=" mt-9 mb-4 " >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentReview * 100}%)` }}
              >


                {Array.from({ length: Math.ceil(reviews.length / 3) }).map(
                  (_, groupIndex) => (
                    <div
                      key={groupIndex}
                      className="w-full flex-shrink-0 px-2 sm:px-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                        {reviews
                          .slice(groupIndex * 3, (groupIndex + 1) * 3)
                          .map((review) => (
                            <div
                              key={review.id}
                              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow relative h-48 sm:h-52 mt-6 sm:mt-8 ml-6 sm:ml-8"
                            >
                              {/* Avatar positioned at top-left, with proper spacing */}
                              <div className="absolute -top-6 sm:-top-8 -left-6 sm:-left-8 z-10">
                                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                                  <Image
                                    src={review.avatar}
                                    alt={review.name}
                                    fill
                                    className="rounded-full object-cover border-4 border-white shadow-lg"
                                    sizes="(max-width: 640px) 64px, 80px"
                                  />
                                </div>
                              </div>

                              {/* Card content with proper padding */}
                              <div className="p-6 pt-8 h-full flex flex-col justify-between">
                                <div className="flex-1">
                                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-left mb-4 overflow-hidden">
                                    {review.review.length > 100
                                      ? `${review.review.substring(0, 100)}...`
                                      : review.review}
                                  </p>
                                </div>

                                <div className="text-left mt-auto">
                                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                                    {review.name}
                                  </h4>
                                  <p className="text-gray-500 text-xs sm:text-sm mb-2">
                                    {review.role}
                                  </p>
                                  <div className="flex">
                                    {renderStars(review.rating)}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-end items-center mt-8 space-x-4">
              <button
                onClick={prevReview}
                className="bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow focus:outline-none"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </button>
              <button
                onClick={nextReview}
                className="bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow focus:outline-none"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelServicesComponent;
