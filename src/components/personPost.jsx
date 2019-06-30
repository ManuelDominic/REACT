/* jshint esversion: 6 */

import React from 'react';
import axios from 'axios';

export default class PersonPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleChange = (event) => {
      this.setState({ name: event.target.value });
    };

    this.handleSubmit = (event) => {
      event.preventDefault();

      const { name } = this.state;
      const user = {
        name,
      };

      axios.post('https://jsonplaceholder.typicode.com/users', { user })
        .then((res) => {
          console.log(res.data);
        });
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
