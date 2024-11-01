type item = {
  item: {
    name: string;
    img: string;
    price: string;
    category: string;
    specialty: string;
    availability: string;
  };
};

export default function ProductItem({ item }: item) {
  return (
    <div className="cursor-pointer">
      <div className="w-28 lg:w-36 h-full mb-2">
        <img
          src={`assets/menu/${item.img}`}
          alt={item.name}
          className="object-cover w-full rounded-full h-28 lg:h-36"
        />
      </div>
      <h5 className="text-sm lg:text-base text-center font-bold">
        {item.name.toUpperCase()}
      </h5>
    </div>
  );
}
