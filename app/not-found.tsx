import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import { OrganizationSchema } from './components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Page Not Found | CG Carbon',
  description: 'The page you are looking for does not exist. Explore our activated carbon solutions for water treatment, air purification, and more.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <OrganizationSchema />
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <h1 className="text-6xl font-bold text-primary-600">404</h1>
        <h2 className="text-3xl font-semibold mt-6 mb-2">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mb-8">
          We couldn't find the page you were looking for. It might have been moved, deleted, or never existed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/">
            <Button variant="corporate" size="lg">
              Back to Home
            </Button>
          </Link>
          <Link href="/product">
            <Button variant="outline" size="lg">
              Explore Products
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
