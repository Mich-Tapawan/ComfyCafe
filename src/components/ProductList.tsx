import ProductItem from "./ProductItem";

const products = [
  "black",
  "affogato",
  "mocha",
  "choco",
  "black",
  "affogato",
  "mocha",
  "choco",
  "black",
  "affogato",
  "mocha",
  "choco",
  "black",
  "affogato",
  "mocha",
  "choco",
  "black",
  "affogato",
  "mocha",
  "choco",
  "black",
  "affogato",
  "mocha",
  "choco",
];

export default function ProductList() {
  return (
    <ul className="Items max-h-80 lg:max-h-[60vh] flex flex-wrap gap-8 overflow-y-scroll">
      {products.map((item, index) => (
        <li key={index} className="w-fit">
          <ProductItem item={item} />
        </li>
      ))}
    </ul>
  );
}
