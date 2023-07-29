import React from 'react';
import Curve from '../assets/curve.png'

const Home = () => {
  return (
    <div className='bg-[#1a1a29]' id="home">
      <div className='md:px-10 px-7 py-2 md:grid-cols-2'>
        <div className='flex flex-col md:flex-row items-center justify-between w-full'>
          {/* image & content */}
          {/* text */}
          <div className='text-white w-full md:w-[600px]'>
            <h6 className='text-3xl mt-12'>Hello, I'm</h6>
            <h1 className='font-semibold md:text-5xl my-4 text-3xl'>AllTrends</h1>
            <p className='md:w-120 text-xl'>Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web experiences for end-users.</p>
            <div className='mt-5'>
              <button className='btn outline duration-500 bg-primary py-2 px-4 rounded text-white hover:bg-white hover:text-black'>About me</button>
              <button className='btn outline py-1.5 px-6 rounded border-none ml-5 text-white'>Projects</button>
            </div>
          </div>
          {/* img */}
          <div className='order-first md:order-last relative'>
            <img
              alt="nature"
              className="h-auto w-[750px] object-cover object-center"
              src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
            />
          </div>
        </div>
      </div>
      <img src={Curve} alt="Curve" className="w-full h-auto py-0" />
    </div>
  );
};

export default Home;