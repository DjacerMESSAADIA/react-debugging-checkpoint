import React from 'react';

function Counter({ count }) {
  // Intentional Bug: Component will crash if count is undefined
  // No default value or error checking
  return (
    <div>
      <p>Current Count: {count * 2}</p>
    </div>
  );
}

export default Counter; 