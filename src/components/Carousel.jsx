import React, { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };
  render() {
    return (
      <div className="carousel">
        <img src={this.props.images[this.state.active]} alt="Animal"></img>
        <div className="carousel-smaller">
          {this.props.images.map((e, index) => {
            return (
              <img
                src={e}
                key={e}
                alt="Animal"
                data-index={index}
                className={index === this.state.active ? "active" : ""}
                onClick={(e) => {
                  this.setState({
                    active: +e.target.dataset.index,
                  });
                }}
              ></img>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
