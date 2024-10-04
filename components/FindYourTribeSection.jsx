import Image from 'next/image';
import Link from 'next/link';
import { FaBed } from 'react-icons/fa';
import { MdKingBed } from 'react-icons/md';
import { IoIosBed } from 'react-icons/io';
function FindYourTribeSection() {
  return (
    <div className="container mx-auto my-8 px-4">
      <div className="flex flex-col items-center md:flex-row md:items-start">
        {/* Image Section */}
        <div className="mt-8 w-full md:mt-0 md:w-3/5 flex justify-center">
          <Image
            alt="Find Your Tribe"
            width={610}
            height={415}
            src="/images/tribe.webp"
            priority
            className="object-contain mt-24"
          />
        </div>

        {/* Text Section */}
        <div className="w-full space-y-8 text-center md:text-left md:w-2/5 md:mr-10">
          <div className="text-3xl font-bold md:text-4xl">
            <div>Find your perfect room,</div>
            <div>tailored for your needs</div>
          </div>
          <div className="text-xl text-gray-600">
            Choose the room that best suits your lifestyle, whether you&apos;re looking for privacy or a shared living experience. Each option provides a cozy environment with access to essential amenities.
          </div>

          {/* Room Details */}
          <div className="space-y-6">
            {/* Single Room */}
            <div className="flex items-start space-x-4 text-left"> {/* Ensures text aligns left on mobile */}
              <FaBed size={40} className="text-blue-500" /> 
              <div>
                <div className="text-2xl font-semibold">Single Bed Room</div>
                <div className="text-gray-500">A private room for those who prefer privacy, featuring essential amenities like Wi-Fi and air conditioning.</div>
              </div>
            </div>
            
            {/* Double Room */}
            <div className="flex items-start space-x-4 text-left"> {/* Ensures text aligns left on mobile */}
              <IoIosBed size={40} className="text-green-500" />
              <div>
                <div className="text-2xl font-semibold">Double Sharing Room</div>
                <div className="text-gray-500">A shared room for two, perfect for those looking to split rent while still enjoying privacy and comfort.</div>
              </div>
            </div>
            
            {/* Triple Room */}
            <div className="flex items-start space-x-4 text-left"> {/* Ensures text aligns left on mobile */}
              <MdKingBed size={50} className="text-red-500" />
              <div>
                <div className="text-2xl font-semibold">Triple Sharing Room</div>
                <div className="text-gray-500">Ideal for groups or those who enjoy a more social living environment, complete with all the basic amenities.</div>
              </div>
            </div>
          </div>

          <Link href="/pgs">
            <button className="mt-6 inline-flex items-center justify-center rounded-full bg-[#5564AE] text-white font-medium px-8 py-3 w-full md:w-auto hover:opacity-80 transition-opacity">
              Find your perfect Room
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FindYourTribeSection;
