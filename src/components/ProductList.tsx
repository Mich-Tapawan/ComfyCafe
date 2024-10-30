import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

type Product = {
  products: [];
};

export default function ProductList() {
  const [products, setProducts] = useState<Product>({
    products: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://localhost:3000/productList");
        if (!result.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await result.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching data: " + error);
      }
    };
    fetchData();
  }, []);

  return (
    <ul className="Items md:max-h-[80vh] lg:max-h-[60vh] flex flex-wrap gap-8 overflow-y-scroll">
      {products.products.map((item, index) => (
        <li key={index} className="w-fit">
          <ProductItem item={item} />
        </li>
      ))}
    </ul>
  );
}
