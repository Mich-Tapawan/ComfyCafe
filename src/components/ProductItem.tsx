type item = {
  item: string;
};

export default function ProductItem({ item }: item) {
  return (
    <div className="cursor-pointer">
      <div className="w-28 lg:w-36 mb-2">
        <img
          src={`assets/menu/${item}.png`}
          alt={item}
          className="object-cover w-full rounded-full"
        />
      </div>
      <h5 className="text-center font-bold">{item.toUpperCase()}</h5>
    </div>
  );
}
