import React from 'react';
import Curve from '../assets/curve.png'
import Typed from 'react-typed';
// import heroVid from '../assets/video.mp4';

const Home = () => {
  return (
    <div className='bg-black' id="home">
      
      <div className='md:px-10 px-7 py-2 md:grid-cols-2'>
        <div className='flex flex-col md:flex-row items-center justify-between w-full'>
          {/* image & content */}
          {/* text */}
          <div className='text-white w-full md:w-[600px]'>
            <h6 className='text-3xl mt-12'>Hello, dear customer</h6>
            <div className='flex'>
            <h1 className='font-semibold md:text-5xl my-4 text-3xl'>We accept </h1>
            <Typed className='font-semibold md:text-4xl my-6 text-xl pl-3'
            strings={['Website template', 'Book cover', 'Photo editing' ]}
            typeSpeed={40}
            backSpeed={50}
            loop />
            </div>
            <p className='md:w-120 text-xl'>Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web experiences for end-users.</p>
            <div className='mt-5'>
              <button className='btn outline duration-500 bg-primary py-2 px-4 rounded text-white hover:bg-white hover:text-black'>Get started</button>
            </div>
          </div>
          {/* img */}
          <div className='order-first md:order-last'>
          {/* <video
        className=' h-auto w-[750px] object-cover object-center'
        src={heroVid}
        autoPlay
        loop
        muted
      /> */}
          </div>
        </div>
      </div>
      <img src={Curve} alt="Curve" className="w-full h-auto py-0" />
    </div>
  );
};

export default Home;