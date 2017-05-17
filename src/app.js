import React, { Component } from 'react';
import './components/css/main.css';
import Header from './components/Header';
import Time from './components/Time';
import ToDoList from './components/ToDoList';
import OverAll from './components/OverAll';


class App extends Component {

	render () {
		return(
			<section>
				<div id="layer"></div>
			 	<div id="delete-confirmation"></div>
				<Header />
				<Time />
				<ToDoList />
				<OverAll />
			</section>
		);	
	}

}


export default App;