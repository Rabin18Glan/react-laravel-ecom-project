import { useState, useEffect } from 'react';

// Define your custom hook
function useCount(initialValue:number) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    // Your side effect code here
    console.log('Value changed:', value);
  }, [value]);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  return {
    value,
    increment,
    decrement
  };
}

export default  useCount;