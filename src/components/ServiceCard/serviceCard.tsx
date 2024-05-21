import React from 'react';

interface ServiceCardProps {
  title: string;
  imgSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imgSrc }) => {
  return (
    <div className='m-2 group px-10 py-5 service-card bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#abd373]  z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all'>
      <img
        src={imgSrc}
        width={10}
        alt=''
        className='w-44 aspect-square rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto'
      />
      <p className='cardtxt font-semibold text-gray-200 text-[1.5rem] tracking-wider group-hover:text-gray-700 text-xl'>
        {title}
      </p>
    </div>
  );
};

export default ServiceCard;
