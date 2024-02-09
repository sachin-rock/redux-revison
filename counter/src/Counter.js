import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { inNumber, deNumber } from './Action/index';
import './Counter.css'; // Import your stylesheet

const Counter = () => {
  const count = useSelector(state => state.changeNumber);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1 className="counter-title">Welcome to the Counter App</h1>
      <div className="counter-buttons">
        <button className="counter-button dec" onClick={() => dispatch(deNumber())}> - </button>
        <input className="counter-input" type="text" value={count} readOnly />
        <button className="counter-button inc" onClick={() => dispatch(inNumber())}> + </button>
      </div>
    </div>
  );
}

export default Counter;
