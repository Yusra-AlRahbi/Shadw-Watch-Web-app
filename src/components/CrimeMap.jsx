import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const CrimeMap = ({ crimes,selectedTypes }) => {
  const filteredCrimes =
    selectedTypes.length > 0
      ? crimes.filter((crime) => selectedTypes.includes(crime.crime_type))
      : crimes;

    const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-500';
      case 'En Route': return 'bg-blue-500';
      case 'On Scene': return 'bg-purple-500';
      case 'Under Investigation': return 'bg-orange-500';
      case 'Resolved': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };
  const crimeColors = {
    assault: "#09765e",    
    robbery: "#760969", 
    homicide: "red",      
    kidnapping: "#5858e2",  
    theft: "#dee10d"
  };
const getCrimeIcon = (crimeType) => {
  const iconColor = crimeColors[crimeType.toLowerCase()] || "#7F8C8D";
  return L.divIcon({
    className: "",
    html: `
      <div style="
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        
        <div style="
          background-color: ${iconColor};
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
          box-shadow: 0px 2px 6px rgba(0,0,0,0.3);
        ">
          <img src="/icons/${crimeType.toLowerCase()}.png" alt="${crimeType}" style="
            width: 24px;
            height: 24px;
          " />
        </div>
        
        <div style="
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 12px solid ${iconColor};
        "></div>
      </div>
    `,
    iconSize: [40, 52],
    iconAnchor: [20, 52], 
    popupAnchor: [0, -45],
  });
};
  return (
    <MapContainer center={[23.588, 58.3829]} zoom={7} className="h-96 w-full sm:h-screen">
      <TileLayer
        url="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors'
      />
      {filteredCrimes.map((crime) => (
        <Marker
          key={crime.id}
          position={[crime.latitude, crime.longitude]}
          icon={getCrimeIcon(crime.crime_type)} 
        >
          <Popup>
            <strong>{crime.crime_type}</strong>
            <p>{crime.report_details}</p>
            <p><strong>Status:</strong> <span className={`text-xs px-2 py-1 rounded-full text-white ${getStatusColor(crime.report_status)}`}>{crime.report_status}</span></p>
            <p><strong>Time:</strong> {crime.report_date_time}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CrimeMap;