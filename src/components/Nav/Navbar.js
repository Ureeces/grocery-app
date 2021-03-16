import React from "react";
import EditItem from "../ItemList/EditItem";
import AddItem from "../ItemList/AddItem";

const Navbar = () => {
  return (
    <div>
      <ul>
          <li>
              <button>Add Item</button>
          </li>
          <li>
              <select></select>
              <button>Edit Item</button>
          </li>
      </ul>
    </div>
  );
};

export default Navbar;
