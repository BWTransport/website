import Image from "next/image";
import Button from "../components/Button";
import Card from "../components/Card";
import heroImage from "../public/van-image-1.JPG";

export default function Home() {
  return (
    <div className="w-full absolute top-20">
      <div className="w-full flex h-60vh left-0 z-0">
        <Image src={heroImage} objectFit="cover" />

        <div className="grid grid-rows-9 bg-gray-200 flex self-center items-center lg:right-32 md:right-24 sm:right-12 mx-10 right-0 z-10 px-7 py-5 rounded-2xl max-w-sm absolute">
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
        <div className="">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
