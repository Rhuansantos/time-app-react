import React, { Component } from 'react';


export default class Time extends Component {

	render () {
		return (

	 	<section id="time">
			<h2>Progress</h2>

			<div class="progress-wrap progress" data-progress-percent="25">
			  <div class="progress-bar progress">25%</div>
			</div>


	 		 <progress></progress>
		 		<ul>
		 			<li>
		 				<h3>Time spent 
		 					<span>58:37</span>
		 				</h3>
					</li>
		 			<li>
		 				<h3>DeadLine 
		 					<span>18/12/17</span>
		 				</h3>
					</li>
		 			<li>
		 				<h3>Notes 
		 					<span>5 Notes</span>
		 				</h3>
					</li>
		 		</ul>
	 		</section>

			);
	}
}