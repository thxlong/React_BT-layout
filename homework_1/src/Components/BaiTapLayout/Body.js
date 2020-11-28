import React, { Component } from "react";
import Carousel from "./Carousel";
import Product from "./Product";
import ProductList from "./ProductList";
import SideBar from "./SideBar";
import "./SideBar.css"

export default class Body extends Component {
  render() {
    return (
      <div className="row container-fluid body__content">
        <div className="col-3">
          <SideBar />
        </div>

        <div className="col-6">
          <Carousel />
          <ProductList />
        </div>

        <div className="col-3"></div>
      </div>
    );
  }
}
