import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-gray-700 body-font bg-pastelAliceBlue">
      <div className="container px-5 py-16 mx-auto flex flex-col items-center">

        {/* Logo in the center */}
        <a className="flex title-font font-bold items-center justify-center text-gray-800 mb-2">
          <Image src="/images/smartlivinglogo-og.png" alt="logo" width={170} height={170} />
        </a>

        {/* Navigation Links in a Single Line */}
        {/* <nav className="flex space-x-8 mx-auto items-center justify-center text-gray-600 font-semibold"> */}
        <nav className=" flex title-font font-bold gap-14  items-center justify-center text-gray-800 mb-2 mt-5">
          <Link href="/" className="hover:text-gray-600 text-xl ml-4">
            Home
          </Link>
          <Link href="/pgs" className="hover:text-gray-600 text-xl ml-4">
            Rooms
          </Link>
          <Link href="tel:+9730771171" className="hover:text-gray-600 text-xl">
            Contact Us
          </Link>
        </nav>
        <div className="bg-pastelAliceBlue mt-10">
          <div className="container mx-auto py-4 px-5 flex justify-center">
            <p className="text-gray-600 text-sm text-center">
              © 2024 Smart Living PG | All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}

    </footer>
  );
}

export default Footer;



