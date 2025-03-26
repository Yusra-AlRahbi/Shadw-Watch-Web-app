import { useEffect, useState } from "react";
import CrimeMap from "./components/CrimeMap";
import data from "./data/data.json";
import Header from "./components/Header";
import FilterCrimes from "./components/FilterCrimes";
import Footer from "./components/Footer";
import CrimeReportForm from "./components/CrimeReportForm";

function App() {
  const [crimes, setCrimes] = useState(data.crimes);
  const [selectedTypes, setSelectedTypes] = useState([]);


  
  useEffect(() => {
    // TO GET DATA FROM LOCALSTORAGE
    const savedCrimes = localStorage.getItem("crimes");
    const storedCrimes = savedCrimes ? JSON.parse(savedCrimes) : [];

    //NO REBET CRIME
    const uniqueCrimes = [...crimes, ...storedCrimes].reduce((acc, crime) => {
      if (!acc.some((c) => c.id === crime.id)) {
        acc.push(crime);
      }
      return acc;
    }, []);

    setCrimes(uniqueCrimes);
  }, []);

  useEffect(() => {
    localStorage.setItem("crimes", JSON.stringify(crimes));
  }, [crimes]);


  const handleFilterChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="h-screen flex flex-col">
      <Header crimes={crimes} setCrimes={setCrimes} />
      <div className="p-4 bg-gray-100 flex-1">
      
      <FilterCrimes selectedTypes={selectedTypes} handleFilterChange={handleFilterChange} />
      </div>
      <CrimeMap crimes={crimes} selectedTypes={selectedTypes} />
      <Footer/>
    </div>
  );
}

export default App;