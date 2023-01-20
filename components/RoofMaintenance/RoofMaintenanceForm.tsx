const CtaForm = () => {
  return (
    <form action="https://formspree.io/f/xknagknk" method="POST">
      <ul>
        <li className="mb-[22px]">
          <input
            className='border border-gray w-full p-[22px] leading-tight focus:outline-none focus:shadow-outline"'
            id="name"
            type="text"
            placeholder="Name"
            required
          />
        </li>
        <li className="mb-[22px]">
          <input
            className='border border-gray w-full p-[22px] leading-tight focus:outline-none focus:shadow-outline"'
            id="surname"
            type="text"
            placeholder="Surname"
            required
          />
        </li>
        <li className="mb-[22px]">
          <input
            className='border border-gray w-full p-[22px] leading-tight focus:outline-none focus:shadow-outline"'
            type="email"
            id="mail"
            name="email"
            placeholder="Email"
            required
          />
        </li>
        <li className="mb-[22px]">
          <input
            className='border border-gray w-full p-[22px] leading-tight focus:outline-none focus:shadow-outline"'
            type="text"
            id="adress"
            name="adress"
            placeholder="Adress"
            required
          />
        </li>
        <li className="flex flex-col mb-[20px]">
          <label
            className="text-solid-black font-['Open Sans'] font-semibold text-[16px] leadeing-[167%] text-left pb-[12px]"
            htmlFor="roof'type"
          >
            Maintenance package you would like:
          </label>
          <span className="flex flex-col md:flex-row gap-[17px] mb-[30px]">
            <span className=" flex">
              <span className="flex items-center">
                <input
                  id="maintenance-lite"
                  type="radio"
                  value="Maintenance Lite"
                  name="maintenance-package"
                  className="w-[29px] h-[29px] text-blue bg-gray border-gray"
                  required
                />
                <label
                  htmlFor="maintenance-lite"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  <span className="text-blue">Lite</span> 50$/mo
                </label>
              </span>
            </span>
            <span className=" flex">
              <span className="flex items-center">
                <input
                  id="maintenance-premium"
                  type="radio"
                  value="Maintenance Premium"
                  name="maintenance-package"
                  className="w-[29px] h-[29px] text-blue bg-gray border-gray"
                  required
                />
                <label
                  htmlFor="maintenance-premium"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  <span className="text-blue">Premium</span> 160$/mo
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
            Send
          </button>
        </li>
      </ul>
    </form>
  );
};

export default CtaForm;
