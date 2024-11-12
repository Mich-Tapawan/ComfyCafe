import { useContext, useState } from "react";
import { MenuContext } from "../contexts/MenuContext";

type TopBarProps = {
  list: {
    beverages: string[];
    desserts: string[];
  };
};

export default function TopBar({ list }: TopBarProps) {
  const menuContext = useContext(MenuContext);

  if (!menuContext) {
    throw new Error("Top Bar must be used within a MenuContext.Provider");
  }
  const { onHotSection, setOnHotSection, setCategory } = menuContext;

  const [clickedCluster, setClickedCluster] = useState("");
  const keys = Object.keys(list);

  const handleClick = (key: string) => {
    const initialCategory = key === "beverages" ? "COFFEE" : "DONUT";
    setCategory(initialCategory);
    setClickedCluster(key);
    setOnHotSection(false);
  };

  return (
    <div className="topbar w-full h-fit mb-5 relative">
      <div className="font-bold text-xl text-primary flex gap-8 mb-2">
        <div className="cursor-pointer" onClick={() => setOnHotSection(true)}>
          HOT
        </div>
        <ul className="flex gap-8">
          {/* Display the main cluster categories */}
          {keys.map((key, index) => (
            <li
              key={index}
              className="cursor-pointer"
              onClick={() => handleClick(key)}
            >
              {key.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
      <ul
        className={`bg-primary w-full py-3 text-white gap-5 ${
          onHotSection ? "hidden" : "flex"
        } flex-wrap justify-evenly`}
      >
        {clickedCluster === "beverages"
          ? list.beverages.map((item, index) => (
              <li
                key={index}
                onClick={() => setCategory(item)}
                className="cursor-pointer"
              >
                {item}
              </li>
            ))
          : list.desserts.map((item, index) => (
              <li
                key={index}
                onClick={() => setCategory(item)}
                className="cursor-pointer"
              >
                {item}
              </li>
            ))}
      </ul>
    </div>
  );
}
