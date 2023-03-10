import { useEffect } from "react";
import Headline from "../UI/Headline";
import Paragraph from "../UI/Paragraph";
import CtaButton from "../UI/CtaButton";
import HeadlineUnderline from "../UI/HeadlineUnderline";
import { Link } from "react-scroll/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./AboutUs.module.css";
import Image from "next/image";
import AboutUsBg from "../../public/images/aboutbg.jpg";
import { useRouter } from "next/router";
import en from "../../locales/en";
import sr from "../../locales/sr";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-sine" });
  }, []);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sr;

  return (
    <div
      id="about-us"
      className="relative flex justify-center items-center px-4"
    >
      <div className={`${styles.paralaxContainer}`}>
        <Image
          src={AboutUsBg}
          alt={"About Us background image"}
          fill
          className="absolute object-cover object-top h-full"
          placeholder="blur"
          blurDataURL="../../public/images/aboutbg.jpg"
          sizes="100vw"
        />
      </div>
      <div className="max-w-[1172px] w-full my-[100px] mx-auto px-4 bg-[rgba(255, 255, 255, 0.29)] p-4 backdrop-blur-[8.5px]">
        <div
          data-aos="zoom-in-up"
          className="max-w-[545px] w-full mx-auto my-[144px] flex flex-col justify-center items-center"
        >
          <span className="text-center text-white font-['Open Sans'] font-semibold uppercase text-[16px] leadeing-[167%] tracking-[.03em]">
            {t.aboutUsTitle}
          </span>
          <div className="mb-[34px]">
            <Headline
              headline={`${t.aboutUsHeadline} \n`}
              className={"text-black text-center whitespace-pre-line"}
              underline={
                <HeadlineUnderline
                  underlinedText={`Premium Roof?`}
                  color={"black"}
                />
              }
            ></Headline>
          </div>
          <div className="text-center mb-[34px]">
            <Paragraph
              paragraph={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium nulla metus, quis potenti vitae. Dolor eget suspendisse vulputate feugiat. Sagittis at tincidunt tristique ut. Consectetur ultrices aliquam amet a egestas. Hac elit ornare rhoncus arcu, vel vitae felis."
              }
              className={"text-center"}
            />
          </div>
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
  );
};

export default AboutUs;
