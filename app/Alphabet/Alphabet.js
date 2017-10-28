import React, {Component} from 'react';

export class Alphabet extends Component {
  constructor(props) {
    super(props);
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.state = {
      letters: letters
    };
  }

  alphabetStartingWithIndex(index) {
    let lastPartOfAlphabet = this.state.letters.slice(index);
    let firstPartOfAlphabet = this.state.letters.slice(0, index);
    let alphabetWithOffset = lastPartOfAlphabet.concat(firstPartOfAlphabet);
    return alphabetWithOffset.join('');
  }

  render() {
    return (
      <div className="container">
          {this.state.letters.slice(1).map((letter, index) => {
            return (
              <div className="alphabetEntry" key={index}>
                <span className="indexNumber">{index + 1}</span>
                <span className="alphabet">{this.alphabetStartingWithIndex(index + 1)}</span>
              </div>
            )
          })}
      </div>
    );
  }
}

export default Alphabet;
