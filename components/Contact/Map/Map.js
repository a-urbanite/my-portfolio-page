import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import styles from './Map.module.scss'

const Map = () => {
  return (
    <MapContainer center={[52.5200, 13.4050]} zoom={13} scrollWheelZoom={false} className={styles.mapContainer}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[52.51546549130771, 13.404150914931147]}>
        <Popup>
          My office - a public library <br />cannot get cheaper than that!
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map