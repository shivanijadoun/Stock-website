import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-blue-900  shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center font-bold ">
            <Link href="/" className="text-xl font-bold">
              MyApp
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-11 pr-10 font-bold">
            <Link href="/" className="hover:text-gray-400">
             Home
            </Link>
            <Link href="/MarketMovers" className="hover:text-gray-400">
             Market
            </Link>
            <Link href="/card/news" className="hover:text-gray-400">
            News
            </Link>
            <Link href="/Screener" className="hover:text-gray-400">
            Screener
            </Link>
            <Link href="/Bundles" className="hover:text-gray-400">
              IPO
            </Link>
            {/* <Link href="/SuperInvestors" className="hover:text-gray-400">
              Super Investors
            </Link> */}
            {/* <Link href="/contact" className="hover:text-gray-400">
            TA
            </Link> */}
            {/* <Link href="/contact" className="hover:text-gray-400">
             Discover
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-cyan-800 hover:text-cyan-800 focus:outline-none focus:text-cyan-800"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}  text-white`}
        >
          <div className="px-2 py-3  space-y-1">
            <Link
              href="/"
              className="block px-3 text-blue-950 py-2 rounded-md text-base font-medium hover:bg-blue-300"
            >
           Home
            </Link>
            <Link
              href="/MarketMovers"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-950 hover:bg-blue-300"
            >
              Market
            </Link>
            <Link
              href="/card/news"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-950 hover:bg-blue-300"
            >
               News
            </Link>
            <Link
              href="/Screener"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-950 hover:bg-gray-600"
            >
              Screener
            </Link>
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-950 hover:bg-blue-300"
            >
              IPO
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
