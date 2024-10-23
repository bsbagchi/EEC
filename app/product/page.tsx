import React from 'react'
import './Product.css'
import product1 from '../images/product1.png';
import product2 from '../images/product2.png';
import product3 from '../images/product3.png';
import ban from '../images/product.png';
import Image from 'next/image';
import Quote from '../components/Home/Quote';
import Services from '../components/services/Services';
import Link from 'next/link';
import Enquiry from '../components/product/Enquiry';

function Product() {
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
    <div>
     <section className="max-sm:h-[24.5rem] md:h-[50rem] relative">
        <div><Image  className='absolute w-full max-sm:h-[24.5rem] md:h-[50rem]  -top-24 -z-10' src={ban} alt='banner'/>
        <div style={{background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 108.28%);"}} className='z-0 w-full max-sm:h-[24.5rem] md:h-[50rem] absolute opacity-90 -top-24'></div>
        <Link href={'/contact'} className='  absolute right-1 -top-1 text-center bg-black montserrat text-[8px] leading-[14.68px] hidden max-sm:flex justify-center bg-opacity-70 items-center   w-[67px] h-[18px] text-white'>Get a Quote&gt;</Link>
        </div>
        <div className="lg:w-[993px] relative -bottom-12 h-[441px] max-sm:w-[17.5rem] max-sm:h-[8.8rem] max-sm:px-3  md:py-10 px-12 max-sm:m-[1rem] sm:m-[4rem] rounded-[24px] bg-black bg-opacity-[50%] text-white">
          <h1 className='max-sm:pt-4  leading-[3.6rem] max-sm:text-[12px] max-sm:leading-[17.28px]  text-[2.5rem] poppins md:text-5xl font-[600] md:pb-4'>Our Products</h1>
          <h1 className="max-sm:hidden block md:leading-tight lg:leading-[80.66px] text-[#D1D1D1] lg:mb-[20px]  md:w-[25rem] lg:w-[30rem]  poppins font-[600] md:text-5xl lg:text-[56px] ">At EstellaEcoCarbon</h1>
          <h1 className="max-sm:block hidden w-[213px] max-sm:py-2 md:leading-tight lg:leading-[80.66px] text-[#D1D1D1] lg:mb-[20px] max-sm:text-[12px] max-sm:leading-[17.28px]   poppins font-[500]  ">Welcome to EstellaEcoCarbon</h1>
          <p  className="max-sm:hidden block md:leading-10 lg:leading-[44.04px] text-[24px] montserrat font-[400]">
          We offer a wide array of activated carbon products tailored to meet the specific needs of our clients. Whether it&apos;s purifying water, improving air quality, or ensuring the safety of food and beverages, our products deliver exceptional performance and reliability.
          </p>
          <p className='hidden max-sm:block  leading-[18.35px] text-[10px] montserrat font-[400]'>We offer a wide array of activated carbon products tailored to meet the specific needs of our clients. </p>
          
          {/* <button className="w-[316px] h-[67px] max-sm:m-2 max-sm:h-[20px] max-sm:w-[101px] max-sm:text-[10px] mt-7 rounded-[0.5rem]  border-2 border-white montserrat font-[400] text-[2rem]">Get Started</button> */}
        </div>
      </section>

      <section>
   <div className='md:py-10 md:px-2 lg:p-10 '>
        <h1 className='text-center  text-2xl font-[500] leading-10 poppins text-[#5F5F5F]'>Our Products</h1>
        <h1 className='text-center  text-3xl font-semibold'>Activated Carbon Products</h1>
        <div className='sm:flex pt-4 justify-center'>
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

   <Quote/>
        <Services/>
<Enquiry/>
    </div>
  )
}

export default Product
