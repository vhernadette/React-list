import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const getTasks = () => {
    axios.get('http://localhost:3001/tasks')
      .then(res => {
        console.log(res);
        setTasks(res.data);
      })
      .catch(err => console.error(err));
  }

  const addTasks = () => {
    axios.post('http://localhost:3001/tasks', {task})
      .then(res => {
        console.log(res);
        getTasks();
      })
      .catch(err => console.error(err));
    setTask('')
  }

  const deleteTask = (id) => {
    const deleteConfirm = prompt('Are you sure you want to delete this task? Type yes to continue');
    console.log(tasks);
    if (deleteConfirm){
      axios.delete(http://localhost:3001/tasks/${id})
      .then(res => {
        console.log(res);
        getTasks();
      })
      .catch(err => console.error(err));
    }
  }

  const completeTask = (id) => { 
    axios.patch(http://localhost:3001/tasks/${id}, {completed: true})
      .then(res => {
        console.log(res);
        getTasks();
      })
      .catch(err => console.error(err));
  }

  const pendingTask = (id) => {
    axios.patch(http://localhost:3001/tasks/${id}, {completed: false})
      .then(res => {
        console.log(res);
        getTasks();
      })
      .catch(err => console.error(err));
  }


  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="App">
      <h1>Tasks</h1>
      <input type="text" placeholder="Enter task" value={task} onChange={(event) => setTask(event.target.value)} />
      <button onClick={() => addTasks()}>Add Tasks</button>
      <ul>
        {tasks.map(task => 
        <div>
          <li key={task.id}>{task.task} - {task.completed ? 'Completed' : 'Pending'} 
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
          {
            task.completed ? null : <button onClick={() => completeTask(task.id)}>Set As Complete</button>
          }
          {
            task.completed ? <button onClick={() => pendingTask(task.id)}>Set As Pending</button> : null
          }
          
        </div>
        )}
      </ul>
    </div>
  );
}

export default App;
