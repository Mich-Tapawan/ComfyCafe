import { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";

interface SelectOrderProps {
  name: string;
  img?: string;
  price?: string;
  category?: string;
}

export default function SelectOrder({
  name,
  img,
  price,
  category,
}: SelectOrderProps) {
  const menuContext = useContext(MenuContext);

  if (!menuContext) {
    throw new Error("SelectOrder tab not inside menu context");
  }

  const { setIsOrderTabVisible } = menuContext;

  return (
    <div className="ordertab absolute w-[95%] bg-white lg:w-1/2 lg:h-[60vh] rounded-2xl px-10">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="flex flex-col">
        <div
          className="w-7 place-self-end cursor-pointer"
          onClick={() => setIsOrderTabVisible(false)}
        >
          <img src="/assets/return-btn.png" alt="return" />
        </div>
        <div>
          <h4>{name.toUpperCase()}</h4>
          <p>TOTAL: {price}</p>
        </div>
        <div>
          <input type="text" placeholder="Enter Amount" />
        </div>
        <button className="bg-[#646464] text-white px-5">ADD TO CART</button>
        <button className="bg-primary text-white px-5">PLACE ORDER</button>
      </div>
    </div>
  );
}
