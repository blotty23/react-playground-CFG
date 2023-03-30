import "./App.css";
import { Welcome, FunctionalWelcome } from "./Components/Welcome";
import ButtonClicker from "./Components/ButtonClicker";
import IncrementButton from "./Components/IncrementButton";
import IncrementButtonWithState from "./Components/IncrementButtonWithState";
import FunctionalIncrementButton from "./Components/FunctionalIncrementButtonWithState";
import FunctionalButtonClicker from "./Components/FunctionalButtonClicker";
import Button from "./Components/Button";

const myName = "Emma";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name={myName} />
        <br />
        <FunctionalWelcome name={"Sophie"} />
        <br />
        <Button message={"MESSAGE GIVEN AS PROPS"} />
        <br />
        <br />

        <IncrementButton />
        <br />
        <IncrementButtonWithState />
        <br />
        <FunctionalIncrementButton />
        <br />


        <br />
        <ButtonClicker name={myName} />
        <br />
        <FunctionalButtonClicker name={myName} />
        <br />
      </header>
    </div>
  );
}

export default App;
