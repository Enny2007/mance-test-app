import logo from "../assets/logo.svg";
import instagram from "../assets/ig.svg";
import linkedin from "../assets/linkedin.svg";
import youtube from "../assets/you.svg";

export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA] py-16 px-4 md:mx-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Mance Logo" className="mb-4" />
          <p className="text-gray-500 mb-4">Align Strategy. Drive Execution</p>
          <p className=" text-sm mb-2 opacity-30">
            <i>Sign Up To Receive Updates,Stories,And News</i>
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="border px-3 py-2 rounded w-full md:w-150"
            />
            <button className="bg-teal-600 text-white px-4 font-bold rounded">
              Subscribe
            </button>
          </div>
        </div>

        <div className="md:pl-40">
          <h4 className="font-semibold mb-4">Quick Access</h4>
          <ul className="space-y-2 text-gray-500">
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="md:pl-25">
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-gray-500">
            <li>
              <a href="#">End User Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>

        <div className="md:pl-20">
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-gray-500 mb-4">mancesupport@gmail.com</p>

          <div className="flex gap-4">
            <img src={instagram} alt="Instagram" />
            <img src={linkedin} alt="LinkedIn" />
            <img src={youtube} alt="YouTube" />
          </div>
        </div>
      </div>
      <div className="hidden md:block md:col-span-2 md:mx-20 h-px bg-gray-800 mt-6 opacity-8"></div>
      <hr className="md:hidden mx-6 h-px bg-gray-800 mt-6 opacity-8"></hr>
      <div className="text-center text-black text-md mt-12">
        @Mance 2026, All Rights Reserved
      </div>
    </footer>
  );
}
