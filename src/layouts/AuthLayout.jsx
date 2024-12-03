import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <section>
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default AuthLayout;
