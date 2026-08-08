import { FiSearch, FiUser } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <>
      <section className="w-full bg-[#F8F2ED] fixed top-0 left-0 z-50">
        <nav className="max-w-7xl mx-auto flex items-center justify-around py-6 px-4 sm:px-6 lg:px-10">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-black">
            <a href="">Home</a>
            <a href="">Service</a>
            <a href="">Agents</a>
            <a href="">Contact</a>

            <FiSearch className="cursor-pointer hover:text-[#8B5E3C]" />
            <FiUser className="cursor-pointer hover:text-[#8B5E3C]" />
          </div>


          <div>
            <button className="bg-[#2F1D16] text-white px-4 py-2 text-sm sm:px-5 sm:text-base rounded-lg hover:bg-[#4A2D22] transition">
              Sign up
            </button>
          </div>

          <button className="md:hidden">
            <FiMenu size={28} />
          </button>
          
        </nav>
      </section>
    </>
  );
}

export default Header;
