import React, {Component} from 'react';


class EditTodoForm extends Component {
	constructor() {
		super();
		this.state = {
			updatedTodoBody: '',
		}
	}
	onInputChange(event){
		console.log('edit todo input has changed');
		this.setState({
			updatedTodoBody: event.target.value,
		});
	}

	onFormSubmit(event) {
		event.preventDefault();
		console.log(this.state);
		console.log('editted todo submitted');
		this.props.onUpdateTodo(this.state.updatedTodoBody, this.props.todo._id);
		this.setState({
			updatedTodoBody: '',
		});

	}
	render() {
		return(
			<div className="editTodoForm">
				<form
					onSubmit={event => this.onFormSubmit(event)}>
					<input
						onChange={event => this.onInputChange(event)}
						placeholder="update todo here"
						type="text"
						value={this.state.updatedTodoBody}
						/>
					<button type="submit">update</button>
				</form>
			</div>
		)
	}
}

export default EditTodoForm;
