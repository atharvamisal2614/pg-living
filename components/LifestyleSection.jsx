import Image from 'next/image';

function LifestyleSection() {
  return (
    <div className="bg-gradient-to-b from-secondaryPurple from-15% via-pastelAliceBlue to-pastelAliceBlue">
      <div className="container_align_center">
        <div className="flex flex-col w-full flex-1">
          {/* Hero Section */}
          <div
            className="relative flex h-[300px] w-full flex-col items-start justify-center rounded-none bg-cover bg-center sm:rounded-3xl sm:h-[400px] md:h-[500px]"
            style={{
              backgroundImage: `url('/images/home-page-banner.webp')`,
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* White Overlay for Background Only */}
            <div className="absolute inset-0 bg-white opacity-70 sm:rounded-3xl" />

            {/* Text container absolutely positioned over image */}
            <div className="absolute inset-0 z-10 flex flex-col items-start justify-center w-full p-4 space-y-4 text-center sm:ml-8 sm:text-left lg:w-1/2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold space-y-1">
                <div>A lifestyle tailor-</div>
                <div>made for you</div>
              </div>
              <div className="text-black opacity-90 sm:w-3/4 sm:text-lg">
                With diverse housing options, you're not just choosing a home;
                you're crafting a lifestyle that reflects your individuality.
                Beyond mere renting, we're here to support your everyday living,
                hassle-free.
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            {/* Card 1 */}
            <div className="flex flex-col items-start w-[95%] min-w-[220px]">
              <div className="pt-6">
                <Image alt="Privacy Icon" width={60} height={60} src="/svg/privacy.svg" />
              </div>
              <div className="mb-2 mt-6 text-lg font-bold sm:text-xl">Unmatched Privacy</div>
              <div className="text-gray-800 text-justify opacity-70">
                We're committed to protecting your privacy. Throughout your rental journey, we will be there for you every step of the way.
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-start w-full min-w-[220px]">
              <div className="pt-6">
                <Image alt="Flex Contract Icon" width={40} height={60} src="/svg/flexContractIcon.svg" />
              </div>
              <div className="mb-2 mt-6 text-lg font-bold sm:text-xl">Instant Move-In</div>
              <div className="text-gray-800 text-justify opacity-70">
                Say goodbye to lengthy waits. Find, finalize, and move into your dream home without any delay.
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-start w-full min-w-[220px]">
              <div className="pt-6">
                <Image alt="Free Money Icon" width={60} height={60} src="/svg/freeMoneyIcon.svg" />
              </div>
              <div className="mb-2 mt-6 text-lg font-bold sm:text-xl">Lowest Security Deposit</div>
              <div className="text-gray-800 text-justify opacity-70">
                Ease rental stress by paying a minimal security deposit. Understanding financial challenges, we aim for convenience, ensuring a smoother rental journey for you.
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-start w-full min-w-[220px]">
              <div className="pt-6">
                <Image alt="Thriving Icon" width={60} height={60} src="/svg/thrivingIcon.svg" />
              </div>
              <div className="mb-2 mt-6 text-lg font-bold sm:text-xl">Nest n Network</div>
              <div className="text-gray-800 text-justify opacity-70">
                From shared spaces to curated events, we foster a space where you're not just renting a home but building the future.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifestyleSection;
