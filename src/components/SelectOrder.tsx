import { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";

interface SelectOrderProps {
  _id?: string;
  name: string;
  price: string;
  category: string;
  specialty?: string;
  availability?: string;
  img: string;
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
    <div className="ordertab absolute w-[95%] max-h-[90vh] bg-white md:w-[85%] lg:w-[60%] lg:h-[60vh] lg:max-h-full rounded-2xl p-10 grid lg:grid-cols-2 gap-10">
      <div className="w-2/3 md:w-1/2 md:h-auto lg:h-[90%] place-self-center lg:w-full lg:place-self-start">
        <img
          src={`/assets/menu/${img}`}
          alt={name}
          className="w-full lg:h-full max-h-[200px] lg:max-h-[600px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-5 justify-center pb-14">
        <div
          className="return-btn w-7 place-self-end cursor-pointer relative"
          onClick={() => setIsOrderTabVisible(false)}
        >
          <img src="/assets/return-btn.png" alt="return" />
        </div>
        <div className="flex lg:flex-col justify-between">
          <h4 className="text-2xl md:text-3xl font-bold">
            {name.toUpperCase()}
          </h4>
          <p className="font-[poppins] text-[#747474] text-lg md:text-2xlr">
            TOTAL: ₱{price}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <select name="size" id="size" className="pl-5">
            <option value="" disabled selected>
              Select Size
            </option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          <input
            type="number"
            placeholder="Enter Amount"
            className="bg-[#EEEEEE] h-10 rounded-lg pl-5"
          />
        </div>
        <div className="flex flex-col justify-between gap-5">
          <button className="bg-[#646464] text-white px-5 py-3">
            ADD TO CART
          </button>
          <button className="bg-primary text-white px-5 py-3">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
}
