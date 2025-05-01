import ProblemLayout from "../../components/ProblemLayout";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const hardMenu = [
  { name: "Contact Form", path: "contact-form" }
];

const Hard = () => {
  return (
    <ProblemLayout
    menuItems={hardMenu}
    basePath="/medium"
    title="medium"
  />
  );
};

export default Hard;
