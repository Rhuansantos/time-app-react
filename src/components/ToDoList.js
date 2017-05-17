import React, { Component } from 'react';



const tasks = [

	{	
		 id: "1",
		 input: "Finish the front end"
	},

	{	
		id: "2",
	    input: "Use the localStorage to store the data"
	},
	{	
		id: "3",
	    input: "Use babel to support es5"
	},
	{	
		id: "4",
	    input: "load the json for initial data"
	}

];

export default class ToDoList extends Component {

 constructor(props) {

    super(props);

    this.state = {
      tasks,
      newTodo: "",
    };

  }

	createTask(event){
		event.preventDefault();
		
		console.log(this.taskInput.value);
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