"use client";

import { useState } from "react";
import Carlogo from "@/app/images/carlogo.png";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import EngineV12 from "@/app/images/EngineV12.jpg";
import Handling from "@/app/images/handling.webp";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Engine V12",
      category: "Performance",
      price: "$10,000",
      image: EngineV12,
    },
    {
      id: 2,
      name: "Advanced Handling",
      category: "Performance",
      price: "$8,000",
      image: Handling,
    },
    // Add more products here
  ];

  // Sample filter options
  const filters = [
    {
      id: 1,
      name: "Category",
      options: ["Performance", "Design", "Technology", "Safety"],
    },
    {
      id: 2,
      name: "Price Range",
      options: ["$0 - $5,000", "$5,000 - $10,000", "$10,000+"],
    },
  ];

  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    pricerange: [],
  });

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prevFilters) => {
      const normalizedFilterType = filterType.toLowerCase().replace(" ", "");
      const currentFilterValues = prevFilters[normalizedFilterType] || [];

      return {
        ...prevFilters,
        [normalizedFilterType]: currentFilterValues.includes(value)
          ? currentFilterValues.filter((item) => item !== value)
          : [...currentFilterValues, value],
      };
    });
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedFilters.category.length === 0 ||
      selectedFilters.category.includes(product.category);
    const matchesPriceRange =
      selectedFilters.pricerange.length === 0 ||
      selectedFilters.pricerange.some((range) => {
        const [min, max] = range
          .split(" - ")
          .map((str) => Number.parseInt(str.replace(/\D/g, "")));
        const productPrice = Number.parseInt(product.price.replace(/\D/g, ""));
        return productPrice >= min && (max ? productPrice <= max : true);
      });
    return matchesCategory && matchesPriceRange;
  });

  return (
    <section className="w-[95%] mx-auto bg-white mt-4 shadow-md rounded-xl relative">
      <div className="container mx-auto px-8">
        <header className="flex items-center justify-between py-2">
          <nav className="flex w-full items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                <Image
                  src={Carlogo || "/placeholder.svg"}
                  className="object-contain"
                  alt="carlogo"
                  width={40}
                  height={40}
                />
              </Link>
              <a href="/" className="font-extrabold pl-2">
                Sport Cars
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex space-x-6">
                {/* Mega Menu */}
                <div className="relative">
                  <Link
                    href="/features"
                    className="flex items-center text-gray-600 font-bold hover:text-gray-900"
                  >
                    Features
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMegaMenuOpen(!isMegaMenuOpen);
                      }}
                      className="ml-1 focus:outline-none"
                    >
                      {isMegaMenuOpen ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                  </Link>
                </div>

                <Link
                  href="/pricing"
                  className="text-gray-600 font-bold hover:text-gray-900"
                >
                  Pricing
                </Link>
                <Link
                  href="/blog"
                  className="text-gray-600 font-bold hover:text-gray-900"
                >
                  Blog
                </Link>
                <Link
                  href="/changelog"
                  className="text-gray-600 font-bold hover:text-gray-900"
                >
                  Changelog
                </Link>
              </div>
            </div>

            {/* Desktop Log In and Sign Up Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/login"
                className="text-gray-600 font-bold hover:text-gray-900"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="bg-black font-bold text-white px-4 py-2 rounded-xl hover:bg-gray-900"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </header>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden flex justify-center">
            <div className="flex flex-col space-y-4 pb-4 items-center">
              {/* Mobile Mega Menu */}
              <div className="w-full text-center">
                <Link
                  href="/features"
                  className="flex items-center justify-center w-full text-gray-600 font-bold hover:text-gray-900"
                >
                  Features
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMegaMenuOpen(!isMegaMenuOpen);
                    }}
                    className="ml-1"
                  >
                    {isMegaMenuOpen ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>
                </Link>
                {isMegaMenuOpen && (
                  <div className="bg-white text-black shadow-md rounded-lg p-4 mt-2">
                    <Link
                      href="/features/performance"
                      className="block py-2 hover:bg-gray-100 px-4 rounded-md"
                    >
                      Performance
                    </Link>
                    <Link
                      href="/features/design"
                      className="block py-2 hover:bg-gray-100 px-4 rounded-md"
                    >
                      Design
                    </Link>
                    <Link
                      href="/features/technology"
                      className="block py-2 hover:bg-gray-100 px-4 rounded-md"
                    >
                      Technology
                    </Link>
                    <Link
                      href="/features/safety"
                      className="block py-2 hover:bg-gray-100 px-4 rounded-md"
                    >
                      Safety
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/pricing"
                className="text-gray-600 font-bold hover:text-gray-900"
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 font-bold hover:text-gray-900"
              >
                Blog
              </Link>
              <Link
                href="/changelog"
                className="text-gray-600 font-bold hover:text-gray-900"
              >
                Changelog
              </Link>
              <Link
                href="/login"
                className="text-gray-600 font-bold hover:text-gray-900"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="bg-black text-white font-bold px-4 py-2 rounded hover:bg-gray-900 inline-block"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Mega Menu Section */}
      {isMegaMenuOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full bg-amber-200 shadow-lg rounded-lg mt-2 p-6 z-50">
          <div className="grid grid-cols-5 gap-8">
            {/* Sidebar for Filters */}
            <div className="col-span-1">
              <h3 className="text-lg font-bold mb-4">Filters</h3>
              {filters.map((filter) => (
                <div key={filter.id} className="mb-6">
                  <h4 className="font-semibold mb-2">{filter.name}</h4>
                  {filter.options.map((option) => (
                    <label key={option} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        onChange={() => handleFilterChange(filter.name, option)}
                        checked={
                          selectedFilters[
                            filter.name.toLowerCase().replace(" ", "")
                          ]?.includes(option) || false
                        }
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              ))}
            </div>

            {/* Product Grid */}
            <div className="col-span-4">
              <div className="grid grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white p-4 rounded-lg shadow-md"
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg"
                      width={200}
                      height={200}
                    />
                    <h4 className="font-bold mt-2">{product.name}</h4>
                    <p className="text-sm text-gray-600">{product.category}</p>
                    <p className="text-sm font-bold">{product.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NavigationBar;
