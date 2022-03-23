import React, { Component } from "react";

class ClassProps extends Component {
  render() {
    return (
      <div>
        <h1>
          Hello {this.props.name} from {this.props.place}!!
        </h1>
      </div>
    );
  }
}

export default ClassProps;
