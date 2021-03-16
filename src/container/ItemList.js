import React, { Component} from "react";
import { v4 as uuidv4 } from "uuid";
import AddItem from "../components/AddItem";
import EditItem from "../components/EditItem";
import Banner from '../components/Banner'
import './ItemList.css'
// import Filter  from '../components/Filter';
// import Search from '../components/Search';

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
    
    // These are for the Add Component - contain the variables for a new object
    itemName: "",
    itemPrice: "",
    itemImageLink: "",
    itemDescription: "",
    
    // Toggle Display of Add Component
    addDisplayOn: false,
    
    // Toggle Display of Edit Component
    editDisplayOn: false,
    
    // The ID of the item to edit
    selectedItemID: "",
    
    // These are for the Edit Component - contain the variables for the editing object
    tempName: "",
    tempPrice: "",
    tempImageLink: "",
    tempDescription: "",
  };
  
  /****************************************************************
   * Functions for Deleting Item
   ***************************************************************/
  // Handler for deleting an item
  deleteItemHandle = (targetID) => {
    const newItemList = this.state.itemList.filter((item) => {
      return item.id !== targetID;
    });
    
    this.setState({
      ...this.state,
      itemList: newItemList,
    });
  };
  
  
  /****************************************************************
   * Functions for Adding Item
   ***************************************************************/
  // Handler for Adding an Item
  addItemHandle = (event) => {
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
      addDisplayOn: !this.state.addDisplayOn,
    });
  };

  // Toggles the add item display
  toggleAddDisplay = (event) => {
    event.preventDefault();

    this.setState((prevState) => {
      return {
        ...prevState,
        addDisplayOn: !prevState.addDisplayOn,
      };
    });
  };

  /****************************************************************
   * Functions for Editing Item
   ***************************************************************/
  // Handler for editing an item
  editItemHandle = () => {
    console.log(this.state.selectedItemID);
    const newItemList = this.state.itemList.map((item) => {
      if (item.id === this.state.selectedItemID) {
        return {
          id: item.id,
          name: this.state.tempName,
          price: this.state.tempPrice,
          imageLink: this.state.tempImageLink,
          description: this.state.tempDescription,
        };
      } else {
        return item;
      }
    });

    this.setState({
      ...this.state,
      itemList: newItemList,
      editDisplayOn: !this.state.editDisplayOn,
    });
  };

  // Toggles the edit item display
  toggleEditDisplay = (event) => {
    event.preventDefault();

    this.setState((prevState) => {
      return {
        ...prevState,
        editDisplayOn: !prevState.editDisplayOn,
      };
    });
  };
 /****************************************************************
   * Functions for Searching Item
   ***************************************************************/
 
  /****************************************************************
   * On Change Handlers
   ***************************************************************/
  handleInputOnChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  // Edit Select OnChange Function
  handleEditSelect = (event) => {
    this.setState({
      ...this.state,
      selectedItemID: event.target.value,
    });
  };

  //Search OnChange function
  

  /****************************************************************
   * Rendering
   ****************************************************************/
  render() {
    return (
      <div>
        {/* Banner */}
      <Banner />
        {/* For Add Display */}
        <button className="add-button" onClick={this.toggleAddDisplay}>Add Item</button>
        {this.state.addDisplayOn ? (
          <AddItem
            itemList={this.state.itemList}
            itemName={this.state.itemName}
            itemPrice={this.state.itemPrice}
            itemDescription={this.state.itemDescription}
            itemImageLink={this.state.itemImageLink}
            addItemHandle={this.addItemHandle}
            handleInputOnChange={this.handleInputOnChange}
          />
        ) : null}{" "}
        <br />
        <select class="selector" onChange={this.handleEditSelect}>
          <option selected disabled>
            Select an Item to Edit
          </option>
          {this.state.itemList.map(({ name, id }) => {
            return <option value={id}>{name}</option>;
          })}
        </select>
        <button onClick={this.toggleEditDisplay}>Edit Item</button>
        {this.state.editDisplayOn ? (
          <EditItem
            itemList={this.state.itemList}
            tempName={this.state.tempName}
            tempPrice={this.state.tempPrice}
            tempDescription={this.state.tempDescription}
            tempImageLink={this.state.tempImageLink}
            editItemHandle={this.editItemHandle}
            handleInputOnChange={this.handleInputOnChange}
          />
        ) : null}{" "}
        {/* Item List Display */}
        {this.state.itemList.map(
          ({ name, price, imageLink, description, id }) => {
            return (
              <div class ="products products-table">
                <div class="product">

                <button onClick={() => this.deleteItemHandle(id)}>X</button>
                <img class="product-img"src={imageLink} alt={`${name}`} />
                </div>
                <div class="product-content">

                <h3> {name}</h3>
                <small>{description}</small>
                <p class="product-text price">Price: ${price}</p>
                </div>
                {/* <hr></hr> */}
              </div>
            );
          }
        )}
      </div>
    );
  }
}