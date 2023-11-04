import './App.css';
import useCounter from './component/useCounter';

function App() {
 const [count, add, lessen, clear] = useCounter()
  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={add}>Increase</button>
      <button onClick={lessen}>Decrease</button>
      <button onClick={clear}>Set to Zero</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
