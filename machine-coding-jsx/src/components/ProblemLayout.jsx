import React from "react";
import Sidebar from "./Sidebar";
import { Outlet, useParams } from "react-router-dom";
import { problems } from "../assets/problems";
// import { problems } from "../problems";

const ProblemLayout = ({ menuItems, basePath, title }) => {
  const { problemId } = useParams();
  const problem = problems[problemId];

  return (
    <div className="d-flex">
      <Sidebar menuItems={menuItems} basePath={basePath} />
      <div className="flex-grow-1 p-4 w-100">
        {/* Title and Companies */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
          
          {/* Companies */}
          {problem?.companies?.length > 0 && (
            <div className="d-flex flex-wrap gap-2 mt-2 mt-md-0">
              {problem.companies.map((comp, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-light text-dark rounded-pill shadow-sm"
                  style={{ fontSize: "0.85rem", fontWeight: 500 }}
                >
                  {comp.name}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* 4 Quadrants */}
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

export default ProblemLayout;
