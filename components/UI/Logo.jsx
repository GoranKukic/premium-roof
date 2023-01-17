import LogoImg from '../../public/images/logo.png';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="relative w-[140px] h-[55px]">
      <Image
        src={LogoImg}
        alt="Logo"
        sizes="(max-width: 768px) 50vw, 100vw"
        fill
        className="object-contain ovbject-left w-full h-full"
      />
    </div>
  );
};

export default Logo;
