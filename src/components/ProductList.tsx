const products = ["black", "affogato", "mocha", "choco"];

export default function ProductList() {
  return (
    <ul className="flex flex-wrap gap-8">
      {products.map((item, index) => (
        <li key={index} className="w-fit">
          <div className="w-28 lg:w-36 mb-2">
            <img
              src={`assets/menu/${item}.png`}
              alt={item}
              className="object-cover w-full rounded-full"
            />
          </div>
          <h5 className="text-center font-bold">{item.toUpperCase()}</h5>
        </li>
      ))}
    </ul>
  );
}
