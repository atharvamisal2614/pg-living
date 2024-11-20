import Link from "next/link";
import Image from "next/image";

const pgs = () => {
  return (
    <div className="bg-gradient-to-t from-pastelAliceBlue from-5% to-white flex justify-center items-start p-12">
    <div className="flex flex-wrap gap-6 justify-center md:m-10"> {/* Use flex-wrap for responsiveness */}
      <div className="w-full max-w-sm bg-pastelAliceBlue border-gray-200 rounded-lg shadow-md">
        <Link href="/singlesharing">
          <div className="relative w-full">
            {/* Image section */}
            <Image
              className="object-cover w-full h-2/3 rounded-t-lg" // Adjust height for better appearance
              src="/pgimages/single-bed-image.jpg"
              alt="PG Image" width={500} height={500}
            />
          </div>
          <div className="p-4">
            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800">Single Sharing</h3>
            {/* Location */}
            <p className="text-gray-500">PG in Marunji</p>
            {/* Price */}
            <div className="mt-2 text-primary">
              Starts at <span className="font-semibold">₹9,999.00</span>
            </div>
            {/* Offer Tag */}
            <div className="mt-3">
            <span className="text-sm inline-block px-3 py-2  text-white bg-customBlue rounded-xl p-8 hover:opacity-80">
               Explore this PG
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div className="w-full max-w-sm bg-pastelAliceBlue border-gray-200 rounded-lg shadow-md">
        <Link href="/doublesharing">
          <div className="relative w-full">
            {/* Image section */}
            <Image
              className="object-cover w-full h-2/3 rounded-t-lg"
              src="/pgimages/two-sharing-1.jpg"
              alt="PG Image" width={500} height={500}
            />
          </div>
          <div className="p-4">
            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800">Double Sharing</h3>
            {/* Location */}
            <p className="text-gray-500">PG in Marunji</p>
            {/* Price */}
            <div className="mt-2 text-primary">
              Starts at <span className="font-semibold">₹8,999</span>
            </div>
            {/* Offer Tag */}
            <div className="mt-3">
              <span className="text-sm inline-block px-3 py-2  text-white bg-customBlue rounded-xl p-8 hover:opacity-80">
               Explore this PG
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div className="w-full max-w-sm bg-pastelAliceBlue border-gray-200 rounded-lg shadow-md">
        <Link href="/triplesharing">
          <div className="relative w-full">
            {/* Image section */}
            <Image
              className="object-cover w-full h-2/3 rounded-t-lg"
              src="/pgimages/three-sharing.jpg"
              alt="PG Image" width={500} height={500}
            />
          </div>
          <div className="p-4">
            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800">Tripple Sharing</h3>
            {/* Location */}
            <p className="text-gray-500">PG in Marunji</p>
            {/* Price */}
            <div className="mt-2 text-primary">
              Starts at <span className="font-semibold">₹6,999</span>
            </div>
            {/* Offer Tag */}
            <div className="mt-3">
            <span className="text-sm inline-block px-3 py-2  text-white bg-customBlue rounded-xl p-8 hover:opacity-80">
               Explore this PG
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default pgs;
