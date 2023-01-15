import { Link } from 'react-scroll/modules';

const FooterLink = (props) => {
  return (
    <Link
      href="#"
      to={props.to}
      className="hover:text-blue hover:duration-500 hover:pb-[2px] cursor-pointer w-fit"
      //py={true}
      smooth={true}
      offset={-80}
      duration={500}
    >
      {props.text}
    </Link>
  );
};

export default FooterLink;
