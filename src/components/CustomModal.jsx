// CustomModal.js
import React, { useEffect } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function CustomModal({ isOpen, afterOpen, onRequestClose, body }) {
  useEffect(() => {
    if (isOpen && afterOpen) {
      afterOpen();
    }
  }, [isOpen, afterOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <div>{body}</div>
      <button onClick={onRequestClose}>Lukk</button>
    </Modal>
  );
}

export default CustomModal;
