import React from 'react';
import Website from '../assets/website.jpg';
import Book from '../assets/book.jpeg';
import Photo from '../assets/photo.jpg';
import Curve from '../assets/curve22.png'

const Services = () => {
  return (
    <div className='w-full bg-white' id='services'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 py-10'>
          <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-50 mx-auto bg-transparent' src={Website} alt="/" />
              <h1 className='text-2xl font-bold text-center py-4'>Website</h1>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-50 mx-auto bg-transparent' src={Book} alt="/" />
              <h1 className='text-2xl font-bold text-center py-4'>Book</h1>
          </div>
          <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-50 mx-auto bg-transparent' src={Photo} alt="/" />
              <h1 className='text-2xl font-bold text-center py-4'>Photo</h1>
          </div>
      </div>
      <img src={Curve} alt="Curve" className="w-full h-auto py-0" id="about" />
    </div>
  );
};

export default Services;
