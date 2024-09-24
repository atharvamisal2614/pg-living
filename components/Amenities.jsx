import { FaWifi, FaTshirt, FaParking } from "react-icons/fa";
import { MdTv} from "react-icons/md";
import { GiCookingPot, GiHotMeal, GiVacuumCleaner, GiCctvCamera } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { IoMdBatteryCharging,IoIosWater  } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";

const Amenities = () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-5 text-center">Top Amenities</h2>
      <div className="grid grid-cols-3 gap-8">
        {/* Row 1 */}
        <div className="flex flex-col items-center text-blue-500">
          <FaWifi size={50} className="mb-2" />
          <span>Free WiFi</span>
        </div>
        <div className="flex flex-col items-center text-green-500">
          <MdTv size={50} className="mb-2" />
          <span>TV</span>
        </div>
        <div className="flex flex-col items-center text-indigo-500">
          <TbAirConditioning size={50} className="mb-2" />
          <span>Air Conditioning</span>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col items-center text-yellow-600">
          <GiCookingPot size={50} className="mb-2" />
          <span>Shared Kitchen</span>
        </div>
        <div className="flex flex-col items-center text-pink-500">
          <FaTshirt size={50} className="mb-2" />
          <span>Laundry Service</span>
        </div>
        <div className="flex flex-col items-center text-gray-700">
          <FaParking size={50} className="mb-2" />
          <span>Parking Available</span>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col items-center text-red-500">
          <GiCctvCamera  size={50} className="mb-2" />
          <span>CCTV Surveillance</span>
        </div>
        <div className="flex flex-col items-center text-orange-500">
          <GiHotMeal size={50} className="mb-2" />
          <span>Meals Included</span>
        </div>
        <div className="flex flex-col items-center text-teal-500">
          <GiVacuumCleaner size={50} className="mb-2" />
          <span>Housekeeping</span>
        </div>

        <div className="flex flex-col items-center text-green-500">
          <IoMdBatteryCharging size={50} className="mb-2" />
          <span>Power Backup</span>
        </div>

        <div className="flex flex-col items-center text-blue-500">
          <IoIosWater size={50} className="mb-2" />
          <span>Drinking Water</span>
        </div>

        <div className="flex flex-col items-center text-purple-600">
          <FaDumbbell size={50} className="mb-2" />
          <span>Gym</span>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
