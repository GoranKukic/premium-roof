import { useEffect, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Headline from '../UI/Headline';
import Paragraph from '../UI/Paragraph';
import Image from 'next/image';
import SparkleIcon from '../../public/images/sparkle.svg';
import CheckIcon from '../../public/images/check.svg';
import ScalesIcon from '../../public/images/scales.svg';
import BeforeAndAfterSlider from '../UI/BeforeAndAfterSlider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LineImage from '../../public/images/hero-line.svg';
import MaintenanceBg from '../../public/images/backgroundLine.png';
import MaintenanceBg2 from '../../public/images/backgroundLine2.png';
import styles from './RoofMaintenance.module.css';
import RoofMaintenanceForm from './RoofMaintenanceForm';

const RoofMaintenance = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div
      id="roof-maintenance"
      className="relative bg-solid-white flex flex-col justify-center items-center pt-[110px] px-4 pb-[110px] overflow-hidden"
    >
      <Image
        src={MaintenanceBg}
        alt="Hero backgorund"
        fill
        // sizes="(min-width: 768px) 30vw, 100vw"
        className={`${styles.maintainBgTop} object-contain absolute z-10 max-w-[950px] max-h-[932px] w-auto h-auto opacity-30`}
        placeholder="blur"
        blurDataURL={'../public/images/backgroundLine.png'}
      />
      <Image
        src={MaintenanceBg2}
        alt="Hero backgorund"
        fill
        // sizes="(min-width: 768px) 30vw, 100vw"
        className={`${styles.maintainBgBottom} object-contain absolute z-10 max-w-[950px] max-h-[932px] w-auto h-auto opacity-30`}
        placeholder="blur"
        blurDataURL={'../public/images/backgroundLine.png'}
      />
      <div className="max-w-[1140px] flex justify-center items-center gap-[50px] mb-[132px] lg:flex-nowrap flex-wrap-reverse z-20">
        <div data-aos="fade-right">
          <BeforeAndAfterSlider />
        </div>

        <div data-aos="fade-left" className="w-full max-w-[532px]">
          <span className="text-left text-blue font-['Open Sans'] font-semibold uppercase text-[16px] leadeing-[167%] tracking-[.03em] mb-[8px]">
            Roof maintenance
          </span>
          <div className="mb-[13px]">
            <Headline
              headline={'Easy and simple cleaning'}
              textPosition={'left'}
            />
          </div>
          <div className="opacity-60">
            <Paragraph
              paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium nulla metus, quis potenti vitae. Dolor eget suspendisse vulputate feugiat. Sagittis at tincidunt tristique ut. Consectetur ultrices aliquam amet a egestas. Hac elit ornare rhoncus arcu, vel vitae felis.`}
              textPosition={'left'}
              color={''}
            />
            <br />
            <Paragraph
              paragraph={
                'Elementum in nunc, tortor, feugiat eget viverra sollicitudin facilisi. Aliquam, vel, consequat magnis augue. Sit lacinia ornare auctor massa urna, mattis blandit quis. '
              }
              textPosition={'left'}
              color={''}
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1140px] flex flex-col justify-center items-center z-20">
        <div data-aos="zoom-out-up" className="mb-[70px] max-w-[500px] w-full">
          <Headline
            headline={[
              'Your ',
              <span key={Math.random()} className="text-blue">
                Package
              </span>,
              ' of Maintenance',
            ]}
            key={1}
            color={'black'}
            textPosition={'center'}
          />
        </div>
        <div className="max-w-[1024px] w-full flex items-center justify-center gap-[50px] lg:flex-nowrap flex-wrap">
          {/*Lite Card */}

          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="bg-white max-w-[487px] w-full flex flex-col rounded-[5px] shadow-[0_0_41px_4px_rgba(0,0,0,0.1)] cursor-pointer overflow-hidden transform hover:-translate-y-4 duration-500 ease-in-out">
              <div className="flex flex-col bg-white px-[32px] pt-[38px] pb-[26px]">
                <div className="flex gap-[10px] mb-[10px]">
                  <div className="h-[28.5px] w-[28.5px] mb-[15px] mt-auto">
                    <Image src={ScalesIcon} alt="Scales" />
                  </div>

                  <span className='text-[22px] md:text-[32px] font-normal leading-[155%] text-black font-["Prata"]'>
                    Lite
                  </span>
                </div>
                <p className="text-grey font-normal leading-[155%] text-[16px] mb-[20px] font-['Open Sans']">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pretium nulla metus, quis potenti vitae. Dolor eget
                  suspendisse vulputate feugiat.{' '}
                </p>
                <div className="flex mb-[20px] flex-wrap items-center">
                  <p className="text-blue font-normal leading-[155%] text-[32px] sm:text-[48px] font-['Prata'] mr-[10px]">
                    50
                  </p>
                  <p className="text-grey font-normal leading-[155%] text-[16px] font-['Open Sans']">
                    $ / Monthly
                  </p>
                </div>
                <button
                  className="flex justify-center items-center h-[55px] w-full text-white text-[16px] font-['Open Sans'] font-semibold
                            box-border border-2 border-solid border-solid-black rounded-sm leading-[155%] cursor-pointer bg-solid-black 
                            transition-colors duration-700 transform hover:bg-white hover:text-black active:bg-gray"
                  type="button"
                  onClick={openModal}
                >
                  Choose
                </button>
              </div>
              <div className="px-[32px]">
                <hr className="bg-gray opacity-30" />
              </div>
              <div className=" flex  flex-col px-[32px] py-[26px] min-h-[270px] h-full text-gray font-normal leading-[155%] text-[16px] font-['Open Sans']">
                <ul className="">
                  <li className="flex mb-[14px]">
                    <Image
                      src={CheckIcon}
                      alt="Check"
                      className="mr-[10px] my-auto w-[15px] h-[10px] "
                    />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                  </li>
                  <li className="flex my-[14px]">
                    <Image
                      src={CheckIcon}
                      alt="Check"
                      className="mr-[10px] my-auto w-[15px] h-[10px] "
                    />
                    <p>Mi gravida cursus aenean lectus nisl nulla sed.</p>
                  </li>
                  <li className="flex my-[14px]">
                    <Image
                      src={CheckIcon}
                      alt="Check"
                      className="mr-[10px] my-auto w-[15px] h-[10px] "
                    />
                    <p>Sed enim fames in integer quis quis viverra in.</p>
                  </li>
                  <li className="flex my-[14px]">
                    <Image
                      src={CheckIcon}
                      alt="Check"
                      className="mr-[10px] my-auto w-[15px] h-[10px] "
                    />
                    <p>Massa tristique viverra vitae viverra laoreet.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Premium Card */}

          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="max-w-[487px] w-full flex flex-col rounded-[5px] shadow-[0_0_41px_4px_rgba(0,0,0,0.1)] cursor-pointer overflow-hidden transform hover:-translate-y-4 duration-500 ease-in-out">
              <div className="flex flex-col bg-black px-[32px] pt-[38px] pb-[26px]">
                <div className="flex gap-[10px] mb-[10px]">
                  <div className="h-[28.5px] w-[28.5px] mb-[15px] mt-auto">
                    <Image src={SparkleIcon} alt="Sparkle" />
                  </div>
                  <span className='text-[22px] md:text-[32px] font-normal leading-[155%] text-white font-["Prata"]'>
                    Premium
                  </span>
                </div>
                <p className="text-white font-normal leading-[155%] text-[16px] opacity-70 mb-[20px] font-['Open Sans']">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pretium nulla metus, quis potenti vitae. Dolor eget
                  suspendisse vulputate feugiat.{' '}
                </p>
                <div className="flex mb-[20px] flex-wrap items-center">
                  <p className="text-blue font-normal leading-[155%] text-[32px] sm:text-[48px] font-['Prata'] mr-[10px]">
                    160
                  </p>
                  <p className="text-white font-normal leading-[155%] text-[16px] opacity-70 font-['Open Sans']">
                    $ / Monthly
                  </p>
                </div>
                <button
                  className="flex justify-center items-center h-[55px] w-full text-white text-[16px] font-['Open Sans'] font-semibold
                            box-border border-2 border-solid border-white rounded-sm leading-[155%] cursor-pointer bg-solid-black 
                            transition-colors duration-700 transform hover:bg-white hover:text-black active:bg-gray"
                  type="button"
                  onClick={openModal}
                >
                  Choose
                </button>
              </div>
              <div className="flex flex-col bg-white px-[32px] py-[26px] text-gray font-normal leading-[155%] text-[16px] font-['Open Sans']">
                <ul className="">
                  <li className="flex mb-[14px]">
                    <Image
                      src={CheckIcon}
                      alt="Check"
                      className="mr-[10px] my-auto w-[15px] h-[10px]"
                    />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                  </li>
                  <li className="flex my-[14px]">
                    <Image
                      src={CheckIcon}
                      alt="Check"
                      className="mr-[10px] my-auto w-[15px] h-[10px]"
                    />
                    <p>Mi gravida cursus aenean lectus nisl nulla sed.</p>
                  </li>
                  <li className="flex my-[14px]">
                    <Image
                      src={CheckIcon}
                      alt="Check"
                      className="mr-[10px] my-auto w-[15px] h-[10px]"
                    />
                    <p>Sed enim fames in integer quis quis viverra in.</p>
                  </li>
                  <li className="flex my-[14px]">
                    <Image
                      src={CheckIcon}
                      alt="Check"
                      className="mr-[10px] my-auto w-[15px] h-[10px]"
                    />
                    <p>Massa tristique viverra vitae viverra laoreet.</p>
                  </li>
                  <li className="flex my-[14px]">
                    <Image
                      src={CheckIcon}
                      alt="Check"
                      className="mr-[10px] my-auto w-[15px] h-[10px]"
                    />
                    <p>Viverra mauris tortor orci ornare duis donec.</p>
                  </li>
                  <li className="flex mt-[14px]">
                    <Image
                      src={CheckIcon}
                      alt="Check"
                      className="mr-[10px] my-auto w-[15px] h-[10px]"
                    />
                    <p>Ultrices sit etiam nec lacus nisi in ultricies.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[675px] transform overflow-hidden bg-white px-[33px] py-[30px] text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between mb-[40px]">
                    <span className="text-solid-black font-['Prata'] font-normaluppercase text-[18px] xs:text-[24px] md:text-[32px] leadeing-[165%]">
                      <span className="relative">
                        Maintenance
                        <Image
                          src={LineImage}
                          alt="Line"
                          className={`absolute left-[0px] bottom-[-7px] md:bottom-[-13px] right-[-10px] w-full filter`}
                        ></Image>
                      </span>
                      <span> Package</span>
                    </span>
                    <svg
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${styles.closeButton} cursor-pointer`}
                      onClick={closeModal}
                    >
                      <path
                        d="M23.1035 7.74461C22.9642 7.60522 22.7988 7.49465 22.6167 7.4192C22.4347 7.34376 22.2395 7.30493 22.0425 7.30493C21.8454 7.30493 21.6503 7.34376 21.4682 7.4192C21.2862 7.49465 21.1208 7.60522 20.9815 7.74461L15.4175 13.3106L9.85347 7.74561C9.57208 7.46422 9.19043 7.30613 8.79247 7.30613C8.39452 7.30613 8.01287 7.46422 7.73147 7.74561C7.45008 8.02701 7.29199 8.40866 7.29199 8.80661C7.29199 9.20456 7.45008 9.58622 7.73147 9.86761L13.2975 15.4306L7.73247 20.9946C7.59314 21.1339 7.48262 21.2994 7.40721 21.4814C7.3318 21.6634 7.29299 21.8586 7.29299 22.0556C7.29299 22.4536 7.45108 22.8352 7.73247 23.1166C8.01387 23.398 8.39552 23.5561 8.79347 23.5561C9.19143 23.5561 9.57308 23.398 9.85447 23.1166L15.4175 17.5506L20.9815 23.1156C21.2629 23.397 21.6445 23.5551 22.0425 23.5551C22.4404 23.5551 22.8221 23.397 23.1035 23.1156C23.3849 22.8342 23.543 22.4526 23.543 22.0546C23.543 21.6567 23.3849 21.275 23.1035 20.9936L17.5375 15.4306L23.1025 9.86661C23.2419 9.72731 23.3524 9.56191 23.4279 9.37986C23.5033 9.19781 23.5422 9.00268 23.5422 8.80561C23.5422 8.60855 23.5033 8.41342 23.4279 8.23136C23.3524 8.04931 23.2419 7.88391 23.1025 7.74461H23.1035Z"
                        fill="#606060"
                      />
                      <path
                        d="M5.41748 0.430664C4.76087 0.430664 4.11069 0.559993 3.50406 0.811266C2.89744 1.06254 2.34624 1.43084 1.88195 1.89513C0.944265 2.83281 0.41748 4.10458 0.41748 5.43066V25.4307C0.41748 26.7567 0.944265 28.0285 1.88195 28.9662C2.34624 29.4305 2.89744 29.7988 3.50406 30.0501C4.11069 30.3013 4.76087 30.4307 5.41748 30.4307H25.4175C26.7436 30.4307 28.0153 29.9039 28.953 28.9662C29.8907 28.0285 30.4175 26.7567 30.4175 25.4307V5.43066C30.4175 4.77405 30.2882 4.12387 30.0369 3.51725C29.7856 2.91062 29.4173 2.35942 28.953 1.89513C28.4887 1.43084 27.9375 1.06254 27.3309 0.811266C26.7243 0.559993 26.0741 0.430664 25.4175 0.430664H5.41748ZM2.41748 5.43066C2.41748 4.63501 2.73355 3.87195 3.29616 3.30934C3.85877 2.74673 4.62183 2.43066 5.41748 2.43066H25.4175C26.2131 2.43066 26.9762 2.74673 27.5388 3.30934C28.1014 3.87195 28.4175 4.63501 28.4175 5.43066V25.4307C28.4175 26.2263 28.1014 26.9894 27.5388 27.552C26.9762 28.1146 26.2131 28.4307 25.4175 28.4307H5.41748C4.62183 28.4307 3.85877 28.1146 3.29616 27.552C2.73355 26.9894 2.41748 26.2263 2.41748 25.4307V5.43066Z"
                        fill="#606060"
                      />
                    </svg>
                  </div>
                  <RoofMaintenanceForm />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default RoofMaintenance;
