import { Outlet } from "react-router-dom";
import "./authlayout.css";

function Authlayout() {
  return (
    <div className="auth-container vh-100 d-flex flex-column justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 col-sm-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authlayout;
