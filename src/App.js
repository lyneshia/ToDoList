import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setItem(newValue);
  }

  function addItem() {
    setItemList((prevItem) => {
      return [...prevItem, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {itemList.map((item) => (
          <li> {item} </li>
        ))}
      </div>
    </div>
  );
}

export default App;
