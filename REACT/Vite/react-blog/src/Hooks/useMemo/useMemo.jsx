import React, { useState, useMemo } from 'react';

function UseMemo() {
  const [numbers, setNumbers] = useState([10, 20, 30, 40, 50]);
  const [count, setCount] = useState(0);

  // Simulate an expensive calculation
  const findMax = (nums) => {
    console.log('🔄 Calculating max...');
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log("Testing")
      } // simulate delay
      if (nums[i] > max) {
        max = nums[i];
      }
    }
    return max;
  };

  // useMemo to avoid recalculating unless numbers change
  const maxNumber = useMemo(() => findMax(numbers), [numbers]);

  // Add a new random number to the list
  const addNumber = () => {
    const newNumber = Math.floor(Math.random() * 100);
    setNumbers([...numbers, newNumber]);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🧠 useMemo Example</h1>
      <p><strong>Numbers:</strong> {numbers.join(', ')}</p>
      <p><strong>Max Number:</strong> {maxNumber}</p>
      <button onClick={addNumber}>➕ Add Random Number</button>
      <button onClick={() => setCount(count + 1)}>🔁 Re-render</button>
      <p>Re-render count: {count}</p>
    </div>
  );
}

export default UseMemo;
