import { useEffect } from 'react';
import Headline from '../UI/Headline';
import Image from 'next/image';
import Paragraph from '../UI/Paragraph';
import PenIcon from '../../public/images/pen.svg';
import StarIcon from '../../public/images/star.svg';
import BulbIcon from '../../public/images/bulb.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './WhyWe.module.css';
import WhyWeBg from '../../public/images/backgroundLine.png';
import { useRouter } from 'next/router';
import en from '../../locales/en';
import sr from '../../locales/sr';

const WhyWe = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : sr;

  return (
    <div
      id="why-we"
      className="relative bg-why-we-gradient bg-solid-white flex flex-col justify-center items-center px-4"
    >
      <Image
        src={WhyWeBg}
        alt="Hero backgorund"
        fill
        // sizes="(min-width: 768px) 30vw, 100vw"
        className={`${styles.whyWeBg} object-contain absolute z-10 max-w-[950px] max-h-[932px] w-auto h-auto opacity-30`}
        placeholder="blur"
        blurDataURL={'../public/images/backgroundLine.png'}
      />
      <div
        data-aos="fade-down"
        className="max-w-[770px] w-full mx-auto mt-[105px] mb-[75px] z-20"
      >
        <div className="mb-[70px]">
          <Headline
            headline={[
              `${t.whyWeHeadline1}`,
              <span key={Math.random()} className="text-blue">
                {t.whyWeHeadline2}
              </span>,
              `${t.whyWeHeadline3}`,
            ]}
            key={1}
            color={'black'}
            textPosition={'center'}
          />
        </div>
      </div>
      <div className="max-w-[1172px] w-full flex flex-wrap justify-center gap-[30px] z-20">
        {/* Benefit */}

        <div data-aos="fade-right">
          <div className="max-w-[360px] px-[34px] pt-[60px] pb-[55px] bg-white border-t border-solid border-black flex flex-col gap-[33px] items-center justify-center text-center cursor-pointer overflow-hidden transform hover:-translate-y-4 duration-500 ease-in-out">
            <Image
              src={PenIcon}
              alt="Pen icon"
              className="max-h-[40px] h-full max-w-[40px] w-full"
            />
            <span className='text-[20px] md:text-[24px] font-normal text-gray font-["Prata"] leadeing-[155%] text-black'>
              {t.whyWeCard1Headline1}
              <span className="text-blue">{t.whyWeCard1Headline2}</span>{' '}
              {t.whyWeCard1Headline3}
            </span>
            <Paragraph
              paragraph={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium nulla metus, quis potenti vitae. Dolor eget suspendisse vulputate feugiat.'
              }
              textPostion={'center'}
            ></Paragraph>
          </div>
        </div>

        {/* Benefit */}

        <div data-aos="fade-up">
          <div className="max-w-[360px] px-[34px] pt-[60px] pb-[55px] bg-white border-t border-solid border-black flex flex-col gap-[33px] items-center justify-center text-center cursor-pointer overflow-hidden transform hover:-translate-y-4 duration-500 ease-in-out">
            <Image
              src={StarIcon}
              alt="Star icon"
              className="max-h-[40px] h-full max-w-[40px] w-full"
            />
            <span className='text-[20px] md:text-[24px] font-normal text-gray font-["Prata"] leadeing-[155%] text-black'>
              {t.whyWeCard2Headline1}
              <span className="text-blue">{t.whyWeCard2Headline2}</span>
            </span>
            <Paragraph
              paragraph={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium nulla metus, quis potenti vitae. Dolor eget suspendisse vulputate feugiat.'
              }
            ></Paragraph>
          </div>
        </div>

        {/* Benefit */}

        <div data-aos="fade-left">
          <div className="max-w-[360px] px-[34px] pt-[60px] pb-[55px] bg-white border-t border-solid border-black flex flex-col gap-[33px] items-center justify-center text-center cursor-pointer overflow-hidden transform hover:-translate-y-4 duration-500 ease-in-out">
            <Image
              src={BulbIcon}
              alt="Bulb icon"
              className="h-[40px] w-[40px]"
            />
            <span className='text-[20px] md:text-[24px]  font-normal text-gray font-["Prata"] leadeing-[155%] text-black max-w-[230px] md:max-w-[250px]'>
              <span className="text-blue">{t.whyWeCard3Headline1}</span>
              {t.whyWeCard3Headline2}
            </span>
            <Paragraph
              paragraph={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium nulla metus, quis potenti vitae. Dolor eget suspendisse vulputate feugiat.'
              }
            ></Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWe;
