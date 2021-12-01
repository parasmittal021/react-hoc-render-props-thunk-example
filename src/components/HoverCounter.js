import { Component } from "react";

class HoverCounter extends Component {
  render() {
    return (
      <div>
        <p onMouseMove={() => this.props.incrementHandler(5)}>
          Hovered {this.props.count} times
        </p>
      </div>
    );
  }
}
export default HoverCounter;
