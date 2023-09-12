import randomColor from 'randomcolor'; /// / import Npm randomcolor Package
import React, { useState } from 'react';
import Container from './Container.js';

// Provides a random color with each click

export default function App() {
  const [color, setColor] = useState('#150a77');
  return (
    <div className="App">
      <h1>Random color generator</h1>

      <Container background={color} />

      <button
        style={{
          padding: '40px',
          borderRadius: '10px',
          backgroundImage: 'linear-gradient(to top, #a8edea 0%, #E3B505 100%)',
          fontSize: 'larger',
        }}
        onClick={() => {
          setColor(randomColor());
        }}
      >
        Generate
      </button>
      <p>Here is the hex name of the random color {color}</p>
    </div>
  );
}
