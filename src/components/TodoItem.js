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
            backgroundColor: this.props.todo.completed
            ? '#050505' : '#181a1b',
        }
    }


    render() {
        const { id, title } = this.props.todo;
        return (
            //Displaying each todo
            <div style={this.itemStyle()}>
                <input type="checkbox" onChange={this.props.tickComplete.bind(this, id)}></input>
                { title }
                <button style={xStyle}>x</button>
            </div>
        )
    }
}

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

