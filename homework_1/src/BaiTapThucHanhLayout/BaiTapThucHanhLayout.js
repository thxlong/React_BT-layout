import React, { Component } from "react";
import Body from "../Components/BaiTapLayout/Body";
import Carousel from "../Components/BaiTapLayout/Carousel";
import Footer from "../Components/BaiTapLayout/Footer";
import Header from "../Components/BaiTapLayout/Header";
import SideBar from "../Components/BaiTapLayout/SideBar";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
