import logo from "../../assets/images/logo.png";
import { IoLogoInstagram } from "react-icons/io";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#DDC7BB]  text-[#2B1B12] mt-20">
      <div className="w-full max-w-350 mx-auto px-6 sm:px-8 lg:px-10 py-12 sm:py-14">

        {/* Footer Content */}
        <div className="grid grid-cols-1 justify-items-center sm:justify-items-start sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Logo */}
          <div className="lg:col-span-1 text-center sm:text-left">
            <img src={logo} alt="Dwello Logo" className="w-auto max-w-35 pb-4 mx-auto sm:mx-0" />

            <p className="max-w-55 text-sm leading-6">
              Bring You closer to your dream home, one click at a time.
            </p>
          </div>

          {/* About */}
          <div className="text-center sm:text-left">
            <h3 className="font-black pb-4">About</h3>

            <div className="space-y-3 text-sm">
              <p><a href="#">Our Story</a></p>
              <p><a href="#"> Careers </a></p>
              <p><a href="#">Our Team</a></p>
              <p><a href="#">Resources</a></p>
            </div>
          </div>

          {/* Support */}
          <div className="text-center sm:text-left">
            <h3 className="font-black pb-4">Support</h3>

            <div className="space-y-3 text-sm">
              <p><a href="#">FAQ</a></p>
              <p><a href="#">Contact Us</a></p>
              <p><a href="#"> Help Center</a></p>
              <p><a href="#">Terms of Service</a></p>
            </div>
          </div>

          {/* Find Us */}
          <div className="text-center sm:text-left">
            <h3 className="font-black pb-4">Find Us</h3>

            <div className="space-y-3 text-sm">
              <p><a href="#">Event</a></p>
              <p><a href="#">Location</a></p>
              <p><a href="#">Newsletter</a></p>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center sm:text-left">
            <h3 className="font-black pb-4">Our Social</h3>

            <div className="space-y-3 text-sm">
              <a href="#" className="flex items-center gap-2">
                <IoLogoInstagram size={20} />
                <span>Instagram</span>
              </a>
              <a
                href="#" className="flex items-center gap-2">
                <RiFacebookBoxLine size={20} />
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center gap-2" >
                <FaXTwitter size={16} />
                <span>Twitter (X)</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
