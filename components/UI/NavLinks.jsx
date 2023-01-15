import Link from 'react-scroll/modules/components/Link';

const NavLinks = ({ to, children }) => {
  return (
    <Link
      to={to}
      href="#"
      className="font-['Open Sans'] font-normal text-[14px] leadeing-[135%] text-gray"
      activeClass="active"
      smooth={true}
      offset={-80}
      duration={500}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
