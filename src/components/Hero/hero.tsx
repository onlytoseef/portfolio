import React from 'react';
import star from '../../assets/icons/Vector.svg';
import Header from '../Header/header';
export default function hero() {
  return (
    <div className='main-container'>
      <Header />
      <div className='flex flex-col justify-center items-center sm:mt-[27vh] mt-[30vh]'>
        <div
          data-aos='fade-up'
          className='text-white font-thin text-[25px] md:text-[50px] lg:text-[50px]'
        >
          Turning Ideas into
          <code>
            &lt; <span className='text-vermili'>/</span>Code&gt;
          </code>
        </div>
        <div
          data-aos='fade-up'
          className='text-white text-[25px] sm:text-[55px] font-bold'
        >
          and Bugs into Features
        </div>
        <div
          data-aos='fade-up'
          className='text-[16px] ml-8 sm:ml-0  text-white font-thin'
        >
          ________________________ Hey it's Toseef Rana. A{''}
          <span className='text-vermili font-semibold'>MERN STACK </span>{' '}
          Developer
        </div>

        <div className=' bg-white bar  h-10 mt-[30vh] sm:mt-[25vh] flex items-center justify-center '>
          <div className='flex' id='scroll-text'>
            <img src={star} width={25} alt='' />
            <p className=' sm:pl-8 pl-2 text-[10px] sm:text-[15px]  sm:pr-8 pr-2 justify-center text-accent font-[500] '>
              Next JS
            </p>
          </div>
          <div className='flex' id='scroll-text'>
            <img src={star} width={25} alt='' />
            <p className=' sm:pl-8 pl-2 text-[10px] sm:text-[15px]  sm:pr-8 pr-2 justify-center text-accent font-[500] '>
              React JS
            </p>
          </div>
          <div className='flex' id='scroll-text'>
            <img src={star} width={25} alt='' />
            <p className=' sm:pl-8 pl-2 text-[10px] sm:text-[15px]  sm:pr-8 pr-2 justify-center text-accent font-[500] '>
              Firebase
            </p>
          </div>
          <div className='flex' id='scroll-text'>
            <img src={star} width={25} alt='' />
            <p className=' sm:pl-8 pl-2 text-[10px] sm:text-[15px]  sm:pr-8 pr-2 justify-center text-accent font-[500] '>
              Mongo DB
            </p>
          </div>
          <div className='flex' id='scroll-text'>
            <img src={star} width={25} alt='' />
            <p className=' sm:pl-8 pl-2 text-[10px] sm:text-[15px]  sm:pr-8 pr-2 justify-center text-accent font-[500] '>
              Amazon AWS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
