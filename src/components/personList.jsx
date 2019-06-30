/* jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const persons = res.data;
        this.setState({
          persons,
        });
      });
  }

  render() {
    const {
      persons,
    } = this.state;
    return (
      persons.length
        ? (
          persons.map(person => (
            <ul key={person.id}>
              <li>{person.id}</li>
              <li>{person.name}</li>
              <li>{person.username}</li>
              <li>{person.email}</li>
            </ul>
          )))
        : <h3> No persons </h3>
    );
  }
}

const rootElement1 = document.getElementById('timer');

function ticktime() {
  const time = new Date().toLocaleTimeString();
  const username = 'Emmanuel';
  const name = (
    <h1>
    Hello
      {' '}
      {username}
      {' '}
    the time is:
      {' '}
      {time}
    </h1>
  );
  ReactDOM.render(name, rootElement1);
}

setInterval(ticktime, 1000);


// if (strn===n1) return true
// return false
