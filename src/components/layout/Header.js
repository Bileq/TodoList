import React from 'react'


function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
        </header> 
    )
}

const headerStyle = {
    color: '#fff',
    backgroundColor: '#000',
    textAlign: 'center',
    padding: '20px'

}

export default Header