import CtaButton from "../components/CtaButton";

export default function LearnMore() {
  return (
    <div
      className="learnmore w-full py-5 md:py-14 lg:py-24 bg-primary text-white flex flex-col lg:flex-row px-5 md:px-20 lg:px-36 gap-16 justify-center"
      style={{ minHeight: "600px" }}
    >
      <div className="lm-img">
        <img
          src="/assets/main-portrait.png"
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="vl hidden lg:block border h-full"></div>
      <div className=" lg:w-2/4 h-full">
        <h3 className="text-5xl lg:text-6xl mb-8">FEELIN' COZY!</h3>
        <p
          className="t mb-5 leading-7 md:leading-10 lg:text-xl lg:font-ligh"
          style={{ width: "100%" }}
        >
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
