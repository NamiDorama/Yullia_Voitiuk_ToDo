import './getLocation.scss';

export class GetLocation extends Component {
  state = {
    location: null,
    error: null
  };

  getPosition = () => {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(location => this.setState({ location }));
    }

    return this.setState({ error: 'Sorry, something has gone wrong! :(' });
  };

  render() {
    return (
      <div className="get-location">
        <button onClick={this.getPosition}>
          Get your location
        </button>
        {
          this.state.location ?
            <React.Fragment>
              <span>Your latitude: {this.state.location.coords.latitude}</span>
              <span>Your longitude: {this.state.location.coords.longitude}</span>
            </React.Fragment> : <span>{this.state.error}</span>
        }
      </div>
    );
  }
}
