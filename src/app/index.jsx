/* jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';
import PersonList from '../components/personList';
// import ticktime from '../components/timerCounter';
import PersonPost from '../components/personPost';

ReactDOM.render(<PersonList />, document.getElementById('list'));
// ReactDOM.render(<ticktime />,  document.getElementById('timer'));
ReactDOM.render(<PersonPost />, document.getElementById('post'));
