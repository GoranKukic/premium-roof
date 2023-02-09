import React from 'react';
import { Link } from 'react-scroll/modules';
import CtaButton from '../UI/CtaButton';
import NavLinksMobile from './NavLinksMobile';
import { useRouter } from 'next/router';
import en from '../../locales/en';
import sr from '../../locales/sr';
import dynamic from "next/dynamic";

const LanguageSwitcher = dynamic(() => import("../Navbar/LanguageSwitcher"), { ssr: false });

const MobileNav = ({ open, setOpen }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : sr;

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
        <NavLinksMobile
          to={'roof-configurator'}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <p className="relative group cursor-pointer">
            <span>{t.navRoofConfigurator}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-blue transition-all group-hover:w-full"></span>
          </p>
        </NavLinksMobile>
        <NavLinksMobile
          to={'roof-maintenance'}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <p className="relative group cursor-pointer">
            <span>{t.navRoofMaintainance}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-blue transition-all group-hover:w-full"></span>
          </p>
        </NavLinksMobile>
        <NavLinksMobile
          to={'about-us'}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <p className="relative group cursor-pointer">
            <span>{t.navAboutUs}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-blue transition-all group-hover:w-full"></span>
          </p>
        </NavLinksMobile>
        <NavLinksMobile
          to={'why-we'}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <p className="relative group cursor-pointer">
            <span>{t.navWhyWe}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-blue transition-all group-hover:w-full"></span>
          </p>
        </NavLinksMobile>
        <NavLinksMobile
          to={'gallery'}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <p className="relative group cursor-pointer">
            <span>{t.navGallery}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-blue transition-all group-hover:w-full"></span>
          </p>
        </NavLinksMobile>

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
        <div className="flex justify-center items-center  my-4">
        <LanguageSwitcher ariaId="language-switcher-mobile" id="mobile"/>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;