import Image from "next/image";
import Head from "next/head";
import Button from "../components/Button";
import heroImage from "../public/van-image-1.JPG";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";

let cardsData = [
  {
    id: "1",
    icon: <RiIcons.RiTruckLine />,
    text: "Hassle Free Nationwide Courier Delivery Service, Covering all UK Mainlands Starting at £50",
    link: "/book",
    alt: "home",
  },
  {
    id: "1",
    icon: <BiIcons.BiHome />,
    text: "House Removals Local and Nationwide Flexible To Serve Your Needs",
    link: "/book",
    alt: "home",
  },
  {
    id: "1",
    icon: <BiIcons.BiPackage />,
    text: "Safe Storage of Goods in a Secure Facility, Starting from £10 per Week",
    link: "/book",
    alt: "home",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>ActNational Courier Delivery Service | Book Now</title>
        <link rel="icon" href="/public/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Hassle free nationwide courier delivery service covering all UK mainlands, specialising in transport of goods of any shape and size, home removals, storage and much more!"
        />
      </Head>
      <div className="w-full relative">
        <div className="w-full flex h-60vh z-0">
          <Image src={heroImage} objectFit="cover" alt="hero-image" />
          <div className="grid grid-rows-9 bg-white shadow-2xl flex sm:self-center sm:items-center self-center lg:right-32 md:right-24 sm:right-12 mx-10 z-10 px-7 py-5 rounded-2xl max-w-xs absolute">
            <h2 className="text-left row-span-4 font-bold text-gray-700 text-3xl my-2">
              Professional Courier Service
            </h2>
            <h4 className="text-left text-lg row-span-2 text-act-grey my-2">
              Services covering all UK Mainlands
            </h4>
            <div className="row-span-3 my-2">
              <Button text="Book Online" link="/book" className="" />
            </div>
          </div>
        </div>
        <div className="p-12 bg-gray-100 sm:pt-20 sm:pb-10">
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-700 text-center">
            National Delivery Service Transporting Goods of any Shape and Size
          </h2>
          <h4 className="lg:text-2xl sm:text-xl text-lg text-act-grey text-center sm:mt-10 mt-8">
            Offering a range of services such as the following...
          </h4>
          <div className="grid justify-center mt-8 lg:mb-16">
            {cardsData.map((item) => {
              return (
                <div
                  className="flex items-center py-10 rounded-xl bg-white my-6 max-w-4xl shadow-xl"
                  key=""
                >
                  <a
                    href={item.link}
                    alt={item.alt}
                    className="mx-6 md:mx-10 text-3xl md:text-5xl text-gray-700"
                  >
                    {item.icon}
                  </a>
                  <div className="text-lg sm:text-xl md:text-2xl mr-6 md:mr-16 text-gray-700">
                    {item.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
