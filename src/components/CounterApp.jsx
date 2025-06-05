const CounterApp = ({ count, increment, decrement, reset }) => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="bg-red-400 w-100 p-20 flex flex-col items-center rounded-2xl">
      <div className="flex items-center text-5xl font-bold text-white">
        <h1>{count}</h1>
      </div>
      <div className="flex flex-row justify-center gap-10 mt-10">
        <div>
          <button className="bg-white p-4" onClick={increment}>
            Increment
          </button>
        </div>
        <div>
          <button className="bg-white p-4" onClick={decrement}>
            Decrement
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CounterApp;
