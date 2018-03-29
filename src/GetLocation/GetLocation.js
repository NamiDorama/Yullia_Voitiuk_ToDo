import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './getLocation.scss';

export class GetLocation extends Component {
  state = {
    location: null,
    error: null
  };

  getPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        location => this.setState({ location }),
        () => this.setState({ error: 'Sorry, something has gone wrong! :(' }),
        {maximumAge:600000, timeout:5000, enableHighAccuracy: true}
      );
    }
  };

  render() {
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
      >
        <Marker position={{ lat: props.lat, lng: props.lng }} />
      </GoogleMap>
    ));

    return (
      <div className="get-location">
        <button onClick={this.getPosition}>
          Get your location
        </button>
        {
          this.state.location ?
            <React.Fragment>
              <div>
                <span>Your latitude: {this.state.location.coords.latitude}</span>
                <span>Your longitude: {this.state.location.coords.longitude}</span>
              </div>
              <MyMapComponent
                isMarkerShown
                lat={this.state.location.coords.latitude}
                lng={this.state.location.coords.longitude}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCj2pn69UXjrrph-__AW_MxWRp04yIhuEY&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </React.Fragment> : <span>{this.state.error}</span>
        }
      </div>
    );
  }
}
