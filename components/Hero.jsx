import { useEffect } from 'react';
import CtaButton from './UI/CtaButton';
import { Link } from 'react-scroll/modules';
import Image from 'next/image';
import HeroInsta from '../public/images/hero-insta.webp';
import HeadlineUnderline from './UI/HeadlineUnderline';
import Badge from '../public/images/hero-badge.svg';
import InstaBigIcon from '../public/images/insta-big.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease-in-sine' });
  }, []);

  return (
    <div className="h-[100vh] flex flex-col relative overflow-hidden">
      <div className="absolute w-[552px] h-[473px] top-[0px] left-[0px] bg-cover bg-heroBg1 -z-50 overflow-hidden"></div>
      <div className=" w-full md:h-[473px] relative bg-transparent">
        <div
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          className="max-w-[700px] mx-auto  mt-[100px] xs:mt-[120px] mb-[80px] md:mb-[100px] md:mb-[50px] px-4"
        >
          <div>
            <h1
              className={`text-[24px] md:text-[52px] text-center font-normal leading-[155%] logo-text text-black font-['Prata'] whitespace-normal`}
            >
              Build your dream roof with<span> </span>
              <HeadlineUnderline underlinedText={`Premium Roof\u00A0`} />
            </h1>
          </div>
          <div className="mt-[12px]">
            <p className="text-center text-gray text-[16px] font-['Open Sans'] font-normal leading-[167%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
              tempus, dictum mauris leo amet, elit. Dictumst morbi sed dignissim
              faucibus gravida.
            </p>
          </div>
          <div className="mt-[30px] flex justify-center align-center">
            <Link
              href="#"
              to="create-own-pool"
              activeClass="active"
              smooth={true}
              offset={-80}
              duration={500}
            >
              <CtaButton />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="h-auto md:min-h-[500px] h-full bg-hero-bg-2 bg-cover bg-center flex-end relative flex 
      items-end"
      >
        <div
          className="absolute left-[12%] top-[-88px]"
          data-aos="flip-left"
          data-aos-delay="500"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <Image src={Badge} alt="Badge" priority />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          className="max-w-[1172px] w-full h-full px-4 mx-auto flex flex-col md:flex-row md:items-end items-center justify-center"
        >
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            className="md:mt-[0] bg-solid-black md:w-full w-[70%] max-w-[420px] md:max-w-[unset] md:mb-[50px] flex justify-center md:justify-evenly items-center text-white p-4 md:p-[32px] gap-[20px] flex-wrap md:flex-nowrap"
          >
            <div className="flex flex-row gap-[10px] md:gap-[20px] flex-wrap md:flex-nowrap justify-center md:justify-evenly">
              <p>
                <span className="font-['Prata'] font-normal text-[16px] sm:text-[24px] md:text-[42px] leadeing-[155%]">
                  1000+
                </span>
              </p>
              <p className="font-['Open Sans'] font-normal text-[16px] leadeing-[167%] flex justify-content items-center gap-[20px] text-center">
                Zadovoljnih Klijenata
              </p>
            </div>
            <div className="flex flex-row gap-[10px] md:gap-[20px] flex-wrap md:flex-nowrap justify-center md:justify-evenly">
              <p>
                <span className="font-['Prata'] font-normal text-[16px] sm:text-[24px] md:text-[42px] leadeing-[155%]">
                  10+
                </span>
              </p>
              <p className="font-['Open Sans'] font-normal text-[16px] leadeing-[167%] flex justify-content items-center gap-[20px]">
                Godina iskustva
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            className="mb-none md:mb-[20px] w-[70%] max-w-[420px] md:min-w-[250px] "
          >
            <div className="relative">
              <Image
                src={HeroInsta}
                alt="Instagram image"
                priority={42}
                className="w-full relative after:content-[url('/images/insta-icon.svg')] after:absolute after:w-[36px] after:h-[36px] after:top-[50%] after:left-[50%] z-99"
              />
              <div className="absolute left-[0] right-[0] top-[0] bottom-[0] my-auto flex items-center justify-center overflow-hidden">
                <a
                  href="https://www.instagram.com/premiumspabazeni"
                  target="_blank"
                  rel="noreferrer"
                  className="transform transition duration-500 hover:scale-110"
                >
                  <div className="w-[70px] sm:w-[124px] h-[70px] sm:h-[124px] flex items-center justify-center border border-solid border-white rounded-full">
                    <Image src={InstaBigIcon} alt="Instagram" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
