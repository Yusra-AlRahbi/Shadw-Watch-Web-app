import { useState } from "react";

const CrimeReportForm = ({ crimes, setCrimes }) => {
  const [showForm, setShowForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    report_details: "",
    crime_type: "Assault",
    national_id: "",
    latitude: "",
    longitude: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.report_details ||
      !formData.national_id ||
      !formData.latitude ||
      !formData.longitude
    ) {
      setErrorMessage("All fields are required.");
      return;
    }
    if (!/^[0-9]+$/.test(formData.national_id)) {
      setErrorMessage("National ID must be a valid number.");
      return;
    }
    const newCrime = {
      id: crimes.length + 1,
      ...formData,
      latitude: parseFloat(formData.latitude),
      longitude: parseFloat(formData.longitude),
      report_status: "Pending",
      report_date_time: new Date()
        .toISOString()
        .replace(/T/, "-")
        .replace(/:/g, "-")
        .split(".")[0],
    };
    setCrimes([...crimes, newCrime]);
    setShowForm(false);
    setErrorMessage("");
    setFormData({
      report_details: "",
      crime_type: "Assault",
      national_id: "",
      latitude: "",
      longitude: "",
    });
  };

  return (
    <div>
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-600 text-white px-2 py-2 rounded mb-2 cursor-pointer hover:bg-blue-700 ">
        Report Crime
      </button>

      {/* TO ADD NEW CRIME MODAL */}
      {showForm && (
        <div className="fixed top-0 right-0 left-0 z-500 flex justify-center items-center w-full h-full bg-transparent backdrop-blur-xs">
          <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                New Crime Report
              </h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4">
              <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-900 dark:text-white">
                  National Id
                </label>
                <input
                  type="text"
                  name="national_id"
                  placeholder="National ID"
                  value={formData.national_id}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-900 dark:text-white">
                  Crime Type
                </label>
                <select
                  name="crime_type"
                  value={formData.crime_type}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white">
                  {[
                    "Assault",
                    "Robbery",
                    "Homicide",
                    "Kidnapping",
                    "Theft",
                  ].map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900 dark:text-white">
                    Report Details
                  </label>
                  <textarea
                    rows={4}
                    name="report_details"
                    placeholder="Report Details"
                    value={formData.report_details}
                    onChange={handleInputChange}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    required
                  />
                </div>
              </div>
             
             
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-900 dark:text-white">
                  Latitude:
                </label>
                <input
                  type="text"
                  name="latitude"
                  placeholder="Latitude"
                  value={formData.latitude}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded mb-2"
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-900 dark:text-white">
                  Longitude:
                </label>
                <input
                  type="text"
                  name="longitude"
                  placeholder="Longitude"
                  value={formData.longitude}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded mb-2"
                  required
                />
              </div>

              <button
                type="submit"
                className="text-white bg-green-600 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer">
                Submit
              </button>
              {/*ERROR  ALERT */}
              {errorMessage && (
                <div className="w-full text-white bg-red-500 mb-4">
                  <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                    <div className="flex">
                      <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                        <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path>
                      </svg>
                      <p className="mx-3">{errorMessage}</p>
                    </div>
                    <button
                      onClick={() => setErrorMessage("")}
                      className="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6 18L18 6M6 6L18 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CrimeReportForm;