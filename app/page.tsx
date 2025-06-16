"use client";

import React, { Suspense, lazy } from "react";

// Lazy load components for better performance
const Header = lazy(() => import("./components/home/header/Header"));
const BannerSection = lazy(() => import("./components/home/banner/Banner"));
const RecentTrips = lazy(
  () => import("./components/home/recentpost/Recentpost")
);
const TravelCards = lazy(() => import("./components/home/blogs/Blogs"));
const PopularDestinations = lazy(
  () => import("./components/home/populardestination/Populardestination")
);
const TravelServices = lazy(
  () => import("./components/home/ourservice/Ourservice")
);

const WeAlwaysTry = lazy(() => import("./components/home/wealways/Wealways"));
const Footer = lazy(() => import("./components/home/footer/Footer"));


// Loading components
const HeaderSkeleton = () => (
  <div className="bg-white shadow-sm h-16 animate-pulse">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gray-300 rounded"></div>
        <div className="w-32 h-6 bg-gray-300 rounded"></div>
      </div>
      <div className="hidden md:flex space-x-8">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-16 h-4 bg-gray-300 rounded"></div>
        ))}
      </div>
    </div>
  </div>
);

const BannerSkeleton = () => (
  <div className="min-h-screen bg-gray-300 animate-pulse">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="max-w-xl">
        <div className="w-96 h-12 bg-gray-400 rounded mb-4"></div>
        <div className="w-80 h-8 bg-gray-400 rounded mb-4"></div>
        <div className="w-64 h-6 bg-gray-400 rounded"></div>
      </div>
    </div>
  </div>
);

const RecentTripsSkeleton = () => (
  <div className="bg-gray-50 animate-pulse">
    {/* Recent Trips Skeleton */}
    <div className="py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="w-64 h-10 bg-gray-300 rounded mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-300 rounded-xl"></div>
          ))}
        </div>
      </div>
    </div>
    {/* Popular Destinations Skeleton */}
    <div className="py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="w-20 h-4 bg-white/30 rounded mb-2"></div>
            <div className="w-80 h-10 bg-white/30 rounded mb-4"></div>
            <div className="w-96 h-16 bg-white/30 rounded"></div>
          </div>
          <div className="flex gap-2">
            <div className="w-10 h-10 bg-white/30 rounded-full"></div>
            <div className="w-10 h-10 bg-white/30 rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-80 bg-white/20 rounded-xl"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const TravelServicesSkeleton = () => (
  <div className="bg-gray-50 py-16 px-4 animate-pulse">
    <div className="max-w-6xl mx-auto">
      {/* Services Skeleton */}
      <div className="text-center mb-16">
        <div className="w-64 h-10 bg-gray-300 rounded mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="text-center">
              <div className="bg-gray-300 rounded-2xl p-6 mb-4 inline-block w-20 h-20"></div>
              <div className="w-32 h-6 bg-gray-300 rounded mx-auto mb-3"></div>
              <div className="w-48 h-4 bg-gray-300 rounded mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
      {/* Reviews Skeleton */}
      <div className="text-center">
        <div className="w-64 h-10 bg-gray-300 rounded mx-auto mb-4"></div>
        <div className="w-96 h-4 bg-gray-300 rounded mx-auto mb-12"></div>
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg h-64"></div>
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-gray-300"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TravelCardsSkeleton = () => (
  <div className="bg-gray-50 py-8 px-4 animate-pulse">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <div className="w-96 h-12 bg-gray-300 rounded mx-auto mb-4"></div>
        <div className="w-2/3 h-6 bg-gray-300 rounded mx-auto"></div>
      </div>
      <div className="space-y-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg h-64"></div>
        ))}
      </div>
      <div className="text-center mt-16 py-8 border-t border-gray-200">
        <div className="w-1/2 h-6 bg-gray-300 rounded mx-auto"></div>
      </div>
    </div>
  </div>
);

const PopularDestinationsSkeleton = () => (
  <div className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16 animate-pulse">
    <div className="max-w-7xl mx-auto">
      <div className="w-64 h-10 bg-gray-300 rounded mb-8"></div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="lg:w-1/2 h-[600px] bg-gray-300 rounded-2xl"></div>
        <div className="lg:w-1/2 space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-24 bg-gray-300 rounded-xl"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);


const FooterSkeleton = () => (
  <div className="bg-blue-50 py-6 animate-pulse">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex items-center mb-4 sm:mb-0">
        <div className="w-32 h-10 bg-gray-300 rounded"></div>
      </div>
      <div className="flex space-x-6 mb-4 sm:mb-0">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-16 h-4 bg-gray-300 rounded"></div>
        ))}
      </div>
      <div className="flex items-center">
        <div className="w-5 h-5 bg-gray-300 rounded mr-2"></div>
        <div className="w-32 h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
      <div className="w-48 h-4 bg-gray-300 rounded"></div>
    </div>
  </div>
);



const WeAlwaysTrySkeleton = () => (
  <div className="bg-gray-100 py-16 animate-pulse">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="w-96 h-10 bg-gray-300 rounded mx-auto mb-4"></div>
        <div className="w-64 h-6 bg-gray-300 rounded mx-auto mb-12"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="w-8 h-8 bg-gray-300 rounded mb-2"></div>
            <div className="w-16 h-8 bg-gray-300 rounded mb-2"></div>
            <div className="w-32 h-4 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg shadow-lg p-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-white mb-4 md:mb-0">
          <div className="w-48 h-6 bg-white/30 rounded mb-2"></div>
          <div className="w-96 h-12 bg-white/30 rounded"></div>
        </div>
        <div className="w-40 h-10 bg-white/30 rounded-full"></div>
      </div>
    </div>
  </div>
);


export default function Home() {
  return (
    <div className="relative ">
      <Suspense fallback={<HeaderSkeleton />}>
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header />
        </div>
      </Suspense>
      <Suspense fallback={<BannerSkeleton />}>
        <BannerSection />
      </Suspense>
      <Suspense fallback={<RecentTripsSkeleton />}>
        <RecentTrips />
      </Suspense>

      <Suspense fallback={<TravelCardsSkeleton />}>
        <TravelCards />
      </Suspense>

      <Suspense fallback={<PopularDestinationsSkeleton />}>
        <PopularDestinations />
      </Suspense>

      <Suspense fallback={<TravelServicesSkeleton />}>
        <TravelServices />
      </Suspense>

       <Suspense fallback={<WeAlwaysTrySkeleton />}>
        <WeAlwaysTry />
      </Suspense>
      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
      
    </div>
  );
}
