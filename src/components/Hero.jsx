import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-between items-center w-full">
      <nav className="flex justify-between items-center flex-col">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
      </nav>

      <button
        type="button"
        onClick={() => window.open("https://githug.com")}
        className="black_btn">
        GitHub
      </button>
    </header>
  );
};

export default Hero;
