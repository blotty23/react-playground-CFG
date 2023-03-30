import React from "react";

class IncrementButtonWithState extends React.Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };

    this.whenButtonPressed = this.whenButtonPressed.bind(this);
  }

  whenButtonPressed() {
    this.setState({ counter: this.state.counter + 1 });

    console.log("WITH STATE: The value of counter is now: " + this.state.counter);
  }

  render() {
    return (
      <>
        <button className="incrementButton" onClick={this.whenButtonPressed}>
          {"WITH STATE: The counter currently is " + this.state.counter}
        </button>
      </>
    );
  }
}

export default IncrementButtonWithState;
