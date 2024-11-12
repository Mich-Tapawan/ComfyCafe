import { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";

interface SelectOrderProps {
  _id: string;
  name: string;
  price: string;
  category: string;
  specialty: string;
  availability: string;
  img: string;
}

export default function ProductItem({
  _id,
  name,
  price,
  category,
  specialty,
  availability,
  img,
}: SelectOrderProps) {
  const menuContext = useContext(MenuContext);

  if (!menuContext) {
    throw new Error("Product Item out of context");
  }

  const { setClickedItem, setIsOrderTabVisible } = menuContext;

  const handleClick = ({
    _id,
    name,
    price,
    category,
    specialty,
    availability,
    img,
  }: SelectOrderProps) => {
    setClickedItem({
      _id,
      name,
      price,
      category,
      specialty,
      availability,
      img,
    });

    setIsOrderTabVisible(true);
  };

  return (
    <div
      className="cursor-pointer"
      onClick={() =>
        handleClick({
          _id,
          name,
          price,
          category,
          specialty,
          availability,
          img,
        })
      }
    >
      <div className="w-28 lg:w-36 h-full mb-2">
        <img
          src={`/assets/menu/${img}`}
          alt={name}
          className="object-cover w-full rounded-full h-28 lg:h-36"
        />
      </div>
      <h5 className="text-sm lg:text-base text-center font-bold">
        {name.toUpperCase()}
      </h5>
    </div>
  );
}
