import React, { Component } from 'react'

export class TodoItem extends Component {

    itemStyle = () => {
        return {
            color: '#fff',
            borderBottom: '#ff1605 solid 1px',
            padding: '60px 50px 60px 50px',
            fontSize: '26px',
            textDecoration: this.props.todo.completed 
            ? 'line-through' : 'none',
        }
    }

    render() {
        return (
            //Displaying each todo
            <div style={this.itemStyle()}>
                { this.props.todo.title }
                <button style={xStyle}>x</button>
            </div>
        )
    }
}

//To do later
const xStyle = {
    float: 'right',
    backgroundColor: '#ff1605',
    borderRadius: '50%',
    fontSize: '30px',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
}
export default TodoItem

