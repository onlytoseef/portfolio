import scrolling from '../../assets/images/scrolling.svg';
import { TbWorldCode } from 'react-icons/tb';
import { ImAndroid } from 'react-icons/im';
import { MdOutlineMarkChatUnread } from 'react-icons/md';

export default function services() {
  return (
    <div>
      <div className='my-services' id='services'>
        <div className='flex sm:flex-row sm:pt-[9vh] pt-[9vh] flex-col text-center sm:text-balance sm:gap-[1vw] lg:gap-[18vw] justify-center items-center'>
          <div data-aos='fade-right' className='flex flex-col '>
            <p className='text-[12px] text-white '>
              _____________________My Services
            </p>
            <p className='text-white sm:text-left text-center font-[400] sm:text-[50px] p-0 text-[40px] '>
              What Can <br /> <span className='text-vermili'>I Do ?</span>
            </p>
          </div>
          <div
            data-aos='fade-left'
            className='flex sm:flex-row items-center flex-col'
          >
            <p className='  text-white sm:text-right text-center  text-[10px]   w-[320px]'>
              Lorem ipsum dolor sit amet consectetur. Tincidunt sed semper
              gravida amet pretium nulla eget feugiat quam. Libero risus
              dictumst dolor nunc aliquet.
            </p>
            <button
              title="Let's Talk"
              className='bg-greyWhite hover:bg-vermili cursor-pointer h-12 sm:mt-0 mt-[4vh] rounded-lg sm:ml-7  w-[200px]'
            >
              <p className='text-vermili hover:text-white font-bold'>
                Let's Talk !
              </p>
            </button>
          </div>
        </div>
        <div className='card-service mt-12'>
          <div className='flex sm:flex-row  text-center justify-around items-center flex-col'>
            <div data-aos='flip-up' className='sm:block hidden  justify-left'>
              <img src={scrolling} alt='' width={30} />
            </div>
            <div className='flex gap-4 flex-col sm:flex-row'>
              <div
                data-aos='fade-up'
                className='service-card  bg-cardBg justify-right sm:h-[35vh] h-[30vh] w-[80vw] rounded-lg sm:mt-0 mt-12 sm:w-[35vh] flex flex-col justify-center items-center'
              >
                <TbWorldCode color='#F54A05' size={40} />

                <p className='text-white font-semibold p-2 '>Web Development</p>
                <p className='text-[12px] text-white p-2 font-thin'>
                  My commitment is to provide very contemporary solutions to
                  website development. So if you need a perfect team, give me a
                  call or meet me at Social Platform.
                </p>
              </div>
              <div
                data-aos='fade-up'
                className='service-card bg-cardBg p-4 sm:h-[35vh] h-[30vh] w-[80vw] rounded-lg  mt- sm:w-[35vh] flex flex-col justify-center items-center'
              >
                <ImAndroid color='#F54A05' size={40} />
                <p className='text-white font-semibold p-2 '>App Development</p>
                <p className='text-[12px] text-white p-2 font-thin'>
                  Mobile is the next big thing to grow your business. I provide
                  quality iOS, Android and Hybrid mobile development services
                  all under one roof.
                </p>
              </div>
              <div
                data-aos='fade-up'
                className='service-card sm:mb-9vh mb-[9vh] bg-cardBg  sm:h-[35vh] h-[30vh] w-[80vw] rounded-lg  mt- sm:w-[35vh] flex flex-col justify-center items-center'
              >
                <MdOutlineMarkChatUnread color='#F54A05' size={40} />

                <p className='text-white font-semibold p-2 '>Consulation</p>
                <p className='text-[12px] text-white p-2 font-thin'>
                  Contact me for free consultation to start your IT business or
                  if you need any help regarding software solutions. Feel free
                  to contact me.Im here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
