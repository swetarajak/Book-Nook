import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "rgba(230, 11, 208,.4)", height: "80px" }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            style={{ fontSize: "30px", fontWeight: "bolder" }}
            href="#"
          >
            Book Nook
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ fontSize: "20px" }}
            >
              <Link className="nav-item nav-link active" to="/">
                Home
              </Link>
              <Link className="nav-item nav-link active" to="/books">
                Books
              </Link>
              <Link className="nav-item nav-link active" to="/addBooks">
                AddBooks
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
