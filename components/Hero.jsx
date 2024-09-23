import Image from 'next/image'; // Next.js's Image component for optimized image handling

function Hero() {
  return (
    <>
      <div className="relative max-h-[calc(100vh-70px)] max-sm:min-h-[350px] md:overflow-hidden">
        <Image
          alt="home page background"
          width={1200}
          height={900}
          decoding="async"
          src="/images/home-page-banner.webp"
          
          className="w-full object-cover"
          style={{ color: 'transparent' }}
        />
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-secondaryPurple from-50% opacity-80" />
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-secondaryPurple from-40%" />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex flex-col items-center justify-center max-sm:mt-6 md:mt-[20vh]">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-4 text-lg font-semibold text-yellow-500 max-sm:hidden">
              Homes for rent that fit your timeline
            </h2>
            <h1 className="text-white text-5xl max-sm:text-2xl">
              Discover a place you will love
            </h1>
            <div className="relative mt-5 md:mt-10">
              <div className="absolute top-0 h-full w-full rounded-2xl rounded-b-[50px] bg-opacity-30 bg-gradient-to-b from-[#9999CC]  to-[#2843CA] opacity-30"></div>
              <div className=" relative  flex flex-col items-center max-sm:max-w-[calc(100vw-10px)] md:min-w-[800px]">
                <div className="flex flex-wrap gap-2 p-3 max-sm:hidden">
                  <button className="relative flex flex-none items-center justify-center rounded-full border-1 border-solid text-center font-medium capitalize transition-colors duration-500 hover:opacity-80 px-8 py-3 border-primary bg-primary text-white hover:!bg-secondaryPurple">
                    Full House
                  </button>
                  <button className="relative flex flex-none items-center justify-center rounded-full border-1 border-solid text-center font-medium capitalize transition-colors duration-500 hover:opacity-80 px-8 py-3 border-white text-white hover:bg-neutral-ghost-white hover:!bg-secondaryPurple">
                    Flatmates
                  </button>
                  <button className="relative flex flex-none items-center justify-center rounded-full border-1 border-solid text-center font-medium capitalize transition-colors duration-500 hover:opacity-80 px-8 py-3 border-neutral-white text-white hover:bg-neutral-ghost-white hover:!bg-secondaryPurple">
                    Co-Living/PG
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 p-2 md:hidden">
                  <div className="bg-primary rounded-full p-1 px-2 text-[11px] text-white">Full House</div>
                  <div className="rounded-full p-1 px-2 text-[11px] text-white">Flatmates</div>
                  <div className="rounded-full p-1 px-2 text-[11px] text-white">Co-Living/PG</div>
                </div>
                <div className="flex w-full items-center rounded-full bg-white p-1 max-sm:w-[calc(100vw-10px)] max-sm:pr-3 max-sm:text-[10px] md:p-3">
                  <div className="relative">
                    <div className="max-sm:text-[11px] flex cursor-pointer items-center px-2 text-sm font-semibold capitalize">
                      Bangalore
                      <span className="h-6 w-6 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                          <path d="M480-362q-8 0-15-2.5t-13-8.5L268-557q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-373q-6 6-13 8.5t-15 2.5Z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="h-5 w-[2px] bg-gray-400 md:mx-3 md:h-10"></div>
                  <div className="relative flex w-full items-center">
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder="Search Locality"
                      className="w-full rounded-lg p-3 pr-10 outline-none !px-2"
                      name="nestaway-area"
                    />
                    <button className="relative flex flex-none items-center justify-center rounded-full border-1 border-solid text-center font-medium capitalize transition-colors duration-500 hover:opacity-80 px-8 py-3 border-primary bg-[#5564AE] text-white !cursor-not-allowed max-sm:hidden">
                      <div className="mr-2 h-5 w-5 ">
                        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.9172 9.66621H10.2589L10.0255 9.44121C11.0255 8.27454 11.5422 6.68288 11.2589 4.99121C10.8672 2.67455 8.93385 0.824545 6.60052 0.541211C3.07552 0.107878 0.108855 3.07454 0.542188 6.59955C0.825521 8.93288 2.67552 10.8662 4.99219 11.2579C6.68385 11.5412 8.27552 11.0245 9.44219 10.0245L9.66719 10.2579V10.9162L13.2089 14.4579C13.5505 14.7995 14.1089 14.7995 14.4505 14.4579C14.7922 14.1162 14.7922 13.5579 14.4505 13.2162L10.9172 9.66621ZM5.91719 9.66621C3.84219 9.66621 2.16719 7.99121 2.16719 5.91621C2.16719 3.84121 3.84219 2.16621 5.91719 2.16621C7.99219 2.16621 9.66719 3.84121 9.66719 5.91621C9.66719 7.99121 7.99219 9.66621 5.91719 9.66621Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex w-full items-center justify-around overflow-hidden rounded-lg bg-opacity-50 max-sm:w-fit md:mt-10 md:px-6 md:py-6">
              <div className="flex items-center max-sm:flex-col max-sm:justify-center max-sm:text-center md:gap-3">
                <div className="h-14 w-14 rounded-lg p-2 max-sm:h-10 max-sm:w-10 md:p-3">
                  <Image alt="nestaway numbers icon" width={100} height={100} src="/svg/golden-home.svg" />
                </div>
                <div className="text-sm font-bold text-white max-sm:text-[10px] md:text-2xl">
                  <span id="rented_homes">1,00,000+</span>
                  <div className="w-20 text-[10px] text-white opacity-80 max-sm:text-[9px] md:text-sm">House Rented</div>
                </div>
              </div>
              <div className="mx-6 h-8 w-[1px] bg-primary max-sm:mx-3"></div>
              <div className="flex items-center max-sm:flex-col max-sm:justify-center max-sm:text-center md:gap-3">
                <div className="h-14 w-14 rounded-lg p-2 max-sm:h-10 max-sm:w-10 md:p-3">
                  <Image alt="nestaway numbers icon" width={100} height={100} src="/svg/golden-people.svg" />
                </div>
                <div className="text-sm font-bold text-white max-sm:text-[10px] md:text-2xl">
                  <span id="tenants_found">2,00,000+</span>
                  <div className="w-20 text-[10px] text-white opacity-80 max-sm:text-[9px] md:text-sm">Happy Customers</div>
                </div>
              </div>
              <div className="mx-6 h-8 w-[1px] bg-primary max-sm:mx-3"></div>
              <div className="flex items-center max-sm:flex-col max-sm:justify-center max-sm:text-center md:gap-3">
                <div className="h-14 w-14 rounded-lg p-2 max-sm:h-10 max-sm:w-10 md:p-3">
                  <Image alt="nestaway numbers icon" width={100} height={100} src="/svg/golden-key.svg" />
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
