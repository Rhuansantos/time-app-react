import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ToDoList from './components/ToDoList';
import OverAll from './components/OverAll';

ReactDOM.render(
	<section>
		<ToDoList />
		<OverAll />
	</section>,
  document.getElementById('root')
);