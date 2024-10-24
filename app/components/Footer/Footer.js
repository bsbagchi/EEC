import React from 'react';
import './Footer.css'; // Import the external CSS
import inst from '../../images/instram.png';  // Instagram icon image
import face from '../../images/face.png';     // Facebook icon image
import x from '../../images/x.png';           // X (formerly Twitter) icon image
import link from '../../images/link.png';     // LinkedIn icon image
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[--footer-bg]">
      <div className="w-full lg:flex justify-between py-5 px-3 md:px-8 lg:px-24">
        {/* Left Side - Company Info */}
        <div className="max-sm:flex pr-2">
          <div>
          <h2  className="lg:leading-[88.03px] max-sm:leading-[22.02px] max-sm:text-[12px] montserrat font-[600] text-[48px]">EstellaEcoCarbon</h2>
          <p  className="lg:leading-[44.04px] max-sm:leading-[18.35px] max-sm:text-[10px] montserrat font-[300] text-[24px]">Pioneering Sustainable Activated Carbon Solutions</p>
          <p  className='lg:leading-[44.04px] max-sm:leading-[18.35px] max-sm:text-[10px] montserrat font-[400] w-[15rem] text-[24px]'>SadaShivnagar, Bangalore - 535022</p>
          <div  className='flex leading-[44.04px] max-sm:leading-[18.35px] max-sm:text-[10px] montserrat text-[24px]' ><h1  className=' font-[600]  '>Phone:</h1> <h1  className='font-[400] px-2 '>9876543210</h1></div>
          <div className='flex leading-[44.04px] max-sm:leading-[18.35px] max-sm:text-[10px] montserrat text-[24px]'><h1  className=' font-[600]  '>Email:</h1> <h1  className=' font-[400] px-2 '>info@example.com</h1></div>
          </div>
          {/* Social Icons */}
          <div className="h-[40px] max-sm:w-full lg:h-[83px] lg:w-[339px] mt-4 flex">
            <Link href="#"><Image src={inst}  className="w-fit h-fit" alt="Instagram" /></Link>
            <Link href="#"><Image src={face} className="w-fit h-fit max-sm:py-1 md:py-2 "  alt="Facebook" /></Link>
            <Link href="#"><Image src={x} className=" w-fit h-fit md:py-3 max-sm:pt-[4px] max-sm:mx-[2px] md:mx-3" alt="X" /></Link>
            <Link href="#"><Image src={link} className="w-fit h-fit max-sm:pt-[1px] max-sm:ml-[2px] " alt="LinkedIn" /></Link>
          </div>
        </div>

        {/* Right Side - Links */}
        <div className="max-sm:w-full w-[48.6rem] py-7 ">
          <div  className="max-sm:leading-[18.35px] max-sm:text-[10px] leading-[44.04px] w-full flex  montserrat font-regular text-[24px] ">
            <h4  className='max-sm:leading-[18.35px] max-sm:text-[10px] border-r-[1px] border-black border-opacity-40 w-1/3' >Useful Links</h4>
          
            <h4 className='max-sm:leading-[18.35px] max-sm:text-[10px] pl-10'>Our Services</h4>
          </div>
<div className='w-full max-sm:h-[0.5px] h-[2px] bg-black opacity-50 my-1'></div>
          <div className="max-sm:w-full w-[48.6rem] text-[#252525] flex">
            <div className='w-1/3 border-r-2 max-sm:border-r-[0.5px] border-black border-opacity-50 '> 
            <ul className="max-sm:leading-[18.35px] max-sm:text-[10px] leading-[44.04px] montserrat font-normal text-[24px] ">
              <li><Link href={'/'}>Home</Link></li>
              <li><Link href={'/about'}>About Us</Link></li>
              <li><Link href={'/service'}>Services</Link></li>
              <li>Terms of Services</li>
              <li>Privacy Policy</li>
            </ul></div>
            <div className='pl-10'>
            <ul  className="max-sm:leading-[18.35px] max-sm:text-[10px] leading-[44.04px] montserrat font-normal text-[24px]">
              <li>Water Treatment Industry</li>
              <li>Air and Gas Purification Industry</li>
              <li>Food and Beverage Industry</li>
              <li>Terms of Services</li>
              <li>Privacy Policy</li>
            </ul>
            </div>
           
        
            
            
          </div>
          <div  className="max-sm:hidden   leading-[44.04px] bg-[#00000014] flex rounded-[24px]  justify-center items-center w-[full] h-[86px] mt-10 montserrat font-normal text-[24px]">
        <p>
          &copy; Copyright <span className='font-[600]'>EstellaEcoCarbon</span> All Rights Reserved
        </p>
      </div>
        </div>
      </div>

      {/* Bottom copyright */}
      
    </footer>
  );
};

export default Footer;
