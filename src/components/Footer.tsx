import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-primary py-20 h-fit px-5 md:px-20 lg:min-h-96 lg:px-36 text-white grid grid-cols-1 lg:grid-cols-6">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-start lg:col-span-3 gap-2 ">
        <SocialIcons custom="ftr-icons" />
        <p className="font-extralight" style={{ width: "70%" }}>
          Privacy Notice | Terms of Use | Privacy | CA Supply Chain Act |
          Cookies Preferences
        </p>
        <span className="text-gray-400 font-thin w-3/4">
          @2023 Comfy Café Company. All rights reserved.
        </span>
      </div>
      <div className="ftr-list flex justify-center my-10 lg:my-0 lg:col-span-2 gap-20 lg:px-10">
        <div>
          <h5 className="font-bold">Get in touch</h5>
          <ul className="leading-8 font-extralight">
            <li>Gmail</li>
            <li>
              <a href="https://www.facebook.com/2easy4mik" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://x.com/2easy4mik" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/eirraammm_/" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold">Pages</h5>
          <ul className="leading-8 font-extralight">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-end lg:justify-end lg:col-span-1 ">
        <div className="w-28">
          <div className="w-24  justify-self-center mb-1">
            <img src="/logo.png" alt="comfy café" className="w-full" />
          </div>
          <p className="text-center" style={{ width: "100%" }}>
            Comfy Café
          </p>
        </div>
      </div>
    </footer>
  );
}
