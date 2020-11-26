import React, { Component } from "react";
import Carousel from "./Carousel";
import Product from "./Product";
import SideBar from "./SideBar";

export default class Body extends Component {
  render() {
    return (
      <div className="mt-4">
        <div className="row container-fluid">
          <div className="col-3">
            <SideBar />
          </div>

          <div className="col-6">
            <Carousel />
            <Product />
          </div>

          <div className="col-3"></div>
        </div>
      </div>
    );
  }
}
