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
        } nav-list lg:flex flex-col lg:flex-row top-full absolute left-[0%] bg-[#2e1e1e] w-full gap-10 py-10 lg:top-0 lg:relative lg:h-fit lg:bg-transparent lg:w-auto`}
      >
        <li onClick={handleClick} className="text-center w-full">
          <Link
            to={"/"}
            className="hover:text-primary hover:bg-white rounded-xl px-[40%] py-2 text-center w-full lg:w-auto lg:px-4 lg:py-0"
          >
            Home
          </Link>
        </li>
        <li onClick={handleClick} className="text-center w-full">
          <Link
            to={"/menu"}
            className="hover:text-primary hover:bg-white rounded-xl px-[40%] py-2 text-center w-full lg:w-auto lg:px-4 lg:py-0"
          >
            Menu
          </Link>
        </li>
        <li onClick={handleClick} className=" text-center w-full">
          <Link
            to={"/contact"}
            className="hover:text-primary hover:bg-white rounded-xl px-[38%] py-2 text-center w-full lg:w-auto lg:px-4 lg:py-0"
          >
            Contact
          </Link>
        </li>
        <li onClick={handleClick} className=" text-center w-full">
          <Link
            to={"/about"}
            className="hover:text-primary hover:bg-white rounded-xl px-[40%] py-2 text-center w-full lg:w-auto lg:px-4 lg:py-0"
          >
            About
          </Link>
        </li>
      </ul>
      <Burger onClick={toggleNav} />
    </nav>
  );
}
