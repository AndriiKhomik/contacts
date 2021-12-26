import React, { useState, useCallback } from "react";
import "./Item.scss";

const Item = ({ updateField, currentItem, handleUndo }) => {
  const [objKey, setObjKey] = useState("");
  const [open, setOpen] = useState(false);
  const isOpen = open ? "modalContainer active" : "modalContainer";

  const handleDelete = (objKey) => () => {
    const upd = currentItem;
    delete upd[objKey];
    updateField(upd);
    toggleModal();
  };

  const handleKeyAtToggleModal = (objKey) => (e) => {
    setObjKey(objKey);
    e.preventDefault();
    toggleModal();
  };

  const toggleModal = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleChange = (key) => (e) => {
    updateField({ ...currentItem, [key]: e.target.value });
  };

  const renderContactList = Object.keys(currentItem).map((objKey) => (
    <li key={objKey}>
      <input
        type="text"
        disabled
        value={objKey}
        onChange={() => {}}
        className="key-input"
      />
      <input
        type="text"
        value={currentItem[objKey]}
        onChange={handleChange(objKey)}
        className="key-input"
      />
      <button type="submit" onClick={handleUndo}>
        <i className="fas fa-undo"></i>
      </button>
      <button type="submit" onClick={handleKeyAtToggleModal(objKey)}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  ));

  return (
    <>
      <form className="form-item-wrapper">
        <ul>{renderContactList}</ul>
      </form>

      <div onClick={toggleModal} className={isOpen}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <h4 className="title">
            <span onClick={toggleModal}>
              <i className="fas fa-times"></i>
            </span>
            Do you want to delete this item?
          </h4>
          <button className="btn-modal" onClick={handleDelete(objKey)}>
            yes
          </button>
          <button className="btn-modal" onClick={toggleModal}>
            no
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
