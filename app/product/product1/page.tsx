import React from 'react'
import './Product1.css'
import Image from 'next/image';
import img1 from '../../images/product1/img1.svg';
import img2 from '../../images/product1/img2.svg';
import img3 from '../../images/product1/img3.svg';
import ban from '../../images/pro1.png';
import Enquiry from '@/app/components/product/Enquiry';
import Link from 'next/link';
function Product1() {
  return (
    <div>
     <section className="max-sm:h-[24.5rem] md:h-[50rem] relative">
        <div><Image  className='absolute w-full max-sm:h-[24.5rem] md:h-[50rem]  -top-24 -z-10' src={ban} alt='banner'/>
        <div style={{background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 108.28%);"}} className='z-0 w-full max-sm:h-[24.5rem] md:h-[50rem] absolute opacity-90 -top-24'></div>
        <Link href={'/contact'} className='  absolute right-1 -top-1 text-center bg-black montserrat text-[12px] leading-[14.68px] hidden max-sm:flex justify-center bg-opacity-70 items-center   w-[100px] h-[30px] text-white'>Get a Quote&gt;</Link>

        
        </div>
        <div className="lg:w-[993px] relative -bottom-12 h-[441px] max-sm:w-[17.5rem] max-sm:h-[8.8rem] max-sm:px-3  md:py-10 px-12 max-sm:m-[1rem] sm:m-[4rem] rounded-[24px] bg-black bg-opacity-[50%] text-white">
          <h1 className='max-sm:pt-4 max-sm:leading-[17.28px] leading-[3.6rem] max-sm:text-xs text-[2.5rem] poppins md:text-5xl font-[600] md:pb-4'>Our Products</h1>
          <h1 className=" max-sm:py-1 md:leading-tight lg:leading-[80.66px] text-[#D1D1D1] lg:mb-[20px] max-sm:text-[12px] max-sm:leading-[17.28px] md:w-[25rem] lg:w-[60rem]  poppins font-[500] md:text-5xl lg:text-[56px] ">GRANULAR ACTIVATED CARBON</h1>
          <p  className=" block max-sm:hidden md:leading-10 lg:leading-[44.04px] text-[24px] montserrat font-[400]">
          Carbons’ granular Coconut Shell Activated Carbon products are used across a wide range of applications. Various mesh sizes and activity levels are employed in both liquid and gas applications. EE Carbon has extensive Research and Development facilities.
          </p>
          <p className='max-sm:block hidden leading-[18.35px] montserrat font-normal max-sm:text-[10px] '>Carbons’ granular Coconut Shell Activated Carbon products are used across a wide range of applications. </p>
          {/* <button className="w-[316px] h-[67px] max-sm:m-2 max-sm:h-[20px] max-sm:w-[101px] max-sm:text-[10px] mt-7 rounded-[0.5rem]  border-2 border-white montserrat font-[400] text-[2rem]">Get Started</button> */}
        </div>
      </section>
      <section className=' max-sm:-mt-8 px-2 md:px-40'>
        <div className='md:py-10'>
          <Image src={img1} alt=''/>
          <h1 className='text-center font-semibold poppin  max-sm:leading-[17.28px] max-sm:text-[12px]  md:text-[2.5rem] md:leading-[68.4px] max-sm:py-2 md:px-40 md:py-5'>EEC Granular Activated Carbon (GAC) is made from high quality raw material, such as coconut shell.</h1>
          <p className='text-justify md:text-xl md:leading-[36.7px] max-sm:leading-[14.68px] font-normal max-sm:text-[8px] montserrat'>The adsorptive capacity of granular activated carbon makes it ideal for removing a variety of contaminants from water, air, liquids, and gases to improve taste, odor, and color. Typical GAC applications are municipal and environmental water treatment, waste gas treatment, mercury removal in industrial gasses, food and beverage, metal recovery, and even medicinal use. Additionally, various particle sizes of GAC is optimal for use in vapor and liquid adsorption applications. Our coconut shell based activated carbon has a higher percentage of micro-pores, which makes it highly effective for the filtration of small organics structures, recovery of precious metals and reduction of disinfection byproducts (DBPs) in potable water.</p>
        </div>
        <div className='py-10'>
          <Image src={img2} alt=''/>
          <h1 className='text-center font-semibold poppin  max-sm:leading-[17.28px] max-sm:text-[12px]  md:text-[2.5rem] md:leading-[68.4px] max-sm:py-2 md:px-40 md:py-5'>
          Features & Benefits:
            </h1>
          <p className='text-justify md:text-xl md:leading-[36.7px] max-sm:leading-[14.68px] font-normal max-sm:text-[8px] montserrat'>
          The adsorptive capacity of granular activated carbon (GAC) makes it ideal for removing a variety of contaminants from water, air, liquids and gases. GAC is also an environmentally responsible product that can be reactivated through thermal oxidation and used multiple times for the same application.
By varying manufacturing conditions, internal pore structures are created by imparting unique adsorption properties specific to each product type. The choice of product for a specific application will vary due to differing impurities and proprietary process conditions.

            </p>
            <h1 className='text-justify md:text-xl md:leading-[36.7px] max-sm:leading-[14.68px] font-normal max-sm:text-[8px] montserrat'>That means whatever is the granular activated carbon need, CG Carbon has a product engineered specifically to give the best solution.</h1>
            <div className='flex justify-between py-5 max-sm:px-3 md:px-10 text-justify md:text-xl md:leading-[36.7px] max-sm:leading-[14.68px] font-normal max-sm:text-[8px] montserrat'>
            <ul className='list-disc '>
              <li>Municipal Water Treatment</li>
              <li>Enviormental Water Treatment</li>
              <li>Enviormental Air Treatment</li>
            </ul>
            <ul className='list-disc '>
              <li>Industrial Process</li>
              <li>Personal Protection Equipment</li>
              <li>Food and Beverage</li>
            </ul>
            <ul className='list-disc max-sm:hidden'>
              <li>Mental Recovery</li>
              <li>Medical</li>
              <li>Residential Point of Use/Entry</li>
            </ul>
            </div>
           
        </div>
        <div className='max-sm:pb-10 md:py-10'>
          <Image src={img3} alt=''/>
          <h1 className='text-center font-semibold poppin  max-sm:leading-[17.28px] max-sm:text-[12px]  md:text-[2.5rem] md:leading-[68.4px] max-sm:py-2 md:px-40 md:py-5'>
          Packaging
            </h1>
          <p className=' text-justify md:text-xl md:leading-[36.7px] max-sm:leading-[14.68px] font-normal max-sm:text-[8px] montserrat'>
          Our packages are designed to maintain the product quality and prevent degradation under normal storage and handling conditions. Special packing as per customer requirement is also available on request.
            </p>
        </div>
      </section>
      <Enquiry/>
    </div>
  )
}

export default Product1
