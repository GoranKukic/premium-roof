import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll/modules';
// import Image from 'next/image';
// import ChevronDown from '../public/images/ChevronDown.svg';
import CtaButton from '../UI/CtaButton';
import Logo from '../UI/Logo';
import NavLinks from '../UI/NavLinks';
import NavLinksMobile from '../UI/NavLinksMobile';

const navLinksArray = [
  {
    to: 'roof-configurator',
    title: 'Roof Configurator',
  },
  {
    to: 'roof-maintenance',
    title: 'Roof Maintainance',
  },
  {
    to: 'about-us',
    title: 'About Us',
  },
  {
    to: 'why-we',
    title: 'Why We?',
  },
  {
    to: 'gallery',
    title: 'Gallery',
  },
];

const MobileNav = ({ open, setOpen }) => {
  return (
    <div
      className={`absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-fill h-screen bg-white transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md  text-center`}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div className="flex flex-col">
        {navLinksArray.map((linkName) => (
          <NavLinksMobile
            to={linkName.to}
            key={Math.random()}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <p className="relative group cursor-pointer">
              <span>{linkName.title}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-blue transition-all group-hover:w-full"></span>
            </p>
          </NavLinksMobile>
        ))}

        <Link
          href="#"
          to="create-own-roof"
          smooth={true}
          offset={-80}
          duration={500}
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          <CtaButton />
        </Link>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false); // state for adding background color to navbar

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeBackground);
  }

  return (
    <nav
      className={`fixed z-50 inset-x-0 top-0 left-0 right-0 flex filter px-4 py-4 h-20 items-center  transition-all duration-500 ease-in-out ${
        navbar ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-full justify-between max-w-[1140px] w-full mx-auto my-0 flex flex-column">
        <div className="flex items-center">
          <Link
            href="#"
            to="hero"
            activeClass="active"
            smooth={true}
            duration={500}
          >
            <Logo />
          </Link>
        </div>
        <div className="hidden lg:flex w-[540px] justify-between items-center">
          {navLinksArray.map((linkName) => (
            <NavLinks to={linkName.to} key={Math.random()}>
              <p className="relative group cursor-pointer">
                <span>{linkName.title}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-blue transition-all group-hover:w-full"></span>
              </p>
            </NavLinks>
          ))}
        </div>
        <div className="hidden lg:flex items-center">
          <Link
            href="#"
            to="create-own-roof"
            activeClass="active"
            smooth={true}
            offset={-80}
            duration={500}
          >
            <CtaButton />
          </Link>
        </div>
        <div className=" flex justify-end items-center lg:hidden">
          <div
            className="z-50 flex relative w-8 h-8 flex-col justify-between items-center "
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? 'rotate-45 translate-y-3.5' : ''
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
                open ? 'w-0' : 'w-full'
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? '-rotate-45 -translate-y-3.5' : ''
              }`}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
