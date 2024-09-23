import Image from "next/image";

function NewBanner() {
  return (
    <div className="bg-secondaryPurple text-black">
      {/* Mobile image */}
      <Image
        alt="find home"
        loading="lazy"
        width={1000}
        height={1000}
        decoding="async"
        className="object-contain md:hidden"
        src="/images/new_home_banner.webp"
        
        style={{ color: "transparent" }}
      />

      <div className="container text-center items-center relative m-auto flex px-4 max-sm:pt-0 md:h-[630px] md:py-16">
        {/* Text content */}
        <div className="text-center md:mt-0 md:w-1/2 md:text-left">
          <p className="my-2 text-lg font-bold text-yellow-500">
            It's all yours!
          </p>
          <p className="text-2xl xl:text-4xl text-white">Your cozy home awaits</p>
          <p className="mt-4 text-center text-gray-200 opacity-80 md:mt-6 md:w-[50%] md:text-left xl:w-[60%]">
            Explore diverse options and make the right move. Let our experts help you with the perfect pick.
          </p>

          {/* Button */}
          <div className="flex max-sm:justify-center">
            <button
              className="relative flex flex-none items-center justify-center rounded-full border border-solid text-center font-medium capitalize transition-colors duration-500 hover:opacity-80
              px-8 py-3
              border-neutral-white bg-white textblack hover:bg-gray-300  disabled:border-transparent disabled:bg-neutral-ghost-white disabled:text-neutral-silver disabled:hover:opacity-100 my-10"
            >
              Schedule a Site Visit
            </button>
          </div>
        </div>

        {/* Desktop image */}
        <div className="absolute -right-10 hidden sm:-bottom-20 md:block">
          <Image
            alt="find home"
            loading="lazy"
            width={1000}
            height={1000}
            decoding="async"
            className="sm:w-[720px] xl:w-[820px]"
            src="/images/new_home_banner.webp"
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </div>
  );
}
export default NewBanner