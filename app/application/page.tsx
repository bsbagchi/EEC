import React from 'react';
import './Application.css';
import Image from 'next/image';
import ban from '../images/application.png'
import one from '../images/application/Frame 1.png';
import two from '../images/application/Frame 2.png';
import three from '../images/application/Frame 3.png';
import four from '../images/application/Frame 6.png';
import five from '../images/application/Frame 5.png';
import six from '../images/application/Frame 6.png';
import seven from '../images/application/Frame 7.png';
import eight from '../images/application/Frame 8.png';
import nine from '../images/application/Frame 9.png';
import ten from '../images/application/Frame 10.png';
import eleven from '../images/application/Frame 11.png';
import twelev from '../images/application/Frame 12.png';
import Enquiry from '../components/product/Enquiry';

function Application() {

  return (
    <div>
      <section className="max-sm:h-[24.5rem] md:h-[50rem] relative">
        <div><Image  className='absolute w-full max-sm:h-[24.5rem] md:h-[50rem]  -top-24 -z-10' src={ban} alt='banner'/>
        <div style={{background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 108.28%);"}} className='z-0 w-full max-sm:h-[24.5rem] md:h-[50rem] absolute opacity-90 -top-24'></div>
        </div>
        <div className="lg:w-[993px] relative -bottom-12 h-[441px] max-sm:w-[17.5rem] max-sm:h-[8.8rem] max-sm:px-3  md:py-10 px-12 max-sm:m-[1rem] sm:m-[4rem] rounded-[24px] bg-black bg-opacity-[50%] text-white">
          <h1 className='max-sm:pt-2  leading-[3.6rem] max-sm:text-xs text-[2.5rem] poppins md:text-3xl font-[600] md:pb-4'>Our Applications</h1>
          <h1 className=" md:leading-tight lg:leading-[80.66px] text-white lg:mb-[20px] max-sm:text-xs md:w-[25rem] lg:w-[40rem]  poppins font-[600] md:text-4xl lg:text-[56px] ">At EstellaEcoCarbon</h1>
          <p  className="max-sm:hidden  block  md:leading-10 lg:leading-[44.04px] text-[24px] montserrat font-[400]">
          According to the adsorption characteristics of activated carbon, activated carbon is mainly used to remove pollutants, decolorize, filter and purify liquids and gases in water. It is also used for air purification, waste gas recovery (such as gas benzene recovery in the chemical industry), precious metal recovery and refining (such as gold absorption).
          </p>
          <p className='max-sm:block hidden max-sm:text-[10px]'>
          According to the adsorption characteristics of activated carbon, activated carbon is mainly used to remove pollutants, decolorize, filter and purify liquids and gases in water.
          </p>
          {/* <button className="w-[316px] h-[67px] max-sm:m-2 max-sm:h-[20px] max-sm:w-[101px] max-sm:text-[10px] mt-7 rounded-[0.5rem]  border-2 border-white montserrat font-[400] text-[2rem]">Get Started</button> */}
        </div>
      </section>
      <section className='poppins max-sm:-mt-10'>
        {/* part 1 */}
        <div className='flex max-sm:px-2 md:p-20 '>
            <div className='w-[158px] h-[115px] md:w-[38%] md:h-[400px] relative '>
                <Image className=' '  src={one} alt='' />
                
                </div>
            <div className='w-1/2 md:w-[62%] pl-2 md:h-[560px] md:px-8 text-justify'>
                <h1 className='max-sm:text-[12px] max-sm:leading-[17.28px] font-semibold text-5xl md:p-6'>Water Treatment</h1>
                <p className='text-[24px] max-sm:text-[8px] max-sm:leading-[14.68px] text-justify font-normal'>Most of our planet is covered with water, but most of it requires purification to make it suitable for human consumption. Activated carbon plays a central role in ensuring the clean and drinkable nature of the water we drink. Powder and granular activated carbons remove organic chemicals and reduce toxicity in waste water to ensure safe flow into surface water. It is highly effective in deodorization and treatment of soluble organic chemicals, endocrine disruptors and other pollutants.</p>
            </div>
           
  
        </div>
        {/* horizontal line */}
        <div className=' md:mx-32 m-10 md:mt-10 h-[2px] bg-black'></div> 


        {/* part 2 */}
        <div className='flex max-sm:px-2 md:p-20'>
        <div className='w-1/2 md:w-[62%] pl-2 md:h-[560px] md:px-8 text-justify'>
                <h1 className='max-sm:text-[12px] max-sm:leading-[17.28px] font-semibold text-5xl md:p-6'>Air / Gas Treatment</h1>
                <p className='text-[24px] max-sm:pr-2 max-sm:text-[8px] max-sm:leading-[14.68px] text-justify font-normal'>
                The development of the industry has polluted our atmosphere as disastrous consequences now and in the future. Gas emissions need to be kept under control. Considering the concentration limits of pollutants, good air quality and protection of public health can be achieved. Adsorption technology is based on the ability of activated carbon to transport Volatile Organic Compounds (VOCs). Industries have used activated carbon for many years to improve air quality in a variety of applications.
                    </p>
            </div>
            <div className='w-[158px] h-[115px] md:w-[38%] md:h-[400px] relative'>
                <Image   src={two} alt='' />
                
                </div>
        </div>
         {/* horizontal line */}
         <div className=' md:mx-32 m-10  md:my-10 h-[2px] bg-black'></div> 

       {/* part 3 */}
       <div className='flex max-sm:px-2 md:p-20 '>
            <div className='w-[158px] h-[115px] md:w-[38%] md:h-[400px] relative '>
                <Image className=' '  src={three} alt='' />
                
                </div>
            <div className='w-1/2 md:w-[62%] pl-2 md:h-[560px] md:px-8 text-justify'>
                <h1 className='max-sm:text-[12px] max-sm:leading-[17.28px] font-semibold text-5xl md:p-6'>Oil and Gas</h1>
                <p className='text-[24px] max-sm:text-[8px] max-sm:leading-[14.68px] text-justify font-normal'>Activated Carbon is an excellent choice for the purification of raw materials, intermediates and end products for the oil and gas industry. The removal of unwanted pollutants such as mercury, colors, odors and sulfur compounds allow for consistent production of high-quality natural gas, oil and petrochemical products.</p>
            </div>
           
  
        </div>
        {/* horizontal line */}
        <div className=' md:mx-32 m-10 md:mt-10 h-[2px] bg-black'></div> 


        {/* part 4 */}
        <div className='flex max-sm:px-2 md:p-20'>
        <div className='w-1/2 md:w-[62%] pl-2 md:h-[560px] md:px-8 text-justify'>
                <h1 className='max-sm:text-[12px] max-sm:leading-[17.28px] font-semibold text-5xl md:p-6'>Home Water Filters</h1>
                <p className='text-[24px] max-sm:pr-2 max-sm:text-[8px] max-sm:leading-[14.68px] text-justify font-normal'>
                Activated carbon products; It plays an important role in helping water plants provide clean, safe to drink and drinking water that does not contain unpleasant taste and odor. Our products are used to remove natural and synthetic organic pollutants and suspended solids from surface and groundwater sources, as well as potentially harmful disinfection by-products and residual oxidizing agents that occur during the drinking water treatment process.
                    </p>
            </div>
            <div className='w-[158px] h-[115px] md:w-[38%] md:h-[400px] relative'>
                <Image   src={four} alt='' />
                
                </div>
        </div>
         {/* horizontal line */}
         <div className=' md:mx-32 m-10  md:my-10 h-[2px] bg-black'></div> 



         {/* part 5 */}
        <div className='flex max-sm:px-2 md:p-20 '>
            <div className='w-[158px] h-[115px] md:w-[38%] md:h-[400px] relative '>
                <Image className=' '  src={five} alt='' />
                
                </div>
            <div className='w-1/2 md:w-[62%] pl-2 md:h-[560px] md:px-8 text-justify'>
                <h1 className='max-sm:text-[12px] max-sm:leading-[17.28px] font-semibold text-5xl md:p-6'>Food / Beverage</h1>
                <p className='text-[24px] max-sm:text-[8px] max-sm:leading-[14.68px] text-justify font-normal'>Activated carbons; It removes contaminants and impurities such as color and odor from sweeteners, food liquids, syrups, beverages, glycerin, amino and organic acids.</p>
            </div>
           
  
        </div>
        {/* horizontal line */}
        <div className=' md:mx-32 m-10 md:mt-10 h-[2px] bg-black'></div> 


        {/* part 6 */}
        <div className='flex max-sm:px-2 md:p-20'>
        <div className='w-1/2 md:w-[62%] pl-2 md:h-[560px] md:px-8 text-justify'>
                <h1 className='max-sm:text-[12px] max-sm:leading-[17.28px] font-semibold text-5xl md:p-6'>Personal Protection</h1>
                <p className='text-[24px] max-sm:pr-2 max-sm:text-[8px] max-sm:leading-[14.68px] text-justify font-normal'>
                Protection against toxic gases is one of the oldest applications of granular activated carbon. When chlorine and phosgene were used as military gas in World War I, masks containing activated carbon were developed to respond to this threat. Today, the number of chemicals used in war and industrial zones has increased dramatically and has become more complex.
                    </p>
            </div>
            <div className='w-[158px] h-[115px] md:w-[38%] md:h-[400px] relative'>
                <Image   src={six} alt='' />
                
                </div>
        </div>
         {/* horizontal line */}
         <div className=' md:mx-32 m-10  md:my-10 h-[2px] bg-black'></div> 


         {/* part 7 */}
        <div className='flex max-sm:px-2 md:p-20 '>
            <div className='w-[158px] h-[115px] md:w-[38%] md:h-[400px] relative '>
                <Image className=' '  src={seven} alt='' />
                
                </div>
            <div className='w-1/2 md:w-[62%] pl-2 md:h-[560px] md:px-8 text-justify'>
                <h1 className='max-sm:text-[12px] max-sm:leading-[17.28px] font-semibold text-5xl md:p-6'>Super capacitors</h1>
                <p className='text-[24px] max-sm:text-[8px] max-sm:leading-[14.68px] text-justify font-normal'>
                Super capacitors are high capacity energy storage devices. The storage mechanism for the super capacitors is primarily physically in the form of electrons stored on the surface of the activated carbon and rapidly charged / discharged. Since the amount of charge is related to the number of electrons that can be stored on the surface, activated carbon is the industry standard with a high surface area.</p>
            </div>
           
  
        </div>
        {/* horizontal line */}
        <div className=' md:mx-32 m-10 md:mt-10 h-[2px] bg-black'></div> 


        {/* part 8 */}
        <div className='flex max-sm:px-2 md:p-20'>
        <div className='w-1/2 md:w-[62%] pl-2 md:h-[560px] md:px-8 text-justify'>
                <h1 className='max-sm:text-[12px] max-sm:leading-[17.28px] font-semibold text-5xl md:p-6'>Flue Gas / Mercury</h1>
                <p className='text-[24px] max-sm:pr-2 max-sm:text-[8px] max-sm:leading-[14.68px] text-justify font-normal'>
                Reacting by-products in mercury and natural gas, petrochemical and refinery feed flows can cause excessive corrosion of metallic components. Mercury is a trace element that occurs in natural gas. Mercury is harmful to the environment and handling and handling of equipment. Natural gas requires purification to prevent adverse effects due to the presence of this substance. Our activated carbons are suitable and efficient for mercury removal.
                    </p>
            </div>
            <div className='w-[158px] h-[115px] md:w-[38%] md:h-[400px] relative'>
                <Image   src={eight} alt='' />
                
                </div>
        </div>
         {/* horizontal line */}
         <div className=' md:mx-32 m-10  md:my-10 h-[2px] bg-black'></div> 


         {/* part 9 */}
        <div className='flex max-sm:px-2 md:p-20 '>
            <div className='w-[158px] h-[115px] md:w-[38%] md:h-[400px] relative '>
                <Image className=' '  src={nine} alt='' />
                
                </div>
            <div className='w-1/2 md:w-[62%] pl-2 md:h-[560px] md:px-8 text-justify'>
                <h1 className='max-sm:text-[12px] max-sm:leading-[17.28px] font-semibold text-5xl md:p-6'>Pharmaceutical / Medical</h1>
                <p className='text-[24px] max-sm:text-[8px] max-sm:leading-[14.68px] text-justify font-normal'>
                The pharmaceuticals may be contaminated by proteins or other organic compounds during production. Different grades of activated carbons can be used to make these products suitable for use.
                High purity powder and granular activated carbon will be suitable for the processing of pharmaceuticals products.</p>
            </div>
           
  
        </div>
        {/* horizontal line */}
        <div className=' md:mx-32 m-10 md:mt-10 h-[2px] bg-black'></div> 


        {/* part 10 */}
        <div className='flex max-sm:px-2 md:p-20'>
        <div className='w-1/2 md:w-[62%] pl-2 md:h-[560px] md:px-8 text-justify'>
                <h1 className='max-sm:text-[12px] max-sm:leading-[17.28px] font-semibold text-5xl md:p-6'>Gold Mining</h1>
                <p className='text-[24px] max-sm:pr-2 max-sm:text-[8px] max-sm:leading-[14.68px] text-justify font-normal'>
                Our innovative products; gold, precious, rare earth and base metals, uranium, copper, nickel and zinc from ore recovery, waste and recycling are used to recover efficiently.
CG Carbon’s expertise and experience provide economical and efficient solutions for a wide range of metal recovery applications.
                    </p>
            </div>
            <div className='w-[158px] h-[115px] md:w-[38%] md:h-[400px] relative'>
                <Image   src={ten} alt='' />
                
                </div>
        </div>
         {/* horizontal line */}
         <div className=' md:mx-32 m-10  md:my-10 h-[2px] bg-black'></div> 



        {/* part 11 */}
        <div className='flex max-sm:px-2 md:p-20 '>
            <div className='w-[158px] h-[115px] md:w-[38%] md:h-[400px] relative '>
                <Image className=' '  src={eleven} alt='' />
                
                </div>
            <div className='w-1/2 md:w-[62%] pl-2 md:h-[560px] md:px-8 text-justify'>
                <h1 className='max-sm:text-[12px] max-sm:leading-[17.28px] font-semibold text-5xl md:p-6'>Tobacco</h1>
                <p className='text-[24px] max-sm:text-[8px] max-sm:leading-[14.68px] text-justify font-normal'>
                It is used in cigarette filters to affect cigarette and aroma properties and to remove unwanted cigarette components from cigarette smoke.
                Activated Carbon Filters provide removal of carcinogens and other toxic components that cannot be eliminated by ordinary carbonless filters.
                </p>
            </div>
           
  
        </div>
        {/* horizontal line */}
        <div className=' md:mx-32 m-10 md:mt-10 h-[2px] bg-black'></div> 


        {/* part 12 */}
        <div className='flex max-sm:px-2 md:p-20'>
        <div className='w-1/2 md:w-[62%] pl-2 md:h-[560px] md:px-8 text-justify'>
                <h1 className='max-sm:text-[12px] max-sm:leading-[17.28px] font-semibold text-5xl md:p-6'>Automotive</h1>
                <p className='text-[24px] max-sm:pr-2 max-sm:text-[8px] max-sm:leading-[14.68px] text-justify font-normal'>
                Automotive emissions pose a significant threat to urban air pollution. While exhaust emissions are effectively controlled using exhaust gas catalysts, activated carbon is the most common technology worldwide for evaporating fuel emissions. Active carbon-filled canisters are used to adsorb emissions of high volatile hydrocarbons in the gas tank to prevent them from entering the ambient air. The adsorbed fuel vapors are then desorbed by rearranging the can while the car is being driven. This adsorption / desorption cycle continues to allow active carbon to perform throughout the life of the vehicle.
                    </p>
            </div>
            <div className='w-[158px] h-[115px] md:w-[38%] md:h-[400px] relative'>
                <Image   src={twelev} alt='' />
                
                </div>
        </div>
         {/* horizontal line */}
         <div className=' md:mx-32 m-10  md:my-10 h-[2px] bg-black'></div> 




      </section>
      <div className='relative'>
      <Enquiry/>
      </div>
      
    </div>
  );
}

export default Application;
