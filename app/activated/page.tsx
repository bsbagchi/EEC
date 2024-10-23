import React from 'react'
import './Activated.css'
import img1 from '../images/activation/img1.svg';
import img2 from '../images/activation/img2.svg';
import img3 from '../images/activation/img3.svg';
import ban from '../images/activted.png';
import Image from 'next/image';
import Enquiry from '../components/product/Enquiry';
function Activated() {
  return (
    <div>
    <section className="max-sm:h-[24.5rem] md:h-[50rem] relative">
        <div><Image  className='absolute w-full max-sm:h-[24.5rem] md:h-[50rem]  -top-24 -z-10' src={ban} alt='banner'/>
        <div style={{background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 108.28%);"}} className='z-0 w-full max-sm:h-[24.5rem] md:h-[50rem] absolute opacity-90 -top-24'></div>
        </div>
        <div className="lg:w-[993px] relative -bottom-12 h-[441px] max-sm:w-[17.5rem] max-sm:h-[8.8rem] max-sm:px-3  md:py-10 px-12 max-sm:m-[1rem] sm:m-[4rem] rounded-[24px] bg-black bg-opacity-[50%] text-white">
          <h1 className='max-sm:pt-4  leading-[3.6rem] max-sm:text-[12px] max-sm:leading-[17px] text-[2.5rem] poppins md:text-5xl font-[600] md:pb-4'>Activated Carbon</h1>
          <h1 className="max-sm:pt-2 md:leading-tight lg:leading-[80.66px] text-white lg:mb-[20px] max-sm:text-[12px] max-sm:leading-[17px] md:w-[25rem] lg:w-[50rem]  poppins font-[600] md:text-5xl lg:text-[56px] ">What is Activated Carbon?</h1>
          <p  className="max-sm:hidden block md:leading-10 lg:leading-[44.04px] text-[24px] montserrat font-[400]">
          Activated carbon has an enormous surface area relative to its size and a sub microscopic porous network. Through the process of adsorption, it attracts and bonds with a vast array of organic and inorganic compounds along its surface, creating a sort of film. 
          </p>
          <p className='hidden py-2 max-sm:block text-[10px] leading-[18.35px] font-normal montserrat w-[231px]'>Activated carbon has an enormous surface area relative to its size and a sub microscopic porous network. </p>
          {/* <button className="w-[316px] h-[67px] max-sm:m-2 max-sm:h-[20px] max-sm:w-[101px] max-sm:text-[10px] mt-7 rounded-[0.5rem]  border-2 border-white montserrat font-[400] text-[2rem]">Get Started</button> */}
        </div>
      </section>
      <section className='max-sm:-mt-8 px-2 md:px-40 '>
        <div className='md:py-10'>
          <Image src={img1} alt=''/>
          <h1 className='text-center font-semibold poppin  max-sm:leading-[17.28px] max-sm:text-[12px]  md:text-[2.5rem] md:leading-[68.4px] max-sm:py-2 md:px-40 md:py-5'>
          WHAT IS COCONUT SHELL ACTIVATED CARBON?
            </h1>
          <p className='text-justify md:text-xl md:leading-[36.7px] max-sm:leading-[14.68px] font-normal max-sm:text-[8px] montserrat'>The raw material used for the manufacture of Activated Carbon is coconut shell. It is a steam-activated material, so it does not contain chemical agents that can contaminate or react with the medium where it is used. They are characterized by having a large amount of micro to mesopores (5nm-50 nm) suitable for the removal of small molecules; contains a neutral PH, can be manufactured in any particle size.</p>
        </div>
        <div className='py-10'>
          <Image src={img2} alt=''/>
          <h1 className='text-center font-semibold poppin  max-sm:leading-[17.28px] max-sm:text-[12px]  md:text-[2.5rem] md:leading-[68.4px] max-sm:py-2 md:px-40 md:py-5'>
          Why Choose Coconut Shell Activated Carbon?
            </h1>
          <p className='text-justify md:text-xl md:leading-[36.7px] max-sm:leading-[14.68px] font-normal max-sm:text-[8px] montserrat'>
          Shell as raw material creates a porous network with uniquely sized pores. Activated carbon made from coconut shell is ideal for water filtration, as its tiny micropores match the size of most water-based contaminants.</p>
<p className='text-justify md:text-xl md:leading-[36.7px] max-sm:leading-[14.68px] font-normal max-sm:text-[8px] montserrat'>In addition, coconuts are a renewable resource. A coconut tree can live for 100 years, and it will continue to produce coconuts until approximately 70 years of age. A mature coconut tree can produce up to 200 coconuts per year, and it is possible to get three or even four harvests per year from each tree.
</p>
            
            
           
        </div>
        <div className='py-10'>
          <Image src={img3} alt=''/>
          <h1 className='text-center font-semibold poppin  max-sm:leading-[17.28px] max-sm:text-[12px]  md:text-[2.5rem] md:leading-[68.4px] max-sm:py-2 md:px-40 md:py-5'>
          Why Choose Coconut Shell Activated Carbon?
            </h1>
          <p className='text-justify md:text-xl md:leading-[36.7px] max-sm:leading-[14.68px] font-normal max-sm:text-[8px] montserrat'>
          Shell as raw material creates a porous network with uniquely sized pores. Activated carbon made from coconut shell is ideal for water filtration, as its tiny micropores match the size of most water-based contaminants.</p>
<p className='text-justify md:text-xl md:leading-[36.7px] max-sm:leading-[14.68px] font-normal max-sm:text-[8px] montserrat'>In addition, coconuts are a renewable resource. A coconut tree can live for 100 years, and it will continue to produce coconuts until approximately 70 years of age. A mature coconut tree can produce up to 200 coconuts per year, and it is possible to get three or even four harvests per year from each tree.
            </p>
        </div>
      </section>
      <Enquiry/>
    </div>
  )
}

export default Activated
