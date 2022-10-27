import * as FaIcons from "react-icons/fa";

const Footer = () => {
  let footerNavLinks = [
    { key: 1, name: "HOME", link: "/", alt: "Link to the Home Page" },
    { key: 2, name: "BOOK ONLINE", link: "/book", alt: "Book online with us" },
  ];

  let footerSocialIcons = [
    {
      key: 1,
      name: "Facebook",
      icon: (
        <FaIcons.FaFacebookSquare
          className="text-4xl"
          href="https://www.facebook.com/BWTCouriers"
        />
      ),
      alt: "Link to our Facebook page",
    },
    {
      key: 2,
      name: "Instagram",
      icon: (
        <FaIcons.FaInstagramSquare
          className="text-4xl"
          href="https://www.instagram.com/bwtransportltd/"
        />
      ),
      alt: "Link to our Instagram page",
    },
    {
      key: 3,
      name: "Phone",
      icon: (
        <FaIcons.FaPhoneSquareAlt className="text-4xl" href="tel:07494945509" />
      ),
      alt: "Link to call us",
    },
  ];

  return (
    <div className="relative bottom-0 left-0 w-full bg-act-grey text-white p-6">
      <div className="text-lg mb-2">
        Please feel free to contact us with any enquiries:
      </div>
      <a
        alt="Call us to enquire about out services"
        href="tel:07494945509"
        className="text-xl my-2 block"
      >
        07494 945 509
      </a>
      <a
        alt="Email us about our services"
        href="mailto:bookings@bwtransport.co.uk"
        className="text-md my-2 block"
      >
        bookings@bwtransport.co.uk
      </a>
      <hr className="my-5" />
      <ul>
        {footerNavLinks.map((item) => {
          return (
            <li key={item.key} className="my-5">
              <a alt={item.alt} href={item.link} className="text-lg">
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
              <a alt={item.alt}>{item.icon}</a>
            </li>
          );
        })}
      </ul>
      <hr />
      <div className="text-xs my-3">
        Site created by{" "}
        <a
          alt="Visit the website creators site"
          href="https://www.jackbrowne.uk"
        >
          Jack Browne
        </a>
      </div>
      <div className="text-xs my-3">
        © 2022 BWTransport. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
