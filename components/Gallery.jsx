import React, { useState, useEffect, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Headline from './UI/Headline';
import { uuid } from 'uuidv4';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={'slick-next'}
      style={{
        ...style,
        display: 'block',
        opacity: '0.5',
        padding: '0 0 0 10px',
        // ':before': { content: 'none' },
      }}
      onClick={onClick}
    >
      <svg
        width="7"
        height="35"
        viewBox="0 0 7 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="3.7454" cy="3.52128" r="3.01494" fill="white" />
        <circle cx="3.7454" cy="17.5391" r="3.01494" fill="white" />
        <circle cx="3.7454" cy="31.5569" r="3.01494" fill="white" />
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        opacity: '0.5',
        margin: '0 auto 0 0',
        // ':before': { display: 'none' },
      }}
      onClick={onClick}
    >
      <svg
        width="7"
        height="35"
        viewBox="0 0 7 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="3.7454" cy="3.52128" r="3.01494" fill="white" />
        <circle cx="3.7454" cy="17.5391" r="3.01494" fill="white" />
        <circle cx="3.7454" cy="31.5569" r="3.01494" fill="white" />
      </svg>
    </div>
  );
};

const Gallery = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    fade: true,
    asNavFor: '.slider-nav',
  };

  const slider = React.useRef(null);

  const settingsThumbs = {
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px',
  };

  const slidesData = [
    {
      id: 1,
      img: '/images/gallery/roof1.jpg',
    },
    {
      id: 2,
      img: '/images/gallery/roof2.jpg',
    },
    {
      id: 3,
      img: '/images/gallery/roof3.jpg',
    },
    {
      id: 4,
      img: '/images/gallery/roof4.jpg',
    },
    {
      id: 5,
      img: '/images/gallery/roof5.jpg',
    },
    {
      id: 6,
      img: '/images/gallery/roof6.jpg',
    },
    {
      id: 7,
      img: '/images/gallery/roof7.jpg',
    },
    {
      id: 8,
      img: '/images/gallery/roof8.jpg',
    },
    {
      id: 9,
      img: '/images/gallery/roof9.jpg',
    },
    {
      id: 10,
      img: '/images/gallery/roof10.jpg',
    },
  ];

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div
      id="gallery"
      className="bg-solid-black flex flex-col justify-center items-center pb-[10px] mp:pb-[75px] pt-[75px]"
    >
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-duration="1000"
        className="mb-[40px]"
      >
        <Headline
          textPosition={'left'}
          color="white"
          headline="Our Work Gallery"
        />
      </div>
      <div className="w-full">
        <div className="mx-4">
          <div className="w-full mx-auto max-w-[1000px] px-[20px] mp:px-[40px]  mb-0 mp:mb-[50px] relative">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-duration="1000"
              className="relative"
            >
              <div className="absolute right-[-5px] top-[-88px] hidden md:block transform scale-x-[1] z-40">
                <svg
                  width="46"
                  height="97"
                  viewBox="0 0 46 97"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="z-50"
                >
                  <path
                    d="M26.5148 96.5524C26.2402 96.5813 25.9942 96.382 25.9653 96.1074L25.4953 91.632C25.4665 91.3574 25.6657 91.1114 25.9403 91.0825C26.215 91.0537 26.461 91.2529 26.4898 91.5276L26.9076 95.5057L30.8858 95.0879C31.1604 95.0591 31.4064 95.2583 31.4352 95.5329C31.4641 95.8076 31.2648 96.0536 30.9902 96.0824L26.5148 96.5524ZM0.35582 0.965626C13.8323 5.59748 31.3765 15.9208 40.0959 31.88C44.4628 39.8729 46.6111 49.2724 44.926 60.0495C43.242 70.8194 37.7353 82.9313 26.8511 96.3699L26.074 95.7405C36.8798 82.3987 42.2882 70.446 43.938 59.895C45.5867 49.351 43.4873 40.173 39.2183 32.3595C30.666 16.706 13.3856 6.50139 0.0307846 1.91133L0.35582 0.965626Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="absolute -top-[1px] -right-[1px] hidden md:block z-20">
                <svg
                  width="85"
                  height="66"
                  viewBox="0 0 85 66"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M84.7826 0.926758H0.34375L84.7826 65.5011V0.926758Z"
                    fill="#161616"
                  />
                </svg>
              </div>
              <div className="absolute z-10 flex w-[calc(100%-40px)] h-[calc(100%-20px)] border-[1px] border-white top-[10px] right-[20px] bottom-[10px] left-[20px] opacity-80" />
              <Slider
                {...settingsMain}
                asNavFor={nav2}
                ref={(slider) => setSlider1(slider)}
                className="custom-slick"
              >
                {slidesData.map((slide) => (
                  <Image
                    key={uuid}
                    className="slick-slide-image object-cover"
                    src={slide.img}
                    alt="Roof"
                    height={520}
                    width={800}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-duration="1000"
          className="h-[160px] hidden mp:block"
        >
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={(slider) => setSlider2(slider)}
          >
            {slidesData.map((slide) => (
              <div className="slick-slide" key={slide.id}>
                <Image
                  className="slick-slide-image object-cover"
                  src={slide.img}
                  alt="Roof"
                  height={520}
                  width={800}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="mt-[100px]">
        <button
          type="button"
          onClick={openModal}
          data-aos="flip-up"
          data-aos-offset="0"
          data-aos-duration="1000"
          className="flex justify-center items-center h-[55px] w-[180px] text-white text-[16px] font-['Open Sans'] font-semibold
          box-border border-2 border-white border-solid rounded-sm leading-[155%] cursor-pointer bg-solid-black 
          transition-colors duration-700 transform hover:bg-white hover:text-black active:bg-gray"
        >
          Gallery version 2
        </button>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-600"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-600"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-300"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-[1140px] transform overflow-hidden rounded-2xl bg-white pt-6 px-6 mp:px-10 pb-10 text-left align-middle shadow-xl transition-all">
                    <div className="mt-4 flex flex-col">
                      <button
                        type="button"
                        className="inline-flex justify-end rounded-md border border-transparent bg-blue-100 px-4 pt-0 pb-[24px] 
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 tracking-[.03em] font-['Open Sans'] font-semibold uppercase text-[16px] leadeing-[167%] hover:text-blue "
                        onClick={closeModal}
                      >
                        Close
                      </button>
                      <div className="grid grid-cols-1 mp:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-row-dense">
                        <div className="mp:col-span-2 bg-white rounded-lg overflow-hidden aspect-square mp:aspect-[2/0.98] relative">
                          <Image
                            key={uuid}
                            src={slidesData[0].img}
                            alt="Roof"
                            className="w-auto h-auto object-cover"
                            fill
                            sizes="(max-width: 960px) 100vw"
                          />
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden aspect-square relative">
                          <Image
                            key={uuid}
                            src={slidesData[1].img}
                            alt="Roof"
                            className="w-auto h-auto object-cover"
                            fill
                            sizes="(max-width: 960px) 100vw"
                          />
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden aspect-square relative">
                          <Image
                            key={uuid}
                            src={slidesData[2].img}
                            alt="Roof"
                            className="w-auto h-auto object-cover"
                            fill
                            sizes="(max-width: 960px) 100vw"
                          />
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden aspect-square relative">
                          <Image
                            key={uuid}
                            src={slidesData[3].img}
                            alt="Roof"
                            className="w-auto h-auto object-cover"
                            fill
                            sizes="(max-width: 960px) 100vw"
                          />
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden aspect-square relative">
                          <Image
                            key={uuid}
                            src={slidesData[4].img}
                            alt="Roof"
                            className="w-auto h-auto object-cover"
                            fill
                            sizes="(max-width: 960px) 100vw"
                          />
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden aspect-square relative">
                          <Image
                            key={uuid}
                            src={slidesData[5].img}
                            alt="Roof"
                            className="w-auto h-auto object-cover"
                            fill
                            sizes="(max-width: 960px) 100vw"
                          />
                        </div>
                        <div className="mp:col-span-2 bg-white rounded-lg overflow-hidden aspect-square mp:aspect-[2/0.98] relative">
                          <Image
                            key={uuid}
                            src={slidesData[6].img}
                            alt="Roof"
                            className="w-auto h-auto object-cover"
                            fill
                            sizes="(max-width: 960px) 100vw"
                          />
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden aspect-square relative">
                          <Image
                            key={uuid}
                            src={slidesData[7].img}
                            alt="Roof"
                            className="w-auto h-auto object-cover"
                            fill
                            sizes="(max-width: 960px) 100vw"
                          />
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden relative aspect-square">
                          <Image
                            key={uuid}
                            src={slidesData[8].img}
                            alt="Roof"
                            className="w-auto h-auto object-cover"
                            fill
                            sizes="(max-width: 960px) 100vw"
                          />
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden aspect-square relative aspect-square">
                          <Image
                            key={uuid}
                            src={slidesData[9].img}
                            alt="Roof"
                            className="w-auto h-auto object-cover"
                            fill
                            sizes="(max-width: 960px) 100vw"
                          />
                        </div>
                        <div className="mp:col-span-2 bg-white rounded-lg overflow-hidden aspect-square mp:aspect-[2/0.98] relative">
                          <Image
                            key={uuid}
                            src={slidesData[1].img}
                            alt="Roof"
                            className="w-auto h-auto object-cover"
                            fill
                            sizes="(max-width: 960px) 100vw"
                          />
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden relative aspect-square">
                          <Image
                            key={uuid}
                            src={slidesData[2].img}
                            alt="Roof"
                            className="w-auto h-auto object-cover"
                            fill
                            sizes="(max-width: 960px) 100vw"
                          />
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default Gallery;
