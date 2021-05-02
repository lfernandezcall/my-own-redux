import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import {
    handleAdd,
    handleDelete,
    handleToggle
} from '../actions/todos';

class Todos extends React.Component {

    addTodo = (e) => {
        e.preventDefault()

        this.props.dispatch(handleAdd(this.input.value, () => this.input.value = ''))
    }

    toggleTodo = (id) => {
        this.props.dispatch(handleToggle(id))
    }

    removeTodo = (todo) => {
        this.props.dispatch(handleDelete(todo))
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <input
                    type="text"
                    placeholder="Add Todo"
                    ref={(input) => this.input = input}
                />
                <button onClick={this.addTodo}>Add Todo</button>
                <List items={this.props.todos} toggle={this.toggleTodo} remove={this.removeTodo} />
            </div>
        )
    }
}

export default connect((state) => ({ todos: state.todos }))(Todos)

