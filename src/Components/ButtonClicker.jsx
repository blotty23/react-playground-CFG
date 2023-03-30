import React from "react";

const colours = ["red", "green","blue", "orange", "purple", "cyan","yellow"]

class ButtonClicker extends React.Component {
  state = {
    counter: 0,
  };

  handleButtonClicked = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    const updatedColour = Math.floor(Math.random() * colours.length)
    return (
      <>
        <button
          style={{ backgroundColor: colours[updatedColour] }}
          onClick={this.handleButtonClicked}
        >
          Click Me
        </button>
        <div>
          {this.props.name || "you"} clicked the button {this.state.counter}{" "}
          times
        </div>
      </>
    );
  }
}

export default ButtonClicker;
