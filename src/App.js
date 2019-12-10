import React, { useEffect } from 'react';
import './app.scss'
import HoverPlane from './components/HoverPlane';

function App() {
  return (
    <div className="App">
      <HoverPlane>
      <svg viewBox="0 0 36 36">
        <path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831

            "
          fill="none"
          stroke="#444"
          strokeWidth="1"
        />
      </svg>
      </HoverPlane>
    </div>
  );
}

export default App;
