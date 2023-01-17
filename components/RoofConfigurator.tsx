import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image, { StaticImageData } from 'next/image';
import Paragraph from './UI/Paragraph';
import Headline from './UI/Headline';
import Accordion from './UI/Accordion';
import IdeaImg from '../public/images/idea.jpg';
import CtaButton from './UI/CtaButton';
import { Link } from 'react-scroll/modules';
import BulbIcon from '../public/images/bulb.svg';
import PenIcon from '../public/images/pen.svg';
import BuildIcon from '../public/images/build.svg';
import RealizationIcon from '../public/images/realization.svg';
import DesignImg from '../public/images/design.jpg';
import BuildImg from '../public/images/build.jpg';
import RealizationImg from '../public/images/realization.jpg';

// import { v4 as uuidv4 } from 'uuid';

const RoofConfigurator = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [activeAcc, setActiveAcc] = useState(0);
  const [img, setImg] = useState(IdeaImg);

  const handleImgChange = (image: React.SetStateAction<StaticImageData>) => {
    setImg(image);
  };

  return (
    <div
      id="pool-configurator"
      className="bg-white flex justify-center items-center px-4"
    >
      <div className="lg:max-w-[1140px] max-w-[532px] w-full bg-white mx-auto my-[110px] flex flex-col">
        <span
          data-aos="fade-right"
          className="text-left text-blue font-['Open Sans'] font-semibold uppercase text-[16px] leadeing-[167%] tracking-[.03em] mb-[8px]"
        >
          roof configurator
        </span>
        <div data-aos="fade-right" className="mb-[13px]">
          <Headline
            headline={'From Idea To Final Product'}
            textPosition={'left'}
          />
        </div>
        <div data-aos="fade-right" className="opacity-60 mb-40px max-w-[540px]">
          <Paragraph
            paragraph={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tempus, dictum mauris leo amet, elit. Dictumst morbi sed dignissim faucibus gravida. Integer pellentesque hac volutpat nullam morbi faucibus. Cursus ante ut integer id sit amet, sed nisl. '
            }
          />
        </div>
        <div className="flex">
          <div className="flex flex-col lg:flex-row flex-start gap-[30px] mt-[50px] w-full">
            <div
              data-aos="fade-up"
              className="flex flex-col lg:max-w-[360px] lg:min-w-[360px] gap-[30px]"
            >
              {/* Idea */}
              <Accordion
                index={0}
                heading="Idea"
                accordion={activeAcc}
                setAccordion={setActiveAcc}
                iconUrl={BulbIcon}
                iconAlt="Idea"
                click={() => handleImgChange(IdeaImg)}
              />
              {/* Design */}
              <Accordion
                index={1}
                heading="Design"
                accordion={activeAcc}
                setAccordion={setActiveAcc}
                iconUrl={PenIcon}
                iconAlt="Idea"
                click={() => handleImgChange(DesignImg)}
              />
              {/* Build */}
              <Accordion
                index={2}
                heading="Build"
                accordion={activeAcc}
                setAccordion={setActiveAcc}
                iconUrl={BuildIcon}
                iconAlt="Idea"
                click={() => handleImgChange(BuildImg)}
              />
              {/* Realization */}
              <Accordion
                index={3}
                heading="Realization"
                accordion={activeAcc}
                setAccordion={setActiveAcc}
                iconUrl={RealizationIcon}
                iconAlt="Idea"
                click={() => handleImgChange(RealizationImg)}
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="transition-all animate-fade w-full relative"
            >
              <Image
                src={img}
                alt="Pool"
                height={520}
                width={800}
                className="object-cover"
              />
              <div className="absolute right-[20px] bottom-[20px]">
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
        </div>
      </div>
    </div>
  );
};
export default RoofConfigurator;
