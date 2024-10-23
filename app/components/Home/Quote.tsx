import React from 'react'
import './Home.css';
import Link from 'next/link';
export default function Quote() {
  return (
    <div>
      <section >
     <div className='bnnerr max-sm:h-[159px] h-[35vh]'>
     <div className='backdrop-blur-[2px] flex flex-col items-center justify-center max-sm:h-[159px] w-full h-full'>
    <h1 className='text-5xl max-sm:text-[1.25rem]    text-center  py-5 sm:py-10 -mt-8  font-thin gradient-text'>Get Your Quote Now!</h1>
    <Link href={'/contact'}><button className='border-[0.5px] w-[200px] max-sm:w-[82px]  border-white text-white montserrat font-normal max-sm:text-[12px] max-sm:p-0  rounded-lg overflow-hidden p-2 text-xl   bottom-20 flex justify-center '><h1 className='max-sm:pr-0 pr-2'>Contact</h1><span className="max-sm:hidden">Us</span> </button></Link>
  </div>
    
     </div>
      </section>
    </div>
  )
}
