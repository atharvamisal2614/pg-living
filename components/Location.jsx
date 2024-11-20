import Link from "next/link";
import { FaMobileAlt } from "react-icons/fa";

function Location() {
    return (
        <div className="container mx-auto py-12 mt-24">
            {/* Wrapper for both addresses */}
            <div className="flex flex-wrap justify-between">

                {/* Left Address */}
                <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                    <h2 className="font-bold text-gray-800 text-2xl mb-4">SMART LIVING PG</h2>
                    <p className="mb-4 font-bold text-gray-800 text-xl">203/2B, Rajiv Nagar South, Mhada Colony, Viman Nagar, Pune,<br/> Maharashtra, 411014</p>

                    {/* Link for contact */}
                    <Link href="tel:9730771171">
                        <div className="flex items-center space-x-2 font-bold text-gray-800 text-xl">
                            <FaMobileAlt size={25} />
                <p>9730771171 / 9923200022</p>
                        </div>
                    </Link>

                    {/* Google Map iframe for Address 1 */}
                    <iframe className='mt-10 md:w-[600px] w-[370px] h-[430px]'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891.0462769646883!2d73.91442300609432!3d18.569865612766293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1a814780011%3A0xdee32050088b900d!2sSMART%20LIVING%20PG!5e0!3m2!1sen!2sin!4v1728034269899!5m2!1sen!2sin"
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Right Address */}
                <div className="w-full md:w-1/2 px-4">
                    <h2 className="font-bold text-gray-800 text-2xl mb-4">SMART LIVING PG KALYANI NAGAR</h2>
                    <p className="mb-4 font-bold text-gray-800 text-xl">Royal Villa, Holy cross road Trimbakeshwar society Sr 12/1/A Kalyani Nagar, Wadgaon Sheri, Extention, Pune, Maharashtra, 411014</p>

                    {/* Link for contact */}
                    <Link href="tel:09028382211">
                        <div className="flex items-center space-x-2 font-bold text-gray-800 text-xl">
                            <FaMobileAlt size={25} />
                <p>09028382211</p>
                        </div>
                    </Link>

                    {/* Google Map iframe for Address 2 */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5088460178067!2d73.9096732!3d18.5510844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1d9cede4b8f%3A0xf8a9779077b73c91!2sSmart%20Living%20PG%20for%20Girls%20and%20Boys!5e0!3m2!1sen!2sin!4v1728035033926!5m2!1sen!2sin" 
                     className="mt-10  md:w-[600px] w-[370px] h-[430px]" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Location;
