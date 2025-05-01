import { Link } from "react-router-dom";
import './App.css';
import { AppRoutes } from './AppRoutes';

function App() {
  return (
    <>
     <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light shadow-sm">

        <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center">
          {/* Brand and Menu */}
          <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center w-100">
            <Link to="/" className="navbar-brand fw-bold mb-2 mb-lg-0">
              Machine Coding Questions JSX
            </Link>

            {/* Always Visible Navigation */}
            <ul className="navbar-nav flex-row">
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
            </ul>
          </div>

          {/* Search form - Responsive */}
          <form className="d-flex mt-2 mt-lg-0">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <main className="">
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
