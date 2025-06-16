import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Ticket,
  Building2,
  MapPin,
  Star,
} from "lucide-react";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

interface Review {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  review: string;
}

const TravelServicesComponent: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const services: Service[] = [
    {
      id: 1,
      icon: <Ticket className="w-8 h-8 text-white" />,
      title: "Ticket Booking",
      description:
        "We book all types of domestic and international tickets for your convenience.",
      bgColor: "bg-blue-500",
    },
    {
      id: 2,
      icon: <Building2 className="w-8 h-8 text-gray-600" />,
      title: "Hotel Booking",
      description:
        "We carefully book your stay according to your budget and preferences.",
      bgColor: "bg-gray-100",
    },
    {
      id: 3,
      icon: <MapPin className="w-8 h-8 text-white" />,
      title: "Tour Plan",
      description:
        "We provide the best tour plan according to your budget and preferences.",
      bgColor: "bg-blue-500",
    },
  ];

  const reviews: Review[] = [
    {
      id: 1,
      name: "John Doe",
      role: "Travel Photographer",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
    },
    {
      id: 2,
      name: "John Smith",
      role: "Travel Photographer",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
    },
    {
      id: 3,
      name: "Tamara Smith",
      role: "Travel Photographer",
      avatar: "/reviews/reviews1.png",
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

//   const goToReview = (index: number) => {
//     setCurrentReview(index);
//   };

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
                className={`${service.bgColor} text-${
                  service.bgColor === "bg-gray-100" ? "black" : "white"
                } rounded-lg p-6 shadow-md flex flex-col items-start justify-center h-48 sm:h-52 transition-transform transform hover:scale-105`}
              >
                <div className="mb-4">{service.icon}</div>
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
        <div className="text-center py-12 bg-gray-50 ">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Traveler&apos;s Experiences
          </h2>
          <p className="text-base sm:text-lg text-gray-500 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Discover the incredible stories and feedback from our travelers who
            explored the world with us.
          </p>

          <div className="relative px-4 sm:px-8 lg:px-12">
            {/* Carousel Container */}
            <div className="overflow-hidden">
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {reviews
                          .slice(groupIndex * 3, (groupIndex + 1) * 3)
                          .map((review) => (
                            <div
                              key={review.id}
                              className="bg-white rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow h-72 sm:h-80" // Adjusted height for rectangular shape
                            >
                              <div className="flex justify-end mb-4">
                                <img
                                  src={review.avatar}
                                  alt={review.name}
                                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                                />
                              </div>
                              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-left mb-4">
                                {review.review}
                              </p>
                              <div className="text-left">
                                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                                  {review.name}
                                </h4>
                                <p className="text-gray-500 text-xs sm:text-sm">
                                  {review.role}
                                </p>
                                <div className="flex mt-1">
                                  {renderStars(review.rating)}
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
            {/* Navigation Arrows and Dots */}
            <div className="flex justify-end items-center mt-6 space-x-4">
              {/* <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(reviews.length / 3) }).map(
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => goToReview(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentReview ? "bg-sky-500" : "bg-gray-200"
                      }`}
                    />
                  )
                )}
              </div> */}
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
