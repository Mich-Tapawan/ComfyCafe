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
    <div className="ordertab absolute w-full bg-white lg:w-1/2 lg:h-[60vh]">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="flex flex-col px-3">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h4>{name.toUpperCase()}</h4>
          <p>TOTAL: {price}</p>
        </div>
        <div>
          <input type="text" placeholder="Enter Amount" />
        </div>
        <button className="bg-[#646464] text-white px-5">ADD TO CART</button>
        <button className="bg-primary text-white px-5">PLACE ORDER</button>
      </div>
    </div>
  );
}
