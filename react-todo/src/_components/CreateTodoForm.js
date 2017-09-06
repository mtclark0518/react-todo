import React, {Component} from 'react';

class CreateTodoForm extends Component {
	constructor(){
		super()
		this.state = {
			todo: ''
		}
	}

	onInputChange(event){
		console.log(event);
		console.log('create todo input has changed');
		this.setState({
			todo: event.target.value
		});
	}
	onFormSubmit(event) {
		console.log('form submit event started');
		event.preventDefault();
		let newTodo;
		newTodo = this.state.todo;
		this.props.createTodo(newTodo);
		this.setState({
			todo: ''
		});
	}
	
	render(){
		return(
			<div className="createForm todoForm">
				<h2>Create a Todo:</h2>

				<form
					onSubmit={event => this.onFormSubmit(event)}>
					<input
						onChange={event => this.onInputChange(event)}
						placeholder='write your todo here'
						type='text'
						value={this.state.todo} />
					<button type='submit'>create</button>
				</form>
			</div>
		)
	}
}

export default CreateTodoForm;