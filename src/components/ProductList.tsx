import { useContext } from "react";
import ProductItem from "./ProductItem";
import { MenuContext } from "../contexts/MenuContext";

export default function ProductList() {
  const menuContext = useContext(MenuContext);

  if (!menuContext) {
    throw new Error("SideBar must be used within a MenuContext.Provider");
  }

  const { productList, category } = menuContext;
  const items = productList.allItems.filter(
    (item) => item.category.toUpperCase() == category
  );

  console.log("Full Product List:", productList.allItems);
  console.log(`Filtered items (Category: ${category}):`, items);

  return (
    <ul
      className={`Items max-h-[60vh] flex gap-8 ${
        items.length === 0
          ? "overflow-hidden justify-center w-full"
          : "flex-wrap overflow-y-scroll"
      }`}
    >
      {items.length === 0 ? (
        <div className="font-bold text-center mt-auto mb-auto text-2xl">
          NOT CURRENTLY AVAILABLE
        </div>
      ) : (
        items.map((item, index) => (
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
        ))
      )}
    </ul>
  );
}
