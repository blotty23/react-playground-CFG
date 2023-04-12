import "./App.css";
import Button from "./Components/Button";
import { Homepage } from "./Components/Homepage";
import { Gallery } from "./Components/Gallery";
import { useState } from "react";

function App() {
  const [showPage, setShowPage] = useState("homepage");

  return (
    <div className="App">
      <header className="App-header">
        <Button
          message="show homepage"
          showPage={"homepage"}
          setShowPage={setShowPage}
        />
        <Button
          message="show gallery"
          showPage={"gallery"}
          setShowPage={setShowPage}
        />
        {showPage === "homepage" && <Homepage />}
        {showPage === "gallery" && <Gallery />}
      </header>
    </div>
  );
}

export default App;
