import { useState } from "react";
import { MenuIcon } from "../assets/svgs";

type HeaderProps = {
  onRequestDemo: () => void;
};

const Header = ({ onRequestDemo }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-1000 bg-white px-6 py-4 shadow-sm">
        <div className="mx-5 flex max-w-1200px items-center justify-between md:mx-10">
          <img src="/src/assets/logo.svg" alt="Logo" className="logo" />

          
          <nav className="hidden items-center gap-6 md:flex">
            <a className="cursor-pointer font-medium text-slate-800 hover:text-[#008080]">Pricing</a>
            <a className="cursor-pointer font-medium text-slate-800 hover:text-[#008080]">Contact Us</a>
          </nav>

         
          <div className="hidden items-center gap-3 md:flex">
            <button
             className="md:rounded-md border border-[#008080] px-4 py-2 text-sm font-medium text-[#008080] hover:bg-teal-50">
              Sign in
              </button>
            <button
             className="md:rounded-md bg-[#008080] px-5 py-2 text-sm font-medium text-white hover:bg-teal-800"
              onClick={onRequestDemo}>
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

      
      <div className={`fixed right-0 top-0 z-3000 flex h-screen w-260px flex-col bg-white p-5 transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="mb-6 self-end text-xl" onClick={() => setMenuOpen(false)}>
          ✕
        </button>

        <nav className="flex flex-col gap-5">
          <a onClick={() => setMenuOpen(false)}  className="cursor-pointer font-medium text-slate-800 hover:text-[#008080]" > 
          Pricing
          </a>
          <a onClick={() => setMenuOpen(false)} className="cursor-pointer font-medium text-slate-800 hover:text-[#008080]">
            Contact Us</a>

          <button
            className="cursor-pointer font-medium text-slate-800 hover:text-[#008080] mr-16"
            onClick={() => setMenuOpen(false)}
            
          >
            Sign in
          </button>

          <button
            className="cursor-pointer font-medium text-slate-800 hover:text-[#008080]"
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
