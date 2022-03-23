import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Anas",
    };
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        name: "Anas",
      });
    }, 3000);
  };

  render() {
    console.log("Parent Component Render");
    return (
      <div>
        I'm the Parent component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
