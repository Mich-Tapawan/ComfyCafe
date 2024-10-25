type GridItem = {
  src: string;
  alt?: string;
};

const images: GridItem[] = [
  { src: "/assets/main-donut1.jpg", alt: "donut" },
  { src: "/assets/main-coffee1.jpg", alt: "ice coffee" },
  { src: "/assets/aboutus-bg.png", alt: "cafe outside view" },
  { src: "/assets/main-brownie.jpg", alt: "brownie" },
  { src: "/assets/main-lights.jpg", alt: "lights" },
  { src: "/assets/main-hot.png", alt: "hot coffee" },
  { src: "/assets/main-book.jpg", alt: "book" },
  { src: "/assets/main-cream.jpg", alt: "ice cream" },
  { src: "/assets/main-pie.jpg", alt: "pie" },
];

export default function ImageGrid() {
  return (
    <div className="w-full bg-secondary p-5 md:p-20 lg:px-36">
      <ul className="grid grid-cols-3 gap-5">
        {images.map(({ src, alt }, index) => (
          <li key={index} className="w-full h-60">
            <img src={src} alt={alt} className="object-cover w-full h-full" />
          </li>
        ))}
      </ul>
    </div>
  );
}
