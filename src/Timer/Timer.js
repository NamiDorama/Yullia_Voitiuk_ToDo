import './timer.scss';

export class Timer extends Component {
  constructor() {
    super();
    this.state = {
      date: null
    };
    this.timer = setInterval(() => {
      const date = new Date().toLocaleString();
      this.setState({ date });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <React.Fragment>
        <h2>This is Timer</h2>
        <div>{this.state.date}</div>
      </React.Fragment>
    );
  }
}
