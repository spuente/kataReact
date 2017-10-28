import React, {Component} from 'react';

class Encryption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alphabetForHint: 'OPQRSTUVWXYZABCDEFGHIJKLMN',
      originalAlphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    };
  }

  decryptWithAlphabet(encryptedText) {
    return encryptedText
    .split('')
    .map(t => {
      let index = this.state.alphabetForHint.indexOf(t);
      return this.state.originalAlphabet[index];
    })
    .reduce((allLetters, letter) => allLetters.concat(letter));
  }

  render() {
    return (
      <div className="container">
        <div className="decryptedResult">
          {this.decryptWithAlphabet('PCAPO')}
        </div>
      </div>
    );
  }
}

export default Encryption;
