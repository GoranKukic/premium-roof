import { useRouter } from 'next/router';
import en from '../../locales/en';
import sr from '../../locales/sr';

const CtaForm = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : sr;

  return (
    <form action="https://formspree.io/f/xknagknk" method="POST">
      <ul>
        <li className="mb-[22px]">
          <input
            className='border border-gray w-full p-[22px] leading-tight focus:outline-none focus:shadow-outline"'
            id="name"
            type="text"
            placeholder={t.ctaFormName}
            required
          />
        </li>
        <li className="mb-[22px]">
          <input
            className='border border-gray w-full p-[22px] leading-tight focus:outline-none focus:shadow-outline"'
            id="surname"
            type="text"
            placeholder={t.ctaFormSurname}
            required
          />
        </li>
        <li className="mb-[22px]">
          <input
            className='border border-gray w-full p-[22px] leading-tight focus:outline-none focus:shadow-outline"'
            type="email"
            id="mail"
            name="email"
            placeholder={t.ctaFormEmail}
            required
          />
        </li>
        <li className="mb-[22px]">
          <input
            className='border border-gray w-full p-[22px] leading-tight focus:outline-none focus:shadow-outline"'
            type="text"
            id="adress"
            name="adress"
            placeholder={t.ctaFormAdress}
            required
          />
        </li>
        <li className="flex flex-col mb-[20px]">
          <label
            className="text-solid-black font-['Open Sans'] font-semibold text-[16px] leadeing-[167%] text-left pb-[12px]"
            htmlFor="roof'type"
          >
            {t.ctaFormRoofType}
          </label>
          <span className="flex flex-col md:flex-row gap-[17px]">
            <span className=" flex">
              <span className="flex items-center">
                <input
                  defaultChecked
                  id="gable"
                  type="radio"
                  value="gable"
                  name="roof-type"
                  className="w-[29px] h-[29px] text-blue bg-gray border-gray"
                  required
                />
                <label
                  htmlFor="gable"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {t.ctaFormRoofTypeGable}
                </label>
              </span>
            </span>
            <span className=" flex">
              <span className="flex items-center">
                <input
                  id="dutch-gable"
                  type="radio"
                  value="dutch-gable"
                  name="roof-type"
                  className="w-[29px] h-[29px] text-blue bg-gray border-gray"
                  required
                />
                <label
                  htmlFor="dutch-gable"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {t.ctaFormRoofTypeDutchGable}
                </label>
              </span>
            </span>
            <span className=" flex">
              <span className="flex items-center flex-row">
                <input
                  id="flat"
                  type="radio"
                  value="flat"
                  name="roof-type"
                  className="w-[29px] h-[29px] text-blue bg-gray border-gray"
                  required
                />
                <label
                  htmlFor="flat"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {t.ctaFormRoofTypeFlatRoof}
                </label>
              </span>
            </span>
            <span className=" flex">
              <span className="flex items-center">
                <input
                  id="gambrel"
                  type="radio"
                  value="gambrel"
                  name="roof-type"
                  className="w-[29px] h-[29px] text-blue bg-gray border-gray"
                  required
                />
                <label
                  htmlFor="gambrel"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Gambrel
                </label>
              </span>
            </span>
            <span className=" flex">
              <span className="flex items-center">
                <input
                  id="mansard"
                  type="radio"
                  value="mansard"
                  name="roof-type"
                  className="w-[29px] h-[29px] text-blue bg-gray border-gray"
                  required
                />
                <label
                  htmlFor="mansard"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {t.ctaFormRoofTypeMansard}
                </label>
              </span>
            </span>
          </span>
        </li>
        <li className="flex flex-col mb-[40px]">
          <label
            className="text-solid-black font-['Open Sans'] font-semibold text-[16px] leadeing-[167%] text-left pb-[12px]"
            htmlFor="roofing-tiles"
          >
            {t.ctaFormDesc2}
          </label>
          <span className="flex flex-col md:flex-row gap-[17px]">
            <span className=" flex">
              <span className="flex items-center">
                <input
                  defaultChecked
                  id="clay-roof-tiles"
                  type="radio"
                  value="clay-roof-tiles"
                  name="cover"
                  className="w-[29px] h-[29px] text-blue bg-gray border-gray"
                  required
                />
                <label
                  htmlFor="clay-roof-tiles"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {t.ctaFormTilesTypeClay}
                </label>
              </span>
            </span>
            <span className=" flex">
              <span className="flex items-center">
                <input
                  id="concrete-tiles"
                  type="radio"
                  value="concrete-tiles"
                  name="cover"
                  className="w-[29px] h-[29px] text-blue bg-gray border-gray"
                  required
                />
                <label
                  htmlFor="concrete-tiles"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {t.ctaFormTilesTypeConcrete}
                </label>
              </span>
            </span>
            <span className=" flex">
              <span className="flex items-center">
                <input
                  id="slate-tiles"
                  type="radio"
                  value="no-cover"
                  name="cover"
                  className="w-[29px] h-[29px] text-blue bg-gray border-gray"
                  required
                />
                <label
                  htmlFor="slate-tiles"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {t.ctaFormTilesTypeSlate}
                </label>
              </span>
            </span>
          </span>
        </li>
        <li>
          <button
            className="flex justify-center items-center h-[55px] w-full text-white text-[16px] font-['Open Sans'] font-semibold
                           box-border border-2 border-solid border-solid-black rounded-sm leading-[155%] cursor-pointer bg-solid-black
                           transition-colors duration-700 transform hover:bg-white hover:text-black active:bg-gray"
            type="submit"
            value="Submit"
          >
            {t.ctaFormBtn}
          </button>
        </li>
      </ul>
    </form>
  );
};

export default CtaForm;
