import Button from "./Button";

const Navbar = () => {
  return (
    <div className="bg-act-grey h-110">
      <div className="flex items-center">
        <h1>Logo</h1>
        <h1>About Us</h1>
        <Button text="Book Online" color="green" />
      </div>
    </div>
  );
};

export default Navbar;
