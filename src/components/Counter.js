import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementHandler = this.incrementHandler.bind(this);
    this.state = {
      count: 0,
    };
  }
  incrementHandler(incrementCount) {
    this.setState((prevState) => ({
      count: prevState.count + incrementCount,
    }));
  }
  render() {
    return <>{this.props.render(this.state.count, this.incrementHandler)}</>;
  }
}
export default Counter;
