import React, { Component } from "react";

export default class SideBar extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center pt-2">Shop Name</h2>
        <div className="list-group" id="list-tab" role="tablist">
          <a
            className="list-group-item list-group-item-action active"
            data-toggle="list"
            href="#list-1"
            role="tab"
            aria-controls="category_1"
          >
            Category 1
          </a>
          <a
            className="list-group-item list-group-item-action"
            data-toggle="list"
            href="#list-2"
            role="tab"
            aria-controls="category_2"
          >
            Category 2
          </a>
          <a
            className="list-group-item list-group-item-action"
            data-toggle="list"
            href="#list-3"
            role="tab"
            aria-controls="category_3"
          >
            Category 3
          </a>
        </div>
      </div>
    );
  }
}
