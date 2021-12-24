import React from "react";
import { useParams } from "react-router-dom";
import AddNewFields from "../../components/AddNewField/AddNewField";
import Item from "../../components/Item/Item";

const ItemPage = ({ contacts, addNewField, toggleModal }) => {
  let { id: currentId } = useParams();
  const contactItem = contacts.filter(({ id }) => id === +currentId);
  return (
    <>
      <Item contactItem={contactItem[0]} toggleModal={toggleModal} />
      <AddNewFields contactItem={contactItem[0]} addNewField={addNewField} />
    </>
  );
};

export default ItemPage;
