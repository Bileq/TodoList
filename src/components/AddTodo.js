import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: '',
    }
    //add onChange and onSubmit events
    render() {
        return (
            <div>
                <form>
                    <input 
                    type="text"
                    placeholder="Add todo..."
                    name="title"
                    //value={this.state.title}
                    style={addTodoStyle}
                    //onChange={this.onChange()}            
                    />
                    <input 
                    type="submit"
                    value="Submit"
                    style={btnStyle}
                    />
                </form>
            </div>
        )
    }
}

const addTodoStyle = {
    color: '#fff',
    backgroundColor: '#181a1b',
    border: 'none',
    height: '70px',
    width: '80%',
    fontSize: '26px',
    padding: '0 0 0 5%',    
    
}

const btnStyle = {
    border: 'none',
    width: '15%',
    backgroundColor: '#ff1605',
    height: '70px',
    fontSize: '32px',
    cursor: 'pointer',
    color: '#eee',
    
}

export default AddTodo
