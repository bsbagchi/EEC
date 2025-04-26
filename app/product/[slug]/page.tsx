import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import HeroBanner from '@/app/components/HeroBanner';
import { Button } from '@/components/ui/button';

// Sample product data - in a real app this would come from a database or API
const products = {
  'product1': {
    id: 'product1',
    name: 'Granular Activated Carbon (GAC)',
    description: 'Carbons\' granular Coconut Shell Activated Carbon products are used across a wide range of applications. Various mesh sizes and activity levels are employed in both liquid and gas applications.',
    detailedDescription: 'The adsorptive capacity of granular activated carbon makes it ideal for removing a variety of contaminants from water, air, liquids, and gases to improve taste, odor, and color. Typical GAC applications are municipal and environmental water treatment, waste gas treatment, mercury removal in industrial gasses, food and beverage, metal recovery, and even medicinal use.',
    image: '/images/products/product1.png',
    bannerImage: '/images/products/pro1.png',
    features: [
      'High purity activated carbon derived from coconut shells',
      'Various mesh sizes available for different applications',
      'Excellent adsorption capacity for organic compounds',
      'Low ash content and high hardness',
      'Suitable for both liquid and gas phase applications'
    ],
    applications: [
      'Municipal Water Treatment',
      'Environmental Water Treatment',
      'Environmental Air Treatment',
      'Industrial Process',
      'Personal Protection Equipment',
      'Food and Beverage'
    ],
    packaging: 'Our packages are designed to maintain the product quality and prevent degradation under normal storage and handling conditions. Special packing as per customer requirement is also available on request.'
  },
  'product2': {
    id: 'product2',
    name: 'Powdered Activated Carbon (PAC)',
    description: 'Powdered Activated Carbon (PAC) is similar to Granular Activated Carbon (GAC) as it is made from high quality coal, wood or coconut shell raw material. PAC is typically considered to have particles less than U.S standard 80 mesh size, which makes it ideal for water treatment.',
    detailedDescription: 'The adsorptive capacity of EE Carbon\'s powdered activated carbon (PAC) makes it ideal for removing a variety of contaminants from water, air, liquids and gases. With efforts to be environmentally responsible, EE Carbon can reactivate spent Granular Activated Carbon (GAC) through thermal oxidation to make "react" PAC.',
    image: '/images/products/product2.png',
    bannerImage: '/images/products/pro2.png',
    features: [
      'Fine particle size for rapid adsorption',
      'High surface area for maximum contaminant removal',
      'Customizable properties for specific applications',
      'Cost-effective solution for batch treatment processes',
      'Available in various grades for different purification needs'
    ],
    applications: [
      'Municipal water treatment',
      'Industrial wastewater treatment',
      'Food and beverage processing',
      'Pharmaceuticals',
      'Sugar refining',
      'Chemical purification'
    ],
    packaging: 'Our PAC is available in various packaging options including bulk bags, 25kg bags, and specialized containers for ease of handling and application.'
  },
  'product3': {
    id: 'product3',
    name: 'Pelletized Activated Carbon (PAC)',
    description: 'Pellets are activated carbon compressed into formed cylinders, and have a wide variety of uses removing contaminants such as volatile organic compounds (VOC\'s) and mercury from natural gas as well as controlling odor.',
    detailedDescription: 'Pelletized activated carbon is created by extruding activated carbon into cylindrical shaped pellets with diameters ranging from 0.8 to 5 mm. Their high activity and surface area make it ideal for many vapor phase applications. The uniformity of its shape makes it particularly useful in applications where low-pressure drop is a consideration.',
    image: '/images/products/product3.png',
    bannerImage: '/images/products/pro3.png',
    features: [
      'Uniform cylindrical shape for optimal packing',
      'Low pressure drop in flow-through systems',
      'High mechanical strength and durability',
      'Excellent adsorption capacity for gas phase applications',
      'Available in various diameters for different applications'
    ],
    applications: [
      'Air purification systems',
      'Gas mask filters',
      'Solvent recovery',
      'Vehicle emission control',
      'HVAC systems',
      'Mercury removal from natural gas'
    ],
    packaging: 'Our pelletized activated carbon is packaged in moisture-resistant containers to maintain product integrity and is available in various sizes according to client requirements.'
  }
};

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = products[slug as keyof typeof products];

  if (!product) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">The product you are looking for does not exist.</p>
        <Link href="/product">
          <Button variant="corporate">View All Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner
        backgroundImage={product.bannerImage}
        title="Our Products"
        subtitle={product.name}
        description={product.description}
      />

      {/* Product Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h2>
              <p className="text-gray-600 mb-6">{product.detailedDescription}</p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact" className="inline-flex">
                  <Button variant="corporate" size="lg" className="mt-4">
                    Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-background-accent">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Applications</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {product.applications.map((application, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-2">{application}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Packaging</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              {product.packaging}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
          <p className="mb-8 text-white/80 max-w-2xl mx-auto">
            Our team of experts is ready to help you find the right activated carbon solution for your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="corporateOutline" size="lg">
                Contact Us
              </Button>
            </Link>
            <Link href="/product">
              <Button variant="corporateOutline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
