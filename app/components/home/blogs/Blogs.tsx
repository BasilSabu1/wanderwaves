"use client";

import React from "react";
// import { ArrowRight } from "lucide-react";

// Types
interface TravelDestination {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  distance: string;
  duration: string;
  mainImage: string;
  photos: string[];
  location: string;
}

// Sample Travel Data
const travelData: TravelDestination[] = [
  {
    id: "1",
    title: "Taj Mahal",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dignissim leo sit amet aliquam ante. Tellus pulvinar in at tortor. Sed vestibulum pretium nulla vulputate. Nisi donec praesent sollicitudin mauris tristique dolor eget. Felis elementum a pharetra est et non nisi pulvinar. Nunc viverra egestas bibendum facilisis ac. Dolor enim talis ut faucibus vitae. Pretium nunc consequat nec magna nunc dignissim utilices non blandit. Quis proin felis bibendum egestas praesent sit amet vestibulum.",
    fullDescription: `The Taj Mahal, one of the Seven Wonders of the World...`,
    distance: "250 Km",
    duration: "2 Days 3 Nights",
    mainImage: "/blogs/blog.png",
    photos: ["/blogs/photo1.png", "/blogs/photo2.png", "/blogs/photo3.png"],
    location: "Agra, Uttar Pradesh, India",
  },
  {
    id: "2",
     title: "Taj Mahal",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dignissim leo sit amet aliquam ante. Tellus pulvinar in at tortor. Sed vestibulum pretium nulla vulputate. Nisi donec praesent sollicitudin mauris tristique dolor eget. Felis elementum a pharetra est et non nisi pulvinar. Nunc viverra egestas bibendum facilisis ac. Dolor enim talis ut faucibus vitae. Pretium nunc consequat nec magna nunc dignissim utilices non blandit. Quis proin felis bibendum egestas praesent sit amet vestibulum.",
    fullDescription: `The Taj Mahal, one of the Seven Wonders of the World...`,
    distance: "250 Km",
    duration: "2 Days 3 Nights",
    mainImage: "/blogs/blog.png",
    photos: ["/blogs/photo1.png", "/blogs/photo2.png", "/blogs/photo3.png"],
    location: "Agra, Uttar Pradesh, India",
  },
  {
    id: "3",
     title: "Taj Mahal",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dignissim leo sit amet aliquam ante. Tellus pulvinar in at tortor. Sed vestibulum pretium nulla vulputate. Nisi donec praesent sollicitudin mauris tristique dolor eget. Felis elementum a pharetra est et non nisi pulvinar. Nunc viverra egestas bibendum facilisis ac. Dolor enim talis ut faucibus vitae. Pretium nunc consequat nec magna nunc dignissim utilices non blandit. Quis proin felis bibendum egestas praesent sit amet vestibulum.",
    fullDescription: `The Taj Mahal, one of the Seven Wonders of the World...`,
    distance: "250 Km",
    duration: "2 Days 3 Nights",
    mainImage: "/blogs/blog.png",
    photos: ["/blogs/photo1.png", "/blogs/photo2.png", "/blogs/photo3.png"],
    location: "Agra, Uttar Pradesh, India",
  },
];

// Travel Card Component
interface TravelCardProps {
  destination: TravelDestination;
  onBookNow: (id: string) => void;
}

const TravelCard: React.FC<TravelCardProps> = ({ destination }) => {
  return (
    <div className="w-full max-w-7xl mx-auto mb-8">
      {/* Main container - responsive layout */}
      <div className="bg-transparent rounded-2xl overflow-visible min-h-96 lg:h-96 flex flex-col lg:flex-row relative">
        {/* Image Section */}
        <div className="w-full lg:w-2/5 relative h-64 lg:h-full">
          {/* Main background image */}
          <div
            className="w-full h-full bg-cover bg-center relative rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
            style={{
              backgroundImage: `url(${destination.mainImage})`,
            }}
          >
            {/* Distance and Duration Info Card */}
            <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6">
              <div className="bg-white rounded-lg px-3 py-2 lg:px-4 lg:py-3 shadow-lg">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:space-x-8 space-y-2 lg:space-y-0">
                  <div className="text-center lg:text-left">
                    <div className="text-xs text-gray-500 font-medium">
                      Distance
                    </div>
                    <div className="text-sm font-bold text-gray-800">
                      {destination.distance}
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-xs text-gray-500 font-medium">
                      Total Travelling Days
                    </div>
                    <div className="text-sm font-bold text-gray-800">
                      {destination.duration}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section with responsive overlap */}
        <div className="w-full lg:w-3/5 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-b-2xl lg:rounded-2xl border-4 border-white p-6 lg:p-8 flex flex-col justify-between relative lg:-ml-8 z-10 shadow-2xl min-h-80 lg:min-h-full">
          {/* Header with Title and Book Now Button */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 space-y-3 sm:space-y-0">
            <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
              {destination.title}
            </h2>
            {/* <button
              onClick={() => onBookNow(destination.id)}
              className="group flex items-center justify-center bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 sm:ml-4 flex-shrink-0 w-full sm:w-auto"
            >
              Book Now
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button> */}
          </div>

          {/* Description */}
          <p className="text-white text-sm leading-relaxed mb-6 flex-1 overflow-hidden">
            {destination.description}
          </p>

          {/* Photos Section */}
          <div className="mt-auto">
            <h3 className="text-white font-bold text-sm mb-3 tracking-wide">
              Photos
            </h3>

          {/* Photos Grid - responsive */}
<div className="flex gap-2 mb-4">
  {destination.photos.map((photo, index) => (
    <div key={index} className="flex-1">
      <div className="h-28 sm:h-32 rounded-lg overflow-hidden shadow-md"> {/* Changed to h-28 sm:h-32 (7rem/8rem) */}
        <img
          src={photo}
          alt={`${destination.title} photo ${index + 1}`}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  ))}
</div>

            {/* Progress Bar */}
            <div className="flex justify-end items-center">
              <div className="flex items-center space-x-2">
                <span className="text-white text-xs">01</span>
                <div className="w-12 sm:w-16 h-1 bg-white bg-opacity-30 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-white rounded-full"></div>
                </div>
                <span className="text-white text-xs">03</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
export default function TravelCardsApp() {
  const handleBookNow = (destinationId: string) => {
    const destination = travelData.find((d) => d.id === destinationId);
    console.log(`Booking trip to ${destination?.title}`);
    alert(
      `Booking initiated for ${destination?.title}!\nDuration: ${destination?.duration}\nDistance: ${destination?.distance}`
    );
  };

  return (
    <div   id="travel" className="min-h-screen bg-gray-100 py-4 lg:py-8 px-2 sm:px-4">
      <div className="container mx-auto">
        {/* Travel Cards */}
        <div className="space-y-6 lg:space-y-8">
          {travelData.map((destination) => (
            <TravelCard
              key={destination.id}
              destination={destination}
              onBookNow={handleBookNow}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
