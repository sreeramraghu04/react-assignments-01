import { useState } from "react";
import CounterApp from "./components/CounterApp";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count < 10 ? count + 1 : count);
  };
  const decrement = () => {
    setCount(count > 0 ? count - 1 : count);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <div>
        <CounterApp
          count={count}
          increment={increment}
          decrement={decrement}
          reset={reset}
        />
      </div>
    </div>
  );
}

export default App;
