interface ParagraphProps {
  paragraph: string,
  className?: string
}

const Paragraph:React.FC<ParagraphProps> = (props) => {
  return (
    <p
      className={`text-[16px] font-normal ${props.className} font-['Open Sans'] leadeing-[155%]`}
    >
      {props.paragraph}
    </p>
  );
};

export default Paragraph;
