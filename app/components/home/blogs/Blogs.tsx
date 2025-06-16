"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
      "Lorem ipsum dolor sit amet consectetur. Dignissim leo sit amet aliquam ante. Telus pulvinar in at tortor. Sed vestibulum pretium nulla vulputate. Nisi donec praesent sollicitudin mauris tristique dolor eget. Felis elementum a pharetra est et non nisi pulvinar. Nunc viverra egestes bibendum facilisis ac. Dolor enim talis ut faucibus vitae. Pretium nunc consequat nec magna nunc dignissim utilices non blandit. Quis proin felis bibendum egestas praesent sit amet vestibulum.",
    fullDescription: `The Taj Mahal, one of the Seven Wonders of the World...`,
    distance: "250 Km",
    duration: "2 Days 3 Nights",
    mainImage: "/blogs/blog.png",
    photos: ["/blogs/photo1.png", "/blogs/photo2.png", "/blogs/photo3.png"],
    location: "Agra, Uttar Pradesh, India",
  },
  {
    id: "2",
    title: "Red Fort Delhi",
    description:
      "Experience the grandeur of Mughal architecture at the iconic Red Fort in Delhi.",
    fullDescription: `The Red Fort, known locally as Lal Qila, is a historic fortified palace...`,
    distance: "180 Km",
    duration: "1 Day 2 Nights",
    mainImage: "/blogs/blog.png",
    photos: ["/blogs/photo1.png", "/blogs/photo2.png", "/blogs/photo3.png"],
    location: "Old Delhi, Delhi, India",
  },
  {
    id: "3",
    title: "Kerala Backwaters",
    description:
      "Discover the serene beauty of Keralas backwaters, a network of canals.",
    fullDescription: `The Kerala Backwaters represent one of India's most enchanting natural wonders...`,
    distance: "420 Km",
    duration: "3 Days 4 Nights",
    mainImage: "/blogs/blog.png",
    photos: ["/blogs/photo1.png", "/blogs/photo2.png", "/blogs/photo3.png"],
    location: "Alleppey & Kumarakom, Kerala, India",
  },
];

// Travel Card Component
interface TravelCardProps {
  destination: TravelDestination;
  onBookNow: (id: string) => void;
}

const TravelCard: React.FC<TravelCardProps> = ({ destination, onBookNow }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-6xl mx-auto mb-8 flex flex-col md:flex-row">
      {/* Left Side - Main Image */}
      <div className="md:w-1/2 relative">
        <div className="relative h-64 md:h-[360px]">
          <Image
            src={destination.mainImage}
            alt={destination.title}
            fill
            className="object-cover rounded-l-3xl"
          />
          {/* Distance and Duration */}
          <div className="absolute bottom-4 left-4 flex space-x-4">
            <div className="bg-white rounded-full px-4 py-1.5 text-gray-800 text-sm font-medium shadow-sm">
              {destination.distance}
            </div>
            <div className="bg-white rounded-full px-4 py-1.5 text-gray-800 text-sm font-medium shadow-sm">
              {destination.duration}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="md:w-1/2 bg-gradient-to-r from-blue-600 to-blue-800 p-6 md:p-8 flex flex-col justify-between rounded-r-3xl">
        {/* Header with Book Now */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {destination.title}
          </h2>
          <button
            onClick={() => onBookNow(destination.id)}
            className="group flex items-center bg-white text-blue-600 px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-100 transition-all duration-300 shadow-sm"
          >
            Book Now
            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Description */}
        <p className="text-white text-sm leading-relaxed mb-6">
          {destination.description}
        </p>

        {/* Photos Section */}
        <div>
          <h3 className="text-white font-semibold mb-3">PHOTOS</h3>
          <div className="flex gap-3">
            {destination.photos.map((photo, index) => (
              <div key={index} className="flex-1">
                <div className="relative h-20 rounded-xl overflow-hidden">
                  <Image
                    src={photo}
                    alt={`${destination.title} photo ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
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
      `Booking initiated for ${destination?.title}!\nDuration: ${destination?.duration}`
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
      

        {/* Travel Cards */}
        <div className="space-y-8">
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
