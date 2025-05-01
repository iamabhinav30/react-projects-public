import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const easyMenu = [
  { name: "Contaact Form", path: "contact-form" },
  { name: "Problem 2", path: "problem-2" },
];

const Easy = () => {
  return (
    // <div className="d-flex">
    //   <Sidebar menuItems={easyMenu} basePath="/easy" />
    //   <div className="flex-grow-1 p-4">
    //     <Outlet />  
    //   </div>
    // </div>
    <div className="d-flex">
    <Sidebar menuItems={easyMenu} basePath="/easy" />
    <div className="flex-grow-1 p-4 w-100">
      <div className="row g-4">
         {/* Description */}
         <div className="col-12 col-md-6">
          <div className="card shadow-sm">
            <div className="card-header bg-info text-white fw-bold">Description</div>
            <div className="card-body">
              <Outlet context="description" />
            </div>
          </div>
        </div>
        
        {/* Output */}
        <div className="col-12 col-md-6">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white fw-bold">Output</div>
            <div className="card-body">
              <Outlet context="output" />
            </div>
          </div>
        </div>

        {/* Code */}
        <div className="col-12 col-md-6">
          <div className="card shadow-sm">
            <div className="card-header bg-dark text-white fw-bold">Code</div>
            <div className="card-body bg-light">
              <Outlet context="code" />
            </div>
          </div>
        </div>

        {/* Test Cases */}
        <div className="col-12 col-md-6">
          <div className="card shadow-sm">
            <div className="card-header bg-success text-white fw-bold">Test Cases</div>
            <div className="card-body">
              <Outlet context="testcases" />
            </div>
          </div>
        </div>

       
      </div>
    </div>
  </div>
);
};
export default Easy;
