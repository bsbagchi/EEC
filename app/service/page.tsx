import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

import HeroBanner from '../components/HeroBanner';
import serviceBanner from '../images/serviceimg.png';

const services = [
  {
    id: 1,
    title: "Carbon Supply & Distribution",
    description: "We supply high-quality activated carbon products tailored to your specific requirements across various industries.",
    features: [
      "Custom formulations for specific applications",
      "Bulk and retail packaging options",
      "Global shipping and logistics support",
      "Consistent product quality and specifications"
    ]
  },
  {
    id: 2,
    title: "Technical Consultation",
    description: "Our team of experts provides technical guidance on selecting the right activated carbon solution for your application.",
    features: [
      "Application-specific product recommendations",
      "Process optimization advice",
      "On-site technical support",
      "Performance testing and analysis"
    ]
  },
  {
    id: 3,
    title: "Custom Carbon Solutions",
    description: "We develop custom activated carbon products designed specifically for your unique purification challenges.",
    features: [
      "Custom particle size distribution",
      "Tailored physical properties",
      "Application-specific surface modifications",
      "Performance validation testing"
    ]
  },
  {
    id: 4,
    title: "Carbon Reactivation",
    description: "Our environmentally friendly reactivation services give your spent carbon new life, reducing waste and costs.",
    features: [
      "Thermal reactivation process",
      "Performance testing of reactivated carbon",
      "Reduced carbon footprint compared to new production",
      "Cost-effective alternative to replacement"
    ]
  }
];

export default function ServicePage() {
  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner
        backgroundImage={serviceBanner}
        title="Our Services"
        description="Comprehensive activated carbon solutions to meet your purification needs"
      />

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Standard Services</h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            At EstellaEcoCarbon, we provide a comprehensive range of services to support your activated carbon needs, from product selection to technical support and custom solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-left transition-all duration-300 hover:shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="inline-flex items-center text-primary-500 font-semibold hover:underline">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-background-accent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Industries We Serve</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our activated carbon solutions are used across a wide range of industries, helping solve diverse purification challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Water Treatment</h3>
              <p className="text-gray-600">
                Municipal water treatment, industrial wastewater, residential water filtration, and aquarium water purification.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Air & Gas Purification</h3>
              <p className="text-gray-600">
                Industrial emissions control, HVAC systems, gas masks and respirators, and odor control applications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Food & Beverage</h3>
              <p className="text-gray-600">
                Sugar refining, alcohol production, edible oil purification, and flavor removal in beverages.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Pharmaceutical</h3>
              <p className="text-gray-600">
                API purification, decolorization of pharmaceutical products, and removal of impurities from medical solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Oil & Gas</h3>
              <p className="text-gray-600">
                Hydrocarbon purification, gas sweetening, catalyst support, and mercury removal from natural gas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Mining</h3>
              <p className="text-gray-600">
                Gold recovery, precious metal extraction, and purification of mining process water.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Contact our team to discuss how our services can help solve your activated carbon needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors">
              Request a Quote
            </Link>
            <Link href="/about" className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-semibold transition-colors">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
