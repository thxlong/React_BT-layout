import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-4">
          <Product />
        </div>

        <div className="col-4">
          <Product />
        </div>

        <div className="col-4">
          <Product />
        </div>
      </div>
    );
  }
}
