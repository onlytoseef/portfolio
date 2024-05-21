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
import ServiceCard from '../ServiceCard/serviceCard';
import AWS from '../../assets/images/skills/aws-2.svg';
import Node from '../../assets/images/skills/nodejs-icon.svg';
import GIT from '../../assets/images/skills/github-icon-1.svg';
import Express from '../../assets/images/skills/express-109.svg';
import api from '../../assets/images/skills/postman.svg';
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
          className='min-h-[100px]  w-[250px]  col-span-3  rounded flex flex-col justify-end'
        >
          <ServiceCard title='HTML' imgSrc={HTML} />
        </div>

        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3  rounded flex flex-col justify-end'
        >
          <ServiceCard title='CSS' imgSrc={CSS} />
        </div>

        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3  rounded flex flex-col justify-end'
        >
          <ServiceCard title='JavaScript' imgSrc={JS} />
        </div>

        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3  rounded flex flex-col justify-end'
        >
          <ServiceCard title='TypeScript' imgSrc={TS} />
        </div>
      </div>
      <div className='grid sm:grid-cols-12 justify-items-center p-5 gap-4'>
        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3  rounded flex flex-col justify-end'
        >
          {' '}
          <ServiceCard title='Bootstrap' imgSrc={BOOTSTRAP} />
        </div>

        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3  rounded flex flex-col justify-end'
        >
          <ServiceCard title='Talwind CSS' imgSrc={TAILWIND} />
        </div>

        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3  rounded flex flex-col justify-end'
        >
          <ServiceCard title='React JS' imgSrc={REACT} />
        </div>

        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3  rounded flex flex-col justify-end'
        >
          <ServiceCard title='RN' imgSrc={RN} />
        </div>
      </div>
      <div className='grid sm:grid-cols-12 pb-12 justify-items-center p-5 gap-4'>
        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3  rounded flex flex-col justify-end'
        >
          <ServiceCard title='Next JS' imgSrc={NEXTJS} />
        </div>

        <div
          data-aos='fade-up'
          className='min-h-[140px] w-[250px]  col-span-3  rounded flex flex-col justify-end'
        >
          <ServiceCard title='Firebase' imgSrc={FIREBASE} />
        </div>

        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3  rounded flex flex-col justify-end'
        >
          <ServiceCard title='Mongo DB' imgSrc={MDB} />
        </div>

        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3  rounded flex flex-col justify-end'
        >
          <ServiceCard title='AWS' imgSrc={AWS} />
        </div>
      </div>
      <div className='grid sm:grid-cols-12 pb-12 justify-items-center p-5 gap-4'>
        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3  rounded flex flex-col justify-end'
        >
          <ServiceCard title='Node JS' imgSrc={Node} />
        </div>

        <div
          data-aos='fade-up'
          className='min-h-[140px] w-[250px]  col-span-3  rounded flex flex-col justify-end'
        >
          <ServiceCard title='Express' imgSrc={Express} />
        </div>

        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3  rounded flex flex-col justify-end'
        >
          <ServiceCard title='Rest API' imgSrc={api} />
        </div>

        <div
          data-aos='fade-up'
          className='min-h-[100px]  w-[250px]  col-span-3  rounded flex flex-col justify-end'
        >
          <ServiceCard title='GitHub' imgSrc={GIT} />
        </div>
      </div>
    </div>
  );
}
