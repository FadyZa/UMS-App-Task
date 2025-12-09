import "./navbar.css";

function Navbar() {
  return (
    <nav className="header-nav">
      <div className="container-fluid">
        <div className="actions-wrapper d-flex justify-content-end align-items-center gap-3">
          <div className="position-relative">
            <input
              type="text"
              placeholder="Search"
              className="form-control has-icon"
            />
            <i className="fa-solid fa-magnifying-glass input-icon"></i>
          </div>
          <div className="notification-icon">
            <i className="fa-regular fa-bell"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
