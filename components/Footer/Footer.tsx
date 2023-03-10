import Logo from "../UI/Logo";
import Paragraph from "../UI/Paragraph";
import FooterLink from "./FooterLink";
import Image from "next/image";
import LocationIcon from "../../public/images/location.svg";
import InstaIcon from "../../public/images/instagram.svg";
import PhoneIcon from "../../public/images/phone.svg";
import MailIcon from "../../public/images/mail.svg";
import FooterBg from "../../public/images/backgroundLine2.png";
import { Link } from "react-scroll/modules";
import styles from "./Footer.module.css";
import { useRouter } from "next/router";
import en from "../../locales/en";
import sr from "../../locales/sr";
import NextLink from "next/link";

const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sr;
  return (
    <div className="relative bg-solid-white flex justify-center items-center flex flex-col overflow-hidden">
      <Image
        src={FooterBg}
        alt="Hero backgorund"
        fill
        // sizes="(min-width: 768px) 30vw, 100vw"
        className={`${styles.footerBg} object-contain absolute z-10 max-w-[950px] max-h-[932px] w-auto h-auto opacity-30 scale-125 md:scale-[185%]`}
        placeholder="blur"
        blurDataURL={"../public/images/backgroundLine.png"}
      />
      <div className="max-w-[1172px] w-full mx-auto my-[55px] px-4 z-20">
        <div className="mb-[15px] flex items-left">
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
        <div className="flex flex-col gap-[35px] md:gap-[0px] md:flex-row">
          <div className="flex-col max-w-[500px] w-full px-2">
            <div className="max-w-[390px] w-full mb-[15px] md:mb-[25px]">
              <Paragraph
                paragraph={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium nulla metus, quis potenti vitae. Dolor eget suspendisse vulputate feugiat."
                }
                className={"text-gray flex text-left"}
              />
            </div>
            <div className="transition-transform duration-500 ease-in-out flex gap-[7px]">
              <Image
                src={LocationIcon}
                alt="location"
                className="w-[20px] h-[20px] my-auto"
              />

              <a
                href={"https://goo.gl/maps/tjdbWfNDuWFekB37A"}
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
                    text={t.navRoofConfigurator}
                    to={"roof-configurator"}
                  />
                </li>
                <li>
                  <FooterLink
                    text={t.navRoofMaintainance}
                    to={"roof-maintenance"}
                  />
                </li>
                <li>
                  <FooterLink text={t.navAboutUs} to={"about-us"} />
                </li>
                <li>
                  <FooterLink text={t.navWhyWe} to={"why-we"} />
                </li>
                <li>
                  <FooterLink text={t.navGallery} to={"gallery"} />
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
      <div className="max-w-[1172px] w-full mx-auto px-4 mb-[8px] z-20">
        <div className="flex flex-col flex-col-reverse items-center md:flex-row  md:flex-nowrap justify-between text-[14px] font-normal text-gray font-['Open Sans'] leadeing-[155%]">
          <div>
            <p className="text-center">
              Premium Roof {new Date().getFullYear()} <wbr /> &copy; |
              {t.footerDesc}
            </p>
          </div>
          <div>
            <NextLink
              href="/privacy-policy"
              className="hover:text-blue hover:duration-500"
            >
              {t.footerPrivacyPolicy}
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
