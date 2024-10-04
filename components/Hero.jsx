import Image from 'next/image'; // Next.js's Image component for optimized image handling

function Hero() {
  return (
    <>
      <div className="relative max-h-[calc(100vh-70px)] max-sm:min-h-[350px] md:overflow-hidden mt-3">
        <Image
          alt="home page background"
          width={1200}
          height={900}
          decoding="async"
          src="/images/home-page-banner.webp"
          
          className="w-full object-cover"
          style={{ color: 'transparent' }}
        />
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-secondaryPurple from-50% opacity-10 " />
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-secondaryPurple from-40%" />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex flex-col items-center justify-center max-sm:mt-6 md:mt-[20vh]">
          <div className="flex flex-col items-center justify-center">
           
            
            <div className="relative mt-5 md:mt-10">
             
              <div className=" relative  flex flex-col items-center max-sm:max-w-[calc(100vw-10px)] md:min-w-[800px]">
                <div className="flex flex-wrap gap-2 p-3 max-sm:hidden">
                </div>
              </div>
            </div>
            <div className="mt-4 flex w-full items-center justify-around overflow-hidden rounded-lg bg-opacity-50 max-sm:w-fit md:mt-10 md:px-6 md:py-6">
              <div className="flex items-center max-sm:flex-col max-sm:justify-center max-sm:text-center md:gap-3">
                <div className="h-14 w-14 rounded-lg p-2 max-sm:h-10 max-sm:w-10 md:p-3">
                  <Image alt="smart living pg numbers icon" width={100} height={100} src="/svg/golden-home.svg" />
                </div>
                <div className="text-sm font-bold text-white max-sm:text-[10px] md:text-2xl">
                  <span id="rented_homes">1,00,000+</span>
                  <div className="w-20 text-[10px] text-white opacity-80 max-sm:text-[9px] md:text-sm">House Rented</div>
                </div>
              </div>
              <div className="mx-6 h-8 w-[1px] bg-primary max-sm:mx-3"></div>
              <div className="flex items-center max-sm:flex-col max-sm:justify-center max-sm:text-center md:gap-3">
                <div className="h-14 w-14 rounded-lg p-2 max-sm:h-10 max-sm:w-10 md:p-3">
                  <Image alt="smart living pg numbers icon" width={100} height={100} src="/svg/golden-people.svg" />
                </div>
                <div className="text-sm font-bold text-white max-sm:text-[10px] md:text-2xl">
                  <span id="tenants_found">2,00,000+</span>
                  <div className="w-20 text-[10px] text-white opacity-80 max-sm:text-[9px] md:text-sm">Happy Customers</div>
                </div>
              </div>
              <div className="mx-6 h-8 w-[1px] bg-primary max-sm:mx-3"></div>
              <div className="flex items-center max-sm:flex-col max-sm:justify-center max-sm:text-center md:gap-3">
                <div className="h-14 w-14 rounded-lg p-2 max-sm:h-10 max-sm:w-10 md:p-3">
                  <Image alt="smart living pg numbers icon" width={100} height={100} src="/svg/golden-key.svg" />
                </div>
                <div className="text-sm font-bold text-white max-sm:text-[10px] md:text-2xl">
                  <span id="home_owners">45,000+</span>
                  <div className="w-20 text-[10px] text-white opacity-80 max-sm:text-[9px] md:text-sm">Trusted Owners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
