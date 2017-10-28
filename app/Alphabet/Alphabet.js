import React, {Component} from 'react';

export class Alphabet extends Component {
  constructor(props) {
    super(props);
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
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
      <div>
        <div className="container">
          Alphabet Page
        </div>
        <span className="first">
          abc
        </span>
      </div>
    );
  }
}

export default Alphabet;
