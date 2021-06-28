import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

const TemperatureInput = ({ temperature, scale, onTemperatureChange }) => {
  const onChange = e => {
    onTemperatureChange(e.target.value);
    console.log('input: ', temperature);
  };
  return (
    <form>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={onChange} />
    </form>
  );
};

export default TemperatureInput;
