import React from 'react'
import {Square, SquareCheck, X} from 'lucide-react';

export const Todo = ({task, bgPrio = 'done' , priority, dueDate, done}) => {
  return (
    <div className={`flex justify-between items-start text-${done}`}>
      {/* Todo */}
      <div className='flex gap-1 items-start'>
        {/* Done Btn */}
        <button><Square strokeWidth={1} color='#757575'/></button>
        {/* Todo, Priority, Due date */}
        <div className='grid'>
          <p>{task}</p>
          {/* Priority & Due date */}
          <div className='flex gap-1'>
            {/* Priority */}
            <span className={`p-0.5 text-${bgPrio} bg-${bgPrio}/25 rounded font-bold`}>{priority}</span>
            {/* <span className='p-0.5 text-high bg-high/25 rounded font-bold'>High</span> */}
            {/* Due date */}
            <span className='p-0.5 text-done bg-done/25 rounded'>{dueDate}</span>
          </div>
        </div>
      </div>
      {/* Delete */}
      <button><X color='#757575'/></button>
    </div>
  )
}

export default Todo