const Headline = (props) => {
  return (
    <h2
      className={`text-[24px] md:text-[52px] text-${props.textPosition} font-normal leading-[155%] logo-text text-${props.color} font-['Prata'] whitespace-normal ${props.className}`}
    >
      {props.headline}
      {props.underline ? props.underline : null}
    </h2>
  );
};

export default Headline;
