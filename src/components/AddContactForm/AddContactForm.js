import React, { useState } from "react";
import "./AddContactForm.scss";

const AddContactForm = ({ addItem }) => {
  const [newContact, setNewContact] = useState({ name: "", lastName: "" });
  const [error, setError] = useState(false);

  const onValueChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newContact.name.length === 0 && newContact.lastName.length === 0) {
      return setError(true);
    }
    if (newContact.name === " " && newContact.lastName === " ") {
      return setError(true);
    }
    if (newContact.name.length > 0 && newContact.lastName.length > 0) {
      addItem(newContact.name, newContact.lastName);
      setNewContact({ name: "", lastName: "" });
      setError(false);
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newContact.name}
          onChange={onValueChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={newContact.lastName}
          onChange={onValueChange}
        />
        <button type="submit" className="btn btn-add">
          Add
        </button>
      </form>
      {error && <div className="error">Fields shouldn't be empty</div>}
    </div>
  );
};

export default AddContactForm;
