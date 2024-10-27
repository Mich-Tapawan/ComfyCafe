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

    console.log("Navbar mounted. Adding scroll event listener.");
    window.addEventListener("scroll", handleScroll);

    return () => {
      console.log("Cleaning up scroll event listener.");
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <nav
      className={`fixed flex w-full py-2 h-20 px-5 md:px-20 lg:px-36 justify-between text-white items-center z-50 ${
        isScrolled ? "bg-primary" : "bg-transparent"
      }`}
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
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          {" "}
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          {" "}
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
      <Burger onClick={toggleNav} />
    </nav>
  );
}
