import Square from "./Square";
import Input from "./Input";
import Voice from "./Voice";
import { useState, useEffect } from "react";
function App() {
  useEffect(() => {
    console.log("Gideon"); // Gets called at every render
  }, []);
  const [colorValue, setColorValue] = useState("");
  const [rightColorValue, setRightColorValue] = useState(true);
  const [hexValue, setHexValue] = useState(true);
  const [isDarkText, setIsDarkText] = useState(true);
  return (
    <div className="App">
      <Voice 
           setColorValue={setColorValue} 
           colorValue={colorValue} 
           setHexValue={setHexValue}
           rightColorValue={rightColorValue}
           setRightColorValue={setRightColorValue}

      />
      <Square
        colorValue={colorValue}
        setColorValue={setColorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
        rightColorValue={rightColorValue}
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        hexValue={hexValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
        setRightColorValue={setRightColorValue}
      />
    </div>
  );
}

export default App;
