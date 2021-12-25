import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import "./ContactList.scss";

const ContactList = ({ contacts, getId }) => {
  const contactList = contacts.map((contact) => (
    <li key={contact.id}>
      <ContactItem contact={contact} onDelete={() => getId(contact.id)} />
    </li>
  ));

  return (
    <div className="list-wrapper">
      <ul className="item-list">{contactList}</ul>
    </div>
  );
};

export default ContactList;
