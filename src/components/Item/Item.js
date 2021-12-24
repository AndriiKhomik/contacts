import React, { useEffect, useState } from "react";
import "./Item.scss";

const Item = ({ contactItem, toggleModal }) => {
  const [currentItem, setCurrentItem] = useState({});

  let id = 1;

  useEffect(() => {
    setCurrentItem(contactItem);
  }, [contactItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDelete = (e) => {
    toggleModal();
    console.log(e.target.closest("input"));
  };

  const keys = Object.keys(contactItem).map((item) => (
    <input
      name={item.name}
      key={(id += 1)}
      type="text"
      defaultValue={item}
      className="key-input"
    />
  ));

  const values = Object.values(contactItem).map((item) => (
    <input key={(id += 1)} type="text" defaultValue={item} />
  ));

  return (
    <form onSubmit={handleSubmit} className="form-item-wrapper">
      <ul>
        {keys.map((key, index) => (
          <li key={index}>
            {key}
            {values[index]}
            <button type="submit" onClick={handleDelete}>
              <i className="fas fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default Item;
