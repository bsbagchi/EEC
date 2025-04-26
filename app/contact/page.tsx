import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

import contactBanner from '../images/contact.jpeg';

export default function ContactPage() {
  return (
    <div className="bg-background pb-16">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image
          src={contactBanner}
          alt="Contact Us"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-xl mx-auto">
              Reach out to us for any queries or to request a quote
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details and Form */}
      <section className="container mx-auto py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our products or services? Our team is ready to assist you with any inquiries or to help you find the right activated carbon solution for your needs.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-50 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Our Location</h3>
                  <p className="text-gray-600 mt-1">SadaShivnagar, Bangalore - 535022, Karnataka, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-50 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Phone Number</h3>
                  <p className="text-gray-600 mt-1">+91 94818 73543</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-50 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email Address</h3>
                  <p className="text-gray-600 mt-1">contact@estellaecocarbon.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-50 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Business Hours</h3>
                  <p className="text-gray-600 mt-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your Phone Number"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Please provide details about your inquiry"
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="corporate"
                className="w-full py-6 text-base font-semibold flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9973869331!2d77.35073117384877!3d12.95384772557775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1655544246411!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
