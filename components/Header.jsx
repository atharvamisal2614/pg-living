import Image from "next/image";
function Header() {
    return (
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
           <Image src='/images/logo.webp' alt='logo' height={100} width={100}/>
            
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {/* <a className="mr-5 bg- text-white">List Your Property</a> */}
            <a href="/owner/list-your-property"><button className="text-white hover:cursor-pointer relative flex flex-none items-center justify-center rounded-full border-1 border-solid text-center font-medium capitalize transition-colors duration-500 hover:opacity-80  
      
  
  
  px-8 py-3
  " style={{backgroundColor:'#5564AE'}}>List your property</button></a>
           
          </nav>
          
        </div>
      </header>
    );
}

export default Header;
