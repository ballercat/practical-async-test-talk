import { getSamples } from "service";

class App extends Component {
  // Get some samples from our async service and re-render when done
  onClick = () =>
    getSamples({
      /* this call is mocked */
    }).then(response => {
      this.setState({ samples: response });
    });

  render() {
    /* render samples here */
  }
}
