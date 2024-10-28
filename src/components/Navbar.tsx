import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";

export default function Navbar() {
  const [isNavShown, setIsNavShown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavShown(!isNavShown);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log(currentScrollY);
      console.log(isScrolled);

      setIsScrolled(currentScrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`fixed flex w-full py-2 h-20 px-5 md:px-20 lg:px-36 justify-between text-white items-center z-50 ${
        isScrolled ? "bg-primary" : "bg-transparent"
      } transition ease-in-out duration-200`}
    >
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
        } lg:flex flex-col lg:flex-row gap-8 h-fit`}
      >
        <li
          className="hover:text-primary hover:bg-white rounded-xl px-4 text-center"
          onClick={handleClick}
        >
          <Link to={"/"}>Home</Link>
        </li>
        <li
          className="hover:text-primary hover:bg-white rounded-xl px-4 text-center"
          onClick={handleClick}
        >
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li
          className="hover:text-primary hover:bg-white rounded-xl px-4 text-center"
          onClick={handleClick}
        >
          {" "}
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li
          className="hover:text-primary hover:bg-white rounded-xl px-4 text-center"
          onClick={handleClick}
        >
          {" "}
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
      <Burger onClick={toggleNav} />
    </nav>
  );
}
