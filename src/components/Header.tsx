import { useState, useEffect } from "react";
import { MenuIcon } from "../assets/svgs";
import logo from "../assets/logo.svg";

type HeaderProps = {
  onRequestDemo: () => void;
};

const Header = ({ onRequestDemo }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-1000 w-full bg-white py-4 shadow-sm">
        <div className="mx-5 flex max-w-1200px items-center justify-between md:mx-20">
          <img src={logo} alt="Logo" className="logo" />

          <nav className="hidden items-center gap-6 md:flex">
            <a className="cursor-pointer font-medium text-slate-800 hover:text-[#008080]">
              Pricing
            </a>
            <a className="cursor-pointer font-medium text-slate-800 hover:text-[#008080]">
              Contact Us
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-md border border-[#008080] px-4 py-2 text-sm font-medium text-[#008080] hover:bg-teal-50">
              Sign in
            </button>

            {/* Request Demo */}
            <button
              onClick={onRequestDemo}
              className="rounded-md bg-[#008080] px-5 py-2 text-sm font-medium text-white hover:bg-teal-800"
            >
              Request a Demo
            </button>
          </div>

          <button
            className="flex items-center md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-2000 bg-black/40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed right-0 top-0 z-3000 h-screen w-100% bg-white px-4 transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <img src={logo} alt="Logo" className="size-22" />

          <button onClick={() => setMenuOpen(false)}>
            ✕
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-5 text-center">
          <a className="cursor-pointer font-medium text-gray-500 hover:text-[#008080]">
            Pricing
          </a>

          <a className="cursor-pointer font-medium text-gray-500 hover:text-[#008080]">
            Contact Us
          </a>

          {/* Mobile Request Demo */}
          <button
            onClick={() => {
              setMenuOpen(false);
              onRequestDemo();
            }}
            className="rounded-md bg-[#008080] px-5 py-2 font-medium text-white hover:bg-teal-800"
          >
            Request a Demo
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;
