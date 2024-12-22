import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Banner from "../components/Banner";
import CtaButton from "../components/CtaButton";
import SocialIcons from "../components/SocialIcons";
import LearnMore from "../components/LearnMore";
import ImageGrid from "../components/ImageGrid";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [pages, setPages] = useState(4.6);

  useEffect(() => {
    const updatePages = () => {
      const vh = window.innerHeight;
      const contentHeight = document.querySelector(".sec1")?.scrollHeight || 0;
      setPages(Math.ceil(contentHeight / vh));
    };

    updatePages();
    window.addEventListener("resize", updatePages);

    return () => window.removeEventListener("resize", updatePages);
  }, []);

  return (
    <div className="sec1 w-full h-svh">
      <Parallax pages={pages}>
        <ParallaxLayer>
          <div className="hero flex flex-col text-white text-center items-center mt-32 lg:mt-44 absolute">
            <span className="mb-4 text-lg">START YOUR DAY WITH ONLY THE</span>
            <h1 className="font-bold text-5xl mb-6">BEST COFFEE</h1>
            <p className="leading-loose">
              At Comfy Café, we’re all about delivering the best start to your
              day. From rich, bold brews to the perfect morning pick-me-up, our
              passion for quality coffee goes into every cup. Step inside,
              relax, and let us fuel your morning with the finest flavors.
            </p>
            <div className="mt-8">
              <Link to={"/menu"}>
                <CtaButton
                  bgColor="bg-secondary"
                  textColor="text-primary"
                  paddingX="px-4"
                  paddingY="py-4"
                  custom="border-2 border-secondary"
                >
                  MENU
                </CtaButton>
              </Link>
              <Link to={"/about"}>
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
              </Link>
            </div>
            <SocialIcons custom="icons" lgDirection="lg:flex-col" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <Banner />
        </ParallaxLayer>

        <ParallaxLayer offset={2}>
          <LearnMore />
          <ImageGrid />
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
