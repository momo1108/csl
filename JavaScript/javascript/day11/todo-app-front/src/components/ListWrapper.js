import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import TodoCards from './TodoCards';
import AddButton from './AddButton';

const url = 'http://localhost:5000/todos';

const ListWrapper = () => {
    const [todo, setTodo] = useState(null);
    const [todos, setTodos] = useState([]);
    const getTodos = async () => {
        const result = await Axios.get(url)
        const { data } = result;
        setTodos(data);
    }
    const postTodos = async (e) => {
        e.preventDefault();
        for(let i=0; i<todos.length; i++){
            if(todos[i].content === todo) {
                alert('이미 존재하는 데이터입니다!');
                return;
            }
        }
        const sample = {
            // TODO: UNIQ Key
            id: `${e.target[0].value}'s id`,
            content: e.target[0].value,
            completed: false
        }

        const result = await Axios.post(url, sample);
        const {data} = result;
        setTodos([...todos, data]);
        setTodo('');
    }
    const viewTodos = (todos) => {
        return (
            todos.map((el,idx) => <li key={el.id}> <input type="checkbox" checked={el.completed} onChange={(e)=>patchCompleted(el.id,e,idx)}/>{el.content}<button onClick={()=>deleteTodos(el.id)}>X</button> </li>)
        )
    }
    // DELETE
    const deleteTodos = async (id) => {
        await Axios.delete(`${url}/${id}`);
        const targetTodo = todos.find(el => el.id === id);
        const idx = todos.indexOf(targetTodo);
        todos.splice(idx,1);
        setTodos([...todos]);
    }
    // 체크박스 onchange
    const patchCompleted = async (id, e, idx) => {
        const data = {
            completed: e.target.checked
        };
        // const targetTodo = todos.find(el => el.id === id);
        // targetTodo.completed = !targetTodo.completed;
        todos[idx].completed = e.target.checked;
        setTodos([...todos])
        await Axios.patch(`${url}/${id}`,{completed: data});
        // https://reactjs.org/docs/events.html
    };
    useEffect(() => {
        getTodos();
    }, []);
    return (
        <>
            <h1>Todo front</h1>
            <AddButton postTodos={postTodos} setTodo={setTodo} todo={todo} />
            {todos? 
            <ul>
                <TodoCards todos={todos} patchCompleted={patchCompleted} deleteTodos={deleteTodos}/>
            </ul>
            : <div>Spinner</div>}
        </>
    )
}

export default ListWrapper;