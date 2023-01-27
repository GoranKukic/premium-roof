import { useEffect } from 'react';
import CtaButton from '../UI/CtaButton';
import { Link } from 'react-scroll/modules';
import Image from 'next/image';
import HeadlineUnderline from '../UI/HeadlineUnderline';
import Badge from '../../public/images/hero-badge.png';
import UpperBg from '../../public/images/heroUpperBg.webp';
import LowerBg from '../../public/images/heroLowerBg.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useRouter } from 'next/router';
import en from '../../locales/en';
import sr from '../../locales/sr';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease-in-sine' });
  }, []);

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : sr;

  return (
    <div
      id="hero"
      className="h-[100vh] flex flex-col relative overflow-hidden relative"
    >
      <Image
        src={UpperBg}
        alt="Hero backgorund"
        fill
        className="object-contain object-top object-left max-w-[552px] max-h-[473px] w-auto h-auto absolute -z-50 overflow-hidden"
        placeholder="blur"
        blurDataURL={'../public/images/heroUpperBg.webp'}
      />
      <div className="h-[75%] xs:h-[65%]  ms:h-[50%] relative w-full bg-transparent flex justify-center">
        <div
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          className="max-w-[700px] mx-auto my-auto px-4"
          // className="max-w-[700px] mx-auto  mt-[100px] xs:mt-[120px] mb-[80px] md:mb-[100px] md:mb-[50px] px-4"
        >
          <div>
            <h1
              className={`text-[24px] md:text-[52px] text-center font-normal leading-[155%] logo-text text-black font-['Prata'] whitespace-normal`}
            >
              {/* Build your dream roof with<span> </span> */}
              {t.heroTitle}
              <span> </span>
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
              to="create-own-roof"
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
      <div className="h-[25%] xs:h-[35%] ms:h-[50%] flex-end relative flex items-end">
        <Image
          src={LowerBg}
          alt="Hero backgorund"
          fill
          sizes="(min-width: 768px) 100vw, 50vw"
          className="object-cover object-center w-auto h-auto absolute top-[0px] left-[0px] -z-50 overflow-hidden"
          placeholder="blur"
          blurDataURL={'../public/images/heroLowerBg.jpg'}
        />
        <div
          className="absolute left-[12%] top-[-88px] hidden xs:block"
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
          className="max-w-[1172px] w-full h-full px-4 mx-auto flex flex-row items-end  justify-center"
        >
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            className="md:mt-[0] bg-solid-black max-w-[720px] md:max-w-[unset] my-auto xs:mb-[50px] flex justify-center md:justify-evenly items-center text-white p-4 md:p-[32px] gap-[20px] flex-wrap md:flex-nowrap"
          >
            <div className="flex flex-row gap-[10px] md:gap-[20px] flex-wrap md:flex-nowrap justify-center md:justify-evenly">
              <p>
                <span className="font-['Prata'] font-normal text-[16px] sm:text-[24px] md:text-[42px] leadeing-[155%]">
                  1000+
                </span>
              </p>
              <p className="font-['Open Sans'] font-normal text-[16px] leadeing-[167%] flex justify-content items-center gap-[20px] text-center">
                {t.heroUsers}
              </p>
            </div>
            <div className="flex flex-row gap-[10px] md:gap-[20px] flex-wrap md:flex-nowrap justify-center md:justify-evenly">
              <p>
                <span className="font-['Prata'] font-normal text-[16px] sm:text-[24px] md:text-[42px] leadeing-[155%]">
                  10+
                </span>
              </p>
              <p className="font-['Open Sans'] font-normal text-[16px] leadeing-[167%] flex justify-content items-center gap-[20px]">
                {t.heroExpirience}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
