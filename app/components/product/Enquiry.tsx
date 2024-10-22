import React from 'react'
import banner from '../../images/contact.jpeg';
import Image from 'next/image';

export default function Enquiry() {
  return (
    <div>
     <section>
  <div className='max-sm:h-[159px] md:h-[472px] relative overflow-hidden'>
    <Image
      className='absolute inset-0'
      src={banner}
      alt='banner'
      layout='fill'
      objectFit='cover'
    />
    <div className='absolute inset-0 bg-black opacity-20 pointer-events-none'></div>
    
    <div className='flex flex-col items-center justify-center h-full relative z-10'>
      <h1  className='max-sm:text-[16px] max-sm:font-[300] max-sm:w-[90%] max-sm:leading-[23.05px] text-[4rem] max-sm:pb-5 md:pb-10 leading-[5.8rem] mx-auto w-[65%] text-center  font-[300px] gradient-text'>
      Let us know if you have any questions about our products and services.
      </h1>
      <button
       
        className='max-sm:text-[12px] max-sm:pb-2   max-sm:leading-[22.02px]  border-2 max-sm:h-[22px] h-[67px] max-sm:w-[139px] max-sm:rounded-lg border-white text-white montserrat font-semibold rounded-lg overflow-hidden  w-[391px] text-[36px] leading-[66px] md:mt-4'
      >
        Submit an Enquiry
      </button>
    </div>
  </div>
</section>


 
    </div>
  )
}
