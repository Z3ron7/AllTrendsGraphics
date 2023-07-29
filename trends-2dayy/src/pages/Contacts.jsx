import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="md:px-10 px-7 my-5" id="contacts">
      <div className="flex flex-col md:flex-row">
        {/* text and icons */}
        <div className="md:w-1/2">
        <h1 className="text-primary font-semibold text-3xl mt-16">
      Connect with me:
      </h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
      Satisfied with me? Please contact me
      </p>
      {/* social icons */}
      <div className="flex ">
        <a href="https://www.linkedin.com/in/joshua-harris-321a24190/" target="_blank" rel="noreferrer">
        <FaFacebookSquare size={30} />
        </a>
        <a className="ml-4 px-7" href="https://github.com/joshua-harris" target="_blank" rel="noreferrer">
        <FaInstagram size={30} />
        </a>
        <a className="ml-4" href="mailto:anpch@example.com" target="_blank" rel="noreferrer">
        <FaDribbbleSquare size={30} />
        </a>
        <a className="ml-4 px-7" href="mailto:anpch@example.com" target="_blank" rel="noreferrer">
        <FaTwitterSquare size={30} />
        </a>
      </div>
        </div>
        {/* form */}
        <div className="md:w-1/2">
            <p className="mt-16 text-black text-3xl font-semibold mb-6">Get in Touch!</p>
            <form>
                <input type="text" name="name" placeholder="Name:" className="bg-[#4b4949] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded "/>
                <input type="email" name="email" placeholder="Email:" className="bg-[#716e6e] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3"/>
                <textarea name="message" id="message" cols="54" rows="4" className="bg-[#6d6b6b] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-2" placeholder="Message:"></textarea>
                <button className="btn transition-all duration-500 bg-primary py-2 px-12 rounded text-white hover:bg-white hover:text-primary block">
                  Send
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;