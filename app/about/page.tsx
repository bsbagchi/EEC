import React from 'react'
import vis from '../images/vis.png';
import miss from '../images/miss.png'
import gp from '../images/gp.png'
import first from '../images/first.png'
import secound from '../images/secound.png'
import th from '../images/th.png'
import fo from '../images/fo.png'
import ban from '../images/about/about.png';
import Image from 'next/image'
import Quote from '../components/Home/Quote';


function About() {
  return (
    <div> 
      
      <section className="max-sm:h-[24.5rem] md:h-[50rem] relative">
        <div><Image  className='absolute w-full max-sm:h-[24.5rem] md:h-[50rem]  -top-24 -z-10' src={ban} alt='banner'/>
        <div style={{background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 108.28%);"}} className='z-0 w-full max-sm:h-[24.5rem] md:h-[50rem] absolute opacity-90 -top-24'></div>
        </div>
        <div className="lg:w-[993px] relative -bottom-12 h-[441px] max-sm:w-[17.5rem] max-sm:h-[8.8rem] max-sm:px-3  md:py-10 px-12 max-sm:m-[1rem] sm:m-[4rem] rounded-[24px] bg-black bg-opacity-[50%] text-white">
          <h1 className='max-sm:pt-8 leading-[3.6rem] max-sm:text-xs text-[2.5rem] poppins md:pb-3 md:text-5xl font-[600]'>About Us</h1>
          <h1 className=" md:leading-tight lg:leading-[80.66px] text-white lg:mb-[20px] max-sm:text-xs md:w-[25rem] lg:w-[30rem]  poppins font-[600] md:text-5xl lg:text-[56px] ">Welcome to EstellaEcoCarbon</h1>
          <p  className="max-sm:text-[10px] md:leading-10 lg:leading-[44.04px] text-[24px] montserrat font-[400]">
          We are committed to delivering high-quality, sustainable activated carbon solutions to a diverse range of industries.
          </p>
          {/* <button className="w-[316px] h-[67px] max-sm:m-2 max-sm:h-[20px] max-sm:w-[101px] max-sm:text-[10px] mt-7 rounded-[0.5rem]  border-2 border-white montserrat font-[400] text-[2rem]">Get Started</button> */}
        </div>
      </section>



      <section>
      <div className="md:px-40 Montserrat px-2">
      {/* Vision Section */}
      <div className="vision-section flex max-sm:-mt-20 gap-[20px] md:gap-[40px]">
        <Image  src={vis} alt="Vision" className="max-sm:w-[158px] w-[528px] md:h-[398px]" />
        <div className="text-justify">
          <h2 className='max-sm:text-[12px] text-[40px] md:leading-[57.63px] mb-[10px]'>Vision</h2>
          <p className='max-sm:text-[8px] leading-[1.5rem] text-[#555] md:leading-[44.4px] md:text-[24px]'>
            To be the global leader in sustainable activated carbon solutions, 
            revolutionizing industries and promoting a healthier planet.
          </p>
        </div>
      </div>
      
      {/* Mission Section */}
      <div className="flex mission-section max-sm:mt-5 gap-[20px] md:gap-[40px]">
        <div className=" text-right md:p-8">
          <h2 className='max-sm:text-[12px] text-[40px] md:leading-[57.63px] mb-[10px]'>Mission</h2>
          <p className='max-sm:text-[8px] leading-[1.5rem] text-[#555] md:leading-[44.4px] md:text-[24px]'>
            To deliver sustainable, high-performance activated carbon solutions 
            that enhance the quality of life and contribute to a cleaner, healthier world.
          </p>
         
        </div>
        <Image src={miss} alt="Mission" className="max-sm:w-[158px] w-[528px] md:h-[398px]" />
      </div>
    {/* Additional Section */}
    <div className="flex my-10 gap-[20px] items-center md:gap-[40px]">
    <div className="text-justify md:p-8 ">
        <p className="max-sm:text-[8px] block max-sm:hidden md:pr-10 leading-[1.5rem] text-[#555] md:leading-[44.4px] md:text-[24px]">
        Founded on the principles of innovation and sustainability, EstellaEcoCarbon has grown to become a leader in the activated carbon sector. Our state-of-the-art manufacturing facilities and stringent quality control processes ensure that we provide products that meet the highest industry standards.
        Founded on the principles of innovation and sustainability, EstellaEcoCarbon has emerged as a leading force in the activated carbon industry. Our unwavering commitment to excellence has enabled us to develop a comprehensive range of products that cater to diverse applications across various sectors.
        </p>
       <p className="max-sm:text-[8px] max-sm:block hidden  md:pr-10 leading-[1.5rem] text-[#555] md:leading-[44.4px] md:text-[24px]">
       Founded on the principles of innovation and sustainability, EstellaEcoCarbon has grown to become a leader in the activated carbon sector. Our state-of-the-art manufacturing facilities and stringent quality control processes ensure that we provide products that meet the highest industry standards.
       applications across various sectors.
       </p>
        </div>
          <Image src={gp} alt="Extra 1" className="max-sm:w-[158px] max-sm:h-auto w-[528px] md:h-[398px]" />
          {/* <Image src={extraImage2} alt="Extra 2" className="extra-image" /> */}
        
      </div>
      
    </div>



    
      </section>



      <Quote/>
     



     <section >
     <div className='text-center max-sm:justify-items-center py-6 md:p-5' >
      <h1 className='font-[700] max-sm:text-[12px] max-sm:leading-[34px] text-[1.1rem] underline'>CERTIFICATION</h1>
      <h2 className='text-[2rem] max-sm:text-[10px] max-sm:w-[12rem] '>EstellaEcoCarbon LEADING CARBON MANUFACTURERS </h2>
      
      <div className='flex justify-center gap-3 md:gap-10 my-5 items-center' >
        <Image className='max-sm:w-[91px] max-sm:h-auto  md:w-[200px] md:h-[200px]' src={first} alt="Good Quality Product"  />
        <Image className='max-sm:w-[128px] max-sm:h-auto md:w-[300px] md:h-[300px]' src={secound} alt="Premium Quality Product"  />
        <Image className='max-sm:w-[91px] max-sm:h-auto md:w-[200px] md:h-[200px]' src={th} alt="Best Product"  />
      </div>

      <h3 className='text-[3rem] poppins font-[300] max-sm:text-[10px] max-sm:w-[12rem] max-sm:leading-[16px] '>Your Partner in Sustainable Activated Carbon Solutions</h3>
      
     

      <div className='md:mt-10 flex justify-center md:my-[10px] max-sm:px-2 items-center' >
        <Image className='max-sm:w-[5rem] max-sm:h-auto md:w-[300px] md:h-[300px]' src={fo} alt="Trusted Certification"  />
        <p className='w-1/2  montserrat font-[400] px-6  text-justify  max-sm:hidden'   >
     We are deeply committed to environmental stewardship. Our activated carbon is derived from eco-friendly raw materials such as coconut shells and wood, promoting sustainable practices and reducing our carbon footprint. Our manufacturing processes are designed to minimise waste and maximise efficiency.
Innovation is at the heart of EstellaEcoCarbon. We continuously invest in research and development to advance our technologies and improve the efficacy of our products. Our dedicated team of experts works tirelessly to develop cutting-edge solutions that meet the evolving needs of our customers
At EstellaEcoCarbon, we offer a wide array of activated carbon products tailored to meet the specific needs of our clients. Whether it&apos;s purifying water, improving air quality, or ensuring the safety of food and beverages, our products deliver exceptional performance and reliability.
Our customers are at the core of everything we do. We strive to build lasting relationships by providing exceptional customer service and support. Our team of specialists is always ready to assist you in selecting the right activated carbon solutions for your applications.
     </p>
     <p className='w-3/4 montserrat font-[400] text-[8px] text-justify hidden max-sm:block px-2'>Founded on the principles of innovation and sustainability, EstellaEcoCarbon has grown to become a leader in the activated carbon sector. Our state-of-the-art manufacturing facilities and stringent quality control processes ensure that we provide products that meet the highest industry standards.
     </p>
      </div>
    </div>
     </section>
    </div>
  )
}

export default About
