import React, { Component } from 'react';
import tasks from './data';
import _ from 'lodash';

let editInput = null;
export default class ToDoList extends Component {

 constructor(props) {

    super();
    this.createTask = this.createTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);

    this.state = {
       tasks,   
    };

  }

	createTask(event){
		event.preventDefault();

		const id = _.uniqueId("id-");
		const timestamp = Date.now();
		const events = {...this.state.tasks};
		const inputTasks = {
        	id: id,
            input: this.taskInput.value,
        }
		
		events[`${timestamp}`] = inputTasks;

		this.setState({tasks: events});

		this.taskForm.reset();

	}

	updateTask(){

	}

	deleteTask(key)  {
		const events = {...this.state.tasks};
	 	delete events[key];
		this.setState({ tasks: events});
	}

	editTask(key, value){

		console.log(key, value);
		const events = {...this.state.tasks};

		events[key].input = "newwww";
		
		this.setState({ tasks: events});
	}



	render() {
		
		return (
			<section id="tasks">
	 			<h2>Tasks</h2>
					<span className="alert"></span>
			 			<form ref={(input) => this.taskForm = input} onSubmit={(e) => this.createTask(e)}>
				 			<p>
					 			<input type="text" id="add-task" value={this.editInput} placeholder="type here to add a task" 
					 			ref={(input) => { this.taskInput = input}} />
					 			<i onClick={(e) => this.createTask(e)} className="fa fa-plus-circle" id="addTask" aria-hidden="true" ></i>
				 			</p>
			 			</form>

	 		<ul id="to-do-list">

			  {Object
	            .keys(this.state.tasks)
	            .map((index, obj) => 
	                <li key={index}>		
	            		<input type="text" value={this.state.tasks[index].input} disabled />
	            		<span onClick={() => this.deleteTask(index)} className="deleteTask"><i className="fa fa-minus-circle" aria-hidden="true"></i></span>
	            		<span onClick={() => this.editTask(index, this.state.tasks[index].input)} className="editTask"><i className="fa fa-pencil" aria-hidden="true"></i></span>
	            	</li>
            	)}


	 		</ul>

 			</section>
		);
}


}