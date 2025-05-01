import { Link, useLocation, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";


const Sidebar = ({ menuItems = [], basePath = "" }) => {
  const location = useLocation();
  const navigate = useNavigate();

useEffect(() => {
  if (location.pathname === basePath && menuItems.length > 0) {
    navigate(`${basePath}/${menuItems[0].path}`, { replace: true });
  }
}, [location.pathname, basePath, menuItems, navigate]);


  const getCurrentSection = () => {
    if (location.pathname.startsWith("/easy")) return "Easy";
    if (location.pathname.startsWith("/medium")) return "Medium";
    if (location.pathname.startsWith("/hard")) return "Hard";
    return "Menu";
  };

  const sectionTitle = getCurrentSection();

  return (
    <div
      className="p-4 col-md-2"
      style={{
        minWidth: "230px",
        minHeight: "100vh",
        backgroundColor: "#e9f5ff",
        borderRight: "1px solid #cce0f0",
      }}
    >
      <h5 className="fw-bold mb-4" style={{ color: "#084298" }}>
        {sectionTitle}
      </h5>

      <ul className="nav flex-column">
        {menuItems.map((item) => {
          const isActive = location.pathname === `${basePath}/${item.path}`;
          return (
            <li key={item.path} className="nav-item mb-2">
              <Link
                to={`${basePath}/${item.path}`}
                className={`nav-link d-flex align-items-center px-3 py-2 rounded ${
                  isActive
                    ? "fw-semibold text-white"
                    : "text-dark"
                }`}
                style={{
                  backgroundColor: isActive ? "#0d6efd" : "transparent",
                  transition: "all 0.3s",
                  color: isActive ? "#fff" : "#084298",
                  fontWeight: isActive ? "600" : "500",
                }}
              >
                <i className="bi bi-chevron-right me-2"></i>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
