'use client';
import React from 'react';
import ban from '../../images/home/homepage.png';
import aboutus from '../../images/home/EEC.JPG'
import product1 from '../../images/product1.png'
import product2 from '../../images/product2.png'
import product3 from '../../images/product3.png'
import banner from '../../images/contact.jpeg';
import Image from 'next/image';
import arr from '../../images/arr.png';
import Link from 'next/link';
import Quote from './Quote';

const Homepage = () => {

    const products = [
        {
          id: 1,
          image: product1,
          title: 'Granular Activated Carbon (GAC)',
          description: 'Granular Carbon is used for filtration and precious metal recovery',
          path:'/product/product1',
        },
        // Add more products as needed
        {
          id: 2,
          image: product2, // Replace with actual image path
          title: 'Powder Activated Carbon (PAC)',
          description: 'Powder Carbon is mainly used for liquid application.',
          path:'/product/product2'
        },{
          id: 3,
          image: product3, // Replace with actual image path
          title: 'Pelletized Activated Carbon (PAC)',
          description: 'Pelletized Carbon used for  air and water purification.',
          path:'/product/product1'
        },
     
      ];
  return (
    <div className="">
      {/* Banner */}
      <section className="max-sm:h-[24.5rem] md:h-[50rem] relative">
        <div><Image  className='absolute w-full max-sm:h-[24.5rem] md:h-[50rem]  -top-24 -z-10' src={ban} alt='banner'/>
        <div style={{background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 108.28%);"}} className='z-0 w-full max-sm:h-[24.5rem] md:h-[50rem] absolute opacity-90 -top-24'></div>
        <Link href={'/contact'} className='  absolute right-1 -top-1 text-center bg-black montserrat text-[12px] leading-[14.68px] hidden max-sm:flex justify-center bg-opacity-70 items-center   w-[100px] h-[30px] text-white'>Get a Quote&gt;</Link>

        </div>
        <div className="lg:w-[993px] relative -bottom-12 h-[441px] max-sm:w-[17.5rem] max-sm:h-[8.8rem] max-sm:px-3  md:py-10 px-12 max-sm:m-[1rem] sm:m-[4rem] rounded-[24px] bg-black bg-opacity-[50%] text-white">
          <h1 className="max-sm:w-[231px] max-sm:pr-10 max-sm:pt-2 md:leading-tight  lg:leading-[80.66px] text-[#D1D1D1] lg:mb-[20px] max-sm:text-[12px]  max-sm:leading-[17.28px]  poppins font-[600] md:text-5xl lg:text-[56px] ">Pioneering Sustainable Activated Carbon Solutions</h1>
          <p  className="max-sm:text-[10px] max-sm:pt-1 max-sm:leading-[18.35px] text-justify md:leading-10 lg:leading-[44.04px] text-[24px] montserrat font-[400]">
            Discover high-quality, eco-friendly activated carbon products crafted for a sustainable future. 
            Join us in making a positive impact.
          </p>
          <button className="w-[316px] h-[67px] max-sm:m-2 max-sm:h-[20px] max-sm:w-[101px] max-sm:text-[10px] mt-7 rounded-[0.5rem]  border-2 border-white montserrat font-[400] text-[2rem]">Get Started</button>
        </div>
      </section>

      {/* About Section */}
      <section className="">
       

        <div className="   md:px-20 lg:px-[10 %]  justify-items-center px-2">
          <div  className='justify-items-start w-full pb-5'>
            <h2 style={{lineHeight:'51.85px'}} className="poppins font-[400] text-[36px] ">Welcome To EstellaEcoCarbon</h2>
          <h3 style={{lineHeight:'54.73px'}} className='poppins font-[600] text-[38px]'>About Us</h3>
          </div>
          <div className='lg:flex justify-center items-center'>
            <div className=" ">
          
            <Image 
              src={aboutus} 
              alt="Factory Image" 
              className="lg:w-[550px]"
            />
          </div>

          <div className="lg:w-[60%] sm:pt-5 md:pt-10 lg:pl-12">
            
            <p style={{lineHeight:'36px.7'}} className=' text-justify montserrat font-[400] text-[1.25rem]'>
            EstellaEcoCarbon is your trusted partner in the manufacturing of high-quality activated carbon. Specializing in sustainable and efficient solutions, we serve various industries including water treatment, air purification, and food processing. Our products are derived from eco-friendly sources like coconut shells and wood, ensuring that our environmental footprint remains minimal while delivering maximum performance.

            </p>
            <div className='w-full h-[1px] bg-black my-3'/>

            <h4 style={{lineHeight:'3.24rem'}} className='text-left poppins lg:pt-3 font-[400] text-[2.25rem]'>Industry Solutions</h4>
            <p style={{lineHeight:'1.8rem'}} className='text-left montserrat font-[400] pb-8 text-[1.25rem]'>Activated Carbon Is A Crucial Ingredient Used In All Sectors Industries</p>

            <h4 style={{lineHeight:'3.24rem'}} className='text-left poppins font-[400] text-[2.25rem]'>Quality Standards</h4>
            <p style={{lineHeight:'1.8rem'}} className='text-left montserrat font-[400] text-[1.25rem]'>EE Carbon Strives To Retain Customers By Providing Quality Products Consistently.</p>

            <Link style={{lineHeight:"1.4rem"}} href="about" className="underline poppins font-[600] text-[16px] py-8 flex"><h1>Learn More</h1> <span  className='h-13 '><Image width={10} height={10} src={arr} alt='arrow'/></span></Link>
          </div>
          </div>
          
        </div>
      </section>
      <div className='pt-10'><Quote/></div>
     
      
   

   <section>
   <div className='md:p-10 '>
        <h1 className='text-center  text-3xl font-semibold'>Our Products</h1>
        <div className='sm:flex justify-center'>
        {products.map(product => (
          <div key={product.id} className='md:w-[380px] md:h-[350px] rounded-xl border-2 border-[--product] overflow-hidden m-4'>
            <Image src={product.image} alt={product.title} className='w-full h-auto object-cover' />
            <div className='bg-[--product] p-5 h-full text-white'>
              <h1 className='text-xl pb-1'>{product.title}</h1>
              <p>{product.description}</p>
              <Link className='flex justify-end' href={product.path}><h1 className='underline'>Read More</h1>
              {/* <Image className='-my-1' width={6} height={6} src={rightarrow} alt='' /> */}
              </Link>
              
            </div>
          </div>
        ))}
        </div>
</div>
   </section>
   <section>
   <div className='max-sm:p-0 p-10'>
      <h1 className='p-5 text-4xl font-semibold text-center'>Applications</h1>
      <div className='max-sm:px-2 md:px-2 lg:px-20 grid max-sm:grid-cols-1 grid-cols-2'>
        <div className='md:px-10 '>
            <div className='flex py-3 border-b-2 border-black justify-between'>
                <h1 className='text-[23px]'>Water Treatement</h1>
                <div className='flex justify-end items-center'>
                <Link href="/application"><h1 className='pr-1 text-[14px] font-semibold underline'>Read More</h1></Link>
                {/* <Image className='-my-01' width={6} height={6} src={rightarrow} alt='arrow' /> */}
              </div>
              </div>
            <div className='flex py-3 border-b-2 border-black justify-between'>
                <h1 className='text-[23px]'>Air / Gas Treatement</h1> <div className='flex justify-end'>
                <Link href="/application"><h1 className='pr-1 text-[14px] font-semibold underline'>Read More</h1></Link>
                {/* <Image className='-my-1' width={6} height={6} src={rightarrow} alt='arrow' /> */}
              </div></div>
            <div className='flex py-3 border-b-2 border-black justify-between'>
              <h1 className='text-[23px]'>Oil And Gas</h1><div className='flex justify-end'>
                <h1 className='pr-1 text-sm font-semibold underline'>Read More</h1>
                {/* <Image className='-my-1' width={6} height={6} src={rightarrow} alt='arrow' /> */}
              </div></div>
              <div className='flex py-3 border-b-2 border-black justify-between'><h1 className='text-[23px]'>Home Water Filters</h1><div className='flex justify-end'>
              <Link href="/application"><h1 className='pr-1 text-[14px] font-semibold underline'>Read More</h1></Link>
                {/* <Image className='-my-1' width={6} height={6} src={rightarrow} alt='arrow' /> */}
              </div>
              </div>
              <div className='flex py-3 border-b-2 border-black justify-between'><h1 className='text-[23px]'>Food / Beverage</h1><div className='flex justify-end'>
              <Link href="/application"><h1 className='pr-1 text-[14px] font-semibold underline'>Read More</h1></Link>
                {/* <Image className='-my-1' width={6} height={6} src={rightarrow} alt='arrow' /> */}
              </div></div>
              <div className='flex py-3 border-b-2 border-black justify-between'><h1 className='text-[23px]'>Personal Protection</h1><div className='flex justify-end'>
              <Link href="/application"><h1 className='pr-1 text-[14px] font-semibold underline'>Read More</h1></Link>
                {/* <Image className='-my-1' width={6} height={6} src={rightarrow} alt='arrow' /> */}
              </div></div>
        </div>
        <div className='md:px-10'> 
        <div className='flex py-3 border-b-2 border-black justify-between'>
                <h1 className='text-[23px]'>Water Treatement</h1>
                <div className='flex justify-end'>
                <Link href="/application"><h1 className='pr-1 text-[14px] font-semibold underline'>Read More</h1></Link>
                {/* <Image className='-my-1' width={6} height={6} src={rightarrow} alt='arrow' /> */}
              </div>
              </div>
              <div className='flex py-3 border-b-2 border-black justify-between'>
                <h1 className='text-[23px]'>Fule Gass / Mercury</h1><div className='flex justify-end'>
                <Link href="/application"><h1 className='pr-1 text-[14px] font-semibold underline'>Read More</h1></Link>
                {/* <Image className='-my-1' width={6} height={6} src={rightarrow} alt='arrow' /> */}
              </div></div>
              <div className='flex py-3 border-b-2 border-black justify-between'><h1 className='text-[23px]'>Pharmaceutical / Medical</h1><div className='flex justify-end'>
              <Link href="/application"><h1 className='pr-1 text-[14px] font-semibold underline'>Read More</h1></Link>
                {/* <Image className='-my-1' width={6} height={6} src={rightarrow} alt='arrow' /> */}
              </div></div>
              <div className='flex py-3 border-b-2 border-black justify-between'><h1 className='text-[23px]'>Gold Mining</h1><div className='flex justify-end'>
              <Link href="/application"><h1 className='pr-1 text-[14px] font-semibold underline'>Read More</h1></Link>
                {/* <Image className='-my-1' width={6} height={6} src={rightarrow} alt='arrow' /> */}
              </div></div>
              <div className='flex py-3 border-b-2 border-black justify-between'><h1 className='text-[23px]'>Tabacco</h1><div className='flex justify-end'>
              <Link href="/application"><h1 className='pr-1 text-[14px] font-semibold underline'>Read More</h1></Link>
                {/* <Image className='-my-1' width={6} height={6} src={rightarrow} alt='arrow' /> */}
              </div></div>
              <div className='flex py-3 border-b-2 border-black justify-between'><h1 className='text-[23px]'>Automotive</h1><div className='flex justify-end'>
              <Link href="/application"><h1 className='pr-1 text-[14px] font-semibold underline'>Read More</h1></Link>
                {/* <Image className='-my-1' width={6} height={6} src={rightarrow} alt='arrow' /> */}
              </div></div>
             </div>

      </div>
    </div>
    
   </section>
   <div className='h-[649px] mt-3 max-sm:h-[400px] bg-black relative overflow-hidden'>
  <Image className='absolute opacity-[24%] z-0 inset-0 ' src={banner} alt='banner' layout='fill' objectFit='cover' />
  <div className='absolute z-10  flex justify-center w-full h-full'>
    <h1 className='text-[65px] max-sm:text-[1.25rem] max-sm:text-center max-sm:py-5 py-20 poppins font-[300] gradient-text'>Why Choose EstellaEcoCarbon?</h1>
  </div>
  <div className='grid max-sm:pt-6 max-sm:gap-y-7 max-sm:grid-cols-1 grid-cols-2 md:gap-y-28  absolute max-sm:top-10 bottom-52 z-10  text-white  md:px-10 lg:px-20  justify-items-center justify-center w-full h-52'>
    {/* part 1 */}
    <div className='flex max-sm:justify-center  max-sm:w-[75vw] lg:w-[33.125rem] max-sm:h-[50px] md:w-[400px]  md:h-[150px] lg:h-[109px]'>
      <div className='text-[90px] max-sm:text-[2.5rem] items-center poppins font-bold text-[--text-contact] mr-2'>01</div>
    
    <div className='text-justify max-sm:pt-3  text-sm pt-[23px]'>
      
      <h1  className='max-sm:leading-[14.4px] max-sm:text-[10px] leading-[34.57px] poppins font-[400] text-[24px]'>Quality Assurance:</h1>
      <p  className='max-sm:leading-[11.5px] max-sm:text-[8px] leading-[1.05rem] text-[--text-contact] text-justify text-[16px]'>Our commitment to excellence ensures that every product meets rigorous quality standards.</p>
    </div>
    </div>
{/* part 2 */}

<div className='flex max-sm:justify-center  max-sm:w-[75vw] lg:w-[33.125rem] max-sm:h-[50px] md:w-[400px]  md:h-[150px] lg:h-[109px]'>
      <div className='text-[90px] max-sm:text-[2.5rem] items-center poppins font-bold text-[--text-contact] mr-2'>02</div>
    
    <div className='text-justify max-sm:pt-3  text-sm pt-[23px]'>
      
      <h1  className='max-sm:leading-[14.4px] max-sm:text-[10px] leading-[34.57px] poppins font-[400] text-[24px]'>Sustainability:</h1>
      <p  className='max-sm:leading-[11.5px] max-sm:text-[8px] leading-[1.05rem] text-[--text-contact] text-justify text-[16px]'>We prioritize environmentally friendly practices throughout our manufacturing processes.</p>
    </div>
    </div>


    {/* part 3 */}

    <div className='flex max-sm:justify-center  max-sm:w-[75vw] lg:w-[33.125rem] max-sm:h-[50px] md:w-[400px]  md:h-[150px] lg:h-[109px]'>
      <div className='text-[90px] max-sm:text-[2.5rem] items-center poppins font-bold text-[--text-contact] mr-2'>03</div>
    
    <div className='text-justify max-sm:pt-3  text-sm pt-[23px]'>
      
      <h1  className='max-sm:leading-[14.4px] max-sm:text-[10px] leading-[34.57px] poppins font-[400] text-[24px]'>Innovation:</h1>
      <p  className='max-sm:leading-[11.5px] max-sm:text-[8px] leading-[1.05rem] text-[--text-contact] text-justify text-[16px]'>Continuously advancing our technologies to provide the most effective purification solutions.</p>
    </div>
    </div>
    
    


    {/* part 4 */}
    <div className='flex max-sm:justify-center  max-sm:w-[75vw] lg:w-[33.125rem] max-sm:h-[50px] md:w-[400px]  md:h-[150px] lg:h-[109px]'>
      <div className='text-[90px] max-sm:text-[2.5rem] items-center poppins font-bold text-[--text-contact] mr-2'>04</div>
    
    <div className='text-justify max-sm:pt-3  text-sm pt-[23px]'>
      
      <h1  className='max-sm:leading-[14.4px] max-sm:text-[10px] leading-[34.57px] poppins font-[400] text-[24px]'>Innovation:</h1>
      <p  className='max-sm:leading-[11.5px] max-sm:text-[8px] leading-[1.05rem] text-[--text-contact] text-justify text-[16px]'>Our dedicated team of experts is always available to guide you in choosing the right product for your needs.</p>
    </div>
    </div>

  </div>
</div>
    </div>
  );
};

export default Homepage;
