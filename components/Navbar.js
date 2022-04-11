import Button from "./Button";
import logo from "../media/act-national-logo.png";
import Image from "next/image";
import Link from "next/link";

let NavItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
];

const Navbar = () => {
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-40">
      <div className="flex items-center h-20 justify-between bg-act-grey pr-4">
        <div className="cursor-pointer flex items-center">
          <Link href="/">
            <a className="w-40">
              <Image src={logo} />
            </a>
          </Link>
        </div>
        <ul className="flex items-center">
          {NavItems.map((link) => (
            <li
              key={link.name}
              className="px-2 sm:px-4 text-sm sm:text-base text-center"
            >
              <Link href={link.link}>
                <a className="text-white hover:text-gray-400 duration-500">
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
          <Button text="Book Online" link="/book" className="px-5" />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
