import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [Numbers, setNumbers] = useState({ P: '', R: '', N: '' });
  const [Result, setResult] = useState();
  const chnageHandler = (e) => {
    setNumbers((val) => {
      return {
        ...val,
        [e.target.name]: e.target.value,
      };
    });
  };

  const SubmitHandler = () => {
    let P = parseInt(Numbers.P);
    let R = parseInt(Numbers.R) / 12 / 100;
    let N = parseInt(Numbers.N) * 12;
    // p(r(1+r)^n/((1+r)^n)-1))
    let calculation = (P * (R * Math.pow(1 + R, N))) / (Math.pow(1 + R, N) - 1);
    setResult(calculation);
  };

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Mortgage calculator</h1>
      <div className="card">
        <div className="group">
          <label>Principal Loan Amount</label>
          <input
            type="number"
            value={Numbers.P}
            name="P"
            onChange={chnageHandler}
          />
        </div>
        <div className="group">
          <label>Intrest Rate (%)</label>
          <input
            type="number"
            value={Numbers.R}
            name="R"
            onChange={chnageHandler}
          />
        </div>
        <div className="group">
          <label>Length of Loan (Years)</label>
          <input
            type="number"
            value={Numbers.N}
            name="N"
            onChange={chnageHandler}
          />
        </div>
        <button onClick={SubmitHandler}>Calculate</button>
        <h1 className="res">
          Your Monthly Mortgage payment will be ₹{' '}
          {Result ? (
            <span style={{ color: '#00D8FF' }}>{Math.floor(Result)} </span>
          ) : (
            ''
          )}
        </h1>
      </div>
    </>
  );
}

export default App;
