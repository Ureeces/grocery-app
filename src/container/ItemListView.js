import React from "react";
import "./ItemList.css";

const ItemListView = (props) => {
  return (
    <>
      {props.itemList.map(({ name, price, imageLink, description, id }) => {
        return (
          <center>
            <div class="products products-table">
              <div class="product">
                <button
                  className="delete-button"
                  onClick={() => props.deleteItemHandle(id)}
                >
                  X
                </button>
                <img class="product-img" src={imageLink} alt={`${name}`} />
                <div class="product-content">
                  <h3> {name}</h3>
                  <small>{description}</small>
                  <p class="product-text price">Price: ${price}</p>
                </div>
              </div>
              {/* <hr></hr> */}
            </div>
          </center>
        );
      })}
    </>
  );
};

export default ItemListView;
