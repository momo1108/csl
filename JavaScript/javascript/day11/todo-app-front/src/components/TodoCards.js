import React, { useState, useEffect } from 'react';
import './TodoCards.css';

const TodoCards = (props) => {
    return (
        <div className="todo-list">
            <ul>
                {props.todos.map((el, idx) => {
                    return (
                        <li key={el.id}>
                            <input type="checkbox" checked={el.completed} onChange={(e) => props.patchCompleted(el.id, e, idx)} />{el.content}
                            <button onClick={() => props.deleteTodos(el.id)}>X</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoCards;