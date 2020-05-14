import React, { Component } from 'react'
import Header from './components/layout/Header'
import TodoList from './components/TodoList'
 

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Do homework',
        completed: false,
      },
      {
        id: 2,
        title: 'Buy new keyboard',
        completed: false,
      },
      {
        id: 3,
        title: 'Go for a walk with dog',
        completed: false,
      }
    ]
  }



  render() {
    return (
      <div className="app">
        <Header />
        <TodoList />
      </div>
    )
  }
}

export default App