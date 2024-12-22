import { useEffect, useState } from "react";
import HotItems from "../components/HotItems";
import SideBar from "../components/SideBar";
import ProductList from "../components/ProductList";
import { MenuContext } from "../contexts/MenuContext";
import TopBar from "../components/TopBar";

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

  const categories = {
    beverages: ["COFFEE", "TEA", "FRAPPE", "SHAKE"],
    desserts: ["DONUT", "BROWNY", "PIE", "BAGEL"],
  };

  const [clickedItem, setClickedItem] = useState<ProductItemType>({
    _id: "",
    name: "",
    price: "",
    category: "",
    specialty: "",
    availability: "",
    img: "",
  });

  const [isOrderTabVisible, setIsOrderTabVisible] = useState<boolean>(false);

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
    <MenuContext.Provider
      value={{
        onHotSection,
        setOnHotSection,
        productList,
        setProductsList,
        category,
        setCategory,
        isOrderTabVisible,
        setIsOrderTabVisible,
        clickedItem,
        setClickedItem,
      }}
    >
      <div className="menu h-svh pt-24 pb-10 px-5 md:px-20 lg:px-36">
        <div className="bg-secondary w-full h-full py-8 lg:py-14 px-4 md:px-10 lg:px-20 overflow-hidden rounded-3xl">
          <div>
            <div className="flex justify-between mb-5 lg:mb-10">
              <h1 className="text-4xl lg:text-5xl font-bold items-center">
                MENU
              </h1>
              <div className="w-10 lg:w-14">
                <img
                  src="/assets/cart.png"
                  alt="cart"
                  className="object-cover w-full"
                />
              </div>
            </div>
            <TopBar list={categories} />
          </div>

          <div className="flex gap-5 lg:gap-16">
            <SideBar list={categories} />
            <div className="menu-vl hidden"></div>
            {onHotSection ? <HotItems /> : <ProductList />}
          </div>
        </div>
      </div>
    </MenuContext.Provider>
  );
}
