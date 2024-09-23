import Image from "next/image";

function Properties() {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-b from-pastelAliceBlue from-90% to-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="sm:flex-row py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 text-lg mx-10 mb-2 sm:mb-0">
              Curated especially for you
            </h1>
            <p className="sm:w-3/5 leading-relaxed font-bold title-font text-4xl sm:pl-10">
              Recommended properties
            </p>
          </div>
        </div>

        {/* Flex container to align cards in a row, responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="w-full bg-white border border-gray-200 rounded-lg hover:shadow-2xl shadow-md">
            <a href="#">
              <div className="relative w-full h-[300px] md:h-[300px]">
                <Image
                  className="rounded-t-lg object-cover"
                  src="/images/card1.gif"
                  alt="card1"
                  fill
                />
              </div>
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                  Semi furnished 3 BHK in Sonnenahalli Colony,
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">
                Located at Sonnenahalli Colony, Bengaluru, this spacious 3 BHK
                semi-furnished house is priced at ₹55,000 for the full house,
                with a security deposit of ₹5,00,000, and a floor size of 2800
                sq.ft. The house features two bathrooms. Book now and enjoy the
                comfort!
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#5564AE] rounded-lg hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Visit
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full bg-white border border-gray-200 rounded-lg hover:shadow-2xl shadow-md">
            <a href="#">
              <div className="relative w-full h-[300px] md:h-[300px]">
                <Image
                  className="rounded-t-lg object-cover"
                  src="/images/card2.gif"
                  alt="card2"
                  fill
                />
              </div>
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                  Semi furnished 3 BHK in Sonnenahalli Colony,
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">
                Located at Sonnenahalli Colony, Bengaluru, this spacious 3 BHK
                semi-furnished house is priced at ₹55,000 for the full house,
                with a security deposit of ₹5,00,000, and a floor size of 2800
                sq.ft. The house features two bathrooms. Book now and enjoy the
                comfort!
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#5564AE] rounded-lg hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Visit
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full bg-white border border-gray-200 rounded-lg hover:shadow-2xl shadow-md">
            <a href="#">
              <div className="relative w-full h-[300px] md:h-[300px]">
                <Image
                  className="rounded-t-lg object-cover"
                  src="/images/card3.gif"
                  alt="card3"
                  fill
                />
              </div>
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                  Semi furnished 3 BHK in Sonnenahalli Colony,
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">
                Located at Sonnenahalli Colony, Bengaluru, this spacious 3 BHK
                semi-furnished house is priced at ₹55,000 for the full house,
                with a security deposit of ₹5,00,000, and a floor size of 2800
                sq.ft. The house features two bathrooms. Book now and enjoy the
                comfort!
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#5564AE] rounded-lg hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Visit
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full bg-white border border-gray-200 rounded-lg hover:shadow-2xl shadow-md">
            <a href="#">
              <div className="relative w-full h-[300px] md:h-[300px]">
                <Image
                  className="rounded-t-lg object-cover"
                  src="/images/card1.gif"
                  alt="card4"
                  fill
                />
              </div>
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                  Semi furnished 3 BHK in Sonnenahalli Colony,
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">
                Located at Sonnenahalli Colony, Bengaluru, this spacious 3 BHK
                semi-furnished house is priced at ₹55,000 for the full house,
                with a security deposit of ₹5,00,000, and a floor size of 2800
                sq.ft. The house features two bathrooms. Book now and enjoy the
                comfort!
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#5564AE] rounded-lg hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Visit
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Popular Localities Section */}
        <div className="mt-20">
          <p className="text-lg text-gray-700">In and around</p>
          <h1 className="text-4xl mt-2">Popular Localities</h1>
        </div>
      </div>
    </section>
  );
}

export default Properties;
