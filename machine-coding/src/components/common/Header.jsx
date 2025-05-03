import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center">

        {/* Brand and Menu */}
        <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between w-100">
          <Link to="/" className="navbar-brand fw-bold mb-2 mb-lg-0 fs-4 text-primary">
            <img
              alt="Machine Coding Logo"
              className=" img-fluid"
              src="/svg.png"
              style={{ maxWidth: "50px", height: "auto" }}
            /> Machine Coding
          </Link>

          {/* Navigation Tabs */}
          {/* <ul className="navbar-nav flex-row">
            <li className="nav-item me-2">
              <Link
                to="/easy"
                className="nav-link text-white fw-bold px-3"
                style={{ backgroundColor: 'green', borderRadius: '6px' }}
              >
                Easy
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link
                to="/medium"
                className="nav-link text-dark fw-bold px-3"
                style={{ backgroundColor: 'orange', borderRadius: '6px' }}
              >
                Medium
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link
                to="/hard"
                className="nav-link text-white fw-bold px-3"
                style={{ backgroundColor: 'red', borderRadius: '6px' }}
              >
                Hard
              </Link>
            </li>
          </ul> */}
          <ul className="navbar-nav flex-row">
  <li className="nav-item  me-2">
    <Link to="/easy" className="nav-link level-tab tab-easy rounded-pill shadow-sm px-4">
      Easy
    </Link>
  </li>
  <li className="nav-item me-2">
    <Link to="/medium" className="nav-link level-tab tab-medium rounded-pill shadow-sm px-4">
      Medium
    </Link>
  </li>
  <li className="nav-item me-2">
    <Link to="/hard" className="nav-link level-tab tab-hard rounded-pill shadow-sm px-4">
      Hard
    </Link>
  </li>
</ul>

        </div>

        {/* Search */}
        <form className="d-flex mt-2 mt-lg-0">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-machine-coding" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default React.memo(Header);
