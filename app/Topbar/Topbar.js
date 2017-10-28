import React, {Component} from 'react';
import Link from 'react-router-dom/Link';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {options: [
      {to: '/', text: 'Main'},
      {to: '/alphabet', text: 'Alphabet'},
      {to: '/encryption', text: 'Encryption'}
    ]};
  }

  render() {
    return (
      <ul>
        <li><Link to="/">Main</Link></li>
        <li><Link to="/alphabet">Alphabet</Link></li>
        <li><Link to="/encryption">Encryption</Link></li>
      </ul>
    );
  }
}

export default Topbar;
