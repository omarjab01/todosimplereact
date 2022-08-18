import './App.css';
import { useState} from 'react'
import TodoItem from './Components/TodoItem';


function App() {

  const [task, setTask] = useState('') // input field
  const [todo, setTodo] = useState([]) // array to do list


  const addTask = () => {
    const taskItem = {
      id: todo.length ,
      taskTitle : task,
    }
    setTodo([...todo, taskItem])
    setTask('')
  }

  const deleteTask = (id) => {
    console.log(id)
    setTodo(todo.filter((task) => task.id !== id))
    console.log("ciao")
  }

  console.log(todo)

  return (
    <div className="App max-w-sm mx-auto">
      <h1 className='py-4 text-3xl font-semibold'>Todo App</h1>

      <div className='flex flex-row items-center gap-4 justify-between'>
        <input type="text" placeholder='Task' value={task} onChange={(event) => setTask(event.target.value)} className="w-full p-3 border rounded-3xl" />
        <button onClick={() => addTask()} className="bg-blue-500 text-white px-3 py-2 rounded-full text-4xl pt-0">+</button>
      </div>

      {/* Task List */}
      <div className='mt-8 grid grid-cols-1 gap-4'> 
        {
        todo.map((task, index) => (
          <TodoItem
            taskName={task.taskTitle}
            key={task.id}
            id={task.id}
            deleteTask={deleteTask}
          />
        ))
        }
      </div> 
      </div>
  );
}

export default App;
// form
      // todos