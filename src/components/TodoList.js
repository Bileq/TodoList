import React, { Component } from 'react'
import TodoItem from './TodoItem'

export class TodoList extends Component {
    render() {
        //Mapping through todos and each one sending to TodoItem
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} tickComplete={this.props.tickComplete}
             delTodo={this.props.delTodo}
            />
        ));
    }
}

export default TodoList

