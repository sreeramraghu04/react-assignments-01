const CounterApp = ({ count, increment, decrement, reset }) => {
  return (
    <div className="container">
      <div className="buttons">
        <div>
          <button className="btn1" onClick={increment}>
            Increment
          </button>
        </div>
        <div>
          <button className="btn2" onClick={decrement}>
            Decrement
          </button>
        </div>
        <div>
          <button className="btn3" onClick={reset}>
            Reset
          </button>
        </div>
        <h1>{count}</h1>
      </div>
    </div>
  );
};

export default CounterApp;
