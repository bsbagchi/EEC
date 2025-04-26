'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Import images
import logo from '../../images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className={cn(
      "sticky top-0 z-40 w-full transition-all duration-300",
      isScrolled ? "bg-white shadow-md" : ""
    )}>
      {/* Top contact bar */}
      <div className="bg-primary text-white py-2 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <MapPin size={18} className="text-secondary" />
          <span className="text-sm font-medium">Banglore, Karnataka</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone size={18} className="text-secondary" />
          <span className="text-sm font-medium">+91 94818 73543</span>
        </div>
      </div>

      {/* Main navbar */}
      <div className={cn(
        "container mx-auto flex items-center justify-between py-4 px-4",
        isScrolled ? "py-2" : "py-4"
      )}>
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="EstellaEcoCarbon Logo" width={150} height={70} className="h-12 w-auto" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex space-x-8 font-poppins font-medium">
            <li>
              <Link
                href="/"
                className="text-gray-800 hover:text-primary-500 transition-colors py-2"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-800 hover:text-primary-500 transition-colors py-2"
              >
                ABOUT US
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => toggleDropdown('products')}
                className="flex items-center text-gray-800 hover:text-primary-500 transition-colors py-2"
              >
                PRODUCTS
                <ChevronDown size={18} className="ml-1" />
              </button>

              <ul className={cn(
                "absolute top-full left-0 bg-white shadow-lg rounded-md w-64 transition-all transform origin-top",
                activeDropdown === 'products'
                  ? "opacity-100 scale-y-100 translate-y-0"
                  : "opacity-0 scale-y-0 -translate-y-4 pointer-events-none"
              )}>
                <li className="py-2 px-4 border-b border-gray-100 hover:bg-gray-50">
                  <Link href="/product/product1" className="block text-gray-700">
                    Granular Activated Carbon
                  </Link>
                </li>
                <li className="py-2 px-4 border-b border-gray-100 hover:bg-gray-50">
                  <Link href="/product/product2" className="block text-gray-700">
                    Powdered Activated Carbon
                  </Link>
                </li>
                <li className="py-2 px-4 hover:bg-gray-50">
                  <Link href="/product/product3" className="block text-gray-700">
                    Pelletized Activated Carbon
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/activated"
                className="text-gray-800 hover:text-primary-500 transition-colors py-2"
              >
                ACTIVATED CARBON
              </Link>
            </li>
            <li>
              <Link
                href="/application"
                className="text-gray-800 hover:text-primary-500 transition-colors py-2"
              >
                APPLICATIONS
              </Link>
            </li>
            <li>
              <Link
                href="/service"
                className="text-gray-800 hover:text-primary-500 transition-colors py-2"
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-800 hover:text-primary-500 transition-colors py-2"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>

        {/* Get Quote Button */}
        <Link href="/contact" className="hidden lg:inline-flex">
          <Button variant="corporate">
            Get a Quote →
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 focus:outline-none"
        >
          {isMenuOpen ? (
            <X size={24} className="text-gray-700" />
          ) : (
            <Menu size={24} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="p-2">
            <X size={24} className="text-gray-700" />
          </button>
        </div>

        <nav className="px-6 py-4">
          <ul className="space-y-4 font-poppins">
            <li className="border-b border-gray-200 pb-2">
              <Link
                href="/"
                className="block text-gray-800 py-2"
                onClick={toggleMenu}
              >
                HOME
              </Link>
            </li>
            <li className="border-b border-gray-200 pb-2">
              <Link
                href="/about"
                className="block text-gray-800 py-2"
                onClick={toggleMenu}
              >
                ABOUT US
              </Link>
            </li>
            <li className="border-b border-gray-200 pb-2">
              <button
                onClick={() => toggleDropdown('mobileProducts')}
                className="flex items-center justify-between w-full text-gray-800 py-2"
              >
                PRODUCTS
                <ChevronDown size={18} className={cn(
                  "transition-transform",
                  activeDropdown === 'mobileProducts' ? "rotate-180" : ""
                )} />
              </button>

              <ul className={cn(
                "pl-4 space-y-2 transition-all",
                activeDropdown === 'mobileProducts'
                  ? "max-h-96 opacity-100 py-2"
                  : "max-h-0 opacity-0 overflow-hidden"
              )}>
                <li>
                  <Link
                    href="/product/product1"
                    className="block text-gray-600 py-1"
                    onClick={toggleMenu}
                  >
                    Granular Activated Carbon
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product/product2"
                    className="block text-gray-600 py-1"
                    onClick={toggleMenu}
                  >
                    Powdered Activated Carbon
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product/product3"
                    className="block text-gray-600 py-1"
                    onClick={toggleMenu}
                  >
                    Pelletized Activated Carbon
                  </Link>
                </li>
              </ul>
            </li>
            <li className="border-b border-gray-200 pb-2">
              <Link
                href="/activated"
                className="block text-gray-800 py-2"
                onClick={toggleMenu}
              >
                ACTIVATED CARBON
              </Link>
            </li>
            <li className="border-b border-gray-200 pb-2">
              <Link
                href="/application"
                className="block text-gray-800 py-2"
                onClick={toggleMenu}
              >
                APPLICATIONS
              </Link>
            </li>
            <li className="border-b border-gray-200 pb-2">
              <Link
                href="/service"
                className="block text-gray-800 py-2"
                onClick={toggleMenu}
              >
                SERVICES
              </Link>
            </li>
            <li className="pb-2">
              <Link
                href="/contact"
                className="block text-gray-800 py-2"
                onClick={toggleMenu}
              >
                CONTACT US
              </Link>
            </li>
          </ul>

          <div className="mt-8">
            <Link
              href="/contact"
              onClick={toggleMenu}
            >
              <button className="w-full bg-primary hover:bg-primary-600 text-white py-3 rounded-md font-medium transition-colors">
                Get a Quote
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
