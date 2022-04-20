import * as FaIcons from "react-icons/fa";

const Footer = () => {
  let footerNavLinks = [
    { key: 1, name: "HOME", link: "/" },
    { key: 2, name: "BOOK ONLINE", link: "/book" },
    // { key: 2, name: "ABOUT US", link: "/about" },
  ];

  let footerSocialIcons = [
    {
      key: 1,
      name: "Facebook",
      link: "https://www.facebook.com/ActNationalCouriers",
      icon: <FaIcons.FaFacebookSquare />,
    },
    {
      key: 2,
      name: "Instagram",
      link: "https://www.instagram.com/actnationalcouriers/",
      icon: <FaIcons.FaInstagramSquare />,
    },
    {
      key: 3,
      name: "Phone",
      link: "tel:07494945509",
      icon: <FaIcons.FaPhoneSquareAlt />,
    },
  ];

  return (
    <div className="relative bottom-0 left-0 w-full bg-act-grey text-white p-6">
      <div className="text-lg mb-2">
        Please feel free to contact us with any enquiries:
      </div>
      <a href="tel:07494945509" className="text-xl my-2 block">
        07494 945 509
      </a>
      <a
        href="mailto:bookings@actnationalcouriers.com"
        className="text-md my-2 block"
      >
        bookings@actnationalcouriers.com
      </a>
      <hr className="my-5" />
      <ul>
        {footerNavLinks.map((item) => {
          return (
            <li key={item.key} className="my-5">
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
            <li key={item.key} className="mr-3">
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
        © 2022 ActNational. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
