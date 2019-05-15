import { getStuff } from "service";

class App extends Component {
  defaultProps = {
    getStuff(options, cb) {
      getStuff(options).then(cb);
    }
  };

  // Get some stuff from our async service and re-render when done
  onClick = () =>
    this.props.getStuff(
      {
        /* options */
      },
      response => {
        this.setState({ results: response });
      }
    );

  // ... render here etc
}

// test
test("my async widget", () => {
  const getStuff = jest.fn((_unused, cb) => cb(["hello", "world"]));
  const wrapper = shallow(<App getStuff={getStuff} />);
  wrapper.find(Button).simulate("click");
  expect(wrapper.find(Result).length).toBe(2);
});
