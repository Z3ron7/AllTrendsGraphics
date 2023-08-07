import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, Events, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [scrolling, setScrolling] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    // Add event listener to track scroll position
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSetActiveLink = (to) => {
    setActiveLink(to);
  };

  useEffect(() => {
    // Scroll event listener to set active link based on scroll position
    Events.scrollEvent.register("begin", (to, element) => {
      handleSetActiveLink(to);
    });

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div
      className={`sticky top-0 z-50 flex justify-between items-center bg-black h-20 w-full mx-auto px-4 transition-all ${
        scrolling ? "bg-gray-600 text-white" : ""
      }`}
    >
      <h1 className="w-full text-3xl font-bold text-[#00df9a] cursor-pointer" onClick={scrollToTop}>
        REACT.
      </h1>
      <ul className="hidden md:flex">
        <Link
          activeClass="text-green-500"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          onSetActive={() => handleSetActiveLink("home")}
          className={`p-4 cursor-pointer ${
            activeLink === "home" ? "text-green-500" : "text-white"
          } hover:text-green-500`}
        >
          Home
        </Link>

        <Link
          activeClass="text-green-500"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          onSetActive={() => handleSetActiveLink("about")}
          className={`p-4 cursor-pointer ${
            activeLink === "about" ? "text-green-500" : "text-white"
          } hover:text-green-500`}
        >
          About
        </Link>

        <Link
          activeClass="text-green-500"
          to="services"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          onSetActive={() => handleSetActiveLink("services")}
          className={`p-4 cursor-pointer ${
            activeLink === "services" ? "text-green-500" : "text-white"
          } hover:text-green-500`}
        >
          Services
        </Link>

        <Link
          activeClass="text-green-500"
          to="resources"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          onSetActive={() => handleSetActiveLink("resources")}
          className={`p-4 cursor-pointer ${
            activeLink === "resources" ? "text-green-500" : "text-white"
          } hover:text-green-500`}
        >
          Resources
        </Link>

        <Link
          activeClass="text-green-500"
          to="contacts"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          onSetActive={() => handleSetActiveLink("contacts")}
          className={`p-4 cursor-pointer ${
            activeLink === "contacts" ? "text-green-500" : "text-white"
          } hover:text-green-500`}
        >
          Contacts
        </Link>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#f8f8f8] ease-in-out duration-500 flex flex-col"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          className="p-4 border-b border-gray-600 w-100 cursor-pointer text-black hover:text-[#00df9a] transition-colors duration-300"
          activeClass="text-[#00df9a] font-bold"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="p-4 border-b border-gray-600 w-100 cursor-pointer text-black hover:text-[#00df9a] transition-colors duration-300"
          activeClass="text-[#00df9a] font-bold"
        >
          About
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={500}
          offset={-70}
          className="p-4 border-b border-gray-600 w-100 cursor-pointer text-black hover:text-[#00df9a] transition-colors duration-300"
          activeClass="text-[#00df9a] font-bold"
        >
          Services
        </Link>
        <Link
          to="resources"
          smooth={true}
          duration={500}
          offset={-70}
          className="p-4 border-b border-gray-600 w-100 cursor-pointer text-black hover:text-[#00df9a] transition-colors duration-300"
          activeClass="text-[#00df9a] font-bold"
        >
          Resources
        </Link>
        <Link
          to="contacts"
          smooth={true}
          duration={500}
          offset={-70}
          className="p-4 border-b border-gray-600 w-100 cursor-pointer text-black hover:text-[#00df9a] transition-colors duration-300"
          activeClass="text-[#00df9a] font-bold"
        >
          Contacts
        </Link>
      </ul>
    </div>
  );
};

export default Header;
