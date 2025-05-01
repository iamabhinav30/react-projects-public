import React, { useEffect } from "react";

const FullscreenModal = ({ title, children, onClose }) => {
    // ESC key handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // cleanup
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      <div className=" col-md-10 modal show fade d-block" tabIndex="-1">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-capitalize">{title}</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body overflow-auto">{children}</div>
          </div>
        </div>
      </div>

      {/* Backdrop that doesn’t close modal when clicked */}
      <div className="modal-backdrop fade show" />
    </>
  );
};

export default FullscreenModal;
