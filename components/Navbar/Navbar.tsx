import React from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import CtaButton from "../UI/CtaButton";
import Logo from "../UI/Logo";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import { useRouter } from "next/router";
import en from "../../locales/en";
import sr from "../../locales/sr";
import dynamic from "next/dynamic";

const LanguageSwitcher = dynamic(() => import("../Navbar/LanguageSwitcher"), {
  ssr: false,
});

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

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sr;
  const identifier = "language-switcher-1";

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }

  return (
    <nav
      className={`fixed z-50 inset-x-0 top-0 left-0 right-0 flex filter px-4 py-4 h-20 items-center  transition-all duration-500 ease-in-out ${
        navbar ? "bg-white shadow-md" : "bg-transparent"
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
          <NavLinks to={"roof-configurator"}>
            <p className="relative group cursor-pointer">
              <span>{t.navRoofConfigurator}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-blue transition-all group-hover:w-full"></span>
            </p>
          </NavLinks>
          <NavLinks to={"roof-maintenance"}>
            <p className="relative group cursor-pointer">
              <span>{t.navRoofMaintainance}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-blue transition-all group-hover:w-full"></span>
            </p>
          </NavLinks>
          <NavLinks to={"about-us"}>
            <p className="relative group cursor-pointer">
              <span>{t.navAboutUs}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-blue transition-all group-hover:w-full"></span>
            </p>
          </NavLinks>
          <NavLinks to={"why-we"}>
            <p className="relative group cursor-pointer">
              <span>{t.navWhyWe}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-blue transition-all group-hover:w-full"></span>
            </p>
          </NavLinks>
          <NavLinks to={"gallery"}>
            <p className="relative group cursor-pointer">
              <span>{t.navGallery}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-blue transition-all group-hover:w-full"></span>
            </p>
          </NavLinks>
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
        <div className="flex justify-center items-center hidden lg:flex">
          <LanguageSwitcher ariaId="language-switcher-desktop" id="desktop" />
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
                open ? "rotate-45 translate-y-3.5" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
                open ? "w-0" : "w-full"
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-3.5" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
