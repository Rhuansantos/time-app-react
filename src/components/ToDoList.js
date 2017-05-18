import React, { Component } from 'react';
import tasks from './data';


export default class ToDoList extends Component {

 constructor(props) {

    super();
    this.createTask = this.createTask.bind(this);
    // this.state = {
    //   tasks,
    //    newTasks: {},
    // };

    this.state = {
       newTasks: {},
    };

  }

	createTask(event){
		event.preventDefault();

        const newTasks = {
            input: this.taskInput.value,
        }

		const events = {...this.state.NewTasks};
		
		const timestamp = Date.now();
		events[`order-${timestamp}`] = event;

		this.setState({newTasks: events});

		this.taskForm.reset();

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
		 			<form ref={(input) => this.taskForm = input} onSubmit={(e) => this.createTask(e)}>
			 			<p>
				 			<input type="text" id="add-task" placeholder="type here to add a task" 
				 			ref={(input) => { this.taskInput = input}} />
				 			<i className="fa fa-plus-circle" id="addTask" aria-hidden="true" ></i>
			 			</p>
		 			</form>

		 		<ul id="to-do-list">


		 			{
		 				<li>
		 					<input type="text" value={this.state.newTasks.input  } disabled />
		 				</li>
		 			
		 			}

					{ this.state.tasks.map(task =>

			 		<li key={task.id}>
						<input type="text" value={task.input} disabled />
						<span className="deleteTask"><i className="fa fa-minus-circle" aria-hidden="true"></i></span>
					</li>

      				)}


			  {Object
	            .keys(this.state.newTasks)
	            .map((key, i) => 
	                <li key={i}>		
	            		<input key={key} type="text" value={this.state.newTasks.input  } disabled />
	            	</li>
            	)}

		 		</ul>

		 		</section>
		);
}


}