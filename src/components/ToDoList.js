import React, { Component } from 'react';


export default class ToDoList extends Component {

 constructor(props) {

 	 super(props);
 }

render() {
	return (
		<div>
			<section id="tasks">
	 		<h2>Tasks</h2>
				<span class="alert"></span>
	 			<p>
		 			<input type="text" id="add-task" placeholder="type here to add a task" />
		 			<i id="addTask" class="fa fa-plus-circle" id="addTask" aria-hidden="true" ></i>
	 			</p>

	 		<ul id="to-do-list">
		 		<li>
					<input type="text" value="heeyyyy" disabled />
				</li>
				<span data-id="" class="deleteTask"><i class="fa fa-minus-circle" aria-hidden="true"></i></span>
	 		</ul>

	 		</section>
 		</div>
	);
}


}