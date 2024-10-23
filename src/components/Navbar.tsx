import { useState } from "react";
import Burger from "./Burger";

export default function Navbar() {
  const [isNavShown, setIsNavShown] = useState(false);

  const toggleNav = () => {
    setIsNavShown(!isNavShown);
  };

  return (
    <nav className="fixed flex w-full py-2 h-20 px-5 md:px-20 lg:px-36 justify-between bg-blue-300 text-white items-center">
      <div className="brand flex gap-2 md:gap-4 items-center">
        <div className="w-14 md:w-16">
          <img
            src="/logo.png"
            alt="brand logo"
            className="object-cover w-full "
          />
        </div>
        <p className="text-2xl md:text-3xl h-fit">Comfy Café</p>
      </div>
      <ul
        className={`${
          isNavShown ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row gap-5 h-fit`}
      >
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
      <Burger onClick={toggleNav} />
    </nav>
  );
}
