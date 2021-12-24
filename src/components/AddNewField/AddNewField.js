import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import "./AddNewField.scss";

const AddNewFields = ({ contactItem, addNewField }) => {
  const [newField, setNewField] = useState({ fieldName: "", fieldValue: "" });
  const [currentItem, setCurrentItem] = useState({});

  useEffect(() => {
    setCurrentItem(contactItem);
  }, [contactItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newField.fieldName.length > 0 && newField.fieldValue.length > 0) {
      const newItem = {
        ...currentItem,
        [newField.fieldName]: newField.fieldValue,
      };
      setCurrentItem(newItem);
      addNewField(newItem);
      setNewField({ fieldName: "", fieldValue: "" });
    }
  };

  const onValueChange = (e) => {
    setNewField({ ...newField, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="New name"
          onChange={onValueChange}
          value={newField.fieldName}
          name="fieldName"
        />
        <input
          type="text"
          placeholder="New value"
          name="fieldValue"
          value={newField.fieldValue}
          onChange={onValueChange}
        />
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
      <Link className="home-btn" type="submit" to="/">
        Go to the main page
      </Link>
    </>
  );
};

export default AddNewFields;
