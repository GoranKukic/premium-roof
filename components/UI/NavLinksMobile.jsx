import Link from 'react-scroll/modules/components/Link';

const NavLinksMobile = ({ to, children, onClick }) => {
  return (
    <Link
      href="#"
      to={to}
      className="my-4 text-gray"
      smooth={true}
      offset={-80}
      duration={500}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLinksMobile;
