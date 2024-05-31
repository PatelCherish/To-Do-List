  import React, { useEffect, useState } from 'react'
  import Create from './Create'
  import './App.css'
  import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';
  import axios from 'axios';
  function Home() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:4000/api/get')
        .then(response => {
          console.log(response.data); // Log the entire response for debugging
          if (response.data && Array.isArray(response.data.data)) {
            setTodos(response.data.data);
          } else {
            setTodos([]);
          }
        })
        .catch(err => {
          console.log('Error fetching todos:', err);
          setTodos([]);
        });
    }, []);

    useEffect(() => {
      console.log(todos); // Check if todos are updated
    }, [todos]);

    const handleEdit = (id) => {
      axios.put(`http://localhost:4000/api/update/${id}`)
      .then(result => {
        location.reload()
      })
      .catch(err => {
        console.log('Error fetching todos:', err);
      });
    }

    const handleDelete = (id) => {
      axios.delete(`http://localhost:4000/api/delete/${id}`)
      .then(result => {
        location.reload()
      })
      .catch(err => {
        console.log('Error fetching todos:', err);
      });
    }

    return (
      <div>
        <h1 className='home'>To - Do List</h1>
        <Create />
        <div className='task-container'>
        {
          todos.length === 0 ?
          (<div><h2>No Record</h2></div>):(
          todos.map(todo => (
            <div className='task' key={todo._id}>
              <div className="checkbox" onClick={() => handleEdit(todo._id)}>
                {
                  todo.done ?
                  <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
                  :<BsCircleFill className='icon'/>
                }
                <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
              </div>
              <div>
                <span><BsFillTrashFill className='icon'
                 onClick={()=>handleDelete(todo._id)}/></span>
              </div>
            </div>
          )))
        }
      </div>
      </div>
    );
  }
  export default Home
