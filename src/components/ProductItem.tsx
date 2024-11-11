import { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";

type item = {
  item: {
    _id: string;
    name: string;
    img: string;
    price: string;
    category: string;
    specialty: string;
    availability: string;
  };
};

export default function ProductItem({ item }: item) {
  const menuContext = useContext(MenuContext);

  if (!menuContext) {
    throw new Error("Product Item out of context");
  }

  const { setClickedItem, setIsOrderTabVisible } = menuContext;

  const handleClick = (item: item) => {
    setClickedItem(item);
    setIsOrderTabVisible(true);
  };

  return (
    <div className="cursor-pointer" onClick={() => handleClick(item)}>
      <div className="w-28 lg:w-36 h-full mb-2">
        <img
          src={`assets/menu/${item.img}`}
          alt={item.name}
          className="object-cover w-full rounded-full h-28 lg:h-36"
        />
      </div>
      <h5 className="text-sm lg:text-base text-center font-bold">
        {item.name.toUpperCase()}
      </h5>
    </div>
  );
}
