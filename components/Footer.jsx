import Logo from './UI/Logo';
import Paragraph from './UI/Paragraph';
import FooterLink from './UI/FooterLink';
import Image from 'next/image';
import LocationIcon from '../public/images/location.svg';
import InstaIcon from '../public/images/instagram.svg';
import PhoneIcon from '../public/images/phone.svg';
import MailIcon from '../public/images/mail.svg';

const Footer = () => {
  return (
    <div className="bg-white flex justify-center items-center flex flex-col">
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
                href={
                  'https://www.google.com/maps/place/Zagreba%C4%8Dka+cesta+22,+10000,+Zagreb,+Croatia'
                }
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue hover:duration-500"
              >
                Zagrebačka 22, Zagreb
              </a>
            </div>
          </div>
          <div className="max-w-[250px] w-full px-2">
            <div>
              <ul className=" flex flex-col gap-[15px] md:gap-[25px] text-[16px] font-normal text-gray font-['Open Sans'] leadeing-[155%]">
                <li>
                  <FooterLink
                    text={'Konfigurator Bazena'}
                    to={'pool-configurator'}
                  />
                </li>
                <li>
                  <FooterLink
                    text={'Održavanje Bazena'}
                    to={'pool-maintenance'}
                  />
                </li>
                <li>
                  <FooterLink text={'O nama'} to={'about-us'} />
                </li>
                <li>
                  <FooterLink text={'Zašto Mi?'} to={'why-we'} />
                </li>
                <li>
                  <FooterLink text={'Galerija'} to={'gallery'} />
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
                <a href="mailto:premiumspa@gmail.com">premiumspa@gmail.com</a>
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
                  href="https://www.instagram.com/premiumspabazeni"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer hover:text-blue hover:duration-500 overflow-hidden"
                >
                  @premiumspabazeni
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
              Premium Spa {new Date().getFullYear()} <wbr /> &copy; All rights
              reserved |<wbr /> Designed By{' '}
              <a
                href={'https://www.blueduck.at/'}
                target="_blank"
                rel="noreferrer"
                className="text-[#0000FF] underline hover:no-underline"
              >
                BlueDuck
              </a>
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
