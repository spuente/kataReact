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
    return 'abcdefghijklmnopqrstuvwxyz';
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
