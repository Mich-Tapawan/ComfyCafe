import { useContext } from "react";
import ProductItem from "./ProductItem";
import { MenuContext } from "../contexts/MenuContext";

export default function HotItems() {
  const menuContext = useContext(MenuContext);

  if (!menuContext) {
    throw new Error("SideBar must be used within a MenuContext.Provider");
  }

  const { productList } = menuContext;

  const hotItem = [
    { title: "ON SALE", items: productList.sale },
    { title: "LIMITED TIME", items: productList.limited },
    { title: "BEST SELLERS", items: productList.best },
  ];

  return (
    <ul className="Items w-full max-h-[60vh] overflow-y-scroll">
      {hotItem.map(({ title, items }, index) => (
        <li key={index} className="mb-10">
          <div>
            <h4 className="text-2xl">{title}</h4>
            <div className="hr my-5"></div>
          </div>
          <ul className="flex flex-wrap gap-8">
            {items.map((item, index) => (
              <li key={index} className="w-fit">
                <ProductItem
                  _id={item._id}
                  name={item.name}
                  img={item.img}
                  price={item.price}
                  category={item.category}
                  specialty={item.specialty}
                  availability={item.availability}
                />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
