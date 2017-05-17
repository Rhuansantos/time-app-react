import React, { Component } from 'react';
import tasks from './data';


export default class ToDoList extends Component {

 constructor(props) {

    super(props);

    this.state = {
      tasks,
    };

  }

	createTask(event){
		event.preventDefault();
		
		console.log(this.taskInput.value);

		const timestamp = Date.now();

		let newTask = this.taskInput.value;
		this.setState({newTask});
	}

	updateTask(){

	}

	deleteTask(){

	}

	editTask(){

	}

	render() {
		return (
				<section id="tasks">
		 		<h2>Tasks</h2>
					<span className="alert"></span>
		 			<form onSubmit={(e) => this.createTask(e)}>
			 			<p>
				 			<input type="text" id="add-task" placeholder="type here to add a task" 
				 			ref={(input) => { this.taskInput = input}} />
				 			<i className="fa fa-plus-circle" id="addTask" aria-hidden="true" ></i>
			 			</p>
		 			</form>

		 		<ul id="to-do-list">

					{ this.state.tasks.map(task =>

			 		<li key={task.id}>
						<input type="text" value={task.input} disabled />
						<span className="deleteTask"><i className="fa fa-minus-circle" aria-hidden="true"></i></span>
					</li>

      				)}

		 		</ul>

		 		</section>
		);
}


}