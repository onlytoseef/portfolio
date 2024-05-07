import React from 'react';
import HTML from '../../assets/images/skills/html-1.svg';
import CSS from '../../assets/images/skills/css-3.svg';
import JS from '../../assets/images/skills/logo-javascript.svg';
import TS from '../../assets/images/skills/typescript.svg';
import BOOTSTRAP from '../../assets/images/skills/bootstrap-5-1.svg';
import TAILWIND from '../../assets/images/skills/tailwind-css-2.svg';
import REACT from '../../assets/images/skills/react-2.svg';
import RN from '../../assets/images/skills/react-native-1.svg';
import NEXTJS from '../../assets/images/skills/next-js.svg';
import FIREBASE from '../../assets/images/skills/firebase-1.svg';
import MDB from '../../assets/images/skills/mongodb-icon-1.svg';
import AWS from '../../assets/images/skills/aws-2.svg';
export default function skills() {
  return (
    <div className='skill-section  '>
      <div data-aos='zoom-in' className=' pt-8'>
        <h1 className='text-greyWhite text-[12px] text-center'>
          _______ Languages
        </h1>
        <h1 className='text-[50px] text-vermili text-center'>Skills</h1>
      </div>
      <div className='grid sm:grid-cols-12  mt-16 justify-items-center  p-5 gap-4'>
        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3 bg-cardBg rounded flex flex-col justify-end'
        >
          <div className='flex flex-col items-center p-4'>
            <img src={HTML} alt='' width={50} className='mb-auto' />
            <h1 className='text-greyWhite text-[30px] sm:text-[30px] font-[400]'>
              HTML
            </h1>
          </div>
        </div>

        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3 bg-cardBg rounded flex flex-col justify-end'
        >
          <div className='flex flex-col items-center p-4'>
            <img src={CSS} alt='' width={50} className='mb-auto' />
            <h1 className='text-greyWhite text-[30px] sm:text-[30px] font-[400]'>
              CSS
            </h1>
          </div>
        </div>

        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3 bg-cardBg rounded flex flex-col justify-end'
        >
          <div className='flex flex-col items-center p-4'>
            <img src={JS} alt='' width={50} className='mb-auto' />
            <h1 className='text-greyWhite text-[30px] sm:text-[30px] font-[400]'>
              JavaScript
            </h1>
          </div>
        </div>

        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3 bg-cardBg rounded flex flex-col justify-end'
        >
          <div className='flex flex-col items-center p-4'>
            <img src={TS} alt='' width={50} className='mb-auto' />
            <h1 className='text-greyWhite text-[30px] sm:text-[30px] font-[400]'>
              Typescript
            </h1>
          </div>
        </div>
      </div>
      <div className='grid sm:grid-cols-12 justify-items-center p-5 gap-4'>
        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3 bg-cardBg rounded flex flex-col justify-end'
        >
          <div className='flex flex-col items-center p-4'>
            <img src={BOOTSTRAP} alt='' width={50} className='mb-auto' />
            <h1 className='text-greyWhite text-[30px] sm:text-[30px] font-[400]'>
              Bootstrap
            </h1>
          </div>
        </div>

        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3 bg-cardBg rounded flex flex-col justify-end'
        >
          <div className='flex flex-col items-center p-4'>
            <img src={TAILWIND} alt='' width={50} className='mb-auto' />
            <h1 className='text-greyWhite text-[30px] sm:text-[30px] font-[400]'>
              Tailwind <span className='text-[#06B6D4]'>CSS</span>
            </h1>
          </div>
        </div>

        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3 bg-cardBg rounded flex flex-col justify-end'
        >
          <div className='flex flex-col items-center p-4'>
            <img src={REACT} alt='' width={50} className='mb-auto' />
            <h1 className='text-greyWhite text-[30px] sm:text-[30px] font-[400]'>
              React <span className='text-[#61DAFB]'>JS</span>
            </h1>
          </div>
        </div>

        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3 bg-cardBg rounded flex flex-col justify-end'
        >
          <div className='flex flex-col items-center p-4'>
            <img src={RN} alt='' width={65} className='mb-auto' />
            <h1 className='text-greyWhite text-[30px] sm:text-[30px] font-[400]'>
              React <span className='text-[#61DAFB]'>Native</span>
            </h1>
          </div>
        </div>
      </div>
      <div className='grid sm:grid-cols-12 justify-items-center p-5 gap-4'>
        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3 bg-cardBg rounded flex flex-col justify-end'
        >
          <div className='flex flex-col items-center p-4'>
            <img src={NEXTJS} alt='' width={50} className='mb-auto' />
            <h1 className='text-greyWhite text-[30px] sm:text-[30px] font-[400]'>
              Next JS
            </h1>
          </div>
        </div>

        <div
          data-aos='fade-up'
          className='min-h-[140px] w-[250px]  col-span-3 bg-cardBg rounded flex flex-col justify-end'
        >
          <div className='flex flex-col items-center p-4'>
            <img src={FIREBASE} alt='' width={30} className='mb-auto' />
            <h1 className='text-greyWhite text-[30px] sm:text-[30px] font-[400]'>
              Firebase
            </h1>
          </div>
        </div>

        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3 bg-cardBg rounded flex flex-col justify-end'
        >
          <div className='flex flex-col items-center p-4'>
            <img src={MDB} alt='' width={50} className='mb-auto' />
            <h1 className='text-greyWhite text-[30px] sm:text-[30px] font-[400]'>
              Mongo <span className='text-[#6CAC48]'>DB</span>
            </h1>
          </div>
        </div>

        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3 bg-cardBg rounded flex flex-col justify-end'
        >
          <div className='flex flex-col items-center p-4'>
            <img src={AWS} alt='' width={50} className='mb-auto' />
            <h1 className='text-greyWhite text-[30px] sm:text-[30px] font-[400]'>
              Amazon <span className='text-[#FF9900]'>AWS</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
