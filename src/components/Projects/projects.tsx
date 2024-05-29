import weatherApp from '../../assets/images/Projects/weatherApp.png';
import currencyE from '../../assets/images/Projects/currecnyExchanger.png';
import News from '../../assets/images/Projects/newsApp.png';
import Ecommerce from '../../assets/images/Projects/ecommer.png';

export default function projects() {
  return (
    <div>
      <div className='projects-section' id='projects'>
        <div className='flex flex-col pt-12 items-center '>
          <p className='text-[12px] text-white'>__________________ Best Work</p>
          <h1 className='text-vermili text-[50px]'>Projects</h1>
        </div>
        <div
          data-aos='fade-up'
          className='flex sm:flex-row justify-center items-center  justify-content-space-between flex-col'
        >
          <div className='sm:w-40 mt-10 sm:mt-10 items-center md:mr-10 sm:text-right text-center'>
            <h1 className='text-white  font-[400] text-[35px]'>
              Real-time Weather Application
            </h1>
            <button className='text-white text-[8px] border-[0.5px] p-1 pl-5 pr-5 rounded-[100px]'>
              <a
                target='_blank'
                href='https://weathe-app-by-toseef.vercel.app/'
              >
                Learn More
              </a>
            </button>
          </div>
          <div className='rounded-lg sm:mt-10  pt-5 sm:ml-[5vw]'>
            <img
              src={weatherApp}
              width={350}
              className='rounded-lg project-image '
              alt=''
            />
          </div>
        </div>
        <div
          data-aos='fade-up'
          className='flex sm:flex-row justify-center items-center justify-content-space-between flex-col'
        >
          <div className='sm:w-40 mt-10 sm:mt-10 md:mr-10 sm:text-right text-center'>
            <h1 className='text-white  font-[400] text-[35px]'>
              Currency Converter
            </h1>
            <button className='text-white text-[8px] border-[0.5px] p-1 pl-5 pr-5 rounded-[100px]'>
              <a
                href='https://my-currency-exchanger-18.vercel.app/'
                target='_blank'
              >
                Learn More
              </a>
            </button>
          </div>
          <div className='rounded-lg sm:mt-10  pt-5 sm:ml-[5vw]'>
            <img
              src={currencyE}
              width={350}
              className='rounded-lg project-image '
              alt=''
            />
          </div>
        </div>
        <div
          data-aos='fade-up'
          className='flex sm:flex-row justify-center items-center justify-content-space-between flex-col'
        >
          <div className='sm:w-40 mt-10 sm:mt-10 md:mr-10 sm:text-right text-center'>
            <h1 className='text-white  font-[400] text-[35px]'>News Website</h1>
            <button className='text-white text-[8px] border-[0.5px] p-1 pl-5 pr-5 rounded-[100px]'>
              <a href=''>Learn More</a>
            </button>
          </div>
          <div className='rounded-lg sm:mt-10  pt-5 sm:ml-[5vw]'>
            <img
              src={News}
              width={350}
              className='rounded-lg project-image '
              alt=''
            />
          </div>
        </div>
        <div
          data-aos='fade-up'
          className='flex sm:flex-row pb-14 justify-center items-center justify-content-space-between flex-col'
        >
          <div className='sm:w-40 mt-10 sm:mt-10 md:mr-10 sm:text-right text-center'>
            <h1 className='text-white  font-[400] text-[35px]'>
              Ecommerce Store
            </h1>
            <button className='text-white text-[8px] border-[0.5px] p-1 pl-5 pr-5 rounded-[100px]'>
              <a href=''>Learn More</a>
            </button>
          </div>
          <div className='rounded-lg sm:mt-10  pt-5 sm:ml-[5vw]'>
            <img
              src={Ecommerce}
              width={350}
              className='rounded-lg project-image '
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
}
