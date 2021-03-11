import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import AddItem from "./AddItem";

export default class ItemList extends Component {
  state = {
    // The list of items in the store
    itemList: [
      {
        id: uuidv4(),
        name: "Martin Portable Propane BBQ Gas Grill",
        price: "139.99",
        imageLink:
          "https://images-na.ssl-images-amazon.com/images/I/71OpFNffgcL._AC_SL1500_.jpg",
        description:
          "Compatible with both high and low pressure lines – ideal for trailers – this portable gas grill is a must-have for any barbeque lover. Not only does it need no external power source (thanks to its piezo-ignition system) it gives you the control over how each and every meal turns out. That’s why we created the MARTIN portable propane bbq gas grill, you have the freedom to adjust the temperature according to the meat – or vegetable – you’re grilling which means you’ll be able to get that delicious “seared on the outside, juicy on the inside” performance every time. Thanks to the closing lid you’ll find it’s much easier to get evenly-cooked food and keep the bugs away while you’re cooking.",
      },
      {
        id: uuidv4(),
        name: "PlayStation 5 (digital)",
        price: "500.00",
        imageLink:
          "https://static.highsnobiety.com/thumbor/Hg2jNcXWBvnB4YA2YMhuHOGN-V4=/1600x1067/static.highsnobiety.com/wp-content/uploads/2020/06/16214518/playstation-5-price-leak-01.jpg",
        description:
          "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio*, and an all-new generation of incredible PlayStation® games.",
      },
    ],

    // These are for the Add and Edit Components - contain the variables for a new object
    itemName: "",
    itemPrice: "",
    itemImageLink: "",
    itemDescription: "",

    // Toggle Display of Add Component
    addDisplayOn: false,
  };

  /****************************************************************
   * Functions for Adding Item
   ***************************************************************/
  addItem = (event) => {
    event.preventDefault();

    const prevItemList = [...this.state.itemList];
    const newItem = {
      id: uuidv4(),
      name: this.state.itemName,
      price: this.state.itemPrice,
      imageLink: this.state.itemImageLink,
      description: this.state.itemDescription,
    };

    this.setState({
      ...this.state,
      itemList: [...prevItemList, newItem],
      itemName: "",
      itemPrice: "",
      itemImageLink: "",
      itemDescription: "",
    });
  };

  // On Change Handlers
  handleNameOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handlePriceOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleImgLinkOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleDescOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // Toggles the add item display - will also be used for edit
  toggleAddDisplay = (event) => {
    event.preventDefault();

    if (this.state.addDisplayOn) {
      this.setState({
        addDisplayOn: false,
      });
    } else {
      this.setState({
        addDisplayOn: true,
      });
    }
  };

  /****************************************************************
   * Functions for Editing Item
   ***************************************************************/

  render() {
    return (
      <div>
        {/* For Add Display */}
        <button onClick={this.toggleAddDisplay}>Add Item</button>
        {this.state.addDisplayOn ? (
          <AddItem
            itemList={this.state.itemList}
            itemName={this.state.itemName}
            itemPrice={this.state.itemPrice}
            itemDescription={this.state.itemDescription}
            itemImageLink={this.state.itemImageLink}
            addItem={this.addItem}
            handleDescOnChange={this.handleDescOnChange}
            handleImgLinkOnChange={this.handleImgLinkOnChange}
            handleNameOnChange={this.handleNameOnChange}
            handlePriceOnChange={this.handlePriceOnChange}
          />
        ) : null}

        {/* Item List Display */}
        {this.state.itemList.map(
          ({ name, price, imageLink, description, id }) => {
            return (
              <div>
                <p>Name: {name}</p>
                <p>Price: ${price}</p>
                <img src={imageLink} alt={`${name}`} width="600px" />
                <p>{description}</p>
                <button>Edit {name}</button>
                <hr></hr>
              </div>
            );
          }
        )}
      </div>
    );
  }
}
