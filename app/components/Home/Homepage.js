'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Building } from 'lucide-react';

// Import components
import Quote from './Quote';
import HeroBanner from '../HeroBanner';
import ProductCard from '../ProductCard';

// Import images
import ban from '../../images/home/homepage.png';
import aboutus from '../../images/home/EEC.JPG';
import product1 from '../../images/product1.png';
import product2 from '../../images/product2.png';
import product3 from '../../images/product3.png';
import banner from '../../images/contact.jpeg';
import one from '../../images/application/Frame 1.png';
import two from '../../images/application/Frame 2.png';
import three from '../../images/application/Frame 3.png';
import four from '../../images/application/Frame 4.svg';

const Homepage = () => {
  const products = [
    {
      id: 1,
      image: product1,
      title: 'Granular Activated Carbon (GAC)',
      description: 'Granular Carbon is used for filtration and precious metal recovery',
      path:'/product/product1',
    },
    {
      id: 2,
      image: product2,
      title: 'Powder Activated Carbon (PAC)',
      description: 'Powder Carbon is mainly used for liquid application.',
      path:'/product/product2'
    },
    {
      id: 3,
      image: product3,
      title: 'Pelletized Activated Carbon (PAC)',
      description: 'Pelletized Carbon used for air and water purification.',
      path:'/product/product3'
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Banner */}
      <HeroBanner
        backgroundImage={ban}
        title="Welcome to"
        subtitle="EstellaEcoCarbon"
        description="Pioneering Sustainable Activated Carbon Solutions for a cleaner, healthier world."
        showQuoteLink={true}
      />

      {/* About Section */}
      <section className="section-container bg-background-muted">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-primary-500 mb-2">Welcome To EstellaEcoCarbon</h2>
              <h3 className="text-4xl font-semibold mb-6">About Us</h3>
              <p className="text-lg text-text-secondary mb-6">
                EstellaEcoCarbon is your trusted partner in the manufacturing of high-quality activated carbon. Specializing in sustainable and efficient solutions, we serve various industries including water treatment, air purification, and food processing. Our products are derived from eco-friendly sources like coconut shells and wood, ensuring that our environmental footprint remains minimal while delivering maximum performance.
              </p>

              <div className="border-t border-gray-200 my-6"/>

              <div className="flex flex-col space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary-50 p-3">
                    <Building className="h-6 w-6 text-primary-500"/>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Industry Solutions</h4>
                    <p className="text-text-secondary">
                      Activated Carbon is a crucial ingredient used across all sectors and industries
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary-50 p-3">
                    <CheckCircle2 className="h-6 w-6 text-primary-500"/>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Quality Standards</h4>
                    <p className="text-text-secondary">
                      EstellaEcoCarbon strives to retain customers by providing quality products consistently.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/about" className="inline-flex items-center text-primary-500 font-semibold mt-8 hover:underline">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="w-full lg:w-1/2">
              <Image
                src={aboutus}
                alt="EstellaEcoCarbon Factory"
                className="rounded-lg shadow-lg"
                width={600}
                height={500}
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <Quote />

      {/* Products Section */}
      <section className="section-container bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Our Products</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Discover our range of high-quality activated carbon solutions for various applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              path={product.path}
            />
          ))}
        </div>
      </section>

      {/* Applications Section */}
      <section className="section-container bg-background-accent">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Applications</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Our activated carbon products are used in a wide range of applications across various industries
          </p>
        </div>

        <div className="space-y-16">
          {/* Application 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <Image
                src={one}
                alt="Water Treatment"
                className="rounded-lg shadow-md"
                width={400}
                height={300}
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-primary-600">Water Treatment</h3>
              <p className="text-text-secondary">
                Most of our planet is covered with water, but most of it requires purification to make it suitable for human consumption. Activated carbon plays a central role in ensuring the clean and drinkable nature of the water we drink. Powder and granular activated carbons remove organic chemicals and reduce toxicity in waste water to ensure safe flow into surface water. It is highly effective in deodorization and treatment of soluble organic chemicals, endocrine disruptors and other pollutants.
              </p>
            </div>
          </div>

          {/* Application 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="w-full md:w-1/3">
              <Image
                src={two}
                alt="Air/Gas Treatment"
                className="rounded-lg shadow-md"
                width={400}
                height={300}
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-primary-600">Air/Gas Treatment</h3>
              <p className="text-text-secondary">
                The development of the industry has polluted our atmosphere with disastrous consequences. Gas emissions need to be kept under control. Considering the concentration limits of pollutants, good air quality and protection of public health can be achieved. Adsorption technology is based on the ability of activated carbon to transport Volatile Organic Compounds (VOCs). Industries have used activated carbon for many years to improve air quality in a variety of applications.
              </p>
            </div>
          </div>

          {/* Application 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <Image
                src={three}
                alt="Oil and Gas"
                className="rounded-lg shadow-md"
                width={400}
                height={300}
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-primary-600">Oil and Gas</h3>
              <p className="text-text-secondary">
                Activated Carbon is an excellent choice for the purification of raw materials, intermediates and end products for the oil and gas industry. The removal of unwanted pollutants such as mercury, colors, odors and sulfur compounds allow for consistent production of high-quality natural gas, oil and petrochemical products.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/application"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-md transition-all"
            >
              View All Applications <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 bg-primary-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={banner}
            alt="background"
            layout="fill"
            objectFit="cover"
            quality={90}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Why Choose EstellaEcoCarbon?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {/* Feature 1 */}
            <div className="flex gap-6">
              <div className="text-6xl font-bold text-secondary-300 leading-none">01</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-100">
                  Our commitment to excellence ensures that every product meets rigorous quality standards.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6">
              <div className="text-6xl font-bold text-secondary-300 leading-none">02</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Sustainability</h3>
                <p className="text-gray-100">
                  We prioritize environmentally friendly practices throughout our manufacturing processes.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-6">
              <div className="text-6xl font-bold text-secondary-300 leading-none">03</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-100">
                  Continuously advancing our technologies to provide the most effective purification solutions.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-6">
              <div className="text-6xl font-bold text-secondary-300 leading-none">04</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Customer Focus</h3>
                <p className="text-gray-100">
                  Our customers are at the core of everything we do. We strive to build lasting relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
