'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface HeroBannerProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  description: string;
  showQuoteLink?: boolean;
  className?: string;
  imageClassName?: string;
  headingLevel?: 'h1' | 'h2';
  imageAlt?: string;
}

const HeroBanner = ({
  backgroundImage,
  title,
  subtitle,
  description,
  showQuoteLink = true,
  className,
  imageClassName,
  headingLevel = 'h1',
  imageAlt = "CG Carbon Banner Image"
}: HeroBannerProps) => {
  // Dynamic heading component based on the heading level prop
  const HeadingComponent = headingLevel;

  return (
    <section
      className={cn("relative md:h-[40rem] max-sm:h-[24.5rem]", className)}
      aria-labelledby="banner-title"
    >
      <div>
        <Image
          className={cn("absolute w-full md:h-[40rem] max-sm:h-[24.5rem] -top-24 -z-10 object-cover", imageClassName)}
          src={backgroundImage}
          alt={imageAlt}
          priority
          width={1920}
          height={1080}
        />
        <div
          className="z-0 w-full md:h-[40rem] max-sm:h-[24.5rem] absolute -top-24 banner-overlay"
          aria-hidden="true"
        />

        {showQuoteLink && (
          <Link href={'/contact'}>
            <Button
              className="absolute right-1 -top-1 text-center bg-black bg-opacity-70 montserrat text-[12px] leading-[14.68px] hidden max-sm:flex justify-center items-center w-[100px] h-[30px] text-white"
              aria-label="Get a quote"
            >
              Get a Quote&gt;
            </Button>
          </Link>
        )}

        <div className="lg:w-[993px] relative h-[441px] max-sm:w-[17.5rem] max-sm:h-[8.8rem] max-sm:px-3 md:py-10 px-12 max-sm:m-[1rem] sm:m-[4rem] rounded-[24px] bg-black bg-opacity-[50%] text-white">
          {title && (
            <HeadingComponent
              id="banner-title"
              className="max-sm:pt-2 leading-[3.6rem] max-sm:text-[12px] max-sm:leading-[17.28px] text-[2.5rem] poppins md:text-5xl font-[600] md:pb-4"
            >
              {title}
            </HeadingComponent>
          )}

          {subtitle && (
            <h2 className="md:leading-tight lg:leading-[80.66px] text-[#D1D1D1] lg:mb-[20px] md:w-[25rem] lg:w-[40rem] poppins font-[600] md:text-5xl lg:text-[56px]">
              {subtitle}
            </h2>
          )}

          {description && (
            <p className="md:leading-10 lg:leading-[44.04px] text-[24px] montserrat font-[400]">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
