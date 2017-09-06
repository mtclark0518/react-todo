import React, {Component} from 'react';
import TodoModel from '../_models/Todo';
import TodoList from '../_components/TodoList';
import CreateTodoForm from '../_components/CreateTodoForm';


class TodosContainer extends Component {
	constructor() {
		super();
		this.state = {
			todos: []
		};
		
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData(){
		TodoModel.all().then( (res) => {
			this.setState({
				todos: res.todos
			});
		});
	}

	createTodo(newBody) {
		let newTodo = {
			body: newBody,
			completed: false
		};

		TodoModel.create(newTodo).then((res) => {
			console.log('created todo', res);
			let todos = this.state.todos;
			let newTodos = todos.push(res);
			this.setState({newTodos});

		});
	}
	deleteTodo(todo) {
		console.log('deleting todo here', todo);
		TodoModel.delete(todo).then((res) => {
			let todos = this.state.todos.filter(function(todo) {
				return todo._id !== res._id
			});
			this.setState({todos})
		});
	}
	updateTodo(todo, id) {
		TodoModel.update(todo, id).then((res) => {
			this.fetchData();
			let todos = this.state.todos;
			this.setState({todos});
		 });
	}

	render() {
		return(
			<div className='todosContainer'>
				< CreateTodoForm
				createTodo={this.createTodo.bind(this)} />
				< TodoList
					todos={this.state.todos}
					onDeleteTodo={this.deleteTodo.bind(this)}
					onUpdateTodo={this.updateTodo.bind(this)} />
			</div>
		)
	}
}

export default TodosContainer;