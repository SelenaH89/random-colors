import randomColor from 'randomcolor'; /// / import pnpm randomcolor Package
import React, { useState } from 'react';

// Provides a random color with each click

export default function ColorGenerator() {
  const [color, setColor] = useState('#150a77');

  const generateRandomColor = () => {
    const random = randomColor();
    setColor(random);
  };

  return (
    <div className="color-generator">
      <div
        style={{
          height: '100vh',
          width: '100vw',
          backgroundColor: color,
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button
          style={{
            padding: '40px',
            borderRadius: '10px',
            backgroundImage:
              'linear-gradient(to top, #a8edea 0%, #E3B505 100%)',
            fontSize: 'larger',
            marginBottom: '20px',
          }}
          onClick={generateRandomColor}
        >
          Generate Random Color
        </button>
        <p>
          <strong>Generated Color: {color}</strong>
        </p>
      </div>
    </div>
  );
}
