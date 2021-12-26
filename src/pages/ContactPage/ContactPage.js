import React from "react";
import { useParams } from "react-router-dom";
import AddNewFields from "../../components/AddNewField/AddNewField";
import Item from "../../components/Item/Item";

const ItemPage = ({ contacts, updateField, handleUndo }) => {
  let { id: currentId } = useParams();
  const contactItem = contacts.filter(({ id }) => id === +currentId);
  return (
    <>
      <Item
        currentItem={contactItem[0]}
        updateField={updateField}
        handleUndo={handleUndo}
      />
      <AddNewFields contactItem={contactItem[0]} updateField={updateField} />
    </>
  );
};

export default ItemPage;
