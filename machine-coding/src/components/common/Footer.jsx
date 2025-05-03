import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-top bg-white py-3 mt-5 shadow-sm">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        {/* Left: Copyright and links */}
        <div className="d-flex flex-column flex-md-row align-items-center text-muted small">
          <span className="me-3">&copy; {year} Machine Coding</span>
          <div className="d-flex flex-wrap gap-2">
            <span className="px-1">
              <Link to="/" className="text-decoration-none text-muted fw-semibold">
                About
              </Link>
            </span>
            <span className="px-1">|</span>
            <span className="px-1">
              <a
                href="https://abhis-portfolio-beta.vercel.app/about"
                className="text-decoration-none text-muted fw-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect
              </a>
            </span>
          </div>
        </div>

        {/* Right: Country and Heart */}
        <div className="d-flex align-items-center mt-3 mt-md-0">
          <img
            src="https://flagcdn.com/w20/in.png"
            srcSet="https://flagcdn.com/w40/in.png 2x"
            width="18"
            height="18"
            className="me-2 rounded-circle"
            // style={{ borderRadius: "25%", objectFit: "cover" }}
            alt="India"
          />
          <span className="text-muted fw-semibold">
            Made with <span className="heart">❤️</span> in India
          </span>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
