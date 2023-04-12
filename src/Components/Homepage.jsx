import React from "react";

export class Homepage extends React.Component {
  render() {
    return (
      <div>Hello {this.props.name || "World"}!!</div>
    );
  }
}


