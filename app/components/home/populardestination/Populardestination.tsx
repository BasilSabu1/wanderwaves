import React from "react";
import Image from "next/image";

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Thailand",
      description: "Lorem ipsum dolor sit amet",
      image: "/populardestination/section1.png",
    },
    {
      id: 2,
      name: "Thailand",
      description: "Lorem ipsum dolor sit amet",
      image: "/populardestination/section2.png",
    },
    {
      id: 3,
      name: "Thailand",
      description: "Lorem ipsum dolor sit amet",
      image: "/populardestination/section3.png",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Image Section */}
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-blue-600/40"></div>
        <Image
          src="/populardestinationsction.png"
          alt="Travel destination scenic view"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Popular Destinations Section */}
      <div className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Side - Large Image with World Map */}
            <div className="lg:w-1/2 relative">
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* World Map Background */}
                <div className="absolute inset-0 p-8">
                  {/* World Map Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/populardestination/worldmap.png" // Replace with your actual world map image path
                      alt="World Map"
                      fill
                      className="object-contain opacity-50"
                    />
                  </div>

                  {/* Location Pins */}
                  <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Right Side - Title and Destination Cards */}
            <div className="lg:w-1/2">
              {/* Title */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Our Popular Destinations
                </h2>
              </div>

              {/* Destination Cards */}
              <div className="space-y-4">
                {destinations.map((destination, index) => (
                  <div
                    key={destination.id}
                    className={`bg-white rounded-xl shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition-shadow duration-300 ${
                      index === 1 ? "ml-8" : index === 2 ? "ml-4" : ""
                    }`}
                  >
                    {/* Destination Image */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-16 md:w-24 md:h-18 lg:w-28 lg:h-20 relative rounded-lg overflow-hidden">
                        <Image
                          src={destination.image}
                          alt={destination.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Destination Info */}
                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                        {destination.name}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600">
                        {destination.description}
                      </p>
                    </div>

                    {/* Blue Accent Bar */}
                    <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full flex-shrink-0"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
