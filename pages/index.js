import Image from "next/image";
import Button from "../components/Button";
import heroImage from "../public/van-image-1.JPG";

export default function Home() {
  return (
    <div className="w-full absolute top-20 h-screen">
      <div className="w-full flex h-60vh left-0 z-0">
        <Image src={heroImage} objectFit="cover" />
        <div className="grid grid-rows-9 bg-gray-200 flex self-center items-center right-32 z-10 px-7 py-5 h-60 rounded-2xl w-96 absolute">
          <h2 className="text-left row-span-4 font-bold text-act-grey text-3xl">
            Professional Courier Service
          </h2>
          <h4 className="text-left text-lg row-span-2 text-act-grey">
            Services covering all UK Mainlands
          </h4>
          <div className="row-span-3">
            <Button text="Book Online" link="/book" className="" />
          </div>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-act-grey mt-16 mb-10 text-center">
        Courier Service Covering All UK Mainlands
      </h2>
      <h4 className="text-2xl text-act-grey text-center">
        Professional Service Catering for House Moving, Item Transport and much
        more
      </h4>
    </div>
  );
}
