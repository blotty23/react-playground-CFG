import React, { useState } from "react";

const FunctionalButtonClicker = ({ name = "You" }) => {
  const [counter, setCounter] = useState(0);

  const handleButtonClicked = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <>
      <button
        onClick={handleButtonClicked}
      >
        Click Me
      </button>
      <div>
        {name} clicked the button {counter} times
      </div>
    </>
  );
};

export default FunctionalButtonClicker;
