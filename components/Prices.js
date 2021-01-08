import React from "react";

class Prices extends React.Component {
  state = {
    currency: "USD",
  };
  render() {
    return (
      <div>
        <ul>
          <li>
            Bitcoin rate for {this.props.bpi.USD.description}{" "}
            <span>{this.props.bpi.USD.code}</span>{" "}
            <strong>{this.props.bpi.USD.rate}</strong>
          </li>
        </ul>
      </div>
    );
  }
}

export default Prices;
