import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/ValidationComponent';
import Char from './CharComponent/CharComponent';

class App extends Component {

  state = {
    length: 0,
    inputChar: '',
    char: ''
  }

  textLengthDisplayHandler = (event) => {
    const len = event.target.value.length;
    const chars = event.target.value;
    this.setState({
      length: len,
      inputChar: chars,
      char: chars
    });
    // console.log(this.state.char);
  }

  charDeleteHandler = (event) => {
    const text = this.state.inputChar.split('');
    let currentChar = event.target.textContent;
    text.splice(currentChar, 1);
    const updatedText = text.join('');
    this.setState({inputChar: updatedText});
  }

  render() {
    return (
      <div className="App">
        <label>Enter Any Text: </label>
        <input type="text"
          value={this.state.inputChar}
          onChange={(event) => this.textLengthDisplayHandler(event)}
        />
        <h3>Text Length - {this.state.length}</h3>
        <Validation length={this.state.length}/>
        <Char characters={this.state.char}
          click={(event) => this.charDeleteHandler(event)}
        />
      </div>
    );
  }
}

export default App;
