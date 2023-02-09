import Image from 'next/image';
import LineImage from '../../public/images/hero-line.svg';

interface HeadlineUnderlineProps {
  underlinedText?: string,
  color?: string
}

const HeadlineUnderline : React.FC <HeadlineUnderlineProps> = (props) => {
  return (
    <span className="relative whitespace-pre">
      {props.underlinedText}
      <Image
        src={LineImage}
        alt="Line"
        style={{ width: "100%", height: "auto", objectFit: "fill", }}
        className={`absolute left-[0px] bottom-[-7px] md:bottom-[-13px] right-[-10px] w-full filter ${props.color}`}
      ></Image>
    </span>
  );
};

export default HeadlineUnderline;
