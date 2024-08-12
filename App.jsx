import "./App.css";
import Display from "./components/display";
import ButtonsContainer from "./components/buttonsContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayCalVal = calVal + buttonText;
      setCalVal(newDisplayCalVal);
    }
  };

  return (
    <div id="calculator">
      <Display calVal={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
