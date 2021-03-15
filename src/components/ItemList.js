import React, { Component } from "react";

export default class ItemList extends Component {
  state = {
    itemList: [
      {
        name: "Martin Portable Propane BBQ Gas Grill",
        price: "139.99",
        imageLink:
          "https://images-na.ssl-images-amazon.com/images/I/71OpFNffgcL._AC_SL1500_.jpg",
        description:
          "Compatible with both high and low pressure lines – ideal for trailers – this portable gas grill is a must-have for any barbeque lover. Not only does it need no external power source (thanks to its piezo-ignition system) it gives you the control over how each and every meal turns out. That’s why we created the MARTIN portable propane bbq gas grill, you have the freedom to adjust the temperature according to the meat – or vegetable – you’re grilling which means you’ll be able to get that delicious “seared on the outside, juicy on the inside” performance every time. Thanks to the closing lid you’ll find it’s much easier to get evenly-cooked food and keep the bugs away while you’re cooking.",
      },
      {
        name: "PlayStation 5 (digital)",
        price: "500.00",
        imageLink:
          "https://static.highsnobiety.com/thumbor/Hg2jNcXWBvnB4YA2YMhuHOGN-V4=/1600x1067/static.highsnobiety.com/wp-content/uploads/2020/06/16214518/playstation-5-price-leak-01.jpg",
        description:
          "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio*, and an all-new generation of incredible PlayStation® games.",
      },
    ],
  };

  render() {
    return (
      <div>
        {this.state.itemList.map(({ name, price, imageLink, description }) => {
          return (
            <div>
              <p>Name: {name}</p>
              <p>Price: ${price}</p>
              <img src={imageLink} alt={`Picture of ${name}`} width="600px" />
              <p>{description}</p>
              <hr></hr>
            </div>
          );
        })}
      </div>
    );
  }
}