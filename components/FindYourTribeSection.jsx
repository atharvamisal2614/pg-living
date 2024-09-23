// import Image from 'next/image';

// function FindYourTribeSection() {
//   return (
//     <div className="container mx-auto my-4 px-2 md:my-8">
//       <div className="flex flex-col md:flex-row">
//         {/* Text Section */}
//         <div className="order-2 w-full space-y-8 md:order-1 lg:w-2/5">
//           <div className="my-2 hidden space-y-2 text-2xl md:block md:text-4xl">
//             <div>Find your tribe,</div>
//             <div>live your life</div>
//           </div>
//           <div className="mb-2 text-2xl md:hidden">
//             <div>Find your tribe, live your life</div>
//           </div>
//           <div className="text-xl text-gray-500">
//             It's more than just a place to live it is where moments come alive. From lively Halloween parties to cultural celebrations, every event is a chance to live life to the fullest.
//           </div>
//           <button className="relative flex items-center justify-center rounded-full border-1 border-solid border-primary bg-[#5564AE] text-white font-medium capitalize transition-colors duration-500 hover:opacity-80 px-8 py-3 w-full md:w-auto">
//             Find your perfect home
//           </button>
//         </div>

//         {/* Image Section */}
//         <div className="order-1 w-full md:order-2 lg:mb-0 lg:w-1/2">
//           <Image
//             alt="Find Your Tribe"
//             width={610}
//             height={415}
//             src="/images/tribe.webp"
//             priority
//             className="object-contain md:ml-52"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FindYourTribeSection;




import Image from 'next/image';

function FindYourTribeSection() {
  return (
    <div className="container mx-auto my-4 px-2 md:my-8">
      <div className="flex flex-col md:flex-row">
        {/* Text Section */}
        <div className="order-2 w-full space-y-8 md:order-1 lg:w-2/5">
          <div className="my-2 hidden space-y-2 text-2xl md:block md:text-4xl">
            <div>Find your tribe,</div>
            <div>live your life</div>
          </div>
          <div className="mb-2 text-2xl md:hidden">
            <div>Find your tribe, live your life</div>
          </div>
          <div className="text-xl text-gray-500">
            It&apos;s more than just a place to live; it is where moments come alive. From lively Halloween parties to cultural celebrations, every event is a chance to live life to the fullest.
          </div>
          <button className="relative flex items-center justify-center rounded-full border-1 border-solid border-primary bg-[#5564AE] text-white font-medium capitalize transition-colors duration-500 hover:opacity-80 px-8 py-3 w-full md:w-auto">
            Find your perfect home
          </button>
        </div>

        {/* Image Section */}
        <div className="order-1 w-full md:order-2 lg:mb-0 lg:w-1/2">
          <Image
            alt="Find Your Tribe"
            width={610}
            height={415}
            src="/images/tribe.webp"
            priority
            className="object-contain md:ml-52"
          />
        </div>
      </div>

 
     
    </div>
  );
}

export default FindYourTribeSection;
