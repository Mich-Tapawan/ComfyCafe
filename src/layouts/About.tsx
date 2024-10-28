import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <div className="about h-fit text-white pt-32 lg:pt-44 pb-10 lg:pb-20 px-5 md:px-20 lg:px-36 flex flex-col gap-5">
        <div className="bg-primary p-5">
          <div className="w-2/5">
            <img
              src="/assets/family.png"
              alt=""
              className="object-cover w-full"
            />
          </div>
          <p></p>
        </div>
        <div className="bg-primary p-5">
          <p></p>
          <div className="w-2/5">
            <img
              src="assets/opening-image.jpg"
              alt=""
              className="object-cover w-full"
            />
          </div>
        </div>
        <div className="bg-primary text-center items-center">
          <h2 className="font-bold">Final sayings here</h2>
          <p></p>
        </div>
      </div>
      <Footer />
    </>
  );
}
