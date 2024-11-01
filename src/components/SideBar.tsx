import { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";

const beverages: string[] = ["COFFEE", "TEA", "FRAPPE", "SHAKE"];
const desserts: string[] = ["DONUT", "BROWNY", "ICE CREAM", "PIE", "BAGEL"];

export default function SideBar() {
  const menuContext = useContext(MenuContext);

  if (!menuContext) {
    throw new Error("SideBar must be used within a MenuContext.Provider");
  }

  const { setOnHotSection, setCategory } = menuContext;

  const handleClick = (item: string) => {
    setOnHotSection(false);
    setCategory(item);
    console.log("clicked on item: " + item);
  };

  return (
    <div className="sidebar hidden flex-col gap-5">
      <span
        className="font-bold text-2xl my-2 cursor-pointer"
        onClick={() => {
          setOnHotSection(true);
        }}
      >
        HOT!
      </span>
      <h3 className="font-bold text-xl">BEVERAGES</h3>
      <ul className="flex flex-col gap-2 text-lg">
        {beverages.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(item)}
            className="cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
      <h3 className="font-bold text-xl">DESSERTS</h3>
      <ul className="flex flex-col gap-2 text-lg">
        {desserts.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(item)}
            className="cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
