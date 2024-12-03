import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <nav>
        <Navbar></Navbar>
      </nav>
      <section>
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default MainLayout;
