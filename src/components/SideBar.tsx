const beverages: String[] = ["COFFEE", "TEA", "FRAPPE", "SHAKE"];
const desserts: String[] = ["DONUT", "BROWNY", "ICE CREAM", "PIE", "BAGEL"];

const handleClick = () => {};

export default function SideBar() {
  return (
    <div className="flex flex-col gap-5">
      <span className="font-bold text-2xl my-2">HOT!</span>
      <h3 className="font-bold text-xl">BEVERAGES</h3>
      <ul className="flex flex-col gap-2 text-lg">
        {beverages.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3 className="font-bold text-xl">DESSERTS</h3>
      <ul className="flex flex-col gap-2 text-lg">
        {desserts.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
