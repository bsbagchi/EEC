import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Award, Users, Leaf, Shield, FileCheck } from 'lucide-react';
import { Metadata } from 'next';
import HeroBanner from '../components/HeroBanner';
import aboutBanner from '../images/aboutimag.png';
import aboutImage1 from '../images/home/EEC.JPG';
import { OrganizationSchema, BreadcrumbSchema } from '../components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'About Us | CG Carbon',
  description: 'Learn about CG Carbon, a leading manufacturer of high-quality activated carbon products for water treatment, air purification, and more.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | CG Carbon',
    description: 'Learn about CG Carbon, a leading manufacturer of high-quality activated carbon products for water treatment, air purification, and more.',
    url: 'https://cgcarbon.in/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', item: 'https://cgcarbon.in/' },
          { name: 'About Us' },
        ]}
      />

      {/* Hero Section */}
      <HeroBanner
        backgroundImage={aboutBanner.src}
        title="About Us"
        subtitle="CG Carbon"
        description="Pioneering Sustainable Activated Carbon Solutions"
        imageAlt="CG Carbon About Us Banner"
      />

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Our Company</h2>
              <p className="text-gray-600">
                Founded on the principles of innovation and sustainability, CG Carbon has grown to become a leader in the activated carbon sector. Our state-of-the-art manufacturing facilities and stringent quality control processes ensure that we provide products that meet the highest industry standards.
              </p>
              <p className="text-gray-600">
                At CG Carbon, we believe in creating products that not only solve our clients' purification needs but also contribute to a healthier planet. Our commitment to sustainability drives every aspect of our business, from sourcing raw materials to manufacturing processes.
              </p>

              <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Premium Quality Products</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Global Supply Network</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Expert Technical Support</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <Image
                src={aboutImage1}
                alt="CG Carbon Facility"
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-background-accent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4 p-3 inline-block bg-primary-50 rounded-full">
                <Award className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be a global leader in providing innovative and sustainable activated carbon solutions that contribute to a cleaner and healthier world.
              </p>
              <div className="mt-6 border-t border-gray-100 pt-6">
                <p className="text-gray-600 italic">
                  "We envision a world where our sustainable purification solutions create safer environments and healthier communities."
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4 p-3 inline-block bg-primary-50 rounded-full">
                <Leaf className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver high-quality activated carbon products through sustainable practices, continuous innovation, and commitment to excellence, while maintaining long-term relationships with our customers and partners.
              </p>
              <div className="mt-6 border-t border-gray-100 pt-6">
                <p className="text-gray-600 italic">
                  "Every day we strive to combine innovation with environmental responsibility in our pursuit of excellence."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            At CG Carbon, our values define who we are and guide our actions. They inform our decisions and shape our culture.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4 bg-primary-50 p-3 rounded-full mx-auto w-16 h-16 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                Our customers are at the center of everything we do. We listen to their needs and work to exceed their expectations.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4 bg-primary-50 p-3 rounded-full mx-auto w-16 h-16 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest quality in our products and services, constantly seeking ways to improve.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4 bg-primary-50 p-3 rounded-full mx-auto w-16 h-16 flex items-center justify-center">
                <Leaf className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to environmentally responsible practices throughout our operations.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4 bg-primary-50 p-3 rounded-full mx-auto w-16 h-16 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and ethical behavior in all our business dealings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-background-accent">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Certifications</h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Our commitment to quality and standards is reflected in our certifications and quality management systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="mb-6 bg-primary-50 p-6 rounded-full mx-auto w-24 h-24 flex items-center justify-center">
                <FileCheck className="h-12 w-12 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">ISO 9001:2015</h3>
              <p className="text-gray-600">
                Quality Management System certification ensuring consistent quality products and services through standardized processes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="mb-6 bg-primary-50 p-6 rounded-full mx-auto w-24 h-24 flex items-center justify-center">
                <Leaf className="h-12 w-12 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">ISO 14001:2015</h3>
              <p className="text-gray-600">
                Environmental Management System certification for environmentally responsible operations and sustainable practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="mb-6 bg-primary-50 p-6 rounded-full mx-auto w-24 h-24 flex items-center justify-center">
                <Shield className="h-12 w-12 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">NSF Certified</h3>
              <p className="text-gray-600">
                Our products meet the strict standards for use in water purification systems, ensuring safety and performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
