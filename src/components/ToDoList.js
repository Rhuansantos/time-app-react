import React, { Component } from 'react';
import tasks from './data';
import _ from 'lodash';


export default class ToDoList extends Component {

 constructor(props) {

    super();
    this.createTask = this.createTask.bind(this);

    this.state = {
       tasks,
    };

  }

  componentWillMount() {
    const id = _.uniqueId("prefix-");
    this.setState({id: id});
}


	createTask(event){
		event.preventDefault();
		const id = this.state.id;

		const events = {...this.state.tasks};

        const inputTasks = {
        	id: id,
            input: this.taskInput.value,
        }
        // const tasks = this.taskInput.value;


		
		const timestamp = Date.now();
		events[`order-${timestamp}`] = inputTasks;

		this.setState({tasks: events});

		console.log(events);

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

	

			  {Object
	            .keys(this.state.tasks)
	            .map((index, obj) => 
	                <li key={index}>		
	            		<input type="text" value={this.state.tasks[index].input} disabled />
	            	</li>
            	)}


		 		</ul>

		 		</section>
		);
}


}