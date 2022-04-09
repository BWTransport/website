import Image from "next/image";
import Button from "../components/Button";
import Card from "../components/Card";
import heroImage from "../public/van-image-1.JPG";
import * as BiIcons from "react-icons/bi";

let cardsData = [
  {
    id: "1",
    icon: <BiIcons.BiPackage />,
    text: "Professional Service Catering for House Moving, Item Transport and much more",
    link: "/",
  },
  {
    id: "1",
    icon: <BiIcons.BiPackage />,
    text: "Professional Service Catering for House Moving, Item Transport and much more",
    link: "/",
  },
  {
    id: "1",
    icon: <BiIcons.BiPackage />,
    text: "Professional Service Catering for House Moving, Item Transport and much more",
    link: "/",
  },
];

export default function Home() {
  return (
    <div className="w-full absolute top-20">
      <div className="w-full flex h-60vh left-0 z-0">
        <Image src={heroImage} objectFit="cover" />

        <div className="grid grid-rows-9 bg-gray-200 flex self-center items-center lg:right-32 md:right-24 sm:right-12 mx-10 right-0 z-10 px-7 py-5 rounded-2xl max-w-xs absolute">
          <h2 className="text-left row-span-4 font-bold text-act-grey text-3xl my-2">
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
      <div className="m-12 h-screen">
        <h2 className="lg:text-4xl md:text-3xl text-2xl sm:mt-16 font-bold text-act-grey text-center">
          Courier Service Covering All UK Mainlands
        </h2>
        <h4 className="lg:text-2xl sm:text-xl text-lg text-act-grey text-center sm:mt-10 mt-8">
          Professional Service Catering for House Moving, Item Transport and
          much more
        </h4>
        <div className="grid justify-center my-8 md:my-8">
          {cardsData.map((item, index) => {
            return (
              <div className="flex items-center py-10 rounded-xl bg-gray-200 my-6 max-w-4xl">
                <a
                  href={item.link}
                  className="mx-6 md:mx-10 text-4xl md:text-6xl text-act-grey"
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
    </div>
  );
}
