import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import ItemPage from "../../pages/ItemPage/ItemPage";
import AddContactForm from "../AddContactForm/AddContactForm";
import ContactsList from "../ContactsList/ContactsList";
import Modal from "../Modal/Modal";
import "./App.scss";

function App() {
  const [open, setOpen] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "John",
      lastName: "Smith",
      city: "San Francisco",
      yearBirthDate: 1990,
      email: "john.smith@gmail.com",
    },
    {
      id: 2,
      name: "Bill",
      lastName: "Gates",
      city: "Los Angeles",
      yearBirthDate: 1956,
      email: "bill.gates@gmail.com",
    },
  ]);

  const addItem = (name, lastName) => {
    const newItem = { id: contacts.length + 1, name, lastName };
    setContacts((contacts) => {
      const newContacts = [...contacts, newItem];
      return newContacts;
    });
  };

  const addNewField = (obj) => {
    console.log(obj);
    const idx = contacts.findIndex((contact) => contact.id === obj.id);
    setContacts((contacts) => {
      return [...contacts.slice(0, idx), obj, ...contacts.slice(idx + 1)];
    });
  };

  const toggleModal = () => {
    setOpen(!open);
  };

  const getId = (id) => {
    setOpen(!open);
    setItemId(id);
  };

  const onDelete = () => {
    setContacts((contacts) => {
      return contacts.filter((contact) => contact.id !== itemId);
    });
    toggleModal();
  };

  const onDeleteField = () => {};

  return (
    <div className="App">
      <h2>Contacts list application</h2>
      <Switch>
        <Route exact path="/">
          <AddContactForm addItem={addItem} />
          <ContactsList contacts={contacts} getId={getId} />
        </Route>
        <Route exact path="/contact/:id">
          <ItemPage
            contacts={contacts}
            addNewField={addNewField}
            toggleModal={toggleModal}
          />
        </Route>
        <Route path="*">
          <h4>Page not found</h4>
        </Route>
      </Switch>
      <Modal onDelete={onDelete} open={open} toggleModal={toggleModal} />
      <Modal onDelete={onDeleteField} open={open} toggleModal={toggleModal} />
    </div>
  );
}

export default App;
