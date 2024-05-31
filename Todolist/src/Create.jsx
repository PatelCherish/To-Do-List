// import React, { useState } from 'react'
// import axios from 'axios';
// import './App.css'

// function Create() {

//   const [task, setTask] = useState('');

//   const handleAdd = () => {
//     axios.post('http://localhost:4000/api/add', {task : task})
//     .then(result =>
//       {
//         console.log(result.data);
//         setTask('');
//       })
//     .catch(err => {
//       console.log(err)
//     });
//   }

//   return (
//     <div className='create_form'>
//       <input type="text" placeholder='Enter Your task' value={task} onChange={(e) => setTask(e.target.value)}/>
//       <button type='button' onClick={handleAdd}>Add</button>
//     </div>
//   )
// }

// export default Create;
// Create.jsx
import React, { useState } from 'react'
import axios from 'axios';
import './App.css'

function Create({ onTaskAdded }) {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    axios.post('http://localhost:4000/api/add', { task: task })
      .then(result => {
        // console.log(result.data);
        setTask('');
        location.reload();
        // Call the callback function to refresh todos
        onTaskAdded();
      })
      .catch(err => {
        console.log(err)
      });
  }

  return (
    <div className='create_form'>
      <input type="text" placeholder='Enter Your task' value={task} onChange={(e) => setTask(e.target.value)} />
      <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create;
