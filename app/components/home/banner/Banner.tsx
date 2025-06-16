import React from "react";
import { MapPin } from "lucide-react";
import Image from "next/image";

const BannerSection = () => {
  const categories = [
    {
      name: "Singapore",
      image: "/bannerlogos/singapore.png",
      alt: "Singapore",
    },
    { name: "Kochi", image: "/bannerlogos/kochi.png", alt: "Kochi" },
    {
      name: "Thiruvananthapuram",
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

  return (
    <div className="relative">
      {/* Banner Section with Background Image */}
      <div className="relative min-h-[85vh] lg:min-h-[90vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bannerimage.jpg"
            alt="Travel Background"
            fill
            className="object-cover"
            priority
          />
      
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row min-h-[85vh] lg:min-h-[90vh]">
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


            {/* Right side - Decorative dots */}
            {/* <div className="hidden lg:flex flex-col justify-center items-end py-20 space-y-4 pr-8">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    i === 2
                      ? "bg-blue-500 scale-125"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                ></div>
              ))}
            </div> */}
          </div>
        </div>
      </div>



      {/* Floating Rectangular Card - Overlapping the banner */}
      <div className="relative -mt-16 lg:-mt- z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mx-4 lg:mx-8">
          {/* Card Header */}
          <div className="relative bg-white px-6 py-6 md:px-8 md:py-8 text-center border-b border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              Hi, Traveler!
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
              Go Somewhere?
            </h3>
          </div>


          {/* Category Images Grid */}
          <div className="px-6 py-6 md:px-8 md:py-8">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3 lg:gap-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  <div className="w-14 h-14 lg:w-16 lg:h-16 mb-2 relative overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-300">
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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
            {/* Left side - Title Badge */}
            <div className="flex justify-center sm:justify-start">
              <div className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-full text-base lg:text-lg font-semibold shadow-xl">
                <MapPin className="w-5 h-5 mr-3" />
                Easy To Select Your Destination
              </div>
            </div>

            {/* Right side - Destination Selection Buttons */}
            <div className="flex flex-wrap gap-4 justify-center sm:justify-end">
              {destinations.map((dest, index) => (
                <button
                  key={index}
                  className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center font-bold transition-all duration-300 shadow-xl hover:shadow-2xl relative group overflow-hidden bg-white ${
                    index === 0
                      ? "scale-110"
                      : "hover:scale-105"
                  }`}
                >
                  <div className="w-full h-full relative rounded-full overflow-hidden">
                    <Image
                      src={dest.image}
                      alt={dest.label}
                      fill
                      className="object-cover object-center"
                      quality={100}
                    />
                    {/* Overlay for active state */}
                    {/* {index === 0 && (
                      <div className="absolute inset-0 bg-black/10 rounded-full"></div>
                    )} */}
                  </div>

                  {/* Tooltip */}
                  <div className="absolute -top-14 left-1/2 transform -translate-x-1/2  text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg">
                    {dest.label}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent "></div>
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
