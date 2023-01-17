import Logo from '../UI/Logo';
import Paragraph from '../UI/Paragraph';
import FooterLink from '../UI/FooterLink';
import Image from 'next/image';
import LocationIcon from '../../public/images/location.svg';
import InstaIcon from '../../public/images/instagram.svg';
import PhoneIcon from '../../public/images/phone.svg';
import MailIcon from '../../public/images/mail.svg';

const Footer = () => {
  return (
    <div className="bg-solid-white flex justify-center items-center flex flex-col">
      <div className="max-w-[1172px] w-full mx-auto my-[55px] px-4">
        <div className="mb-[15px]">
          <Logo />
        </div>
        <div className="flex flex-col gap-[35px] md:gap-[0px] md:flex-row">
          <div className="flex-col max-w-[500px] w-full px-2">
            <div className="max-w-[390px] w-full mb-[15px] md:mb-[25px]">
              <Paragraph
                paragraph={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium nulla metus, quis potenti vitae. Dolor eget suspendisse vulputate feugiat.'
                }
                color={'gray'}
                className={'flex'}
                textPostion={'left'}
              />
            </div>
            <div className="transition-transform duration-500 ease-in-out flex gap-[7px]">
              <Image
                src={LocationIcon}
                alt="location"
                className="w-[20px] h-[20px] my-auto"
              />

              <a
                href={'https://goo.gl/maps/tjdbWfNDuWFekB37A'}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue hover:duration-500"
              >
                2 Adams St, Lakeside, Montana
              </a>
            </div>
          </div>
          <div className="max-w-[250px] w-full px-2">
            <div>
              <ul className=" flex flex-col gap-[15px] md:gap-[25px] text-[16px] font-normal text-gray font-['Open Sans'] leadeing-[155%]">
                <li>
                  <FooterLink
                    text={'Roof Configurator'}
                    to={'roof-configurator'}
                  />
                </li>
                <li>
                  <FooterLink
                    text={'Roof Maintainance'}
                    to={'roof-maintenance'}
                  />
                </li>
                <li>
                  <FooterLink text={'About Us'} to={'about-us'} />
                </li>
                <li>
                  <FooterLink text={'Why We?'} to={'why-we'} />
                </li>
                <li>
                  <FooterLink text={'Gallery'} to={'gallery'} />
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-[250px] w-full px-2">
            <ul className='flex flex-col gap-[15px] md:gap-[20px] text-[14px] font-normal text-gray font-["Open Sans"] leadeing-[135%] underline'>
              <li className="flex gap-[7px] hover:text-blue hover:duration-500">
                <Image
                  src={MailIcon}
                  alt="Email"
                  className="w-[16px] h-[16px] my-auto"
                />
                <a href="mailto:example@mail.com">example@mail.com</a>
              </li>
              <li className="flex gap-[7px] hover:text-blue hover:duration-500 cursor-pointer">
                <Image
                  src={PhoneIcon}
                  alt="Phone"
                  className="w-[16px] h-[16px] my-auto"
                />
                <p>+00 000 000</p>
              </li>
              <li className="flex gap-[7px] hover:text-blue hover:duration-500 overflow-hidden">
                <Image
                  src={InstaIcon}
                  alt="Instagram"
                  className="w-[16px] h-[16px] my-auto"
                />
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer hover:text-blue hover:duration-500 overflow-hidden"
                >
                  @premiumroof
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1172px] w-full mx-auto px-4 mb-[8px]">
        <div className="flex flex-col flex-col-reverse items-center md:flex-row  md:flex-nowrap justify-between text-[14px] font-normal text-gray font-['Open Sans'] leadeing-[155%]">
          <div>
            <p className="text-center">
              Premium Roof {new Date().getFullYear()} <wbr /> &copy; | All
              rights reserved
            </p>
          </div>
          <div>
            <a href="#" className="hover:text-blue hover:duration-500">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
