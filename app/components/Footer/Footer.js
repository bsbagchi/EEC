import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, ChevronRight } from 'lucide-react';

// Import logo if you have one
import logo from '../../images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100">
      {/* Main Footer */}
      <div className="container mx-auto pt-16 pb-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src={logo}
                alt="EstellaEcoCarbon Logo"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>

            <p className="text-gray-600 max-w-xs">
              Pioneering Sustainable Activated Carbon Solutions for a cleaner, healthier world.
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-gray-600">
                <MapPin className="h-5 w-5 text-primary-500 mt-0.5" />
                <span>SadaShivnagar, Bangalore - 535022</span>
              </div>

              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="h-5 w-5 text-primary-500" />
                <span>+91 94818 73543</span>
              </div>

              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="h-5 w-5 text-primary-500" />
                <span>contact@estellaecocarbon.com</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all">
                <Facebook className="h-5 w-5 text-primary-500" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all">
                <Instagram className="h-5 w-5 text-primary-500" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all">
                <Twitter className="h-5 w-5 text-primary-500" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all">
                <Linkedin className="h-5 w-5 text-primary-500" />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary-500 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary-500 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-gray-600 hover:text-primary-500 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Products
                </Link>
              </li>
              <li>
                <Link href="/service" className="text-gray-600 hover:text-primary-500 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary-500 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/service" className="text-gray-600 hover:text-primary-500 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Water Treatment Industry
                </Link>
              </li>
              <li>
                <Link href="/service" className="text-gray-600 hover:text-primary-500 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Air and Gas Purification
                </Link>
              </li>
              <li>
                <Link href="/service" className="text-gray-600 hover:text-primary-500 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Food and Beverage Industry
                </Link>
              </li>
              <li>
                <Link href="/service" className="text-gray-600 hover:text-primary-500 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Carbon Reactivation
                </Link>
              </li>
              <li>
                <Link href="/service" className="text-gray-600 hover:text-primary-500 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Custom Carbon Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter to receive updates and news about our products and services.
            </p>

            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-4 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-center md:text-left">
            &copy; {currentYear} <span className="font-semibold">EstellaEcoCarbon</span>. All Rights Reserved.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-600 hover:text-primary-500 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-600 hover:text-primary-500 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
