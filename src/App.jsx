import { useState } from "react";
import "./App.css";
import QuotesBox from "./components/QuotesBox";
import quotes from "./json/quotes.json";
import colors from "./json/colors.json";

function App() {
  const getRamdomFromArray = (arr) => {
    const indexRandom = Math.floor(arr.length * Math.random());
    return arr[indexRandom];
  };

  const [quoteRamdom, setquoteRamdon] = useState(getRamdomFromArray(quotes));

  const [colorRamdon, setcolorRamdon] = useState(getRamdomFromArray(colors));

  const handleClick = () => {
    setquoteRamdon(getRamdomFromArray(quotes));
    setcolorRamdon(getRamdomFromArray(colors));
  };

  const objStyle = {
    backgroundColor: colorRamdon,
  };

  return (
    <div className="App" style={objStyle}>
      <QuotesBox
        quoteRamdom={quoteRamdom}
        handleClick={handleClick}
        colorRamdon={colorRamdon}
      />
    </div>
  );
}

export default App;
