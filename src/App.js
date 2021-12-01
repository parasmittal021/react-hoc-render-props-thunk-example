import "./App.css";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import HoverCounter from "./components/HoverCounter";
import { Provider } from "react-redux";
import store from "./redux/store";
import UserContainer from "./components/UserContainer";
import HoverCounterTwo from "./components/HoverCounterTwo";
import ClickCounterTwo from "./components/ClickCounterTwo";
function App() {
  return (
    <Provider store={store}>
      <ClickCounterTwo id="clickCounter-id" />
      <HoverCounterTwo id="hoverCounter-id" />
      <Counter
        render={(count, incrementHandler) => (
          <ClickCounter count={count} incrementHandler={incrementHandler} />
        )}
      />
      <Counter
        render={(count, incrementHandler) => (
          <HoverCounter count={count} incrementHandler={incrementHandler} />
        )}
      />
      <UserContainer />
    </Provider>
  );
}

export default App;
