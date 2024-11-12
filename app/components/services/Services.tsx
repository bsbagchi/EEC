'use client'

import React, { useState } from 'react'

interface Service {
  title: string;
  description: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: "Professional Team",
      description: "EEC is an Organisation Built Upon By a Dedicated, Loyal, and Professional team With Vast Experience in the business."
    },
    {
      title: "Quality Products",
      description: "International Quality Tests Are Carried Out on The Raw Material as well as Finished Goods to Ensure That, all Products Meet required specifications stated by the customers."
    },
    {
      title: "Great Support",
      description: "GC Carbon offer 24/7 online service & Support to all customers across the globe."
    }
  ]

  return (
    <section className="md:p-[50px] text-center">
      <p className="max-sm:text-[12px] max-sm:leading-[17.28px] max-sm:pt-4 opacity-60 text-[2rem] leading-[3rem]">
        To make your life easy.
      </p>
      <h2 className="max-sm:text-[12px] max-sm:leading-[17.28px] max-sm:py-2 text-[3rem] leading-[4.5rem] md:py-3 font-['Poppins'] font-medium">
        WHAT WE OFFER!
      </h2>
      
      <div className="max-sm:px-2 flex flex-col md:flex-row justify-center gap-5 py-2">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  )
}

// Explicitly typing the props parameter with ServiceCardProps
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`px-[20px] rounded-[8px] text-left md:w-[438px] max-sm:h-[231px] h-[287px] transition-all duration-300 ease-in-out
        ${
          isHovered
            ? 'bg-white border-2 border-black text-black'
            : 'bg-gradient-to-b from-[rgba(193,193,193,0.8)] to-[rgba(0,0,0,0.8)] text-white'
        }`}
      style={{
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-center font-['Poppins'] font-medium max-sm:text-[16px] py-6 text-[2.5rem] max-sm:leading-[24px] leading-[3.75rem]">
        {title}
      </h3>
      <p className="max-sm:text-[15px] max-sm:leading-[22.5px] font-['Poppins'] font-light leading-[30px] text-justify">
        {description}
      </p>
    </div>
  )
}

export default Services
