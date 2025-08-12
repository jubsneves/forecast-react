import { useState } from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Weather city="Dublin" />
    </>
  );
}

export default App;
