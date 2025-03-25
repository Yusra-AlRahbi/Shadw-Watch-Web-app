import { useState } from "react";
import CrimeMap from "./components/CrimeMap";
import data from "./data/data.json";
import Header from "./components/Header";
import FilterCrimes from "./components/FilterCrimes";
import Footer from "./components/Footer";

function App() {
  const [crimes, setCrimes] = useState(data.crimes);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleFilterChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <FilterCrimes selectedTypes={selectedTypes} handleFilterChange={handleFilterChange} />
      <CrimeMap crimes={crimes} selectedTypes={selectedTypes} />
      <Footer/>
    </div>
  );
}

export default App;