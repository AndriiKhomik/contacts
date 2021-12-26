import { useCallback, useState } from "react";
import { Route, Switch } from "react-router-dom";
import ContactPage from "../../pages/ContactPage/ContactPage";
import Home from "../../pages/Home/Home";
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

  const addItem = useCallback(
    (name, lastName) => {
      const maxId = contacts.reduce((acc, curr) =>
        acc.b > curr.b ? acc : curr
      ).id;
      const newItem = { id: maxId + 1, name, lastName };
      const newContacts = [...contacts, newItem];
      setContacts(newContacts);
    },
    [contacts]
  );

  const handleUndo = useCallback(() => {
    setContacts((prevState) => prevState);
  }, []);

  const updateField = useCallback(
    (obj) => {
      const idx = contacts.findIndex((contact) => contact.id === obj.id);
      const updatedContacts = [
        ...contacts.slice(0, idx),
        obj,
        ...contacts.slice(idx + 1),
      ];
      setContacts(updatedContacts);
    },
    [contacts]
  );

  const toggleModal = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const getId = (id) => {
    setOpen(!open);
    setItemId(id);
  };

  const onDelete = useCallback(() => {
    const updatedContacts = contacts.filter((contact) => contact.id !== itemId);
    setContacts(updatedContacts);
    toggleModal();
  }, [contacts, toggleModal, itemId]);

  return (
    <div className="App">
      <h2>Contacts list application</h2>
      <Switch>
        <Route exact path="/">
          <Home
            addItem={addItem}
            contacts={contacts}
            toggleModal={toggleModal}
            getId={getId}
          />
        </Route>
        <Route exact path="/contact/:id">
          <ContactPage
            contacts={contacts}
            updateField={updateField}
            handleUndo={handleUndo}
          />
        </Route>
        <Route path="*">
          <h4>Page not found</h4>
        </Route>
      </Switch>
      <Modal open={open} toggleModal={toggleModal}>
        <button className="btn-modal" onClick={onDelete}>
          yes
        </button>
      </Modal>
    </div>
  );
}

export default App;
