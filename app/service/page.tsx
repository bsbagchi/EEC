'use client';
import React from 'react';
import './Service.css';
import ban from '../images/serviceimg.png';
import Enquiry from '../components/product/Enquiry';
import Services from '../components/services/Services';
import Image from 'next/image';
import Link from 'next/link';

function Service() {
  return (
    <div>
      <section className="max-sm:h-[24.5rem] md:h-[50rem] relative">
        <div><Image  className='absolute w-full max-sm:h-[24.5rem] md:h-[50rem]  -top-24 -z-10' src={ban} alt='banner'/>
        <div style={{background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 108.28%);"}} className='z-0 w-full max-sm:h-[24.5rem] md:h-[50rem] absolute opacity-90 -top-24'></div>
        <Link href={'/contact'} className='  absolute right-1 -top-1 text-center bg-black montserrat text-[8px] leading-[14.68px] hidden max-sm:flex justify-center bg-opacity-70 items-center   w-[67px] h-[18px] text-white'>Get a Quote&gt;</Link>
        </div>
        <div className="lg:w-[993px] relative -bottom-12 h-[441px] max-sm:w-[17.5rem] max-sm:h-[8.8rem] max-sm:px-3  md:py-10 px-12 max-sm:m-[1rem] sm:m-[4rem] rounded-[24px] bg-black bg-opacity-[50%] text-white">
          <h1 className='max-sm:pt-2  leading-[3.6rem] max-sm:text-xs text-[2.5rem] poppins md:text-5xl font-[600] md:pb-4'>Standard Services</h1>
          <h1 className=" md:leading-tight lg:leading-[80.66px] text-white lg:mb-[20px] max-sm:text-xs md:w-[25rem] lg:w-[50rem]  poppins font-[600] md:text-5xl lg:text-[56px] ">At EstellaEcoCarbon</h1>
          <p  className="max-sm:text-[10px] md:leading-10 lg:leading-[44.04px] text-[24px] montserrat font-[400]">
          Our customers are at the core of everything we do. We strive to build lasting relationships by providing exceptional customer service and support.
          </p>
          {/* <button className="w-[316px] h-[67px] max-sm:m-2 max-sm:h-[20px] max-sm:w-[101px] max-sm:text-[10px] mt-7 rounded-[0.5rem]  border-2 border-white montserrat font-[400] text-[2rem]">Get Started</button> */}
        </div>
      </section>
      
    <Services/>
      
      <Enquiry/>
    </div>
  )
}

export default Service
