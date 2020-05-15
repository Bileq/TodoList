import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        return (
            //Displaying each todo
            <div style={itemStyle}>
                { this.props.todo.title }
            </div>
        )
    }
}

const itemStyle = {
    color: '#fff',
    borderBottom: '#ff1605 solid 1px',
    padding: '60px 0px 60px 60px',
    fontSize: '26px',
}
//To do later
const xStyle = {

}
export default TodoItem

