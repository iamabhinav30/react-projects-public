import React, { useCallback, useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useParams } from "react-router-dom";
import { problems } from "../assets/problems";
import { sections } from "../utilities/constants";
import FullscreenModal from "./FullscreenModal";

const ProblemLayout = ({ menuItems, basePath, title }) => {
  const { problemId } = useParams();
  const problem = problems[problemId];
  const [copiedContext, setCopiedContext] = useState(null);
  const [modalContext, setModalContext] = useState(null);

  const handleCopy =useCallback((context) => {
    const text = problems[problemId]?.[context];
    if (text) {
      navigator.clipboard.writeText(text).then(() => {
        alert(`${context} copied to clipboard!`);
      });
    }
  }, [problemId]);

  const handleExpand = useCallback((context) => {
    setModalContext(context);
  }, []);

  return (
    <div className="d-flex">
      <Sidebar menuItems={menuItems} basePath={basePath} />
      <div className="flex-grow-1 col-md-10 p-4">
        {/* Title and Companies */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">

          {/* Companies */}
          {problem?.companies?.length > 0 && (
            <div className="d-flex flex-wrap gap-2 mt-2 mt-md-0">
              {problem.companies.map((comp, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 fw-bold rounded-pill shadow-sm tab-machine-coding"
                  style={{ fontSize: "0.85rem", fontWeight: 500 }}
                >
                  {comp}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* 4 Quadrants */}
        <div className="row g-3">
          <div className="row g-3">
            {sections.map(({ title, context, bg, light, copy }, idx) => (
              <div className="col-12 col-md-6" key={idx}>
                <div className="card shadow-sm h-100 d-flex flex-column">
                  <div className={`card-header ${bg} text-white fw-bold d-flex justify-content-between align-items-center`}>
                    <span>{title}</span> 
                    {copy && (
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="btn btn-sm btn-outline-light d-flex align-items-center gap-1"
                          onClick={() => handleCopy(context)}
                        >
                          {copiedContext === context ? (
                            <>
                              <i className="bi bi-check2-all" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <i className="bi bi-clipboard" title="Copy" />
                          )}
                        </button>

                        <button
                          className="btn btn-sm btn-outline-light"
                          onClick={() => handleExpand(context)}
                          title="Expand"
                        >
                          <i className="bi bi-arrows-fullscreen" />
                        </button>
                      </div>
                    )}


                  </div>

                  <div className={`card-body ${light ? "bg-light" : ""} d-flex flex-column h-100`}>
                    <Outlet context={context} />
                  </div>
                </div>
              </div>
            ))}

            {modalContext && (
              <div className="col-md-8">
                <FullscreenModal title={modalContext} onClose={() => setModalContext(null)}>
                  <Outlet context={modalContext} />
                </FullscreenModal>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemLayout;
