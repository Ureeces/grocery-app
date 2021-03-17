import React from "react";

const AddItem = (props) => {
  const {
    itemImageLink,
    itemName,
    itemDescription,
    itemPrice,
    handleInputOnChange,
    addItemHandle,
  } = props;

  return (
    <div>
      <button className="delete-button">X</button>
      <p>Input Image Link:</p>
      <input
        type="text"
        name="itemImageLink"
        value={itemImageLink}
        onChange={handleInputOnChange}
      />

      <p>Input Item Name:</p>
      <input
        type="text"
        name="itemName"
        value={itemName}
        onChange={handleInputOnChange}
      />

      <p>Input Item Price:</p>
      <input
        type="text"
        name="itemPrice"
        value={itemPrice}
        onChange={handleInputOnChange}
      />

      <p>Input Item Description:</p>
      <input
        type="text"
        name="itemDescription"
        value={itemDescription}
        onChange={handleInputOnChange}
      />
      <br />
      <button onClick={addItemHandle}>Submit Item</button>
    </div>
  );
};

export default AddItem;
