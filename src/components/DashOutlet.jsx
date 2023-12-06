import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const DashOutlet = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default DashOutlet;
