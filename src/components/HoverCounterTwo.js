import { Component } from "react";
import withCounter from "./withCounter";

class HoverCounterTwo extends Component {
  render() {
    return (
      <div>
        <p onMouseMove={this.props.incrementHandler}>
          Hovered {this.props.count} times
        </p>
      </div>
    );
  }
}
export default withCounter(HoverCounterTwo, 5);
