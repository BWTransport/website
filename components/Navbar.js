import Button from "./Button";
import logo from "../media/act-national-logo.png";
import Image from "next/image";

let NavItems = [{ name: "About Us", link: "/about" }];

const Navbar = () => {
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-40">
      <div className="flex items-center h-20 justify-between bg-act-grey pr-5">
        <div className="cursor-pointer flex items-center">
          <a href="/" className="w-40">
            <Image src={logo} />
          </a>
        </div>
        <ul className="flex items-center">
          {NavItems.map((link) => (
            <li
              key={link.name}
              className="px-5 text-sm sm:text-base text-center"
            >
              <a
                className="text-white hover:text-blue-400 duration-500"
                href={link.link}
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button text="Book Online" link="/book" className="" />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
