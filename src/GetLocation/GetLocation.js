import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './getLocation.scss';

export class GetLocation extends Component {
  state = {
    location: null,
    error: null,
    usersLocation: {
      lat: null,
      lng: null
    },
  };

  getPosition = () => {
    const latInput = document.getElementById('lat');
    const lngInput = document.getElementById('lng');
    console.log(!!(latInput.value && lngInput.value));

    if (!!(latInput.value && lngInput.value)) {
      console.log(latInput.value, lngInput.value);
      const latValue = +latInput.value;
      const latMin = +latInput.min;
      const lngMax = +latInput.max;
      const value = +lngInput.value;
      const min = +lngInput.min;
      const max = +lngInput.max;

      console.log(latValue, value);

      if ((latValue >= latMin && latValue <= lngMax) && (value >= min && value <= max)) {
        console.log('hi');
        this.setState({ usersLocation: {
          [latInput.name]: latValue,
          [lngInput.name]: value
        }
        });
        return;
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        location => this.setState({ location }),
        () => this.setState({ error: 'Sorry, something has gone wrong! :(' }),
        { maximumAge: 600000, timeout: 5000, enableHighAccuracy: true }
      );
    }
  };

  render() {
    const MyMapComponent = withScriptjs(withGoogleMap(props => (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
      >
        <Marker position={{ lat: props.lat, lng: props.lng }} />
      </GoogleMap>
    )));

    return (
      <div className="get-location">
        <h2>This is GetLocation</h2>
        <input
          id="lat"
          type="text"
          placeholder="Enter latitude"
          min="-90"
          max="90"
          name="lat"
        />
        <input
          id="lng"
          type="text"
          placeholder="Enter longitude"
          min="-180"
          max="180"
          name="lng"
        />
        <button onClick={this.getPosition}>
          Get your location
        </button>
        {
          this.state.location || this.state.usersLocation.lat && this.state.usersLocation.lng ?
            <React.Fragment>
              <div>
                <span>Your latitude: {this.state.location.coords.latitude}</span>
                <span>Your longitude: {this.state.location.coords.longitude}</span>
              </div>
              <MyMapComponent
                isMarkerShown
                lat={this.state.usersLocation.lat ? this.state.usersLocation.lat : this.state.location.coords.latitude}
                lng={this.state.usersLocation.lng ? this.state.usersLocation.lng : this.state.location.coords.longitude}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCj2pn69UXjrrph-__AW_MxWRp04yIhuEY
                &v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '400px' }} />}
                mapElement={<div style={{ height: '100%' }} />}
              />
            </React.Fragment> : <span>{this.state.error}</span>
        }
      </div>
    );
  }
}
