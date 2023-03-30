import { useState } from "react";

const FunctionalIncrementButton = () => {
  const [counter, setCounter] = useState(0)

  const whenButtonPressed = () =>  {
    setCounter((counter)=> counter+1)
    console.log("FUNCTIONAL STATE: The value of counter is now: " + counter);
  }

  return (
    <>
      <button className="incrementButton" onClick={whenButtonPressed}>
        {"FUNCTIONAL STATE: The counter currently is " + counter}
      </button>
    </>
  );
};
export default FunctionalIncrementButton;
