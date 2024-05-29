import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { RiWhatsappFill } from 'react-icons/ri';
import profileImage from '../../assets/images/profile.png';

export default function about() {
  return (
    <div>
      <div id='about' className='about-section text-center'>
        <div
          data-aos='fade-right'
          className='flex sm:flex-row text-center items-center justify-center sm:gap-[20vw] lg:gap-[12vw] flex-col'
        >
          <div className='about-text sm:mt-0 mt-[11vh] text-white font-thin text-[12px]'>
            <p className='sm:text-left'>
              __________________________ About Me !
            </p>
            <div className='flex sm:flex-row flex-col '>
              <h1 className='sm:text-[50px] text-[20px] sm:text-left '>
                Hi I'm,
              </h1>
              <div className='typewriter'>
                <h1 className='text-[50px] text-vermili font-[400]'>
                  Toseef Rana
                </h1>
              </div>
            </div>
            <p className='sm:w-[330px] sm:text-left sm:text-[14px] w-[80vw] '>
              ! I'm the digital ninja who can turn coffee into code and bugs
              into features faster than you can say "syntax error". With my
              keyboard as my trusty sword and my screen as my canvas, I'm here
              to make your digital dreams a reality. <br /> <br /> Let's turn
              ideas into pixels and bring magic to the web,
              <span className='font-bold'> “One line of code at a time!”</span>
            </p>
            <br />
            <br />
            <p className=' flex text-center flex-row '>
              Find Me On:
              <p className='flex flex-row justify-center items-center space-x-2'>
                <a href='http://wa.me/+923043508991' target='blank'>
                  <RiWhatsappFill
                    className='hover:fill-vermili ml-2'
                    size={13}
                  />
                </a>
                <a href='https://www.facebook.com/devtoseef' target='blank'>
                  <FaFacebook className='hover:fill-vermili' size={13} />{' '}
                </a>
                <a href='https://www.instagram.com/devtoseef/' target='blank'>
                  <AiFillInstagram className='hover:fill-vermili' size={13} />
                </a>
                <a href='https://www.linkedin.com/in/devtoseef/' target='blank'>
                  {' '}
                  <FaLinkedin size={13} className='hover:fill-vermili' />
                </a>
                <a href='https://github.com/onlytoseef' target='blank'>
                  <FaGithub size={13} className='hover:fill-vermili' />
                </a>
              </p>
            </p>
          </div>
          <div data-aos='zoom-in' className='about-img sm:mt-0 mt-[-90]'>
            <img src={profileImage} className=' sm:w-[26vw] w-[16em]' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
