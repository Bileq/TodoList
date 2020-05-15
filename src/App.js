import React, { Component } from 'react'
import Header from './components/layout/Header'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import { v4 as uuidv4 } from 'uuid';
 

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Do homework',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Buy new keyboard',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Go for a walk with dog',
        completed: false,
      }
    ]
  }

  //changing state of todos.completed
  tickComplete = id => {
    this.setState({ todos: this.state.todos.map( todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }) });
}

  //Deleting todo
  delTodo = id => {
    this.setState({todos: [...this.state.todos.filter( todo => todo.id !== id)]})
  }

  //Adding todo
  addTodo = title => {
    const newInput = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    //adding this const newInput to existing array
    this.setState({todos: [...this.state.todos, newInput]})
  }

  render() {
    return (
      <div className="app">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} tickComplete={this.tickComplete}
        delTodo={this.delTodo}
        />
      </div>
    )
  }
}

export default App