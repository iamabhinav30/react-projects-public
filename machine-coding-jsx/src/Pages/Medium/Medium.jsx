import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const mediumMenu = [
  { name: "Contaact Form", path: "contact-form" }
];

const Medium = () => {
  return (
    <div className="d-flex">
      <Sidebar menuItems={mediumMenu} basePath="/medium" />
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Medium;
