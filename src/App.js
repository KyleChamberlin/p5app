import React, { Component } from 'react';
import logo from './logo.svg';
import testSketch from './testSketch';
import { Sketch } from './components/sketch';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }} onClick={() => { this.setState({ value: (this.state.value + 5) % 256 }) }}>
        <p>
          A simple demonstration of how this component wrapper for p5 works. See <a href='https://github.com/JobLeonard/p5-react'>source code on github</a> for more information.
        </p>
        <Sketch
          sketch={testSketch}
          width={256}
          height={256}
          sketchProps={{ value: this.state.value }}
        />
        <p>
          Click to change current value being passed as a prop to the sketch: {this.state.value}
        </p>

      </div>
    );
  }
}

export default App;
