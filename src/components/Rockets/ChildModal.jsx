import { Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ChildModal.css";
import ModalHeader from "./ModalHeader";
import OverviewDetails from "./OverviewDetails";
import PhotoDetails from "./PhotoDetails";

function ChildModal({ open, handleClose, selectedItem }) {
  const [overviewDetails, setOverviewDetails] = useState(true);
  const [photosDetails, setPhotoDetails] = useState(false);

  useEffect(() => {
    if (open) {
      setOverviewDetails(true);
      setPhotoDetails(false);
    }
  }, [open]);

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal-box">
        {selectedItem && (
          <div className="modal-content">
            <ModalHeader
              selectedItem={selectedItem}
              setOverviewDetails={setOverviewDetails}
              setPhotoDetails={setPhotoDetails}
              handleClose={handleClose}
              photosDetails={photosDetails}
              overviewDetails={overviewDetails}
            />
            <div className="modal-overview">
              <OverviewDetails
                overviewDetails={overviewDetails}
                selectedItem={selectedItem}
              />
              <PhotoDetails
                photosDetails={photosDetails}
                selectedItem={selectedItem}
              />
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}

export default ChildModal;
