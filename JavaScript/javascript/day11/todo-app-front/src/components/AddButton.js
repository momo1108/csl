import React, { useState, useEffect } from 'react';

const AddButton = (props) => {
    return (
        <form onSubmit={props.postTodos}>
            <input type="text" onChange={e => props.setTodo(e.target.value)} value={props.todo} />
            <input type="submit" />
        </form>
    )
}

export default AddButton;