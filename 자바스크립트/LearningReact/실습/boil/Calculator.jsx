import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';

const BoilingVerdict = props => {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
};

const toCelsius = fahrenheit => {
  return ((fahrenheit - 32) * 5) / 9;
};

const toFahrenheit = celsius => {
  return (celsius * 9) / 5 + 32;
};

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c',
    };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange = temperature => {
    this.setState({ scale: 'c', temperature });
    console.log('handleCelsius ', this.state);
  };

  handleFahrenheitChange = temperature => {
    this.setState({ scale: 'f', temperature });
    console.log('handleFahrenheit ', this.state);
  };

  componentDidMount() {
    console.log('mount: ', this.state);
  }
  componentDidUpdate() {
    console.log('update: ', this.state);
  }

  render() {
    const { scale, temperature } = this.state;
    const celsius =
      scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </>
    );
  }
}

export default Calculator;
