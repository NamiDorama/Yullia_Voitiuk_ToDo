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
    show: false
  };

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        location => this.setState({ location }),
        () => this.setState({ error: 'Sorry, something has gone wrong! :(' }),
        { maximumAge: 600000, timeout: 5000, enableHighAccuracy: true }
      );
    }
  }

  getPosition = () => {
    if (this.latInput.value && this.lngInput.value) {
      const latValue = +this.latInput.value;
      const latMin = +this.latInput.min;
      const lngMax = +this.latInput.max;
      const value = +this.lngInput.value;
      const min = +this.lngInput.min;
      const max = +this.lngInput.max;

      if ((latValue >= latMin && latValue <= lngMax) && (value >= min && value <= max)) {
        this.setState({ usersLocation: {
          [this.latInput.name]: latValue,
          [this.lngInput.name]: value
        }
        });
      }
    }

    if (this.latInput.value.trim() == '' || this.lngInput.value.trim() == '') {
      this.setState({ usersLocation: {
        [this.latInput.name]: null,
        [this.lngInput.name]: null
      }
      });
    }

    this.setState({ show: true });
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
          ref={el => this.latInput = el}
        />
        <input
          id="lng"
          type="text"
          placeholder="Enter longitude"
          min="-180"
          max="180"
          name="lng"
          ref={el => this.lngInput = el}
        />
        <button onClick={this.getPosition}>
          Get your location
        </button>
        {
          this.state.show ?
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
