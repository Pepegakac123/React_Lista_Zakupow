import React from "react";
import { useState } from "react";
const Grocery = ({ id, name, marked, removeItem, setItemList }) => {
  const [isMarked, setIsMarked] = useState(false);

  const handleMarked = (e) => {
    setIsMarked(!isMarked);

    setItemList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, marked: !isMarked } : item
      )
    );
  };
  return (
    <div className="single-item">
      <input
        type="checkbox"
        name="done"
        id="done"
        onChange={handleMarked}
        checked={marked}
      />
      {marked ? (
        <p style={{ textDecoration: "line-through" }}>{name}</p>
      ) : (
        <p>{name}</p>
      )}
      <button
        className="remove-btn btn"
        onClick={() => {
          removeItem(id);
        }}
      >
        Usuń
      </button>
    </div>
  );
};

export default Grocery;
