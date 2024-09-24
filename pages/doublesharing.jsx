import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdFreeBreakfast, MdDinnerDining } from "react-icons/md";
import { GiSlicedBread } from "react-icons/gi";
import Amenities from "@/components/Amenities";

const doublesharing = () => {
  const roomImage = "/pgimages/two-sharing-1.jpg";
  const miniImages = [
    "/pgimages/two-sharing-1.jpg",
    "/pgimages/two-sharing-2.jpg",
    "/pgimages/two-sharing-3.jpg"
  ];

  const amenities = [
    { image: "/pgimages/dining-4.jpg", name: "Dining Area" },
    { image: "/pgimages/freeze-oven.jpg", name: "Oven" },
    { image: "/pgimages/drinking-water.jpg", name: "Drinking Water" },
    { image: "/pgimages/gym2.jpg", name: "Gym" },
    { image: "/pgimages/parking.jpg", name: "Parking" },
    { image: "/pgimages/washing-mc.jpg", name: "Washing Machine" },
  ];

  return (
    <div className="bg-gradient-to-t from-pastelAliceBlue to-white flex justify-center items-start p-5">
      <div className="flex flex-col md:flex-row w-full max-w-7xl">
        <div className="w-full md:w-3/5 mb-5 md:mb-0">
          <h1 className="text-5xl text-gray-700 mb-5">Double Bed Sharing</h1>

          <div className="relative w-full h-[400px] mb-5">
            <Image
              src={roomImage}
              alt="Room Image"
              className="object-cover w-full h-full rounded-lg"
              fill
            />
          </div>

          <div className="flex gap-4 mb-5">
            {miniImages.map((img, index) => (
              <div key={index} className="relative w-1/3 h-32">
                <Image
                  src={img}
                  alt={`Mini Room Image ${index + 1}`}
                  className="object-cover rounded-lg"
                  fill
                />
              </div>
            ))}
          </div>

          {/* Amenities */}
          <div className="mt-5 mb-5">
            <h2 className="text-4xl font-mono text-gray-700 mb-4">Amenities</h2>
            <div className="grid grid-cols-2 gap-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex flex-col items-center w-full h-[200px]"> {/* Full width and fixed height */}
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={amenity.image}
                      alt={`Amenity Image ${index + 1}`}
                      className="object-cover rounded-lg w-full h-full" // Ensure full width and height
                      height={200} // Maintain height of 200px
                      width={200} // Maintain width of 200px
                    />
                  </div>
                  {/* <p className="mt-2 text-center">{amenity.name}</p> Name under the image */}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="w-full md:w-2/5 p-5">
          <h3 className="text-lg font-bold">Booking Details</h3>
          <p className="mt-2">Starting From: <span className="font-semibold"> ₹8,999.00 </span>(Meal Included)</p>
          <p className="mt-2">Max Check-in Time: <span className="font-semibold">9:30 PM</span></p>
          <p className="mt-2">Security Deposit: <span className="font-semibold">₹15,000</span> (Refundable)</p>

          <div className="mt-5">
            <h1 className="text-xl font-bold mb-4">Some Important Information</h1>

            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">Weekdays</h2>
              <div className="flex items-center space-x-4">
                <span className="flex items-center text-blue-500">
                  <MdFreeBreakfast className="mr-1" size={40} /> Breakfast
                </span>
                <span className="flex items-center text-orange-500">
                  <MdDinnerDining className="mr-1" size={40} /> Dinner
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-2">Weekends</h2>
              <div className="flex items-center space-x-4">
                <span className="flex items-center text-blue-500">
                  <MdFreeBreakfast className="mr-1" size={40} /> Breakfast
                </span>
                <span className="flex items-center text-green-500">
                  <GiSlicedBread className="mr-1" size={40} /> Lunch
                </span>
                <span className="flex items-center text-orange-500">
                  <MdDinnerDining className="mr-1" size={40} /> Dinner
                </span>
              </div>
            </div>
          </div>

          <Link href="/book">
            <button className="mt-5 w-full bg-[#5564AE] text-white py-2 rounded hover:opacity-80">
              Book Now
            </button>
          </Link>
          <Amenities />
          <div className="mt-8"> {/* Add top margin for spacing */}
  <h2 className="text-lg font-bold mb-4">Description</h2> {/* Description Heading */}
  <p className="leading-relaxed text-gray-700 text-justify">
  Experience comfort and convenience in our well-appointed PG accommodations designed to cater to your needs. Our Single Bed Sharing rooms are ideal for students and working professionals alike, offering a cozy and safe environment. Each room is furnished with essential amenities, including high-speed Wi-Fi, air conditioning, and a shared kitchen, ensuring a hassle-free living experience. Enjoy delicious meals provided on-site, along with easy access to nearby markets and transport facilities. Our friendly staff is dedicated to making your stay enjoyable and stress-free, making it the perfect choice for those looking to call this place home.
  </p>
</div>

        </div>
      </div>
    </div>
  );
};

export default doublesharing;
