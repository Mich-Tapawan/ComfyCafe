import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

type HotItemsData = {
  sale: [];
  limited: [];
  best: [];
};

export default function HotItems() {
  const [products, setProducts] = useState<HotItemsData>({
    sale: [],
    limited: [],
    best: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://localhost:3000/hotItems");
        if (!result.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await result.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log("Error fetching data: " + error);
      }
    };

    fetchData();
  }, []);

  const hotItem = [
    { title: "ON SALE", items: products.sale },
    { title: "LIMITED TIME", items: products.limited },
    { title: "BEST SELLERS", items: products.best },
  ];

  return (
    <ul className="Items w-full max-h-80 lg:max-h-[60vh] overflow-y-scroll">
      {hotItem.map(({ title, items }, index) => (
        <li key={index} className="mb-10">
          <div>
            <h4 className="text-2xl">{title}</h4>
            <div className="hr my-5"></div>
          </div>
          <ul className="flex flex-wrap gap-8">
            {items.map((item, index) => (
              <li key={index} className="w-fit">
                <ProductItem item={item} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
