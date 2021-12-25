import React from "react";
import Modal from "../Modal/Modal";
import "./Item.scss";

const Item = ({
  updateField,
  toggleModal,
  contactItem: currentItem,
  handleUndo,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDelete = (objKey) => () => {
    const upd = currentItem;
    delete upd[objKey];
    updateField(upd);
  };

  const handleChange = (key) => (e) => {
    updateField({ ...currentItem, [key]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-item-wrapper">
        <ul>
          {Object.keys(currentItem).map((objKey) => (
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
              <button type="submit" onClick={handleDelete(objKey)}>
                <i className="fas fa-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      </form>
      <Modal toggleModal={toggleModal} />
    </>
  );
};

export default Item;
