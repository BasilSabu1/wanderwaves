"use client";

import React, { useEffect, useRef, useState } from "react";

const WeAlwaysTry: React.FC = () => {
  const [stats, setStats] = useState({
    years: 0,
    travelers: 0,
    places: 0,
    history: 0,
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const targetStats = {
      years: 15,
      travelers: 15500,
      places: 650,
      history: 2000,
    };

    const animate = () => {
      const duration = 2000; // Animation duration in ms
      const startTime = Date.now();

      const animateNumbers = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        setStats({
          years: Math.floor(progress * targetStats.years),
          travelers: Math.floor(progress * targetStats.travelers),
          places: Math.floor(progress * targetStats.places),
          history: Math.floor(progress * targetStats.history),
        });

        if (progress < 1) {
          requestAnimationFrame(animateNumbers);
        }
      };

      animateNumbers();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.unobserve(entry.target); // Stop observing after animation starts
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* Background Image Section */}
      <div
        ref={sectionRef}
        className="relative bg-cover bg-center py-16 md:py-24"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507521628349-dee6c896c7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We always try to give you the best service
          </h2>
          <p className="text-gray-600 mb-12">
            We always try to make our customer Happy. We provide all kind of
            facilities. Your Satisfaction is our main priority.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat 1: Years of Experience */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <div className="text-blue-500 mb-2">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {stats.years}+
              </h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>

            {/* Stat 2: Happy Travelers */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <div className="text-blue-500 mb-2">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 8v8m-4-4v4m-4-8v8m-4 4h16"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {stats.travelers.toLocaleString()}+
              </h3>
              <p className="text-gray-600">Happy Travelers</p>
            </div>

            {/* Stat 3: Places Visited */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <div className="text-blue-500 mb-2">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {stats.places}+
              </h3>
              <p className="text-gray-600">Places Visited</p>
            </div>

            {/* Stat 4: Travel History */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <div className="text-blue-500 mb-2">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {stats.history.toLocaleString()}+
              </h3>
              <p className="text-gray-600">Travel History</p>
            </div>
          </div>
        </div>
      </div>

      {/* Do You Need Help Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg shadow-lg p-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white mb-4 md:mb-0">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Do you need help?
            </h3>
            <p className="text-sm md:text-base">
              We will provide detailed information about our services, types of
              work, offers, prices, projects. We will calculate the cost and
              prepare a commercial offer.
            </p>
          </div>
          {/* <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full flex items-center hover:bg-gray-100 transition">
            Get consultation
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default WeAlwaysTry;
