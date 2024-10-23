'use client';

import "./Navbar.css"; // Importing the CSS file for styling
import location from '../../images/location.png';
import call from '../../images/call.png';
import logo from '../../images/logo.png';
import arr from '../../images/arr.png';
import Link from "next/link";
import Image from "next/image";
// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { useState } from "react";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }
 

  return (
    <header className="sticky z-40 w-full top-0">
      <div class="bg-black text-white  flex justify-between p-[10px] items-center">
        <div className="flex ">
          <span role="img" aria-label="location">
            <Image src={location} alt='location' width={20} height={20} />
          </span>
          <h1 className="px-2">Banglore, Karnataka</h1>
        </div>
        <div className="flex items-center">
          <span role="img" aria-label="phone">
            <Image src={call} alt="call" width={20} height={20} />
          </span>
          <h1 className="px-2">+91 99999 99999</h1>
        </div>
      </div>

      <div className="logo-bar max-sm:px-2 px-[20px]">
        <Link href={'/'}><Image src={logo} alt="ECC Logo" className="logo" width={100} height={50} /></Link>
        <Link href={'/contact'} className="max-sm:hidden block quote-btn">Get a Quote ➔</Link>
        <button className="max-sm:block hidden p-1  h-10 w-10 text-xl text-white" onClick={toggleDrawer}><div className="h-[2px] bg-black"/><div className="h-[2px] my-[7px] bg-black" /><div className="h-[2px] bg-black"/></button>
      </div>

      <nav className="main-nav w-[64%] ">
        <ul style={{lineHeight:'28.81px'}} className=" flex poppins font-[400px] text-[20px] px-[4%] w-full justify-between ">
          <li><Link  href="/">HOME</Link></li>
          <li><Link href="/about">ABOUT US</Link></li>
          <li className="logogo" > {/*<li className="logogo" onClick={toggleDropdown}> */}
            <Link className="flex items-center" href='/product'><h1>PRODUCTS</h1>
            <div className="h-[13px] p-1"><Image className="" src={arr} alt="arrow" width={10} height={10} /></div></Link>
           
            
           
            <ul className="dropdown">
                <li className='montserrat font-normal text-[20px]'><Link href="/product/product1">Granular Activted Carbon</Link></li>
                <li className='montserrat font-normal text-[20px]'><Link href="/product/product2">Powder Activted Carbon</Link></li>
                <li className='montserrat font-normal text-[20px]'><Link href="/product/product3">Pelletized Activted Carbon</Link></li>
              </ul>
          </li>
          <li><Link href="/activated">ACTIVATED CARBON</Link></li>
          <li>
            <Link className="flex items-center" href="/application"><h1>APPLICATIONS</h1> </Link>
          </li>
          <li><Link href="/service">SERVICES</Link></li>
          <li><Link href="/contact">CONTACT US</Link></li>
        </ul>
      </nav>
      <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className=''
            ><div className=" bg-black h-full">
              
                <div>
              <ul style={{lineHeight:'28.81px'}} className="bg-black  text-white  poppins font-[400px] text-[12px] px-[7%] w-full justify-between ">
          <li className="pt-4 "><Link onClick={toggleDrawer} href="/">HOME</Link></li>
          <li className="my-2"><Link onClick={toggleDrawer} href="/about">ABOUT US</Link></li>
          <li className="logogo my-2" > {/*<li className="logogo" onClick={toggleDropdown}> */}
            <Link  className="flex items-center" href='/product'><h1>PRODUCTS</h1>
            <div className="h-[13px] p-1"><Image className="" src={arr} alt="arrow" width={10} height={10} /></div></Link>
           
            
           
            <ul className="dropdown montserrat font-normal text-[10px]">
                <li className=''><Link onClick={toggleDrawer} href="/product/product1">Granular Activted Carbon</Link></li>
                <li className=''><Link onClick={toggleDrawer} href="/product/product2">Powder Activted Carbon</Link></li>
                <li className=''><Link onClick={toggleDrawer} href="/product/product3">Pelletized Activted Carbon</Link></li>
              </ul>
          </li>
          <li className="my-2"><Link onClick={toggleDrawer} href="/activated">ACTIVATED CARBON</Link></li>
          <li className="my-2">
            <Link onClick={toggleDrawer} className="flex items-center" href="/application"><h1>APPLICATIONS</h1> </Link>
          </li>
          <li className="my-2"><Link onClick={toggleDrawer} href="/service">SERVICES</Link></li>
          <li className="my-2"><Link onClick={toggleDrawer} href="/contact">CONTACT US</Link></li>
        </ul></div>
        </div>
            </Drawer>
    </header>
  );
};

export default Navbar;
