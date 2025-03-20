import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CrimeMap = ({ crimes }) => {
  return (
    <MapContainer center={[23.588, 58.3829]} zoom={12} className="h-screen w-full">
      <TileLayer
        url="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors'
      />
      {crimes.map((crime) => (
        <Marker key={crime.id} position={[crime.latitude, crime.longitude]}>
          <Popup>
            <strong>{crime.crime_type}</strong>
            <p>{crime.report_details}</p>
            <p><strong>Status:</strong> {crime.report_status}</p>
            <p><strong>Time:</strong> {crime.report_date_time}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CrimeMap;
