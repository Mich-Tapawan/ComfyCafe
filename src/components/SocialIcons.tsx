type SocialIcon = {
  link: string;
  img: string;
  alt?: string;
};

const socials: SocialIcon[] = [
  {
    link: "https://www.facebook.com/",
    img: "/assets/socials/fb.png",
    alt: "Facebook",
  },
  {
    link: "https://www.youtube.com/",
    img: "/assets/socials/yt.png",
    alt: "Youtube",
  },
  {
    link: "https://www.x.com/",
    img: "/assets/socials/twt.png",
    alt: "Twitter",
  },
  {
    link: "https://www.instagram.com/",
    img: "/assets/socials/ig.png",
    alt: "Instagram",
  },
];

export default function SocialIcons() {
  return (
    <div className="icons mt-8 lg:absolute">
      <ul className="flex lg:flex-col gap-4 lg:gap-0">
        {socials.map(({ link, img, alt }, index) => (
          <li key={index} className="mb-4">
            <a href={link} target="_blank">
              <div className="w-12">
                <img src={img} alt={alt} className="object-cover w-full" />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
