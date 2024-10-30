import { useContext } from "react";
import ProductItem from "./ProductItem";
import { MenuContext } from "../contexts/MenuContext";

export default function ProductList() {
  const menuContext = useContext(MenuContext);

  if (!menuContext) {
    throw new Error("SideBar must be used within a MenuContext.Provider");
  }

  const { productList } = menuContext;

  return (
    <ul className="Items md:max-h-[80vh] lg:max-h-[60vh] flex flex-wrap gap-8 overflow-y-scroll">
      {productList.allItems.map((item, index) => (
        <li key={index} className="w-fit">
          <ProductItem item={item} />
        </li>
      ))}
    </ul>
  );
}
