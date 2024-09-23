import Image from "next/image";
function LiveYourWay(){
    return(
        <div className="bg-gradient-to-t from-pastelAliceBlue from-90% to-white pb-8 md:py-20">
        <div className="mx-auto max-w-container py-6 sm:px-0">
          <Image
            alt="Live your life"
            width={1000}
            height={1000}
            src="/images/live_your_way.webp"
            className="w-full"
            priority
          />
        </div>
      </div>
    )
}
export default LiveYourWay;