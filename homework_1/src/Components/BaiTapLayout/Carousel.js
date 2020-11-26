import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    return (
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#demo" data-slide-to={0} className="active" />
          <li data-target="#demo" data-slide-to={1} />
          <li data-target="#demo" data-slide-to={2} />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              src="https://picsum.photos/200"
              alt="First slide"
              width="100%"
              height={500}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/201"
              alt="Second slide"
              width="100%"
              height={500}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/202"
              alt="Third slide"
              width="100%"
              height={500}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#demo"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#demo"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
