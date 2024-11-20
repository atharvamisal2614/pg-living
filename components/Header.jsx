import Image from "next/image";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
function Header() {
    return (
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mt-5">
           <Image src='/images/smartlivinglogo-og.png' alt='logo' height={150} width={150}/>
            
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-5">
            {/* <a className="mr-5 bg- text-white">List Your Property</a> */}
            <Link href="/pgs"><button className="text-white hover:cursor-pointer relative flex flex-none items-center justify-center rounded-full border-1 border-solid text-center font-medium capitalize transition-colors duration-500 hover:opacity-80 px-8 py-3 bg-customBlue">
            Explore Rooms</button></Link>
            <Link href="tel:+9730771171" passHref><button className="text-white hover:cursor-pointer relative flex flex-none items-center justify-center rounded-full border-1 border-solid text-center font-medium capitalize transition-colors duration-500 hover:opacity-80 px-8 py-3 bg-customBlue">
            <IoCallOutline size={20} className="mr-3" />
            9730771171 / 9923200022</button></Link>
          </nav>
          
        </div>
      </header>
    );
}

export default Header;




