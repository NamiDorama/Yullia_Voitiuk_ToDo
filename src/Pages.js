import { RouteForLogin } from './RouteForLogin';
import { RouteForNotLogin } from './RouteForNotLogin';

export class Pages extends Component {
  render() {
    return (
        this.props.login ? <RouteForLogin /> : <RouteForNotLogin setLoginState={this.props.setLoginState} />
    );
  }
}
