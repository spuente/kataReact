import React, {Component} from 'react';

class Encryption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alphabet: 'OPQRSTUVWXYZABCDEFGHIJKLMN'
    };
  }

  decryptWithAlphabet() {
    return "BATMAN";
  }

  render() {
    return (
      <div className="container">
        Encryption page
      </div>
    );
  }
}

export default Encryption;
