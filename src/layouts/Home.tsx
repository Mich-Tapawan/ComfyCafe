import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Banner from "../components/Banner";
import CtaButton from "../components/CtaButton";

export default function Home() {
  return (
    <div className="sec1 w-full h-svh">
      <Parallax pages={3}>
        <ParallaxLayer>
          <div className="flex flex-col text-white text-center items-center mt-44">
            <span className="mb-4 text-lg">START YOUR DAY WITH ONLY THE</span>
            <h1 className="font-bold text-5xl mb-6">BEST COFFEE</h1>
            <p className="leading-loose">
              At Comfy Café, we’re all about delivering the best start to your
              day. From rich, bold brews to the perfect morning pick-me-up, our
              passion for quality coffee goes into every cup. Step inside,
              relax, and let us fuel your morning with the finest flavors.
            </p>
            <div className="mt-8">
              <CtaButton
                bgColor="bg-secondary"
                textColor="text-primary"
                paddingX="px-4"
                paddingY="py-4"
                custom="border-2 border-secondary"
              >
                MENU
              </CtaButton>
              <CtaButton
                bgColor="transparent"
                bgHover="hover:bg-white"
                textColor="text-white"
                textHover="hover:text-primary"
                paddingX="px-4"
                paddingY="py-4"
                custom="border-2"
              >
                ABOUT
              </CtaButton>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <Banner />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
