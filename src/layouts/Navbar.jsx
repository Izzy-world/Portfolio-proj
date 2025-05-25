import React, { useState } from "react";
import { Link } from "react-router-dom"; // or 'next/link' if using Next.js
import desktopNavLogo from "../assets/robert garcia-desktop logo.svg";
import mobileNavLogo from "../assets/robert garcia-mobile-logo.svg";

const Navbar = () => {
  const [isMobileNavlinksVisible, setIsMobileNavlinksVisible] = useState(false);

  const toggleMobileNavlinks = () => {
    setIsMobileNavlinksVisible(!isMobileNavlinksVisible);
  };

  return (
    <header>
      <main>
        <section className="flex justify-between items-center md:px-12 md:py-6 px-2 py-4">
          {/* Logo (link to home) */}
          <Link to="/">
         <h2 className="text-[16px] md:text-[40px] font-Bebas font-bold  text-[#C7C7C7] ML-6">
         ISRAEL.
        </h2>
            {/* <img src={desktopNavLogo} alt="Robert Garcia Logo" /> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 leading-[150%]">
              <li className="text-[#C7C7C7] hover:text-[#D3E97A] transition-colors">
                <Link to="/work">Work</Link>
              </li>
              <li className="text-[#C7C7C7] hover:text-[#D3E97A] transition-colors">
                <Link to="/about">About</Link>
              </li>
              <li className="text-[#C7C7C7] hover:text-[#D3E97A] transition-colors">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMobileNavlinks}>
              <img src={mobileNavLogo} alt="Mobile Menu" />
            </button>
          </div>
        </section>

        {/* Mobile Navigation */}
        {isMobileNavlinksVisible && (
          <nav className="md:hidden bg-[#0A0A0A] text-white text-center px-12 py-4">
            <ul className="flex flex-col gap-4">
              <li className="hover:text-[#D3E97A] transition-colors">
                <Link to="/work" onClick={toggleMobileNavlinks}>Work</Link>
              </li>
              <li className="hover:text-[#D3E97A] transition-colors">
                <Link to="/about" onClick={toggleMobileNavlinks}>About</Link>
              </li>
              <li className="hover:text-[#D3E97A] transition-colors">
                <Link to="/contact" onClick={toggleMobileNavlinks}>Contact</Link>
              </li>
            </ul>
          </nav>
        )}
      </main>
    </header>
  );
};

export default Navbar;