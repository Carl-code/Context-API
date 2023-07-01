import React, { Component } from "react";
import PropTypes from "prop-types";

export class greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 29,
    };
  }

  render(props) {
    return (
      <div>
        <h1>Hola {this.props.name}</h1>
        <h2>Tu Edad es: {this.state.age}</h2>
        <div>
          <button onClick={this.addAge}>Click</button>
        </div>
      </div>
    );
  }

  addAge = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1,
    }));
  };

}

greeting.propTypes = {
  name: PropTypes.string
}

export default greeting;
