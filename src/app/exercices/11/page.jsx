"use client";

import { useReducer } from "react";
import Slider from "./Slider";

const initialState = { count: 0, step: 1 };

const reducer = (state, { action, stepValue }) => {
  switch (action) {
    case "increment":
      // return { count: state.count + state.step, step: state.step };
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "reset":
      return initialState;
    case "updateStep":
      return { ...state, step: stepValue };
    default:
      alert("Unhandled action");
      break;
  }
};

export default function Counter() {
  const [countStep, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => dispatch({ action: "increment" });
  const handleDecrement = () => dispatch({ action: "decrement" });
  const handleReset = () => dispatch({ action: "reset" });
  const handleUpdateStep = (step) =>
    dispatch({ action: "updateStep", stepValue: step });

  return (
    <main>
      <div id="notice">
        À l'aide de useEffect et setInterval, faire en sorte que le compteur
        s'incrémente automatiquement toutes les secondes.
      </div>
      <h1>{countStep.count}</h1>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>0</button>
      </div>
      <Slider
        min={1}
        max={10}
        value={countStep.step}
        onChange={handleUpdateStep}
      />
    </main>
  );
}
