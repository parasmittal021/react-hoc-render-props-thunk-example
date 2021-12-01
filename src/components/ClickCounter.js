import { Component } from "react";

class ClickCounter extends Component {
  render() {
    return (
      <button onClick={() => this.props.incrementHandler(5)}>
        Clicked {this.props.count} times
      </button>
    );
  }
}
export default ClickCounter;
