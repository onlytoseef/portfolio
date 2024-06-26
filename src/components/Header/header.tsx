import React, { useState, useEffect } from 'react';
import Toseef from '../../assets/images/Logo.svg';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrolled ? 'bg-red-500 shadow-lg' : 'bg-transparent'
      } sm:px-8 text-white flex justify-between items-center relative sticky top-0 z-50 transition-all duration-300`}
    >
      <div className='flex items-center'>
        <img src={Toseef} className='logo-img' alt='Brand Logo' width={70} />
      </div>

      <button
        onClick={toggleMenu}
        className='lg:hidden absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none text-white'
      >
        {menuOpen ? (
          <svg
            className='w-6 h-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        ) : (
          <svg
            className='w-6 h-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </svg>
        )}
      </button>

      <nav
        className={`lg:flex absolute top-full ml-[250px] lg:static lg:flex-row bg-gray-800 lg:bg-transparent lg:justify-end lg:space-x-4 ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className='lg:flex items-center space-x-4'>
          <li>
            <a href='#about' className='hover:text-vermili'>
              About
            </a>
          </li>
          <li>
            <a href='#services' className='hover:text-vermili'>
              Services
            </a>
          </li>
          <li>
            <a href='#projects' className='hover:text-vermili'>
              Portfolio
            </a>
          </li>
          <li>
            <a href='#contact' className='hover:text-vermili'>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
