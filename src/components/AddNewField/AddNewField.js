import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import "./AddNewField.scss";

const initalValue = { fieldName: "", fieldValue: "" };

const AddNewFields = ({ contactItem, updateField }) => {
  const [newField, setNewField] = useState(initalValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newField.fieldName.length > 0 && newField.fieldValue.length > 0) {
      const newItem = {
        ...contactItem,
        [newField.fieldName]: newField.fieldValue,
      };
      updateField(newItem);
      setNewField(initalValue);
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
