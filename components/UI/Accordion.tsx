import Paragraph from './Paragraph';
import Image from 'next/image';
import MinusIcon from '../../public/images/minus.svg';
import PlusIcon from '../../public/images/plus.svg';

export interface AccordionProps {
  index: number;
  iconUrl: string;
  iconAlt: string;
  heading: string;
  accordion: any;
  setAccordion: any;
  click: () => void;
}

function Accordion(props: AccordionProps) {
  const { index, heading, iconUrl, iconAlt, accordion, setAccordion, click } =
    props;

  const toggleAccordion = (idx: any) => {
    if (accordion === idx) {
      setAccordion(0);
      return;
    }
    setAccordion(idx);
  };

  return (
    /* Body of Accordion item */
    <div>
      <div
        className="w-full flex justify-between cursor-pointer"
        onClick={() => {
          click();
          toggleAccordion(index);
        }}
      >
        <div className="flex">
          <Image
            src={iconUrl}
            alt={iconAlt}
            className={`w-[22px] h-auto mb-[18px] mt-auto mr-[13px] ${
              accordion === index ? 'text-black' : 'opacity-50'
            } `}
          />
          <p
            className={
              accordion === index
                ? `text-[22px] md:text-[32px] font-normal leading-[155%] text-black font-["Prata"]`
                : `text-[22px] md:text-[32px] font-normal leading-[155%] text-black font-["Prata"] opacity-50`
            }
          >
            {heading}
          </p>
        </div>
        {accordion === index ? (
          <Image
            src={MinusIcon}
            alt="Colapse"
            className="cursor-pointer w-[16px] h-auto"
          />
        ) : (
          <Image
            src={PlusIcon}
            alt="Expand"
            className="cursor-pointer opacity-50 w-[16px] h-[21px]"
          />
        )}
      </div>
      {/* Body of Accordion item */}
      <div
        className={
          accordion === index
            ? 'flex flex-col lg:flex-row w-full lg:max-w-[360px] opacity-60 pb-[16px] pt-[10px] border-b-[1px]'
            : 'h-0 overflow-hidden duration-300'
        }
      >
        <Paragraph
          paragraph={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tempus, dictum mauris leo amet, elit.'
          }
        />
      </div>
    </div>
  );
}

export default Accordion;
