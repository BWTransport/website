import Button from "./Button";

const Footer = () => {
  return (
    <div className="bg-act-grey h-20 bottom-0">
      <div className="flex items-center">
        <h1>Logo</h1>
        <h1>About Us</h1>
        <Button text="Book Online" />
      </div>
    </div>
  );
};

export default Footer;
