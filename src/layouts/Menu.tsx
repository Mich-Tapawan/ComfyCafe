import HotItems from "../components/HotItems";
import SideBar from "../components/SideBar";

export default function Menu() {
  return (
    <div className="menu h-fit lg:h-svh pt-24 pb-10 px-5 md:px-20 lg:px-36">
      <div className="bg-secondary w-full h-full py-14 px-5 md:px-20 lg:px-36 overflow-hidden">
        <div className="flex justify-between mb-10">
          <h1 className="text-5xl font-bold items-center">MENU</h1>
          <div className="w-14">
            <img
              src="/assets/cart.png"
              alt="cart"
              className="object-cover w-full"
            />
          </div>
        </div>
        <div className="flex gap-5 lg:gap-16">
          <SideBar />
          <div className="menu-vl"></div>
          <HotItems />
        </div>
      </div>
    </div>
  );
}
