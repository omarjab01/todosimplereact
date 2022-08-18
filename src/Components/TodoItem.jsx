import React from 'react'

const TodoItem = (props) => {
  return (
    <div className='flex flex-row items-center justify-between p-4 rounded-xl bg-blue-100'>
        <h3 className='font-semibold'>{props.taskName}</h3>
        <button onClick={() => props.deleteTask(props.id)} className="bg-red-500 text-white px-3 py-2 rounded-full text-sm">Delete</button>
    </div>
  )
}

export default TodoItem