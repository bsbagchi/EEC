'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Quote = () => {
  return (
    <section className="bg-primary-600 py-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Looking for High-Quality Activated Carbon Solutions?
        </h2>

        <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
          Contact us today to discuss how our premium activated carbon products can meet your specific requirements.
        </p>

        <Link href="/contact">
          <Button
            variant="corporateOutline"
            size="lg"
            className="font-semibold text-base group"
          >
            Get a Quote
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Quote;
