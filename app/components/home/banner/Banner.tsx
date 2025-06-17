import React, { useState, useEffect } from "react";
// import { MapPin } from "lucide-react";
import Image from "next/image";

const BannerSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    {
      name: "Singapore",
      image: "/bannerlogos/singapore.png",
      alt: "Singapore",
    },
    { name: "Kochi", image: "/bannerlogos/kochi.png", alt: "Kochi" },
    {
      name: "Thrivandrum",
      image: "/bannerlogos/thiruvananthapuram.png",
      alt: "Thiruvananthapuram",
    },
    { name: "Idukki", image: "/bannerlogos/idukki.png", alt: "Idukki" },
    {
      name: "Metro City",
      image: "/bannerlogos/metrocity.png",
      alt: "Metro City",
    },
    {
      name: "Alappuzha",
      image: "/bannerlogos/alappuzha.png",
      alt: "Alappuzha",
    },
    { name: "Goa", image: "/bannerlogos/goa.png", alt: "Goa" },
    { name: "Mumbai", image: "/bannerlogos/mumbai.png", alt: "Mumbai" },
  ];

  const destinations = [
    {
      number: "1",
      label: "Destination 1",
      image: "/bannerlogos/easyselect1.svg",
    },
    {
      number: "2",
      label: "Destination 2",
      image: "/bannerlogos/easyselect2.svg",
    },
    {
      number: "3",
      label: "Destination 3",
      image: "/bannerlogos/easyselect3.svg",
    },
    {
      number: "4",
      label: "Destination 4",
      image: "/bannerlogos/easyselect4.svg",
    },
    {
      number: "5",
      label: "Destination 5",
      image: "/bannerlogos/easyselect5.svg",
    },
  ];

  // Carousel slides - using same banner image for all slides as requested
  const slides = [
    { image: "/bannerimage.jpg", alt: "Travel Background 1" },
    { image: "/bannerimage.jpg", alt: "Travel Background 2" },
    { image: "/bannerimage.jpg", alt: "Travel Background 3" },
    { image: "/bannerimage.jpg", alt: "Travel Background 4" },
    { image: "/bannerimage.jpg", alt: "Travel Background 5" },
  ];

  // Auto carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative">
      {/* Banner Section with Background Image */}
      <div className="relative min-h-[95vh] lg:min-h-[100vh]">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover object-center"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          ))}
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row min-h-[95vh] lg:min-h-[100vh]">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center py-20 lg:py-24">
              <div className="max-w-2xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                  Start your unforgettable journey with us.
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 font-light">
                  The best travel for your journey begins now!
                </p>
              </div>
            </div>

            {/* Right side - Carousel dots */}
            <div className="hidden lg:flex flex-col justify-center items-end py-20 space-y-4 pr-8">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    i === currentSlide
                      ? "bg-blue-500 scale-125"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Rectangular Card - Overlapping the banner */}
      <div className="relative -mt-24 lg:-mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mx-4 lg:mx-8 relative">
          {/* Decorative images */}
          <div className="absolute top-0 left-0 w-16 h-16 rounded-br-full overflow-hidden opacity-30 z-10">
            <Image
              src="/bannerlogos/topleft.png"
              alt="Decorative element"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-full overflow-hidden opacity-30 z-10">
            <Image
              src="/bannerlogos/bottomright.png"
              alt="Decorative element"
              fill
              className="object-cover"
            />
          </div>

          {/* Card Header */}
          <div className="relative bg-white px-6 py-6 md:px-8 md:py-8 text-center border-b border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              Hi, Traveler!
            </h2>
            <h3 className="text-xl md:text-3xl font-extrabold text-gray-900">
              Go Somewhere?
            </h3>
          </div>

          {/* Category Images Grid */}
          <div className="px-6 py-5 md:px-8 md:py-6 relative">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-1 lg:gap-2">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  <div className="w-12 h-12 lg:w-14 lg:h-14 mb-1.5 relative overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={category.image}
                      alt={category.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs lg:text-sm text-gray-700 text-center font-medium group-hover:text-gray-900 transition-colors duration-300">
                    {category.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Easy To Select Section */}
      <div className="relative z-10 bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left side - Title Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-full text-base lg:text-lg font-semibold shadow-xl">
                <Image
                  src="/bannerlogos/easyselect.svg" // replace with your actual image path
                  alt="Destination Icon"
                  width={40}
                  height={40}
                  className="mr-3"
                />
                Easy To Select Your Destination
              </div>
            </div>

            {/* Right side - Destination Selection Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
              {destinations.map((dest, index) => (
                <button
                  key={index}
                  className={`relative group transition-all duration-300 hover:scale-105 ${
                    index === 0 ? "scale-105" : ""
                  }`}
                >
                  {/* Gray capsule/pill background */}
                  <div
                    className={`w-20 h-12 lg:w-24 lg:h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                      index === 0
                        ? "bg-gray-400"
                        : "bg-gray-400 hover:bg-gray-400"
                    }`}
                  >
                    {/* Image container */}
                    <div className="w-10 h-10 lg:w-12 lg:h-12 relative rounded-full overflow-hidden bg-white">
                      <Image
                        src={dest.image}
                        alt={dest.label}
                        fill
                        className="object-cover object-center"
                        quality={100}
                      />
                    </div>
                  </div>

                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10">
                    {dest.label}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-800"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
