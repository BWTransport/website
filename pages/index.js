import Image from "next/image";
import Button from "../components/Button";
import heroImage from "../public/van-image-1.JPG";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/Ai";
import Head from "next/head";
import { socialData } from "../public/socialData";

let cardsData = [
  {
    id: "1",
    icon: <BiIcons.BiPackage />,
    text: "Professional Service Catering for House Moving, Item Transport and much more",
    link: "/",
    alt: "home",
  },
  {
    id: "1",
    icon: <BiIcons.BiPackage />,
    text: "Professional Service Catering for House Moving, Item Transport and much more",
    link: "/",
    alt: "home",
  },
  {
    id: "1",
    icon: <BiIcons.BiPackage />,
    text: "Professional Service Catering for House Moving, Item Transport and much more",
    link: "/",
    alt: "home",
  },
];

let footerNavLinks = [
  { name: "HOME", link: "/" },
  { name: "ABOUT US", link: "/about" },
  { name: "BOOK ONLINE", link: "/book" },
];

let footerSocialIcons = [
  {
    name: "Facebook",
    link: "https://www.facebook.com",
    icon: <AiIcons.AiFillFacebook />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com",
    icon: <AiIcons.AiOutlineInstagram />,
  },
  {
    name: "Phone",
    link: `tel:${socialData.phone}`,
    icon: <FaIcons.FaFacebook />,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>ACT National</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Act National | Professional courier service covering all UK Mainlands"
        />
      </Head>
      <div className="w-full absolute sm:top-20">
        <div className="w-full flex h-60vh sm:h-60vh left-0 z-0 justify-center">
          <Image src={heroImage} objectFit="cover" alt="hero-image" />

          <div className="self-end grid sm:grid-rows-9 bg-gray-200 sm:self-center sm:items-center lg:right-32 md:right-24 sm:right-12 sm:mx-10 z-10 px-7 py-5 my-12 sm:my-0 rounded-2xl max-w-sm sm:max-w-xs absolute">
            <h2 className="text-left row-span-4 font-bold text-act-grey text-xl sm:text-3xl my-2">
              Professional Courier Service
            </h2>
            <h4 className="text-left text-md sm:text-lg row-span-2 text-act-grey my-2">
              Services covering all UK Mainlands
            </h4>
            <div className="row-span-3 my-2">
              <Button text="Book Online" link="/book" className="" />
            </div>
          </div>
        </div>
        <div className="m-12">
          <h2 className="lg:text-4xl md:text-3xl text-2xl sm:mt-16 font-bold text-act-grey text-center">
            Courier Service Covering All UK Mainlands
          </h2>
          <h4 className="lg:text-2xl sm:text-xl text-lg text-act-grey text-center sm:mt-10 mt-8">
            Professional Service Catering for House Moving, Item Transport and
            much more
          </h4>
          <div className="grid justify-center mt-8 md:mb-16 mb-12">
            {cardsData.map((item) => {
              return (
                <div
                  className="flex items-center py-10 rounded-xl bg-gray-200 my-6 max-w-4xl"
                  key=""
                >
                  <a
                    href={item.link}
                    alt={item.alt}
                    className="mx-6 md:mx-10 text-3xl md:text-5xl text-act-grey"
                  >
                    {item.icon}
                  </a>
                  <div className="text-lg sm:text-xl md:text-2xl mr-6 md:mr-16 text-act-grey">
                    {item.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-act-grey text-white p-6">
          <div className="text-lg mb-2">
            Please feel free to contact us with any enquiries:
          </div>
          <div className="text-xl my-2">07570 805 627</div>
          <div className="text-md my-2">bookings@actnationalcouriers.com</div>
          <hr className="my-5" />
          <ul>
            {footerNavLinks.map((item) => {
              return (
                <li className="my-5">
                  <a href={item.link} className="text-lg">
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="flex my-5">
            {footerSocialIcons.map((item) => {
              return (
                <li className="mr-3">
                  <a href={item.link} className="text-4xl">
                    {item.icon}
                  </a>
                </li>
              );
            })}
          </ul>
          <hr />
          <div className="text-xs my-3">
            Site created by <a href="https://www.jackbrowne.uk">Jack Browne</a>
          </div>
          <div className="text-xs my-3">
            © 2022 Act National Ltd. All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
}
