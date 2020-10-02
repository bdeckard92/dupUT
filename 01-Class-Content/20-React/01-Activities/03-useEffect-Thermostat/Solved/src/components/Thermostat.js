// Import useEffect from React.
import React, { useState, useEffect } from 'react';

function Thermostat() {

  // We set the default state of temp to 75 degrees.
  const [temp, setTemp] = useState(75);

  // We write our useEffect hook.
  useEffect(() => {
    
    // The document.title will be set when the page renders.
    document.title = `${temp}° Fahrenheit`;
  });

  return (
    <div className="card text-center">
      <div className="card-header bg-warning text-white">
        Building Temperature
      </div>
      <div className="card-body">
        <p className="card-text">
          Current temperature: {temp} degrees Fahrenheit
        </p>
        <button className="btn btn-danger" onClick={() => setTemp(temp + 1)}>
          Raise temperature
        </button>{' '}
        <button className="btn btn-primary" onClick={() => setTemp(temp - 1)}>
          Lower temperature
        </button>
      </div>
    </div>
  );
}

export default Thermostat;
