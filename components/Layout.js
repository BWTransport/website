import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      {children}
      {/* <Footer className="" /> */}
    </div>
  );
};

export default Layout;
