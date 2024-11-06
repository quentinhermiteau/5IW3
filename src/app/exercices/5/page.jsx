"use client";

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  console.log("render");

  function increment(params) {
    setCount(count + 1);
  }

  function decrement(params) {
    setCount(count - 1);
  }

  return (
    <main>
      <div id="notice">
        Utilise le hook useState pour faire fonctionner ce compteur
      </div>
      <span>{count}</span>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </main>
  );
}
