import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-primary py-20 px-5 md:px-20 lg:px-36 text-white">
      <SocialIcons />
      <p className="font-extralight">
        Privacy Notice | Terms of Use | Privacy | CA Supply Chain Act | Cookies
        Preferences
      </p>
      <span className="text-gray-400 font-thin">
        @2023 Comfy Café Company. All rights reserved.
      </span>
      <div className="w-28">
        <div className="w-24  justify-self-center mb-1">
          <img src="/logo.png" alt="comfy café" className="w-full" />
        </div>
        <p className="text-center" style={{ width: "100%" }}>
          Comfy Café
        </p>
      </div>
    </footer>
  );
}
