import { Outlet } from "react-router-dom";
import CustomSidebar from "../../components/shared/Custom-sidebar/CustomSidebar";
import Navbar from "../../components/shared/navbar/Navbar";
import "./mainlayout.css";

function Mainlayout() {
  return (
    <>
      <div className="d-flex">
        <CustomSidebar />
        <div className="page-content">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Mainlayout;
