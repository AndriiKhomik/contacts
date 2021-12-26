import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./ContactItem.scss";

const Contactsitem = ({ contact, onDelete }) => {
  return (
    <>
      <div>
        {contact.name} <span>{contact.lastName}</span>
      </div>
      <div className="btn-wrapper">
        <Link to={`contact/${contact.id}`} className="btn btn-primary">
          More
        </Link>
        <button onClick={onDelete} className="btn btn-secondary">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </>
  );
};

export default Contactsitem;
