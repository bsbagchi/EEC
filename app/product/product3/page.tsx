import React from 'react'
import './Product3.css'
import img1 from '../../images/product3/image 59.svg';
import ban from '../../images/pro3.png'
import Image from 'next/image';
import Enquiry from '@/app/components/product/Enquiry';
function Product3() {
  return (
    <div>
      <section className="max-sm:h-[24.5rem] md:h-[50rem] relative">
        <div><Image  className='absolute w-full max-sm:h-[24.5rem] md:h-[50rem]  -top-24 -z-10' src={ban} alt='banner'/>
        <div style={{background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 108.28%);"}} className='z-0 w-full max-sm:h-[24.5rem] md:h-[50rem] absolute opacity-90 -top-24'></div>
        </div>
        <div className="lg:w-[993px] relative -bottom-12 h-[441px] max-sm:w-[17.5rem] max-sm:h-[8.8rem] max-sm:px-3  md:py-10 px-12 max-sm:m-[1rem] sm:m-[4rem] rounded-[24px] bg-black bg-opacity-[50%] text-white">
          <h1 className='max-sm:pt-2  leading-[3.6rem] max-sm:text-xs text-[2.5rem] poppins md:text-5xl font-[600] md:pb-4'>Our Products</h1>
          <h1 className=" md:leading-tight lg:leading-[80.66px] text-white lg:mb-[20px] max-sm:text-xs md:w-[25rem] lg:w-[60rem]  poppins font-[600] md:text-5xl lg:text-[56px] ">Pellet activated carbon</h1>
          <p  className="max-sm:text-[10px] md:leading-10 lg:leading-[44.04px] text-[24px] montserrat font-[400]">
          Pellets are activated carbon compressed into formed cylinders, and have a wide variety of uses removing contaminants such as volatile organic compounds (VOC’s) and mercury from natural gas as well as controlling odor.
          </p>
          {/* <button className="w-[316px] h-[67px] max-sm:m-2 max-sm:h-[20px] max-sm:w-[101px] max-sm:text-[10px] mt-7 rounded-[0.5rem]  border-2 border-white montserrat font-[400] text-[2rem]">Get Started</button> */}
        </div>
      </section>
      <section className=' px-40 py-20'>
      <div className='py-10'>
          <Image src={img1} alt=''/>
          <h1 className='font-semibold poppin  max-sm:leading-[17.28px] max-sm:text-[12px]  md:text-[2.5rem] md:leading-[68.4px] max-sm:py-2 text-center md:py-5'>Features & Benefits:</h1>
          <p className='text-center md:text-xl md:leading-[36.7px] max-sm:leading-[14.68px] font-normal max-sm:text-[8px] montserrat'>Pelletized activated carbon is created by extruding activated carbon into cylindrical shaped pellets with diameters ranging from 0.8 to 5 mm. Their high activity and surface area make it ideal for many vapor phase applications. The uniformity of its shape makes it particularly useful in applications where low-pressure drop is a consideration.</p>
<p className='text-center md:text-xl md:leading-[36.7px] max-sm:leading-[14.68px] font-normal max-sm:text-[8px] montserrat'>EE Carbon manufactures many pellet types of activated carbon products, each specifically designed to provide a unique pore structure and adsorption properties.</p>
<p className='text-center md:text-xl md:leading-[36.7px] max-sm:leading-[14.68px] font-normal max-sm:text-[8px] montserrat'>By varying manufacturing conditions, internal pore structures are created that impart unique adsorption properties specific to each product type. The choice of product for a specific application will vary due to differing impurities and process conditions.</p>
<p className='text-center md:text-xl md:leading-[36.7px] max-sm:leading-[14.68px] font-normal max-sm:text-[8px] montserrat'>The adsorptive capacity of pelletized carbon makes it ideal for removing a variety of contaminants from air and gas streams. Pellets are also an environmentally responsible product that can be reactivated through thermal oxidation and used multiple times for the same application.</p>
<p className='text-center md:text-xl md:leading-[36.7px] max-sm:leading-[14.68px] font-normal max-sm:text-[8px] montserrat'>A call to EE Carbon to discuss application requirements will help determine the optimum activated carbon solution for your application.</p>
          
        </div>
      </section>
      <Enquiry/>
    </div>
  )
}

export default Product3
