import React, { Component } from 'react'

export class TodoItem extends Component {

    itemStyle = () => {
        return {
            color: '#fff',
            borderBottom: '#ff1605 solid 1px',
            padding: '60px 0px 60px 60px',
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
            </div>
        )
    }
}

//To do later
const xStyle = {

}
export default TodoItem

