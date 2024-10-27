import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

type ContactDetail = {
  img: string;
  alt?: string;
  text: string;
};

const details: ContactDetail[] = [
  { img: "/assets/mail.png", alt: "email", text: "comfycafe@gmail.com" },
  { img: "/assets/phone.png", alt: "telephone", text: "(043) 8123 - 4567" },
  { img: "/assets/mobile.png", alt: "mobile", text: "+63 918 695 0102" },
];

export default function Contact() {
  return (
    <>
      <div className="contact h-fit lg:h-svh w-full text-white px-5 md:px-20 lg:px-36 pt-32 pb-10 lg:pt-44 lg:pb-0 flex flex-col lg:flex-row">
        <div className="  lg:w-4/6">
          <h1 className="text-4xl text-center font-bold mb-8 lg:text-6xl lg:text-start ">
            GET IN TOUCH
          </h1>
          <p className="text-center font-thin  mb-10 lg:w-4/6 lg:leading-10  lg:text-xl lg:text-start">
            We’d love to hear from you! Whether you’re sharing feedback, have a
            question, or just want to chat over your favorite coffee blend,
            Comfy Café is here to connect. We look forward to hearing from you!
          </p>
          <ul className="flex flex-col gap-7 items-center mb-10 lg:items-start lg:mb-0">
            {details.map(({ img, alt, text }, index) => (
              <li key={index} className="w-fit flex items-center gap-5">
                <div className="w-10">
                  <img src={img} alt={alt} className="object-cover w-full" />
                </div>
                <span
                  className="md:text-lg lg:text-xl"
                  style={{ fontFamily: "Poppins, serif" }}
                >
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-3/6">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
