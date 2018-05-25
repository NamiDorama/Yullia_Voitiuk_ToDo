export class Async extends Component {
  state = {
    Async: null,
    error: ''
  };

  async componentDidMount() {
    try {
      const module = await import(/* webpackChunkName: 'async-mode' */ `../${this.props.path}/`);
      const Async = module && module[this.props.name];

      if (Async) {
        this.setState({ Async });
      }
    } catch(err) {
      this.setState({ err: String(err) });
    }
  }

  render() {
    const { Async, err } = this.state;

    return  err ? <span>Unable to load {this.props.name}</span> : Async && <Async {...this.props} /> ;
  }
}
