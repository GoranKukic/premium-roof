import { useEffect, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Headline from '../UI/Headline';
import Image from 'next/image';
import SparkleIcon from '../../public/images/sparkle.svg';
import CheckIcon from '../../public/images/check.svg';
import ScalesIcon from '../../public/images/scales.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import MaintenanceBg from '../../public/images/backgroundLine.png';
import MaintenanceBg2 from '../../public/images/backgroundLine2.png';
import styles from './PrivacyPolicyComponent.module.css';
import { useRouter } from 'next/router';
import en from '../../locales/en';
import sr from '../../locales/sr';
import Logo from '../UI/Logo';

const RoofMaintenance = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : sr;

  return (
    <div
      id="privacyPolicy"
      className="relative bg-solid-white flex flex-col justify-center items-center px-4 overflow-hidden"
    >
      <Image
        src={MaintenanceBg}
        alt="Maintenance backgorund"
        fill
        // sizes="(min-width: 768px) 30vw, 100vw"
        className={`${styles.maintainBgTop} object-contain absolute z-10 max-w-[950px] max-h-[932px] w-auto h-auto opacity-30`}
        placeholder="blur"
        blurDataURL={'../public/images/backgroundLine.png'}
      />
      <Image
        src={MaintenanceBg2}
        alt="Maintenance backgorund"
        fill
        // sizes="(min-width: 768px) 30vw, 100vw"
        className={`${styles.maintainBgBottom} object-contain absolute z-10 max-w-[950px] max-h-[932px] w-auto h-auto opacity-30`}
        placeholder="blur"
        blurDataURL={'../public/images/backgroundLine.png'}
      />
      <div className="max-w-[1140px] flex flex-col justify-center items-center z-20">
        <div className="w-full my-[16px] h-[135px] mp:h-[55px] flex flex-col mp:flex-row justify-between items-center">
          <Logo />
          <button
            className="flex justify-center items-center h-[55px] w-[180px] text-white text-[16px] font-['Open Sans'] font-semibold
                            box-border border-2 border-solid border-solid-black rounded-sm leading-[155%] cursor-pointer bg-solid-black 
                            transition-colors duration-700 transform hover:bg-transparent hover:text-black active:bg-gray"
            type="button"
            onClick={() => router.back()}
          >
            {t.privacyPolicyGoBack}
          </button>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="10000"
          data-aos-easing="ease-in"
          className="my-[70px] max-w-[500px] w-full"
        >
          <Headline
            headline={t.privacyPolicyHeadline}
            key={1}
            className={"text-black text-center"}
          />
        </div>
        <div className="w-full mb-[110px]">
          <div
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="10000"
            data-aos-easing="ease-in"
          >
            <p className="text-[16px] font-normal text-justify text-black font-['Open Sans'] leadeing-[155%] my-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              laoreet massa felis, non faucibus libero mollis congue. Ut viverra
              massa et dolor elementum, ut blandit orci iaculis. Morbi ut leo
              ultrices, molestie est nec, bibendum dui. Nunc lorem erat, aliquam
              vel leo non, lacinia rhoncus sapien. Quisque euismod molestie
              porta. Nulla ullamcorper risus quis dictum gravida. Etiam et risus
              id dolor molestie consectetur. Nulla at nisl quis justo
              pellentesque molestie eu eu purus. In sed nisl sem.
            </p>
            <p className="text-[16px] font-normal text-justify text-black font-['Open Sans'] leadeing-[155%] my-[16px]">
              Nullam egestas quam a leo pellentesque pretium. Phasellus varius
              felis id ipsum luctus consectetur. Mauris aliquam felis accumsan
              libero finibus suscipit. Duis felis quam, consequat at hendrerit
              a, commodo vel nibh. Nulla luctus mollis placerat. Nunc rutrum
              molestie libero, sit amet ultrices dui porta in. Maecenas
              vestibulum neque vel dolor dapibus volutpat. Ut faucibus arcu a
              nisl mattis, vel lobortis lorem dictum. Vivamus vitae dolor nec
              enim ultricies sollicitudin nec ut nibh. Fusce varius arcu sit
              amet metus imperdiet, eget rhoncus ex blandit. Fusce eleifend
              accumsan venenatis. Aliquam tincidunt metus dolor, eget bibendum
              lectus interdum et.
            </p>
            <p className="text-[16px] font-normal text-justify text-black font-['Open Sans'] leadeing-[155%] my-[16px]">
              Vivamus scelerisque condimentum nisi, et ullamcorper eros.
              Maecenas et consectetur tellus. Morbi consectetur dapibus finibus.
              Aenean viverra augue vel nibh gravida bibendum. Aliquam faucibus
              arcu vel aliquet sollicitudin. In vel turpis porttitor, mattis
              nisl nec, tristique nibh. Suspendisse non porttitor odio, volutpat
              pharetra lorem. Curabitur in lectus non ante accumsan consequat.
              Duis at elit vitae lacus viverra pharetra at eu dolor. Donec eget
              pellentesque mi. Praesent et eleifend turpis.
            </p>
            <p className="text-[16px] font-normal text-justify text-black font-['Open Sans'] leadeing-[155%] my-[16px]">
              Cras elementum risus scelerisque, elementum sem sit amet, faucibus
              velit. In hac habitasse platea dictumst. Maecenas nec tincidunt
              odio. Mauris at nisi blandit, sodales eros vitae, tempus orci.
              Integer ac eros id nibh lacinia molestie in tempus ligula. Mauris
              pretium justo quis augue blandit tristique. Ut sed orci fermentum,
              viverra odio nec, tempus nisi.
            </p>
            <p className="text-[16px] font-normal text-justify text-black font-['Open Sans'] leadeing-[155%] my-[16px]">
              Suspendisse ultricies ipsum in venenatis venenatis. Sed auctor
              libero vitae tellus varius elementum. Mauris mollis ullamcorper mi
              ut posuere. Nullam gravida nunc id sollicitudin faucibus. Nam
              faucibus nunc a leo pellentesque facilisis. Quisque iaculis, ante
              ut eleifend elementum, ipsum massa porttitor ex, nec lacinia lacus
              dolor ac libero. Vivamus tempus elit justo, eget dictum est
              tincidunt eu. Nunc a efficitur odio.
            </p>
            <p className="text-[16px] font-normal text-justify text-black font-['Open Sans'] leadeing-[155%] my-[16px]">
              Vivamus tincidunt dui vel sapien posuere vestibulum. Ut ac sapien
              maximus, aliquet purus ac, tincidunt nulla. Donec imperdiet eros
              ac magna porttitor cursus. Morbi sit amet urna est. Quisque eget
              magna tristique, tincidunt urna et, rutrum urna. Nullam tempor
              feugiat euismod. Suspendisse potenti. Phasellus nec gravida orci,
              a fringilla odio. Proin interdum nulla sed sollicitudin facilisis.
            </p>
            <p className="text-[16px] font-normal text-justify text-black font-['Open Sans'] leadeing-[155%] my-[16px]">
              Fusce posuere nisl non est maximus cursus. Curabitur mi ligula,
              varius eget orci sit amet, pulvinar condimentum mauris. In dolor
              ante, sollicitudin vitae ipsum ut, bibendum mattis lectus. Aenean
              sed odio nec tellus elementum porta. Mauris vel libero orci. Proin
              ante lacus, molestie a fringilla vitae, suscipit eget ante. Donec
              vel sollicitudin tellus, quis bibendum nibh. Fusce in risus nibh.
              Proin eget pulvinar orci. Phasellus vitae pellentesque nulla, nec
              efficitur velit. Morbi sit amet sem vel lorem pulvinar venenatis
              in sit amet nisi. Fusce in massa turpis. Fusce tortor odio,
              pharetra faucibus dignissim nec, varius et mi. Aliquam ut lacus
              non eros lobortis porttitor.
            </p>
            <p className="text-[16px] font-normal text-justify text-black font-['Open Sans'] leadeing-[155%] my-[16px]">
              Quisque lobortis, ligula at tempor facilisis, lorem tellus
              venenatis ligula, vel aliquet quam nisl interdum leo. Integer
              consequat nisl ac dui volutpat bibendum. Morbi interdum libero ut
              ipsum vehicula, ac commodo augue suscipit. Phasellus posuere,
              ipsum in pretium faucibus, ante diam volutpat tortor, et suscipit
              velit nisl sit amet urna. In velit quam, sodales id rhoncus in,
              molestie sed nisi. Sed convallis quam at nunc feugiat
              pellentesque. Nam nisi felis, laoreet eu urna sit amet, dictum
              pellentesque urna. Quisque nulla mi, faucibus ut mauris molestie,
              vehicula accumsan nibh. Nunc ac faucibus risus. Etiam eu elit at
              est euismod tempus non nec ligula. Pellentesque a metus lacus.
            </p>
            <p className="text-[16px] font-normal text-justify text-black font-['Open Sans'] leadeing-[155%] my-[16px]">
              Donec tempus odio nisi, ac pulvinar ante iaculis non. Quisque
              vitae est ultricies, congue sapien non, venenatis ligula. Fusce
              euismod ipsum eget ipsum consectetur lacinia. Fusce blandit
              molestie vehicula. Cras erat ipsum, vehicula ac molestie
              efficitur, lacinia vel lectus. Suspendisse ac venenatis tellus,
              cursus hendrerit est. Integer sodales sed turpis sed mollis. Nulla
              euismod, elit vel eleifend finibus, urna metus consequat nisi, non
              mattis metus dui at sem. In sit amet odio ac leo ullamcorper
              porttitor a sit amet diam. Nam malesuada enim sit amet facilisis
              ullamcorper. Nunc vitae purus vel lorem viverra ultricies. Etiam
              elit nisi, aliquet ac ex at, lobortis imperdiet tellus.
            </p>
            <p className="text-[16px] font-normal text-justify text-black font-['Open Sans'] leadeing-[155%] my-[16px]">
              Praesent interdum turpis at diam pulvinar condimentum nec vel
              nulla. Ut non aliquet tortor. Sed ullamcorper leo nec felis
              tristique, id hendrerit augue faucibus. Maecenas lacinia volutpat
              est, quis lacinia sem ullamcorper sed. Curabitur imperdiet arcu ut
              purus venenatis eleifend. Pellentesque sed mauris lobortis,
              fringilla urna ac, bibendum est. Suspendisse feugiat luctus ante,
              nec consequat urna porta et. Maecenas blandit, diam id tincidunt
              laoreet, sapien odio faucibus urna, sit amet iaculis dui diam
              vitae nunc. Pellentesque molestie tempus ante, a lacinia metus
              maximus eget. Proin quis convallis justo, vel pharetra quam.
            </p>
          </div>
        </div>
        <div className="w-full my-[16px] h-[135px] mp:h-[55px] flex flex-col-reverse mp:flex-row justify-between items-center">
          <Logo />
          <button
            className="flex justify-center items-center h-[55px] w-[180px] text-white text-[16px] font-['Open Sans'] font-semibold
                            box-border border-2 border-solid border-solid-black rounded-sm leading-[155%] cursor-pointer bg-solid-black 
                            transition-colors duration-700 transform hover:bg-transparent hover:text-black active:bg-gray"
            type="button"
            onClick={() => router.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoofMaintenance;
