import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Website from '../assets/website.jpg';
import Book from '../assets/book.jpeg';
import Photo from '../assets/photo.jpg';
import Curve from '../assets/curve22.png';
import ServicesItem from './ServicesItem';

const Services = () => {
  const [activeSection, setActiveSection] = useState(''); // Track active section

  const handleSectionClick = (section) => {
    if (activeSection === section) {
      // If the same link is clicked again, close the ServicesItem
      setActiveSection('');
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className='w-full bg-white' id='services'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-0 py-8'>
        <Link
          to='website-section'
          spy={true}
          smooth={true}
          className='w-3/4 h-4/5 shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer'
          onClick={() => handleSectionClick('website')}
        >
          <img className='w-40 h-3/5 mx-auto bg-transparent' src={Website} alt="/" />
          <h1 className='text-2xl font-bold text-center py-4'>Website</h1>
        </Link>
        <Link
          to='book-section'
          spy={true}
          smooth={true}
          className='w-4/5 shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-2 rounded-lg hover:scale-105 duration-300 cursor-pointer'
          onClick={() => handleSectionClick('book')}
        >
          <img className='w-40 h-3/5 mx-auto bg-transparent' src={Book} alt="/" />
          <h1 className='text-2xl font-bold text-center py-4'>Book</h1>
        </Link>
        <Link
          to='photo-section'
          spy={true}
          smooth={true}
          className='w-3/4 h-4/5 shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer'
          onClick={() => handleSectionClick('photo')}
        >
          <img className='w-40 h-3/5 mx-auto bg-transparent' src={Photo} alt="/" />
          <h1 className='text-2xl font-bold text-center py-4'>Photo</h1>
        </Link>
      </div>
      {/* Conditional rendering for ServicesItem */}
      {activeSection && <ServicesItem activeSection={activeSection} />}
      <img src={Curve} alt="Curve" className="w-full h-auto py-0" id="about" />
    </div>
  );
};

export default Services;
