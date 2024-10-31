import { useEffect, useState } from "react";
import HotItems from "../components/HotItems";
import SideBar from "../components/SideBar";
import ProductList from "../components/ProductList";
import { MenuContext } from "../contexts/MenuContext";

interface ProductItemType {
  _id: string;
  name: string;
  price: string;
  category: string;
  specialty: string;
  availability: string;
  img: string;
}

interface ProductListData {
  sale: ProductItemType[];
  limited: ProductItemType[];
  best: ProductItemType[];
  allItems: ProductItemType[];
}

export default function Menu() {
  const [onHotSection, setOnHotSection] = useState(true);
  const [productList, setProductsList] = useState<ProductListData>({
    sale: [],
    limited: [],
    best: [],
    allItems: [],
  });
  const [category, setCategory] = useState("");

  // Fetch data to get all available items
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://localhost:3000/getItems");
        if (!result.ok) {
          throw new Error("Network was not ok.");
        }
        const data = await result.json();
        setProductsList(data);
        console.log(data);
      } catch (error) {
        console.log("Error fetching data: " + error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="menu h-svh pt-24 pb-10 px-5 md:px-20 lg:px-36">
      <div className="bg-secondary w-full h-full py-14 px-5 md:px-10 lg:px-20 overflow-hidden">
        <div className="flex justify-between mb-10">
          <h1 className="text-5xl font-bold items-center">MENU</h1>
          <div className="w-14">
            <img
              src="/assets/cart.png"
              alt="cart"
              className="object-cover w-full"
            />
          </div>
        </div>
        <div className="flex gap-5 lg:gap-16">
          <MenuContext.Provider
            value={{
              onHotSection,
              setOnHotSection,
              productList,
              setProductsList,
              category,
              setCategory,
            }}
          >
            <SideBar />
            <div className="menu-vl hidden lg:block"></div>
            {onHotSection ? <HotItems /> : <ProductList />}
          </MenuContext.Provider>
        </div>
      </div>
    </div>
  );
}
