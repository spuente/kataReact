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
    .map(e => this.state.alphabetForHint.indexOf(e))
    .map(e => this.state.originalAlphabet[e])
    .join('');
    // .reduce((x, y) => x+y);
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
