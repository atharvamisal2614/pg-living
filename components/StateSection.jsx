import Image from 'next/image';

function StatsSection() {
  return (
    <div className="bg-gradient-to-b from-pastelAliceBlue to-white from-90% pb-20">
      <div className="container_align_center p-0 sm:pb-10 md:flex">
        <Image
          alt="Next Numbers"
        
          width={1000}
          height={1000}
          className="object-contain sm:w-1/2"
          src="/images/next_numbers_2.webp"
          priority
        />
        
        <div className="flex flex-wrap items-baseline justify-center gap-6 py-8 xl:ml-10">
          {/* Stats Cards */}
          <div className="w-[40%] md:py-10 xl:space-y-3">
            <div className="text-2xl font-bold text-sky-600 xl:text-4xl">2,00,000+</div>
            <div className="text-xl">Happy customers</div>
          </div>

          <div className="w-[40%] md:py-10 xl:space-y-3">
            <div className="text-2xl font-bold text-sky-600 xl:text-4xl">1,00,000+</div>
            <div className="text-xl">Houses across India</div>
          </div>

          <div className="w-[40%] md:py-10 xl:space-y-3">
            <div className="text-2xl font-bold text-sky-600 xl:text-4xl">9+</div>
            <div className="text-xl">Cities in India</div>
          </div>

          <div className="w-[40%] md:py-10 xl:space-y-3">
            <div className="text-2xl font-bold text-sky-600 xl:text-4xl">₹38+ Cr</div>
            <div className="text-xl">Savings made on brokerage</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
