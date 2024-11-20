import { FaWifi, FaTshirt, FaParking, FaDumbbell } from "react-icons/fa";
import { MdTv } from "react-icons/md";
import { GiCookingPot, GiHotMeal, GiVacuumCleaner, GiCctvCamera } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { IoMdBatteryCharging, IoIosWater } from "react-icons/io";

function LifestyleSection() {
  return (
    <div className="bg-gradient-to-b from-customBlue from-15% via-pastelAliceBlue via-90% to-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <div
            className="relative flex h-[300px] w-full flex-col items-start justify-center rounded-none bg-cover bg-center sm:rounded-3xl sm:h-[400px] md:h-[500px]"
            style={{
              backgroundImage: `url('/images/home-page-banner.webp')`,
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute inset-0 bg-white opacity-70 sm:rounded-3xl" />
            <div className="absolute inset-0 z-10 flex flex-col items-start justify-center w-full p-4 space-y-4 text-center sm:ml-8 sm:text-left lg:w-1/2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold ">
                A lifestyle tailor-made for you
              </div>
              <div className="text-black opacity-90 sm:w-3/4 sm:text-lg">
                With diverse housing options, you&apos;re not just choosing a home;
                you&apos;re crafting a lifestyle that reflects your individuality. Beyond
                mere renting, we&apos;re here to support your everyday living, hassle-free.
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <h1 className="mt-16 font-semibold md:text-gray-700 text-3xl m-auto text-gray-300 ">
            WHAT WE PROVIDE
          </h1>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {/* Card 1 */}
            <div className="flex flex-col items-center w-full min-w-[220px]">
              <FaWifi size={50} className="mb-2 text-blue-500" />
              <span className="font-semibold text-lg text-blue-500">Free WiFi</span>
              <p className="text-center text-gray-900 mt-2">
                Stay connected with high-speed, reliable WiFi available throughout the property.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center w-full min-w-[220px]">
              <MdTv size={50} className="mb-2 text-green-700" />
              <span className="font-semibold text-lg text-green-700">TV</span>
              <p className="text-center text-gray-900 mt-2">
                Enjoy entertainment with cable TV in all common areas for relaxation and fun.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center w-full min-w-[220px]">
              <TbAirConditioning size={50} className="mb-2 text-indigo-700" />
              <span className="font-semibold text-lg text-indigo-700">Air Conditioning</span>
              <p className="text-center text-gray-900 mt-2">
                Stay cool and comfortable with air conditioning available in all rooms.
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center w-full min-w-[220px]">
              <GiCookingPot size={50} className="mb-2 text-yellow-600" />
              <span className="font-semibold text-lg text-yellow-600">Shared Kitchen</span>
              <p className="text-center text-gray-900 mt-2 ">
                Cook your meals in our fully equipped shared kitchen whenever you desire.
              </p>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col items-center w-full min-w-[220px]">
              <FaTshirt size={50} className="mb-2 text-pink-500" />
              <span className="font-semibold text-lg text-pink-500">Laundry Service</span>
              <p className="text-center text-gray-900 mt-2">
                Convenient laundry services to make sure your clothes are always fresh.
              </p>
            </div>

            {/* Card 6 */}
            <div className="flex flex-col items-center w-full min-w-[220px]">
              <FaParking size={50} className="mb-2 text-gray-700" />
              <span className="font-semibold text-lg text-gray-700">Parking Available</span>
              <p className="text-center text-gray-900 mt-2">
                Secure parking spaces available for your vehicles.
              </p>
            </div>

            {/* Card 7 */}
            <div className="flex flex-col items-center w-full min-w-[220px]">
              <GiCctvCamera size={50} className="mb-2 text-red-500" />
              <span className="font-semibold text-lg text-red-500">CCTV Surveillance</span>
              <p className="text-center text-gray-900 mt-2">
                Your safety is our priority with 24/7 CCTV monitoring throughout the property.
              </p>
            </div>

            {/* Card 8 */}
            <div className="flex flex-col items-center w-full min-w-[220px]">
              <GiHotMeal size={50} className="mb-2 text-orange-500" />
              <span className="font-semibold text-lg text-orange-500">Meals Included</span>
              <p className="text-center text-gray-900 mt-2">
                Enjoy healthy and delicious meals provided as part of our package.
              </p>
            </div>

            {/* Card 9 */}
            <div className="flex flex-col items-center w-full min-w-[220px]">
              <GiVacuumCleaner size={50} className="mb-2 text-teal-500" />
              <span className="font-semibold text-lg text-teal-500">Housekeeping</span>
              <p className="text-center text-gray-900 mt-2">
                Regular housekeeping services ensure a clean and comfortable living space.
              </p>
            </div>

            {/* Card 10 */}
            <div className="flex flex-col items-center w-full min-w-[220px]">
              <IoMdBatteryCharging size={50} className="mb-2 text-green-500" />
              <span className="font-semibold text-lg text-green-500">Power Backup</span>
              <p className="text-center text-gray-900 mt-2">
                We offer power backup to ensure you are never left in the dark.
              </p>
            </div>

            {/* Card 11 */}
            <div className="flex flex-col items-center w-full min-w-[220px]">
              <IoIosWater size={50} className="mb-2 text-blue-500" />
              <span className="font-semibold text-lg text-blue-500">Drinking Water</span>
              <p className="text-center text-gray-900 mt-2">
                Safe and filtered drinking water is available 24/7 for your health and comfort.
              </p>
            </div>

            {/* Card 12 */}
            <div className="flex flex-col items-center w-full min-w-[220px]">
              <FaDumbbell size={50} className="mb-2 text-purple-600" />
              <span className="font-semibold text-lg text-purple-600">Gym</span>
              <p className="text-center text-gray-900 mt-2">
                Stay fit with access to a fully equipped gym on the premises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifestyleSection;
