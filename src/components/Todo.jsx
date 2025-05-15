import React from 'react'
import {Square, SquareCheck, X} from 'lucide-react';

// const [done, setDone] = useState(false);



export const Todo = ({task, bgPrio = 'done' , priority, dueDate, done}) => {
  return (
    <div className={`grid lg:items-start text-${done} grid-cols-[auto_2fr_1fr_1fr_auto] gap-1`}>
      {/* Done Btn */}
      <button><Square strokeWidth={1} color='#757575'/></button>
      <p className={`${done ? 'line-through' : ''} self-start`}>{task}</p>
      {/* Priority */}
      <span className={`rounded font-bold py-1 px-2 w-fit text-${bgPrio} bg-${bgPrio}/25`}>{priority}</span>
      {/* Due date */}
      <span className='p-0.5 rounded w-fit text-nowrap'>{dueDate}</span>
      {/* Delete */}
      <button><X color='#757575'/></button>
    </div>
    

    
    
    
    
    
    
    
    
    // <div className={`flex justify-between items-start text-${done}`}>
    //   {/* Todo */}
    //   <div className='flex gap-1 items-start'>
    //     {/* Done Btn */}
    //     <button><Square strokeWidth={1} color='#757575'/></button>
    //     {/* Todo, Priority, Due date */}
    //     <div className='grid lg:flex'>
    //       <p>{task}</p>
    //       {/* Priority & Due date */}
    //       <div className='flex gap-1'>
    //         {/* Priority */}
    //         <span className={`p-0.5 text-${bgPrio} bg-${bgPrio}/25 rounded font-bold`}>{priority}</span>
    //         {/* <span className='p-0.5 text-high bg-high/25 rounded font-bold'>High</span> */}
    //         {/* Due date */}
    //         <span className='p-0.5 text-done bg-done/25 rounded'>{dueDate}</span>
    //       </div>
    //     </div>
    //   </div>
    //   {/* Delete */}
    //   <button><X color='#757575'/></button>
    // </div>
  )
}

export default Todo