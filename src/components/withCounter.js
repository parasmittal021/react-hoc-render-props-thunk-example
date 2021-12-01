import { Component } from "react";

const withCounter = (WrappedComponent, incrementCount) => {
  class WithCounter extends Component {
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
      return (
        <WrappedComponent
          {...this.props}
          count={this.state.count}
          incrementHandler={() => this.incrementHandler(incrementCount)}
        />
      );
    }
  }
  return WithCounter;
};
export default withCounter;
