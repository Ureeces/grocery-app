import React, { Component } from "react";
import { Route } from "react-router-dom";
import Search from "../components/Search";
import ItemList from "../components/ItemList";
import Banner from "../components/Banner";

class MainPage extends Component {
  state = {
    name: "",
    price: "",
    imageLink: "",
    description: "",
  };

  finder = () => {
    ItemList.filter((item) => item.name).map((filteredItem) => (
      <li>{filteredItem.name}</li>
    ));
  };

  render() {
    return (
      <div className="banner">
        <Banner />
        <Search />
        <div className="main-div">
          <h1> 'main page here' </h1>

          <ItemList />
        </div>
      </div>
    );
  }
}

export default MainPage;
