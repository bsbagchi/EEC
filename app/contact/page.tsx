import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import { OrganizationSchema, BreadcrumbSchema } from '../components/SchemaMarkup';

import contactBanner from '../images/contact.jpeg';

export const metadata: Metadata = {
  title: 'Contact Us | CG Carbon',
  description: 'Contact CG Carbon for inquiries about our premium activated carbon products and solutions. We are happy to assist you.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | CG Carbon',
    description: 'Contact CG Carbon for inquiries about our premium activated carbon products and solutions. We are happy to assist you.',
    url: 'https://cgcarbon.in/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', item: 'https://cgcarbon.in/' },
          { name: 'Contact Us' },
        ]}
      />

      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="h-[40vh] md:h-[50vh] relative overflow-hidden">
            <Image
              src={contactBanner}
              alt="CG Carbon Contact Banner"
              className="object-cover w-full h-full"
              priority
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
              <div className="container mx-auto px-4 md:px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
                <p className="text-xl text-white/80 max-w-2xl">
                  We're here to help with all your activated carbon needs. Reach out to our team today.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                  <p className="text-gray-600 mb-8">
                    Whether you have questions about our products, need technical support, or want to discuss your specific application requirements, our team is ready to assist you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-50 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Our Location</h3>
                      <p className="text-gray-600">SadaShivnagar, Bangalore - 535022, India</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-50 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Phone Number</h3>
                      <p className="text-gray-600">+91 94818 73543</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-50 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Email Address</h3>
                      <p className="text-gray-600">contact@cgcarbon.in</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-50 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Business Hours</h3>
                      <p className="text-gray-600">Monday-Friday: 9:00 AM - 6:00 PM IST</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>

                  <Button type="submit" variant="corporate" size="lg" className="w-full">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Location</h2>
            <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-md">
              <iframe
                title="CG Carbon Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.1146277811!2d77.36851299670292!3d12.954294595118331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1652032242045!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
