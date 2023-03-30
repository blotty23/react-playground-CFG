function IncrementButton() {
  let counter = 0;

  function whenButtonPressed() {
    counter++; // this is the same as index = index + 1
    console.log("NO STATE: The value of counter is now: " + counter);
  }

  return (
    <>
      <button className="incrementButton" onClick={whenButtonPressed}>
        {"WITHOUT STATE: The counter currently is " + counter}
      </button>
    </>
  );
}
export default IncrementButton;
