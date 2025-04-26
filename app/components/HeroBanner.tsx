'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface HeroBannerProps {
  backgroundImage: any;
  title: string;
  subtitle?: string;
  description: string;
  showQuoteLink?: boolean;
  className?: string;
  imageClassName?: string;
}

const HeroBanner = ({
  backgroundImage,
  title,
  subtitle,
  description,
  showQuoteLink = true,
  className,
  imageClassName,
}: HeroBannerProps) => {
  return (
    <section className={cn("relative md:h-[40rem] max-sm:h-[24.5rem]", className)}>
      <div>
        <Image
          className={cn("absolute w-full md:h-[40rem] max-sm:h-[24.5rem] -top-24 -z-10 object-cover", imageClassName)}
          src={backgroundImage}
          alt="banner"
          priority
        />
        <div
          className="z-0 w-full md:h-[40rem] max-sm:h-[24.5rem] absolute -top-24 banner-overlay"
        />

        {showQuoteLink && (
          <Link href={'/contact'}>
            <Button
              variant="corporate"
              className='absolute right-4 top-4 font-medium shadow-md'
            >
              Get a Quote →
            </Button>
          </Link>
        )}
      </div>

      <div className="lg:w-[993px] relative max-sm:-bottom-16 md:h-[441px] max-sm:w-[17.5rem] max-sm:h-auto max-sm:px-3 md:py-10 px-12 max-sm:m-[1rem] sm:m-[4rem] rounded-[24px] bg-black bg-opacity-[50%] backdrop-blur-sm text-white shadow-lg border border-white/10">
        <h1 className='max-sm:pt-3 max-sm:leading-[17.28px] leading-[3.6rem] max-sm:text-[12px] text-[2.5rem] poppins md:text-5xl font-[600] md:pb-3'>
          {title}
        </h1>

        {subtitle && (
          <h2 className="max-sm:leading-[17.28px] md:leading-tight lg:leading-[80.66px] max-sm:py-2 lg:mb-[20px] max-sm:text-[12px] md:w-[25rem] lg:w-[30rem] text-[#D1D1D1] poppins font-[500] md:text-5xl lg:text-[56px]">
            {subtitle}
          </h2>
        )}

        <div className="max-sm:text-[10px] max-sm:leading-[18.35px] max-sm:py-2 md:leading-10 lg:leading-[44.04px] text-[24px] montserrat font-[400]">
          <p className="max-sm:hidden md:block">{description}</p>
          <p className="max-sm:block hidden max-sm:w-[90%]">
            {description.length > 100 ? description.substring(0, 100) + '...' : description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
