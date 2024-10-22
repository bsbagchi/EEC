import React from 'react'
import './Style.css';


export default function Services() {
  return (
    <div>
      <section>
      <div className="md:p-[50px] text-center" >
      <p className="max-sm:text-[12px] max-sm:leading-[17.28px] max-sm:pt-4 opacity-65  text-[2rem] leading-[3rem]">To make your life easy.</p>
      <h2 className='max-sm:text-[12px] max-sm:leading-[17.28px] max-sm:py-2 text-[3rem] leading-[4.5rem]  md:py-3 poppins font-medium '>WHAT WE OFFER!</h2>
      
      
      <div className=" max-sm:px-2 justify-center  gap-5  md:flex text-white py-2">
        <div className="px-[20px] bg-[#f2f2f2] rounded-[8px] text-left md:w-[438px] max-sm:h-[231px] h-[287px] text-white " style={{
        background: 'linear-gradient(179.97deg, rgba(193, 193, 193, 0.8) -7.81%, rgba(0, 0, 0, 0.8) 99.98%)', boxShadow:'0px 0px 15px rgba(0, 0, 0, 0.2);'
      }}>
          <h3 className='text-center poppins font-medium max-sm:text-[16px] py-6 text-[2.5rem] max-sm:leading-[24px] leading-[3.75rem] '>Professional Team</h3>
          <p className='max-sm:text-[15px] max-sm:leading-[22.5px] poppins font-[300] leading-[30px] text-justify'>
            EEC is an Organisation Built Upon By a Dedicated, Loyal, and Professional team With Vast Experience in the business.
          </p>
        </div>
        
        <div className="px-[20px] bg-[#f2f2f2] max-sm:my-5 rounded-[8px] text-left max-sm:h-[231px] md:w-[438px] h-[287px] text-white" style={{
        background: 'linear-gradient(179.97deg, rgba(193, 193, 193, 0.8) -7.81%, rgba(0, 0, 0, 0.8) 99.98%)', boxShadow:'0px 0px 15px rgba(0, 0, 0, 0.2);'
      }}>
          <h3 className='text-center poppins font-medium max-sm:text-[16px] py-6 text-[2.5rem] max-sm:leading-[24px] leading-[3.75rem]'>Quality Products</h3>
          <p className='max-sm:text-[15px] max-sm:leading-[22.5px] poppins font-[300] leading-[30px] text-justify'>
            International Quality Tests Are Carried Out on The Raw Material as well as Finished Goods to Ensure That, all Products Meet required specifications stated by the customers.
          </p>
        </div>
        
        <div className="px-[20px] bg-[#f2f2f2] rounded-[8px]  text-left max-sm:h-[231px] md:w-[438px] h-[287px] text-white" style={{
        background: 'linear-gradient(179.97deg, rgba(193, 193, 193, 0.8) -7.81%, rgba(0, 0, 0, 0.8) 99.98%)', boxShadow:'0px 0px 15px rgba(0, 0, 0, 0.2);'
      }}>
          <h3 className='text-center poppins font-medium max-sm:text-[16px] py-6 text-[2.5rem] max-sm:leading-[24px] leading-[3.75rem]'>Great Support</h3>
          <p className='max-sm:text-[15px] max-sm:leading-[22.5px] poppins font-[300] leading-[30px] text-justify'>
            GC Carbon offer 24/7 online service & Support to all customers across the globe.
          </p>
        </div>
      </div>
    </div>
      </section>
    </div>
  )
}
