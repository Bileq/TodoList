import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: '',
    }
    //add onChange and onSubmit events
    /* 
    onSubmit = e => {
        e.preventDefault();

    }
    */
    /*
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }
    */
    
    render() {
        return (
            <div>
                <form /*onSubmit={this.onSubmit()} */>
                    <input 
                    type="text"
                    placeholder="Add todo..."
                    name="title"
                    style={addTodoStyle}
                    //value={this.state.title}
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
