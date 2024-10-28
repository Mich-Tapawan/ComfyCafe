import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <div className="about h-fit text-white pt-32 lg:pt-44 pb-10 lg:pb-20 px-5 md:px-20 lg:px-36 flex flex-col gap-5">
        <div className="bg-primary p-8 flex flex-col lg:flex-row gap-8 font-thin rounded-lg justify-center">
          <div className="lg:w-2/5">
            <img
              src="/assets/family.png"
              alt=""
              className="object-cover w-full"
            />
          </div>
          <p className="lg:w-1/2">
            Comfy Café was founded on May 17, 2023, with the belief that a great
            cup of coffee can do more than just start your day—it can create
            moments of comfort and community. With a passion for crafting
            quality brews, we’ve dedicated ourselves to providing a warm,
            inviting space where people can relax, catch up with friends, or
            find a quiet moment of solitude. Every cup we serve is a blend of
            carefully sourced beans and our commitment to exceptional taste. At
            Comfy Café, it’s not just about coffee; it’s about creating a place
            where everyone feels at home.
          </p>
        </div>
        <div className="bg-primary p-8 flex flex-col-reverse lg:flex-row gap-8 font-thin rounded-lg justify-center">
          <p className="lg:w-1/2">
            From the very beginning, Comfy Café has been about more than just
            coffee. We’ve carefully crafted our menu to include a selection of
            premium teas, fresh pastries, and artisanal treats to complement
            your favorite brew. Our cozy interiors and friendly staff make Comfy
            Café the perfect spot for morning rituals, afternoon pick-me-ups,
            and everything in between. Whether you're here to work, relax, or
            enjoy time with loved ones, we’re dedicated to making every visit
            memorable. Welcome to Comfy Café—a place where comfort and quality
            always come first.
          </p>
          <div className="lg:w-2/5">
            <img
              src="assets/opening-image.jpg"
              alt=""
              className="object-cover w-full"
            />
          </div>
        </div>
        <div className="bg-primary text-center items-center p-8 font-thin rounded-lg">
          <h2 className="font-bold text-xl mb-5">From Us, To You</h2>
          <p
            className="lg:w-1/2 text-center place-self-center"
            style={{ lineHeight: "2rem" }}
          >
            At Comfy Café, every cup is crafted with care and every visit is a
            warm welcome. Here’s to cozy moments, great coffee, and memories
            made. We can’t wait to serve you soon!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
