import CtaButton from "../components/CtaButton";

export default function LearnMore() {
  return (
    <div
      className="w-full py-5 md:py-14 bg-primary text-white flex flex-col lg:flex-row px-5 md:px-20 lg:px-36 items-center gap-16"
      style={{ minHeight: "600px" }}
    >
      <div className="">
        <img
          src="/assets/main-portrait.png"
          alt=""
          className="object-cover w-full rounded-lg"
        />
      </div>
      <div
        className="hidden lg:block border h-full"
        style={{ height: "500px" }}
      ></div>
      <div className=" w-full h-full">
        <h3 className="text-5xl mb-8">FEELIN' COZY!</h3>
        <p className="font-light mb-5 leading-10" style={{ width: "100%" }}>
          Start your day with us here at Comfy Café and enjoy various delicious
          pastries paired with a freshly brewed coffee. Wanna chill like a Vil?
          Hangout in our place filled with aesthetic and minimalist designs.
          Enjoy the comfy ambiance and share the moment with your partner,
          family, friends, or even your pets! Check out our branches near you
          through the Comfy Café app and try out our best sellers and limited
          time special delicacies.
        </p>
        <CtaButton
          bgColor="bg-white"
          textColor="text-primary"
          bgHover="hover:bg-primary"
          textHover="hover:text-white"
          paddingY="py-4"
          custom="hover:outline"
        >
          Learn More
        </CtaButton>
      </div>
    </div>
  );
}
