interface SelectOrderProps {
  name: string;
  img?: string;
  price?: string;
  category?: string;
}

export default function SelectOrder({
  name,
  img,
  price,
  category,
}: SelectOrderProps) {
  return (
    <div className="absolute w-full bg-white lg:w-1/2">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="flex flex-col lg:flex-row px-3">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h4>{name.toUpperCase()}</h4>
          <p>TOTAL: {price}</p>
        </div>
        <button>ADD TO CART</button>
        <button>PLACE ORDER</button>
      </div>
    </div>
  );
}
