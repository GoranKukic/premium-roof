import { useRef, useState, useEffect } from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import Image from 'next/image';
import BeforeImage from '../../public/images/before.webp';
import AfterImage from '../../public/images/after.webp';
import Dot from '../../public/images/dot.svg';
import Arrow from '../../public/images/before-after-arrow.svg';
import Pointer from '../../public/images/pointer.svg';

const BeforeAndAfterSlider = () => {
  const FIRST_IMAGE = {
    imageUrl: AfterImage.src,
    alt: 'After',
  };
  const SECOND_IMAGE = {
    imageUrl: BeforeImage.src,
    alt: 'Before',
  };

  const delimiterIconStyles = {
    width: '48px',
    height: '48px',
    backgroundSize: 'cover',
    borderRadius: '50%',
    marginTop: '-24px',
    marginLeft: '-24px',
    background: ` #1A8CCC url(${Pointer.src}) no-repeat center`,
    position: 'absolute',
    top: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  };

  return (
    <div className="max-w-[557px] w-full max-h-[557px] h-full relative">
      <div className="absolute right-0 top-[-1px] z-10">
        <svg
          width="67"
          height="63"
          viewBox="0 0 67 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M66.3863 0.792969H0.212891L66.3863 62.9699V0.792969Z"
            fill="#F6F6F6"
          />
        </svg>
      </div>
      <div className="absolute left-[-50px] top-[-23px] hidden md:block">
        <Image src={Arrow} alt="Arrow" />
      </div>
      <div className="absolute top-[-35px] left-0 flex gap-[6px] flex items-center">
        <Image src={Dot} alt="Dot" className="w-[5px] h-[5px]"></Image>
        <Image
          src={Dot}
          alt="Dot"
          className="w-[5px] h-[5px] opacity-60"
        ></Image>
        <Image
          src={Dot}
          alt="Dot"
          className="w-[5px] h-[5px] opacity-30"
        ></Image>
        <p className="ml-[2px] text-[12px] xs:text-[16px] font-normal text-black font-['Prata'] leadeing-[155%]">
          Prevuci lijevo-desno
        </p>
      </div>
      <ReactBeforeSliderComponent
        firstImage={FIRST_IMAGE}
        secondImage={SECOND_IMAGE}
        delimiterIconStyles={delimiterIconStyles}
        // onChangePercentPosition={true}
        // onclick={calculateX}
      />
      <div className="absolute bottom-[-35px] left-0 flex gap-[6px] flex items-center">
        <Image src={Dot} alt="Dot" className="w-[5px] h-[5px]"></Image>
        <Image
          src={Dot}
          alt="Dot"
          className="w-[5px] h-[5px] opacity-60"
        ></Image>
        <Image
          src={Dot}
          alt="Dot"
          className="w-[5px] h-[5px] opacity-30"
        ></Image>
        <p className="ml-[2px] text-[12px] xs:text-[16px] font-normal text-black font-['Prata'] leadeing-[155%]">
          Prije i poslije čišćenja bazena
        </p>
      </div>
    </div>
  );
};

export default BeforeAndAfterSlider;
