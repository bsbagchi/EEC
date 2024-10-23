import React from 'react'
import './Product2.css'
import img1 from '../../images/product2/img1.svg';
import img2 from '../../images/product2/img2.svg';
import Image from 'next/image';
import ban from '../../images/pro2.png';
import Enquiry from '@/app/components/product/Enquiry';
import Link from 'next/link';
function Product2() {
  return (
    <div>
     <section className="max-sm:h-[24.5rem] md:h-[50rem] relative">
        <div><Image  className='absolute w-full max-sm:h-[24.5rem] md:h-[50rem]  -top-24 -z-10' src={ban} alt='banner'/>
        <div style={{background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 108.28%);"}} className='z-0 w-full max-sm:h-[24.5rem] md:h-[50rem] absolute opacity-90 -top-24'></div>
        <Link href={'/contact'} className='  absolute right-1 -top-1 text-center bg-black montserrat text-[12px] leading-[14.68px] hidden max-sm:flex justify-center bg-opacity-70 items-center   w-[100px] h-[30px] text-white'>Get a Quote&gt;</Link>
        
        
        
        </div>
        <div className="lg:w-[993px] relative -bottom-12 h-[441px] max-sm:w-[17.5rem] max-sm:h-[8.8rem] max-sm:px-3  md:py-10 px-12 max-sm:m-[1rem] sm:m-[4rem] rounded-[24px] bg-black bg-opacity-[50%] text-white">
          <h1 className='max-sm:pt-3 max-sm:leading-[17.28px] leading-[3.6rem] max-sm:text-[12px] text-[2.5rem] poppins md:text-5xl font-[600] md:pb-4'>Our Products</h1>
          <h1 className=" max-sm:py-1 md:leading-tight lg:leading-[80.66px] text-[#D1D1D1] lg:mb-[20px] max-sm:text-[12px] max-sm:leading-[17.28px] md:w-[25rem] lg:w-[60rem]  poppins font-[500]  md:text-5xl lg:text-[56px] ">Powdered Activated Carbon</h1>
          <p  className=" max-sm:hidden block md:leading-10 lg:leading-[44.04px] text-[24px] montserrat font-[400]">
          Powdered Activated Carbon (PAC) is similar to Granular Activated Carbon (GAC) as it is made from high quality coal, wood or coconut shell raw material. PAC is typically considered to have particles less than U.S standard 80 mesh size, which makes it ideal for water treatment.
          </p>
          <p className='max-sm:block text-justify w-[231px] hidden leading-[18.35px] montserrat font-normal max-sm:text-[10px] '>Powdered Activated Carbon (PAC) is similar to Granular Activated Carbon (GAC) as it is made from high quality coal, wood or coconut shell raw material.  </p>
          
          {/* <button className="w-[316px] h-[67px] max-sm:m-2 max-sm:h-[20px] max-sm:w-[101px] max-sm:text-[10px] mt-7 rounded-[0.5rem]  border-2 border-white montserrat font-[400] text-[2rem]">Get Started</button> */}
        </div>
      </section>
      <section className='max-sm:-mt-8 px-2 md:px-40'>
        <div className='md:py-10'>
          <Image src={img1} alt=''/>
          <h1 className=' font-semibold poppin  max-sm:leading-[17.28px] max-sm:text-[12px]  md:text-[2.5rem] md:leading-[68.4px] max-sm:py-2 text-justify md:py-5'>From residential and municipal water treatment to pharmaceutical product purification, and from food and beverage decolorization to energy storage, and much more — CG Carbon delivers a wide array of custom-engineered powdered activated carbons to better the customer needs.</h1>
          
        </div>
        
        <div className='py-10'>
          <Image src={img2} alt=''/>
          <h1 className='text-center font-semibold poppin  max-sm:leading-[17.28px] max-sm:text-[12px]  md:text-[2.5rem] md:leading-[68.4px] max-sm:py-2 md:px-40 md:py-5'>
          Features & Benefits:
            </h1>
          <p className='text-justify md:text-xl md:leading-[36.7px] max-sm:leading-[14.68px] font-normal max-sm:text-[8px] montserrat'>
          Powdered activated carbons (PAC) are defined by the ASTM as particles passing through an 80-mesh sieve (0.177 mm) and smaller. EE Carbon manufactures many types of powdered activated carbon products, each specifically engineered to provide a unique pore structure and adsorption properties.
By varying manufacturing conditions, internal pore structures are created by imparting unique adsorption properties specific to each product type. The choice of product for a specific application will vary due to differing impurities and proprietary process conditions.</p>
<p className='text-justify md:text-xl md:leading-[36.7px] max-sm:leading-[14.68px] font-normal max-sm:text-[8px] montserrat'>
The adsorptive capacity of EE Carbon’s powdered activated carbon (PAC) makes it ideal for removing a variety of contaminants from water, air, liquids and gases. With efforts to be environmentally responsible, EE Carbon can reactivate spent Granular Activated Carbon (GAC) through thermal oxidation to make “react” PAC.</p>
<p className='text-justify md:text-xl md:leading-[36.7px] max-sm:leading-[14.68px] font-normal max-sm:text-[8px] montserrat'>
EE Carbon backs its products with comprehensive analytical support including feasibility studies and cost evaluations, together with complete system design, service, and troubleshooting. Customers get the expertise of an industry expert in powdered activated carbon backed by a commitment to service one can trust.
            </p>
        </div>
      </section>
      <Enquiry/>
    </div>
  )
}

export default Product2
