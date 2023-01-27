// import { Link } from 'react-scroll/modules';

import { useRouter } from 'next/router';
import en from '../../locales/en';
import sr from '../../locales/sr';

const CtaButton = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : sr;

  return (
    <button
      className="flex justify-center items-center h-[55px] w-[180px] text-white text-[16px] font-['Open Sans'] font-semibold
      box-border border-2 border-solid border-solid-black rounded-sm leading-[155%] cursor-pointer bg-solid-black 
      transition-colors duration-700 transform hover:bg-white hover:text-black active:bg-gray"
      type="button"
    >
      {t.ctaBtnContent}
    </button>
  );
};

export default CtaButton;
