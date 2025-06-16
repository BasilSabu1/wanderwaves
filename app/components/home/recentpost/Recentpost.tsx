import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TripCard {
  id: number;
  location: string;
  state: string;
  days: string;
  image: string;
  backContent?: {
    title: string;
    description: string;
    highlights: string[];
  };
}

interface DestinationCard {
  id: number;
  title: string;
  image: string;
  backContent?: {
    title: string;
    description: string;
    features: string[];
  };
}

const RecentTripsPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>(
    {}
  );

  const recentTrips: TripCard[] = [
    {
      id: 1,
      location: "Idukki",
      state: "Kerala",
      days: "5 stops",
      image: "/recentpost/recentpost1.png",
      backContent: {
        title: "Idukki Adventure",
        description:
          "Experience the breathtaking hill station with tea plantations and wildlife.",
        highlights: [
          "Munnar Tea Gardens",
          "Eravikulam National Park",
          "Mattupetty Dam",
        ],
      },
    },
    {
      id: 2,
      location: "Alappuzha",
      state: "Kerala",
      days: "7 stops",
      image: "/recentpost/recentpost2.png",
      backContent: {
        title: "Backwater Paradise",
        description:
          "Cruise through serene backwaters and experience Kerala's water culture.",
        highlights: [
          "Houseboat Experience",
          "Kumarakom Bird Sanctuary",
          "Local Cuisine",
        ],
      },
    },
    {
      id: 3,
      location: "Ernakulam",
      state: "Kerala",
      days: "8 places",
      image: "/recentpost/recentpost3.png",
      backContent: {
        title: "Cultural Hub",
        description:
          "Explore the commercial capital with rich history and modern attractions.",
        highlights: ["Fort Kochi", "Chinese Fishing Nets", "Spice Markets"],
      },
    },
    {
      id: 4,
      location: "Wayanad",
      state: "Kerala",
      days: "15 stops",
      image: "/recentpost/recentpost4.png",
      backContent: {
        title: "Nature's Paradise",
        description:
          "Discover pristine forests, waterfalls, and wildlife sanctuaries.",
        highlights: [
          "Chembra Peak",
          "Soochipara Falls",
          "Wayanad Wildlife Sanctuary",
        ],
      },
    },
  ];

  const popularDestinations: DestinationCard[] = [
    {
      id: 1,
      title: "Mountain Adventure",
      image: "/populardestination/popular1.png",
      backContent: {
        title: "Mountain Escape",
        description:
          "Experience breathtaking mountain views and adventure activities.",
        features: ["Trekking", "Rock Climbing", "Photography", "Camping"],
      },
    },
    {
      id: 2,
      title: "Desert Safari",
      image: "/populardestination/popular2.png",
      backContent: {
        title: "Desert Experience",
        description: "Explore vast desert landscapes and traditional culture.",
        features: [
          "Camel Riding",
          "Sand Dunes",
          "Star Gazing",
          "Cultural Shows",
        ],
      },
    },
    {
      id: 3,
      title: "Historic Castle",
      image: "/populardestination/popular3.png",
      backContent: {
        title: "Historic Journey",
        description: "Step back in time and explore ancient architecture.",
        features: ["Guided Tours", "Museums", "Architecture", "History"],
      },
    },
    {
      id: 4,
      title: "Lake Paradise",
      image: "/populardestination/popular4.png",
      backContent: {
        title: "Serene Lakes",
        description: "Enjoy peaceful moments by crystal clear mountain lakes.",
        features: ["Boating", "Fishing", "Hiking", "Wildlife Watching"],
      },
    },
  ];

  const handleCardFlip = (type: string, id: number) => {
    const key = `${type}-${id}`;
    setFlippedCards((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (popularDestinations.length - 3));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + (popularDestinations.length - 3)) %
        (popularDestinations.length - 3)
    );
  };

  const getVisibleDestinations = () => {
    return popularDestinations.slice(currentSlide, currentSlide + 4);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Recent Trips Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Our Recent Trips
          </h2>

          {/* Recent Trips - Rectangular Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {recentTrips.map((trip) => (
              <div
                key={trip.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="flex h-28 md:h-28">
                  {/* Image Section - Left */}
                  <div className="w-1/2 md:w-1/3 relative">
                    <img
                      src={trip.image}
                      alt={trip.location}
                      className="w-full h-full object-cover rounded-l-xl"
                    />
                  </div>

                  {/* Content Section - Right */}
                  <div className="w-1/2 md:w-2/3 p-3 flex flex-col justify-center">
                    <h3 className="text-sm font-semibold text-gray-900 truncate">
                      {trip.location}, {trip.state}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">
                      {trip.days}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
            {/* Left Side - Carousel with Cards */}
            <div className="w-full lg:w-2/3 relative">
              <div className="relative px-8 md:px-12">
                {/* Navigation Arrows - Positioned outside the card container */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/95 hover:bg-white rounded-full flex items-center justify-center text-gray-800 shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                  disabled={currentSlide === 0}
                >
                  <ChevronLeft size={20} className="md:w-6 md:h-6" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/95 hover:bg-white rounded-full flex items-center justify-center text-gray-800 shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                  disabled={currentSlide >= popularDestinations.length - 4}
                >
                  <ChevronRight size={20} className="md:w-6 md:h-6" />
                </button>

                {/* Destination Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                  {getVisibleDestinations().map((destination) => {
                    const isFlipped =
                      flippedCards[`destination-${destination.id}`];
                    // const isMiddleCard = index === 1 || index === 2;

                    return (
                      <div
                        key={destination.id}
                        className="relative perspective-1000"
                      >
                        <div
                          className={`relative w-full h-48 md:h-56 lg:h-64 transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                            isFlipped ? "rotate-y-180" : ""
                          }`}
                          onClick={() =>
                            handleCardFlip("destination", destination.id)
                          }
                        >
                          {/* Front of card */}
                          <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg border-4 border-white">
                            <img
                              src={destination.image}
                              alt={destination.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          </div>

                          {/* Back of card */}
                          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl shadow-lg border-4 border-white p-3 md:p-4 flex flex-col justify-center">
                            <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-2">
                              {destination.backContent?.title}
                            </h3>
                            <p className="text-gray-600 text-xs md:text-sm mb-3 leading-relaxed">
                              {destination.backContent?.description}
                            </p>
                            <div className="space-y-1">
                              {destination.backContent?.features
                                .slice(0, 3)
                                .map((feature, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center text-xs text-gray-500"
                                  >
                                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                                    {feature}
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-1/3 text-white">
              <p className="text-sm font-medium mb-3 text-blue-100">
                Travellian
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                Popular Destinations
              </h2>
              <p className="text-blue-100 text-sm md:text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Tellus diam sem elit
                tristique vulputate ultrices. Duis rhoncus rhoncus mauris vel
                congue arcu ut nunc. Vestibulum aliquam mauris amet nulla
                dignissim lorem dolor et.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default RecentTripsPage;
