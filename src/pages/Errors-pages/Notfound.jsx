import "./errors.css";

function Notfound() {
  return (
    <div className="err-container vh-100 d-flex flex-column justify-content-center">
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img
            src="/error-img.svg"
            className="img-fluid"
            width="600px"
            alt="Error Image"
          />
          <h2 className="text-dark fw-bold bg-light p-3 rounded mt-3">
            Can not find this page!
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Notfound;
