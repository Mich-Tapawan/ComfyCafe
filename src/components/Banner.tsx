export default function Banner() {
  return (
    <div className="banner w-full py-5 px-5 md:px-20 lg:px-36 xl:py-12">
      <div className="w-full flex flex-row justify-between">
        <h2 className="hours text-4xl">OPEN HOURS</h2>
        <span className=" font-bold text-3xl">Mon Tue Wed Thu Fri Sat</span>
      </div>
      <span className="text-8xl font-bold">5AM - 11PM</span>
      <p className="text-3xl leading-relaxed">
        Comfy Café <br />
        1234 Serene Street, Barangay Maligaya, <br />
        Ermita, Manila, 1000, Philippines
      </p>
    </div>
  );
}
