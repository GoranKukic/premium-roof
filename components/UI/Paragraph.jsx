const Paragraph = (props) => {
  return (
    <p
      className={`text-[16px] font-normal text-${props.textPosition} text-${props.color} font-['Open Sans'] leadeing-[155%]`}
    >
      {props.paragraph}
    </p>
  );
};

export default Paragraph;
