import React from "react";

const AddItem = (props) => {
  const {
    itemImageLink,
    itemName,
    itemDescription,
    itemPrice,
    handleDescOnChange,
    handleImgLinkOnChange,
    handleNameOnChange,
    handlePriceOnChange,
    addItemHandle,
  } = props;

  return (
    <div>
      <button>X</button>
      <p>Input Image Link:</p>
      <input
        type="text"
        name="itemImageLink"
        value={itemImageLink}
        onChange={handleImgLinkOnChange}
      />

      <p>Input Item Name:</p>
      <input
        type="text"
        name="itemName"
        value={itemName}
        onChange={handleNameOnChange}
      />

      <p>Input Item Price:</p>
      <input
        type="text"
        name="itemPrice"
        value={itemPrice}
        onChange={handlePriceOnChange}
      />

      <p>Input Item Description:</p>
      <input
        type="text"
        name="itemDescription"
        value={itemDescription}
        onChange={handleDescOnChange}
      />
      <br />
      <button onClick={addItemHandle}>Submit Item</button>
    </div>
  );
};

export default AddItem;
