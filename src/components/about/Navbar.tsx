
import Image from 'next/image';
import logoImage from "../about/assets/images/logosaas.png";
import MenuIcon from "../about/assets/icons/menu.svg";


export const Navbar = () => {
  return (
    <div className="bg-black">
  <div className="px-4">
    <div className="py-4 flex items-center justify-between">
      <div className="relative">
        <div className="absolute w-full top-2 bottom-0 
        bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF,#FCD6FF)] 
        blur-md"></div>
      <Image src={logoImage} alt="Saans logo" className="h-12 w-12 relative" />
      </div>
      <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
      <MenuIcon className="text-white"/>
    </div>
    <nav className="gap-6 items-center hidden sm:flex">
      <a href="/about" className="text-opacity-60 text-white hover:text-white transition">About</a>
      <a href="#" className="text-opacity-60 text-white hover:text-white transition">Features</a>
      <a href="#" className="text-opacity-60 text-white hover:text-white transition">Updates</a>
      <a href="#" className="text-opacity-60 text-white hover:text-white transition">Help</a>
      <a href="#" className="text-opacity-60 text-white hover:text-white transition">Customers</a>
    <button className="bg-white py-2 px-4 rounded-lg" >Get for free</button>
        </nav>
    </div>
    </div>
    </div>

   ); 
};
