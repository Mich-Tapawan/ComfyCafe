import ProductItem from "./ProductItem";

const sale = ["black", "affogato", "mocha", "choco"];
const limited = ["black", "affogato", "mocha", "choco"];
const best = ["black", "affogato", "mocha", "choco"];

type HotItem = {
  title: string;
  items: string[];
};

const hotItem: HotItem[] = [
  { title: "ON SALE", items: sale },
  { title: "LIMITED TIME", items: limited },
  { title: "BEST SELLERS", items: best },
];

export default function HotItems() {
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
