import React, { useState } from 'react';
import Header from './Header';
import Counter from './Counter';
import Footer from './Footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  // Intentional Bug 1: Incorrect state update
  // This can cause race conditions and missed updates
  return (
    <div>
      <Header title="Counter App" />
      <Counter count={count} />
      {/* Bug: Using count directly instead of previous state */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* Bug 2: Missing required prop */}
      <Footer />
    </div>
  );
}

export default App; 