import React from "react";

function FunctionProps(props) {
  return (
    <div>
      <h3>This is a functional component</h3>
      <h3>
        This is {props.name} talking from {props.place} :D
      </h3>
    </div>
  );
}

export default FunctionProps;
