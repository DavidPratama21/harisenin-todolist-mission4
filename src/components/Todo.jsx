import {Square, SquareCheck, X} from 'lucide-react';

export const Todo = ({todo, onDelete, setDone}) => {
  // console.log(todo.status)
  // console.log(typeof todo.status)

  return (
    <div className='grid grid-cols-[auto_2fr_1fr_1fr_auto] text-sm items-center'>
      
      <button className='self-start mr-1' onClick={setDone}> 
        {todo.status === 'done' ? (
          <Square strokeWidth={1} color='#4CAF50'/>
        ) : (
          <Square strokeWidth={1} color='#757575'/>
        )}
      </button> 
      <p className={`${todo?.status === 'done' ? 'line-through' : ''} self-start`}>
        {todo?.desc}  
      </p> 
      <span className={`rounded font-bold py-1 px-2 w-fit h-fit text-${todo?.priority} bg-${todo?.priority}/25`}>
        {todo?.priority}
      </span>
      <span className='p-0.5 rounded w-fit text-nowrap'>
        {todo?.dueDate}  
      </span>
      {/* delete */}
      <button className='self-start'
        onClick={onDelete}
      >
        <X color='#757575'/>
      </button>
    </div>
  )
}

export default Todo