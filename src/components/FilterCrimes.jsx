const FilterCrimes = ({ selectedTypes, handleFilterChange }) => (
  <fieldset className="p-2 bg-gray-100">
    <h2 className="text-lg font-bold mb-1">Filter Crimes</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
      {["Assault", "Robbery", "Homicide", "Kidnapping", "Theft"].map((type) => (
        <label key={type} className="flex items-center space-x-1">
          <input
            type="checkbox"
            value={type}
            checked={selectedTypes.includes(type)}
            onChange={() => handleFilterChange(type)}
            className="size-4 rounded cursor-pointer border-gray-300 shadow-sm hover:scale-110 hover:shadow-xl focus:outline-hidden"
          />
          <span className="font-medium text-sm text-gray-700">{type}</span>
        </label>
      ))}
    </div>
  </fieldset>
);

export default FilterCrimes;
