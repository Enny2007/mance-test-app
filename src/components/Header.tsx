import { useState, useEffect } from "react";
import { MenuIcon } from "../assets/svgs";
import logo from "../assets/logo.svg";

type HeaderProps = {
  onRequestDemo: () => void;
};

const Header = ({ onRequestDemo }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky w-full top-0 z-1000 bg-white py-4 shadow-sm">
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
            <button className="md:rounded-md border border-[#008080] px-4 py-2 text-sm font-medium text-[#008080] hover:bg-teal-50">
              Sign in
            </button>
            <button
              className="md:rounded-md bg-[#008080] px-5 py-2 text-sm font-medium text-white hover:bg-teal-800"
              onClick={onRequestDemo}
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

      {menuOpen && (
        <div
          className="fixed inset-0 z-2000 bg-black/40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`fixed right-0 top-0 z-3000 flex h-screen w-100 flex-col bg-white px-2 transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex row items-center justify-between">
        <img src={logo} alt="Logo" className="size-22  " />
        <button
          className="mb-6 self-end text-xl"
          onClick={() => setMenuOpen(false)}
        >
          

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-7 cursor-pointer opacity-50"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
        </div>

        <nav className="flex flex-col gap-5 text-center">
          <a
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer text-gray-500 font-medium hover:text-[#008080]"
          >
            Pricing
          </a>
          <a
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer font-medium text-gray-500 hover:text-[#008080]"
          >
            Contact Us
          </a>

          <button
            className="cursor-pointer font-medium text-white bg-[#008080] px-5 py-2 rounded-md hover:bg-teal-800"
            onClick={() => {
              setMenuOpen(false);
              onRequestDemo();
            }}
          >
            Request a Demo
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;
