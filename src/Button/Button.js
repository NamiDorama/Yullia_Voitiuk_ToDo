import './button.scss';

export class Button extends Component {
  state = {
    className: null
  };

  changeClassName = () => {
    const className = this.state.className ? null : 'active';
    this.setState({ className });
  };

  render() {
    return (
      <React.Fragment>
        <button
          className={this.state.className}
          onClick={this.changeClassName}
        >
          {this.state.className ? 'Hide (active class)' : 'Show (no class)'}
        </button>
        {
          this.state.className && <span>Hello here! :)</span>
        }
      </React.Fragment>
    );
  }
}
