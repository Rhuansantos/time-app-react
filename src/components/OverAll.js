import React, { Component } from 'react';
import graph from './img/graph.png';


export default class OverAll extends Component {

	render () {
		return(
		 	<section id="overall">
		 		<h2>Overall</h2>
		 		<img src={graph} className="OverAll-graph" alt="graph"/>
		 	</section>
		);	
	}

}