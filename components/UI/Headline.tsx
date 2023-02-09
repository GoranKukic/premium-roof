interface HeadlineProps {
  headline: string | (string | React.ReactElement)[];
  className?: string;
  underline?: any;
}

const Headline: React.FC<HeadlineProps> = ({ headline, className, underline }) => {
  return (
    <h2
      className={`${className} text-[24px] md:text-[52px]  font-normal leading-[155%] logo-text font-['Prata'] whitespace-normal`}
    >
      {/* {headline} */}
      {Array.isArray(headline)
        ? headline.map((headlineItem, index) => {
            return <span key={index}>{headlineItem}</span>;
          })
        : headline}
      {underline ? underline : null}
    </h2>
  );
};

export default Headline;
