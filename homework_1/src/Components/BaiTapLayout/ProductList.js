import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  render() {
    const test = Array.from(Array(50).keys())
    return (
      <div className="row">

        {
      test.map( x=>  <div className="col-4" key={x}>   <Product  /> </div>)
        }
      </div>
    );
  }
}
