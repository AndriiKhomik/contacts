import React from "react";
import "./Modal.scss";

const Modal = ({ open, onDelete, toggleModal }) => {
  const handleClick = () => {
    onDelete();
  };
  const isOpen = open ? "modalContainer active" : "modalContainer";
  return (
    <div onClick={toggleModal} className={isOpen}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h4 className="title">
          <span onClick={toggleModal}>
            <i className="fas fa-times"></i>
          </span>
          Do you want to delete this item?
        </h4>
        <button className="btn-modal" onClick={handleClick}>
          yes
        </button>
        <button className="btn-modal" onClick={toggleModal}>
          no
        </button>
      </div>
    </div>
  );
};

export default Modal;
