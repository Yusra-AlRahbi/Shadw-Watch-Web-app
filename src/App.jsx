import { useState } from "react";
import CrimeMap from "./components/CrimeMap";
import data from "./data/data.json";

function App() {
  const [crimes, setCrimes] = useState(data.crimes);

  return (
    <div className="h-screen">
      <CrimeMap crimes={crimes} />
    </div>
  );
}

export default App;