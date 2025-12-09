import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import "./custom-sidebar.css";
import { NavLink } from "react-router-dom";
import { useToggle } from "../../../hooks/useToggle";
import { useContext } from "react";
import { userContext } from "../../../context/UserProvider";

function CustomSidebar() {
  const [isCollapse, handleCollapse] = useToggle(false);
  const { user, handleLogout } = useContext(userContext);

  return (
    <>
      <div className={`sidebar-wrapper p-3 ${isCollapse ? "collapsed" : ""}`}>
        <div className="fixed-sidebar">
          <button onClick={handleCollapse} className="border-0 toggle-sidebar">
            <i
              className={`fa-solid ${
                isCollapse ? "fa-chevron-right" : "fa-chevron-left"
              } `}
            ></i>
          </button>
          <h1 className="app-title mb-5">UMS APP</h1>
          <div className="text-center mb-5">
            <img
              src={user?.image}
              alt="user-img"
              className="object-fit-cover rounded-circle mb-4 user-img"
              width="120px"
              height="120px"
            />
            <h2 className="user-name">
              {user?.firstName} {user?.lastName}
            </h2>
            <h3 className="user-role">{user?.role}</h3>
          </div>
          <Sidebar>
            <Menu>
              {/* <MenuItem component={<NavLink to="/" />}>
                <span className="sidebar-text">Home</span>
                <i className="fas fa-home"></i>
              </MenuItem> */}
              <MenuItem component={<NavLink to="userslist" />}>
                <span className="sidebar-text">Users</span>
                <i className="fas fa-users"></i>
              </MenuItem>
              {user?.role === "admin" && (
                <MenuItem component={<NavLink to="userdata" />}>
                  <span className="sidebar-text">Add User</span>
                  <i className="fas fa-add"></i>
                </MenuItem>
              )}

              <MenuItem component={<NavLink to="userprofile" />}>
                <span className="sidebar-text">Profile</span>
                <i className="fas fa-user"></i>
              </MenuItem>
            </Menu>
          </Sidebar>

          <div className="mt-5 pt-5 text-center">
            <button
              type="button"
              onClick={handleLogout}
              className="btn btn-danger"
            >
              Logout <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomSidebar;
