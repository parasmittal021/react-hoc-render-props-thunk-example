import { Component } from "react";
import withCounter from "./withCounter";

class ClickCounterTwo extends Component {
  render() {
    return (
      <button onClick={this.props.incrementHandler}>
        Clicked {this.props.count} times
      </button>
    );
  }
}
export default withCounter(ClickCounterTwo, 5);
