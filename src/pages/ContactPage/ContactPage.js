import React from "react";
import { useParams } from "react-router-dom";
import AddNewFields from "../../components/AddNewField/AddNewField";
import Item from "../../components/Item/Item";

const ItemPage = ({ contacts, updateField, toggleModal, handleUndo }) => {
  let { id: currentId } = useParams();
  const contactItem = contacts.filter(({ id }) => id === +currentId);
  return (
    <>
      <Item
        contactItem={contactItem[0]}
        toggleModal={toggleModal}
        updateField={updateField}
        handleUndo={handleUndo}
      />
      <AddNewFields contactItem={contactItem[0]} updateField={updateField} />
    </>
  );
};

export default ItemPage;
