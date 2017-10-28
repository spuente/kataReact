import React, {Component} from 'react';

export class Alphabet extends Component {
  constructor(props) {
    super(props);
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.state = {
      letters: letters
    };
  }

  alphabetStartingWithIndex(index) {
    let lastPartOfAlphabet = this.state.letters.slice(index);
    let firstPartOfAlphabet = this.state.letters.slice(0, index);
    let alphabetWithOffset = lastPartOfAlphabet.concat(firstPartOfAlphabet);
    return alphabetWithOffset;
  }

  render() {
    return (
      <div className="container">
        {this.state.letters.split('').slice(1).map((letter, index) => {
          return (
            <div className="alphabetEntry" key={index}>
              <span className="indexNumber">{index + 1}</span>
              <span className="alphabet">{this.alphabetStartingWithIndex(index + 1)}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Alphabet;
