import ProptTypes from 'prop-types';
import './edit.scss';

export class Edit extends Component {
  state = {
    edit: false,
    inputText: ''
  };

  editToggle = ({ target }) => {
    this.setState({ edit: !this.state.edit });

    if (this.state.edit) {
      const inputText = target.value;

      this.setState({ inputText });
      this.props.callbackFunc(inputText);
    }
  };

  render() {
    const { edit, inputText } = this.state;

    return (
      <div className="edit">
        <h2>This is Edit</h2>
        {edit &&
          <input
            autoFocus
            type="text"
            onBlur={this.editToggle}
          />}
        {!edit &&
          <p onClick={this.editToggle}>Click to edit</p>}
        {inputText.length > 0 ? <p>Your text was: {inputText}</p> : null}
      </div>
    );
  }
}

Edit.propTypes = {
  callbackFunc: ProptTypes.func
};
Edit.defaultProps = {
  callbackFunc: _ => _
};
