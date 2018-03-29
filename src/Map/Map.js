import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MyMapComponent = ({ isMarkerShown, lat, lng }) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: lat, lng: lng }}
  >
    {isMarkerShown && <Marker position={{ lat: lat, lng: lng }} />}
  </GoogleMap>
);