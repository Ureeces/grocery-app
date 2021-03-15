import React from "react";

const EditItem = (props) => {
  const {
    tempImageLink,
    tempName,
    tempDescription,
    tempPrice,
    handleInputOnChange,
    editItemHandle,
  } = props;

  return (
    <div>
      <button>X</button>
      <p>Input Image Link:</p>
      <input
        type="text"
        name="tempImageLink"
        value={tempImageLink}
        onChange={handleInputOnChange}
      />

      <p>Input Item Name:</p>
      <input
        type="text"
        name="tempName"
        value={tempName}
        onChange={handleInputOnChange}
      />

      <p>Input Item Price:</p>
      <input
        type="text"
        name="tempPrice"
        value={tempPrice}
        onChange={handleInputOnChange}
      />

      <p>Input Item Description:</p>
      <input
        type="text"
        name="tempDescription"
        value={tempDescription}
        onChange={handleInputOnChange}
      />
      <br />
      <button onClick={editItemHandle}>Submit Item</button>
    </div>
  );
};

export default EditItem;
