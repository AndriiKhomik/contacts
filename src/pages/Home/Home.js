import React from "react";
import AddContactForm from "../../components/AddContactForm/AddContactForm";
import ContactsList from "../../components/ContactsList/ContactsList";

const Home = ({ addItem, contacts, toggleModal, getId }) => {
  return (
    <>
      <AddContactForm addItem={addItem} />
      <ContactsList
        contacts={contacts}
        toggleModal={toggleModal}
        getId={getId}
      />
    </>
  );
};

export default Home;
