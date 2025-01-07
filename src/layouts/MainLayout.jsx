import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MainLayout = () => {
  const { darkMode } = useContext(AuthContext);
  return (
    <div className={`w-full ${darkMode ? "bg-black" : ""}  dark:bg-black`}>
      <div>
        <nav className=" sticky top-0 z-10 bg-opacity-50 backdrop-blur-3xl">
          <Navbar></Navbar>
        </nav>
        <section>
          <Outlet></Outlet>
        </section>
        <section>
          <Footer></Footer>
        </section>
      </div>
    </div>
  );
};

export default MainLayout;
