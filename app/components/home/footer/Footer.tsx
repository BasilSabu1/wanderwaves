import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E6F0FA] py-4 mt-10">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row mt-5 justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center mb-3 sm:mb-0">
          <Image
            src="/headerlogo.png"
            alt="Wander Wave Logo"
            width={120}
            height={30}
            className="h-6 w-auto"
          />
        </div>

        {/* Center: Navigation Links */}
        <div className="flex space-x-6 mb-3 sm:mb-0">
          {["Home", "Explore", "Travel", "Blog", "Contact"].map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Right: Email */}
        <div className="flex items-center">
          <svg
            className="w-4 h-4 text-gray-700 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <a
            href="mailto:info@wanderwave.com"
            className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
          >
            info@wanderwave.com
          </a>
        </div>
      </div>

      {/* Bottom: Designed By */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 pt-3 border-t border-gray-300">
        <p className="text-gray-500 text-xs text-center">
          Designed by <span className="font-medium">Pixelboho</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;