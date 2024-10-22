import React from 'react'

import Image from 'next/image'
import location from '../images/contact/location.svg';
import mail from '../images/contact/mail.svg';
// import link from '../images/contact/link.svg';
import phone from '../images/contact/phone.svg';


function Contact() {
  return (
    <div>
        
     <section>
     <div className="items-center justify-center relative md:m-[3rem] flex ">
      {/* Contact Details Section */}
      <div style={{background: 'linear-gradient(270deg, #000000 0%, #494D55 110.83%)'}} className="max-sm:hidden -right-[10%] bg-[#1e1e1e] text-white p-[30px] overflow-hidden rounded-[8px] w-[328px] h-[406px] text-left relative z-10">
        <h3 className='py-3 text-xl'>Contact Us</h3>
        <div className='flex text-xs py-2 items-center'><Image width={20} src={location} alt='location' /> <p className='px-1 nunito text-[14px] leading-[20px]'>Banglore, Karnataka</p></div>
        <div className='flex text-xs py-2 items-center'><Image width={20} src={mail} alt='mail' /> <p className='px-1 my-6 nunito text-[14px] leading-[20px]'> support@estellaecocarbon.com</p></div>
        <div className='flex text-xs py-2 items-center'><Image width={20} src={phone} alt='phone' /> <p className='px-1 nunito text-[14px] leading-[20px]'> +91 94818 73543</p></div>
        {/* <div className='flex text-xs py-2 items-center'><Image width={20} src={link} alt='internet' /> <p className='px-1'> Lorem Ipsum is simply dummy text</p></div> */}
  
      </div>
      <div style={{boxShadow:'0px 0px 10px rgba(0, 0, 0, 0.5)'}} className="max-sm:px-3 relative nunito py-[50px] md:pl-[260px] md:pr-[30px] h-[480px] w-[726px]">
        <h3 className='font-bold text-[24px] leading-[24px] text-[#404B63]'>Get in Touch</h3>
        <p className='font-normal text-[14px] leading-[16px] text-[#B2B2B2] py-4'>Lorem Ipsum is simply dummy text</p>
        <form>
          <input type="text" placeholder="Name" className="w-[341px] h-[35px]  p-2 font-normal text-[--border] rounded-[8px] bg-[--inputbg] text-[16px] leading-[16px]" />
          <input type="email" placeholder="Email Id" className="w-[341px] h-[35px] my-3 p-2 font-normal text-[--border] rounded-[8px] bg-[--inputbg] text-[16px] leading-[16px]" /> 
          <textarea placeholder="Type your message here..." className="w-[341px] h-[93px] rounded-[8px] bg-[--inputbg] text-[16px] leading-[16px] p-5 "></textarea>
          <button style={{background: 'linear-gradient(270deg, #000000 0%, #494D55 110.83%)'}} type="submit" className="my-2 w-[341px] bg-[#1e1e1e] text-white py-3 rounded-lg">Submit</button>
        </form>
      </div>
    </div>
     </section>
 
    </div>
  )
}

export default Contact
