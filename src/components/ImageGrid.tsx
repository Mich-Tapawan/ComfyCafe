type GridItem = {
  src: string;
  alt?: string;
  text: string;
};

const images: GridItem[] = [
  {
    src: "/assets/main-donut1.jpg",
    alt: "donut",
    text: "WE MADE THE BEST FOR YOU!",
  },
  {
    src: "/assets/main-coffee1.jpg",
    alt: "ice coffee",
    text: "POURING JOY, ONE CUP AT A TIME.",
  },
  {
    src: "/assets/aboutus-bg.png",
    alt: "cafe outside view",
    text: "SIP, RELAX, REPEAT.",
  },
  {
    src: "/assets/main-brownie.jpg",
    alt: "brownie",
    text: "WHERE EVERY FLAVOR TELLS A STORY.",
  },
  {
    src: "/assets/main-lights.jpg",
    alt: "lights",
    text: "YOUR COZY CORNER AWAITS.",
  },
  {
    src: "/assets/main-hot.png",
    alt: "hot coffee",
    text: "BREWING HAPPINESS DAILY!",
  },
  {
    src: "/assets/main-book.jpg",
    alt: "book",
    text: "A TASTE OF COMFORT IN EVERY SIP.",
  },
  {
    src: "/assets/main-cream.jpg",
    alt: "ice cream",
    text: "CRAFTED WITH CARE, JUST FOR YOU.",
  },
  {
    src: "/assets/main-pie.jpg",
    alt: "pie",
    text: "BAKED TO YOUR HEART'S CONTENT ♡",
  },
];

export default function ImageGrid() {
  return (
    <div className="w-full bg-secondary p-5 md:p-20 lg:px-36">
      <ul className="grid grid-cols-3 gap-5 ">
        {images.map(({ src, alt, text }, index) => (
          <li key={index} className="gridItem w-full h-60 relative">
            <div className="w-full h-full z-30 overflow-hidden">
              <img src={src} alt={alt} className="object-cover w-full h-full" />
            </div>
            <p
              className="hidden absolute text-center text-lg font-semibold text-white z-40"
              style={{
                transform: "translate(-50%, -50%)",
                top: "50%",
                left: "50%",
                zIndex: "500",
              }}
            >
              {text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
