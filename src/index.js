import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/main.css';
import Header from './components/Header';
import Time from './components/Time';
import ToDoList from './components/ToDoList';
import OverAll from './components/OverAll';

ReactDOM.render(
	<section>
		<Header />
		<Time />
		<ToDoList />
		<OverAll />
	</section>,
  document.getElementById('root')
);