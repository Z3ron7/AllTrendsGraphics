import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Website from '../assets/website.jpg';
import Book from '../assets/book.jpeg';
import Photo from '../assets/photo.jpg';
import Curve from '../assets/curve22.png';
import ServicesItem from './ServicesItem';

const Services = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleSectionClick = (section) => {
    if (activeSection === section) {
      setActiveSection('');
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className='w-full bg-white' id='services'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 py-8'>
        <Link
          to='website-section'
          spy={true}
          smooth={true}
          className='w-full shadow-xl flex flex-col rounded-lg hover:scale-105 duration-300 cursor-pointer'
          onClick={() => handleSectionClick('website')}
        >
          <img className='w-32 sm:w-40 h-3/5 mx-auto bg-transparent' src={Website} alt="/" />
          <h1 className='text-lg sm:text-xl font-bold text-center py-2 sm:py-4'>Website</h1>
        </Link>
        <Link
          to='book-section'
          spy={true}
          smooth={true}
          className='w-full shadow-xl bg-gray-100 flex flex-col p-2 sm:p-4 rounded-lg hover:scale-105 duration-300 cursor-pointer'
          onClick={() => handleSectionClick('book')}
        >
          <img className='w-32 sm:w-40 h-3/5 mx-auto bg-transparent' src={Book} alt="/" />
          <h1 className='text-lg sm:text-xl font-bold text-center py-2 sm:py-4'>Book</h1>
        </Link>
        <Link
          to='photo-section'
          spy={true}
          smooth={true}
          className='w-full shadow-xl flex flex-col rounded-lg hover:scale-105 duration-300 cursor-pointer'
          onClick={() => handleSectionClick('photo')}
        >
          <img className='w-32 sm:w-40 h-3/5 mx-auto bg-transparent' src={Photo} alt="/" />
          <h1 className='text-lg sm:text-xl font-bold text-center py-2 sm:py-4'>Photo</h1>
        </Link>
      </div>
      {activeSection && <ServicesItem activeSection={activeSection} />}
      <img src={Curve} alt="Curve" className="w-full h-auto py-0" id="about" />
    </div>
  );
};

export default Services;
