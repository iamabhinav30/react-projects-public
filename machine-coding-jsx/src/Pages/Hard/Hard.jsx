import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const hardMenu = [
  { name: "Contact Form", path: "contact-form" }
];

const Hard = () => {
  return (
    <div className="d-flex">
      <Sidebar menuItems={hardMenu} basePath="/hard" />
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Hard;
