import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/main.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import OverAll from './components/OverAll';

ReactDOM.render(
	<section>
		<Header />
		<ToDoList />
		<OverAll />
	</section>,
  document.getElementById('root')
);